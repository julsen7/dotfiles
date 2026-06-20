let e,t,r,o,i;"u">typeof __webpack_require__&&Object.defineProperty(__webpack_require__,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let s=globalThis,a=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),h=new WeakMap;let n=class n{constructor(e,t,r){if(this._$cssResult$=!0,r!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(a&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=h.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&h.set(t,e))}return e}toString(){return this.cssText}};let p=e=>new n("string"==typeof e?e:e+"",void 0,c),u=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]),e,c),g=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return p(t)})(e):e,{is:f,defineProperty:m,getOwnPropertyDescriptor:b,getOwnPropertyNames:v,getOwnPropertySymbols:w,getPrototypeOf:x}=Object,C=globalThis,_=C.trustedTypes,$=_?_.emptyScript:"",S=C.reactiveElementPolyfillSupport,A={toAttribute(e,t){switch(t){case Boolean:e=e?$:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},P=(e,t)=>!f(e,t),E={attribute:!0,type:String,converter:A,reflect:!1,useDefault:!1,hasChanged:P};Symbol.metadata??=Symbol("metadata"),C.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=E){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&m(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:i}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let s=o?.call(this);i?.call(this,t),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??E}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=x(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...v(e),...w(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(g(r));else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(a)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=s.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:A).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:A;this._$Em=o;let s=i.fromAttribute(t,e.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(e,t,r,o=!1,i){if(void 0!==e){let s=this.constructor;if(!1===o&&(i=this[e]),!(((r??=s.getPropertyOptions(e)).hasChanged??P)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==i||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,S?.({ReactiveElement:y}),(C.reactiveElementVersions??=[]).push("2.1.2");let T=globalThis,O=e=>e,M=T.trustedTypes,N=M?M.createPolicy("lit-html",{createHTML:e=>e}):void 0,D="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,q="?"+j,U=`<${q}>`,B=document,G=()=>B.createComment(""),W=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,V=e=>F(e)||"function"==typeof e?.[Symbol.iterator],K=`[ 	
\x0c\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,Q=/>/g,X=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,et=/"/g,er=/^(?:script|style|textarea|title)$/i,eo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ei=eo(1),en=eo(2),es=(eo(3),Symbol.for("lit-noChange")),ea=Symbol.for("lit-nothing"),el=new WeakMap,ec=B.createTreeWalker(B,129);function ed(e,t){if(!F(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(t):t}let eh=(e,t)=>{let r=e.length-1,o=[],i,s=2===t?"<svg>":3===t?"<math>":"",a=Y;for(let t=0;t<r;t++){let r=e[t],c,h,p=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(h=a.exec(r)));)u=a.lastIndex,a===Y?"!--"===h[1]?a=J:void 0!==h[1]?a=Q:void 0!==h[2]?(er.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=X):void 0!==h[3]&&(a=X):a===X?">"===h[0]?(a=i??Y,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?X:'"'===h[3]?et:ee):a===et||a===ee?a=X:a===J||a===Q?a=Y:(a=X,i=void 0);let g=a===X&&e[t+1].startsWith("/>")?" ":"";s+=a===Y?r+U:p>=0?(o.push(c),r.slice(0,p)+D+r.slice(p)+j+g):r+j+(-2===p?t:g)}return[ed(e,s+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,c=this.parts,[h,p]=eh(e,t);if(this.el=lit_html_S.createElement(h,r),ec.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ec.nextNode())&&c.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(D)){let t=p[s++],r=o.getAttribute(e).split(j),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),o.removeAttribute(e)}else e.startsWith(j)&&(c.push({type:6,index:i}),o.removeAttribute(e));if(er.test(o.tagName)){let e=o.textContent.split(j),t=e.length-1;if(t>0){o.textContent=M?M.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],G()),ec.nextNode(),c.push({type:2,index:++i});o.append(e[t],G())}}}else if(8===o.nodeType)if(o.data===q)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(j,e+1));)c.push({type:7,index:i}),e+=j.length-1}i++}}static createElement(e,t){let r=B.createElement("template");return r.innerHTML=e,r}};function ep(e,t,r=e,o){if(t===es)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl,s=W(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e))._$AT(e,r,o),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=ep(e,i._$AS(e,t.values),i,o)),t}let R=class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??B).importNode(t,!0);ec.currentNode=o;let i=ec.nextNode(),s=0,a=0,c=r[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new k(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new Z(i,this,e)),this._$AV.push(t),c=r[++a]}s!==c?.index&&(i=ec.nextNode(),s++)}return ec.currentNode=B,o}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=ea,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){W(e=ep(this,e,t))?e===ea||null==e||""===e?(this._$AH!==ea&&this._$AR(),this._$AH=ea):e!==this._$AH&&e!==es&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):V(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ea&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(B.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=lit_html_S.createElement(ed(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new R(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=el.get(e.strings);return void 0===t&&el.set(e.strings,t=new lit_html_S(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let i of e)o===t.length?t.push(r=new k(this.O(G()),this.O(G()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=O(e).nextSibling;O(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=ea,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ea}_$AI(e,t=this,r,o){let i=this.strings,s=!1;if(void 0===i)(s=!W(e=ep(this,e,t,0))||e!==this._$AH&&e!==es)&&(this._$AH=e);else{let o,a,c=e;for(e=i[0],o=0;o<i.length-1;o++)(a=ep(this,c[r+o],t,o))===es&&(a=this._$AH[o]),s||=!W(a)||a!==this._$AH[o],a===ea?e=ea:e!==ea&&(e+=(a??"")+i[o+1]),this._$AH[o]=a}s&&!o&&this.j(e)}j(e){e===ea?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ea?void 0:e}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ea)}};let z=class z extends H{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=ep(this,e,t,0)??ea)===es)return;let r=this._$AH,o=e===ea&&r!==ea||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==ea&&(r===ea||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ep(this,e)}};let eu=T.litHtmlPolyfillSupport;eu?.(lit_html_S,k),(T.litHtmlVersions??=[]).push("3.3.3");let eg=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{let o=r?.renderBefore??t,i=o._$litPart$;if(void 0===i){let e=r?.renderBefore??null;o._$litPart$=i=new k(t.insertBefore(G(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return es}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eg.litElementHydrateSupport?.({LitElement:lit_element_i});let ef=eg.litElementPolyfillSupport;ef?.({LitElement:lit_element_i}),(eg.litElementVersions??=[]).push("4.2.2");let em=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eb={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:P};function ev(e){return(t,r)=>{let o;return"object"==typeof r?((e=eb,t,r)=>{let{kind:o,metadata:i}=r,s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),"accessor"===o){let{name:o}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e,!0,r)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=r;return function(r){let i=this[o];t.call(this,r),this.requestUpdate(o,i,e,!0,r)}}throw Error("Unsupported decorator location: "+o)})(e,t,r):(o=t.hasOwnProperty(r),t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0)}}function ew(e){return ev({...e,state:!0,attribute:!1})}let ey=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function ex(e,t){return(r,o,i)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof o?r:i??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return ey(r,o,{get(){let e=t.call(this);return void 0===e&&(null!==(e=s(this))||this.hasUpdated)&&a.call(this,e),e}})}return ey(r,o,{get(){return s(this)}})}}let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=r,this.subscribe=o??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,r,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=r,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,r){super(void 0!==t.context?t.initialValue:r),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:r}]of this.subscriptions)t.has(e)||(t.add(e),r.dispatchEvent(new context_request_event_s(this.context,r,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function ek({context:e}){return(t,r)=>{let o=new WeakMap;if("object"==typeof r)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let i;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,r);if(void 0===s){let e=new WeakMap;i={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;i={...s,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,r,i)}}}function eC({context:e,subscribe:t}){return(r,o)=>{"object"==typeof o?o.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{r.set.call(this,e)},subscribe:t})}):r.constructor.addInitializer(r=>{new context_consumer_s(r,{context:e,callback:e=>{r[o]=e},subscribe:t})})}}var e_,e$,eS,eA,eP,eE,eL,eI=Object.defineProperty,eT=(e,t,r)=>{let o;return(o="symbol"!=typeof t?t+"":t)in e?eI(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,r},eR=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},eO=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},eM=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot access private method");return r};function eN(e,t){return Object.is(e,t)}let ez=null,eD=!1,ej=1,eq=Symbol("SIGNAL");function eU(e){let t=ez;return ez=e,t}let eB={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function eG(e){if(eD)throw Error("u">typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===ez)return;ez.consumerOnSignalRead(e);let t=ez.nextProducerIndex++;eF(ez),t<ez.producerNode.length&&ez.producerNode[t]!==e&&eH(ez)&&eW(ez.producerNode[t],ez.producerIndexOfThis[t]),ez.producerNode[t]!==e&&(ez.producerNode[t]=e,ez.producerIndexOfThis[t]=eH(ez)?function e(t,r,o){var i;if(eV(t),eF(t),0===t.liveConsumerNode.length){null==(i=t.watched)||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=e(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(o),t.liveConsumerNode.push(r)-1}(e,ez,t):0),ez.producerLastReadVersion[t]=e.version}function eW(e,t){var r;if(eV(e),eF(e),"u">typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(r=e.unwatched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)eW(e.producerNode[t],e.producerIndexOfThis[t])}let o=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[o],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[o],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];eF(o),o.producerIndexOfThis[r]=t}}function eH(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function eF(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function eV(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function eZ(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==ej){if(!t.producerMustRecompute(t)&&!function(t){eF(t);for(let r=0;r<t.producerNode.length;r++){let o=t.producerNode[r],i=t.producerLastReadVersion[r];if(i!==o.version||(e(o),i!==o.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=ej;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=ej}}(e),eG(e),e.value===eJ)throw e.error;return e.value}let eK=Symbol("UNSET"),eY=Symbol("COMPUTING"),eJ=Symbol("ERRORED"),eQ={...eB,value:eK,dirty:!0,error:null,equal:eN,producerMustRecompute:e=>e.value===eK||e.value===eY,producerRecomputeValue(e){let t;if(e.value===eY)throw Error("Detected cycle in computations.");let r=e.value;e.value=eY;let o=(e&&(e.nextProducerIndex=0),eU(e)),i=!1;try{t=e.computation.call(e.wrapper),i=r!==eK&&r!==eJ&&e.equal.call(e.wrapper,r,t)}catch(r){t=eJ,e.error=r}finally{if(eU(o),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(eH(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)eW(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(i){e.value=r;return}e.value=t,e.version++}},eX=function(){throw Error()};function e1(){return eG(this),this.value}let e0={...eB,equal:eN,value:void 0},e2=Symbol("node");(e=>{var t,r,o,i;let State=class State{constructor(o,i={}){let s,a;eO(this,r),eT(this,t);let c=((s=Object.create(e0)).value=o,(a=()=>(eG(s),s.value))[eq]=s,a)[eq];if(this[e2]=c,c.wrapper=this,i){let t=i.equals;t&&(c.equal=t),c.watched=i[e.subtle.watched],c.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return e1.call(this[e2])}set(t){var r,o;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(eD)throw Error("Writes to signals not permitted during Watcher callback");r=this[e2],(null==ez?void 0:ez.consumerAllowSignalWrites)===!1&&eX(),r.equal.call(r.wrapper,r.value,t)||(r.value=t,o=r,o.version++,ej++,function e(t){if(void 0===t.liveConsumerNode)return;let r=eD;eD=!0;try{for(let r of t.liveConsumerNode)r.dirty||function(t){var r;t.dirty=!0,e(t),null==(r=t.consumerMarkedDirty)||r.call(t.wrapper??t)}(r)}finally{eD=r}}(o))}};t=e2,r=new WeakSet,e.isState=e=>"object"==typeof e&&eR(r,e),e.State=State;let Computed=class Computed{constructor(t,r){let s,a;eO(this,i),eT(this,o);let c=((s=Object.create(eQ)).computation=t,(a=()=>eZ(s))[eq]=s,a)[eq];if(c.consumerAllowSignalWrites=!0,this[e2]=c,c.wrapper=this,r){let t=r.equals;t&&(c.equal=t),c.watched=r[e.subtle.watched],c.unwatched=r[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return eZ(this[e2])}};o=e2,i=new WeakSet,e.isComputed=e=>"object"==typeof e&&eR(i,e),e.Computed=Computed,(t=>{var r,o,i,s;t.untrack=function(e){let t,r=null;try{r=eU(null),t=e()}finally{eU(r)}return t},t.introspectSources=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=t[e2].producerNode)?void 0:r.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(r=t[e2].liveConsumerNode)?void 0:r.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let r=t[e2].liveConsumerNode;return!!r&&r.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let r=t[e2].producerNode;return!!r&&r.length>0};let Watcher=class Watcher{constructor(e){eO(this,o),eO(this,i),eT(this,r);let t=Object.create(eB);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[e2]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");eM(this,i,s).call(this,t);let r=this[e2];r.dirty=!1;let o=eU(r);for(let e of t)eG(e[e2]);eU(o)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");eM(this,i,s).call(this,t);let r=this[e2];eF(r);for(let e=r.producerNode.length-1;e>=0;e--)if(t.includes(r.producerNode[e].wrapper)){eW(r.producerNode[e],r.producerIndexOfThis[e]);let t=r.producerNode.length-1;if(r.producerNode[e]=r.producerNode[t],r.producerIndexOfThis[e]=r.producerIndexOfThis[t],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,e<r.producerNode.length){let t=r.producerIndexOfThis[e],o=r.producerNode[e];eV(o),o.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[e2].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};r=e2,o=new WeakSet,i=new WeakSet,s=function(t){for(let r of t)if(!(0,e.isComputed)(r)&&!(0,e.isState)(r))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>eR(o,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=ez)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(eA||(eA={}));let e3=!1,e5=new eA.subtle.Watcher(()=>{e3||(e3=!0,queueMicrotask(()=>{for(let e of(e3=!1,e5.getPending()))e.get();e5.watch()}))}),e4=Symbol("SignalWatcherBrand"),e6=(new FinalizationRegistry(e=>{e.unwatch(...eA.subtle.introspectSources(e))}),new WeakMap,e=>(...t)=>({_$litDirective$:e,values:t}));let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:e7}={M:D,P:j,A:q,C:1,L:eh,R,D:V,V:ep,I:k,H,N:L,U:z,B:I,F:Z},e8=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),e8(e,t);return!0},e9=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},te=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),to(t)}};function tt(e){void 0!==this._$AN?(e9(this),this._$AM=e,te(this)):this._$AM=e}function tr(e,t=!1,r=0){let o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(o))for(let e=r;e<o.length;e++)e8(o[e],!1),e9(o[e]);else null!=o&&(e8(o,!1),e9(o));else e8(this,e)}let to=e=>{2==e.type&&(e._$AP??=tr,e._$AQ??=tt)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),te(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(e8(this,e),e9(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let ti=!1,tn=new eA.subtle.Watcher(async()=>{ti||(ti=!0,queueMicrotask(()=>{for(let e of(ti=!1,tn.getPending()))e.get();tn.watch()}))});let watch_r=class watch_r extends async_directive_f{_$S_(){var e,t;void 0===this._$Sm&&(this._$Sj=new eA.Computed(()=>{var e;let t=null==(e=this._$SW)?void 0:e.get();return this.setValue(t),t}),this._$Sm=null!=(t=null==(e=this._$Sk)?void 0:e.h)?t:tn,this._$Sm.watch(this._$Sj),eA.subtle.untrack(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()}))}_$Sp(){void 0!==this._$Sm&&(this._$Sm.unwatch(this._$SW),this._$Sm=void 0)}render(e){return eA.subtle.untrack(()=>e.get())}update(e,[t]){var r;return null!=this._$Sk||(this._$Sk=null==(r=e.options)?void 0:r.host),t!==this._$SW&&void 0!==this._$SW&&this._$Sp(),this._$SW=t,this._$S_(),eA.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$S_()}};let ts=e6(watch_r),ta=e=>(t,...r)=>e(t,...r.map(e=>e instanceof eA.State||e instanceof eA.Computed?ts(e):e));ta(ei),ta(en),eA.State,eA.Computed;let{fromCharCode:tl}=String;new TextEncoder;let tc=new TextDecoder;function td(e){return tc.decode(function(e){let t=globalThis.atob(e),r=t.length,o=new Uint8Array(r),i=0,s=r-r%8;for(;i<s;i+=8)o[i]=t.charCodeAt(i),o[i+1]=t.charCodeAt(i+1),o[i+2]=t.charCodeAt(i+2),o[i+3]=t.charCodeAt(i+3),o[i+4]=t.charCodeAt(i+4),o[i+5]=t.charCodeAt(i+5),o[i+6]=t.charCodeAt(i+6),o[i+7]=t.charCodeAt(i+7);for(;i<r;i++)o[i]=t.charCodeAt(i);return o}(e))}let IpcCall=class IpcCall{constructor(e,t,r=!1){this.scope=e,this.reset=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,r){super(e,t,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let th=new IpcRequest("core","webview/ready"),tp=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let tu=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let tg=new IpcCommand("core","telemetry/sendEvent"),tf=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let tm=new IpcCommand("core","webview/focus/didChange"),tb=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let tv=new WeakMap;let GlElement=class GlElement extends lit_element_i{emit(e,t,r){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:t});return this.dispatchEvent(o),o}update(e){let t=tv.get(this.constructor);if(null!=t)for(let{keys:r,method:o,afterFirstUpdate:i}of t){if(i&&!this.hasUpdated)continue;let t=r.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let tw=/T/,ty=/.*\s*?at\s(.+?)\s/,tx=/^_+/,tk=["accessToken","password","token"];let Logger=class Logger{#e;#t;configure(e,t=!1){this.#t={...e,sanitizeKeys:new Set([...tk,...e.sanitizeKeys??[]])},this.#r=t,this.#e=e.createChannel(e.name),this.#o=this.#e.logLevel,this.#e.onDidChangeLogLevel?.(e=>{this.#o=e})}enabled(e){return!!this.isDebugging||0!==this.#o&&(null==e||this.#o<=function(e){switch(e){case"off":default:return 0;case"trace":return 1;case"debug":return 2;case"info":return 3;case"warn":return 4;case"error":return 5}}(e))}#r=!1;get isDebugging(){return this.#r}#o=0;get logLevel(){var e=this.#o;switch(e){case 0:default:return"off";case 1:return"trace";case 2:return"debug";case 3:return"info";case 4:return"warn";case 5:return"error"}}get timestamp(){return`[${new Date().toISOString().replace(tw," ").slice(0,-1)}]`}trace(e,...t){let r;(0!==this.#o&&!(this.#o>1)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,this.#e?.trace(`  ${r??""}${this.#i(!0,t)}`))}debug(e,...t){let r;(0!==this.#o&&!(this.#o>2)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,this.#e?.debug(`  ${r??""}${this.#i(!1,t)}`))}info(e,...t){let r;(0!==this.#o&&!(this.#o>3)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,this.#e?.info(`   ${r??""}${this.#i(!1,t)}`))}warn(e,...t){let r;(0!==this.#o&&!(this.#o>4)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,this.#e?.warn(`${r??""}${this.#i(!1,t)}`))}error(e,t,...r){let o;if((0===this.#o||this.#o>5)&&!this.isDebugging)return;if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${r.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=ty.exec(t);null!=e&&(o=e[1])}}this.isDebugging;let i=`  ${o??""}${this.#i(!1,r)}`;null!=e?this.#e?.error(String(e),i):this.#e?.error(i)}showOutputChannel(e){this.#e?.show?.(e)}toLoggable(e,t){if(null!=t){let r=this.sanitize(t,e);if(null!=r)return r}if("function"==typeof e)return"<function>";if(null==e||"object"!=typeof e||e instanceof Error)return String(e);if(Array.isArray(e)){let t=e.length>10?e.slice(0,10):e,r=e.length>10?`, \u2026+${e.length-10}`:"";return`[${t.map(e=>this.toLoggable(e)).join(", ")}${r}]`}let r=this.#t?.toLoggable,o=r?.(e);if(null!=o)return o;let i=this.#t?.sanitizeKeys;try{return JSON.stringify(e,(e,t)=>{if(95!==e.charCodeAt(0))return i?.has(e)?this.sanitize(e,t):""===e||"object"!=typeof t||null==t||Array.isArray(t)?t:t instanceof Error?String(t):r?.(t)??t})}catch{return"<error>"}}sanitize(e,t){if(null==t)return;let r=e.replace(tx,"")||e;if(this.#t?.sanitizeKeys?.has(r))return null!=this.#t.hash?`<${r}:${this.#t.hash("string"==typeof t?t:JSON.stringify(t))}>`:`<${r}>`}#i(e,t){if(0===t.length||e&&(0===this.#o||this.#o>2)&&!this.isDebugging)return"";let r=t.map(e=>this.toLoggable(e)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};let tC=new Logger,t_=new WeakMap,t$={enabled:e=>tC.enabled(e),log:(e,t,r,...o)=>{switch(e){case"error":tC.error(void 0,t,r,...o);break;case"warn":t?.warn(r,...o);break;case"info":t?.info(r,...o);break;case"debug":default:t?.debug(r,...o);break;case"trace":t?.trace(r,...o)}}},tS=new Map;function tA(t,r){let o=e;e=t.scopeId,tS.set(t.scopeId,t);try{return r()}finally{e=o,tS.delete(t.scopeId)}}function tP(){return null!=e?tS.get(e):void 0}let tE=0x40000000-1;function tL(){let e=0;return{get current(){return e},next:function(){return e===tE&&(e=0),++e},reset:function(){e=0}}}function tI(e){let t=.001*performance.now(),r=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(r-=e[0],(o-=e[1])<0&&(r--,o+=1e9)),[r,o]}function tT(e){let[t,r]=tI(e);return 1e3*t+Math.floor(r/1e6)}let tR=tL();function tO(e,t,r){var o;let i,s,a={scopeId:e,prevScopeId:t,prefix:r,enabled:e=>tC.enabled(e),addExitInfo:function(...e){(i??=[]).push(...e)},setFailed:function(e){s=e},getExitInfo:function(){return{details:i?.length?` \u2022 ${i.join(", ")}`:void 0,failed:s}}};return tM(a,"trace",tC.trace),tM(a,"debug",tC.debug),tM(a,"info",tC.info),tM(a,"warn",tC.warn),Object.defineProperty(o=a,"error",{configurable:!0,enumerable:!0,get:function(){let e=(e,t,...r)=>tC.error(e,o,t,...r);return Object.defineProperty(o,"error",{value:e,writable:!1,enumerable:!0}),e}}),a}function tM(e,t,r){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){let o=r.bind(tC,e);return Object.defineProperty(e,t,{value:o,writable:!1,enumerable:!0}),o}})}function tN(e,t,r){if(null!=r){let o=null==t?e.toString(16):`${t.toString(16)} \u2192 ${e.toString(16)}`;return null==o?`[${r.padEnd(13)}]`:`[${r}${o.padStart(13-r.length)}]`}return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tz(){let e=tP();if(null==e)return;let t=Object.create(e);return t[Symbol.dispose]=()=>{},t}function tD(e,t,r){if(null!=t&&"boolean"!=typeof t)return tO(t.scopeId,t.prevScopeId,`${t.prefix}${e}`);let o=t?tP()?.scopeId:void 0,i=tR.next();return tO(i,o,`${tN(i,o,r)} ${e}`)}function tj(e,t,r,...o){switch(t){case"trace":tC.trace(e,r,...o);break;case"info":tC.info(e,r,...o);break;default:tC.debug(e,r,...o)}}let LoggerContext=class LoggerContext{constructor(e){this.scope=tD(e,void 0),tC.configure({name:e,createChannel:function(e){let t=tC.isDebugging?function(e){}:function(e){};return{name:e,logLevel:0,trace:t,debug:t,info:t,warn:t,error:t}}},!1)}trace(e,...t){"string"==typeof e?tC.trace(this.scope,e,...t):tC.trace(e,t.shift(),...t)}debug(e,...t){"string"==typeof e?tC.debug(this.scope,e,...t):tC.debug(e,t.shift(),...t)}info(e,...t){"string"==typeof e?tC.info(this.scope,e,...t):tC.info(e,t.shift(),...t)}};let tq=new IpcNotification("home","subscription/didChange"),tU="graph";new IpcCommand(tU,"chooseRepository"),new IpcCommand(tU,"dblclick"),new IpcCommand(tU,"avatars/get"),new IpcCommand(tU,"refs/metadata/get"),new IpcCommand(tU,"rows/get"),new IpcCommand(tU,"pullRequest/openDetails"),new IpcCommand(tU,"row/action"),new IpcCommand(tU,"treemap/file/action"),new IpcCommand(tU,"search/openInView"),new IpcCommand(tU,"search/cancel"),new IpcCommand(tU,"columns/update"),new IpcCommand(tU,"refs/update/visibility"),new IpcCommand(tU,"refs/update/pinned"),new IpcCommand(tU,"filters/update/excludeTypes"),new IpcCommand(tU,"configuration/update"),new IpcCommand(tU,"displayMode/update"),new IpcCommand(tU,"search/update/mode"),new IpcCommand(tU,"filters/update/includedRefs"),new IpcCommand(tU,"filters/reset"),new IpcCommand(tU,"selection/update"),new IpcCommand(tU,"wipDraft/update"),new IpcRequest(tU,"jumpToHead"),new IpcRequest(tU,"chooseRef"),new IpcRequest(tU,"chooseComparison"),new IpcRequest(tU,"chooseAuthor"),new IpcRequest(tU,"chooseFile"),new IpcRequest(tU,"scope/resolve"),new IpcRequest(tU,"rows/ensure"),new IpcRequest(tU,"search/history/get"),new IpcRequest(tU,"search/history/store"),new IpcRequest(tU,"search/history/delete"),new IpcRequest(tU,"counts"),new IpcRequest(tU,"overview/get"),new IpcRequest(tU,"overview/wip/get"),new IpcRequest(tU,"overview/wip/detailed/get"),new IpcRequest(tU,"overview/enrichment/get"),new IpcRequest(tU,"agentSessions/get"),new IpcRequest(tU,"wip/stats/get"),new IpcCommand(tU,"wip/watches/sync"),new IpcNotification(tU,"wip/refetch/request"),new IpcRequest(tU,"row/hover/get"),new IpcRequest(tU,"search"),new IpcNotification(tU,"overview/didChange"),new IpcNotification(tU,"agentSessions/didChange"),new IpcNotification(tU,"repositories/integration/didChange"),new IpcNotification(tU,"wipDrafts/didChange"),new IpcNotification(tU,"didChange",!0),new IpcNotification(tU,"configuration/didChange");let tB=new IpcNotification(tU,"subscription/didChange");new IpcNotification(tU,"org/settings/didChange"),new IpcNotification(tU,"avatars/didChange"),new IpcNotification(tU,"mcp/didChange"),new IpcNotification(tU,"hooks/didChange"),new IpcNotification(tU,"agents/canInstallClaudeHook/didChange"),new IpcCommand(tU,"graphWalkthrough/banner/close"),new IpcNotification(tU,"graphWalkthrough/banner/didChange"),new IpcNotification(tU,"graphWalkthrough/complete/didChange"),new IpcNotification(tU,"graphWalkthrough/started/didChange"),new IpcNotification(tU,"visualizationsButtonCallout/didChange"),new IpcCommand(tU,"visualizationsButtonCallout/dismiss"),new IpcNotification(tU,"sidebar/activePanel/didRequest"),new IpcNotification(tU,"action/didRequest"),new IpcCommand(tU,"track/overview/shown"),new IpcCommand(tU,"track/scope/changed"),new IpcCommand(tU,"track/details/reviewMode"),new IpcCommand(tU,"track/details/composeMode"),new IpcCommand(tU,"track/details/resolveMode"),new IpcCommand(tU,"track/details/compareMode"),new IpcCommand(tU,"track/details/wipShown"),new IpcNotification(tU,"branchState/didChange"),new IpcNotification(tU,"refs/didChangeMetadata"),new IpcNotification(tU,"columns/didChange"),new IpcNotification(tU,"scrollMarkers/didChange"),new IpcNotification(tU,"refs/didChangeVisibility"),new IpcNotification(tU,"refs/didChangePinned"),new IpcNotification(tU,"rows/didChange"),new IpcNotification(tU,"rows/stats/didChange"),new IpcNotification(tU,"selection/didChange"),new IpcNotification(tU,"compareMode/didRequestOpen"),new IpcNotification(tU,"timeline/didRequestOpenScope"),new IpcNotification(tU,"search/didRequest"),new IpcNotification(tU,"workingTree/didChange"),new IpcNotification(tU,"didSearch"),new IpcNotification(tU,"didFetch"),new IpcNotification(tU,"scope/anchors/didInvalidate"),new IpcNotification(tU,"treemap/didInvalidate"),new IpcNotification(tU,"featurePreview/didStart");let tG=new IpcNotification("timeline","didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(tq.is(e)||tB.is(e)||tG.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let r=`${e}|${t}`,o=this._promos.get(r);return null==o&&(o=this.ipc.sendRequest(tu,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(r,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(tg,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};(eP||(eP={})).on=function(e,t,r,o){let i=!1;if("string"==typeof e){let s=function(t){let o=t?.target?.closest(e);null!=o&&r(t,o)};return document.addEventListener(t,s,o??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,s,o??!0))}}}let s=function(e){r(e,this)};return e.addEventListener(t,s,o??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,s,o??!1))}}};var tW=Uint8Array,tH=Uint16Array,tF=Int32Array,tV=new tW([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tZ=new tW([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tK=new tW([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tY=function(e,t){for(var r=new tH(31),o=0;o<31;++o)r[o]=t+=1<<e[o-1];for(var i=new tF(r[30]),o=1;o<30;++o)for(var s=r[o];s<r[o+1];++s)i[s]=s-r[o]<<5|o;return{b:r,r:i}},tJ=tY(tV,2),tQ=tJ.b,tX=tJ.r;tQ[28]=258,tX[258]=28;var t1=tY(tZ,0),t0=t1.b;t1.r;for(var t2=new tH(32768),t3=0;t3<32768;++t3){var t5=(43690&t3)>>1|(21845&t3)<<1;t5=(61680&(t5=(52428&t5)>>2|(13107&t5)<<2))>>4|(3855&t5)<<4,t2[t3]=((65280&t5)>>8|(255&t5)<<8)>>1}for(var t4=function(e,t,r){for(var o,i=e.length,s=0,a=new tH(t);s<i;++s)e[s]&&++a[e[s]-1];var c=new tH(t);for(s=1;s<t;++s)c[s]=c[s-1]+a[s-1]<<1;if(r){o=new tH(1<<t);var h=15-t;for(s=0;s<i;++s)if(e[s])for(var p=s<<4|e[s],u=t-e[s],g=c[e[s]-1]++<<u,f=g|(1<<u)-1;g<=f;++g)o[t2[g]>>h]=p}else for(o=new tH(i),s=0;s<i;++s)e[s]&&(o[s]=t2[c[e[s]-1]++]>>15-e[s]);return o},t6=new tW(288),t3=0;t3<144;++t3)t6[t3]=8;for(var t3=144;t3<256;++t3)t6[t3]=9;for(var t3=256;t3<280;++t3)t6[t3]=7;for(var t3=280;t3<288;++t3)t6[t3]=8;for(var t7=new tW(32),t3=0;t3<32;++t3)t7[t3]=5;var t8=t4(t6,9,1),t9=t4(t7,5,1),re=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},rt=function(e,t,r){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(7&t)&r},rr=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},ro=function(e,t,r){return(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length),new tW(e.subarray(t,r))},ri=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],rn=function(e,t,r){var o=Error(t||ri[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,rn),!r)throw o;return o},rs=function(e,t,r,o){var i=e.length,s=o?o.length:0;if(!i||t.f&&!t.l)return r||new tW(0);var a=!r,c=a||2!=t.i,h=t.i;a&&(r=new tW(3*i));var p=function(e){var t=r.length;if(e>t){var o=new tW(Math.max(2*t,e));o.set(r),r=o}},u=t.f||0,g=t.p||0,f=t.b||0,m=t.l,b=t.d,v=t.m,w=t.n,x=8*i;do{if(!m){u=rt(e,g,1);var C=rt(e,g+1,3);if(g+=3,C)if(1==C)m=t8,b=t9,v=9,w=5;else if(2==C){var _=rt(e,g,31)+257,$=rt(e,g+10,15)+4,S=_+rt(e,g+5,31)+1;g+=14;for(var A=new tW(S),P=new tW(19),E=0;E<$;++E)P[tK[E]]=rt(e,g+3*E,7);g+=3*$;for(var T=re(P),O=(1<<T)-1,M=t4(P,T,1),E=0;E<S;){var N=M[rt(e,g,O)];g+=15&N;var D=N>>4;if(D<16)A[E++]=D;else{var j=0,q=0;for(16==D?(q=3+rt(e,g,3),g+=2,j=A[E-1]):17==D?(q=3+rt(e,g,7),g+=3):18==D&&(q=11+rt(e,g,127),g+=7);q--;)A[E++]=j}}var U=A.subarray(0,_),B=A.subarray(_);v=re(U),w=re(B),m=t4(U,v,1),b=t4(B,w,1)}else rn(1);else{var D=((g+7)/8|0)+4,G=e[D-4]|e[D-3]<<8,W=D+G;if(W>i){h&&rn(0);break}c&&p(f+G),r.set(e.subarray(D,W),f),t.b=f+=G,t.p=g=8*W,t.f=u;continue}if(g>x){h&&rn(0);break}}c&&p(f+131072);for(var F=(1<<v)-1,V=(1<<w)-1,K=g;;K=g){var j=m[rr(e,g)&F],Y=j>>4;if((g+=15&j)>x){h&&rn(0);break}if(j||rn(2),Y<256)r[f++]=Y;else if(256==Y){K=g,m=null;break}else{var J=Y-254;if(Y>264){var E=Y-257,Q=tV[E];J=rt(e,g,(1<<Q)-1)+tQ[E],g+=Q}var X=b[rr(e,g)&V],ee=X>>4;X||rn(3),g+=15&X;var B=t0[ee];if(ee>3){var Q=tZ[ee];B+=rr(e,g)&(1<<Q)-1,g+=Q}if(g>x){h&&rn(0);break}c&&p(f+131072);var et=f+J;if(f<B){var er=s-B,eo=Math.min(B,et);for(er+f<0&&rn(3);f<eo;++f)r[f]=o[er+f]}for(;f<et;++f)r[f]=r[f-B]}}t.l=m,t.p=K,t.b=f,t.f=u,m&&(u=1,t.m=v,t.d=b,t.n=w)}while(!u)return f!=r.length&&a?ro(r,0,f):r.subarray(0,f)},ra=new tW(0),rl="u">typeof TextDecoder&&new TextDecoder;try{rl.decode(ra,{stream:!0})}catch{}var rc=function(e){for(var t="",r=0;;){var o=e[r++],i=(o>127)+(o>223)+(o>239);if(r+i>e.length)return{s:t,r:ro(e,r-1)};i?3==i?t+=String.fromCharCode(55296|(o=((15&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536)>>10,56320|1023&o):1&i?t+=String.fromCharCode((31&o)<<6|63&e[r++]):t+=String.fromCharCode((15&o)<<12|(63&e[r++])<<6|63&e[r++]):t+=String.fromCharCode(o)}};function rd(e,t){if(t){for(var r="",o=0;o<e.length;o+=16384)r+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return r}if(rl)return rl.decode(e);var i=rc(e),s=i.s,r=i.r;return r.length&&rn(8),s}"function"==typeof queueMicrotask&&queueMicrotask;let rh=/\(([\s\S]*)\)/,rp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ru=/\s?=.*$/;function rg(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function rf(e){var t,r;let o,i,s,a,c,h,p,u,g;return t="debug",c=!1,h=!0,null!=(r=e)&&({args:o,when:i,exit:s,prefix:a,onlyExit:c=!1,timing:h=!0}=r),p="object"==typeof h?h.warnAfter:1500,u=!1!==h||"object"==typeof c&&c.after>0,g="trace"===t?tC.trace:"debug"===t?tC.debug:tC.info,(e,r,h)=>{let f,m;if("function"==typeof h.value?(f=h.value,m="value"):"function"==typeof h.get&&(f=h.get,m="get"),null==f||null==m)throw Error("Not supported");let b=null==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),r=(t=(t=t.replace(rp,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");r=r>=0?r+1:0,o=o>0?o:t.indexOf("="),t=t.slice(r,o),t=`(${t})`;let i=rh.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(ru,"")):[]}(f):[];h[m]=function(...e){let h;if(!tC.enabled()||null!=i&&!i.apply(this,e))return f.apply(this,e);let m=tC.enabled(t),v=tz(),w=v?.scopeId,x=tR.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let r=t?.name??"",o=r.indexOf("_");-1!==o&&(r=r.substring(o+1));let i=t;for(;null!=i;){let t=t_.get(i);if(null!=t)return t(e,r);i=Object.getPrototypeOf(i)}return r}(this):void 0,_=C?`${tN(x,w)} ${C}.${r}`:`${tN(x,w)} ${r}`;null!=a&&(_=a({id:x,instance:this,instanceName:C??"",name:r,prefix:_},...e));let $=tO(x,w,_),S=!1,A=()=>(S||(S=!0,h=function(e,t,r){if(!1===e||!t.length)return;if("function"==typeof e){let r=e(...t);if(!1===r)return;let o="";for(let[e,t]of Object.entries(r))o.length&&(o+=", "),o+=`${e}=${tC.toLoggable(t,e)}`;return o||void 0}let o="",i=-1;for(let e of t){let t=r[++i];o.length&&(o+=", "),o+=t?`${t}=${tC.toLoggable(e,t)}`:tC.toLoggable(e)}return o||void 0}(o,e,b)),h);if(!c&&m){let e=A();g.call(tC,e?`${_}(${e})`:_)}if(c||u||null!=s){let t=u?tI():void 0,r=e=>{let r=void 0!==t?` [${tT(t)}ms]`:"",o=$.getExitInfo();if(c){let t=A();tC.error(e,t?`${_}(${t})`:_,o?.details?`failed${o.details}${r}`:`failed${r}`)}else tC.error(e,_,o?.details?`failed${o.details}${r}`:`failed${r}`)},o=e=>{let r,o,i,a;null!=t?(r=tT(t))>p?(o=tC.warn,i=` [*${r}ms] (slow)`):(o=g,i=` [${r}ms]`):(i="",o=g);let h=$.getExitInfo();if(null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tC.toLoggable(e)}`);else h?.failed?(a=h.failed,o=(e,...t)=>tC.error(null,e,...t)):a="completed";if(m||o!==g){let e=A();c?(!0===c||0===c.after||r>c.after)&&o.call(tC,e?`${_}(${e}) ${a}${h?.details||""}${i}`:`${_} ${a}${h?.details||""}${i}`):o.call(tC,e?`${_}(${e}) ${a}${h?.details||""}${i}`:`${_} ${a}${h?.details||""}${i}`)}};return tA($,()=>{let t;try{t=f.apply(this,e)}catch(e){throw r(e),e}return null!=t&&rg(t)?t.then(o,r).catch(()=>{}):o(t),t})}return tA($,()=>f.apply(this,e))}}}globalThis.scheduler?.yield?.bind(globalThis.scheduler),Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...r){let o;this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:tD(e??"",!1,t?.scopeLabel);let i=t?.log;if(o=null==i||!0===i?{}:!1===i||i.onlyExit?void 0:i,this.logLevel=("object"==typeof i?i.level:void 0)??"debug",this.logProvider=t?.provider??t$,this._time=tI(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){return tT(this._time)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=tI(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let r=tT(this._time),o=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${o?`${o} `:""}[${r}ms]${e?.suffix??""}`)}};(()=>{let e;var t,r,o={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,o="",i=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)r=e.charCodeAt(c);else{if(47===r)break;r=47}if(47===r){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(o.length<2||2!==i||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var h=o.lastIndexOf("/");if(h!==o.length-1){-1===h?(o="",i=0):i=(o=o.slice(0,h)).length-1-o.lastIndexOf("/"),s=c,a=0;continue}}else if(2===o.length||1===o.length){o="",i=0,s=c,a=0;continue}}t&&(o.length>0?o+="/..":o="..",i=2)}else o.length>0?o+="/"+e.slice(s+1,c):o=e.slice(s+1,c),i=c-s-1;s=c,a=0}else 46===r&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var e,o,i="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===o&&(o=process.cwd()),e=o),t(e),0!==e.length&&(i=e+"/"+i,s=47===e.charCodeAt(0));return i=r(i,!s),s?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!o)).length||o||(e="."),e.length>0&&i&&(e+="/"),o?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":o.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=o.resolve(e))===(r=o.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var s=e.length,a=s-i,c=1;c<r.length&&47===r.charCodeAt(c);++c);for(var h=r.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===r.charCodeAt(c+g))return r.slice(c+g+1);if(0===g)return r.slice(c+g)}else a>p&&(47===e.charCodeAt(i+g)?u=g:0===g&&(u=0));break}var f=e.charCodeAt(i+g);if(f!==r.charCodeAt(c+g))break;47===f&&(u=g)}var m="";for(g=i+u+1;g<=s;++g)g!==s&&47!==e.charCodeAt(g)||(0===m.length?m+="..":m+="/..");return m.length>0?m+r.slice(c+u):(c+=u,47===r.charCodeAt(c)&&++c,r.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),o=47===r,i=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!s){i=a;break}}else s=!1;return -1===i?o?"/":".":o&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var o,i=0,s=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var c=r.length-1,h=-1;for(o=e.length-1;o>=0;--o){var p=e.charCodeAt(o);if(47===p){if(!a){i=o+1;break}}else -1===h&&(a=!1,h=o+1),c>=0&&(p===r.charCodeAt(c)?-1==--c&&(s=o):(c=-1,s=h))}return i===s?s=h:-1===s&&(s=e.length),e.slice(i,s)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!a){i=o+1;break}}else -1===s&&(a=!1,s=o+1);return -1===s?"":e.slice(i,s)},extname:function(e){t(e);for(var r=-1,o=0,i=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===i&&(s=!1,i=c+1),46===h?-1===r?r=c:1!==a&&(a=1):-1!==r&&(a=-1);else if(!s){o=c+1;break}}return -1===r||-1===i||0===a||1===a&&r===i-1&&r===o+1?"":e.slice(r,i)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var o,i=e.charCodeAt(0),s=47===i;s?(r.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,g=0;u>=o;--u)if(47!==(i=e.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===i?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(r.base=r.name=0===c&&s?e.slice(1,h):e.slice(c,h)):(0===c&&s?(r.name=e.slice(1,a),r.base=e.slice(1,h)):(r.name=e.slice(c,a),r.base=e.slice(c,h)),r.ext=e.slice(a,h)),c>0?r.dir=e.slice(0,c-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e](r,r.exports,s),r.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(s.r(a),s.d(a,{URI:()=>l,Utils:()=>r}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let g=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,r,o,i,s=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||s?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,r||""),this.query=o||"",this.fragment=i||"",u(this,s))}get fsPath(){return w(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:r,path:o,query:i,fragment:s}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===o?o=this.path:null===o&&(o=""),void 0===i?i=this.query:null===i&&(i=""),void 0===s?s=this.fragment:null===s&&(s=""),t===this.scheme&&r===this.authority&&o===this.path&&i===this.query&&s===this.fragment?this:new d(t,r,o,i,s)}static parse(e,t=!1){let r=g.exec(e);return r?new d(r[2]||"",_(r[4]||""),_(r[5]||""),_(r[7]||""),_(r[9]||""),t):new d("","","","","")}static file(t){let r="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(r=t.substring(2),t="/"):(r=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",r,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return x(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===f?e.fsPath:null,t}}return e}};let f=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=w(this,!1)),this._fsPath}toString(e=!1){return e?x(this,!0):(this._formatted||(this._formatted=x(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=f),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let m={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function b(e,t,r){let o,i=-1;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||r&&91===a||r&&93===a||r&&58===a)-1!==i&&(o+=encodeURIComponent(e.substring(i,s)),i=-1),void 0!==o&&(o+=e.charAt(s));else{void 0===o&&(o=e.substr(0,s));let t=m[a];void 0!==t?(-1!==i&&(o+=encodeURIComponent(e.substring(i,s)),i=-1),o+=t):-1===i&&(i=s)}}return -1!==i&&(o+=encodeURIComponent(e.substring(i))),void 0!==o?o:e}function v(e){let t;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);35===o||63===o?(void 0===t&&(t=e.substr(0,r)),t+=m[o]):void 0!==t&&(t+=e[r])}return void 0!==t?t:e}function w(t,r){let o;return o=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?r?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(o=o.replace(/\//g,"\\")),o}function x(e,t){let r=t?v:b,o="",{scheme:i,authority:s,path:a,query:c,fragment:h}=e;if(i&&(o+=i,o+=":"),(s||"file"===i)&&(o+="/",o+="/"),s){let e=s.indexOf("@");if(-1!==e){let t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.lastIndexOf(":"))?o+=r(t,!1,!1):(o+=r(t.substr(0,e),!1,!1),o+=":",o+=r(t.substr(e+1),!1,!0)),o+="@"}-1===(e=(s=s.toLowerCase()).lastIndexOf(":"))?o+=r(s,!1,!0):(o+=r(s.substr(0,e),!1,!0),o+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}o+=r(a,!0,!1)}return c&&(o+="?",o+=r(c,!1,!1)),h&&(o+="#",o+=t?h:b(h,!1,!1)),o}let C=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function _(e){return e.match(C)?e.replace(C,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var $=s(975);let S=$.posix||$;(t=r||(r={})).joinPath=function(e,...t){return e.with({path:S.join(e.path,...t)})},t.resolvePath=function(e,...t){let r=e.path,o=!1;"/"!==r[0]&&(r="/"+r,o=!0);let i=S.resolve(r,...t);return o&&"/"===i[0]&&!e.authority&&(i=i.substring(1)),e.with({path:i})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=S.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return S.basename(e.path)},t.extname=function(e){return S.extname(e.path)},eE=a})();let{URI:rm,Utils:rb}=eE;function rv(e,t){return JSON.parse(e,(e,r)=>(function(e,t){let r=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(e);if(null==r)return e;switch(r.__ipc){case"date":return new Date(r.value);case"promise":return t(r.value);case"uri":return rm.revive(r.value)}})(r,t))}let rw="__supertalk_rpc__";new TextEncoder,new TextDecoder;let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return this._event??=(e,t,r)=>{this.listeners??=new LinkedList;let o=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(r)&&r.push(i),i},this._event}fire(e){if(null!=this.listeners){this._deliveryQueue??=new LinkedList;for(let t=this.listeners.iterator(),r=t.next();!r.done;r=t.next())this._deliveryQueue.push([r.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let ry={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let r=new events_Node(e);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(t){let e=this._last;this._last=r,r.prev=e,e.next=r}else{let e=this._first;this._first=r,r.next=e,e.prev=r}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?ry:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var rx=Object.defineProperty,rk=Object.getOwnPropertyDescriptor,rC=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),r_=e=>{throw TypeError(e)},r$=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?rk(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&rx(t,r,s),s};function rS(){return t??=null!=r?r():acquireVsCodeApi()}let rA=tL();function rP(){return`webview:${rA.next()}`}let rE=`wv-${Math.random().toString(36).slice(2,10)}`,rL=Date.now(),rI=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=rS(),this._disposable=eP.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(t){var r,o,i,s,a,c,h,p,u,g=[];try{if(i=t.data,"object"==typeof i&&null!==i&&rw in i&&!0===i[rw])return;let a=t.data,c=((e,t,r)=>{if(null!=t){var o,i;"object"!=typeof t&&"function"!=typeof t&&r_("Object expected"),r&&(o=t[rC("asyncDispose")]),void 0===o&&(o=t[rC("dispose")],r&&(i=o)),"function"!=typeof o&&r_("Object not disposable"),i&&(o=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.push([r,o,t])}else r&&e.push([r]);return t})(g,function(t,r,o){var i,s;let a,c,h;if(!tC.enabled())return;let p=(i=o?.scope??!0,s=o?.scopeLabel,c=tP(),e=(h=tD(t,i,s)).scopeId,tS.set(h.scopeId,h),h[Symbol.dispose]=()=>{let t;t=h?.scopeId??e,null!=t&&tS.delete(t),e=c?.scopeId},h);if(!r)return p;let u="debug",g=!1;"object"==typeof r&&(u=r.level??u,a=r.message,g=!0===r.onlyExit);let f=tI();g||tj(p,u,a??"");let m=p[Symbol.dispose];return p[Symbol.dispose]=()=>{let e=tT(f),t=` [${e}ms]`,r=p.getExitInfo(),o=r.failed??"completed";null!=r.failed?tC.error(null,p,`${o}${r.details??""}${t}`):tj(p,u,`${o}${r.details??""}${t}`),m()},p}(`(e=${a.id}|${a.method})`,void 0,{scope:tz()})),h=function(e,t,...r){let o=("object"==typeof t?.log?t.log.level:void 0)??"info";return(t?.provider??t$).enabled(o)?new Stopwatch(e,t,...r):void 0}(c,{log:{onlyExit:!0,level:"debug"}});if(a.compressed&&a.params instanceof Uint8Array){if("deflate"===a.compressed)try{a.params=rd((s=a.params,rs(s,{i:2},void 0,void 0)))}catch(e){a.params=rd(a.params)}else a.params=rd(a.params);h?.restart({message:`\u2022 decompressed (${a.compressed}) serialized params`})}if("string"==typeof a.params?(a.params=rv(a.params,e=>this.getResponsePromise(e.method,e.id)),h?.stop({message:"• deserialized params"})):null==a.params?h?.stop({message:"• no params"}):h?.stop({message:"• invalid params"}),c?.addExitInfo(`ipc (host -> webview) duration=${Date.now()-a.timestamp}ms`),null!=a.completionId){let e=(r=a.method,o=a.completionId,`${r}|${o}`);this._pendingHandlers.get(e)?.(a);return}this._onReceiveMessage.fire(a)}catch(e){var f=e,m=!0}finally{a=f,c=m,h="function"==typeof SuppressedError?SuppressedError:function(e,t,r,o){return(o=Error(r)).name="SuppressedError",o.error=e,o.suppressed=t,o},p=e=>a=c?new h(e,a,"An error was suppressed during disposal"):(c=!0,e),(u=e=>{for(;e=g.pop();)try{var t=e[1]&&e[1].call(e[2]);if(e[0])return Promise.resolve(t).then(u,e=>(p(e),u()))}catch(e){p(e)}if(c)throw a})()}}deserializeIpcData(e){return rv(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let r=rP();this.postMessage({id:r,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let r=rP(),o=this.getResponsePromise(e.response.method,r);return this.postMessage({id:r,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:r}),o}getResponsePromise(e,t){return new Promise((r,o)=>{var i,s;let a,c=(i=e,s=t,`${i}|${s}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(tC.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===tf.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>r(t.value))}else queueMicrotask(()=>r(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function rT(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}r$([rf({args:e=>({e:`${e.data.id}|${e.data.method}`})})],rI.prototype,"onMessageReceived",1),r$([rf({args:e=>({commandType:e.method})})],rI.prototype,"sendCommand",1),r$([rf({args:e=>({requestType:e.method})})],rI.prototype,"sendRequest",1),r$([rf({args:e=>({e:`${e.id}, method=${e.method}`})})],rI.prototype,"postMessage",1),rI=r$([(e_=e=>`${e.appName}(HostIpc)`,e=>void t_.set(e,e_))],rI);let RGBA=class RGBA{constructor(e,t,r,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,r)),this.a=rT(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,r,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=rT(Math.max(Math.min(1,t),0),3),this.l=rT(Math.max(Math.min(1,r),0),3),this.a=rT(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,i=e.a,s=Math.max(t,r,o),a=Math.min(t,r,o),c=0,h=0,p=(a+s)/2,u=s-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),s){case t:c=(r-o)/u+6*(r<o);break;case r:c=(o-t)/u+2;break;case o:c=(t-r)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,i)}static _hue2rgb(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}static toRGBA(e){let t,r,o,i=e.h/360,{s,l:a,a:c}=e;if(0===s)t=r=o=a;else{let e=a<.5?a*(1+s):a+s-a*s,c=2*a-e;t=HSLA._hue2rgb(c,e,i+1/3),r=HSLA._hue2rgb(c,e,i),o=HSLA._hue2rgb(c,e,i-1/3)}return new RGBA(Math.round(255*t),Math.round(255*r),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(e,t,r,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=rT(Math.max(Math.min(1,t),0),3),this.v=rT(Math.max(Math.min(1,r),0),3),this.a=rT(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,i=Math.max(t,r,o),s=i-Math.min(t,r,o);return new HSVA(Math.round(60*(0===s?0:i===t?((r-o)/s%6+6)%6:i===r?(o-t)/s+2:(t-r)/s+4)),0===i?0:s/i,i,e.a)}static toRGBA(e){let{h:t,s:r,v:o,a:i}=e,s=o*r,a=s*(1-Math.abs(t/60%2-1)),c=o-s,[h,p,u]=[0,0,0];return t<60?(h=s,p=a):t<120?(h=a,p=s):t<180?(p=s,u=a):t<240?(p=a,u=s):t<300?(h=a,u=s):t<=360&&(h=s,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),i)}};function rR(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(rR(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return rT(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),r=e.getRelativeLuminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:r,b:o,a:i}=this.rgba;return new Color(new RGBA(t,r,o,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,r=this.rgba.a,o=t.a,i=r+o*(1-r);return i<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*r/i+t.r*o*(1-r)/i,this.rgba.g*r/i+t.g*o*(1-r)/i,this.rgba.b*r/i+t.b*o*(1-r)/i,i))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:r,b:o,a:i}=this.rgba;return new Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-r),e.rgba.b-i*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let r=1-e.rgba.a;return new Color(new RGBA(r*t.rgba.r+e.rgba.a*e.rgba.r,r*t.rgba.g+e.rgba.a*e.rgba.g,r*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${rO(e.rgba.r)}${rO(e.rgba.g)}${rO(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,r){if(e.isLighterThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),i=t.getRelativeLuminance();return r=r*(i-o)/i,e.lighten(r)}static getDarkerColor(e,t,r){if(e.isDarkerThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),i=t.getRelativeLuminance();return r=r*(o-i)/o,e.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function rO(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let rM=new Emitter,rN=rM.event;function rz(e){let t=document.documentElement,r=window.getComputedStyle(t),o=document.body.classList,i=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),s=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=rR("--vscode-editor-background",r),c=rR("--vscode-editor-foreground",r);return c||(c=rR("--vscode-foreground",r)),{colors:{background:a,foreground:c},computedStyle:r,isLightTheme:i,isHighContrastTheme:s,isInitializing:null==e}}var rD=Object.defineProperty,rj=Object.getOwnPropertyDescriptor,rq=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?rj(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&rD(t,r,s),s};let GlWebviewApp=class GlWebviewApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[]}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}initWebviewContext(e){let t=JSON.parse(td(e)),r=t.webviewId,o=t.webviewInstanceId;this._webview={webviewId:r,webviewInstanceId:o,createCommandLink:(e,t)=>{var i;return e.endsWith(":")&&(e=`${e}${r.split(".").at(-1)}`),i=e,`command:${i}?${encodeURIComponent(JSON.stringify({webview:r,webviewInstance:o,...t}))}`}}}connectedCallback(){let e,t,r,o,i;super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.debug("connected"),this._ipc=new rI(this.name),this.disposables.push(((e=new MutationObserver(e=>{rM.fire(rz(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),null!=this.onThemeUpdated&&(this.onThemeUpdated(rz()),this.disposables.push(rN(this.onThemeUpdated,this))),this.disposables.push(this._ipc.onReceiveMessage(e=>{switch(!0){case tm.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case tb.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._focusTracker=(o=0,i=function(e){let t,r,o,i,s,a,c,h,p,u,g=0,f="leading"===(a??="trailing")||"both"===a,m="trailing"===a||"both"===a;function b(){if(null!=t){g=Date.now();let r=t,i=u;return u=void 0,t=void 0,o=e.apply(i,r)}}function v(){null!=i&&(clearTimeout(i),i=void 0)}function w(){null!=s&&(clearTimeout(s),s=void 0)}function x(){v(),w(),u=void 0,t=void 0,r=void 0,g=0}function C(...e){if(h?.aborted)return;let a=Date.now();null!=p&&null!=t?t=p(t,e):(u=this,t=e);let w=null==i&&null==s;r=a,v();let _=Date.now();if(r=_,i=setTimeout(()=>{i=void 0,function e(){let t,o,s=Date.now();if(t=s-(r??0),o=s-g,null==r||t>=150||t<0||null!=c&&o>=c){m&&b(),x();return}i=setTimeout(()=>{i=void 0,e()},150-(s-(r??0)))}()},150),null!=c&&!s){0===g&&(g=_);let e=c-(_-g);e>0?s=setTimeout(()=>{s=void 0,m&&null!=t&&b(),g=Date.now()},e):(m&&null!=t&&b(),x())}return f&&w?b():o}return C.cancel=x,C.flush=function(){return v(),w(),b()},C.pending=function(){return null!=i||null!=s},h?.addEventListener("abort",x,{once:!0}),C}(e=>{let t=`webview:${++o}`,r=document.hasFocus();e.focused=r,r||(e.inputFocused=!1),rS().postMessage({id:t,scope:tp.scope,method:tp.method,params:e,compressed:!1,timestamp:Date.now()})}),{onFocusIn:e=>{let o=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==t||r!==o)&&(t=!0,r=o,i({focused:!0,inputFocused:o}))},onFocusOut:e=>{i({focused:!1,inputFocused:!1})}}),document.addEventListener("focusin",this._focusTracker.onFocusIn),document.addEventListener("focusout",this._focusTracker.onFocusOut),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.debug("disconnected"),null!=this._focusTracker&&(document.removeEventListener("focusin",this._focusTracker.onFocusIn),document.removeEventListener("focusout",this._focusTracker.onFocusOut),this._focusTracker=void 0),this.disposables.forEach(e=>e.dispose())}render(){return ei`<slot></slot>`}};rq([ev({type:String})],GlWebviewApp.prototype,"name",2),rq([ev({type:String})],GlWebviewApp.prototype,"placement",2),rq([ek({context:"ipc"})],GlWebviewApp.prototype,"_ipc",2),rq([ek({context:"logger"})],GlWebviewApp.prototype,"_logger",2),rq([ek({context:"promos"})],GlWebviewApp.prototype,"_promos",2),rq([ek({context:"telemetry"})],GlWebviewApp.prototype,"_telemetry",2),rq([ek({context:"webview"})],GlWebviewApp.prototype,"_webview",2),GlWebviewApp[e4];var rU=Object.defineProperty,rB=Object.getOwnPropertyDescriptor;let GlAppHost=class GlAppHost extends GlWebviewApp{get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback();let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger),this.initWebviewContext(e),this.disposables.push(this._stateProvider)}};((e,t,r,o)=>{for(var i,s=o>1?void 0:o?rB(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&rU(t,r,s)})([ev({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let rG=u`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;u`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${rG}
	}
`;let rW=u`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,rH=u`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;u`
	:focus-visible {
		${rW}
	}
`;let rF=u`
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
`;u`
	* {
		box-sizing: border-box;
	}
`,u`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${rW}
	}
	a:hover {
		text-decoration: underline;
	}
`;let rV=u`
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
`;u`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`,u`
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
`,u`
	:host {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}
`,u`
	:host {
		--gl-metadata-bar-bg: color-mix(in srgb, var(--color-background) 95%, var(--color-foreground) 5%);
		--gl-metadata-bar-border: var(--vscode-sideBarSectionHeader-border, var(--color-foreground--25));
		--gl-metadata-bar-min-height: 2.94rem;
	}
`;let rZ="welcome";new IpcCommand(rZ,"dismiss");let rK=new IpcNotification(rZ,"subscription/didChange"),rY=new IpcNotification(rZ,"walkthroughProgress/didChange"),rJ=new IpcNotification(rZ,"graphWalkthroughProgress/didChange"),rQ=new IpcNotification(rZ,"walkthroughMode/didSwitch"),rX=new IpcNotification(rZ,"walkthrough/didFocus");let StateProviderBase=class StateProviderBase{constructor(e,t,r,o){this.host=e,this.ipc=r,this.logger=o,this._state=this.ipc.deserializeIpcData(td(t)),this.logger?.debug(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){let e={clientId:rE,clientLoadedAt:rL};if(this.deferBootstrap){let t=await this.ipc.sendRequest(th,{bootstrap:!0,...e});if(null!=t.state){let e=rg(t.state)?await t.state:t.state;this.onDeferredBootstrapStateReceived(e)}}else this.ipc.sendRequest(th,{bootstrap:!1,...e})}onDeferredBootstrapStateReceived(e){this._state={...e,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};let WelcomeStateProvider=class WelcomeStateProvider extends StateProviderBase{createContextProvider(e){return new context_provider_i(this.host,{context:"welcome-state",initialValue:e})}onMessageReceived(e){switch(!0){case rK.is(e):this._state.plusState=e.params.plusState,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case rY.is(e):this._state.walkthroughProgress=e.params.walkthroughProgress,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case rJ.is(e):this._state.graphWalkthroughProgress=e.params.graphWalkthroughProgress,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case rQ.is(e):this._state.mode=e.params.mode,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case rX.is(e):this.host.dispatchEvent(new CustomEvent("gl-walkthrough-focus-command",{bubbles:!0,composed:!0}))}}};let r1=u`
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
`;Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]),Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let r0="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",r2=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${r0}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${r0}`,graph:`https://gitkraken.com/solutions/commit-graph?${r0}`,launchpad:`https://gitkraken.com/solutions/launchpad?${r0}`,platform:`https://gitkraken.com/devex?${r0}`,pricing:`https://gitkraken.com/gitlens/pricing?${r0}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${r0}`,security:`https://help.gitkraken.com/gitlens/security?${r0}`,workspaces:`https://gitkraken.com/solutions/workspaces?${r0}`,cli:`https://gitkraken.com/cli?${r0}`,browserExtension:`https://gitkraken.com/browser-extension?${r0}`,desktop:`https://gitkraken.com/git-client?${r0}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${r0}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${r0}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${r0}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${r0}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${r0}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${r0}`,helpCenterAiHooks:`https://help.gitkraken.com/cli/cli-home/?${r0}#how-to-uninstall-gitkraken-cli-ai-hooks`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${r0}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${r0}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${r0}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${r0}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${r0}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${r0}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${r0}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${r0}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${r0}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${r0}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${r0}`});var r3=((e$=r3||{})[e$.VerificationRequired=-1]="VerificationRequired",e$[e$.Community=0]="Community",e$[e$.DeprecatedPreview=1]="DeprecatedPreview",e$[e$.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",e$[e$.Trial=3]="Trial",e$[e$.TrialExpired=4]="TrialExpired",e$[e$.TrialReactivationEligible=5]="TrialReactivationEligible",e$[e$.Paid=6]="Paid",e$);function r5(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}let r4=u`
	:host {
		--accent-color: #cb64ff;
		--text-color: var(--vscode-sideBar-foreground);
		--dimmed-text-color: var(--vscode-descriptionForeground);
		--heading-color: var(--vscode-tab-activeForeground);
		--em-color: var(--vscode-sideBar-foreground);
		--link-color: var(--vscode-textLink-foreground);
		--card-background: color-mix(in srgb, var(--vscode-descriptionForeground) 13%, var(--color-view-background));

		--hero-gradient: radial-gradient(76.32% 76.32% at 50% 7.24%, #7b00ff 29.72%, rgba(255, 0, 242, 0) 100%);
		--trial-button-gradient: linear-gradient(90deg, #7900c9 0%, #196fff 100%);
		--trial-button-border: none;
		--trial-button-text-color: #fff;
	}

	:host-context(.vscode-light) {
		--hero-gradient: radial-gradient(62.4% 62.4% at 50% 7.24%, #7b00ff 29.72%, rgba(255, 0, 242, 0) 100%);
	}

	:host-context(.vscode-dark) {
		--hero-gradient: radial-gradient(76.32% 76.32% at 50% 7.24%, #7b00ff 29.72%, rgba(255, 0, 242, 0) 100%);
	}

	:host-context(.vscode-high-contrast) {
		--hero-gradient: transparent;
		--trial-button-gradient: var(--color-button-background);
		--trial-button-border: 1px solid var(--vscode-button-border);
		--trial-button-text-color: var(--color-button-foreground);
	}

	:host-context(.vscode-high-contrast-light) {
		--accent-color: #500070;
	}
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) {
		--accent-color: #ffc0ff;
	}
`,r6=u`
	:host {
		font-size: var(--vscode-editor-font-size);

		--h1-font-size: 1.7em;
		--p-font-size: 1.23em;
		--card-font-size: 1em;
	}

	@media (max-width: 640px) {
		:host {
			font-size: var(--vscode-editor-font-size);
			--h1-font-size: 1.2em;
			--p-font-size: 1em;
			--card-font-size: 1em;
		}
	}

	@media (max-width: 300px) {
		:host {
			font-size: calc(var(--vscode-editor-font-size) * 0.8);
		}
	}
`,r7=u`
	:host {
		--page-margin-left: 0px;
		--page-margin-right: 0px;
		display: block;
		height: 100%;
	}

	.welcome {
		max-height: 100%;
		overflow: auto;
		position: relative;
	}
`,r8=u`
	.welcome::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-40%);
		z-index: -1;

		background: var(--hero-gradient);
		border-radius: 100%;
		opacity: 0.25;
		filter: blur(53px);

		width: 620px;
		height: 517px;
		max-width: 100%;
	}

	@media (max-width: 400px) {
		.welcome::before {
			height: 273px;
		}
	}
`,r9=u`
	.section {
		display: flex;
		flex-flow: column;
		justify-content: center;
		text-align: center;
		gap: 0.7em;
		margin: 0 auto;
		padding: 1em;
		max-width: 620px;
	}
	.section.section--centered {
		align-items: center;
	}
	.section h1 {
		color: var(--heading-color);
	}
	.section h2 {
		color: var(--heading-color);
		font-weight: normal;
		font-size: var(--p-font-size);
	}

	.section p {
		color: var(--text-color);
		font-size: var(--p-font-size);
	}
	.section > p {
		max-width: 30em;
	}
	.section > p:first-child {
		margin-top: 0;
	}
	.section > p:last-child {
		margin-bottom: 0;
	}

	.section .accent {
		color: var(--accent-color);
	}
	.section a {
		color: var(--link-color);
		text-decoration: none;
	}

	.section ul {
		color: var(--text-color);
		font-size: var(--p-font-size);
	}

	.section gl-button.start-trial-button {
		background: var(--trial-button-gradient);
		border: var(--trial-button-border);
		color: var(--trial-button-text-color);
	}
	.section gl-button {
		--button-width: 100%;
	}

	@media (min-width: 400px) {
		.section gl-button {
			--button-width: initial;
		}
		.section gl-button {
			--button-padding: 0.4em 4em;
		}
	}
`,oe=u`
	.section.header {
		align-items: center;
	}
	.header {
		max-width: 620px;
		margin-left: auto;
		margin-right: auto;
	}
	.header gitlens-logo-circle {
		height: calc(46px * 0.6);
		width: 0;
		transform: scale(0.6) translate(calc(-46px), calc(-46px * 0.2));
		margin-right: 0.4em;
		vertical-align: top;
	}
	.header h1 {
		margin: 0;
		font-size: var(--h1-font-size);
	}
	.header h1 + p {
		margin-top: 0;
	}

	@media (max-width: 640px) {
		.header gitlens-logo-circle {
			height: calc(46px * 0.5);
			transform: scale(0.5) translate(calc(-46px), calc(-46px * 0.25 - 2px));
			margin-right: 0.3em;
		}
	}

	@media (max-width: 300px) {
		.header gitlens-logo-circle {
			height: calc(46px * 0.4);
			transform: scale(0.4) translate(calc(-46px), calc(-46px * 0.3 - 4px));
			margin-right: 0.2em;
		}
	}
`,ot=u`
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.7em;
		border-radius: 0.63em;
		background-color: var(--card-background);
		padding: 1.5em;
		text-align: initial;
	}

	.card-part--centered {
		margin: auto;
		align-items: center;
		text-align: center;
	}

	gl-walkthrough-step.card::part(header) {
		padding: 1.5em;
		margin: -1.5em;
	}

	@media (max-width: 400px) {
		.card-part--centered {
			margin: 0;
		}
	}

	@media (max-width: 300px) {
		.card {
			padding: 1em;
		}
		gl-walkthrough-step.card::part(header) {
			padding: 1em;
			margin: -1em;
		}
	}

	.card h1 {
		margin: 0;
		font-size: var(--card-font-size);
	}

	.card p {
		margin: 0.5em 0 0;
		font-size: var(--card-font-size);
	}

	.card p:last-child {
		margin: 1em 0 0;
	}

	.card ul {
		text-align: initial;
		padding-inline-start: 1em;
		margin: 0.5em 0 0;
		font-size: var(--card-font-size);
	}

	.card img {
		max-width: 100%;
	}

	p.card-part--tip {
		color: var(--dimmed-text-color);
	}
	p.card-part--tip em {
		color: var(--em-color);
		font-style: normal;
	}

	gl-walkthrough-step.card {
		text-align: left;
	}
`,or=u`
	gl-scrollable-features {
		--side-shadow-padding: max(var(--page-margin-left), var(--page-margin-right));
		--side-shadow-color: var(--page-background-color);
	}
`,oo=u`
	.section--back {
		text-align: left;
		align-items: flex-start;
	}

	.section .back-link {
		color: var(--dimmed-text-color);
		text-decoration: none;
		font-size: var(--card-font-size);
	}

	.back-link:hover {
		color: var(--vscode-textLink-activeForeground);
		text-decoration: underline;
	}
`,oi=u`
	${r4} ${r6} ${r7}
	${r8} ${r9} ${oe}
	${or}
	${ot}
	${oo}
`;var on=Object.defineProperty,os=Object.getOwnPropertyDescriptor;let oa=class extends lit_element_i{render(){return ei`<svg
			alt="GitLens"
			width="46"
			height="46"
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23" cy="23" r="23" fill="#04090D" />
			<circle cx="23" cy="23" r="23" fill="url(#paint0_linear_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint1_radial_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint2_radial_43_72231)" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23 45.0272C35.1653 45.0272 45.0272 35.1653 45.0272 23C45.0272 10.8347 35.1653 0.97281 23 0.97281C10.8347 0.97281 0.97281 10.8347 0.97281 23C0.97281 35.1653 10.8347 45.0272 23 45.0272ZM23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
				fill="white"
				class="soft-light"
			/>
			<mask id="path-3-inside-1_43_72231" fill="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				/>
			</mask>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				fill="url(#paint3_linear_43_72231)"
			/>
			<path
				d="M23.6825 13.6317L22.7391 13.3001L22.517 13.9317L23.0164 14.3776L23.6825 13.6317ZM23.7041 11.4729L24.652 11.1544L23.7041 11.4729ZM25.7364 15.5815L25.0281 16.2874V16.2874L25.7364 15.5815ZM29.656 20.0599L28.8521 20.6547L29.2988 21.2583L30.003 20.9978L29.656 20.0599ZM28.1778 21.0658L28.9218 21.734L29.4805 21.1119L28.9671 20.4518L28.1778 21.0658ZM24.5714 16.9401L23.8494 17.632V17.632L24.5714 16.9401ZM22.7043 15.0996L23.3845 14.3666L22.7107 13.7413L22.031 14.3601L22.7043 15.0996ZM21.3681 15.8837L21.6885 16.831L21.6885 16.831L21.3681 15.8837ZM20.7039 16.0445L20.5567 15.0553L19.7758 15.1715L19.7076 15.9581L20.7039 16.0445ZM20.8797 30.15L19.8878 30.2774L19.9875 31.0538L20.7651 31.1434L20.8797 30.15ZM22.4173 30.6606L21.9194 31.5278H21.9194L22.4173 30.6606ZM23.969 35.4466L23.1004 34.9512L23.969 35.4466ZM19.0708 36.5294L19.5687 35.6621L19.0708 36.5294ZM17.5191 31.7433L18.3878 32.2387H18.3878L17.5191 31.7433ZM19.0957 30.381L19.4695 31.3085L20.2212 31.0056L20.0805 30.2074L19.0957 30.381ZM18.8723 15.8552L19.8671 15.9566L19.9454 15.1888L19.2225 14.9185L18.8723 15.8552ZM16.8475 13.7923L15.8996 14.1107L16.8475 13.7923ZM24.6259 13.9634C24.9355 13.0825 24.97 12.1009 24.652 11.1544L22.7562 11.7913C22.9243 12.2919 22.9094 12.8155 22.7391 13.3001L24.6259 13.9634ZM26.4448 14.8756C25.6877 14.116 24.9877 13.4565 24.3485 12.8858L23.0164 14.3776C23.6258 14.9218 24.2977 15.5545 25.0281 16.2874L26.4448 14.8756ZM30.4598 19.4651C29.6154 18.3239 28.3296 16.7669 26.4448 14.8756L25.0281 16.2874C26.8464 18.1119 28.0679 19.5949 28.8521 20.6547L30.4598 19.4651ZM30.9435 18.8304C30.3707 18.8304 29.8196 18.9331 29.309 19.122L30.003 20.9978C30.2948 20.8898 30.6112 20.8304 30.9435 20.8304V18.8304ZM35.6656 23.5653C35.6656 20.9535 33.5547 18.8304 30.9435 18.8304V20.8304C32.4437 20.8304 33.6656 22.0516 33.6656 23.5653H35.6656ZM30.9435 28.3002C33.5547 28.3002 35.6656 26.1771 35.6656 23.5653H33.6656C33.6656 25.079 32.4437 26.3002 30.9435 26.3002V28.3002ZM26.2214 23.5653C26.2214 26.1771 28.3323 28.3002 30.9435 28.3002V26.3002C29.4434 26.3002 28.2214 25.079 28.2214 23.5653H26.2214ZM27.4338 20.3976C26.6806 21.2362 26.2214 22.3484 26.2214 23.5653H28.2214C28.2214 22.8598 28.486 22.2192 28.9218 21.734L27.4338 20.3976ZM23.8494 17.632C25.4595 19.3123 26.6038 20.671 27.3884 21.6798L28.9671 20.4518C28.1382 19.3862 26.9486 17.9756 25.2934 16.2483L23.8494 17.632ZM22.024 15.8325C22.5932 16.3607 23.2039 16.9585 23.8494 17.632L25.2934 16.2483C24.6208 15.5464 23.9822 14.9212 23.3845 14.3666L22.024 15.8325ZM21.6885 16.831C22.3336 16.6128 22.9041 16.27 23.3775 15.839L22.031 14.3601C21.7593 14.6076 21.4283 14.8077 21.0476 14.9365L21.6885 16.831ZM20.851 17.0336C21.1313 16.9919 21.4115 16.9247 21.6885 16.831L21.0476 14.9365C20.8838 14.9919 20.7195 15.0311 20.5567 15.0553L20.851 17.0336ZM21.4653 22.2681C21.4653 19.6222 21.5729 17.5986 21.7001 16.1308L19.7076 15.9581C19.5751 17.4867 19.4653 19.5681 19.4653 22.2681H21.4653ZM21.8715 30.0227C21.6881 28.5945 21.4653 26.0756 21.4653 22.2681H19.4653C19.4653 26.1534 19.6927 28.7578 19.8878 30.2774L21.8715 30.0227ZM20.7651 31.1434C21.1508 31.1879 21.5448 31.3127 21.9194 31.5278L22.9153 29.7933C22.3041 29.4425 21.6492 29.2321 20.9942 29.1566L20.7651 31.1434ZM21.9194 31.5278C23.3025 32.3219 23.7079 33.8857 23.1004 34.9512L24.8377 35.9419C26.0784 33.7662 25.0944 31.0445 22.9153 29.7933L21.9194 31.5278ZM23.1004 34.9512C22.4943 36.0141 20.9505 36.4555 19.5687 35.6621L18.5729 37.3966C20.7533 38.6485 23.5955 38.1204 24.8377 35.9419L23.1004 34.9512ZM19.5687 35.6621C18.1856 34.868 17.7802 33.3042 18.3878 32.2387L16.6504 31.248C15.4097 33.4237 16.3938 36.1454 18.5729 37.3966L19.5687 35.6621ZM18.3878 32.2387C18.6319 31.8105 19.01 31.4937 19.4695 31.3085L18.7218 29.4535C17.8741 29.7952 17.133 30.4016 16.6504 31.248L18.3878 32.2387ZM17.6075 22.2997C17.6075 26.6892 17.8689 29.1823 18.1108 30.5546L20.0805 30.2074C19.8656 28.9885 19.6075 26.6202 19.6075 22.2997H17.6075ZM17.8775 15.7537C17.7264 17.2346 17.6075 19.3393 17.6075 22.2997H19.6075C19.6075 19.3905 19.7245 17.3553 19.8671 15.9566L17.8775 15.7537ZM15.8996 14.1107C16.3345 15.4053 17.33 16.3461 18.5221 16.7919L19.2225 14.9185C18.5498 14.667 18.0237 14.1531 17.7955 13.4738L15.8996 14.1107ZM18.8631 8.43412C16.4958 9.23492 15.1049 11.7452 15.8996 14.1107L17.7955 13.4738C17.3837 12.2482 18.0845 10.8088 19.504 10.3287L18.8631 8.43412ZM24.652 11.1544C23.8567 8.78703 21.2317 7.6329 18.8631 8.43412L19.504 10.3287C20.9222 9.84892 22.345 10.5676 22.7562 11.7913L24.652 11.1544Z"
				fill="white"
				class="soft-light"
				mask="url(#path-3-inside-1_43_72231)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_43_72231"
					x1="-5.14199"
					y1="15.148"
					x2="35.1957"
					y2="53.4671"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F1C6FF" />
					<stop offset="0.104167" stop-color="#DD74FF" />
					<stop offset="0.352245" stop-color="#DD74FF" stop-opacity="0" />
					<stop offset="0.62022" stop-color="#4E032E" stop-opacity="0" />
					<stop offset="0.825426" stop-color="#3C17A7" />
					<stop offset="1" stop-color="#3687FF" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(51.1591 15.2989) rotate(138.744) scale(31.2464 31.2515)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-2.91103 29.7569) rotate(42.9991) scale(28.6895 28.728)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#0D1017" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="paint3_linear_43_72231"
					x1="23.4169"
					y1="14.5226"
					x2="41.2576"
					y2="49.9689"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#B7E1FF" stop-opacity="0.58" />
				</linearGradient>
			</defs>
		</svg>`}};oa.styles=[u`
			:host {
				display: inline-block;
				vertical-align: middle;
				position: relative;
			}

			:host::after {
				content: ' ';
				display: block;
				width: 100%;
				height: 100%;
				background-color: red;
				visibility: hidden;
				position: absolute;
				top: 0;
				left: 0;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				display: block;
			}

			.soft-light {
				mix-blend-mode: soft-light;
			}
		`],oa=((e,t,r,o)=>{for(var i,s=o>1?void 0:o?os(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&on(t,r,s),s})([em("gitlens-logo-circle")],oa);let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ea,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ea||null==e)return this._t=void 0,this.it=e;if(e===es)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let ol=e6(unsafe_html_e);var oc=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}},od=u`
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
`;let oh=new Set,op=new Map,ou="ltr",og="en",of="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(of){let e=new MutationObserver(ob);ou=document.documentElement.dir||"ltr",og=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function om(...e){e.map(e=>{let t=e.$code.toLowerCase();op.has(t)?op.set(t,Object.assign(Object.assign({},op.get(t)),e)):op.set(t,e),o||(o=e)}),ob()}function ob(){of&&(ou=document.documentElement.dir||"ltr",og=document.documentElement.lang||navigator.language),[...oh.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){oh.add(this.host)}hostDisconnected(){oh.delete(this.host)}dir(){return`${this.host.dir||ou}`.toLowerCase()}lang(){return`${this.host.lang||og}`.toLowerCase()}getTranslationData(e){var t,r;let o;try{o=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let i=o.language.toLowerCase(),s=null!=(r=null==(t=o.region)?void 0:t.toLowerCase())?r:"",a=op.get(`${i}-${s}`),c=op.get(i);return{locale:o,language:i,region:s,primary:a,secondary:c}}exists(e,t){var r;let{primary:i,secondary:s}=this.getTranslationData(null!=(r=t.lang)?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!i&&!!i[e]||!!s&&!!s[e]||!!t.includeFallback&&!!o&&!!o[e]}term(e,...t){let r,{primary:i,secondary:s}=this.getTranslationData(this.lang());if(i&&i[e])r=i[e];else if(s&&s[e])r=s[e];else{if(!o||!o[e])return String(e);r=o[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var ov={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",clearEntry:"Clear entry",close:"Close",createOption:e=>`Create "${e}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",moreOptions:"More Options",mute:"Mute",nextSlide:"Next slide",nextVideo:"Next Video",numCharacters:e=>1===e?"1 character":`${e} characters`,numCharactersRemaining:e=>1===e?"1 character remaining":`${e} characters remaining`,numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousSlide:"Previous slide",previousVideo:"Previous video",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(e,t)=>`${e} of ${t}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",zoomIn:"Zoom in",zoomOut:"Zoom out"};om(ov);var ow=class extends LocalizeController{};om(ov);var oy=Object.defineProperty,ox=Object.getOwnPropertyDescriptor,ok=e=>{throw TypeError(e)},oC=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?ox(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&oy(t,r,s),s},o_=(e,t,r)=>t.has(e)||ok("Cannot "+r),o$=u`
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
`,oS=class extends lit_element_i{constructor(){let e;super(),(e=eL).has(this)?ok("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes("must start with '--'"));else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{}for(let[e,t]of(this.customStates.set("wa-defined",!0),this.constructor.elementProperties))"inherit"===t.default&&void 0!==t.initial&&"string"==typeof e&&this.customStates.set(`initial-${e}-${t.initial}`,!0)}static get styles(){return[o$,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))}attributeChangedCallback(e,t,r){let o,i;if(o_(this,o=eL,"read from private field"),i?!i.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),o_(this,e=eL,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};eL=new WeakMap,oC([ev()],oS.prototype,"dir",2),oC([ev()],oS.prototype,"lang",2),oC([ev({type:Boolean,reflect:!0,attribute:"did-ssr"})],oS.prototype,"didSSR",2);let oA=Math.min,oP=Math.max,oE=Math.round,oL=Math.floor,oI=e=>({x:e,y:e}),oT={left:"right",right:"left",bottom:"top",top:"bottom"};function oR(e,t){return"function"==typeof e?e(t):e}function oO(e){return e.split("-")[0]}function oM(e){return e.split("-")[1]}function oN(e){return"x"===e?"y":"x"}function oz(e){return"y"===e?"height":"width"}function oD(e){let t=e[0];return"t"===t||"b"===t?"y":"x"}function oj(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}let oq=["left","right"],oU=["right","left"],oB=["top","bottom"],oG=["bottom","top"];function oW(e){let t=oO(e);return oT[t]+e.slice(t.length)}function oH(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function oF(e){let{x:t,y:r,width:o,height:i}=e;return{width:o,height:i,top:r,left:t,right:t+o,bottom:r+i,x:t,y:r}}function oV(e,t,r){let o,{reference:i,floating:s}=e,a=oD(t),c=oN(oD(t)),h=oz(c),p=oO(t),u="y"===a,g=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,m=i[h]/2-s[h]/2;switch(p){case"top":o={x:g,y:i.y-s.height};break;case"bottom":o={x:g,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:f};break;case"left":o={x:i.x-s.width,y:f};break;default:o={x:i.x,y:i.y}}switch(oM(t)){case"start":o[c]-=m*(r&&u?-1:1);break;case"end":o[c]+=m*(r&&u?-1:1)}return o}async function oZ(e,t){var r;void 0===t&&(t={});let{x:o,y:i,platform:s,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:f=!1,padding:m=0}=oR(t,e),b=oH(m),v=c[f?"floating"===g?"reference":"floating":g],w=oF(await s.getClippingRect({element:null==(r=await (null==s.isElement?void 0:s.isElement(v)))||r?v:v.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),x="floating"===g?{x:o,y:i,width:a.floating.width,height:a.floating.height}:a.reference,C=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating)),_=await (null==s.isElement?void 0:s.isElement(C))&&await (null==s.getScale?void 0:s.getScale(C))||{x:1,y:1},$=oF(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:C,strategy:h}):x);return{top:(w.top-$.top+b.top)/_.y,bottom:($.bottom-w.bottom+b.bottom)/_.y,left:(w.left-$.left+b.left)/_.x,right:($.right-w.right+b.right)/_.x}}let oK=async(e,t,r)=>{let{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:a}=r,c=a.detectOverflow?a:{...a,detectOverflow:oZ},h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:g}=oV(p,o,h),f=o,m=0,b={};for(let r=0;r<s.length;r++){let v=s[r];if(!v)continue;let{name:w,fn:x}=v,{x:C,y:_,data:$,reset:S}=await x({x:u,y:g,initialPlacement:o,placement:f,strategy:i,middlewareData:b,rects:p,platform:c,elements:{reference:e,floating:t}});u=null!=C?C:u,g=null!=_?_:g,b[w]={...b[w],...$},S&&m<50&&(m++,"object"==typeof S&&(S.placement&&(f=S.placement),S.rects&&(p=!0===S.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:u,y:g}=oV(p,f,h)),r=-1)}return{x:u,y:g,placement:f,strategy:i,middlewareData:b}},oY=new Set(["left","top"]);async function oJ(e,t){let{placement:r,platform:o,elements:i}=e,s=await (null==o.isRTL?void 0:o.isRTL(i.floating)),a=oO(r),c=oM(r),h="y"===oD(r),p=oY.has(a)?-1:1,u=s&&h?-1:1,g=oR(t,e),{mainAxis:f,crossAxis:m,alignmentAxis:b}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&"number"==typeof b&&(m="end"===c?-1*b:b),h?{x:m*u,y:f*p}:{x:f*p,y:m*u}}function oQ(){return"u">typeof window}function oX(e){return o2(e)?(e.nodeName||"").toLowerCase():"#document"}function o1(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function o0(e){var t;return null==(t=(o2(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function o2(e){return!!oQ()&&(e instanceof Node||e instanceof o1(e).Node)}function o3(e){return!!oQ()&&(e instanceof Element||e instanceof o1(e).Element)}function o5(e){return!!oQ()&&(e instanceof HTMLElement||e instanceof o1(e).HTMLElement)}function o4(e){return!(!oQ()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof o1(e).ShadowRoot)}function o6(e){let{overflow:t,overflowX:r,overflowY:o,display:i}=ii(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&"inline"!==i&&"contents"!==i}function o7(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}let o8=/transform|translate|scale|rotate|perspective|filter/,o9=/paint|layout|strict|content/,ie=e=>!!e&&"none"!==e;function it(e){let t=o3(e)?ii(e):e;return ie(t.transform)||ie(t.translate)||ie(t.scale)||ie(t.rotate)||ie(t.perspective)||!ir()&&(ie(t.backdropFilter)||ie(t.filter))||o8.test(t.willChange||"")||o9.test(t.contain||"")}function ir(){return null==i&&(i="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),i}function io(e){return/^(html|body|#document)$/.test(oX(e))}function ii(e){return o1(e).getComputedStyle(e)}function is(e){return o3(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ia(e){if("html"===oX(e))return e;let t=e.assignedSlot||e.parentNode||o4(e)&&e.host||o0(e);return o4(t)?t.host:t}function il(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);let i=function e(t){let r=ia(t);return io(r)?t.ownerDocument?t.ownerDocument.body:t.body:o5(r)&&o6(r)?r:e(r)}(e),s=i===(null==(o=e.ownerDocument)?void 0:o.body),a=o1(i);if(!s)return t.concat(i,il(i,[],r));{let e=ic(a);return t.concat(a,a.visualViewport||[],o6(i)?i:[],e&&r?il(e):[])}}function ic(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function id(e){let t=ii(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,i=o5(e),s=i?e.offsetWidth:r,a=i?e.offsetHeight:o,c=oE(r)!==s||oE(o)!==a;return c&&(r=s,o=a),{width:r,height:o,$:c}}function ih(e){return o3(e)?e:e.contextElement}function ip(e){let t=ih(e);if(!o5(t))return oI(1);let r=t.getBoundingClientRect(),{width:o,height:i,$:s}=id(t),a=(s?oE(r.width):r.width)/o,c=(s?oE(r.height):r.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let iu=oI(0);function ig(e){let t=o1(e);return ir()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:iu}function im(e,t,r,o){var i;void 0===t&&(t=!1),void 0===r&&(r=!1);let s=e.getBoundingClientRect(),a=ih(e),c=oI(1);t&&(o?o3(o)&&(c=ip(o)):c=ip(e));let h=(void 0===(i=r)&&(i=!1),o&&(!i||o===o1(a))&&i)?ig(a):oI(0),p=(s.left+h.x)/c.x,u=(s.top+h.y)/c.y,g=s.width/c.x,f=s.height/c.y;if(a){let e=o1(a),t=o&&o3(o)?o1(o):o,r=e,i=ic(r);for(;i&&o&&t!==r;){let e=ip(i),t=i.getBoundingClientRect(),o=ii(i),s=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,f*=e.y,p+=s,u+=a,i=ic(r=o1(i))}}return oF({width:g,height:f,x:p,y:u})}function ib(e,t){let r=is(e).scrollLeft;return t?t.left+r:im(o0(e)).left+r}function iv(e,t){let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-ib(e,r),y:r.top+t.scrollTop}}function iw(e,t,r){var o;let i;if("viewport"===t)i=function(e,t){let r=o1(e),o=o0(e),i=r.visualViewport,s=o.clientWidth,a=o.clientHeight,c=0,h=0;if(i){s=i.width,a=i.height;let e=ir();(!e||e&&"fixed"===t)&&(c=i.offsetLeft,h=i.offsetTop)}let p=ib(o);if(p<=0){let e=o.ownerDocument,t=e.body,r=getComputedStyle(t),i="CSS1Compat"===e.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,a=Math.abs(o.clientWidth-t.clientWidth-i);a<=25&&(s-=a)}else p<=25&&(s+=p);return{width:s,height:a,x:c,y:h}}(e,r);else if("document"===t){let t,r,s,a,c,h,p;o=o0(e),t=o0(o),r=is(o),s=o.ownerDocument.body,a=oP(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),c=oP(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight),h=-r.scrollLeft+ib(o),p=-r.scrollTop,"rtl"===ii(s).direction&&(h+=oP(t.clientWidth,s.clientWidth)-a),i={width:a,height:c,x:h,y:p}}else if(o3(t)){let e,o,s,a,c,h;o=(e=im(t,!0,"fixed"===r)).top+t.clientTop,s=e.left+t.clientLeft,a=o5(t)?ip(t):oI(1),c=t.clientWidth*a.x,h=t.clientHeight*a.y,i={width:c,height:h,x:s*a.x,y:o*a.y}}else{let r=ig(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return oF(i)}function iy(e){return"static"===ii(e).position}function ix(e,t){if(!o5(e)||"fixed"===ii(e).position)return null;if(t)return t(e);let r=e.offsetParent;return o0(e)===r&&(r=r.ownerDocument.body),r}function ik(e,t){var r;let o=o1(e);if(o7(e))return o;if(!o5(e)){let t=ia(e);for(;t&&!io(t);){if(o3(t)&&!iy(t))return t;t=ia(t)}return o}let i=ix(e,t);for(;i&&(r=i,/^(table|td|th)$/.test(oX(r)))&&iy(i);)i=ix(i,t);return i&&io(i)&&iy(i)&&!it(i)?o:i||function(e){let t=ia(e);for(;o5(t)&&!io(t);){if(it(t))return t;if(o7(t))break;t=ia(t)}return null}(e)||o}let iC=async function(e){let t=this.getOffsetParent||ik,r=this.getDimensions,o=await r(e.floating);return{reference:function(e,t,r){let o=o5(t),i=o0(t),s="fixed"===r,a=im(e,!0,s,t),c={scrollLeft:0,scrollTop:0},h=oI(0);if(o||!o&&!s)if(("body"!==oX(t)||o6(i))&&(c=is(t)),o){let e=im(t,!0,s,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else i&&(h.x=ib(i));s&&!o&&i&&(h.x=ib(i));let p=!i||o||s?oI(0):iv(i,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},i_={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:i}=e,s="fixed"===i,a=o0(o),c=!!t&&o7(t.floating);if(o===a||c&&s)return r;let h={scrollLeft:0,scrollTop:0},p=oI(1),u=oI(0),g=o5(o);if((g||!g&&!s)&&(("body"!==oX(o)||o6(a))&&(h=is(o)),g)){let e=im(o);p=ip(o),u.x=e.x+o.clientLeft,u.y=e.y+o.clientTop}let f=!a||g||s?oI(0):iv(a,h);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+u.x+f.x,y:r.y*p.y-h.scrollTop*p.y+u.y+f.y}},getDocumentElement:o0,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e,s=[..."clippingAncestors"===r?o7(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=il(e,[],!1).filter(e=>o3(e)&&"body"!==oX(e)),i=null,s="fixed"===ii(e).position,a=s?ia(e):e;for(;o3(a)&&!io(a);){let t=ii(a),r=it(a);r||"fixed"!==t.position||(i=null),(s?r||i:!(!r&&"static"===t.position&&i&&("absolute"===i.position||"fixed"===i.position)||o6(a)&&!r&&function e(t,r){let o=ia(t);return!(o===r||!o3(o)||io(o))&&("fixed"===ii(o).position||e(o,r))}(e,a)))?i=t:o=o.filter(e=>e!==a),a=ia(a)}return t.set(e,o),o}(t,this._c):[].concat(r),o],a=iw(t,s[0],i),c=a.top,h=a.right,p=a.bottom,u=a.left;for(let e=1;e<s.length;e++){let r=iw(t,s[e],i);c=oP(r.top,c),h=oA(r.right,h),p=oA(r.bottom,p),u=oP(r.left,u)}return{width:h-u,height:p-c,x:u,y:c}},getOffsetParent:ik,getElementRects:iC,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=id(e);return{width:t,height:r}},getScale:ip,isElement:o3,isRTL:function(e){return"rtl"===ii(e).direction}};function i$(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let iS=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var r,o;let i,s,{placement:a,rects:c,platform:h,elements:p}=t,{apply:u=()=>{},...g}=oR(e,t),f=await h.detectOverflow(t,g),m=oO(a),b=oM(a),v="y"===oD(a),{width:w,height:x}=c.floating;"top"===m||"bottom"===m?(i=m,s=b===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(s=m,i="end"===b?"top":"bottom");let C=x-f.top-f.bottom,_=w-f.left-f.right,$=oA(x-f[i],C),S=oA(w-f[s],_),A=!t.middlewareData.shift,P=$,E=S;if(null!=(r=t.middlewareData.shift)&&r.enabled.x&&(E=_),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(P=C),A&&!b){let e=oP(f.left,0),t=oP(f.right,0),r=oP(f.top,0),o=oP(f.bottom,0);v?E=w-2*(0!==e||0!==t?e+t:oP(f.left,f.right)):P=x-2*(0!==r||0!==o?r+o:oP(f.top,f.bottom))}await u({...t,availableWidth:E,availableHeight:P});let T=await h.getDimensions(p.floating);return w!==T.width||x!==T.height?{reset:{rects:!0}}:{}}}};function iA(e){var t=e;for(let e=t;e;e=iP(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=iP(t);e;e=iP(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||it(t)||"BODY"===e.tagName))return e}return null}function iP(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}let iE=e6(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return es}});function iL(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}var iI=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),iT=class extends oS{constructor(){super(...arguments),this.localize=new ow(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,i=0,s=0,a=0,c=0,h=0,p=0,u=0;r?e.top<t.top?(o=e.left,i=e.bottom,s=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,u=t.top):(o=t.left,i=t.bottom,s=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,u=e.top):e.left<t.left?(o=e.right,i=e.top,s=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,u=t.bottom):(o=t.right,i=t.top,s=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||iL(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=function(e,t,r,o){let i;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=o,u=ih(e),g=s||a?[...u?il(u):[],...t?il(t):[]]:[];g.forEach(e=>{s&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)});let f=u&&h?function(e,t){let r,o=null,i=o0(e);function s(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),s();let p=e.getBoundingClientRect(),{left:u,top:g,width:f,height:m}=p;if(c||t(),!f||!m)return;let b={rootMargin:-oL(g)+"px "+-oL(i.clientWidth-(u+f))+"px "+-oL(i.clientHeight-(g+m))+"px "+-oL(u)+"px",threshold:oP(0,oA(1,h))||1},v=!0;function w(t){let o=t[0].intersectionRatio;if(o!==h){if(!v)return a();o?a(!1,o):r=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||i$(p,e.getBoundingClientRect())||a(),v=!1}try{o=new IntersectionObserver(w,{...b,root:i.ownerDocument})}catch{o=new IntersectionObserver(w,b)}o.observe(e)}(!0),s}(u,r):null,m=-1,b=null;c&&(b=new ResizeObserver(e=>{let[o]=e;o&&o.target===u&&b&&t&&(b.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var e;null==(e=b)||e.observe(t)})),r()}),u&&!p&&b.observe(u),t&&b.observe(t));let v=p?im(e):null;return p&&function t(){let o=im(e);v&&!i$(v,o)&&r(),v=o,i=requestAnimationFrame(t)}(),r(),()=>{var e;g.forEach(e=>{s&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)}),null==f||f(),null==(e=b)||e.disconnect(),b=null,p&&cancelAnimationFrame(i)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,r,o,i,s;let a,c,h,p,u;if(!this.active||!this.anchorEl||!this.popup)return;let g=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var r,o;let{x:i,y:s,placement:a,middlewareData:c}=t,h=await oJ(t,e);return a===(null==(r=c.offset)?void 0:r.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+h.x,y:s+h.y,data:{...h,placement:a}}}}];this.sync?g.push(iS({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=r?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),iI&&!iL(this.anchor)&&"scroll"===this.boundary&&(a=il(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&g.push({name:"flip",options:t={boundary:this.flipBoundary||a,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var r,o,i,s,a,c,h,p;let u,g,f,{placement:m,middlewareData:b,rects:v,initialPlacement:w,platform:x,elements:C}=e,{mainAxis:_=!0,crossAxis:$=!0,fallbackPlacements:S,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:E=!0,...T}=oR(t,e);if(null!=(r=b.arrow)&&r.alignmentOffset)return{};let O=oO(m),M=oD(w),N=oO(w)===w,D=await (null==x.isRTL?void 0:x.isRTL(C.floating)),j=S||(N||!E?[oW(w)]:(u=oW(w),[oj(w),u,oj(u)])),q="none"!==P;!S&&q&&j.push(...(g=oM(w),f=function(e,t,r){switch(e){case"top":case"bottom":if(r)return t?oU:oq;return t?oq:oU;case"left":case"right":return t?oB:oG;default:return[]}}(oO(w),"start"===P,D),g&&(f=f.map(e=>e+"-"+g),E&&(f=f.concat(f.map(oj)))),f));let U=[w,...j],B=await x.detectOverflow(e,T),G=[],W=(null==(o=b.flip)?void 0:o.overflows)||[];if(_&&G.push(B[O]),$){let e,t,r,o,i=(c=m,h=v,void 0===(p=D)&&(p=!1),e=oM(c),r=oz(t=oN(oD(c))),o="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",h.reference[r]>h.floating[r]&&(o=oW(o)),[o,oW(o)]);G.push(B[i[0]],B[i[1]])}if(W=[...W,{placement:m,overflows:G}],!G.every(e=>e<=0)){let e=((null==(i=b.flip)?void 0:i.index)||0)+1,t=U[e];if(t&&("alignment"!==$||M===oD(t)||W.every(e=>oD(e.placement)!==M||e.overflows[0]>0)))return{data:{index:e,overflows:W},reset:{placement:t}};let r=null==(s=W.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!r)switch(A){case"bestFit":{let e=null==(a=W.filter(e=>{if(q){let t=oD(e.placement);return t===M||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(r=e);break}case"initialPlacement":r=w}if(m!==r)return{reset:{placement:r}}}return{}}}),this.shift&&g.push({name:"shift",options:r={boundary:this.shiftBoundary||a,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:i,platform:s}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...p}=oR(r,e),u={x:t,y:o},g=await s.detectOverflow(e,p),f=oD(oO(i)),m=oN(f),b=u[m],v=u[f];if(a){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",r=b+g[e],o=b-g[t];b=oP(r,oA(b,o))}if(c){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",r=v+g[e],o=v-g[t];v=oP(r,oA(v,o))}let w=h.fn({...e,[m]:b,[f]:v});return{...w,data:{x:w.x-t,y:w.y-o,enabled:{[m]:a,[f]:c}}}}}),this.autoSize?g.push(iS({boundary:this.autoSizeBoundary||a,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&g.push({name:"arrow",options:c={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:h}=e,{element:p,padding:u=0}=oR(c,e)||{};if(null==p)return{};let g=oH(u),f={x:t,y:r},m=oN(oD(o)),b=oz(m),v=await s.getDimensions(p),w="y"===m,x=w?"clientHeight":"clientWidth",C=i.reference[b]+i.reference[m]-f[m]-i.floating[b],_=f[m]-i.reference[m],$=await (null==s.getOffsetParent?void 0:s.getOffsetParent(p)),S=$?$[x]:0;S&&await (null==s.isElement?void 0:s.isElement($))||(S=a.floating[x]||i.floating[b]);let A=S/2-v[b]/2-1,P=oA(g[w?"top":"left"],A),E=oA(g[w?"bottom":"right"],A),T=S-v[b]-E,O=S/2-v[b]/2+(C/2-_/2),M=oP(P,oA(O,T)),N=!h.arrow&&null!=oM(o)&&O!==M&&i.reference[b]/2-(O<P?P:E)-v[b]/2<0,D=N?O<P?O-P:O-T:0;return{[m]:f[m]+D,data:{[m]:M,centerOffset:O-M-D,...N&&{alignmentOffset:D}},reset:N}}});let f=iI?e=>i_.getOffsetParent(e,iA):i_.getOffsetParent;(o=this.anchorEl,i=this.popup,s={placement:this.placement,middleware:g,strategy:iI?"absolute":"fixed",platform:{...i_,getOffsetParent:f}},h=new Map,u={...(p={platform:i_,...s}).platform,_c:h},oK(o,i,{...p,platform:u})).then(({x:e,y:t,middlewareData:r,placement:o})=>{let i="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=r.arrow.x,t=r.arrow.y,o="",a="",c="",h="";if("start"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=i?r:"",h=i?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=i?"":r,h=i?r:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:c,left:h,[s]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new oc)}render(){return ei`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${iE({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${iE({popup:!0,"popup-active":this.active,"popup-fixed":!iI,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ei`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};iT.css=od,oC([ex(".popup")],iT.prototype,"popup",2),oC([ex(".arrow")],iT.prototype,"arrowEl",2),oC([ev()],iT.prototype,"anchor",2),oC([ev({type:Boolean,reflect:!0})],iT.prototype,"active",2),oC([ev({reflect:!0})],iT.prototype,"placement",2),oC([ev()],iT.prototype,"boundary",2),oC([ev({type:Number})],iT.prototype,"distance",2),oC([ev({type:Number})],iT.prototype,"skidding",2),oC([ev({type:Boolean})],iT.prototype,"arrow",2),oC([ev({attribute:"arrow-placement"})],iT.prototype,"arrowPlacement",2),oC([ev({attribute:"arrow-padding",type:Number})],iT.prototype,"arrowPadding",2),oC([ev({type:Boolean})],iT.prototype,"flip",2),oC([ev({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],iT.prototype,"flipFallbackPlacements",2),oC([ev({attribute:"flip-fallback-strategy"})],iT.prototype,"flipFallbackStrategy",2),oC([ev({type:Object})],iT.prototype,"flipBoundary",2),oC([ev({attribute:"flip-padding",type:Number})],iT.prototype,"flipPadding",2),oC([ev({type:Boolean})],iT.prototype,"shift",2),oC([ev({type:Object})],iT.prototype,"shiftBoundary",2),oC([ev({attribute:"shift-padding",type:Number})],iT.prototype,"shiftPadding",2),oC([ev({attribute:"auto-size"})],iT.prototype,"autoSize",2),oC([ev()],iT.prototype,"sync",2),oC([ev({type:Object})],iT.prototype,"autoSizeBoundary",2),oC([ev({attribute:"auto-size-padding",type:Number})],iT.prototype,"autoSizePadding",2),oC([ev({attribute:"hover-bridge",type:Boolean})],iT.prototype,"hoverBridge",2),iT=oC([em("wa-popup")],iT);var iR=Object.defineProperty,iO=Object.getOwnPropertyDescriptor,iM=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?iO(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&iR(t,r,s),s};let iN=0,iz=[],iD=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.showDelay=500,this.hideDelay=0,this.suppressed=!1,this.open=!1,this.bodyId=`gl-tooltip-${++iN}`,this.onAnchorSlotChange=e=>{let t=e.target.assignedElements({flatten:!0})[0];t!==this.anchorEl&&(this.detachAnchor(),this.attachAnchor(t))},this.onDocumentKeyDown=e=>{"Escape"===e.key&&this.open&&iz.at(-1)===this&&(e.preventDefault(),e.stopPropagation(),this.open=!1)},this.onMouseOver=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!0},this.showDelay))},this.onMouseOut=()=>{this.anchorEl?.matches(":hover")||this.matches(":hover")||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!1},this.hideDelay))},this.onFocusIn=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.open=!0)},this.onFocusOut=()=>{clearTimeout(this.hoverTimeout),this.open=!1},this.onMouseDown=e=>{this.suppressed=!0,this.open=!1},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.open=!1},this.onDragEnd=e=>{this.suppressed=!1},this.onClick=e=>{this.hideOnClick&&(this.open=!1)}}connectedCallback(){super.connectedCallback?.(),this.eventController=new AbortController;let{signal:e}=this.eventController;this.addEventListener("mouseover",this.onMouseOver,{signal:e}),this.addEventListener("mouseout",this.onMouseOut,{signal:e}),this.addEventListener("focusin",this.onFocusIn,{signal:e}),this.addEventListener("focusout",this.onFocusOut,{signal:e}),this.addEventListener("mousedown",this.onMouseDown,{signal:e}),this.addEventListener("click",this.onClick,{signal:e}),window.addEventListener("mouseup",this.onMouseUp,{signal:e}),window.addEventListener("dragstart",this.onDragStart,{capture:!0,signal:e}),window.addEventListener("dragend",this.onDragEnd,{capture:!0,signal:e})}disconnectedCallback(){this.eventController?.abort(),this.eventController=void 0,this.detachAnchor(),this.unregisterDismissible(),clearTimeout(this.hoverTimeout),super.disconnectedCallback?.()}updated(e){e.has("open")&&(this.open?this.registerDismissible():this.unregisterDismissible()),e.has("disabled")&&this.disabled&&this.open&&(this.open=!1)}attachAnchor(e){null!=e&&(this.anchorEl=e,this.addAriaDescribedBy(e,this.bodyId))}detachAnchor(){null!=this.anchorEl&&(this.removeAriaDescribedBy(this.anchorEl,this.bodyId),this.anchorEl=void 0)}addAriaDescribedBy(e,t){let r=(e.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean);r.includes(t)||(r.push(t),e.setAttribute("aria-describedby",r.join(" ")))}removeAriaDescribedBy(e,t){let r=(e.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean).filter(e=>e!==t);0===r.length?e.removeAttribute("aria-describedby"):e.setAttribute("aria-describedby",r.join(" "))}registerDismissible(){iz.includes(this)||(iz.push(this),document.addEventListener("keydown",this.onDocumentKeyDown,{signal:this.eventController?.signal}))}unregisterDismissible(){let e=iz.indexOf(this);-1!==e&&iz.splice(e,1),document.removeEventListener("keydown",this.onDocumentKeyDown)}async hide(){this.open=!1,await this.updateComplete}async show(){this.disabled||this.suppressed||(this.open=!0,await this.updateComplete)}render(){var e;return ei`<wa-popup
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
`)?ol(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</wa-popup>`}};iD.styles=u`
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
	`,iM([ev()],iD.prototype,"content",2),iM([ev({reflect:!0})],iD.prototype,"placement",2),iM([ev({type:Boolean})],iD.prototype,"disabled",2),iM([ev({type:Number})],iD.prototype,"distance",2),iM([ev({type:Number,attribute:"show-delay"})],iD.prototype,"showDelay",2),iM([ev({type:Number,attribute:"hide-delay"})],iD.prototype,"hideDelay",2),iM([ev({type:Boolean,attribute:"hide-on-click"})],iD.prototype,"hideOnClick",2),iM([ex("wa-popup")],iD.prototype,"popup",2),iM([ew()],iD.prototype,"suppressed",2),iM([ew()],iD.prototype,"open",2),iD=iM([em("gl-tooltip")],iD);var ij=Object.defineProperty,iq=Object.getOwnPropertyDescriptor,iU=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?iq(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&ij(t,r,s),s};let iB=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ei`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??ea}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ei`<gl-tooltip placement=${this.tooltipPlacement??ea}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ei`<a
				class="control"
				aria-label=${this.ariaLabel??ea}
				tabindex="${(!1===this.disabled?void 0:-1)??ea}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ei`<button
			class="control"
			role=${this.role??ea}
			aria-label=${this.ariaLabel??ea}
			aria-checked=${this.ariaChecked??ea}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};iB.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},iB.styles=[rF,u`
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
				${rH}
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
		`],iU([ex(".control")],iB.prototype,"control",2),iU([ev({reflect:!0})],iB.prototype,"appearance",2),iU([ev({reflect:!0})],iB.prototype,"variant",2),iU([ev({type:Boolean,reflect:!0})],iB.prototype,"disabled",2),iU([ev({reflect:!0})],iB.prototype,"density",2),iU([ev({type:Boolean,reflect:!0})],iB.prototype,"full",2),iU([ev()],iB.prototype,"href",2),iU([ev()],iB.prototype,"tooltip",2),iU([ev()],iB.prototype,"tooltipPlacement",2),iU([ev({type:Boolean,reflect:!0})],iB.prototype,"truncate",2),iU([ev({type:String,attribute:"aria-label"})],iB.prototype,"ariaLabel",2),iB=iU([em("gl-button")],iB);let iG=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a","add-small":"\\ec7b","remove-small":"\\ec7c","worktree-small":"\\ec7d",worktree:"\\ec7e","screen-cut":"\\ec7f",ask:"\\ec80",openai:"\\ec81",claude:"\\ec82","open-in-window":"\\ec83","new-session":"\\ec84"}),iW=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147","diff-right":"\\f11b","diff-left":"\\f12e","accept-right":"\\f12f","accept-left":"\\f130","accept-all-right":"\\f131","accept-all-left":"\\f132",continue:"\\f148",skip:"\\f149",abort:"\\f14a",pause:"\\f14b","kanban-view":"\\f14c","filter-mixed":"\\f14d"});var iH=Object.defineProperty,iF=Object.getOwnPropertyDescriptor,iV=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?iF(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&iH(t,r,s),s};function iZ(e,t=""){return p(Object.entries(e).map(([e,r])=>(function(e,t,r=""){return`:host([icon='${r}${e}'])::before { content: '${t}'; }`})(e,r,t)).join(""))}let iK=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};iK.styles=u`
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

		${iZ(iG)}
		${iZ(iW,"gl-")}

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
	`,iV([ev({reflect:!0})],iK.prototype,"icon",2),iV([ev({reflect:!0})],iK.prototype,"modifier",2),iV([ev({type:Number})],iK.prototype,"size",2),iV([ev({reflect:!0})],iK.prototype,"flip",2),iV([ev({reflect:!0})],iK.prototype,"rotate",2),iK=iV([em("code-icon")],iK);var iY=Object.defineProperty,iJ=Object.getOwnPropertyDescriptor,iQ=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?iJ(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&iY(t,r,s),s};let iX=class extends lit_element_i{constructor(){super(...arguments),this.completed=!1,this.expanded=!1}focus(e){this.header?.focus(e)}toggleExpanded(e=!this.expanded){this.expanded=e,queueMicrotask(()=>{this.dispatchEvent(new CustomEvent("gl-walkthrough-step-expand-toggled",{detail:{expanded:e},bubbles:!0,composed:!0}))})}handleHeaderClick(){this.toggleExpanded()}handleHeaderKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.toggleExpanded())}render(){return ei`
			<div
				part="header"
				class="header"
				role="button"
				tabindex="0"
				aria-expanded=${this.expanded}
				@click=${this.handleHeaderClick}
				@keydown=${this.handleHeaderKeydown}
			>
				<code-icon class="status-icon" icon=${this.completed?"pass-filled":"circle-large"}></code-icon>
				<span class="title"><slot name="title"></slot></span>
				<code-icon class="icon" icon="chevron-right"></code-icon>
			</div>
			<div class="content">
				<slot></slot>
			</div>
		`}};iX.styles=[u`
			:host {
				display: block;
			}

			:host(:focus-within) {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.header {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 0.6em;
				cursor: pointer;
				user-select: none;
			}

			.header:hover {
				opacity: 0.8;
			}

			.header:focus {
				outline: none;
			}

			.icon {
				flex: none;
				transition: transform 0.2s ease;
			}

			:host([expanded]) .icon {
				transform: rotate(90deg);
			}

			.title {
				display: block;
			}

			.status-icon {
				flex: none;
				color: var(--vscode-descriptionForeground);
			}

			:host([completed]) .status-icon {
				color: var(--vscode-textLink-foreground);
			}

			.content {
				display: none;
				flex-direction: column;
				gap: 1em;
			}

			:host([expanded]) .content {
				display: flex;
			}
		`],iQ([ev({type:String})],iX.prototype,"stepId",2),iQ([ev({type:Boolean,reflect:!0})],iX.prototype,"completed",2),iQ([ev({type:Boolean,reflect:!0})],iX.prototype,"expanded",2),iQ([ex(".header")],iX.prototype,"header",2),iX=iQ([em("gl-walkthrough-step")],iX);let i1=class extends lit_element_i{constructor(){super(...arguments),this.onStepExpandToggled=e=>{let t=e.composedPath().find(e=>e.matches?.("gl-walkthrough-step"));null!=t&&(t.expanded?(this.steps.forEach(e=>{e!==t&&(e.expanded=!1)}),this.expandedStepId=t.stepId):this.expandedStepId=void 0)}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("gl-walkthrough-step-expand-toggled",this.onStepExpandToggled)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("gl-walkthrough-step-expand-toggled",this.onStepExpandToggled)}updated(e){super.updated(e),e.has("expandedStepId")&&this.syncStepsToExpandedStepId()}syncStepsToExpandedStepId(){this.steps.forEach(e=>{e.expanded=null!=e.stepId&&e.stepId===this.expandedStepId})}getDefaultStepToExpand(){return this.steps.find(e=>!e.completed)??this.steps[0]}handleSlotChange(){if(null!=this.expandedStepId)this.syncStepsToExpandedStepId();else{let e=this.steps.find(e=>e.expanded);if(null!=e)this.expandedStepId=e.stepId;else{let e=this.getDefaultStepToExpand();e?.stepId!=null&&(this.expandedStepId=e.stepId)}}}async resetToDefaultAndFocus(){let e=this.getDefaultStepToExpand();e?.stepId!=null&&(this.expandedStepId=e.stepId,await this.updateComplete,await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),e.focus())}render(){return ei`<slot @slotchange=${this.handleSlotChange}></slot>`}};iQ([(eS={selector:"gl-walkthrough-step"},(e,t)=>{let{slot:r,selector:o}=eS??{},i="slot"+(r?`[name=${r}]`:":not([name])");return ey(e,t,{get(){let e=this.renderRoot?.querySelector(i),t=e?.assignedElements(eS)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],i1.prototype,"steps",2),iQ([ev({type:String,reflect:!0,attribute:"expanded-step-id"})],i1.prototype,"expandedStepId",2),i1=iQ([em("gl-walkthrough")],i1);let i0=class extends lit_element_i{constructor(){super(...arguments),this.doneCount=0,this.allCount=0}get progressPercent(){return 0===this.allCount?0:this.doneCount/this.allCount*100}updated(){this._fillEl&&(this._fillEl.style.width=`${this.progressPercent}%`)}render(){return ei`
			<div class="progress">
				<div class="progress-bar">
					<div class="progress-bar__fill"></div>
				</div>
				<p>${this.doneCount}/${this.allCount} steps complete</p>
			</div>
		`}};i0.styles=[u`
			:host {
				display: block;
			}

			.progress {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.5em;
				padding: 0 2em;
			}

			.progress-bar {
				width: 100%;
				height: 4px;
				background: var(--card-background);
				border-radius: 2px;
				overflow: hidden;
			}

			.progress-bar__fill {
				height: 100%;
				background: linear-gradient(to right, #7900c9, #196fff);
				border-radius: 2px;
				transition: width 0.3s ease;
			}

			p {
				margin: 0;
				color: var(--vscode-descriptionForeground);
			}
		`],iQ([ev({type:Number})],i0.prototype,"doneCount",2),iQ([ev({type:Number})],i0.prototype,"allCount",2),iQ([ex(".progress-bar__fill")],i0.prototype,"_fillEl",2),i0=iQ([em("gl-walkthrough-progress")],i0);var i2=Object.defineProperty,i3=Object.getOwnPropertyDescriptor,i5=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?i3(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&i2(t,r,s),s};let i4=[{id:"get-started-community",walkthroughKey:"gettingStarted",title:"Welcome to GitLens",body:ei`
			<p>
				The GitLens Community edition lets you track code changes and see who made them with inline blame
				annotations, hovers, and more—completely free.
			</p>
			<p>
				With <strong>GitLens Pro</strong> (Free 14-Day Trial), you’ll get full access to advanced visualization,
				collaboration, and built-in AI:
			</p>
			<ul>
				<li><strong>Commit Graph:</strong> visualize every branch and commit relationship</li>
				<li>
					<strong>Visual File History:</strong> see how a file has evolved with a graph of what changed and
					when
				</li>
				<li><strong>Launchpad & Worktrees:</strong> manage PRs and branches in one hub</li>
				<li><strong>GitKraken AI:</strong> writes commits, PRs & changelogs for you.</li>
			</ul>
			<div class="card-part--centered">
				<gl-button class="start-trial-button" href="command:gitlens.welcome.plus.signUp"
					>Get Started with GitLens Pro</gl-button
				>
			</div>
			<p>or <a href="command:gitlens.welcome.plus.login">sign in</a></p>
		`,condition:e=>!e.plusState||e.plusState<r3.Trial},{id:"welcome-in-trial",walkthroughKey:"gettingStarted",title:"Welcome to GitLens Pro",body:ei`
			<p>Thanks for starting your <strong>GitLens Pro</strong> trial.</p>
			<p>
				Complete this walkthrough to experience enhanced PR review tools, deeper code history visualizations,
				and streamlined collaboration to help boost your productivity.
			</p>
			<a href="#continue-walkthrough">Continue the Walkthrough</a>
			<p>
				Once your trial ends, you'll return to <strong>GitLens Community</strong> — where you can still leverage
				features like in-editor blame annotations, hovers, CodeLens, and more.
			</p>
			<div class="card-part--centered">
				<gl-button class="start-trial-button" href="command:gitlens.welcome.plus.upgrade"
					>Upgrade to GitLens Pro</gl-button
				>
			</div>
		`,condition:e=>e.plusState===r3.Trial},{id:"welcome-in-trial-expired",walkthroughKey:"gettingStarted",title:"Get the most out of GitLens",body:ei`
			<p>Thanks for installing GitLens and trying out GitLens Pro.</p>
			<p>
				You're now on the <strong>GitLens Community</strong> edition. Track code changes and see who made them
				with features like in-editor blame annotations, hovers, CodeLens, and more—completely free.
			</p>
			<p>
				Learn more about the
				<a href="command:gitlens.welcome.openCommunityVsPro">difference between GitLens Community vs. Pro</a>.
			</p>
			<p><strong>Unlock more powerful tools with GitLens Pro</strong></p>
			<div class="card-part--centered">
				<gl-button class="start-trial-button" href="command:gitlens.welcome.plus.upgrade"
					>Upgrade to GitLens Pro</gl-button
				>
			</div>
			<p>
				With GitLens Pro, you can accelerate PR reviews, visualize code history in-depth, and enhance
				collaboration across your team. It's the perfect upgrade to streamline your VS Code workflow.
			</p>
		`,condition:e=>e.plusState===r3.TrialExpired},{id:"welcome-in-trial-expired-eligible",walkthroughKey:"gettingStarted",title:"Get the most out of GitLens",body:ei`
			<p>Thanks for installing GitLens and trying out GitLens Pro.</p>
			<p>
				You're using <strong>GitLens Community</strong> edition. Track code changes and see who made them with
				features like in-editor blame annotations, hovers, CodeLens, and more—completely free.
			</p>
			<p><strong>Unlock more powerful tools — Try GitLens Pro again</strong> free for another 14 days.</p>
			<div class="card-part--centered">
				<gl-button class="start-trial-button" href="command:gitlens.welcome.plus.reactivate"
					>Reactivate GitLens Pro Trial</gl-button
				>
			</div>
			<p>
				With GitLens Pro, you can accelerate PR reviews, visualize code history in-depth, and enhance
				collaboration across your team. It's the perfect upgrade to streamline your VS Code workflow.
			</p>
		`,condition:e=>e.plusState===r3.TrialReactivationEligible},{id:"welcome-paid",walkthroughKey:"gettingStarted",title:"Discover the Benefits of GitLens Pro",body:ei`
			<p>
				As a GitLens Pro user, you have access to powerful tools that accelerate PR reviews, provide deeper code
				history visualizations, and streamline collaboration across your team.
			</p>
			<div class="card-part--centered">
				<gl-button href="#continue-walkthrough">Continue the Walkthrough</gl-button>
			</div>
			<p class="card-part--tip">
				<em>Tip:</em> To get the most out of your GitLens Pro experience, complete the walkthrough and visit our
				Help Center for in-depth guides.
			</p>
			<a href="command:gitlens.welcome.openHelpCenter">Learn more in the Help Center</a>
		`,condition:e=>e.plusState===r3.Paid},{id:"visualize-code-history",walkthroughKey:"visualizeCodeHistory",title:"Commit Graph: Your Command Center",body:ei`
			<p>
				The <strong>Commit Graph</strong> brings your development and agentic workflows together. Parallelize
				your work — manage multiple active worktrees, orchestrate concurrent agents, and execute your entire Git
				lifecycle without context-switching.
			</p>
			<ul>
				<li>
					<strong>Complete Your Entire Workflow:</strong> Review changes, stage files, compose commits, and
					resolve conflicts — with guided next steps like pull, push, or draft a PR.
				</li>
				<li>
					<strong>Orchestrate Agents:</strong> Launch, monitor, and interact with agents directly from the
					graph to approve permissions and review execution plans inline.
				</li>
				<li>
					<strong>AI Compose & Review:</strong> Restructure changes into clean, review-ready commits and catch
					issues early with severity-tagged reviews you can delegate to an agent.
				</li>
				<li>
					<strong>Unmatched Git Context:</strong> Navigate complex repositories with a searchable, color-coded
					commit timeline. Instantly understand branch relationships, authorship patterns, and commit
					sequences.
				</li>
			</ul>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.welcome.showGraph">Discover your Commit Graph</gl-button>
			</div>
		`},{id:"home-view",walkthroughKey:"homeView",title:"Streamline Workflow with the Home View",body:ei`
			<p>
				Streamline your workflow — effortlessly track, manage, and collaborate on your branches and pull
				requests, all in one intuitive hub.
			</p>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.welcome.showHomeView">Open Home View</gl-button>
			</div>
		`},{id:"ai-features",walkthroughKey:"aiFeatures",title:"Commit smarter, not harder",body:ei`
			<p>
				Let AI handle the heavy lifting - from turning your changes into clear, logical commits to getting
				context on others' work. GitLens’s AI features make reviews efficient and keep your history clean.
			</p>
			<ul>
				<li>
					<strong>Auto-Compose Commits:</strong> instantly generate a sequence of commits with descriptive
					summaries in an interactive editor
				</li>
				<li>
					<strong>Explain Commits and Branches:</strong> understand changes without wasting time diving into
					the diffs
				</li>
				<li><strong>Create PR Titles & Descriptions:</strong> save reviewers 10+ minutes per review</li>
			</ul>
			<p>
				Stay in control. Review and edit AI suggestions before finalizing, and
				<a href="command:gitlens.ai.switchProvider">configure your preferred AI provider</a>
				and model to fit your needs.
			</p>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.welcome.showComposer">Compose Commits with AI</gl-button>
			</div>
		`},{id:"git-blame",walkthroughKey:"gitBlame",title:"Learn the why behind every code Line",body:ei`
			<p>See who changed a line, when and why — without leaving your editor.</p>
			<p>Hover over blame annotations to:</p>
			<ul>
				<li>View previous file revisions</li>
				<li>Open related PRs</li>
				<li>Jump to commits in the Graph</li>
				<li>Compare with previous versions</li>
			</ul>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.showSettingsPage!current-line">Configure Inline Blame</gl-button>
			</div>
		`},{id:"accelerate-pr-reviews",walkthroughKey:"prReviews",title:"Manage all your work in one place",body:ei`
			<p>Keep everything at your fingertips with Launchpad & Worktrees.</p>
			<ul>
				<li><strong>Launchpad:</strong> view and manage all your PRs and branches from one hub</li>
				<li><strong>Worktrees:</strong> code, test, and review on multiple branches in parallel</li>
				<li>
					<strong>Integrations:</strong> connect PRs and issues from GitHub, GitLab, Jira, Azure DevOps & more
				</li>
			</ul>
			<p>Stay in flow, ship faster, and never lose track of what matters.</p>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.welcome.showLaunchpad">Open Launchpad</gl-button>
			</div>
		`},{id:"mcp-bundled",walkthroughKey:"mcpFeatures",title:"GitKraken MCP",body:ei`
			<p>
				GitKraken MCP is active in your AI chat, leveraging Git and your integrations to provide context and
				perform actions. You can also connect MCP to other agents on your machine.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.ai.mcp.selectAgents",{source:"welcome"})}"
					>Connect More Agents</gl-button
				>
			</div>
			<p><a href="${r2.helpCenterMCP}">Learn more in the Help Center</a></p>
		`,condition:e=>!1===e.mcpNeedsInstall&&!e.mcpShowCleanupNotice},{id:"mcp-bundled-cleanup",walkthroughKey:"mcpFeatures",title:"GitKraken MCP",body:ei`
			<p>
				GitKraken MCP is active in your AI chat, leveraging Git and your integrations to provide context and
				perform actions. You can also connect MCP to other agents on your machine.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.ai.mcp.selectAgents",{source:"welcome"})}"
					>Connect More Agents</gl-button
				>
			</div>
			<p>
				<strong>Note:</strong> You may have a duplicate entry in your Cursor <code>mcp.json</code> from a
				previous install. Remove <code>mcpServers.GitKraken</code> to clean it up.
			</p>
			<p><a href="${r2.helpCenterMCP}">Learn more in the Help Center</a></p>
		`,condition:e=>!1===e.mcpNeedsInstall&&e.mcpShowCleanupNotice},{id:"mcp-install",walkthroughKey:"mcpFeatures",title:"Install GitKraken MCP for GitLens",body:ei`
			<p>
				Leverage Git and your integrations (issues, PRs, etc) to provide context and perform actions in AI chat.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.ai.mcp.install",{source:"welcome"})}"
					>Install GitKraken MCP</gl-button
				>
			</div>
			<p><a href="${r2.helpCenterMCP}">Learn more</a></p>
		`,condition:e=>!0===e.mcpNeedsInstall}],i6=[{id:"graph-agent-monitoring",graphWalkthroughKey:"graphAgentMonitoring",title:"Stay on top of every running agent",body:ei`
			<p>
				Every active agent session shows up alongside your work. See a status pill for each session on the
				branch cards in the Home view and Graph sidebar, or see associated agents in the details panel when
				viewing working changes. See what needs attention. Hover for the full picture. Take action &mdash;
				resume, respond, switch &mdash; straight from the status. No more rotating through terminal tabs or chat
				panes to figure out which agent needs you.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.showGraph",{sidebarPanel:"overview"})}"
					>Open the Overview Sidebar</gl-button
				>
			</div>
		`},{id:"graph-parallel-work",graphWalkthroughKey:"graphParallelWork",title:"All your parallel work, in one Graph",body:ei`
			<p>
				With agents running across multiple worktrees, working changes used to mean opening another window or
				directory just to remember what you (or your agent) left half-finished. Not anymore.
				<strong>Multi-WIP visibility:</strong> every worktree's working changes are visible at the same time, in
				the same Graph. <strong>Focused Graph mode:</strong> when you're heads-down on one branch, scope the
				Graph to just the commits that matter &mdash; the bigger picture is always one click away.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.showGraph",{action:"scope-to-branch"})}"
					>Focus the Commit Graph</gl-button
				>
			</div>
		`},{id:"graph-ai-review",graphWalkthroughKey:"graphAiReview",title:"Review changes with AI in the details panel",body:ei`
			<p>
				The new Review mode in the details panel reads through any commits or WIP and surfaces severity-tagged
				insights and a summary of changes, so you can ensure nothing's missed before you ship.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.showGraph",{action:"enter-review"})}"
					>Try Review Mode</gl-button
				>
			</div>
		`},{id:"graph-compose",graphWalkthroughKey:"graphCompose",title:"Compose working changes into logical Commits",body:ei`
			<p>
				Compose mode lives right in the details panel: select files, exclude noise, and let AI split a sprawling
				WIP into a series of focused commits &mdash; without ever opening a separate view. Your reviewers will
				thank you, and so will your future self.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.showGraph",{action:"enter-compose"})}"
					>Try Compose Mode</gl-button
				>
			</div>
		`},{id:"graph-compare",graphWalkthroughKey:"graphCompare",title:"Compare any refs from your Graph selection",body:ei`
			<p>
				Select a commit or multi-select rows in the Graph and jump straight into Compare mode in the details
				panel. Branch vs. branch, commit vs. commit, working changes vs. anything &mdash; just select and
				compare. It's the fastest way to get eyes on the exact diff you care about.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.showGraph",{action:"open-compare"})}"
					>Open Compare Mode</gl-button
				>
			</div>
		`},{id:"graph-next-steps",graphWalkthroughKey:"graphNextSteps",title:"Always know what to do next",body:ei`
			<p>
				The working changes view of the details panel is your workflow guide. Selecting on a working changes row
				surfaces the next action that keeps the loop moving: respond to an awaiting agent, push, open a PR,
				resolve a conflict, finish the rebase. Nothing in flight? The integrated Launchpad points you to the
				next PR or issue worth picking up.
			</p>
			<div class="card-part--centered">
				<gl-button href="${r5("gitlens.showGraph",{action:"show-wip"})}"
					>See My Working Changes</gl-button
				>
			</div>
		`}],i7=class extends lit_element_i{constructor(){super(...arguments),this.closeable=!1,this.isLightTheme=!1,this.handleWalkthroughFocusCommand=()=>this.walkthrough?.resetToDefaultAndFocus(),this.handleClick=e=>{let t=e.composedPath()[0],r=t.closest?.('a[href="#continue-walkthrough"]'),o=e.target.closest?.('gl-button[href="#continue-walkthrough"]');(null!=r||null!=o)&&(e.preventDefault(),e.stopPropagation(),this.walkthrough?.resetToDefaultAndFocus())}}connectedCallback(){super.connectedCallback?.(),this._telemetry.sendEvent({name:"welcome/action",data:{name:"shown"},source:{source:"welcome"}}),window.addEventListener("gl-walkthrough-focus-command",this.handleWalkthroughFocusCommand),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("gl-walkthrough-focus-command",this.handleWalkthroughFocusCommand),this.removeEventListener("click",this.handleClick)}render(){return this._state?"graph"===this._state.mode?this.renderGraphWalkthrough():this.renderMainWalkthrough():ea}renderMainWalkthrough(){return ei`
			<div part="page" class="welcome scrollable">
				<div class="section header">
					<h1><gitlens-logo-circle></gitlens-logo-circle><span>Get Started with GitLens</span></h1>
					<p>
						Supercharge Git and unlock untapped knowledge within your repo to better understand, write, and
						review code.
					</p>
				</div>
				<gl-walkthrough-progress
					class="section"
					.doneCount=${this._state.walkthroughProgress?.doneCount??0}
					.allCount=${this._state.walkthroughProgress?.allCount??0}
				></gl-walkthrough-progress>
				<div class="section section--centered">
					<p>
						<a class="back-link" href="${r5("gitlens.showWelcomeView",{mode:"graph"})}"
							>See what's new in the Commit Graph &rarr;</a
						>
					</p>
				</div>
				<gl-walkthrough class="section">
					${i4.filter(e=>!e.condition||e.condition(this._state)).map(e=>ei`
								<gl-walkthrough-step
									class="card"
									stepId=${e.id}
									.completed=${null!=e.walkthroughKey&&this._state.walkthroughProgress?.state[e.walkthroughKey]===!0}
								>
									<h1 slot="title">${e.title}</h1>
									${e.body}
								</gl-walkthrough-step>
							`)}
				</gl-walkthrough>
				<div class="section section--centered">
					<p>
						You also have access to the
						<a href="https://gitkraken.dev/tools" target="_blank">GitKraken DevEx platform</a>, unleashing
						powerful Git visualization & productivity capabilities everywhere you work: IDE, desktop,
						browser, and terminal.
					</p>
				</div>
			</div>
		`}renderGraphWalkthrough(){return ei`
			<div part="page" class="welcome scrollable">
				<div class="section section--back">
					<a href="${r5("gitlens.showWelcomeView")}" class="back-link"
						>&larr; Back to the GitLens walkthrough</a
					>
				</div>
				<div class="section header">
					<h1><gitlens-logo-circle></gitlens-logo-circle><span>What's new in GitLens 18</span></h1>
				</div>
				<gl-walkthrough-progress
					class="section"
					.doneCount=${this._state.graphWalkthroughProgress?.doneCount??0}
					.allCount=${this._state.graphWalkthroughProgress?.allCount??0}
				></gl-walkthrough-progress>
				<gl-walkthrough class="section">
					${i6.map(e=>ei`
							<gl-walkthrough-step
								class="card"
								stepId=${e.id}
								.completed=${this._state.graphWalkthroughProgress?.state[e.graphWalkthroughKey]===!0}
							>
								<h1 slot="title">${e.title}</h1>
								${e.body}
							</gl-walkthrough-step>
						`)}
				</gl-walkthrough>
				<div class="section section--centered">
					<p>
						You also have access to the
						<a href="https://gitkraken.dev/tools" target="_blank">GitKraken DevEx platform</a>, unleashing
						powerful Git visualization & productivity capabilities everywhere you work: IDE, desktop,
						browser, and terminal.
					</p>
				</div>
			</div>
		`}};i7.styles=[rV,oi],i5([ev({type:Boolean})],i7.prototype,"closeable",2),i5([ev({type:String})],i7.prototype,"webroot",2),i5([ev({type:Boolean})],i7.prototype,"isLightTheme",2),i5([eC({context:"welcome-state",subscribe:!0}),ew()],i7.prototype,"_state",2),i5([eC({context:"ipc"})],i7.prototype,"_ipc",2),i5([eC({context:"telemetry"})],i7.prototype,"_telemetry",2),i5([ex("gl-walkthrough")],i7.prototype,"walkthrough",2),i7=i5([em("gl-welcome-page")],i7);var i8=Object.defineProperty,i9=Object.getOwnPropertyDescriptor,ne=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?i9(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&i8(t,r,s),s};let nt=class extends GlAppHost{constructor(){super(...arguments),this.isLightTheme=!1}createStateProvider(e,t,r){return new WelcomeStateProvider(this,e,t,r)}onThemeUpdated(e){this.isLightTheme=e.isLightTheme}render(){return ei`
			<div class="welcome scrollable">
				<gl-welcome-page .webroot=${this.webroot} .isLightTheme=${this.isLightTheme}></gl-welcome-page>
			</div>
		`}};nt.styles=[rV,r1],ne([ev({type:String})],nt.prototype,"webroot",2),ne([ew()],nt.prototype,"isLightTheme",2),nt=ne([em("gl-welcome-app")],nt);export{nt as GlWelcomeApp};