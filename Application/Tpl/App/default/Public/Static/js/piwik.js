/*!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if(typeof JSON2!=="object"){JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON2.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON2.parse")}}}());if(typeof _paq!=="object"){_paq=[]}if(typeof Piwik!=="object"){Piwik=(function(){var i,a={},s=document,e=navigator,F=screen,C=window,f=C.performance||C.mozPerformance||C.msPerformance||C.webkitPerformance,n=false,A=[],k=C.encodeURIComponent,B=C.decodeURIComponent,g=unescape,G,r,c;function u(R){var Q=typeof R;return Q!=="undefined"}function o(Q){return typeof Q==="function"}function E(Q){return typeof Q==="object"}function l(Q){return typeof Q==="string"||Q instanceof String}function L(){var Q,S,R;for(Q=0;Q<arguments.length;Q+=1){R=arguments[Q];S=R.shift();if(l(S)){G[S].apply(G,R)}else{S.apply(G,R)}}}function O(T,S,R,Q){if(T.addEventListener){T.addEventListener(S,R,Q);return true}if(T.attachEvent){return T.attachEvent("on"+S,R)}T["on"+S]=R}function J(R,U){var Q="",T,S;for(T in a){if(Object.prototype.hasOwnProperty.call(a,T)){S=a[T][R];if(o(S)){Q+=S(U)}}}return Q}function M(){var Q;J("unload");if(i){do{Q=new Date()
}while(Q.getTimeAlias()<i)}}function K(){var Q;if(!n){n=true;J("load");for(Q=0;Q<A.length;Q++){A[Q]()}}return true}function m(){var R;if(s.addEventListener){O(s,"DOMContentLoaded",function Q(){s.removeEventListener("DOMContentLoaded",Q,false);K()})}else{if(s.attachEvent){s.attachEvent("onreadystatechange",function Q(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",Q);K()}});if(s.documentElement.doScroll&&C===C.top){(function Q(){if(!n){try{s.documentElement.doScroll("left")}catch(S){setTimeout(Q,0);return}K()}}())}}}if((new RegExp("WebKit")).test(e.userAgent)){R=setInterval(function(){if(n||/loaded|complete/.test(s.readyState)){clearInterval(R);K()}},10)}O(C,"load",K,false)}function h(S,R){var Q=s.createElement("script");Q.type="text/javascript";Q.src=S;if(Q.readyState){Q.onreadystatechange=function(){var T=this.readyState;if(T==="loaded"||T==="complete"){Q.onreadystatechange=null;R()}}}else{Q.onload=R}s.getElementsByTagName("head")[0].appendChild(Q)}function v(){var Q="";
try{Q=C.top.document.referrer}catch(S){if(C.parent){try{Q=C.parent.document.referrer}catch(R){Q=""}}}if(Q===""){Q=s.referrer}return Q}function j(Q){var S=new RegExp("^([a-z]+):"),R=S.exec(Q);return R?R[1]:null}function b(Q){var S=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),R=S.exec(Q);return R?R[1]:Q}function D(S,R){var Q="[\\?&#]"+R+"=([^&#]*)";var U=new RegExp(Q);var T=U.exec(S);return T?B(T[1]):""}function q(Q){return g(k(Q))}function N(ag){var S=function(al,W){return(al<<W)|(al>>>(32-W))},ah=function(an){var al="",am,W;for(am=7;am>=0;am--){W=(an>>>(am*4))&15;al+=W.toString(16)}return al},V,aj,ai,R=[],aa=1732584193,Y=4023233417,X=2562383102,U=271733878,T=3285377520,af,ae,ad,ac,ab,ak,Q,Z=[];ag=q(ag);Q=ag.length;for(aj=0;aj<Q-3;aj+=4){ai=ag.charCodeAt(aj)<<24|ag.charCodeAt(aj+1)<<16|ag.charCodeAt(aj+2)<<8|ag.charCodeAt(aj+3);Z.push(ai)}switch(Q&3){case 0:aj=2147483648;break;case 1:aj=ag.charCodeAt(Q-1)<<24|8388608;break;case 2:aj=ag.charCodeAt(Q-2)<<24|ag.charCodeAt(Q-1)<<16|32768;
break;case 3:aj=ag.charCodeAt(Q-3)<<24|ag.charCodeAt(Q-2)<<16|ag.charCodeAt(Q-1)<<8|128;break}Z.push(aj);while((Z.length&15)!==14){Z.push(0)}Z.push(Q>>>29);Z.push((Q<<3)&4294967295);for(V=0;V<Z.length;V+=16){for(aj=0;aj<16;aj++){R[aj]=Z[V+aj]}for(aj=16;aj<=79;aj++){R[aj]=S(R[aj-3]^R[aj-8]^R[aj-14]^R[aj-16],1)}af=aa;ae=Y;ad=X;ac=U;ab=T;for(aj=0;aj<=19;aj++){ak=(S(af,5)+((ae&ad)|(~ae&ac))+ab+R[aj]+1518500249)&4294967295;ab=ac;ac=ad;ad=S(ae,30);ae=af;af=ak}for(aj=20;aj<=39;aj++){ak=(S(af,5)+(ae^ad^ac)+ab+R[aj]+1859775393)&4294967295;ab=ac;ac=ad;ad=S(ae,30);ae=af;af=ak}for(aj=40;aj<=59;aj++){ak=(S(af,5)+((ae&ad)|(ae&ac)|(ad&ac))+ab+R[aj]+2400959708)&4294967295;ab=ac;ac=ad;ad=S(ae,30);ae=af;af=ak}for(aj=60;aj<=79;aj++){ak=(S(af,5)+(ae^ad^ac)+ab+R[aj]+3395469782)&4294967295;ab=ac;ac=ad;ad=S(ae,30);ae=af;af=ak}aa=(aa+af)&4294967295;Y=(Y+ae)&4294967295;X=(X+ad)&4294967295;U=(U+ac)&4294967295;T=(T+ab)&4294967295}ak=ah(aa)+ah(Y)+ah(X)+ah(U)+ah(T);return ak.toLowerCase()}function I(S,Q,R){if(S==="translate.googleusercontent.com"){if(R===""){R=Q
}Q=D(Q,"u");S=b(Q)}else{if(S==="cc.bingj.com"||S==="webcache.googleusercontent.com"||S.slice(0,5)==="74.6."){Q=s.links[0].href;S=b(Q)}}return[S,Q,R]}function w(R){var Q=R.length;if(R.charAt(--Q)==="."){R=R.slice(0,Q)}if(R.slice(0,2)==="*."){R=R.slice(1)}return R}function P(R){R=R&&R.text?R.text:R;if(!l(R)){var Q=s.getElementsByTagName("title");if(Q&&u(Q[0])){R=Q[0].text}}return R}function y(Q,R){if(R){return R}if(Q.slice(-9)==="piwik.php"){Q=Q.slice(0,Q.length-9)}return Q}function x(U){var Q="Piwik_Overlay";var X=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var S=X.exec(s.referrer);if(S){var T=S[1];if(T!==String(U)){return false}var W=S[2],R=S[3];C.name=Q+"###"+W+"###"+R}var V=C.name.split("###");return V.length===3&&V[0]===Q}function H(R,W,T){var V=C.name.split("###"),U=V[1],Q=V[2],S=y(R,W);h(S+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(S,T,U,Q)})}function z(ap,aU){var W=I(s.domain,C.location.href,v()),bf=w(W[0]),bu=W[1],a2=W[2],bv=false,aY="GET",a0=aY,aM="application/x-www-form-urlencoded; charset=UTF-8",au=aM,U=ap||"",am="",aW="",bk=aU||"",aJ,ay=s.title,aA="7z|aac|apk|ar[cj]|as[fx]|avi|azw3|bin|csv|deb|dmg|docx?|epub|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mobi|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",aX=[bf],Z=[],aP=[],ao=[],aV=500,aa,aq,ab,ae,aC=["wfr","pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],ax=["pk_kwd","piwik_kwd","utm_term"],bs="_pk_",ag,bt,af=false,bn,aE,aH,al=63072000000,an=1800000,aK=15768000000,aF=true,at=0,aI=false,Y=false,aj,aQ={},V={},bo=200,a8={},bl={},a5=false,a3=false,a1,aR,ah,aB=N,a4,aG;
function ba(bE,bB,bA,bD,bz,bC){if(af){return}var by;if(bA){by=new Date();by.setTime(by.getTime()+bA)}s.cookie=bE+"="+k(bB)+(bA?";expires="+by.toGMTString():"")+";path="+(bD||"/")+(bz?";domain="+bz:"")+(bC?";secure":"")}function ak(bA){if(af){return 0}var by=new RegExp("(^|;)[ ]*"+bA+"=([^;]*)"),bz=by.exec(s.cookie);return bz?B(bz[2]):0}function bp(by){var bz;if(ab){bz=new RegExp("#.*");return by.replace(bz,"")}return by}function be(bA,by){var bB=j(by),bz;if(bB){return by}if(by.slice(0,1)==="/"){return j(bA)+"://"+b(bA)+by}bA=bp(bA);bz=bA.indexOf("?");if(bz>=0){bA=bA.slice(0,bz)}bz=bA.lastIndexOf("/");if(bz!==bA.length-1){bA=bA.slice(0,bz+1)}return bA+by}function aZ(bB){var bz,by,bA;for(bz=0;bz<aX.length;bz++){by=w(aX[bz].toLowerCase());if(bB===by){return true}if(by.slice(0,1)==="."){if(bB===by.slice(1)){return true}bA=bB.length-by.length;if((bA>0)&&(bB.slice(bA)===by)){return true}}}return false}function bx(by,bA){var bz=new Image(1,1);bz.onload=function(){r=0;if(typeof bA==="function"){bA()
}};bz.src=U+(U.indexOf("?")<0?"?":"&")+by}function bb(by,bB){try{var bA=C.XMLHttpRequest?new C.XMLHttpRequest():C.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bA.open("POST",U,true);bA.onreadystatechange=function(){if(this.readyState===4&&!(this.status>=200&&this.status<300)){bx(by,bB)}else{if(typeof bB==="function"){bB()}}};bA.setRequestHeader("Content-Type",au);bA.send(by)}catch(bz){bx(by,bB)}}function aD(bA,bz,bB){var by=new Date();if(!bn){if(a0==="POST"){bb(bA,bB)}else{bx(bA,bB)}i=by.getTime()+bz}}function a9(by){return bs+by+"."+bk+"."+a4}function X(){if(af){return"0"}if(!u(e.cookieEnabled)){var by=a9("testcookie");ba(by,"1");return ak(by)==="1"?"1":"0"}return e.cookieEnabled?"1":"0"}function aS(){a4=aB((ag||bf)+(bt||"/")).slice(0,4)}function ai(){var bz=a9("cvar"),by=ak(bz);if(by.length){by=JSON2.parse(by);if(E(by)){return by}}return{}}function T(){if(Y===false){Y=ai()}}function bj(){var by=new Date();a1=by.getTime()}function ad(bC,bz,by,bB,bA,bD){ba(a9("id"),bC+"."+bz+"."+by+"."+bB+"."+bA+"."+bD,al,bt,ag)
}function S(){var bz=new Date(),by=Math.round(bz.getTime()/1000),bB=ak(a9("id")),bA;if(bB){bA=bB.split(".");bA.unshift("0")}else{if(!aG){aG=aB((e.userAgent||"")+(e.platform||"")+JSON2.stringify(bl)+bz.getTime()+Math.random()).slice(0,16)}bA=["1",aG,by,0,by,"",""]}return bA}function aL(){var bz=new Date(),by=aB((e.userAgent||"")+(e.platform||"")+JSON2.stringify(bl)+bz.getTime()+Math.random()+"*121!@43").slice(0,16);return by}function R(){var by=ak(a9("ref"));if(by.length){try{by=JSON2.parse(by);if(E(by)){return by}}catch(bz){}}return["","",0,""]}function Q(){var by=af;af=false;ba(a9("id"),"",-86400,bt,ag);ba(a9("ses"),"",-86400,bt,ag);ba(a9("cvar"),"",-86400,bt,ag);ba(a9("ref"),"",-86400,bt,ag);af=by}function bi(bC){if(!bC||!E(bC)){return}var bB=[];var bA;for(bA in bC){if(Object.prototype.hasOwnProperty.call(bC,bA)){bB.push(bA)}}var bD={};bB.sort();var by=bB.length;var bz;for(bz=0;bz<by;bz++){bD[bB[bz]]=bC[bB[bz]]}return bD}function az(bA,bY,bZ,bB){var bW,bz=new Date(),bI=Math.round(bz.getTime()/1000),b3,bX,bD,bO,bT,bH,bR,bE,bV,bC=1024,b5,bL,bS=Y,bJ=a9("ses"),bK=a9("ref"),b6=a9("cvar"),bP=S(),bN=ak(bJ),b1,bU=R(),b2=aJ||bu,bF,by;
if(af){Q()}if(bn){return""}b3=bP[0];bX=bP[1];bO=bP[2];bD=bP[3];bT=bP[4];bH=bP[5];if(!u(bP[6])){bP[6]=""}bR=bP[6];if(!u(bB)){bB=""}var bM=s.characterSet||s.charset;if(!bM||bM.toLowerCase()==="utf-8"){bM=null}if(!aH||!bF.length){for(bW in aC){if(Object.prototype.hasOwnProperty.call(aC,bW)){bF=D(b2,aC[bW]);if(bF.length){break}}}for(bW in ax){if(Object.prototype.hasOwnProperty.call(ax,bW)){by=D(b2,ax[bW]);if(by.length){break}}}}if(!bF.length){bF=bU[0]}if(!by.length){by=bU[1]}bE=bU[2];bV=bU[3];if(!bN){var b0=an/1000;if(!bH||(bI-bH)>b0){bD++;bH=bT}if(!aH||!bF.length){for(bW in aC){if(Object.prototype.hasOwnProperty.call(aC,bW)){bF=D(b2,aC[bW]);if(bF.length){break}}}for(bW in ax){if(Object.prototype.hasOwnProperty.call(ax,bW)){by=D(b2,ax[bW]);if(by.length){break}}}}b5=b(a2);bL=bV.length?b(bV):"";if(b5.length&&!aZ(b5)&&(!aH||!bL.length||aZ(bL))){bV=a2}if(bV.length||bF.length){bE=bI;bU=[bF,by,bE,bp(bV.slice(0,bC))];ba(bK,JSON2.stringify(bU),aK,bt,ag)}}if(bN=="*"||!bN){b1=aL()}else{b1=bN}bA+="&idsite="+bk+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+bz.getHours()+"&m="+bz.getMinutes()+"&s="+bz.getSeconds()+"&url="+k(bp(b2))+(a2.length?"&urlref="+k(bp(a2)):"")+"&_id="+bX+"&_idts="+bO+"&_idvc="+bD+"&_idn="+b3+"&_sessionId="+b1+(bF.length?"&_rcn="+k(bF):"")+(by.length?"&_rck="+k(by):"")+"&_refts="+bE+"&_viewts="+bH+(String(bR).length?"&_ects="+bR:"")+(String(bV).length?"&_ref="+k(bp(bV.slice(0,bC))):"")+(bM?"&cs="+k(bM):"");
for(bW in bl){if(Object.prototype.hasOwnProperty.call(bl,bW)){bA+="&"+bW+"="+bl[bW]}}if(bY){bA+="&data="+k(JSON2.stringify(bY))}else{if(ae){bA+="&data="+k(JSON2.stringify(ae))}}function bG(b7,b8){var b9=JSON2.stringify(b7);if(b9.length>2){return"&"+b8+"="+k(b9)}return""}var b4=bi(aQ);var bQ=bi(V);bA+=bG(b4,"cvar");bA+=bG(bQ,"e_cvar");if(Y){bA+=bG(Y,"_cvar");for(bW in bS){if(Object.prototype.hasOwnProperty.call(bS,bW)){if(Y[bW][0]===""||Y[bW][1]===""){delete Y[bW]}}}if(aI){ba(b6,JSON2.stringify(Y),an,bt,ag)}}if(aF){if(at){bA+="&gt_ms="+at}else{if(f&&f.timing&&f.timing.requestStart&&f.timing.responseEnd){bA+="&gt_ms="+(f.timing.responseEnd-f.timing.requestStart)}}}ad(bX,bO,bD,bI,bH,u(bB)&&String(bB).length?bB:bR);ba(bJ,b1,an,bt,ag);bA+=J(bZ);if(aW.length){bA+="&"+aW}if(o(aj)){bA=aj(bA)}return bA}function bd(bB,bA,bF,bC,by,bI){var bD="idgoal=0",bE,bz=new Date(),bG=[],bH;if(String(bB).length){bD+="&ec_id="+k(bB);bE=Math.round(bz.getTime()/1000)}bD+="&revenue="+bA;if(String(bF).length){bD+="&ec_st="+bF
}if(String(bC).length){bD+="&ec_tx="+bC}if(String(by).length){bD+="&ec_sh="+by}if(String(bI).length){bD+="&ec_dt="+bI}if(a8){for(bH in a8){if(Object.prototype.hasOwnProperty.call(a8,bH)){if(!u(a8[bH][1])){a8[bH][1]=""}if(!u(a8[bH][2])){a8[bH][2]=""}if(!u(a8[bH][3])||String(a8[bH][3]).length===0){a8[bH][3]=0}if(!u(a8[bH][4])||String(a8[bH][4]).length===0){a8[bH][4]=1}bG.push(a8[bH])}}bD+="&ec_items="+k(JSON2.stringify(bG))}bD=az(bD,ae,"ecommerce",bE);aD(bD,aV)}function bc(by,bC,bB,bA,bz,bD){if(String(by).length&&u(bC)){bd(by,bC,bB,bA,bz,bD)}}function br(by){if(u(by)){bd("",by,"","","","")}}function aO(bB,bC){var by=new Date(),bA=az("action_name="+k(P(bB||ay)),bC,"log");aD(bA,aV);if(aa&&aq&&!a3){a3=true;O(s,"click",bj);O(s,"mouseup",bj);O(s,"mousedown",bj);O(s,"mousemove",bj);O(s,"mousewheel",bj);O(C,"DOMMouseScroll",bj);O(C,"scroll",bj);O(s,"keypress",bj);O(s,"keydown",bj);O(s,"keyup",bj);O(C,"resize",bj);O(C,"focus",bj);O(C,"blur",bj);a1=by.getTime();setTimeout(function bz(){var bD;by=new Date();
if((a1+aq)>by.getTime()){if(aa<by.getTime()){bD=az("ping=1",bC,"ping");aD(bD,aV)}setTimeout(bz,aq)}},aq)}}function ac(bA,bC,by,bB,bD){if(String(bA).length===0||String(bC).length===0){return false}var bz=az("e_c="+k(bA)+"&e_a="+k(bC)+(u(by)?"&e_n="+k(by):"")+(u(bB)?"&e_v="+k(bB):""),bD,"event");aD(bz,aV)}function aw(by,bB,bz,bC){var bA=az("search="+k(by)+(bB?"&search_cat="+k(bB):"")+(u(bz)?"&search_count="+bz:""),bC,"sitesearch");aD(bA,aV)}function aT(by,bB,bA){var bz=az("idgoal="+by+(bB?"&revenue="+bB:""),bA,"goal");aD(bz,aV)}function bh(bz,by,bC,bB){var bA=az(by+"="+k(bp(bz)),bC,"link");aD(bA,(bB?0:aV),bB)}function bm(bz,by){if(bz!==""){return bz+by.charAt(0).toUpperCase()+by.slice(1)}return by}function av(bD){var bC,by,bB=["","webkit","ms","moz"],bA;if(!aE){for(by=0;by<bB.length;by++){bA=bB[by];if(Object.prototype.hasOwnProperty.call(s,bm(bA,"hidden"))){if(s[bm(bA,"visibilityState")]==="prerender"){bC=true}break}}}if(bC){O(s,bA+"visibilitychange",function bz(){s.removeEventListener(bA+"visibilitychange",bz,false);
bD()});return}bD()}function ar(bA,bz){var bB,by="(^| )(piwik[_-]"+bz;if(bA){for(bB=0;bB<bA.length;bB++){by+="|"+bA[bB]}}by+=")( |$)";return new RegExp(by)}function bg(bB,by,bC){var bA=ar(aP,"download"),bz=ar(ao,"link"),bD=new RegExp("\\.("+aA+")([?&#]|$)","i");return bz.test(bB)?"link":(bA.test(bB)||bD.test(by)?"download":(bC?0:"link"))}function a7(bD){var bB,bz,by;bB=bD.parentNode;while(bB!==null&&u(bB)){bz=bD.tagName.toUpperCase();if(bz==="A"||bz==="AREA"){break}bD=bB;bB=bD.parentNode}if(u(bD.href)){var bE=bD.hostname||b(bD.href),bF=bE.toLowerCase(),bA=bD.href.replace(bE,bF),bC=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!bC.test(bA)){by=bg(bD.className,bA,aZ(bF));if(by){bA=g(bA);bh(bA,by)}}}}function bw(by){var bz,bA;by=by||C.event;bz=by.which||by.button;bA=by.target||by.srcElement;if(by.type==="click"){if(bA){a7(bA)}}else{if(by.type==="mousedown"){if((bz===1||bz===2)&&bA){aR=bz;ah=bA}else{aR=ah=null}}else{if(by.type==="mouseup"){if(bz===aR&&bA===ah){a7(bA)
}aR=ah=null}}}}function a6(bz,by){if(by){O(bz,"mouseup",bw,false);O(bz,"mousedown",bw,false)}else{O(bz,"click",bw,false)}}function aN(bz){if(!a5){a5=true;var bA,by=ar(Z,"ignore"),bB=s.links;if(bB){for(bA=0;bA<bB.length;bA++){if(!by.test(bB[bA].className)){a6(bB[bA],bz)}}}}}function bq(){var bz,bA,bB={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},by=(new RegExp("Mac OS X.*Safari/")).test(e.userAgent)?C.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(e.userAgent))){if(e.mimeTypes&&e.mimeTypes.length){for(bz in bB){if(Object.prototype.hasOwnProperty.call(bB,bz)){bA=e.mimeTypes[bB[bz]];bl[bz]=(bA&&bA.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&u(e.javaEnabled)&&e.javaEnabled()){bl.java="1"}if(o(C.GearsFactory)){bl.gears="1"}bl.cookie=X()}bl.res=F.width*by+"x"+F.height*by
}bq();aS();return{getVisitorId:function(){return(S())[1]},getVisitorInfo:function(){return S()},getAttributionInfo:function(){return R()},getAttributionCampaignName:function(){return R()[0]},getAttributionCampaignKeyword:function(){return R()[1]},getAttributionReferrerTimestamp:function(){return R()[2]},getAttributionReferrerUrl:function(){return R()[3]},setTrackerUrl:function(by){U=by},setSiteId:function(by){bk=by},setCustomData:function(by,bz){if(E(by)){ae=by}else{if(!ae){ae=[]}ae[by]=bz}},getCustomData:function(){return ae},setCustomRequestProcessing:function(by){aj=by},appendToTrackingUrl:function(by){aW=by},getRequest:function(by){return az(by)},addPlugin:function(by,bz){a[by]=bz},setCustomVariable:function(bz,by,bC,bA){var bB;if(!u(bA)){bA="visit"}if(!u(by)){return}if(!u(bC)){bC=""}if(bz>0){by=!l(by)?String(by):by;bC=!l(bC)?String(bC):bC;bB=[by.slice(0,bo),bC.slice(0,bo)];if(bA==="visit"||bA===2){T();Y[bz]=bB}else{if(bA==="page"||bA===3){aQ[bz]=bB}else{if(bA==="event"){V[bz]=bB}}}}},getCustomVariable:function(bz,bA){var by;
if(!u(bA)){bA="visit"}if(bA==="page"||bA===3){by=aQ[bz]}else{if(bA==="event"){by=V[bz]}else{if(bA==="visit"||bA===2){T();by=Y[bz]}}}if(!u(by)||(by&&by[0]==="")){return false}return by},deleteCustomVariable:function(by,bz){if(this.getCustomVariable(by,bz)){this.setCustomVariable(by,"","",bz)}},storeCustomVariablesInCookie:function(){aI=true},setLinkTrackingTimer:function(by){aV=by},setDownloadExtensions:function(by){aA=by},addDownloadExtensions:function(by){aA+="|"+by},setDomains:function(by){aX=l(by)?[by]:by;aX.push(bf)},setIgnoreClasses:function(by){Z=l(by)?[by]:by},setRequestMethod:function(by){a0=by||aY},setRequestContentType:function(by){au=by||aM},setReferrerUrl:function(by){a2=by},setCustomUrl:function(by){aJ=be(bu,by)},setDocumentTitle:function(by){ay=by},setAPIUrl:function(by){am=by},setDownloadClasses:function(by){aP=l(by)?[by]:by},setLinkClasses:function(by){ao=l(by)?[by]:by},setCampaignNameKey:function(by){aC=l(by)?[by]:by},setCampaignKeywordKey:function(by){ax=l(by)?[by]:by},discardHashTag:function(by){ab=by
},setCookieNamePrefix:function(by){bs=by;Y=ai()},setCookieDomain:function(by){ag=w(by);aS()},setCookiePath:function(by){bt=by;aS()},setVisitorCookieTimeout:function(by){al=by*1000},setSessionCookieTimeout:function(by){an=by*1000},setReferralCookieTimeout:function(by){aK=by*1000},setConversionAttributionFirstReferrer:function(by){aH=by},disableCookies:function(){af=true;bl.cookie="0"},deleteCookies:function(){Q()},setDoNotTrack:function(bz){var by=e.doNotTrack||e.msDoNotTrack;bn=bz&&(by==="yes"||by==="1");if(bn){this.disableCookies()}},addListener:function(bz,by){a6(bz,by)},enableLinkTracking:function(by){if(n){aN(by)}else{A.push(function(){aN(by)})}},enableJSErrorTracking:function(){if(bv){return}bv=true;var by=C.onerror;C.onerror=function(bD,bB,bA,bC,bz){av(function(){var bE="JavaScript Errors";var bF=bB+":"+bA;if(bC){bF+=":"+bC}ac(bE,bF,bD)});if(by){return by(bD,bB,bA,bC,bz)}return false}},disablePerformanceTracking:function(){aF=false},setGenerationTimeMs:function(by){at=parseInt(by,10)
},setHeartBeatTimer:function(bA,bz){var by=new Date();aa=by.getTime()+bA*1000;aq=bz*1000},killFrame:function(){if(C.location!==C.top.location){C.top.location=C.location}},redirectFile:function(by){if(C.location.protocol==="file:"){C.location=by}},setCountPreRendered:function(by){aE=by},trackGoal:function(by,bA,bz){av(function(){aT(by,bA,bz)})},trackLink:function(bz,by,bB,bA){av(function(){bh(bz,by,bB,bA)})},trackPageView:function(by,bz){if(x(bk)){av(function(){H(U,am,bk)})}else{av(function(){aO(by,bz)})}},trackEvent:function(bz,bB,by,bA){av(function(){ac(bz,bB,by,bA)})},trackSiteSearch:function(by,bA,bz){av(function(){aw(by,bA,bz)})},setEcommerceView:function(bB,by,bA,bz){if(!u(bA)||!bA.length){bA=""}else{if(bA instanceof Array){bA=JSON2.stringify(bA)}}aQ[5]=["_pkc",bA];if(u(bz)&&String(bz).length){aQ[2]=["_pkp",bz]}if((!u(bB)||!bB.length)&&(!u(by)||!by.length)){return}if(u(bB)&&bB.length){aQ[3]=["_pks",bB]}if(!u(by)||!by.length){by=""}aQ[4]=["_pkn",by]},addEcommerceItem:function(bC,by,bA,bz,bB){if(bC.length){a8[bC]=[bC,by,bA,bz,bB]
}},trackEcommerceOrder:function(by,bC,bB,bA,bz,bD){bc(by,bC,bB,bA,bz,bD)},trackEcommerceCartUpdate:function(by){br(by)}}}function t(){return{push:L}}O(C,"beforeunload",M,false);m();Date.prototype.getTimeAlias=Date.prototype.getTime;G=new z();var p={setTrackerUrl:1,setAPIUrl:1,setSiteId:1,disableCookies:1};var d;for(r=0;r<_paq.length;r++){d=_paq[r][0];if(p[d]){L(_paq[r]);delete _paq[r];if(p[d]>1){if(console!==undefined&&console&&console.error){console.error("The method "+d+' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/api-reference/tracking-javascript#multiple-piwik-trackers')}}p[d]++}}for(r=0;r<_paq.length;r++){if(_paq[r]){L(_paq[r])}}_paq=new t();c={addPlugin:function(Q,R){a[Q]=R},getTracker:function(Q,R){return new z(Q,R)},getAsyncTracker:function(){return G}};if(typeof define==="function"&&define.amd){define("piwik",[],function(){return c})}return c}())}if(window&&window.piwikAsyncInit){window.piwikAsyncInit()
}(function(){var a=(typeof AnalyticsTracker);if(a==="undefined"){AnalyticsTracker=Piwik}}());if(typeof piwik_log!=="function"){piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};
/*! @license-end */
};