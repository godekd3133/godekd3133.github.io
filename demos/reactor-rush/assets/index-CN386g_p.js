(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const rl="180",Ed=0,zl=1,Td=2,uu=1,du=2,ni=3,ui=0,Ue=1,ve=2,Ri=0,Rs=1,Pa=2,Ol=3,Bl=4,Ad=5,Wi=100,Rd=101,Cd=102,Pd=103,Dd=104,Ld=200,Id=201,Ud=202,Nd=203,Qo=204,tc=205,Fd=206,zd=207,Od=208,Bd=209,kd=210,Hd=211,Vd=212,Gd=213,Wd=214,ec=0,nc=1,ic=2,Ds=3,sc=4,rc=5,ac=6,oc=7,fu=0,Xd=1,$d=2,Ci=0,qd=1,Yd=2,Zd=3,pu=4,Kd=5,jd=6,Jd=7,mu=300,Ls=301,Is=302,cc=303,lc=304,Xa=306,hc=1e3,$i=1001,uc=1002,Xe=1003,Qd=1004,zr=1005,Vn=1006,so=1007,qi=1008,qn=1009,gu=1010,vu=1011,mr=1012,al=1013,Zi=1014,Gn=1015,Pr=1016,ol=1017,cl=1018,gr=1020,xu=35902,_u=35899,Mu=1021,yu=1022,Ln=1023,vr=1026,xr=1027,Dr=1028,ll=1029,bu=1030,hl=1031,ul=1033,ma=33776,ga=33777,va=33778,xa=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,vc=37492,xc=37496,_c=37808,Mc=37809,yc=37810,bc=37811,Sc=37812,wc=37813,Ec=37814,Tc=37815,Ac=37816,Rc=37817,Cc=37818,Pc=37819,Dc=37820,Lc=37821,Ic=36492,Uc=36494,Nc=36495,Fc=36283,zc=36284,Oc=36285,Bc=36286,tf=3200,ef=3201,dl=0,nf=1,wi="",Je="srgb",Us="srgb-linear",Da="linear",ue="srgb",rs=7680,kl=519,sf=512,rf=513,af=514,Su=515,of=516,cf=517,lf=518,hf=519,Hl=35044,$a=35048,Vl="300 es",Wn=2e3,La=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,kc=180/Math.PI;function Lr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function uf(i,t){return(i%t+t)%t}function ao(i,t,e){return(1-e)*i+e*t}function js(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const p=r[a+0],f=r[a+1],x=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=x,t[e+3]=y;return}if(d!==y||l!==p||c!==f||h!==x){let v=1-o;const u=l*p+c*f+h*x+d*y,_=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const C=Math.sqrt(S),m=Math.atan2(C,u*_);v=Math.sin(v*m)/C,o=Math.sin(o*m)/C}const b=o*_;if(l=l*v+p*b,c=c*v+f*b,h=h*v+x*b,d=d*v+y*b,v===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],p=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*d+l*f-c*p,t[e+1]=l*x+h*p+c*d-o*f,t[e+2]=c*x+h*f+o*p-l*d,t[e+3]=h*x-o*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),p=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*h*d+c*f*x,this._y=c*f*d-p*h*x,this._z=c*h*x+p*f*d,this._w=c*h*d-p*f*x;break;case"YXZ":this._x=p*h*d+c*f*x,this._y=c*f*d-p*h*x,this._z=c*h*x-p*f*d,this._w=c*h*d+p*f*x;break;case"ZXY":this._x=p*h*d-c*f*x,this._y=c*f*d+p*h*x,this._z=c*h*x+p*f*d,this._w=c*h*d-p*f*x;break;case"ZYX":this._x=p*h*d-c*f*x,this._y=c*f*d+p*h*x,this._z=c*h*x-p*f*d,this._w=c*h*d+p*f*x;break;case"YZX":this._x=p*h*d+c*f*x,this._y=c*f*d+p*h*x,this._z=c*h*x-p*f*d,this._w=c*h*d-p*f*x;break;case"XZY":this._x=p*h*d-c*f*x,this._y=c*f*d-p*h*x,this._z=c*h*x+p*f*d,this._w=c*h*d+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=n+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new U,Gl=new Ir;class Xt{constructor(t,e,n,s,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],f=n[5],x=n[8],y=s[0],v=s[3],u=s[6],_=s[1],S=s[4],b=s[7],C=s[2],m=s[5],T=s[8];return r[0]=a*y+o*_+l*C,r[3]=a*v+o*S+l*m,r[6]=a*u+o*b+l*T,r[1]=c*y+h*_+d*C,r[4]=c*v+h*S+d*m,r[7]=c*u+h*b+d*T,r[2]=p*y+f*_+x*C,r[5]=p*v+f*S+x*m,r[8]=p*u+f*b+x*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,p=o*l-h*r,f=c*r-a*l,x=e*d+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=p*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Xt;function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){const i=_r("canvas");return i.style.display="block",i}const Wl={};function Mr(i){i in Wl||(Wl[i]=!0,console.warn(i))}function ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Xl=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){const i={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Us]:{primaries:t,whitePoint:n,transfer:Da,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),i}const ae=pf();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let as;class mf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=_r("canvas")),as.width=t.width,as.height=t.height;const s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gf=0;class fl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;const ho=new U;class ke extends Gs{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=$i,s=$i,r=Vn,a=qi,o=Ln,l=qn,c=ke.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Lr(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hc:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hc:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=mu;ke.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],x=l[9],y=l[2],v=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-y)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+y)<.1&&Math.abs(x+v)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,b=(f+1)/2,C=(u+1)/2,m=(h+p)/4,T=(d+y)/4,D=(x+v)/4;return S>b&&S>C?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=m/n,r=T/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=m/s,r=D/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=D/r),this.set(n,s,r,e),this}let _=Math.sqrt((v-x)*(v-x)+(d-y)*(d-y)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(v-x)/_,this.y=(d-y)/_,this.z=(p-h)/_,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends Gs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new ke(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new fl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eu extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _f extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Br.subVectors(this.max,Js),os.subVectors(t.a,Js),cs.subVectors(t.b,Js),ls.subVectors(t.c,Js),pi.subVectors(cs,os),mi.subVectors(ls,cs),zi.subVectors(os,ls);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-zi.z,zi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,zi.z,0,-zi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-zi.y,zi.x,0];return!uo(e,os,cs,ls,Br)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,os,cs,ls,Br))?!1:(kr.crossVectors(pi,mi),e=[kr.x,kr.y,kr.z],uo(e,os,cs,ls,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const jn=[new U,new U,new U,new U,new U,new U,new U,new U],Tn=new U,Or=new es,os=new U,cs=new U,ls=new U,pi=new U,mi=new U,zi=new U,Js=new U,Br=new U,kr=new U,Oi=new U;function uo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);const o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mf=new es,Qs=new U,fo=new U;class ns{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(fo)),this.expandByPoint(Qs.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Jn=new U,po=new U,Hr=new U,gi=new U,mo=new U,Vr=new U,go=new U;class qa{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){po.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(po);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hr),o=gi.dot(this.direction),l=-gi.dot(Hr),c=gi.lengthSq(),h=Math.abs(1-a*a);let d,p,f,x;if(h>0)if(d=a*l-o,p=a*o-l,x=r*h,d>=0)if(p>=-x)if(p<=x){const y=1/h;d*=y,p*=y,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(po).addScaledVector(Hr,p),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){mo.subVectors(e,t),Vr.subVectors(n,t),go.crossVectors(mo,Vr);let a=this.direction.dot(go),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,t);const l=o*this.direction.dot(Vr.crossVectors(gi,Vr));if(l<0)return null;const c=o*this.direction.dot(mo.cross(gi));if(c<0||l+c>a)return null;const h=-o*gi.dot(go);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,l,c,h,d,p,f,x,y,v){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,p,f,x,y,v)}set(t,e,n,s,r,a,o,l,c,h,d,p,f,x,y,v){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=x,u[11]=y,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*h,f=a*d,x=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+x*c,e[5]=p-y*c,e[9]=-o*l,e[2]=y-p*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,f=l*d,x=c*h,y=c*d;e[0]=p+y*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=y+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,f=l*d,x=c*h,y=c*d;e[0]=p-y*o,e[4]=-a*d,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=y-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,f=a*d,x=o*h,y=o*d;e[0]=l*h,e[4]=x*c-f,e[8]=p*c+y,e[1]=l*d,e[5]=y*c+p,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=y-p*d,e[8]=x*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+x,e[10]=p-y*d}else if(t.order==="XZY"){const p=a*l,f=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+y,e[5]=a*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=o*h,e[10]=y*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,bf)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),vi.crossVectors(n,cn),vi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),vi.crossVectors(n,cn)),vi.normalize(),Gr.crossVectors(cn,vi),s[0]=vi.x,s[4]=Gr.x,s[8]=cn.x,s[1]=vi.y,s[5]=Gr.y,s[9]=cn.y,s[2]=vi.z,s[6]=Gr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],f=n[13],x=n[2],y=n[6],v=n[10],u=n[14],_=n[3],S=n[7],b=n[11],C=n[15],m=s[0],T=s[4],D=s[8],E=s[12],g=s[1],R=s[5],L=s[9],N=s[13],B=s[2],k=s[6],W=s[10],$=s[14],V=s[3],it=s[7],ft=s[11],_t=s[15];return r[0]=a*m+o*g+l*B+c*V,r[4]=a*T+o*R+l*k+c*it,r[8]=a*D+o*L+l*W+c*ft,r[12]=a*E+o*N+l*$+c*_t,r[1]=h*m+d*g+p*B+f*V,r[5]=h*T+d*R+p*k+f*it,r[9]=h*D+d*L+p*W+f*ft,r[13]=h*E+d*N+p*$+f*_t,r[2]=x*m+y*g+v*B+u*V,r[6]=x*T+y*R+v*k+u*it,r[10]=x*D+y*L+v*W+u*ft,r[14]=x*E+y*N+v*$+u*_t,r[3]=_*m+S*g+b*B+C*V,r[7]=_*T+S*R+b*k+C*it,r[11]=_*D+S*L+b*W+C*ft,r[15]=_*E+S*N+b*$+C*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],f=t[14],x=t[3],y=t[7],v=t[11],u=t[15];return x*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*f-n*l*f)+y*(+e*l*f-e*c*p+r*a*p-s*a*f+s*c*h-r*l*h)+v*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+u*(-s*o*h-e*l*d+e*o*p+s*a*d-n*a*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],f=t[11],x=t[12],y=t[13],v=t[14],u=t[15],_=d*v*c-y*p*c+y*l*f-o*v*f-d*l*u+o*p*u,S=x*p*c-h*v*c-x*l*f+a*v*f+h*l*u-a*p*u,b=h*y*c-x*d*c+x*o*f-a*y*f-h*o*u+a*d*u,C=x*d*l-h*y*l-x*o*p+a*y*p+h*o*v-a*d*v,m=e*_+n*S+s*b+r*C;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/m;return t[0]=_*T,t[1]=(y*p*r-d*v*r-y*s*f+n*v*f+d*s*u-n*p*u)*T,t[2]=(o*v*r-y*l*r+y*s*c-n*v*c-o*s*u+n*l*u)*T,t[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*f-n*l*f)*T,t[4]=S*T,t[5]=(h*v*r-x*p*r+x*s*f-e*v*f-h*s*u+e*p*u)*T,t[6]=(x*l*r-a*v*r-x*s*c+e*v*c+a*s*u-e*l*u)*T,t[7]=(a*p*r-h*l*r+h*s*c-e*p*c-a*s*f+e*l*f)*T,t[8]=b*T,t[9]=(x*d*r-h*y*r-x*n*f+e*y*f+h*n*u-e*d*u)*T,t[10]=(a*y*r-x*o*r+x*n*c-e*y*c-a*n*u+e*o*u)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*T,t[12]=C*T,t[13]=(h*y*s-x*d*s+x*n*p-e*y*p-h*n*v+e*d*v)*T,t[14]=(x*o*s-a*y*s-x*n*l+e*y*l+a*n*v-e*o*v)*T,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*p+e*o*p)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,p=r*c,f=r*h,x=r*d,y=a*h,v=a*d,u=o*d,_=l*c,S=l*h,b=l*d,C=n.x,m=n.y,T=n.z;return s[0]=(1-(y+u))*C,s[1]=(f+b)*C,s[2]=(x-S)*C,s[3]=0,s[4]=(f-b)*m,s[5]=(1-(p+u))*m,s[6]=(v+_)*m,s[7]=0,s[8]=(x+S)*T,s[9]=(v-_)*T,s[10]=(1-(p+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),o=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const c=1/r,h=1/a,d=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Wn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s);let x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===Wn)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===La)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Wn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),f=-(n+s)/(n-s);let x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===Wn)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===La)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new U,An=new le,yf=new U(0,0,0),bf=new U(1,1,1),vi=new U,Gr=new U,cn=new U,ql=new le,Yl=new Ir;class Yn{constructor(t=0,e=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sf=0;const Zl=new U,us=new Ir,Qn=new le,Wr=new U,tr=new U,wf=new U,Ef=new Ir,Kl=new U(1,0,0),jl=new U(0,1,0),Jl=new U(0,0,1),Ql={type:"added"},Tf={type:"removed"},ds={type:"childadded",child:null},vo={type:"childremoved",child:null};class _e extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new U,e=new Yn,n=new Ir,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Xt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(jl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return Zl.copy(t).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(jl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wr.copy(t):Wr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(tr,Wr,this.up):Qn.lookAt(Wr,tr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Qn),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tf),vo.child=t,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new U(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new U,ti=new U,xo=new U,ei=new U,fs=new U,ps=new U,th=new U,_o=new U,Mo=new U,yo=new U,bo=new Re,So=new Re,wo=new Re;class Pn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),ti.subVectors(n,e),xo.subVectors(t,e);const a=Rn.dot(Rn),o=Rn.dot(ti),l=Rn.dot(xo),c=ti.dot(ti),h=ti.dot(xo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,f=(c*l-o*h)*p,x=(a*h-o*l)*p;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return bo.setScalar(0),So.setScalar(0),wo.setScalar(0),bo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,n),wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(So,r.y),a.addScaledVector(wo,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),ti.subVectors(t,e),Rn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Rn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;fs.subVectors(s,n),ps.subVectors(r,n),_o.subVectors(t,n);const l=fs.dot(_o),c=ps.dot(_o);if(l<=0&&c<=0)return e.copy(n);Mo.subVectors(t,s);const h=fs.dot(Mo),d=ps.dot(Mo);if(h>=0&&d<=h)return e.copy(s);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fs,a);yo.subVectors(t,r);const f=fs.dot(yo),x=ps.dot(yo);if(x>=0&&f<=x)return e.copy(r);const y=f*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(ps,o);const v=h*x-f*d;if(v<=0&&d-h>=0&&f-x>=0)return th.subVectors(r,s),o=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(th,o);const u=1/(v+y+p);return a=y*u,o=p*u,e.copy(n).addScaledVector(fs,a).addScaledVector(ps,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=uf(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Eo(a,r,t+1/3),this.g=Eo(a,r,t),this.b=Eo(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ae.workingToColorSpace(Ge.copy(this),t),Math.round(Jt(Ge.r*255,0,255))*65536+Math.round(Jt(Ge.g*255,0,255))*256+Math.round(Jt(Ge.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Je){ae.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Xr);const n=ao(xi.h,Xr.h,e),s=ao(xi.s,Xr.s,e),r=ao(xi.l,Xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Gt;Gt.NAMES=Tu;let Af=0;class Ii extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Rs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=tc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ee extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new U,$r=new Tt;let Rf=0;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=js(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=js(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=js(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}}class Au extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ru extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cf=0;const gn=new le,To=new _e,ms=new U,ln=new es,er=new es,Oe=new U;class Se extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?Ru:Au)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(ln.min,er.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,er.max),ln.expandByPoint(Oe)):(ln.expandByPoint(er.min),ln.expandByPoint(er.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(t,c),Oe.add(ms)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new U,l[D]=new U;const c=new U,h=new U,d=new U,p=new Tt,f=new Tt,x=new Tt,y=new U,v=new U;function u(D,E,g){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,g),p.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,g),h.sub(c),d.sub(c),f.sub(p),x.sub(p);const R=1/(f.x*x.y-x.x*f.y);isFinite(R)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(R),v.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(R),o[D].add(y),o[E].add(y),o[g].add(y),l[D].add(v),l[E].add(v),l[g].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,E=_.length;D<E;++D){const g=_[D],R=g.start,L=g.count;for(let N=R,B=R+L;N<B;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new U,b=new U,C=new U,m=new U;function T(D){C.fromBufferAttribute(s,D),m.copy(C);const E=o[D];S.copy(E),S.sub(C.multiplyScalar(C.dot(E))).normalize(),b.crossVectors(m,E);const R=b.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,R)}for(let D=0,E=_.length;D<E;++D){const g=_[D],R=g.start,L=g.count;for(let N=R,B=R+L;N<B;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let p=0,f=t.count;p<f;p+=3){const x=t.getX(p+0),y=t.getX(p+1),v=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,v),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let f=0,x=0;for(let y=0,v=l.length;y<v;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let u=0;u<h;u++)p[x++]=c[f++]}return new tn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new le,Bi=new qa,qr=new ns,nh=new U,Yr=new U,Zr=new U,Kr=new U,Ao=new U,jr=new U,ih=new U,Jr=new U;class at extends _e{constructor(t=new Se,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ao.fromBufferAttribute(d,t),a?jr.addScaledVector(Ao,h):jr.addScaledVector(Ao.sub(e),h))}e.add(jr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(qr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(qr,nh)===null||Bi.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(eh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=p.length;x<y;x++){const v=p[x],u=a[v.materialIndex],_=Math.max(v.start,f.start),S=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let b=_,C=S;b<C;b+=3){const m=o.getX(b),T=o.getX(b+1),D=o.getX(b+2);s=Qr(this,u,t,n,c,h,d,m,T,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let v=x,u=y;v<u;v+=3){const _=o.getX(v),S=o.getX(v+1),b=o.getX(v+2);s=Qr(this,a,t,n,c,h,d,_,S,b),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=p.length;x<y;x++){const v=p[x],u=a[v.materialIndex],_=Math.max(v.start,f.start),S=Math.min(l.count,Math.min(v.start+v.count,f.start+f.count));for(let b=_,C=S;b<C;b+=3){const m=b,T=b+1,D=b+2;s=Qr(this,u,t,n,c,h,d,m,T,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let v=x,u=y;v<u;v+=3){const _=v,S=v+1,b=v+2;s=Qr(this,a,t,n,c,h,d,_,S,b),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}}function Pf(i,t,e,n,s,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ui,o),l===null)return null;Jr.copy(o),Jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:i}}function Qr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Yr),i.getVertexPosition(l,Zr),i.getVertexPosition(c,Kr);const h=Pf(i,t,e,n,Yr,Zr,Kr,ih);if(h){const d=new U;Pn.getBarycoord(ih,Yr,Zr,Kr,d),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new U,materialIndex:0};Pn.getNormal(Yr,Zr,Kr,p.normal),h.face=p,h.barycoord=d}return h}class Sn extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function x(y,v,u,_,S,b,C,m,T,D,E){const g=b/T,R=C/D,L=b/2,N=C/2,B=m/2,k=T+1,W=D+1;let $=0,V=0;const it=new U;for(let ft=0;ft<W;ft++){const _t=ft*R-N;for(let $t=0;$t<k;$t++){const se=$t*g-L;it[y]=se*_,it[v]=_t*S,it[u]=B,c.push(it.x,it.y,it.z),it[y]=0,it[v]=0,it[u]=m>0?1:-1,h.push(it.x,it.y,it.z),d.push($t/T),d.push(1-ft/D),$+=1}}for(let ft=0;ft<D;ft++)for(let _t=0;_t<T;_t++){const $t=p+_t+k*ft,se=p+_t+k*(ft+1),de=p+(_t+1)+k*(ft+1),oe=p+(_t+1)+k*ft;l.push($t,se,oe),l.push(se,de,oe),V+=6}o.addGroup(f,V,E),f+=V,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Ns(i[e]);for(const s in n)t[s]=n[s]}return t}function Df(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Lf={clone:Ns,merge:Ze};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pu extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new U,sh=new Tt,rh=new Tt;class _n extends Pu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ro*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,vs=1;class Nf extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(gs,vs,t,e);s.layers=this.layers,this.add(s);const r=new _n(gs,vs,t,e);r.layers=this.layers,this.add(r);const a=new _n(gs,vs,t,e);a.layers=this.layers,this.add(a);const o=new _n(gs,vs,t,e);o.layers=this.layers,this.add(o);const l=new _n(gs,vs,t,e);l.layers=this.layers,this.add(l);const c=new _n(gs,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Du extends ke{constructor(t=[],e=Ls,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ff extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Du(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Sn(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Ri});r.uniforms.tEquirect.value=e;const a=new at(s,r),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=Vn),new Nf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class ut extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zf={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const v=e.getJointPose(y,n),u=this._getHandJoint(c,y);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&p>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ml{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Of extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gl extends ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Xe,h=Xe,d,p){super(null,a,o,l,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ah extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new le,oh=new le,ta=[],ch=new es,Bf=new le,nr=new at,ir=new ns;class ji extends at{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ah(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new es),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),ch.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(ch)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),ir.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),oh.multiplyMatrices(n,xs),nr.matrixWorld=oh,nr.raycast(t,ta);for(let a=0,o=ta.length;a<o;a++){const l=ta[a];l.instanceId=r,l.object=this,e.push(l)}ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ah(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gl(new Float32Array(s*this.count),s,this.count,Dr,Gn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Co=new U,kf=new U,Hf=new Xt;class Si{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Co.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hf.getNormalMatrix(t),s=this.coplanarPoint(Co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new ns,Vf=new Tt(.5,.5),ea=new U;class vl{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,a=new Si){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],p=r[6],f=r[7],x=r[8],y=r[9],v=r[10],u=r[11],_=r[12],S=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,u-x,C-_).normalize(),s[1].setComponents(c+a,f+h,u+x,C+_).normalize(),s[2].setComponents(c+o,f+d,u+y,C+S).normalize(),s[3].setComponents(c-o,f-d,u-y,C-S).normalize(),n)s[4].setComponents(l,p,v,b).normalize(),s[5].setComponents(c-l,f-p,u-v,C-b).normalize();else if(s[4].setComponents(c-l,f-p,u-v,C-b).normalize(),e===Wn)s[5].setComponents(c+l,f+p,u+v,C+b).normalize();else if(e===La)s[5].setComponents(l,p,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);const e=Vf.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ea.x=s.normal.x>0?t.max.x:t.min.x,ea.y=s.normal.y>0?t.max.y:t.min.y,ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ya extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ia=new U,Ua=new U,lh=new le,sr=new qa,na=new ns,Po=new U,hh=new U;class xl extends _e{constructor(t=new Se,e=new Ya){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ia.fromBufferAttribute(e,s-1),Ua.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(Ua);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;lh.copy(s).invert(),sr.copy(t.ray).applyMatrix4(lh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=f,v=x-1;y<v;y+=c){const u=h.getX(y),_=h.getX(y+1),S=ia(this,t,sr,l,u,_,y);S&&e.push(S)}if(this.isLineLoop){const y=h.getX(x-1),v=h.getX(f),u=ia(this,t,sr,l,y,v,x-1);u&&e.push(u)}}else{const f=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let y=f,v=x-1;y<v;y+=c){const u=ia(this,t,sr,l,y,y+1,y);u&&e.push(u)}if(this.isLineLoop){const y=ia(this,t,sr,l,x-1,f,x-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ia(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Ia.fromBufferAttribute(o,s),Ua.fromBufferAttribute(o,r),e.distanceSqToSegment(Ia,Ua,Po,hh)>n)return;Po.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Po);if(!(c<t.near||c>t.far))return{distance:c,point:hh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Gf extends xl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Lu extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uh=new le,Hc=new qa,sa=new ns,ra=new U;class Wf extends _e{constructor(t=new Se,e=new Lu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;uh.copy(s).invert(),Hc.copy(t.ray).applyMatrix4(uh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=p,y=f;x<y;x++){const v=c.getX(x);ra.fromBufferAttribute(d,v),dh(ra,v,l,s,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=p,y=f;x<y;x++)ra.fromBufferAttribute(d,x),dh(ra,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dh(i,t,e,n,s,r,a){const o=Hc.distanceSqToPoint(i);if(o<e){const l=new U;Hc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xf extends ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Iu extends ke{constructor(t,e,n=Zi,s,r,a,o=Xe,l=Xe,c,h=vr,d=1){if(h!==vr&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:d};super(p,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Uu extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fs extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new U,h=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fn extends Se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],p=[],f=[];let x=0;const y=[],v=n/2;let u=0;_(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(f,2));function _(){const b=new U,C=new U;let m=0;const T=(e-t)/n;for(let D=0;D<=r;D++){const E=[],g=D/r,R=g*(e-t)+t;for(let L=0;L<=s;L++){const N=L/s,B=N*l+o,k=Math.sin(B),W=Math.cos(B);C.x=R*k,C.y=-g*n+v,C.z=R*W,d.push(C.x,C.y,C.z),b.set(k,T,W).normalize(),p.push(b.x,b.y,b.z),f.push(N,1-g),E.push(x++)}y.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const g=y[E][D],R=y[E+1][D],L=y[E+1][D+1],N=y[E][D+1];(t>0||E!==0)&&(h.push(g,R,N),m+=3),(e>0||E!==r-1)&&(h.push(R,L,N),m+=3)}c.addGroup(u,m,0),u+=m}function S(b){const C=x,m=new Tt,T=new U;let D=0;const E=b===!0?t:e,g=b===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,v*g,0),p.push(0,g,0),f.push(.5,.5),x++;const R=x;for(let L=0;L<=s;L++){const B=L/s*l+o,k=Math.cos(B),W=Math.sin(B);T.x=E*W,T.y=v*g,T.z=E*k,d.push(T.x,T.y,T.z),p.push(0,g,0),m.x=k*.5+.5,m.y=W*.5*g+.5,f.push(m.x,m.y),x++}for(let L=0;L<s;L++){const N=C+L,B=R+L;b===!0?h.push(B,B+1,N):h.push(B+1,B,N),D+=3}c.addGroup(u,D,b===!0?1:2),u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ji extends fn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ji(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Za extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const S=new U,b=new U,C=new U;for(let m=0;m<e.length;m+=3)f(e[m+0],S),f(e[m+1],b),f(e[m+2],C),l(S,b,C,_)}function l(_,S,b,C){const m=C+1,T=[];for(let D=0;D<=m;D++){T[D]=[];const E=_.clone().lerp(b,D/m),g=S.clone().lerp(b,D/m),R=m-D;for(let L=0;L<=R;L++)L===0&&D===m?T[D][L]=E:T[D][L]=E.clone().lerp(g,L/R)}for(let D=0;D<m;D++)for(let E=0;E<2*(m-D)-1;E++){const g=Math.floor(E/2);E%2===0?(p(T[D][g+1]),p(T[D+1][g]),p(T[D][g])):(p(T[D][g+1]),p(T[D+1][g+1]),p(T[D+1][g]))}}function c(_){const S=new U;for(let b=0;b<r.length;b+=3)S.x=r[b+0],S.y=r[b+1],S.z=r[b+2],S.normalize().multiplyScalar(_),r[b+0]=S.x,r[b+1]=S.y,r[b+2]=S.z}function h(){const _=new U;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];const b=v(_)/2/Math.PI+.5,C=u(_)/Math.PI+.5;a.push(b,1-C)}x(),d()}function d(){for(let _=0;_<a.length;_+=6){const S=a[_+0],b=a[_+2],C=a[_+4],m=Math.max(S,b,C),T=Math.min(S,b,C);m>.9&&T<.1&&(S<.2&&(a[_+0]+=1),b<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function p(_){r.push(_.x,_.y,_.z)}function f(_,S){const b=_*3;S.x=t[b+0],S.y=t[b+1],S.z=t[b+2]}function x(){const _=new U,S=new U,b=new U,C=new U,m=new Tt,T=new Tt,D=new Tt;for(let E=0,g=0;E<r.length;E+=9,g+=6){_.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),m.set(a[g+0],a[g+1]),T.set(a[g+2],a[g+3]),D.set(a[g+4],a[g+5]),C.copy(_).add(S).add(b).divideScalar(3);const R=v(C);y(m,g+0,_,R),y(T,g+2,S,R),y(D,g+4,b,R)}}function y(_,S,b,C){C<0&&_.x===1&&(a[S]=_.x-1),b.x===0&&b.z===0&&(a[S]=C/2/Math.PI+.5)}function v(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.vertices,t.indices,t.radius,t.details)}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],p=n[s+1]-h,f=(a-h)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],a=[],o=new U,l=new le;for(let f=0;f<=t;f++){const x=f/t;s[f]=this.getTangentAt(x,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nu extends fi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*d+this.aX,c=p*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $f extends Nu{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _l(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;p*=h,f*=h,s(a,o,p,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const aa=new U,Do=new _l,Lo=new _l,Io=new _l;class qf extends fi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(aa.subVectors(s[0],s[1]).add(s[0]),c=aa);const d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(aa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(h),f);y<1e-4&&(y=1),x<1e-4&&(x=y),v<1e-4&&(v=y),Do.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,x,y,v),Lo.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,x,y,v),Io.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,x,y,v)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Lo.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),Io.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(Do.calc(l),Lo.calc(l),Io.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Yf(i,t){const e=1-i;return e*e*t}function Zf(i,t){return 2*(1-i)*i*t}function Kf(i,t){return i*i*t}function lr(i,t,e,n){return Yf(i,t)+Zf(i,e)+Kf(i,n)}function jf(i,t){const e=1-i;return e*e*e*t}function Jf(i,t){const e=1-i;return 3*e*e*i*t}function Qf(i,t){return 3*(1-i)*i*i*t}function tp(i,t){return i*i*i*t}function hr(i,t,e,n,s){return jf(i,t)+Jf(i,e)+Qf(i,n)+tp(i,s)}class ep extends fi{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class np extends fi{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y),hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ip extends fi{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sp extends fi{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rp extends fi{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(lr(t,s.x,r.x,a.x),lr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ml extends fi{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(lr(t,s.x,r.x,a.x),lr(t,s.y,r.y,a.y),lr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ap extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(fh(o,l.x,c.x,h.x,d.x),fh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var op=Object.freeze({__proto__:null,ArcCurve:$f,CatmullRomCurve3:qf,CubicBezierCurve:ep,CubicBezierCurve3:np,EllipseCurve:Nu,LineCurve:ip,LineCurve3:sp,QuadraticBezierCurve:rp,QuadraticBezierCurve3:Ml,SplineCurve:ap});class yl extends Za{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yl(t.radius,t.detail)}}class is extends Za{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new is(t.radius,t.detail)}}class Ur extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,p=e/l,f=[],x=[],y=[],v=[];for(let u=0;u<h;u++){const _=u*p-a;for(let S=0;S<c;S++){const b=S*d-r;x.push(b,-_,0),y.push(0,0,1),v.push(S/o),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const S=_+c*u,b=_+c*(u+1),C=_+1+c*(u+1),m=_+1+c*u;f.push(S,b,m),f.push(b,C,m)}this.setIndex(f),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.widthSegments,t.heightSegments)}}class $e extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const p=(e-t)/s,f=new U,x=new Tt;for(let y=0;y<=s;y++){for(let v=0;v<=n;v++){const u=r+v/n*a;f.x=d*Math.cos(u),f.y=d*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}d+=p}for(let y=0;y<s;y++){const v=y*(n+1);for(let u=0;u<n;u++){const _=u+v,S=_,b=_+n+1,C=_+n+2,m=_+1;o.push(S,b,m),o.push(b,C,m)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zn extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new U,p=new U,f=[],x=[],y=[],v=[];for(let u=0;u<=n;u++){const _=[],S=u/n;let b=0;u===0&&a===0?b=.5/e:u===n&&l===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){const m=C/e;d.x=-t*Math.cos(s+m*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(s+m*r)*Math.sin(a+S*o),x.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),v.push(m+b,1-S),_.push(c++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<e;_++){const S=h[u][_+1],b=h[u][_],C=h[u+1][_],m=h[u+1][_+1];(u!==0||a>0)&&f.push(S,b,m),(u!==n-1||l<Math.PI)&&f.push(b,C,m)}this.setIndex(f),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wn extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new U,d=new U,p=new U;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){const y=x/s*r,v=f/n*Math.PI*2;d.x=(t+e*Math.cos(v))*Math.cos(y),d.y=(t+e*Math.cos(v))*Math.sin(y),d.z=e*Math.sin(v),o.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){const y=(s+1)*f+x-1,v=(s+1)*(f-1)+x-1,u=(s+1)*(f-1)+x,_=(s+1)*f+x;a.push(y,v,_),a.push(v,u,_)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class bl extends Se{constructor(t=new Ml(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,l=new U,c=new Tt;let h=new U;const d=[],p=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(f,2));function y(){for(let S=0;S<e;S++)v(S);v(r===!1?e:0),_(),u()}function v(S){h=t.getPointAt(S/e,h);const b=a.normals[S],C=a.binormals[S];for(let m=0;m<=s;m++){const T=m/s*Math.PI*2,D=Math.sin(T),E=-Math.cos(T);l.x=E*b.x+D*C.x,l.y=E*b.y+D*C.y,l.z=E*b.z+D*C.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function u(){for(let S=1;S<=e;S++)for(let b=1;b<=s;b++){const C=(s+1)*(S-1)+(b-1),m=(s+1)*S+(b-1),T=(s+1)*S+b,D=(s+1)*(S-1)+b;x.push(C,m,D),x.push(m,T,D)}}function _(){for(let S=0;S<=e;S++)for(let b=0;b<=s;b++)c.x=S/e,c.y=b/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new bl(new op[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class pe extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sl extends Ii{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class cp extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lp extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hp extends Ya{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Uo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class up{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){const f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const dp=new up;class wl{constructor(t){this.manager=t!==void 0?t:dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}wl.DEFAULT_MATERIAL_NAME="__DEFAULT";const _s=new WeakMap;class fp extends wl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Uo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=_s.get(a);d===void 0&&(d=[],_s.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=_r("img");function l(){h(),e&&e(this);const d=_s.get(this)||[];for(let p=0;p<d.length;p++){const f=d[p];f.onLoad&&f.onLoad(this)}_s.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Uo.remove(`image:${t}`);const p=_s.get(this)||[];for(let f=0;f<p.length;f++){const x=p[f];x.onError&&x.onError(d)}_s.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Uo.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class pp extends wl{constructor(t){super(t)}load(t,e,n,s){const r=new ke,a=new fp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Fu extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mp extends Fu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const No=new le,ph=new U,mh=new U;class gp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(ph),mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mh),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zu extends Pu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vp extends gp{constructor(){super(new zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ou extends Fu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new vp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xp extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const gh=new le;class _p{constructor(t,e,n=0,s=1/0){this.ray=new qa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,n=[]){return Vc(t,this,n,e),n.sort(vh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vc(t[s],this,n,e);return n.sort(vh),n}}function vh(i,t){return i.distance-t.distance}function Vc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Vc(r[a],t,e,!0)}}function xh(i,t,e,n){const s=Mp(n);switch(e){case Mu:return i*t;case Dr:return i*t/s.components*s.byteLength;case ll:return i*t/s.components*s.byteLength;case bu:return i*t*2/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case yu:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case ul:return i*t*4/s.components*s.byteLength;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fc:case mc:return Math.max(i,16)*Math.max(t,8)/4;case dc:case pc:return Math.max(i,8)*Math.max(t,8)/2;case gc:case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ic:case Uc:case Nc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fc:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oc:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mp(i){switch(i){case qn:case gu:return{byteLength:1,components:1};case mr:case vu:case Pr:return{byteLength:2,components:1};case ol:case cl:return{byteLength:2,components:4};case Zi:case al:case Gn:return{byteLength:4,components:1};case xu:case _u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);function Bu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let p=0;for(let f=1;f<d.length;f++){const x=d[p],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++p,d[p]=y)}d.length=p+1;for(let f=0,x=d.length;f<x;f++){const y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:bp,alphahash_pars_fragment:Sp,alphamap_fragment:wp,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Dp,begin_vertex:Lp,beginnormal_vertex:Ip,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Zp,emissivemap_fragment:Kp,emissivemap_pars_fragment:jp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:cm,gradientmap_pars_fragment:lm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:vm,lights_phong_pars_fragment:xm,lights_physical_fragment:_m,lights_physical_pars_fragment:Mm,lights_fragment_begin:ym,lights_fragment_maps:bm,lights_fragment_end:Sm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:Fm,morphtarget_pars_vertex:zm,morphtarget_vertex:Om,normal_fragment_begin:Bm,normal_fragment_maps:km,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Ym,opaque_fragment:Zm,packing:Km,premultiplied_alpha_fragment:jm,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:a0,skinbase_vertex:o0,skinning_pars_vertex:c0,skinning_vertex:l0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:d0,tonemapping_fragment:f0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:v0,uv_pars_vertex:x0,uv_vertex:_0,worldpos_vertex:M0,background_vert:y0,background_frag:b0,backgroundCube_vert:S0,backgroundCube_frag:w0,cube_vert:E0,cube_frag:T0,depth_vert:A0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:D0,equirect_frag:L0,linedashed_vert:I0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:F0,meshlambert_vert:z0,meshlambert_frag:O0,meshmatcap_vert:B0,meshmatcap_frag:k0,meshnormal_vert:H0,meshnormal_frag:V0,meshphong_vert:G0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:$0,meshtoon_vert:q0,meshtoon_frag:Y0,points_vert:Z0,points_frag:K0,shadow_vert:j0,shadow_frag:J0,sprite_vert:Q0,sprite_frag:tg},ht={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},kn={basic:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ze([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ze([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ze([ht.points,ht.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ze([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ze([ht.common,ht.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ze([ht.sprite,ht.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ze([ht.common,ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ze([ht.lights,ht.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};kn.physical={uniforms:Ze([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const oa={r:0,b:0,g:0},Hi=new Yn,eg=new le;function ng(i,t,e,n,s,r,a){const o=new Gt(0);let l=r===!0?0:1,c,h,d=null,p=0,f=null;function x(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function y(S){let b=!1;const C=x(S);C===null?u(o,l):C&&C.isColor&&(u(C,1),b=!0);const m=i.xr.getEnvironmentBlendMode();m==="additive"?n.buffers.color.setClear(0,0,0,1,a):m==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,b){const C=x(b);C&&(C.isCubeTexture||C.mapping===Xa)?(h===void 0&&(h=new at(new Sn(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Ns(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(m,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(b.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(Hi)),h.material.toneMapped=ae.getTransfer(C.colorSpace)!==ue,(d!==C||p!==C.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=C,p=C.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new at(new Ur(2,2),new Di({name:"BackgroundMaterial",uniforms:Ns(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ae.getTransfer(C.colorSpace)!==ue,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||p!==C.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=C,p=C.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,b){S.getRGB(oa,Cu(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,b,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),l=b,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:y,addToRenderList:v,dispose:_}}function ig(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(g,R,L,N,B){let k=!1;const W=d(N,L,R);r!==W&&(r=W,c(r.object)),k=f(g,N,L,B),k&&x(g,N,L,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,b(g,R,L,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function d(g,R,L){const N=L.wireframe===!0;let B=n[g.id];B===void 0&&(B={},n[g.id]=B);let k=B[R.id];k===void 0&&(k={},B[R.id]=k);let W=k[N];return W===void 0&&(W=p(l()),k[N]=W),W}function p(g){const R=[],L=[],N=[];for(let B=0;B<e;B++)R[B]=0,L[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:N,object:g,attributes:{},index:null}}function f(g,R,L,N){const B=r.attributes,k=R.attributes;let W=0;const $=L.getAttributes();for(const V in $)if($[V].location>=0){const ft=B[V];let _t=k[V];if(_t===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(_t=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(_t=g.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function x(g,R,L,N){const B={},k=R.attributes;let W=0;const $=L.getAttributes();for(const V in $)if($[V].location>=0){let ft=k[V];ft===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(ft=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(ft=g.instanceColor));const _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),B[V]=_t,W++}r.attributes=B,r.attributesNum=W,r.index=N}function y(){const g=r.newAttributes;for(let R=0,L=g.length;R<L;R++)g[R]=0}function v(g){u(g,0)}function u(g,R){const L=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;L[g]=1,N[g]===0&&(i.enableVertexAttribArray(g),N[g]=1),B[g]!==R&&(i.vertexAttribDivisor(g,R),B[g]=R)}function _(){const g=r.newAttributes,R=r.enabledAttributes;for(let L=0,N=R.length;L<N;L++)R[L]!==g[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function S(g,R,L,N,B,k,W){W===!0?i.vertexAttribIPointer(g,R,L,B,k):i.vertexAttribPointer(g,R,L,N,B,k)}function b(g,R,L,N){y();const B=N.attributes,k=L.getAttributes(),W=R.defaultAttributeValues;for(const $ in k){const V=k[$];if(V.location>=0){let it=B[$];if(it===void 0&&($==="instanceMatrix"&&g.instanceMatrix&&(it=g.instanceMatrix),$==="instanceColor"&&g.instanceColor&&(it=g.instanceColor)),it!==void 0){const ft=it.normalized,_t=it.itemSize,$t=t.get(it);if($t===void 0)continue;const se=$t.buffer,de=$t.type,oe=$t.bytesPerElement,K=de===i.INT||de===i.UNSIGNED_INT||it.gpuType===al;if(it.isInterleavedBufferAttribute){const Q=it.data,Mt=Q.stride,Bt=it.offset;if(Q.isInstancedInterleavedBuffer){for(let Pt=0;Pt<V.locationSize;Pt++)u(V.location+Pt,Q.meshPerAttribute);g.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Pt=0;Pt<V.locationSize;Pt++)v(V.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Pt=0;Pt<V.locationSize;Pt++)S(V.location+Pt,_t/V.locationSize,de,ft,Mt*oe,(Bt+_t/V.locationSize*Pt)*oe,K)}else{if(it.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)u(V.location+Q,it.meshPerAttribute);g.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Q=0;Q<V.locationSize;Q++)v(V.location+Q);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Q=0;Q<V.locationSize;Q++)S(V.location+Q,_t/V.locationSize,de,ft,_t*oe,_t/V.locationSize*Q*oe,K)}}else if(W!==void 0){const ft=W[$];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(V.location,ft);break;case 3:i.vertexAttrib3fv(V.location,ft);break;case 4:i.vertexAttrib4fv(V.location,ft);break;default:i.vertexAttrib1fv(V.location,ft)}}}}_()}function C(){D();for(const g in n){const R=n[g];for(const L in R){const N=R[L];for(const B in N)h(N[B].object),delete N[B];delete R[L]}delete n[g]}}function m(g){if(n[g.id]===void 0)return;const R=n[g.id];for(const L in R){const N=R[L];for(const B in N)h(N[B].object),delete N[B];delete R[L]}delete n[g.id]}function T(g){for(const R in n){const L=n[R];if(L[g.id]===void 0)continue;const N=L[g.id];for(const B in N)h(N[B].object),delete N[B];delete L[g.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:m,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:v,disableUnusedAttributes:_}}function sg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];e.update(f,n,1)}function l(c,h,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],p[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let x=0;for(let y=0;y<d;y++)x+=h[y]*p[y];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ln&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==qn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,m=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:C,maxSamples:m}}function ag(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Si,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const x=d.clippingPlanes,y=d.clipIntersection,v=d.clipShadows,u=i.get(d);if(!s||x===null||x.length===0||r&&!v)r?h(null):c();else{const _=r?0:n,S=_*4;let b=u.clippingState||null;l.value=b,b=h(x,p,S,f);for(let C=0;C!==S;++C)b[C]=e[C];u.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,x){const y=d!==null?d.length:0;let v=null;if(y!==0){if(v=l.value,x!==!0||v===null){const u=f+y*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<u)&&(v=new Float32Array(u));for(let S=0,b=f;S!==y;++S,b+=4)a.copy(d[S]).applyMatrix4(_,o),a.normal.toArray(v,b),v[b+3]=a.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,v}}function og(i){let t=new WeakMap;function e(a,o){return o===cc?a.mapping=Ls:o===lc&&(a.mapping=Is),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cc||o===lc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ff(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ys=4,_h=[.125,.215,.35,.446,.526,.582],Xi=20,Fo=new zu,Mh=new Gt;let zo=null,Oo=0,Bo=0,ko=!1;const Gi=(1+Math.sqrt(5))/2,Ms=1/Gi,yh=[new U(-Gi,Ms,0),new U(Gi,Ms,0),new U(-Ms,0,Gi),new U(Ms,0,Gi),new U(0,Gi,-Ms),new U(0,Gi,Ms),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],cg=new U;class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=cg}=r;zo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zo,Oo,Bo),this._renderer.xr.enabled=ko,t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Pr,format:Ln,colorSpace:Us,depthBuffer:!1},s=Sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(r)),this._blurMaterial=hg(r,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,s,r){const l=new _n(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Mh),d.toneMapping=Ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const y=new ee({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),v=new at(new Sn,y);let u=!1;const _=t.background;_?_.isColor&&(y.color.copy(_),t.background=null,u=!0):(y.color.copy(Mh),u=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const C=this._cubeSize;ca(s,b*C,S>2?C:0,C,C),d.setRenderTarget(s),u&&d.render(v,l),d.render(t,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=p,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ls||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yh[(s-r-1)%yh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new at(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),y=r/x,v=isFinite(r)?1+Math.floor(h*y):Xi;v>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xi}`);const u=[];let _=0;for(let T=0;T<Xi;++T){const D=T/y,E=Math.exp(-D*D/2);u.push(E),T===0?_+=E:T<v&&(_+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;p.envMap.value=t.texture,p.samples.value=v,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=x,p.mipInt.value=S-n;const b=this._sizeLods[s],C=3*b*(s>S-ys?s-S+ys:0),m=4*(this._cubeSize-b);ca(e,C,m,3*b,2*b),l.setRenderTarget(e),l.render(d,Fo)}}function lg(i){const t=[],e=[],n=[];let s=i;const r=i-ys+1+_h.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ys?l=_h[a-i+ys-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,y=3,v=2,u=1,_=new Float32Array(y*x*f),S=new Float32Array(v*x*f),b=new Float32Array(u*x*f);for(let m=0;m<f;m++){const T=m%3*2/3-1,D=m>2?0:-1,E=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];_.set(E,y*x*m),S.set(p,v*x*m);const g=[m,m,m,m,m,m];b.set(g,u*x*m)}const C=new Se;C.setAttribute("position",new tn(_,y)),C.setAttribute("uv",new tn(S,v)),C.setAttribute("faceIndex",new tn(b,u)),t.push(C),s>ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sh(i,t,e){const n=new Ki(i,t,e);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hg(i,t,e){const n=new Float32Array(Xi),s=new U(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function wh(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Eh(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cc||l===lc,h=l===Ls||l===Is;if(c||h){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new bh(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new bh(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function dg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fg(i,t,e,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const f in p)t.update(p[f],i.ARRAY_BUFFER)}function c(d){const p=[],f=d.index,x=d.attributes.position;let y=0;if(f!==null){const _=f.array;y=f.version;for(let S=0,b=_.length;S<b;S+=3){const C=_[S+0],m=_[S+1],T=_[S+2];p.push(C,m,m,T,T,C)}}else if(x!==void 0){const _=x.array;y=x.version;for(let S=0,b=_.length/3-1;S<b;S+=3){const C=S+0,m=S+1,T=S+2;p.push(C,m,m,T,T,C)}}else return;const v=new(wu(p)?Ru:Au)(p,1);v.version=y;const u=r.get(d);u&&t.remove(u),r.set(d,v)}function h(d){const p=r.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function pg(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function c(p,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,p*a,x),e.update(f,n,x))}function h(p,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,x);let v=0;for(let u=0;u<x;u++)v+=f[u];e.update(v,n,1)}function d(p,f,x,y){if(x===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],y[u]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,y,0,x);let u=0;for(let _=0;_<x;_++)u+=f[_]*y[_];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function mg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,t,e){const n=new WeakMap,s=new Re;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let g=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",g)};var f=g;p!==void 0&&p.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;x===!0&&(b=1),y===!0&&(b=2),v===!0&&(b=3);let C=o.attributes.position.count*b,m=1;C>t.maxTextureSize&&(m=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*m*4*d),D=new Eu(T,C,m,d);D.type=Gn,D.needsUpdate=!0;const E=b*4;for(let R=0;R<d;R++){const L=u[R],N=_[R],B=S[R],k=C*m*4*R;for(let W=0;W<L.count;W++){const $=W*E;x===!0&&(s.fromBufferAttribute(L,W),T[k+$+0]=s.x,T[k+$+1]=s.y,T[k+$+2]=s.z,T[k+$+3]=0),y===!0&&(s.fromBufferAttribute(N,W),T[k+$+4]=s.x,T[k+$+5]=s.y,T[k+$+6]=s.z,T[k+$+7]=0),v===!0&&(s.fromBufferAttribute(B,W),T[k+$+8]=s.x,T[k+$+9]=s.y,T[k+$+10]=s.z,T[k+$+11]=B.itemSize===4?s.w:1)}}p={count:d,texture:D,size:new Tt(C,m)},n.set(o,p),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let x=0;for(let v=0;v<c.length;v++)x+=c[v];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function vg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const ku=new ke,Th=new Iu(1,1),Hu=new Eu,Vu=new _f,Gu=new Du,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Dh=new Float32Array(4);function Ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ka(i,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Dh.set(n),i.uniformMatrix2fv(this.addr,!1,Dh),Fe(e,n)}}function Sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),Fe(e,n)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ch.set(n),i.uniformMatrix4fv(this.addr,!1,Ch),Fe(e,n)}}function Eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=Su,r=Th):r=ku,e.setTexture2D(t||r,s)}function Ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function Ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function zg(i){switch(i){case 5126:return xg;case 35664:return _g;case 35665:return Mg;case 35666:return yg;case 35674:return bg;case 35675:return Sg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Dg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function Og(i,t){i.uniform1fv(this.addr,t)}function Bg(i,t){const e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function kg(i,t){const e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Hg(i,t){const e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Vg(i,t){const e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gg(i,t){const e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wg(i,t){const e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xg(i,t){i.uniform1iv(this.addr,t)}function $g(i,t){i.uniform2iv(this.addr,t)}function qg(i,t){i.uniform3iv(this.addr,t)}function Yg(i,t){i.uniform4iv(this.addr,t)}function Zg(i,t){i.uniform1uiv(this.addr,t)}function Kg(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function Jg(i,t){i.uniform4uiv(this.addr,t)}function Qg(i,t,e){const n=this.cache,s=t.length,r=Ka(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ku,r[a])}function tv(i,t,e){const n=this.cache,s=t.length,r=Ka(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vu,r[a])}function ev(i,t,e){const n=this.cache,s=t.length,r=Ka(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gu,r[a])}function nv(i,t,e){const n=this.cache,s=t.length,r=Ka(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hu,r[a])}function iv(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return $g;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Kg;case 36295:return jg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}class sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iv(e.type)}}class av{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function Lh(i,t){i.seq.push(t),i.map[t.id]=t}function ov(i,t,e){const n=i.name,s=n.length;for(Ho.lastIndex=0;;){const r=Ho.exec(n),a=Ho.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lh(e,c===void 0?new sv(o,i,t):new rv(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new av(o),Lh(e,d)),e=d}}}class _a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ov(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ih(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cv=37297;let lv=0;function hv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Uh=new Xt;function uv(i){ae._getMatrix(Uh,ae.workingColorSpace,i);const t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Da:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hv(i.getShaderSource(t),o)}else return r}function dv(i,t){const e=uv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fv(i,t){let e;switch(t){case qd:e="Linear";break;case Yd:e="Reinhard";break;case Zd:e="Cineon";break;case pu:e="ACESFilmic";break;case jd:e="AgX";break;case Jd:e="Neutral";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const la=new U;function pv(){ae.getLuminanceCoefficients(la);const i=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function gv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function or(i){return i!==""}function Fh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(xv,Mv)}const _v=new Map;function Mv(i,t){let e=Yt[t];if(e===void 0){const n=_v.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(i){return i.replace(yv,bv)}function bv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===du?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function wv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ev(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Is&&(t="ENVMAP_MODE_REFRACTION"),t}function Tv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:t="ENVMAP_BLENDING_MULTIPLY";break;case Xd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function Av(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Sv(e),c=wv(e),h=Ev(e),d=Tv(e),p=Av(e),f=mv(e),x=gv(r),y=s.createProgram();let v,u,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(or).join(`
`),v.length>0&&(v+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(or).join(`
`),u.length>0&&(u+=`
`)):(v=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),u=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,dv("linearToOutputTexel",e.outputColorSpace),pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=Gc(a),a=Fh(a,e),a=zh(a,e),o=Gc(o),o=Fh(o,e),o=zh(o,e),a=Oh(a),o=Oh(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=_+v+a,b=_+u+o,C=Ih(s,s.VERTEX_SHADER,S),m=Ih(s,s.FRAGMENT_SHADER,b);s.attachShader(y,C),s.attachShader(y,m),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(C)||"",B=s.getShaderInfoLog(m)||"",k=L.trim(),W=N.trim(),$=B.trim();let V=!0,it=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,m);else{const ft=Nh(s,C,"vertex"),_t=Nh(s,m,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+ft+`
`+_t)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(W===""||$==="")&&(it=!1);it&&(R.diagnostics={runnable:V,programLog:k,vertexShader:{log:W,prefix:v},fragmentShader:{log:$,prefix:u}})}s.deleteShader(C),s.deleteShader(m),D=new _a(s,y),E=vv(s,y)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(y,cv)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=m,this}let Cv=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dv(t),e.set(t,n)),n}}class Dv{constructor(t){this.id=Cv++,this.code=t,this.usedTimes=0}}function Lv(i,t,e,n,s,r,a){const o=new pl,l=new Pv,c=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function v(E,g,R,L,N){const B=L.fog,k=N.geometry,W=E.isMeshStandardMaterial?L.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),V=$&&$.mapping===Xa?$.image.height:null,it=x[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_t=ft!==void 0?ft.length:0;let $t=0;k.morphAttributes.position!==void 0&&($t=1),k.morphAttributes.normal!==void 0&&($t=2),k.morphAttributes.color!==void 0&&($t=3);let se,de,oe,K;if(it){const ce=kn[it];se=ce.vertexShader,de=ce.fragmentShader}else se=E.vertexShader,de=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);const Q=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,Pt=N.isBatchedMesh===!0,ne=!!E.map,He=!!E.matcap,I=!!$,Me=!!E.aoMap,Ht=!!E.lightMap,zt=!!E.bumpMap,St=!!E.normalMap,ye=!!E.displacementMap,wt=!!E.emissiveMap,qt=!!E.metalnessMap,ze=!!E.roughnessMap,Ce=E.anisotropy>0,P=E.clearcoat>0,w=E.dispersion>0,H=E.iridescence>0,Z=E.sheen>0,J=E.transmission>0,q=Ce&&!!E.anisotropyMap,Ct=P&&!!E.clearcoatMap,ct=P&&!!E.clearcoatNormalMap,Et=P&&!!E.clearcoatRoughnessMap,At=H&&!!E.iridescenceMap,st=H&&!!E.iridescenceThicknessMap,mt=Z&&!!E.sheenColorMap,Ft=Z&&!!E.sheenRoughnessMap,Rt=!!E.specularMap,dt=!!E.specularColorMap,Wt=!!E.specularIntensityMap,F=J&&!!E.transmissionMap,rt=J&&!!E.thicknessMap,lt=!!E.gradientMap,xt=!!E.alphaMap,et=E.alphaTest>0,j=!!E.alphaHash,bt=!!E.extensions;let kt=Ci;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=i.toneMapping);const me={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:de,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Us,alphaToCoverage:!!E.alphaToCoverage,map:ne,matcap:He,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:V,aoMap:Me,lightMap:Ht,bumpMap:zt,normalMap:St,displacementMap:p&&ye,emissiveMap:wt,normalMapObjectSpace:St&&E.normalMapType===nf,normalMapTangentSpace:St&&E.normalMapType===dl,metalnessMap:qt,roughnessMap:ze,anisotropy:Ce,anisotropyMap:q,clearcoat:P,clearcoatMap:Ct,clearcoatNormalMap:ct,clearcoatRoughnessMap:Et,dispersion:w,iridescence:H,iridescenceMap:At,iridescenceThicknessMap:st,sheen:Z,sheenColorMap:mt,sheenRoughnessMap:Ft,specularMap:Rt,specularColorMap:dt,specularIntensityMap:Wt,transmission:J,transmissionMap:F,thicknessMap:rt,gradientMap:lt,opaque:E.transparent===!1&&E.blending===Rs&&E.alphaToCoverage===!1,alphaMap:xt,alphaTest:et,alphaHash:j,combine:E.combine,mapUv:ne&&y(E.map.channel),aoMapUv:Me&&y(E.aoMap.channel),lightMapUv:Ht&&y(E.lightMap.channel),bumpMapUv:zt&&y(E.bumpMap.channel),normalMapUv:St&&y(E.normalMap.channel),displacementMapUv:ye&&y(E.displacementMap.channel),emissiveMapUv:wt&&y(E.emissiveMap.channel),metalnessMapUv:qt&&y(E.metalnessMap.channel),roughnessMapUv:ze&&y(E.roughnessMap.channel),anisotropyMapUv:q&&y(E.anisotropyMap.channel),clearcoatMapUv:Ct&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:ct&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:st&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&y(E.sheenRoughnessMap.channel),specularMapUv:Rt&&y(E.specularMap.channel),specularColorMapUv:dt&&y(E.specularColorMap.channel),specularIntensityMapUv:Wt&&y(E.specularIntensityMap.channel),transmissionMapUv:F&&y(E.transmissionMap.channel),thicknessMapUv:rt&&y(E.thicknessMap.channel),alphaMapUv:xt&&y(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(St||Ce),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(ne||xt),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:$t,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:ne&&E.map.isVideoTexture===!0&&ae.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:wt&&E.emissiveMap.isVideoTexture===!0&&ae.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ve,flipSided:E.side===Ue,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:bt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&E.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function u(E){const g=[];if(E.shaderID?g.push(E.shaderID):(g.push(E.customVertexShaderID),g.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)g.push(R),g.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(_(g,E),S(g,E),g.push(i.outputColorSpace)),g.push(E.customProgramCacheKey),g.join()}function _(E,g){E.push(g.precision),E.push(g.outputColorSpace),E.push(g.envMapMode),E.push(g.envMapCubeUVHeight),E.push(g.mapUv),E.push(g.alphaMapUv),E.push(g.lightMapUv),E.push(g.aoMapUv),E.push(g.bumpMapUv),E.push(g.normalMapUv),E.push(g.displacementMapUv),E.push(g.emissiveMapUv),E.push(g.metalnessMapUv),E.push(g.roughnessMapUv),E.push(g.anisotropyMapUv),E.push(g.clearcoatMapUv),E.push(g.clearcoatNormalMapUv),E.push(g.clearcoatRoughnessMapUv),E.push(g.iridescenceMapUv),E.push(g.iridescenceThicknessMapUv),E.push(g.sheenColorMapUv),E.push(g.sheenRoughnessMapUv),E.push(g.specularMapUv),E.push(g.specularColorMapUv),E.push(g.specularIntensityMapUv),E.push(g.transmissionMapUv),E.push(g.thicknessMapUv),E.push(g.combine),E.push(g.fogExp2),E.push(g.sizeAttenuation),E.push(g.morphTargetsCount),E.push(g.morphAttributeCount),E.push(g.numDirLights),E.push(g.numPointLights),E.push(g.numSpotLights),E.push(g.numSpotLightMaps),E.push(g.numHemiLights),E.push(g.numRectAreaLights),E.push(g.numDirLightShadows),E.push(g.numPointLightShadows),E.push(g.numSpotLightShadows),E.push(g.numSpotLightShadowsWithMaps),E.push(g.numLightProbes),E.push(g.shadowMapType),E.push(g.toneMapping),E.push(g.numClippingPlanes),E.push(g.numClipIntersection),E.push(g.depthPacking)}function S(E,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),g.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),E.push(o.mask)}function b(E){const g=x[E.type];let R;if(g){const L=kn[g];R=Lf.clone(L.uniforms)}else R=E.uniforms;return R}function C(E,g){let R;for(let L=0,N=h.length;L<N;L++){const B=h[L];if(B.cacheKey===g){R=B,++R.usedTimes;break}}return R===void 0&&(R=new Rv(i,g,E,r),h.push(R)),R}function m(E){if(--E.usedTimes===0){const g=h.indexOf(E);h[g]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function D(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:b,acquireProgram:C,releaseProgram:m,releaseShaderCache:T,programs:h,dispose:D}}function Iv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Uv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,f,x,y,v){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:x,renderOrder:d.renderOrder,z:y,group:v},i[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=y,u.group=v),t++,u}function o(d,p,f,x,y,v){const u=a(d,p,f,x,y,v);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function l(d,p,f,x,y,v){const u=a(d,p,f,x,y,v);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,p){e.length>1&&e.sort(d||Uv),n.length>1&&n.sort(p||kh),s.length>1&&s.sort(p||kh)}function h(){for(let d=t,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Nv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Hh,i.set(n,[a])):s>=r.length?(a=new Hh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function zv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ov=0;function Bv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kv(i){const t=new Fv,e=zv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new le,a=new le;function o(c){let h=0,d=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,x=0,y=0,v=0,u=0,_=0,S=0,b=0,C=0,m=0,T=0;c.sort(Bv);for(let E=0,g=c.length;E<g;E++){const R=c[E],L=R.color,N=R.intensity,B=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*N,d+=L.g*N,p+=L.b*N;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],N);T++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=R.shadow.matrix,_++}n.directional[f]=W,f++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(L).multiplyScalar(N),W.distance=B,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[y]=W;const $=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,$.updateMatrices(R),R.castShadow&&m++),n.spotLightMatrix[y]=$.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=k,b++}y++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(L).multiplyScalar(N),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=W,v++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const $=R.shadow,V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=R.shadow.matrix,S++}n.point[x]=W,x++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(N),W.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[u]=W,u++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==f||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==v||D.hemiLength!==u||D.numDirectionalShadows!==_||D.numPointShadows!==S||D.numSpotShadows!==b||D.numSpotMaps!==C||D.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=v,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+C-m,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=m,n.numLightProbes=T,D.directionalLength=f,D.pointLength=x,D.spotLength=y,D.rectAreaLength=v,D.hemiLength=u,D.numDirectionalShadows=_,D.numPointShadows=S,D.numSpotShadows=b,D.numSpotMaps=C,D.numLightProbes=T,n.version=Ov++)}function l(c,h){let d=0,p=0,f=0,x=0,y=0;const v=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const S=c[u];if(S.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),d++}else if(S.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),f++}else if(S.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(v),a.identity(),r.copy(S.matrixWorld),r.premultiply(v),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(v),p++}else if(S.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(v),y++}}}return{setup:o,setupView:l,state:n}}function Vh(i){const t=new kv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Hv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Vh(i),t.set(s,[o])):r>=a.length?(o=new Vh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wv(i,t,e){let n=new vl;const s=new Tt,r=new Tt,a=new Re,o=new cp({depthPacking:ef}),l=new lp,c={},h=e.maxTextureSize,d={[ui]:Ue,[Ue]:ui,[ve]:ve},p=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Vv,fragmentShader:Gv}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const x=new Se;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(x,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let u=this.type;this.render=function(m,T,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||m.length===0)return;const E=i.getRenderTarget(),g=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=u!==ni&&this.type===ni,B=u===ni&&this.type!==ni;for(let k=0,W=m.length;k<W;k++){const $=m[k],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||N===!0||B===!0){const _t=this.type!==ni?{minFilter:Xe,magFilter:Xe}:{};V.map!==null&&V.map.dispose(),V.map=new Ki(s.x,s.y,_t),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ft=V.getViewportCount();for(let _t=0;_t<ft;_t++){const $t=V.getViewport(_t);a.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),L.viewport(a),V.updateMatrices($,_t),n=V.getFrustum(),b(T,D,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===ni&&_(V,D),V.needsUpdate=!1}u=this.type,v.needsUpdate=!1,i.setRenderTarget(E,g,R)};function _(m,T){const D=t.update(y);p.defines.VSM_SAMPLES!==m.blurSamples&&(p.defines.VSM_SAMPLES=m.blurSamples,f.defines.VSM_SAMPLES=m.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),m.mapPass===null&&(m.mapPass=new Ki(s.x,s.y)),p.uniforms.shadow_pass.value=m.map.texture,p.uniforms.resolution.value=m.mapSize,p.uniforms.radius.value=m.radius,i.setRenderTarget(m.mapPass),i.clear(),i.renderBufferDirect(T,null,D,p,y,null),f.uniforms.shadow_pass.value=m.mapPass.texture,f.uniforms.resolution.value=m.mapSize,f.uniforms.radius.value=m.radius,i.setRenderTarget(m.map),i.clear(),i.renderBufferDirect(T,null,D,f,y,null)}function S(m,T,D,E){let g=null;const R=D.isPointLight===!0?m.customDistanceMaterial:m.customDepthMaterial;if(R!==void 0)g=R;else if(g=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=g.uuid,N=T.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let k=B[N];k===void 0&&(k=g.clone(),B[N]=k,T.addEventListener("dispose",C)),g=k}if(g.visible=T.visible,g.wireframe=T.wireframe,E===ni?g.side=T.shadowSide!==null?T.shadowSide:T.side:g.side=T.shadowSide!==null?T.shadowSide:d[T.side],g.alphaMap=T.alphaMap,g.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,g.map=T.map,g.clipShadows=T.clipShadows,g.clippingPlanes=T.clippingPlanes,g.clipIntersection=T.clipIntersection,g.displacementMap=T.displacementMap,g.displacementScale=T.displacementScale,g.displacementBias=T.displacementBias,g.wireframeLinewidth=T.wireframeLinewidth,g.linewidth=T.linewidth,D.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const L=i.properties.get(g);L.light=D}return g}function b(m,T,D,E,g){if(m.visible===!1)return;if(m.layers.test(T.layers)&&(m.isMesh||m.isLine||m.isPoints)&&(m.castShadow||m.receiveShadow&&g===ni)&&(!m.frustumCulled||n.intersectsObject(m))){m.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,m.matrixWorld);const N=t.update(m),B=m.material;if(Array.isArray(B)){const k=N.groups;for(let W=0,$=k.length;W<$;W++){const V=k[W],it=B[V.materialIndex];if(it&&it.visible){const ft=S(m,it,E,g);m.onBeforeShadow(i,m,T,D,N,ft,V),i.renderBufferDirect(D,null,N,ft,m,V),m.onAfterShadow(i,m,T,D,N,ft,V)}}}else if(B.visible){const k=S(m,B,E,g);m.onBeforeShadow(i,m,T,D,N,k,null),i.renderBufferDirect(D,null,N,k,m,null),m.onAfterShadow(i,m,T,D,N,k,null)}}const L=m.children;for(let N=0,B=L.length;N<B;N++)b(L[N],T,D,E,g)}function C(m){m.target.removeEventListener("dispose",C);for(const D in c){const E=c[D],g=m.target.uuid;g in E&&(E[g].dispose(),delete E[g])}}}const Xv={[ec]:nc,[ic]:ac,[sc]:oc,[Ds]:rc,[nc]:ec,[ac]:ic,[oc]:sc,[rc]:Ds};function $v(i,t){function e(){let F=!1;const rt=new Re;let lt=null;const xt=new Re(0,0,0,0);return{setMask:function(et){lt!==et&&!F&&(i.colorMask(et,et,et,et),lt=et)},setLocked:function(et){F=et},setClear:function(et,j,bt,kt,me){me===!0&&(et*=kt,j*=kt,bt*=kt),rt.set(et,j,bt,kt),xt.equals(rt)===!1&&(i.clearColor(et,j,bt,kt),xt.copy(rt))},reset:function(){F=!1,lt=null,xt.set(-1,0,0,0)}}}function n(){let F=!1,rt=!1,lt=null,xt=null,et=null;return{setReversed:function(j){if(rt!==j){const bt=t.get("EXT_clip_control");j?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),rt=j;const kt=et;et=null,this.setClear(kt)}},getReversed:function(){return rt},setTest:function(j){j?Q(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(j){lt!==j&&!F&&(i.depthMask(j),lt=j)},setFunc:function(j){if(rt&&(j=Xv[j]),xt!==j){switch(j){case ec:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case ic:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case sc:i.depthFunc(i.EQUAL);break;case rc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=j}},setLocked:function(j){F=j},setClear:function(j){et!==j&&(rt&&(j=1-j),i.clearDepth(j),et=j)},reset:function(){F=!1,lt=null,xt=null,et=null,rt=!1}}}function s(){let F=!1,rt=null,lt=null,xt=null,et=null,j=null,bt=null,kt=null,me=null;return{setTest:function(ce){F||(ce?Q(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(ce){rt!==ce&&!F&&(i.stencilMask(ce),rt=ce)},setFunc:function(ce,Kn,On){(lt!==ce||xt!==Kn||et!==On)&&(i.stencilFunc(ce,Kn,On),lt=ce,xt=Kn,et=On)},setOp:function(ce,Kn,On){(j!==ce||bt!==Kn||kt!==On)&&(i.stencilOp(ce,Kn,On),j=ce,bt=Kn,kt=On)},setLocked:function(ce){F=ce},setClear:function(ce){me!==ce&&(i.clearStencil(ce),me=ce)},reset:function(){F=!1,rt=null,lt=null,xt=null,et=null,j=null,bt=null,kt=null,me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],x=null,y=!1,v=null,u=null,_=null,S=null,b=null,C=null,m=null,T=new Gt(0,0,0),D=0,E=!1,g=null,R=null,L=null,N=null,B=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=$>=2);let it=null,ft={};const _t=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),se=new Re().fromArray(_t),de=new Re().fromArray($t);function oe(F,rt,lt,xt){const et=new Uint8Array(4),j=i.createTexture();i.bindTexture(F,j),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<lt;bt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(rt+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return j}const K={};K[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ds),zt(!1),St(zl),Q(i.CULL_FACE),Me(Ri);function Q(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Bt(F,rt){return d[F]!==rt?(i.bindFramebuffer(F,rt),d[F]=rt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=rt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Pt(F,rt){let lt=f,xt=!1;if(F){lt=p.get(rt),lt===void 0&&(lt=[],p.set(rt,lt));const et=F.textures;if(lt.length!==et.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let j=0,bt=et.length;j<bt;j++)lt[j]=i.COLOR_ATTACHMENT0+j;lt.length=et.length,xt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(lt)}function ne(F){return x!==F?(i.useProgram(F),x=F,!0):!1}const He={[Wi]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};He[Pd]=i.MIN,He[Dd]=i.MAX;const I={[Ld]:i.ZERO,[Id]:i.ONE,[Ud]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Gd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(F,rt,lt,xt,et,j,bt,kt,me,ce){if(F===Ri){y===!0&&(Mt(i.BLEND),y=!1);return}if(y===!1&&(Q(i.BLEND),y=!0),F!==Ad){if(F!==v||ce!==E){if((u!==Wi||b!==Wi)&&(i.blendEquation(i.FUNC_ADD),u=Wi,b=Wi),ce)switch(F){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ol:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,S=null,C=null,m=null,T.set(0,0,0),D=0,v=F,E=ce}return}et=et||rt,j=j||lt,bt=bt||xt,(rt!==u||et!==b)&&(i.blendEquationSeparate(He[rt],He[et]),u=rt,b=et),(lt!==_||xt!==S||j!==C||bt!==m)&&(i.blendFuncSeparate(I[lt],I[xt],I[j],I[bt]),_=lt,S=xt,C=j,m=bt),(kt.equals(T)===!1||me!==D)&&(i.blendColor(kt.r,kt.g,kt.b,me),T.copy(kt),D=me),v=F,E=!1}function Ht(F,rt){F.side===ve?Mt(i.CULL_FACE):Q(i.CULL_FACE);let lt=F.side===Ue;rt&&(lt=!lt),zt(lt),F.blending===Rs&&F.transparent===!1?Me(Ri):Me(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const xt=F.stencilWrite;o.setTest(xt),xt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),wt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(F){g!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),g=F)}function St(F){F!==Ed?(Q(i.CULL_FACE),F!==R&&(F===zl?i.cullFace(i.BACK):F===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),R=F}function ye(F){F!==L&&(W&&i.lineWidth(F),L=F)}function wt(F,rt,lt){F?(Q(i.POLYGON_OFFSET_FILL),(N!==rt||B!==lt)&&(i.polygonOffset(rt,lt),N=rt,B=lt)):Mt(i.POLYGON_OFFSET_FILL)}function qt(F){F?Q(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function ze(F){F===void 0&&(F=i.TEXTURE0+k-1),it!==F&&(i.activeTexture(F),it=F)}function Ce(F,rt,lt){lt===void 0&&(it===null?lt=i.TEXTURE0+k-1:lt=it);let xt=ft[lt];xt===void 0&&(xt={type:void 0,texture:void 0},ft[lt]=xt),(xt.type!==F||xt.texture!==rt)&&(it!==lt&&(i.activeTexture(lt),it=lt),i.bindTexture(F,rt||K[F]),xt.type=F,xt.texture=rt)}function P(){const F=ft[it];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(F){se.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),se.copy(F))}function Ft(F){de.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),de.copy(F))}function Rt(F,rt){let lt=c.get(rt);lt===void 0&&(lt=new WeakMap,c.set(rt,lt));let xt=lt.get(F);xt===void 0&&(xt=i.getUniformBlockIndex(rt,F.name),lt.set(F,xt))}function dt(F,rt){const xt=c.get(rt).get(F);l.get(rt)!==xt&&(i.uniformBlockBinding(rt,xt,F.__bindingPointIndex),l.set(rt,xt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ft={},d={},p=new WeakMap,f=[],x=null,y=!1,v=null,u=null,_=null,S=null,b=null,C=null,m=null,T=new Gt(0,0,0),D=0,E=!1,g=null,R=null,L=null,N=null,B=null,se.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:Mt,bindFramebuffer:Bt,drawBuffers:Pt,useProgram:ne,setBlending:Me,setMaterial:Ht,setFlipSided:zt,setCullFace:St,setLineWidth:ye,setPolygonOffset:wt,setScissorTest:qt,activeTexture:ze,bindTexture:Ce,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:At,texImage3D:st,updateUBOMapping:Rt,uniformBlockBinding:dt,texStorage2D:ct,texStorage3D:Et,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Ct,scissor:mt,viewport:Ft,reset:Wt}}function qv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,w){return f?new OffscreenCanvas(P,w):_r("canvas")}function y(P,w,H){let Z=1;const J=Ce(P);if((J.width>H||J.height>H)&&(Z=H/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(Z*J.width),Ct=Math.floor(Z*J.height);d===void 0&&(d=x(q,Ct));const ct=w?x(q,Ct):d;return ct.width=q,ct.height=Ct,ct.getContext("2d").drawImage(P,0,0,q,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Ct+")."),ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function v(P){return P.generateMipmaps}function u(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(P,w,H,Z,J=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=w;if(w===i.RED&&(H===i.FLOAT&&(q=i.R32F),H===i.HALF_FLOAT&&(q=i.R16F),H===i.UNSIGNED_BYTE&&(q=i.R8)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.R8UI),H===i.UNSIGNED_SHORT&&(q=i.R16UI),H===i.UNSIGNED_INT&&(q=i.R32UI),H===i.BYTE&&(q=i.R8I),H===i.SHORT&&(q=i.R16I),H===i.INT&&(q=i.R32I)),w===i.RG&&(H===i.FLOAT&&(q=i.RG32F),H===i.HALF_FLOAT&&(q=i.RG16F),H===i.UNSIGNED_BYTE&&(q=i.RG8)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RG8UI),H===i.UNSIGNED_SHORT&&(q=i.RG16UI),H===i.UNSIGNED_INT&&(q=i.RG32UI),H===i.BYTE&&(q=i.RG8I),H===i.SHORT&&(q=i.RG16I),H===i.INT&&(q=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(q=i.RGB16UI),H===i.UNSIGNED_INT&&(q=i.RGB32UI),H===i.BYTE&&(q=i.RGB8I),H===i.SHORT&&(q=i.RGB16I),H===i.INT&&(q=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),H===i.UNSIGNED_INT&&(q=i.RGBA32UI),H===i.BYTE&&(q=i.RGBA8I),H===i.SHORT&&(q=i.RGBA16I),H===i.INT&&(q=i.RGBA32I)),w===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),w===i.RGBA){const Ct=J?Da:ae.getTransfer(Z);H===i.FLOAT&&(q=i.RGBA32F),H===i.HALF_FLOAT&&(q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(q=Ct===ue?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function b(P,w){let H;return P?w===null||w===Zi||w===gr?H=i.DEPTH24_STENCIL8:w===Gn?H=i.DEPTH32F_STENCIL8:w===mr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zi||w===gr?H=i.DEPTH_COMPONENT24:w===Gn?H=i.DEPTH_COMPONENT32F:w===mr&&(H=i.DEPTH_COMPONENT16),H}function C(P,w){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xe&&P.minFilter!==Vn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function m(P){const w=P.target;w.removeEventListener("dispose",m),D(w),w.isVideoTexture&&h.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),g(w)}function D(P){const w=n.get(P);if(w.__webglInit===void 0)return;const H=P.source,Z=p.get(H);if(Z){const J=Z[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(P),Object.keys(Z).length===0&&p.delete(H)}n.remove(P)}function E(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const H=P.source,Z=p.get(H);delete Z[w.__cacheKey],a.memory.textures--}function g(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let J=0;J<w.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(w.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=P.textures;for(let Z=0,J=H.length;Z<J;Z++){const q=n.get(H[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(P)}let R=0;function L(){R=0}function N(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function B(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function k(P,w){const H=n.get(P);if(P.isVideoTexture&&qt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,P,w);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function W(P,w){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){K(H,P,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function $(P,w){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){K(H,P,w);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function V(P,w){const H=n.get(P);if(P.version>0&&H.__version!==P.version){Q(H,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}const it={[hc]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[uc]:i.MIRRORED_REPEAT},ft={[Xe]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},_t={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[Su]:i.LEQUAL,[af]:i.EQUAL,[lf]:i.GEQUAL,[of]:i.GREATER,[cf]:i.NOTEQUAL};function $t(P,w){if(w.type===Gn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Vn||w.magFilter===so||w.magFilter===zr||w.magFilter===qi||w.minFilter===Vn||w.minFilter===so||w.minFilter===zr||w.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,it[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,it[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,it[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ft[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ft[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_t[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xe||w.minFilter!==zr&&w.minFilter!==qi||w.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function se(P,w){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",m));const Z=w.source;let J=p.get(Z);J===void 0&&(J={},p.set(Z,J));const q=B(w);if(q!==P.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[q].usedTimes++;const Ct=J[P.__cacheKey];Ct!==void 0&&(J[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&E(w)),P.__cacheKey=q,P.__webglTexture=J[q].texture}return H}function de(P,w,H){return Math.floor(Math.floor(P/H)/w)}function oe(P,w,H,Z){const q=P.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,H,Z,w.data);else{q.sort((st,mt)=>st.start-mt.start);let Ct=0;for(let st=1;st<q.length;st++){const mt=q[Ct],Ft=q[st],Rt=mt.start+mt.count,dt=de(Ft.start,w.width,4),Wt=de(mt.start,w.width,4);Ft.start<=Rt+1&&dt===Wt&&de(Ft.start+Ft.count-1,w.width,4)===dt?mt.count=Math.max(mt.count,Ft.start+Ft.count-mt.start):(++Ct,q[Ct]=Ft)}q.length=Ct+1;const ct=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let st=0,mt=q.length;st<mt;st++){const Ft=q[st],Rt=Math.floor(Ft.start/4),dt=Math.ceil(Ft.count/4),Wt=Rt%w.width,F=Math.floor(Rt/w.width),rt=dt,lt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Wt,F,rt,lt,H,Z,w.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function K(P,w,H){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);const J=se(P,w),q=w.source;e.bindTexture(Z,P.__webglTexture,i.TEXTURE0+H);const Ct=n.get(q);if(q.version!==Ct.__version||J===!0){e.activeTexture(i.TEXTURE0+H);const ct=ae.getPrimaries(ae.workingColorSpace),Et=w.colorSpace===wi?null:ae.getPrimaries(w.colorSpace),At=w.colorSpace===wi||ct===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let st=y(w.image,!1,s.maxTextureSize);st=ze(w,st);const mt=r.convert(w.format,w.colorSpace),Ft=r.convert(w.type);let Rt=S(w.internalFormat,mt,Ft,w.colorSpace,w.isVideoTexture);$t(Z,w);let dt;const Wt=w.mipmaps,F=w.isVideoTexture!==!0,rt=Ct.__version===void 0||J===!0,lt=q.dataReady,xt=C(w,st);if(w.isDepthTexture)Rt=b(w.format===xr,w.type),rt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Rt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Rt,st.width,st.height,0,mt,Ft,null));else if(w.isDataTexture)if(Wt.length>0){F&&rt&&e.texStorage2D(i.TEXTURE_2D,xt,Rt,Wt[0].width,Wt[0].height);for(let et=0,j=Wt.length;et<j;et++)dt=Wt[et],F?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,dt.width,dt.height,mt,Ft,dt.data):e.texImage2D(i.TEXTURE_2D,et,Rt,dt.width,dt.height,0,mt,Ft,dt.data);w.generateMipmaps=!1}else F?(rt&&e.texStorage2D(i.TEXTURE_2D,xt,Rt,st.width,st.height),lt&&oe(w,st,mt,Ft)):e.texImage2D(i.TEXTURE_2D,0,Rt,st.width,st.height,0,mt,Ft,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Rt,Wt[0].width,Wt[0].height,st.depth);for(let et=0,j=Wt.length;et<j;et++)if(dt=Wt[et],w.format!==Ln)if(mt!==null)if(F){if(lt)if(w.layerUpdates.size>0){const bt=xh(dt.width,dt.height,w.format,w.type);for(const kt of w.layerUpdates){const me=dt.data.subarray(kt*bt/dt.data.BYTES_PER_ELEMENT,(kt+1)*bt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,kt,dt.width,dt.height,1,mt,me)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,st.depth,mt,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Rt,dt.width,dt.height,st.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,st.depth,mt,Ft,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Rt,dt.width,dt.height,st.depth,0,mt,Ft,dt.data)}else{F&&rt&&e.texStorage2D(i.TEXTURE_2D,xt,Rt,Wt[0].width,Wt[0].height);for(let et=0,j=Wt.length;et<j;et++)dt=Wt[et],w.format!==Ln?mt!==null?F?lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,dt.width,dt.height,mt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Rt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,dt.width,dt.height,mt,Ft,dt.data):e.texImage2D(i.TEXTURE_2D,et,Rt,dt.width,dt.height,0,mt,Ft,dt.data)}else if(w.isDataArrayTexture)if(F){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Rt,st.width,st.height,st.depth),lt)if(w.layerUpdates.size>0){const et=xh(st.width,st.height,w.format,w.type);for(const j of w.layerUpdates){const bt=st.data.subarray(j*et/st.data.BYTES_PER_ELEMENT,(j+1)*et/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,mt,Ft,bt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,mt,Ft,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,st.width,st.height,st.depth,0,mt,Ft,st.data);else if(w.isData3DTexture)F?(rt&&e.texStorage3D(i.TEXTURE_3D,xt,Rt,st.width,st.height,st.depth),lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,mt,Ft,st.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,st.width,st.height,st.depth,0,mt,Ft,st.data);else if(w.isFramebufferTexture){if(rt)if(F)e.texStorage2D(i.TEXTURE_2D,xt,Rt,st.width,st.height);else{let et=st.width,j=st.height;for(let bt=0;bt<xt;bt++)e.texImage2D(i.TEXTURE_2D,bt,Rt,et,j,0,mt,Ft,null),et>>=1,j>>=1}}else if(Wt.length>0){if(F&&rt){const et=Ce(Wt[0]);e.texStorage2D(i.TEXTURE_2D,xt,Rt,et.width,et.height)}for(let et=0,j=Wt.length;et<j;et++)dt=Wt[et],F?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,mt,Ft,dt):e.texImage2D(i.TEXTURE_2D,et,Rt,mt,Ft,dt);w.generateMipmaps=!1}else if(F){if(rt){const et=Ce(st);e.texStorage2D(i.TEXTURE_2D,xt,Rt,et.width,et.height)}lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ft,st)}else e.texImage2D(i.TEXTURE_2D,0,Rt,mt,Ft,st);v(w)&&u(Z),Ct.__version=q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Q(P,w,H){if(w.image.length!==6)return;const Z=se(P,w),J=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);const q=n.get(J);if(J.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const Ct=ae.getPrimaries(ae.workingColorSpace),ct=w.colorSpace===wi?null:ae.getPrimaries(w.colorSpace),Et=w.colorSpace===wi||Ct===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const At=w.isCompressedTexture||w.image[0].isCompressedTexture,st=w.image[0]&&w.image[0].isDataTexture,mt=[];for(let j=0;j<6;j++)!At&&!st?mt[j]=y(w.image[j],!0,s.maxCubemapSize):mt[j]=st?w.image[j].image:w.image[j],mt[j]=ze(w,mt[j]);const Ft=mt[0],Rt=r.convert(w.format,w.colorSpace),dt=r.convert(w.type),Wt=S(w.internalFormat,Rt,dt,w.colorSpace),F=w.isVideoTexture!==!0,rt=q.__version===void 0||Z===!0,lt=J.dataReady;let xt=C(w,Ft);$t(i.TEXTURE_CUBE_MAP,w);let et;if(At){F&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Wt,Ft.width,Ft.height);for(let j=0;j<6;j++){et=mt[j].mipmaps;for(let bt=0;bt<et.length;bt++){const kt=et[bt];w.format!==Ln?Rt!==null?F?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,0,0,kt.width,kt.height,Rt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,Wt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,0,0,kt.width,kt.height,Rt,dt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,Wt,kt.width,kt.height,0,Rt,dt,kt.data)}}}else{if(et=w.mipmaps,F&&rt){et.length>0&&xt++;const j=Ce(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Wt,j.width,j.height)}for(let j=0;j<6;j++)if(st){F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mt[j].width,mt[j].height,Rt,dt,mt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,mt[j].width,mt[j].height,0,Rt,dt,mt[j].data);for(let bt=0;bt<et.length;bt++){const me=et[bt].image[j].image;F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,0,0,me.width,me.height,Rt,dt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,Wt,me.width,me.height,0,Rt,dt,me.data)}}else{F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,dt,mt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,Rt,dt,mt[j]);for(let bt=0;bt<et.length;bt++){const kt=et[bt];F?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,0,0,Rt,dt,kt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,Wt,Rt,dt,kt.image[j])}}}v(w)&&u(i.TEXTURE_CUBE_MAP),q.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Mt(P,w,H,Z,J,q){const Ct=r.convert(H.format,H.colorSpace),ct=r.convert(H.type),Et=S(H.internalFormat,Ct,ct,H.colorSpace),At=n.get(w),st=n.get(H);if(st.__renderTarget=w,!At.__hasExternalTextures){const mt=Math.max(1,w.width>>q),Ft=Math.max(1,w.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,Et,mt,Ft,w.depth,0,Ct,ct,null):e.texImage2D(J,q,Et,mt,Ft,0,Ct,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),wt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,st.__webglTexture,0,ye(w)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,st.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(P,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const Z=w.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,q=b(w.stencilBuffer,J),Ct=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=ye(w);wt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,q,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,P)}else{const Z=w.textures;for(let J=0;J<Z.length;J++){const q=Z[J],Ct=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),Et=S(q.internalFormat,Ct,ct,q.colorSpace),At=ye(w);H&&wt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Et,w.width,w.height):wt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Et,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Et,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const J=Z.__webglTexture,q=ye(w);if(w.depthTexture.format===vr)wt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===xr)wt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ne(P){const w=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=Z}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?Pt(w.__webglFramebuffer[0],P):Pt(w.__webglFramebuffer,P)}else if(H){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),Bt(w.__webglDepthbuffer[Z],P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Bt(w.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function He(P,w,H){const Z=n.get(P);w!==void 0&&Mt(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ne(P)}function I(P){const w=P.texture,H=n.get(P),Z=n.get(w);P.addEventListener("dispose",T);const J=P.textures,q=P.isWebGLCubeRenderTarget===!0,Ct=J.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,a.memory.textures++),q){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ct]=[];for(let Et=0;Et<w.mipmaps.length;Et++)H.__webglFramebuffer[ct][Et]=i.createFramebuffer()}else H.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ct=0;ct<w.mipmaps.length;ct++)H.__webglFramebuffer[ct]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ct=0,Et=J.length;ct<Et;ct++){const At=n.get(J[ct]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&wt(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const Et=J[ct];H.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ct]);const At=r.convert(Et.format,Et.colorSpace),st=r.convert(Et.type),mt=S(Et.internalFormat,At,st,Et.colorSpace,P.isXRRenderTarget===!0),Ft=ye(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,mt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,H.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),$t(i.TEXTURE_CUBE_MAP,w);for(let ct=0;ct<6;ct++)if(w.mipmaps&&w.mipmaps.length>0)for(let Et=0;Et<w.mipmaps.length;Et++)Mt(H.__webglFramebuffer[ct][Et],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et);else Mt(H.__webglFramebuffer[ct],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);v(w)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ct=0,Et=J.length;ct<Et;ct++){const At=J[ct],st=n.get(At);let mt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(mt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,st.__webglTexture),$t(mt,At),Mt(H.__webglFramebuffer,P,At,i.COLOR_ATTACHMENT0+ct,mt,0),v(At)&&u(mt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),$t(ct,w),w.mipmaps&&w.mipmaps.length>0)for(let Et=0;Et<w.mipmaps.length;Et++)Mt(H.__webglFramebuffer[Et],P,w,i.COLOR_ATTACHMENT0,ct,Et);else Mt(H.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,ct,0);v(w)&&u(ct),e.unbindTexture()}P.depthBuffer&&ne(P)}function Me(P){const w=P.textures;for(let H=0,Z=w.length;H<Z;H++){const J=w[H];if(v(J)){const q=_(P),Ct=n.get(J).__webglTexture;e.bindTexture(q,Ct),u(q),e.unbindTexture()}}}const Ht=[],zt=[];function St(P){if(P.samples>0){if(wt(P)===!1){const w=P.textures,H=P.width,Z=P.height;let J=i.COLOR_BUFFER_BIT;const q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(P),ct=w.length>1;if(ct)for(let At=0;At<w.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Et=P.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let At=0;At<w.length;At++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const st=n.get(w[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,J,i.NEAREST),l===!0&&(Ht.length=0,zt.length=0,Ht.push(i.COLOR_ATTACHMENT0+At),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ht.push(q),zt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let At=0;At<w.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const st=n.get(w[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ye(P){return Math.min(s.maxSamples,P.samples)}function wt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qt(P){const w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function ze(P,w){const H=P.colorSpace,Z=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Us&&H!==wi&&(ae.getTransfer(H)===ue?(Z!==Ln||J!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=He,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=wt}function Yv(i,t){function e(n,s=wi){let r;const a=ae.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gu)return i.BYTE;if(n===vu)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Pr)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===yu)return i.RGB;if(n===Ln)return i.RGBA;if(n===vr)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===Dr)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===bu)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===ma||n===ga||n===va||n===xa)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===vc||n===xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===vc)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===Mc||n===yc||n===bc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Dc||n===Lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_c)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Uc||n===Nc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ic)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===zc||n===Oc||n===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Uu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Di({vertexShader:Zv,fragmentShader:Kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jv extends Gs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,x=null;const y=typeof XRWebGLBinding<"u",v=new jv,u={},_=e.getContextAttributes();let S=null,b=null;const C=[],m=[],T=new Tt;let D=null;const E=new _n;E.viewport=new Re;const g=new _n;g.viewport=new Re;const R=[E,g],L=new xp;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=C[K];return Q===void 0&&(Q=new Ro,C[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=C[K];return Q===void 0&&(Q=new Ro,C[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=C[K];return Q===void 0&&(Q=new Ro,C[K]=Q),Q.getHandSpace()};function k(K){const Q=m.indexOf(K.inputSource);if(Q===-1)return;const Mt=C[Q];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,c||a),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let K=0;K<C.length;K++){const Q=m[K];Q!==null&&(m[K]=null,C[K].disconnect(Q))}N=null,B=null,v.reset();for(const K in u)delete u[K];t.setRenderTarget(S),f=null,p=null,d=null,s=null,b=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Bt=null,Pt=null;_.depth&&(Pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=_.stencil?xr:vr,Bt=_.stencil?gr:Zi);const ne={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(ne),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Ki(p.textureWidth,p.textureHeight,{format:Ln,type:qn,depthTexture:new Iu(p.textureWidth,p.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ki(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(K){for(let Q=0;Q<K.removed.length;Q++){const Mt=K.removed[Q],Bt=m.indexOf(Mt);Bt>=0&&(m[Bt]=null,C[Bt].disconnect(Mt))}for(let Q=0;Q<K.added.length;Q++){const Mt=K.added[Q];let Bt=m.indexOf(Mt);if(Bt===-1){for(let ne=0;ne<C.length;ne++)if(ne>=m.length){m.push(Mt),Bt=ne;break}else if(m[ne]===null){m[ne]=Mt,Bt=ne;break}if(Bt===-1)break}const Pt=C[Bt];Pt&&Pt.connect(Mt)}}const V=new U,it=new U;function ft(K,Q,Mt){V.setFromMatrixPosition(Q.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);const Bt=V.distanceTo(it),Pt=Q.projectionMatrix.elements,ne=Mt.projectionMatrix.elements,He=Pt[14]/(Pt[10]-1),I=Pt[14]/(Pt[10]+1),Me=(Pt[9]+1)/Pt[5],Ht=(Pt[9]-1)/Pt[5],zt=(Pt[8]-1)/Pt[0],St=(ne[8]+1)/ne[0],ye=He*zt,wt=He*St,qt=Bt/(-zt+St),ze=qt*-zt;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ze),K.translateZ(qt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ce=He+qt,P=I+qt,w=ye-ze,H=wt+(Bt-ze),Z=Me*I/P*Ce,J=Ht*I/P*Ce;K.projectionMatrix.makePerspective(w,H,Z,J,Ce,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function _t(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,Mt=K.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),L.near=g.near=E.near=Q,L.far=g.far=E.far=Mt,(N!==L.near||B!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,B=L.far),L.layers.mask=K.layers.mask|6,E.layers.mask=L.layers.mask&3,g.layers.mask=L.layers.mask&5;const Bt=K.parent,Pt=L.cameras;_t(L,Bt);for(let ne=0;ne<Pt.length;ne++)_t(Pt[ne],Bt);Pt.length===2?ft(L,E,g):L.projectionMatrix.copy(E.projectionMatrix),$t(K,L,Bt)};function $t(K,Q,Mt){Mt===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=kc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(L)},this.getCameraTexture=function(K){return u[K]};let se=null;function de(K,Q){if(h=Q.getViewerPose(c||a),x=Q,h!==null){const Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Bt=!1;Mt.length!==L.cameras.length&&(L.cameras.length=0,Bt=!0);for(let I=0;I<Mt.length;I++){const Me=Mt[I];let Ht=null;if(f!==null)Ht=f.getViewport(Me);else{const St=d.getViewSubImage(p,Me);Ht=St.viewport,I===0&&(t.setRenderTargetTextures(b,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(b))}let zt=R[I];zt===void 0&&(zt=new _n,zt.layers.enable(I),zt.viewport=new Re,R[I]=zt),zt.matrix.fromArray(Me.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Me.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),I===0&&(L.matrix.copy(zt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Bt===!0&&L.cameras.push(zt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const I=d.getDepthInformation(Mt[0]);I&&I.isValid&&I.texture&&v.init(I,s.renderState)}if(Pt&&Pt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let I=0;I<Mt.length;I++){const Me=Mt[I].camera;if(Me){let Ht=u[Me];Ht||(Ht=new Uu,u[Me]=Ht);const zt=d.getCameraImage(Me);Ht.sourceTexture=zt}}}}for(let Mt=0;Mt<C.length;Mt++){const Bt=m[Mt],Pt=C[Mt];Bt!==null&&Pt!==void 0&&Pt.update(Bt,Q,c||a)}se&&se(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}const oe=new Bu;oe.setAnimationLoop(de),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}}const Vi=new Yn,Qv=new le;function tx(i,t){function e(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function n(v,u){u.color.getRGB(v.fogColor.value,Cu(i)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function s(v,u,_,S,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(v,u):u.isMeshToonMaterial?(r(v,u),d(v,u)):u.isMeshPhongMaterial?(r(v,u),h(v,u)):u.isMeshStandardMaterial?(r(v,u),p(v,u),u.isMeshPhysicalMaterial&&f(v,u,b)):u.isMeshMatcapMaterial?(r(v,u),x(v,u)):u.isMeshDepthMaterial?r(v,u):u.isMeshDistanceMaterial?(r(v,u),y(v,u)):u.isMeshNormalMaterial?r(v,u):u.isLineBasicMaterial?(a(v,u),u.isLineDashedMaterial&&o(v,u)):u.isPointsMaterial?l(v,u,_,S):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,e(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,e(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,e(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===Ue&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,e(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===Ue&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,e(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,e(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const _=t.get(u),S=_.envMap,b=_.envMapRotation;S&&(v.envMap.value=S,Vi.copy(b),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),v.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(Vi)),v.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap&&(v.lightMap.value=u.lightMap,v.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,v.lightMapTransform)),u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,v.aoMapTransform))}function a(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,e(u.map,v.mapTransform))}function o(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,_,S){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*_,v.scale.value=S*.5,u.map&&(v.map.value=u.map,e(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,e(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,e(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,e(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function h(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function d(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function p(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,v.roughnessMapTransform)),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function f(v,u,_){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ue&&v.clearcoatNormalScale.value.negate())),u.dispersion>0&&(v.dispersion.value=u.dispersion),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,u){u.matcap&&(v.matcap.value=u.matcap)}function y(v,u){const _=t.get(u).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ex(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){const b=S.program;n.uniformBlockBinding(_,b)}function c(_,S){let b=s[_.id];b===void 0&&(x(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",v));const C=S.program;n.updateUBOMapping(_,C);const m=t.render.frame;r[_.id]!==m&&(p(_),r[_.id]=m)}function h(_){const S=d();_.__bindingPointIndex=S;const b=i.createBuffer(),C=_.__size,m=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const S=s[_.id],b=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let m=0,T=b.length;m<T;m++){const D=Array.isArray(b[m])?b[m]:[b[m]];for(let E=0,g=D.length;E<g;E++){const R=D[E];if(f(R,m,E,C)===!0){const L=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let k=0;k<N.length;k++){const W=N[k],$=y(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,L+B,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,S,b,C){const m=_.value,T=S+"_"+b;if(C[T]===void 0)return typeof m=="number"||typeof m=="boolean"?C[T]=m:C[T]=m.clone(),!0;{const D=C[T];if(typeof m=="number"||typeof m=="boolean"){if(D!==m)return C[T]=m,!0}else if(D.equals(m)===!1)return D.copy(m),!0}return!1}function x(_){const S=_.uniforms;let b=0;const C=16;for(let T=0,D=S.length;T<D;T++){const E=Array.isArray(S[T])?S[T]:[S[T]];for(let g=0,R=E.length;g<R;g++){const L=E[g],N=Array.isArray(L.value)?L.value:[L.value];for(let B=0,k=N.length;B<k;B++){const W=N[B],$=y(W),V=b%C,it=V%$.boundary,ft=V+it;b+=it,ft!==0&&C-ft<$.storage&&(b+=C-ft),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=$.storage}}}const m=b%C;return m>0&&(b+=C-m),_.__size=b,_.__cache={},this}function y(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function v(_){const S=_.target;S.removeEventListener("dispose",v);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class nx{constructor(t={}){const{canvas:e=df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const x=new Uint32Array(4),y=new Int32Array(4);let v=null,u=null;const _=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=Je;let m=0,T=0,D=null,E=-1,g=null;const R=new Re,L=new Re;let N=null;const B=new Gt(0);let k=0,W=e.width,$=e.height,V=1,it=null,ft=null;const _t=new Re(0,0,W,$),$t=new Re(0,0,W,$);let se=!1;const de=new vl;let oe=!1,K=!1;const Q=new le,Mt=new U,Bt=new Re,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function He(){return D===null?V:1}let I=n;function Me(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rl}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",et,!1),I===null){const z="webgl2";if(I=Me(z,A),I===null)throw Me(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ht,zt,St,ye,wt,qt,ze,Ce,P,w,H,Z,J,q,Ct,ct,Et,At,st,mt,Ft,Rt,dt,Wt;function F(){Ht=new dg(I),Ht.init(),Rt=new Yv(I,Ht),zt=new rg(I,Ht,t,Rt),St=new $v(I,Ht),zt.reversedDepthBuffer&&p&&St.buffers.depth.setReversed(!0),ye=new mg(I),wt=new Iv,qt=new qv(I,Ht,St,wt,zt,Rt,ye),ze=new og(b),Ce=new ug(b),P=new yp(I),dt=new ig(I,P),w=new fg(I,P,ye,dt),H=new vg(I,w,P,ye),st=new gg(I,zt,qt),ct=new ag(wt),Z=new Lv(b,ze,Ce,Ht,zt,dt,ct),J=new tx(b,wt),q=new Nv,Ct=new Hv(Ht),At=new ng(b,ze,Ce,St,H,f,l),Et=new Wv(b,H,zt),Wt=new ex(I,ye,zt,St),mt=new sg(I,Ht,ye),Ft=new pg(I,Ht,ye),ye.programs=Z.programs,b.capabilities=zt,b.extensions=Ht,b.properties=wt,b.renderLists=q,b.shadowMap=Et,b.state=St,b.info=ye}F();const rt=new Jv(b,I);this.xr=rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(W,$,!1))},this.getSize=function(A){return A.set(W,$)},this.setSize=function(A,z,G=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,$=z,e.width=Math.floor(A*V),e.height=Math.floor(z*V),G===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(W*V,$*V).floor()},this.setDrawingBufferSize=function(A,z,G){W=A,$=z,V=G,e.width=Math.floor(A*G),e.height=Math.floor(z*G),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,z,G,X){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,z,G,X),St.viewport(R.copy(_t).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy($t)},this.setScissor=function(A,z,G,X){A.isVector4?$t.set(A.x,A.y,A.z,A.w):$t.set(A,z,G,X),St.scissor(L.copy($t).multiplyScalar(V).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){St.setScissorTest(se=A)},this.setOpaqueSort=function(A){it=A},this.setTransparentSort=function(A){ft=A},this.getClearColor=function(A){return A.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,G=!0){let X=0;if(A){let O=!1;if(D!==null){const nt=D.texture.format;O=nt===ul||nt===hl||nt===ll}if(O){const nt=D.texture.type,pt=nt===qn||nt===Zi||nt===mr||nt===gr||nt===ol||nt===cl,yt=At.getClearColor(),vt=At.getClearAlpha(),Nt=yt.r,Ot=yt.g,Lt=yt.b;pt?(x[0]=Nt,x[1]=Ot,x[2]=Lt,x[3]=vt,I.clearBufferuiv(I.COLOR,0,x)):(y[0]=Nt,y[1]=Ot,y[2]=Lt,y[3]=vt,I.clearBufferiv(I.COLOR,0,y))}else X|=I.COLOR_BUFFER_BIT}z&&(X|=I.DEPTH_BUFFER_BIT),G&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),At.dispose(),q.dispose(),Ct.dispose(),wt.dispose(),ze.dispose(),Ce.dispose(),H.dispose(),dt.dispose(),Wt.dispose(),Z.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",On),rt.removeEventListener("sessionend",Dl),Ni.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=ye.autoReset,z=Et.enabled,G=Et.autoUpdate,X=Et.needsUpdate,O=Et.type;F(),ye.autoReset=A,Et.enabled=z,Et.autoUpdate=G,Et.needsUpdate=X,Et.type=O}function et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function j(A){const z=A.target;z.removeEventListener("dispose",j),bt(z)}function bt(A){kt(A),wt.remove(A)}function kt(A){const z=wt.get(A).programs;z!==void 0&&(z.forEach(function(G){Z.releaseProgram(G)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,G,X,O,nt){z===null&&(z=Pt);const pt=O.isMesh&&O.matrixWorld.determinant()<0,yt=_d(A,z,G,X,O);St.setMaterial(X,pt);let vt=G.index,Nt=1;if(X.wireframe===!0){if(vt=w.getWireframeAttribute(G),vt===void 0)return;Nt=2}const Ot=G.drawRange,Lt=G.attributes.position;let Qt=Ot.start*Nt,he=(Ot.start+Ot.count)*Nt;nt!==null&&(Qt=Math.max(Qt,nt.start*Nt),he=Math.min(he,(nt.start+nt.count)*Nt)),vt!==null?(Qt=Math.max(Qt,0),he=Math.min(he,vt.count)):Lt!=null&&(Qt=Math.max(Qt,0),he=Math.min(he,Lt.count));const Ae=he-Qt;if(Ae<0||Ae===1/0)return;dt.setup(O,X,yt,G,vt);let ge,fe=mt;if(vt!==null&&(ge=P.get(vt),fe=Ft,fe.setIndex(ge)),O.isMesh)X.wireframe===!0?(St.setLineWidth(X.wireframeLinewidth*He()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(O.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),St.setLineWidth(Ut*He()),O.isLineSegments?fe.setMode(I.LINES):O.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else O.isPoints?fe.setMode(I.POINTS):O.isSprite&&fe.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ut=O._multiDrawStarts,we=O._multiDrawCounts,re=O._multiDrawCount,an=vt?P.get(vt).bytesPerElement:1,ss=wt.get(X).currentProgram.getUniforms();for(let on=0;on<re;on++)ss.setValue(I,"_gl_DrawID",on),fe.render(Ut[on]/an,we[on])}else if(O.isInstancedMesh)fe.renderInstances(Qt,Ae,O.count);else if(G.isInstancedBufferGeometry){const Ut=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,we=Math.min(G.instanceCount,Ut);fe.renderInstances(Qt,Ae,we)}else fe.render(Qt,Ae)};function me(A,z,G){A.transparent===!0&&A.side===ve&&A.forceSinglePass===!1?(A.side=Ue,A.needsUpdate=!0,Fr(A,z,G),A.side=ui,A.needsUpdate=!0,Fr(A,z,G),A.side=ve):Fr(A,z,G)}this.compile=function(A,z,G=null){G===null&&(G=A),u=Ct.get(G),u.init(z),S.push(u),G.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),A!==G&&A.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const X=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let pt=0;pt<nt.length;pt++){const yt=nt[pt];me(yt,G,O),X.add(yt)}else me(nt,G,O),X.add(nt)}),u=S.pop(),X},this.compileAsync=function(A,z,G=null){const X=this.compile(A,z,G);return new Promise(O=>{function nt(){if(X.forEach(function(pt){wt.get(pt).currentProgram.isReady()&&X.delete(pt)}),X.size===0){O(A);return}setTimeout(nt,10)}Ht.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ce=null;function Kn(A){ce&&ce(A)}function On(){Ni.stop()}function Dl(){Ni.start()}const Ni=new Bu;Ni.setAnimationLoop(Kn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){ce=A,rt.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},rt.addEventListener("sessionstart",On),rt.addEventListener("sessionend",Dl),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(z),z=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,z,D),u=Ct.get(A,S.length),u.init(z),S.push(u),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),de.setFromProjectionMatrix(Q,Wn,z.reversedDepth),K=this.localClippingEnabled,oe=ct.init(this.clippingPlanes,K),v=q.get(A,_.length),v.init(),_.push(v),rt.enabled===!0&&rt.isPresenting===!0){const nt=b.xr.getDepthSensingMesh();nt!==null&&no(nt,z,-1/0,b.sortObjects)}no(A,z,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(it,ft),ne=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ne&&At.addToRenderList(v,A),this.info.render.frame++,oe===!0&&ct.beginShadows();const G=u.state.shadowsArray;Et.render(G,A,z),oe===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,O=v.transmissive;if(u.setupLights(),z.isArrayCamera){const nt=z.cameras;if(O.length>0)for(let pt=0,yt=nt.length;pt<yt;pt++){const vt=nt[pt];Il(X,O,A,vt)}ne&&At.render(A);for(let pt=0,yt=nt.length;pt<yt;pt++){const vt=nt[pt];Ll(v,A,vt,vt.viewport)}}else O.length>0&&Il(X,O,A,z),ne&&At.render(A),Ll(v,A,z);D!==null&&T===0&&(qt.updateMultisampleRenderTarget(D),qt.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(b,A,z),dt.resetDefaultState(),E=-1,g=null,S.pop(),S.length>0?(u=S[S.length-1],oe===!0&&ct.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function no(A,z,G,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||de.intersectsSprite(A)){X&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const pt=H.update(A),yt=A.material;yt.visible&&v.push(A,pt,yt,G,Bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||de.intersectsObject(A))){const pt=H.update(A),yt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Bt.copy(pt.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(yt)){const vt=pt.groups;for(let Nt=0,Ot=vt.length;Nt<Ot;Nt++){const Lt=vt[Nt],Qt=yt[Lt.materialIndex];Qt&&Qt.visible&&v.push(A,pt,Qt,G,Bt.z,Lt)}}else yt.visible&&v.push(A,pt,yt,G,Bt.z,null)}}const nt=A.children;for(let pt=0,yt=nt.length;pt<yt;pt++)no(nt[pt],z,G,X)}function Ll(A,z,G,X){const O=A.opaque,nt=A.transmissive,pt=A.transparent;u.setupLightsView(G),oe===!0&&ct.setGlobalState(b.clippingPlanes,G),X&&St.viewport(R.copy(X)),O.length>0&&Nr(O,z,G),nt.length>0&&Nr(nt,z,G),pt.length>0&&Nr(pt,z,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Il(A,z,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Ki(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Pr:qn,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const nt=u.state.transmissionRenderTarget[X.id],pt=X.viewport||R;nt.setSize(pt.z*b.transmissionResolutionScale,pt.w*b.transmissionResolutionScale);const yt=b.getRenderTarget(),vt=b.getActiveCubeFace(),Nt=b.getActiveMipmapLevel();b.setRenderTarget(nt),b.getClearColor(B),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear(),ne&&At.render(G);const Ot=b.toneMapping;b.toneMapping=Ci;const Lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),oe===!0&&ct.setGlobalState(b.clippingPlanes,X),Nr(A,G,X),qt.updateMultisampleRenderTarget(nt),qt.updateRenderTargetMipmap(nt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let he=0,Ae=z.length;he<Ae;he++){const ge=z[he],fe=ge.object,Ut=ge.geometry,we=ge.material,re=ge.group;if(we.side===ve&&fe.layers.test(X.layers)){const an=we.side;we.side=Ue,we.needsUpdate=!0,Ul(fe,G,X,Ut,we,re),we.side=an,we.needsUpdate=!0,Qt=!0}}Qt===!0&&(qt.updateMultisampleRenderTarget(nt),qt.updateRenderTargetMipmap(nt))}b.setRenderTarget(yt,vt,Nt),b.setClearColor(B,k),Lt!==void 0&&(X.viewport=Lt),b.toneMapping=Ot}function Nr(A,z,G){const X=z.isScene===!0?z.overrideMaterial:null;for(let O=0,nt=A.length;O<nt;O++){const pt=A[O],yt=pt.object,vt=pt.geometry,Nt=pt.group;let Ot=pt.material;Ot.allowOverride===!0&&X!==null&&(Ot=X),yt.layers.test(G.layers)&&Ul(yt,z,G,vt,Ot,Nt)}}function Ul(A,z,G,X,O,nt){A.onBeforeRender(b,z,G,X,O,nt),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(b,z,G,X,A,nt),O.transparent===!0&&O.side===ve&&O.forceSinglePass===!1?(O.side=Ue,O.needsUpdate=!0,b.renderBufferDirect(G,z,X,O,A,nt),O.side=ui,O.needsUpdate=!0,b.renderBufferDirect(G,z,X,O,A,nt),O.side=ve):b.renderBufferDirect(G,z,X,O,A,nt),A.onAfterRender(b,z,G,X,O,nt)}function Fr(A,z,G){z.isScene!==!0&&(z=Pt);const X=wt.get(A),O=u.state.lights,nt=u.state.shadowsArray,pt=O.state.version,yt=Z.getParameters(A,O.state,nt,z,G),vt=Z.getProgramCacheKey(yt);let Nt=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?Ce:ze).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",j),Nt=new Map,X.programs=Nt);let Ot=Nt.get(vt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===pt)return Fl(A,yt),Ot}else yt.uniforms=Z.getUniforms(A),A.onBeforeCompile(yt,b),Ot=Z.acquireProgram(yt,vt),Nt.set(vt,Ot),X.uniforms=yt.uniforms;const Lt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),Fl(A,yt),X.needsLights=yd(A),X.lightsStateVersion=pt,X.needsLights&&(Lt.ambientLightColor.value=O.state.ambient,Lt.lightProbe.value=O.state.probe,Lt.directionalLights.value=O.state.directional,Lt.directionalLightShadows.value=O.state.directionalShadow,Lt.spotLights.value=O.state.spot,Lt.spotLightShadows.value=O.state.spotShadow,Lt.rectAreaLights.value=O.state.rectArea,Lt.ltc_1.value=O.state.rectAreaLTC1,Lt.ltc_2.value=O.state.rectAreaLTC2,Lt.pointLights.value=O.state.point,Lt.pointLightShadows.value=O.state.pointShadow,Lt.hemisphereLights.value=O.state.hemi,Lt.directionalShadowMap.value=O.state.directionalShadowMap,Lt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Lt.spotShadowMap.value=O.state.spotShadowMap,Lt.spotLightMatrix.value=O.state.spotLightMatrix,Lt.spotLightMap.value=O.state.spotLightMap,Lt.pointShadowMap.value=O.state.pointShadowMap,Lt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function Nl(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=_a.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Fl(A,z){const G=wt.get(A);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function _d(A,z,G,X,O){z.isScene!==!0&&(z=Pt),qt.resetTextureUnits();const nt=z.fog,pt=X.isMeshStandardMaterial?z.environment:null,yt=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Us,vt=(X.isMeshStandardMaterial?Ce:ze).get(X.envMap||pt),Nt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,he=!!G.morphAttributes.color;let Ae=Ci;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ae=b.toneMapping);const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,fe=ge!==void 0?ge.length:0,Ut=wt.get(X),we=u.state.lights;if(oe===!0&&(K===!0||A!==g)){const qe=A===g&&X.id===E;ct.setState(X,A,qe)}let re=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==we.state.version||Ut.outputColorSpace!==yt||O.isBatchedMesh&&Ut.batching===!1||!O.isBatchedMesh&&Ut.batching===!0||O.isBatchedMesh&&Ut.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ut.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ut.instancing===!1||!O.isInstancedMesh&&Ut.instancing===!0||O.isSkinnedMesh&&Ut.skinning===!1||!O.isSkinnedMesh&&Ut.skinning===!0||O.isInstancedMesh&&Ut.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ut.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ut.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ut.instancingMorph===!1&&O.morphTexture!==null||Ut.envMap!==vt||X.fog===!0&&Ut.fog!==nt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ct.numPlanes||Ut.numIntersection!==ct.numIntersection)||Ut.vertexAlphas!==Nt||Ut.vertexTangents!==Ot||Ut.morphTargets!==Lt||Ut.morphNormals!==Qt||Ut.morphColors!==he||Ut.toneMapping!==Ae||Ut.morphTargetsCount!==fe)&&(re=!0):(re=!0,Ut.__version=X.version);let an=Ut.currentProgram;re===!0&&(an=Fr(X,z,O));let ss=!1,on=!1,Ks=!1;const Ee=an.getUniforms(),pn=Ut.uniforms;if(St.useProgram(an.program)&&(ss=!0,on=!0,Ks=!0),X.id!==E&&(E=X.id,on=!0),ss||g!==A){St.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ee.setValue(I,"projectionMatrix",A.projectionMatrix),Ee.setValue(I,"viewMatrix",A.matrixWorldInverse);const en=Ee.map.cameraPosition;en!==void 0&&en.setValue(I,Mt.setFromMatrixPosition(A.matrixWorld)),zt.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),g!==A&&(g=A,on=!0,Ks=!0)}if(O.isSkinnedMesh){Ee.setOptional(I,O,"bindMatrix"),Ee.setOptional(I,O,"bindMatrixInverse");const qe=O.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Ee.setValue(I,"boneTexture",qe.boneTexture,qt))}O.isBatchedMesh&&(Ee.setOptional(I,O,"batchingTexture"),Ee.setValue(I,"batchingTexture",O._matricesTexture,qt),Ee.setOptional(I,O,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",O._indirectTexture,qt),Ee.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",O._colorsTexture,qt));const mn=G.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&st.update(O,G,an),(on||Ut.receiveShadow!==O.receiveShadow)&&(Ut.receiveShadow=O.receiveShadow,Ee.setValue(I,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pn.envMap.value=vt,pn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),on&&(Ee.setValue(I,"toneMappingExposure",b.toneMappingExposure),Ut.needsLights&&Md(pn,Ks),nt&&X.fog===!0&&J.refreshFogUniforms(pn,nt),J.refreshMaterialUniforms(pn,X,V,$,u.state.transmissionRenderTarget[A.id]),_a.upload(I,Nl(Ut),pn,qt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_a.upload(I,Nl(Ut),pn,qt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(I,"center",O.center),Ee.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(I,"normalMatrix",O.normalMatrix),Ee.setValue(I,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qe=X.uniformsGroups;for(let en=0,io=qe.length;en<io;en++){const Fi=qe[en];Wt.update(Fi,an),Wt.bind(Fi,an)}}return an}function Md(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function yd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,z,G){const X=wt.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),wt.get(A.texture).__webglTexture=z,wt.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const G=wt.get(A);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0};const bd=I.createFramebuffer();this.setRenderTarget=function(A,z=0,G=0){D=A,m=z,T=G;let X=!0,O=null,nt=!1,pt=!1;if(A){const vt=wt.get(A);if(vt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(vt.__webglFramebuffer===void 0)qt.setupRenderTarget(A);else if(vt.__hasExternalTextures)qt.rebindTextures(A,wt.get(A.texture).__webglTexture,wt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Lt=A.depthTexture;if(vt.__boundDepthTexture!==Lt){if(Lt!==null&&wt.has(Lt)&&(A.width!==Lt.image.width||A.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(A)}}const Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);const Ot=wt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[z])?O=Ot[z][G]:O=Ot[z],nt=!0):A.samples>0&&qt.useMultisampledRTT(A)===!1?O=wt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?O=Ot[G]:O=Ot,R.copy(A.viewport),L.copy(A.scissor),N=A.scissorTest}else R.copy(_t).multiplyScalar(V).floor(),L.copy($t).multiplyScalar(V).floor(),N=se;if(G!==0&&(O=bd),St.bindFramebuffer(I.FRAMEBUFFER,O)&&X&&St.drawBuffers(A,O),St.viewport(R),St.scissor(L),St.setScissorTest(N),nt){const vt=wt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,vt.__webglTexture,G)}else if(pt){const vt=z;for(let Nt=0;Nt<A.textures.length;Nt++){const Ot=wt.get(A.textures[Nt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Nt,Ot.__webglTexture,G,vt)}}else if(A!==null&&G!==0){const vt=wt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vt.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(A,z,G,X,O,nt,pt,yt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt){St.bindFramebuffer(I.FRAMEBUFFER,vt);try{const Nt=A.textures[yt],Ot=Nt.format,Lt=Nt.type;if(!zt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&G>=0&&G<=A.height-O&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt),I.readPixels(z,G,X,O,Rt.convert(Ot),Rt.convert(Lt),nt))}finally{const Nt=D!==null?wt.get(D).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,z,G,X,O,nt,pt,yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt)if(z>=0&&z<=A.width-X&&G>=0&&G<=A.height-O){St.bindFramebuffer(I.FRAMEBUFFER,vt);const Nt=A.textures[yt],Ot=Nt.format,Lt=Nt.type;if(!zt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt),I.readPixels(z,G,X,O,Rt.convert(Ot),Rt.convert(Lt),0);const he=D!==null?wt.get(D).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,he);const Ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ff(I,Ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(Qt),I.deleteSync(Ae),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,G=0){const X=Math.pow(2,-G),O=Math.floor(A.image.width*X),nt=Math.floor(A.image.height*X),pt=z!==null?z.x:0,yt=z!==null?z.y:0;qt.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,pt,yt,O,nt),St.unbindTexture()};const Sd=I.createFramebuffer(),wd=I.createFramebuffer();this.copyTextureToTexture=function(A,z,G=null,X=null,O=0,nt=null){nt===null&&(O!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=O,O=0):nt=0);let pt,yt,vt,Nt,Ot,Lt,Qt,he,Ae;const ge=A.isCompressedTexture?A.mipmaps[nt]:A.image;if(G!==null)pt=G.max.x-G.min.x,yt=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,Ot=G.min.y,Lt=G.isBox3?G.min.z:0;else{const mn=Math.pow(2,-O);pt=Math.floor(ge.width*mn),yt=Math.floor(ge.height*mn),A.isDataArrayTexture?vt=ge.depth:A.isData3DTexture?vt=Math.floor(ge.depth*mn):vt=1,Nt=0,Ot=0,Lt=0}X!==null?(Qt=X.x,he=X.y,Ae=X.z):(Qt=0,he=0,Ae=0);const fe=Rt.convert(z.format),Ut=Rt.convert(z.type);let we;z.isData3DTexture?(qt.setTexture3D(z,0),we=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(qt.setTexture2DArray(z,0),we=I.TEXTURE_2D_ARRAY):(qt.setTexture2D(z,0),we=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const re=I.getParameter(I.UNPACK_ROW_LENGTH),an=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ss=I.getParameter(I.UNPACK_SKIP_PIXELS),on=I.getParameter(I.UNPACK_SKIP_ROWS),Ks=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Nt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lt);const Ee=A.isDataArrayTexture||A.isData3DTexture,pn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const mn=wt.get(A),qe=wt.get(z),en=wt.get(mn.__renderTarget),io=wt.get(qe.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let Fi=0;Fi<vt;Fi++)Ee&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.get(A).__webglTexture,O,Lt+Fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.get(z).__webglTexture,nt,Ae+Fi)),I.blitFramebuffer(Nt,Ot,pt,yt,Qt,he,pt,yt,I.DEPTH_BUFFER_BIT,I.NEAREST);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||wt.has(A)){const mn=wt.get(A),qe=wt.get(z);St.bindFramebuffer(I.READ_FRAMEBUFFER,Sd),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,wd);for(let en=0;en<vt;en++)Ee?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,O,Lt+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,O),pn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qe.__webglTexture,nt,Ae+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qe.__webglTexture,nt),O!==0?I.blitFramebuffer(Nt,Ot,pt,yt,Qt,he,pt,yt,I.COLOR_BUFFER_BIT,I.NEAREST):pn?I.copyTexSubImage3D(we,nt,Qt,he,Ae+en,Nt,Ot,pt,yt):I.copyTexSubImage2D(we,nt,Qt,he,Nt,Ot,pt,yt);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(we,nt,Qt,he,Ae,pt,yt,vt,fe,Ut,ge.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(we,nt,Qt,he,Ae,pt,yt,vt,fe,ge.data):I.texSubImage3D(we,nt,Qt,he,Ae,pt,yt,vt,fe,Ut,ge):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,nt,Qt,he,pt,yt,fe,Ut,ge.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,nt,Qt,he,ge.width,ge.height,fe,ge.data):I.texSubImage2D(I.TEXTURE_2D,nt,Qt,he,pt,yt,fe,Ut,ge);I.pixelStorei(I.UNPACK_ROW_LENGTH,re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,an),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ss),I.pixelStorei(I.UNPACK_SKIP_ROWS,on),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ks),nt===0&&z.generateMipmaps&&I.generateMipmap(we),St.unbindTexture()},this.initRenderTarget=function(A){wt.get(A).__webglFramebuffer===void 0&&qt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?qt.setTextureCube(A,0):A.isData3DTexture?qt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?qt.setTexture2DArray(A,0):qt.setTexture2D(A,0),St.unbindTexture()},this.resetState=function(){m=0,T=0,D=null,St.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class Wu{ramp;palette=new Map;ink=new ee({color:1451064,side:Ue});constructor(){this.ramp=new gl(new Uint8Array([65,140,220,255]),4,1,Dr),this.ramp.minFilter=Xe,this.ramp.magFilter=Xe,this.ramp.generateMipmaps=!1,this.ramp.needsUpdate=!0}apply(t){const e=[];t.traverse(n=>{n instanceof at&&e.push(n)});for(const n of e){const s=n.material;if(!(s instanceof pe)||s.transparent||s.emissiveIntensity>0&&s.emissive.getHex()!==0||n.userData.toonApplied)continue;n.userData.toonApplied=!0;const r=s.color.getHexString();let a=this.palette.get(r);if(a||(a=new Sl({color:s.color,gradientMap:this.ramp}),this.palette.set(r,a)),n.material=a,Math.min(n.scale.x,n.scale.y,n.scale.z)<.18||n.scale.x*n.scale.y*n.scale.z<.045)continue;const o=new at(n.geometry,this.ink);o.name="toon-outline",o.scale.setScalar(1.035),o.castShadow=!1,o.receiveShadow=!1,o.userData={...n.userData,toonOutline:!0},n.add(o)}}}class ix{root=new ut;figures=new Map;constructor(t){this.root.name="earned-boss-trophies",t.add(this.root);const e=new Sn(1,1,1),n=new pe({color:15382367,roughness:.55}),s=new pe({color:9277903,roughness:.65}),r=new pe({color:2376802,roughness:.8}),a=new ee({color:10813424,toneMapped:!1}),o=(l,c,h,d,p)=>{const f=new at(c,h);return f.position.set(d[0],d[1],d[2]),f.scale.set(p[0],p[1],p[2]),f.castShadow=!(h instanceof ee),l.add(f),f};for(const l of[1,2]){const c=new ut;if(c.position.set(l===1?-3.8:3.8,1.39,-.6),this.root.add(c),this.figures.set(l,c),o(c,new fn(.4,.46,.12,24),n,[0,.06,0],[1,1,1]),l===1){o(c,e,n,[0,.43,0],[.72,.55,.55]),o(c,e,r,[0,.46,.29],[.5,.13,.04]);for(const h of[-.26,0,.26])o(c,new Ji(.08,h===0?.35:.23,4),n,[h,.79,0],[1,1,1]);for(const h of[-.16,.16])o(c,e,a,[h,.46,.325],[.06,.07,.025])}else{o(c,new is(.38,0),s,[0,.55,0],[1,1,1]);const h=o(c,new wn(.48,.035,6,40),n,[0,.48,0],[1,1,1]);h.rotation.x=Math.PI/2,o(c,new zn(.13,12,8),a,[0,.59,.32],[1,1,.3])}c.traverse(h=>{h instanceof at&&(h.userData.trophyChapter=l)}),new Wu().apply(c)}}update(t,e,n){this.root.visible=t&&!e;for(const[s,r]of this.figures)r.visible=n[s]>0}}function sx(i){return`<svg class="trophy-badge" viewBox="0 0 32 32" aria-hidden="true">${i===1?'<path d="m5 9 5 5 6-10 6 10 5-5-3 16H8Z" fill="#ffdb81" stroke="#142c51" stroke-width="2"/><path d="M11 19h10" stroke="#744b2a" stroke-width="3"/>':'<path d="m16 5 10 10-10 13L6 15Z" fill="#afa8e8" stroke="#173354" stroke-width="2"/><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#ffdc89" stroke-width="2"/><circle cx="16" cy="15" r="3" fill="#a6fff0"/>'}</svg>`}const Cn=3,Ma={twin:.45,pump:.65,arc:.75};class rx{stored=Cn;elapsed=0;weapon="twin";get progress(){return this.stored===Cn?0:this.elapsed/Ma[this.weapon]}reset(t){this.weapon=t,this.stored=Cn,this.elapsed=0}spend(){return this.stored<=0?!1:(this.stored--,!0)}collect(){this.stored=Math.min(Cn,this.stored+1),this.stored===Cn&&(this.elapsed=0)}advance(t){if(this.stored===Cn){this.elapsed=0;return}for(this.elapsed+=Math.max(0,t);this.elapsed>=Ma[this.weapon]&&this.stored<Cn;)this.elapsed-=Ma[this.weapon],this.stored++;this.stored===Cn&&(this.elapsed=0)}}const Xu="reactor-rush.audio.v1";function ax(i){let t={};try{const n=i?JSON.parse(i):null;n&&typeof n=="object"&&(t=n)}catch{}const e=n=>typeof n=="number"&&Number.isFinite(n)?Math.min(1,Math.max(0,n)):1;return{music:e(t.music),effects:e(t.effects),muted:t.muted===!0}}function Wc(i){const t='<ellipse cx="56" cy="61" rx="43" ry="5" fill="#0b2349" opacity=".35"/><path d="m29 44-7 17 14 3 11-18" fill="#273f5d" stroke="#112b49" stroke-width="3" stroke-linejoin="round"/>';let e="";return i==="twin"&&(e='<path d="m13 28 17-10 39 8 9 21-14 10-46-11Z" fill="#327b8d" stroke="#12324c" stroke-width="3" stroke-linejoin="round"/><path d="m23 25 40 8 7 12-40-8Z" fill="#5aaab5"/><path d="m67 28 27 3 6 12-10 13-21-6Z" fill="#eaba50" stroke="#13304d" stroke-width="3"/><ellipse cx="92" cy="43" rx="9" ry="12" fill="#203e5c" stroke="#fff0b4" stroke-width="3"/><ellipse cx="92" cy="43" rx="5" ry="7" fill="#80fff0"/><path d="m25 18 31 4 8 7-38-4Z" fill="#f8ebc4"/><path d="m30 37 26 5" stroke="#185069" stroke-width="4"/>'),i==="pump"&&(e='<path d="m12 28 17-10 40 9 9 24-15 9-45-12Z" fill="#ad6450" stroke="#26324a" stroke-width="3" stroke-linejoin="round"/><path d="m27 21 32 7 9 9-38-7Z" fill="#e9b782"/><path d="m60 29 26 1 10 22-26 7Z" fill="#283f58" stroke="#152b45" stroke-width="3"/><ellipse cx="91" cy="35" rx="9" ry="9" fill="#15293d" stroke="#ffe2a0" stroke-width="3"/><ellipse cx="91" cy="51" rx="9" ry="9" fill="#15293d" stroke="#ffe2a0" stroke-width="3"/><path d="m26 45 33 7" stroke="#f4c676" stroke-width="7" stroke-linecap="round"/>'),i==="arc"&&(e='<path d="m13 29 16-12 35 7 13 25-15 11-45-12Z" fill="#6769a6" stroke="#192c4b" stroke-width="3" stroke-linejoin="round"/><path d="m28 20 29 7 8 9-35-7Z" fill="#a8a2e6"/><path d="m58 32 33 2 8 13-10 11-28-7Z" fill="#264d68" stroke="#182e4b" stroke-width="3"/>'+[63,74,85].map(n=>`<ellipse cx="${n}" cy="44" rx="5" ry="14" fill="none" stroke="#83fbe2" stroke-width="4"/>`).join("")+'<ellipse cx="94" cy="46" rx="5" ry="8" fill="#d8ccff"/><path d="m30 38 14 3" stroke="#d0bcff" stroke-width="4"/>'),`<svg class="weapon-art weapon-art-${i}" viewBox="0 0 110 70" aria-hidden="true">${t}${e}</svg>`}const un={radius:3.4,duration:1.5,cooldown:7,capacity:12,damage:65,speed:40},yr=3,$u=3;class ox{remaining=0;cooldown=0;stored=0;captured=0;released=0;emptyReleases=0;lastEmpty=!1;lastRefund=!1;refunds=0;reset(t=!1){this.remaining=0,this.cooldown=0,this.stored=0,this.lastEmpty=!1,this.lastRefund=!1,this.emptyReleases=0,t||(this.captured=0,this.released=0,this.refunds=0)}get active(){return this.remaining>0}press(t=!1){return this.active?this.stored>0?this.release(t):0:(this.cooldown>0||(this.lastEmpty=!1,this.lastRefund=!1,this.remaining=un.duration,this.cooldown=un.cooldown),0)}collect(){return!this.active||this.stored>=un.capacity?!1:(this.stored++,this.captured++,!0)}advance(t,e=!1){return this.cooldown=Math.max(0,this.cooldown-t),this.active?(this.remaining=Math.max(0,this.remaining-t),this.remaining===0?this.release(e):0):0}release(t=!1){const e=this.stored;return this.stored=0,this.remaining=0,this.released+=e,this.lastEmpty=e===0,this.lastRefund=!1,e===0&&(this.emptyReleases++,this.cooldown=Math.min(this.cooldown,1.5)),t&&e>=yr&&(this.cooldown=Math.max(0,this.cooldown-$u),this.refunds++,this.lastRefund=!0),e}}function qu(i){return{offsets:i?[-.055,.055]:[0],damage:i?45:un.damage}}function cx(i,t=!1){return t?{mode:"preparing",progress:0}:i.remaining>0?{mode:"holding",progress:Math.min(1,Math.max(0,i.remaining/un.duration))}:i.cooldown>0?{mode:"recharging",progress:Math.min(1,Math.max(0,1-i.cooldown/un.cooldown))}:{mode:"ready",progress:1}}const We={twin:{name:"트윈 블래스터",icon:"◎",description:"긴 사거리의 정확한 2연발. 빠르게 목표를 바꿉니다.",role:"정확한 연사",damage:24,cooldown:.24,speed:20,range:20,pierce:0,unlock:"처음부터 사용"},pump:{name:"펌프 샷건",icon:"⋔",description:"가까이 붙어 한 번에 쓸어버리는 5갈래 산탄.",role:"근거리 폭발력",damage:24,cooldown:.55,speed:18,range:7.5,pierce:0,unlock:"공중섬 탈환으로 개방"},arc:{name:"아크 관통포",icon:"ϟ",description:"강한 한 발이 적을 한 명 더 관통합니다. 적을 일렬로 모으세요.",role:"느리지만 강한 관통",damage:90,cooldown:.65,speed:24,range:14,pierce:1,unlock:"폭풍 발전소 탈환으로 개방"}};function Xs(i,t){return i==="twin"||(i==="pump"?t[1]>0:t[2]>0)}function zs(i,t){const e=We[i],n=i==="pump"?t?[-.36,-.24,-.12,0,.12,.24,.36]:[-.3,-.15,0,.15,.3]:i==="arc"?t?[-.12,0,.12]:[0]:t?[-.18,0,.18]:[-.035,.035],s=t?i==="pump"?22:i==="arc"?55:20:e.damage;return{offsets:n,damage:s,cooldown:e.cooldown,speed:e.speed,life:e.range/e.speed,pierce:e.pierce}}function lx(i){const t=zs(i,!0);return`${t.offsets.length}갈래 탄환 · 한 발 피해 ${t.damage}`}const Gh={recharge:"#bda5ff",aftershock:"#ffbc64",scatter:"#81e8ff",ricochet:"#ffe482",vampire:"#85f0ba"},Vo=(i,t)=>`<rect x="${i-8}" y="${t-8}" width="16" height="16" rx="5" fill="#334864" stroke="#b7d4e2" stroke-width="2"/><path d="M${i-4} ${t-2}h2m4 0h2" stroke="#fff0bc" stroke-width="2"/>`;function hx(i,t){let e="";if(i==="scatter"){e='<rect x="8" y="28" width="28" height="25" rx="6" fill="#345b7a" stroke="#ffe5a6" stroke-width="3"/><path d="M27 25v-6h14v38H27v-7" fill="#f3c35f" stroke="#173253" stroke-width="2"/>';for(const n of zs(t,!0).offsets){const s=40+Math.sin(n)*65;e+=`<path d="M43 40 95 ${s}" stroke="${Gh.scatter}" stroke-width="3"/><ellipse cx="104" cy="${s}" rx="6" ry="3" fill="#ddfaff"/>`}}else if(i==="ricochet")e=Vo(26,45)+Vo(65,22)+Vo(106,48)+'<path d="m10 58 16-13 11-9 4 6 19-14 5-6 14 13 6-5 21 18" fill="none" stroke="#ffe482" stroke-width="5" stroke-linejoin="round"/><path d="m105 39 4 11-12-2" fill="none" stroke="#fff5bb" stroke-width="3"/>';else if(i==="aftershock")e='<path d="M13 35h28m-6-7 9 7-9 7" stroke="#83fff0" stroke-width="3" fill="none" stroke-dasharray="4 3"/><circle cx="28" cy="58" r="10" fill="#385772" stroke="#b4d8e7" stroke-width="2"/><path d="m77 15 8 17 20-6-7 18 14 13-20 2-3 18-14-14-18 8 4-20-17-9 21-7Z" fill="#f4a542" stroke="#ffe9a3" stroke-width="3"/><circle cx="77" cy="45" r="10" fill="#2d465e"/><path d="m79 35 6-7" stroke="#83fff0" stroke-width="3"/>';else if(i==="recharge"){e='<path d="M47 20a24 24 0 1 1-8 37" fill="none" stroke="#bda5ff" stroke-width="6"/><path d="m38 51 1 11 12-3" fill="none" stroke="#e4dcff" stroke-width="3"/><rect x="49" y="28" width="26" height="27" rx="7" fill="#34506e" stroke="#e5c368" stroke-width="3"/><path d="M55 33v16m14-16v16" stroke="#8bfff0" stroke-width="3"/>';for(let n=0;n<yr;n++)e+=`<ellipse cx="${13+n*10}" cy="${24+n*11}" rx="5" ry="3" fill="#ffe591"/>`}else e='<rect x="39" y="20" width="49" height="43" rx="12" fill="#31546c" stroke="#8bf0ba" stroke-width="3"/><path d="M63 29v25m-12-13h24" stroke="#c9ffe6" stroke-width="8"/><path d="m18 45 13 0m-6-7 7 7-7 7" fill="none" stroke="#8bf0ba" stroke-width="3"/><path d="M96 20h15v46H96" fill="#294464" stroke="#bad9d6" stroke-width="2"/><path d="M101 60V32h5v28" stroke="#85f0ba" stroke-width="5"/>';return`<svg class="evolution-art" viewBox="0 0 128 82" aria-hidden="true"><rect x="2" y="2" width="124" height="78" rx="12" fill="#122b4d" stroke="${Gh[i]}" stroke-width="2"/>${e}</svg>`}function ux(i,t,e){return i==="scatter"?`${zs(t,!1).offsets.length}발 → ${zs(t,!0).offsets.length}갈래 · ${t==="arc"?"일렬로 모인 적을 관통":"가까이 모인 적을 넓게 공격"}`:i==="ricochet"?e.includes("scatter")?"산탄의 각 탄환이 주변 적에게 연쇄":"한 적을 노려 주변 적까지 공격":i==="aftershock"?"적을 유인한 뒤 회피 · 남긴 폭탄으로 반격":i==="recharge"?e.includes("scatter")?`${yr}발 포획 → ${yr*qu(!0).offsets.length}발 반격을 더 자주`:"포대·보스 탄막을 모아 연속 반격":"체력 여유를 만들고 가까이 들어가 셀 회수"}function dx(){return`${yr}발 이상 모아 반격하면 포획 재사용 대기 −${$u}초`}const rr=new U;function vn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;rr.copy(t),rr[n]=0,rr.normalize();const c=.5*a/(a+o),h=1-rr.angleTo(i)/l;return Math.sign(rr[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Ui extends Sn{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,f=this.attributes.uv.array,x=d.length/6,y=new U,v=.5/a;for(let u=0,_=0;u<d.length;u+=3,_+=2)switch(l.fromArray(d,u),c.copy(l),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),d[u+0]=h.x*Math.sign(l.x)+c.x*r,d[u+1]=h.y*Math.sign(l.y)+c.y*r,d[u+2]=h.z*Math.sign(l.z)+c.z*r,p[u+0]=c.x,p[u+1]=c.y,p[u+2]=c.z,Math.floor(u/x)){case 0:y.set(1,0,0),f[_+0]=vn(y,c,"z","y",r,n),f[_+1]=1-vn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),f[_+0]=1-vn(y,c,"z","y",r,n),f[_+1]=1-vn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),f[_+0]=1-vn(y,c,"x","z",r,t),f[_+1]=vn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[_+0]=1-vn(y,c,"x","z",r,t),f[_+1]=1-vn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[_+0]=1-vn(y,c,"x","y",r,t),f[_+1]=1-vn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),f[_+0]=vn(y,c,"x","y",r,t),f[_+1]=1-vn(y,c,"y","x",r,e);break}}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.segments,t.radius)}}class fx{scarf=new ut;tail;elapsed=0;cloth=new pe({color:16018511,roughness:.9,side:ve});constructor(t,e,n,s){const r=new Ui(1,1,1,2,.06),a=new pe({color:16235838,roughness:.65}),o=new pe({color:2113887,roughness:.8}),l=new ee({color:9109471,toneMapped:!1}),c=(v,u,_,S,b)=>{const C=new at(u,_);return C.position.set(S[0],S[1],S[2]),C.scale.set(b[0],b[1],b[2]),C.castShadow=!(_ instanceof ee),v.add(C),C};this.scarf.name="guardian-scarf",t.add(this.scarf);const h=c(this.scarf,new wn(.59,.085,8,40),this.cloth,[0,1.48,.02],[1,1,.9]);h.rotation.x=Math.PI/2,c(this.scarf,r,this.cloth,[-.43,1.4,-.4],[.22,.24,.18]).rotation.z=.25;const d=new Se;d.setAttribute("position",new ie([-.18,0,0,.18,0,0,.27,-.55,.32,-.16,-.72,.42],3)),d.setIndex([0,1,2,0,2,3]),d.computeVertexNormals(),this.tail=c(this.scarf,d,this.cloth,[-.36,1.49,.4],[1,1,1]),this.tail.name="guardian-scarf-tail";for(const v of n)c(v,r,o,[0,-.64,-.14],[.59,.085,.84]);for(const v of s)c(v,r,o,[0,-.18,-.16],[.23,.3,.27]).rotation.x=.45;const p=new ut;p.name="guardian-energy-pack",p.position.set(0,1.3,.8),t.add(p),c(p,r,o,[0,0,0],[.56,.65,.22]),c(p,r,a,[0,.33,0],[.62,.13,.27]),c(p,r,a,[0,-.31,0],[.62,.13,.27]);const f=c(p,new wn(.18,.055,8,32),l,[0,0,.14],[1,1,1]);f.name="guardian-reactor-ring",c(p,new zn(.13,12,8),l,[0,0,.16],[1,1,.5]);for(const v of[-.18,0,.18])for(const u of[-.35,.35])c(p,r,o,[u,v,0],[.11,.07,.28]);const x=new ee({color:16777215,transparent:!0,opacity:.28,depthWrite:!1});c(e,r,x,[-.22,2.28,-.806],[.34,.055,.03]).rotation.z=.28,c(e,r,x,[-.4,2.2,-.803],[.12,.05,.03]).rotation.z=.28;const y=c(e,new fn(.035,.045,.34,8),o,[.72,2.61,.16],[1,1,1]);y.rotation.z=-.25,c(e,new zn(.07,12,8),l,[.76,2.78,.16],[1,1,1])}update(t,e,n,s){this.elapsed+=Math.max(0,t),this.scarf.traverse(r=>{if(r instanceof at&&!r.userData.toonOutline){const a=r.material;a.color.setHex(e==="tempest"?7511294:e==="crown"?8730968:16018511),a.side=ve}}),!(t<=0)&&(this.tail.rotation.x=s?-.15:-.15+Math.abs(n)*.7+Math.sin(this.elapsed*2.2)*.035,this.tail.rotation.z=s?0:Math.sin(this.elapsed*1.6)*.06)}}function Wh(i,t=new Map,e=.055){const n=new Map,s=new Map,r=new Map,a=new Set(i.map(o=>o.id));for(const o of t.keys())a.has(o)||t.delete(o);for(const o of i){if(o.counter||o.damage===void 0||o.target===void 0)continue;const l=o.text?.startsWith("방패")?"shield":o.text?.startsWith("방어")?"guard":"health",c=l==="shield"?"방패 −":l==="guard"?"방어 ":"",h=o.target+":"+l,d=r.get(h);d&&Math.abs(d.life-o.life)<=e?(n.set(d.id,""),s.delete(d.id),d.damage+=o.damage,d.id=o.id,n.set(o.id,c),s.set(o.id,d.damage)):(r.set(h,{id:o.id,life:o.life,damage:o.damage,prefix:c}),n.set(o.id,c),s.set(o.id,o.damage))}for(const[o,l]of s){const c=Math.max(t.get(o)??0,l);t.set(o,c),n.set(o,n.get(o)+Math.round(c))}return n}const px=new Set(["적 등장","리턴 코일 · 재사용 −3초","회피","돌진!","강타!","반격 기회!","자력 포획!","적탄을 기다려 포획!","회피폭탄!","순간이동!","방패 파괴!","철갑왕 과부하 · 원형 탄막!","폭풍 방패 · 포획 반격!","✦"]);function mx(i,t,e,n=!1,s){const r=new Map,a=Wh(i,t),o=Wh(i.filter(c=>c.counter).map(c=>({...c,counter:!1,text:String(c.damage)})),e,.35);for(const c of i)if(c.counter&&o.has(c.id)){const h=o.get(c.id),d=i.filter(f=>f.counter&&f.target===c.target&&f.damage!==void 0),p=d.every(f=>f.text?.startsWith("방패"))?"반격 방패 −":d.every(f=>f.text?.startsWith("방어"))?"반격 방어 ":"반격 ";r.set(c.id,h?p+h:"")}else a.has(c.id)?r.set(c.id,a.get(c.id)):r.set(c.id,n||px.has(c.text??"")?"":c.text??"");if(s){const c=[];for(const h of i){if(!h.counter||h.damage===void 0||h.target===void 0||s.has(h.target)||!r.get(h.id))continue;const d=c.find(f=>Math.abs(f.life-h.life)<=.1&&Math.hypot(f.x-h.x,f.z-h.z)<1.5),p=e.get(h.id)??h.damage;d?(r.set(d.id,""),d.id=h.id,d.damage+=p,r.set(h.id,"반격 "+Math.round(d.damage))):c.push({id:h.id,x:h.x,z:h.z,life:h.life,damage:p})}}const l=new Map;for(const c of i)if(!c.counter&&c.damage!==void 0&&c.target!==void 0&&r.get(c.id)){const h=l.get(c.target);h!==void 0&&r.set(h,""),l.set(c.target,c.id)}if(!n)for(const c of i.filter(h=>h.text?.startsWith("탄막 탈취 ×"))){const h=i.find(d=>d.text==="퍼펙트 회피!"&&Math.abs(d.life-c.life)<.055&&Math.hypot(d.x-c.x,d.z-c.z)<.5);h&&(r.set(h.id,""),r.set(c.id,"퍼펙트 회피 · "+c.text.replace("탄막 ","")))}return r}function gx(i,t,e,n){const s=Array.from(t).reduce((a,o)=>a+e*(o.charCodeAt(0)>4352?1:.6),12),r=Math.min(n-12,s)/2;return Math.max(6+r,Math.min(n-6-r,i))}class vx{root=new ut;wave;flash;debris;stamp=new _e;age=2;lastId=-1;get active(){return this.age<1.05}constructor(t){this.root.name="boss-finishing-impact",this.root.visible=!1,t.add(this.root);const e=new ee({color:16770976,transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1});this.wave=new at(new $e(.9,1,64),e.clone()),this.wave.rotation.x=-Math.PI/2,this.wave.position.y=.12,this.flash=new at(new zn(1,16,12),e.clone()),this.flash.position.y=3.2,this.debris=new ji(new Sn(1,1,1),new ee({color:16763746,transparent:!0,toneMapped:!1}),16),this.debris.frustumCulled=!1,this.root.add(this.wave,this.flash,this.debris)}trigger(t,e,n,s=!1){if(t===this.lastId)return!1;this.lastId=t,this.age=0,this.root.position.set(e,0,n);const r=s?12628223:16768395;return this.wave.material.color.setHex(r),this.flash.material.color.setHex(r),this.debris.material.color.setHex(s?9281502:16038229),this.update(0,!1),!0}update(t,e){if(this.age+=Math.max(0,t),this.root.visible=this.active&&!e,!this.root.visible)return;const n=this.age/1.05;this.wave.scale.setScalar(.8+n*7),this.wave.material.opacity=(1-n)*.9,this.flash.visible=this.age<.22,this.flash.scale.set(1.1+this.age*7,1.8-this.age*6,1.1+this.age*7),this.flash.material.opacity=Math.max(0,1-this.age/.22)*.75,this.debris.material.opacity=1-n;for(let s=0;s<16;s++){const r=s*2.399,a=2.6+s%4*.55,o=a*this.age;this.stamp.position.set(Math.sin(r)*o,Math.max(.14,2.5+(2.6+s%3*.7)*this.age-4*this.age*this.age),Math.cos(r)*o),this.stamp.rotation.set(s+this.age*4,r+this.age*2,this.age*(s%2?3:-3)),this.stamp.scale.set(.3+s%3*.07,.2,.48+s%4*.07),this.stamp.updateMatrix(),this.debris.setMatrixAt(s,this.stamp.matrix)}this.debris.instanceMatrix.needsUpdate=!0}reset(){this.age=2,this.lastId=-1,this.root.visible=!1}}const xx={wardrobe:'<path d="M16 3 27 8v9c0 7-11 12-11 12S5 24 5 17V8Z"/><path d="M11 12h10v9H11z"/><path d="M14 15v3m4-3v3"/>',armory:'<path d="m4 11 5-5 16 7 3 7-6 5-18-8Z"/><path d="m9 12 13 6m-5-9 4-5 7 4-5 5M9 19l-3 7 6 2 4-7"/>',map:'<path d="m3 8 9-4 8 4 9-4v20l-9 4-8-4-9 4Z"/><path d="M12 4v20m8-16v20m-13-9 8-5 5 3 5-6"/>',records:'<path d="m8 3 8 7 8-7-3 14H11Z"/><circle cx="16" cy="22" r="7"/><path d="m16 18 1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4Z"/>'};function ha(i){return`<svg class="lobby-menu-icon icon-${i}" viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${xx[i]}</svg>`}class _x{root;stamp=new _e;constructor(t){this.root=new ji(new $e(.44,.58,32),new ee({color:12355327,transparent:!0,opacity:.95,depthWrite:!1,side:ve,toneMapped:!1}),16),this.root.name="incoming-wave-portals",this.root.instanceMatrix.setUsage($a),this.root.frustumCulled=!1,this.root.visible=!1,t.add(this.root)}update(t){this.root.count=Math.min(16,t.length),this.root.visible=this.root.count>0;for(let e=0;e<this.root.count;e++)this.stamp.position.set(t[e].x,.105,t[e].z),this.stamp.rotation.set(-Math.PI/2,0,0),this.stamp.scale.setScalar(1),this.stamp.updateMatrix(),this.root.setMatrixAt(e,this.stamp.matrix);this.root.instanceMatrix.needsUpdate=!0}}class Mx{root=new ut;ring;streaks;material;stamp=new _e;seen=0;elapsed=1;power=.6;constructor(t){this.root.name="capture-discharge",this.root.visible=!1,t.add(this.root),this.material=new ee({color:16773019,transparent:!0,opacity:.9,depthWrite:!1,side:ve,toneMapped:!1}),this.ring=new at(new $e(.86,1,48),this.material),this.ring.position.y=1.15,this.streaks=new ji(new Sn(1,1,1),this.material,8),this.streaks.frustumCulled=!1,this.streaks.instanceMatrix.setUsage($a),this.root.add(this.ring,this.streaks)}reset(){this.seen=0,this.elapsed=1,this.root.visible=!1}update(t,e,n,s,r,a,o){if(!a||o){this.seen=t,this.elapsed=1,this.root.visible=!1;return}if(t<this.seen&&(this.elapsed=1),t>this.seen&&(this.elapsed=0,this.power=.55+Math.min(12,t-this.seen)/12*.55,this.root.position.set(e,0,n),this.root.rotation.y=Math.atan2(Math.sin(s),-Math.cos(s))),this.seen=t,this.elapsed+=Math.max(0,r),this.root.visible=this.elapsed<.32,!this.root.visible)return;const l=this.elapsed/.32,c=(.25+l*.75)*this.power,h=1.6+l*2.6;this.material.opacity=(1-l)*.85,this.ring.position.z=h,this.ring.scale.setScalar(c);for(let d=0;d<8;d++){const p=d*Math.PI/4;this.stamp.position.set(Math.cos(p)*c*.65,1.15+Math.sin(p)*c*.65,h-.35),this.stamp.rotation.set(0,0,p),this.stamp.scale.set(.04,.04,.45+(1-l)*.5),this.stamp.updateMatrix(),this.streaks.setMatrixAt(d,this.stamp.matrix)}this.streaks.instanceMatrix.needsUpdate=!0}}const In={counter:{title:"포획·회피",icon:"⦿",evolutions:["recharge","aftershock"],description:"3발 이상 반격하면 포획 대기 감소 · 회피한 자리에 폭탄",tip:"탄막을 모으고, 예고된 공격을 회피하며 반격"},barrage:{title:"산탄·폭탄",icon:"✹",evolutions:["scatter","aftershock"],description:"넓은 산탄과 회피폭탄 · 포획 반격도 두 갈래",tip:"가까이 붙어 산탄 명중을 늘리고 회피폭탄으로 반격"},sustain:{title:"생존·포획",icon:"♥",evolutions:["vampire","recharge"],description:"최대 체력 +30 · 3발 이상 반격하면 포획 대기 감소",tip:"여유 있는 체력으로 포획 시점을 익히기"}};function Tl(i){return typeof i=="string"&&Object.hasOwn(In,i)?i:"counter"}function yx(i){return[...In[Tl(i)].evolutions]}class bx{root=new ut;lamps;circuits;rim;wave;lit=-1;color=new Gt;stamp=new _e;constructor(t){this.root.name="reactor-power",this.root.position.z=-2,this.root.visible=!1,t.add(this.root),this.lamps=new ji(new zn(1,12,8),new ee({color:16777215,toneMapped:!1}),12),this.circuits=new ji(new Sn(1,1,1),new ee({color:16777215,toneMapped:!1}),12);for(let e=0;e<12;e++){const n=e*Math.PI/6;this.stamp.position.set(Math.sin(n)*3.85,.108,Math.cos(n)*3.85),this.stamp.rotation.set(0,0,0),this.stamp.scale.set(.13,.03,.13),this.stamp.updateMatrix(),this.lamps.setMatrixAt(e,this.stamp.matrix),this.stamp.position.set(Math.sin(n)*2.75,.096,Math.cos(n)*2.75),this.stamp.rotation.y=n,this.stamp.scale.set(.06,.014,2.2),this.stamp.updateMatrix(),this.circuits.setMatrixAt(e,this.stamp.matrix)}this.rim=new at(new $e(4.08,4.4,64),new ee({color:9109476,transparent:!0,opacity:.6,depthWrite:!1,side:ve,toneMapped:!1})),this.rim.rotation.x=-Math.PI/2,this.rim.position.y=.104,this.wave=new at(new $e(.96,1,64),new ee({color:11730928,transparent:!0,opacity:.5,depthWrite:!1,side:ve,toneMapped:!1})),this.wave.rotation.x=-Math.PI/2,this.wave.position.y=.115,this.root.add(this.lamps,this.circuits,this.rim,this.wave)}update(t,e,n,s,r){if(this.root.visible=t===2&&e!=="lobby",!this.root.visible)return;const a=e==="victory"&&!s,o=a?r?1:Math.min(1,Math.max(0,n)/.65):0,l=Math.floor(o*12);if(l!==this.lit){this.lit=l;for(let c=0;c<12;c++)this.color.setHex(c<l?9109476:2704470),this.lamps.setColorAt(c,this.color),this.circuits.setColorAt(c,this.color);this.lamps.instanceColor.needsUpdate=!0,this.circuits.instanceColor.needsUpdate=!0}this.rim.visible=a,this.wave.visible=a&&!r&&n<.65,this.wave.scale.setScalar(4.4*Math.max(.05,o)),this.wave.material.opacity=(1-o)*.5}}const Dn=5.5,Xh=180;function Sx(i,t,e){return e.filter(n=>n.hp>0&&Math.hypot(n.x-i,n.z-t)<Dn).length}const Mn={guardian:{label:"수호대원",icon:"R",color:"#ffd065",condition:"처음부터 사용 가능"},dodge:{label:"회피 달인",icon:"↝",color:"#94ffe3",condition:"원정 또는 재대결에서 퍼펙트 회피 3회 후 승리"},ace:{label:"무피격 에이스",icon:"♛",color:"#cbb4ff",condition:"원정 또는 재대결에서 피해 없이 승리"}};function br(i,t){return t==="guardian"?!0:[1,2].some(e=>{const n=i.chapterRecords[e],s=i.rematches[e];return i.chapterWins[e]>0&&(t==="dodge"?n.bestPerfect>=3:n.clean)||s.wins>0&&(t==="dodge"?s.bestPerfect>=3:s.clean)})}const wx=new zn(1,12,8),$h=new Map;function ya(i,t=1,e=ui){const n=i+t+e;let s=$h.get(n);return s||(s=new ee({color:i,transparent:t<1,opacity:t,depthWrite:t===1,side:e}),$h.set(n,s)),s}function Ex(){const i=new ut;i.name="projectile";for(const t of["rim","core","tail"]){const e=new at(wx,ya("#fff"));e.name=t,e.castShadow=!1,i.add(e)}return i}function Tx(i,t,e=!1){const n=i.children[0],s=i.children[1],r=i.children[2],a=!t.hostile&&t.stolen===!0,o=t.style==="arc";n.material=ya(t.hostile?"#722632":a?"#ffd45c":"#286a85",1,Ue),n.scale.set(t.hostile?.2:.17,t.hostile?.2:.17,t.hostile?.28:o?.45:.3),s.material=ya(t.hostile?"#ff7861":a?"#fffbd4":o?"#d7bfff":"#c1ffff"),s.scale.copy(n.scale).multiplyScalar(.72),r.material=ya(t.hostile?"#ff533f":a?"#58fff1":o?"#a78bf5":"#69def2",.6),r.position.z=a?-.56:-.35,r.scale.set(a?.11:.075,.06,a?.65:.4),r.visible=!e,i.position.set(t.x,1.15,t.z),i.rotation.y=Math.atan2(t.vx,t.vz)}class Ax{elapsed=0;inspect=0;equip(){this.inspect=1.1}update(t,e,n){if(!e||n)return this.inspect=0,{turn:0,gunTilt:0,shoulder:0,headTilt:0};this.elapsed+=t,this.inspect=Math.max(0,this.inspect-t);const s=this.elapsed%9,r=this.inspect>0?Math.sin(Math.PI*Math.min(1,(1.1-this.inspect)/1.1)):s>6.5&&s<8.3?Math.sin(Math.PI*(s-6.5)/1.8)*.45:0;return{turn:r*.3,gunTilt:r*.42,shoulder:-r*.22,headTilt:r*.11}}}class Rx{damage=0;hits=0;remaining=0;gap=0;seen=new Set;reset(){this.damage=0,this.hits=0,this.remaining=0,this.gap=0,this.seen.clear()}tick(t){this.remaining=Math.max(0,this.remaining-t),this.gap+=t}accept(t){let e=!1;for(const n of t)!n.counter||!n.damage||n.damage<=0||this.seen.has(n.id)||(this.seen.add(n.id),this.gap>.45&&(this.damage=0,this.hits=0),this.damage+=n.damage,this.hits++,this.gap=0,this.remaining=1.3,e=!0);return e}}function Os(i){const t=new Set,e=new Set;i.traverse(n=>{if(n instanceof at){for(const s of Array.isArray(n.material)?n.material:[n.material])s.userData.ownedByRig&&t.add(s);n.userData.ownedGeometry&&e.add(n.geometry)}}),i.removeFromParent(),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose())}function Cx(i){for(const t of i.values())Os(t);i.clear()}class Px{root=new ut;falls=[];constructor(t){this.root.name="defeated-enemy-effects",t.add(this.root)}capture(t){this.root.add(t),t.traverse(e=>{["warning","recovery-ring","guard-shield","storm-barrier","enemy-muzzle-flash","enemy-eye"].includes(e.name)&&(e.visible=!1),e instanceof at&&(e.castShadow=!1)}),this.falls.push({rig:t,age:0,y:t.position.y,scale:t.scale.clone(),zAngle:t.rotation.z,direction:t.position.x>=0?1:-1,duration:t.userData.enemyKind==="boss"?.85:.55})}update(t){for(const e of this.falls){e.age+=Math.max(0,t);const n=Math.min(1,e.age/e.duration),s=n<.22?1+n/.22*.18:Math.max(.02,1.18*(1-(n-.22)/.78));e.rig.position.y=e.y+Math.sin(n*Math.PI)*.5,e.rig.rotation.z=e.zAngle+e.direction*n*.9,e.rig.scale.copy(e.scale).multiplyScalar(s),n===1&&Os(e.rig)}this.falls=this.falls.filter(e=>e.age<e.duration)}clear(){this.falls.forEach(t=>Os(t.rig)),this.falls=[]}}function Dx(i,t,e,n){if(![i,t,e,n].every(Number.isFinite)||e<120||n<280||i>=16&&i<=e-16&&t>=100&&t<=n-110)return null;const s=28,r=e-28,a=Math.min(190,n*.4),o=n-150,l=e/2,c=(a+o)/2,h=i-l,d=t-c;if(h===0&&d===0)return null;const p=h>0?(r-l)/h:h<0?(s-l)/h:1/0,f=d>0?(o-c)/d:d<0?(a-c)/d:1/0,x=Math.min(p,f);return{x:l+h*x,y:c+d*x,angle:Math.atan2(d,h)*180/Math.PI}}class Lx{root;arrow;caption;lastCaption="";constructor(t){this.root=document.createElement("div"),this.root.className="enemy-compass",this.root.setAttribute("role","img"),this.root.innerHTML='<b aria-hidden="true">➤</b><small></small>',this.arrow=this.root.querySelector("b"),this.caption=this.root.querySelector("small"),t.append(this.root),this.root.hidden=!0}update(t,e=""){this.root.hidden=!t,t&&(this.root.style.transform=`translate(${Math.round(t.x)}px,${Math.round(t.y)}px) translate(-50%,-50%)`,this.arrow.style.transform=`rotate(${t.angle.toFixed(1)}deg)`,e!==this.lastCaption&&(this.lastCaption=e,this.caption.textContent=e,this.root.setAttribute("aria-label","화면 밖 적 방향 · "+e)))}}const Hn={radius:2.8,duration:3,pulse:.7,damage:32};class Ix{root=new ut;items=new Map;disk=new Fs(Hn.radius,64);rim=new $e(Hn.radius-.065,Hn.radius,64);fill=new ee({color:13588876,transparent:!0,opacity:.3,depthWrite:!1,side:ve,toneMapped:!1});edge=new ee({color:16753615,transparent:!0,opacity:.9,depthWrite:!1,side:ve,toneMapped:!1});constructor(t){t.add(this.root),this.root.name="storm-landing-fields"}update(t,e){this.root.visible=e;const n=new Set(t.map(s=>s.id));for(const[s,r]of this.items)n.has(s)||(this.root.remove(r),this.items.delete(s));for(const s of t){let r=this.items.get(s.id);if(!r){r=new ut;const a=new at(this.disk,this.fill),o=new at(this.rim,this.edge);a.rotation.x=o.rotation.x=-Math.PI/2,r.add(a,o),this.root.add(r),this.items.set(s.id,r)}r.position.set(s.x,.14,s.z),r.children[1].scale.setScalar(.97+.03*Math.cos(s.pulse/Hn.pulse*Math.PI*2))}}}const dn={guardian:{name:"햇살 수호대",icon:"☀",color:"#ffca4b",body:"#19b8ba",trim:"#e39c2f",cloth:"#243955",showroomDistance:14.5,chapter:0,unlock:"기본 외형"},crown:{name:"철갑왕의 전리품",icon:"♛",color:"#e9654e",body:"#813f65",trim:"#ffc65c",cloth:"#392d51",showroomDistance:16.8,chapter:1,unlock:"공중섬 첫 탈환"},tempest:{name:"폭풍 항해사",icon:"ϟ",color:"#8b9cff",body:"#365bba",trim:"#75fff0",cloth:"#1c305f",showroomDistance:15.4,chapter:2,unlock:"발전소 첫 탈환"}};function Sr(i,t){const e=dn[i].chapter;return e===0||t[e]>0}class Ux{current=null;originals=[];palette=new Map;crown=new ut;fins=new ut;constructor(t,e,n){t.traverse(o=>{o instanceof at&&(o.material instanceof pe||o.material instanceof Sl)&&this.originals.push({mesh:o,material:o.material,color:o.material.color.getHex()})}),e.add(this.crown,this.fins);const s=new pe({color:16762460,roughness:.6}),r=new pe({color:7733232,roughness:.4});for(const o of[-.4,0,.4]){const l=new at(new Ji(.13,o===0?.46:.3,4),s);l.position.set(o,2.9,-.04),l.castShadow=!0,this.crown.add(l)}const a=new at(new wn(.55,.09,8,32),s);a.rotation.x=-Math.PI/2,a.position.y=2.75,this.crown.add(a);for(const o of[-1,1]){const l=new at(new Ji(.17,.68,3),r);l.position.set(o*.78,2.65,.08),l.rotation.z=-o*.5,l.castShadow=!0,this.fins.add(l)}n.apply(this.crown),n.apply(this.fins)}update(t){if(this.current===t)return;this.current=t;const e=dn[t],n=new Map([[16763467,e.color],[16759862,e.color],[16235838,e.trim],[14916655,e.trim],[14191396,e.trim],[1685690,e.body],[1670032,e.body],[2373973,e.cloth]]);for(const s of this.originals){const r=n.get(s.color);if(!r)continue;if(t==="guardian"){s.mesh.material=s.material;continue}const a=t+":"+s.color;let o=this.palette.get(a);if(!o){const l=s.material.clone();l.color.set(r),o=l,this.palette.set(a,l)}s.mesh.material=o}this.crown.visible=t==="crown",this.fins.visible=t==="tempest"}}class Nx{root=new ut;coil;light=new ee({color:8323057,toneMapped:!1});released=0;kick=0;constructor(t){t.add(this.root),this.root.position.set(.08,-.32,-.36);const e=new Ui(1,1,1,2,.06),n=new pe({color:2510709,roughness:.5}),s=new pe({color:16754476,roughness:.55}),r=new at(e,n);r.scale.set(.48,.48,.5),r.castShadow=!0,this.root.add(r);for(const a of[-1,1]){const o=new at(e,s);o.position.set(a*.24,0,-.26),o.scale.set(.17,.45,.38),o.castShadow=!0,this.root.add(o);const l=new at(e,this.light);l.position.set(a*.24,0,-.47),l.scale.set(.16,.32,.055),this.root.add(l)}this.coil=new at(new wn(.19,.035,8,32),this.light),this.coil.position.z=-.29,this.root.add(this.coil)}update(t,e,n,s,r=!1){t.released!==this.released&&(t.released>this.released&&(this.kick=1),this.released=t.released),this.kick=Math.max(0,this.kick-n*5),this.root.position.z=-.36+this.kick*.2,this.coil.rotation.z=s*(t.active?8:1),this.coil.scale.setScalar(t.active?1.2+Math.sin(s*15)*.1:1),this.light.color.setHex(t.active?16772483:r?t.cooldown===0?13349375:7891113:e||t.cooldown===0?8323057:3443623)}}class Fx{root=new ut;ring;orbs;stamp=new _e;guide;target;constructor(t){t.add(this.root);const e=new ee({color:8715007,transparent:!0,opacity:.65,depthWrite:!1,side:ve,toneMapped:!1});this.ring=new at(new $e(un.radius-.055,un.radius,80),e),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.16,this.root.add(this.ring),this.orbs=new ji(new is(.16),new ee({color:16772483,toneMapped:!1}),un.capacity),this.orbs.instanceMatrix.setUsage($a),this.orbs.frustumCulled=!1,this.root.add(this.orbs),this.root.visible=!1;const n=new Se;n.setAttribute("position",new tn(new Float32Array(6),3)),this.guide=new xl(n,new hp({color:16772483,dashSize:.25,gapSize:.13,transparent:!0,opacity:.9,depthWrite:!1})),this.guide.frustumCulled=!1,this.target=new at(new $e(.18,.25,32),new ee({color:16772483,side:ve,depthWrite:!1})),this.target.rotation.x=-Math.PI/2,this.root.add(this.guide,this.target)}update(t,e,n,s,r,a){this.root.visible=r&&t.active,this.root.position.set(e,0,n),this.ring.scale.setScalar(.96+Math.sin(s*13)*.04),this.orbs.count=t.stored;for(let o=0;o<t.stored;o++){const l=s*4+o*Math.PI*2/Math.max(1,t.stored);this.stamp.position.set(Math.sin(l)*1.25,1.5+Math.sin(l*2)*.2,Math.cos(l)*1.25),this.stamp.rotation.set(s*3,l,s),this.stamp.updateMatrix(),this.orbs.setMatrixAt(o,this.stamp.matrix)}if(this.orbs.instanceMatrix.needsUpdate=!0,this.guide.visible=this.target.visible=!!a&&t.stored>0,a){const o=this.guide.geometry.getAttribute("position");o.setXYZ(0,0,.2,0),o.setXYZ(1,a.x-e,.2,a.z-n),o.needsUpdate=!0,this.guide.computeLineDistances(),this.target.position.set(a.x-e,.2,a.z-n)}}}class zx{root=new ut;background;rings=[];chapter=1;canvas;sparks;metal;trim;bay=new ut;gate=new ut;fans=[];constructor(t){const e=document.createElement("canvas");this.canvas=e,e.width=1024,e.height=1024;const n=e.getContext("2d"),s=n.createRadialGradient(550,410,20,510,480,790);s.addColorStop(0,"#3bb8ed"),s.addColorStop(.43,"#1479cc"),s.addColorStop(1,"#153b8e"),n.fillStyle=s,n.fillRect(0,0,1024,1024),n.strokeStyle="#ffffff0b",n.lineWidth=2;for(let d=-1024;d<2048;d+=110)n.beginPath(),n.moveTo(d,0),n.lineTo(d+600,1024),n.stroke();this.background=new Xf(e),this.background.colorSpace=Je,t.add(this.root),this.root.name="guardian-showroom";const r=new pe({color:2378644,roughness:.45,metalness:.25}),a=new pe({color:8712191,emissive:2333143,emissiveIntensity:.7});this.metal=r,this.trim=a;const o=new at(new fn(2.6,2.85,.35,64),r);o.position.y=-.22,o.receiveShadow=!0,this.root.add(o);for(const d of[2.35,2.7]){const p=new at(new wn(d,.025,8,64),a);p.rotation.x=-Math.PI/2,p.position.y=-.03,this.root.add(p),this.rings.push(p)}const l=new at(new Fs(2.6,64),new pe({color:4027583,roughness:.7}));l.rotation.x=-Math.PI/2,l.position.y=-.04,l.receiveShadow=!0,this.root.add(l);for(let d=0;d<8;d++){const p=d*Math.PI/4,f=new at(new Sn(.1,.025,.4),a);f.position.set(Math.sin(p)*2.45,0,Math.cos(p)*2.45),f.rotation.y=p,this.root.add(f)}this.buildBay();const c=new Float32Array(72);for(let d=0;d<24;d++)c[d*3]=Math.sin(d*2.399)*3.2,c[d*3+1]=.5+d%8*.72,c[d*3+2]=-1.4-Math.cos(d*2.399)*.45;const h=new Se;h.setAttribute("position",new tn(c,3)),this.sparks=new Wf(h,new Lu({color:10943231,size:.065,transparent:!0,opacity:.5,depthWrite:!1})),this.sparks.name="showroom-energy-dust",this.root.add(this.sparks),this.paint(1)}buildBay(){this.bay.name="guardian-launch-bay",this.root.add(this.bay);const t=new Sn(1,1,1),e=new pe({color:16436056,roughness:.65}),n=new pe({color:1391716,roughness:.8}),s=(o,l,c,h,d,p,f)=>{const x=new at(t,o);return x.position.set(l,c,h),x.scale.set(d,p,f),x.castShadow=!0,x.receiveShadow=!0,this.bay.add(x),x};s(n,0,-.5,-1,10,.4,7);for(const o of[-1,1]){s(this.metal,o*3.35,2.15,-3.5,.7,5,.8),s(e,o*3.35,4.55,-3.5,.95,.4,1),s(this.trim,o*3.35,2.4,-3.04,.11,3.6,.06),s(this.metal,o*3.8,.55,-.6,1.1,1.5,1.4),s(e,o*3.8,1.3,-.6,1.3,.18,1.5);for(let c=0;c<3;c++)s(this.trim,o*3.8,.3+c*.25,.13,.56,.06,.04);const l=new ut;l.position.set(o*3.35,4.1,-3.02),this.bay.add(l),this.fans.push(l);for(let c=0;c<3;c++){const h=new at(t,n);h.rotation.z=c*Math.PI*2/3,h.scale.set(.52,.12,.08),l.add(h)}for(let c=0;c<4;c++)s(e,o*(2.9+c*.3),-.28,1.8,.18,.025,.6)}s(this.metal,0,4.85,-3.5,7.5,.45,.8),s(e,0,5.12,-3.5,2,.12,.9),this.gate.position.set(0,2.55,-3.1),this.bay.add(this.gate);const r=new at(new wn(2.45,.055,8,64),this.trim);this.gate.add(r);const a=new at(new Fs(2.42,64),new ee({color:4832474,transparent:!0,opacity:.08,depthWrite:!1}));a.position.z=-.04,this.gate.add(a);for(let o=0;o<8;o++){const l=new at(t,e),c=o*Math.PI/4;l.position.set(Math.sin(c)*2.45,Math.cos(c)*2.45,.02),l.scale.set(.16,.3,.12),l.rotation.z=-c,this.gate.add(l)}}paint(t){const e=this.canvas.getContext("2d"),n=t===2,s=e.createRadialGradient(550,410,20,510,480,790);s.addColorStop(0,n?"#6580df":"#3bb8ed"),s.addColorStop(.43,n?"#414ba1":"#1479cc"),s.addColorStop(1,n?"#242458":"#153b8e"),e.fillStyle=s,e.fillRect(0,0,1024,1024),e.strokeStyle="#ffffff0b",e.lineWidth=2;for(let r=-1024;r<2048;r+=110)e.beginPath(),e.moveTo(r,0),e.lineTo(r+600,1024),e.stroke();e.strokeStyle=n?"#d5bdff12":"#b8ffff12",e.lineWidth=4;for(let r=50;r<1024;r+=210)for(let a=40+(r%420?90:0);a<1024;a+=210)e.beginPath(),e.moveTo(a,r-30),e.lineTo(a+31,r-17),e.lineTo(a+23,r+17),e.lineTo(a,r+32),e.lineTo(a-23,r+17),e.lineTo(a-31,r-17),e.closePath(),e.stroke(),e.beginPath(),e.moveTo(a+4,r-14),e.lineTo(a-9,r+3),e.lineTo(a+4,r+3),e.lineTo(a-4,r+18),e.stroke();this.background.needsUpdate=!0,this.metal.color.setHex(n?3750520:2378644),this.trim.color.setHex(n?12035583:8712191)}update(t,e,n=1,s=!1){this.root.visible=t,this.chapter!==n&&(this.chapter=n,this.paint(n)),this.rings[0].rotation.z=s?0:e*.08,this.gate.rotation.z=s?0:Math.sin(e*.15)*.06,this.fans.forEach(r=>r.rotation.z=s?0:e*.5),this.sparks.visible=!s,this.sparks.rotation.y=e*.055,this.sparks.position.y=Math.sin(e*.6)*.18}}const qh=["분산 편대","교차 편대","돌파 편대"];function Yu(i){return Math.max(0,Math.floor(Number.isFinite(i)?i:0))%3}function Yh(i,t,e,n,s){if(i==="boss")return{x:0,z:-2};if(s===1)return{x:(t%2?-1:1)*(3.2+t%3*.3),z:-3.8+Math.floor(t/2)*1.4};if(s===2)return{x:(t-(e-1)/2)*1.45,z:-1.8-t%2*1.6};const r=t*2.399+n*.7;return{x:Math.cos(r)*3.8,z:-2+Math.sin(r)*3.8*.65}}function Ox(i,t,e){return{move:t===i,fire:e===i}}function Bx(i,t){return t==="combat"&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i)}const Zh={projectile:{title:"탄막에 맞았습니다",tip:"엄폐물 뒤에서 탄을 막고, 사격 예고가 끝나기 전에 옆으로 이동해보세요."},rush:{title:"돌진에 맞았습니다",tip:"돌진 경로의 옆으로 회피하세요. 멈춘 경비병은 반격 피해를 더 받습니다."},slam:{title:"주변 강타에 맞았습니다",tip:"큰 원 밖으로 빠져나간 뒤, 강타가 끝난 보스에게 반격하세요."},melee:{title:"가까운 적의 공격에 맞았습니다",tip:"적을 가까이 모은 뒤 회피로 거리를 벌리세요. 폭발통이나 회피폭탄도 활용할 수 있습니다."},blink:{title:"순간이동 착지에 맞았습니다",tip:"착지 원이 나타나면 그곳에서 벗어나세요. 착지 뒤에도 전기장이 남습니다. 원 밖으로 빠져 반격하세요."},hazard:{title:"활성화된 바닥에 맞았습니다",tip:"황금색 바닥 예고가 켜지면 안전한 구역으로 이동하세요. 적도 위험 바닥에 피해를 받습니다."}};function kx(i){const t=Math.max(0,Math.min(1,i/.65)),e=1-(1-t)**3;return{tilt:e*Math.PI/2,lift:e*.84}}class Hx{root=new ut;display=new ut;weapons=new Map;box=new Ui(1,1,1,2,.08);cylinder=new fn(1,1,1,20);materials=new Map;constructor(t){this.root.name="lobby-weapon-workshop",t.add(this.root),this.part(this.root,this.box,2375520,[0,.43,0],[1.7,.86,1.55]),this.part(this.root,this.box,12828057,[0,.93,0],[1.85,.18,1.7]);for(const n of[-.62,.62])this.part(this.root,this.box,16762711,[n,.48,.79],[.15,.42,.06]);this.part(this.root,this.cylinder,3562361,[0,1.05,0],[.67,.08,.67]);const e=new at(new fn(.2,.62,1.25,24,1,!0),new ee({color:7340014,transparent:!0,opacity:.13,depthWrite:!1,blending:Pa,side:ve}));e.position.y=1.675,this.root.add(e),this.root.add(this.display),this.display.position.y=2.4;for(const n of["twin","pump","arc"]){const s=new ut;this.display.add(s),this.weapons.set(n,s),this.part(s,this.box,n==="arc"?7168672:n==="pump"?10905163:2912644,[0,0,0],[.58,.43,1.25]);const r=n==="pump"?[-.2,.2]:[0];for(const a of r){const o=this.part(s,this.cylinder,n==="arc"?11575790:16040531,[a,0,-.8],[.2,.6,.2]);o.rotation.x=Math.PI/2}if(this.part(s,this.box,15328449,[0,.28,-.15],[.36,.13,.7]),this.part(s,this.box,2703703,[0,-.29,.28],[.22,.35,.3]),n==="arc")for(const a of[-.4,-.65,-.9]){const o=this.part(s,this.cylinder,8251861,[0,0,a],[.24,.08,.24]);o.rotation.x=Math.PI/2}}this.root.traverse(n=>{n instanceof at&&(n.userData.lobbyArmory=!0)})}part(t,e,n,s,r){let a=this.materials.get(n);a||(a=new pe({color:n,roughness:.6,metalness:.12}),this.materials.set(n,a));const o=new at(e,a);return o.position.set(...s),o.scale.set(...r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o}update(t,e,n,s){this.root.visible=t,this.root.position.set(e?-2.9:4.7,0,e?-2.5:-3.5),this.display.rotation.y=Math.PI+.45+Math.sin(s*.35)*.3,this.display.position.y=2.4+Math.sin(s*1.4)*.04;for(const[r,a]of this.weapons)a.visible=r===n}}class Vx{root=document.createElement("div");text=document.createElement("span");track=document.createElement("i");bar=document.createElement("b");state="";width=-1;transform="";constructor(t){this.root.className="guard-label",this.track.append(this.bar),this.root.append(this.text,this.track),t.append(this.root)}update(t,e,n,s){const r=`translate(${t}px,${e}px) translate(-50%,-100%)`;r!==this.transform&&(this.root.style.transform=r,this.transform=r),n!==this.state&&(this.text.textContent=n,this.state=n);const a=Math.max(0,Math.min(1,s))*100;a!==this.width&&(this.bar.style.width=a+"%",this.width=a)}remove(){this.root.remove()}}class Gx{constructor(t){this.canvas=t}canvas;key="";start=0;publish=0;intervals=[];costs=[];sample(t,e,n,s,r){if(document.hidden)return;if(s!==this.key){this.key=s,this.start=t,this.publish=t,this.intervals=[],this.costs=[],delete this.canvas.dataset.frameStats;return}if(t-this.start<1e3||(this.intervals.length===0&&(this.publish=t),this.intervals.push(e),this.costs.push(n),t-this.publish<1e3||this.intervals.length<10))return;const a=[...this.intervals].sort((l,c)=>l-c),o=this.intervals.reduce((l,c)=>l+c,0)/this.intervals.length;this.canvas.dataset.frameStats=JSON.stringify({scene:s,frames:a.length,meanIntervalMs:+o.toFixed(2),p95IntervalMs:+a[Math.floor(a.length*.95)].toFixed(2),maxIntervalMs:+a[a.length-1].toFixed(2),meanSubmitMs:+(this.costs.reduce((l,c)=>l+c,0)/this.costs.length).toFixed(2),maxSubmitMs:+Math.max(...this.costs).toFixed(2),drawCalls:r.calls,triangles:r.triangles,visibility:document.visibilityState}),this.publish=t,this.intervals=[],this.costs=[]}}const si={fuse:.75,radius:2.4,damage:90};class Wx{constructor(t){this.scene=t}scene;objects=new Map;orbGeometry=new yl(.22);ringGeometry=new $e(.94,1,48);orbMaterial=new pe({color:16765274,emissive:12020498,emissiveIntensity:.4,roughness:.4});ringMaterial=new ee({color:8650724,transparent:!0,opacity:.5,depthWrite:!1,side:ve});update(t,e,n){const s=new Set(t.map(r=>r.id));for(const[r,a]of this.objects)s.has(r)||(this.scene.remove(a.group),this.objects.delete(r));for(const r of t){let a=this.objects.get(r.id);if(!a){const o=new ut,l=new at(this.orbGeometry,this.orbMaterial),c=new at(this.ringGeometry,this.ringMaterial);c.rotation.x=-Math.PI/2,c.scale.setScalar(si.radius),c.position.y=.11,o.add(l,c),this.scene.add(o),a={group:o,orb:l},this.objects.set(r.id,a)}a.group.visible=e,a.group.position.set(r.x,0,r.z),a.orb.position.y=.32+Math.sin(n*24)*.035,a.orb.scale.setScalar(1+(1-r.remaining/si.fuse)*.3),a.orb.rotation.y=n*3}}}const Kh=90;function Xx(i){if(!i)return[];const t=i.includes("reactor")||i==="storm-core"||i==="storm-escort",e=t?5:i==="storm-conduit"?4.5:2.5,n=t||i==="rush-garden"?1.4:i==="storm-foundry"?2.8:i==="storm-conduit"?2:2.5;return[-1,1].map((s,r)=>({id:r+1,x:e*s,z:n,width:t?1.3:1.6,depth:1.1,hp:Kh,maxHp:Kh}))}function Un(i,t,e,n=0){let s=null;for(const r of e){let a=0,o=1,l=!0;for(const[c,h,d,p]of[[i.x,t.x-i.x,r.x-r.width/2-n,r.x+r.width/2+n],[i.z,t.z-i.z,r.z-r.depth/2-n,r.z+r.depth/2+n]])if(Math.abs(h)<1e-10){if(c<d||c>p){l=!1;break}}else{const f=(d-c)/h,x=(p-c)/h;if(a=Math.max(a,Math.min(f,x)),o=Math.min(o,Math.max(f,x)),a>o){l=!1;break}}l&&(!s||a<s.t)&&(s={t:a,cover:r})}return s}function Mi(i,t,e){return Un(i,t,e,.08)===null}function Xc(i,t,e,n=0){const s=Un(i,t,e,n);if(!s)return{...t};const r=Math.hypot(t.x-i.x,t.z-i.z),a=Math.max(0,s.t-.003/Math.max(.001,r));return{x:i.x+(t.x-i.x)*a,z:i.z+(t.z-i.z)*a}}function Bn(i,t,e,n=.45){let s={...i};for(const a of e){const o=a.width/2+n,l=a.depth/2+n;Math.abs(s.x-a.x)<o&&Math.abs(s.z-a.z)<l&&(s=[{x:a.x-o-.004,z:s.z},{x:a.x+o+.004,z:s.z},{x:s.x,z:a.z-l-.004},{x:s.x,z:a.z+l+.004}].sort((h,d)=>Math.hypot(h.x-s.x,h.z-s.z)-Math.hypot(d.x-s.x,d.z-s.z))[0])}const r=Xc(s,{x:s.x+t.x-i.x,z:s.z},e,n);return Xc(r,{x:r.x,z:r.z+t.z-i.z},e,n)}const ar=new Map;function $x(i,t){const e=t+":"+i.map(a=>[a.x,a.z,a.width,a.depth].join(",")).join("|");let n=ar.get(e);if(n)return n;const s=[];for(const a of i){const o=a.width/2+t+.08,l=a.depth/2+t+.08;for(const[c,h]of[[-o,-l],[o,-l],[o,l],[-o,l]]){const d={x:a.x+c,z:a.z+h};Un(d,d,i,t)||s.push(d)}}const r=s.map((a,o)=>s.map((l,c)=>o===c?0:Un(a,l,i,t)?1/0:Math.hypot(l.x-a.x,l.z-a.z)));return n={nodes:s,edges:r},ar.size>=32&&ar.delete(ar.keys().next().value),ar.set(e,n),n}function qx(i,t,e,n,s=0){if(!Un(i,t,e,n))return t;const r=Bn(i,i,e,n);if(Math.hypot(r.x-i.x,r.z-i.z)>.001)return r;const a=Bn(t,t,e,n+.08),{nodes:o,edges:l}=$x(e,n),c=o.length,h=o.map(y=>Un(i,y,e,n)?1/0:Math.hypot(y.x-i.x,y.z-i.z)),d=o.map((y,v)=>v),p=new Set;let f=1/0,x=-1;for(let y=0;y<c;y++){let v=-1;for(let u=0;u<c;u++){const _=s%2?c-1-u:u;!p.has(_)&&(v<0||h[_]<h[v])&&(v=_)}if(v<0||!Number.isFinite(h[v])||h[v]>f)break;if(p.add(v),!Un(o[v],a,e,n)){const u=h[v]+Math.hypot(a.x-o[v].x,a.z-o[v].z);u<f&&(f=u,x=d[v])}for(let u=0;u<c;u++){const _=h[v]+l[v][u];!p.has(u)&&_<h[u]&&(h[u]=_,d[u]=d[v])}}return x>=0?o[x]:a}function Al(i,t,e,n){const s=t.x-i.x,r=t.z-i.z,a=i.x-e.x,o=i.z-e.z,l=a*a+o*o-n*n;if(l<=0)return 0;const c=s*s+r*r;if(c<1e-12)return null;const h=2*(a*s+o*r),d=h*h-4*c*l;if(d<0)return null;const p=(-h-Math.sqrt(d))/(2*c);return p>=0&&p<=1?p:null}function ba(i,t,e,n,s){return Al({x:i.x-e.x,z:i.z-e.z},{x:t.x-n.x,z:t.z-n.z},{x:0,z:0},s)}function wr(i,t,e,n){const s=Un(i,t,e,.12);let r=s?{t:s.t,kind:"cover",id:s.cover.id}:null;for(const a of n){if(a.hp<=0)continue;const o=Al(i,t,a,.55);o!==null&&(!r||o<r.t)&&(r={t:o,kind:"barrel",id:a.id})}return r}class Yx{pose=null;x=0;z=0;primed=!1;gait=0;wheel=0;index=0;recoil=0;strike=0;update(t,e,n){if(t<=0&&this.pose)return this.pose;this.primed||(this.x=e.x,this.z=e.z,this.index=e.attackIndex,this.primed=!0);const s=e.x-this.x,r=e.z-this.z,a=Math.hypot(s,r);this.x=e.x,this.z=e.z;const o=a<1?a:0;this.gait+=o*5,e.kind==="gunner"&&(this.wheel+=o/.34*(Math.sign(s*Math.sin(e.facing)-r*Math.cos(e.facing))||1)),this.recoil=Math.max(0,this.recoil-t*7),this.strike=Math.max(0,this.strike-t*5),e.attackIndex>this.index&&((e.attack==="fan"||e.attack==="ring")&&(this.recoil=1),(e.attack==="melee"||e.attack==="slam")&&(this.strike=1)),this.index=e.attackIndex;const l=(e.knockTime??0)>0?0:Math.min(1,o/Math.max(.001,t)/(e.kind==="boss"?.65:e.kind==="gunner"?1.1:1.5)),c=e.kind==="brute"||e.kind==="boss"&&e.bossStyle!=="storm"?Math.sin(this.gait)*(e.kind==="boss"?.25:.5)*l:0;return this.pose={stride:c,strike:this.strike,wheel:this.wheel,recoil:this.recoil,bob:e.bossStyle==="storm"?Math.sin(n*2+e.id)*.08:Math.abs(Math.sin(this.gait))*.045*l,lean:(e.knockTime??0)>0?-.16:e.rushTime>0?.16:e.tell>0&&e.attack==="rush"?.1:0,brace:e.tell>0?e.attack==="slam"?.12:e.attack==="rush"?.06:0:0},this.pose}}const oi={"battery-garden":{id:"battery-garden",room:1,title:"전력 정원",subtitle:"엄폐를 끼고 폭발통으로 포대를 무너뜨려!",icon:"ϟ",description:"포대가 넓게 배치된 정원. 모여 있는 폭발통을 터뜨리면 연쇄 폭발이 일어납니다.",advantage:"도탄과 연쇄 폭발이 유리",color:3776156,waves:[["gunner","gunner","mite","mite"],["gunner","gunner","gunner","mite","brute"],["gunner","gunner","mite","mite","mite"]],barrels:[[-3.8,-1],[-1.2,-1],[1.4,-1],[4,-1],[0,-3.6]]},"rush-garden":{id:"rush-garden",room:1,title:"돌진 온실",subtitle:"엄폐로 돌진을 끊고 빈틈에 반격해!",icon:"↝",description:"경비병들이 몰려드는 온실. 돌진 방향을 보고 옆으로 빠지며 가까이 모인 적을 쓸어버리세요.",advantage:"산탄과 방향 회피가 유리",color:6594120,waves:[["brute","brute","mite","mite"],["brute","brute","brute","mite","mite"],["brute","brute","gunner","mite","mite","mite"]],barrels:[[-5,2],[5,2],[0,-4.5]]},"reactor-direct":{id:"reactor-direct",room:2,title:"중앙 리액터",subtitle:"엄폐로 탄막을 막고 공격 뒤에 반격해!",icon:"♛",description:"철갑왕과 단독 결투. 탄막, 강타, 돌진을 피한 뒤 반격 기회를 노리세요.",advantage:"추가 경비병 없이 보스와 결투",color:8217789,waves:[["boss"]],barrels:[[-3.5,0],[3.5,-2],[0,-4]]},"reactor-overload":{id:"reactor-overload",room:2,title:"과부하 리액터",subtitle:"충전된 필살기로 호위대를 돌파해!",icon:"✦",description:"호위 포대가 함께 등장합니다. 입장할 때 필살기가 완전히 충전되어 시작합니다.",advantage:"필살기 100% 충전 · 호위대 추가",color:11824469,waves:[["boss","gunner","gunner","mite","mite"]],barrels:[[-3,-.5],[3,-.5],[-.5,-3],[2,-3]],startCharge:100},"storm-conduit":{id:"storm-conduit",chapter:2,room:1,title:"번개 회랑",hazard:"conduit",subtitle:"번개 바닥을 피하고 교차 사격을 끊어!",icon:"ϟ",description:"포대의 교차 사격과 세로·가로로 번갈아 충전되는 바닥을 피하세요. 번개에 적을 유인할 수도 있습니다.",advantage:"포대 · 예고되는 번개 레인",color:5799849,waves:[["gunner","gunner","mite","mite"],["gunner","gunner","brute","mite","mite"],["gunner","gunner","gunner","mite","mite"]],barrels:[[-3,-2],[0,-2],[3,-2],[-1,1],[2,1]]},"storm-foundry":{id:"storm-foundry",chapter:2,room:1,title:"바람 주조소",hazard:"furnace",subtitle:"주조 바닥의 열기를 피하고 경비병을 정리해!",icon:"↝",description:"돌진 경비병과 포대가 밀려오고 주조 바닥이 달아오릅니다. 예고된 열기에서 벗어나 적을 유인하세요.",advantage:"혼합 경비대 · 예고되는 열기",color:11040849,waves:[["brute","gunner","mite","mite"],["brute","brute","gunner","mite","mite"],["brute","gunner","gunner","mite","mite","mite"]],barrels:[[-4,1],[4,1],[0,-3.5]]},"storm-core":{id:"storm-core",chapter:2,room:2,title:"폭풍 제어실",subtitle:"착지 원과 남은 전기장을 피하며 반격!",icon:"◉",description:"스톰아이가 원형 탄막을 쏘고 당신의 위치를 노려 순간이동하고 전기장을 남깁니다. 착지 원과 남은 전기장을 피하고, 체력 절반에 펼치는 방패를 포획 반격으로 깨뜨리세요.",advantage:"원형 탄막 · 순간이동 보스",color:6707606,waves:[["boss"]],barrels:[[-3.5,0],[3.5,0],[0,-4]]},"storm-escort":{id:"storm-escort",chapter:2,room:2,title:"폭풍 과부하실",subtitle:"충전된 필살기로 폭풍 호위대를 정리해!",icon:"✦",description:"스톰아이와 호위 포대가 함께 등장합니다. 필살기 완충으로 시작합니다. 후반 폭풍 방패는 포획 반격으로 깨뜨리세요.",advantage:"시작 충전 100% · 호위대 추가",color:9527695,waves:[["boss","gunner","gunner","mite","mite"]],barrels:[[-3,-1],[3,-1],[0,-3]],startCharge:100}};function Zx(i,t=1){return Object.values(oi).filter(e=>e.room===i&&(e.chapter??1)===t)}function Kx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Se;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let p=0;p<i.length;++p){const f=i[p].index;for(let x=0;x<f.count;++x)d.push(f.getX(x)+h);h+=i[p].attributes.position.count}l.setIndex(d)}for(const h in r){const d=jh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<d;++p){const f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][p]);const x=jh(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function jh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new tn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let p=0,f=h.count;p<f;p++)for(let x=0;x<e;x++){const y=h.getComponent(p,x);o.setComponent(p+d,x,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const Na=new gl(new Uint8Array([74,150,220,255]),4,1,Dr);Na.minFilter=Na.magFilter=Xe;Na.generateMipmaps=!1;Na.needsUpdate=!0;new ee({color:1320766,side:Ue});(()=>{const i=[],t=[];for(let s=0;s<=16;s++){const r=s/16,a=Math.max(.006,Math.sin(Math.PI*r)**.78*.24*(1-r*.34)),o=Math.sin(r*Math.PI)*.27-r*r*.48;if(i.push(-a,o,r,0,o+a*.27,r,a,o,r),s<16){const l=s*3,c=l+3;t.push(l,c,l+1,l+1,c,c+1,l+1,c+1,l+2,l+2,c+1,c+2)}}const n=new Se;return n.setAttribute("position",new ie(i,3)),n.setIndex(t),n.computeVertexNormals(),n})();const Jh=(i,t)=>Math.sign(i)*Math.abs(i)**t;function jx(i,t={}){const e=t.sides??40,n=t.axis??"y",s=[],r=[],a=[];for(const l of i)for(let c=0;c<e;c++){const h=c/e*Math.PI*2,d=l.power??1,p=(l.x??0)+Jh(Math.cos(h),d)*l.width,f=(l.offset??0)+Jh(Math.sin(h),d)*l.depth,x=n==="y"?new U(p,l.at,f):new U(p,f,l.at);if(t.warp?.(x,h,l),s.push(x.x,x.y,x.z),t.color){const y=t.color(x,h,l);a.push(y.r,y.g,y.b)}}for(let l=0;l<i.length-1;l++)for(let c=0;c<e;c++){const h=l*e+c,d=l*e+(c+1)%e,p=h+e,f=d+e;n==="y"?r.push(h,p,d,d,p,f):r.push(h,d,p,d,f,p)}for(const[l,c]of[[0,!0],[i.length-1,!1]]){const h=i[l],d=s.length/3;if(n==="y"?s.push(h.x??0,h.at,h.offset??0):s.push(h.x??0,h.offset??0,h.at),t.color){const p=t.color(new U(...s.slice(-3)),0,h);a.push(p.r,p.g,p.b)}for(let p=0;p<e;p++){const f=l*e+p,x=l*e+(p+1)%e;c===(n==="y")?r.push(d,f,x):r.push(d,x,f)}}const o=new Se;return o.setAttribute("position",new ie(s,3)),a.length&&o.setAttribute("color",new ie(a,3)),o.setIndex(r),o.computeVertexNormals(),o.computeBoundingBox(),o.userData.private=!0,o.userData.authoredLoft=!0,o}function Fa(i,t){i.updateMatrixWorld(!0);const e=i.matrixWorld.clone().invert(),n=new Map;i.traverse(s=>{if(!(s instanceof at)||Array.isArray(s.material))return;let r=s;for(;r;){if(t.has(r))return;r=r.parent}let a=n.get(s.material);a||(a={meshes:[],geometry:[]},n.set(s.material,a)),a.meshes.push(s),a.geometry.push(s.geometry.clone().applyMatrix4(new le().multiplyMatrices(e,s.matrixWorld)))});for(const[s,r]of n){const a=r.geometry.length===1?r.geometry[0]:Kx(r.geometry);if(!a)throw new Error("Incompatible harbor geometry");r.meshes.forEach(l=>l.removeFromParent());const o=new at(a,s);o.name="harbor-static-batch",o.castShadow=!0,o.receiveShadow=!0,i.add(o),r.geometry.forEach(l=>{l!==a&&l.dispose()})}return n.size}function Jx(i){const t=new ut;t.name="cloud-harbor-scenery",i.add(t);const e=new Ui(1,1,1,3,.08),n=new fn(1,1,1,16),s=new zn(1,16,10),r=new Map;function a(C){let m=r.get(C);return m||(m=new pe({color:C,roughness:.87,metalness:.05}),r.set(C,m)),m}function o(C,m,T,D,E){const g=new at(m,a(T));return g.position.set(...D),g.scale.set(...E),g.castShadow=!0,g.receiveShadow=!0,C.add(g),g}const l=jx([{at:-4.5,width:1.4,depth:1.2,power:.65},{at:-3.5,width:4.8,depth:3.5,power:.55},{at:-2.1,width:7.5,depth:6.1,power:.45},{at:-.95,width:8.6,depth:7.3,power:.36}],{sides:32,warp(C,m){const T=1+.04*Math.sin(m*11+C.y*3);C.x*=T,C.z*=T},color(C,m){return new Gt(5005963).lerp(new Gt(11383230),.25+.25*Math.sin(m*3+C.y))}}),c=new pe({vertexColors:!0,roughness:1,flatShading:!0}),h=new at(l,c);h.castShadow=!0,t.add(h);for(const C of[-6.5,6.5])for(const m of[-5.5,5.5])o(t,e,8086657,[C,-1.35,m],[.65,1.5,.65]),o(t,e,14921048,[C,-.9,m],[.85,.2,.85]);const d=new pe({color:5498839,emissive:1345693,emissiveIntensity:.65,roughness:.3,metalness:.2});for(let C=0;C<7;C++){const m=C*2.399,T=new Ji(.45,1.7,5),D=new at(T,d);D.position.set(Math.cos(m)*5,-2.4-C%3*.3,Math.sin(m)*4.6),D.rotation.z=.18*Math.sin(m),t.add(D)}for(let C=0;C<18;C++){const m=C*2.399,T=11+C%3*1.4,D=Math.cos(m)*T,E=Math.sin(m)*T,g=new ut;g.position.set(D,-.55,E),t.add(g),o(g,s,7833760,[0,-.45,0],[1.8,.7,1.6]),o(g,n,5150077,[0,.22,0],[1.65,.25,1.45]);for(let R=0;R<4;R++){const L=R*1.57;o(g,s,R%2?6667929:3772289,[Math.cos(L)*1.35,.37,Math.sin(L)*1.15],[.38,.23,.35])}}const p=new ut;p.position.set(-10,-.12,0),t.add(p);for(let C=0;C<7;C++){o(p,e,C%2?12094039:14002540,[0,0,(C-3)*.46],[3.5,.2,.42]);for(const m of[-1.3,1.3])o(p,n,6773348,[m,.12,(C-3)*.46],[.04,.04,.04])}for(const C of[-1.65,1.65])o(p,e,3693427,[-.9,.6,C],[.25,1.3,.25]),o(p,e,16239226,[-.9,1.24,C],[.4,.1,.4]);const f=o(p,e,16109963,[-.9,1.5,-1.65],[.22,.4,.22]);f.material.emissive.setHex(16758350),f.material.emissiveIntensity=.5;const x=[];for(const C of[-8.9,8.9]){o(t,n,5337479,[C,2.3,-5.7],[.07,4.7,.07]);const m=o(t,e,C<0?16233815:6872015,[C+.48,3.65,-5.7],[.85,.5,.055]);x.push(m),o(t,e,15190404,[C,4.7,-5.7],[.16,.16,.16])}const y=new ut;y.name="harbor-reactor",y.position.set(0,1.9,-6.55),t.add(y);const v=new at(new is(.6,0),d);y.add(v);for(const C of[-.42,.42])o(y,n,15316572,[0,C,0],[.48,.12,.48]);const u=new at(new wn(.85,.045,8,48),new pe({color:9961452,emissive:2407335,emissiveIntensity:1}));u.rotation.x=Math.PI/2,y.add(u);const _=new ut;_.visible=!1,i.add(_);for(let C=0;C<36;C++){const m=o(_,e,[16768120,8847332,16777215][C%3],[0,0,0],[.075,.14,.045]);m.castShadow=!1}Fa(t,new Set([y,...x]));const S=new pp().load("./assets/cloud-harbor-panorama-v1.png");S.colorSpace=Je;const b=new at(new zn(58,48,24),new ee({map:S,side:Ue,depthWrite:!1,fog:!1,toneMapped:!1}));return b.name="painted-cloud-sky",b.rotation.y=.65,b.renderOrder=-10,i.add(b),{root:t,sky:b,update(C,m,T,D,E,g=!1){if(y.visible=m==="lobby"||m==="victory"&&!g,m==="victory"&&!g){const R=T>0?-4.5:4.5,L=D>0?-8.5:8.5,N=Math.hypot(R,L),B=Math.min(1,E/1.1),k=1-(1-B)**3,W=T+L/N*1.7,$=D-R/N*1.7;y.position.set(W*k,1.9+Math.sin(C*1.7)*.12+Math.sin(B*Math.PI)*.7,-6.55+($+6.55)*k)}else y.position.set(0,1.9+Math.sin(C*1.7)*.12,-6.55);v.rotation.y=C*.5,u.rotation.z=C*.6,_.visible=m==="victory"&&E<2.8,_.position.set(T,0,D),_.visible&&_.children.forEach((R,L)=>{const N=(E+L*.027)%1.8,B=L*2.399,k=1.2+L%5*.26;R.position.set(Math.cos(B)*k*N,2.1+2.2*N-2*N*N,Math.sin(B)*k*N),R.rotation.set(C*4+L,C*3+L,C*2)}),x.forEach((R,L)=>{R.rotation.y=Math.sin(C*1.8+L)*.12,R.rotation.z=Math.sin(C*1.4+L)*.025})}}}class Qx{roots=new Map;box=new Ui(1,1,1,2,.05);cylinder=new fn(1,1,1,32);materials=new Map;selected="";constructor(t){const e=u=>{const _=new ut,S=new ut,b=new ut;return _.name="stage-art-"+u,_.add(S,b),t.add(_),this.roots.set(u,_),{root:_,floor:S,props:b}},n=e("landing");for(let u=0;u<25;u++){const _=-6+u*.5;this.part(n.floor,this.box,u%2?11969145:13088141,[0,.068,_],[14.8,.012,.46],!0);for(const S of[-6.6,6.6])this.part(n.floor,this.cylinder,5989488,[S,.078,_],[.055,.008,.055],!0)}for(const u of[-1.1,1.1])for(let _=0;_<5;_++)this.part(n.floor,this.box,15721658,[u,.079,3.9-_*1.9],[.13,.008,.7],!0);for(const u of[-1,1]){this.part(n.props,this.box,5923452,[u*9.4,.45,3],[1.9,.9,1.6]),this.part(n.props,this.box,14792554,[u*9.4,.94,3],[2,.15,1.7]);for(const _ of[1.7,4.4])this.part(n.props,this.cylinder,4614008,[u*9.1,.6,_],[.25,1.2,.25]),this.part(n.props,this.cylinder,16044163,[u*9.1,1.24,_],[.32,.15,.32])}const s=e("garden");this.part(s.floor,this.box,7577476,[0,.068,0],[14.8,.012,12],!0);const r=new fn(1,1,1,7);for(let u=0;u<8;u++)for(const _ of[-1,1]){const S=u/7,b=-5.2+S*9.8,C=_*(.7+Math.sin(S*Math.PI)*2.1),m=this.part(s.floor,r,u%2?11189411:12962221,[C,.075,b],[.82,.035,.68],!0);m.rotation.y=u*.63+_*.18}const a=new Ji(1,1,4);for(const u of[-1,1])for(const _ of[-4,-1,2,4.7])for(let S=0;S<3;S++){const b=this.part(s.floor,a,S%2?5803638:6462333,[u*(6.25+S*.22),.12,_+S*.13],[.14,.2,.14],!0);b.rotation.z=u*.15}for(const u of[-1,1])for(const _ of[-4.7,3.3]){const S=u*9.3;this.part(s.props,this.box,5270384,[S,.3,_],[1.8,.6,2.2]),this.part(s.props,this.box,8428408,[S,.65,_],[1.65,.15,2.05]);for(let b=0;b<3;b++)this.part(s.props,this.cylinder,3970684,[S+(b-1)*.45,.97,_],[.13,.55,.13]),this.part(s.props,this.box,b%2?16764272:15381968,[S+(b-1)*.45,1.3,_],[.32,.25,.32])}const o=e("battery-garden"),l=oi["battery-garden"].barrels;for(const[u,_]of l){const S=new at(new $e(.5,.62,32),this.material(9422779,!0));S.rotation.x=-Math.PI/2,S.position.set(u,.108,_),o.floor.add(S)}for(let u=0;u<l.length;u++)for(let _=u+1;_<l.length;_++){const[S,b]=l[u],[C,m]=l[_],T=Math.hypot(C-S,m-b);if(T>=3.1)continue;const D=this.part(o.floor,this.box,3567476,[(S+C)/2,.104,(b+m)/2],[.13,.012,T],!0);D.rotation.y=Math.atan2(C-S,m-b)}for(const u of[-1,1]){const _=u*9.4;this.part(o.props,this.box,3234672,[_,1.25,-1],[1.8,2.5,2]);for(const S of[.18,2.4])this.part(o.props,this.box,15975262,[_,S,-1],[2,.2,2.2]);for(let S=0;S<3;S++)this.part(o.props,this.cylinder,10736843,[_+(S-1)*.46,1.32,.06],[.13,1.5,.13]),this.part(o.props,this.box,7780535,[_+(S-1)*.46,1.34,.22],[.1,.8,.07])}const c=e("rush-garden");for(const u of[-1,1])for(let _=0;_<8;_++){const S=-5.2+_*1.35,b=u*(3.5+Math.sin(_*.55)*.65);this.part(c.floor,this.box,_%2?11971200:13089174,[b,.105,S],[1.4,.025,1.2],!0)}const h=new Ml(new U(-8.4,.35,-7.8),new U(0,7,-7.8),new U(8.4,.35,-7.8)),d=new at(new bl(h,28,.13,6,!1),this.material(7511960));c.props.add(d);for(const u of[-1,1]){const _=u*9.3;for(const S of[-3,2.5]){this.part(c.props,this.box,5667179,[_,.55,S],[1.8,1.1,2.1]),this.part(c.props,this.box,13614726,[_,1.14,S],[2,.16,2.3]);for(let b=0;b<3;b++){const C=this.part(c.props,a,4890236,[_+(b-1)*.5,1.62,S],[.38,.9,.6]);C.rotation.z=(b-1)*.25,this.part(c.props,r,b%2?15706759:14866075,[_+(b-1)*.5,2.02,S],[.2,.16,.2])}}}const p=e("factory");for(let u=0;u<6;u++)for(let _=0;_<7;_++){const S=(_-3)*2.05,b=(u-2.5)*2.05;this.part(p.floor,this.box,(u+_)%2?6718097:6323598,[S,.07,b],[1.94,.015,1.94],!0);for(const C of[-.8,.8])this.part(p.floor,this.cylinder,10926269,[S+C,.082,b-.8],[.045,.008,.045],!0)}for(const u of[-1,1]){this.part(p.floor,this.box,14136689,[u*5.7,.084,0],[.13,.009,11.5],!0),this.part(p.props,this.box,3427177,[u*9.5,.55,0],[1.7,1.1,2.8]);for(const _ of[-.8,0,.8])this.part(p.props,this.cylinder,10339273,[u*9.5,1.21,_],[.24,.2,.24])}const f=e("storm-conduit");for(const u of[-3,0,3]){this.part(f.floor,this.box,4152688,[u,.094,0],[1.6,.012,11.8],!0);for(const _ of[-1,1])this.part(f.floor,this.box,9154995,[u+_*.7,.105,0],[.045,.009,11.6],!0);for(let _=0;_<12;_++)this.part(f.floor,this.box,7179676,[u,.106,-5.5+_],[1.45,.008,.035],!0)}this.part(f.floor,this.box,5405576,[0,.108,1],[14.6,.008,1.5],!0);for(const u of[-1,1]){const _=u*9.5;this.part(f.props,this.box,2902896,[_,1.3,-3.2],[1.8,2.6,1.6]);for(const S of[.2,2.4])this.part(f.props,this.box,11588048,[_,S,-3.2],[2,.18,1.8]);for(const S of[-3.7,-3.2,-2.7])this.part(f.props,this.cylinder,7645865,[_,1.3,S],[.16,1.8,.16])}const x=e("storm-foundry");for(const[u,_]of[[2.7,6],[-1.5,8]]){this.part(x.floor,this.box,5133150,[0,.096,u],[_,.012,2.3],!0);for(let S=0;S<18;S++)this.part(x.floor,this.box,8884357,[-_/2+.18+S*(_-.36)/17,.108,u],[.055,.008,2.1],!0);for(const S of[-1,1])this.part(x.floor,this.box,12101241,[0,.109,u+S*1.1],[_,.007,.06],!0)}for(const u of[-1,1]){const _=u*9.5;this.part(x.props,this.cylinder,5919079,[_,1,-2],[.9,2,.9]),this.part(x.props,this.cylinder,13937258,[_,2.05,-2],[1,.2,1]);for(const S of[.5,1.2])this.part(x.props,this.box,10453616,[_,S,-1.12],[.65,.25,.06]);this.part(x.props,this.box,6640990,[_,.65,2.4],[1.8,1.3,2]),this.part(x.props,this.box,12626559,[_,1.4,2.4],[2,.16,2.2])}const y=e("reactor");this.part(y.floor,this.cylinder,4412782,[0,.018,-2],[4.45,.1,4.45],!0);const v=new at(new $e(4.08,4.4,64),this.material(11384230,!0));v.rotation.x=-Math.PI/2,v.position.set(0,.082,-2),y.floor.add(v);for(let u=0;u<12;u++){const _=u*Math.PI/6,S=this.part(y.floor,this.box,u%3?7902629:14070383,[Math.sin(_)*2.75,.083,-2+Math.cos(_)*2.75],[.13,.008,1.9],!0);S.rotation.y=_,this.part(y.floor,this.cylinder,14271634,[Math.sin(_)*3.85,.086,-2+Math.cos(_)*3.85],[.1,.008,.1],!0)}for(const u of[-1,1])this.part(y.props,this.cylinder,3883369,[u*9.3,1.1,0],[.6,2.2,.6]),this.part(y.props,this.cylinder,15517036,[u*9.3,2.3,0],[.8,.2,.8]);for(const u of[n,s,p,y,o,c,f,x])Fa(u.floor,new Set),Fa(u.props,new Set),u.floor.traverse(_=>{_ instanceof at&&(_.castShadow=!1,_.receiveShadow=!0)}),u.root.visible=!1}material(t,e=!1){const n=t+":"+e;let s=this.materials.get(n);return s||(s=new pe({color:t,roughness:.88,metalness:.05,depthWrite:!e}),this.materials.set(n,s)),s}part(t,e,n,s,r,a=!1){const o=new at(e,this.material(n,a));return o.position.set(...s),o.scale.set(...r),o.castShadow=!a,o.receiveShadow=!0,t.add(o),o}update(t,e,n,s){const r=n?"showroom":e===2?"reactor":t===2?"factory":e===1?"garden":"landing",a=!n&&t===1&&e===1&&(s==="battery-garden"||s==="rush-garden")||!n&&t===2&&e===1&&(s==="storm-conduit"||s==="storm-foundry")?s:"",o=r+":"+a;if(o!==this.selected){this.selected=o;for(const[l,c]of this.roots)c.visible=l===r||l===a}}}const Go=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Zu(i,t=!1){const e=Math.max(0,Math.min(1,1-i/1.7)),n=i>0;return{active:n,progress:e,blend:n?Go(0,.18,e)*(1-Go(.65,1,e)):0,height:n?(t?1.2:-1.6)*(1-Go(0,.4,e)):0,pulse:n?Math.sin(e*Math.PI):0}}const za=[{id:"clear",icon:"✦",title:"탈환",condition:"원정 클리어"},{id:"dodge",icon:"↝",title:"회피 달인",condition:"한 원정에서 퍼펙트 회피 3회 후 클리어"},{id:"clean",icon:"♛",title:"무피격",condition:"피해 없이 원정 클리어"}];function Oa(i,t){const e=i.chapterRecords[t],n=i.chapterWins[t]>0;return[n,n&&e.bestPerfect>=3,n&&e.clean]}function Rl(i,t){const e=Number.isFinite(t.seconds)&&t.seconds>0&&Number.isFinite(t.damageTaken)&&t.damageTaken>=0&&Number.isFinite(t.perfectDodges)&&t.perfectDodges>=0;return[i,i&&e&&t.perfectDodges>=3,i&&e&&t.damageTaken===0]}class t_{readyGuide;root=new ut;elapsed=2;stamp=new _e;wave;rim;column;sparks;gold=new ee({color:16767078,transparent:!0,opacity:1,depthWrite:!1,side:ve,toneMapped:!1});edge=new ee({color:16772523,transparent:!0,opacity:1,depthWrite:!1,side:ve,toneMapped:!1});beam=new ee({color:10485744,transparent:!0,opacity:.25,depthWrite:!1,blending:Pa,side:ve});constructor(t){this.readyGuide=new at(new $e(Dn-.035,Dn,96),new ee({color:16767858,transparent:!0,opacity:.42,depthWrite:!1,side:ve,toneMapped:!1})),this.readyGuide.name="overdrive-ready-range",this.readyGuide.rotation.x=-Math.PI/2,this.readyGuide.position.y=.105,this.readyGuide.visible=!1,t.add(this.readyGuide),this.root.name="overdrive-effect",this.root.visible=!1,t.add(this.root),this.wave=new at(new $e(.9,1,64),this.gold),this.wave.rotation.x=-Math.PI/2,this.wave.position.y=.12,this.rim=new at(new $e(Dn-.12,Dn,80),this.edge),this.rim.rotation.x=-Math.PI/2,this.rim.position.y=.13,this.column=new at(new fn(.2,.75,4,24,1,!0),this.beam),this.column.position.y=2,this.sparks=new ji(new is(.12),this.gold,24),this.sparks.instanceMatrix.setUsage($a),this.sparks.frustumCulled=!1,this.root.add(this.wave,this.rim,this.column,this.sparks),this.root.traverse(e=>{e instanceof at&&(e.castShadow=!1)})}updateReady(t,e,n){this.readyGuide.visible=n,this.readyGuide.position.set(t,.105,e)}trigger(t,e){this.elapsed=0,this.root.position.set(t,0,e),this.root.visible=!0}reset(){this.elapsed=2,this.root.visible=!1,this.readyGuide.visible=!1}get kick(){return this.elapsed<.35?Math.sin(this.elapsed/.35*Math.PI):0}update(t){if(this.elapsed+=Math.max(0,t),this.elapsed>=.85){this.root.visible=!1;return}const e=this.elapsed;this.root.visible=!0;const n=Dn*Math.min(1,.12+e/.28);this.wave.scale.setScalar(n),this.gold.opacity=Math.max(0,1-e/.85),this.edge.opacity=Math.max(0,.8-e),this.beam.opacity=Math.max(0,.38-e*.7),this.column.scale.set(1+e*2,1+e*.5,1+e*2);for(let s=0;s<24;s++){const r=s*Math.PI*2/24,a=n*(.5+s%3*.16),o=Math.max(.12,(1.5+s%4*.35)*Math.sin(Math.min(1,e/.85)*Math.PI));this.stamp.position.set(Math.cos(r)*a,o,Math.sin(r)*a),this.stamp.rotation.set(e*4,s,e*7),this.stamp.scale.setScalar(1-e*.6),this.stamp.updateMatrix(),this.sparks.setMatrixAt(s,this.stamp.matrix)}this.sparks.instanceMatrix.needsUpdate=!0}}class e_{elapsed=0;active=!1;begin(){return this.active?!1:(this.elapsed=0,this.active=!0,!0)}cancel(){this.active=!1,this.elapsed=0}advance(t){return!this.active||(this.elapsed+=Math.max(0,t),this.elapsed<2.4)?!1:(this.active=!1,!0)}skip(){return this.active?(this.active=!1,!0):!1}get progress(){return Math.min(1,this.elapsed/2.4)}get travel(){return Math.max(0,Math.min(1,(this.elapsed-.55)/1.5))}}function Ba(i,t){const e=Object.values(oi).filter(l=>(l.chapter??1)===t),n=e.filter(l=>i.clearedRoutes.includes(l.id)).length,s=e.find(l=>!i.clearedRoutes.includes(l.id)),r=i.chapterWins[t]===0,a=Oa(i,t),o=za.find((l,c)=>!a[c]);return{routes:e,recovered:n,total:e.length,next:s?.id,headline:r?t===1?"첫 리액터를 탈환하세요":"폭풍 발전소를 탈환하세요":s?`${s.title}을 탈환하세요`:o?`${o.title} 훈장에 도전하세요`:"수호대 에이스 · 훈장 완성",reward:r?t===1?"펌프 샷건 · 전리품 외형 · 다음 챕터":"아크 관통포 · 폭풍 항해사 외형":s?"새 경로를 원정 지도에 기록":o?o.condition:"최단 탈환 기록에 도전",rewardIcon:r?t===1?"⋔":"ϟ":"✦"}}function n_(i,t){return i.chapterWins[t]===0||Ba(i,t).next?"mission-map":"records"}function i_(i,t,e){let n,s=-1,r=1/0;for(const a of t){if(a.hp<=0||Un(i,a,e,.12))continue;const o=(a.barrier??0)>0?1:0,l=Math.hypot(a.x-i.x,a.z-i.z);(o>s||o===s&&l<r)&&(n=a,s=o,r=l)}return n}const Sa={hp:120,barrier:60,damage:10,offsets:[-.22,-.11,0,.11,.22]};function s_(i,t,e,n){return i===1&&t===1&&n[e]==="gunner"&&e===n.indexOf("gunner")}class r_{capacity=6;charge=0;activations=0;confirmed=new Set;get ready(){return this.charge>=this.capacity}confirm(t){return t===void 0||this.confirmed.has(t)||(this.confirmed.add(t),this.ready)?!1:(this.charge++,this.ready)}release(t){return t<=0||!this.ready?!1:(this.charge=0,this.activations++,!0)}reset(){this.charge=0,this.activations=0,this.confirmed.clear()}}const a_=195;function o_(i,t){return t?i:Math.max(1,Math.round(i*.2))}function wa(i,t,e=t){let n=0,s=1;for(const[r,a,o,l]of[[t.x,e.x-t.x,i.x-i.width/2,i.x+i.width/2],[t.z,e.z-t.z,i.z-i.depth/2,i.z+i.depth/2]])if(Math.abs(a)<1e-10){if(r<o||r>l)return!1}else{const c=(o-r)/a,h=(l-r)/a;if(n=Math.max(n,Math.min(c,h)),s=Math.min(s,Math.max(c,h)),n>s)return!1}return!0}class c_{live=[];kind=null;next=1.6;sequence=0;serial=0;reset(t){this.kind=t,this.live=[],this.next=1.6,this.sequence=0,this.serial=0}tick(t){if(!this.kind)return;for(const s of this.live)s.remaining-=t,s.remaining<=0&&s.phase==="warning"&&(s.phase="active",s.remaining+=.8,s.total=.8);if(this.live=this.live.filter(s=>s.remaining>0),this.next-=t,this.next>0)return;this.next=4.6;const e=this.kind==="conduit"?[[[0,0,1.8,12]],[[-3,0,1.6,12],[3,0,1.6,12]],[[0,1,14.8,1.8]]]:[[[0,2.7,6,2.4]],[[0,-1.5,8,2.4]],[[0,0,2.2,12]]],n=e[this.sequence++%e.length];this.live=n.map(([s,r,a,o])=>({id:++this.serial,x:s,z:r,width:a,depth:o,phase:"warning",remaining:1.1,total:1.1,hits:new Set}))}}const Be={siege:{windup:1.05,radius:2.2,damage:32,recovery:1.25},ring:{windup:.9,radius:0,damage:14,recovery:.9},blink:{windup:1.1,radius:2.8,damage:26,recovery:1.2},melee:{windup:.5,radius:2.3,damage:12,recovery:.65},fan:{windup:.8,radius:0,damage:18,recovery:.9},slam:{windup:1.05,radius:3.8,damage:32,recovery:1.25},rush:{windup:.95,radius:1.95,damage:28,recovery:1.05}};function Qh(i,t,e=!1,n=!1){return i==="boss"&&e?["ring","blink","fan","blink"][t%4]:i==="boss"&&n?["fan","rush","ring","slam"][t%4]:i==="boss"?["fan","slam","rush"][t%3]:i==="gunner"?"fan":i==="brute"?"rush":"melee"}function l_(i,t){const e=i?t?11:7:3,n=i?.19:.13;return Array.from({length:e},(s,r)=>(r-(e-1)/2)*n)}function h_(i,t,e,n){const s=n?6:4.8,r=Math.sin(e),a=-Math.cos(e),o=r>0?(7.4-i)/r:r<0?(-7.4-i)/r:1/0,l=a>0?(6-t)/a:a<0?(-6-t)/a:1/0,c=Math.max(0,Math.min(s,o,l));return{x:i+r*c,z:t+a*c,distance:c}}function u_(i,t,e,n,s,r){const a=s-e,o=r-n,l=Math.max(0,Math.min(1,((i-e)*a+(t-n)*o)/(a*a+o*o||1)));return Math.hypot(i-e-a*l,t-n-o*l)}function d_(i,t,e){return i.tell>0||i.rushTime>0?i.aim:Math.atan2(t-i.x,-(e-i.z))}function f_(i,t,e){const n=Math.sin(e),s=-Math.cos(e),r=n>0?(8-i)/n:n<0?(-8-i)/n:1/0,a=s>0?(7-t)/s:s<0?(-7-t)/s:1/0;return Math.max(0,Math.min(21,r,a))}function $c(i){if(i.kind==="gunner"&&i.overcharge)return[...Sa.offsets];if(i.attack==="ring"){const t=i.hp<i.maxHp/2?18:14;return Array.from({length:t},(e,n)=>n*Math.PI*2/t)}return l_(i.kind==="boss",i.hp<i.maxHp/2)}function p_(i,t){const e=i.blinkX-i.x,n=i.blinkZ-i.z;return{x:Math.cos(t)*e-Math.sin(t)*n,z:Math.sin(t)*e+Math.cos(t)*n}}function bs(i,t,e,n,s){return u_(0,0,i.x-e.x,i.z-e.z,t.x-n.x,t.z-n.z)<s}function m_(i,t,e){const n=t.x-i.x,s=t.z-i.z,r=n*n+s*s;if(r<1e-10)return{...i};let a=1;for(const o of e){const l=i.x-o.x,c=i.z-o.z,h=l*l+c*c-o.radius**2;if(h<=0){a=0;break}const d=2*(l*n+c*s),p=d*d-4*r*h;if(p<0)continue;const f=(-d-Math.sqrt(p))/(2*r);f>=0&&f<a&&(a=Math.max(0,f-.012/Math.sqrt(r)))}return{x:i.x+n*a,z:i.z+s*a}}function Er(i){return(i.kind==="brute"||i.kind==="boss"&&i.bossStyle==="crown")&&i.recovery<=0&&i.rushTime<=0}function g_(i,t,e,n,s=!1){if(i.kind!=="brute"&&!(i.kind==="boss"&&i.bossStyle==="crown"))return{damage:n,blocked:!1};if(s&&i.kind==="boss")return{damage:n,blocked:!1};if(i.recovery>0)return{damage:n,blocked:!1};const r=Math.hypot(t,e),a=r>0?Math.sin(i.facing)*(-t/r)-Math.cos(i.facing)*(-e/r):0,o=Er(i)&&a>.5;return{damage:o?Math.max(1,Math.round(n*(i.kind==="boss"?.25:.4))):n,blocked:o}}const Bs={1:{title:"폭주하는 공중섬",mission:"리액터<br>탈환 작전",boss:"철갑왕 · 아이언 크라운",description:"무기를 진화시켜 철갑왕에게 도전하세요."},2:{title:"폭풍 발전소",mission:"폭풍의 눈을<br>잠재워라",boss:"폭풍의 눈 · 스톰아이",description:"탄막을 모아 폭풍 방패를 깨고 스톰아이를 멈추세요."}},v_={title:"바람 관문",subtitle:"포대 사이를 돌파해 발전소로!",color:5405355,waves:[["mite","mite","gunner"],["gunner","gunner","mite","mite"],["brute","gunner","gunner","mite","mite"]]};function Ss(i,t){return i===1||t>0}const ua=3.78;function Wo(i,t,e,n,s=[]){const r=e>0?(7.4-i)/e:e<0?(-7.4-i)/e:1/0,a=n>0?(6-t)/n:n<0?(-6-t)/n:1/0,o=Un({x:i,z:t},{x:i+e*ua,z:t+n*ua},s,.45);return Math.max(0,Math.min(ua,r,a,o?o.t*ua:1/0))}function x_(i,t,e,n,s,r=[]){const a=Math.hypot(n,s);if(a>.12)return{x:n/a,z:s/a};const o={x:-Math.sin(e),z:Math.cos(e)};if(Wo(i,t,o.x,o.z,r)>=2.2)return o;const l={x:-Math.cos(e),z:-Math.sin(e)},c={x:Math.cos(e),z:Math.sin(e)};return Wo(i,t,l.x,l.z,r)>=Wo(i,t,c.x,c.z,r)?l:c}const __=[{title:"햇살 부두",subtitle:"포획 버튼으로 적탄을 모아 반격!",color:2404267,waves:[["mite","gunner","mite"],["mite","gunner","mite","mite"],["gunner","mite","brute","mite","mite"]]},{title:"잊힌 정원",subtitle:"포대를 피하고 무기를 진화시켜!",color:5414759,waves:[["gunner","mite","brute","mite"],["gunner","gunner","mite","brute","mite"],["brute","gunner","gunner","mite","mite","mite"]]},{title:"리액터 심장부",subtitle:"철갑왕의 공격을 피하고 반격!",color:8217789,waves:[["boss"]]}];class M_{ammo=new rx;resonance=new r_;rematch=!1;magnet=new ox;hazards=new c_;formation=0;weapon="twin";chapter=1;phase="lobby";beforePause="combat";room=0;wave=0;clock=0;kills=0;hp=150;maxHp=150;x=0;z=5;angle=0;charge=0;dash=0;invuln=0;recoil=0;intro=0;spawnIn=0;cooldown=0;damageTaken=0;lastDamageCause="melee";perfectDodges=0;boost=0;stormPatches=[];bombs=[];covers=[];cells=[];cellsCollected=0;enemies=[];shots=[];bursts=[];barrels=[];evolutions=[];routeHistory=[];reflectedShots=0;secured=!1;reflectPending=!1;serial=0;sequence=0;dashX=0;dashZ=-1;dashTime=0;perfectWindow=0;perfectAwarded=!1;ghostX=0;ghostZ=0;get movementSolids(){return[...this.covers,...this.barrels.filter(t=>t.hp>0).map(t=>({id:-t.id,x:t.x,z:t.z,width:.86,depth:.86}))]}get routeOptions(){return Zx(this.room+1,this.chapter)}get encounter(){return this.rematch?oi[this.chapter===2?"storm-core":"reactor-direct"]:this.room>0&&this.routeHistory[this.room-1]?oi[this.routeHistory[this.room-1]]:this.chapter===2&&this.room===0?v_:__[this.room]}magnetTarget(t){return t??i_(this,this.enemies,this.covers)}get incomingWave(){if(this.phase!=="combat"&&this.phase!=="paused"||this.enemies.some(n=>n.hp>0)||this.spawnIn<.35||this.wave+1>=this.encounter.waves.length)return[];const t=this.encounter.waves[this.wave+1],e=this.movementSolids;return t.map((n,s)=>{const r=Yh(n,s,t.length,this.wave+1,this.formation);return{kind:n,...Bn(r,r,e,n==="boss"?1.4:.65)}})}get securedClear(){return this.secured}get remaining(){return this.enemies.length}get boss(){return this.enemies.find(t=>t.kind==="boss")}start(t=1,e="twin",n=0,s=!1,r="counter"){this.rematch=s,this.resonance.reset(),this.magnet.reset(),this.formation=n,this.weapon=e,this.chapter=t,this.serial=0,this.sequence=0,this.room=s?2:0,this.kills=0,this.reflectedShots=0,this.reflectPending=!1,this.damageTaken=0,this.lastDamageCause="melee",this.cellsCollected=0,this.perfectDodges=0,this.clock=0,this.evolutions=s?yx(r):[],this.hp=this.maxHp=this.evolutions.includes("vampire")?180:150,this.charge=s?100:0,this.routeHistory=[],this.enterRoom()}enterRoom(){this.ammo.reset(this.weapon),this.secured=!1,this.magnet.reset(!0),this.reflectPending=!1,this.perfectWindow=0,this.perfectAwarded=!1,this.boost=0,this.dashTime=0,this.recoil=0,this.phase="combat",this.wave=0,this.x=0,this.z=5,this.dash=0,this.invuln=1.2,this.intro=1.7,this.spawnIn=0,this.stormPatches=[],this.bombs=[],this.cells=[],this.shots=[],this.enemies=[],this.bursts=[],this.cooldown=0;const t=this.routeHistory[this.room-1]?oi[this.routeHistory[this.room-1]]:null;this.covers=Xx(t?.id),this.hazards.reset(t?.hazard??null),this.barrels=(t?.barrels??[[-3.5,0],[3.5,-2],[0,-4]]).map(([e,n])=>({id:++this.serial,x:e,z:n,hp:22})),t?.startCharge!==void 0&&(this.charge=t.startCharge),this.spawnWave()}spawnWave(){const t=this.encounter.waves[this.wave];t.forEach((n,s)=>{const r=Yh(n,s,t.length,this.wave,this.formation),a=s_(this.room,this.wave,s,t),o=a?Sa.hp:n==="brute"?150:n==="gunner"?70:36,l=a?Sa.barrier:n==="gunner"&&this.room===0&&this.wave===0?100:void 0;this.enemies.push({id:++this.serial,kind:n,x:r.x,z:r.z,hp:n==="boss"?this.rematch?this.chapter===2?3200:3400:this.chapter===2?2200:2400:o,maxHp:n==="boss"?this.rematch?this.chapter===2?3200:3400:this.chapter===2?2200:2400:o,tell:0,cooldown:n==="boss"?1.3:n==="gunner"?.08+s*.06:n==="brute"?.15+s*.08:.5+s*.1,aim:0,flash:0,attack:Qh(n,0,this.chapter===2),attackIndex:0,recovery:0,rushTime:0,rushDistance:0,rushHit:!1,overcharge:a,barrier:l,barrierMax:l,bossStyle:n==="boss"&&this.chapter===2?"storm":"crown",blinkX:0,blinkZ:0,facing:0,shieldFlash:0})});const e=this.movementSolids;for(const n of this.enemies){const s=Bn(n,n,e,n.kind==="boss"?1.4:.65);n.x=s.x,n.z=s.z,n.kind!=="boss"&&this.fx(n.x,n.z,"#b99cff",.85,"적 등장")}}choose(t){this.phase!=="upgrade"||this.evolutions.includes(t)||(this.evolutions.push(t),t==="vampire"&&(this.maxHp+=30),this.hp=Math.min(this.maxHp,this.hp+40),this.phase="route")}selectRoute(t){return this.phase!=="route"||!this.routeOptions.some(e=>e.id===t)?!1:(this.routeHistory.push(t),this.room++,this.enterRoom(),!0)}skipBossIntro(){return this.phase!=="combat"||this.room!==2||this.intro<=0?!1:(this.intro=0,this.invuln=Math.max(this.invuln,.8),!0)}pause(){this.phase==="combat"&&(this.beforePause=this.phase,this.phase="paused")}resume(){this.phase==="paused"&&(this.phase=this.beforePause)}home(){this.resonance.reset(),this.secured=!1,this.rematch=!1,this.magnet.reset(),this.covers=[],this.phase="lobby",this.room=0,this.stormPatches=[],this.bombs=[],this.cells=[],this.shots=[],this.enemies=[],this.bursts=[],this.barrels=[],this.hazards.reset(null)}fx(t,e,n,s,r,a=!1,o,l){this.bursts.push({id:++this.serial,x:t,z:e,color:n,size:s,life:.55,text:r,counter:a,damage:o,target:l})}hurt(t,e,n=!1,s=!1,r){if(t.hp<=0)return;if((t.barrier??0)>0){const o=Math.min(t.barrier,o_(e,s));t.barrier=Math.max(0,t.barrier-o),t.shieldFlash=.16,this.charge=Math.min(100,this.charge+o*.04),this.fx(t.x,t.z,"#b8a4ff",.5,"방패 −"+Math.round(o),s,o,t.id),t.barrier===0&&(t.tell=0,t.recovery=1.8,s&&this.counterPush(t,r),this.fx(t.x,t.z,"#83fff0",3,"방패 파괴!"));return}(t.kind==="boss"||t.kind==="brute")&&t.recovery>0&&(e*=1.5),this.charge=Math.min(100,this.charge+Math.min(t.hp,e)*.04);const a=Math.min(t.hp,e);if(t.hp-=e,t.flash=.14,t.kind==="boss"&&t.bossStyle!=="storm"&&t.hp>0&&t.hp<=t.maxHp*.5&&!t.overloaded&&(t.overloaded=!0,this.fx(t.x,t.z,"#ffba58",3,"철갑왕 과부하 · 원형 탄막!")),t.kind==="boss"&&t.bossStyle==="storm"&&t.hp>0&&t.hp<=t.maxHp*.5&&!t.barrierUsed&&(t.barrierUsed=!0,t.barrier=a_,this.fx(t.x,t.z,"#b99cff",3,"폭풍 방패 · 포획 반격!")),this.fx(t.x,t.z,n?"#9be5ff":s?"#83fff0":"#fff6bd",.45,n?`방어 ${Math.round(e)}`:String(Math.round(s?a:e)),s,a,t.id),n&&(t.shieldFlash=.16),s&&t.hp>0&&this.counterPush(t,r),t.hp<=0&&(this.kills++,this.charge=Math.min(100,this.charge+6),t.kind!=="boss"&&this.cells.push({id:++this.serial,x:t.x,z:t.z,life:10}),this.evolutions.includes("vampire")&&(this.hp=Math.min(this.maxHp,this.hp+8)),this.fx(t.x,t.z,t.kind==="boss"?"#ffcc55":"#ffae39",t.kind==="boss"?4:1.4,"✦"),this.phase==="combat"&&!this.enemies.some(o=>o.hp>0)&&this.wave+1>=this.encounter.waves.length)){this.secured=!0;for(const o of this.shots)o.hostile&&(o.life=0);this.stormPatches=[],this.hazards.live=[]}}counterPush(t,e){if(t.kind==="boss"||t.hp<=0||!e)return;const n=Math.hypot(e.x,e.z);n!==0&&(t.knockX=e.x/n*5,t.knockZ=e.z/n*5,t.knockTime=.12,t.tell=0,t.rushTime=0,t.recovery=Math.max(t.recovery,.2))}hurtCover(t,e){const n=this.covers.find(s=>s.id===t);!n||n.hp===void 0||e<=0||(n.hp=Math.max(0,n.hp-e),n.hp===0&&(this.covers=this.covers.filter(s=>s.id!==t),this.fx(n.x,n.z,"#a6e7da",2.4,"엄폐 파괴!")))}perfect(){this.secured||this.perfectWindow>0&&!this.perfectAwarded&&(this.perfectAwarded=!0,this.perfectDodges++,this.charge=Math.min(100,this.charge+20),this.dash=Math.max(0,this.dash-.6),this.boost=2,this.reflectPending=!0,this.fx(this.x,this.z,"#ffe59a",1.8,"퍼펙트 회피!"))}damage(t,e="melee"){if(!this.secured){if(this.invuln>0){this.perfect();return}this.rematch&&(t=Math.round(t*1.3)),this.lastDamageCause=e,this.damageTaken+=Math.min(this.hp,t),this.hp=Math.max(0,this.hp-t),this.invuln=.65,this.fx(this.x,this.z,"#ff547d",1,`−${t}`),this.hp===0&&(this.phase="defeat",this.shots=[])}}shoot(t,e,n,s,r=24){const a=zs(this.weapon,this.evolutions.includes("scatter")),o=s?7:a.speed;this.shots.push({id:++this.serial,x:t,z:e,vx:Math.sin(n)*o,vz:-Math.cos(n)*o,life:s?3:a.life,damage:r,hostile:s,hits:[],pierce:s?0:a.pierce,boosted:!s&&this.boost>0,style:s?"enemy":this.weapon==="arc"?"arc":this.weapon==="pump"||this.evolutions.includes("scatter")?"scatter":"blaster"})}tick(t,e){if(this.phase==="paused"||(this.bursts.forEach(m=>m.life-=t),this.bursts=this.bursts.filter(m=>m.life>0),this.phase!=="combat"))return;this.secured||this.ammo.advance(t);let n=!1,s=this.movementSolids;const r={x:this.x,z:this.z};this.clock+=t,this.perfectWindow=Math.max(0,this.perfectWindow-t),this.boost=Math.max(0,this.boost-t),this.intro=Math.max(0,this.intro-t),this.dash=Math.max(0,this.dash-t),this.invuln=Math.max(0,this.invuln-t),this.recoil=Math.max(0,this.recoil-t*6),this.cooldown-=t;const a=this.secured||this.room===2&&this.intro>0,o=a?0:Math.hypot(e.x,e.z),l=o?e.x/Math.max(1,o):0,c=o?e.z/Math.max(1,o):0;if(e.dash&&this.dash<=0&&!a){this.dash=2.4,this.perfectWindow=.22,this.perfectAwarded=!1,this.ghostX=this.x,this.ghostZ=this.z,this.dashTime=.18,this.invuln=.3;const m=x_(this.x,this.z,this.angle,e.dashAim?.x??e.x,e.dashAim?.z??e.z,s);this.dashX=m.x,this.dashZ=m.z,this.fx(this.x,this.z,"#65fff1",1.5,"회피"),this.intro<=0&&this.evolutions.includes("aftershock")&&this.bombs.push({id:++this.serial,x:r.x,z:r.z,remaining:si.fuse})}const h={x:this.ghostX,z:this.ghostZ};if(this.perfectWindow>0&&(this.ghostX=Math.max(-7.4,Math.min(7.4,this.ghostX+l*5.3*t)),this.ghostZ=Math.max(-6,Math.min(6,this.ghostZ+c*5.3*t))),this.dashTime>0){const m=Math.min(t,this.dashTime);this.dashTime=Math.max(0,this.dashTime-t),this.x+=this.dashX*21*m+l*5.3*(t-m),this.z+=this.dashZ*21*m+c*5.3*(t-m)}else this.x+=l*5.3*t,this.z+=c*5.3*t;const d=Bn(r,this,s);this.x=d.x,this.z=d.z;const p=Bn(h,{x:this.ghostX,z:this.ghostZ},s);this.ghostX=p.x,this.ghostZ=p.z,this.x=Math.max(-7.4,Math.min(7.4,this.x)),this.z=Math.max(-6,Math.min(6,this.z));const f=e.aim??[...this.enemies].filter(m=>m.hp>0&&Mi(this,m,this.covers)).sort((m,T)=>Math.hypot(m.x-this.x,m.z-this.z)-Math.hypot(T.x-this.x,T.z-this.z))[0];if(f?this.angle=Math.atan2(f.x-this.x,-(f.z-this.z)):o&&(this.angle=Math.atan2(l,-c)),e.fire&&this.cooldown<=0&&this.intro<=0&&!this.secured&&this.ammo.spend()){const m=zs(this.weapon,this.evolutions.includes("scatter"));this.cooldown=m.cooldown,this.recoil=1;const T=m.offsets,D=m_({x:this.x,z:this.z},{x:this.x+Math.cos(this.angle)*.6+Math.sin(this.angle)*1.55,z:this.z+Math.sin(this.angle)*.6-Math.cos(this.angle)*1.55},[...this.enemies.filter(N=>N.hp>0).map(N=>({x:N.x,z:N.z,radius:N.kind==="boss"?1.4:.65})),...this.barrels.filter(N=>N.hp>0).map(N=>({x:N.x,z:N.z,radius:.55}))]),E=Xc(this,D,this.covers,.13),g=E.x,R=E.z,L=f?Math.atan2(f.x-g,-(f.z-R)):this.angle;T.forEach(N=>this.shoot(g,R,L+N,!1,Math.round(m.damage*(this.boost>0?1.3:1)))),this.sequence++}const x=this.intro<=0&&!this.secured,y=this.magnet.active,v=this.magnet.emptyReleases,u=this.magnet.refunds,_=this.evolutions.includes("recharge"),S=(this.secured?0:this.magnet.advance(t,_))+(e.magnet&&x&&!a?this.magnet.press(_):0);if(e.magnet&&x&&!a&&!y&&this.magnet.active&&this.fx(this.x,this.z,"#83fff0",un.radius,"자력 포획!"),this.magnet.emptyReleases!==v&&this.fx(this.x,this.z,"#9bdcff",1,"적탄을 기다려 포획!"),this.magnet.refunds!==u&&this.fx(this.x,this.z,"#cbb1ff",1.8,"리턴 코일 · 재사용 −3초"),S>0){const m=this.resonance.release(S),T=this.magnetTarget(e.magnetAim??e.aim),D=T?Math.atan2(T.x-this.x,-(T.z-this.z)):this.angle;this.angle=D;const E=qu(this.evolutions.includes("scatter"));for(let g=0;g<S;g++){const R=++this.serial;for(const L of E.offsets){const N=D+(g-(S-1)/2)*.075+L;this.shots.push({id:++this.serial,x:this.x,z:this.z,vx:Math.sin(N)*un.speed,vz:-Math.cos(N)*un.speed,life:1.7,damage:Math.round(E.damage*(m?1.6:1)),hostile:!1,hits:[],style:"arc",pierce:m?2:1,boosted:!0,stolen:!0,resonanceToken:R})}}m?(this.magnet.cooldown=Math.max(0,this.magnet.cooldown-2),this.fx(this.x,this.z,"#ffb6fc",4,"공명 반격!")):this.fx(this.x,this.z,"#ffe58a",3.4,"탄막 반격 ×"+S)}if(e.super&&this.charge>=100&&!a){n=!0,this.charge=0,this.invuln=.8,this.fx(this.x,this.z,"#ffc64a",Dn,"오버드라이브!"),this.enemies.forEach(m=>{Math.hypot(m.x-this.x,m.z-this.z)<Dn&&this.hurt(m,Xh)}),this.barrels.forEach(m=>{Math.hypot(m.x-this.x,m.z-this.z)<Dn&&(m.hp=0)});for(const m of[...this.covers])Math.hypot(m.x-this.x,m.z-this.z)<Dn&&this.hurtCover(m.id,Xh)}if(s=this.movementSolids,this.intro<=0)for(const m of this.enemies){if(m.hp<=0)continue;if(m.flash=Math.max(0,m.flash-t),m.shieldFlash=Math.max(0,m.shieldFlash-t),m.cooldown-=t,(m.knockTime??0)>0){const N=Math.min(t,m.knockTime);m.knockTime=Math.max(0,m.knockTime-N);const B=Bn(m,{x:Math.max(-7.4,Math.min(7.4,m.x+(m.knockX??0)*N)),z:Math.max(-6,Math.min(6,m.z+(m.knockZ??0)*N))},s,.65);m.x=B.x,m.z=B.z;continue}const T=this.x-m.x,D=this.z-m.z,E=Math.hypot(T,D);m.facing=m.tell>0||m.rushTime>0?m.aim:Math.atan2(T,-D);const g=m.kind==="mite"?2.3:m.kind==="brute"?1.5:m.kind==="boss"?.65:1.1,R=Math.atan2(T,-D),L=m.kind==="gunner"&&$c(m).some(N=>{const B=wr(m,{x:m.x+Math.sin(R+N)*21,z:m.z-Math.cos(R+N)*21},this.covers,this.barrels),k=B?.kind==="barrel"?this.barrels.find(W=>W.id===B.id):void 0;return!!k&&Math.hypot(k.x-m.x,k.z-m.z)<3.1});if(m.rushTime>0){const N=m.x,B=m.z,k=Math.min(t,m.rushTime),W=m.rushDistance/.42;m.x+=Math.sin(m.aim)*W*k,m.z-=Math.cos(m.aim)*W*k,m.rushTime=Math.max(0,m.rushTime-t);const $=m.kind==="boss"?Be.rush.radius:1.25;!m.rushHit&&this.perfectWindow>0&&bs({x:N,z:B},m,h,{x:this.ghostX,z:this.ghostZ},$)&&this.perfect(),!m.rushHit&&bs({x:N,z:B},m,r,this,$)&&(this.damage(Be.rush.damage,"rush"),m.rushHit=!0),m.rushTime===0&&(m.recovery=Be.rush.recovery,this.fx(m.x,m.z,"#7ffff0",1.5,m.kind==="boss"?"반격 기회!":void 0));continue}if(m.recovery>0){m.recovery=Math.max(0,m.recovery-t);continue}if(m.tell>0){if(m.tell=Math.max(0,m.tell-t),m.tell===0){if(m.attack==="fan"||m.attack==="ring")for(const N of $c(m))this.shoot(m.x,m.z,m.aim+N,!0,m.attack==="ring"?14:m.kind==="boss"?18:m.overcharge?Sa.damage:12);else if(m.attack==="blink")m.x=m.blinkX,m.z=m.blinkZ,this.stormPatches.push({id:++this.serial,x:m.x,z:m.z,remaining:Hn.duration,pulse:Hn.pulse}),this.perfectWindow>0&&Math.hypot(this.ghostX-m.x,this.ghostZ-m.z)<Be.blink.radius&&this.perfect(),Math.hypot(this.x-m.x,this.z-m.z)<Be.blink.radius&&this.damage(Be.blink.damage,"blink"),this.fx(m.x,m.z,"#bd9cff",2.8,"순간이동!");else if(m.attack==="siege")this.perfectWindow>0&&Math.hypot(this.ghostX-m.blinkX,this.ghostZ-m.blinkZ)<Be.siege.radius&&this.perfect(),Math.hypot(this.x-m.blinkX,this.z-m.blinkZ)<Be.siege.radius&&this.damage(Be.siege.damage,"slam"),this.fx(m.blinkX,m.blinkZ,"#ffb35f",Be.siege.radius,"낙하 포격!");else if(m.attack==="rush")m.rushTime=.42,m.rushHit=!1,this.fx(m.x,m.z,"#ff7658",1.3,"돌진!");else{const N=Be[m.attack];this.perfectWindow>0&&Math.hypot(this.ghostX-m.x,this.ghostZ-m.z)<N.radius&&this.perfect(),E<N.radius&&this.damage(N.damage,m.attack==="slam"?"slam":"melee"),this.fx(m.x,m.z,"#ff7254",N.radius,m.attack==="slam"?"강타!":void 0)}m.attackIndex++,m.cooldown=m.kind==="boss"?1.35:m.kind==="brute"?1.8:1.6,m.attack!=="rush"&&(m.recovery=Be[m.attack].recovery,m.kind==="boss"&&this.fx(m.x,m.z,"#7ffff0",1.3,"반격 기회!"))}}else if(m.cooldown<=0&&!L&&(m.kind!=="gunner"||Mi(m,this,this.covers))&&(m.kind==="boss"||m.kind==="gunner"||m.kind==="brute"&&E<6||E<1.5)){if(m.attack=Qh(m.kind,m.attackIndex,m.bossStyle==="storm",m.overloaded===!0),m.kind==="boss"&&m.attack==="slam"&&E>Be.slam.radius&&(m.attack="siege"),m.aim=Math.atan2(T,-D),m.tell=Be[m.attack].windup,m.attack==="siege"&&(m.blinkX=this.x,m.blinkZ=this.z),m.attack==="blink"){const N={x:this.x,z:this.z},B=Bn(N,N,s,1.4);m.blinkX=B.x,m.blinkZ=B.z}if(m.attack==="rush"){const N=h_(m.x,m.z,m.aim,m.kind==="boss"),B=Un(m,N,s,m.kind==="boss"?1.4:.65);m.rushDistance=N.distance*(B?Math.max(0,B.t-.001):1)}}else if(m.bossStyle!=="storm"&&(E>(m.kind==="gunner"?4:1.1)||L||!Mi(m,this,s))){const N=qx(m,this,s,m.kind==="boss"?1.4:.65,m.id),B=N.x-m.x,k=N.z-m.z,W=Math.hypot(B,k),$=Bn(m,{x:m.x+B/Math.max(.01,W)*g*t,z:m.z+k/Math.max(.01,W)*g*t},s,m.kind==="boss"?1.4:.65);if(Math.hypot($.x-m.x,$.z-m.z)<g*t*.25){const V=m.x>0?1:m.x<0?-1:m.id%2?1:-1,it=Bn(m,{x:m.x+V*g*t,z:m.z},s,m.kind==="boss"?1.4:.65);m.x=it.x,m.z=it.z}else m.x=$.x,m.z=$.z}}if(n){const m=this.shots.length;this.shots=this.shots.filter(D=>!D.hostile||Math.hypot(D.x-this.x,D.z-this.z)>=Dn);const T=m-this.shots.length;T>0&&this.fx(this.x,this.z-1.6,"#a3fff0",1.5,"탄막 소거 ×"+T)}if(this.magnet.active)for(const m of this.shots)m.hostile&&m.life>0&&Mi(this,m,this.movementSolids)&&ba({x:m.x,z:m.z},{x:m.x+m.vx*t,z:m.z+m.vz*t},r,this,un.radius)!==null&&this.magnet.collect()&&(m.life=0,this.fx(m.x,m.z,"#83fff0",.4));for(const m of this.shots){if(m.life<=0)continue;const T={x:m.x,z:m.z},D={x:m.x+m.vx*t,z:m.z+m.vz*t};m.life-=t;const E=wr(T,D,this.covers,this.barrels);let g=E?.t??1,R=!1;if(m.hostile){const L=ba(T,D,h,{x:this.ghostX,z:this.ghostZ},.55);this.perfectWindow>0&&L!==null&&L<=g&&this.perfect();const N=ba(T,D,r,this,.55);N!==null&&N<=g&&(g=N,this.damage(m.damage,"projectile"),m.life=0,R=!0)}else{let L,N=1/0;for(const B of this.enemies)if(B.hp>0&&!m.hits.includes(B.id)){const k=Al(T,D,B,B.kind==="boss"?1.4:.65);k!==null&&k<=g&&k<N&&(L=B,N=k)}if(L){const B=L;g=N,R=!0;const k=g_(B,m.vx,m.vz,m.damage,m.stolen===!0);if(this.hurt(B,k.damage,k.blocked,m.stolen===!0,{x:m.vx,z:m.vz}),k.damage>0&&this.resonance.confirm(m.resonanceToken)&&this.fx(this.x,this.z,"#ffb6fc",3,"공명 충전 완료!"),m.hits.push(B.id),this.evolutions.includes("ricochet")&&m.hits.length<3){const W=this.enemies.find($=>$.hp>0&&!m.hits.includes($.id)&&Math.hypot($.x-B.x,$.z-B.z)<5);if(W){const $={x:T.x+(D.x-T.x)*g,z:T.z+(D.z-T.z)*g};m.chainFrom=$;const V=Math.atan2(W.x-$.x,-(W.z-$.z)),it=Math.hypot(m.vx,m.vz);m.vx=Math.sin(V)*it,m.vz=-Math.cos(V)*it}else m.pierce>0?m.pierce--:m.life=0}else m.pierce>0?m.pierce--:m.life=0}}if(m.x=T.x+(D.x-T.x)*g,m.z=T.z+(D.z-T.z)*g,E&&!R)if(m.life=0,E.kind==="barrel"){const L=this.barrels.find(N=>N.id===E.id);L&&(L.hp-=m.damage)}else this.hurtCover(E.id,m.damage),this.fx(m.x,m.z,"#9ce3de",.3);(Math.abs(m.x)>8||Math.abs(m.z)>7)&&(m.life=0)}if(this.reflectPending){this.reflectPending=!1;let m=0;for(const T of this.shots){if(m>=8||!T.hostile||T.life<=0||Math.hypot(T.x-this.x,T.z-this.z)>4||!Mi(this,T,this.movementSolids))continue;const D=this.enemies.filter(g=>g.hp>0&&Mi(T,g,this.covers)).sort((g,R)=>Math.hypot(g.x-T.x,g.z-T.z)-Math.hypot(R.x-T.x,R.z-T.z))[0];if(!D)continue;const E=Math.atan2(D.x-T.x,-(D.z-T.z));T.hostile=!1,T.stolen=!0,T.vx=Math.sin(E)*18,T.vz=-Math.cos(E)*18,T.damage=60,T.life=1.6,T.style="arc",T.boosted=!0,T.hits=[],T.pierce=1,m++}this.reflectedShots+=m,m&&this.fx(this.x,this.z,"#83fff0",4,"탄막 탈취 ×"+m)}for(const m of this.bombs)if(m.remaining-=t,m.remaining<=0){this.fx(m.x,m.z,"#83ffe4",si.radius,"회피폭탄!");for(const T of this.enemies)Math.hypot(T.x-m.x,T.z-m.z)<si.radius&&this.hurt(T,si.damage);for(const T of this.barrels)Math.hypot(T.x-m.x,T.z-m.z)<si.radius&&(T.hp=0);for(const T of[...this.covers])Math.hypot(T.x-m.x,T.z-m.z)<si.radius&&this.hurtCover(T.id,si.damage)}this.bombs=this.bombs.filter(m=>m.remaining>0);for(const m of this.barrels)if(m.hp<=0){this.fx(m.x,m.z,"#ff9238",2.6,"BOOM");for(const T of this.enemies)Math.hypot(T.x-m.x,T.z-m.z)<3.1&&this.hurt(T,95);for(const T of[...this.covers])Math.hypot(T.x-m.x,T.z-m.z)<3.1&&this.hurtCover(T.id,95);for(const T of this.barrels)T.hp>0&&Math.hypot(T.x-m.x,T.z-m.z)<3.1&&(T.hp=0);m.hp=-999}const b=this.enemies.some(m=>m.hp>0)||this.wave+1<this.encounter.waves.length;if(this.intro<=0&&b){this.hazards.tick(t);for(const m of this.hazards.live)if(m.phase==="active"){if(!m.hits.has(0)&&(this.perfectWindow>0&&wa(m,h,{x:this.ghostX,z:this.ghostZ})&&this.perfect(),wa(m,r,this))){const T=this.hp;this.damage(14,"hazard"),this.hp<T&&m.hits.add(0)}for(const T of this.enemies)T.hp>0&&!m.hits.has(T.id)&&wa(m,T)&&(m.hits.add(T.id),this.hurt(T,45))}}else b||(this.hazards.live=[]);b||(this.stormPatches=[]);for(const m of this.stormPatches)m.remaining-=t,m.pulse-=t,m.remaining>0&&m.pulse<=0&&(m.pulse+=Hn.pulse,bs(r,this,m,m,Hn.radius)&&this.damage(Hn.damage,"blink"));this.stormPatches=this.stormPatches.filter(m=>m.remaining>0);const C=this.movementSolids;if(this.phase==="combat")for(const m of this.cells){if(m.life-=t,m.life<=0)continue;const T=Math.hypot(this.x-m.x,this.z-m.z);if(m.life<9.8&&T<2.2&&Mi(this,m,C)){const D=Math.min(T,t*8);m.x+=(this.x-m.x)/Math.max(.001,T)*D,m.z+=(this.z-m.z)/Math.max(.001,T)*D}m.life<9.8&&Mi(this,m,C)&&bs(m,m,r,this,.65)&&(m.life=0,this.cellsCollected++,this.ammo.collect(),this.charge=Math.min(100,this.charge+12),this.hp=Math.min(this.maxHp,this.hp+3),this.fx(this.x,this.z,"#87fff0",.8,"충전 +12"))}this.cells=this.cells.filter(m=>m.life>0),this.barrels=this.barrels.filter(m=>m.hp!==-999),this.shots=this.shots.filter(m=>m.life>0),this.enemies=this.enemies.filter(m=>m.hp>0),this.phase==="combat"&&this.enemies.length===0&&(this.spawnIn+=t,this.spawnIn>1.1&&(this.spawnIn=0,this.wave+1<this.encounter.waves.length?(this.wave++,this.spawnWave()):(this.phase=this.room===2?"victory":"upgrade",this.shots=[])))}get shotSequence(){return this.sequence}}function y_(i,t,e,n,s=[]){const r=i.intersectObjects(t,!0).find(c=>{let h=c.object;for(;h;){if(!h.visible)return!1;h=h.parent}return typeof c.object.userData.aimEnemy=="number"||typeof c.object.userData.aimBarrel=="number"||typeof c.object.userData.aimCover=="number"});if(!r)return null;const a=e.find(c=>c.id===r.object.userData.aimEnemy);if(a)return{kind:"enemy",id:a.id,x:a.x,z:a.z};const o=n.find(c=>c.id===r.object.userData.aimBarrel);if(o)return{kind:"barrel",id:o.id,x:o.x,z:o.z};const l=s.find(c=>c.id===r.object.userData.aimCover);return l?{kind:"cover",id:l.id,x:l.x,z:l.z}:null}class b_{root=new ut;plane=new Ur(1,1);edgeGeometry=new Se;meshes=new Map;constructor(t){this.edgeGeometry.setAttribute("position",new ie([-.5,0,-.5,.5,0,-.5,.5,0,.5,-.5,0,.5],3)),this.root.name="floor-hazard-effects",t.add(this.root)}update(t,e,n){this.root.visible=e;const s=new Set(t.map(r=>r.id));for(const[r,a]of this.meshes)s.has(r)||(this.root.remove(a.group),a.fill.material.dispose(),a.edge.material.dispose(),this.meshes.delete(r));for(const r of t){let a=this.meshes.get(r.id);if(!a){const c=new ut,h=new at(this.plane,new ee({transparent:!0,opacity:.15,depthWrite:!1})),d=new Gf(this.edgeGeometry,new Ya);h.rotation.x=-Math.PI/2,c.add(h,d),this.root.add(c),a={group:c,fill:h,edge:d},this.meshes.set(r.id,a)}a.group.position.set(r.x,.075,r.z),a.group.scale.set(r.width,1,r.depth);const o=r.phase==="active",l=o?n?16737336:15618923:16758612;a.fill.material.color.setHex(l),a.fill.material.opacity=o?.62:.2+(1-r.remaining/r.total)*.2,a.edge.material.color.setHex(o?16762787:16765301)}}}function S_(i,t,e,n=[],s={covers:[],barrels:[]}){if(i.dash>0||i.intro>0)return!1;const r=.22;for(const a of n)if(!a.hits.has(0)&&(a.phase==="active"||a.remaining<r)&&wa(a,i))return!0;for(const a of e)if(a.hostile&&a.life>0){const o={x:a.x+a.vx*r,z:a.z+a.vz*r},l=ba(a,o,i,i,.55),c=wr(a,o,s.covers,s.barrels);if(l!==null&&l<=(c?.t??1))return!0}for(const a of t)if(!(a.hp<=0)){if(a.rushTime>0&&!a.rushHit){const o=Math.min(r,a.rushTime),l=a.rushDistance/.42;if(bs(a,{x:a.x+Math.sin(a.aim)*l*o,z:a.z-Math.cos(a.aim)*l*o},i,i,a.kind==="boss"?1.95:1.25))return!0}if(a.tell>0&&a.tell<r)if(a.attack==="melee"||a.attack==="slam"){if(Math.hypot(a.x-i.x,a.z-i.z)<Be[a.attack].radius)return!0}else{if((a.attack==="blink"||a.attack==="siege")&&Math.hypot(a.blinkX-i.x,a.blinkZ-i.z)<Be[a.attack].radius)return!0;if(a.attack==="rush"){const o=r-a.tell,l=a.rushDistance/.42;if(bs(a,{x:a.x+Math.sin(a.aim)*l*o,z:a.z-Math.cos(a.aim)*l*o},i,i,a.kind==="boss"?1.95:1.25))return!0}}}return!1}class w_{remaining=0;hold(t){this.remaining=Math.max(this.remaining,t)}reset(){this.remaining=0}takeDt(t){const e=Math.min(t,this.remaining);return this.remaining=Math.max(0,this.remaining-t),t-e}}class E_{lastX=0;lastZ=0;primed=!1;gait=0;speed=0;emote=0;reset(t,e){this.lastX=t,this.lastZ=e,this.primed=!0,this.gait=0,this.speed=0,this.emote=0}react(t=1.35){this.emote=t}update(t,e,n,s,r){this.primed||this.reset(e,n);const a=Math.hypot(e-this.lastX,n-this.lastZ);this.lastX=e,this.lastZ=n;const o=a<1?a/Math.max(.001,t):0;this.speed+=(Math.min(21,o)-this.speed)*Math.min(1,t*16),r||(this.gait+=Math.min(a,.5)*5.2),this.emote=Math.max(0,this.emote-t);const l=r?0:Math.min(1,this.speed/5.3),c=r?0:Math.max(0,this.speed-7)/14,h=(s+1.1)%4.4,d=h<.13?Math.max(.08,Math.abs(h-.065)/.065):1;return{step:Math.sin(this.gait)*.48*l,bob:r?Math.sin(s*2)*.03:Math.abs(Math.sin(this.gait))*.055*l,lean:c*.12,blink:d,wave:this.emote>0?Math.sin(Math.min(1,this.emote/.3)*Math.PI/2):0}}}class T_{pending=!1;request(){this.pending=!0}shouldFire(t){return t||this.pending}accepted(){this.pending=!1}cancel(){this.pending=!1}}const Ie=i=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.floor(i)):0;function Ku(i){let t={};try{const v=JSON.parse(i??"{}");v&&typeof v=="object"&&!Array.isArray(v)&&(t=v)}catch{}const e=t.chapterRecords,n=v=>{const u=e?.[v];return{fastest:typeof u?.fastest=="number"&&Number.isFinite(u.fastest)&&u.fastest>0?u.fastest:null,bestPerfect:Ie(u?.bestPerfect),clean:u?.clean===!0}},s=t.rematches,r=v=>{const u=s?.[v];return{wins:Ie(u?.wins),runs:Ie(u?.runs),fastest:typeof u?.fastest=="number"&&Number.isFinite(u.fastest)&&u.fastest>0?u.fastest:null,bestPerfect:Ie(u?.bestPerfect),clean:u?.clean===!0}},a=t.rematchBuildRecords,o=v=>Object.fromEntries(Object.keys(In).map(u=>{const _=a?.[v]?.[u];return[u,{wins:Ie(_?.wins),runs:Ie(_?.runs),fastest:typeof _?.fastest=="number"&&Number.isFinite(_.fastest)&&_.fastest>0?_.fastest:null,bestPerfect:Ie(_?.bestPerfect),clean:_?.clean===!0}]})),l=Ie(t.clears),c=t.chapterWins,h=t.chapterBest,d={1:c?Ie(c[1]):l,2:c?Ie(c[2]):0},p=typeof t.equippedWeapon=="string"&&Object.hasOwn(We,t.equippedWeapon)?t.equippedWeapon:"twin",f=typeof t.equippedOutfit=="string"&&Object.hasOwn(dn,t.equippedOutfit)?t.equippedOutfit:"guardian",x={rematchBuildRecords:{1:o(1),2:o(2)},equippedTitle:"guardian",rematches:{1:r(1),2:r(2)},equippedOutfit:Sr(f,d)?f:"guardian",chapterRecords:{1:n(1),2:n(2)},equippedWeapon:Xs(p,d)?p:"twin",best:Math.min(3,Ie(t.best)),clears:l,runs:Ie(t.runs),clearedRoutes:Array.isArray(t.clearedRoutes)?Array.from(new Set(t.clearedRoutes.filter(v=>typeof v=="string"&&Object.hasOwn(oi,v)))):[],chapterWins:{1:c?Ie(c[1]):l,2:c?Ie(c[2]):0},chapterBest:{1:h?Math.min(3,Ie(h[1])):Math.min(3,Ie(t.best)),2:h?Math.min(3,Ie(h[2])):0}},y=typeof t.equippedTitle=="string"&&Object.hasOwn(Mn,t.equippedTitle)?t.equippedTitle:"guardian";return{...x,equippedTitle:br(x,y)?y:"guardian"}}function A_(i,t,e,n,s,r){const a={...i.chapterRecords};if(t&&r&&Number.isFinite(r.seconds)&&r.seconds>0){const o=i.chapterRecords[n],l=Rl(t,r);a[n]={fastest:o.fastest===null?r.seconds:Math.min(o.fastest,r.seconds),bestPerfect:Math.max(o.bestPerfect,Ie(r.perfectDodges)),clean:o.clean||l[2]}}return{...i,chapterRecords:a,runs:i.runs+1,best:Math.max(i.best,e+1),clears:i.clears+(t?1:0),chapterWins:{...i.chapterWins,[n]:i.chapterWins[n]+(t?1:0)},chapterBest:{...i.chapterBest,[n]:Math.max(i.chapterBest[n],e+1)},clearedRoutes:t?Array.from(new Set([...i.clearedRoutes,...s])):[...i.clearedRoutes]}}function R_(i,t){const e=t===1?"pump":"arc",n=t===1?"crown":"tempest";return!Xs(e,i.chapterWins)||!Sr(n,i.chapterWins)?i:{...i,equippedWeapon:e,equippedOutfit:n}}function C_(i){return i.chapterWins[1]>0&&i.chapterWins[2]===0?2:1}function tu(i,t,e){const n=t&&Number.isFinite(e.seconds)&&e.seconds>0,s=Rl(t,e);return{...i,runs:i.runs+1,wins:i.wins+(t?1:0),fastest:n?i.fastest===null?e.seconds:Math.min(i.fastest,e.seconds):i.fastest,bestPerfect:n?Math.max(i.bestPerfect,Ie(e.perfectDodges)):i.bestPerfect,clean:i.clean||s[2]}}function P_(i,t,e,n,s){const r={...i.rematchBuildRecords};if(s!==void 0){const a=Tl(s);r[e]={...r[e],[a]:tu(r[e][a],t,n)}}return{...i,rematchBuildRecords:r,rematches:{...i.rematches,[e]:tu(i.rematches[e],t,n)}}}function eu(i,t){return Math.max(0,i.rematches[t].wins-Object.values(i.rematchBuildRecords[t]).reduce((e,n)=>e+n.wins,0))}const D_=.145,L_=i=>440*2**((i-69)/12),I_={lobby:{lead:[74,0,78,81,78,76,74,0,71,74,78,0,76,74,71,0,67,71,74,78,76,74,71,0,69,73,76,81,78,76,73,0],chords:[[62,66,69],[59,62,66],[55,59,62],[57,61,64]]},playing:{lead:[74,77,81,0,79,77,74,72,70,74,77,0,79,77,74,0,67,70,74,77,74,72,70,0,69,73,76,0,81,79,76,73],chords:[[62,65,69],[58,62,65],[55,58,62],[57,61,64]]},boss:{lead:[62,0,65,69,68,65,62,0,65,68,72,0,70,68,65,0,58,62,65,0,67,65,62,0,61,64,69,0,68,64,61,0],chords:[[50,53,57],[53,56,60],[46,50,53],[49,52,57]]},escape:{lead:[76,79,83,86,83,79,76,74,72,76,79,83,81,79,76,74,69,72,76,79,81,79,76,72,71,75,78,83,86,83,78,75],chords:[[64,67,71],[60,64,67],[57,60,64],[59,63,66]]}};function U_(i,t){const e=I_[i],n=[],s=[],r=e.chords[Math.floor(t/16)%4],a=(o,l,c,h)=>{const d=L_(o);n.push({frequency:d,end:d*.998,wave:l,duration:c,level:h})};if(t%2===0){const o=e.lead[Math.floor(t/2)%32];o&&a(o,"sine",i==="lobby"?.32:.22,.052)}if(t%8===0){for(const o of r)a(o,"sine",.7,i==="lobby"?.018:.011);a(r[0]-12,"triangle",.28,i==="boss"?.075:.05)}return t%8===6&&a(r[0]-5,"triangle",.16,.03),i==="lobby"?(t%8===0&&n.push({frequency:100,end:55,wave:"sine",duration:.09,level:.026}),t%8===4&&s.push({duration:.035,level:.014,cutoff:1700})):(t%4===0&&n.push({frequency:i==="boss"?125:115,end:42,wave:"sine",duration:.14,level:i==="boss"?.09:.07}),t%4===2&&s.push({duration:.07,level:.028,cutoff:2400}),(t%2===1||i==="escape")&&s.push({duration:.018,level:.011,cutoff:7500})),{tones:n,noise:s}}class N_{context=null;master=null;musicBus=null;effectsBus=null;musicVolume=1;effectsVolume=1;enabled=!0;musicTimer=null;musicStep=0;scene="lobby";lastSounds=new Map;bossMusic=!1;escapeMusic=!1;setVolume(t){this.enabled=t>0,this.master&&this.context&&this.master.gain.setTargetAtTime(Math.max(0,Math.min(1,t))*.24,this.context.currentTime,.04)}setMusicVolume(t){if(this.musicVolume=Math.max(0,Math.min(1,t)),this.musicBus&&this.context){const e=this.context.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(this.scene==="paused"||this.scene==="results"?0:.72*this.musicVolume,e,.035)}}setEffectsVolume(t){this.effectsVolume=Math.max(0,Math.min(1,t)),this.effectsBus&&this.context&&this.effectsBus.gain.setTargetAtTime(this.effectsVolume,this.context.currentTime,.025)}setScene(t){if(this.scene!==t&&(this.scene=t,this.musicStep=0,this.musicBus&&this.context)){const e=this.context.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(t==="paused"||t==="results"?0:.72*this.musicVolume,e,.035)}}setBossBattle(t){this.bossMusic=t}setEscape(t){this.escapeMusic=t}play(t,e=1,n="pip"){if(!this.enabled)return;const s=this.getContext();if(!s)return;const r=s.currentTime,a=t==="shield-hit"?.1:t==="counter-hit"?.08:t==="hit"?.065:t==="hurt"?.11:t==="pulse"?.85:.025;if(r-(this.lastSounds.get(t)??-10)<a)return;if(this.lastSounds.set(t,r),this.musicBus&&this.scene!=="paused"&&this.scene!=="results"&&["counter-hit","super","shield-break","hurt","boss"].includes(t)&&(this.musicBus.gain.cancelScheduledValues(r),this.musicBus.gain.setTargetAtTime(.28*this.musicVolume,r,.015),this.musicBus.gain.setTargetAtTime(.72*this.musicVolume,r+.2,.06)),t==="explosion"){this.noise(.32,.24*e,r,2400),this.tone(170,38,"sine",.38,.32*e,r),this.tone(780,90,"sawtooth",.12,.075*e,r);return}if(t==="alarm"){for(let f=0;f<4;f++)this.tone(f%2?740:470,f%2?470:740,"square",.14,.08*e,r+f*.17);this.tone(92,50,"sine",.3,.16*e,r);return}if(t==="extract"){this.noise(.36,.1*e,r,2600),[392,523.25,659.25,1046.5].forEach((f,x)=>this.tone(f,f*1.015,"triangle",.3,.16*e,r+x*.08));return}if(t==="wave"||t==="boss"){(t==="boss"?[130.81,155.56,196]:[392,523.25,659.25]).forEach((x,y)=>this.tone(x,x*(t==="boss"?.85:1.01),"triangle",.25,.16*e,r+y*.09));return}if(t==="core"){[660,880,1320].forEach((f,x)=>this.tone(f,f*1.02,"triangle",.2,.19*e,r+x*.065));return}if(t==="ko"){this.noise(.085,.09*e,r,1500),this.tone(210,75,"triangle",.12,.2*e,r),this.tone(880,1175,"sine",.16,.13*e,r+.025);return}if(t==="win"||t==="lose"||t==="draw"){(t==="win"?[523.25,659.25,783.99,1046.5]:t==="draw"?[392,440,392]:[349.23,293.66,261.63]).forEach((x,y)=>this.tone(x,x*1.005,"triangle",.24,.18*e,r+y*.105));return}if(t==="shield-hit"){this.tone(1640,1200,"sine",.065,.07*e,r),this.tone(2460,1800,"sine",.04,.025*e,r);return}if(t==="counter-hit"){this.tone(115,65,"triangle",.12,.16*e,r),this.tone(920,1550,"sine",.08,.08*e,r),this.noise(.045,.04*e,r,2200);return}if(t==="shield-break"){this.noise(.18,.13*e,r,3600),this.tone(1400,180,"sine",.16,.15*e,r),this.tone(100,55,"triangle",.22,.14*e,r),[660,990].forEach((f,x)=>this.tone(f,f*1.06,"sine",.16,.06*e,r+.07+x*.045));return}if(t==="pump-shot"){this.noise(.13,.14*e,r,1200),this.tone(175,55,"triangle",.16,.16*e,r);return}if(t==="arc-shot"){this.tone(1100,420,"sine",.14,.11*e,r),this.tone(220,80,"triangle",.17,.07*e,r),this.noise(.05,.035*e,r,2800);return}if(t==="shot"){n==="nova"?(this.noise(.095,.15*e,r,1100),this.tone(180,60,"triangle",.1,.14*e,r)):n==="bolt"?this.tone(940,430,"sine",.045,.09*e,r):(this.tone(620,220,"triangle",.075,.13*e,r),this.noise(.035,.035*e,r,1900));return}const o={hit:[1060,710,"triangle",.075,.13],hurt:[150,75,"triangle",.13,.19],dash:[240,740,"sine",.16,.14],super:[160,800,"triangle",.28,.19],pickup:[740,1120,"sine",.15,.13],pulse:[392,523,"sine",.11,.035],countdown:[587,587,"sine",.1,.16],ready:[740,1108,"sine",.17,.15]},[l,c,h,d,p]=o[t];this.tone(l,c,h,d,p*e,r),t==="super"&&this.noise(.24,.09*e,r,1400)}tone(t,e,n,s,r,a,o){const l=this.context;if(!l||!this.master)return;const c=l.createOscillator(),h=l.createGain();c.type=n,c.frequency.setValueAtTime(t,a),c.frequency.exponentialRampToValueAtTime(Math.max(30,e),a+s),h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(Math.max(2e-4,r),a+.009),h.gain.exponentialRampToValueAtTime(1e-4,a+s),c.connect(h),h.connect(o??this.effectsBus??this.master),c.onended=()=>{c.disconnect(),h.disconnect()},c.start(a),c.stop(a+s+.02)}noise(t,e,n,s,r){const a=this.context;if(!a||!this.master)return;const o=a.createBuffer(1,Math.ceil(a.sampleRate*t),a.sampleRate),l=o.getChannelData(0);for(let p=0;p<l.length;p++)l[p]=(Math.random()*2-1)*(1-p/l.length);const c=a.createBufferSource(),h=a.createBiquadFilter(),d=a.createGain();c.buffer=o,h.type="lowpass",h.frequency.value=s,d.gain.setValueAtTime(e,n),d.gain.exponentialRampToValueAtTime(1e-4,n+t),c.connect(h),h.connect(d),d.connect(r??this.effectsBus??this.master),c.onended=()=>{c.disconnect(),h.disconnect(),d.disconnect()},c.start(n),c.stop(n+t)}getContext(){return typeof window>"u"||!window.AudioContext?null:(this.context||(this.context=new AudioContext,this.master=this.context.createGain(),this.master.gain.value=this.enabled?.24:0,this.master.connect(this.context.destination),this.musicBus=this.context.createGain(),this.musicBus.gain.value=this.scene==="paused"||this.scene==="results"?0:.72*this.musicVolume,this.musicBus.connect(this.master),this.effectsBus=this.context.createGain(),this.effectsBus.gain.value=this.effectsVolume,this.effectsBus.connect(this.master),this.musicTimer=window.setInterval(()=>{const t=this.context;if(!t||!this.enabled||t.state!=="running"||this.scene==="paused"||this.scene==="results"||this.musicVolume===0||document.hidden)return;const e=t.currentTime,n=this.scene==="lobby"?"lobby":this.escapeMusic?"escape":this.bossMusic?"boss":"playing",s=U_(n,this.musicStep);for(const r of s.tones)this.tone(r.frequency,r.end,r.wave,r.duration,r.level,e,this.musicBus);for(const r of s.noise)this.noise(r.duration,r.level,e,r.cutoff,this.musicBus);this.musicStep++},D_*1e3)),this.context.state==="suspended"&&this.context.resume().catch(()=>{}),this.context)}dispose(){this.musicTimer!==null&&window.clearInterval(this.musicTimer),this.context?.close(),this.context=null,this.master=null,this.musicBus=null,this.effectsBus=null}}const Zn=document.querySelector("#app");Zn.innerHTML='<canvas id="world" aria-label="리액터 러시 3D 게임"></canvas><div id="interface"></div><div id="floats" aria-hidden="true"></div>';const ci=Zn.querySelector("canvas"),ot=Zn.querySelector("#interface"),qc=Zn.querySelector("#floats"),F_=new Gx(ci),ju=new Lx(Zn),Ju=new Ax,yi=new Rx,Tr=document.createElement("div");Tr.className="counter-readout";Tr.hidden=!0;Zn.append(Tr);const M=new M_,Zt=new N_,be=matchMedia("(prefers-reduced-motion: reduce)"),di=new nx({canvas:ci,antialias:!0,alpha:!1});di.setPixelRatio(Math.min(devicePixelRatio,2));di.shadowMap.enabled=!0;di.shadowMap.type=du;di.outputColorSpace=Je;di.toneMapping=pu;di.toneMappingExposure=1.1;const jt=new Of,Qu=new Gt("#101f3c");jt.background=Qu;jt.fog=new ml("#101f3c",35,65);const z_=new _x(jt),td=new Mx(jt),O_=new bx(jt),cr=new vx(jt),Ea=new Px(jt),B_=new Ix(jt),k_=new Fx(jt),H_=new Wx(jt),V_=new b_(jt),bi=new t_(jt),yn=new _n(38,1,.1,100);jt.add(new mp(11139327,3286597,1.6));const $s=new Ou(16769965,2.7);$s.position.set(-7,14,8);$s.castShadow=!0;$s.shadow.mapSize.set(2048,2048);Object.assign($s.shadow.camera,{left:-15,right:15,top:15,bottom:-15});$s.shadow.bias=-.001;jt.add($s);const ed=new Ou(5618687,2);ed.position.set(5,5,-9);jt.add(ed);const Te=new zn(1,24,16),gt=new Ui(1,1,1,3,.12),xe=new fn(1,1,1,24),Qi=new wn(1,.08,8,48),Xo=new Map;function nd(i,t=!1){const e=i+t;return Xo.has(e)||Xo.set(e,new pe({color:i,roughness:.65,metalness:.12,emissive:t?i:"#000000",emissiveIntensity:t?1.3:0})),Xo.get(e)}function Y(i,t,e,n,s,r=!1){const a=new at(t,nd(e,r));return a.position.set(...n),a.scale.set(...s),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Li(i,t,e,n,s,r){const a=Y(i,Qi,t,[e,n,s],[r,r,r],!0);return a.rotation.x=-Math.PI/2,a}const En=new ut;jt.add(En);Y(En,gt,"#25345f",[0,-1.15,0],[17,1.6,15]);Y(En,gt,"#50b6aa",[0,-.35,0],[16.4,.7,14.4]);const id=[];for(let i=-7;i<=7;i+=2)for(let t=-6;t<=6;t+=2)id.push(Y(En,gt,(i+t)%4===0?"#89d2b8":"#72c7ac",[i,.015,t],[1.92,.09,1.92]));for(const i of[-8,8])for(let t=-6;t<=6;t+=3)Y(En,gt,"#286f81",[i,.8,t],[.5,1.8,1.2]),Y(En,gt,"#94ede0",[i,1.72,t],[.62,.12,1.3]);for(const i of[-7,7])for(let t=-6;t<=6;t+=3)Y(En,gt,"#286f81",[t,.55,i],[1.2,1.2,.45]),Y(En,gt,"#94ede0",[t,1.17,i],[1.35,.12,.6]);for(let i=0;i<18;i++){const t=i*2.399,e=11+i%3*1.4,n=Math.cos(t)*e,s=Math.sin(t)*e,r=new ut;r.position.set(n,0,s),En.add(r),Y(r,xe,"#4d5366",[0,.9,0],[.22,2,.22]);for(let a=0;a<3;a++)Y(r,Te,["#268b8c","#39b4a1","#73d3a6"][a],[Math.sin(a*2)*.45,2.3+a*.5,Math.cos(a*2)*.4],[1.2-a*.2,.9,1-a*.1]);Y(r,gt,"#526882",[.5,-.15,.3],[1.3,.7,1.2])}const Nn=new ut;Nn.position.set(0,0,-6.6);En.add(Nn);for(const i of[-2.1,2.1])Y(Nn,gt,"#26376d",[i,2.2,0],[.75,4.4,.9]),Y(Nn,gt,"#f7c956",[i,3.9,0],[.95,.45,1.1]),Y(Nn,gt,"#77fff0",[i,2.1,-.48],[.12,2.8,.08],!0);Y(Nn,gt,"#26376d",[0,4.3,0],[5,.65,1]);Y(Nn,gt,"#f7c956",[0,4.68,0],[2.2,.3,1.2]);const Yc=Y(Nn,gt,"#29bede",[0,2.1,0],[3.5,4,.15],!0);Yc.material=new pe({color:"#57dfff",emissive:"#29bede",emissiveIntensity:1,transparent:!0,opacity:.28});const nu=Li(Nn,"#7affee",0,.2,.6,1.7);Fa(En,new Set([Nn]));const $o=Jx(jt),ts=new E_,G_=new Qx(jt);function W_(){const i=new ut,t=new ut;i.add(t);const e=new ut,n=new ut;t.add(e,n),e.position.set(-.33,.65,0),n.position.set(.33,.65,0);for(const h of[e,n])Y(h,gt,"#243955",[0,-.22,0],[.45,.7,.5]),Y(h,gt,"#f7bd3e",[0,-.5,-.15],[.55,.25,.78]);Y(t,Te,"#19b8ba",[0,1.12,0],[.7,.73,.46]),Y(t,gt,"#f4e9c8",[0,1.16,-.42],[.72,.55,.12]),Y(t,gt,"#ffb737",[0,.72,-.4],[.35,.12,.15]),Y(t,gt,"#20415f",[0,1.35,.5],[.65,.65,.35]);const s=new ut,r=[],a=new ut,o=new ut;t.add(s,a,o),Y(s,Te,"#ffca4b",[0,2.05,0],[.85,.8,.73]),Y(s,Te,"#152e55",[0,2.03,-.49],[.73,.48,.37]),r.push(Y(s,Te,"#71fff1",[-.25,2.08,-.81],[.085,.17,.045],!0),Y(s,Te,"#71fff1",[.25,2.08,-.81],[.085,.17,.045],!0)),Y(s,gt,"#fff1c8",[0,2.73,-.03],[.12,.16,.8]);for(const h of[-.84,.84]){Y(s,xe,"#e39c2f",[h,2.1,0],[.28,.19,.28]).rotation.z=Math.PI/2;const d=h<0?a:o;d.position.set(h,1.34,-.08),Y(d,Te,"#ffbc36",[0,0,0],[.27,.32,.28]),Y(d,Te,"#f8e7c5",[h*-.1,-.33,-.34],[.25,.24,.27])}const l=new ut;l.position.set(.6,1.2,-.55),t.add(l),Y(l,gt,"#295273",[0,0,-.3],[.4,.42,.9]),Y(l,xe,"#f6b936",[0,0,-.85],[.25,.5,.25]).rotation.x=Math.PI/2,Y(l,xe,"#7cfff0",[0,0,-1.13],[.18,.04,.18],!0).rotation.x=Math.PI/2,Y(l,gt,"#f8e8be",[0,.24,-.3],[.28,.12,.65]);const c=Y(l,Te,"#fff2b0",[0,0,-1.25],[.32,.32,.4],!0);return c.name="muzzle-flash",Li(i,"#72ffdc",0,.09,0,.8),jt.add(i),{root:i,body:t,left:e,right:n,gun:l,head:s,eyes:r,leftArm:a,rightArm:o}}const Ta=new Hx(jt),iu=new zx(jt),sd=new ix(jt),It=W_(),X_=new Nx(It.leftArm),Cl=new Wu,ur=Li(jt,"#ffe29a",0,.085,-2,1);ur.castShadow=!1;ur.visible=!1;Y(It.body,gt,"#197b90",[-.46,1.12,.02],[.12,.5,.7]);Y(It.body,gt,"#197b90",[.46,1.12,.02],[.12,.5,.7]);for(const i of[-.22,.22])Y(It.body,xe,"#8affeb",[i,1.28,.7],[.14,.7,.14],!0);const $_=Y(It.body,xe,"#ffc847",[0,1.19,-.5],[.14,.035,.14]);$_.rotation.x=Math.PI/2;for(const i of[-.62,.62]){const t=Y(It.body,xe,"#d88b24",[i,2.45,-.25],[.055,.03,.055]);t.rotation.x=Math.PI/2}Y(It.gun,gt,"#e38423",[-.21,.02,-.35],[.055,.25,.65]);Y(It.gun,gt,"#e38423",[.21,.02,-.35],[.055,.25,.65]);const ka=new ut;It.gun.add(ka);for(const i of[-.26,.26])Y(ka,xe,"#ee9340",[i,0,-.89],[.13,.48,.13]).rotation.x=Math.PI/2,Y(ka,xe,"#ffe1a0",[i,0,-1.15],[.105,.04,.105],!0).rotation.x=Math.PI/2;const Zc=Y(It.gun,Qi,"#b5a0ff",[0,0,-.76],[.35,.35,.35],!0),qs=new ut;It.body.add(qs);for(const i of[-.45,.45])Y(qs,xe,"#4cda97",[i,1.15,.63],[.18,.8,.18]);Y(qs,gt,"#d8ffe5",[0,1.23,-.56],[.26,.32,.06]);Y(qs,gt,"#39b77e",[0,1.23,-.6],[.18,.06,.03]);Y(qs,gt,"#39b77e",[0,1.23,-.6],[.06,.2,.03]);const ja=new ut;It.body.add(ja);Y(ja,xe,"#e3a643",[0,.83,.79],[.23,.45,.23]);Y(ja,gt,"#85ffe0",[0,.94,1.02],[.17,.15,.06],!0);const q_=Y(It.gun,Qi,"#ffe9a0",[0,0,-1.16],[.23,.23,.23]);q_.rotation.z=.1;const Y_=It.gun.children.filter(i=>i instanceof at&&i!==Zc&&i.name!=="muzzle-flash"),ks=new ut,Ys=new ut;It.gun.add(ks,Ys);Y(ks,gt,"#ad5e49",[0,0,-.3],[.62,.43,.9]);Y(ks,gt,"#f2c270",[0,-.22,-.55],[.55,.12,.38]);for(const i of[-.19,.19])Y(ks,xe,"#394558",[i,0,-.85],[.18,.55,.18]).rotation.x=Math.PI/2,Y(ks,Qi,"#ffe2a0",[i,0,-1.14],[.17,.17,.17]);Y(Ys,gt,"#5c5996",[0,0,-.35],[.45,.43,1]);Y(Ys,xe,"#2b435c",[0,0,-.85],[.22,.48,.22]).rotation.x=Math.PI/2;for(const i of[-.48,-.7,-.92])Y(Ys,Qi,"#93f9ed",[0,0,i],[.29,.29,.29],!0);Y(Ys,xe,"#d2baff",[0,0,-1.13],[.17,.06,.17],!0).rotation.x=Math.PI/2;const Z_=new fx(It.body,It.head,[It.left,It.right],[It.leftArm,It.rightArm]);Cl.apply(It.root);const K_=new Ux(It.root,It.head,Cl),Ja=[new ut,new ut,new ut];Ja.forEach(i=>jt.add(i));for(const i of[-9,9])for(const t of[-4,3]){const e=new ut;e.position.set(i,0,t),Ja[1].add(e),Y(e,xe,"#349785",[0,1.1,0],[.18,2.4,.18]);for(let n=0;n<5;n++){const s=n*Math.PI*2/5;Y(e,Te,"#f09fd1",[Math.cos(s)*.55,2.4,Math.sin(s)*.55],[.5,.2,.5])}Y(e,Te,"#ffdb59",[0,2.5,0],[.35,.2,.35])}for(const i of[-9,9])for(const t of[-4,3]){const e=new ut;e.position.set(i,0,t),Ja[2].add(e),Y(e,xe,"#38326b",[0,1.5,0],[.85,3.4,.85]);for(const n of[.3,1.5,2.8])Li(e,"#a08cff",0,n,0,.9);Y(e,xe,"#ffb963",[0,3.2,0],[.65,.4,.65],!0)}const Pl=new ut;jt.add(Pl);const rd=[];for(const i of[-9,9])for(const t of[-4,3]){const e=new ut;e.position.set(i,0,t),Pl.add(e),Y(e,xe,"#344668",[0,1.25,0],[.7,2.5,.7]),Y(e,gt,"#82a1b6",[0,2.65,0],[1.4,.35,.8]);const n=new ut;n.position.set(0,2.9,-.5),e.add(n);for(let s=0;s<3;s++){const r=new ut;r.rotation.z=s*Math.PI*2/3,n.add(r),Y(r,gt,"#c8dee0",[0,.7,0],[.23,1.25,.12])}Y(n,Te,"#81e4dc",[0,0,0],[.2,.2,.2],!0),rd.push(n)}const Ha=Li(jt,"#ffdd8b",0,.09,0,.4);Ha.castShadow=!1;Ha.visible=!1;const ws=new Map,su=new Fs(1,48),qo=new pe({color:"#ff6556",emissive:"#ff3020",emissiveIntensity:.9,roughness:1,transparent:!0,opacity:.2,depthWrite:!1}),Es=new Map,j_=new Ya({color:9502700,transparent:!0,opacity:.85}),ru=new is(.38),J_=new Sl({color:"#ffd253",emissive:"#6b3c04",emissiveIntensity:.15}),Aa=new Map,Q_=new ee({color:"#15364a",side:Ue}),dr=new Map,ad=new Map,od=new Map,Ts=new Map,Ra=new Map,fr=new Map,As=new Map;function au(i){const t=new ut;t.name="storm-barrier",i.add(t);const e=Y(t,Te,"#a18bff",[0,1.05,0],[1.12,1.15,1.12],!0),n=e.material.clone();n.transparent=!0,n.opacity=.22,n.depthWrite=!1,n.userData.ownedByRig=!0,e.material=n,e.name="storm-barrier-shell",e.castShadow=!1;const s=new ee({color:8650736,toneMapped:!1,transparent:!0,opacity:.9,depthWrite:!1});s.userData.ownedByRig=!0;for(const r of[Math.PI/2,.65]){const a=new at(new wn(1.13,.03,8,64),s);a.position.y=1.05,a.rotation.x=r,a.name="storm-barrier-rim",a.userData.ownedGeometry=!0,t.add(a)}t.visible=!1}function t1(i){const t=new ut;t.userData.enemyKind=i.kind;const e=i.kind==="boss",n=i.kind==="brute",s=e?"#ed734f":n?"#b596ec":i.kind==="gunner"?"#b580e5":"#f49a59",r=e?2:n?1.2:.85;if(t.scale.setScalar(r),e&&i.bossStyle==="storm"){Y(t,Te,"#4761a5",[0,.97,0],[.78,.72,.68]),Y(t,Te,"#152d58",[0,1.18,-.49],[.58,.45,.3]),Y(t,Te,"#acfff1",[0,1.25,-.85],[.23,.27,.045],!0).name="enemy-eye",Y(t,Te,"#243658",[0,1.25,-.92],[.085,.16,.025]),au(t);const u=Y(t,Qi,"#ae94f1",[0,.7,0],[1.08,1.08,1.08],!0);u.rotation.x=Math.PI/2,u.name="storm-orbit";for(const _ of[-1,1])Y(t,gt,"#7185c4",[_*.84,1.12,0],[.3,.6,.8]),Y(t,gt,"#c5b5f8",[_*.88,1.48,0],[.38,.15,.8]);Y(t,xe,"#70ece4",[0,.29,0],[.35,.12,.35],!0)}else{Y(t,Te,s,[0,.95,0],[.7,.75,.62]),Y(t,gt,"#273956",[0,1.2,-.5],[1,.3,.2]);for(const u of[-.25,.25])Y(t,gt,"#fff295",[u,1.2,-.63],[.12,.14,.05],!0).name="enemy-eye";for(const u of[-.5,.5])if(i.kind==="mite"){const _=Y(t,gt,"#28374b",[u,.25,0],[.18,.18,.85]);_.rotation.z=u*.5,Y(t,xe,"#ffcb6d",[u,.16,.2],[.14,.2,.14],!0)}else{if(i.kind!=="gunner"){const _=new ut;_.name=u<0?"enemy-leg-left":"enemy-leg-right",_.position.set(u,.7,0),t.add(_),Y(_,gt,"#334565",[0,-.3,0],[.35,.5,.5]),Y(_,gt,"#23364e",[0,-.58,-.08],[.43,.16,.72])}Y(t,Te,s,[u*.9,.8,0],[.25,.38,.3])}if(i.kind==="mite"&&(Y(t,gt,"#fff0b0",[0,1.69,0],[.12,.3,.12]),Y(t,Te,"#ff8258",[0,1.86,0],[.12,.12,.12],!0)),i.kind==="brute"){for(const u of[-.72,.72])Y(t,gt,"#655590",[u,1.12,0],[.65,.7,.85]),Y(t,gt,"#b9a0f1",[u,1.49,0],[.69,.13,.9]),Y(t,gt,"#75ffdf",[u,.68,-.47],[.45,.3,.28],!0);Y(t,gt,"#e8d3ff",[0,1.68,0],[.5,.16,.65])}if(i.kind==="gunner"){for(const u of[-.73,.73]){const _=new ut;_.position.set(u,.49,.08),_.rotation.z=Math.PI/2;const S=new ut;S.name=u<0?"enemy-wheel-left":"enemy-wheel-right",_.add(S),t.add(_),Y(S,xe,"#463765",[0,0,0],[.4,.25,.4]);for(let b=0;b<3;b++){const C=Y(S,gt,"#ddb6f3",[0,u<0?.14:-.14,0],[.6,.04,.08]);C.rotation.y=b*Math.PI/3}Y(t,gt,"#ddb6f3",[u,1.1,.1],[.24,.45,.55])}Y(t,gt,"#f3d1f7",[0,1.69,.2],[.32,.3,.5])}if(e){for(const u of[-.8,.8])Y(t,gt,"#813f48",[u,1.2,.02],[.65,.85,.95]),Y(t,gt,"#f8b250",[u,1.65,.02],[.7,.2,1]);for(const u of[-.4,0,.4])Y(t,gt,"#ffdb69",[u,1.98,0],[.16,u===0?.48:.3,.25]);Y(t,Te,"#ffe67d",[0,.62,-.66],[.23,.23,.12],!0),Y(t,gt,"#ffe5a4",[0,.96,-.66],[.65,.14,.1]),Y(t,gt,"#f5c644",[0,1.72,0],[1.2,.35,.5]);for(const u of[-.8,.8]){const _=Y(t,xe,"#263556",[u,1,-.4],[.28,.8,.28]);_.rotation.x=Math.PI/2,_.name="enemy-cannon-"+u}}else if(i.kind==="gunner"){const u=Y(t,xe,"#292e53",[0,.9,-.6],[.24,.6,.24]);u.rotation.x=Math.PI/2,u.name="enemy-cannon-0"}}if(i.kind==="gunner"&&(i.barrier??0)>0&&au(t),i.overcharge){Y(t,gt,"#ffc95f",[0,1.87,.2],[.48,.17,.55]);for(const u of[-.32,.32])Y(t,Te,"#83fff0",[u,1.8,.15],[.09,.09,.09],!0)}if(e&&i.bossStyle==="crown"){const u=Y(t,gt,"#eab65d",[0,.92,-.75],[1.25,.68,.12],!0);u.name="guard-shield",u.castShadow=!1;const _=u.material.clone();_.transparent=!0,_.userData.ownedByRig=!0,u.material=_;const S=Y(t,Qi,"#83ffdf",[0,.92,-.84],[.19,.19,.19],!0);S.name="crown-weak-core"}if(i.kind==="brute"){const u=Y(t,gt,"#62cce4",[0,.92,-.72],[1.18,.7,.09],!0);u.name="guard-shield",u.castShadow=!1;const _=u.material.clone();_.transparent=!0,_.userData.ownedByRig=!0,u.material=_}const a=new ut;a.name="enemy-body";const o=[...t.children];t.add(a),o.forEach(u=>a.add(u)),t.userData.spawnAge=0,t.userData.motion=new Yx,a.traverse(u=>{if(u instanceof at&&u.name.startsWith("enemy-cannon")){u.userData.restZ=u.position.z;const _=new at(Te,nd("#fff0a0",!0));_.name="enemy-muzzle-flash",_.position.y=-.5,_.scale.set(.8,.35,.8),_.visible=!1,_.userData.cosmeticOnly=!0,u.add(_)}});const l=[],c=[];a.traverse(u=>{u instanceof at&&u.name.startsWith("enemy-cannon")&&l.push(u),u.name==="enemy-muzzle-flash"&&c.push(u)}),t.userData.animated={body:a,left:a.getObjectByName("enemy-leg-left"),right:a.getObjectByName("enemy-leg-right"),wheels:[a.getObjectByName("enemy-wheel-left"),a.getObjectByName("enemy-wheel-right")].filter(Boolean),cannons:l,flashes:c},Cl.apply(a),a.traverse(u=>{u instanceof at&&!u.userData.cosmeticOnly&&(u.userData.aimEnemy=i.id)});const h=new ut;h.name="warning",t.add(h);const d=Li(h,"#ff6051",0,.075,0,1);d.name="danger-edge";const p=new at(su,qo);p.rotation.x=-Math.PI/2,p.position.y=.065,p.name="danger-disk",h.add(p);const f=Y(h,gt,"#ff6258",[0,.065,-2],[1,.025,4],!0);f.material=qo,f.name="attack-lane";const x=new at(su,qo);x.rotation.x=-Math.PI/2,x.position.y=.065,x.name="charge-end",h.add(x);const y=new ut;y.name="fan-rays",h.add(y);for(let u=0;u<18;u++){const _=Y(y,gt,"#ff7254",[0,.075,-4],[.045,.025,8],!0);_.name=String(u)}h.traverse(u=>{u instanceof at&&(u.castShadow=!1)});const v=Li(t,"#7ffff0",0,.1,0,1);return v.name="recovery-ring",v.castShadow=!1,jt.add(t),t}function e1(i,t,e,n){i.userData.spawnAge=Math.min(.3,(i.userData.spawnAge??0)+Math.max(0,n));const s=Math.min(1,i.userData.spawnAge/.3),a=(t.kind==="boss"||be.matches?1:.72+.28*Math.sin(s*Math.PI/2))*(t.kind==="boss"?2:t.kind==="brute"?1.2:.85)*(t.flash>0?1.08:1);i.position.set(t.x,t.kind==="boss"&&M.room===2&&!be.matches?Zu(M.intro,t.bossStyle==="storm").height:0,t.z),i.rotation.y=-(t.kind==="brute"?t.facing:d_(t,M.x,M.z)),i.scale.setScalar(a);const o=i.getObjectByName("storm-barrier");if(o){o.visible=(t.barrier??0)>0;const L=o.getObjectByName("storm-barrier-shell");L.material.opacity=t.shieldFlash>0?.48:.22,o.rotation.y=e*.7}const l=i.getObjectByName("guard-shield");if(l){const L=l.material;L.opacity=Er(t)?t.shieldFlash>0?1:.78:.13}const c=i.getObjectByName("crown-weak-core");c&&(c.visible=!Er(t));const h=i.getObjectByName("recovery-ring");h.visible=t.kind==="boss"&&t.recovery>0&&(t.barrier??0)<=0,h.scale.setScalar(1.8/a);const d=i.getObjectByName("warning");d.scale.setScalar(1/a),d.visible=t.tell>0;const p=d.getObjectByName("danger-edge"),f=d.getObjectByName("danger-disk"),x=d.getObjectByName("attack-lane"),y=d.getObjectByName("charge-end"),v=d.getObjectByName("fan-rays"),u=t.attack==="slam"||t.attack==="melee"||t.attack==="blink"||t.attack==="siege",_=t.attack==="rush";p.visible=u,f.visible=u||_,x.visible=_,y.visible=_,v.visible=t.attack==="fan"||t.attack==="ring";const S=_?t.kind==="boss"?Be.rush.radius:1.25:Be[t.attack].radius;if(p.scale.setScalar(S),f.scale.set(S,S,1),p.position.set(0,.075,0),f.position.set(0,.065,0),t.attack==="blink"||t.attack==="siege"){const L=p_(t,i.rotation.y);p.position.set(L.x,.075,L.z),f.position.set(L.x,.065,L.z)}if(_&&(x.position.z=-t.rushDistance/2,x.scale.set(S*2,.025,t.rushDistance),y.position.z=-t.rushDistance,y.scale.set(S,S,1)),t.attack==="fan"||t.attack==="ring"){const L=$c(t);v.children.forEach((N,B)=>{N.visible=B<L.length;const k=L[B]??0,W=f_(t.x,t.z,t.aim+k),$=wr(t,{x:t.x+Math.sin(t.aim+k)*W,z:t.z-Math.cos(t.aim+k)*W},M.covers,M.barrels),V=W*($?.t??1);N.position.set(Math.sin(k)*V/2,.075,-Math.cos(k)*V/2),N.scale.z=V,N.rotation.y=-k})}const b=i.getObjectByName("storm-orbit");b&&(b.rotation.z=e*.8);const C=i.userData.motion,m=C.update(n,t,e),T=i.userData.animated,D=T.body,E=t.kind==="boss"?m.strike*.12:0;D.position.y=m.bob-m.brace-E+(t.kind==="mite"?m.strike*.08:0),D.rotation.x=-m.lean-m.strike*.12;const g=T.left,R=T.right;g&&(g.rotation.x=m.stride,g.position.y=.7+m.brace+E),R&&(R.rotation.x=-m.stride,R.position.y=.7+m.brace+E);for(const L of T.wheels)L.rotation.y=m.wheel,L.parent&&(L.parent.position.y=.49-m.bob);for(const L of T.cannons)L.position.z=L.userData.restZ+m.recoil*.12;for(const L of T.flashes)L.visible=m.recoil>.6}function da(i,t){const e=new Set(t.map(n=>n.id));for(const[n,s]of i)e.has(n)||(Os(s),i.delete(n))}const Hs=document.createElement("div");Hs.className="boss-finish-readout";Hs.hidden=!0;Zn.append(Hs);function n1(){cr.reset(),Hs.hidden=!0,ad.clear(),od.clear(),Ea.clear();for(const i of[Ts,Ra,fr,dr,Aa])Cx(i);for(const i of As.values())Os(i.mesh),i.label.remove();As.clear();for(const i of Es.values())i.removeFromParent(),i.geometry.dispose();Es.clear();for(const i of ws.values())i.remove();ws.clear(),ju.update(null)}function fa(i,t,e){const n=new U(i,t,e).project(yn);return{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2}}let $n=null,Ps=!0,Vt=1,ii=-1,Ca=-1,Kc=-1,jc=-1;const li=new T_,Ye=new w_;let Vs=null,Xn=!1,ri=null,Ei=0,Ai=null,Fn=ax((()=>{try{return localStorage.getItem(Xu)}catch{return null}})());Zt.setMusicVolume(Fn.music);Zt.setEffectsVolume(Fn.effects);Zt.setVolume(Fn.muted?0:1);function cd(){Fn={...Fn,muted:Pi};try{localStorage.setItem(Xu,JSON.stringify(Fn))}catch{}}let De=new Set,Yi=!1,Va=!1,Ar=!1,Ke,hi={x:0,z:0},Rr=null,Jc={x:0,y:0},je="",Qc=-1,tl=0,el=0,nl=150,il=new Set,Pi=Fn.muted,tt=Ku(null);try{tt=Ku(localStorage.getItem("reactor-rush.campaign.v1"))}catch{}Vt=C_(tt);M.chapter=Vt;let Qe=tt.equippedWeapon,rn=tt.equippedOutfit,bn=null;const Ti=[{id:"recharge",icon:"↻",title:"리턴 코일",desc:"3발 이상 모아 반격하면 포획 재사용 대기 −3초"},{id:"aftershock",icon:"✹",title:"회피폭탄",desc:"회피한 자리에 폭탄 · 0.75초 뒤 주변 적에게 90 피해"},{id:"scatter",icon:"⋔",title:"산탄 블래스터",desc:"3갈래 산탄으로 넓게 쓸어버립니다."},{id:"ricochet",icon:"ϟ",title:"체인 라이트닝",desc:"사격과 포획 반격이 주변 적에게 최대 3번 이어집니다."},{id:"vampire",icon:"♥",title:"리페어 엔진",desc:"사격·반격 처치 시 체력 +8 · 최대 체력 +30"}];function Dt(i,t,e="",n=!1){return`<button data-action="${i}" class="${e}"${n?" disabled":""}>${t}</button>`}function sl(i,t=[],e=!1){return`<div class="mastery-medals">${za.map((n,s)=>`<span class="${i[s]?"earned":""} ${t[s]?"new-medal":""}" title="${e?n.id==="clear"?"보스 재대결 승리":n.id==="dodge"?"재대결에서 퍼펙트 회피 3회 후 승리":"피해 없이 보스 재대결 승리":n.condition}"><b>${n.icon}</b><small>${t[s]?"NEW · ":""}${e&&n.id==="clear"?"제압":n.title}</small></span>`).join("")}</div>`}function i1(){return'<div id="boss-arrival"><small>FINAL BOSS</small><h2>'+Bs[M.chapter].boss+"</h2><p>"+(M.chapter===1?"탄막 · 강타 · 돌진을 피하고 빈틈에 반격":"착지 원과 남은 전기장 회피 · 방패는 포획 반격!")+"</p>"+Dt("skip-boss","결전 시작 →","boss-arrival-skip")+"</div>"}let s1=0;function ld(){Qa=0,ts.react();const i=Vt===1?["폭발통을 먼저 노려보자!","철갑왕이 공격을 끝내면, 우리 차례야.","준비됐어. 공중섬을 되찾자!"]:["바닥이 빛나면 안전한 곳으로!","착지 표시 밖으로 빠지자.","폭풍의 눈에도 빈틈은 있어!"];ot.querySelector(".hero-speech")?.remove();const t=document.createElement("div");t.className="hero-speech",t.setAttribute("role","status"),t.textContent=i[s1++%i.length],ot.append(t),t.addEventListener("animationend",()=>t.remove())}let Cr=!1,Ga;function hd(){Va=!0,Ga={x:(De.has("KeyD")||De.has("ArrowRight")?1:0)-(De.has("KeyA")||De.has("ArrowLeft")?1:0)+hi.x,z:(De.has("KeyS")||De.has("ArrowDown")?1:0)-(De.has("KeyW")||De.has("ArrowUp")?1:0)+hi.z}}let Qa=0,hn=null;function Zs(){hn=null,Cr=!1,Ga=void 0,De.clear(),Yi=!1,Xn=!1,ri=null,Ai=null,Ei=0,Vs=null,li.cancel(),Va=!1,Ar=!1,Ke=void 0,hi={x:0,z:0},Rr=null}let Wa=!1,xn="counter";const Kt=new e_;function to(){yi.reset(),n1(),bi.reset(),td.reset(),Zs(),M.start(Vt,Qe,Yu(tt.runs),Wa,xn),Ye.reset(),ii=-1,Ca=-1,ts.reset(M.x,M.z),il.clear(),el=0,tl=0,nl=M.hp,je="",sn()}function ou(){if(matchMedia("(prefers-reduced-motion: reduce)").matches){to();return}Kt.begin()&&(M.home(),Zs(),ts.react(.5),Zt.play("core"),ot.className="departing",ot.innerHTML=`<div class="departure-bars"></div><section class="departure-caption"><small>${Wa?"보스 재대결 · "+In[xn].title:"리액터 수호대 · 출전"}</small><h2>${Bs[Vt].title}</h2><p>${We[Qe].icon} ${We[Qe].name} · ${Vt===1?"철갑왕":"스톰아이"}에게 도전</p><div class="departure-meter"><i></i></div><b id="departure-cue">장비 준비 완료</b></section><div class="departure-actions">${Dt("cancel-departure","로비로","secondary")}${Dt("skip-departure","바로 출전 →","secondary")}</div>`)}function eo(){Kt.active&&(Kt.cancel(),Zs(),M.home(),je="",sn())}function ud(){bn=null;const i=ot.querySelector(".hero-name>span");i&&(i.textContent=dn[rn].name+" · 공격형")}function Yo(){ot.querySelector(".wardrobe-overlay")?.remove();const i=bn??rn,t=dn[i],e=Sr(i,tt.chapterWins),n=ot.querySelector(".hero-name>span");n&&(n.textContent=t.name+(bn?" · 미리보기":" · 공격형"));const s=document.createElement("div");s.className="wardrobe-overlay",s.innerHTML=`<section class="wardrobe-panel"><small>${Mn[tt.equippedTitle].label} · 루크</small><h2>나의 출전 외형</h2><p>탈환한 챕터의 전리품으로 루크를 꾸며보세요.</p><div class="outfit-cards">${Object.keys(dn).map(r=>{const a=dn[r];return Dt("outfit-preview-"+r,`<span style="--outfit-color:${a.color}">${a.icon}</span><div><b>${a.name}</b><small>${rn===r?"✓ 장착 중":Sr(r,tt.chapterWins)?"획득 완료":"🔒 "+a.unlock}</small></div>`,"outfit-card"+(i===r?" selected":""))}).join("")}</div><div class="outfit-detail"><b>${t.name}</b><span>${e?"획득한 외형":t.unlock+" 보상"}</span><small>외형을 바꿔도 전투 능력은 같습니다.</small></div>${Dt("wear-outfit",e?rn===i?"장착 중":"이 외형 장착":"챕터 탈환 후 개방","launch",!e||rn===i)}${Dt("close-wardrobe","닫기","secondary")}</section>`,ot.append(s)}function dd(i){Zt.play(i==="pump"?"pump-shot":i==="arc"?"arc-shot":"shot",.7)}function Zo(i=0){ot.querySelector(".armory-overlay")?.remove();const t=document.createElement("div");t.className="armory-overlay",t.innerHTML=`<div class="modal armory"><small>수호대 무기고</small><h2>이번 원정의 한 발.</h2><p>무기를 장착하면 첫 구역부터 사격 방식이 달라집니다.</p><div class="weapon-cards">${Object.keys(We).map(e=>{const n=We[e],s=Xs(e,tt.chapterWins);return Dt("equip-"+e,`<span class="weapon-picture">${Wc(e)}</span><b>${n.name}</b><p>${n.description}</p><div>탄환 피해 ${n.damage} · 발사 ${n.cooldown}초 · 사거리 ${n.range}<br>탄창 ${Cn} · 1발 재충전 ${Ma[e]}초</div><small>${s?Qe===e?"장착 중":"장착하고 출전":"🔒 "+n.unlock}</small>`,"weapon-card"+(Qe===e?" equipped":""),!s)}).join("")}</div><div class="armory-previews"><small>원정 중 얻는 진화</small>${Dt("preview-base","기본",$n===null?"preview-active":"")}${Ti.map(e=>Dt("preview-"+e.id,e.icon+" "+e.title,$n===e.id?"preview-active":"")).join("")}</div><div class="armory-actions">${Dt("preview-shot",Pi?"소리를 켜면 미리 들을 수 있어요":"사격 소리 미리 듣기","secondary",Pi)}${Dt("close-armory","닫기","secondary")}</div></div>`,ot.append(t),t.querySelector(".armory").scrollTop=i}function cu(i){if(Xs(i,tt.chapterWins)){Qe=i,Qa=0,Ju.equip(),tt={...tt,equippedWeapon:i};try{localStorage.setItem("reactor-rush.campaign.v1",JSON.stringify(tt))}catch{}$n=null,je=""}}function lu(i){ts.react(.7),ot.querySelector(".hero-speech")?.remove();const t=document.createElement("div");t.className="hero-speech",t.setAttribute("role","status"),t.textContent=i,ot.append(t),t.addEventListener("animationend",()=>t.remove())}function sn(){if(qc.hidden=M.phase==="paused",Kt.active)return;const i=Ba(tt,Vt),t=M.phase;if(t!==je||M.room!==Qc){if(Zs(),je=t,Qc=M.room,ot.className=t,t==="lobby")ot.innerHTML=`<header class="base-header"><div class="brand">REACTOR<span>RUSH</span></div><div class="pilot-profile"><b style="background:${Mn[tt.equippedTitle].color}">${Mn[tt.equippedTitle].icon}</b><span>루크 · 리액터 수호대<small>${Mn[tt.equippedTitle].label} · 루크</small></span></div><div class="lobby-counts"><span>✦ <b>${tt.clears}</b><small>탈환</small></span><span>⚑ <b>${tt.clearedRoutes.length}/8</b><small>탐사</small></span></div><div class="top-tools">${Dt("sound",Pi?"♪ OFF":"♪ ON")}${Dt("help","?")}</div></header><div class="base-rail"><nav class="base-menu" aria-label="기지 메뉴">${Dt("wardrobe",ha("wardrobe")+"<span>수호대원</span>")}${Dt("armory",ha("armory")+"<span>무기고</span>")}${Dt("mission-map",ha("map")+"<span>작전 지도</span>")}${Dt("records",ha("records")+"<span>훈장 기록</span>")}</nav><aside class="operation-brief"><small>수호대 미션</small>${Dt("mission-target",i.headline,"mission-target")}<p>${i.reward}</p><div><i style="width:${i.recovered/i.total*100}%"></i></div><span>${i.recovered} / ${i.total} 경로 확보</span></aside></div><aside class="hero-name"><span>${dn[rn].name} · 공격형</span>${Dt("hero-react","루크","hero-react")}<p>드래그로 회전 · 눌러서 인사</p></aside><nav class="equipment-preview" aria-label="출전 무기"><small>장착 무기</small><div>${Dt("armory",We[Qe].icon+" "+We[Qe].name,"selected")}</div><p>${We[Qe].role} · 장비 변경 ↗</p></nav><section class="campaign"><div class="eyebrow">SOLO EXPEDITION · CHAPTER ${Vt.toString().padStart(2,"0")}</div><h1>${Bs[Vt].title}</h1><p>적탄을 모아 되쏘는 싱글플레이 원정</p>${Dt("mission-map",`<span class="mission-art art-${Vt}"><img src="./assets/mission-postcards-v1.png" alt="" draggable="false" decoding="async"></span><span class="poster-meta"><small>원정 지도 ↗</small><b>최종 타깃 · ${Vt===1?"철갑왕":"스톰아이"}</b></span>`,"mission-poster")}<div class="chapter-selector">${Dt("chapter-1",'<span class="chapter-art art-1"><img src="./assets/mission-postcards-v1.png" alt="" draggable="false" decoding="async"></span><span class="chapter-label">01 공중섬</span>',"chapter-pick"+(Vt===1?" selected":""))}${Dt("chapter-2",'<span class="chapter-art art-2"><img src="./assets/mission-postcards-v1.png" alt="" draggable="false" decoding="async"></span><span class="chapter-label">'+(Ss(2,tt.chapterWins[1])?"02 발전소":"🔒 발전소")+"</span>","chapter-pick"+(Vt===2?" selected":""),!Ss(2,tt.chapterWins[1]))}</div>${Dt("start","출전 <span>➜</span>","launch")}${tt.chapterWins[Vt]>0?Dt("boss-rematch",`♛ 보스 재대결 <small>강화 보스 · 전략 선택 · ${tt.rematches[Vt].wins}승${tt.rematches[Vt].fastest===null?"":" · "+tt.rematches[Vt].fastest.toFixed(1)+"초"}</small>`,"boss-rematch-link"):"<small>3개 구역 · 진화 2회 · "+qh[Yu(tt.runs)]+"</small>"}</section><footer class="reward-road">${Dt("records",`<span>수호대 보상</span><b>✦ ${tt.clears}회 탈환</b><span class="trophy-badges">${[1,2].filter(e=>tt.chapterWins[e]>0).map(e=>sx(e)).join("")}</span>`,"road-title")}<div class="road-items">${Object.keys(We).map((e,n)=>{const s=We[e],r=Xs(e,tt.chapterWins);return(n?"<i>›</i>":"")+Dt("reward-"+e,`<b class="weapon-picture">${Wc(e)}</b><span>${s.name}</span><small>${Qe===e?"✓ 장착 중":r?"눌러서 장착":s.unlock}</small>`,"road-item"+(r?" earned":"")+(Qe===e?" selected":""))}).join("")}</div></footer>`;else if(t==="combat")ot.innerHTML=`<div class="run-top"><div class="stage-label"><small>${M.rematch?"보스 재대결":"구역 "+(M.room+1)+" / 3"}</small><b>${M.encounter.title}</b></div><div class="hp"><span>♥ <b id="hp-number"></b></span><div><i id="hp-bar"></i></div><section class="primary-ammo" aria-label="무기 탄창"><i><b></b></i><i><b></b></i><i><b></b></i></section></div>${Dt("auto-shoot",Ps?"자동 사격 ON":"자동 사격 OFF","auto-shoot-button")}${Dt("pause","Ⅱ")}</div><div id="boss-hud"></div><div id="boost-hud"></div><div id="hazard-hud"></div><div id="cell-hud"></div><div id="super-range-hud"></div><div id="magnet-hud"></div>${i1()}<div class="wave-line" id="wave-line"></div><div class="room-intro" id="room-intro"><small>${M.rematch?"보스 재대결":"구역 "+(M.room+1)}</small><h2>${M.encounter.title}</h2><p>${M.encounter.subtitle}</p></div><div class="combat-bottom"><div class="move-pad" aria-label="이동 조이스틱"><i>✥</i></div><div class="loadout">${M.evolutions.map(e=>`<span title="${Ti.find(n=>n.id===e).title}">${Ti.find(n=>n.id===e).icon}</span>`).join("")}<small>${We[M.weapon].name}</small></div><div class="actions">${Dt("dash",'<b>↝</b><small id="dash-text">회피</small>',"dash-button")}${Dt("magnet",'<svg class="capture-ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" class="capture-track"/><circle cx="50" cy="50" r="46" pathLength="100" stroke-dasharray="100" id="capture-progress"/></svg><span>⦿</span><b id="magnet-text">포획</b><i id="resonance-meter" aria-label="공명 충전"></i>',"magnet-button")}${Dt("super",'<b>✦</b><small id="super-text">0%</small>',"super-button")}${Dt("fire",'<b>◎</b><small id="ammo-text">공격</small>',"fire-button")}</div></div>`;else if(t==="upgrade")Kc=te,ts.react(.9),Zt.play("win",.45),ot.innerHTML=`<div class="sector-clear"><small>구역 ${M.room+1} · ${M.encounter.title}</small><div class="sector-badge">✦</div><h2>구역 탈환!</h2><p>진화를 선택하면 체력 +40</p>${Dt("show-evolutions","진화 바로 선택 →","sector-skip")}</div><div class="modal evolution"><small>구역 클리어 · 진화 선택 시 체력 +40</small><h2>한 단계 더 강하게.</h2><p>다음 구역에서 사용할 무기 진화를 선택하세요.</p><div class="evolution-cards">${Ti.filter(e=>!M.evolutions.includes(e.id)).map(e=>Dt(e.id,`<span class="evolution-picture">${hx(e.id,M.weapon)}</span><b>${e.title}</b><p>${e.id==="scatter"?lx(M.weapon)+" · 포획 반격도 2갈래 / 한 발 45 피해":e.id==="recharge"?dx():e.desc}</p><em>${ux(e.id,M.weapon,M.evolutions)}</em><small>이 진화 장착 →</small>`,"evolution-card evo-"+e.id)).join("")}</div>${Dt("home","원정 종료 · 로비로","secondary")}</div>`,be.matches&&ot.classList.add("evolution-ready");else if(t==="route")ot.innerHTML=`<div class="modal route-choice"><small>구역 ${M.room+1} 클리어 · 다음 구역 ${M.room+2}</small><h2>다음 작전을 선택하세요</h2><div class="expedition-track" aria-label="원정 진행">${[0,1,2].map(e=>`<div class="${e<=M.room?"secured":e===M.room+1?"choosing":"ahead"}"><b>${e<=M.room?"✓":e===M.room+1?"?":"♛"}</b><span>${e===0?M.chapter===1?"햇살 부두":"바람 관문":e<=M.room?oi[M.routeHistory[e-1]].title:e===M.room+1?"경로 선택":"최종 결전"}</span></div>`).join("")}</div><p>장착한 진화와 어울리는 전투를 골라보세요.</p><div class="route-loadout">${M.evolutions.map(e=>`<span>${Ti.find(n=>n.id===e).icon} ${Ti.find(n=>n.id===e).title}</span>`).join("")}<span>♥ ${Math.ceil(M.hp)} / ${M.maxHp}</span></div><div class="route-branches">${M.routeOptions.map(e=>Dt("route-"+e.id,`<span class="route-symbol">${e.icon}</span><small>${e.room===1?"탐사 구역":"최종 결전"} · ${e.waves.length}번의 전투</small><b>${e.title}</b><div class="route-roster">${["gunner","brute","mite","boss"].map(n=>{const s=e.waves.flat().filter(r=>r===n).length;return s?`<span class="roster-${n}"><i>${n==="gunner"?"◎":n==="brute"?"▣":n==="boss"?"♛":"◆"}</i>${n==="gunner"?"포대":n==="brute"?"돌진병":n==="boss"?"보스":"봇"} ${s}</span>`:""}).join("")}</div><p>${e.description}</p><strong>${e.advantage}</strong><em>${tt.chapterWins[M.chapter]>0&&i.next===e.id?"✦ 이번 미션 경로":tt.clearedRoutes.includes(e.id)?"탈환한 경로":"아직 탈환하지 않은 경로"}</em><span class="route-enter">이 길로 출발 →</span>`,"route-card"+(tt.chapterWins[M.chapter]>0&&i.next===e.id?" current-goal":""))).join("")}</div>${Dt("home","원정 종료 · 로비로","secondary")}</div>`;else if(t==="paused")ot.innerHTML=`<div class="modal"><small>잠시 쉬어가기</small><h2>모험 일시정지</h2><div class="pause-audio">${["music","effects"].map(e=>`<label><span>${e==="music"?"음악":"효과음"}</span><output id="audio-${e}-value">${Math.round(Fn[e]*100)}%</output><input type="range" min="0" max="100" step="5" value="${Math.round(Fn[e]*100)}" data-audio="${e}" aria-label="${e==="music"?"음악 음량":"효과음 음량"}"></label>`).join("")}${Dt("sound",Pi?"♪ 전체 소리 켜기":"♪ 전체 소리 끄기","audio-mute")}</div>${Dt("resume","계속하기","launch")}${Dt("home","로비로 돌아가기","secondary")}</div>`;else{const e=t==="victory",n={seconds:M.clock,damageTaken:M.damageTaken,perfectDodges:M.perfectDodges},s=M.rematch?P_(tt,e,M.chapter,n,xn):A_(tt,e,M.room,M.chapter,M.routeHistory,n),r=M.rematch?{headline:s.rematchBuildRecords[M.chapter][xn].clean?"최단 재대결 기록에 도전하세요":"피해 없이 보스 재대결에 승리하세요",reward:"일반 원정 기록과 별도로 저장됩니다"}:Ba(s,M.chapter),a=Object.keys(Mn).filter(f=>!br(tt,f)&&br(s,f)),o=Rl(e,n),l=M.rematch?[tt.rematchBuildRecords[M.chapter][xn].wins>0,tt.rematchBuildRecords[M.chapter][xn].bestPerfect>=3,tt.rematchBuildRecords[M.chapter][xn].clean]:Oa(tt,M.chapter),c=o.map((f,x)=>f&&!l[x]),h=(M.rematch?tt.rematchBuildRecords[M.chapter][xn]:tt.chapterRecords[M.chapter]).fastest,d=e&&(h===null||M.clock<h),p=e&&!M.rematch?M.chapter===1&&tt.chapterWins[1]===0?"펌프 샷건 + 철갑왕의 전리품 외형":M.chapter===2&&tt.chapterWins[2]===0?"아크 관통포 + 폭풍 항해사 외형":null:null;ot.innerHTML=`${e?`<div class="victory-callout"><span>✦</span><b>${M.rematch?"보스 제압!":M.chapter===2?"발전소 재가동!":"공중섬 전력 복구!"}</b>${Dt("show-result","결과 바로 보기 →","victory-skip")}</div>`:`<div class="ko-callout"><b>루크 다운</b>${Dt("show-result","결과 바로 보기 →","victory-skip")}</div>`}<div class="modal result"><div class="result-icon">${e?"✦":"↻"}</div><small>${M.rematch?"BOSS REMATCH":e?"REACTOR RECOVERED":"다음 도전을 위한 한 걸음"}</small><h2>${e?M.rematch?"재대결 승리!":M.chapter===2?"폭풍 제압!":"리액터 탈환!":"다시 도전할 시간!"}</h2><p>${e?M.rematch?In[xn].title+" 구성으로 보스를 제압했습니다.":M.chapter===2?"스톰아이를 멈추고 발전소를 되찾았습니다.":"루크가 공중섬의 불빛을 되찾았습니다.":Zh[M.lastDamageCause].tip}</p>${e?"":`<div class="defeat-cause">${Zh[M.lastDamageCause].title}</div>`}${p?`<div class="first-rewards"><small>첫 탈환 보상 · 획득 완료</small><div><article><span class="weapon-picture">${Wc(M.chapter===1?"pump":"arc")}</span><b>${We[M.chapter===1?"pump":"arc"].name}</b><p>새 출전 무기</p></article><article><span style="background:${dn[M.chapter===1?"crown":"tempest"].color}">${dn[M.chapter===1?"crown":"tempest"].icon}</span><b>${dn[M.chapter===1?"crown":"tempest"].name}</b><p>새 수호대 외형</p></article></div>${Dt("claim-reward","새 보상 장착 · 다음 원정 준비 →","reward-equip")}</div>`:""}<div class="result-formation">${qh[M.formation]}</div><div class="result-path">${M.routeHistory.map(f=>oi[f].title).join(" → ")}</div><div class="result-stats"><span><b>${M.kills}</b>처치</span><span><b>${Math.floor(M.clock)}초</b>${M.rematch?"재대결 시간":"모험 시간"}</span><span><b>${M.rematch?"보스":M.room+1+"/3"}</b>${M.rematch?"재대결":"도달 구역"}</span><span><b>${M.perfectDodges}</b>퍼펙트 회피</span><span><b>${M.magnet.captured}</b>포획 탄환</span><span><b>${M.cellsCollected}</b>셀 회수</span><span><b>${Math.round(M.damageTaken)}</b>받은 피해</span></div>${e?sl(o,c,M.rematch):""}${a.length?`<div class="new-title-reward"><small>새 칭호 획득!</small><b>${a.map(f=>Mn[f].icon+" "+Mn[f].label).join(" · ")}</b><span>로비의 훈장 기록에서 장착하세요</span></div>`:""}${e?`<div class="run-record-comparison"><span>${M.rematch?d?"✦ "+In[xn].title+" 새 기록":In[xn].title+" 최단 기록":d?"✦ 새 최단 탈환 기록":"이 챕터 최단 기록"}</span><b>${(d?M.clock:h??M.clock).toFixed(1)}초</b><small>${!d&&h!==null?(M.rematch?"이번 재대결은 기록보다 ":"이번 원정은 기록보다 ")+(M.clock-h).toFixed(1)+"초 늦었어요":"수호대 기록에 저장했어요"}</small></div><div class="result-next-goal"><small>${M.rematch?"이 구성의 다음 도전":"이 챕터의 다음 도전"}</small><b>${r.headline}</b><p>${r.reward}</p>${r.headline.includes("회피 달인")?`<span>이번 원정 ${M.perfectDodges} / 3회 · 위험 표시가 뜰 때 방향 회피</span>`:""}</div>`:""}${e&&!M.rematch&&M.chapter===1?Dt("next-chapter","다음 원정 · 폭풍 발전소 →","launch"):Dt("start",M.rematch?"보스 재대결 다시 도전":e?"다시 모험하기":"다시 도전하기","launch")}${e&&!M.rematch&&M.chapter===1?Dt("start","같은 원정 다시 도전","secondary"):""}${Dt("home","로비로","secondary")}</div>`,tt=s;try{localStorage.setItem("reactor-rush.campaign.v1",JSON.stringify(tt))}catch{}Zt.play(e?"win":"lose")}Zt.setScene(t==="combat"?"playing":t==="lobby"?"lobby":t==="paused"?"paused":"results"),Zt.setBossBattle(t==="combat"&&M.room===2),t==="combat"&&Zt.play(M.room===2?"boss":"wave")}if(t==="combat"){ot.classList.toggle("secured-finish",M.securedClear);const e=ot.querySelector("#magnet-hud");e.textContent=M.intro<=0&&M.resonance.ready?M.magnet.active?"공명 준비 · 모은 탄을 발사하세요":"공명 준비! · 다음 반격 피해 ×1.6":M.intro>0?"전투 준비 중 · 적탄이 다가오면 포획하세요":M.magnet.active?M.magnet.stored>0?"포획 "+M.magnet.stored+"/12발 · "+(!Ke&&(M.magnetTarget()?.barrier??0)>0?"방패 조준 · ":"")+"다시 눌러 반격":"적탄을 모으는 중 · "+M.magnet.remaining.toFixed(1)+"초":M.magnet.lastRefund&&M.magnet.cooldown>0?"리턴 코일 발동 · "+M.magnet.cooldown.toFixed(1)+"초 뒤 다시 포획":M.magnet.lastEmpty&&M.magnet.cooldown>0?"적탄이 다가올 때 포획하세요 · "+M.magnet.cooldown.toFixed(1)+"초 뒤 재시도":M.room===0&&M.enemies.some(f=>f.kind==="gunner"&&(f.barrier??0)>0)?"포획 방패 · 붉은 적탄을 모아 되쏘세요":M.room===0&&M.magnet.captured===0?"이동하며 포획 → 적탄 모으기 → 다시 눌러 반격":M.resonance.charge>0?"공명 "+M.resonance.charge+"/6 · 적탄 명중으로 강화 반격":"";const n=ot.querySelector(".magnet-button"),s=cx(M.magnet,M.intro>0);n.dataset.captureMode=s.mode,ot.querySelector("#capture-progress").setAttribute("stroke-dashoffset",String((1-s.progress)*100));const r=ot.querySelector("#resonance-meter");r.dataset.charge!==String(M.resonance.charge)&&(r.dataset.charge=String(M.resonance.charge),r.setAttribute("aria-label","공명 충전 "+M.resonance.charge+"/6"),r.innerHTML=Array.from({length:6},(f,x)=>'<em class="'+(x<M.resonance.charge?"filled":"")+'"></em>').join("")),n.disabled=M.intro>0,n.classList.toggle("holding",M.magnet.active),n.classList.toggle("resonant",M.resonance.ready),n.classList.toggle("ready",!M.magnet.active&&M.magnet.cooldown===0),ot.querySelector("#magnet-text").textContent=M.intro>0?"준비 중":M.magnet.active?M.magnet.stored>0?"발사 ×"+M.magnet.stored:"모으는 중":M.magnet.cooldown>0?M.magnet.cooldown.toFixed(1)+"s":innerWidth<=700?"포획":"포획 Q";const a=M.room===2&&M.intro>0;ot.classList.toggle("boss-intro",a),ot.querySelector("#boss-arrival").classList.toggle("active",a),ot.querySelector("#ammo-text").textContent=M.ammo.stored+"/"+Cn,ot.querySelector(".fire-button").setAttribute("aria-label","공격 · 탄창 "+M.ammo.stored+"/"+Cn),ot.querySelectorAll(".primary-ammo b").forEach((f,x)=>f.style.width=(x<M.ammo.stored?1:x===M.ammo.stored?M.ammo.progress:0)*100+"%"),ot.querySelector("#hp-number").textContent=`${Math.ceil(M.hp)} / ${M.maxHp}`,ot.querySelector("#hp-bar").style.width=`${M.hp/M.maxHp*100}%`,ot.querySelector("#wave-line").textContent=M.spawnIn>0?M.wave+1<M.encounter.waves.length?M.incomingWave.length?"다음 적 "+M.incomingWave.length+"명 · 보라색 표시에 등장":"다음 적 무리 접근!":"구역 확보!":`${M.room===2?"최종 보스":`전투 ${M.wave+1} / ${M.encounter.waves.length}`} · 남은 적 ${M.remaining}`,ot.querySelector("#room-intro").style.opacity=M.intro>0?"1":"0";const o=M.stormPatches.some(f=>f.pulse<.3&&Math.hypot(f.x-M.x,f.z-M.z)<Hn.radius)||S_(M,M.enemies,M.shots,M.hazards.live,{covers:M.covers,barrels:M.barrels});ot.querySelector(".dash-button").classList.toggle("opportunity",o),ot.querySelector("#dash-text").textContent=M.dash>0?`${M.dash.toFixed(1)}s`:o?"지금 회피!":"회피",ot.querySelector("#super-text").textContent=M.charge>=100?"필살기!":`${Math.floor(M.charge)}%`,ot.classList.toggle("has-cells",M.cells.length>0),ot.querySelector("#cell-hud").textContent=M.cells.length?`◆ 셀 ${M.cells.length} · 체력 +3 · 탄 +1 · 충전 +12`:"";const l=M.hazards.live[0],c=ot.querySelector("#hazard-hud");c.textContent=l?l.phase==="warning"?`바닥 충전 · ${l.remaining.toFixed(1)}초 뒤 활성`:"바닥 활성 · 표시 구역에서 벗어나세요":"",c.classList.toggle("active",!!l);const h=ot.querySelector("#boost-hud");h.textContent=M.boost>0?`탄막 탈취 · 탄환 피해 +30% · ${M.boost.toFixed(1)}초`:"",h.classList.toggle("active",M.boost>0),ot.querySelector(".auto-shoot-button").textContent=Ps?"자동 사격 ON":"자동 사격 OFF",ot.querySelector(".auto-shoot-button").classList.toggle("active",Ps);const d=Sx(M.x,M.z,M.enemies);ot.querySelector("#super-range-hud").textContent=M.charge>=100&&(M.room!==2||M.intro<=0)?d>0?"필살기 범위 안 "+d+"명 · "+(innerWidth<=700?"별 버튼으로 제압!":"E로 제압!"):M.enemies.length===0?"필살기 준비 완료":"필살기 준비 · 적에게 접근하거나 탄막을 지우세요":"",ot.querySelector(".super-button").classList.toggle("ready",M.charge>=100);const p=M.boss;ot.classList.toggle("storm-shield",(p?.barrier??0)>0),ot.classList.toggle("crown-battle",p?.bossStyle==="crown"),ot.querySelector("#boss-hud").innerHTML=p?`${p.bossStyle==="crown"&&Er(p)?'<small class="crown-armor-label">'+(p.overloaded?"과부하 철갑 · 포획 반격으로 관통!":"정면 철갑 · 포획 반격으로 관통!")+"</small>":p.overloaded?'<small class="crown-overload-label">철갑왕 과부하 · 탄막을 포획해 반격!</small>':""}${(p.barrier??0)>0?'<small class="boss-shield-label">폭풍 방패 '+Math.ceil(p.barrier)+"/195 · 포획 반격으로 파괴</small>":""}<span>${(p.barrier??0)<=0&&p.recovery>0?"반격 기회 · 피해 +50%":p.tell>0?p.attack==="blink"?"순간이동 · 착지 원과 전기장 회피!":p.attack==="ring"?"원형 탄막 · 틈으로 회피!":p.attack==="siege"?"낙하 포격 · 표시 원 밖으로!":p.attack==="slam"?"주변 강타 · 원 밖으로!":p.attack==="rush"?"돌진 · 옆으로 회피!":"탄막 · 틈으로 회피!":Bs[M.chapter].boss}</span><div><i style="width:${p.hp/p.maxHp*100}%"></i></div>`:""}}ot.addEventListener("animationend",i=>{i.animationName==="sector-salute"&&M.phase==="upgrade"&&(ot.classList.add("evolution-ready"),ot.querySelector(".sector-clear")?.remove())});ot.addEventListener("input",i=>{const t=i.target,e=t.dataset.audio;if(e!=="music"&&e!=="effects")return;const n=Number(t.value)/100;Fn={...Fn,[e]:n},e==="music"?Zt.setMusicVolume(n):Zt.setEffectsVolume(n),ot.querySelector("#audio-"+e+"-value").textContent=Math.round(n*100)+"%",cd()});ot.addEventListener("click",i=>{const t=i.target.closest("[data-action]")?.dataset.action;if(t){if(Kt.active){t==="skip-departure"&&Kt.skip()?to():t==="cancel-departure"&&eo();return}if(["fire","dash","super","preview-shot"].includes(t)||Zt.play("ready",.4),t==="show-evolutions"&&M.phase==="upgrade")ot.classList.add("evolution-ready"),ot.querySelector(".sector-clear")?.remove();else if(t==="show-result")ot.classList.add("result-now");else if(t==="claim-reward"&&M.phase==="victory"&&!M.rematch){const e=M.chapter,n=R_(tt,e);if(n!==tt){tt=n,Qe=n.equippedWeapon,rn=n.equippedOutfit;try{localStorage.setItem("reactor-rush.campaign.v1",JSON.stringify(tt))}catch{}M.home(),Vt=e===1?2:e,M.chapter=Vt,$n=null,bn=null,je=""}}else if(t==="next-chapter"&&M.phase==="victory"&&!M.rematch&&Ss(2,tt.chapterWins[1]))M.home(),Vt=2,M.chapter=2,je="";else if(t==="wardrobe"&&M.phase==="lobby")Yo();else if(t.startsWith("outfit-preview-")&&M.phase==="lobby"){const e=t.slice(15);Object.hasOwn(dn,e)&&(bn=e,Yo())}else if(t==="wear-outfit"&&M.phase==="lobby"&&bn&&Sr(bn,tt.chapterWins)){rn=bn,tt={...tt,equippedOutfit:rn};try{localStorage.setItem("reactor-rush.campaign.v1",JSON.stringify(tt))}catch{}bn=null,je="",sn(),Yo()}else if(t==="close-wardrobe")ud(),ot.querySelector(".wardrobe-overlay")?.remove();else if(t.startsWith("title-")&&M.phase==="lobby"){const e=t.slice(6);if(Object.hasOwn(Mn,e)&&br(tt,e)){tt={...tt,equippedTitle:e};try{localStorage.setItem("reactor-rush.campaign.v1",JSON.stringify(tt))}catch{}je="",sn(),lu(Mn[e].label+" 칭호 장착!")}}else if(t==="mission-target"&&M.phase==="lobby"){const e=n_(tt,Vt);ot.querySelector("[data-action="+e+"]")?.click(),ot.querySelector(".mission-overlay .current-goal")?.scrollIntoView({block:"center"})}else if(t==="records"&&M.phase==="lobby"){const e=document.createElement("div");e.className="mission-overlay",e.innerHTML=`<div class="modal expedition-map"><small>수호대 기록실</small><h2>나의 수호대 기록</h2><div class="title-collection"><small>로비 칭호 · 전투 능력은 같습니다</small><div>${Object.keys(Mn).map(n=>{const s=Mn[n],r=br(tt,n);return Dt("title-"+n,`<b style="background:${s.color}">${s.icon}</b><strong>${s.label}</strong><p>${s.condition}</p><small>${r?tt.equippedTitle===n?"✓ 장착 중":"장착하기":"🔒 미획득"}</small>`,"title-card"+(tt.equippedTitle===n?" selected":""),!r||tt.equippedTitle===n)}).join("")}</div></div>${[1,2].map(n=>`<div class="mastery-details ${n===Vt?"current-goal":""}"><b>${Bs[n].title}</b>${sl(Oa(tt,n))}<p>탈환 ${tt.chapterWins[n]}회 · 최고 도달 ${tt.chapterBest[n]}/3</p><small>최단 탈환 ${tt.chapterRecords[n].fastest===null?"기록 없음":tt.chapterRecords[n].fastest.toFixed(1)+"초"}</small><p>보스 재대결 ${tt.rematches[n].wins}승 · 최단 ${tt.rematches[n].fastest===null?"기록 없음":tt.rematches[n].fastest.toFixed(1)+"초"}</p><div class="build-record-list">${Object.keys(In).map(s=>{const r=tt.rematchBuildRecords[n][s];return`<span><b>${In[s].title}</b>${r.wins}승 · ${r.fastest===null?"기록 없음":r.fastest.toFixed(1)+"초"}</span>`}).join("")}</div>${eu(tt,n)>0?`<small class="legacy-record-note">이전 ${eu(tt,n)}승은 전체 기록에 보존됩니다</small>`:""}</div>`).join("")}<p>${za.map(n=>n.title+" · "+n.condition).join("<br>")}</p>${Dt("close-map","닫기","secondary")}</div>`,ot.append(e)}else if(t==="mission-map"&&M.phase==="lobby"){const e=Ba(tt,Vt),n=document.createElement("div");n.className="mission-overlay",n.innerHTML=`<div class="modal expedition-map"><small>CHAPTER ${Vt.toString().padStart(2,"0")} · 원정 지도</small><h2>${Bs[Vt].title}</h2><p>관문을 돌파한 뒤 두 번의 갈림길을 선택합니다.</p><div class="map-entry"><span>⚑</span><b>${Vt===1?"착륙 부두":"바람 관문"}</b><small>출발 · 세 번의 전투</small></div><div class="map-columns">${[1,2].map(s=>`<div><small>${s===1?"02 · 중간 구역":"03 · 최종 결전"}</small>${e.routes.filter(r=>r.room===s).map(r=>`<article class="map-route ${tt.clearedRoutes.includes(r.id)?"recovered":"undiscovered"} ${tt.chapterWins[Vt]>0&&e.next===r.id?"current-goal":""}"><span>${r.icon}</span><b>${r.title}</b><p>${r.description}</p><small>${tt.chapterWins[Vt]>0&&e.next===r.id?"✦ 이번 미션 경로":tt.clearedRoutes.includes(r.id)?"✓ 탈환 완료":"◇ 아직 탈환하지 않은 경로"}</small></article>`).join("")}</div>`).join("")}</div><div class="mastery-details"><b>수호대 훈장</b>${sl(Oa(tt,Vt))}<p>${za.map(s=>s.title+" · "+s.condition).join("<br>")}</p><small>최단 탈환 ${tt.chapterRecords[Vt].fastest===null?"기록 없음":tt.chapterRecords[Vt].fastest.toFixed(1)+"초"} · 최고 퍼펙트 회피 ${tt.chapterRecords[Vt].bestPerfect}회</small></div><div class="map-reward"><span>${e.rewardIcon}</span><div><b>${e.headline}</b><p>${e.reward}</p></div></div>${Dt("start","이 원정으로 출발 →","launch")}${Dt("close-map","로비로","secondary")}</div>`,ot.append(n)}else if(t==="close-map")ot.querySelector(".mission-overlay")?.remove();else if(t==="armory"&&M.phase==="lobby")Zo();else if(t==="preview-shot"&&M.phase==="lobby")jc=te+.24,dd(Qe);else if(t==="close-armory")$n=null,ot.querySelector(".armory-overlay")?.remove();else if(t.startsWith("equip-")&&M.phase==="lobby"){const e=t.slice(6);if(Object.hasOwn(We,e)){const n=ot.querySelector(".armory")?.scrollTop??0;cu(e),sn(),Zo(n)}}else if(t.startsWith("reward-")&&M.phase==="lobby"){const e=t.slice(7);if(Object.hasOwn(We,e)){const n=Xs(e,tt.chapterWins);n?cu(e):(Vt=e==="pump"||!Ss(2,tt.chapterWins[1])?1:2,M.chapter=Vt,je=""),sn(),lu(n?We[e].name+" 장착! 준비됐어.":e==="pump"?"공중섬을 탈환하면 펌프 샷건을 얻을 수 있어!":Vt===1?"공중섬부터 탈환하자. 그러면 발전소가 열려!":"발전소를 탈환하면 아크 관통포를 얻을 수 있어!")}}else if(t==="hero-react")ld();else if(t==="skip-boss")M.skipBossIntro();else if(t==="auto-shoot")Ps=!Ps;else if(t.startsWith("preview-")&&M.phase==="lobby"){const e=t.slice(8);if(e==="base"||Ti.some(n=>n.id===e)){const n=ot.querySelector(".armory")?.scrollTop??0;$n=e==="base"?null:e,je="",sn(),Zo(n)}}else if(t.startsWith("chapter-")&&M.phase==="lobby"){const e=Number(t.slice(8));(e===1||e===2)&&Ss(e,tt.chapterWins[1])&&(Vt=e,M.chapter=e,je="")}else if(t==="boss-rematch"&&M.phase==="lobby"&&tt.chapterWins[Vt]>0){ot.querySelector(".mission-overlay")?.remove();const e=document.createElement("div");e.className="mission-overlay",e.innerHTML=`<div class="modal rematch-builds"><small>강화 보스 · 필살기 완충</small><h2>이번 재대결의 전략</h2><p>장착 무기와 함께 사용할 진화 2종을 선택하세요.</p><div>${Object.keys(In).map(n=>{const s=In[n],r=tt.rematchBuildRecords[Vt][n];return Dt("rematch-build-"+n,`<span>${s.icon}</span><b>${s.title}</b><p>${s.description}</p><small>${s.tip}</small><em>${r.wins}승 · ${r.fastest===null?"첫 기록에 도전":r.fastest.toFixed(1)+"초 · 최고 회피 "+r.bestPerfect+"회"}${r.clean?" · 무피격 달성":""}</em>`,"rematch-build-card")}).join("")}</div>${Dt("close-map","로비로","secondary")}</div>`,ot.append(e),e.querySelector(".rematch-build-card")?.focus()}else if(t.startsWith("rematch-build-")&&M.phase==="lobby"&&tt.chapterWins[Vt]>0)xn=Tl(t.slice(14)),Wa=!0,ou();else if(t==="start"&&Ss(Vt,tt.chapterWins[1]))M.phase==="lobby"&&(Wa=!1),ou();else if(t==="home")M.home();else if(t==="pause")M.pause();else if(t==="resume")M.resume();else if(t==="sound")Pi=!Pi,Zt.setVolume(Pi?0:1),cd(),je="";else if(t==="help"){const e=document.createElement("div");e.className="help-overlay",e.innerHTML=`<div class="modal control-help"><small>루크의 첫 모험</small><h2>탄막을 내 무기로.</h2><p class="help-lead">이동하고, 적탄을 모아, 되돌려 쏘세요.</p><div class="help-actions"><article><span>✥</span><div><b>이동하며 싸우기</b><p>기본 사격은 자동입니다. ${innerWidth<=700?"왼쪽 스틱으로":"WASD / 방향키로"} 적의 공격을 피하세요.</p></div></article><article><span>⦿</span><div><b>포획 → 반격</b><p>적탄이 다가올 때 ${innerWidth<=700?"큰 포획 버튼을":"Q를"} 누르세요. 모은 뒤 다시 누르면 반격합니다. 포대 방패에 특히 강합니다.</p></div></article><article><span>↝</span><div><b>위험 표시 밖으로!</b><p>${innerWidth<=700?"회피 버튼으로":"SPACE로"} 빠르게 이동합니다. 착지 뒤 남는 전기장도 피하세요.</p></div></article></div><div class="help-super"><span>✦</span><p>에너지가 100%면 ${innerWidth<=700?"별 버튼으로":"E로"} 오버드라이브! 주변 적을 공격하고 적탄을 지웁니다.</p></div><details class="help-more"><summary>전투 요령 더 보기</summary><ul><li>포획·회피로 되돌린 탄은 살아남은 일반 적을 짧게 밀고 공격을 끊습니다. 보스는 밀리지 않습니다.</li><li>자동 반격은 사격선이 열린 에너지 방패 적을 먼저 노립니다. 적을 직접 누르면 원하는 대상을 조준할 수 있습니다.</li><li>포획은 1.5초 뒤 자동으로 발사하며 7초마다 사용할 수 있습니다. 빈 포획은 빠르게 재시도할 수 있습니다.</li><li>되쏜 적탄 6발을 명중시키면 공명이 충전됩니다. 다음 반격은 피해가 1.6배, 관통력이 증가하고 포획 대기 시간이 2초 줄어듭니다. 충전은 구역 사이에 이어집니다.</li><li>포대 경로의 두 번째 적 무리에는 강화 포대가 한 대 등장합니다. 방패와 5갈래 탄막을 지니므로 탄막을 포획해 방패를 깨뜨리세요.</li><li>첫 포대의 포획 방패에는 일반 공격이 약하게 들어갑니다. 적탄을 모아 되쏘면 빠르게 깨뜨릴 수 있습니다. 시작 연출이 끝난 뒤 포획하세요.</li><li>철갑왕의 정면 철갑에는 일반 탄이 약하게 들어갑니다. 포획 반격은 철갑을 관통합니다. 공격 예고 중 옆을 노리거나, 공격 뒤 초록색 코어가 드러났을 때 반격하세요.</li><li>철갑왕과 멀리 떨어져 있으면 현재 위치에 낙하 포격을 예고합니다. 표시는 따라오지 않으니 원 밖으로 이동하세요.</li><li>철갑왕은 체력 절반에 과부하 상태가 되어 원형 탄막을 섞습니다. 예고를 보고 포획하거나 틈으로 회피하세요.</li><li>탈환한 챕터는 보스 재대결에 도전할 수 있습니다. 보스 체력과 피해가 증가하며 선택한 진화 2종과 필살기 완충으로 시작합니다. 재대결 기록은 별도로 저장합니다.</li><li>로비 캐릭터를 좌우로 드래그하면 장비 뒷면을 볼 수 있습니다. 짧게 누르면 정면으로 돌아와 인사합니다.</li><li>적이나 폭발통을 직접 누르면 조준합니다. 자동 사격을 끄면 ${innerWidth<=700?"공격 버튼":"클릭 / J"}으로 직접 쏠 수 있습니다.</li><li>경로의 엄폐 상자는 탄환과 폭발로 부술 수 있습니다. 상자가 무너지면 적에게도 사격선이 열리므로 위치를 바꾸세요.</li><li>폭발통을 터뜨려 주변 적을 함께 공격하세요. 엄폐물 옆으로 돌아 사격하세요.</li><li>탄창은 3회 사격분이며 자동으로 한 발씩 재충전됩니다. 산탄도 한 번의 사격에 탄창 한 칸을 사용합니다. 에너지 셀을 회수하면 탄창 +1, 충전 +12, 체력 +3을 얻습니다.</li><li>정면 방어 경비병은 옆을 노리거나 돌진 후 반격하세요.</li><li>스톰아이는 예고 시작 때의 위치로 순간이동하고 3초간 전기장을 남깁니다. 체력 절반에 생기는 방패는 포획 반격으로 깨세요.</li><li>회피폭탄 진화는 회피한 자리에 폭탄을 남깁니다. 산탄·연쇄·회복 진화는 포획 반격에도 적용됩니다. 리턴 코일은 3발 이상 모아 반격하면 포획 대기를 3초 줄입니다.</li><li>맞을 공격을 회피하면 근처 적탄을 최대 8발 되돌리고 충전 +20, 2초간 사격 피해 +30%를 얻습니다.</li></ul></details>${matchMedia("(pointer:coarse)").matches?"":'<small class="help-keys">키보드: WASD 이동 · Q 포획 · SPACE 회피 · E 필살기</small>'}<div class="help-close"><button>준비됐어요</button></div></div>`,e.querySelector("button").onclick=()=>e.remove(),Zn.append(e)}else t.startsWith("route-")?M.selectRoute(t.slice(6)):Ti.some(e=>e.id===t)?M.choose(t):t==="dash"?hd():t==="magnet"?Cr=!0:t==="super"?Ar=!0:t==="fire"&&i.detail===0&&(Xn=!1,li.request());sn()}});ot.addEventListener("pointerdown",i=>{const t=i.target;t.closest(".fire-button")&&(Xn=!1,Yi=!0,li.request(),Vs=i.pointerId,t.setPointerCapture(i.pointerId));const e=t.closest(".move-pad");if(e){Rr=i.pointerId;const n=e.getBoundingClientRect();Jc={x:n.x+n.width/2,y:n.y+n.height/2},e.setPointerCapture(i.pointerId),fd(i)}});function fd(i){if(Rr!==i.pointerId)return;hi={x:Math.max(-1,Math.min(1,(i.clientX-Jc.x)/38)),z:Math.max(-1,Math.min(1,(i.clientY-Jc.y)/38))};const t=ot.querySelector(".move-pad i");t&&(t.style.transform=`translate(${hi.x*25}px,${hi.z*25}px)`)}function pd(i,t=!1){const e=Ox(i.pointerId,Rr,Vs);if(e.fire&&(Yi=!1,Vs=null,t&&(li.cancel(),Xn=!1,ri=null,Ai=null,Ke=void 0,Ei=0)),e.move){Rr=null,hi={x:0,z:0};const n=ot.querySelector(".move-pad i");n&&(n.style.transform="")}}ot.addEventListener("pointermove",fd);window.addEventListener("pointerup",i=>pd(i));window.addEventListener("pointercancel",i=>pd(i,!0));const pr=new _p,r1=new Si(new U(0,1,0),0),Ko=new U;function md(i){pr.setFromCamera(new Tt(i.clientX/innerWidth*2-1,1-i.clientY/innerHeight*2),yn);const t=y_(pr,[...Ts.values(),...fr.values(),...dr.values()],M.enemies,M.barrels,M.covers);t?(ri=t.kind==="enemy"?t.id:null,Ai=t.kind==="enemy"?null:{kind:t.kind,id:t.id},Ke={x:t.x,z:t.z}):(ri=null,Ai=null,pr.ray.intersectPlane(r1,Ko)&&(Ke={x:Ko.x,z:Ko.z})),Ei=.6}ci.addEventListener("pointermove",i=>{if(M.phase==="lobby"){hn?.id===i.pointerId&&(Math.abs(i.clientX-hn.startX)>6&&(hn.dragged=!0),hn.dragged&&(Qa+=(i.clientX-hn.lastX)*.012),hn.lastX=i.clientX);return}(i.pointerType==="mouse"||i.pointerId===Vs)&&md(i)});ci.addEventListener("pointerdown",i=>{if(!Kt.active){if(M.phase==="lobby"){pr.setFromCamera(new Tt(i.clientX/innerWidth*2-1,1-i.clientY/innerHeight*2),yn);const t=pr.intersectObjects([It.root,Ta.root,sd.root],!0).find(e=>{let n=e.object;for(;n;){if(!n.visible)return!1;n=n.parent}return!0});if(t?.object.userData.trophyChapter){const e=t.object.userData.trophyChapter;tt.chapterWins[e]>0&&(Vt=e,M.chapter=e,je="",sn(),ot.querySelector("[data-action=records]")?.click(),ot.querySelector(".mission-overlay .current-goal")?.scrollIntoView({block:"center"}))}else t?.object.userData.lobbyArmory?ot.querySelector("[data-action=armory]")?.click():t&&(hn={id:i.pointerId,startX:i.clientX,lastX:i.clientX,dragged:!1},ci.setPointerCapture(i.pointerId));return}M.phase==="combat"&&(md(i),Xn=!0,Yi=!0,li.request(),Vs=i.pointerId,ci.setPointerCapture(i.pointerId))}});function gd(i,t=!1){if(hn?.id!==i.pointerId)return;const e=!t&&!hn.dragged&&M.phase==="lobby"&&!Kt.active;hn=null,ci.hasPointerCapture(i.pointerId)&&ci.releasePointerCapture(i.pointerId),e&&(ld(),Zt.play("ready",.5))}window.addEventListener("pointerup",i=>gd(i));window.addEventListener("pointercancel",i=>gd(i,!0));ci.addEventListener("lostpointercapture",i=>{hn?.id===i.pointerId&&(hn=null)});window.addEventListener("keydown",i=>{if(Kt.active){i.code==="Escape"&&eo(),i.code==="Enter"&&Kt.skip()&&to(),i.preventDefault();return}if(i.code==="Escape"){const t=ot.querySelector(".wardrobe-overlay")??ot.querySelector(".armory-overlay")??ot.querySelector(".mission-overlay")??Zn.querySelector(".help-overlay");if(t){ud(),t.classList.contains("armory-overlay")&&($n=null),t.remove();return}M.phase==="paused"?M.resume():M.pause(),sn();return}M.phase==="combat"&&(Bx(i.code,M.phase)&&i.preventDefault(),!i.repeat&&(De.add(i.code),i.code==="KeyJ"&&(Xn=!1,li.request()),i.code==="Space"&&hd(),i.code==="KeyE"&&(Ar=!0),i.code==="KeyQ"&&(Cr=!0)))});window.addEventListener("keyup",i=>De.delete(i.code));window.addEventListener("blur",()=>{eo(),Zs(),M.pause(),sn()});document.addEventListener("visibilitychange",()=>{document.hidden&&(eo(),Zs(),M.pause(),sn())});function vd(){di.setSize(innerWidth,innerHeight),yn.aspect=innerWidth/innerHeight,yn.updateProjectionMatrix()}window.addEventListener("resize",vd);vd();let jo=performance.now(),te=0,Jo=0,Pe=0,pa=0,hu=-1;const a1=new U;function xd(i){const t=performance.now(),e=i-jo,n=Math.min(.034,(i-jo)/1e3);jo=i,te+=n,Kt.active&&Kt.advance(n)&&to(),Kt.active&&(ot.style.setProperty("--departure-progress",String(Kt.progress)),ot.querySelector("#departure-cue").textContent=Kt.travel===0?"장비 준비 완료":Kt.progress<.83?"관문 통과 중":"원정 시작!");const s=ri!==null?M.enemies.find(g=>g.id===ri):void 0;s?Ke={x:s.x,z:s.z}:ri!==null&&(ri=null,Ke=void 0,Xn=!1,Ei=0),Ai&&!(Ai.kind==="cover"?M.covers:M.barrels).some(g=>g.id===Ai.id&&(g.hp===void 0||g.hp>0))&&(Ai=null,Ke=void 0,Xn=!1,Ei=0);const r=M.phase==="lobby",a=M.shotSequence,o=Ye.takeDt(n);o>0&&M.tick(o,{x:(De.has("KeyD")||De.has("ArrowRight")?1:0)-(De.has("KeyA")||De.has("ArrowLeft")?1:0)+hi.x,z:(De.has("KeyS")||De.has("ArrowDown")?1:0)-(De.has("KeyW")||De.has("ArrowUp")?1:0)+hi.z,fire:li.shouldFire(Ps&&M.remaining>0||Yi||De.has("KeyJ")),dash:Va,dashAim:Ga,super:Ar,magnet:Cr,magnetAim:Ke,aim:Xn&&(Yi||li.shouldFire(!1))&&!De.has("KeyJ")?Ke:void 0}),M.shotSequence!==a&&li.accepted(),o>0&&(Va=!1,Ga=void 0,Ar=!1,Cr=!1),M.shotSequence!==el&&(dd(M.weapon),el=M.shotSequence),M.kills!==tl&&(Zt.play("ko"),tl=M.kills,Pe=.08,Ye.hold(.045)),M.hp<nl&&(Zt.play("hurt"),Pe=.18,pa=1),nl=M.hp,pa=Math.max(0,pa-n*5),Zn.style.setProperty("--hurt-flash",String(pa)),yi.tick(M.phase==="combat"?o:0),yi.accept(M.bursts)&&(Zt.play("counter-hit",.7),Pe=Math.max(Pe,.11),be.matches||Ye.hold(.025)),Tr.hidden=M.phase!=="combat"||yi.remaining<=0,Tr.textContent=innerWidth<=700?`반격 ${yi.hits} HIT · ${Math.round(yi.damage)}`:`반격 명중! · ${yi.hits} HIT · ${Math.round(yi.damage)} 피해`,M.phase==="defeat"&&Ca<0&&(Ca=te),M.phase==="victory"&&ii<0&&(ii=te,ts.react(2.5));const l=r?new U(innerWidth>700?4.8:3.2,innerWidth>700?5:4.7,innerWidth>700?15.5:dn[bn??rn].showroomDistance):new U(0,innerWidth>700?17:23,innerWidth>700?15:21);M.phase==="victory"?(l.set(M.x+(M.x>0?-4.5:4.5),6.5,M.z+(M.z>0?-8.5:8.5)),!M.rematch&&!be.matches&&!ot.classList.contains("result-now")&&te-ii<.85&&l.set(innerWidth<=700?M.x*.3:0,innerWidth<=700?32:17,innerWidth<=700?30+M.z*.2:15)):M.phase==="defeat"&&!be.matches?l.set(M.x+(M.x>0?-4.5:4.5),6,M.z+(M.z>0?-8.5:8.5)):!r&&innerWidth<=700&&(l.x=M.x*.85,l.z+=M.z*.25);const c=M.room===2&&(M.phase==="combat"||M.phase==="paused")?M.boss:void 0,h=c?Zu(M.intro,c.bossStyle==="storm"):null;if(c&&h&&!be.matches&&l.lerp(new U(c.x+4,innerWidth<=700?7:5.5,c.z+(innerWidth<=700?10.5:7.5)),h.blend),M.phase==="upgrade"&&!be.matches&&te-Kc<.9){const g=(te-Kc)/.9;l.lerp(new U(M.x+3,7,M.z+7),Math.sin(Math.max(0,g)*Math.PI)*.5)}Kt.active&&l.set(4,5.5,7-Kt.travel*3),yn.position.lerp(l,Math.min(1,n*4));const d=r?new U(0,innerWidth>700?2.2:1.4,0):new U(innerWidth<=700?M.x*.85:0,0,innerWidth<=700?M.z*.25:0);M.phase==="victory"&&(d.set(M.x,1.2,M.z),!M.rematch&&!be.matches&&!ot.classList.contains("result-now")&&te-ii<.85&&d.set(innerWidth<=700?M.x*.3:0,0,-1)),M.phase==="defeat"&&!be.matches&&d.set(M.x-Math.cos(M.angle)*.8,.9,M.z-Math.sin(M.angle)*.8),c&&h&&!be.matches&&d.lerp(new U(c.x,2,c.z),h.blend),Kt.active&&d.set(0,1.2,-1.4-Kt.travel*5.2),yn.lookAt(d),Pe>0&&(yn.position.x+=Math.sin(te*150)*Pe,Pe=Math.max(0,Pe-n*.7));const p=Ju.update(n,r&&!Kt.active,be.matches);It.root.position.set(r?(innerWidth>700,0):M.x,0,r?innerWidth>700?0:-1.4:M.z),It.root.scale.setScalar(r?innerWidth>700?2:1.6:1),It.root.rotation.z=0,It.root.rotation.y=r?Math.PI+.4+Qa+p.turn*(innerWidth>700?1:.15):M.phase==="victory"?Math.atan2(M.x-yn.position.x,M.z-yn.position.z):-M.angle;const f=ts.update(n,M.x,M.z,te,r);It.body.position.y=f.bob,It.left.rotation.x=f.step-f.lean*3,It.right.rotation.x=-f.step-f.lean*3,It.body.rotation.z=0,It.head.rotation.z=r?Math.sin(te*.7)*.045+f.wave*.08+p.headTilt:f.lean*.25,It.leftArm.rotation.z=-f.wave*((r&&innerWidth<=700?1:1.8)+Math.sin(te*15)*.18),It.leftArm.rotation.x=M.magnet.active&&!r?-.7:-f.step*.18,X_.update(M.magnet,r,M.phase==="paused"?0:n,te,r?$n==="recharge":M.evolutions.includes("recharge")),It.eyes.forEach(g=>{g.visible=M.phase!=="defeat",g.scale.y=.17*(f.wave>0?1:f.blink)}),$o.update(te,M.phase,M.x,M.z,ii<0?0:te-ii,M.rematch);const x=r?Math.max(0,(jc-te)/.24):M.recoil;It.gun.position.z=-.55+x*.12,It.gun.rotation.x=-bi.kick*.3+p.gunTilt,It.rightArm.rotation.z=-bi.kick*.8+p.shoulder,It.body.position.y+=bi.kick*.18;const y=r?Qe:M.weapon;Y_.forEach(g=>g.visible=y==="twin"),ks.visible=y==="pump",Ys.visible=y==="arc";const v=r?$n?[$n]:[]:M.evolutions;if(qs.visible=v.includes("vampire"),ja.visible=v.includes("aftershock"),ka.visible=y==="twin"&&v.includes("scatter"),Zc.visible=v.includes("ricochet"),Zc.rotation.z=te*3,It.gun.getObjectByName("muzzle-flash").visible=r?jc>te:M.recoil>.5,It.root.visible=!0,M.phase==="defeat"){const g=kx(te-Ca);It.root.rotation.z=be.matches?Math.PI/2:g.tilt,It.root.position.y=be.matches?.84:g.lift}if(Kt.active){const g=Kt.travel;It.root.position.set((innerWidth>700?3.4:0)*(1-g),0,-1.4-g*5.2),It.root.scale.setScalar(1.4-g*.4),It.root.rotation.y=(Math.PI+.4)*(1-Math.min(1,Kt.elapsed/.55)),It.left.rotation.x=Math.sin(te*18)*.6*(g>0?1:0),It.right.rotation.x=-It.left.rotation.x,It.body.position.y=Math.abs(Math.sin(te*18))*.08,It.root.visible=Kt.progress<.92}K_.update(M.phase==="lobby"?bn??rn:rn),Z_.update(M.phase==="paused"?0:n,M.phase==="lobby"?bn??rn:rn,f.step,be.matches),Ta.update(!1,innerWidth<=700,Qe,te);const u=ot.querySelector(".workshop-label");if(u){const g=fa(Ta.root.position.x,innerWidth<=700?3.5:1.12,Ta.root.position.z);u.style.transform=`translate(${g.x}px,${g.y}px) translate(-50%,0)`}Ei=Math.max(0,Ei-n),Ha.visible=M.phase==="combat"&&!!Ke&&(Xn&&Yi||Ei>0),Ke&&Ha.position.set(Ke.x,.09,Ke.z),Nn.visible=r||Kt.active||M.room!==1||M.chapter===2,nu.rotation.z=te*(Kt.active?2.5:.3),nu.scale.setScalar(Kt.active?1+Kt.progress*.3:1),Yc.material.opacity=Kt.active?.4+Kt.progress*.45:.28,Yc.visible=r||M.phase==="upgrade"||M.phase==="route"||M.phase==="victory",O_.update(M.room,M.phase,ii<0?0:te-ii,M.rematch,be.matches),G_.update(M.chapter,M.room,r,M.routeHistory[M.room-1]),iu.update(r&&!Kt.active,te,Vt,be.matches),sd.update(r&&!Kt.active,innerWidth<=700,tt.chapterWins),En.visible=!r||Kt.active,$o.root.visible=!r||Kt.active,$o.sky.visible=!r||Kt.active,jt.background=r&&!Kt.active?iu.background:Qu;const _=M.encounter.color;Ja.forEach((g,R)=>g.visible=M.chapter===1&&!r&&R===M.room),Pl.visible=M.chapter===2&&!r,rd.forEach(g=>g.rotation.z=te*.9),_!==hu&&(hu=_,[...new Set(id.map(R=>R.material))].forEach((R,L)=>R.color.setHex(_).lerp(new Gt("#e4efc4"),L%2?.1:.23))),ur.visible=!!c&&!!h&&h.active&&!be.matches,c&&h&&(ur.position.set(c.x,.085,c.z),ur.scale.setScalar(1.4+h.pulse*1.6)),bi.updateReady(M.x,M.z,M.phase==="combat"&&(M.room!==2||M.intro<=0)&&M.charge>=100);const S=M.magnetTarget(Ke),b=S?wr(M,S,M.covers,M.barrels):null;k_.update(M.magnet,M.x,M.z,te,M.phase==="combat",S?b?{x:M.x+(S.x-M.x)*b.t,z:M.z+(S.z-M.z)*b.t}:S:void 0),z_.update(M.incomingWave),td.update(M.magnet.released,M.x,M.z,M.angle,M.phase==="paused"?0:n,M.phase==="combat"||M.phase==="paused",be.matches),B_.update(M.stormPatches,M.phase==="combat"),H_.update(M.bombs,M.phase==="combat",te),V_.update(M.hazards.live,M.phase==="combat",M.routeHistory.includes("storm-foundry")),da(dr,M.covers);for(const g of M.covers){let R=dr.get(g.id);if(!R){R=new ut,Y(R,gt,"#27466b",[0,.65,0],[1,1.3,1]),Y(R,gt,"#759ca9",[0,1.34,0],[1.08,.14,1.08]);for(const k of[-1,1])for(const W of[-1,1])Y(R,gt,"#ffc969",[k*.33,.65,W*.51],[.13,.65,.035]);const B=Y(R,gt,"#ffe095",[-0,1.48,0],[.8,.035,.05],!0);B.name="cover-health",B.castShadow=!1,R.traverse(k=>{k instanceof at&&(k.userData.aimCover=g.id)}),jt.add(R),dr.set(g.id,R)}R.position.set(g.x,0,g.z),R.scale.set(g.width,1,g.depth);const L=R.getObjectByName("cover-health"),N=(g.hp??90)/(g.maxHp??90);L.visible=N<1&&g.hp!==void 0,L.scale.x=.8*N,L.position.x=-.4+.4*N,R.visible=M.phase!=="lobby"}da(Aa,M.cells);for(const g of M.cells){let R=Aa.get(g.id);if(!R){R=new at(ru,J_);const L=new at(ru,Q_);L.scale.setScalar(1.15),R.add(L),R.castShadow=!1,jt.add(R),Aa.set(g.id,R)}R.position.set(g.x,.5+Math.sin(te*5+g.id)*.1,g.z),R.rotation.set(te*.7,te*2,.3),R.visible=M.phase==="combat"&&(g.life>2||Math.sin(te*12)>0)}const C=new Set(M.enemies.map(g=>g.id));for(const[g,R]of Ts)C.has(g)||(Ts.delete(g),R.userData.enemyKind==="boss"&&M.phase!=="lobby"&&cr.trigger(g,R.position.x,R.position.z,M.chapter===2)&&(Zt.play("explosion",.9),be.matches||(Ye.hold(.09),Pe=.2)),M.phase==="lobby"||be.matches?Os(R):Ea.capture(R));M.phase==="lobby"&&cr.reset(),cr.update(M.phase==="paused"?0:n,be.matches),Hs.hidden=!cr.active||M.phase==="paused"||M.phase==="lobby",Hs.textContent=M.chapter===2?"스톰아이 격파!":"철갑왕 격파!",(M.phase==="lobby"||be.matches)&&Ea.clear(),Ea.update(M.phase==="paused"?0:n);for(const g of M.enemies){let R=Ts.get(g.id);R||(R=t1(g),Ts.set(g.id,R)),e1(R,g,te,M.phase==="paused"?0:o)}let m=null;if(M.phase==="combat"&&M.intro<=0)for(const g of M.enemies){const R=fa(g.x,1.4,g.z),L=Dx(R.x,R.y,innerWidth,innerHeight),N=Math.hypot(g.x-M.x,g.z-M.z);L&&(!m||N<m.distance)&&(m={distance:N,hint:L,label:M.enemies.length===1?"마지막 적":g.kind==="boss"?"보스":g.kind==="gunner"?"포대":g.kind==="brute"?"경비병":"봇"})}ju.update(m?.hint??null,m?.label);const T=new Set(M.enemies.filter(g=>g.kind!=="boss"&&(g.kind==="brute"||(g.barrier??0)>0||g.overcharge||g.id===ri||g.hp<g.maxHp)&&M.phase==="combat").map(g=>g.id));for(const[g,R]of ws)T.has(g)||(R.remove(),ws.delete(g));for(const g of M.enemies)if(T.has(g.id)){let R=ws.get(g.id);R||(R=new Vx(qc),ws.set(g.id,R));const L=fa(g.x,g.kind==="brute"?2.55:1.9,g.z),N=g.kind==="brute"?g.recovery>0?"반격 ×1.5":Er(g)?"정면 방어":"돌진 중":(g.barrier??0)>0?(g.overcharge?"강화 포대 방패 ":"포획 방패 ")+Math.ceil(g.barrier)+" · 적탄으로 파괴":(g.overcharge?"강화 포대":g.kind==="gunner"?"포대":"봇")+" "+Math.ceil(g.hp)+" / "+g.maxHp;R.update(L.x,L.y,N,(g.barrier??0)>0?g.barrier/(g.barrierMax??100):g.hp/g.maxHp)}da(Ra,M.shots);for(const g of M.shots){let R=Ra.get(g.id);if(R||(R=Ex(),jt.add(R),Ra.set(g.id,R)),Tx(R,g,be.matches),g.chainFrom){let L=Es.get(g.id);if(!L){const $=new Se;$.setAttribute("position",new tn(new Float32Array(21),3)),L=new xl($,j_),L.frustumCulled=!1,jt.add(L),Es.set(g.id,L)}const N=L.geometry.getAttribute("position"),B=g.x-g.chainFrom.x,k=g.z-g.chainFrom.z,W=Math.hypot(B,k);for(let $=0;$<7;$++){const V=$/6,it=$===0||$===6?0:Math.sin($*9+te*45)*.12;N.setXYZ($,g.chainFrom.x+B*V-k/Math.max(.01,W)*it,1.15,g.chainFrom.z+k*V+B/Math.max(.01,W)*it)}N.needsUpdate=!0}}for(const[g,R]of Es)M.shots.some(L=>L.id===g&&L.chainFrom)||(jt.remove(R),R.geometry.dispose(),Es.delete(g));da(fr,M.barrels);for(const g of M.barrels){let R=fr.get(g.id);if(!R){R=new ut,Y(R,xe,"#ff8649",[0,.6,0],[.43,1.15,.43]);for(const L of[.14,1.06])Y(R,xe,"#3f4264",[0,L,0],[.48,.13,.48]);Y(R,gt,"#ffe9a2",[0,.6,-.44],[.25,.4,.04],!0),jt.add(R),fr.set(g.id,R)}R.position.set(g.x,0,g.z),R.traverse(L=>{L instanceof at&&(L.userData.aimBarrel=g.id)})}const D=mx(M.bursts,ad,od,M.securedClear,C);for(const g of M.bursts){let R=As.get(g.id);if(!R){const it=new ut;if(g.text!=="오버드라이브!"){const _t=g.damage!==void 0,$t=_t?g.counter?4:2:8;_t||Li(it,g.color,0,.15,0,1);for(let se=0;se<$t;se++){const de=se*Math.PI*2/$t;Y(it,gt,g.color,[Math.cos(de),_t?1.1+se%2*.15:.4+se%3*.2,Math.sin(de)],_t?[.1,.1,.24]:[.18,.18,.18],!0)}}it.traverse(_t=>{_t instanceof at&&(_t.castShadow=!1)}),jt.add(it);const ft=document.createElement("span");ft.className="damage-float"+(g.counter?" captured-damage":g.damage!==void 0?" ordinary-damage":"")+(g.text==="오버드라이브!"?" overdrive-title":g.text?.startsWith("탄막 탈취")||g.text?.startsWith("탄막 반격")?" counter-title":""),ft.textContent=g.counter?"반격 "+g.text:g.text==="적 등장"||g.text==="리턴 코일 · 재사용 −3초"?"":g.text??"",ft.style.color=g.color,qc.append(ft),R={mesh:it,label:ft},As.set(g.id,R),il.has(g.id)||(il.add(g.id),g.text==="적 등장"||(g.text==="방패 파괴!"?(Zt.play("shield-break",.8),Pe=.2,Ye.hold(.07)):g.text==="철갑왕 과부하 · 원형 탄막!"?(Zt.play("boss",.7),Pe=.16,Ye.hold(.06)):g.text==="폭풍 방패 · 포획 반격!"?Zt.play("core",.7):g.text==="적탄을 기다려 포획!"?Zt.play("ready",.35):g.text==="낙하 포격!"?(Zt.play("explosion",.7),Pe=.14,Ye.hold(.045)):g.text==="엄폐 파괴!"?(Zt.play("explosion",.6),Pe=.1,Ye.hold(.04)):g.text==="BOOM"?(Zt.play("explosion"),Pe=.16):g.text==="오버드라이브!"?(bi.trigger(g.x,g.z),Zt.play("super"),Pe=.22,Ye.hold(.07)):g.text==="퍼펙트 회피!"?(Zt.play("ready"),Pe=.05,Ye.hold(.025)):g.text==="공명 충전 완료!"?(Zt.play("ready",.8),Pe=.08):g.text==="공명 반격!"?(Zt.play("super"),Pe=.22,Ye.hold(.065)):g.text?.startsWith("탄막 반격")?(Zt.play("super",.8),Pe=.18,Ye.hold(.065)):g.text==="리턴 코일 · 재사용 −3초"?Zt.play("pickup",.7):g.text==="자력 포획!"?Zt.play("core",.6):g.text?.startsWith("탄막 탈취")?(Zt.play("super",.6),Pe=.14,Ye.hold(.055)):g.text?.startsWith("탄막 소거")?Zt.play("pickup",.4):g.text==="충전 +12"?Zt.play("pickup",.5):g.text==="회피폭탄!"?(Zt.play("explosion",.5),Pe=.12,Ye.hold(.035)):g.text==="회피"||g.text==="순간이동!"?Zt.play("dash"):g.text?.startsWith("방패 −")&&!g.counter?Zt.play("shield-hit",.55):g.text!=="✦"&&!g.counter&&Zt.play("hit",.4)))}D.has(g.id)&&(R.label.textContent=D.get(g.id));const L=R.label.textContent?.startsWith("퍼펙트 회피 ·")??!1;R.label.classList.toggle("combined-counter-title",L);const N=1-g.life/.55;R.mesh.position.set(g.x,0,g.z),R.mesh.scale.setScalar(g.size*(.3+N)),R.mesh.visible=g.life>.12;const B=fa(g.x,2+N,g.z),k=g.damage!==void 0,W=L?innerWidth<=700?17:21:k?g.counter?innerWidth<=700?22:25:innerWidth<=700?15:17:g.text==="오버드라이브!"?innerWidth<=700?25:32:R.label.classList.contains("counter-title")?25:23,$=gx(B.x+(k&&!g.counter?(g.id%3-1)*30:0),R.label.textContent??"",W,innerWidth),V=B.y-(L?68:g.counter?30:0);R.label.style.transform=`translate(${$}px,${V}px) translate(-50%,-50%)`,R.label.style.opacity=String(Math.min(1,g.life*5))}const E=new Set(M.bursts.map(g=>g.id));for(const[g,R]of As)E.has(g)||(jt.remove(R.mesh),R.label.remove(),As.delete(g));M.phase==="lobby"?bi.reset():bi.update(M.phase==="paused"?0:n),a1.set(M.x,0,M.z),Jo+=n,(Jo>.08||M.phase!==je||M.room!==Qc)&&(sn(),Jo=0),di.render(jt,yn),F_.sample(i,e,performance.now()-t,M.phase+":"+M.chapter+":"+M.room,di.info.render),requestAnimationFrame(xd)}sn();yn.position.set(12,8,14);requestAnimationFrame(xd);
