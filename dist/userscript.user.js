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

(function () {
  'use strict';

  var n$1,l$3,u$3,t$2,i$2,r$2,o$2,e$2,f$3,c$2,s$3,a$2,h$4,p$4={},v$2=[],y$3=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w$3=Array.isArray;function d$3(n,l){for(var u in l)n[u]=l[u];return n}function g$4(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function _$3(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return m$2(l,e,i,r,null)}function m$2(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$3:o,__i:-1,__u:0};return null==o&&null!=l$3.vnode&&l$3.vnode(e),e}function b$2(){return {current:null}}function k$3(n){return n.children}function x$3(n,l){this.props=n,this.context=l;}function S$1(n,l){if(null==l)return n.__?S$1(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?S$1(n):null}function C$3(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$3(n)}}function M$2(n){(!n.__d&&(n.__d=true)&&i$2.push(n)&&!$$1.__r++||r$2!=l$3.debounceRendering)&&((r$2=l$3.debounceRendering)||o$2)($$1);}function $$1(){for(var n,u,t,r,o,f,c,s=1;i$2.length;)i$2.length>s&&i$2.sort(e$2),n=i$2.shift(),s=i$2.length,n.__d&&(t=void 0,r=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=d$3({},r)).__v=r.__v+1,l$3.vnode&&l$3.vnode(t),O$2(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S$1(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,N$2(f,t,c),r.__e=r.__=null,t.__e!=o&&C$3(t)));$$1.__r=0;}function I$2(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,w,d,g,_,m=t&&t.__k||v$2,b=l.length;for(f=P$3(u,l,m,f,b),a=0;a<b;a++)null!=(y=u.__k[a])&&(h=-1==y.__i?p$4:m[y.__i]||p$4,y.__i=a,g=O$2(n,y,h,i,r,o,e,f,c,s),w=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&B$3(h.ref,null,y),s.push(y.ref,y.__c||w,y)),null==d&&null!=w&&(d=w),(_=!!(4&y.__u))||h.__k===y.__k?f=A$3(y,f,n,_):"function"==typeof y.type&&void 0!==g?f=g:w&&(f=w.nextSibling),y.__u&=-7);return u.__e=d,f}function P$3(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=n.__k[r]=m$2(null,o,null,null,null):w$3(o)?o=n.__k[r]=m$2(k$3,{children:o},null,null,null):null==o.constructor&&o.__b>0?o=n.__k[r]=m$2(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,f=r+h,o.__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=L$2(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S$1(e)),D$3(e,e));return t}function A$3(n,l,u,t){var i,r;if("function"==typeof n.type){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,l=A$3(i[r],l,u,t));return l}n.__e!=l&&(t&&(l&&n.type&&!l.parentNode&&(l=S$1(n)),u.insertBefore(n.__e,l||null)),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function H$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(w$3(n)?n.some(function(n){H$2(n,l);}):l.push(n)),l}function L$2(n,l,u,t){var i,r,o,e=n.key,f=n.type,c=l[u],s=null!=c&&0==(2&c.__u);if(null===c&&null==e||s&&e==c.key&&f==c.type)return u;if(t>(s?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;)if(null!=(c=l[o=i>=0?i--:r++])&&0==(2&c.__u)&&e==c.key&&f==c.type)return o;return  -1}function T$3(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y$3.test(l)?u:u+"px";}function j$3(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$3(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||T$3(n.style,l,u[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f$3,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c$2,n.addEventListener(l,r?a$2:s$3,r)):n.removeEventListener(l,r?a$2:s$3,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||false===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F$3(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c$2++;else if(u.t<t.u)return;return t(l$3.event?l$3.event(u):u)}}}function O$2(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=u.type;if(null!=u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=l$3.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new j(b,M):(u.__c=h=new x$3(b,M),h.constructor=j,h.render=E$3),C&&C.sub(h),h.state||(h.state={}),h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$3({},h.__s)),d$3(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),u.__v==t.__v||!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_);});}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l$3.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=d$3(d$3({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k$3&&null==a.key&&(L=V$2(a.props.children)),f=I$2(n,w$3(L)?L:[L],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f;}else {for(T=o.length;T--;)g$4(o[T]);z$3(u);}else u.__e=t.__e,u.__k=t.__k,n.then||z$3(u);l$3.__e(n,u,t);}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=q$3(t.__e,u,t,i,r,o,e,c,s);return (a=l$3.diffed)&&a(u),128&u.__u?void 0:f}function z$3(n){n&&n.__c&&(n.__c.__e=true),n&&n.__k&&n.__k.forEach(z$3);}function N$2(n,u,t){for(var i=0;i<t.length;i++)B$3(t[i],t[++i],t[++i]);l$3.__c&&l$3.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$3.__e(n,u.__v);}});}function V$2(n){return "object"!=typeof n||null==n||n.__b&&n.__b>0?n:w$3(n)?n.map(V$2):d$3({},n)}function q$3(u,t,i,r,o,e,f,c,s){var a,h,v,y,d,_,m,b=i.props||p$4,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((d=e[a])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){u=d,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l$3.__m&&l$3.__m(t,e),c=false),e=null;}if(null==x)b===k||c&&u.data==k||(u.data=k);else {if(e=e&&n$1.call(u.childNodes),!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(d=u.attributes[a]).name]=d.value;for(a in b)if(d=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=d;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j$3(u,a,null,d,o);}for(a in k)d=k[a],"children"==a?y=d:"dangerouslySetInnerHTML"==a?h=d:"value"==a?_=d:"checked"==a?m=d:c&&"function"!=typeof d||b[a]===d||j$3(u,a,d,b[a],o);if(h)c||v&&(h.__html==v.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I$2("template"==t.type?u.content:u,w$3(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S$1(i,0),c,s),null!=e)for(a=e.length;a--;)g$4(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):null!=_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!=b[a])&&j$3(u,a,_,b[a],o),a="checked",null!=m&&m!=u[a]&&j$3(u,a,m,b[a],o));}return u}function B$3(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$3.__e(n,t);}}function D$3(n,u,t){var i,r;if(l$3.unmount&&l$3.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||B$3(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$3.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&D$3(i[r],u,t||"function"!=typeof n.type);t||g$4(n.__e),n.__c=n.__=n.__e=void 0;}function E$3(n,l,u){return this.constructor(n,u)}function G$2(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l$3.__&&l$3.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],O$2(t,u=(!r&&i||t).__k=_$3(k$3,null,[u]),o||p$4,p$4,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?n$1.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),N$2(e,u,f);}function J$2(n,l){G$2(n,l,J$2);}function K$2(l,u,t){var i,r,o,e,f=d$3({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&null!=e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),m$2(l.type,f,i||l.key,r||l.ref,null)}function Q$1(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null;},this.shouldComponentUpdate=function(n){this.props.value!=n.value&&u.forEach(function(n){n.__e=true,M$2(n);});},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n);};}),n.children}return l.__c="__cC"+h$4++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}n$1=v$2.slice,l$3={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$3=0,t$2=function(n){return null!=n&&null==n.constructor},x$3.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=d$3({},this.state),"function"==typeof n&&(n=n(d$3({},u),this.props)),n&&d$3(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M$2(this));},x$3.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),M$2(this));},x$3.prototype.render=k$3,i$2=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$2=function(n,l){return n.__v.__b-l.__v.__b},$$1.__r=0,f$3=/(PointerCapture)$|Capture$/i,c$2=0,s$3=F$3(false),a$2=F$3(true),h$4=0;

  var f$2=0;function u$2(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f$2,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a) void 0===p[c]&&(p[c]=a[c]);return l$3.vnode&&l$3.vnode(l),l}

  var t$1,r$1,u$1,i$1,o$1=0,f$1=[],c$1=l$3,e$1=c$1.__b,a$1=c$1.__r,v$1=c$1.diffed,l$2=c$1.__c,m$1=c$1.unmount,s$2=c$1.__;function p$3(n,t){c$1.__h&&c$1.__h(r$1,n,o$1||t),o$1=0;var u=r$1.__H||(r$1.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d$2(n){return o$1=1,h$3(D$2,n)}function h$3(n,u,i){var o=p$3(t$1++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D$2(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r$1,!r$1.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c&&c.call(this,n,t,r)||i};r$1.__f=true;var c=r$1.shouldComponentUpdate,e=r$1.componentWillUpdate;r$1.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r$1.shouldComponentUpdate=f;}return o.__N||o.__}function y$2(n,u){var i=p$3(t$1++,3);!c$1.__s&&C$2(i.__H,u)&&(i.__=n,i.u=u,r$1.__H.__h.push(i));}function _$2(n,u){var i=p$3(t$1++,4);!c$1.__s&&C$2(i.__H,u)&&(i.__=n,i.u=u,r$1.__h.push(i));}function A$2(n){return o$1=5,T$2(function(){return {current:n}},[])}function F$2(n,t,r){o$1=6,_$2(function(){if("function"==typeof n){var r=n(t());return function(){n(null),r&&"function"==typeof r&&r();}}if(n)return n.current=t(),function(){return n.current=null}},null==r?r:r.concat(n));}function T$2(n,r){var u=p$3(t$1++,7);return C$2(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q$2(n,t){return o$1=8,T$2(function(){return n},t)}function x$2(n){var u=r$1.context[n.__c],i=p$3(t$1++,9);return i.c=n,u?(null==i.__&&(i.__=true,u.sub(r$1)),u.props.value):n.__}function P$2(n,t){c$1.useDebugValue&&c$1.useDebugValue(t?t(n):n);}function g$3(){var n=p$3(t$1++,11);if(!n.__){for(var u=r$1.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++;}return n.__}function j$2(){for(var n;n=f$1.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z$2),n.__H.__h.forEach(B$2),n.__H.__h=[];}catch(t){n.__H.__h=[],c$1.__e(t,n.__v);}}c$1.__b=function(n){r$1=null,e$1&&e$1(n);},c$1.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s$2&&s$2(n,t);},c$1.__r=function(n){a$1&&a$1(n),t$1=0;var i=(r$1=n.__c).__H;i&&(u$1===r$1?(i.__h=[],r$1.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.forEach(z$2),i.__h.forEach(B$2),i.__h=[],t$1=0)),u$1=r$1;},c$1.diffed=function(n){v$1&&v$1(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===c$1.requestAnimationFrame||((i$1=c$1.requestAnimationFrame)||w$2)(j$2)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),u$1=r$1=null;},c$1.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z$2),n.__h=n.__h.filter(function(n){return !n.__||B$2(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c$1.__e(r,n.__v);}}),l$2&&l$2(n,t);},c$1.unmount=function(n){m$1&&m$1(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z$2(n);}catch(n){t=n;}}),r.__H=void 0,t&&c$1.__e(t,r.__v));};var k$2="function"==typeof requestAnimationFrame;function w$2(n){var t,r=function(){clearTimeout(u),k$2&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,35);k$2&&(t=requestAnimationFrame(r));}function z$2(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function B$2(n){var t=r$1;n.__c=n.__(),r$1=t;}function C$2(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D$2(n,t){return "function"==typeof t?t(n):t}

  const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
    let promise = Promise.resolve();
    if (false              && deps && deps.length > 0) {
      let allSettled2 = function(promises) {
        return Promise.all(
          promises.map(
            (p) => Promise.resolve(p).then(
              (value) => ({ status: "fulfilled", value }),
              (reason) => ({ status: "rejected", reason })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const cspNonceMeta = document.querySelector(
        "meta[property=csp-nonce]"
      );
      const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
      promise = allSettled2(
        deps.map((dep) => {
          dep = assetsURL(dep);
          if (dep in seen) return;
          seen[dep] = true;
          const isCss = dep.endsWith(".css");
          const cssSelector = isCss ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
            return;
          }
          const link = document.createElement("link");
          link.rel = isCss ? "stylesheet" : scriptRel;
          if (!isCss) {
            link.as = "script";
          }
          link.crossOrigin = "";
          link.href = dep;
          if (cspNonce) {
            link.setAttribute("nonce", cspNonce);
          }
          document.head.appendChild(link);
          if (isCss) {
            return new Promise((res, rej) => {
              link.addEventListener("load", res);
              link.addEventListener(
                "error",
                () => rej(new Error(`Unable to preload CSS for ${dep}`))
              );
            });
          }
        })
      );
    }
    function handlePreloadError(err) {
      const e = new Event("vite:preloadError", {
        cancelable: true
      });
      e.payload = err;
      window.dispatchEvent(e);
      if (!e.defaultPrevented) {
        throw err;
      }
    }
    return promise.then((res) => {
      for (const item of res || []) {
        if (item.status !== "rejected") continue;
        handlePreloadError(item.reason);
      }
      return baseModule().catch(handlePreloadError);
    });
  };

  var i=Symbol.for("preact-signals");function t(){if(!(s$1>1)){var i,t=false;while(void 0!==h$2){var r=h$2;h$2=void 0;f++;while(void 0!==r){var o=r.o;r.o=void 0;r.f&=-3;if(!(8&r.f)&&c(r))try{r.c();}catch(r){if(!t){i=r;t=true;}}r=o;}}f=0;s$1--;if(t)throw i}else s$1--;}function r(i){if(s$1>0)return i();s$1++;try{return i()}finally{t();}}var o=void 0;function n(i){var t=o;o=void 0;try{return i()}finally{o=t;}}var h$2=void 0,s$1=0,f=0,v=0;function e(i){if(void 0!==o){var t=i.n;if(void 0===t||t.t!==o){t={i:0,S:i,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t};if(void 0!==o.s)o.s.n=t;o.s=t;i.n=t;if(32&o.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=o.s;t.n=void 0;o.s.n=t;o.s=t;}return t}}}function u(i,t){this.v=i;this.i=0;this.n=void 0;this.t=void 0;this.W=null==t?void 0:t.watched;this.Z=null==t?void 0:t.unwatched;this.name=null==t?void 0:t.name;}u.prototype.brand=i;u.prototype.h=function(){return  true};u.prototype.S=function(i){var t=this,r=this.t;if(r!==i&&void 0===i.e){i.x=r;this.t=i;if(void 0!==r)r.e=i;else n(function(){var i;null==(i=t.W)||i.call(t);});}};u.prototype.U=function(i){var t=this;if(void 0!==this.t){var r=i.e,o=i.x;if(void 0!==r){r.x=o;i.e=void 0;}if(void 0!==o){o.e=r;i.x=void 0;}if(i===this.t){this.t=o;if(void 0===o)n(function(){var i;null==(i=t.Z)||i.call(t);});}}};u.prototype.subscribe=function(i){var t=this;return E$2(function(){var r=t.value,n=o;o=void 0;try{i(r);}finally{o=n;}},{name:"sub"})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){var i=o;o=void 0;try{return this.value}finally{o=i;}};Object.defineProperty(u.prototype,"value",{get:function(){var i=e(this);if(void 0!==i)i.i=this.i;return this.v},set:function(i){if(i!==this.v){if(f>100)throw new Error("Cycle detected");this.v=i;this.i++;v++;s$1++;try{for(var r=this.t;void 0!==r;r=r.x)r.t.N();}finally{t();}}}});function d$1(i,t){return new u(i,t)}function c(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return  true;return  false}function a(i){for(var t=i.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r)t.r=r;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function l$1(i){var t=i.s,r=void 0;while(void 0!==t){var o=t.p;if(-1===t.i){t.S.U(t);if(void 0!==o)o.n=t.n;if(void 0!==t.n)t.n.p=o;}else r=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=o;}i.s=r;}function y$1(i,t){u.call(this,void 0);this.x=i;this.s=void 0;this.g=v-1;this.f=4;this.W=null==t?void 0:t.watched;this.Z=null==t?void 0:t.unwatched;this.name=null==t?void 0:t.name;}y$1.prototype=new u;y$1.prototype.h=function(){this.f&=-3;if(1&this.f)return  false;if(32==(36&this.f))return  true;this.f&=-5;if(this.g===v)return  true;this.g=v;this.f|=1;if(this.i>0&&!c(this)){this.f&=-2;return  true}var i=o;try{a(this);o=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}o=i;l$1(this);this.f&=-2;return  true};y$1.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t);}u.prototype.S.call(this,i);};y$1.prototype.U=function(i){if(void 0!==this.t){u.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t);}}};y$1.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N();}};Object.defineProperty(y$1.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=e(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function w$1(i,t){return new y$1(i,t)}function _$1(i){var r=i.u;i.u=void 0;if("function"==typeof r){s$1++;var n=o;o=void 0;try{r();}catch(t){i.f&=-2;i.f|=8;b$1(i);throw t}finally{o=n;t();}}}function b$1(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;_$1(i);}function g$2(i){if(o!==this)throw new Error("Out-of-order effect");l$1(this);o=i;this.f&=-2;if(8&this.f)b$1(this);t();}function p$2(i,t){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;this.name=null==t?void 0:t.name;}p$2.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};p$2.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;_$1(this);a(this);s$1++;var i=o;o=this;return g$2.bind(this,i)};p$2.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=h$2;h$2=this;}};p$2.prototype.d=function(){this.f|=8;if(!(1&this.f))b$1(this);};p$2.prototype.dispose=function(){this.d();};function E$2(i,t){var r=new p$2(i,t);try{r.c();}catch(i){r.d();throw i}var o=r.d.bind(r);o[Symbol.dispose]=o;return o}

  var s;function l(i,n){l$3[i]=n.bind(null,l$3[i]||function(){});}function d(i){if(s)s();s=i&&i.S();}function h$1(i){var r=this,f=i.data,o=useSignal(f);o.value=f;var e=T$2(function(){var i=r.__v;while(i=i.__)if(i.__c){i.__c.__$f|=4;break}r.__$u.c=function(){var i,t=r.__$u.S(),f=e.value;t();if(t$2(f)||3!==(null==(i=r.base)?void 0:i.nodeType)){r.__$f|=1;r.setState({});}else r.base.data=f;};return w$1(function(){var i=o.value.value;return 0===i?0:true===i?"":i||""})},[]);return e.value}h$1.displayName="_st";Object.defineProperties(u.prototype,{constructor:{configurable:true,value:void 0},type:{configurable:true,value:h$1},props:{configurable:true,get:function(){return {data:this}}},__b:{configurable:true,value:1}});l("__b",function(i,r){if("string"==typeof r.type){var n,t=r.props;for(var f in t)if("children"!==f){var o=t[f];if(o instanceof u){if(!n)r.__np=n={};n[f]=o;t[f]=o.peek();}}}i(r);});l("__r",function(i,r){d();var n,t=r.__c;if(t){t.__$f&=-2;if(void 0===(n=t.__$u))t.__$u=n=function(i){var r;E$2(function(){r=this;});r.c=function(){t.__$f|=1;t.setState({});};return r}();}d(n);i(r);});l("__e",function(i,r,n,t){d();i(r,n,t);});l("diffed",function(i,r){d();var n;if("string"==typeof r.type&&(n=r.__e)){var t=r.__np,f=r.props;if(t){var o=n.U;if(o)for(var e in o){var u=o[e];if(void 0!==u&&!(e in t)){u.d();o[e]=void 0;}}else n.U=o={};for(var a in t){var c=o[a],s=t[a];if(void 0===c){c=p$1(n,a,s,f);o[a]=c;}else c.o(s,f);}}}i(r);});function p$1(i,r,n,t){var f=r in i&&void 0===i.ownerSVGElement,o=d$1(n);return {o:function(i,r){o.value=i;t=r;},d:E$2(function(){var n=o.value.value;if(t[r]!==n){t[r]=n;if(f)i[r]=n;else if(n)i.setAttribute(r,n);else i.removeAttribute(r);}})}}l("unmount",function(i,r){if("string"==typeof r.type){var n=r.__e;if(n){var t=n.U;if(t){n.U=void 0;for(var f in t){var o=t[f];if(o)o.d();}}}}else {var e=r.__c;if(e){var u=e.__$u;if(u){e.__$u=void 0;u.d();}}}i(r);});l("__h",function(i,r,n,t){if(t<3||9===t)r.__$f|=2;i(r,n,t);});x$3.prototype.shouldComponentUpdate=function(i,r){var n=this.__$u,t=n&&void 0!==n.s;for(var f in r)return  true;if(this.__f||"boolean"==typeof this.u&&true===this.u){if(!(t||2&this.__$f||4&this.__$f))return  true;if(1&this.__$f)return  true}else {if(!(t||4&this.__$f))return  true;if(3&this.__$f)return  true}for(var o in i)if("__source"!==o&&i[o]!==this.props[o])return  true;for(var e in this.props)if(!(e in i))return  true;return  false};function useSignal(i){return T$2(function(){return d$1(i)},[])}

  const BACKEND_URL = "https://bgmchat.ry.mk";
  const WEBSOCKET_URL = "wss://bgmchat.ry.mk/ws";
  const MESSAGE_GROUP_TIME_GAP = 300;
  const CONTEXT_MENU_REACTIONS = [67, 63, 38, 124, 46, 106].map((n) => `(bgm${n})`);
  const SVGIcons = {
    spoiler: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>',
    bold: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" /><path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" /></svg>',
    italic: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 5l6 0" /><path d="M7 19l6 0" /><path d="M14 5l-4 14" /></svg>',
    underline: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 5v5a5 5 0 0 0 10 0v-5" /><path d="M5 19h14" /></svg>',
    strike: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5" /></svg>',
    code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>',
    check: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    back: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    upload: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
    emoji: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
    arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>',
    bmoPanel: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l0 14"></path><path d="M5 12l14 0"></path></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>',
    history: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8l0 4l2 2" /><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></svg>',
    expand: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6" /></svg>',
    reply: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-reply"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" /><path d="M11 8l-3 3l3 3" /><path d="M16 11h-8" /></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>',
    edit: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" /><path d="M16 5l3 3" /></svg>',
    delete: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-outbound"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 15l6 -6" /><path d="M11 9h4v4" /></svg>',
    favorite: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>'
  };

  function getChiiApp() {
    return chiiApp;
  }
  function getChiiLib() {
    return chiiLib;
  }

  const isLoggedIn = d$1(false);
  const userInfo = d$1({
    id: window.CHOBITS_UID?.toString() || "",
    name: window.CHOBITS_USERNAME || "",
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
    loadImages: true,
    rememberOpenState: false,
    backgroundMode: "tint"
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
    } catch (e) {
      console.warn("[Re:Dollars] Failed to parse blocked users cache", e);
    }
    const fetchPromises = [];
    for (const u of list) {
      const uStr = String(u);
      if (/^\d+$/.test(uStr)) {
        newBlockedUsers.add(uStr);
      } else {
        if (cache[uStr]) {
          newBlockedUsers.add(String(cache[uStr]));
        } else {
          fetchPromises.push(
            fetch(`https://api.bgm.tv/v0/users/${uStr}`).then((r) => r.ok ? r.json() : null).then((d) => {
              if (d?.id) {
                const id = String(d.id);
                newBlockedUsers.add(id);
                cache[uStr] = id;
                cacheDirty = true;
              }
            }).catch((e) => console.error(`[Re:Dollars] Failed to resolve user ${uStr}`, e))
          );
        }
      }
    }
    if (fetchPromises.length) {
      await Promise.all(fetchPromises);
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
    return getChiiApp().cloud_settings.getAll()?.dollarsAuthToken || null;
  }
  function getAuthHeaders() {
    const token = getToken();
    return token ? { "Authorization": `Bearer ${token}` } : {};
  }

  const user = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    blockedUsers,
    getAuthHeaders,
    getToken,
    initUserInfo,
    initializeBlockedUsers,
    isLoggedIn,
    loadSettingsFromCloud,
    saveSettings,
    settings,
    userInfo
  }, Symbol.toStringTag, { value: 'Module' }));

  const lastReadId = d$1(null);
  const pendingReadId = d$1(null);
  const isReadStateSyncing = d$1(false);
  const hasUnreadMessages = w$1(() => {
    const readId = lastReadId.value;
    if (!readId) return false;
    const newestId = historyNewestId.value;
    return newestId !== null && newestId > readId;
  });
  const unreadCount = w$1(() => {
    const readId = lastReadId.value;
    if (!readId) return 0;
    const ids = messageIds.value;
    return ids.filter((id) => id > readId).length;
  });
  function getUserId() {
    const uid = window.CHOBITS_UID;
    return uid ? Number(uid) : null;
  }
  async function loadReadState() {
    try {
      const userId = getUserId();
      if (!userId) {
        console.warn("Cannot load read state: user not logged in");
        return null;
      }
      isReadStateSyncing.value = true;
      const response = await fetch(`${BACKEND_URL}/api/messages/read?user_id=${userId}`, {
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
    } catch (e) {
      console.error("Failed to load read state:", e);
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
      const userId = getUserId();
      if (!userId) {
        console.warn("Cannot sync read state: user not logged in");
        return;
      }
      const response = await fetch(`${BACKEND_URL}/api/messages/read`, {
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
    } catch (e) {
      console.error("Failed to sync read state:", e);
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
  }

  const BROWSE_POSITION_KEY = "dollars_browse_position";
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

  const scrollButtonMode = d$1("to-bottom");
  function getCurrentUserId() {
    return String(window.CHOBITS_UID || "");
  }
  const messageMap = d$1(/* @__PURE__ */ new Map());
  const messageStore = d$1(/* @__PURE__ */ new Map());
  const messageIds = w$1(() => {
    const map = messageMap.value;
    return Array.from(map.keys()).sort((a, b) => {
      const msgA = map.get(a);
      const msgB = map.get(b);
      return msgA.timestamp - msgB.timestamp || a - b;
    });
  });
  const conversations = d$1([
    {
      id: "dollars",
      type: "channel",
      title: "Re:Dollars",
      avatar: "https://lsky.ry.mk/i/2025/09/06/68bc5540a8c51.webp",
      lastMessage: { text: "", timestamp: 0 },
      unreadCount: 0
    }
  ]);
  const isChatOpen = d$1(false);
  const activeConversationId = d$1("dollars");
  const isLoadingHistory = d$1(false);
  const historyFullyLoaded = d$1(false);
  const historyOldestId = d$1(null);
  const historyNewestId = d$1(null);
  const timelineIsLive = d$1(true);
  const isContextLoading = d$1(false);
  const initialMessagesLoaded = d$1(false);
  const replyingTo = d$1(null);
  const editingMessage = d$1(null);
  const unreadWhileScrolled = d$1(0);
  const unreadJumpList = d$1([]);
  const searchQuery = d$1("");
  const pendingMention = d$1(null);
  const currentDateLabel = d$1(null);
  const showScrollBottomBtn = d$1(false);
  const newMessageIds = d$1(/* @__PURE__ */ new Set());
  const pendingJumpToMessage = d$1(null);
  let nextOptimisticId = -1;
  const pendingTimeouts = /* @__PURE__ */ new Map();
  const PENDING_TIMEOUT_MS = 1e4;
  const wsConnected = d$1(false);
  const onlineUsers = d$1(/* @__PURE__ */ new Map());
  const onlineCount = d$1(0);
  const typingUsers = d$1(/* @__PURE__ */ new Map());
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
    const isSameUserAsPrev = prevMsg && String(prevMsg.uid) === String(msg.uid) && msg.timestamp - prevMsg.timestamp < MESSAGE_GROUP_TIME_GAP;
    const isSameUserAsNext = nextMsg && String(nextMsg.uid) === String(msg.uid) && nextMsg.timestamp - msg.timestamp < MESSAGE_GROUP_TIME_GAP;
    return {
      isSelf: String(msg.uid) === String(userId),
      isGrouped: !!isSameUserAsPrev,
      isGroupedWithNext: !!isSameUserAsNext
    };
  }
  const pendingScrollToBottom = d$1(false);
  const manualScrollToBottom = d$1(0);
  const isAtBottom = d$1(true);
  function addMessage(msg, tempId) {
    r(() => {
      const map = new Map(messageMap.value);
      let replacedOptimistic = false;
      let inheritedStableKey;
      let matchedTempId;
      if (tempId) {
        for (const [id, m] of map) {
          if (m.state === "sending" && m.stableKey === tempId) {
            inheritedStableKey = m.stableKey;
            matchedTempId = id;
            map.delete(id);
            replacedOptimistic = true;
            break;
          }
        }
      }
      if (matchedTempId !== void 0) {
        const timeout = pendingTimeouts.get(matchedTempId);
        if (timeout) {
          clearTimeout(timeout);
          pendingTimeouts.delete(matchedTempId);
        }
      }
      const confirmedMsg = inheritedStableKey ? { ...msg, stableKey: inheritedStableKey, state: "sent" } : { ...msg, state: "sent" };
      map.set(confirmedMsg.id, confirmedMsg);
      messageMap.value = map;
      const store = new Map(messageStore.value);
      store.set(String(confirmedMsg.id), { raw: confirmedMsg.message });
      messageStore.value = store;
      if (!replacedOptimistic) {
        const newIds = new Set(newMessageIds.value);
        newIds.add(confirmedMsg.id);
        newMessageIds.value = newIds;
        setTimeout(() => {
          const ids = new Set(newMessageIds.value);
          ids.delete(confirmedMsg.id);
          newMessageIds.value = ids;
        }, 350);
      }
      pendingScrollToBottom.value = true;
    });
  }
  function addOptimisticMessage(content, user, replyToId, replyDetails, imageMeta) {
    const tempId = nextOptimisticId--;
    const stableKey = `temp-${Math.random().toString(36).slice(2)}`;
    const optimisticMsg = {
      id: tempId,
      uid: Number(user.id),
      nickname: user.nickname,
      avatar: user.avatar,
      message: content,
      timestamp: Math.floor(Date.now() / 1e3),
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
      const store = new Map(messageStore.value);
      store.set(String(tempId), { raw: content });
      messageStore.value = store;
      const newIds = new Set(newMessageIds.value);
      newIds.add(tempId);
      newMessageIds.value = newIds;
      setTimeout(() => {
        const ids = new Set(newMessageIds.value);
        ids.delete(tempId);
        newMessageIds.value = ids;
      }, 350);
      manualScrollToBottom.value++;
    });
    const timeoutId = setTimeout(() => {
      markMessageFailed(tempId);
      pendingTimeouts.delete(tempId);
    }, PENDING_TIMEOUT_MS);
    pendingTimeouts.set(tempId, timeoutId);
    return { tempId, stableKey };
  }
  function markMessageFailed(tempId) {
    const map = new Map(messageMap.value);
    const msg = map.get(tempId);
    if (msg && msg.state === "sending") {
      map.set(tempId, { ...msg, state: "failed" });
      messageMap.value = map;
    }
  }
  function removeOptimisticMessage(tempId) {
    const timeout = pendingTimeouts.get(tempId);
    if (timeout) {
      clearTimeout(timeout);
      pendingTimeouts.delete(tempId);
    }
    r(() => {
      const map = new Map(messageMap.value);
      map.delete(tempId);
      messageMap.value = map;
      const store = new Map(messageStore.value);
      store.delete(String(tempId));
      messageStore.value = store;
    });
  }
  function retryMessage(tempId) {
    const map = messageMap.value;
    const msg = map.get(tempId);
    if (!msg || msg.state !== "failed") return null;
    const content = msg.message;
    const stableKey = msg.stableKey || `temp-${Math.random().toString(36).slice(2)}`;
    const newMap = new Map(map);
    newMap.set(tempId, { ...msg, state: "sending" });
    messageMap.value = newMap;
    const timeoutId = setTimeout(() => {
      markMessageFailed(tempId);
      pendingTimeouts.delete(tempId);
    }, PENDING_TIMEOUT_MS);
    pendingTimeouts.set(tempId, timeoutId);
    return { content, stableKey };
  }
  function addMessagesBatch(newMessages) {
    if (newMessages.length === 0) return;
    r(() => {
      const map = new Map(messageMap.value);
      const store = new Map(messageStore.value);
      for (const msg of newMessages) {
        const existing = map.get(msg.id);
        if (!existing || msg.edited_at && msg.edited_at > (existing.edited_at || 0)) {
          map.set(msg.id, msg);
          store.set(String(msg.id), { raw: msg.message });
        }
      }
      messageMap.value = map;
      messageStore.value = store;
    });
  }
  function updateMessage(id, updates) {
    const map = new Map(messageMap.value);
    const existing = map.get(id);
    if (existing) {
      map.set(id, { ...existing, ...updates });
      messageMap.value = map;
      if (updates.message !== void 0) {
        const store = new Map(messageStore.value);
        store.set(String(id), { raw: updates.message });
        messageStore.value = store;
      }
    }
  }
  function getMessageById(id) {
    return messageMap.value.get(id);
  }
  function deleteMessage$1(id) {
    updateMessage(id, { is_deleted: true });
  }
  function clearMessages() {
    r(() => {
      messageMap.value = /* @__PURE__ */ new Map();
      messageStore.value = /* @__PURE__ */ new Map();
    });
  }
  function setMessages(newMessages) {
    r(() => {
      const map = /* @__PURE__ */ new Map();
      const store = /* @__PURE__ */ new Map();
      for (const msg of newMessages) {
        map.set(msg.id, msg);
        store.set(String(msg.id), { raw: msg.message });
      }
      messageMap.value = map;
      messageStore.value = store;
    });
  }
  const prependMessages = addMessagesBatch;
  const appendMessages = addMessagesBatch;
  async function loadMessageContext(messageId) {
    isLoadingHistory.value = true;
    try {
      const { fetchMessageContext } = await __vitePreload(async () => { const { fetchMessageContext } = await Promise.resolve().then(() => api);return { fetchMessageContext }},false             ?__VITE_PRELOAD__:void 0);
      const result = await fetchMessageContext(messageId);
      if (result && result.messages.length > 0) {
        r(() => {
          clearMessages();
          addMessagesBatch(result.messages);
          historyOldestId.value = result.messages[0].id;
          historyNewestId.value = result.messages[result.messages.length - 1].id;
          historyFullyLoaded.value = !result.has_more_before;
          timelineIsLive.value = false;
        });
        return { targetIndex: result.target_index };
      }
    } catch (e) {
    } finally {
      isLoadingHistory.value = false;
    }
    return null;
  }
  function toggleChat(open, skipSave = false) {
    const newState = open ?? !isChatOpen.value;
    isChatOpen.value = newState;
    if (!skipSave) {
      localStorage.setItem("dollars.isChatOpen", JSON.stringify(newState));
    }
  }
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
  }
  function setActiveConversation(conversationId) {
    activeConversationId.value = conversationId;
    localStorage.setItem("dollars.activeConversationId", conversationId);
  }
  function updateConversationLastMessage(conversationId, text, timestamp) {
    conversations.value = conversations.value.map(
      (conv) => conv.id === conversationId ? { ...conv, lastMessage: { text, timestamp } } : conv
    );
    conversations.value = [...conversations.value].sort(
      (a, b) => (b.lastMessage.timestamp || 0) - (a.lastMessage.timestamp || 0)
    );
  }

  const chat = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    activeConversationId,
    addMessage,
    addMessagesBatch,
    addOptimisticMessage,
    appendMessages,
    browsePosition,
    cancelReplyOrEdit,
    clearBrowsePosition,
    clearMessages,
    conversations,
    currentDateLabel,
    deleteMessage: deleteMessage$1,
    editingMessage,
    getFirstUnreadId,
    getMessageById,
    getMessageGrouping,
    hasUnreadMessages,
    historyFullyLoaded,
    historyNewestId,
    historyOldestId,
    initialMessagesLoaded,
    isAtBottom,
    isChatOpen,
    isContextLoading,
    isLoadingHistory,
    isReadStateSyncing,
    lastReadId,
    loadBrowsePosition,
    loadMessageContext,
    loadReadState,
    manualScrollToBottom,
    markMessageFailed,
    markSentMessageAsRead,
    messageIds,
    messageMap,
    messageStore,
    newMessageIds,
    onlineCount,
    onlineUsers,
    pendingJumpToMessage,
    pendingMention,
    pendingReadId,
    pendingScrollToBottom,
    prependMessages,
    removeOptimisticMessage,
    replyingTo,
    retryMessage,
    saveBrowsePosition,
    scrollButtonMode,
    searchQuery,
    setActiveConversation,
    setEditingMessage,
    setMessages,
    setReplyTo,
    showScrollBottomBtn,
    timelineIsLive,
    toggleChat,
    typingUsers,
    unreadCount,
    unreadJumpList,
    unreadWhileScrolled,
    updateConversationLastMessage,
    updateMessage,
    updateReadState,
    wsConnected
  }, Symbol.toStringTag, { value: 'Module' }));

  const isMobileViewport = d$1(window.innerWidth <= 768);
  const isNarrowLayout = d$1(false);
  const isMaximized = d$1(false);
  const mobileChatViewActive = d$1(false);
  const isSmileyPanelOpen = d$1(false);
  const isSmileyPanelClosing = d$1(false);
  const isContextMenuOpen = d$1(false);
  const isContextMenuClosing = d$1(false);
  const isSearchActive = d$1(false);
  const inputAreaHeight = d$1(60);
  const contextMenuPosition = d$1({ x: 0, y: 0 });
  const contextMenuTargetId = d$1(null);
  const contextMenuImageUrl = d$1(null);
  const contextMenuBmoCode = d$1(null);
  const profileCardUserId = d$1(null);
  const profileCardAnchor = d$1(null);
  const isProfileCardClosing = d$1(false);
  const isImageViewerOpen = d$1(false);
  const imageViewerImages = d$1([]);
  const imageViewerIndex = d$1(0);
  window.addEventListener("resize", () => {
    isMobileViewport.value = window.innerWidth <= 768;
  });
  function showContextMenu(x, y, targetId, imageUrl, bmoCode) {
    contextMenuPosition.value = { x, y };
    contextMenuTargetId.value = targetId;
    contextMenuImageUrl.value = imageUrl ?? null;
    contextMenuBmoCode.value = bmoCode ?? null;
    isContextMenuOpen.value = true;
  }
  function hideContextMenu() {
    if (!isContextMenuOpen.value || isContextMenuClosing.value) return;
    isContextMenuClosing.value = true;
    hideReactionPicker();
    setTimeout(() => {
      isContextMenuOpen.value = false;
      isContextMenuClosing.value = false;
      contextMenuTargetId.value = null;
      contextMenuImageUrl.value = null;
      contextMenuBmoCode.value = null;
    }, 150);
  }
  const isReactionPickerOpen = d$1(false);
  const isReactionPickerClosing = d$1(false);
  const reactionPickerPosition = d$1({ x: 0, y: 0, width: 280 });
  function showReactionPicker(x, y, width) {
    reactionPickerPosition.value = { x, y, width: width || 280 };
    isReactionPickerClosing.value = false;
    isReactionPickerOpen.value = true;
  }
  function hideReactionPicker() {
    if (!isReactionPickerOpen.value || isReactionPickerClosing.value) return;
    isReactionPickerClosing.value = true;
    setTimeout(() => {
      isReactionPickerOpen.value = false;
      isReactionPickerClosing.value = false;
    }, 150);
  }
  function toggleSmileyPanel(open) {
    const shouldOpen = open ?? !isSmileyPanelOpen.value;
    if (shouldOpen) {
      isSmileyPanelClosing.value = false;
      isSmileyPanelOpen.value = true;
    } else {
      if (!isSmileyPanelOpen.value || isSmileyPanelClosing.value) return;
      isSmileyPanelClosing.value = true;
      setTimeout(() => {
        isSmileyPanelOpen.value = false;
        isSmileyPanelClosing.value = false;
      }, 200);
    }
  }
  function showProfileCard(userId, anchor) {
    if (profileCardUserId.value === userId) {
      hideProfileCard();
      return;
    }
    profileCardUserId.value = userId;
    profileCardAnchor.value = anchor;
  }
  function hideProfileCard() {
    if (!profileCardUserId.value || isProfileCardClosing.value) return;
    isProfileCardClosing.value = true;
    setTimeout(() => {
      profileCardUserId.value = null;
      profileCardAnchor.value = null;
      isProfileCardClosing.value = false;
    }, 200);
  }
  function showImageViewer(images, index = 0) {
    imageViewerImages.value = images;
    imageViewerIndex.value = index;
    isImageViewerOpen.value = true;
  }
  function hideImageViewer() {
    isImageViewerOpen.value = false;
    imageViewerImages.value = [];
    imageViewerIndex.value = 0;
  }
  function toggleSearch(active) {
    isSearchActive.value = active ?? !isSearchActive.value;
  }
  function toggleMaximize() {
    isMaximized.value = !isMaximized.value;
    __vitePreload(async () => { const {settings} = await Promise.resolve().then(() => user);return { settings }},false             ?__VITE_PRELOAD__:void 0).then(({ settings }) => {
      if (settings.value.rememberOpenState) {
        localStorage.setItem("dollars.isMaximized", JSON.stringify(isMaximized.value));
      }
    });
  }
  function setMobileChatView(active) {
    mobileChatViewActive.value = active;
    __vitePreload(async () => { const {settings} = await Promise.resolve().then(() => user);return { settings }},false             ?__VITE_PRELOAD__:void 0).then(({ settings }) => {
      if (settings.value.rememberOpenState) {
        localStorage.setItem("dollars.mobileChatViewActive", JSON.stringify(active));
      }
    });
  }
  let hasInitializedLayout = false;
  function resetLayoutCheck() {
    hasInitializedLayout = false;
  }
  function checkNarrowLayout(width) {
    const wasNarrow = isNarrowLayout.value;
    const isNowNarrow = width < 600 || isMobileViewport.value;
    isNarrowLayout.value = isNowNarrow;
    if (!hasInitializedLayout) {
      hasInitializedLayout = true;
      const savedMobileChatView = localStorage.getItem("dollars.mobileChatViewActive");
      if (savedMobileChatView === null) {
        if (isNowNarrow) {
          mobileChatViewActive.value = true;
        } else {
          mobileChatViewActive.value = false;
        }
      }
      return;
    }
    if (!wasNarrow && isNowNarrow) {
      mobileChatViewActive.value = true;
    } else if (wasNarrow && !isNowNarrow) {
      mobileChatViewActive.value = false;
    }
  }
  function ensureNarrowLayoutChatView(width) {
    const isNowNarrow = width < 600 || isMobileViewport.value;
    isNarrowLayout.value = isNowNarrow;
    if (isNowNarrow && !mobileChatViewActive.value) {
      mobileChatViewActive.value = true;
    }
  }

  const ui = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    checkNarrowLayout,
    contextMenuBmoCode,
    contextMenuImageUrl,
    contextMenuPosition,
    contextMenuTargetId,
    ensureNarrowLayoutChatView,
    hideContextMenu,
    hideImageViewer,
    hideProfileCard,
    hideReactionPicker,
    imageViewerImages,
    imageViewerIndex,
    inputAreaHeight,
    isContextMenuClosing,
    isContextMenuOpen,
    isImageViewerOpen,
    isMaximized,
    isMobileViewport,
    isNarrowLayout,
    isProfileCardClosing,
    isReactionPickerClosing,
    isReactionPickerOpen,
    isSearchActive,
    isSmileyPanelClosing,
    isSmileyPanelOpen,
    mobileChatViewActive,
    profileCardAnchor,
    profileCardUserId,
    reactionPickerPosition,
    resetLayoutCheck,
    setMobileChatView,
    showContextMenu,
    showImageViewer,
    showProfileCard,
    showReactionPicker,
    toggleMaximize,
    toggleSearch,
    toggleSmileyPanel
  }, Symbol.toStringTag, { value: 'Module' }));

  const parseMessages = (data) => Array.isArray(data) ? data : data?.messages || data?.results || [];
  async function fetchRecentMessages(limit = 50) {
    const res = await fetch(`${BACKEND_URL}/api/messages?limit=${limit}`);
    if (!res.ok) return [];
    return parseMessages(await res.json());
  }
  async function fetchHistoryMessages(beforeId, limit = 30) {
    const res = await fetch(`${BACKEND_URL}/api/messages?before_id=${beforeId}&limit=${limit}`);
    if (!res.ok) return [];
    return parseMessages(await res.json());
  }
  async function fetchNewerMessages(afterId, limit = 30) {
    const res = await fetch(`${BACKEND_URL}/api/messages?since_db_id=${afterId}&limit=${limit}`);
    if (!res.ok) return [];
    return parseMessages(await res.json());
  }
  async function getUnreadCount(sinceId, uid) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/messages/unread-count?since_db_id=${sinceId}&uid=${uid}`);
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
    const res = await fetch(`${BACKEND_URL}/api/messages/context/${messageId}?before=${before}&after=${after}&extended=1`);
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
  async function sendMessage$1(content) {
    try {
      const { userInfo } = await __vitePreload(async () => { const { userInfo } = await Promise.resolve().then(() => user);return { userInfo }},false             ?__VITE_PRELOAD__:void 0);
      const formhash = userInfo.value.formhash;
      const params = new URLSearchParams();
      params.append("message", content);
      params.append("formhash", formhash);
      const res = await fetch("/dollars?ajax=1", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: params
      });
      if (res.ok) {
        return { status: true };
      } else {
        return { status: false, error: "Network response was not ok" };
      }
    } catch (e) {
      return { status: false, error: String(e) };
    }
  }
  async function getFirstMessageIdByDate(date) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/messages/by-date?date=${date}&first_id_only=true`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.status ? data.id : null;
    } catch (e) {
      return null;
    }
  }
  async function editMessage(messageId, content) {
    const res = await fetch(`${BACKEND_URL}/api/messages/${messageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders()
      },
      credentials: "include",
      body: JSON.stringify({ content })
    });
    return res.json();
  }
  async function deleteMessage(messageId) {
    const res = await fetch(`${BACKEND_URL}/api/messages/${messageId}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
      credentials: "include"
    });
    return res.json();
  }
  async function toggleReaction(messageId, emoji) {
    const { userInfo } = await __vitePreload(async () => { const { userInfo } = await Promise.resolve().then(() => user);return { userInfo }},false             ?__VITE_PRELOAD__:void 0);
    const res = await fetch(`${BACKEND_URL}/api/messages/${messageId}/reactions`, {
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
    return res.json();
  }
  async function searchMessages(query, offset = 0, limit = 20) {
    const res = await fetch(
      `${BACKEND_URL}/api/search?q=${encodeURIComponent(query)}&offset=${offset}&limit=${limit}`
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
  async function uploadFile(file) {
    const formData = new FormData();
    const isVideo = file.type.startsWith("video/") || file.type.startsWith("audio/");
    const fieldName = isVideo ? "video" : "image";
    const endpoint = isVideo ? `${BACKEND_URL}/api/upload/video` : `${BACKEND_URL}/api/upload`;
    formData.append(fieldName, file);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: getAuthHeaders(),
      credentials: "include",
      body: formData
    });
    const data = await res.json();
    if (data.status && data.imageUrl) {
      data.url = data.imageUrl;
    }
    if (data.status && data.videoUrl) {
      data.url = data.videoUrl;
    }
    if (data.status && data.url && !data.url.startsWith("http")) {
      data.url = `${BACKEND_URL}${data.url}`;
    }
    return data;
  }
  async function checkAuth() {
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
        headers: getAuthHeaders(),
        credentials: "include"
      });
      const data = await res.json();
      const localUid = window.CHOBITS_UID ? String(window.CHOBITS_UID) : null;
      if (data.status && (!localUid || String(data.user.id) === localUid)) {
        return { isLoggedIn: true, user: data.user };
      }
      const cloud = getChiiApp()?.cloud_settings;
      const token = cloud?.getAll()?.dollarsAuthToken;
      if (token) {
        try {
          const loginRes = await fetch(`${BACKEND_URL}/api/auth/token-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
            credentials: "include"
          });
          const loginData = await loginRes.json();
          if (loginData.status) {
            return { isLoggedIn: true, user: loginData.user };
          }
        } catch (tokenErr) {
        }
      }
    } catch (e) {
    }
    return { isLoggedIn: false };
  }
  async function fetchUserProfile(userId) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/users/${userId}`);
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
  async function fetchNotifications(uid) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/notifications?uid=${uid}`);
      const data = await res.json();
      if (data.status && data.notifications) {
        return data.notifications;
      }
    } catch (e) {
    }
    return [];
  }
  async function markNotificationRead(notifId, uid) {
    await fetch(`${BACKEND_URL}/api/notifications/${notifId}/read`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid })
    });
  }
  async function markAllNotificationsRead(uid) {
    await fetch(`${BACKEND_URL}/api/notifications/read-all`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid })
    });
  }
  function performLogin() {
    const BGM_APP_ID = "bgm460268b348b05f082";
    const BGM_CALLBACK_URL = `${BACKEND_URL}/api/auth/callback`;
    const width = 600, height = 700;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    const currentHost = window.location.hostname;
    const authUrl = `https://${currentHost}/oauth/authorize?client_id=${BGM_APP_ID}&response_type=code&redirect_uri=${encodeURIComponent(BGM_CALLBACK_URL)}`;
    const loginWindow = window.open(authUrl, "BangumiLogin", `width=${width},height=${height},top=${top},left=${left}`);
    const messageHandler = (event) => {
      if (event.data && event.data.type === "bgm_login_success") {
        if (event.data.token) {
          const cloud = getChiiApp()?.cloud_settings;
          if (cloud) {
            cloud.update({ dollarsAuthToken: event.data.token });
            cloud.save();
          }
        }
        checkAuth().then((result) => {
          if (result.isLoggedIn) {
            window.location.reload();
          }
        });
        window.removeEventListener("message", messageHandler);
        loginWindow?.close();
      }
    };
    window.addEventListener("message", messageHandler);
  }
  async function performLogout() {
    try {
      await fetch(`${BACKEND_URL}/api/auth/logout`, {
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
  }
  async function lookupUsersByName(usernames) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/users/lookup-by-name`, {
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
  }

  const api = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    checkAuth,
    deleteMessage,
    editMessage,
    fetchHistoryMessages,
    fetchMessageContext,
    fetchNewerMessages,
    fetchNotifications,
    fetchRecentMessages,
    fetchUserProfile,
    getFirstMessageIdByDate,
    getUnreadCount,
    lookupUsersByName,
    markAllNotificationsRead,
    markNotificationRead,
    performLogin,
    performLogout,
    searchMessages,
    sendMessage: sendMessage$1,
    toggleReaction,
    uploadFile
  }, Symbol.toStringTag, { value: 'Module' }));

  const settingsConfig = [
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
    }
  ];
  function applyHomeCardDisplay() {
    const card = document.getElementById("dollars-card");
    if (card) {
      card.style.display = settings.value.showCard ? "" : "none";
    }
  }
  function applyBackgroundPattern() {
    const root = document.getElementById("dollars-chat-root");
    if (root) {
      root.dataset.bgMode = settings.value.backgroundMode;
      root.classList.remove("no-background-pattern");
    }
  }
  function handleRememberOpenStateChange() {
    if (!settings.value.rememberOpenState) {
      localStorage.removeItem("dollars.isChatOpen");
      localStorage.removeItem("dollars.isMaximized");
      localStorage.removeItem("dollars.mobileChatViewActive");
      localStorage.removeItem("dollarsChatPosition");
    } else {
      localStorage.setItem("dollars.isChatOpen", JSON.stringify(isChatOpen.value));
      __vitePreload(async () => { const {isMaximized, mobileChatViewActive} = await Promise.resolve().then(() => ui);return { isMaximized, mobileChatViewActive }},false             ?__VITE_PRELOAD__:void 0).then(({ isMaximized, mobileChatViewActive }) => {
        localStorage.setItem("dollars.isMaximized", JSON.stringify(isMaximized.value));
        localStorage.setItem("dollars.mobileChatViewActive", JSON.stringify(mobileChatViewActive.value));
      }).catch(() => {
      });
    }
  }
  function applyAllSettings() {
    applyHomeCardDisplay();
    applyBackgroundPattern();
  }
  function generateApiConfig() {
    return settingsConfig.map((s) => {
      if (s.type === "auth_control_group") {
        return {
          title: s.label,
          name: "dollars_auth_action",
          type: "radio",
          defaultValue: isLoggedIn.value ? "logged_in" : "logged_out",
          getCurrentValue: () => isLoggedIn.value ? "logged_in" : "logged_out",
          onChange: (value) => {
            if (value === "logged_in") {
              performLogin();
            } else if (value === "logged_out") {
              performLogout();
            }
          },
          options: [
            { value: "logged_in", label: isLoggedIn.value ? `已授权：${userInfo.value.nickname}` : "点击授权" },
            { value: "logged_out", label: isLoggedIn.value ? "撤销授权" : "未授权" }
          ]
        };
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
  function integrateWithNativeSettingsPanel() {
    const apiConfig = generateApiConfig();
    getChiiLib().ukagaka.addPanelTab({
      tab: "dollars_chat_settings",
      label: "Re:Dollars",
      type: "options",
      config: apiConfig
    });
    const settingsBtnHeader = document.getElementById("dollars-settings-btn-header");
    if (settingsBtnHeader) {
      settingsBtnHeader.title = "打开聊天设置";
      settingsBtnHeader.addEventListener("click", (e) => {
        e.stopPropagation();
        getChiiLib().ukagaka.showCustomizePanelWithTab("dollars_chat_settings");
      });
    }
  }
  function openSettingsPanel() {
    getChiiLib().ukagaka.showCustomizePanelWithTab("dollars_chat_settings");
  }

  function ChatHeader() {
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
    const activeConv = conversations.value.find((c) => c.id === activeConversationId.value);
    const isShowingChatView = isNarrowLayout.value && mobileChatViewActive.value;
    let mainTitle = "Re:Dollars";
    let avatarUrl = "https://lsky.ry.mk/i/2025/09/06/68bc5540a8c51.webp";
    let showOnlineStatus = true;
    if (isNarrowLayout.value && !isShowingChatView) {
      mainTitle = "会话列表";
      showOnlineStatus = false;
    } else if (activeConv) {
      mainTitle = activeConv.type === "channel" ? activeConv.title : activeConv.user?.nickname || activeConv.title;
      avatarUrl = activeConv.type === "channel" ? activeConv.avatar : activeConv.user?.avatar || activeConv.avatar;
      showOnlineStatus = activeConv.type === "channel";
    }
    return /* @__PURE__ */ u$2("div", { class: "chat-header", children: [
      /* @__PURE__ */ u$2("div", { class: "chat-header-left-pane", children: [
        /* @__PURE__ */ u$2(
          "button",
          {
            id: "dollars-settings-btn-header",
            class: "header-btn",
            title: "设置",
            onClick: handleSettings,
            style: { display: isShowingChatView ? "none" : "flex" }
          }
        ),
        /* @__PURE__ */ u$2(
          "button",
          {
            id: "dollars-back-btn",
            class: "header-btn",
            title: "返回",
            onClick: handleBack,
            style: { display: isShowingChatView ? "flex" : "none" },
            dangerouslySetInnerHTML: { __html: SVGIcons.arrowLeft }
          }
        )
      ] }),
      /* @__PURE__ */ u$2("div", { class: "title-wrapper", children: [
        (!isNarrowLayout.value || isShowingChatView) && /* @__PURE__ */ u$2(
          "img",
          {
            class: "header-chat-icon",
            src: avatarUrl,
            alt: mainTitle
          }
        ),
        /* @__PURE__ */ u$2("div", { class: "header-text-column", children: [
          /* @__PURE__ */ u$2("span", { class: "header-main-title", children: mainTitle }),
          showOnlineStatus && /* @__PURE__ */ u$2("span", { class: "online-status", children: [
            /* @__PURE__ */ u$2("span", { class: "online-dot" }),
            /* @__PURE__ */ u$2("span", { id: "dollars-online-count", children: onlineCount.value }),
            " 在线"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u$2("div", { class: "header-buttons", children: [
        /* @__PURE__ */ u$2(
          "button",
          {
            id: "dollars-search-btn",
            class: "header-btn",
            title: "搜索",
            onClick: handleSearch
          }
        ),
        /* @__PURE__ */ u$2(
          "button",
          {
            id: "dollars-maximize-btn",
            class: "header-btn maximize-btn",
            title: isMaximized.value ? "还原" : "最大化",
            onClick: handleMaximize
          }
        ),
        /* @__PURE__ */ u$2(
          "button",
          {
            class: "header-btn close-btn",
            title: "关闭",
            onClick: handleClose
          }
        )
      ] })
    ] });
  }

  const isMobile = () => {
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
    const debounced = (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
    debounced.flush = (...args) => {
      clearTimeout(t);
      fn(...args);
    };
    return debounced;
  }
  const calculateImageStyle = (meta) => {
    if (meta?.width && meta?.height) {
      const MAX_IMG_WIDTH = 320;
      const MAX_IMG_HEIGHT = 350;
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
  const generateReactionTooltip = (users) => {
    if (!users || users.length === 0) return "";
    return users.map((u) => {
      const id = u.user_id !== void 0 && u.user_id !== null ? u.user_id : u.id;
      return `<a href="/user/${id}" target="_blank" class="dollars-tooltip-link">${escapeHTML(u.nickname)}</a>`;
    }).join("、");
  };

  function g$1(n,t){for(var e in t)n[e]=t[e];return n}function E$1(n,t){for(var e in n)if("__source"!==e&&!(e in t))return  true;for(var r in t)if("__source"!==r&&n[r]!==t[r])return  true;return  false}function C$1(n,t){var e=t(),r=d$2({t:{__:e,u:t}}),u=r[0].t,o=r[1];return _$2(function(){u.__=e,u.u=t,x$1(u)&&o({t:u});},[n,e,t]),y$2(function(){return x$1(u)&&o({t:u}),n(function(){x$1(u)&&o({t:u});})},[n]),e}function x$1(n){var t,e,r=n.u,u=n.__;try{var o=r();return !((t=u)===(e=o)&&(0!==t||1/t==1/e)||t!=t&&e!=e)}catch(n){return  true}}function R$1(n){n();}function w(n){return n}function k$1(){return [false,R$1]}var I$1=_$2;function N$1(n,t){this.props=n,this.context=t;}function M$1(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return !r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:E$1(this.props,n)}function u(e){return this.shouldComponentUpdate=r,_$3(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=true,u.__f=true,u.type=n,u}(N$1.prototype=new x$3).isPureReactComponent=true,N$1.prototype.shouldComponentUpdate=function(n,t){return E$1(this.props,n)||E$1(this.state,t)};var T$1=l$3.__b;l$3.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),T$1&&T$1(n);};var A$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function D$1(n){function t(t){var e=g$1({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=A$1,t.render=n,t.prototype.isReactComponent=t.__f=true,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var L$1=function(n,t){return null==n?null:H$2(H$2(n).map(t))},O$1={map:L$1,forEach:L$1,count:function(n){return n?H$2(n).length:0},only:function(n){var t=H$2(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:H$2},F$1=l$3.__e;l$3.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);F$1(n,t,e,r);};var U$1=l$3.unmount;function V$1(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g$1({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c.__e=true,n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return V$1(n,t,e)})),n}function W$1(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return W$1(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=true,n.__c.__P=e)),n}function P$1(){this.__u=0,this.o=null,this.__b=null;}function j$1(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function z$1(n){var e,r,u,o=null;function i(i){if(e||(e=n()).then(function(n){n&&(o=n.default||n),u=true;},function(n){r=n,u=true;}),r)throw r;if(!u)throw e;return o?_$3(o,i):null}return i.displayName="Lazy",i.__f=true,i}function B$1(){this.i=null,this.l=null;}l$3.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),U$1&&U$1(n);},(P$1.prototype=new x$3).__c=function(n,t){var e=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(e);var u=j$1(r.__v),o=false,i=function(){o||(o=true,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=W$1(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},P$1.prototype.componentWillUnmount=function(){this.o=[];},P$1.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=V$1(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&_$3(k$3,null,n.fallback);return i&&(i.__u&=-33),[_$3(k$3,null,e.__a?null:n.children),i]};var H$1=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2];}};function Z(n){return this.getChildContext=function(){return n.context},n.children}function Y$1(n){var e=this,r=n.h;if(e.componentWillUnmount=function(){G$2(null,e.v),e.v=null,e.h=null;},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var u=e.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:u.__m},contains:function(){return  true},insertBefore:function(n,t){this.childNodes.push(n),e.h.insertBefore(n,t);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.h.removeChild(n);}};}G$2(_$3(Z,{context:e.context},n.__v),e.v);}function $(n,e){var r=_$3(Y$1,{__v:n,h:e});return r.containerInfo=e,r}(B$1.prototype=new x$3).__a=function(n){var t=this,e=j$1(t.__v),r=t.l.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),H$1(t,n,r)):u();};e?e(o):o();}},B$1.prototype.render=function(n){this.i=null,this.l=new Map;var t=H$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},B$1.prototype.componentDidUpdate=B$1.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(t,e){H$1(n,e,t);});};var q$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,G$1=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,J$1=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,K$1=/[A-Z0-9]/g,Q="undefined"!=typeof document,X$1=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function nn(n,t,e){return null==t.__k&&(t.textContent=""),G$2(n,t),"function"==typeof e&&e(),n?n.__c:null}function tn(n,t,e){return J$2(n,t),"function"==typeof e&&e(),n?n.__c:null}x$3.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(x$3.prototype,t,{configurable:true,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:true,writable:true,value:n});}});});var en=l$3.event;function rn(){}function un(){return this.cancelBubble}function on(){return this.defaultPrevented}l$3.event=function(n){return en&&(n=en(n)),n.persist=rn,n.isPropagationStopped=un,n.isDefaultPrevented=on,n.nativeEvent=n};var ln,cn={enumerable:false,configurable:true,get:function(){return this.class}},fn=l$3.vnode;l$3.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1===e.indexOf("-");for(var i in t){var l=t[i];if(!("value"===i&&"defaultValue"in t&&null==l||Q&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var c=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&true===l?l="":"translate"===c&&"no"===l?l=false:"o"===c[0]&&"n"===c[1]?"ondoubleclick"===c?i="ondblclick":"onchange"!==c||"input"!==e&&"textarea"!==e||X$1(t.type)?"onfocus"===c?i="onfocusin":"onblur"===c?i="onfocusout":J$1.test(i)&&(i=c):c=i="oninput":o&&G$1.test(i)?i=i.replace(K$1,"-$&").toLowerCase():null===l&&(l=void 0),"oninput"===c&&u[i=c]&&(i="oninputCapture"),u[i]=l;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=H$2(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=H$2(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",cn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=q$1,fn&&fn(n);};var an=l$3.__r;l$3.__r=function(n){an&&an(n),ln=n.__c;};var sn=l$3.diffed;l$3.diffed=function(n){sn&&sn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),ln=null;};var hn={ReactCurrentDispatcher:{current:{readContext:function(n){return ln.__n[n.__c].props.value},useCallback:q$2,useContext:x$2,useDebugValue:P$2,useDeferredValue:w,useEffect:y$2,useId:g$3,useImperativeHandle:F$2,useInsertionEffect:I$1,useLayoutEffect:_$2,useMemo:T$2,useReducer:h$3,useRef:A$2,useState:d$2,useSyncExternalStore:C$1,useTransition:k$1}}};function dn(n){return _$3.bind(null,n)}function mn(n){return !!n&&n.$$typeof===q$1}function pn(n){return mn(n)&&n.type===k$3}function yn(n){return !!n&&!!n.displayName&&("string"==typeof n.displayName||n.displayName instanceof String)&&n.displayName.startsWith("Memo(")}function _n(n){return mn(n)?K$2.apply(null,arguments):n}function bn(n){return !!n.__k&&(G$2(null,n),true)}function Sn(n){return n&&(n.base||1===n.nodeType&&n)||null}var gn=function(n,t){return n(t)},En=function(n,t){return n(t)},Cn=k$3,xn=mn,Rn={useState:d$2,useId:g$3,useReducer:h$3,useEffect:y$2,useLayoutEffect:_$2,useInsertionEffect:I$1,useTransition:k$1,useDeferredValue:w,useSyncExternalStore:C$1,startTransition:R$1,useRef:A$2,useImperativeHandle:F$2,useMemo:T$2,useCallback:q$2,useContext:x$2,useDebugValue:P$2,version:"18.3.1",Children:O$1,render:nn,hydrate:tn,unmountComponentAtNode:bn,createPortal:$,createElement:_$3,createContext:Q$1,createFactory:dn,cloneElement:_n,createRef:b$2,Fragment:k$3,isValidElement:mn,isElement:xn,isFragment:pn,isMemo:yn,findDOMNode:Sn,Component:x$3,PureComponent:N$1,memo:M$1,forwardRef:D$1,flushSync:En,unstable_batchedUpdates:gn,StrictMode:Cn,Suspense:P$1,SuspenseList:B$1,lazy:z$1,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:hn};

  const DollarsBlurHash = (() => {
    const digit = new Uint8Array(128);
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split("").forEach((c, i) => digit[c.charCodeAt(0)] = i);
    const decode83 = (str, s, e) => {
      let v = 0;
      while (s < e) v = v * 83 + digit[str.charCodeAt(s++)];
      return v;
    };
    const sRGB = (v) => v > 10.31475 ? Math.pow(v / 269.025 + 0.052132, 2.4) : v / 3294.6;
    const lRGB = (v) => ~~(v > 1227e-8 ? 269.025 * Math.pow(v, 0.416) - 13.025 : v * 3294.6 + 1);
    return {
      decode: (hash, w, h, punch = 1) => {
        const size = decode83(hash, 0, 1), numX = size % 9 + 1, numY = ~~(size / 9) + 1;
        const maxVal = (decode83(hash, 1, 2) + 1) / 13446 * punch;
        const colors = new Float64Array(numX * numY * 3);
        let val = decode83(hash, 2, 6);
        [0, 1, 2].forEach((i) => colors[i] = sRGB(val >> 16 - i * 8 & 255));
        for (let i = 1; i < numX * numY; i++) {
          val = decode83(hash, 4 + i * 2, 6 + i * 2);
          [0, 1, 2].forEach((j) => colors[i * 3 + j] = ((i2) => (i2 < 0 ? -1 : 1) * i2 * i2)(~~(val / Math.pow(19, 2 - j)) % 19 - 9) * maxVal);
        }
        const pixels = new Uint8ClampedArray(w * h * 4);
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            let r = 0, g = 0, b = 0;
            for (let j = 0; j < numY; j++) {
              for (let i = 0; i < numX; i++) {
                const basis = Math.cos(Math.PI * x * i / w) * Math.cos(Math.PI * y * j / h);
                const c = (i + j * numX) * 3;
                r += colors[c] * basis;
                g += colors[c + 1] * basis;
                b += colors[c + 2] * basis;
              }
            }
            const p = 4 * x + y * w * 4;
            pixels[p] = lRGB(r);
            pixels[p + 1] = lRGB(g);
            pixels[p + 2] = lRGB(b);
            pixels[p + 3] = 255;
          }
        }
        return pixels;
      }
    };
  })();

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
    { name: "BMO" },
    { name: "收藏" }
  ];
  const smileyRangesWithoutFavorites = smileyRanges.filter((r) => r.name !== "收藏");
  function getSmileyUrl(code) {
    let id;
    if (typeof code === "string") {
      const match = code.match(/\(bgm(\d+)\)/);
      if (!match) return null;
      id = parseInt(match[1], 10);
    } else {
      id = code;
    }
    const range = smileyRanges.find((r) => r.start && r.end && id >= r.start && id <= r.end);
    if (range && range.path) {
      return range.path(id);
    }
    return null;
  }
  function generateSmileyCodes(groupName) {
    const range = smileyRanges.find((r) => r.name === groupName);
    if (!range || !range.start || !range.end) return [];
    const codes = [];
    for (let i = range.start; i <= range.end; i++) {
      codes.push(`(bgm${i})`);
    }
    return codes;
  }
  const SMILIES = smileyRanges.filter((r) => r.start && r.end && r.path);

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
    if (!data) return "";
    const normalizedUrl = normalizeBangumiUrl(originalUrl);
    const title = escapeHTML(data.title || originalUrl);
    const desc = data.description ? escapeHTML(data.description) : "";
    const domain = originalUrl.includes("//") ? originalUrl.split("/")[2].replace(/^www\\./, "") : "";
    let coverHTML = "";
    if (data.image) {
      coverHTML = `<div class="cover"><img src="${escapeHTML(data.image)}" loading="lazy" referrerPolicy="no-referrer"></div>`;
    } else {
      coverHTML = `<div class="cover"><div style="font-size: 32px; text-align: center; line-height: 80px; color: var(--dollars-text-placeholder);">🔗</div></div>`;
    }
    return `
        <a href="${escapeHTML(normalizedUrl)}" target="_blank" rel="noopener noreferrer" class="dollars-preview-card" data-entity-type="generic">
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
    const codeBlocks = [];
    html = html.replace(/\[code\]([\s\S]*?)\[\/code\]/gi, (_, content) => {
      codeBlocks.push(content);
      return `\0CODE_BLOCK_${codeBlocks.length - 1}\0`;
    });
    html = html.replace(/(^|\s)(#[\p{L}\p{N}_]{1,50})(?=$|\s|[.,!?;:)])/gu, '$1<span class="chat-tag">$2</span>');
    const bbMap = { b: "strong", i: "em", u: "u", s: "s" };
    html = html.replace(
      /\[(b|i|u|s)\]([\s\S]+?)\[\/\1\]/gi,
      (_, tag, content) => `<${bbMap[tag.toLowerCase()]}>${processBBCode(content, imageMeta, { ...options, isInsideQuote: true }, linkPreviews)}</${bbMap[tag.toLowerCase()]}>`
    );
    html = html.replace(/\[mask\]([\s\S]+?)\[\/mask\]/gi, '<span class="text_mask"><span class="inner">$1</span></span>');
    html = html.replace(/<span class="text_mask"><span class="inner">\[img\]([\s\S]+?)\[\/img\]<\/span><\/span>/gi, (m, src) => {
      const cleanSrc = src.replace(/<[^>]*>?/gm, "").trim();
      if (!/^https?:\/\/[^\s<>"']+$/i.test(cleanSrc)) return escapeHTML(m);
      if (options.isInsideQuote) {
        return `<span class="text_mask"><span class="inner"><a href="${cleanSrc}" target="_blank">[图片]</a></span></span>`;
      }
      const meta = imageMeta[cleanSrc];
      const imageStyle = calculateImageStyle(meta);
      const hasBlurhash = meta && (meta.placeholder || meta.blurhash);
      const blurhashCanvasHTML = hasBlurhash ? `<canvas class="blurhash-canvas" data-blurhash="${meta.placeholder || meta.blurhash}"></canvas>` : `<div style="background-color: var(--bgm-bg-odd); width:100%; height:100%;"></div>`;
      return `<div class="image-container image-placeholder image-masked" style="${imageStyle}" data-iw="${meta?.width || ""}" data-ih="${meta?.height || ""}" data-src="${cleanSrc}">
            ${blurhashCanvasHTML}
            <div class="image-load-hint">显示图片</div>
        </div>`;
    });
    html = html.replace(/\[emoji\]([\s\S]+?)\[\/emoji\]/gi, (m, src) => {
      if (!/^https?:\/\/[^\s<>"']+$/i.test(src)) return escapeHTML(m);
      const isCommunityEmoji = src.includes("/emojis/");
      const className = isCommunityEmoji ? "smiley" : "custom-emoji";
      return `<img src="${src}" class="${className}" alt="emoji" loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer">`;
    });
    html = html.replace(/\[audio\]([\s\S]+?)\[\/audio\]/gi, (m, src) => {
      const cleanSrc = src.replace(/<[^>]*>?/gm, "").trim();
      if (!/^https?:\/\/[^\s<>"']+$/i.test(cleanSrc)) return escapeHTML(m);
      if (options.isInsideQuote) {
        return `<a href="${cleanSrc}" target="_blank">[音频]</a>`;
      }
      return `<div class="audio-player-container" style="margin: 5px 0;"><audio controls preload="metadata" style="max-width: 100%; width: 300px; border-radius: 20px;"><source src="${cleanSrc}">您的浏览器不支持音频播放。</audio></div>`;
    });
    html = html.replace(/\[video\]([\s\S]+?)\[\/video\]/gi, (m, src) => {
      const cleanSrc = src.replace(/<[^>]*>?/gm, "").trim();
      if (!/^https?:\/\/[^\s<>"']+$/i.test(cleanSrc)) return escapeHTML(m);
      if (options.isInsideQuote) {
        return `<a href="${cleanSrc}" target="_blank">[视频]</a>`;
      }
      return `<div class="video-player-container" style="max-width: 100%; margin: 5px 0;"><video controls preload="metadata" style="max-width: 100%; max-height: 400px; border-radius: 8px; background: #000;"><source src="${cleanSrc}" type="video/mp4"><source src="${cleanSrc}" type="video/webm">您的浏览器不支持视频播放。</video></div>`;
    });
    html = html.replace(/\[img\]([\s\S]+?)\[\/img\]/gi, (m, src) => {
      const cleanSrc = src.replace(/<[^>]*>?/gm, "").trim();
      if (!/^https?:\/\/[^\s<>"']+$/i.test(cleanSrc)) return escapeHTML(m);
      if (options.isInsideQuote) {
        return `<a href="${cleanSrc}" target="_blank">[图片]</a>`;
      }
      const meta = imageMeta[cleanSrc];
      const imageStyle = calculateImageStyle(meta);
      const hasBlurhash = meta && (meta.placeholder || meta.blurhash);
      const shouldLoadImage = settings.value.loadImages;
      const blurhashCanvasHTML = hasBlurhash ? `<canvas class="blurhash-canvas" data-blurhash="${meta.placeholder || meta.blurhash}"></canvas>` : `<div style="background-color: var(--bgm-bg-odd); width:100%; height:100%;"></div>`;
      if (!shouldLoadImage) {
        return `<div class="image-container image-placeholder" style="${imageStyle}" data-iw="${meta?.width || ""}" data-ih="${meta?.height || ""}" data-src="${cleanSrc}">
                ${blurhashCanvasHTML}
                <div class="image-load-hint">点击加载图片</div>
            </div>`;
      }
      return `<div class="image-container" style="${imageStyle}" data-iw="${meta?.width || ""}" data-ih="${meta?.height || ""}">
            ${blurhashCanvasHTML}
            <img src="${cleanSrc}" class="full-image" alt="image" loading="lazy" decoding="async" referrerpolicy="no-referrer">
        </div>`;
    });
    html = html.replace(/\[user=(.+?)\]([\s\S]+?)\[\/user\]/gi, '<a href="/user/$1" target="_blank" class="user-mention">@$2</a>');
    html = html.replace(/\(bgm(\d+)\)/g, (match, p1, offset, str) => {
      const before = str.slice(0, offset);
      if (before.lastIndexOf("<") > before.lastIndexOf(">")) return match;
      const num = parseInt(p1, 10);
      const range = SMILIES.find((r) => num >= r.start && num <= r.end);
      if (range && range.path) {
        const src = range.path(num);
        return `<img src="${src}" class="smiley" alt="${match}" width="21" height="21">`;
      }
      return match;
    });
    html = html.replace(/\((bmo(?:C|_)[a-zA-Z0-9_-]+)\)/g, (match, _code, offset, str) => {
      const before = str.slice(0, offset);
      if (before.lastIndexOf("<") > before.lastIndexOf(">")) return match;
      return `<span class="bmo" data-code="${match}"></span>`;
    });
    html = html.replace(/\[url=([^\]]+?)\]([\s\S]+?)\[\/url\]/gi, (_, url, label) => {
      const normalizedUrl = normalizeBangumiUrl(url);
      const linkHtml = `<a href="${escapeHTML(normalizedUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
      if (!options.isInsideQuote && settings.value.linkPreview && linkPreviews && linkPreviews[url] && options.previewsCollector) {
        const previewHtml = generatePreviewCardHTML(linkPreviews[url], url);
        options.previewsCollector.push(previewHtml);
      }
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
      if (!options.isInsideQuote && settings.value.linkPreview && linkPreviews && linkPreviews[url] && options.previewsCollector) {
        const previewHtml = generatePreviewCardHTML(linkPreviews[url], url);
        options.previewsCollector.push(previewHtml);
      }
      return linkHtml;
    });
    html = html.replace(/(<\/blockquote>)<br\s*\/?>/gi, "$1");
    html = html.replace(/\n/g, "<br>");
    codeBlocks.forEach((content, i) => {
      html = html.replace(`\0CODE_BLOCK_${i}\0`, `<div class="codeHighlight"><pre>${escapeHTML(content)}</pre></div>`);
    });
    return html;
  }
  function renderReplyQuote(details, replyToId) {
    const content = stripQuotes(details.content).substring(0, 80);
    const avatarSrc = getAvatarUrl(details.avatar, "s");
    const imageHTML = details.firstImage ? `<img src="${details.firstImage}" class="quote-thumbnail" loading="lazy">` : "";
    const avatarHTML = details.firstImage ? "" : `<img src="${avatarSrc}" class="quote-avatar" loading="lazy">`;
    return `<blockquote class="chat-quote" data-jump-to-id="${replyToId}" title="点击跳转到原文">${imageHTML}<div class="quote-text-wrapper"><div class="quote-header">${avatarHTML}<span class="quote-nickname">${escapeHTML(details.nickname)}</span></div><div class="quote-content">${escapeHTML(content)}${details.content.length > 80 ? "..." : ""}</div></div></blockquote>`;
  }
  function stripQuotes(text) {
    return (text || "").replace(/\[quote(?:=\d+)?\][\s\S]*?\[\/quote\]/gi, "").trim();
  }

  function useLongPress({ threshold = 500, onLongPress, onClick }) {
    const timerRef = A$2(null);
    const isLongPressRef = A$2(false);
    const startXRef = A$2(0);
    const startYRef = A$2(0);
    const handledRef = A$2(false);
    const start = q$2((e) => {
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
    const clear = q$2(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }, []);
    const move = q$2((e) => {
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
    const end = q$2((e) => {
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
      onMouseLeave: (e) => clear(),
      onTouchStart: (e) => {
        e.stopPropagation();
        start(e);
      },
      onTouchMove: (e) => move(e),
      onTouchEnd: (e) => end(e)
    };
  }

  function UserAvatar({ uid, src, nickname, className = "" }) {
    const isOnline = w$1(() => {
      const uidStr = String(uid);
      return uidStr === "0" || onlineUsers.value.has(uidStr);
    });
    const handleShortClick = (e) => {
      if (e.cancelable && e.type !== "click") {
        e.preventDefault();
      }
      e.stopPropagation();
      if (uid === 0) return;
      showProfileCard(String(uid), e.target);
    };
    const handleLongPress = (e) => {
      e.stopPropagation();
      if (uid === 0) return;
      pendingMention.value = { uid: String(uid), nickname };
      if (navigator.vibrate) navigator.vibrate(50);
    };
    const longPressProps = useLongPress({
      onLongPress: handleLongPress,
      onClick: handleShortClick,
      threshold: 500
    });
    return /* @__PURE__ */ u$2(
      "img",
      {
        class: `avatar ${isOnline.value ? "online" : ""} ${className}`,
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
  }

  const notifications = d$1([]);
  const notificationCount = w$1(() => notifications.value.length);
  const dockIconFlashing = d$1(false);
  async function loadNotifications() {
    if (!userInfo.value.id) return;
    try {
      const data = await fetchNotifications(userInfo.value.id);
      if (Array.isArray(data)) {
        const existingIds = new Set(notifications.value.map((n) => n.id));
        const newNotifs = data.filter((n) => !existingIds.has(n.id));
        notifications.value = [...newNotifs.reverse(), ...notifications.value];
        updateUnreadJumpList();
        if (settings.value.notificationType === "simple" && notifications.value.length > 0) {
          dockIconFlashing.value = true;
        }
      }
    } catch (e) {
    }
  }
  function addNotification(n) {
    if (notifications.value.some((existing) => existing.id === n.id)) return;
    notifications.value = [n, ...notifications.value];
    updateUnreadJumpList();
    if (settings.value.notificationType === "simple") {
      dockIconFlashing.value = true;
    }
  }
  function removeNotification(id) {
    notifications.value = notifications.value.filter((n) => n.id !== id);
    updateUnreadJumpList();
  }
  function clearAllNotifications() {
    notifications.value = [];
    unreadJumpList.value = [];
    dockIconFlashing.value = false;
  }
  function stopDockFlashing() {
    dockIconFlashing.value = false;
  }
  function updateUnreadJumpList() {
    unreadJumpList.value = notifications.value.map((n) => {
      const id = n.message_id || n.message?.id;
      return Number(id);
    }).filter((id) => !isNaN(id) && id > 0).sort((a, b) => a - b);
  }
  function markMessageAsSeenIfNotified(messageId) {
    const notif = notifications.value.find((n) => {
      const nMsgId = Number(n.message_id || n.message?.id);
      return nMsgId === messageId;
    });
    if (!notif) return;
    removeNotification(notif.id);
    if (userInfo.value.id) {
      markNotificationRead(notif.id, userInfo.value.id).catch(() => {
      });
    }
  }
  function NotificationManager() {
    y$2(() => {
    }, []);
    const handleMarkRead = q$2(async (notif) => {
      removeNotification(notif.id);
      if (userInfo.value.id) {
        try {
          await markNotificationRead(notif.id, userInfo.value.id);
        } catch (e) {
        }
      }
    }, []);
    const handleView = q$2(async (notif) => {
      handleMarkRead(notif);
      toggleChat(true);
      const messageId = notif.message_id || notif.message?.id;
      if (messageId) {
        pendingJumpToMessage.value = messageId;
      }
    }, [handleMarkRead]);
    const handleMarkAllRead = q$2(async () => {
      clearAllNotifications();
      if (userInfo.value.id) {
        try {
          await markAllNotificationsRead(userInfo.value.id);
        } catch (e) {
        }
      }
    }, []);
    const count = notificationCount.value;
    if (settings.value.notificationType === "simple") {
      return null;
    }
    if (count === 0) {
      return null;
    }
    return /* @__PURE__ */ u$2("div", { id: "unified-notifier", class: count > 0 ? "show" : "", children: [
      /* @__PURE__ */ u$2("div", { class: "un-header", children: [
        /* @__PURE__ */ u$2("span", { children: [
          "通知 (",
          /* @__PURE__ */ u$2("span", { class: "un-count", children: count }),
          ")"
        ] }),
        /* @__PURE__ */ u$2(
          "a",
          {
            href: "#",
            class: "un-clear-all",
            onClick: (e) => {
              e.preventDefault();
              handleMarkAllRead();
            },
            children: "全部已读"
          }
        )
      ] }),
      /* @__PURE__ */ u$2("div", { class: "un-body", children: /* @__PURE__ */ u$2("ul", { children: notifications.value.map((notif) => /* @__PURE__ */ u$2(
        NotificationItem,
        {
          notification: notif,
          onView: () => handleView(notif),
          onDismiss: () => handleMarkRead(notif)
        },
        notif.id
      )) }) })
    ] });
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
    return /* @__PURE__ */ u$2(
      "li",
      {
        class: "un-item",
        id: `un-item-${notification.id}`,
        "data-notif-id": notification.id,
        "data-message-id": notification.message_id || notification.message?.id,
        children: [
          /* @__PURE__ */ u$2(
            "span",
            {
              class: "avatarNeue avatarReSize40",
              style: { backgroundImage: `url('${avatarSrc}')` }
            }
          ),
          /* @__PURE__ */ u$2("div", { class: "content", children: [
            /* @__PURE__ */ u$2("strong", { class: "un-widget-title", children: [
              escapeHTML(nickname),
              " ",
              /* @__PURE__ */ u$2("span", { style: { fontWeight: "normal", color: "#999", fontSize: "11px" }, children: typeLabel })
            ] }),
            /* @__PURE__ */ u$2("span", { class: "un-widget-message", children: escapeHTML(text) }),
            /* @__PURE__ */ u$2("div", { class: "actions", children: [
              /* @__PURE__ */ u$2(
                "a",
                {
                  href: "#",
                  class: "un-action-btn btnRedSmall ll",
                  onClick: (e) => {
                    e.preventDefault();
                    onView();
                  },
                  children: /* @__PURE__ */ u$2("span", { children: "查看" })
                }
              ),
              /* @__PURE__ */ u$2(
                "a",
                {
                  href: "#",
                  class: "un-action-btn btnGraySmall ll",
                  style: { marginLeft: "6px" },
                  onClick: (e) => {
                    e.preventDefault();
                    onDismiss();
                  },
                  children: /* @__PURE__ */ u$2("span", { children: "忽略" })
                }
              )
            ] })
          ] })
        ]
      }
    );
  }

  function useSwipeToReply({ messageId, onReply, elementRef }) {
    const swipeState = A$2({
      startX: 0,
      startY: 0,
      currentTranslate: 0,
      isSwiping: false,
      startTime: 0
    });
    const handleTouchStart = q$2((e) => {
      if (e.touches.length !== 1) return;
      if (e.target.closest(".reaction-item, button")) return;
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
    const handleTouchMove = q$2((e) => {
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
    const handleTouchEnd = q$2((e) => {
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
        const isImage = target.tagName === "IMG" || target.closest(".full-image");
        const isImagePlaceholder = target.closest(".image-placeholder");
        const isLink = target.closest("a");
        const isQuote = target.closest(".chat-quote[data-jump-to-id]");
        const isAvatar = target.closest(".avatar");
        const isMask = target.closest(".text_mask") && !target.closest(".image-masked");
        const isTag = target.closest(".chat-tag");
        const isButton = target.closest("button");
        const isVideo = target.tagName === "VIDEO" || target.closest(".video-container") || target.closest("video");
        if (!isImage && !isImagePlaceholder && !isLink && !isQuote && !isAvatar && !isMask && !isTag && !isButton && !isVideo) {
          if (isContextMenuOpen.peek()) return;
          if (isSmileyPanelOpen.peek() || profileCardUserId.peek()) return;
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
  }

  function MessageReactions({ reactions, messageId }) {
    if (!reactions || reactions.length === 0) return null;
    const grouped = reactions.reduce((acc, r) => {
      if (!acc[r.emoji]) acc[r.emoji] = [];
      acc[r.emoji].push(r);
      return acc;
    }, {});
    return /* @__PURE__ */ u$2("div", { class: "reactions-container likes_grid", children: Object.entries(grouped).map(([emoji, users]) => /* @__PURE__ */ u$2(ReactionItem, { emoji, users, messageId }, emoji)) });
  }
  const MAX_AVATARS_SHOWN = 5;
  function ReactionItem({ emoji, users, messageId }) {
    const url = getSmileyUrl(emoji);
    const itemRef = A$2(null);
    const isBmo = emoji.startsWith("(bmo");
    const isSelected = users.some((u) => String(u.user_id) === String(userInfo.peek().id));
    const usersWithAvatar = users.filter((u) => u.avatar);
    const anonymousCount = users.length - usersWithAvatar.length;
    const avatarsToShow = usersWithAvatar.slice(0, MAX_AVATARS_SHOWN);
    const extraAvatarCount = usersWithAvatar.length - MAX_AVATARS_SHOWN;
    const extraCount = Math.max(0, extraAvatarCount) + anonymousCount;
    y$2(() => {
      const el = itemRef.current;
      if (!el) return;
      const tooltipHtml = generateReactionTooltip(users);
      el.setAttribute("data-original-title", tooltipHtml);
      const $ = window.$;
      if (typeof $ !== "undefined" && typeof $.fn.tooltip === "function") {
        try {
          const $el = $(el);
          try {
            $el.tooltip("dispose");
          } catch (e) {
          }
          try {
            $el.tooltip("destroy");
          } catch (e) {
          }
          $el.tooltip({
            container: "body",
            html: true,
            placement: "top",
            animation: true,
            trigger: "manual",
            template: '<div class="tooltip dollars-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
          });
          let hideTimeout;
          const scheduleHide = () => {
            hideTimeout = setTimeout(() => {
              $el.tooltip("hide");
            }, 300);
          };
          const mouseEnterHandler = () => {
            clearTimeout(hideTimeout);
            $el.tooltip("show");
            const tooltipData = $el.data("tooltip") || $el.data("bs.tooltip");
            if (tooltipData) {
              const $tip = tooltipData.$tip || (typeof tooltipData.tip === "function" ? $(tooltipData.tip()) : null);
              if ($tip) {
                $tip.off("mouseenter.dollars mouseleave.dollars");
                $tip.on("mouseenter.dollars", () => clearTimeout(hideTimeout));
                $tip.on("mouseleave.dollars", () => scheduleHide());
              }
            }
          };
          const mouseLeaveHandler = () => {
            scheduleHide();
          };
          $el.on("mouseenter", mouseEnterHandler);
          $el.on("mouseleave", mouseLeaveHandler);
          return () => {
            $el.off("mouseenter", mouseEnterHandler);
            $el.off("mouseleave", mouseLeaveHandler);
            try {
              $el.tooltip("hide");
            } catch (e) {
            }
          };
        } catch (e) {
        }
      }
    }, [users, isBmo]);
    const handleToggle = async (e) => {
      e.stopPropagation();
      await toggleReaction(messageId, emoji);
    };
    return /* @__PURE__ */ u$2(
      "div",
      {
        ref: itemRef,
        class: `reaction-item item ${isSelected ? "selected" : ""}`,
        "data-emoji": emoji,
        "data-toggle": "tooltip",
        title: "",
        onClick: handleToggle,
        children: [
          /* @__PURE__ */ u$2(
            "span",
            {
              class: "emoji",
              style: url ? { backgroundImage: `url('${url}')` } : void 0,
              children: [
                !url && !isBmo && emoji,
                isBmo && /* @__PURE__ */ u$2("span", { class: "bmo", "data-code": emoji })
              ]
            }
          ),
          avatarsToShow.length > 0 && /* @__PURE__ */ u$2("span", { class: "reaction-avatars", children: avatarsToShow.map((u, i) => /* @__PURE__ */ u$2(
            "img",
            {
              class: "reaction-avatar",
              src: getAvatarUrl(u.avatar, "s"),
              alt: u.nickname,
              style: { zIndex: MAX_AVATARS_SHOWN - i }
            },
            u.user_id
          )) }),
          avatarsToShow.length === 0 ? /* @__PURE__ */ u$2("span", { class: "num", children: users.length }) : extraCount > 0 ? /* @__PURE__ */ u$2("span", { class: "num extra", children: [
            "+",
            extraCount
          ] }) : null
        ]
      }
    );
  }

  function arePropsEqual(prev, next) {
    const prevKey = prev.message.stableKey || prev.message.id;
    const nextKey = next.message.stableKey || next.message.id;
    return prevKey === nextKey && prev.message.message === next.message.message && prev.message.is_deleted === next.message.is_deleted && prev.message.edited_at === next.message.edited_at && prev.message.reactions === next.message.reactions && prev.message.link_previews === next.message.link_previews && prev.message.image_meta === next.message.image_meta && prev.message.state === next.message.state && prev.isSelf === next.isSelf && prev.isGrouped === next.isGrouped && prev.isGroupedWithNext === next.isGroupedWithNext;
  }
  const COLLAPSE_THRESHOLD = 500;
  const MessageItem = M$1(({ message, isSelf, isGrouped, isGroupedWithNext }) => {
    const messageRef = A$2(null);
    const [isExpanded, setIsExpanded] = d$2(false);
    const messageId = message.id;
    const messageText = message.message;
    const isDeleted = message.is_deleted;
    const editedAt = message.edited_at;
    const replyToId = message.reply_to_id;
    const replyDetails = message.reply_details;
    const imageMeta = message.image_meta;
    const linkPreviews = message.link_previews;
    const content = T$2(() => {
      if (isDeleted) {
        return '<div class="text-content deleted">此消息已撤回</div>';
      }
      const previews = [];
      let html = processBBCode(
        escapeHTML(messageText),
        imageMeta || {},
        {
          replyToId,
          replyDetails,
          previewsCollector: previews
        },
        linkPreviews || {}
      );
      if (replyToId && replyDetails) {
        html = renderReplyQuote(replyDetails, replyToId) + html;
      }
      if (previews.length > 0) {
        html += '<div class="message-previews">' + previews.join("") + "</div>";
      }
      return html;
    }, [messageId, messageText, isDeleted, replyToId, replyDetails, imageMeta, linkPreviews, settings.value.linkPreview, settings.value.loadImages]);
    y$2(() => {
      const el = messageRef.current;
      if (!el) return;
      let hasRendered = false;
      const handleVisibility = () => {
        if (hasRendered) return;
        hasRendered = true;
        markMessageAsSeenIfNotified(messageId);
        const placeholders = el.querySelectorAll(".blurhash-canvas:not(.is-rendered)");
        placeholders.forEach((canvas) => {
          const canvasEl = canvas;
          const blurhash = canvasEl.dataset.blurhash;
          if (!blurhash) return;
          canvasEl.classList.add("is-rendered");
          try {
            const wrapper = canvasEl.closest(".image-container, .image-placeholder");
            const rect = wrapper ? wrapper.getBoundingClientRect() : null;
            const targetW = Math.max(1, Math.round(rect?.width || 32));
            const targetH = Math.max(1, Math.round(rect?.height || 32));
            const srcW = 32, srcH = 32;
            const pixels = DollarsBlurHash.decode(blurhash, srcW, srcH);
            const tmp = document.createElement("canvas");
            tmp.width = srcW;
            tmp.height = srcH;
            const ctx = tmp.getContext("2d");
            if (ctx) {
              ctx.putImageData(new ImageData(pixels, srcW, srcH), 0, 0);
              const destCtx = canvasEl.getContext("2d");
              if (destCtx) {
                canvasEl.width = targetW;
                canvasEl.height = targetH;
                destCtx.imageSmoothingEnabled = true;
                destCtx.imageSmoothingQuality = "high";
                destCtx.drawImage(tmp, 0, 0, srcW, srcH, 0, 0, targetW, targetH);
              }
            }
          } catch (e) {
            canvasEl.style.backgroundColor = "var(--dollars-bg)";
          }
        });
        const imgs = el.querySelectorAll(".full-image");
        imgs.forEach((img) => {
          const image = img;
          const container = image.closest(".image-container");
          const handleLoad = () => {
            image.classList.add("is-loaded");
            if (container) container.classList.add("is-loaded");
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
    y$2(() => {
      const el = messageRef.current;
      if (!el) return;
      const handlers = [];
      const addImageViewerHandler = (img) => {
        const handler = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const allImgs = el.querySelectorAll(".full-image");
          const imageUrls = Array.from(allImgs).map((i) => i.src);
          const index = imageUrls.indexOf(img.src);
          showImageViewer(imageUrls, Math.max(0, index));
        };
        img.addEventListener("click", handler);
        img.style.cursor = "zoom-in";
        handlers.push({ el: img, fn: handler });
      };
      const placeholders = el.querySelectorAll(".image-placeholder[data-src]");
      placeholders.forEach((placeholder) => {
        const container = placeholder;
        const handler = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const src = container.dataset.src;
          if (!src) return;
          const hint = container.querySelector(".image-load-hint");
          if (hint) hint.remove();
          const img = document.createElement("img");
          img.src = src;
          img.className = "full-image";
          img.alt = "image";
          img.loading = "lazy";
          img.decoding = "async";
          img.referrerPolicy = "no-referrer";
          img.onload = () => {
            img.classList.add("is-loaded");
            container.classList.add("is-loaded");
            container.classList.remove("image-placeholder");
            addImageViewerHandler(img);
          };
          img.onerror = () => {
            img.src = "/img/no_img.gif";
            img.classList.add("is-loaded", "load-failed");
            container.classList.add("is-loaded");
            container.classList.remove("image-placeholder");
          };
          container.appendChild(img);
          container.removeEventListener("click", handler);
        };
        container.addEventListener("click", handler);
        handlers.push({ el: container, fn: handler });
      });
      const imgs = el.querySelectorAll(".full-image");
      imgs.forEach((img) => {
        addImageViewerHandler(img);
      });
      return () => {
        handlers.forEach(({ el: el2, fn }) => {
          el2.removeEventListener("click", fn);
        });
      };
    }, [content]);
    const isSticker = T$2(() => {
      if (isDeleted) return false;
      const raw = (messageText || "").trim();
      return /^(\[img\][^\[]+\[\/img\]|\[emoji\][^\[]+\[\/emoji\])$/i.test(raw) && !replyToId;
    }, [messageText, isDeleted, replyToId]);
    const timeText = formatDate(message.timestamp, "time") + (editedAt && !isDeleted ? " (已编辑)" : "");
    const fullTimeText = formatDate(message.timestamp, "full");
    const avatarUrl = getAvatarUrl(message.avatar, "l");
    const nickColor = message.color || "var(--primary-color)";
    const handleContextMenu = q$2((e) => {
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
    const triggerReply = q$2(() => {
      const rawContent = (messageStore.peek().get(String(messageId))?.raw || messageText || "").trim();
      const text = stripQuotes(escapeHTML(rawContent)).replace(/\[img\].*?\[\/img\]/gi, "[图片]").replace(/\n/g, " ").replace(/\s+/g, " ").trim();
      setReplyTo({
        id: String(messageId),
        uid: String(message.uid),
        user: message.nickname,
        text,
        raw: rawContent,
        avatar: message.avatar
      });
      const textarea = document.querySelector("#dollars-main-chat textarea");
      if (textarea) textarea.focus();
    }, [messageId, messageText, message.uid, message.nickname, message.avatar]);
    const handleRetry = q$2(async () => {
      const result = retryMessage(messageId);
      if (result) {
        const [{ sendPendingMessage }, { sendMessage: apiSendMessage }] = await Promise.all([
          __vitePreload(() => Promise.resolve().then(() => useWebSocket$1),false             ?__VITE_PRELOAD__:void 0),
          __vitePreload(() => Promise.resolve().then(() => api),false             ?__VITE_PRELOAD__:void 0)
        ]);
        sendPendingMessage(result.stableKey, result.content);
        apiSendMessage(result.content);
      }
    }, [messageId]);
    const handleBubbleClick = q$2((e) => {
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
    const className = [
      "chat-message",
      isSelf && "self",
      isGrouped && "is-grouped-with-prev",
      isGroupedWithNext && "is-grouped-with-next",
      editedAt && !isDeleted && "is-edited",
      newMessageIds.value.has(messageId) && "new-message",
      message.state === "sending" && "pending",
      message.state === "failed" && "failed"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ u$2(
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
        onTouchCancel: onTouchEnd,
        children: [
          /* @__PURE__ */ u$2("div", { class: "swipe-reply-indicator" }),
          /* @__PURE__ */ u$2(
            UserAvatar,
            {
              uid: message.uid,
              src: avatarUrl,
              nickname: message.nickname
            }
          ),
          /* @__PURE__ */ u$2("div", { class: "message-content", children: [
            /* @__PURE__ */ u$2("span", { class: "nickname", children: /* @__PURE__ */ u$2(
              "a",
              {
                href: message.uid === 0 ? "/user/bangumi" : `/user/${message.uid}`,
                target: "_blank",
                rel: "noopener",
                children: message.nickname
              }
            ) }),
            /* @__PURE__ */ u$2(
              "div",
              {
                class: `bubble ${isSticker ? "sticker-mode" : ""}`,
                onClick: message.state === "failed" ? handleBubbleClick : void 0,
                style: message.state === "failed" ? { cursor: "pointer" } : void 0,
                children: [
                  /* @__PURE__ */ u$2("svg", { viewBox: "0 0 11 20", width: "11", height: "20", class: "bubble-tail", children: /* @__PURE__ */ u$2("use", { href: "#message-tail-filled" }) }),
                  /* @__PURE__ */ u$2("span", { class: "bubble-nickname", style: { "--nick-color": nickColor }, children: message.nickname }),
                  (() => {
                    const shouldCollapse = !isDeleted && messageText.length > COLLAPSE_THRESHOLD && !isExpanded;
                    return /* @__PURE__ */ u$2(k$3, { children: [
                      /* @__PURE__ */ u$2(
                        "div",
                        {
                          class: `text-content ${shouldCollapse ? "is-collapsed" : ""}`,
                          dangerouslySetInnerHTML: { __html: content }
                        }
                      ),
                      !isDeleted && messageText.length > COLLAPSE_THRESHOLD && /* @__PURE__ */ u$2(
                        "button",
                        {
                          class: "expand-toggle-btn",
                          onClick: (e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                          },
                          children: isExpanded ? "收起" : "展开全文"
                        }
                      )
                    ] });
                  })(),
                  /* @__PURE__ */ u$2("span", { class: "bubble-timestamp", title: fullTimeText, children: timeText })
                ]
              }
            ),
            /* @__PURE__ */ u$2(MessageReactions, { reactions: message.reactions || [], messageId })
          ] })
        ]
      }
    );
  }, arePropsEqual);

  let ws = null;
  let reconnectTimer = null;
  let heartbeatTimer = null;
  let connectionCheckTimer = null;
  let presenceSubscribed = /* @__PURE__ */ new Set();
  let syncPresenceTimer = null;
  let wsInitialized = false;
  function normalizeMessage(msg) {
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
  function syncPresenceSubscriptions() {
    if (syncPresenceTimer) {
      clearTimeout(syncPresenceTimer);
    }
    syncPresenceTimer = setTimeout(() => {
      syncPresenceTimer = null;
      if (!ws || ws.readyState !== WebSocket.OPEN || !isChatOpen.value) {
        if (presenceSubscribed.size > 0) {
          sendMessage({ type: "presence_unsubscribe" });
          presenceSubscribed.clear();
        }
        return;
      }
      const want = new Set(collectUidsForPresence());
      const toAdd = [...want].filter((u) => !presenceSubscribed.has(u));
      const toDel = [...presenceSubscribed].filter((u) => !want.has(u));
      if (toDel.length) {
        sendMessage({ type: "presence_unsubscribe", uids: toDel });
      }
      if (toAdd.length) {
        sendMessage({ type: "presence_subscribe", uids: toAdd });
        sendMessage({ type: "presence_query", uids: toAdd });
      }
      presenceSubscribed = want;
    }, 120);
  }
  function updateReactionUI(messageId, reaction, action) {
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
        const el = document.querySelector(`#db-${messageId} .reaction-item[data-emoji="${reaction.emoji}"]`);
        if (el) {
          el.classList.add("live_selected");
          setTimeout(() => el.classList.remove("live_selected"), 1e3);
        }
      }, 10);
    }
  }
  function initWebSocket() {
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
      sendMessage({ type: "identify", uid: userInfo.value.id });
      if (settings.value.sharePresence) {
        sendMessage({
          type: "join",
          user: {
            id: userInfo.value.id,
            name: userInfo.value.nickname,
            avatar: userInfo.value.avatar
          }
        });
      }
      if (isChatOpen.value) {
        sendMessage({ type: "presence", open: true });
        setTimeout(syncPresenceSubscriptions, 0);
      }
    };
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        handleWebSocketMessage(data);
      } catch {
      }
    };
    ws.onclose = () => {
      wsConnected.value = false;
      stopHeartbeat();
      onlineUsers.value = /* @__PURE__ */ new Map();
      typingUsers.value = /* @__PURE__ */ new Map();
      presenceSubscribed.clear();
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
      if (shouldBeConnected && (!ws || ws.readyState !== WebSocket.OPEN)) {
        connectWebSocket();
      }
    }, 1e4);
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
    }, 2e3);
  }
  function startHeartbeat() {
    stopHeartbeat();
    if (document.hidden) return;
    heartbeatTimer = setInterval(() => {
      sendMessage({ type: "ping" });
    }, 25e3);
  }
  function stopHeartbeat() {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  }
  function sendMessage(data) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data));
    }
  }
  function useWebSocket() {
    const connect = q$2(() => {
      connectWebSocket();
    }, []);
    const disconnect = q$2(() => {
      disconnectWebSocket();
    }, []);
    y$2(() => {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          if (settings.value.notificationType !== "detail") {
            stopHeartbeat();
          }
        } else {
          startHeartbeat();
          setTimeout(() => {
            const shouldConnect = isChatOpen.value || settings.value.notificationType === "detail";
            if (shouldConnect && (!ws || ws.readyState !== WebSocket.OPEN)) {
              connectWebSocket();
            }
            if (isChatOpen.value) {
              const ids = messageIds.value;
              if (ids.length > 0) {
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
            }
          }, 100);
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }, []);
    y$2(() => {
      if (isChatOpen.value && (!ws || ws.readyState !== WebSocket.OPEN)) {
        connectWebSocket();
        if (!connectionCheckTimer) {
          startConnectionMonitoring();
        }
      }
    }, [isChatOpen.value]);
    return { connect, disconnect, send: sendMessage, isConnected: wsConnected };
  }
  function handleWebSocketMessage(data) {
    if (data.ackId) {
      sendMessage({ type: "ack", ackId: data.ackId });
    }
    switch (data.type) {
      case "online_count_update":
        onlineCount.value = data.count;
        break;
      case "presence_result":
        if (Array.isArray(data.users)) {
          const newOnlineUsers = new Map(onlineUsers.value);
          data.users.forEach(({ id, active }) => {
            const uid = String(id);
            if (active) {
              newOnlineUsers.set(uid, true);
            } else {
              newOnlineUsers.delete(uid);
            }
          });
          onlineUsers.value = newOnlineUsers;
        }
        break;
      case "presence_update": {
        const u = data.user;
        if (u && u.id != null) {
          const uid = String(u.id);
          const isActive = !!u.active;
          const newOnlineUsers = new Map(onlineUsers.value);
          if (isActive) {
            newOnlineUsers.set(uid, true);
          } else {
            newOnlineUsers.delete(uid);
          }
          onlineUsers.value = newOnlineUsers;
        }
        break;
      }
      case "typing_start": {
        const typingUserId = String(data.user?.id);
        if (typingUserId === String(userInfo.value.id)) return;
        if (blockedUsers.value.has(typingUserId)) return;
        typingUsers.value = new Map(typingUsers.value).set(
          typingUserId,
          data.user.name || data.user.nickname
        );
        break;
      }
      case "typing_stop": {
        const newTyping = new Map(typingUsers.value);
        newTyping.delete(String(data.user?.id));
        typingUsers.value = newTyping;
        break;
      }
      case "reaction_add":
        updateReactionUI(data.payload.message_id, data.payload.reaction, "add");
        break;
      case "reaction_remove": {
        const { message_id, user_id, emoji, nickname } = data.payload;
        updateReactionUI(message_id, { user_id, nickname: nickname || "", emoji }, "remove");
        break;
      }
      case "new_messages": {
        const payload = Array.isArray(data.payload) ? data.payload : [];
        if (!payload.length) break;
        const filteredPayload = payload.filter(
          (msg) => !blockedUsers.value.has(String(msg.uid))
        );
        if (!filteredPayload.length) break;
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
        break;
      }
      case "new_pm": {
        const payload = data.payload;
        if (!payload) break;
        if (blockedUsers.value.has(String(payload.uid))) break;
        const normalizedMsg = normalizeMessage(payload);
        if (!getMessageById(normalizedMsg.id)) {
          addMessage(normalizedMsg);
        }
        break;
      }
      case "notification": {
        const n = data.payload;
        addNotification(n);
        if (isChatOpen.value && unreadWhileScrolled.value === 0) {
          const mid = Number(n.message_id || n.message?.id);
          if (mid) {
            setTimeout(() => markMessageAsSeenIfNotified(mid), 100);
          }
        }
        break;
      }
      case "message_delete": {
        const { id } = data.payload;
        deleteMessage$1(Number(id));
        break;
      }
      case "message_edit": {
        const fullMsg = data.payload;
        updateMessage(fullMsg.id, normalizeMessage(fullMsg));
        break;
      }
    }
  }
  function sendTypingStart() {
    if (ws && ws.readyState === WebSocket.OPEN && settings.value.sharePresence) {
      sendMessage({ type: "typing_start" });
    }
  }
  function sendTypingStop() {
    if (ws && ws.readyState === WebSocket.OPEN && settings.value.sharePresence) {
      sendMessage({ type: "typing_stop" });
    }
  }
  function sendPendingMessage(tempId, content) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      sendMessage({ type: "pending_message", tempId, content });
    }
  }

  const useWebSocket$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    initWebSocket,
    sendPendingMessage,
    sendTypingStart,
    sendTypingStop,
    syncPresenceSubscriptions,
    useWebSocket
  }, Symbol.toStringTag, { value: 'Module' }));

  function insertUnreadSeparator(messageId) {
    const existing = document.querySelector(".unread-separator");
    if (existing) existing.remove();
    if (!messageId) return;
    const targetMsg = document.getElementById(`db-${messageId}`);
    if (!targetMsg) return;
    const separator = document.createElement("div");
    separator.className = "unread-separator";
    separator.innerHTML = "<span>未读消息</span>";
    targetMsg.parentNode?.insertBefore(separator, targetMsg);
  }

  const MAX_DOM_MESSAGES = 100;
  function ChatBody() {
    const bodyRef = A$2(null);
    const listRef = A$2(null);
    const isLoadingRef = A$2(false);
    const isStickingToBottom = A$2(true);
    const prevScrollHeight = A$2(0);
    const isRestoringScroll = A$2(false);
    const hideDateLabelTimer = A$2(null);
    const scrollAnimationRef = A$2(null);
    const isProgrammaticScroll = A$2(false);
    const smoothScrollTo = q$2((targetTop, duration) => {
      if (!bodyRef.current) return;
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
      const container = bodyRef.current;
      const startTop = container.scrollTop;
      const distance = Math.abs(targetTop - startTop);
      if (distance < 10) {
        container.scrollTop = targetTop;
        return;
      }
      const calculatedDuration = duration ?? Math.min(250 + Math.sqrt(distance) * 8, 650);
      const startTime = performance.now();
      const diff = targetTop - startTop;
      const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / calculatedDuration, 1);
        const eased = easeOutExpo(progress);
        container.scrollTop = startTop + diff * eased;
        if (progress < 1) {
          scrollAnimationRef.current = requestAnimationFrame(animateScroll);
        } else {
          scrollAnimationRef.current = null;
        }
      };
      scrollAnimationRef.current = requestAnimationFrame(animateScroll);
    }, []);
    const scrollToBottom = q$2((smooth = true) => {
      if (!bodyRef.current) return;
      const targetTop = bodyRef.current.scrollHeight;
      if (smooth) {
        isProgrammaticScroll.current = true;
        smoothScrollTo(targetTop);
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 700);
      } else {
        bodyRef.current.scrollTop = targetTop;
      }
      isStickingToBottom.current = true;
    }, [smoothScrollTo]);
    const handleScroll = q$2(() => {
      if (!bodyRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = bodyRef.current;
      const atBottom = scrollHeight - scrollTop - clientHeight < 50;
      isAtBottom.value = atBottom;
      if (!isProgrammaticScroll.current && !isLoadingRef.current) {
        isStickingToBottom.current = atBottom;
      }
      if (atBottom && timelineIsLive.value) {
        unreadWhileScrolled.value = 0;
        unreadJumpList.value = [];
        const unreadSep = document.querySelector(".unread-separator");
        if (unreadSep) unreadSep.remove();
        const browseSep = document.querySelector(".browse-separator");
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
      updateFloatingUI(scrollTop, clientHeight);
      if (scrollTop < 200 && !isLoadingRef.current && !historyFullyLoaded.value) {
        loadHistory();
      }
      if (atBottom && !isLoadingRef.current && !timelineIsLive.value) {
        isStickingToBottom.current = false;
        loadNewerHistory();
      }
    }, []);
    const getTopVisibleMessageId = q$2(() => {
      if (!bodyRef.current || !listRef.current) return null;
      const scrollTop = bodyRef.current.scrollTop;
      const topThreshold = scrollTop + 60;
      const msgs = Array.from(listRef.current.querySelectorAll(".chat-message[data-db-id]"));
      const topMsg = msgs.find((el) => el.offsetTop + el.offsetHeight > topThreshold);
      return topMsg?.dataset.dbId ? parseInt(topMsg.dataset.dbId, 10) : null;
    }, []);
    const getBottomVisibleMessageId = q$2(() => {
      if (!bodyRef.current || !listRef.current) return null;
      const scrollTop = bodyRef.current.scrollTop;
      const clientHeight = bodyRef.current.clientHeight;
      const bottomThreshold = scrollTop + clientHeight - 60;
      const msgs = Array.from(listRef.current.querySelectorAll(".chat-message[data-db-id]"));
      for (let i = msgs.length - 1; i >= 0; i--) {
        const el = msgs[i];
        if (el.offsetTop < bottomThreshold) {
          return el.dataset.dbId ? parseInt(el.dataset.dbId, 10) : null;
        }
      }
      return null;
    }, []);
    const updateScrollButtonMode = q$2(() => {
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
    const updateFloatingUI = (scrollTop, clientHeight) => {
      if (!bodyRef.current || !listRef.current) return;
      const nearBottom = bodyRef.current.scrollHeight - scrollTop - clientHeight <= 150;
      showScrollBottomBtn.value = !nearBottom || !timelineIsLive.value;
      if (typeof hideDateLabelTimer.current === "number") {
        clearTimeout(hideDateLabelTimer.current);
        hideDateLabelTimer.current = null;
      }
      if (nearBottom) {
        currentDateLabel.value = null;
        return;
      }
      const msgs = Array.from(listRef.current.children);
      const topThreshold = scrollTop + 50;
      const topMsg = msgs.find((el) => {
        return el.classList.contains("chat-message") && el.offsetTop + el.offsetHeight > topThreshold;
      });
      if (topMsg && topMsg.dataset.timestamp) {
        const ts = parseInt(topMsg.dataset.timestamp, 10);
        const label = formatDate(ts, "label");
        if (currentDateLabel.peek() !== label) {
          currentDateLabel.value = label;
        }
        hideDateLabelTimer.current = window.setTimeout(() => {
          currentDateLabel.value = null;
        }, 1e3);
      }
    };
    y$2(() => {
      if (manualScrollToBottom.value > 0) {
        scrollToBottom(true);
      }
    }, [manualScrollToBottom.value]);
    y$2(() => {
      if (isChatOpen.value && messageIds.value.length > 0 && timelineIsLive.value && isStickingToBottom.current) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (bodyRef.current) {
              bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
            }
          });
        });
      }
    }, [isChatOpen.value]);
    y$2(() => {
      const messageId = pendingJumpToMessage.value;
      if (messageId !== null) {
        pendingJumpToMessage.value = null;
        jumpToMessage(messageId);
      }
    }, [pendingJumpToMessage.value]);
    const loadHistory = async () => {
      if (isLoadingRef.current || historyFullyLoaded.value) return;
      const oldestId = historyOldestId.value;
      if (!oldestId) return;
      isLoadingRef.current = true;
      isLoadingHistory.value = true;
      if (bodyRef.current) {
        prevScrollHeight.current = bodyRef.current.scrollHeight;
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
          prependMessages(filtered);
          syncPresenceSubscriptions();
        }
      } catch (e) {
      } finally {
        isLoadingRef.current = false;
        isLoadingHistory.value = false;
      }
    };
    const loadNewerHistory = async () => {
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
          appendMessages(filteredNewMessages);
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
    };
    const jumpToMessage = async (id) => {
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
          const filtered = contextResult.messages.filter(
            (m) => !blockedUsers.value.has(String(m.uid))
          );
          setMessages(filtered);
          if (filtered.length > 0) {
            historyOldestId.value = filtered[0].id;
            historyNewestId.value = filtered[filtered.length - 1].id;
            historyFullyLoaded.value = !contextResult.has_more_before;
          }
          timelineIsLive.value = false;
          requestAnimationFrame(() => {
            setTimeout(() => {
              const newElement = document.getElementById(`db-${targetId}`);
              if (newElement) {
                scrollAndHighlight(newElement, true);
              } else {
                const msgElements = listRef.current?.querySelectorAll(".chat-message");
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
    };
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
    y$2(() => {
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
          const currentUnreadCount = unreadCount.value;
          console.log("[Browse Position Debug]", {
            savedBrowse,
            currentUnreadCount,
            lastReadId: lastReadId.value
          });
          if (savedBrowse) {
            console.log("[Browse Position] Attempting to restore to message:", savedBrowse.anchorMessageId);
            unreadWhileScrolled.value = currentUnreadCount;
            showScrollBottomBtn.value = currentUnreadCount > 0;
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
                  const readId = lastReadId.value;
                  if (readId) {
                    const firstUnreadId = filtered.find((m) => m.id > readId)?.id;
                    if (firstUnreadId) {
                      insertUnreadSeparator(String(firstUnreadId));
                    }
                  }
                  const browseEl = document.getElementById(`db-${savedBrowse.anchorMessageId}`);
                  if (browseEl && bodyRef.current) {
                    bodyRef.current.scrollTop = browseEl.offsetTop - 10;
                    console.log("[Browse Position] Restored successfully");
                  } else if (bodyRef.current) {
                    bodyRef.current.scrollTop = 0;
                    console.warn("[Browse Position] Anchor message not found in loaded messages, scrolled to top");
                  }
                  syncPresenceSubscriptions();
                  isLoadingHistory.value = false;
                  isContextLoading.value = false;
                  initialMessagesLoaded.value = true;
                });
              });
              return;
            } else {
              console.warn("[Browse Position] Failed to load context, clearing invalid browse position");
              clearBrowsePosition();
            }
          }
          timelineIsLive.value = true;
          isStickingToBottom.current = true;
          clearBrowsePosition();
          const recentMessages = await fetchRecentMessages(50);
          if (recentMessages.length > 0) {
            const filtered = recentMessages.filter((m) => !blockedUsers.value.has(String(m.uid)));
            appendMessages(filtered);
            if (filtered.length > 0) {
              historyOldestId.value = filtered[0].id;
              historyNewestId.value = filtered[filtered.length - 1].id;
            }
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
    y$2(() => {
      const listEl = listRef.current;
      if (!listEl) return;
      const handleClick = (e) => {
        const target = e.target;
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
          if (id) {
            jumpToMessage(id);
          }
        }
      };
      listEl.addEventListener("click", handleClick);
      return () => listEl.removeEventListener("click", handleClick);
    }, []);
    const visibleMessageIds = T$2(() => {
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
          bodyRef.current.scrollTop = scrollDiff;
        }
        isRestoringScroll.current = false;
      }
    }, [visibleMessageIds]);
    y$2(() => {
      const listEl = listRef.current;
      if (!listEl) return;
      const observer = new ResizeObserver(() => {
        if (isStickingToBottom.current && !isProgrammaticScroll.current && bodyRef.current) {
          bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
      });
      observer.observe(listEl);
      return () => observer.disconnect();
    }, []);
    return /* @__PURE__ */ u$2(
      "div",
      {
        class: `chat-body ${isLoadingHistory.value ? "loading" : ""} ${isContextLoading.value ? "context-loading" : ""}`,
        ref: bodyRef,
        onScroll: handleScroll,
        style: { paddingBottom: `${inputAreaHeight.value + 20}px` },
        children: /* @__PURE__ */ u$2("div", { class: "chat-list", ref: listRef, children: visibleMessageIds.map((msgId) => {
          const msg = messageMap.value.get(msgId);
          if (!msg) return null;
          const grouping = getMessageGrouping(msgId);
          return /* @__PURE__ */ u$2(
            MessageItem,
            {
              message: msg,
              isSelf: grouping.isSelf,
              isGrouped: grouping.isGrouped,
              isGroupedWithNext: grouping.isGroupedWithNext
            },
            msg.stableKey || msgId
          );
        }) })
      }
    );
  }

  function TypingIndicator() {
    const users = Array.from(typingUsers.value.values());
    const lastText = A$2("");
    const isVisible = useSignal(false);
    y$2(() => {
      if (users.length > 0) {
        let text = "";
        if (users.length === 1) {
          text = `${users[0]} 正在输入...`;
        } else if (users.length === 2) {
          text = `${users[0]} 和 ${users[1]} 正在输入...`;
        } else {
          text = `${users[0]} 和其他 ${users.length - 1} 人正在输入...`;
        }
        lastText.current = text;
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    }, [users.length]);
    return /* @__PURE__ */ u$2("div", { id: "dollars-typing-indicator", class: isVisible.value ? "visible" : "", children: lastText.current || " " });
  }

  const FAVORITES_KEY = "dollars_saved_favorites";
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
      const res = await fetch(`${BACKEND_URL}/api/favorites?uid=${userInfo.value.id}`);
      if (!res.ok) return;
      const { data } = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const current = favorites.peek();
        const merged = [.../* @__PURE__ */ new Set([...data, ...current])];
        if (merged.length !== current.length || merged.some((u) => !current.includes(u))) {
          favorites.value = merged;
          saveFavorites(merged, false);
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
      saveFavorites(newList);
    }
  }
  function removeFavorite(url) {
    const list = favorites.peek();
    const newList = list.filter((u) => u !== url);
    favorites.value = newList;
    saveFavorites(newList);
  }
  function saveFavorites(list, syncBackend = true) {
    const cloud = getChiiApp().cloud_settings;
    cloud.update({ [FAVORITES_KEY]: JSON.stringify(list) });
    cloud.save();
    if (syncBackend && userInfo.value.id) {
      fetch(`${BACKEND_URL}/api/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: userInfo.value.id, data: list })
      }).catch(() => {
      });
    }
  }

  function SmileyPanel({ onSelect }) {
    const [activeTab, setActiveTab] = d$2("TV");
    const [bmoItems, setBmoItems] = d$2([]);
    const [isUploading, setIsUploading] = d$2(false);
    const contentRef = A$2(null);
    y$2(() => {
      if (activeTab === "BMO") {
        try {
          const bmoji = window.Bmoji;
          const savedBmo = bmoji?.savedBmo?.list?.() || JSON.parse(localStorage.getItem("chii_saved_bmo") || "[]");
          if (Array.isArray(savedBmo)) {
            setBmoItems(savedBmo.filter((item) => item && item.code));
          }
        } catch (e) {
          setBmoItems([]);
        }
      }
    }, [activeTab]);
    y$2(() => {
      if (!isSmileyPanelOpen.value) return;
      const handleClickOutside = (e) => {
        const panel = document.getElementById("dollars-smiles-floating");
        const trigger = document.getElementById("dollars-emoji-btn");
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
    y$2(() => {
      if (activeTab === "收藏") {
        initFavorites();
      }
    }, [activeTab]);
    y$2(() => {
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
    const handleSelect = q$2((code) => {
      if (onSelect) {
        onSelect(code);
      } else {
        const textarea = document.querySelector(".chat-textarea");
        if (textarea) {
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const value = textarea.value;
          textarea.value = value.substring(0, start) + code + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + code.length;
          textarea.focus();
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
      toggleSmileyPanel(false);
    }, [onSelect]);
    const handleTabClick = q$2((groupName) => {
      setActiveTab(groupName);
    }, []);
    const handleOpenBmoPanel = q$2((e) => {
      e.preventDefault();
      const apiObject = window.BgmBmoQuickPanel;
      if (apiObject && typeof apiObject.open === "function") {
        const textarea = document.querySelector(".chat-textarea");
        apiObject.open(textarea);
        toggleSmileyPanel(false);
      } else {
        if (confirm("你需要先启用 'BMO 快速拼装面板'。\n\n是否前往启用页面？")) {
          window.location.href = "/dev/app/4853";
        }
      }
    }, []);
    const handleUploadFavorite = q$2(async (e) => {
      e.preventDefault();
      const tempInput = document.createElement("input");
      tempInput.type = "file";
      tempInput.accept = "image/*";
      tempInput.style.display = "none";
      tempInput.onchange = async (evt) => {
        const target = evt.target;
        const file = target.files?.[0];
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);
        setIsUploading(true);
        try {
          const res = await fetch(`${BACKEND_URL}/api/upload`, { method: "POST", body: formData });
          const result = await res.json();
          if (!res.ok || !result.status) throw new Error(result.message || "上传失败");
          const imageUrl = result.imageUrl;
          addFavorite(imageUrl);
        } catch (err) {
          alert(err.message || "上传失败");
        } finally {
          setIsUploading(false);
        }
      };
      tempInput.click();
    }, []);
    const handleRemoveFavorite = q$2((e, url) => {
      e.preventDefault();
      e.stopPropagation();
      removeFavorite(url);
    }, []);
    if (!isSmileyPanelOpen.value) {
      return null;
    }
    let smileys = [];
    let specialContent = null;
    if (activeTab === "BMO") {
      specialContent = /* @__PURE__ */ u$2("div", { style: { display: "contents" }, children: [
        /* @__PURE__ */ u$2("li", { class: "smiley-item", children: /* @__PURE__ */ u$2(
          "a",
          {
            href: "#",
            id: "dollars-open-bmo-panel",
            title: "打开 BMO 快速拼装面板",
            onClick: handleOpenBmoPanel,
            style: { backgroundImage: "none", display: "flex", alignItems: "center", justifyContent: "center" },
            dangerouslySetInnerHTML: { __html: SVGIcons.bmoPanel }
          }
        ) }),
        bmoItems.length > 0 ? bmoItems.map((item) => /* @__PURE__ */ u$2("li", { class: "smiley-item", children: /* @__PURE__ */ u$2(
          "a",
          {
            href: "#",
            "data-smiley": item.code,
            title: item.name || item.code,
            onClick: (e) => {
              e.preventDefault();
              handleSelect(item.code);
            },
            children: /* @__PURE__ */ u$2("span", { class: "bmo", "data-code": item.code })
          }
        ) }, item.code)) : /* @__PURE__ */ u$2("p", { style: { width: "100%", textAlign: "center", color: "var(--dollars-text-secondary)", fontSize: "12px", marginTop: "20px", padding: "0 10px" }, children: [
          "暂无保存的 BMO 表情",
          /* @__PURE__ */ u$2("br", {}),
          /* @__PURE__ */ u$2("a", { href: "/dev/app/4853", target: "_blank", rel: "noopener", style: { color: "var(--primary-color)" }, children: "前往 BMO 快速拼装面板" })
        ] })
      ] });
    } else if (activeTab === "收藏") {
      const favoritesList = favorites.value;
      specialContent = /* @__PURE__ */ u$2("div", { style: { display: "contents" }, children: [
        /* @__PURE__ */ u$2("li", { class: "smiley-item favorite-item", style: { border: "2px dashed var(--dollars-border)", borderRadius: "8px", boxSizing: "border-box" }, children: /* @__PURE__ */ u$2(
          "a",
          {
            href: "#",
            title: "上传新表情",
            onClick: handleUploadFavorite,
            style: { backgroundImage: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dollars-text-secondary)" },
            children: isUploading ? /* @__PURE__ */ u$2("span", { style: { fontSize: "12px" }, children: "..." }) : /* @__PURE__ */ u$2("span", { dangerouslySetInnerHTML: { __html: SVGIcons.upload } })
          }
        ) }),
        favoritesList.length > 0 ? favoritesList.map((url) => /* @__PURE__ */ u$2("li", { class: "smiley-item favorite-item", children: [
          /* @__PURE__ */ u$2(
            "a",
            {
              href: "#",
              "data-smiley": `[emoji]${escapeHTML(url)}[/emoji]`,
              title: `[emoji]${url}[/emoji]`,
              onClick: (e) => {
                e.preventDefault();
                handleSelect(`[emoji]${url}[/emoji]`);
              },
              style: { backgroundImage: `url('${url}')` }
            }
          ),
          /* @__PURE__ */ u$2(
            "button",
            {
              class: "remove-favorite-btn",
              title: "移除收藏",
              onClick: (e) => handleRemoveFavorite(e, url),
              children: "×"
            }
          )
        ] }, url)) : /* @__PURE__ */ u$2("p", { style: { width: "100%", textAlign: "center", color: "#888", fontSize: "12px", marginTop: "20px", padding: "0 10px" }, children: [
          "上传或右键图片收藏",
          /* @__PURE__ */ u$2("br", {}),
          "(存储于Chii云端)"
        ] })
      ] });
    } else {
      smileys = generateSmileyCodes(activeTab);
    }
    return /* @__PURE__ */ u$2("div", { id: "dollars-smiles-floating", class: `open ${isSmileyPanelClosing.value ? "closing" : ""}`, children: [
      /* @__PURE__ */ u$2("div", { id: "dollars-smiles-tabs", children: smileyRanges.map((range) => {
        let textContent = range.name;
        if (range.name === "收藏") {
          textContent = /* @__PURE__ */ u$2("span", { dangerouslySetInnerHTML: { __html: SVGIcons.star }, style: { display: "flex" } });
        } else if (range.name === "BMO") {
          textContent = /* @__PURE__ */ u$2("span", { class: "bmo", "data-code": "(bmoCgASACIBLgCg)", style: { verticalAlign: "middle" } });
        } else if (range.path && range.start) {
          textContent = /* @__PURE__ */ u$2("img", { src: range.path(range.start), alt: range.name, style: { width: "21px", height: "21px", verticalAlign: "middle" } });
        }
        return /* @__PURE__ */ u$2(
          "button",
          {
            class: `smiley-tab-btn ${activeTab === range.name ? "active" : ""}`,
            "data-group": range.name,
            onClick: () => handleTabClick(range.name),
            title: range.name,
            children: textContent
          },
          range.name
        );
      }) }),
      /* @__PURE__ */ u$2("div", { id: "dollars-smiles-content", ref: contentRef, children: [
        specialContent,
        smileys.map((code) => {
          const url = getSmileyUrl(code);
          return /* @__PURE__ */ u$2("li", { class: "smiley-item", children: /* @__PURE__ */ u$2(
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
          ) }, code);
        })
      ] })
    ] });
  }

  const formatterVisible = d$1(false);
  const formatterLinkMode = d$1(false);
  function TextFormatter({ textareaRef }) {
    const containerRef = A$2(null);
    const linkInputRef = A$2(null);
    const savedRangeRef = A$2(null);
    const checkSelection = q$2(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (document.activeElement !== textarea) {
        if (containerRef.current?.contains(document.activeElement)) return;
        if (formatterLinkMode.value) return;
        hide();
        return;
      }
      if (textarea.selectionStart !== textarea.selectionEnd) {
        show();
      } else {
        hide();
      }
    }, [textareaRef]);
    const show = q$2(() => {
      const textarea = textareaRef.current;
      const el = containerRef.current;
      if (!textarea || !el) return;
      const rect = textarea.getBoundingClientRect();
      el.style.top = `${rect.top - 50}px`;
      el.style.left = `${rect.left + rect.width / 2 - el.offsetWidth / 2}px`;
      formatterVisible.value = true;
      savedRangeRef.current = {
        start: textarea.selectionStart,
        end: textarea.selectionEnd
      };
    }, [textareaRef]);
    const hide = q$2(() => {
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
    const switchMode = q$2((isLinkMode) => {
      if (isLinkMode) {
        formatterLinkMode.value = true;
        savedRangeRef.current = {
          start: textareaRef.current?.selectionStart || 0,
          end: textareaRef.current?.selectionEnd || 0
        };
        setTimeout(() => linkInputRef.current?.focus(), 50);
      } else {
        formatterLinkMode.value = false;
        restoreSelection();
      }
    }, [textareaRef]);
    const restoreSelection = q$2(() => {
      const textarea = textareaRef.current;
      if (textarea && savedRangeRef.current) {
        textarea.focus();
        textarea.setSelectionRange(savedRangeRef.current.start, savedRangeRef.current.end);
      }
    }, [textareaRef]);
    const applyBBCode = q$2((tag) => {
      restoreSelection();
      const textarea = textareaRef.current;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const selection = text.substring(start, end);
      if (!selection) return;
      const before = text.substring(0, start);
      const after = text.substring(end);
      const newText = `${before}[${tag}]${selection}[/${tag}]${after}`;
      textarea.value = newText;
      textarea.setSelectionRange(
        start + tag.length + 2,
        end + tag.length + 2
      );
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      hide();
    }, [textareaRef, restoreSelection, hide]);
    const applyLink = q$2(() => {
      const url = linkInputRef.current?.value.trim();
      if (!url) {
        switchMode(false);
        return;
      }
      const textarea = textareaRef.current;
      if (!textarea) return;
      textarea.focus();
      if (savedRangeRef.current) {
        textarea.setSelectionRange(savedRangeRef.current.start, savedRangeRef.current.end);
      }
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const selection = text.substring(start, end);
      const before = text.substring(0, start);
      const after = text.substring(end);
      const newText = `${before}[url=${url}]${selection}[/url]${after}`;
      textarea.value = newText;
      textarea.setSelectionRange(start, start + newText.length - before.length - after.length);
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      hide();
      if (linkInputRef.current) {
        linkInputRef.current.value = "";
      }
    }, [textareaRef, switchMode, hide]);
    y$2(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      const handleMouseDown = () => hide();
      const handleMouseUp = () => setTimeout(checkSelection, 10);
      const handleTouchEnd = () => setTimeout(checkSelection, 50);
      const handleKeyUp = () => setTimeout(checkSelection, 10);
      const handleScroll = () => hide();
      const handleResize = () => hide();
      textarea.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      textarea.addEventListener("touchend", handleTouchEnd);
      textarea.addEventListener("keyup", handleKeyUp);
      textarea.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      return () => {
        textarea.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        textarea.removeEventListener("touchend", handleTouchEnd);
        textarea.removeEventListener("keyup", handleKeyUp);
        textarea.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, [textareaRef, checkSelection, hide]);
    const handleAction = q$2((action) => {
      switch (action) {
        case "b":
        case "i":
        case "u":
        case "s":
        case "mask":
        case "code":
          applyBBCode(action);
          break;
        case "link-mode":
          switchMode(true);
          break;
        case "cancel-link":
          switchMode(false);
          break;
        case "apply-link":
          applyLink();
          break;
      }
    }, [applyBBCode, switchMode, applyLink]);
    const handleLinkKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        applyLink();
      } else if (e.key === "Escape") {
        switchMode(false);
        textareaRef.current?.focus();
      }
    };
    const className = [
      "dollars-text-formatter",
      formatterVisible.value && "visible",
      formatterLinkMode.value && "link-mode"
    ].filter(Boolean).join(" ");
    return $(
      /* @__PURE__ */ u$2(
        "div",
        {
          ref: containerRef,
          id: "dollars-text-formatter",
          class: className,
          children: [
            /* @__PURE__ */ u$2("div", { class: "formatter-row main-buttons", children: [
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "防剧透 (Mask)",
                  onClick: () => handleAction("mask"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.spoiler }
                }
              ),
              /* @__PURE__ */ u$2("div", { class: "formatter-divider" }),
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "加粗",
                  onClick: () => handleAction("b"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.bold }
                }
              ),
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "斜体",
                  onClick: () => handleAction("i"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.italic }
                }
              ),
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "下划线",
                  onClick: () => handleAction("u"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.underline }
                }
              ),
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "删除线",
                  onClick: () => handleAction("s"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.strike }
                }
              ),
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "等宽代码",
                  onClick: () => handleAction("code"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.code }
                }
              ),
              /* @__PURE__ */ u$2("div", { class: "formatter-divider" }),
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "添加链接",
                  onClick: () => handleAction("link-mode"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.link }
                }
              )
            ] }),
            /* @__PURE__ */ u$2("div", { class: "formatter-row formatter-link-input-wrapper", children: [
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "返回",
                  onClick: () => handleAction("cancel-link"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.back }
                }
              ),
              /* @__PURE__ */ u$2("div", { class: "formatter-divider" }),
              /* @__PURE__ */ u$2(
                "input",
                {
                  ref: linkInputRef,
                  type: "text",
                  class: "formatter-link-input",
                  placeholder: "输入链接 URL...",
                  autoComplete: "off",
                  onKeyDown: handleLinkKeyDown
                }
              ),
              /* @__PURE__ */ u$2("div", { class: "formatter-divider" }),
              /* @__PURE__ */ u$2(
                "button",
                {
                  type: "button",
                  class: "formatter-btn",
                  title: "确认",
                  onClick: () => handleAction("apply-link"),
                  dangerouslySetInnerHTML: { __html: SVGIcons.check }
                }
              )
            ] })
          ]
        }
      ),
      document.body
    );
  }

  function MentionCompleter({ textareaRef }) {
    const containerRef = A$2(null);
    const [visible, setVisible] = d$2(false);
    const [users, setUsers] = d$2([]);
    const [matchStart, setMatchStart] = d$2(-1);
    const queryRef = A$2(null);
    const timerRef = A$2(null);
    const checkInput = q$2(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      const cursor = textarea.selectionStart;
      const text = textarea.value.slice(0, cursor);
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
      timerRef.current = setTimeout(() => fetchUsers(currentQuery), 300);
    }, [textareaRef, visible]);
    const fetchUsers = async (query) => {
      try {
        const res = await fetch(
          `https://bgm.ry.mk/search/users?q=${encodeURIComponent(query)}&exact=true&limit=10`
        );
        if (query !== queryRef.current) return;
        const json = await res.json();
        const data = json.data || [];
        if (data.length > 0) {
          setUsers(data);
          setVisible(true);
        } else {
          hide();
        }
      } catch (e) {
        hide();
      }
    };
    const hide = q$2(() => {
      setVisible(false);
      queryRef.current = null;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }, []);
    const selectUser = q$2((user) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      textarea.setRangeText(
        `@${user.username} `,
        matchStart,
        textarea.selectionStart,
        "end"
      );
      hide();
      textarea.focus();
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }, [textareaRef, matchStart, hide]);
    y$2(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;
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
      textarea.addEventListener("input", handleInput);
      textarea.addEventListener("blur", handleBlur);
      textarea.addEventListener("keydown", handleKeyDown);
      return () => {
        textarea.removeEventListener("input", handleInput);
        textarea.removeEventListener("blur", handleBlur);
        textarea.removeEventListener("keydown", handleKeyDown);
      };
    }, [textareaRef, checkInput, hide, visible]);
    if (!visible || users.length === 0) {
      return null;
    }
    return /* @__PURE__ */ u$2(
      "div",
      {
        ref: containerRef,
        id: "dollars-mention-list",
        class: "visible",
        children: users.map((user) => /* @__PURE__ */ u$2(
          "div",
          {
            class: "mention-item",
            onClick: () => selectUser(user),
            children: [
              /* @__PURE__ */ u$2(
                "img",
                {
                  src: user.avatar_url || "//lain.bgm.tv/pic/user/m/000/00/00/0.jpg",
                  alt: ""
                }
              ),
              /* @__PURE__ */ u$2("div", { class: "mention-item-info", children: [
                /* @__PURE__ */ u$2("span", { class: "mention-item-nick", children: escapeHTML(user.nickname || user.username) }),
                /* @__PURE__ */ u$2("span", { class: "mention-item-user", children: [
                  "@",
                  escapeHTML(user.username)
                ] })
              ] })
            ]
          },
          user.id || user.username
        ))
      }
    );
  }

  const DRAFT_KEY_PREFIX = "dollars_draft_";
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
  }
  function cleanupExpiredDrafts() {
    const draft = loadDraft();
    if (!draft) {
      clearDraft();
    }
  }

  function ChatInput() {
    const textareaRef = A$2(null);
    const containerRef = A$2(null);
    const fileInputRef = A$2(null);
    const [isSending, setIsSending] = d$2(false);
    const [isUploading, setIsUploading] = d$2(false);
    const [previewMedia, setPreviewMedia] = d$2([]);
    const typingTimerRef = A$2(null);
    const isTypingRef = A$2(false);
    const attachLongPressRef = A$2(null);
    const isAttachLongPressRef = A$2(false);
    const draftSaveTimerRef = A$2(null);
    const handleAttachClick = () => {
      if (isAttachLongPressRef.current) {
        isAttachLongPressRef.current = false;
        return;
      }
      if (fileInputRef.current) {
        fileInputRef.current.accept = "image/*,video/*";
        fileInputRef.current.click();
      }
    };
    const handleAttachTouchStart = () => {
      isAttachLongPressRef.current = false;
      attachLongPressRef.current = setTimeout(() => {
        isAttachLongPressRef.current = true;
        if (navigator.vibrate) navigator.vibrate(50);
        if (fileInputRef.current) {
          fileInputRef.current.accept = "audio/*";
          fileInputRef.current.click();
        }
      }, 500);
    };
    const handleAttachTouchEnd = () => {
      if (attachLongPressRef.current) {
        clearTimeout(attachLongPressRef.current);
        attachLongPressRef.current = null;
      }
    };
    const handleFileChange = async (e) => {
      const input = e.target;
      const file = input.files?.[0];
      if (file) {
        await handleFileUpload(file);
        input.value = "";
      }
    };
    const parseMediaFiles = (text) => {
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
          return existing ? { ...existing, type, url } : { type, url };
        });
      });
    };
    const handleRemoveMedia = (index) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      const text = textarea.value;
      const media = previewMedia[index];
      if (!media) return;
      const regex = media.type === "image" ? /\[img\](.*?)\[\/img\]/g : /\[video\](.*?)\[\/video\]/g;
      let matchIndex = 0;
      let currentMediaIndex = 0;
      for (let i = 0; i < index; i++) {
        if (previewMedia[i].type === media.type) {
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
      textarea.value = newText;
      handleInput();
      textarea.focus();
    };
    const handleInput = q$2(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      parseMediaFiles(textarea.value);
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
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
      }, 2500);
      if (!editingMessage.value) {
        if (draftSaveTimerRef.current) {
          clearTimeout(draftSaveTimerRef.current);
        }
        draftSaveTimerRef.current = setTimeout(() => {
          const content = textarea.value.trim();
          const reply = replyingTo.value;
          const replyInfo = reply ? {
            id: reply.id,
            uid: reply.uid,
            user: reply.user,
            avatar: reply.avatar,
            text: reply.text
          } : null;
          saveDraft(content, replyInfo);
        }, 1e3);
      }
    }, []);
    y$2(() => {
      const mention = pendingMention.value;
      if (mention && textareaRef.current) {
        const { uid, nickname } = mention;
        const textarea = textareaRef.current;
        const mentionText = `[user=${uid}]${nickname}[/user]`;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        if (value.length > 0 && !value.endsWith(" ")) {
          textarea.value = value.substring(0, start) + " " + mentionText + " " + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + mentionText.length + 2;
        } else {
          textarea.value = value.substring(0, start) + mentionText + " " + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + mentionText.length + 1;
        }
        textarea.focus();
        handleInput();
        pendingMention.value = null;
      }
    }, [pendingMention.value]);
    const transformMentions = async (text) => {
      const codeBlocks = [];
      let processedText = text.replace(/\[code\]([\s\S]*?)\[\/code\]/gi, (match) => {
        codeBlocks.push(match);
        return `\0CODE_BLOCK_${codeBlocks.length - 1}\0`;
      });
      const mentionRegex = /(^|\s)@([\p{L}\p{N}_']{1,30})/gu;
      const matches = [...processedText.matchAll(mentionRegex)];
      if (matches.length === 0) {
        codeBlocks.forEach((block, i) => {
          processedText = processedText.replace(`\0CODE_BLOCK_${i}\0`, block);
        });
        return processedText;
      }
      const usernamesToLookup = [...new Set(matches.map((match) => match[2]))].filter((u) => u !== "Bangumi娘");
      if (usernamesToLookup.length === 0) {
        codeBlocks.forEach((block, i) => {
          processedText = processedText.replace(`\0CODE_BLOCK_${i}\0`, block);
        });
        return processedText;
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
      codeBlocks.forEach((block, i) => {
        processedText = processedText.replace(`\0CODE_BLOCK_${i}\0`, block);
      });
      return processedText;
    };
    y$2(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (editingMessage.value) return;
      const draft = loadDraft();
      if (draft) {
        if (draft.content) {
          textarea.value = draft.content;
          setTimeout(() => {
            handleInput();
          }, 0);
        }
        if (draft.replyTo) {
          setReplyTo(draft.replyTo);
        }
      }
      cleanupExpiredDrafts();
    }, []);
    y$2(() => {
      const msg = editingMessage.value;
      if (msg && textareaRef.current) {
        textareaRef.current.value = msg.raw;
        textareaRef.current.focus();
        handleInput();
      }
    }, [editingMessage.value]);
    const handleSend = async () => {
      const textarea = textareaRef.current;
      if (!textarea || isSending) return;
      const content = textarea.value.trim();
      if (!content) return;
      setIsSending(true);
      try {
        if (editingMessage.value) {
          let finalContent = content;
          if (editingMessage.value.hiddenQuote) {
            finalContent = `${editingMessage.value.hiddenQuote}
${content}`;
          }
          finalContent = await transformMentions(finalContent);
          const result = await editMessage(Number(editingMessage.value.id), finalContent);
          if (!result.status) {
            alert(result.error || "编辑失败");
          } else {
            textarea.value = "";
            textarea.style.height = "auto";
          }
          cancelReplyOrEdit();
        } else {
          let finalContent = content;
          const reply = replyingTo.value;
          if (reply) {
            finalContent = `[quote=${reply.id}][/quote]${content}`;
          }
          const transformedContent = await transformMentions(finalContent);
          const imageMeta = {};
          for (const media of previewMedia) {
            if (media.type === "image" && media.width && media.height) {
              imageMeta[media.url] = {
                width: media.width,
                height: media.height,
                blurhash: media.placeholder
              };
            }
          }
          const user = userInfo.value;
          const { tempId, stableKey } = addOptimisticMessage(
            transformedContent,
            { id: user.id, nickname: user.nickname, avatar: user.avatar },
            reply ? Number(reply.id) : void 0,
            reply ? { uid: Number(reply.uid), nickname: reply.user, avatar: reply.avatar, content: reply.text } : void 0,
            Object.keys(imageMeta).length > 0 ? imageMeta : void 0
          );
          sendPendingMessage(stableKey, transformedContent);
          textarea.value = "";
          textarea.style.height = "auto";
          setPreviewMedia([]);
          clearDraft();
          cancelReplyOrEdit();
          textarea.focus();
          const result = await sendMessage$1(transformedContent);
          if (!result.status) {
            removeOptimisticMessage(tempId);
            alert(result.error || "发送失败");
          }
        }
      } catch (e) {
        alert("发送失败，请重试");
      } finally {
        setIsSending(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key !== "Enter") return;
      const isShortcut = e.ctrlKey || e.metaKey;
      if (settings.value.sendShortcut === "Enter" && !isShortcut || settings.value.sendShortcut === "CtrlEnter" && isShortcut) {
        e.preventDefault();
        handleSend();
      } else if (settings.value.sendShortcut === "Enter" && isShortcut) {
        e.preventDefault();
        const textarea = textareaRef.current;
        if (textarea) {
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const value = textarea.value;
          textarea.value = value.substring(0, start) + "\n" + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 1;
          handleInput();
        }
      }
    };
    const handlePaste = async (e) => {
      const items = [...e.clipboardData?.items || []].filter(
        (it) => it.kind === "file" && (it.type.startsWith("image/") || it.type.startsWith("video/") || it.type.startsWith("audio/"))
      );
      if (items.length > 0) {
        e.preventDefault();
        for (const item of items) {
          const file = item.getAsFile();
          if (file) {
            await handleFileUpload(file);
          }
        }
      }
    };
    const handleFileUpload = async (file) => {
      setIsUploading(true);
      try {
        const result = await uploadFile(file);
        if (result.status && result.url) {
          const textarea = textareaRef.current;
          if (textarea) {
            let tag = "img";
            if (file.type.startsWith("video/")) {
              tag = "video";
            } else if (file.type.startsWith("audio/")) {
              tag = "audio";
            }
            const bbcode = `[${tag}]${result.url}[/${tag}]`;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            textarea.value = value.substring(0, start) + bbcode + value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + bbcode.length;
            if (tag === "img" && result.width && result.height) {
              setPreviewMedia((prev) => [...prev, {
                type: "image",
                url: result.url,
                width: result.width,
                height: result.height,
                placeholder: result.placeholder
              }]);
            }
            handleInput();
          }
        } else {
          alert(result.error || "上传失败");
        }
      } catch (e) {
        alert("上传失败");
      } finally {
        setIsUploading(false);
      }
    };
    y$2(() => {
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
    return /* @__PURE__ */ u$2("div", { ref: containerRef, class: "chat-input-container", children: [
      /* @__PURE__ */ u$2(SmileyPanel, {}),
      /* @__PURE__ */ u$2(TextFormatter, { textareaRef }),
      /* @__PURE__ */ u$2(MentionCompleter, { textareaRef }),
      /* @__PURE__ */ u$2(TypingIndicator, {}),
      /* @__PURE__ */ u$2("div", { class: "chat-input-area", children: [
        (replyingTo.value || editingMessage.value) && /* @__PURE__ */ u$2("div", { id: "dollars-reply-preview", class: `reply-preview visible`, children: [
          /* @__PURE__ */ u$2("div", { class: "reply-bar" }),
          replyingTo.value && /* @__PURE__ */ u$2(k$3, { children: [
            /* @__PURE__ */ u$2(
              "img",
              {
                class: "reply-avatar",
                src: getAvatarUrl(replyingTo.value.avatar, "s"),
                alt: ""
              }
            ),
            /* @__PURE__ */ u$2("div", { class: "reply-info", children: [
              /* @__PURE__ */ u$2("span", { class: "reply-user", children: escapeHTML(replyingTo.value.user) }),
              /* @__PURE__ */ u$2("span", { class: "reply-text", children: escapeHTML(replyingTo.value.text.substring(0, 50)) })
            ] })
          ] }),
          editingMessage.value && /* @__PURE__ */ u$2("div", { class: "reply-info", children: [
            /* @__PURE__ */ u$2("span", { class: "reply-user", children: "编辑消息" }),
            /* @__PURE__ */ u$2("span", { class: "reply-text", children: escapeHTML(editingMessage.value.raw.substring(0, 50)) })
          ] }),
          /* @__PURE__ */ u$2(
            "button",
            {
              class: "reply-cancel-btn",
              onClick: () => {
                if (textareaRef.current) {
                  textareaRef.current.value = "";
                  textareaRef.current.style.height = "auto";
                }
                cancelReplyOrEdit();
              },
              children: "✕"
            }
          )
        ] }),
        previewMedia.length > 0 && /* @__PURE__ */ u$2("div", { class: "image-preview-container visible", children: previewMedia.map((media, index) => /* @__PURE__ */ u$2("div", { class: `image-preview-item ${media.type === "video" ? "video-preview-item" : ""}`, children: [
          media.type === "image" ? /* @__PURE__ */ u$2(
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
          ) : /* @__PURE__ */ u$2(k$3, { children: [
            /* @__PURE__ */ u$2(
              "video",
              {
                src: media.url,
                class: "preview-video",
                muted: true,
                preload: "metadata"
              }
            ),
            /* @__PURE__ */ u$2("div", { class: "video-play-overlay", children: /* @__PURE__ */ u$2("svg", { viewBox: "0 0 24 24", width: "24", height: "24", fill: "white", children: /* @__PURE__ */ u$2("path", { d: "M8 5v14l11-7z" }) }) })
          ] }),
          /* @__PURE__ */ u$2(
            "button",
            {
              class: "preview-remove-btn",
              onClick: () => handleRemoveMedia(index),
              title: media.type === "image" ? "删除图片" : "删除视频",
              children: "✕"
            }
          )
        ] }, index)) }),
        /* @__PURE__ */ u$2("div", { class: "input-wrapper", children: [
          /* @__PURE__ */ u$2(
            "button",
            {
              id: "dollars-emoji-btn",
              class: "action-btn",
              title: "表情",
              onClick: () => toggleSmileyPanel(),
              dangerouslySetInnerHTML: { __html: SVGIcons.emoji }
            }
          ),
          /* @__PURE__ */ u$2("div", { class: "dollars-input-wrapper", children: /* @__PURE__ */ u$2(
            "textarea",
            {
              ref: textareaRef,
              class: "chat-textarea",
              placeholder: "说点什么...",
              rows: 1,
              onInput: handleInput,
              onKeyDown: handleKeyDown,
              onPaste: handlePaste
            }
          ) }),
          /* @__PURE__ */ u$2("div", { class: "input-actions", children: [
            /* @__PURE__ */ u$2(
              "button",
              {
                id: "dollars-attach-btn",
                class: "action-btn",
                title: "上传图片/视频（长按上传音频）",
                onClick: handleAttachClick,
                onTouchStart: handleAttachTouchStart,
                onTouchEnd: handleAttachTouchEnd,
                onTouchCancel: handleAttachTouchEnd,
                onMouseDown: handleAttachTouchStart,
                onMouseUp: handleAttachTouchEnd,
                onMouseLeave: handleAttachTouchEnd,
                dangerouslySetInnerHTML: { __html: SVGIcons.upload }
              }
            ),
            /* @__PURE__ */ u$2(
              "input",
              {
                ref: fileInputRef,
                type: "file",
                accept: "image/*,video/*",
                style: { display: "none" },
                onChange: handleFileChange
              }
            ),
            /* @__PURE__ */ u$2(
              "button",
              {
                class: `send-btn ${isUploading ? "uploading" : ""}`,
                disabled: isSending || isUploading,
                onClick: handleSend,
                onMouseDown: (e) => e.preventDefault(),
                title: isUploading ? "上传中..." : "发送",
                dangerouslySetInnerHTML: { __html: SVGIcons.send }
              }
            )
          ] })
        ] })
      ] })
    ] });
  }

  function SearchPanel() {
    const results = useSignal([]);
    const isLoading = useSignal(false);
    const hasMore = useSignal(false);
    const searchOffset = A$2(0);
    const inputRef = A$2(null);
    const performSearch = q$2(async (q, isNewSearch = false) => {
      if (!q.trim()) {
        results.value = [];
        return;
      }
      if (isNewSearch) {
        results.value = [];
        searchOffset.current = 0;
        hasMore.value = true;
      }
      isLoading.value = true;
      try {
        const data = await searchMessages(q, searchOffset.current);
        if (isNewSearch) {
          results.value = data.messages;
        } else {
          results.value = [...results.value, ...data.messages];
        }
        hasMore.value = data.hasMore;
        searchOffset.current += data.messages.length;
      } catch (e) {
      } finally {
        isLoading.value = false;
      }
    }, []);
    const debouncedSearch = q$2(debounce((q) => performSearch(q, true), 500), []);
    y$2(() => {
      if (isSearchActive.value && searchQuery.value) {
        debouncedSearch(searchQuery.value);
      } else if (!searchQuery.value) {
        results.value = [];
      }
    }, [searchQuery.value, isSearchActive.value]);
    y$2(() => {
      if (isSearchActive.value && inputRef.current) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 50);
      }
    }, [isSearchActive.value]);
    const handleInput = (e) => {
      const val = e.target.value;
      searchQuery.value = val;
    };
    const handleScroll = (e) => {
      const el = e.target;
      if (!isLoading.value && hasMore.value && el.scrollHeight - el.scrollTop - el.clientHeight < 50) {
        performSearch(searchQuery.value, false);
      }
    };
    const handleClose = () => {
      toggleSearch(false);
      searchQuery.value = "";
      results.value = [];
    };
    const handleResultClick = async (msg) => {
      handleClose();
      const { loadMessageContext } = await __vitePreload(async () => { const { loadMessageContext } = await Promise.resolve().then(() => chat);return { loadMessageContext }},false             ?__VITE_PRELOAD__:void 0);
      const result = await loadMessageContext(msg.id);
      if (result) {
        setTimeout(() => {
          const targetId = `db-${msg.id}`;
          const el = document.getElementById(targetId);
          const listEl = document.querySelector(".chat-list");
          if (el) {
            el.scrollIntoView({ behavior: "auto", block: "center" });
            setTimeout(() => {
              const container = document.querySelector(".chat-body");
              if (container) {
                const startTop = container.scrollTop;
                const containerHeight = container.clientHeight;
                const elTop = el.offsetTop;
                const elHeight = el.offsetHeight;
                const targetTop = Math.max(0, elTop - containerHeight / 2 + elHeight / 2);
                const distance = targetTop - startTop;
                const duration = 600;
                const startTime = performance.now();
                const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
                const animate = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  if (progress < 1) {
                    container.scrollTop = startTop + distance * easeOutCubic(progress);
                    requestAnimationFrame(animate);
                  } else {
                    container.scrollTop = startTop + distance;
                  }
                };
                requestAnimationFrame(animate);
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
          } else {
            const msgElements = listEl?.querySelectorAll(".chat-message");
            if (msgElements && result.targetIndex < msgElements.length) {
              const targetEl = msgElements[result.targetIndex];
              targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }
        }, 300);
      }
    };
    const dateInputRef = A$2(null);
    const openDatePicker = () => {
      if (dateInputRef.current) {
        if ("showPicker" in HTMLInputElement.prototype) {
          try {
            dateInputRef.current.showPicker();
          } catch (err) {
            dateInputRef.current.click();
          }
        } else {
          dateInputRef.current.click();
        }
      }
    };
    const handleDateChange = async (e) => {
      const date = e.target.value;
      if (!date) return;
      const { getFirstMessageIdByDate } = await __vitePreload(async () => { const { getFirstMessageIdByDate } = await Promise.resolve().then(() => api);return { getFirstMessageIdByDate }},false             ?__VITE_PRELOAD__:void 0);
      const msgId = await getFirstMessageIdByDate(date);
      if (msgId) {
        handleResultClick({ id: msgId });
      } else {
        alert(`日期 ${date} 没有找到消息`);
      }
      e.target.value = "";
    };
    if (!isSearchActive.value) return null;
    return /* @__PURE__ */ u$2("div", { id: "dollars-search-ui", children: [
      /* @__PURE__ */ u$2("div", { class: "search-panel-row", children: [
        /* @__PURE__ */ u$2("div", { class: "search-bar", style: { flex: 1, marginBottom: 0 }, children: [
          /* @__PURE__ */ u$2(
            "div",
            {
              class: "search-icon",
              style: { display: "flex", alignItems: "center", opacity: 0.5 },
              dangerouslySetInnerHTML: { __html: SVGIcons.search }
            }
          ),
          /* @__PURE__ */ u$2(
            "input",
            {
              ref: inputRef,
              type: "search",
              placeholder: "搜索消息...",
              value: searchQuery.value,
              onInput: handleInput,
              autoFocus: true
            }
          ),
          /* @__PURE__ */ u$2(
            "div",
            {
              class: "search-close-btn",
              onClick: handleClose,
              dangerouslySetInnerHTML: { __html: SVGIcons.close }
            }
          )
        ] }),
        /* @__PURE__ */ u$2(
          "div",
          {
            class: "search-calendar-btn",
            onClick: openDatePicker,
            title: "按日期跳转",
            dangerouslySetInnerHTML: { __html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M11 15h1" /><path d="M12 15v3" /></svg>` }
          }
        )
      ] }),
      /* @__PURE__ */ u$2(
        "input",
        {
          type: "date",
          ref: dateInputRef,
          onChange: handleDateChange,
          style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 }
        }
      ),
      /* @__PURE__ */ u$2("div", { id: "dollars-search-results", onScroll: handleScroll, children: [
        results.value.map((msg) => /* @__PURE__ */ u$2(
          "div",
          {
            class: "search-result-item",
            onClick: () => handleResultClick(msg),
            children: [
              /* @__PURE__ */ u$2("img", { src: getAvatarUrl(msg.avatar, "s"), alt: msg.nickname }),
              /* @__PURE__ */ u$2("div", { class: "dollars-search-content", children: [
                /* @__PURE__ */ u$2("div", { class: "dollars-search-header", children: [
                  /* @__PURE__ */ u$2("span", { class: "dollars-search-nickname", children: msg.nickname }),
                  /* @__PURE__ */ u$2("span", { class: "dollars-search-timestamp", children: formatDate(msg.timestamp, "full") })
                ] }),
                /* @__PURE__ */ u$2("div", { class: "dollars-search-message", children: msg.message.replace(/\[.*?\]/g, " ") })
              ] })
            ]
          },
          msg.id
        )),
        isLoading.value && /* @__PURE__ */ u$2("div", { style: { textAlign: "center", padding: "10px", color: "#999" }, children: "搜索中..." }),
        !isLoading.value && results.value.length === 0 && searchQuery.value && /* @__PURE__ */ u$2("div", { style: { textAlign: "center", padding: "20px", color: "#999" }, children: "未找到相关消息" })
      ] })
    ] });
  }

  function FloatingUI() {
    const lastDateLabel = A$2("");
    const isDateVisible = useSignal(false);
    y$2(() => {
      const label = currentDateLabel.value;
      if (label) {
        lastDateLabel.current = label;
        isDateVisible.value = true;
      } else {
        isDateVisible.value = false;
      }
    }, [currentDateLabel.value]);
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
      const jumpList = unreadJumpList.value;
      if (jumpList.length === 0) return;
      const nextMentionId = jumpList[0];
      unreadJumpList.value = jumpList.slice(1);
      pendingJumpToMessage.value = nextMentionId;
    };
    const bottomBtnBottom = inputAreaHeight.value + 20;
    const mentionBtnBottom = bottomBtnBottom + 50;
    const showMentionBtn = unreadJumpList.value.length > 0;
    const scrollBtnClasses = `nav-btn ${showScrollBottomBtn.value ? "visible" : ""} mode-${scrollButtonMode.value}`;
    const currentUnreadCount = unreadCount.value;
    const getTooltip = () => {
      return scrollButtonMode.value === "to-unread" ? "跳转到未读消息" : "跳转到最新消息";
    };
    return /* @__PURE__ */ u$2(k$3, { children: [
      /* @__PURE__ */ u$2("div", { id: "dollars-floating-date", class: isDateVisible.value ? "visible" : "", children: lastDateLabel.current || currentDateLabel.value }),
      /* @__PURE__ */ u$2(
        "div",
        {
          id: "dollars-scroll-mention-btn",
          class: `nav-btn ${showMentionBtn ? "visible" : ""}`,
          onClick: handleScrollToMention,
          style: { bottom: `${mentionBtnBottom}px` },
          title: "跳转到提及消息",
          children: [
            /* @__PURE__ */ u$2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ u$2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ u$2("path", { d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }),
              /* @__PURE__ */ u$2("path", { d: "M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" })
            ] }),
            unreadJumpList.value.length > 0 && /* @__PURE__ */ u$2("div", { id: "dollars-mention-badge", style: {
              display: "block",
              position: "absolute",
              top: "-5px",
              right: "-5px",
              minWidth: "18px",
              height: "18px",
              borderRadius: "9px",
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              lineHeight: "18px",
              textAlign: "center",
              padding: "0 5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)"
            }, children: unreadJumpList.value.length > 99 ? "99+" : unreadJumpList.value.length })
          ]
        }
      ),
      /* @__PURE__ */ u$2(
        "div",
        {
          id: "dollars-scroll-bottom-btn",
          class: scrollBtnClasses,
          onClick: handleScrollBottom,
          style: { bottom: `${bottomBtnBottom}px` },
          title: getTooltip(),
          children: [
            /* @__PURE__ */ u$2("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ u$2("path", { d: "M12 5v14m-7-7l7 7 7-7" }) }),
            currentUnreadCount > 0 && /* @__PURE__ */ u$2("div", { id: "dollars-unread-badge", style: { display: "block" }, children: currentUnreadCount > 99 ? "99+" : currentUnreadCount })
          ]
        }
      )
    ] });
  }

  const extensionConversations = d$1([]);
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

  function ConversationList({ searchTerm = "" }) {
    const extensionItems = extensionConversations.value.filter((item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => (b.priority || 0) - (a.priority || 0));
    const filteredConversations = searchTerm ? conversations.value.filter(
      (conv) => conv.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) : conversations.value;
    const handleClick = (conversationId) => {
      setActiveConversation(conversationId);
      if (isNarrowLayout.value) {
        setMobileChatView(true);
      }
    };
    return /* @__PURE__ */ u$2("div", { id: "dollars-conversation-list", children: [
      extensionItems.map((item) => /* @__PURE__ */ u$2(
        "div",
        {
          class: "conversation-item extension-item",
          onClick: item.onClick,
          children: [
            /* @__PURE__ */ u$2("img", { src: item.avatar, class: "avatar", alt: item.title, loading: "lazy" }),
            /* @__PURE__ */ u$2("div", { class: "dollars-conv-content", children: [
              /* @__PURE__ */ u$2("div", { class: "dollars-conv-title", children: /* @__PURE__ */ u$2("span", { class: "dollars-conv-nickname", children: item.title }) }),
              item.subtitle && /* @__PURE__ */ u$2("div", { class: "dollars-conv-last-message", children: item.subtitle })
            ] }),
            item.badge && /* @__PURE__ */ u$2("div", { class: "unread-badge", children: item.badge })
          ]
        },
        `ext-${item.id}`
      )),
      filteredConversations.map((conv) => {
        const isActive = conv.id === activeConversationId.value;
        const title = conv.type === "channel" ? conv.title : conv.user?.nickname || conv.title;
        const avatarUrl = conv.type === "channel" ? conv.avatar : conv.user?.avatar || conv.avatar;
        const lastMessageText = (conv.lastMessage.text || "").replace(/\[.*?\]/g, "").trim();
        const timeText = conv.lastMessage.timestamp ? formatDate(conv.lastMessage.timestamp, "time") : "";
        return /* @__PURE__ */ u$2(
          "div",
          {
            class: `conversation-item ${isActive ? "active" : ""}`,
            "data-conversation-id": conv.id,
            onClick: () => handleClick(conv.id),
            children: [
              /* @__PURE__ */ u$2("img", { src: avatarUrl, class: "avatar", alt: title, loading: "lazy" }),
              /* @__PURE__ */ u$2("div", { class: "dollars-conv-content", children: [
                /* @__PURE__ */ u$2("div", { class: "dollars-conv-title", children: [
                  /* @__PURE__ */ u$2("span", { class: "dollars-conv-nickname", children: title }),
                  /* @__PURE__ */ u$2("span", { class: "dollars-conv-timestamp", children: timeText })
                ] }),
                /* @__PURE__ */ u$2("div", { class: "dollars-conv-last-message", children: lastMessageText || " " })
              ] }),
              conv.unreadCount > 0 && /* @__PURE__ */ u$2("div", { class: "unread-badge", children: conv.unreadCount })
            ]
          },
          conv.id
        );
      })
    ] });
  }

  function Sidebar() {
    const [searchTerm, setSearchTerm] = d$2("");
    const handleSearchInput = (e) => {
      const target = e.target;
      setSearchTerm(target.value);
    };
    return /* @__PURE__ */ u$2("div", { id: "dollars-sidebar", children: [
      /* @__PURE__ */ u$2("div", { id: "dollars-sidebar-search-container", children: /* @__PURE__ */ u$2(
        "input",
        {
          type: "search",
          id: "dollars-sidebar-search-input",
          placeholder: "搜索对话...",
          value: searchTerm,
          onInput: handleSearchInput
        }
      ) }),
      /* @__PURE__ */ u$2(ConversationList, { searchTerm })
    ] });
  }

  function saveWindowPosition(element) {
    if (!settings.value.rememberOpenState) return;
    localStorage.setItem("dollarsChatPosition", JSON.stringify({
      x: element.offsetLeft,
      y: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight
    }));
  }
  function ChatWindow({ skipEntryAnimation = false }) {
    const windowRef = A$2(null);
    useWebSocket();
    const [animateIn, setAnimateIn] = d$2(skipEntryAnimation);
    y$2(() => {
      if (!skipEntryAnimation) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimateIn(true);
          });
        });
      }
    }, []);
    const dragState = A$2({
      isDragging: false,
      startX: 0,
      startY: 0,
      initialLeft: 0,
      initialTop: 0
    });
    const handleDragStart = (e) => {
      if (isMobileViewport.value || isMaximized.value) return;
      const target = e.target;
      if (!target.closest(".chat-header") || target.closest("button")) return;
      e.preventDefault();
      dragState.current = {
        isDragging: true,
        startX: e.clientX,
        startY: e.clientY,
        initialLeft: windowRef.current?.offsetLeft || 0,
        initialTop: windowRef.current?.offsetTop || 0
      };
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);
    };
    const handleDragMove = (e) => {
      if (!dragState.current.isDragging || !windowRef.current) return;
      const dx = e.clientX - dragState.current.startX;
      const dy = e.clientY - dragState.current.startY;
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
      if (windowRef.current) {
        saveWindowPosition(windowRef.current);
      }
    };
    y$2(() => {
      if (isMobileViewport.value || isMaximized.value || !settings.value.rememberOpenState) return;
      try {
        const saved = localStorage.getItem("dollarsChatPosition");
        if (saved && windowRef.current) {
          const { x, y, width, height } = JSON.parse(saved);
          windowRef.current.style.left = `${x}px`;
          windowRef.current.style.top = `${y}px`;
          if (width) windowRef.current.style.width = `${width}px`;
          if (height) windowRef.current.style.height = `${height}px`;
        }
      } catch (e) {
      }
    }, []);
    y$2(() => {
      let rafId;
      const handleResize = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          if (!windowRef.current || isMobileViewport.value || isMaximized.value) return;
          const rect = windowRef.current.getBoundingClientRect();
          const width = rect.width;
          const height = rect.height;
          const maxLeft = Math.max(0, window.innerWidth - width);
          const maxTop = Math.max(0, window.innerHeight - height);
          let newLeft = rect.left;
          let newTop = rect.top;
          let needsUpdate = false;
          if (newLeft > maxLeft) {
            newLeft = maxLeft;
            needsUpdate = true;
          }
          if (newTop > maxTop) {
            newTop = maxTop;
            needsUpdate = true;
          }
          if (needsUpdate) {
            windowRef.current.style.left = `${newLeft}px`;
            windowRef.current.style.top = `${newTop}px`;
          }
        });
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }, []);
    y$2(() => {
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
    y$2(() => {
      if (isChatOpen.value && windowRef.current) {
        ensureNarrowLayoutChatView(windowRef.current.offsetWidth);
      }
    }, [isChatOpen.value]);
    const resizeState = A$2({
      isResizing: false,
      startX: 0,
      startY: 0,
      initialWidth: 0,
      initialHeight: 0,
      initialLeft: 0,
      initialTop: 0
    });
    const handleResizeStart = (e) => {
      if (isMobileViewport.value || isMaximized.value) return;
      e.preventDefault();
      e.stopPropagation();
      if (!windowRef.current) return;
      const rect = windowRef.current.getBoundingClientRect();
      resizeState.current = {
        isResizing: true,
        startX: e.clientX,
        startY: e.clientY,
        initialWidth: rect.width,
        initialHeight: rect.height,
        initialLeft: rect.left,
        initialTop: rect.top
      };
      document.addEventListener("mousemove", handleResizeMove);
      document.addEventListener("mouseup", handleResizeEnd);
    };
    const handleResizeMove = (e) => {
      if (!resizeState.current.isResizing || !windowRef.current) return;
      const dx = resizeState.current.startX - e.clientX;
      const dy = resizeState.current.startY - e.clientY;
      const newWidth = Math.max(320, resizeState.current.initialWidth + dx);
      const newHeight = Math.max(400, resizeState.current.initialHeight + dy);
      windowRef.current.style.width = `${newWidth}px`;
      windowRef.current.style.height = `${newHeight}px`;
      windowRef.current.style.left = `${resizeState.current.initialLeft - (newWidth - resizeState.current.initialWidth)}px`;
      windowRef.current.style.top = `${resizeState.current.initialTop - (newHeight - resizeState.current.initialHeight)}px`;
    };
    const handleResizeEnd = () => {
      resizeState.current.isResizing = false;
      document.removeEventListener("mousemove", handleResizeMove);
      document.removeEventListener("mouseup", handleResizeEnd);
      if (windowRef.current) {
        saveWindowPosition(windowRef.current);
      }
    };
    const className = [
      "dollars-chat-window",
      animateIn && isChatOpen.value && "visible",
      isMobileViewport.value && "mobile",
      isMaximized.value && "maximized",
      isSearchActive.value && "search-active",
      isNarrowLayout.value && "is-narrow",
      mobileChatViewActive.value && "mobile-chat-active"
    ].filter(Boolean).join(" ");
    y$2(() => {
      const bmoji = window.Bmoji;
      const container = windowRef.current;
      if (!bmoji || !container) return;
      if (typeof bmoji.observe === "function") {
        bmoji.observe(container, { width: 21, height: 21 });
      }
      if (typeof bmoji.renderAll === "function") {
        bmoji.renderAll(container, { width: 21, height: 21 });
      }
      return () => {
        if (typeof bmoji.disconnect === "function") {
          bmoji.disconnect();
        }
      };
    }, []);
    return /* @__PURE__ */ u$2(
      "div",
      {
        id: "dollars-chat-window",
        ref: windowRef,
        class: className,
        onMouseDown: handleDragStart,
        children: [
          /* @__PURE__ */ u$2(
            "div",
            {
              id: "dollars-resize-handle",
              title: "调整窗口大小",
              onMouseDown: handleResizeStart
            }
          ),
          /* @__PURE__ */ u$2(ChatHeader, {}),
          /* @__PURE__ */ u$2("div", { id: "dollars-content-panes", children: [
            /* @__PURE__ */ u$2(Sidebar, {}),
            /* @__PURE__ */ u$2("div", { id: "dollars-main-chat", children: [
              /* @__PURE__ */ u$2(SearchPanel, {}),
              /* @__PURE__ */ u$2(ChatBody, {}),
              /* @__PURE__ */ u$2(FloatingUI, {}),
              /* @__PURE__ */ u$2(ChatInput, {})
            ] })
          ] })
        ]
      }
    );
  }

  function ReactionPickerFloating() {
    const [activeTab, setActiveTab] = d$2("TV");
    const [bmoItems, setBmoItems] = d$2([]);
    const contentRef = A$2(null);
    const containerRef = A$2(null);
    y$2(() => {
      if (activeTab === "BMO") {
        try {
          const bmoji = window.Bmoji;
          const savedBmo = bmoji?.savedBmo?.list?.() || JSON.parse(localStorage.getItem("chii_saved_bmo") || "[]");
          if (Array.isArray(savedBmo)) {
            setBmoItems(savedBmo.filter((item) => item && item.code));
          }
        } catch (e) {
          setBmoItems([]);
        }
      }
    }, [activeTab]);
    y$2(() => {
      const bmoji = window.Bmoji;
      if (!isReactionPickerOpen.value || !bmoji || !containerRef.current) return;
      requestAnimationFrame(() => {
        if (containerRef.current) {
          bmoji.renderAll(containerRef.current, { width: 21, height: 21 });
        }
      });
    }, [isReactionPickerOpen.value, activeTab, bmoItems]);
    y$2(() => {
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
        let { x: x2, y: y2, width: width2 } = reactionPickerPosition.value;
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
    const handleReaction = q$2(async (emoji) => {
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
      specialContent = /* @__PURE__ */ u$2("div", { style: { display: "contents" }, children: bmoItems.length > 0 ? bmoItems.map((item) => /* @__PURE__ */ u$2("li", { class: "smiley-item", children: /* @__PURE__ */ u$2(
        "a",
        {
          href: "#",
          "data-smiley": item.code,
          title: item.name || item.code,
          onClick: (e) => {
            e.preventDefault();
            handleReaction(item.code);
          },
          children: /* @__PURE__ */ u$2("span", { class: "bmo", "data-code": item.code })
        }
      ) }, item.code)) : /* @__PURE__ */ u$2("p", { style: { width: "100%", textAlign: "center", color: "var(--dollars-text-secondary)", fontSize: "12px", marginTop: "20px", padding: "0 10px" }, children: "暂无保存的 BMO 表情" }) });
    } else {
      smileys = generateSmileyCodes(activeTab);
    }
    return /* @__PURE__ */ u$2(
      "div",
      {
        id: "dollars-reaction-picker-floating",
        class: `open ${isReactionPickerClosing.value ? "closing" : ""}`,
        ref: containerRef,
        style: { left: `${x}px`, top: `${y}px`, width: `${width}px` },
        children: [
          /* @__PURE__ */ u$2("div", { class: "reaction-picker-tabs", children: smileyRangesWithoutFavorites.map((range) => {
            let textContent = range.name;
            if (range.name === "BMO") {
              textContent = /* @__PURE__ */ u$2("span", { class: "bmo", "data-code": "(bmoCgASACIBLgCg)", style: { verticalAlign: "middle" } });
            } else if (range.path && range.start) {
              textContent = /* @__PURE__ */ u$2("img", { src: range.path(range.start), alt: range.name, style: { width: "21px", height: "21px", verticalAlign: "middle" } });
            }
            return /* @__PURE__ */ u$2(
              "button",
              {
                class: `reaction-picker-tab-btn ${activeTab === range.name ? "active" : ""}`,
                "data-group": range.name,
                onClick: () => setActiveTab(range.name),
                title: range.name,
                children: textContent
              },
              range.name
            );
          }) }),
          /* @__PURE__ */ u$2("div", { class: "reaction-picker-content", ref: contentRef, children: [
            specialContent,
            smileys.map((code) => {
              const url = getSmileyUrl(code);
              return /* @__PURE__ */ u$2("li", { class: "smiley-item", children: /* @__PURE__ */ u$2(
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
              ) }, code);
            })
          ] })
        ]
      }
    );
  }

  function ContextMenu() {
    const menuRef = A$2(null);
    y$2(() => {
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
    y$2(() => {
      if (isContextMenuOpen.value && menuRef.current) {
        setTimeout(() => {
          if (window.Bmoji && menuRef.current) {
            window.Bmoji.renderAll(menuRef.current, { width: 24, height: 24 });
          }
        }, 0);
      }
    }, [isContextMenuOpen.value]);
    const handleReaction = q$2(async (emoji) => {
      const targetId2 = contextMenuTargetId.value;
      if (!targetId2) return;
      hideContextMenu();
      await toggleReaction(Number(targetId2), emoji);
    }, []);
    const handleMoreReactions = q$2((e) => {
      e.stopPropagation();
      if (isReactionPickerOpen.value) {
        hideReactionPicker();
        return;
      }
      const button = e.currentTarget;
      const reactionsRow = button.closest(".context-menu-reactions");
      if (reactionsRow) {
        const rect = reactionsRow.getBoundingClientRect();
        showReactionPicker(rect.left, rect.bottom + 8, rect.width);
      }
    }, []);
    const handleReply = q$2(() => {
      const targetId2 = contextMenuTargetId.value;
      if (!targetId2) return;
      hideContextMenu();
      const msgData = messageStore.value.get(targetId2);
      const messageEl = document.getElementById(`db-${targetId2}`);
      if (!msgData || !messageEl) return;
      const uid = messageEl.dataset.uid || "";
      const user = messageEl.querySelector(".nickname a")?.textContent?.trim() || "";
      const avatar = messageEl.querySelector(".avatar")?.src || "";
      const text = stripQuotes(decodeHTML(msgData.raw)).replace(/\[img\].*?\[\/img\]/gi, "[图片]").replace(/\n/g, " ").replace(/\s+/g, " ").trim();
      setReplyTo({
        id: targetId2,
        uid,
        user,
        text,
        raw: msgData.raw,
        avatar
      });
    }, []);
    const handleEdit = q$2(() => {
      const targetId2 = contextMenuTargetId.value;
      if (!targetId2) return;
      hideContextMenu();
      const msgData = messageStore.value.get(targetId2);
      if (!msgData) return;
      const rawContent = msgData.raw;
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
        hiddenQuote
      });
    }, []);
    const handleCopy = q$2(async () => {
      const targetId2 = contextMenuTargetId.value;
      if (!targetId2) return;
      hideContextMenu();
      const msgData = messageStore.value.get(targetId2);
      if (!msgData) return;
      const plainText = decodeHTML(msgData.raw).replace(/\[.*?\]/g, "").trim();
      try {
        await navigator.clipboard.writeText(plainText);
      } catch (e) {
      }
    }, []);
    const handleDelete = q$2(async () => {
      const targetId2 = contextMenuTargetId.value;
      if (!targetId2) return;
      hideContextMenu();
      if (!confirm("确认撤回这条消息吗？")) {
        return;
      }
      const result = await deleteMessage(Number(targetId2));
      if (!result.status) {
        alert(result.error || "撤回失败");
      }
    }, []);
    const handleFavorite = q$2((e) => {
      const button = e.currentTarget;
      button.querySelector("span:not(.context-icon)")?.textContent || "收藏表情";
      if (contextMenuBmoCode.value) {
        const bmoCode = contextMenuBmoCode.value;
        try {
          const bmoji = window.Bmoji;
          const existing = bmoji.savedBmo.list() || [];
          if (!existing.some((i) => i.code === bmoCode)) {
            bmoji.savedBmo.create({ code: bmoCode, name: bmoCode });
            const span = button.querySelector("span:not(.context-icon)");
            if (span) span.textContent = "已存入BMO面板";
          } else {
            const span = button.querySelector("span:not(.context-icon)");
            if (span) span.textContent = "已存在";
          }
        } catch (err) {
          const span = button.querySelector("span:not(.context-icon)");
          if (span) span.textContent = "收藏失败";
        }
      } else if (contextMenuImageUrl.value) {
        try {
          addFavorite(contextMenuImageUrl.value);
          const span = button.querySelector("span:not(.context-icon)");
          if (span) span.textContent = "已收藏";
        } catch (err) {
          const span = button.querySelector("span:not(.context-icon)");
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
    return /* @__PURE__ */ u$2(k$3, { children: [
      /* @__PURE__ */ u$2(
        "div",
        {
          id: "dollars-context-menu",
          ref: menuRef,
          class: `visible has-items-wrapper ${hasImage ? "image-mode" : ""} ${isContextMenuClosing.value ? "closing" : ""}`,
          style: { left: `${x}px`, top: `${y}px`, pointerEvents: "auto" },
          children: [
            targetId && /* @__PURE__ */ u$2("div", { class: "context-menu-reactions", children: [
              CONTEXT_MENU_REACTIONS.map((emoji) => {
                const url = getSmileyUrl(emoji);
                const isBmo = emoji.startsWith("(bmo");
                return /* @__PURE__ */ u$2(
                  "div",
                  {
                    class: "reaction-item",
                    "data-emoji": emoji,
                    onClick: () => handleReaction(emoji),
                    children: [
                      url && /* @__PURE__ */ u$2("img", { src: url, alt: emoji }),
                      isBmo && /* @__PURE__ */ u$2("span", { class: "bmo", "data-code": emoji })
                    ]
                  },
                  emoji
                );
              }),
              /* @__PURE__ */ u$2(
                "button",
                {
                  class: `context-menu-reactions-more ${isReactionPickerOpen.value ? "expanded" : ""}`,
                  onClick: handleMoreReactions,
                  title: "更多表情",
                  dangerouslySetInnerHTML: { __html: SVGIcons.expand }
                }
              )
            ] }),
            !isReactionPickerOpen.value && /* @__PURE__ */ u$2("div", { class: "context-menu-items", children: [
              /* @__PURE__ */ u$2("button", { "data-action": "reply", onClick: handleReply, children: [
                /* @__PURE__ */ u$2("span", { class: "context-icon", dangerouslySetInnerHTML: { __html: SVGIcons.reply } }),
                /* @__PURE__ */ u$2("span", { children: "回复" })
              ] }),
              /* @__PURE__ */ u$2("button", { "data-action": "copy", onClick: handleCopy, children: [
                /* @__PURE__ */ u$2("span", { class: "context-icon", dangerouslySetInnerHTML: { __html: SVGIcons.copy } }),
                /* @__PURE__ */ u$2("span", { children: "复制" })
              ] }),
              hasImage && /* @__PURE__ */ u$2("button", { class: "image-action", "data-action": "favorite", onClick: handleFavorite, children: [
                /* @__PURE__ */ u$2("span", { class: "context-icon", dangerouslySetInnerHTML: { __html: SVGIcons.favorite } }),
                /* @__PURE__ */ u$2("span", { children: "收藏表情" })
              ] }),
              isSelf && /* @__PURE__ */ u$2(k$3, { children: [
                /* @__PURE__ */ u$2("button", { class: "auth-action", "data-action": "edit", onClick: handleEdit, children: [
                  /* @__PURE__ */ u$2("span", { class: "context-icon", dangerouslySetInnerHTML: { __html: SVGIcons.edit } }),
                  /* @__PURE__ */ u$2("span", { children: "编辑" })
                ] }),
                /* @__PURE__ */ u$2("button", { class: "auth-action danger", "data-action": "delete", onClick: handleDelete, children: [
                  /* @__PURE__ */ u$2("span", { class: "context-icon", dangerouslySetInnerHTML: { __html: SVGIcons.delete } }),
                  /* @__PURE__ */ u$2("span", { children: "撤回" })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ u$2(ReactionPickerFloating, {})
    ] });
  }

  function ProfileCard() {
    const cardRef = A$2(null);
    const [profile, setProfile] = d$2(null);
    const [loading, setLoading] = d$2(false);
    const userId = profileCardUserId.value;
    const anchor = profileCardAnchor.value;
    y$2(() => {
      if (!userId) {
        setProfile(null);
        return;
      }
      const loadProfile = async () => {
        setLoading(true);
        const data = await fetchUserProfile(userId);
        if (data) {
          setProfile(data);
        }
        setLoading(false);
      };
      loadProfile();
    }, [userId]);
    y$2(() => {
      if (!userId || !anchor || !cardRef.current) return;
      const card = cardRef.current;
      const rect = anchor.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      let top = rect.top;
      let left = rect.right + 10;
      if (left + cardRect.width > window.innerWidth) {
        left = rect.left - cardRect.width - 10;
      }
      left = Math.max(10, Math.min(left, window.innerWidth - cardRect.width - 10));
      top = Math.max(10, Math.min(top, window.innerHeight - cardRect.height - 10));
      card.style.top = `${top}px`;
      card.style.left = `${left}px`;
    }, [userId, anchor, profile]);
    y$2(() => {
      if (!userId) return;
      const timeoutId = setTimeout(() => {
        const handleClickOutside = (e) => {
          if (cardRef.current && !cardRef.current.contains(e.target) && anchor && !anchor.contains(e.target)) {
            hideProfileCard();
          }
        };
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("touchend", handleClickOutside);
        window.__dollarsProfileCardCleanup = () => {
          document.removeEventListener("click", handleClickOutside);
          document.removeEventListener("touchend", handleClickOutside);
        };
      }, 0);
      return () => {
        clearTimeout(timeoutId);
        if (window.__dollarsProfileCardCleanup) {
          window.__dollarsProfileCardCleanup();
          delete window.__dollarsProfileCardCleanup;
        }
      };
    }, [userId, anchor]);
    if (!userId) return null;
    const handleHistory = () => {
      if (profile) {
        searchQuery.value = `user:${profile.username}`;
        toggleSearch(true);
        hideProfileCard();
      }
    };
    const handleHomepage = () => {
      if (profile) {
        window.open(`/user/${profile.username}`, "_blank");
        hideProfileCard();
      }
    };
    return /* @__PURE__ */ u$2(
      "div",
      {
        id: "dollars-profile-card",
        ref: cardRef,
        class: `${userId ? "visible" : ""} ${isProfileCardClosing.value ? "closing" : ""}`,
        children: [
          /* @__PURE__ */ u$2("div", { class: "dollars-profile-banner" }),
          /* @__PURE__ */ u$2("div", { class: "dollars-profile-body", children: [
            /* @__PURE__ */ u$2("div", { class: "dollars-profile-top-row", children: [
              /* @__PURE__ */ u$2("div", { class: "dollars-profile-identity", children: [
                /* @__PURE__ */ u$2(
                  "img",
                  {
                    class: "dollars-profile-avatar",
                    src: profile ? getAvatarUrl(profile.avatar, "l") : "",
                    alt: "avatar"
                  }
                ),
                /* @__PURE__ */ u$2("div", { class: "dollars-profile-names", children: [
                  /* @__PURE__ */ u$2("div", { class: "dollars-profile-nickname", children: profile ? profile.nickname : "Loading..." }),
                  /* @__PURE__ */ u$2("div", { class: "dollars-profile-username", children: [
                    "@",
                    profile ? profile.username : userId
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ u$2("div", { class: "dollars-profile-actions", children: [
                /* @__PURE__ */ u$2(
                  "button",
                  {
                    class: "dollars-profile-btn",
                    title: "搜索历史发言",
                    onClick: handleHistory,
                    dangerouslySetInnerHTML: { __html: SVGIcons.history }
                  }
                ),
                /* @__PURE__ */ u$2(
                  "button",
                  {
                    class: "dollars-profile-btn",
                    title: "主页",
                    onClick: handleHomepage,
                    dangerouslySetInnerHTML: { __html: SVGIcons.home }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ u$2("div", { class: "dollars-profile-sign", children: profile?.sign || "这个人很懒，什么都没有写..." }),
            /* @__PURE__ */ u$2("div", { class: `dollars-profile-footer ${!loading && profile?.stats?.last_message_time && formatDate(new Date(profile.stats.last_message_time).getTime() / 1e3, "label") === "今天" ? "active" : ""}`, children: loading ? "加载中..." : profile?.stats?.last_message_time ? (() => {
              const date = new Date(profile.stats.last_message_time);
              const ts = date.getTime() / 1e3;
              const label = formatDate(ts, "label");
              const time = formatDate(ts, "time");
              return `最近活跃: ${label} ${time}`;
            })() : "暂无发言记录" })
          ] })
        ]
      }
    );
  }

  function DockButton() {
    const dockContainer = document.querySelector("#dock ul");
    const notifyLink = document.querySelector('#dock a[href*="/notify/all"]');
    if (!dockContainer || !notifyLink) return null;
    y$2(() => {
      const parentLi = notifyLink.closest("li");
      if (!parentLi) return;
      const li = document.createElement("li");
      li.className = "chat";
      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.05 20.1l-3.05 -6.1l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.312 9.173" /><path d="M19 16l-2 3h4l-2 3" /></svg>`;
      li.innerHTML = `<a href="#" id="dock-chat-link" title="打开聊天窗口"><span class="ico ico-sq ico_robot_open" style="background-image: url('data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgString)}');">聊天</span></a>`;
      parentLi.before(li);
      const link = li.querySelector("#dock-chat-link");
      const handleClick = (e) => {
        e.preventDefault();
        toggleChat(!isChatOpen.value);
        if (!isChatOpen.value) {
          stopDockFlashing();
        }
      };
      link?.addEventListener("click", handleClick);
      const unsubscribeFlashing = dockIconFlashing.subscribe((flashing) => {
        if (link) {
          if (flashing) {
            link.classList.add("flashing");
          } else {
            link.classList.remove("flashing");
          }
        }
      });
      const unsubscribeCount = notificationCount.subscribe((count) => {
        let badge = link?.querySelector(".dock-notif-badge");
        if (count > 0) {
          if (!badge) {
            badge = document.createElement("span");
            badge.className = "dock-notif-badge";
            link?.appendChild(badge);
          }
          badge.textContent = count > 99 ? "99+" : String(count);
          badge.style.display = "block";
        } else if (badge) {
          badge.style.display = "none";
        }
      });
      return () => {
        link?.removeEventListener("click", handleClick);
        unsubscribeFlashing();
        unsubscribeCount();
        li.remove();
      };
    }, []);
    return null;
  }

  class ErrorBoundary extends x$3 {
    state = {
      hasError: false,
      error: null
    };
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
    }
    render() {
      if (this.state.hasError) {
        if (this.props.fallback) {
          return this.props.fallback;
        }
        return /* @__PURE__ */ u$2("div", { class: "error-fallback", style: {
          padding: "20px",
          textAlign: "center",
          color: "var(--dollars-text-secondary, #888)"
        }, children: [
          /* @__PURE__ */ u$2("div", { style: { fontSize: "24px", marginBottom: "10px" }, children: "😢" }),
          /* @__PURE__ */ u$2("div", { children: "加载出错了" }),
          /* @__PURE__ */ u$2(
            "button",
            {
              style: {
                marginTop: "10px",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                background: "var(--primary-color, #f09199)",
                color: "white",
                cursor: "pointer"
              },
              onClick: () => this.setState({ hasError: false, error: null }),
              children: "重试"
            }
          )
        ] });
      }
      return this.props.children;
    }
  }

  function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r]);}return e},h.apply(null,arguments)}function m(e,n){if(null==e)return {};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r];}return t}function g(e){var t=A$2({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var r=Object.create(null);Object.keys(e).forEach(function(e){r[e]=function(){var n;return (n=t.fn[e]).call.apply(n,[t.fn].concat([].slice.call(arguments)))};}),t.curr=r;}return t.curr}function p(e){return h$3(function(e,n){return h({},e,"function"==typeof n?n(e):n)},e)}Q$1(void 0);var y="cubic-bezier(0.25, 0.8, 0.25, 1)",x=20,C="undefined"!=typeof window&&"ontouchstart"in window,b=function(e,n,t){return Math.max(Math.min(e,t),n)},E=function(e,n,t){return void 0===n&&(n=0),void 0===t&&(t=0),b(e,1*(1-t),Math.max(6,n)*(1+t))},k="undefined"==typeof window||/ServerSideRendering/.test(navigator&&navigator.userAgent)?y$2:_$2;function P(e,t,r){var o=A$2(t);o.current=t,y$2(function(){function n(e){o.current(e);}return e&&window.addEventListener(e,n,r),function(){e&&window.removeEventListener(e,n);}},[e]);}var _=["container"];function M(n){var t=n.container,r=void 0===t?document.body:t,i=m(n,_);return $(Rn.createElement("div",h({},i)),r)}function Y(n){return Rn.createElement("svg",h({width:"44",height:"44",viewBox:"0 0 768 768"},n),Rn.createElement("path",{d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function X(n){return Rn.createElement("svg",h({width:"44",height:"44",viewBox:"0 0 768 768"},n),Rn.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function N(n){return Rn.createElement("svg",h({width:"44",height:"44",viewBox:"0 0 768 768"},n),Rn.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function W(){return y$2(function(){var e=document.body.style,n=e.overflow;return e.overflow="hidden",function(){e.overflow=n;}},[]),null}function S(e){var n=e.touches[0],t=n.clientX,r=n.clientY;if(e.touches.length>=2){var i=e.touches[1],o=i.clientX,a=i.clientY;return [(t+o)/2,(r+a)/2,Math.sqrt(Math.pow(o-t,2)+Math.pow(a-r,2))]}return [t,r,0]}var T=function(e,n,t,r){var i,o=t*n,a=(o-r)/2,c=e;return o<=r?(i=1,c=0):e>0&&a-e<=0?(i=2,c=a):e<0&&a+e<=0&&(i=3,c=-a),[i,c]};function V(e,n,t,r,i,o,a,c,u,l){ void 0===a&&(a=innerWidth/2),void 0===c&&(c=innerHeight/2),void 0===u&&(u=0),void 0===l&&(l=0);var s=T(e,o,t,innerWidth)[0],d=T(n,o,r,innerHeight),v=innerWidth/2,f=innerHeight/2;return {x:a-o/i*(a-(v+e))-v+(r/t>=3&&t*o===innerWidth?0:s?u/2:u),y:c-o/i*(c-(f+n))-f+(d[0]?l/2:l),lastCX:a,lastCY:c}}function R(e,n,t){var r=e%180!=0;return r?[t,n,r]:[n,t,r]}function A(e,n,t){var r=R(t,innerWidth,innerHeight),i=r[0],o=r[1],a=0,c=i,u=o,l=e/n*o,s=n/e*i;return e<i&&n<o?(c=e,u=n):e<i&&n>=o?c=l:e>=i&&n<o||e/n>i/o?u=s:n/e>=3&&!r[2]?a=((u=s)-o)/2:c=l,{width:c,height:u,x:0,y:a,pause:true}}function I(e,t){var r=t.leading,i=void 0!==r&&r,o=t.maxWait,a=t.wait,u=void 0===a?o||0:a,l=A$2(e);l.current=e;var s=A$2(0),d=A$2(),v=function(){return d.current&&clearTimeout(d.current)},f=q$2(function(){var e=[].slice.call(arguments),n=Date.now();function t(){s.current=n,v(),l.current.apply(null,e);}var r=s.current,a=n-r;if(0===r&&(i&&t(),s.current=n),void 0!==o){if(a>o)return void t()}else a<u&&(s.current=n);v(),d.current=setTimeout(function(){t(),s.current=0;},u);},[u,o,i]);return f.cancel=v,f}var H=function(e,n,t){return F(e,n,t,100,function(e){return e},function(){return F(n,e,t)})},L=function(e){return 1-Math.pow(1-e,4)};function F(e,n,t,r,i,o){ void 0===r&&(r=400),void 0===i&&(i=L);var a=n-e;if(0!==a){var c=Date.now(),u=0,l=function(){var n=Math.min(1,(Date.now()-c)/r);t(e+i(n)*a)&&n<1?s():(cancelAnimationFrame(u),n>=1&&o&&o());};s();}function s(){u=requestAnimationFrame(l);}}var D={T:0,L:0,W:0,H:0,FIT:void 0},B=function(){var e=A$2(false);return y$2(function(){return e.current=true,function(){e.current=false;}},[]),e},O=["className"];function z(n){var t=n.className,r=void 0===t?"":t,i=m(n,O);return Rn.createElement("div",h({className:"PhotoView__Spinner "+r},i),Rn.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},Rn.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),Rn.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var j=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function q(n){var t=n.src,r=n.loaded,i=n.broken,o=n.className,a=n.onPhotoLoad,c=n.loadingElement,u=n.brokenElement,l=m(n,j),s=B();return t&&!i?Rn.createElement(Rn.Fragment,null,Rn.createElement("img",h({className:"PhotoView__Photo"+(o?" "+o:""),src:t,onLoad:function(e){var n=e.target;s.current&&a({loaded:true,naturalWidth:n.naturalWidth,naturalHeight:n.naturalHeight});},onError:function(){s.current&&a({broken:true});},draggable:false,alt:""},l)),!r&&(c?Rn.createElement("span",{className:"PhotoView__icon"},c):Rn.createElement(z,{className:"PhotoView__icon"}))):u?Rn.createElement("span",{className:"PhotoView__icon"},"function"==typeof u?u({src:t}):u):null}var K={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:false,x:0,y:0,touched:false,maskTouched:false,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:true,stopRaf:true,reach:void 0};function U(t){var r=t.item,o=r.src,a=r.render,c=r.width,l=void 0===c?0:c,s=r.height,d=void 0===s?0:s,v=r.originRef,f=t.visible,m=t.speed,w=t.easing,y=t.wrapClassName,x=t.className,b=t.style,_=t.loadingElement,M=t.brokenElement,Y=t.onPhotoTap,X=t.onMaskTap,N=t.onReachMove,W=t.onReachUp,L=t.onPhotoResize,O=t.isActive,z=t.expose,j=p(K),U=j[0],G=j[1],J=A$2(0),Q=B(),Z=U.naturalWidth,$=void 0===Z?l:Z,ee=U.naturalHeight,ne=void 0===ee?d:ee,te=U.width,re=void 0===te?l:te,ie=U.height,oe=void 0===ie?d:ie,ae=U.loaded,ce=void 0===ae?!o:ae,ue=U.broken,le=U.x,se=U.y,de=U.touched,ve=U.stopRaf,fe=U.maskTouched,he=U.rotate,me=U.scale,ge=U.CX,pe=U.CY,we=U.lastX,ye=U.lastY,xe=U.lastCX,Ce=U.lastCY,be=U.lastScale,Ee=U.touchTime,ke=U.touchLength,Pe=U.pause,_e=U.reach,Me=g({onScale:function(e){return Ye(E(e))},onRotate:function(e){he!==e&&(z({rotate:e}),G(h({rotate:e},A($,ne,e))));}});function Ye(e,n,t){me!==e&&(z({scale:e}),G(h({scale:e},V(le,se,re,oe,me,e,n,t),e<=1&&{x:0,y:0})));}var Xe=I(function(e,n,t){if(void 0===t&&(t=0),(de||fe)&&O){var r=R(he,re,oe),i=r[0],o=r[1];if(0===t&&0===J.current){var a=Math.abs(e-ge)<=20,c=Math.abs(n-pe)<=20;if(a&&c)return void G({lastCX:e,lastCY:n});J.current=a?n>pe?3:2:1;}var u,l=e-xe,s=n-Ce;if(0===t){var d=T(l+we,me,i,innerWidth)[0],v=T(s+ye,me,o,innerHeight);u=function(e,n,t,r){return n&&1===e||"x"===r?"x":t&&e>1||"y"===r?"y":void 0}(J.current,d,v[0],_e),void 0!==u&&N(u,e,n,me);}if("x"===u||fe)return void G({reach:"x"});var f=E(me+(t-ke)/100/2*me,$/re,.2);z({scale:f}),G(h({touchLength:t,reach:u,scale:f},V(le,se,re,oe,me,f,e,n,l,s)));}},{maxWait:8});function Ne(e){return !ve&&!de&&(Q.current&&G(h({},e,{pause:f})),Q.current)}var We,Se,Te,Ve,Re,Ae,Ie,He,Le=(Re=function(e){return Ne({x:e})},Ae=function(e){return Ne({y:e})},Ie=function(e){return Q.current&&(z({scale:e}),G({scale:e})),!de&&Q.current},He=g({X:function(e){return Re(e)},Y:function(e){return Ae(e)},S:function(e){return Ie(e)}}),function(e,n,t,r,i,o,a,c,u,l,s){var d=R(l,i,o),v=d[0],f=d[1],h=T(e,c,v,innerWidth),m=h[0],g=h[1],p=T(n,c,f,innerHeight),w=p[0],y=p[1],x=Date.now()-s;if(x>=200||c!==a||Math.abs(u-a)>1){var C=V(e,n,i,o,a,c),b=C.x,E=C.y,k=m?g:b!==e?b:null,P=w?y:E!==n?E:null;return null!==k&&F(e,k,He.X),null!==P&&F(n,P,He.Y),void(c!==a&&F(a,c,He.S))}var _=(e-t)/x,M=(n-r)/x,Y=Math.sqrt(Math.pow(_,2)+Math.pow(M,2)),X=false,N=false;!function(e,n){var t,r=e,i=0,o=0,a=function(o){t||(t=o);var a=o-t,l=Math.sign(e),s=-1e-3*l,d=Math.sign(-r)*Math.pow(r,2)*2e-4,v=r*a+(s+d)*Math.pow(a,2)/2;i+=v,t=o,l*(r+=(s+d)*a)<=0?u():n(i)?c():u();};function c(){o=requestAnimationFrame(a);}function u(){cancelAnimationFrame(o);}c();}(Y,function(t){var r=e+t*(_/Y),i=n+t*(M/Y),o=T(r,a,v,innerWidth),c=o[0],u=o[1],l=T(i,a,f,innerHeight),s=l[0],d=l[1];if(c&&!X&&(X=true,m?F(r,u,He.X):H(u,r+(r-u),He.X)),s&&!N&&(N=true,w?F(i,d,He.Y):H(d,i+(i-d),He.Y)),X&&N)return  false;var h=X||He.X(u),g=N||He.Y(d);return h&&g});}),Fe=(We=Y,Se=function(e,n){_e||Ye(1!==me?1:Math.max(2,$/re),e,n);},Te=A$2(0),Ve=I(function(){Te.current=0,We.apply(void 0,[].slice.call(arguments));},{wait:300}),function(){var e=[].slice.call(arguments);Te.current+=1,Ve.apply(void 0,e),Te.current>=2&&(Ve.cancel(),Te.current=0,Se.apply(void 0,e));});function De(e,n){if(J.current=0,(de||fe)&&O){G({touched:false,maskTouched:false,pause:false,stopRaf:false,reach:void 0});var t=E(me,$/re);if(Le(le,se,we,ye,re,oe,me,t,be,he,Ee),W(e,n),ge===e&&pe===n){if(de)return void Fe(e,n);fe&&X(e,n);}}}function Be(e,n,t){ void 0===t&&(t=0),G({touched:true,CX:e,CY:n,lastCX:e,lastCY:n,lastX:le,lastY:se,lastScale:me,touchLength:t,touchTime:Date.now()});}function Oe(e){G({maskTouched:true,CX:e.clientX,CY:e.clientY,lastX:le,lastY:se});}P(C?void 0:"mousemove",function(e){e.preventDefault(),Xe(e.clientX,e.clientY);}),P(C?void 0:"mouseup",function(e){De(e.clientX,e.clientY);}),P(C?"touchmove":void 0,function(e){e.preventDefault();var n=S(e);Xe.apply(void 0,n);},{passive:false}),P(C?"touchend":void 0,function(e){var n=e.changedTouches[0];De(n.clientX,n.clientY);},{passive:false}),P("resize",I(function(){ce&&!de&&(G(A($,ne,he)),L());},{maxWait:8})),k(function(){O&&z(h({scale:me,rotate:he},Me));},[O]);var ze=function(e,t,r,o,a,c,l,s,d,v){var f=function(e,t,r,i,o){var a=A$2(false),c=p({lead:true,scale:r}),u=c[0],l=u.lead,s=u.scale,d=c[1],v=I(function(e){try{return o(!0),d({lead:!1,scale:e}),Promise.resolve()}catch(e){return Promise.reject(e)}},{wait:i});return k(function(){a.current?(o(false),d({lead:true}),v(r)):a.current=true;},[r]),l?[e*s,t*s,r/s]:[e*r,t*r,1]}(c,l,s,d,v),h=f[0],m=f[1],w=f[2],y=function(e,t,r,o,a){var c=d$2(D),l=c[0],s=c[1],d=d$2(0),v=d[0],f=d[1],h=A$2(),m=g({OK:function(){return e&&f(4)}});function p(e){a(false),f(e);}return y$2(function(){if(h.current||(h.current=Date.now()),r){if(function(e,n){var t=e&&e.current;if(t&&1===t.nodeType){var r=t.getBoundingClientRect();n({T:r.top,L:r.left,W:r.width,H:r.height,FIT:"IMG"===t.tagName?getComputedStyle(t).objectFit:void 0});}}(t,s),e)return Date.now()-h.current<250?(f(1),requestAnimationFrame(function(){f(2),requestAnimationFrame(function(){return p(3)});}),void setTimeout(m.OK,o)):void f(4);p(5);}},[e,r]),[v,l]}(e,t,r,d,v),x=y[0],C=y[1],b=C.W,E=C.FIT,P=innerWidth/2,_=innerHeight/2,M=x<3||x>4;return [M?b?C.L:P:o+(P-c*s/2),M?b?C.T:_:a+(_-l*s/2),h,M&&E?h*(C.H/b):m,0===x?w:M?b/(c*s)||.01:w,M?E?1:0:1,x,E]}(f,v,ce,le,se,re,oe,me,m,function(e){return G({pause:e})}),je=ze[4],qe=ze[6],Ke="transform "+m+"ms "+w,Ue={className:x,onMouseDown:C?void 0:function(e){e.stopPropagation(),0===e.button&&Be(e.clientX,e.clientY,0);},onTouchStart:C?function(e){e.stopPropagation(),Be.apply(void 0,S(e));}:void 0,onWheel:function(e){if(!_e){var n=E(me-e.deltaY/100/2,$/re);G({stopRaf:true}),Ye(n,e.clientX,e.clientY);}},style:{width:ze[2]+"px",height:ze[3]+"px",opacity:ze[5],objectFit:4===qe?void 0:ze[7],transform:he?"rotate("+he+"deg)":void 0,transition:qe>2?Ke+", opacity "+m+"ms ease, height "+(qe<4?m/2:qe>4?m:0)+"ms "+w:void 0}};return Rn.createElement("div",{className:"PhotoView__PhotoWrap"+(y?" "+y:""),style:b,onMouseDown:!C&&O?Oe:void 0,onTouchStart:C&&O?function(e){return Oe(e.touches[0])}:void 0},Rn.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+je+", 0, 0, "+je+", "+ze[0]+", "+ze[1]+")",transition:de||Pe?void 0:Ke,willChange:O?"transform":void 0}},o?Rn.createElement(q,h({src:o,loaded:ce,broken:ue},Ue,{onPhotoLoad:function(e){G(h({},e,e.loaded&&A(e.naturalWidth||0,e.naturalHeight||0,he)));},loadingElement:_,brokenElement:M})):a&&a({attrs:Ue,scale:je,rotate:he})))}var G={x:0,touched:false,pause:false,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:true,minimal:true,scale:1,rotate:0};function J(r){var i=r.loop,o=void 0===i?3:i,c=r.speed,l=r.easing,s=r.photoClosable,d=r.maskClosable,v=void 0===d||d,f=r.maskOpacity,h=void 0===f?1:f,m=r.pullClosable,w=void 0===m||m,E=r.bannerVisible,_=void 0===E||E,S=r.overlayRender,T=r.toolbarRender,V=r.className,R=r.maskClassName,A=r.photoClassName,I=r.photoWrapClassName,H=r.loadingElement,L=r.brokenElement,F=r.images,D=r.index,B=void 0===D?0:D,O=r.onIndexChange,z=r.visible,j=r.onClose,q=r.afterClose,K=r.portalContainer,J=p(G),Q=J[0],Z=J[1],$=d$2(0),ee=$[0],ne=$[1],te=Q.x,re=Q.touched,ie=Q.pause,oe=Q.lastCX,ae=Q.lastCY,ce=Q.bg,ue=void 0===ce?h:ce,le=Q.lastBg,se=Q.overlay,de=Q.minimal,ve=Q.scale,fe=Q.rotate,he=Q.onScale,me=Q.onRotate,ge=r.hasOwnProperty("index"),pe=ge?B:ee,we=ge?O:ne,ye=A$2(pe),xe=F.length,Ce=F[pe],be="boolean"==typeof o?o:xe>o,Ee=function(e,r){var i=h$3(function(e){return !e},false)[1],o=A$2(0),c=function(t){var r=A$2(t);function i(e){r.current=e;}return T$2(function(){!function(n){e?(n(e),o.current=1):o.current=2;}(i);},[t]),[r.current,i]}(e),u=c[1];return [c[0],o.current,function(){i(),2===o.current&&(u(false),r&&r()),o.current=0;}]}(z,q),ke=Ee[0],Pe=Ee[1],_e=Ee[2];k(function(){if(ke)return Z({pause:true,x:pe*-(innerWidth+x)}),void(ye.current=pe);Z(G);},[ke]);var Me=g({close:function(e){me&&me(0),Z({overlay:true,lastBg:ue}),j(e);},changeIndex:function(e,n){ void 0===n&&(n=false);var t=be?ye.current+(e-pe):e,r=xe-1,i=b(t,0,r),o=be?t:i,a=innerWidth+x;Z({touched:false,lastCX:void 0,lastCY:void 0,x:-a*o,pause:n}),ye.current=o,we&&we(be?e<0?r:e>r?0:e:i);}}),Ye=Me.close,Xe=Me.changeIndex;function Ne(e){return e?Ye():Z({overlay:!se})}function We(){Z({x:-(innerWidth+x)*pe,lastCX:void 0,lastCY:void 0,pause:true}),ye.current=pe;}function Se(e,n,t,r){"x"===e?function(e){if(void 0!==oe){var n=e-oe,t=n;!be&&(0===pe&&n>0||pe===xe-1&&n<0)&&(t=n/2),Z({touched:true,lastCX:oe,x:-(innerWidth+x)*ye.current+t,pause:false});}else Z({touched:true,lastCX:e,x:te,pause:false});}(n):"y"===e&&function(e,n){if(void 0!==ae){var t=null===h?null:b(h,.01,h-Math.abs(e-ae)/100/4);Z({touched:true,lastCY:ae,bg:1===n?t:h,minimal:1===n});}else Z({touched:true,lastCY:e,bg:ue,minimal:true});}(t,r);}function Te(e,n){var t=e-(null!=oe?oe:e),r=n-(null!=ae?ae:n),i=false;if(t<-40)Xe(pe+1);else if(t>40)Xe(pe-1);else {var o=-(innerWidth+x)*ye.current;Math.abs(r)>100&&de&&w&&(i=true,Ye()),Z({touched:false,x:o,lastCX:void 0,lastCY:void 0,bg:h,overlay:!!i||se});}}P("keydown",function(e){if(z)switch(e.key){case "ArrowLeft":Xe(pe-1,true);break;case "ArrowRight":Xe(pe+1,true);break;case "Escape":Ye();}});var Ve=function(e,n,t){return T$2(function(){var r=e.length;return t?e.concat(e).concat(e).slice(r+n-1,r+n+2):e.slice(Math.max(n-1,0),Math.min(n+2,r+1))},[e,n,t])}(F,pe,be);if(!ke)return null;var Re=se&&!Pe,Ae=z?ue:le,Ie=he&&me&&{images:F,index:pe,visible:z,onClose:Ye,onIndexChange:Xe,overlayVisible:Re,overlay:Ce&&Ce.overlay,scale:ve,rotate:fe,onScale:he,onRotate:me},He=c?c(Pe):400,Le=l?l(Pe):y,Fe=c?c(3):600,De=l?l(3):y;return Rn.createElement(M,{className:"PhotoView-Portal"+(Re?"":" PhotoView-Slider__clean")+(z?"":" PhotoView-Slider__willClose")+(V?" "+V:""),role:"dialog",onClick:function(e){return e.stopPropagation()},container:K},z&&Rn.createElement(W,null),Rn.createElement("div",{className:"PhotoView-Slider__Backdrop"+(R?" "+R:"")+(1===Pe?" PhotoView-Slider__fadeIn":2===Pe?" PhotoView-Slider__fadeOut":""),style:{background:Ae?"rgba(0, 0, 0, "+Ae+")":void 0,transitionTimingFunction:Le,transitionDuration:(re?0:He)+"ms",animationDuration:He+"ms"},onAnimationEnd:_e}),_&&Rn.createElement("div",{className:"PhotoView-Slider__BannerWrap"},Rn.createElement("div",{className:"PhotoView-Slider__Counter"},pe+1," / ",xe),Rn.createElement("div",{className:"PhotoView-Slider__BannerRight"},T&&Ie&&T(Ie),Rn.createElement(Y,{className:"PhotoView-Slider__toolbarIcon",onClick:Ye}))),Ve.map(function(n,t){var r=be||0!==pe?ye.current-1+t:pe+t;return Rn.createElement(U,{key:be?n.key+"/"+n.src+"/"+r:n.key,item:n,speed:He,easing:Le,visible:z,onReachMove:Se,onReachUp:Te,onPhotoTap:function(){return Ne(s)},onMaskTap:function(){return Ne(v)},wrapClassName:I,className:A,style:{left:(innerWidth+x)*r+"px",transform:"translate3d("+te+"px, 0px, 0)",transition:re||ie?void 0:"transform "+Fe+"ms "+De},loadingElement:H,brokenElement:L,onPhotoResize:We,isActive:ye.current===r,expose:Z})}),!C&&_&&Rn.createElement(Rn.Fragment,null,(be||0!==pe)&&Rn.createElement("div",{className:"PhotoView-Slider__ArrowLeft",onClick:function(){return Xe(pe-1,true)}},Rn.createElement(X,null)),(be||pe+1<xe)&&Rn.createElement("div",{className:"PhotoView-Slider__ArrowRight",onClick:function(){return Xe(pe+1,true)}},Rn.createElement(N,null))),S&&Ie&&Rn.createElement("div",{className:"PhotoView-Slider__Overlay"},S(Ie)))}

  function ImageViewer() {
    return /* @__PURE__ */ u$2(
      J,
      {
        images: imageViewerImages.value.map((item) => ({ src: item, key: item })),
        visible: isImageViewerOpen.value,
        onClose: hideImageViewer,
        index: imageViewerIndex.value,
        onIndexChange: (index) => {
          imageViewerIndex.value = index;
        }
      }
    );
  }

  const settingsLoaded = d$1(false);
  function App() {
    const hasInitializedRef = A$2(false);
    y$2(() => {
      initUserInfo();
      loadSettingsFromCloud();
      applyAllSettings();
      initializeBlockedUsers();
      checkAuth().then(({ isLoggedIn: loggedIn, user }) => {
        isLoggedIn.value = loggedIn;
        if (user) {
          userInfo.value = { ...userInfo.value, ...user };
        }
        integrateWithNativeSettingsPanel();
        applyAllSettings();
        settingsLoaded.value = true;
        if (settings.value.rememberOpenState) {
          try {
            const savedChatOpen = localStorage.getItem("dollars.isChatOpen");
            if (savedChatOpen !== null) {
              isChatOpen.value = JSON.parse(savedChatOpen);
            }
            const savedMaximized = localStorage.getItem("dollars.isMaximized");
            if (savedMaximized !== null) {
              isMaximized.value = JSON.parse(savedMaximized);
            }
          } catch (e) {
          }
        }
        const notifType = settings.value.notificationType;
        if (notifType === "detail") {
          initWebSocket();
          loadNotifications();
        } else if (notifType === "simple") {
          loadNotifications();
        }
      });
      const dispose = isChatOpen.subscribe((isOpen) => {
        if (isOpen && !hasInitializedRef.current) {
          hasInitializedRef.current = true;
          if (typeof window.CHOBITS_VER !== "undefined") {
            const bmoScript = document.createElement("script");
            bmoScript.src = `/js/lib/bmo/bmo.js?${window.CHOBITS_VER}`;
            document.head.appendChild(bmoScript);
          }
          initFavorites();
        }
      });
      return dispose;
    }, []);
    const hasEverOpened = A$2(false);
    const wasOpenOnMount = A$2(isChatOpen.peek());
    if (isChatOpen.value) {
      hasEverOpened.current = true;
    }
    const needsEntryAnimation = hasEverOpened.current && !wasOpenOnMount.current;
    if (hasEverOpened.current) {
      wasOpenOnMount.current = false;
    }
    return /* @__PURE__ */ u$2("div", { id: "dollars-chat-root", "data-bg-mode": settings.value.backgroundMode, children: [
      /* @__PURE__ */ u$2(DockButton, {}),
      /* @__PURE__ */ u$2(NotificationManager, {}),
      hasEverOpened.current && /* @__PURE__ */ u$2(ErrorBoundary, { children: [
        /* @__PURE__ */ u$2(ChatWindow, { skipEntryAnimation: !needsEntryAnimation && isChatOpen.value }),
        /* @__PURE__ */ u$2(ContextMenu, {}),
        /* @__PURE__ */ u$2(ProfileCard, {}),
        /* @__PURE__ */ u$2(ImageViewer, {})
      ] })
    ] });
  }

  const API_VERSION = "1.0.0";
  const eventListeners = /* @__PURE__ */ new Map();
  function createDollarsAPI() {
    return {
      version: API_VERSION,
      conversationList: {
        registerItem(item) {
          return registerConversationItem(item);
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
              } catch (e) {
                console.error(`[DollarsAPI] Event callback error for '${event}':`, e);
              }
            });
          }
        }
      },
      actions: {
        toggleChat(open) {
          toggleChat(open);
        },
        showProfileCard(userId, anchor) {
          showProfileCard(userId, anchor);
        }
      }
    };
  }
  function initDollarsAPI() {
    const api = createDollarsAPI();
    window.DollarsAPI = api;
    isChatOpen.subscribe((isOpen) => {
      api.events.emit(isOpen ? "chatOpen" : "chatClose");
    });
    console.log(`[Re:Dollars] Extension API v${API_VERSION} initialized`);
  }

  const cssContent = "/* =========================================\n   CSS Variables\n   ========================================= */\n:root {\n  --dollars-z-index-base: 90;\n  --dollars-z-index-smiley: 99;\n  --dollars-z-index-context: 95;\n  --dollars-z-index-overlay: 110;\n  --dollars-z-index-modal: 2000;\n  --dollars-bg: #fff;\n  --dollars-bg-hover: rgba(0, 0, 0, 0.04);\n  --dollars-border: rgba(0, 0, 0, 0.08);\n  --dollars-shadow: rgba(0, 0, 0, 0.1);\n  /* Background Variables - 延迟加载，默认为 none */\n  --dollars-bg-pattern: none;\n  --dollars-bg-pattern-url: url('https://lsky.ry.mk/i/2026/01/03/background.svg');\n  --dollars-text: #333;\n  --dollars-text-secondary: #666;\n  --dollars-text-placeholder: #999;\n  --dollars-glass-border: rgba(255, 255, 255, 0.3);\n  --dollars-glass-highlight: rgba(255, 255, 255, 0.3);\n  /* Glass Surface Variables */\n  --dollars-glass-bg: rgba(255, 255, 255, 0.25);\n  --dollars-glass-blur: blur(12px) saturate(1.8) brightness(1.05);\n  --dollars-glass-shadow:\n    0 8px 32px 0 rgba(31, 38, 135, 0.15),\n    0 2px 16px 0 rgba(31, 38, 135, 0.08),\n    inset 0 1px 0 0 rgba(255, 255, 255, 0.5),\n    inset 0 -1px 0 0 rgba(255, 255, 255, 0.2);\n  --dollars-glass-border-color: rgba(255, 255, 255, 0.35);\n}\n\n/* 只在窗口可见时加载背景图片 */\n#dollars-chat-window.visible {\n  --dollars-bg-pattern: var(--dollars-bg-pattern-url);\n}\n\n\nhtml[data-theme=\"dark\"] {\n  --dollars-bg: #1a1a1a;\n  --dollars-bg-hover: rgba(255, 255, 255, 0.08);\n  --dollars-border: rgba(255, 255, 255, 0.12);\n  --dollars-shadow: rgba(0, 0, 0, 0.3);\n  --dollars-text: #e0e0e0;\n  --dollars-text-secondary: #999;\n  --dollars-text-placeholder: #666;\n  --dollars-glass-border: rgba(255, 255, 255, 0.1);\n  --dollars-glass-highlight: rgba(255, 255, 255, 0.1);\n  /* Glass Surface Variables - Dark Mode */\n  --dollars-glass-bg: rgba(255, 255, 255, 0.08);\n  --dollars-glass-blur: blur(12px) saturate(1.8) brightness(1.15);\n  --dollars-glass-shadow:\n    0 8px 32px 0 rgba(0, 0, 0, 0.3),\n    inset 0 1px 0 0 rgba(255, 255, 255, 0.15),\n    inset 0 -1px 0 0 rgba(255, 255, 255, 0.08);\n  --dollars-glass-border-color: rgba(255, 255, 255, 0.15);\n}\n\n\n/* =========================================\n   Global Scrollbar Style\n   ========================================= */\n#dollars-chat-root *::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n#dollars-chat-root *::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n#dollars-chat-root *::-webkit-scrollbar-thumb {\n  background: color-mix(in srgb, var(--primary-color), transparent 75%);\n  border-radius: 10px;\n}\n\n#dollars-chat-root *::-webkit-scrollbar-thumb:hover {\n  background: color-mix(in srgb, var(--primary-color), transparent 50%);\n}\n\n#dollars-chat-root * {\n  box-sizing: border-box;\n  scrollbar-width: thin;\n  scrollbar-color: color-mix(in srgb, var(--primary-color), transparent 75%) transparent;\n}\n\n/* =========================================\n   Chat Root Container\n   ========================================= */\n#dollars-chat-root {\n  color: var(--dollars-text);\n}\n\n/* =========================================\n   Chat Window - 液态玻璃效果\n   ========================================= */\n#dollars-chat-window {\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n  width: 400px;\n  height: 550px;\n  min-width: 320px;\n  min-height: 400px;\n  max-width: 90vw;\n  max-height: 85vh;\n  z-index: var(--dollars-z-index-base);\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n  /* 简化背景 - 移除液态璃璃效果以提升性能 */\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background-clip: padding-box;\n  overflow: hidden;\n  /* Visibility Toggle */\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(20px) scale(0.9);\n  transition: opacity 0.3s ease-out, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n#dollars-chat-window.visible {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0) scale(1);\n}\n\nhtml[data-theme=\"dark\"] #dollars-chat-window {\n  background: rgba(30, 30, 30, 0.9);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5);\n}\n\n#dollars-chat-window.maximized {\n  top: 10px !important;\n  left: 10px !important;\n  right: 10px !important;\n  bottom: 10px !important;\n  width: auto !important;\n  height: auto !important;\n  max-width: none !important;\n  max-height: none !important;\n  border-radius: 12px;\n  transform: none !important;\n  /* Reset transform just in case */\n}\n\n#dollars-chat-window.mobile {\n  /* Use positioning + auto margins for centering, not transform */\n  /* This allows the open/close animation transform to work properly */\n  top: 4vh !important;\n  left: 0 !important;\n  right: 0 !important;\n  bottom: auto !important;\n  width: 95vw !important;\n  height: 92vh !important;\n  max-width: 600px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  border-radius: 20px;\n}\n\n/* Mobile maximized mode - full screen (must come after .mobile) */\n#dollars-chat-window.mobile.maximized {\n  top: 0px !important;\n  left: 0px !important;\n  right: 0px !important;\n  bottom: 0px !important;\n  width: 100vw !important;\n  height: 100vh !important;\n  /* Fallback for older browsers */\n  height: 100dvh !important;\n  /* Dynamic viewport height for mobile */\n  max-width: none !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  border-radius: 0;\n  z-index: 98 !important;\n  /* Higher than site dock (z-index: 99) */\n}\n\n/* Ensure the visible state animation works correctly for mobile */\n#dollars-chat-window.mobile.visible {\n  transform: translateY(0) scale(1);\n}\n\n/* =========================================\n   Content Panes Container\n   ========================================= */\n#dollars-content-panes {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n\n/* =========================================\n   Sidebar\n   ========================================= */\n#dollars-sidebar {\n  width: 25%;\n  height: 100%;\n  max-width: 320px;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  /* Remove border, use subtle shadow for separation if needed by desktop layout */\n  border-right: none;\n  /* Subtle inner glow for separation */\n  box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.03);\n  background-color: var(--dollars-bg);\n}\n\n#dollars-sidebar-search-container {\n  padding: 8px;\n  padding-top: 48px;\n  border-bottom: 1px solid var(--dollars-border);\n  flex-shrink: 0;\n}\n\n#dollars-sidebar-search-input {\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-radius: 100px;\n  border: 1px solid var(--dollars-border);\n  background-color: var(--dollars-bg);\n  transition: 0.3s ease-in-out;\n  padding: 6px 12px;\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 13px;\n  color: var(--dollars-text);\n}\n\n#dollars-sidebar-search-input:focus {\n  outline: 0;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 10px rgba(240, 145, 153, 0.6);\n}\n\nhtml[data-theme=\"dark\"] #dollars-sidebar-search-input {\n  background-color: #3a3a3a;\n}\n\n#dollars-sidebar-search-input::placeholder {\n  color: var(--dollars-text-placeholder);\n}\n\n#dollars-conversation-list {\n  flex-grow: 1;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 4px;\n}\n\n/* Conversation Item */\n.conversation-item {\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  gap: 12px;\n  cursor: pointer;\n  position: relative;\n  border-radius: 15px;\n  transition: background-color 0.2s, box-shadow 0.2s;\n}\n\n.conversation-item:hover {\n  background-color: var(--dollars-bg-hover);\n}\n\n.conversation-item.active {\n  background: color-mix(in srgb, var(--primary-color), #ffffff 30%);\n  color: #fff;\n}\n\nhtml[data-theme=\"dark\"] .conversation-item.active {\n  background: color-mix(in srgb, var(--primary-color), #180518 60%);\n}\n\n.conversation-item.active .dollars-conv-last-message,\n.conversation-item.active .dollars-conv-nickname,\n.conversation-item.active .dollars-conv-timestamp {\n  color: #fff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.conversation-item .avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n  background-color: #f3f3f3;\n}\n\nhtml[data-theme=\"dark\"] .conversation-item .avatar {\n  background-color: #444;\n}\n\n.conversation-item .dollars-conv-content {\n  flex-grow: 1;\n  overflow: hidden;\n}\n\n.conversation-item .dollars-conv-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.conversation-item .dollars-conv-nickname {\n  color: var(--dollars-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.conversation-item .dollars-conv-timestamp {\n  font-size: 11px;\n  color: var(--dollars-text-secondary);\n  flex-shrink: 0;\n  margin-left: 8px;\n}\n\n.conversation-item .dollars-conv-last-message {\n  font-size: 12px;\n  color: var(--dollars-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 2px;\n}\n\n.conversation-item .unread-badge {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--primary-color);\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 16px;\n  text-align: center;\n}\n\n/* =========================================\n   Narrow Layout (Single View Mode)\n   ========================================= */\n#dollars-chat-window.is-narrow #dollars-sidebar {\n  width: 100%;\n  max-width: none;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n#dollars-chat-window.is-narrow.mobile-chat-active #dollars-sidebar {\n  transform: translateX(-100%);\n}\n\n#dollars-chat-window.is-narrow #dollars-main-chat {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n#dollars-chat-window.is-narrow.mobile-chat-active #dollars-main-chat {\n  transform: translateX(0);\n}\n\n#dollars-chat-window.is-narrow #dollars-content-panes {\n  overflow: hidden;\n}\n\n/* Main chat content area */\n#dollars-main-chat {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  position: relative;\n  background-color: var(--dollars-bg);\n  /* 性能优化: 创建新的 stacking context，防止背景影响内容渲染 */\n  isolation: isolate;\n  z-index: 0;\n}\n\n/* Main Chat Background Effects */\n#dollars-main-chat::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  /* 关键：z-index: -1 确保背景在内容之下 */\n  z-index: -1;\n  pointer-events: none;\n  will-change: opacity;\n  /* GPU 加速 */\n  opacity: 0;\n  /* Default hidden until mode is applied */\n  transition: opacity 0.3s ease;\n}\n\n/* =========================================\n   Background Mode Overrides\n   ========================================= */\n\n/* Mode: Transparent */\n#dollars-chat-root[data-bg-mode=\"transparent\"] #dollars-main-chat::before {\n  display: none !important;\n}\n\n/* Mode: Tint - colored gradient background */\n#dollars-chat-root[data-bg-mode=\"tint\"] #dollars-main-chat::before {\n  background-image:\n    var(--dollars-bg-pattern),\n    linear-gradient(160deg,\n      color-mix(in srgb, var(--primary-color), #a0c4ff 50%) 0%,\n      color-mix(in srgb, var(--primary-color), #ffffff 50%) 50%,\n      color-mix(in srgb, var(--primary-color), #ffc6ff 50%) 100%);\n  background-repeat: repeat, no-repeat;\n  background-position: center, center;\n  background-size: 400px, cover;\n  background-blend-mode: overlay, normal;\n  opacity: 0.65;\n}\n\n/* Mode: Lines - minimal line pattern */\n#dollars-chat-root[data-bg-mode=\"lines\"] #dollars-main-chat::before {\n  background-image: none;\n  background-color: color-mix(in srgb, var(--primary-color), #ffffff 94%);\n  opacity: 0.2;\n}\n\n#dollars-chat-root[data-bg-mode=\"lines\"] #dollars-main-chat::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-color: color-mix(in srgb, var(--primary-color), #ffffff 70%);\n  -webkit-mask-image: var(--dollars-bg-pattern);\n  mask-image: var(--dollars-bg-pattern);\n  -webkit-mask-repeat: repeat;\n  mask-repeat: repeat;\n  -webkit-mask-size: 400px;\n  opacity: 0.7;\n  z-index: -1;\n  pointer-events: none;\n}\n\nhtml[data-theme=\"dark\"] #dollars-chat-root[data-bg-mode=\"lines\"] #dollars-main-chat::after {\n  opacity: 0.1;\n}\n\n/* Dark mode backgrounds */\nhtml[data-theme=\"dark\"] #dollars-chat-root[data-bg-mode=\"lines\"] #dollars-main-chat::before {\n  background-image: none !important;\n  background-color: transparent !important;\n  -webkit-mask-image: none !important;\n  mask-image: none !important;\n}\n\nhtml[data-theme=\"dark\"] #dollars-chat-root[data-bg-mode=\"tint\"] #dollars-main-chat::before {\n  background-image:\n    var(--dollars-bg-pattern),\n    linear-gradient(160deg,\n      color-mix(in srgb, var(--primary-color), #a0c4ff 50%) 0%,\n      color-mix(in srgb, var(--primary-color), #ffffff 50%) 50%,\n      color-mix(in srgb, var(--primary-color), #ffc6ff 50%) 100%);\n  background-repeat: repeat, no-repeat;\n  background-position: center, center;\n  background-size: 400px, cover;\n  background-blend-mode: overlay, normal;\n\n  -webkit-mask-image: none;\n  mask-image: none;\n}\n\n\nhtml[data-theme=\"dark\"] #dollars-chat-root[data-bg-mode=\"lines\"] #dollars-main-chat::before {\n  opacity: 0.25;\n}\n\nhtml[data-theme=\"dark\"] #dollars-chat-root[data-bg-mode=\"tint\"] #dollars-main-chat::before {\n  opacity: 0.3;\n}\n\n\n\n/* =========================================\n   Chat Header\n   ========================================= */\n.chat-header {\n  /* Glass Effect */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  /* No border to avoid black line issue; use shadow for subtle bottom separation */\n  border-bottom: none;\n  /* Subtle shadow to hint at separation from content */\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.02);\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2px 15px;\n  cursor: move;\n  flex-shrink: 0;\n\n  /* Absolute positioning for glass effect overlay */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  /* Ensure padding doesn't affect width */\n\n  z-index: 10002;\n}\n\nhtml[data-theme=\"dark\"] .chat-header {\n  background: var(--dollars-bg);\n  border-bottom: none;\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.02);\n}\n\n.chat-header .title-wrapper {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  min-width: 0;\n  padding: 0 4px;\n  gap: 8px;\n  pointer-events: none;\n}\n\n/* Left pane matches sidebar width */\n.chat-header-left-pane {\n  width: 25%;\n  max-width: 320px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  padding-left: 5px;\n}\n\n#dollars-chat-window.is-narrow .chat-header-left-pane {\n  width: auto;\n  max-width: none;\n}\n\n.header-chat-icon {\n  width: 30px;\n  /* Slightly smaller */\n  height: 30px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  /* Add shadow */\n}\n\n.header-text-column {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  /* Tighten text */\n  min-width: 0;\n  justify-content: center;\n}\n\n.chat-header .title,\n.header-main-title {\n  font-size: 13px;\n  /* Slightly smaller for compactness */\n  font-weight: 700;\n  color: var(--dollars-text);\n  letter-spacing: 0.2px;\n  line-height: 1.2;\n}\n\n.chat-header .online-status {\n  font-size: 10px;\n  /* Smaller status text */\n  color: var(--dollars-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  opacity: 0.85;\n  line-height: 1.2;\n}\n\n.chat-header .online-dot {\n  width: 6px;\n  height: 6px;\n  background-color: #4CAF50;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.chat-header .header-buttons {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.chat-header .header-btn {\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dollars-text-secondary);\n  transition: background-color 0.2s;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 18px;\n}\n\n.chat-header .header-btn:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\nhtml[data-theme=\"dark\"] .chat-header .header-btn:hover {\n  background-color: rgba(255, 255, 255, 0.08);\n}\n\n/* Restored Header Buttons */\n#dollars-search-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23555\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line></svg>');\n}\n\nhtml[data-theme=\"dark\"] #dollars-search-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23bbb\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line></svg>');\n}\n\n#dollars-maximize-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23555\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"/></svg>');\n}\n\nhtml[data-theme=\"dark\"] #dollars-maximize-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23bbb\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"/></svg>');\n}\n\n#dollars-chat-window.maximized #dollars-maximize-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23555\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"/></svg>');\n}\n\nhtml[data-theme=\"dark\"] #dollars-chat-window.maximized #dollars-maximize-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23bbb\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"/></svg>');\n}\n\n.chat-header .close-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23555\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>');\n}\n\nhtml[data-theme=\"dark\"] .chat-header .close-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23bbb\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>');\n}\n\n.chat-header .header-btn svg {\n  width: 18px;\n  height: 18px;\n}\n\n/* =========================================\n   Chat Body\n   ========================================= */\n.chat-body {\n  /* 性能优化: 启用 contain 隔离渲染 */\n  contain: layout style paint;\n  flex-grow: 1;\n  /* 强制显示滚动条轨道，防止加载时的布局跳动 */\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding: 10px;\n  padding-top: 50px;\n  /* 使用 padding-bottom 替代 margin-bottom，允许内容滚动到输入框下方以展示磨砂玻璃效果 */\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior: contain;\n  min-height: 0;\n  overflow-anchor: auto;\n  background: transparent;\n}\n\n\n.chat-body.loading .chat-list {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n/* Hide list completely when loading context/jumping to hide scroll jump */\n.chat-body.context-loading .chat-list {\n  opacity: 0 !important;\n  transition: opacity 0.05s ease;\n}\n\n/* =========================================\n   Message Skeleton Loading Animation\n   ========================================= */\n.message-skeleton-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  gap: 14px;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  right: 0;\n  /* Leave space for chat input area */\n  bottom: 80px;\n  z-index: 10;\n  pointer-events: none;\n  /* Clip excess skeletons that don't fit */\n  overflow: hidden;\n  animation: skeleton-fade-in 0.3s ease-out;\n  /* Gradient fade at bottom to avoid abrupt cutoff */\n  -webkit-mask-image: linear-gradient(to bottom, black 0%, black 85%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 0%, black 85%, transparent 100%);\n}\n\n@keyframes skeleton-fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n/* Smooth fade-out when loading completes */\n.message-skeleton-container.fading-out {\n  animation: skeleton-fade-out 0.3s ease-out forwards;\n}\n\n@keyframes skeleton-fade-out {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.message-skeleton {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  animation: skeleton-fade-enter 0.4s ease-out backwards;\n}\n\n.message-skeleton.self {\n  flex-direction: row-reverse;\n}\n\n@keyframes skeleton-fade-enter {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n/* 头像骨架 */\n.skeleton-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background-color: color-mix(in srgb, var(--primary-color), var(--dollars-bg) 85%);\n}\n\nhtml[data-theme=\"dark\"] .skeleton-avatar {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n/* 消息内容区域 */\n.skeleton-content {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-width: 70%;\n}\n\n.message-skeleton.self .skeleton-content {\n  align-items: flex-end;\n}\n\n\n\n/* 气泡骨架 */\n.skeleton-bubble {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 18px;\n  background-color: color-mix(in srgb, var(--primary-color), var(--dollars-bg) 90%);\n  min-width: 100px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n\nhtml[data-theme=\"dark\"] .skeleton-bubble {\n  background-color: rgba(255, 255, 255, 0.08);\n}\n\n.message-skeleton.self .skeleton-bubble {\n  background-color: color-mix(in srgb, var(--primary-color), var(--dollars-bg) 75%);\n}\n\nhtml[data-theme=\"dark\"] .message-skeleton.self .skeleton-bubble {\n  background-color: color-mix(in srgb, var(--primary-color), transparent 70%);\n}\n\n/* 文本行骨架 */\n.skeleton-text {\n  height: 16px;\n  border-radius: 8px;\n  background-color: color-mix(in srgb, var(--primary-color), var(--dollars-bg) 75%);\n  min-width: 50px;\n}\n\nhtml[data-theme=\"dark\"] .skeleton-text {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.message-skeleton.self .skeleton-text {\n  background-color: color-mix(in srgb, var(--primary-color), var(--dollars-bg) 60%);\n}\n\nhtml[data-theme=\"dark\"] .message-skeleton.self .skeleton-text {\n  background-color: color-mix(in srgb, var(--primary-color), transparent 50%);\n}\n\n/* 波浪闪烁动画 */\n.skeleton-shimmer {\n  position: relative;\n  overflow: hidden;\n}\n\n.skeleton-shimmer::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.6) 50%,\n      transparent 100%);\n  background-size: 200% 100%;\n  animation: skeleton-wave 1.2s ease-in-out infinite;\n}\n\nhtml[data-theme=\"dark\"] .skeleton-shimmer::after {\n  background: linear-gradient(90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.2) 50%,\n      transparent 100%);\n  background-size: 200% 100%;\n}\n\n@keyframes skeleton-wave {\n  0% {\n    background-position: 200% 0;\n  }\n\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n\n.chat-list {\n  display: flex;\n  flex-direction: column;\n  /* 性能优化: 启用布局和样式隔离 */\n  contain: layout style;\n  transition: opacity 0.3s ease;\n}\n\n/* =========================================\n   Message Item\n   ========================================= */\n.chat-message {\n  position: relative;\n  /* 性能优化: 允许浏览器跳过离屏渲染 */\n  overflow: visible !important;\n  content-visibility: auto;\n  contain-intrinsic-size: 80px;\n  overflow-clip-margin: 5px;\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n  align-items: flex-start;\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s ease-out;\n  will-change: transform, opacity;\n  transform-origin: center bottom;\n}\n\n.chat-message.self {\n  flex-direction: row-reverse;\n}\n\n.chat-message.self .msg-content,\n.chat-message.self .message-content {\n  align-items: flex-end;\n}\n\n/* 待发送消息样式 */\n.chat-message.pending {\n  opacity: 0.7;\n}\n\n.chat-message.pending .bubble {\n  animation: pending-pulse 1.5s ease-in-out infinite;\n}\n\n@keyframes pending-pulse {\n\n  0%,\n  100% {\n    opacity: 0.7;\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n/* 发送失败消息样式 */\n.chat-message.failed {\n  opacity: 0.9;\n}\n\n.chat-message.failed .bubble {\n  border: 1px solid rgba(239, 68, 68, 0.5);\n  position: relative;\n}\n\n.chat-message.failed .bubble::after {\n  content: \"发送失败，点击重试\";\n  position: absolute;\n  bottom: -18px;\n  right: 0;\n  font-size: 11px;\n  color: #ef4444;\n  opacity: 0;\n  transition: opacity 0.2s;\n  white-space: nowrap;\n}\n\n.chat-message.failed:hover .bubble::after,\n.chat-message.failed:active .bubble::after {\n  opacity: 1;\n}\n\n.chat-message.is-grouped-with-next {\n  margin-bottom: 2px;\n}\n\n.chat-message.is-grouped-with-prev .avatar {\n  visibility: hidden;\n  height: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n/* 隐藏外部昵称 - 始终隐藏，使用气泡内昵称 */\n.chat-message .nickname {\n  display: none !important;\n}\n\n.chat-message .avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  cursor: pointer;\n  flex-shrink: 0;\n  object-fit: cover;\n  background-color: #f3f3f3;\n  transition: box-shadow 0.3s;\n  -webkit-touch-callout: none;\n  user-select: none;\n}\n\nhtml[data-theme=\"dark\"] .chat-message .avatar {\n  background-color: #444;\n}\n\n/* =========================================\n   Avatar Online Status Indicator\n   ========================================= */\n.chat-message::after {\n  content: \"\";\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background-color: #4CAF50;\n  border: 2px solid var(--dollars-bg);\n  border-radius: 50%;\n  z-index: 5;\n  top: 23px;\n  left: 23px;\n  pointer-events: none;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  opacity: 0;\n  transform: scale(0);\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;\n}\n\n.chat-message:has(.avatar.online)::after {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.chat-message.self::after {\n  left: auto;\n  right: -2px;\n}\n\n.chat-message.is-grouped-with-prev::after {\n  opacity: 0 !important;\n  transform: scale(0) !important;\n}\n\n.chat-message .message-content,\n.chat-message .msg-content {\n  max-width: 75%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n/* =========================================\n   Message Highlighting (Focus Mode)\n   ========================================= */\n.chat-list.focus-mode .chat-message:not(.message-highlight) {\n  filter: blur(4px);\n  opacity: 0.6;\n  transition: filter 0.3s ease, opacity 0.3s ease;\n}\n\n.chat-message.message-highlight {\n  position: relative;\n  z-index: 10;\n  transform: scale(1.02);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.chat-message.message-highlight .bubble {\n  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.4);\n}\n\n/* =========================================\n   Message Bubble\n   ========================================= */\n.chat-message .bubble {\n  display: flow-root;\n  padding: 6px 10px 6px;\n  border-radius: 0 12px 12px 12px;\n  word-wrap: break-word;\n  overflow-wrap: anywhere;\n  /* Ensure long words break */\n  background-color: #fff;\n  box-shadow: 0 1px 2px rgba(16, 35, 47, 0.15);\n  color: var(--dollars-text);\n  font-size: 14px;\n  max-width: min(40dvh, 100%);\n  position: relative;\n  transition: background 0.3s ease;\n}\n\nhtml[data-theme=\"dark\"] .chat-message .bubble {\n  background-color: #212121;\n}\n\n.chat-message.self .bubble {\n  border-radius: 12px 0 12px 12px;\n  background: color-mix(in srgb, var(--primary-color), #ffffff 80%);\n}\n\nhtml[data-theme=\"dark\"] .chat-message.self .bubble {\n  background-color: color-mix(in srgb, var(--primary-color), #180518 60%);\n}\n\n/* 连续消息圆角调整 */\n.chat-message:not(.self).is-grouped-with-prev .bubble {\n  border-top-left-radius: 4px !important;\n}\n\n.chat-message.self.is-grouped-with-prev .bubble {\n  border-top-right-radius: 4px !important;\n}\n\n.bubble.sticker-mode {\n  background: transparent !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n  border: none !important;\n}\n\n/* =========================================\n   气泡内昵称 (Bubble Nickname)\n   ========================================= */\n.bubble-nickname {\n  display: block;\n  width: 100%;\n  font-size: 12px;\n  margin-bottom: 4px;\n  line-height: 1.2;\n  user-select: none;\n  color: var(--nick-color, var(--primary-color));\n}\n\nhtml[data-theme=\"dark\"] .bubble-nickname {\n  color: color-mix(in srgb, var(--nick-color, var(--primary-color)), #fff 60%) !important;\n}\n\n/* 自己发送的消息不显示昵称 */\n.chat-message.self .bubble-nickname {\n  display: none;\n}\n\n/* =========================================\n   Swipe Reply Indicator\n   ========================================= */\n.chat-message .swipe-reply-indicator {\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%) scale(0.5);\n  margin-left: 10px;\n  opacity: 0;\n  width: 32px;\n  height: 32px;\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23888\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M9 14l-4 -4l4 -4\" /><path d=\"M5 10h11a4 4 0 1 1 0 8h-1\" /></svg>');\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease;\n  pointer-events: none;\n}\n\nhtml[data-theme=\"dark\"] .chat-message .swipe-reply-indicator {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23bbb\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M9 14l-4 -4l4 -4\" /><path d=\"M5 10h11a4 4 0 1 1 0 8h-1\" /></svg>');\n}\n\n/* 连续发言隐藏昵称 */\n.chat-message.is-grouped-with-prev .bubble-nickname {\n  display: none;\n}\n\n/* 贴纸模式隐藏昵称 */\n.bubble.sticker-mode .bubble-nickname {\n  display: none !important;\n}\n\n/* =========================================\n   气泡内时间戳 (Bubble Timestamp)\n   ========================================= */\n.bubble-timestamp {\n  float: right;\n  margin-left: 8px;\n  margin-top: 9px;\n  font-size: 10px;\n  opacity: 0.5;\n  user-select: none;\n  cursor: default;\n  color: var(--dollars-text-secondary);\n  line-height: 1;\n  white-space: nowrap;\n}\n\n/* text-content 恢复为块级元素 */\n.text-content {\n  display: block;\n}\n\nhtml[data-theme=\"dark\"] .bubble-timestamp {\n  color: color-mix(in srgb, var(--primary-color), #fff 60%);\n}\n\n/* 连续消息隐藏气泡内时间戳 */\n.chat-message.is-grouped-with-next .bubble-timestamp {\n  display: none;\n}\n\n/* 但是编辑过的消息始终显示时间戳 */\n.chat-message.is-grouped-with-next.is-edited .bubble-timestamp {\n  display: block;\n  float: none;\n  margin: 4px 0 0 0;\n  text-align: right;\n}\n\n/* 贴纸模式下的时间戳样式 */\n.bubble.sticker-mode .bubble-timestamp {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  color: rgba(255, 255, 255, 0.9);\n  padding: 1px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n  line-height: 1.2;\n  top: auto;\n  margin: 0;\n  float: none;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  pointer-events: none;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  z-index: 10;\n}\n\n.chat-message:hover .bubble.sticker-mode .bubble-timestamp {\n  opacity: 1;\n}\n\n/* =========================================\n   外部时间戳 (用于贴纸模式)\n   ========================================= */\n.timestamp {\n  font-size: 10px;\n  color: var(--dollars-text-secondary);\n  margin-top: 2px;\n}\n\n.timestamp.outside-right {\n  display: block;\n  text-align: right;\n  width: 100%;\n  padding-right: 2px;\n  align-self: flex-end;\n}\n\n/* 默认隐藏外部时间戳 */\n.chat-message:not(.temp-message) .timestamp:not(.outside-right) {\n  display: none;\n}\n\n/* =========================================\n   Bubble Tail (气泡尾巴)\n   ========================================= */\n.bubble-tail {\n  position: absolute;\n  top: 0;\n  width: 11px;\n  height: 20px;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.chat-message:not(.self) .bubble-tail {\n  left: -9px;\n  top: -1px;\n  color: #fff;\n  transform: scaleY(-1);\n}\n\nhtml[data-theme=\"dark\"] .chat-message:not(.self) .bubble-tail {\n  color: #212121;\n}\n\n.chat-message.self .bubble-tail {\n  right: -9px;\n  top: -1px;\n  transform: scale(-1, -1);\n  color: color-mix(in srgb, var(--primary-color), #ffffff 80%);\n}\n\nhtml[data-theme=\"dark\"] .chat-message.self .bubble-tail {\n  color: color-mix(in srgb, var(--primary-color), #180518 60%) !important;\n}\n\n.chat-message.is-grouped-with-prev .bubble-tail {\n  display: none;\n}\n\n.bubble.sticker-mode .bubble-tail {\n  display: none;\n}\n\n/* =========================================\n   Bubble Content\n   ========================================= */\n.bubble .text-content {\n  display: inline;\n}\n\n.bubble .text-content.deleted {\n  font-style: italic !important;\n  color: var(--dollars-text-secondary) !important;\n}\n\n/* 长消息折叠样式 */\n.bubble .text-content.is-collapsed {\n  display: block !important;\n  max-height: 300px;\n  overflow: hidden;\n  position: relative;\n  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);\n}\n\n.expand-toggle-btn {\n  display: block;\n  width: 100%;\n  background: none;\n  border: none;\n  color: var(--primary-color);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 6px 0 2px;\n  text-align: center;\n  opacity: 0.9;\n  transition: opacity 0.2s ease;\n}\n\n.expand-toggle-btn:hover {\n  opacity: 1;\n  text-decoration: underline;\n}\n\n.bubble a {\n  color: #0084b4 !important;\n}\n\n.bubble a:hover {\n  text-decoration: underline;\n}\n\n.bubble img.smiley {\n  display: inline-block;\n  width: 21px;\n  height: 21px;\n  margin: 0 1px;\n  vertical-align: text-bottom;\n  image-rendering: pixelated;\n}\n\n.bubble img.custom-emoji {\n  max-width: 150px;\n  max-height: 150px;\n  border-radius: 8px;\n}\n\n.bubble.sticker-mode .custom-emoji {\n  max-width: 150px;\n  max-height: 150px;\n  border-radius: 8px;\n  margin: 2px 0;\n  display: block;\n}\n\n.bubble .image-container {\n  position: relative;\n  display: grid;\n  overflow: hidden;\n  border-radius: 8px;\n  cursor: pointer;\n  max-height: 350px;\n}\n\n.bubble .image-container .full-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  opacity: 0;\n  grid-area: 1/1;\n  transition: opacity 0.3s ease-out;\n  z-index: 2;\n}\n\n.bubble .image-container .full-image.is-loaded {\n  opacity: 1;\n}\n\n.bubble .image-container .full-image.load-failed {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  background-color: var(--dollars-bg-hover);\n  border-radius: 8px;\n}\n\n.bubble .blurhash-canvas {\n  width: 100%;\n  height: 100%;\n  grid-area: 1/1;\n  z-index: 1;\n  transition: opacity 0.3s ease-out;\n}\n\n.bubble .image-container.is-loaded .blurhash-canvas {\n  opacity: 0;\n  pointer-events: none;\n}\n\n/* 图片占位符样式 (关闭默认加载图片时) */\n.bubble .image-container.image-placeholder {\n  cursor: pointer;\n}\n\n.bubble .image-container.image-placeholder .image-load-hint {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 3;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 6px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  white-space: nowrap;\n  pointer-events: none;\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  transition: opacity 0.2s ease;\n}\n\n.bubble .image-container.image-placeholder:hover .image-load-hint {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n/* =========================================\n   Quote Block\n   ========================================= */\n.chat-quote {\n  padding: 6px 8px;\n  border-left: 3px solid var(--primary-color);\n  background: linear-gradient(#ffffffe6, #ffffffe6), var(--primary-color);\n  border-radius: 4px;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  max-width: 100%;\n  width: 100%;\n  /* Force full width to wrap timestamp */\n  box-sizing: border-box;\n}\n\nhtml[data-theme=\"dark\"] .chat-quote {\n  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), var(--primary-color);\n}\n\n.chat-quote:hover {\n  opacity: 0.9;\n}\n\n.chat-quote[data-jump-to-id] {\n  cursor: pointer;\n}\n\n.quote-avatar {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  margin-right: 4px;\n}\n\n.quote-thumbnail {\n  width: 36px;\n  height: 36px;\n  border-radius: 4px;\n  object-fit: cover;\n  margin-bottom: 2px;\n  display: block;\n}\n\n.quote-nickname {\n  font-weight: 700;\n  color: var(--primary-color);\n  font-size: 12px;\n}\n\n.quote-text-wrapper {\n  min-width: 0;\n  flex: 1;\n}\n\n.quote-content {\n  font-size: 12px;\n  color: var(--dollars-text);\n  opacity: 0.8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  overflow-wrap: break-word;\n}\n\n/* =========================================\n   Chat Input Area - 液态玻璃效果\n   ========================================= */\n.chat-input-container {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  right: 12px;\n  width: auto;\n  z-index: 100;\n  transition: transform 0.2s ease;\n}\n\n.chat-input-container:hover {\n  transform: translateY(-2px);\n}\n\n.chat-input-area {\n  position: relative;\n  /* Glass Surface Effect - consistent with dollars-smiles-floating */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  /* Use shadow-only approach to avoid black border flash on initial load */\n  border: none;\n  box-shadow:\n    var(--dollars-glass-shadow),\n    inset 0 0 0 1px var(--dollars-glass-border-color, rgba(255, 255, 255, 0.35));\n  border-radius: 24px;\n  padding: 6px 8px;\n  transition: box-shadow 0.2s ease;\n}\n\n.reply-preview {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 8px 4px 8px;\n  margin: 0 4px 4px 4px;\n  border-bottom: 1px solid var(--dollars-glass-border);\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n  transition: height 0.2s ease-out, opacity 0.2s ease-out;\n}\n\n.reply-preview.visible {\n  height: 42px;\n  opacity: 1;\n}\n\n.reply-preview .reply-bar {\n  width: 3px;\n  height: 70%;\n  background-color: var(--primary-color);\n  border-radius: 2px;\n}\n\n.reply-preview .reply-avatar {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n}\n\n.reply-preview .reply-info {\n  flex: 1;\n  min-width: 0;\n  font-size: 12px;\n  line-height: 1.4;\n}\n\n.reply-preview .reply-user {\n  font-weight: 700;\n  color: var(--primary-color);\n}\n\n.reply-preview .reaction-item .num {\n  color: var(--dollars-text-secondary);\n}\n\n@keyframes pop {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.4);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.reaction-item.live_selected .emoji {\n  animation: pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.reply-preview .reply-text {\n  color: var(--dollars-text-secondary);\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.reply-preview .reply-cancel-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--dollars-text-secondary);\n  font-size: 20px;\n  padding: 0;\n}\n\n/* Image Preview Strip */\n.image-preview-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 8px;\n  margin: 0 4px;\n  border-bottom: 1px solid var(--dollars-glass-border);\n  height: 0;\n  opacity: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  transition: height 0.2s ease-out, opacity 0.2s ease-out, padding 0.2s ease-out, margin 0.2s ease-out;\n  scrollbar-width: none;\n}\n\n.image-preview-container.visible {\n  height: 80px;\n  opacity: 1;\n  padding-bottom: 8px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n}\n\n.image-preview-container::-webkit-scrollbar {\n  display: none;\n}\n\n.image-preview-item {\n  position: relative;\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid var(--dollars-border);\n  background: var(--dollars-bg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.preview-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.image-preview-item:hover .preview-image {\n  transform: scale(1.05);\n}\n\n.preview-remove-btn {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 18px;\n  height: 18px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  /* Slightly larger X */\n  cursor: pointer;\n  border: none;\n  backdrop-filter: blur(2px);\n  transition: background 0.2s, transform 0.1s;\n  padding: 0;\n  line-height: 1;\n}\n\n.preview-remove-btn:hover {\n  background: rgba(244, 67, 54, 0.9);\n  transform: scale(1.1);\n}\n\n/* Video Preview Styles */\n.video-preview-item {\n  position: relative;\n}\n\n.preview-video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.video-preview-item:hover .preview-video {\n  transform: scale(1.05);\n}\n\n.video-play-overlay {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 32px;\n  height: 32px;\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  backdrop-filter: blur(2px);\n}\n\n.video-play-overlay svg {\n  margin-left: 2px;\n}\n\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n\n.dollars-input-wrapper {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  border-radius: 18px;\n  min-width: 0;\n  background-color: rgba(255, 255, 255, 0.25);\n  border: none;\n  /* Very subtle inner shadow for depth */\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s ease;\n  backdrop-filter: blur(5px);\n  padding-left: 0;\n}\n\nhtml[data-theme=\"dark\"] .dollars-input-wrapper {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.dollars-input-wrapper:focus-within {\n  background-color: rgba(255, 255, 255, 0.5);\n  border-color: var(--primary-color);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1), 0 0 8px color-mix(in srgb, var(--primary-color), transparent 40%) !important;\n}\n\nhtml[data-theme=\"dark\"] .dollars-input-wrapper:focus-within {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.chat-textarea {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  border-radius: 18px;\n  padding: 8px 14px;\n  resize: none;\n  font-size: 14px;\n  line-height: 1.4;\n  height: 38px;\n  max-height: 150px;\n  color: var(--dollars-text);\n  outline: none;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nhtml[data-theme=\"dark\"] .chat-textarea {\n  background: none !important;\n}\n\n.chat-textarea:focus {\n  outline: none;\n  box-shadow: none !important;\n}\n\n.input-actions {\n  display: flex;\n  gap: 4px;\n}\n\n.action-btn,\n.dollars-icon-btn {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border: none;\n  border-radius: 50%;\n  background-color: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dollars-text-secondary);\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.action-btn:hover,\n.dollars-icon-btn:hover {\n  background-color: var(--dollars-glass-highlight);\n  transform: scale(1.1);\n}\n\n.action-btn:active,\n.dollars-icon-btn:active {\n  transform: scale(0.95);\n}\n\n.action-btn svg {\n  width: 20px;\n  height: 20px;\n}\n\n.send-btn {\n  width: 38px;\n  height: 38px;\n  border: none;\n  background: var(--primary-color);\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  transition: transform 0.2s, filter 0.2s;\n  box-shadow: 0 0 10px color-mix(in srgb, var(--primary-color), transparent 20%);\n}\n\n.send-btn:hover {\n  filter: brightness(1.1);\n  transform: scale(1.05);\n}\n\n.send-btn:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n  filter: none;\n  box-shadow: none;\n}\n\n.send-btn svg {\n  width: 18px;\n  height: 18px;\n}\n\n/* =========================================\n   Smiley Panel - 液态玻璃效果\n   ========================================= */\n#dollars-smiles-floating {\n  --item-size: 32px;\n  --icon-size: 21px;\n  --item-hover-bg: rgba(255, 255, 255, 0.3);\n  --item-hover-scale: 1.1;\n  --transition-speed: 0.2s;\n  --panel-height: 320px;\n  --border-color: var(--dollars-border);\n\n  position: absolute;\n  bottom: calc(100% + 5px);\n  z-index: var(--dollars-z-index-smiley);\n  height: var(--panel-height);\n  width: 100%;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--dollars-glass-border-color);\n  border-radius: 18px;\n  /* Glass Surface Effect */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  box-sizing: border-box;\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(10px) scale(0.95);\n  transition: opacity 0.2s, transform 0.2s;\n  pointer-events: none;\n  transform-origin: bottom left;\n}\n\nhtml[data-theme=\"dark\"] #dollars-smiles-floating {\n  --item-hover-bg: rgba(255, 255, 255, 0.1);\n}\n\n@keyframes dollars-panel-slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(15px) scale(0.95);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n#dollars-smiles-floating.open {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  pointer-events: auto;\n  animation: dollars-panel-slide-up 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n#dollars-smiles-tabs {\n  display: flex;\n  flex-shrink: 0;\n  padding: 4px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background-color: transparent;\n}\n\n.smiley-tab-btn {\n  padding: 4px 12px;\n  border: 1px solid transparent;\n  border-radius: 15px;\n  background: none;\n  cursor: pointer;\n  color: var(--primary-color);\n  font-size: 13px;\n  transition: background-color var(--transition-speed), color var(--transition-speed);\n  image-rendering: pixelated;\n}\n\n.smiley-tab-btn:hover {\n  background-color: var(--item-hover-bg);\n}\n\n.smiley-tab-btn.active {\n  background-color: transparent;\n  color: var(--primary-color);\n  border-color: var(--dollars-border);\n  font-weight: 700;\n}\n\n#dollars-smiles-content {\n  padding: 8px;\n  overflow-y: auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  justify-content: flex-start;\n  overscroll-behavior: contain;\n}\n\n.smiley-item {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: var(--item-size);\n  height: var(--item-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.smiley-item a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: var(--icon-size) var(--icon-size);\n  font-size: 0;\n  transition: background-color var(--transition-speed), transform calc(var(--transition-speed) / 2);\n  image-rendering: pixelated;\n}\n\n#dollars-smiles-floating .bmo,\n#dollars-reaction-picker-floating .bmo {\n  vertical-align: middle;\n}\n\n.smiley-item a:hover {\n  background-color: var(--item-hover-bg);\n  transform: scale(var(--item-hover-scale));\n}\n\n\n\n/* Favorites Items: Larger size */\n.smiley-item.favorite-item {\n  width: 64px;\n  height: 64px;\n  border-radius: 8px;\n}\n\n.smiley-item.favorite-item a {\n  background-size: contain;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n\nhtml[data-theme=\"dark\"] .smiley-item.favorite-item a {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.smiley-item.favorite-item .remove-favorite-btn {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 16px;\n  height: 16px;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  font-size: 12px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.smiley-item.favorite-item:hover .remove-favorite-btn {\n  opacity: 1;\n}\n\n/* =========================================\n   Context Menu - Telegram-style layout\n   ========================================= */\n#dollars-context-menu {\n  position: fixed;\n  z-index: var(--dollars-z-index-overlay);\n  /* Remove container background/border/shadow */\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  min-width: unset;\n  /* Let children define width */\n\n  opacity: 0;\n  transform: scale(0.95);\n  pointer-events: none;\n  transition: transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.15s ease-out;\n}\n\nhtml[data-theme=\"dark\"] #dollars-context-menu {\n  background: transparent;\n  box-shadow: none;\n}\n\n#dollars-context-menu.visible {\n  opacity: 1;\n  transform: scale(1);\n  pointer-events: auto;\n}\n\n/* has-items-wrapper: reactions + menu items structure */\n#dollars-context-menu.has-items-wrapper {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  /* Gap between reactions and items */\n  align-items: flex-start;\n  /* Prevent stretching, keeping items narrower */\n}\n\n/* Horizontal reactions row - Bubble Style */\n.context-menu-reactions {\n  display: flex;\n  align-items: center;\n  padding: 6px;\n  gap: 4px;\n\n  /* Glass Bubble Styles */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  border: 1px solid var(--dollars-glass-border-color);\n  border-radius: 40px;\n  /* Pill shape */\n}\n\n\n.context-menu-reactions .reaction-item {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  /* Circle */\n  cursor: pointer;\n  transition: transform 0.1s ease, background-color 0.15s ease;\n  -webkit-touch-callout: none;\n  user-select: none;\n}\n\n.context-menu-reactions .reaction-item:hover {\n  background-color: var(--dollars-bg-hover);\n  transform: scale(1.15);\n}\n\n.context-menu-reactions .reaction-item:active {\n  transform: scale(0.95);\n}\n\n.context-menu-reactions .reaction-item img {\n  width: 20px;\n  height: 20px;\n  display: block;\n  image-rendering: pixelated;\n}\n\n/* Force BMO emoji size in reactions */\n.context-menu-reactions .reaction-item .bmoji-image,\n.reaction-item .bmoji-image {\n  width: 18px !important;\n  height: 18px !important;\n}\n\n/* More button */\n.context-menu-reactions-more {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--dollars-text-secondary);\n  transition: background-color 0.15s ease, transform 0.1s ease;\n  flex-shrink: 0;\n}\n\n.context-menu-reactions-more:hover {\n  background-color: var(--dollars-bg-hover);\n  transform: scale(1.1);\n}\n\n.context-menu-reactions-more:active {\n  transform: scale(0.95);\n}\n\n.context-menu-reactions-more svg {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.3s ease;\n}\n\n.context-menu-reactions-more.expanded svg {\n  transform: rotate(180deg);\n}\n\n/* Menu items container - Bubble Style */\n.context-menu-items {\n  padding: 5px 0;\n  min-width: 160px;\n  max-width: 220px;\n  /* Enforce smaller width */\n\n  /* Glass Bubble Styles */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  border: 1px solid var(--dollars-glass-border-color);\n  border-radius: 18px;\n  overflow: hidden;\n}\n\n.context-menu-items button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 12px;\n  border: none;\n  background: none;\n  text-align: left;\n  cursor: pointer;\n  color: var(--dollars-text);\n  font-size: 14px;\n  line-height: 20px;\n  transition: background-color 0.1s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.context-menu-items button span:not(.context-icon) {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.context-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: var(--dollars-text-secondary);\n}\n\nhtml[data-theme=\"dark\"] .context-icon {\n  color: #aaa;\n}\n\n.context-icon svg {\n  width: 20px;\n  height: 20px;\n}\n\n.context-menu-items button.danger .context-icon {\n  color: #f5222d;\n}\n\n.context-menu-items button:hover {\n  background-color: var(--dollars-bg-hover);\n}\n\n.context-menu-items button.danger {\n  color: #f5222d;\n}\n\n.context-menu-items button.image-action {\n  display: none;\n}\n\n#dollars-context-menu.image-mode .context-menu-items button.image-action {\n  display: flex;\n}\n\n/* =========================================\n   Floating Reaction Picker\n   ========================================= */\n#dollars-reaction-picker-floating {\n  --item-size: 32px;\n  --icon-size: 21px;\n  --item-hover-bg: rgba(255, 255, 255, 0.3);\n  --panel-height: 260px;\n\n  position: fixed;\n  z-index: calc(var(--dollars-z-index-overlay) + 1);\n  /* width is set dynamically via inline style */\n  height: var(--panel-height);\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--dollars-glass-border-color);\n  border-radius: 18px;\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(-5px) scale(0.95);\n  transition: opacity 0.15s ease, transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1);\n  pointer-events: none;\n}\n\nhtml[data-theme=\"dark\"] #dollars-reaction-picker-floating {\n  --item-hover-bg: rgba(255, 255, 255, 0.1);\n}\n\n@keyframes dollars-picker-slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-15px) scale(0.95);\n  }\n\n  60% {\n    transform: translateY(3px) scale(1.01);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n#dollars-reaction-picker-floating.open {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  pointer-events: auto;\n  animation: dollars-picker-slide-down 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.reaction-picker-tabs {\n  display: flex;\n  flex-shrink: 0;\n  padding: 4px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background-color: transparent;\n  gap: 2px;\n}\n\n.reaction-picker-tab-btn {\n  padding: 4px 10px;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  background: none;\n  cursor: pointer;\n  color: var(--dollars-text-secondary);\n  font-size: 13px;\n  transition: background-color 0.15s, color 0.15s;\n  image-rendering: pixelated;\n}\n\nhtml[data-theme=\"dark\"] .reaction-picker-tab-btn {\n  color: #aaa;\n}\n\n.reaction-picker-tab-btn:hover {\n  background-color: var(--item-hover-bg);\n}\n\nhtml[data-theme=\"dark\"] .reaction-picker-tab-btn:hover {\n  background-color: #444;\n}\n\n.reaction-picker-tab-btn.active {\n  background-color: var(--dollars-bg);\n  color: var(--dollars-text);\n  border-color: var(--dollars-border);\n  font-weight: 700;\n}\n\nhtml[data-theme=\"dark\"] .reaction-picker-tab-btn.active {\n  background-color: #3a3a3a;\n  color: #eee;\n  border-color: #555;\n}\n\n.reaction-picker-content {\n  padding: 8px;\n  overflow-y: auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  justify-content: flex-start;\n  overscroll-behavior: contain;\n}\n\n.reaction-picker-content .smiley-item {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: var(--item-size);\n  height: var(--item-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.reaction-picker-content .smiley-item a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: var(--icon-size) var(--icon-size);\n  font-size: 0;\n  transition: background-color 0.15s, transform 0.1s;\n  image-rendering: pixelated;\n}\n\n.reaction-picker-content .smiley-item a:hover {\n  background-color: var(--item-hover-bg);\n  transform: scale(1.1);\n}\n\n\n/* =========================================\n   User Mention\n   ========================================= */\n.user-mention {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n\n.user-mention:hover {\n  text-decoration: underline;\n}\n\n/* =========================================\n   Chat Tags\n   ========================================= */\n.chat-tag {\n  color: var(--primary-color);\n  cursor: pointer;\n  margin-right: 2px;\n  display: inline-block;\n}\n\n.chat-tag:hover {\n  opacity: 0.8;\n}\n\n/* =========================================\n   Floating Date - 液态玻璃效果\n   ========================================= */\n#dollars-floating-date {\n  position: absolute;\n  top: 55px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  /* Glass Surface Effect */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  border: 1px solid var(--dollars-glass-border-color);\n  color: var(--primary-color);\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  text-shadow: none;\n  white-space: nowrap;\n}\n\n#dollars-floating-date.visible {\n  opacity: 1;\n}\n\n/* =========================================\n   Typing Indicator - 液态玻璃效果\n   ========================================= */\n#dollars-typing-indicator {\n  position: absolute;\n  top: -30px;\n  left: 10px;\n  height: auto;\n  /* Glass Surface Effect */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  border: 1px solid var(--dollars-glass-border-color);\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  color: var(--dollars-text-secondary);\n  font-style: italic;\n  opacity: 0;\n  transition: opacity 0.2s, transform 0.2s;\n  line-height: 1.5;\n  pointer-events: none;\n  transform: translateY(5px);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n#dollars-typing-indicator.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n\nhtml[data-theme=dark] #dollars-typing-indicator {\n  color: #fff;\n}\n\n/* =========================================\n   Highlight Animation\n   ========================================= */\n@keyframes dollars-pulse-focus {\n  0% {\n    background-color: transparent;\n    box-shadow: 0 0 0 0 transparent;\n    transform: scale(1);\n  }\n\n  15% {\n    background-color: color-mix(in srgb, var(--primary-color), transparent 85%);\n    box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-color), transparent 80%);\n    border-radius: 12px;\n    transform: scale(1.01);\n  }\n\n  100% {\n    background-color: transparent;\n    box-shadow: 0 0 0 0 transparent;\n    transform: scale(1);\n  }\n}\n\n.chat-message.mention-highlight {\n  animation: dollars-pulse-focus 4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;\n  position: relative;\n}\n\n/* =========================================\n   Text Mask (Spoiler)\n   ========================================= */\nspan.text_mask {\n  background-color: #555;\n}\n\n/* =========================================\n   Media Queries\n   ========================================= */\n@media (max-width: 768px) {\n  #dollars-chat-window {\n    width: auto;\n    max-width: calc(100vw - 20px);\n    height: calc(100dvh - 60px);\n    max-height: calc(100dvh - 60px);\n    left: 10px;\n    right: 10px;\n    bottom: 30px;\n    top: auto;\n  }\n\n  .chat-message {\n    content-visibility: visible;\n    contain-intrinsic-size: auto;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n\n  #dollars-chat-window,\n  #dollars-chat-window .chat-header .close-btn,\n  #dollars-chat-window .chat-message,\n  #dollars-chat-window .send-btn {\n    transition: none !important;\n  }\n}\n\n/* 极简版个人资料卡片 (Minimalist Profile Card) */\n#dollars-profile-card {\n  position: fixed;\n  z-index: var(--dollars-z-index-overlay);\n  width: 280px;\n  padding: 0;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.15);\n  color: var(--dollars-text);\n  opacity: 0;\n  transform: scale(0.95) translateY(5px);\n  transition: opacity 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);\n  pointer-events: none;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--dollars-border);\n}\n\nhtml[data-theme=dark] #dollars-profile-card {\n  background: rgba(45, 45, 45, 0.95);\n  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.6);\n}\n\n@keyframes dollars-profile-slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(15px) scale(0.95);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n#dollars-profile-card.visible {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  pointer-events: auto;\n  transition: none;\n  animation: dollars-profile-slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.dollars-profile-banner {\n  height: 60px;\n  width: 100%;\n  background: linear-gradient(160deg, color-mix(in srgb, var(--primary-color), #a0c4ff 50%) 0%, color-mix(in srgb, var(--primary-color), #ffffff 50%) 50%, color-mix(in srgb, var(--primary-color), #ffc6ff 50%) 100%);\n  position: relative;\n}\n\n.dollars-profile-banner::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: url('https://lsky.ry.mk/i/2026/01/03/background.svg');\n  background-size: 300px;\n  opacity: 1;\n  mix-blend-mode: overlay;\n}\n\nhtml[data-theme=dark] .dollars-profile-banner {\n  background: transparent;\n}\n\nhtml[data-theme=dark] .dollars-profile-banner::before {\n  mix-blend-mode: normal;\n  background: linear-gradient(160deg, var(--primary-color) 0%, color-mix(in srgb, var(--primary-color), transparent 40%) 100%);\n  -webkit-mask-image: url('https://lsky.ry.mk/i/2026/01/03/background.svg');\n  mask-image: url('https://lsky.ry.mk/i/2026/01/03/background.svg');\n  -webkit-mask-repeat: repeat;\n  mask-repeat: repeat;\n  -webkit-mask-position: center;\n  mask-position: center;\n  -webkit-mask-size: 300px;\n  mask-size: 300px;\n  opacity: 0.25;\n}\n\n.dollars-profile-body {\n  padding: 0 20px 15px 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.dollars-profile-top-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: -30px;\n  margin-bottom: 12px;\n  position: relative;\n  z-index: 2;\n}\n\n.dollars-profile-identity {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  flex-grow: 1;\n  min-width: 0;\n  margin-right: 8px;\n}\n\n.dollars-profile-avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  border: 3px solid var(--dollars-bg);\n  background-color: var(--dollars-bg);\n  object-fit: cover;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);\n  flex-shrink: 0;\n}\n\n.dollars-profile-names {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.dollars-profile-nickname {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--dollars-text);\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.dollars-profile-username {\n  font-size: 12px;\n  color: var(--dollars-text-secondary);\n  font-family: monospace;\n  opacity: 0.7;\n}\n\n.dollars-profile-actions {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n\n.dollars-profile-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: transparent;\n  border: 1px solid var(--dollars-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dollars-text-secondary) !important;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n\n.dollars-profile-btn:hover {\n  background: var(--primary-color);\n  color: #fff !important;\n  border-color: var(--primary-color);\n  transform: translateY(-2px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.dollars-profile-btn svg {\n  width: 15px;\n  height: 15px;\n  stroke: currentColor;\n}\n\n.dollars-profile-sign {\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--dollars-text);\n  opacity: 0.85;\n  margin-bottom: 12px;\n  background: none;\n  border: none;\n  padding: 0;\n  font-style: normal;\n  word-wrap: break-word;\n}\n\n.dollars-profile-footer {\n  font-size: 10px;\n  color: var(--dollars-text-placeholder);\n  padding-top: 8px;\n  border-top: 1px solid var(--dollars-border);\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.dollars-profile-footer::before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--dollars-border);\n}\n\n.dollars-profile-footer.active::before {\n  background-color: #4CAF50;\n}\n\n/* =========================================\n   Resize Handle & Loader (Added)\n   ========================================= */\n\n/* Online Status Dot in Header */\n.online-dot {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: #4CAF50;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n\n/* Chat Header Left Pane */\n.chat-header-left-pane {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-right: 8px;\n}\n\n/* =========================================\n   Restored Original Button Styles\n   ========================================= */\n\n/* Emoji Button */\n#dollars-emoji-btn {\n  width: 38px;\n  height: 38px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23555\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-device-tv\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z\" /><path d=\"M16 3l-4 4l-4 -4\" /></svg>');\n  background-size: 23px;\n  background-repeat: no-repeat;\n  background-position: center;\n  color: #555;\n  border-radius: 50%;\n}\n\nhtml[data-theme=\"dark\"] #dollars-emoji-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23bbb\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-device-tv\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z\" /><path d=\"M16 3l-4 4l-4 -4\" /></svg>');\n  color: #bbb;\n}\n\n#dollars-emoji-btn svg {\n  display: none !important;\n}\n\n/* Attach Button */\n#dollars-attach-btn {\n  width: 38px;\n  height: 38px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"%23555\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-paperclip\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5\" /></svg>');\n  background-size: 23px;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n}\n\nhtml[data-theme=\"dark\"] #dollars-attach-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"%23bbb\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-paperclip\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5\" /></svg>');\n}\n\n#dollars-attach-btn svg {\n  display: none !important;\n}\n\n/* Send Button */\n.send-btn {\n  background-color: var(--primary-color);\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z\" /><path d=\"M6.5 12h14.5\" /></svg>');\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-color .2s, filter .2s;\n  box-shadow: 0 0 10px color-mix(in srgb, var(--primary-color), transparent 20%);\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n}\n\n.send-btn svg {\n  display: none !important;\n}\n\n/* Header Buttons Container */\n.chat-header .header-buttons,\n.header-buttons {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n/* Header Button */\n.header-btn {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: background-color .2s ease;\n  border: none;\n  background: transparent;\n}\n\nhtml[data-theme=\"dark\"] .chat-header .header-btn:hover {\n  background-color: rgba(255, 255, 255, .08);\n}\n\n/* Back Button */\n#dollars-back-btn {\n  margin-right: 0;\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23555\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"15 18 9 12 15 6\"/></svg>');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\nhtml[data-theme=\"dark\"] #dollars-back-btn {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23bbb\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"15 18 9 12 15 6\"/></svg>');\n}\n\n#dollars-back-btn svg {\n  display: none !important;\n}\n\n/* Resize Handle */\n#dollars-resize-handle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  cursor: nw-resize;\n  z-index: 10003;\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M10 2L2 10\" stroke=\"%23a0a0a0\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M14 6L6 14\" stroke=\"%23a0a0a0\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>');\n  background-repeat: no-repeat;\n  background-position: 5px 5px;\n  background-size: 10px;\n  opacity: .6;\n  transition: opacity .2s ease;\n}\n\n#dollars-resize-handle:hover {\n  opacity: 1;\n}\n\nhtml[data-theme=\"dark\"] #dollars-resize-handle {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M10 2L2 10\" stroke=\"%23bbb\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M14 6L6 14\" stroke=\"%23bbb\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>');\n}\n\n/* Disable the custom triangle pseudo-element */\n#dollars-resize-handle::after {\n  display: none !important;\n}\n\n#dollars-settings-btn-header {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23555\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z\" /><circle cx=\"12\" cy=\"12\" r=\"3\" /></svg>');\n}\n\nhtml[data-theme=\"dark\"] #dollars-settings-btn-header {\n  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23bbb\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z\" /><circle cx=\"12\" cy=\"12\" r=\"3\" /></svg>');\n}\n\n/* =========================================\n   Text Formatter (BBCode Toolbar)\n   ========================================= */\n#dollars-text-formatter {\n  position: fixed;\n  z-index: var(--dollars-z-index-context);\n  /* Glass Surface Effect */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  border: 1px solid var(--dollars-glass-border-color);\n  border-radius: 50px;\n  display: flex;\n  flex-direction: column;\n  padding: 4px;\n  opacity: 0;\n  transform: translateY(10px) scale(0.95);\n  pointer-events: none;\n  transition: opacity 0.2s cubic-bezier(0.2, 0.8, 0.2, 1),\n    transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n#dollars-text-formatter.visible {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  pointer-events: auto;\n}\n\n.formatter-row {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.formatter-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  border-radius: 50px;\n  cursor: pointer;\n  color: var(--dollars-text);\n  transition: background-color 0.2s;\n}\n\n.formatter-btn:hover {\n  background-color: var(--dollars-bg-hover);\n}\n\n.formatter-btn.active {\n  color: var(--primary-color);\n}\n\n.formatter-btn svg {\n  width: 18px;\n  height: 18px;\n}\n\n.formatter-divider {\n  width: 1px;\n  height: 18px;\n  background-color: var(--dollars-border);\n  margin: 0 4px;\n}\n\n.formatter-link-input-wrapper {\n  display: none;\n  align-items: center;\n  gap: 4px;\n  padding: 0 2px;\n}\n\n#dollars-text-formatter.link-mode .main-buttons {\n  display: none;\n}\n\n#dollars-text-formatter.link-mode .formatter-link-input-wrapper {\n  display: flex;\n}\n\n.formatter-link-input {\n  background: transparent;\n  border: none;\n  color: var(--dollars-text);\n  font-size: 13px;\n  width: 150px;\n  outline: none;\n  padding: 4px;\n}\n\n.formatter-link-input::placeholder {\n  color: var(--dollars-text-placeholder);\n}\n\n/* =========================================\n   Navigation Group & Buttons\n   ========================================= */\n#dollars-nav-group {\n  position: absolute;\n  bottom: 90px;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  z-index: 30;\n  pointer-events: none;\n  transition: transform 0.2s, opacity 0.2s;\n}\n\n#dollars-nav-group.visible {\n  pointer-events: auto;\n}\n\n.nav-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid var(--dollars-glass-border-color);\n  /* Glass Surface Effect */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  color: var(--primary-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  pointer-events: none;\n}\n\n.nav-btn.visible {\n  opacity: 1;\n  transform: scale(1);\n  pointer-events: auto;\n}\n\n.nav-btn:hover {\n  background: var(--dollars-glass-bg);\n  transform: scale(1.1);\n  box-shadow: var(--dollars-glass-shadow), 0 0 0 2px color-mix(in srgb, var(--primary-color), transparent 70%);\n}\n\n.nav-btn:active {\n  transform: scale(0.95);\n}\n\n.nav-btn svg {\n  width: 24px;\n  height: 24px;\n  stroke-width: 2.5;\n}\n\n/* Specific styling for the scroll bottom button if used standalone */\n#dollars-scroll-bottom-btn {\n  /* It uses .nav-btn class, so base styles apply */\n  /* If it needs specific positioning when NOT in a group, meaningful defaults: */\n  position: absolute;\n  bottom: 80px;\n  right: 20px;\n  z-index: 95;\n}\n\n/* Telegram-style: 跳转到未读消息模式 */\n#dollars-scroll-bottom-btn.mode-to-unread {\n  background-color: var(--primary-color);\n  color: #fff;\n}\n\n/* Scroll to Mention Button (like Telegram) */\n#dollars-scroll-mention-btn {\n  position: absolute;\n  right: 20px;\n  z-index: 95;\n  /* Position above scroll-bottom-btn with dynamic bottom */\n}\n\n#dollars-scroll-mention-btn svg {\n  transform: rotate(180deg);\n}\n\n/* Unread Badge */\n#dollars-unread-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: var(--primary-color);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: center;\n  padding: 0 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  display: none;\n  z-index: 31;\n}\n\n/* =========================================\n   MentionCompleter (@ User Search)\n   ========================================= */\n#dollars-mention-list {\n  position: absolute;\n  bottom: calc(100% + 5px);\n  left: 0;\n  width: 100%;\n  max-height: 220px;\n  overflow-y: auto;\n  border-radius: 18px;\n  display: none;\n  flex-direction: column;\n  z-index: var(--dollars-z-index-smiley);\n  /* Glass Surface Effect */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  box-shadow: var(--dollars-glass-shadow);\n  border: 1px solid var(--dollars-glass-border-color);\n  gap: 4px;\n  transition: bottom 0.2s ease;\n}\n\n#dollars-mention-list.visible {\n  display: flex;\n  animation: dollars-slide-up 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n@keyframes dollars-slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(10px) scale(0.98);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes dollars-item-slide-in {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.mention-item {\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n  border-radius: 15px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  gap: 8px;\n  animation: dollars-item-slide-in 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;\n}\n\n.mention-item:nth-child(1) {\n  animation-delay: 0ms;\n}\n\n.mention-item:nth-child(2) {\n  animation-delay: 30ms;\n}\n\n.mention-item:nth-child(3) {\n  animation-delay: 60ms;\n}\n\n.mention-item:nth-child(4) {\n  animation-delay: 90ms;\n}\n\n.mention-item:nth-child(5) {\n  animation-delay: 120ms;\n}\n\n.mention-item:nth-child(6) {\n  animation-delay: 150ms;\n}\n\n.mention-item:hover,\n.mention-item.active {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\nhtml[data-theme=\"dark\"] .mention-item:hover,\nhtml[data-theme=\"dark\"] .mention-item.active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mention-item img {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  object-fit: cover;\n  background-color: var(--dollars-bg);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.mention-item-info {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  overflow: hidden;\n  min-width: 0;\n  line-height: 1.2;\n}\n\n.mention-item-nick {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--dollars-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mention-item-user {\n  font-size: 10px;\n  color: var(--dollars-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  opacity: 0.8;\n}\n\n/* =========================================\n   Link Previews\n   ========================================= */\n.dollars-link-previews {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n\n.dollars-preview-card {\n  background-color: var(--dollars-bg);\n  border: 1px solid var(--dollars-border);\n  border-radius: 8px;\n  padding: 10px;\n  display: flex;\n  gap: 12px;\n  text-decoration: none !important;\n  transition: all 0.2s;\n  box-sizing: border-box;\n  max-width: 100% !important;\n  height: 100px;\n  width: 300px;\n  overflow: hidden;\n  position: relative;\n  min-width: 0;\n}\n\n.dollars-preview-card .cover {\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n  border-radius: 6px;\n  background-color: var(--dollars-bg);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dollars-preview-card .cover img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 0 !important;\n}\n\n.dollars-preview-card[data-entity-type=character] .cover img,\n.dollars-preview-card[data-entity-type=person] .cover img {\n  object-fit: contain !important;\n}\n\n.dollars-preview-card[data-entity-type=generic] .cover {\n  background-color: var(--dollars-bg);\n  border-radius: 5px;\n}\n\n.dollars-preview-card[data-entity-type=generic] .cover img {\n  object-fit: cover;\n}\n\n.dollars-preview-card .inner {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.dollars-preview-card .title {\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--dollars-text) !important;\n  margin: 0 0 4px 0;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.dollars-preview-card .subtitle {\n  font-size: 12px;\n  color: var(--dollars-text-secondary);\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 2px;\n}\n\n.dollars-preview-card .info {\n  font-size: 12px;\n  color: var(--dollars-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.dollars-preview-card[data-entity-type=generic] .info {\n  margin-top: 4px;\n  margin-bottom: 0;\n}\n\n.dollars-preview-card .rateInfo {\n  margin-top: 6px;\n  font-size: 11px;\n  color: var(--dollars-text-placeholder);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.dollars-preview-card .rank {\n  font-weight: 700;\n  color: var(--primary-color);\n}\n\n.dollars-preview-card .score,\n.dollars-preview-card .stat {\n  font-weight: 700;\n  color: var(--dollars-text);\n}\n\n.dollars-preview-card .total {\n  color: var(--dollars-text-placeholder);\n}\n\n.dollars-preview-card .rateInfo img.favicon {\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n}\n\n.dollars-preview-placeholder {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dollars-text-secondary);\n  background-color: var(--dollars-bg);\n  border: 1px dashed var(--dollars-border);\n  border-radius: 15px;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: background-color .3s;\n  min-width: 0;\n  width: 300px;\n  max-width: 100% !important;\n}\n\n.dollars-preview-placeholder.is-loading {\n  cursor: wait;\n  background: linear-gradient(-45deg, var(--dollars-bg) 25%, var(--dollars-bg-hover) 50%, var(--dollars-bg) 75%);\n  background-size: 400% 400%;\n  animation: 1.5s infinite gradient-scroll;\n}\n\n@keyframes gradient-scroll {\n  0% {\n    background-position: 0% 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n/* =========================================\n   Search UI\n   ========================================= */\n#dollars-search-ui {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-height: 0;\n  gap: 8px;\n  padding: 52px 12px 12px 12px;\n  /* Glass Surface Effect */\n  background: var(--dollars-glass-bg);\n  backdrop-filter: var(--dollars-glass-blur);\n  -webkit-backdrop-filter: var(--dollars-glass-blur);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n}\n\n\n#dollars-search-ui .search-panel-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  width: 100%;\n  opacity: 0.8\n}\n\n#dollars-search-ui .search-calendar-btn {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: var(--dollars-bg);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid var(--dollars-border);\n  color: var(--dollars-text-secondary);\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n\n#dollars-search-ui .search-bar {\n  height: 35px;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  position: relative;\n  border-radius: 100px;\n  border: 1px solid var(--dollars-border);\n  background-color: var(--dollars-bg);\n  transition: all .3s ease-in-out;\n  padding: 0 6px 0 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n#dollars-search-ui .search-bar:focus-within {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 10px rgba(240, 145, 153, .6);\n}\n\n#dollars-search-ui input {\n  flex-grow: 1;\n  padding: 6px 0;\n  border: none;\n  border-radius: 0;\n  background-color: transparent;\n  outline: 0;\n  color: var(--dollars-text);\n}\n\n#dollars-search-ui .search-close-btn {\n  cursor: pointer;\n  font-size: 20px;\n  color: var(--dollars-text-secondary);\n  align-items: center;\n  opacity: 0.5;\n  z-index: 1;\n  display: flex\n}\n\n#dollars-search-ui input[type=search]::-webkit-search-cancel-button,\n#dollars-search-ui input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n  appearance: none;\n  display: none;\n}\n\n#dollars-search-results {\n  flex-grow: 1;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n\n.search-result-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color .2s;\n}\n\n.search-result-item:hover {\n  background-color: var(--dollars-bg-hover);\n}\n\n.search-result-item img {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n}\n\n.search-result-item .dollars-search-content {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.search-result-item .dollars-search-header {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n}\n\n.search-result-item .dollars-search-nickname {\n  font-weight: 700;\n  color: var(--dollars-text);\n}\n\n.search-result-item .dollars-search-timestamp {\n  color: var(--dollars-text-secondary);\n}\n\n.search-result-item .dollars-search-message {\n  font-size: 13px;\n  color: var(--dollars-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* Tooltip Styles from Legacy Script */\n.dollars-tooltip {\n  pointer-events: auto !important;\n}\n\n.dollars-tooltip .tooltip-inner a {\n  color: #eee !important;\n  text-decoration: none !important;\n  transition: color .2s;\n  cursor: pointer;\n}\n\n.dollars-tooltip .tooltip-inner a:hover {\n  color: #fff !important;\n  border-bottom-color: #fff;\n  text-decoration: none !important;\n}\n\n/* =========================================\n   Elegant Animation Keyframes\n   ========================================= */\n\n/* New Message Entrance - Smooth Slide Up */\n@keyframes dollars-message-in {\n  0% {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Exit Animations - Scale Down + Fade */\n@keyframes dollars-scale-out {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n}\n\n/* Exit Animations - Slide Down + Fade */\n@keyframes dollars-slide-down-out {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n}\n\n/* Context Menu Exit */\n#dollars-context-menu.closing {\n  animation: dollars-scale-out 0.15s ease-out forwards;\n  pointer-events: none;\n}\n\n/* Profile Card Exit */\n@keyframes dollars-profile-slide-out {\n  0% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(10px) scale(0.95);\n  }\n}\n\n#dollars-profile-card.closing {\n  animation: dollars-profile-slide-out 0.2s cubic-bezier(0.4, 0, 1, 1) forwards;\n  pointer-events: none;\n  transition: none;\n}\n\n/* Smiley Panel Exit */\n#dollars-smiles-floating.closing {\n  animation: dollars-slide-down-out 0.2s ease-out forwards;\n  pointer-events: none;\n}\n\n/* Reaction Picker Exit */\n#dollars-reaction-picker-floating.closing {\n  animation: dollars-scale-out 0.15s ease-out forwards;\n  pointer-events: none;\n}\n\n.chat-message.new-message {\n  animation: dollars-message-in 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n  /* Disable CSS transitions during keyframe animation to prevent conflict */\n  /* Note: NOT using !important so pending state can still apply properly */\n  transition: none;\n  /* 确保动画从正确的初始状态开始 */\n  opacity: 0;\n  transform: translateY(16px);\n}\n\n/* When both pending and new-message are applied (optimistic message entry),\n   use pending's opacity so the spinner is visible during entry animation */\n.chat-message.pending.new-message {\n  opacity: 0.75;\n}\n\n/* Pending (Optimistic) Message */\n.chat-message.pending {\n  opacity: 0.7;\n  /* Smooth transition when pending state is removed */\n  transition: opacity 0.25s ease-out !important;\n}\n\n.chat-message.pending .bubble::after {\n  content: '';\n  position: absolute;\n  right: 6px;\n  bottom: 4px;\n  width: 12px;\n  height: 12px;\n  border: 2px solid var(--dollars-text-secondary);\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: dollars-spin 0.7s ease-in-out infinite, dollars-spinner-fade-in 0.2s ease-out forwards;\n  will-change: transform;\n}\n\n/* Spinner rotation animation */\n@keyframes dollars-spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* Spinner fade-in animation */\n@keyframes dollars-spinner-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.5) rotate(0deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}\n\n/* Reaction Emoji Pop Animation */\n@keyframes dollars-reaction-pop {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n\n  50% {\n    transform: scale(1.3);\n  }\n\n  70% {\n    transform: scale(0.9);\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.reaction-item.just-added {\n  animation: dollars-reaction-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n/* =========================================\n   Reaction Container Override\n   ========================================= */\n/* Override official .likes_grid opacity from 0.7 to 1 */\n#dollars-chat-root .likes_grid {\n  opacity: 1;\n}\n\n#dollars-chat-root .likes_grid .item {\n  gap: 3px;\n  background: rgba(255, 255, 255, 0.85);\n}\n\n/* Override dark mode .likes_grid .item background - official is too transparent */\nhtml[data-theme=\"dark\"] #dollars-chat-root .likes_grid .item {\n  background: rgba(255, 255, 255, 0.15);\n}\n\n/* =========================================\n   Reaction Avatar Styles\n   ========================================= */\n.reaction-avatars {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 3px;\n  flex-shrink: 0;\n}\n\n.reaction-avatar {\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  margin-left: -5px;\n  object-fit: cover;\n  background-color: var(--dollars-bg);\n  position: relative;\n  flex-shrink: 0;\n  transition: transform 0.15s ease;\n}\n\n.reaction-avatar:first-child {\n  margin-left: 0;\n}\n\n.reaction-item:hover .reaction-avatar {\n  border-color: #369cf8;\n}\n\n.reaction-item .num.extra {\n  font-size: 10px;\n  margin-left: 2px;\n  color: var(--dollars-text-secondary);\n}\n\n.reaction-item:hover .num.extra {\n  color: #fff;\n}\n\n/* Stagger Fade In for Grid Items */\n@keyframes dollars-stagger-fade {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n/* Smiley Panel Items Stagger Animation */\n#dollars-smiles-floating.open .smiley-item,\n#dollars-reaction-picker-floating.open .smiley-item {\n  animation: dollars-stagger-fade 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;\n}\n\n/* Context Menu Cascade Animation */\n@keyframes dollars-menu-cascade {\n  from {\n    opacity: 0;\n    transform: translateX(-8px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n#dollars-context-menu.visible .context-menu-items button {\n  animation: dollars-menu-cascade 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;\n}\n\n#dollars-context-menu.visible .context-menu-items button:nth-child(1) {\n  animation-delay: 0ms;\n}\n\n#dollars-context-menu.visible .context-menu-items button:nth-child(2) {\n  animation-delay: 25ms;\n}\n\n#dollars-context-menu.visible .context-menu-items button:nth-child(3) {\n  animation-delay: 50ms;\n}\n\n#dollars-context-menu.visible .context-menu-items button:nth-child(4) {\n  animation-delay: 75ms;\n}\n\n#dollars-context-menu.visible .context-menu-items button:nth-child(5) {\n  animation-delay: 100ms;\n}\n\n#dollars-context-menu.visible .context-menu-items button:nth-child(6) {\n  animation-delay: 125ms;\n}\n\n#dollars-context-menu.visible .context-menu-items button:nth-child(7) {\n  animation-delay: 150ms;\n}\n\n#dollars-context-menu.visible .context-menu-items button:nth-child(8) {\n  animation-delay: 175ms;\n}\n\n/* Context Menu Reactions Bounce Animation */\n@keyframes dollars-reaction-bounce {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translateY(15px);\n  }\n\n  40% {\n    transform: scale(1.2) translateY(-10px);\n  }\n\n  65% {\n    transform: scale(0.92) translateY(2px);\n  }\n\n  85% {\n    transform: scale(1.05) translateY(-2px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n\n#dollars-context-menu.visible .context-menu-reactions .reaction-item {\n  animation: dollars-reaction-bounce 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;\n}\n\n#dollars-context-menu.visible .context-menu-reactions .reaction-item:nth-child(1) {\n  animation-delay: 0ms;\n}\n\n#dollars-context-menu.visible .context-menu-reactions .reaction-item:nth-child(2) {\n  animation-delay: 35ms;\n}\n\n#dollars-context-menu.visible .context-menu-reactions .reaction-item:nth-child(3) {\n  animation-delay: 70ms;\n}\n\n#dollars-context-menu.visible .context-menu-reactions .reaction-item:nth-child(4) {\n  animation-delay: 105ms;\n}\n\n#dollars-context-menu.visible .context-menu-reactions .reaction-item:nth-child(5) {\n  animation-delay: 140ms;\n}\n\n#dollars-context-menu.visible .context-menu-reactions .reaction-item:nth-child(6) {\n  animation-delay: 175ms;\n}\n\n#dollars-context-menu.visible .context-menu-reactions .reaction-item:nth-child(7) {\n  animation-delay: 210ms;\n}\n\n/* Reply Preview Slide Animation */\n.reply-preview.visible {\n  animation: dollars-slide-up 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n/* Search Result Items Stagger */\n.search-result-item {\n  animation: dollars-item-slide-in 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;\n}\n\n.search-result-item:nth-child(1) {\n  animation-delay: 0ms;\n}\n\n.search-result-item:nth-child(2) {\n  animation-delay: 30ms;\n}\n\n.search-result-item:nth-child(3) {\n  animation-delay: 60ms;\n}\n\n.search-result-item:nth-child(4) {\n  animation-delay: 90ms;\n}\n\n.search-result-item:nth-child(5) {\n  animation-delay: 120ms;\n}\n\n.search-result-item:nth-child(6) {\n  animation-delay: 150ms;\n}\n\n.search-result-item:nth-child(7) {\n  animation-delay: 180ms;\n}\n\n.search-result-item:nth-child(8) {\n  animation-delay: 210ms;\n}\n\n/* Conversation Item Hover Enhancement */\n.conversation-item {\n  transition: background-color 0.2s, box-shadow 0.2s, transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n.conversation-item:hover {\n  transform: scale(1.02);\n}\n\n.conversation-item:active {\n  transform: scale(0.98);\n}\n\n/* Button Microinteractions */\n.send-btn {\n  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s, box-shadow 0.2s;\n}\n\n.send-btn:active {\n  transform: scale(0.9) !important;\n}\n\n/* Icon Button Hover Wobble */\n@keyframes dollars-icon-wobble {\n\n  0%,\n  100% {\n    transform: rotate(0deg);\n  }\n\n  25% {\n    transform: rotate(-5deg);\n  }\n\n  75% {\n    transform: rotate(5deg);\n  }\n}\n\n#dollars-emoji-btn:hover,\n#dollars-attach-btn:hover {\n  animation: dollars-icon-wobble 0.4s ease-in-out;\n}\n\n/* Header Button Pulse on Hover */\n.header-btn {\n  transition: background-color 0.2s, transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.header-btn:hover {\n  transform: scale(1.1);\n}\n\n.header-btn:active {\n  transform: scale(0.92);\n}\n\n/* Floating Date Slide In */\n@keyframes dollars-date-slide {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n\n#dollars-floating-date.visible {\n  animation: dollars-date-slide 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n/* Typing Indicator Dots Animation */\n@keyframes dollars-typing-dot {\n\n  0%,\n  60%,\n  100% {\n    transform: translateY(0);\n    opacity: 0.5;\n  }\n\n  30% {\n    transform: translateY(-4px);\n    opacity: 1;\n  }\n}\n\n/* Scroll Bottom Button Bounce In */\n@keyframes dollars-btn-bounce-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n\n  60% {\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.nav-btn.visible {\n  animation: dollars-btn-bounce-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n/* Input Focus Glow Animation - Removed per user request */\n/*@keyframes dollars-focus-glow {\n\n  0%,\n  100% {\n    box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary-color), transparent 70%);\n  }\n\n  50% {\n    box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-color), transparent 80%);\n  }\n}\n\n.chat-input-area:focus-within {\n  animation: dollars-focus-glow 2s ease-in-out infinite;\n}*/\n\n/* Link Preview Card Entrance */\n.dollars-preview-card {\n  animation: dollars-item-slide-in 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n/* Avatar Hover Effect - Removed per user request */\n/*.chat-message .avatar {\n  transition: box-shadow 0.3s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.chat-message .avatar:hover {\n  transform: scale(1.08);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}*/\n\n/* Bubble Hover Lift Effect - Removed per user request */\n/*.chat-message .bubble {\n  transition: background 0.3s ease, transform 0.15s ease, box-shadow 0.15s ease;\n}\n\n.chat-message:hover .bubble {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 8px rgba(16, 35, 47, 0.12);\n}*/\n\n/* Quote Hover Animation */\n.chat-quote {\n  transition: opacity 0.2s, transform 0.15s ease, background 0.2s;\n}\n\n.chat-quote:hover {\n  transform: scale(1.01);\n}\n\n/* Smiley Tab Button Transitions */\n.smiley-tab-btn,\n.reaction-picker-tab-btn {\n  transition: background-color 0.15s, color 0.15s, transform 0.1s;\n}\n\n.smiley-tab-btn:active,\n.reaction-picker-tab-btn:active {\n  transform: scale(0.95);\n}\n\n/* Text Formatter Entrance */\n@keyframes dollars-formatter-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.9);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n#dollars-text-formatter.visible {\n  animation: dollars-formatter-in 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n/* Formatter Button Interactions */\n.formatter-btn {\n  transition: background-color 0.15s, transform 0.1s, color 0.15s;\n}\n\n.formatter-btn:active {\n  transform: scale(0.9);\n}\n\n/* Respect Reduced Motion Preferences */\n@media (prefers-reduced-motion: reduce) {\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n\n/* =========================================\n   Unified Notifier\n   ========================================= */\n#unified-notifier {\n  position: fixed;\n  bottom: 40px;\n  right: 30px;\n  width: 223px;\n  z-index: 10001;\n  border-radius: 15px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  overflow: hidden;\n  transform: translateX(calc(100% + 30px));\n  transition: all .4s ease-in-out;\n  background-color: rgba(254, 254, 254, .9);\n  color: #000;\n  border: 1px solid rgba(0, 0, 0, .1);\n  box-shadow: 0 5px 25px -5px rgba(80, 80, 80, .3);\n  display: flex;\n  flex-direction: column;\n}\n\nhtml[data-theme=dark] #unified-notifier {\n  background-color: rgba(45, 46, 47, .9);\n  color: #e0e0e1;\n  border: 1px solid rgba(255, 255, 255, .15);\n}\n\n#unified-notifier.show {\n  transform: translateX(0);\n}\n\n.un-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px;\n  height: 32px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--primary-color);\n  border-bottom: 1px solid #eee;\n}\n\nhtml[data-theme=dark] .un-header {\n  border-bottom: 1px solid #444;\n}\n\n.un-body {\n  padding: 0;\n  max-height: 400px;\n  overflow-y: auto;\n}\n\n.un-item {\n  display: flex;\n  align-items: flex-start;\n  padding: 10px 15px;\n}\n\n.un-item:not(:last-child) {\n  border-bottom: 1px solid #eee;\n}\n\nhtml[data-theme=dark] .un-item:not(:last-child) {\n  border-bottom: 1px solid #444;\n}\n\n.un-item .avatarNeue {\n  margin-right: 12px;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  background-size: cover;\n  border-radius: 50%;\n}\n\n.un-item .content {\n  flex-grow: 1;\n  font-size: 13px;\n  overflow: hidden;\n}\n\n.un-item .actions {\n  margin-top: 8px;\n}\n\n.un-action-btn {\n  cursor: pointer;\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-decoration: none !important;\n  transition: background-color 0.2s;\n}\n\n.un-action-btn.btnRedSmall {\n  background-color: var(--primary-color);\n  color: #fff !important;\n}\n\n.un-action-btn.btnRedSmall:hover {\n  background-color: #369cf8;\n}\n\n.un-action-btn.btnGraySmall {\n  background-color: #eee;\n  color: #666 !important;\n}\n\n.un-action-btn.btnGraySmall:hover {\n  background-color: #ddd;\n}\n\nhtml[data-theme=dark] .un-action-btn.btnGraySmall {\n  background-color: #444;\n  color: #ccc !important;\n}\n\nhtml[data-theme=dark] .un-action-btn.btnGraySmall:hover {\n  background-color: #555;\n}\n\n.un-widget-title {\n  color: #3e3e3e;\n  display: block;\n  margin-bottom: 4px;\n}\n\n.un-widget-message {\n  color: #666;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n}\n\nhtml[data-theme=dark] .un-widget-title {\n  color: #e9e9e9;\n}\n\nhtml[data-theme=dark] .un-widget-message {\n  color: #aaa;\n}\n\n/* Clear all button */\n.un-clear-all {\n  font-size: 12px;\n  color: #999 !important;\n  text-decoration: none !important;\n}\n\n.un-clear-all:hover {\n  color: var(--primary-color) !important;\n}\n\n/* Unread Badge on Scroll Bottom Button */\n#dollars-unread-badge {\n  display: none;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: var(--primary-color);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: center;\n  padding: 0 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n}\n\n/* Browse Position Separator - 上次浏览位置 bar */\n.browse-separator {\n  display: block;\n  position: relative;\n  text-align: center;\n  margin: 12px -19px;\n  width: calc(100% + 38px);\n  height: 30px;\n  line-height: 30px;\n  background-color: rgba(var(--primary-color-rgb, 249, 109, 142), 0.1);\n  z-index: 2;\n  pointer-events: none;\n  animation: dollars-fade-in 0.3s ease;\n}\n\n.browse-separator span {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--primary-color);\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  padding: 0 12px;\n}\n\nhtml[data-theme='dark'] .browse-separator {\n  background-color: rgba(249, 109, 142, 0.15);\n}\n\n/* Unread Separator - 未读消息 bar */\n.unread-separator {\n  display: block;\n  position: relative;\n  text-align: center;\n  margin: 12px -19px;\n  width: calc(100% + 38px);\n  height: 30px;\n  line-height: 30px;\n  background-color: rgba(255, 255, 255, 0.9);\n  z-index: 2;\n  pointer-events: none;\n  animation: dollars-fade-in 0.3s ease;\n}\n\n.unread-separator span {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--primary-color);\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  padding: 0 12px;\n}\n\nhtml[data-theme='dark'] .unread-separator {\n  background-color: rgba(60, 62, 64, 0.9);\n}\n\n/* =========================================\n   Re:Dollars Homepage Card\n   ========================================= */\n#dollars-card {\n  transition: transform 0.1s ease-out, box-shadow 0.3s ease;\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  border: 1px solid var(--primary-color) !important;\n  background-color: var(--dollars-bg);\n  cursor: pointer;\n}\n\n#dollars-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  background-image:\n    url('https://lsky.ry.mk/i/2026/01/03/background.svg'),\n    linear-gradient(160deg,\n      color-mix(in srgb, var(--primary-color), #a0c4ff 50%) 0%,\n      color-mix(in srgb, var(--primary-color), #ffffff 50%) 50%,\n      color-mix(in srgb, var(--primary-color), #ffc6ff 50%) 100%);\n  background-repeat: repeat, no-repeat;\n  background-position: 300px, center;\n  background-size: 300px auto, cover;\n  background-blend-mode: overlay, normal;\n  opacity: 1;\n  transition: opacity 0.3s ease, background-position 0.1s ease-out;\n}\n\nhtml[data-theme='dark'] #dollars-card {\n  border: 1px solid var(--primary-color);\n  background: initial;\n}\n\nhtml[data-theme='dark'] #dollars-card::before {\n  background: linear-gradient(160deg,\n      var(--primary-color) 0%,\n      color-mix(in srgb, var(--primary-color), transparent 40%) 100%);\n  -webkit-mask-image: url('https://lsky.ry.mk/i/2026/01/03/background.svg');\n  mask-image: url('https://lsky.ry.mk/i/2026/01/03/background.svg');\n  mask-repeat: repeat;\n  mask-size: 300px;\n  mask-position: 300px;\n}\n\n#dollars-card:hover {\n  transform: scale(1.02);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n\n\n/* =========================================\n   Dock Chat Button - Flashing Animation\n   ========================================= */\n#dock-chat-link {\n  position: relative;\n}\n\n#dock-chat-link.flashing {\n  animation: dock-flash 1s ease-in-out infinite;\n}\n\n@keyframes dock-flash {\n\n  0%,\n  100% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.3;\n  }\n}\n\n/* Dock notification badge */\n.dock-notif-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: 8px;\n  background-color: #f96d8e;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 16px;\n  text-align: center;\n  display: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n/* Image Viewer Override */\n.PhotoView-Portal {\n  z-index: var(--dollars-z-index-modal) !important;\n}";

  const photoViewCss = ".PhotoView-Portal{direction:ltr;height:100%;left:0;overflow:hidden;position:fixed;top:0;touch-action:none;width:100%;z-index:2000}@keyframes PhotoView__rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes PhotoView__delayIn{0%,50%{opacity:0}to{opacity:1}}.PhotoView__Spinner{animation:PhotoView__delayIn .4s linear both}.PhotoView__Spinner svg{animation:PhotoView__rotate .6s linear infinite}.PhotoView__Photo{cursor:grab;max-width:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.PhotoView__Photo:active{cursor:grabbing}.PhotoView__icon{display:inline-block;left:0;position:absolute;top:0;transform:translate(-50%,-50%)}.PhotoView__PhotoBox,.PhotoView__PhotoWrap{bottom:0;direction:ltr;left:0;position:absolute;right:0;top:0;touch-action:none;width:100%}.PhotoView__PhotoWrap{overflow:hidden;z-index:10}.PhotoView__PhotoBox{transform-origin:left top}@keyframes PhotoView__fade{0%{opacity:0}to{opacity:1}}.PhotoView-Slider__clean .PhotoView-Slider__ArrowLeft,.PhotoView-Slider__clean .PhotoView-Slider__ArrowRight,.PhotoView-Slider__clean .PhotoView-Slider__BannerWrap,.PhotoView-Slider__clean .PhotoView-Slider__Overlay,.PhotoView-Slider__willClose .PhotoView-Slider__BannerWrap:hover{opacity:0}.PhotoView-Slider__Backdrop{background:#000;height:100%;left:0;position:absolute;top:0;transition-property:background-color;width:100%;z-index:-1}.PhotoView-Slider__fadeIn{animation:PhotoView__fade linear both;opacity:0}.PhotoView-Slider__fadeOut{animation:PhotoView__fade linear reverse both;opacity:0}.PhotoView-Slider__BannerWrap{align-items:center;background-color:rgba(0,0,0,.5);color:#fff;display:flex;height:44px;justify-content:space-between;left:0;position:absolute;top:0;transition:opacity .2s ease-out;width:100%;z-index:20}.PhotoView-Slider__BannerWrap:hover{opacity:1}.PhotoView-Slider__Counter{font-size:14px;opacity:.75;padding:0 10px}.PhotoView-Slider__BannerRight{align-items:center;display:flex;height:100%}.PhotoView-Slider__toolbarIcon{fill:#fff;box-sizing:border-box;cursor:pointer;opacity:.75;padding:10px;transition:opacity .2s linear}.PhotoView-Slider__toolbarIcon:hover{opacity:1}.PhotoView-Slider__ArrowLeft,.PhotoView-Slider__ArrowRight{align-items:center;bottom:0;cursor:pointer;display:flex;height:100px;justify-content:center;margin:auto;opacity:.75;position:absolute;top:0;transition:opacity .2s linear;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:70px;z-index:20}.PhotoView-Slider__ArrowLeft:hover,.PhotoView-Slider__ArrowRight:hover{opacity:1}.PhotoView-Slider__ArrowLeft svg,.PhotoView-Slider__ArrowRight svg{fill:#fff;background:rgba(0,0,0,.3);box-sizing:content-box;height:24px;padding:10px;width:24px}.PhotoView-Slider__ArrowLeft{left:0}.PhotoView-Slider__ArrowRight{right:0}";

  function injectStyles() {
    if (document.querySelector("[data-dollars-styles]")) return;
    const style = document.createElement("style");
    style.setAttribute("data-dollars-styles", "");
    style.textContent = cssContent + "\n" + photoViewCss;
    document.head.appendChild(style);
  }
  function injectSVGFilters() {
    if (document.querySelector("[data-dollars-svg-filters]")) return;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("data-dollars-svg-filters", "");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.cssText = "position:absolute;left:-9999px;top:-9999px;pointer-events:none;z-index:-1;";
    svg.innerHTML = `
        <defs>
            <symbol id="message-tail-filled" viewBox="0 0 11 20">
                <g transform="translate(9 -14)" fill="currentColor" fill-rule="evenodd">
                    <path d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z" transform="matrix(1 0 0 -1 0 49)" id="corner-fill"/>
                </g>
            </symbol>
        </defs>
    `;
    document.body.appendChild(svg);
  }
  function injectHomeCard() {
    if (window.location.pathname !== "/") return;
    const sideInner = document.querySelector("#columnHomeB .sideInner");
    if (!sideInner) return;
    if (document.getElementById("dollars-card")) return;
    const cardContainer = document.createElement("div");
    cardContainer.className = "featuredItems";
    cardContainer.innerHTML = `
        <div id="dollars-card" class="appItem">
            <a href="#"><p class="title">全站聊天窗💫</p><p>Re:Dollars</p></a>
        </div>
    `;
    sideInner.parentNode?.insertBefore(cardContainer, sideInner);
    const card = document.getElementById("dollars-card");
    if (card && !settings.value.showCard) {
      card.style.display = "none";
    }
    card?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleChat(!isChatOpen.value);
    });
  }
  function init() {
    injectStyles();
    injectSVGFilters();
    initDollarsAPI();
    const container = document.createElement("div");
    container.id = "dollars-app-mount";
    document.body.appendChild(container);
    G$2(/* @__PURE__ */ u$2(App, {}), container);
    setTimeout(injectHomeCard, 0);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
