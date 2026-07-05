// ==UserScript==
// @name         Re:Dollars 全站聊天
// @version      1.0.0
// @author       wataame
// @match        https://bgm.tv/*
// @match        https://bangumi.tv/*
// @match        https://chii.in/*
// @exclude      https://bgm.tv/rakuen/*
// @exclude      https://bangumi.tv/rakuen/*
// @exclude      https://chii.in/rakuen/*
// @grant        none
// ==/UserScript==

(function(){'use strict';var n$1,l$3,u$2,t$2,i$2,r$2,o$2,e$2,f$2,c$2,a$3,s$3,h$3,p$3,v$2,d$3={},w$2=[],_$3=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g$1=Array.isArray;function m$1(n,l){for(var u in l)n[u]=l[u];return n}function b$1(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function k$1(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return x(l,e,i,r,null)}function x(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$2:o,__i:-1,__u:0};return null==o&&null!=l$3.vnode&&l$3.vnode(e),e}function S(n){return n.children}function C$1(n,l){this.props=n,this.context=l;}function $(n,l){if(null==l)return n.__?$(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?$(n):null}function I(n){if(n.__P&&n.__d){var u=n.__v,t=u.__e,i=[],r=[],o=m$1({},u);o.__v=u.__v+1,l$3.vnode&&l$3.vnode(o),q$1(n.__P,o,u,n.__n,n.__P.namespaceURI,32&u.__u?[t]:null,i,null==t?$(u):t,!!(32&u.__u),r),o.__v=u.__v,o.__.__k[o.__i]=o,D$1(i,o,r),u.__e=u.__=null,o.__e!=t&&P(o);}}function P(n){if(null!=(n=n.__)&&null!=n.__c)return n.__e=n.__c.base=null,n.__k.some(function(l){if(null!=l&&null!=l.__e)return n.__e=n.__c.base=l.__e}),P(n)}function A$1(n){(!n.__d&&(n.__d=true)&&i$2.push(n)&&!H.__r++||r$2!=l$3.debounceRendering)&&((r$2=l$3.debounceRendering)||o$2)(H);}function H(){try{for(var n,l=1;i$2.length;)i$2.length>l&&i$2.sort(e$2),n=i$2.shift(),l=i$2.length,I(n);}finally{i$2.length=H.__r=0;}}function L(n,l,u,t,i,r,o,e,f,c,a){var s,h,p,v,y,_,g,m=t&&t.__k||w$2,b=l.length;for(f=T$1(u,l,m,f,b),s=0;s<b;s++)null!=(p=u.__k[s])&&(h=-1!=p.__i&&m[p.__i]||d$3,p.__i=s,_=q$1(n,p,h,i,r,o,e,f,c,a),v=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&J(h.ref,null,p),a.push(p.ref,p.__c||v,p)),null==y&&null!=v&&(y=v),(g=!!(4&p.__u))||h.__k===p.__k?(f=j$1(p,f,n,g),g&&h.__e&&(h.__e=null)):"function"==typeof p.type&&void 0!==_?f=_:v&&(f=v.nextSibling),p.__u&=-7);return u.__e=y,f}function T$1(n,l,u,t,i){var r,o,e,f,c,a=u.length,s=a,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=n.__k[r]=x(null,o,null,null,null):g$1(o)?o=n.__k[r]=x(S,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?o=n.__k[r]=x(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,f=r+h,o.__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=O(o,u,f,s))&&(s--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>a?h--:i<a&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(s)for(r=0;r<a;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=$(e)),K(e,e));return t}function j$1(n,l,u,t){var i,r;if("function"==typeof n.type){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,l=j$1(i[r],l,u,t));return l}n.__e!=l&&(t&&(l&&n.type&&!l.parentNode&&(l=$(n)),u.insertBefore(n.__e,l||null)),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function O(n,l,u,t){var i,r,o,e=n.key,f=n.type,c=l[u],a=null!=c&&0==(2&c.__u);if(null===c&&null==e||a&&e==c.key&&f==c.type)return u;if(t>(a?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;)if(null!=(c=l[o=i>=0?i--:r++])&&0==(2&c.__u)&&e==c.key&&f==c.type)return o;return  -1}function z$1(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||_$3.test(l)?u:u+"px";}function N(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||z$1(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||z$1(n.style,l,u[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(s$3,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u[a$3]=t[a$3]:(u[a$3]=h$3,n.addEventListener(l,r?v$2:p$3,r)):n.removeEventListener(l,r?v$2:p$3,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||false===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function V(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u[c$2])u[c$2]=h$3++;else if(u[c$2]<t[a$3])return;return t(l$3.event?l$3.event(u):u)}}}function q$1(n,u,t,i,r,o,e,f,c,a){var s,h,p,v,y,d,_,k,x,M,$,I,P,A,H,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(s=l$3.__b)&&s(u);n:if("function"==typeof T)try{if(k=u.props,x=T.prototype&&T.prototype.render,M=(s=T.contextType)&&i[s.__c],$=s?M?M.props.value:s.__:i,t.__c?_=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(k,$):(u.__c=h=new C$1(k,$),h.constructor=T,h.render=Q),M&&M.sub(h),h.state||(h.state={}),h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=m$1({},h.__s)),m$1(h.__s,T.getDerivedStateFromProps(k,h.__s))),v=h.props,y=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&k!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,$),u.__v==t.__v||!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,$)){u.__v!=t.__v&&(h.props=k,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),w$2.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,$),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,d);});}if(h.context=$,h.props=k,h.__P=n,h.__e=!1,I=l$3.__r,P=0,x)h.state=h.__s,h.__d=!1,I&&I(u),s=h.render(h.props,h.state,h.context),w$2.push.apply(h.__h,h._sb),h._sb=[];else do{h.__d=!1,I&&I(u),s=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++P<25);h.state=h.__s,null!=h.getChildContext&&(i=m$1(m$1({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(d=h.getSnapshotBeforeUpdate(v,y)),A=null!=s&&s.type===S&&null==s.key?E$1(s.props.children):s,f=L(n,g$1(A)?A:[A],u,t,i,r,o,e,f,c,a),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),_&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f;}else {for(H=o.length;H--;)b$1(o[H]);B$1(u);}else u.__e=t.__e,u.__k=t.__k,n.then||B$1(u);l$3.__e(n,u,t);}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=G(t.__e,u,t,i,r,o,e,c,a);return (s=l$3.diffed)&&s(u),128&u.__u?void 0:f}function B$1(n){n&&(n.__c&&(n.__c.__e=true),n.__k&&n.__k.some(B$1));}function D$1(n,u,t){for(var i=0;i<t.length;i++)J(t[i],t[++i],t[++i]);l$3.__c&&l$3.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$3.__e(n,u.__v);}});}function E$1(n){return "object"!=typeof n||null==n||n.__b>0?n:g$1(n)?n.map(E$1):void 0!==n.constructor?null:m$1({},n)}function G(u,t,i,r,o,e,f,c,a){var s,h,p,v,y,w,_,m=i.props||d$3,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(s=0;s<e.length;s++)if((y=e[s])&&"setAttribute"in y==!!x&&(x?y.localName==x:3==y.nodeType)){u=y,e[s]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l$3.__m&&l$3.__m(t,e),c=false),e=null;}if(null==x)m===k||c&&u.data==k||(u.data=k);else {if(e="textarea"==x&&null!=k.defaultValue?null:e&&n$1.call(u.childNodes),!c&&null!=e)for(m={},s=0;s<u.attributes.length;s++)m[(y=u.attributes[s]).name]=y.value;for(s in m)y=m[s],"dangerouslySetInnerHTML"==s?p=y:"children"==s||s in k||"value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k||N(u,s,null,y,o);for(s in k)y=k[s],"children"==s?v=y:"dangerouslySetInnerHTML"==s?h=y:"value"==s?w=y:"checked"==s?_=y:c&&"function"!=typeof y||m[s]===y||N(u,s,y,m[s],o);if(h)c||p&&(h.__html==p.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(p&&(u.innerHTML=""),L("template"==t.type?u.content:u,g$1(v)?v:[v],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&$(i,0),c,a),null!=e)for(s=e.length;s--;)b$1(e[s]);c&&"textarea"!=x||(s="value","progress"==x&&null==w?u.removeAttribute("value"):null!=w&&(w!==u[s]||"progress"==x&&!w||"option"==x&&w!=m[s])&&N(u,s,w,m[s],o),s="checked",null!=_&&_!=u[s]&&N(u,s,_,m[s],o));}return u}function J(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$3.__e(n,t);}}function K(n,u,t){var i,r;if(l$3.unmount&&l$3.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||J(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$3.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&K(i[r],u,t||"function"!=typeof n.type);t||b$1(n.__e),n.__c=n.__=n.__e=void 0;}function Q(n,l,u){return this.constructor(n,u)}function R(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l$3.__&&l$3.__(u,t),o=(r="function"=="undefined")?null:t.__k,e=[],f=[],q$1(t,u=(t).__k=k$1(S,null,[u]),o||d$3,d$3,t.namespaceURI,o?null:t.firstChild?n$1.call(t.childNodes):null,e,o?o.__e:t.firstChild,r,f),D$1(e,u,f);}n$1=w$2.slice,l$3={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,t$2=function(n){return null!=n&&void 0===n.constructor},C$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=m$1({},this.state),"function"==typeof n&&(n=n(m$1({},u),this.props)),n&&m$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),A$1(this));},C$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),A$1(this));},C$1.prototype.render=S,i$2=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$2=function(n,l){return n.__v.__b-l.__v.__b},H.__r=0,f$2=Math.random().toString(8),c$2="__d"+f$2,a$3="__a"+f$2,s$3=/(PointerCapture)$|Capture$/i,h$3=0,p$3=V(false),v$2=V(true);
var t$1,r$1,u$1,i$1,o$1=0,f$1=[],c$1=l$3,e$1=c$1.__b,a$2=c$1.__r,v$1=c$1.diffed,l$2=c$1.__c,m=c$1.unmount,s$2=c$1.__;function p$2(n,t){c$1.__h&&c$1.__h(r$1,n,o$1||t),o$1=0;var u=r$1.__H||(r$1.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d$2(n){return o$1=1,h$2(D,n)}function h$2(n,u,i){var o=p$2(t$1++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r$1,!r$1.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.some(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c&&c.call(this,n,t,r)||i};r$1.__f=true;var c=r$1.shouldComponentUpdate,e=r$1.componentWillUpdate;r$1.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r$1.shouldComponentUpdate=f;}return o.__N||o.__}function y$1(n,u){var i=p$2(t$1++,3);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r$1.__H.__h.push(i));}function _$2(n,u){var i=p$2(t$1++,4);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r$1.__h.push(i));}function A(n){return o$1=5,T(function(){return {current:n}},[])}function T(n,r){var u=p$2(t$1++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o$1=8,T(function(){return n},t)}function j(){for(var n;n=f$1.shift();){var t=n.__H;if(n.__P&&t)try{t.__h.some(z),t.__h.some(B),t.__h=[];}catch(r){t.__h=[],c$1.__e(r,n.__v);}}}c$1.__b=function(n){r$1=null,e$1&&e$1(n);},c$1.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s$2&&s$2(n,t);},c$1.__r=function(n){a$2&&a$2(n),t$1=0;var i=(r$1=n.__c).__H;i&&(u$1===r$1?(i.__h=[],r$1.__h=[],i.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.some(z),i.__h.some(B),i.__h=[],t$1=0)),u$1=r$1;},c$1.diffed=function(n){v$1&&v$1(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===c$1.requestAnimationFrame||((i$1=c$1.requestAnimationFrame)||w$1)(j)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),u$1=r$1=null;},c$1.__c=function(n,t){t.some(function(n){try{n.__h.some(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c$1.__e(r,n.__v);}}),l$2&&l$2(n,t);},c$1.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.some(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c$1.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w$1(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,35);k&&(t=requestAnimationFrame(r));}function z(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function B(n){var t=r$1;n.__c=n.__(),r$1=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}var i=Symbol.for("preact-signals");function t(){if(!(s$1>1)){var i,t=false;while(void 0!==h$1){var r=h$1;h$1=void 0;f++;while(void 0!==r){var o=r.o;r.o=void 0;r.f&=-3;if(!(8&r.f)&&c(r))try{r.c();}catch(r){if(!t){i=r;t=true;}}r=o;}}f=0;s$1--;if(t)throw i}else s$1--;}function r(i){if(s$1>0)return i();s$1++;try{return i()}finally{t();}}var o=void 0;function n(i){var t=o;o=void 0;try{return i()}finally{o=t;}}var h$1=void 0,s$1=0,f=0,v=0;function e(i){if(void 0!==o){var t=i.n;if(void 0===t||t.t!==o){t={i:0,S:i,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t};if(void 0!==o.s)o.s.n=t;o.s=t;i.n=t;if(32&o.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=o.s;t.n=void 0;o.s.n=t;o.s=t;}return t}}}function u(i,t){this.v=i;this.i=0;this.n=void 0;this.t=void 0;this.W=null==t?void 0:t.watched;this.Z=null==t?void 0:t.unwatched;this.name=null==t?void 0:t.name;}u.prototype.brand=i;u.prototype.h=function(){return  true};u.prototype.S=function(i){var t=this,r=this.t;if(r!==i&&void 0===i.e){i.x=r;this.t=i;if(void 0!==r)r.e=i;else n(function(){var i;null==(i=t.W)||i.call(t);});}};u.prototype.U=function(i){var t=this;if(void 0!==this.t){var r=i.e,o=i.x;if(void 0!==r){r.x=o;i.e=void 0;}if(void 0!==o){o.e=r;i.x=void 0;}if(i===this.t){this.t=o;if(void 0===o)n(function(){var i;null==(i=t.Z)||i.call(t);});}}};u.prototype.subscribe=function(i){var t=this;return E(function(){var r=t.value,n=o;o=void 0;try{i(r);}finally{o=n;}},{name:"sub"})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){var i=o;o=void 0;try{return this.value}finally{o=i;}};Object.defineProperty(u.prototype,"value",{get:function(){var i=e(this);if(void 0!==i)i.i=this.i;return this.v},set:function(i){if(i!==this.v){if(f>100)throw new Error("Cycle detected");this.v=i;this.i++;v++;s$1++;try{for(var r=this.t;void 0!==r;r=r.x)r.t.N();}finally{t();}}}});function d$1(i,t){return new u(i,t)}function c(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return  true;return  false}function a$1(i){for(var t=i.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r)t.r=r;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function l$1(i){var t=i.s,r=void 0;while(void 0!==t){var o=t.p;if(-1===t.i){t.S.U(t);if(void 0!==o)o.n=t.n;if(void 0!==t.n)t.n.p=o;}else r=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=o;}i.s=r;}function y(i,t){u.call(this,void 0);this.x=i;this.s=void 0;this.g=v-1;this.f=4;this.W=null==t?void 0:t.watched;this.Z=null==t?void 0:t.unwatched;this.name=null==t?void 0:t.name;}y.prototype=new u;y.prototype.h=function(){this.f&=-3;if(1&this.f)return  false;if(32==(36&this.f))return  true;this.f&=-5;if(this.g===v)return  true;this.g=v;this.f|=1;if(this.i>0&&!c(this)){this.f&=-2;return  true}var i=o;try{a$1(this);o=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}o=i;l$1(this);this.f&=-2;return  true};y.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t);}u.prototype.S.call(this,i);};y.prototype.U=function(i){if(void 0!==this.t){u.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t);}}};y.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N();}};Object.defineProperty(y.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=e(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function w(i,t){return new y(i,t)}function _$1(i){var r=i.u;i.u=void 0;if("function"==typeof r){s$1++;var n=o;o=void 0;try{r();}catch(t){i.f&=-2;i.f|=8;b(i);throw t}finally{o=n;t();}}}function b(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;_$1(i);}function g(i){if(o!==this)throw new Error("Out-of-order effect");l$1(this);o=i;this.f&=-2;if(8&this.f)b(this);t();}function p$1(i,t){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;this.name=null==t?void 0:t.name;}p$1.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};p$1.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;_$1(this);a$1(this);s$1++;var i=o;o=this;return g.bind(this,i)};p$1.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=h$1;h$1=this;}};p$1.prototype.d=function(){this.f|=8;if(!(1&this.f))b(this);};p$1.prototype.dispose=function(){this.d();};function E(i,t){var r=new p$1(i,t);try{r.c();}catch(i){r.d();throw i}var o=r.d.bind(r);o[Symbol.dispose]=o;return o}var s;function l(i,n){l$3[i]=n.bind(null,l$3[i]||function(){});}function d(i){if(s)s();s=i&&i.S();}function h(i){var r=this,f=i.data,o=useSignal(f);o.value=f;var e=T(function(){var i=r.__v;while(i=i.__)if(i.__c){i.__c.__$f|=4;break}r.__$u.c=function(){var i,t=r.__$u.S(),f=e.value;t();if(t$2(f)||3!==(null==(i=r.base)?void 0:i.nodeType)){r.__$f|=1;r.setState({});}else r.base.data=f;};return w(function(){var i=o.value.value;return 0===i?0:true===i?"":i||""})},[]);return e.value}h.displayName="_st";Object.defineProperties(u.prototype,{constructor:{configurable:true,value:void 0},type:{configurable:true,value:h},props:{configurable:true,get:function(){return {data:this}}},__b:{configurable:true,value:1}});l("__b",function(i,r){if("string"==typeof r.type){var n,t=r.props;for(var f in t)if("children"!==f){var o=t[f];if(o instanceof u){if(!n)r.__np=n={};n[f]=o;t[f]=o.peek();}}}i(r);});l("__r",function(i,r){d();var n,t=r.__c;if(t){t.__$f&=-2;if(void 0===(n=t.__$u))t.__$u=n=function(i){var r;E(function(){r=this;});r.c=function(){t.__$f|=1;t.setState({});};return r}();}d(n);i(r);});l("__e",function(i,r,n,t){d();i(r,n,t);});l("diffed",function(i,r){d();var n;if("string"==typeof r.type&&(n=r.__e)){var t=r.__np,f=r.props;if(t){var o=n.U;if(o)for(var e in o){var u=o[e];if(void 0!==u&&!(e in t)){u.d();o[e]=void 0;}}else n.U=o={};for(var a in t){var c=o[a],s=t[a];if(void 0===c){c=p(n,a,s,f);o[a]=c;}else c.o(s,f);}}}i(r);});function p(i,r,n,t){var f=r in i&&void 0===i.ownerSVGElement,o=d$1(n);return {o:function(i,r){o.value=i;t=r;},d:E(function(){var n=o.value.value;if(t[r]!==n){t[r]=n;if(f)i[r]=n;else if(n)i.setAttribute(r,n);else i.removeAttribute(r);}})}}l("unmount",function(i,r){if("string"==typeof r.type){var n=r.__e;if(n){var t=n.U;if(t){n.U=void 0;for(var f in t){var o=t[f];if(o)o.d();}}}}else {var e=r.__c;if(e){var u=e.__$u;if(u){e.__$u=void 0;u.d();}}}i(r);});l("__h",function(i,r,n,t){if(t<3||9===t)r.__$f|=2;i(r,n,t);});C$1.prototype.shouldComponentUpdate=function(i,r){var n=this.__$u,t=n&&void 0!==n.s;for(var f in r)return  true;if(this.__f||"boolean"==typeof this.u&&true===this.u){if(!(t||2&this.__$f||4&this.__$f))return  true;if(1&this.__$f)return  true}else {if(!(t||4&this.__$f))return  true;if(3&this.__$f)return  true}for(var o in i)if("__source"!==o&&i[o]!==this.props[o])return  true;for(var e in this.props)if(!(e in i))return  true;return  false};function useSignal(i){return T(function(){return d$1(i)},[])}const DEFAULT_BACKEND_URL = "https://rd.ry.mk";
function trimTrailingSlash(value) {
  return value.replace(/\/+$/, "");
}
const BACKEND_URL = trimTrailingSlash(
  DEFAULT_BACKEND_URL
);
const BACKEND_API_URL = trimTrailingSlash(
  `${BACKEND_URL}/api/v1`
);
const UPLOAD_BASE_URL = trimTrailingSlash(
  "https://up.ry.mk"
);
const UPLOAD_API_URL = trimTrailingSlash(
  `${UPLOAD_BASE_URL}/api/upload`
);
const FILE_UPLOAD_API_URL = trimTrailingSlash(
  `${UPLOAD_API_URL}/file`
);
const WEBSOCKET_URL = `${BACKEND_URL.replace(/^http/, "ws")}/ws`;
const AUTH_BASE_URL = trimTrailingSlash(
  "https://auth.ry.mk"
);
const AUTH_CLIENT = "re-dollars";
const MESSAGE_GROUP_TIME_GAP = 300;
const MIN_WINDOW_WIDTH = 280;
const MIN_WINDOW_HEIGHT = 200;
const TYPING_STOP_DELAY = 2500;
const DRAFT_SAVE_DELAY = 1e3;
const SEARCH_DEBOUNCE = 500;
const MENTION_DEBOUNCE = 300;
const PRESENCE_SYNC_DELAY = 120;
const TYPING_AUTO_CLEAR = 1e4;
const HEARTBEAT_INTERVAL = 25e3;
const RECONNECT_DELAY = 2e3;
const CONNECTION_CHECK_INTERVAL = 1e4;
const MAX_DOM_MESSAGES = 100;
const MAX_MENTION_RESULTS = 10;
const MAX_AVATARS_SHOWN = 5;
const COLLAPSE_MAX_HEIGHT = 300;
const NEW_MESSAGE_ANIMATION = 350;
const CONTEXT_MENU_REACTIONS = [67, 63, 38, 124, 46, 106].map((n) => `(bgm${n})`);const CHAT_OPEN_KEY = "dollars.isChatOpen";
const MAXIMIZED_KEY = "dollars.isMaximized";
const MOBILE_CHAT_VIEW_KEY = "dollars.mobileChatViewActive";
const ACTIVE_CONVERSATION_KEY = "dollars.activeConversationId";
const CHAT_POSITION_KEY = "dollarsChatPosition";
function fitWindowRectToViewport(rect, viewportWidth = window.innerWidth, viewportHeight = window.innerHeight) {
  const width = Math.min(viewportWidth, Math.max(MIN_WINDOW_WIDTH, rect.width));
  const height = Math.min(viewportHeight, Math.max(MIN_WINDOW_HEIGHT, rect.height));
  const maxLeft = Math.max(0, viewportWidth - width);
  const maxTop = Math.max(0, viewportHeight - height);
  const left = Math.min(Math.max(0, rect.left), maxLeft);
  const top = Math.min(Math.max(0, rect.top), maxTop);
  return { left, top, width, height };
}
function readBoolean(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? null : JSON.parse(raw);
  } catch {
    return null;
  }
}
function loadWindowState() {
  return {
    isChatOpen: readBoolean(CHAT_OPEN_KEY),
    isMaximized: readBoolean(MAXIMIZED_KEY),
    mobileChatViewActive: readBoolean(MOBILE_CHAT_VIEW_KEY),
    activeConversationId: loadActiveConversationId(),
    position: loadWindowPosition()
  };
}
function saveChatOpenState(isOpen) {
  localStorage.setItem(CHAT_OPEN_KEY, JSON.stringify(isOpen));
}
function saveMaximizedState(isMaximized) {
  localStorage.setItem(MAXIMIZED_KEY, JSON.stringify(isMaximized));
}
function saveMobileChatViewState(active) {
  localStorage.setItem(MOBILE_CHAT_VIEW_KEY, JSON.stringify(active));
}
function saveActiveConversationId(conversationId) {
  localStorage.setItem(ACTIVE_CONVERSATION_KEY, conversationId);
}
function loadActiveConversationId() {
  try {
    return localStorage.getItem(ACTIVE_CONVERSATION_KEY);
  } catch {
    return null;
  }
}
function saveWindowPosition(position) {
  localStorage.setItem(CHAT_POSITION_KEY, JSON.stringify(position));
}
function loadWindowPosition() {
  try {
    const raw = localStorage.getItem(CHAT_POSITION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function clearWindowState() {
  localStorage.removeItem(CHAT_OPEN_KEY);
  localStorage.removeItem(MAXIMIZED_KEY);
  localStorage.removeItem(MOBILE_CHAT_VIEW_KEY);
  localStorage.removeItem(ACTIVE_CONVERSATION_KEY);
  localStorage.removeItem(CHAT_POSITION_KEY);
}const extensionConversations = d$1([]);
const activeExtensionId = d$1(null);
function registerConversationItem(item) {
  const existing = extensionConversations.value.find((i) => i.id === item.id);
  if (existing) {
    extensionConversations.value = extensionConversations.value.map(
      (i) => i.id === item.id ? item : i
    );
  } else {
    extensionConversations.value = [...extensionConversations.value, item];
  }
  return () => {
    extensionConversations.value = extensionConversations.value.filter((i) => i.id !== item.id);
  };
}
function updateConversationItem(id, updates) {
  extensionConversations.value = extensionConversations.value.map(
    (item) => item.id === id ? { ...item, ...updates } : item
  );
}
function setActiveExtension(extensionId) {
  activeExtensionId.value = extensionId;
  activeConversationId.value = "";
}const conversations = d$1([
  {
    id: "dollars",
    type: "channel",
    title: "Re:Dollars",
    avatar: "https://lsky.ry.mk/i/2025/09/06/68bc5540a8c51.webp",
    lastMessage: { text: "", timestamp: 0 },
    unreadCount: 0
  }
]);
const activeConversationId = d$1("dollars");
function shouldPersistConversation(conversationId) {
  return conversationId === "dollars" || /^pm:\d+$/.test(conversationId);
}
function setActiveConversation(conversationId) {
  activeConversationId.value = conversationId;
  if (shouldPersistConversation(conversationId)) {
    saveActiveConversationId(conversationId);
  }
  if (activeExtensionId.value !== null) {
    const activeExt = extensionConversations.value.find(
      (item) => item.id === activeExtensionId.value
    );
    if (activeExt?.onDeactivate) {
      activeExt.onDeactivate();
    }
    activeExtensionId.value = null;
  }
}
function restoreActiveConversation() {
  const savedConversationId = loadActiveConversationId();
  if (!savedConversationId || !shouldPersistConversation(savedConversationId)) return;
  if (activeConversationId.value === savedConversationId) return;
  setActiveConversation(savedConversationId);
}
function updateConversationLastMessage(conversationId, text, timestamp) {
  const updated = conversations.value.map(
    (conv) => conv.id === conversationId ? { ...conv, lastMessage: { text, timestamp } } : conv
  );
  updated.sort((a, b) => (b.lastMessage.timestamp || 0) - (a.lastMessage.timestamp || 0));
  conversations.value = updated;
}const scrollButtonMode = d$1("to-bottom");
const isChatOpen = d$1(false);
const isLoadingHistory = d$1(false);
const historyFullyLoaded = d$1(false);
const historyOldestId = d$1(null);
const historyNewestId = d$1(null);
const timelineIsLive = d$1(true);
const isContextLoading = d$1(false);
const initialMessagesLoaded = d$1(false);
const unreadWhileScrolled = d$1(0);
const unreadJumpList = d$1([]);
const searchQuery = d$1("");
const currentDateLabel = d$1(null);
const showScrollBottomBtn = d$1(false);
const newMessageIds = d$1(/* @__PURE__ */ new Set());
const pendingJumpToMessage = d$1(null);
const pendingScrollToBottom = d$1(false);
const manualScrollToBottom = d$1(0);
const isAtBottom = d$1(true);
const wsConnected = d$1(false);
const onlineUsers = d$1(/* @__PURE__ */ new Map());
const onlineCount = d$1(0);
const typingUsers = d$1(/* @__PURE__ */ new Map());
function toggleChat(open, skipSave = false) {
  const newState = open ?? !isChatOpen.value;
  if (newState) {
    restoreActiveConversation();
  }
  isChatOpen.value = newState;
  if (!skipSave) {
    saveChatOpenState(newState);
  }
}function getChiiApp() {
  return chiiApp;
}function joinUrl(base, path = "") {
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
function apiUrl(path, query) {
  const url = joinUrl(BACKEND_API_URL, path);
  if (!query) return url;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === null || value === void 0) continue;
    params.set(key, String(value));
  }
  const search = params.toString();
  if (!search) return url;
  return `${url}${url.includes("?") ? "&" : "?"}${search}`;
}
function uploadApiUrl(path = "") {
  if (!path) return UPLOAD_API_URL;
  if (path === "/batch") return `${UPLOAD_API_URL}/batch`;
  return joinUrl(UPLOAD_API_URL, path);
}
function fileUploadApiUrl() {
  return FILE_UPLOAD_API_URL;
}
function absoluteUploadUrl(url) {
  if (url.startsWith("http")) return url;
  return joinUrl(UPLOAD_BASE_URL, url);
}function mentionSearchUrl(query, limit) {
  return apiUrl("/users/search", { q: query, exact: true, limit });
}
async function searchMentionUsers(query, limit) {
  try {
    const res = await fetch(mentionSearchUrl(query, limit));
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.data) ? json.data : [];
  } catch (e) {
    return [];
  }
}
async function fetchUserProfile(userId) {
  try {
    const res = await fetch(apiUrl(`/users/${userId}`));
    const data = await res.json();
    if (data.status && data.data) {
      const d = data.data;
      return {
        id: d.id,
        nickname: d.nickname,
        username: d.username,
        avatar: d.avatar?.large || d.avatar?.medium || d.avatar?.small || "",
        sign: d.sign,
        url: d.url,
        lastActive: d.stats?.last_message_time ? Math.floor(Date.parse(d.stats.last_message_time) / 1e3) : void 0,
        stats: d.stats
      };
    }
  } catch (e) {
  }
  return null;
}
async function fetchBangumiUserProfile(username) {
  try {
    const res = await fetch(`https://api.bgm.tv/v0/users/${encodeURIComponent(username)}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data?.id && data?.username) {
      return {
        id: data.id,
        nickname: data.nickname || data.username,
        username: data.username,
        avatar: data.avatar?.large || data.avatar?.medium || data.avatar?.small || "",
        sign: data.sign || void 0,
        url: data.url || `https://bgm.tv/user/${data.username}`,
        source: "bangumi"
      };
    }
  } catch (e) {
  }
  return null;
}
async function lookupUsersByName(usernames) {
  try {
    const res = await fetch(apiUrl("/users/lookup-by-name"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernames })
    });
    if (!res.ok) return {};
    const data = await res.json();
    return data.data || {};
  } catch (e) {
    return {};
  }
}const browserWindow$1 = typeof window !== "undefined" ? window : void 0;
const isLoggedIn = d$1(false);
const userInfo = d$1({
  id: browserWindow$1?.CHOBITS_UID?.toString() || "",
  name: browserWindow$1?.CHOBITS_USERNAME || "",
  nickname: "",
  avatar: "",
  formhash: ""
});
const settings = d$1({
  showCard: true,
  linkPreview: true,
  sendShortcut: "CtrlEnter",
  sharePresence: false,
  notificationType: "off",
  pmNoticeOpensRD: false,
  loadImages: true,
  rememberOpenState: false,
  backgroundMode: "tint",
  glassBlur: true
});
const blockedUsers = d$1(/* @__PURE__ */ new Set());
async function initializeBlockedUsers() {
  const list = window.data_ignore_users || [];
  if (!list.length) return;
  const newBlockedUsers = /* @__PURE__ */ new Set();
  let cache = {};
  let cacheDirty = false;
  try {
    const cloudSettings = getChiiApp().cloud_settings.getAll();
    if (cloudSettings?.dollars_blocked_cache) {
      cache = JSON.parse(cloudSettings.dollars_blocked_cache);
    }
  } catch {
  }
  const usernamesToResolve = [];
  for (const u of list) {
    const uStr = String(u);
    if (/^\d+$/.test(uStr)) {
      newBlockedUsers.add(uStr);
    } else {
      if (cache[uStr]) {
        newBlockedUsers.add(String(cache[uStr]));
      } else {
        usernamesToResolve.push(uStr);
      }
    }
  }
  if (usernamesToResolve.length) {
    try {
      const resolved = await lookupUsersByName(usernamesToResolve);
      for (const username of usernamesToResolve) {
        const user = resolved[username];
        if (!user?.id) continue;
        const id = String(user.id);
        newBlockedUsers.add(id);
        cache[username] = id;
        cacheDirty = true;
      }
    } catch {
    }
  }
  blockedUsers.value = newBlockedUsers;
  if (cacheDirty) {
    try {
      const cloud = getChiiApp().cloud_settings;
      cloud.update({ dollars_blocked_cache: JSON.stringify(cache) });
      cloud.save();
    } catch (e) {
    }
  }
}
function initUserInfo() {
  const nicknameEl = document.querySelector("#dock .content ul li:first-child a span");
  const avatarEl = document.querySelector(".avatarNeue.avatarSize32");
  const formhashEl = document.querySelector('input[name="formhash"]');
  userInfo.value = {
    ...userInfo.value,
    nickname: nicknameEl?.textContent?.trim() || window.CHOBITS_USERNAME || "",
    avatar: avatarEl?.style.backgroundImage?.slice(5, -2) || "",
    formhash: formhashEl?.value || ""
  };
}
function loadSettingsFromCloud() {
  const cloudSettings = getChiiApp().cloud_settings.getAll();
  if (!cloudSettings) return;
  const defaults = settings.peek();
  const newSettings = { ...defaults };
  for (const key in cloudSettings) {
    if (key in defaults) {
      const defaultValue = defaults[key];
      if (typeof defaultValue === "boolean") {
        newSettings[key] = cloudSettings[key] === "true";
      } else {
        newSettings[key] = cloudSettings[key];
      }
    }
  }
  settings.value = newSettings;
}
function saveSettings() {
  const cloud = getChiiApp().cloud_settings;
  const settingsToSave = {};
  const currentSettings = settings.peek();
  for (const key in currentSettings) {
    settingsToSave[key] = String(currentSettings[key]);
  }
  cloud.update(settingsToSave);
  cloud.save();
}
function getToken() {
  try {
    return getChiiApp()?.cloud_settings?.getAll?.()?.dollarsAuthToken || null;
  } catch {
    return null;
  }
}
function getAuthHeaders() {
  const token = getToken();
  return token ? { "Authorization": `Bearer ${token}` } : {};
}
function isJwtToken(token) {
  return /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(token);
}
function getUploadAuthHeaders() {
  const token = getToken();
  return token && isJwtToken(token) ? { "Authorization": `Bearer ${token}` } : {};
}const panels = {
  smiley: [d$1(false), d$1(false), 200],
  contextMenu: [d$1(false), d$1(false), 150],
  reactionPicker: [d$1(false), d$1(false), 150],
  userProfile: [d$1(false), d$1(false), 250],
  search: [d$1(false)],
  imageViewer: [d$1(false)]
};
const isSmileyPanelOpen = panels.smiley[0];
const isSmileyPanelClosing = panels.smiley[1];
const isContextMenuOpen = panels.contextMenu[0];
const isContextMenuClosing = panels.contextMenu[1];
const isReactionPickerOpen = panels.reactionPicker[0];
const isReactionPickerClosing = panels.reactionPicker[1];
const isUserProfilePanelOpen = panels.userProfile[0];
const isUserProfilePanelClosing = panels.userProfile[1];
const isSearchActive = panels.search[0];
const isImageViewerOpen = panels.imageViewer[0];
const searchGalleryMode = d$1(false);
const contextMenuPosition = d$1({ x: 0, y: 0 });
const contextMenuTargetId = d$1(null);
const contextMenuImageUrl = d$1(null);
const contextMenuBmoCode = d$1(null);
const userProfilePanelUserId = d$1(null);
const imageViewerItems = d$1([]);
const imageViewerIndex = d$1(0);
const imageViewerSource = d$1("generic");
const imageViewerTimelineState = d$1(null);
const reactionPickerPosition = d$1({ x: 0, y: 0, width: 280 });
function addPanel(id) {
  const panel = panels[id];
  panel[0].value = true;
  if (panel[1]) panel[1].value = false;
}
function removePanel(id) {
  const panel = panels[id];
  if (!panel[0].value) return;
  panel[0].value = false;
  if (panel[1]) panel[1].value = false;
}
function closeExclusiveGroup(except) {
  for (const id of ["smiley", "contextMenu"]) {
    if (id !== except && panels[id][0].value) {
      hidePanelImmediate(id);
    }
  }
}
function hidePanelImmediate(id) {
  removePanel(id);
  cleanupPanelState(id);
}
function cleanupPanelState(id) {
  switch (id) {
    case "contextMenu":
      contextMenuTargetId.value = null;
      contextMenuImageUrl.value = null;
      contextMenuBmoCode.value = null;
      break;
    case "userProfile":
      userProfilePanelUserId.value = null;
      break;
    case "imageViewer":
      imageViewerItems.value = [];
      imageViewerIndex.value = 0;
      imageViewerSource.value = "generic";
      imageViewerTimelineState.value = null;
      break;
  }
}
function showPanel(id) {
  if (id === "smiley" || id === "contextMenu") {
    closeExclusiveGroup(id);
  }
  addPanel(id);
}
function hidePanel(id) {
  const panel = panels[id];
  const open = panel[0];
  const closing = panel[1];
  if (!open.value || closing?.value) return;
  const duration = panel[2];
  if (duration) {
    closing.value = true;
    setTimeout(() => {
      removePanel(id);
      cleanupPanelState(id);
    }, duration);
  } else {
    removePanel(id);
    cleanupPanelState(id);
  }
}
function togglePanel(id, open) {
  const shouldOpen = open ?? !panels[id][0].value;
  if (shouldOpen) {
    showPanel(id);
  } else {
    hidePanel(id);
  }
}
function showContextMenu(x, y, targetId, imageUrl, bmoCode) {
  contextMenuPosition.value = { x, y };
  contextMenuTargetId.value = targetId;
  contextMenuImageUrl.value = imageUrl ?? null;
  contextMenuBmoCode.value = bmoCode ?? null;
  showPanel("contextMenu");
}
function hideContextMenu() {
  if (!isContextMenuOpen.value || isContextMenuClosing.value) return;
  hideReactionPicker();
  hidePanel("contextMenu");
}
function showReactionPicker(x, y, width) {
  reactionPickerPosition.value = { x, y, width: width || 280 };
  showPanel("reactionPicker");
}
function hideReactionPicker() {
  if (!isReactionPickerOpen.value || isReactionPickerClosing.value) return;
  hidePanel("reactionPicker");
}
function toggleSmileyPanel(open) {
  togglePanel("smiley", open);
}
function showUserProfile(userId) {
  userProfilePanelUserId.value = userId;
  showPanel("userProfile");
}
function hideUserProfile() {
  if (!isUserProfilePanelOpen.value || isUserProfilePanelClosing.value) return;
  hidePanel("userProfile");
}
function showImageViewer(images, index = 0, source = "generic", timeline) {
  imageViewerItems.value = images.map(
    (item) => typeof item === "string" ? { src: item } : item
  );
  imageViewerIndex.value = index;
  imageViewerSource.value = source;
  imageViewerTimelineState.value = source === "timeline" && timeline ? {
    ...timeline,
    beforeIndex: 0,
    afterIndex: 2147483647,
    hasOlder: true,
    hasNewer: true
  } : null;
  showPanel("imageViewer");
}
function hideImageViewer() {
  removePanel("imageViewer");
  cleanupPanelState("imageViewer");
}
function toggleSearch(active) {
  togglePanel("search", active);
}const browserWindow = typeof window !== "undefined" ? window : void 0;
const isMobileViewport = d$1((browserWindow?.innerWidth || 1024) <= 768);
const isNarrowLayout = d$1(false);
const isMaximized = d$1(false);
const mobileChatViewActive = d$1(loadWindowState().mobileChatViewActive ?? false);
const chatLayoutReady = d$1(false);
const inputAreaHeight = d$1(60);
browserWindow?.addEventListener?.("resize", () => {
  isMobileViewport.value = browserWindow.innerWidth <= 768;
});
function toggleMaximize() {
  isMaximized.value = !isMaximized.value;
  if (settings.value.rememberOpenState) {
    saveMaximizedState(isMaximized.value);
  }
}
function setMobileChatView(active) {
  mobileChatViewActive.value = active;
  if (settings.value.rememberOpenState) {
    saveMobileChatViewState(active);
  }
}
function resetLayoutCheck() {
  chatLayoutReady.value = false;
}
function checkNarrowLayout(width) {
  isNarrowLayout.value = width < 600 || isMobileViewport.value;
}
function ensureNarrowLayoutChatView(width) {
  isNarrowLayout.value = width < 600 || isMobileViewport.value;
  chatLayoutReady.value = true;
}function currentBangumiUid() {
  return window.CHOBITS_UID ? String(window.CHOBITS_UID) : null;
}
function isCurrentUser(user) {
  const uid = currentBangumiUid();
  return !uid || String(user.id) === uid;
}
function normalizeAuthUser(user) {
  if (!user?.id) return null;
  return {
    id: String(user.id),
    nickname: String(user.nickname || ""),
    avatar: String(user.avatar || "")
  };
}
async function fetchCurrentAuthUser() {
  const res = await fetch(apiUrl("/auth/me"), {
    headers: getAuthHeaders(),
    credentials: "include"
  });
  const data = await res.json();
  const user = normalizeAuthUser(data.user);
  if (data.status && user && isCurrentUser(user)) {
    return { isLoggedIn: true, user };
  }
  return { isLoggedIn: false };
}
async function restoreSessionFromToken(token) {
  const loginRes = await fetch(apiUrl("/auth/token-login"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
    credentials: "include"
  });
  const loginData = await loginRes.json();
  const user = normalizeAuthUser(loginData.user);
  if (loginData.status && user && isCurrentUser(user)) {
    return { isLoggedIn: true, user };
  }
  return { isLoggedIn: false };
}
async function checkAuth() {
  const token = getToken();
  if (!token) return { isLoggedIn: false };
  try {
    const currentUser = await fetchCurrentAuthUser();
    if (currentUser.isLoggedIn) {
      return currentUser;
    }
    return await restoreSessionFromToken(token);
  } catch {
  }
  return { isLoggedIn: false };
}
async function saveToken(token) {
  const cloud = getChiiApp()?.cloud_settings;
  if (cloud) {
    cloud.update({ dollarsAuthToken: token });
    cloud.save();
  }
}
async function loginBackendWithToken(token) {
  const res = await fetch(apiUrl("/auth/token-login"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
    credentials: "include"
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.status || !data.token) {
    return { isLoggedIn: false, error: data.message || data.error || "登录失败" };
  }
  await saveToken(token);
  return { isLoggedIn: true, user: data.user };
}
function performLogin() {
  const width = 600, height = 700;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  const nonce = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const authUrl = `${AUTH_BASE_URL}/api/auth/bangumi/start?mode=popup&client=${encodeURIComponent(AUTH_CLIENT)}&origin=${encodeURIComponent(window.location.origin)}&state=${encodeURIComponent(nonce)}`;
  const loginWindow = window.open(authUrl, "rymk-auth", `width=${width},height=${height},top=${top},left=${left}`);
  if (!loginWindow) return;
  const authOrigin = new URL(AUTH_BASE_URL).origin;
  const watchTimer = window.setInterval(() => {
    if (loginWindow.closed) {
      window.clearInterval(watchTimer);
      window.removeEventListener("message", messageHandler);
    }
  }, 600);
  const messageHandler = (event) => {
    const data = event.data || {};
    if (event.origin === authOrigin && data.type === "rymk_auth" && data.state === nonce) {
      window.clearInterval(watchTimer);
      window.removeEventListener("message", messageHandler);
      loginWindow.close();
      if (data.ok && data.token) {
        loginBackendWithToken(data.token).then((result) => {
          if (result.isLoggedIn) {
            window.location.reload();
          } else {
            window.alert(result.error || "授权 token 无法被 Re:Dollars 后端验证");
          }
        });
      }
    }
  };
  window.addEventListener("message", messageHandler);
}
async function performLogout() {
  try {
    await fetch(apiUrl("/auth/logout"), {
      method: "POST",
      credentials: "include"
    });
    const cloud = getChiiApp()?.cloud_settings;
    if (cloud) {
      cloud.delete("dollarsAuthToken");
      cloud.save();
    }
    window.location.reload();
  } catch (e) {
  }
}const settingsConfig = [
  {
    key: "auth_control_group",
    type: "auth_control_group",
    label: "Bangumi 授权"
  },
  {
    key: "showCard",
    type: "checkbox",
    label: "首页显示 Re:Dollars 卡片",
    onchange: applyHomeCardDisplay
  },
  {
    key: "linkPreview",
    type: "checkbox",
    label: "启用链接预览"
  },
  {
    key: "sharePresence",
    type: "checkbox",
    label: "分享在线状态"
  },
  {
    key: "notificationType",
    type: "radio",
    label: "消息通知",
    options: {
      detail: "详细",
      simple: "精简",
      off: "关闭"
    }
  },
  {
    key: "pmNoticeOpensRD",
    type: "checkbox",
    label: "短信通知跳转到 RD"
  },
  {
    key: "loadImages",
    type: "checkbox",
    label: "默认加载图片"
  },
  {
    key: "rememberOpenState",
    type: "checkbox",
    label: "记忆窗口状态",
    onchange: handleRememberOpenStateChange
  },
  {
    key: "sendShortcut",
    type: "radio",
    label: "发送快捷键",
    options: {
      CtrlEnter: "Ctrl+Enter 发送",
      Enter: "Enter 发送"
    }
  },
  {
    key: "backgroundMode",
    type: "radio",
    label: "主题背景",
    options: {
      transparent: "透明",
      lines: "线条",
      tint: "色调"
    },
    onchange: applyBackgroundPattern
  },
  {
    key: "glassBlur",
    type: "checkbox",
    label: "玻璃模糊",
    onchange: applyGlassBlur
  }
];
const PANEL_TAB = "dollars_chat_settings";
let nativeSettingsPanelRegistered = false;
let nativeSettingsPanelRetryTimer;
let settingsHeaderButtonBound = false;
let authControlConfig = null;
function getUkagaka() {
  return window.chiiLib?.ukagaka;
}
function authDisplayName() {
  return userInfo.value.nickname || userInfo.value.name || userInfo.value.id || "当前用户";
}
function currentAuthControlValue() {
  return isLoggedIn.value ? "auth_state" : "";
}
function authControlOptions() {
  return isLoggedIn.value ? [
    { value: "auth_state", label: `已鉴权：${authDisplayName()}` },
    { value: "logged_out", label: "撤销鉴权" }
  ] : [
    { value: "oauth_login", label: "OAuth 鉴权" }
  ];
}
function createAuthControlConfig() {
  return {
    title: "Bangumi 授权",
    name: "dollars_auth_action",
    type: "radio",
    defaultValue: currentAuthControlValue(),
    getCurrentValue: currentAuthControlValue,
    onChange: async (value) => {
      if (value === "oauth_login") {
        performLogin();
      } else if (value === "logged_out") {
        performLogout();
      }
    },
    options: authControlOptions()
  };
}
function syncAuthControlConfig() {
  if (!authControlConfig) return;
  authControlConfig.defaultValue = currentAuthControlValue();
  authControlConfig.options = authControlOptions();
}
function applyHomeCardDisplay() {
  const card = document.getElementById("xu");
  if (card) {
    card.style.display = settings.value.showCard ? "" : "none";
  }
}
function applyBackgroundPattern() {
  const root = document.getElementById("xa");
  if (root) {
    root.dataset.bgMode = settings.value.backgroundMode;
    root.classList.remove("no-background-pattern");
  }
}
function applyGlassBlur() {
  const root = document.getElementById("xa");
  if (root) {
    if (settings.value.glassBlur) {
      root.classList.remove("disable-blur");
    } else {
      root.classList.add("disable-blur");
    }
  }
}
function handleRememberOpenStateChange() {
  if (!settings.value.rememberOpenState) {
    clearWindowState();
  } else {
    saveChatOpenState(isChatOpen.value);
    saveMaximizedState(isMaximized.value);
    saveMobileChatViewState(mobileChatViewActive.value);
  }
}
function applyAllSettings() {
  applyHomeCardDisplay();
  applyBackgroundPattern();
  applyGlassBlur();
}
function generateApiConfig() {
  return settingsConfig.map((s) => {
    if (s.type === "auth_control_group") {
      authControlConfig = authControlConfig || createAuthControlConfig();
      syncAuthControlConfig();
      return authControlConfig;
    } else if (s.type === "checkbox") {
      return {
        title: s.label,
        name: s.key,
        type: "radio",
        defaultValue: String(settings.value[s.key] ?? true),
        getCurrentValue: () => String(settings.value[s.key]),
        onChange: (value) => {
          settings.value = {
            ...settings.peek(),
            [s.key]: value === "true"
          };
          saveSettings();
          if (s.onchange) s.onchange();
        },
        options: [
          { value: "true", label: "开启" },
          { value: "false", label: "关闭" }
        ]
      };
    } else if (s.type === "radio" && s.options) {
      return {
        title: s.label,
        name: s.key,
        type: "radio",
        defaultValue: String(settings.value[s.key] ?? Object.keys(s.options)[0]),
        getCurrentValue: () => String(settings.value[s.key]),
        onChange: (value) => {
          settings.value = {
            ...settings.peek(),
            [s.key]: value
          };
          saveSettings();
          if (s.onchange) s.onchange();
        },
        options: Object.entries(s.options).map(([value, label]) => ({ value, label }))
      };
    }
    return null;
  }).filter((x) => x !== null);
}
function refreshNativeSettingsPanelAuthState() {
  syncAuthControlConfig();
  if (!authControlConfig) return;
  const ukagaka = getUkagaka();
  const section = document.getElementById("section-dollars_auth_action");
  if (!section || typeof ukagaka?.generateOptionsTabContent !== "function") return;
  const container = document.createElement("div");
  container.innerHTML = ukagaka.generateOptionsTabContent([authControlConfig]);
  const nextSection = container.querySelector("#section-dollars_auth_action");
  if (!nextSection) return;
  section.replaceWith(nextSection);
  ukagaka.bindConfigChangeEvents?.([authControlConfig]);
}
function integrateWithNativeSettingsPanel() {
  if (nativeSettingsPanelRegistered) return;
  const ukagaka = getUkagaka();
  if (!ukagaka || typeof ukagaka.addPanelTab !== "function") {
    if (nativeSettingsPanelRetryTimer === void 0) {
      nativeSettingsPanelRetryTimer = window.setTimeout(() => {
        nativeSettingsPanelRetryTimer = void 0;
        integrateWithNativeSettingsPanel();
      }, 500);
    }
    return;
  }
  const apiConfig = generateApiConfig();
  ukagaka.addPanelTab({
    tab: PANEL_TAB,
    label: "Re:Dollars",
    type: "options",
    config: apiConfig
  });
  nativeSettingsPanelRegistered = true;
  const settingsBtnHeader = document.getElementById("dollars-settings-btn-header");
  if (settingsBtnHeader && !settingsHeaderButtonBound) {
    settingsHeaderButtonBound = true;
    settingsBtnHeader.title = "打开聊天设置";
    settingsBtnHeader.addEventListener("click", (e) => {
      e.stopPropagation();
      openSettingsPanel();
    });
  }
}
function openSettingsPanel() {
  integrateWithNativeSettingsPanel();
  const ukagaka = getUkagaka();
  if (ukagaka && typeof ukagaka.showCustomizePanelWithTab === "function") {
    ukagaka.showCustomizePanelWithTab(PANEL_TAB);
  }
}const isMobile = () => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
const escapeHTML = (str) => (str || "").replace(/[&<>"']/g, (m) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[m] || m);
const decodeHTML = (str) => {
  const div = document.createElement("div");
  div.innerHTML = String(str ?? "");
  return div.textContent || "";
};
const formatDate = (ts, fmt = "time") => {
  const d = new Date(ts * 1e3);
  const pad = (n) => String(n).padStart(2, "0");
  if (fmt === "key") return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  if (fmt === "time") return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  if (fmt === "full") return d.toLocaleString("zh-CN", { hour12: false }).replace(/\//g, "-");
  const diff = Math.round(((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(d).setHours(0, 0, 0, 0)) / 864e5);
  if (diff === 0) return "今天";
  if (diff === 1) return "昨天";
  if (diff > 1 && diff < 7) return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][d.getDay()];
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const isActiveToday = (lastMessageTime) => {
  if (!lastMessageTime) return false;
  const ts = new Date(lastMessageTime).getTime() / 1e3;
  return formatDate(ts, "label") === "今天";
};
const stripBBCode = (t) => t?.replace(/\[.*?\]/g, "").replace(/\s+/g, " ").trim() || "";
const getAvatarUrl = (avatar, size = "l", fallback = "icon.jpg") => {
  if (!avatar || typeof avatar !== "string") {
    return `//lain.bgm.tv/pic/user/${size}/${fallback}`;
  }
  if (avatar.includes("//")) {
    return avatar.replace(/\/pic\/user\/[sml]\//, `/pic/user/${size}/`);
  }
  const cleanPath = avatar.replace(/^\/+/, "");
  return `https://lain.bgm.tv/pic/user/${size}/${cleanPath}`;
};
function debounce(fn, delay = 400) {
  let t;
  return ((...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  });
}
const calculateImageStyle = (meta) => {
  if (meta?.width && meta?.height) {
    const MAX_IMG_WIDTH = 320;
    const MAX_IMG_HEIGHT = 250;
    let w = Number(meta.width);
    let h = Number(meta.height);
    if (w > MAX_IMG_WIDTH) {
      h = MAX_IMG_WIDTH / w * h;
      w = MAX_IMG_WIDTH;
    }
    if (h > MAX_IMG_HEIGHT) {
      w = MAX_IMG_HEIGHT / h * w;
      h = MAX_IMG_HEIGHT;
    }
    return `aspect-ratio: ${meta.width} / ${meta.height}; width: ${Math.round(w)}px; max-width: 100%;`;
  }
  return `aspect-ratio: 1 / 1; width: 200px; max-width: 100%;`;
};
const getThumbnailUrl = (url) => {
  if (!url || typeof url !== "string") return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "lsky.ry.mk") return url;
    if (!parsed.pathname.startsWith("/i/") || parsed.pathname.startsWith("/i/thumbs/")) return url;
    parsed.pathname = `/i/thumbs/${parsed.pathname.slice("/i/".length)}`;
    return parsed.toString();
  } catch {
    return url;
  }
};
const generateReactionTooltip = (users) => {
  return users.map(
    ({ id, user_id, nickname }) => `<a href="/user/${user_id ?? id}" target="_blank" class="xt">${escapeHTML(nickname)}</a>`
  ).join("、");
};const musumeSmileyIds = [
  ...Array.from({ length: 96 }, (_, index) => index + 1),
  ...Array.from({ length: 20 }, (_, index) => index + 99)
];
const blakeSmileyIds = Array.from({ length: 118 }, (_, index) => index + 1);
const musumeSmileySections = [
  {
    name: "情绪反应",
    ids: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 100, 106, 108, 118]
  },
  {
    name: "动作道具",
    ids: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 101, 102, 103, 99, 107, 112, 109, 110, 111, 113, 114, 115, 116, 117]
  },
  {
    name: "日常状态",
    ids: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 104, 105, 94, 95, 96]
  },
  {
    name: "提示反馈",
    ids: [1, 2, 3, 4, 5]
  }
];
const blakeSmileySections = [
  musumeSmileySections[0],
  musumeSmileySections[1],
  {
    name: "得分反馈",
    ids: [97, 98]
  },
  musumeSmileySections[2],
  musumeSmileySections[3]
];
const groupedSmileySections = {
  Musume: musumeSmileySections,
  Blake: blakeSmileySections
};
function getRangeIds(range) {
  if (range.ids) return range.ids;
  if (range.start == null || range.end == null) return [];
  return Array.from({ length: range.end - range.start + 1 }, (_, index) => range.start + index);
}
function rangeIncludesId(range, id) {
  return getRangeIds(range).includes(id);
}
function formatSmileyCode(prefix, id, codePad) {
  const num = codePad ? String(id).padStart(codePad, "0") : String(id);
  return `(${prefix}${num})`;
}
const smileyRanges = [
  {
    name: "TV",
    start: 24,
    end: 125,
    path: (id) => `/img/smiles/tv/${String(id - 23).padStart(2, "0")}.gif`
  },
  {
    name: "BGM",
    start: 1,
    end: 23,
    path: (id) => {
      const ext = id === 11 || id === 23 ? "gif" : "png";
      return `/img/smiles/bgm/${String(id).padStart(2, "0")}.${ext}`;
    }
  },
  {
    name: "VS",
    start: 200,
    end: 238,
    path: (id) => `/img/smiles/tv_vs/bgm_${id}.png`
  },
  {
    name: "500",
    start: 500,
    end: 529,
    path: (id) => {
      const gifIds = /* @__PURE__ */ new Set([500, 501, 505, 515, 516, 517, 518, 519, 521, 522, 523]);
      const ext = gifIds.has(id) ? "gif" : "png";
      return `/img/smiles/tv_500/bgm_${id}.${ext}`;
    }
  },
  {
    name: "Musume",
    ids: musumeSmileyIds,
    codePrefix: "musume_",
    codePad: 2,
    tabIconId: 3,
    isLarge: true,
    path: (id) => `/img/smiles/musume/musume_${String(id).padStart(2, "0")}.gif`
  },
  {
    name: "Blake",
    ids: blakeSmileyIds,
    codePrefix: "blake_",
    codePad: 2,
    tabIconId: 3,
    isLarge: true,
    path: (id) => `/img/smiles/blake/blake_${String(id).padStart(2, "0")}.gif`
  },
  { name: "BMO" },
  { name: "收藏" }
];
const smileyRangesWithoutFavorites = smileyRanges.filter((r) => r.name !== "收藏" && !r.isLarge);
function getSmileyUrl(code) {
  if (typeof code === "string") {
    const largeSmileyMatch = code.match(/\(((?:musume_|blake_))(\d+)\)/);
    if (largeSmileyMatch) {
      const [, prefix, rawId] = largeSmileyMatch;
      const id2 = parseInt(rawId, 10);
      const range3 = smileyRanges.find((r) => r.codePrefix === prefix && rangeIncludesId(r, id2));
      return range3?.path?.(id2) ?? null;
    }
    const bgmMatch = code.match(/\(bgm(\d+)\)/);
    if (!bgmMatch) return null;
    const id = parseInt(bgmMatch[1], 10);
    const range2 = smileyRanges.find((r) => !r.codePrefix && r.start && r.end && id >= r.start && id <= r.end);
    return range2?.path?.(id) ?? null;
  }
  const range = smileyRanges.find((r) => !r.codePrefix && r.start && r.end && code >= r.start && code <= r.end);
  return range?.path?.(code) ?? null;
}
function generateSmileyCodes(groupName) {
  const range = smileyRanges.find((r) => r.name === groupName);
  if (!range) return [];
  const prefix = range.codePrefix || "bgm";
  const ids = getRangeIds(range);
  return ids.map((id) => formatSmileyCode(prefix, id, range.codePad));
}
function getGroupedSmileyCodes(groupName) {
  const range = smileyRanges.find((r) => r.name === groupName);
  const sections = groupedSmileySections[groupName];
  if (!range || !sections) return [];
  const prefix = range.codePrefix || "bgm";
  return sections.map((section) => ({
    name: section.name,
    items: section.ids.filter((id) => rangeIncludesId(range, id)).map((id) => ({
      id,
      code: formatSmileyCode(prefix, id, range.codePad)
    }))
  })).filter((section) => section.items.length > 0);
}const INLINE_TOKEN_REGEX = /\[(emoji|sticker)\]([\s\S]+?)\[\/\1\]|\(((?:musume_|blake_))(\d+)\)|\(bgm(\d+)\)|\((bmo(?:C|_)[a-zA-Z0-9_-]+)\)/gi;
function isValidInlineMediaUrl(src) {
  return /^https?:\/\/[^\s<>"']+$/i.test(src.trim());
}
function isInsideHtmlTag(text, index) {
  const before = text.slice(0, index);
  return before.lastIndexOf("<") > before.lastIndexOf(">");
}
function parseInlineTokenMatch(match) {
  const raw = match[0];
  const [, customTag, customSrc, largePrefix, , , bmoCode] = match;
  if (customTag && customSrc) {
    if (!isValidInlineMediaUrl(customSrc)) return null;
    const src2 = customSrc.trim();
    return {
      raw,
      type: "custom-image",
      src: src2,
      isCommunityEmoji: src2.includes("/emojis/")
    };
  }
  if (bmoCode) {
    return {
      raw,
      type: "bmo",
      code: raw
    };
  }
  const src = getSmileyUrl(raw);
  if (!src) return null;
  return {
    raw,
    type: "smiley",
    variant: largePrefix === "musume_" ? "musume" : largePrefix === "blake_" ? "blake" : "bgm",
    src
  };
}
function collectRenderableInlineTokenRaws(text) {
  const tokens = [];
  const matcher = new RegExp(INLINE_TOKEN_REGEX);
  let match;
  while ((match = matcher.exec(text)) !== null) {
    const token = parseInlineTokenMatch(match);
    if (token) {
      tokens.push(token.raw);
    }
  }
  return tokens;
}
function replaceInlineTokens(text, renderMatch, options = {}) {
  const matcher = new RegExp(INLINE_TOKEN_REGEX);
  const renderText = options.renderText || ((chunk) => chunk);
  let lastIndex = 0;
  let result = "";
  let match;
  while ((match = matcher.exec(text)) !== null) {
    result += renderText(text.slice(lastIndex, match.index));
    const raw = match[0];
    if (options.skipInsideHtml && isInsideHtmlTag(text, match.index)) {
      result += raw;
    } else {
      result += renderMatch(parseInlineTokenMatch(match), raw);
    }
    lastIndex = match.index + raw.length;
  }
  return result + renderText(text.slice(lastIndex));
}function getSmileyClassName(rawOrAlt, src = "", baseClass = "smiley") {
  let className = baseClass;
  if (/\(musume_\d+\)/i.test(rawOrAlt) || /\/smiles\/musume\//i.test(src)) {
    className += " smiley-musume";
  } else if (/\(blake_\d+\)/i.test(rawOrAlt) || /\/smiles\/blake\//i.test(src)) {
    className += " smiley-blake";
  }
  return className;
}
function renderInlineTokenHTML(token, raw) {
  if (!token) {
    return raw.startsWith("[") ? escapeHTML(raw) : raw;
  }
  switch (token.type) {
    case "custom-image": {
      const className = token.isCommunityEmoji ? "smiley" : "custom-emoji";
      return '<img src="' + escapeHTML(token.src) + '" class="' + className + '" alt="sticker" loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer">';
    }
    case "smiley": {
      const className = getSmileyClassName(token.raw, token.src);
      const size = token.variant === "bgm" ? ' width="21" height="21"' : "";
      return '<img src="' + escapeHTML(token.src) + '" class="' + className + '" alt="' + escapeHTML(token.raw) + '"' + size + ">";
    }
    case "bmo":
      return '<span class="bmo" data-code="' + escapeHTML(token.code) + '"></span>';
  }
}function renderImageMarkup(src, meta, { loaded = false, placeholder = false, masked = false } = {}) {
  const imageStyle = calculateImageStyle(meta);
  const metaWidth = meta?.width ?? "";
  const metaHeight = meta?.height ?? "";
  const safeSrc = escapeHTML(src);
  const displaySrc = escapeHTML(placeholder ? getThumbnailUrl(src) : src);
  const classes = `xW${placeholder ? " xY" : ""}${masked ? " xZ" : ""}`;
  const imageClasses = `xaa${placeholder || loaded ? " is-loaded" : ""}`;
  const dataSrc = masked ? ` data-src="${safeSrc}"` : "";
  const loadHint = masked ? '\n            <div class="xba">显示图片</div>' : "";
  return `<div class="${classes}" style="${imageStyle}" data-iw="${metaWidth}" data-ih="${metaHeight}"${dataSrc}>
            <img src="${displaySrc}" data-full-src="${safeSrc}" class="${imageClasses}" alt="image" loading="lazy" decoding="async" referrerpolicy="no-referrer">${loadHint}
        </div>`;
}
function renderAudioMarkup(src) {
  const safeSrc = escapeHTML(src);
  return `<div class="audio-player-container" style="margin: 5px 0;"><audio controls preload="metadata" style="max-width: 100%; width: 300px; border-radius: 20px;"><source src="${safeSrc}">您的浏览器不支持音频播放。</audio></div>`;
}
function renderVideoMarkup(src) {
  const safeSrc = escapeHTML(src);
  return `<div class="video-player-container" style="max-width: 100%; margin: 5px 0;"><video controls preload="metadata" style="max-width: 100%; max-height: 400px; border-radius: 8px; background: #000;"><source src="${safeSrc}" type="video/mp4"><source src="${safeSrc}" type="video/webm">您的浏览器不支持视频播放。</video></div>`;
}
function renderFileMarkup(src, label) {
  const safeSrc = escapeHTML(src);
  const safeLabel = escapeHTML(label.trim() || "附件");
  return `<a href="${safeSrc}" target="_blank" rel="noopener noreferrer" class="chat-file-link" download="${safeLabel}">${safeLabel}</a>`;
}const HTTP_URL_RE = /^https?:\/\/[^\s<>"']+$/i;
const MEDIA_WRAPPER_BREAK_RE = /(?:<br>\s*)*(\x00MEDIA_WRAPPER_\d+\x00)(?:\s*<br>)*/g;
function createPlaceholderStore(prefix) {
  const values = [];
  return {
    push(value) {
      values.push(value);
      return `\0${prefix}_${values.length - 1}\0`;
    },
    get(index) {
      return values[Number(index)];
    },
    resolve(source, render = (value) => value) {
      return source.replace(new RegExp(`\\x00${prefix}_(\\d+)\\x00`, "g"), (_, index) => render(values[Number(index)]));
    }
  };
}
function sanitizeHttpUrl(rawSrc) {
  const cleanSrc = rawSrc.replace(/<[^>]*>?/gm, "").trim();
  return HTTP_URL_RE.test(cleanSrc) ? cleanSrc : null;
}
function collectPreviewCard(url, options, linkPreviews) {
  if (options.isInsideQuote || !settings.value.linkPreview || !options.previewsCollector) {
    return;
  }
  const preview = linkPreviews[url];
  if (preview) {
    options.previewsCollector.push(generatePreviewCardHTML(preview, url));
  }
}
function normalizeBangumiUrl(url) {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    if (hostname === "bangumi.tv" || hostname === "bgm.tv" || hostname === "chii.in") {
      return urlObj.pathname + urlObj.search + urlObj.hash;
    }
  } catch (e) {
  }
  return url;
}
function generatePreviewCardHTML(data, originalUrl) {
  const normalizedUrl = normalizeBangumiUrl(originalUrl);
  const title = escapeHTML(data.title || originalUrl);
  const desc = data.description ? escapeHTML(data.description) : "";
  const domain = originalUrl.includes("//") ? originalUrl.split("/")[2].replace(/^www\\./, "") : "";
  let coverHTML = "";
  if (data.image) {
    coverHTML = `<div class="cover"><img src="${escapeHTML(data.image)}" loading="lazy" referrerPolicy="no-referrer"></div>`;
  } else {
    coverHTML = `<div class="cover"><div style="font-size: 32px; text-align: center; line-height: 80px; color: var(--xb);">🔗</div></div>`;
  }
  return `
        <a href="${escapeHTML(normalizedUrl)}" target="_blank" rel="noopener noreferrer" class="xr" data-entity-type="generic">
            ${coverHTML}
            <div class="inner">
                <p class="title" title="${title}">${title}</p>
                ${desc ? `<p class="info">${desc}</p>` : ""}
                <p class="rateInfo">${escapeHTML(domain)}</p>
            </div>
        </a>`;
}
function processBBCode(text, imageMeta = {}, options = {}, linkPreviews = {}) {
  let html = text;
  const codeBlocks = createPlaceholderStore("CODE_BLOCK");
  const imageBlocks = createPlaceholderStore("IMAGE_BLOCK");
  const mediaWrappers = createPlaceholderStore("MEDIA_WRAPPER");
  html = html.replace(/\[code\]([\s\S]*?)\[\/code\]/gi, (_, content) => {
    return codeBlocks.push(content);
  });
  html = html.replace(/(^|\s)(#[\p{L}\p{N}_]{1,50})(?=$|\s|[.,!?;:)])/gu, '$1<span class="chat-tag">$2</span>');
  const bbMap = { b: "strong", i: "em", u: "u", s: "s" };
  html = html.replace(
    /\[(b|i|u|s)\]([\s\S]+?)\[\/\1\]/gi,
    (_, tag, content) => `<${bbMap[tag.toLowerCase()]}>${processBBCode(content, imageMeta, { ...options, isInsideQuote: true }, linkPreviews)}</${bbMap[tag.toLowerCase()]}>`
  );
  html = html.replace(/\[mask\]([\s\S]+?)\[\/mask\]/gi, '<span class="text_mask"><span class="inner">$1</span></span>');
  html = html.replace(/<span class="text_mask"><span class="inner">\[img\]([\s\S]+?)\[\/img\]<\/span><\/span>/gi, (m, src) => {
    const cleanSrc = sanitizeHttpUrl(src);
    if (!cleanSrc) return escapeHTML(m);
    if (options.isInsideQuote) {
      return `<span class="text_mask"><span class="inner"><a href="${cleanSrc}" target="_blank">[图片]</a></span></span>`;
    }
    const meta = imageMeta[cleanSrc];
    return imageBlocks.push(renderImageMarkup(cleanSrc, meta, { placeholder: true, masked: true }));
  });
  html = html.replace(/\[audio\]([\s\S]+?)\[\/audio\]/gi, (m, src) => {
    const cleanSrc = sanitizeHttpUrl(src);
    if (!cleanSrc) return escapeHTML(m);
    if (options.isInsideQuote) {
      return `<a href="${cleanSrc}" target="_blank">[音频]</a>`;
    }
    return renderAudioMarkup(cleanSrc);
  });
  html = html.replace(/\[video\]([\s\S]+?)\[\/video\]/gi, (m, src) => {
    const cleanSrc = sanitizeHttpUrl(src);
    if (!cleanSrc) return escapeHTML(m);
    if (options.isInsideQuote) {
      return `<a href="${cleanSrc}" target="_blank">[视频]</a>`;
    }
    return renderVideoMarkup(cleanSrc);
  });
  html = html.replace(/\[file=(.*?)\]([\s\S]+?)\[\/file\]/gi, (m, label, src) => {
    const cleanSrc = sanitizeHttpUrl(src);
    if (!cleanSrc) return escapeHTML(m);
    const name = label.trim() || "附件";
    if (options.isInsideQuote) {
      return `<a href="${cleanSrc}" target="_blank">[附件] ${escapeHTML(name)}</a>`;
    }
    return renderFileMarkup(cleanSrc, name);
  });
  html = html.replace(/\[img\]([\s\S]+?)\[\/img\]/gi, (m, src) => {
    const cleanSrc = sanitizeHttpUrl(src);
    if (!cleanSrc) return escapeHTML(m);
    if (options.isInsideQuote) {
      return `<a href="${cleanSrc}" target="_blank">[图片]</a>`;
    }
    const meta = imageMeta[cleanSrc];
    if (!settings.value.loadImages) {
      return imageBlocks.push(renderImageMarkup(cleanSrc, meta, { placeholder: true }));
    }
    return imageBlocks.push(renderImageMarkup(cleanSrc, meta));
  });
  html = html.replace(/\[user=(.+?)\]([\s\S]+?)\[\/user\]/gi, '<a href="/user/$1" target="_blank" class="user-mention">@$2</a>');
  html = replaceInlineTokens(html, renderInlineTokenHTML, { skipInsideHtml: true });
  html = html.replace(/\[url=([^\]]+?)\]([\s\S]+?)\[\/url\]/gi, (_, url, label) => {
    const normalizedUrl = normalizeBangumiUrl(url);
    const linkHtml = `<a href="${escapeHTML(normalizedUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    collectPreviewCard(url, options, linkPreviews);
    return linkHtml;
  });
  html = html.replace(/\[quote(?:=(\d+))?\]([\s\S]*?)\[\/quote\]\n?/gi, (_, id, content) => {
    if (options.replyDetails) return "";
    if (!content.trim()) return "";
    const attrs = id ? `data-jump-to-id="${id}" title="点击跳转到原文"` : "";
    const processedContent = processBBCode(content, imageMeta, { ...options, isInsideQuote: true }, linkPreviews);
    return `<blockquote class="chat-quote" ${attrs}><div class="quote-content" style="white-space: pre-wrap;">${processedContent}</div></blockquote>`;
  });
  html = html.replace(/(https?:\/\/[^\s<>"'\]\[]+)/g, (url, _g1, offset, str) => {
    const before = str.slice(0, offset);
    const after = str.slice(offset + url.length);
    if (before.endsWith(">") && after.startsWith("</a>") || before.endsWith('src="') && after.startsWith('"')) return url;
    const lastOpen = before.lastIndexOf("<");
    const lastClose = before.lastIndexOf(">");
    if (lastOpen > lastClose) return url;
    const normalizedUrl = normalizeBangumiUrl(url);
    const linkHtml = `<a href="${normalizedUrl}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    collectPreviewCard(url, options, linkPreviews);
    return linkHtml;
  });
  html = html.replace(/(<\/blockquote>)<br\s*\/?>/gi, "$1");
  html = html.replace(/\n/g, "<br>");
  html = html.replace(/(\x00IMAGE_BLOCK_\d+\x00(?:\s*<br\s*\/?>\s*)?)+/g, (match) => {
    const indices = [...match.matchAll(/\x00IMAGE_BLOCK_(\d+)\x00/g)].map((m) => m[1]);
    const content = indices.map((idx) => imageBlocks.get(idx)).join("");
    if (indices.length === 1) {
      return mediaWrappers.push(`<div class="xV">${content}</div>`);
    }
    return mediaWrappers.push(`<div class="xV"><div class="xU" style="--media-count: ${indices.length}">${content}</div></div>`);
  });
  html = html.replace(MEDIA_WRAPPER_BREAK_RE, "$1");
  html = mediaWrappers.resolve(html);
  html = codeBlocks.resolve(html, (content) => `<div class="codeHighlight"><pre>${escapeHTML(content)}</pre></div>`);
  return html;
}
function processQuoteMasks(text) {
  let escaped = escapeHTML(text);
  escaped = escaped.replace(/\[mask\]([\s\S]+?)\[\/mask\]/gi, '<span class="text_mask"><span class="inner">$1</span></span>');
  return escaped;
}
function renderReplyQuote(details, replyToId) {
  let content = stripQuotes(details.content).replace(/\[file=.*?\].*?\[\/file\]/gi, "[附件]").replace(/\[mask\]\s*\[\/mask\]/gi, "");
  const isTruncated = content.length > 80;
  content = content.substring(0, 80);
  if (isTruncated) {
    content = content.replace(/\[\/?[a-zA-Z]*$/g, "");
    const openCount = (content.match(/\[mask\]/gi) || []).length;
    const closeCount = (content.match(/\[\/mask\]/gi) || []).length;
    if (openCount > closeCount) {
      content += "[/mask]";
    }
  }
  const parsedContent = processQuoteMasks(content);
  const avatarSrc = getAvatarUrl(details.avatar, "s");
  const imageClasses = `quote-thumbnail${details.firstImageMasked ? " xZ" : ""}`;
  const imageHTML = details.firstImage ? `<img src="${details.firstImage}" class="${imageClasses}" loading="lazy">` : "";
  const avatarHTML = details.firstImage ? "" : `<img src="${avatarSrc}" class="quote-avatar" loading="lazy">`;
  return `<blockquote class="chat-quote" data-jump-to-id="${replyToId}" data-quote-uid="${details.uid}" title="点击跳转到原文">${imageHTML}<div class="quote-text-wrapper"><div class="quote-header">${avatarHTML}<span class="quote-nickname">${escapeHTML(details.nickname)}</span></div><div class="quote-content">${parsedContent}${isTruncated ? "..." : ""}</div></div></blockquote>`;
}
function stripQuotes(text) {
  return (text || "").replace(/\[quote(?:=\d+)?\][\s\S]*?\[\/quote\]/gi, "").trim();
}const FALLBACK_ORIGIN = "https://bangumi.tv";
const BLOCKED_TAGS = /* @__PURE__ */ new Set(["IFRAME", "MATH", "OBJECT", "SCRIPT", "STYLE", "SVG", "TEMPLATE"]);
const STYLE_TO_BBCODE = [
  [/font-weight\s*:\s*(?:bold|bolder|[6-9]00)/i, "b"],
  [/font-style\s*:\s*italic/i, "i"],
  [/text-decoration[^;]*\bline-through\b/i, "s"],
  [/text-decoration[^;]*\bunderline\b/i, "u"]
];
class BangumiPmParseError extends Error {
}
function parseDocument(html) {
  return new DOMParser().parseFromString(html, "text/html");
}
function getOrigin() {
  return typeof window !== "undefined" && window.location?.origin ? window.location.origin : FALLBACK_ORIGIN;
}
function toSameOriginPmPath(value, baseUrl = getOrigin()) {
  try {
    const url = new URL(value, baseUrl);
    if (!url.pathname.startsWith("/pm")) return null;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return null;
  }
}
function safeResourceUrl(value, baseUrl) {
  try {
    const url = new URL(value, baseUrl);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.href;
  } catch {
    return null;
  }
}
function avatarFrom(element, baseUrl) {
  const avatar = element?.querySelector(".avatarNeue") ?? element;
  const styleValue = avatar?.style.backgroundImage || avatar?.getAttribute("style") || "";
  const match = styleValue.match(/url\(["']?(.+?)["']?\)/i);
  return match ? safeResourceUrl(match[1], baseUrl) || "" : "";
}
function parsePmTimestamp(value) {
  const match = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const [, year, month, day, hour, minute] = match;
  const timestamp = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute)
  ).getTime() / 1e3;
  return Number.isFinite(timestamp) ? timestamp : null;
}
function wrapBBCode(tag, content) {
  return content ? `[${tag}]${content}[/${tag}]` : "";
}
function mediaUrl(element, baseUrl) {
  const raw = element.getAttribute("src") || element.querySelector("source")?.getAttribute("src") || "";
  return safeResourceUrl(raw, baseUrl);
}
function presentSpan(element, content) {
  if (!content) return content;
  if (element.classList.contains("text_mask") || element.classList.contains("mask")) {
    return wrapBBCode("mask", content);
  }
  const style = element.getAttribute("style") || "";
  for (const [pattern, tag] of STYLE_TO_BBCODE) {
    if (pattern.test(style)) return wrapBBCode(tag, content);
  }
  return content;
}
function pmPresentationText(source, baseUrl) {
  if (source.nodeType === Node.TEXT_NODE) return source.textContent || "";
  if (!(source instanceof Element)) return "";
  if (BLOCKED_TAGS.has(source.tagName)) return "";
  const content = Array.from(source.childNodes).map((node) => pmPresentationText(node, baseUrl)).join("");
  switch (source.tagName) {
    case "BR":
      return "\n";
    case "IMG": {
      if (source.classList.contains("smile")) return source.getAttribute("alt") || "";
      const src = safeResourceUrl(source.getAttribute("src") || "", baseUrl);
      return src ? `[img]${src}[/img]` : "";
    }
    case "BLOCKQUOTE":
      return wrapBBCode("quote", content);
    case "PRE":
      return wrapBBCode("code", source.textContent || "");
    case "CODE":
      return source.parentElement?.tagName === "PRE" ? content : wrapBBCode("code", content);
    case "VIDEO": {
      const src = mediaUrl(source, baseUrl);
      return src ? `[video]${src}[/video]` : "";
    }
    case "AUDIO": {
      const src = mediaUrl(source, baseUrl);
      return src ? `[audio]${src}[/audio]` : "";
    }
    case "A": {
      const href = safeResourceUrl(source.getAttribute("href") || "", baseUrl);
      if (!href) return content;
      return content.trim() === href ? href : `[url=${href}]${content}[/url]`;
    }
    case "B":
    case "STRONG":
      return wrapBBCode("b", content);
    case "I":
    case "EM":
      return wrapBBCode("i", content);
    case "U":
      return wrapBBCode("u", content);
    case "S":
    case "DEL":
    case "STRIKE":
      return wrapBBCode("s", content);
    case "SPAN":
      return presentSpan(source, content);
    default:
      return content;
  }
}
function renderPmBody(presentationText) {
  return processBBCode(escapeHTML(presentationText), {}, {}, {});
}
function extractForm(form, baseUrl) {
  const fields = {};
  for (const control of Array.from(form.elements)) {
    if (!(control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement || control instanceof HTMLSelectElement)) continue;
    if (!control.name || control.disabled) continue;
    if (control instanceof HTMLInputElement) {
      if ((control.type === "checkbox" || control.type === "radio") && !control.checked) continue;
      if (control.type === "submit" || control.type === "button" || control.type === "file") continue;
    }
    fields[control.name] = control.value;
  }
  return {
    action: toSameOriginPmPath(form.action || "/pm/create.chii", baseUrl) || "/pm/create.chii",
    fields
  };
}
function ensurePmPage(document) {
  if (document.querySelector("#loginForm") || document.querySelector('input[name="email"][type="text"]')) {
    throw new BangumiPmParseError("Bangumi 登录已失效");
  }
}
function findNextConversationPage(document, baseUrl) {
  const current = new URL(baseUrl, FALLBACK_ORIGIN);
  const currentPage = Number.parseInt(current.searchParams.get("page") || "1", 10);
  const candidates = Array.from(document.querySelectorAll("#pm_pager a")).flatMap((link) => {
    const path = toSameOriginPmPath(link.href, baseUrl);
    if (!path) return [];
    const page = Number.parseInt(new URL(link.href, baseUrl).searchParams.get("page") || "", 10);
    return Number.isFinite(page) && page > currentPage ? [{ path, page }] : [];
  }).sort((a, b) => a.page - b.page);
  return candidates[0]?.path || null;
}
function parsePmInbox(html, baseUrl = getOrigin()) {
  const document = parseDocument(html);
  ensurePmPage(document);
  const container = document.querySelector("#contentPM");
  if (!container) throw new BangumiPmParseError("无法识别 Bangumi 短信列表");
  const conversations = Array.from(container.querySelectorAll("a.pm-conversation-item")).flatMap((item) => {
    const path = toSameOriginPmPath(item.href, baseUrl);
    const id = path?.match(/^\/pm\/conversation\/(\d+)\.chii/)?.[1];
    if (!path || !id) return [];
    return [{
      id,
      href: path,
      nickname: item.querySelector(".pm-conversation-name")?.textContent?.trim() || "",
      avatar: avatarFrom(item, baseUrl),
      dateText: item.querySelector(".pm-conversation-date")?.textContent?.trim() || "",
      lastMessage: item.querySelector(".pm-conversation-desc")?.textContent?.trim() || "",
      unreadCount: Number.parseInt(item.querySelector(".pm-conversation-unread")?.textContent || "0", 10) || 0
    }];
  });
  return { conversations, nextPageUrl: findNextConversationPage(document, baseUrl) };
}
function parsePmConversation(html, baseUrl) {
  const document = parseDocument(html);
  ensurePmPage(document);
  const list = document.querySelector(".pm-message-list");
  const id = new URL(baseUrl, FALLBACK_ORIGIN).pathname.match(/^\/pm\/conversation\/(\d+)\.chii/)?.[1] || document.querySelector("a.pm-conversation-item.selected")?.href.match(/\/conversation\/(\d+)\.chii/)?.[1];
  if (!list || !id) throw new BangumiPmParseError("无法识别 Bangumi 短信会话");
  const peerLink = document.querySelector('.pm-chat-title strong a[href*="/user/"]');
  const username = peerLink?.pathname.match(/^\/user\/(.+)$/)?.[1] || "";
  const messages = [];
  let topic;
  for (const child of Array.from(list.children)) {
    if (child.classList.contains("pm-thread-label")) {
      topic = child.textContent?.trim() || void 0;
      continue;
    }
    if (!child.classList.contains("pm-message")) continue;
    const messageId = child.id.match(/^msg_(\d+)$/)?.[1];
    const body = child.querySelector(".pm-message-body");
    if (!messageId || !body) continue;
    const userLink = child.querySelector('a[href*="/user/"]');
    const info = child.querySelector(".pm-message-info small")?.textContent || "";
    const timestampText = info.split("/")[0]?.trim() || "";
    const presentationText = Array.from(body.childNodes).map((node) => pmPresentationText(node, baseUrl)).join("").trim();
    messages.push({
      id: messageId,
      isSelf: child.classList.contains("pm-message-self"),
      avatar: avatarFrom(child, baseUrl),
      userHref: userLink ? new URL(userLink.href, baseUrl).pathname : "",
      bodyHtml: renderPmBody(presentationText),
      bodyText: body.textContent?.trim() || "",
      presentationText,
      timestamp: parsePmTimestamp(timestampText),
      timestampText,
      topic
    });
  }
  const formElement = document.querySelector("#pmReplyForm");
  return {
    id,
    nickname: peerLink?.textContent?.trim() || "",
    username: decodeURIComponent(username),
    avatar: avatarFrom(document.querySelector(".pm-chat-header"), baseUrl),
    messages,
    replyForm: formElement ? extractForm(formElement, baseUrl) : null
  };
}
function parsePmComposeForm(html, baseUrl) {
  const document = parseDocument(html);
  ensurePmPage(document);
  const form = document.querySelector('#pmForm, form[action*="/pm/create.chii"]');
  if (!form) throw new BangumiPmParseError("无法识别 Bangumi 短信表单");
  const parsed = extractForm(form, baseUrl);
  return { form: parsed, receiver: parsed.fields.msg_receivers || "" };
}
function findPmError(html) {
  const document = parseDocument(html);
  if (document.querySelector("#loginForm")) return "Bangumi 登录已失效";
  const error = document.querySelector(".error, .message, .alert, #robot_speech_js");
  const text = error?.textContent?.trim();
  return text && /错误|失败|拒绝|不存在|不能为空|无权限|频繁/.test(text) ? text : null;
}const HTML_HEADERS = { Accept: "text/html,application/xhtml+xml" };
async function fetchHtml(path, init = {}) {
  const response = await fetch(path, {
    ...init,
    credentials: "same-origin",
    headers: { ...HTML_HEADERS, ...init.headers }
  });
  const html = await response.text();
  return { response, html };
}
async function fetchPmInbox(path = "/pm/inbox.chii", signal) {
  const safePath = toSameOriginPmPath(path);
  if (!safePath || !safePath.startsWith("/pm/inbox") && !safePath.startsWith("/pm/conversation/")) {
    throw new Error("无效的 Bangumi 短信列表地址");
  }
  const { response, html } = await fetchHtml(safePath, { signal });
  if (!response.ok) throw new Error(`Bangumi 短信列表请求失败 (${response.status})`);
  return parsePmInbox(html, response.url || new URL(safePath, window.location.origin).href);
}
async function fetchPmConversation(path, signal) {
  const safePath = toSameOriginPmPath(path);
  if (!safePath?.startsWith("/pm/conversation/")) throw new Error("无效的 Bangumi 短信地址");
  const { response, html } = await fetchHtml(safePath, { signal });
  if (!response.ok) throw new Error(`Bangumi 短信会话请求失败 (${response.status})`);
  return parsePmConversation(html, response.url || new URL(safePath, window.location.origin).href);
}
async function fetchPmComposeForm(signal) {
  const { response, html } = await fetchHtml("/pm/compose.chii", { signal });
  if (!response.ok) throw new Error(`Bangumi 短信表单请求失败 (${response.status})`);
  return parsePmComposeForm(html, response.url || new URL("/pm/compose.chii", window.location.origin).href);
}
async function submitPm(fields, action) {
  const params = new URLSearchParams(fields);
  params.set("submit", "发送");
  let result;
  try {
    result = await fetchHtml(action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: params
    });
  } catch {
    return { status: "unknown", error: "网络异常，短信可能已经发送" };
  }
  if (!result.response.ok) {
    return { status: "unknown", error: `Bangumi 返回 ${result.response.status}，短信状态未知` };
  }
  const error = findPmError(result.html);
  if (error) return { status: "rejected", error };
  try {
    return {
      status: "sent",
      detail: parsePmConversation(result.html, result.response.url || window.location.origin)
    };
  } catch {
    return { status: "unknown", error: "未能确认 Bangumi 的发送结果" };
  }
}
function sendPmReply(detail, body) {
  if (!detail.replyForm) {
    return Promise.resolve({ status: "rejected", error: "当前会话缺少回复表单" });
  }
  return submitPm({ ...detail.replyForm.fields, msg_body: body }, detail.replyForm.action);
}
async function createPm(receiver, title, body) {
  let compose;
  try {
    compose = await fetchPmComposeForm();
  } catch (error) {
    return { status: "rejected", error: error instanceof Error ? error.message : "无法加载短信表单" };
  }
  return submitPm({
    ...compose.form.fields,
    msg_receivers: receiver,
    msg_title: title,
    msg_body: body
  }, compose.form.action);
}async function fetchNotify(signal) {
  const response = await fetch(`/json/notify?_=${Date.now()}`, {
    credentials: "same-origin",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "X-Requested-With": "XMLHttpRequest"
    },
    signal
  });
  if (!response.ok) throw new Error(`Bangumi 通知请求失败 (${response.status})`);
  const data = await response.json();
  const pmList = Array.isArray(data?.pm_list) ? data.pm_list.flatMap((item) => {
    const id = item?.conversation_id != null ? String(item.conversation_id) : "";
    if (!id) return [];
    return [{
      id,
      peerUid: Number(item.peer_uid) || 0,
      peerName: typeof item.peer_name === "string" ? item.peer_name : "",
      title: typeof item.title === "string" ? item.title : "",
      unreadCount: Number(item.unread_count) || 0,
      href: item.url && toSameOriginPmPath(item.url) || `/pm/conversation/${id}.chii`
    }];
  }) : [];
  return {
    pmCount: Number(data?.pm_count) || 0,
    pmList,
    pmIgnoreUrl: typeof data?.pm_ignore_url === "string" ? toSameOriginPmPath(data.pm_ignore_url) : null
  };
}function createOptimisticStableKey(prefix = "temp") {
  return `${prefix}-${Math.random().toString(36).slice(2)}`;
}
function optimisticTimestamp(lastTimestamp = 0, now = Date.now()) {
  return Math.max(Math.floor(now / 1e3), lastTimestamp || 0);
}
function isSending(item, adapter) {
  return adapter.state(item) === "sending";
}
function isLocal(item, adapter) {
  const state = adapter.state(item);
  return state === "sending" || state === "failed";
}
function sameContentAndSender(local, incoming, adapter) {
  return adapter.senderKey(local) === adapter.senderKey(incoming) && adapter.contentKey(local) === adapter.contentKey(incoming);
}
function sameTimeWindow(local, incoming, adapter, seconds) {
  const localTime = adapter.timestamp?.(local);
  const incomingTime = adapter.timestamp?.(incoming);
  if (localTime == null || incomingTime == null) return true;
  return incomingTime >= localTime - seconds;
}
function takeOptimisticMatchFromMap(map, incoming, adapter, options = {}) {
  if (options.stableKey) {
    for (const [id, item] of map) {
      if (isSending(item, adapter) && adapter.stableKey(item) === options.stableKey) {
        map.delete(id);
        return { matchedId: id, stableKey: adapter.stableKey(item) };
      }
    }
  }
  let matchedId;
  for (const [id, item] of map) {
    if (isSending(item, adapter) && sameContentAndSender(item, incoming, adapter) && (matchedId === void 0 || options.prefer?.(id, matchedId))) {
      matchedId = id;
    }
  }
  if (matchedId !== void 0) {
    const stableKey = adapter.stableKey(map.get(matchedId));
    map.delete(matchedId);
    return { matchedId, stableKey };
  }
  return {};
}
function mergeOptimisticList(current, incoming, adapter, options = {}) {
  const locals = (current || []).filter((item) => isLocal(item, adapter));
  if (locals.length === 0) return incoming;
  const usedLocals = /* @__PURE__ */ new Set();
  const timeWindow = options.timestampWindowSeconds ?? Number.POSITIVE_INFINITY;
  let changed = false;
  const mergedIncoming = incoming.map((item) => {
    if (options.isIncomingCandidate && !options.isIncomingCandidate(item)) return item;
    const matchedIndex = locals.findIndex(
      (local, index) => !usedLocals.has(index) && sameContentAndSender(local, item, adapter) && sameTimeWindow(local, item, adapter, timeWindow)
    );
    if (matchedIndex < 0) return item;
    usedLocals.add(matchedIndex);
    if (!options.mergeMatched) return item;
    changed = true;
    return options.mergeMatched(item, locals[matchedIndex]);
  });
  const unmatchedLocals = locals.filter((_, index) => !usedLocals.has(index));
  return unmatchedLocals.length > 0 ? [...mergedIncoming, ...unmatchedLocals] : changed ? mergedIncoming : incoming;
}function updateSignalMap(sig, fn) {
  const next = new Map(sig.value);
  fn(next);
  sig.value = next;
}
function updateSignalSet(sig, fn) {
  const next = new Set(sig.value);
  fn(next);
  sig.value = next;
}const parseMessages = (data) => {
  const arr = Array.isArray(data) ? data : data?.messages || data?.results || [];
  return arr.map(normalizeMessage$1);
};
const normalizeMessage$1 = (m) => {
  if (m.id != null) m.id = Number(m.id);
  if (m.uid != null) m.uid = Number(m.uid);
  if (m.reply_to_id != null) m.reply_to_id = Number(m.reply_to_id);
  if (m.reply_details?.uid != null) m.reply_details.uid = Number(m.reply_details.uid);
  return m;
};
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function confirmSentMessage(content, attempts = 12) {
  const uid = userInfo.value.id;
  if (!uid) return void 0;
  for (let attempt = 0; attempt < attempts; attempt++) {
    if (attempt > 0) await delay(Math.min(250 + attempt * 125, 1e3));
    try {
      const res = await fetch(apiUrl("/messages/confirm"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, message: content })
      });
      if (!res.ok) continue;
      const data = await res.json();
      if (data.status && data.found && data.message) {
        return normalizeMessage$1(data.message);
      }
    } catch (e) {
    }
  }
  return void 0;
}
async function fetchRecentMessages(limit = 50) {
  const res = await fetch(apiUrl("/messages", { limit }));
  if (!res.ok) return [];
  return parseMessages(await res.json());
}
async function fetchHistoryMessages(beforeId, limit = 30) {
  const res = await fetch(apiUrl("/messages", { before_id: beforeId, limit }));
  if (!res.ok) return [];
  return parseMessages(await res.json());
}
async function fetchNewerMessages(afterId, limit = 30) {
  const res = await fetch(apiUrl("/messages", { since_db_id: afterId, limit }));
  if (!res.ok) return [];
  return parseMessages(await res.json());
}
async function getUnreadCount(sinceId, uid) {
  try {
    const res = await fetch(apiUrl("/messages/unread-count", { since_db_id: sinceId, uid }));
    if (!res.ok) return null;
    const data = await res.json();
    return {
      count: data.count || 0,
      latest_id: data.latest_id || 0
    };
  } catch (e) {
    return null;
  }
}
async function fetchMessageContext(messageId, before = 30, after = 30) {
  const res = await fetch(apiUrl(`/messages/context/${messageId}`, { before, after, extended: 1 }));
  if (!res.ok) return null;
  const data = await res.json();
  return {
    messages: parseMessages(data.messages || data),
    target_id: data.target_id ?? messageId,
    target_index: data.target_index ?? 0,
    has_more_before: data.has_more_before ?? true,
    has_more_after: data.has_more_after ?? true
  };
}
async function postChatMessage(content) {
  const params = new URLSearchParams();
  params.append("message", content);
  params.append("formhash", userInfo.value.formhash);
  let res;
  try {
    res = await fetch("/dollars?ajax=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: params
    });
  } catch {
    return "unknown";
  }
  if (!res.ok) return "unknown";
  const data = await res.json().catch(() => null);
  return data?.status === "ok" ? "sent" : "rejected";
}
async function getFirstMessageIdByDate(date) {
  try {
    const res = await fetch(apiUrl("/messages/by-date", { date, first_id_only: true }));
    if (!res.ok) return null;
    const data = await res.json();
    return data.status ? data.id : null;
  } catch (e) {
    return null;
  }
}
async function editMessage(messageId, content) {
  const res = await fetch(apiUrl(`/messages/${messageId}`), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders()
    },
    credentials: "include",
    body: JSON.stringify({ content })
  });
  if (!res.ok) return { status: false, error: `HTTP ${res.status}` };
  return res.json();
}
async function deleteMessage$1(messageId) {
  const res = await fetch(apiUrl(`/messages/${messageId}`), {
    method: "DELETE",
    headers: getAuthHeaders(),
    credentials: "include"
  });
  if (!res.ok) return { status: false, error: `HTTP ${res.status}` };
  return res.json();
}
async function toggleReaction(messageId, emoji) {
  const res = await fetch(apiUrl(`/messages/${messageId}/reactions`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders()
    },
    credentials: "include",
    body: JSON.stringify({
      emoji,
      user_id: userInfo.value.id,
      nickname: userInfo.value.nickname
    })
  });
  if (!res.ok) return { status: false };
  return res.json();
}
async function searchMessages(query, offset = 0, limit = 20) {
  const res = await fetch(
    apiUrl("/search", { q: query, offset, limit })
  );
  const data = await res.json();
  if (data.status) {
    return {
      messages: data.results || [],
      hasMore: data.hasMore || false
    };
  }
  return { messages: [], hasMore: false };
}
async function fetchNotifications(uid) {
  try {
    const res = await fetch(apiUrl("/notifications", { uid }));
    const data = await res.json();
    if (data.status && data.notifications) {
      return data.notifications;
    }
  } catch (e) {
  }
  return [];
}
async function markNotificationRead(notifId, uid) {
  await fetch(apiUrl(`/notifications/${notifId}/read`), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid })
  });
}
async function markAllNotificationsRead(uid) {
  await fetch(apiUrl("/notifications/read-all"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid })
  });
}const dollarsNotifications = d$1([]);
const pmNotificationCards = d$1([]);
const dockIconFlashing = d$1(false);
const notificationCardCount = w(
  () => dollarsNotifications.value.length + pmNotificationCards.value.length
);
function notificationMessageId(notification) {
  return Number(notification.message_id || notification.message?.id || 0);
}
function syncUnreadJumpList() {
  unreadJumpList.value = dollarsNotifications.value.map(notificationMessageId).filter((id) => Number.isFinite(id) && id > 0).sort((a, b) => a - b);
}
function shouldFlashDock() {
  return settings.value.notificationType === "simple";
}
function stopDockFlashing() {
  dockIconFlashing.value = false;
}
async function loadDollarsNotifications() {
  if (!userInfo.value.id) return;
  const data = await fetchNotifications(userInfo.value.id);
  if (!Array.isArray(data) || !data.length) return;
  const existingIds = new Set(dollarsNotifications.peek().map((item) => item.id));
  const incoming = data.filter((item) => !existingIds.has(item.id));
  if (!incoming.length) return;
  dollarsNotifications.value = [...incoming.reverse(), ...dollarsNotifications.peek()];
  syncUnreadJumpList();
  if (shouldFlashDock()) {
    dockIconFlashing.value = true;
  }
}
function addDollarsNotification(notification) {
  if (dollarsNotifications.peek().some((item) => item.id === notification.id)) return;
  dollarsNotifications.value = [notification, ...dollarsNotifications.peek()];
  syncUnreadJumpList();
  if (shouldFlashDock()) {
    dockIconFlashing.value = true;
  }
}
function removeDollarsNotification(id) {
  if (!dollarsNotifications.peek().some((item) => item.id === id)) return;
  dollarsNotifications.value = dollarsNotifications.peek().filter((item) => item.id !== id);
  syncUnreadJumpList();
}
function clearDollarsNotifications() {
  if (dollarsNotifications.peek().length) {
    dollarsNotifications.value = [];
  }
  unreadJumpList.value = [];
  dockIconFlashing.value = false;
}
function addPmNotification(item, avatar = "") {
  const card = {
    id: item.id,
    href: item.href,
    nickname: item.peerName,
    avatar,
    title: item.title,
    unreadCount: item.unreadCount
  };
  const rest = pmNotificationCards.peek().filter((existing) => existing.id !== item.id);
  pmNotificationCards.value = [card, ...rest];
}
function dismissPmNotification(id) {
  if (!pmNotificationCards.peek().some((item) => item.id === id)) return;
  pmNotificationCards.value = pmNotificationCards.peek().filter((item) => item.id !== id);
}
function clearPmNotifications() {
  if (pmNotificationCards.peek().length) {
    pmNotificationCards.value = [];
  }
}
function prunePmNotifications(unreadIds) {
  if (!pmNotificationCards.peek().some((card) => !unreadIds.has(card.id))) return;
  pmNotificationCards.value = pmNotificationCards.peek().filter((card) => unreadIds.has(card.id));
}
async function markDollarsNotificationRead(notification) {
  removeDollarsNotification(notification.id);
  if (!userInfo.value.id) return;
  try {
    await markNotificationRead(notification.id, userInfo.value.id);
  } catch {
  }
}
async function markAllNotificationCardsRead() {
  clearDollarsNotifications();
  clearPmNotifications();
  if (!userInfo.value.id) return;
  try {
    await markAllNotificationsRead(userInfo.value.id);
  } catch {
  }
}
function markMessageAsSeenIfNotified(messageId) {
  const notification = dollarsNotifications.peek().find((item) => notificationMessageId(item) === messageId);
  if (!notification) return;
  removeDollarsNotification(notification.id);
  if (userInfo.value.id) {
    markNotificationRead(notification.id, userInfo.value.id).catch(() => {
    });
  }
}const pmConversations = d$1([]);
const pmDetails = d$1({});
const pmInboxLoading = d$1(false);
const pmMoreInboxLoading = d$1(false);
const pmInboxError = d$1("");
const pmNextInboxPage = d$1(null);
const pmDetailLoading = d$1(false);
const pmDetailError = d$1("");
const pmComposeReceiver = d$1("");
const pmNewMessageIds = d$1(/* @__PURE__ */ new Set());
const pmUnreadCount = d$1(0);
const pmUnreadByConversation = d$1({});
function isSameUnreadMap(a, b) {
  const keysA = Object.keys(a);
  if (keysA.length !== Object.keys(b).length) return false;
  return keysA.every((key) => a[key] === b[key]);
}
function markPmConversationRead(id) {
  const prev = pmUnreadByConversation.peek()[id] || 0;
  if (prev <= 0) return;
  const next = { ...pmUnreadByConversation.peek() };
  delete next[id];
  pmUnreadByConversation.value = next;
  pmUnreadCount.value = Math.max(0, pmUnreadCount.peek() - prev);
}
let inboxRequest = null;
const detailRequests = /* @__PURE__ */ new Map();
let hasLoadedMoreInboxPages = false;
let lastInboxLoadedAt = 0;
const lastDetailLoadedAt = /* @__PURE__ */ new Map();
let nextOptimisticPmId = -1;
const pmOptimisticAdapter = {
  state: (message) => message.state,
  stableKey: (message) => message.stableKey,
  contentKey: (message) => normalizePmMessageText(message.rawBody || message.presentationText || message.bodyText),
  senderKey: (message) => message.isSelf ? "self" : message.userHref || "peer",
  timestamp: (message) => message.timestamp
};
const PM_INBOX_REFRESH_INTERVAL = 12e4;
const PM_DETAIL_REFRESH_INTERVAL = 3e4;
const PM_NOTIFY_POLL_INTERVAL_OPEN = 5e3;
const PM_NOTIFY_POLL_INTERVAL_IDLE = 15e3;
function pmNotifySignature(notify) {
  const conversations = notify.pmList.map((item) => `${item.id}:${item.unreadCount}`).sort().join(",");
  return `${notify.pmCount}|${conversations}`;
}
function arePmConversationsEqual(current, next) {
  return current.length === next.length && current.every((item, index) => {
    const candidate = next[index];
    return candidate && item.id === candidate.id && item.href === candidate.href && item.nickname === candidate.nickname && item.avatar === candidate.avatar && item.dateText === candidate.dateText && item.lastMessage === candidate.lastMessage && item.unreadCount === candidate.unreadCount;
  });
}
function arePmFormsEqual(current, next) {
  if (!current || !next) return current === next;
  const currentFields = Object.entries(current.fields);
  const nextFields = Object.entries(next.fields);
  return current.action === next.action && currentFields.length === nextFields.length && currentFields.every(([key, value]) => next.fields[key] === value);
}
function arePmDetailsEqual(current, next) {
  return !!current && current.id === next.id && current.nickname === next.nickname && current.username === next.username && current.avatar === next.avatar && arePmFormsEqual(current.replyForm, next.replyForm) && current.messages.length === next.messages.length && current.messages.every((message, index) => {
    const candidate = next.messages[index];
    return candidate && message.id === candidate.id && message.isSelf === candidate.isSelf && message.avatar === candidate.avatar && message.userHref === candidate.userHref && message.bodyHtml === candidate.bodyHtml && message.bodyText === candidate.bodyText && message.presentationText === candidate.presentationText && message.timestamp === candidate.timestamp && message.timestampText === candidate.timestampText && message.topic === candidate.topic && message.state === candidate.state && message.stableKey === candidate.stableKey;
  });
}
function normalizePmMessageText(value) {
  return (value || "").replace(/\s+/g, " ").trim();
}
function mergeLocalPmMessages(current, next) {
  const currentById = new Map((current?.messages || []).map((message) => [message.id, message]));
  const messages = mergeOptimisticList(current?.messages, next.messages, pmOptimisticAdapter, {
    isIncomingCandidate: (message) => message.isSelf,
    timestampWindowSeconds: 60,
    mergeMatched: (incoming, local) => local.stableKey ? { ...incoming, stableKey: local.stableKey, state: "sent" } : incoming
  }).map((message) => {
    const currentMessage = currentById.get(message.id);
    return currentMessage?.stableKey && !message.stableKey ? { ...message, stableKey: currentMessage.stableKey, state: currentMessage.state === "sent" ? "sent" : message.state } : message;
  });
  return messages === next.messages ? next : { ...next, messages: [...messages] };
}
function markPmMessageNew(id) {
  updateSignalSet(pmNewMessageIds, (set) => set.add(id));
  setTimeout(() => updateSignalSet(pmNewMessageIds, (set) => set.delete(id)), NEW_MESSAGE_ANIMATION);
}
function setPmDetail(id, detail) {
  const current = pmDetails.peek()[id];
  const merged = mergeLocalPmMessages(current, detail);
  if (!arePmDetailsEqual(current, merged)) {
    pmDetails.value = { ...pmDetails.peek(), [id]: merged };
  }
  if (current) {
    const currentIds = new Set(current.messages.map((message) => message.id));
    const currentStableKeys = new Set(current.messages.map((message) => message.stableKey).filter(Boolean));
    for (const message of merged.messages) {
      if (currentIds.has(message.id)) continue;
      if (message.stableKey && currentStableKeys.has(message.stableKey)) continue;
      markPmMessageNew(message.id);
    }
  }
}
function renderOptimisticPmBody(body) {
  return processBBCode(escapeHTML(body), {}, {}, {});
}
function selfPmAvatar(detail) {
  return [...detail.messages].reverse().find((message) => message.isSelf)?.avatar || userInfo.peek().avatar || "";
}
function selfPmHref(detail) {
  return [...detail.messages].reverse().find((message) => message.isSelf)?.userHref || (window.CHOBITS_USERNAME ? `/user/${window.CHOBITS_USERNAME}` : "");
}
function addOptimisticPmMessage(id, body) {
  const detail = pmDetails.peek()[id];
  if (!detail) return null;
  const lastTimestamp = detail.messages[detail.messages.length - 1]?.timestamp || 0;
  const timestamp = optimisticTimestamp(lastTimestamp);
  const stableKey = createOptimisticStableKey("pm-temp");
  const message = {
    id: `temp-${nextOptimisticPmId--}`,
    isSelf: true,
    avatar: selfPmAvatar(detail),
    userHref: selfPmHref(detail),
    bodyHtml: renderOptimisticPmBody(body),
    bodyText: body,
    presentationText: body,
    timestamp,
    timestampText: "发送中",
    stableKey,
    rawBody: body,
    state: "sending"
  };
  pmDetails.value = {
    ...pmDetails.peek(),
    [id]: { ...detail, messages: [...detail.messages, message] }
  };
  markPmMessageNew(message.id);
  return message.id;
}
function updateLocalPmMessage(id, messageId, updates) {
  const detail = pmDetails.peek()[id];
  if (!detail) return;
  pmDetails.value = {
    ...pmDetails.peek(),
    [id]: {
      ...detail,
      messages: detail.messages.map(
        (message) => message.id === messageId ? { ...message, ...updates } : message
      )
    }
  };
}
function localPmMessage(id, messageId) {
  return pmDetails.peek()[id]?.messages.find((message) => message.id === messageId);
}
async function finishPmReply(id, tempId, result) {
  if (result.status === "sent") {
    setPmDetail(id, result.detail);
    lastDetailLoadedAt.set(id, Date.now());
    void loadPmInbox(true);
  } else if (result.status === "unknown") {
    await loadPmDetail(id, void 0, true);
  } else {
    updateLocalPmMessage(id, tempId, { state: "failed", timestampText: "发送失败" });
  }
}
function isBangumiLoggedIn() {
  return Number(window.CHOBITS_UID || 0) > 0;
}
function activePmId() {
  return activeConversationId.value.match(/^pm:(\d+)$/)?.[1] || null;
}
function shouldLoadPmInbox() {
  if (!chatLayoutReady.peek()) return false;
  if (!isNarrowLayout.peek()) return true;
  return !mobileChatViewActive.peek();
}
function loadPmInbox(force = false) {
  if (!isBangumiLoggedIn()) {
    pmConversations.value = [];
    return Promise.resolve();
  }
  if (inboxRequest) return inboxRequest;
  if (!force && lastInboxLoadedAt && Date.now() - lastInboxLoadedAt < PM_INBOX_REFRESH_INTERVAL) {
    return Promise.resolve();
  }
  const isInitialLoad = pmConversations.peek().length === 0;
  if (isInitialLoad) {
    pmInboxLoading.value = true;
    pmInboxError.value = "";
  }
  inboxRequest = fetchPmInbox().then((page) => {
    let nextConversations = page.conversations;
    if (hasLoadedMoreInboxPages) {
      const firstPageIds = new Set(page.conversations.map((item) => item.id));
      nextConversations = [
        ...page.conversations,
        ...pmConversations.peek().filter((item) => !firstPageIds.has(item.id))
      ];
    } else {
      pmNextInboxPage.value = page.nextPageUrl;
    }
    if (!arePmConversationsEqual(pmConversations.peek(), nextConversations)) {
      pmConversations.value = nextConversations;
    }
    lastInboxLoadedAt = Date.now();
    if (pmInboxError.peek()) pmInboxError.value = "";
  }).catch((error) => {
    pmInboxError.value = error instanceof Error ? error.message : "短信列表加载失败";
  }).finally(() => {
    if (isInitialLoad) pmInboxLoading.value = false;
    inboxRequest = null;
  });
  return inboxRequest;
}
async function loadMorePmConversations() {
  const path = pmNextInboxPage.value;
  if (!path || pmMoreInboxLoading.value) return;
  pmMoreInboxLoading.value = true;
  pmInboxError.value = "";
  try {
    const page = await fetchPmInbox(path);
    const known = new Set(pmConversations.value.map((item) => item.id));
    pmConversations.value = [
      ...pmConversations.value,
      ...page.conversations.filter((item) => !known.has(item.id))
    ];
    pmNextInboxPage.value = page.nextPageUrl;
    hasLoadedMoreInboxPages = true;
  } catch (error) {
    pmInboxError.value = error instanceof Error ? error.message : "更多短信会话加载失败";
  } finally {
    pmMoreInboxLoading.value = false;
  }
}
function loadPmDetail(id, path = `/pm/conversation/${id}.chii`, force = false) {
  const existing = detailRequests.get(id);
  if (existing) return existing;
  const cachedDetail = pmDetails.peek()[id];
  const lastLoadedAt = lastDetailLoadedAt.get(id) || 0;
  if (!force && cachedDetail && Date.now() - lastLoadedAt < PM_DETAIL_REFRESH_INTERVAL) {
    return Promise.resolve();
  }
  if (!cachedDetail) {
    pmDetailLoading.value = true;
    pmDetailError.value = "";
  }
  const request = fetchPmConversation(path).then((detail) => {
    setPmDetail(id, detail);
    if (pmConversations.peek().some((item) => item.id === id && item.unreadCount > 0)) {
      pmConversations.value = pmConversations.peek().map(
        (item) => item.id === id ? { ...item, unreadCount: 0 } : item
      );
    }
    dismissPmNotification(id);
    markPmConversationRead(id);
    lastDetailLoadedAt.set(id, Date.now());
    if (pmDetailError.peek()) pmDetailError.value = "";
  }).catch((error) => {
    pmDetailError.value = error instanceof Error ? error.message : "短信会话加载失败";
  }).finally(() => {
    detailRequests.delete(id);
    pmDetailLoading.value = detailRequests.size > 0;
  });
  detailRequests.set(id, request);
  return request;
}
function openPmConversation(conversation) {
  toggleSearch(false);
  setActiveConversation(`pm:${conversation.id}`);
  if (isNarrowLayout.peek()) setMobileChatView(true);
  void loadPmDetail(conversation.id, conversation.href);
}
function openPmConversationFromHref(href) {
  const path = toSameOriginPmPath(href);
  const id = path?.match(/^\/pm\/conversation\/(\d+)\.chii/)?.[1];
  if (!path || !id) return false;
  const knownConversation = pmConversations.peek().find((item) => item.id === id);
  toggleSearch(false);
  setActiveConversation(`pm:${id}`);
  if (isNarrowLayout.peek()) setMobileChatView(true);
  void loadPmDetail(id, knownConversation?.href || path);
  if (!knownConversation) void loadPmInbox(true);
  return true;
}
function openPmCompose(receiver = "") {
  toggleSearch(false);
  pmComposeReceiver.value = receiver;
  setActiveConversation("pm:new");
  if (isNarrowLayout.peek()) setMobileChatView(true);
}
function normalizeText(value) {
  return (value || "").trim().toLowerCase();
}
function userAvatarKey(value) {
  if (!value) return "";
  try {
    const url = new URL(value, window.location.origin);
    return url.pathname.replace(/\/pic\/user\/[sml]\//, "/pic/user/*/");
  } catch {
    return value;
  }
}
function findPmConversationForUser(username, nickname, avatar) {
  const targetUsername = normalizeText(username);
  const targetNickname = normalizeText(nickname);
  const targetAvatar = userAvatarKey(avatar ? getAvatarUrl(avatar, "m") : "");
  const detailMatch = Object.values(pmDetails.peek()).find(
    (detail) => normalizeText(detail.username) === targetUsername || normalizeText(detail.replyForm?.fields.msg_receivers) === targetUsername
  );
  if (detailMatch) {
    return pmConversations.peek().find((item) => item.id === detailMatch.id) || {
      id: detailMatch.id,
      href: `/pm/conversation/${detailMatch.id}.chii`,
      nickname: detailMatch.nickname,
      avatar: detailMatch.avatar,
      dateText: "",
      lastMessage: "",
      unreadCount: 0
    };
  }
  return pmConversations.peek().find((item) => {
    const avatarMatches = !!targetAvatar && userAvatarKey(item.avatar) === targetAvatar;
    const nicknameMatches = !!targetNickname && normalizeText(item.nickname) === targetNickname;
    const usernameMatches = !!targetUsername && normalizeText(item.nickname) === targetUsername;
    return avatarMatches || nicknameMatches || usernameMatches;
  }) || null;
}
async function openPmForUser(user) {
  let conversation = findPmConversationForUser(user.username, user.nickname, user.avatar);
  if (!conversation) {
    await loadPmInbox(true);
    conversation = findPmConversationForUser(user.username, user.nickname, user.avatar);
  }
  if (conversation) {
    openPmConversation(conversation);
    return "conversation";
  }
  openPmCompose(user.username);
  return "compose";
}
async function submitPmReply(id, body) {
  const detail = pmDetails.value[id];
  if (!detail) return { status: "rejected", error: "会话尚未加载" };
  const tempId = addOptimisticPmMessage(id, body);
  const result = await sendPmReply(detail, body);
  if (tempId) await finishPmReply(id, tempId, result);
  return result;
}
async function retryPmReply(id, tempId) {
  const message = localPmMessage(id, tempId);
  const detail = pmDetails.value[id];
  if (!detail || !message?.rawBody || message.state !== "failed") {
    return { status: "rejected", error: "无法重试这条短信" };
  }
  updateLocalPmMessage(id, tempId, { state: "sending", timestampText: "发送中" });
  const result = await sendPmReply(detail, message.rawBody);
  await finishPmReply(id, tempId, result);
  return result;
}
async function submitNewPm(receiver, title, body) {
  const result = await createPm(receiver, title, body);
  if (result.status === "sent") {
    setPmDetail(result.detail.id, result.detail);
    lastDetailLoadedAt.set(result.detail.id, Date.now());
    setActiveConversation(`pm:${result.detail.id}`);
    void loadPmInbox(true);
  }
  return result;
}
function startPmPolling() {
  if (!isBangumiLoggedIn()) return () => {
  };
  let stopped = false;
  let notifyTimer = null;
  let notifyController = null;
  let lastSignature = "";
  let hasSignature = false;
  let inboxSyncedSignature = "";
  const previousUnread = /* @__PURE__ */ new Map();
  let hasBaseline = false;
  const loadVisibleData = () => {
    if (!isChatOpen.peek() || document.visibilityState !== "visible") return;
    if (shouldLoadPmInbox()) {
      if (hasSignature && lastSignature !== inboxSyncedSignature) {
        inboxSyncedSignature = lastSignature;
        void loadPmInbox(true);
      } else {
        void loadPmInbox();
      }
    }
    const id = activePmId();
    if (id) void loadPmDetail(id);
  };
  const emitPmNotifications = (notify) => {
    if (settings.value.notificationType === "detail" && hasBaseline && !isChatOpen.peek()) {
      for (const item of notify.pmList) {
        if (item.unreadCount <= (previousUnread.get(item.id) || 0)) continue;
        const known = pmConversations.peek().find((conversation) => conversation.id === item.id);
        addPmNotification(item, known?.avatar || "");
      }
    }
    const unreadIds = new Set(notify.pmList.map((item) => item.id));
    prunePmNotifications(unreadIds);
    previousUnread.clear();
    for (const item of notify.pmList) previousUnread.set(item.id, item.unreadCount);
    hasBaseline = true;
  };
  const applyNotify = (notify) => {
    if (pmUnreadCount.peek() !== notify.pmCount) pmUnreadCount.value = notify.pmCount;
    const unreadMap = {};
    for (const item of notify.pmList) unreadMap[item.id] = item.unreadCount;
    if (!isSameUnreadMap(pmUnreadByConversation.peek(), unreadMap)) {
      pmUnreadByConversation.value = unreadMap;
    }
    emitPmNotifications(notify);
    const signature = pmNotifySignature(notify);
    const changed = !hasSignature || signature !== lastSignature;
    lastSignature = signature;
    hasSignature = true;
    if (!isChatOpen.peek() || document.visibilityState !== "visible") return;
    if (shouldLoadPmInbox() && signature !== inboxSyncedSignature) {
      inboxSyncedSignature = signature;
      void loadPmInbox(true);
    }
    if (changed) {
      const id = activePmId();
      if (id && notify.pmList.some((item) => item.id === id)) {
        void loadPmDetail(id, void 0, true);
      }
    }
  };
  const pollNotify = async () => {
    if (stopped || document.visibilityState !== "visible") return;
    notifyController?.abort();
    notifyController = new AbortController();
    try {
      const notify = await fetchNotify(notifyController.signal);
      if (!stopped) applyNotify(notify);
    } catch {
    }
  };
  const scheduleNotify = () => {
    if (notifyTimer) clearTimeout(notifyTimer);
    if (stopped || document.visibilityState !== "visible") return;
    const interval = isChatOpen.peek() ? PM_NOTIFY_POLL_INTERVAL_OPEN : PM_NOTIFY_POLL_INTERVAL_IDLE;
    notifyTimer = setTimeout(async () => {
      await pollNotify();
      scheduleNotify();
    }, interval);
  };
  const kickNotify = () => {
    void pollNotify();
    scheduleNotify();
  };
  const handleVisibility = () => {
    if (document.visibilityState === "visible") {
      loadVisibleData();
      kickNotify();
    } else {
      if (notifyTimer) clearTimeout(notifyTimer);
      notifyController?.abort();
    }
  };
  let lastChatOpen = isChatOpen.peek();
  const unsubscribeConversation = activeConversationId.subscribe(loadVisibleData);
  const unsubscribeChatOpen = isChatOpen.subscribe((open) => {
    loadVisibleData();
    if (open === lastChatOpen) return;
    lastChatOpen = open;
    if (open) kickNotify();
    else scheduleNotify();
  });
  const unsubscribeChatLayoutReady = chatLayoutReady.subscribe(loadVisibleData);
  const unsubscribeNarrowLayout = isNarrowLayout.subscribe(loadVisibleData);
  const unsubscribeMobileChatView = mobileChatViewActive.subscribe(loadVisibleData);
  document.addEventListener("visibilitychange", handleVisibility);
  window.addEventListener("focus", loadVisibleData);
  kickNotify();
  return () => {
    stopped = true;
    if (notifyTimer) clearTimeout(notifyTimer);
    notifyController?.abort();
    unsubscribeConversation();
    unsubscribeChatOpen();
    unsubscribeChatLayoutReady();
    unsubscribeNarrowLayout();
    unsubscribeMobileChatView();
    document.removeEventListener("visibilitychange", handleVisibility);
    window.removeEventListener("focus", loadVisibleData);
  };
}function ChatHeader() {
  const handleClose = () => {
    toggleChat(false);
  };
  const handleMaximize = () => {
    toggleMaximize();
  };
  const handleSearch = () => {
    toggleSearch(!isSearchActive.value);
  };
  const handleSettings = () => {
    openSettingsPanel();
  };
  const handleBack = () => {
    setMobileChatView(false);
  };
  const handleToggleSidebar = () => {
    setMobileChatView(!mobileChatViewActive.value);
  };
  const activeConv = conversations.value.find((c) => c.id === activeConversationId.value);
  const activeExtension = activeExtensionId.value ? extensionConversations.value.find((e) => e.id === activeExtensionId.value) : null;
  const pmId = activePmId();
  const activePm = pmId ? pmDetails.value[pmId] : null;
  const activePmConversation = pmId ? pmConversations.value.find((item) => item.id === pmId) : null;
  const isPmActive = activeConversationId.value.startsWith("pm:");
  const isShowingChatView = isNarrowLayout.value && mobileChatViewActive.value;
  const otherUnread = conversations.value.reduce(
    (sum, c) => c.id === activeConversationId.value ? sum : sum + (c.unreadCount || 0),
    0
  ) + Object.entries(pmUnreadByConversation.value).reduce(
    (sum, [id, count]) => `pm:${id}` === activeConversationId.value ? sum : sum + (count || 0),
    0
  );
  const otherUnreadLabel = otherUnread > 99 ? "99+" : String(otherUnread);
  let mainTitle = "Re:Dollars";
  let avatarUrl = "https://lsky.ry.mk/i/2025/09/06/68bc5540a8c51.webp";
  let showOnlineStatus = true;
  let statusLabel = "在线";
  if (isNarrowLayout.value && !isShowingChatView) {
    mainTitle = "会话列表";
    showOnlineStatus = false;
  } else if (isPmActive) {
    mainTitle = activeConversationId.value === "pm:new" ? pmComposeReceiver.value ? `发短信给 ${pmComposeReceiver.value}` : "新建 Bangumi 短信" : activePm?.nickname || activePmConversation?.nickname || "Bangumi 短信";
    avatarUrl = activePm?.avatar || activePmConversation?.avatar || "";
    showOnlineStatus = false;
  } else if (activeExtension) {
    mainTitle = activeExtension.title;
    avatarUrl = activeExtension.avatar;
    if (activeExtension.statusLabel) {
      showOnlineStatus = true;
      statusLabel = activeExtension.statusLabel;
    } else {
      showOnlineStatus = false;
    }
  } else if (activeConv) {
    mainTitle = activeConv.type === "channel" ? activeConv.title : activeConv.user?.nickname || activeConv.title;
    avatarUrl = activeConv.type === "channel" ? activeConv.avatar : activeConv.user?.avatar || activeConv.avatar;
    showOnlineStatus = activeConv.type === "channel";
  }
  if (isUserProfilePanelOpen.value && isNarrowLayout.value) {
    return k$1("div", { class: "xB" }, k$1("div", { class: "chat-header-left-pane" }, k$1(
      "button",
      {
        id: "xk",
        class: "header-btn",
        title: "返回",
        onClick: hideUserProfile
      }
    )), k$1("div", { class: "title-wrapper" }, k$1("div", { class: "header-text-column" }, k$1("span", { class: "header-main-title" }, "用户资料"))), k$1("div", { class: "header-buttons" }, k$1(
      "button",
      {
        id: "xh",
        class: "header-btn maximize-btn",
        title: isMaximized.value ? "还原" : "最大化",
        onClick: handleMaximize
      }
    ), k$1(
      "button",
      {
        class: "header-btn xC",
        title: "关闭",
        onClick: handleClose
      }
    )));
  }
  return k$1("div", { class: "xB" }, k$1("div", { class: "chat-header-left-pane" }, k$1(
    "button",
    {
      id: "dollars-settings-btn-header",
      class: "header-btn",
      title: "设置",
      onClick: handleSettings,
      style: { display: isShowingChatView ? "none" : "flex" }
    }
  ), !isNarrowLayout.value && k$1(
    "button",
    {
      id: "dollars-sidebar-toggle-btn",
      class: "header-btn",
      title: mobileChatViewActive.value ? "显示会话列表" : "隐藏会话列表",
      onClick: handleToggleSidebar,
      style: { transform: mobileChatViewActive.value ? "scaleX(-1)" : "none" }
    }
  ), k$1("span", { class: "header-back-wrap", style: { display: isShowingChatView ? "inline-flex" : "none" } }, k$1(
    "button",
    {
      id: "xk",
      class: "header-btn",
      title: otherUnread > 0 ? `返回（其他会话有 ${otherUnread} 条新消息）` : "返回",
      onClick: handleBack
    }
  ), otherUnread > 0 && k$1("span", { class: "header-btn-badge" }, otherUnreadLabel))), k$1("div", { class: "title-wrapper" }, avatarUrl && (!isNarrowLayout.value || isShowingChatView) && k$1(
    "img",
    {
      class: "header-chat-icon",
      src: avatarUrl,
      alt: mainTitle
    }
  ), k$1("div", { class: "header-text-column" }, k$1("span", { class: "header-main-title" }, mainTitle), showOnlineStatus && k$1("span", { class: "online-status" }, k$1("span", { class: "online-dot" }), k$1("span", { id: "dollars-online-count" }, onlineCount.value), " ", statusLabel))), k$1("div", { class: "header-buttons" }, !isPmActive && k$1(
    "button",
    {
      id: "dollars-search-btn",
      class: "header-btn",
      title: "搜索",
      onClick: handleSearch
    }
  ), k$1(
    "button",
    {
      id: "xh",
      class: "header-btn maximize-btn",
      title: isMaximized.value ? "还原" : "最大化",
      onClick: handleMaximize
    }
  ), k$1(
    "button",
    {
      class: "header-btn xC",
      title: "关闭",
      onClick: handleClose
    }
  )));
}const NAMED_ENTITIES = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"'
};
function decodeHtmlEntities(input) {
  return input.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity) => {
    const key = entity.toLowerCase();
    if (key.startsWith("#x")) {
      const code = Number.parseInt(key.slice(2), 16);
      return Number.isFinite(code) && code <= 1114111 ? String.fromCodePoint(code) : match;
    }
    if (key.startsWith("#")) {
      const code = Number.parseInt(key.slice(1), 10);
      return Number.isFinite(code) && code <= 1114111 ? String.fromCodePoint(code) : match;
    }
    return NAMED_ENTITIES[key] ?? match;
  });
}
function normalizeForMatch(input) {
  return decodeHtmlEntities(String(input ?? "")).replace(/\s+/g, " ").trim();
}function canGroupAdjacentMessages(current, adjacent) {
  if (!current || !adjacent || current.timestamp === null || adjacent.timestamp === null) return false;
  return String(current.senderId) === String(adjacent.senderId) && current.boundaryId === adjacent.boundaryId && adjacent.timestamp - current.timestamp < MESSAGE_GROUP_TIME_GAP;
}function getCurrentUserId() {
  return String(window.CHOBITS_UID || "");
}
const messageMap = d$1(/* @__PURE__ */ new Map());
function getRawMessage(id) {
  return messageMap.value.get(Number(id))?.message;
}
const messageIds = w(() => {
  const map = messageMap.value;
  return Array.from(map.keys()).sort((a, b) => {
    const msgA = map.get(a);
    const msgB = map.get(b);
    if (msgA.timestamp !== msgB.timestamp) return msgA.timestamp - msgB.timestamp;
    if (msgA.uid === 0 && msgB.uid !== 0) return 1;
    if (msgA.uid !== 0 && msgB.uid === 0) return -1;
    if (a < 0 && b > 0) return 1;
    if (a > 0 && b < 0) return -1;
    if (a < 0 && b < 0) return b - a;
    return a - b;
  });
});
const pendingTimeouts = /* @__PURE__ */ new Map();
const PENDING_VERIFY_MS = 8e3;
let nextOptimisticId = -1;
const dollarsOptimisticAdapter = {
  state: (message) => message.state,
  stableKey: (message) => message.stableKey,
  contentKey: (message) => normalizeForMatch(message.message),
  senderKey: (message) => String(message.uid)
};
function clearPendingTimer(tempId) {
  const timeout = pendingTimeouts.get(tempId);
  if (timeout) {
    clearTimeout(timeout);
    pendingTimeouts.delete(tempId);
  }
}
function armPendingTimer(tempId) {
  clearPendingTimer(tempId);
  pendingTimeouts.set(tempId, setTimeout(() => void verifyPending(tempId), PENDING_VERIFY_MS));
}
async function verifyPending(tempId) {
  pendingTimeouts.delete(tempId);
  const msg = messageMap.peek().get(tempId);
  if (!msg || msg.state !== "sending") return;
  const confirmed = await confirmSentMessage(msg.message ?? "", 3);
  const current = messageMap.peek().get(tempId);
  if (!current || current.state !== "sending") return;
  if (confirmed) {
    addMessage(confirmed);
  } else {
    markMessageFailed(tempId);
  }
}
function takeOptimisticMatch(map, msg, tempId) {
  return takeOptimisticMatchFromMap(map, msg, dollarsOptimisticAdapter, {
    stableKey: tempId,
    // 乐观 id 为递减负数，越接近 0 越早创建；FIFO 取最早一条。
    prefer: (candidate, current) => candidate > current
  });
}
function getMessageGrouping(msgId) {
  const map = messageMap.peek();
  const ids = messageIds.peek();
  const userId = getCurrentUserId();
  const msg = map.get(msgId);
  if (!msg) {
    return { isSelf: false, isGrouped: false, isGroupedWithNext: false };
  }
  const index = ids.indexOf(msgId);
  const prevId = index > 0 ? ids[index - 1] : null;
  const nextId = index < ids.length - 1 ? ids[index + 1] : null;
  const prevMsg = prevId ? map.get(prevId) : null;
  const nextMsg = nextId ? map.get(nextId) : null;
  const current = { senderId: msg.uid, timestamp: msg.timestamp };
  const isSameUserAsPrev = prevMsg && canGroupAdjacentMessages(
    { senderId: prevMsg.uid, timestamp: prevMsg.timestamp },
    current
  );
  const isSameUserAsNext = nextMsg && canGroupAdjacentMessages(
    current,
    { senderId: nextMsg.uid, timestamp: nextMsg.timestamp }
  );
  return {
    isSelf: String(msg.uid) === String(userId),
    isGrouped: !!isSameUserAsPrev,
    isGroupedWithNext: !!isSameUserAsNext
  };
}
function addMessage(msg, tempId) {
  r(() => {
    const map = new Map(messageMap.value);
    const { matchedId, stableKey } = takeOptimisticMatch(map, msg, tempId);
    const replacedOptimistic = matchedId !== void 0;
    if (matchedId !== void 0) clearPendingTimer(matchedId);
    const confirmedMsg = stableKey ? { ...msg, stableKey, state: "sent" } : { ...msg, state: "sent" };
    const alreadyExists = map.has(confirmedMsg.id);
    map.set(confirmedMsg.id, confirmedMsg);
    messageMap.value = map;
    if (!replacedOptimistic && !alreadyExists) {
      updateSignalSet(newMessageIds, (s) => s.add(confirmedMsg.id));
      setTimeout(() => updateSignalSet(newMessageIds, (s) => s.delete(confirmedMsg.id)), 350);
    }
    pendingScrollToBottom.value = true;
  });
}
function addOptimisticMessage(content, user, replyToId, replyDetails, imageMeta) {
  const tempId = nextOptimisticId--;
  const stableKey = createOptimisticStableKey();
  const ids = messageIds.peek();
  let lastMsgTs = 0;
  if (ids.length > 0) {
    const lastMsgId = ids[ids.length - 1];
    lastMsgTs = messageMap.peek().get(lastMsgId)?.timestamp || 0;
  }
  const currentTs = optimisticTimestamp(lastMsgTs);
  const optimisticMsg = {
    id: tempId,
    uid: Number(user.id),
    nickname: user.nickname,
    avatar: user.avatar,
    message: content,
    timestamp: currentTs,
    reply_to_id: replyToId,
    reply_details: replyDetails,
    image_meta: imageMeta,
    stableKey,
    state: "sending"
  };
  r(() => {
    const map = new Map(messageMap.value);
    map.set(tempId, optimisticMsg);
    messageMap.value = map;
    updateSignalSet(newMessageIds, (s) => s.add(tempId));
    setTimeout(() => updateSignalSet(newMessageIds, (s) => s.delete(tempId)), 350);
    manualScrollToBottom.value++;
  });
  armPendingTimer(tempId);
  return { tempId, stableKey };
}
function markMessageFailed(tempId) {
  const msg = messageMap.value.get(tempId);
  if (msg && msg.state === "sending") {
    updateSignalMap(messageMap, (map) => map.set(tempId, { ...msg, state: "failed" }));
  }
}
function retryMessage(tempId) {
  const msg = messageMap.value.get(tempId);
  if (!msg || msg.state !== "failed") return null;
  const content = msg.message;
  const stableKey = msg.stableKey || createOptimisticStableKey();
  updateSignalMap(messageMap, (map) => map.set(tempId, { ...msg, stableKey, state: "sending" }));
  armPendingTimer(tempId);
  return { content, stableKey };
}
function addMessagesBatch(newMessages) {
  if (newMessages.length === 0) return;
  const map = new Map(messageMap.value);
  for (const msg of newMessages) {
    const { matchedId } = takeOptimisticMatch(map, msg);
    if (matchedId !== void 0) clearPendingTimer(matchedId);
    const existing = map.get(msg.id);
    if (!existing || msg.edited_at && msg.edited_at > (existing.edited_at || 0)) {
      map.set(msg.id, msg);
    }
  }
  messageMap.value = map;
}
function updateMessage(id, updates) {
  const existing = messageMap.value.get(id);
  if (existing) {
    updateSignalMap(messageMap, (map) => map.set(id, { ...existing, ...updates }));
  }
}
function getMessageById(id) {
  return messageMap.value.get(id);
}
function deleteMessage(id) {
  updateMessage(id, { is_deleted: true });
}
function clearMessages() {
  messageMap.value = /* @__PURE__ */ new Map();
}
function setMessages(newMessages) {
  const map = /* @__PURE__ */ new Map();
  for (const msg of newMessages) {
    map.set(msg.id, msg);
  }
  messageMap.value = map;
}
async function loadMessageContext(messageId) {
  isLoadingHistory.value = true;
  try {
    const result = await fetchMessageContext(messageId);
    if (result && result.messages.length > 0) {
      const targetMsg = result.messages.find((m) => m.id === messageId);
      if (!targetMsg || blockedUsers.value.has(String(targetMsg.uid))) {
        return null;
      }
      const filtered = result.messages.filter(
        (m) => !blockedUsers.value.has(String(m.uid))
      );
      r(() => {
        clearMessages();
        addMessagesBatch(filtered);
        historyOldestId.value = filtered[0].id;
        historyNewestId.value = filtered[filtered.length - 1].id;
        historyFullyLoaded.value = !result.has_more_before;
        timelineIsLive.value = false;
      });
      return { targetIndex: result.target_index };
    }
  } catch {
  } finally {
    isLoadingHistory.value = false;
  }
  return null;
}function shallowDiffers(a, b) {
  for (const i in a) if (i !== "__source" && !(i in b)) return true;
  for (const i in b) if (i !== "__source" && a[i] !== b[i]) return true;
  return false;
}
function memo(c, comparer) {
  function shouldUpdate(nextProps) {
    const ref = this.props.ref;
    const updateRef = ref === nextProps.ref;
    if (!updateRef && ref) {
      if (typeof ref === "function") {
        ref(null);
      } else if (typeof ref === "object" && "current" in ref) {
        ref.current = null;
      }
    }
    if (!comparer) return shallowDiffers(this.props, nextProps);
    return !comparer(this.props, nextProps) || !updateRef;
  }
  function Memoed(props) {
    this.shouldComponentUpdate = shouldUpdate;
    return k$1(c, props);
  }
  Memoed.displayName = `Memo(${c.displayName || c.name || "Component"})`;
  Memoed.prototype = { isReactComponent: true };
  Memoed._forwarded = true;
  Memoed.type = c;
  return Memoed;
}const replyingTo = d$1(null);
const editingMessage = d$1(null);
const pendingMention = d$1(null);
function setReplyTo(data) {
  replyingTo.value = data;
  editingMessage.value = null;
}
function setEditingMessage(data) {
  editingMessage.value = data;
  replyingTo.value = null;
}
function cancelReplyOrEdit() {
  replyingTo.value = null;
  editingMessage.value = null;
}const DRAFT_KEY_PREFIX = "dollars_draft_";
const DRAFT_EXPIRY = 7 * 24 * 60 * 60 * 1e3;
const currentDraft = d$1(null);
function getDraftKey() {
  return `${DRAFT_KEY_PREFIX}main`;
}
function saveDraft(content, replyTo = null) {
  if (!content.trim() && !replyTo) {
    clearDraft();
    return;
  }
  const draft = {
    content,
    replyTo,
    timestamp: Date.now()
  };
  const key = getDraftKey();
  localStorage.setItem(key, JSON.stringify(draft));
  currentDraft.value = draft;
}
function loadDraft() {
  try {
    const key = getDraftKey();
    const saved = localStorage.getItem(key);
    if (!saved) return null;
    const draft = JSON.parse(saved);
    if (Date.now() - draft.timestamp > DRAFT_EXPIRY) {
      clearDraft();
      return null;
    }
    currentDraft.value = draft;
    return draft;
  } catch {
    return null;
  }
}
function clearDraft() {
  const key = getDraftKey();
  localStorage.removeItem(key);
  currentDraft.value = null;
}async function fetchGalleryMedia(offset = 0, limit = 50, uid) {
  const res = await fetch(apiUrl("/gallery", { offset, limit, uid }));
  const data = await res.json();
  if (data.status) {
    return {
      items: data.items || [],
      hasMore: data.hasMore || false,
      total: data.total || 0
    };
  }
  return { items: [], hasMore: false, total: 0 };
}
async function fetchGalleryTimelineImages(direction, messageId, mediaIndex, limit = 50) {
  const cursor = direction === "before" ? { before_id: messageId, before_index: mediaIndex } : { after_id: messageId, after_index: mediaIndex };
  const res = await fetch(apiUrl("/gallery/timeline", { ...cursor, limit }));
  if (!res.ok) throw new Error(`Gallery timeline request failed (${res.status})`);
  const data = await res.json();
  if (!data.status) return { items: [], hasMore: false };
  return {
    items: (data.items || []).map((item) => ({
      src: String(item.url),
      messageId: Number(item.message_id),
      mediaIndex: Number(item.media_index),
      nickname: String(item.nickname || ""),
      avatar: String(item.avatar || ""),
      timestamp: Number(item.timestamp)
    })),
    hasMore: !!data.hasMore
  };
}
const UPLOAD_MAX_IMAGE_SIZE = 50 * 1024 * 1024;
const UPLOAD_MAX_FILE_SIZE = 200 * 1024 * 1024;
const UPLOAD_TIMEOUT_MS = 6e4;
const UPLOAD_MAX_RETRIES = 1;
const UPLOAD_MAX_BATCH_IMAGES = 20;
const IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
  ".bmp",
  ".tiff",
  ".tif",
  ".svg",
  ".heic",
  ".heif",
  ".ico",
  ".jxl",
  ".apng"
]);
function getFileExtension(filename) {
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex >= 0 ? filename.slice(dotIndex).toLowerCase() : "";
}
function isImageFile(file) {
  return file.type.startsWith("image/") || IMAGE_EXTENSIONS.has(getFileExtension(file.name));
}
function stringValue(value) {
  return typeof value === "string" && value.trim() ? value.trim() : void 0;
}
function numberValue(value) {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : void 0;
}
function firstString(...values) {
  for (const value of values) {
    const str = stringValue(value);
    if (!str) continue;
    const url = str.match(/https?:\/\/[^\s"'()[\]]+/)?.[0] ?? str;
    return url;
  }
  return void 0;
}
function normalizeUploadResponse(data, isImage) {
  const nested = data?.data ?? {};
  const links = nested?.links ?? data?.links ?? {};
  const rawUrl = firstString(
    data?.url,
    isImage ? data?.imageUrl : data?.fileUrl,
    isImage ? data?.image_url : data?.videoUrl,
    nested?.url,
    nested?.path,
    nested?.pathname,
    links?.url,
    links?.thumbnail_url,
    links?.imageUrl,
    links?.image_url,
    links?.html,
    links?.markdown,
    links?.bbcode,
    data?.fileUrl,
    data?.imageUrl,
    data?.videoUrl
  );
  const url = rawUrl ? absoluteUploadUrl(rawUrl) : void 0;
  const width = numberValue(data?.width ?? nested?.width);
  const height = numberValue(data?.height ?? nested?.height);
  const status = data?.status !== false && Boolean(url);
  return {
    ...data,
    status,
    ...url ? { url } : {},
    ...width != null ? { width } : {},
    ...height != null ? { height } : {}
  };
}
function uploadError(message) {
  return { status: false, error: message };
}
function validateUploadFile(file, isImage) {
  const maxSize = isImage ? UPLOAD_MAX_IMAGE_SIZE : UPLOAD_MAX_FILE_SIZE;
  if (file.size <= maxSize) return null;
  const maxMB = Math.round(maxSize / (1024 * 1024));
  return uploadError(`文件过大 (${(file.size / (1024 * 1024)).toFixed(1)}MB)，最大支持 ${maxMB}MB`);
}
async function parseUploadResponse(res) {
  try {
    return await res.json();
  } catch {
    if (!res.ok) {
      return { status: false, error: `服务器错误 (HTTP ${res.status})` };
    }
    return { status: false, error: "服务器返回了无法解析的响应" };
  }
}
function batchItems(data) {
  const nested = data?.data ?? {};
  const candidates = [
    Array.isArray(data) ? data : void 0,
    data?.items,
    data?.images,
    data?.files,
    data?.urls,
    data?.success,
    data?.successful,
    data?.list,
    nested?.items,
    nested?.images,
    nested?.files,
    nested?.urls,
    nested?.success,
    nested?.successful,
    nested?.list,
    Array.isArray(nested) ? nested : void 0
  ];
  for (const candidate of candidates) {
    if (!Array.isArray(candidate)) continue;
    return candidate.map((item) => typeof item === "string" ? { url: item } : item);
  }
  return [];
}
async function uploadFile(file) {
  const isImage = isImageFile(file);
  const validationError = validateUploadFile(file, isImage);
  if (validationError) return validationError;
  const fieldName = isImage ? "image" : "file";
  const endpoint = isImage ? uploadApiUrl() : fileUploadApiUrl();
  let lastError = "上传失败";
  for (let attempt = 0; attempt <= UPLOAD_MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      await new Promise((r) => setTimeout(r, 2e3));
    }
    try {
      const formData = new FormData();
      formData.append(fieldName, file);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT_MS);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: isImage ? getUploadAuthHeaders() : void 0,
        credentials: "omit",
        body: formData,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      let data = await parseUploadResponse(res);
      if (!res.ok) {
        lastError = data?.message || data?.error || `上传失败 (HTTP ${res.status})`;
        if (res.status >= 500) continue;
        return { status: false, error: lastError };
      }
      data = normalizeUploadResponse(data, isImage);
      if (!data.status) {
        return { status: false, error: data.message || data.error || "上传处理失败" };
      }
      return data;
    } catch (e) {
      if (e.name === "AbortError") {
        lastError = "上传超时，请检查网络后重试";
        continue;
      }
      lastError = "网络错误，请检查连接后重试";
      continue;
    }
  }
  return { status: false, error: lastError };
}
async function uploadImages(files) {
  if (files.length === 0) return [];
  if (files.length === 1) {
    return [await uploadFile(files[0])];
  }
  if (files.length > UPLOAD_MAX_BATCH_IMAGES) {
    return [uploadError(`一次最多上传 ${UPLOAD_MAX_BATCH_IMAGES} 张图片`)];
  }
  for (const file of files) {
    if (!isImageFile(file)) return [uploadError("批量上传仅支持图片")];
    const validationError = validateUploadFile(file, true);
    if (validationError) return [validationError];
  }
  const formData = new FormData();
  for (const file of files) {
    formData.append("images", file);
  }
  try {
    const res = await fetch(uploadApiUrl("/batch"), {
      method: "POST",
      headers: getUploadAuthHeaders(),
      credentials: "omit",
      body: formData,
      signal: AbortSignal.timeout(UPLOAD_TIMEOUT_MS)
    });
    const data = await parseUploadResponse(res);
    if (!res.ok || data?.status === false) {
      return [uploadError(data?.message || data?.error || `上传失败 (HTTP ${res.status})`)];
    }
    const items = batchItems(data);
    if (items.length === 0) {
      const normalized = normalizeUploadResponse(data, true);
      return normalized.status ? [normalized] : [uploadError(data?.message || data?.error || "上传处理失败")];
    }
    return items.map((item) => {
      const normalized = normalizeUploadResponse(item, true);
      return normalized.status ? normalized : uploadError(item?.message || item?.error || "上传处理失败");
    });
  } catch (e) {
    if (e.name === "TimeoutError" || e.name === "AbortError") {
      return [uploadError("上传超时，请检查网络后重试")];
    }
    return [uploadError("网络错误，请检查连接后重试")];
  }
}const CODE_BLOCK_PLACEHOLDER_PREFIX = "\0CODE_BLOCK_";
const mentionRegex = /(^|\s|\[\/[^\]]+\])@([\p{L}\p{N}_']{1,30})/gu;
async function transformMentions(text, lookupUsersByName) {
  const codeBlocks = [];
  let processedText = text.replace(/\[code\]([\s\S]*?)\[\/code\]/gi, (match) => {
    codeBlocks.push(match);
    return `${CODE_BLOCK_PLACEHOLDER_PREFIX}${codeBlocks.length - 1}\0`;
  });
  const matches = [...processedText.matchAll(mentionRegex)];
  if (matches.length === 0) {
    return restoreCodeBlocks(processedText, codeBlocks);
  }
  const usernamesToLookup = [...new Set(matches.map((match) => match[2]))].filter((u) => u !== "Bangumi娘");
  if (usernamesToLookup.length === 0) {
    return restoreCodeBlocks(processedText, codeBlocks);
  }
  const userDataMap = await lookupUsersByName(usernamesToLookup);
  const replacementMap = /* @__PURE__ */ new Map();
  for (const username in userDataMap) {
    const data = userDataMap[username];
    if (data?.id && data?.nickname) {
      replacementMap.set(username, `[user=${data.id}]${data.nickname}[/user]`);
    }
  }
  processedText = processedText.replace(
    mentionRegex,
    (match, prefix, username) => replacementMap.has(username) ? `${prefix}${replacementMap.get(username)}` : match
  );
  return restoreCodeBlocks(processedText, codeBlocks);
}
function restoreCodeBlocks(text, codeBlocks) {
  let restoredText = text;
  codeBlocks.forEach((block, i) => {
    restoredText = restoredText.replace(`${CODE_BLOCK_PLACEHOLDER_PREFIX}${i}\0`, block);
  });
  return restoredText;
}let presenceSubscribed = /* @__PURE__ */ new Set();
let syncPresenceTimer = null;
function collectUidsForPresence() {
  const ids = messageIds.peek();
  const recentIds = ids.slice(-150);
  const uids = /* @__PURE__ */ new Set();
  const map = messageMap.peek();
  for (const id of recentIds) {
    const msg = map.get(id);
    if (msg && msg.uid) {
      uids.add(String(msg.uid));
    }
  }
  return Array.from(uids);
}
function syncPresenceSubscriptions$1(send, isConnected) {
  if (syncPresenceTimer) {
    clearTimeout(syncPresenceTimer);
  }
  syncPresenceTimer = setTimeout(() => {
    syncPresenceTimer = null;
    if (!isConnected() || !isChatOpen.value) {
      if (presenceSubscribed.size > 0) {
        send({ type: "presence_unsubscribe" });
        presenceSubscribed.clear();
      }
      return;
    }
    const want = new Set(collectUidsForPresence());
    const toAdd = [...want].filter((u) => !presenceSubscribed.has(u));
    const toDel = [...presenceSubscribed].filter((u) => !want.has(u));
    if (toDel.length) {
      send({ type: "presence_unsubscribe", uids: toDel });
    }
    if (toAdd.length) {
      send({ type: "presence_subscribe", uids: toAdd });
      send({ type: "presence_query", uids: toAdd });
    }
    presenceSubscribed = want;
  }, PRESENCE_SYNC_DELAY);
}
function resetPresence() {
  onlineUsers.value = /* @__PURE__ */ new Map();
  typingUsers.value = /* @__PURE__ */ new Map();
  presenceSubscribed.clear();
}
function handleOnlineCountUpdate(data) {
  onlineCount.value = data.count;
}
function handlePresenceResult(data) {
  if (!Array.isArray(data.users)) return;
  const newOnlineUsers = new Map(onlineUsers.value);
  let changed = false;
  data.users.forEach(({ id, active }) => {
    const uid = String(id);
    if (active) {
      if (!newOnlineUsers.has(uid)) {
        newOnlineUsers.set(uid, true);
        changed = true;
      }
    } else {
      if (newOnlineUsers.has(uid)) {
        newOnlineUsers.delete(uid);
        changed = true;
      }
    }
  });
  if (changed) onlineUsers.value = newOnlineUsers;
}
function handlePresenceUpdate(data) {
  const u = data.user;
  if (u && u.id != null) {
    const uid = String(u.id);
    updateSignalMap(onlineUsers, (map) => {
      u.active ? map.set(uid, true) : map.delete(uid);
    });
  }
}
function handleTypingStart(data) {
  const typingUserId = String(data.user?.id);
  if (typingUserId === String(userInfo.value.id)) return;
  if (blockedUsers.value.has(typingUserId)) return;
  updateSignalMap(typingUsers, (map) => map.set(typingUserId, data.user.name || data.user.nickname));
  setTimeout(() => {
    if (typingUsers.value.has(typingUserId)) {
      updateSignalMap(typingUsers, (map) => map.delete(typingUserId));
    }
  }, TYPING_AUTO_CLEAR);
}
function handleTypingStop(data) {
  updateSignalMap(typingUsers, (map) => map.delete(String(data.user?.id)));
}const lastReadId = d$1(null);
const pendingReadId = d$1(null);
const isReadStateSyncing = d$1(false);
const hasUnreadMessages = w(() => {
  const readId = lastReadId.value;
  if (!readId) return false;
  const newestId = historyNewestId.value;
  return newestId !== null && newestId > readId;
});
const unreadCount = w(() => {
  const readId = lastReadId.value;
  if (!readId) return 0;
  const ids = messageIds.value;
  return ids.filter((id) => id > readId).length;
});
function getReadStateUserId() {
  const uid = window.CHOBITS_UID;
  return uid ? Number(uid) : null;
}
async function loadReadState() {
  try {
    const userId = getReadStateUserId();
    if (!userId) {
      return null;
    }
    isReadStateSyncing.value = true;
    const response = await fetch(apiUrl("/messages/read", { user_id: userId }), {
      headers: getAuthHeaders(),
      credentials: "include"
    });
    if (!response.ok) return null;
    const data = await response.json();
    if (data.status && typeof data.last_read_id === "number") {
      const remoteId = data.last_read_id;
      const localId = lastReadId.value || 0;
      const effectiveId = Math.max(remoteId, localId);
      lastReadId.value = effectiveId;
      if (localId > remoteId) {
        syncReadStateToBackend(localId);
      }
      return effectiveId;
    }
    return null;
  } catch {
    return null;
  } finally {
    isReadStateSyncing.value = false;
  }
}
function updateReadState(messageId) {
  const current = lastReadId.value;
  if (current !== null && messageId <= current) return;
  lastReadId.value = messageId;
  pendingReadId.value = messageId;
  debouncedSyncToBackend();
}
let syncTimer = null;
function debouncedSyncToBackend() {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = window.setTimeout(() => {
    const pending = pendingReadId.value;
    if (pending !== null) {
      syncReadStateToBackend(pending);
      pendingReadId.value = null;
    }
  }, 500);
}
async function syncReadStateToBackend(messageId) {
  try {
    const userId = getReadStateUserId();
    if (!userId) {
      return;
    }
    const response = await fetch(apiUrl("/messages/read"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders()
      },
      credentials: "include",
      body: JSON.stringify({ user_id: userId, last_read_id: messageId })
    });
    if (!response.ok) {
      pendingReadId.value = messageId;
      return;
    }
    const data = await response.json();
    if (data.status && typeof data.effective_last_read_id === "number") {
      const effective = data.effective_last_read_id;
      if (effective > (lastReadId.value || 0)) {
        lastReadId.value = effective;
      }
    }
  } catch {
    pendingReadId.value = messageId;
  }
}
function markSentMessageAsRead(messageId) {
  updateReadState(messageId);
}
function getFirstUnreadId() {
  const readId = lastReadId.value;
  if (!readId) return null;
  const ids = messageIds.peek();
  for (const id of ids) {
    if (id > readId) return id;
  }
  return null;
}function normalizeMessage(msg) {
  const normalized = { ...msg };
  if (normalized.db_id) {
    normalized.id = normalized.db_id;
  }
  if (msg.id && msg.db_id) {
    normalized.bangumi_id = msg.id;
  }
  if (normalized.msg && !normalized.message) {
    normalized.message = normalized.msg;
  }
  return normalized;
}
function handleNewMessages(data) {
  const payload = Array.isArray(data.payload) ? data.payload : [];
  if (!payload.length) return;
  const filteredPayload = payload.filter(
    (msg) => !blockedUsers.value.has(String(msg.uid))
  );
  if (!filteredPayload.length) return;
  const lastMsg = filteredPayload[filteredPayload.length - 1];
  updateConversationLastMessage(
    "dollars",
    lastMsg.msg || lastMsg.message || "",
    lastMsg.timestamp
  );
  let newUnreadCount = 0;
  const currentUserId = String(userInfo.value.id);
  for (const msg of filteredPayload) {
    const normalizedMsg = normalizeMessage(msg);
    if (!getMessageById(normalizedMsg.id)) {
      const tempId = msg.tempId;
      addMessage(normalizedMsg, tempId);
      if (String(normalizedMsg.uid) === currentUserId) {
        markSentMessageAsRead(normalizedMsg.id);
      } else {
        newUnreadCount++;
      }
    }
  }
  if (newUnreadCount > 0 && timelineIsLive.value && !isAtBottom.value) {
    unreadWhileScrolled.value += newUnreadCount;
    showScrollBottomBtn.value = true;
  }
}
function handleNewPM(data) {
  const payload = data.payload;
  if (!payload) return;
  if (blockedUsers.value.has(String(payload.uid))) return;
  const normalizedMsg = normalizeMessage(payload);
  if (!getMessageById(normalizedMsg.id)) {
    addMessage(normalizedMsg);
  }
}
function handleNotification(data) {
  const n = data.payload;
  addDollarsNotification(n);
  if (isChatOpen.value && unreadWhileScrolled.value === 0) {
    const mid = Number(n.message_id || n.message?.id);
    if (mid) {
      setTimeout(() => markMessageAsSeenIfNotified(mid), 100);
    }
  }
}
function handleMessageDelete(data) {
  const { id } = data.payload;
  deleteMessage(Number(id));
}
function handleMessageEdit(data) {
  const fullMsg = data.payload;
  updateMessage(fullMsg.id, normalizeMessage(fullMsg));
}
function checkMissedMessages() {
  if (!isChatOpen.value) return;
  const ids = messageIds.value;
  if (ids.length === 0) return;
  const lastId = ids[ids.length - 1];
  getUnreadCount(lastId, Number(userInfo.value.id)).then(async (res) => {
    if (res && res.count > 0) {
      const newMessages = await fetchNewerMessages(lastId, 100);
      if (newMessages.length > 0) {
        addMessagesBatch(newMessages);
      }
    }
  });
}
function handleReadStateUpdate(data) {
  const payload = data.payload;
  if (!payload) return;
  const remoteReadId = Number(payload.last_read_id);
  if (!remoteReadId || isNaN(remoteReadId)) return;
  const currentReadId = lastReadId.value || 0;
  if (remoteReadId > currentReadId) {
    lastReadId.value = remoteReadId;
  }
}function updateReactionUI(messageId, reaction, action) {
  const msg = getMessageById(messageId);
  if (!msg) return;
  const reactions = [...msg.reactions || []];
  const reactionUserId = String(reaction.user_id);
  if (action === "add") {
    const existingIdx = reactions.findIndex((r) => r.emoji === reaction.emoji && String(r.user_id) === reactionUserId);
    if (existingIdx === -1) {
      reactions.push({
        emoji: reaction.emoji,
        user_id: reaction.user_id,
        nickname: reaction.nickname,
        avatar: reaction.avatar
      });
    }
  } else {
    const idx = reactions.findIndex((r) => r.emoji === reaction.emoji && String(r.user_id) === reactionUserId);
    if (idx !== -1) {
      reactions.splice(idx, 1);
    }
  }
  updateMessage(messageId, { reactions });
  if (action === "add" && String(reaction.user_id) === String(userInfo.value.id)) {
    setTimeout(() => {
      const el = document.querySelector(`#db-${messageId} .xQ[data-emoji="${reaction.emoji}"]`);
      if (el) {
        el.classList.add("live_selected");
        setTimeout(() => el.classList.remove("live_selected"), 1e3);
      }
    }, 10);
  }
}
function handleReactionAdd(data) {
  updateReactionUI(data.payload.message_id, data.payload.reaction, "add");
}
function handleReactionRemove(data) {
  const { message_id, user_id, emoji, nickname } = data.payload;
  updateReactionUI(message_id, { user_id, nickname: nickname || "", emoji }, "remove");
}function routeWebSocketMessage(data, send) {
  if (data.ackId) {
    send({ type: "ack", ackId: data.ackId });
  }
  switch (data.type) {
    case "online_count_update":
      handleOnlineCountUpdate(data);
      break;
    case "presence_result":
      handlePresenceResult(data);
      break;
    case "presence_update":
      handlePresenceUpdate(data);
      break;
    case "typing_start":
      handleTypingStart(data);
      break;
    case "typing_stop":
      handleTypingStop(data);
      break;
    case "reaction_add":
      handleReactionAdd(data);
      break;
    case "reaction_remove":
      handleReactionRemove(data);
      break;
    case "new_messages":
      handleNewMessages(data);
      break;
    case "new_pm":
      handleNewPM(data);
      break;
    case "notification":
      handleNotification(data);
      break;
    case "message_delete":
      handleMessageDelete(data);
      break;
    case "message_edit":
      handleMessageEdit(data);
      break;
    case "read_state_update":
      handleReadStateUpdate(data);
      break;
  }
}let ws = null;
let reconnectTimer = null;
let heartbeatTimer = null;
let connectionCheckTimer = null;
let wsInitialized = false;
function sendWebSocketMessage(data) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(data));
  }
}
function isWebSocketConnected() {
  return !!ws && ws.readyState === WebSocket.OPEN;
}
function initWebSocketClient() {
  if (wsInitialized) return;
  wsInitialized = true;
  connectWebSocket();
  startConnectionMonitoring();
}
function connectWebSocket() {
  if (ws && ws.readyState === WebSocket.OPEN) return;
  if (ws && ws.readyState === WebSocket.CONNECTING) return;
  if (ws) {
    ws.close();
    ws = null;
  }
  ws = new WebSocket(WEBSOCKET_URL);
  ws.onopen = () => {
    wsConnected.value = true;
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }
    startHeartbeat();
    sendWebSocketMessage({ type: "identify", uid: userInfo.value.id });
    if (settings.value.sharePresence) {
      sendWebSocketMessage({
        type: "join",
        user: {
          id: userInfo.value.id,
          name: userInfo.value.nickname,
          avatar: userInfo.value.avatar
        }
      });
    }
    if (isChatOpen.value) {
      sendWebSocketMessage({ type: "presence", open: true });
      setTimeout(() => syncPresenceSubscriptions(), 0);
    }
  };
  ws.onmessage = (event) => {
    try {
      routeWebSocketMessage(JSON.parse(event.data), sendWebSocketMessage);
    } catch {
    }
  };
  ws.onclose = () => {
    wsConnected.value = false;
    stopHeartbeat();
    resetPresence();
    if (settings.value.notificationType === "detail" || isChatOpen.value) {
      scheduleReconnect();
    }
  };
  ws.onerror = () => {
  };
}
function disconnectWebSocket() {
  if (reconnectTimer) {
    clearTimeout(reconnectTimer);
    reconnectTimer = null;
  }
  stopHeartbeat();
  stopConnectionMonitoring();
  if (ws) {
    ws.close();
    ws = null;
  }
  wsConnected.value = false;
}
function startConnectionMonitoring() {
  if (connectionCheckTimer) return;
  connectionCheckTimer = setInterval(() => {
    const shouldBeConnected = settings.value.notificationType === "detail" || isChatOpen.value;
    if (shouldBeConnected && !isWebSocketConnected()) {
      connectWebSocket();
    }
  }, CONNECTION_CHECK_INTERVAL);
}
function hasConnectionMonitoring() {
  return connectionCheckTimer !== null;
}
function stopConnectionMonitoring() {
  if (connectionCheckTimer) {
    clearInterval(connectionCheckTimer);
    connectionCheckTimer = null;
  }
}
function scheduleReconnect() {
  if (reconnectTimer) {
    clearTimeout(reconnectTimer);
  }
  reconnectTimer = setTimeout(() => {
    reconnectTimer = null;
    ws = null;
    connectWebSocket();
  }, RECONNECT_DELAY);
}
function startHeartbeat() {
  stopHeartbeat();
  if (document.hidden) return;
  heartbeatTimer = setInterval(() => {
    sendWebSocketMessage({ type: "ping" });
  }, HEARTBEAT_INTERVAL);
}
function stopHeartbeat() {
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }
}
function pauseWebSocketForHiddenDocument() {
  if (settings.value.notificationType !== "detail") {
    stopHeartbeat();
  }
}
function syncPresenceSubscriptions() {
  syncPresenceSubscriptions$1(sendWebSocketMessage, isWebSocketConnected);
}
function sendTypingStart() {
  if (isWebSocketConnected() && settings.value.sharePresence) {
    sendWebSocketMessage({ type: "typing_start" });
  }
}
function sendTypingStop() {
  if (isWebSocketConnected() && settings.value.sharePresence) {
    sendWebSocketMessage({ type: "typing_stop" });
  }
}
function sendPendingMessage(tempId, content) {
  if (isWebSocketConnected()) {
    sendWebSocketMessage({ type: "pending_message", tempId, content });
  }
}
function resumeWebSocketAfterVisibilityChange() {
  startHeartbeat();
  setTimeout(() => {
    const shouldConnect = isChatOpen.value || settings.value.notificationType === "detail";
    if (shouldConnect && !isWebSocketConnected()) {
      connectWebSocket();
    }
    checkMissedMessages();
  }, 100);
}function optionalImageMeta(imageMeta) {
  return Object.keys(imageMeta).length > 0 ? imageMeta : void 0;
}
async function uploadVoiceDraft(voiceDraft) {
  const result = await uploadFile(voiceDraft.file);
  if (result.status && result.url) return `[audio]${result.url}[/audio]`;
  throw new Error(result.error || "语音上传失败");
}
async function attachVoice(content, voiceDraft) {
  if (!voiceDraft) return content;
  const voiceBBCode = await uploadVoiceDraft(voiceDraft);
  return content ? `${content}
${voiceBBCode}` : voiceBBCode;
}
function quoteReply(content) {
  const reply = replyingTo.value;
  return reply ? `[quote=${reply.id}][/quote]${content}` : content;
}
function replyDetails() {
  const reply = replyingTo.value;
  if (!reply) return {};
  return {
    replyToId: Number(reply.id),
    replyDetails: {
      uid: Number(reply.uid),
      nickname: reply.user,
      avatar: reply.avatar,
      content: reply.text
    }
  };
}
function restoreHiddenQuote(content) {
  const hiddenQuote = editingMessage.value?.hiddenQuote;
  return hiddenQuote ? `${hiddenQuote}
${content}` : content;
}
async function normalizeMentions(content) {
  return transformMentions(content, lookupUsersByName);
}
async function prepareEdit(content, imageMeta) {
  const editing = editingMessage.value;
  if (!editing || !content) return null;
  return {
    id: Number(editing.id),
    content: await normalizeMentions(restoreHiddenQuote(content)),
    imageMeta: optionalImageMeta(imageMeta)
  };
}
async function prepareNewMessage(content, imageMeta, voiceDraft) {
  const contentWithVoice = await attachVoice(content, voiceDraft);
  if (!contentWithVoice) return null;
  return {
    content: await normalizeMentions(quoteReply(contentWithVoice)),
    imageMeta: optionalImageMeta(imageMeta),
    ...replyDetails()
  };
}
async function submitEdit(draft, clearInput) {
  const result = await editMessage(draft.id, draft.content);
  if (!result.status) {
    throw new Error(result.error || "编辑失败");
  }
  clearInput();
  if (draft.imageMeta) {
    updateMessage(draft.id, { image_meta: draft.imageMeta });
  }
  cancelReplyOrEdit();
}
function stageOptimisticMessage(draft) {
  const user = userInfo.value;
  const { tempId, stableKey } = addOptimisticMessage(
    draft.content,
    { id: user.id, nickname: user.nickname, avatar: user.avatar },
    draft.replyToId,
    draft.replyDetails,
    draft.imageMeta
  );
  return { tempId, stableKey, content: draft.content };
}
function clearSubmittedComposer(actions) {
  actions.clearInput(true);
  actions.clearMediaPreview();
  actions.clearVoiceDraft?.();
  clearDraft();
  cancelReplyOrEdit();
}
async function deliver({ tempId, stableKey, content }) {
  sendPendingMessage(stableKey, content);
  const outcome = await postChatMessage(content);
  if (outcome === "rejected") {
    markMessageFailed(tempId);
  }
}
async function retryFailedMessage(tempId) {
  const revived = retryMessage(tempId);
  if (!revived) return;
  const existing = await confirmSentMessage(revived.content, 2);
  if (existing) {
    addMessage(existing, revived.stableKey);
    return;
  }
  await deliver({ tempId, stableKey: revived.stableKey, content: revived.content });
}
async function submitComposerMessage({
  content,
  imageMeta,
  voiceDraft,
  clearInput,
  clearMediaPreview,
  clearVoiceDraft
}) {
  const trimmedContent = content.trim();
  const actions = { clearInput, clearMediaPreview, clearVoiceDraft };
  if (editingMessage.value) {
    const draft2 = await prepareEdit(trimmedContent, imageMeta);
    if (draft2) await submitEdit(draft2, clearInput);
    return;
  }
  const draft = await prepareNewMessage(trimmedContent, imageMeta, voiceDraft);
  if (!draft) return;
  const pending = stageOptimisticMessage(draft);
  clearSubmittedComposer(actions);
  await deliver(pending);
}function useLongPress({ threshold = 500, onLongPress, onClick }) {
  const timerRef = A(null);
  const isLongPressRef = A(false);
  const startXRef = A(0);
  const startYRef = A(0);
  const handledRef = A(false);
  const start = q((e) => {
    if (e instanceof MouseEvent && e.button !== 0) return;
    if (e instanceof TouchEvent) {
      startXRef.current = e.touches[0].clientX;
      startYRef.current = e.touches[0].clientY;
    } else {
      startXRef.current = e.clientX;
      startYRef.current = e.clientY;
    }
    isLongPressRef.current = false;
    handledRef.current = false;
    timerRef.current = setTimeout(() => {
      isLongPressRef.current = true;
      handledRef.current = true;
      onLongPress(e);
    }, threshold);
  }, [onLongPress, threshold]);
  const clear = q(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const move = q((e) => {
    if (!timerRef.current) return;
    const moveThreshold = 10;
    let x = 0, y = 0;
    if (e instanceof TouchEvent) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    if (Math.abs(x - startXRef.current) > moveThreshold || Math.abs(y - startYRef.current) > moveThreshold) {
      clear();
    }
  }, [clear]);
  const end = q((e) => {
    clear();
    if (isLongPressRef.current) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      return;
    }
    if (onClick) {
      handledRef.current = true;
      e.stopPropagation();
      onClick(e);
    }
  }, [clear, onClick]);
  return {
    onMouseDown: (e) => start(e),
    onMouseMove: (e) => move(e),
    onMouseUp: (e) => end(e),
    onMouseLeave: (_e) => clear(),
    onTouchStart: (e) => {
      e.stopPropagation();
      start(e);
    },
    onTouchMove: (e) => move(e),
    onTouchEnd: (e) => end(e)
  };
}function UserAvatar({ uid, src, nickname, className = "" }) {
  const uidStr = String(uid);
  const isOnline = uidStr === "0" || onlineUsers.value.has(uidStr);
  const handleShortClick = (e) => {
    if (e.cancelable && e.type !== "click") {
      e.preventDefault();
    }
    e.stopPropagation();
    const profileUid = uid === 0 || String(uid) === "0" ? "3605" : String(uid);
    showUserProfile(profileUid);
  };
  const handleLongPress = (e) => {
    e.stopPropagation();
    if (uid === 0 || String(uid) === "0") {
      pendingMention.value = { uid: "bot", nickname: "Bangumi娘" };
    } else {
      pendingMention.value = { uid: String(uid), nickname };
    }
    if (navigator.vibrate) navigator.vibrate(50);
  };
  const longPressProps = useLongPress({
    onLongPress: handleLongPress,
    onClick: handleShortClick,
    threshold: 500
  });
  return k$1(
    "img",
    {
      class: `avatar ${isOnline ? "online" : ""} ${className}`,
      src,
      alt: nickname,
      "data-uid": uid,
      onContextMenu: (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      ...longPressProps
    }
  );
}function useSwipeToReply({ messageId, onReply, elementRef }) {
  const swipeState = A({
    startX: 0,
    startY: 0,
    currentTranslate: 0,
    isSwiping: false,
    startTime: 0
  });
  const handleTouchStart = q((e) => {
    if (e.touches.length !== 1) return;
    if (e.target.closest(".xQ, button")) return;
    swipeState.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      currentTranslate: 0,
      isSwiping: false,
      startTime: Date.now()
    };
    if (elementRef.current) {
      elementRef.current.style.transition = "none";
    }
  }, [elementRef]);
  const handleTouchMove = q((e) => {
    if (!elementRef.current) return;
    const deltaX = e.touches[0].clientX - swipeState.current.startX;
    const deltaY = e.touches[0].clientY - swipeState.current.startY;
    if (!swipeState.current.isSwiping) {
      if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        swipeState.current.isSwiping = true;
      } else {
        return;
      }
    }
    if (swipeState.current.isSwiping) {
      e.preventDefault();
      const translate = deltaX < 0 ? -60 * (1 - Math.exp(-(-deltaX / 150))) : 0;
      swipeState.current.currentTranslate = translate;
      elementRef.current.style.transform = `translateX(${translate}px)`;
      const indicatorEl = elementRef.current.querySelector(".swipe-reply-indicator");
      if (indicatorEl) {
        const progress = Math.min(Math.abs(translate) / 40, 1);
        indicatorEl.style.opacity = String(progress);
        indicatorEl.style.transform = `translateY(-50%) scale(${0.5 + 0.5 * progress})`;
      }
    }
  }, [elementRef]);
  const handleTouchEnd = q((e) => {
    if (!elementRef.current) return;
    elementRef.current.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    elementRef.current.style.transform = "";
    const indicatorEl = elementRef.current.querySelector(".swipe-reply-indicator");
    if (indicatorEl) {
      indicatorEl.style.transition = "all 0.2s ease";
      indicatorEl.style.opacity = "0";
      indicatorEl.style.transform = "translateY(-50%) scale(0.5)";
    }
    const touch = e.changedTouches[0];
    const dist = Math.sqrt(
      Math.pow(touch.clientX - swipeState.current.startX, 2) + Math.pow(touch.clientY - swipeState.current.startY, 2)
    );
    const duration = Date.now() - swipeState.current.startTime;
    const isTap = !swipeState.current.isSwiping && duration < 300 && dist < 10;
    if (swipeState.current.isSwiping) {
      if (swipeState.current.currentTranslate < -35) {
        onReply();
      }
    } else if (isTap) {
      const target = e.target;
      const isImage = target.tagName === "IMG" || target.closest(".xaa");
      const isImagePlaceholder = target.closest(".xY");
      const isLink = target.closest("a");
      const isQuote = target.closest(".chat-quote[data-jump-to-id]");
      const isAvatar = target.closest(".avatar");
      const isMask = target.closest(".text_mask") && !target.closest(".xZ");
      const isTag = target.closest(".chat-tag");
      const isButton = target.closest("button");
      const isVideo = target.tagName === "VIDEO" || target.closest(".video-container") || target.closest("video");
      if (!isImage && !isImagePlaceholder && !isLink && !isQuote && !isAvatar && !isMask && !isTag && !isButton && !isVideo) {
        if (isContextMenuOpen.peek()) return;
        if (isSmileyPanelOpen.peek()) return;
        if (e.cancelable) e.preventDefault();
        showContextMenu(touch.clientX, touch.clientY, String(messageId), null);
      }
    }
    swipeState.current.isSwiping = false;
  }, [onReply, messageId, elementRef]);
  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  };
}function MessageReactions({ reactions, messageId }) {
  if (!reactions || reactions.length === 0) return null;
  const grouped = reactions.reduce((acc, r) => {
    if (!acc[r.emoji]) acc[r.emoji] = [];
    acc[r.emoji].push(r);
    return acc;
  }, {});
  return k$1("div", { class: "reactions-container likes_grid" }, Object.entries(grouped).map(([emoji, users]) => k$1(ReactionItem, { key: emoji, emoji, users, messageId })));
}
function ReactionItem({ emoji, users, messageId }) {
  const url = getSmileyUrl(emoji);
  const itemRef = A(null);
  const isBmo = emoji.startsWith("(bmo");
  const isSelected = users.some((u) => String(u.user_id) === String(userInfo.peek().id));
  const usersWithAvatar = users.filter((u) => u.avatar);
  const anonymousCount = users.length - usersWithAvatar.length;
  const avatarsToShow = usersWithAvatar.slice(0, MAX_AVATARS_SHOWN);
  const extraAvatarCount = usersWithAvatar.length - MAX_AVATARS_SHOWN;
  const extraCount = Math.max(0, extraAvatarCount) + anonymousCount;
  y$1(() => {
    const el = itemRef.current;
    if (!el) return;
    const $ = window.$;
    if (typeof $ === "undefined" || typeof $.fn?.tooltip !== "function") {
      el.setAttribute("title", users.map((u) => u.nickname).join("、"));
      return;
    }
    el.setAttribute("data-original-title", generateReactionTooltip(users));
    el.setAttribute("title", "");
    const $el = $(el);
    let hideTimeout;
    const getTip = () => {
      const tooltip = $el.data("bs.tooltip");
      return tooltip?.$tip || (typeof tooltip?.tip === "function" ? $(tooltip.tip()) : null);
    };
    const clearHideTimeout = () => {
      if (!hideTimeout) return;
      clearTimeout(hideTimeout);
      hideTimeout = void 0;
    };
    const scheduleHide = () => {
      clearHideTimeout();
      hideTimeout = setTimeout(() => $el.tooltip("hide"), 300);
    };
    const syncTooltipHover = () => {
      const $tip = getTip();
      if (!$tip?.length) return;
      $tip.off(".dollarsTooltip");
      $tip.on("mouseenter.dollarsTooltip", clearHideTimeout);
      $tip.on("mouseleave.dollarsTooltip", scheduleHide);
      $tip.on("click.dollarsTooltip", (event) => event.stopPropagation());
    };
    const handleMouseEnter = () => {
      clearHideTimeout();
      $el.tooltip("show");
      syncTooltipHover();
    };
    $el.tooltip("destroy");
    $el.tooltip({
      container: "body",
      html: true,
      placement: "top",
      animation: true,
      trigger: "manual",
      template: '<div class="tooltip xs" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });
    $el.off(".dollarsTooltip");
    $el.on("mouseenter.dollarsTooltip", handleMouseEnter);
    $el.on("mouseleave.dollarsTooltip", scheduleHide);
    return () => {
      clearHideTimeout();
      getTip()?.off(".dollarsTooltip");
      $el.off(".dollarsTooltip");
      $el.tooltip("hide");
      $el.tooltip("destroy");
    };
  }, [users]);
  const handleToggle = async (e) => {
    e.stopPropagation();
    await toggleReaction(messageId, emoji);
  };
  return k$1(
    "div",
    {
      ref: itemRef,
      class: `xQ item ${isSelected ? "selected" : ""}`,
      "data-emoji": emoji,
      onClick: handleToggle
    },
    k$1(
      "span",
      {
        class: "emoji",
        style: url ? { backgroundImage: `url('${url}')` } : void 0
      },
      !url && !isBmo && emoji,
      isBmo && k$1("span", { class: "bmo", "data-code": emoji })
    ),
    avatarsToShow.length > 0 && k$1("span", { class: "reaction-avatars" }, avatarsToShow.map((u, i) => k$1(
      "img",
      {
        key: u.user_id,
        class: "xT",
        src: getAvatarUrl(u.avatar, "l"),
        alt: u.nickname,
        style: { zIndex: MAX_AVATARS_SHOWN - i }
      }
    ))),
    avatarsToShow.length === 0 ? k$1("span", { class: "num" }, users.length) : extraCount > 0 ? k$1("span", { class: "num extra" }, "+", extraCount) : null
  );
}function hasRichBubbleContent(messageText, hasReplyQuote, hasLinkPreviewCards, hasCollapseToggle) {
  if (hasReplyQuote || hasLinkPreviewCards || hasCollapseToggle) {
    return true;
  }
  return /\[(?:img|emoji|sticker|audio|video|code|quote)\]|\[file=.*?\]|\((?:musume|blake)_\d+\)/i.test(messageText);
}
function getBubbleTimestampMode(isGroupedWithNext, editedAt, isDeleted, isSticker, prefersTrailing) {
  if (isGroupedWithNext && !(editedAt && !isDeleted)) {
    return "hidden";
  }
  if (isSticker) {
    return "overlay";
  }
  return prefersTrailing ? "trailing" : "stacked";
}
const STICKER_MESSAGE_REGEX = /^(?:\[img\]\s*https?:\/\/[^\s<>"'[\]]+\s*\[\/img\]|\[(?:emoji|sticker)\]\s*https?:\/\/[^\s<>"'[\]]+\s*\[\/(?:emoji|sticker)\]|\((?:musume|blake)_\d+\))$/i;
function isStickerMessage(messageText, isDeleted, replyToId) {
  if (isDeleted) return false;
  const raw = (messageText || "").trim();
  return STICKER_MESSAGE_REGEX.test(raw) && !replyToId;
}
function renderMessageContent(message) {
  if (message.is_deleted) {
    return '<div class="xA deleted">此消息已撤回</div>';
  }
  const previews = [];
  let html = processBBCode(
    escapeHTML(message.message),
    message.image_meta || {},
    {
      replyToId: message.reply_to_id,
      replyDetails: message.reply_details,
      previewsCollector: previews
    },
    message.link_previews || {}
  );
  if (message.reply_to_id && message.reply_details) {
    html = renderReplyQuote(message.reply_details, message.reply_to_id) + html;
  }
  if (previews.length > 0) {
    html += '<div class="message-previews">' + previews.join("") + "</div>";
  }
  return html;
}function updateContainerSize(container, w, h) {
  const MAX_W = 320;
  const MAX_H = 250;
  let dw = w, dh = h;
  if (dw > MAX_W) {
    dh = MAX_W / dw * dh;
    dw = MAX_W;
  }
  if (dh > MAX_H) {
    dw = MAX_H / dh * dw;
    dh = MAX_H;
  }
  container.style.cssText = `aspect-ratio: ${w} / ${h}; width: ${Math.round(dw)}px; max-width: 100%;`;
  container.dataset.iw = String(w);
  container.dataset.ih = String(h);
}
function hydrateImageLoadingState(root) {
  root.querySelectorAll(".xaa").forEach((img) => {
    const image = img;
    const container = image.closest(".xW");
    const handleLoad = () => {
      image.classList.add("is-loaded");
      if (container) {
        container.classList.add("is-loaded");
        if (!container.dataset.iw && image.naturalWidth > 0 && image.naturalHeight > 0) {
          updateContainerSize(container, image.naturalWidth, image.naturalHeight);
        }
      }
    };
    const handleError = () => {
      image.src = "/img/no_img.gif";
      image.classList.add("is-loaded", "load-failed");
      if (container) container.classList.add("is-loaded");
    };
    if (image.complete) {
      if (image.naturalWidth > 0) {
        handleLoad();
      } else {
        handleError();
      }
    } else {
      image.addEventListener("load", handleLoad, { once: true });
      image.addEventListener("error", handleError, { once: true });
    }
  });
}
function useMessageVisibilityEffects(messageRef, messageId, content) {
  y$1(() => {
    const el = messageRef.current;
    if (!el) return;
    let hasRendered = false;
    const handleVisibility = () => {
      if (hasRendered) return;
      hasRendered = true;
      markMessageAsSeenIfNotified(messageId);
      hydrateImageLoadingState(el);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleVisibility();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [content, messageId]);
}function buildMessageImageViewerItems(entries) {
  return entries.map(({ src, message }) => ({
    src,
    messageId: message?.id,
    nickname: message?.nickname,
    avatar: message?.avatar,
    timestamp: message?.timestamp
  }));
}
function mergeTimelineImagePage(currentItems, pageItems, direction) {
  return direction === "before" ? { items: [...pageItems, ...currentItems], index: pageItems.length - 1 } : { items: [...currentItems, ...pageItems], index: currentItems.length };
}function getImageSource(container) {
  const image = container.querySelector(".xaa");
  return image?.dataset.fullSrc || image?.src || container.dataset.src || null;
}
function getMessage(container) {
  const messageElement = container.closest(".xv");
  const messageId = Number(messageElement?.dataset.dbId);
  return Number.isFinite(messageId) ? getMessageById(messageId) : void 0;
}
function useMessageImageViewer(messageRef, contentKey, options = {}) {
  const mode = options.mode || "timeline";
  const scopeSelector = options.scopeSelector || ".xE";
  y$1(() => {
    const messageElement = messageRef.current;
    if (!messageElement) return;
    const handler = (event) => {
      const target = event.target;
      const container = target?.closest(".xW");
      if (!container || !messageElement.contains(container)) return;
      event.preventDefault();
      event.stopPropagation();
      const list = messageElement.closest(scopeSelector);
      const scope = list || messageElement;
      const timelineContainers = Array.from(
        scope.querySelectorAll(".xW")
      );
      const timelineImages = timelineContainers.flatMap((timelineContainer) => {
        const src = getImageSource(timelineContainer);
        return src ? [{ container: timelineContainer, entry: { src, message: getMessage(timelineContainer) } }] : [];
      });
      const index = timelineImages.findIndex((item) => item.container === container);
      if (mode === "generic" && timelineImages.length > 0 && index >= 0) {
        showImageViewer(timelineImages.map((item) => item.entry.src), index);
        return;
      }
      const messageIds = Array.from(
        scope.querySelectorAll(".xv[data-db-id]")
      ).map((item) => Number(item.dataset.dbId)).filter((id) => Number.isInteger(id) && id > 0);
      if (timelineImages.length > 0 && index >= 0 && messageIds.length > 0) {
        showImageViewer(
          buildMessageImageViewerItems(timelineImages.map((item) => item.entry)),
          index,
          "timeline",
          {
            beforeId: Math.min(...messageIds),
            afterId: Math.max(...messageIds)
          }
        );
      }
    };
    messageElement.addEventListener("click", handler);
    return () => {
      messageElement.removeEventListener("click", handler);
    };
  }, [contentKey, mode, scopeSelector]);
}const NON_TEXT_CONTENT_SELECTOR = ".xV, .message-previews, .audio-player-container, .video-player-container";
function getRenderedContentHeight(scrollHeight, boundingHeight) {
  return Math.max(scrollHeight, boundingHeight);
}
function shouldCollapseMessage(measurement) {
  return !measurement.isDeleted && !measurement.isSticker && !measurement.hasNonTextContent && measurement.contentHeight > COLLAPSE_MAX_HEIGHT + 1;
}
function useCollapsibleMessage(textContentRef, contentKey, isDeleted, isSticker, additionalNonTextContentSelector = "") {
  const [isExpanded, setIsExpanded] = d$2(false);
  const [isCollapsible, setIsCollapsible] = d$2(false);
  _$2(() => {
    const element = textContentRef.current;
    if (!element) return;
    const nonTextContentSelector = additionalNonTextContentSelector ? `${NON_TEXT_CONTENT_SELECTOR}, ${additionalNonTextContentSelector}` : NON_TEXT_CONTENT_SELECTOR;
    const hasNonTextContent = !!element.querySelector(nonTextContentSelector);
    const measure = (resetExpanded = false) => {
      const nextValue = shouldCollapseMessage({
        contentHeight: getRenderedContentHeight(
          element.scrollHeight,
          element.getBoundingClientRect().height
        ),
        hasNonTextContent,
        isDeleted: !!isDeleted,
        isSticker
      });
      setIsCollapsible(nextValue);
      if (resetExpanded || !nextValue) setIsExpanded(false);
    };
    measure(true);
    if (isDeleted || isSticker || hasNonTextContent) return;
    let frameId = 0;
    const resizeObserver = new ResizeObserver(() => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => measure());
    });
    resizeObserver.observe(element.closest(".bubble") || element);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [contentKey, isDeleted, isSticker, additionalNonTextContentSelector]);
  return {
    isExpanded,
    isCollapsible,
    shouldCollapse: isCollapsible && !isExpanded,
    toggleExpanded: () => setIsExpanded((value) => isCollapsible ? !value : false)
  };
}function areMessagePropsEqual(prev, next) {
  const prevKey = prev.message.stableKey || prev.message.id;
  const nextKey = next.message.stableKey || next.message.id;
  return prevKey === nextKey && prev.message.message === next.message.message && prev.message.is_deleted === next.message.is_deleted && prev.message.edited_at === next.message.edited_at && prev.message.reactions === next.message.reactions && prev.message.link_previews === next.message.link_previews && prev.message.image_meta === next.message.image_meta && prev.message.state === next.message.state && prev.isSelf === next.isSelf && prev.isGrouped === next.isGrouped && prev.isGroupedWithNext === next.isGroupedWithNext;
}
const MessageItem = memo(function MessageItem2({ message, isSelf, isGrouped, isGroupedWithNext }) {
  const messageRef = A(null);
  const textContentRef = A(null);
  const [isNew, setIsNew] = d$2(() => newMessageIds.peek().has(message.id));
  y$1(() => {
    if (isNew) {
      const timer = setTimeout(() => setIsNew(false), NEW_MESSAGE_ANIMATION);
      return () => clearTimeout(timer);
    }
  }, [isNew]);
  const messageId = message.id;
  const messageText = message.message;
  const isDeleted = message.is_deleted;
  const editedAt = message.edited_at;
  const replyToId = message.reply_to_id;
  const replyDetails = message.reply_details;
  const imageMeta = message.image_meta;
  const linkPreviews = message.link_previews;
  const content = T(() => {
    return renderMessageContent(message);
  }, [messageId, messageText, isDeleted, replyToId, replyDetails, imageMeta, linkPreviews, settings.value.linkPreview, settings.value.loadImages]);
  useMessageVisibilityEffects(messageRef, messageId, content);
  useMessageImageViewer(messageRef, content);
  const isSticker = T(() => {
    return isStickerMessage(messageText, isDeleted, replyToId);
  }, [messageText, isDeleted, replyToId]);
  const { isExpanded, isCollapsible, shouldCollapse, toggleExpanded } = useCollapsibleMessage(
    textContentRef,
    content,
    isDeleted,
    isSticker
  );
  const hasReplyQuote = !!(replyToId && replyDetails);
  const hasLinkPreviewCards = settings.value.linkPreview && Object.keys(linkPreviews || {}).length > 0;
  const prefersTrailingTimestamp = !isDeleted && (hasReplyQuote && !hasLinkPreviewCards && !isCollapsible || !hasRichBubbleContent(
    messageText,
    hasReplyQuote,
    hasLinkPreviewCards,
    isCollapsible
  ));
  const timeText = formatDate(message.timestamp, "time") + (editedAt && !isDeleted ? " (已编辑)" : "");
  const fullTimeText = formatDate(message.timestamp, "full");
  const timestampMode = getBubbleTimestampMode(
    !!isGroupedWithNext,
    editedAt,
    !!isDeleted,
    isSticker,
    prefersTrailingTimestamp
  );
  const avatarUrl = getAvatarUrl(message.avatar, "l");
  const nickColor = message.color || "var(--primary-color)";
  const handleContextMenu = q((e) => {
    let imageUrl = null;
    let bmoCode = null;
    const target = e.target;
    const bmoElement = target.closest(".bmo");
    if (bmoElement) {
      bmoCode = bmoElement.dataset.code || null;
    } else if (target.tagName === "IMG") {
      imageUrl = target.src;
    } else if (target.classList.contains("emoji") || target.style.backgroundImage) {
      const bg = window.getComputedStyle(target).backgroundImage;
      const match = bg.match(/url\(["']?(.*?)["']?\)/);
      if (match && match[1]) {
        imageUrl = match[1];
      }
    }
    if (isMobile() && !imageUrl && !bmoCode) {
      return;
    }
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY, String(messageId), imageUrl, bmoCode);
  }, [messageId]);
  const triggerReply = q(() => {
    const rawContent = (getRawMessage(messageId) || messageText || "").trim();
    const text = stripQuotes(escapeHTML(rawContent)).replace(/\[img\].*?\[\/img\]/gi, "[图片]").replace(/\[file=.*?\].*?\[\/file\]/gi, "[附件]").replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    setReplyTo({
      id: String(messageId),
      uid: String(message.uid),
      user: message.nickname,
      text,
      raw: rawContent,
      avatar: message.avatar
    });
    const textarea = document.querySelector("#xg textarea");
    if (textarea) textarea.focus();
  }, [messageId, messageText, message.uid, message.nickname, message.avatar]);
  const handleRetry = q(() => {
    void retryFailedMessage(messageId);
  }, [messageId]);
  const handleBubbleClick = q((e) => {
    if (message.state === "failed") {
      e.stopPropagation();
      handleRetry();
    }
  }, [message.state, handleRetry]);
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeToReply({
    messageId,
    onReply: triggerReply,
    elementRef: messageRef
  });
  const className = `xv${isSelf ? " self" : ""}${isGrouped ? " is-grouped-with-prev" : ""}${isGroupedWithNext ? " is-grouped-with-next" : ""}${editedAt && !isDeleted ? " is-edited" : ""}${isNew ? " new-message" : ""}${message.state === "sending" ? " pending" : ""}${message.state === "failed" ? " failed" : ""}`;
  return k$1(
    "div",
    {
      id: `db-${messageId}`,
      ref: messageRef,
      class: className,
      "data-db-id": messageId,
      "data-uid": message.uid,
      "data-timestamp": message.timestamp,
      onContextMenu: handleContextMenu,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onTouchCancel: onTouchEnd
    },
    k$1("div", { class: "swipe-reply-indicator" }),
    k$1(
      UserAvatar,
      {
        uid: message.uid,
        src: avatarUrl,
        nickname: message.nickname
      }
    ),
    k$1("div", { class: "xw" }, k$1("span", { class: "nickname" }, k$1(
      "a",
      {
        href: message.uid === 0 ? "/user/bangumi" : `/user/${message.uid}`,
        target: "_blank",
        rel: "noopener"
      },
      message.nickname
    )), k$1(
      "div",
      {
        class: `bubble${isSticker ? " sticker-mode" : ""}${timestampMode === "trailing" ? " has-trailing-timestamp" : ""}${timestampMode === "stacked" ? " has-stacked-timestamp" : ""}`,
        onClick: message.state === "failed" ? handleBubbleClick : void 0,
        style: message.state === "failed" ? { cursor: "pointer" } : void 0
      },
      k$1("span", { class: "xz", style: { "--nick-color": nickColor } }, message.nickname),
      k$1(S, null, k$1(
        "div",
        {
          ref: textContentRef,
          class: `xA ${shouldCollapse ? "is-collapsed" : ""}`,
          style: { "--collapse-max-height": `${COLLAPSE_MAX_HEIGHT}px` },
          dangerouslySetInnerHTML: { __html: content }
        }
      ), isCollapsible && k$1(
        "button",
        {
          type: "button",
          class: "xSa",
          "aria-expanded": isExpanded,
          onClick: (e) => {
            e.stopPropagation();
            toggleExpanded();
          }
        },
        isExpanded ? "收起" : "展开全文"
      )),
      timestampMode !== "hidden" && k$1(
        "span",
        {
          class: `xy ${timestampMode === "overlay" ? "is-overlay" : timestampMode === "trailing" ? "is-trailing" : "is-stacked"}`,
          title: fullTimeText
        },
        timeText
      )
    ), k$1(MessageReactions, { reactions: message.reactions || [], messageId }))
  );
}, areMessagePropsEqual);const BROWSE_POSITION_KEY = "dollars_browse_position";
const browsePosition = d$1(null);
function saveBrowsePosition(anchorMessageId) {
  const position = {
    anchorMessageId,
    timestamp: Date.now()
  };
  browsePosition.value = position;
  localStorage.setItem(BROWSE_POSITION_KEY, JSON.stringify(position));
}
function loadBrowsePosition() {
  try {
    const saved = localStorage.getItem(BROWSE_POSITION_KEY);
    if (!saved) return null;
    const position = JSON.parse(saved);
    const MAX_AGE = 24 * 60 * 60 * 1e3;
    if (Date.now() - position.timestamp > MAX_AGE) {
      clearBrowsePosition();
      return null;
    }
    browsePosition.value = position;
    return position;
  } catch {
    return null;
  }
}
function clearBrowsePosition() {
  browsePosition.value = null;
  localStorage.removeItem(BROWSE_POSITION_KEY);
}
function shouldRestoreBrowsePosition(unreadCount) {
  const THRESHOLD = 5;
  return unreadCount > THRESHOLD;
}const FLOATING_DATE_TOP_OFFSET = 50;
const FLOATING_DATE_BOTTOM_THRESHOLD = 150;
function isNearScrollBottom(container, threshold = FLOATING_DATE_BOTTOM_THRESHOLD) {
  return container.scrollHeight - container.scrollTop - container.clientHeight <= threshold;
}
function getFloatingDateLabel(container, messages, topOffset = FLOATING_DATE_TOP_OFFSET) {
  const containerRect = container.getBoundingClientRect();
  const topThreshold = containerRect.top + topOffset;
  const bottomThreshold = containerRect.bottom;
  for (const message of messages) {
    const timestamp = Number(message.dataset.timestamp);
    if (!Number.isFinite(timestamp) || timestamp <= 0) continue;
    const rect = message.getBoundingClientRect();
    if (rect.bottom > topThreshold && rect.top < bottomThreshold) {
      return formatDate(timestamp, "label");
    }
  }
  return "";
}const ease = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
function smoothScrollTo(container, targetTop, options = {}) {
  const { duration: explicitDuration, easing = ease } = options;
  const startTop = container.scrollTop;
  const distance = Math.abs(targetTop - startTop);
  if (distance < 10) {
    container.scrollTop = targetTop;
    return null;
  }
  const duration = explicitDuration ?? Math.min(250 + Math.sqrt(distance) * 8, 650);
  const startTime = performance.now();
  const diff = targetTop - startTop;
  let animId;
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    container.scrollTop = startTop + diff * easing(progress);
    if (progress < 1) {
      animId = requestAnimationFrame(animate);
    }
  };
  animId = requestAnimationFrame(animate);
  return animId;
}
function smoothScrollToCenter(container, el, options = {}) {
  const ch = container.clientHeight;
  const targetTop = Math.max(0, el.offsetTop - ch / 2 + el.offsetHeight / 2);
  return smoothScrollTo(container, targetTop, { easing: (t) => 1 - Math.pow(1 - t, 3), duration: 600, ...options });
}function useScrollManager(onLoadHistory, onLoadNewerHistory) {
  const bodyRef = A(null);
  const listRef = A(null);
  const isLoadingRef = A(false);
  const isStickingToBottom = A(true);
  const prevScrollHeight = A(0);
  const prevScrollTop = A(0);
  const isRestoringScroll = A(false);
  const hideDateLabelTimer = A(null);
  const scrollAnimationRef = A(null);
  const isProgrammaticScroll = A(false);
  const keepBottomUntil = A(0);
  const wasChatOpen = A(false);
  const jumpToBottom = q(() => {
    if (!bodyRef.current) return;
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    isStickingToBottom.current = true;
    isAtBottom.value = true;
  }, []);
  const smoothScrollTo$1 = q((targetTop, duration) => {
    if (!bodyRef.current) return;
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }
    const animId = smoothScrollTo(bodyRef.current, targetTop, { duration });
    scrollAnimationRef.current = animId;
  }, []);
  const scrollToBottom = q((smooth = true) => {
    if (!bodyRef.current) return;
    const targetTop = bodyRef.current.scrollHeight;
    if (smooth) {
      isProgrammaticScroll.current = true;
      smoothScrollTo$1(targetTop);
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 700);
    } else {
      jumpToBottom();
    }
    isStickingToBottom.current = true;
  }, [jumpToBottom, smoothScrollTo$1]);
  const keepBottomAfterOpen = q(() => {
    if (Date.now() > keepBottomUntil.current) return;
    if (!isChatOpen.value || !timelineIsLive.value || hasUnreadMessages.value) return;
    jumpToBottom();
  }, [jumpToBottom]);
  const getTopVisibleMessageId = q(() => {
    if (!bodyRef.current || !listRef.current) return null;
    const scrollTop = bodyRef.current.scrollTop;
    const topThreshold = scrollTop + 60;
    const msgs = Array.from(listRef.current.querySelectorAll(".xv[data-db-id]"));
    const topMsg = msgs.find((el) => el.offsetTop + el.offsetHeight > topThreshold);
    return topMsg?.dataset.dbId ? parseInt(topMsg.dataset.dbId, 10) : null;
  }, []);
  const getBottomVisibleMessageId = q(() => {
    if (!bodyRef.current || !listRef.current) return null;
    const scrollTop = bodyRef.current.scrollTop;
    const clientHeight = bodyRef.current.clientHeight;
    const bottomThreshold = scrollTop + clientHeight - 60;
    const msgs = Array.from(listRef.current.querySelectorAll(".xv[data-db-id]"));
    for (let i = msgs.length - 1; i >= 0; i--) {
      const el = msgs[i];
      if (el.offsetTop < bottomThreshold) {
        return el.dataset.dbId ? parseInt(el.dataset.dbId, 10) : null;
      }
    }
    return null;
  }, []);
  const updateScrollButtonMode = q(() => {
    if (!bodyRef.current) return;
    if (hasUnreadMessages.value) {
      const firstUnreadId = getFirstUnreadId();
      if (firstUnreadId) {
        const unreadEl = document.getElementById(`db-${firstUnreadId}`);
        if (unreadEl) {
          const rect = unreadEl.getBoundingClientRect();
          const containerRect = bodyRef.current.getBoundingClientRect();
          if (rect.top > containerRect.bottom) {
            scrollButtonMode.value = "to-unread";
            return;
          }
        } else {
          scrollButtonMode.value = "to-unread";
          return;
        }
      }
    }
    scrollButtonMode.value = "to-bottom";
  }, []);
  const updateFloatingUI = () => {
    if (!bodyRef.current || !listRef.current) return;
    const nearBottom = isNearScrollBottom(bodyRef.current);
    showScrollBottomBtn.value = !nearBottom || !timelineIsLive.value;
    if (typeof hideDateLabelTimer.current === "number") {
      clearTimeout(hideDateLabelTimer.current);
      hideDateLabelTimer.current = null;
    }
    if (nearBottom) {
      currentDateLabel.value = null;
      return;
    }
    const label = getFloatingDateLabel(
      bodyRef.current,
      listRef.current.querySelectorAll(".xv[data-timestamp]")
    );
    if (label) {
      if (currentDateLabel.peek() !== label) currentDateLabel.value = label;
      hideDateLabelTimer.current = window.setTimeout(() => {
        currentDateLabel.value = null;
      }, 1e3);
    }
  };
  const handleScroll = q(() => {
    if (!bodyRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = bodyRef.current;
    const atBottom = scrollHeight - scrollTop - clientHeight < 50;
    isAtBottom.value = atBottom;
    if (!isProgrammaticScroll.current) {
      isStickingToBottom.current = atBottom;
      if (!atBottom) {
        keepBottomUntil.current = 0;
      }
    }
    if (atBottom && timelineIsLive.value) {
      unreadWhileScrolled.value = 0;
      unreadJumpList.value = [];
      const unreadSep = document.querySelector(".xVa");
      if (unreadSep) unreadSep.remove();
      const browseSep = document.querySelector(".xUa");
      if (browseSep) browseSep.remove();
    }
    if (listRef.current) {
      if (atBottom && timelineIsLive.value) {
        clearBrowsePosition();
      } else {
        const topVisibleMsg = getTopVisibleMessageId();
        if (topVisibleMsg) {
          saveBrowsePosition(topVisibleMsg);
        }
      }
      const bottomVisibleMsg = getBottomVisibleMessageId();
      if (bottomVisibleMsg) {
        updateReadState(bottomVisibleMsg);
      }
    }
    updateScrollButtonMode();
    updateFloatingUI();
    if (scrollTop < 200 && !isLoadingRef.current && !historyFullyLoaded.value) {
      onLoadHistory();
    }
    if (atBottom && !isLoadingRef.current && !timelineIsLive.value) {
      isStickingToBottom.current = false;
      onLoadNewerHistory();
    }
  }, []);
  y$1(() => {
    if (manualScrollToBottom.value > 0) {
      scrollToBottom(true);
    }
  }, [manualScrollToBottom.value]);
  y$1(() => {
    const justOpened = isChatOpen.value && !wasChatOpen.current;
    wasChatOpen.current = isChatOpen.value;
    if (!justOpened || !timelineIsLive.value) return;
    if (hasUnreadMessages.value && !isStickingToBottom.current) return;
    keepBottomUntil.current = Date.now() + 800;
    jumpToBottom();
    const timers = [80, 220, 500, 800].map((delay) => window.setTimeout(keepBottomAfterOpen, delay));
    let innerRafId = 0;
    const rafId = requestAnimationFrame(() => {
      innerRafId = requestAnimationFrame(keepBottomAfterOpen);
    });
    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(innerRafId);
      timers.forEach((timer) => window.clearTimeout(timer));
      if (!isChatOpen.value) {
        keepBottomUntil.current = 0;
      }
    };
  }, [
    isChatOpen.value,
    jumpToBottom,
    keepBottomAfterOpen
  ]);
  y$1(() => {
    if (!isChatOpen.value || !timelineIsLive.value || hasUnreadMessages.value) {
      keepBottomUntil.current = 0;
    }
  }, [hasUnreadMessages.value, isChatOpen.value, timelineIsLive.value]);
  y$1(() => {
    if (!isChatOpen.value) return;
    const cancelKeepBottom = () => {
      keepBottomUntil.current = 0;
    };
    const body = bodyRef.current;
    body?.addEventListener("wheel", cancelKeepBottom, { passive: true });
    body?.addEventListener("touchmove", cancelKeepBottom, { passive: true });
    return () => {
      body?.removeEventListener("wheel", cancelKeepBottom);
      body?.removeEventListener("touchmove", cancelKeepBottom);
    };
  }, [isChatOpen.value]);
  y$1(() => {
    if (!isChatOpen.value || hasUnreadMessages.value || !timelineIsLive.value) return;
    keepBottomUntil.current = Date.now() + 500;
    requestAnimationFrame(() => {
      requestAnimationFrame(keepBottomAfterOpen);
    });
  }, [
    hasUnreadMessages.value,
    inputAreaHeight.value,
    isChatOpen.value,
    keepBottomAfterOpen,
    timelineIsLive.value
  ]);
  _$2(() => {
    if (pendingScrollToBottom.value) {
      pendingScrollToBottom.value = false;
      if (isStickingToBottom.current) {
        requestAnimationFrame(() => {
          scrollToBottom(true);
        });
      }
    }
  }, [pendingScrollToBottom.value, scrollToBottom]);
  const visibleMessageIds = T(() => {
    const allIds = messageIds.value;
    const blocked = blockedUsers.value;
    const filteredIds = allIds.filter((id) => {
      const msg = messageMap.peek().get(id);
      return msg && !blocked.has(String(msg.uid));
    });
    if (filteredIds.length > MAX_DOM_MESSAGES && isStickingToBottom.current) {
      return filteredIds.slice(-MAX_DOM_MESSAGES);
    }
    return filteredIds;
  }, [messageIds.value, blockedUsers.value]);
  _$2(() => {
    if (isRestoringScroll.current && bodyRef.current) {
      const newScrollHeight = bodyRef.current.scrollHeight;
      const scrollDiff = newScrollHeight - prevScrollHeight.current;
      if (scrollDiff > 0) {
        bodyRef.current.scrollTop = prevScrollTop.current + scrollDiff;
      }
      isRestoringScroll.current = false;
    }
  }, [visibleMessageIds]);
  _$2(() => {
    if (!currentDateLabel.peek() || !bodyRef.current) return;
    updateFloatingUI();
  }, [visibleMessageIds]);
  y$1(() => {
    const listEl = listRef.current;
    if (!listEl) return;
    const observer = new ResizeObserver(() => {
      if (!isStickingToBottom.current || isProgrammaticScroll.current || !bodyRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = bodyRef.current;
      if (scrollHeight - scrollTop - clientHeight < 150) {
        bodyRef.current.scrollTop = scrollHeight;
      }
    });
    observer.observe(listEl);
    return () => observer.disconnect();
  }, []);
  return {
    bodyRef,
    listRef,
    isStickingToBottom,
    isRestoringScroll,
    isProgrammaticScroll,
    isLoadingRef,
    prevScrollHeight,
    prevScrollTop,
    handleScroll,
    scrollToBottom,
    smoothScrollTo: smoothScrollTo$1,
    visibleMessageIds,
    loadHistory: onLoadHistory,
    loadNewerHistory: onLoadNewerHistory,
    getTopVisibleMessageId,
    getBottomVisibleMessageId
  };
}function insertUnreadSeparator(messageId) {
  const existing = document.querySelector(".xVa");
  if (existing) existing.remove();
  if (!messageId) return;
  const targetMsg = document.getElementById(`db-${messageId}`);
  if (!targetMsg) return;
  const separator = document.createElement("div");
  separator.className = "xVa";
  separator.innerHTML = "<span>未读消息</span>";
  targetMsg.parentNode?.insertBefore(separator, targetMsg);
}function useHistoryLoader(refs) {
  const { bodyRef, listRef, isLoadingRef, isStickingToBottom, prevScrollHeight, prevScrollTop, isRestoringScroll } = refs;
  const loadHistory = q(async () => {
    if (isLoadingRef.current || historyFullyLoaded.value) return;
    const oldestId = historyOldestId.value;
    if (!oldestId) return;
    isLoadingRef.current = true;
    isLoadingHistory.value = true;
    if (bodyRef.current) {
      prevScrollHeight.current = bodyRef.current.scrollHeight;
      prevScrollTop.current = bodyRef.current.scrollTop;
    }
    try {
      const newMessages = await fetchHistoryMessages(oldestId, 50);
      if (newMessages.length === 0) {
        historyFullyLoaded.value = true;
      } else {
        const minId = Math.min(...newMessages.map((m) => m.id));
        historyOldestId.value = minId;
        const filtered = newMessages.filter((m) => !blockedUsers.value.has(String(m.uid)));
        isRestoringScroll.current = true;
        addMessagesBatch(filtered);
        syncPresenceSubscriptions();
      }
    } catch (e) {
    } finally {
      isLoadingRef.current = false;
      isLoadingHistory.value = false;
    }
  }, []);
  const loadNewerHistory = q(async () => {
    if (isLoadingRef.current || timelineIsLive.value) return;
    const newestId = historyNewestId.value;
    if (!newestId) return;
    isLoadingRef.current = true;
    const LIMIT = 50;
    try {
      const newMessages = await fetchNewerMessages(newestId, LIMIT);
      const existingIds = new Set(messageIds.peek());
      const filteredNewMessages = newMessages.filter(
        (m) => !existingIds.has(m.id) && !blockedUsers.value.has(String(m.uid))
      );
      if (filteredNewMessages.length > 0) {
        addMessagesBatch(filteredNewMessages);
        const maxId = Math.max(...filteredNewMessages.map((m) => m.id));
        historyNewestId.value = maxId;
        if (newMessages.length < LIMIT) {
          timelineIsLive.value = true;
          unreadWhileScrolled.value = 0;
          showScrollBottomBtn.value = false;
          clearBrowsePosition();
          syncPresenceSubscriptions();
        }
      } else {
        timelineIsLive.value = true;
        unreadWhileScrolled.value = 0;
        showScrollBottomBtn.value = false;
        clearBrowsePosition();
        syncPresenceSubscriptions();
      }
    } catch (e) {
    } finally {
      setTimeout(() => {
        isLoadingRef.current = false;
      }, 100);
    }
  }, []);
  const jumpToMessage = q(async (id) => {
    const targetId = String(id);
    const highlightDuration = 800;
    const scrollAndHighlight = (el, hideOverlay = false) => {
      isStickingToBottom.current = false;
      if (!bodyRef.current) return;
      el.scrollIntoView({ behavior: "auto", block: "center" });
      if (hideOverlay) {
        requestAnimationFrame(() => {
          isContextLoading.value = false;
        });
      }
      if (listRef.current) listRef.current.classList.add("focus-mode");
      el.classList.remove("message-highlight");
      void el.offsetWidth;
      el.classList.add("message-highlight");
      setTimeout(() => {
        if (listRef.current) listRef.current.classList.remove("focus-mode");
        el.classList.remove("message-highlight");
      }, highlightDuration);
    };
    const existingElement = document.getElementById(`db-${targetId}`);
    if (existingElement) {
      scrollAndHighlight(existingElement);
      return;
    }
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;
    isLoadingHistory.value = true;
    isContextLoading.value = true;
    try {
      const contextResult = await fetchMessageContext(id);
      if (contextResult && contextResult.messages.length > 0) {
        const targetMsg = contextResult.messages.find((m) => m.id === id);
        if (!targetMsg || blockedUsers.value.has(String(targetMsg.uid))) {
          isContextLoading.value = false;
          return;
        }
        const filtered = contextResult.messages.filter(
          (m) => !blockedUsers.value.has(String(m.uid))
        );
        setMessages(filtered);
        historyOldestId.value = filtered[0].id;
        historyNewestId.value = filtered[filtered.length - 1].id;
        historyFullyLoaded.value = !contextResult.has_more_before;
        timelineIsLive.value = false;
        requestAnimationFrame(() => {
          setTimeout(() => {
            const newElement = document.getElementById(`db-${targetId}`);
            if (newElement) {
              scrollAndHighlight(newElement, true);
            } else {
              const msgElements = listRef.current?.querySelectorAll(".xv");
              if (msgElements && contextResult.target_index < msgElements.length) {
                scrollAndHighlight(msgElements[contextResult.target_index]);
              }
            }
          }, 300);
        });
      } else {
      }
    } catch (e) {
      isContextLoading.value = false;
    } finally {
      isLoadingRef.current = false;
      isLoadingHistory.value = false;
    }
  }, []);
  y$1(() => {
    const messageId = pendingJumpToMessage.value;
    if (messageId !== null) {
      pendingJumpToMessage.value = null;
      jumpToMessage(messageId);
    }
  }, [pendingJumpToMessage.value]);
  y$1(() => {
    if (!isChatOpen.value) return;
    const loadInitialMessages = async () => {
      if (initialMessagesLoaded.value) {
        syncPresenceSubscriptions();
        return;
      }
      isLoadingHistory.value = true;
      isContextLoading.value = true;
      await loadReadState();
      try {
        const savedBrowse = loadBrowsePosition();
        const recentMessages = await fetchRecentMessages(50);
        const filteredRecent = recentMessages.filter((m) => !blockedUsers.value.has(String(m.uid)));
        const readId = lastReadId.value;
        const recentUnreadCount = readId ? filteredRecent.filter((m) => m.id > readId).length : unreadCount.value;
        if (savedBrowse && shouldRestoreBrowsePosition(recentUnreadCount)) {
          unreadWhileScrolled.value = recentUnreadCount;
          showScrollBottomBtn.value = recentUnreadCount > 0;
          const contextResult = await fetchMessageContext(savedBrowse.anchorMessageId, 25, 50);
          if (contextResult && contextResult.messages.length > 0) {
            const filtered = contextResult.messages.filter(
              (m) => !blockedUsers.value.has(String(m.uid))
            );
            setMessages(filtered);
            if (filtered.length > 0) {
              historyOldestId.value = filtered[0].id;
              historyNewestId.value = filtered[filtered.length - 1].id;
            }
            historyFullyLoaded.value = !contextResult.has_more_before;
            timelineIsLive.value = false;
            isStickingToBottom.current = false;
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const readId2 = lastReadId.value;
                if (readId2) {
                  const firstUnreadId = filtered.find((m) => m.id > readId2)?.id;
                  if (firstUnreadId) {
                    insertUnreadSeparator(String(firstUnreadId));
                  }
                }
                const browseEl = document.getElementById(`db-${savedBrowse.anchorMessageId}`);
                if (browseEl && bodyRef.current) {
                  bodyRef.current.scrollTop = browseEl.offsetTop - 10;
                } else if (bodyRef.current) {
                  bodyRef.current.scrollTop = 0;
                }
                syncPresenceSubscriptions();
                isLoadingHistory.value = false;
                isContextLoading.value = false;
                initialMessagesLoaded.value = true;
              });
            });
            return;
          } else {
            clearBrowsePosition();
          }
        } else if (savedBrowse) {
          clearBrowsePosition();
        }
        timelineIsLive.value = true;
        isStickingToBottom.current = true;
        clearBrowsePosition();
        if (filteredRecent.length > 0) {
          addMessagesBatch(filteredRecent);
          historyOldestId.value = filteredRecent[0].id;
          historyNewestId.value = filteredRecent[filteredRecent.length - 1].id;
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (bodyRef.current) {
                bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
                isStickingToBottom.current = true;
              }
              syncPresenceSubscriptions();
              isLoadingHistory.value = false;
              isContextLoading.value = false;
              initialMessagesLoaded.value = true;
            });
          });
        } else {
          isLoadingHistory.value = false;
          isContextLoading.value = false;
          initialMessagesLoaded.value = true;
        }
      } catch (e) {
        isLoadingHistory.value = false;
        isContextLoading.value = false;
      }
    };
    loadInitialMessages();
  }, [isChatOpen.value]);
  return {
    loadHistory,
    loadNewerHistory,
    jumpToMessage
  };
}let activeToastTimer = null;
function showToast(message, duration = 2500, color) {
  let toast = document.getElementById("dollars-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "dollars-toast";
    const container = document.getElementById("xg") || document.body;
    container.appendChild(toast);
  }
  toast.classList.remove("dollars-toast-visible");
  void toast.offsetWidth;
  toast.textContent = message;
  toast.style.color = color;
  toast.classList.add("dollars-toast-visible");
  if (activeToastTimer !== null) clearTimeout(activeToastTimer);
  activeToastTimer = setTimeout(() => {
    toast.classList.remove("dollars-toast-visible");
    activeToastTimer = null;
  }, duration);
}
function ChatBody() {
  const historyCallbacksRef = A({
    loadHistory: () => {
    },
    loadNewerHistory: () => {
    }
  });
  const scrollManager = useScrollManager(
    () => historyCallbacksRef.current.loadHistory(),
    () => historyCallbacksRef.current.loadNewerHistory()
  );
  const { bodyRef, listRef, handleScroll, visibleMessageIds } = scrollManager;
  const { loadHistory, loadNewerHistory, jumpToMessage } = useHistoryLoader(scrollManager);
  historyCallbacksRef.current.loadHistory = loadHistory;
  historyCallbacksRef.current.loadNewerHistory = loadNewerHistory;
  y$1(() => {
    const listEl = listRef.current;
    if (!listEl) return;
    const handleClick = (e) => {
      const target = e.target;
      const mention = target.closest("a.user-mention");
      if (mention) {
        e.preventDefault();
        e.stopPropagation();
        const href = mention.getAttribute("href") || "";
        const match = href.match(/^\/user\/(.+)$/);
        if (match) {
          showUserProfile(match[1]);
        }
        return;
      }
      if (target.classList.contains("chat-tag")) {
        e.preventDefault();
        e.stopPropagation();
        const tag = target.textContent?.trim();
        if (tag) {
          toggleSearch(true);
          searchQuery.value = tag;
        }
        return;
      }
      const quote = target.closest(".chat-quote[data-jump-to-id]");
      if (quote) {
        e.preventDefault();
        e.stopPropagation();
        const id = Number(quote.dataset.jumpToId);
        const quoteUid = quote.dataset.quoteUid;
        if (!id) return;
        if (quoteUid && blockedUsers.value.has(quoteUid)) {
          showToast("绝交用户", 2500, "var(--primary-color)");
        } else {
          jumpToMessage(id);
        }
      }
    };
    listEl.addEventListener("click", handleClick);
    return () => listEl.removeEventListener("click", handleClick);
  }, []);
  return k$1(
    "div",
    {
      class: `xD ${isLoadingHistory.value ? "loading" : ""} ${isContextLoading.value ? "context-loading" : ""}`,
      ref: bodyRef,
      onScroll: handleScroll,
      style: { paddingBottom: `${inputAreaHeight.value + 20}px` }
    },
    k$1("div", { class: "xE", ref: listRef }, visibleMessageIds.map((msgId) => {
      const msg = messageMap.value.get(msgId);
      if (!msg) return null;
      const grouping = getMessageGrouping(msgId);
      return k$1(
        MessageItem,
        {
          key: msg.stableKey || msgId,
          message: msg,
          isSelf: grouping.isSelf,
          isGrouped: grouping.isGrouped,
          isGroupedWithNext: grouping.isGroupedWithNext
        }
      );
    }))
  );
}const STRINGS = {
  // 通用
  loading: "加载中...",
  confirm: "确认",
  cancel: "取消",
  // 消息状态
  messageDeleted: "此消息已撤回",
  messageEdited: "已编辑",
  messageFailed: "发送失败，点击重试",
  expandFull: "展开全文",
  collapse: "收起",
  imageTag: "[图片]",
  // 输入
  typingSingle: "正在输入...",
  typingMultiple: (count) => ` 和其他 ${count} 人正在输入...`,
  typingAnd: " 和 ",
  // 搜索
  searchPlaceholder: "搜索消息...",
  searchNoResults: "未找到相关消息",
  searchConversations: "搜索对话...",
  // 用户
  online: "在线",
  noSignature: "这个人很懒，什么都没有写...",
  noMessages: "暂无发言记录",
  messagesUnit: "条消息",
  perDay: "条/天",
  firstMessage: "首次发言",
  searchMessages: "搜索发言",
  homepage: "主页",
  signature: "个性签名",
  media: "媒体",
  userProfile: "用户资料",
  // 操作
  confirmDelete: "确认撤回这条消息吗？",
  savedToBmo: "已存入BMO面板",
  reply: "回复",
  copy: "复制",
  edit: "编辑",
  delete: "撤回",
  favorite: "收藏",
  // 通知
  repliedYou: "回复了你",
  mentionedYou: "提到了你",
  view: "查看",
  ignore: "忽略",
  // BMO
  openBmoPanel: "打开 BMO 快速拼装面板",
  noBmoSaved: "暂无保存的 BMO 表情",
  uploadOrFavorite: "上传或右键图片收藏",
  // 格式化
  linkPlaceholder: "输入链接 URL..."
};function TypingIndicator() {
  const users = Array.from(typingUsers.value.values());
  const lastText = A("");
  const isVisible = useSignal(false);
  y$1(() => {
    if (users.length > 0) {
      let text = "";
      if (users.length === 1) {
        text = `${users[0]} ${STRINGS.typingSingle}`;
      } else if (users.length === 2) {
        text = `${users[0]}${STRINGS.typingAnd}${users[1]} ${STRINGS.typingSingle}`;
      } else {
        text = `${users[0]}${STRINGS.typingMultiple(users.length - 1)}`;
      }
      lastText.current = text;
      isVisible.value = true;
    } else {
      isVisible.value = false;
    }
  }, [users.length]);
  return k$1("div", { id: "dollars-typing-indicator", class: isVisible.value ? "visible" : "" }, lastText.current || " ");
}const FAVORITES_KEY = "dollars_saved_favorites";
const favorites = d$1([]);
function initFavorites() {
  try {
    const cloud = getChiiApp().cloud_settings.getAll();
    if (cloud[FAVORITES_KEY]) {
      const parsed = JSON.parse(cloud[FAVORITES_KEY]);
      if (Array.isArray(parsed)) {
        favorites.value = parsed;
      }
    }
  } catch (e) {
    favorites.value = [];
  }
  if (userInfo.value.id) {
    syncFavorites();
  }
}
async function syncFavorites() {
  if (!userInfo.value.id) return;
  try {
    const res = await fetch(apiUrl("/favorites", { uid: userInfo.value.id }));
    if (!res.ok) return;
    const { data } = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const current = favorites.peek();
      const merged = [.../* @__PURE__ */ new Set([...data, ...current])];
      if (merged.length !== current.length || merged.some((u) => !current.includes(u))) {
        favorites.value = merged;
        saveToCloud(merged);
      }
    }
  } catch (e) {
  }
}
function addFavorite(url) {
  const list = favorites.peek();
  if (!list.includes(url)) {
    const newList = [url, ...list];
    favorites.value = newList;
    saveToCloud(newList);
    if (userInfo.value.id) {
      fetch(apiUrl("/favorites/add"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userInfo.value.id, image_url: url })
      }).catch(() => {
      });
    }
  }
}
function removeFavorite(url) {
  const list = favorites.peek();
  const newList = list.filter((u) => u !== url);
  favorites.value = newList;
  saveToCloud(newList);
  if (userInfo.value.id) {
    fetch(apiUrl("/favorites/remove"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userInfo.value.id, image_url: url })
    }).catch(() => {
    });
  }
}
function saveToCloud(list) {
  const cloud = getChiiApp().cloud_settings;
  cloud.update({ [FAVORITES_KEY]: JSON.stringify(list) });
  cloud.save();
}const _ = "http://www.w3.org/2000/svg";
const a = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const s24 = (c) => `<svg xmlns="${_}" width="24" height="24" viewBox="0 0 24 24" ${a}>${c}</svg>`;
const s20 = (c) => `<svg xmlns="${_}" width="20" height="20" viewBox="0 0 24 24" ${a}>${c}</svg>`;
const iconSpoiler = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/>');
const iconBold = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z"/><path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"/>');
const iconItalic = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 5l6 0"/><path d="M7 19l6 0"/><path d="M14 5l-4 14"/>');
const iconUnderline = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 5v5a5 5 0 0 0 10 0v-5"/><path d="M5 19h14"/>');
const iconStrike = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0"/><path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5"/>');
const iconCode = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M14 4l-4 16"/>');
const iconLink = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6"/><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>');
const iconCheck = s20('<polyline points="20 6 9 17 4 12"/>');
const iconBack = s20('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>');
const iconUpload = s24('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>');
const iconClose = s24('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
const iconSearch = s24('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>');
const iconStar = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>');
const iconBmoPanel = s20('<path d="M12 5l0 14"/><path d="M5 12l14 0"/>');
const iconHome = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>');
const iconHistory = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8l0 4l2 2"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/>');
const iconExpand = s24('<path d="M6 9l6 6l6 -6"/>');
const iconReply = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12"/><path d="M11 8l-3 3l3 3"/><path d="M16 11h-8"/>');
const iconCopy = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/>');
const iconEdit = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415"/><path d="M16 5l3 3"/>');
const iconDelete = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 15l6 -6"/><path d="M11 9h4v4"/>');
const iconFavorite = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053"/><path d="M16 19h6"/><path d="M19 16v6"/>');
const iconCalendar = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M11 15h1"/><path d="M12 15v3"/>');
const iconPhoto = s20('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/>');
const iconFile = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"/>');
const iconMic = s24('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -6 0z"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M8 21h8"/><path d="M12 17v4"/>');
const iconPen = s24('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>');const BMO_READY_EVENT = "dollars:bmo-ready";
function announceBmoReady() {
  window.dispatchEvent(new Event(BMO_READY_EVENT));
}
function ensureBmoji() {
  if (window.Bmoji) {
    announceBmoReady();
    return;
  }
  const existingScript = document.querySelector('script[data-dollars-bmo], script[src*="/js/lib/bmo/bmo.js"]');
  if (existingScript) {
    existingScript.addEventListener("load", announceBmoReady, { once: true });
    return;
  }
  const version = window.CHOBITS_VER;
  const script = document.createElement("script");
  script.dataset.dollarsBmo = "1";
  script.src = version ? `/js/lib/bmo/bmo.js?${version}` : "/js/lib/bmo/bmo.js";
  script.addEventListener("load", announceBmoReady, { once: true });
  document.head.appendChild(script);
}
function onBmoReady(callback) {
  window.addEventListener(BMO_READY_EVENT, callback);
  return () => {
    window.removeEventListener(BMO_READY_EVENT, callback);
  };
}
function loadSavedBmoItems() {
  try {
    const bmoji = window.Bmoji;
    const savedBmo = bmoji?.savedBmo?.list?.() || JSON.parse(localStorage.getItem("chii_saved_bmo") || "[]");
    return Array.isArray(savedBmo) ? savedBmo.filter((item) => !!item?.code) : [];
  } catch {
    return [];
  }
}function SmileyPanel({ onSelect, textareaRef }) {
  const [activeTab, setActiveTab] = d$2("TV");
  const [bmoItems, setBmoItems] = d$2([]);
  const [isUploading, setIsUploading] = d$2(false);
  const panelRef = A(null);
  const contentRef = A(null);
  y$1(() => {
    if (activeTab === "BMO") {
      setBmoItems(loadSavedBmoItems());
    }
  }, [activeTab]);
  y$1(() => {
    if (!isSmileyPanelOpen.value) return;
    const handleClickOutside = (e) => {
      const panel = panelRef.current;
      const trigger = document.getElementById("xi");
      if (panel && !panel.contains(e.target) && (!trigger || !trigger.contains(e.target))) {
        toggleSmileyPanel(false);
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 50);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSmileyPanelOpen.value]);
  y$1(() => {
    if (activeTab === "收藏") {
      initFavorites();
    }
  }, [activeTab]);
  y$1(() => {
    const bmoji = window.Bmoji;
    if (!bmoji || !isSmileyPanelOpen.value) return;
    requestAnimationFrame(() => {
      if (activeTab === "BMO" && contentRef.current) {
        bmoji.renderAll(contentRef.current, { width: 21, height: 21 });
      }
      const tabsContainer = document.getElementById("dollars-smiles-tabs");
      if (tabsContainer) {
        bmoji.renderAll(tabsContainer, { width: 21, height: 21 });
      }
    });
  }, [isSmileyPanelOpen.value, activeTab, bmoItems]);
  const handleSelect = q((code) => {
    onSelect(code);
    toggleSmileyPanel(false);
  }, [onSelect]);
  const handleTabClick = q((groupName) => {
    setActiveTab(groupName);
  }, []);
  const handleOpenBmoPanel = q((e) => {
    e.preventDefault();
    const apiObject = window.BgmBmoQuickPanel;
    if (apiObject && typeof apiObject.open === "function") {
      const textarea = textareaRef.current;
      if (!textarea) return;
      textarea.focus();
      apiObject.open(textarea);
      toggleSmileyPanel(false);
    } else {
      if (confirm("你需要先启用 'BMO 快速拼装面板'。\n\n是否前往启用页面？")) {
        window.location.href = "/dev/app/4853";
      }
    }
  }, [textareaRef]);
  const handleUploadFavorite = q(async (e) => {
    e.preventDefault();
    const tempInput = document.createElement("input");
    tempInput.type = "file";
    tempInput.accept = "image/*,.heic,.heif,.avif,.webp,.bmp";
    tempInput.multiple = true;
    tempInput.style.display = "none";
    tempInput.onchange = async (evt) => {
      const target = evt.target;
      const files = Array.from(target.files || []);
      if (files.length === 0) return;
      setIsUploading(true);
      try {
        const results = await uploadImages(files);
        const failed = results.find((result) => !result.status || !result.url);
        if (failed) throw new Error(failed.error || "上传失败");
        results.forEach((result) => {
          if (result.url) addFavorite(result.url);
        });
      } catch (err) {
        alert(err.message || "上传失败");
      } finally {
        setIsUploading(false);
      }
    };
    tempInput.click();
  }, []);
  const handleRemoveFavorite = q((e, url) => {
    e.preventDefault();
    e.stopPropagation();
    removeFavorite(url);
  }, []);
  if (!isSmileyPanelOpen.value) {
    return null;
  }
  let smileys = [];
  let groupedSmileySections = [];
  let specialContent = null;
  if (activeTab === "BMO") {
    specialContent = k$1("div", { style: { display: "contents" } }, k$1("li", { class: "xza" }, k$1(
      "a",
      {
        href: "#",
        id: "dollars-open-bmo-panel",
        title: "打开 BMO 快速拼装面板",
        onClick: handleOpenBmoPanel,
        style: { backgroundImage: "none", display: "flex", alignItems: "center", justifyContent: "center" },
        dangerouslySetInnerHTML: { __html: iconBmoPanel }
      }
    )), bmoItems.length > 0 ? bmoItems.map((item) => k$1("li", { key: item.code, class: "xza" }, k$1(
      "a",
      {
        href: "#",
        "data-smiley": item.code,
        title: item.name || item.code,
        onClick: (e) => {
          e.preventDefault();
          handleSelect(item.code);
        }
      },
      k$1("span", { class: "bmo", "data-code": item.code })
    ))) : k$1("p", { style: { width: "100%", textAlign: "center", color: "var(--xa)", fontSize: "12px", marginTop: "20px", padding: "0 10px" } }, "暂无保存的 BMO 表情", k$1("br", null), k$1("a", { href: "/dev/app/4853", target: "_blank", rel: "noopener", style: { color: "var(--primary-color)" } }, "前往 BMO 快速拼装面板")));
  } else if (activeTab === "收藏") {
    const favoritesList = favorites.value;
    specialContent = k$1("div", { style: { display: "contents" } }, k$1("li", { class: "xza xQa", style: { border: "2px dashed var(--xE)", borderRadius: "8px", boxSizing: "border-box" } }, k$1(
      "a",
      {
        href: "#",
        title: "上传新表情",
        onClick: handleUploadFavorite,
        style: { backgroundImage: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--xa)" }
      },
      isUploading ? k$1("span", { style: { fontSize: "12px" } }, "...") : k$1("span", { dangerouslySetInnerHTML: { __html: iconUpload } })
    )), favoritesList.length > 0 ? favoritesList.map((url) => k$1("li", { key: url, class: "xza xQa" }, k$1(
      "a",
      {
        href: "#",
        "data-smiley": `[sticker]${escapeHTML(url)}[/sticker]`,
        title: `[sticker]${url}[/sticker]`,
        onClick: (e) => {
          e.preventDefault();
          handleSelect(`[sticker]${url}[/sticker]`);
        },
        style: { backgroundImage: `url('${url}')` }
      }
    ), k$1(
      "button",
      {
        class: "remove-favorite-btn",
        title: "移除收藏",
        onClick: (e) => handleRemoveFavorite(e, url)
      },
      "×"
    ))) : k$1("p", { style: { width: "100%", textAlign: "center", color: "var(--xc)", fontSize: "12px", marginTop: "20px", padding: "0 10px" } }, "上传或右键图片收藏", k$1("br", null), "(存储于Chii云端)"));
  } else if (smileyRanges.find((r) => r.name === activeTab)?.isLarge) {
    groupedSmileySections = getGroupedSmileyCodes(activeTab);
  } else {
    smileys = generateSmileyCodes(activeTab);
  }
  const activeRange = smileyRanges.find((r) => r.name === activeTab);
  const isLargeTab = activeRange?.isLarge ?? false;
  return k$1("div", { ref: panelRef, id: "dollars-smiles-floating", class: `open ${isSmileyPanelClosing.value ? "closing" : ""} ${isLargeTab ? "large-smiley-mode" : ""}` }, k$1("div", { id: "dollars-smiles-tabs" }, smileyRanges.map((range) => {
    let textContent = range.name;
    if (range.name === "收藏") {
      textContent = k$1("span", { dangerouslySetInnerHTML: { __html: iconStar }, style: { display: "flex" } });
    } else if (range.name === "BMO") {
      textContent = k$1("span", { class: "bmo", "data-code": "(bmoCgASACIBLgCg)", style: { verticalAlign: "middle" } });
    } else if (range.path) {
      const iconId = range.tabIconId ?? range.ids?.[0] ?? range.start;
      if (!iconId) return null;
      textContent = k$1("img", { src: range.path(iconId), alt: range.name, style: { width: "21px", height: "21px", verticalAlign: "middle" } });
    }
    return k$1(
      "button",
      {
        key: range.name,
        class: `xAa ${activeTab === range.name ? "active" : ""}`,
        "data-group": range.name,
        onClick: () => handleTabClick(range.name),
        title: range.name
      },
      textContent
    );
  })), k$1("div", { id: "dollars-smiles-content", ref: contentRef, class: groupedSmileySections.length > 0 ? "grouped-content" : "" }, specialContent, groupedSmileySections.map((section) => k$1("section", { key: section.name, class: "smiley-group-section" }, k$1("div", { class: "smiley-group-title" }, section.name), k$1("div", { class: "smiley-group-grid" }, section.items.map(({ code }) => {
    const url = getSmileyUrl(code);
    return k$1("li", { key: code, class: "xza" }, k$1(
      "a",
      {
        href: "#",
        "data-smiley": code,
        onClick: (e) => {
          e.preventDefault();
          handleSelect(code);
        },
        style: url ? { backgroundImage: `url('${url}')` } : void 0,
        title: code
      }
    ));
  })))), smileys.map((code) => {
    const url = getSmileyUrl(code);
    return k$1("li", { key: code, class: "xza" }, k$1(
      "a",
      {
        href: "#",
        "data-smiley": code,
        onClick: (e) => {
          e.preventDefault();
          handleSelect(code);
        },
        style: url ? { backgroundImage: `url('${url}')` } : void 0,
        title: code
      }
    ));
  })));
}const formatterVisible = d$1(false);
const formatterLinkMode = d$1(false);
const PORTAL_ID = "dollars-text-formatter-portal";
function TextFormatter({ editorRef, inputControllerRef }) {
  y$1(() => {
    let root = document.getElementById(PORTAL_ID);
    if (!root) {
      root = document.createElement("div");
      root.id = PORTAL_ID;
      document.body.appendChild(root);
    }
    R(k$1(TextFormatterLayer, { editorRef, inputControllerRef }), root);
    return () => {
      R(null, root);
      root.remove();
    };
  }, [editorRef, inputControllerRef]);
  return null;
}
function TextFormatterLayer({ editorRef, inputControllerRef }) {
  const containerRef = A(null);
  const linkInputRef = A(null);
  const savedRangeRef = A(null);
  const checkSelection = q(() => {
    const editor = editorRef.current;
    const controller = inputControllerRef.current;
    if (!editor || !controller) return;
    if (document.activeElement !== editor) {
      if (containerRef.current?.contains(document.activeElement)) return;
      if (formatterLinkMode.value) return;
      hide();
      return;
    }
    const selection = controller.getSelection();
    if (selection.start !== selection.end) {
      show();
    } else {
      hide();
    }
  }, [editorRef, inputControllerRef]);
  const show = q(() => {
    const editor = editorRef.current;
    const controller = inputControllerRef.current;
    const el = containerRef.current;
    if (!editor || !controller || !el) return;
    const rect = editor.getBoundingClientRect();
    el.style.top = `${rect.top - 50}px`;
    el.style.left = `${rect.left + rect.width / 2 - el.offsetWidth / 2}px`;
    formatterVisible.value = true;
    savedRangeRef.current = controller.getSelection();
  }, [editorRef, inputControllerRef]);
  const hide = q(() => {
    formatterVisible.value = false;
    setTimeout(() => {
      if (!formatterVisible.value) {
        formatterLinkMode.value = false;
        if (linkInputRef.current) {
          linkInputRef.current.value = "";
        }
      }
    }, 200);
  }, []);
  const switchMode = q((isLinkMode) => {
    const controller = inputControllerRef.current;
    if (isLinkMode) {
      formatterLinkMode.value = true;
      savedRangeRef.current = controller?.getSelection() || { start: 0, end: 0 };
      setTimeout(() => linkInputRef.current?.focus(), 50);
    } else {
      formatterLinkMode.value = false;
      restoreSelection();
    }
  }, [inputControllerRef]);
  const restoreSelection = q(() => {
    const controller = inputControllerRef.current;
    if (controller && savedRangeRef.current) {
      controller.focus();
      controller.setSelection(savedRangeRef.current.start, savedRangeRef.current.end);
    }
  }, [inputControllerRef]);
  const applyBBCode = q((tag) => {
    restoreSelection();
    const controller = inputControllerRef.current;
    if (!controller) return;
    const { start, end } = controller.getSelection();
    const text = controller.getValue();
    const selection = text.substring(start, end);
    if (!selection) return;
    const before = text.substring(0, start);
    const after = text.substring(end);
    const newText = `${before}[${tag}]${selection}[/${tag}]${after}`;
    controller.setValue(newText, {
      focus: true,
      selection: {
        start: start + tag.length + 2,
        end: end + tag.length + 2
      }
    });
    hide();
  }, [inputControllerRef, restoreSelection, hide]);
  const applyLink = q(() => {
    const url = linkInputRef.current?.value.trim();
    if (!url) {
      switchMode(false);
      return;
    }
    const controller = inputControllerRef.current;
    if (!controller) return;
    const activeSelection = savedRangeRef.current || controller.getSelection();
    const { start, end } = activeSelection;
    const text = controller.getValue();
    const selection = text.substring(start, end);
    const before = text.substring(0, start);
    const after = text.substring(end);
    const newText = `${before}[url=${url}]${selection}[/url]${after}`;
    controller.setValue(newText, {
      focus: true,
      selection: {
        start,
        end: start + newText.length - before.length - after.length
      }
    });
    hide();
    if (linkInputRef.current) {
      linkInputRef.current.value = "";
    }
  }, [inputControllerRef, switchMode, hide]);
  y$1(() => {
    const editor = editorRef.current;
    if (!editor) return;
    const handleMouseDown = () => hide();
    const handleMouseUp = () => setTimeout(checkSelection, 10);
    const handleTouchEnd = () => setTimeout(checkSelection, 50);
    const handleKeyUp = () => setTimeout(checkSelection, 10);
    const handleScroll = () => hide();
    const handleResize = () => hide();
    editor.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    editor.addEventListener("touchend", handleTouchEnd);
    editor.addEventListener("keyup", handleKeyUp);
    editor.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      editor.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      editor.removeEventListener("touchend", handleTouchEnd);
      editor.removeEventListener("keyup", handleKeyUp);
      editor.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [editorRef, checkSelection, hide]);
  const handleLinkKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyLink();
    } else if (e.key === "Escape") {
      switchMode(false);
      inputControllerRef.current?.focus();
    }
  };
  const className = `xn${formatterVisible.value ? " visible" : ""}${formatterLinkMode.value ? " link-mode" : ""}`;
  const formatterContent = k$1(
    "div",
    {
      ref: containerRef,
      id: "xn",
      class: className
    },
    k$1("div", { class: "xka xoa" }, k$1("button", { type: "button", class: "xja", title: "防剧透 (Mask)", onClick: () => applyBBCode("mask"), dangerouslySetInnerHTML: { __html: iconSpoiler } }), k$1("div", { class: "xla" }), k$1("button", { type: "button", class: "xja", title: "加粗", onClick: () => applyBBCode("b"), dangerouslySetInnerHTML: { __html: iconBold } }), k$1("button", { type: "button", class: "xja", title: "斜体", onClick: () => applyBBCode("i"), dangerouslySetInnerHTML: { __html: iconItalic } }), k$1("button", { type: "button", class: "xja", title: "下划线", onClick: () => applyBBCode("u"), dangerouslySetInnerHTML: { __html: iconUnderline } }), k$1("button", { type: "button", class: "xja", title: "删除线", onClick: () => applyBBCode("s"), dangerouslySetInnerHTML: { __html: iconStrike } }), k$1("button", { type: "button", class: "xja", title: "等宽代码", onClick: () => applyBBCode("code"), dangerouslySetInnerHTML: { __html: iconCode } }), k$1("div", { class: "xla" }), k$1("button", { type: "button", class: "xja", title: "添加链接", onClick: () => switchMode(true), dangerouslySetInnerHTML: { __html: iconLink } })),
    k$1("div", { class: "xka xma" }, k$1("button", { type: "button", class: "xja", title: "返回", onClick: () => switchMode(false), dangerouslySetInnerHTML: { __html: iconBack } }), k$1("div", { class: "xla" }), k$1("input", { ref: linkInputRef, type: "text", class: "xna", placeholder: "输入链接 URL...", autoComplete: "off", onKeyDown: handleLinkKeyDown }), k$1("div", { class: "xla" }), k$1("button", { type: "button", class: "xja", title: "确认", onClick: applyLink, dangerouslySetInnerHTML: { __html: iconCheck } }))
  );
  return formatterContent;
}function MentionCompleter({ editorRef, inputControllerRef }) {
  const containerRef = A(null);
  const [visible, setVisible] = d$2(false);
  const [users, setUsers] = d$2([]);
  const [matchStart, setMatchStart] = d$2(-1);
  const queryRef = A(null);
  const timerRef = A(null);
  const checkInput = q(() => {
    const controller = inputControllerRef.current;
    if (!controller) return;
    const cursor = controller.getSelection().end;
    const text = controller.getValue().slice(0, cursor);
    const match = text.match(/(?:^|\s)(@[^\s]*)$/);
    if (!match) {
      hide();
      return;
    }
    const newMatchStart = cursor - match[1].length;
    setMatchStart(newMatchStart);
    const currentQuery = match[1].slice(1);
    if (currentQuery === queryRef.current && visible) return;
    queryRef.current = currentQuery;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (!currentQuery) {
      hide();
      return;
    }
    timerRef.current = setTimeout(() => fetchUsers(currentQuery), MENTION_DEBOUNCE);
  }, [inputControllerRef, visible]);
  const fetchUsers = async (query) => {
    const data = await searchMentionUsers(query, MAX_MENTION_RESULTS);
    if (query !== queryRef.current) return;
    if (data.length > 0) {
      setUsers(data);
      setVisible(true);
    } else {
      hide();
    }
  };
  const hide = q(() => {
    setVisible(false);
    queryRef.current = null;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);
  const selectUser = q((user) => {
    const controller = inputControllerRef.current;
    if (!controller) return;
    controller.replaceRange(`@${user.username} `, matchStart, controller.getSelection().end, {
      focus: true
    });
    hide();
  }, [inputControllerRef, matchStart, hide]);
  y$1(() => {
    const editor = editorRef.current;
    if (!editor) return;
    const handleInput = () => checkInput();
    const handleBlur = (e) => {
      if (containerRef.current?.contains(e.relatedTarget)) return;
      setTimeout(hide, 150);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && visible) {
        e.preventDefault();
        hide();
      }
    };
    editor.addEventListener("input", handleInput);
    editor.addEventListener("blur", handleBlur);
    editor.addEventListener("keydown", handleKeyDown);
    return () => {
      editor.removeEventListener("input", handleInput);
      editor.removeEventListener("blur", handleBlur);
      editor.removeEventListener("keydown", handleKeyDown);
    };
  }, [editorRef, checkInput, hide, visible]);
  if (!visible || users.length === 0) {
    return null;
  }
  return k$1(
    "div",
    {
      ref: containerRef,
      id: "dollars-mention-list",
      class: "visible"
    },
    users.map((user) => k$1(
      "div",
      {
        key: user.id || user.username,
        class: "xEa",
        onClick: () => selectUser(user)
      },
      k$1(
        "img",
        {
          src: user.avatar_url || "//lain.bgm.tv/pic/user/m/000/00/00/0.jpg",
          alt: ""
        }
      ),
      k$1("div", { class: "mention-item-info" }, k$1("span", { class: "mention-item-nick" }, escapeHTML(user.nickname || user.username)), k$1("span", { class: "mention-item-user" }, "@", escapeHTML(user.username)))
    ))
  );
}function MediaPreview({ previewMedia, onRemoveMedia }) {
  if (previewMedia.length === 0) return null;
  return k$1("div", { class: "xX visible" }, previewMedia.map((media, index) => k$1("div", { key: index, class: `image-preview-item ${media.type === "video" ? "video-preview-item" : ""}` }, media.type === "image" ? k$1(
    "img",
    {
      src: media.url,
      class: "preview-image",
      onClick: () => {
        const imageUrls = previewMedia.filter((m) => m.type === "image").map((m) => m.url);
        const imageIndex = previewMedia.slice(0, index).filter((m) => m.type === "image").length;
        showImageViewer(imageUrls, imageIndex);
      },
      style: { cursor: "zoom-in" }
    }
  ) : k$1(S, null, k$1(
    "video",
    {
      src: media.url,
      class: "preview-video",
      muted: true,
      preload: "metadata"
    }
  ), k$1("div", { class: "video-play-overlay" })), k$1(
    "button",
    {
      class: "preview-remove-btn",
      onClick: () => onRemoveMedia(index),
      title: media.type === "image" ? "删除图片" : "删除视频"
    },
    "✕"
  ))));
}function FloatingPortal({ children }) {
  const hostRef = A(null);
  if (!hostRef.current) {
    hostRef.current = document.createElement("div");
  }
  y$1(() => {
    const host = hostRef.current;
    if (!host) return;
    const root = document.getElementById("xa") ?? document.body;
    root.appendChild(host);
    return () => {
      R(null, host);
      host.remove();
    };
  }, []);
  y$1(() => {
    const host = hostRef.current;
    if (host) {
      R(k$1(S, null, children), host);
    }
  }, [children]);
  return null;
}const ALLOWED_IMAGE_EXTS = /* @__PURE__ */ new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
  ".bmp",
  ".tiff",
  ".tif",
  ".svg",
  ".heic",
  ".heif",
  ".ico",
  ".jxl",
  ".apng"
]);
const ALLOWED_VIDEO_EXTS = /* @__PURE__ */ new Set([
  ".mp4",
  ".webm",
  ".mov",
  ".mkv",
  ".avi"
]);
const ALLOWED_AUDIO_EXTS = /* @__PURE__ */ new Set([
  ".mp3",
  ".wav",
  ".ogg",
  ".aac",
  ".flac",
  ".weba",
  ".webm",
  ".m4a"
]);
const MEDIA_FILE_ACCEPT = "image/*,.heic,.heif,video/*";
const ANY_FILE_ACCEPT = "*/*";
function getMediaKind(file) {
  const ext = "." + (file.name.split(".").pop() || "").toLowerCase();
  return {
    ext,
    isImage: file.type.startsWith("image/") || ALLOWED_IMAGE_EXTS.has(ext),
    isVideo: file.type.startsWith("video/") || ALLOWED_VIDEO_EXTS.has(ext),
    isAudio: file.type.startsWith("audio/") || ALLOWED_AUDIO_EXTS.has(ext)
  };
}
function normalizeUploadFile(file, kind) {
  if (file.type || !kind.isImage) return file;
  const mimeMap = {
    ".heic": "image/heic",
    ".heif": "image/heif",
    ".bmp": "image/bmp",
    ".tiff": "image/tiff",
    ".tif": "image/tiff",
    ".jxl": "image/jxl",
    ".avif": "image/avif",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif"
  };
  return new File([file], file.name, { type: mimeMap[kind.ext] || "application/octet-stream" });
}
async function getImageDimensions(file) {
  let width = 0;
  let height = 0;
  try {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    await new Promise((resolve) => {
      img.onload = () => {
        width = img.naturalWidth;
        height = img.naturalHeight;
        URL.revokeObjectURL(objectUrl);
        resolve();
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        resolve();
      };
      img.src = objectUrl;
    });
  } catch {
  }
  return { width, height };
}
function useMediaUpload(inputControllerRef) {
  const fileInputRef = A(null);
  const [isUploading, setIsUploading] = d$2(false);
  const [previewMedia, setPreviewMedia] = d$2([]);
  const parseMediaFiles = q((text, knownMeta) => {
    const imgRegex = /\[img\](.*?)\[\/img\]/g;
    const videoRegex = /\[video\](.*?)\[\/video\]/g;
    const media = [];
    let match;
    while ((match = imgRegex.exec(text)) !== null) {
      media.push({ type: "image", url: match[1], position: match.index });
    }
    while ((match = videoRegex.exec(text)) !== null) {
      media.push({ type: "video", url: match[1], position: match.index });
    }
    media.sort((a, b) => a.position - b.position);
    setPreviewMedia((prev) => {
      if (prev.length === media.length && prev.every((item, i) => item.type === media[i].type && item.url === media[i].url)) {
        return prev;
      }
      return media.map(({ type, url }) => {
        const existing = prev.find((p) => p.url === url);
        if (existing) {
          return { ...existing, type, url };
        }
        if (knownMeta && knownMeta[url]) {
          const meta = knownMeta[url];
          return {
            type,
            url,
            width: meta.width,
            height: meta.height
          };
        }
        return { type, url };
      });
    });
  }, []);
  const handleRemoveMedia = q((index) => {
    const controller = inputControllerRef.current;
    if (!controller) return;
    const text = controller.getValue();
    const currentPreviewMedia = previewMedia;
    const media = currentPreviewMedia[index];
    if (!media) return;
    const regex = media.type === "image" ? /\[img\](.*?)\[\/img\]/g : /\[video\](.*?)\[\/video\]/g;
    let matchIndex = 0;
    let currentMediaIndex = 0;
    for (let i = 0; i < index; i++) {
      if (currentPreviewMedia[i].type === media.type) {
        matchIndex++;
      }
    }
    const newText = text.replace(regex, (match) => {
      if (currentMediaIndex === matchIndex) {
        currentMediaIndex++;
        return "";
      }
      currentMediaIndex++;
      return match;
    });
    controller.setValue(newText, { focus: true });
  }, [inputControllerRef, previewMedia]);
  const openFilePicker = q((accept) => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = accept;
      fileInputRef.current.click();
    }
  }, []);
  const handleAttachMediaClick = q(() => {
    openFilePicker(MEDIA_FILE_ACCEPT);
  }, [openFilePicker]);
  const handleAttachFileClick = q(() => {
    openFilePicker(ANY_FILE_ACCEPT);
  }, [openFilePicker]);
  const insertUploadResult = q((file, kind, result, dimensions) => {
    if (!result.status || !result.url) {
      alert(result.error || "上传失败");
      return;
    }
    const controller = inputControllerRef.current;
    if (!controller) return;
    let tag = "img";
    if (kind.isVideo) {
      tag = "video";
    } else if (kind.isAudio) {
      tag = "audio";
    } else if (!kind.isImage) {
      tag = "file";
    }
    const safeName = file.name.replace(/[\[\]\r\n]+/g, " ").trim() || "附件";
    const bbcode = tag === "file" ? `[file=${safeName}]${result.url}[/file]` : `[${tag}]${result.url}[/${tag}]`;
    controller.insertText(bbcode, { focus: true });
    if (tag === "img" && dimensions?.width && dimensions.height) {
      setPreviewMedia((prev) => {
        const existingIndex = prev.findIndex(
          (item) => item.type === "image" && item.url === result.url && (!item.width || !item.height)
        );
        if (existingIndex >= 0) {
          const next = [...prev];
          next[existingIndex] = {
            ...next[existingIndex],
            width: dimensions.width,
            height: dimensions.height
          };
          return next;
        }
        if (prev.some((item) => item.type === "image" && item.url === result.url)) {
          return prev;
        }
        return [...prev, {
          type: "image",
          url: result.url,
          width: dimensions.width,
          height: dimensions.height
        }];
      });
    }
  }, [inputControllerRef]);
  const handleFilesUpload = q(async (files) => {
    if (files.length === 0) return;
    setIsUploading(true);
    try {
      const prepared = files.map((file) => {
        const kind = getMediaKind(file);
        return { original: file, kind, upload: normalizeUploadFile(file, kind) };
      });
      const images = prepared.filter((item) => item.kind.isImage);
      const others = prepared.filter((item) => !item.kind.isImage);
      if (images.length > 0) {
        const [dimensions, results] = await Promise.all([
          Promise.all(images.map((item) => getImageDimensions(item.upload))),
          uploadImages(images.map((item) => item.upload))
        ]);
        if (results.length !== images.length && results[0]?.status === false) {
          alert(results[0].error || "上传失败");
        } else {
          images.forEach((item, index) => {
            insertUploadResult(item.original, item.kind, results[index] ?? { status: false, error: "上传失败" }, dimensions[index]);
          });
        }
      }
      for (const item of others) {
        const result = await uploadFile(item.upload);
        insertUploadResult(item.original, item.kind, result);
      }
    } catch (e) {
      alert("上传失败，请重试");
    } finally {
      setIsUploading(false);
    }
  }, [insertUploadResult]);
  const handleFileUpload = q(async (file) => {
    await handleFilesUpload([file]);
  }, [handleFilesUpload]);
  const handleFileChange = q(async (e) => {
    const input = e.target;
    const files = Array.from(input.files || []);
    if (files.length > 0) {
      await handleFilesUpload(files);
      input.value = "";
    }
  }, [handleFilesUpload]);
  const handlePaste = q(async (e) => {
    const items = [...e.clipboardData?.items || []].filter(
      (it) => it.kind === "file" && (it.type.startsWith("image/") || it.type.startsWith("video/") || it.type.startsWith("audio/") || it.type === "application/octet-stream" || it.type === "")
    );
    if (items.length > 0) {
      e.preventDefault();
      const files = items.map((item) => item.getAsFile()).filter((file) => Boolean(file));
      await handleFilesUpload(files);
      return;
    }
    const text = e.clipboardData?.getData("text/plain");
    if (text) {
      e.preventDefault();
      inputControllerRef.current?.insertText(text, { focus: true });
    }
  }, [handleFilesUpload, inputControllerRef]);
  return {
    fileInputRef,
    isUploading,
    previewMedia,
    setPreviewMedia,
    parseMediaFiles,
    handleRemoveMedia,
    handleAttachMediaClick,
    handleAttachFileClick,
    handleFileChange,
    handleFileUpload,
    handleFilesUpload,
    handlePaste
  };
}const RICH_INPUT_TOKEN_ATTR = "data-rich-raw";
const BLOCK_TAGS = /* @__PURE__ */ new Set(["DIV", "P", "LI"]);
function buildTokenHTML(raw, innerHTML, className) {
  return `<span class="xsa ${className}" ${RICH_INPUT_TOKEN_ATTR}="${escapeHTML(raw)}" contenteditable="false">${innerHTML}</span>`;
}
function renderRichInputToken(token) {
  switch (token.type) {
    case "custom-image": {
      const className = token.isCommunityEmoji ? "smiley xxa" : "custom-emoji xwa";
      const innerHTML = `<img src="${escapeHTML(token.src)}" class="${className}" alt="${escapeHTML(token.raw)}" loading="lazy" decoding="async" referrerpolicy="no-referrer">`;
      return buildTokenHTML(token.raw, innerHTML, "chat-input-token-image");
    }
    case "bmo":
      return buildTokenHTML(token.raw, `<span class="bmo" data-code="${escapeHTML(token.code)}"></span>`, "xua");
    case "smiley": {
      let className = "smiley xxa";
      if (token.variant === "musume") {
        className += " smiley-musume xva";
      } else if (token.variant === "blake") {
        className += " smiley-blake xva";
      }
      const attrs = token.variant === "bgm" ? ' width="21" height="21"' : "";
      const innerHTML = `<img src="${escapeHTML(token.src)}" class="${className}" alt="${escapeHTML(token.raw)}"${attrs}>`;
      return buildTokenHTML(token.raw, innerHTML, "xta");
    }
  }
}
function collectRenderableRichInputTokens(text) {
  return collectRenderableInlineTokenRaws(text);
}
function renderRichInputHTML(text) {
  return replaceInlineTokens(
    text,
    (token, raw) => token ? renderRichInputToken(token) : escapeHTML(raw),
    { renderText: escapeHTML }
  );
}
function isTokenElement(node) {
  return node instanceof HTMLElement && node.hasAttribute(RICH_INPUT_TOKEN_ATTR);
}
function isBlockElement(node) {
  return node instanceof HTMLElement && BLOCK_TAGS.has(node.tagName);
}
function getNodeRawLength(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent?.length || 0;
  }
  if (!(node instanceof HTMLElement)) {
    return 0;
  }
  const raw = node.getAttribute(RICH_INPUT_TOKEN_ATTR);
  if (raw != null) {
    return raw.length;
  }
  if (node.tagName === "BR") {
    return 1;
  }
  let total = 0;
  node.childNodes.forEach((child) => {
    total += getNodeRawLength(child);
  });
  return total;
}
function appendBlockBoundary(parts) {
  const last = parts[parts.length - 1];
  if (last?.endsWith("\n")) return;
  parts.push("\n");
}
function extractNodeText(node, parts) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.textContent) {
      parts.push(node.textContent);
    }
    return;
  }
  if (!(node instanceof HTMLElement)) {
    return;
  }
  const raw = node.getAttribute(RICH_INPUT_TOKEN_ATTR);
  if (raw != null) {
    parts.push(raw);
    return;
  }
  if (node.tagName === "BR") {
    parts.push("\n");
    return;
  }
  const children = Array.from(node.childNodes);
  children.forEach((child, index) => {
    extractNodeText(child, parts);
    if (isBlockElement(child) && index < children.length - 1) {
      appendBlockBoundary(parts);
    }
  });
}
function extractRichInputText(root) {
  const parts = [];
  const children = Array.from(root.childNodes);
  children.forEach((child, index) => {
    extractNodeText(child, parts);
    if (isBlockElement(child) && index < children.length - 1) {
      appendBlockBoundary(parts);
    }
  });
  return parts.join("");
}
function getRawOffset(root, target, offset) {
  let total = 0;
  const walk = (node) => {
    if (node === target) {
      if (node.nodeType === Node.TEXT_NODE) {
        total += Math.min(offset, node.textContent?.length || 0);
        return true;
      }
      if (isTokenElement(node)) {
        total += offset > 0 ? node.getAttribute(RICH_INPUT_TOKEN_ATTR)?.length || 0 : 0;
        return true;
      }
      const limit = Math.min(offset, node.childNodes.length);
      for (let i = 0; i < limit; i++) {
        total += getNodeRawLength(node.childNodes[i]);
      }
      return true;
    }
    if (isTokenElement(node)) {
      total += node.getAttribute(RICH_INPUT_TOKEN_ATTR)?.length || 0;
      return false;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      total += node.textContent?.length || 0;
      return false;
    }
    if (node instanceof HTMLElement && node.tagName === "BR") {
      total += 1;
      return false;
    }
    for (const child of Array.from(node.childNodes)) {
      if (walk(child)) {
        return true;
      }
    }
    return false;
  };
  walk(root);
  return total;
}
function getRichInputSelection(root) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) {
    return null;
  }
  return {
    start: getRawOffset(root, range.startContainer, range.startOffset),
    end: getRawOffset(root, range.endContainer, range.endOffset)
  };
}
function findDomPosition(node, rawOffset) {
  if (node.nodeType === Node.TEXT_NODE) {
    return {
      container: node,
      offset: Math.min(rawOffset, node.textContent?.length || 0)
    };
  }
  if (isTokenElement(node) || node instanceof HTMLElement && node.tagName === "BR") {
    const parent = node.parentNode;
    if (!parent) {
      return { container: node, offset: 0 };
    }
    const index = Array.from(parent.childNodes).indexOf(node);
    const nodeLength = getNodeRawLength(node);
    return {
      container: parent,
      offset: index + (rawOffset > 0 && nodeLength > 0 ? 1 : 0)
    };
  }
  let remaining = rawOffset;
  for (const child of Array.from(node.childNodes)) {
    const childLength = getNodeRawLength(child);
    if (remaining <= childLength) {
      return findDomPosition(child, remaining);
    }
    remaining -= childLength;
  }
  return {
    container: node,
    offset: node.childNodes.length
  };
}
function setRichInputSelection(root, start, end = start) {
  const selection = window.getSelection();
  if (!selection) return;
  const totalLength = getNodeRawLength(root);
  const startOffset = Math.max(0, Math.min(start, totalLength));
  const endOffset = Math.max(0, Math.min(end, totalLength));
  const startPos = findDomPosition(root, startOffset);
  const endPos = findDomPosition(root, endOffset);
  const range = document.createRange();
  range.setStart(startPos.container, startPos.offset);
  range.setEnd(endPos.container, endPos.offset);
  selection.removeAllRanges();
  selection.addRange(range);
}
function getRenderedRichInputTokens(root) {
  return Array.from(root.querySelectorAll(`[${RICH_INPUT_TOKEN_ATTR}]`)).map((node) => node.getAttribute(RICH_INPUT_TOKEN_ATTR) || "");
}
function needsRichInputNormalization(root, text) {
  const expectedTokens = collectRenderableRichInputTokens(text);
  const renderedTokens = getRenderedRichInputTokens(root);
  if (expectedTokens.length !== renderedTokens.length) {
    return true;
  }
  if (expectedTokens.some((token, index) => token !== renderedTokens[index])) {
    return true;
  }
  return Array.from(root.querySelectorAll("div, p, br")).some(
    (node) => !node.closest(`[${RICH_INPUT_TOKEN_ATTR}]`)
  );
}function errorMessage(error) {
  return error instanceof Error ? error.message : "发送失败，请重试";
}
function useMessageComposerSend() {
  const [isSending, setIsSending] = d$2(false);
  const isSendingRef = A(false);
  const send = q(async (options) => {
    if (!options.content.trim() && !options.voiceDraft || isSendingRef.current) return;
    isSendingRef.current = true;
    setIsSending(true);
    try {
      await submitComposerMessage(options);
    } catch (error) {
      alert(errorMessage(error));
    } finally {
      isSendingRef.current = false;
      setIsSending(false);
    }
  }, []);
  return {
    isSending,
    send
  };
}const AUDIO_TYPES = [
  "audio/webm;codecs=opus",
  "audio/webm",
  "audio/mp4",
  "audio/ogg;codecs=opus",
  "audio/ogg"
];
function supportedAudioType() {
  if (typeof MediaRecorder === "undefined") return "";
  return AUDIO_TYPES.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}
function audioExtension(mimeType) {
  if (mimeType.includes("mp4")) return "m4a";
  if (mimeType.includes("ogg")) return "ogg";
  return "webm";
}
function voiceFileName(mimeType) {
  const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").replace(/\..+/, "").replace("T", "-");
  return `voice-${stamp}.${audioExtension(mimeType)}`;
}
function stopStream(stream) {
  stream?.getTracks().forEach((track) => track.stop());
}
function formatVoiceDuration(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}
function useVoiceRecorder() {
  const [state, setState] = d$2("idle");
  const [voiceDraft, setVoiceDraft] = d$2(null);
  const [duration, setDuration] = d$2(0);
  const recorderRef = A(null);
  const streamRef = A(null);
  const chunksRef = A([]);
  const timerRef = A(null);
  const startTimeRef = A(0);
  const cancelledRef = A(false);
  const objectUrlRef = A(null);
  const clearTimer = q(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const clearDraft = q(() => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setVoiceDraft(null);
    setDuration(0);
    if (state !== "recording") {
      setState("idle");
    }
  }, [state]);
  const finishRecording = q(() => {
    clearTimer();
    stopStream(streamRef.current);
    streamRef.current = null;
    recorderRef.current = null;
    if (cancelledRef.current) {
      cancelledRef.current = false;
      chunksRef.current = [];
      setDuration(0);
      setState("idle");
      return;
    }
    const chunks = chunksRef.current;
    chunksRef.current = [];
    const mimeType = supportedAudioType() || chunks[0]?.type || "audio/webm";
    const blob = new Blob(chunks, { type: mimeType });
    if (!blob.size) {
      alert("录音为空，请重试");
      setDuration(0);
      setState("idle");
      return;
    }
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }
    const url = URL.createObjectURL(blob);
    objectUrlRef.current = url;
    setVoiceDraft({
      file: new File([blob], voiceFileName(mimeType), { type: mimeType }),
      url,
      duration: Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1e3))
    });
    setState("preview");
  }, [clearTimer]);
  const startRecording = q(async () => {
    if (state === "recording") return;
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      alert("当前浏览器不支持录音");
      return;
    }
    clearDraft();
    cancelledRef.current = false;
    chunksRef.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = supportedAudioType();
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      streamRef.current = stream;
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = finishRecording;
      recorder.onerror = () => {
        cancelledRef.current = true;
        alert("录音失败，请重试");
        recorder.stop();
      };
      startTimeRef.current = Date.now();
      setDuration(0);
      setState("recording");
      recorder.start();
      timerRef.current = setInterval(() => {
        setDuration(Math.floor((Date.now() - startTimeRef.current) / 1e3));
      }, 250);
    } catch (error) {
      stopStream(streamRef.current);
      streamRef.current = null;
      if (error?.name === "NotAllowedError" || error?.name === "SecurityError") {
        alert("麦克风权限被拒绝");
      } else {
        alert("无法启动录音，请检查麦克风");
      }
      setState("idle");
    }
  }, [clearDraft, finishRecording, state]);
  const stopRecording = q(() => {
    const recorder = recorderRef.current;
    if (recorder?.state === "recording") {
      recorder.stop();
    }
  }, []);
  const cancelVoice = q(() => {
    const recorder = recorderRef.current;
    if (recorder?.state === "recording") {
      cancelledRef.current = true;
      recorder.stop();
      return;
    }
    clearDraft();
  }, [clearDraft]);
  y$1(() => () => {
    cancelledRef.current = true;
    clearTimer();
    stopStream(streamRef.current);
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }
  }, [clearTimer]);
  return {
    voiceState: state,
    voiceDraft,
    recordingDuration: duration,
    isRecording: state === "recording",
    startRecording,
    stopRecording,
    cancelVoice,
    clearVoiceDraft: clearDraft
  };
}const MAX_INPUT_HEIGHT$1 = 150;
const ATTACH_MENU_WIDTH$1 = 176;
function ChatInput() {
  const editorRef = A(null);
  const textareaProxyRef = A(null);
  const inputControllerRef = A(null);
  const containerRef = A(null);
  const inputValueRef = A("");
  const selectionRef = A({ start: 0, end: 0 });
  const typingTimerRef = A(null);
  const isTypingRef = A(false);
  const draftSaveTimerRef = A(null);
  const isComposingRef = A(false);
  const compositionEndTimerRef = A(null);
  const isCompositionJustEndedRef = A(false);
  const attachButtonRef = A(null);
  const attachMenuRef = A(null);
  const attachCloseTimerRef = A(null);
  const dragDepthRef = A(0);
  const [isAttachMenuOpen, setIsAttachMenuOpen] = d$2(false);
  const [isAttachMenuClosing, setIsAttachMenuClosing] = d$2(false);
  const [attachMenuPosition, setAttachMenuPosition] = d$2(null);
  const [isDraggingFiles, setIsDraggingFiles] = d$2(false);
  const {
    fileInputRef,
    isUploading,
    previewMedia,
    setPreviewMedia,
    parseMediaFiles,
    handleRemoveMedia,
    handleAttachMediaClick,
    handleAttachFileClick,
    handleFileChange,
    handleFilesUpload,
    handlePaste
  } = useMediaUpload(inputControllerRef);
  const {
    voiceDraft,
    recordingDuration,
    isRecording,
    startRecording,
    stopRecording,
    cancelVoice,
    clearVoiceDraft
  } = useVoiceRecorder();
  const { isSending, send } = useMessageComposerSend();
  const updateAttachMenuPosition = q(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const left = Math.min(
      viewportWidth - ATTACH_MENU_WIDTH$1 - 8,
      Math.max(8, containerRect.right - ATTACH_MENU_WIDTH$1)
    );
    setAttachMenuPosition({
      left,
      bottom: Math.max(5, viewportHeight - containerRect.top + 5)
    });
  }, []);
  const closeAttachMenu = q(() => {
    if (!isAttachMenuOpen || isAttachMenuClosing) return;
    setIsAttachMenuClosing(true);
    if (attachCloseTimerRef.current) {
      clearTimeout(attachCloseTimerRef.current);
    }
    attachCloseTimerRef.current = setTimeout(() => {
      setIsAttachMenuOpen(false);
      setIsAttachMenuClosing(false);
      attachCloseTimerRef.current = null;
    }, 200);
  }, [isAttachMenuOpen, isAttachMenuClosing]);
  const toggleAttachMenu = q(() => {
    if (isAttachMenuOpen) {
      closeAttachMenu();
      return;
    }
    if (attachCloseTimerRef.current) {
      clearTimeout(attachCloseTimerRef.current);
      attachCloseTimerRef.current = null;
    }
    setIsAttachMenuClosing(false);
    updateAttachMenuPosition();
    setIsAttachMenuOpen(true);
  }, [closeAttachMenu, isAttachMenuOpen, updateAttachMenuPosition]);
  y$1(() => {
    if (!isAttachMenuOpen) return;
    const handlePointerDown = (event) => {
      const target = event.target;
      if (target && attachButtonRef.current?.contains(target)) return;
      if (target && attachMenuRef.current?.contains(target)) return;
      closeAttachMenu();
    };
    const handleKeyDown2 = (event) => {
      if (event.key === "Escape") {
        closeAttachMenu();
      }
    };
    const handleViewportChange = () => {
      updateAttachMenuPosition();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown2);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown2);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [closeAttachMenu, isAttachMenuOpen, updateAttachMenuPosition]);
  const syncProxyTextarea = q((value = inputValueRef.current, selection = selectionRef.current) => {
    const proxy = textareaProxyRef.current;
    if (!proxy) return;
    proxy.value = value;
    proxy.selectionStart = selection.start;
    proxy.selectionEnd = selection.end;
  }, []);
  const updateEditorHeight = q(() => {
    const editor = editorRef.current;
    if (!editor) return;
    editor.style.height = "auto";
    const nextHeight = Math.max(38, Math.min(editor.scrollHeight, MAX_INPUT_HEIGHT$1));
    editor.style.height = `${nextHeight}px`;
    editor.classList.toggle("is-overflowing", editor.scrollHeight > MAX_INPUT_HEIGHT$1);
  }, []);
  const syncRenderedAssetLayout = q(() => {
    const editor = editorRef.current;
    if (!editor) return;
    const images = Array.from(editor.querySelectorAll("img"));
    if (images.length === 0) {
      requestAnimationFrame(updateEditorHeight);
      return;
    }
    images.forEach((img) => {
      if (img.complete) return;
      const refresh = () => requestAnimationFrame(updateEditorHeight);
      img.addEventListener("load", refresh, { once: true });
      img.addEventListener("error", refresh, { once: true });
    });
    requestAnimationFrame(updateEditorHeight);
  }, [updateEditorHeight]);
  const scheduleDraftSave = q((value) => {
    if (editingMessage.value) return;
    if (draftSaveTimerRef.current) {
      clearTimeout(draftSaveTimerRef.current);
    }
    draftSaveTimerRef.current = setTimeout(() => {
      const content = value.trim();
      const reply = replyingTo.value;
      const replyInfo = reply ? {
        id: reply.id,
        uid: reply.uid,
        user: reply.user,
        avatar: reply.avatar,
        text: reply.text,
        raw: reply.raw
      } : null;
      saveDraft(content, replyInfo);
    }, DRAFT_SAVE_DELAY);
  }, []);
  const processInputState = q((value, knownMeta, options = {}) => {
    parseMediaFiles(value, knownMeta);
    updateEditorHeight();
    if (options.silent) {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
      if (isTypingRef.current) {
        sendTypingStop();
        isTypingRef.current = false;
      }
      if (draftSaveTimerRef.current) {
        clearTimeout(draftSaveTimerRef.current);
      }
    } else {
      if (settings.value.sharePresence && !isTypingRef.current) {
        sendTypingStart();
        isTypingRef.current = true;
      }
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
      typingTimerRef.current = setTimeout(() => {
        if (isTypingRef.current) {
          sendTypingStop();
          isTypingRef.current = false;
        }
      }, TYPING_STOP_DELAY);
      scheduleDraftSave(value);
    }
  }, [parseMediaFiles, scheduleDraftSave, updateEditorHeight]);
  const renderBmoTokens = q((value) => {
    if (!value.includes("(bmo")) return;
    const editor = editorRef.current;
    const bmoji = window.Bmoji;
    if (!editor || typeof bmoji?.renderAll !== "function") return;
    requestAnimationFrame(() => {
      if (editorRef.current === editor) {
        bmoji.renderAll(editor, { width: 21, height: 21 });
        requestAnimationFrame(updateEditorHeight);
      }
    });
  }, [updateEditorHeight]);
  const renderEditorValue = q((value, selection, focus = false) => {
    const editor = editorRef.current;
    if (!editor) return;
    editor.innerHTML = renderRichInputHTML(value);
    if (focus) {
      editor.focus();
    }
    if (focus || document.activeElement === editor) {
      setRichInputSelection(editor, selection.start, selection.end);
    }
    syncRenderedAssetLayout();
    renderBmoTokens(value);
  }, [renderBmoTokens, syncRenderedAssetLayout]);
  const applyInputValue = q((value, options = {}) => {
    const selection = options.selection || { start: value.length, end: value.length };
    inputValueRef.current = value;
    selectionRef.current = selection;
    syncProxyTextarea(value, selection);
    renderEditorValue(value, selection, !!options.focus);
    processInputState(value, options.knownMeta, options);
  }, [processInputState, renderEditorValue, syncProxyTextarea]);
  inputControllerRef.current = {
    focus: () => editorRef.current?.focus(),
    getSelection: () => {
      const editor = editorRef.current;
      const selection = editor ? getRichInputSelection(editor) : null;
      if (selection) {
        selectionRef.current = selection;
        syncProxyTextarea(inputValueRef.current, selection);
        return selection;
      }
      return selectionRef.current;
    },
    getValue: () => inputValueRef.current,
    insertText: (text, options = {}) => {
      const currentSelection = inputControllerRef.current?.getSelection() || selectionRef.current;
      inputControllerRef.current?.replaceRange(text, currentSelection.start, currentSelection.end, options);
    },
    replaceRange: (text, start, end, options = {}) => {
      const currentValue = inputValueRef.current;
      const nextValue = currentValue.substring(0, start) + text + currentValue.substring(end);
      const selection = options.selection || {
        start: start + text.length,
        end: start + text.length
      };
      applyInputValue(nextValue, { ...options, selection });
    },
    setSelection: (start, end = start) => {
      const selection = { start, end };
      selectionRef.current = selection;
      syncProxyTextarea(inputValueRef.current, selection);
      const editor = editorRef.current;
      if (editor && document.activeElement === editor) {
        setRichInputSelection(editor, start, end);
      }
    },
    setValue: (value, options = {}) => {
      applyInputValue(value, options);
    }
  };
  const handleEditorInput = q(() => {
    const editor = editorRef.current;
    if (!editor) return;
    const selection = getRichInputSelection(editor) || selectionRef.current;
    const value = extractRichInputText(editor);
    inputValueRef.current = value;
    selectionRef.current = selection;
    syncProxyTextarea(value, selection);
    if (!isComposingRef.current && needsRichInputNormalization(editor, value)) {
      renderEditorValue(value, selection);
    }
    processInputState(value);
  }, [processInputState, renderEditorValue, syncProxyTextarea]);
  const handleCompositionStart = q(() => {
    isComposingRef.current = true;
  }, []);
  const handleCompositionEnd = q(() => {
    isComposingRef.current = false;
    isCompositionJustEndedRef.current = true;
    if (compositionEndTimerRef.current) {
      clearTimeout(compositionEndTimerRef.current);
    }
    compositionEndTimerRef.current = setTimeout(() => {
      isCompositionJustEndedRef.current = false;
      compositionEndTimerRef.current = null;
    }, 50);
    handleEditorInput();
  }, [handleEditorInput]);
  const clearInput = q((focus = false) => {
    inputControllerRef.current?.setValue("", {
      focus,
      silent: true,
      selection: { start: 0, end: 0 }
    });
  }, []);
  y$1(() => {
    const mention = pendingMention.value;
    const controller = inputControllerRef.current;
    if (!mention || !controller) return;
    const { uid, nickname } = mention;
    const mentionText = uid === "bot" ? `@${nickname}` : `[user=${uid}]${nickname}[/user]`;
    const { start, end } = controller.getSelection();
    const value = controller.getValue();
    const before = value.slice(0, start);
    const needsLeadingSpace = before.length > 0 && !/\s$/.test(before);
    const text = `${needsLeadingSpace ? " " : ""}${mentionText} `;
    controller.replaceRange(text, start, end, { focus: true });
    pendingMention.value = null;
  }, [pendingMention.value]);
  y$1(() => {
    if (editingMessage.value) return;
    const draft = loadDraft();
    if (draft?.content) {
      inputControllerRef.current?.setValue(draft.content, {
        silent: true,
        selection: { start: draft.content.length, end: draft.content.length }
      });
    } else {
      updateEditorHeight();
    }
    if (draft?.replyTo) {
      setReplyTo({
        ...draft.replyTo,
        raw: draft.replyTo.raw || draft.replyTo.text
      });
    }
  }, []);
  y$1(() => {
    const msg = editingMessage.value;
    if (msg) {
      inputControllerRef.current?.setValue(msg.raw, {
        focus: true,
        knownMeta: msg.image_meta,
        silent: true,
        selection: { start: msg.raw.length, end: msg.raw.length }
      });
      return;
    }
    updateEditorHeight();
  }, [editingMessage.value, updateEditorHeight]);
  y$1(() => {
    const proxy = textareaProxyRef.current;
    if (!proxy) return;
    const handleProxyInput = () => {
      applyInputValue(proxy.value, {
        selection: {
          start: proxy.selectionStart,
          end: proxy.selectionEnd
        }
      });
    };
    proxy.addEventListener("input", handleProxyInput);
    return () => proxy.removeEventListener("input", handleProxyInput);
  }, [applyInputValue]);
  y$1(() => {
    const syncSelection = () => {
      const editor = editorRef.current;
      if (!editor || document.activeElement !== editor) return;
      const selection = getRichInputSelection(editor);
      if (!selection) return;
      selectionRef.current = selection;
      syncProxyTextarea(inputValueRef.current, selection);
    };
    document.addEventListener("selectionchange", syncSelection);
    return () => document.removeEventListener("selectionchange", syncSelection);
  }, [syncProxyTextarea]);
  y$1(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
      if (draftSaveTimerRef.current) {
        clearTimeout(draftSaveTimerRef.current);
      }
      if (compositionEndTimerRef.current) {
        clearTimeout(compositionEndTimerRef.current);
      }
      if (attachCloseTimerRef.current) {
        clearTimeout(attachCloseTimerRef.current);
      }
      if (isTypingRef.current) {
        sendTypingStop();
      }
    };
  }, []);
  const getImageMeta = () => previewMedia.reduce((meta, media) => {
    if (media.type === "image" && media.width && media.height) {
      meta[media.url] = {
        width: media.width,
        height: media.height
      };
    }
    return meta;
  }, {});
  const handleSend = () => send({
    content: inputValueRef.current,
    imageMeta: getImageMeta(),
    voiceDraft,
    clearInput,
    clearMediaPreview: () => setPreviewMedia([]),
    clearVoiceDraft
  });
  const hasDraggedFiles = (event) => {
    const types = Array.from(event.dataTransfer?.types || []);
    return types.includes("Files");
  };
  const handleDragEnter = (event) => {
    if (!hasDraggedFiles(event)) return;
    event.preventDefault();
    dragDepthRef.current += 1;
    setIsDraggingFiles(true);
  };
  const handleDragOver = (event) => {
    if (!hasDraggedFiles(event)) return;
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "copy";
    }
    setIsDraggingFiles(true);
  };
  const handleDragLeave = (event) => {
    if (!hasDraggedFiles(event)) return;
    event.preventDefault();
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) {
      setIsDraggingFiles(false);
    }
  };
  const handleDrop = async (event) => {
    if (!hasDraggedFiles(event)) return;
    event.preventDefault();
    dragDepthRef.current = 0;
    setIsDraggingFiles(false);
    const files = Array.from(event.dataTransfer?.files || []);
    if (files.length > 0) {
      await handleFilesUpload(files);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    if (isComposingRef.current || isCompositionJustEndedRef.current || e.keyCode === 229) {
      return;
    }
    const isShortcut = e.ctrlKey || e.metaKey;
    const shouldSend = settings.value.sendShortcut === "Enter" && !isShortcut || settings.value.sendShortcut === "CtrlEnter" && isShortcut;
    if (shouldSend) {
      e.preventDefault();
      handleSend();
      return;
    }
    e.preventDefault();
    inputControllerRef.current?.insertText("\n", { focus: true });
  };
  y$1(() => {
    if (!containerRef.current) return;
    const updateHeight = () => {
      if (containerRef.current) {
        inputAreaHeight.value = containerRef.current.offsetHeight;
      }
    };
    const observer = new ResizeObserver(updateHeight);
    observer.observe(containerRef.current);
    updateHeight();
    return () => observer.disconnect();
  }, []);
  return k$1("div", { ref: containerRef, class: "xqa" }, k$1(
    SmileyPanel,
    {
      onSelect: (code) => inputControllerRef.current?.insertText(code, { focus: true }),
      textareaRef: textareaProxyRef
    }
  ), k$1(TextFormatter, { editorRef, inputControllerRef }), k$1(MentionCompleter, { editorRef, inputControllerRef }), k$1(TypingIndicator, null), k$1(
    "div",
    {
      class: `xra ${isDraggingFiles ? "drag-over" : ""}`,
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop
    },
    (replyingTo.value || editingMessage.value) && k$1("div", { id: "dollars-reply-preview", class: `xca visible` }, k$1("div", { class: "xda" }), replyingTo.value && k$1(S, null, k$1(
      "img",
      {
        class: "xea",
        src: getAvatarUrl(replyingTo.value.avatar, "s"),
        alt: ""
      }
    ), k$1("div", { class: "xfa" }, k$1("span", { class: "xga" }, escapeHTML(replyingTo.value.user)), k$1("span", { class: "xha" }, escapeHTML(replyingTo.value.text.substring(0, 50))))), editingMessage.value && k$1("div", { class: "xfa" }, k$1("span", { class: "xga" }, "编辑消息"), k$1("span", { class: "xha" }, escapeHTML(editingMessage.value.raw.substring(0, 50)))), k$1(
      "button",
      {
        class: "xia",
        onClick: () => {
          clearInput();
          cancelReplyOrEdit();
        }
      },
      "✕"
    )),
    k$1(
      MediaPreview,
      {
        previewMedia,
        onRemoveMedia: handleRemoveMedia
      }
    ),
    (isRecording || voiceDraft) && k$1("div", { class: "xTa visible" }, isRecording ? k$1(S, null, k$1("div", { class: "voice-recording-dot", "aria-hidden": "true" }), k$1("span", { class: "voice-preview-title" }, "正在录音"), k$1("span", { class: "voice-preview-duration" }, formatVoiceDuration(recordingDuration)), k$1("button", { type: "button", class: "voice-preview-action primary", onClick: stopRecording }, "停止"), k$1("button", { type: "button", class: "voice-preview-action", onClick: cancelVoice }, "取消")) : voiceDraft && k$1(S, null, k$1("audio", { class: "voice-preview-audio", controls: true, preload: "metadata", src: voiceDraft.url }), k$1("span", { class: "voice-preview-duration" }, formatVoiceDuration(voiceDraft.duration)), k$1("button", { type: "button", class: "voice-preview-action", onClick: cancelVoice, title: "删除语音" }, "删除"))),
    k$1("div", { class: "input-wrapper" }, k$1(
      "button",
      {
        id: "xi",
        class: "xRa",
        title: "表情",
        onClick: () => toggleSmileyPanel()
      }
    ), k$1("div", { class: "xo" }, k$1(
      "div",
      {
        ref: editorRef,
        class: "chat-textarea xpa",
        contentEditable: true,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": "说点什么...",
        spellcheck: false,
        onInput: handleEditorInput,
        onKeyDown: handleKeyDown,
        onPaste: handlePaste,
        onCompositionStart: handleCompositionStart,
        onCompositionEnd: handleCompositionEnd
      }
    ), k$1(
      "textarea",
      {
        ref: textareaProxyRef,
        class: "chat-textarea-proxy",
        tabIndex: -1,
        "aria-hidden": "true"
      }
    )), k$1("div", { class: "input-actions" }, k$1("div", { class: "xp" }, k$1(
      "button",
      {
        ref: attachButtonRef,
        id: "xj",
        class: `xRa ${isAttachMenuOpen && !isAttachMenuClosing ? "active" : ""}`,
        title: "上传附件",
        "aria-haspopup": "menu",
        "aria-expanded": isAttachMenuOpen && !isAttachMenuClosing,
        onClick: toggleAttachMenu
      }
    )), isAttachMenuOpen && attachMenuPosition && k$1(FloatingPortal, null, k$1(
      "div",
      {
        ref: attachMenuRef,
        class: `xq xL ${isAttachMenuClosing ? "closing" : ""}`,
        role: "menu",
        style: {
          left: `${attachMenuPosition.left}px`,
          bottom: `${attachMenuPosition.bottom}px`
        }
      },
      k$1(
        "button",
        {
          type: "button",
          role: "menuitem",
          onClick: () => {
            closeAttachMenu();
            handleAttachMediaClick();
          }
        },
        k$1("span", { class: "xO", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconPhoto } }),
        k$1("span", null, "媒体")
      ),
      k$1(
        "button",
        {
          type: "button",
          role: "menuitem",
          onClick: () => {
            closeAttachMenu();
            handleAttachFileClick();
          }
        },
        k$1("span", { class: "xO", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconFile } }),
        k$1("span", null, "文件")
      ),
      k$1(
        "button",
        {
          type: "button",
          role: "menuitem",
          disabled: !!editingMessage.value || !isRecording && (isSending || isUploading),
          onClick: () => {
            closeAttachMenu();
            if (isRecording) {
              stopRecording();
            } else {
              void startRecording();
            }
          }
        },
        k$1("span", { class: "xO", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconMic } }),
        k$1("span", null, isRecording ? "停止录音" : voiceDraft ? "重录语音" : "语音")
      )
    )), k$1(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: MEDIA_FILE_ACCEPT,
        multiple: true,
        style: { display: "none" },
        onChange: handleFileChange
      }
    ), k$1(
      "button",
      {
        class: `xya ${isUploading ? "uploading" : ""}`,
        disabled: isSending || isUploading || isRecording,
        onClick: handleSend,
        onMouseDown: (e) => e.preventDefault(),
        title: isUploading || isSending ? "发送中..." : isRecording ? "请先停止录音" : "发送"
      }
    )))
  ));
}async function navigateToMessage(msgId) {
  const result = await loadMessageContext(msgId);
  if (!result) return;
  setTimeout(() => {
    const targetId = `db-${msgId}`;
    const el = document.getElementById(targetId);
    const listEl = document.querySelector(".xE");
    if (el) {
      el.scrollIntoView({ behavior: "auto", block: "center" });
      setTimeout(() => {
        const container = document.querySelector(".xD");
        if (container) {
          smoothScrollToCenter(container, el);
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      if (listEl) listEl.classList.add("focus-mode");
      el.classList.remove("message-highlight");
      void el.offsetWidth;
      el.classList.add("message-highlight");
      setTimeout(() => {
        if (listEl) listEl.classList.remove("focus-mode");
        el.classList.remove("message-highlight");
      }, 800);
    } else if (listEl && result.targetIndex >= 0) {
      const msgs = listEl.querySelectorAll(".xv");
      if (result.targetIndex < msgs.length) {
        msgs[result.targetIndex].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, 300);
}function GalleryPanel({ onClose }) {
  const items = useSignal([]);
  const isLoading = useSignal(false);
  const hasMore = useSignal(true);
  const offset = A(0);
  const initialized = A(false);
  const gridRef = A(null);
  const targetUid = useSignal(void 0);
  const isResolvingUser = useSignal(false);
  y$1(() => {
    const parseUserFilter = async () => {
      const query = searchQuery.value.trim();
      const userMatch = query.match(/^user:(\S+)$/i);
      if (userMatch && userMatch[1]) {
        const username = userMatch[1];
        isResolvingUser.value = true;
        try {
          const result = await lookupUsersByName([username]);
          if (result && result[username]) {
            const newUid = result[username].id;
            if (targetUid.value !== newUid) {
              targetUid.value = newUid;
              items.value = [];
              offset.current = 0;
              hasMore.value = true;
              loadMore();
            }
          } else {
            if (targetUid.value !== -1) {
              targetUid.value = -1;
              items.value = [];
              offset.current = 0;
              hasMore.value = false;
            }
          }
        } catch {
        } finally {
          isResolvingUser.value = false;
        }
      } else {
        if (targetUid.value !== void 0) {
          targetUid.value = void 0;
          items.value = [];
          offset.current = 0;
          hasMore.value = true;
          loadMore();
        }
      }
    };
    parseUserFilter();
  }, [searchQuery.value]);
  const loadMore = q(async () => {
    if (isLoading.value || !hasMore.value || isResolvingUser.value) return;
    if (targetUid.value === -1) return;
    isLoading.value = true;
    try {
      const data = await fetchGalleryMedia(offset.current, 50, targetUid.value);
      items.value = [...items.value, ...data.items];
      hasMore.value = data.hasMore;
      offset.current += data.items.length;
    } catch {
    } finally {
      isLoading.value = false;
    }
  }, [targetUid.value, isResolvingUser.value]);
  y$1(() => {
    if (!initialized.current && !isResolvingUser.value) {
      initialized.current = true;
    }
  }, []);
  y$1(() => {
    const checkAndLoadMore = () => {
      const grid = gridRef.current;
      if (grid && hasMore.value && !isLoading.value && !isResolvingUser.value) {
        if (grid.scrollHeight <= grid.clientHeight) {
          loadMore();
        }
      }
    };
    const timer = setTimeout(checkAndLoadMore, 100);
    return () => clearTimeout(timer);
  }, [items.value.length, hasMore.value, isLoading.value, isResolvingUser.value]);
  const handleScroll = (e) => {
    const el = e.target;
    if (!isLoading.value && hasMore.value && el.scrollHeight - el.scrollTop - el.clientHeight < 100) {
      loadMore();
    }
  };
  const imageItems = items.value.filter((item) => item.type === "image");
  const viewerItems = imageItems.map((item) => ({
    src: item.url,
    messageId: item.message_id,
    nickname: item.nickname,
    avatar: item.avatar,
    timestamp: item.timestamp
  }));
  return k$1("div", { class: "gallery-container" }, k$1("div", { class: "gallery-header" }, k$1("span", { class: "gallery-title" }, "相册"), k$1(
    "div",
    {
      class: "xIa",
      onClick: onClose
    }
  )), k$1("div", { class: "gallery-grid", ref: gridRef, onScroll: handleScroll }, items.value.map((item, idx) => {
    const imageIndex = imageItems.indexOf(item);
    return k$1(
      "div",
      {
        key: `${item.message_id}-${idx}`,
        class: "xHa"
      },
      item.type === "video" ? k$1("div", { class: "video-container", onClick: () => {
        window.open(item.url, "_blank");
      } }, k$1(
        "img",
        {
          src: item.thumbnailUrl || item.url,
          alt: "Video thumbnail",
          loading: "lazy",
          style: "width: 100%; height: 100%; object-fit: cover; cursor: pointer;",
          onError: (e) => {
            const target = e.currentTarget;
            target.src = "/img/no_img.gif";
            target.onerror = null;
          }
        }
      ), k$1("div", { class: "video-overlay" })) : k$1(
        "img",
        {
          src: item.thumbnailUrl || item.url,
          alt: "",
          loading: "lazy",
          style: "cursor: pointer;",
          onClick: () => {
            showImageViewer(viewerItems, imageIndex, "gallery");
          },
          onError: (e) => {
            const target = e.currentTarget;
            target.src = "/img/no_img.gif";
            target.onerror = null;
          }
        }
      )
    );
  }), isLoading.value && k$1("div", { class: "gallery-loading" }, "加载中...")));
}function SearchPanel() {
  const inputRef = A(null);
  const dateInputRef = A(null);
  const results = useSignal([]);
  const loading = useSignal(false);
  const hasMore = useSignal(false);
  const offset = A(0);
  const reset = () => {
    results.value = [];
    hasMore.value = false;
    offset.current = 0;
  };
  const close = () => {
    toggleSearch(false);
    searchQuery.value = "";
    searchGalleryMode.value = false;
    reset();
  };
  const search = async (q, append = false) => {
    if (!q.trim()) {
      reset();
      return;
    }
    if (!append) {
      results.value = [];
      offset.current = 0;
      hasMore.value = true;
    }
    loading.value = true;
    try {
      const data = await searchMessages(q, offset.current);
      results.value = append ? [...results.value, ...data.messages] : data.messages;
      hasMore.value = data.hasMore;
      offset.current += data.messages.length;
    } finally {
      loading.value = false;
    }
  };
  const debouncedSearch = debounce((q) => search(q), SEARCH_DEBOUNCE);
  y$1(() => {
    if (!isSearchActive.value || searchGalleryMode.value) return;
    if (searchQuery.value) debouncedSearch(searchQuery.value);
    else reset();
  }, [searchQuery.value, isSearchActive.value]);
  y$1(() => {
    if (isSearchActive.value) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchActive.value]);
  const handleScroll = (e) => {
    const el = e.target;
    if (!loading.value && hasMore.value && el.scrollHeight - el.scrollTop - el.clientHeight < 50) {
      search(searchQuery.value, true);
    }
  };
  const handleResultClick = (msg) => {
    close();
    navigateToMessage(msg.id);
  };
  const openDatePicker = () => {
    const input = dateInputRef.current;
    if (!input) return;
    if ("showPicker" in HTMLInputElement.prototype) {
      try {
        input.showPicker();
      } catch {
        input.click();
      }
    } else {
      input.click();
    }
  };
  const handleDateChange = async (e) => {
    const date = e.target.value;
    if (!date) return;
    const msgId = await getFirstMessageIdByDate(date);
    e.target.value = "";
    if (msgId) {
      close();
      navigateToMessage(msgId);
    } else {
      alert(`日期 ${date} 没有找到消息`);
    }
  };
  if (!isSearchActive.value) return null;
  return k$1("div", { id: "dollars-search-ui" }, k$1("div", { class: "search-panel-row" }, k$1("div", { class: "search-bar", style: { flex: 1, marginBottom: 0 } }, k$1(
    "div",
    {
      class: "search-icon",
      style: { display: "flex", alignItems: "center", opacity: 0.5 },
      dangerouslySetInnerHTML: { __html: iconSearch }
    }
  ), k$1(
    "input",
    {
      ref: inputRef,
      type: "search",
      placeholder: "搜索消息...",
      value: searchQuery.value,
      onInput: (e) => {
        searchQuery.value = e.target.value;
      },
      autoFocus: true
    }
  ), k$1(
    "div",
    {
      class: "search-close-btn",
      onClick: close,
      dangerouslySetInnerHTML: { __html: iconClose }
    }
  )), k$1(
    "div",
    {
      class: "search-calendar-btn",
      onClick: openDatePicker,
      title: "按日期跳转",
      dangerouslySetInnerHTML: { __html: iconCalendar }
    }
  ), k$1(
    "div",
    {
      class: `xKa ${searchGalleryMode.value ? "active" : ""}`,
      onClick: () => {
        searchGalleryMode.value = !searchGalleryMode.value;
      },
      title: "相册模式",
      dangerouslySetInnerHTML: { __html: iconPhoto }
    }
  )), k$1(
    "input",
    {
      type: "date",
      ref: dateInputRef,
      onChange: handleDateChange,
      style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 }
    }
  ), searchGalleryMode.value ? k$1(GalleryPanel, { onClose: () => {
    searchGalleryMode.value = false;
  } }) : k$1("div", { id: "dollars-search-results", onScroll: handleScroll }, results.value.map((msg) => k$1(
    "div",
    {
      key: msg.id,
      class: "xJa",
      onClick: () => handleResultClick(msg)
    },
    k$1("img", { src: getAvatarUrl(msg.avatar, "s"), alt: msg.nickname }),
    k$1("div", { class: "dollars-search-content" }, k$1("div", { class: "dollars-search-header" }, k$1("span", { class: "dollars-search-nickname" }, msg.nickname), k$1("span", { class: "dollars-search-timestamp" }, formatDate(msg.timestamp, "full"))), k$1("div", { class: "dollars-search-message" }, msg.message.replace(/\[.*?\]/g, " ")))
  )), loading.value && k$1("div", { class: "search-status-msg" }, "搜索中..."), !loading.value && results.value.length === 0 && searchQuery.value && k$1("div", { class: "search-status-msg" }, "未找到相关消息")));
}function UserProfilePanel() {
  const [profile, setProfile] = d$2(null);
  const [media, setMedia] = d$2([]);
  const [mediaLoading, setMediaLoading] = d$2(false);
  const [isVisible, setIsVisible] = d$2(false);
  const userId = userProfilePanelUserId.value;
  const isOpen = isUserProfilePanelOpen.value;
  const isClosing = isUserProfilePanelClosing.value;
  const bangumiUsername = userId?.startsWith("bgm:") ? userId.slice(4) : "";
  y$1(() => {
    if (!userId) {
      setProfile(null);
      setMedia([]);
      setMediaLoading(false);
      return;
    }
    let stale = false;
    setProfile(null);
    const request = bangumiUsername ? fetchBangumiUserProfile(bangumiUsername) : fetchUserProfile(userId);
    request.then((data) => {
      if (stale) return;
      if (data) setProfile(data);
    });
    return () => {
      stale = true;
    };
  }, [userId]);
  y$1(() => {
    if (!profile?.id || profile.source === "bangumi") {
      setMedia([]);
      setMediaLoading(false);
      return;
    }
    let stale = false;
    setMedia([]);
    setMediaLoading(true);
    fetchGalleryMedia(0, 6, profile.id).then((result) => {
      if (stale) return;
      setMedia(result.items.map((item) => ({
        url: item.url,
        thumbnailUrl: item.thumbnailUrl,
        type: item.type,
        message_id: item.message_id,
        nickname: item.nickname,
        avatar: item.avatar,
        timestamp: item.timestamp
      })));
      setMediaLoading(false);
    });
    return () => {
      stale = true;
    };
  }, [profile?.id]);
  y$1(() => {
    if (!isOpen || isClosing) {
      setIsVisible(false);
      return;
    }
    const frameId = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, [isOpen, isClosing]);
  if (!isOpen) return null;
  const handleHistory = () => {
    if (profile) {
      searchQuery.value = `user:${profile.username}`;
      hideUserProfile();
      toggleSearch(true);
    }
  };
  const handleHomepage = () => {
    if (profile) {
      window.open(profile.url || `/user/${profile.username}`, "_blank");
    }
  };
  const handleMedia = () => {
    if (profile) {
      searchQuery.value = `user:${profile.username}`;
      searchGalleryMode.value = true;
      hideUserProfile();
      toggleSearch(true);
    }
  };
  const handlePm = () => {
    if (!profile) return;
    hideUserProfile();
    void openPmForUser({
      username: profile.username,
      nickname: profile.nickname,
      avatar: profile.avatar
    });
  };
  const isActive = isActiveToday(profile?.stats?.last_message_time);
  const isNarrow = isNarrowLayout.value;
  const lastMsgTs = profile?.stats?.last_message_time ? new Date(profile.stats.last_message_time).getTime() / 1e3 : null;
  const lastActiveText = lastMsgTs ? `${formatDate(lastMsgTs, "label")} ${formatDate(lastMsgTs, "time")}` : null;
  const imageItems = media.filter((item) => item.type === "image");
  const viewerItems = imageItems.map((item) => ({
    src: item.url,
    messageId: item.message_id,
    nickname: item.nickname,
    avatar: item.avatar,
    timestamp: item.timestamp
  }));
  return k$1(
    "div",
    {
      id: "dollars-user-profile-panel",
      class: `${isNarrow ? "narrow" : "wide"} ${isVisible ? "visible" : ""} ${isClosing ? "closing" : ""}`
    },
    !isNarrow && k$1("div", { class: "uprofile-card-header" }, k$1(
      "button",
      {
        class: "header-btn xk",
        title: "返回",
        "aria-label": "返回",
        onClick: hideUserProfile
      }
    ), k$1("span", { class: "uprofile-card-title" }, "用户资料")),
    k$1("div", { class: "xPa" }, k$1(
      "img",
      {
        class: "uprofile-avatar",
        src: profile ? getAvatarUrl(profile.avatar, "l") : void 0,
        alt: profile?.nickname ?? userId ?? ""
      }
    )),
    k$1("div", { class: "uprofile-content" }, profile && k$1("div", { class: "uprofile-body" }, k$1("div", { class: "uprofile-name-section" }, k$1("div", { class: "uprofile-nickname" }, profile?.nickname ?? userId, isActive && k$1("span", { class: "uprofile-status-dot active", "aria-label": "在线", role: "img" })), k$1("div", { class: "uprofile-username" }, "@", profile?.username ?? userId), lastActiveText && !isActive && k$1("div", { class: "uprofile-last-active" }, "最近活跃 ", lastActiveText)), profile?.stats && k$1("div", { class: "uprofile-stats-row" }, k$1("div", { class: "uprofile-stat" }, k$1("span", { class: "uprofile-stat-num" }, profile.stats.message_count.toLocaleString()), k$1("span", { class: "uprofile-stat-label" }, "条消息")), k$1("div", { class: "uprofile-stat-divider" }), k$1("div", { class: "uprofile-stat" }, k$1("span", { class: "uprofile-stat-num" }, profile.stats.average_messages_per_day.toFixed(1)), k$1("span", { class: "uprofile-stat-label" }, "条/天"))), profile && k$1("div", { class: "uprofile-actions" }, profile.source !== "bangumi" && k$1("button", { class: "xLa", onClick: handleHistory }, k$1("span", { "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconHistory } }), "搜索发言"), k$1("button", { class: "xLa", onClick: handleHomepage }, k$1("span", { "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconHome } }), "主页"), isBangumiLoggedIn() && String(profile.id) !== String(window.CHOBITS_UID) && k$1("button", { class: "xLa", onClick: handlePm }, k$1("span", { "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconReply } }), "发短信")), (profile?.sign || profile?.stats?.first_message_time) && k$1("div", { class: "uprofile-info-section" }, profile.sign && k$1("div", { class: "xMa" }, k$1("span", { class: "xO", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconPen } }), k$1("div", { class: "uprofile-info-content" }, k$1("div", { class: "uprofile-info-label" }, "个性签名"), k$1("div", { class: "uprofile-info-value uprofile-sign-value" }, profile.sign))), profile.stats?.first_message_time && k$1("div", { class: "xMa" }, k$1("span", { class: "xO", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconCalendar } }), k$1("div", { class: "uprofile-info-content" }, k$1("div", { class: "uprofile-info-label" }, "首次发言"), k$1("div", { class: "uprofile-info-value" }, formatDate(new Date(profile.stats.first_message_time).getTime() / 1e3, "full"))))), !mediaLoading && media.length > 0 && k$1("div", { class: "uprofile-media-section" }, k$1("div", { class: "uprofile-media-header", onClick: handleMedia, style: { cursor: "pointer" } }, k$1("span", null, "媒体"), k$1("span", { style: { fontSize: "12px", color: "var(--primary-color)", marginLeft: "auto" } }, "查看全部 →")), k$1("div", { class: "uprofile-media-grid" }, media.map((item) => {
      const imageIndex = imageItems.indexOf(item);
      return k$1(
        "div",
        {
          class: "xNa",
          key: `${item.message_id}-${item.url}`
        },
        item.type === "video" ? k$1(
          "button",
          {
            class: "uprofile-media-video-btn",
            "aria-label": `播放 ${item.nickname} 分享的视频`,
            onClick: () => window.open(item.url, "_blank")
          },
          k$1(
            "img",
            {
              src: item.thumbnailUrl,
              alt: `${item.nickname} 分享的视频`,
              loading: "lazy"
            }
          ),
          k$1("div", { class: "xOa", "aria-hidden": "true" })
        ) : k$1(
          "img",
          {
            src: item.thumbnailUrl,
            alt: `${item.nickname} 分享的图片`,
            loading: "lazy",
            style: "cursor: pointer;",
            onClick: () => {
              showImageViewer(viewerItems, imageIndex, "userProfile");
            },
            onError: (e) => {
              const target = e.currentTarget;
              target.src = "/img/no_img.gif";
              target.onerror = null;
            }
          }
        )
      );
    }))), !profile?.stats && profile && profile.source !== "bangumi" && k$1("div", { class: "uprofile-empty-hint" }, "暂无发言记录")))
  );
}function FloatingDateCapsule({ label, preserveLastLabel = true }) {
  const lastLabelRef = A("");
  if (label) {
    lastLabelRef.current = label;
  }
  const text = label || (preserveLastLabel ? lastLabelRef.current : "");
  if (!text && !preserveLastLabel) return null;
  return k$1("div", { id: "dollars-floating-date", class: label ? "visible" : "" }, text);
}function FloatingUI() {
  const handleScrollBottom = async (e) => {
    e.preventDefault();
    if (scrollButtonMode.value === "to-unread" && hasUnreadMessages.value) {
      const firstUnreadId = getFirstUnreadId();
      if (firstUnreadId) {
        pendingJumpToMessage.value = firstUnreadId;
        scrollButtonMode.value = "to-bottom";
        return;
      }
    }
    clearBrowsePosition();
    const ids = messageIds.value;
    if (ids.length > 0) {
      updateReadState(ids[ids.length - 1]);
    }
    if (timelineIsLive.value) {
      manualScrollToBottom.value++;
      return;
    }
    try {
      const recentMessages = await fetchRecentMessages(50);
      if (recentMessages.length > 0) {
        const filtered = recentMessages.filter((m) => !blockedUsers.value.has(String(m.uid)));
        setMessages(filtered);
        if (filtered.length > 0) {
          historyOldestId.value = filtered[0].id;
          historyNewestId.value = filtered[filtered.length - 1].id;
        }
        historyFullyLoaded.value = false;
        timelineIsLive.value = true;
        unreadWhileScrolled.value = 0;
        showScrollBottomBtn.value = false;
        syncPresenceSubscriptions();
        requestAnimationFrame(() => {
          manualScrollToBottom.value++;
        });
      }
    } catch (e2) {
    }
  };
  const handleScrollToMention = (e) => {
    e.preventDefault();
    const jumpList2 = unreadJumpList.value;
    if (jumpList2.length === 0) return;
    const nextMentionId = jumpList2[0];
    unreadJumpList.value = jumpList2.slice(1);
    pendingJumpToMessage.value = nextMentionId;
  };
  const bottomBtnBottom = inputAreaHeight.value + 20;
  const mentionBtnBottom = bottomBtnBottom + 50;
  const jumpList = unreadJumpList.value;
  const showMentionBtn = jumpList.length > 0;
  const scrollBtnClasses = `nav-btn ${showScrollBottomBtn.value ? "visible" : ""} mode-${scrollButtonMode.value}`;
  const currentUnreadCount = unreadCount.value;
  const getTooltip = () => {
    return scrollButtonMode.value === "to-unread" ? "跳转到未读消息" : "跳转到最新消息";
  };
  return k$1(S, null, k$1(FloatingDateCapsule, { label: currentDateLabel.value || "" }), k$1(
    "div",
    {
      id: "xm",
      class: `nav-btn ${showMentionBtn ? "visible" : ""}`,
      onClick: handleScrollToMention,
      style: { bottom: `${mentionBtnBottom}px` },
      title: "跳转到提及消息"
    },
    showMentionBtn && k$1("div", { id: "dollars-mention-badge", class: "nav-btn-badge" }, jumpList.length > 99 ? "99+" : jumpList.length)
  ), k$1(
    "div",
    {
      id: "xl",
      class: scrollBtnClasses,
      onClick: handleScrollBottom,
      style: { bottom: `${bottomBtnBottom}px` },
      title: getTooltip()
    },
    currentUnreadCount > 0 && k$1("div", { id: "dollars-unread-badge", class: "nav-btn-badge" }, currentUnreadCount > 99 ? "99+" : currentUnreadCount)
  ));
}function ConversationList({ searchTerm = "" }) {
  const extensionItems = extensionConversations.value.filter((item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => (b.priority || 0) - (a.priority || 0));
  const filteredConversations = searchTerm ? conversations.value.filter(
    (conv) => conv.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : conversations.value;
  const filteredPmConversations = searchTerm ? pmConversations.value.filter(
    (conversation) => `${conversation.nickname} ${conversation.lastMessage}`.toLowerCase().includes(searchTerm.toLowerCase())
  ) : pmConversations.value;
  const handleClick = (conversationId) => {
    setActiveConversation(conversationId);
    if (isNarrowLayout.value) {
      setMobileChatView(true);
    }
  };
  const handleExtensionClick = (item) => {
    setActiveExtension(item.id);
    item.onClick();
    if (isNarrowLayout.value) {
      setMobileChatView(true);
    }
  };
  return k$1("div", { id: "xf" }, extensionItems.map((item) => {
    const isActive = item.id === activeExtensionId.value;
    return k$1(
      "div",
      {
        key: `ext-${item.id}`,
        class: `xF extension-item ${isActive ? "active" : ""}`,
        onClick: () => handleExtensionClick(item)
      },
      k$1("img", { src: item.avatar, class: "avatar", alt: item.title, loading: "lazy" }),
      k$1("div", { class: "xG" }, k$1("div", { class: "xH" }, k$1("span", { class: "xI" }, item.title)), item.subtitle && k$1("div", { class: "xK" }, item.subtitle)),
      item.badge && k$1("div", { class: "unread-badge" }, item.badge)
    );
  }), filteredConversations.map((conv) => {
    const isActive = conv.id === activeConversationId.value;
    const title = conv.type === "channel" ? conv.title : conv.user?.nickname || conv.title;
    const avatarUrl = conv.type === "channel" ? conv.avatar : conv.user?.avatar || conv.avatar;
    const lastMessageText = (conv.lastMessage.text || "").replace(/\[.*?\]/g, "").trim();
    const timeText = conv.lastMessage.timestamp ? formatDate(conv.lastMessage.timestamp, "time") : "";
    return k$1(
      "div",
      {
        key: conv.id,
        class: `xF ${isActive ? "active" : ""}`,
        "data-conversation-id": conv.id,
        onClick: () => handleClick(conv.id)
      },
      k$1("img", { src: avatarUrl, class: "avatar", alt: title, loading: "lazy" }),
      k$1("div", { class: "xG" }, k$1("div", { class: "xH" }, k$1("span", { class: "xI" }, title), k$1("span", { class: "xJ" }, timeText)), k$1("div", { class: "xK" }, lastMessageText || " ")),
      conv.unreadCount > 0 && k$1("div", { class: "unread-badge" }, conv.unreadCount)
    );
  }), filteredPmConversations.map((conversation) => {
    const conversationId = `pm:${conversation.id}`;
    return k$1(
      "div",
      {
        key: conversationId,
        class: `xF ${activeConversationId.value === conversationId ? "active" : ""}`,
        "data-conversation-id": conversationId,
        onClick: () => openPmConversation(conversation)
      },
      k$1("img", { src: conversation.avatar || "/img/no_icon_subject.png", class: "avatar", alt: conversation.nickname, loading: "lazy" }),
      k$1("div", { class: "xG" }, k$1("div", { class: "xH" }, k$1("span", { class: "xI" }, conversation.nickname), k$1("span", { class: "xJ" }, conversation.dateText)), k$1("div", { class: "xK" }, conversation.lastMessage || " ")),
      conversation.unreadCount > 0 && k$1("div", { class: "unread-badge" }, conversation.unreadCount)
    );
  }), pmInboxLoading.value && pmConversations.value.length === 0 && k$1("div", { class: "dollars-conversation-hint" }, "正在加载 Bangumi 短信…"), pmInboxError.value && k$1("div", { class: "dollars-conversation-hint error" }, pmInboxError.value), pmNextInboxPage.value && k$1(
    "button",
    {
      class: "dollars-pm-load-more-conversations",
      type: "button",
      disabled: pmMoreInboxLoading.value,
      onClick: () => void loadMorePmConversations()
    },
    pmMoreInboxLoading.value ? "加载中…" : "加载更多短信会话"
  ));
}function Sidebar() {
  const [searchTerm, setSearchTerm] = d$2("");
  const handleSearchInput = (e) => {
    const target = e.target;
    setSearchTerm(target.value);
  };
  return k$1("div", { id: "xc" }, k$1("div", { id: "xd" }, k$1("div", { class: "dollars-sidebar-search-row" }, k$1(
    "input",
    {
      type: "search",
      id: "xe",
      placeholder: "搜索对话...",
      value: searchTerm,
      onInput: handleSearchInput
    }
  ), isBangumiLoggedIn() && k$1("button", { class: "dollars-pm-compose-button", type: "button", title: "新建 Bangumi 短信", onClick: () => openPmCompose() }, "＋"))), k$1(ConversationList, { searchTerm }));
}function useWebSocket() {
  const connect = q(() => {
    connectWebSocket();
  }, []);
  const disconnect = q(() => {
    disconnectWebSocket();
  }, []);
  y$1(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseWebSocketForHiddenDocument();
      } else {
        resumeWebSocketAfterVisibilityChange();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  y$1(() => {
    if (isChatOpen.value && !isWebSocketConnected()) {
      connectWebSocket();
      if (!hasConnectionMonitoring()) {
        startConnectionMonitoring();
      }
    }
  }, [isChatOpen.value]);
  return { connect, disconnect, send: sendWebSocketMessage, isConnected: wsConnected };
}function getPointer(e) {
  if ("touches" in e) {
    const t = e.touches[0] || e.changedTouches[0];
    return { x: t.clientX, y: t.clientY };
  }
  return { x: e.clientX, y: e.clientY };
}
function persistWindowPosition(element) {
  if (!settings.value.rememberOpenState) return;
  saveWindowPosition({
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  });
}
function useChatWindowInteractions(windowRef) {
  const dragState = A({
    isDragging: false,
    startX: 0,
    startY: 0,
    initialLeft: 0,
    initialTop: 0
  });
  const resizeState = A({
    isResizing: false,
    startX: 0,
    startY: 0,
    initialWidth: 0,
    initialHeight: 0,
    initialLeft: 0,
    initialTop: 0
  });
  const handleDragMove = (e) => {
    if (!dragState.current.isDragging || !windowRef.current) return;
    e.preventDefault();
    const { x, y } = getPointer(e);
    const dx = x - dragState.current.startX;
    const dy = y - dragState.current.startY;
    const width = windowRef.current.offsetWidth;
    const height = windowRef.current.offsetHeight;
    const maxLeft = Math.max(0, window.innerWidth - width);
    const maxTop = Math.max(0, window.innerHeight - height);
    const newLeft = Math.min(Math.max(0, dragState.current.initialLeft + dx), maxLeft);
    const newTop = Math.min(Math.max(0, dragState.current.initialTop + dy), maxTop);
    windowRef.current.style.left = `${newLeft}px`;
    windowRef.current.style.top = `${newTop}px`;
  };
  const handleDragEnd = () => {
    dragState.current.isDragging = false;
    document.removeEventListener("mousemove", handleDragMove);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", handleDragMove);
    document.removeEventListener("touchend", handleDragEnd);
    if (windowRef.current) {
      persistWindowPosition(windowRef.current);
    }
  };
  const handleDragStart = (e) => {
    if (isMobileViewport.value || isMaximized.value) return;
    const target = e.target;
    if (!target.closest(".xB") || target.closest("button")) return;
    e.preventDefault();
    const { x, y } = getPointer(e);
    dragState.current = {
      isDragging: true,
      startX: x,
      startY: y,
      initialLeft: windowRef.current?.offsetLeft || 0,
      initialTop: windowRef.current?.offsetTop || 0
    };
    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDragMove, { passive: false });
    document.addEventListener("touchend", handleDragEnd);
  };
  const handleResizeMove = (e) => {
    if (!resizeState.current.isResizing || !windowRef.current) return;
    e.preventDefault();
    const { x, y } = getPointer(e);
    const dx = resizeState.current.startX - x;
    const dy = resizeState.current.startY - y;
    let newWidth = Math.max(MIN_WINDOW_WIDTH, resizeState.current.initialWidth + dx);
    let newHeight = Math.max(MIN_WINDOW_HEIGHT, resizeState.current.initialHeight + dy);
    let newLeft = resizeState.current.initialLeft - (newWidth - resizeState.current.initialWidth);
    let newTop = resizeState.current.initialTop - (newHeight - resizeState.current.initialHeight);
    if (newTop < 0) {
      newHeight += newTop;
      newTop = 0;
    }
    if (newLeft < 0) {
      newWidth += newLeft;
      newLeft = 0;
    }
    windowRef.current.style.width = `${newWidth}px`;
    windowRef.current.style.height = `${newHeight}px`;
    windowRef.current.style.left = `${newLeft}px`;
    windowRef.current.style.top = `${newTop}px`;
  };
  const handleResizeEnd = () => {
    resizeState.current.isResizing = false;
    document.removeEventListener("mousemove", handleResizeMove);
    document.removeEventListener("mouseup", handleResizeEnd);
    document.removeEventListener("touchmove", handleResizeMove);
    document.removeEventListener("touchend", handleResizeEnd);
    if (windowRef.current) {
      persistWindowPosition(windowRef.current);
    }
  };
  const handleResizeStart = (e) => {
    if (isMobileViewport.value || isMaximized.value) return;
    e.preventDefault();
    e.stopPropagation();
    if (!windowRef.current) return;
    const rect = windowRef.current.getBoundingClientRect();
    const { x, y } = getPointer(e);
    resizeState.current = {
      isResizing: true,
      startX: x,
      startY: y,
      initialWidth: rect.width,
      initialHeight: rect.height,
      initialLeft: rect.left,
      initialTop: rect.top
    };
    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);
    document.addEventListener("touchmove", handleResizeMove, { passive: false });
    document.addEventListener("touchend", handleResizeEnd);
  };
  y$1(() => {
    if (isMobileViewport.value || isMaximized.value || !settings.value.rememberOpenState) return;
    const saved = loadWindowPosition();
    if (saved && windowRef.current) {
      const element = windowRef.current;
      const fitted = fitWindowRectToViewport({
        left: saved.x,
        top: saved.y,
        width: saved.width ?? element.offsetWidth,
        height: saved.height ?? element.offsetHeight
      });
      element.style.left = `${fitted.left}px`;
      element.style.top = `${fitted.top}px`;
      element.style.width = `${fitted.width}px`;
      element.style.height = `${fitted.height}px`;
    }
  }, []);
  y$1(() => {
    let rafId;
    const handleWindowResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        if (!windowRef.current || isMobileViewport.value || isMaximized.value) return;
        const element = windowRef.current;
        const rect = element.getBoundingClientRect();
        const fitted = fitWindowRectToViewport({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height
        });
        if (fitted.width !== rect.width) element.style.width = `${fitted.width}px`;
        if (fitted.height !== rect.height) element.style.height = `${fitted.height}px`;
        if (fitted.left !== rect.left) element.style.left = `${fitted.left}px`;
        if (fitted.top !== rect.top) element.style.top = `${fitted.top}px`;
      });
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  y$1(() => {
    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchmove", handleDragMove);
      document.removeEventListener("touchend", handleDragEnd);
      document.removeEventListener("mousemove", handleResizeMove);
      document.removeEventListener("mouseup", handleResizeEnd);
      document.removeEventListener("touchmove", handleResizeMove);
      document.removeEventListener("touchend", handleResizeEnd);
    };
  }, []);
  return {
    handleDragStart,
    handleResizeStart
  };
}function useChatWindowLayout(windowRef) {
  _$2(() => {
    if (!windowRef.current) return;
    resetLayoutCheck();
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        checkNarrowLayout(entry.contentRect.width);
      }
    });
    observer.observe(windowRef.current);
    checkNarrowLayout(windowRef.current.offsetWidth);
    return () => observer.disconnect();
  }, []);
  _$2(() => {
    if (!isChatOpen.value) {
      chatLayoutReady.value = false;
      return;
    }
    if (isChatOpen.value && windowRef.current) {
      ensureNarrowLayoutChatView(windowRef.current.offsetWidth);
    }
  }, [isChatOpen.value]);
}const BMO_RENDER_OPTIONS = { width: 21, height: 21 };
function useBmoRenderer(containerRef) {
  y$1(() => {
    if (!containerRef.current) return;
    let hasObserved = false;
    const renderBmo = () => {
      const bmoji = window.Bmoji;
      if (!bmoji || !containerRef.current) return;
      if (!hasObserved && typeof bmoji.observe === "function") {
        bmoji.observe(containerRef.current, BMO_RENDER_OPTIONS);
        hasObserved = true;
      }
      if (typeof bmoji.renderAll === "function") {
        bmoji.renderAll(containerRef.current, BMO_RENDER_OPTIONS);
      }
    };
    renderBmo();
    const disposeBmoReady = onBmoReady(renderBmo);
    return () => {
      disposeBmoReady();
      const bmoji = window.Bmoji;
      if (typeof bmoji?.disconnect === "function") {
        bmoji.disconnect();
      }
    };
  }, []);
}function useRichInput({
  editorRef,
  proxyRef,
  controllerRef,
  minHeight = 38,
  maxHeight,
  onValueChange
}) {
  const valueRef = A("");
  const selectionRef = A({ start: 0, end: 0 });
  const isComposingRef = A(false);
  const compositionEndTimerRef = A(null);
  const updateHeight = q(() => {
    const editor = editorRef.current;
    if (!editor) return;
    editor.style.height = "auto";
    const next = Math.max(minHeight, Math.min(editor.scrollHeight, maxHeight));
    editor.style.height = `${next}px`;
    editor.classList.toggle("is-overflowing", editor.scrollHeight > maxHeight);
  }, [editorRef, minHeight, maxHeight]);
  const syncProxy = q((value = valueRef.current, selection = selectionRef.current) => {
    const proxy = proxyRef?.current;
    if (!proxy) return;
    proxy.value = value;
    proxy.selectionStart = selection.start;
    proxy.selectionEnd = selection.end;
  }, [proxyRef]);
  const syncAssetLayout = q(() => {
    const editor = editorRef.current;
    if (!editor) return;
    const images = Array.from(editor.querySelectorAll("img"));
    if (images.length === 0) {
      requestAnimationFrame(updateHeight);
      return;
    }
    images.forEach((img) => {
      if (img.complete) return;
      const refresh = () => requestAnimationFrame(updateHeight);
      img.addEventListener("load", refresh, { once: true });
      img.addEventListener("error", refresh, { once: true });
    });
    requestAnimationFrame(updateHeight);
  }, [editorRef, updateHeight]);
  const renderBmo = q((value) => {
    if (!value.includes("(bmo")) return;
    const editor = editorRef.current;
    const bmoji = window.Bmoji;
    if (!editor || typeof bmoji?.renderAll !== "function") return;
    requestAnimationFrame(() => {
      if (editorRef.current === editor) {
        bmoji.renderAll(editor, { width: 21, height: 21 });
        requestAnimationFrame(updateHeight);
      }
    });
  }, [editorRef, updateHeight]);
  const renderEditorValue = q((value, selection, focus = false) => {
    const editor = editorRef.current;
    if (!editor) return;
    editor.innerHTML = renderRichInputHTML(value);
    if (focus) editor.focus();
    if (focus || document.activeElement === editor) {
      setRichInputSelection(editor, selection.start, selection.end);
    }
    syncAssetLayout();
    renderBmo(value);
  }, [editorRef, syncAssetLayout, renderBmo]);
  const applyValue = q((value, options = {}) => {
    const selection = options.selection || { start: value.length, end: value.length };
    valueRef.current = value;
    selectionRef.current = selection;
    syncProxy(value, selection);
    renderEditorValue(value, selection, !!options.focus);
    onValueChange?.(value, options);
  }, [syncProxy, renderEditorValue, onValueChange]);
  controllerRef.current = {
    focus: () => editorRef.current?.focus(),
    getSelection: () => {
      const editor = editorRef.current;
      const selection = editor ? getRichInputSelection(editor) : null;
      if (selection) {
        selectionRef.current = selection;
        syncProxy(valueRef.current, selection);
        return selection;
      }
      return selectionRef.current;
    },
    getValue: () => valueRef.current,
    insertText: (text, options = {}) => {
      const selection = controllerRef.current?.getSelection() || selectionRef.current;
      controllerRef.current?.replaceRange(text, selection.start, selection.end, options);
    },
    replaceRange: (text, start, end, options = {}) => {
      const current = valueRef.current;
      const next = current.substring(0, start) + text + current.substring(end);
      const selection = options.selection || {
        start: start + text.length,
        end: start + text.length
      };
      applyValue(next, { ...options, selection });
    },
    setSelection: (start, end = start) => {
      const selection = { start, end };
      selectionRef.current = selection;
      syncProxy(valueRef.current, selection);
      const editor = editorRef.current;
      if (editor && document.activeElement === editor) {
        setRichInputSelection(editor, start, end);
      }
    },
    setValue: (value, options = {}) => applyValue(value, options)
  };
  const handleInput = q(() => {
    const editor = editorRef.current;
    if (!editor) return;
    const selection = getRichInputSelection(editor) || selectionRef.current;
    const value = extractRichInputText(editor);
    valueRef.current = value;
    selectionRef.current = selection;
    syncProxy(value, selection);
    if (!isComposingRef.current && needsRichInputNormalization(editor, value)) {
      renderEditorValue(value, selection);
    }
    onValueChange?.(value, {});
  }, [editorRef, syncProxy, renderEditorValue, onValueChange]);
  const handleCompositionStart = q(() => {
    isComposingRef.current = true;
  }, []);
  const handleCompositionEnd = q(() => {
    isComposingRef.current = false;
    if (compositionEndTimerRef.current) {
      clearTimeout(compositionEndTimerRef.current);
    }
    compositionEndTimerRef.current = setTimeout(() => {
      compositionEndTimerRef.current = null;
    }, 50);
    handleInput();
  }, [handleInput]);
  y$1(() => {
    const proxy = proxyRef?.current;
    if (!proxy) return;
    const handleProxyInput = () => {
      applyValue(proxy.value, {
        selection: {
          start: proxy.selectionStart,
          end: proxy.selectionEnd
        }
      });
    };
    proxy.addEventListener("input", handleProxyInput);
    return () => proxy.removeEventListener("input", handleProxyInput);
  }, [proxyRef, applyValue]);
  y$1(() => {
    const syncSelection = () => {
      const editor = editorRef.current;
      if (!editor || document.activeElement !== editor) return;
      const selection = getRichInputSelection(editor);
      if (!selection) return;
      selectionRef.current = selection;
      syncProxy(valueRef.current, selection);
    };
    document.addEventListener("selectionchange", syncSelection);
    return () => document.removeEventListener("selectionchange", syncSelection);
  }, [editorRef, syncProxy]);
  y$1(() => () => {
    if (compositionEndTimerRef.current) {
      clearTimeout(compositionEndTimerRef.current);
    }
  }, []);
  return { handleInput, handleCompositionStart, handleCompositionEnd, updateHeight };
}const MAX_INPUT_HEIGHT = 150;
const ATTACH_MENU_WIDTH = 176;
function arePmMessagesGrouped(current, adjacent) {
  return canGroupAdjacentMessages(
    current && {
      senderId: current.userHref || (current.isSelf ? "self" : "peer"),
      timestamp: current.timestamp,
      boundaryId: current.topic
    },
    adjacent && {
      senderId: adjacent.userHref || (adjacent.isSelf ? "self" : "peer"),
      timestamp: adjacent.timestamp,
      boundaryId: adjacent.topic
    }
  );
}
function PmMessageItem({
  message,
  nickname,
  isGrouped,
  isGroupedWithNext,
  onRetry
}) {
  const textContentRef = A(null);
  const [isNew, setIsNew] = d$2(() => pmNewMessageIds.peek().has(message.id));
  const presentationText = message.presentationText || message.bodyText;
  const isSticker = isStickerMessage(presentationText, false, void 0);
  const { isExpanded, isCollapsible, shouldCollapse, toggleExpanded } = useCollapsibleMessage(
    textContentRef,
    message.bodyHtml,
    false,
    isSticker,
    "img:not(.smile), video, audio"
  );
  const prefersTrailingTimestamp = !hasRichBubbleContent(
    presentationText,
    false,
    false,
    isCollapsible
  );
  const timestampMode = getBubbleTimestampMode(
    isGroupedWithNext,
    void 0,
    false,
    isSticker,
    prefersTrailingTimestamp
  );
  const timeText = message.timestamp === null ? message.timestampText : formatDate(message.timestamp, "time");
  const fullTimeText = message.timestamp === null ? message.timestampText : formatDate(message.timestamp, "full");
  y$1(() => {
    if (isNew) {
      const timer = setTimeout(() => setIsNew(false), NEW_MESSAGE_ANIMATION);
      return () => clearTimeout(timer);
    }
  }, [isNew]);
  const handleBubbleClick = (event) => {
    if (message.state !== "failed") return;
    event.stopPropagation();
    onRetry?.(message.id);
  };
  const handleAvatarClick = (event) => {
    const username = message.userHref.match(/^\/user\/(.+)$/)?.[1];
    if (!username) return;
    event.preventDefault();
    event.stopPropagation();
    showUserProfile("bgm:" + decodeURIComponent(username));
  };
  return k$1(
    "div",
    {
      class: `xv dollars-pm-message${message.isSelf ? " self" : ""}${isGrouped ? " is-grouped-with-prev" : ""}${isGroupedWithNext ? " is-grouped-with-next" : ""}${isNew ? " new-message" : ""}${message.state === "sending" ? " pending" : ""}${message.state === "failed" ? " failed" : ""}`,
      "data-timestamp": message.timestamp ?? void 0
    },
    k$1("a", { class: "dollars-pm-avatar-link", href: message.userHref || "#", target: "_blank", rel: "noopener noreferrer", onClick: handleAvatarClick }, k$1("img", { class: "avatar", src: message.avatar || "/img/no_icon_subject.png", alt: message.isSelf ? "" : nickname })),
    k$1("div", { class: "xw" }, k$1("span", { class: "nickname" }, k$1("a", { href: message.userHref || "#", target: "_blank", rel: "noopener noreferrer" }, nickname)), k$1(
      "div",
      {
        class: `bubble${isSticker ? " sticker-mode" : ""}${timestampMode === "trailing" ? " has-trailing-timestamp" : ""}${timestampMode === "stacked" ? " has-stacked-timestamp" : ""}`,
        onClick: message.state === "failed" ? handleBubbleClick : void 0,
        style: message.state === "failed" ? { cursor: "pointer" } : void 0
      },
      k$1("span", { class: "xz" }, nickname),
      k$1(
        "div",
        {
          ref: textContentRef,
          class: `xA ${shouldCollapse ? "is-collapsed" : ""}`,
          style: { "--collapse-max-height": `${COLLAPSE_MAX_HEIGHT}px` },
          dangerouslySetInnerHTML: { __html: message.bodyHtml }
        }
      ),
      isCollapsible && k$1(
        "button",
        {
          type: "button",
          class: "xSa",
          "aria-expanded": isExpanded,
          onClick: toggleExpanded
        },
        isExpanded ? "收起" : "展开全文"
      ),
      timestampMode !== "hidden" && k$1(
        "span",
        {
          class: `xy ${timestampMode === "overlay" ? "is-overlay" : timestampMode === "trailing" ? "is-trailing" : "is-stacked"}`,
          title: fullTimeText
        },
        timeText
      )
    ))
  );
}
function PmFloatingDate({ listRef }) {
  const [label, setLabel] = d$2("");
  const hideTimerRef = A(null);
  const messagesRef = A([]);
  y$1(() => {
    const list = listRef.current;
    if (!list) return;
    const refreshMessages = () => {
      messagesRef.current = Array.from(list.querySelectorAll(".xv[data-timestamp]"));
    };
    refreshMessages();
    const update = () => {
      if (hideTimerRef.current !== null) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
      if (isNearScrollBottom(list)) {
        setLabel("");
        return;
      }
      const nextLabel = getFloatingDateLabel(list, messagesRef.current);
      if (!nextLabel) {
        setLabel("");
        return;
      }
      setLabel(nextLabel);
      hideTimerRef.current = window.setTimeout(() => {
        setLabel("");
        hideTimerRef.current = null;
      }, 1e3);
    };
    const observer = new MutationObserver(refreshMessages);
    observer.observe(list, { childList: true, subtree: true });
    list.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      list.removeEventListener("scroll", update);
      if (hideTimerRef.current !== null) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };
  }, [listRef.current]);
  return k$1(FloatingDateCapsule, { label, preserveLastLabel: false });
}
function handleComposerKeyDown(event, submit) {
  if (event.key !== "Enter" || event.isComposing || event.keyCode === 229) return;
  const modifier = event.ctrlKey || event.metaKey;
  const shouldSend = settings.value.sendShortcut === "Enter" ? !modifier : modifier;
  if (!shouldSend) return;
  event.preventDefault();
  submit();
}
function PmConversationView({ id }) {
  const detail = pmDetails.value[id];
  const conversation = pmConversations.value.find((item) => item.id === id);
  const displayDetail = detail || {
    nickname: conversation?.nickname || "Bangumi 短信",
    avatar: conversation?.avatar || "",
    messages: []};
  const isInitialLoading = !detail && (pmDetailLoading.value || !pmDetailError.value);
  const [sending, setSending] = d$2(false);
  const [sendError, setSendError] = d$2("");
  const [isAttachMenuOpen, setIsAttachMenuOpen] = d$2(false);
  const [isAttachMenuClosing, setIsAttachMenuClosing] = d$2(false);
  const [attachMenuPosition, setAttachMenuPosition] = d$2(null);
  const [inputHeight, setInputHeight] = d$2(80);
  const listRef = A(null);
  const composerRef = A(null);
  const composerProxyRef = A(null);
  const inputControllerRef = A(null);
  const inputContainerRef = A(null);
  const attachButtonRef = A(null);
  const attachMenuRef = A(null);
  const attachCloseTimerRef = A(null);
  const previousLastId = A("");
  const {
    fileInputRef,
    isUploading,
    previewMedia,
    setPreviewMedia,
    parseMediaFiles,
    handleRemoveMedia,
    handleAttachMediaClick,
    handleAttachFileClick,
    handleFileChange,
    handlePaste
  } = useMediaUpload(inputControllerRef);
  useMessageImageViewer(listRef, detail?.messages, {
    mode: "generic",
    scopeSelector: ".dollars-pm-message-scroll"
  });
  const { handleInput, handleCompositionStart, handleCompositionEnd } = useRichInput({
    editorRef: composerRef,
    proxyRef: composerProxyRef,
    controllerRef: inputControllerRef,
    maxHeight: MAX_INPUT_HEIGHT,
    onValueChange: (value, options) => parseMediaFiles(value, options.knownMeta)
  });
  const canCompose = !!detail?.replyForm;
  const handleEditorKeyDown = (event) => {
    if (event.key !== "Enter" || event.isComposing || event.keyCode === 229) return;
    const modifier = event.ctrlKey || event.metaKey;
    const shouldSend = settings.value.sendShortcut === "Enter" ? !modifier : modifier;
    event.preventDefault();
    if (shouldSend) {
      void send();
    } else {
      inputControllerRef.current?.insertText("\n", { focus: true });
    }
  };
  y$1(() => {
    if (!detail) void loadPmDetail(id);
  }, [id]);
  y$1(() => {
    const container = inputContainerRef.current;
    if (!container) return;
    const updateHeight = () => setInputHeight(container.offsetHeight);
    const observer = new ResizeObserver(updateHeight);
    observer.observe(container);
    updateHeight();
    return () => observer.disconnect();
  }, []);
  y$1(() => {
    const lastId = detail?.messages[detail.messages.length - 1]?.id || "";
    if (lastId && lastId !== previousLastId.current) {
      requestAnimationFrame(() => {
        if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
      });
    }
    previousLastId.current = lastId;
  }, [detail?.messages]);
  const updateAttachMenuPosition = q(() => {
    const container = inputContainerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const left = Math.min(
      viewportWidth - ATTACH_MENU_WIDTH - 8,
      Math.max(8, containerRect.right - ATTACH_MENU_WIDTH)
    );
    setAttachMenuPosition({
      left,
      bottom: Math.max(5, viewportHeight - containerRect.top + 5)
    });
  }, []);
  const closeAttachMenu = q(() => {
    if (!isAttachMenuOpen || isAttachMenuClosing) return;
    setIsAttachMenuClosing(true);
    if (attachCloseTimerRef.current) {
      clearTimeout(attachCloseTimerRef.current);
    }
    attachCloseTimerRef.current = setTimeout(() => {
      setIsAttachMenuOpen(false);
      setIsAttachMenuClosing(false);
      attachCloseTimerRef.current = null;
    }, 200);
  }, [isAttachMenuOpen, isAttachMenuClosing]);
  const toggleAttachMenu = q(() => {
    if (isAttachMenuOpen) {
      closeAttachMenu();
      return;
    }
    if (attachCloseTimerRef.current) {
      clearTimeout(attachCloseTimerRef.current);
      attachCloseTimerRef.current = null;
    }
    setIsAttachMenuClosing(false);
    updateAttachMenuPosition();
    setIsAttachMenuOpen(true);
  }, [closeAttachMenu, isAttachMenuOpen, updateAttachMenuPosition]);
  y$1(() => {
    if (!isAttachMenuOpen) return;
    const handlePointerDown = (event) => {
      const target = event.target;
      if (target && attachButtonRef.current?.contains(target)) return;
      if (target && attachMenuRef.current?.contains(target)) return;
      closeAttachMenu();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeAttachMenu();
    };
    const handleViewportChange = () => updateAttachMenuPosition();
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [closeAttachMenu, isAttachMenuOpen, updateAttachMenuPosition]);
  const send = async () => {
    const content = (inputControllerRef.current?.getValue() || "").trim();
    if (!content || sending || isUploading) return;
    setSending(true);
    setSendError("");
    const pending = submitPmReply(id, content);
    inputControllerRef.current?.setValue("", { focus: true });
    setPreviewMedia([]);
    const result = await pending;
    setSending(false);
    if (result.status === "sent") {
      return;
    }
    setSendError(result.error);
  };
  const retry = async (messageId) => {
    if (sending || isUploading) return;
    setSending(true);
    setSendError("");
    const result = await retryPmReply(id, messageId);
    setSending(false);
    if (result.status !== "sent") setSendError(result.error);
  };
  let previousTopic = "";
  return k$1("div", { class: "dollars-pm-view" }, k$1(PmFloatingDate, { listRef }), k$1(
    "div",
    {
      class: "dollars-pm-message-scroll",
      ref: listRef,
      style: { paddingBottom: `${inputHeight + 20}px` }
    },
    isInitialLoading && k$1("div", { class: "pm-empty-state" }, "正在加载短信…"),
    !isInitialLoading && !detail && k$1("div", { class: "pm-empty-state" }, pmDetailError.value || "短信会话暂不可用", k$1("button", { type: "button", onClick: () => void loadPmDetail(id) }, "重试")),
    displayDetail.messages.map((message, index) => {
      const showTopic = !!message.topic && message.topic !== previousTopic;
      previousTopic = message.topic || previousTopic;
      const isGrouped = arePmMessagesGrouped(displayDetail.messages[index - 1], message);
      const isGroupedWithNext = arePmMessagesGrouped(message, displayDetail.messages[index + 1]);
      return k$1("div", { key: message.stableKey || message.id }, showTopic && k$1("div", { class: "dollars-pm-topic" }, message.topic), k$1(
        PmMessageItem,
        {
          message,
          nickname: displayDetail.nickname,
          isGrouped,
          isGroupedWithNext,
          onRetry: retry
        }
      ));
    }),
    !isInitialLoading && detail && detail.messages.length === 0 && k$1("div", { class: "pm-empty-state" }, "这个会话还没有短信")
  ), k$1("div", { class: "xqa dollars-pm-input-container", ref: inputContainerRef }, k$1(TextFormatter, { editorRef: composerRef, inputControllerRef }), k$1(
    SmileyPanel,
    {
      onSelect: (code) => inputControllerRef.current?.insertText(code, { focus: true }),
      textareaRef: composerProxyRef
    }
  ), k$1("div", { class: "xra" }, sendError && k$1("div", { class: "dollars-pm-error dollars-pm-input-error" }, sendError), k$1(MediaPreview, { previewMedia, onRemoveMedia: handleRemoveMedia }), k$1("div", { class: "input-wrapper" }, k$1(
    "button",
    {
      type: "button",
      id: "xi",
      class: "xRa",
      title: "表情",
      disabled: sending || isUploading || !detail?.replyForm,
      onClick: () => toggleSmileyPanel()
    }
  ), k$1("div", { class: "xo" }, k$1(
    "div",
    {
      ref: composerRef,
      class: `chat-textarea xpa dollars-pm-textarea${canCompose ? "" : " is-disabled"}`,
      contentEditable: canCompose,
      role: "textbox",
      "aria-multiline": "true",
      "data-placeholder": "输入短信",
      spellcheck: false,
      onInput: handleInput,
      onCompositionStart: handleCompositionStart,
      onCompositionEnd: handleCompositionEnd,
      onPaste: handlePaste,
      onKeyDown: handleEditorKeyDown
    }
  ), k$1(
    "textarea",
    {
      ref: composerProxyRef,
      class: "chat-textarea-proxy",
      tabIndex: -1,
      "aria-hidden": "true"
    }
  )), k$1("div", { class: "input-actions" }, k$1("div", { class: "xp" }, k$1(
    "button",
    {
      ref: attachButtonRef,
      type: "button",
      id: "xj",
      class: `xRa ${isAttachMenuOpen && !isAttachMenuClosing ? "active" : ""}`,
      title: "上传附件",
      "aria-haspopup": "menu",
      "aria-expanded": isAttachMenuOpen && !isAttachMenuClosing,
      disabled: sending || isUploading || !detail?.replyForm,
      onClick: toggleAttachMenu
    }
  )), isAttachMenuOpen && attachMenuPosition && k$1(FloatingPortal, null, k$1(
    "div",
    {
      ref: attachMenuRef,
      class: `xq xL ${isAttachMenuClosing ? "closing" : ""}`,
      role: "menu",
      style: {
        left: `${attachMenuPosition.left}px`,
        bottom: `${attachMenuPosition.bottom}px`
      }
    },
    k$1("button", { type: "button", role: "menuitem", onClick: () => {
      closeAttachMenu();
      handleAttachMediaClick();
    } }, k$1("span", { class: "xO", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconPhoto } }), k$1("span", null, "媒体")),
    k$1("button", { type: "button", role: "menuitem", onClick: () => {
      closeAttachMenu();
      handleAttachFileClick();
    } }, k$1("span", { class: "xO", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: iconFile } }), k$1("span", null, "文件"))
  )), k$1(
    "input",
    {
      ref: fileInputRef,
      type: "file",
      accept: MEDIA_FILE_ACCEPT,
      multiple: true,
      style: { display: "none" },
      onChange: handleFileChange
    }
  ), k$1(
    "button",
    {
      type: "button",
      class: `xya ${isUploading ? "uploading" : ""}`,
      disabled: sending || isUploading || !detail?.replyForm,
      onClick: send,
      title: sending || isUploading ? "发送中…" : "发送"
    }
  ))))));
}
function PmComposeView() {
  const [receiver, setReceiver] = d$2(pmComposeReceiver.value);
  const [title, setTitle] = d$2("");
  const [body, setBody] = d$2("");
  const [sending, setSending] = d$2(false);
  const [error, setError] = d$2("");
  y$1(() => setReceiver(pmComposeReceiver.value), [pmComposeReceiver.value]);
  const send = async () => {
    if (!receiver.trim() || !title.trim() || !body.trim() || sending) return;
    setSending(true);
    setError("");
    const result = await submitNewPm(receiver.trim(), title.trim(), body.trim());
    setSending(false);
    if (result.status !== "sent") setError(result.error);
  };
  return k$1("div", { class: "dollars-pm-compose-view" }, k$1("div", { class: "dollars-pm-compose-card" }, k$1("label", null, "收件人", k$1("input", { value: receiver, autocomplete: "off", onInput: (event) => setReceiver(event.currentTarget.value) })), k$1("label", null, "主题", k$1("input", { value: title, onInput: (event) => setTitle(event.currentTarget.value) })), k$1("label", { class: "dollars-pm-compose-body" }, "正文", k$1(
    "textarea",
    {
      value: body,
      onInput: (event) => setBody(event.currentTarget.value),
      onKeyDown: (event) => handleComposerKeyDown(event, send)
    }
  )), error && k$1("div", { class: "dollars-pm-error" }, error), k$1("div", { class: "dollars-pm-compose-actions" }, k$1("button", { type: "button", class: "secondary", onClick: () => {
    setReceiver("");
    setTitle("");
    setBody("");
    setError("");
  } }, "清空"), k$1("button", { type: "button", disabled: sending || !receiver.trim() || !title.trim() || !body.trim(), onClick: send }, sending ? "发送中…" : "发送短信"))));
}
function BangumiPmChat() {
  if (!isBangumiLoggedIn()) {
    return k$1("div", { class: "pm-empty-state" }, "请先登录 Bangumi 后使用短信", k$1("a", { href: "/login", target: "_blank", rel: "noopener noreferrer" }, "前往登录"));
  }
  if (activeConversationId.value === "pm:new") return k$1(PmComposeView, null);
  const id = activePmId();
  return id ? k$1(PmConversationView, { id }) : k$1("div", { class: "pm-empty-state" }, "请选择一个短信会话");
}function ChatWindow({ skipEntryAnimation = false }) {
  const windowRef = A(null);
  useWebSocket();
  useChatWindowLayout(windowRef);
  useBmoRenderer(windowRef);
  const { handleDragStart, handleResizeStart } = useChatWindowInteractions(windowRef);
  const [animateIn, setAnimateIn] = d$2(skipEntryAnimation);
  y$1(() => {
    if (!skipEntryAnimation) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimateIn(true);
        });
      });
    }
  }, []);
  const className = `dollars-chat-window${animateIn && isChatOpen.value ? " visible" : ""}${isMobileViewport.value ? " mobile" : ""}${isMaximized.value ? " maximized" : ""}${isSearchActive.value ? " search-active" : ""}${isNarrowLayout.value ? " is-narrow" : ""}${mobileChatViewActive.value ? " mobile-chat-active" : ""}`;
  const isPmActive = activeConversationId.value.startsWith("pm:");
  return k$1(
    "div",
    {
      id: "dollars-chat-window",
      ref: windowRef,
      class: className,
      onMouseDown: handleDragStart,
      onTouchStart: handleDragStart
    },
    k$1(
      "div",
      {
        id: "dollars-resize-handle",
        title: "调整窗口大小",
        onMouseDown: handleResizeStart,
        onTouchStart: handleResizeStart
      }
    ),
    k$1(ChatHeader, null),
    k$1("div", { id: "xb" }, k$1(Sidebar, null), k$1("div", { id: "xg" }, k$1(UserProfilePanel, null), isPmActive ? k$1(BangumiPmChat, null) : k$1(S, null, k$1(SearchPanel, null), k$1(ChatBody, null), k$1(FloatingUI, null), k$1(ChatInput, null))))
  );
}function ReactionPickerFloating() {
  const [activeTab, setActiveTab] = d$2("TV");
  const [bmoItems, setBmoItems] = d$2([]);
  const contentRef = A(null);
  const containerRef = A(null);
  y$1(() => {
    if (activeTab === "BMO") {
      setBmoItems(loadSavedBmoItems());
    }
  }, [activeTab]);
  y$1(() => {
    const bmoji = window.Bmoji;
    if (!isReactionPickerOpen.value || !bmoji || !containerRef.current) return;
    requestAnimationFrame(() => {
      if (containerRef.current) {
        bmoji.renderAll(containerRef.current, { width: 21, height: 21 });
      }
    });
  }, [isReactionPickerOpen.value, activeTab, bmoItems]);
  y$1(() => {
    if (!isReactionPickerOpen.value) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        hideReactionPicker();
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 50);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isReactionPickerOpen.value]);
  _$2(() => {
    if (isReactionPickerOpen.value && containerRef.current) {
      const el = containerRef.current;
      const rect = el.getBoundingClientRect();
      let { x: x2, y: y2 } = reactionPickerPosition.value;
      let hasChanged = false;
      if (x2 + rect.width > window.innerWidth) {
        x2 = Math.max(10, window.innerWidth - rect.width - 10);
        hasChanged = true;
      }
      if (x2 < 10) {
        x2 = 10;
        hasChanged = true;
      }
      if (y2 + rect.height > window.innerHeight) {
        y2 = Math.max(10, window.innerHeight - rect.height - 10);
        hasChanged = true;
      }
      if (y2 < 10) {
        y2 = 10;
        hasChanged = true;
      }
      if (hasChanged) {
        el.style.left = `${x2}px`;
        el.style.top = `${y2}px`;
      }
    }
  }, [isReactionPickerOpen.value, reactionPickerPosition.value, activeTab]);
  const handleReaction = q(async (emoji) => {
    const targetId = contextMenuTargetId.value;
    if (!targetId) return;
    hideReactionPicker();
    hideContextMenu();
    await toggleReaction(Number(targetId), emoji);
  }, []);
  if (!isReactionPickerOpen.value) {
    return null;
  }
  const { x, y, width } = reactionPickerPosition.value;
  let smileys = [];
  let specialContent = null;
  if (activeTab === "BMO") {
    specialContent = k$1("div", { style: { display: "contents" } }, bmoItems.length > 0 ? bmoItems.map((item) => k$1("li", { key: item.code, class: "xza" }, k$1(
      "a",
      {
        href: "#",
        "data-smiley": item.code,
        title: item.name || item.code,
        onClick: (e) => {
          e.preventDefault();
          handleReaction(item.code);
        }
      },
      k$1("span", { class: "bmo", "data-code": item.code })
    ))) : k$1("p", { style: { width: "100%", textAlign: "center", color: "var(--xa)", fontSize: "12px", marginTop: "20px", padding: "0 10px" } }, "暂无保存的 BMO 表情"));
  } else {
    smileys = generateSmileyCodes(activeTab);
  }
  return k$1(
    "div",
    {
      id: "dollars-reaction-picker-floating",
      class: `open ${isReactionPickerClosing.value ? "closing" : ""}`,
      ref: containerRef,
      style: { left: `${x}px`, top: `${y}px`, width: `${width}px` }
    },
    k$1("div", { class: "reaction-picker-tabs" }, smileyRangesWithoutFavorites.map((range) => {
      let textContent = range.name;
      if (range.name === "BMO") {
        textContent = k$1("span", { class: "bmo", "data-code": "(bmoCgASACIBLgCg)", style: { verticalAlign: "middle" } });
      } else if (range.path && range.start) {
        const iconId = range.tabIconId ?? range.start;
        textContent = k$1("img", { src: range.path(iconId), alt: range.name, style: { width: "21px", height: "21px", verticalAlign: "middle" } });
      }
      return k$1(
        "button",
        {
          key: range.name,
          class: `xR ${activeTab === range.name ? "active" : ""}`,
          "data-group": range.name,
          onClick: () => setActiveTab(range.name),
          title: range.name
        },
        textContent
      );
    })),
    k$1("div", { class: "xS", ref: contentRef }, specialContent, smileys.map((code) => {
      const url = getSmileyUrl(code);
      return k$1("li", { key: code, class: "xza" }, k$1(
        "a",
        {
          href: "#",
          "data-smiley": code,
          onClick: (e) => {
            e.preventDefault();
            handleReaction(code);
          },
          style: url ? { backgroundImage: `url('${url}')` } : void 0,
          title: code
        }
      ));
    }))
  );
}function ContextMenu() {
  const menuRef = A(null);
  y$1(() => {
    const handleClick = (e) => {
      const menu = menuRef.current;
      const picker = document.getElementById("dollars-reaction-picker-floating");
      if (menu && !menu.contains(e.target) && (!picker || !picker.contains(e.target))) {
        hideContextMenu();
      }
    };
    if (isContextMenuOpen.value) {
      document.addEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isContextMenuOpen.value]);
  _$2(() => {
    if (isContextMenuOpen.value && menuRef.current) {
      const el = menuRef.current;
      const rect = el.getBoundingClientRect();
      let { x: x2, y: y2 } = contextMenuPosition.value;
      let hasChanged = false;
      if (x2 + rect.width > window.innerWidth) {
        x2 = Math.max(10, window.innerWidth - rect.width - 10);
        hasChanged = true;
      }
      if (x2 < 10) {
        x2 = 10;
        hasChanged = true;
      }
      if (y2 + rect.height > window.innerHeight) {
        y2 = Math.max(10, window.innerHeight - rect.height - 10);
        hasChanged = true;
      }
      if (y2 < 10) {
        y2 = 10;
        hasChanged = true;
      }
      if (hasChanged) {
        el.style.left = `${x2}px`;
        el.style.top = `${y2}px`;
      }
    }
  }, [isContextMenuOpen.value, contextMenuPosition.value]);
  y$1(() => {
    if (!isContextMenuOpen.value) return;
    const renderBmo = () => {
      requestAnimationFrame(() => {
        if (window.Bmoji && menuRef.current) {
          window.Bmoji.renderAll(menuRef.current, { width: 24, height: 24 });
        }
      });
    };
    renderBmo();
    return onBmoReady(renderBmo);
  }, [isContextMenuOpen.value]);
  const handleReaction = q(async (emoji) => {
    const targetId2 = contextMenuTargetId.value;
    if (!targetId2) return;
    hideContextMenu();
    await toggleReaction(Number(targetId2), emoji);
  }, []);
  const handleMoreReactions = q((e) => {
    e.stopPropagation();
    if (isReactionPickerOpen.value) {
      hideReactionPicker();
      return;
    }
    const button = e.currentTarget;
    const reactionsRow = button.closest(".xM");
    if (reactionsRow) {
      const rect = reactionsRow.getBoundingClientRect();
      showReactionPicker(rect.left, rect.bottom + 8, rect.width);
    }
  }, []);
  const handleReply = q(() => {
    const targetId2 = contextMenuTargetId.value;
    if (!targetId2) return;
    hideContextMenu();
    const raw = getRawMessage(targetId2);
    const messageEl = document.getElementById(`db-${targetId2}`);
    if (!raw || !messageEl) return;
    const uid = messageEl.dataset.uid || "";
    const user = messageEl.querySelector(".nickname a")?.textContent?.trim() || "";
    const avatar = messageEl.querySelector(".avatar")?.src || "";
    const text = stripQuotes(decodeHTML(raw)).replace(/\[img\].*?\[\/img\]/gi, "[图片]").replace(/\[file=.*?\].*?\[\/file\]/gi, "[附件]").replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    setReplyTo({
      id: targetId2,
      uid,
      user,
      text,
      raw,
      avatar
    });
  }, []);
  const handleEdit = q(() => {
    const targetId2 = contextMenuTargetId.value;
    if (!targetId2) return;
    hideContextMenu();
    const msg2 = messageMap.value.get(Number(targetId2));
    if (!msg2) return;
    const rawContent = msg2.message;
    const quoteRegex = /^(\[quote(?:=[^\]]*)?\][\s\S]*?\[\/quote\])\s*/i;
    const match = rawContent.match(quoteRegex);
    let hiddenQuote = "";
    let editableText = rawContent;
    if (match) {
      hiddenQuote = match[1];
      editableText = rawContent.substring(match[0].length);
    }
    setEditingMessage({
      id: targetId2,
      raw: editableText,
      hiddenQuote,
      image_meta: msg2.image_meta
    });
  }, []);
  const handleCopy = q(async () => {
    const targetId2 = contextMenuTargetId.value;
    if (!targetId2) return;
    hideContextMenu();
    const raw = getRawMessage(targetId2);
    if (!raw) return;
    const plainText = decodeHTML(raw).replace(/\[.*?\]/g, "").trim();
    try {
      await navigator.clipboard.writeText(plainText);
    } catch (e) {
    }
  }, []);
  const handleDelete = q(async () => {
    const targetId2 = contextMenuTargetId.value;
    if (!targetId2) return;
    hideContextMenu();
    if (!confirm("确认撤回这条消息吗？")) {
      return;
    }
    const result = await deleteMessage$1(Number(targetId2));
    if (!result.status) {
      alert(result.error || "撤回失败");
    }
  }, []);
  const handleFavorite = q((e) => {
    const button = e.currentTarget;
    if (contextMenuBmoCode.value) {
      const bmoCode = contextMenuBmoCode.value;
      try {
        const bmoji = window.Bmoji;
        const existing = bmoji.savedBmo.list() || [];
        if (!existing.some((i) => i.code === bmoCode)) {
          bmoji.savedBmo.create({ code: bmoCode, name: bmoCode });
          const span = button.querySelector("span:not(.xO)");
          if (span) span.textContent = "已存入BMO面板";
        } else {
          const span = button.querySelector("span:not(.xO)");
          if (span) span.textContent = "已存在";
        }
      } catch (err) {
        const span = button.querySelector("span:not(.xO)");
        if (span) span.textContent = "收藏失败";
      }
    } else if (contextMenuImageUrl.value) {
      try {
        addFavorite(contextMenuImageUrl.value);
        const span = button.querySelector("span:not(.xO)");
        if (span) span.textContent = "已收藏";
      } catch (err) {
        const span = button.querySelector("span:not(.xO)");
        if (span) span.textContent = "收藏失败";
      }
    }
    setTimeout(() => {
      hideContextMenu();
    }, 1e3);
  }, []);
  if (!isContextMenuOpen.value) {
    return null;
  }
  const { x, y } = contextMenuPosition.value;
  const targetId = contextMenuTargetId.value;
  const msg = targetId ? messageMap.value.get(Number(targetId)) : null;
  const isSelf = msg && String(msg.uid) === String(userInfo.value.id);
  const hasImage = !!contextMenuImageUrl.value || !!contextMenuBmoCode.value;
  return k$1(S, null, k$1(
    "div",
    {
      id: "dollars-context-menu",
      ref: menuRef,
      class: `visible has-items-wrapper ${hasImage ? "image-mode" : ""} ${isContextMenuClosing.value ? "closing" : ""}`,
      style: { left: `${x}px`, top: `${y}px`, pointerEvents: "auto" }
    },
    targetId && k$1("div", { class: "xM" }, CONTEXT_MENU_REACTIONS.map((emoji) => {
      const url = getSmileyUrl(emoji);
      const isBmo = emoji.startsWith("(bmo");
      return k$1(
        "div",
        {
          key: emoji,
          class: "xQ",
          "data-emoji": emoji,
          onClick: () => handleReaction(emoji)
        },
        url && k$1("img", { src: url, alt: emoji }),
        isBmo && k$1("span", { class: "bmo", "data-code": emoji })
      );
    }), k$1(
      "button",
      {
        class: `xN ${isReactionPickerOpen.value ? "expanded" : ""}`,
        onClick: handleMoreReactions,
        title: "更多表情",
        dangerouslySetInnerHTML: { __html: iconExpand }
      }
    )),
    !isReactionPickerOpen.value && k$1("div", { class: "xL" }, k$1("button", { "data-action": "reply", onClick: handleReply }, k$1("span", { class: "xO", dangerouslySetInnerHTML: { __html: iconReply } }), k$1("span", null, "回复")), k$1("button", { "data-action": "copy", onClick: handleCopy }, k$1("span", { class: "xO", dangerouslySetInnerHTML: { __html: iconCopy } }), k$1("span", null, "复制")), hasImage && k$1("button", { class: "image-action", "data-action": "favorite", onClick: handleFavorite }, k$1("span", { class: "xO", dangerouslySetInnerHTML: { __html: iconFavorite } }), k$1("span", null, "收藏表情")), isSelf && k$1(S, null, k$1("button", { class: "auth-action", "data-action": "edit", onClick: handleEdit }, k$1("span", { class: "xO", dangerouslySetInnerHTML: { __html: iconEdit } }), k$1("span", null, "编辑")), k$1("button", { class: "auth-action danger", "data-action": "delete", onClick: handleDelete }, k$1("span", { class: "xO", dangerouslySetInnerHTML: { __html: iconDelete } }), k$1("span", null, "撤回"))))
  ), k$1(ReactionPickerFloating, null));
}function updateBadge(link, count) {
  let badge = link.querySelector(".dock-notif-badge");
  if (count > 0) {
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "dock-notif-badge";
      link.appendChild(badge);
    }
    badge.textContent = count > 99 ? "99+" : String(count);
    badge.style.display = "block";
  } else if (badge) {
    badge.style.display = "none";
  }
}
function createDockLink() {
  const link = document.createElement("a");
  link.href = "#";
  link.id = "dock-chat-link";
  link.title = "打开聊天窗口";
  const icon = document.createElement("span");
  icon.className = "ico ico-sq ico_robot_open";
  icon.textContent = "聊天";
  link.appendChild(icon);
  link.addEventListener("click", (e) => {
    e.preventDefault();
    toggleChat(!isChatOpen.value);
    if (isChatOpen.value) {
      stopDockFlashing();
    }
  });
  return link;
}
function DockButton() {
  y$1(() => {
    const notifyLink = document.querySelector('#dock a[href*="/notify/all"]');
    if (!notifyLink) return;
    const parentLi = notifyLink.closest("li");
    if (!parentLi) return;
    const li = document.createElement("li");
    li.className = "chat";
    const link = createDockLink();
    li.appendChild(link);
    parentLi.before(li);
    const unsubscribe = dockIconFlashing.subscribe((flashing) => {
      link.classList.toggle("flashing", flashing);
    });
    const renderBadge = () => {
      const count = isChatOpen.peek() ? 0 : dollarsNotifications.peek().length + pmUnreadCount.peek();
      updateBadge(link, count);
    };
    const unsubscribeCount = dollarsNotifications.subscribe(renderBadge);
    const unsubscribePm = pmUnreadCount.subscribe(renderBadge);
    const unsubscribeChatOpen = isChatOpen.subscribe(renderBadge);
    return () => {
      unsubscribe();
      unsubscribeCount();
      unsubscribePm();
      unsubscribeChatOpen();
      li.remove();
    };
  }, []);
  return null;
}class ErrorBoundary extends C$1 {
  state = {
    hasError: false
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return k$1("div", { class: "error-fallback" }, k$1("div", { class: "error-fallback-icon" }, "😢"), k$1("div", null, "加载出错了"), k$1(
        "button",
        {
          onClick: () => this.setState({ hasError: false })
        },
        "重试"
      ));
    }
    return this.props.children;
  }
}const SWIPE_THRESHOLD = 50;
const SWIPE_DOWN_THRESHOLD = 80;
const DOUBLE_TAP_DELAY = 300;
const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ANIM_DURATION = 250;
function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
function dist(a, b) {
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}
function midpoint(a, b) {
  return { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
}
function LightboxViewer() {
  const overlayRef = A(null);
  const imgRef = A(null);
  const scale = A(1);
  const tx = A(0);
  const ty = A(0);
  const startTouches = A([]);
  const startScale = A(1);
  const startTx = A(0);
  const startTy = A(0);
  const startDist = A(0);
  const startMid = A({ x: 0, y: 0 });
  const lastTap = A(0);
  const isDragging = A(false);
  const hasMoved = A(false);
  const swipeStartX = A(0);
  const swipeStartY = A(0);
  const closing = A(false);
  const timelineLoading = A(false);
  const items = imageViewerItems.value;
  const images = items.map((item) => item.src);
  const index = imageViewerIndex.value;
  const source = imageViewerSource.value;
  const timelineState = imageViewerTimelineState.value;
  const visible = isImageViewerOpen.value;
  const total = images.length;
  const currentItem = items[index];
  const handleCapsuleClick = q((e) => {
    e.stopPropagation();
    const messageId = currentItem?.messageId;
    if (!messageId) return;
    hideImageViewer();
    if (source === "userProfile") {
      hideUserProfile();
    }
    if (source !== "generic") {
      toggleSearch(false);
    }
    pendingJumpToMessage.value = messageId;
    toggleChat(true);
  }, [currentItem?.messageId, source]);
  const applyTransform = q(() => {
    const img = imgRef.current;
    if (img) {
      img.style.transform = `translate3d(${tx.current}px,${ty.current}px,0) scale(${scale.current})`;
    }
  }, []);
  const zoomAtPoint = q((clientX, clientY, nextScale) => {
    const img = imgRef.current;
    if (!img) return;
    const currentScale = scale.current;
    const clampedScale = clamp(nextScale, MIN_SCALE, MAX_SCALE);
    if (clampedScale <= MIN_SCALE) {
      scale.current = 1;
      tx.current = 0;
      ty.current = 0;
      img.classList.remove("lb-dragging");
      applyTransform();
      return;
    }
    const rect = img.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const ratio = clampedScale / currentScale;
    tx.current += (clientX - centerX) * (1 - ratio);
    ty.current += (clientY - centerY) * (1 - ratio);
    scale.current = clampedScale;
    img.classList.remove("lb-dragging");
    applyTransform();
  }, [applyTransform]);
  const toggleZoomAtPoint = q((clientX, clientY) => {
    zoomAtPoint(clientX, clientY, scale.current > 1.1 ? 1 : 2.5);
  }, [zoomAtPoint]);
  const resetTransform = q(() => {
    scale.current = 1;
    tx.current = 0;
    ty.current = 0;
    const img = imgRef.current;
    if (img) {
      img.classList.remove("lb-dragging");
      img.style.transform = "";
    }
  }, []);
  const close = q(() => {
    if (closing.current) return;
    closing.current = true;
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.classList.add("lb-closing");
      overlay.classList.remove("lb-visible");
    }
    setTimeout(() => {
      hideImageViewer();
      closing.current = false;
    }, ANIM_DURATION);
  }, []);
  const loadTimelinePage = q(async (direction) => {
    const timeline = imageViewerTimelineState.peek();
    const hasMore = direction === "before" ? timeline?.hasOlder : timeline?.hasNewer;
    if (!timeline || !hasMore || timelineLoading.current) return;
    timelineLoading.current = true;
    try {
      const cursorId = direction === "before" ? timeline.beforeId : timeline.afterId;
      const cursorIndex = direction === "before" ? timeline.beforeIndex : timeline.afterIndex;
      const page = await fetchGalleryTimelineImages(direction, cursorId, cursorIndex);
      if (!isImageViewerOpen.peek() || imageViewerSource.peek() !== "timeline" || imageViewerTimelineState.peek() !== timeline) {
        return;
      }
      if (page.items.length === 0) {
        imageViewerTimelineState.value = direction === "before" ? { ...timeline, hasOlder: false } : { ...timeline, hasNewer: false };
        return;
      }
      const currentItems = imageViewerItems.peek();
      const merged = mergeTimelineImagePage(currentItems, page.items, direction);
      const boundaryId = direction === "before" ? page.items[0].messageId : page.items[page.items.length - 1].messageId;
      const boundaryIndex = direction === "before" ? page.items[0].mediaIndex : page.items[page.items.length - 1].mediaIndex;
      r(() => {
        if (direction === "before") {
          imageViewerItems.value = merged.items;
          imageViewerIndex.value = merged.index;
          imageViewerTimelineState.value = {
            ...timeline,
            beforeId: boundaryId,
            beforeIndex: boundaryIndex,
            hasOlder: page.hasMore
          };
        } else {
          imageViewerItems.value = merged.items;
          imageViewerIndex.value = merged.index;
          imageViewerTimelineState.value = {
            ...timeline,
            afterId: boundaryId,
            afterIndex: boundaryIndex,
            hasNewer: page.hasMore
          };
        }
      });
      resetTransform();
    } catch {
    } finally {
      timelineLoading.current = false;
    }
  }, [resetTransform]);
  const navigate = q((dir) => {
    const currentItems = imageViewerItems.peek();
    const currentIndex = imageViewerIndex.peek();
    const nextIndex = currentIndex + dir;
    if (nextIndex >= 0 && nextIndex < currentItems.length) {
      imageViewerIndex.value = nextIndex;
      resetTransform();
      return;
    }
    if (imageViewerSource.peek() === "timeline") {
      void loadTimelinePage(dir < 0 ? "before" : "after");
      return;
    }
    if (currentItems.length > 1) {
      imageViewerIndex.value = (nextIndex + currentItems.length) % currentItems.length;
      resetTransform();
    }
  }, [loadTimelinePage, resetTransform]);
  y$1(() => {
    if (!visible) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        navigate(-1);
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        navigate(1);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close, navigate]);
  y$1(() => {
    if (!visible) return;
    resetTransform();
    requestAnimationFrame(() => {
      overlayRef.current?.classList.add("lb-visible");
    });
  }, [visible, index, resetTransform]);
  if (!visible || total === 0) return null;
  const src = images[index];
  const canNavigatePrevious = source === "timeline" ? index > 0 || !!timelineState?.hasOlder : total > 1;
  const canNavigateNext = source === "timeline" ? index < total - 1 || !!timelineState?.hasNewer : total > 1;
  const onTouchStart = (e) => {
    const touches = e.touches;
    hasMoved.current = false;
    if (touches.length === 1) {
      const t = touches[0];
      isDragging.current = true;
      startTouches.current = [{ x: t.clientX, y: t.clientY }];
      startTx.current = tx.current;
      startTy.current = ty.current;
      swipeStartX.current = t.clientX;
      swipeStartY.current = t.clientY;
      const now = Date.now();
      if (now - lastTap.current < DOUBLE_TAP_DELAY) {
        e.preventDefault();
        toggleZoomAtPoint(t.clientX, t.clientY);
        lastTap.current = 0;
        isDragging.current = false;
        return;
      }
      lastTap.current = now;
    } else if (touches.length === 2) {
      e.preventDefault();
      isDragging.current = false;
      startScale.current = scale.current;
      startTx.current = tx.current;
      startTy.current = ty.current;
      startDist.current = dist(touches[0], touches[1]);
      startMid.current = midpoint(touches[0], touches[1]);
    }
  };
  const onTouchMove = (e) => {
    const touches = e.touches;
    hasMoved.current = true;
    if (touches.length === 2) {
      e.preventDefault();
      const d = dist(touches[0], touches[1]);
      const mid = midpoint(touches[0], touches[1]);
      const ratio = d / startDist.current;
      scale.current = clamp(startScale.current * ratio, 0.5, MAX_SCALE);
      tx.current = startTx.current + (mid.x - startMid.current.x);
      ty.current = startTy.current + (mid.y - startMid.current.y);
      imgRef.current?.classList.add("lb-dragging");
      applyTransform();
    } else if (touches.length === 1 && isDragging.current) {
      const t = touches[0];
      const dx = t.clientX - startTouches.current[0].x;
      const dy = t.clientY - startTouches.current[0].y;
      if (scale.current > 1.05) {
        e.preventDefault();
        tx.current = startTx.current + dx;
        ty.current = startTy.current + dy;
        imgRef.current?.classList.add("lb-dragging");
        applyTransform();
      } else {
        ty.current = dy * 0.5;
        imgRef.current?.classList.add("lb-dragging");
        applyTransform();
      }
    }
  };
  const onTouchEnd = (e) => {
    if (e.touches.length > 0) return;
    isDragging.current = false;
    imgRef.current?.classList.remove("lb-dragging");
    if (scale.current < MIN_SCALE) {
      scale.current = MIN_SCALE;
      tx.current = 0;
      ty.current = 0;
      applyTransform();
    }
    if (scale.current <= 1.05 && hasMoved.current) {
      const changedTouch = e.changedTouches[0];
      if (changedTouch) {
        const dx = changedTouch.clientX - swipeStartX.current;
        const dy = changedTouch.clientY - swipeStartY.current;
        if (dy > SWIPE_DOWN_THRESHOLD && Math.abs(dx) < dy) {
          close();
          return;
        }
        if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dy) < Math.abs(dx)) {
          navigate(dx < 0 ? 1 : -1);
          return;
        }
      }
      tx.current = 0;
      ty.current = 0;
      applyTransform();
    }
  };
  const onWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    imgRef.current?.classList.add("lb-dragging");
    zoomAtPoint(e.clientX, e.clientY, scale.current * delta);
    setTimeout(() => imgRef.current?.classList.remove("lb-dragging"), 50);
  };
  const onBackdropClick = (e) => {
    if (e.target === overlayRef.current) {
      close();
    }
  };
  const onImageDoubleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleZoomAtPoint(e.clientX, e.clientY);
  };
  return k$1(
    "div",
    {
      ref: overlayRef,
      class: "lb-overlay",
      onClick: onBackdropClick
    },
    k$1("button", { class: "lb-close", onClick: close, "aria-label": "Close" }),
    (canNavigatePrevious || canNavigateNext) && k$1("div", { class: "lb-counter" }, index + 1, " / ", total),
    canNavigatePrevious && k$1("button", { class: "lb-nav lb-prev", onClick: () => navigate(-1), "aria-label": "Previous" }),
    canNavigateNext && k$1("button", { class: "lb-nav lb-next", onClick: () => navigate(1), "aria-label": "Next" }),
    currentItem?.messageId && currentItem.nickname && currentItem.timestamp != null && k$1("button", { class: "lb-capsule", onClick: handleCapsuleClick }, k$1(
      "img",
      {
        class: "lb-capsule-avatar",
        src: getAvatarUrl(currentItem.avatar || "", "s"),
        alt: currentItem.nickname
      }
    ), k$1("span", { class: "lb-capsule-info" }, k$1("span", { class: "lb-capsule-nickname" }, currentItem.nickname), k$1("span", { class: "lb-capsule-date" }, formatDate(currentItem.timestamp, "full")))),
    k$1(
      "div",
      {
        class: "lb-img-wrap"
      },
      k$1(
        "img",
        {
          ref: imgRef,
          class: "lb-img",
          src,
          alt: "",
          draggable: false,
          onDblClick: onImageDoubleClick,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          onWheel,
          onError: (e) => {
            e.currentTarget.src = "/img/no_img.gif";
          }
        }
      )
    )
  );
}function NotificationManager() {
  const handleView = q((notif) => {
    void markDollarsNotificationRead(notif);
    toggleChat(true);
    const messageId = notif.message_id || notif.message?.id;
    if (messageId) {
      pendingJumpToMessage.value = messageId;
    }
  }, []);
  const handleMarkAllRead = q(async () => {
    await markAllNotificationCardsRead();
  }, []);
  const handleViewPm = q((notif) => {
    dismissPmNotification(notif.id);
    openPmConversationFromHref(notif.href);
    toggleChat(true);
  }, []);
  const count = notificationCardCount.value;
  if (isChatOpen.value) {
    return null;
  }
  if (settings.value.notificationType === "simple") {
    return null;
  }
  if (count === 0) {
    return null;
  }
  return k$1("div", { id: "unified-notifier", class: count > 0 ? "show" : "" }, k$1("div", { class: "un-header" }, k$1("span", null, "通知 (", k$1("span", { class: "un-count" }, count), ")"), k$1(
    "a",
    {
      href: "#",
      class: "un-clear-all",
      onClick: (e) => {
        e.preventDefault();
        handleMarkAllRead();
      }
    },
    "全部已读"
  )), k$1("div", { class: "un-body" }, k$1("ul", null, pmNotificationCards.value.map((notif) => k$1(
    PmNotificationItem,
    {
      key: `pm-${notif.id}`,
      notification: notif,
      onView: () => handleViewPm(notif),
      onDismiss: () => dismissPmNotification(notif.id)
    }
  )), dollarsNotifications.value.map((notif) => k$1(
    NotificationItem,
    {
      key: notif.id,
      notification: notif,
      onView: () => handleView(notif),
      onDismiss: () => markDollarsNotificationRead(notif)
    }
  )))));
}
function PmNotificationItem({ notification, onView, onDismiss }) {
  const rawTitle = decodeHTML(notification.title || "");
  const title = rawTitle.substring(0, 20) + (rawTitle.length > 20 ? "..." : "");
  const label = notification.unreadCount > 1 ? `发来 ${notification.unreadCount} 条短信` : "发来短信";
  return k$1("li", { class: "un-item", "data-pm-id": notification.id }, notification.avatar && k$1(
    "span",
    {
      class: "avatarNeue avatarReSize40",
      style: { backgroundImage: `url('${getAvatarUrl(notification.avatar, "m")}')` }
    }
  ), k$1("div", { class: "content" }, k$1("strong", { class: "un-widget-title" }, escapeHTML(notification.nickname || "Bangumi 用户"), " ", k$1("span", { style: { fontWeight: "normal", color: "var(--xb)", fontSize: "11px" } }, label)), k$1("span", { class: "un-widget-message" }, escapeHTML(title)), k$1("div", { class: "actions" }, k$1(
    "a",
    {
      href: "#",
      class: "un-action-btn btnRedSmall ll",
      onClick: (e) => {
        e.preventDefault();
        onView();
      }
    },
    k$1("span", null, "查看")
  ), k$1(
    "a",
    {
      href: "#",
      class: "un-action-btn btnGraySmall ll",
      style: { marginLeft: "6px" },
      onClick: (e) => {
        e.preventDefault();
        onDismiss();
      }
    },
    k$1("span", null, "忽略")
  ))));
}
function NotificationItem({ notification, onView, onDismiss }) {
  const isReply = notification.type === "reply";
  const typeLabel = isReply ? "回复了你" : "提到了你";
  const rawText = stripBBCode(
    decodeHTML(notification.message?.message || notification.content || "")
  );
  const text = rawText.substring(0, 20) + (rawText.length > 20 ? "..." : "");
  const avatarSrc = getAvatarUrl(
    notification.message?.avatar || notification.avatar || "",
    "m"
  );
  const nickname = notification.message?.nickname || notification.nickname || "Unknown";
  return k$1(
    "li",
    {
      class: "un-item",
      id: `un-item-${notification.id}`,
      "data-notif-id": notification.id,
      "data-message-id": notification.message_id || notification.message?.id
    },
    k$1(
      "span",
      {
        class: "avatarNeue avatarReSize40",
        style: { backgroundImage: `url('${avatarSrc}')` }
      }
    ),
    k$1("div", { class: "content" }, k$1("strong", { class: "un-widget-title" }, escapeHTML(nickname), " ", k$1("span", { style: { fontWeight: "normal", color: "var(--xb)", fontSize: "11px" } }, typeLabel)), k$1("span", { class: "un-widget-message" }, escapeHTML(text)), k$1("div", { class: "actions" }, k$1(
      "a",
      {
        href: "#",
        class: "un-action-btn btnRedSmall ll",
        onClick: (e) => {
          e.preventDefault();
          onView();
        }
      },
      k$1("span", null, "查看")
    ), k$1(
      "a",
      {
        href: "#",
        class: "un-action-btn btnGraySmall ll",
        style: { marginLeft: "6px" },
        onClick: (e) => {
          e.preventDefault();
          onDismiss();
        }
      },
      k$1("span", null, "忽略")
    )))
  );
}const cssContent = `:root{--xD: 90;--xA: 99;--xB: 95;--xz: 110;--xC: 2000;--xH: #fff;--xj: rgba(0, 0, 0, .04);--xE: rgba(0, 0, 0, .08);--xF: rgba(0, 0, 0, .1);--xl: none;--xk: url(https://lsky.ry.mk/i/2026/01/03/background.svg);--xG: #333;--xa: #666;--xb: #999;--dollars-icon-color: #555;--xc: #888;--xr: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>');--xo: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>');--xq: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>');--xv: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>');--xw: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>');--xx: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M16 3l-4 4l-4 -4" /></svg>');--xs: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" /></svg>');--xy: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>');--xt: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M10 2L2 10" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M14 6L6 14" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>');--xp: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle cx="12" cy="12" r="3" /></svg>');--xu: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20"><path fill="white" d="M3 3h6v17c-.193-2.84-.876-5.767-2.05-8.782C6.046 8.893 4.504 6.733 2.325 4.738A1 1 0 013 3z"/></svg>');--xm: #4CAF50;--xn: #ef4444;--xf: rgba(255, 255, 255, .3);--xe: rgba(255, 255, 255, .3);--xi: rgba(255, 255, 255, .55);--xh: blur(16px) saturate(1.6) brightness(1.03);--xg: 0 8px 32px 0 rgba(31, 38, 135, .12), 0 2px 16px 0 rgba(31, 38, 135, .06), inset 0 1px 0 0 rgba(255, 255, 255, .5), inset 0 -1px 0 0 rgba(255, 255, 255, .2);--xd: rgba(255, 255, 255, .4)}#dollars-chat-window.visible{--xl: var(--xk)}html[data-theme=dark]{--xH: #1a1a1a;--xj: rgba(255, 255, 255, .08);--xE: rgba(255, 255, 255, .12);--xF: rgba(0, 0, 0, .3);--xG: #e0e0e0;--xa: #999;--xb: #666;--dollars-icon-color: #bbb;--xc: #bbb;--xf: rgba(255, 255, 255, .1);--xe: rgba(255, 255, 255, .1);--xi: rgba(30, 30, 30, .65);--xh: blur(16px) saturate(1.6) brightness(1.1);--xg: 0 8px 32px 0 rgba(0, 0, 0, .3), inset 0 1px 0 0 rgba(255, 255, 255, .1), inset 0 -1px 0 0 rgba(255, 255, 255, .05);--xd: rgba(255, 255, 255, .12)}#xa.disable-blur{--xh: none !important;--xi: rgba(255, 255, 255, .95)}html[data-theme=dark] #xa.disable-blur{--xi: rgba(30, 30, 30, .95)}#xa *::-webkit-scrollbar{width:5px;height:5px}#xa *::-webkit-scrollbar-track{background:transparent}#xa *::-webkit-scrollbar-thumb{background:color-mix(in srgb,var(--primary-color),transparent 75%);border-radius:10px}#xa *::-webkit-scrollbar-thumb:hover{background:color-mix(in srgb,var(--primary-color),transparent 50%)}#xa *{box-sizing:border-box;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--primary-color),transparent 75%) transparent}#xa{color:var(--xG)}#dollars-chat-window{position:fixed;bottom:80px;right:20px;width:400px;height:550px;z-index:var(--xD);display:flex;flex-direction:column;border-radius:15px;background:#ffffffd9;box-shadow:0 10px 28px #00000040;border:1px solid rgba(255,255,255,.1);background-clip:padding-box;overflow:hidden;opacity:0;pointer-events:none;transform:translateY(20px) scale(.9);transition:opacity .3s ease-out,transform .4s cubic-bezier(.16,1,.3,1)}#dollars-chat-window.visible{opacity:1;pointer-events:auto;transform:translateY(0) scale(1)}html[data-theme=dark] #dollars-chat-window{background:#1e1e1ee6;box-shadow:0 10px 28px #00000080}.error-fallback{padding:20px;text-align:center;color:var(--xa, #888)}.error-fallback-icon{font-size:24px;margin-bottom:10px}.error-fallback button{margin-top:10px;padding:8px 16px;border:0;border-radius:4px;background:var(--primary-color, #f09199);color:#fff;cursor:pointer}#dollars-chat-window.maximized{inset:10px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;border-radius:12px;transform:none!important}#dollars-chat-window.mobile{top:4vh!important;left:0!important;right:0!important;bottom:auto!important;width:95vw!important;height:92vh!important;max-width:600px;margin-left:auto!important;margin-right:auto!important;border-radius:20px}#dollars-chat-window.mobile.maximized{inset:0!important;width:100vw!important;height:100vh!important;height:100dvh!important;max-width:none!important;margin-left:0!important;margin-right:0!important;border-radius:0;z-index:98!important}#dollars-chat-window.mobile.visible{transform:translateY(0) scale(1)}#xb{display:flex;flex:1;min-height:0;overflow:hidden;position:relative}#xc{width:25%;height:100%;max-width:320px;display:flex;flex-direction:column;flex-shrink:0;border-right:none;box-shadow:inset -1px 0 #00000008;background-color:var(--xH);transition:width .3s cubic-bezier(.4,0,.2,1),max-width .3s cubic-bezier(.4,0,.2,1)}#dollars-chat-window.mobile-chat-active:not(.is-narrow) #xc{width:0;max-width:0;overflow:hidden;box-shadow:none}#xd{padding:48px 8px 8px;border-bottom:1px solid var(--xE);flex-shrink:0}#xe{display:flex;align-items:center;position:relative;border-radius:100px;border:1px solid var(--xE);background-color:var(--xH);transition:.3s ease-in-out;padding:6px 12px;width:100%;box-sizing:border-box;font-size:13px;color:var(--xG)}#xe:focus{outline:0;border-color:var(--primary-color);box-shadow:0 0 10px #f0919999}html[data-theme=dark] #xe{background-color:#3a3a3a}#xe::placeholder{color:var(--xb)}.dollars-sidebar-search-row{display:flex;align-items:center;gap:6px}.dollars-sidebar-search-row #xe{min-width:0}.dollars-pm-compose-button{width:30px;height:30px;padding:0;border:1px solid var(--xE);border-radius:50%;background:var(--xH);color:var(--primary-color);font-size:20px;line-height:1;cursor:pointer;flex-shrink:0}.dollars-pm-compose-button:hover{color:#fff;border-color:var(--primary-color);background:var(--primary-color)}#xf{flex-grow:1;overflow-y:auto;overscroll-behavior:contain;padding:4px}.xF{display:flex;align-items:center;padding:5px 10px;gap:12px;cursor:pointer;position:relative;border-radius:15px;transition:background-color .2s,box-shadow .2s}.xF:hover{background-color:var(--xj)}.xF.active{background:color-mix(in srgb,var(--primary-color),#ffffff 30%);color:#fff}html[data-theme=dark] .xF.active{background:color-mix(in srgb,var(--primary-color),#180518 60%)}.xF.active .xK,.xF.active .xI,.xF.active .xJ{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.1)}.xF .avatar{width:46px;height:46px;border-radius:50%;flex-shrink:0;object-fit:cover;background-color:#f3f3f3}html[data-theme=dark] .xF .avatar{background-color:#444}.xF .xG{flex-grow:1;overflow:hidden;min-width:0}.xF:has(.unread-badge) .xG{padding-right:24px}.xF .xH{display:flex;justify-content:space-between;align-items:center;font-weight:700;font-size:13px}.xF .xI{color:var(--xG);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.xF .xJ{font-size:11px;color:var(--xa);flex-shrink:0;margin-left:8px}.xF .xK{font-size:12px;color:var(--xa);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px}.xF .unread-badge{position:absolute;right:10px;bottom:8px;transform:none;box-sizing:border-box;width:18px;height:18px;line-height:18px;background-color:var(--primary-color);color:#fff;font-size:10px;font-weight:700;padding:0;border-radius:50%;text-align:center}.dollars-conversation-hint{padding:12px 10px;color:var(--xa);font-size:12px;text-align:center}.dollars-conversation-hint.error{color:#c33}.dollars-pm-load-more-conversations{display:block;margin:8px auto;padding:6px 12px;border:0;background:transparent;color:var(--primary-color);font-size:12px;cursor:pointer}.dollars-pm-load-more-conversations:disabled{opacity:.55}#dollars-chat-window.is-narrow #xc{width:100%;max-width:none;transition:transform .3s cubic-bezier(.4,0,.2,1)}#dollars-chat-window.is-narrow.mobile-chat-active #xc{transform:translate(-100%)}#dollars-chat-window.is-narrow #xg{position:absolute;top:0;left:0;width:100%;height:100%;transform:translate(100%);transition:transform .3s cubic-bezier(.4,0,.2,1)}#dollars-chat-window.is-narrow.mobile-chat-active #xg{transform:translate(0)}#dollars-chat-window.is-narrow #xb{overflow:hidden}#xg{display:flex;flex-direction:column;flex:1;min-height:0;overflow:hidden;position:relative;background-color:var(--xH);isolation:isolate;z-index:0}.dollars-pm-view,.dollars-pm-compose-view{display:flex;flex:1;min-height:0;position:relative;z-index:1}.dollars-pm-view{flex-direction:column}.dollars-pm-compose-view{padding-top:40px}.dollars-pm-message-scroll{contain:layout style paint;flex:1;min-height:0;overflow-y:scroll;overflow-x:hidden;padding:50px 10px 80px;display:flex;flex-direction:column;position:relative;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;background:transparent}.dollars-pm-topic{width:fit-content;max-width:80%;margin:12px auto;padding:3px 10px;border-radius:12px;background:color-mix(in srgb,var(--xH),transparent 15%);color:var(--xa);font-size:11px;text-align:center}.dollars-pm-message .xA img:not(.smile):not(.smiley):not(.custom-emoji):not(.bmoji-image){max-width:100%;height:auto}.dollars-pm-message .xA img.smile:not(.smiley-musume):not(.smiley-blake){max-width:60px;vertical-align:middle}.dollars-pm-message .audio-player-container,.dollars-pm-message .video-player-container{width:100%;margin:5px 0}.dollars-pm-message audio,.dollars-pm-message video{display:block;max-width:100%;border-radius:8px}.dollars-pm-message audio{width:300px}.dollars-pm-message video{max-height:400px;background:#000}.dollars-pm-message .xA{white-space:normal}.dollars-pm-message .xA br{display:initial}.bubble pre{white-space:pre-wrap;word-break:break-word;overflow-wrap:anywhere;max-width:100%;margin:0}.dollars-pm-avatar-link{display:contents}.dollars-pm-input-container{z-index:101}.dollars-pm-textarea.is-disabled{opacity:.55;pointer-events:none}.dollars-pm-compose-card input,.dollars-pm-compose-card textarea{box-sizing:border-box;border:1px solid var(--xE);border-radius:10px;background:var(--xH);color:var(--xG);font:inherit;outline:none}.dollars-pm-compose-card input:focus,.dollars-pm-compose-card textarea:focus{border-color:var(--primary-color)}.dollars-pm-compose-actions button,.pm-empty-state button{border:0;border-radius:10px;padding:8px 14px;background:var(--primary-color);color:#fff;cursor:pointer}.dollars-pm-compose-actions button:disabled{opacity:.5;cursor:default}.dollars-pm-error{color:#c33;font-size:12px}.dollars-pm-input-error{margin:0 10px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dollars-pm-compose-view{overflow-y:auto;align-items:center;justify-content:center;padding:40px 18px 18px}.dollars-pm-compose-card{display:flex;flex-direction:column;gap:12px;width:min(520px,100%);padding:18px;border:1px solid var(--xE);border-radius:16px;background:var(--xi);box-shadow:var(--xg)}.dollars-pm-compose-card label{display:flex;flex-direction:column;gap:5px;color:var(--xa);font-size:12px}.dollars-pm-compose-card input,.dollars-pm-compose-card textarea{width:100%;padding:8px 10px}.dollars-pm-compose-card textarea{min-height:150px;resize:vertical}.dollars-pm-compose-actions{display:flex;justify-content:flex-end;gap:8px}.dollars-pm-compose-actions button.secondary{border:1px solid var(--xE);background:transparent;color:var(--xa)}.pm-empty-state{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:60px 20px 20px;color:var(--xa);text-align:center}.pm-empty-state a{color:var(--primary-color)}#xg:before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;will-change:opacity;opacity:0;transition:opacity .3s ease}#xa[data-bg-mode=transparent] #xg:before{display:none!important}#xa[data-bg-mode=tint] #xg:before{background-image:var(--xl),linear-gradient(160deg,color-mix(in srgb,var(--primary-color),#a0c4ff 50%),color-mix(in srgb,var(--primary-color),#ffffff 50%),color-mix(in srgb,var(--primary-color),#ffc6ff 50%));background-repeat:repeat,no-repeat;background-position:center,center;background-size:400px,cover;background-blend-mode:overlay,normal;opacity:.65}#xa[data-bg-mode=lines] #xg:before{background-image:none;background-color:color-mix(in srgb,var(--primary-color),#ffffff 94%);opacity:.2}#xa[data-bg-mode=lines] #xg:after{content:"";position:absolute;inset:0;background-color:color-mix(in srgb,var(--primary-color),#ffffff 70%);-webkit-mask-image:var(--xl);mask-image:var(--xl);-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:400px;opacity:.7;z-index:-1;pointer-events:none}html[data-theme=dark] #xa[data-bg-mode=lines] #xg:after{opacity:.1}html[data-theme=dark] #xa[data-bg-mode=lines] #xg:before{background-image:none!important;background-color:transparent!important;-webkit-mask-image:none!important;mask-image:none!important;opacity:.25}html[data-theme=dark] #xa[data-bg-mode=tint] #xg:before{background-image:var(--xl),linear-gradient(160deg,color-mix(in srgb,var(--primary-color),#a0c4ff 50%),color-mix(in srgb,var(--primary-color),#ffffff 50%),color-mix(in srgb,var(--primary-color),#ffc6ff 50%));background-repeat:repeat,no-repeat;background-position:center,center;background-size:400px,cover;background-blend-mode:overlay,normal;-webkit-mask-image:none;mask-image:none;opacity:.3}.xB{background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);border-bottom:none;box-shadow:0 1px #00000005;display:flex;align-items:center;justify-content:space-between;padding:2px 15px;cursor:move;touch-action:none;flex-shrink:0;position:absolute;top:0;left:0;right:0;width:100%;height:40px;box-sizing:border-box;z-index:10002}html[data-theme=dark] .xB{background:var(--xH);border-bottom:none;box-shadow:0 1px #ffffff05}.xB .title-wrapper{flex-grow:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;min-width:0;padding:0 4px;gap:8px;pointer-events:none}.chat-header-left-pane{width:25%;max-width:320px;flex-shrink:0;display:flex;align-items:center;padding-left:5px;gap:4px;margin-right:8px}#dollars-chat-window.is-narrow .chat-header-left-pane,#dollars-chat-window.mobile-chat-active:not(.is-narrow) .chat-header-left-pane{width:auto;max-width:none}.header-chat-icon{width:30px;height:30px;border-radius:50%;object-fit:cover;flex-shrink:0;box-shadow:0 2px 4px #0000001a}.header-text-column{display:flex;flex-direction:column;gap:0;min-width:0;justify-content:center}.xB .title,.header-main-title{font-size:13px;font-weight:700;color:var(--xG);letter-spacing:.2px;line-height:1.2}.xB .online-status{font-size:10px;color:var(--xa);display:flex;align-items:center;gap:3px;opacity:.85;line-height:1.2}.xB .online-dot{width:6px;height:6px;background-color:var(--xm);border-radius:50%;flex-shrink:0}.xB .header-buttons{display:flex;align-items:center;gap:5px}.xB .header-back-wrap{position:relative;display:inline-flex;align-items:center}.xB .header-btn{position:relative;width:24px;height:24px;border:none;background:transparent;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--xa);transition:background-color .2s;background-repeat:no-repeat;background-position:center;background-size:18px}.xB .header-back-wrap .header-btn-badge{position:absolute;top:-3px;right:-3px;z-index:2;min-width:15px;height:15px;border-radius:8px;background-color:var(--primary-color);color:#fff;font-size:10px;font-weight:700;line-height:15px;text-align:center;padding:0 4px;box-sizing:border-box;pointer-events:none;box-shadow:0 1px 3px #00000040}.xB .header-btn:hover{background-color:#0000000d}html[data-theme=dark] .xB .header-btn:hover{background-color:#ffffff14}#dollars-search-btn,#xh,.xB .xC{background-color:var(--dollars-icon-color);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:18px;mask-size:18px}#dollars-search-btn{-webkit-mask-image:var(--xr);mask-image:var(--xr)}#xh{-webkit-mask-image:var(--xo);mask-image:var(--xo)}#dollars-chat-window.maximized #xh{-webkit-mask-image:var(--xq);mask-image:var(--xq)}.xB .xC{-webkit-mask-image:var(--xv);mask-image:var(--xv)}.xD{contain:layout style paint;flex-grow:1;overflow-y:scroll;overflow-x:hidden;padding:50px 10px 80px;display:flex;flex-direction:column;position:relative;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;min-height:0;overflow-anchor:auto;background:transparent}.xD.loading .xE{opacity:0;transition:opacity .3s}.xD.context-loading .xE{opacity:0!important;transition:opacity .05s ease}.xE{display:flex;flex-direction:column;contain:layout style;transition:opacity .3s ease}.xv{position:relative;overflow:visible!important;display:flex;gap:8px;margin-bottom:12px;align-items:flex-start;opacity:1;transform:translateY(0) scale(1);transition:transform .4s cubic-bezier(.19,1,.22,1),opacity .3s ease-out;will-change:transform,opacity;transform-origin:center bottom}.xv.self{flex-direction:row-reverse}.xv.self .xw{align-items:flex-end}.xv.pending{opacity:.7}.xv.pending .bubble{animation:pending-pulse 1.5s ease-in-out infinite}@keyframes pending-pulse{0%,to{opacity:.7}50%{opacity:1}}.xv.failed{opacity:.9}.xv.failed .bubble{border:1px solid rgba(239,68,68,.5);position:relative}.xv.failed .bubble:after{content:"\\53d1\\9001\\5931\\8d25\\ff0c\\70b9\\51fb\\91cd\\8bd5";position:absolute;bottom:-18px;right:0;font-size:11px;color:var(--xn);opacity:0;transition:opacity .2s;white-space:nowrap}.xv.failed:hover .bubble:after,.xv.failed:active .bubble:after{opacity:1}.xv.is-grouped-with-next{margin-bottom:2px}.xv.is-grouped-with-prev .avatar{visibility:hidden;height:0!important;margin:0!important;border:none!important}.xv .nickname{display:none!important}.xv .avatar{width:32px;height:32px;border-radius:50%;cursor:pointer;flex-shrink:0;object-fit:cover;background-color:#f3f3f3;transition:box-shadow .3s;-webkit-touch-callout:none;user-select:none}html[data-theme=dark] .xv .avatar{background-color:#444}.xv:after{content:"";position:absolute;width:8px;height:8px;background-color:var(--xm);border:2px solid var(--xH);border-radius:50%;z-index:5;top:23px;left:23px;pointer-events:none;box-shadow:0 1px 2px #00000026;opacity:0;transform:scale(0);transition:transform .4s cubic-bezier(.34,1.56,.64,1),opacity .3s ease}.xv:has(.avatar.online):after{opacity:1;transform:scale(1)}.xv.self:after{left:auto;right:-2px}.xv.is-grouped-with-prev:after{opacity:0!important;transform:scale(0)!important}.xv .xw{max-width:75%;display:flex;flex-direction:column;align-items:flex-start}.xE.focus-mode .xv:not(.message-highlight){filter:blur(4px);opacity:.6;transition:filter .3s ease,opacity .3s ease}.xv.message-highlight{position:relative;z-index:10;transform:scale(1.02);transition:transform .3s cubic-bezier(.34,1.56,.64,1)}.xv.message-highlight .bubble{box-shadow:0 0 20px rgba(var(--primary-rgb),.4)}.xv .bubble{display:flex;flex-direction:column;align-items:flex-start;padding:6px 10px;border-radius:0 12px 12px;word-wrap:break-word;overflow-wrap:anywhere;background-color:#fff;box-shadow:0 1px 2px #10232f26;color:var(--xG);font-size:14px;max-width:min(40dvh,100%);position:relative;transition:background .3s ease}html[data-theme=dark] .xv .bubble{background-color:#212121}.xv.self .bubble{border-radius:12px 0 12px 12px;background:color-mix(in srgb,var(--primary-color),#ffffff 80%)}html[data-theme=dark] .xv.self .bubble{background-color:color-mix(in srgb,var(--primary-color),#180518 60%)}.xv:not(.self).is-grouped-with-prev .bubble{border-top-left-radius:4px!important}.xv.self.is-grouped-with-prev .bubble{border-top-right-radius:4px!important}.bubble.sticker-mode{background:transparent!important;box-shadow:none!important;padding:0!important;border:none!important}.xz{display:block;width:100%;font-size:12px;margin-bottom:4px;line-height:1.2;user-select:none;color:var(--nick-color, var(--primary-color))}html[data-theme=dark] .xz{color:color-mix(in srgb,var(--nick-color, var(--primary-color)),#fff 60%)!important}.xv.self .xz{display:none}.xv .swipe-reply-indicator{position:absolute;left:100%;top:50%;transform:translateY(-50%) scale(.5);margin-left:10px;opacity:0;width:32px;height:32px;background-color:var(--xc);-webkit-mask-image:var(--xw);mask-image:var(--xw);-webkit-mask-size:24px;mask-size:24px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;transition:transform .2s cubic-bezier(.2,.8,.2,1),opacity .2s ease;pointer-events:none}.xv.is-grouped-with-prev .xz{display:none}.bubble.sticker-mode .xz{display:none!important}.xy{font-size:10px;opacity:.58;user-select:none;cursor:default;color:var(--xa);line-height:1.2;white-space:nowrap;pointer-events:none;max-width:100%}.xA{display:block;width:100%;line-height:1.6}.xA>:first-child{margin-top:0}.xA>:last-child{margin-bottom:0}html[data-theme=dark] .xy{color:color-mix(in srgb,var(--primary-color),#fff 60%)}.bubble.has-trailing-timestamp{display:flow-root}.bubble.has-trailing-timestamp .xA{display:inline;width:auto}.bubble.has-trailing-timestamp .xy.is-trailing{float:right;margin-left:8px;margin-top:8px;text-align:right}.bubble.has-stacked-timestamp .xy.is-stacked{align-self:flex-end;margin-top:6px;text-align:right}.bubble.has-stacked-timestamp .xSa+.xy.is-stacked{margin-top:4px}.bubble.sticker-mode .xy.is-overlay{position:absolute;right:6px;bottom:6px;background:#0006;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);color:#ffffffe6;padding:2px 6px;border-radius:999px;font-size:10px;line-height:1.2;opacity:0;transition:opacity .2s ease;text-shadow:0 1px 2px rgba(0,0,0,.3);z-index:10}@media(hover:hover)and (pointer:fine){.xv:hover .bubble.sticker-mode .xy.is-overlay,.xv:focus-within .bubble.sticker-mode .xy.is-overlay{opacity:1}}@media(hover:none),(pointer:coarse){.bubble.sticker-mode .xy.is-overlay{opacity:1}}.xv.failed .bubble.sticker-mode .xy.is-overlay{opacity:1}.xv .bubble:before{content:"";position:absolute;top:0;width:11px;height:20px;pointer-events:none;z-index:1;background-color:currentColor;-webkit-mask:var(--xu) center / contain no-repeat;mask:var(--xu) center / contain no-repeat}.xv:not(.self) .bubble:before{left:-9px;top:-3px;color:#fff}html[data-theme=dark] .xv:not(.self) .bubble:before{color:#212121}.xv.self .bubble:before{right:-9px;top:-3px;transform:scaleX(-1);color:color-mix(in srgb,var(--primary-color),#ffffff 80%)}html[data-theme=dark] .xv.self .bubble:before{color:color-mix(in srgb,var(--primary-color),#180518 60%)!important}.xv.is-grouped-with-prev .bubble:before{display:none}.bubble.sticker-mode:before{display:none}.bubble .xA.deleted{font-style:italic!important;color:var(--xa)!important}.bubble .xA.is-collapsed{display:block!important;max-height:var(--collapse-max-height, 300px);overflow:hidden;position:relative;-webkit-mask-image:linear-gradient(to bottom,black 70%,transparent 100%);mask-image:linear-gradient(to bottom,black 70%,transparent 100%)}.xSa{display:inline-block;align-self:center;max-width:100%;background:color-mix(in srgb,var(--primary-color),transparent 90%);border:0;border-radius:999px;color:var(--primary-color);font-size:12px;font-weight:600;line-height:1.2;cursor:pointer;padding:4px 10px;margin-top:8px;text-align:center;transition:background-color .2s ease}.xSa:hover{background:color-mix(in srgb,var(--primary-color),transparent 84%);text-decoration:none}.xSa:focus-visible{outline:2px solid color-mix(in srgb,var(--primary-color),#fff 15%);outline-offset:2px}.bubble a{color:#0084b4!important}.bubble a:hover{text-decoration:underline}.bubble img.smiley{display:inline-block;width:21px;height:21px;margin:0 1px;vertical-align:text-bottom;image-rendering:pixelated}.bubble img.custom-emoji{max-width:150px;max-height:150px;border-radius:8px}.bubble img.smiley-musume,.bubble img.smiley-blake{width:60px;height:60px;image-rendering:auto;vertical-align:bottom}.bubble.sticker-mode .custom-emoji{max-width:120px;max-height:120px;margin:2px 0;display:block}.bubble.sticker-mode .smiley-musume,.bubble.sticker-mode .smiley-blake{width:100px;height:100px;display:block;margin:2px 0}.bubble .xV{max-width:100%;margin:10px 0 6px}.bubble .xV:first-child{margin-top:2px}.bubble .xV:last-child{margin-bottom:0}.bubble .xV{display:flex;align-items:flex-start}.xv.self .bubble .xV{justify-content:flex-end}.bubble .xU{display:grid;gap:3px;max-width:320px;border-radius:8px;overflow:hidden}.bubble .xU[style*="--media-count: 2"],.bubble .xU[style*="--media-count: 3"],.bubble .xU[style*="--media-count: 4"]{grid-template-columns:repeat(2,1fr)}.bubble .xU[style*="--media-count: 5"],.bubble .xU[style*="--media-count: 6"],.bubble .xU[style*="--media-count: 7"],.bubble .xU[style*="--media-count: 8"],.bubble .xU[style*="--media-count: 9"]{grid-template-columns:repeat(3,1fr)}.bubble .xU .xW{width:100%!important;max-height:none;border-radius:0;aspect-ratio:1 / 1}.bubble .xU .xW .xaa{object-fit:cover}.bubble .xW{position:relative;display:grid;overflow:hidden;border-radius:5px;cursor:pointer;max-height:250px;background:color-mix(in srgb,var(--xj),transparent 8%)}.bubble .xW .xaa{width:100%;height:100%;object-fit:contain;opacity:0;grid-area:1/1;transition:opacity .3s ease-out;z-index:2}.bubble .xW .xaa.is-loaded{opacity:1}.bubble .xW .xaa.load-failed{width:100%;height:100%;object-fit:cover;background-color:var(--xj);border-radius:14px}.bubble .xW.xY{cursor:default}.bubble .xW.xY .xba{position:absolute;right:10px;bottom:10px;z-index:3;background:#00000080;color:#fff;padding:6px 12px;border-radius:16px;font-size:12px;white-space:nowrap;pointer-events:none;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);transition:opacity .2s ease}.bubble .xW.xY:hover .xba{background:#000000b3}.bubble .xW.xZ .xaa{filter:blur(24px) brightness(.45);transform:scale(1.08)}.bubble .xW.xZ{cursor:default}.bubble .xW.xZ .xba{background:#000000ad}.bubble .chat-file-link{display:inline-flex;align-items:center;gap:6px;margin:4px 0;padding:2px 0;font-size:13px;font-weight:600;line-height:1.5;max-width:100%;color:var(--primary-color)!important;text-decoration:none!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bubble .chat-file-link:before{content:"\\9644\\4ef6";flex-shrink:0;padding:1px 6px;border-radius:999px;font-size:11px;font-weight:700;color:var(--primary-color);background:color-mix(in srgb,var(--primary-color),transparent 88%)}.bubble .chat-file-link:hover{text-decoration:underline!important}.chat-quote{padding:6px 8px;border-left:3px solid var(--primary-color);background:linear-gradient(#ffffffe6,#ffffffe6),var(--primary-color);border-radius:5px;margin-bottom:8px;display:flex;align-items:center;gap:8px;cursor:pointer;max-width:100%;width:100%;box-sizing:border-box;transition:opacity .2s,transform .15s ease,background .2s}html[data-theme=dark] .chat-quote{background:linear-gradient(#000000bf,#000000bf),var(--primary-color)}.chat-quote:hover{opacity:.9;transform:scale(1.01)}#dollars-toast{position:absolute;bottom:80px;left:50%;transform:translate(-50%) translateY(12px);background:var(--xi);color:var(--xG);font-size:13px;font-weight:700;line-height:1.4;padding:8px 18px;border-radius:999px;border:1px solid var(--xd);white-space:nowrap;pointer-events:none;z-index:200;opacity:0;transition:opacity .22s ease,transform .22s cubic-bezier(.34,1.56,.64,1);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg)}#dollars-toast.dollars-toast-visible{opacity:1;transform:translate(-50%) translateY(0)}.quote-avatar{width:14px;height:14px;border-radius:50%;object-fit:cover;flex-shrink:0;margin-right:4px}.quote-thumbnail{width:36px;height:36px;border-radius:4px;object-fit:cover;margin-bottom:2px;display:block}.quote-thumbnail.xZ{filter:blur(6px) brightness(.7)}.quote-nickname{font-weight:700;color:var(--primary-color);font-size:12px}.quote-text-wrapper{min-width:0;flex:1}.quote-content{font-size:12px;color:var(--xG);opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word}.xqa{position:absolute;bottom:12px;left:12px;right:12px;width:auto;z-index:100;transition:transform .2s ease}.xqa:hover{transform:translateY(-2px)}.xra{position:relative;background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);border:none;box-shadow:var(--xg),inset 0 0 0 1px var(--xd, rgba(255, 255, 255, .35));border-radius:24px;padding:6px 8px;transition:box-shadow .2s ease}.xra.drag-over{box-shadow:var(--xg),inset 0 0 0 2px color-mix(in srgb,var(--primary-color),transparent 25%)}.xra.drag-over:after{content:"\\677e\\5f00\\4ee5\\4e0a\\4f20";position:absolute;inset:6px;z-index:5;display:flex;align-items:center;justify-content:center;border:1px dashed color-mix(in srgb,var(--primary-color),transparent 20%);border-radius:18px;background:color-mix(in srgb,var(--xi),var(--primary-color) 12%);color:var(--primary-color);font-size:14px;font-weight:600;pointer-events:none;backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh)}.xca{display:flex;align-items:center;gap:8px;padding:0 8px 4px;margin:0 4px 4px;border-bottom:1px solid var(--xf);height:0;opacity:0;overflow:hidden;transition:height .2s ease-out,opacity .2s ease-out}.xca.visible{height:42px;opacity:1}.xca .xda{width:3px;height:70%;background-color:var(--primary-color);border-radius:2px}.xca .xea{width:24px;height:24px;border-radius:50%}.xca .xfa{flex:1;min-width:0;font-size:12px;line-height:1.4}.xca .xga{font-weight:700;color:var(--primary-color)}.xca .xQ .num{color:var(--xa)}@keyframes pop{0%{transform:scale(1)}50%{transform:scale(1.4)}to{transform:scale(1)}}.xQ.live_selected .emoji{animation:pop .3s cubic-bezier(.175,.885,.32,1.275)}.xca .xha{color:var(--xa);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.xca .xia{background:none;border:none;cursor:pointer;color:var(--xa);font-size:20px;padding:0}.xX{display:flex;align-items:center;gap:8px;padding:0 8px;margin:0 4px;border-bottom:1px solid var(--xf);height:0;opacity:0;overflow-x:auto;overflow-y:hidden;transition:height .2s ease-out,opacity .2s ease-out,padding .2s ease-out,margin .2s ease-out;scrollbar-width:none}.xX.visible{height:80px;opacity:1;padding-bottom:8px;margin-bottom:4px;margin-top:4px}.xX::-webkit-scrollbar{display:none}.image-preview-item{position:relative;flex-shrink:0;width:64px;height:64px;border-radius:8px;overflow:hidden;border:1px solid var(--xE);background:var(--xH);box-shadow:0 2px 4px #0000001a}.preview-image{width:100%;height:100%;object-fit:cover;transition:transform .2s}.image-preview-item:hover .preview-image{transform:scale(1.05)}.preview-remove-btn{position:absolute;top:2px;right:2px;width:18px;height:18px;background:#00000080;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;border:none;backdrop-filter:blur(2px);transition:background .2s,transform .1s;padding:0;line-height:1}.preview-remove-btn:hover{background:#f44336e6;transform:scale(1.1)}.video-preview-item{position:relative}.preview-video{width:100%;height:100%;object-fit:cover;transition:transform .2s}.video-preview-item:hover .preview-video{transform:scale(1.05)}.video-play-overlay{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:32px;height:32px;background:#0009;border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none;backdrop-filter:blur(2px)}.video-play-overlay:before{content:"";width:0;height:0;margin-left:2px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:11px solid #fff}.xTa{display:flex;align-items:center;gap:8px;padding:0 8px;margin:0 4px;border-bottom:1px solid var(--xf);height:0;opacity:0;overflow:hidden;transition:height .2s ease-out,opacity .2s ease-out,padding .2s ease-out,margin .2s ease-out}.xTa.visible{height:50px;opacity:1;padding-bottom:8px;margin-bottom:4px;margin-top:4px}.voice-recording-dot{width:10px;height:10px;flex:0 0 auto;border-radius:50%;background:var(--xn);box-shadow:0 0 0 4px color-mix(in srgb,var(--xn),transparent 80%);animation:dollars-voice-pulse 1s ease-in-out infinite}.voice-preview-title{font-size:13px;color:var(--xG)}.voice-preview-duration{margin-left:auto;font-size:12px;color:var(--xa);font-variant-numeric:tabular-nums}.voice-preview-audio{flex:1;min-width:0;height:32px}.voice-preview-action{border:1px solid var(--xE);border-radius:999px;background:var(--xi);color:var(--xG);cursor:pointer;font-size:12px;padding:4px 10px}.voice-preview-action.primary{border-color:color-mix(in srgb,var(--primary-color),transparent 50%);color:var(--primary-color)}@keyframes dollars-voice-pulse{0%,to{transform:scale(1);opacity:1}50%{transform:scale(.75);opacity:.65}}.input-wrapper{display:flex;align-items:center;gap:6px;position:relative}.xo{flex-grow:1;display:flex;align-items:stretch;border-radius:18px;min-width:0;background-color:#ffffff40;border:none;box-shadow:inset 0 1px 2px #00000008;transition:all .2s ease;backdrop-filter:blur(5px);padding-left:0;position:relative}html[data-theme=dark] .xo{background-color:#0000004d}.xo:focus-within{background-color:#ffffff80;border-color:var(--primary-color);box-shadow:inset 0 1px 3px #0000001a,0 0 8px color-mix(in srgb,var(--primary-color),transparent 40%)!important}html[data-theme=dark] .xo:focus-within{background-color:#00000080}.chat-textarea{flex:1;border:none;background:transparent;border-radius:18px;padding:8px 14px;resize:none;font-size:14px;line-height:1.4;height:38px;max-height:150px;color:var(--xG);outline:none;font-family:inherit;box-sizing:border-box;width:100%;display:block;white-space:pre-wrap;word-break:break-word;overflow-wrap:anywhere;overflow-y:hidden}html[data-theme=dark] .chat-textarea{background:none!important}.chat-textarea:focus{outline:none;box-shadow:none!important}.xpa{min-height:38px;caret-color:var(--xG);line-height:1.5}.xpa.is-overflowing{overflow-y:auto}.xpa:empty:before{content:attr(data-placeholder);color:var(--xb);pointer-events:none}.chat-textarea-proxy{position:absolute;inset:0;opacity:0;pointer-events:none;resize:none}.xsa{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;max-width:100%;user-select:all;margin-block:2px}.xsa img,.xsa .bmoji-image{display:block;pointer-events:none}.xta .xxa:not(.xva),.xua .bmoji-image{image-rendering:pixelated}.xta .xva,.chat-input-token-image .xwa{image-rendering:auto}.xxa{width:21px;height:21px}.xva{width:60px;height:60px}.xwa{width:auto;height:60px;max-width:min(180px,100%);max-height:60px;border-radius:10px}.input-actions{display:flex;gap:4px}.xRa{flex-shrink:0;width:38px;height:38px;border:none;border-radius:50%;background-color:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--xa);transition:all .2s cubic-bezier(.34,1.56,.64,1);background-repeat:no-repeat;background-position:center}.xRa:hover{background-color:var(--xe);transform:scale(1.1)}.xRa:active{transform:scale(.95)}.xRa:disabled{cursor:not-allowed;opacity:.45;transform:none}.xya{width:38px;height:38px;border:none;background:var(--primary-color);background-image:url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>');background-size:20px;background-repeat:no-repeat;background-position:center;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;transition:background-color .2s,filter .2s,box-shadow .2s,transform .15s ease;box-shadow:0 0 10px color-mix(in srgb,var(--primary-color),transparent 20%)}.xya:hover{filter:brightness(1.1);transform:scale(1.05)}.xya:disabled{background-color:#ccc;cursor:not-allowed;filter:none;box-shadow:none}#dollars-smiles-floating{--item-size: 32px;--icon-size: 21px;--item-hover-bg: rgba(255, 255, 255, .3);--item-hover-scale: 1.1;--transition-speed: .2s;--panel-height: 320px;--border-color: var(--xE);position:absolute;bottom:calc(100% + 5px);z-index:var(--xA);height:var(--panel-height);width:100%;left:0;display:flex;flex-direction:column;border:1px solid var(--xd);border-radius:18px;background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);box-sizing:border-box;overflow:hidden;opacity:0;transform:translateY(10px) scale(.95);transition:opacity .2s,transform .2s;pointer-events:none;transform-origin:bottom left}html[data-theme=dark] #dollars-smiles-floating{--item-hover-bg: rgba(255, 255, 255, .1)}@keyframes dollars-panel-slide-up{0%{opacity:0;transform:translateY(15px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}#dollars-smiles-floating.open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;animation:dollars-panel-slide-up .25s cubic-bezier(.34,1.56,.64,1)}#dollars-smiles-tabs{display:flex;flex-shrink:0;padding:4px;border-bottom:1px solid rgba(255,255,255,.2);background-color:transparent;overflow-x:auto;overflow-y:hidden;scrollbar-width:none}#dollars-smiles-tabs::-webkit-scrollbar{display:none}.xAa{padding:4px 12px;border:1px solid transparent;border-radius:15px;background:none;cursor:pointer;color:var(--primary-color);font-size:13px;flex-shrink:0;transition:background-color var(--transition-speed),color var(--transition-speed);image-rendering:pixelated}.xAa:hover{background-color:var(--item-hover-bg)}.xAa.active{background-color:transparent;color:var(--primary-color);border-color:var(--xE);font-weight:700}#dollars-smiles-content{padding:8px;overflow-y:auto;display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-start;overscroll-behavior:contain}#dollars-smiles-content.grouped-content{display:block;padding:10px}.smiley-group-section+.smiley-group-section{margin-top:12px;padding-top:10px;border-top:1px solid rgba(127,127,127,.18)}.smiley-group-title{margin:0 0 8px 2px;color:var(--xa);font-size:12px;font-weight:700;line-height:1.3}.smiley-group-grid{display:flex;flex-wrap:wrap;gap:6px}.xza{list-style:none;margin:0;padding:0;width:var(--item-size);height:var(--item-size);display:flex;align-items:center;justify-content:center;position:relative}.xza a{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:6px;background-repeat:no-repeat;background-position:center;background-size:var(--icon-size) var(--icon-size);font-size:0;transition:background-color var(--transition-speed),transform calc(var(--transition-speed) / 2);image-rendering:pixelated}#dollars-smiles-floating .bmo,#dollars-reaction-picker-floating .bmo{vertical-align:middle}.xza a:hover{background-color:var(--item-hover-bg);transform:scale(var(--item-hover-scale))}.xza.xQa{width:64px;height:64px;border-radius:8px}.xza.xQa a{background-size:contain;background-color:#00000008}html[data-theme=dark] .xza.xQa a{background-color:#ffffff0d}.xza.xQa .remove-favorite-btn{position:absolute;top:-4px;right:-4px;width:16px;height:16px;background:#00000080;color:#fff;border-radius:50%;border:none;font-size:12px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s}.xza.xQa:hover .remove-favorite-btn{opacity:1}#dollars-smiles-floating.large-smiley-mode{--item-size: 56px;--icon-size: 48px}#dollars-smiles-floating.large-smiley-mode .xza a{image-rendering:auto}#dollars-context-menu{position:fixed;z-index:var(--xz);background:transparent;border:none;box-shadow:none;min-width:unset;opacity:0;transform:scale(.95);pointer-events:none;transition:transform .15s cubic-bezier(.2,.8,.2,1),opacity .15s ease-out}html[data-theme=dark] #dollars-context-menu{background:transparent;box-shadow:none}#dollars-context-menu.visible{opacity:1;transform:scale(1);pointer-events:auto}#dollars-context-menu.has-items-wrapper{padding:0;display:flex;flex-direction:column;gap:8px;align-items:flex-start}.xM{display:flex;align-items:center;padding:6px;gap:4px;background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);border:1px solid var(--xd);border-radius:40px}.xM .xQ{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;transition:transform .1s ease,background-color .15s ease;-webkit-touch-callout:none;user-select:none}.xM .xQ:hover{background-color:var(--xj);transform:scale(1.15)}.xM .xQ:active{transform:scale(.95)}.xM .xQ img{width:20px;height:20px;display:block;image-rendering:pixelated}.xM .xQ .bmoji-image,.xQ .bmoji-image{width:18px!important;height:18px!important}.xN{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border:none;background:none;border-radius:50%;cursor:pointer;color:var(--xa);transition:background-color .15s ease,transform .1s ease;flex-shrink:0}.xN:hover{background-color:var(--xj);transform:scale(1.1)}.xN:active{transform:scale(.95)}.xN svg{width:20px;height:20px;transition:transform .3s ease}.xN.expanded svg{transform:rotate(180deg)}.xL{padding:5px 0;min-width:160px;max-width:220px;background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);border:1px solid var(--xd);border-radius:18px;overflow:hidden}.xL button{display:flex;align-items:center;width:100%;padding:8px 12px;border:none;background:none;text-align:left;cursor:pointer;color:var(--xG);font-size:14px;line-height:20px;transition:background-color .1s ease;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.xL button span:not(.xO){flex:1;overflow:hidden;text-overflow:ellipsis}.xO{width:20px;height:20px;margin-right:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--xa)}html[data-theme=dark] .xO{color:#aaa}.xO svg{width:20px;height:20px}.xL button.danger .xO{color:#f5222d}.xL button:hover{background-color:var(--xj)}.xL button:disabled{cursor:not-allowed;opacity:.45}.xL button:disabled:hover{background:none}.xL button.danger{color:#f5222d}.xL button.image-action{display:none}#dollars-context-menu.image-mode .xL button.image-action{display:flex}#dollars-reaction-picker-floating{--item-size: 32px;--icon-size: 21px;--item-hover-bg: rgba(255, 255, 255, .3);--panel-height: 260px;position:fixed;z-index:calc(var(--xz) + 1);height:var(--panel-height);display:flex;flex-direction:column;border:1px solid var(--xd);border-radius:18px;background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);overflow:hidden;opacity:0;transform:translateY(-5px) scale(.95);transition:opacity .15s ease,transform .15s cubic-bezier(.2,.8,.2,1);pointer-events:none}html[data-theme=dark] #dollars-reaction-picker-floating{--item-hover-bg: rgba(255, 255, 255, .1)}@keyframes dollars-picker-slide-down{0%{opacity:0;transform:translateY(-15px) scale(.95)}60%{transform:translateY(3px) scale(1.01)}to{opacity:1;transform:translateY(0) scale(1)}}#dollars-reaction-picker-floating.open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;animation:dollars-picker-slide-down .3s cubic-bezier(.34,1.56,.64,1)}.reaction-picker-tabs{display:flex;flex-shrink:0;padding:4px;border-bottom:1px solid rgba(255,255,255,.2);background-color:transparent;gap:2px}.xR{padding:4px 10px;border:1px solid transparent;border-radius:12px;background:none;cursor:pointer;color:var(--xa);font-size:13px;transition:background-color .15s,color .15s;image-rendering:pixelated}html[data-theme=dark] .xR{color:#aaa}.xR:hover{background-color:var(--item-hover-bg)}html[data-theme=dark] .xR:hover{background-color:#444}.xR.active{background-color:var(--xH);color:var(--xG);border-color:var(--xE);font-weight:700}html[data-theme=dark] .xR.active{background-color:#3a3a3a;color:#eee;border-color:#555}.xS{padding:8px;overflow-y:auto;display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-start;overscroll-behavior:contain}.xS .xza{list-style:none;margin:0;padding:0;width:var(--item-size);height:var(--item-size);display:flex;align-items:center;justify-content:center;position:relative}.xS .xza a{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:6px;background-repeat:no-repeat;background-position:center;background-size:var(--icon-size) var(--icon-size);font-size:0;transition:background-color .15s,transform .1s;image-rendering:pixelated}.xS .xza a:hover{background-color:var(--item-hover-bg);transform:scale(1.1)}.user-mention{color:var(--primary-color);font-weight:500}.user-mention:hover{text-decoration:underline}.chat-tag{color:var(--primary-color);cursor:pointer;margin-right:2px;display:inline-block}.chat-tag:hover{opacity:.8}#dollars-floating-date{position:absolute;top:55px;left:50%;transform:translate(-50%);z-index:10;pointer-events:none;opacity:0;transition:opacity .2s ease;background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);border:1px solid var(--xd);color:var(--primary-color);padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;text-shadow:none;white-space:nowrap}#dollars-floating-date.visible{opacity:1}#dollars-typing-indicator{position:absolute;top:-30px;left:10px;height:auto;background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);border:1px solid var(--xd);padding:4px 10px;border-radius:12px;font-size:12px;color:var(--xa);font-style:italic;opacity:0;transition:opacity .2s,transform .2s;line-height:1.5;pointer-events:none;transform:translateY(5px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#dollars-typing-indicator.visible{opacity:1;transform:translateY(0)}html[data-theme=dark] #dollars-typing-indicator{color:#fff}span.text_mask{background-color:#555}@media(max-width:768px){#dollars-chat-window{width:auto;max-width:calc(100vw - 20px);height:calc(100dvh - 60px);max-height:calc(100dvh - 60px);inset:auto 10px 30px}.xv{content-visibility:visible;contain-intrinsic-size:auto}.bubble .xV{margin:8px 0 5px}}@media(prefers-reduced-motion:reduce){#dollars-chat-window,#dollars-chat-window .xB .xC,#dollars-chat-window .xv,#dollars-chat-window .xya{transition:none!important}}#xi{width:38px;height:38px;border:none;background-color:var(--dollars-icon-color);cursor:pointer;-webkit-mask-image:var(--xx);mask-image:var(--xx);-webkit-mask-size:23px;mask-size:23px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;border-radius:50%}#xj{width:38px;height:38px;border:none;background-color:var(--dollars-icon-color);cursor:pointer;-webkit-mask-image:var(--xs);mask-image:var(--xs);-webkit-mask-size:23px;mask-size:23px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;border-radius:50%}#xj.active{background-color:var(--dollars-icon-color)}.xp{position:relative;display:flex;align-items:center;width:38px;height:38px}.xq{position:fixed;z-index:var(--xz);transform-origin:bottom right;animation:dollars-panel-slide-up-right .25s cubic-bezier(.34,1.56,.64,1)}.xq.xL{width:176px;min-width:176px}.xq .xO{pointer-events:none}.xq.closing{animation:dollars-slide-down-out .2s ease-out forwards;pointer-events:none}@keyframes dollars-panel-slide-up-right{0%{opacity:0;transform:translateY(15px) translate(8px) scale(.95)}to{opacity:1;transform:translateY(0) translate(0) scale(1)}}.xB .header-buttons,.header-buttons{margin-left:auto;display:flex;align-items:center;gap:5px}.header-btn{cursor:pointer;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:background-color .2s ease,transform .15s ease;border:none;background:transparent}#xk,.xk{margin-right:0;background-color:var(--dollars-icon-color);-webkit-mask-image:var(--xy);mask-image:var(--xy);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center}#dollars-resize-handle{position:absolute;top:0;left:0;width:20px;height:20px;cursor:nw-resize;z-index:10003;touch-action:none;background-color:var(--xc);-webkit-mask-image:var(--xt);mask-image:var(--xt);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:5px 5px;mask-position:5px 5px;-webkit-mask-size:10px;mask-size:10px;opacity:.6;transition:opacity .2s ease}#dollars-resize-handle:hover{opacity:1}#dollars-resize-handle:after{display:none!important}#dollars-settings-btn-header{background-color:var(--dollars-icon-color);-webkit-mask-image:var(--xp);mask-image:var(--xp);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center}#dollars-sidebar-toggle-btn{background-color:var(--dollars-icon-color);-webkit-mask-image:var(--xy);mask-image:var(--xy);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:18px;mask-size:18px}#xn{position:fixed;z-index:var(--xB);background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);border:1px solid var(--xd);border-radius:50px;display:flex;flex-direction:column;padding:4px;opacity:0;transform:translateY(10px) scale(.95);pointer-events:none;transition:opacity .2s cubic-bezier(.2,.8,.2,1),transform .2s cubic-bezier(.2,.8,.2,1)}#xn.visible{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}.xka{display:flex;align-items:center;gap:2px}.xja{width:32px;height:32px;display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:50px;cursor:pointer;color:var(--xG);transition:background-color .15s,transform .1s,color .15s}.xja:hover{background-color:var(--xj)}.xja.active{color:var(--primary-color)}.xja svg{width:18px;height:18px}.xla{width:1px;height:18px;background-color:var(--xE);margin:0 4px}.xma{display:none;align-items:center;gap:4px;padding:0 2px}#xn.link-mode .xoa{display:none}#xn.link-mode .xma{display:flex}.xna{background:transparent;border:none;color:var(--xG);font-size:13px;width:150px;outline:none;padding:4px}.xna::placeholder{color:var(--xb)}.nav-btn{width:40px;height:40px;border-radius:50%;border:1px solid var(--xd);background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);color:var(--primary-color);cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.8);transition:all .2s cubic-bezier(.34,1.56,.64,1);pointer-events:none}.nav-btn.visible{opacity:1;transform:scale(1);pointer-events:auto}.nav-btn:hover{background:var(--xi);transform:scale(1.1);box-shadow:var(--xg),0 0 0 2px color-mix(in srgb,var(--primary-color),transparent 70%)}.nav-btn:active{transform:scale(.95)}.nav-btn:before{content:"";display:block;width:24px;height:24px;background:currentColor}#xl{position:absolute;bottom:80px;right:20px;z-index:95}#xm{position:absolute;right:20px;z-index:95}#xl:before{width:15px;height:15px;border-right:3px solid currentColor;border-bottom:3px solid currentColor;background:transparent;transform:translateY(-3px) rotate(45deg)}#xm:before{content:"@";width:auto;height:auto;background:transparent;font-size:23px;font-weight:700;line-height:1}.nav-btn-badge{position:absolute;top:-5px;right:-5px;min-width:18px;height:18px;border-radius:9px;background-color:var(--primary-color);color:#fff;font-size:11px;font-weight:700;line-height:18px;text-align:center;padding:0 5px;box-shadow:0 2px 5px #0003;z-index:31}#dollars-mention-list{position:absolute;bottom:calc(100% + 5px);left:0;width:100%;max-height:220px;overflow-y:auto;border-radius:18px;display:none;flex-direction:column;z-index:var(--xA);background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);box-shadow:var(--xg);border:1px solid var(--xd);gap:4px;transition:bottom .2s ease}#dollars-mention-list.visible{display:flex;animation:dollars-slide-up .2s cubic-bezier(.2,.8,.2,1)}@keyframes dollars-slide-up{0%{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes dollars-item-slide-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.xEa{display:flex;align-items:center;padding:4px 8px;border-radius:15px;cursor:pointer;transition:background-color .2s;gap:8px;animation:dollars-item-slide-in .25s cubic-bezier(.2,.8,.2,1) backwards}.xEa:nth-child(1){animation-delay:0ms}.xEa:nth-child(2){animation-delay:30ms}.xEa:nth-child(3){animation-delay:60ms}.xEa:nth-child(4){animation-delay:90ms}.xEa:nth-child(5){animation-delay:.12s}.xEa:nth-child(6){animation-delay:.15s}.xEa:hover,.xEa.active{background-color:#ffffff4d}html[data-theme=dark] .xEa:hover,html[data-theme=dark] .xEa.active{background-color:#ffffff1a}.xEa img{width:24px;height:24px;border-radius:50%;object-fit:cover;background-color:var(--xH);box-shadow:0 1px 3px #0000001a}.mention-item-info{display:flex;align-items:baseline;gap:6px;overflow:hidden;min-width:0;line-height:1.2}.mention-item-nick{font-size:12px;font-weight:700;color:var(--xG);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mention-item-user{font-size:10px;color:var(--xa);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.8}.xr{background-color:var(--xH);border:1px solid var(--xE);border-radius:8px;padding:10px;display:flex;gap:12px;text-decoration:none!important;transition:all .2s;box-sizing:border-box;max-width:100%!important;height:100px;width:300px;overflow:hidden;position:relative;min-width:0}.xr .cover{width:80px;height:80px;flex-shrink:0;border-radius:6px;background-color:var(--xH);overflow:hidden;display:flex;align-items:center;justify-content:center}.xr .cover img{width:100%;height:100%;object-fit:cover;border-radius:0!important}.xr[data-entity-type=character] .cover img,.xr[data-entity-type=person] .cover img{object-fit:contain!important}.xr[data-entity-type=generic] .cover{background-color:var(--xH);border-radius:5px}.xr[data-entity-type=generic] .cover img{object-fit:cover}.xr .inner{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;overflow:hidden}.xr .title{font-size:14px;font-weight:700;color:var(--xG)!important;margin:0 0 4px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.xr .info{font-size:12px;color:var(--xa);margin:0;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.xr[data-entity-type=generic] .info{margin-top:4px;margin-bottom:0}.xr .rateInfo{margin-top:6px;font-size:11px;color:var(--xb);display:flex;align-items:center;gap:5px}@media(prefers-reduced-motion:reduce){.xLa,.xLa:active{transition:none;transform:none}.xMa,.xNa img,#dollars-user-profile-panel.narrow,#dollars-user-profile-panel.narrow.visible,#dollars-user-profile-panel.narrow.closing,#dollars-user-profile-panel.wide,#dollars-user-profile-panel.wide.visible,#dollars-user-profile-panel.wide.closing{transition:none}}#dollars-user-profile-panel{position:absolute;z-index:100;display:flex;flex-direction:column;background:var(--xH);overflow:hidden}#dollars-user-profile-panel.narrow{inset:0;transform:translate(100%);transition:transform .25s cubic-bezier(.2,.8,.2,1)}#dollars-user-profile-panel.narrow.visible{transform:translate(0)}#dollars-user-profile-panel.narrow.closing{transform:translate(100%)}#dollars-user-profile-panel.wide{inset:56px 16px 16px;z-index:101;border-radius:16px;border:1px solid var(--xE);box-shadow:0 8px 40px -8px var(--xF);opacity:0;transform:translateY(4px);transition:opacity .25s cubic-bezier(.2,.8,.2,1),transform .25s cubic-bezier(.2,.8,.2,1);pointer-events:none}#dollars-user-profile-panel.wide.visible{opacity:1;transform:translateY(0);pointer-events:auto}#dollars-user-profile-panel.wide.closing{opacity:0;transform:translateY(4px);pointer-events:none}.uprofile-card-header{display:flex;align-items:center;gap:8px;padding:8px 12px 8px 8px;flex-shrink:0;border-bottom:1px solid var(--xE)}.uprofile-card-title{font-size:14px;font-weight:600;color:var(--xG)}.xPa{height:120px;flex-shrink:0;background:linear-gradient(160deg,color-mix(in srgb,var(--primary-color),var(--xH) 30%),color-mix(in srgb,var(--primary-color),var(--xH) 60%),color-mix(in srgb,var(--primary-color),var(--xH) 30%));position:relative;display:flex;align-items:flex-end;justify-content:center}.xPa:before{content:"";position:absolute;inset:0;background-image:var(--xk);background-size:300px;opacity:.6;mix-blend-mode:overlay}html[data-theme=dark] .xPa:before{opacity:.2}.uprofile-avatar{width:88px;height:88px;border-radius:50%;border:3px solid var(--xH);background-color:var(--xH);object-fit:cover;box-shadow:0 4px 16px var(--xF);position:relative;z-index:1;transform:translateY(44px);flex-shrink:0}.uprofile-content{flex:1;overflow-y:auto;padding:52px 20px 24px;display:flex;flex-direction:column;gap:16px}.uprofile-body{display:flex;flex-direction:column;gap:16px}.uprofile-name-section{display:flex;flex-direction:column;align-items:center;gap:2px}.uprofile-nickname{font-size:20px;font-weight:800;color:var(--xG);line-height:1.3;word-break:break-word;text-align:center;display:flex;align-items:center;justify-content:center;gap:6px}.uprofile-status-dot{display:inline-block;width:9px;height:9px;border-radius:50%;background-color:var(--xm);flex-shrink:0;box-shadow:0 0 0 2px var(--xH);position:relative}.uprofile-status-dot.active:after{content:none}.uprofile-username{font-size:13px;color:var(--xa);font-family:monospace;text-align:center}.uprofile-last-active{font-size:12px;color:var(--xb);margin-top:2px}.uprofile-stats-row{display:flex;align-items:center;justify-content:center;gap:0;background:color-mix(in srgb,var(--primary-color),transparent 92%);border:1px solid color-mix(in srgb,var(--primary-color),transparent 80%);border-radius:12px;padding:10px 8px}.uprofile-stat{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px}.uprofile-stat-num{font-size:17px;font-weight:700;color:var(--primary-color);line-height:1;letter-spacing:-.3px;display:inline-block}.uprofile-stat-label{font-size:11px;color:var(--xb);line-height:1}.uprofile-stat-divider{width:1px;height:28px;background:color-mix(in srgb,var(--primary-color),transparent 70%);flex-shrink:0}.uprofile-actions{display:flex;gap:8px}.xLa{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:10px 12px;border-radius:10px;background:var(--xi);border:1px solid var(--xE);color:var(--xG);font-size:13px;cursor:pointer;transition:background-color .14s ease-out,color .14s ease-out,border-color .14s ease-out;white-space:nowrap}.xLa:hover{background:var(--primary-color);color:var(--xH);border-color:var(--primary-color)}.xLa:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}.xLa span{display:flex;align-items:center;flex-shrink:0}.xLa svg{width:16px;height:16px;stroke:currentColor}.uprofile-info-section{display:flex;flex-direction:column;border-top:1px solid var(--xE);padding-top:12px}.xMa{display:flex;align-items:flex-start;gap:12px;padding:10px 8px;border-radius:8px;transition:background-color .15s}.xMa:hover{background:var(--xj)}.xMa+.xMa{border-top:1px solid color-mix(in srgb,var(--xE),transparent 50%)}.uprofile-info-content{flex:1;min-width:0}.uprofile-info-label{font-size:11px;color:var(--primary-color);opacity:.8;font-weight:500;margin-bottom:2px}.uprofile-info-value{font-size:13px;color:var(--xG);line-height:1.5;word-break:break-word}.uprofile-sign-value{padding:4px 8px;border-left:2px solid color-mix(in srgb,var(--primary-color),transparent 40%);background:color-mix(in srgb,var(--primary-color),transparent 92%);border-radius:0 6px 6px 0;color:var(--xa)}.uprofile-media-section{border-top:1px solid var(--xE);padding-top:12px}.uprofile-media-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding:0 4px}.uprofile-media-header span{font-size:13px;font-weight:600;color:var(--xG)}.uprofile-media-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;border-radius:10px;overflow:hidden}.xNa{position:relative;aspect-ratio:1;cursor:pointer;overflow:hidden;background:var(--xE)}.xNa img{width:100%;height:100%;object-fit:cover;transition:transform .16s ease-out}.xNa:hover img{transform:scale(1.02)}.uprofile-media-video-btn{display:block;width:100%;height:100%;padding:0;border:none;background:none;cursor:pointer;position:relative}.xOa{position:absolute;bottom:4px;left:4px;width:24px;height:24px;border-radius:50%;background:#00000080;display:flex;align-items:center;justify-content:center}.xOa:before{content:"";width:0;height:0;margin-left:2px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:9px solid #fff}.uprofile-empty-hint{text-align:center;color:var(--xb);font-size:13px;padding:16px 0}#dollars-search-ui{display:flex;flex-direction:column;flex-grow:1;min-height:0;gap:8px;padding:52px 12px 12px;background:var(--xi);backdrop-filter:var(--xh);-webkit-backdrop-filter:var(--xh);position:absolute;inset:0;z-index:100}#dollars-search-ui~.xqa,#dollars-user-profile-panel.visible~.xqa{display:none}#dollars-search-ui .search-panel-row{display:flex;align-items:center;width:100%;opacity:.8}#dollars-search-ui .search-calendar-btn{cursor:pointer;display:flex;align-items:center;justify-content:center;margin-left:5px;width:35px;height:35px;border-radius:50%;background-color:var(--xH);box-shadow:0 2px 8px #0000001a;border:1px solid var(--xE);color:var(--xa);flex-shrink:0;transition:all .2s}#dollars-search-ui .search-bar{height:35px;display:flex;align-items:center;min-width:0;position:relative;border-radius:100px;border:1px solid var(--xE);background-color:var(--xH);transition:all .3s ease-in-out;padding:0 6px;box-shadow:0 2px 8px #0000001a}#dollars-search-ui .search-bar:focus-within{border-color:var(--primary-color);box-shadow:0 0 10px #f0919999}#dollars-search-ui input{flex-grow:1;min-width:0;padding:6px 0;border:none;border-radius:0;background-color:transparent;outline:0;color:var(--xG)}#dollars-search-ui .search-close-btn{flex-shrink:0;cursor:pointer;font-size:20px;color:var(--xa);align-items:center;opacity:.5;z-index:1;display:flex}#dollars-search-ui .search-icon{flex-shrink:0}#dollars-search-ui input[type=search]::-webkit-search-cancel-button,#dollars-search-ui input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none;display:none}#dollars-search-results{flex-grow:1;overflow-y:auto;overscroll-behavior:contain}.search-status-msg{text-align:center;padding:20px;color:var(--xb)}.xJa{display:flex;align-items:flex-start;gap:8px;padding:8px;border-radius:8px;cursor:pointer;transition:background-color .2s}.xJa:hover{background-color:var(--xj)}.xJa img{width:24px;height:24px;border-radius:50%}.xJa .dollars-search-content{display:flex;flex-direction:column;overflow:hidden}.xJa .dollars-search-header{display:flex;align-items:center;gap:6px;font-size:12px}.xJa .dollars-search-nickname{font-weight:700;color:var(--xG)}.xJa .dollars-search-timestamp{color:var(--xa)}.xJa .dollars-search-message{font-size:13px;color:var(--xa);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#dollars-search-ui .xKa{cursor:pointer;display:flex;align-items:center;justify-content:center;margin-left:5px;width:35px;height:35px;border-radius:50%;background-color:var(--xH);box-shadow:0 2px 8px #0000001a;border:1px solid var(--xE);color:var(--xa);flex-shrink:0;transition:all .2s}#dollars-search-ui .xKa:hover{background-color:var(--xj)}#dollars-search-ui .xKa.active{background-color:var(--primary-color);color:#fff;border-color:var(--primary-color)}#dollars-search-ui .search-calendar-btn svg,#dollars-search-ui .xKa svg{width:20px;height:20px}#dollars-search-ui .gallery-container{display:flex;flex-direction:column;flex-grow:1;min-height:0;overflow:hidden}#dollars-search-ui .gallery-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}#dollars-search-ui .gallery-title{font-size:14px;font-weight:600;color:var(--xG)}#dollars-search-ui .xIa{cursor:pointer;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;color:var(--xa);transition:all .2s}#dollars-search-ui .xIa:hover{background-color:var(--xj)}#dollars-search-ui .xIa:before{content:"\\d7";font-size:24px;line-height:1}#dollars-search-ui .gallery-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;flex-grow:1;overflow-y:auto;overscroll-behavior:contain;align-content:start}#dollars-search-ui .xHa{position:relative;width:100%;padding-bottom:100%;cursor:pointer;overflow:hidden;border-radius:6px;background-color:var(--xH)}#dollars-search-ui .xHa a{position:absolute;top:0;left:0;width:100%;height:100%;display:block}#dollars-search-ui .xHa img,#dollars-search-ui .xHa video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}#dollars-search-ui .xHa .video-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:#0000004d;pointer-events:none}#dollars-search-ui .xHa .video-overlay:before{content:"";width:0;height:0;margin-left:4px;border-top:16px solid transparent;border-bottom:16px solid transparent;border-left:25px solid #fff;filter:drop-shadow(0 2px 4px rgba(0,0,0,.5))}#dollars-search-ui .xHa:hover .video-overlay{background-color:#0006}#dollars-search-ui .gallery-loading{grid-column:1 / -1;text-align:center;padding:20px;color:var(--xa)}.xs{pointer-events:auto!important}.xs .tooltip-inner a{color:#eee!important;text-decoration:none!important;transition:color .2s;cursor:pointer}.xs .tooltip-inner a:hover{color:#fff!important;border-bottom-color:#fff;text-decoration:none!important}@keyframes dollars-message-in{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes dollars-scale-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}@keyframes dollars-slide-down-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}#dollars-context-menu.closing{animation:dollars-scale-out .15s ease-out forwards;pointer-events:none}#dollars-smiles-floating.closing{animation:dollars-slide-down-out .2s ease-out forwards;pointer-events:none}#dollars-reaction-picker-floating.closing{animation:dollars-scale-out .15s ease-out forwards;pointer-events:none}.xv.new-message{animation:dollars-message-in .25s ease-out forwards;transition:none;opacity:0;transform:translateY(8px)}.xv.pending.new-message{opacity:.75}.xv.pending{opacity:.7;transition:opacity .25s ease-out!important}.xv.pending .bubble:after{content:"";position:absolute;right:6px;bottom:4px;width:12px;height:12px;border:2px solid var(--xa);border-top-color:transparent;border-radius:50%;animation:dollars-spin .7s ease-in-out infinite,dollars-spinner-fade-in .2s ease-out forwards;will-change:transform}@keyframes dollars-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes dollars-spinner-fade-in{0%{opacity:0;transform:scale(.5) rotate(0)}to{opacity:1;transform:scale(1) rotate(0)}}#xa .likes_grid{opacity:1}#xa .likes_grid .item{gap:3px;background:#ffffffd9}html[data-theme=dark] #xa .likes_grid .item{background:#ffffff26}.reaction-avatars{display:inline-flex;align-items:center;margin-left:3px;flex-shrink:0}.xT{width:21px;height:21px;border-radius:50%;margin-left:-5px;object-fit:cover;background-color:var(--xH);position:relative;flex-shrink:0;transition:transform .15s ease}.xT:first-child{margin-left:0}.xQ:hover .xT{border-color:#369cf8}.xQ .num.extra{font-size:10px;margin-left:2px;color:var(--xa)}.xQ:hover .num.extra{color:#fff}@keyframes dollars-stagger-fade{0%{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}#dollars-smiles-floating.open .xza,#dollars-reaction-picker-floating.open .xza{animation:dollars-stagger-fade .25s cubic-bezier(.2,.8,.2,1) backwards}@keyframes dollars-menu-cascade{0%{opacity:0;transform:translate(-8px)}to{opacity:1;transform:translate(0)}}#dollars-context-menu.visible .xL button{animation:dollars-menu-cascade .2s cubic-bezier(.2,.8,.2,1) backwards}#dollars-context-menu.visible .xL button:nth-child(1){animation-delay:0ms}#dollars-context-menu.visible .xL button:nth-child(2){animation-delay:25ms}#dollars-context-menu.visible .xL button:nth-child(3){animation-delay:50ms}#dollars-context-menu.visible .xL button:nth-child(4){animation-delay:75ms}#dollars-context-menu.visible .xL button:nth-child(5){animation-delay:.1s}#dollars-context-menu.visible .xL button:nth-child(6){animation-delay:125ms}#dollars-context-menu.visible .xL button:nth-child(7){animation-delay:.15s}#dollars-context-menu.visible .xL button:nth-child(8){animation-delay:175ms}@keyframes dollars-reaction-bounce{0%{opacity:0;transform:scale(.3) translateY(15px)}40%{transform:scale(1.2) translateY(-10px)}65%{transform:scale(.92) translateY(2px)}85%{transform:scale(1.05) translateY(-2px)}to{opacity:1;transform:scale(1) translateY(0)}}#dollars-context-menu.visible .xM .xQ{animation:dollars-reaction-bounce .35s cubic-bezier(.34,1.56,.64,1) backwards}#dollars-context-menu.visible .xM .xQ:nth-child(1){animation-delay:0ms}#dollars-context-menu.visible .xM .xQ:nth-child(2){animation-delay:35ms}#dollars-context-menu.visible .xM .xQ:nth-child(3){animation-delay:70ms}#dollars-context-menu.visible .xM .xQ:nth-child(4){animation-delay:105ms}#dollars-context-menu.visible .xM .xQ:nth-child(5){animation-delay:.14s}#dollars-context-menu.visible .xM .xQ:nth-child(6){animation-delay:175ms}#dollars-context-menu.visible .xM .xQ:nth-child(7){animation-delay:.21s}.xca.visible{animation:dollars-slide-up .25s cubic-bezier(.2,.8,.2,1)}.xJa{animation:dollars-item-slide-in .25s cubic-bezier(.2,.8,.2,1) backwards}.xJa:nth-child(1){animation-delay:0ms}.xJa:nth-child(2){animation-delay:30ms}.xJa:nth-child(3){animation-delay:60ms}.xJa:nth-child(4){animation-delay:90ms}.xJa:nth-child(5){animation-delay:.12s}.xJa:nth-child(6){animation-delay:.15s}.xJa:nth-child(7){animation-delay:.18s}.xJa:nth-child(8){animation-delay:.21s}.xF{transition:background-color .2s,box-shadow .2s,transform .15s cubic-bezier(.2,.8,.2,1)}.xF:hover{transform:scale(1.02)}.xF:active{transform:scale(.98)}.xya:active{transform:scale(.9)!important}.header-btn:active{transform:scale(.92)}@keyframes dollars-date-slide{0%{opacity:0;transform:translate(-50%) translateY(-10px)}to{opacity:1;transform:translate(-50%) translateY(0)}}#dollars-floating-date.visible{animation:dollars-date-slide .3s cubic-bezier(.2,.8,.2,1)}@keyframes dollars-btn-bounce-in{0%{opacity:0;transform:scale(.5)}60%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.nav-btn.visible{animation:dollars-btn-bounce-in .3s cubic-bezier(.34,1.56,.64,1)}.xr{animation:dollars-item-slide-in .3s cubic-bezier(.2,.8,.2,1)}.xAa,.xR{transition:background-color .15s,color .15s,transform .1s}.xAa:active,.xR:active{transform:scale(.95)}@keyframes dollars-formatter-in{0%{opacity:0;transform:translateY(8px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}#xn.visible{animation:dollars-formatter-in .2s cubic-bezier(.2,.8,.2,1)}.xja:active{transform:scale(.9)}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}#unified-notifier{position:fixed;bottom:40px;right:30px;width:223px;z-index:10001;border-radius:15px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);overflow:hidden;transform:translate(calc(100% + 30px));transition:all .4s ease-in-out;background-color:#fefefee6;color:#000;border:1px solid rgba(0,0,0,.1);box-shadow:0 5px 25px -5px #5050504d;display:flex;flex-direction:column}html[data-theme=dark] #unified-notifier{background-color:#2d2e2fe6;color:#e0e0e1;border:1px solid rgba(255,255,255,.15)}#unified-notifier.show{transform:translate(0)}.un-header{display:flex;justify-content:space-between;align-items:center;padding:0 15px;height:32px;font-size:14px;font-weight:700;color:var(--primary-color);border-bottom:1px solid #eee}html[data-theme=dark] .un-header{border-bottom:1px solid #444}.un-body{padding:0;max-height:400px;overflow-y:auto}.un-item{display:flex;align-items:flex-start;padding:10px 15px}.un-item:not(:last-child){border-bottom:1px solid #eee}html[data-theme=dark] .un-item:not(:last-child){border-bottom:1px solid #444}.un-item .avatarNeue{margin-right:12px;flex-shrink:0;width:40px;height:40px;background-size:cover;border-radius:50%}.un-item .content{flex-grow:1;font-size:13px;overflow:hidden}.un-item .actions{margin-top:8px}.un-action-btn{cursor:pointer;display:inline-block;padding:2px 8px;border-radius:4px;font-size:12px;text-decoration:none!important;transition:background-color .2s}.un-action-btn.btnRedSmall{background-color:var(--primary-color);color:#fff!important}.un-action-btn.btnRedSmall:hover{background-color:#369cf8}.un-action-btn.btnGraySmall{background-color:#eee;color:#666!important}.un-action-btn.btnGraySmall:hover{background-color:#ddd}html[data-theme=dark] .un-action-btn.btnGraySmall{background-color:#444;color:#ccc!important}html[data-theme=dark] .un-action-btn.btnGraySmall:hover{background-color:#555}.un-widget-title{color:#3e3e3e;display:block;margin-bottom:4px}.un-widget-message{color:#666;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:4px}html[data-theme=dark] .un-widget-title{color:#e9e9e9}html[data-theme=dark] .un-widget-message{color:#aaa}.un-clear-all{font-size:12px;color:var(--xb)!important;text-decoration:none!important}.un-clear-all:hover{color:var(--primary-color)!important}@keyframes dollars-fade-in{0%{opacity:0}to{opacity:1}}.xUa{display:block;position:relative;text-align:center;margin:12px -19px;width:calc(100% + 38px);height:30px;line-height:30px;background-color:rgba(var(--primary-color-rgb, 249, 109, 142),.1);z-index:2;pointer-events:none;animation:dollars-fade-in .3s ease}.xUa span{font-size:13px;font-weight:600;color:var(--primary-color);background:transparent;border:none;box-shadow:none;padding:0 12px}html[data-theme=dark] .xUa{background-color:#f96d8e26}.xVa{display:block;position:relative;text-align:center;margin:12px -19px;width:calc(100% + 38px);height:30px;line-height:30px;background-color:#ffffffe6;z-index:2;pointer-events:none;animation:dollars-fade-in .3s ease}.xVa span{font-size:13px;font-weight:600;color:var(--primary-color);background:transparent;border:none;box-shadow:none;padding:0 12px}html[data-theme=dark] .xVa{background-color:#3c3e40e6}#xu{transition:transform .1s ease-out,box-shadow .3s ease;transform-style:preserve-3d;perspective:1000px;border:1px solid var(--primary-color)!important;background-color:var(--xH);cursor:pointer}#xu:before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background-image:url(https://lsky.ry.mk/i/2026/01/03/background.svg),linear-gradient(160deg,color-mix(in srgb,var(--primary-color),#a0c4ff 50%),color-mix(in srgb,var(--primary-color),#ffffff 50%),color-mix(in srgb,var(--primary-color),#ffc6ff 50%));background-repeat:repeat,no-repeat;background-position:300px,center;background-size:300px auto,cover;background-blend-mode:overlay,normal;opacity:1;transition:opacity .3s ease,background-position .1s ease-out}html[data-theme=dark] #xu{border:1px solid var(--primary-color);background:initial}html[data-theme=dark] #xu:before{background:linear-gradient(160deg,var(--primary-color) 0%,color-mix(in srgb,var(--primary-color),transparent 40%) 100%);-webkit-mask-image:url(https://lsky.ry.mk/i/2026/01/03/background.svg);mask-image:url(https://lsky.ry.mk/i/2026/01/03/background.svg);mask-repeat:repeat;mask-size:300px;mask-position:300px}#xu:hover{transform:scale(1.02);box-shadow:0 8px 24px #00000026}#dock-chat-link{position:relative}#dock-chat-link .ico_robot_open{background-image:url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.05 20.1l-3.05 -6.1l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.312 9.173" /><path d="M19 16l-2 3h4l-2 3" /></svg>')}#dock-chat-link.flashing{animation:dock-flash 1s ease-in-out infinite}@keyframes dock-flash{0%,to{opacity:1}50%{opacity:.3}}.dock-notif-badge{position:absolute;top:-4px;right:-4px;min-width:16px;height:16px;padding:0 4px;border-radius:8px;background-color:#f96d8e;color:#fff;font-size:10px;font-weight:700;line-height:16px;text-align:center;display:none;box-shadow:0 1px 3px #0003}.lb-overlay{position:fixed;inset:0;z-index:var(--xC,2000);background:#000000eb;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .25s ease;touch-action:none;user-select:none;-webkit-user-select:none}.lb-overlay.lb-visible{opacity:1}.lb-overlay.lb-closing{opacity:0}.lb-img-wrap{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;pointer-events:none}.lb-img{max-width:90vw;max-height:90vh;object-fit:contain;transform-origin:center center;transition:transform .25s ease,opacity .2s ease;will-change:transform;pointer-events:auto;-webkit-user-drag:none;user-select:auto;-webkit-user-select:auto;-webkit-touch-callout:default}.lb-img.lb-dragging{transition:none}.lb-nav,.lb-close{position:absolute;border:none;background:#ffffff26;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);color:#fff;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2;transition:background .2s}.lb-nav{top:50%;transform:translateY(-50%);width:44px;height:44px;opacity:.7;transition:background .2s,opacity .2s}.lb-nav:hover,.lb-close:hover{background:#ffffff4d}.lb-nav:hover{opacity:1}.lb-prev{left:12px}.lb-next{right:12px}.lb-close{top:12px;right:12px;width:40px;height:40px;font-size:20px}.lb-close:before{content:"\\d7";font-size:28px;line-height:1}.lb-nav:before{content:"";display:block;width:13px;height:13px;border-left:2px solid currentColor;border-bottom:2px solid currentColor}.lb-prev:before{transform:translate(3px) rotate(45deg)}.lb-next:before{transform:translate(-3px) rotate(-135deg)}.lb-counter{position:absolute;top:16px;left:50%;transform:translate(-50%);color:#ffffffb3;font-size:14px;z-index:2;pointer-events:none}.lb-capsule{position:absolute;bottom:28px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:8px;max-width:min(76vw,340px);padding:7px 12px 7px 9px;border:1px solid rgba(255,255,255,.14);border-radius:999px;background:#0c0c0e8f;backdrop-filter:blur(12px) saturate(1.1);-webkit-backdrop-filter:blur(12px) saturate(1.1);box-shadow:0 8px 20px #0000003d;color:#fff;cursor:pointer;z-index:2;transition:background-color .18s ease,border-color .18s ease,transform .18s ease;appearance:none;-webkit-appearance:none;font:inherit;text-align:left}.lb-capsule:hover{background:#0c0c0ead;border-color:#fff3;transform:translate(-50%) scale(1.015)}.lb-capsule:active{transform:translate(-50%) scale(.985)}.lb-capsule-avatar{width:28px;height:28px;border-radius:50%;object-fit:cover;border:1px solid rgba(255,255,255,.18);flex-shrink:0}.lb-capsule-info{display:flex;flex-direction:column;min-width:0;gap:2px;line-height:1.1}.lb-capsule-nickname,.lb-capsule-date{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lb-capsule-nickname{font-size:12px;font-weight:600;letter-spacing:.01em;text-shadow:0 1px 2px rgba(0,0,0,.35)}.lb-capsule-date{font-size:10px;color:#ffffffb8}@media(max-width:600px){.lb-nav{display:none}.lb-img{max-width:100vw;max-height:100vh}.lb-capsule{bottom:18px;max-width:calc(100vw - 28px);padding:7px 11px 7px 9px}}#xa button:focus-visible,#xa a:focus-visible,#xu:focus-visible{outline:2px solid color-mix(in srgb,var(--primary-color),#fff 18%);outline-offset:3px}#xa .xRa:focus-visible,#xa .xya:focus-visible,#xa .nav-btn:focus-visible,#xa .xia:focus-visible,#dollars-resize-handle:focus-visible{box-shadow:0 0 0 2px var(--xH),0 0 0 4px color-mix(in srgb,var(--primary-color),transparent 35%)}#xa button:disabled,#xa button[aria-disabled=true]{pointer-events:none}@media(hover:none){#xa .xRa:hover,#xa .xya:hover,#xa .nav-btn:hover,#xu:hover{transform:none}}
`;const STYLE_MARKER = "data-dollars-styles";
let pmNoticeHandlerInstalled = false;
function injectStyles() {
  if (document.querySelector(`[${STYLE_MARKER}]`)) return;
  const style = document.createElement("style");
  style.setAttribute(STYLE_MARKER, "");
  style.textContent = cssContent;
  document.head.appendChild(style);
}
function syncHomeCardVisibility() {
  const card = document.getElementById("xu");
  if (card) {
    card.style.display = settings.value.showCard ? "" : "none";
  }
}
function installHomeCard() {
  if (window.location.pathname !== "/") return;
  const sideInner = document.querySelector("#columnHomeB .sideInner");
  if (!sideInner) return;
  if (document.getElementById("xu")) {
    syncHomeCardVisibility();
    return;
  }
  const cardContainer = document.createElement("div");
  cardContainer.className = "featuredItems";
  const card = document.createElement("div");
  card.id = "xu";
  card.className = "appItem";
  const link = document.createElement("a");
  link.href = "#";
  const title = document.createElement("p");
  title.className = "title";
  title.textContent = "全站聊天窗💫";
  const subtitle = document.createElement("p");
  subtitle.textContent = "Re:Dollars";
  link.append(title, subtitle);
  card.appendChild(link);
  cardContainer.appendChild(card);
  sideInner.parentNode?.insertBefore(cardContainer, sideInner);
  syncHomeCardVisibility();
  card.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleChat(!isChatOpen.value);
  });
}
function installBangumiPmNoticeOpenHandler() {
  if (pmNoticeHandlerInstalled) return;
  pmNoticeHandlerInstalled = true;
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    if (!settings.value.pmNoticeOpensRD) return;
    const target = event.target instanceof Element ? event.target : null;
    const link = target?.closest('#robot_pm_notice a[href*="/pm/conversation/"]');
    if (!link) return;
    if (!openPmConversationFromHref(link.href)) return;
    event.preventDefault();
    event.stopPropagation();
    toggleChat(true);
  }, true);
}const settingsLoaded = d$1(false);
function restoreRememberedWindowState() {
  const savedState = loadWindowState();
  if (savedState.activeConversationId !== null) {
    restoreActiveConversation();
  }
  if (!settings.value.rememberOpenState) return;
  if (savedState.isChatOpen !== null) {
    isChatOpen.value = savedState.isChatOpen;
  }
  if (savedState.isMaximized !== null) {
    isMaximized.value = savedState.isMaximized;
  }
}
function startNotificationMode() {
  const notifType = settings.value.notificationType;
  if (notifType === "detail") {
    initWebSocketClient();
    void loadDollarsNotifications();
  } else if (notifType === "simple") {
    void loadDollarsNotifications();
  }
}
function applyAuthState(result) {
  isLoggedIn.value = result.isLoggedIn;
  if (result.user) {
    userInfo.value = { ...userInfo.value, ...result.user };
  }
  refreshNativeSettingsPanelAuthState();
}
async function syncAuthState() {
  applyAuthState(await checkAuth());
}
function initializeSession() {
  initUserInfo();
  loadSettingsFromCloud();
  applyAllSettings();
  installHomeCard();
  installBangumiPmNoticeOpenHandler();
  integrateWithNativeSettingsPanel();
  void initializeBlockedUsers();
  settingsLoaded.value = true;
  restoreRememberedWindowState();
  startNotificationMode();
  void syncAuthState();
}
function useAppStartup() {
  y$1(() => {
    initializeSession();
    return startPmPolling();
  }, []);
}
function useDeferredChatStartup() {
  const hasInitializedRef = A(false);
  y$1(() => {
    return isChatOpen.subscribe((isOpen) => {
      if (!isOpen || hasInitializedRef.current) return;
      hasInitializedRef.current = true;
      ensureBmoji();
      initFavorites();
    });
  }, []);
}
function useChatWindowMountState() {
  const hasEverOpened = A(false);
  const wasOpenOnMount = A(isChatOpen.peek());
  if (isChatOpen.value) {
    hasEverOpened.current = true;
  }
  const needsEntryAnimation = hasEverOpened.current && !wasOpenOnMount.current;
  if (hasEverOpened.current) {
    wasOpenOnMount.current = false;
  }
  return {
    hasEverOpened: hasEverOpened.current,
    skipEntryAnimation: !needsEntryAnimation && isChatOpen.value
  };
}function App() {
  useAppStartup();
  useDeferredChatStartup();
  const { hasEverOpened, skipEntryAnimation } = useChatWindowMountState();
  return k$1("div", { id: "xa", "data-bg-mode": settings.value.backgroundMode }, k$1(DockButton, null), k$1(NotificationManager, null), hasEverOpened && k$1(ErrorBoundary, null, k$1(ChatWindow, { skipEntryAnimation }), k$1(ContextMenu, null), k$1(LightboxViewer, null)));
}const API_VERSION = "1.0.0";
const eventListeners = /* @__PURE__ */ new Map();
let apiInstance = null;
let unsubscribeChatOpen = null;
function createDollarsAPI() {
  return {
    version: API_VERSION,
    conversationList: {
      registerItem(item) {
        return registerConversationItem(item);
      },
      updateItem(id, updates) {
        updateConversationItem(id, updates);
      },
      getItems() {
        return [...extensionConversations.value];
      }
    },
    components: {
      UserAvatar
    },
    state: {
      isChatOpen,
      isLoggedIn,
      userInfo
    },
    events: {
      on(event, callback) {
        if (!eventListeners.has(event)) {
          eventListeners.set(event, /* @__PURE__ */ new Set());
        }
        eventListeners.get(event).add(callback);
        return () => {
          eventListeners.get(event)?.delete(callback);
        };
      },
      off(event, callback) {
        eventListeners.get(event)?.delete(callback);
      },
      emit(event, ...args) {
        const listeners = eventListeners.get(event);
        if (listeners) {
          listeners.forEach((callback) => {
            try {
              callback(...args);
            } catch {
            }
          });
        }
      }
    },
    actions: {
      toggleChat(open) {
        toggleChat(open);
      },
      showProfileCard(userId, _anchor) {
        showUserProfile(userId);
      }
    }
  };
}
function initDollarsAPI() {
  const api = apiInstance || createDollarsAPI();
  apiInstance = api;
  window.DollarsAPI = api;
  if (unsubscribeChatOpen) return;
  unsubscribeChatOpen = isChatOpen.subscribe((isOpen) => {
    api.events.emit(isOpen ? "chatOpen" : "chatClose");
  });
}const APP_MOUNT_ID = "dollars-app-mount";
function getAppMountPoint() {
  const existing = document.getElementById(APP_MOUNT_ID);
  if (existing) return existing;
  const container = document.createElement("div");
  container.id = APP_MOUNT_ID;
  document.body.appendChild(container);
  return container;
}
function renderUserscriptApp(App) {
  R(k$1(App, {}), getAppMountPoint());
}function bootstrapUserscriptApp(App) {
  injectStyles();
  initDollarsAPI();
  renderUserscriptApp(App);
}function init() {
  bootstrapUserscriptApp(App);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}})();