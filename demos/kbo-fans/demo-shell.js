/* 체험판 쉘: 예시 표시, 다시 시작, 외부 링크 차단, iOS 위젯 설명용 미리보기 */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  function esc(v) { return String(v == null ? '' : v).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var toastTimer = 0;
  function toast(text) {
    var el = $('demo-toast');
    el.textContent = text;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 2600);
  }

  $('demo-reset').addEventListener('click', function () {
    window.KboDemo.reset();
    history.replaceState(null, '', document.baseURI);
    location.reload();
  });
  $('demo-widget-open').addEventListener('click', function () { $('demo-panel').classList.add('is-open'); render(); });
  $('demo-widget-close').addEventListener('click', function () { $('demo-panel').classList.remove('is-open'); });

  // 앱 안의 예매·공식 링크는 새 창을 열지 않는다.
  window.open = function () { toast('체험판에서는 외부 링크를 열지 않습니다'); return null; };

  window.addEventListener('flutter-first-frame', hideSplash);
  var splashWatch = setInterval(function () {
    if (document.querySelector('#flutter-host flutter-view, #flutter-host flt-glass-pane')) { clearInterval(splashWatch); setTimeout(hideSplash, 200); }
  }, 200);
  function hideSplash() {
    var s = $('boot-splash');
    if (!s) return;
    s.classList.add('is-hidden');
    setTimeout(function () { if (s.parentNode) s.parentNode.removeChild(s); }, 240);
  }

  function statusText(g) {
    if (g.status === 'LIVE') return g.inning + ' · ' + g.stadium;
    if (g.status === 'FINAL') return '경기 종료 · ' + g.stadium;
    return g.startTime + ' · ' + g.stadium;
  }
  function scoreText(g) { return g.status === 'LIVE' || g.status === 'FINAL' ? g.away.score + ' : ' + g.home.score : 'vs'; }

  function render() {
    var panel = $('demo-panel');
    if (getComputedStyle(panel).display === 'none') return;
    var api = window.KboDemo;
    var g = api.primaryGame();
    var title = g.away.shortName + ' vs ' + g.home.shortName;
    var badge = g.status === 'LIVE' ? '<span class="w-live-badge">LIVE</span>' : '<span>종료</span>';
    $('w-small').innerHTML = '<div class="w-brand"><span>KBO Fans</span>' + badge + '</div><div class="w-title">' + esc(title) + '</div>' +
      '<div class="w-score">' + esc(scoreText(g)) + '</div><div class="w-status">' + esc(statusText(g)) + '</div>';
    var games = api.scoreboard().slice(0, 3);
    $('w-medium').innerHTML = '<div class="w-brand"><span>오늘의 KBO · 예시</span><span>' + games.filter(function (x) { return x.status === 'LIVE'; }).length + '경기 진행</span></div>' +
      games.map(function (x) {
        return '<div class="w-line"><span>' + esc(x.away.shortName + ' vs ' + x.home.shortName) + '</span><span>' + esc(scoreText(x)) + ' <span class="w-muted">' + esc(x.status === 'LIVE' ? x.inning : '종료') + '</span></span></div>';
      }).join('');
    var relay = api.relay(g.gameId);
    var items = relay.relayItems.filter(function (x) { return x.event !== 'GAME_END' && x.event !== 'SUBSTITUTION'; });
    var last = items[items.length - 1];
    var bat = relay.currentAtBat;
    $('w-live').innerHTML = '<div class="w-live-top"><span class="w-live-team">' + esc(g.away.shortName) + '</span><span class="w-live-score">' + esc(scoreText(g)) + '</span><span class="w-live-team">' + esc(g.home.shortName) + '</span></div>' +
      '<div class="w-status" style="text-align:center">' + esc(bat ? bat.inningText + (bat.baseState ? ' · ' + bat.baseState : '') + ' · ' + bat.ballCount.outs + '아웃' : '경기 종료') + '</div>' +
      '<div class="w-live-play">' + esc(last ? last.text : '곧 첫 타석이 시작됩니다') + '</div>';
  }
  render();
  setInterval(render, 2000);
  window.addEventListener('resize', render);
})();
