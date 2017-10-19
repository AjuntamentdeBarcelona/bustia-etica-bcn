// --------------------- redirector. forçar idioma i redirigir admin cap a principal
var wl = window.location.hash ;
var wl2 = window.location.hostname ; 
//PROD comunicador
if ( (wl2=="bustiaetica.barcelona.cat" )  && (wl=="#/admin" || wl=="#/login" || wl =="#/" ) ) {
    window.location.href = "https://bustiaetica.barcelona.cat/#/?lang=ca";
	window.location.reload();
}
//PRE comunicador
if ( (wl2=="pre-bustiaetica.imi.bcn" )  && (wl=="#/admin" || wl=="#/login" || wl =="#/" ) ) {
    window.location.href = "https://pre-bustiaetica.imi.bcn/#/?lang=ca";
	window.location.reload();
}
//PROD gestor
if ( (wl2=="gestor-bustiaetica.imi.bcn" )  && (wl=="#/" || wl =="#/?lang=ca" || wl =="#/?lang=es"  ) ) {
    window.location.href = "https://gestor-bustiaetica.imi.bcn/#/login";
	window.location.reload();
}
//PRE gestor
if ( (wl2=="pre-gestor-bustiaetica.imi.bcn" )  && (wl=="#/" || wl =="#/?lang=ca" || wl =="#/?lang=es"  ) ) {
    window.location.href = "https://pre-gestor-bustiaetica.imi.bcn/#/login";
	window.location.reload();
}
//---------------------- end-redirector



// ---------------------- brand_injection
var bcnBrandInjection = bcnBrandInjection || {};
(function (bcnBrandInjection, context) {
  /*!
   * @preserve Qwery - A selector engine
   * https://github.com/ded/qwery
   * (c) Dustin Diaz 2014 | License MIT
   */
  (function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(n):t[e]=n()})("qwery",this,function(){function o(e){return[].slice.call(e,0)}function u(e){var t;return e&&typeof e=="object"&&(t=e.nodeType)&&(t==1||t==9)}function a(e){return typeof e=="object"&&isFinite(e.length)}function f(e){for(var t=[],n=0,r=e.length;n<r;++n)a(e[n])?t=t.concat(e[n]):t[t.length]=e[n];return t}function l(e){var t=[],n,r;e:for(n=0;n<e.length;n++){for(r=0;r<t.length;r++)if(t[r]==e[n])continue e;t[t.length]=e[n]}return t}function c(e){return e?typeof e=="string"?h(e)[0]:!e[i]&&a(e)?e[0]:e:t}function h(r,i){var l,h=c(i);return!h||!r?[]:r===n||u(r)?!i||r!==n&&u(h)&&s(r,h)?[r]:[]:r&&a(r)?f(r):t.getElementsByClassName&&r=="string"&&(l=r.match(e))?o(h.getElementsByClassName(l[1])):r&&(r.document||r.nodeType&&r.nodeType==9)?i?[]:[r]:o(h.querySelectorAll(r))}var e=/^\.([\w\-]+)$/,t=document,n=window,r=t.documentElement,i="nodeType",s="compareDocumentPosition"in r?function(e,t){return(t.compareDocumentPosition(e)&16)==16}:function(e,n){return n=n==t||n==window?r:n,n!==e&&n.contains(e)};return h.uniq=l,h},this)
  // Masks into bcnBrandInjection library
  bcnBrandInjection.query = context.qwery;
  // Obfuscates direct access to the original library
  //delete context.qwery;
  context.qwery = null;
  /*!
   * Bonzo: DOM Utility (c) Dustin Diaz 2012
   * https://github.com/ded/bonzo
   * License MIT
   */
  (function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(n):t[e]=n()})("bonzo",this,function(){function L(e,n){var r=null,i=t.defaultView.getComputedStyle(e,"");return i&&(r=i[n]),e.style[n]||r}function A(e){return e&&e.nodeName&&(e.nodeType==1||e.nodeType==11)}function O(e,t,n){var r,i,s;if(typeof e=="string")return Q.create(e);A(e)&&(e=[e]);if(n){s=[];for(r=0,i=e.length;r<i;r++)s[r]=V(t,e[r]);return s}return e}function M(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function _(e,t,n,r){var i,s=0,o=e.length;for(;s<o;s++)i=r?e.length-s-1:s,t.call(n||e[i],e[i],i,e);return e}function D(e,t,n){for(var r=0,i=e.length;r<i;r++)A(e[r])&&(D(e[r].childNodes,t,n),t.call(n||e[r],e[r],r,e));return e}function P(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}function H(e){return e?e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():e}function B(e){e[S]("data-node-uid")||e[E]("data-node-uid",++g);var t=e[S]("data-node-uid");return m[t]||(m[t]={})}function j(e){var t=e[S]("data-node-uid");t&&delete m[t]}function F(e){var t;try{return e===null||e===undefined?undefined:e==="true"?!0:e==="false"?!1:e==="null"?null:(t=parseFloat(e))==e?t:e}catch(n){}return undefined}function I(e,t,n){for(var r=0,i=e.length;r<i;++r)if(t.call(n||null,e[r],r,e))return!0;return!1}function q(e){return e=="transform"&&(e=x.transform)||/^transform-?[Oo]rigin$/.test(e)&&(e=x.transform+"Origin"),e?P(e):null}function R(e,t,n,r){var i=0,s=t||this,o=[],u=k&&typeof e=="string"&&e.charAt(0)!="<"?k(e):e;return _(O(u),function(e,t){_(s,function(r){n(e,o[i++]=t>0?V(s,r):r)},null,r)},this,r),s.length=i,_(o,function(e){s[--i]=e},null,!r),s}function U(e,t,n){var r=Q(e),i=r.css("position"),s=r.offset(),o="relative",u=i==o,a=[parseInt(r.css("left"),10),parseInt(r.css("top"),10)];i=="static"&&(r.css("position",o),i=o),isNaN(a[0])&&(a[0]=u?0:e.offsetLeft),isNaN(a[1])&&(a[1]=u?0:e.offsetTop),t!=null&&(e.style.left=t-s.left+a[0]+w),n!=null&&(e.style.top=n-s.top+a[1]+w)}function z(e,t){return typeof t=="function"?t.call(e,e):t}function W(t,n,r){var i=this[0];return i?t==null&&n==null?($(i)?J():{x:i.scrollLeft,y:i.scrollTop})[r]:($(i)?e.scrollTo(t,n):(t!=null&&(i.scrollLeft=t),n!=null&&(i.scrollTop=n)),this):this}function X(e){this.length=0;if(e){e=typeof e!="string"&&!e.nodeType&&typeof e.length!="undefined"?e:[e],this.length=e.length;for(var t=0;t<e.length;t++)this[t]=e[t]}}function V(e,t){var n=t.cloneNode(!0),r,i,s;if(e.$&&typeof e.cloneEvents=="function"){e.$(n).cloneEvents(t),r=e.$(n).find("*"),i=e.$(t).find("*");for(s=0;s<i.length;s++)e.$(r[s]).cloneEvents(i[s])}return n}function $(t){return t===e||/^(?:body|html)$/i.test(t.tagName)}function J(){return{x:e.pageXOffset||n.scrollLeft,y:e.pageYOffset||n.scrollTop}}function K(e){var t=document.createElement("script"),n=e.match(o);return t.src=n[1],t}function Q(e){return new X(e)}var e=window,t=e.document,n=t.documentElement,r="parentNode",i=/^(checked|value|selected|disabled)$/i,s=/^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i,o=/\s*<script +src=['"]([^'"]+)['"]>/,u=["<table>","</table>",1],a=["<table><tbody><tr>","</tr></tbody></table>",3],f=["<select>","</select>",1],l=["_","",0,1],c={thead:u,tbody:u,tfoot:u,colgroup:u,caption:u,tr:["<table><tbody>","</tbody></table>",2],th:a,td:a,col:["<table><colgroup>","</colgroup></table>",2],fieldset:["<form>","</form>",1],legend:["<form><fieldset>","</fieldset></form>",2],option:f,optgroup:f,script:l,style:l,link:l,param:l,base:l},h=/^(checked|selected|disabled)$/,p,d,v,m={},g=0,y=/^-?[\d\.]+$/,b=/^data-(.+)$/,w="px",E="setAttribute",S="getAttribute",x=function(){var e=t.createElement("p");return{transform:function(){var t=["transform","webkitTransform","MozTransform","OTransform","msTransform"],n;for(n=0;n<t.length;n++)if(t[n]in e.style)return t[n]}(),classList:"classList"in e}}(),T=/\s+/,N=String.prototype.toString,C={lineHeight:1,zoom:1,zIndex:1,opacity:1,boxFlex:1,WebkitBoxFlex:1,MozBoxFlex:1},k=t.querySelectorAll&&function(e){return t.querySelectorAll(e)};return x.classList?(p=function(e,t){return e.classList.contains(t)},d=function(e,t){e.classList.add(t)},v=function(e,t){e.classList.remove(t)}):(p=function(e,t){return M(t).test(e.className)},d=function(e,t){e.className=(e.className+" "+t).trim()},v=function(e,t){e.className=e.className.replace(M(t)," ").trim()}),X.prototype={get:function(e){return this[e]||null},each:function(e,t){return _(this,e,t)},deepEach:function(e,t){return D(this,e,t)},map:function(e,t){var n=[],r,i;for(i=0;i<this.length;i++)r=e.call(this,this[i],i),t?t(r)&&n.push(r):n.push(r);return n},html:function(e,t){var n=t?"textContent":"innerHTML",r=this,i=function(t,n){_(O(e,r,n),function(e){t.appendChild(e)})},o=function(r,o){try{if(t||typeof e=="string"&&!s.test(r.tagName))return r[n]=e}catch(u){}i(r,o)};return typeof e!="undefined"?this.empty().each(o):this[0]?this[0][n]:""},text:function(e){return this.html(e,!0)},append:function(e){var t=this;return this.each(function(n,r){_(O(e,t,r),function(e){n.appendChild(e)})})},prepend:function(e){var t=this;return this.each(function(n,r){var i=n.firstChild;_(O(e,t,r),function(e){n.insertBefore(e,i)})})},appendTo:function(e,t){return R.call(this,e,t,function(e,t){e.appendChild(t)})},prependTo:function(e,t){return R.call(this,e,t,function(e,t){e.insertBefore(t,e.firstChild)},1)},before:function(e){var t=this;return this.each(function(n,i){_(O(e,t,i),function(e){n[r].insertBefore(e,n)})})},after:function(e){var t=this;return this.each(function(n,i){_(O(e,t,i),function(e){n[r].insertBefore(e,n.nextSibling)},null,1)})},insertBefore:function(e,t){return R.call(this,e,t,function(e,t){e[r].insertBefore(t,e)})},insertAfter:function(e,t){return R.call(this,e,t,function(e,t){var n=e.nextSibling;n?e[r].insertBefore(t,n):e[r].appendChild(t)},1)},replaceWith:function(e){var t=this;return this.each(function(n,i){_(O(e,t,i),function(e){n[r]&&n[r].replaceChild(e,n)})})},clone:function(e){var t=[],n,r;for(r=0,n=this.length;r<n;r++)t[r]=V(e||this,this[r]);return Q(t)},addClass:function(e){return e=N.call(e).split(T),this.each(function(t){_(e,function(e){e&&!p(t,z(t,e))&&d(t,z(t,e))})})},removeClass:function(e){return e=N.call(e).split(T),this.each(function(t){_(e,function(e){e&&p(t,z(t,e))&&v(t,z(t,e))})})},hasClass:function(e){return e=N.call(e).split(T),I(this,function(t){return I(e,function(e){return e&&p(t,e)})})},toggleClass:function(e,t){return e=N.call(e).split(T),this.each(function(n){_(e,function(e){e&&(typeof t!="undefined"?t?!p(n,e)&&d(n,e):v(n,e):p(n,e)?v(n,e):d(n,e))})})},show:function(e){return e=typeof e=="string"?e:"",this.each(function(t){t.style.display=e})},hide:function(){return this.each(function(e){e.style.display="none"})},toggle:function(e,t){return t=typeof t=="string"?t:"",typeof e!="function"&&(e=null),this.each(function(n){n.style.display=n.offsetWidth||n.offsetHeight?"none":t,e&&e.call(n)})},first:function(){return Q(this.length?this[0]:[])},last:function(){return Q(this.length?this[this.length-1]:[])},next:function(){return this.related("nextSibling")},previous:function(){return this.related("previousSibling")},parent:function(){return this.related(r)},related:function(e){return Q(this.map(function(t){t=t[e];while(t&&t.nodeType!==1)t=t[e];return t||0},function(e){return e}))},focus:function(){return this.length&&this[0].focus(),this},blur:function(){return this.length&&this[0].blur(),this},css:function(n,r){function o(e,t,n){for(var r in s)if(s.hasOwnProperty(r)){n=s[r],(t=q(r))&&y.test(n)&&!(t in C)&&(n+=w);try{e.style[t]=z(e,n)}catch(i){}}}var i,s=n;return r===undefined&&typeof n=="string"?(r=this[0],r?r===t||r===e?(i=r===t?Q.doc():Q.viewport(),n=="width"?i.width:n=="height"?i.height:""):(n=q(n))?L(r,n):null:null):(typeof n=="string"&&(s={},s[n]=r),this.each(o))},offset:function(e,n){if(!e||typeof e!="object"||typeof e.top!="number"&&typeof e.left!="number"){if(typeof e=="number"||typeof n=="number")return this.each(function(t){U(t,e,n)});if(!this[0])return{top:0,left:0,height:0,width:0};var r=this[0],i=r.ownerDocument.documentElement,s=r.getBoundingClientRect(),o=J(),u=r.offsetWidth,a=r.offsetHeight,f=s.top+o.y-Math.max(0,i&&i.clientTop,t.body.clientTop),l=s.left+o.x-Math.max(0,i&&i.clientLeft,t.body.clientLeft);return{top:f,left:l,height:a,width:u}}return this.each(function(t){U(t,e.left,e.top)})},dim:function(){if(!this.length)return{height:0,width:0};var e=this[0],t=e.nodeType==9&&e.documentElement,n=!t&&!!e.style&&!e.offsetWidth&&!e.offsetHeight?function(t){var n={position:e.style.position||"",visibility:e.style.visibility||"",display:e.style.display||""};return t.first().css({position:"absolute",visibility:"hidden",display:"block"}),n}(this):null,r=t?Math.max(e.body.scrollWidth,e.body.offsetWidth,t.scrollWidth,t.offsetWidth,t.clientWidth):e.offsetWidth,i=t?Math.max(e.body.scrollHeight,e.body.offsetHeight,t.scrollHeight,t.offsetHeight,t.clientHeight):e.offsetHeight;return n&&this.first().css(n),{height:i,width:r}},attr:function(e,t){var n=this[0],r;if(typeof e=="string"||e instanceof String)return typeof t=="undefined"?n?i.test(e)?h.test(e)&&typeof n[e]=="string"?!0:n[e]:n[S](e):null:this.each(function(n){i.test(e)?n[e]=z(n,t):n[E](e,z(n,t))});for(r in e)e.hasOwnProperty(r)&&this.attr(r,e[r]);return this},removeAttr:function(e){return this.each(function(t){h.test(e)?t[e]=!1:t.removeAttribute(e)})},val:function(e){return typeof e=="string"||typeof e=="number"?this.attr("value",e):this.length?this[0].value:null},data:function(e,t){var n=this[0],r,i;return typeof t=="undefined"?n?(r=B(n),typeof e=="undefined"?(_(n.attributes,function(e){(i=(""+e.name).match(b))&&(r[P(i[1])]=F(e.value))}),r):(typeof r[e]=="undefined"&&(r[e]=F(this.attr("data-"+H(e)))),r[e])):null:this.each(function(n){B(n)[e]=t})},remove:function(){return this.deepEach(j),this.detach()},empty:function(){return this.each(function(e){D(e.childNodes,j);while(e.firstChild)e.removeChild(e.firstChild)})},detach:function(){return this.each(function(e){e[r]&&e[r].removeChild(e)})},scrollTop:function(e){return W.call(this,null,e,"y")},scrollLeft:function(e){return W.call(this,e,null,"x")}},Q.setQueryEngine=function(e){k=e,delete Q.setQueryEngine},Q.aug=function(e,t){for(var n in e)e.hasOwnProperty(n)&&((t||X.prototype)[n]=e[n])},Q.create=function(e){return typeof e=="string"&&e!==""?function(){if(o.test(e))return[K(e)];var n=e.match(/^\s*<([^\s>]+)/),i=t.createElement("div"),s=[],u=n?c[n[1].toLowerCase()]:null,a=u?u[2]+1:1,f=u&&u[3],l=r;i.innerHTML=u?u[0]+e+u[1]:e;while(a--)i=i.firstChild;f&&i&&i.nodeType!==1&&(i=i.nextSibling);do(!n||i.nodeType==1)&&s.push(i);while(i=i.nextSibling);return _(s,function(e){e[l]&&e[l].removeChild(e)}),s}():A(e)?[e.cloneNode(!0)]:[]},Q.doc=function(){var e=Q.viewport();return{width:Math.max(t.body.scrollWidth,n.scrollWidth,e.width),height:Math.max(t.body.scrollHeight,n.scrollHeight,e.height)}},Q.firstChild=function(e){for(var t=e.childNodes,n=0,r=t&&t.length||0,i;n<r;n++)t[n].nodeType===1&&(i=t[r=n]);return i},Q.viewport=function(){return{width:e.innerWidth,height:e.innerHeight}},Q.isAncestor="compareDocumentPosition"in n?function(e,t){return(e.compareDocumentPosition(t)&16)==16}:function(e,t){return e!==t&&e.contains(t)},Q})
  // Masks into bcnBrandInjection library
  bcnBrandInjection.bonzo = context.bonzo;
  bcnBrandInjection.$ = function (selector) {
    return bcnBrandInjection.bonzo(bcnBrandInjection.query(selector));
  }
  bcnBrandInjection.bonzo.setQueryEngine(bcnBrandInjection.query);
  // Obfuscates direct access to the original library
  //delete context.bonzo;
  context.bonzo = null;
  /*!
   * domready (c) Dustin Diaz 2014 - License MIT
   */
  !function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd=="object"?define(t):this[e]=t()}("domready",function(){var e=[],t,n=document,r=n.documentElement.doScroll,i="DOMContentLoaded",s=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return s||n.addEventListener(i,t=function(){n.removeEventListener(i,t),s=1;while(t=e.shift())t()}),function(t){s?setTimeout(t,0):e.push(t)}})
  // Masks into bcnBrandInjection library
  bcnBrandInjection.domready = context.domready;
  // Obfuscates direct access to the original library
  context.domready = null;
  /**
   <lang>
   dct:description "Get the current lang page" ;
   */
  bcnBrandInjection.lang = context.document.getElementsByTagName('html')[0].getAttribute('lang') || document.getElementsByTagName('html')[0].getAttribute('xml:lang') || 'ca';
  /**
  <merge>
    dct:description "Receive two Hash and return the union of the second hover the first" ;
  */
  bcnBrandInjection.merge = function (original, other) {
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i in other) {
      if (hasOwn.call(other, i)) {
        original[i] = other[i];
      }
    }
    return original;
  }
  /**
  <i18n>
    dct:description "Manage literals" ;
  */
  bcnBrandInjection.i18n = (function () {
    var repository = {};
        load = function (collection) {
          var hasOwn = Object.prototype.hasOwnProperty;
          for (var i in collection) {
            if (hasOwn.call(collection, i)) {
              if (i in repository) {
                repository[i] = bcnBrandInjection.merge(repository[i], collection[i]);
              } else {
                repository[i] = collection[i];
              }
            }
          }
          return bcnBrandInjection.i18n;
        },
        translate = function (text, lang) {
          var lang = lang || bcnBrandInjection.lang,
              literal = (repository[lang][text] || text);

          return literal;
        };
    return {
      load: load,
      t: translate
    };
  }());
  bcnBrandInjection.appendTemplate = function() {
    var html = bcnBrandInjection.template();
    bcnBrandInjection.domready(function () {
      body = bcnBrandInjection.$('body');
      body.prepend(html);
      setTimeout(bcnBrandInjection.setEvents(), 2);
    });
  };
  bcnBrandInjection.setEvents = function() {
    document.getElementById("lang_change").onclick = function() {bcnBrandInjection.location()};
    document.getElementById("lang_change_mobile").onclick = function() {bcnBrandInjection.location()};
  };
  bcnBrandInjection.location = function() {
    window.location.href = bcnBrandInjection.$(bcnBrandInjection.$('#brand.v2015 .center a')[0]).attr('href');
	window.location.reload();
  };
  bcnBrandInjection.template = function() {
    var domain = location.protocol + '//' + location.hostname + '/#/?lang=';
    var literals = {
        ca: {
          "lang_link" : domain + 'es',
          "lang_name" : 'Castellano',
          "shield_alt": "Ajuntament de Barcelona"
        },
        es: {
          "lang_link" : domain + 'ca',
          "lang_name" : 'Catal&agrave;',
          "shield_alt": "Ayuntamiento de Barcelona"
        },
        en: {
          "lang_link" : domain + 'es',
          "lang_name" : 'Castellano',
          "shield_alt": "Barcelona city council"
        }
      },
      template_html = '',
      img_shield = 'data:image/png;base64,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';
    // load literals.
    bcnBrandInjection.i18n.load(literals);
    template_html = '<div id="brand" alias="bustiaetica" brand="bustiaetica_2016-05-25T07:22:00Z" class="v2015 v2015-ajuntament-f restyle lang_' + bcnBrandInjection.lang + '">'
      + '<header class="navbar">'
      + '<div class="wrapper legacy" style="">'
      + '<div class="content">'
      + '<div class="logo">'
      + '<h1>www.barcelona.cat</h1>'
      + '</div>'
        + '<img class="logo_shield js_shield" src="' + img_shield + '" alt="' + bcnBrandInjection.i18n.t('shield_alt') + '">'
      + '<div class="center"><div>'
      + '<a href="' + encodeURI(bcnBrandInjection.i18n.t("lang_link")) + '" id="lang_change" class="js_lang_archor lang none" title="Canviar idioma">'
      + '<span class="lang_text">' + bcnBrandInjection.i18n.t("lang_name") + '</span>'
      + '<span class="arrow"></span>'
      + '</a>'
      + '<a href="' + encodeURI(bcnBrandInjection.i18n.t("lang_link")) + '" id="lang_change_mobile" class="js_lang_archor_mobile lang lang_mobile" title="Canviar idioma">'
      + '<span class="lang_text">' + bcnBrandInjection.i18n.t("lang_name") + '</span>'
      + '</a>'
      + '</div></div>'
      + '<h2 class="right">ajuntament.barcelona.cat</h2>'
      + '</div>'
      + '</div>'
      + '</header>'
      + '</div>';
    return template_html;
  };
}(bcnBrandInjection, this));
// mostra la barra
bcnBrandInjection.appendTemplate();	
//------------------------- end-brand_injection  




/* ----------- IMI_GLOBALEAKS_CUSTOMIZATION ----------- */
// insertion-query v1.0.3 (2016-01-20) 
// license:MIT 
// Zbyszek Tenerowicz <naugtur@gmail.com> (http://naugtur.pl/) 
var insertionQ=function(){"use strict";function a(a,b){var d,e="insQ_"+g++,f=function(a){(a.animationName===e||a[i]===e)&&(c(a.target)||b(a.target))};d=document.createElement("style"),d.innerHTML="@"+j+"keyframes "+e+" {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }\n"+a+" { animation-duration: 0.001s; animation-name: "+e+"; "+j+"animation-duration: 0.001s; "+j+"animation-name: "+e+";  } ",document.head.appendChild(d);var h=setTimeout(function(){document.addEventListener("animationstart",f,!1),document.addEventListener("MSAnimationStart",f,!1),document.addEventListener("webkitAnimationStart",f,!1)},n.timeout);return{destroy:function(){clearTimeout(h),d&&(document.head.removeChild(d),d=null),document.removeEventListener("animationstart",f),document.removeEventListener("MSAnimationStart",f),document.removeEventListener("webkitAnimationStart",f)}}}function b(a){a.QinsQ=!0}function c(a){return n.strictlyNew&&a.QinsQ===!0}function d(a){return c(a.parentNode)?a:d(a.parentNode)}function e(a){for(b(a),a=a.firstChild;a;a=a.nextSibling)void 0!==a&&1===a.nodeType&&e(a)}function f(f,g){var h=[],i=function(){var a;return function(){clearTimeout(a),a=setTimeout(function(){h.forEach(e),g(h),h=[]},10)}}();return a(f,function(a){if(!c(a)){b(a);var e=d(a);h.indexOf(e)<0&&h.push(e),i()}})}var g=100,h=!1,i="animationName",j="",k="Webkit Moz O ms Khtml".split(" "),l="",m=document.createElement("div"),n={strictlyNew:!0,timeout:20};if(m.style.animationName&&(h=!0),h===!1)for(var o=0;o<k.length;o++)if(void 0!==m.style[k[o]+"AnimationName"]){l=k[o],i=l+"AnimationName",j="-"+l.toLowerCase()+"-",h=!0;break}var p=function(b){return h&&b.match(/[^{}]/)?(n.strictlyNew&&e(document.body),{every:function(c){return a(b,c)},summary:function(a){return f(b,a)}}):!1};return p.config=function(a){for(var b in a)a.hasOwnProperty(b)&&(n[b]=a[b])},p}();"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=insertionQ);

insertionQ.config({
  timeout:30,
});

//Inicio D
var LinksTOR =[
'Si no vols deixar el rastre de l&apos;adre&ccedil;a IP i vols navegar de manera an&ograve;nima, utilitza el navegador <a rel="noreferrer noopener" href="https://ajuntament.barcelona.cat/bustiaetica/ca/tipus-de-comunicacions" target="_blank">TOR</a>',

'Si no deseas dejar el rastro de la direcci&oacute;n IP y quieres navegar de forma an&oacute;nima, utiliza el navegador <a rel="noreferrer noopener" href="https://ajuntament.barcelona.cat/bustiaetica/es/tipos-de-comunicaciones" target="_blank">TOR</a>'
];

var KeyCodeThanks = [
'<p id="KeyCodeThanks2" data-translate="">La informaci&oacute; s&apos;ha rebut correctament. <br>'+
'Conserveu el codi per fer el seguiment de la comunicaci&oacute;.</p>',

'<p id="KeyCodeThanks2" data-translate="">La informaci&oacute;n se ha recibido correctamente. <br>'+
'Conserva el c&oacute;digo para realizar el seguimiento de la comunicaci&oacute;n.</p>'
];

var TipPageFilesInfoBox =[
'Documentaci&oacute; aportada',

'Documentaci&oacute;n aportada'
];

var TipCommunicationComments =[
'Comunicaci&oacute; amb l&apos;agent',

'Comunicaci&oacute;n con el agente'
];


var footer = [
'<span class="text-footer-3"><a target="_blank" href="https://ajuntament.barcelona.cat/bustiaetica/ca/normes-reguladores" rel="noreferrer noopener">Normes reguladores</a></span>'+
'<div data-ng-if="node.footer !== \'\'">'+
'<div class="text-footer-complet">'+
'<span class="text-footer-1">'+
'Oficina per a la Transpar&egrave;ncia i les Bones pr&agrave;ctiques'+
'</span>'+
'<span class="text-footer-2">'+
' | Ajuntament de Barcelona, amb la col&middot;laboraci&oacute; d&apos;<a target="_blank" href="https://xnet-x.net/ca/" rel="noreferrer noopener">Xnet</a></span>'+
'</div>'+
'</div>'+
'<div id="AttributionClause" class="vcenter">'+
'<span>Powered by </span><a target="_blank" href="https://www.globaleaks.org/" rel="noreferrer noopener">GlobaLeaks</a>'+
'</div>',
'<span class="text-footer-3"><a target="_blank" href="https://ajuntament.barcelona.cat/bustiaetica/es/normas-reguladoras" rel="noreferrer noopener">Normas reguladoras</a></span>'+
'<div data-ng-if="node.footer !== \'\'">'+
'<div class="text-footer-complet">'+
'<span class="text-footer-1">'+
'Oficina para la Transparencia y las Buenas Pr&aacute;cticas'+
'</span>'+
'<span class="text-footer-2">'+
' | Ajuntament de Barcelona, con la colaboraci&oacute;n de <a target="_blank" href="https://xnet-x.net/" rel="noreferrer noopener">Xnet</a></span>'+
'</div>'+
'</div>'+
'<div id="AttributionClause" class="vcenter">'+
'<span>Powered by </span><a target="_blank" href="https://www.globaleaks.org/" rel="noreferrer noopener">GlobaLeaks</a>'+
'</div>'
];


var code_box = ['<div>'+
'<p>Cal conservar aquest codi de setze d&iacute;gits per</p>'+
'<ul>'+
'<li>accedir a la comunicaci&oacute;.</li>'+
'<li>comunicar-se amb l\'&ograve;rgan gestor de la b&uacute;stia i consultar els missatges rebuts.</li>'+
'<li>afegir fitxers o informaci&oacute; addicional.</li>'+
'<li>con&egrave;ixer l\'estat de tramitaci&oacute; de la comunicaci&oacute;.</li>'+
'</ul>'+
'<p>L\'&ograve;rgan gestor de la b&uacute;stia utilitzar&agrave;, de manera priorit&agrave;ria, aquest canal segur, i garantir&agrave;'+
' l\'anonimat i la confidencialitat de les comunicacions.</p>'+

'</div>',

'<div>'+
'<p>Hay que conservar este c&oacute;digo de diecis&eacute;is d&iacute;gitos para: </p>'+
'<ul>'+
'<li>Acceder a la comunicaci&oacute;n.</li>'+
'<li>Comunicarse con el &oacute;rgano gestor del buz&oacute;n y consultar los mensajes recibidos.</li>'+
'<li>A&ntilde;adir ficheros o informaci&oacute;n adicional.</li>'+
'<li>Conocer el estado de tramitaci&oacute;n de la comunicaci&oacute;n.</li>'+
'</ul>'+
'<p>El &oacute;rgano gestor del buz&oacute;n utilizar&aacute;, de manera prioritaria, este canal seguro, y garantizar&aacute; el anonimato y la confidencialidad de las comunicaciones.'+
'</p>'+

'</div>'
];

var whistleblower_submit_box_header = [
'<h1>Nova comunicaci&oacute;</h1>'+
'<span>Utilitzant l\'aplicaci&oacute; podreu fer que s\'investigui el cas i s\'actu&iuml; per millorar la integritat del sector p&uacute;blic. <span class="text-home">Assegureu-vos de con&egrave;ixer l\'<a href="https://ajuntament.barcelona.cat/bustiaetica/ca/ambit-dactuacio" target="_blank" rel="noreferrer noopener">&agrave;mbit d\'actuaci&oacute;</a> i les <a href="https://ajuntament.barcelona.cat/bustiaetica/ca/comunicacions-anonimes" target="_blank" rel="noreferrer noopener">eines d\'anonimat</a>.</span></span>',

'<h1>Nueva comunicaci&oacute;n</h1>'+
'<span>Utilizando la aplicaci&oacute;n podr&aacute;s hacer que se investigue el caso y se act&uacute;e para mejorar la integridad del sector p&uacute;blico. <span class="text-home">Aseg&uacute;rate de conocer el <a href="https://ajuntament.barcelona.cat/bustiaetica/es/ambito-de-actuacion" target="_blank" rel="noreferrer noopener">&aacute;mbito de actuaci&oacute;n</a> y las <a href="https://ajuntament.barcelona.cat/bustiaetica/es/comunicaciones-anonimas" target="_blank" rel="noreferrer noopener">herramientas de anonimato</a>.</span></span>'+
'</div>'
];


var whistleblower_login_prompt = [
'<h1>Seguiment de la comunicaci&oacute;</h1>'+
'<span>Si voleu consultar l\'estat de tramitaci&oacute; o aportar m&eacute;s informaci&oacute; sobre una comunicaci&oacute; anterior, introdu&iuml;u el codi num&egrave;ric d\'acc&eacute;s:</span>',

'<h1>Seguimiento de la comunicaci&oacute;n</h1>'+
'<span>Si quieres consultar el estado de tramitaci&oacute;n o aportar m&aacute;s informaci&oacute;n sobre una comunicaci&oacute;n anterior, introduce el c&oacute;digo num&eacute;rico de acceso:</span>'
];

var title_box = [
'<div id="PageTitle">B&uacute;stia &Egrave;tica i de Bon Govern</div>'+   //P&agrave;gina de proves: 
'<div id="PageSubtitle"> Oficina per a la Transpar&egrave;ncia i les Bones Pr&agrave;ctiques</div>',

'<div id="PageTitle">Buz&oacute;n &Eacute;tico y de Buen Gobierno</div>'+  //P&aacute;gina de pruebas:
'<div id="PageSubtitle"> Oficina para la Transparencia y las Buenas Pr&aacute;cticas</div>'
];

var buttonAccedirComunicacio = [
'<button id="ReceiptButton" class="btn btn-default pull-right" onClick="loginFromReceiptButton(\'Recorda copiar el codi d&lsquo;acc&eacute;s {0}. En cas contrari no podr&agrave;s tornar a accedir al canal segur de comunicaci&oacute;.\')" data-translate="">Accedeix a la comunicaci&oacute;</button>'
,
'<button id="ReceiptButton" class="btn btn-default pull-right" onClick="loginFromReceiptButton(\'Recuerda copiar el c&oacute;digo de acceso {0}. En caso contrario no podr&aacute;s volver a acceder al canal seguro de comunicaci&oacute;n.\')" data-translate="">Acceder a la comunicaci&oacute;n</button>'
];

// Added for v2.65.4 to include wbfile translation. Fixed in v2.64.5
var wbfile_temp_trans = [
'Aquests arxius s\'han adjuntat al seu enviament per el receptor',
'Estos ficheros han sido adjuntados a su entrega por los receptores.'
];

function loginFromReceiptButton(texto) {
	var keyCode = angular.element(document.body).injector().get('Authentication').keycode;
	if (confirm(texto.replace("{0}", "'" + keyCode + "'"))) {
		angular.element(document.body).injector().get('Authentication').login('whistleblower', keyCode);
	}
}

langs = ['ca', 'es'];


function applyHTML(tag_lst, apply, sel) {
  var f = function(e) {
    var lang = document.documentElement.lang;
    var i = langs.indexOf(lang);
    i = i !== -1 ? i : 0;
    if (tag_lst.constructor !== Array) {
      e.innerHTML = tag_lst;
    } else {
      e.innerHTML = tag_lst[i];
    }
  };
  if (apply) {
    var e = document.querySelector(sel);
    f(e);
  }
  return f;
}


function composeInit(selector, tag_lst) {
  var f = applyHTML(tag_lst);
  var e = document.querySelector(selector);
  //console.log(selector);
  if (e) { f(e); }
  insertionQ(selector).every(applyHTML(tag_lst));
}


// Homepage elements  
composeInit('#PrivacyBadgeCustomTextNone', LinksTOR); //DV
composeInit('#TitleBox', title_box);
composeInit('#WhistleblowerLoginPrompt', whistleblower_login_prompt);
composeInit('#WhistleblowerSubmitBoxHeader', whistleblower_submit_box_header);
composeInit('#FooterBox', footer);

// Submission Elements 
insertionQ('#AttachedWBFile div.alert-info span').every(applyHTML(wbfile_temp_trans));

// Receipt Key code Page
insertionQ('#KeyCodeBox > div:nth-child(2)').every(applyHTML(code_box));
insertionQ('#ReceiptOutputBox > div:nth-child(1) > p:nth-child(2)').every(applyHTML(KeyCodeThanks)); //DV
insertionQ('#KeyCodeBox > div:nth-child(3)').every(applyHTML(buttonAccedirComunicacio)); //DV
/* ----------- end-IMI_GLOBALEAKS_CUSTOMIZATION ----------- */
