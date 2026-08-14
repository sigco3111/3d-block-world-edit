(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function r0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Pf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function kS(){if(j_)return se;j_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function y(U,$,St){this.props=U,this.context=$,this.refs=C,this.updater=St||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function B(U,$,St){this.props=U,this.context=$,this.refs=C,this.updater=St||M}var P=B.prototype=new g;P.constructor=B,A(P,y.prototype),P.isPureReactComponent=!0;var D=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function I(U,$,St,yt,Q,_t){return St=_t.ref,{$$typeof:o,type:U,key:$,ref:St!==void 0?St:null,props:_t}}function Z(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(St){return $[St]})}var H=/\/+/g;function ct(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function lt(){}function rt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(lt,lt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function it(U,$,St,yt,Q){var _t=typeof U;(_t==="undefined"||_t==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(_t){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case t:Mt=!0;break;case _:return Mt=U._init,it(Mt(U._payload),$,St,yt,Q)}}if(Mt)return Q=Q(U),Mt=yt===""?"."+ct(U,0):yt,D(Q)?(St="",Mt!=null&&(St=Mt.replace(H,"$&/")+"/"),it(Q,$,St,"",function(oe){return oe})):Q!=null&&(w(Q)&&(Q=Z(Q,St+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(H,"$&/")+"/")+Mt)),$.push(Q)),1;Mt=0;var At=yt===""?".":yt+":";if(D(U))for(var Ct=0;Ct<U.length;Ct++)yt=U[Ct],_t=At+ct(yt,Ct),Mt+=it(yt,$,St,_t,Q);else if(Ct=S(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(yt=U.next()).done;)yt=yt.value,_t=At+ct(yt,Ct++),Mt+=it(yt,$,St,_t,Q);else if(_t==="object"){if(typeof U.then=="function")return it(rt(U),$,St,yt,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function L(U,$,St){if(U==null)return U;var yt=[],Q=0;return it(U,yt,"","",function(_t){return $.call(St,_t,Q++)}),yt}function X(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(St){(U._status===0||U._status===-1)&&(U._status=1,U._result=St)},function(St){(U._status===0||U._status===-1)&&(U._status=2,U._result=St)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var W=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function mt(){}return se.Children={map:L,forEach:function(U,$,St){L(U,function(){$.apply(this,arguments)},St)},count:function(U){var $=0;return L(U,function(){$++}),$},toArray:function(U){return L(U,function($){return $})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},se.Component=y,se.Fragment=i,se.Profiler=l,se.PureComponent=B,se.StrictMode=s,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,se.__COMPILER_RUNTIME={__proto__:null,c:function(U){return G.H.useMemoCache(U)}},se.cache=function(U){return function(){return U.apply(null,arguments)}},se.cloneElement=function(U,$,St){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=A({},U.props),Q=U.key,_t=void 0;if($!=null)for(Mt in $.ref!==void 0&&(_t=void 0),$.key!==void 0&&(Q=""+$.key),$)!k.call($,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&$.ref===void 0||(yt[Mt]=$[Mt]);var Mt=arguments.length-2;if(Mt===1)yt.children=St;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];yt.children=At}return I(U.type,Q,void 0,void 0,_t,yt)},se.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},se.createElement=function(U,$,St){var yt,Q={},_t=null;if($!=null)for(yt in $.key!==void 0&&(_t=""+$.key),$)k.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=$[yt]);var Mt=arguments.length-2;if(Mt===1)Q.children=St;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];Q.children=At}if(U&&U.defaultProps)for(yt in Mt=U.defaultProps,Mt)Q[yt]===void 0&&(Q[yt]=Mt[yt]);return I(U,_t,void 0,void 0,null,Q)},se.createRef=function(){return{current:null}},se.forwardRef=function(U){return{$$typeof:d,render:U}},se.isValidElement=w,se.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:X}},se.memo=function(U,$){return{$$typeof:m,type:U,compare:$===void 0?null:$}},se.startTransition=function(U){var $=G.T,St={};G.T=St;try{var yt=U(),Q=G.S;Q!==null&&Q(St,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(mt,W)}catch(_t){W(_t)}finally{G.T=$}},se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},se.use=function(U){return G.H.use(U)},se.useActionState=function(U,$,St){return G.H.useActionState(U,$,St)},se.useCallback=function(U,$){return G.H.useCallback(U,$)},se.useContext=function(U){return G.H.useContext(U)},se.useDebugValue=function(){},se.useDeferredValue=function(U,$){return G.H.useDeferredValue(U,$)},se.useEffect=function(U,$,St){var yt=G.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,$)},se.useId=function(){return G.H.useId()},se.useImperativeHandle=function(U,$,St){return G.H.useImperativeHandle(U,$,St)},se.useInsertionEffect=function(U,$){return G.H.useInsertionEffect(U,$)},se.useLayoutEffect=function(U,$){return G.H.useLayoutEffect(U,$)},se.useMemo=function(U,$){return G.H.useMemo(U,$)},se.useOptimistic=function(U,$){return G.H.useOptimistic(U,$)},se.useReducer=function(U,$,St){return G.H.useReducer(U,$,St)},se.useRef=function(U){return G.H.useRef(U)},se.useState=function(U){return G.H.useState(U)},se.useSyncExternalStore=function(U,$,St){return G.H.useSyncExternalStore(U,$,St)},se.useTransition=function(){return G.H.useTransition()},se.version="19.1.0",se}var Z_;function od(){return Z_||(Z_=1,Pf.exports=kS()),Pf.exports}var On=od();const XS=r0(On);var Bf={exports:{}},bo={},zf={exports:{}},If={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function WS(){return K_||(K_=1,function(o){function t(L,X){var W=L.length;L.push(X);t:for(;0<W;){var mt=W-1>>>1,U=L[mt];if(0<l(U,X))L[mt]=X,L[W]=U,W=mt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var X=L[0],W=L.pop();if(W!==X){L[0]=W;t:for(var mt=0,U=L.length,$=U>>>1;mt<$;){var St=2*(mt+1)-1,yt=L[St],Q=St+1,_t=L[Q];if(0>l(yt,W))Q<U&&0>l(_t,yt)?(L[mt]=_t,L[Q]=W,mt=Q):(L[mt]=yt,L[St]=W,mt=St);else if(Q<U&&0>l(_t,W))L[mt]=_t,L[Q]=W,mt=Q;else break t}}return X}function l(L,X){var W=L.sortIndex-X.sortIndex;return W!==0?W:L.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,v=null,S=3,M=!1,A=!1,C=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var X=i(m);X!==null;){if(X.callback===null)s(m);else if(X.startTime<=L)s(m),X.sortIndex=X.expirationTime,t(p,X);else break;X=i(m)}}function G(L){if(C=!1,D(L),!A)if(i(p)!==null)A=!0,k||(k=!0,ct());else{var X=i(m);X!==null&&it(G,X.startTime-L)}}var k=!1,I=-1,Z=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<Z)}function H(){if(y=!1,k){var L=o.unstable_now();w=L;var X=!0;try{t:{A=!1,C&&(C=!1,B(I),I=-1),M=!0;var W=S;try{e:{for(D(L),v=i(p);v!==null&&!(v.expirationTime>L&&R());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,S=v.priorityLevel;var U=mt(v.expirationTime<=L);if(L=o.unstable_now(),typeof U=="function"){v.callback=U,D(L),X=!0;break e}v===i(p)&&s(p),D(L)}else s(p);v=i(p)}if(v!==null)X=!0;else{var $=i(m);$!==null&&it(G,$.startTime-L),X=!1}}break t}finally{v=null,S=W,M=!1}X=void 0}}finally{X?ct():k=!1}}}var ct;if(typeof P=="function")ct=function(){P(H)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,rt=lt.port2;lt.port1.onmessage=H,ct=function(){rt.postMessage(null)}}else ct=function(){g(H,0)};function it(L,X){I=g(function(){L(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var W=S;S=X;try{return L()}finally{S=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(L,X){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=S;S=L;try{return X()}finally{S=W}},o.unstable_scheduleCallback=function(L,X,W){var mt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?mt+W:mt):W=mt,L){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,L={id:_++,callback:X,priorityLevel:L,startTime:W,expirationTime:U,sortIndex:-1},W>mt?(L.sortIndex=W,t(m,L),i(p)===null&&L===i(m)&&(C?(B(I),I=-1):C=!0,it(G,W-mt))):(L.sortIndex=U,t(p,L),A||M||(A=!0,k||(k=!0,ct()))),L},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(L){var X=S;return function(){var W=S;S=X;try{return L.apply(this,arguments)}finally{S=W}}}}(If)),If}var Q_;function qS(){return Q_||(Q_=1,zf.exports=WS()),zf.exports}var Ff={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function YS(){if(J_)return Cn;J_=1;var o=od();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,_)},Cn.flushSync=function(p){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=_,s.d.f()}},Cn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Cn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Cn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(p,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Cn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Cn.requestFormReset=function(p){s.d.r(p)},Cn.unstable_batchedUpdates=function(p,m){return p(m)},Cn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var $_;function jS(){if($_)return Ff.exports;$_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ff.exports=YS(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function ZS(){if(tg)return bo;tg=1;var o=qS(),t=od(),i=jS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===r)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,r=f;break}if(T===r){x=!0,r=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,r=u;break}if(T===r){x=!0,r=f,a=u;break}T=T.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),P=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case G:return"Suspense";case k:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case P:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:rt(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return rt(e(n))}catch{}}return null}var it=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},mt=[],U=-1;function $(e){return{current:e}}function St(e){0>U||(e.current=mt[U],mt[U]=null,U--)}function yt(e,n){U++,mt[U]=e.current,e.current=n}var Q=$(null),_t=$(null),Mt=$(null),At=$(null);function Ct(e,n){switch(yt(Mt,n),yt(_t,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?M_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=M_(n),e=E_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}St(Q),yt(Q,e)}function oe(){St(Q),St(_t),St(Mt)}function Kt(e){e.memoizedState!==null&&yt(At,e);var n=Q.current,a=E_(n,e.type);n!==a&&(yt(_t,e),yt(Q,a))}function Le(e){_t.current===e&&(St(Q),St(_t)),At.current===e&&(St(At),xo._currentValue=W)}var Ie=Object.prototype.hasOwnProperty,_e=o.unstable_scheduleCallback,z=o.unstable_cancelCallback,Sn=o.unstable_shouldYield,ye=o.unstable_requestPaint,he=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ie=o.unstable_NormalPriority,Je=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ht=null,pt=null;function ut(e){if(typeof E=="function"&&et(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ht,e)}catch{}}var Ot=Math.clz32?Math.clz32:Vt,Dt=Math.log,Ht=Math.LN2;function Vt(e){return e>>>=0,e===0?32:31-(Dt(e)/Ht|0)|0}var xt=256,Pt=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=Wt(r):(x&=T,x!==0?u=Wt(x):a||(a=T&~e,a!==0&&(u=Wt(a))))):(T=r&~f,T!==0?u=Wt(T):x!==0?u=Wt(x):a||(a=r&~e,a!==0&&(u=Wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var e=xt;return xt<<=1,(xt&4194048)===0&&(xt=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,r,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,O=e.expirationTimes,J=e.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-Ot(a),gt=1<<ft;T[ft]=0,O[ft]=-1;var nt=J[ft];if(nt!==null)for(J[ft]=null,ft=0;ft<nt.length;ft++){var at=nt[ft];at!==null&&(at.lane&=-536870913)}a&=~gt}r!==0&&vt(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function vt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function It(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function ee(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:V_(e.type))}function Wn(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+dn,xn="__reactProps$"+dn,Bn="__reactContainer$"+dn,qa="__reactEvents$"+dn,Vo="__reactListeners$"+dn,ko="__reactHandles$"+dn,Ya="__reactResources$"+dn,la="__reactMarker$"+dn;function ua(e){delete e[rn],delete e[xn],delete e[qa],delete e[Vo],delete e[ko]}function Ni(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Bn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=R_(e);e!==null;){if(a=e[rn])return a;e=R_(e)}return n}e=a,a=e.parentNode}return null}function Oi(e){if(e=e[rn]||e[Bn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ca(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[la]=!0}var Xo=new Set,Wo={};function Pi(e,n){b(e,n),b(e+"Capture",n)}function b(e,n){for(Wo[e]=n,e=0;e<n.length;e++)Xo.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},ot={};function j(e){return Ie.call(ot,e)?!0:Ie.call(st,e)?!1:Y.test(e)?ot[e]=!0:(st[e]=!0,!1)}function Tt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var zt,Jt;function jt(e){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+Jt}var kt=!1;function ue(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(at){var nt=at}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(at){nt=at}e.call(gt.prototype)}}else{try{throw Error()}catch(at){nt=at}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(at){if(at&&nt&&typeof at.stack=="string")return[at.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var O=x.split(`
`),J=T.split(`
`);for(u=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(r===O.length||u===J.length)for(r=O.length-1,u=J.length-1;1<=r&&0<=u&&O[r]!==J[u];)u--;for(;1<=r&&0<=u;r--,u--)if(O[r]!==J[u]){if(r!==1||u!==1)do if(r--,u--,0>u||O[r]!==J[u]){var ft=`
`+O[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=u);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function Re(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return jt("Activity");default:return""}}function Ve(e){try{var n="";do n+=Re(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e){var n=Se(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){r=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=Zt(e))}function Me(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Se(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fa=/[\n"\\]/g;function ke(e){return e.replace(fa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(e,n,a,r,u,f,x,T){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ve(n)):e.value!==""+ve(n)&&(e.value=""+ve(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?An(e,x,ve(n)):a!=null?An(e,x,ve(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ve(T):e.removeAttribute("name")}function Fe(e,n,a,r,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function An(e,n,a){n==="number"&&bn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ve(a):""}function yn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(it(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ve(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function yi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Md(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ed(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Md(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Md(e,f,n[f])}function Nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return V0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ou=null;function Pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function Td(e){var n=Oi(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[xn]||null;if(!u)throw Error(s(90));Bi(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Me(r)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Bu=!1;function bd(e,n,a){if(Bu)return e(n,a);Bu=!0;try{var r=e(n);return r}finally{if(Bu=!1,(ws!==null||Ds!==null)&&(Ul(),ws&&(n=ws,e=Ds,Ds=ws=null,Td(n),e)))for(n=0;n<e.length;n++)Td(e[n])}}function Lr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(Ii)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{zu=!1}var ha=null,Iu=null,Yo=null;function Ad(){if(Yo)return Yo;var e,n=Iu,a=n.length,r,u="value"in ha?ha.value:ha.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return Yo=u.slice(e,1<r?1-r:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Rd(){return!1}function zn(e){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:Rd,this.isPropagationStopped=Rd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=zn(Za),Or=_({},Za,{view:0,detail:0}),k0=zn(Or),Fu,Hu,Pr,Qo=_({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Fu=e.screenX-Pr.screenX,Hu=e.screenY-Pr.screenY):Hu=Fu=0,Pr=e),Fu)},movementY:function(e){return"movementY"in e?e.movementY:Hu}}),Cd=zn(Qo),X0=_({},Qo,{dataTransfer:0}),W0=zn(X0),q0=_({},Or,{relatedTarget:0}),Gu=zn(q0),Y0=_({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=zn(Y0),Z0=_({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K0=zn(Z0),Q0=_({},Za,{data:0}),wd=zn(Q0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tv[e])?!!n[e]:!1}function Vu(){return ev}var nv=_({},Or,{key:function(e){if(e.key){var n=J0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iv=zn(nv),av=_({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=zn(av),sv=_({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),rv=zn(sv),ov=_({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=zn(ov),uv=_({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=zn(uv),fv=_({},Za,{newState:0,oldState:0}),hv=zn(fv),dv=[9,13,27,32],ku=Ii&&"CompositionEvent"in window,Br=null;Ii&&"documentMode"in document&&(Br=document.documentMode);var pv=Ii&&"TextEvent"in window&&!Br,Ud=Ii&&(!ku||Br&&8<Br&&11>=Br),Ld=" ",Nd=!1;function Od(e,n){switch(e){case"keyup":return dv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function mv(e,n){switch(e){case"compositionend":return Pd(n);case"keypress":return n.which!==32?null:(Nd=!0,Ld);case"textInput":return e=n.data,e===Ld&&Nd?null:e;default:return null}}function _v(e,n){if(Us)return e==="compositionend"||!ku&&Od(e,n)?(e=Ad(),Yo=Iu=ha=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ud&&n.locale!=="ko"?null:n.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gv[e.type]:n==="textarea"}function zd(e,n,a,r){ws?Ds?Ds.push(r):Ds=[r]:ws=r,n=zl(n,"onChange"),0<n.length&&(a=new Ko("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var zr=null,Ir=null;function vv(e){g_(e,0)}function Jo(e){var n=ja(e);if(Me(n))return e}function Id(e,n){if(e==="change")return n}var Fd=!1;if(Ii){var Xu;if(Ii){var Wu="oninput"in document;if(!Wu){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),Wu=typeof Hd.oninput=="function"}Xu=Wu}else Xu=!1;Fd=Xu&&(!document.documentMode||9<document.documentMode)}function Gd(){zr&&(zr.detachEvent("onpropertychange",Vd),Ir=zr=null)}function Vd(e){if(e.propertyName==="value"&&Jo(Ir)){var n=[];zd(n,Ir,e,Pu(e)),bd(vv,n)}}function Sv(e,n,a){e==="focusin"?(Gd(),zr=n,Ir=a,zr.attachEvent("onpropertychange",Vd)):e==="focusout"&&Gd()}function xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(Ir)}function yv(e,n){if(e==="click")return Jo(n)}function Mv(e,n){if(e==="input"||e==="change")return Jo(n)}function Ev(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Ev;function Fr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ie.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,n){var a=kd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=kd(a)}}function Wd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bn(e.document)}return n}function qu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Tv=Ii&&"documentMode"in document&&11>=document.documentMode,Ls=null,Yu=null,Hr=null,ju=!1;function Yd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ju||Ls==null||Ls!==bn(r)||(r=Ls,"selectionStart"in r&&qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Fr(Hr,r)||(Hr=r,r=zl(Yu,"onSelect"),0<r.length&&(n=new Ko("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ls)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ns={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Zu={},jd={};Ii&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Qa(e){if(Zu[e])return Zu[e];if(!Ns[e])return e;var n=Ns[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jd)return Zu[e]=n[a];return e}var Zd=Qa("animationend"),Kd=Qa("animationiteration"),Qd=Qa("animationstart"),bv=Qa("transitionrun"),Av=Qa("transitionstart"),Rv=Qa("transitioncancel"),Jd=Qa("transitionend"),$d=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function hi(e,n){$d.set(e,n),Pi(n,[e])}var tp=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},tp.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var ni=[],Os=0,Qu=0;function $o(){for(var e=Os,n=Qu=Os=0;n<e;){var a=ni[n];ni[n++]=null;var r=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&ep(a,u,f)}}function tl(e,n,a,r){ni[Os++]=e,ni[Os++]=n,ni[Os++]=a,ni[Os++]=r,Qu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ju(e,n,a,r){return tl(e,n,a,r),el(e)}function Ps(e,n){return tl(e,null,null,n),el(e)}function ep(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function el(e){if(50<fo)throw fo=0,sf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Bs={};function Cv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new Cv(e,n,a,r)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function np(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,r,u,f){var x=0;if(r=e,typeof e=="function")$u(e)&&(x=1);else if(typeof e=="string")x=DS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Yn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return Ja(a.children,u,f,n);case C:x=8,u|=24;break;case y:return e=Yn(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case G:return e=Yn(13,a,n,u),e.elementType=G,e.lanes=f,e;case k:return e=Yn(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case P:x=10;break t;case B:x=9;break t;case D:x=11;break t;case I:x=14;break t;case Z:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(x,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Ja(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function tc(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function ec(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zs=[],Is=0,il=null,al=0,ii=[],ai=0,$a=null,Hi=1,Gi="";function ts(e,n){zs[Is++]=al,zs[Is++]=il,il=e,al=n}function ip(e,n,a){ii[ai++]=Hi,ii[ai++]=Gi,ii[ai++]=$a,$a=e;var r=Hi;e=Gi;var u=32-Ot(r)-1;r&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,Hi=1<<32-Ot(n)+u|a<<u|r,Gi=f+e}else Hi=1<<f|a<<u|r,Gi=e}function nc(e){e.return!==null&&(ts(e,1),ip(e,1,0))}function ic(e){for(;e===il;)il=zs[--Is],zs[Is]=null,al=zs[--Is],zs[Is]=null;for(;e===$a;)$a=ii[--ai],ii[ai]=null,Gi=ii[--ai],ii[ai]=null,Hi=ii[--ai],ii[ai]=null}var Ln=null,Ze=null,Ce=!1,es=null,Mi=!1,ac=Error(s(519));function ns(e){var n=Error(s(418,""));throw kr(ei(n,e)),ac}function ap(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[xn]=r,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)pe(po[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Fe(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),je(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),yn(n,r.value,r.defaultValue,r.children),je(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||y_(n.textContent,a)?(r.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),r.onScroll!=null&&pe("scroll",n),r.onScrollEnd!=null&&pe("scrollend",n),r.onClick!=null&&(n.onclick=Il),n=!0):n=!1,n||ns(e)}function sp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Ln=Ln.return}}function Gr(e){if(e!==Ln)return!1;if(!Ce)return sp(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yf(e.type,e.memoizedProps)),a=!a),a&&Ze&&ns(e),sp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=pi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,Ca(e.type)?(e=bf,bf=null,Ze=e):Ze=n):Ze=Ln?pi(e.stateNode.nextSibling):null;return!0}function Vr(){Ze=Ln=null,Ce=!1}function rp(){var e=es;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),es=null),e}function kr(e){es===null?es=[e]:es.push(e)}var sc=$(null),is=null,Vi=null;function da(e,n,a){yt(sc,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=sc.current,St(sc)}function rc(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function oc(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),rc(f.return,a,e),r||(x=null);break t}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),rc(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Xr(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var T=u.type;qn(u.pendingProps.value,x.value)||(e!==null?e.push(T):e=[T])}}else if(u===At.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}u=u.return}e!==null&&oc(n,e,a,r),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return op(is,e)}function rl(e,n){return is===null&&as(e),op(e,n)}function op(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var wv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Dv=o.unstable_scheduleCallback,Uv=o.unstable_NormalPriority,ln={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lc(){return{controller:new wv,data:new Map,refCount:0}}function Wr(e){e.refCount--,e.refCount===0&&Dv(Uv,function(){e.controller.abort()})}var qr=null,uc=0,Fs=0,Hs=null;function Lv(e,n){if(qr===null){var a=qr=[];uc=0,Fs=hf(),Hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return uc++,n.then(lp,lp),n}function lp(){if(--uc===0&&qr!==null){Hs!==null&&(Hs.status="fulfilled");var e=qr;qr=null,Fs=0,Hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Nv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var up=L.S;L.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lv(e,n),up!==null&&up(e,n)};var ss=$(null);function cc(){var e=ss.current;return e!==null?e:Xe.pooledCache}function ol(e,n){n===null?yt(ss,ss.current):yt(ss,n.pool)}function cp(){var e=cc();return e===null?null:{parent:ln._currentValue,pool:e}}var Yr=Error(s(460)),fp=Error(s(474)),ll=Error(s(542)),fc={then:function(){}};function hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ul(){}function dp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ul,ul),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mp(e),e;default:if(typeof n.status=="string")n.then(ul,ul);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mp(e),e}throw jr=n,Yr}}var jr=null;function pp(){if(jr===null)throw Error(s(459));var e=jr;return jr=null,e}function mp(e){if(e===Yr||e===ll)throw Error(s(483))}var pa=!1;function hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=el(e),ep(e,null,a),n}return tl(e,r,n,a),el(e)}function Zr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,It(e,a)}}function pc(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var mc=!1;function Kr(){if(mc){var e=Hs;if(e!==null)throw e}}function Qr(e,n,a,r){mc=!1;var u=e.updateQueue;pa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var O=T,J=O.next;O.next=null,x===null?f=J:x.next=J,x=O;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==x&&(T===null?ft.firstBaseUpdate=J:T.next=J,ft.lastBaseUpdate=O))}if(f!==null){var gt=u.baseState;x=0,ft=J=O=null,T=f;do{var nt=T.lane&-536870913,at=nt!==T.lane;if(at?(xe&nt)===nt:(r&nt)===nt){nt!==0&&nt===Fs&&(mc=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var te=e,Qt=T;nt=n;var Pe=a;switch(Qt.tag){case 1:if(te=Qt.payload,typeof te=="function"){gt=te.call(Pe,gt,nt);break t}gt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Qt.payload,nt=typeof te=="function"?te.call(Pe,gt,nt):te,nt==null)break t;gt=_({},gt,nt);break t;case 2:pa=!0}}nt=T.callback,nt!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[nt]:at.push(nt))}else at={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(J=ft=at,O=gt):ft=ft.next=at,x|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;at=T,T=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ft===null&&(O=gt),u.baseState=O,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ta|=x,e.lanes=x,e.memoizedState=gt}}function _p(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_p(a[e],n)}var Gs=$(null),cl=$(0);function vp(e,n){e=Ki,yt(cl,e),yt(Gs,n),Ki=e|n.baseLanes}function _c(){yt(cl,Ki),yt(Gs,Gs.current)}function gc(){Ki=cl.current,St(Gs),St(cl)}var ga=0,ce=null,Ne=null,nn=null,fl=!1,Vs=!1,rs=!1,hl=0,Jr=0,ks=null,Ov=0;function $e(){throw Error(s(321))}function vc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Sc(e,n,a,r,u,f){return ga=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?em:nm,rs=!1,f=a(r,u),rs=!1,Vs&&(f=xp(n,a,r,u)),Sp(e),f}function Sp(e){L.H=vl;var n=Ne!==null&&Ne.next!==null;if(ga=0,nn=Ne=ce=null,fl=!1,Jr=0,ks=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&sl(e)&&(mn=!0))}function xp(e,n,a,r){ce=e;var u=0;do{if(Vs&&(ks=null),Jr=0,Vs=!1,25<=u)throw Error(s(301));if(u+=1,nn=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Gv,f=n(a,r)}while(Vs);return f}function Pv(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?$r(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ce.flags|=1024),n}function xc(){var e=hl!==0;return hl=0,e}function yc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Mc(e){if(fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fl=!1}ga=0,nn=Ne=ce=null,Vs=!1,Jr=hl=0,ks=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ce.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Ne===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=nn===null?ce.memoizedState:nn.next;if(n!==null)nn=n,Ne=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},nn===null?ce.memoizedState=nn=e:nn=nn.next=e}return nn}function Ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $r(e){var n=Jr;return Jr+=1,ks===null&&(ks=[]),e=dp(ks,e,n),n=ce,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?em:nm),e}function dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $r(e);if(e.$$typeof===P)return Rn(e)}throw Error(s(438,String(e)))}function Tc(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ec(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function pl(e){var n=an();return bc(n,Ne,e)}function bc(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=x=null,O=null,J=n,ft=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(xe&gt)===gt:(ga&gt)===gt){var nt=J.revertLane;if(nt===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Fs&&(ft=!0);else if((ga&nt)===nt){J=J.next,nt===Fs&&(ft=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(T=O=gt,x=f):O=O.next=gt,ce.lanes|=nt,Ta|=nt;gt=J.action,rs&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else nt={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(T=O=nt,x=f):O=O.next=nt,ce.lanes|=gt,Ta|=gt;J=J.next}while(J!==null&&J!==n);if(O===null?x=f:O.next=T,!qn(f,e.memoizedState)&&(mn=!0,ft&&(a=Hs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=O,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ac(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);qn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function yp(e,n,a){var r=ce,u=an(),f=Ce;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!qn((Ne||u).memoizedState,a);x&&(u.memoizedState=a,mn=!0),u=u.queue;var T=Tp.bind(null,r,u,e);if(to(2048,8,T,[e]),u.getSnapshot!==n||x||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,Xs(9,ml(),Ep.bind(null,r,u,a,n),null),Xe===null)throw Error(s(349));f||(ga&124)!==0||Mp(r,n,a)}return a}function Mp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Ec(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ep(e,n,a,r){n.value=a,n.getSnapshot=r,bp(n)&&Ap(e)}function Tp(e,n,a){return a(function(){bp(n)&&Ap(e)})}function bp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Ap(e){var n=Ps(e,2);n!==null&&Jn(n,e,2)}function Rc(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),rs){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Rp(e,n,a,r){return e.baseState=a,bc(e,Ne,typeof r=="function"?r:Xi)}function Bv(e,n,a,r,u){if(gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Cp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Cp(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=L.T,x={};L.T=x;try{var T=a(u,r),O=L.S;O!==null&&O(x,T),wp(e,n,T)}catch(J){Cc(e,n,J)}finally{L.T=f}}else try{f=a(u,r),wp(e,n,f)}catch(J){Cc(e,n,J)}}function wp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Dp(e,n,r)},function(r){return Cc(e,n,r)}):Dp(e,n,a)}function Dp(e,n,a){n.status="fulfilled",n.value=a,Up(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cp(e,a)))}function Cc(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Up(n),n=n.next;while(n!==r)}e.action=null}function Up(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lp(e,n){return n}function Np(e,n){if(Ce){var a=Xe.formState;if(a!==null){t:{var r=ce;if(Ce){if(Ze){e:{for(var u=Ze,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=pi(u.nextSibling),r=u.data==="F!";break t}}ns(r)}r=!1}r&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lp,lastRenderedState:n},a.queue=r,a=Jp.bind(null,ce,r),r.dispatch=a,r=Rc(!1),f=Nc.bind(null,ce,!1,r.queue),r=In(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Bv.bind(null,ce,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Op(e){var n=an();return Pp(n,Ne,e)}function Pp(e,n,a){if(n=bc(e,n,Lp)[0],e=pl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=$r(n)}catch(x){throw x===Yr?ll:x}else r=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Xs(9,ml(),zv.bind(null,u,a),null)),[r,f,e]}function zv(e,n){e.action=n}function Bp(e){var n=an(),a=Ne;if(a!==null)return Pp(n,a,e);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Xs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Ec(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function ml(){return{destroy:void 0,resource:void 0}}function zp(){return an().memoizedState}function _l(e,n,a,r){var u=In();r=r===void 0?null:r,ce.flags|=e,u.memoizedState=Xs(1|n,ml(),a,r)}function to(e,n,a,r){var u=an();r=r===void 0?null:r;var f=u.memoizedState.inst;Ne!==null&&r!==null&&vc(r,Ne.memoizedState.deps)?u.memoizedState=Xs(n,f,a,r):(ce.flags|=e,u.memoizedState=Xs(1|n,f,a,r))}function Ip(e,n){_l(8390656,8,e,n)}function Fp(e,n){to(2048,8,e,n)}function Hp(e,n){return to(4,2,e,n)}function Gp(e,n){return to(4,4,e,n)}function Vp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kp(e,n,a){a=a!=null?a.concat([e]):null,to(4,4,Vp.bind(null,n,e),a)}function wc(){}function Xp(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&vc(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Wp(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&vc(n,r[1]))return r[0];if(r=e(),rs){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[r,n],r}function Dc(e,n,a){return a===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=jm(),ce.lanes|=e,Ta|=e,a)}function qp(e,n,a,r){return qn(a,n)?a:Gs.current!==null?(e=Dc(e,a,r),qn(e,n)||(mn=!0),e):(ga&42)===0?(mn=!0,e.memoizedState=a):(e=jm(),ce.lanes|=e,Ta|=e,n)}function Yp(e,n,a,r,u){var f=X.p;X.p=f!==0&&8>f?f:8;var x=L.T,T={};L.T=T,Nc(e,!1,n,a);try{var O=u(),J=L.S;if(J!==null&&J(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ft=Nv(O,r);eo(e,n,ft,Qn(e))}else eo(e,n,r,Qn(e))}catch(gt){eo(e,n,{then:function(){},status:"rejected",reason:gt},Qn())}finally{X.p=f,L.T=x}}function Iv(){}function Uc(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=jp(e).queue;Yp(e,u,n,W,a===null?Iv:function(){return Zp(e),a(r)})}function jp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Zp(e){var n=jp(e).next.queue;eo(e,n,{},Qn())}function Lc(){return Rn(xo)}function Kp(){return an().memoizedState}function Qp(){return an().memoizedState}function Fv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=ma(a);var r=_a(n,e,a);r!==null&&(Jn(r,n,a),Zr(r,n,a)),n={cache:lc()},e.payload=n;return}n=n.return}}function Hv(e,n,a){var r=Qn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?$p(n,a):(a=Ju(e,n,a,r),a!==null&&(Jn(a,e,r),tm(a,n,r)))}function Jp(e,n,a){var r=Qn();eo(e,n,a,r)}function eo(e,n,a,r){var u={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))$p(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,x))return tl(e,n,u,0),Xe===null&&$o(),!1}catch{}finally{}if(a=Ju(e,n,u,r),a!==null)return Jn(a,e,r),tm(a,n,r),!0}return!1}function Nc(e,n,a,r){if(r={lane:2,revertLane:hf(),action:r,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(n)throw Error(s(479))}else n=Ju(e,a,r,2),n!==null&&Jn(n,e,2)}function gl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function $p(e,n){Vs=fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function tm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,It(e,a)}}var vl={readContext:Rn,use:dl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},em={readContext:Rn,use:dl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Ip,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,Vp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var r=e();if(rs){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=In();if(a!==void 0){var u=a(n);if(rs){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Hv.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=Rc(e);var n=e.queue,a=Jp.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:wc,useDeferredValue:function(e,n){var a=In();return Dc(a,e,n)},useTransition:function(){var e=Rc(!1);return e=Yp.bind(null,ce,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ce,u=In();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(xe&124)!==0||Mp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Ip(Tp.bind(null,r,f,e),[e]),r.flags|=2048,Xs(9,ml(),Ep.bind(null,r,f,a,n),null),a},useId:function(){var e=In(),n=Xe.identifierPrefix;if(Ce){var a=Gi,r=Hi;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ov++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Lc,useFormState:Np,useActionState:Np,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nc.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Tc,useCacheRefresh:function(){return In().memoizedState=Fv.bind(null,ce)}},nm={readContext:Rn,use:dl,useCallback:Xp,useContext:Rn,useEffect:Fp,useImperativeHandle:kp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:Wp,useReducer:pl,useRef:zp,useState:function(){return pl(Xi)},useDebugValue:wc,useDeferredValue:function(e,n){var a=an();return qp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=pl(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:yp,useId:Kp,useHostTransitionStatus:Lc,useFormState:Op,useActionState:Op,useOptimistic:function(e,n){var a=an();return Rp(a,Ne,e,n)},useMemoCache:Tc,useCacheRefresh:Qp},Gv={readContext:Rn,use:dl,useCallback:Xp,useContext:Rn,useEffect:Fp,useImperativeHandle:kp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:Wp,useReducer:Ac,useRef:zp,useState:function(){return Ac(Xi)},useDebugValue:wc,useDeferredValue:function(e,n){var a=an();return Ne===null?Dc(a,e,n):qp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Ac(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:yp,useId:Kp,useHostTransitionStatus:Lc,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,n){var a=an();return Ne!==null?Rp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tc,useCacheRefresh:Qp},Ws=null,no=0;function Sl(e){var n=no;return no+=1,Ws===null&&(Ws=[]),dp(Ws,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function im(e){var n=e._init;return n(e._payload)}function am(e){function n(q,F){if(e){var K=q.deletions;K===null?(q.deletions=[F],q.flags|=16):K.push(F)}}function a(q,F){if(!e)return null;for(;F!==null;)n(q,F),F=F.sibling;return null}function r(q){for(var F=new Map;q!==null;)q.key!==null?F.set(q.key,q):F.set(q.index,q),q=q.sibling;return F}function u(q,F){return q=Fi(q,F),q.index=0,q.sibling=null,q}function f(q,F,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<F?(q.flags|=67108866,F):K):(q.flags|=67108866,F)):(q.flags|=1048576,F)}function x(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,F,K,dt){return F===null||F.tag!==6?(F=tc(K,q.mode,dt),F.return=q,F):(F=u(F,K),F.return=q,F)}function O(q,F,K,dt){var Ft=K.type;return Ft===A?ft(q,F,K.props.children,dt,K.key):F!==null&&(F.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&im(Ft)===F.type)?(F=u(F,K.props),io(F,K),F.return=q,F):(F=nl(K.type,K.key,K.props,null,q.mode,dt),io(F,K),F.return=q,F)}function J(q,F,K,dt){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=ec(K,q.mode,dt),F.return=q,F):(F=u(F,K.children||[]),F.return=q,F)}function ft(q,F,K,dt,Ft){return F===null||F.tag!==7?(F=Ja(K,q.mode,dt,Ft),F.return=q,F):(F=u(F,K),F.return=q,F)}function gt(q,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=tc(""+F,q.mode,K),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return K=nl(F.type,F.key,F.props,null,q.mode,K),io(K,F),K.return=q,K;case M:return F=ec(F,q.mode,K),F.return=q,F;case Z:var dt=F._init;return F=dt(F._payload),gt(q,F,K)}if(it(F)||ct(F))return F=Ja(F,q.mode,K,null),F.return=q,F;if(typeof F.then=="function")return gt(q,Sl(F),K);if(F.$$typeof===P)return gt(q,rl(q,F),K);xl(q,F)}return null}function nt(q,F,K,dt){var Ft=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:T(q,F,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return K.key===Ft?O(q,F,K,dt):null;case M:return K.key===Ft?J(q,F,K,dt):null;case Z:return Ft=K._init,K=Ft(K._payload),nt(q,F,K,dt)}if(it(K)||ct(K))return Ft!==null?null:ft(q,F,K,dt,null);if(typeof K.then=="function")return nt(q,F,Sl(K),dt);if(K.$$typeof===P)return nt(q,F,rl(q,K),dt);xl(q,K)}return null}function at(q,F,K,dt,Ft){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(K)||null,T(F,q,""+dt,Ft);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case S:return q=q.get(dt.key===null?K:dt.key)||null,O(F,q,dt,Ft);case M:return q=q.get(dt.key===null?K:dt.key)||null,J(F,q,dt,Ft);case Z:var fe=dt._init;return dt=fe(dt._payload),at(q,F,K,dt,Ft)}if(it(dt)||ct(dt))return q=q.get(K)||null,ft(F,q,dt,Ft,null);if(typeof dt.then=="function")return at(q,F,K,Sl(dt),Ft);if(dt.$$typeof===P)return at(q,F,K,rl(F,dt),Ft);xl(F,dt)}return null}function te(q,F,K,dt){for(var Ft=null,fe=null,Xt=F,$t=F=0,gn=null;Xt!==null&&$t<K.length;$t++){Xt.index>$t?(gn=Xt,Xt=null):gn=Xt.sibling;var Te=nt(q,Xt,K[$t],dt);if(Te===null){Xt===null&&(Xt=gn);break}e&&Xt&&Te.alternate===null&&n(q,Xt),F=f(Te,F,$t),fe===null?Ft=Te:fe.sibling=Te,fe=Te,Xt=gn}if($t===K.length)return a(q,Xt),Ce&&ts(q,$t),Ft;if(Xt===null){for(;$t<K.length;$t++)Xt=gt(q,K[$t],dt),Xt!==null&&(F=f(Xt,F,$t),fe===null?Ft=Xt:fe.sibling=Xt,fe=Xt);return Ce&&ts(q,$t),Ft}for(Xt=r(Xt);$t<K.length;$t++)gn=at(Xt,q,$t,K[$t],dt),gn!==null&&(e&&gn.alternate!==null&&Xt.delete(gn.key===null?$t:gn.key),F=f(gn,F,$t),fe===null?Ft=gn:fe.sibling=gn,fe=gn);return e&&Xt.forEach(function(Na){return n(q,Na)}),Ce&&ts(q,$t),Ft}function Qt(q,F,K,dt){if(K==null)throw Error(s(151));for(var Ft=null,fe=null,Xt=F,$t=F=0,gn=null,Te=K.next();Xt!==null&&!Te.done;$t++,Te=K.next()){Xt.index>$t?(gn=Xt,Xt=null):gn=Xt.sibling;var Na=nt(q,Xt,Te.value,dt);if(Na===null){Xt===null&&(Xt=gn);break}e&&Xt&&Na.alternate===null&&n(q,Xt),F=f(Na,F,$t),fe===null?Ft=Na:fe.sibling=Na,fe=Na,Xt=gn}if(Te.done)return a(q,Xt),Ce&&ts(q,$t),Ft;if(Xt===null){for(;!Te.done;$t++,Te=K.next())Te=gt(q,Te.value,dt),Te!==null&&(F=f(Te,F,$t),fe===null?Ft=Te:fe.sibling=Te,fe=Te);return Ce&&ts(q,$t),Ft}for(Xt=r(Xt);!Te.done;$t++,Te=K.next())Te=at(Xt,q,$t,Te.value,dt),Te!==null&&(e&&Te.alternate!==null&&Xt.delete(Te.key===null?$t:Te.key),F=f(Te,F,$t),fe===null?Ft=Te:fe.sibling=Te,fe=Te);return e&&Xt.forEach(function(VS){return n(q,VS)}),Ce&&ts(q,$t),Ft}function Pe(q,F,K,dt){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case S:t:{for(var Ft=K.key;F!==null;){if(F.key===Ft){if(Ft=K.type,Ft===A){if(F.tag===7){a(q,F.sibling),dt=u(F,K.props.children),dt.return=q,q=dt;break t}}else if(F.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&im(Ft)===F.type){a(q,F.sibling),dt=u(F,K.props),io(dt,K),dt.return=q,q=dt;break t}a(q,F);break}else n(q,F);F=F.sibling}K.type===A?(dt=Ja(K.props.children,q.mode,dt,K.key),dt.return=q,q=dt):(dt=nl(K.type,K.key,K.props,null,q.mode,dt),io(dt,K),dt.return=q,q=dt)}return x(q);case M:t:{for(Ft=K.key;F!==null;){if(F.key===Ft)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(q,F.sibling),dt=u(F,K.children||[]),dt.return=q,q=dt;break t}else{a(q,F);break}else n(q,F);F=F.sibling}dt=ec(K,q.mode,dt),dt.return=q,q=dt}return x(q);case Z:return Ft=K._init,K=Ft(K._payload),Pe(q,F,K,dt)}if(it(K))return te(q,F,K,dt);if(ct(K)){if(Ft=ct(K),typeof Ft!="function")throw Error(s(150));return K=Ft.call(K),Qt(q,F,K,dt)}if(typeof K.then=="function")return Pe(q,F,Sl(K),dt);if(K.$$typeof===P)return Pe(q,F,rl(q,K),dt);xl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(q,F.sibling),dt=u(F,K),dt.return=q,q=dt):(a(q,F),dt=tc(K,q.mode,dt),dt.return=q,q=dt),x(q)):a(q,F)}return function(q,F,K,dt){try{no=0;var Ft=Pe(q,F,K,dt);return Ws=null,Ft}catch(Xt){if(Xt===Yr||Xt===ll)throw Xt;var fe=Yn(29,Xt,null,q.mode);return fe.lanes=dt,fe.return=q,fe}finally{}}}var qs=am(!0),sm=am(!1),si=$(null),Ei=null;function va(e){var n=e.alternate;yt(un,un.current&1),yt(si,e),Ei===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(Ei=e)}function rm(e){if(e.tag===22){if(yt(un,un.current),yt(si,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else Sa()}function Sa(){yt(un,un.current),yt(si,si.current)}function Wi(e){St(si),Ei===e&&(Ei=null),St(un)}var un=$(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Tf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Oc(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Pc={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Qn(),u=ma(r);u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,r),n!==null&&(Jn(n,e,r),Zr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Qn(),u=ma(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,r),n!==null&&(Jn(n,e,r),Zr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),r=ma(a);r.tag=2,n!=null&&(r.callback=n),n=_a(e,r,a),n!==null&&(Jn(n,e,a),Zr(n,e,a))}};function om(e,n,a,r,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Fr(a,r)||!Fr(u,f):!0}function lm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Pc.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function um(e){Ml(e)}function cm(e){console.error(e)}function fm(e){Ml(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function hm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Bc(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function dm(e){return e=ma(e),e.tag=3,e}function pm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){hm(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){hm(n,a,r),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function Vv(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ei===null?of():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===fc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),uf(e,r,u)),!1;case 22:return a.flags|=65536,r===fc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),uf(e,r,u)),!1}throw Error(s(435,a.tag))}return uf(e,r,u),of(),!1}if(Ce)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==ac&&(e=Error(s(422),{cause:r}),kr(ei(e,a)))):(r!==ac&&(n=Error(s(423),{cause:r}),kr(ei(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ei(r,a),u=Bc(e.stateNode,r,u),pc(e,u),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:r});if(f=ei(f,a),co===null?co=[f]:co.push(f),Ke!==4&&(Ke=2),n===null)return!0;r=ei(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Bc(a.stateNode,r,e),pc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dm(u),pm(u,e,a,r),pc(a,u),!1}a=a.return}while(a!==null);return!1}var mm=Error(s(461)),mn=!1;function Mn(e,n,a,r){n.child=e===null?sm(n,null,a,r):qs(n,e.child,a,r)}function _m(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var T in r)T!=="ref"&&(x[T]=r[T])}else x=r;return as(n),r=Sc(e,n,a,x,f,u),T=xc(),e!==null&&!mn?(yc(e,n,u),qi(e,n,u)):(Ce&&T&&nc(n),n.flags|=1,Mn(e,n,r,u),n.child)}function gm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!$u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,vm(e,n,f,r,u)):(e=nl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Xc(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fr,a(x,r)&&e.ref===n.ref)return qi(e,n,u)}return n.flags|=1,e=Fi(f,r),e.ref=n.ref,e.return=n,n.child=e}function vm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Fr(f,r)&&e.ref===n.ref)if(mn=!1,n.pendingProps=r=f,Xc(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,qi(e,n,u)}return zc(e,n,a,r,u)}function Sm(e,n,a){var r=n.pendingProps,u=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return xm(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ol(n,f!==null?f.cachePool:null),f!==null?vp(n,f):_c(),rm(n);else return n.lanes=n.childLanes=536870912,xm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ol(n,f.cachePool),vp(n,f),Sa(),n.memoizedState=null):(e!==null&&ol(n,null),_c(),Sa());return Mn(e,n,u,a),n.child}function xm(e,n,a,r){var u=cc();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&ol(n,null),_c(),rm(n),e!==null&&Xr(e,n,r,!0),null}function Tl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function zc(e,n,a,r,u){return as(n),a=Sc(e,n,a,r,void 0,u),r=xc(),e!==null&&!mn?(yc(e,n,u),qi(e,n,u)):(Ce&&r&&nc(n),n.flags|=1,Mn(e,n,a,u),n.child)}function ym(e,n,a,r,u,f){return as(n),n.updateQueue=null,a=xp(n,r,a,u),Sp(e),r=xc(),e!==null&&!mn?(yc(e,n,f),qi(e,n,f)):(Ce&&r&&nc(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Mm(e,n,a,r,u){if(as(n),n.stateNode===null){var f=Bs,x=a.contextType;typeof x=="object"&&x!==null&&(f=Rn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},hc(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Rn(x):Bs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Oc(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Pc.enqueueReplaceState(f,f.state,null),Qr(n,r,f,u),Kr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,O=os(a,T);f.props=O;var J=f.context,ft=a.contextType;x=Bs,typeof ft=="object"&&ft!==null&&(x=Rn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==x)&&lm(n,f,r,x),pa=!1;var nt=n.memoizedState;f.state=nt,Qr(n,r,f,u),Kr(),J=n.memoizedState,T||nt!==J||pa?(typeof gt=="function"&&(Oc(n,a,gt,r),J=n.memoizedState),(O=pa||om(n,a,O,r,nt,J,x))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=x,r=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,dc(e,n),x=n.memoizedProps,ft=os(a,x),f.props=ft,gt=n.pendingProps,nt=f.context,J=a.contextType,O=Bs,typeof J=="object"&&J!==null&&(O=Rn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||nt!==O)&&lm(n,f,r,O),pa=!1,nt=n.memoizedState,f.state=nt,Qr(n,r,f,u),Kr();var at=n.memoizedState;x!==gt||nt!==at||pa||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof T=="function"&&(Oc(n,a,T,r),at=n.memoizedState),(ft=pa||om(n,a,ft,r,nt,at,O)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,at,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,at,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),f.props=r,f.state=at,f.context=O,r=ft):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Tl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=qs(n,e.child,null,u),n.child=qs(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=qi(e,n,u),e}function Em(e,n,a,r){return Vr(),n.flags|=256,Mn(e,n,a,r),n.child}var Ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fc(e){return{baseLanes:e,cachePool:cp()}}function Hc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Tm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?va(n):Sa(),Ce){var T=Ze,O;if(O=T){t:{for(O=T,T=Mi;O.nodeType!==8;){if(!T){T=null;break t}if(O=pi(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:$a!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},O=Yn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,Ln=n,Ze=null,O=!0):O=!1}O||ns(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Tf(T)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return T=r.children,r=r.fallback,u?(Sa(),u=n.mode,T=bl({mode:"hidden",children:T},u),r=Ja(r,u,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,u=n.child,u.memoizedState=Fc(a),u.childLanes=Hc(e,x,a),n.memoizedState=Ic,r):(va(n),Gc(n,T))}if(O=e.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=Vc(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),u=r.fallback,T=n.mode,r=bl({mode:"visible",children:r.children},T),u=Ja(u,T,a,null),u.flags|=2,r.return=n,u.return=n,r.sibling=u,n.child=r,qs(n,e.child,null,a),r=n.child,r.memoizedState=Fc(a),r.childLanes=Hc(e,x,a),n.memoizedState=Ic,n=u);else if(va(n),Tf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var J=x.dgst;x=J,r=Error(s(419)),r.stack="",r.digest=x,kr({value:r,source:null,stack:null}),n=Vc(e,n,a)}else if(mn||Xr(e,n,a,!1),x=(a&e.childLanes)!==0,mn||x){if(x=Xe,x!==null&&(r=a&-a,r=(r&42)!==0?1:ee(r),r=(r&(x.suspendedLanes|a))!==0?0:r,r!==0&&r!==O.retryLane))throw O.retryLane=r,Ps(e,r),Jn(x,e,r),mm;T.data==="$?"||of(),n=Vc(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=O.treeContext,Ze=pi(T.nextSibling),Ln=n,Ce=!0,es=null,Mi=!1,e!==null&&(ii[ai++]=Hi,ii[ai++]=Gi,ii[ai++]=$a,Hi=e.id,Gi=e.overflow,$a=n),n=Gc(n,r.children),n.flags|=4096);return n}return u?(Sa(),u=r.fallback,T=n.mode,O=e.child,J=O.sibling,r=Fi(O,{mode:"hidden",children:r.children}),r.subtreeFlags=O.subtreeFlags&65011712,J!==null?u=Fi(J,u):(u=Ja(u,T,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,r=u,u=n.child,T=e.child.memoizedState,T===null?T=Fc(a):(O=T.cachePool,O!==null?(J=ln._currentValue,O=O.parent!==J?{parent:J,pool:J}:O):O=cp(),T={baseLanes:T.baseLanes|a,cachePool:O}),u.memoizedState=T,u.childLanes=Hc(e,x,a),n.memoizedState=Ic,r):(va(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Gc(e,n){return n=bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function bl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vc(e,n,a){return qs(n,e.child,null,a),e=Gc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),rc(e.return,n,a)}function kc(e,n,a,r,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=u)}function Am(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;if(Mn(e,n,r.children,a),r=un.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,a,n);else if(e.tag===19)bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(yt(un,r),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),kc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&yl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}kc(n,!0,a,null,f);break;case"together":kc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Xc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function kv(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),da(n,ln,e.memoizedState.cache),Vr();break;case 27:case 5:Kt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tm(e,n,a):(va(n),e=qi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Xr(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Am(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(un,un.current),r)break;return null;case 22:case 23:return n.lanes=0,Sm(e,n,a);case 24:da(n,ln,e.memoizedState.cache)}return qi(e,n,a)}function Rm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Xc(e,a)&&(n.flags&128)===0)return mn=!1,kv(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ce&&(n.flags&1048576)!==0&&ip(n,al,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,u=r._init;if(r=u(r._payload),n.type=r,typeof r=="function")$u(r)?(e=os(r,e),n.tag=1,n=Mm(null,n,r,e,a)):(n.tag=0,n=zc(null,n,r,e,a));else{if(r!=null){if(u=r.$$typeof,u===D){n.tag=11,n=_m(null,n,r,e,a);break t}else if(u===I){n.tag=14,n=gm(null,n,r,e,a);break t}}throw n=rt(r)||r,Error(s(306,n,""))}}return n;case 0:return zc(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=os(r,n.pendingProps),Mm(e,n,r,u,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,dc(e,n),Qr(n,r,null,a);var x=n.memoizedState;if(r=x.cache,da(n,ln,r),r!==f.cache&&oc(n,[ln],a,!0),Kr(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Em(e,n,r,a);break t}else if(r!==u){u=ei(Error(s(424)),n),kr(u),n=Em(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=pi(e.firstChild),Ln=n,Ce=!0,es=null,Mi=!0,a=sm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vr(),r===u){n=qi(e,n,a);break t}Mn(e,n,r,a)}n=n.child}return n;case 26:return Tl(e,n),e===null?(a=U_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,r=Fl(Mt.current).createElement(a),r[rn]=n,r[xn]=e,Tn(r,a,e),en(r),n.stateNode=r):n.memoizedState=U_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ce&&(r=n.stateNode=C_(n.type,n.pendingProps,Mt.current),Ln=n,Mi=!0,u=Ze,Ca(n.type)?(bf=u,Ze=pi(r.firstChild)):Ze=u),Mn(e,n,n.pendingProps.children,a),Tl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=r=Ze)&&(r=gS(r,n.type,n.pendingProps,Mi),r!==null?(n.stateNode=r,Ln=n,Ze=pi(r.firstChild),Mi=!1,u=!0):u=!1),u||ns(n)),Kt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,yf(u,f)?r=null:x!==null&&yf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Sc(e,n,Pv,null,null,a),xo._currentValue=u),Tl(e,n),Mn(e,n,r,a),n.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=vS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Ln=n,Ze=null,e=!0):e=!1),e||ns(n)),null;case 13:return Tm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qs(n,null,r,a):Mn(e,n,r,a),n.child;case 11:return _m(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,da(n,n.type,r.value),Mn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,as(n),u=Rn(u),r=r(u),n.flags|=1,Mn(e,n,r,a),n.child;case 14:return gm(e,n,n.type,n.pendingProps,a);case 15:return vm(e,n,n.type,n.pendingProps,a);case 19:return Am(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=bl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fi(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Sm(e,n,a);case 24:return as(n),r=Rn(ln),e===null?(u=cc(),u===null&&(u=Xe,f=lc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},hc(n),da(n,ln,u)):((e.lanes&a)!==0&&(dc(e,n),Qr(n,null,null,a),Kr()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),da(n,ln,r)):(r=f.cache,da(n,ln,r),r!==u.cache&&oc(n,[ln],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function Cm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B_(n)){if(n=si.current,n!==null&&((xe&4194048)===xe?Ei!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==Ei))throw jr=fc,fp;e.flags|=8192}}function Al(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Ks|=n)}function ao(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Xv(e,n,a){var r=n.pendingProps;switch(ic(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ki(ln),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(qe(n),Cm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),qe(n),Cm(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==r&&Yi(n),qe(n),n.flags&=-16777217),null;case 27:Le(n),a=Mt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=Q.current,Gr(n)?ap(n):(e=C_(u,r,a),n.stateNode=e,Yi(n))}return qe(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=Q.current,Gr(n))ap(n);else{switch(u=Fl(Mt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?u.createElement("select",{is:r.is}):u.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?u.createElement(a,{is:r.is}):u.createElement(a)}}e[rn]=n,e[xn]=r;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Tn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Mt.current,Gr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||y_(e.nodeValue,a)),e||ns(n)}else e=Fl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else Vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=rp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&_f(n.stateNode.containerInfo),qe(n),null;case 10:return ki(n.type),qe(n),null;case 19:if(St(un),u=n.memoizedState,u===null)return qe(n),null;if(r=(n.flags&128)!==0,f=u.rendering,f===null)if(r)ao(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yl(e),f!==null){for(n.flags|=128,ao(u,!1),e=f.updateQueue,n.updateQueue=e,Al(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)np(a,e),a=a.sibling;return yt(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&he()>wl&&(n.flags|=128,r=!0,ao(u,!1),n.lanes=4194304)}else{if(!r)if(e=yl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Al(n,e),ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ce)return qe(n),null}else 2*he()-u.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,r=!0,ao(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=he(),n.sibling=null,e=un.current,yt(un,r?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Wi(n),gc(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&St(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wv(e,n){switch(ic(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(ln),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return St(un),null;case 4:return oe(),null;case 10:return ki(n.type),null;case 22:case 23:return Wi(n),gc(),e!==null&&St(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(ln),null;case 25:return null;default:return null}}function wm(e,n){switch(ic(n),n.tag){case 3:ki(ln),oe();break;case 26:case 27:case 5:Le(n);break;case 4:oe();break;case 13:Wi(n);break;case 19:St(un);break;case 10:ki(n.type);break;case 22:case 23:Wi(n),gc(),e!==null&&St(ss);break;case 24:ki(ln)}}function so(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(T){He(n,n.return,T)}}function xa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var x=r.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var O=a,J=T;try{J()}catch(ft){He(u,O,ft)}}}r=r.next}while(r!==f)}}catch(ft){He(n,n.return,ft)}}function Dm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gp(n,a)}catch(r){He(e,e.return,r)}}}function Um(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){He(e,n,r)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){He(e,n,u)}}function Ti(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function Lm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function Wc(e,n,a){try{var r=e.stateNode;hS(r,e.type,a,n),r[xn]=n}catch(u){He(e,e.return,u)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function qc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Il));else if(r!==4&&(r===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Yc(e,n,a),e=e.sibling;e!==null;)Yc(e,n,a),e=e.sibling}function Rl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rl(e,n,a),e=e.sibling;e!==null;)Rl(e,n,a),e=e.sibling}function Om(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,r,a),n[rn]=e,n[xn]=a}catch(f){He(e,e.return,f)}}var ji=!1,tn=!1,jc=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function qv(e,n){if(e=e.containerInfo,Sf=Wl,e=qd(e),qu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,O=-1,J=0,ft=0,gt=e,nt=null;e:for(;;){for(var at;gt!==a||u!==0&&gt.nodeType!==3||(T=x+u),gt!==f||r!==0&&gt.nodeType!==3||(O=x+r),gt.nodeType===3&&(x+=gt.nodeValue.length),(at=gt.firstChild)!==null;)nt=gt,gt=at;for(;;){if(gt===e)break e;if(nt===a&&++J===u&&(T=x),nt===f&&++ft===r&&(O=x),(at=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=at}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(xf={focusedElem:e,selectionRange:a},Wl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var te=os(a.type,u,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(te,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){He(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ef(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ef(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Bm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),r&4&&so(5,a);break;case 1:if(ya(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){He(a,a.return,x)}else{var u=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){He(a,a.return,x)}}r&64&&Dm(a),r&512&&ro(a,a.return);break;case 3:if(ya(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(e,n)}catch(x){He(a,a.return,x)}}break;case 27:n===null&&r&4&&Om(a);case 26:case 5:ya(e,a),n===null&&r&4&&Lm(a),r&512&&ro(a,a.return);break;case 12:ya(e,a);break;case 13:ya(e,a),r&4&&Fm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=eS.bind(null,a),SS(e,a))));break;case 22:if(r=a.memoizedState!==null||ji,!r){n=n!==null&&n.memoizedState!==null||tn,u=ji;var f=tn;ji=r,(tn=n)&&!f?Ma(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),ji=u,tn=f}break;case 30:break;default:ya(e,a)}}function zm(e){var n=e.alternate;n!==null&&(e.alternate=null,zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Fn=!1;function Zi(e,n,a){for(a=a.child;a!==null;)Im(e,n,a),a=a.sibling}function Im(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:tn||Ti(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Ti(a,n);var r=We,u=Fn;Ca(a.type)&&(We=a.stateNode,Fn=!1),Zi(e,n,a),_o(a.stateNode),We=r,Fn=u;break;case 5:tn||Ti(a,n);case 6:if(r=We,u=Fn,We=null,Zi(e,n,a),We=r,Fn=u,We!==null)if(Fn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:We!==null&&(Fn?(e=We,A_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),To(e)):A_(We,a.stateNode));break;case 4:r=We,u=Fn,We=a.stateNode.containerInfo,Fn=!0,Zi(e,n,a),We=r,Fn=u;break;case 0:case 11:case 14:case 15:tn||xa(2,a,n),tn||xa(4,a,n),Zi(e,n,a);break;case 1:tn||(Ti(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Um(a,n,r)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:tn=(r=tn)||a.memoizedState!==null,Zi(e,n,a),tn=r;break;default:Zi(e,n,a)}}function Fm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(a){He(n,n.return,a)}}function Yv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Pm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Pm),n;default:throw Error(s(435,e.tag))}}function Zc(e,n){var a=Yv(e);n.forEach(function(r){var u=nS.bind(null,e,r);a.has(r)||(a.add(r),r.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Ca(T.type)){We=T.stateNode,Fn=!1;break t}break;case 5:We=T.stateNode,Fn=!1;break t;case 3:case 4:We=T.stateNode.containerInfo,Fn=!0;break t}T=T.return}if(We===null)throw Error(s(160));Im(f,x,u),We=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Hm(n,e),n=n.sibling}var di=null;function Hm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),r&4&&(xa(3,e,e.return),so(3,e),xa(5,e,e.return));break;case 1:jn(n,e),Zn(e),r&512&&(tn||a===null||Ti(a,a.return)),r&64&&ji&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=di;if(jn(n,e),Zn(e),r&512&&(tn||a===null||Ti(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[la]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Tn(f,r,a),f[rn]=e,en(f),r=f;break t;case"link":var x=O_("link","href",u).get(r+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=u.createElement(r),Tn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=O_("meta","content",u).get(r+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=u.createElement(r),Tn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,en(f),r=f}e.stateNode=r}else P_(u,e.type,e.stateNode);else e.stateNode=N_(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?P_(u,e.type,e.stateNode):N_(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),r&512&&(tn||a===null||Ti(a,a.return)),a!==null&&r&4&&Wc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),r&512&&(tn||a===null||Ti(a,a.return)),e.flags&32){u=e.stateNode;try{yi(u,"")}catch(at){He(e,e.return,at)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Wc(e,u,a!==null?a.memoizedProps:u)),r&1024&&(jc=!0);break;case 6:if(jn(n,e),Zn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(at){He(e,e.return,at)}}break;case 3:if(Vl=null,u=di,di=Hl(n.containerInfo),jn(n,e),di=u,Zn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(at){He(e,e.return,at)}jc&&(jc=!1,Gm(e));break;case 4:r=di,di=Hl(e.stateNode.containerInfo),jn(n,e),Zn(e),di=r;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ef=he()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Zc(e,r)));break;case 22:u=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,J=ji,ft=tn;if(ji=J||u,tn=ft||O,jn(n,e),tn=ft,ji=J,Zn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||O||ji||tn||ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=O.stateNode;var gt=O.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(at){He(O,O.return,at)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=u?"":O.memoizedProps}catch(at){He(O,O.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Zc(e,a))));break;case 19:jn(n,e),Zn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Zc(e,r)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Nm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=qc(e);Rl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(yi(x,""),a.flags&=-33);var T=qc(e);Rl(e,T,x);break;case 3:case 4:var O=a.stateNode.containerInfo,J=qc(e);Yc(e,J,O);break;default:throw Error(s(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bm(e,n.alternate,n),n=n.sibling}function ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),ls(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Um(n,n.return,a),ls(n);break;case 27:_o(n.stateNode);case 26:case 5:Ti(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(u,f,a),so(4,f);break;case 1:if(Ma(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){He(r,r.return,J)}if(r=f,u=r.updateQueue,u!==null){var T=r.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)_p(O[u],T)}catch(J){He(r,r.return,J)}}a&&x&64&&Dm(f),ro(f,f.return);break;case 27:Om(f);case 26:case 5:Ma(u,f,a),a&&r===null&&x&4&&Lm(f),ro(f,f.return);break;case 12:Ma(u,f,a);break;case 13:Ma(u,f,a),a&&x&4&&Fm(u,f);break;case 22:f.memoizedState===null&&Ma(u,f,a),ro(f,f.return);break;case 30:break;default:Ma(u,f,a)}n=n.sibling}}function Kc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wr(a))}function Qc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e))}function bi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vm(e,n,a,r),n=n.sibling}function Vm(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,r),u&2048&&so(9,n);break;case 1:bi(e,n,a,r);break;case 3:bi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e)));break;case 12:if(u&2048){bi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){He(n,n.return,O)}}else bi(e,n,a,r);break;case 13:bi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,r):oo(e,n):f._visibility&2?bi(e,n,a,r):(f._visibility|=2,Ys(e,n,a,r,(n.subtreeFlags&10256)!==0)),u&2048&&Kc(x,n);break;case 24:bi(e,n,a,r),u&2048&&Qc(n.alternate,n);break;default:bi(e,n,a,r)}}function Ys(e,n,a,r,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,T=a,O=r,J=x.flags;switch(x.tag){case 0:case 11:case 15:Ys(f,x,T,O,u),so(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?Ys(f,x,T,O,u):oo(f,x):(ft._visibility|=2,Ys(f,x,T,O,u)),u&&J&2048&&Kc(x.alternate,x);break;case 24:Ys(f,x,T,O,u),u&&J&2048&&Qc(x.alternate,x);break;default:Ys(f,x,T,O,u)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:oo(a,r),u&2048&&Kc(r.alternate,r);break;case 24:oo(a,r),u&2048&&Qc(r.alternate,r);break;default:oo(a,r)}n=n.sibling}}var lo=8192;function js(e){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)km(e),e=e.sibling}function km(e){switch(e.tag){case 26:js(e),e.flags&lo&&e.memoizedState!==null&&LS(di,e.memoizedState,e.memoizedProps);break;case 5:js(e);break;case 3:case 4:var n=di;di=Hl(e.stateNode.containerInfo),js(e),di=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=lo,lo=16777216,js(e),lo=n):js(e));break;default:js(e)}}function Xm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,qm(r,e)}Xm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wm(e),e=e.sibling}function Wm(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&xa(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):uo(e);break;default:uo(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,qm(r,e)}Xm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function qm(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Wr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=e;_n!==null;){r=_n;var u=r.sibling,f=r.return;if(zm(r),r===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var jv={getCacheForType:function(e){var n=Rn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Zv=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,de=null,xe=0,Ue=0,Kn=null,Ea=!1,Zs=!1,Jc=!1,Ki=0,Ke=0,Ta=0,us=0,$c=0,ri=0,Ks=0,co=null,Hn=null,tf=!1,ef=0,wl=1/0,Dl=null,ba=null,En=0,Aa=null,Qs=null,Js=0,nf=0,af=null,Ym=null,fo=0,sf=null;function Qn(){if((De&2)!==0&&xe!==0)return xe&-xe;if(L.T!==null){var e=Fs;return e!==0?e:hf()}return Ee()}function jm(){ri===0&&(ri=(xe&536870912)===0||Ce?V():536870912);var e=si.current;return e!==null&&(e.flags|=32),ri}function Jn(e,n,a){(e===Xe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&($s(e,0),Ra(e,xe,ri,!1)),Bt(e,a),((De&2)===0||e!==Xe)&&(e===Xe&&((De&2)===0&&(us|=a),Ke===4&&Ra(e,xe,ri,!1)),Ai(e))}function Zm(e,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Rt(e,n),u=r?Jv(e,n):lf(e,n,!0),f=r;do{if(u===0){Zs&&!r&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Kv(a)){u=lf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=e;u=co;var O=T.current.memoizedState.isDehydrated;if(O&&($s(T,x).flags|=256),x=lf(T,x,!1),x!==2){if(Jc&&!O){T.errorRecoveryDisabledLanes|=f,us|=f,u=4;break t}f=Hn,Hn=u,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){$s(e,0),Ra(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ra(r,n,ri,!Ea);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ef+300-he(),10<u)){if(Ra(r,n,ri,!Ea),qt(r,0,!0)!==0)break t;r.timeoutHandle=T_(Km.bind(null,r,a,Hn,Dl,tf,n,ri,us,Ks,Ea,f,2,-0,0),u);break t}Km(r,a,Hn,Dl,tf,n,ri,us,Ks,Ea,f,0,-0,0)}}break}while(!0);Ai(e)}function Km(e,n,a,r,u,f,x,T,O,J,ft,gt,nt,at){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:US},km(n),gt=NS(),gt!==null)){e.cancelPendingCommit=gt(i_.bind(null,e,n,f,a,r,u,x,T,O,ft,1,nt,at)),Ra(e,f,x,!J);return}i_(e,n,f,a,r,u,x,T,O)}function Kv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,r){n&=~$c,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&vt(e,a,n)}function Ul(){return(De&6)===0?(ho(0),!1):!0}function rf(){if(de!==null){if(Ue===0)var e=de.return;else e=de,Vi=is=null,Mc(e),Ws=null,no=0,e=de;for(;e!==null;)wm(e.alternate,e),e=e.return;de=null}}function $s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,pS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),rf(),Xe=e,de=a=Fi(e.current,null),xe=n,Ue=0,Kn=null,Ea=!1,Zs=Rt(e,n),Jc=!1,Ks=ri=$c=us=Ta=Ke=0,Hn=co=null,tf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ot(r),f=1<<u;n|=e[u],r&=~f}return Ki=n,$o(),a}function Qm(e,n){ce=null,L.H=vl,n===Yr||n===ll?(n=pp(),Ue=3):n===fp?(n=pp(),Ue=4):Ue=n===mm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,de===null&&(Ke=1,El(e,ei(n,e.current)))}function Jm(){var e=L.H;return L.H=vl,e===null?vl:e}function $m(){var e=L.A;return L.A=jv,e}function of(){Ke=4,Ea||(xe&4194048)!==xe&&si.current!==null||(Zs=!0),(Ta&134217727)===0&&(us&134217727)===0||Xe===null||Ra(Xe,xe,ri,!1)}function lf(e,n,a){var r=De;De|=2;var u=Jm(),f=$m();(Xe!==e||xe!==n)&&(Dl=null,$s(e,n)),n=!1;var x=Ke;t:do try{if(Ue!==0&&de!==null){var T=de,O=Kn;switch(Ue){case 8:rf(),x=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var J=Ue;if(Ue=0,Kn=null,tr(e,T,O,J),a&&Zs){x=0;break t}break;default:J=Ue,Ue=0,Kn=null,tr(e,T,O,J)}}Qv(),x=Ke;break}catch(ft){Qm(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Vi=is=null,De=r,L.H=u,L.A=f,de===null&&(Xe=null,xe=0,$o()),x}function Qv(){for(;de!==null;)t_(de)}function Jv(e,n){var a=De;De|=2;var r=Jm(),u=$m();Xe!==e||xe!==n?(Dl=null,wl=he()+500,$s(e,n)):Zs=Rt(e,n);t:do try{if(Ue!==0&&de!==null){n=de;var f=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,tr(e,n,f,1);break;case 2:case 9:if(hp(f)){Ue=0,Kn=null,e_(n);break}n=function(){Ue!==2&&Ue!==9||Xe!==e||(Ue=7),Ai(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:hp(f)?(Ue=0,Kn=null,e_(n)):(Ue=0,Kn=null,tr(e,n,f,7));break;case 5:var x=null;switch(de.tag){case 26:x=de.memoizedState;case 5:case 27:var T=de;if(!x||B_(x)){Ue=0,Kn=null;var O=T.sibling;if(O!==null)de=O;else{var J=T.return;J!==null?(de=J,Ll(J)):de=null}break e}}Ue=0,Kn=null,tr(e,n,f,5);break;case 6:Ue=0,Kn=null,tr(e,n,f,6);break;case 8:rf(),Ke=6;break t;default:throw Error(s(462))}}$v();break}catch(ft){Qm(e,ft)}while(!0);return Vi=is=null,L.H=r,L.A=u,De=a,de!==null?0:(Xe=null,xe=0,$o(),Ke)}function $v(){for(;de!==null&&!Sn();)t_(de)}function t_(e){var n=Rm(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Ll(e):de=n}function e_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ym(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=ym(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Mc(n);default:wm(a,n),n=de=np(n,Ki),n=Rm(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Ll(e):de=n}function tr(e,n,a,r){Vi=is=null,Mc(n),Ws=null,no=0;var u=n.return;try{if(Vv(e,u,n,a,xe)){Ke=1,El(e,ei(a,e.current)),de=null;return}}catch(f){if(u!==null)throw de=u,f;Ke=1,El(e,ei(a,e.current)),de=null;return}n.flags&32768?(Ce||r===1?e=!0:Zs||(xe&536870912)!==0?e=!1:(Ea=e=!0,(r===2||r===9||r===3||r===6)&&(r=si.current,r!==null&&r.tag===13&&(r.flags|=16384))),n_(n,e)):Ll(n)}function Ll(e){var n=e;do{if((n.flags&32768)!==0){n_(n,Ea);return}e=n.return;var a=Xv(n.alternate,n,Ki);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Ke===0&&(Ke=5)}function n_(e,n){do{var a=Wv(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ke=6,de=null}function i_(e,n,a,r,u,f,x,T,O){e.cancelPendingCommit=null;do Nl();while(En!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Qu,bt(e,a,f,x,T,O),e===Xe&&(de=Xe=null,xe=0),Qs=n,Aa=e,Js=a,nf=f,af=u,Ym=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iS(ie,function(){return l_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,u=X.p,X.p=2,x=De,De|=4;try{qv(e,n,a)}finally{De=x,X.p=u,L.T=r}}En=1,a_(),s_(),r_()}}function a_(){if(En===1){En=0;var e=Aa,n=Qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=X.p;X.p=2;var u=De;De|=4;try{Hm(n,e);var f=xf,x=qd(e.containerInfo),T=f.focusedElem,O=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Wd(T.ownerDocument.documentElement,T)){if(O!==null&&qu(T)){var J=O.start,ft=O.end;if(ft===void 0&&(ft=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ft,T.value.length);else{var gt=T.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var at=nt.getSelection(),te=T.textContent.length,Qt=Math.min(O.start,te),Pe=O.end===void 0?Qt:Math.min(O.end,te);!at.extend&&Qt>Pe&&(x=Pe,Pe=Qt,Qt=x);var q=Xd(T,Qt),F=Xd(T,Pe);if(q&&F&&(at.rangeCount!==1||at.anchorNode!==q.node||at.anchorOffset!==q.offset||at.focusNode!==F.node||at.focusOffset!==F.offset)){var K=gt.createRange();K.setStart(q.node,q.offset),at.removeAllRanges(),Qt>Pe?(at.addRange(K),at.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),at.addRange(K))}}}}for(gt=[],at=T;at=at.parentNode;)at.nodeType===1&&gt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var dt=gt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Wl=!!Sf,xf=Sf=null}finally{De=u,X.p=r,L.T=a}}e.current=n,En=2}}function s_(){if(En===2){En=0;var e=Aa,n=Qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=X.p;X.p=2;var u=De;De|=4;try{Bm(e,n.alternate,n)}finally{De=u,X.p=r,L.T=a}}En=3}}function r_(){if(En===4||En===3){En=0,ye();var e=Aa,n=Qs,a=Js,r=Ym;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Qs=Aa=null,o_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),we(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,u=X.p,X.p=2,L.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var T=r[x];f(T.value,{componentStack:T.stack})}}finally{L.T=n,X.p=u}}(Js&3)!==0&&Nl(),Ai(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===sf?fo++:(fo=0,sf=e):fo=0,ho(0)}}function o_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wr(n)))}function Nl(e){return a_(),s_(),r_(),l_()}function l_(){if(En!==5)return!1;var e=Aa,n=nf;nf=0;var a=we(Js),r=L.T,u=X.p;try{X.p=32>a?32:a,L.T=null,a=af,af=null;var f=Aa,x=Js;if(En=0,Qs=Aa=null,Js=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,Wm(f.current),Vm(f,f.current,x,a),De=T,ho(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{X.p=u,L.T=r,o_(e,n)}}function u_(e,n,a){n=ei(a,n),n=Bc(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(Bt(e,2),Ai(e))}function He(e,n,a){if(e.tag===3)u_(e,e,a);else for(;n!==null;){if(n.tag===3){u_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ba===null||!ba.has(r))){e=ei(a,e),a=dm(2),r=_a(n,a,2),r!==null&&(pm(a,r,n,e),Bt(r,2),Ai(r));break}}n=n.return}}function uf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Zv;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Jc=!0,u.add(a),e=tS.bind(null,e,n,a),n.then(e,e))}function tS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(xe&a)===a&&(Ke===4||Ke===3&&(xe&62914560)===xe&&300>he()-ef?(De&2)===0&&$s(e,0):$c|=a,Ks===xe&&(Ks=0)),Ai(e)}function c_(e,n){n===0&&(n=Ut()),e=Ps(e,n),e!==null&&(Bt(e,n),Ai(e))}function eS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),c_(e,a)}function nS(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),c_(e,a)}function iS(e,n){return _e(e,n)}var Ol=null,er=null,cf=!1,Pl=!1,ff=!1,cs=0;function Ai(e){e!==er&&e.next===null&&(er===null?Ol=er=e:er=er.next=e),Pl=!0,cf||(cf=!0,sS())}function ho(e,n){if(!ff&&Pl){ff=!0;do for(var a=!1,r=Ol;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,p_(r,f))}else f=xe,f=qt(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Rt(r,f)||(a=!0,p_(r,f));r=r.next}while(a);ff=!1}}function aS(){f_()}function f_(){Pl=cf=!1;var e=0;cs!==0&&(dS()&&(e=cs),cs=0);for(var n=he(),a=null,r=Ol;r!==null;){var u=r.next,f=h_(r,n);f===0?(r.next=null,a===null?Ol=u:a.next=u,u===null&&(er=a)):(a=r,(e!==0||(f&3)!==0)&&(Pl=!0)),r=u}ho(e)}function h_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ot(f),T=1<<x,O=u[x];O===-1?((T&a)===0||(T&r)!==0)&&(u[x]=ne(T,n)):O<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xe,a=xe,a=qt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&z(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&z(r),we(a)){case 2:case 8:a=Yt;break;case 32:a=ie;break;case 268435456:a=N;break;default:a=ie}return r=d_.bind(null,e),a=_e(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&z(r),e.callbackPriority=2,e.callbackNode=null,2}function d_(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nl()&&e.callbackNode!==a)return null;var r=xe;return r=qt(e,e===Xe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Zm(e,r,n),h_(e,he()),e.callbackNode!=null&&e.callbackNode===a?d_.bind(null,e):null)}function p_(e,n){if(Nl())return null;Zm(e,n,!0)}function sS(){mS(function(){(De&6)!==0?_e(ge,aS):f_()})}function hf(){return cs===0&&(cs=V()),cs}function m_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function __(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function rS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=m_((u[xn]||null).action),x=r.submitter;x&&(n=(n=x[xn]||null)?m_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Ko("action","action",null,r,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(cs!==0){var O=x?__(u,x):new FormData(u);Uc(a,{pending:!0,data:O,method:u.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=x?__(u,x):new FormData(u),Uc(a,{pending:!0,data:O,method:u.method,action:f},f,O))},currentTarget:u}]})}}for(var df=0;df<Ku.length;df++){var pf=Ku[df],oS=pf.toLowerCase(),lS=pf[0].toUpperCase()+pf.slice(1);hi(oS,"on"+lS)}hi(Zd,"onAnimationEnd"),hi(Kd,"onAnimationIteration"),hi(Qd,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(bv,"onTransitionRun"),hi(Av,"onTransitionStart"),hi(Rv,"onTransitionCancel"),hi(Jd,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function g_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var T=r[x],O=T.instance,J=T.currentTarget;if(T=T.listener,O!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ft){Ml(ft)}u.currentTarget=null,f=O}else for(x=0;x<r.length;x++){if(T=r[x],O=T.instance,J=T.currentTarget,T=T.listener,O!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ft){Ml(ft)}u.currentTarget=null,f=O}}}}function pe(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var r=e+"__bubble";a.has(r)||(v_(n,e,2,!1),a.add(r))}function mf(e,n,a){var r=0;n&&(r|=4),v_(a,e,r,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[Bl]){e[Bl]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(uS.has(a)||mf(a,!1,e),mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,mf("selectionchange",!1,n))}}function v_(e,n,a,r){switch(V_(n)){case 2:var u=BS;break;case 8:u=zS;break;default:u=Df}a=u.bind(null,n,a,e),u=void 0,!zu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function gf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var T=r.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=r.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=Ni(T),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){r=f=x;continue t}T=T.parentNode}}r=r.return}bd(function(){var J=f,ft=Pu(a),gt=[];t:{var nt=$d.get(e);if(nt!==void 0){var at=Ko,te=e;switch(e){case"keypress":if(jo(a)===0)break t;case"keydown":case"keyup":at=iv;break;case"focusin":te="focus",at=Gu;break;case"focusout":te="blur",at=Gu;break;case"beforeblur":case"afterblur":at=Gu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=rv;break;case Zd:case Kd:case Qd:at=j0;break;case Jd:at=lv;break;case"scroll":case"scrollend":at=k0;break;case"wheel":at=cv;break;case"copy":case"cut":case"paste":at=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Dd;break;case"toggle":case"beforetoggle":at=hv}var Qt=(n&4)!==0,Pe=!Qt&&(e==="scroll"||e==="scrollend"),q=Qt?nt!==null?nt+"Capture":null:nt;Qt=[];for(var F=J,K;F!==null;){var dt=F;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||q===null||(dt=Lr(F,q),dt!=null&&Qt.push(mo(F,dt,K))),Pe)break;F=F.return}0<Qt.length&&(nt=new at(nt,te,null,a,ft),gt.push({event:nt,listeners:Qt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",nt&&a!==Ou&&(te=a.relatedTarget||a.fromElement)&&(Ni(te)||te[Bn]))break t;if((at||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,at?(te=a.relatedTarget||a.toElement,at=J,te=te?Ni(te):null,te!==null&&(Pe=c(te),Qt=te.tag,te!==Pe||Qt!==5&&Qt!==27&&Qt!==6)&&(te=null)):(at=null,te=J),at!==te)){if(Qt=Cd,dt="onMouseLeave",q="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=Dd,dt="onPointerLeave",q="onPointerEnter",F="pointer"),Pe=at==null?nt:ja(at),K=te==null?nt:ja(te),nt=new Qt(dt,F+"leave",at,a,ft),nt.target=Pe,nt.relatedTarget=K,dt=null,Ni(ft)===J&&(Qt=new Qt(q,F+"enter",te,a,ft),Qt.target=K,Qt.relatedTarget=Pe,dt=Qt),Pe=dt,at&&te)e:{for(Qt=at,q=te,F=0,K=Qt;K;K=nr(K))F++;for(K=0,dt=q;dt;dt=nr(dt))K++;for(;0<F-K;)Qt=nr(Qt),F--;for(;0<K-F;)q=nr(q),K--;for(;F--;){if(Qt===q||q!==null&&Qt===q.alternate)break e;Qt=nr(Qt),q=nr(q)}Qt=null}else Qt=null;at!==null&&S_(gt,nt,at,Qt,!1),te!==null&&Pe!==null&&S_(gt,Pe,te,Qt,!0)}}t:{if(nt=J?ja(J):window,at=nt.nodeName&&nt.nodeName.toLowerCase(),at==="select"||at==="input"&&nt.type==="file")var Ft=Id;else if(Bd(nt))if(Fd)Ft=Mv;else{Ft=xv;var fe=Sv}else at=nt.nodeName,!at||at.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Nu(J.elementType)&&(Ft=Id):Ft=yv;if(Ft&&(Ft=Ft(e,J))){zd(gt,Ft,a,ft);break t}fe&&fe(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(fe=J?ja(J):window,e){case"focusin":(Bd(fe)||fe.contentEditable==="true")&&(Ls=fe,Yu=J,Hr=null);break;case"focusout":Hr=Yu=Ls=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Yd(gt,a,ft);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":Yd(gt,a,ft)}var Xt;if(ku)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Us?Od(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Ud&&a.locale!=="ko"&&(Us||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Us&&(Xt=Ad()):(ha=ft,Iu="value"in ha?ha.value:ha.textContent,Us=!0)),fe=zl(J,$t),0<fe.length&&($t=new wd($t,e,null,a,ft),gt.push({event:$t,listeners:fe}),Xt?$t.data=Xt:(Xt=Pd(a),Xt!==null&&($t.data=Xt)))),(Xt=pv?mv(e,a):_v(e,a))&&($t=zl(J,"onBeforeInput"),0<$t.length&&(fe=new wd("onBeforeInput","beforeinput",null,a,ft),gt.push({event:fe,listeners:$t}),fe.data=Xt)),rS(gt,e,J,a,ft)}g_(gt,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function zl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Lr(e,a),u!=null&&r.unshift(mo(e,u,f)),u=Lr(e,n),u!=null&&r.push(mo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S_(e,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var T=a,O=T.alternate,J=T.stateNode;if(T=T.tag,O!==null&&O===r)break;T!==5&&T!==26&&T!==27||J===null||(O=J,u?(J=Lr(a,f),J!=null&&x.unshift(mo(a,J,O))):u||(J=Lr(a,f),J!=null&&x.push(mo(a,J,O)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var cS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function x_(e){return(typeof e=="string"?e:""+e).replace(cS,`
`).replace(fS,"")}function y_(e,n){return n=x_(n),x_(e)===n}function Il(){}function Oe(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||yi(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&yi(e,""+r);break;case"className":wt(e,"class",r);break;case"tabIndex":wt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,r);break;case"style":Ed(e,r,f);break;case"data":if(n!=="object"){wt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=qo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=qo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Il);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=qo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Tt(e,"popover",r);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=G0.get(a)||a,Tt(e,a,r))}}function vf(e,n,a,r,u,f){switch(a){case"style":Ed(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?yi(e,r):(typeof r=="number"||typeof r=="bigint")&&yi(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Il);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Tt(e,a,r)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,x,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),r&&Oe(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var T=f=x=u=null,O=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":u=ft;break;case"type":x=ft;break;case"checked":O=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Oe(e,n,r,ft,a,null)}}Fe(e,f,T,O,J,x,u,!1),je(e);return;case"select":pe("invalid",e),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":r=T;default:Oe(e,n,u,T,a,null)}n=f,a=x,e.multiple=!!r,n!=null?on(e,!!r,n,!1):a!=null&&on(e,!!r,a,!0);return;case"textarea":pe("invalid",e),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Oe(e,n,x,T,a,null)}yn(e,r,u,f),je(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(r=a[O],r!=null))switch(O){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Oe(e,n,O,r,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<po.length;r++)pe(po[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,J,r,a,null)}return;default:if(Nu(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&vf(e,n,ft,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Oe(e,n,T,r,a,null))}function hS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,O=null,J=null,ft=null;for(at in a){var gt=a[at];if(a.hasOwnProperty(at)&&gt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":O=gt;default:r.hasOwnProperty(at)||Oe(e,n,at,null,r,gt)}}for(var nt in r){var at=r[nt];if(gt=a[nt],r.hasOwnProperty(nt)&&(at!=null||gt!=null))switch(nt){case"type":f=at;break;case"name":u=at;break;case"checked":J=at;break;case"defaultChecked":ft=at;break;case"value":x=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==gt&&Oe(e,n,nt,at,r,gt)}}Bi(e,x,T,O,J,ft,f,u);return;case"select":at=x=T=nt=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":at=O;default:r.hasOwnProperty(f)||Oe(e,n,f,null,r,O)}for(u in r)if(f=r[u],O=a[u],r.hasOwnProperty(u)&&(f!=null||O!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==O&&Oe(e,n,u,f,r,O)}n=T,a=x,r=at,nt!=null?on(e,!!a,nt,!1):!!r!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":at=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":nt=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Oe(e,n,x,u,r,f)}pn(e,nt,at);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Oe(e,n,te,null,r,nt)}for(O in r)if(nt=r[O],at=a[O],r.hasOwnProperty(O)&&nt!==at&&(nt!=null||at!=null))switch(O){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Oe(e,n,O,nt,r,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)nt=a[Qt],a.hasOwnProperty(Qt)&&nt!=null&&!r.hasOwnProperty(Qt)&&Oe(e,n,Qt,null,r,nt);for(J in r)if(nt=r[J],at=a[J],r.hasOwnProperty(J)&&nt!==at&&(nt!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Oe(e,n,J,nt,r,at)}return;default:if(Nu(n)){for(var Pe in a)nt=a[Pe],a.hasOwnProperty(Pe)&&nt!==void 0&&!r.hasOwnProperty(Pe)&&vf(e,n,Pe,void 0,r,nt);for(ft in r)nt=r[ft],at=a[ft],!r.hasOwnProperty(ft)||nt===at||nt===void 0&&at===void 0||vf(e,n,ft,nt,r,at);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!r.hasOwnProperty(q)&&Oe(e,n,q,null,r,nt);for(gt in r)nt=r[gt],at=a[gt],!r.hasOwnProperty(gt)||nt===at||nt==null&&at==null||Oe(e,n,gt,nt,r,at)}var Sf=null,xf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function M_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function dS(){var e=window.event;return e&&e.type==="popstate"?e===Mf?!1:(Mf=e,!0):(Mf=null,!1)}var T_=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(e){return b_.resolve(null).then(e).catch(_S)}:T_;function _S(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function A_(e,n){var a=n,r=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var x=e.ownerDocument;if(a&1&&_o(x.documentElement),a&2&&_o(x.body),a&4)for(a=x.head,_o(a),x=a.firstChild;x;){var T=x.nextSibling,O=x.nodeName;x[la]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(u===0){e.removeChild(f),To(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);To(n)}function Ef(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ef(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[la])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function vS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function Tf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function SS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var bf=null;function R_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function C_(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ua(e)}var oi=new Map,w_=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=X.d;X.d={f:xS,r:yS,D:MS,C:ES,L:TS,m:bS,X:RS,S:AS,M:CS};function xS(){var e=Qi.f(),n=Ul();return e||n}function yS(e){var n=Oi(e);n!==null&&n.tag===5&&n.type==="form"?Zp(n):Qi.r(e)}var ir=typeof document>"u"?null:document;function D_(e,n,a){var r=ir;if(r&&typeof n=="string"&&n){var u=ke(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),w_.has(u)||(w_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Tn(n,"link",e),en(n),r.head.appendChild(n)))}}function MS(e){Qi.D(e),D_("dns-prefetch",e,null)}function ES(e,n){Qi.C(e,n),D_("preconnect",e,n)}function TS(e,n,a){Qi.L(e,n,a);var r=ir;if(r&&e&&n){var u='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ke(a.imageSizes)+'"]')):u+='[href="'+ke(e)+'"]';var f=u;switch(n){case"style":f=ar(e);break;case"script":f=sr(e)}oi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(go(f))||n==="script"&&r.querySelector(vo(f))||(n=r.createElement("link"),Tn(n,"link",e),en(n),r.head.appendChild(n)))}}function bS(e,n){Qi.m(e,n);var a=ir;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ke(r)+'"][href="'+ke(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(e)}if(!oi.has(f)&&(e=_({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}r=a.createElement("link"),Tn(r,"link",e),en(r),a.head.appendChild(r)}}}function AS(e,n,a){Qi.S(e,n,a);var r=ir;if(r&&e){var u=ca(r).hoistableStyles,f=ar(e);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=r.querySelector(go(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Af(e,a);var O=x=r.createElement("link");en(O),Tn(O,"link",e),O._p=new Promise(function(J,ft){O.onload=J,O.onerror=ft}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Gl(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function RS(e,n){Qi.X(e,n);var a=ir;if(a&&e){var r=ca(a).hoistableScripts,u=sr(e),f=r.get(u);f||(f=a.querySelector(vo(u)),f||(e=_({src:e,async:!0},n),(n=oi.get(u))&&Rf(e,n),f=a.createElement("script"),en(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function CS(e,n){Qi.M(e,n);var a=ir;if(a&&e){var r=ca(a).hoistableScripts,u=sr(e),f=r.get(u);f||(f=a.querySelector(vo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=oi.get(u))&&Rf(e,n),f=a.createElement("script"),en(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function U_(e,n,a,r){var u=(u=Mt.current)?Hl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=ca(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var f=ca(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(go(e)))&&!f._p&&(x.instance=f,x.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||wS(u,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=ca(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+ke(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function wS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),en(n),e.head.appendChild(n))}function sr(e){return'[src="'+ke(e)+'"]'}function vo(e){return"script[async]"+e}function N_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(r)return n.instance=r,en(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),en(r),Tn(r,"style",u),Gl(r,a.precedence,e),n.instance=r;case"stylesheet":u=ar(a.href);var f=e.querySelector(go(u));if(f)return n.state.loading|=4,n.instance=f,en(f),f;r=L_(a),(u=oi.get(u))&&Af(r,u),f=(e.ownerDocument||e).createElement("link"),en(f);var x=f;return x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),Tn(f,"link",r),n.state.loading|=4,Gl(f,a.precedence,e),n.instance=f;case"script":return f=sr(a.src),(u=e.querySelector(vo(f)))?(n.instance=u,en(u),u):(r=a,(u=oi.get(f))&&(r=_({},a),Rf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),en(u),Tn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gl(r,a.precedence,e));return n.instance}function Gl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var T=r[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Af(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Rf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function O_(e,n,a){if(Vl===null){var r=new Map,u=Vl=new Map;u.set(a,r)}else u=Vl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[la]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var T=r.get(x);T?T.push(f):r.set(x,[f])}}return r}function P_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function DS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function B_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var So=null;function US(){}function LS(e,n,a){if(So===null)throw Error(s(475));var r=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ar(a.href),f=e.querySelector(go(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=kl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=L_(a),(u=oi.get(u))&&Af(a,u),f=f.createElement("link"),en(f);var x=f;x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),Tn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=kl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function NS(){if(So===null)throw Error(s(475));var e=So;return e.stylesheets&&e.count===0&&Cf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Cf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function kl(){if(this.count--,this.count===0){if(this.stylesheets)Cf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Cf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(OS,e),Xl=null,kl.call(e))}function OS(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var r=a.get(null);else{a=new Map,Xl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=kl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:P,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function PS(e,n,a,r,u,f,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function z_(e,n,a,r,u,f,x,T,O,J,ft,gt){return e=new PS(e,n,a,x,T,O,J,gt),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=lc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},hc(f),e}function I_(e){return e?(e=Bs,e):Bs}function F_(e,n,a,r,u,f){u=I_(u),r.context===null?r.context=u:r.pendingContext=u,r=ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(e,r,n),a!==null&&(Jn(a,e,n),Zr(a,e,n))}function H_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function wf(e,n){H_(e,n),(e=e.alternate)&&H_(e,n)}function G_(e){if(e.tag===13){var n=Ps(e,67108864);n!==null&&Jn(n,e,67108864),wf(e,67108864)}}var Wl=!0;function BS(e,n,a,r){var u=L.T;L.T=null;var f=X.p;try{X.p=2,Df(e,n,a,r)}finally{X.p=f,L.T=u}}function zS(e,n,a,r){var u=L.T;L.T=null;var f=X.p;try{X.p=8,Df(e,n,a,r)}finally{X.p=f,L.T=u}}function Df(e,n,a,r){if(Wl){var u=Uf(r);if(u===null)gf(e,n,r,ql,a),k_(e,r);else if(FS(u,e,n,a,r))r.stopPropagation();else if(k_(e,r),n&4&&-1<IS.indexOf(e)){for(;u!==null;){var f=Oi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Wt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var O=1<<31-Ot(x);T.entanglements[1]|=O,x&=~O}Ai(f),(De&6)===0&&(wl=he()+500,ho(0))}}break;case 13:T=Ps(f,2),T!==null&&Jn(T,f,2),Ul(),wf(f,2)}if(f=Uf(r),f===null&&gf(e,n,r,ql,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else gf(e,n,r,null,a)}}function Uf(e){return e=Pu(e),Lf(e)}var ql=null;function Lf(e){if(ql=null,e=Ni(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function V_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case ge:return 2;case Yt:return 8;case ie:case Je:return 32;case N:return 268435456;default:return 32}default:return 32}}var Nf=!1,wa=null,Da=null,Ua=null,yo=new Map,Mo=new Map,La=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Oi(n),n!==null&&G_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function FS(e,n,a,r,u){switch(n){case"focusin":return wa=Eo(wa,e,n,a,r,u),!0;case"dragenter":return Da=Eo(Da,e,n,a,r,u),!0;case"mouseover":return Ua=Eo(Ua,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return yo.set(f,Eo(yo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,r,u)),!0}return!1}function X_(e){var n=Ni(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var r=Qn();r=ee(r);var u=Ps(a,r);u!==null&&Jn(u,a,r),wf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Uf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ou=r,a.target.dispatchEvent(r),Ou=null}else return n=Oi(a),n!==null&&G_(n),e.blockedOn=a,!1;n.shift()}return!0}function W_(e,n,a){Yl(e)&&a.delete(n)}function HS(){Nf=!1,wa!==null&&Yl(wa)&&(wa=null),Da!==null&&Yl(Da)&&(Da=null),Ua!==null&&Yl(Ua)&&(Ua=null),yo.forEach(W_),Mo.forEach(W_)}function jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Nf||(Nf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HS)))}var Zl=null;function q_(e){Zl!==e&&(Zl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===e&&(Zl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Lf(r||a)===null)continue;break}var f=Oi(a);f!==null&&(e.splice(n,3),n-=3,Uc(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function To(e){function n(O){return jl(O,e)}wa!==null&&jl(wa,e),Da!==null&&jl(Da,e),Ua!==null&&jl(Ua,e),yo.forEach(n),Mo.forEach(n);for(var a=0;a<La.length;a++){var r=La[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)X_(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[xn]||null;if(typeof f=="function")x||q_(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[xn]||null)T=x.formAction;else if(Lf(u)!==null)continue}else T=x.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),q_(a)}}}function Of(e){this._internalRoot=e}Kl.prototype.render=Of.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();F_(a,r,e,n,null,null)},Kl.prototype.unmount=Of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;F_(e.current,2,null,e,null,null),Ul(),n[Bn]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&X_(e)}};var Y_=t.version;if(Y_!=="19.1.0")throw Error(s(527,Y_,"19.1.0"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var GS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{ht=Ql.inject(GS),pt=Ql}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=um,f=cm,x=fm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=z_(e,1,!1,null,null,a,r,u,f,x,T,null),e[Bn]=n.current,_f(e),new Of(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=um,x=cm,T=fm,O=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=z_(e,1,!0,n,a??null,r,u,f,x,T,O,J),n.context=I_(null),a=n.current,r=Qn(),r=ee(r),u=ma(r),u.callback=null,_a(a,u,r),a=r,n.current.lanes=a,Bt(n,a),Ai(n),e[Bn]=n.current,_f(e),new Kl(n)},bo.version="19.1.0",bo}var eg;function KS(){if(eg)return Bf.exports;eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bf.exports=ZS(),Bf.exports}var QS=KS();const JS=r0(QS);var Hf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function $S(){if(ng)return Ao;ng=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var ig;function tx(){return ig||(ig=1,Hf.exports=$S()),Hf.exports}var Ge=tx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="177",Ms={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ex=0,ag=1,nx=2,o0=1,l0=2,ia=3,Xa=0,kn=1,aa=2,Va=0,Mr=1,sg=2,rg=3,og=4,ix=5,vs=100,ax=101,sx=102,rx=103,ox=104,lx=200,ux=201,cx=202,fx=203,Sh=204,xh=205,hx=206,dx=207,px=208,mx=209,_x=210,gx=211,vx=212,Sx=213,xx=214,yh=0,Mh=1,Eh=2,br=3,Th=4,bh=5,Ah=6,Rh=7,u0=0,yx=1,Mx=2,ka=0,Ex=1,Tx=2,bx=3,Ax=4,Rx=5,Cx=6,wx=7,c0=300,Ar=301,Rr=302,Ch=303,wh=304,Du=306,Dh=1e3,xs=1001,Uh=1002,xi=1003,Dx=1004,Jl=1005,wi=1006,Gf=1007,ys=1008,Ui=1009,f0=1010,h0=1011,Oo=1012,ud=1013,Ts=1014,sa=1015,Io=1016,cd=1017,fd=1018,Po=1020,d0=35902,p0=1021,m0=1022,Si=1023,Bo=1026,zo=1027,_0=1028,hd=1029,g0=1030,dd=1031,pd=1033,xu=33776,yu=33777,Mu=33778,Eu=33779,Lh=35840,Nh=35841,Oh=35842,Ph=35843,Bh=36196,zh=37492,Ih=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,jh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,Tu=36492,$h=36494,td=36495,v0=36283,ed=36284,nd=36285,id=36286,Ux=3200,Lx=3201,S0=0,Nx=1,Ga="",ci="srgb",Cr="srgb-linear",Ru="linear",Be="srgb",rr=7680,lg=519,Ox=512,Px=513,Bx=514,x0=515,zx=516,Ix=517,Fx=518,Hx=519,ug=35044,cg="300 es",ra=2e3,Cu=2001;class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bu=Math.PI/180,ad=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function me(o,t,i){return Math.max(t,Math.min(i,o))}function Gx(o,t){return(o%t+t)%t}function Vf(o,t,i){return(1-i)*o+i*t}function Ro(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Vx={DEG2RAD:bu};class ae{constructor(t=0,i=0){ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],v=s[l+3];const S=c[h+0],M=c[h+1],A=c[h+2],C=c[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=A,t[i+3]=C;return}if(v!==C||p!==S||m!==M||_!==A){let y=1-d;const g=p*S+m*M+_*A+v*C,B=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const G=Math.sqrt(P),k=Math.atan2(G,g*B);y=Math.sin(y*k)/G,d=Math.sin(d*k)/G}const D=d*B;if(p=p*y+S*D,m=m*y+M*D,_=_*y+A*D,v=v*y+C*D,y===1-d){const G=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=G,m*=G,_*=G,v*=G}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],v=c[h],S=c[h+1],M=c[h+2],A=c[h+3];return t[i]=d*A+_*v+p*M-m*S,t[i+1]=p*A+_*S+m*v-d*M,t[i+2]=m*A+_*M+d*S-p*v,t[i+3]=_*A-d*v-p*S-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),v=d(c/2),S=p(s/2),M=p(l/2),A=p(c/2);switch(h){case"XYZ":this._x=S*_*v+m*M*A,this._y=m*M*v-S*_*A,this._z=m*_*A+S*M*v,this._w=m*_*v-S*M*A;break;case"YXZ":this._x=S*_*v+m*M*A,this._y=m*M*v-S*_*A,this._z=m*_*A-S*M*v,this._w=m*_*v+S*M*A;break;case"ZXY":this._x=S*_*v-m*M*A,this._y=m*M*v+S*_*A,this._z=m*_*A+S*M*v,this._w=m*_*v-S*M*A;break;case"ZYX":this._x=S*_*v-m*M*A,this._y=m*M*v+S*_*A,this._z=m*_*A-S*M*v,this._w=m*_*v+S*M*A;break;case"YZX":this._x=S*_*v+m*M*A,this._y=m*M*v+S*_*A,this._z=m*_*A-S*M*v,this._w=m*_*v-S*M*A;break;case"XZY":this._x=S*_*v-m*M*A,this._y=m*M*v-S*_*A,this._z=m*_*A+S*M*v,this._w=m*_*v+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],v=i[10],S=s+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-p)*M,this._y=(c-m)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(_-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(c-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(c+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-s*m,this._z=c*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-i)*_)/m,S=Math.sin(i*_)/m;return this._w=h*v+this._w*S,this._x=s*v+this._x*S,this._y=l*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(fg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(fg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),_=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+p*m+h*v-d*_,this.y=s+p*_+d*m-c*v,this.z=l+p*v+c*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return kf.copy(this).projectOnVector(t),this.sub(kf)}reflect(t){return this.sub(kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new tt,fg=new bs;class re{constructor(t,i,s,l,c,h,d,p,m){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m)}set(t,i,s,l,c,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],v=s[7],S=s[2],M=s[5],A=s[8],C=l[0],y=l[3],g=l[6],B=l[1],P=l[4],D=l[7],G=l[2],k=l[5],I=l[8];return c[0]=h*C+d*B+p*G,c[3]=h*y+d*P+p*k,c[6]=h*g+d*D+p*I,c[1]=m*C+_*B+v*G,c[4]=m*y+_*P+v*k,c[7]=m*g+_*D+v*I,c[2]=S*C+M*B+A*G,c[5]=S*y+M*P+A*k,c[8]=S*g+M*D+A*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-s*c*_+s*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=_*h-d*m,S=d*p-_*c,M=m*c-h*p,A=i*v+s*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(l*m-_*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(_*i-l*p)*C,t[5]=(l*c-d*i)*C,t[6]=M*C,t[7]=(s*p-m*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Xf.makeScale(t,i)),this}rotate(t){return this.premultiply(Xf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Xf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new re;function y0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function wu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kx(){const o=wu("canvas");return o.style.display="block",o}const hg={};function Er(o){o in hg||(hg[o]=!0,console.warn(o))}function Xx(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function Wx(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qx(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const dg=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pg=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){const o={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Tr(l.r),l.g=Tr(l.g),l.b=Tr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Cr]:{primaries:t,whitePoint:s,transfer:Ru,toXYZ:dg,fromXYZ:pg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:dg,fromXYZ:pg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const be=Yx();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Tr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let or;class jx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=wu("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=wu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=oa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zx=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Wf(l[h].image)):c.push(Wf(l[h]))}else c=Wf(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Wf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kx=0;const qf=new tt;class Xn extends Rs{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=xs,l=xs,c=wi,h=ys,d=Si,p=Ui,m=Xn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Fo(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qf).x}get height(){return this.source.getSize(qf).y}get depth(){return this.source.getSize(qf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==c0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dh:t.x=t.x-Math.floor(t.x);break;case xs:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dh:t.y=t.y-Math.floor(t.y);break;case xs:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=c0;Xn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],v=p[8],S=p[1],M=p[5],A=p[9],C=p[2],y=p[6],g=p[10];if(Math.abs(_-S)<.01&&Math.abs(v-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+C)<.1&&Math.abs(A+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(m+1)/2,D=(M+1)/2,G=(g+1)/2,k=(_+S)/4,I=(v+C)/4,Z=(A+y)/4;return P>D&&P>G?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=k/s,c=I/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=k/l,c=Z/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=I/c,l=Z/c),this.set(s,l,c,i),this}let B=Math.sqrt((y-A)*(y-A)+(v-C)*(v-C)+(S-_)*(S-_));return Math.abs(B)<.001&&(B=1),this.x=(y-A)/B,this.y=(v-C)/B,this.z=(S-_)/B,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qx extends Rs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Xn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new md(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends Qx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class M0 extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jx extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,mi):mi.fromBufferAttribute(c,h),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$l.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(t.matrixWorld),this.union($l)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),tu.subVectors(this.max,Co),lr.subVectors(t.a,Co),ur.subVectors(t.b,Co),cr.subVectors(t.c,Co),Oa.subVectors(ur,lr),Pa.subVectors(cr,ur),fs.subVectors(lr,cr);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-fs.z,fs.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,fs.z,0,-fs.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-fs.y,fs.x,0];return!Yf(i,lr,ur,cr,tu)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,lr,ur,cr,tu))?!1:(eu.crossVectors(Oa,Pa),i=[eu.x,eu.y,eu.z],Yf(i,lr,ur,cr,tu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],mi=new tt,$l=new Ho,lr=new tt,ur=new tt,cr=new tt,Oa=new tt,Pa=new tt,fs=new tt,Co=new tt,tu=new tt,eu=new tt,hs=new tt;function Yf(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){hs.fromArray(o,c);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),p=t.dot(hs),m=i.dot(hs),_=s.dot(hs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const $x=new Ho,wo=new tt,jf=new tt;class _d{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):$x.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(jf)),this.expandByPoint(wo.copy(t.center).sub(jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new tt,Zf=new tt,nu=new tt,Ba=new tt,Kf=new tt,iu=new tt,Qf=new tt;class gd{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Zf.copy(t).add(i).multiplyScalar(.5),nu.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(Zf);const c=t.distanceTo(i)*.5,h=-this.direction.dot(nu),d=Ba.dot(this.direction),p=-Ba.dot(nu),m=Ba.lengthSq(),_=Math.abs(1-h*h);let v,S,M,A;if(_>0)if(v=h*p-d,S=h*d-p,A=c*_,v>=0)if(S>=-A)if(S<=A){const C=1/_;v*=C,S*=C,M=v*(v+h*S+2*d)+S*(h*v+S+2*p)+m}else S=c,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*p)+m;else S=-c,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*p)+m;else S<=-A?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-p),c),M=-v*v+S*(S+2*p)+m):S<=A?(v=0,S=Math.min(Math.max(-c,-p),c),M=S*(S+2*p)+m):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-p),c),M=-v*v+S*(S+2*p)+m);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Zf).addScaledVector(nu,S),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(s=(t.min.x-S.x)*m,l=(t.max.x-S.x)*m):(s=(t.max.x-S.x)*m,l=(t.min.x-S.x)*m),_>=0?(c=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(c=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,p=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,p=(t.min.z-S.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,s,l,c){Kf.subVectors(i,t),iu.subVectors(s,t),Qf.crossVectors(Kf,iu);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const p=d*this.direction.dot(iu.crossVectors(Ba,iu));if(p<0)return null;const m=d*this.direction.dot(Kf.cross(Ba));if(m<0||p+m>h)return null;const _=-d*Ba.dot(Qf);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,s,l,c,h,d,p,m,_,v,S,M,A,C,y){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m,_,v,S,M,A,C,y)}set(t,i,s,l,c,h,d,p,m,_,v,S,M,A,C,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=S,g[3]=M,g[7]=A,g[11]=C,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),c=1/fr.setFromMatrixColumn(t,1).length(),h=1/fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const S=h*_,M=h*v,A=d*_,C=d*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=M+A*m,i[5]=S-C*m,i[9]=-d*p,i[2]=C-S*m,i[6]=A+M*m,i[10]=h*p}else if(t.order==="YXZ"){const S=p*_,M=p*v,A=m*_,C=m*v;i[0]=S+C*d,i[4]=A*d-M,i[8]=h*m,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-A,i[6]=C+S*d,i[10]=h*p}else if(t.order==="ZXY"){const S=p*_,M=p*v,A=m*_,C=m*v;i[0]=S-C*d,i[4]=-h*v,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const S=h*_,M=h*v,A=d*_,C=d*v;i[0]=p*_,i[4]=A*m-M,i[8]=S*m+C,i[1]=p*v,i[5]=C*m+S,i[9]=M*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const S=h*p,M=h*m,A=d*p,C=d*m;i[0]=p*_,i[4]=C-S*v,i[8]=A*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=M*v+A,i[10]=S-C*v}else if(t.order==="XZY"){const S=h*p,M=h*m,A=d*p,C=d*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=S*v+C,i[5]=h*_,i[9]=M*v-A,i[2]=A*v-M,i[6]=d*_,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ty,t,ey)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),za.crossVectors(s,$n),za.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),za.crossVectors(s,$n)),za.normalize(),au.crossVectors($n,za),l[0]=za.x,l[4]=au.x,l[8]=$n.x,l[1]=za.y,l[5]=au.y,l[9]=$n.y,l[2]=za.z,l[6]=au.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],v=s[5],S=s[9],M=s[13],A=s[2],C=s[6],y=s[10],g=s[14],B=s[3],P=s[7],D=s[11],G=s[15],k=l[0],I=l[4],Z=l[8],w=l[12],R=l[1],H=l[5],ct=l[9],lt=l[13],rt=l[2],it=l[6],L=l[10],X=l[14],W=l[3],mt=l[7],U=l[11],$=l[15];return c[0]=h*k+d*R+p*rt+m*W,c[4]=h*I+d*H+p*it+m*mt,c[8]=h*Z+d*ct+p*L+m*U,c[12]=h*w+d*lt+p*X+m*$,c[1]=_*k+v*R+S*rt+M*W,c[5]=_*I+v*H+S*it+M*mt,c[9]=_*Z+v*ct+S*L+M*U,c[13]=_*w+v*lt+S*X+M*$,c[2]=A*k+C*R+y*rt+g*W,c[6]=A*I+C*H+y*it+g*mt,c[10]=A*Z+C*ct+y*L+g*U,c[14]=A*w+C*lt+y*X+g*$,c[3]=B*k+P*R+D*rt+G*W,c[7]=B*I+P*H+D*it+G*mt,c[11]=B*Z+P*ct+D*L+G*U,c[15]=B*w+P*lt+D*X+G*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],v=t[6],S=t[10],M=t[14],A=t[3],C=t[7],y=t[11],g=t[15];return A*(+c*p*v-l*m*v-c*d*S+s*m*S+l*d*M-s*p*M)+C*(+i*p*M-i*m*S+c*h*S-l*h*M+l*m*_-c*p*_)+y*(+i*m*v-i*d*M-c*h*v+s*h*M+c*d*_-s*m*_)+g*(-l*d*_-i*p*v+i*d*S+l*h*v-s*h*S+s*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=t[9],S=t[10],M=t[11],A=t[12],C=t[13],y=t[14],g=t[15],B=v*y*m-C*S*m+C*p*M-d*y*M-v*p*g+d*S*g,P=A*S*m-_*y*m-A*p*M+h*y*M+_*p*g-h*S*g,D=_*C*m-A*v*m+A*d*M-h*C*M-_*d*g+h*v*g,G=A*v*p-_*C*p-A*d*S+h*C*S+_*d*y-h*v*y,k=i*B+s*P+l*D+c*G;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return t[0]=B*I,t[1]=(C*S*c-v*y*c-C*l*M+s*y*M+v*l*g-s*S*g)*I,t[2]=(d*y*c-C*p*c+C*l*m-s*y*m-d*l*g+s*p*g)*I,t[3]=(v*p*c-d*S*c-v*l*m+s*S*m+d*l*M-s*p*M)*I,t[4]=P*I,t[5]=(_*y*c-A*S*c+A*l*M-i*y*M-_*l*g+i*S*g)*I,t[6]=(A*p*c-h*y*c-A*l*m+i*y*m+h*l*g-i*p*g)*I,t[7]=(h*S*c-_*p*c+_*l*m-i*S*m-h*l*M+i*p*M)*I,t[8]=D*I,t[9]=(A*v*c-_*C*c-A*s*M+i*C*M+_*s*g-i*v*g)*I,t[10]=(h*C*c-A*d*c+A*s*m-i*C*m-h*s*g+i*d*g)*I,t[11]=(_*d*c-h*v*c-_*s*m+i*v*m+h*s*M-i*d*M)*I,t[12]=G*I,t[13]=(_*C*l-A*v*l+A*s*S-i*C*S-_*s*y+i*v*y)*I,t[14]=(A*d*l-h*C*l-A*s*p+i*C*p+h*s*y-i*d*y)*I,t[15]=(h*v*l-_*d*l+_*s*p-i*v*p-h*s*S+i*d*S)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,p=t.z,m=c*h,_=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,v=d+d,S=c*m,M=c*_,A=c*v,C=h*_,y=h*v,g=d*v,B=p*m,P=p*_,D=p*v,G=s.x,k=s.y,I=s.z;return l[0]=(1-(C+g))*G,l[1]=(M+D)*G,l[2]=(A-P)*G,l[3]=0,l[4]=(M-D)*k,l[5]=(1-(S+g))*k,l[6]=(y+B)*k,l[7]=0,l[8]=(A+P)*I,l[9]=(y-B)*I,l[10]=(1-(S+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const h=fr.set(l[4],l[5],l[6]).length(),d=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const m=1/c,_=1/h,v=1/d;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ra){const p=this.elements,m=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),S=(s+l)/(s-l);let M,A;if(d===ra)M=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Cu)M=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ra){const p=this.elements,m=1/(i-t),_=1/(s-l),v=1/(h-c),S=(i+t)*m,M=(s+l)*_;let A,C;if(d===ra)A=(h+c)*v,C=-2*v;else if(d===Cu)A=c*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fr=new tt,_i=new Ye,ty=new tt(0,0,0),ey=new tt(1,1,1),za=new tt,au=new tt,$n=new tt,mg=new Ye,_g=new bs;class Li{constructor(t=0,i=0,s=0,l=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return mg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return _g.setFromEuler(this),this.setFromQuaternion(_g,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ny=0;const gg=new tt,hr=new bs,ta=new Ye,su=new tt,Do=new tt,iy=new tt,ay=new bs,vg=new tt(1,0,0),Sg=new tt(0,1,0),xg=new tt(0,0,1),yg={type:"added"},sy={type:"removed"},dr={type:"childadded",child:null},Jf={type:"childremoved",child:null};class Un extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new tt,i=new Li,s=new bs,l=new tt(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new re}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(vg,t)}rotateY(t){return this.rotateOnAxis(Sg,t)}rotateZ(t){return this.rotateOnAxis(xg,t)}translateOnAxis(t,i){return gg.copy(t).applyQuaternion(this.quaternion),this.position.add(gg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(vg,t)}translateY(t){return this.translateOnAxis(Sg,t)}translateZ(t){return this.translateOnAxis(xg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?su.copy(t):su.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Do,su,this.up):ta.lookAt(su,Do,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(ta),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yg),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(sy),Jf.child=t,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yg),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,iy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,ay,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),v=h(t.shapes),S=h(t.skeletons),M=h(t.animations),A=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new tt(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new tt,ea=new tt,$f=new tt,na=new tt,pr=new tt,mr=new tt,Mg=new tt,th=new tt,eh=new tt,nh=new tt,ih=new Qe,ah=new Qe,sh=new Qe;class vi{constructor(t=new tt,i=new tt,s=new tt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),gi.subVectors(t,i),l.cross(gi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){gi.subVectors(l,i),ea.subVectors(s,i),$f.subVectors(t,i);const h=gi.dot(gi),d=gi.dot(ea),p=gi.dot($f),m=ea.dot(ea),_=ea.dot($f),v=h*m-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,M=(m*p-d*_)*S,A=(h*_-d*p)*S;return c.set(1-M-A,A,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,s,l,c,h,d,p){return this.getBarycoord(t,i,s,l,na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,na.x),p.addScaledVector(h,na.y),p.addScaledVector(d,na.z),p)}static getInterpolatedAttribute(t,i,s,l,c,h){return ih.setScalar(0),ah.setScalar(0),sh.setScalar(0),ih.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,s),sh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ih,c.x),h.addScaledVector(ah,c.y),h.addScaledVector(sh,c.z),h}static isFrontFacing(t,i,s,l){return gi.subVectors(s,i),ea.subVectors(t,i),gi.cross(ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),gi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;pr.subVectors(l,s),mr.subVectors(c,s),th.subVectors(t,s);const p=pr.dot(th),m=mr.dot(th);if(p<=0&&m<=0)return i.copy(s);eh.subVectors(t,l);const _=pr.dot(eh),v=mr.dot(eh);if(_>=0&&v<=_)return i.copy(l);const S=p*v-_*m;if(S<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(pr,h);nh.subVectors(t,c);const M=pr.dot(nh),A=mr.dot(nh);if(A>=0&&M<=A)return i.copy(c);const C=M*m-p*A;if(C<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(s).addScaledVector(mr,d);const y=_*A-M*v;if(y<=0&&v-_>=0&&M-A>=0)return Mg.subVectors(c,l),d=(v-_)/(v-_+(M-A)),i.copy(l).addScaledVector(Mg,d);const g=1/(y+C+S);return h=C*g,d=S*g,i.copy(s).addScaledVector(pr,h).addScaledVector(mr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},ru={h:0,s:0,l:0};function rh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ae{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=Gx(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=rh(h,c,t+1/3),this.g=rh(h,c,t),this.b=rh(h,c,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const s=E0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return be.workingToColorSpace(Dn.copy(this),t),Math.round(me(Dn.r*255,0,255))*65536+Math.round(me(Dn.g*255,0,255))*256+Math.round(me(Dn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=_<=.5?v/(h+d):v/(2-h-d),h){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ci){be.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(ru);const s=Vf(Ia.h,ru.h,i),l=Vf(Ia.s,ru.s,i),c=Vf(Ia.l,ru.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ae;Ae.NAMES=E0;let ry=0;class Go extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Mr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=xh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sh&&(s.blendSrc=this.blendSrc),this.blendDst!==xh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class T0 extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new tt,ou=new ae;let oy=0;class Di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=ug,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ou.fromBufferAttribute(this,i),ou.applyMatrix3(t),this.setXY(i,ou.x,ou.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ug&&(t.usage=this.usage),t}}class b0 extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class A0 extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Es extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let ly=0;const li=new Ye,oh=new Un,_r=new tt,ti=new Ho,Uo=new Ho,vn=new tt;class Cs extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(y0(t)?A0:b0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new re().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,s){return li.makeTranslation(t,i,s),this.applyMatrix4(li),this}scale(t,i,s){return li.makeScale(t,i,s),this.applyMatrix4(li),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Es(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _d);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ti.min,Uo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Uo.max),ti.expandByPoint(vn)):(ti.expandByPoint(Uo.min),ti.expandByPoint(Uo.max))}ti.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)vn.fromBufferAttribute(d,m),p&&(_r.fromBufferAttribute(t,m),vn.add(_r)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let Z=0;Z<s.count;Z++)d[Z]=new tt,p[Z]=new tt;const m=new tt,_=new tt,v=new tt,S=new ae,M=new ae,A=new ae,C=new tt,y=new tt;function g(Z,w,R){m.fromBufferAttribute(s,Z),_.fromBufferAttribute(s,w),v.fromBufferAttribute(s,R),S.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,w),A.fromBufferAttribute(c,R),_.sub(m),v.sub(m),M.sub(S),A.sub(S);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(H),d[Z].add(C),d[w].add(C),d[R].add(C),p[Z].add(y),p[w].add(y),p[R].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let Z=0,w=B.length;Z<w;++Z){const R=B[Z],H=R.start,ct=R.count;for(let lt=H,rt=H+ct;lt<rt;lt+=3)g(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const P=new tt,D=new tt,G=new tt,k=new tt;function I(Z){G.fromBufferAttribute(l,Z),k.copy(G);const w=d[Z];P.copy(w),P.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(k,w);const H=D.dot(p[Z])<0?-1:1;h.setXYZW(Z,P.x,P.y,P.z,H)}for(let Z=0,w=B.length;Z<w;++Z){const R=B[Z],H=R.start,ct=R.count;for(let lt=H,rt=H+ct;lt<rt;lt+=3)I(t.getX(lt+0)),I(t.getX(lt+1)),I(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new tt,c=new tt,h=new tt,d=new tt,p=new tt,m=new tt,_=new tt,v=new tt;if(t)for(let S=0,M=t.count;S<M;S+=3){const A=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,y),d.add(_),p.add(_),m.add(_),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,v=d.normalized,S=new m.constructor(p.length*_);let M=0,A=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*_;for(let g=0;g<_;g++)S[A++]=m[M++]}return new Di(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Cs,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,v=m.length;_<v;_++){const S=m[_],M=t(S,s);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,S=m.length;v<S;v++){const M=m[v];_.push(M.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],v=c[m];for(let S=0,M=v.length;S<M;S++)_.push(v[S].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eg=new Ye,ds=new gd,lu=new _d,Tg=new tt,uu=new tt,cu=new tt,fu=new tt,lh=new tt,hu=new tt,bg=new tt,du=new tt;class Pn extends Un{constructor(t=new Cs,i=new T0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){hu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],v=c[p];_!==0&&(lh.fromBufferAttribute(v,t),h?hu.addScaledVector(lh,_):hu.addScaledVector(lh.sub(i),_))}i.add(hu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lu.copy(s.boundingSphere),lu.applyMatrix4(c),ds.copy(t.ray).recast(t.near),!(lu.containsPoint(ds.origin)===!1&&(ds.intersectSphere(lu,Tg)===null||ds.origin.distanceToSquared(Tg)>(t.far-t.near)**2))&&(Eg.copy(c).invert(),ds.copy(t.ray).applyMatrix4(Eg),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const y=S[A],g=h[y.materialIndex],B=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,G=P;D<G;D+=3){const k=d.getX(D),I=d.getX(D+1),Z=d.getX(D+2);l=pu(this,g,t,s,m,_,v,k,I,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=A,g=C;y<g;y+=3){const B=d.getX(y),P=d.getX(y+1),D=d.getX(y+2);l=pu(this,h,t,s,m,_,v,B,P,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const y=S[A],g=h[y.materialIndex],B=Math.max(y.start,M.start),P=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,G=P;D<G;D+=3){const k=D,I=D+1,Z=D+2;l=pu(this,g,t,s,m,_,v,k,I,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=A,g=C;y<g;y+=3){const B=y,P=y+1,D=y+2;l=pu(this,h,t,s,m,_,v,B,P,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function uy(o,t,i,s,l,c,h,d){let p;if(t.side===kn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,t.side===Xa,d),p===null)return null;du.copy(d),du.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(du);return m<i.near||m>i.far?null:{distance:m,point:du.clone(),object:o}}function pu(o,t,i,s,l,c,h,d,p,m){o.getVertexPosition(d,uu),o.getVertexPosition(p,cu),o.getVertexPosition(m,fu);const _=uy(o,t,i,s,uu,cu,fu,bg);if(_){const v=new tt;vi.getBarycoord(bg,uu,cu,fu,v),l&&(_.uv=vi.getInterpolatedAttribute(l,d,p,m,v,new ae)),c&&(_.uv1=vi.getInterpolatedAttribute(c,d,p,m,v,new ae)),h&&(_.normal=vi.getInterpolatedAttribute(h,d,p,m,v,new tt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new tt,materialIndex:0};vi.getNormal(uu,cu,fu,S.normal),_.face=S,_.barycoord=v}return _}class Dr extends Cs{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],v=[];let S=0,M=0;A("z","y","x",-1,-1,s,i,t,h,c,0),A("z","y","x",1,-1,s,i,-t,h,c,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Es(m,3)),this.setAttribute("normal",new Es(_,3)),this.setAttribute("uv",new Es(v,2));function A(C,y,g,B,P,D,G,k,I,Z,w){const R=D/I,H=G/Z,ct=D/2,lt=G/2,rt=k/2,it=I+1,L=Z+1;let X=0,W=0;const mt=new tt;for(let U=0;U<L;U++){const $=U*H-lt;for(let St=0;St<it;St++){const yt=St*R-ct;mt[C]=yt*B,mt[y]=$*P,mt[g]=rt,m.push(mt.x,mt.y,mt.z),mt[C]=0,mt[y]=0,mt[g]=k>0?1:-1,_.push(mt.x,mt.y,mt.z),v.push(St/I),v.push(1-U/Z),X+=1}}for(let U=0;U<Z;U++)for(let $=0;$<I;$++){const St=S+$+it*U,yt=S+$+it*(U+1),Q=S+($+1)+it*(U+1),_t=S+($+1)+it*U;p.push(St,yt,_t),p.push(yt,Q,_t),W+=6}d.addGroup(M,W,w),M+=W,S+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const s=wr(o[i]);for(const l in s)t[l]=s[l]}return t}function cy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function R0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const fy={clone:wr,merge:Nn};var hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=cy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class C0 extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new tt,Ag=new ae,Rg=new ae;class fi extends C0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,Ag,Rg),i.subVectors(Rg,Ag)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,vr=1;class py extends Un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(gr,vr,t,i);l.layers=this.layers,this.add(l);const c=new fi(gr,vr,t,i);c.layers=this.layers,this.add(c);const h=new fi(gr,vr,t,i);h.layers=this.layers,this.add(h);const d=new fi(gr,vr,t,i);d.layers=this.layers,this.add(d);const p=new fi(gr,vr,t,i);p.layers=this.layers,this.add(p);const m=new fi(gr,vr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Cu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,S,M),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class w0 extends Xn{constructor(t=[],i=Ar,s,l,c,h,d,p,m,_){super(t,i,s,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class my extends As{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new w0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Dr(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Va});c.uniforms.tEquirect.value=i;const h=new Pn(l,c),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=wi),new py(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Lo extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),g=this._getHandJoint(m,C);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=_.position.distanceTo(v.position),M=.02,A=.005;m.inputState.pinching&&S>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Lo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class gy extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ch=new tt,vy=new tt,Sy=new re;class Ha{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=ch.subVectors(s,i).cross(vy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(ch),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Sy.getNormalMatrix(t),l=this.coplanarPoint(ch).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new _d,mu=new tt;class Sd{constructor(t=new Ha,i=new Ha,s=new Ha,l=new Ha,c=new Ha,h=new Ha){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ra){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],v=l[6],S=l[7],M=l[8],A=l[9],C=l[10],y=l[11],g=l[12],B=l[13],P=l[14],D=l[15];if(s[0].setComponents(p-c,S-m,y-M,D-g).normalize(),s[1].setComponents(p+c,S+m,y+M,D+g).normalize(),s[2].setComponents(p+h,S+_,y+A,D+B).normalize(),s[3].setComponents(p-h,S-_,y-A,D-B).normalize(),s[4].setComponents(p-d,S-v,y-C,D-P).normalize(),i===ra)s[5].setComponents(p+d,S+v,y+C,D+P).normalize();else if(i===Cu)s[5].setComponents(d,v,C,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mu.x=l.normal.x>0?t.max.x:t.min.x,mu.y=l.normal.y>0?t.max.y:t.min.y,mu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(mu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D0 extends Xn{constructor(t,i,s=Ts,l,c,h,d=xi,p=xi,m,_=Bo,v=1){if(_!==Bo&&_!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,c,h,d,p,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Uu extends Cs{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,v=t/d,S=i/p,M=[],A=[],C=[],y=[];for(let g=0;g<_;g++){const B=g*S-h;for(let P=0;P<m;P++){const D=P*v-c;A.push(D,-B,0),C.push(0,0,1),y.push(P/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let B=0;B<d;B++){const P=B+m*g,D=B+m*(g+1),G=B+1+m*(g+1),k=B+1+m*g;M.push(P,D,k),M.push(D,G,k)}this.setIndex(M),this.setAttribute("position",new Es(A,3)),this.setAttribute("normal",new Es(C,3)),this.setAttribute("uv",new Es(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ri extends Go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xy extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yy extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class U0 extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const fh=new Ye,Cg=new tt,wg=new tt;class My{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sd,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Cg.setFromMatrixPosition(t.matrixWorld),i.position.copy(Cg),wg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(wg),i.updateMatrixWorld(),fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class L0 extends C0{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ey extends My{constructor(){super(new L0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ty extends U0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new Ey}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class by extends U0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ay extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Dg=new Ye;class Ry{constructor(t,i,s=0,l=1/0){this.ray=new gd(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Dg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dg),this}intersectObject(t,i=!0,s=[]){return sd(t,this,s,i),s.sort(Ug),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)sd(t[l],this,s,i);return s.sort(Ug),s}}function Ug(o,t){return o.distance-t.distance}function sd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)sd(c[h],t,i,!0)}}class Lg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cy extends Rs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ng(o,t,i,s){const l=wy(s);switch(i){case p0:return o*t;case _0:return o*t/l.components*l.byteLength;case hd:return o*t/l.components*l.byteLength;case g0:return o*t*2/l.components*l.byteLength;case dd:return o*t*2/l.components*l.byteLength;case m0:return o*t*3/l.components*l.byteLength;case Si:return o*t*4/l.components*l.byteLength;case pd:return o*t*4/l.components*l.byteLength;case xu:case yu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mu:case Eu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Ph:return Math.max(o,16)*Math.max(t,8)/4;case Lh:case Oh:return Math.max(o,8)*Math.max(t,8)/2;case Bh:case zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tu:case $h:case td:return Math.ceil(o/4)*Math.ceil(t/4)*16;case v0:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wy(o){switch(o){case Ui:case f0:return{byteLength:1,components:1};case Oo:case h0:case Io:return{byteLength:2,components:1};case cd:case fd:return{byteLength:2,components:4};case Ts:case ud:case sa:return{byteLength:4,components:1};case d0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Dy(o){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,v=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const _=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,_);else{v.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<v.length;M++){const A=v[S],C=v[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,v[S]=C)}v.length=S+1;for(let M=0,A=v.length;M<A;M++){const C=v[M];o.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
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
#endif`,Ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
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
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
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
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
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
#endif`,Wy=`#ifdef USE_BUMPMAP
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tM=`#define PI 3.141592653589793
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
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nM=`vec3 transformedNormal = objectNormal;
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
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
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
}`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
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
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
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
#endif`,wM=`struct PhysicalMaterial {
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
}`,DM=`
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HM=`#if defined( USE_POINTS_UV )
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
#endif`,GM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$M=`#ifdef USE_NORMALMAP
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
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mE=`float getShadowMask() {
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
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
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
}`,zE=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IE=`#define DISTANCE
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
}`,FE=`#define DISTANCE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
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
}`,kE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,WE=`uniform vec3 diffuse;
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
}`,qE=`#define LAMBERT
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
}`,YE=`#define LAMBERT
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
}`,jE=`#define MATCAP
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
}`,ZE=`#define MATCAP
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
}`,KE=`#define NORMAL
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
}`,QE=`#define NORMAL
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
}`,JE=`#define PHONG
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
}`,$E=`#define PHONG
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
}`,tT=`#define STANDARD
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
}`,eT=`#define STANDARD
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
}`,nT=`#define TOON
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
}`,iT=`#define TOON
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
}`,aT=`uniform float size;
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
}`,sT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,oT=`uniform vec3 color;
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
}`,lT=`uniform float rotation;
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
}`,uT=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Uy,alphahash_pars_fragment:Ly,alphamap_fragment:Ny,alphamap_pars_fragment:Oy,alphatest_fragment:Py,alphatest_pars_fragment:By,aomap_fragment:zy,aomap_pars_fragment:Iy,batching_pars_vertex:Fy,batching_vertex:Hy,begin_vertex:Gy,beginnormal_vertex:Vy,bsdfs:ky,iridescence_fragment:Xy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:Yy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Zy,color_fragment:Ky,color_pars_fragment:Qy,color_pars_vertex:Jy,color_vertex:$y,common:tM,cube_uv_reflection_fragment:eM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:aM,emissivemap_fragment:sM,emissivemap_pars_fragment:rM,colorspace_fragment:oM,colorspace_pars_fragment:lM,envmap_fragment:uM,envmap_common_pars_fragment:cM,envmap_pars_fragment:fM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:EM,envmap_vertex:dM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:_M,fog_pars_fragment:gM,gradientmap_pars_fragment:vM,lightmap_pars_fragment:SM,lights_lambert_fragment:xM,lights_lambert_pars_fragment:yM,lights_pars_begin:MM,lights_toon_fragment:TM,lights_toon_pars_fragment:bM,lights_phong_fragment:AM,lights_phong_pars_fragment:RM,lights_physical_fragment:CM,lights_physical_pars_fragment:wM,lights_fragment_begin:DM,lights_fragment_maps:UM,lights_fragment_end:LM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:BM,map_fragment:zM,map_pars_fragment:IM,map_particle_fragment:FM,map_particle_pars_fragment:HM,metalnessmap_fragment:GM,metalnessmap_pars_fragment:VM,morphinstance_vertex:kM,morphcolor_vertex:XM,morphnormal_vertex:WM,morphtarget_pars_vertex:qM,morphtarget_vertex:YM,normal_fragment_begin:jM,normal_fragment_maps:ZM,normal_pars_fragment:KM,normal_pars_vertex:QM,normal_vertex:JM,normalmap_pars_fragment:$M,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:aE,packing:sE,premultiplied_alpha_fragment:rE,project_vertex:oE,dithering_fragment:lE,dithering_pars_fragment:uE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:dE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:_E,skinning_pars_vertex:gE,skinning_vertex:vE,skinnormal_vertex:SE,specularmap_fragment:xE,specularmap_pars_fragment:yE,tonemapping_fragment:ME,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:bE,uv_pars_fragment:AE,uv_pars_vertex:RE,uv_vertex:CE,worldpos_vertex:wE,background_vert:DE,background_frag:UE,backgroundCube_vert:LE,backgroundCube_frag:NE,cube_vert:OE,cube_frag:PE,depth_vert:BE,depth_frag:zE,distanceRGBA_vert:IE,distanceRGBA_frag:FE,equirect_vert:HE,equirect_frag:GE,linedashed_vert:VE,linedashed_frag:kE,meshbasic_vert:XE,meshbasic_frag:WE,meshlambert_vert:qE,meshlambert_frag:YE,meshmatcap_vert:jE,meshmatcap_frag:ZE,meshnormal_vert:KE,meshnormal_frag:QE,meshphong_vert:JE,meshphong_frag:$E,meshphysical_vert:tT,meshphysical_frag:eT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:aT,points_frag:sT,shadow_vert:rT,shadow_frag:oT,sprite_vert:lT,sprite_frag:uT},Lt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const _u={r:0,b:0,g:0},ms=new Li,cT=new Ye;function fT(o,t,i,s,l,c,h){const d=new Ae(0);let p=c===!0?0:1,m,_,v=null,S=0,M=null;function A(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?i:t).get(D)),D}function C(P){let D=!1;const G=A(P);G===null?g(d,p):G&&G.isColor&&(g(G,1),D=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,D){const G=A(D);G&&(G.isCubeTexture||G.mapping===Du)?(_===void 0&&(_=new Pn(new Dr(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:wr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ms.copy(D.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(ms)),_.material.toneMapped=be.getTransfer(G.colorSpace)!==Be,(v!==G||S!==G.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=G,S=G.version,M=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Pn(new Uu(2,2),new Wa({name:"BackgroundMaterial",uniforms:wr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=be.getTransfer(G.colorSpace)!==Be,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||S!==G.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,v=G,S=G.version,M=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function g(P,D){P.getRGB(_u,R0(o)),s.buffers.color.setClear(_u.r,_u.g,_u.b,D,h)}function B(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,g(d,p)},render:C,addToRenderList:y,dispose:B}}function hT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(R,H,ct,lt,rt){let it=!1;const L=v(lt,ct,H);c!==L&&(c=L,m(c.object)),it=M(R,lt,ct,rt),it&&A(R,lt,ct,rt),rt!==null&&t.update(rt,o.ELEMENT_ARRAY_BUFFER),(it||h)&&(h=!1,D(R,H,ct,lt),rt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function v(R,H,ct){const lt=ct.wireframe===!0;let rt=s[R.id];rt===void 0&&(rt={},s[R.id]=rt);let it=rt[H.id];it===void 0&&(it={},rt[H.id]=it);let L=it[lt];return L===void 0&&(L=S(p()),it[lt]=L),L}function S(R){const H=[],ct=[],lt=[];for(let rt=0;rt<i;rt++)H[rt]=0,ct[rt]=0,lt[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:lt,object:R,attributes:{},index:null}}function M(R,H,ct,lt){const rt=c.attributes,it=H.attributes;let L=0;const X=ct.getAttributes();for(const W in X)if(X[W].location>=0){const U=rt[W];let $=it[W];if($===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;L++}return c.attributesNum!==L||c.index!==lt}function A(R,H,ct,lt){const rt={},it=H.attributes;let L=0;const X=ct.getAttributes();for(const W in X)if(X[W].location>=0){let U=it[W];U===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),rt[W]=$,L++}c.attributes=rt,c.attributesNum=L,c.index=lt}function C(){const R=c.newAttributes;for(let H=0,ct=R.length;H<ct;H++)R[H]=0}function y(R){g(R,0)}function g(R,H){const ct=c.newAttributes,lt=c.enabledAttributes,rt=c.attributeDivisors;ct[R]=1,lt[R]===0&&(o.enableVertexAttribArray(R),lt[R]=1),rt[R]!==H&&(o.vertexAttribDivisor(R,H),rt[R]=H)}function B(){const R=c.newAttributes,H=c.enabledAttributes;for(let ct=0,lt=H.length;ct<lt;ct++)H[ct]!==R[ct]&&(o.disableVertexAttribArray(ct),H[ct]=0)}function P(R,H,ct,lt,rt,it,L){L===!0?o.vertexAttribIPointer(R,H,ct,rt,it):o.vertexAttribPointer(R,H,ct,lt,rt,it)}function D(R,H,ct,lt){C();const rt=lt.attributes,it=ct.getAttributes(),L=H.defaultAttributeValues;for(const X in it){const W=it[X];if(W.location>=0){let mt=rt[X];if(mt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),mt!==void 0){const U=mt.normalized,$=mt.itemSize,St=t.get(mt);if(St===void 0)continue;const yt=St.buffer,Q=St.type,_t=St.bytesPerElement,Mt=Q===o.INT||Q===o.UNSIGNED_INT||mt.gpuType===ud;if(mt.isInterleavedBufferAttribute){const At=mt.data,Ct=At.stride,oe=mt.offset;if(At.isInstancedInterleavedBuffer){for(let Kt=0;Kt<W.locationSize;Kt++)g(W.location+Kt,At.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Kt=0;Kt<W.locationSize;Kt++)y(W.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Kt=0;Kt<W.locationSize;Kt++)P(W.location+Kt,$/W.locationSize,Q,U,Ct*_t,(oe+$/W.locationSize*Kt)*_t,Mt)}else{if(mt.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)g(W.location+At,mt.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let At=0;At<W.locationSize;At++)y(W.location+At);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let At=0;At<W.locationSize;At++)P(W.location+At,$/W.locationSize,Q,U,$*_t,$/W.locationSize*At*_t,Mt)}}else if(L!==void 0){const U=L[X];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(W.location,U);break;case 3:o.vertexAttrib3fv(W.location,U);break;case 4:o.vertexAttrib4fv(W.location,U);break;default:o.vertexAttrib1fv(W.location,U)}}}}B()}function G(){Z();for(const R in s){const H=s[R];for(const ct in H){const lt=H[ct];for(const rt in lt)_(lt[rt].object),delete lt[rt];delete H[ct]}delete s[R]}}function k(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const ct in H){const lt=H[ct];for(const rt in lt)_(lt[rt].object),delete lt[rt];delete H[ct]}delete s[R.id]}function I(R){for(const H in s){const ct=s[H];if(ct[R.id]===void 0)continue;const lt=ct[R.id];for(const rt in lt)_(lt[rt].object),delete lt[rt];delete ct[R.id]}}function Z(){w(),h=!0,c!==l&&(c=l,m(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:B}}function dT(o,t,i){let s;function l(m){s=m}function c(m,_){o.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,v){v!==0&&(o.drawArraysInstanced(s,m,_,v),i.update(_,s,v))}function d(m,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,v);let M=0;for(let A=0;A<v;A++)M+=_[A];i.update(M,s,1)}function p(m,_,v,S){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<m.length;A++)h(m[A],_[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,_,0,S,0,v);let A=0;for(let C=0;C<v;C++)A+=_[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function pT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Si&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===Io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ui&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==sa&&!Z)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=A>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:B,maxVaryings:P,maxFragmentUniforms:D,vertexTextures:G,maxSamples:k}}function mT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ha,d=new re,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||s!==0||l;return l=S,s=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,M){const A=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||A===null||A.length===0||c&&!y)c?_(null):m();else{const B=c?0:s,P=B*4;let D=g.clippingState||null;p.value=D,D=_(A,S,P,M);for(let G=0;G!==P;++G)D[G]=i[G];g.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,S,M,A){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=p.value,A!==!0||y===null){const g=M+C*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<g)&&(y=new Float32Array(g));for(let P=0,D=M;P!==C;++P,D+=4)h.copy(v[P]).applyMatrix4(B,d),h.normal.toArray(y,D),y[D+3]=h.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function _T(o){let t=new WeakMap;function i(h,d){return d===Ch?h.mapping=Ar:d===wh&&(h.mapping=Rr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new my(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const yr=4,Og=[.125,.215,.35,.446,.526,.582],Ss=20,hh=new L0,Pg=new Ae;let dh=null,ph=0,mh=0,_h=!1;const gs=(1+Math.sqrt(5))/2,Sr=1/gs,Bg=[new tt(-gs,Sr,0),new tt(gs,Sr,0),new tt(-Sr,0,gs),new tt(Sr,0,gs),new tt(0,gs,-Sr),new tt(0,gs,Sr),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],gT=new tt;class zg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=gT}=c;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=_h,t.scissorTest=!1,gu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ar||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Io,format:Si,colorSpace:Cr,depthBuffer:!1},l=Ig(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ig(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vT(c)),this._blurMaterial=ST(c,t,i)}return l}_compileMaterial(t){const i=new Pn(this._lodPlanes[0],t);this._renderer.compile(i,hh)}_sceneToCubeUV(t,i,s,l,c){const p=new fi(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(Pg),v.toneMapping=ka,v.autoClear=!1;const A=new T0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),C=new Pn(new Dr,A);let y=!1;const g=t.background;g?g.isColor&&(A.color.copy(g),t.background=null,y=!0):(A.color.copy(Pg),y=!0);for(let B=0;B<6;B++){const P=B%3;P===0?(p.up.set(0,m[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[B],c.y,c.z)):P===1?(p.up.set(0,0,m[B]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[B],c.z)):(p.up.set(0,m[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[B]));const D=this._cubeSize;gu(l,P*D,B>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(C,p),v.render(t,p)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=M,v.autoClear=S,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ar||t.mapping===Rr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Pn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;gu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,hh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Bg[(l-c-1)%Bg.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Pn(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ss-1),C=c/A,y=isFinite(c)?1+Math.floor(_*C):Ss;y>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ss}`);const g=[];let B=0;for(let I=0;I<Ss;++I){const Z=I/C,w=Math.exp(-Z*Z/2);g.push(w),I===0?B+=w:I<y&&(B+=2*w)}for(let I=0;I<g.length;I++)g[I]=g[I]/B;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=A,S.mipInt.value=P-s;const D=this._sizeLods[l],G=3*D*(l>P-yr?l-P+yr:0),k=4*(this._cubeSize-D);gu(i,G,k,3*D,2*D),p.setRenderTarget(i),p.render(v,hh)}}function vT(o){const t=[],i=[],s=[];let l=o;const c=o-yr+1+Og.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-yr?p=Og[h-o+yr-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,v=1+m,S=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,A=6,C=3,y=2,g=1,B=new Float32Array(C*A*M),P=new Float32Array(y*A*M),D=new Float32Array(g*A*M);for(let k=0;k<M;k++){const I=k%3*2/3-1,Z=k>2?0:-1,w=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];B.set(w,C*A*k),P.set(S,y*A*k);const R=[k,k,k,k,k,k];D.set(R,g*A*k)}const G=new Cs;G.setAttribute("position",new Di(B,C)),G.setAttribute("uv",new Di(P,y)),G.setAttribute("faceIndex",new Di(D,g)),t.push(G),l>yr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Ig(o,t,i){const s=new As(o,t,i);return s.texture.mapping=Du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gu(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function ST(o,t,i){const s=new Float32Array(Ss),l=new tt(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Fg(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Hg(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function xd(){return`

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
	`}function xT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ch||p===wh,_=p===Ar||p===Rr;if(m||_){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new zg(o)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new zg(o)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function yT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Er("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function MT(o,t,i,s){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(v){const S=v.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function m(v){const S=[],M=v.index,A=v.attributes.position;let C=0;if(M!==null){const B=M.array;C=M.version;for(let P=0,D=B.length;P<D;P+=3){const G=B[P+0],k=B[P+1],I=B[P+2];S.push(G,k,k,I,I,G)}}else if(A!==void 0){const B=A.array;C=A.version;for(let P=0,D=B.length/3-1;P<D;P+=3){const G=P+0,k=P+1,I=P+2;S.push(G,k,k,I,I,G)}}else return;const y=new(y0(S)?A0:b0)(S,1);y.version=C;const g=c.get(v);g&&t.remove(g),c.set(v,y)}function _(v){const S=c.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function ET(o,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function p(S,M){o.drawElements(s,M,c,S*h),i.update(M,s,1)}function m(S,M,A){A!==0&&(o.drawElementsInstanced(s,M,c,S*h,A),i.update(M,s,A))}function _(S,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,A);let y=0;for(let g=0;g<A;g++)y+=M[g];i.update(y,s,1)}function v(S,M,A,C){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<S.length;g++)m(S[g]/h,M[g],C[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,C,0,A);let g=0;for(let B=0;B<A;B++)g+=M[B]*C[B];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function TT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function bT(o,t,i){const s=new WeakMap,l=new Qe;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let R=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let G=d.attributes.position.count*D,k=1;G>t.maxTextureSize&&(k=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const I=new Float32Array(G*k*4*v),Z=new M0(I,G,k,v);Z.type=sa,Z.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const ct=g[H],lt=B[H],rt=P[H],it=G*k*4*H;for(let L=0;L<ct.count;L++){const X=L*w;A===!0&&(l.fromBufferAttribute(ct,L),I[it+X+0]=l.x,I[it+X+1]=l.y,I[it+X+2]=l.z,I[it+X+3]=0),C===!0&&(l.fromBufferAttribute(lt,L),I[it+X+4]=l.x,I[it+X+5]=l.y,I[it+X+6]=l.z,I[it+X+7]=0),y===!0&&(l.fromBufferAttribute(rt,L),I[it+X+8]=l.x,I[it+X+9]=l.y,I[it+X+10]=l.z,I[it+X+11]=rt.itemSize===4?l.w:1)}}S={count:v,texture:Z,size:new ae(G,k)},s.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<m.length;y++)A+=m[y];const C=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function AT(o,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,_=p.geometry,v=t.get(p,_);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const O0=new Xn,Gg=new D0(1,1),P0=new M0,B0=new Jx,z0=new w0,Vg=[],kg=[],Xg=new Float32Array(16),Wg=new Float32Array(9),qg=new Float32Array(4);function Ur(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=Vg[l];if(c===void 0&&(c=new Float32Array(l),Vg[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function hn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Lu(o,t){let i=kg[t];i===void 0&&(i=new Int32Array(t),kg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function RT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),hn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),hn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),hn(i,t)}}function UT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;qg.set(s),o.uniformMatrix2fv(this.addr,!1,qg),hn(i,s)}}function LT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;Wg.set(s),o.uniformMatrix3fv(this.addr,!1,Wg),hn(i,s)}}function NT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;Xg.set(s),o.uniformMatrix4fv(this.addr,!1,Xg),hn(i,s)}}function OT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),hn(i,t)}}function BT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),hn(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),hn(i,t)}}function IT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function FT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),hn(i,t)}}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),hn(i,t)}}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),hn(i,t)}}function VT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Gg.compareFunction=x0,c=Gg):c=O0,i.setTexture2D(t||c,l)}function kT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||B0,l)}function XT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||z0,l)}function WT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||P0,l)}function qT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return BT;case 35669:case 35673:return zT;case 5125:return IT;case 36294:return FT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}function YT(o,t){o.uniform1fv(this.addr,t)}function jT(o,t){const i=Ur(t,this.size,2);o.uniform2fv(this.addr,i)}function ZT(o,t){const i=Ur(t,this.size,3);o.uniform3fv(this.addr,i)}function KT(o,t){const i=Ur(t,this.size,4);o.uniform4fv(this.addr,i)}function QT(o,t){const i=Ur(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function JT(o,t){const i=Ur(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $T(o,t){const i=Ur(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function tb(o,t){o.uniform1iv(this.addr,t)}function eb(o,t){o.uniform2iv(this.addr,t)}function nb(o,t){o.uniform3iv(this.addr,t)}function ib(o,t){o.uniform4iv(this.addr,t)}function ab(o,t){o.uniform1uiv(this.addr,t)}function sb(o,t){o.uniform2uiv(this.addr,t)}function rb(o,t){o.uniform3uiv(this.addr,t)}function ob(o,t){o.uniform4uiv(this.addr,t)}function lb(o,t,i){const s=this.cache,l=t.length,c=Lu(i,l);fn(s,c)||(o.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||O0,c[h])}function ub(o,t,i){const s=this.cache,l=t.length,c=Lu(i,l);fn(s,c)||(o.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||B0,c[h])}function cb(o,t,i){const s=this.cache,l=t.length,c=Lu(i,l);fn(s,c)||(o.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||z0,c[h])}function fb(o,t,i){const s=this.cache,l=t.length,c=Lu(i,l);fn(s,c)||(o.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||P0,c[h])}function hb(o){switch(o){case 5126:return YT;case 35664:return jT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return tb;case 35667:case 35671:return eb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return ab;case 36294:return sb;case 36295:return rb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return fb}}class db{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=qT(i.type)}}class pb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hb(i.type)}}class mb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function Yg(o,t){o.seq.push(t),o.map[t.id]=t}function _b(o,t,i){const s=o.name,l=s.length;for(gh.lastIndex=0;;){const c=gh.exec(s),h=gh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Yg(i,m===void 0?new db(d,o,t):new pb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new mb(d),Yg(i,v)),i=v}}}class Au{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);_b(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function jg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const gb=37297;let vb=0;function Sb(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Zg=new re;function xb(o){be._getMatrix(Zg,be.workingColorSpace,o);const t=`mat3( ${Zg.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Ru:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Kg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+Sb(o.getShaderSource(t),h)}else return l}function yb(o,t){const i=xb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Mb(o,t){let i;switch(t){case Ex:i="Linear";break;case Tx:i="Reinhard";break;case bx:i="Cineon";break;case Ax:i="ACESFilmic";break;case Cx:i="AgX";break;case wx:i="Neutral";break;case Rx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vu=new tt;function Eb(){be.getLuminanceCoefficients(vu);const o=vu.x.toFixed(4),t=vu.y.toFixed(4),i=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function bb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Ab(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function No(o){return o!==""}function Qg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(Rb,wb)}const Cb=new Map;function wb(o,t){let i=le[t];if(i===void 0){const s=Cb.get(t);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return rd(i)}const Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(o){return o.replace(Db,Ub)}function Ub(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===o0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===l0?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function Nb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ar:case Rr:t="ENVMAP_TYPE_CUBE";break;case Du:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ob(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Pb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case u0:t="ENVMAP_BLENDING_MULTIPLY";break;case yx:t="ENVMAP_BLENDING_MIX";break;case Mx:t="ENVMAP_BLENDING_ADD";break}return t}function Bb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function zb(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Lb(i),m=Nb(i),_=Ob(i),v=Pb(i),S=Bb(i),M=Tb(i),A=bb(c),C=l.createProgram();let y,g,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),g.length>0&&(g+=`
`)):(y=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?le.tonemapping_pars_fragment:"",i.toneMapping!==ka?Mb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,yb("linearToOutputTexel",i.outputColorSpace),Eb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),h=rd(h),h=Qg(h,i),h=Jg(h,i),d=rd(d),d=Qg(d,i),d=Jg(d,i),h=$g(h),d=$g(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=B+y+h,D=B+g+d,G=jg(l,l.VERTEX_SHADER,P),k=jg(l,l.FRAGMENT_SHADER,D);l.attachShader(C,G),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(H){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(C).trim(),lt=l.getShaderInfoLog(G).trim(),rt=l.getShaderInfoLog(k).trim();let it=!0,L=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,G,k);else{const X=Kg(l,G,"vertex"),W=Kg(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+X+`
`+W)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(lt===""||rt==="")&&(L=!1);L&&(H.diagnostics={runnable:it,programLog:ct,vertexShader:{log:lt,prefix:y},fragmentShader:{log:rt,prefix:g}})}l.deleteShader(G),l.deleteShader(k),Z=new Au(l,C),w=Ab(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,gb)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vb++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=k,this}let Ib=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Hb(t),i.set(t,s)),s}}class Hb{constructor(t){this.id=Ib++,this.code=t,this.usedTimes=0}}function Gb(o,t,i,s,l,c,h){const d=new vd,p=new Fb,m=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function y(w,R,H,ct,lt){const rt=ct.fog,it=lt.geometry,L=w.isMeshStandardMaterial?ct.environment:null,X=(w.isMeshStandardMaterial?i:t).get(w.envMap||L),W=X&&X.mapping===Du?X.image.height:null,mt=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const U=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,$=U!==void 0?U.length:0;let St=0;it.morphAttributes.position!==void 0&&(St=1),it.morphAttributes.normal!==void 0&&(St=2),it.morphAttributes.color!==void 0&&(St=3);let yt,Q,_t,Mt;if(mt){const Ee=Ci[mt];yt=Ee.vertexShader,Q=Ee.fragmentShader}else yt=w.vertexShader,Q=w.fragmentShader,p.update(w),_t=p.getVertexShaderID(w),Mt=p.getFragmentShaderID(w);const At=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),oe=lt.isInstancedMesh===!0,Kt=lt.isBatchedMesh===!0,Le=!!w.map,Ie=!!w.matcap,_e=!!X,z=!!w.aoMap,Sn=!!w.lightMap,ye=!!w.bumpMap,he=!!w.normalMap,Gt=!!w.displacementMap,ge=!!w.emissiveMap,Yt=!!w.metalnessMap,ie=!!w.roughnessMap,Je=w.anisotropy>0,N=w.clearcoat>0,E=w.dispersion>0,et=w.iridescence>0,ht=w.sheen>0,pt=w.transmission>0,ut=Je&&!!w.anisotropyMap,Ot=N&&!!w.clearcoatMap,Dt=N&&!!w.clearcoatNormalMap,Ht=N&&!!w.clearcoatRoughnessMap,Vt=et&&!!w.iridescenceMap,xt=et&&!!w.iridescenceThicknessMap,Pt=ht&&!!w.sheenColorMap,Wt=ht&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Rt=!!w.specularColorMap,ne=!!w.specularIntensityMap,V=pt&&!!w.transmissionMap,Ut=pt&&!!w.thicknessMap,Et=!!w.gradientMap,Bt=!!w.alphaMap,bt=w.alphaTest>0,vt=!!w.alphaHash,It=!!w.extensions;let ee=ka;w.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ee=o.toneMapping);const we={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Q,defines:w.defines,customVertexShaderID:_t,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&lt._colorsTexture!==null,instancing:oe,instancingColor:oe&&lt.instanceColor!==null,instancingMorph:oe&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Cr,alphaToCoverage:!!w.alphaToCoverage,map:Le,matcap:Ie,envMap:_e,envMapMode:_e&&X.mapping,envMapCubeUVHeight:W,aoMap:z,lightMap:Sn,bumpMap:ye,normalMap:he,displacementMap:S&&Gt,emissiveMap:ge,normalMapObjectSpace:he&&w.normalMapType===Nx,normalMapTangentSpace:he&&w.normalMapType===S0,metalnessMap:Yt,roughnessMap:ie,anisotropy:Je,anisotropyMap:ut,clearcoat:N,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ht,dispersion:E,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:xt,sheen:ht,sheenColorMap:Pt,sheenRoughnessMap:Wt,specularMap:qt,specularColorMap:Rt,specularIntensityMap:ne,transmission:pt,transmissionMap:V,thicknessMap:Ut,gradientMap:Et,opaque:w.transparent===!1&&w.blending===Mr&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:bt,alphaHash:vt,combine:w.combine,mapUv:Le&&C(w.map.channel),aoMapUv:z&&C(w.aoMap.channel),lightMapUv:Sn&&C(w.lightMap.channel),bumpMapUv:ye&&C(w.bumpMap.channel),normalMapUv:he&&C(w.normalMap.channel),displacementMapUv:Gt&&C(w.displacementMap.channel),emissiveMapUv:ge&&C(w.emissiveMap.channel),metalnessMapUv:Yt&&C(w.metalnessMap.channel),roughnessMapUv:ie&&C(w.roughnessMap.channel),anisotropyMapUv:ut&&C(w.anisotropyMap.channel),clearcoatMapUv:Ot&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&C(w.sheenRoughnessMap.channel),specularMapUv:qt&&C(w.specularMap.channel),specularColorMapUv:Rt&&C(w.specularColorMap.channel),specularIntensityMapUv:ne&&C(w.specularIntensityMap.channel),transmissionMapUv:V&&C(w.transmissionMap.channel),thicknessMapUv:Ut&&C(w.thicknessMap.channel),alphaMapUv:Bt&&C(w.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(he||Je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!it.attributes.uv&&(Le||Bt),fog:!!rt,useFog:w.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:lt.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:St,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:Le&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:ge&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===aa,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=m.has(1),we.vertexUv2s=m.has(2),we.vertexUv3s=m.has(3),m.clear(),we}function g(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(B(R,w),P(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function P(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=A[w.type];let H;if(R){const ct=Ci[R];H=fy.clone(ct.uniforms)}else H=w.uniforms;return H}function G(w,R){let H;for(let ct=0,lt=_.length;ct<lt;ct++){const rt=_[ct];if(rt.cacheKey===R){H=rt,++H.usedTimes;break}}return H===void 0&&(H=new zb(o,R,w,c),_.push(H)),H}function k(w){if(--w.usedTimes===0){const R=_.indexOf(w);_[R]=_[_.length-1],_.pop(),w.destroy()}}function I(w){p.remove(w)}function Z(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:G,releaseProgram:k,releaseShaderCache:I,programs:_,dispose:Z}}function Vb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function kb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function e0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function n0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v,S,M,A,C,y){let g=o[t];return g===void 0?(g={id:v.id,object:v,geometry:S,material:M,groupOrder:A,renderOrder:v.renderOrder,z:C,group:y},o[t]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=M,g.groupOrder=A,g.renderOrder=v.renderOrder,g.z=C,g.group=y),t++,g}function d(v,S,M,A,C,y){const g=h(v,S,M,A,C,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function p(v,S,M,A,C,y){const g=h(v,S,M,A,C,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function m(v,S){i.length>1&&i.sort(v||kb),s.length>1&&s.sort(S||e0),l.length>1&&l.sort(S||e0)}function _(){for(let v=t,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function Xb(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new n0,o.set(s,[h])):l>=c.length?(h=new n0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Wb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new Ae};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function qb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Yb=0;function jb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Zb(o){const t=new Wb,i=qb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new tt);const l=new tt,c=new Ye,h=new Ye;function d(m){let _=0,v=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,A=0,C=0,y=0,g=0,B=0,P=0,D=0,G=0,k=0,I=0;m.sort(jb);for(let w=0,R=m.length;w<R;w++){const H=m[w],ct=H.color,lt=H.intensity,rt=H.distance,it=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=ct.r*lt,v+=ct.g*lt,S+=ct.b*lt;else if(H.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(H.sh.coefficients[L],lt);I++}else if(H.isDirectionalLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,W=i.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=it,s.directionalShadowMatrix[M]=H.shadow.matrix,B++}s.directional[M]=L,M++}else if(H.isSpotLight){const L=t.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(ct).multiplyScalar(lt),L.distance=rt,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,s.spot[C]=L;const X=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,X.updateMatrices(H),H.castShadow&&k++),s.spotLightMatrix[C]=X.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,s.spotShadow[C]=W,s.spotShadowMap[C]=it,D++}C++}else if(H.isRectAreaLight){const L=t.get(H);L.color.copy(ct).multiplyScalar(lt),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=L,y++}else if(H.isPointLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const X=H.shadow,W=i.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,s.pointShadow[A]=W,s.pointShadowMap[A]=it,s.pointShadowMatrix[A]=H.shadow.matrix,P++}s.point[A]=L,A++}else if(H.isHemisphereLight){const L=t.get(H);L.skyColor.copy(H.color).multiplyScalar(lt),L.groundColor.copy(H.groundColor).multiplyScalar(lt),s.hemi[g]=L,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const Z=s.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==C||Z.rectAreaLength!==y||Z.hemiLength!==g||Z.numDirectionalShadows!==B||Z.numPointShadows!==P||Z.numSpotShadows!==D||Z.numSpotMaps!==G||Z.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=A,s.hemi.length=g,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=D+G-k,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=I,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=C,Z.rectAreaLength=y,Z.hemiLength=g,Z.numDirectionalShadows=B,Z.numPointShadows=P,Z.numSpotShadows=D,Z.numSpotMaps=G,Z.numLightProbes=I,s.version=Yb++)}function p(m,_){let v=0,S=0,M=0,A=0,C=0;const y=_.matrixWorldInverse;for(let g=0,B=m.length;g<B;g++){const P=m[g];if(P.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(P.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(P.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:d,setupView:p,state:s}}function i0(o){const t=new Zb(o),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function Kb(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new i0(o),t.set(l,[d])):c>=h.length?(d=new i0(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
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
}`;function $b(o,t,i){let s=new Sd;const l=new ae,c=new ae,h=new Qe,d=new xy({depthPacking:Lx}),p=new yy,m={},_=i.maxTextureSize,v={[Xa]:kn,[kn]:Xa,[aa]:aa},S=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Qb,fragmentShader:Jb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Cs;A.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Pn(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o0;let g=this.type;this.render=function(k,I,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Va),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const lt=g!==ia&&this.type===ia,rt=g===ia&&this.type!==ia;for(let it=0,L=k.length;it<L;it++){const X=k[it],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const mt=W.getFrameExtents();if(l.multiply(mt),c.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/mt.x),l.x=c.x*mt.x,W.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/mt.y),l.y=c.y*mt.y,W.mapSize.y=c.y)),W.map===null||lt===!0||rt===!0){const $=this.type!==ia?{minFilter:xi,magFilter:xi}:{};W.map!==null&&W.map.dispose(),W.map=new As(l.x,l.y,$),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const U=W.getViewportCount();for(let $=0;$<U;$++){const St=W.getViewport($);h.set(c.x*St.x,c.y*St.y,c.x*St.z,c.y*St.w),ct.viewport(h),W.updateMatrices(X,$),s=W.getFrustum(),D(I,Z,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===ia&&B(W,Z),W.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,H)};function B(k,I){const Z=t.update(C);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new As(l.x,l.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,Z,S,C,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,Z,M,C,null)}function P(k,I,Z,w){let R=null;const H=Z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(H!==void 0)R=H;else if(R=Z.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ct=R.uuid,lt=I.uuid;let rt=m[ct];rt===void 0&&(rt={},m[ct]=rt);let it=rt[lt];it===void 0&&(it=R.clone(),rt[lt]=it,I.addEventListener("dispose",G)),R=it}if(R.visible=I.visible,R.wireframe=I.wireframe,w===ia?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ct=o.properties.get(R);ct.light=Z}return R}function D(k,I,Z,w,R){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===ia)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,k.matrixWorld);const lt=t.update(k),rt=k.material;if(Array.isArray(rt)){const it=lt.groups;for(let L=0,X=it.length;L<X;L++){const W=it[L],mt=rt[W.materialIndex];if(mt&&mt.visible){const U=P(k,mt,w,R);k.onBeforeShadow(o,k,I,Z,lt,U,W),o.renderBufferDirect(Z,null,lt,U,k,W),k.onAfterShadow(o,k,I,Z,lt,U,W)}}}else if(rt.visible){const it=P(k,rt,w,R);k.onBeforeShadow(o,k,I,Z,lt,it,null),o.renderBufferDirect(Z,null,lt,it,k,null),k.onAfterShadow(o,k,I,Z,lt,it,null)}}const ct=k.children;for(let lt=0,rt=ct.length;lt<rt;lt++)D(ct[lt],I,Z,w,R)}function G(k){k.target.removeEventListener("dispose",G);for(const Z in m){const w=m[Z],R=k.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const tA={[yh]:Mh,[Eh]:Ah,[Th]:Rh,[br]:bh,[Mh]:yh,[Ah]:Eh,[Rh]:Th,[bh]:br};function eA(o,t){function i(){let V=!1;const Ut=new Qe;let Et=null;const Bt=new Qe(0,0,0,0);return{setMask:function(bt){Et!==bt&&!V&&(o.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){V=bt},setClear:function(bt,vt,It,ee,we){we===!0&&(bt*=ee,vt*=ee,It*=ee),Ut.set(bt,vt,It,ee),Bt.equals(Ut)===!1&&(o.clearColor(bt,vt,It,ee),Bt.copy(Ut))},reset:function(){V=!1,Et=null,Bt.set(-1,0,0,0)}}}function s(){let V=!1,Ut=!1,Et=null,Bt=null,bt=null;return{setReversed:function(vt){if(Ut!==vt){const It=t.get("EXT_clip_control");vt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ut=vt;const ee=bt;bt=null,this.setClear(ee)}},getReversed:function(){return Ut},setTest:function(vt){vt?At(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(vt){Et!==vt&&!V&&(o.depthMask(vt),Et=vt)},setFunc:function(vt){if(Ut&&(vt=tA[vt]),Bt!==vt){switch(vt){case yh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case Eh:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Th:o.depthFunc(o.EQUAL);break;case bh:o.depthFunc(o.GEQUAL);break;case Ah:o.depthFunc(o.GREATER);break;case Rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=vt}},setLocked:function(vt){V=vt},setClear:function(vt){bt!==vt&&(Ut&&(vt=1-vt),o.clearDepth(vt),bt=vt)},reset:function(){V=!1,Et=null,Bt=null,bt=null,Ut=!1}}}function l(){let V=!1,Ut=null,Et=null,Bt=null,bt=null,vt=null,It=null,ee=null,we=null;return{setTest:function(Ee){V||(Ee?At(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!V&&(o.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,Wn,dn){(Et!==Ee||Bt!==Wn||bt!==dn)&&(o.stencilFunc(Ee,Wn,dn),Et=Ee,Bt=Wn,bt=dn)},setOp:function(Ee,Wn,dn){(vt!==Ee||It!==Wn||ee!==dn)&&(o.stencilOp(Ee,Wn,dn),vt=Ee,It=Wn,ee=dn)},setLocked:function(Ee){V=Ee},setClear:function(Ee){we!==Ee&&(o.clearStencil(Ee),we=Ee)},reset:function(){V=!1,Ut=null,Et=null,Bt=null,bt=null,vt=null,It=null,ee=null,we=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},v={},S=new WeakMap,M=[],A=null,C=!1,y=null,g=null,B=null,P=null,D=null,G=null,k=null,I=new Ae(0,0,0),Z=0,w=!1,R=null,H=null,ct=null,lt=null,rt=null;const it=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,X=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),L=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),L=X>=2);let mt=null,U={};const $=o.getParameter(o.SCISSOR_BOX),St=o.getParameter(o.VIEWPORT),yt=new Qe().fromArray($),Q=new Qe().fromArray(St);function _t(V,Ut,Et,Bt){const bt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(V,vt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Et;It++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ut+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return vt}const Mt={};Mt[o.TEXTURE_2D]=_t(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=_t(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=_t(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=_t(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(br),ye(!1),he(ag),At(o.CULL_FACE),z(Va);function At(V){_[V]!==!0&&(o.enable(V),_[V]=!0)}function Ct(V){_[V]!==!1&&(o.disable(V),_[V]=!1)}function oe(V,Ut){return v[V]!==Ut?(o.bindFramebuffer(V,Ut),v[V]=Ut,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(V,Ut){let Et=M,Bt=!1;if(V){Et=S.get(Ut),Et===void 0&&(Et=[],S.set(Ut,Et));const bt=V.textures;if(Et.length!==bt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,It=bt.length;vt<It;vt++)Et[vt]=o.COLOR_ATTACHMENT0+vt;Et.length=bt.length,Bt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Et)}function Le(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const Ie={[vs]:o.FUNC_ADD,[ax]:o.FUNC_SUBTRACT,[sx]:o.FUNC_REVERSE_SUBTRACT};Ie[rx]=o.MIN,Ie[ox]=o.MAX;const _e={[lx]:o.ZERO,[ux]:o.ONE,[cx]:o.SRC_COLOR,[Sh]:o.SRC_ALPHA,[_x]:o.SRC_ALPHA_SATURATE,[px]:o.DST_COLOR,[hx]:o.DST_ALPHA,[fx]:o.ONE_MINUS_SRC_COLOR,[xh]:o.ONE_MINUS_SRC_ALPHA,[mx]:o.ONE_MINUS_DST_COLOR,[dx]:o.ONE_MINUS_DST_ALPHA,[gx]:o.CONSTANT_COLOR,[vx]:o.ONE_MINUS_CONSTANT_COLOR,[Sx]:o.CONSTANT_ALPHA,[xx]:o.ONE_MINUS_CONSTANT_ALPHA};function z(V,Ut,Et,Bt,bt,vt,It,ee,we,Ee){if(V===Va){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(At(o.BLEND),C=!0),V!==ix){if(V!==y||Ee!==w){if((g!==vs||D!==vs)&&(o.blendEquation(o.FUNC_ADD),g=vs,D=vs),Ee)switch(V){case Mr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sg:o.blendFunc(o.ONE,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case og:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Mr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case og:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}B=null,P=null,G=null,k=null,I.set(0,0,0),Z=0,y=V,w=Ee}return}bt=bt||Ut,vt=vt||Et,It=It||Bt,(Ut!==g||bt!==D)&&(o.blendEquationSeparate(Ie[Ut],Ie[bt]),g=Ut,D=bt),(Et!==B||Bt!==P||vt!==G||It!==k)&&(o.blendFuncSeparate(_e[Et],_e[Bt],_e[vt],_e[It]),B=Et,P=Bt,G=vt,k=It),(ee.equals(I)===!1||we!==Z)&&(o.blendColor(ee.r,ee.g,ee.b,we),I.copy(ee),Z=we),y=V,w=!1}function Sn(V,Ut){V.side===aa?Ct(o.CULL_FACE):At(o.CULL_FACE);let Et=V.side===kn;Ut&&(Et=!Et),ye(Et),V.blending===Mr&&V.transparent===!1?z(Va):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Bt=V.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function he(V){V!==ex?(At(o.CULL_FACE),V!==H&&(V===ag?o.cullFace(o.BACK):V===nx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),H=V}function Gt(V){V!==ct&&(L&&o.lineWidth(V),ct=V)}function ge(V,Ut,Et){V?(At(o.POLYGON_OFFSET_FILL),(lt!==Ut||rt!==Et)&&(o.polygonOffset(Ut,Et),lt=Ut,rt=Et)):Ct(o.POLYGON_OFFSET_FILL)}function Yt(V){V?At(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function ie(V){V===void 0&&(V=o.TEXTURE0+it-1),mt!==V&&(o.activeTexture(V),mt=V)}function Je(V,Ut,Et){Et===void 0&&(mt===null?Et=o.TEXTURE0+it-1:Et=mt);let Bt=U[Et];Bt===void 0&&(Bt={type:void 0,texture:void 0},U[Et]=Bt),(Bt.type!==V||Bt.texture!==Ut)&&(mt!==Et&&(o.activeTexture(Et),mt=Et),o.bindTexture(V,Ut||Mt[V]),Bt.type=V,Bt.texture=Ut)}function N(){const V=U[mt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(V){yt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),yt.copy(V))}function Wt(V){Q.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function qt(V,Ut){let Et=m.get(Ut);Et===void 0&&(Et=new WeakMap,m.set(Ut,Et));let Bt=Et.get(V);Bt===void 0&&(Bt=o.getUniformBlockIndex(Ut,V.name),Et.set(V,Bt))}function Rt(V,Ut){const Bt=m.get(Ut).get(V);p.get(Ut)!==Bt&&(o.uniformBlockBinding(Ut,Bt,V.__bindingPointIndex),p.set(Ut,Bt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},mt=null,U={},v={},S=new WeakMap,M=[],A=null,C=!1,y=null,g=null,B=null,P=null,D=null,G=null,k=null,I=new Ae(0,0,0),Z=0,w=!1,R=null,H=null,ct=null,lt=null,rt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:At,disable:Ct,bindFramebuffer:oe,drawBuffers:Kt,useProgram:Le,setBlending:z,setMaterial:Sn,setFlipSided:ye,setCullFace:he,setLineWidth:Gt,setPolygonOffset:ge,setScissorTest:Yt,activeTexture:ie,bindTexture:Je,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Vt,texImage3D:xt,updateUBOMapping:qt,uniformBlockBinding:Rt,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:ht,texSubImage3D:pt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ot,scissor:Pt,viewport:Wt,reset:ne}}function nA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ae,_=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,E){return M?new OffscreenCanvas(N,E):wu("canvas")}function C(N,E,et){let ht=1;const pt=Je(N);if((pt.width>et||pt.height>et)&&(ht=et/Math.max(pt.width,pt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ht*pt.width),Ot=Math.floor(ht*pt.height);v===void 0&&(v=A(ut,Ot));const Dt=E?A(ut,Ot):v;return Dt.width=ut,Dt.height=Ot,Dt.getContext("2d").drawImage(N,0,0,ut,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ut+"x"+Ot+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){o.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(N,E,et,ht,pt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=E;if(E===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),et===o.UNSIGNED_INT&&(ut=o.RGB32UI),et===o.BYTE&&(ut=o.RGB8I),et===o.SHORT&&(ut=o.RGB16I),et===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),et===o.UNSIGNED_INT&&(ut=o.RGBA32UI),et===o.BYTE&&(ut=o.RGBA8I),et===o.SHORT&&(ut=o.RGBA16I),et===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),E===o.RGBA){const Ot=pt?Ru:be.getTransfer(ht);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=Ot===Be?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(N,E){let et;return N?E===null||E===Ts||E===Po?et=o.DEPTH24_STENCIL8:E===sa?et=o.DEPTH32F_STENCIL8:E===Oo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===Po?et=o.DEPTH_COMPONENT24:E===sa?et=o.DEPTH_COMPONENT32F:E===Oo&&(et=o.DEPTH_COMPONENT16),et}function G(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==xi&&N.minFilter!==wi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function k(N){const E=N.target;E.removeEventListener("dispose",k),Z(E),E.isVideoTexture&&_.delete(E)}function I(N){const E=N.target;E.removeEventListener("dispose",I),R(E)}function Z(N){const E=s.get(N);if(E.__webglInit===void 0)return;const et=N.source,ht=S.get(et);if(ht){const pt=ht[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&w(N),Object.keys(ht).length===0&&S.delete(et)}s.remove(N)}function w(N){const E=s.get(N);o.deleteTexture(E.__webglTexture);const et=N.source,ht=S.get(et);delete ht[E.__cacheKey],h.memory.textures--}function R(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let pt=0;pt<E.__webglFramebuffer[ht].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=N.textures;for(let ht=0,pt=et.length;ht<pt;ht++){const ut=s.get(et[ht]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(et[ht])}s.remove(N)}let H=0;function ct(){H=0}function lt(){const N=H;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function rt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function it(N,E){const et=s.get(N);if(N.isVideoTexture&&Yt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,N,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function L(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function X(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function W(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){At(et,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const mt={[Dh]:o.REPEAT,[xs]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},U={[xi]:o.NEAREST,[Dx]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[Gf]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},$={[Ox]:o.NEVER,[Hx]:o.ALWAYS,[Px]:o.LESS,[x0]:o.LEQUAL,[Bx]:o.EQUAL,[Fx]:o.GEQUAL,[zx]:o.GREATER,[Ix]:o.NOTEQUAL};function St(N,E){if(E.type===sa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wi||E.magFilter===Gf||E.magFilter===Jl||E.magFilter===ys||E.minFilter===wi||E.minFilter===Gf||E.minFilter===Jl||E.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,mt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,mt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,mt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xi||E.minFilter!==Jl&&E.minFilter!==ys||E.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(N,E){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",k));const ht=E.source;let pt=S.get(ht);pt===void 0&&(pt={},S.set(ht,pt));const ut=rt(E);if(ut!==N.__cacheKey){pt[ut]===void 0&&(pt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),pt[ut].usedTimes++;const Ot=pt[N.__cacheKey];Ot!==void 0&&(pt[N.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(E)),N.__cacheKey=ut,N.__webglTexture=pt[ut].texture}return et}function Q(N,E,et){return Math.floor(Math.floor(N/et)/E)}function _t(N,E,et,ht){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ht,E.data);else{ut.sort((xt,Pt)=>xt.start-Pt.start);let Ot=0;for(let xt=1;xt<ut.length;xt++){const Pt=ut[Ot],Wt=ut[xt],qt=Pt.start+Pt.count,Rt=Q(Wt.start,E.width,4),ne=Q(Pt.start,E.width,4);Wt.start<=qt+1&&Rt===ne&&Q(Wt.start+Wt.count-1,E.width,4)===Rt?Pt.count=Math.max(Pt.count,Wt.start+Wt.count-Pt.start):(++Ot,ut[Ot]=Wt)}ut.length=Ot+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let xt=0,Pt=ut.length;xt<Pt;xt++){const Wt=ut[xt],qt=Math.floor(Wt.start/4),Rt=Math.ceil(Wt.count/4),ne=qt%E.width,V=Math.floor(qt/E.width),Ut=Rt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ne,V,Ut,Et,et,ht,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function Mt(N,E,et){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const pt=yt(N,E),ut=E.source;i.bindTexture(ht,N.__webglTexture,o.TEXTURE0+et);const Ot=s.get(ut);if(ut.version!==Ot.__version||pt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=be.getPrimaries(be.workingColorSpace),Ht=E.colorSpace===Ga?null:be.getPrimaries(E.colorSpace),Vt=E.colorSpace===Ga||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let xt=C(E.image,!1,l.maxTextureSize);xt=ie(E,xt);const Pt=c.convert(E.format,E.colorSpace),Wt=c.convert(E.type);let qt=P(E.internalFormat,Pt,Wt,E.colorSpace,E.isVideoTexture);St(ht,E);let Rt;const ne=E.mipmaps,V=E.isVideoTexture!==!0,Ut=Ot.__version===void 0||pt===!0,Et=ut.dataReady,Bt=G(E,xt);if(E.isDepthTexture)qt=D(E.format===zo,E.type),Ut&&(V?i.texStorage2D(o.TEXTURE_2D,1,qt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,null));else if(E.isDataTexture)if(ne.length>0){V&&Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,ne[0].width,ne[0].height);for(let bt=0,vt=ne.length;bt<vt;bt++)Rt=ne[bt],V?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data);E.generateMipmaps=!1}else V?(Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,xt.width,xt.height),Et&&_t(E,xt,Pt,Wt)):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,qt,ne[0].width,ne[0].height,xt.depth);for(let bt=0,vt=ne.length;bt<vt;bt++)if(Rt=ne[bt],E.format!==Si)if(Pt!==null)if(V){if(Et)if(E.layerUpdates.size>0){const It=Ng(Rt.width,Rt.height,E.format,E.type);for(const ee of E.layerUpdates){const we=Rt.data.subarray(ee*It/Rt.data.BYTES_PER_ELEMENT,(ee+1)*It/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ee,Rt.width,Rt.height,1,Pt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Rt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Wt,Rt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,xt.depth,0,Pt,Wt,Rt.data)}else{V&&Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,ne[0].width,ne[0].height);for(let bt=0,vt=ne.length;bt<vt;bt++)Rt=ne[bt],E.format!==Si?Pt!==null?V?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Rt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data)}else if(E.isDataArrayTexture)if(V){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,qt,xt.width,xt.height,xt.depth),Et)if(E.layerUpdates.size>0){const bt=Ng(xt.width,xt.height,E.format,E.type);for(const vt of E.layerUpdates){const It=xt.data.subarray(vt*bt/xt.data.BYTES_PER_ELEMENT,(vt+1)*bt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,xt.width,xt.height,1,Pt,Wt,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(E.isData3DTexture)V?(Ut&&i.texStorage3D(o.TEXTURE_3D,Bt,qt,xt.width,xt.height,xt.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(E.isFramebufferTexture){if(Ut)if(V)i.texStorage2D(o.TEXTURE_2D,Bt,qt,xt.width,xt.height);else{let bt=xt.width,vt=xt.height;for(let It=0;It<Bt;It++)i.texImage2D(o.TEXTURE_2D,It,qt,bt,vt,0,Pt,Wt,null),bt>>=1,vt>>=1}}else if(ne.length>0){if(V&&Ut){const bt=Je(ne[0]);i.texStorage2D(o.TEXTURE_2D,Bt,qt,bt.width,bt.height)}for(let bt=0,vt=ne.length;bt<vt;bt++)Rt=ne[bt],V?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt,Wt,Rt):i.texImage2D(o.TEXTURE_2D,bt,qt,Pt,Wt,Rt);E.generateMipmaps=!1}else if(V){if(Ut){const bt=Je(xt);i.texStorage2D(o.TEXTURE_2D,Bt,qt,bt.width,bt.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Wt,xt)}else i.texImage2D(o.TEXTURE_2D,0,qt,Pt,Wt,xt);y(E)&&g(ht),Ot.__version=ut.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function At(N,E,et){if(E.image.length!==6)return;const ht=yt(N,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const ut=s.get(pt);if(pt.version!==ut.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Ot=be.getPrimaries(be.workingColorSpace),Dt=E.colorSpace===Ga?null:be.getPrimaries(E.colorSpace),Ht=E.colorSpace===Ga||Ot===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let vt=0;vt<6;vt++)!Vt&&!xt?Pt[vt]=C(E.image[vt],!0,l.maxCubemapSize):Pt[vt]=xt?E.image[vt].image:E.image[vt],Pt[vt]=ie(E,Pt[vt]);const Wt=Pt[0],qt=c.convert(E.format,E.colorSpace),Rt=c.convert(E.type),ne=P(E.internalFormat,qt,Rt,E.colorSpace),V=E.isVideoTexture!==!0,Ut=ut.__version===void 0||ht===!0,Et=pt.dataReady;let Bt=G(E,Wt);St(o.TEXTURE_CUBE_MAP,E);let bt;if(Vt){V&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ne,Wt.width,Wt.height);for(let vt=0;vt<6;vt++){bt=Pt[vt].mipmaps;for(let It=0;It<bt.length;It++){const ee=bt[It];E.format!==Si?qt!==null?V?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,ee.width,ee.height,qt,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,ne,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,ee.width,ee.height,qt,Rt,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,ne,ee.width,ee.height,0,qt,Rt,ee.data)}}}else{if(bt=E.mipmaps,V&&Ut){bt.length>0&&Bt++;const vt=Je(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ne,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(xt){V?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Pt[vt].width,Pt[vt].height,qt,Rt,Pt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ne,Pt[vt].width,Pt[vt].height,0,qt,Rt,Pt[vt].data);for(let It=0;It<bt.length;It++){const we=bt[It].image[vt].image;V?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,we.width,we.height,qt,Rt,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,ne,we.width,we.height,0,qt,Rt,we.data)}}else{V?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,qt,Rt,Pt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ne,qt,Rt,Pt[vt]);for(let It=0;It<bt.length;It++){const ee=bt[It];V?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,qt,Rt,ee.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,ne,qt,Rt,ee.image[vt])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),ut.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ct(N,E,et,ht,pt,ut){const Ot=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Ht=P(et.internalFormat,Ot,Dt,et.colorSpace),Vt=s.get(E),xt=s.get(et);if(xt.__renderTarget=E,!Vt.__hasExternalTextures){const Pt=Math.max(1,E.width>>ut),Wt=Math.max(1,E.height>>ut);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,ut,Ht,Pt,Wt,E.depth,0,Ot,Dt,null):i.texImage2D(pt,ut,Ht,Pt,Wt,0,Ot,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),ge(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,pt,xt.__webglTexture,0,Gt(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,pt,xt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(N,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ht=E.depthTexture,pt=ht&&ht.isDepthTexture?ht.type:null,ut=D(E.stencilBuffer,pt),Ot=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Gt(E);ge(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,ut,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,N)}else{const ht=E.textures;for(let pt=0;pt<ht.length;pt++){const ut=ht[pt],Ot=c.convert(ut.format,ut.colorSpace),Dt=c.convert(ut.type),Ht=P(ut.internalFormat,Ot,Dt,ut.colorSpace),Vt=Gt(E);et&&ge(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Ht,E.width,E.height):ge(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Ht,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),it(E.depthTexture,0);const pt=ht.__webglTexture,ut=Gt(E);if(E.depthTexture.format===Bo)ge(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===zo)ge(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Le(N){const E=s.get(N),et=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",pt)};ht.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ht}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=N.texture.mipmaps;ht&&ht.length>0?Kt(E.__webglFramebuffer[0],N):Kt(E.__webglFramebuffer,N)}else if(et){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),oe(E.__webglDepthbuffer[ht],N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ut)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),oe(E.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ie(N,E,et){const ht=s.get(N);E!==void 0&&Ct(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Le(N)}function _e(N){const E=N.texture,et=s.get(N),ht=s.get(E);N.addEventListener("dispose",I);const pt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Ot=pt.length>1;if(Ot||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ut){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<E.mipmaps.length;Ht++)et.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Dt=0,Ht=pt.length;Dt<Ht;Dt++){const Vt=s.get(pt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&ge(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<pt.length;Dt++){const Ht=pt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Vt=c.convert(Ht.format,Ht.colorSpace),xt=c.convert(Ht.type),Pt=P(Ht.internalFormat,Vt,xt,Ht.colorSpace,N.isXRRenderTarget===!0),Wt=Gt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Pt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),St(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Dt][Ht],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else Ct(et.__webglFramebuffer[Dt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Ht=pt.length;Dt<Ht;Dt++){const Vt=pt[Dt],xt=s.get(Vt);i.bindTexture(o.TEXTURE_2D,xt.__webglTexture),St(o.TEXTURE_2D,Vt),Ct(et.__webglFramebuffer,N,Vt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),y(Vt)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ht.__webglTexture),St(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Ht],N,E,o.COLOR_ATTACHMENT0,Dt,Ht);else Ct(et.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Dt,0);y(E)&&g(Dt),i.unbindTexture()}N.depthBuffer&&Le(N)}function z(N){const E=N.textures;for(let et=0,ht=E.length;et<ht;et++){const pt=E[et];if(y(pt)){const ut=B(N),Ot=s.get(pt).__webglTexture;i.bindTexture(ut,Ot),g(ut),i.unbindTexture()}}}const Sn=[],ye=[];function he(N){if(N.samples>0){if(ge(N)===!1){const E=N.textures,et=N.width,ht=N.height;let pt=o.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=s.get(N),Dt=E.length>1;if(Dt)for(let Vt=0;Vt<E.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=N.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=s.get(E[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,pt,o.NEAREST),p===!0&&(Sn.length=0,ye.length=0,Sn.push(o.COLOR_ATTACHMENT0+Vt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Sn.push(ut),ye.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Sn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<E.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=s.get(E[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,xt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Gt(N){return Math.min(l.maxSamples,N.samples)}function ge(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(N){const E=h.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function ie(N,E){const et=N.colorSpace,ht=N.format,pt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Cr&&et!==Ga&&(be.getTransfer(et)===Be?(ht!==Si||pt!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=lt,this.resetTextureUnits=ct,this.setTexture2D=it,this.setTexture2DArray=L,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Ie,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ge}function iA(o,t){function i(s,l=Ga){let c;const h=be.getTransfer(l);if(s===Ui)return o.UNSIGNED_BYTE;if(s===cd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===fd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===d0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===f0)return o.BYTE;if(s===h0)return o.SHORT;if(s===Oo)return o.UNSIGNED_SHORT;if(s===ud)return o.INT;if(s===Ts)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===Io)return o.HALF_FLOAT;if(s===p0)return o.ALPHA;if(s===m0)return o.RGB;if(s===Si)return o.RGBA;if(s===Bo)return o.DEPTH_COMPONENT;if(s===zo)return o.DEPTH_STENCIL;if(s===_0)return o.RED;if(s===hd)return o.RED_INTEGER;if(s===g0)return o.RG;if(s===dd)return o.RG_INTEGER;if(s===pd)return o.RGBA_INTEGER;if(s===xu||s===yu||s===Mu||s===Eu)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Nh||s===Oh||s===Ph)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bh||s===zh||s===Ih)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Bh||s===zh)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ih)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Fh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tu||s===$h||s===td)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Tu)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===v0||s===ed||s===nd||s===id)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Tu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Po?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
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

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wa({vertexShader:aA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pn(new Uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends Rs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,v=null,S=null,M=null,A=null;const C=new rA,y=i.getContextAttributes();let g=null,B=null;const P=[],D=[],G=new ae;let k=null;const I=new fi;I.viewport=new Qe;const Z=new fi;Z.viewport=new Qe;const w=[I,Z],R=new Ay;let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _t=P[Q];return _t===void 0&&(_t=new uh,P[Q]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Q){let _t=P[Q];return _t===void 0&&(_t=new uh,P[Q]=_t),_t.getGripSpace()},this.getHand=function(Q){let _t=P[Q];return _t===void 0&&(_t=new uh,P[Q]=_t),_t.getHandSpace()};function lt(Q){const _t=D.indexOf(Q.inputSource);if(_t===-1)return;const Mt=P[_t];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,m||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function rt(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",rt),l.removeEventListener("inputsourceschange",it);for(let Q=0;Q<P.length;Q++){const _t=D[Q];_t!==null&&(D[Q]=null,P[Q].disconnect(_t))}H=null,ct=null,C.reset(),t.setRenderTarget(g),M=null,S=null,v=null,l=null,B=null,yt.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",rt),l.addEventListener("inputsourceschange",it),y.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,At=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?zo:Bo,At=y.stencil?Po:Ts);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:c};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new As(S.textureWidth,S.textureHeight,{format:Si,type:Ui,depthTexture:new D0(S.textureWidth,S.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new As(M.framebufferWidth,M.framebufferHeight,{format:Si,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function it(Q){for(let _t=0;_t<Q.removed.length;_t++){const Mt=Q.removed[_t],At=D.indexOf(Mt);At>=0&&(D[At]=null,P[At].disconnect(Mt))}for(let _t=0;_t<Q.added.length;_t++){const Mt=Q.added[_t];let At=D.indexOf(Mt);if(At===-1){for(let oe=0;oe<P.length;oe++)if(oe>=D.length){D.push(Mt),At=oe;break}else if(D[oe]===null){D[oe]=Mt,At=oe;break}if(At===-1)break}const Ct=P[At];Ct&&Ct.connect(Mt)}}const L=new tt,X=new tt;function W(Q,_t,Mt){L.setFromMatrixPosition(_t.matrixWorld),X.setFromMatrixPosition(Mt.matrixWorld);const At=L.distanceTo(X),Ct=_t.projectionMatrix.elements,oe=Mt.projectionMatrix.elements,Kt=Ct[14]/(Ct[10]-1),Le=Ct[14]/(Ct[10]+1),Ie=(Ct[9]+1)/Ct[5],_e=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],Sn=(oe[8]+1)/oe[0],ye=Kt*z,he=Kt*Sn,Gt=At/(-z+Sn),ge=Gt*-z;if(_t.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ge),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Yt=Kt+Gt,ie=Le+Gt,Je=ye-ge,N=he+(At-ge),E=Ie*Le/ie*Yt,et=_e*Le/ie*Yt;Q.projectionMatrix.makePerspective(Je,N,E,et,Yt,ie),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function mt(Q,_t){_t===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_t.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let _t=Q.near,Mt=Q.far;C.texture!==null&&(C.depthNear>0&&(_t=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),R.near=Z.near=I.near=_t,R.far=Z.far=I.far=Mt,(H!==R.near||ct!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,ct=R.far),I.layers.mask=Q.layers.mask|2,Z.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|Z.layers.mask;const At=Q.parent,Ct=R.cameras;mt(R,At);for(let oe=0;oe<Ct.length;oe++)mt(Ct[oe],At);Ct.length===2?W(R,I,Z):R.projectionMatrix.copy(I.projectionMatrix),U(Q,R,At)};function U(Q,_t,Mt){Mt===null?Q.matrix.copy(_t.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_t.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ad*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(Q){p=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let $=null;function St(Q,_t){if(_=_t.getViewerPose(m||h),A=_t,_!==null){const Mt=_.views;M!==null&&(t.setRenderTargetFramebuffer(B,M.framebuffer),t.setRenderTarget(B));let At=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,At=!0);for(let Kt=0;Kt<Mt.length;Kt++){const Le=Mt[Kt];let Ie=null;if(M!==null)Ie=M.getViewport(Le);else{const z=v.getViewSubImage(S,Le);Ie=z.viewport,Kt===0&&(t.setRenderTargetTextures(B,z.colorTexture,z.depthStencilTexture),t.setRenderTarget(B))}let _e=w[Kt];_e===void 0&&(_e=new fi,_e.layers.enable(Kt),_e.viewport=new Qe,w[Kt]=_e),_e.matrix.fromArray(Le.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Le.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Kt===0&&(R.matrix.copy(_e.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),At===!0&&R.cameras.push(_e)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(Mt[0]);Kt&&Kt.isValid&&Kt.texture&&C.init(t,Kt,l.renderState)}}for(let Mt=0;Mt<P.length;Mt++){const At=D[Mt],Ct=P[Mt];At!==null&&Ct!==void 0&&Ct.update(At,_t,m||h)}$&&$(Q,_t),_t.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:_t}),A=null}const yt=new N0;yt.setAnimationLoop(St),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const _s=new Li,lA=new Ye;function uA(o,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,R0(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,B,P,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),v(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),S(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(c(y,g),A(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),C(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,B,P):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===kn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===kn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const B=t.get(g),P=B.envMap,D=B.envMapRotation;P&&(y.envMap.value=P,_s.copy(D),_s.x*=-1,_s.y*=-1,_s.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),y.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(_s)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,B,P){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*B,y.scale.value=P*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function S(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,B){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,g){g.matcap&&(y.matcap.value=g.matcap)}function C(y,g){const B=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function cA(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(B,P){const D=P.program;s.uniformBlockBinding(B,D)}function m(B,P){let D=l[B.id];D===void 0&&(A(B),D=_(B),l[B.id]=D,B.addEventListener("dispose",y));const G=P.program;s.updateUBOMapping(B,G);const k=t.render.frame;c[B.id]!==k&&(S(B),c[B.id]=k)}function _(B){const P=v();B.__bindingPointIndex=P;const D=o.createBuffer(),G=B.__size,k=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,D),D}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const P=l[B.id],D=B.uniforms,G=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let k=0,I=D.length;k<I;k++){const Z=Array.isArray(D[k])?D[k]:[D[k]];for(let w=0,R=Z.length;w<R;w++){const H=Z[w];if(M(H,k,w,G)===!0){const ct=H.__offset,lt=Array.isArray(H.value)?H.value:[H.value];let rt=0;for(let it=0;it<lt.length;it++){const L=lt[it],X=C(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,ct+rt,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,rt),rt+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,P,D,G){const k=B.value,I=P+"_"+D;if(G[I]===void 0)return typeof k=="number"||typeof k=="boolean"?G[I]=k:G[I]=k.clone(),!0;{const Z=G[I];if(typeof k=="number"||typeof k=="boolean"){if(Z!==k)return G[I]=k,!0}else if(Z.equals(k)===!1)return Z.copy(k),!0}return!1}function A(B){const P=B.uniforms;let D=0;const G=16;for(let I=0,Z=P.length;I<Z;I++){const w=Array.isArray(P[I])?P[I]:[P[I]];for(let R=0,H=w.length;R<H;R++){const ct=w[R],lt=Array.isArray(ct.value)?ct.value:[ct.value];for(let rt=0,it=lt.length;rt<it;rt++){const L=lt[rt],X=C(L),W=D%G,mt=W%X.boundary,U=W+mt;D+=mt,U!==0&&G-U<X.storage&&(D+=G-U),ct.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=D,D+=X.storage}}}const k=D%G;return k>0&&(D+=G-k),B.__size=D,B.__cache={},this}function C(B){const P={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(P.boundary=4,P.storage=4):B.isVector2?(P.boundary=8,P.storage=8):B.isVector3||B.isColor?(P.boundary=16,P.storage=12):B.isVector4?(P.boundary=16,P.storage=16):B.isMatrix3?(P.boundary=48,P.storage=48):B.isMatrix4?(P.boundary=64,P.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),P}function y(B){const P=B.target;P.removeEventListener("dispose",y);const D=h.indexOf(P.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function g(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:p,update:m,dispose:g}}class fA{constructor(t={}){const{canvas:i=kx(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),C=new Int32Array(4);let y=null,g=null;const B=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=ci;let k=0,I=0,Z=null,w=-1,R=null;const H=new Qe,ct=new Qe;let lt=null;const rt=new Ae(0);let it=0,L=i.width,X=i.height,W=1,mt=null,U=null;const $=new Qe(0,0,L,X),St=new Qe(0,0,L,X);let yt=!1;const Q=new Sd;let _t=!1,Mt=!1;const At=new Ye,Ct=new Ye,oe=new tt,Kt=new Qe,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function _e(){return Z===null?W:1}let z=s;function Sn(b,Y){return i.getContext(b,Y)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",vt,!1),z===null){const Y="webgl2";if(z=Sn(Y,b),z===null)throw Sn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ye,he,Gt,ge,Yt,ie,Je,N,E,et,ht,pt,ut,Ot,Dt,Ht,Vt,xt,Pt,Wt,qt,Rt,ne,V;function Ut(){ye=new yT(z),ye.init(),Rt=new iA(z,ye),he=new pT(z,ye,t,Rt),Gt=new eA(z,ye),he.reverseDepthBuffer&&S&&Gt.buffers.depth.setReversed(!0),ge=new TT(z),Yt=new Vb,ie=new nA(z,ye,Gt,Yt,he,Rt,ge),Je=new _T(D),N=new xT(D),E=new Dy(z),ne=new hT(z,E),et=new MT(z,E,ge,ne),ht=new AT(z,et,E,ge),Pt=new bT(z,he,ie),Ht=new mT(Yt),pt=new Gb(D,Je,N,ye,he,ne,Ht),ut=new uA(D,Yt),Ot=new Xb,Dt=new Kb(ye),xt=new fT(D,Je,N,Gt,ht,M,p),Vt=new $b(D,ht,he),V=new cA(z,ge,he,Gt),Wt=new dT(z,ye,ge),qt=new ET(z,ye,ge),ge.programs=pt.programs,D.capabilities=he,D.extensions=ye,D.properties=Yt,D.renderLists=Ot,D.shadowMap=Vt,D.state=Gt,D.info=ge}Ut();const Et=new oA(D,z);this.xr=Et,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(L,X,!1))},this.getSize=function(b){return b.set(L,X)},this.setSize=function(b,Y,st=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=b,X=Y,i.width=Math.floor(b*W),i.height=Math.floor(Y*W),st===!0&&(i.style.width=b+"px",i.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(L*W,X*W).floor()},this.setDrawingBufferSize=function(b,Y,st){L=b,X=Y,W=st,i.width=Math.floor(b*st),i.height=Math.floor(Y*st),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,Y,st,ot){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,Y,st,ot),Gt.viewport(H.copy($).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(St)},this.setScissor=function(b,Y,st,ot){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,Y,st,ot),Gt.scissor(ct.copy(St).multiplyScalar(W).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(b){Gt.setScissorTest(yt=b)},this.setOpaqueSort=function(b){mt=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,st=!0){let ot=0;if(b){let j=!1;if(Z!==null){const Tt=Z.texture.format;j=Tt===pd||Tt===dd||Tt===hd}if(j){const Tt=Z.texture.type,wt=Tt===Ui||Tt===Ts||Tt===Oo||Tt===Po||Tt===cd||Tt===fd,Nt=xt.getClearColor(),zt=xt.getClearAlpha(),Jt=Nt.r,jt=Nt.g,kt=Nt.b;wt?(A[0]=Jt,A[1]=jt,A[2]=kt,A[3]=zt,z.clearBufferuiv(z.COLOR,0,A)):(C[0]=Jt,C[1]=jt,C[2]=kt,C[3]=zt,z.clearBufferiv(z.COLOR,0,C))}else ot|=z.COLOR_BUFFER_BIT}Y&&(ot|=z.DEPTH_BUFFER_BIT),st&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",vt,!1),xt.dispose(),Ot.dispose(),Dt.dispose(),Yt.dispose(),Je.dispose(),N.dispose(),ht.dispose(),ne.dispose(),V.dispose(),pt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",rn),Et.removeEventListener("sessionend",xn),Bn.stop()};function Bt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const b=ge.autoReset,Y=Vt.enabled,st=Vt.autoUpdate,ot=Vt.needsUpdate,j=Vt.type;Ut(),ge.autoReset=b,Vt.enabled=Y,Vt.autoUpdate=st,Vt.needsUpdate=ot,Vt.type=j}function vt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const Y=b.target;Y.removeEventListener("dispose",It),ee(Y)}function ee(b){we(b),Yt.remove(b)}function we(b){const Y=Yt.get(b).programs;Y!==void 0&&(Y.forEach(function(st){pt.releaseProgram(st)}),b.isShaderMaterial&&pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,st,ot,j,Tt){Y===null&&(Y=Le);const wt=j.isMesh&&j.matrixWorld.determinant()<0,Nt=ja(b,Y,st,ot,j);Gt.setMaterial(ot,wt);let zt=st.index,Jt=1;if(ot.wireframe===!0){if(zt=et.getWireframeAttribute(st),zt===void 0)return;Jt=2}const jt=st.drawRange,kt=st.attributes.position;let ue=jt.start*Jt,Re=(jt.start+jt.count)*Jt;Tt!==null&&(ue=Math.max(ue,Tt.start*Jt),Re=Math.min(Re,(Tt.start+Tt.count)*Jt)),zt!==null?(ue=Math.max(ue,0),Re=Math.min(Re,zt.count)):kt!=null&&(ue=Math.max(ue,0),Re=Math.min(Re,kt.count));const Ve=Re-ue;if(Ve<0||Ve===1/0)return;ne.setup(j,ot,Nt,st,zt);let ve,Se=Wt;if(zt!==null&&(ve=E.get(zt),Se=qt,Se.setIndex(ve)),j.isMesh)ot.wireframe===!0?(Gt.setLineWidth(ot.wireframeLinewidth*_e()),Se.setMode(z.LINES)):Se.setMode(z.TRIANGLES);else if(j.isLine){let Zt=ot.linewidth;Zt===void 0&&(Zt=1),Gt.setLineWidth(Zt*_e()),j.isLineSegments?Se.setMode(z.LINES):j.isLineLoop?Se.setMode(z.LINE_LOOP):Se.setMode(z.LINE_STRIP)}else j.isPoints?Se.setMode(z.POINTS):j.isSprite&&Se.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Se.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,je=j._multiDrawCounts,Me=j._multiDrawCount,bn=zt?E.get(zt).bytesPerElement:1,fa=Yt.get(ot).currentProgram.getUniforms();for(let ke=0;ke<Me;ke++)fa.setValue(z,"_gl_DrawID",ke),Se.render(Zt[ke]/bn,je[ke])}else if(j.isInstancedMesh)Se.renderInstances(ue,Ve,j.count);else if(st.isInstancedBufferGeometry){const Zt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,je=Math.min(st.instanceCount,Zt);Se.renderInstances(ue,Ve,je)}else Se.render(ue,Ve)};function Ee(b,Y,st){b.transparent===!0&&b.side===aa&&b.forceSinglePass===!1?(b.side=kn,b.needsUpdate=!0,ua(b,Y,st),b.side=Xa,b.needsUpdate=!0,ua(b,Y,st),b.side=aa):ua(b,Y,st)}this.compile=function(b,Y,st=null){st===null&&(st=b),g=Dt.get(st),g.init(Y),P.push(g),st.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),b!==st&&b.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const ot=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Ee(Nt,st,j),ot.add(Nt)}else Ee(Tt,st,j),ot.add(Tt)}),g=P.pop(),ot},this.compileAsync=function(b,Y,st=null){const ot=this.compile(b,Y,st);return new Promise(j=>{function Tt(){if(ot.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&ot.delete(wt)}),ot.size===0){j(b);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Wn=null;function dn(b){Wn&&Wn(b)}function rn(){Bn.stop()}function xn(){Bn.start()}const Bn=new N0;Bn.setAnimationLoop(dn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(b){Wn=b,Et.setAnimationLoop(b),b===null?Bn.stop():Bn.start()},Et.addEventListener("sessionstart",rn),Et.addEventListener("sessionend",xn),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(Y),Y=Et.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,Y,Z),g=Dt.get(b,P.length),g.init(Y),P.push(g),Ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,_t=Ht.init(this.clippingPlanes,Mt),y=Ot.get(b,B.length),y.init(),B.push(y),Et.enabled===!0&&Et.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,Y,-1/0,D.sortObjects)}qa(b,Y,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(mt,U),Ie=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Ie&&xt.addToRenderList(y,b),this.info.render.frame++,_t===!0&&Ht.beginShadows();const st=g.state.shadowsArray;Vt.render(st,b,Y),_t===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,j=y.transmissive;if(g.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(j.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const zt=Tt[wt];ko(ot,j,b,zt)}Ie&&xt.render(b);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const zt=Tt[wt];Vo(y,b,zt,zt.viewport)}}else j.length>0&&ko(ot,j,b,Y),Ie&&xt.render(b),Vo(y,b,Y);Z!==null&&I===0&&(ie.updateMultisampleRenderTarget(Z),ie.updateRenderTargetMipmap(Z)),b.isScene===!0&&b.onAfterRender(D,b,Y),ne.resetDefaultState(),w=-1,R=null,P.pop(),P.length>0?(g=P[P.length-1],_t===!0&&Ht.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function qa(b,Y,st,ot){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)st=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){ot&&Kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const wt=ht.update(b),Nt=b.material;Nt.visible&&y.push(b,wt,Nt,st,Kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const wt=ht.update(b),Nt=b.material;if(ot&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Kt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Kt.copy(wt.boundingSphere.center)),Kt.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(Nt)){const zt=wt.groups;for(let Jt=0,jt=zt.length;Jt<jt;Jt++){const kt=zt[Jt],ue=Nt[kt.materialIndex];ue&&ue.visible&&y.push(b,wt,ue,st,Kt.z,kt)}}else Nt.visible&&y.push(b,wt,Nt,st,Kt.z,null)}}const Tt=b.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)qa(Tt[wt],Y,st,ot)}function Vo(b,Y,st,ot){const j=b.opaque,Tt=b.transmissive,wt=b.transparent;g.setupLightsView(st),_t===!0&&Ht.setGlobalState(D.clippingPlanes,st),ot&&Gt.viewport(H.copy(ot)),j.length>0&&Ya(j,Y,st),Tt.length>0&&Ya(Tt,Y,st),wt.length>0&&Ya(wt,Y,st),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function ko(b,Y,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new As(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Io:Ui,minFilter:ys,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[ot.id],wt=ot.viewport||H;Tt.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(rt),it=D.getClearAlpha(),it<1&&D.setClearColor(16777215,.5),D.clear(),Ie&&xt.render(st);const zt=D.toneMapping;D.toneMapping=ka;const Jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),_t===!0&&Ht.setGlobalState(D.clippingPlanes,ot),Ya(b,st,ot),ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,ue=Y.length;kt<ue;kt++){const Re=Y[kt],Ve=Re.object,ve=Re.geometry,Se=Re.material,Zt=Re.group;if(Se.side===aa&&Ve.layers.test(ot.layers)){const je=Se.side;Se.side=kn,Se.needsUpdate=!0,la(Ve,st,ot,ve,Se,Zt),Se.side=je,Se.needsUpdate=!0,jt=!0}}jt===!0&&(ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Nt),D.setClearColor(rt,it),Jt!==void 0&&(ot.viewport=Jt),D.toneMapping=zt}function Ya(b,Y,st){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Tt=b.length;j<Tt;j++){const wt=b[j],Nt=wt.object,zt=wt.geometry,Jt=wt.group;let jt=wt.material;jt.allowOverride===!0&&ot!==null&&(jt=ot),Nt.layers.test(st.layers)&&la(Nt,Y,st,zt,jt,Jt)}}function la(b,Y,st,ot,j,Tt){b.onBeforeRender(D,Y,st,ot,j,Tt),b.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(D,Y,st,ot,b,Tt),j.transparent===!0&&j.side===aa&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,D.renderBufferDirect(st,Y,ot,j,b,Tt),j.side=Xa,j.needsUpdate=!0,D.renderBufferDirect(st,Y,ot,j,b,Tt),j.side=aa):D.renderBufferDirect(st,Y,ot,j,b,Tt),b.onAfterRender(D,Y,st,ot,j,Tt)}function ua(b,Y,st){Y.isScene!==!0&&(Y=Le);const ot=Yt.get(b),j=g.state.lights,Tt=g.state.shadowsArray,wt=j.state.version,Nt=pt.getParameters(b,j.state,Tt,Y,st),zt=pt.getProgramCacheKey(Nt);let Jt=ot.programs;ot.environment=b.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(b.isMeshStandardMaterial?N:Je).get(b.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",It),Jt=new Map,ot.programs=Jt);let jt=Jt.get(zt);if(jt!==void 0){if(ot.currentProgram===jt&&ot.lightsStateVersion===wt)return Oi(b,Nt),jt}else Nt.uniforms=pt.getUniforms(b),b.onBeforeCompile(Nt,D),jt=pt.acquireProgram(Nt,zt),Jt.set(zt,jt),ot.uniforms=Nt.uniforms;const kt=ot.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),Oi(b,Nt),ot.needsLights=en(b),ot.lightsStateVersion=wt,ot.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.directionalShadowMap.value=j.state.directionalShadowMap,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotShadowMap.value=j.state.spotShadowMap,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMap.value=j.state.pointShadowMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),ot.currentProgram=jt,ot.uniformsList=null,jt}function Ni(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Au.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Oi(b,Y){const st=Yt.get(b);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function ja(b,Y,st,ot,j){Y.isScene!==!0&&(Y=Le),ie.resetTextureUnits();const Tt=Y.fog,wt=ot.isMeshStandardMaterial?Y.environment:null,Nt=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Cr,zt=(ot.isMeshStandardMaterial?N:Je).get(ot.envMap||wt),Jt=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,jt=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),kt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,Re=!!st.morphAttributes.color;let Ve=ka;ot.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const ve=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Se=ve!==void 0?ve.length:0,Zt=Yt.get(ot),je=g.state.lights;if(_t===!0&&(Mt===!0||b!==R)){const pn=b===R&&ot.id===w;Ht.setState(ot,b,pn)}let Me=!1;ot.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==je.state.version||Zt.outputColorSpace!==Nt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==zt||ot.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ht.numPlanes||Zt.numIntersection!==Ht.numIntersection)||Zt.vertexAlphas!==Jt||Zt.vertexTangents!==jt||Zt.morphTargets!==kt||Zt.morphNormals!==ue||Zt.morphColors!==Re||Zt.toneMapping!==Ve||Zt.morphTargetsCount!==Se)&&(Me=!0):(Me=!0,Zt.__version=ot.version);let bn=Zt.currentProgram;Me===!0&&(bn=ua(ot,Y,j));let fa=!1,ke=!1,Bi=!1;const Fe=bn.getUniforms(),An=Zt.uniforms;if(Gt.useProgram(bn.program)&&(fa=!0,ke=!0,Bi=!0),ot.id!==w&&(w=ot.id,ke=!0),fa||R!==b){Gt.buffers.depth.getReversed()?(At.copy(b.projectionMatrix),Wx(At),qx(At),Fe.setValue(z,"projectionMatrix",At)):Fe.setValue(z,"projectionMatrix",b.projectionMatrix),Fe.setValue(z,"viewMatrix",b.matrixWorldInverse);const yn=Fe.map.cameraPosition;yn!==void 0&&yn.setValue(z,oe.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&Fe.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Fe.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,ke=!0,Bi=!0)}if(j.isSkinnedMesh){Fe.setOptional(z,j,"bindMatrix"),Fe.setOptional(z,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Fe.setValue(z,"boneTexture",pn.boneTexture,ie))}j.isBatchedMesh&&(Fe.setOptional(z,j,"batchingTexture"),Fe.setValue(z,"batchingTexture",j._matricesTexture,ie),Fe.setOptional(z,j,"batchingIdTexture"),Fe.setValue(z,"batchingIdTexture",j._indirectTexture,ie),Fe.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(z,"batchingColorTexture",j._colorsTexture,ie));const on=st.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Pt.update(j,st,bn),(ke||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,Fe.setValue(z,"receiveShadow",j.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=zt,An.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),ke&&(Fe.setValue(z,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&ca(An,Bi),Tt&&ot.fog===!0&&ut.refreshFogUniforms(An,Tt),ut.refreshMaterialUniforms(An,ot,W,X,g.state.transmissionRenderTarget[b.id]),Au.upload(z,Ni(Zt),An,ie)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Au.upload(z,Ni(Zt),An,ie),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Fe.setValue(z,"center",j.center),Fe.setValue(z,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(z,"normalMatrix",j.normalMatrix),Fe.setValue(z,"modelMatrix",j.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const pn=ot.uniformsGroups;for(let yn=0,yi=pn.length;yn<yi;yn++){const zi=pn[yn];V.update(zi,bn),V.bind(zi,bn)}}return bn}function ca(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function en(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,Y,st){const ot=Yt.get(b);ot.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Yt.get(b.texture).__webglTexture=Y,Yt.get(b.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const st=Yt.get(b);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const Xo=z.createFramebuffer();this.setRenderTarget=function(b,Y=0,st=0){Z=b,k=Y,I=st;let ot=!0,j=null,Tt=!1,wt=!1;if(b){const zt=Yt.get(b);if(zt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(zt.__webglFramebuffer===void 0)ie.setupRenderTarget(b);else if(zt.__hasExternalTextures)ie.rebindTextures(b,Yt.get(b.texture).__webglTexture,Yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const kt=b.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&Yt.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const jt=Yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(jt[Y])?j=jt[Y][st]:j=jt[Y],Tt=!0):b.samples>0&&ie.useMultisampledRTT(b)===!1?j=Yt.get(b).__webglMultisampledFramebuffer:Array.isArray(jt)?j=jt[st]:j=jt,H.copy(b.viewport),ct.copy(b.scissor),lt=b.scissorTest}else H.copy($).multiplyScalar(W).floor(),ct.copy(St).multiplyScalar(W).floor(),lt=yt;if(st!==0&&(j=Xo),Gt.bindFramebuffer(z.FRAMEBUFFER,j)&&ot&&Gt.drawBuffers(b,j),Gt.viewport(H),Gt.scissor(ct),Gt.setScissorTest(lt),Tt){const zt=Yt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,st)}else if(wt){const zt=Yt.get(b.texture),Jt=Y;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.__webglTexture,st,Jt)}else if(b!==null&&st!==0){const zt=Yt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,zt.__webglTexture,st)}w=-1},this.readRenderTargetPixels=function(b,Y,st,ot,j,Tt,wt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){Gt.bindFramebuffer(z.FRAMEBUFFER,zt);try{const Jt=b.textures[Nt],jt=Jt.format,kt=Jt.type;if(!he.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-ot&&st>=0&&st<=b.height-j&&(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Nt),z.readPixels(Y,st,ot,j,Rt.convert(jt),Rt.convert(kt),Tt))}finally{const Jt=Z!==null?Yt.get(Z).__webglFramebuffer:null;Gt.bindFramebuffer(z.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,Y,st,ot,j,Tt,wt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt)if(Y>=0&&Y<=b.width-ot&&st>=0&&st<=b.height-j){Gt.bindFramebuffer(z.FRAMEBUFFER,zt);const Jt=b.textures[Nt],jt=Jt.format,kt=Jt.type;if(!he.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Nt),z.readPixels(Y,st,ot,j,Rt.convert(jt),Rt.convert(kt),0);const Re=Z!==null?Yt.get(Z).__webglFramebuffer:null;Gt.bindFramebuffer(z.FRAMEBUFFER,Re);const Ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xx(z,Ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(ue),z.deleteSync(Ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,st=0){const ot=Math.pow(2,-st),j=Math.floor(b.image.width*ot),Tt=Math.floor(b.image.height*ot),wt=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;ie.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,wt,Nt,j,Tt),Gt.unbindTexture()};const Wo=z.createFramebuffer(),Pi=z.createFramebuffer();this.copyTextureToTexture=function(b,Y,st=null,ot=null,j=0,Tt=null){Tt===null&&(j!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let wt,Nt,zt,Jt,jt,kt,ue,Re,Ve;const ve=b.isCompressedTexture?b.mipmaps[Tt]:b.image;if(st!==null)wt=st.max.x-st.min.x,Nt=st.max.y-st.min.y,zt=st.isBox3?st.max.z-st.min.z:1,Jt=st.min.x,jt=st.min.y,kt=st.isBox3?st.min.z:0;else{const on=Math.pow(2,-j);wt=Math.floor(ve.width*on),Nt=Math.floor(ve.height*on),b.isDataArrayTexture?zt=ve.depth:b.isData3DTexture?zt=Math.floor(ve.depth*on):zt=1,Jt=0,jt=0,kt=0}ot!==null?(ue=ot.x,Re=ot.y,Ve=ot.z):(ue=0,Re=0,Ve=0);const Se=Rt.convert(Y.format),Zt=Rt.convert(Y.type);let je;Y.isData3DTexture?(ie.setTexture3D(Y,0),je=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ie.setTexture2DArray(Y,0),je=z.TEXTURE_2D_ARRAY):(ie.setTexture2D(Y,0),je=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Me=z.getParameter(z.UNPACK_ROW_LENGTH),bn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fa=z.getParameter(z.UNPACK_SKIP_PIXELS),ke=z.getParameter(z.UNPACK_SKIP_ROWS),Bi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ve.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,jt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,kt);const Fe=b.isDataArrayTexture||b.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const on=Yt.get(b),pn=Yt.get(Y),yn=Yt.get(on.__renderTarget),yi=Yt.get(pn.__renderTarget);Gt.bindFramebuffer(z.READ_FRAMEBUFFER,yn.__webglFramebuffer),Gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let zi=0;zi<zt;zi++)Fe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Yt.get(b).__webglTexture,j,kt+zi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Yt.get(Y).__webglTexture,Tt,Ve+zi)),z.blitFramebuffer(Jt,jt,wt,Nt,ue,Re,wt,Nt,z.DEPTH_BUFFER_BIT,z.NEAREST);Gt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Yt.has(b)){const on=Yt.get(b),pn=Yt.get(Y);Gt.bindFramebuffer(z.READ_FRAMEBUFFER,Wo),Gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Pi);for(let yn=0;yn<zt;yn++)Fe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,on.__webglTexture,j,kt+yn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,on.__webglTexture,j),An?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,Ve+yn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pn.__webglTexture,Tt),j!==0?z.blitFramebuffer(Jt,jt,wt,Nt,ue,Re,wt,Nt,z.COLOR_BUFFER_BIT,z.NEAREST):An?z.copyTexSubImage3D(je,Tt,ue,Re,Ve+yn,Jt,jt,wt,Nt):z.copyTexSubImage2D(je,Tt,ue,Re,Jt,jt,wt,Nt);Gt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else An?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(je,Tt,ue,Re,Ve,wt,Nt,zt,Se,Zt,ve.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(je,Tt,ue,Re,Ve,wt,Nt,zt,Se,ve.data):z.texSubImage3D(je,Tt,ue,Re,Ve,wt,Nt,zt,Se,Zt,ve):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,ue,Re,wt,Nt,Se,Zt,ve.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,ue,Re,ve.width,ve.height,Se,ve.data):z.texSubImage2D(z.TEXTURE_2D,Tt,ue,Re,wt,Nt,Se,Zt,ve);z.pixelStorei(z.UNPACK_ROW_LENGTH,Me),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fa),z.pixelStorei(z.UNPACK_SKIP_ROWS,ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Bi),Tt===0&&Y.generateMipmaps&&z.generateMipmap(je),Gt.unbindTexture()},this.copyTextureToTexture3D=function(b,Y,st=null,ot=null,j=0){return Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Y,st,ot,j)},this.initRenderTarget=function(b){Yt.get(b).__webglFramebuffer===void 0&&ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ie.setTextureCube(b,0):b.isData3DTexture?ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ie.setTexture2DArray(b,0):ie.setTexture2D(b,0),Gt.unbindTexture()},this.resetState=function(){k=0,I=0,Z=null,Gt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const a0={type:"change"},yd={type:"start"},I0={type:"end"},Su=new gd,s0=new Ha,hA=Math.cos(70*Vx.DEG2RAD),cn=new tt,Vn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6;class dA extends Cy{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new bs,this._lastTargetPosition=new tt,this._quat=new bs().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lg,this._sphericalDelta=new Lg,this._scale=1,this._panOffset=new tt,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new tt,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mA.bind(this),this._onPointerDown=pA.bind(this),this._onPointerUp=_A.bind(this),this._onContextMenu=EA.bind(this),this._onMouseWheel=SA.bind(this),this._onKeyDown=xA.bind(this),this._onTouchStart=yA.bind(this),this._onTouchMove=MA.bind(this),this._onMouseDown=gA.bind(this),this._onMouseMove=vA.bind(this),this._interceptControlDown=TA.bind(this),this._interceptControlUp=bA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(a0),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new tt(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Su.origin.copy(this.object.position),Su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Su.direction))<hA?this.object.lookAt(this.target):(s0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Su.intersectPlane(s0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(a0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let c=cn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function pA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function mA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function _A(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(I0),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function gA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ze.DOLLY;break;case Ms.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ze.ROTATE}break;case Ms.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(yd)}function vA(o){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function SA(o){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(o.preventDefault(),this.dispatchEvent(yd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(I0))}function xA(o){this.enabled!==!1&&this._handleKeyDown(o)}function yA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ze.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ze.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(yd)}function MA(o){switch(this._trackPointer(o),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ze.NONE}}function EA(o){this.enabled!==!1&&o.preventDefault()}function TA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var F0=(o=>(o.GRASS="GRASS",o.DIRT="DIRT",o.STONE="STONE",o.WOOD="WOOD",o.WATER="WATER",o.LEAVES="LEAVES",o.SAND="SAND",o.GLASS="GLASS",o.BRICK="BRICK",o.OBSIDIAN="OBSIDIAN",o))(F0||{}),ui=1,AA=[{type:"GRASS",label:"잔디",color:"bg-green-500"},{type:"DIRT",label:"흙",color:"bg-yellow-700"},{type:"STONE",label:"돌",color:"bg-gray-500"},{type:"WOOD",label:"나무",color:"bg-yellow-600"},{type:"WATER",label:"물",color:"bg-blue-500"},{type:"LEAVES",label:"나뭇잎",color:"bg-green-700"},{type:"SAND",label:"모래",color:"bg-yellow-300"},{type:"GLASS",label:"유리",color:"bg-blue-200"},{type:"BRICK",label:"벽돌",color:"bg-red-700"},{type:"OBSIDIAN",label:"흑요석",color:"bg-indigo-900"}],RA=({labelText:o,...t})=>Ge.jsx("button",{...t,className:`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-700
                disabled:bg-gray-500 disabled:opacity-70 disabled:cursor-not-allowed`,children:o}),CA=({selectedBlockType:o,onSelectBlockType:t,onExport:i,onImport:s,isSceneReady:l})=>{const c="import-file-input";return Ge.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-gray-700 p-3 flex flex-wrap justify-center items-center gap-3 shadow-lg overflow-x-auto",children:[Ge.jsx("span",{className:"text-sm font-medium text-gray-300 whitespace-nowrap self-center",children:"블록 선택:"}),Ge.jsx("div",{className:"flex gap-2",children:AA.map(({type:h,label:d,color:p})=>Ge.jsx("button",{onClick:()=>t(h),className:`w-10 h-10 md:w-12 md:h-12 rounded-md focus:outline-none transition-all duration-150 ease-in-out flex-shrink-0
                        ${p} 
                        ${o===h?"ring-4 ring-offset-2 ring-offset-gray-700 ring-sky-400 transform scale-110":"hover:opacity-80"}`,title:d,"aria-label":d,"aria-pressed":o===h},h))}),Ge.jsx("div",{className:"h-8 border-l border-gray-500 mx-2 self-center hidden md:block","aria-hidden":"true"})," ",Ge.jsxs("div",{className:"flex gap-2",children:[Ge.jsx(RA,{labelText:"내보내기",onClick:i,disabled:!l,"aria-disabled":!l}),Ge.jsx("input",{type:"file",id:c,accept:".json",onChange:s,style:{display:"none"},disabled:!l,"aria-hidden":"true"}),Ge.jsx("label",{htmlFor:c,className:`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out cursor-pointer
                      bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-700
                      ${l?"":"bg-gray-500 opacity-70 cursor-not-allowed hover:bg-gray-500"}`,role:"button",tabIndex:l?0:-1,"aria-disabled":!l,onKeyDown:h=>{var d;l&&(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),(d=document.getElementById(c))==null||d.click())},children:"가져오기"})]})]})},wA=CA,DA=()=>Ge.jsxs("div",{className:"fixed top-0 left-0 bg-black bg-opacity-50 text-white p-3 text-xs z-10 rounded-br-lg shadow-lg",children:[Ge.jsx("h3",{className:"font-bold mb-1",children:"조작법:"}),Ge.jsxs("ul",{className:"list-disc list-inside",children:[Ge.jsxs("li",{children:[Ge.jsx("span",{className:"font-semibold",children:"마우스 왼쪽 클릭:"})," 블록 놓기"]}),Ge.jsxs("li",{children:[Ge.jsx("span",{className:"font-semibold",children:"마우스 오른쪽 클릭:"})," 블록 제거"]}),Ge.jsxs("li",{children:[Ge.jsx("span",{className:"font-semibold",children:"마우스 휠:"})," 확대/축소"]}),Ge.jsxs("li",{children:[Ge.jsx("span",{className:"font-semibold",children:"마우스 휠 클릭 + 드래그:"})," 시점 회전"]})]})]}),UA=DA,LA=(o,t)=>{const i=On.useRef(null),s=On.useRef(null),l=On.useRef(null),c=On.useRef(null),h=On.useRef(new Ry),d=On.useRef(new ae),p=On.useRef(new Lo),m=On.useRef({}),_=On.useRef(t),[v,S]=On.useState(null);return On.useEffect(()=>{_.current=t},[t]),On.useEffect(()=>{if(!o.current)return()=>{};const M=o.current,A=new gy;A.background=new Ae(8900331),s.current=A;const C=new fi(75,M.clientWidth/M.clientHeight,.1,1e3);C.position.set(5,5,5),C.lookAt(0,0,0),l.current=C;const y=new fA({antialias:!0});y.setSize(M.clientWidth,M.clientHeight),y.setPixelRatio(window.devicePixelRatio),y.shadowMap.enabled=!0,y.shadowMap.type=l0,M.appendChild(y.domElement),i.current=y,m.current={GRASS:new Ri({color:6535497}),DIRT:new Ri({color:9127187}),STONE:new Ri({color:8421504}),WOOD:new Ri({color:14596231}),WATER:new Ri({color:1876972,opacity:.7,transparent:!0}),LEAVES:new Ri({color:2263842}),SAND:new Ri({color:16032864}),GLASS:new Ri({color:11393254,opacity:.5,transparent:!0}),BRICK:new Ri({color:11674146}),OBSIDIAN:new Ri({color:3866683})};const g=(rt,it,L=!0)=>{if(!p.current||Object.keys(m.current).length===0)return;const X=new Dr(ui,ui,ui),W=m.current[it]||m.current.STONE,mt=new Pn(X,W);mt.position.copy(rt),mt.castShadow=!0,mt.receiveShadow=!0,mt.userData={isBlock:L,blockType:it},p.current.add(mt)},B=rt=>{p.current&&(p.current.remove(rt),rt.geometry.dispose(),Array.isArray(rt.material)?rt.material.forEach(it=>it.dispose()):rt.material.dispose())},P=new by(16777215,.6);A.add(P);const D=new Ty(16777215,.8);D.position.set(10,15,10),D.castShadow=!0,D.shadow.mapSize.width=1024,D.shadow.mapSize.height=1024,A.add(D);const G=new dA(C,y.domElement);if(G.enableDamping=!0,G.dampingFactor=.05,G.mouseButtons={MIDDLE:Ms.ROTATE},G.enableZoom=!0,c.current=G,A.add(p.current),p.current.children.length===0)for(let it=-20/2;it<20/2;it++)for(let L=-20/2;L<20/2;L++)g(new tt(it*ui,-1,L*ui),"GRASS",!1);let k;const I=()=>{k=requestAnimationFrame(I),G.update(),y.render(A,C)};I();const Z=()=>{l.current&&i.current&&M&&(l.current.aspect=M.clientWidth/M.clientHeight,l.current.updateProjectionMatrix(),i.current.setSize(M.clientWidth,M.clientHeight))},w=rt=>{if(!M)return null;const it=M.getBoundingClientRect(),L=(rt.clientX-it.left)/M.clientWidth*2-1,X=-((rt.clientY-it.top)/M.clientHeight)*2+1;return{x:L,y:X}},R=rt=>{if(!l.current||!h.current||!d.current||!p.current)return;const it=w(rt);if(!it)return;d.current.set(it.x,it.y),h.current.setFromCamera(d.current,l.current);const L=h.current.intersectObjects(p.current.children,!0);if(L.length>0){const X=L[0];if(!X.face||!X.object)return;if(rt.button===0){if(rt.preventDefault(),X.object instanceof Pn){const W=X.face.normal.clone(),mt=new tt().copy(X.object.position).addScaledVector(W,ui);mt.x=Math.round(mt.x/ui)*ui,mt.y=Math.round(mt.y/ui)*ui,mt.z=Math.round(mt.z/ui)*ui,g(mt,_.current,!0)}}else rt.button===2&&(rt.preventDefault(),X.object instanceof Pn&&X.object.userData.isBlock&&B(X.object))}};M.addEventListener("mousedown",R),window.addEventListener("resize",Z);const H=rt=>rt.button===2&&rt.preventDefault();return M.addEventListener("contextmenu",H),S({exportBlocks:()=>{if(!p.current)return[];const rt=[];return p.current.children.forEach(it=>{it instanceof Pn&&it.userData.isBlock===!0&&rt.push({x:it.position.x,y:it.position.y,z:it.position.z,type:it.userData.blockType})}),rt},importBlocks:rt=>{if(!p.current||!m.current||Object.keys(m.current).length===0){console.warn("Cannot import blocks: scene or materials not ready.");return}p.current.children.filter(L=>L instanceof Pn&&L.userData.isBlock===!0).forEach(L=>B(L)),rt.forEach(L=>{const X=new tt(L.x,L.y,L.z);g(X,L.type,!0)})}}),()=>{cancelAnimationFrame(k),window.removeEventListener("resize",Z),M.removeEventListener("mousedown",R),M.removeEventListener("contextmenu",H),i.current&&(i.current.dispose(),i.current.domElement.parentElement&&i.current.domElement.parentElement.removeChild(i.current.domElement),i.current=null),c.current&&(c.current.dispose(),c.current=null),Object.values(m.current).forEach(rt=>{Array.isArray(rt)?rt.forEach(it=>it.dispose()):rt.dispose()}),m.current={},p.current&&(p.current.children.forEach(rt=>{rt instanceof Pn&&rt.geometry.dispose()}),p.current.clear()),s.current&&(s.current.children.filter(it=>it.type.includes("Light")).forEach(it=>{var L;typeof it.dispose=="function"&&it.dispose(),(L=s.current)==null||L.remove(it)}),p.current&&s.current.remove(p.current),s.current=null),l.current=null,S(null)}},[o]),v},NA=LA,OA=()=>{const[o,t]=On.useState("GRASS"),i=On.useRef(null),s=NA(i,o),l=()=>{if(!s)return;const d={version:1,blocks:s.exportBlocks()},p=JSON.stringify(d,null,2),m=new Blob([p],{type:"application/json"}),_=URL.createObjectURL(m),v=document.createElement("a");v.href=_,v.download="block-world.json",document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(_)},c=h=>{var m;if(!s)return;const d=(m=h.target.files)==null?void 0:m[0];if(!d)return;const p=new FileReader;p.onload=_=>{var v;try{const S=(v=_.target)==null?void 0:v.result,M=JSON.parse(S);M&&M.version===1&&Array.isArray(M.blocks)?M.blocks.every(C=>typeof C.x=="number"&&typeof C.y=="number"&&typeof C.z=="number"&&Object.values(F0).includes(C.type))?s.importBlocks(M.blocks):(console.error("Invalid block data in imported file."),alert("가져온 파일에 잘못된 블록 데이터가 포함되어 있습니다.")):(console.error("Invalid file format or version for import."),alert("잘못된 파일 형식이거나 지원되지 않는 버전입니다."))}catch(S){console.error("Error parsing imported file:",S),alert("파일을 가져오는 중 오류가 발생했습니다.")}},p.readAsText(d),h.target.value=""};return Ge.jsxs("div",{className:"flex flex-col h-screen bg-gray-800 text-white",children:[Ge.jsx(UA,{}),Ge.jsx("div",{ref:i,className:"flex-grow relative"}),Ge.jsx(wA,{selectedBlockType:o,onSelectBlockType:t,onExport:l,onImport:c,isSceneReady:!!s})]})},PA=OA,H0=document.getElementById("root");if(!H0)throw new Error("Could not find root element to mount to");var BA=JS.createRoot(H0);BA.render(Ge.jsx(XS.StrictMode,{children:Ge.jsx(PA,{})}));
