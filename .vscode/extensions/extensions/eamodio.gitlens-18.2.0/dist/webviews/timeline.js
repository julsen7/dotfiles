let e,t,i,r,o,s,a,h,c;var p,u,g,m,b,f,v={518(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,r="",o=0,s=-1,a=0,h=0;h<=e.length;++h){if(h<e.length)i=e.charCodeAt(h);else if(47===i)break;else i=47;if(47===i){if(s===h-1||1===a);else if(s!==h-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",o=0):o=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),s=h,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,s=h,a=0;continue}}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(s+1,h):r=e.slice(s+1,h),o=h-s-1;s=h,a=0}else 46===i&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r,o="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?r=arguments[a]:(void 0===e&&(e=process.cwd()),r=e),t(r),0!==r.length&&(o=r+"/"+o,s=47===r.charCodeAt(0));if(o=i(o,!s),s)if(o.length>0)return"/"+o;else return"/";return o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return(0!==(e=i(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var o=arguments[i];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=r.resolve(e))===(i=r.resolve(i)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var s=e.length,a=s-o,h=1;h<i.length&&47===i.charCodeAt(h);++h);for(var c=i.length-h,p=a<c?a:c,u=-1,g=0;g<=p;++g){if(g===p){if(c>p){if(47===i.charCodeAt(h+g))return i.slice(h+g+1);else if(0===g)return i.slice(h+g)}else a>p&&(47===e.charCodeAt(o+g)?u=g:0===g&&(u=0));break}var m=e.charCodeAt(o+g);if(m!==i.charCodeAt(h+g))break;47===m&&(u=g)}var b="";for(g=o+u+1;g<=s;++g)(g===s||47===e.charCodeAt(g))&&(0===b.length?b+="..":b+="/..");return b.length>0?b+i.slice(h+u):(h+=u,47===i.charCodeAt(h)&&++h,i.slice(h))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),r=47===i,o=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(i=e.charCodeAt(a))){if(!s){o=a;break}}else s=!1;return -1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var r,o=0,s=-1,a=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var h=i.length-1,c=-1;for(r=e.length-1;r>=0;--r){var p=e.charCodeAt(r);if(47===p){if(!a){o=r+1;break}}else -1===c&&(a=!1,c=r+1),h>=0&&(p===i.charCodeAt(h)?-1==--h&&(s=r):(h=-1,s=c))}return o===s?s=c:-1===s&&(s=e.length),e.slice(o,s)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else -1===s&&(a=!1,s=r+1);return -1===s?"":e.slice(o,s)},extname:function(e){t(e);for(var i=-1,r=0,o=-1,s=!0,a=0,h=e.length-1;h>=0;--h){var c=e.charCodeAt(h);if(47===c){if(!s){r=h+1;break}continue}-1===o&&(s=!1,o=h+1),46===c?-1===i?i=h:1!==a&&(a=1):-1!==i&&(a=-1)}return -1===i||-1===o||0===a||1===a&&i===o-1&&i===r+1?"":e.slice(i,o)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var o=e.charCodeAt(0),s=47===o;s?(r.root="/",i=1):i=0;for(var a=-1,h=0,c=-1,p=!0,u=e.length-1,g=0;u>=i;--u){if(47===(o=e.charCodeAt(u))){if(!p){h=u+1;break}continue}-1===c&&(p=!1,c=u+1),46===o?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1)}return -1===a||-1===c||0===g||1===g&&a===c-1&&a===h+1?-1!==c&&(0===h&&s?r.base=r.name=e.slice(1,c):r.base=r.name=e.slice(h,c)):(0===h&&s?(r.name=e.slice(1,a),r.base=e.slice(1,c)):(r.name=e.slice(h,a),r.base=e.slice(h,c)),r.ext=e.slice(a,c)),h>0?r.dir=e.slice(0,h-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},_={};function w(e){var t=_[e];if(void 0!==t)return t.exports;var i=_[e]={exports:{}};return v[e](i,i.exports,w),i.exports}w.d=(e,t)=>{for(var i in t)w.o(t,i)&&!w.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Object.defineProperty(w,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let x=globalThis,$=x.ShadowRoot&&(void 0===x.ShadyCSS||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,C=Symbol(),E=new WeakMap;let n=class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==C)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if($&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=E.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&E.set(t,e))}return e}toString(){return this.cssText}};let S=e=>new n("string"==typeof e?e:e+"",void 0,C),A=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]),e,C),T=$?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return S(t)})(e):e,{is:M,defineProperty:P,getOwnPropertyDescriptor:j,getOwnPropertyNames:D,getOwnPropertySymbols:B,getPrototypeOf:O}=Object,N=globalThis,F=N.trustedTypes,W=F?F.emptyScript:"",V=N.reactiveElementPolyfillSupport,q={toAttribute(e,t){switch(t){case Boolean:e=e?W:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},U=(e,t)=>!M(e,t),K={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:U};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&P(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:o}=j(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let s=r?.call(this);o?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??K}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=O(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...D(e),...B(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(T(i));else void 0!==e&&t.push(T(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if($)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),r=x.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){let o=(void 0!==i.converter?.toAttribute?i.converter:q).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:q;this._$Em=r;let s=o.fromAttribute(t,e.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){if(void 0!==e){let s=this.constructor;if(!1===r&&(o=this[e]),!(((i??=s.getPropertyOptions(e)).hasChanged??U)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==o||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,V?.({ReactiveElement:y}),(N.reactiveElementVersions??=[]).push("2.1.2");let Y=globalThis,G=e=>e,X=Y.trustedTypes,J=X?X.createPolicy("lit-html",{createHTML:e=>e}):void 0,Q="$lit$",ee=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+ee,ei=`<${et}>`,er=document,eo=()=>er.createComment(""),es=e=>null===e||"object"!=typeof e&&"function"!=typeof e,en=Array.isArray,ea=e=>en(e)||"function"==typeof e?.[Symbol.iterator],el=`[ 	
\x0c\r]`,eh=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ec=/-->/g,ed=/>/g,ep=RegExp(`>|${el}(?:([^\\s"'>=/]+)(${el}*=${el}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eu=/'/g,eg=/"/g,em=/^(?:script|style|textarea|title)$/i,eb=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ef=eb(1),ev=eb(2),e_=(eb(3),Symbol.for("lit-noChange")),ey=Symbol.for("lit-nothing"),ew=new WeakMap,ex=er.createTreeWalker(er,129);function ek(e,t){if(!en(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==J?J.createHTML(t):t}let e$=(e,t)=>{let i=e.length-1,r=[],o,s=2===t?"<svg>":3===t?"<math>":"",a=eh;for(let t=0;t<i;t++){let i=e[t],h,c,p=-1,u=0;for(;u<i.length&&(a.lastIndex=u,null!==(c=a.exec(i)));)u=a.lastIndex,a===eh?"!--"===c[1]?a=ec:void 0!==c[1]?a=ed:void 0!==c[2]?(em.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=ep):void 0!==c[3]&&(a=ep):a===ep?">"===c[0]?(a=o??eh,p=-1):void 0===c[1]?p=-2:(p=a.lastIndex-c[2].length,h=c[1],a=void 0===c[3]?ep:'"'===c[3]?eg:eu):a===eg||a===eu?a=ep:a===ec||a===ed?a=eh:(a=ep,o=void 0);let g=a===ep&&e[t+1].startsWith("/>")?" ":"";s+=a===eh?i+ei:p>=0?(r.push(h),i.slice(0,p)+Q+i.slice(p)+ee+g):i+ee+(-2===p?t:g)}return[ek(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,s=0,a=e.length-1,h=this.parts,[c,p]=e$(e,t);if(this.el=lit_html_S.createElement(c,i),ex.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ex.nextNode())&&h.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(Q)){let t=p[s++],i=r.getAttribute(e).split(ee),a=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),r.removeAttribute(e)}else e.startsWith(ee)&&(h.push({type:6,index:o}),r.removeAttribute(e));if(em.test(r.tagName)){let e=r.textContent.split(ee),t=e.length-1;if(t>0){r.textContent=X?X.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],eo()),ex.nextNode(),h.push({type:2,index:++o});r.append(e[t],eo())}}}else if(8===r.nodeType)if(r.data===et)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(ee,e+1));)h.push({type:7,index:o}),e+=ee.length-1}o++}}static createElement(e,t){let i=er.createElement("template");return i.innerHTML=e,i}};function eC(e,t,i=e,r){if(t===e_)return t;let o=void 0!==r?i._$Co?.[r]:i._$Cl,s=es(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(e))._$AT(e,i,r),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(t=eC(e,o._$AS(e,t.values),o,r)),t}let R=class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??er).importNode(t,!0);ex.currentNode=r;let o=ex.nextNode(),s=0,a=0,h=i[0];for(;void 0!==h;){if(s===h.index){let t;2===h.type?t=new k(o,o.nextSibling,this,e):1===h.type?t=new h.ctor(o,h.name,h.strings,this,e):6===h.type&&(t=new Z(o,this,e)),this._$AV.push(t),h=i[++a]}s!==h?.index&&(o=ex.nextNode(),s++)}return ex.currentNode=er,r}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=ey,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){es(e=eC(this,e,t))?e===ey||null==e||""===e?(this._$AH!==ey&&this._$AR(),this._$AH=ey):e!==this._$AH&&e!==e_&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ea(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ey&&es(this._$AH)?this._$AA.nextSibling.data=e:this.T(er.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=lit_html_S.createElement(ek(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new R(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ew.get(e.strings);return void 0===t&&ew.set(e.strings,t=new lit_html_S(e)),t}k(e){en(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let o of e)r===t.length?t.push(i=new k(this.O(eo()),this.O(eo()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=G(e).nextSibling;G(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=ey,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ey}_$AI(e,t=this,i,r){let o=this.strings,s=!1;if(void 0===o)(s=!es(e=eC(this,e,t,0))||e!==this._$AH&&e!==e_)&&(this._$AH=e);else{let r,a,h=e;for(e=o[0],r=0;r<o.length-1;r++)(a=eC(this,h[i+r],t,r))===e_&&(a=this._$AH[r]),s||=!es(a)||a!==this._$AH[r],a===ey?e=ey:e!==ey&&(e+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!r&&this.j(e)}j(e){e===ey?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ey?void 0:e}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ey)}};let z=class z extends H{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=eC(this,e,t,0)??ey)===e_)return;let i=this._$AH,r=e===ey&&i!==ey||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==ey&&(i===ey||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){eC(this,e)}};let eE=Y.litHtmlPolyfillSupport;eE?.(lit_html_S,k),(Y.litHtmlVersions??=[]).push("3.3.3");let eS=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let r=i?.renderBefore??t,o=r._$litPart$;if(void 0===o){let e=i?.renderBefore??null;r._$litPart$=o=new k(t.insertBefore(eo(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return e_}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eS.litElementHydrateSupport?.({LitElement:lit_element_i});let eA=eS.litElementPolyfillSupport;eA?.({LitElement:lit_element_i}),(eS.litElementVersions??=[]).push("4.2.2");let eT=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eM={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:U};function eP(e){return(t,i)=>{let r;return"object"==typeof i?((e=eM,t,i)=>{let{kind:r,metadata:o}=i,s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===r){let{name:r}=i;return{set(i){let o=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,o,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=i;return function(i){let o=this[r];t.call(this,i),this.requestUpdate(r,o,e,!0,i)}}throw Error("Unsupported decorator location: "+r)})(e,t,i):(r=t.hasOwnProperty(i),t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0)}}function eR(e){return eP({...e,state:!0,attribute:!1})}let ez=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function ej(e,t){return(i,r,o)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof r?i:o??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return ez(i,r,{get(){let e=t.call(this);return void 0===e&&(null!==(e=s(this))||this.hasUpdated)&&a.call(this,e),e}})}return ez(i,r,{get(){return s(this)}})}}let eD=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,eB=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,eI=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],eO=new Map,eL=new Map;function eN(e,t){let i=new Date(e.getTime());for(let[e,r]of Object.entries(t))if(r)switch(e){case"years":i.setFullYear(i.getFullYear()+r);break;case"months":i.setMonth(i.getMonth()+r);break;case"days":i.setDate(i.getDate()+r);break;case"hours":i.setHours(i.getHours()+r);break;case"minutes":i.setMinutes(i.getMinutes()+r);break;case"seconds":i.setSeconds(i.getSeconds()+r)}return i}function eF(t,i,r,o=!0){if(i=i??void 0,Number.isNaN("number"==typeof t?t:t.getTime()))return"";let s=`${r??""}:${i}`,a=eO.get(s);if(null==a){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=eB.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}let i={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(eD))if(null!=t){for(let[e,r]of Object.entries(t))if(null!=r)switch(e){case"year":i.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":"DD"===r?i.day="2-digit":i.day="numeric";break;case"weekday":switch(r.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===r.length?"2-digit":"numeric",i.hour12="hh"===r||"h"===r;break;case"minute":i.minute=2===r.length?"2-digit":"numeric";break;case"second":i.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===r.length?"long":"short"}}return i}(i);a=new Intl.DateTimeFormat(null==r?e:"system"===r?void 0:[r],t),o&&eO.set(s,a)}if(null==i||eB.test(i))return a.format(t);let h=a.formatToParts(t);return i.replace(eD,(i,s,a,c,p,u,g,m,b,f,v,_,w,x,$)=>{if(null!=s)return s.substring(1,s.length-1);for(let[i,s]of Object.entries($)){if(null==s)continue;let a=h.find(e=>e.type===i);if("Do"===s&&a?.type==="day")return function(e){let t=e%100;return`${e}${eW[(t-20)%10]??eW[t]??eW[0]}`}(Number(a.value));if("a"===s&&a?.type==="dayPeriod"){let i=(function(t){let i=`${r??""}:time:${t}`,s=eO.get(i);if(null==s){let a;a=null==r?e:"system"===r?void 0:[r],s=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:t}),o&&eO.set(i,s)}return s})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(i??a)?.value??""}`}return a?.value??""}return""})}let eW=["th","st","nd","rd"];function eH(t,i){t??="decimal";let r=`${i??""}:${t}`,o=eL.get(r);if(null==o){let s={localeMatcher:"best fit",style:t};o=new Intl.NumberFormat(null==i?e:"system"===i?void 0:[i],s),eL.set(r,o)}return o.format}var eV=((p=eV||{})[p.VerificationRequired=-1]="VerificationRequired",p[p.Community=0]="Community",p[p.DeprecatedPreview=1]="DeprecatedPreview",p[p.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",p[p.Trial=3]="Trial",p[p.TrialExpired=4]="TrialExpired",p[p.TrialReactivationEligible=5]="TrialReactivationEligible",p[p.Paid=6]="Paid",p);let eq=["student","pro","advanced","teams","enterprise"];function eU(e){var t;return t=e.plan.actual.id,eq.includes(t)}function eK(e){let t=function(e){let t;if("all"===e)return;let[i,r]=e.split("|");switch(r){case"D":t=eN(new Date,{days:-parseInt(i,10)});break;case"M":t=eN(new Date,{months:-parseInt(i,10)});break;case"Y":t=eN(new Date,{years:-parseInt(i,10)});break;default:t=eN(new Date,{months:-3})}return t.getHours()>=12&&t.setDate(t.getDate()+1),t.setHours(0,0,0,0),t}(e);return null!=t?Date.now()-t.getTime():void 0}let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,i,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=r??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,i,r){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=i,this.subscribe=r??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:i}]of this.subscriptions)t.has(e)||(t.add(e),i.dispatchEvent(new context_request_event_s(this.context,i,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function eY({context:e}){return(t,i)=>{let r=new WeakMap;if("object"==typeof i)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let o;t.constructor.addInitializer(t=>{r.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){let e=new WeakMap;o={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;o={...s,set(t){r.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,o)}}}function eG({context:e,subscribe:t}){return(i,r)=>{"object"==typeof r?r.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{i.set.call(this,e)},subscribe:t})}):i.constructor.addInitializer(i=>{new context_consumer_s(i,{context:e,callback:e=>{i[r]=e},subscribe:t})})}}var eX=Object.defineProperty,eZ=(e,t,i)=>{let r;return(r="symbol"!=typeof t?t+"":t)in e?eX(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,i},eJ=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},eQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},e0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot access private method");return i};function e1(e,t){return Object.is(e,t)}let e2=null,e4=!1,e5=1,e3=Symbol("SIGNAL");function e8(e){let t=e2;return e2=e,t}let e6={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function e7(e){if(e4)throw Error("u">typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===e2)return;e2.consumerOnSignalRead(e);let t=e2.nextProducerIndex++;tt(e2),t<e2.producerNode.length&&e2.producerNode[t]!==e&&te(e2)&&e9(e2.producerNode[t],e2.producerIndexOfThis[t]),e2.producerNode[t]!==e&&(e2.producerNode[t]=e,e2.producerIndexOfThis[t]=te(e2)?function e(t,i,r){var o;if(ti(t),tt(t),0===t.liveConsumerNode.length){null==(o=t.watched)||o.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)t.producerIndexOfThis[i]=e(t.producerNode[i],t,i)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(i)-1}(e,e2,t):0),e2.producerLastReadVersion[t]=e.version}function e9(e,t){var i;if(ti(e),tt(e),"u">typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(i=e.unwatched)||i.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e9(e.producerNode[t],e.producerIndexOfThis[t])}let r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let i=e.liveConsumerIndexOfThis[t],r=e.liveConsumerNode[t];tt(r),r.producerIndexOfThis[i]=t}}function te(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function tt(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function ti(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function tr(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==e5){if(!t.producerMustRecompute(t)&&!function(t){tt(t);for(let i=0;i<t.producerNode.length;i++){let r=t.producerNode[i],o=t.producerLastReadVersion[i];if(o!==r.version||(e(r),o!==r.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=e5;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=e5}}(e),e7(e),e.value===tn)throw e.error;return e.value}let to=Symbol("UNSET"),ts=Symbol("COMPUTING"),tn=Symbol("ERRORED"),ta={...e6,value:to,dirty:!0,error:null,equal:e1,producerMustRecompute:e=>e.value===to||e.value===ts,producerRecomputeValue(e){let t;if(e.value===ts)throw Error("Detected cycle in computations.");let i=e.value;e.value=ts;let r=(e&&(e.nextProducerIndex=0),e8(e)),o=!1;try{t=e.computation.call(e.wrapper),o=i!==to&&i!==tn&&e.equal.call(e.wrapper,i,t)}catch(i){t=tn,e.error=i}finally{if(e8(r),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(te(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)e9(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(o){e.value=i;return}e.value=t,e.version++}},tl=function(){throw Error()};function th(){return e7(this),this.value}let tc={...e6,equal:e1,value:void 0},td=Symbol("node");(e=>{var t,i,r,o;let State=class State{constructor(r,o={}){let s,a;eQ(this,i),eZ(this,t);let h=((s=Object.create(tc)).value=r,(a=()=>(e7(s),s.value))[e3]=s,a)[e3];if(this[td]=h,h.wrapper=this,o){let t=o.equals;t&&(h.equal=t),h.watched=o[e.subtle.watched],h.unwatched=o[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return th.call(this[td])}set(t){var i,r;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(e4)throw Error("Writes to signals not permitted during Watcher callback");i=this[td],(null==e2?void 0:e2.consumerAllowSignalWrites)===!1&&tl(),i.equal.call(i.wrapper,i.value,t)||(i.value=t,r=i,r.version++,e5++,function e(t){if(void 0===t.liveConsumerNode)return;let i=e4;e4=!0;try{for(let i of t.liveConsumerNode)i.dirty||function(t){var i;t.dirty=!0,e(t),null==(i=t.consumerMarkedDirty)||i.call(t.wrapper??t)}(i)}finally{e4=i}}(r))}};t=td,i=new WeakSet,e.isState=e=>"object"==typeof e&&eJ(i,e),e.State=State;let Computed=class Computed{constructor(t,i){let s,a;eQ(this,o),eZ(this,r);let h=((s=Object.create(ta)).computation=t,(a=()=>tr(s))[e3]=s,a)[e3];if(h.consumerAllowSignalWrites=!0,this[td]=h,h.wrapper=this,i){let t=i.equals;t&&(h.equal=t),h.watched=i[e.subtle.watched],h.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return tr(this[td])}};r=td,o=new WeakSet,e.isComputed=e=>"object"==typeof e&&eJ(o,e),e.Computed=Computed,(t=>{var i,r,o,s;t.untrack=function(e){let t,i=null;try{i=e8(null),t=e()}finally{e8(i)}return t},t.introspectSources=function(t){var i;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(i=t[td].producerNode)?void 0:i.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var i;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(i=t[td].liveConsumerNode)?void 0:i.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let i=t[td].liveConsumerNode;return!!i&&i.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let i=t[td].producerNode;return!!i&&i.length>0};let Watcher=class Watcher{constructor(e){eQ(this,r),eQ(this,o),eZ(this,i);let t=Object.create(e6);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[td]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");e0(this,o,s).call(this,t);let i=this[td];i.dirty=!1;let r=e8(i);for(let e of t)e7(e[td]);e8(r)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");e0(this,o,s).call(this,t);let i=this[td];tt(i);for(let e=i.producerNode.length-1;e>=0;e--)if(t.includes(i.producerNode[e].wrapper)){e9(i.producerNode[e],i.producerIndexOfThis[e]);let t=i.producerNode.length-1;if(i.producerNode[e]=i.producerNode[t],i.producerIndexOfThis[e]=i.producerIndexOfThis[t],i.producerNode.length--,i.producerIndexOfThis.length--,i.nextProducerIndex--,e<i.producerNode.length){let t=i.producerIndexOfThis[e],r=i.producerNode[e];ti(r),r.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[td].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};i=td,r=new WeakSet,o=new WeakSet,s=function(t){for(let i of t)if(!(0,e.isComputed)(i)&&!(0,e.isState)(i))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>eJ(r,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=e2)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(g||(g={}));let tp=!1,tu=new g.subtle.Watcher(()=>{tp||(tp=!0,queueMicrotask(()=>{for(let e of(tp=!1,tu.getPending()))e.get();tu.watch()}))}),tg=Symbol("SignalWatcherBrand"),tm=new FinalizationRegistry(e=>{e.unwatch(...g.subtle.introspectSources(e))}),tb=new WeakMap;function tf(e){return!0===e[tg]?e:class extends e{constructor(){super(...arguments),this._$St=new Map,this._$So=new g.State(0),this._$Si=!1}_$Sl(){var e,t;let i=[],r=[];this._$St.forEach((e,t)=>{((null==e?void 0:e.beforeUpdate)?i:r).push(t)});let o=null==(e=this.h)?void 0:e.getPending().filter(e=>e!==this._$Su&&!this._$St.has(e));i.forEach(e=>e.get()),null==(t=this._$Su)||t.get(),o.forEach(e=>e.get()),r.forEach(e=>e.get())}_$Sv(){this.isUpdatePending||queueMicrotask(()=>{this.isUpdatePending||this._$Sl()})}_$S_(){if(void 0!==this.h)return;this._$Su=new g.Computed(()=>{this._$So.get(),super.performUpdate()});let e=this.h=new g.subtle.Watcher(function(){let e=tb.get(this);void 0!==e&&(!1===e._$Si&&(new Set(this.getPending()).has(e._$Su)?e.requestUpdate():e._$Sv()),this.watch())});tb.set(e,this),tm.register(this,e),e.watch(this._$Su),e.watch(...Array.from(this._$St).map(([e])=>e))}_$Sp(){if(void 0===this.h)return;let e=!1;this.h.unwatch(...g.subtle.introspectSources(this.h).filter(t=>{var i;let r=!0!==(null==(i=this._$St.get(t))?void 0:i.manualDispose);return r&&this._$St.delete(t),e||(e=!r),r})),e||(this._$Su=void 0,this.h=void 0,this._$St.clear())}updateEffect(e,t){var i;this._$S_();let r=new g.Computed(()=>{e()});return this.h.watch(r),this._$St.set(r,t),null!=(i=null==t?void 0:t.beforeUpdate)&&i?g.subtle.untrack(()=>r.get()):this.updateComplete.then(()=>g.subtle.untrack(()=>r.get())),()=>{this._$St.delete(r),this.h.unwatch(r),!1===this.isConnected&&this._$Sp()}}performUpdate(){this.isUpdatePending&&(this._$S_(),this._$Si=!0,this._$So.set(this._$So.get()+1),this._$Si=!1,this._$Sl())}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}}}let tv=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:t_}={M:Q,P:ee,A:et,C:1,L:e$,R,D:ea,V:eC,I:k,H,N:L,U:z,B:I,F:Z},ty=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),ty(e,t);return!0},tw=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},tx=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),tC(t)}};function tk(e){void 0!==this._$AN?(tw(this),this._$AM=e,tx(this)):this._$AM=e}function t$(e,t=!1,i=0){let r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(r))for(let e=i;e<r.length;e++)ty(r[e],!1),tw(r[e]);else null!=r&&(ty(r,!1),tw(r));else ty(this,e)}let tC=e=>{2==e.type&&(e._$AP??=t$,e._$AQ??=tk)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),tx(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ty(this,e),tw(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let tE=!1,tS=new g.subtle.Watcher(async()=>{tE||(tE=!0,queueMicrotask(()=>{for(let e of(tE=!1,tS.getPending()))e.get();tS.watch()}))});let watch_r=class watch_r extends async_directive_f{_$S_(){var e,t;void 0===this._$Sm&&(this._$Sj=new g.Computed(()=>{var e;let t=null==(e=this._$SW)?void 0:e.get();return this.setValue(t),t}),this._$Sm=null!=(t=null==(e=this._$Sk)?void 0:e.h)?t:tS,this._$Sm.watch(this._$Sj),g.subtle.untrack(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()}))}_$Sp(){void 0!==this._$Sm&&(this._$Sm.unwatch(this._$SW),this._$Sm=void 0)}render(e){return g.subtle.untrack(()=>e.get())}update(e,[t]){var i;return null!=this._$Sk||(this._$Sk=null==(i=e.options)?void 0:i.host),t!==this._$SW&&void 0!==this._$SW&&this._$Sp(),this._$SW=t,this._$S_(),g.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$S_()}};let tA=tv(watch_r),tT=e=>(t,...i)=>e(t,...i.map(e=>e instanceof g.State||e instanceof g.Computed?tA(e):e));tT(ef),tT(ev),g.State,g.Computed;let tM=(e,t)=>new g.State(e,t),tP=(e,t)=>new g.Computed(e,t),{fromCharCode:tR}=String;new TextEncoder;let tz=new TextDecoder;let IpcCall=class IpcCall{constructor(e,t,i=!1){this.scope=e,this.reset=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,i){super(e,t,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let tj=new IpcRequest("core","webview/ready"),tD=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let tB=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let tI=new IpcCommand("core","telemetry/sendEvent"),tO=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let tL=new IpcCommand("core","webview/focus/didChange"),tN=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let tF=new WeakMap;function tW(e,t){return function(i,r,o){let s=tF.get(i.constructor);null==s&&tF.set(i.constructor,s=[]),s.push({method:o.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,i){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(r),r}update(e){let t=tF.get(this.constructor);if(null!=t)for(let{keys:i,method:r,afterFirstUpdate:o}of t){if(o&&!this.hasUpdated)continue;let t=i.filter(t=>e.has(t));t.length&&r.call(this,t)}super.update(e)}};function tH(e,t,r){let o;if(null==r)return i??=eH(),`${i(t)} ${e}${1===t?"":"s"}`;let s=1===t?e:r.plural??`${e}s`;return r.only?s:(0===t?o=r.zero??t:!1===r.format?o=t:null!=r.format?o=r.format(t):(i??=eH(),o=i(t)),`${o}${r.infix??" "}${s}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let tV=/T/,tq=/.*\s*?at\s(.+?)\s/,tU=/^_+/,tK=["accessToken","password","token"];let Logger=class Logger{#e;#t;configure(e,t=!1){this.#t={...e,sanitizeKeys:new Set([...tK,...e.sanitizeKeys??[]])},this.#i=t,this.#e=e.createChannel(e.name),this.#r=this.#e.logLevel,this.#e.onDidChangeLogLevel?.(e=>{this.#r=e})}enabled(e){return!!this.isDebugging||0!==this.#r&&(null==e||this.#r<=function(e){switch(e){case"off":default:return 0;case"trace":return 1;case"debug":return 2;case"info":return 3;case"warn":return 4;case"error":return 5}}(e))}#i=!1;get isDebugging(){return this.#i}#r=0;get logLevel(){var e=this.#r;switch(e){case 0:default:return"off";case 1:return"trace";case 2:return"debug";case 3:return"info";case 4:return"warn";case 5:return"error"}}get timestamp(){return`[${new Date().toISOString().replace(tV," ").slice(0,-1)}]`}trace(e,...t){let i;(0!==this.#r&&!(this.#r>1)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.#e?.trace(`  ${i??""}${this.#o(!0,t)}`))}debug(e,...t){let i;(0!==this.#r&&!(this.#r>2)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.#e?.debug(`  ${i??""}${this.#o(!1,t)}`))}info(e,...t){let i;(0!==this.#r&&!(this.#r>3)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.#e?.info(`   ${i??""}${this.#o(!1,t)}`))}warn(e,...t){let i;(0!==this.#r&&!(this.#r>4)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.#e?.warn(`${i??""}${this.#o(!1,t)}`))}error(e,t,...i){let r;if((0===this.#r||this.#r>5)&&!this.isDebugging)return;if(null==(r=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=tq.exec(t);null!=e&&(r=e[1])}}this.isDebugging;let o=`  ${r??""}${this.#o(!1,i)}`;null!=e?this.#e?.error(String(e),o):this.#e?.error(o)}showOutputChannel(e){this.#e?.show?.(e)}toLoggable(e,t){if(null!=t){let i=this.sanitize(t,e);if(null!=i)return i}if("function"==typeof e)return"<function>";if(null==e||"object"!=typeof e||e instanceof Error)return String(e);if(Array.isArray(e)){let t=e.length>10?e.slice(0,10):e,i=e.length>10?`, \u2026+${e.length-10}`:"";return`[${t.map(e=>this.toLoggable(e)).join(", ")}${i}]`}let i=this.#t?.toLoggable,r=i?.(e);if(null!=r)return r;let o=this.#t?.sanitizeKeys;try{return JSON.stringify(e,(e,t)=>{if(95!==e.charCodeAt(0))return o?.has(e)?this.sanitize(e,t):""===e||"object"!=typeof t||null==t||Array.isArray(t)?t:t instanceof Error?String(t):i?.(t)??t})}catch{return"<error>"}}sanitize(e,t){if(null==t)return;let i=e.replace(tU,"")||e;if(this.#t?.sanitizeKeys?.has(i))return null!=this.#t.hash?`<${i}:${this.#t.hash("string"==typeof t?t:JSON.stringify(t))}>`:`<${i}>`}#o(e,t){if(0===t.length||e&&(0===this.#r||this.#r>2)&&!this.isDebugging)return"";let i=t.map(e=>this.toLoggable(e)).join(", ");return 0!==i.length?` \u2014 ${i}`:""}};let tY=new Logger,tG=new WeakMap,tX={enabled:e=>tY.enabled(e),log:(e,t,i,...r)=>{switch(e){case"error":tY.error(void 0,t,i,...r);break;case"warn":t?.warn(i,...r);break;case"info":t?.info(i,...r);break;case"debug":default:t?.debug(i,...r);break;case"trace":t?.trace(i,...r)}}},tZ=new Map;function tJ(e,t){let i=r;r=e.scopeId,tZ.set(e.scopeId,e);try{return t()}finally{r=i,tZ.delete(e.scopeId)}}function tQ(){return null!=r?tZ.get(r):void 0}let t0=0x40000000-1;function t1(){let e=0;return{get current(){return e},next:function(){return e===t0&&(e=0),++e},reset:function(){e=0}}}function t2(e){let t=.001*performance.now(),i=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],(r-=e[1])<0&&(i--,r+=1e9)),[i,r]}function t4(e){let[t,i]=t2(e);return 1e3*t+Math.floor(i/1e6)}let t5=t1();function t3(e,t,i){var r;let o,s,a={scopeId:e,prevScopeId:t,prefix:i,enabled:e=>tY.enabled(e),addExitInfo:function(...e){(o??=[]).push(...e)},setFailed:function(e){s=e},getExitInfo:function(){return{details:o?.length?` \u2022 ${o.join(", ")}`:void 0,failed:s}}};return t8(a,"trace",tY.trace),t8(a,"debug",tY.debug),t8(a,"info",tY.info),t8(a,"warn",tY.warn),Object.defineProperty(r=a,"error",{configurable:!0,enumerable:!0,get:function(){let e=(e,t,...i)=>tY.error(e,r,t,...i);return Object.defineProperty(r,"error",{value:e,writable:!1,enumerable:!0}),e}}),a}function t8(e,t,i){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){let r=i.bind(tY,e);return Object.defineProperty(e,t,{value:r,writable:!1,enumerable:!0}),r}})}function t6(e,t,i){if(null!=i){let r=null==t?e.toString(16):`${t.toString(16)} \u2192 ${e.toString(16)}`;return null==r?`[${i.padEnd(13)}]`:`[${i}${r.padStart(13-i.length)}]`}return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function t7(){let e=tQ();if(null==e)return;let t=Object.create(e);return t[Symbol.dispose]=()=>{},t}function t9(e,t,i){if(null!=t&&"boolean"!=typeof t)return t3(t.scopeId,t.prevScopeId,`${t.prefix}${e}`);let r=t?tQ()?.scopeId:void 0,o=t5.next();return t3(o,r,`${t6(o,r,i)} ${e}`)}function ie(e,t,i,...r){switch(t){case"trace":tY.trace(e,i,...r);break;case"info":tY.info(e,i,...r);break;default:tY.debug(e,i,...r)}}let LoggerContext=class LoggerContext{constructor(e){this.scope=t9(e,void 0),tY.configure({name:e,createChannel:function(e){let t=tY.isDebugging?function(e){}:function(e){};return{name:e,logLevel:0,trace:t,debug:t,info:t,warn:t,error:t}}},!1)}trace(e,...t){"string"==typeof e?tY.trace(this.scope,e,...t):tY.trace(e,t.shift(),...t)}debug(e,...t){"string"==typeof e?tY.debug(this.scope,e,...t):tY.debug(e,t.shift(),...t)}info(e,...t){"string"==typeof e?tY.info(this.scope,e,...t):tY.info(e,t.shift(),...t)}};let it=new IpcNotification("home","subscription/didChange"),ii="graph";new IpcCommand(ii,"chooseRepository"),new IpcCommand(ii,"dblclick"),new IpcCommand(ii,"avatars/get"),new IpcCommand(ii,"refs/metadata/get"),new IpcCommand(ii,"rows/get"),new IpcCommand(ii,"pullRequest/openDetails"),new IpcCommand(ii,"row/action"),new IpcCommand(ii,"treemap/file/action"),new IpcCommand(ii,"search/openInView"),new IpcCommand(ii,"search/cancel"),new IpcCommand(ii,"columns/update"),new IpcCommand(ii,"refs/update/visibility"),new IpcCommand(ii,"refs/update/pinned"),new IpcCommand(ii,"filters/update/excludeTypes"),new IpcCommand(ii,"configuration/update"),new IpcCommand(ii,"displayMode/update"),new IpcCommand(ii,"search/update/mode"),new IpcCommand(ii,"filters/update/includedRefs"),new IpcCommand(ii,"filters/reset"),new IpcCommand(ii,"selection/update"),new IpcCommand(ii,"wipDraft/update"),new IpcRequest(ii,"jumpToHead"),new IpcRequest(ii,"chooseRef"),new IpcRequest(ii,"chooseComparison"),new IpcRequest(ii,"chooseAuthor"),new IpcRequest(ii,"chooseFile"),new IpcRequest(ii,"scope/resolve"),new IpcRequest(ii,"rows/ensure"),new IpcRequest(ii,"search/history/get"),new IpcRequest(ii,"search/history/store"),new IpcRequest(ii,"search/history/delete"),new IpcRequest(ii,"counts"),new IpcRequest(ii,"overview/get"),new IpcRequest(ii,"overview/wip/get"),new IpcRequest(ii,"overview/wip/detailed/get"),new IpcRequest(ii,"overview/enrichment/get"),new IpcRequest(ii,"agentSessions/get"),new IpcRequest(ii,"wip/stats/get"),new IpcCommand(ii,"wip/watches/sync"),new IpcNotification(ii,"wip/refetch/request"),new IpcRequest(ii,"row/hover/get"),new IpcRequest(ii,"search"),new IpcNotification(ii,"overview/didChange"),new IpcNotification(ii,"agentSessions/didChange"),new IpcNotification(ii,"repositories/integration/didChange"),new IpcNotification(ii,"wipDrafts/didChange"),new IpcNotification(ii,"didChange",!0),new IpcNotification(ii,"configuration/didChange");let ir=new IpcNotification(ii,"subscription/didChange");new IpcNotification(ii,"org/settings/didChange"),new IpcNotification(ii,"avatars/didChange"),new IpcNotification(ii,"mcp/didChange"),new IpcNotification(ii,"hooks/didChange"),new IpcNotification(ii,"agents/canInstallClaudeHook/didChange"),new IpcCommand(ii,"graphWalkthrough/banner/close"),new IpcNotification(ii,"graphWalkthrough/banner/didChange"),new IpcNotification(ii,"graphWalkthrough/complete/didChange"),new IpcNotification(ii,"graphWalkthrough/started/didChange"),new IpcNotification(ii,"visualizationsButtonCallout/didChange"),new IpcCommand(ii,"visualizationsButtonCallout/dismiss"),new IpcNotification(ii,"sidebar/activePanel/didRequest"),new IpcNotification(ii,"action/didRequest"),new IpcCommand(ii,"track/overview/shown"),new IpcCommand(ii,"track/scope/changed"),new IpcCommand(ii,"track/details/reviewMode"),new IpcCommand(ii,"track/details/composeMode"),new IpcCommand(ii,"track/details/resolveMode"),new IpcCommand(ii,"track/details/compareMode"),new IpcCommand(ii,"track/details/wipShown"),new IpcNotification(ii,"branchState/didChange"),new IpcNotification(ii,"refs/didChangeMetadata"),new IpcNotification(ii,"columns/didChange"),new IpcNotification(ii,"scrollMarkers/didChange"),new IpcNotification(ii,"refs/didChangeVisibility"),new IpcNotification(ii,"refs/didChangePinned"),new IpcNotification(ii,"rows/didChange"),new IpcNotification(ii,"rows/stats/didChange"),new IpcNotification(ii,"selection/didChange"),new IpcNotification(ii,"compareMode/didRequestOpen"),new IpcNotification(ii,"timeline/didRequestOpenScope"),new IpcNotification(ii,"search/didRequest"),new IpcNotification(ii,"workingTree/didChange"),new IpcNotification(ii,"didSearch"),new IpcNotification(ii,"didFetch"),new IpcNotification(ii,"scope/anchors/didInvalidate"),new IpcNotification(ii,"treemap/didInvalidate"),new IpcNotification(ii,"featurePreview/didStart");let io=new IpcNotification("timeline","didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(it.is(e)||ir.is(e)||io.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let i=`${e}|${t}`,r=this._promos.get(i);return null==r&&(r=this.ipc.sendRequest(tB,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(i,r)),await r}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(tI,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};function is(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function ia(e,t){return new Promise(i=>{e.addEventListener(t,function r(o){o.target===e&&(e.removeEventListener(t,r),i())})})}function il(e,t,i){let r,o,s,a,h,c,p,u,g,m,b=0;null!=i&&({edges:c,maxWait:p,cancellation:u,aggregator:g}=i);let f="leading"===(c??="trailing")||"both"===c,v="trailing"===c||"both"===c;function _(){if(null!=r){b=Date.now();let t=r,i=m;return m=void 0,r=void 0,s=e.apply(i,t)}}function w(){null!=a&&(clearTimeout(a),a=void 0)}function x(){null!=h&&(clearTimeout(h),h=void 0)}function $(){w(),x(),m=void 0,r=void 0,o=void 0,b=0}function C(...e){if(u?.aborted)return;let i=Date.now();null!=g&&null!=r?r=g(r,e):(m=this,r=e);let c=null==a&&null==h;o=i,w();let x=Date.now();if(o=x,a=setTimeout(()=>{a=void 0,function e(){let i,r,s=Date.now();if(i=s-(o??0),r=s-b,null==o||i>=t||i<0||null!=p&&r>=p){v&&_(),$();return}a=setTimeout(()=>{a=void 0,e()},t-(s-(o??0)))}()},t),null!=p&&!h){0===b&&(b=x);let e=p-(x-b);e>0?h=setTimeout(()=>{h=void 0,v&&null!=r&&_(),b=Date.now()},e):(v&&null!=r&&_(),$())}return f&&c?_():s}return C.cancel=$,C.flush=function(){return w(),x(),_()},C.pending=function(){return null!=a||null!=h},u?.addEventListener("abort",$,{once:!0}),C}(m||(m={})).on=function(e,t,i,r){let o=!1;if("string"==typeof e){let s=function(t){let r=t?.target?.closest(e);null!=r&&i(t,r)};return document.addEventListener(t,s,r??!0),{dispose:()=>{o||(o=!0,document.removeEventListener(t,s,r??!0))}}}let s=function(e){i(e,this)};return e.addEventListener(t,s,r??!1),{dispose:()=>{o||(o=!0,e.removeEventListener(t,s,r??!1))}}};var ih=Uint8Array,ic=Uint16Array,id=Int32Array,ip=new ih([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),iu=new ih([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ig=new ih([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),im=function(e,t){for(var i=new ic(31),r=0;r<31;++r)i[r]=t+=1<<e[r-1];for(var o=new id(i[30]),r=1;r<30;++r)for(var s=i[r];s<i[r+1];++s)o[s]=s-i[r]<<5|r;return{b:i,r:o}},ib=im(ip,2),iv=ib.b,i_=ib.r;iv[28]=258,i_[258]=28;var iy=im(iu,0),iw=iy.b;iy.r;for(var ix=new ic(32768),ik=0;ik<32768;++ik){var i$=(43690&ik)>>1|(21845&ik)<<1;i$=(61680&(i$=(52428&i$)>>2|(13107&i$)<<2))>>4|(3855&i$)<<4,ix[ik]=((65280&i$)>>8|(255&i$)<<8)>>1}for(var iC=function(e,t,i){for(var r,o=e.length,s=0,a=new ic(t);s<o;++s)e[s]&&++a[e[s]-1];var h=new ic(t);for(s=1;s<t;++s)h[s]=h[s-1]+a[s-1]<<1;if(i){r=new ic(1<<t);var c=15-t;for(s=0;s<o;++s)if(e[s])for(var p=s<<4|e[s],u=t-e[s],g=h[e[s]-1]++<<u,m=g|(1<<u)-1;g<=m;++g)r[ix[g]>>c]=p}else for(r=new ic(o),s=0;s<o;++s)e[s]&&(r[s]=ix[h[e[s]-1]++]>>15-e[s]);return r},iE=new ih(288),ik=0;ik<144;++ik)iE[ik]=8;for(var ik=144;ik<256;++ik)iE[ik]=9;for(var ik=256;ik<280;++ik)iE[ik]=7;for(var ik=280;ik<288;++ik)iE[ik]=8;for(var iS=new ih(32),ik=0;ik<32;++ik)iS[ik]=5;var iA=iC(iE,9,1),iT=iC(iS,5,1),iM=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},iP=function(e,t,i){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(7&t)&i},iR=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(7&t)},iz=function(e,t,i){return(null==t||t<0)&&(t=0),(null==i||i>e.length)&&(i=e.length),new ih(e.subarray(t,i))},ij=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],iD=function(e,t,i){var r=Error(t||ij[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,iD),!i)throw r;return r},iB=function(e,t,i,r){var o=e.length,s=r?r.length:0;if(!o||t.f&&!t.l)return i||new ih(0);var a=!i,h=a||2!=t.i,c=t.i;a&&(i=new ih(3*o));var p=function(e){var t=i.length;if(e>t){var r=new ih(Math.max(2*t,e));r.set(i),i=r}},u=t.f||0,g=t.p||0,m=t.b||0,b=t.l,f=t.d,v=t.m,_=t.n,w=8*o;do{if(!b){u=iP(e,g,1);var x=iP(e,g+1,3);if(g+=3,x)if(1==x)b=iA,f=iT,v=9,_=5;else if(2==x){var $=iP(e,g,31)+257,C=iP(e,g+10,15)+4,E=$+iP(e,g+5,31)+1;g+=14;for(var S=new ih(E),A=new ih(19),T=0;T<C;++T)A[ig[T]]=iP(e,g+3*T,7);g+=3*C;for(var M=iM(A),P=(1<<M)-1,j=iC(A,M,1),T=0;T<E;){var D=j[iP(e,g,P)];g+=15&D;var B=D>>4;if(B<16)S[T++]=B;else{var O=0,N=0;for(16==B?(N=3+iP(e,g,3),g+=2,O=S[T-1]):17==B?(N=3+iP(e,g,7),g+=3):18==B&&(N=11+iP(e,g,127),g+=7);N--;)S[T++]=O}}var F=S.subarray(0,$),W=S.subarray($);v=iM(F),_=iM(W),b=iC(F,v,1),f=iC(W,_,1)}else iD(1);else{var B=((g+7)/8|0)+4,V=e[B-4]|e[B-3]<<8,q=B+V;if(q>o){c&&iD(0);break}h&&p(m+V),i.set(e.subarray(B,q),m),t.b=m+=V,t.p=g=8*q,t.f=u;continue}if(g>w){c&&iD(0);break}}h&&p(m+131072);for(var U=(1<<v)-1,K=(1<<_)-1,Y=g;;Y=g){var O=b[iR(e,g)&U],G=O>>4;if((g+=15&O)>w){c&&iD(0);break}if(O||iD(2),G<256)i[m++]=G;else if(256==G){Y=g,b=null;break}else{var X=G-254;if(G>264){var T=G-257,J=ip[T];X=iP(e,g,(1<<J)-1)+iv[T],g+=J}var Q=f[iR(e,g)&K],ee=Q>>4;Q||iD(3),g+=15&Q;var W=iw[ee];if(ee>3){var J=iu[ee];W+=iR(e,g)&(1<<J)-1,g+=J}if(g>w){c&&iD(0);break}h&&p(m+131072);var et=m+X;if(m<W){var ei=s-W,er=Math.min(W,et);for(ei+m<0&&iD(3);m<er;++m)i[m]=r[ei+m]}for(;m<et;++m)i[m]=i[m-W]}}t.l=b,t.p=Y,t.b=m,t.f=u,b&&(u=1,t.m=v,t.d=f,t.n=_)}while(!u)return m!=i.length&&a?iz(i,0,m):i.subarray(0,m)},iI=new ih(0),iO="u">typeof TextDecoder&&new TextDecoder;try{iO.decode(iI,{stream:!0})}catch{}var iL=function(e){for(var t="",i=0;;){var r=e[i++],o=(r>127)+(r>223)+(r>239);if(i+o>e.length)return{s:t,r:iz(e,i-1)};o?3==o?t+=String.fromCharCode(55296|(r=((15&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536)>>10,56320|1023&r):1&o?t+=String.fromCharCode((31&r)<<6|63&e[i++]):t+=String.fromCharCode((15&r)<<12|(63&e[i++])<<6|63&e[i++]):t+=String.fromCharCode(r)}};function iN(e,t){if(t){for(var i="",r=0;r<e.length;r+=16384)i+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return i}if(iO)return iO.decode(e);var o=iL(e),s=o.s,i=o.r;return i.length&&iD(8),s}"function"==typeof queueMicrotask&&queueMicrotask;let iF=/\(([\s\S]*)\)/,iW=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,iH=/\s?=.*$/;function iV(e){var t,i;let r,o,s,a,h,c,p,u,g;return t="debug",h=!1,c=!0,null!=(i=e)&&({args:r,when:o,exit:s,prefix:a,onlyExit:h=!1,timing:c=!0}=i),p="object"==typeof c?c.warnAfter:1500,u=!1!==c||"object"==typeof h&&h.after>0,g="trace"===t?tY.trace:"debug"===t?tY.debug:tY.info,(e,i,c)=>{let m,b;if("function"==typeof c.value?(m=c.value,b="value"):"function"==typeof c.get&&(m=c.get,b="get"),null==m||null==b)throw Error("Not supported");let f=null==r?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),i=(t=(t=t.replace(iW,"")||t).slice(0,t.indexOf("{"))).indexOf("("),r=t.indexOf(")");i=i>=0?i+1:0,r=r>0?r:t.indexOf("="),t=t.slice(i,r),t=`(${t})`;let o=iF.exec(t);return null!=o?o[1].split(",").map(e=>e.trim().replace(iH,"")):[]}(m):[];c[b]=function(...e){let c;if(!tY.enabled()||null!=o&&!o.apply(this,e))return m.apply(this,e);let b=tY.enabled(t),v=t7(),_=v?.scopeId,w=t5.next(),x=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let i=t?.name??"",r=i.indexOf("_");-1!==r&&(i=i.substring(r+1));let o=t;for(;null!=o;){let t=tG.get(o);if(null!=t)return t(e,i);o=Object.getPrototypeOf(o)}return i}(this):void 0,$=x?`${t6(w,_)} ${x}.${i}`:`${t6(w,_)} ${i}`;null!=a&&($=a({id:w,instance:this,instanceName:x??"",name:i,prefix:$},...e));let C=t3(w,_,$),E=!1,S=()=>(E||(E=!0,c=function(e,t,i){if(!1===e||!t.length)return;if("function"==typeof e){let i=e(...t);if(!1===i)return;let r="";for(let[e,t]of Object.entries(i))r.length&&(r+=", "),r+=`${e}=${tY.toLoggable(t,e)}`;return r||void 0}let r="",o=-1;for(let e of t){let t=i[++o];r.length&&(r+=", "),r+=t?`${t}=${tY.toLoggable(e,t)}`:tY.toLoggable(e)}return r||void 0}(r,e,f)),c);if(!h&&b){let e=S();g.call(tY,e?`${$}(${e})`:$)}if(h||u||null!=s){let t=u?t2():void 0,i=e=>{let i=void 0!==t?` [${t4(t)}ms]`:"",r=C.getExitInfo();if(h){let t=S();tY.error(e,t?`${$}(${t})`:$,r?.details?`failed${r.details}${i}`:`failed${i}`)}else tY.error(e,$,r?.details?`failed${r.details}${i}`:`failed${i}`)},r=e=>{let i,r,o,a;null!=t?(i=t4(t))>p?(r=tY.warn,o=` [*${i}ms] (slow)`):(r=g,o=` [${i}ms]`):(o="",r=g);let c=C.getExitInfo();if(null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tY.toLoggable(e)}`);else c?.failed?(a=c.failed,r=(e,...t)=>tY.error(null,e,...t)):a="completed";if(b||r!==g){let e=S();h?(!0===h||0===h.after||i>h.after)&&r.call(tY,e?`${$}(${e}) ${a}${c?.details||""}${o}`:`${$} ${a}${c?.details||""}${o}`):r.call(tY,e?`${$}(${e}) ${a}${c?.details||""}${o}`:`${$} ${a}${c?.details||""}${o}`)}};return tJ(C,()=>{var t;let o;try{o=m.apply(this,e)}catch(e){throw i(e),e}return null!=o&&null!=(t=o)&&(t instanceof Promise||"function"==typeof t?.then)?o.then(r,i).catch(()=>{}):r(o),o})}return tJ(C,()=>m.apply(this,e))}}}globalThis.scheduler?.yield?.bind(globalThis.scheduler),Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...i){let r;this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:t9(e??"",!1,t?.scopeLabel);let o=t?.log;if(r=null==o||!0===o?{}:!1===o||o.onlyExit?void 0:o,this.logLevel=("object"==typeof o?o.level:void 0)??"debug",this.logProvider=t?.provider??tX,this._time=t2(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){return t4(this._time)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=t2(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let i=t4(this._time),r=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${i}ms]${e?.suffix??""}`)}};(()=>{let e;var t,i,r={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,r="",o=0,s=-1,a=0,h=0;h<=e.length;++h){if(h<e.length)i=e.charCodeAt(h);else{if(47===i)break;i=47}if(47===i){if(s===h-1||1===a);else if(s!==h-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",o=0):o=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),s=h,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,s=h,a=0;continue}}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(s+1,h):r=e.slice(s+1,h),o=h-s-1;s=h,a=0}else 46===i&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r,o="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===r&&(r=process.cwd()),e=r),t(e),0!==e.length&&(o=e+"/"+o,s=47===e.charCodeAt(0));return o=i(o,!s),s?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var o=arguments[i];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=r.resolve(e))===(i=r.resolve(i)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var s=e.length,a=s-o,h=1;h<i.length&&47===i.charCodeAt(h);++h);for(var c=i.length-h,p=a<c?a:c,u=-1,g=0;g<=p;++g){if(g===p){if(c>p){if(47===i.charCodeAt(h+g))return i.slice(h+g+1);if(0===g)return i.slice(h+g)}else a>p&&(47===e.charCodeAt(o+g)?u=g:0===g&&(u=0));break}var m=e.charCodeAt(o+g);if(m!==i.charCodeAt(h+g))break;47===m&&(u=g)}var b="";for(g=o+u+1;g<=s;++g)g!==s&&47!==e.charCodeAt(g)||(0===b.length?b+="..":b+="/..");return b.length>0?b+i.slice(h+u):(h+=u,47===i.charCodeAt(h)&&++h,i.slice(h))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),r=47===i,o=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(i=e.charCodeAt(a))){if(!s){o=a;break}}else s=!1;return -1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var r,o=0,s=-1,a=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var h=i.length-1,c=-1;for(r=e.length-1;r>=0;--r){var p=e.charCodeAt(r);if(47===p){if(!a){o=r+1;break}}else -1===c&&(a=!1,c=r+1),h>=0&&(p===i.charCodeAt(h)?-1==--h&&(s=r):(h=-1,s=c))}return o===s?s=c:-1===s&&(s=e.length),e.slice(o,s)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else -1===s&&(a=!1,s=r+1);return -1===s?"":e.slice(o,s)},extname:function(e){t(e);for(var i=-1,r=0,o=-1,s=!0,a=0,h=e.length-1;h>=0;--h){var c=e.charCodeAt(h);if(47!==c)-1===o&&(s=!1,o=h+1),46===c?-1===i?i=h:1!==a&&(a=1):-1!==i&&(a=-1);else if(!s){r=h+1;break}}return -1===i||-1===o||0===a||1===a&&i===o-1&&i===r+1?"":e.slice(i,o)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var r,o=e.charCodeAt(0),s=47===o;s?(i.root="/",r=1):r=0;for(var a=-1,h=0,c=-1,p=!0,u=e.length-1,g=0;u>=r;--u)if(47!==(o=e.charCodeAt(u)))-1===c&&(p=!1,c=u+1),46===o?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){h=u+1;break}return -1===a||-1===c||0===g||1===g&&a===c-1&&a===h+1?-1!==c&&(i.base=i.name=0===h&&s?e.slice(1,c):e.slice(h,c)):(0===h&&s?(i.name=e.slice(1,a),i.base=e.slice(1,c)):(i.name=e.slice(h,a),i.base=e.slice(h,c)),i.ext=e.slice(a,c)),h>0?i.dir=e.slice(0,h-1):s&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(s.r(a),s.d(a,{URI:()=>l,Utils:()=>i}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let h=/^\w[\w\d+.-]*$/,c=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!h.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!c.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let g=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,i,r,o,s=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||s?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,i||""),this.query=r||"",this.fragment=o||"",u(this,s))}get fsPath(){return w(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:i,path:r,query:o,fragment:s}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===i?i=this.authority:null===i&&(i=""),void 0===r?r=this.path:null===r&&(r=""),void 0===o?o=this.query:null===o&&(o=""),void 0===s?s=this.fragment:null===s&&(s=""),t===this.scheme&&i===this.authority&&r===this.path&&o===this.query&&s===this.fragment?this:new d(t,i,r,o,s)}static parse(e,t=!1){let i=g.exec(e);return i?new d(i[2]||"",C(i[4]||""),C(i[5]||""),C(i[7]||""),C(i[9]||""),t):new d("","","","","")}static file(t){let i="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(i=t.substring(2),t="/"):(i=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",i,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return x(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===m?e.fsPath:null,t}}return e}};let m=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=w(this,!1)),this._fsPath}toString(e=!1){return e?x(this,!0):(this._formatted||(this._formatted=x(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=m),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let f={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function v(e,t,i){let r,o=-1;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||i&&91===a||i&&93===a||i&&58===a)-1!==o&&(r+=encodeURIComponent(e.substring(o,s)),o=-1),void 0!==r&&(r+=e.charAt(s));else{void 0===r&&(r=e.substr(0,s));let t=f[a];void 0!==t?(-1!==o&&(r+=encodeURIComponent(e.substring(o,s)),o=-1),r+=t):-1===o&&(o=s)}}return -1!==o&&(r+=encodeURIComponent(e.substring(o))),void 0!==r?r:e}function _(e){let t;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);35===r||63===r?(void 0===t&&(t=e.substr(0,i)),t+=f[r]):void 0!==t&&(t+=e[i])}return void 0!==t?t:e}function w(t,i){let r;return r=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?i?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(r=r.replace(/\//g,"\\")),r}function x(e,t){let i=t?_:v,r="",{scheme:o,authority:s,path:a,query:h,fragment:c}=e;if(o&&(r+=o,r+=":"),(s||"file"===o)&&(r+="/",r+="/"),s){let e=s.indexOf("@");if(-1!==e){let t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.lastIndexOf(":"))?r+=i(t,!1,!1):(r+=i(t.substr(0,e),!1,!1),r+=":",r+=i(t.substr(e+1),!1,!0)),r+="@"}-1===(e=(s=s.toLowerCase()).lastIndexOf(":"))?r+=i(s,!1,!0):(r+=i(s.substr(0,e),!1,!0),r+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}r+=i(a,!0,!1)}return h&&(r+="?",r+=i(h,!1,!1)),c&&(r+="#",r+=t?c:v(c,!1,!1)),r}let $=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function C(e){return e.match($)?e.replace($,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var E=s(975);let S=E.posix||E;(t=i||(i={})).joinPath=function(e,...t){return e.with({path:S.join(e.path,...t)})},t.resolvePath=function(e,...t){let i=e.path,r=!1;"/"!==i[0]&&(i="/"+i,r=!0);let o=S.resolve(i,...t);return r&&"/"===o[0]&&!e.authority&&(o=o.substring(1)),e.with({path:o})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=S.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return S.basename(e.path)},t.extname=function(e){return S.extname(e.path)},b=a})();let{URI:iq,Utils:iU}=b;function iK(e,t){return JSON.parse(e,(e,i)=>(function(e,t){let i=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(e);if(null==i)return e;switch(i.__ipc){case"date":return new Date(i.value);case"promise":return t(i.value);case"uri":return iq.revive(i.value)}})(i,t))}let iY="__supertalk_rpc__";function iG(e){return"object"==typeof e&&null!==e&&iY in e&&!0===e[iY]}let iX=new TextEncoder,iZ=new TextDecoder;let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return this._event??=(e,t,i)=>{this.listeners??=new LinkedList;let r=this.listeners.push(null==t?e:[e,t]),o={dispose:()=>{o.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(i)&&i.push(o),o},this._event}fire(e){if(null!=this.listeners){this._deliveryQueue??=new LinkedList;for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let iJ={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let i=new events_Node(e);if(this._first===events_Node.Undefined)this._first=i,this._last=i;else if(t){let e=this._last;this._last=i,i.prev=e,e.next=i}else{let e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(i))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?iJ:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var iQ=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,i1=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),i2=e=>{throw TypeError(e)},i4=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?i0(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&iQ(t,i,s),s};function i5(){return o??=null!=s?s():acquireVsCodeApi()}let i3=t1();function i8(){return`webview:${i3.next()}`}let i6=`wv-${Math.random().toString(36).slice(2,10)}`,i7=Date.now(),i9=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=i5(),this._disposable=m.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,i,o,s,a,h,c,p,u=[];try{if(iG(e.data))return;let s=e.data,a=((e,t,i)=>{if(null!=t){var r,o;"object"!=typeof t&&"function"!=typeof t&&i2("Object expected"),i&&(r=t[i1("asyncDispose")]),void 0===r&&(r=t[i1("dispose")],i&&(o=r)),"function"!=typeof r&&i2("Object not disposable"),o&&(r=function(){try{o.call(this)}catch(e){return Promise.reject(e)}}),e.push([i,r,t])}else i&&e.push([i]);return t})(u,function(e,t,i){var o,s;let a,h,c;if(!tY.enabled())return;let p=(o=i?.scope??!0,s=i?.scopeLabel,h=tQ(),r=(c=t9(e,o,s)).scopeId,tZ.set(c.scopeId,c),c[Symbol.dispose]=()=>{let e;e=c?.scopeId??r,null!=e&&tZ.delete(e),r=h?.scopeId},c);if(!t)return p;let u="debug",g=!1;"object"==typeof t&&(u=t.level??u,a=t.message,g=!0===t.onlyExit);let m=t2();g||ie(p,u,a??"");let b=p[Symbol.dispose];return p[Symbol.dispose]=()=>{let e=t4(m),t=` [${e}ms]`,i=p.getExitInfo(),r=i.failed??"completed";null!=i.failed?tY.error(null,p,`${r}${i.details??""}${t}`):ie(p,u,`${r}${i.details??""}${t}`),b()},p}(`(e=${s.id}|${s.method})`,void 0,{scope:t7()})),h=function(e,t,...i){let r=("object"==typeof t?.log?t.log.level:void 0)??"info";return(t?.provider??tX).enabled(r)?new Stopwatch(e,t,...i):void 0}(a,{log:{onlyExit:!0,level:"debug"}});if(s.compressed&&s.params instanceof Uint8Array){if("deflate"===s.compressed)try{s.params=iN((o=s.params,iB(o,{i:2},void 0,void 0)))}catch(e){s.params=iN(s.params)}else s.params=iN(s.params);h?.restart({message:`\u2022 decompressed (${s.compressed}) serialized params`})}if("string"==typeof s.params?(s.params=iK(s.params,e=>this.getResponsePromise(e.method,e.id)),h?.stop({message:"• deserialized params"})):null==s.params?h?.stop({message:"• no params"}):h?.stop({message:"• invalid params"}),a?.addExitInfo(`ipc (host -> webview) duration=${Date.now()-s.timestamp}ms`),null!=s.completionId){let e=(t=s.method,i=s.completionId,`${t}|${i}`);this._pendingHandlers.get(e)?.(s);return}this._onReceiveMessage.fire(s)}catch(e){var g=e,m=!0}finally{s=g,a=m,h="function"==typeof SuppressedError?SuppressedError:function(e,t,i,r){return(r=Error(i)).name="SuppressedError",r.error=e,r.suppressed=t,r},c=e=>s=a?new h(e,s,"An error was suppressed during disposal"):(a=!0,e),(p=e=>{for(;e=u.pop();)try{var t=e[1]&&e[1].call(e[2]);if(e[0])return Promise.resolve(t).then(p,e=>(c(e),p()))}catch(e){c(e)}if(a)throw s})()}}deserializeIpcData(e){return iK(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let i=i8();this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let i=i8(),r=this.getResponsePromise(e.response.method,i);return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:i}),r}getResponsePromise(e,t){return new Promise((i,r)=>{var o,s;let a,h=(o=e,s=t,`${o}|${s}`);function c(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(h)}a=setTimeout(()=>{c.call(this),r(Error(`Timed out waiting for completion of ${h}`))},(tY.isDebugging?60:5)*6e4),this._pendingHandlers.set(h,e=>{if(c.call(this),e.method===tO.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>r(Error(t.reason))):queueMicrotask(()=>i(t.value))}else queueMicrotask(()=>i(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function re(e,t){let i=Math.pow(10,t);return Math.round(e*i)/i}i4([iV({args:e=>({e:`${e.data.id}|${e.data.method}`})})],i9.prototype,"onMessageReceived",1),i4([iV({args:e=>({commandType:e.method})})],i9.prototype,"sendCommand",1),i4([iV({args:e=>({requestType:e.method})})],i9.prototype,"sendRequest",1),i4([iV({args:e=>({e:`${e.id}, method=${e.method}`})})],i9.prototype,"postMessage",1),i9=i4([(u=e=>`${e.appName}(HostIpc)`,e=>void tG.set(e,u))],i9);let RGBA=class RGBA{constructor(e,t,i,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=re(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,i,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=re(Math.max(Math.min(1,t),0),3),this.l=re(Math.max(Math.min(1,i),0),3),this.a=re(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,r=e.b/255,o=e.a,s=Math.max(t,i,r),a=Math.min(t,i,r),h=0,c=0,p=(a+s)/2,u=s-a;if(u>0){switch(c=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),s){case t:h=(i-r)/u+6*(i<r);break;case i:h=(r-t)/u+2;break;case r:h=(t-i)/u+4}h*=60,h=Math.round(h)}return new HSLA(h,c,p,o)}static _hue2rgb(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){let t,i,r,o=e.h/360,{s,l:a,a:h}=e;if(0===s)t=i=r=a;else{let e=a<.5?a*(1+s):a+s-a*s,h=2*a-e;t=HSLA._hue2rgb(h,e,o+1/3),i=HSLA._hue2rgb(h,e,o),r=HSLA._hue2rgb(h,e,o-1/3)}return new RGBA(Math.round(255*t),Math.round(255*i),Math.round(255*r),h)}};let HSVA=class HSVA{constructor(e,t,i,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=re(Math.max(Math.min(1,t),0),3),this.v=re(Math.max(Math.min(1,i),0),3),this.a=re(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,r=e.b/255,o=Math.max(t,i,r),s=o-Math.min(t,i,r);return new HSVA(Math.round(60*(0===s?0:o===t?((i-r)/s%6+6)%6:o===i?(r-t)/s+2:(t-i)/s+4)),0===o?0:s/o,o,e.a)}static toRGBA(e){let{h:t,s:i,v:r,a:o}=e,s=r*i,a=s*(1-Math.abs(t/60%2-1)),h=r-s,[c,p,u]=[0,0,0];return t<60?(c=s,p=a):t<120?(c=a,p=s):t<180?(p=s,u=a):t<240?(p=a,u=s):t<300?(c=a,u=s):t<=360&&(c=s,u=a),new RGBA(c=Math.round((c+h)*255),p=Math.round((p+h)*255),u=Math.round((u+h)*255),o)}};function rt(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(rt(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return re(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:i,b:r,a:o}=this.rgba;return new Color(new RGBA(t,i,r,o*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,i=this.rgba.a,r=t.a,o=i+r*(1-i);return o<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*i/o+t.r*r*(1-i)/o,this.rgba.g*i/o+t.g*r*(1-i)/o,this.rgba.b*i/o+t.b*r*(1-i)/o,o))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:i,b:r,a:o}=this.rgba;return new Color(new RGBA(e.rgba.r-o*(e.rgba.r-t),e.rgba.g-o*(e.rgba.g-i),e.rgba.b-o*(e.rgba.b-r),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let i=1-e.rgba.a;return new Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${ri(e.rgba.r)}${ri(e.rgba.g)}${ri(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;let r=e.getRelativeLuminance(),o=t.getRelativeLuminance();return i=i*(o-r)/o,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;let r=e.getRelativeLuminance(),o=t.getRelativeLuminance();return i=i*(r-o)/r,e.darken(i)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function ri(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let rr=new Emitter,ro=rr.event;function rs(e){let t=document.documentElement,i=window.getComputedStyle(t),r=document.body.classList,o=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),s=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),a=rt("--vscode-editor-background",i),h=rt("--vscode-editor-foreground",i);return h||(h=rt("--vscode-foreground",i)),{colors:{background:a,foreground:h},computedStyle:i,isLightTheme:o,isHighContrastTheme:s,isInitializing:null==e}}var rn=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,rl=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?ra(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&rn(t,i,s),s};let GlWebviewApp=class GlWebviewApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[]}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}initWebviewContext(e){let t=JSON.parse(tz.decode(function(e){let t=globalThis.atob(e),i=t.length,r=new Uint8Array(i),o=0,s=i-i%8;for(;o<s;o+=8)r[o]=t.charCodeAt(o),r[o+1]=t.charCodeAt(o+1),r[o+2]=t.charCodeAt(o+2),r[o+3]=t.charCodeAt(o+3),r[o+4]=t.charCodeAt(o+4),r[o+5]=t.charCodeAt(o+5),r[o+6]=t.charCodeAt(o+6),r[o+7]=t.charCodeAt(o+7);for(;o<i;o++)r[o]=t.charCodeAt(o);return r}(e))),i=t.webviewId,r=t.webviewInstanceId;this._webview={webviewId:i,webviewInstanceId:r,createCommandLink:(e,t)=>{var o;return e.endsWith(":")&&(e=`${e}${i.split(".").at(-1)}`),o=e,`command:${o}?${encodeURIComponent(JSON.stringify({webview:i,webviewInstance:r,...t}))}`}}}connectedCallback(){let e,t,i,r,o;super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.debug("connected"),this._ipc=new i9(this.name),this.disposables.push(((e=new MutationObserver(e=>{rr.fire(rs(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),null!=this.onThemeUpdated&&(this.onThemeUpdated(rs()),this.disposables.push(ro(this.onThemeUpdated,this))),this.disposables.push(this._ipc.onReceiveMessage(e=>{switch(!0){case tL.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case tN.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._focusTracker=(r=0,o=il(e=>{let t=`webview:${++r}`,i=document.hasFocus();e.focused=i,i||(e.inputFocused=!1),i5().postMessage({id:t,scope:tD.scope,method:tD.method,params:e,compressed:!1,timestamp:Date.now()})},150),{onFocusIn:e=>{let r=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==t||i!==r)&&(t=!0,i=r,o({focused:!0,inputFocused:r}))},onFocusOut:e=>{o({focused:!1,inputFocused:!1})}}),document.addEventListener("focusin",this._focusTracker.onFocusIn),document.addEventListener("focusout",this._focusTracker.onFocusOut),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.debug("disconnected"),null!=this._focusTracker&&(document.removeEventListener("focusin",this._focusTracker.onFocusIn),document.removeEventListener("focusout",this._focusTracker.onFocusOut),this._focusTracker=void 0),this.disposables.forEach(e=>e.dispose())}render(){return ef`<slot></slot>`}};rl([eP({type:String})],GlWebviewApp.prototype,"name",2),rl([eP({type:String})],GlWebviewApp.prototype,"placement",2),rl([eY({context:"ipc"})],GlWebviewApp.prototype,"_ipc",2),rl([eY({context:"logger"})],GlWebviewApp.prototype,"_logger",2),rl([eY({context:"promos"})],GlWebviewApp.prototype,"_promos",2),rl([eY({context:"telemetry"})],GlWebviewApp.prototype,"_telemetry",2),rl([eY({context:"webview"})],GlWebviewApp.prototype,"_webview",2);let rh=tf(GlWebviewApp);let SignalWatcherWebviewApp=class SignalWatcherWebviewApp extends rh{connectedCallback(){super.connectedCallback?.(),this._ipc.sendRequest(tj,{bootstrap:!1,clientId:i6,clientLoadedAt:i7})}};let rc=new WeakMap,rd=tv(class extends async_directive_f{render(e){return ey}update(e,[t]){let i=t!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ey}rt(e){if(void 0!==this.G)if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=rc.get(t);void 0===i&&(i=new WeakMap,rc.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?rc.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),rp="important",ru=` !${rp}`,rg=0-ru.length;let CspStyleMapDirective=class CspStyleMapDirective extends directive_i{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `cspStyleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return e_}update(e,[t]){let i=e.element.style,r=this._previous??=new Map;for(let e of r.keys())null==t[e]&&(r.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(let e in t){let o=t[e];if(null==o)continue;let s="string"==typeof o&&o.endsWith(ru),a=s?o.slice(0,rg):String(o);r.get(e)!==a&&(r.set(e,a),e.includes("-")||s?i.setProperty(e,a,s?rp:""):i[e]=a)}return e_}};let rm=tv(CspStyleMapDirective),rb=A`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;A`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${rb}
	}
`;let rf=A`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,rv=A`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,r_=A`
	:focus-visible {
		${rf}
	}
`,ry=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a","add-small":"\\ec7b","remove-small":"\\ec7c","worktree-small":"\\ec7d",worktree:"\\ec7e","screen-cut":"\\ec7f",ask:"\\ec80",openai:"\\ec81",claude:"\\ec82","open-in-window":"\\ec83","new-session":"\\ec84"}),rw=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147","diff-right":"\\f11b","diff-left":"\\f12e","accept-right":"\\f12f","accept-left":"\\f130","accept-all-right":"\\f131","accept-all-left":"\\f132",continue:"\\f148",skip:"\\f149",abort:"\\f14a",pause:"\\f14b","kanban-view":"\\f14c","filter-mixed":"\\f14d"});var rx=Object.defineProperty,rk=Object.getOwnPropertyDescriptor,r$=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?rk(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&rx(t,i,s),s};function rC(e,t=""){return S(Object.entries(e).map(([e,i])=>(function(e,t,i=""){return`:host([icon='${i}${e}'])::before { content: '${t}'; }`})(e,i,t)).join(""))}let rE=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};rE.styles=A`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${rC(ry)}
		${rC(rw,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,r$([eP({reflect:!0})],rE.prototype,"icon",2),r$([eP({reflect:!0})],rE.prototype,"modifier",2),r$([eP({type:Number})],rE.prototype,"size",2),r$([eP({reflect:!0})],rE.prototype,"flip",2),r$([eP({reflect:!0})],rE.prototype,"rotate",2),rE=r$([eT("code-icon")],rE);let rS=A`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;A`
	* {
		box-sizing: border-box;
	}
`;let rA=A`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${rf}
	}
	a:hover {
		text-decoration: underline;
	}
`,rT=A`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;A`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`,A`
	@keyframes sub-panel-enter {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.sub-panel-enter {
		animation: sub-panel-enter 0.2s ease-out;
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}

	@media (prefers-reduced-motion: reduce) {
		.sub-panel-enter {
			animation: none;
		}
	}
`,A`
	:host {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}
`,A`
	:host {
		--gl-metadata-bar-bg: color-mix(in srgb, var(--color-background) 95%, var(--color-foreground) 5%);
		--gl-metadata-bar-border: var(--vscode-sideBarSectionHeader-border, var(--color-foreground--25));
		--gl-metadata-bar-min-height: 2.94rem;
	}
`;var rM=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}},rP=A`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: 100ms;
    --hide-duration: 100ms;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;let rR=new Set,rz=new Map,rj="ltr",rD="en",rB="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(rB){let e=new MutationObserver(rO);rj=document.documentElement.dir||"ltr",rD=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rI(...e){e.map(e=>{let t=e.$code.toLowerCase();rz.has(t)?rz.set(t,Object.assign(Object.assign({},rz.get(t)),e)):rz.set(t,e),a||(a=e)}),rO()}function rO(){rB&&(rj=document.documentElement.dir||"ltr",rD=document.documentElement.lang||navigator.language),[...rR.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rR.add(this.host)}hostDisconnected(){rR.delete(this.host)}dir(){return`${this.host.dir||rj}`.toLowerCase()}lang(){return`${this.host.lang||rD}`.toLowerCase()}getTranslationData(e){var t,i;let r;try{r=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let o=r.language.toLowerCase(),s=null!=(i=null==(t=r.region)?void 0:t.toLowerCase())?i:"",a=rz.get(`${o}-${s}`),h=rz.get(o);return{locale:r,language:o,region:s,primary:a,secondary:h}}exists(e,t){var i;let{primary:r,secondary:o}=this.getTranslationData(null!=(i=t.lang)?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!o&&!!o[e]||!!t.includeFallback&&!!a&&!!a[e]}term(e,...t){let i,{primary:r,secondary:o}=this.getTranslationData(this.lang());if(r&&r[e])i=r[e];else if(o&&o[e])i=o[e];else{if(!a||!a[e])return String(e);i=a[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}};var rL={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",clearEntry:"Clear entry",close:"Close",createOption:e=>`Create "${e}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",moreOptions:"More Options",mute:"Mute",nextSlide:"Next slide",nextVideo:"Next Video",numCharacters:e=>1===e?"1 character":`${e} characters`,numCharactersRemaining:e=>1===e?"1 character remaining":`${e} characters remaining`,numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousSlide:"Previous slide",previousVideo:"Previous video",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(e,t)=>`${e} of ${t}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",zoomIn:"Zoom in",zoomOut:"Zoom out"};rI(rL);var rN=class extends LocalizeController{};rI(rL);var rF=Object.defineProperty,rW=Object.getOwnPropertyDescriptor,rH=e=>{throw TypeError(e)},rV=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?rW(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&rF(t,i,s),s},rq=(e,t,i)=>t.has(e)||rH("Cannot "+i),rU=A`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,rK=class extends lit_element_i{constructor(){let e;super(),(e=f).has(this)?rH("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes("must start with '--'"));else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{}for(let[e,t]of(this.customStates.set("wa-defined",!0),this.constructor.elementProperties))"inherit"===t.default&&void 0!==t.initial&&"string"==typeof e&&this.customStates.set(`initial-${e}-${t.initial}`,!0)}static get styles(){return[rU,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))}attributeChangedCallback(e,t,i){let r,o;if(rq(this,r=f,"read from private field"),o?!o.call(this):!r.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),rq(this,e=f,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};f=new WeakMap,rV([eP()],rK.prototype,"dir",2),rV([eP()],rK.prototype,"lang",2),rV([eP({type:Boolean,reflect:!0,attribute:"did-ssr"})],rK.prototype,"didSSR",2);let rY=Math.min,rG=Math.max,rX=Math.round,rZ=Math.floor,rJ=e=>({x:e,y:e}),rQ={left:"right",right:"left",bottom:"top",top:"bottom"};function r0(e,t){return"function"==typeof e?e(t):e}function r1(e){return e.split("-")[0]}function r2(e){return e.split("-")[1]}function r4(e){return"x"===e?"y":"x"}function r5(e){return"y"===e?"height":"width"}function r3(e){let t=e[0];return"t"===t||"b"===t?"y":"x"}function r8(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}let r6=["left","right"],r7=["right","left"],r9=["top","bottom"],oe=["bottom","top"];function ot(e){let t=r1(e);return rQ[t]+e.slice(t.length)}function oi(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function or(e){let{x:t,y:i,width:r,height:o}=e;return{width:r,height:o,top:i,left:t,right:t+r,bottom:i+o,x:t,y:i}}function oo(e,t,i){let r,{reference:o,floating:s}=e,a=r3(t),h=r4(r3(t)),c=r5(h),p=r1(t),u="y"===a,g=o.x+o.width/2-s.width/2,m=o.y+o.height/2-s.height/2,b=o[c]/2-s[c]/2;switch(p){case"top":r={x:g,y:o.y-s.height};break;case"bottom":r={x:g,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:m};break;case"left":r={x:o.x-s.width,y:m};break;default:r={x:o.x,y:o.y}}switch(r2(t)){case"start":r[h]-=b*(i&&u?-1:1);break;case"end":r[h]+=b*(i&&u?-1:1)}return r}async function os(e,t){var i;void 0===t&&(t={});let{x:r,y:o,platform:s,rects:a,elements:h,strategy:c}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:m=!1,padding:b=0}=r0(t,e),f=oi(b),v=h[m?"floating"===g?"reference":"floating":g],_=or(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(v)))||i?v:v.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(h.floating)),boundary:p,rootBoundary:u,strategy:c})),w="floating"===g?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,x=await (null==s.getOffsetParent?void 0:s.getOffsetParent(h.floating)),$=await (null==s.isElement?void 0:s.isElement(x))&&await (null==s.getScale?void 0:s.getScale(x))||{x:1,y:1},C=or(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:w,offsetParent:x,strategy:c}):w);return{top:(_.top-C.top+f.top)/$.y,bottom:(C.bottom-_.bottom+f.bottom)/$.y,left:(_.left-C.left+f.left)/$.x,right:(C.right-_.right+f.right)/$.x}}let on=async(e,t,i)=>{let{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:a}=i,h=a.detectOverflow?a:{...a,detectOverflow:os},c=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:g}=oo(p,r,c),m=r,b=0,f={};for(let i=0;i<s.length;i++){let v=s[i];if(!v)continue;let{name:_,fn:w}=v,{x:x,y:$,data:C,reset:E}=await w({x:u,y:g,initialPlacement:r,placement:m,strategy:o,middlewareData:f,rects:p,platform:h,elements:{reference:e,floating:t}});u=null!=x?x:u,g=null!=$?$:g,f[_]={...f[_],...C},E&&b<50&&(b++,"object"==typeof E&&(E.placement&&(m=E.placement),E.rects&&(p=!0===E.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):E.rects),{x:u,y:g}=oo(p,m,c)),i=-1)}return{x:u,y:g,placement:m,strategy:o,middlewareData:f}},oa=new Set(["left","top"]);async function ol(e,t){let{placement:i,platform:r,elements:o}=e,s=await (null==r.isRTL?void 0:r.isRTL(o.floating)),a=r1(i),h=r2(i),c="y"===r3(i),p=oa.has(a)?-1:1,u=s&&c?-1:1,g=r0(t,e),{mainAxis:m,crossAxis:b,alignmentAxis:f}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return h&&"number"==typeof f&&(b="end"===h?-1*f:f),c?{x:b*u,y:m*p}:{x:m*p,y:b*u}}function oh(){return"u">typeof window}function oc(e){return ou(e)?(e.nodeName||"").toLowerCase():"#document"}function od(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function op(e){var t;return null==(t=(ou(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ou(e){return!!oh()&&(e instanceof Node||e instanceof od(e).Node)}function og(e){return!!oh()&&(e instanceof Element||e instanceof od(e).Element)}function om(e){return!!oh()&&(e instanceof HTMLElement||e instanceof od(e).HTMLElement)}function ob(e){return!(!oh()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof od(e).ShadowRoot)}function of(e){let{overflow:t,overflowX:i,overflowY:r,display:o}=oC(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&"inline"!==o&&"contents"!==o}function ov(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}let o_=/transform|translate|scale|rotate|perspective|filter/,oy=/paint|layout|strict|content/,ow=e=>!!e&&"none"!==e;function ox(e){let t=og(e)?oC(e):e;return ow(t.transform)||ow(t.translate)||ow(t.scale)||ow(t.rotate)||ow(t.perspective)||!ok()&&(ow(t.backdropFilter)||ow(t.filter))||o_.test(t.willChange||"")||oy.test(t.contain||"")}function ok(){return null==h&&(h="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),h}function o$(e){return/^(html|body|#document)$/.test(oc(e))}function oC(e){return od(e).getComputedStyle(e)}function oE(e){return og(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oS(e){if("html"===oc(e))return e;let t=e.assignedSlot||e.parentNode||ob(e)&&e.host||op(e);return ob(t)?t.host:t}function oA(e,t,i){var r;void 0===t&&(t=[]),void 0===i&&(i=!0);let o=function e(t){let i=oS(t);return o$(i)?t.ownerDocument?t.ownerDocument.body:t.body:om(i)&&of(i)?i:e(i)}(e),s=o===(null==(r=e.ownerDocument)?void 0:r.body),a=od(o);if(!s)return t.concat(o,oA(o,[],i));{let e=oT(a);return t.concat(a,a.visualViewport||[],of(o)?o:[],e&&i?oA(e):[])}}function oT(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oM(e){let t=oC(e),i=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=om(e),s=o?e.offsetWidth:i,a=o?e.offsetHeight:r,h=rX(i)!==s||rX(r)!==a;return h&&(i=s,r=a),{width:i,height:r,$:h}}function oP(e){return og(e)?e:e.contextElement}function oR(e){let t=oP(e);if(!om(t))return rJ(1);let i=t.getBoundingClientRect(),{width:r,height:o,$:s}=oM(t),a=(s?rX(i.width):i.width)/r,h=(s?rX(i.height):i.height)/o;return a&&Number.isFinite(a)||(a=1),h&&Number.isFinite(h)||(h=1),{x:a,y:h}}let oz=rJ(0);function oj(e){let t=od(e);return ok()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oz}function oD(e,t,i,r){var o;void 0===t&&(t=!1),void 0===i&&(i=!1);let s=e.getBoundingClientRect(),a=oP(e),h=rJ(1);t&&(r?og(r)&&(h=oR(r)):h=oR(e));let c=(void 0===(o=i)&&(o=!1),r&&(!o||r===od(a))&&o)?oj(a):rJ(0),p=(s.left+c.x)/h.x,u=(s.top+c.y)/h.y,g=s.width/h.x,m=s.height/h.y;if(a){let e=od(a),t=r&&og(r)?od(r):r,i=e,o=oT(i);for(;o&&r&&t!==i;){let e=oR(o),t=o.getBoundingClientRect(),r=oC(o),s=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,m*=e.y,p+=s,u+=a,o=oT(i=od(o))}}return or({width:g,height:m,x:p,y:u})}function oB(e,t){let i=oE(e).scrollLeft;return t?t.left+i:oD(op(e)).left+i}function oI(e,t){let i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-oB(e,i),y:i.top+t.scrollTop}}function oO(e,t,i){var r;let o;if("viewport"===t)o=function(e,t){let i=od(e),r=op(e),o=i.visualViewport,s=r.clientWidth,a=r.clientHeight,h=0,c=0;if(o){s=o.width,a=o.height;let e=ok();(!e||e&&"fixed"===t)&&(h=o.offsetLeft,c=o.offsetTop)}let p=oB(r);if(p<=0){let e=r.ownerDocument,t=e.body,i=getComputedStyle(t),o="CSS1Compat"===e.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,a=Math.abs(r.clientWidth-t.clientWidth-o);a<=25&&(s-=a)}else p<=25&&(s+=p);return{width:s,height:a,x:h,y:c}}(e,i);else if("document"===t){let t,i,s,a,h,c,p;r=op(e),t=op(r),i=oE(r),s=r.ownerDocument.body,a=rG(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),h=rG(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight),c=-i.scrollLeft+oB(r),p=-i.scrollTop,"rtl"===oC(s).direction&&(c+=rG(t.clientWidth,s.clientWidth)-a),o={width:a,height:h,x:c,y:p}}else if(og(t)){let e,r,s,a,h,c;r=(e=oD(t,!0,"fixed"===i)).top+t.clientTop,s=e.left+t.clientLeft,a=om(t)?oR(t):rJ(1),h=t.clientWidth*a.x,c=t.clientHeight*a.y,o={width:h,height:c,x:s*a.x,y:r*a.y}}else{let i=oj(e);o={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return or(o)}function oL(e){return"static"===oC(e).position}function oN(e,t){if(!om(e)||"fixed"===oC(e).position)return null;if(t)return t(e);let i=e.offsetParent;return op(e)===i&&(i=i.ownerDocument.body),i}function oF(e,t){var i;let r=od(e);if(ov(e))return r;if(!om(e)){let t=oS(e);for(;t&&!o$(t);){if(og(t)&&!oL(t))return t;t=oS(t)}return r}let o=oN(e,t);for(;o&&(i=o,/^(table|td|th)$/.test(oc(i)))&&oL(o);)o=oN(o,t);return o&&o$(o)&&oL(o)&&!ox(o)?r:o||function(e){let t=oS(e);for(;om(t)&&!o$(t);){if(ox(t))return t;if(ov(t))break;t=oS(t)}return null}(e)||r}let oW=async function(e){let t=this.getOffsetParent||oF,i=this.getDimensions,r=await i(e.floating);return{reference:function(e,t,i){let r=om(t),o=op(t),s="fixed"===i,a=oD(e,!0,s,t),h={scrollLeft:0,scrollTop:0},c=rJ(0);if(r||!r&&!s)if(("body"!==oc(t)||of(o))&&(h=oE(t)),r){let e=oD(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else o&&(c.x=oB(o));s&&!r&&o&&(c.x=oB(o));let p=!o||r||s?rJ(0):oI(o,h);return{x:a.left+h.scrollLeft-c.x-p.x,y:a.top+h.scrollTop-c.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},oH={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:r,strategy:o}=e,s="fixed"===o,a=op(r),h=!!t&&ov(t.floating);if(r===a||h&&s)return i;let c={scrollLeft:0,scrollTop:0},p=rJ(1),u=rJ(0),g=om(r);if((g||!g&&!s)&&(("body"!==oc(r)||of(a))&&(c=oE(r)),g)){let e=oD(r);p=oR(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let m=!a||g||s?rJ(0):oI(a,c);return{width:i.width*p.x,height:i.height*p.y,x:i.x*p.x-c.scrollLeft*p.x+u.x+m.x,y:i.y*p.y-c.scrollTop*p.y+u.y+m.y}},getDocumentElement:op,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:r,strategy:o}=e,s=[..."clippingAncestors"===i?ov(t)?[]:function(e,t){let i=t.get(e);if(i)return i;let r=oA(e,[],!1).filter(e=>og(e)&&"body"!==oc(e)),o=null,s="fixed"===oC(e).position,a=s?oS(e):e;for(;og(a)&&!o$(a);){let t=oC(a),i=ox(a);i||"fixed"!==t.position||(o=null),(s?i||o:!(!i&&"static"===t.position&&o&&("absolute"===o.position||"fixed"===o.position)||of(a)&&!i&&function e(t,i){let r=oS(t);return!(r===i||!og(r)||o$(r))&&("fixed"===oC(r).position||e(r,i))}(e,a)))?o=t:r=r.filter(e=>e!==a),a=oS(a)}return t.set(e,r),r}(t,this._c):[].concat(i),r],a=oO(t,s[0],o),h=a.top,c=a.right,p=a.bottom,u=a.left;for(let e=1;e<s.length;e++){let i=oO(t,s[e],o);h=rG(i.top,h),c=rY(i.right,c),p=rY(i.bottom,p),u=rG(i.left,u)}return{width:c-u,height:p-h,x:u,y:h}},getOffsetParent:oF,getElementRects:oW,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:i}=oM(e);return{width:t,height:i}},getScale:oR,isElement:og,isRTL:function(e){return"rtl"===oC(e).direction}};function oV(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let oq=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,r;let o,s,{placement:a,rects:h,platform:c,elements:p}=t,{apply:u=()=>{},...g}=r0(e,t),m=await c.detectOverflow(t,g),b=r1(a),f=r2(a),v="y"===r3(a),{width:_,height:w}=h.floating;"top"===b||"bottom"===b?(o=b,s=f===(await (null==c.isRTL?void 0:c.isRTL(p.floating))?"start":"end")?"left":"right"):(s=b,o="end"===f?"top":"bottom");let x=w-m.top-m.bottom,$=_-m.left-m.right,C=rY(w-m[o],x),E=rY(_-m[s],$),S=!t.middlewareData.shift,A=C,T=E;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(T=$),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(A=x),S&&!f){let e=rG(m.left,0),t=rG(m.right,0),i=rG(m.top,0),r=rG(m.bottom,0);v?T=_-2*(0!==e||0!==t?e+t:rG(m.left,m.right)):A=w-2*(0!==i||0!==r?i+r:rG(m.top,m.bottom))}await u({...t,availableWidth:T,availableHeight:A});let M=await c.getDimensions(p.floating);return _!==M.width||w!==M.height?{reset:{rects:!0}}:{}}}};function oU(e){var t=e;for(let e=t;e;e=oK(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=oK(t);e;e=oK(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||ox(t)||"BODY"===e.tagName))return e}return null}function oK(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}let oY=tv(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return e_}});function oG(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}var oX=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),oZ=class extends rK{constructor(){super(...arguments),this.localize=new rN(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),r=0,o=0,s=0,a=0,h=0,c=0,p=0,u=0;i?e.top<t.top?(r=e.left,o=e.bottom,s=e.right,a=e.bottom,h=t.left,c=t.top,p=t.right,u=t.top):(r=t.left,o=t.bottom,s=t.right,a=t.bottom,h=e.left,c=e.top,p=e.right,u=e.top):e.left<t.left?(r=e.right,o=e.top,s=t.left,a=t.top,h=e.right,c=e.bottom,p=t.left,u=t.bottom):(r=t.right,o=t.top,s=e.left,a=e.top,h=t.right,c=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||oG(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=function(e,t,i,r){let o;void 0===r&&(r={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:h="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:p=!1}=r,u=oP(e),g=s||a?[...u?oA(u):[],...t?oA(t):[]]:[];g.forEach(e=>{s&&e.addEventListener("scroll",i,{passive:!0}),a&&e.addEventListener("resize",i)});let m=u&&c?function(e,t){let i,r=null,o=op(e);function s(){var e;clearTimeout(i),null==(e=r)||e.disconnect(),r=null}return!function a(h,c){void 0===h&&(h=!1),void 0===c&&(c=1),s();let p=e.getBoundingClientRect(),{left:u,top:g,width:m,height:b}=p;if(h||t(),!m||!b)return;let f={rootMargin:-rZ(g)+"px "+-rZ(o.clientWidth-(u+m))+"px "+-rZ(o.clientHeight-(g+b))+"px "+-rZ(u)+"px",threshold:rG(0,rY(1,c))||1},v=!0;function _(t){let r=t[0].intersectionRatio;if(r!==c){if(!v)return a();r?a(!1,r):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==r||oV(p,e.getBoundingClientRect())||a(),v=!1}try{r=new IntersectionObserver(_,{...f,root:o.ownerDocument})}catch{r=new IntersectionObserver(_,f)}r.observe(e)}(!0),s}(u,i):null,b=-1,f=null;h&&(f=new ResizeObserver(e=>{let[r]=e;r&&r.target===u&&f&&t&&(f.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=f)||e.observe(t)})),i()}),u&&!p&&f.observe(u),t&&f.observe(t));let v=p?oD(e):null;return p&&function t(){let r=oD(e);v&&!oV(v,r)&&i(),v=r,o=requestAnimationFrame(t)}(),i(),()=>{var e;g.forEach(e=>{s&&e.removeEventListener("scroll",i),a&&e.removeEventListener("resize",i)}),null==m||m(),null==(e=f)||e.disconnect(),f=null,p&&cancelAnimationFrame(o)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,i,r,o,s;let a,h,c,p,u;if(!this.active||!this.anchorEl||!this.popup)return;let g=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var i,r;let{x:o,y:s,placement:a,middlewareData:h}=t,c=await ol(t,e);return a===(null==(i=h.offset)?void 0:i.placement)&&null!=(r=h.arrow)&&r.alignmentOffset?{}:{x:o+c.x,y:s+c.y,data:{...c,placement:a}}}}];this.sync?g.push(oq({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),oX&&!oG(this.anchor)&&"scroll"===this.boundary&&(a=oA(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&g.push({name:"flip",options:t={boundary:this.flipBoundary||a,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var i,r,o,s,a,h,c,p;let u,g,m,{placement:b,middlewareData:f,rects:v,initialPlacement:_,platform:w,elements:x}=e,{mainAxis:$=!0,crossAxis:C=!0,fallbackPlacements:E,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:T=!0,...M}=r0(t,e);if(null!=(i=f.arrow)&&i.alignmentOffset)return{};let P=r1(b),j=r3(_),D=r1(_)===_,B=await (null==w.isRTL?void 0:w.isRTL(x.floating)),O=E||(D||!T?[ot(_)]:(u=ot(_),[r8(_),u,r8(u)])),N="none"!==A;!E&&N&&O.push(...(g=r2(_),m=function(e,t,i){switch(e){case"top":case"bottom":if(i)return t?r7:r6;return t?r6:r7;case"left":case"right":return t?r9:oe;default:return[]}}(r1(_),"start"===A,B),g&&(m=m.map(e=>e+"-"+g),T&&(m=m.concat(m.map(r8)))),m));let F=[_,...O],W=await w.detectOverflow(e,M),V=[],q=(null==(r=f.flip)?void 0:r.overflows)||[];if($&&V.push(W[P]),C){let e,t,i,r,o=(h=b,c=v,void 0===(p=B)&&(p=!1),e=r2(h),i=r5(t=r4(r3(h))),r="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",c.reference[i]>c.floating[i]&&(r=ot(r)),[r,ot(r)]);V.push(W[o[0]],W[o[1]])}if(q=[...q,{placement:b,overflows:V}],!V.every(e=>e<=0)){let e=((null==(o=f.flip)?void 0:o.index)||0)+1,t=F[e];if(t&&("alignment"!==C||j===r3(t)||q.every(e=>r3(e.placement)!==j||e.overflows[0]>0)))return{data:{index:e,overflows:q},reset:{placement:t}};let i=null==(s=q.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!i)switch(S){case"bestFit":{let e=null==(a=q.filter(e=>{if(N){let t=r3(e.placement);return t===j||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(i=e);break}case"initialPlacement":i=_}if(b!==i)return{reset:{placement:i}}}return{}}}),this.shift&&g.push({name:"shift",options:i={boundary:this.shiftBoundary||a,padding:this.shiftPadding},async fn(e){let{x:t,y:r,placement:o,platform:s}=e,{mainAxis:a=!0,crossAxis:h=!1,limiter:c={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...p}=r0(i,e),u={x:t,y:r},g=await s.detectOverflow(e,p),m=r3(r1(o)),b=r4(m),f=u[b],v=u[m];if(a){let e="y"===b?"top":"left",t="y"===b?"bottom":"right",i=f+g[e],r=f-g[t];f=rG(i,rY(f,r))}if(h){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",i=v+g[e],r=v-g[t];v=rG(i,rY(v,r))}let _=c.fn({...e,[b]:f,[m]:v});return{..._,data:{x:_.x-t,y:_.y-r,enabled:{[b]:a,[m]:h}}}}}),this.autoSize?g.push(oq({boundary:this.autoSizeBoundary||a,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&g.push({name:"arrow",options:h={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:i,placement:r,rects:o,platform:s,elements:a,middlewareData:c}=e,{element:p,padding:u=0}=r0(h,e)||{};if(null==p)return{};let g=oi(u),m={x:t,y:i},b=r4(r3(r)),f=r5(b),v=await s.getDimensions(p),_="y"===b,w=_?"clientHeight":"clientWidth",x=o.reference[f]+o.reference[b]-m[b]-o.floating[f],$=m[b]-o.reference[b],C=await (null==s.getOffsetParent?void 0:s.getOffsetParent(p)),E=C?C[w]:0;E&&await (null==s.isElement?void 0:s.isElement(C))||(E=a.floating[w]||o.floating[f]);let S=E/2-v[f]/2-1,A=rY(g[_?"top":"left"],S),T=rY(g[_?"bottom":"right"],S),M=E-v[f]-T,P=E/2-v[f]/2+(x/2-$/2),j=rG(A,rY(P,M)),D=!c.arrow&&null!=r2(r)&&P!==j&&o.reference[f]/2-(P<A?A:T)-v[f]/2<0,B=D?P<A?P-A:P-M:0;return{[b]:m[b]+B,data:{[b]:j,centerOffset:P-j-B,...D&&{alignmentOffset:B}},reset:D}}});let m=oX?e=>oH.getOffsetParent(e,oU):oH.getOffsetParent;(r=this.anchorEl,o=this.popup,s={placement:this.placement,middleware:g,strategy:oX?"absolute":"fixed",platform:{...oH,getOffsetParent:m}},c=new Map,u={...(p={platform:oH,...s}).platform,_c:c},on(r,o,{...p,platform:u})).then(({x:e,y:t,middlewareData:i,placement:r})=>{let o="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=i.arrow.x,t=i.arrow.y,r="",a="",h="",c="";if("start"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=o?i:"",c=o?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=o?"":i,c=o?i:"",h="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:a,bottom:h,left:c,[s]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new rM)}render(){return ef`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${oY({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${oY({popup:!0,"popup-active":this.active,"popup-fixed":!oX,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ef`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};oZ.css=rP,rV([ej(".popup")],oZ.prototype,"popup",2),rV([ej(".arrow")],oZ.prototype,"arrowEl",2),rV([eP()],oZ.prototype,"anchor",2),rV([eP({type:Boolean,reflect:!0})],oZ.prototype,"active",2),rV([eP({reflect:!0})],oZ.prototype,"placement",2),rV([eP()],oZ.prototype,"boundary",2),rV([eP({type:Number})],oZ.prototype,"distance",2),rV([eP({type:Number})],oZ.prototype,"skidding",2),rV([eP({type:Boolean})],oZ.prototype,"arrow",2),rV([eP({attribute:"arrow-placement"})],oZ.prototype,"arrowPlacement",2),rV([eP({attribute:"arrow-padding",type:Number})],oZ.prototype,"arrowPadding",2),rV([eP({type:Boolean})],oZ.prototype,"flip",2),rV([eP({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],oZ.prototype,"flipFallbackPlacements",2),rV([eP({attribute:"flip-fallback-strategy"})],oZ.prototype,"flipFallbackStrategy",2),rV([eP({type:Object})],oZ.prototype,"flipBoundary",2),rV([eP({attribute:"flip-padding",type:Number})],oZ.prototype,"flipPadding",2),rV([eP({type:Boolean})],oZ.prototype,"shift",2),rV([eP({type:Object})],oZ.prototype,"shiftBoundary",2),rV([eP({attribute:"shift-padding",type:Number})],oZ.prototype,"shiftPadding",2),rV([eP({attribute:"auto-size"})],oZ.prototype,"autoSize",2),rV([eP()],oZ.prototype,"sync",2),rV([eP({type:Object})],oZ.prototype,"autoSizeBoundary",2),rV([eP({attribute:"auto-size-padding",type:Number})],oZ.prototype,"autoSizePadding",2),rV([eP({attribute:"hover-bridge",type:Boolean})],oZ.prototype,"hoverBridge",2),oZ=rV([eT("wa-popup")],oZ);var oJ=Object.defineProperty,oQ=Object.getOwnPropertyDescriptor,o0=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?oQ(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&oJ(t,i,s),s};let o1=["top","right","bottom","left","top-left","top-right","bottom-left","bottom-right"],o2=class extends GlElement{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.autoSizeVertical=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.suppressed=!1,this.handleReposition=()=>{let e=this.popup?.getAttribute("data-current-placement");null!=e&&e!==this._resolvedPlacement&&(this._resolvedPlacement=e)},this.handleResizePointerDown=e=>{if(0!==e.button)return;let t=e.currentTarget,i=t.dataset.handle;if(null==i)return;e.preventDefault();let r="right"===i||"top-right"===i||"bottom-right"===i,o="left"===i||"top-left"===i||"bottom-left"===i,s="bottom"===i||"bottom-left"===i||"bottom-right"===i,a="top"===i||"top-left"===i||"top-right"===i,h=this.body,c=e.clientX,p=e.clientY,u=h.getBoundingClientRect(),g=u.width,m=u.height;t.setPointerCapture(e.pointerId),t.classList.add("popover__resizer--active"),this.toggleAttribute("dragging",!0);let b=e=>{let t=e.clientX-c,i=e.clientY-p;r?h.style.width=`${Math.max(0,g+t)}px`:o&&(h.style.width=`${Math.max(0,g-t)}px`),s?h.style.height=`${Math.max(0,m+i)}px`:a&&(h.style.height=`${Math.max(0,m-i)}px`),this.popup?.reposition()},f=()=>{this.toggleAttribute("dragging",!1),t.classList.remove("popover__resizer--active"),t.removeEventListener("pointermove",b),t.removeEventListener("lostpointercapture",f),t.removeEventListener("pointerup",f)};t.addEventListener("pointermove",b,{passive:!0}),t.addEventListener("lostpointercapture",f),t.addEventListener("pointerup",f)},this.handleTriggerBlur=e=>{this.open&&(this.hasTrigger("focus")||this.hasTrigger("focus-visible"))&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this._skipHideOnClick=!1,this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=e=>{let t=this.hasTrigger("focus")||this.hasTrigger("focus-visible");this.hasTrigger("click")&&t&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1,!this.open||"hover"!==this._triggeredBy||this.hasTrigger("click")||e.composedPath().includes(this.body)||(this.suppressed=!0,this.hide())},this.handleMouseUp=()=>{this.suppressed=!1},this.handleDragStart=()=>{this.suppressed=!0,this.hide()},this.handleDragEnd=()=>{this.suppressed=!1},this.handleTriggerFocus=e=>{let t=this.hasTrigger("focus"),i=this.hasTrigger("focus-visible");if(t||i){if(!t&&i){let t=e.target;if(null==t||"function"!=typeof t.matches||!t.matches(":focus-visible"))return}this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus")}},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleDocumentMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=is(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){if(clearTimeout(this.hoverTimeout),this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let e=is(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),e)}}}static closeOthers(e){for(let t of o2.openPopovers)t===e||function(e,t){let i=t;for(;null!=i;){if(i===e)return!0;i=i.parentNode??(i instanceof ShadowRoot?i.host:null)}return!1}(t,e)||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}connectedCallback(){super.connectedCallback?.(),this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("dragstart",this.handleDragStart,{capture:!0}),window.addEventListener("dragend",this.handleDragEnd,{capture:!0})}disconnectedCallback(){this.removeEventListener("blur",this.handleTriggerBlur,!0),this.removeEventListener("focus",this.handleTriggerFocus,!0),this.removeEventListener("click",this.handleTriggerClick),this.removeEventListener("mousedown",this.handleTriggerMouseDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("dragstart",this.handleDragStart,{capture:!0}),window.removeEventListener("dragend",this.handleDragEnd,{capture:!0}),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,o2.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),this.updateResizeObserver()}updateResizeObserver(){null!=this.resize?null==this.resizeObserver&&null!=this.body&&(this.resizeObserver=new ResizeObserver(()=>this.popup?.reposition()),this.resizeObserver.observe(this.body)):null!=this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0)}render(){let e=this._resolvedPlacement??this.placement,t=(function(e){if(!e)return[];let t=new Set;for(let i of e.trim().split(/\s+/))switch(i){case"horizontal":t.add("right");break;case"vertical":t.add("bottom");break;case"both":t.add("right"),t.add("bottom"),t.add("bottom-right");break;case"all":for(let e of o1)t.add(e);break;default:o1.includes(i)&&t.add(i)}return[...t]})(this.resize).filter(t=>!function(e,t){let i,r;if(!t)return!1;let[o,s]=t.split("-");switch(o){case"top":i="bottom";break;case"right":i="left";break;case"bottom":i="top";break;case"left":i="right"}let a="left"===o||"right"===o;"start"===s?r=a?"top":"left":"end"===s&&(r=a?"bottom":"right");let h=t=>null!=t&&(e===t||e.startsWith(`${t}-`)||e.endsWith(`-${t}`));return h(i)||h(r)}(t,e));return ef`<wa-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow,
				hover-bridge:base__hover-bridge
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			auto-size=${this.autoSizeVertical?"both":"horizontal"}
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
			@wa-reposition=${this.handleReposition}
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
				${t.map(e=>ef`<div
							class="popover__resizer popover__resizer--${e}"
							role="separator"
							aria-orientation=${"top"===e||"bottom"===e?"horizontal":"vertical"}
							aria-label="Resize"
							data-handle=${e}
							@pointerdown=${this.handleResizePointerDown}
						></div>`)}
			</div>
		</wa-popup>`}async show(e){if(this.open||this.suppressed){"click"===e&&"hover"===this._triggeredBy&&(this._triggeredBy=e);return}return(null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),o2.closeOthers(this),this.open=!0,o2.openPopovers.add(this),ia(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,o2.openPopovers.delete(this),ia(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus")||this.hasTrigger("focus-visible"))&&document.addEventListener("mousedown",this.handleDocumentMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleResizeChange(){this.updateResizeObserver()}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};o2.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},o2.openPopovers=new Set,o2.styles=[rT,A`
			:host {
				--hide-delay: 100ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--wa-tooltip-arrow-size);
				--arrow-color: var(--wa-tooltip-background-color);
				/* tells wa-popup to overlap the arrow with the inside edge of our 1px body
				   border, so the arrow base aligns with the body's content area instead of
				   sitting on top of the border line */
				--popup-border-width: 1px;
			}

			.popover::part(popup) {
				z-index: var(--wa-z-index-tooltip);
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover__body {
				display: block;
				width: fit-content;
				min-width: 0;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--wa-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--wa-tooltip-background-color);
				font-family: var(--wa-tooltip-font-family);
				font-size: var(--wa-tooltip-font-size);
				font-weight: var(--wa-tooltip-font-weight);
				line-height: var(--wa-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--wa-tooltip-color);
				padding: var(--wa-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				overflow: hidden;
				pointer-events: all;
			}

			:host([auto-size-vertical]) .popover__body {
				max-height: var(--auto-size-available-height);
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}

			:host([resize]) .popover__body {
				position: relative;
			}

			.popover__resizer {
				position: absolute;
				background-color: transparent;
				transition: background-color 0.1s ease-out;
				touch-action: none;
				z-index: 1;
			}

			/* Edges — 4px thick bars */
			.popover__resizer--top {
				top: 0;
				left: 0;
				right: 0;
				height: 4px;
				cursor: ns-resize;
			}
			.popover__resizer--right {
				top: 0;
				right: 0;
				bottom: 0;
				width: 4px;
				cursor: ew-resize;
			}
			.popover__resizer--bottom {
				left: 0;
				right: 0;
				bottom: 0;
				height: 4px;
				cursor: ns-resize;
			}
			.popover__resizer--left {
				top: 0;
				left: 0;
				bottom: 0;
				width: 4px;
				cursor: ew-resize;
			}

			/* Corners — 12px squares, layered above edges */
			.popover__resizer--top-left,
			.popover__resizer--top-right,
			.popover__resizer--bottom-left,
			.popover__resizer--bottom-right {
				width: 12px;
				height: 12px;
				z-index: 2;
			}
			.popover__resizer--top-left {
				top: 0;
				left: 0;
				cursor: nwse-resize;
			}
			.popover__resizer--top-right {
				top: 0;
				right: 0;
				cursor: nesw-resize;
			}
			.popover__resizer--bottom-left {
				bottom: 0;
				left: 0;
				cursor: nesw-resize;
			}
			.popover__resizer--bottom-right {
				bottom: 0;
				right: 0;
				cursor: nwse-resize;
			}

			/* Extended hit area for easier grabbing on edges */
			.popover__resizer--top::after,
			.popover__resizer--right::after,
			.popover__resizer--bottom::after,
			.popover__resizer--left::after {
				content: '';
				position: absolute;
			}
			.popover__resizer--top::after {
				left: 0;
				right: 0;
				top: -4px;
				bottom: -2px;
			}
			.popover__resizer--right::after {
				top: 0;
				bottom: 0;
				left: -2px;
				right: -4px;
			}
			.popover__resizer--bottom::after {
				left: 0;
				right: 0;
				top: -2px;
				bottom: -4px;
			}
			.popover__resizer--left::after {
				top: 0;
				bottom: 0;
				left: -4px;
				right: -2px;
			}

			.popover__resizer:hover,
			:host([dragging]) .popover__resizer--active {
				transition-delay: 0.2s;
				background-color: var(--vscode-sash-hoverBorder, var(--vscode-focusBorder));
			}
			:host([dragging]) .popover__resizer--active {
				transition-delay: 0s;
			}

			/* Override scrollbar thumb to not inherit border-color from the popover
			   body's visible border, which conflicts with the scrollableBase trick */
			.popover__body::-webkit-scrollbar-thumb {
				border-color: transparent;
			}
			:host(:hover) .popover__body::-webkit-scrollbar-thumb,
			:host(:focus-within) .popover__body::-webkit-scrollbar-thumb {
				border-color: var(--vscode-scrollbarSlider-background);
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--wa-tooltip-padding: var(--wa-spacing-2x-small);
				--wa-tooltip-font-size: var(--vscode-font-size);
				--wa-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			[slot='anchor'] {
				width: var(--gl-popover-anchor-width, fit-content);
				max-width: 100%;
				overflow: hidden;
			}

			/* .popover::part(hover-bridge) {
				background: tomato;
				opacity: 0.5;
				z-index: 10000000000;
			} */
		`],o0([ej("#popover")],o2.prototype,"body",2),o0([ej("wa-popup")],o2.prototype,"popup",2),o0([eP({reflect:!0})],o2.prototype,"placement",2),o0([eP({type:Object})],o2.prototype,"anchor",2),o0([eP({reflect:!0,type:Boolean})],o2.prototype,"disabled",2),o0([eP({type:Number})],o2.prototype,"distance",2),o0([eP({reflect:!0,type:Boolean})],o2.prototype,"open",2),o0([eP({reflect:!0,type:Boolean})],o2.prototype,"arrow",2),o0([eP({reflect:!0,type:Boolean,attribute:"auto-size-vertical"})],o2.prototype,"autoSizeVertical",2),o0([eP({reflect:!0})],o2.prototype,"resize",2),o0([eP({type:Number})],o2.prototype,"skidding",2),o0([eP()],o2.prototype,"trigger",2),o0([eP({type:Boolean})],o2.prototype,"hoist",2),o0([eP({reflect:!0})],o2.prototype,"appearance",2),o0([eR()],o2.prototype,"suppressed",2),o0([eR()],o2.prototype,"_resolvedPlacement",2),o0([tW("open",{afterFirstUpdate:!0})],o2.prototype,"handleOpenChange",1),o0([tW(["distance","placement","skidding"])],o2.prototype,"handleOptionsChange",1),o0([tW("resize",{afterFirstUpdate:!0})],o2.prototype,"handleResizeChange",1),o0([tW("disabled")],o2.prototype,"handleDisabledChange",1),o2=o0([eT("gl-popover")],o2);let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ey,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ey||null==e)return this._t=void 0,this.it=e;if(e===e_)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let o4=tv(unsafe_html_e);var o5=Object.defineProperty,o3=Object.getOwnPropertyDescriptor,o8=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?o3(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&o5(t,i,s),s};let o6=0,o7=[],o9=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.showDelay=500,this.hideDelay=0,this.suppressed=!1,this.open=!1,this.bodyId=`gl-tooltip-${++o6}`,this.onAnchorSlotChange=e=>{let t=e.target.assignedElements({flatten:!0})[0];t!==this.anchorEl&&(this.detachAnchor(),this.attachAnchor(t))},this.onDocumentKeyDown=e=>{"Escape"===e.key&&this.open&&o7.at(-1)===this&&(e.preventDefault(),e.stopPropagation(),this.open=!1)},this.onMouseOver=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!0},this.showDelay))},this.onMouseOut=()=>{this.anchorEl?.matches(":hover")||this.matches(":hover")||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!1},this.hideDelay))},this.onFocusIn=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.open=!0)},this.onFocusOut=()=>{clearTimeout(this.hoverTimeout),this.open=!1},this.onMouseDown=e=>{this.suppressed=!0,this.open=!1},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.open=!1},this.onDragEnd=e=>{this.suppressed=!1},this.onClick=e=>{this.hideOnClick&&(this.open=!1)}}connectedCallback(){super.connectedCallback?.(),this.eventController=new AbortController;let{signal:e}=this.eventController;this.addEventListener("mouseover",this.onMouseOver,{signal:e}),this.addEventListener("mouseout",this.onMouseOut,{signal:e}),this.addEventListener("focusin",this.onFocusIn,{signal:e}),this.addEventListener("focusout",this.onFocusOut,{signal:e}),this.addEventListener("mousedown",this.onMouseDown,{signal:e}),this.addEventListener("click",this.onClick,{signal:e}),window.addEventListener("mouseup",this.onMouseUp,{signal:e}),window.addEventListener("dragstart",this.onDragStart,{capture:!0,signal:e}),window.addEventListener("dragend",this.onDragEnd,{capture:!0,signal:e})}disconnectedCallback(){this.eventController?.abort(),this.eventController=void 0,this.detachAnchor(),this.unregisterDismissible(),clearTimeout(this.hoverTimeout),super.disconnectedCallback?.()}updated(e){e.has("open")&&(this.open?this.registerDismissible():this.unregisterDismissible()),e.has("disabled")&&this.disabled&&this.open&&(this.open=!1)}attachAnchor(e){null!=e&&(this.anchorEl=e,this.addAriaDescribedBy(e,this.bodyId))}detachAnchor(){null!=this.anchorEl&&(this.removeAriaDescribedBy(this.anchorEl,this.bodyId),this.anchorEl=void 0)}addAriaDescribedBy(e,t){let i=(e.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean);i.includes(t)||(i.push(t),e.setAttribute("aria-describedby",i.join(" ")))}removeAriaDescribedBy(e,t){let i=(e.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean).filter(e=>e!==t);0===i.length?e.removeAttribute("aria-describedby"):e.setAttribute("aria-describedby",i.join(" "))}registerDismissible(){o7.includes(this)||(o7.push(this),document.addEventListener("keydown",this.onDocumentKeyDown,{signal:this.eventController?.signal}))}unregisterDismissible(){let e=o7.indexOf(this);-1!==e&&o7.splice(e,1),document.removeEventListener("keydown",this.onDocumentKeyDown)}async hide(){this.open=!1,await this.updateComplete}async show(){this.disabled||this.suppressed||(this.open=!0,await this.updateComplete)}render(){var e;return ef`<wa-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="tooltip"
			placement=${this.placement}
			distance=${this.distance}
			?active=${this.open&&!this.disabled&&!this.suppressed}
			flip
			flip-padding="3"
			shift
			shift-padding="3"
			auto-size="horizontal"
			auto-size-padding="3"
			arrow
			hover-bridge
		>
			<slot slot="anchor" @slotchange=${this.onAnchorSlotChange}></slot>
			<div
				part="body"
				id=${this.bodyId}
				class="tooltip__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content">${e=this.content,e?.includes(`
`)?o4(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</wa-popup>`}};o9.styles=A`
		:host {
			--max-width: var(--gl-tooltip-max-width, 320px);

			display: contents;
			max-width: inherit;
			overflow: inherit;
			text-transform: var(--gl-tooltip-text-transform, none);
		}

		.tooltip {
			--arrow-size: var(--wa-tooltip-arrow-size);
			--arrow-color: var(--wa-tooltip-background-color);
			/* tells wa-popup to overlap the arrow with the inside edge of our 1px body
			   border, so the arrow base aligns with the body's content area instead of
			   sitting on top of the border line */
			--popup-border-width: 1px;
		}

		.tooltip::part(popup) {
			z-index: var(--wa-z-index-tooltip);
			pointer-events: none;
		}

		/* Suppress the corner-flash that happens on first open: wa-popup adds the popup
		   to the DOM with active=true a microtask BEFORE floating-ui computes its position,
		   so the popup briefly renders at top:0/left:0 (page corner) for one paint frame.
		   wa-popup sets data-current-placement once positioned — gate visibility on that
		   so the user never sees the unpositioned frame. Verified live: the unpositioned
		   frame lands at (0,0) ~1ms before the positioned frame lands at the anchor. */
		.tooltip:not([data-current-placement]) .tooltip__body {
			visibility: hidden;
		}

		.tooltip__body {
			max-width: min(var(--auto-size-available-width, 100vw), var(--max-width));
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--wa-tooltip-border-radius);
			background-color: var(--wa-tooltip-background-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			color: var(--wa-tooltip-color);
			font-family: var(--wa-tooltip-font-family);
			font-size: var(--wa-tooltip-font-size);
			font-weight: var(--wa-tooltip-font-weight);
			line-height: var(--wa-tooltip-line-height);
			padding: var(--wa-tooltip-padding);
			text-align: start;
			text-transform: var(--gl-tooltip-text-transform, none);
			white-space: normal;
			user-select: none;
			-webkit-user-select: none;
		}

		/* Style hr inside the tooltip body. The slot[name=content] selector matches
		   fallback content, which is where handleUnsafeOverlayContent puts the hr it
		   generates from "\n\n" in a .content string (e.g. gl-copy-container's tooltip).
		   Slotted content from consumers lives in their light DOM and isn't reachable
		   from here — those consumers need their own [slot=content] hr rule. */
		slot[name='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
			margin: 0.4rem 0;
		}
	`,o8([eP()],o9.prototype,"content",2),o8([eP({reflect:!0})],o9.prototype,"placement",2),o8([eP({type:Boolean})],o9.prototype,"disabled",2),o8([eP({type:Number})],o9.prototype,"distance",2),o8([eP({type:Number,attribute:"show-delay"})],o9.prototype,"showDelay",2),o8([eP({type:Number,attribute:"hide-delay"})],o9.prototype,"hideDelay",2),o8([eP({type:Boolean,attribute:"hide-on-click"})],o9.prototype,"hideOnClick",2),o8([ej("wa-popup")],o9.prototype,"popup",2),o8([eR()],o9.prototype,"suppressed",2),o8([eR()],o9.prototype,"open",2),o9=o8([eT("gl-tooltip")],o9);var se=Object.defineProperty,st=Object.getOwnPropertyDescriptor,si=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?st(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&se(t,i,s),s};let sr=class extends lit_element_i{constructor(){super(...arguments),this.label="Breadcrumb",this.collapse="outer-in",this.density="normal",this._items=[],this._hiddenIndices=new Set,this.handleSlotChange=()=>{let e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>"gl-breadcrumb-item"===e.tagName.toLowerCase()),t=[];this._items=e,e.forEach((e,i)=>{t[i]=this.getEffectivePriority(e,i)});let i=t.length>0?Math.max(...t):0,r="outer-in"===this.collapse&&e.length>2;e.forEach((o,s)=>{s===e.length-1?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current"),o.style.order=String(2*s),r&&t[s]!==i?o.style.flexShrink="0":o.style.flexShrink="",o.setAttribute("density",this.density)}),this.scheduleRecompute()}}connectedCallback(){super.connectedCallback?.(),this.resizeObserver=new ResizeObserver(()=>this.scheduleRecompute()),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=void 0,null!=this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0),super.disconnectedCallback?.()}updated(e){e.has("collapse")&&this.scheduleRecompute(),e.has("density")&&this.applyDensityToItems()}applyDensityToItems(){for(let e of this._items)e.setAttribute("density",this.density)}scheduleRecompute(){null==this.rafId&&(this.rafId=requestAnimationFrame(()=>{this.rafId=void 0,this.recompute()}))}async recompute(){if("outer-in"!==this.collapse||this._items.length<=2){this._items.some(e=>e.hasAttribute("compact")||e.hasAttribute("hidden"))&&this.applyState(new Set,new Set);return}if(this.applyState(new Set,new Set),await this.updateComplete,this.offsetHeight,this.scrollWidth<=this.clientWidth+1)return;let e=this.getPriorityTiers();if(e.length<=1)return;let t=new Set,i=new Set;for(let r=0;r<e.length-1;r++){for(let o of e[r])this._items[o].icon?t.add(o):i.add(o);if(this.absorbFoldTargets(t,i),this.applyState(t,i),await this.updateComplete,this.offsetHeight,this.scrollWidth<=this.clientWidth+1)return}}absorbFoldTargets(e,t){for(let i of new Set(e)){if(i>=this._items.length-1||!t.has(i+1))continue;let r=this._items[i];r.foldable&&r.icon&&(e.delete(i),t.add(i))}}getPriorityTiers(){let e=new Map;return this._items.forEach((t,i)=>{let r=this.getEffectivePriority(t,i);e.has(r)||e.set(r,[]),e.get(r).push(i)}),[...e.entries()].sort(([e],[t])=>e-t).map(([,e])=>e)}getEffectivePriority(e,t){return null!=e.priority?e.priority:+(0===t||t===this._items.length-1)}applyState(e,t){this._items.forEach((i,r)=>{t.has(r)?(i.setAttribute("hidden",""),i.removeAttribute("compact")):e.has(r)?(i.setAttribute("compact",""),i.removeAttribute("hidden")):(i.removeAttribute("hidden"),i.removeAttribute("compact"))}),this._hiddenIndices=new Set(t)}getHiddenRuns(){let e=[],t=null;return this._items.forEach((i,r)=>{this._hiddenIndices.has(r)?(null==t&&(t={startIdx:r,items:[]},e.push(t)),t.items.push(i)):t=null}),e}render(){let e=this.getHiddenRuns();return ef`<nav part="base" aria-label=${this.label}>
			<ol>
				<slot @slotchange=${this.handleSlotChange}></slot>
				${e.map(e=>this.renderOverflowIndicator(e))}
			</ol>
		</nav>`}renderOverflowIndicator(e){let t=2*e.startIdx-1,i=e.items[0],r=i?.foldable&&i.icon?i.icon:void 0;return ef`<span class="overflow-wrapper" style=${rm({order:String(t)})}>
			<gl-popover appearance="menu" trigger="click focus" placement="bottom-start" .arrow=${!1} distance="0">
				<gl-breadcrumb-item
					slot="anchor"
					appearance="ellipsis"
					interactive
					icon=${r??ey}
				></gl-breadcrumb-item>
				<div slot="content" class="overflow-menu">
					${e.items.map(e=>this.renderHiddenItemMenu(e))}
				</div>
			</gl-popover>
		</span>`}renderHiddenItemMenu(e){let t=e.label||e.labelText||"breadcrumb",i=e.icon||("segment"===e.appearance?"folder":void 0),r=e.tooltipNode,o=ef`<button class="overflow-menu-item" type="button" @click=${()=>e.click()}>
			${i?ef`<code-icon icon=${i}></code-icon>`:ey}
			<span class="overflow-menu-item-label">${t}</span>
		</button>`;return null==r?o:ef`<gl-tooltip placement="right" distance="8">
			${o}
			<span
				slot="content"
				${rd(e=>{e instanceof HTMLElement&&e.replaceChildren(r.cloneNode(!0))})}
			></span>
		</gl-tooltip>`}};sr.styles=A`
		* {
			box-sizing: border-box;
		}

		:host {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			gap: 0;
			overflow: hidden;
			/* Use VS Code's default font-size by default; density="compact" shrinks it. */
			font-size: var(--vscode-font-size);
			line-height: 1.4;
			color: var(--vscode-descriptionForeground);
			width: 100%;

			--gl-breadcrumb-separator-content: '\\eab6'; /* chevron-right codicon */
			--gl-breadcrumb-separator-font: codicon;
			--gl-breadcrumb-separator-size: 1.1rem;
		}

		:host([density='compact']) {
			font-size: 1.2rem;
		}

		nav {
			display: contents;
		}

		ol {
			display: contents;
			list-style: none;
			margin: 0;
			padding: 0;
		}

		.overflow-wrapper {
			display: flex;
			align-items: center;
			min-width: 0;
			flex-shrink: 0;
		}

		.overflow-menu {
			display: flex;
			flex-direction: column;
			min-width: 16rem;
			max-width: 32rem;
			padding: 0.4rem 0.2rem;
			gap: 0.1rem;
		}

		/* Style the cloned tooltip content from each menu row's tooltip — the source
		   markup is text + hr + path, and the default browser hr style looks wrong
		   in our dark tooltip body. */
		.overflow-menu gl-tooltip hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
			margin: 0.4rem 0;
		}

		/* Bump tooltip z-index above the popover menu's own stacking context so
		   menu-row tooltips don't get clipped behind webview content. */
		.overflow-menu gl-tooltip {
			--wa-z-index-tooltip: 9999;
		}

		.overflow-menu-item {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.6rem;
			padding: 0.4rem 0.8rem;
			background: none;
			border: none;
			border-radius: 0.3rem;
			color: var(--vscode-foreground);
			font: inherit;
			text-align: start;
			cursor: pointer;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.overflow-menu-item:hover,
		.overflow-menu-item:focus-visible {
			background: var(--vscode-list-hoverBackground);
			outline: none;
		}

		.overflow-menu-item-label {
			overflow: hidden;
			text-overflow: ellipsis;
			min-width: 0;
		}
	`,si([eP()],sr.prototype,"label",2),si([eP({reflect:!0})],sr.prototype,"collapse",2),si([eP({reflect:!0})],sr.prototype,"density",2),si([ej("slot")],sr.prototype,"defaultSlot",2),si([eR()],sr.prototype,"_items",2),si([eR()],sr.prototype,"_hiddenIndices",2),sr=si([eT("gl-breadcrumbs")],sr);let so=class extends lit_element_i{constructor(){super(...arguments),this.appearance="default",this.interactive=!1,this.foldable=!1,this._shrink=1,this._truncated=!1,this._hasTooltipSlot=!1,this._labelText="",this.onLabelSlotChange=e=>{let t=e.target.assignedNodes({flatten:!0});this._labelText=t.map(e=>e.textContent??"").join("").trim(),t.some(e=>{if(e.nodeType!==Node.ELEMENT_NODE)return!1;let t=e.tagName.toLowerCase();return"gl-repo-button-group"===t||"gl-ref-button"===t})?this.setAttribute("has-widget",""):this.removeAttribute("has-widget"),this.updateTruncated()},this.onTooltipSlotChange=e=>{let t=e.target;this._hasTooltipSlot=t.assignedNodes({flatten:!0}).some(e=>e.nodeType!==Node.TEXT_NODE||(e.textContent??"").trim().length>0)}}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}get labelText(){return this._labelText}get tooltipNode(){return this.querySelector(':scope > [slot="tooltip"]')}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role","listitem")}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=void 0,super.disconnectedCallback?.()}firstUpdated(){this.labelEl&&(this.resizeObserver=new ResizeObserver(()=>this.updateTruncated()),this.resizeObserver.observe(this.labelEl),this.updateTruncated())}updateTruncated(){let e=this.labelEl;e&&(this._truncated=e.scrollWidth>e.clientWidth)}render(){let{_truncated:e,_hasTooltipSlot:t,_labelText:i,interactive:r}=this;if("ellipsis"===this.appearance){let e=this.icon?ef`<code-icon class="icon" icon=${this.icon}></code-icon>
						<span class="breadcrumb-label" aria-hidden="true">…</span>
						<span class="sr-only">Show hidden breadcrumbs</span>`:ef`<span class="breadcrumb-label" aria-hidden="true">…</span>
						<span class="sr-only">Show hidden breadcrumbs</span>`,t=ef`<span class="separator" aria-hidden="true"></span>`;return r?ef`<button class="breadcrumb-item" type="button">
					${e}${t}
				</button>`:ef`<span class="breadcrumb-item">${e}${t}</span>`}let o=ef`${this.icon?ef`<code-icon class="icon" icon=${this.icon}></code-icon>`:ey}
			<slot name="start"></slot>
			<gl-tooltip class="breadcrumb-tooltip" ?disabled=${!(t||e)} placement="bottom" distance="6">
				<span class="breadcrumb-label" aria-label=${e?i:ey}>
					<slot @slotchange=${this.onLabelSlotChange}></slot>
				</span>
				<span slot="content">
					<slot name="tooltip" @slotchange=${this.onTooltipSlotChange}></slot>
					${!t&&e?i:ey}
				</span>
			</gl-tooltip>
			<slot name="end"><span class="separator" aria-hidden="true"></span></slot> `;return r?ef`<button class="breadcrumb-item" type="button">${o}</button>`:ef`<span class="breadcrumb-item"> ${o} </span>`}};so.styles=[r_,A`
			* {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				align-items: center;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				flex-shrink: var(--gl-breadcrumb-item-shrink, 1);
				color: var(--vscode-descriptionForeground);
				/* Defensive — section headings (e.g. Home) apply uppercase to their
				   contents; reset here so crumbs always render in natural casing. */
				text-transform: none;
			}

			/* density="compact" — set on the host by gl-breadcrumbs (propagated to each
			   child on slotchange / density change). Shrinks icons and caps slotted
			   toolbar widget heights so the row stays tight. The inner gl-button's
			   --button-padding/--button-line-height live in compactBreadcrumbsConsumerStyles
			   (must be in consumer scope to cross the shadow boundary). */
			:host([has-widget]) .breadcrumb-label {
				overflow: visible;
			}
			:host([has-widget]) .separator {
				margin-left: 0;
			}

			:host([density='compact']) {
				--code-icon-size: 1.3rem;
				--gl-file-icon-size: 1.3rem;
			}

			:host([density='compact']) ::slotted(gl-ref-button),
			:host([density='compact']) ::slotted(gl-repo-button-group) {
				max-height: 1.6rem;
			}

			:host([icon]) {
				min-width: calc(1.3rem + 0.6rem);
			}

			:host([hidden]) {
				display: none;
			}

			:host(:hover),
			:host(:focus-within) {
				flex-shrink: 0;
			}

			:host([aria-current='page']) {
				color: var(--vscode-foreground);
				font-weight: 600;
			}

			:host([appearance='segment']) {
				min-width: 0;
			}

			:host([appearance='ellipsis']) {
				min-width: 0;
				flex-shrink: 0;
				user-select: none;
			}

			.breadcrumb-item {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				width: 100%;
				/* Horizontal padding matches HALF the inside gap so that the visual
				   space between elements is uniform — inside a crumb, gap supplies
				   0.4rem between content and chevron; across crumbs, this item's
				   padding-right (0.2rem) plus the next item's padding-left (0.2rem)
				   sums to the same 0.4rem. */
				padding: 0.1rem 0.2rem;
				/* Fixed min-height keeps every crumb the same height regardless of
				   slotted content size or collapsed state — without this, a collapsed
				   icon-only crumb is shorter than a text crumb. */
				min-height: 1.8rem;
				border-radius: 0.3rem;
				cursor: default;
				background: none;
				border: none;
				color: inherit;
				font: inherit;
				text-align: start;
			}

			button.breadcrumb-item {
				cursor: pointer;
			}

			button.breadcrumb-item:focus {
				outline: none;
			}

			:host(:hover) .breadcrumb-item,
			:host(:focus-within) .breadcrumb-item {
				background: var(--vscode-toolbar-hoverBackground);
				color: var(--vscode-foreground);
			}

			.icon {
				flex-shrink: 0;
				z-index: 2;
			}

			.breadcrumb-label {
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				min-width: 0;
				max-width: 100%;
				/* Generous line-height (1.4 ratio) ensures the label's line-box accommodates
				   both descenders for plain-text crumbs AND the natural height of slotted
				   gl-button widgets (gl-ref-button, gl-repo-button-group) without clipping
				   them at overflow: hidden. With symmetric leading, the text x-height visual
				   center sits at the line-box geometric center, aligning with centered icons
				   under align-items: center. */
				line-height: 1.4;
				padding: 0;
			}

			/* Use :host(:hover) instead of .breadcrumb-item:hover so hovering anywhere on the
			   host (not just the inner button) reveals the label when [compact] is auto-set
			   by the breadcrumbs host on overflow. */
			:host([compact]:not(:hover):not(:focus-within)) .breadcrumb-label,
			:host([appearance='ellipsis'][icon]:not(:hover):not(:focus-within)) .breadcrumb-label {
				max-width: 0;
				padding: 0;
				margin: 0;
			}

			.separator {
				display: inline-flex;
				flex-shrink: 0;
				align-items: center;
				justify-content: center;
				margin-left: -0.2rem;
				width: var(--gl-breadcrumb-separator-size, 1rem);
				height: var(--gl-breadcrumb-separator-size, 1rem);
				/* No additional margin — let the breadcrumb-item's gap supply the spacing
				   on both sides (gap before the separator + the next item's padding-left
				   after). Keeps spacing uniform throughout the chain. */
				color: var(--vscode-descriptionForeground);
				opacity: 0.5;
				user-select: none;
				-webkit-user-select: none;
				transition:
					opacity 120ms ease,
					color 120ms ease;
			}

			.separator::before {
				content: var(--gl-breadcrumb-separator-content, '\\eab6');
				font-family: var(--gl-breadcrumb-separator-font, codicon);
				font-size: var(--gl-breadcrumb-separator-size, 1rem);
				line-height: 1;
			}

			:host(:hover) .separator,
			:host(:focus-within) .separator {
				opacity: 1;
				color: var(--vscode-foreground);
			}

			:host([aria-current='page']) .separator {
				display: none;
			}

			.sr-only {
				${rb}
			}
		`],si([eP({reflect:!0})],so.prototype,"appearance",2),si([eP({type:Boolean,reflect:!0})],so.prototype,"interactive",2),si([eP({type:Boolean,reflect:!0})],so.prototype,"foldable",2),si([eP({type:Number,reflect:!0})],so.prototype,"priority",2),si([eP()],so.prototype,"icon",2),si([eP()],so.prototype,"label",2),si([eP({type:Number})],so.prototype,"shrink",1),si([eR()],so.prototype,"_truncated",2),si([eR()],so.prototype,"_hasTooltipSlot",2),si([eR()],so.prototype,"_labelText",2),si([ej(".breadcrumb-label")],so.prototype,"labelEl",2),so=si([eT("gl-breadcrumb-item")],so);let ss=A`
	gl-breadcrumbs[density='compact'] gl-breadcrumb-item gl-ref-button::part(button),
	gl-breadcrumbs[density='compact'] gl-breadcrumb-item gl-repo-button-group::part(provider-icon),
	gl-breadcrumbs[density='compact'] gl-breadcrumb-item gl-repo-button-group::part(label) {
		--button-padding: 0 0.3rem;
		--button-line-height: 1.2;
		border: 0;
	}
`,sn=A`
	:host {
		--gate-background: var(--vscode-editorWidget-background);
		--gate-foreground: var(--vscode-editorWidget-foreground);
		--gate-border: var(--vscode-editorWidget-border);
		--gate-border-size: 0.2rem;

		position: absolute;
		inset: 0;

		box-sizing: border-box;
	}

	::slotted(p) {
		margin: revert !important;
	}

	::slotted(p:first-child) {
		margin-top: 0 !important;
	}

	/* The gate renders as a native modal <dialog> promoted to the top layer (via showModal),
			   so it covers the entire webview viewport. These rules reset the UA dialog styles. */
	dialog {
		--section-foreground: var(--gate-foreground);
		--section-background: var(--gate-background);
		--section-border-color: var(--gate-border);

		--link-foreground: var(--vscode-textLink-foreground);
		--link-foreground-active: var(--vscode-textLink-activeForeground);

		position: fixed;
		inset: 0;
		width: 100%;
		max-width: none;
		height: 100%;
		max-height: none;
		margin: 0;
		padding: 2.4rem 0;

		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		overflow: hidden;

		color: var(--section-foreground);
		/* Gradient border that follows border-radius (border-image ignores radius): a transparent
		   real border, a solid fill clipped to padding-box, and the brand gradient clipped to
		   border-box so it only shows through the border ring. */
		border: var(--gate-border-size) solid transparent;
		border-radius: 1.2rem;
		background:
			linear-gradient(var(--section-background), var(--section-background)) padding-box,
			var(--gl-gradient-brand) border-box;

		box-shadow: 0 0 0 1px var(--section-border-color);
	}

	/* Background-painted borders are dropped in forced-colors mode — restore a solid border. */
	@media (forced-colors: active) {
		dialog {
			border-color: var(--section-border-color);
		}
	}

	dialog::backdrop {
		background: transparent;
		backdrop-filter: blur(3px) saturate(0.8);
	}

	.content {
		padding-inline: 2.4rem;
		flex: 1 1 auto;
		min-height: 0;
		overflow: auto;

		display: flex;
		flex-direction: column;
	}

	:host-context(body[data-placement='editor']) dialog,
	:host([appearance='alert']) dialog {
		--link-decoration-default: underline;
		--link-foreground: color-mix(in srgb, var(--section-foreground) 50%, var(--vscode-textLink-foreground));
		--link-foreground-active: color-mix(
			in srgb,
			var(--section-foreground) 50%,
			var(--vscode-textLink-activeForeground)
		);

		inset: 0;
		width: max-content;
		max-width: 600px;
		height: max-content;
		max-height: calc(100% - 0.4rem);
		margin: auto;
	}

	:host-context(body[data-placement='editor']) .content ::slotted(gl-button),
	:host([appearance='alert']) .content ::slotted(gl-button) {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.switch-repos {
		position: absolute;
		top: 0.6rem;
		right: 0.6rem;
		z-index: 1;

		opacity: 0.6;
	}

	.switch-repos:hover,
	.switch-repos:focus-within {
		opacity: 1;
	}
`,sa=A`
	.icon-cube {
		--icon-color: var(--vscode-textLink-foreground);
		--icon-background: color-mix(in srgb, var(--icon-color) 10%, transparent);
		--icon-size: 1.4em;

		flex: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: calc(var(--icon-size) * 1.6);
		aspect-ratio: 1;
		background: var(--icon-background);
		border-radius: 0.6rem;

		code-icon {
			font-size: var(--icon-size);
			color: var(--icon-color);
		}
	}

	.feature {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-block-end: 1.2rem;
		line-height: 1.5;
		color: var(--color-foreground--65);
	}

	.feature__header {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 1.2rem;
	}

	.feature__feature-icon {
		/* Fixed light glyph: the brand gradient is dark in every theme, so a theme-driven foreground
		   (near-black on light themes) would fail contrast against it. */
		--icon-color: #fff;
		--icon-background: var(--gl-gradient-brand);
	}

	.feature__title {
		display: flex;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin: 0;
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 1.2;
		color: var(--color-foreground);
	}

	.feature__title gl-feature-badge {
		margin: 0;
		transform: translateY(-0.4rem);
	}

	.feature__lede {
		margin: 0;
	}

	.feature__sub {
		margin: 0;
		font-size: 1.2rem;
	}

	.list {
		list-style: none;
		margin-block: 0.6rem;
		margin-inline: 0;
		padding-inline-start: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.6rem;
	}

	.list__item {
		display: flex;
		align-items: flex-start;
		gap: 1.2rem;
	}

	.list__copy {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		font-size: 1.1rem;
		text-wrap: pretty;

		strong {
			font-size: 1.2rem;
			color: var(--color-foreground);
		}
	}
`;let VsCodeStorage=class VsCodeStorage{constructor(){this._api=i5()}get(){return this._api.getState()}set(e){this._api.setState(e)}};function sl(){return{storage:new VsCodeStorage,createEndpoint:()=>{let e,t;return e=i5(),t=new Map,{postMessage:function(t,i){let r={[iY]:!0,payload:iX.encode(JSON.stringify(t))};e.postMessage(r)},addEventListener:function(e,i){if("message"!==e)return;let r=e=>{let t=e.data;if(!iG(t))return;let{payload:r}=t;i(new MessageEvent("message",{data:r instanceof Uint8Array||r instanceof ArrayBuffer?JSON.parse(iZ.decode(r)):r,origin:e.origin,lastEventId:e.lastEventId,source:e.source,ports:[...e.ports]}))};t.set(i,r),window.addEventListener("message",r)},removeEventListener:function(e,i){if("message"!==e)return;let r=t.get(i);r&&(window.removeEventListener("message",r),t.delete(i))},dispose:function(){for(let e of t.values())window.removeEventListener("message",e);t.clear()}}}}}function sh(e){return null!=e&&"object"==typeof e&&(e instanceof Error||"string"==typeof e.name&&"string"==typeof e.message)}function sc(e){return e.stack??`${e.name}: ${e.message}`}let sd="__st__",sp=Symbol(),su=Symbol(),sg=()=>{},sm=Symbol(),sb=Symbol();function sf(e){if(e instanceof Error){let t={name:e.name,message:e.message};return void 0!==e.stack&&(t.stack=e.stack),t}return{name:"Error",message:String(e)}}function sv(e){let t=Error(e.message);return t.name=e.name,t.stack=e.stack,t}Symbol(),new WeakMap;let NonCloneableError=class NonCloneableError extends Error{valueType;path;constructor(e,t){super(`The nested ${e} at "${t}" cannot be cloned. Use nestedProxies: true.`),this.valueType=e,this.path=t,this.name="NonCloneableError"}};let Connection=class Connection{#s;#n;#a;#l;#h;#c=new Map;#d=0;#p=1;#u=!1;#g=new Map;#m=new WeakMap;#b=new Map;#f=new WeakMap;#v;#_=0;#y=new Map;#w=new Map;#x;#k=[];#$=!1;constructor(e,t={}){for(let i of(this.#s=e,this.#n=t.nestedProxies??!1,this.#a=t.debug??!1,this.#l=t.logger,this.#h=t.handlers??[],this.#x=t.batching??!1,this.#h))this.#c.set(i.wireType,i),"function"==typeof i.connect&&i.connect({sendMessage:e=>{this.#C(i.wireType,e)}});this.#v=new FinalizationRegistry(({id:e,session:t})=>{t===this.#_&&(this.#b.delete(e),this.#E({type:"release",id:e}))}),e.addEventListener("message",this.#S)}#E(e,t){if(!this.#u){if(!this.#x)return void this.#s.postMessage(e,t);this.#k.push({message:e,transfers:t}),this.#$||(this.#$=!0,queueMicrotask(()=>this.#A()))}}#A(){this.#$=!1;let e=this.#k;if(this.#k=[],0===e.length)return;let t=t=>{let i=t instanceof Error?t:Error(String(t));for(let{message:t}of e)if("call"===t.type&&void 0!==t.id){let e=this.#y.get(t.id);e&&(this.#y.delete(t.id),e.reject(i))}};if(1===e.length){let{message:i,transfers:r}=e[0];try{this.#s.postMessage(i,r)}catch(e){t(e)}}else{let i=[],r=[];for(let{message:t,transfers:o}of e)r.push(t),o&&i.push(...o);try{this.#s.postMessage({type:"batch",messages:r},i.length>0?i:void 0)}catch(e){t(e)}}}#C(e,t){let i=[];this.#E({type:"handler",wireType:e,payload:this.#T(t,"",i)},i)}#M(){let e=this.#d;return this.#d+=this.#p,e}expose(e){this.#p=2,this.#P(e),this.#E({type:"return",id:0,value:this.#R(e)})}#z(e){this.#k=[],this.#$=!1;let t=Error(e);for(let{reject:e}of this.#y.values())e(t);for(let{reject:e}of(this.#y.clear(),this.#w.values()))e(t);this.#w.clear()}close(){for(let e of(this.#u=!0,this.#z("Connection closed"),this.#s.removeEventListener("message",this.#S),this.#h))e.disconnect?.()}reset(e){for(let e of(this.#z("Connection reset"),this.#g.clear(),this.#m=new WeakMap,this.#b.clear(),this.#f=new WeakMap,this.#_++,this.#d=0,this.#p=1,this.#h))e.disconnect?.();for(let t of(void 0!==e&&e!==this.#s?(this.#u||this.#s.removeEventListener("message",this.#S),this.#s=e,e.addEventListener("message",this.#S)):this.#u&&this.#s.addEventListener("message",this.#S),this.#u=!1,this.#h))"function"==typeof t.connect&&t.connect({sendMessage:e=>{this.#C(t.wireType,e)}})}#j(e){if(e!==this.#_)throw Error("Stale proxy from previous session")}waitForReady(){return this.#d=1,this.#p=2,new Promise((e,t)=>{this.#y.set(0,{resolve:e,reject:t})})}#P(e){let t=this.#m.get(e);return void 0!==t||(t=this.#M(),this.#g.set(t,e),this.#m.set(e,t)),t}#D(e){return this.#g.get(e)}#B(e){return this.#b.get(e)?.deref()}#I(e){return this.#f.get(e)}#T(e,t,i){return"object"==typeof e?.[sm]?{[sd]:"property",...e[sm]}:this.#O(e,t,i,new Map)}#R(e,t=!1){return{[sd]:"proxy",id:this.#I(e)??this.#P(e),o:t}}#O(e,t,i,r,o){if(null==e||"object"!=typeof e&&"function"!=typeof e)return e;let s=r.get(e);if(void 0!==s)return s;if(e?.[su]===!0){if(t&&this.#a&&!this.#n)throw new NonCloneableError("transfer",t);return i.includes(e.value)||i.push(e.value),r.set(e,e.value),e.value}if(e?.[sp]!==void 0){if(t&&this.#a&&!this.#n)throw new NonCloneableError("proxy",t);let i=this.#R(e[sp],e?.[sb]==="handle");return r.set(e,i),i}if("function"==typeof e){if(t&&this.#a&&!this.#n)throw new NonCloneableError("function",t);let i=this.#R(e);return r.set(e,i),i}if(void 0!==this.#I(e)){let t=this.#R(e,"__o"in e);return r.set(e,t),t}if("function"==typeof e?.then){if(t&&this.#a&&!this.#n)throw new NonCloneableError("promise",t);let i={[sd]:"promise",id:this.#L(e)};return r.set(e,i),i}if(this.#h.length>0){for(let s of this.#h)if(s.canHandle(e)){let a={toWire:(e,s)=>{let a=s?t?`${t}.${s}`:s:t;return this.#O(e,a,i,r,o)},...void 0!==o&&{callId:o}},h=s.toWire(e,a);return r.set(e,h),h}}if(!(this.#n||this.#a))return e;if(Array.isArray(e)){let s=[];r.set(e,s);for(let a=0;a<e.length;a++)s.push(this.#O(e[a],`${t}[${String(a)}]`,i,r,o));return s}let a=Object.getPrototypeOf(e);if(a===Object.prototype||null===a){let s={};for(let a of(r.set(e,s),Object.keys(e)))s[a]=this.#O(e[a],t?`${t}.${a}`:a,i,r,o);return s}return e}#N(e){return{fromWire:t=>this.#F(t,e)}}#W(e){let t=e?.[sd];if("property"===t){let t=this.#D(e.targetProxyId);if(!t)throw ReferenceError(`Proxy property target ${String(e.targetProxyId)} not found`);return t[e.property]}if("thrown"===t)throw sv(e.error);return this.#F(e,new Map)}#F(e,t){if(null===e||"object"!=typeof e)return e;let i=t.get(e);if(void 0!==i)return i;if(e?.[sd]==="proxy"){let i=this.#D(e.id);if(i){let r=e.o?{[sp]:i,[sb]:"handle",__nc:sg}:new Proxy(sg,{get:(e,t)=>{var r,o,s;let a;return t===sp?i:t===sb?"proxy":"then"!==t?(r=i,o=t,s=i[t],(a=(...e)=>{if("function"==typeof s)return Promise.resolve(s.apply(r,e));throw TypeError(`${String(o)} is not a function`)}).then=(e,t)=>Promise.resolve(s).then(e,t),a):void 0},set:(e,t,r)=>(i[t]=r,!0),apply(e,t,r){if("function"==typeof i)return Promise.resolve(i(...r));throw TypeError("Proxy target is not callable")}});return t.set(e,r),r}let r=this.#B(e.id)??this.#H(e.id,e.o);return t.set(e,r),r}if(e?.[sd]==="promise"){let{promise:i,resolve:r,reject:o}=Promise.withResolvers();return this.#w.set(e.id,{resolve:r,reject:o}),t.set(e,i),i}let r=e[sd];if("string"==typeof r){let i=this.#c.get(r);if(i?.fromWire){let r=i.fromWire(e,this.#N(t));return t.set(e,r),r}}if(!this.#n)return e;if(Array.isArray(e)){let i=[];for(let r of(t.set(e,i),e))i.push(this.#F(r,t));return i}if(Object.getPrototypeOf(e)!==Object.prototype)return e;let o={};for(let i of(t.set(e,o),Object.keys(e)))o[i]=this.#F(e[i],t);return o}#L(e){let t=this.#M();return e.then(e=>{try{let i=[],r=this.#T(e,"",i);this.#E({type:"resolve",id:t,value:r},i)}catch{this.#E({type:"reject",id:t,error:sf(Error("Failed to serialize resolved promise value"))})}},e=>{try{this.#E({type:"reject",id:t,error:sf(e)})}catch{}}),t}#H(e,t){let i=this.#B(e);if(void 0===i){let r=this.#_;i=t?{__o:sg}:new Proxy(sg,{apply:(t,i,o)=>(this.#j(r),this.#V(e,void 0,o)),get:(t,i)=>"string"==typeof i&&"then"!==i?this.#q(e,i,r):void 0,set:(t,i,o)=>{if("string"!=typeof i)return!1;this.#j(r);let s=[];return this.#U(this.#M(),e,"set",i,[this.#T(o,"",s)],s).catch(()=>{}),!0}}),this.#b.set(e,new WeakRef(i)),this.#f.set(i,e),this.#v.register(i,{id:e,session:this.#_})}return i}#q(e,t,i){let r=(...r)=>(this.#j(i),this.#V(e,t,r));return r.then=(r,o)=>(this.#j(i),this.#U(this.#M(),e,"get",t,[],[]).then(r,o)),r[sm]={targetProxyId:e,property:t},r}#U(e,t,i,r,o,s){let{promise:a,resolve:h,reject:c}=Promise.withResolvers();this.#y.set(e,{resolve:h,reject:c});try{this.#E({type:"call",id:e,target:t,action:i,method:r,args:o},s)}catch(t){this.#y.delete(e),c(t instanceof Error?t:Error(String(t)))}return a}#V(e,t,i){let r=[],o=new Map,s=this.#M();return this.#U(s,e,"call",t,i.map(e=>this.#O(e,"",r,o,s)),r)}#S=e=>{let t=e.data;if(null!=t)if("batch"===t.type)for(let e of t.messages)this.#K(e);else this.#K(t)};#K(e){switch(e.type){case"release":{let t=this.#g.get(e.id);void 0!==t&&(this.#g.delete(e.id),this.#m.delete(t));break}case"resolve":this.#Y(this.#w,e.id,e.value);break;case"reject":this.#G(this.#w,e.id,e.error);break;case"return":this.#Y(this.#y,e.id,e.value),this.#X(e.id);break;case"throw":this.#G(this.#y,e.id,e.error),this.#X(e.id);break;case"call":this.#Z(e);break;case"handler":this.#J(e.wireType,e.payload)}}#Y(e,t,i){let r=e.get(t);if(r){e.delete(t);try{r.resolve(this.#W(i))}catch(e){r.reject(e instanceof Error?e:Error(String(e)))}}}#G(e,t,i){let r=e.get(t);r&&(e.delete(t),r.reject(sv(i)))}#X(e){for(let t of this.#h)t.onCallSettle?.(e)}#J(e,t){try{let i=this.#c.get(e);if(i?.onMessage){let e=new Map;i.onMessage(this.#F(t,e),this.#N(e))}}catch(t){this.#l?.error?.(`Error in handler.onMessage for wireType "${e}":`,t)}}async #Z(e){let{id:t,target:i,method:r,args:o,action:s}=e,a=new Map,h=o.map(e=>this.#F(e,a)),c=this.#D(i);if(!c)return this.#E({type:"throw",id:t,error:{name:"ReferenceError",message:`Proxy target ${String(i)} not found`}});let p=this.#l,u=p?.debug?performance.now():0;try{let e;if("get"===s){if(void 0===r)throw TypeError("Property name required for get action");e=c[r]}else if("set"===s){if(void 0===r)throw TypeError("Property name required for set action");c[r]=h[0],e=void 0}else if(void 0===r){if("function"!=typeof c)throw TypeError("Target is not callable");e=await c(...h)}else{let t=c[r];if("function"!=typeof t)throw TypeError(`${r} is not a function`);e=await t.apply(c,h)}let i=[],o=this.#T(e,"",i);this.#E({type:"return",id:t,value:o},i),p?.debug?.(`${s} ${r??"(direct)"} completed`,{duration:performance.now()-u})}catch(e){p?.debug?.(`${s} ${r??"(direct)"} failed`,{duration:performance.now()-u,error:e}),this.#E({type:"throw",id:t,error:sf(e)})}}};let RemoteSignal=class RemoteSignal{#Q;#ee;#et;constructor(e,t,i){this.#ee=e,this.#et=i,this.#Q=new g.State(t,{[g.subtle.watched]:()=>{this.#et?.(this.#ee,!0)},[g.subtle.unwatched]:()=>{this.#et?.(this.#ee,!1)}})}get(){return this.#Q.get()}set(e){throw Error("RemoteSignal is read-only. The signal can only be modified on the sender side.")}get signalId(){return this.#ee}_update(e){this.#Q.set(e)}};let s_="signal";let SignalHandler=class SignalHandler{wireType=s_;#ei;#er;#eo=0;#es=1;#en=new Map;#ea=new WeakMap;#el;#$=!1;#eh=new Map;#ec=new Map;#ed=new Map;#ep=new Map;#v=new FinalizationRegistry(({signalId:e,session:t})=>{t===this.#eo&&(this.#ed.delete(e),this.#er?.sendMessage({type:"signal:release",signalId:e}))});constructor(e={}){this.#ei=e.autoWatch??!1}connect(e){this.#er=e}onMessage(e){(null!==e&&"object"==typeof e&&"type"in e?"signal:batch"!==e.type:1)?(null!==e&&"object"==typeof e&&"type"in e?"signal:release"!==e.type:1)?(null!==e&&"object"==typeof e&&"type"in e?"signal:watch"!==e.type:1)?null!==e&&"object"==typeof e&&"type"in e&&"signal:unwatch"===e.type&&this.#eu(e.signalId):this.#eg(e.signalId):this.releaseSignal(e.signalId):this.#em(e)}disconnect(){this.#er=void 0,this.#$=!1,void 0!==this.#el&&(this.#el.unwatch(...this.#eh.values()),this.#el=void 0),this.#en.clear(),this.#eh.clear(),this.#ec.clear(),this.#ed.clear(),this.#ep.clear(),this.#eo++,this.#ea=new WeakMap,this.#es=1}canHandle(e){return e instanceof g.State||e instanceof g.Computed}toWire(e,t){return this.#eb(e,t)}fromWire(e,t){return this.#ef(e,t)}#eb(e,t){let i=this.#ea.get(e);return void 0===i&&(i=this.#es++,this.#en.set(i,e),this.#ea.set(e,i),this.#ei&&this.#eg(i)),{[sd]:s_,signalId:i,value:t.toWire(e.get())}}#ef(e,t){let i=t.fromWire(e.value),r=this.#ed.get(e.signalId),o=r?.deref();if(void 0!==o)return o._update(i),o;let s=this.#ep.get(e.signalId);this.#ep.delete(e.signalId);let a=new RemoteSignal(e.signalId,void 0!==s?s:i,this.#ev);return this.#ed.set(e.signalId,new WeakRef(a)),this.#v.register(a,{signalId:e.signalId,session:this.#eo}),a}#ev=(e,t)=>{void 0!==this.#er&&(t?this.#er.sendMessage({type:"signal:watch",signalId:e}):this.#er.sendMessage({type:"signal:unwatch",signalId:e}))};#eg(e){if(this.#eh.has(e))return;let t=this.#en.get(e);if(void 0===t)return;let i=this.#e_(),r=new g.Computed(()=>t.get());this.#eh.set(e,r),this.#ec.set(r,e),i.watch(r);let o=r.get();this.#er?.sendMessage({type:"signal:batch",updates:[{signalId:e,value:o}]})}#eu(e){let t=this.#eh.get(e);void 0!==t&&(this.#el?.unwatch(t),this.#eh.delete(e),this.#ec.delete(t))}#e_(){return this.#el??=new g.subtle.Watcher(()=>{this.#$||(this.#$=!0,queueMicrotask(this.#A))})}#A=()=>{if(this.#$=!1,void 0===this.#el||void 0===this.#er)return;let e=this.#el.getPending(),t=[];for(let i of e){let e=this.#ec.get(i);if(void 0!==e&&this.#en.has(e)){let r=i.get();t.push({signalId:e,value:r})}}this.#el.watch(),t.length>0&&this.#er.sendMessage({type:"signal:batch",updates:t})};#em(e){for(let t of e.updates){let e=this.#ed.get(t.signalId),i=e?.deref();void 0!==i?i._update(t.value):this.#ep.set(t.signalId,t.value)}}releaseSignal(e){let t=this.#eh.get(e);void 0!==t&&(this.#el?.unwatch(t),this.#eh.delete(e),this.#ec.delete(t)),this.#en.delete(e)}get _sentSignalCount(){return this.#en.size}get _remoteSignalCount(){return this.#ed.size}_isWatching(e){return this.#eh.has(e)}};let sy="abort-signal";let AbortSignalHandler=class AbortSignalHandler{wireType=sy;#er;#eo=0;#d=1;#ea=new WeakMap;#en=new Map;#ey=new Map;#ew=new FinalizationRegistry(({id:e,session:t})=>{t!==this.#eo||this.#ey.has(e)&&(this.#ey.delete(e),this.#en.delete(e),this.#er?.sendMessage({type:"release",id:e}))});#ex=new Map;canHandle(e){return e instanceof AbortSignal}toWire(e,t){if(e.aborted)return{[sd]:sy,id:0,aborted:!0,reason:e.reason};let i=this.#ea.get(e);if(void 0!==i)return{[sd]:sy,id:i,aborted:!1};i=this.#d++,this.#ea.set(e,i),this.#en.set(i,new WeakRef(e)),this.#ew.register(e,{id:i,session:this.#eo},e);let r=new WeakRef(e),o=i,s=()=>{let e=r.deref(),t=e?.reason;"completed"===t?this.#er?.sendMessage({type:"release",id:o}):this.#er?.sendMessage({type:"abort",id:o,reason:t}),void 0!==e&&this.#ew.unregister(e),this.#ek(o)};return e.addEventListener("abort",s,{once:!0}),this.#ey.set(i,s),{[sd]:sy,id:i,aborted:!1}}fromWire(e){if(e.aborted)return AbortSignal.abort(e.reason);let t=this.#ex.get(e.id);if(void 0!==t)return t.signal;let i=new AbortController;return this.#ex.set(e.id,i),i.signal}connect(e){this.#er=e}onMessage(e){"abort"===e.type?(this.#ex.get(e.id)?.abort(e.reason),this.#ex.delete(e.id)):"release"===e.type&&this.#ex.delete(e.id)}disconnect(){for(let e of(this.#er=void 0,this.#ex.values()))e.abort("disconnected");for(let[e,t]of(this.#ex.clear(),this.#ey)){let i=this.#en.get(e)?.deref();void 0!==i&&(i.removeEventListener("abort",t),this.#ew.unregister(i))}this.#ey.clear(),this.#en.clear(),this.#eo++,this.#ea=new WeakMap,this.#d=1}#ek(e){this.#ey.delete(e),this.#en.delete(e)}get _sentCount(){return this.#en.size}get _receivedCount(){return this.#ex.size}};let sw="st-error";function sx(e){return null!=e&&"object"==typeof e&&e.__st__===sw}function sk(e){if(null==e||"object"!=typeof e)return e;if(e instanceof Error||"string"==typeof e.name&&"string"==typeof e.message){let t={__st__:sw,name:e.name,message:e.message};return"string"==typeof e.stack&&(t.stack=e.stack),t}return e}function s$(e){if(!sx(e))return e;if("AbortError"===e.name&&"u">typeof DOMException)return new DOMException(e.message,"AbortError");let t=Error(e.message);return t.name=e.name,void 0!==e.stack&&(t.stack=e.stack),t}function sC(e){return null!=e&&"object"==typeof e&&"abort"===e.type}let GlAbortSignalHandler=class GlAbortSignalHandler extends AbortSignalHandler{toWire(e,t){let i=super.toWire(e,t);return i.aborted&&void 0!==i.reason&&(i.reason=sk(i.reason)),i}fromWire(e){return e.aborted&&sx(e.reason)&&(e={...e,reason:s$(e.reason)}),super.fromWire(e)}connect(e){super.connect({sendMessage:t=>{sC(t)&&void 0!==t.reason&&(t.reason=sk(t.reason)),e.sendMessage(t)}})}onMessage(e){sC(e)&&sx(e.reason)&&(e.reason=s$(e.reason)),super.onMessage(e)}};let sE="__st__",sS=[{wireType:"date",canHandle:function(e){return e instanceof Date},toWire:function(e){return{[sE]:"date",value:e.getTime()}},fromWire:function(e){return new Date(e.value)}},{wireType:"map",canHandle:function(e){return e instanceof Map},toWire:function(e,t){let i=[];for(let[r,o]of e)i.push([t.toWire(r),t.toWire(o)]);return{[sE]:"map",entries:i}},fromWire:function(e,t){let i=new Map;for(let r of e.entries){let[e,o]=r;i.set(t.fromWire(e),t.fromWire(o))}return i}},{wireType:"set",canHandle:function(e){return e instanceof Set},toWire:function(e,t){let i=[];for(let r of e)i.push(t.toWire(r));return{[sE]:"set",values:i}},fromWire:function(e,t){let i=new Set;for(let r of e.values)i.add(t.fromWire(r));return i}},{wireType:"regexp",canHandle:function(e){return e instanceof RegExp},toWire:function(e){return{[sE]:"regexp",source:e.source,flags:e.flags}},fromWire:function(e){return new RegExp(e.source,e.flags)}}];function sA(e){return"string"==typeof e[0]?[e[0],e.slice(1)]:[e.map(String).join(" "),[]]}function sT(e){return e.map(e=>{let t;if(sh(e))return sc(e);if(null==e||"object"!=typeof e||Array.isArray(e))return e;for(let[i,r]of Object.entries(e))sh(r)&&((t??={...e})[i]=sc(r));return t??e})}function sM(e){let t=`[RPC:${e}]`;return{debug:(...e)=>{let[i,r]=sA(e);tY.debug(`${t} ${i}`,...sT(r))},warn:(...e)=>{let[i,r]=sA(e);tY.warn(`${t} ${i}`,...sT(r))},error:(...e)=>{let[i,r]=sA(e),o=function(e){for(let t of e){if(sh(t))return t;if(null!=t&&"object"==typeof t&&!Array.isArray(t)){for(let e of Object.values(t))if(sh(e))return e}}}(r);tY.error(o,`${t} ${i}`)}}}async function sP(e){let t,i,r="function"==typeof e?.webviewId?e.webviewId():e?.webviewId,o="function"==typeof e?.webviewInstanceId?e.webviewInstanceId():e?.webviewInstanceId,s=null==r&&null==o?"?":null==o?r:`${r??"?"}|${o}`,a=`RpcClient(${s})`,h=e?.endpoint?.()??(c??=sl()).createEndpoint(),p=new Connection(h,{handlers:[...sS,new SignalHandler({autoWatch:e?.autoWatchSignals}),new GlAbortSignalHandler,...e?.handlers??[]],nestedProxies:e?.nestedProxies??!0,debug:e?.debug,batching:!0,logger:sM(`client(${s})`)}),u=e?.timeout??6e4,g=[],m=()=>{for(let e of g)clearTimeout(e);g.length=0,null!=t&&(clearTimeout(t),t=void 0),null!=i&&(e?.signal?.removeEventListener("abort",i),i=void 0)},b=()=>{m(),p.close(),h.dispose()},f=()=>{let t=e?.signal?.reason;return t instanceof Error?t:Error("RPC connection aborted")};try{let r;if(e?.signal?.aborted)throw f();tY.debug(`${a}: Connecting to host...`),2e4<u&&g.push(setTimeout(()=>tY.warn(`${a}: Connection still pending after 20000ms`),2e4)),4e4<u&&g.push(setTimeout(()=>tY.warn(`${a}: Connection still pending after 40000ms \u2014 peer may be stuck`),4e4));let o=await Promise.race([p.waitForReady(),new Promise((e,i)=>t=setTimeout(()=>i(Error(`RPC connection timed out after ${u}ms`)),u)),...e?.signal!=null?[new Promise((t,r)=>{i=()=>r(f()),e.signal.addEventListener("abort",i,{once:!0})})]:[]]);return m(),tY.debug(`${a}: Connected to host successfully`),{services:(r=new Map,new Proxy(o,{get:function(e,t,i){if(r.has(t))return r.get(t);let o=Reflect.get(e,t,i);if("function"==typeof o||null==o||"object"!=typeof o||"function"!=typeof o.then)return o;let s=Promise.resolve(o);return r.set(t,s),s}})),dispose:()=>{tY.debug(`${a}: Disposing connection...`),b()}}}catch(e){throw b(),tY.error(e,`${a}: Failed to connect to host`),e}}sM("?");let sR=new DOMException("rpc reconnect: host reconnected","AbortError"),sz=new DOMException("rpc disconnect: host disconnected","AbortError");let RpcController=class RpcController{constructor(e,t){this.host=e,this.options=t,e.addController(this)}get services(){return this._services}hostConnected(){null!=this._connectionAbort&&this._connectionAbort.abort(sR),this._connectionAbort=new AbortController,this._connect(this._connectionAbort.signal)}hostDisconnected(){this._connectionAbort?.abort(sz),this._connectionAbort=void 0,this._disposeRpc?.(),this._disposeRpc=void 0,this._services=void 0}async _connect(e){try{let{services:t,dispose:i}=await sP({...this.options?.rpcOptions,signal:e});if(e.aborted)return void i();if(this._services=t,this._disposeRpc=i,this.options?.onReady!=null)try{await this.options.onReady(t)}catch(e){throw i(),this._disposeRpc=void 0,this._services=void 0,e}}catch(h){if(e.aborted)return;let t=function(e){if(e instanceof Error)return e;if(sh(e)){let t=Error(`${e.name}: ${e.message}`);return t.cause=e,t}return Error(String(e))}(h),i=this.options?.rpcOptions?.webviewId,r=this.options?.rpcOptions?.webviewInstanceId,o="function"==typeof i?i():i,s="function"==typeof r?r():r,a=null!=s?`${o??"?"}|${s}`:o??"?";tY.error(t,`RpcController(${a}): Failed to connect`),this.options?.onError!=null&&this.options.onError(t)}}};let sj=A`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,sD=A`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`,sB="0000000000000000000000000000000000000000:",sI=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,sO=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,sL=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,sN=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,sF=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,sW=/^(.*?)([\^@~:].*)?$/,sH=/^[0]{40}(?:[\^@~:]\S*)?:?$/,sV=/^[0]{40}([\^@~]\S*)?:$/;function sq(e,t){return!!t&&e.test(t)}function sU(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===sB||!t&&sq(sH,e)}function sK(e,t=!1){return e===sB||!t&&sq(sV,e)}let sY=7;function sG(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(sU(e))return sK(e)?t?.strings?.uncommittedStaged??"Index":t?.strings?.uncommitted??"Working Tree";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return sO.test(e);case"qualified-double-dot":return sL.test(e);case"qualified-triple-dot":return sN.test(e);default:return sI.test(e)}}(e)||!sq(sF,e))return e;let i=Math.max(5,sY),r=sW.exec(e);if(null!=r){let[,e,t]=r;if(null!=t)return`${e.substring(0,i)}${t}`}return e.substring(0,i)}var sX=w(518);function sZ(e){return!e.sha||sU(e.sha)}function sJ(e,t,i){let r=(e??0)+(t??0);return r<=0||i.max<=0?0:Math.min(1,Math.max(0,Math.log1p(r)/Math.log1p(Math.max(i.p99,500))))}function sQ(e,t){let i=new Uint32Array(t);for(let t of e)i[t]++;let r=Array(t);for(let e=0;e<t;e++)r[e]=new Uint32Array(i[e]);let o=new Uint32Array(t);for(let t=0;t<e.length;t++){let i=e[t];r[i][o[i]++]=t}return r}let s0=new Set(["config","remotes","tags","starred","remoteProviders","ignores","gkConfig"]);let TimelineActions=class TimelineActions{constructor(e,t,i,r,o){var s;let a;this._lastResolvedDataLength=0,this._state=e,this._services=t,this._timeline=i,this._repository=r,this._datasetResource=o,this._pushTelemetryContext=(s=e=>void t.telemetry.then(t=>t.updateContext(e)),a="",e=>{let t=JSON.stringify(e);t!==a&&(a=t,s(e))})}static{this.extensionChunkRatio=.25}static{this.extensionChunkMinMs=6048e5}static{this.extensionChunkMaxMs=31536e6}static{this.initialBufferRatio=.25}dispose(){this._fireSelectDataPointDebounced?.cancel?.(),this.unwatchWip()}watchWip(e){e!==this._wipWatchRepoPath&&(this._wipWatchUnsubscribe?.(),this._wipWatchUnsubscribe=void 0,this._wipWatchRepoPath=e,(async()=>{let t=await this._repository.onRepositoryWorkingChanged(e,()=>{this.refreshWip()});if("function"==typeof t){if(this._wipWatchRepoPath!==e)return t();this._wipWatchUnsubscribe=t}})())}async refreshWip(){let e=this._state,t=e.scope.get();if(null==t)return;let i=this._datasetResource.value.get();if(null==i||0===i.dataset.length)return;let r=await this._services.timeline,o=await r.getWip(t),s=e.scope.get();if(s?.uri!==t.uri||s?.type!==t.type||this._datasetResource.value.get()!==i)return;let a=i.dataset,h=0;for(;h<a.length&&sZ(a[h]);)h++;if(h===o.length){let e=!0;for(let t=0;t<o.length;t++){let i=a[t],r=o[t];if(i.sha!==r.sha||i.additions!==r.additions||i.deletions!==r.deletions||i.files!==r.files){e=!1;break}}if(e)return}let c=a.slice();c.splice(0,h,...o),this._datasetResource.mutate({...i,dataset:c}),this._lastResolvedDataLength=c.length}unwatchWip(){this._wipWatchUnsubscribe?.(),this._wipWatchUnsubscribe=void 0,this._wipWatchRepoPath=void 0}cancelPendingRequests(){this._datasetResource.cancel(),this._fireSelectDataPointDebounced?.cancel?.()}async populateInitialState(){var e;let t=this._state,i=await this._timeline.getInitialContext();t.displayConfig.set({abbreviatedShaLength:i.displayConfig.abbreviatedShaLength,dateFormat:i.displayConfig.dateFormat,shortDateFormat:i.displayConfig.shortDateFormat,currentUserNameStyle:i.displayConfig.currentUserNameStyle}),sY=i.displayConfig.abbreviatedShaLength,null!=i.configOverrides&&(null!=i.configOverrides.period&&t.period.set(i.configOverrides.period),null!=i.configOverrides.showAllBranches&&t.showAllBranches.set(i.configOverrides.showAllBranches),null!=i.configOverrides.sliceBy&&t.sliceBy.set(i.configOverrides.sliceBy));let r=(e=t.scope.get(),i.scope??e);null!=r&&(t.scope.set(r),await this.fetchTimeline()),this.fetchRepoCount()}async fetchTimeline(){let e=this._state;if(null==e.scope.get())return;let t=eK(e.period.get()),i=null!=t?t*(1+TimelineActions.initialBufferRatio):null;e.loadedSpanMs.set(i),e.hasMore.set(!0),e.loadingMore.set(!1),this._lastResolvedDataLength=0,await this._runFetch(!1)}extendTimeline(){let e=this._state;if(null==e.scope.get()||!e.hasMore.get()||e.loadingMore.get())return;let t=eK(e.period.get());if(null==t)return;let i=Math.min(TimelineActions.extensionChunkMaxMs,Math.max(TimelineActions.extensionChunkMinMs,t*TimelineActions.extensionChunkRatio)),r=e.loadedSpanMs.get()??t*(1+TimelineActions.initialBufferRatio);e.loadingMore.set(!0),e.loadedSpanMs.set(r+i),this._runFetch(!0)}async _runFetch(e){let t=this._state,i=this._lastResolvedDataLength,r=this._datasetResource.generationId.get()+1;try{if(await this._datasetResource.fetch(),this._datasetResource.generationId.get()!==r)return;if("success"===this._datasetResource.status.get()){let r=this._datasetResource.value.get();if(null!=r){t.scope.set(r.scope),t.repository.set(r.repository),t.access.set(r.access),t.allowRepoSwitch.set(r.allowRepoSwitch??!1),t.error.set(void 0),r.repository?.path&&this.watchWip(r.repository.path);let o=r.dataset.length;e&&o<=i&&t.hasMore.set(!1),this._lastResolvedDataLength=o}}else"error"===this._datasetResource.status.get()&&t.error.set(this._datasetResource.error.get())}finally{e&&t.loadingMore.set(!1)}}async fetchDisplayConfig(){let e=await this._services.config,[t,i,r,o]=await e.getMany("defaultDateFormat","defaultDateShortFormat","advanced.abbreviatedShaLength","defaultCurrentUserNameStyle");this._state.displayConfig.set({dateFormat:t??"",shortDateFormat:i??"",abbreviatedShaLength:r,currentUserNameStyle:o??"nameAndYou"}),sY=r}async fetchRepoCount(){let e=await this._services.repositories,t=await e.getRepositoriesState();this._state.repositories.set({count:t.count,openCount:t.openCount})}onScopeChanged(e){let t=this._state;if(null==e){t.scope.set(void 0),this._datasetResource.cancel(),this._datasetResource.mutate(void 0),t.repository.set(void 0),t.loadedSpanMs.set(null),t.hasMore.set(!0),this._lastResolvedDataLength=0,this.unwatchWip();return}let i=t.scope.get();(i?.uri!==e.uri||i?.type!==e.type)&&(t.scope.set({type:e.type,uri:e.uri,relativePath:""}),this.fetchTimeline())}onRepoChanged(e){let t=this._state.scope.get();null==t||t.uri!==e.repoUri&&!t.uri.startsWith(`${e.repoUri}/`)||e.changes.some(e=>!s0.has(e))&&this.fetchTimeline()}pushTelemetryContext(){this._pushTelemetryContext({"context.period":this._state.period.get(),"context.showAllBranches":this._state.showAllBranches.get(),"context.sliceBy":this._state.sliceBy.get()})}sendConfigChangedTelemetry(){var e;e=this._services.telemetry.then(e=>e.sendEvent("timeline/config/changed",{period:this._state.period.get(),showAllBranches:this._state.showAllBranches.get(),sliceBy:this._state.sliceBy.get()})),e.catch(e=>{tY.error(e,"RPC call failed (timeline config changed telemetry)")})}changePeriod(e){let t=this._state;if(t.period.get()===e)return;t.period.set(e),this.sendConfigChangedTelemetry();let i=eK(e);if(null==i)return void this.fetchTimeline();let r=this._datasetResource.value.get(),o=r?.dataset,s=null!=o&&o.length>1?o[0].sort-o.at(-1).sort:0,a=i*(1+TimelineActions.initialBufferRatio);a<=s||(t.loadingMore.set(!0),t.loadedSpanMs.set(a),this._runFetch(!0))}changeSliceBy(e){let t=this._state;t.sliceBy.set(e),"branch"!==e||t.showAllBranches.get()||t.showAllBranches.set(!0),this.sendConfigChangedTelemetry(),this.fetchTimeline()}changeShowAllBranches(e){this._state.showAllBranches.set(e),this.sendConfigChangedTelemetry(),this.fetchTimeline()}async chooseBaseRef(){let e=this._state,t=e.scope.get();if(null==t)return;let i=await this._timeline.chooseRef({scope:t,type:"base",showAllBranches:e.showAllBranches.get()});i?.ref!=null&&(e.scope.set({...t,base:i.ref}),this.fetchTimeline())}async chooseHeadRef(e){let t=this._state,i=t.scope.get();if(null==i)return;let r=await this._timeline.chooseRef({scope:i,type:"head",showAllBranches:t.showAllBranches.get()});if(r?.ref===null){t.showAllBranches.get()||(t.showAllBranches.set(!0),this.fetchTimeline());return}if(r?.ref!=null){if("config"===e){let e=t.showAllBranches.get()?void 0:i.base;t.scope.set({...i,head:r.ref,base:e}),this.fetchTimeline();return}t.scope.set({...i,head:r.ref,base:void 0}),t.showAllBranches.get()&&t.showAllBranches.set(!1),this.fetchTimeline()}}async choosePath(e){let t=this._state,i=t.repository.get(),r=t.scope.get();if(null==i||null==r)return;let o=await this._timeline.choosePath({repoUri:i.uri,ref:t.head.get(),title:"Select a File or Folder to Visualize",initialPath:"file"===r.type?(0,sX.dirname)(r.relativePath):r.relativePath});if(o?.picked!=null){if(e)return void this._timeline.openInEditor({...r,type:o.picked.type,relativePath:o.picked.relativePath});t.scope.set({...r,type:o.picked.type,relativePath:o.picked.relativePath}),this.fetchTimeline()}}changeScope(e,t,i){let r=this._state,o=r.scope.get();if(null!=o){if("repo"===e){if(i){let e=r.repository.get()?.uri??o.uri;this._timeline.openInEditor({...o,type:"repo",uri:e,relativePath:""});return}if("repo"===o.type)return void this.pickAndNavigateRepo();let e=r.repository.get()?.uri??o.uri;return r.scope.set({...o,type:"repo",uri:e,relativePath:""}),void this.fetchTimeline()}if(null!=t){if(i)return void this._timeline.openInEditor({...o,type:e,relativePath:t});r.scope.set({...o,type:e,relativePath:t}),this.fetchTimeline()}}}async pickAndNavigateRepo(){let e=this._state,t=await this._timeline.chooseRepo();null!=t&&(e.scope.set({type:t.type,uri:t.uri,relativePath:""}),this.fetchTimeline())}selectDataPoint(e){let t=this._state;null==t.scope.get()||e.interim||e.auto||(this._fireSelectDataPointDebounced??=il(e=>{let i=t.scope.get();null!=i&&this._timeline.selectDataPoint({scope:i,...e})},250,{maxWait:500}),this._fireSelectDataPointDebounced(e))}};async function s1(e){let t=await Promise.allSettled(e.map(e=>e())),i=[];for(let e of t)"fulfilled"===e.status&&"function"==typeof e.value?i.push(e.value):"rejected"===e.status&&tY.error(e.reason,"Failed to subscribe");return()=>{for(let e of i)try{e()}catch(e){tY.error(e,"Failed to unsubscribe")}}}let s2="__rk",s4="__ts",s5=new Set(["__v",s2,s4]),s3={abbreviatedShaLength:7,dateFormat:"",shortDateFormat:"",currentUserNameStyle:"nameAndYou"},s8=A`
	* {
		box-sizing: border-box;
	}

	:not(:defined) {
		visibility: hidden;
	}

	[hidden] {
		display: none !important;
	}

	/* roll into shared focus style */
	:focus-visible {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	b {
		font-weight: 600;
	}

	p {
		margin-top: 0;
	}

	ul {
		margin-top: 0;
		padding-left: 1.2em;
	}

	section,
	header {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	h2 {
		font-weight: 400;
	}

	h3 {
		border: none;
		color: var(--color-view-header-foreground);
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0;
		white-space: nowrap;
	}

	h4 {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0.5rem 0 1rem 0;
	}
`,s6=A`
	:host {
		display: block;
		color: var(--color-view-foreground);
		font-family: var(--font-family);
		font-size: var(--font-size);
		margin: 0;
		padding: 0;
		height: 100vh;
		overflow: hidden;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.timeline {
		flex: 1;
		min-height: 0;
	}

	.timeline__empty {
		padding: 0.4rem 2rem 1.3rem 2rem;
		font-size: var(--font-size);
	}

	.timeline__empty p {
		margin-top: 0;
	}

	:host-context(body[data-placement='view']) gl-feature-gate {
		background-color: var(--vscode-sideBar-background);
	}

	gl-feature-gate gl-feature-badge {
		vertical-align: super;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}
`,s7=navigator?.userAgentData?.platform,s9=navigator.userAgent;"Linux"===s7||s9.includes("Linux");let ne="macOS"===s7||s9.includes("Macintosh");function nt(){return ne?"⌥":"Alt"}function ni(e,t){return e.current?function(e,t){switch(t){case"name":return e;case"nameAndYou":if("You"===e||e.endsWith(" (you)"))return e;return e?`${e} (you)`:"You";default:return"You"}}(e.name,t):e.name}"Windows"===s7||s9.includes("Windows");function nr(e,t,i,r,o){let s=o?.showVolume!==!1&&t>=200,a=o?.showVolume!==!1;o?.showY2;let h=o?.gutterLeft??48,c=o?.gutterRight??14,p=o?.headerHeight??2,u=s?o?.volumeHeight??Math.round(14+50*Math.max(0,Math.min(1,(t-300)/500))):0,g=12*!!o?.showHorizontalScrollbar,m=Math.min(e,Math.max(0,h)),b=Math.max(m,e-c),f=Math.max(0,m-56),v=0+p,_=Math.max(v,t-u),w=Math.max(v,_-(a?s?20:12:0)),x=Math.round(24+48*Math.max(0,Math.min(1,(t-80)/520))),$=r>0?Math.round(.22*x):0,C=r>0?Math.round(.22*x):0,E=Math.max(0,Math.max(0,w-v)-$-C),S=r>0?Math.max(x,Math.min(96,E/r)):x,A=Math.max(x,Math.min(96,S)),T=$+r*A+C;return{width:e,height:t,dpr:i,chartLeft:m,chartRight:b,get chartWidth(){return Math.max(0,this.chartRight-this.chartLeft)},dataInsetX:Math.round(nl(A)+4),swimlaneTopBufferPx:$,headerY:0,headerHeight:p,swimlaneTop:v,swimlaneBottom:w,rowHeight:A,virtualSwimlaneHeight:T,axisStripTop:w,axisStripBottom:_,volumeTop:_,volumeBottom:t,y2Left:f,horizontalScrollbarTop:g>0?w:t}}function no(e,t,i,r){let o=i-t;return o<=0?NaN:r.chartLeft+r.dataInsetX+(e-t)/o*Math.max(0,r.chartWidth-2*r.dataInsetX)}function ns(e,t,i,r){let o=i-t;if(o<=0)return NaN;let s=Math.max(1,r.chartWidth-2*r.dataInsetX);return t+(e-r.chartLeft-r.dataInsetX)/s*o}function nn(e,t){return t.swimlaneTopBufferPx+e*t.rowHeight+t.rowHeight/2}function na(e,t,i,r,o,s,a,h=4){let c;if(e<a.chartLeft||e>a.chartRight||t<a.swimlaneTop||t>a.swimlaneBottom)return;let p=t-a.swimlaneTop+i,u=1/0,g=nl(a.rowHeight),m=Math.min(1.5,g),b=g-m,f=Math.min(8,.5*g),[v,_]=nh(r.timestamps,o,s);for(let t=v;t<_;t++){let i=no(r.timestamps[t],o,s,a);if(Number.isNaN(i)||i<a.chartLeft||i>a.chartRight)continue;let g=nn(r.sliceIndex[t],a),v=e-i,_=p-g,w=v*v+_*_,x=""===r.commits[t].sha?f+h:m+b*r.bubbleR[t]+h;w<=x*x&&w<u&&(c=t,u=w)}return c}function nl(e){return Math.max(2,.7*e)}function nh(e,t,i){return 0===e.length?[0,0]:[function(e,t){let i=0,r=e.length;for(;i<r;){let o=i+r>>>1;e[o]<t?i=o+1:r=o}return i}(e,t),function(e,t){let i=0,r=e.length;for(;i<r;){let o=i+r>>>1;e[o]<=t?i=o+1:r=o}return i}(e,i)]}function nc(e,t,i,r){if(r.virtualSwimlaneHeight<=r.swimlaneBottom-r.swimlaneTop||e<r.width-14||e>r.width||t<r.swimlaneTop||t>r.swimlaneBottom)return;let o=r.swimlaneBottom-r.swimlaneTop,s=o/r.virtualSwimlaneHeight,a=Math.max(20,o*s),h=r.swimlaneTop+i/r.virtualSwimlaneHeight*o,c=h+a;return t>=h&&t<=c?{kind:"thumb",thumbY1:h,thumbY2:c}:{kind:"track",side:t<h?"up":"down"}}function nd(e,t,i){return e<=0||t<=0||i<=0?0:Math.sqrt(Math.min(1,e/t))*i}function np(e,t,i,r){let o=i-t;if(e.horizontalScrollbarTop>=e.height||o<=0)return;let s=e.axisStripBottom-e.axisStripTop,a=2*(s>=16),h=Math.max(12,s-2*a),c=e.horizontalScrollbarTop+a,p=e.chartLeft,u=e.chartRight,g=u-p;if(g<=0)return;let m=p+(r.oldest-t)/o*g,b=p+(r.newest-t)/o*g,f=Math.max(p,Math.min(u-24,m)),v=Math.max(24,Math.min(u-f,b-m));return{trackX:p,trackY:c,trackWidth:g,trackHeight:h,thumbX:f,thumbWidth:v}}function nu(e,t,i,r,o,s){let a=np(i,o,s,r);if(null==a)return;let h=a.trackY+a.trackHeight;if(!(t<a.trackY)&&!(t>h)&&!(e<a.trackX)&&!(e>a.trackX+a.trackWidth))return e>=a.thumbX&&e<=a.thumbX+a.thumbWidth?{kind:"thumb",thumbX:a.thumbX,thumbW:a.thumbWidth}:{kind:"track",side:e<a.thumbX?"before":"after"}}function ng(e,t,i,r){let o=t.chartRight-t.chartLeft;return o<=0?0:e/o*(r-i)}function nm(e,t,i,r,o,s){let a=Math.round(t)+.5;e.strokeStyle=o,e.lineWidth=1,e.globalAlpha=s,e.beginPath(),e.moveTo(a,i),e.lineTo(a,r),e.stroke(),e.globalAlpha=1}function nb(e,t,i,r,o,s){let a=no(e.timestamps[t],i,r,s);if(Number.isNaN(a)||a<s.chartLeft||a>s.chartRight)return;let h=e.sliceIndex[t],c=nn(h,s),p=s.swimlaneTop+(c-o);if(p<s.swimlaneTop-s.rowHeight||p>s.swimlaneBottom+s.rowHeight)return;let u=nl(s.rowHeight),g=Math.min(1.5,u);return{cx:a,cy:p,baseR:""===e.commits[t].sha?Math.min(8,.5*u):g+(u-g)*e.bubbleR[t],sliceIdx:h,color:""}}function nf(e,t,i,r,o,s,a,h,c){if(c<=0)return;let p=nb(t,i,r,o,s,a);if(null==p)return;let{cx:u,cy:g,baseR:m,sliceIdx:b}=p,f=h.slicePalette,v=f[t.slices[b].colorIndex%f.length],_=m*(1+.45*c);e.save(),e.beginPath(),e.rect(0,0,a.width,a.axisStripBottom),e.clip();let w=2.6*_,x=e.createRadialGradient(u,g,.6*_,u,g,w);x.addColorStop(0,v),x.addColorStop(1,"rgba(0,0,0,0)"),e.globalAlpha=.45*c,e.fillStyle=x,e.beginPath(),e.arc(u,g,w,0,2*Math.PI),e.fill(),e.globalAlpha=1,e.shadowColor=v,e.shadowBlur=14*c,e.fillStyle=v,e.beginPath(),e.arc(u,g,_,0,2*Math.PI),e.fill(),e.shadowBlur=0,e.shadowColor="transparent",e.lineWidth=1.5,e.strokeStyle=h.background,e.beginPath(),e.arc(u,g,_+.75,0,2*Math.PI),e.stroke(),e.lineWidth=1,e.strokeStyle=v,e.beginPath(),e.arc(u,g,_+2,0,2*Math.PI),e.stroke(),e.restore()}var nv=A`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label.has-label ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`,n_="u">typeof window&&"ontouchstart"in window,ny=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=e=>{let t="touches"in e?e.touches[0].clientX:e.clientX,i="touches"in e?e.touches[0].clientY:e.clientY;this.isDragging||!n_&&e.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(t,i))},this.handleDragStop=e=>{let t="changedTouches"in e?e.changedTouches[0].clientX:e.clientX,i="changedTouches"in e?e.changedTouches[0].clientY:e.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(t,i)},this.handleDragMove=e=>{let t="touches"in e?e.touches[0].clientX:e.clientX,i="touches"in e?e.touches[0].clientY:e.clientY;window.getSelection()?.removeAllRanges(),this.options.move(t,i)},this.element=e,this.options={start:()=>void 0,stop:()=>void 0,move:()=>void 0,...t},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),n_&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),n_&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(void 0!==e?e:!this.isActive)?this.start():this.stop()}};function nw(e,t,i){let r=e=>Object.is(e,-0)?0:e;return r(e<t?t:e>i?i:e)}var nx=A`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`,nk=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},n$=class extends rK{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new nk))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[{observedAttributes:["custom-error"],checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let i of t.observedAttributes)e.add(i);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")||e.has("defaultValue")){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let i of e)t.append(this.name,i);this.setValue(t,t)}}else this.setValue(e,e)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(e),this.updateValidity()}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],i=e[1],r=e[2];r||(r=this.validationTarget),this.internals.setValidity(t,i,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&i),this.customStates.set("user-valid",t&&i)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,"restore"===t&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,i]=e;this.internals.setFormValue(t,i)}get allValidators(){return[...this.constructor.validators||[],...this.validators||[]]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate)return void this.resetValidity();let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},i=this.validationTarget||this.input||void 0,r="";for(let i of e){let{isValid:e,message:o,invalidKeys:s}=i.checkValidity(this);!e&&(r||(r=o),s?.length>=0&&s.forEach(e=>t[e]=!0))}r||(r=this.validationMessage),this.setValidity(t,r,i)}};n$.formAssociated=!0,rV([eP({reflect:!0})],n$.prototype,"name",2),rV([eP({type:Boolean})],n$.prototype,"disabled",2),rV([eP({state:!0,attribute:!1})],n$.prototype,"valueHasChanged",2),rV([eP({state:!0,attribute:!1})],n$.prototype,"hasInteracted",2),rV([eP({attribute:"custom-error",reflect:!0})],n$.prototype,"customError",2),rV([eP({attribute:!1,state:!0,type:Object})],n$.prototype,"validity",1);var nC={small:"s",medium:"m",large:"l"},nE=new Set,nS=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return!!this.host.childNodes&&[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===Node.ELEMENT_NODE){if("wa-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}},nA=A`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;function nT(e,t){let i={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:o}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let o=e.get(t),s=this[t];o!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](o,s)}}),o.call(this,e)}}}let nM="important",nP=" !"+nM,nR=tv(class extends directive_i{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{let r=e[i];return null==r?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){let{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(let e in t){let r=t[e];if(null!=r){this.ft.add(e);let t="string"==typeof r&&r.endsWith(nP);e.includes("-")||t?i.setProperty(e,t?r.slice(0,-11):r,t?nM:""):i[e]=r}}return e_}});var nz=class extends n${constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new nS(this,"hint","label"),this.localize=new rN(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=null==this.getAttribute("value")?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="m",this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,{observedAttributes:["min","max","step"],checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]},i=(e,t,i,r)=>{let o=document.createElement("input");return o.type="range",o.min=String(t),o.max=String(i),o.step=String(r),o.value=String(e),o.checkValidity(),o.validationMessage};if(e.isRange){let r=e.minValue,o=e.maxValue;if(r<e.min)return t.isValid=!1,t.invalidKeys.push("rangeUnderflow"),t.message=i(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,t;if(o>e.max)return t.isValid=!1,t.invalidKeys.push("rangeOverflow"),t.message=i(o,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,t;if(e.step&&1!==e.step){let s=(r-e.min)%e.step!=0,a=(o-e.min)%e.step!=0;(s||a)&&(t.isValid=!1,t.invalidKeys.push("stepMismatch"),t.message=i(s?r:o,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`)}}else{let r=e.value;if(r<e.min)return t.isValid=!1,t.invalidKeys.push("rangeUnderflow"),t.message=i(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,t;if(r>e.max)return t.isValid=!1,t.invalidKeys.push("rangeOverflow"),t.message=i(r,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,t;e.step&&1!==e.step&&(r-e.min)%e.step!=0&&(t.isValid=!1,t.invalidKeys.push("stepMismatch"),t.message=i(r,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`)}return t}}]}get focusableAnchor(){return this.isRange&&this.thumbMin||this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?nw(this._value??this.minValue??0,this.min,this.max):nw(this._value??this.defaultValue,this.min,this.max)}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}handleSizeChange(){var e,t;e=this.localName,(t=this.size)in nC&&!nE.has(`${e}:${t}`)&&nE.add(`${e}:${t}`)}firstUpdated(){this.isRange?(this.draggableThumbMin=new ny(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new ny(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new ny(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted="min"===this.activeThumb?this.minValue:this.maxValue;else{let i=this.getValueFromCoordinates(e,t),r=Math.abs(i-this.minValue),o=Math.abs(i-this.maxValue);if(r===o)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{let i="rtl"===this.localize.dir(),r="vertical"===this.orientation,o=r?t:e,s=this.lastTrackPosition||o;this.lastTrackPosition=o,this.activeThumb=o>s!==i&&!r||o<s&&r?"max":"min"}else this.activeThumb=r<=o?"min":"max";this.valueWhenDraggingStarted="min"===this.activeThumb?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&("min"===this.activeThumb?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new ny(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(e){this.isRange&&(e.has("minValue")||e.has("maxValue")||e.has("min")||e.has("max"))&&(this.minValue=nw(this.minValue,this.min,this.maxValue),this.maxValue=nw(this.maxValue,this.minValue,this.max)),super.willUpdate(e)}updated(e){if(this.isRange&&(e.has("minValue")||e.has("maxValue"))&&this.updateFormValue(),e.has("disabled")||e.has("readonly")){let e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){let t=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),r=Number(this.min),o=Number(this.max);return parseFloat((e=nw(e=Math.round(e/i)*i,r,o)).toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){let i="rtl"===this.localize.dir(),r="vertical"===this.orientation,{top:o,right:s,bottom:a,left:h,height:c,width:p}=this.trackBoundingClientRect,u=r?t:e,g=r?{start:o,end:a,size:c}:{start:h,end:s,size:p},m=(r||i?g.end-u:u-g.start)/g.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*m)}handleBlur(){this.isRange?requestAnimationFrame(()=>{let e=this.shadowRoot?.activeElement;e!==this.thumbMin&&e!==this.thumbMax&&this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(e){let t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb="min":t===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(e){let t="rtl"===this.localize.dir(),i=e.target;if(this.disabled||this.readonly||this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;let r=this.isRange?"min"===this.activeThumb?this.minValue:this.maxValue:this.value,o=r;switch(e.key){case"ArrowUp":case t?"ArrowLeft":"ArrowRight":e.preventDefault(),o=this.clampAndRoundToStep(r+this.step);break;case"ArrowDown":case t?"ArrowRight":"ArrowLeft":e.preventDefault(),o=this.clampAndRoundToStep(r-this.step);break;case"Home":e.preventDefault(),o=this.isRange&&"min"===this.activeThumb?this.min:this.isRange?this.minValue:this.min;break;case"End":e.preventDefault(),o=this.isRange&&"max"===this.activeThumb?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":e.preventDefault();let s=Math.max(r+(this.max-this.min)/10,r+this.step);o=this.clampAndRoundToStep(s);break;case"PageDown":e.preventDefault();let a=Math.min(r-(this.max-this.min)/10,r-this.step);o=this.clampAndRoundToStep(a);break;case"Enter":var h;let c;h=this,c=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,"Enter"!==e.key||c||setTimeout(()=>{e.defaultPrevented||e.isComposing||function(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;let i=[...t.elements];if(1===i.length)return t.requestSubmit(null);let r=i.find(e=>"submit"===e.type&&!e.matches(":disabled"));r&&(["input","button"].includes(r.localName)?t.requestSubmit(r):r.click())}(h)});return}o!==r&&(this.isRange?("min"===this.activeThumb?o>this.maxValue?(this.maxValue=o,this.minValue=o):this.minValue=Math.max(this.min,o):o<this.minValue?(this.minValue=o,this.maxValue=o):this.maxValue=Math.min(this.max,o),this.updateFormValue()):this.value=nw(o,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){e.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(e,t){let i=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,i){let r=this.getValueFromCoordinates(e,t),o="min"===i?this.minValue:this.maxValue;"min"===i?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),o!==("min"===i?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;let e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");"min"===this.activeThumb?(e&&(e.open=!0),t&&(t.open=!1)):"max"===this.activeThumb&&(t&&(t.open=!0),e&&(e.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;let e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");e&&(e.open=!1),t&&(t.open=!1)}updateFormValue(){if(this.isRange){let e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){let e=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=nw(e,this.min,this.maxValue),this.updateFormValue()}else{let e=this.clampAndRoundToStep(this.value-this.step);this.value=e}}stepUp(){if(this.isRange){let e=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=nw(e,this.minValue,this.max),this.updateFormValue()}else{let e=this.clampAndRoundToStep(this.value+this.step);this.value=e}}render(){let e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=!!this.label||!!e,r=!!this.hint||!!t,o=this.hasSlotController.test("reference"),s=oY({xs:"xs"===this.size,s:"s"===this.size||"small"===this.size,m:"m"===this.size||"medium"===this.size,l:"l"===this.size||"large"===this.size,xl:"xl"===this.size,small:"small"===this.size||"s"===this.size,medium:"medium"===this.size||"m"===this.size,large:"large"===this.size||"l"===this.size,horizontal:"horizontal"===this.orientation,vertical:"vertical"===this.orientation,disabled:this.disabled}),a=[];if(this.withMarkers)for(let e=this.min;e<=this.max;e+=this.step)a.push(this.getPercentageFromValue(e));let h=ef`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${oY({vh:!i,"has-label":i})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,c=ef`
      <div
        id="hint"
        part="hint"
        class=${oY({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,p=this.withMarkers?ef`
          <div id="markers" part="markers">
            ${a.map(e=>ef`<span part="marker" class="marker" style=${nR({"--position":`${e}%`})}></span>`)}
          </div>
        `:"",u=o?ef`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",g=(e,t)=>this.withTooltip?ef`
            <wa-tooltip
              id=${`tooltip${"thumb"!==e?"-"+e:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${e}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${"function"==typeof this.valueFormatter?this.valueFormatter(t):this.localize.number(t)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){let e=nw(this.getPercentageFromValue(this.minValue),0,100),t=nw(this.getPercentageFromValue(this.maxValue),0,100);return ef`
        ${h}

        <div id="slider" part="slider" class=${s}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${nR({"--start":`${Math.min(e,t)}%`,"--end":`${Math.max(e,t)}%`})}
            ></div>

            ${p}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${nR({"--position":`${e}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${"function"==typeof this.valueFormatter?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${nR({"--position":`${t}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${"function"==typeof this.valueFormatter?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${u} ${c}
        </div>

        ${g("thumb-min",this.minValue)} ${g("thumb-max",this.maxValue)}
      `}{let e=nw(this.getPercentageFromValue(this.value),0,100),t=nw(this.getPercentageFromValue("number"==typeof this.indicatorOffset?this.indicatorOffset:this.min),0,100);return ef`
        ${h}

        <div
          id="slider"
          part="slider"
          class=${s}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${"function"==typeof this.valueFormatter?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${nR({"--start":`${t}%`,"--end":`${e}%`})}
            ></div>

            ${p}
            <span id="thumb" part="thumb" style=${nR({"--position":`${e}%`})}></span>
          </div>

          ${u} ${c}
        </div>

        ${g("thumb",this.value)}
      `}}};nz.formAssociated=!0,nz.observeSlots=!0,nz.css=[nA,nx,nv],rV([ej("#slider")],nz.prototype,"slider",2),rV([ej("#thumb")],nz.prototype,"thumb",2),rV([ej("#thumb-min")],nz.prototype,"thumbMin",2),rV([ej("#thumb-max")],nz.prototype,"thumbMax",2),rV([ej("#track")],nz.prototype,"track",2),rV([ej("#tooltip")],nz.prototype,"tooltip",2),rV([eP()],nz.prototype,"label",2),rV([eP({attribute:"hint"})],nz.prototype,"hint",2),rV([eP({reflect:!0})],nz.prototype,"name",2),rV([eP({type:Number,attribute:"min-value"})],nz.prototype,"minValue",2),rV([eP({type:Number,attribute:"max-value"})],nz.prototype,"maxValue",2),rV([eP({attribute:"value",reflect:!0,type:Number})],nz.prototype,"defaultValue",2),rV([eR()],nz.prototype,"value",1),rV([eP({type:Boolean,reflect:!0})],nz.prototype,"range",2),rV([eP({type:Boolean})],nz.prototype,"disabled",2),rV([eP({type:Boolean,reflect:!0})],nz.prototype,"readonly",2),rV([eP({reflect:!0})],nz.prototype,"orientation",2),rV([eP({reflect:!0})],nz.prototype,"size",2),rV([nT("size")],nz.prototype,"handleSizeChange",1),rV([eP({attribute:"indicator-offset",type:Number})],nz.prototype,"indicatorOffset",2),rV([eP({type:Number})],nz.prototype,"min",2),rV([eP({type:Number})],nz.prototype,"max",2),rV([eP({type:Number})],nz.prototype,"step",2),rV([eP({type:Boolean})],nz.prototype,"autofocus",2),rV([eP({attribute:"tooltip-distance",type:Number})],nz.prototype,"tooltipDistance",2),rV([eP({attribute:"tooltip-placement",reflect:!0})],nz.prototype,"tooltipPlacement",2),rV([eP({attribute:"with-markers",type:Boolean})],nz.prototype,"withMarkers",2),rV([eP({attribute:"with-tooltip",type:Boolean})],nz.prototype,"withTooltip",2),rV([eP({attribute:"with-label",type:Boolean})],nz.prototype,"withLabel",2),rV([eP({attribute:"with-hint",type:Boolean})],nz.prototype,"withHint",2),rV([eP({attribute:!1})],nz.prototype,"valueFormatter",2),nz=rV([eT("wa-slider")],nz);var nj=A`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    &::part(arrow) {
      border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
      border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    }
  }
`,nD=[];function nB(e){for(let t=nD.length-1;t>=0;t--)if(nD[t]===e){nD.splice(t,1);break}}var nI=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}},nO=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},nL=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},nN=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};function nF(e,t){return new Promise(i=>{e.addEventListener(t,function r(o){o.target===e&&(e.removeEventListener(t,r),i())})})}function nW(e,t){return new Promise(i=>{let r=new AbortController,{signal:o}=r;if(e.classList.contains(t))return;e.classList.add(t);let s=!1,a=()=>{s||(s=!0,e.classList.remove(t),i(),r.abort())};e.addEventListener("animationend",a,{once:!0,signal:o}),e.addEventListener("animationcancel",a,{once:!0,signal:o}),requestAnimationFrame(()=>{s||0!==e.getAnimations().length||a()})})}var nH=class extends rK{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.open&&nD.length>0&&nD[nD.length-1]===this&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=!!this.anchor?.matches(":hover"),t=this.matches(":hover");!e&&!t&&(clearTimeout(this.hoverTimeout),e||t||(this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=function(e=""){return`${e}${((e=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&i[e]];return t})()}`}("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),nB(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}addToAriaLabelledBy(e,t){let i=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);i.includes(t)||(i.push(t),e.setAttribute("aria-labelledby",i.join(" ")))}removeFromAriaLabelledBy(e,t){let i=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(e=>e!==t);i.length>0?e.setAttribute("aria-labelledby",i.join(" ")):e.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new nI;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),nD.push(this),this.body.hidden=!1,this.popup.active=!0,await nW(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new nN)}else{let e=new nO;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),nB(this),await nW(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new nL)}}handleForChange(){let e=this.getRootNode();if(!e)return;let t=this.for?e.getElementById(this.for):null,i=this.anchor;if(t===i)return;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener("blur",this.handleBlur,{capture:!0,signal:r}),t.addEventListener("focus",this.handleFocus,{capture:!0,signal:r}),t.addEventListener("click",this.handleClick,{signal:r}),t.addEventListener("mouseover",this.handleMouseOver,{signal:r}),t.addEventListener("mouseout",this.handleMouseOut,{signal:r})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,nF(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,nF(this,"wa-after-hide")}render(){return ef`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${oY({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};nH.css=nj,nH.dependencies={"wa-popup":oZ},rV([ej("slot:not([name])")],nH.prototype,"defaultSlot",2),rV([ej(".body")],nH.prototype,"body",2),rV([ej("wa-popup")],nH.prototype,"popup",2),rV([eP()],nH.prototype,"placement",2),rV([eP({type:Boolean,reflect:!0})],nH.prototype,"disabled",2),rV([eP({type:Number})],nH.prototype,"distance",2),rV([eP({type:Boolean,reflect:!0})],nH.prototype,"open",2),rV([eP({type:Number})],nH.prototype,"skidding",2),rV([eP({attribute:"show-delay",type:Number})],nH.prototype,"showDelay",2),rV([eP({attribute:"hide-delay",type:Number})],nH.prototype,"hideDelay",2),rV([eP()],nH.prototype,"trigger",2),rV([eP({attribute:"without-arrow",type:Boolean,reflect:!0})],nH.prototype,"withoutArrow",2),rV([eP()],nH.prototype,"for",2),rV([eR()],nH.prototype,"anchor",2),rV([nT("open",{waitUntilFirstUpdate:!0})],nH.prototype,"handleOpenChange",1),rV([nT("for")],nH.prototype,"handleForChange",1),rV([nT(["distance","placement","skidding"])],nH.prototype,"handleOptionsChange",1),rV([nT("disabled")],nH.prototype,"handleDisabledChange",1),nH=rV([eT("wa-tooltip")],nH);var nV=Object.defineProperty,nq=Object.getOwnPropertyDescriptor,nU=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?nq(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&nV(t,i,s),s};let nK="gl-chart-slider",nY=class extends GlElement{constructor(){super(...arguments),this._value=0,this._max=0,this._min=0,this._shift=!1,this._dragging=!1,this.handleShowTooltip=()=>{let e=this.getTooltip();null!=e&&(e.style.setProperty("--max-width","none"),e.open=!0)},this.handleHideTooltip=()=>{if(this._dragging)return;let e=this.getTooltip();null!=e&&(e.open=!1)},this.handleDragStart=()=>{this._dragging=!0,this.handleShowTooltip()},this.handleDragEnd=()=>{if(this._dragging=!1,!this.data?.length||null==this._slider)return;let e=this._slider.value,t=this.data[e];null!=t&&this.emit("gl-slider-change",{date:new Date(t.date),shift:this.shift,interim:!1})}}get data(){return this._data}set data(e){this._data!==e&&(this._data=e,this._min=0,this._max=(e?.length??1)-1,this._value=this._max)}get shift(){return this._shift}set shift(e){this._shift=e}get value(){return this.data?.[this._value]}render(){return ef`<div class="slider-container">
			<wa-slider
				id="slider"
				.min=${this._min}
				.max=${this._max}
				.value=${this._value}
				.indicatorOffset=${this._max}
				with-tooltip
				tooltip-placement="top"
				.valueFormatter=${e=>"Hold Shift to Compare with Working Tree"}
				@change=${this.handleSliderInput}
				@input=${this.handleSliderInput}
				@click=${this.handleSliderInput}
				@pointerdown=${this.handleDragStart}
				@pointerup=${this.handleDragEnd}
				@pointercancel=${this.handleDragEnd}
				@pointerenter=${this.handleShowTooltip}
				@pointermove=${this.handleShowTooltip}
				@pointerleave=${this.handleHideTooltip}
			></wa-slider>
		</div>`}getTooltip(){return this._slider?.shadowRoot?.getElementById("tooltip")??null}select(e){let t;if("string"==typeof e)t=this.data?.findIndex(t=>t.sha===e);else{let i=e.toISOString();t=this.data?.findIndex(e=>e.date===i)}null!=t&&-1!==t&&(this._value=t)}handleSliderInput(e){if(!this.data?.length)return;let t=parseInt(e.target.value);"input"===e.type&&this.getTooltip()?.popup?.reposition();let i=new Date(this.data[t].date);this.emit("gl-slider-change",{date:i,shift:this.shift,interim:"input"===e.type})}};nY.tagName=nK,nY.styles=A`
		:host {
			display: block;
		}

		.slider-container {
			width: 100%;
			position: relative;
			padding-bottom: 0.4rem;
		}

		wa-slider {
			--track-size: 3px;
			--thumb-width: 16px;
			--thumb-height: 16px;
		}

		wa-slider::part(track) {
			background-color: var(--vscode-scrollbarSlider-background);
		}

		/* Indicator is anchored to max (= the working tree at the right edge) via indicator-offset,
		   so it spans the selected commit to the working tree. Hidden by default (matches track),
		   revealed in the accent color only while Shift is held. */
		wa-slider::part(indicator) {
			background-color: transparent;
		}

		:host([shift]) wa-slider::part(indicator) {
			background-color: var(--wa-color-primary-600);
		}

		/* WA's thumb defaults to var(--wa-form-control-activated-color) (background) + 2px
		   border in var(--wa-color-surface-default) — neither token is defined since we
		   don't ship WA's theme CSS, so the thumb is invisible without these overrides. */
		wa-slider::part(thumb) {
			cursor: pointer;
			background-color: var(--vscode-foreground);
			border: 2px solid var(--vscode-editor-background);
		}
	`,nU([eR()],nY.prototype,"_value",2),nU([eP({type:Array})],nY.prototype,"data",1),nU([eP({type:Boolean})],nY.prototype,"shift",1),nU([ej("wa-slider")],nY.prototype,"_slider",2),nY=nU([eT(nK)],nY);var nG=Object.defineProperty,nX=Object.getOwnPropertyDescriptor,nZ=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?nX(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&nG(t,i,s),s};let nJ=class extends lit_element_i{render(){return this.name?ef`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?ef`<a href=${this.href} class="avatar" part="avatar">${this.renderContent()}</a>`:ef`<span class="avatar" part="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?ef`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:ef`<slot class="thumb thumb--text"></slot>`}};nJ.styles=[A`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			.avatar {
				display: inline-flex;
				width: var(--gl-avatar-size, 1.6rem);
				aspect-ratio: 1;
				vertical-align: middle;
				border-radius: 100%;
				justify-content: center;
			}

			.thumb {
				border-radius: 50%;
			}

			.thumb--text {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: clamp(0.8rem, calc(var(--gl-avatar-size, 1.6rem) * 0.5), 1.1rem);
				line-height: 1;
				text-transform: uppercase;
				cursor: default;
				color: var(--gl-avatar-text-color, var(--vscode-descriptionForeground));
			}

			.thumb--media {
				display: block;
				width: 100%;
				height: auto;
				object-fit: cover;
				object-position: 50% 50%;
			}

			.avatar:hover {
				transform: scale(1.2);
			}
		`],nZ([eP()],nJ.prototype,"src",2),nZ([eP()],nJ.prototype,"name",2),nZ([eP()],nJ.prototype,"href",2),nJ=nZ([eT("gl-avatar")],nJ);var nQ=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,n1=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?n0(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&nQ(t,i,s),s};let n2=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ef`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??ey}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ef`<gl-tooltip placement=${this.tooltipPlacement??ey}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ef`<a
				class="control"
				aria-label=${this.ariaLabel??ey}
				tabindex="${(!1===this.disabled?void 0:-1)??ey}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ef`<button
			class="control"
			role=${this.role??ey}
			aria-label=${this.ariaLabel??ey}
			aria-checked=${this.ariaChecked??ey}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};n2.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},n2.styles=[rS,A`
			:host {
				/* Base color variables - can be overridden by variant */
				--button-foreground: var(--vscode-button-foreground);
				--button-background: var(--vscode-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-border: var(--vscode-button-border, transparent);

				/* Layout variables */
				--button-width: max-content;
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;

				display: inline-block;
				width: var(--button-width);
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: var(--button-width);
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${rv}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-alert-infoForeground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host([appearance='alert']:hover) {
				--button-foreground: var(--vscode-button-foreground);
			}

			/* Variant property for semantic states - appearance controls structure, variant controls color */

			/* Solid buttons (default and secondary) with variants get full color treatment */
			:host([variant='danger']) {
				--button-foreground: var(--vscode-inputValidation-errorForeground, #f48771);
				--button-background: var(--vscode-inputValidation-errorBackground, #5a1d1d);
				--button-hover-background: color-mix(
					in srgb,
					#000 30%,
					var(--vscode-inputValidation-errorBorder, #be1100)
				);
				--button-border: var(--vscode-inputValidation-errorBorder, #be1100);
			}

			:host([variant='warning']) {
				--button-foreground: var(--vscode-inputValidation-warningForeground, #ffcc66);
				--button-background: var(--vscode-inputValidation-warningBackground, #352a05);
				--button-hover-background: color-mix(
					in srgb,
					#000 30%,
					var(--vscode-inputValidation-warningBorder, #b89500)
				);
				--button-border: var(--vscode-inputValidation-warningBorder, #b89500);
			}

			:host([variant='success']) {
				--button-foreground: #fff;
				--button-background: color-mix(in srgb, #000 40%, var(--vscode-testing-iconPassed, #73c991));
				--button-hover-background: color-mix(in srgb, #000 30%, var(--vscode-testing-iconPassed, #73c991));
				--button-border: color-mix(in srgb, #000 40%, var(--vscode-testing-iconPassed, #73c991));
			}

			/* Transparent appearances (toolbar, input, alert) with variants only change foreground color */
			/* These come after the main variant rules to override background/border back to transparent */
			:host([appearance='toolbar'][variant='danger']),
			:host([appearance='input'][variant='danger']),
			:host([appearance='alert'][variant='danger']) {
				--button-foreground: var(--vscode-errorForeground, #f48771);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host([appearance='toolbar'][variant='warning']),
			:host([appearance='input'][variant='warning']),
			:host([appearance='alert'][variant='warning']) {
				--button-foreground: var(--vscode-editorWarning-foreground, #cca700);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host([appearance='toolbar'][variant='success']),
			:host([appearance='input'][variant='success']),
			:host([appearance='alert'][variant='success']) {
				--button-foreground: var(--vscode-testing-iconPassed, #73c991);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: var(--button-input-height, 1.8rem);
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			/* Give solid-filled buttons a bit more horizontal breathing room. Exposed via a
			   CSS var so consumers (e.g. compose-mode commit checkbox) can collapse to a
			   square icon button. */
			:host(:not([appearance])) .control,
			:host([appearance='secondary']) .control {
				padding-inline: var(--button-padding-inline, 0.8rem);
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],n1([ej(".control")],n2.prototype,"control",2),n1([eP({reflect:!0})],n2.prototype,"appearance",2),n1([eP({reflect:!0})],n2.prototype,"variant",2),n1([eP({type:Boolean,reflect:!0})],n2.prototype,"disabled",2),n1([eP({reflect:!0})],n2.prototype,"density",2),n1([eP({type:Boolean,reflect:!0})],n2.prototype,"full",2),n1([eP()],n2.prototype,"href",2),n1([eP()],n2.prototype,"tooltip",2),n1([eP()],n2.prototype,"tooltipPlacement",2),n1([eP({type:Boolean,reflect:!0})],n2.prototype,"truncate",2),n1([eP({type:String,attribute:"aria-label"})],n2.prototype,"ariaLabel",2),n2=n1([eT("gl-button")],n2);var n4=Object.defineProperty,n5=Object.getOwnPropertyDescriptor,n3=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?n5(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&n4(t,i,s),s};let n8="gl-copy-container",n6=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3,this._isMouseDown=!1,this.onMouseDown=()=>{this._isMouseDown=!0,window.addEventListener("mouseup",()=>this._isMouseDown=!1,{once:!0})},this.onFocusIn=()=>{this._isMouseDown||this.tooltip?.show()},this.onFocusOut=()=>{this.tooltip?.hide()}}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel,this.addEventListener("mousedown",this.onMouseDown),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut)}willUpdate(e){e.has("copyLabel")&&null==this._resetTimer&&(this.label=this.copyLabel)}disconnectedCallback(){this.cancelResetTimer(),this.removeEventListener("mousedown",this.onMouseDown),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut),super.disconnectedCallback?.()}render(){return this.content||this.disabled?ef`<gl-tooltip
			tabindex="0"
			.content="${this.label}"
			placement="${this.placement??ey}"
			@click=${this.onClick}
			@keydown=${this.onKeydown}
		>
			<slot></slot>
		</gl-tooltip>`:ey}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer(),await this.updateComplete,await this.tooltip?.updateComplete,this.tooltip?.show()}onKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onClick(e))}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};n6.tagName=n8,n6.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},n6.styles=A`
		:host {
			display: inline-block;
		}

		gl-tooltip {
			cursor: pointer;
		}

		gl-tooltip:focus-visible {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: 2px;
		}

		/* Hide focus outline on slotted copy icon - we show it on the host instead */
		::slotted(.copy-icon) {
			outline: none !important;
		}

		:host([appearance='toolbar']) {
			--copy-background: transparent;
			--copy-foreground: var(--vscode-foreground);
			--copy-hover-background: var(--vscode-toolbar-hoverBackground);
			--copy-border: transparent;
			--copy-border-radius: var(--gk-action-radius, 0.3rem);
			--copy-padding: 0 0.4rem;

			border: 1px solid var(--copy-border);
			border-radius: var(--copy-border-radius);
			background: var(--copy-background);
			color: var(--copy-foreground);
		}

		:host([appearance='toolbar']:hover) {
			background: var(--copy-hover-background);
		}

		:host([appearance='toolbar']:focus-within) {
			outline: 1px solid var(--color-focus-border);
			outline-offset: -1px;
		}

		:host([appearance='toolbar']) gl-tooltip {
			padding: var(--copy-padding);
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 2rem;
			box-sizing: border-box;
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}
	`,n3([eP({reflect:!0})],n6.prototype,"appearance",2),n3([eP({reflect:!1})],n6.prototype,"content",2),n3([eP()],n6.prototype,"copyLabel",2),n3([eP()],n6.prototype,"copiedLabel",2),n3([eP({type:Boolean,reflect:!0})],n6.prototype,"disabled",2),n3([eP()],n6.prototype,"placement",2),n3([eP({type:Number})],n6.prototype,"timeout",2),n3([eR()],n6.prototype,"label",2),n3([ej("gl-tooltip")],n6.prototype,"tooltip",2),n6=n3([eT(n8)],n6);var n7=Object.defineProperty,n9=Object.getOwnPropertyDescriptor,ae=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?n9(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&n7(t,i,s),s};let at=A`
	:host {
		display: inline-flex;
		align-items: baseline;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-inline-end: 0.2rem;
	}

	:host(:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.label--uncommitted {
		cursor: default;
	}

	.icon {
		margin-right: 0.3rem;
		align-self: center;
	}
`,ai=class extends lit_element_i{constructor(){super(...arguments),this.icon="git-commit",this.size=12}get label(){return sG(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){if(null==this.sha)return ey;if(!this.sha||sU(this.sha)){let e=sK(this.sha)?"check":"pencil";return ef`<code-icon part="icon" class="icon" icon="${e}" size="${this.size}"></code-icon
				><span part="label" class="label--uncommitted">${this.label}</span>`}return ef`<code-icon part="icon" class="icon" icon="${this.icon}" size="${this.size}"></code-icon
			><span part="label">${this.label}</span>`}};ai.styles=at,ae([eP({type:String})],ai.prototype,"sha",2),ae([eP({type:String})],ai.prototype,"icon",2),ae([eP({type:Number})],ai.prototype,"size",2),ai=ae([eT("gl-commit-sha")],ai);let ar=class extends lit_element_i{constructor(){super(...arguments),this.icon="git-commit",this.size=12,this.copyLabel="Copy",this.copiedLabel="Copied!",this.tooltipPlacement="top"}render(){return null==this.sha?ey:!this.sha||sU(this.sha)?ef`<gl-commit-sha .sha=${this.sha} .icon=${this.icon} .size=${this.size}></gl-commit-sha>`:ef`<gl-copy-container
			.content=${this.sha}
			placement="${this.tooltipPlacement}"
			.copyLabel=${this.copyLabel}
			.copiedLabel=${this.copiedLabel}
			.appearance=${this.appearance}
		>
			<gl-commit-sha
				exportparts="icon, label"
				.sha=${this.sha}
				.icon=${this.icon}
				.size=${this.size}
			></gl-commit-sha>
		</gl-copy-container>`}};ar.styles=[at,A`
			:host(:focus) {
				outline: none;
			}
		`],ae([eP({type:String})],ar.prototype,"sha",2),ae([eP({type:String})],ar.prototype,"icon",2),ae([eP({type:Number})],ar.prototype,"size",2),ae([eP({reflect:!0})],ar.prototype,"appearance",2),ae([eP({type:String,attribute:"copy-label"})],ar.prototype,"copyLabel",2),ae([eP({type:String,attribute:"copied-label"})],ar.prototype,"copiedLabel",2),ae([eP({type:String,attribute:"tooltip-placement"})],ar.prototype,"tooltipPlacement",2),ar=ae([eT("gl-commit-sha-copy")],ar);let ao=A`
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto;
		position: absolute;
		top: 5%;
		bottom: 45%;
		left: 0;
		right: 0;
	}

	::slotted(p) {
		padding-top: 1rem;
		color: var(--color-foreground--75);
		font-size: 1.4rem;
	}

	.watermark {
		position: relative;
		width: 12rem;
		height: 12rem;
	}

	.watermark-piece {
		position: absolute;
		inset: 0;
		transform-origin: center;
	}

	.watermark-piece svg {
		display: block;
		width: 100%;
		height: 100%;
		fill: color-mix(in srgb, var(--color-foreground) 40%, var(--color-background));
	}
`,as=A`
	@keyframes pulse {
		0% {
			transform: scale(0.9);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(0.9);
		}
	}

	/* Animate the HTML wrapper, not the SVG path — Blink composites HTML transforms,
	   but the same animation on SVG sub-elements runs on the main thread. */
	.watermark--pulse .watermark-piece {
		transform: scale(0.9);
		animation: pulse 1.8s ease-in-out infinite;
		will-change: transform;
	}

	/* Stagger the pulse for a wave effect across the watermark pieces. */
	.watermark-piece:nth-of-type(1) {
		animation-delay: 0.2s;
	}

	.watermark-piece:nth-of-type(2) {
		animation-delay: 0.4s;
	}

	.watermark-piece:nth-of-type(3),
	.watermark-piece:nth-of-type(4),
	.watermark-piece:nth-of-type(5) {
		animation-delay: 0.1s;
	}
`;var an=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,al=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?aa(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&an(t,i,s),s};let ah=["M14 3.25C12.5883 3.25 11.1904 3.52806 9.88615 4.0683C8.5819 4.60853 7.39683 5.40037 6.3986 6.3986C5.40037 7.39683 4.60853 8.5819 4.06829 9.88615C3.52806 11.1904 3.25 12.5883 3.25 14C3.25 15.4117 3.52806 16.8096 4.06829 18.1138C4.60853 19.4181 5.40037 20.6032 6.3986 21.6014C7.39683 22.5996 8.5819 23.3915 9.88615 23.9317C11.1904 24.4719 12.5883 24.75 14 24.75C16.8511 24.75 19.5854 23.6174 21.6014 21.6014C23.6174 19.5854 24.75 16.8511 24.75 14C24.75 11.1489 23.6174 8.41462 21.6014 6.3986C19.5854 4.38259 16.8511 3.25 14 3.25ZM2 14C2 10.8174 3.26428 7.76516 5.51472 5.51472C7.76516 3.26428 10.8174 2 14 2C17.1826 2 20.2348 3.26428 22.4853 5.51472C24.7357 7.76516 26 10.8174 26 14C26 17.1826 24.7357 20.2348 22.4853 22.4853C20.2348 24.7357 17.1826 26 14 26C10.8174 26 7.76516 24.7357 5.51472 22.4853C3.26428 20.2348 2 17.1826 2 14Z","M18 15L11.5 8.5L12.5 7.5L19 14L18 15ZM11.5 20V8H13V20H11.5Z","M12.25 10.5C12.8467 10.5 13.419 10.2629 13.841 9.84099C14.2629 9.41903 14.5 8.84674 14.5 8.25C14.5 7.65326 14.2629 7.08097 13.841 6.65901C13.419 6.23705 12.8467 6 12.25 6C11.6533 6 11.081 6.23705 10.659 6.65901C10.2371 7.08097 10 7.65326 10 8.25C10 8.84674 10.2371 9.41903 10.659 9.84099C11.081 10.2629 11.6533 10.5 12.25 10.5Z","M18.25 16.5C18.5455 16.5 18.8381 16.4418 19.111 16.3287C19.384 16.2157 19.6321 16.0499 19.841 15.841C20.0499 15.6321 20.2157 15.384 20.3287 15.111C20.4418 14.8381 20.5 14.5455 20.5 14.25C20.5 13.9545 20.4418 13.6619 20.3287 13.389C20.2157 13.116 20.0499 12.8679 19.841 12.659C19.6321 12.4501 19.384 12.2843 19.111 12.1713C18.8381 12.0582 18.5455 12 18.25 12C17.6533 12 17.081 12.2371 16.659 12.659C16.2371 13.081 16 13.6533 16 14.25C16 14.8467 16.2371 15.419 16.659 15.841C17.081 16.2629 17.6533 16.5 18.25 16.5Z","M12.25 22C12.8467 22 13.419 21.7629 13.841 21.341C14.2629 20.919 14.5 20.3467 14.5 19.75C14.5 19.1533 14.2629 18.581 13.841 18.159C13.419 17.7371 12.8467 17.5 12.25 17.5C11.6533 17.5 11.081 17.7371 10.659 18.159C10.2371 18.581 10 19.1533 10 19.75C10 20.3467 10.2371 20.919 10.659 21.341C11.081 21.7629 11.6533 22 12.25 22Z"],ac=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){let e=`watermark${this.pulse?" watermark--pulse":""}`;return ef`<div class="container">
			<div class="${e}">
				${ah.map(e=>ef`<div class="watermark-piece">
							<svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
								<path d=${e} />
							</svg>
						</div>`)}
			</div>
			<slot></slot>
		</div>`}};ac.styles=[ao,as],al([eP({type:Boolean})],ac.prototype,"pulse",2),ac=al([eT("gl-watermark-loader")],ac);var ad=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,au=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?ap(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&ad(t,i,s),s};let ag=["#3D7EFF","#FF9F40","#1AB394","#E91E63","#9C27B0","#8B5A2B","#FF6B9D","#7B7B7B","#FFC107","#26A69A"],am="gl-timeline-chart",ab=class extends GlElement{constructor(){super(...arguments),this.placement="editor",this.currentUserNameStyle="nameAndYou",this.sliceBy="author",this.loading=!1,this.loadingMore=!1,this.hasMore=!0,this._data=null,this._shiftKeyPressed=!1,this._zoomed=!1,this._renderTick=0,this._hiddenSlices=new Set,this._binUnit="none",this._scrollY=0,this._maxScrollY=0,this._isBrushing=!1,this._isThumbDragging=!1,this._thumbDragStartY=0,this._thumbDragStartScrollY=0,this._isHThumbDragging=!1,this._hThumbDragStartX=0,this._hThumbDragStartZoomOldest=0,this._hThumbDragStartZoomNewest=0,this._hoverIntensity=0,this._hoverIntensityTarget=0,this._outgoingHoverIntensity=0,this._lastFrameTime=0,this._onDocumentKeyDown=e=>{this._shiftKeyPressed!==e.shiftKey&&(this._shiftKeyPressed=e.shiftKey)},this._onDocumentKeyUp=e=>{this._shiftKeyPressed!==e.shiftKey&&(this._shiftKeyPressed=e.shiftKey)},this._onSliderChanged=e=>{let t=e.detail.date.getTime(),i=this._lookupCommitByTs(t);if(null!=i){if(this._selectedSha=i.sha,e.detail.interim?(this._scrubSha=i.sha,this._shaHovered=i.sha,this._hoverVolumeIndex=void 0):(this._scrubSha=void 0,this._shaHovered=void 0,this._setHover(void 0),this._hideTooltip()),null!=this._zoomRange){let e=this._zoomRange.newest-this._zoomRange.oldest;if(t<this._zoomRange.oldest||t>this._zoomRange.newest){let i=e/2,r=t-i,o=t+i,s=this._data;if(null!=s&&s.length>0){let e=s[0].sort,t=s.at(-1).sort;o>e&&(r-=o-e,o=e),r<t&&(o+=t-r,r=t),r=Math.max(t,r),o=Math.min(e,o)}this._zoomRange={oldest:r,newest:o},this._viewModel=void 0}}this.emit("gl-commit-select",{id:i.sha,shift:e.detail.shift,interim:e.detail.interim}),this._requestDraw()}},this._axisLabelWidthCache=new Map,this._layoutSliceCount=-1,this._onPointerDown=e=>{let t=this._layout;if(null==t)return;if(null!=this._zoomRange&&null!=this._viewModel){let i=nu(e.offsetX,e.offsetY,t,this._zoomRange,this._viewModel.oldest,this._viewModel.newest);if(i?.kind==="thumb"){this._isHThumbDragging=!0,this._hThumbDragStartX=e.offsetX,this._hThumbDragStartZoomOldest=this._zoomRange.oldest,this._hThumbDragStartZoomNewest=this._zoomRange.newest,e.target.setPointerCapture(e.pointerId),e.preventDefault();return}if(i?.kind==="track"){let e=this._zoomRange.newest-this._zoomRange.oldest,t=this._viewModel.oldest,r=this._viewModel.newest;if(e>=r-t)return;let o="before"===i.side?-1:1,s=Math.max(t,Math.min(r-e,this._zoomRange.oldest+o*e*.9));this._zoomRange={oldest:s,newest:s+e},this._viewModel=void 0,this._requestDraw();return}}let i=nc(e.offsetX,e.offsetY,this._scrollY,t);if(i?.kind==="thumb"){this._isThumbDragging=!0,this._thumbDragStartY=e.offsetY,this._thumbDragStartScrollY=this._scrollY,e.target.setPointerCapture(e.pointerId),e.preventDefault();return}if(i?.kind==="track"){let e=t.swimlaneBottom-t.swimlaneTop,r="up"===i.side?-1:1;this._scrollY=Math.max(0,Math.min(this._maxScrollY,this._scrollY+r*e*.9)),this._requestDraw();return}if(null!=this._viewModel&&e.offsetY>=t.volumeTop&&e.offsetY<=t.volumeBottom&&e.offsetX>=t.chartLeft&&e.offsetX<=t.chartRight){let i=this._zoomRange?.oldest??this._viewModel.oldest,r=this._zoomRange?.newest??this._viewModel.newest,o=this._hiddenSlices.size>0?this._hiddenSlices:void 0,s=function(e,t,i,r,o,s,a,h=3){let c;if(e<s.chartLeft||e>s.chartRight||t<s.volumeTop||t>s.volumeBottom)return;let p=-1,u=1/0,[g,m]=nh(i.timestamps,r,o);for(let t=g;t<m;t++){let g=i.sliceIndex[t];if(a?.has(g))continue;let m=i.additions[t]+i.deletions[t];if(0===m)continue;let b=no(i.timestamps[t],r,o,s);if(Number.isNaN(b)||b<s.chartLeft||b>s.chartRight)continue;let f=Math.abs(e-b);!(f>h)&&(m>p||m===p&&f<u)&&(c=t,p=m,u=f)}return c}(e.offsetX,e.offsetY,this._viewModel,i,r,t,o);if(null!=s){this._zoomToVolumeBar(s),e.preventDefault();return}}e.offsetY>=t.swimlaneTop&&e.offsetY<=t.swimlaneBottom&&(this._isBrushing=!0,this._brushRange={startX:e.offsetX,endX:e.offsetX},e.target.setPointerCapture(e.pointerId),this._requestDraw())},this._onPointerMove=e=>{let t=this._layout,i=this._viewModel;if(null==t||null==i||null!=this._scrubSha)return;if(this._isHThumbDragging&&null!=this._viewModel){let i=this._hThumbDragStartZoomNewest-this._hThumbDragStartZoomOldest,r=this._viewModel.oldest,o=this._viewModel.newest;if(i>=o-r)return;let s=ng(e.offsetX-this._hThumbDragStartX,t,r,o),a=Math.max(r,Math.min(o-i,this._hThumbDragStartZoomOldest+s));this._zoomRange={oldest:a,newest:a+i},this._viewModel=void 0,this._requestDraw();return}if(this._isThumbDragging){var r;let i,o=(r=e.offsetY-this._thumbDragStartY,(i=t.swimlaneBottom-t.swimlaneTop)<=0?0:r*(t.virtualSwimlaneHeight/i));this._scrollY=Math.max(0,Math.min(this._maxScrollY,this._thumbDragStartScrollY+o)),this._requestDraw();return}if(this._isBrushing&&this._brushRange){this._brushRange={startX:this._brushRange.startX,endX:e.offsetX},this._requestDraw();return}let o=this._zoomRange?.oldest??i.oldest,s=this._zoomRange?.newest??i.newest,a=na(e.offsetX,e.offsetY,this._scrollY,i,o,s,t),h=this._hiddenSlices.size>0?this._hiddenSlices:void 0,c=null==a?function(e,t,i,r,o,s,a){let h;if(e<s.chartLeft||e>s.chartRight||t<s.volumeTop||t>s.volumeBottom)return;let c=1/0,p=-1,[u,g]=nh(i.timestamps,r,o);for(let t=u;t<g;t++){let u=i.sliceIndex[t];if(a?.has(u))continue;let g=i.additions[t]+i.deletions[t];if(0===g)continue;let m=no(i.timestamps[t],r,o,s);if(Number.isNaN(m)||m<s.chartLeft||m>s.chartRight)continue;let b=Math.abs(e-m);(b<c||b===c&&g>p)&&(h=t,c=b,p=g)}return h}(e.offsetX,e.offsetY,i,o,s,t,h):void 0;c!==this._hoverVolumeIndex&&(this._hoverVolumeIndex=c,this._requestDraw());let p=a??c;this._setHover(p);let u=this._zoomed&&null!=nu(e.offsetX,e.offsetY,t,this._zoomRange??i,i.oldest,i.newest)||null!=nc(e.offsetX,e.offsetY,this._scrollY,t),g=this._canvas;if(g){let e;e=null!=a?"pointer":u?"default":null!=c?"zoom-in":"default",g.style.cursor!==e&&(g.style.cursor=e)}this._showTooltip(p,e.offsetX,e.offsetY)},this._onPointerUp=e=>{if(e.target.releasePointerCapture?.(e.pointerId),this._isHThumbDragging){this._isHThumbDragging=!1;return}if(this._isThumbDragging){this._isThumbDragging=!1;return}if(this._isBrushing&&this._brushRange){let{startX:t,endX:i}=this._brushRange,r=Math.abs(i-t);if(this._isBrushing=!1,this._brushRange=void 0,r>=3){let e=this._layout,r=this._viewModel;if(e&&r){let o=this._zoomRange?.oldest??r.oldest,s=this._zoomRange?.newest??r.newest,a=ns(Math.min(t,i),o,s,e),h=ns(Math.max(t,i),o,s,e);Number.isNaN(a)||Number.isNaN(h)||!(h>a)?this._requestDraw():this._applyZoom((a+h)/2,h-a)}else this._requestDraw();return}let o=this._layout,s=this._viewModel;if(o&&s){let t=this._zoomRange?.oldest??s.oldest,r=this._zoomRange?.newest??s.newest,a=na(i,e.offsetY,this._scrollY,s,t,r,o);if(null!=a){let t=s.commits[a].sha;this._selectedSha=t,this._slider?.select(t),this.emit("gl-commit-select",{id:t,shift:e.shiftKey})}}this._requestDraw()}},this._onPointerLeave=()=>{if(null!=this._scrubSha)return;this._setHover(void 0),this._shaHovered=void 0,null!=this._hoverVolumeIndex&&(this._hoverVolumeIndex=void 0,this._requestDraw());let e=this._canvas;e&&(e.style.cursor="default"),this._hideTooltip()},this._onWheel=e=>{let t=this._layout,i=this._viewModel;if(null==t||null==i)return;if(e.ctrlKey||e.metaKey){e.preventDefault();let t=this._zoomRange?.oldest??i.oldest,r=(this._zoomRange?.newest??i.newest)-t;if(r<=0)return;let o=Math.exp(.001*e.deltaY);this._applyZoom(this._zoomAnchorTs(),r*o);return}let r=0!==e.deltaX?e.deltaX:e.shiftKey?e.deltaY:0;if(0!==r){let o=this._zoomRange?.oldest??i.oldest,s=(this._zoomRange?.newest??i.newest)-o,a=i.newest-i.oldest;if(s>0&&s<a){e.preventDefault();let a=ng(r,t,i.oldest,i.newest),h=Math.max(i.oldest,Math.min(i.newest-s,o+a));this._zoomRange={oldest:h,newest:h+s},this._zoomed=!0,this._viewModel=void 0,this._requestDraw()}return}this._maxScrollY>0&&(e.preventDefault(),this._scrollY=Math.max(0,Math.min(this._maxScrollY,this._scrollY+e.deltaY)),this._requestDraw())},this._onKeyDown=e=>{let t;if("Escape"===e.key){null!=this._zoomRange&&(this._zoomRange=void 0,this._zoomed=!1,this._viewModel=void 0,this._requestDraw());return}let i=this._viewModel;if(null==i||0===i.commits.length)return;let r=i.commits.length-1;if("ArrowLeft"===e.key||"ArrowRight"===e.key){let o="ArrowLeft"===e.key?-1:1;t=Math.max(0,Math.min(r,(null!=this._selectedSha?i.shaToIndex.get(this._selectedSha)??0:0)+o))}else if("Home"===e.key)t=0;else{if("End"!==e.key)return;t=r}let o=i.commits[t].sha;this._selectedSha=o,this._scrollSelectedIntoView(t),this.emit("gl-commit-select",{id:o,shift:e.shiftKey}),e.preventDefault(),this._requestDraw()},this._tooltipW=0,this._tooltipH=0}get dataPromise(){return this._dataPromise}set dataPromise(e){this._dataPromise!==e&&(this._dataPromise=e,this._loadData())}connectedCallback(){super.connectedCallback?.(),this._themeDisposable=ro(()=>{this._theme=void 0,this._axisLabelWidthCache.clear(),this._ensureTheme(),this._renderTick++,this._requestDraw()}),this._resizeObserver=new ResizeObserver(()=>{this._layout=void 0,this._requestDraw()}),document.addEventListener("keydown",this._onDocumentKeyDown),document.addEventListener("keyup",this._onDocumentKeyUp)}disconnectedCallback(){super.disconnectedCallback?.(),this._themeDisposable?.dispose(),this._themeDisposable=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._abortController?.abort(),this._abortController=void 0,null!=this._drawRAF&&(cancelAnimationFrame(this._drawRAF),this._drawRAF=void 0),document.removeEventListener("keydown",this._onDocumentKeyDown),document.removeEventListener("keyup",this._onDocumentKeyUp),this._loading?.cancel()}firstUpdated(){if(null==this._canvas)return;this._ctx=this._canvas.getContext("2d",{alpha:!1})??void 0;let e=this.shadowRoot?.getElementById("wrapper");e&&this._resizeObserver&&this._resizeObserver.observe(e),this._requestDraw()}updated(e){let t=null!=this.scope?`${this.scope.type}::${this.scope.uri}::${this.scope.relativePath??""}`:void 0,i=t!==this._lastScopeKey;i&&(this._lastScopeKey=t),(e.has("sliceBy")||e.has("head")||i)&&(this._viewModel=void 0,this._zoomRange=void 0,this._scrollY=0);let r=this._lastResetWindowSpanMs,o=r?.value,s=this.windowSpanMs??void 0,a=null!=r&&null==o!=(null==s),h=null!=o&&null!=s&&Math.abs(s-o)>=6e4;if(null==r||a||h)if(this._lastResetWindowSpanMs={value:s},null==s)this._zoomRange=void 0,this._zoomed=!1,this._loadMoreEmittedFor=void 0;else{let e=this._zoomRange?.newest??this._data?.[0]?.sort;null!=e&&(this._zoomRange={oldest:e-s,newest:e},this._zoomed=!1,this._loadMoreEmittedFor=void 0)}this._maybeEmitVisibleRange(),this._requestDraw()}async _loadData(){this._abortController?.abort(),this._abortController=new AbortController;let e=this._abortController.signal;if(!this._loading?.pending){let e;this._loading=((e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0}).promise=new Promise((t,i)=>{e.fulfill=function(i){e.pending=!1,t(i)},e.cancel=function(t){e.pending=!1,null!=t?i(t):i()}}),e),this._loading.promise.finally(()=>this._loading=void 0),this.emit("gl-loading",this._loading.promise)}if(null==this._dataPromise){this._data=null,this._commitByTs=void 0,this._viewModel=void 0,this._loading?.fulfill();return}try{let t=await this._dataPromise;if(e.aborted)return void this._loading?.cancel();let i=this._data?.[0]?.sort,r=t?.[0]?.sort,o=this._data?.[0]?.sha,s=t?.[0]?.sha,a=this._data?.[0]!=null&&sZ(this._data[0]),h=t?.[0]!=null&&sZ(t[0]),c=null!=i&&null!=r&&i===r&&(this._data?.length??0)<(t?.length??0);if(this._data=t,this._dataReversed=t?.toReversed(),this._commitByTs=void 0,this._viewModel=void 0,!c&&!(null!=o&&null!=s&&o===s||a&&h)){this._zoomRange=void 0,this._zoomed=!1,this._scrollY=0;let e=null!=this._selectedSha;if(this._selectedSha=t[0]?.sha,e||null==this._selectedSha||this.emit("gl-commit-select",{id:this._selectedSha,shift:!1,auto:!0}),null!=this.windowSpanMs){let e=r??Date.now();this._zoomRange={oldest:e-this.windowSpanMs,newest:e},this._zoomed=!1}}this._loadMoreEmittedFor=void 0,null!=this._ctx?this._draw():this._requestDraw(),this._loading?.fulfill()}catch{this._data=null,this._commitByTs=void 0,this._loading?.cancel()}}render(){let e=this.loadingMore&&this.hasMore&&(this._data?.length??0)>0;return ef`<div id="wrapper" tabindex="0" aria-label=${this._a11yWrapperLabel} @keydown=${this._onKeyDown}>
				${this._renderNotice()}
				<canvas
					id="canvas"
					data-brushing=${this._isBrushing?"true":"false"}
					@pointerdown=${this._onPointerDown}
					@pointermove=${this._onPointerMove}
					@pointerup=${this._onPointerUp}
					@pointerleave=${this._onPointerLeave}
					@wheel=${this._onWheel}
				></canvas>
				${this._renderRail()} ${this._renderAxisOverlay()}
				${e?ef`<div
							class="load-more-edge-line"
							aria-label="Loading older history"
							role="progressbar"
						></div>`:ey}
				<div id="tooltip" class="tooltip"></div>
				${this._renderA11yLive()}
			</div>
			${this._data?.length?this._renderFooter():ey}`}_renderRail(){let e=this._layout,t=this._viewModel;if(null==e||null==t)return ey;this._renderTick;let i=this._theme?.slicePalette??ag,r=this.sliceBy,o=t.slices.map((o,s)=>{let a=e.swimlaneTop+e.swimlaneTopBufferPx+s*e.rowHeight+e.rowHeight/2-this._scrollY;if(a<e.swimlaneTop||a>e.swimlaneBottom)return ey;let h=null!=this._hoverSliceIndex&&this._hoverSliceIndex!==s,c=this._hoverSliceIndex===s,p=this._hiddenSlices?.has(s)===!0,u=i[o.colorIndex%i.length],g=!p&&t.slices.length>1&&this._hiddenSlices.size===t.slices.length-1,m=`Click to ${g?"Unsolo":p?"Show":"Hide"} \xb7 [${nt()}] Click to ${g?"Unsolo":"Solo"}`,b=null!=o.commitCount?tH("commit",o.commitCount):"";if("branch"===r)return ef`<div
					class="rail__branch"
					data-dimmed=${h?"true":"false"}
					data-active=${c?"true":"false"}
					data-hidden=${p?"true":"false"}
					style=${rm({top:`${a}px`,"--rail-avatar-color":u})}
					@pointerenter=${()=>this._setSliceHover(s)}
					@pointerleave=${()=>this._setSliceHover(void 0)}
					@click=${e=>this._toggleSlice(s,e)}
				>
					<gl-tooltip placement="bottom-start" distance=${8}>
						<span class="rail__branch-icon"><code-icon icon="git-branch"></code-icon></span>
						<span class="rail__branch-name">${o.name}</span>
						<div slot="content">
							${b?ef`<div class="rail-tooltip__meta">${b}</div>`:ey}
							<div class="rail-tooltip__hint">${m}</div>
						</div>
					</gl-tooltip>
				</div>`;let f=function(e){if(!e)return"?";let t=e.split(/[\s_\-/.@]+/).map(e=>e.trim()).filter(e=>e.length>0);return 0===t.length?"?":1===t.length?t[0].slice(0,2):t[0][0]+(t.at(-1)??"")[0]}(o.name),v=ni({name:o.name,current:o.current},this.currentUserNameStyle);return ef`<div
				class="rail__avatar"
				data-dimmed=${h?"true":"false"}
				data-active=${c?"true":"false"}
				data-hidden=${p?"true":"false"}
				style=${rm({top:`${a}px`,"--rail-avatar-color":u,"--gl-avatar-size":"24px"})}
				@pointerenter=${()=>this._setSliceHover(s)}
				@pointerleave=${()=>this._setSliceHover(void 0)}
				@click=${e=>this._toggleSlice(s,e)}
			>
				<gl-tooltip placement="right" distance=${10}>
					<gl-avatar .src=${o.avatarUrl}>${f}</gl-avatar>
					<div slot="content">
						<div class="rail-tooltip__name">${v}</div>
						${b?ef`<div class="rail-tooltip__meta">${b}</div>`:ey}
						<div class="rail-tooltip__hint">${m}</div>
					</div>
				</gl-tooltip>
			</div>`}),s=ey;if(e.chartLeft>0){let i=Math.max(1,t.yMaxAdd+t.yMaxDel),r=e.volumeBottom,o=e.volumeTop,a=Math.max(0,r-o-2),h=0;a>=50?h=3:a>=30?h=2:a>=14&&(h=1);let c=a>=50;if(h>0||c){let e=(h>0?function(e,t){if(e<=0||t<=0)return[];let i=new Set,r=[];for(let o=1;o<=t;o++){let s=o/t,a=Math.min(e,s*s*e),h=Math.min(e,function(e){if(e<=0)return 0;let t=Math.pow(10,Math.floor(Math.log10(e))),i=e/t;return(i<1.5?1:i<3?2:i<7?5:10)*t}(a));h>0&&!i.has(h)&&(i.add(h),r.push(h))}return r}(i,h):[]).map(e=>{let t=r-nd(e,i,a),o=`${t}px`;return ef`
						<div class="rail__y2-tick" style=${rm({top:o})}></div>
						<div class="rail__y2-label" style=${rm({top:o})}>${e>=1e6?`${(e/1e6).toFixed(1)} M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)} K`:String(Math.round(e))}</div>
					`});s=ef`
					${c?ef`<div class="rail__y2-title" style=${rm({top:`${(r+o)/2}px`})}>
								Lines changed
							</div>`:ey}
					${e}
				`}}return ef`<aside class="rail" aria-label="Authors">${o} ${s}</aside>`}_renderAxisOverlay(){let e=this._layout,t=this._viewModel,i=this._theme;if(null==e||null==t||null==i)return ey;this._renderTick;let r=this._zoomRange?.oldest??t.oldest,o=this._zoomRange?.newest??t.newest,s=e.axisStripBottom-e.axisStripTop;if(s<=0||o<=r)return ey;let a=function(e,t,i,r,o){if(i<=t)return[];let s=s=>{let a,h=[],c=-1/0,p=!0;for(let u of function*(e,t,i){let r;if(t<=e)return;let o=new Date(e);switch(i.unit){case"hour":r=new Date(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours()).getTime();break;case"day":r=new Date(o).setHours(0,0,0,0);break;case"week":{let e=new Date(o);e.setHours(0,0,0,0);let t=(e.getDay()+6)%7;e.setDate(e.getDate()-t),r=e.getTime();break}case"month":r=new Date(o.getFullYear(),o.getMonth(),1).getTime();break;case"quarter":{let e=3*Math.floor(o.getMonth()/3);r=new Date(o.getFullYear(),e,1).getTime();break}case"year":r=new Date(o.getFullYear(),0,1).getTime()}let s=!1;for(r>e&&(yield e,s=!0);r<=t;)if(s&&1>Math.abs(r-e)||(yield r),s=!1,"month"===i.unit||"quarter"===i.unit||"year"===i.unit){let e=new Date(r),t="month"===i.unit?1:"quarter"===i.unit?3:12;e.setMonth(e.getMonth()+t),r=e.getTime()}else r+=i.stepMs}(t,i,s)){let g=no(u,t,i,e);if(Number.isNaN(g)||g<e.chartLeft||g>e.chartRight)continue;let m=new Date(u),b=m.getFullYear(),f=p||b!==a,v=r(m,s.unit,{showYear:f}),_=o(v),w=g-_/2,x=g+_/2;w<c+6||(c=x,a=b,p=!1,h.push({timestamp:u,x:Math.round(g),label:v,unit:s.unit}))}return h},a=[function(e,t,i=80){if(t<=0||e<=0)return{stepMs:864e5,unit:"day"};let r=e/Math.max(2,Math.floor(t/i));return r<=216e5?{stepMs:36e5,unit:"hour"}:r<=1296e5?{stepMs:864e5,unit:"day"}:r<=864e6?{stepMs:6048e5,unit:"week"}:r<=3888e6?{stepMs:2592e6,unit:"month"}:r<=1728e7?{stepMs:7776e6,unit:"quarter"}:{stepMs:31536e6,unit:"year"}}(i-t,e.chartWidth),{stepMs:6048e5,unit:"week"},{stepMs:864e5,unit:"day"},{stepMs:36e5,unit:"hour"}],h=[];for(let e of a)if((h=s(e)).length>=2)break;return h}(e,r,o,(e,t,i)=>(function(e,t,i,r){switch(t){case"hour":return eF(e,"h a");case"year":return eF(e,"YYYY");case"quarter":case"month":return r.showYear?eF(e,"MMM YYYY"):eF(e,"MMM");default:return eF(e,r.showYear?i||"MMM D, YYYY":i||"MMM D")}})(e,t,this.shortDateFormat,i),e=>this._measureAxisLabelWidth(e)),h=this._hasHorizontalOverflow?np(e,t.oldest,t.newest,this._zoomRange):void 0,c=e.volumeBottom-e.volumeTop<=0,p={top:`${e.axisStripTop}px`,height:`${s}px`,"--axis-label-color":i.axisLabel,"--axis-domain-color":i.axisDomain,"--axis-scrollbar-track":i.scrollThumb,"--axis-scrollbar-thumb":i.scrollThumbHover},u={left:`${e.chartLeft}px`,width:`${e.chartRight-e.chartLeft}px`},g={left:`${e.chartLeft}px`,top:`${s-1}px`,width:`${e.chartRight-e.chartLeft}px`};return ef`<div
			class="axis-overlay"
			data-compact=${c?"true":"false"}
			aria-hidden="true"
			style=${rm(p)}
		>
			<div class="axis-overlay__glass" style=${rm(u)}></div>
			<div class="axis-overlay__baseline" style=${rm(g)}></div>
			${a.map(e=>{let t=`${e.x}px`;return c?ef`<div class="axis-overlay__label" style=${rm({left:t})}>${e.label}</div>`:ef`<div
								class="axis-overlay__tick"
								style=${rm({left:t,top:`${s-2}px`})}
							></div>
							<div class="axis-overlay__label" style=${rm({left:t})}>${e.label}</div>`})}
			${null!=h?ef`<div
						class="axis-overlay__scrollbar"
						style=${rm({left:`${h.trackX}px`,top:`${h.trackY-e.axisStripTop}px`,width:`${h.trackWidth}px`,height:`${h.trackHeight}px`})}
					>
						<div
							class="axis-overlay__scrollbar-thumb"
							style=${rm({left:`${h.thumbX-h.trackX}px`,width:`${h.thumbWidth}px`})}
						></div>
					</div>`:ey}
		</div>`}_setSliceHover(e){this._hoverSliceIndex!==e&&(this._hoverSliceIndex=e,this._requestDraw())}_toggleSlice(e,t){t.stopPropagation();let i=this._viewModel;if(null==i)return;let r=i.slices.length,o=this._hiddenSlices??new Set,s=!o.has(e)&&r>1&&o.size===r-1;if(t.altKey)if(s)this._hiddenSlices=new Set;else{let t=new Set;for(let i=0;i<r;i++)i!==e&&t.add(i);this._hiddenSlices=t}else if(s)this._hiddenSlices=new Set;else{let t=new Set(o);t.has(e)?t.delete(e):t.add(e),this._hiddenSlices=t}this._requestDraw()}_renderFooter(){let e=this._shaHovered??this._selectedSha;return ef`<footer>
			<gl-chart-slider
				.data=${this._dataReversed}
				?shift=${this._shiftKeyPressed}
				@gl-slider-change=${this._onSliderChanged}
			></gl-chart-slider>
			<gl-commit-sha-copy .sha=${e} .size=${16}></gl-commit-sha-copy>
			<div class="actions">
				${this._zoomed?ef`<gl-button
							appearance="toolbar"
							@click=${e=>e.shiftKey||e.altKey?this.resetZoom():this._zoomBy(-1)}
							aria-label="Zoom Out"
						>
							<code-icon icon="zoom-out"></code-icon>
							<span slot="tooltip">Zoom Out<br />${nt()} Reset Zoom</span>
						</gl-button>`:ey}
				<gl-button
					appearance="toolbar"
					@click=${()=>this._zoomBy(.5)}
					tooltip="Zoom In"
					aria-label="Zoom In"
				>
					<code-icon icon="zoom-in"></code-icon>
				</gl-button>
			</div>
		</footer>`}_lookupCommitByTs(e){if(null==this._commitByTs){let e=new Map;if(null!=this._data)for(let t of this._data)e.set(t.sort,t);this._commitByTs=e}return this._commitByTs.get(e)}_resolveScrubHover(){if(null==this._scrubSha||null==this._viewModel||null==this._layout)return;let e=this._viewModel.shaToIndex.get(this._scrubSha);if(null==e){this._setHover(void 0),this._hideTooltip();return}this._setHover(e);let t=this._layout,i=this._viewModel,r=this._zoomRange?.oldest??i.oldest,o=this._zoomRange?.newest??i.newest,s=no(i.timestamps[e],r,o,t),a=nn(i.sliceIndex[e],t)-this._scrollY+t.swimlaneTop;this._showTooltip(e,s,a)}_applyZoom(e,t){let i=this._viewModel;if(null==i)return;let r=null!=this.windowSpanMs,o=i.newest-i.oldest,s=r?this.windowSpanMs:o,a=Math.max(36e5,Math.min(s,t));s-a>0&&s-a<6e4&&(a=s);let h=e-a/2,c=e+a/2;c>i.newest&&(h-=c-i.newest,c=i.newest),h<i.oldest&&(c+=i.oldest-h,h=i.oldest),this._zoomRange={oldest:h,newest:c},this._zoomed=a<s,this._viewModel=void 0,this._requestDraw()}_zoomAnchorTs(){let e=this._viewModel,t=this._selectedSha;if(null!=e&&null!=t){let i=e.shaToIndex.get(t);if(null!=i)return e.timestamps[i]}return((this._zoomRange?.oldest??e?.oldest??Date.now())+(this._zoomRange?.newest??e?.newest??Date.now()))/2}_zoomToVolumeBar(e){let t=this._viewModel;if(null==t)return;let i=t.timestamps[e];if(null==i||Number.isNaN(i))return;let r=this._zoomRange?.oldest??t.oldest,o=this._zoomRange?.newest??t.newest;this._applyZoom(i,(o-r)*.1)}_zoomBy(e){if(0===e)return void this.resetZoom();let t=this._viewModel;if(null==t)return;let i=this._zoomRange?.oldest??t.oldest,r=this._zoomRange?.newest??t.newest;this._applyZoom(this._zoomAnchorTs(),(r-i)*(1-e))}_renderNotice(){return!((this._data?.length??0)>0)&&(this.loading||this._loading?.pending||null==this._data)?ef`<div class="notice notice--blur">
				<gl-watermark-loader pulse><p>Loading...</p></gl-watermark-loader>
			</div>`:null==this._data||this._data.length?ey:ef`<div class="notice">
				<gl-watermark-loader><slot name="empty"></slot></gl-watermark-loader>
			</div>`}get _a11yWrapperLabel(){let e=this._data?.length??0;if(0===e)return"Visual History timeline";let t=1===e?"commit":"commits";return`Visual History timeline showing ${e.toLocaleString()} ${t}. Use arrow keys to navigate.`}_renderA11yLive(){let e,t=this._selectedSha,i=this._data;if(null==t||null==i||0===i.length)return ef`<div class="a11y-live" role="status" aria-live="polite" aria-atomic="true"></div>`;if(this._a11yAnnouncementCache?.sha===t&&this._a11yAnnouncementCache.data===i)e=this._a11yAnnouncementCache.text;else{let r=i.find(e=>e.sha===t);if(null==r)return ef`<div class="a11y-live" role="status" aria-live="polite" aria-atomic="true"></div>`;e=`commit ${sG(r.sha)} by ${ni({name:r.author,current:r.current},this.currentUserNameStyle)} on ${eF(new Date(r.date),this.dateFormat)}, +${r.additions??0} -${r.deletions??0} lines: ${r.message}`,this._a11yAnnouncementCache={sha:t,data:i,text:e}}return ef`<div class="a11y-live" role="status" aria-live="polite" aria-atomic="true">${e}</div>`}_measureAxisLabelWidth(e){let t=this._axisLabelWidthCache.get(e);if(null!=t)return t;let i=this._ctx;if(null==i)return 6*e.length;let r=i.font;i.font="10px var(--font-family, sans-serif)";let o=i.measureText(e).width;return i.font=r,this._axisLabelWidthCache.set(e,o),o}_maybeEmitVisibleRange(){let e=this._zoomRange?.oldest??this._viewModel?.oldest,t=this._zoomRange?.newest??this._viewModel?.newest;null==e||null==t||(e!==this._lastVisibleOldest||t!==this._lastVisibleNewest)&&(this._lastVisibleOldest=e,this._lastVisibleNewest=t,this.emit("gl-visible-range-changed",{oldest:e,newest:t}))}get _hasHistoryBefore(){let e=this._data,t=this._zoomRange;if(null==e||0===e.length||null==t)return!1;let i=Math.max(1,(t.newest-t.oldest)*.005);return t.oldest>e.at(-1).sort+i}get _hasHistoryAfter(){let e=this._data,t=this._zoomRange;if(null==e||0===e.length||null==t)return!1;let i=Math.max(1,(t.newest-t.oldest)*.005);return t.newest<e[0].sort-i}get _hasHorizontalOverflow(){return this._hasHistoryBefore||this._hasHistoryAfter}_ensureLayout(){var e;let t=this._canvas;if(null==t)return;let i=t.parentElement;if(null==i)return;let r=i.getBoundingClientRect();if(r.width<=0||r.height<=0)return;let o=window.devicePixelRatio||1,s=Math.round(r.width*o),a=Math.round(r.height*o);(t.width!==s||t.height!==a)&&(t.width=s,t.height=a,t.style.width=`${r.width}px`,t.style.height=`${r.height}px`,this._ctx?.setTransform(o,0,0,o,0,0));let h=this._viewModel?.slices.length??0,c=(e=r.width,"branch"!==this.sliceBy?36:Math.round(36+124*Math.max(0,Math.min(1,(e-480)/320))));return this.style.setProperty("--rail-column-width",`${c}px`),this._layout=nr(r.width,r.height,o,h,{gutterLeft:8+c+4,showVolume:null!=this._data&&this._data.length>0,showY2:null!=this._data&&this._data.length>0,showHorizontalScrollbar:this._hasHorizontalOverflow}),this._layoutSliceCount=h,this.style.setProperty("--load-more-top","0px"),this.style.setProperty("--load-more-bottom",`${r.height-this._layout.axisStripBottom-2}px`),this._maxScrollY=Math.max(0,this._layout.virtualSwimlaneHeight-this._layout.swimlaneBottom+this._layout.swimlaneTop),this._layout}_ensureTheme(){if(this._theme)return this._theme;let e=window.getComputedStyle(this),t=[];for(let i=0;i<10;i++){let r=rt(`--color-timeline-slice-${i}`,e);t.push(r||ag[i])}return this._theme={background:rt("--vscode-editor-background",e)||"#1e1e1e",zebraOdd:rt("--vscode-list-hoverBackground",e)||"rgba(255,255,255,0.03)",axisDomain:rt("--color-foreground--50",e)||"#888",axisLabel:rt("--color-foreground--75",e)||"#bbb",axisLabelMuted:rt("--color-foreground--50",e)||"#888",gridLine:rt("--color-foreground--85",e)||"#ccc",bubbleStroke:rt("--color-view-foreground",e)||"#fff",selectedRing:rt("--color-foreground",e)||"#fff",hoverRing:rt("--color-foreground--85",e)||"#ddd",additions:rt("--vscode-gitlens-timelineAdditionsColor",e)||"rgba(73, 190, 71, 1)",deletions:rt("--vscode-gitlens-timelineDeletionsColor",e)||"rgba(195, 32, 45, 1)",scrollThumb:rt("--vscode-scrollbarSlider-background",e)||"rgba(121,121,121,0.4)",scrollThumbHover:rt("--vscode-scrollbarSlider-hoverBackground",e)||"rgba(100,100,100,0.7)",tooltipBg:rt("--vscode-editorHoverWidget-background",e)||"#252526",tooltipFg:rt("--vscode-editorHoverWidget-foreground",e)||"#cccccc",tooltipBorder:rt("--vscode-editorHoverWidget-border",e)||"#454545",slicePalette:t},this._theme}_ensureViewModel(){if(null==this._data||0===this._data.length)return;if(this._viewModel)return this._viewModel;let e="none",t=this._layout;if(t&&t.chartWidth>0){let r=function(e,t){let i=1/0,r=-1/0,o=0;for(let s of e){let e=s.sort;Number.isFinite(e)&&(e<i&&(i=e),e>r&&(r=e),o+="branch"===t&&s.branches?.length||1)}return Number.isFinite(i)||(i=0,r=0),{oldest:i,newest:r,expandedCount:o}}(this._data,this.sliceBy),o=r.newest-r.oldest;if(o>0&&r.expandedCount>0){var i;let s=null!=this.windowSpanMs?Math.min(this.windowSpanMs,o):null!=this._zoomRange?this._zoomRange.newest-this._zoomRange.oldest:o,a=Math.max(1,Math.round(r.expandedCount*s/o));e=(i=t.chartWidth/a)>=6?"none":i>=1.5?"hour":i>=.3?"day":i>=.05?"week":"month"}}return this._viewModel=function(e){let{dataset:t,sliceBy:i,defaultBranch:r}=e,o=e.binUnit??"none",s=function(e,t,i){let r=new Map,o=[],s=(e,t,i,s)=>{let a=r.get(e);null==a&&(a={name:e,colorIndex:o.length,commitCount:0},r.set(e,a),o.push(e)),a.commitCount=(a.commitCount??0)+1,null==a.email&&null!=t&&t.length>0&&(a.email=t),null==a.avatarUrl&&null!=i&&i.length>0&&(a.avatarUrl=i),s&&(a.current=!0)};for(let r of e)if("branch"===t)if(r.branches?.length)for(let e of r.branches)s(e);else s(i);else s(r.author,r.email,r.avatarUrl,r.current);return o.map(e=>r.get(e))}(t,i,r??"HEAD"),a=new Map;for(let e=0;e<s.length;e++)a.set(s[e].name,e);let h=function(e,t,i,r){let o=[];for(let s of e){let e=s.sort;if(Number.isFinite(e))for(let a of"branch"===t?s.branches?.length?s.branches:[i]:[s.author]){let t=r.get(a);null!=t&&o.push({commit:s,timestamp:e,sliceIndex:t,bubbleR:0})}}return o.sort((e,t)=>e.timestamp-t.timestamp),o}(t,i,r??"HEAD",a);return"none"!==o&&h.length>0?function(e,t,i){let r=function(e){switch(e){case"hour":return e=>36e5*Math.floor(e/36e5);case"day":return e=>new Date(e).setHours(0,0,0,0);case"week":return e=>{let t=new Date(e);t.setHours(0,0,0,0);let i=(t.getDay()+6)%7;return t.setDate(t.getDate()-i),t.getTime()};case"month":return e=>{let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),1).getTime()};default:return e=>e}}(i),o=new Map;for(let t of e){let e=r(t.timestamp),i=`${e}|${t.sliceIndex}`,s=t.commit,a=s.additions??0,h=s.deletions??0,c=o.get(i);null==c?o.set(i,{binStart:e,sliceIndex:t.sliceIndex,additions:a,deletions:h,count:1,representative:t,shas:[s.sha]}):(c.additions+=a,c.deletions+=h,c.count++,c.shas.push(s.sha),a+h>(c.representative.commit.additions??0)+(c.representative.commit.deletions??0)&&(c.representative=t))}let s=[...o.values()].sort((e,t)=>e.representative.timestamp-t.representative.timestamp),a=function(e){if(0===e.length)return{p99:0,max:0};let t=new Float32Array(e.length),i=0,r=0;for(let o of e){let e=o.additions+o.deletions;e>0&&(t[r++]=e),e>i&&(i=e)}if(0===i||0===r)return{p99:0,max:0};let o=t.subarray(0,r);return o.sort(),{p99:o[Math.min(r-1,Math.floor((r-1)*.99))],max:i}}(s),h=s.length,c=new Float64Array(h),p=new Float32Array(h),u=new Float32Array(h),g=new Float32Array(h),m=new Uint16Array(h),b=new Uint16Array(h),f=Array(h),v=new Map,_=0,w=0,x=h>0?s[0].representative.timestamp:0,$=h>0?s[0].representative.timestamp:0;for(let e=0;e<h;e++){let t=s[e];for(let i of(c[e]=t.representative.timestamp,p[e]=t.additions,u[e]=t.deletions,m[e]=t.sliceIndex,g[e]=sJ(t.additions,t.deletions,a),b[e]=Math.min(t.count,65535),f[e]=t.representative.commit,t.shas))v.has(i)||v.set(i,e);t.additions>_&&(_=t.additions),t.deletions>w&&(w=t.deletions),t.representative.timestamp<x&&(x=t.representative.timestamp),t.representative.timestamp>$&&($=t.representative.timestamp)}return{timestamps:c,additions:p,deletions:u,bubbleR:g,sliceIndex:m,binCount:b,commits:f,slices:t,oldest:x,newest:$,yMaxAdd:_,yMaxDel:w,shaToIndex:v,indicesBySlice:sQ(m,t.length)}}(h,s,o):function(e,t,i){let r=e.length,o=new Float64Array(r),s=new Float32Array(r),a=new Float32Array(r),h=new Float32Array(r),c=new Uint16Array(r),p=Array(r),u=new Map,g=0,m=0,b=r>0?e[0].timestamp:0,f=r>0?e[0].timestamp:0;for(let t=0;t<r;t++){let r=e[t],v=r.commit,_=v.additions??0,w=v.deletions??0;o[t]=r.timestamp,s[t]=_,a[t]=w,c[t]=r.sliceIndex,h[t]=sJ(_,w,i),p[t]=v,u.has(v.sha)||u.set(v.sha,t),_>g&&(g=_),w>m&&(m=w),r.timestamp<b&&(b=r.timestamp),r.timestamp>f&&(f=r.timestamp)}return{timestamps:o,additions:s,deletions:a,bubbleR:h,sliceIndex:c,commits:p,slices:t,oldest:b,newest:f,yMaxAdd:g,yMaxDel:m,shaToIndex:u,indicesBySlice:sQ(c,t.length)}}(h,s,function(e){if(0===e.length)return{p99:0,max:0};let t=new Float32Array(e.length),i=0,r=0;for(let o of e){let e=(o.additions??0)+(o.deletions??0);e>0&&(t[r++]=e),e>i&&(i=e)}if(0===i||0===r)return{p99:0,max:0};let o=t.subarray(0,r);return o.sort(),{p99:o[Math.min(r-1,Math.floor((r-1)*.99))],max:i}}(t))}({dataset:this._data,sliceBy:this.sliceBy,defaultBranch:this.head??"HEAD",binUnit:"none"===e?void 0:e}),this._binUnit=e,this._viewModel}_requestDraw(){null==this._drawRAF&&(this._drawRAF=requestAnimationFrame(()=>{this._drawRAF=void 0,this._draw()}))}_draw(){let e=this._ctx;if(null==e)return;let t=this._ensureLayout();if(null==t)return;let i=this._ensureTheme(),r=this._ensureViewModel();if(e.fillStyle=i.background,e.fillRect(0,0,t.width,t.height),null==r)return;let o=t;this._layoutSliceCount!==r.slices.length&&(o=nr(t.width,t.height,t.dpr,r.slices.length,{gutterLeft:t.chartLeft,showVolume:!0,showY2:!0,showHorizontalScrollbar:this._hasHorizontalOverflow}),this._layout=o,this._layoutSliceCount=r.slices.length);let s=o.swimlaneBottom-o.swimlaneTop;this._maxScrollY=Math.max(0,o.virtualSwimlaneHeight-s),this._scrollY=Math.max(0,Math.min(this._maxScrollY,this._scrollY));let a=`${o.width}|${o.height}|${o.rowHeight}|${o.virtualSwimlaneHeight}|${this._scrollY}|${r.slices.length}|${this._zoomRange?.oldest??0}|${this._zoomRange?.newest??0}`;a!==this._lastRenderSig&&(this._lastRenderSig=a,this._renderTick++,this.requestUpdate()),this._maybeEmitVisibleRange(),this._resolveScrubHover();let h=performance.now(),c=Math.min(50,this._lastFrameTime>0?h-this._lastFrameTime:16);this._lastFrameTime=h;let p=c/ab._hoverAnimDurationMs,u=this._stepHoverIntensity(p),g={viewModel:r,layout:o,theme:i,scrollY:this._scrollY,zoomRange:this._zoomRange,selectedSha:this._selectedSha,hoverIndex:this._hoverIndex,hoverIntensity:af(this._hoverIntensity),outgoingHoverIndex:this._outgoingHoverIndex,outgoingHoverIntensity:af(this._outgoingHoverIntensity),hoverSliceIndex:this._hoverSliceIndex,hoverVolumeIndex:this._hoverVolumeIndex,hiddenSlices:this._hiddenSlices.size>0?this._hiddenSlices:void 0,brushRange:this._brushRange,historyBefore:this._hasHistoryBefore,historyAfter:this._hasHistoryAfter};if(e.save(),e.beginPath(),e.rect(0,0,o.width,o.headerHeight),e.clip(),!function(e,t){let{layout:i,theme:r}=t;e.fillStyle=r.background,e.fillRect(0,0,i.width,i.headerHeight)}(e,g),e.restore(),e.save(),e.beginPath(),e.rect(0,0,o.width,o.axisStripBottom),e.clip(),e.translate(0,o.swimlaneTop-this._scrollY),!function(e,t){let{viewModel:i,layout:r,theme:o,zoomRange:s,scrollY:a,hiddenSlices:h,hoverSliceIndex:c}=t,p=s?.oldest??i.oldest,u=s?.newest??i.newest,g=o.slicePalette,m=Math.max(r.virtualSwimlaneHeight,1);if(e.fillStyle=o.background,e.fillRect(0,0,r.width,m),o.gridLine){e.save(),e.beginPath(),e.rect(0,a,r.width,r.swimlaneBottom-r.swimlaneTop),e.clip(),e.fillStyle=o.gridLine,e.globalAlpha=.35;let t=r.chartLeft,s=Math.max(0,r.chartRight-t);for(let o=0;o<i.slices.length;o++){let i=Math.round(nn(o,r));e.fillRect(t,i,s,1)}e.globalAlpha=1,e.restore()}if(u<=p||0===i.commits.length)return;let b=nl(r.rowHeight),f=Math.min(1.5,b),v=b-f,[_,w]=nh(i.timestamps,p,u),x=null!=c;x||(e.globalAlpha=.55);let $=Math.min(8,.5*b);for(let t=_;t<w;t++){let o=i.sliceIndex[t];if(h?.has(o))continue;let s=no(i.timestamps[t],p,u,r);if(Number.isNaN(s)||s<r.chartLeft||s>r.chartRight)continue;let a=nn(o,r),m=g[i.slices[o].colorIndex%g.length];if(""===i.commits[t].sha){x?e.globalAlpha=c===o?1:.18:e.globalAlpha=1,e.strokeStyle=m,e.lineWidth=1.5,e.beginPath(),e.arc(s,a,$,0,2*Math.PI),e.stroke(),x||(e.globalAlpha=.55);continue}let b=f+v*i.bubbleR[t];b<=0||(x&&(e.globalAlpha=c===o?.55:.099),e.fillStyle=m,e.beginPath(),e.arc(s,a,b,0,2*Math.PI),e.fill())}e.globalAlpha=1}(e,g),e.restore(),e.save(),e.beginPath(),e.rect(0,o.volumeTop,o.width,o.volumeBottom-o.volumeTop),e.clip(),!function(e,t){let i,{viewModel:r,layout:o,theme:s,zoomRange:a,hiddenSlices:h,hoverSliceIndex:c,hoverVolumeIndex:p}=t,u=o.volumeBottom-o.volumeTop;if(u<=0)return;e.fillStyle=s.background,e.fillRect(0,o.volumeTop,o.width,u);let g=a?.oldest??r.oldest,m=a?.newest??r.newest,b=Math.max(1,r.yMaxAdd+r.yMaxDel),f=o.volumeBottom;if(m<=g||0===r.commits.length)return;let[v,_]=nh(r.timestamps,g,m),w=Math.max(0,u-2);null!=p&&Number.isNaN(i=no(r.timestamps[p],g,m,o))&&(i=void 0);for(let t=v;t<_;t++){let a=r.sliceIndex[t];if(h?.has(a))continue;let u=no(r.timestamps[t],g,m,o);if(Number.isNaN(u)||u<o.chartLeft||u>o.chartRight)continue;let v=r.additions[t],_=r.deletions[t];if(0===v&&0===_)continue;let x=null!=i&&1.5>=Math.abs(u-i);null!=p?e.globalAlpha=x?1:.15:e.globalAlpha=null!=c&&c!==a?.2:1;let $=v+_,C=nd($,b,w),E=$>0?v/$*C:0,S=C-E,A=Math.round(u)-1,T=x?4:2,M=x?A-1:A;E>0&&(e.fillStyle=s.additions,e.fillRect(M,f-E,T,E)),S>0&&(e.fillStyle=s.deletions,e.fillRect(M,f-E-S,T,S))}e.globalAlpha=1}(e,g),e.restore(),!function(e,t){let i,{viewModel:r,layout:o,theme:s,zoomRange:a,hoverIndex:h,hoverIntensity:c,outgoingHoverIndex:p,outgoingHoverIntensity:u,hoverSliceIndex:g,hoverVolumeIndex:m,selectedSha:b,brushRange:f,scrollY:v}=t,_=a?.oldest??r.oldest,w=a?.newest??r.newest;if(null!=m&&r.commits.length>0){let t=no(r.timestamps[m],_,w,o);if(!Number.isNaN(t)&&t>=o.chartLeft&&t<=o.chartRight){i=t;let r=nl(o.rowHeight)+6,a=Math.max(o.chartLeft,t-r),h=Math.min(o.chartRight,t+r);e.fillStyle=s.background,e.globalAlpha=.85,a>0&&e.fillRect(0,0,a,o.volumeTop),h<o.width&&e.fillRect(h,0,o.width-h,o.volumeTop),e.globalAlpha=1}}let x=(c??0)+(u??0)*.6;if(x>.01&&null==g&&(e.fillStyle=s.background,e.globalAlpha=Math.min(.45,.45*x),e.fillRect(0,0,o.width,o.volumeTop),e.globalAlpha=1),null!=g&&(e.fillStyle=s.background,e.globalAlpha=.45,e.fillRect(0,o.swimlaneBottom,o.width,o.volumeTop-o.swimlaneBottom),e.globalAlpha=1),null!=h&&h>=0&&h<r.timestamps.length){let t=no(r.timestamps[h],_,w,o);!Number.isNaN(t)&&t>=o.chartLeft&&t<=o.chartRight&&nm(e,t,o.headerY,o.volumeBottom,s.gridLine,.3+.4*(c??1))}if(null!=i&&nm(e,i,o.swimlaneTop,o.volumeBottom,s.gridLine,.55),null!=p&&p!==h&&(u??0)>.01&&nf(e,r,p,_,w,v,o,s,u??0),null!=b){let t=r.shaToIndex.get(b);null!=t&&t!==h&&function(e,t,i,r,o,s,a,h){let c=nb(t,i,r,o,s,a);if(null==c)return;let{cx:p,cy:u,baseR:g}=c;e.save(),e.beginPath(),e.rect(0,a.swimlaneTop,a.width,a.swimlaneBottom-a.swimlaneTop),e.clip(),e.lineWidth=1.5,e.strokeStyle=h.background,e.beginPath(),e.arc(p,u,g+2,0,2*Math.PI),e.stroke(),e.lineWidth=1.5,e.strokeStyle=h.selectedRing,e.beginPath(),e.arc(p,u,g+3.5,0,2*Math.PI),e.stroke(),e.restore()}(e,r,t,_,w,v,o,s)}if(null!=h&&nf(e,r,h,_,w,v,o,s,c??1),null!=f&&s.gridLine){let t=Math.round(Math.max(o.chartLeft,Math.min(f.startX,f.endX))),i=Math.round(Math.min(o.chartRight,Math.max(f.startX,f.endX))),r=i-t;r>0&&(e.fillStyle=s.gridLine,e.globalAlpha=.45,e.fillRect(t,o.swimlaneTop,r,o.swimlaneBottom-o.swimlaneTop),e.globalAlpha=1,r>=4&&(e.fillRect(t,o.swimlaneTop,2,o.swimlaneBottom-o.swimlaneTop),e.fillRect(i-2,o.swimlaneTop,2,o.swimlaneBottom-o.swimlaneTop)))}(function(e,t,i,r){let o=t.swimlaneBottom-t.swimlaneTop;if(t.virtualSwimlaneHeight<=o)return;let s=o/t.virtualSwimlaneHeight,a=Math.max(20,o*s),h=t.swimlaneTop+i/t.virtualSwimlaneHeight*o,c=t.width-14;e.fillStyle=r.scrollThumb,e.globalAlpha=.18,e.fillRect(c,t.swimlaneTop,14,o),e.fillStyle=r.scrollThumbHover,e.globalAlpha=1,e.fillRect(c+2,h,10,a)})(e,o,v,s),function(e,t){let{layout:i,theme:r,historyBefore:o,historyAfter:s}=t;if(!o&&!s)return;let a=i.axisStripBottom-i.axisStripTop;if(a<=0)return;let h=(i.axisStripTop+i.axisStripBottom)/2,c=Math.max(3,Math.min(5,Math.floor(a/4))),p=Math.max(c+2,Math.round(i.dataInsetX/2));if(e.save(),e.strokeStyle=r.axisLabelMuted,e.lineWidth=1.5,e.lineCap="round",e.lineJoin="round",o){let t=i.chartLeft+p;e.beginPath(),e.moveTo(t+.6*c,h-c),e.lineTo(t-.6*c,h),e.lineTo(t+.6*c,h+c),e.stroke()}if(s){let t=i.chartRight-p;e.beginPath(),e.moveTo(t-.6*c,h-c),e.lineTo(t+.6*c,h),e.lineTo(t-.6*c,h+c),e.stroke()}e.restore()}(e,t)}(e,g),this.hasMore&&!this.loadingMore&&null!=this._zoomRange&&r.commits.length>0){let e=this._zoomRange.newest-this._zoomRange.oldest;this._zoomRange.oldest-r.oldest<.25*e&&(null==this._loadMoreEmittedFor||this._zoomRange.oldest<this._loadMoreEmittedFor)&&(this._loadMoreEmittedFor=this._zoomRange.oldest,this.emit("gl-load-more",{before:r.oldest}))}u?this._requestDraw():this._lastFrameTime=0}_stepHoverIntensity(e){let t=!1;return this._hoverIntensity<this._hoverIntensityTarget?(this._hoverIntensity=Math.min(this._hoverIntensityTarget,this._hoverIntensity+e),this._hoverIntensity<this._hoverIntensityTarget&&(t=!0)):this._hoverIntensity>this._hoverIntensityTarget&&(this._hoverIntensity=Math.max(this._hoverIntensityTarget,this._hoverIntensity-e),this._hoverIntensity>this._hoverIntensityTarget&&(t=!0)),null!=this._outgoingHoverIndex&&(this._outgoingHoverIntensity=Math.max(0,this._outgoingHoverIntensity-e),this._outgoingHoverIntensity>0?t=!0:this._outgoingHoverIndex=void 0),t}_setHover(e){if(e===this._hoverIndex)return;null!=this._hoverIndex&&this._hoverIntensity>.05&&(this._outgoingHoverIndex=this._hoverIndex,this._outgoingHoverIntensity=this._hoverIntensity),this._hoverIndex=e,this._hoverIntensity=0,this._hoverIntensityTarget=+(null!=e),0===this._lastFrameTime&&(this._lastFrameTime=performance.now());let t=null!=e?this._viewModel?.commits[e]?.sha:void 0;this._shaHovered!==t&&(this._shaHovered=t),this._requestDraw()}_scrollSelectedIntoView(e){let t=this._viewModel,i=this._layout;if(null==t||null==i)return;let r=t.sliceIndex[e],o=i.swimlaneTopBufferPx+r*i.rowHeight,s=o+i.rowHeight/2,a=i.swimlaneBottom-i.swimlaneTop;s<this._scrollY?this._scrollY=Math.max(0,o):s>this._scrollY+a&&(this._scrollY=Math.min(this._maxScrollY,o+i.rowHeight-a));let h=t.timestamps[e];if(null!=this._zoomRange){let e=this._zoomRange.newest-this._zoomRange.oldest;if(h<this._zoomRange.oldest){let i=Math.max(t.oldest,h-.1*e),r=i+e;r>t.newest&&(i-=r-t.newest,r=t.newest),this._zoomRange={oldest:i,newest:r},this._viewModel=void 0}else if(h>this._zoomRange.newest){let i=Math.min(t.newest,h+.1*e),r=i-e;r<t.oldest&&(i+=t.oldest-r,r=t.oldest),this._zoomRange={oldest:r,newest:i},this._viewModel=void 0}}}_showTooltip(i,r,o){let s=this._tooltipEl;if(null==s)return;if(null==i||null==this._viewModel)return void this._hideTooltip();let a=this._viewModel.commits[i];if(null==a)return void this._hideTooltip();if(a.sha!==this._tooltipSha){var h;let r=document.createElement("div");r.className="tooltip__author",r.textContent=ni({name:a.author,current:a.current},this.currentUserNameStyle);let o=document.createElement("div");o.className="tooltip__row";let c=document.createElement("span");if(c.textContent=sG(a.sha),o.appendChild(c),null!=a.additions){let e=document.createElement("span");e.className="tooltip__additions",e.textContent=`+${tH("line",a.additions)}`,o.appendChild(e)}if(null!=a.deletions){let e=document.createElement("span");e.className="tooltip__deletions",e.textContent=`-${tH("line",a.deletions)}`,o.appendChild(e)}let p=document.createElement("div");p.className="tooltip__row";let u=new Date(a.date);p.textContent=`${0===(h=function(i){let r=("number"==typeof i?i:i.getTime())-Date.now();if(!Number.isFinite(r))return"";for(let[i,o,s,a]of eI)if(Math.abs(r)>=o||1e3===o)return(t??=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})).format(Math.trunc(r/s),i);return""}(u)).length?h:h.charAt(0).toUpperCase()+h.slice(1)} (${eF(u,this.dateFormat)})`;let g=document.createElement("div");g.className="tooltip__message",g.textContent=a.message;let m=this._viewModel.binCount?.[i],b=[r,o,p,g];if(null!=m&&m>1){let e=document.createElement("div");e.className="tooltip__row",e.textContent=`+${m-1} more in this ${this._binUnit}`,b.push(e)}s.replaceChildren(...b),s.dataset.visible="true";let f=s.getBoundingClientRect();this._tooltipW=f.width||320,this._tooltipH=f.height||100,this._tooltipSha=a.sha}else s.dataset.visible="true";let c=this._layout,p=c?.width??0,u=c?.height??0,g=this._tooltipW,m=this._tooltipH,b=r+12;b+g>p&&(b=r-12-g)<0&&(b=Math.max(0,p-g));let f=o+12;f+m>u&&(f=o-12-m)<0&&(f=Math.max(0,u-m)),s.style.left=`${b}px`,s.style.top=`${f}px`}_hideTooltip(){let e=this._tooltipEl;null!=e&&(e.dataset.visible="false",this._tooltipSha=void 0)}resetZoom(){let e;if(null!=this.windowSpanMs){let t=this._viewModel?.newest??this._data?.[0]?.sort;if(null==t||(e={oldest:t-this.windowSpanMs,newest:t},this._zoomRange?.oldest===e.oldest&&this._zoomRange?.newest===e.newest&&!this._zoomed))return}else if(null==this._zoomRange)return;this._zoomRange=e,this._zoomed=!1,this._viewModel=void 0,null!=this._ctx?this._draw():this._requestDraw()}};function af(e){return 1-(1-Math.max(0,Math.min(1,e)))**3}ab.tagName=am,ab.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ab.styles=A`
		:host {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			position: relative;
			outline: none;
			/* Sizing constants shared between the canvas layout and the DOM rail overlay so the
			   rail's bottom edge lines up with the canvas's swimlane bottom (= top of axis label
			   strip). Keep in sync with the constants in timelineRenderer.ts:
			   volumeHeightPx (64) + axisLabelStripHeightPx (20) = 84px bottom offset; headerPaddingPx
			   (18) = top offset. */
			--rail-left-offset: 8px;
			--rail-column-width: 36px;
			--rail-edge-padding: 4px;
			--rail-bottom-offset: 0px;
			--timeline-glass-start: color-mix(in srgb, var(--vscode-editor-background) 42%, transparent);
			--timeline-glass-end: color-mix(in srgb, var(--vscode-editor-background) 28%, transparent);
			--timeline-glass-filter: blur(10px) saturate(1.45) brightness(1.08);
		}

		.rail {
			/* Overlays the canvas's left gutter. Avatars inside are positioned with absolute
			   canvas-Y coords, and the Y2 axis ("Lines changed") is rendered at the bottom.
			   The glass pane lives in ::before so text and avatars stay crisp above it. */
			position: absolute;
			top: 0;
			left: 0;
			width: calc(var(--rail-left-offset, 8px) + var(--rail-column-width, 36px) + var(--rail-edge-padding, 4px));
			bottom: var(--rail-bottom-offset, 84px);
			pointer-events: none;
			z-index: 2;
			overflow: visible;
		}

		.rail::before {
			content: '';
			position: absolute;
			inset: 0;
			pointer-events: none;
			background: linear-gradient(90deg, var(--timeline-glass-start), var(--timeline-glass-end));
			backdrop-filter: var(--timeline-glass-filter);
			-webkit-backdrop-filter: var(--timeline-glass-filter);
			border-right: 1px solid color-mix(in srgb, var(--vscode-widget-border) 32%, transparent);
			box-shadow: inset -1px 0 0 color-mix(in srgb, var(--vscode-foreground) 6%, transparent);
		}

		.rail__avatar {
			position: absolute;
			z-index: 1;
			left: calc(var(--rail-left-offset, 8px) + var(--rail-column-width, 36px) / 2);
			transform: translate(-50%, -50%);
			cursor: pointer;
			pointer-events: auto;
			border-radius: 50%;
			padding: 2px;
			background: transparent;
			transition:
				transform 120ms ease-out,
				opacity 120ms ease-out,
				background 120ms ease-out;
		}

		.rail__avatar gl-tooltip {
			display: block;
		}

		.rail__avatar gl-avatar {
			display: block;
			border-radius: 50%;
			/* Slotted initials inherit color from gl-avatar's shadow .thumb--text rule (slot's own
			   color wins over light-DOM cascade). The --gl-avatar-text-color custom property
			   crosses the shadow boundary and pins the initials black against the slice color. */
			--gl-avatar-text-color: #000;
		}

		.rail__avatar gl-avatar::part(avatar) {
			background: var(--rail-avatar-color, transparent);
			box-shadow: 0 0 0 1.5px var(--rail-avatar-color, transparent);
			font-weight: 700;
		}

		/* gl-avatar has its own untransitioned hover-scale (1.2) — the rail wraps it in a
		   hover-scaled outer element, so the inner scale doubles up and snaps instantly while
		   the outer one smoothly transitions, producing visible jank. Suppress the inner hover
		   scale here; the outer .rail__avatar:hover owns the hover affordance. */
		.rail__avatar gl-avatar::part(avatar):hover {
			transform: none;
		}

		.rail__avatar[data-dimmed='true'] {
			opacity: 0.35;
		}

		.rail__avatar[data-hidden='true'] {
			opacity: 0.3;
			filter: grayscale(0.85);
		}

		.rail__avatar[data-active='true'] {
			background: var(--vscode-list-hoverBackground);
		}

		.rail__avatar:hover {
			transform: translate(-50%, -50%) scale(1.08);
			z-index: 4;
		}

		/* Branch slice — rendered instead of an avatar when sliceBy='branch'. Default state is a
		   24px circular badge in the slice color with a centered git-branch icon. Hover or
		   chart-side activation expands max-width rightward to reveal the branch name as a
		   pill that extends beyond the rail's right edge into the chart area. The rail itself
		   has overflow: visible so the pill isn't clipped. */
		.rail__branch {
			position: absolute;
			z-index: 1;
			/* Anchor the pill at a FIXED x — the icon's center lands where it would at the minimum
			   36px column width (= rail-left-offset + 18px - 12px = rail-left-offset + 6px), which
			   matches the author avatar's center at the same minimum rail. Anchoring to the *current*
			   column-mid would re-center the icon every time the column grew and leave a gap to the
			   left of the icon on widened rails — instead we keep the icon stationary and let only
			   the pill's right edge expand into the freed-up column space. */
			left: calc(var(--rail-left-offset, 8px) + 6px);
			transform: translateY(-50%);
			cursor: pointer;
			pointer-events: auto;
			height: 24px;
			border-radius: 12px;
			background: var(--rail-avatar-color, transparent);
			color: #000;
			display: inline-flex;
			align-items: center;
			overflow: hidden;
			width: max-content;
			/* Collapsed pill is icon-only (24px = a dot, matching author avatars) at the min 36px
			   column width, and grows with --rail-column-width to reveal more of the branch name
			   on widened rails. Pill-right tracks the column's right edge minus a small inset so it
			   doesn't crowd the rail's edge padding. Hover/active still expands to 24rem for full
			   reveal. */
			max-width: calc(var(--rail-column-width, 36px) - 12px);
			transition:
				max-width 220ms ease-out,
				opacity 120ms ease-out;
		}

		.rail__branch gl-tooltip {
			display: contents;
		}

		.rail__branch-icon {
			flex: 0 0 24px;
			width: 24px;
			height: 24px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			--code-icon-size: 14px;
			--code-icon-v-align: unset;
		}

		.rail__branch-name {
			flex: 0 1 auto;
			padding: 0 0.8rem 0 0.2rem;
			font-size: 1.1rem;
			font-weight: 600;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			max-width: 22rem;
		}

		.rail__branch:hover,
		.rail__branch[data-active='true'] {
			max-width: 24rem;
			z-index: 4;
		}

		.rail__branch[data-dimmed='true'] {
			opacity: 0.35;
		}

		.rail__branch[data-hidden='true'] {
			opacity: 0.3;
			filter: grayscale(0.85);
		}

		.rail-tooltip__name {
			font-weight: 600;
		}

		.rail-tooltip__meta {
			color: var(--color-foreground--75);
			font-size: 0.85em;
			margin-top: 0.15rem;
		}

		.rail-tooltip__hint {
			color: var(--color-foreground--50);
			font-size: 0.8em;
			margin-top: 0.4rem;
			max-width: 16rem;
		}

		.rail__y2-title {
			position: absolute;
			left: calc(var(--rail-left-offset, 8px) + 2px);
			transform: translate(-50%, -50%) rotate(-90deg);
			color: var(--color-foreground--75);
			font-size: 10px;
			white-space: nowrap;
			pointer-events: none;
			z-index: 1;
		}

		.rail__y2-tick {
			position: absolute;
			right: -4px;
			width: 4px;
			height: 1px;
			background: var(--color-foreground--85);
			transform: translateY(-50%);
			z-index: 1;
		}

		.rail__y2-label {
			position: absolute;
			right: 6px;
			color: var(--color-foreground--75);
			font-size: 10px;
			white-space: nowrap;
			transform: translateY(-50%);
			pointer-events: none;
			z-index: 1;
		}

		.axis-overlay {
			position: absolute;
			left: 0;
			width: 100%;
			pointer-events: none;
			z-index: 2;
			overflow: visible;
			color: var(--axis-label-color);
			font-size: 10px;
			line-height: 12px;
		}

		.axis-overlay__glass {
			position: absolute;
			top: 0;
			bottom: 0;
			background: linear-gradient(
				180deg,
				color-mix(in srgb, var(--vscode-editor-background) 68%, transparent),
				color-mix(in srgb, var(--vscode-editor-background) 56%, transparent)
			);
			backdrop-filter: var(--timeline-glass-filter);
			-webkit-backdrop-filter: var(--timeline-glass-filter);
			border-top: 1px solid color-mix(in srgb, var(--vscode-widget-border) 22%, transparent);
			box-shadow: inset 0 1px 0 color-mix(in srgb, var(--vscode-foreground) 7%, transparent);
		}

		.axis-overlay__baseline {
			position: absolute;
			height: 1px;
			background: color-mix(in srgb, var(--vscode-editor-foreground) 10%, transparent);
		}

		.axis-overlay__tick {
			position: absolute;
			width: 1px;
			height: 5px;
			background: var(--axis-domain-color);
			transform: translateX(-50%);
		}

		.axis-overlay__label {
			position: absolute;
			bottom: 4px;
			color: var(--axis-label-color);
			font-size: 10px;
			line-height: 12px;
			white-space: nowrap;
			transform: translateX(-50%);
		}

		.axis-overlay[data-compact='true'] .axis-overlay__label {
			top: 50%;
			bottom: auto;
			transform: translate(-50%, -50%);
		}

		.axis-overlay__scrollbar {
			position: absolute;
			background: color-mix(in srgb, var(--axis-scrollbar-track) 35%, transparent);
		}

		.axis-overlay__scrollbar-thumb {
			position: absolute;
			top: 0;
			height: 100%;
			background: var(--axis-scrollbar-thumb);
		}

		#wrapper {
			flex: 1 1 auto;
			min-height: 0;
			position: relative;
			outline: none;
			overflow: visible;
		}

		footer {
			flex: 0 0 auto;
			display: flex;
			align-items: center;
			margin: 0 1rem 0.4rem 1rem;
			gap: 0.8rem;
		}

		gl-chart-slider {
			flex: 1 0 auto;
			margin-left: 1.4rem;
		}

		gl-commit-sha-copy {
			color: var(--color-foreground--75);
			text-align: right;
			min-width: 7.5rem;
			margin-left: 1.2rem;
		}

		.actions {
			display: flex;
			align-items: center;
			gap: 0.2rem;
		}

		canvas {
			display: block;
			width: 100%;
			height: 100%;
			cursor: default;
		}

		canvas[data-brushing='true'] {
			cursor: ew-resize;
		}

		.tooltip {
			position: absolute;
			pointer-events: none;
			background: var(--vscode-editorHoverWidget-background, var(--color-hover-background));
			color: var(--vscode-editorHoverWidget-foreground, var(--color-hover-foreground));
			border: 1px solid var(--vscode-editorHoverWidget-border, var(--color-hover-border));
			border-radius: 3px;
			padding: 6px 8px;
			font-size: 11px;
			max-width: 320px;
			z-index: 10;
			display: none;
		}

		.tooltip[data-visible='true'] {
			display: block;
		}

		.tooltip .tooltip__author {
			font-weight: 600;
			margin-bottom: 2px;
		}

		.tooltip .tooltip__row {
			display: flex;
			gap: 6px;
			margin-top: 2px;
			color: var(--color-foreground--75);
		}

		.tooltip .tooltip__additions {
			color: var(--vscode-gitlens-timelineAdditionsColor, #49be47);
		}

		.tooltip .tooltip__deletions {
			color: var(--vscode-gitlens-timelineDeletionsColor, #c3202d);
		}

		.tooltip .tooltip__message {
			margin-top: 4px;
			max-width: 300px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		@keyframes notice-fade-in {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		.notice {
			position: absolute;
			inset: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 10% 2rem 30% 2rem;
			pointer-events: none;
			color: var(--color-foreground--75);
			z-index: 3;
		}

		/* Re-enable pointer events on interactive content rendered into the empty slot
		   (e.g. the timeframe dropdown shown when no commits match). The .notice wrapper
		   stays click-through so the canvas behind keeps receiving hover/brush events. */
		::slotted([slot='empty']) {
			pointer-events: auto;
		}

		.notice--blur {
			backdrop-filter: blur(15px);
			-webkit-backdrop-filter: blur(15px);
			animation: notice-fade-in 0.2s ease-in forwards;
			opacity: 0;
		}

		:host([placement='view']) .notice--blur {
			animation-delay: 0.5s;
		}

		/* "Loading older history" affordance — the rail-edge line + scanner are the entire signal,
		   bounded vertically to the swimlane region (below the header padding, above the x-axis).
		   Top offset clears the small headerPaddingPx; bottom offset clears the volume strip
		   (volumeHeightPx = 64px) so the line ends exactly at the x-axis tick line. Both are
		   pointer-events:none so the chart stays fully interactive while paging is in flight. */
		.load-more-edge-line {
			position: absolute;
			/* Top sits at the host-set --load-more-top (the bottom of the breadcrumb header bar
			   inside the chart-host coordinate system). Bottom anchors at --load-more-bottom
			   (the X-axis baseline). Both are written by _ensureLayout from the actual layout
			   measurements, so the indicator always spans exactly header bottom → axis bottom
			   regardless of compact/full layouts. */
			top: var(--load-more-top, 0px);
			left: calc(var(--rail-left-offset, 8px) + var(--rail-column-width, 36px) + var(--rail-edge-padding, 4px));
			width: 0.1rem;
			bottom: var(--load-more-bottom, 6.4rem);
			pointer-events: none;
			/* z-index: 1 (below the rail's z-index: 2) so the box-shadow that bleeds LEFT into
			   the rail's column gets blurred by the rail's backdrop-filter — the glow appears
			   to ripple through the frosted glass as the scanner moves. The line itself sits
			   at left: rail-right-edge + 4px so the line's body is in the open chart area
			   (not under the rail), only the shadow extends into the rail and gets blurred. */
			z-index: 1;
			/* clip-path: inset(top right bottom left). 0 = clip at edge, negative = extend.
			   - Top/bottom: clipped at 0 (no breadcrumb / volume-strip leak).
			   - Right: -0.5rem — just enough to keep the thumb body fully visible. The thumb is
			     wider than the 0.1rem line and centered on it via translate(-50%), so half of
			     it extends past the line's right edge into the chart area; clipping at right:0
			     would chop that half off. 0.5rem buffer fits the thumb without leaking the wide
			     rail-side glow rightward into the chart bubbles.
			   - Left: -100rem — huge, so the rail-side glow reaches across the rail unimpeded. */
			overflow: visible;
			clip-path: inset(0 -0.5rem 0 -100rem);
			background: color-mix(in srgb, var(--vscode-progressBar-background, #0078d4) 60%, transparent);
			box-shadow:
				-0.4rem 0 1.2rem 0.1rem
					color-mix(in srgb, var(--vscode-progressBar-background, #0078d4) 14%, transparent),
				-1.4rem 0 2.6rem 0.3rem
					color-mix(in srgb, var(--vscode-progressBar-background, #0078d4) 7%, transparent);
			animation: load-more-edge-line-pulse 1.6s ease-in-out infinite;
			/* Hint the compositor that this element will animate so the browser promotes it to its
			   own layer. Keeps the pulse and the inner scanner running on the GPU instead of
			   triggering paint/layout on the chart canvas next to it. */
			will-change: opacity;
		}

		@keyframes load-more-edge-line-pulse {
			0%,
			100% {
				opacity: 0.7;
			}
			50% {
				opacity: 1;
			}
		}

		/* Moving spotlight that scans top→bottom along the line. Slim, bright body so it reads as
		   a sharp sliding indicator rather than a soft trail. Animation drives transform
		   (translateY) instead of top — keeps it on the GPU compositor, no per-frame layout. */
		.load-more-edge-line::after {
			content: '';
			position: absolute;
			left: 50%;
			top: 0;
			width: 0.25rem;
			height: 7%;
			border-radius: 0.2rem;
			/* Two-layer body, both with HARD edges (no gradient transitions): bottom is the
			   solid brand color filling the whole thumb; top is a centered hot-spot in
			   --vscode-editor-foreground (light on dark themes, dark on light themes) for an
			   inner highlight. border-radius alone gives the thumb its rounded ends — there
			   are no gradient fades at the edges so the thumb reads as a crisp solid object
			   instead of a fuzzy ball. */
			background:
				linear-gradient(
						180deg,
						transparent 0% 25%,
						var(--vscode-editor-foreground, white) 25% 75%,
						transparent 75% 100%
					)
					center / 100% 100% no-repeat,
				var(--vscode-progressBar-background, #0078d4);
			/* Inset brand-color rim wraps the editor-foreground hot-spot so the body reads as a
			   bold layered "lit" object: brand-color shell with a bright contrast core. Then
			   the dispersed rail-side bloom (offset far left) is softened by the rail's
			   backdrop-filter. */
			box-shadow:
				inset 0 0 0 0.05rem var(--vscode-progressBar-background, #0078d4),
				-1.5rem 0 3rem 0.4rem color-mix(in srgb, var(--vscode-progressBar-background, #0078d4) 55%, transparent),
				-3rem 0 5rem 0.6rem color-mix(in srgb, var(--vscode-progressBar-background, #0078d4) 35%, transparent),
				-5rem 0 7rem 0.8rem color-mix(in srgb, var(--vscode-progressBar-background, #0078d4) 18%, transparent);
			animation: load-more-edge-scanner 1.4s ease-in-out infinite;
			will-change: transform, opacity;
			/* Center horizontally and start above the line; the keyframes drive translateY
			   forward through the line. Setting transform here as the static base avoids a
			   first-frame jump between unset and the keyframes starting transform. */
			transform: translate(-50%, -120%);
		}

		@keyframes load-more-edge-scanner {
			0% {
				transform: translate(-50%, -120%);
				opacity: 0;
			}
			15% {
				opacity: 1;
			}
			85% {
				opacity: 1;
			}
			100% {
				transform: translate(-50%, 1000%);
				opacity: 0;
			}
		}

		@media (prefers-reduced-motion: reduce) {
			.load-more-edge-line,
			.load-more-edge-line::after {
				animation: none;
			}
			.load-more-edge-line {
				opacity: 0.5;
			}
			.load-more-edge-line::after {
				opacity: 0;
			}
		}

		.a11y-live {
			position: absolute;
			width: 1px;
			height: 1px;
			margin: -1px;
			padding: 0;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border: 0;
		}
	`,ab._hoverAnimDurationMs=140,au([ej("#canvas")],ab.prototype,"_canvas",2),au([ej("#tooltip")],ab.prototype,"_tooltipEl",2),au([eP()],ab.prototype,"placement",2),au([eP()],ab.prototype,"dateFormat",2),au([eP({type:String})],ab.prototype,"head",2),au([eP({type:Object})],ab.prototype,"scope",2),au([eP()],ab.prototype,"shortDateFormat",2),au([eP()],ab.prototype,"currentUserNameStyle",2),au([eP()],ab.prototype,"sliceBy",2),au([eP({type:Number,hasChanged:function(e,t){return e!==t&&(null==e||null==t||Math.abs(e-t)>=6e4)}})],ab.prototype,"windowSpanMs",2),au([eP({type:Boolean})],ab.prototype,"loading",2),au([eP({type:Boolean})],ab.prototype,"loadingMore",2),au([eP({type:Boolean})],ab.prototype,"hasMore",2),au([eP({type:Object})],ab.prototype,"dataPromise",1),au([eR()],ab.prototype,"_loading",2),au([eR()],ab.prototype,"_data",2),au([eR()],ab.prototype,"_dataReversed",2),au([eR()],ab.prototype,"_selectedSha",2),au([eR()],ab.prototype,"_shaHovered",2),au([eR()],ab.prototype,"_shiftKeyPressed",2),au([eR()],ab.prototype,"_zoomed",2),au([eR()],ab.prototype,"_hoverSliceIndex",2),au([eR()],ab.prototype,"_renderTick",2),au([eR()],ab.prototype,"_hiddenSlices",2),au([ej(nY.tagName)],ab.prototype,"_slider",2),ab=au([eT(am)],ab);let ModifierKeysTracker=class ModifierKeysTracker{constructor(){this._altKey=!1,this._shiftKey=!1,this._ctrlKey=!1,this._metaKey=!1,this._hosts=new Set,this._listening=!1,this._onKey=e=>{let t=e.altKey||"keydown"===e.type&&"Alt"===e.key,i=e.shiftKey||"keydown"===e.type&&"Shift"===e.key,r=e.ctrlKey||"keydown"===e.type&&"Control"===e.key,o=e.metaKey||"keydown"===e.type&&"Meta"===e.key,s=("keyup"!==e.type||"Alt"!==e.key)&&t,a=("keyup"!==e.type||"Shift"!==e.key)&&i,h=("keyup"!==e.type||"Control"!==e.key)&&r,c=("keyup"!==e.type||"Meta"!==e.key)&&o;(this._altKey!==s||this._shiftKey!==a||this._ctrlKey!==h||this._metaKey!==c)&&(this._altKey=s,this._shiftKey=a,this._ctrlKey=h,this._metaKey=c,this._notify())},this._onPointer=e=>{(this._altKey!==e.altKey||this._shiftKey!==e.shiftKey||this._ctrlKey!==e.ctrlKey||this._metaKey!==e.metaKey)&&(this._altKey=e.altKey,this._shiftKey=e.shiftKey,this._ctrlKey=e.ctrlKey,this._metaKey=e.metaKey,this._notify())},this._onVisibilityChange=()=>{"hidden"===document.visibilityState&&this._reset()}}get altKey(){return this._altKey}get shiftKey(){return this._shiftKey}get ctrlKey(){return this._ctrlKey}get metaKey(){return this._metaKey}subscribe(e){return this._hosts.add(e),this._listening||this._start(),()=>{this._hosts.delete(e),0===this._hosts.size&&this._stop()}}_start(){this._listening=!0,window.addEventListener("keydown",this._onKey,{capture:!0}),window.addEventListener("keyup",this._onKey,{capture:!0}),window.addEventListener("mousemove",this._onPointer,{capture:!0}),window.addEventListener("mouseover",this._onPointer,{capture:!0}),document.addEventListener("visibilitychange",this._onVisibilityChange)}_stop(){this._listening=!1,window.removeEventListener("keydown",this._onKey,{capture:!0}),window.removeEventListener("keyup",this._onKey,{capture:!0}),window.removeEventListener("mousemove",this._onPointer,{capture:!0}),window.removeEventListener("mouseover",this._onPointer,{capture:!0}),document.removeEventListener("visibilitychange",this._onVisibilityChange),this._reset()}_reset(){let e=this._altKey||this._shiftKey||this._ctrlKey||this._metaKey;this._altKey=this._shiftKey=this._ctrlKey=this._metaKey=!1,e&&this._notify()}_notify(){for(let e of this._hosts)e.requestUpdate()}};let av=new ModifierKeysTracker;let ModifierKeysController=class ModifierKeysController{constructor(e){this.host=e,e.addController(this)}get altKey(){return av.altKey}get shiftKey(){return av.shiftKey}get ctrlKey(){return av.ctrlKey}get metaKey(){return av.metaKey}hostConnected(){this._unsubscribe=av.subscribe(this.host)}hostDisconnected(){this._unsubscribe?.(),this._unsubscribe=void 0}};let a_=A`
	:host {
		--checkbox-foreground: var(--vscode-checkbox-foreground);
		--checkbox-background: var(--vscode-checkbox-background);
		--checkbox-border: var(--vscode-checkbox-border);
		--checkbox-checked-foreground: var(--vscode-checkbox-foreground);
		--checkbox-checked-background: var(--vscode-checkbox-selectBackground);
		--checkbox-checked-border: var(--vscode-checkbox-selectBorder);
		--checkbox-active-background: var(--vscode-checkbox-selectBackground);
		--checkbox-active-border: var(--vscode-checkbox-selectBorder);
		--checkbox-hover-background: var(--vscode-inputOption-hoverBackground);
		--checkbox-radius: 3px;
		--checkbox-border-width: 1px;
		--checkbox-size: 1.6rem;
		--checkbox-spacing: 1rem;

		display: block;
		margin-block: 0.8rem;
	}

	label {
		display: flex;
		gap: var(--checkbox-spacing);
		align-items: center;
		user-select: none;
		white-space: nowrap;
		cursor: pointer;
		color: var(--checkbox-foreground);
	}

	:host([disabled]) label {
		cursor: default;
		opacity: 0.5;
	}

	.label-text {
		display: block;
		line-height: normal;
		margin-inline-end: var(--checkbox-spacing);
	}

	.input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.control {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		box-sizing: border-box;
		border-radius: var(--checkbox-radius);
		color: var(--checkbox-foreground);
		background: var(--checkbox-background);
		border: var(--checkbox-border-width, 1px) solid var(--vscode-checkbox-border);
		left: 1px;
	}

	.input:hover + .control {
		background-color: var(--checkbox-hover-background);
	}

	.input:focus-visible + .control,
	.input:focus + .control {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.input:active + .control {
		background-color: var(--checkbox-active-background);
		border-color: var(--checkbox-active-border);
	}

	:host([checked]) .control,
	:host([indeterminate]) .control {
		color: var(--checkbox-checked-foreground);
		background-color: var(--checkbox-checked-background);
		border-color: var(--checkbox-checked-border);
	}

	code-icon {
		pointer-events: none;
		visibility: hidden;
	}

	:host([checked]) code-icon,
	:host([indeterminate]) code-icon {
		visibility: visible;
	}
`;var ay=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,ax=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?aw(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&ay(t,i,s),s};let ak=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this.indeterminate=!1,this._clickAlt=!1,this._modifiers=new ModifierKeysController(this),this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleClick(e){this._clickAlt=e.altKey}handleChange(e){let t=e.target.checked,i=this._clickAlt||this._modifiers.altKey;this.indeterminate&&i&&(t=!1,e.target.checked=!1),this._clickAlt=!1,this.checked=t,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("gl-change-value"))}renderCheck(){return ef`<code-icon icon=${this.indeterminate?"dash":"check"}></code-icon>`}render(){return ef`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
				@click=${this.handleClick}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text" part="label"></slot>
		</label>`}};ak.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},ak.styles=[a_],ax([eP({type:Boolean,reflect:!0})],ak.prototype,"disabled",2),ax([eP({type:String})],ak.prototype,"value",2),ax([eP({type:Boolean})],ak.prototype,"defaultChecked",1),ax([eP({type:Boolean,reflect:!0})],ak.prototype,"checked",2),ax([eP({type:Boolean,reflect:!0})],ak.prototype,"indeterminate",2),ak=ax([eT("gl-checkbox")],ak);let a$={_argdown:["\\E003","#519aba"],_argdown_light:["\\E003","#498ba7"],_asm:["\\E004","#cc3e44"],_asm_light:["\\E004","#b8383d"],_audio:["\\E005","#a074c4"],_audio_light:["\\E005","#9068b0"],_babel:["\\E006","#cbcb41"],_babel_light:["\\E006","#b7b73b"],_bazel:["\\E007","#8dc149"],_bazel_1:["\\E007","#4d5a5e"],_bazel_1_light:["\\E007","#455155"],_bazel_light:["\\E007","#7fae42"],_bicep:["\\E008","#519aba"],_bicep_light:["\\E008","#498ba7"],_bower:["\\E009","#e37933"],_bower_light:["\\E009","#cc6d2e"],_bsl:["\\E00A","#cc3e44"],_bsl_light:["\\E00A","#b8383d"],_c:["\\E00C","#519aba"],_c_1:["\\E00C","#a074c4"],_c_1_light:["\\E00C","#9068b0"],_c_2:["\\E00C","#cbcb41"],_c_2_light:["\\E00C","#b7b73b"],_c_light:["\\E00C","#498ba7"],"_c-sharp":["\\E00B","#519aba"],"_c-sharp_light":["\\E00B","#498ba7"],_cake:["\\E00D","#cc3e44"],_cake_light:["\\E00D","#b8383d"],_cake_php:["\\E00E","#cc3e44"],_cake_php_light:["\\E00E","#b8383d"],_clock:["\\E012","#519aba"],_clock_1:["\\E012","#6d8086"],_clock_1_light:["\\E012","#627379"],_clock_light:["\\E012","#498ba7"],_clojure:["\\E013","#8dc149"],_clojure_1:["\\E013","#519aba"],_clojure_1_light:["\\E013","#498ba7"],_clojure_light:["\\E013","#7fae42"],"_code-climate":["\\E014","#8dc149"],"_code-climate_light":["\\E014","#7fae42"],"_code-search":["\\E015","#a074c4"],"_code-search_light":["\\E015","#9068b0"],_coffee:["\\E016","#cbcb41"],_coffee_light:["\\E016","#b7b73b"],_coldfusion:["\\E018","#519aba"],_coldfusion_light:["\\E018","#498ba7"],_config:["\\E019","#6d8086"],_config_light:["\\E019","#627379"],_cpp:["\\E01A","#519aba"],_cpp_1:["\\E01A","#a074c4"],_cpp_1_light:["\\E01A","#9068b0"],_cpp_2:["\\E01A","#cbcb41"],_cpp_2_light:["\\E01A","#b7b73b"],_cpp_light:["\\E01A","#498ba7"],_crystal:["\\E01B","#d4d7d6"],_crystal_embedded:["\\E01C","#d4d7d6"],_crystal_embedded_light:["\\E01C","#bfc2c1"],_crystal_light:["\\E01B","#bfc2c1"],_css:["\\E01D","#519aba"],_css_light:["\\E01D","#498ba7"],_csv:["\\E01E","#8dc149"],_csv_light:["\\E01E","#7fae42"],_cu:["\\E01F","#8dc149"],_cu_1:["\\E01F","#a074c4"],_cu_1_light:["\\E01F","#9068b0"],_cu_light:["\\E01F","#7fae42"],_d:["\\E020","#cc3e44"],_d_light:["\\E020","#b8383d"],_dart:["\\E021","#519aba"],_dart_light:["\\E021","#498ba7"],_db:["\\E022","#f55385"],_db_1:["\\E022","#519aba"],_db_1_light:["\\E022","#498ba7"],_db_light:["\\E022","#dd4b78"],_default:["\\E023","#d4d7d6"],_default_light:["\\E023","#bfc2c1"],_docker:["\\E025","#519aba"],_docker_1:["\\E025","#4d5a5e"],_docker_1_light:["\\E025","#455155"],_docker_2:["\\E025","#8dc149"],_docker_2_light:["\\E025","#7fae42"],_docker_3:["\\E025","#f55385"],_docker_3_light:["\\E025","#dd4b78"],_docker_light:["\\E025","#498ba7"],_ejs:["\\E027","#cbcb41"],_ejs_light:["\\E027","#b7b73b"],_elixir:["\\E028","#a074c4"],_elixir_light:["\\E028","#9068b0"],_elixir_script:["\\E029","#a074c4"],_elixir_script_light:["\\E029","#9068b0"],_elm:["\\E02A","#519aba"],_elm_light:["\\E02A","#498ba7"],_eslint:["\\E02C","#a074c4"],_eslint_1:["\\E02C","#4d5a5e"],_eslint_1_light:["\\E02C","#455155"],_eslint_light:["\\E02C","#9068b0"],_ethereum:["\\E02D","#519aba"],_ethereum_light:["\\E02D","#498ba7"],"_f-sharp":["\\E02E","#519aba"],"_f-sharp_light":["\\E02E","#498ba7"],_favicon:["\\E02F","#cbcb41"],_favicon_light:["\\E02F","#b7b73b"],_firebase:["\\E030","#e37933"],_firebase_light:["\\E030","#cc6d2e"],_firefox:["\\E031","#e37933"],_firefox_light:["\\E031","#cc6d2e"],_font:["\\E033","#cc3e44"],_font_light:["\\E033","#b8383d"],_git:["\\E034","#41535b"],_git_light:["\\E034","#3b4b52"],_github:["\\E037","#d4d7d6"],_github_light:["\\E037","#bfc2c1"],_gitlab:["\\E038","#e37933"],_gitlab_light:["\\E038","#cc6d2e"],_go:["\\E039","#519aba"],_go_light:["\\E039","#498ba7"],_go2:["\\E03A","#519aba"],_go2_light:["\\E03A","#498ba7"],_godot:["\\E03B","#519aba"],_godot_1:["\\E03B","#cc3e44"],_godot_1_light:["\\E03B","#b8383d"],_godot_2:["\\E03B","#cbcb41"],_godot_2_light:["\\E03B","#b7b73b"],_godot_3:["\\E03B","#a074c4"],_godot_3_light:["\\E03B","#9068b0"],_godot_light:["\\E03B","#498ba7"],_gradle:["\\E03C","#519aba"],_gradle_light:["\\E03C","#498ba7"],_grails:["\\E03D","#8dc149"],_grails_light:["\\E03D","#7fae42"],_graphql:["\\E03E","#f55385"],_graphql_light:["\\E03E","#dd4b78"],_grunt:["\\E03F","#e37933"],_grunt_light:["\\E03F","#cc6d2e"],_gulp:["\\E040","#cc3e44"],_gulp_light:["\\E040","#b8383d"],_hacklang:["\\E041","#e37933"],_hacklang_light:["\\E041","#cc6d2e"],_haml:["\\E042","#cc3e44"],_haml_light:["\\E042","#b8383d"],_happenings:["\\E043","#519aba"],_happenings_light:["\\E043","#498ba7"],_haskell:["\\E044","#a074c4"],_haskell_light:["\\E044","#9068b0"],_haxe:["\\E045","#e37933"],_haxe_1:["\\E045","#cbcb41"],_haxe_1_light:["\\E045","#b7b73b"],_haxe_2:["\\E045","#519aba"],_haxe_2_light:["\\E045","#498ba7"],_haxe_3:["\\E045","#a074c4"],_haxe_3_light:["\\E045","#9068b0"],_haxe_light:["\\E045","#cc6d2e"],_heroku:["\\E046","#a074c4"],_heroku_light:["\\E046","#9068b0"],_hex:["\\E047","#cc3e44"],_hex_light:["\\E047","#b8383d"],_html:["\\E048","#519aba"],_html_1:["\\E048","#8dc149"],_html_1_light:["\\E048","#7fae42"],_html_2:["\\E048","#cbcb41"],_html_2_light:["\\E048","#b7b73b"],_html_3:["\\E048","#e37933"],_html_3_light:["\\E048","#cc6d2e"],_html_erb:["\\E049","#cc3e44"],_html_erb_light:["\\E049","#b8383d"],_html_light:["\\E048","#498ba7"],_ignored:["\\E04A","#41535b"],_ignored_light:["\\E04A","#3b4b52"],_illustrator:["\\E04B","#cbcb41"],_illustrator_light:["\\E04B","#b7b73b"],_image:["\\E04C","#a074c4"],_image_light:["\\E04C","#9068b0"],_info:["\\E04D","#519aba"],_info_light:["\\E04D","#498ba7"],_ionic:["\\E04E","#519aba"],_ionic_light:["\\E04E","#498ba7"],_jade:["\\E04F","#cc3e44"],_jade_light:["\\E04F","#b8383d"],_java:["\\E050","#cc3e44"],_java_1:["\\E050","#519aba"],_java_1_light:["\\E050","#498ba7"],_java_light:["\\E050","#b8383d"],_javascript:["\\E051","#cbcb41"],_javascript_1:["\\E051","#e37933"],_javascript_1_light:["\\E051","#cc6d2e"],_javascript_2:["\\E051","#519aba"],_javascript_2_light:["\\E051","#498ba7"],_javascript_light:["\\E051","#b7b73b"],_jenkins:["\\E052","#cc3e44"],_jenkins_light:["\\E052","#b8383d"],_jinja:["\\E053","#cc3e44"],_jinja_light:["\\E053","#b8383d"],_json:["\\E055","#cbcb41"],_json_1:["\\E055","#8dc149"],_json_1_light:["\\E055","#7fae42"],_json_light:["\\E055","#b7b73b"],_julia:["\\E056","#a074c4"],_julia_light:["\\E056","#9068b0"],_karma:["\\E057","#8dc149"],_karma_light:["\\E057","#7fae42"],_kotlin:["\\E058","#e37933"],_kotlin_light:["\\E058","#cc6d2e"],_less:["\\E059","#519aba"],_less_light:["\\E059","#498ba7"],_license:["\\E05A","#cbcb41"],_license_1:["\\E05A","#e37933"],_license_1_light:["\\E05A","#cc6d2e"],_license_2:["\\E05A","#cc3e44"],_license_2_light:["\\E05A","#b8383d"],_license_light:["\\E05A","#b7b73b"],_liquid:["\\E05B","#8dc149"],_liquid_light:["\\E05B","#7fae42"],_livescript:["\\E05C","#519aba"],_livescript_light:["\\E05C","#498ba7"],_lock:["\\E05D","#8dc149"],_lock_light:["\\E05D","#7fae42"],_lua:["\\E05E","#519aba"],_lua_light:["\\E05E","#498ba7"],_makefile:["\\E05F","#e37933"],_makefile_1:["\\E05F","#a074c4"],_makefile_1_light:["\\E05F","#9068b0"],_makefile_2:["\\E05F","#6d8086"],_makefile_2_light:["\\E05F","#627379"],_makefile_3:["\\E05F","#519aba"],_makefile_3_light:["\\E05F","#498ba7"],_makefile_light:["\\E05F","#cc6d2e"],_markdown:["\\E060","#519aba"],_markdown_light:["\\E060","#498ba7"],_maven:["\\E061","#cc3e44"],_maven_light:["\\E061","#b8383d"],_mdo:["\\E062","#cc3e44"],_mdo_light:["\\E062","#b8383d"],_mustache:["\\E063","#e37933"],_mustache_light:["\\E063","#cc6d2e"],_nim:["\\E065","#cbcb41"],_nim_light:["\\E065","#b7b73b"],_notebook:["\\E066","#519aba"],_notebook_light:["\\E066","#498ba7"],_npm:["\\E067","#41535b"],_npm_1:["\\E067","#cc3e44"],_npm_1_light:["\\E067","#b8383d"],_npm_ignored:["\\E068","#41535b"],_npm_ignored_light:["\\E068","#3b4b52"],_npm_light:["\\E067","#3b4b52"],_nunjucks:["\\E069","#8dc149"],_nunjucks_light:["\\E069","#7fae42"],_ocaml:["\\E06A","#e37933"],_ocaml_light:["\\E06A","#cc6d2e"],_odata:["\\E06B","#e37933"],_odata_light:["\\E06B","#cc6d2e"],_pddl:["\\E06C","#a074c4"],_pddl_light:["\\E06C","#9068b0"],_pdf:["\\E06D","#cc3e44"],_pdf_light:["\\E06D","#b8383d"],_perl:["\\E06E","#519aba"],_perl_light:["\\E06E","#498ba7"],_photoshop:["\\E06F","#519aba"],_photoshop_light:["\\E06F","#498ba7"],_php:["\\E070","#a074c4"],_php_light:["\\E070","#9068b0"],_pipeline:["\\E071","#e37933"],_pipeline_light:["\\E071","#cc6d2e"],_plan:["\\E072","#8dc149"],_plan_light:["\\E072","#7fae42"],_platformio:["\\E073","#e37933"],_platformio_light:["\\E073","#cc6d2e"],_powershell:["\\E074","#519aba"],_powershell_light:["\\E074","#498ba7"],_prisma:["\\E075","#519aba"],_prisma_light:["\\E075","#498ba7"],_prolog:["\\E077","#e37933"],_prolog_light:["\\E077","#cc6d2e"],_pug:["\\E078","#cc3e44"],_pug_light:["\\E078","#b8383d"],_puppet:["\\E079","#cbcb41"],_puppet_light:["\\E079","#b7b73b"],_purescript:["\\E07A","#d4d7d6"],_purescript_light:["\\E07A","#bfc2c1"],_python:["\\E07B","#519aba"],_python_light:["\\E07B","#498ba7"],_R:["\\E001","#519aba"],_R_light:["\\E001","#498ba7"],_react:["\\E07D","#519aba"],_react_1:["\\E07D","#e37933"],_react_1_light:["\\E07D","#cc6d2e"],_react_light:["\\E07D","#498ba7"],_reasonml:["\\E07E","#cc3e44"],_reasonml_light:["\\E07E","#b8383d"],_rescript:["\\E07F","#cc3e44"],_rescript_1:["\\E07F","#f55385"],_rescript_1_light:["\\E07F","#dd4b78"],_rescript_light:["\\E07F","#b8383d"],_rollup:["\\E080","#cc3e44"],_rollup_light:["\\E080","#b8383d"],_ruby:["\\E081","#cc3e44"],_ruby_light:["\\E081","#b8383d"],_rust:["\\E082","#6d8086"],_rust_light:["\\E082","#627379"],_salesforce:["\\E083","#519aba"],_salesforce_light:["\\E083","#498ba7"],_sass:["\\E084","#f55385"],_sass_light:["\\E084","#dd4b78"],_sbt:["\\E085","#519aba"],_sbt_light:["\\E085","#498ba7"],_scala:["\\E086","#cc3e44"],_scala_light:["\\E086","#b8383d"],_shell:["\\E089","#8dc149"],_shell_light:["\\E089","#7fae42"],_slim:["\\E08A","#e37933"],_slim_light:["\\E08A","#cc6d2e"],_smarty:["\\E08B","#cbcb41"],_smarty_light:["\\E08B","#b7b73b"],_spring:["\\E08C","#8dc149"],_spring_light:["\\E08C","#7fae42"],_stylelint:["\\E08D","#d4d7d6"],_stylelint_1:["\\E08D","#4d5a5e"],_stylelint_1_light:["\\E08D","#455155"],_stylelint_light:["\\E08D","#bfc2c1"],_stylus:["\\E08E","#8dc149"],_stylus_light:["\\E08E","#7fae42"],_sublime:["\\E08F","#e37933"],_sublime_light:["\\E08F","#cc6d2e"],_svelte:["\\E090","#cc3e44"],_svelte_light:["\\E090","#b8383d"],_svg:["\\E091","#a074c4"],_svg_1:["\\E091","#519aba"],_svg_1_light:["\\E091","#498ba7"],_svg_light:["\\E091","#9068b0"],_swift:["\\E092","#e37933"],_swift_light:["\\E092","#cc6d2e"],_terraform:["\\E093","#a074c4"],_terraform_light:["\\E093","#9068b0"],_tex:["\\E094","#519aba"],_tex_1:["\\E094","#cbcb41"],_tex_1_light:["\\E094","#b7b73b"],_tex_2:["\\E094","#e37933"],_tex_2_light:["\\E094","#cc6d2e"],_tex_3:["\\E094","#d4d7d6"],_tex_3_light:["\\E094","#bfc2c1"],_tex_light:["\\E094","#498ba7"],_todo:["\\E096",""],_tsconfig:["\\E097","#519aba"],_tsconfig_light:["\\E097","#498ba7"],_twig:["\\E098","#8dc149"],_twig_light:["\\E098","#7fae42"],_typescript:["\\E099","#519aba"],_typescript_1:["\\E099","#e37933"],_typescript_1_light:["\\E099","#cc6d2e"],_typescript_light:["\\E099","#498ba7"],_vala:["\\E09A","#6d8086"],_vala_light:["\\E09A","#627379"],_video:["\\E09B","#f55385"],_video_light:["\\E09B","#dd4b78"],_vite:["\\E09C","#cbcb41"],_vite_light:["\\E09C","#b7b73b"],_vue:["\\E09D","#8dc149"],_vue_light:["\\E09D","#7fae42"],_wasm:["\\E09E","#a074c4"],_wasm_light:["\\E09E","#9068b0"],_wat:["\\E09F","#a074c4"],_wat_light:["\\E09F","#9068b0"],_webpack:["\\E0A0","#519aba"],_webpack_light:["\\E0A0","#498ba7"],_wgt:["\\E0A1","#519aba"],_wgt_light:["\\E0A1","#498ba7"],_windows:["\\E0A2","#519aba"],_windows_light:["\\E0A2","#498ba7"],_word:["\\E0A3","#519aba"],_word_light:["\\E0A3","#498ba7"],_xls:["\\E0A4","#8dc149"],_xls_light:["\\E0A4","#7fae42"],_xml:["\\E0A5","#e37933"],_xml_light:["\\E0A5","#cc6d2e"],_yarn:["\\E0A6","#519aba"],_yarn_light:["\\E0A6","#498ba7"],_yml:["\\E0A7","#a074c4"],_yml_light:["\\E0A7","#9068b0"],_zig:["\\E0A8","#e37933"],_zig_light:["\\E0A8","#cc6d2e"],_zip:["\\E0A9","#cc3e44"],_zip_1:["\\E0A9","#6d8086"],_zip_1_light:["\\E0A9","#627379"],_zip_light:["\\E0A9","#b8383d"]},aC={"babel.config.cjs":"_babel","babel.config.js":"_babel","babel.config.json":"_babel","bower.json":"_bower",build:"_bazel","build.bazel":"_bazel",changelog:"_clock","changelog.md":"_clock","changelog.txt":"_clock",changes:"_clock","changes.md":"_clock","changes.txt":"_clock","cmakelists.txt":"_makefile_3",compiling:"_license_1","compiling.md":"_license_1","compiling.txt":"_license_1",contributing:"_license_2","contributing.md":"_license_2","contributing.txt":"_license_2",copying:"_license","copying.md":"_license","copying.txt":"_license","docker-healthcheck":"_docker_2","eslint.config.js":"_eslint","firebase.json":"_firebase",geckodriver:"_firefox","gruntfile.babel.js":"_grunt","gruntfile.coffee":"_grunt","gruntfile.js":"_grunt",gulpfile:"_gulp","gulpfile.js":"_gulp","ionic.config.json":"_ionic","ionic.project":"_ionic",jenkinsfile:"_jenkins","karma.conf.cjs":"_karma","karma.conf.coffee":"_karma","karma.conf.js":"_karma","karma.conf.mjs":"_karma",licence:"_license","licence.md":"_license","licence.txt":"_license",license:"_license","license.md":"_license","license.txt":"_license","mime.types":"_config",mix:"_hex",mvnw:"_maven","npm-debug.log":"_npm_ignored",omakefile:"_makefile_2","platformio.ini":"_platformio","pom.xml":"_maven",procfile:"_heroku",qmakefile:"_makefile_1",readme:"_info","readme.md":"_info","readme.txt":"_info","rollup.config.js":"_rollup","sass-lint.yml":"_sass","stylelint.config.cjs":"_stylelint","stylelint.config.js":"_stylelint","stylelint.config.mjs":"_stylelint","swagger.json":"_json_1","swagger.yaml":"_json_1","swagger.yml":"_json_1",todo:"_todo","todo.md":"_todo","todo.txt":"_todo","tsconfig.json":"_tsconfig",version:"_clock","version.md":"_clock","version.txt":"_clock","vite.config.cjs":"_vite","vite.config.cts":"_vite","vite.config.js":"_vite","vite.config.mjs":"_vite","vite.config.mts":"_vite","vite.config.ts":"_vite","webpack.common.cjs":"_webpack","webpack.common.js":"_webpack","webpack.common.mjs":"_webpack","webpack.common.ts":"_webpack","webpack.config.build.cjs":"_webpack","webpack.config.build.js":"_webpack","webpack.config.build.mjs":"_webpack","webpack.config.build.ts":"_webpack","webpack.config.cjs":"_webpack","webpack.config.js":"_webpack","webpack.config.mjs":"_webpack","webpack.config.ts":"_webpack","webpack.dev.cjs":"_webpack","webpack.dev.js":"_webpack","webpack.dev.mjs":"_webpack","webpack.dev.ts":"_webpack","webpack.prod.cjs":"_webpack","webpack.prod.js":"_webpack","webpack.prod.mjs":"_webpack","webpack.prod.ts":"_webpack",workspace:"_bazel","workspace.bazel":"_bazel","yarn.clean":"_yarn","yarn.lock":"_yarn"},aE={"3dm":"_svg_1","3ds":"_svg_1",ad:"_argdown",ai:"_illustrator",apex:"_salesforce",argdown:"_argdown",article:"_go",asax:"_html_2",ascx:"_html_1",asm:"_asm",aspx:"_html",avi:"_video",avif:"_image",babelrc:"_babel","babelrc.cjs":"_babel","babelrc.js":"_babel",bazel:"_bazel",bazelignore:"_bazel",bazelrc:"_bazel_1",bazelversion:"_bazel",bicep:"_bicep",bowerrc:"_bower",bsl:"_bsl",build:"_bazel",bzl:"_bazel",cake:"_cake",cer:"_lock",cert:"_lock",cfc:"_coldfusion",cfm:"_coldfusion","cjs.map":"_javascript",cjsx:"_react",class:"_java_1",classpath:"_java",cls:"_salesforce",cmx:"_ocaml",cmxa:"_ocaml","codeclimate.yml":"_code-climate",component:"_html_3",config:"_config",cr:"_crystal",crt:"_lock",cson:"_json","css.map":"_css",csv:"_csv",ctp:"_cake_php",cuh:"_cu_1",d:"_d",dae:"_svg_1",direnv:"_config",doc:"_word",dockerignore:"_docker_1",docx:"_word",ds_store:"_ignored",dtx:"_tex_2",ecr:"_crystal_embedded",edn:"_clojure_1",ejs:"_ejs",elm:"_elm",eot:"_font",epp:"_puppet",erb:"_html_erb","erb.html":"_html_erb",es:"_javascript",es5:"_javascript",es7:"_javascript",eslintignore:"_eslint_1",eslintrc:"_eslint","eslintrc.cjs":"_eslint","eslintrc.js":"_eslint","eslintrc.json":"_eslint","eslintrc.yaml":"_eslint","eslintrc.yml":"_eslint",ex:"_elixir",exs:"_elixir_script",firebaserc:"_firebase",flac:"_audio",gd:"_godot",gif:"_image",gitattributes:"_git",gitconfig:"_git","github-issues":"_github",gitkeep:"_git","gitlab-ci.yml":"_gitlab",gitmodules:"_git",godot:"_godot_1",gql:"_graphql",gradle:"_gradle",graphql:"_graphql",graphqls:"_graphql",gsp:"_grails",h:"_c_1","h++":"_cpp_1",hack:"_hacklang",haml:"_haml",happenings:"_happenings",hh:"_cpp_1",hpp:"_cpp_1",hs:"_haskell",htaccess:"_config","html.erb":"_html_erb",hu:"_cu_1",hx:"_haxe",hxml:"_haxe_3",hxp:"_haxe_2",hxs:"_haxe_1",hxx:"_cpp_1",ico:"_favicon",ins:"_tex_3",ipynb:"_notebook",jade:"_jade",jar:"_zip",jinja:"_jinja",jinja2:"_jinja",jpeg:"_image",jpg:"_image","js.map":"_javascript",jscsrc:"_javascript_2",jshintrc:"_javascript_2",key:"_lock",kt:"_kotlin",kts:"_kotlin",lhs:"_haskell",liquid:"_liquid",litcoffee:"_coffee",ls:"_livescript",master:"_html_2",mdo:"_mdo","mjs.map":"_javascript",ml:"_ocaml",mli:"_ocaml",mov:"_video",mp3:"_audio",mp4:"_video",mpg:"_video",mustache:"_mustache",nim:"_nim",nims:"_nim",nj:"_nunjucks",njk:"_nunjucks",njs:"_nunjucks","npm-debug.log":"_npm",npmignore:"_npm_1",npmrc:"_npm_1",nunj:"_nunjucks",nunjs:"_nunjucks",nunjucks:"_nunjucks",obj:"_svg_1",odata:"_odata",ogg:"_audio",ogv:"_video",otf:"_font",pddl:"_pddl",pdf:"_pdf",pem:"_lock","php.inc":"_php",pipeline:"_pipeline",plan:"_plan",png:"_image",pp:"_puppet",prisma:"_prisma",pro:"_prolog",psd:"_photoshop",purs:"_purescript",pxm:"_image",r:"_R",re:"_reasonml",res:"_rescript",resi:"_rescript_1",rmd:"_R",s:"_asm",sass:"_sass",sbt:"_sbt",scala:"_scala",slang:"_crystal_embedded",slide:"_go",slim:"_slim",slugignore:"_config","smarty.tpl":"_smarty",sol:"_ethereum",soql:"_db_1","spec.cjs":"_javascript_1","spec.js":"_javascript_1","spec.jsx":"_react_1","spec.mjs":"_javascript_1","spec.ts":"_typescript_1","spec.tsx":"_react_1",springbeans:"_spring",sss:"_css",stache:"_mustache",static:"_config",stl:"_svg_1",styl:"_stylus",stylelintignore:"_stylelint_1",stylelintrc:"_stylelint","stylelintrc.js":"_stylelint","stylelintrc.json":"_stylelint","stylelintrc.yaml":"_stylelint","stylelintrc.yml":"_stylelint","sublime-project":"_sublime","sublime-workspace":"_sublime",svelte:"_svelte",svg:"_svg",svgx:"_image","test.cjs":"_javascript_1","test.js":"_javascript_1","test.jsx":"_react_1","test.mjs":"_javascript_1","test.ts":"_typescript_1","test.tsx":"_react_1",tf:"_terraform","tf.json":"_terraform",tfvars:"_terraform","tfvars.json":"_terraform",tiff:"_image",tmp:"_clock_1",toml:"_config",tpl:"_smarty",tres:"_godot_2",tscn:"_godot_3",ttf:"_font",twig:"_twig",vala:"_vala",vapi:"_vala",vue:"_vue",wasm:"_wasm",wat:"_wat",wav:"_audio",webm:"_video",webp:"_image",wgt:"_wgt",woff:"_font",woff2:"_font",workspace:"_bazel",xls:"_xls",xlsx:"_xls",zig:"_zig",zip:"_zip_1"},aS={argdown:"_argdown",bat:"_windows",bicep:"_bicep",blade:"_php",c:"_c",chatagent:"_markdown",clojure:"_clojure",coffeescript:"_coffee",cpp:"_cpp",csharp:"_c-sharp",css:"_css","cuda-cpp":"_cu",dart:"_dart","django-html":"_html_3",dockercompose:"_docker_3",dockerfile:"_docker",dotenv:"_config",elixir:"_elixir",elm:"_elm",erb:"_html_erb",fsharp:"_f-sharp","git-commit":"_git","github-issues":"_github",go:"_go2",godot:"_godot",gradle:"_gradle",groovy:"_grails",haml:"_haml",handlebars:"_mustache",haskell:"_haskell",haxe:"_haxe",html:"_html_3",ignore:"_git",instructions:"_markdown",jade:"_pug",java:"_java",javascript:"_javascript",javascriptreact:"_react",jinja:"_jinja",json:"_json",jsonc:"_json",jsonl:"_json",julia:"_julia",kotlin:"_kotlin",latex:"_tex",less:"_less",lua:"_lua",makefile:"_makefile",markdown:"_markdown",mustache:"_mustache",nunjucks:"_nunjucks","objective-c":"_c_2","objective-cpp":"_cpp_2",ocaml:"_ocaml",perl:"_perl",php:"_php",postcss:"_css",powershell:"_powershell",prompt:"_markdown",properties:"_config",python:"_python",r:"_R",razor:"_html",rescript:"_rescript",ruby:"_ruby",rust:"_rust",sass:"_sass",scss:"_sass","search-result":"_code-search",shellscript:"_shell",skill:"_markdown",sql:"_db",stylus:"_stylus",swift:"_swift",terraform:"_terraform",tex:"_tex_1",todo:"_todo",typescript:"_typescript",typescriptreact:"_react",vala:"_vala",vue:"_vue",xml:"_xml",yaml:"_yml"},aA={"babel.config.cjs":"_babel_light","babel.config.js":"_babel_light","babel.config.json":"_babel_light","bower.json":"_bower_light",build:"_bazel_light","build.bazel":"_bazel_light",changelog:"_clock_light","changelog.md":"_clock_light","changelog.txt":"_clock_light",changes:"_clock_light","changes.md":"_clock_light","changes.txt":"_clock_light","cmakelists.txt":"_makefile_3_light",compiling:"_license_1_light","compiling.md":"_license_1_light","compiling.txt":"_license_1_light",contributing:"_license_2_light","contributing.md":"_license_2_light","contributing.txt":"_license_2_light",copying:"_license_light","copying.md":"_license_light","copying.txt":"_license_light","docker-healthcheck":"_docker_2_light","eslint.config.js":"_eslint_light","firebase.json":"_firebase_light",geckodriver:"_firefox_light","gruntfile.babel.js":"_grunt_light","gruntfile.coffee":"_grunt_light","gruntfile.js":"_grunt_light",gulpfile:"_gulp_light","gulpfile.js":"_gulp_light","ionic.config.json":"_ionic_light","ionic.project":"_ionic_light",jenkinsfile:"_jenkins_light","karma.conf.cjs":"_karma_light","karma.conf.coffee":"_karma_light","karma.conf.js":"_karma_light","karma.conf.mjs":"_karma_light",licence:"_license_light","licence.md":"_license_light","licence.txt":"_license_light",license:"_license_light","license.md":"_license_light","license.txt":"_license_light","mime.types":"_config_light",mix:"_hex_light",mvnw:"_maven_light","npm-debug.log":"_npm_ignored_light",omakefile:"_makefile_2_light","platformio.ini":"_platformio_light","pom.xml":"_maven_light",procfile:"_heroku_light",qmakefile:"_makefile_1_light",readme:"_info_light","readme.md":"_info_light","readme.txt":"_info_light","rollup.config.js":"_rollup_light","sass-lint.yml":"_sass_light","stylelint.config.cjs":"_stylelint_light","stylelint.config.js":"_stylelint_light","stylelint.config.mjs":"_stylelint_light","swagger.json":"_json_1_light","swagger.yaml":"_json_1_light","swagger.yml":"_json_1_light","tsconfig.json":"_tsconfig_light",version:"_clock_light","version.md":"_clock_light","version.txt":"_clock_light","vite.config.cjs":"_vite_light","vite.config.cts":"_vite_light","vite.config.js":"_vite_light","vite.config.mjs":"_vite_light","vite.config.mts":"_vite_light","vite.config.ts":"_vite_light","webpack.common.cjs":"_webpack_light","webpack.common.js":"_webpack_light","webpack.common.mjs":"_webpack_light","webpack.common.ts":"_webpack_light","webpack.config.build.cjs":"_webpack_light","webpack.config.build.js":"_webpack_light","webpack.config.build.mjs":"_webpack_light","webpack.config.build.ts":"_webpack_light","webpack.config.cjs":"_webpack_light","webpack.config.js":"_webpack_light","webpack.config.mjs":"_webpack_light","webpack.config.ts":"_webpack_light","webpack.dev.cjs":"_webpack_light","webpack.dev.js":"_webpack_light","webpack.dev.mjs":"_webpack_light","webpack.dev.ts":"_webpack_light","webpack.prod.cjs":"_webpack_light","webpack.prod.js":"_webpack_light","webpack.prod.mjs":"_webpack_light","webpack.prod.ts":"_webpack_light",workspace:"_bazel_light","workspace.bazel":"_bazel_light","yarn.clean":"_yarn_light","yarn.lock":"_yarn_light"},aT={"3dm":"_svg_1_light","3ds":"_svg_1_light",ad:"_argdown_light",ai:"_illustrator_light",apex:"_salesforce_light",argdown:"_argdown_light",article:"_go_light",asax:"_html_2_light",ascx:"_html_1_light",asm:"_asm_light",aspx:"_html_light",avi:"_video_light",avif:"_image_light",babelrc:"_babel_light","babelrc.cjs":"_babel_light","babelrc.js":"_babel_light",bazel:"_bazel_light",bazelignore:"_bazel_light",bazelrc:"_bazel_1_light",bazelversion:"_bazel_light",bicep:"_bicep_light",bowerrc:"_bower_light",bsl:"_bsl_light",build:"_bazel_light",bzl:"_bazel_light",cake:"_cake_light",cer:"_lock_light",cert:"_lock_light",cfc:"_coldfusion_light",cfm:"_coldfusion_light","cjs.map":"_javascript_light",cjsx:"_react_light",class:"_java_1_light",classpath:"_java_light",cls:"_salesforce_light",cmx:"_ocaml_light",cmxa:"_ocaml_light","codeclimate.yml":"_code-climate_light",component:"_html_3_light",config:"_config_light",cr:"_crystal_light",crt:"_lock_light",cson:"_json_light","css.map":"_css_light",csv:"_csv_light",ctp:"_cake_php_light",cuh:"_cu_1_light",d:"_d_light",dae:"_svg_1_light",direnv:"_config_light",doc:"_word_light",dockerignore:"_docker_1_light",docx:"_word_light",ds_store:"_ignored_light",dtx:"_tex_2_light",ecr:"_crystal_embedded_light",edn:"_clojure_1_light",ejs:"_ejs_light",elm:"_elm_light",eot:"_font_light",epp:"_puppet_light",erb:"_html_erb_light","erb.html":"_html_erb_light",es:"_javascript_light",es5:"_javascript_light",es7:"_javascript_light",eslintignore:"_eslint_1_light",eslintrc:"_eslint_light","eslintrc.cjs":"_eslint_light","eslintrc.js":"_eslint_light","eslintrc.json":"_eslint_light","eslintrc.yaml":"_eslint_light","eslintrc.yml":"_eslint_light",ex:"_elixir_light",exs:"_elixir_script_light",firebaserc:"_firebase_light",flac:"_audio_light",gd:"_godot_light",gif:"_image_light",gitattributes:"_git_light",gitconfig:"_git_light","github-issues":"_github_light",gitkeep:"_git_light","gitlab-ci.yml":"_gitlab_light",gitmodules:"_git_light",godot:"_godot_1_light",gql:"_graphql_light",gradle:"_gradle_light",graphql:"_graphql_light",graphqls:"_graphql_light",gsp:"_grails_light",h:"_c_1_light","h++":"_cpp_1_light",hack:"_hacklang_light",haml:"_haml_light",happenings:"_happenings_light",hh:"_cpp_1_light",hpp:"_cpp_1_light",hs:"_haskell_light",htaccess:"_config_light","html.erb":"_html_erb_light",hu:"_cu_1_light",hx:"_haxe_light",hxml:"_haxe_3_light",hxp:"_haxe_2_light",hxs:"_haxe_1_light",hxx:"_cpp_1_light",ico:"_favicon_light",ins:"_tex_3_light",ipynb:"_notebook_light",jade:"_jade_light",jar:"_zip_light",jinja:"_jinja_light",jinja2:"_jinja_light",jpeg:"_image_light",jpg:"_image_light","js.map":"_javascript_light",jscsrc:"_javascript_2_light",jshintrc:"_javascript_2_light",key:"_lock_light",kt:"_kotlin_light",kts:"_kotlin_light",lhs:"_haskell_light",liquid:"_liquid_light",litcoffee:"_coffee_light",ls:"_livescript_light",master:"_html_2_light",mdo:"_mdo_light","mjs.map":"_javascript_light",ml:"_ocaml_light",mli:"_ocaml_light",mov:"_video_light",mp3:"_audio_light",mp4:"_video_light",mpg:"_video_light",mustache:"_mustache_light",nim:"_nim_light",nims:"_nim_light",nj:"_nunjucks_light",njk:"_nunjucks_light",njs:"_nunjucks_light","npm-debug.log":"_npm_light",npmignore:"_npm_1_light",npmrc:"_npm_1_light",nunj:"_nunjucks_light",nunjs:"_nunjucks_light",nunjucks:"_nunjucks_light",obj:"_svg_1_light",odata:"_odata_light",ogg:"_audio_light",ogv:"_video_light",otf:"_font_light",pddl:"_pddl_light",pdf:"_pdf_light",pem:"_lock_light","php.inc":"_php_light",pipeline:"_pipeline_light",plan:"_plan_light",png:"_image_light",pp:"_puppet_light",prisma:"_prisma_light",pro:"_prolog_light",psd:"_photoshop_light",purs:"_purescript_light",pxm:"_image_light",r:"_R_light",re:"_reasonml_light",res:"_rescript_light",resi:"_rescript_1_light",rmd:"_R_light",s:"_asm_light",sass:"_sass_light",sbt:"_sbt_light",scala:"_scala_light",slang:"_crystal_embedded_light",slide:"_go_light",slim:"_slim_light",slugignore:"_config_light","smarty.tpl":"_smarty_light",sol:"_ethereum_light",soql:"_db_1_light","spec.cjs":"_javascript_1_light","spec.js":"_javascript_1_light","spec.jsx":"_react_1_light","spec.mjs":"_javascript_1_light","spec.ts":"_typescript_1_light","spec.tsx":"_react_1_light",springbeans:"_spring_light",sss:"_css_light",stache:"_mustache_light",static:"_config_light",stl:"_svg_1_light",styl:"_stylus_light",stylelintignore:"_stylelint_1_light",stylelintrc:"_stylelint_light","stylelintrc.js":"_stylelint_light","stylelintrc.json":"_stylelint_light","stylelintrc.yaml":"_stylelint_light","stylelintrc.yml":"_stylelint_light","sublime-project":"_sublime_light","sublime-workspace":"_sublime_light",svelte:"_svelte_light",svg:"_svg_light",svgx:"_image_light","test.cjs":"_javascript_1_light","test.js":"_javascript_1_light","test.jsx":"_react_1_light","test.mjs":"_javascript_1_light","test.ts":"_typescript_1_light","test.tsx":"_react_1_light",tf:"_terraform_light","tf.json":"_terraform_light",tfvars:"_terraform_light","tfvars.json":"_terraform_light",tiff:"_image_light",tmp:"_clock_1_light",toml:"_config_light",tpl:"_smarty_light",tres:"_godot_2_light",tscn:"_godot_3_light",ttf:"_font_light",twig:"_twig_light",vala:"_vala_light",vapi:"_vala_light",vue:"_vue_light",wasm:"_wasm_light",wat:"_wat_light",wav:"_audio_light",webm:"_video_light",webp:"_image_light",wgt:"_wgt_light",woff:"_font_light",woff2:"_font_light",workspace:"_bazel_light",xls:"_xls_light",xlsx:"_xls_light",zig:"_zig_light",zip:"_zip_1_light"},aM={argdown:"_argdown_light",bat:"_windows_light",bicep:"_bicep_light",blade:"_php_light",c:"_c_light",chatagent:"_markdown_light",clojure:"_clojure_light",coffeescript:"_coffee_light",cpp:"_cpp_light",csharp:"_c-sharp_light",css:"_css_light","cuda-cpp":"_cu_light",dart:"_dart_light","django-html":"_html_3_light",dockercompose:"_docker_3_light",dockerfile:"_docker_light",dotenv:"_config_light",elixir:"_elixir_light",elm:"_elm_light",erb:"_html_erb_light",fsharp:"_f-sharp_light","git-commit":"_git_light","github-issues":"_github_light",go:"_go2_light",godot:"_godot_light",gradle:"_gradle_light",groovy:"_grails_light",haml:"_haml_light",handlebars:"_mustache_light",haskell:"_haskell_light",haxe:"_haxe_light",html:"_html_3_light",ignore:"_git_light",instructions:"_markdown_light",jade:"_pug_light",java:"_java_light",javascript:"_javascript_light",javascriptreact:"_react_light",jinja:"_jinja_light",json:"_json_light",jsonc:"_json_light",jsonl:"_json_light",julia:"_julia_light",kotlin:"_kotlin_light",latex:"_tex_light",less:"_less_light",lua:"_lua_light",makefile:"_makefile_light",markdown:"_markdown_light",mustache:"_mustache_light",nunjucks:"_nunjucks_light","objective-c":"_c_2_light","objective-cpp":"_cpp_2_light",ocaml:"_ocaml_light",perl:"_perl_light",php:"_php_light",postcss:"_css_light",powershell:"_powershell_light",prompt:"_markdown_light",properties:"_config_light",python:"_python_light",r:"_R_light",razor:"_html_light",rescript:"_rescript_light",ruby:"_ruby_light",rust:"_rust_light",sass:"_sass_light",scss:"_sass_light","search-result":"_code-search_light",shellscript:"_shell_light",skill:"_markdown_light",sql:"_db_light",stylus:"_stylus_light",swift:"_swift_light",terraform:"_terraform_light",tex:"_tex_1_light",typescript:"_typescript_light",typescriptreact:"_react_light",vala:"_vala_light",vue:"_vue_light",xml:"_xml_light",yaml:"_yml_light"},aP="_default_light",aR={".bash":"shellscript",".bat":"bat",".c":"c",".cc":"cpp",".cjs":"javascript",".clj":"clojure",".cljc":"clojure",".cljs":"clojure",".cmd":"bat",".coffee":"coffeescript",".cpp":"cpp",".cs":"csharp",".cshtml":"razor",".css":"css",".cu":"cuda-cpp",".cxx":"cpp",".dart":"dart",".dockerfile":"dockerfile",".fs":"fsharp",".fsx":"fsharp",".gitignore":"ignore",".go":"go",".gradle":"groovy",".groovy":"groovy",".h":"c",".handlebars":"handlebars",".hbs":"handlebars",".hpp":"cpp",".htm":"html",".html":"html",".java":"java",".jl":"julia",".js":"javascript",".json":"json",".jsonc":"jsonc",".jsx":"javascriptreact",".kt":"kotlin",".kts":"kotlin",".less":"less",".lua":"lua",".m":"objective-c",".makefile":"makefile",".markdown":"markdown",".md":"markdown",".mjs":"javascript",".mk":"makefile",".mm":"objective-cpp",".npmignore":"ignore",".php":"php",".pl":"perl",".pm":"perl",".properties":"properties",".ps1":"powershell",".psm1":"powershell",".py":"python",".r":"r",".rb":"ruby",".rs":"rust",".sass":"scss",".scss":"scss",".sh":"shellscript",".sql":"sql",".swift":"swift",".tex":"latex",".ts":"typescript",".tsx":"typescriptreact",".xml":"xml",".xsd":"xml",".xsl":"xml",".yaml":"yaml",".yml":"yaml",".zsh":"shellscript"};function az(e){let t=a$[e];if(null!=t)return{character:t[0],color:t[1]}}var aj=Object.defineProperty,aD=Object.getOwnPropertyDescriptor,aB=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?aD(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aj(t,i,s),s};let aI=class extends lit_element_i{render(){if(null==this.filename)return ey;let e=document.body.classList.contains("vscode-light")||document.body.classList.contains("vscode-high-contrast-light"),t=function(e,t=!1){let i=e.toLowerCase(),r=(t?aA:aC)[i];if(null!=r)return az(r);let o=t?aT:aE,s=i.indexOf(".");for(;-1!==s&&s<i.length-1;){if(null!=(r=o[i.substring(s+1)]))return az(r);s=i.indexOf(".",s+1)}let a=i.lastIndexOf(".");if(-1!==a){let e=aR[i.substring(a)];if(null!=e&&null!=(r=(t?aM:aS)[e]))return az(r)}return az(t&&aP?aP:"_default")}(this.filename,e);return null==t?ey:ef`<span class="font-icon" style=${rm({color:t.color||"inherit"})}
			>${function(e){if(1===e.length)return e;let t=/^\\+(?:u)?([0-9a-fA-F]{4,6})$/.exec(e);return null!=t?String.fromCodePoint(parseInt(t[1],16)):e}(t.character)}</span
		>`}};aI.styles=A`
		:host {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: var(--gl-file-icon-size, 16px);
			height: var(--gl-file-icon-size, 16px);
			vertical-align: text-bottom;
		}

		.font-icon {
			display: inline-block;
			font-family: 'seti';
			font-size: var(--gl-file-icon-size, 16px);
			line-height: 1;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	`,aB([eP()],aI.prototype,"filename",2),aI=aB([eT("gl-file-icon")],aI);var aO=Object.defineProperty,aL=Object.getOwnPropertyDescriptor;let aN=class extends lit_element_i{render(){return ef`<slot></slot>`}};aN.styles=[rS,A`
			:host {
				display: block;
				text-transform: uppercase;
				font-size: 0.84em;
				line-height: 2.2rem;
				padding-left: 0.6rem;
				padding-right: 0.6rem;
				margin: 0px;
				color: var(--vscode-menu-foreground);
				opacity: 0.6;
				user-select: none;
				-webkit-font-smoothing: auto;
			}
		`],aN=((e,t,i,r)=>{for(var o,s=r>1?void 0:r?aL(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aO(t,i,s),s})([eT("menu-label")],aN);var aF=Object.defineProperty,aW=Object.getOwnPropertyDescriptor,aH=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?aW(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aF(t,i,s),s};let aV=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.role="option",this.onKeydown=e=>{this.disabled||e.target!==this||("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.click())}}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this.onKeydown),super.disconnectedCallback?.()}render(){return this.href?ef`<a href=${this.href}><slot></slot></a>`:ef`<slot></slot>`}};aV.styles=[rS,A`
			:host {
				display: block;
				font-family: inherit;
				border: none;
				padding: 0 0.6rem;
				cursor: pointer;
				color: var(--vscode-menu-foreground);
				background-color: var(--vscode-menu-background);
				text-align: left;
				height: auto;
				line-height: 2.2rem;
				-webkit-font-smoothing: auto;
				border-radius: var(--menu-item-radius, 0.3rem);
			}

			:host([role='option']:hover:not([aria-selected='true'])),
			:host([role='option']:focus-visible:not([aria-selected='true'])) {
				color: var(--vscode-menu-selectionForeground);
				background-color: color-mix(
					in oklch,
					var(--vscode-menu-selectionBackground) 50%,
					var(--vscode-menu-background)
				);
				outline: none;
			}

			:host([disabled]) {
				pointer-events: none;
				cursor: default;
				opacity: 0.5;
			}

			:host([aria-selected='true']) {
				opacity: 1;
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-selectionBackground);
			}

			:host([href]) {
				padding-inline: 0;
			}

			a {
				display: block;
				color: inherit;
				text-decoration: none;
				padding: 0 0.6rem;
			}
		`],aH([eP({type:Boolean,reflect:!0})],aV.prototype,"disabled",2),aH([eP({reflect:!0})],aV.prototype,"href",2),aH([eP({reflect:!0})],aV.prototype,"role",2),aV=aH([eT("menu-item")],aV);var aq=Object.defineProperty,aU=Object.getOwnPropertyDescriptor;let aK=class extends lit_element_i{firstUpdated(e){this.role="listbox"}render(){return ef`<slot></slot>`}};aK.styles=[rS,A`
			:host {
				width: max-content;
				background-color: var(--vscode-menu-background);
				border: 1px solid var(--vscode-menu-border);
				padding-bottom: 0.6rem;
			}
		`],aK=((e,t,i,r)=>{for(var o,s=r>1?void 0:r?aU(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aq(t,i,s),s})([eT("menu-list")],aK);var aY=Object.defineProperty,aG=Object.getOwnPropertyDescriptor,aX=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?aG(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aY(t,i,s),s};let aZ=class extends GlElement{constructor(){super(...arguments),this.items=[],this.placement="bottom-end",this.disabled=!1,this.keepOpenOnSelect=!1,this.handleAfterShow=()=>{requestAnimationFrame(()=>{if(this._popover?.open!==!0)return;let e=this._menuItems.filter(e=>!e.disabled),t=e.find(e=>"true"===e.getAttribute("aria-selected"));(t??e[0])?.focus()})},this.handleAfterHide=()=>{this._menuItems.some(e=>e.matches(":focus"))&&this.querySelector('[slot="anchor"]')?.focus()},this.handleKeydown=e=>{let t;if(this._popover?.open!==!0)return;let{key:i}=e;if("ArrowDown"!==i&&"ArrowUp"!==i&&"Home"!==i&&"End"!==i)return;let r=this._menuItems.filter(e=>!e.disabled);if(0===r.length)return;e.preventDefault();let o=r.findIndex(e=>e.matches(":focus"));t="Home"===i?0:"End"===i?r.length-1:"ArrowDown"===i?o<0?0:(o+1)%r.length:o<0?r.length-1:(o-1+r.length)%r.length,r[t]?.focus()}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("gl-popover-after-show",this.handleAfterShow),this.addEventListener("gl-popover-after-hide",this.handleAfterHide)}disconnectedCallback(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("gl-popover-after-show",this.handleAfterShow),this.removeEventListener("gl-popover-after-hide",this.handleAfterHide),super.disconnectedCallback?.()}get _menuItems(){return[...this.shadowRoot?.querySelectorAll("menu-item")??[]]}onItemClick(e,t){!e.disabled&&(t.stopPropagation(),this.emit("gl-menu-select",{value:e.value}),this.keepOpenOnSelect||this._popover?.hide())}render(){return ef`<gl-popover
			appearance="menu"
			placement=${this.placement}
			trigger="click"
			?disabled=${this.disabled}
			.arrow=${!1}
			.distance=${2}
		>
			<slot name="anchor" slot="anchor"></slot>
			<menu-list slot="content">
				${this.items.map(e=>ef`<menu-item
							aria-selected=${e.selected?"true":"false"}
							?disabled=${e.disabled}
							@click=${t=>this.onItemClick(e,t)}
						>
							<code-icon icon=${e.selected?"check":"blank"}></code-icon>
							<span>${e.label}</span>
						</menu-item>`)}
			</menu-list>
		</gl-popover>`}};aZ.styles=A`
		:host {
			display: contents;
		}

		/* Strip menu-list's standalone chrome (its own border + asymmetric bottom padding) — inside
		   the popover's menu-mode body it just needs a small symmetric vertical pad so the first/
		   last item clear the body padding. */
		menu-list {
			padding: 0.2rem 0;
			border: 0;
			background: transparent;
		}

		menu-item {
			display: flex;
			align-items: center;
			gap: 0.4rem;
		}

		/* Fixed-width check column so labels align whether or not an item is selected — the
		   unselected items render a blank icon that occupies the column invisibly. */
		menu-item code-icon {
			flex: 0 0 1.4rem;
		}
	`,aX([ej("gl-popover")],aZ.prototype,"_popover",2),aX([eP({type:Array})],aZ.prototype,"items",2),aX([eP()],aZ.prototype,"placement",2),aX([eP({type:Boolean})],aZ.prototype,"disabled",2),aX([eP({type:Boolean,attribute:"keep-open-on-select"})],aZ.prototype,"keepOpenOnSelect",2),aZ=aX([eT("gl-menu-popover")],aZ);let aJ=A`
	:host {
		box-sizing: border-box;
		display: flex;
		align-items: center;

		max-width: 100%;
	}

	* {
		box-sizing: border-box;
	}
`,aQ=A`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,a0=A`
	.truncated-button {
		max-width: 100%;
		min-width: 0;
	}
	gl-button[disabled] {
		opacity: 1;
		cursor: default;
	}
	.truncated-button__label {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;var a1=Object.defineProperty,a2=Object.getOwnPropertyDescriptor,a4=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?a2(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&a1(t,i,s),s};let a5=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return ey;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktree":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return ef`${this.icon?ef`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:ey}<span class="label">${this.ref.name}</span>`}};a5.styles=A`
		:host {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: minmax(0, 1fr);
			align-items: center;

			max-width: 100%;
			min-width: 1.4rem;
		}

		:host([icon]) {
			grid-template-columns: auto minmax(0, 1fr);
			min-width: 1.6rem;
		}

		* {
			box-sizing: border-box;
		}

		.icon {
			flex-shrink: 0;
		}

		.icon.tag,
		.icon.worktree {
			margin-right: 0.1rem;
		}

		.label {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: var(--font-weight, bold);
		}

		/* Spacing between icon and label as a margin (not a grid gap) so that
		   when the label is hidden via display:none — e.g. the icon-only
		   collapse step in the graph header — the gap collapses with it. */
		:host([icon]) .label {
			margin-left: 0.4rem;
		}
	`,a4([eP({type:Boolean,reflect:!0})],a5.prototype,"icon",2),a4([eP({type:Object})],a5.prototype,"ref",2),a4([eP({type:Number})],a5.prototype,"size",2),a4([eP({type:Boolean})],a5.prototype,"worktree",2),a5=a4([eT("gl-ref-name")],a5);var a3=Object.defineProperty,a8=Object.getOwnPropertyDescriptor,a6=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?a8(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&a3(t,i,s),s};let a7=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return ef`<gl-button
			part="button"
			appearance="toolbar"
			href=${this.href??ey}
			?disabled=${this.disabled}
			truncate
			>${null==this.ref?ef`<slot name="empty">&lt;missing&gt;</slot>`:ef`<gl-ref-name
						part="label"
						?icon=${this.icon}
						.ref=${this.ref}
						.size=${this.size}
						?worktree=${this.worktree}
					></gl-ref-name>`}<code-icon
				slot="suffix"
				class="picker-icon"
				icon="chevron-down"
				size="10"
			></code-icon
			><slot name="tooltip" slot="tooltip"></slot
		></gl-button>`}};function a9(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}a7.styles=[aJ,A`
			:host {
				--font-weight: normal;
				/* Use grid to force the min-content contribution of this host to 0,
					   then apply a configurable floor at icon + chevron + padding.
				   Without grid minmax(0, 1fr), the host's min-content resolves to
				   the full label width due to white-space: nowrap inside. */
				display: grid;
				grid-template-columns: minmax(0, 1fr);
				min-width: var(--gl-ref-button-min-width, 3.6rem);
			}

			gl-button {
				max-width: 100%;
				min-width: 0;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,aQ],a6([eP({type:Boolean,reflect:!0})],a7.prototype,"disabled",2),a6([eP({type:String,reflect:!0})],a7.prototype,"href",2),a6([eP({type:Boolean,reflect:!0})],a7.prototype,"icon",2),a6([eP({type:Object})],a7.prototype,"ref",2),a6([eP({type:Number})],a7.prototype,"size",2),a6([eP({type:Boolean})],a7.prototype,"worktree",2),a7=a6([eT("gl-ref-button")],a7);let le=A`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		box-sizing: border-box;
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,lt=A`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var li=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,lo=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lr(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&li(t,i,s),s};let ls=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ef`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};ls.styles=[le,lt],lo([eP({type:Boolean})],ls.prototype,"pulse",2),ls=lo([eT("gl-indicator")],ls);var ln=Object.defineProperty,la=Object.getOwnPropertyDescriptor,ll=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?la(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&ln(t,i,s),s};let lh=class extends GlElement{constructor(){super(),this._truncated=!1,this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1,this.resizeObserver=new ResizeObserver(()=>this.updateTruncated())}disconnectedCallback(){super.disconnectedCallback?.(),this.resizeObserver.disconnect(),this.observedLabelButtonEl=void 0}firstUpdated(){this.observeLabelButton(),this.updateTruncated()}updated(e){super.updated(e),(e.has("repository")||e.has("hasMultipleRepositories")||e.has("icon"))&&(this.observeLabelButton(),this.updateTruncated())}observeLabelButton(){let e=this.labelButtonEl;this.observedLabelButtonEl!==e&&(this.resizeObserver.disconnect(),this.observedLabelButtonEl=e,null!=e&&this.resizeObserver.observe(e))}updateTruncated(){let e;if(!this.hasMultipleRepositories){this.style.removeProperty("--compact-width"),this._truncated&&(this._truncated=!1);return}let t=this.labelButtonEl;if(null==t)return;let i=this.compactSizerEl?.getBoundingClientRect().width??0;if(0===i)return;let r=this.fallbackIconSizerEl?.getBoundingClientRect().width??i,o=`${i}px`;if(this.style.getPropertyValue("--compact-width")!==o&&this.style.setProperty("--compact-width",o),this._truncated)e=t.getBoundingClientRect().width<=i+r;else{let o=t.shadowRoot?.querySelector("slot.label"),s=this.icon?r:i;e=(o?.getBoundingClientRect().width??t.getBoundingClientRect().width)<=s}e!==this._truncated&&(this._truncated=e)}get displayName(){return this.repository?.name??"none selected"}render(){let e=this.icon&&!this.hasMultipleRepositories,t=this.icon&&this._truncated&&this.hasMultipleRepositories;return ef`
			${this.renderProviderIcon()}
			${this.hasMultipleRepositories?ef`<span class="truncated-button__sizer" aria-hidden="true">${this.displayName}</span>
						<gl-button
							class="truncated-button__compact-sizer"
							appearance="toolbar"
							aria-hidden="true"
							?disabled=${!0}
						>
							${this.icon?ef`<code-icon
										slot="prefix"
										class="repo-icon-fallback"
										icon="gl-repository"
										aria-hidden="true"
									></code-icon>`:ey}
							<code-icon
								slot="suffix"
								class="picker-icon"
								icon="chevron-down"
								aria-hidden="true"
							></code-icon>
						</gl-button>`:ey}
			${e?ey:ef`<gl-button
						class=${t?"truncated-button truncated-button--icon-fallback":"truncated-button"}
						part="label"
						appearance="toolbar"
						?disabled=${this.disabled}
						truncate
						@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
					>
						${t?ef`<code-icon
									slot="prefix"
									class="repo-icon-fallback"
									icon="gl-repository"
									aria-hidden="true"
								></code-icon>`:ey}
						<span class="truncated-button__label">${this.displayName}</span>
						${this.hasMultipleRepositories?ef`<code-icon
									slot="suffix"
									class="picker-icon"
									icon="chevron-down"
									aria-hidden="true"
								></code-icon>`:ey}
						<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
					</gl-button>`}
		`}renderProviderIcon(){var e,t,i;if(!this.icon)return ey;let{repository:r}=this;if(!r?.provider)return ef`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="gl-repository" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:o}=r,s=o.integration?.connected;return ef`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${o.url??ey}
					aria-label=${`Open Repository on ${o.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===o.icon?"cloud":`gl-provider-${o.icon}`}
						aria-hidden="true"
					></code-icon>
					${e=()=>ef`<gl-indicator class="indicator-dot"></gl-indicator>`,s?e():void 0}
				</gl-button>
				<div slot="content" class="provider-popover">
					<div class="provider-popover__title">Open Repository on ${o.name}</div>
					<hr />
					<div class="provider-popover__line">
						<code-icon class="popover-status-icon" icon="gl-repository" aria-hidden="true"></code-icon>
						${this.displayName}
					</div>
					${t=()=>ef`
							<div class="provider-popover__line">
								<code-icon class="popover-status-icon" icon="check" aria-hidden="true"></code-icon>
								Connected to ${o.name}
							</div>
						`,i=()=>!1!==s?ey:ef`
								<div class="provider-popover__line">
									<code-icon class="popover-status-icon" icon="plug" aria-hidden="true"></code-icon>
									<a
										href=${a9("gitlens.connectRemoteProvider",{repoPath:r.path,remote:o.bestRemoteName})}
									>
										Connect to ${r.provider.name}
									</a>
									<span>&mdash; not connected</span>
								</div>
							`,s?t():i?.(s)}
				</div>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return ey;let{repository:e}=this;if(!e?.provider)return ey;let{provider:t}=e;return t.integration?.connected!==!1?ey:ef`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${a9("gitlens.connectRemoteProvider",{repoPath:e.path,remote:t.bestRemoteName})}
			>
				<code-icon class="connect-icon" icon="plug"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};lh.styles=[sj,sD,aJ,a0,A`
			:host {
				display: grid;
				align-items: center;
			}

			/* Single-repo (no label rendered): grid sizes exactly to the icons.
			   max-content cols keep each icon column at full content width —
			   auto cols can collapse under flex shrink pressure, hiding icons
			   behind one another. Explicit min-width: max-content prevents the
			   host itself from shrinking past the icons under flex pressure
			   (which otherwise lets the trailing chevron separator overlap). */
			:host(:not([multi-repo])) {
				grid-template-columns: max-content max-content;
				min-width: max-content;
			}
			:host(:not([multi-repo]):not([icon])) {
				grid-template-columns: minmax(0, 1fr);
				min-width: 0;
			}

			/* Multi-repo: include a flexible label column that can shrink
				   so the label ellipses naturally while preserving enough room for
				   the fallback repo icon + chevron compact state. */
			:host([multi-repo]) {
				--compact-width: 0px;

				position: relative;
				grid-template-columns: max-content max-content minmax(var(--compact-width), 1fr);
				min-width: min-content;
			}
			:host([multi-repo]:not([icon])) {
				grid-template-columns: minmax(var(--compact-width), 1fr);
			}

			[part='label'] {
				grid-column: 3;
				grid-row: 1;
				min-width: 0;
			}
			:host(:not([icon])) [part='label'] {
				grid-column: 1;
			}
			.truncated-button__sizer {
				grid-column: 3;
				grid-row: 1;
				min-width: 0;
				overflow-wrap: anywhere;
				padding-inline: 0.4rem;
				pointer-events: none;
				visibility: hidden;
			}
			:host(:not([icon])) .truncated-button__sizer {
				grid-column: 1;
			}
			.truncated-button__compact-sizer {
				--button-gap: 0.2rem;

				position: absolute;
				inset-inline-start: 0;
				top: 0;
				min-width: max-content;
				width: max-content;
				pointer-events: none;
				visibility: hidden;
			}

			.truncated-button__label {
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.truncated-button--icon-fallback .truncated-button__label {
				display: none;
			}
			.truncated-button--icon-fallback {
				--button-gap: 0.2rem;
				min-width: max-content;
			}

			:host([multi-repo]) .truncated-button {
				min-width: 0;
				width: 100%;
			}
			:host(:not([icon])) .truncated-button {
				width: 100%;
			}

			.truncated-button .picker-icon,
			.truncated-button__compact-sizer .picker-icon {
				margin-right: 0;
			}
			.truncated-button .picker-icon::before,
			.truncated-button__compact-sizer .picker-icon::before {
				margin-left: 0;
			}

			.indicator-dot {
				--gl-indicator-color: green;
				--gl-indicator-size: 0.4rem;
				margin-left: -0.2rem;
			}

			gl-popover,
			[part='provider-icon'] {
				flex-shrink: 0;
			}

			/* Tighten the icon buttons themselves — they sit adjacent in the grid
			   and we don't want extra horizontal padding bloating the group's
			   trailing edge near the chevron separator. */
			[part='provider-icon'],
			[part='connect-icon'] {
				--button-padding: 0.2rem;
			}

			.popover-status-icon {
				margin-top: -3px;
			}

			/* Stack the provider popover's lines as a column with breathing room
			   between them (instead of relying on <br> / inline-flow which gives
			   too-tight visual spacing). */
			.provider-popover {
				display: flex;
				flex-direction: column;
				gap: 0.6rem;
			}
			.provider-popover hr {
				margin: 0;
			}
			.provider-popover__line {
				display: flex;
				align-items: center;
				gap: 0.4rem;
			}

			.connect-icon {
				color: var(--titlebar-fg);
			}

			/* :host([expandable]) .truncated-button {
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			} */

			:host([expandable]:not(:hover, :focus-within)) .truncated-button .picker-icon::before {
				visibility: hidden;
			}
			:host([expandable]:not(:hover, :focus-within)) .truncated-button .repo-icon-fallback {
				visibility: hidden;
			}
			:host([expandable]:not(:hover, :focus-within)) .truncated-button {
				min-width: 0 !important;
				max-width: 0;
			}
			:host([multi-repo][expandable]:not(:hover, :focus-within)) {
				grid-template-columns: max-content max-content minmax(0, 0fr);
			}
			:host([multi-repo][expandable]:not([icon]):not(:hover, :focus-within)) {
				grid-template-columns: minmax(0, 0fr);
			}

			/* When the surrounding gl-breadcrumb-item is hovered or focused, expand the
			   truncated-button as if the gl-repo-button-group itself were hovered. This
			   lets users hover anywhere in the breadcrumb-item (e.g., the chevron
			   separator) to reveal the repo name. !important is required because the
			   collapse rule above (with :host attribute + :not) has higher specificity
			   than :host-context. */
			:host-context(gl-breadcrumb-item:hover) .truncated-button .picker-icon::before,
			:host-context(gl-breadcrumb-item:focus-within) .truncated-button .picker-icon::before {
				visibility: visible !important;
			}
			:host-context(gl-breadcrumb-item:hover) .truncated-button,
			:host-context(gl-breadcrumb-item:focus-within) .truncated-button {
				min-width: 0 !important;
				max-width: none !important;
			}
			:host-context(gl-breadcrumb-item:hover),
			:host-context(gl-breadcrumb-item:focus-within) {
				grid-template-columns: max-content max-content minmax(var(--compact-width), 1fr);
			}
		`,aQ],ll([eR()],lh.prototype,"_truncated",2),ll([ej(".truncated-button")],lh.prototype,"labelButtonEl",2),ll([ej(".truncated-button__compact-sizer")],lh.prototype,"compactSizerEl",2),ll([ej(".truncated-button__compact-sizer .repo-icon-fallback")],lh.prototype,"fallbackIconSizerEl",2),ll([eP({type:Boolean})],lh.prototype,"connectIcon",2),ll([eP({type:Boolean})],lh.prototype,"disabled",2),ll([eP({type:Boolean,reflect:!0})],lh.prototype,"icon",2),ll([eP({type:Object})],lh.prototype,"repository",2),ll([eP({type:Boolean,reflect:!0,attribute:"multi-repo"})],lh.prototype,"hasMultipleRepositories",2),ll([eP({type:Object})],lh.prototype,"source",2),ll([eP({type:Boolean,reflect:!0})],lh.prototype,"expandable",2),lh=ll([eT("gl-repo-button-group")],lh);var lc=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,lp=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?ld(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lc(t,i,s),s};let lu={"7|D":"1 week","1|M":"1 month","3|M":"3 months","6|M":"6 months","9|M":"9 months","1|Y":"1 year","2|Y":"2 years","4|Y":"4 years",all:"All time"},lg=class extends lit_element_i{constructor(){super(...arguments),this.placement="editor",this.host="timeline",this.repositoryCount=0,this.scopeType="repo",this.period="1|M",this.sliceBy="author",this.showAllBranches=!1,this.showAllBranchesSupported=!0,this.sliceBySupported=!1,this.onPeriodMenuSelect=e=>{let t=e.detail.value;this.period!==t&&this.emit("gl-timeline-header-period-change",{period:t})},this.onPeriodChanged=e=>{let t=e.target.value;this.emit("gl-timeline-header-period-change",{period:t})},this.onSliceByAuthor=()=>{"author"!==this.sliceBy&&this.emit("gl-timeline-header-slice-by-change",{sliceBy:"author"})},this.onSliceByBranch=()=>{"branch"!==this.sliceBy&&this.emit("gl-timeline-header-slice-by-change",{sliceBy:"branch"})},this.onShowAllBranchesChanged=e=>{let t=e.target.checked;this.emit("gl-timeline-header-show-all-branches-change",{showAllBranches:t})},this.onChooseHeadRef=e=>{let t=e.currentTarget;if(t?.disabled)return;let i=t?.getAttribute("location")??void 0;this.emit("gl-timeline-header-choose-head-ref",{location:i})},this.onChoosePath=e=>{e.stopImmediatePropagation();let t="view"===this.placement||e.altKey||e.shiftKey;this.emit("gl-timeline-header-choose-path",{detached:t})},this.onClearScope=e=>{e.stopImmediatePropagation(),this.emit("gl-timeline-header-clear-scope",void 0)},this.onChangeScope=e=>{let t=e.target?.closest("gl-breadcrumb-item"),i=t?.getAttribute("type");if(null==i)return;let r=t?.getAttribute("value")??void 0,o="view"===this.placement||e.altKey||e.shiftKey;this.emit("gl-timeline-header-change-scope",{type:i,value:r,detached:o})}}get showRepository(){return"timeline"===this.host}get showBranch(){return"timeline"===this.host}get showFolderPicker(){return"graph"===this.host||"editor"===this.placement}render(){return ef`<header class="header">
			<span class="details">${this.renderBreadcrumbs()}</span>
			<span class="toolbox"
				>${this.renderTimeframe()}${this.renderSliceByToggle()}${this.renderConfigPopover()}<slot
					name="toolbox"
				></slot
			></span>
		</header>`}renderBreadcrumbs(){return ef`<gl-breadcrumbs density="compact" label="Visual History scope">
			${this.renderRepositoryBreadcrumbItem()}${this.renderBranchBreadcrumbItem()}${this.renderPathItems()}
			${this.showFolderPicker?this.renderPathActions():ey}
		</gl-breadcrumbs>`}renderRepositoryBreadcrumbItem(){let e=this.repository;if(null==e||!this.showRepository)return ey;let t={source:this.host};return ef`<gl-breadcrumb-item
			icon="gl-repository"
			label="${e.name}"
			priority="1"
			shrink="10000000"
			type="repo"
		>
			<gl-repo-button-group
				aria-label="Visualize Repository History"
				.connectIcon=${!1}
				.hasMultipleRepositories=${this.repositoryCount>1}
				.icon=${!1}
				.repository=${e}
				.source=${t}
				@gl-click=${this.onChangeScope}
			>
				<span slot="tooltip">
					Visualize Repository History
					<hr />
					${e.name}
				</span>
			</gl-repo-button-group>
		</gl-breadcrumb-item>`}renderBranchBreadcrumbItem(){if(!this.showBranch)return ey;let e=this.headRef,t=this.showAllBranches;return ef`<gl-breadcrumb-item
			icon="${t?"git-branch":function(e){switch(e?.refType){case"branch":return"git-branch";case"tag":return"tag";default:return"git-commit"}}(e)}"
			label="${t?"All Branches":e?.name??"Branch"}"
			priority="4"
			shrink="100000"
			type="ref"
		>
			<gl-ref-button .ref=${t?void 0:e} @click=${this.onChooseHeadRef}>
				<span slot="empty">All Branches</span>
				<span slot="tooltip">
					Change Reference...
					<hr />
					${t?"Showing All Branches":ef`<gl-ref-name icon .ref=${e}></gl-ref-name>`}
				</span>
			</gl-ref-button>
		</gl-breadcrumb-item>`}renderPathItems(){let e=this.relativePath;if(!e)return ey;let t=[],i=e.split("/"),r=i.pop()||"",o=i.length;if(o){let e=i.shift(),r=e;t.push(ef`
				<gl-breadcrumb-item
					foldable
					icon="folder"
					interactive
					label="${e}"
					priority="3"
					type="${"folder"}"
					value="${e}"
					aria-label="Visualize folder history of ${e}"
					@click=${this.onChangeScope}
				>
					${e}
					<span slot="tooltip">${e}</span>
				</gl-breadcrumb-item>
			`),i.forEach((e,o)=>{let s=r=`${r}/${e}`,a=2+(i.length-1-o)*.01;t.push(ef`
					<gl-breadcrumb-item
						appearance="segment"
						interactive
						label="${e}"
						priority="${a}"
						type="${"folder"}"
						value="${s}"
						aria-label="Visualize folder history of ${s}"
						@click=${this.onChangeScope}
					>
						${e}
						<span slot="tooltip">${s}</span>
					</gl-breadcrumb-item>
				`)})}let s="folder"!==this.scopeType,a="folder"!==this.scopeType||o?void 0:"folder";return t.push(ef`
			<gl-breadcrumb-item
				icon="${a??ey}"
				label="${r}"
				priority="5"
				shrink="0"
				type="${"folder"===this.scopeType?"folder":"file"}"
				value="${e}"
			>
				${s?ef`<gl-file-icon slot="start" filename="${r}"></gl-file-icon>`:ey}
				<gl-copy-container
					tabindex="0"
					copyLabel="Copy Path&#10;&#10;${e}"
					.content=${e}
					placement="bottom"
				>
					<span>${r}</span>
				</gl-copy-container>
			</gl-breadcrumb-item>
		`),t}renderPathActions(){let e="repo"!==this.scopeType;return ef`<span class="breadcrumb-actions">
			${e?ef`<gl-button
						appearance="toolbar"
						density="compact"
						@click=${this.onClearScope}
						tooltip="Clear File / Folder Filter"
						aria-label="Clear File / Folder Filter"
						><code-icon icon="close"></code-icon
					></gl-button>`:ey}
			<gl-button
				appearance="toolbar"
				density="compact"
				@click=${this.onChoosePath}
				tooltip="Choose File or Folder to Visualize..."
				aria-label="Choose File or Folder to Visualize..."
				><code-icon slot="prefix" icon="folder-opened"></code-icon>Choose File / Folder...</gl-button
			>
		</span>`}renderTimeframe(){let e=null!=this.visibleSpanMs&&this.visibleSpanMs>0?function(e){let t=e/864e5;if(t<1){let t=Math.max(1,Math.round(e/36e5));return 1===t?"1 hour":`${t} hours`}if(t<14){let e=Math.max(1,Math.round(t));return 1===e?"1 day":`${e} days`}if(t<60.875){let e=Math.round(t/7);return 1===e?"1 week":`${e} weeks`}let i=t/30.4375;if(i<24){let e=Math.max(1,Math.round(i));return 1===e?"1 month":`${e} months`}let r=i/12,o=r>=10?Math.round(r):Number(r.toFixed(1));return 1===o?"1 year":`${o} years`}(this.visibleSpanMs):lu[this.period];if(null==e)return ey;let t=Object.entries(lu).map(([e,t])=>({value:e,label:t,selected:this.period===e}));return ef`<gl-menu-popover
			class="details__timeframe-popover"
			placement="bottom-end"
			keep-open-on-select
			.items=${t}
			@gl-menu-select=${this.onPeriodMenuSelect}
		>
			<button
				slot="anchor"
				class="details__timeframe details__timeframe--button"
				type="button"
				aria-label="Change default time range"
			>
				${e}<code-icon icon="chevron-down"></code-icon>
			</button>
		</gl-menu-popover>`}renderConfigPopover(){return ef`<gl-popover placement="bottom" trigger="hover focus click" hoist>
			<gl-button slot="anchor" appearance="toolbar" aria-label="Timeline Options">
				<code-icon icon="settings"></code-icon>
			</gl-button>
			<div slot="content" class="config__content">
				<menu-label>View Options</menu-label>
				${this.renderConfigHead()} ${this.renderConfigShowAllBranches()} ${this.renderPeriodSelect()}
			</div>
		</gl-popover>`}renderConfigHead(){if(!this.showBranch)return ey;let e=this.headRef,t=this.showAllBranches,i=t&&"branch"!==this.sliceBy;return ef`<section>
			<label for="head" ?disabled=${i}>Branch</label>
			<gl-ref-button
				name="head"
				?disabled=${i}
				icon
				.ref=${e}
				location="config"
				@click=${this.onChooseHeadRef}
			>
				<span slot="tooltip">
					Change Reference...
					<hr />
					${t?"Showing All Branches":ef`<gl-ref-name icon .ref=${e}></gl-ref-name>`}
				</span>
			</gl-ref-button>
		</section>`}renderConfigShowAllBranches(){return this.showAllBranchesSupported?ef`<section>
			<gl-checkbox value="all" .checked=${this.showAllBranches} @gl-change-value=${this.onShowAllBranchesChanged}
				>View All Branches</gl-checkbox
			>
		</section>`:ey}renderPeriodSelect(){let e=this.period;return ef`<section>
			<span class="select-container">
				<label for="periods">Default time range</label>
				<select class="select" name="periods" .value=${e} @change=${this.onPeriodChanged}>
					<option value="7|D" ?selected=${"7|D"===e}>1 week</option>
					<option value="1|M" ?selected=${"1|M"===e}>1 month</option>
					<option value="3|M" ?selected=${"3|M"===e}>3 months</option>
					<option value="6|M" ?selected=${"6|M"===e}>6 months</option>
					<option value="9|M" ?selected=${"9|M"===e}>9 months</option>
					<option value="1|Y" ?selected=${"1|Y"===e}>1 year</option>
					<option value="2|Y" ?selected=${"2|Y"===e}>2 years</option>
					<option value="4|Y" ?selected=${"4|Y"===e}>4 years</option>
					<option value="all" ?selected=${"all"===e}>Full history</option>
				</select>
			</span>
			<small class="config__help">Older history loads dynamically as you scroll</small>
		</section>`}renderSliceByToggle(){let e=!this.sliceBySupported,t="author"===this.sliceBy;return ef`<gl-tooltip ?disabled=${!e} placement="bottom" distance="6">
			<span class="slice-toggle">
				<gl-button
					appearance="toolbar"
					role="switch"
					aria-checked=${t?"true":"false"}
					aria-label="Slice by Author"
					tooltip=${e?"":"Slice by Author"}
					?disabled=${e}
					@click=${this.onSliceByAuthor}
				>
					<code-icon icon="account"></code-icon>
				</gl-button>
				<gl-button
					appearance="toolbar"
					role="switch"
					aria-checked=${!t?"true":"false"}
					aria-label="Slice by Branch"
					tooltip=${e?"":"Slice by Branch"}
					?disabled=${e}
					@click=${this.onSliceByBranch}
				>
					<code-icon icon="git-branch"></code-icon>
				</gl-button>
			</span>
			<span slot="content">Choose a file or folder to slice by branches</span>
		</gl-tooltip>`}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}};lg.styles=[ss,A`
			:host {
				display: block;
				min-width: 0;
			}

			.header {
				flex: none;
				display: grid;
				grid-template-columns: 1fr min-content;
				align-items: center;
				grid-template-areas: 'details toolbox';
				margin: 0.5rem 1rem;
				gap: 1rem;
				min-width: 0;
				color: var(--vscode-sideBar-foreground, var(--vscode-foreground));
			}

			:host([placement='editor']) .header {
				margin-top: 1rem;
				margin-right: 1.5rem;
			}

			/* When embedded inside the Graph webview's Visual History, the surrounding header
			 * row already supplies horizontal/vertical padding and the visualization-switcher
			 * sits to our left. Dropping our own margin keeps the two-visualization header
			 * heights aligned so toggling between Timeline and Treemap doesn't jump the chart. */
			:host([host='graph']) .header {
				margin: 0;
			}

			.details {
				grid-area: details;
				display: flex;
				gap: 1rem;
				align-items: center;
				font-size: var(--font-size);
				min-width: 0;
				margin-right: 1rem;
			}

			.details gl-breadcrumbs {
				flex: 1;
				min-width: 0;
				padding: 0.1rem 0;
				overflow: hidden;
			}

			.breadcrumb-actions {
				display: inline-flex;
				align-items: center;
				/* Slotted into <gl-breadcrumbs>; the host is display: flex with item orders
				   at idx * 2. Push to the end of the chain via flex order. */
				order: 9999;
				margin-left: 0.4rem;
				/* Match the breadcrumbs' compact density: smaller font, smaller icons, tighter
			   button padding. The buttons sit visually adjacent to the crumb chain so they
			   need to share its size scale or they look like a different control set. */
				font-size: 1.2rem;
				--code-icon-size: 1.3rem;
			}

			.breadcrumb-actions gl-button {
				--button-compact-padding: 0.1rem 0.3rem;
				--button-line-height: 1.2;
				/* Match the breadcrumb-item's fixed min-height so icon-only buttons (the Clear
				   ×) and icon+text buttons (Choose) end up the same height regardless of
				   content. Without this, the icon-only one is ~1.4px shorter. */
				min-height: 1.8rem;
			}

			/* Style hr inside slotted tooltip content (e.g. gl-ref-button's "Change Reference..."
			   tooltip in the View Options popover). Browser default hr is a thick beveled line
			   that looks wrong inside the dark tooltip body. */
			[slot='tooltip'] hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
				margin: 0.4rem 0;
			}

			.details__timeframe {
				flex: 0 0 auto;
				color: var(--color-foreground--75);
				user-select: none;
				white-space: nowrap;
				font-size: 1.2rem;
				margin-right: 0.4rem;
			}

			/* Pill renders as a popover-anchor button — strip default <button> chrome so it reads
			   as the same compact label-with-chevron the static span renders, then add the hover/
			   focus affordance to advertise interactivity. */
			.details__timeframe--button {
				display: inline-flex;
				align-items: center;
				gap: 0.2rem;
				background: transparent;
				border: 1px solid transparent;
				border-radius: 0.3rem;
				padding: 0.1rem 0.4rem;
				color: inherit;
				font: inherit;
				cursor: pointer;
				transition:
					background 120ms ease,
					border-color 120ms ease,
					color 120ms ease;
			}
			.details__timeframe--button:hover,
			.details__timeframe--button:focus-visible {
				background: var(--vscode-toolbar-hoverBackground, var(--vscode-list-hoverBackground));
				color: var(--vscode-foreground);
				outline: none;
			}
			.details__timeframe--button:focus-visible {
				border-color: var(--vscode-focusBorder, transparent);
			}
			.details__timeframe--button code-icon {
				font-size: 1rem;
				opacity: 0.75;
			}

			.config__help {
				color: var(--color-foreground--50);
				font-size: 1.1rem;
				padding: 0 0.4rem;
			}

			.toolbox {
				grid-area: toolbox;
				align-items: center;
				display: flex;
				gap: 0.3rem;
			}

			.slice-toggle {
				display: inline-flex;
				align-items: center;
				gap: 0;
			}

			.config__content {
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
				min-width: 20rem;
				padding: 0.4rem 0.2rem;
			}

			.config__content section {
				display: flex;
				flex-direction: column;
				gap: 0.2rem;
				padding: 0.2rem 0.4rem;
			}

			.select-container {
				display: flex;
				flex-direction: column;
				gap: 0.2rem;
			}

			.select {
				background: var(--vscode-dropdown-background);
				color: var(--vscode-dropdown-foreground);
				border: 1px solid var(--vscode-dropdown-border, transparent);
				padding: 0.2rem 0.4rem;
				font: inherit;
			}
		`],lp([eP({type:String,reflect:!0})],lg.prototype,"placement",2),lp([eP({type:String})],lg.prototype,"host",2),lp([eP({type:Object})],lg.prototype,"repository",2),lp([eP({type:Number})],lg.prototype,"repositoryCount",2),lp([eP({type:Object})],lg.prototype,"headRef",2),lp([eP({type:String})],lg.prototype,"scopeType",2),lp([eP({type:String})],lg.prototype,"relativePath",2),lp([eP({type:String})],lg.prototype,"period",2),lp([eP({type:Number})],lg.prototype,"visibleSpanMs",2),lp([eP({type:String})],lg.prototype,"sliceBy",2),lp([eP({type:Boolean})],lg.prototype,"showAllBranches",2),lp([eP({type:Boolean})],lg.prototype,"showAllBranchesSupported",2),lp([eP({type:Boolean})],lg.prototype,"sliceBySupported",2),lg=lp([eT("gl-timeline-header")],lg);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let lm=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!lm(e))??e_}update(e,t){let i=this._$Cbt,r=i.length;this._$Cbt=t;let o=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!lm(a))return this._$Cwt=e,a;e<r&&a===i[e]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=o.deref();if(void 0!==t){let i=t._$Cbt.indexOf(a);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return e_}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let lb=tv(until_c);var lf=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,l_=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lv(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lf(t,i,s),s};let ly=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ef`${lb(this.promoPromise?.then(e=>this.renderPromo(e)),ey)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ef`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ef`<p class="promo" part="text">${o4(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ef`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??ey}"
						>${o4(t.link.html)}</a
					>`}return this.hasPromo=!1,ey}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),a9(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};ly.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ly.styles=[A`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:focus-visible {
				${rf}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],l_([ej('a,button,[tabindex="0"]')],ly.prototype,"_focusable",2),l_([eP({type:Object})],ly.prototype,"promoPromise",2),l_([eP({type:Object})],ly.prototype,"source",2),l_([eP({reflect:!0,type:String})],ly.prototype,"type",2),l_([eP({type:Boolean,reflect:!0,attribute:"has-promo"})],ly.prototype,"hasPromo",1),ly=l_([eT("gl-promo")],ly);var lw=Object.defineProperty,lx=Object.getOwnPropertyDescriptor,lk=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lx(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lw(t,i,s),s};let l$=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var e,t;return null==this.subscription?0:(e=this.subscription,t=e.plan.effective.expiresOn,(null!=t?function(e,t,i,r){let o=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=r??Math.floor;switch(i){case"days":return s(o/864e5);case"hours":return s(o/36e5);case"minutes":return s(o/6e4);case"seconds":return s(o/1e3);default:return o}}(Date.now(),new Date(t),"days",Math.round):void 0)??0)}get state(){return this.subscription?.state}render(){return ef`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===eV.VerificationRequired)return ef`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var t;if(eU(this.subscription)||this.cloud&&null!=this.subscription.account)return ef`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.subscription).state?t.state===eV.Trial:t.plan.actual.id!==t.plan.effective.id)return ef`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ef`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===eV.Paid?ef`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ef`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Unlock this feature with an account and may require GitLens Pro in the future</span
					>
				</div>`:ef`<div class="popup-header">
				${e}<span class="popup-subtitle"> Unlock this feature with GitLens Pro</span>
			</div>`:this.preview?ef`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ef`<div class="popup-header">
			${e}<span class="popup-subtitle"> Unlock this feature for privately hosted repos with GitLens Pro</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return ey;switch(this.state){case eV.Paid:var t;e=ef`<p>
					Your
					<gl-tooltip content="Show Account view">
						<a href="${a9("gitlens.showAccountView")}"
							>${t=this.subscription?.plan.actual.id??"pro",`GitLens ${function(e){switch(e){case"student":return"Student";case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}(t)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case eV.VerificationRequired:e=ef`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${a9("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${a9("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case eV.Trial:{let t=this.daysRemaining;e=ef`<p>
						You have
						<strong>${t<1?"<1 day":tH("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case eV.TrialExpired:e=ef`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ef`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case eV.TrialReactivationEligible:e=ef`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tH("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${a9("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tH("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=ef`<p>
						You only have access to
						<gl-tooltip content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ef`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ef`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${a9("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${a9("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ef`<div class="actions">
			${e??ey}
			<gl-button
				density="tight"
				href="${a9("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ef`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};l$.styles=[rS,rA,A`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
				display: inline-block;
			}

			.badge:focus-visible {
				${S(rf)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],lk([eP({type:Boolean})],l$.prototype,"cloud",2),lk([eP({reflect:!0})],l$.prototype,"placement",2),lk([eP({type:Boolean})],l$.prototype,"preview",2),lk([eG({context:"promos"})],l$.prototype,"promos",2),lk([eP({type:Object})],l$.prototype,"source",2),lk([eP({attribute:!1})],l$.prototype,"subscription",2),l$=lk([eT("gl-feature-badge")],l$),Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]),Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let lC="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",lE=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${lC}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${lC}`,graph:`https://gitkraken.com/solutions/commit-graph?${lC}`,launchpad:`https://gitkraken.com/solutions/launchpad?${lC}`,platform:`https://gitkraken.com/devex?${lC}`,pricing:`https://gitkraken.com/gitlens/pricing?${lC}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${lC}`,security:`https://help.gitkraken.com/gitlens/security?${lC}`,workspaces:`https://gitkraken.com/solutions/workspaces?${lC}`,cli:`https://gitkraken.com/cli?${lC}`,browserExtension:`https://gitkraken.com/browser-extension?${lC}`,desktop:`https://gitkraken.com/git-client?${lC}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${lC}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${lC}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${lC}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${lC}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${lC}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${lC}`,helpCenterAiHooks:`https://help.gitkraken.com/cli/cli-home/?${lC}#how-to-uninstall-gitkraken-cli-ai-hooks`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${lC}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${lC}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${lC}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${lC}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${lC}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${lC}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${lC}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${lC}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${lC}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${lC}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${lC}`});var lS=Object.defineProperty,lA=Object.getOwnPropertyDescriptor,lT=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lA(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lS(t,i,s),s};let lM=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,!e)switch(this.state){case eV.VerificationRequired:return ef`
					<slot name="feature"></slot>
					<p class="actions-row-center">
						<gl-button
							class="inline"
							href="${a9("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							href="${a9("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<hr />
					<p class="centered">Check your inbox for a verification link, then refresh once you've verified.</p>
				`;case eV.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let i=(new Date(t.at(-1).expiresOn).getTime()-Date.now())/36e5;return t.length<=3&&i>0&&i<24?"active":"expired"}(this.featurePreview))return ef`${this.renderFeaturePreview(this.featurePreview)}`;return ef`<slot name="feature"></slot>
					<p class="centered">
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${lE.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							href="${a9("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${a9("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<hr />
					<p class="centered">
						<a href="${lE.communityVsPro}"
							>Get ${tH("day",14)} of GitLens Pro free</a
						>
						— no credit card required.
					</p>`;case eV.TrialExpired:return ef`<slot name="feature"></slot>
					<p class="centered">
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${lE.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							href="${a9("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<hr />
					<p class="centered">
						Your trial has ended — upgrade to keep ${this.featureWithArticleIfNeeded??"all Pro features"}
						unlocked.
					</p>
					<p class="centered">${this.renderPromo()}</p>`;case eV.TrialReactivationEligible:return ef`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							href="${a9("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<hr />
					<p class="centered">
						Reactivate your Pro trial to experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${tH("day",14)}.
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,i=e.usages.length;return 0===i?ef`<slot name="feature"></slot>
				<p class="actions-row">
					<gl-button href="${this.featurePreviewCommandLink??ey}">Continue</gl-button>
				</p>
				<hr />
				<p class="centered">
					Already have an account?
					<a href="${a9("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					><br />
					${"alert"!==t?ef`<br />`:""}
					<a href="${a9("gitlens.plus.signUp",this.source)}"
						>Want full access to all Pro features? Start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ef`
			${this.renderFeaturePreviewStep(e,i)}
			<p class="actions-row">
				<gl-button class="inline" href="${this.featurePreviewCommandLink??ey}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${a9("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<hr />
			<p class="centered">
				${tH("day",3-i,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on `:""}privately hosted
				repos.<br />
				${"alert"!==t?ef`<br />`:""}
				<a href="${a9("gitlens.plus.signUp",this.source)}"
					>Want full access to all Pro features? Start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ef`<slot name="feature"></slot>`;switch(t){case 1:return ef`<p>Try Commit Search</p>
							<p>
								Search for commits in your repo by author, commit message, SHA, file, change, or type.
								Turn on the commit filter to show only commits that match your query.
							</p>
							<p>
								<img
									class="preview-image"
									src="${this.webroot??""}/media/graph-commit-search.webp"
									alt="Graph Commit Search"
								/>
							</p> `;case 2:return ef`
							<p>Try the Graph Minimap</p>
							<p>
								Visualize the amount of changes to a repository over time, and inspect specific points
								in the history to locate branches, stashes, tags and pull requests.
							</p>
							<p>
								<img
									class="preview-image"
									src="${this.webroot??""}/media/graph-minimap.webp"
									alt="Graph Minimap"
								/>
							</p>
						`;default:return ef`<slot name="feature"></slot>`}}renderPromo(){return ef`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"gate")}
			.source=${this.source}
		></gl-promo>`}};lM.styles=[A`
			:host {
				--gk-action-radius: 0.3rem;

				--link-foreground: var(--vscode-textLink-foreground);
				--link-foreground-active: var(--vscode-textLink-activeForeground);
			}

			:host([appearance='alert']) {
				--link-decoration-default: underline;
				--link-foreground: color-mix(in srgb, var(--section-foreground) 50%, var(--vscode-textLink-foreground));
				--link-foreground-active: color-mix(
					in srgb,
					var(--section-foreground) 50%,
					var(--vscode-textLink-activeForeground)
				);
			}

			:host([appearance='default']) gl-button:only-child {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='default']) gl-button:not(.inline) {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}

			.centered {
				text-align: center;
			}

			.preview-image {
				width: 100%;
			}

			.actions-row {
				display: flex;
				gap: 0.6em;
				align-items: baseline;
				justify-content: center;
				white-space: nowrap;
			}

			/* Like .actions-row but center-aligned, for a row that mixes a text button with an
			   icon-only button: their baselines don't match (a text baseline vs the synthesized
			   bottom edge of the icon button's flex box), so centering the equal-height button
			   boxes is what lines them up. */
			.actions-row-center {
				display: flex;
				gap: 0.6em;
				align-items: center;
				justify-content: center;
				white-space: nowrap;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}

			hr {
				border: none;
				border-top: 1px solid color-mix(in srgb, var(--section-border-color) 20%, transparent);
			}
		`,sj],lT([ej("gl-button")],lM.prototype,"button",2),lT([eP()],lM.prototype,"appearance",2),lT([eP({type:Object})],lM.prototype,"featurePreview",2),lT([eP()],lM.prototype,"featurePreviewCommandLink",2),lT([eP()],lM.prototype,"featureRestriction",2),lT([eP()],lM.prototype,"featureWithArticleIfNeeded",2),lT([eG({context:"promos"})],lM.prototype,"promos",2),lT([eP({type:Object})],lM.prototype,"source",2),lT([eP({attribute:!1,type:Number})],lM.prototype,"state",2),lT([eP()],lM.prototype,"webroot",2),lM=lT([eT("gl-feature-gate-plus-state")],lM);var lP=Object.defineProperty,lR=Object.getOwnPropertyDescriptor,lz=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lR(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lP(t,i,s),s};let lj=class extends lit_element_i{constructor(){super(...arguments),this.allowRepoSwitch=!1}disconnectedCallback(){this.dialogEl?.close(),super.disconnectedCallback?.()}updated(e){let t=this.dialogEl;null==t||t.open||t.showModal()}render(){var e;if(null!=(e=this.state)&&(e===eV.Trial||e===eV.Paid))return;let t=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"default";return ef`
			<dialog part="section" @cancel=${this.onCancel} @keydown=${this.onKeydown}>
				<div class="content scrollable">
					<slot></slot>
					<gl-feature-gate-plus-state
						appearance=${t}
						.featurePreview=${this.featurePreview}
						.featurePreviewCommandLink=${this.featurePreviewCommandLink}
						.featureRestriction=${this.featureRestriction}
						.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
						.source=${this.source}
						.state=${this.state}
						.webroot=${this.webroot}
					>
						<slot name="feature" slot="feature"></slot>
					</gl-feature-gate-plus-state>
				</div>
				${this.allowRepoSwitch?ef`<gl-button
							class="switch-repos"
							appearance="toolbar"
							tooltip="Switch to a different repository"
							@click=${this.onSwitchRepos}
							><code-icon icon="gl-switch" slot="prefix"></code-icon> Switch Repos</gl-button
						>`:ey}
			</dialog>
		`}onKeydown(e){"Escape"===e.key&&e.preventDefault()}onCancel(e){e.preventDefault()}onSwitchRepos(){this.dispatchEvent(new CustomEvent("gl-switch-repos",{bubbles:!0,composed:!0}))}};lj.styles=[r_,sj,rT,sn],lz([ej("dialog")],lj.prototype,"dialogEl",2),lz([eP({type:Boolean})],lj.prototype,"allowRepoSwitch",2),lz([eP({reflect:!0})],lj.prototype,"appearance",2),lz([eP({type:Object})],lj.prototype,"featurePreview",2),lz([eP({type:String})],lj.prototype,"featurePreviewCommandLink",2),lz([eP()],lj.prototype,"featureRestriction",2),lz([eP()],lj.prototype,"featureWithArticleIfNeeded",2),lz([eP({type:Object})],lj.prototype,"source",2),lz([eP({attribute:!1,type:Number})],lj.prototype,"state",2),lz([eP({type:String})],lj.prototype,"webroot",2),lj=lz([eT("gl-feature-gate")],lj);let lD=A`
	:host {
		/* Banner color custom properties */
		--gl-banner-primary-background: var(--vscode-sideBar-background);
		--gl-banner-secondary-background: var(--vscode-editor-background);
		--gl-banner-primary-emphasis-background: var(--vscode-button-background);
		--gl-banner-secondary-emphasis-background: var(--vscode-button-secondaryBackground);
		--gl-banner-text-color: var(--vscode-foreground);
		--gl-banner-dim-text-color: var(--vscode-descriptionForeground);
		--gl-banner-transparency: 0.5;

		/* Layout properties */
		--gl-banner-padding: 1.2rem;
		--gl-banner-gap: 0.8rem;
		--gl-banner-border-radius: 0.4rem;

		/* Button customization - use 8px horizontal padding, keep original vertical padding */
		--gl-banner-button-padding: 0.4rem 0.8rem;

		display: block;
		margin-block-end: 1.2rem;
	}

	.banner {
		display: flex;
		flex-direction: column;
		padding: var(--gl-banner-padding);
		border-radius: var(--gl-banner-border-radius);
		position: relative;
		overflow: hidden;
		container-type: inline-size;
	}

	/* Solid display mode - same as card background */
	.banner--solid {
		background-color: var(--gl-banner-primary-background);
		border: 1px solid color-mix(in lab, var(--gl-banner-primary-background) 100%, var(--vscode-foreground) 12%);
	}

	/* Outline display mode - emphasis color outline with secondary background */
	.banner--outline {
		background-color: var(--gl-banner-secondary-background);
		border: 2px solid var(--gl-banner-primary-emphasis-background);
	}

	/* Gradient display mode - horizontal gradient from primary to secondary emphasis */
	.banner--gradient {
		background: linear-gradient(
			to right,
			var(--gl-banner-primary-emphasis-background) 0%,
			var(--gl-banner-secondary-emphasis-background) 100%
		);
		border: 1px solid
			color-mix(
				in lab,
				var(--gl-banner-primary-emphasis-background) 50%,
				var(--gl-banner-secondary-emphasis-background) 50%
			);
	}

	/* Gradient transparent display mode - same gradient but with transparency */
	.banner--gradient-transparent {
		background: linear-gradient(
			to right,
			color-mix(
					in lab,
					var(--gl-banner-primary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				0%,
			color-mix(
					in lab,
					var(--gl-banner-secondary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				100%
		);
		border: 1px solid
			color-mix(
				in lab,
				color-mix(
						in lab,
						var(--gl-banner-primary-emphasis-background) 50%,
						var(--gl-banner-secondary-emphasis-background) 50%
					)
					calc(100% * (1 - var(--gl-banner-transparency))),
				transparent
			);
	}

	/* Gradient purple display mode - matches the auto-composer container styling */
	.banner--gradient-purple {
		border: 1px solid var(--vscode-panel-border);
		border-radius: 6px;
		background: linear-gradient(135deg, #a100ff1a 0%, #255ed11a 100%);
	}

	.banner--gradient-purple .banner__title {
		font-size: 1.3rem;
		color: var(--vscode-foreground);
		font-weight: normal;
	}

	.banner--gradient-purple .banner__body {
		font-size: 1.2rem;
		color: var(--vscode-descriptionForeground);
		line-height: 1.4;
	}

	.banner--gradient-purple .banner__body a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}

	.banner--gradient-purple .banner__body a:hover {
		color: var(--vscode-textLink-activeForeground);
		text-decoration: underline;
	}

	.banner__content {
		display: flex;
		flex-direction: column;
		gap: var(--gl-banner-gap);
		align-items: center;
		text-align: center;
	}

	/* Responsive layout */
	.banner--responsive .banner__content {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;
		gap: var(--gl-banner-gap);
	}

	.banner--responsive .banner__text {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.banner--responsive .banner__title,
	.banner--responsive .banner__body {
		text-align: left;
	}

	/* < 500px: Stack vertically with full-width buttons */
	.banner--responsive .banner__buttons {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.8rem;
		width: 100%;
	}

	.banner--responsive .banner__button {
		grid-column: unset;
		justify-self: unset;
		width: 100% !important;
		min-width: 100% !important;
		max-width: 100% !important;
		justify-content: center;
		flex: 1;
	}

	/* >= 500px: Three-group horizontal layout */
	@container (min-width: 500px) {
		.banner--responsive .banner__content {
			flex-direction: row;
			align-items: center;
			gap: 1.6rem;
		}

		/* Group 1: Text content (left-aligned) */
		.banner--responsive .banner__text {
			flex: 1;
			min-width: 0;
			align-self: center;
		}

		/* Group 2: Buttons (content-sized) */
		.banner--responsive .banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			margin-top: 0;
			width: auto;
			flex-shrink: 0;
			align-self: center;
		}

		.banner--responsive .banner__button {
			width: auto;
			white-space: nowrap;
		}

		/* Group 3: Dismiss button (to the right of buttons) */
		.banner--responsive .banner__dismiss {
			position: static !important;
			top: auto !important;
			right: auto !important;
			align-self: center;
			flex-shrink: 0;
		}
	}

	.banner__title {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--gl-banner-text-color);
		margin: 0;
		text-wrap: pretty;
	}

	.banner__body {
		font-size: 1em;
		color: var(--gl-banner-text-color);
		margin: 0;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.banner__buttons {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0.8rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	.banner:not(.banner--gradient-purple) .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-foreground: var(--gl-banner-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner--gradient-purple .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner__button--secondary {
		grid-column: 3;
		justify-self: end;
		white-space: nowrap;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 10%, transparent);
	}

	/* When only primary button exists, center it across the full width */
	.banner__buttons:has(.banner__button--primary):not(:has(.banner__button--secondary)) .banner__button--primary {
		grid-column: 1 / -1;
		justify-self: center;
	}

	/* Dismiss button */
	.banner__dismiss {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 15%, transparent);
		--button-padding: 0.4rem;
		z-index: 1;
	}

	/* Responsive layout dismiss button */
	.banner--responsive .banner__dismiss {
		/* < 500px: Upper right corner (default positioning) */
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
	}

	/* Theme-specific adjustments */

	/* Light theme: Brighten gradient colors for better contrast with dark text */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-primary-emphasis-background: color-mix(in lab, var(--vscode-button-background) 40%, #fff 60%);
		--gl-banner-secondary-emphasis-background: color-mix(
			in lab,
			var(--vscode-button-secondaryBackground) 40%,
			#fff 60%
		);
	}

	/* Override text color for high contrast light theme specifically */
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-text-color: #000;
	}

	:host-context(.vscode-dark) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light))
		.banner:not(.banner--gradient-purple)
		.banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-foreground: #fff;
	}

	:host-context(.vscode-light) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast-light) .banner:not(.banner--gradient-purple) .banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 8%, #fff 25%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 15%, #fff 35%);
		--button-foreground: #000;
	}

	/* Make banner text darker in light themes */
	:host-context(.vscode-light) .banner__body,
	:host-context(.vscode-high-contrast-light) .banner__body {
		color: color-mix(in lab, var(--gl-banner-text-color) 20%, #000 80%);
	}

	/* Strong colors for banner title - pure black/white for maximum contrast */
	:host-context(.vscode-light) .banner__title,
	:host-context(.vscode-high-contrast-light) .banner__title {
		color: #000 !important;
	}

	:host-context(.vscode-dark) .banner__title,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .banner__title {
		color: #fff !important;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.banner__buttons {
			flex-direction: column;
			width: 100%;
		}

		.banner__button {
			width: 100%;
		}
	}

	/* More aggressive responsive layout for narrow sidebars */
	@media (max-width: 400px) {
		.banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			margin-top: 0.8rem;
			align-items: center;
			width: 100%;
		}

		.banner__button--primary,
		.banner__button--secondary {
			grid-column: unset;
			justify-self: unset;
			width: 100%;
			max-width: 200px;
		}

		.banner__button--primary {
			order: 1;
		}

		.banner__button--secondary {
			order: 2;
		}
	}

	/* Support for custom banner buttons layout */
	:host([data-banner-buttons-layout='column']) .banner__buttons,
	.banner__buttons[data-layout='column'] {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	:host([data-banner-buttons-layout='column']) .banner__button--primary,
	:host([data-banner-buttons-layout='column']) .banner__button--secondary,
	.banner__buttons[data-layout='column'] .banner__button--primary,
	.banner__buttons[data-layout='column'] .banner__button--secondary {
		grid-column: unset;
		justify-self: unset;
		width: 100%;
		max-width: 200px;
	}
`;var lB=Object.defineProperty,lI=Object.getOwnPropertyDescriptor,lO=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lI(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lB(t,i,s),s};let lL=class extends lit_element_i{constructor(){super(...arguments),this.display="solid",this.dismissible=!1,this.layout="default"}get classNames(){return{banner:!0,[`banner--${this.display}`]:!0,[`banner--${this.layout}`]:"default"!==this.layout}}render(){return ef`<div part="base" class=${oY(this.classNames)}>
			<div class="banner__content">
				${"responsive"===this.layout?this.renderResponsiveContent():this.renderDefaultContent()}
			</div>
			${"responsive"!==this.layout?this.renderDismissButton():void 0}
		</div>`}renderDefaultContent(){return ef`${this.renderTitle()} ${this.renderBody()} ${this.renderButtons()}`}renderResponsiveContent(){return ef`
			<div class="banner__text">${this.renderTitle()} ${this.renderBody()}</div>
			${this.renderButtons()} ${this.renderDismissButton()}
		`}renderTitle(){if(this.bannerTitle)return ef`<div class="banner__title">${this.bannerTitle}</div>`}renderBody(){if(this.body)return ef`<div class="banner__body">${o4(this.body)}</div>`}renderButtons(){let e=this.renderPrimaryButton(),t=this.renderSecondaryButton();if(e||t)return ef`<div class="banner__buttons">${e} ${t}</div>`}renderPrimaryButton(){if(this.primaryButton)return ef`
			<gl-button
				class="banner__button banner__button--primary"
				appearance=${"gradient-purple"===this.display?"secondary":void 0}
				?full=${"gradient-purple"===this.display}
				href=${this.primaryButtonHref??ey}
				truncate
				@click=${this.onPrimaryButtonClick}
			>
				${this.primaryButton}
			</gl-button>
		`}renderSecondaryButton(){if(this.secondaryButton)return ef`
			<gl-button
				class="banner__button banner__button--secondary"
				appearance="toolbar"
				href=${this.secondaryButtonHref??ey}
				@click=${this.onSecondaryButtonClick}
			>
				${this.secondaryButton}
			</gl-button>
		`}renderDismissButton(){if(this.dismissible)return ef`
			<gl-button
				class="banner__dismiss"
				appearance="toolbar"
				href=${this.dismissHref??ey}
				aria-label="Dismiss"
				tooltip="Dismiss"
				@click=${this.onDismissClick}
			>
				<code-icon icon="close"></code-icon>
			</gl-button>
		`}onPrimaryButtonClick(e){this.primaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-primary-click",{detail:{command:this.primaryButtonCommand},bubbles:!0,composed:!0}))}onSecondaryButtonClick(e){this.secondaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-secondary-click",{detail:{command:this.secondaryButtonCommand},bubbles:!0,composed:!0}))}onDismissClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-dismiss",{bubbles:!0,composed:!0}))}};lL.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lL.styles=[lD],lO([eP({reflect:!0})],lL.prototype,"display",2),lO([eP({attribute:"banner-title"})],lL.prototype,"bannerTitle",2),lO([eP()],lL.prototype,"body",2),lO([eP({attribute:"primary-button"})],lL.prototype,"primaryButton",2),lO([eP({attribute:"primary-button-href"})],lL.prototype,"primaryButtonHref",2),lO([eP({attribute:"primary-button-command"})],lL.prototype,"primaryButtonCommand",2),lO([eP({attribute:"secondary-button"})],lL.prototype,"secondaryButton",2),lO([eP({attribute:"secondary-button-href"})],lL.prototype,"secondaryButtonHref",2),lO([eP({attribute:"secondary-button-command"})],lL.prototype,"secondaryButtonCommand",2),lO([eP({type:Boolean,attribute:"dismissible"})],lL.prototype,"dismissible",2),lO([eP({attribute:"dismiss-href"})],lL.prototype,"dismissHref",2),lO([eP({attribute:"layout"})],lL.prototype,"layout",2),lL=lO([eT("gl-banner")],lL);var lN=Object.defineProperty,lF=Object.getOwnPropertyDescriptor,lW=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lF(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lN(t,i,s),s};let lH=class extends tf(lit_element_i){render(){let e=this.error.get();return e?ef`<gl-banner
			display="solid"
			banner-title="Something went wrong"
			.body=${e}
			dismissible
			@gl-banner-dismiss=${()=>this.error.set(void 0)}
		></gl-banner>`:ey}};lW([eP({attribute:!1})],lH.prototype,"error",2),lH=lW([eT("gl-error-banner")],lH);var lV=Object.defineProperty,lq=Object.getOwnPropertyDescriptor,lU=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lq(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lV(t,i,s),s};let lK=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.minVisible=0,this.position="bottom",this._shownAt=0}willUpdate(e){if(e.has("active")){if(this.active)null!=this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=void 0),this._shownAt=performance.now(),this.toggleAttribute("visible",!0);else if(this.hasAttribute("visible")){let e=this.minVisible-(performance.now()-this._shownAt);e>0?this._hideTimer=setTimeout(()=>{this._hideTimer=void 0,this.toggleAttribute("visible",!1)},e):this.toggleAttribute("visible",!1)}}}firstUpdated(){this.setAttribute("role","progressbar")}disconnectedCallback(){super.disconnectedCallback?.(),null!=this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=void 0,this.toggleAttribute("visible",!1))}render(){return ef`<div class="progress-bar"></div>`}};lK.styles=A`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='top']) {
			top: 0;
			bottom: auto;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([visible]) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,lU([eP({reflect:!0})],lK.prototype,"mode",2),lU([eP({type:Boolean})],lK.prototype,"active",2),lU([eP({type:Number,attribute:"min-visible"})],lK.prototype,"minVisible",2),lU([eP()],lK.prototype,"position",2),lK=lU([eT("progress-indicator")],lK);var lY=Object.defineProperty,lG=Object.getOwnPropertyDescriptor,lX=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lG(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lY(t,i,s),s};let lZ=class extends SignalWatcherWebviewApp{constructor(){super(...arguments),this._host=c??=sl(),this._state=function(e){let{signal:t,persisted:i,resetAll:r,startAutoPersist:o,dispose:s}=function(e){let t,i=e?.storage,r=e?.version,o=e?.restoreKey;function s(){if(null==i)return;let t=i.get();if(null==t)return;let s=t.__v,a=t[s2];if(null==o||a===o)return null!=r&&s!==r&&(t=e?.migrate?.(t,s)??void 0),t}let a=s(),h=[],c=[],p=!1;function u(){if(p=!1,t?.getPending(),t?.watch(),null==i||0===c.length)return;let e={};for(let t of(null!=r&&(e.__v=r),null!=o&&(e[s2]=o),e[s4]=Date.now(),c))e[t.key]=t.serialize(t.signal.get());i.set(e)}function m(e){if(null!=e){for(let i of(t===e&&p&&u(),c))e.unwatch(i.signal);t===e&&(t=void 0)}}return{signal:function(e){let t=tM(e);return h.push(()=>t.set(e)),t},persisted:function(e,i,r){if(s5.has(e))throw Error(`Cannot use reserved key '${e}' for persisted signal`);let o=r?.deserialize,s=r?.serialize??(e=>e),h=t=>{if(null==t||!(e in t))return i;let r=t[e];if(null!=o){let e=o(r);return void 0!==e?e:i}return r},p=tM(h(a));return c.push({key:e,signal:p,serialize:s,reset:e=>{p.set(h(e))}}),null!=t&&t.watch(p),p},resetAll:function(){for(let e of h)e();let e=s();for(let t of c)t.reset(e)},startAutoPersist:function(){if(null==i)return()=>{};m(t);let e=new g.subtle.Watcher(()=>{p||(p=!0,queueMicrotask(u))});for(let i of(t=e,c))e.watch(i.signal);return()=>{m(e)}},dispose:function(){m(t),h.length=0,c.length=0}}}({storage:e,version:1}),a=i("period","1|M"),h=i("showAllBranches",!1),c=i("sliceBy","author"),p=i("scope",void 0),u=t(s3),m=t(void 0),b=t({count:0,openCount:0}),f=t(void 0),v=t(!1),_=t(null),w=t(void 0),x=t(!1),$=t(!0),C=t(void 0),E=tP(()=>f.get()?.allowed??!0),S=tP(()=>p.get()?.head??m.get()?.ref),A=tP(()=>p.get()?.base??m.get()?.ref),T=tP(()=>!m.get()?.virtual),M=tP(()=>{let e=m.get(),t=p.get();return!e?.virtual&&(t?.type==="file"||t?.type==="folder")}),P=tP(()=>M.get()&&h.get()?c.get():"author");return{period:a,showAllBranches:h,sliceBy:c,scope:p,displayConfig:u,repository:m,repositories:b,access:f,allowRepoSwitch:v,loadedSpanMs:_,visibleSpanMs:w,loadingMore:x,hasMore:$,error:C,allowed:E,head:S,base:A,isShowAllBranchesSupported:T,isSliceBySupported:M,effectiveSliceBy:P,resetAll:r,startAutoPersist:o,dispose:s}}(this._host.storage),this._rpc=new RpcController(this,{rpcOptions:{webviewId:()=>this._webview?.webviewId,webviewInstanceId:()=>this._webview?.webviewInstanceId,endpoint:()=>this._host.createEndpoint()},onReady:e=>this._onRpcReady(e),onError:e=>this._state.error.set(e.message)}),this.onChartLoadMore=()=>{this._actions?.extendTimeline()},this.onChartVisibleRangeChanged=e=>{this._state.visibleSpanMs.set(e.detail.newest-e.detail.oldest)},this.onHeaderPeriodChange=e=>{this._actions?.changePeriod(e.detail.period)},this.onHeaderSliceByChange=e=>{this._actions?.changeSliceBy(e.detail.sliceBy)},this.onHeaderShowAllBranchesChange=e=>{this._actions?.changeShowAllBranches(e.detail.showAllBranches)},this.onHeaderChooseHeadRef=e=>{this._actions?.chooseHeadRef(e.detail.location??null)},this.onHeaderChoosePath=e=>{this._actions?.choosePath(e.detail.detached)},this.onHeaderClearScope=()=>{this._actions?.changeScope("repo",null,!1)},this.onHeaderChangeScope=e=>{this._actions?.changeScope(e.detail.type,e.detail.value??null,e.detail.detached)},this.onSwitchRepos=()=>{this._actions?.pickAndNavigateRepo()}}connectedCallback(){super.connectedCallback?.();let e=this.context;this.context=void 0,this.initWebviewContext(e)}disconnectedCallback(){this._unsubscribeEvents?.(),this._unsubscribeEvents=void 0,this._stopAutoPersist?.(),this._stopAutoPersist=void 0,this._datasetResource?.dispose(),this._datasetResource=void 0,this._chartDataset=void 0,this._chartDataPromise=void 0,this._actions?.dispose(),this._actions=void 0,this._state.resetAll(),this._state.dispose(),super.disconnectedCallback?.()}async _onRpcReady(e){var t,i;let r=this._state,[o,s,a,h,c]=await Promise.all([e.timeline,e.repositories,e.repository,e.subscription,e.config]),p=function(e){let t,i,r=(void 0)??!0,o,s=tM(o),a=tM(!1),h=tM(void 0),c=tM(!1),p=new g.Computed(()=>a.get()?"loading":null!=h.get()?"error":c.get()?"success":"idle"),u=!1,m=0,b=0;function f(){null!=t&&(t.abort(new DOMException("resource: cancelled by newer fetch","AbortError")),t=void 0),a.set(!1)}async function v(...o){if(u)return;r&&f(),i=o;let p=new AbortController,g=++m;b=g,t=p,a.set(!0),h.set(void 0);try{let t=await e(p.signal,...o);if(p.signal.aborted||g!==b)return;s.set(t),c.set(!0)}catch(e){if(p.signal.aborted||g!==b)return;h.set(e instanceof Error?e.message:String(e))}finally{t===p&&(t=void 0,a.set(!1))}}async function _(){if(null!=i)return v(...i)}return{value:s,loading:a,error:h,status:{get:()=>p.get()},generationId:{get:()=>b},fetch:v,refetch:_,mutate:function(e){u||(s.set(e),h.set(void 0),c.set(!0))},cancel:f,reset:function(){f(),s.set(o),h.set(void 0),c.set(!1),i=void 0},dispose:function(){u=!0,f()}}}(async e=>{let t=r.scope.get();if(null!=t)return o.getDataset(t,{period:r.period.get(),showAllBranches:r.showAllBranches.get(),sliceBy:r.sliceBy.get(),loadedSpanMs:r.loadedSpanMs.get()??void 0},e)});this._datasetResource=p;let u=new TimelineActions(r,e,o,a,p);this._actions=u,this._stopAutoPersist=r.startAutoPersist(),this._unsubscribeEvents=await (t={timeline:o,repositories:s,subscription:h,config:c},i={onScopeChanged:e=>u.onScopeChanged(e),onRepoChanged:e=>u.onRepoChanged(e),onDataChanged:()=>void u.fetchTimeline(),onConfigChanged:()=>void u.fetchDisplayConfig(),onRepoCountChanged:()=>void u.fetchRepoCount()},s1([()=>t.timeline.onScopeChanged(e=>i.onScopeChanged(e)),()=>t.repositories.onRepositoryChanged(e=>i.onRepoChanged(e)),()=>t.subscription.onSubscriptionChanged(()=>i.onDataChanged()),()=>t.config.onConfigChanged(()=>i.onConfigChanged()),()=>t.repositories.onRepositoriesChanged(()=>i.onRepoCountChanged())]));let m=()=>{"visible"!==document.visibilityState?u.cancelPendingRequests():null!=r.scope.get()&&u.fetchTimeline()};document.addEventListener("visibilitychange",m),this.disposables.push({dispose:()=>document.removeEventListener("visibilitychange",m)}),await u.populateInitialState()}updated(e){super.updated?.(e),this._actions?.pushTelemetryContext()}onChartCommitSelected(e){null!=e.detail.id&&this._actions?.selectDataPoint(e.detail)}render(){let e=this._state,t=this._datasetResource?.loading.get()??!1,i=e.scope.get(),r=e.repository.get(),o=e.access.get(),s=o?.subscription?.current;return ef`${this.renderGate()}
			<div class="container">
				<gl-error-banner .error=${e.error}></gl-error-banner>
				<progress-indicator ?active=${t}></progress-indicator>
				<gl-timeline-header
					?hidden=${!i}
					placement=${this.placement}
					host="timeline"
					.repository=${r}
					.repositoryCount=${e.repositories.get().openCount}
					.headRef=${e.head.get()}
					.scopeType=${i?.type??"repo"}
					.relativePath=${i?.relativePath??""}
					.period=${e.period.get()}
					.visibleSpanMs=${e.visibleSpanMs.get()}
					.sliceBy=${e.effectiveSliceBy.get()}
					.showAllBranches=${e.showAllBranches.get()}
					.showAllBranchesSupported=${!r?.virtual}
					.sliceBySupported=${e.isSliceBySupported.get()}
					@gl-timeline-header-period-change=${this.onHeaderPeriodChange}
					@gl-timeline-header-slice-by-change=${this.onHeaderSliceByChange}
					@gl-timeline-header-show-all-branches-change=${this.onHeaderShowAllBranchesChange}
					@gl-timeline-header-choose-head-ref=${this.onHeaderChooseHeadRef}
					@gl-timeline-header-choose-path=${this.onHeaderChoosePath}
					@gl-timeline-header-clear-scope=${this.onHeaderClearScope}
					@gl-timeline-header-change-scope=${this.onHeaderChangeScope}
				>
					${"view"===this.placement?ef`<gl-button
								slot="toolbox"
								appearance="toolbar"
								href="command:gitlens.views.timeline.openInTab"
								tooltip="Open in Editor"
								aria-label="Open in Editor"
							>
								<code-icon icon="link-external"></code-icon>
							</gl-button>`:ey}
					${null==s||!eU(s)?ef`<gl-feature-badge
								slot="toolbox"
								placement="bottom"
								.source=${{source:"timeline",detail:"badge"}}
								.subscription=${s}
							></gl-feature-badge>`:ey}
				</gl-timeline-header>

				<main class="timeline">${this.renderChart()}</main>
			</div> `}renderGate(){let e=this._state;if(!1!==e.allowed.get())return ey;let t=e.access.get()?.subscription?.current;return"editor"===this.placement?ef`<gl-feature-gate
				?allowRepoSwitch=${e.allowRepoSwitch.get()}
				featureRestriction="private-repos"
				.source=${{source:"timeline",detail:"gate"}}
				.state=${t?.state}
				@gl-switch-repos=${this.onSwitchRepos}
				><section slot="feature" class="feature">
					<header class="feature__header">
						<div class="icon-cube feature__feature-icon"><code-icon icon="gl-gitlens"></code-icon></div>
						<hgroup>
							<h2 class="feature__title">
								<span>Visual History</span>
								<gl-feature-badge></gl-feature-badge>
							</h2>
							<p class="feature__lede">See how any file, folder, or branch evolved &mdash; at a glance</p>
						</hgroup>
					</header>
					<p>
						Visualize the evolution of a repository, branch, folder, or file and identify when the most
						impactful changes were made and by whom. Quickly see unmerged changes in files or folders, when
						slicing by branch.
						<a href="https://help.gitkraken.com/gitlens/gitlens-features/#visual-file-history-pro"
							>Learn More</a
						>
					</p>
				</section>
			</gl-feature-gate>`:ef`<gl-feature-gate
			?allowRepoSwitch=${e.allowRepoSwitch.get()}
			featureRestriction="private-repos"
			.source=${{source:"timeline",detail:"gate"}}
			.state=${t?.state}
			@gl-switch-repos=${this.onSwitchRepos}
			><section slot="feature" class="feature">
				<header class="feature__header">
					<div class="icon-cube feature__feature-icon"><code-icon icon="gl-gitlens"></code-icon></div>
					<hgroup>
						<h2 class="feature__title">
							<span>Visual History</span>
							<gl-feature-badge></gl-feature-badge>
						</h2>
						<p class="feature__lede">See how any file, folder, or branch evolved &mdash; at a glance</p>
					</hgroup>
				</header>
				<p>
					Visualize the evolution of a repository, branch, folder, or file and identify when the most
					impactful changes were made and by whom. Quickly see unmerged changes in files or folders, when
					slicing by branch.
					<a href="https://help.gitkraken.com/gitlens/gitlens-features/#visual-file-history-pro"
						>Learn More</a
					>
				</p>
			</section></gl-feature-gate
		>`}renderChart(){let e=this._state;if(!e.scope.get()&&"view"===this.placement)return ef`<div class="timeline__empty">
				<p>There are no editors open that can provide file history information.</p>
			</div>`;let t=this._datasetResource?.value.get(),i=this.getChartDataPromise(t?.dataset),r=ef`<div slot="empty">
			${null==e.scope.get()?ef`<p>Something went wrong</p>
						<p>Please close this tab and try again</p>`:ef`<p>No commits found for the specified time period</p>`}
		</div>`,o=this._datasetResource?.loading.get()??!1,s=e.loadingMore.get();return ef`<gl-timeline-chart
			id="chart"
			placement="${this.placement}"
			currentUserNameStyle="${e.displayConfig.get().currentUserNameStyle}"
			dateFormat="${e.displayConfig.get().dateFormat}"
			.dataPromise=${i}
			?loading=${o&&!s}
			?loadingMore=${s}
			?hasMore=${e.hasMore.get()}
			head="${e.head.get()?.ref??"HEAD"}"
			.scope=${e.scope.get()}
			shortDateFormat="${e.displayConfig.get().shortDateFormat}"
			sliceBy="${e.effectiveSliceBy.get()}"
			.windowSpanMs=${eK(e.period.get())}
			@gl-commit-select=${this.onChartCommitSelected}
			@gl-load-more=${this.onChartLoadMore}
			@gl-visible-range-changed=${this.onChartVisibleRangeChanged}
			@gl-loading=${e=>{e.detail}}
		>
			${r}
		</gl-timeline-chart>`}getChartDataPromise(e){if(null==e){this._chartDataset=void 0,this._chartDataPromise=void 0;return}return(this._chartDataset!==e||null==this._chartDataPromise)&&(this._chartDataset=e,this._chartDataPromise=Promise.resolve(e)),this._chartDataPromise}};lZ.styles=[sj,sD,sa,s8,s6,ss],lX([eP({type:String,noAccessor:!0})],lZ.prototype,"context",2),lX([ej("#chart")],lZ.prototype,"_chart",2),lZ=lX([eT("gl-timeline-app")],lZ);export{lZ as GlTimelineApp};