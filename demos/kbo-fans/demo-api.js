/*
 * KBO Fans 체험판 전용 합성 API.
 * backend API 응답 스키마(ApiEnvelope)에 맞춘 가상 경기·가상 선수 데이터를 브라우저 안에서 생성한다.
 * 실제 경기 기록을 복제하지 않으며 네트워크 요청을 보내지 않는다.
 */
(function () {
  'use strict';

  var API_ORIGIN = 'https://demo.invalid/api';
  var T0_KEY = 'kbo-demo.t0';
  var PA_TICK_MS = 5000;
  var IMG = 'demo-assets/player.png';

  var TEAMS = [
    { id: 'LG', name: 'LG 트윈스', short: 'LG', stadium: '잠실' },
    { id: 'KT', name: 'KT 위즈', short: 'KT', stadium: '수원' },
    { id: 'SK', name: 'SSG 랜더스', short: 'SSG', stadium: '문학' },
    { id: 'SS', name: '삼성 라이온즈', short: '삼성', stadium: '대구' },
    { id: 'NC', name: 'NC 다이노스', short: 'NC', stadium: '창원' },
    { id: 'HH', name: '한화 이글스', short: '한화', stadium: '대전' },
    { id: 'LT', name: '롯데 자이언츠', short: '롯데', stadium: '사직' },
    { id: 'HT', name: 'KIA 타이거즈', short: 'KIA', stadium: '광주' },
    { id: 'OB', name: '두산 베어스', short: '두산', stadium: '잠실' },
    { id: 'WO', name: '키움 히어로즈', short: '키움', stadium: '고척' },
  ];
  var TEAM = {};
  TEAMS.forEach(function (t, i) { t.index = i; TEAM[t.id] = t; });

  // 가상 선수명: 순우리말 이름 조합. 실제 로스터와의 충돌은 빌드 검사(check_bundle.py)에서 확인한다.
  var SURNAMES = ['한', '서', '문', '배', '표', '노', '곽', '마', '탁', '변', '방', '길', '봉', '추'];
  var GIVEN = ['가온', '누리', '다솜', '라온', '마루', '바다', '새벽', '아라', '자람', '찬솔', '하늘', '한결', '도담',
    '벼리', '온새', '윤슬', '이든', '지음', '해찬', '가람', '나래', '단비', '미르', '보람', '솔찬', '여울', '은결',
    '초롱', '푸름', '힘찬'];
  var POSITIONS = [['CF', '중견수', '중견'], ['2B', '2루수', '2루'], ['RF', '우익수', '우익'], ['1B', '1루수', '1루'],
    ['DH', '지명타자', '지명'], ['3B', '3루수', '3루'], ['LF', '좌익수', '좌익'], ['C', '포수', '포수'], ['SS', '유격수', '유격']];

  function hash(text) {
    var h = 2166136261;
    for (var i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    var s = typeof seed === 'string' ? hash(seed) : seed >>> 0;
    return function () {
      s = (s + 0x6d2b79f5) >>> 0;
      var t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffled(list, r) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  function fixed(v, d) { return Number(v).toFixed(d); }
  function pad(n) { return String(n).padStart(2, '0'); }

  // ── 시간 ──
  function kstDate(ms) { return new Date((ms === undefined ? Date.now() : ms) + 9 * 3600000); }
  function dateKey(d) { return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()); }
  function today() { return dateKey(kstDate()); }
  function addDays(key, days) {
    var p = key.split('-').map(Number);
    return dateKey(new Date(Date.UTC(p[0], p[1] - 1, p[2] + days)));
  }
  function store(fn, fallback) { try { return fn(window.localStorage); } catch (_) { return fallback; } }
  var memoryT0 = null;
  function clockStart() {
    if (memoryT0 !== null) return memoryT0;
    var v = store(function (s) { return Number(s.getItem(T0_KEY)) || 0; }, 0);
    if (!v) { v = Date.now(); store(function (s) { s.setItem(T0_KEY, String(v)); }); }
    memoryT0 = v;
    return v;
  }
  function myTeam() {
    var raw = store(function (s) { return s.getItem('flutter.myTeam'); }, null);
    if (!raw) return null;
    try { var v = JSON.parse(raw); return TEAM[v] ? v : null; } catch (_) { return TEAM[raw] ? raw : null; }
  }

  // ── 가상 선수 ──
  var rosterCache = null;
  function buildRosters() {
    if (rosterCache) return rosterCache;
    var r = rng('kbo-fans-demo-roster');
    var names = [];
    SURNAMES.forEach(function (s) { GIVEN.forEach(function (g) { names.push(s + g); }); });
    names = shuffled(names, r);
    var cursor = 0;
    var rosters = {};
    var byId = {};
    TEAMS.forEach(function (team, ti) {
      var hitters = [];
      var pitchers = [];
      for (var i = 0; i < 12; i++) {
        var pos = POSITIONS[i % 9];
        var q = 0.55 + r() * 0.45;
        var g = 70 + Math.floor(r() * 60);
        var pa = Math.floor(g * (3.2 + r() * 1.1));
        var bb = Math.floor(pa * (0.06 + r() * 0.07));
        var ab = pa - bb - Math.floor(r() * 5);
        var avgV = 0.215 + q * 0.125 + r() * 0.012;
        var h = Math.round(ab * avgV);
        var hr = Math.floor(ab * (0.008 + r() * r() * 0.075));
        var d2 = Math.floor(h * (0.14 + r() * 0.1));
        var t3 = Math.floor(r() * 4);
        var tb = h + d2 + 2 * t3 + 3 * hr;
        var avg = h / ab;
        var obp = (h + bb) / (ab + bb);
        var slg = tb / ab;
        var p = {
          id: '9' + pad(ti) + pad(i) + '1', teamId: team.id, kind: 'hitter', name: names[cursor++], number: i + 2,
          pos: pos, hand: r() < 0.3 ? '우투좌타' : '우투우타', hbp: Math.floor(r() * 6), g: g, pa: pa, ab: ab, h: h, hr: hr,
          d2: d2, t3: t3, bb: bb, rbi: Math.floor(hr * 2.4 + h * 0.22), so: Math.floor(pa * (0.13 + r() * 0.11)),
          avg: avg, obp: obp, slg: slg, ops: obp + slg, starterSlot: i < 9 ? i : null, sb: Math.floor(r() * 14),
          height: 172 + Math.floor(r() * 18), weight: 72 + Math.floor(r() * 24),
          birth: (1992 + Math.floor(r() * 13)) + '.' + pad(1 + Math.floor(r() * 12)) + '.' + pad(1 + Math.floor(r() * 28)),
        };
        hitters.push(p); byId[p.id] = p;
      }
      for (var j = 0; j < 8; j++) {
        var starter = j < 5;
        var qp = 0.1 + r() * 0.9;
        var games = starter ? 22 + Math.floor(r() * 7) : 40 + Math.floor(r() * 25);
        var ipOuts = starter ? 330 + Math.floor(r() * 180) : 120 + Math.floor(r() * 80);
        var ip = ipOuts / 3;
        var era = 2.35 + (1 - qp) * 3 + r() * 0.3;
        var er = Math.round(era * ip / 9);
        var wins = starter ? 5 + Math.floor(qp * 11) : Math.floor(r() * 6);
        var pitcher = {
          id: '9' + pad(ti) + pad(20 + j) + '1', teamId: team.id, kind: 'pitcher', name: names[cursor++], number: 40 + j,
          role: starter ? '선발' : (j === 7 ? '마무리' : '불펜'), hand: r() < 0.25 ? '좌투좌타' : '우투우타', g: games,
          ipText: Math.floor(ip) + '.' + (ipOuts % 3), w: wins, l: starter ? 3 + Math.floor((1 - qp) * 9) : Math.floor(r() * 5),
          sv: j === 7 ? 14 + Math.floor(r() * 22) : 0, so: Math.floor(ip * (0.6 + r() * 0.5)), er: er, era: er * 9 / ip,
          whip: 1.02 + (1 - qp) * 0.5, height: 178 + Math.floor(r() * 16), weight: 78 + Math.floor(r() * 22),
          birth: (1990 + Math.floor(r() * 15)) + '.' + pad(1 + Math.floor(r() * 12)) + '.' + pad(1 + Math.floor(r() * 28)),
        };
        pitchers.push(pitcher); byId[pitcher.id] = pitcher;
      }
      rosters[team.id] = { hitters: hitters, pitchers: pitchers };
    });
    rosterCache = { rosters: rosters, byId: byId };
    return rosterCache;
  }
  function rosterOf(teamId) { return buildRosters().rosters[teamId]; }

  function playerJson(p, season) {
    var isPitcher = p.kind === 'pitcher';
    var seasonStats = isPitcher
      ? ['G ' + p.g, 'IP ' + p.ipText, 'W ' + p.w, 'L ' + p.l, 'SV ' + p.sv, 'SO ' + p.so, 'ER ' + p.er, 'ERA ' + fixed(p.era, 2), 'WHIP ' + fixed(p.whip, 2)]
      : ['G ' + p.g, 'PA ' + p.pa, 'AB ' + p.ab, 'H ' + p.h, 'HR ' + p.hr, 'RBI ' + p.rbi, 'AVG ' + fixed(p.avg, 3), 'OBP ' + fixed(p.obp, 3), 'SLG ' + fixed(p.slg, 3), 'OPS ' + fixed(p.ops, 3)];
    var r = rng('recent' + p.id);
    var recent = [];
    var base = today();
    for (var i = 1; i <= 5; i++) {
      var opp = TEAMS[Math.floor(r() * TEAMS.length)];
      if (opp.id === p.teamId) opp = TEAMS[(opp.index + 1) % TEAMS.length];
      var summary = isPitcher
        ? (Math.floor(r() * 3) + 3) + '이닝 ' + Math.floor(r() * 4) + '실점 ' + Math.floor(r() * 7) + '탈삼진'
        : '4타수 ' + Math.floor(r() * 4) + '안타 ' + Math.floor(r() * 3) + '타점';
      recent.push({ date: addDays(base, -i), opponent: opp.short, summary: summary });
    }
    return {
      id: p.id, teamId: p.teamId, season: season, playerType: p.kind, imageUrl: IMG, name: p.name, number: p.number,
      position: isPitcher ? '투수' : p.pos[1],
      roleLabel: isPitcher ? p.role + ' 투수' : (p.pos[0] === 'C' ? '포수' : (/F$/.test(p.pos[0]) ? '외야수' : (p.pos[0] === 'DH' ? '지명타자' : '내야수'))),
      handedness: p.hand, heightWeight: p.height + 'cm / ' + p.weight + 'kg', birthDate: p.birth,
      career: '체험판 가상 선수', status: 'available', rosterGroup: 'entry', statusNote: null,
      headlineStat: isPitcher ? 'ERA ' + fixed(p.era, 2) : 'AVG ' + fixed(p.avg, 3),
      secondaryStat: isPitcher ? 'WHIP ' + fixed(p.whip, 2) : 'OPS ' + fixed(p.ops, 3),
      seasonStats: seasonStats, highlights: [], recentGames: recent,
      sortMetrics: isPitcher ? { era: p.era, whip: p.whip } : { avg: p.avg, ops: p.ops }, isRetired: false,
    };
  }

  // ── 경기 시뮬레이션 ──
  var simCache = {};
  function parseGameId(id) {
    var m = /^(\d{4})(\d{2})(\d{2})([A-Z]{2})([A-Z]{2})\d$/.exec(id);
    if (!m || !TEAM[m[4]] || !TEAM[m[5]]) return null;
    return { date: m[1] + '-' + m[2] + '-' + m[3], away: m[4], home: m[5] };
  }
  function gameIdOf(date, away, home) { return date.replace(/-/g, '') + away + home + '0'; }

  var FIELD = ['좌익수', '중견수', '우익수', '3루수', '유격수', '2루수', '1루수'];
  function pick(r, list) { return list[Math.floor(r() * list.length)]; }

  function pitchesFor(r, kind) {
    var balls = 0;
    var strikes = 0;
    var seq = [];
    var targetBalls = kind === 'WALK' ? 4 : Math.floor(r() * 4);
    var targetStrikes = kind === 'STRIKEOUT' ? 3 : Math.floor(r() * 3);
    if (kind === 'HBP') { targetBalls = Math.min(targetBalls, 2); targetStrikes = Math.min(targetStrikes, 1); }
    while (balls < targetBalls || strikes < targetStrikes) {
      var takeBall = balls < targetBalls && (strikes >= targetStrikes || r() < 0.5);
      if (takeBall) { balls++; seq.push('볼'); } else {
        strikes++;
        seq.push(r() < 0.45 ? '헛스윙' : (strikes < 3 && r() < 0.4 ? '파울' : '스트라이크'));
      }
    }
    if (kind === 'HBP') seq.push('몸에 맞는 볼');
    else if (kind !== 'WALK' && kind !== 'STRIKEOUT') seq.push('타격');
    return { seq: seq, balls: balls, strikes: strikes };
  }

  function simulate(gameId) {
    if (simCache[gameId]) return simCache[gameId];
    var info = parseGameId(gameId);
    var r = rng('sim' + gameId);
    var dayIndex = hash(info.date) % 5;
    function makeSide(teamId) {
      var roster = rosterOf(teamId);
      var relievers = roster.pitchers.slice(5);
      return {
        teamId: teamId, batters: roster.hitters.slice(0, 9),
        staff: [roster.pitchers[dayIndex]].concat(relievers),
        pitcherIndex: 0, nextBatter: 0,
        bat: roster.hitters.slice(0, 9).map(function () { return { pa: 0, ab: 0, r: 0, h: 0, rbi: 0, d2: 0, t3: 0, hr: 0, bb: 0, hbp: 0, so: 0 }; }),
        pit: [],
      };
    }
    var sides = { top: makeSide(info.away), bottom: makeSide(info.home) };
    var events = [];
    var seq = 1;
    var score = { top: 0, bottom: 0 };

    for (var inning = 1; inning <= 9; inning++) {
      for (var hi = 0; hi < 2; hi++) {
        var half = hi === 0 ? 'top' : 'bottom';
        if (half === 'bottom' && inning === 9 && score.bottom > score.top) continue;
        var off = sides[half];
        var def = sides[half === 'top' ? 'bottom' : 'top'];
        if ((inning === 6 && r() < 0.8 && def.pitcherIndex === 0) || (inning === 8 && def.pitcherIndex < 2)) {
          var prev = def.staff[def.pitcherIndex];
          def.pitcherIndex += 1;
          var next = def.staff[def.pitcherIndex];
          events.push({ kind: 'sub', inning: inning, half: half, seqNo: seq++, event: 'SUBSTITUTION', isScoring: false,
            text: '투수 ' + prev.name + ' : 투수 ' + next.name + ' (으)로 교체', pitchSequence: null, pa: false });
        }
        var outs = 0;
        var bases = [null, null, null];
        var paInHalf = 0;
        while (outs < 3) {
          var slot = off.nextBatter;
          var batter = off.batters[slot];
          var line = off.bat[slot];
          var pitcher = def.staff[def.pitcherIndex];
          var pit = def.pit[def.pitcherIndex] || (def.pit[def.pitcherIndex] = { outs: 0, h: 0, so: 0, bb: 0, er: 0, r: 0, pc: 0 });
          var roll = r();
          var outcome;
          if (paInHalf === 1 && ((inning === 4 && half === 'top') || (inning === 5 && half === 'bottom') || (inning === 6 && half === 'top') || (inning === 7 && half === 'bottom'))) outcome = 'HOMERUN';
          else if (roll < 0.20) outcome = 'STRIKEOUT';
          else if (roll < 0.70) outcome = 'OUT';
          else if (roll < 0.77) outcome = 'WALK';
          else if (roll < 0.78) outcome = 'HBP';
          else if (roll < 0.79) outcome = 'ERROR';
          else if (roll < 0.935) outcome = 'SINGLE';
          else if (roll < 0.98) outcome = 'DOUBLE';
          else if (roll < 0.985) outcome = 'TRIPLE';
          else outcome = 'HOMERUN';

          var pitches = pitchesFor(r, outcome === 'STRIKEOUT' ? 'STRIKEOUT' : (outcome === 'WALK' ? 'WALK' : (outcome === 'HBP' ? 'HBP' : 'PLAY')));
          pit.pc += pitches.seq.length;
          line.pa++;
          var who = (slot + 1) + '번타자 ' + batter.name;
          var text = '';
          var eventName = 'PLAY';
          var scored = [];
          var rbi = 0;
          var field = pick(r, FIELD);

          function advance(count, batterSlot) {
            for (var b = 2; b >= 0; b--) {
              if (bases[b] === null) continue;
              var to = b + count;
              if (to >= 3) { scored.push({ slot: bases[b], from: b + 1 }); bases[b] = null; }
              else { bases[to] = bases[b]; bases[b] = null; }
            }
            if (batterSlot !== null && count <= 3) bases[count - 1] = batterSlot;
          }
          function forceWalk(batterSlot) {
            if (bases[0] !== null) {
              if (bases[1] !== null) {
                if (bases[2] !== null) scored.push({ slot: bases[2], from: 3 });
                bases[2] = bases[1];
              }
              bases[1] = bases[0];
            }
            bases[0] = batterSlot;
          }

          switch (outcome) {
            case 'STRIKEOUT':
              eventName = 'STRIKEOUT'; line.ab++; line.so++; pit.so++; outs++; pit.outs++;
              text = who + ' : ' + pick(r, ['헛스윙 삼진 아웃', '루킹 삼진 아웃']);
              break;
            case 'OUT':
              eventName = 'OUT'; line.ab++; outs++; pit.outs++;
              text = who + ' : ' + field + (r() < 0.45 ? ' 플라이 아웃' : ' 땅볼 아웃');
              break;
            case 'WALK':
              eventName = 'WALK'; line.bb++; pit.bb++; forceWalk(slot); rbi = scored.length;
              text = who + ' : 볼넷';
              break;
            case 'HBP':
              eventName = 'WALK'; line.hbp++; forceWalk(slot); rbi = scored.length;
              text = who + ' : 몸에 맞는 볼';
              break;
            case 'ERROR':
              eventName = 'PLAY'; line.ab++; advance(1, slot); def.errors = (def.errors || 0) + 1;
              text = who + ' : ' + field + ' 실책으로 출루';
              break;
            case 'SINGLE':
              eventName = 'HIT'; line.ab++; line.h++; pit.h++; advance(1, slot); rbi = scored.length;
              text = who + ' : ' + pick(r, ['좌익수', '중견수', '우익수']) + ' 앞 안타';
              break;
            case 'DOUBLE':
              eventName = 'HIT'; line.ab++; line.h++; line.d2++; pit.h++; advance(2, slot); rbi = scored.length;
              text = who + ' : ' + pick(r, ['좌중간', '우중간', '좌익선상']) + ' 2루타';
              break;
            case 'TRIPLE':
              eventName = 'HIT'; line.ab++; line.h++; line.t3++; pit.h++; advance(3, slot); rbi = scored.length;
              text = who + ' : 우중간 3루타';
              break;
            default:
              eventName = 'HOMERUN'; line.ab++; line.h++; line.hr++; pit.h++;
              advance(4, null);
              scored.push({ slot: slot, from: 0 }); rbi = scored.length;
              text = who + ' : ' + pick(r, ['좌월', '중월', '우월']) + ' ' + (scored.length === 4 ? '만루 홈런' : scored.length + '점 홈런');
              break;
          }
          line.rbi += rbi;
          scored.forEach(function (s) {
            off.bat[s.slot].r++;
            pit.r++;
            if (outcome !== 'ERROR') pit.er++;
            if (s.from > 0) text += ', ' + s.from + '루주자 ' + off.batters[s.slot].name + ' : 홈인';
          });
          score[half] += scored.length;

          events.push({
            kind: 'pa', inning: inning, half: half, seqNo: seq++, event: scored.length ? (outcome === 'HOMERUN' ? 'HOMERUN' : 'RUNS') : eventName,
            isScoring: scored.length > 0, text: text, pitchSequence: pitches.seq.join('→'), pa: true,
            batterSlot: slot, pitcherIndex: def.pitcherIndex, runs: scored.length, outs: outs,
            bases: bases.map(function (b) { return b !== null; }),
            snapshot: JSON.stringify({
              top: { bat: sides.top.bat, pit: sides.top.pit, pi: sides.top.pitcherIndex, errors: sides.top.errors || 0 },
              bottom: { bat: sides.bottom.bat, pit: sides.bottom.pit, pi: sides.bottom.pitcherIndex, errors: sides.bottom.errors || 0 },
            }),
            score: { top: score.top, bottom: score.bottom }, balls: pitches.balls, strikes: pitches.strikes,
            nextSlotAfter: (slot + 1) % 9,
          });
          off.nextBatter = (slot + 1) % 9;
          paInHalf++;
          if (half === 'bottom' && inning === 9 && score.bottom > score.top) break;
        }
      }
    }

    var paEvents = events.filter(function (e) { return e.pa; });
    var liveStart = paEvents.findIndex(function (e) { return e.inning === 4 && e.half === 'top'; });
    var result = { info: info, sides: sides, events: events, paEvents: paEvents, liveStart: liveStart < 0 ? 0 : liveStart };
    simCache[gameId] = result;
    return result;
  }

  // ── 일정 ──
  function pairsFor(date) {
    var r = rng('pairs' + date);
    var t = shuffled(TEAMS, r);
    var out = [];
    for (var i = 0; i < 10; i += 2) out.push({ away: t[i].id, home: t[i + 1].id });
    return out;
  }
  function isOffDay(date) {
    var p = date.split('-').map(Number);
    return new Date(Date.UTC(p[0], p[1] - 1, p[2])).getUTCDay() === 1 && date !== today();
  }
  // 오늘 슬레이트: 내 팀 경기를 LIVE로 올려 첫 화면에서 바로 진행 상황을 볼 수 있게 한다.
  function todaySlate() {
    var date = today();
    var pairs = pairsFor(date);
    var mine = myTeam();
    if (mine) {
      var idx = pairs.findIndex(function (p) { return p.away === mine || p.home === mine; });
      if (idx > 0) { var x = pairs[0]; pairs[0] = pairs[idx]; pairs[idx] = x; }
    }
    var roles = ['LIVE', 'LIVE', 'FINAL', 'SCHEDULED', 'CANCELLED'];
    var map = {};
    pairs.forEach(function (p, i) { map[gameIdOf(date, p.away, p.home)] = roles[i]; });
    return { date: date, pairs: pairs, roles: map };
  }
  function roleOf(gameId, info) {
    var t = today();
    if (info.date < t) return 'FINAL';
    if (info.date > t) return 'SCHEDULED';
    return todaySlate().roles[gameId] || 'FINAL';
  }
  function startTimeOf(gameId, role) {
    if (role === 'FINAL' && parseGameId(gameId).date === today()) return '14:00';
    var m = parseGameId(gameId).date.split('-').map(Number);
    var dow = new Date(Date.UTC(m[0], m[1] - 1, m[2])).getUTCDay();
    return dow === 0 ? '14:00' : (dow === 6 ? '17:00' : '18:30');
  }
  // 라이브 경기의 현재 타석 커서. liveStart 이후 5초마다 한 타석씩 진행한다.
  function cursorOf(sim, gameId) {
    var offset = gameId && hash(gameId) % 3;
    var c = sim.liveStart + offset + Math.floor((Date.now() - clockStart()) / PA_TICK_MS);
    return Math.min(c, sim.paEvents.length);
  }

  function gameState(gameId) {
    var info = parseGameId(gameId);
    if (!info) return null;
    var role = roleOf(gameId, info);
    var sim = simulate(gameId);
    var cursor = role === 'LIVE' ? cursorOf(sim, gameId) : (role === 'FINAL' ? sim.paEvents.length : 0);
    var status = role;
    if (role === 'LIVE' && cursor >= sim.paEvents.length) status = 'FINAL';
    return { gameId: gameId, info: info, role: role, status: status, sim: sim, cursor: cursor };
  }

  function teamScoreJson(state, side) {
    var teamId = side === 'top' ? state.info.away : state.info.home;
    var t = TEAM[teamId];
    var base = { teamId: t.id, teamName: t.name, shortName: t.short };
    if (state.status === 'SCHEDULED' || state.status === 'CANCELLED') {
      return Object.assign(base, { score: null, scores: [null, null, null, null, null, null, null, null, null], hits: null, errors: null, balls: null });
    }
    var played = state.sim.paEvents.slice(0, state.cursor);
    var scores = [null, null, null, null, null, null, null, null, null];
    var hits = 0;
    var walks = 0;
    var total = 0;
    played.forEach(function (e) {
      if (e.half === side && scores[e.inning - 1] === null) scores[e.inning - 1] = 0;
      if (e.half !== side) return;
      scores[e.inning - 1] += e.runs;
      total += e.runs;
      if (/안타|루타|홈런/.test(e.text.split(', ')[0])) hits++;
      if (/볼넷|몸에 맞는/.test(e.text.split(', ')[0])) walks++;
    });
    var last = played[played.length - 1];
    var errors = 0;
    if (last) errors = JSON.parse(last.snapshot)[side === 'top' ? 'bottom' : 'top'].errors;
    return Object.assign(base, { score: total, scores: scores, hits: hits, errors: errors, balls: walks });
  }
  function inningText(state) {
    if (state.status === 'FINAL') return '경기종료';
    if (state.status === 'CANCELLED') return '우천취소';
    if (state.status === 'SCHEDULED') return state.role === 'SCHEDULED' && state.info.date === today() ? '라인업 공개' : '경기전';
    var next = state.sim.paEvents[state.cursor];
    return next.inning + '회' + (next.half === 'top' ? '초' : '말');
  }
  function gameJson(gameId) {
    var s = gameState(gameId);
    if (!s) return null;
    var seed = rng('crowd' + gameId);
    var lineupOpen = s.status === 'SCHEDULED' && s.info.date === today();
    return {
      gameId: gameId, status: s.status, inning: inningText(s), away: teamScoreJson(s, 'top'), home: teamScoreJson(s, 'bottom'),
      stadium: TEAM[s.info.home].stadium, startTime: startTimeOf(gameId, s.role),
      statusLabel: s.status === 'CANCELLED' ? '우천취소' : null,
      crowd: s.status === 'FINAL' ? 8000 + Math.floor(seed() * 14000) : null,
      ticketInfo: null, highlightInfo: null, lineupOpened: lineupOpen || s.status === 'LIVE' || s.status === 'FINAL',
    };
  }

  function baseText(bases) {
    var on = [];
    bases.forEach(function (b, i) { if (b) on.push(i + 1); });
    return on.length ? on.join(',') + '루' : '';
  }
  function relayJson(gameId) {
    var s = gameState(gameId);
    if (!s) return null;
    var played = s.sim.paEvents.slice(0, s.cursor);
    var items = [];
    if (played.length) {
      var lastSeq = played[played.length - 1].seqNo;
      s.sim.events.forEach(function (e) {
        if (e.seqNo > lastSeq) return;
        items.push({ seqNo: e.seqNo, inning: e.inning, half: e.half, event: e.event, isScoring: e.isScoring, text: e.text, pitchSequence: e.pitchSequence });
      });
    }
    if (s.status === 'FINAL' && played.length) {
      var finalSeq = s.sim.events[s.sim.events.length - 1].seqNo + 1;
      var last = played[played.length - 1];
      items.push({ seqNo: finalSeq, inning: last.inning, half: last.half, event: 'GAME_END', isScoring: false,
        text: '경기종료 (예시 경기)', pitchSequence: null });
    }
    var atBat = null;
    if (s.status === 'LIVE') {
      var next = s.sim.paEvents[s.cursor];
      var prev = played[played.length - 1];
      var sameHalf = prev && prev.inning === next.inning && prev.half === next.half;
      var offSide = s.sim.sides[next.half];
      var defSide = s.sim.sides[next.half === 'top' ? 'bottom' : 'top'];
      var batter = offSide.batters[next.batterSlot];
      var pitcher = defSide.staff[next.pitcherIndex];
      var snap = prev ? JSON.parse(prev.snapshot) : null;
      var defKey = next.half === 'top' ? 'bottom' : 'top';
      var pitLine = snap && snap[defKey].pit[next.pitcherIndex];
      var tick = ((Date.now() - clockStart()) % PA_TICK_MS) / PA_TICK_MS;
      var seqList = next.pitchSequence.split('→');
      var seen = seqList.slice(0, Math.floor(tick * seqList.length));
      var balls = seen.filter(function (x) { return x === '볼'; }).length;
      var strikes = Math.min(2, seen.filter(function (x) { return x !== '볼' && x !== '타격' && x !== '몸에 맞는 볼'; }).length);
      var batLine = snap ? snap[next.half].bat[next.batterSlot] : null;
      atBat = {
        batter: { name: batter.name, imageUrl: IMG, number: batter.number, hand: batter.hand.slice(2), average: fixed(batter.avg, 3),
          recent: batLine && batLine.pa ? '오늘 ' + batLine.pa + '타석 ' + batLine.h + '안타' : '오늘 첫 타석' },
        pitcher: { name: pitcher.name, imageUrl: IMG, number: pitcher.number, hand: pitcher.hand.slice(0, 2), era: fixed(pitcher.era, 2),
          pitchCount: (pitLine ? pitLine.pc : 0) + seen.length },
        inningText: next.inning + '회' + (next.half === 'top' ? '초' : '말'),
        baseState: sameHalf ? baseText(prev.bases) : '',
        ballCount: { balls: Math.min(balls, 3), strikes: strikes, outs: sameHalf ? (prev.outs >= 3 ? 0 : prev.outs) : 0 },
      };
    }
    return { gameId: gameId, relayItems: items, currentAtBat: atBat, source: 'demo' };
  }
  function ipText(outs) { return Math.floor(outs / 3) + '.' + (outs % 3); }
  function boxTeam(s, side, snap, finalState) {
    var simSide = s.sim.sides[side];
    var data = snap ? snap[side] : null;
    var live = s.status === 'LIVE';
    var batters = simSide.batters.map(function (b, i) {
      var l = data ? data.bat[i] : { pa: 0, ab: 0, r: 0, h: 0, rbi: 0, d2: 0, t3: 0, hr: 0, bb: 0, hbp: 0, so: 0 };
      return { order: i + 1, position: b.pos[2], name: b.name, id: b.id, imageUrl: IMG, atBats: l.ab, runs: l.r, hits: l.h, rbi: l.rbi,
        plateAppearances: l.pa, doubles: l.d2, triples: l.t3, homeRuns: l.hr, walks: l.bb, hitByPitch: l.hbp, strikeouts: l.so, stolenBases: 0,
        liveContext: live, contextLabel: live ? '경기 중' : null };
    });
    var decisions = {};
    if (finalState && finalState.winner) {
      if (finalState.winner === side) {
        decisions[0] = 'W';
        var usedCount = data ? data.pit.filter(Boolean).length : 0;
        if (usedCount > 1 && finalState.margin <= 3) decisions[usedCount - 1] = 'S';
      } else decisions[0] = 'L';
    }
    var pitchers = [];
    (data ? data.pit : []).forEach(function (l, i) {
      if (!l) return;
      var p = simSide.staff[i];
      pitchers.push({ name: p.name, id: p.id, imageUrl: IMG, innings: ipText(l.outs), hits: l.h, strikeouts: l.so, walks: l.bb, earnedRuns: l.er,
        decision: decisions[i] || null, pitchCount: l.pc, runs: l.r, liveContext: live, contextLabel: live ? '경기 중' : null });
    });
    var sum = function (k) { return batters.reduce(function (acc, x) { return acc + (x[k] || 0); }, 0); };
    return { teamId: simSide.teamId, batters: batters, pitchers: pitchers,
      totals: { batting: { atBats: sum('atBats'), runs: sum('runs'), hits: sum('hits'), rbi: sum('rbi') } } };
  }
  function boxscoreJson(gameId) {
    var s = gameState(gameId);
    if (!s) return null;
    var last = s.sim.paEvents[s.cursor - 1];
    var snap = last ? JSON.parse(last.snapshot) : null;
    var finalState = null;
    if (s.status === 'FINAL' && last) {
      var d = last.score.top - last.score.bottom;
      finalState = { winner: d === 0 ? null : (d > 0 ? 'top' : 'bottom'), margin: Math.abs(d) };
    }
    var live = s.status === 'LIVE';
    var hasData = s.status === 'FINAL' || live;
    return {
      gameId: gameId, availability: live ? 'live_context' : (hasData ? 'official' : 'official_unavailable'),
      officialAvailable: s.status === 'FINAL', liveContextAvailable: live,
      away: boxTeam(s, 'top', snap, finalState), home: boxTeam(s, 'bottom', snap, finalState),
      source: 'demo', sourceGameId: gameId, unavailableReason: hasData ? null : '경기 전입니다.',
    };
  }
  function lineupSide(s, side) {
    var simSide = s.sim.sides[side];
    var starter = simSide.staff[0];
    var open = s.status !== 'SCHEDULED' || s.info.date === today();
    return {
      teamId: simSide.teamId,
      lineup: open && s.status !== 'CANCELLED' ? simSide.batters.map(function (b, i) {
        return { order: i + 1, position: b.pos[0], positionKo: b.pos[1], name: b.name, id: b.id, imageUrl: IMG, statLabel: '타율', statValue: fixed(b.avg, 3) };
      }) : [],
      starter: { id: starter.id, name: starter.name, imageUrl: IMG },
    };
  }
  function lineupJson(gameId) {
    var s = gameState(gameId);
    if (!s) return null;
    return { gameId: gameId, away: lineupSide(s, 'top'), home: lineupSide(s, 'bottom') };
  }

  // ── 순위·기록 ──
  function standingsJson(season) {
    var r = rng('standings' + season);
    var list = TEAMS.map(function (t) {
      var w = 58 + Math.floor(r() * 30);
      var d = Math.floor(r() * 4);
      var l = 144 - w - d;
      return { teamId: t.id, teamName: t.name, wins: w, losses: l, draws: d, pctValue: w / (w + l) };
    }).sort(function (a, b) { return b.pctValue - a.pctValue; });
    var top = list[0];
    return list.map(function (x, i) {
      var gb = ((top.wins - x.wins) + (x.losses - top.losses)) / 2;
      return { rank: i + 1, teamId: x.teamId, teamName: x.teamName, wins: x.wins, losses: x.losses, draws: x.draws,
        pct: fixed(x.pctValue, 3).replace(/^0/, ''), gb: i === 0 ? '-' : fixed(gb, 1),
        streak: (1 + Math.floor(r() * 5)) + (r() < 0.55 ? '승' : '패') };
    });
  }
  function allPlayers(kind) {
    var out = [];
    TEAMS.forEach(function (t) {
      var ros = rosterOf(t.id);
      (kind === 'pitcher' ? ros.pitchers : ros.hitters).forEach(function (p) { out.push(p); });
    });
    return out;
  }
  var METRICS = {
    avg: ['hitter', 'AVG', function (p) { return p.avg; }, function (p) { return fixed(p.avg, 3); }, true],
    hr: ['hitter', 'HR', function (p) { return p.hr; }, function (p) { return String(p.hr); }, true],
    ops: ['hitter', 'OPS', function (p) { return p.ops; }, function (p) { return fixed(p.ops, 3); }, true],
    era: ['pitcher', 'ERA', function (p) { return p.era; }, function (p) { return fixed(p.era, 2); }, false],
    wins: ['pitcher', 'W', function (p) { return p.w; }, function (p) { return String(p.w); }, true],
    saves: ['pitcher', 'SV', function (p) { return p.sv; }, function (p) { return String(p.sv); }, true],
    strikeouts: ['pitcher', 'SO', function (p) { return p.so; }, function (p) { return String(p.so); }, true],
  };
  function leaders(metricKey, limit) {
    var isOpsPlus = metricKey === 'opsPlus';
    var m = METRICS[isOpsPlus ? 'ops' : metricKey];
    if (!m) return [];
    var pool = allPlayers(m[0]);
    if (m[0] === 'hitter') pool = pool.filter(function (p) { return p.starterSlot !== null; });
    if (metricKey === 'era') pool = pool.filter(function (p) { return p.role === '선발'; });
    var mean = 0;
    pool.forEach(function (p) { mean += p.ops || 0; });
    mean = mean / pool.length;
    pool.sort(function (a, b) { return m[4] ? m[2](b) - m[2](a) : m[2](a) - m[2](b); });
    return pool.slice(0, limit || 20).map(function (p, i) {
      return { rank: i + 1, playerId: p.id, playerType: p.kind, metricKey: isOpsPlus ? 'OPSPLUS' : m[1], name: p.name, teamId: p.teamId,
        value: isOpsPlus ? String(Math.round(p.ops / mean * 100)) : m[3](p), milestoneLabel: null, allTimeRank: null, isRetired: false };
    });
  }
  function featured(label, p) {
    var isP = p.kind === 'pitcher';
    return { label: label, playerId: p.id, playerType: p.kind, name: p.name, teamId: p.teamId, imageUrl: IMG,
      headline: isP ? '평균자책 ' + fixed(p.era, 2) : '타율 ' + fixed(p.avg, 3),
      summary: isP ? p.so + '탈삼진 · ' + p.w + '승' : p.hr + '홈런 · ' + p.rbi + '타점' };
  }
  function recordsOverviewJson(season) {
    var byId = buildRosters().byId;
    var h = leaders('avg', 10);
    var p = leaders('era', 10);
    return {
      season: season,
      leaders: { avg: h, hr: leaders('hr', 10), ops: leaders('ops', 10), opsPlus: leaders('opsPlus', 10), era: p, wins: leaders('wins', 10),
        saves: leaders('saves', 10), strikeouts: leaders('strikeouts', 10), milestones: [] },
      featured: {
        todayHitter: featured('오늘의 타자', byId[h[0].playerId]), todayPitcher: featured('오늘의 투수', byId[p[0].playerId]),
        monthHitter: featured('이달의 타자', byId[h[1].playerId]), monthPitcher: featured('이달의 투수', byId[p[1].playerId]),
      },
    };
  }
  function teamStatsJson(teamId, season) {
    var ros = rosterOf(teamId);
    var ab = 0, h = 0, hr = 0, obp = 0, ops = 0;
    ros.hitters.forEach(function (p) { ab += p.ab; h += p.h; hr += p.hr; obp += p.obp; ops += p.ops; });
    var er = 0, ip = 0, whip = 0, so = 0;
    ros.pitchers.forEach(function (p) { er += p.er; ip += parseFloat(p.ipText); whip += p.whip; so += p.so; });
    var st = standingsJson(season).filter(function (x) { return x.teamId === teamId; })[0];
    return { teamId: teamId, season: season,
      hitting: { AVG: fixed(h / ab, 3), OPS: fixed(ops / ros.hitters.length, 3), OBP: fixed(obp / ros.hitters.length, 3), HR: String(hr), H: String(h) },
      pitching: { ERA: fixed(er * 9 / ip, 2), WHIP: fixed(whip / ros.pitchers.length, 2), WPCT: st ? st.pct : '.500', SO: String(so) } };
  }
  function scheduleGame(date, pair) {
    var id = gameIdOf(date, pair.away, pair.home);
    var g = gameJson(id);
    return { gameId: id, time: g.startTime, awayId: pair.away, awayName: TEAM[pair.away].short, awayScore: g.status === 'SCHEDULED' || g.status === 'CANCELLED' ? null : g.away.score,
      homeId: pair.home, homeName: TEAM[pair.home].short, homeScore: g.status === 'SCHEDULED' || g.status === 'CANCELLED' ? null : g.home.score,
      stadium: g.stadium, status: g.status, statusLabel: g.statusLabel, ticketInfo: null };
  }
  function scheduleJson(month) {
    var p = month.split('-').map(Number);
    var last = new Date(Date.UTC(p[0], p[1], 0)).getUTCDate();
    var days = [];
    for (var d = 1; d <= last; d++) {
      var date = month + '-' + pad(d);
      var pairs = date === today() ? todaySlate().pairs : (isOffDay(date) ? [] : pairsFor(date));
      days.push({ date: date, label: null, games: pairs.map(function (x) { return scheduleGame(date, x); }) });
    }
    return { month: month, days: days };
  }
  function scoreboardJson(date) {
    var pairs = date === today() ? todaySlate().pairs : (isOffDay(date) ? [] : pairsFor(date));
    return { date: date, games: pairs.map(function (x) { return gameJson(gameIdOf(date, x.away, x.home)); }) };
  }
  function homeJson(date, team) {
    var season = Number(date.slice(0, 4));
    var standings = standingsJson(season);
    var brief = null;
    var slate = date === today() ? todaySlate().pairs : pairsFor(date);
    if (team && TEAM[team]) {
      var standing = standings.filter(function (s) { return s.teamId === team; })[0];
      var todayPair = slate.filter(function (x) { return x.away === team || x.home === team; })[0];
      var summaries = [];
      var w = 0, l = 0, dr = 0;
      for (var i = 1; i <= 8 && summaries.length < 5; i++) {
        var pd = addDays(date, -i);
        if (isOffDay(pd)) continue;
        var pair = pairsFor(pd).filter(function (x) { return x.away === team || x.home === team; })[0];
        var pid = gameIdOf(pd, pair.away, pair.home);
        var g = gameJson(pid);
        var isAway = pair.away === team;
        var mine = isAway ? g.away.score : g.home.score;
        var opp = isAway ? g.home.score : g.away.score;
        var res = mine > opp ? '승' : (mine < opp ? '패' : '무');
        if (res === '승') w++; else if (res === '패') l++; else dr++;
        summaries.push({ gameId: pid, result: res, opponentName: TEAM[isAway ? pair.home : pair.away].short, score: mine + ':' + opp });
      }
      var nextDate = addDays(date, 1);
      while (isOffDay(nextDate)) nextDate = addDays(nextDate, 1);
      var nextPair = pairsFor(nextDate).filter(function (x) { return x.away === team || x.home === team; })[0];
      var nextGame = scheduleGame(nextDate, nextPair);
      nextGame.date = nextDate;
      brief = { teamId: team, teamLabel: TEAM[team].name, standing: standing,
        todayGameId: todayPair ? gameIdOf(date, todayPair.away, todayPair.home) : null, nextGame: nextGame,
        recentWins: w, recentLosses: l, recentDraws: dr, recentGamesCount: summaries.length, recentSummaries: summaries };
    }
    var leader = standings[0];
    var hitter = leaders('hr', 1)[0];
    var pitcher = leaders('era', 1)[0];
    var liveId = slate.length ? gameIdOf(date, slate[0].away, slate[0].home) : null;
    return {
      date: date, myTeam: team || null, myTeamBrief: brief,
      kboBrief: { title: 'KBO 브리프', subtitle: '예시 경기로 구성한 브리프입니다', items: [
        liveId ? { type: 'game_flow', eyebrow: '예시 경기', title: TEAM[slate[0].away].short + ' vs ' + TEAM[slate[0].home].short + ' 진행 중', subtitle: '점수가 실시간처럼 바뀌는 시뮬레이션 경기입니다', route: '/game/' + liveId, gameId: liveId, teamIds: [slate[0].away, slate[0].home], fallbackLabel: 'LIVE' } : null,
        { type: 'standings', eyebrow: '순위', title: leader.teamName + ' 선두', subtitle: leader.wins + '승 ' + leader.losses + '패 · 승률 ' + leader.pct, route: '/standings', teamIds: [leader.teamId], fallbackLabel: '1위' },
        { type: 'batting_leader', eyebrow: '홈런 1위', title: hitter.name + ' ' + hitter.value + '홈런', subtitle: '체험판 가상 선수', route: '/records', teamIds: [hitter.teamId], imageUrl: IMG, fallbackLabel: 'HR' },
        { type: 'pitcher_check', eyebrow: 'ERA 1위', title: pitcher.name + ' ' + pitcher.value, subtitle: '체험판 가상 선수', route: '/records', teamIds: [pitcher.teamId], imageUrl: IMG, fallbackLabel: 'ERA' },
      ].filter(Boolean) },
      quickItems: [
        { eyebrow: '기록실', title: '시즌 리더보드', subtitle: '타격·투수 부문 순위', route: '/records', fallbackLabel: '기록' },
        { eyebrow: '일정', title: '이번 달 경기', subtitle: '날짜별 경기 일정', route: '/schedule', fallbackLabel: '일정' },
      ],
      standingsPreview: standings.slice(0, 5),
      meta: { generatedAt: new Date().toISOString(), demo: true },
    };
  }

  // ── 라우터 ──
  function route(method, url, body) {
    var u = new URL(url);
    var path = u.pathname.replace(/^\/api/, '') || '/';
    var q = u.searchParams;
    var season = Number(q.get('season')) || kstDate().getUTCFullYear();
    var m;
    if (method !== 'GET') {
      if (/^\/(push|metrics)\//.test(path)) return { accepted: false, demo: true };
      return null;
    }
    if (path === '/health') return { status: 'ok' };
    if (path === '/home') return homeJson(q.get('date') || today(), q.get('myTeam'));
    if (path === '/scoreboard/home' || path === '/scoreboard/compact') return scoreboardJson(q.get('date') || today());
    if (path === '/schedule') return scheduleJson(q.get('month') || today().slice(0, 7));
    if (path === '/standings') return { season: season, standings: standingsJson(season) };
    if (path === '/records/overview') return recordsOverviewJson(season);
    if (path === '/records/leaderboard') return { season: season, metric: q.get('metric'), leaders: leaders(q.get('metric') || 'avg', 20) };
    if ((m = /^\/game\/([^/]+)\/relay$/.exec(path))) return relayJson(m[1]);
    if ((m = /^\/game\/([^/]+)\/boxscore$/.exec(path))) return boxscoreJson(m[1]);
    if ((m = /^\/game\/([^/]+)\/lineup$/.exec(path))) return lineupJson(m[1]);
    if ((m = /^\/game\/([^/]+)\/highlights$/.exec(path))) return parseGameId(m[1]) ? { gameId: m[1], highlightInfo: null } : null;
    if ((m = /^\/game\/([^/]+)$/.exec(path))) { var g = gameJson(m[1]); return g ? { game: g } : null; }
    if ((m = /^\/team\/([A-Z]{2})\/players$/.exec(path)) && TEAM[m[1]]) {
      var ros = rosterOf(m[1]);
      return { teamId: m[1], season: season, players: ros.hitters.concat(ros.pitchers).map(function (p) { return playerJson(p, season); }) };
    }
    if ((m = /^\/team\/([A-Z]{2})\/stats$/.exec(path)) && TEAM[m[1]]) return teamStatsJson(m[1], season);
    if ((m = /^\/team\/([A-Z]{2})\/records$/.exec(path)) && TEAM[m[1]]) {
      var r2 = rosterOf(m[1]);
      return { teamId: m[1], season: season, players: r2.hitters.concat(r2.pitchers).map(function (p) { return playerJson(p, season); }), teamStats: teamStatsJson(m[1], season) };
    }
    if ((m = /^\/player\/([^/]+)$/.exec(path))) {
      var pl = buildRosters().byId[m[1]];
      return pl ? playerJson(pl, season) : null;
    }
    return null;
  }

  // ── 네트워크 shim ──
  var NativeXHR = window.XMLHttpRequest;
  var nativeFetch = window.fetch ? window.fetch.bind(window) : null;
  var blocked = [];
  function isDemoApi(url) { return String(url).indexOf(API_ORIGIN) === 0; }
  function isSameOrigin(url) {
    try { return new URL(String(url), document.baseURI).origin === location.origin; } catch (_) { return true; }
  }
  function isLocalScheme(url) { return /^(data|blob):/.test(String(url)); }
  function apiResponse(method, url, body) {
    var data = null;
    try { data = route(method, url, body); } catch (error) {
      return { status: 500, body: JSON.stringify({ success: false, data: null, error: { code: 'DEMO_ERROR', message: String(error) }, timestamp: new Date().toISOString() }) };
    }
    if (data === null) return { status: 404, body: JSON.stringify({ success: false, data: null, error: { code: 'NOT_FOUND', message: '예시 데이터에 없는 항목입니다.' }, timestamp: new Date().toISOString() }) };
    return { status: 200, body: JSON.stringify({ success: true, data: data, error: null, timestamp: new Date().toISOString() }) };
  }

  class DemoXHR extends NativeXHR {
    open(method, url) {
      var target = String(url);
      this.__demoUrl = isDemoApi(target) ? target : null;
      this.__blocked = !this.__demoUrl && !isLocalScheme(target) && !isSameOrigin(target);
      if (this.__blocked) blocked.push(target);
      this.__method = String(method).toUpperCase();
      this.__state = 1;
      this.__status = 0;
      this.__payload = null;
      if (this.__demoUrl || this.__blocked) { this.dispatchEvent(new Event('readystatechange')); return; }
      return super.open.apply(this, arguments);
    }
    setRequestHeader() { if (this.__demoUrl || this.__blocked) return; return super.setRequestHeader.apply(this, arguments); }
    getAllResponseHeaders() { return this.__demoUrl ? 'content-type: application/json\r\n' : super.getAllResponseHeaders(); }
    getResponseHeader(name) { return this.__demoUrl ? (String(name).toLowerCase() === 'content-type' ? 'application/json' : null) : super.getResponseHeader(name); }
    get readyState() { return this.__demoUrl || this.__blocked ? this.__state : super.readyState; }
    get status() { return this.__demoUrl || this.__blocked ? this.__status : super.status; }
    get statusText() { return this.__demoUrl ? (this.__status === 200 ? 'OK' : 'Not Found') : super.statusText; }
    get responseURL() { return this.__demoUrl ? this.__demoUrl : super.responseURL; }
    get responseText() { return this.__demoUrl ? (this.__payload || '') : super.responseText; }
    get response() {
      if (!this.__demoUrl) return super.response;
      if (this.__state !== 4) return null;
      var type = this.responseType;
      if (type === 'arraybuffer') return new TextEncoder().encode(this.__payload).buffer;
      if (type === 'blob') return new Blob([this.__payload], { type: 'application/json' });
      if (type === 'json') return JSON.parse(this.__payload);
      return this.__payload;
    }
    send(body) {
      if (this.__blocked) {
        var self0 = this;
        setTimeout(function () { self0.__state = 4; self0.dispatchEvent(new Event('readystatechange')); self0.dispatchEvent(new ProgressEvent('error')); self0.dispatchEvent(new ProgressEvent('loadend')); }, 0);
        return;
      }
      if (!this.__demoUrl) return super.send(body);
      var self = this;
      var res = apiResponse(this.__method, this.__demoUrl, body);
      setTimeout(function () {
        self.__status = res.status;
        self.__payload = res.body;
        self.__state = 4;
        var size = res.body.length;
        self.dispatchEvent(new Event('readystatechange'));
        self.dispatchEvent(new ProgressEvent('load', { lengthComputable: true, loaded: size, total: size }));
        self.dispatchEvent(new ProgressEvent('loadend', { lengthComputable: true, loaded: size, total: size }));
      }, 60 + Math.random() * 90);
    }
    abort() { if (this.__demoUrl || this.__blocked) return; return super.abort(); }
  }
  window.XMLHttpRequest = DemoXHR;

  if (nativeFetch) {
    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || String(input);
      var method = (init && init.method) || (input && input.method) || 'GET';
      if (isDemoApi(url)) {
        var res = apiResponse(String(method).toUpperCase(), url, init && init.body);
        return Promise.resolve(new Response(res.body, { status: res.status, headers: { 'content-type': 'application/json' } }));
      }
      // 엔진의 폰트 폴백 요청은 내려받지 않고 번들 폰트로 응답한다.
      if (String(url).indexOf('demo-fonts/') !== -1) {
        return nativeFetch(new URL('assets/assets/fonts/NanumSquareRoundR.ttf', document.baseURI).href);
      }
      if (!isLocalScheme(url) && !isSameOrigin(url)) {
        blocked.push(url);
        return Promise.reject(new TypeError('체험판에서는 외부 요청을 보내지 않습니다'));
      }
      return nativeFetch(input, init);
    };
  }
  // 푸시/서비스 워커/비콘 비활성화
  if (window.Notification) {
    try { window.Notification.requestPermission = function () { return Promise.resolve('denied'); }; } catch (_) {}
  }
  if (navigator.serviceWorker) {
    try { navigator.serviceWorker.register = function () { return Promise.reject(new Error('체험판에서는 서비스 워커를 쓰지 않습니다')); }; } catch (_) {}
  }
  if (navigator.sendBeacon) { try { navigator.sendBeacon = function () { return true; }; } catch (_) {} }

  // 쉘(위젯 미리보기)과 검증 코드가 읽는 공개 인터페이스
  window.KboDemo = {
    blockedRequests: blocked,
    rosterNames: function () { return Object.keys(buildRosters().byId).map(function (id) { return buildRosters().byId[id].name; }); },
    primaryGame: function () {
      var slate = todaySlate();
      var p = slate.pairs[0];
      return gameJson(gameIdOf(slate.date, p.away, p.home));
    },
    relay: relayJson,
    scoreboard: function () { return scoreboardJson(today()).games; },
    route: function (path) { return JSON.parse(apiResponse('GET', API_ORIGIN + path).body); },
    reset: function () {
      store(function (s) {
        Object.keys(s).forEach(function (key) {
          if (key.indexOf('flutter.') === 0 || key.indexOf('kbo-demo.') === 0) s.removeItem(key);
        });
      });
      memoryT0 = null;
    },
  };
})();
