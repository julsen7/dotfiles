let e,t,i,o,r,s,a,c,h,p;var u,g,m,f,b,v,_,w,x={285(e,t,i){i.d(t,{FlowLayout:()=>FlowLayout,flow:()=>r}),i.r(t);let SizeCache=class SizeCache{constructor(e){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,e?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(e,t){let i=this._map.get(e)||0;this._map.set(e,t),this.totalSize+=t-i}get averageSize(){if(this._map.size>0){let e=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(e):e}return 0}getSize(e){return this._map.get(e)}clear(){this._map.clear(),this.totalSize=0}};function o(e){return"horizontal"===e?"width":"height"}let BaseLayout=class BaseLayout{_getDefaultConfig(){return{direction:"vertical"}}constructor(e,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=e,Promise.resolve().then(()=>this.config=t||this._getDefaultConfig())}set config(e){Object.assign(this,Object.assign({},this._getDefaultConfig(),e))}get config(){return{direction:this.direction}}get items(){return this._items}set items(e){this._setItems(e)}_setItems(e){e!==this._items&&(this._items=e,this._scheduleReflow())}get direction(){return this._direction}set direction(e){(e="horizontal"===e?e:"vertical")!==this._direction&&(this._direction=e,this._sizeDim="horizontal"===e?"width":"height",this._secondarySizeDim="horizontal"===e?"height":"width",this._positionDim="horizontal"===e?"left":"top",this._secondaryPositionDim="horizontal"===e?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(e){let{_viewDim1:t,_viewDim2:i}=this;Object.assign(this._viewportSize,e),i!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(e){Object.assign(this._latestCoords,e);let t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(e=!1){(e||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(e){this._pin=e,this._triggerReflow()}get pin(){if(null!==this._pin){let{index:e,block:t}=this._pin;return{index:Math.max(0,Math.min(e,this.items.length-1)),block:t}}return null}_clampScrollPosition(e){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(e,this.totalScrollSize[o(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){let e=this._scrollPosition,{index:t,block:i}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:i||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=e-this._scrollPosition}}_calculateScrollIntoViewPosition(e){let{block:t}=e,i=Math.min(this.items.length,Math.max(0,e.index)),o=this._getItemPosition(i)[this._positionDim],r=o;if("start"!==t){let e=this._getItemSize(i)[this._sizeDim];if("center"===t)r=o-.5*this._viewDim1+.5*e;else{let i=o-this._viewDim1+e;if("end"===t)r=i;else{let e=this._scrollPosition;r=Math.abs(e-o)<Math.abs(e-i)?o:i}}}return r+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(r)}getScrollIntoViewCoordinates(e){return{[this._positionDim]:this._calculateScrollIntoViewPosition(e)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let e=new Map;if(-1!==this._first&&-1!==this._last)for(let t=this._first;t<=this._last;t++)e.set(t,this._getItemPosition(t));let t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:e};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return -1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{let e=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>e||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(e){if(-1===this._first||-1===this._last)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let i=this._last;for(;i>this._first&&Math.round(this._getItemPosition(i)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)i--;(t!==this._firstVisible||i!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=i,e&&e.emit&&this._sendVisibilityChangedMessage())}};let r=e=>Object.assign({type:FlowLayout},e);function s(e){return"horizontal"===e?"marginLeft":"marginTop"}let MetricsCache=class MetricsCache{constructor(){this._childSizeCache=new SizeCache,this._marginSizeCache=new SizeCache,this._metricsCache=new Map}update(e,t){let i=new Set;for(let r of(Object.keys(e).forEach(r=>{let s=Number(r);this._metricsCache.set(s,e[s]),this._childSizeCache.set(s,e[s][o(t)]),i.add(s),i.add(s+1)}),i)){let e=this._metricsCache.get(r)?.[s(t)]||0,i=this._metricsCache.get(r-1)?.["horizontal"===t?"marginRight":"marginBottom"]||0;this._marginSizeCache.set(r,function(e,t){let i=[e,t].sort();return i[1]<=0?Math.min(...i):i[0]>=0?Math.max(...i):i[0]+i[1]}(e,i))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(e,t){return this._metricsCache.get(e)?.[s(t)]||0}getChildSize(e){return this._childSizeCache.getSize(e)}getMarginSize(e){return this._marginSizeCache.getSize(e)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}};let FlowLayout=class FlowLayout extends BaseLayout{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new MetricsCache,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(e){this._metricsCache.update(e,this.direction),this._scheduleReflow()}_getPhysicalItem(e){return this._newPhysicalItems.get(e)??this._physicalItems.get(e)}_getSize(e){return this._getPhysicalItem(e)&&this._metricsCache.getChildSize(e)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(e){let t=this._metricsCache;if(-1===this._first||-1===this._last)return t.averageMarginSize+e*(t.averageMarginSize+this._getAverageSize());if(e<this._first){let i=this._first-e;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(i*t.averageChildSize+(i-1)*t.averageMarginSize)}{let i=e-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+i*(t.averageChildSize+t.averageMarginSize)}}_getPosition(e){let t=this._getPhysicalItem(e),{averageMarginSize:i}=this._metricsCache;return 0===e?this._metricsCache.getMarginSize(0)??i:t?t.pos:this._estimatePosition(e)}_calculateAnchor(e,t){return e<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((e+t)/2/this._delta)))}_getAnchor(e,t){if(0===this._physicalItems.size||this._first<0||this._last<0)return this._calculateAnchor(e,t);let i=this._getPhysicalItem(this._first),o=this._getPhysicalItem(this._last),r=i.pos;if(o.pos+this._metricsCache.getChildSize(this._last)<e||r>t)return this._calculateAnchor(e,t);let s=this._firstVisible-1,a=-1/0;for(;a<e;)a=this._getPhysicalItem(++s).pos+this._metricsCache.getChildSize(s);return s}_getActiveItems(){0===this._viewDim1||0===this.items.length?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let e=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e,this._stable=!0}_getItems(){let e,t,i=this._newPhysicalItems;if(this._stable=!0,null!==this.pin){let{index:e}=this.pin;this._anchorIdx=e,this._anchorPos=this._getPosition(e)}if(e=this._scrollPosition-this._overhang,(t=this._scrollPosition+this._viewDim1+this._overhang)<0||e>this._scrollSize)return void this._clearItems();(null===this._anchorIdx||null===this._anchorPos)&&(this._anchorIdx=this._getAnchor(e,t),this._anchorPos=this._getPosition(this._anchorIdx));let o=this._getSize(this._anchorIdx);void 0===o&&(this._stable=!1,o=this._getAverageSize());let r=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,s=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=r),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-s-o);let a=0;for(this._anchorPos+o+s<e&&(a=e-(this._anchorPos+o+s)),this._anchorPos-r>t&&(a=t-(this._anchorPos-r)),a&&(this._scrollPosition-=a,e-=a,t-=a,this._scrollError+=a),i.set(this._anchorIdx,{pos:this._anchorPos,size:o}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-r,this._physicalMax=this._anchorPos+o+s;this._physicalMin>e&&this._first>0;){let e=this._getSize(--this._first);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._first);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize),this._physicalMin-=e;let o=this._physicalMin;if(i.set(this._first,{pos:o,size:e}),this._physicalMin-=t,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<t&&this._last<this.items.length-1;){let e=this._getSize(++this._last);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._last);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize);let o=this._physicalMax;if(i.set(this._last,{pos:o,size:e}),this._physicalMax+=e+t,!this._stable&&!this._estimate)break}let c=this._calculateError();c&&(this._physicalMin-=c,this._physicalMax-=c,this._anchorPos-=c,this._scrollPosition-=c,i.forEach(e=>e.pos-=c),this._scrollError+=c),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=i)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:e,_last:t}=this;super._reflow(),(-1===this._first&&-1==this._last||this._first===e&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:e}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(e+this._getAverageSize())+e)}get _delta(){let{averageMarginSize:e}=this._metricsCache;return this._getAverageSize()+e}_getItemPosition(e){return{[this._positionDim]:this._getPosition(e),[this._secondaryPositionDim]:0,["horizontal"===this.direction?"xOffset":"yOffset"]:-(this._metricsCache.getLeadingMarginValue(e,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(e){return{[this._sizeDim]:this._getSize(e)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}}},C={};function $(e){var t=C[e];if(void 0!==t)return t.exports;var i=C[e]={exports:{}};return x[e](i,i.exports,$),i.exports}$.d=(e,t)=>{for(var i in t)$.o(t,i)&&!$.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},$.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),$.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Object.defineProperty($,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});var S=$(285);let E=globalThis,A=E.ShadowRoot&&(void 0===E.ShadyCSS||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),T=new WeakMap;let n=class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(A&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=T.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&T.set(t,e))}return e}toString(){return this.cssText}};let M=e=>new n("string"==typeof e?e:e+"",void 0,P),D=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]),e,P),O=A?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return M(t)})(e):e,{is:j,defineProperty:B,getOwnPropertyDescriptor:F,getOwnPropertyNames:q,getOwnPropertySymbols:N,getPrototypeOf:U}=Object,V=globalThis,K=V.trustedTypes,W=K?K.emptyScript:"",G=V.reactiveElementPolyfillSupport,Y={toAttribute(e,t){switch(t){case Boolean:e=e?W:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Q=(e,t)=>!j(e,t),X={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:Q};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&B(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=F(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let s=o?.call(this);r?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=U(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...q(e),...N(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(O(i));else void 0!==e&&t.push(O(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(A)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),o=E.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:Y).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Y;this._$Em=o;let s=r.fromAttribute(t,e.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){let s=this.constructor;if(!1===o&&(r=this[e]),!(((i??=s.getPropertyOptions(e)).hasChanged??Q)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,G?.({ReactiveElement:y}),(V.reactiveElementVersions??=[]).push("2.1.2");let J=globalThis,ee=e=>e,et=J.trustedTypes,ei=et?et.createPolicy("lit-html",{createHTML:e=>e}):void 0,eo="$lit$",er=`lit$${Math.random().toFixed(9).slice(2)}$`,es="?"+er,en=`<${es}>`,ea=document,el=()=>ea.createComment(""),ec=e=>null===e||"object"!=typeof e&&"function"!=typeof e,eh=Array.isArray,ed=e=>eh(e)||"function"==typeof e?.[Symbol.iterator],ep=`[ 	
\x0c\r]`,eu=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eg=/-->/g,em=/>/g,ef=RegExp(`>|${ep}(?:([^\\s"'>=/]+)(${ep}*=${ep}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eb=/'/g,ev=/"/g,e_=/^(?:script|style|textarea|title)$/i,ey=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ew=ey(1),ex=ey(2),ek=ey(3),eC=Symbol.for("lit-noChange"),e$=Symbol.for("lit-nothing"),eS=new WeakMap,eE=ea.createTreeWalker(ea,129);function ez(e,t){if(!eh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ei?ei.createHTML(t):t}let eI=(e,t)=>{let i=e.length-1,o=[],r,s=2===t?"<svg>":3===t?"<math>":"",a=eu;for(let t=0;t<i;t++){let i=e[t],c,h,p=-1,u=0;for(;u<i.length&&(a.lastIndex=u,null!==(h=a.exec(i)));)u=a.lastIndex,a===eu?"!--"===h[1]?a=eg:void 0!==h[1]?a=em:void 0!==h[2]?(e_.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=ef):void 0!==h[3]&&(a=ef):a===ef?">"===h[0]?(a=r??eu,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?ef:'"'===h[3]?ev:eb):a===ev||a===eb?a=ef:a===eg||a===em?a=eu:(a=ef,r=void 0);let g=a===ef&&e[t+1].startsWith("/>")?" ":"";s+=a===eu?i+en:p>=0?(o.push(c),i.slice(0,p)+eo+i.slice(p)+er+g):i+er+(-2===p?t:g)}return[ez(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0,a=e.length-1,c=this.parts,[h,p]=eI(e,t);if(this.el=lit_html_S.createElement(h,i),eE.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=eE.nextNode())&&c.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(eo)){let t=p[s++],i=o.getAttribute(e).split(er),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),o.removeAttribute(e)}else e.startsWith(er)&&(c.push({type:6,index:r}),o.removeAttribute(e));if(e_.test(o.tagName)){let e=o.textContent.split(er),t=e.length-1;if(t>0){o.textContent=et?et.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],el()),eE.nextNode(),c.push({type:2,index:++r});o.append(e[t],el())}}}else if(8===o.nodeType)if(o.data===es)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(er,e+1));)c.push({type:7,index:r}),e+=er.length-1}r++}}static createElement(e,t){let i=ea.createElement("template");return i.innerHTML=e,i}};function eA(e,t,i=e,o){if(t===eC)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl,s=ec(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e))._$AT(e,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=eA(e,r._$AS(e,t.values),r,o)),t}let R=class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??ea).importNode(t,!0);eE.currentNode=o;let r=eE.nextNode(),s=0,a=0,c=i[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new k(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new Z(r,this,e)),this._$AV.push(t),c=i[++a]}s!==c?.index&&(r=eE.nextNode(),s++)}return eE.currentNode=ea,o}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=e$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ec(e=eA(this,e,t))?e===e$||null==e||""===e?(this._$AH!==e$&&this._$AR(),this._$AH=e$):e!==this._$AH&&e!==eC&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ed(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==e$&&ec(this._$AH)?this._$AA.nextSibling.data=e:this.T(ea.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=lit_html_S.createElement(ez(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new R(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=eS.get(e.strings);return void 0===t&&eS.set(e.strings,t=new lit_html_S(e)),t}k(e){eh(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new k(this.O(el()),this.O(el()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ee(e).nextSibling;ee(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=e$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=e$}_$AI(e,t=this,i,o){let r=this.strings,s=!1;if(void 0===r)(s=!ec(e=eA(this,e,t,0))||e!==this._$AH&&e!==eC)&&(this._$AH=e);else{let o,a,c=e;for(e=r[0],o=0;o<r.length-1;o++)(a=eA(this,c[i+o],t,o))===eC&&(a=this._$AH[o]),s||=!ec(a)||a!==this._$AH[o],a===e$?e=e$:e!==e$&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!o&&this.j(e)}j(e){e===e$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===e$?void 0:e}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==e$)}};let z=class z extends H{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=eA(this,e,t,0)??e$)===eC)return;let i=this._$AH,o=e===e$&&i!==e$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==e$&&(i===e$||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){eA(this,e)}};let eL=J.litHtmlPolyfillSupport;eL?.(lit_html_S,k),(J.litHtmlVersions??=[]).push("3.3.3");let eP=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let o=i?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=i?.renderBefore??null;o._$litPart$=r=new k(t.insertBefore(el(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eC}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eP.litElementHydrateSupport?.({LitElement:lit_element_i});let eT=eP.litElementPolyfillSupport;eT?.({LitElement:lit_element_i}),(eP.litElementVersions??=[]).push("4.2.2");let eM=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eR={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:Q};function eD(e){return(t,i)=>{let o;return"object"==typeof i?((e=eR,t,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===o){let{name:o}=i;return{set(i){let r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)})(e,t,i):(o=t.hasOwnProperty(i),t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0)}}function eO(e){return eD({...e,state:!0,attribute:!1})}let ej=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function eB(e,t){return(i,o,r)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof o?i:r??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return ej(i,o,{get(){let e=t.call(this);return void 0===e&&(null!==(e=s(this))||this.hasUpdated)&&a.call(this,e),e}})}return ej(i,o,{get(){return s(this)}})}}let eF=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let eq={},eN=eF(class extends directive_i{constructor(){super(...arguments),this.ot=eq}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return eC}else if(this.ot===t)return eC;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,i)}});let FilterMapIterator=class FilterMapIterator{constructor(e,t){this.predicateMapper=t,this.done=!1,this.iterator=e[Symbol.iterator]()}next(){if(this.done)return{done:!0,value:void 0};for(;;){let e=this.iterator.next();if(e.done)return this.done=!0,{done:!0,value:void 0};let t=this.predicateMapper(e.value);if(null!=t)return{done:!1,value:t}}}[Symbol.iterator](){return this}};let eU=new Map;function eV(t,i){t??="decimal";let o=`${i??""}:${t}`,r=eU.get(o);if(null==r){let s={localeMatcher:"best fit",style:t};r=new Intl.NumberFormat(null==i?e:"system"===i?void 0:[i],s),eU.set(o,r)}return r.format}function eH(e,i,o){let r;if(null==o)return t??=eV(),`${t(i)} ${e}${1===i?"":"s"}`;let s=1===i?e:o.plural??`${e}s`;return o.only?s:(0===i?r=o.zero??i:!1===o.format?r=i:null!=o.format?r=o.format(i):(t??=eV(),r=t(i)),`${r}${o.infix??" "}${s}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var eK=((u=eK||{})[u.VerificationRequired=-1]="VerificationRequired",u[u.Community=0]="Community",u[u.DeprecatedPreview=1]="DeprecatedPreview",u[u.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",u[u.Trial=3]="Trial",u[u.TrialExpired=4]="TrialExpired",u[u.TrialReactivationEligible=5]="TrialReactivationEligible",u[u.Paid=6]="Paid",u);function eW(e){return null!=e&&(e===eK.Trial||e===eK.Paid)}let IpcCall=class IpcCall{constructor(e,t,i=!1){this.scope=e,this.reset=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,i){super(e,t,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let eG="rebase";function eZ(e){return"commit"===e.type}let eY=new IpcCommand(eG,"abort"),eQ=new IpcCommand(eG,"continue"),eX=new IpcCommand(eG,"search"),eJ=new IpcCommand(eG,"skip"),e0=new IpcCommand(eG,"start"),e1=new IpcCommand(eG,"switch"),e2=new IpcCommand(eG,"reorder"),e3=new IpcCommand(eG,"change/entry"),e4=new IpcCommand(eG,"change/entries"),e5=new IpcCommand(eG,"move/entry"),e6=new IpcCommand(eG,"move/entries"),e8=new IpcCommand(eG,"shift/entries"),e7=new IpcCommand(eG,"selection/update"),e9=new IpcCommand(eG,"revealRef"),te=new IpcCommand(eG,"avatars/get"),tt=new IpcCommand(eG,"commits/get"),ti=new IpcCommand(eG,"recompose/open"),to=new IpcCommand(eG,"closeWarning/dismiss"),tr=new IpcCommand(eG,"conflicts/openFile"),ts=new IpcCommand(eG,"conflicts/openChanges");new IpcCommand(eG,"conflicts/resolve");let tn=new IpcCommand(eG,"conflicts/stage"),ta=new IpcCommand(eG,"conflicts/resolveAll"),tl=new IpcRequest(eG,"conflicts/get"),tc=new IpcNotification(eG,"didChange"),th=new IpcNotification(eG,"avatars/didChange"),td=new IpcNotification(eG,"commits/didChange"),tp=new IpcNotification(eG,"subscription/didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,i,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=o??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,i,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=i,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:i}]of this.subscriptions)t.has(e)||(t.add(e),i.dispatchEvent(new context_request_event_s(this.context,i,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function tu({context:e}){return(t,i)=>{let o=new WeakMap;if("object"==typeof i)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let r;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){let e=new WeakMap;r={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;r={...s,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,r)}}}var tg=Object.defineProperty,tm=(e,t,i)=>{let o;return(o="symbol"!=typeof t?t+"":t)in e?tg(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,i},tf=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},tb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot access private method");return i};function t_(e,t){return Object.is(e,t)}let ty=null,tw=!1,tx=1,tk=Symbol("SIGNAL");function tC(e){let t=ty;return ty=e,t}let t$={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function tS(e){if(tw)throw Error("u">typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===ty)return;ty.consumerOnSignalRead(e);let t=ty.nextProducerIndex++;tI(ty),t<ty.producerNode.length&&ty.producerNode[t]!==e&&tz(ty)&&tE(ty.producerNode[t],ty.producerIndexOfThis[t]),ty.producerNode[t]!==e&&(ty.producerNode[t]=e,ty.producerIndexOfThis[t]=tz(ty)?function e(t,i,o){var r;if(tA(t),tI(t),0===t.liveConsumerNode.length){null==(r=t.watched)||r.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)t.producerIndexOfThis[i]=e(t.producerNode[i],t,i)}return t.liveConsumerIndexOfThis.push(o),t.liveConsumerNode.push(i)-1}(e,ty,t):0),ty.producerLastReadVersion[t]=e.version}function tE(e,t){var i;if(tA(e),tI(e),"u">typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(i=e.unwatched)||i.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)tE(e.producerNode[t],e.producerIndexOfThis[t])}let o=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[o],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[o],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let i=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];tI(o),o.producerIndexOfThis[i]=t}}function tz(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function tI(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function tA(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function tL(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==tx){if(!t.producerMustRecompute(t)&&!function(t){tI(t);for(let i=0;i<t.producerNode.length;i++){let o=t.producerNode[i],r=t.producerLastReadVersion[i];if(r!==o.version||(e(o),r!==o.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=tx;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=tx}}(e),tS(e),e.value===tM)throw e.error;return e.value}let tP=Symbol("UNSET"),tT=Symbol("COMPUTING"),tM=Symbol("ERRORED"),tR={...t$,value:tP,dirty:!0,error:null,equal:t_,producerMustRecompute:e=>e.value===tP||e.value===tT,producerRecomputeValue(e){let t;if(e.value===tT)throw Error("Detected cycle in computations.");let i=e.value;e.value=tT;let o=(e&&(e.nextProducerIndex=0),tC(e)),r=!1;try{t=e.computation.call(e.wrapper),r=i!==tP&&i!==tM&&e.equal.call(e.wrapper,i,t)}catch(i){t=tM,e.error=i}finally{if(tC(o),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(tz(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)tE(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(r){e.value=i;return}e.value=t,e.version++}},tD=function(){throw Error()};function tO(){return tS(this),this.value}let tj={...t$,equal:t_,value:void 0},tB=Symbol("node");(e=>{var t,i,o,r;let State=class State{constructor(o,r={}){let s,a;tb(this,i),tm(this,t);let c=((s=Object.create(tj)).value=o,(a=()=>(tS(s),s.value))[tk]=s,a)[tk];if(this[tB]=c,c.wrapper=this,r){let t=r.equals;t&&(c.equal=t),c.watched=r[e.subtle.watched],c.unwatched=r[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return tO.call(this[tB])}set(t){var i,o;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(tw)throw Error("Writes to signals not permitted during Watcher callback");i=this[tB],(null==ty?void 0:ty.consumerAllowSignalWrites)===!1&&tD(),i.equal.call(i.wrapper,i.value,t)||(i.value=t,o=i,o.version++,tx++,function e(t){if(void 0===t.liveConsumerNode)return;let i=tw;tw=!0;try{for(let i of t.liveConsumerNode)i.dirty||function(t){var i;t.dirty=!0,e(t),null==(i=t.consumerMarkedDirty)||i.call(t.wrapper??t)}(i)}finally{tw=i}}(o))}};t=tB,i=new WeakSet,e.isState=e=>"object"==typeof e&&tf(i,e),e.State=State;let Computed=class Computed{constructor(t,i){let s,a;tb(this,r),tm(this,o);let c=((s=Object.create(tR)).computation=t,(a=()=>tL(s))[tk]=s,a)[tk];if(c.consumerAllowSignalWrites=!0,this[tB]=c,c.wrapper=this,i){let t=i.equals;t&&(c.equal=t),c.watched=i[e.subtle.watched],c.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return tL(this[tB])}};o=tB,r=new WeakSet,e.isComputed=e=>"object"==typeof e&&tf(r,e),e.Computed=Computed,(t=>{var i,o,r,s;t.untrack=function(e){let t,i=null;try{i=tC(null),t=e()}finally{tC(i)}return t},t.introspectSources=function(t){var i;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(i=t[tB].producerNode)?void 0:i.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var i;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(i=t[tB].liveConsumerNode)?void 0:i.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let i=t[tB].liveConsumerNode;return!!i&&i.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let i=t[tB].producerNode;return!!i&&i.length>0};let Watcher=class Watcher{constructor(e){tb(this,o),tb(this,r),tm(this,i);let t=Object.create(t$);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[tB]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");tv(this,r,s).call(this,t);let i=this[tB];i.dirty=!1;let o=tC(i);for(let e of t)tS(e[tB]);tC(o)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");tv(this,r,s).call(this,t);let i=this[tB];tI(i);for(let e=i.producerNode.length-1;e>=0;e--)if(t.includes(i.producerNode[e].wrapper)){tE(i.producerNode[e],i.producerIndexOfThis[e]);let t=i.producerNode.length-1;if(i.producerNode[e]=i.producerNode[t],i.producerIndexOfThis[e]=i.producerIndexOfThis[t],i.producerNode.length--,i.producerIndexOfThis.length--,i.nextProducerIndex--,e<i.producerNode.length){let t=i.producerIndexOfThis[e],o=i.producerNode[e];tA(o),o.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[tB].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};i=tB,o=new WeakSet,r=new WeakSet,s=function(t){for(let i of t)if(!(0,e.isComputed)(i)&&!(0,e.isState)(i))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>tf(o,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=ty)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(f||(f={}));let tF=!1,tq=new f.subtle.Watcher(()=>{tF||(tF=!0,queueMicrotask(()=>{for(let e of(tF=!1,tq.getPending()))e.get();tq.watch()}))}),tN=Symbol("SignalWatcherBrand"),{I:tU}=(new FinalizationRegistry(e=>{e.unwatch(...f.subtle.introspectSources(e))}),new WeakMap,{M:eo,P:er,A:es,C:1,L:eI,R,D:ed,V:eA,I:k,H,N:L,U:z,B:I,F:Z}),tV=e=>e,tH=(e,t,i)=>{let o=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===i)i=new tU(o.insertBefore(document.createComment(""),r),o.insertBefore(document.createComment(""),r),e,e.options);else{let t=i._$AB.nextSibling,s=i._$AM,a=s!==e;if(a){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==r||a){let e=i._$AA;for(;e!==t;){let t=tV(e).nextSibling;tV(o).insertBefore(e,r),e=t}}}return i},tK=(e,t,i=e)=>(e._$AI(t,i),e),tW={},tG=e=>{e._$AR(),e._$AA.remove()},tZ=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),tZ(e,t);return!0},tY=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},tQ=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),t0(t)}};function tX(e){void 0!==this._$AN?(tY(this),this._$AM=e,tQ(this)):this._$AM=e}function tJ(e,t=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)tZ(o[e],!1),tY(o[e]);else null!=o&&(tZ(o,!1),tY(o));else tZ(this,e)}let t0=e=>{2==e.type&&(e._$AP??=tJ,e._$AQ??=tX)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),tQ(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tZ(this,e),tY(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let t1=!1,t2=new f.subtle.Watcher(async()=>{t1||(t1=!0,queueMicrotask(()=>{for(let e of(t1=!1,t2.getPending()))e.get();t2.watch()}))});let watch_r=class watch_r extends async_directive_f{_$S_(){var e,t;void 0===this._$Sm&&(this._$Sj=new f.Computed(()=>{var e;let t=null==(e=this._$SW)?void 0:e.get();return this.setValue(t),t}),this._$Sm=null!=(t=null==(e=this._$Sk)?void 0:e.h)?t:t2,this._$Sm.watch(this._$Sj),f.subtle.untrack(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()}))}_$Sp(){void 0!==this._$Sm&&(this._$Sm.unwatch(this._$SW),this._$Sm=void 0)}render(e){return f.subtle.untrack(()=>e.get())}update(e,[t]){var i;return null!=this._$Sk||(this._$Sk=null==(i=e.options)?void 0:i.host),t!==this._$SW&&void 0!==this._$SW&&this._$Sp(),this._$SW=t,this._$S_(),f.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$S_()}};let t3=eF(watch_r),t4=e=>(t,...i)=>e(t,...i.map(e=>e instanceof f.State||e instanceof f.Computed?t3(e):e));t4(ew),t4(ex),f.State,f.Computed;let{fromCharCode:t5}=String;new TextEncoder;let t6=new TextDecoder;function t8(e){return t6.decode(function(e){let t=globalThis.atob(e),i=t.length,o=new Uint8Array(i),r=0,s=i-i%8;for(;r<s;r+=8)o[r]=t.charCodeAt(r),o[r+1]=t.charCodeAt(r+1),o[r+2]=t.charCodeAt(r+2),o[r+3]=t.charCodeAt(r+3),o[r+4]=t.charCodeAt(r+4),o[r+5]=t.charCodeAt(r+5),o[r+6]=t.charCodeAt(r+6),o[r+7]=t.charCodeAt(r+7);for(;r<i;r++)o[r]=t.charCodeAt(r);return o}(e))}let t7=new IpcRequest("core","webview/ready"),t9=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let ie=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let it=new IpcCommand("core","telemetry/sendEvent"),ii=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let io=new IpcCommand("core","webview/focus/didChange"),ir=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let is=new WeakMap;function ia(e,t){return function(i,o,r){let s=is.get(i.constructor);null==s&&is.set(i.constructor,s=[]),s.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,i){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){let t=is.get(this.constructor);if(null!=t)for(let{keys:i,method:o,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;let t=i.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};let il=/T/,ic=/.*\s*?at\s(.+?)\s/,ih=/^_+/,id=["accessToken","password","token"];let Logger=class Logger{#e;#t;configure(e,t=!1){this.#t={...e,sanitizeKeys:new Set([...id,...e.sanitizeKeys??[]])},this.#i=t,this.#e=e.createChannel(e.name),this.#o=this.#e.logLevel,this.#e.onDidChangeLogLevel?.(e=>{this.#o=e})}enabled(e){return!!this.isDebugging||0!==this.#o&&(null==e||this.#o<=function(e){switch(e){case"off":default:return 0;case"trace":return 1;case"debug":return 2;case"info":return 3;case"warn":return 4;case"error":return 5}}(e))}#i=!1;get isDebugging(){return this.#i}#o=0;get logLevel(){var e=this.#o;switch(e){case 0:default:return"off";case 1:return"trace";case 2:return"debug";case 3:return"info";case 4:return"warn";case 5:return"error"}}get timestamp(){return`[${new Date().toISOString().replace(il," ").slice(0,-1)}]`}trace(e,...t){let i;(0!==this.#o&&!(this.#o>1)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.#e?.trace(`  ${i??""}${this.#r(!0,t)}`))}debug(e,...t){let i;(0!==this.#o&&!(this.#o>2)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.#e?.debug(`  ${i??""}${this.#r(!1,t)}`))}info(e,...t){let i;(0!==this.#o&&!(this.#o>3)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.#e?.info(`   ${i??""}${this.#r(!1,t)}`))}warn(e,...t){let i;(0!==this.#o&&!(this.#o>4)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.#e?.warn(`${i??""}${this.#r(!1,t)}`))}error(e,t,...i){let o;if((0===this.#o||this.#o>5)&&!this.isDebugging)return;if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=ic.exec(t);null!=e&&(o=e[1])}}this.isDebugging;let r=`  ${o??""}${this.#r(!1,i)}`;null!=e?this.#e?.error(String(e),r):this.#e?.error(r)}showOutputChannel(e){this.#e?.show?.(e)}toLoggable(e,t){if(null!=t){let i=this.sanitize(t,e);if(null!=i)return i}if("function"==typeof e)return"<function>";if(null==e||"object"!=typeof e||e instanceof Error)return String(e);if(Array.isArray(e)){let t=e.length>10?e.slice(0,10):e,i=e.length>10?`, \u2026+${e.length-10}`:"";return`[${t.map(e=>this.toLoggable(e)).join(", ")}${i}]`}let i=this.#t?.toLoggable,o=i?.(e);if(null!=o)return o;let r=this.#t?.sanitizeKeys;try{return JSON.stringify(e,(e,t)=>{if(95!==e.charCodeAt(0))return r?.has(e)?this.sanitize(e,t):""===e||"object"!=typeof t||null==t||Array.isArray(t)?t:t instanceof Error?String(t):i?.(t)??t})}catch{return"<error>"}}sanitize(e,t){if(null==t)return;let i=e.replace(ih,"")||e;if(this.#t?.sanitizeKeys?.has(i))return null!=this.#t.hash?`<${i}:${this.#t.hash("string"==typeof t?t:JSON.stringify(t))}>`:`<${i}>`}#r(e,t){if(0===t.length||e&&(0===this.#o||this.#o>2)&&!this.isDebugging)return"";let i=t.map(e=>this.toLoggable(e)).join(", ");return 0!==i.length?` \u2014 ${i}`:""}};let ip=new Logger,iu=new WeakMap,ig={enabled:e=>ip.enabled(e),log:(e,t,i,...o)=>{switch(e){case"error":ip.error(void 0,t,i,...o);break;case"warn":t?.warn(i,...o);break;case"info":t?.info(i,...o);break;case"debug":default:t?.debug(i,...o);break;case"trace":t?.trace(i,...o)}}},im=new Map;function ib(e,t){let o=i;i=e.scopeId,im.set(e.scopeId,e);try{return t()}finally{i=o,im.delete(e.scopeId)}}function iv(){return null!=i?im.get(i):void 0}let i_=0x40000000-1;function iy(){let e=0;return{get current(){return e},next:function(){return e===i_&&(e=0),++e},reset:function(){e=0}}}function iw(e){let t=.001*performance.now(),i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],(o-=e[1])<0&&(i--,o+=1e9)),[i,o]}function ix(e){let[t,i]=iw(e);return 1e3*t+Math.floor(i/1e6)}let ik=iy();function iC(e,t,i){var o;let r,s,a={scopeId:e,prevScopeId:t,prefix:i,enabled:e=>ip.enabled(e),addExitInfo:function(...e){(r??=[]).push(...e)},setFailed:function(e){s=e},getExitInfo:function(){return{details:r?.length?` \u2022 ${r.join(", ")}`:void 0,failed:s}}};return i$(a,"trace",ip.trace),i$(a,"debug",ip.debug),i$(a,"info",ip.info),i$(a,"warn",ip.warn),Object.defineProperty(o=a,"error",{configurable:!0,enumerable:!0,get:function(){let e=(e,t,...i)=>ip.error(e,o,t,...i);return Object.defineProperty(o,"error",{value:e,writable:!1,enumerable:!0}),e}}),a}function i$(e,t,i){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){let o=i.bind(ip,e);return Object.defineProperty(e,t,{value:o,writable:!1,enumerable:!0}),o}})}function iS(e,t,i){if(null!=i){let o=null==t?e.toString(16):`${t.toString(16)} \u2192 ${e.toString(16)}`;return null==o?`[${i.padEnd(13)}]`:`[${i}${o.padStart(13-i.length)}]`}return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function iE(){let e=iv();if(null==e)return;let t=Object.create(e);return t[Symbol.dispose]=()=>{},t}function iz(e,t,i){if(null!=t&&"boolean"!=typeof t)return iC(t.scopeId,t.prevScopeId,`${t.prefix}${e}`);let o=t?iv()?.scopeId:void 0,r=ik.next();return iC(r,o,`${iS(r,o,i)} ${e}`)}function iI(e,t,i,...o){switch(t){case"trace":ip.trace(e,i,...o);break;case"info":ip.info(e,i,...o);break;default:ip.debug(e,i,...o)}}let LoggerContext=class LoggerContext{constructor(e){this.scope=iz(e,void 0),ip.configure({name:e,createChannel:function(e){let t=ip.isDebugging?function(e){}:function(e){};return{name:e,logLevel:0,trace:t,debug:t,info:t,warn:t,error:t}}},!1)}trace(e,...t){"string"==typeof e?ip.trace(this.scope,e,...t):ip.trace(e,t.shift(),...t)}debug(e,...t){"string"==typeof e?ip.debug(this.scope,e,...t):ip.debug(e,t.shift(),...t)}info(e,...t){"string"==typeof e?ip.info(this.scope,e,...t):ip.info(e,t.shift(),...t)}};let iA=new IpcNotification("home","subscription/didChange"),iL="graph";new IpcCommand(iL,"chooseRepository"),new IpcCommand(iL,"dblclick"),new IpcCommand(iL,"avatars/get"),new IpcCommand(iL,"refs/metadata/get"),new IpcCommand(iL,"rows/get"),new IpcCommand(iL,"pullRequest/openDetails"),new IpcCommand(iL,"row/action"),new IpcCommand(iL,"treemap/file/action"),new IpcCommand(iL,"search/openInView"),new IpcCommand(iL,"search/cancel"),new IpcCommand(iL,"columns/update"),new IpcCommand(iL,"refs/update/visibility"),new IpcCommand(iL,"refs/update/pinned"),new IpcCommand(iL,"filters/update/excludeTypes"),new IpcCommand(iL,"configuration/update"),new IpcCommand(iL,"displayMode/update"),new IpcCommand(iL,"search/update/mode"),new IpcCommand(iL,"filters/update/includedRefs"),new IpcCommand(iL,"filters/reset"),new IpcCommand(iL,"selection/update"),new IpcCommand(iL,"wipDraft/update"),new IpcRequest(iL,"jumpToHead"),new IpcRequest(iL,"chooseRef"),new IpcRequest(iL,"chooseComparison"),new IpcRequest(iL,"chooseAuthor"),new IpcRequest(iL,"chooseFile"),new IpcRequest(iL,"scope/resolve"),new IpcRequest(iL,"rows/ensure"),new IpcRequest(iL,"search/history/get"),new IpcRequest(iL,"search/history/store"),new IpcRequest(iL,"search/history/delete"),new IpcRequest(iL,"counts"),new IpcRequest(iL,"overview/get"),new IpcRequest(iL,"overview/wip/get"),new IpcRequest(iL,"overview/wip/detailed/get"),new IpcRequest(iL,"overview/enrichment/get"),new IpcRequest(iL,"agentSessions/get"),new IpcRequest(iL,"wip/stats/get"),new IpcCommand(iL,"wip/watches/sync"),new IpcNotification(iL,"wip/refetch/request"),new IpcRequest(iL,"row/hover/get"),new IpcRequest(iL,"search"),new IpcNotification(iL,"overview/didChange"),new IpcNotification(iL,"agentSessions/didChange"),new IpcNotification(iL,"repositories/integration/didChange"),new IpcNotification(iL,"wipDrafts/didChange"),new IpcNotification(iL,"didChange",!0),new IpcNotification(iL,"configuration/didChange");let iP=new IpcNotification(iL,"subscription/didChange");new IpcNotification(iL,"org/settings/didChange"),new IpcNotification(iL,"avatars/didChange"),new IpcNotification(iL,"mcp/didChange"),new IpcNotification(iL,"hooks/didChange"),new IpcNotification(iL,"agents/canInstallClaudeHook/didChange"),new IpcCommand(iL,"graphWalkthrough/banner/close"),new IpcNotification(iL,"graphWalkthrough/banner/didChange"),new IpcNotification(iL,"graphWalkthrough/complete/didChange"),new IpcNotification(iL,"graphWalkthrough/started/didChange"),new IpcNotification(iL,"visualizationsButtonCallout/didChange"),new IpcCommand(iL,"visualizationsButtonCallout/dismiss"),new IpcNotification(iL,"sidebar/activePanel/didRequest"),new IpcNotification(iL,"action/didRequest"),new IpcCommand(iL,"track/overview/shown"),new IpcCommand(iL,"track/scope/changed"),new IpcCommand(iL,"track/details/reviewMode"),new IpcCommand(iL,"track/details/composeMode"),new IpcCommand(iL,"track/details/resolveMode"),new IpcCommand(iL,"track/details/compareMode"),new IpcCommand(iL,"track/details/wipShown"),new IpcNotification(iL,"branchState/didChange"),new IpcNotification(iL,"refs/didChangeMetadata"),new IpcNotification(iL,"columns/didChange"),new IpcNotification(iL,"scrollMarkers/didChange"),new IpcNotification(iL,"refs/didChangeVisibility"),new IpcNotification(iL,"refs/didChangePinned"),new IpcNotification(iL,"rows/didChange"),new IpcNotification(iL,"rows/stats/didChange"),new IpcNotification(iL,"selection/didChange"),new IpcNotification(iL,"compareMode/didRequestOpen"),new IpcNotification(iL,"timeline/didRequestOpenScope"),new IpcNotification(iL,"search/didRequest"),new IpcNotification(iL,"workingTree/didChange"),new IpcNotification(iL,"didSearch"),new IpcNotification(iL,"didFetch"),new IpcNotification(iL,"scope/anchors/didInvalidate"),new IpcNotification(iL,"treemap/didInvalidate"),new IpcNotification(iL,"featurePreview/didStart");let iT=new IpcNotification("timeline","didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(iA.is(e)||iP.is(e)||iT.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let i=`${e}|${t}`,o=this._promos.get(i);return null==o&&(o=this.ipc.sendRequest(ie,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(i,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(it,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};function iM(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function iR(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}function iD(e,t,i){let o,r,s,a,c,h,p,u,g,m,f=0;null!=i&&({edges:h,maxWait:p,cancellation:u,aggregator:g}=i);let b="leading"===(h??="trailing")||"both"===h,v="trailing"===h||"both"===h;function _(){if(null!=o){f=Date.now();let t=o,i=m;return m=void 0,o=void 0,s=e.apply(i,t)}}function w(){null!=a&&(clearTimeout(a),a=void 0)}function x(){null!=c&&(clearTimeout(c),c=void 0)}function C(){w(),x(),m=void 0,o=void 0,r=void 0,f=0}function $(...e){if(u?.aborted)return;let i=Date.now();null!=g&&null!=o?o=g(o,e):(m=this,o=e);let h=null==a&&null==c;r=i,w();let x=Date.now();if(r=x,a=setTimeout(()=>{a=void 0,function e(){let i,o,s=Date.now();if(i=s-(r??0),o=s-f,null==r||i>=t||i<0||null!=p&&o>=p){v&&_(),C();return}a=setTimeout(()=>{a=void 0,e()},t-(s-(r??0)))}()},t),null!=p&&!c){0===f&&(f=x);let e=p-(x-f);e>0?c=setTimeout(()=>{c=void 0,v&&null!=o&&_(),f=Date.now()},e):(v&&null!=o&&_(),C())}return b&&h?_():s}return $.cancel=C,$.flush=function(){return w(),x(),_()},$.pending=function(){return null!=a||null!=c},u?.addEventListener("abort",C,{once:!0}),$}(b||(b={})).on=function(e,t,i,o){let r=!1;if("string"==typeof e){let s=function(t){let o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,s,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,o??!0))}}}let s=function(e){i(e,this)};return e.addEventListener(t,s,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,o??!1))}}};var iO=Uint8Array,ij=Uint16Array,iB=Int32Array,iF=new iO([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),iq=new iO([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),iN=new iO([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),iU=function(e,t){for(var i=new ij(31),o=0;o<31;++o)i[o]=t+=1<<e[o-1];for(var r=new iB(i[30]),o=1;o<30;++o)for(var s=i[o];s<i[o+1];++s)r[s]=s-i[o]<<5|o;return{b:i,r:r}},iV=iU(iF,2),iH=iV.b,iK=iV.r;iH[28]=258,iK[258]=28;var iW=iU(iq,0),iG=iW.b;iW.r;for(var iZ=new ij(32768),iY=0;iY<32768;++iY){var iQ=(43690&iY)>>1|(21845&iY)<<1;iQ=(61680&(iQ=(52428&iQ)>>2|(13107&iQ)<<2))>>4|(3855&iQ)<<4,iZ[iY]=((65280&iQ)>>8|(255&iQ)<<8)>>1}for(var iX=function(e,t,i){for(var o,r=e.length,s=0,a=new ij(t);s<r;++s)e[s]&&++a[e[s]-1];var c=new ij(t);for(s=1;s<t;++s)c[s]=c[s-1]+a[s-1]<<1;if(i){o=new ij(1<<t);var h=15-t;for(s=0;s<r;++s)if(e[s])for(var p=s<<4|e[s],u=t-e[s],g=c[e[s]-1]++<<u,m=g|(1<<u)-1;g<=m;++g)o[iZ[g]>>h]=p}else for(o=new ij(r),s=0;s<r;++s)e[s]&&(o[s]=iZ[c[e[s]-1]++]>>15-e[s]);return o},iJ=new iO(288),iY=0;iY<144;++iY)iJ[iY]=8;for(var iY=144;iY<256;++iY)iJ[iY]=9;for(var iY=256;iY<280;++iY)iJ[iY]=7;for(var iY=280;iY<288;++iY)iJ[iY]=8;for(var i0=new iO(32),iY=0;iY<32;++iY)i0[iY]=5;var i1=iX(iJ,9,1),i2=iX(i0,5,1),i3=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},i4=function(e,t,i){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(7&t)&i},i5=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(7&t)},i6=function(e,t,i){return(null==t||t<0)&&(t=0),(null==i||i>e.length)&&(i=e.length),new iO(e.subarray(t,i))},i8=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],i7=function(e,t,i){var o=Error(t||i8[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,i7),!i)throw o;return o},i9=function(e,t,i,o){var r=e.length,s=o?o.length:0;if(!r||t.f&&!t.l)return i||new iO(0);var a=!i,c=a||2!=t.i,h=t.i;a&&(i=new iO(3*r));var p=function(e){var t=i.length;if(e>t){var o=new iO(Math.max(2*t,e));o.set(i),i=o}},u=t.f||0,g=t.p||0,m=t.b||0,f=t.l,b=t.d,v=t.m,_=t.n,w=8*r;do{if(!f){u=i4(e,g,1);var x=i4(e,g+1,3);if(g+=3,x)if(1==x)f=i1,b=i2,v=9,_=5;else if(2==x){var C=i4(e,g,31)+257,$=i4(e,g+10,15)+4,S=C+i4(e,g+5,31)+1;g+=14;for(var E=new iO(S),A=new iO(19),P=0;P<$;++P)A[iN[P]]=i4(e,g+3*P,7);g+=3*$;for(var T=i3(A),M=(1<<T)-1,D=iX(A,T,1),P=0;P<S;){var O=D[i4(e,g,M)];g+=15&O;var j=O>>4;if(j<16)E[P++]=j;else{var B=0,F=0;for(16==j?(F=3+i4(e,g,3),g+=2,B=E[P-1]):17==j?(F=3+i4(e,g,7),g+=3):18==j&&(F=11+i4(e,g,127),g+=7);F--;)E[P++]=B}}var q=E.subarray(0,C),N=E.subarray(C);v=i3(q),_=i3(N),f=iX(q,v,1),b=iX(N,_,1)}else i7(1);else{var j=((g+7)/8|0)+4,U=e[j-4]|e[j-3]<<8,V=j+U;if(V>r){h&&i7(0);break}c&&p(m+U),i.set(e.subarray(j,V),m),t.b=m+=U,t.p=g=8*V,t.f=u;continue}if(g>w){h&&i7(0);break}}c&&p(m+131072);for(var K=(1<<v)-1,W=(1<<_)-1,G=g;;G=g){var B=f[i5(e,g)&K],Y=B>>4;if((g+=15&B)>w){h&&i7(0);break}if(B||i7(2),Y<256)i[m++]=Y;else if(256==Y){G=g,f=null;break}else{var Q=Y-254;if(Y>264){var P=Y-257,X=iF[P];Q=i4(e,g,(1<<X)-1)+iH[P],g+=X}var J=b[i5(e,g)&W],ee=J>>4;J||i7(3),g+=15&J;var N=iG[ee];if(ee>3){var X=iq[ee];N+=i5(e,g)&(1<<X)-1,g+=X}if(g>w){h&&i7(0);break}c&&p(m+131072);var et=m+Q;if(m<N){var ei=s-N,eo=Math.min(N,et);for(ei+m<0&&i7(3);m<eo;++m)i[m]=o[ei+m]}for(;m<et;++m)i[m]=i[m-N]}}t.l=f,t.p=G,t.b=m,t.f=u,f&&(u=1,t.m=v,t.d=b,t.n=_)}while(!u)return m!=i.length&&a?i6(i,0,m):i.subarray(0,m)},oe=new iO(0),ot="u">typeof TextDecoder&&new TextDecoder;try{ot.decode(oe,{stream:!0})}catch{}var oi=function(e){for(var t="",i=0;;){var o=e[i++],r=(o>127)+(o>223)+(o>239);if(i+r>e.length)return{s:t,r:i6(e,i-1)};r?3==r?t+=String.fromCharCode(55296|(o=((15&o)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536)>>10,56320|1023&o):1&r?t+=String.fromCharCode((31&o)<<6|63&e[i++]):t+=String.fromCharCode((15&o)<<12|(63&e[i++])<<6|63&e[i++]):t+=String.fromCharCode(o)}};function oo(e,t){if(t){for(var i="",o=0;o<e.length;o+=16384)i+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return i}if(ot)return ot.decode(e);var r=oi(e),s=r.s,i=r.r;return i.length&&i7(8),s}"function"==typeof queueMicrotask&&queueMicrotask;let or=/\(([\s\S]*)\)/,os=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,on=/\s?=.*$/;function oa(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function ol(e){var t,i;let o,r,s,a,c,h,p,u,g;return t="debug",c=!1,h=!0,null!=(i=e)&&({args:o,when:r,exit:s,prefix:a,onlyExit:c=!1,timing:h=!0}=i),p="object"==typeof h?h.warnAfter:1500,u=!1!==h||"object"==typeof c&&c.after>0,g="trace"===t?ip.trace:"debug"===t?ip.debug:ip.info,(e,i,h)=>{let m,f;if("function"==typeof h.value?(m=h.value,f="value"):"function"==typeof h.get&&(m=h.get,f="get"),null==m||null==f)throw Error("Not supported");let b=null==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),i=(t=(t=t.replace(os,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");i=i>=0?i+1:0,o=o>0?o:t.indexOf("="),t=t.slice(i,o),t=`(${t})`;let r=or.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(on,"")):[]}(m):[];h[f]=function(...e){let h;if(!ip.enabled()||null!=r&&!r.apply(this,e))return m.apply(this,e);let f=ip.enabled(t),v=iE(),_=v?.scopeId,w=ik.next(),x=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let i=t?.name??"",o=i.indexOf("_");-1!==o&&(i=i.substring(o+1));let r=t;for(;null!=r;){let t=iu.get(r);if(null!=t)return t(e,i);r=Object.getPrototypeOf(r)}return i}(this):void 0,C=x?`${iS(w,_)} ${x}.${i}`:`${iS(w,_)} ${i}`;null!=a&&(C=a({id:w,instance:this,instanceName:x??"",name:i,prefix:C},...e));let $=iC(w,_,C),S=!1,E=()=>(S||(S=!0,h=function(e,t,i){if(!1===e||!t.length)return;if("function"==typeof e){let i=e(...t);if(!1===i)return;let o="";for(let[e,t]of Object.entries(i))o.length&&(o+=", "),o+=`${e}=${ip.toLoggable(t,e)}`;return o||void 0}let o="",r=-1;for(let e of t){let t=i[++r];o.length&&(o+=", "),o+=t?`${t}=${ip.toLoggable(e,t)}`:ip.toLoggable(e)}return o||void 0}(o,e,b)),h);if(!c&&f){let e=E();g.call(ip,e?`${C}(${e})`:C)}if(c||u||null!=s){let t=u?iw():void 0,i=e=>{let i=void 0!==t?` [${ix(t)}ms]`:"",o=$.getExitInfo();if(c){let t=E();ip.error(e,t?`${C}(${t})`:C,o?.details?`failed${o.details}${i}`:`failed${i}`)}else ip.error(e,C,o?.details?`failed${o.details}${i}`:`failed${i}`)},o=e=>{let i,o,r,a;null!=t?(i=ix(t))>p?(o=ip.warn,r=` [*${i}ms] (slow)`):(o=g,r=` [${i}ms]`):(r="",o=g);let h=$.getExitInfo();if(null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${ip.toLoggable(e)}`);else h?.failed?(a=h.failed,o=(e,...t)=>ip.error(null,e,...t)):a="completed";if(f||o!==g){let e=E();c?(!0===c||0===c.after||i>c.after)&&o.call(ip,e?`${C}(${e}) ${a}${h?.details||""}${r}`:`${C} ${a}${h?.details||""}${r}`):o.call(ip,e?`${C}(${e}) ${a}${h?.details||""}${r}`:`${C} ${a}${h?.details||""}${r}`)}};return ib($,()=>{let t;try{t=m.apply(this,e)}catch(e){throw i(e),e}return null!=t&&oa(t)?t.then(o,i).catch(()=>{}):o(t),t})}return ib($,()=>m.apply(this,e))}}}globalThis.scheduler?.yield?.bind(globalThis.scheduler),Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...i){let o;this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:iz(e??"",!1,t?.scopeLabel);let r=t?.log;if(o=null==r||!0===r?{}:!1===r||r.onlyExit?void 0:r,this.logLevel=("object"==typeof r?r.level:void 0)??"debug",this.logProvider=t?.provider??ig,this._time=iw(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){return ix(this._time)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=iw(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let i=ix(this._time),o=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${o?`${o} `:""}[${i}ms]${e?.suffix??""}`)}};(()=>{let e;var t,i,o={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,o="",r=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)i=e.charCodeAt(c);else{if(47===i)break;i=47}if(47===i){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(o.length<2||2!==r||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var h=o.lastIndexOf("/");if(h!==o.length-1){-1===h?(o="",r=0):r=(o=o.slice(0,h)).length-1-o.lastIndexOf("/"),s=c,a=0;continue}}else if(2===o.length||1===o.length){o="",r=0,s=c,a=0;continue}}t&&(o.length>0?o+="/..":o="..",r=2)}else o.length>0?o+="/"+e.slice(s+1,c):o=e.slice(s+1,c),r=c-s-1;s=c,a=0}else 46===i&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var e,o,r="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===o&&(o=process.cwd()),e=o),t(e),0!==e.length&&(r=e+"/"+r,s=47===e.charCodeAt(0));return r=i(r,!s),s?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!o)).length||o||(e="."),e.length>0&&r&&(e+="/"),o?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var r=arguments[i];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":o.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=o.resolve(e))===(i=o.resolve(i)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var s=e.length,a=s-r,c=1;c<i.length&&47===i.charCodeAt(c);++c);for(var h=i.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===i.charCodeAt(c+g))return i.slice(c+g+1);if(0===g)return i.slice(c+g)}else a>p&&(47===e.charCodeAt(r+g)?u=g:0===g&&(u=0));break}var m=e.charCodeAt(r+g);if(m!==i.charCodeAt(c+g))break;47===m&&(u=g)}var f="";for(g=r+u+1;g<=s;++g)g!==s&&47!==e.charCodeAt(g)||(0===f.length?f+="..":f+="/..");return f.length>0?f+i.slice(c+u):(c+=u,47===i.charCodeAt(c)&&++c,i.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),o=47===i,r=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(i=e.charCodeAt(a))){if(!s){r=a;break}}else s=!1;return -1===r?o?"/":".":o&&1===r?"//":e.slice(0,r)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var o,r=0,s=-1,a=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var c=i.length-1,h=-1;for(o=e.length-1;o>=0;--o){var p=e.charCodeAt(o);if(47===p){if(!a){r=o+1;break}}else -1===h&&(a=!1,h=o+1),c>=0&&(p===i.charCodeAt(c)?-1==--c&&(s=o):(c=-1,s=h))}return r===s?s=h:-1===s&&(s=e.length),e.slice(r,s)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!a){r=o+1;break}}else -1===s&&(a=!1,s=o+1);return -1===s?"":e.slice(r,s)},extname:function(e){t(e);for(var i=-1,o=0,r=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===r&&(s=!1,r=c+1),46===h?-1===i?i=c:1!==a&&(a=1):-1!==i&&(a=-1);else if(!s){o=c+1;break}}return -1===i||-1===r||0===a||1===a&&i===r-1&&i===o+1?"":e.slice(i,r)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var o,r=e.charCodeAt(0),s=47===r;s?(i.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,g=0;u>=o;--u)if(47!==(r=e.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===r?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(i.base=i.name=0===c&&s?e.slice(1,h):e.slice(c,h)):(0===c&&s?(i.name=e.slice(1,a),i.base=e.slice(1,h)):(i.name=e.slice(c,a),i.base=e.slice(c,h)),i.ext=e.slice(a,h)),c>0?i.dir=e.slice(0,c-1):s&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(s.r(a),s.d(a,{URI:()=>l,Utils:()=>i}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let g=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,i,o,r,s=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||s?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,i||""),this.query=o||"",this.fragment=r||"",u(this,s))}get fsPath(){return w(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:i,path:o,query:r,fragment:s}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===i?i=this.authority:null===i&&(i=""),void 0===o?o=this.path:null===o&&(o=""),void 0===r?r=this.query:null===r&&(r=""),void 0===s?s=this.fragment:null===s&&(s=""),t===this.scheme&&i===this.authority&&o===this.path&&r===this.query&&s===this.fragment?this:new d(t,i,o,r,s)}static parse(e,t=!1){let i=g.exec(e);return i?new d(i[2]||"",$(i[4]||""),$(i[5]||""),$(i[7]||""),$(i[9]||""),t):new d("","","","","")}static file(t){let i="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(i=t.substring(2),t="/"):(i=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",i,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return x(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===m?e.fsPath:null,t}}return e}};let m=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=w(this,!1)),this._fsPath}toString(e=!1){return e?x(this,!0):(this._formatted||(this._formatted=x(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=m),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let f={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function b(e,t,i){let o,r=-1;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||i&&91===a||i&&93===a||i&&58===a)-1!==r&&(o+=encodeURIComponent(e.substring(r,s)),r=-1),void 0!==o&&(o+=e.charAt(s));else{void 0===o&&(o=e.substr(0,s));let t=f[a];void 0!==t?(-1!==r&&(o+=encodeURIComponent(e.substring(r,s)),r=-1),o+=t):-1===r&&(r=s)}}return -1!==r&&(o+=encodeURIComponent(e.substring(r))),void 0!==o?o:e}function _(e){let t;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);35===o||63===o?(void 0===t&&(t=e.substr(0,i)),t+=f[o]):void 0!==t&&(t+=e[i])}return void 0!==t?t:e}function w(t,i){let o;return o=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?i?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(o=o.replace(/\//g,"\\")),o}function x(e,t){let i=t?_:b,o="",{scheme:r,authority:s,path:a,query:c,fragment:h}=e;if(r&&(o+=r,o+=":"),(s||"file"===r)&&(o+="/",o+="/"),s){let e=s.indexOf("@");if(-1!==e){let t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.lastIndexOf(":"))?o+=i(t,!1,!1):(o+=i(t.substr(0,e),!1,!1),o+=":",o+=i(t.substr(e+1),!1,!0)),o+="@"}-1===(e=(s=s.toLowerCase()).lastIndexOf(":"))?o+=i(s,!1,!0):(o+=i(s.substr(0,e),!1,!0),o+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}o+=i(a,!0,!1)}return c&&(o+="?",o+=i(c,!1,!1)),h&&(o+="#",o+=t?h:b(h,!1,!1)),o}let C=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function $(e){return e.match(C)?e.replace(C,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var S=s(975);let E=S.posix||S;(t=i||(i={})).joinPath=function(e,...t){return e.with({path:E.join(e.path,...t)})},t.resolvePath=function(e,...t){let i=e.path,o=!1;"/"!==i[0]&&(i="/"+i,o=!0);let r=E.resolve(i,...t);return o&&"/"===r[0]&&!e.authority&&(r=r.substring(1)),e.with({path:r})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=E.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return E.basename(e.path)},t.extname=function(e){return E.extname(e.path)},v=a})();let{URI:oc,Utils:oh}=v;function od(e,t){return JSON.parse(e,(e,i)=>(function(e,t){let i=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(e);if(null==i)return e;switch(i.__ipc){case"date":return new Date(i.value);case"promise":return t(i.value);case"uri":return oc.revive(i.value)}})(i,t))}let op="__supertalk_rpc__";new TextEncoder,new TextDecoder;let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return this._event??=(e,t,i)=>{this.listeners??=new LinkedList;let o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(r),r},this._event}fire(e){if(null!=this.listeners){this._deliveryQueue??=new LinkedList;for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let ou={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let i=new events_Node(e);if(this._first===events_Node.Undefined)this._first=i,this._last=i;else if(t){let e=this._last;this._last=i,i.prev=e,e.next=i}else{let e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?ou:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var og=Object.defineProperty,om=Object.getOwnPropertyDescriptor,of=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ob=e=>{throw TypeError(e)},ov=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?om(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&og(t,i,s),s};function o_(){return o??=null!=r?r():acquireVsCodeApi()}let oy=iy();function ow(){return`webview:${oy.next()}`}let ox=`wv-${Math.random().toString(36).slice(2,10)}`,ok=Date.now(),oC=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=o_(),this._disposable=b.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,o,r,s,a,c,h,p,u,g=[];try{if(r=e.data,"object"==typeof r&&null!==r&&op in r&&!0===r[op])return;let a=e.data,c=((e,t,i)=>{if(null!=t){var o,r;"object"!=typeof t&&"function"!=typeof t&&ob("Object expected"),i&&(o=t[of("asyncDispose")]),void 0===o&&(o=t[of("dispose")],i&&(r=o)),"function"!=typeof o&&ob("Object not disposable"),r&&(o=function(){try{r.call(this)}catch(e){return Promise.reject(e)}}),e.push([i,o,t])}else i&&e.push([i]);return t})(g,function(e,t,o){var r,s;let a,c,h;if(!ip.enabled())return;let p=(r=o?.scope??!0,s=o?.scopeLabel,c=iv(),i=(h=iz(e,r,s)).scopeId,im.set(h.scopeId,h),h[Symbol.dispose]=()=>{let e;e=h?.scopeId??i,null!=e&&im.delete(e),i=c?.scopeId},h);if(!t)return p;let u="debug",g=!1;"object"==typeof t&&(u=t.level??u,a=t.message,g=!0===t.onlyExit);let m=iw();g||iI(p,u,a??"");let f=p[Symbol.dispose];return p[Symbol.dispose]=()=>{let e=ix(m),t=` [${e}ms]`,i=p.getExitInfo(),o=i.failed??"completed";null!=i.failed?ip.error(null,p,`${o}${i.details??""}${t}`):iI(p,u,`${o}${i.details??""}${t}`),f()},p}(`(e=${a.id}|${a.method})`,void 0,{scope:iE()})),h=function(e,t,...i){let o=("object"==typeof t?.log?t.log.level:void 0)??"info";return(t?.provider??ig).enabled(o)?new Stopwatch(e,t,...i):void 0}(c,{log:{onlyExit:!0,level:"debug"}});if(a.compressed&&a.params instanceof Uint8Array){if("deflate"===a.compressed)try{a.params=oo((s=a.params,i9(s,{i:2},void 0,void 0)))}catch(e){a.params=oo(a.params)}else a.params=oo(a.params);h?.restart({message:`\u2022 decompressed (${a.compressed}) serialized params`})}if("string"==typeof a.params?(a.params=od(a.params,e=>this.getResponsePromise(e.method,e.id)),h?.stop({message:"• deserialized params"})):null==a.params?h?.stop({message:"• no params"}):h?.stop({message:"• invalid params"}),c?.addExitInfo(`ipc (host -> webview) duration=${Date.now()-a.timestamp}ms`),null!=a.completionId){let e=(t=a.method,o=a.completionId,`${t}|${o}`);this._pendingHandlers.get(e)?.(a);return}this._onReceiveMessage.fire(a)}catch(e){var m=e,f=!0}finally{a=m,c=f,h="function"==typeof SuppressedError?SuppressedError:function(e,t,i,o){return(o=Error(i)).name="SuppressedError",o.error=e,o.suppressed=t,o},p=e=>a=c?new h(e,a,"An error was suppressed during disposal"):(c=!0,e),(u=e=>{for(;e=g.pop();)try{var t=e[1]&&e[1].call(e[2]);if(e[0])return Promise.resolve(t).then(u,e=>(p(e),u()))}catch(e){p(e)}if(c)throw a})()}}deserializeIpcData(e){return od(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let i=ow();this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let i=ow(),o=this.getResponsePromise(e.response.method,i);return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:i}),o}getResponsePromise(e,t){return new Promise((i,o)=>{var r,s;let a,c=(r=e,s=t,`${r}|${s}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(ip.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===ii.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>i(t.value))}else queueMicrotask(()=>i(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function o$(e,t){let i=Math.pow(10,t);return Math.round(e*i)/i}ov([ol({args:e=>({e:`${e.data.id}|${e.data.method}`})})],oC.prototype,"onMessageReceived",1),ov([ol({args:e=>({commandType:e.method})})],oC.prototype,"sendCommand",1),ov([ol({args:e=>({requestType:e.method})})],oC.prototype,"sendRequest",1),ov([ol({args:e=>({e:`${e.id}, method=${e.method}`})})],oC.prototype,"postMessage",1),oC=ov([(g=e=>`${e.appName}(HostIpc)`,e=>void iu.set(e,g))],oC);let RGBA=class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=o$(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=o$(Math.max(Math.min(1,t),0),3),this.l=o$(Math.max(Math.min(1,i),0),3),this.a=o$(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=e.a,s=Math.max(t,i,o),a=Math.min(t,i,o),c=0,h=0,p=(a+s)/2,u=s-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),s){case t:c=(i-o)/u+6*(i<o);break;case i:c=(o-t)/u+2;break;case o:c=(t-i)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,r)}static _hue2rgb(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){let t,i,o,r=e.h/360,{s,l:a,a:c}=e;if(0===s)t=i=o=a;else{let e=a<.5?a*(1+s):a+s-a*s,c=2*a-e;t=HSLA._hue2rgb(c,e,r+1/3),i=HSLA._hue2rgb(c,e,r),o=HSLA._hue2rgb(c,e,r-1/3)}return new RGBA(Math.round(255*t),Math.round(255*i),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=o$(Math.max(Math.min(1,t),0),3),this.v=o$(Math.max(Math.min(1,i),0),3),this.a=o$(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=Math.max(t,i,o),s=r-Math.min(t,i,o);return new HSVA(Math.round(60*(0===s?0:r===t?((i-o)/s%6+6)%6:r===i?(o-t)/s+2:(t-i)/s+4)),0===r?0:s/r,r,e.a)}static toRGBA(e){let{h:t,s:i,v:o,a:r}=e,s=o*i,a=s*(1-Math.abs(t/60%2-1)),c=o-s,[h,p,u]=[0,0,0];return t<60?(h=s,p=a):t<120?(h=a,p=s):t<180?(p=s,u=a):t<240?(p=a,u=s):t<300?(h=a,u=s):t<=360&&(h=s,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),r)}};function oS(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(oS(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return o$(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(t,i,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,i=this.rgba.a,o=t.a,r=i+o*(1-i);return r<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*i/r+t.r*o*(1-i)/r,this.rgba.g*i/r+t.g*o*(1-i)/r,this.rgba.b*i/r+t.b*o*(1-i)/r,r))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-i),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let i=1-e.rgba.a;return new Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${oE(e.rgba.r)}${oE(e.rgba.g)}${oE(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(r-o)/r,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(o-r)/o,e.darken(i)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function oE(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let oz=new Emitter,oI=oz.event;function oA(e){let t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),s=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=oS("--vscode-editor-background",i),c=oS("--vscode-editor-foreground",i);return c||(c=oS("--vscode-foreground",i)),{colors:{background:a,foreground:c},computedStyle:i,isLightTheme:r,isHighContrastTheme:s,isInitializing:null==e}}var oL=Object.defineProperty,oP=Object.getOwnPropertyDescriptor,oT=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?oP(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&oL(t,i,s),s};let GlWebviewApp=class GlWebviewApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[]}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}initWebviewContext(e){let t=JSON.parse(t8(e)),i=t.webviewId,o=t.webviewInstanceId;this._webview={webviewId:i,webviewInstanceId:o,createCommandLink:(e,t)=>{var r;return e.endsWith(":")&&(e=`${e}${i.split(".").at(-1)}`),r=e,`command:${r}?${encodeURIComponent(JSON.stringify({webview:i,webviewInstance:o,...t}))}`}}}connectedCallback(){let e,t,i,o,r;super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.debug("connected"),this._ipc=new oC(this.name),this.disposables.push(((e=new MutationObserver(e=>{oz.fire(oA(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),null!=this.onThemeUpdated&&(this.onThemeUpdated(oA()),this.disposables.push(oI(this.onThemeUpdated,this))),this.disposables.push(this._ipc.onReceiveMessage(e=>{switch(!0){case io.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case ir.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._focusTracker=(o=0,r=iD(e=>{let t=`webview:${++o}`,i=document.hasFocus();e.focused=i,i||(e.inputFocused=!1),o_().postMessage({id:t,scope:t9.scope,method:t9.method,params:e,compressed:!1,timestamp:Date.now()})},150),{onFocusIn:e=>{let o=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==t||i!==o)&&(t=!0,i=o,r({focused:!0,inputFocused:o}))},onFocusOut:e=>{r({focused:!1,inputFocused:!1})}}),document.addEventListener("focusin",this._focusTracker.onFocusIn),document.addEventListener("focusout",this._focusTracker.onFocusOut),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.debug("disconnected"),null!=this._focusTracker&&(document.removeEventListener("focusin",this._focusTracker.onFocusIn),document.removeEventListener("focusout",this._focusTracker.onFocusOut),this._focusTracker=void 0),this.disposables.forEach(e=>e.dispose())}render(){return ew`<slot></slot>`}};oT([eD({type:String})],GlWebviewApp.prototype,"name",2),oT([eD({type:String})],GlWebviewApp.prototype,"placement",2),oT([tu({context:"ipc"})],GlWebviewApp.prototype,"_ipc",2),oT([tu({context:"logger"})],GlWebviewApp.prototype,"_logger",2),oT([tu({context:"promos"})],GlWebviewApp.prototype,"_promos",2),oT([tu({context:"telemetry"})],GlWebviewApp.prototype,"_telemetry",2),oT([tu({context:"webview"})],GlWebviewApp.prototype,"_webview",2),GlWebviewApp[tN];var oM=Object.defineProperty,oR=Object.getOwnPropertyDescriptor;let GlAppHost=class GlAppHost extends GlWebviewApp{get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback();let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger),this.initWebviewContext(e),this.disposables.push(this._stateProvider)}};((e,t,i,o)=>{for(var r,s=o>1?void 0:o?oR(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&oM(t,i,s)})([eD({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let oD=D`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;D`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${oD}
	}
`;let oO=D`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,oj=D`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;D`
	:focus-visible {
		${oO}
	}
`;let oB=D`
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
`;D`
	* {
		box-sizing: border-box;
	}
`,D`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${oO}
	}
	a:hover {
		text-decoration: underline;
	}
`;let oF=D`
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
`;function oq(e,t){let i=t?`$(git-branch) ${t}`:"incoming";switch(e){case"UU":return{label:"Modified (Both)",kind:"modified",description:`Modified on both ${i} and the target`};case"AA":return{label:"Added (Both)",kind:"added",description:`Added on both ${i} and the target`};case"DD":return{label:"Deleted (Both)",kind:"deleted",description:`Deleted on both ${i} and the target`};case"AU":return{label:"Added by Current",kind:"added",description:`Added on the target (conflict with ${i} \u2014 possible rename or directory/file clash)`};case"UA":return{label:"Added by Incoming",kind:"added",description:`Added on ${i} (conflict with the target \u2014 possible rename or directory/file clash)`};case"UD":return{label:"Modified (Current), Deleted (Incoming)",kind:"deleted",description:`Deleted on ${i}
Modified on the target`};case"DU":return{label:"Deleted (Current), Modified (Incoming)",kind:"deleted",description:`Modified on ${i}
Deleted on the target`};default:return}}D`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`,D`
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
`,D`
	:host {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}
`,D`
	:host {
		--gl-metadata-bar-bg: color-mix(in srgb, var(--color-background) 95%, var(--color-foreground) 5%);
		--gl-metadata-bar-border: var(--vscode-sideBarSectionHeader-border, var(--color-foreground--25));
		--gl-metadata-bar-min-height: 2.94rem;
	}
`;let ContextMenuProxyController=class ContextMenuProxyController{constructor(e){this._onContextMenu=e=>{let t=e.composedPath().find(e=>e instanceof HTMLElement&&null!=e.dataset.vscodeContext);null!=t&&t!==this._host&&(this._host.dataset.vscodeContext=t.dataset.vscodeContext,setTimeout(()=>{delete this._host.dataset.vscodeContext},100))},this._host=e,e.addController(this)}hostConnected(){this._host.addEventListener("contextmenu",this._onContextMenu)}hostDisconnected(){this._host.removeEventListener("contextmenu",this._onContextMenu)}};function oN(e){return[{icon:"gl-diff-left",label:"Open Current Changes",action:"current-changes"},{icon:"gl-diff-right",label:"Open Incoming Changes",action:"incoming-changes"},{icon:"add",label:"Stage",action:"stage"}]}function oU(e,t){let i=[];return"UA"!==t&&"DD"!==t&&i.push("+canStageCurrent"),"AU"!==t&&"DD"!==t&&i.push("+canStageIncoming"),JSON.stringify({webviewItem:`gitlens:rebase:conflict+file${i.join("")}`,webviewItemValue:{type:"rebaseConflict",path:e,conflictStatus:t}})}let oV=D`
	.clickable {
		cursor: pointer;
	}

	/* ==========================================================================
	   CSS Custom Properties (Theme Variables)
	   ========================================================================== */

	:host {
		/* Layout & Typography */
		--gl-avatar-size: 2.2rem;
		--font-family: var(--vscode-font-family);
		--font-size: var(--vscode-font-size);

		/* Colors */
		--color-background: var(--vscode-editor-background);
		--color-foreground: var(--vscode-editor-foreground, var(--vscode-foreground));
		--color-link-foreground: var(--vscode-textLink-foreground);
		--color-focus-border: var(--vscode-focusBorder);

		/* Background variants */
		--color-background--lighten-05: color-mix(in srgb, #fff 5%, var(--color-background));
		--color-background--darken-05: color-mix(in srgb, #000 5%, var(--color-background));
		--color-background--lighten-15: color-mix(in srgb, #fff 15%, var(--color-background));
		--color-background--darken-15: color-mix(in srgb, #000 15%, var(--color-background));
		--color-background--lighten-30: color-mix(in srgb, #fff 30%, var(--color-background));
		--color-background--darken-30: color-mix(in srgb, #000 30%, var(--color-background));
		--color-background--darken-50: color-mix(in srgb, #000 50%, var(--color-background));

		/* Foreground variants */
		--color-foreground--75: color-mix(in srgb, transparent 25%, var(--color-foreground));
		--color-foreground--65: color-mix(in srgb, transparent 35%, var(--color-foreground));
		--color-foreground--50: color-mix(in srgb, transparent 50%, var(--color-foreground));
		--color-foreground--35: color-mix(in srgb, transparent 65%, var(--color-foreground));
		--color-foreground--25: color-mix(in srgb, transparent 75%, var(--color-foreground));

		/* Highlight colors */
		--color-highlight: var(--vscode-button-background, var(--vscode-button-border));
		--color-highlight--50: color-mix(in srgb, transparent 50%, var(--color-highlight));
		--color-highlight--25: color-mix(in srgb, transparent 75%, var(--color-highlight));
		--color-highlight--10: color-mix(in srgb, transparent 90%, var(--color-highlight));

		--focus-color: var(--vscode-focusBorder);

		/* Host element styles */
		display: block;
		background-color: var(--color-background);
		color: var(--color-foreground);
		font-size: var(--font-size);
		line-height: 1.4;
		overflow: hidden;
		min-width: 0;
	}

	:focus,
	:focus-within {
		outline-color: var(--focus-color);
	}

	/* Avatar background (used by gl-avatar-list component) */
	:host-context(.vscode-dark),
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) {
		--avatar-bg: var(--color-background--lighten-30);
	}
	:host-context(.vscode-light) {
		--avatar-bg: var(--color-background--darken-30);
	}
	:host-context(.vscode-high-contrast-light) {
		--avatar-bg: var(--color-foreground--50);
	}

	/* ==========================================================================
	   Base Element Styles
	   ========================================================================== */

	a {
		color: var(--color-link-foreground);
		text-decoration: none;
	}
	a:focus {
		outline: 1px solid var(--color-focus-border);
		outline-offset: 2px;
	}

	h2 {
		font-size: 2.2rem;
		font-weight: 200;
		line-height: normal;
		margin: 1em 0 0.3em 0;
		white-space: nowrap;
	}

	h4 {
		font-size: 1.4rem;
		font-weight: 200;
		line-height: normal;
		margin: 1em 0 0.3em 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* ==========================================================================
	   Icons
	   ========================================================================== */

	.icon--branch::before {
		content: '\\ea68';
		font-family: codicon;
		font-size: 1.2rem;
		position: relative;
		top: 2px;
		margin: 0 3px;
	}

	.icon--commit::before {
		content: '\\eafc';
		font-family: codicon;
		font-size: 1.2rem;
		position: relative;
		top: 2px;
		margin: 0 1px 0 3px;
	}

	.mr-1 {
		margin-right: 0.4rem;
	}

	/* ==========================================================================
	   Layout (Grid Container)
	   ========================================================================== */

	.container {
		display: grid;
		grid-template-areas:
			'header'
			'banner'
			'content'
			'footer';
		grid-template-rows: auto auto minmax(0, 1fr) auto;
		grid-template-columns: minmax(0, 1fr);
		height: 100vh;
		min-width: 0;
		box-sizing: border-box;
		padding: 0.5rem;
	}

	.content {
		grid-area: content;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}

	/* ==========================================================================
	   Banners (Preserves Merges)
	   ========================================================================== */

	.banners {
		grid-area: banner;
		display: flex;
		flex-direction: column;
	}

	.preserves-merges-banner,
	.close-warning-banner {
		margin: 0.5rem 1rem;
		margin-block-end: 0.5rem;

		/* Info-style colors */
		--gl-banner-primary-background: var(--vscode-inputValidation-infoBackground, rgba(0, 127, 212, 0.15));
		--gl-banner-secondary-background: var(--vscode-inputValidation-infoBackground, rgba(0, 127, 212, 0.15));
		--gl-banner-text-color: var(--vscode-inputValidation-infoForeground, inherit);
		--gl-banner-primary-emphasis-background: var(--vscode-inputValidation-infoBorder, #007fd4);
	}

	/* ==========================================================================
	   Header
	   ========================================================================== */

	header {
		grid-area: header;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		min-width: 0;

		gl-checkbox {
			margin-block: 0;
		}

		gl-commit-sha::part(label) {
			font-weight: bold;
		}
	}

	.header__row {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		gap: 0.5rem 1rem;
		min-width: 0;
	}

	.header-info {
		flex: 1 1 0;
		min-width: 0;
		color: var(--color-foreground--65);
		margin-left: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-block: 0.4rem;
	}

	.header-info gl-branch-name,
	.header-info gl-commit-sha {
		vertical-align: baseline;
	}

	.header-info gl-tooltip {
		display: inline;
		min-width: 0;
	}

	.header-count {
		margin-left: 1rem;
		white-space: nowrap;
	}

	.header-onto {
		display: inline;
		white-space: nowrap;
	}

	.header-actions {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		gap: 1.6rem;
		white-space: nowrap;
	}

	.header-toggle {
		flex: 0 0 auto;
		white-space: nowrap;
	}

	.header-title {
		flex: 0 1 auto;
		font-size: 1.6rem;
		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* Rebase banner */
	.rebase-banner {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor, #c4a000);
		color: #000;
		padding: 0.3rem 0.6rem;
		border-radius: 0.3rem;

		&.has-conflicts {
			background-color: var(
				--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
				#cc6600
			);
			color: #fff;
		}

		code-icon {
			flex: none;
		}

		.rebase-status {
			flex: none;
		}

		gl-tooltip {
			flex: none;
		}

		.rebase-progress {
			flex: none;
			font-weight: 600;
			margin-left: auto;
		}

		.rebase-remaining {
			flex: none;
			opacity: 0.85;
		}

		.rebase-action-link {
			flex: none;
			color: inherit;
			text-decoration: underline dotted;
			text-underline-offset: 0.3rem;
			cursor: pointer;
			opacity: 0.9;
			margin-left: 1rem;

			&:hover {
				text-decoration: none;
				opacity: 1;
			}
		}
	}

	/* ==========================================================================
	   Entries
	   ========================================================================== */

	.entries {
		flex: 1 1 0;
		display: block;
		min-height: 0;
		overflow-x: hidden !important;
		overflow-y: auto;
		outline: none;
		margin: 0.5rem 1rem;
		box-sizing: border-box;

		border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
	}

	.entries {
		--current-entry-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor, #c4a000);

		/* Override current entry color when there are conflicts */
		&.has-conflicts {
			--current-entry-color: var(
				--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
				#c74e39
			);
		}
	}

	.entries:focus-within {
		outline: none;
	}

	.entries-empty {
		flex: 1 1 0;
		display: flex;
		justify-content: center;
		color: var(--color-foreground--85);
		margin-top: 3rem;
		font-style: italic;
	}

	gl-rebase-entry.dragging {
		opacity: 0.4;
	}

	gl-rebase-entry.drag-over::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background-color: var(--vscode-focusBorder);
		z-index: 10;
		pointer-events: none;
	}

	/* When hovering on bottom half of entry, show indicator at bottom */
	gl-rebase-entry.drag-over-bottom::before {
		top: auto;
		bottom: 0;
	}

	/* Base entry indicator position depends on mode:
	   - Ascending (base at top): indicator at bottom (insert after base)
	   - Descending (base at bottom): indicator at top (insert before base) */
	.entries.ascending gl-rebase-entry[isbase].drag-over::before {
		top: auto;
		bottom: 0;
	}

	/* ==========================================================================
	   Conflict Split Panel
	   ========================================================================== */

	.entries-panel {
		display: flex;
		flex-direction: column;
		overflow: hidden;

		> .entries {
			border-bottom: none;
		}
	}

	.conflict-split {
		flex: 1 1 0;
		min-height: 0;

		&::part(divider) {
			background-image: linear-gradient(
				var(--vscode-sideBarSectionHeader-border, rgba(128, 128, 128, 0.35)),
				var(--vscode-sideBarSectionHeader-border, rgba(128, 128, 128, 0.35))
			);
			background-size: 100% 1px;
			background-position: center;
			background-repeat: no-repeat;
			transition: background-color 0.1s ease-out;
		}

		&::part(divider):hover,
		&[dragging]::part(divider) {
			background-image: linear-gradient(
				var(--vscode-sash-hoverBorder, var(--vscode-focusBorder)),
				var(--vscode-sash-hoverBorder, var(--vscode-focusBorder))
			);
			background-size: 100% 100%;
			transition: background-color 0.1s ease-out 0.2s;
		}
	}

	.conflict-panel {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		padding: 0 1rem;
	}

	.conflict-panel__header {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 0;
		font-weight: 600;
		color: var(--vscode-editorWarning-foreground, #cca700);
		flex: none;
	}

	.conflict-panel__header > span {
		flex: 1;
	}

	.conflict-panel__list {
		flex: 1;
		min-height: 0;
		--gl-decoration-before-font-size: 0.8em;
		--gl-decoration-before-opacity: 0.7;
	}

	/* ==========================================================================
	   Footer
	   ========================================================================== */

	footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem 1rem;
		background: var(--color-background);
		z-index: 1;
		min-width: 0;
	}

	.shortcuts {
		flex: 1 1 0;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		gap: 0.5rem 1rem;
		overflow: hidden;
		min-width: 0;

		> code-icon {
			flex: 0 0 auto;
		}
	}

	.shortcut {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: baseline;
		color: var(--color-foreground--65);
		gap: 0.2rem;
		white-space: nowrap;

		kbd {
			color: var(--vscode-keybindingLabel-foreground);
			display: inline-block;
			font-family: var(--vscode-font-family);
			font-weight: 600;
			line-height: 1.4;
			vertical-align: middle;

			&.word {
				text-decoration: underline;
				text-underline-offset: 0.3rem;
			}
		}

		.label {
			margin-left: 0.3rem;
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
	}

	gl-rebase-conflict-indicator {
		margin-right: auto;
		margin-left: 1.6rem;
	}

	.conflict-loading {
		display: inline-flex;
		align-items: center;
		margin-left: 0.5rem;
		color: var(--vscode-foreground);
		opacity: 0.7;
	}

	.conflict-summary {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-left: 0.5rem;
		padding: 0.2rem 0.6rem;
		border-radius: 0.3rem;
		font-size: 1.1rem;
		font-weight: 500;

		&.warning {
			background-color: var(--vscode-inputValidation-warningBackground, rgba(200, 140, 0, 0.2));
			color: var(--vscode-inputValidation-warningForeground, #cca700);
			border: 1px solid var(--vscode-inputValidation-warningBorder, #cca700);
		}
	}

	gl-button .button-shortcut {
		display: block;
		margin-top: 0.2rem;
		font-weight: 200;
		font-size: 0.9rem;
		opacity: 0.6;
		text-transform: none;
		letter-spacing: normal;
	}

	gl-button:hover .button-shortcut {
		opacity: 1;
	}

	/* ==========================================================================
	   Density: Comfortable
	   ========================================================================== */

	.container[data-density='comfortable'] {
		--gl-rebase-entry-padding-block: 0.5rem;
		--gl-rebase-entry-graph-height: 29px;
		--gl-rebase-entry-graph-offset: -0.5rem;
	}
`;let StateProviderBase=class StateProviderBase{constructor(e,t,i,o){this.host=e,this.ipc=i,this.logger=o,this._state=this.ipc.deserializeIpcData(t8(t)),this.logger?.debug(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){let e={clientId:ox,clientLoadedAt:ok};if(this.deferBootstrap){let t=await this.ipc.sendRequest(t7,{bootstrap:!0,...e});if(null!=t.state){let e=oa(t.state)?await t.state:t.state;this.onDeferredBootstrapStateReceived(e)}}else this.ipc.sendRequest(t7,{bootstrap:!1,...e})}onDeferredBootstrapStateReceived(e){this._state={...e,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};let RebaseStateProvider=class RebaseStateProvider extends StateProviderBase{constructor(e,t,i,o){super(e,t,i,o),this._pendingAvatarEmails=new Map,this._requestedAvatarEmails=new Set,this._pendingCommitShas=new Set,this._requestedCommitShas=new Set,this.host.addEventListener("missing-avatar",this.onMissingAvatar.bind(this)),this.host.addEventListener("missing-commit",this.onMissingCommit.bind(this))}static{this.optimisticPreservationMs=1e3}get deferBootstrap(){return!0}createContextProvider(e){return new context_provider_i(this.host,{context:"state",initialValue:e})}onMissingAvatar(e){let{email:t,sha:i}=e.detail;t&&i&&(this._requestedAvatarEmails.has(t)||(this._pendingAvatarEmails.set(t,i),this._requestedAvatarEmails.add(t),this._sendPendingAvatarRequestsDebounced??=iD(this.sendPendingAvatarRequests.bind(this),50),this._sendPendingAvatarRequestsDebounced()))}sendPendingAvatarRequests(){if(!this._pendingAvatarEmails.size)return;let e=Object.fromEntries(this._pendingAvatarEmails);this._pendingAvatarEmails.clear(),this.ipc.sendCommand(te,{emails:e})}onMissingCommit(e){let{sha:t}=e.detail;!t||this._requestedCommitShas.has(t)||(this._pendingCommitShas.add(t),this._requestedCommitShas.add(t),this._sendPendingCommitRequestsDebounced??=iD(this.sendPendingCommitRequests.bind(this),50),this._sendPendingCommitRequestsDebounced())}sendPendingCommitRequests(){if(!this._pendingCommitShas.size)return;let e=[...this._pendingCommitShas];this._pendingCommitShas.clear(),this.ipc.sendCommand(tt,{shas:e})}onMessageReceived(e){switch(!0){case tc.is(e):this._state=this.reconcileIncomingState(e.params.state),this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case th.is(e):for(let t of(this.updateAvatars(e.params.avatars),Object.keys(e.params.avatars)))this._requestedAvatarEmails.delete(t);break;case td.is(e):for(let t of(this.updateCommits(e.params.commits,e.params.authors,e.params.isInPlace),Object.keys(e.params.commits)))this._requestedCommitShas.delete(t);break;case tp.is(e):this._requestedAvatarEmails.clear(),this._requestedCommitShas.clear(),this._state={...this._state,subscription:e.params.subscription,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}}reconcileIncomingState(e){let t=this._expectedEntriesSignature;if(null==t||this._state?.entries==null)return{...e,timestamp:Date.now()};if(oH(e.entries)===t||performance.now()-(this._expectedSignatureSetAt??0)>RebaseStateProvider.optimisticPreservationMs)return this.clearExpectedSignature(),{...e,timestamp:Date.now()};let i=this._state.entries,o=new Set(e.entries.map(e=>e.id));if(!(i.length===e.entries.length&&i.every(e=>o.has(e.id))))return this.clearExpectedSignature(),{...e,timestamp:Date.now()};let r=new Map(e.entries.map(e=>[e.id,e])),s=i.map(e=>{let t=r.get(e.id);return null==t?e:eZ(e)&&eZ(t)?{...t,action:e.action}:t});return{...e,entries:s,timestamp:Date.now()}}clearExpectedSignature(){this._expectedEntriesSignature=void 0,this._expectedSignatureSetAt=void 0}updateAvatars(e){if(!this._state?.authors)return;let t=!1;for(let[i,o]of Object.entries(e)){let e=this._state.authors[i];e&&e.avatarUrl!==o&&(e.avatarUrl=o,t=!0)}t&&(this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate())}updateCommits(e,t,i){if(!this._state)return;let o=!1;if(null!=i&&this._state.isInPlace!==i&&(this._state.isInPlace=i,o=!0),this._state.onto&&!this._state.onto.commit){let t=e[this._state.onto.sha];t&&(this._state.onto={...this._state.onto,commit:t},o=!0)}for(let[i,r]of(this._state.entries=this._state.entries.map(t=>{if(!eZ(t)||null!=t.commit)return t;let i=e[t.sha];return i?(o=!0,{...t,commit:i}):t}),this._state.doneEntries&&(this._state.doneEntries=this._state.doneEntries.map(t=>{if(!eZ(t)||null!=t.commit)return t;let i=e[t.sha];return i?(o=!0,{...t,commit:i}):t})),Object.entries(t))){let e=this._state.authors[i];e?this._state.authors[i]={...r,avatarUrl:e.avatarUrl??r.avatarUrl}:this._state.authors[i]=r,o=!0}o&&(this._state={...this._state,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate())}applyOptimisticEntries(e){if(null==this._state)return;let t=function(e){let t=e.findIndex(eZ);if(-1===t)return e;let i=e[t];if(!eZ(i)||"squash"!==i.action&&"fixup"!==i.action)return e;let o=e.slice();return o[t]={...i,action:"pick"},o}(e);this._state={...this._state,entries:t,timestamp:Date.now()},this._expectedEntriesSignature=oH(t),this._expectedSignatureSetAt=performance.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate()}moveEntry(e,t){if(!this._state?.entries||e===t)return;let i=[...this._state.entries],[o]=i.splice(e,1);i.splice(t,0,o),this.applyOptimisticEntries(i)}moveEntries(e,t){if(!this._state?.entries||0===e.length)return;let i=[...this._state.entries],o=new Set(e),r=i.filter(e=>o.has(e.id)),s=i.filter(e=>!o.has(e.id)),a=Math.max(0,Math.min(t,s.length)),c=[...s.slice(0,a),...r,...s.slice(a)];this.applyOptimisticEntries(c)}shiftEntries(e,t){if(!this._state?.entries||0===e.length)return;let i=[...this._state.entries],o=new Set(e),r=i.map((e,t)=>o.has(e.id)?t:-1).filter(e=>-1!==e);if(0!==r.length){if("up"===t)for(let e of r){if(0===e)continue;let t=e-1;o.has(i[t].id)||([i[t],i[e]]=[i[e],i[t]])}else for(let e=r.length-1;e>=0;e--){let t=r[e];if(t===i.length-1)continue;let s=t+1;o.has(i[s].id)||([i[s],i[t]]=[i[t],i[s]])}this.applyOptimisticEntries(i)}}changeEntryAction(e,t){this.changeEntryActions([{sha:e,action:t}])}changeEntryActions(e){if(!this._state?.entries||0===e.length)return;let t=new Map(e.map(e=>[e.sha,e.action])),i=this._state.entries.map(e=>{if(!eZ(e))return e;let i=t.get(e.sha);return null!=i?{...e,action:i}:e});this.applyOptimisticEntries(i)}};function oH(e){return e.map(e=>eZ(e)?`${e.id}:${e.action}`:`${e.id}:cmd`).join("|")}function oK(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}let oW=(e,t,i)=>{let o=new Map;for(let r=t;r<=i;r++)o.set(e[r],r);return o},oG=eF(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);let r=[],s=[],a=0;for(let t of e)r[a]=o?o(t,a):a,s[a]=i(t,a),a++;return{values:s,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){let r=e._$AH,{values:s,keys:a}=this.dt(t,i,o);if(!Array.isArray(r))return this.ut=a,s;let c=this.ut??=[],h=[],p,u,g=0,m=r.length-1,f=0,b=s.length-1;for(;g<=m&&f<=b;)if(null===r[g])g++;else if(null===r[m])m--;else if(c[g]===a[f])h[f]=tK(r[g],s[f]),g++,f++;else if(c[m]===a[b])h[b]=tK(r[m],s[b]),m--,b--;else if(c[g]===a[b])h[b]=tK(r[g],s[b]),tH(e,h[b+1],r[g]),g++,b--;else if(c[m]===a[f])h[f]=tK(r[m],s[f]),tH(e,r[g],r[m]),m--,f++;else if(void 0===p&&(p=oW(a,f,b),u=oW(c,g,m)),p.has(c[g]))if(p.has(c[m])){let t=u.get(a[f]),i=void 0!==t?r[t]:null;if(null===i){let t=tH(e,r[g]);tK(t,s[f]),h[f]=t}else h[f]=tK(i,s[f]),tH(e,r[g],i),r[t]=null;f++}else tG(r[m]),m--;else tG(r[g]),g++;for(;f<=b;){let t=tH(e,h[b+1]);tK(t,s[f]),h[f++]=t}for(;g<=m;){let e=r[g++];null!==e&&tG(e)}return this.ut=a,((e,t=tW)=>e._$AH=t)(e,h),eC}});let RangeChangedEvent=class RangeChangedEvent extends Event{constructor(e){super(RangeChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};RangeChangedEvent.eventName="rangeChanged";let VisibilityChangedEvent=class VisibilityChangedEvent extends Event{constructor(e){super(VisibilityChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};VisibilityChangedEvent.eventName="visibilityChanged";let UnpinnedEvent=class UnpinnedEvent extends Event{constructor(){super(UnpinnedEvent.eventName,{bubbles:!1})}};UnpinnedEvent.eventName="unpinned";let ScrollerShim=class ScrollerShim{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}};let ScrollerController=class ScrollerController extends ScrollerShim{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return null!==this._destination}scrollTo(e,t){this._scrollTo("number"==typeof e&&"number"==typeof t?{left:e,top:t}:e)}scrollBy(e,t){let i="number"==typeof e&&"number"==typeof t?{left:e,top:t}:e;void 0!==i.top&&(i.top+=this.scrollTop),void 0!==i.left&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){null!==this._end&&this._end(),"smooth"===e.behavior?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=void 0===t?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=void 0===i?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),(null===this._destination||i!==this._destination.left||t!==this._destination.top)&&(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(null!==this._destination){let{scrollTop:e,scrollLeft:t}=this,{top:i,left:o}=this._destination;i=Math.min(i||0,this.maxScrollTop);let r=Math.abs((o=Math.min(o||0,this.maxScrollLeft))-t);1>Math.abs(i-e)&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),0===this._clients.size&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),1===this._clients.size&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};let oZ="u">typeof window?window.ResizeObserver:void 0,oY=Symbol("virtualizerRef"),oQ="virtualizer-sizer";let Virtualizer=class Virtualizer{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new oZ(()=>this._hostElementSizeChanged()),this._childrenRO=new oZ(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[oY]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=function(e,t=!1){let i=!1;return(function(e,t=!1){let i=[],o=t?e:oJ(e);for(;null!==o;)i.push(o),o=oJ(o);return i})(e,t).filter(e=>{if(i)return!1;let t=getComputedStyle(e);return i="fixed"===t.position,"visible"!==t.overflow})}(this._hostElement,e),this._scrollerController=new ScrollerController(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${oQ}]`);t||((t=document.createElement("div")).setAttribute(oQ,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(oQ,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||s;if("function"==typeof t&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,i;if("function"==typeof e.type){i=e.type;let o={...e};delete o.type,t=o}else t=e;void 0===i&&(s=i=(await Promise.resolve().then($.bind($,285))).FlowLayout),this._layout=new i(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){let e=window.performance.now(),t=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:i}}return null}_measureChildren(){let e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let o=0;o<t.length;o++){let r=t[o],s=this._first+o;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[s]=i.call(this,r,this._items[s]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){var t;let i,{width:o,height:r}=e.getBoundingClientRect();return Object.assign({width:o,height:r},(t=e,{marginTop:oX((i=window.getComputedStyle(t)).marginTop),marginRight:oX(i.marginRight),marginBottom:oX(i.marginBottom),marginLeft:oX(i.marginLeft)}))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch{}window.performance.mark("uv-start")}!1===this._scrollerController.correctingScrollError&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){"scroll"===e.type&&(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent()}_handleLayoutMessage(e){"stateChanged"===e.type?this._updateDOM(e):"visibilityChanged"===e.type?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):"unpinned"===e.type&&this._hostElement.dispatchEvent(new UnpinnedEvent)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(oQ)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,i=this._layout;if(e&&t&&i){let o,r,s,a,c=e.getBoundingClientRect();o=0,r=0,s=window.innerHeight,a=window.innerWidth;let h=this._clippingAncestors.map(e=>e.getBoundingClientRect());for(let e of(h.unshift(c),h))o=Math.max(o,e.top),r=Math.max(r,e.left),s=Math.min(s,e.bottom),a=Math.min(a,e.right);let p=t.getBoundingClientRect(),u={left:c.left-p.left,top:c.top-p.top},g={width:t.scrollWidth,height:t.scrollHeight},m=o-c.top+e.scrollTop,f=r-c.left+e.scrollLeft;i.viewportSize={width:Math.max(0,a-r),height:Math.max(0,s-o)},i.viewportScroll={top:m,left:f},i.totalScrollSize=g,i.offsetWithinScroller=u}}_sizeHostElement(e){let t=e&&null!==e.width?Math.min(82e5,e.width):0,i=e&&null!==e.height?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${t}px, ${i}px)`;else{let e=this._hostElement.style;e.minWidth=t?`${t}px`:"100%",e.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:i,height:o,xOffset:r,yOffset:s},a)=>{let c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${t}px, ${e}px)`,void 0!==i&&(c.style.width=i+"px"),void 0!==o&&(c.style.height=o+"px"),c.style.left=void 0===r?null:r+"px",c.style.top=void 0===s?null:s+"px")})}async _adjustRange(e){let{_first:t,_last:i,_firstVisible:o,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-o})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),"smooth"===e.behavior){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new RangeChangedEvent({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new VisibilityChangedEvent({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){null!==this._layoutCompleteRejecter&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&null===this._pendingLayoutComplete&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){null!==this._layoutCompleteResolver&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function oX(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function oJ(e){if(null!==e.assignedSlot)return e.assignedSlot;if(null!==e.parentElement)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}let o0=e=>e,o1=(e,t)=>ew`${t}: ${JSON.stringify(e,null,2)}`;let VirtualizeDirective=class VirtualizeDirective extends async_directive_f{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>o1(e,t+this._first),this._keyFunction=(e,t)=>o0(e,this._first),this._items=[],2!==e.type)throw Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return oG(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?eC:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let i=e.parentNode;this._makeVirtualizer(i,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(e,i)=>t(e,i+this._first)),i&&(this._keyFunction=(e,t)=>i(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:i,scroller:o,items:r}=t;this._virtualizer=new Virtualizer({hostElement:e,layout:i,scroller:o}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){let i=e.parentNode;i&&1===i.nodeType&&(i.addEventListener("rangeChanged",e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}};let o2=eF(VirtualizeDirective);let LitVirtualizer=class LitVirtualizer extends lit_element_i{constructor(){super(...arguments),this.items=[],this.renderItem=o1,this.keyFunction=o0,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:i,layout:o,scroller:r}=this;return ew`${o2({items:e,renderItem:t,keyFunction:i,layout:o,scroller:r})}`}element(e){return this[oY]?.element(e)}get layoutComplete(){return this[oY]?.layoutComplete}scrollToIndex(e,t="start"){this.element(e)?.scrollIntoView({block:t})}};oK([eD({attribute:!1})],LitVirtualizer.prototype,"items",void 0),oK([eD()],LitVirtualizer.prototype,"renderItem",void 0),oK([eD()],LitVirtualizer.prototype,"keyFunction",void 0),oK([eD({attribute:!1})],LitVirtualizer.prototype,"layout",void 0),oK([eD({reflect:!0,type:Boolean})],LitVirtualizer.prototype,"scroller",void 0),customElements.define("lit-virtualizer",LitVirtualizer);let o3=()=>new ref_h;let ref_h=class ref_h{};let o4=new WeakMap,o5=eF(class extends async_directive_f{render(e){return e$}update(e,[t]){let i=t!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),e$}rt(e){if(void 0!==this.G)if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=o4.get(t);void 0===i&&(i=new WeakMap,o4.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?o4.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function o6(e,t,i){return e?t(e):i?.(e)}let FilterController=class FilterController{constructor(e,t){this.host=e,this.options=t,this._query="",this._terms=[],e.addController(this)}hostConnected(){}hostDisconnected(){clearTimeout(this._debounceTimer),this._debounceTimer=void 0}get query(){return this._query}get terms(){return this._terms}get isFiltering(){return this._terms.length>0}setQuery(e,t){(this._query!==e||t?.debounce)&&(this._query=e,this.options.onQueryChanged?.(e),clearTimeout(this._debounceTimer),t?.debounce?this._debounceTimer=setTimeout(()=>this.apply(),this.options.debounceMs??150):this.apply())}clear(){this.setQuery("")}apply(){this._terms=this._query.toLowerCase().trim().split(/\s+/).filter(e=>e.length>0),this.options.applyMatch(this._terms),this.options.onApplied?.(),this.host.requestUpdate()}};let CollectionIndexController=class CollectionIndexController{constructor(e,t){this.options=t,this._idToIndex=new Map,e.addController(this)}hostConnected(){this.rebuild()}hostDisconnected(){this._idToIndex.clear()}rebuild(){this._idToIndex.clear();let e=this.options.getItems();if(null!=e)for(let t=0;t<e.length;t++)this._idToIndex.set(this.options.getItemId(e[t]),t)}get size(){return this.options.getItems()?.length??0}indexOf(e){return this._idToIndex.get(e)??-1}has(e){return this._idToIndex.has(e)}itemAt(e){return this.options.getItems()?.[e]}idAt(e){let t=this.itemAt(e);return null==t?void 0:this.options.getItemId(t)}itemFor(e){let t=this.indexOf(e);return -1===t?void 0:this.itemAt(t)}ids(){let e=this.options.getItems();return null==e?[]:e.map(e=>this.options.getItemId(e))}};let FocusController=class FocusController{constructor(e,t){this.host=e,this.options=t,this._focusedIndex=-1,this._containerHasFocus=!1,this._connected=!1,e.addController(this)}hostConnected(){this._connected=!0}hostDisconnected(){this._connected=!1}get strategy(){return this.options.strategy??"activedescendant"}get focusedId(){return this._focusedId}get focusedIndex(){return this._focusedIndex}setFocusedId(e){this._focusedId=e}setFocusedIndex(e){this._focusedIndex=e}get containerHasFocus(){return this._containerHasFocus}setContainerHasFocus(e){this._containerHasFocus!==e&&(this._containerHasFocus=e,this.host.requestUpdate())}currentIndex(){let e=this.options.index;if(null!=this._focusedId){let t=e.indexOf(this._focusedId);if(-1!==t)return t}return this._focusedIndex>=0&&this._focusedIndex<e.size?this._focusedIndex:e.size>0?0:-1}focusIndex(e,t){let i=this.options.index.size;if(0===i)return;let o=Math.max(0,Math.min(e,i-1)),r=this.options.index.idAt(o);null!=r&&(this._focusedId=r,this._focusedIndex=o,this.options.onChange?.(),this.host.requestUpdate(),t?.scroll!==!1&&this.options.scroll?.scrollToIndex(o,{restoreFocus:t?.restoreFocus??!0}))}setFocused(e,t){let i=this.options.index.indexOf(e);-1!==i&&this.focusIndex(i,{scroll:t?.scroll})}move(e,t){let i=this.currentIndex()+e;this.focusIndex(i,{scroll:t?.scroll})}first(){this.focusIndex(0)}last(){this.focusIndex(this.options.index.size-1)}pageBy(e,t){this.move(e*Math.max(1,t))}focusElement(e){let t=e??this._focusedId;if(null==t)return;let i=this.options.index.indexOf(t);-1!==i&&this.options.scroll?.scrollToIndex(i,{restoreFocus:!1}),requestAnimationFrame(()=>{if(this._connected)if("roving"===this.strategy){var e;let i,o=this.options.getElementForId?.(t)??this.options.getContainer?.()?.querySelector(`[data-id="${(e=t,i=globalThis.CSS,i?.escape!=null?i.escape(e):e.replace(/["\\]/g,"\\$&"))}"]`);o?.focus()}else this.options.getContainer?.()?.focus()})}reconcile(){let e=this.options.index;if(null!=this._focusedId){let t=e.indexOf(this._focusedId);if(-1!==t){this._focusedIndex=t;return}if(e.size>0){let t=Math.max(0,Math.min(this._focusedIndex,e.size-1));this._focusedIndex=t,this._focusedId=e.idAt(t)}else this._focusedId=void 0,this._focusedIndex=-1}else e.size>0&&(this._focusedId=e.idAt(0),this._focusedIndex=0)}seedFirstIfUnset(){null!=this._focusedId||0!==this.options.index.size&&(this._focusedId=this.options.index.idAt(0),this._focusedIndex=0)}};let KeyboardNavController=class KeyboardNavController{constructor(e,t){this.host=e,this.options=t,e.addController(this)}hostConnected(){}hostDisconnected(){}get multi(){return"multi"===this.options.mode()}get followsFocus(){return this.options.selectionFollowsFocus?.()??!0}handleKeydown(e){let{focus:t,selection:i}=this.options;switch(e.key){case"ArrowDown":case"ArrowUp":{let i="ArrowDown"===e.key?1:-1;if(this.multi&&(e.ctrlKey||e.metaKey))return t.move(i),!0;return t.move(i),this.applyNavSelection(e),!0}case"Home":case"End":return"Home"===e.key?t.first():t.last(),this.applyNavSelection(e),!0;case"PageUp":case"PageDown":return t.pageBy("PageDown"===e.key?1:-1,this.options.pageSize?.()??10),this.applyNavSelection(e),!0;case"Enter":{let e=t.focusedId;return null!=e&&this.options.onActivate?.(e),!0}case" ":{let e=t.focusedId;if(null==e)return!0;return this.multi?i.toggle(e):this.options.onActivate?.(e),!0}case"a":case"A":if(this.multi&&(e.ctrlKey||e.metaKey))return i.selectAll(),!0;return this.options.onUnhandledKey?.(e)??!1;default:return this.options.onUnhandledKey?.(e)??!1}}applyNavSelection(e){let t=this.options.focus.focusedId;if(null!=t){if(this.multi&&e.shiftKey)return void this.options.selection.selectRange(t);if(this.followsFocus){if(this.multi&&!this.options.selection.canSelect(t))return;this.options.selection.setSingle(t)}}}};let SelectionController=class SelectionController{constructor(e,t){this.options=t,this._selected=new Set,e.addController(this)}hostConnected(){}hostDisconnected(){}get mode(){return this.options.mode?.()??"single"}get selectedIds(){return this._selected}get size(){return this._selected.size}get anchorId(){return this._anchorId}has(e){return this._selected.has(e)}isSelectable(e){return this.options.isSelectable?.(e)??!0}canSelect(e){return this.isSelectable(e)}commit(e){this._selected=e,this.options.onChange?.()}setSingle(e){this._anchorId=e,this.commit(new Set([e]))}setAnchor(e){this._anchorId=e}toggle(e){if(!this.isSelectable(e))return;let t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._anchorId=e,this.commit(t)}selectRange(e,t){let i=this.options.orderedIds(),o=this._anchorId??e,r=i.indexOf(o),s=i.indexOf(e);if(-1===r||-1===s)return void this.setSingle(e);let[a,c]=r<=s?[r,s]:[s,r],h=t?.additive?new Set(this._selected):new Set;for(let e=a;e<=c;e++){let t=i[e];this.isSelectable(t)&&h.add(t)}this.commit(h)}selectAll(){let e=new Set;for(let t of this.options.orderedIds())this.isSelectable(t)&&e.add(t);(0!==e.size||0!==this._selected.size)&&this.commit(e)}clear(){0!==this._selected.size&&(this._anchorId=void 0,this.commit(new Set))}pruneTo(e){let t="function"==typeof e?e:t=>e.has(t),i=!1,o=new Set;for(let e of this._selected)t(e)?o.add(e):i=!0;null==this._anchorId||t(this._anchorId)||(this._anchorId=void 0),i&&this.commit(o)}};let VirtualScrollController=class VirtualScrollController{constructor(e,t){this.host=e,this.options=t,this._scrolling=!1,e.addController(this)}hostConnected(){}hostDisconnected(){this._scrolling=!1}scrollToIndex(e,t){if(this._scrolling)return;this._scrolling=!0;let i=t?.restoreFocus??!0;this.host.updateComplete.then(()=>{let t=this.options.getVirtualizer(),o=this.options.getContainer?.();if(null==t){this._scrolling=!1;return}let r=()=>{i&&null!=o&&document.activeElement!==o&&o.focus(),this._scrolling=!1},s=0===e,a=e===this.options.getCount()-1;s||a?requestAnimationFrame(()=>{s?t.scrollTop=0:t.scrollTop=t.scrollHeight,requestAnimationFrame(r)}):requestAnimationFrame(()=>{let i=t.scrollToIndex?.(e,"nearest");null!=i&&"function"==typeof i.then?i.then(r):requestAnimationFrame(r)})},()=>{this._scrolling=!1})}async kickAfterFirstLayout(e){let t=this.options.getVirtualizer();null!=t&&(await t.layoutComplete,e())}};let VirtualCollectionController=class VirtualCollectionController{constructor(e,t){this.host=e,this.options=t,e.addController(this),this.index=new CollectionIndexController(e,{getItems:t.getItems,getItemId:t.getItemId}),this.scroll=new VirtualScrollController(e,{getVirtualizer:t.getVirtualizer,getContainer:t.getContainer,getCount:()=>this.index.size}),this.selection=new SelectionController(e,{mode:t.mode,orderedIds:()=>this.index.ids(),isSelectable:null!=t.isSelectable?e=>this.isSelectable(e):void 0,onChange:t.onSelectionChange}),this.focus=new FocusController(e,{index:this.index,scroll:this.scroll,strategy:t.focusStrategy,getContainer:t.getContainer}),this.keyboard=new KeyboardNavController(e,{index:this.index,focus:this.focus,selection:this.selection,mode:t.mode??(()=>"single"),pageSize:t.pageSize,selectionFollowsFocus:t.selectionFollowsFocus,onActivate:t.onActivate,onUnhandledKey:t.onUnhandledKey})}hostConnected(){}hostDisconnected(){}hostUpdated(){this.seedAnchor()}seedAnchor(){if("multi"!==this.selection.mode||null!=this.selection.anchorId)return;let e=this.focus.focusedId;null!=e&&this.selection.setAnchor(e)}isSelectable(e){let t=this.options.isSelectable;if(null==t)return!0;let i=this.index.itemFor(e);return null!=i&&t(i)}onItemsChanged(){this.index.rebuild(),this.focus.reconcile(),this.selection.pruneTo(e=>this.index.has(e))}handleKeydown(e){return this.keyboard.handleKeydown(e)}};let o8=navigator?.userAgentData?.platform,o7=navigator.userAgent;"Linux"===o8||o7.includes("Linux");let o9="macOS"===o8||o7.includes("Macintosh");function re(){return o9?"⌥":"Alt"}"Windows"===o8||o7.includes("Windows");let rt=D`
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
`,ri=D`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;let ModifierKeysTracker=class ModifierKeysTracker{constructor(){this._altKey=!1,this._shiftKey=!1,this._ctrlKey=!1,this._metaKey=!1,this._hosts=new Set,this._listening=!1,this._onKey=e=>{let t=e.altKey||"keydown"===e.type&&"Alt"===e.key,i=e.shiftKey||"keydown"===e.type&&"Shift"===e.key,o=e.ctrlKey||"keydown"===e.type&&"Control"===e.key,r=e.metaKey||"keydown"===e.type&&"Meta"===e.key,s=("keyup"!==e.type||"Alt"!==e.key)&&t,a=("keyup"!==e.type||"Shift"!==e.key)&&i,c=("keyup"!==e.type||"Control"!==e.key)&&o,h=("keyup"!==e.type||"Meta"!==e.key)&&r;(this._altKey!==s||this._shiftKey!==a||this._ctrlKey!==c||this._metaKey!==h)&&(this._altKey=s,this._shiftKey=a,this._ctrlKey=c,this._metaKey=h,this._notify())},this._onPointer=e=>{(this._altKey!==e.altKey||this._shiftKey!==e.shiftKey||this._ctrlKey!==e.ctrlKey||this._metaKey!==e.metaKey)&&(this._altKey=e.altKey,this._shiftKey=e.shiftKey,this._ctrlKey=e.ctrlKey,this._metaKey=e.metaKey,this._notify())},this._onVisibilityChange=()=>{"hidden"===document.visibilityState&&this._reset()}}get altKey(){return this._altKey}get shiftKey(){return this._shiftKey}get ctrlKey(){return this._ctrlKey}get metaKey(){return this._metaKey}subscribe(e){return this._hosts.add(e),this._listening||this._start(),()=>{this._hosts.delete(e),0===this._hosts.size&&this._stop()}}_start(){this._listening=!0,window.addEventListener("keydown",this._onKey,{capture:!0}),window.addEventListener("keyup",this._onKey,{capture:!0}),window.addEventListener("mousemove",this._onPointer,{capture:!0}),window.addEventListener("mouseover",this._onPointer,{capture:!0}),document.addEventListener("visibilitychange",this._onVisibilityChange)}_stop(){this._listening=!1,window.removeEventListener("keydown",this._onKey,{capture:!0}),window.removeEventListener("keyup",this._onKey,{capture:!0}),window.removeEventListener("mousemove",this._onPointer,{capture:!0}),window.removeEventListener("mouseover",this._onPointer,{capture:!0}),document.removeEventListener("visibilitychange",this._onVisibilityChange),this._reset()}_reset(){let e=this._altKey||this._shiftKey||this._ctrlKey||this._metaKey;this._altKey=this._shiftKey=this._ctrlKey=this._metaKey=!1,e&&this._notify()}_notify(){for(let e of this._hosts)e.requestUpdate()}};let ro=new ModifierKeysTracker;let ModifierKeysController=class ModifierKeysController{constructor(e){this.host=e,e.addController(this)}get altKey(){return ro.altKey}get shiftKey(){return ro.shiftKey}get ctrlKey(){return ro.ctrlKey}get metaKey(){return ro.metaKey}hostConnected(){this._unsubscribe=ro.subscribe(this.host)}hostDisconnected(){this._unsubscribe?.(),this._unsubscribe=void 0}};let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=e$,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===e$||null==e)return this._t=void 0,this.it=e;if(e===eC)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let rr=eF(unsafe_html_e);function rs(e){return e?.includes(`
`)?rr(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}var rn=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}},ra=D`
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
`;let rl=new Set,rc=new Map,rh="ltr",rd="en",rp="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(rp){let e=new MutationObserver(rg);rh=document.documentElement.dir||"ltr",rd=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ru(...e){e.map(e=>{let t=e.$code.toLowerCase();rc.has(t)?rc.set(t,Object.assign(Object.assign({},rc.get(t)),e)):rc.set(t,e),a||(a=e)}),rg()}function rg(){rp&&(rh=document.documentElement.dir||"ltr",rd=document.documentElement.lang||navigator.language),[...rl.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rl.add(this.host)}hostDisconnected(){rl.delete(this.host)}dir(){return`${this.host.dir||rh}`.toLowerCase()}lang(){return`${this.host.lang||rd}`.toLowerCase()}getTranslationData(e){var t,i;let o;try{o=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let r=o.language.toLowerCase(),s=null!=(i=null==(t=o.region)?void 0:t.toLowerCase())?i:"",a=rc.get(`${r}-${s}`),c=rc.get(r);return{locale:o,language:r,region:s,primary:a,secondary:c}}exists(e,t){var i;let{primary:o,secondary:r}=this.getTranslationData(null!=(i=t.lang)?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!o&&!!o[e]||!!r&&!!r[e]||!!t.includeFallback&&!!a&&!!a[e]}term(e,...t){let i,{primary:o,secondary:r}=this.getTranslationData(this.lang());if(o&&o[e])i=o[e];else if(r&&r[e])i=r[e];else{if(!a||!a[e])return String(e);i=a[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}};var rm={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",clearEntry:"Clear entry",close:"Close",createOption:e=>`Create "${e}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",moreOptions:"More Options",mute:"Mute",nextSlide:"Next slide",nextVideo:"Next Video",numCharacters:e=>1===e?"1 character":`${e} characters`,numCharactersRemaining:e=>1===e?"1 character remaining":`${e} characters remaining`,numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousSlide:"Previous slide",previousVideo:"Previous video",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(e,t)=>`${e} of ${t}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",zoomIn:"Zoom in",zoomOut:"Zoom out"};ru(rm);var rf=class extends LocalizeController{};ru(rm);var rb=Object.defineProperty,rv=Object.getOwnPropertyDescriptor,r_=e=>{throw TypeError(e)},ry=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rv(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rb(t,i,s),s},rw=(e,t,i)=>t.has(e)||r_("Cannot "+i),rx=D`
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
`,rk=class extends lit_element_i{constructor(){let e;super(),(e=_).has(this)?r_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes("must start with '--'"));else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{}for(let[e,t]of(this.customStates.set("wa-defined",!0),this.constructor.elementProperties))"inherit"===t.default&&void 0!==t.initial&&"string"==typeof e&&this.customStates.set(`initial-${e}-${t.initial}`,!0)}static get styles(){return[rx,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))}attributeChangedCallback(e,t,i){let o,r;if(rw(this,o=_,"read from private field"),r?!r.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),rw(this,e=_,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};_=new WeakMap,ry([eD()],rk.prototype,"dir",2),ry([eD()],rk.prototype,"lang",2),ry([eD({type:Boolean,reflect:!0,attribute:"did-ssr"})],rk.prototype,"didSSR",2);let rC=Math.min,r$=Math.max,rS=Math.round,rE=Math.floor,rz=e=>({x:e,y:e}),rI={left:"right",right:"left",bottom:"top",top:"bottom"};function rA(e,t){return"function"==typeof e?e(t):e}function rL(e){return e.split("-")[0]}function rP(e){return e.split("-")[1]}function rT(e){return"x"===e?"y":"x"}function rM(e){return"y"===e?"height":"width"}function rR(e){let t=e[0];return"t"===t||"b"===t?"y":"x"}function rD(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}let rO=["left","right"],rj=["right","left"],rB=["top","bottom"],rF=["bottom","top"];function rq(e){let t=rL(e);return rI[t]+e.slice(t.length)}function rN(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function rU(e){let{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function rV(e,t,i){let o,{reference:r,floating:s}=e,a=rR(t),c=rT(rR(t)),h=rM(c),p=rL(t),u="y"===a,g=r.x+r.width/2-s.width/2,m=r.y+r.height/2-s.height/2,f=r[h]/2-s[h]/2;switch(p){case"top":o={x:g,y:r.y-s.height};break;case"bottom":o={x:g,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:m};break;case"left":o={x:r.x-s.width,y:m};break;default:o={x:r.x,y:r.y}}switch(rP(t)){case"start":o[c]-=f*(i&&u?-1:1);break;case"end":o[c]+=f*(i&&u?-1:1)}return o}async function rH(e,t){var i;void 0===t&&(t={});let{x:o,y:r,platform:s,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:m=!1,padding:f=0}=rA(t,e),b=rN(f),v=c[m?"floating"===g?"reference":"floating":g],_=rU(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(v)))||i?v:v.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),w="floating"===g?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,x=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating)),C=await (null==s.isElement?void 0:s.isElement(x))&&await (null==s.getScale?void 0:s.getScale(x))||{x:1,y:1},$=rU(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:x,strategy:h}):w);return{top:(_.top-$.top+b.top)/C.y,bottom:($.bottom-_.bottom+b.bottom)/C.y,left:(_.left-$.left+b.left)/C.x,right:($.right-_.right+b.right)/C.x}}let rK=async(e,t,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,c=a.detectOverflow?a:{...a,detectOverflow:rH},h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:g}=rV(p,o,h),m=o,f=0,b={};for(let i=0;i<s.length;i++){let v=s[i];if(!v)continue;let{name:_,fn:w}=v,{x:x,y:C,data:$,reset:S}=await w({x:u,y:g,initialPlacement:o,placement:m,strategy:r,middlewareData:b,rects:p,platform:c,elements:{reference:e,floating:t}});u=null!=x?x:u,g=null!=C?C:g,b[_]={...b[_],...$},S&&f<50&&(f++,"object"==typeof S&&(S.placement&&(m=S.placement),S.rects&&(p=!0===S.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):S.rects),{x:u,y:g}=rV(p,m,h)),i=-1)}return{x:u,y:g,placement:m,strategy:r,middlewareData:b}},rW=new Set(["left","top"]);async function rG(e,t){let{placement:i,platform:o,elements:r}=e,s=await (null==o.isRTL?void 0:o.isRTL(r.floating)),a=rL(i),c=rP(i),h="y"===rR(i),p=rW.has(a)?-1:1,u=s&&h?-1:1,g=rA(t,e),{mainAxis:m,crossAxis:f,alignmentAxis:b}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&"number"==typeof b&&(f="end"===c?-1*b:b),h?{x:f*u,y:m*p}:{x:m*p,y:f*u}}function rZ(){return"u">typeof window}function rY(e){return rJ(e)?(e.nodeName||"").toLowerCase():"#document"}function rQ(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function rX(e){var t;return null==(t=(rJ(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rJ(e){return!!rZ()&&(e instanceof Node||e instanceof rQ(e).Node)}function r0(e){return!!rZ()&&(e instanceof Element||e instanceof rQ(e).Element)}function r1(e){return!!rZ()&&(e instanceof HTMLElement||e instanceof rQ(e).HTMLElement)}function r2(e){return!(!rZ()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof rQ(e).ShadowRoot)}function r3(e){let{overflow:t,overflowX:i,overflowY:o,display:r}=st(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&"inline"!==r&&"contents"!==r}function r4(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}let r5=/transform|translate|scale|rotate|perspective|filter/,r6=/paint|layout|strict|content/,r8=e=>!!e&&"none"!==e;function r7(e){let t=r0(e)?st(e):e;return r8(t.transform)||r8(t.translate)||r8(t.scale)||r8(t.rotate)||r8(t.perspective)||!r9()&&(r8(t.backdropFilter)||r8(t.filter))||r5.test(t.willChange||"")||r6.test(t.contain||"")}function r9(){return null==c&&(c="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),c}function se(e){return/^(html|body|#document)$/.test(rY(e))}function st(e){return rQ(e).getComputedStyle(e)}function si(e){return r0(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function so(e){if("html"===rY(e))return e;let t=e.assignedSlot||e.parentNode||r2(e)&&e.host||rX(e);return r2(t)?t.host:t}function sr(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);let r=function e(t){let i=so(t);return se(i)?t.ownerDocument?t.ownerDocument.body:t.body:r1(i)&&r3(i)?i:e(i)}(e),s=r===(null==(o=e.ownerDocument)?void 0:o.body),a=rQ(r);if(!s)return t.concat(r,sr(r,[],i));{let e=ss(a);return t.concat(a,a.visualViewport||[],r3(r)?r:[],e&&i?sr(e):[])}}function ss(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sn(e){let t=st(e),i=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=r1(e),s=r?e.offsetWidth:i,a=r?e.offsetHeight:o,c=rS(i)!==s||rS(o)!==a;return c&&(i=s,o=a),{width:i,height:o,$:c}}function sa(e){return r0(e)?e:e.contextElement}function sl(e){let t=sa(e);if(!r1(t))return rz(1);let i=t.getBoundingClientRect(),{width:o,height:r,$:s}=sn(t),a=(s?rS(i.width):i.width)/o,c=(s?rS(i.height):i.height)/r;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let sc=rz(0);function sh(e){let t=rQ(e);return r9()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:sc}function sd(e,t,i,o){var r;void 0===t&&(t=!1),void 0===i&&(i=!1);let s=e.getBoundingClientRect(),a=sa(e),c=rz(1);t&&(o?r0(o)&&(c=sl(o)):c=sl(e));let h=(void 0===(r=i)&&(r=!1),o&&(!r||o===rQ(a))&&r)?sh(a):rz(0),p=(s.left+h.x)/c.x,u=(s.top+h.y)/c.y,g=s.width/c.x,m=s.height/c.y;if(a){let e=rQ(a),t=o&&r0(o)?rQ(o):o,i=e,r=ss(i);for(;r&&o&&t!==i;){let e=sl(r),t=r.getBoundingClientRect(),o=st(r),s=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,m*=e.y,p+=s,u+=a,r=ss(i=rQ(r))}}return rU({width:g,height:m,x:p,y:u})}function sp(e,t){let i=si(e).scrollLeft;return t?t.left+i:sd(rX(e)).left+i}function su(e,t){let i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-sp(e,i),y:i.top+t.scrollTop}}function sg(e,t,i){var o;let r;if("viewport"===t)r=function(e,t){let i=rQ(e),o=rX(e),r=i.visualViewport,s=o.clientWidth,a=o.clientHeight,c=0,h=0;if(r){s=r.width,a=r.height;let e=r9();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,h=r.offsetTop)}let p=sp(o);if(p<=0){let e=o.ownerDocument,t=e.body,i=getComputedStyle(t),r="CSS1Compat"===e.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,a=Math.abs(o.clientWidth-t.clientWidth-r);a<=25&&(s-=a)}else p<=25&&(s+=p);return{width:s,height:a,x:c,y:h}}(e,i);else if("document"===t){let t,i,s,a,c,h,p;o=rX(e),t=rX(o),i=si(o),s=o.ownerDocument.body,a=r$(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),c=r$(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight),h=-i.scrollLeft+sp(o),p=-i.scrollTop,"rtl"===st(s).direction&&(h+=r$(t.clientWidth,s.clientWidth)-a),r={width:a,height:c,x:h,y:p}}else if(r0(t)){let e,o,s,a,c,h;o=(e=sd(t,!0,"fixed"===i)).top+t.clientTop,s=e.left+t.clientLeft,a=r1(t)?sl(t):rz(1),c=t.clientWidth*a.x,h=t.clientHeight*a.y,r={width:c,height:h,x:s*a.x,y:o*a.y}}else{let i=sh(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return rU(r)}function sm(e){return"static"===st(e).position}function sf(e,t){if(!r1(e)||"fixed"===st(e).position)return null;if(t)return t(e);let i=e.offsetParent;return rX(e)===i&&(i=i.ownerDocument.body),i}function sb(e,t){var i;let o=rQ(e);if(r4(e))return o;if(!r1(e)){let t=so(e);for(;t&&!se(t);){if(r0(t)&&!sm(t))return t;t=so(t)}return o}let r=sf(e,t);for(;r&&(i=r,/^(table|td|th)$/.test(rY(i)))&&sm(r);)r=sf(r,t);return r&&se(r)&&sm(r)&&!r7(r)?o:r||function(e){let t=so(e);for(;r1(t)&&!se(t);){if(r7(t))return t;if(r4(t))break;t=so(t)}return null}(e)||o}let sv=async function(e){let t=this.getOffsetParent||sb,i=this.getDimensions,o=await i(e.floating);return{reference:function(e,t,i){let o=r1(t),r=rX(t),s="fixed"===i,a=sd(e,!0,s,t),c={scrollLeft:0,scrollTop:0},h=rz(0);if(o||!o&&!s)if(("body"!==rY(t)||r3(r))&&(c=si(t)),o){let e=sd(t,!0,s,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else r&&(h.x=sp(r));s&&!o&&r&&(h.x=sp(r));let p=!r||o||s?rz(0):su(r,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},s_={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e,s="fixed"===r,a=rX(o),c=!!t&&r4(t.floating);if(o===a||c&&s)return i;let h={scrollLeft:0,scrollTop:0},p=rz(1),u=rz(0),g=r1(o);if((g||!g&&!s)&&(("body"!==rY(o)||r3(a))&&(h=si(o)),g)){let e=sd(o);p=sl(o),u.x=e.x+o.clientLeft,u.y=e.y+o.clientTop}let m=!a||g||s?rz(0):su(a,h);return{width:i.width*p.x,height:i.height*p.y,x:i.x*p.x-h.scrollLeft*p.x+u.x+m.x,y:i.y*p.y-h.scrollTop*p.y+u.y+m.y}},getDocumentElement:rX,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e,s=[..."clippingAncestors"===i?r4(t)?[]:function(e,t){let i=t.get(e);if(i)return i;let o=sr(e,[],!1).filter(e=>r0(e)&&"body"!==rY(e)),r=null,s="fixed"===st(e).position,a=s?so(e):e;for(;r0(a)&&!se(a);){let t=st(a),i=r7(a);i||"fixed"!==t.position||(r=null),(s?i||r:!(!i&&"static"===t.position&&r&&("absolute"===r.position||"fixed"===r.position)||r3(a)&&!i&&function e(t,i){let o=so(t);return!(o===i||!r0(o)||se(o))&&("fixed"===st(o).position||e(o,i))}(e,a)))?r=t:o=o.filter(e=>e!==a),a=so(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=sg(t,s[0],r),c=a.top,h=a.right,p=a.bottom,u=a.left;for(let e=1;e<s.length;e++){let i=sg(t,s[e],r);c=r$(i.top,c),h=rC(i.right,h),p=rC(i.bottom,p),u=r$(i.left,u)}return{width:h-u,height:p-c,x:u,y:c}},getOffsetParent:sb,getElementRects:sv,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:i}=sn(e);return{width:t,height:i}},getScale:sl,isElement:r0,isRTL:function(e){return"rtl"===st(e).direction}};function sy(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let sw=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,o;let r,s,{placement:a,rects:c,platform:h,elements:p}=t,{apply:u=()=>{},...g}=rA(e,t),m=await h.detectOverflow(t,g),f=rL(a),b=rP(a),v="y"===rR(a),{width:_,height:w}=c.floating;"top"===f||"bottom"===f?(r=f,s=b===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(s=f,r="end"===b?"top":"bottom");let x=w-m.top-m.bottom,C=_-m.left-m.right,$=rC(w-m[r],x),S=rC(_-m[s],C),E=!t.middlewareData.shift,A=$,P=S;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(P=C),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(A=x),E&&!b){let e=r$(m.left,0),t=r$(m.right,0),i=r$(m.top,0),o=r$(m.bottom,0);v?P=_-2*(0!==e||0!==t?e+t:r$(m.left,m.right)):A=w-2*(0!==i||0!==o?i+o:r$(m.top,m.bottom))}await u({...t,availableWidth:P,availableHeight:A});let T=await h.getDimensions(p.floating);return _!==T.width||w!==T.height?{reset:{rects:!0}}:{}}}};function sx(e){var t=e;for(let e=t;e;e=sk(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=sk(t);e;e=sk(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||r7(t)||"BODY"===e.tagName))return e}return null}function sk(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}let sC=eF(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return eC}});function s$(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}var sS=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),sE=class extends rk{constructor(){super(...arguments),this.localize=new rf(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,s=0,a=0,c=0,h=0,p=0,u=0;i?e.top<t.top?(o=e.left,r=e.bottom,s=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,u=t.top):(o=t.left,r=t.bottom,s=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,u=e.top):e.left<t.left?(o=e.right,r=e.top,s=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,u=t.bottom):(o=t.right,r=t.top,s=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||s$(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=function(e,t,i,o){let r;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=o,u=sa(e),g=s||a?[...u?sr(u):[],...t?sr(t):[]]:[];g.forEach(e=>{s&&e.addEventListener("scroll",i,{passive:!0}),a&&e.addEventListener("resize",i)});let m=u&&h?function(e,t){let i,o=null,r=rX(e);function s(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),s();let p=e.getBoundingClientRect(),{left:u,top:g,width:m,height:f}=p;if(c||t(),!m||!f)return;let b={rootMargin:-rE(g)+"px "+-rE(r.clientWidth-(u+m))+"px "+-rE(r.clientHeight-(g+f))+"px "+-rE(u)+"px",threshold:r$(0,rC(1,h))||1},v=!0;function _(t){let o=t[0].intersectionRatio;if(o!==h){if(!v)return a();o?a(!1,o):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||sy(p,e.getBoundingClientRect())||a(),v=!1}try{o=new IntersectionObserver(_,{...b,root:r.ownerDocument})}catch{o=new IntersectionObserver(_,b)}o.observe(e)}(!0),s}(u,i):null,f=-1,b=null;c&&(b=new ResizeObserver(e=>{let[o]=e;o&&o.target===u&&b&&t&&(b.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;null==(e=b)||e.observe(t)})),i()}),u&&!p&&b.observe(u),t&&b.observe(t));let v=p?sd(e):null;return p&&function t(){let o=sd(e);v&&!sy(v,o)&&i(),v=o,r=requestAnimationFrame(t)}(),i(),()=>{var e;g.forEach(e=>{s&&e.removeEventListener("scroll",i),a&&e.removeEventListener("resize",i)}),null==m||m(),null==(e=b)||e.disconnect(),b=null,p&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,i,o,r,s;let a,c,h,p,u;if(!this.active||!this.anchorEl||!this.popup)return;let g=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var i,o;let{x:r,y:s,placement:a,middlewareData:c}=t,h=await rG(t,e);return a===(null==(i=c.offset)?void 0:i.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:r+h.x,y:s+h.y,data:{...h,placement:a}}}}];this.sync?g.push(sw({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),sS&&!s$(this.anchor)&&"scroll"===this.boundary&&(a=sr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&g.push({name:"flip",options:t={boundary:this.flipBoundary||a,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var i,o,r,s,a,c,h,p;let u,g,m,{placement:f,middlewareData:b,rects:v,initialPlacement:_,platform:w,elements:x}=e,{mainAxis:C=!0,crossAxis:$=!0,fallbackPlacements:S,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:P=!0,...T}=rA(t,e);if(null!=(i=b.arrow)&&i.alignmentOffset)return{};let M=rL(f),D=rR(_),O=rL(_)===_,j=await (null==w.isRTL?void 0:w.isRTL(x.floating)),B=S||(O||!P?[rq(_)]:(u=rq(_),[rD(_),u,rD(u)])),F="none"!==A;!S&&F&&B.push(...(g=rP(_),m=function(e,t,i){switch(e){case"top":case"bottom":if(i)return t?rj:rO;return t?rO:rj;case"left":case"right":return t?rB:rF;default:return[]}}(rL(_),"start"===A,j),g&&(m=m.map(e=>e+"-"+g),P&&(m=m.concat(m.map(rD)))),m));let q=[_,...B],N=await w.detectOverflow(e,T),U=[],V=(null==(o=b.flip)?void 0:o.overflows)||[];if(C&&U.push(N[M]),$){let e,t,i,o,r=(c=f,h=v,void 0===(p=j)&&(p=!1),e=rP(c),i=rM(t=rT(rR(c))),o="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",h.reference[i]>h.floating[i]&&(o=rq(o)),[o,rq(o)]);U.push(N[r[0]],N[r[1]])}if(V=[...V,{placement:f,overflows:U}],!U.every(e=>e<=0)){let e=((null==(r=b.flip)?void 0:r.index)||0)+1,t=q[e];if(t&&("alignment"!==$||D===rR(t)||V.every(e=>rR(e.placement)!==D||e.overflows[0]>0)))return{data:{index:e,overflows:V},reset:{placement:t}};let i=null==(s=V.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!i)switch(E){case"bestFit":{let e=null==(a=V.filter(e=>{if(F){let t=rR(e.placement);return t===D||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(i=e);break}case"initialPlacement":i=_}if(f!==i)return{reset:{placement:i}}}return{}}}),this.shift&&g.push({name:"shift",options:i={boundary:this.shiftBoundary||a,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:r,platform:s}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...p}=rA(i,e),u={x:t,y:o},g=await s.detectOverflow(e,p),m=rR(rL(r)),f=rT(m),b=u[f],v=u[m];if(a){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",i=b+g[e],o=b-g[t];b=r$(i,rC(b,o))}if(c){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",i=v+g[e],o=v-g[t];v=r$(i,rC(v,o))}let _=h.fn({...e,[f]:b,[m]:v});return{..._,data:{x:_.x-t,y:_.y-o,enabled:{[f]:a,[m]:c}}}}}),this.autoSize?g.push(sw({boundary:this.autoSizeBoundary||a,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&g.push({name:"arrow",options:c={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:i,placement:o,rects:r,platform:s,elements:a,middlewareData:h}=e,{element:p,padding:u=0}=rA(c,e)||{};if(null==p)return{};let g=rN(u),m={x:t,y:i},f=rT(rR(o)),b=rM(f),v=await s.getDimensions(p),_="y"===f,w=_?"clientHeight":"clientWidth",x=r.reference[b]+r.reference[f]-m[f]-r.floating[b],C=m[f]-r.reference[f],$=await (null==s.getOffsetParent?void 0:s.getOffsetParent(p)),S=$?$[w]:0;S&&await (null==s.isElement?void 0:s.isElement($))||(S=a.floating[w]||r.floating[b]);let E=S/2-v[b]/2-1,A=rC(g[_?"top":"left"],E),P=rC(g[_?"bottom":"right"],E),T=S-v[b]-P,M=S/2-v[b]/2+(x/2-C/2),D=r$(A,rC(M,T)),O=!h.arrow&&null!=rP(o)&&M!==D&&r.reference[b]/2-(M<A?A:P)-v[b]/2<0,j=O?M<A?M-A:M-T:0;return{[f]:m[f]+j,data:{[f]:D,centerOffset:M-D-j,...O&&{alignmentOffset:j}},reset:O}}});let m=sS?e=>s_.getOffsetParent(e,sx):s_.getOffsetParent;(o=this.anchorEl,r=this.popup,s={placement:this.placement,middleware:g,strategy:sS?"absolute":"fixed",platform:{...s_,getOffsetParent:m}},h=new Map,u={...(p={platform:s_,...s}).platform,_c:h},rK(o,r,{...p,platform:u})).then(({x:e,y:t,middlewareData:i,placement:o})=>{let r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=i.arrow.x,t=i.arrow.y,o="",a="",c="",h="";if("start"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?i:"",h=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":i,h=r?i:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:c,left:h,[s]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new rn)}render(){return ew`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${sC({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${sC({popup:!0,"popup-active":this.active,"popup-fixed":!sS,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ew`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};sE.css=ra,ry([eB(".popup")],sE.prototype,"popup",2),ry([eB(".arrow")],sE.prototype,"arrowEl",2),ry([eD()],sE.prototype,"anchor",2),ry([eD({type:Boolean,reflect:!0})],sE.prototype,"active",2),ry([eD({reflect:!0})],sE.prototype,"placement",2),ry([eD()],sE.prototype,"boundary",2),ry([eD({type:Number})],sE.prototype,"distance",2),ry([eD({type:Number})],sE.prototype,"skidding",2),ry([eD({type:Boolean})],sE.prototype,"arrow",2),ry([eD({attribute:"arrow-placement"})],sE.prototype,"arrowPlacement",2),ry([eD({attribute:"arrow-padding",type:Number})],sE.prototype,"arrowPadding",2),ry([eD({type:Boolean})],sE.prototype,"flip",2),ry([eD({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],sE.prototype,"flipFallbackPlacements",2),ry([eD({attribute:"flip-fallback-strategy"})],sE.prototype,"flipFallbackStrategy",2),ry([eD({type:Object})],sE.prototype,"flipBoundary",2),ry([eD({attribute:"flip-padding",type:Number})],sE.prototype,"flipPadding",2),ry([eD({type:Boolean})],sE.prototype,"shift",2),ry([eD({type:Object})],sE.prototype,"shiftBoundary",2),ry([eD({attribute:"shift-padding",type:Number})],sE.prototype,"shiftPadding",2),ry([eD({attribute:"auto-size"})],sE.prototype,"autoSize",2),ry([eD()],sE.prototype,"sync",2),ry([eD({type:Object})],sE.prototype,"autoSizeBoundary",2),ry([eD({attribute:"auto-size-padding",type:Number})],sE.prototype,"autoSizePadding",2),ry([eD({attribute:"hover-bridge",type:Boolean})],sE.prototype,"hoverBridge",2),sE=ry([eM("wa-popup")],sE);var sz=Object.defineProperty,sI=Object.getOwnPropertyDescriptor,sA=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sI(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sz(t,i,s),s};let sL=["top","right","bottom","left","top-left","top-right","bottom-left","bottom-right"],sP=class extends GlElement{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.autoSizeVertical=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.suppressed=!1,this.handleReposition=()=>{let e=this.popup?.getAttribute("data-current-placement");null!=e&&e!==this._resolvedPlacement&&(this._resolvedPlacement=e)},this.handleResizePointerDown=e=>{if(0!==e.button)return;let t=e.currentTarget,i=t.dataset.handle;if(null==i)return;e.preventDefault();let o="right"===i||"top-right"===i||"bottom-right"===i,r="left"===i||"top-left"===i||"bottom-left"===i,s="bottom"===i||"bottom-left"===i||"bottom-right"===i,a="top"===i||"top-left"===i||"top-right"===i,c=this.body,h=e.clientX,p=e.clientY,u=c.getBoundingClientRect(),g=u.width,m=u.height;t.setPointerCapture(e.pointerId),t.classList.add("popover__resizer--active"),this.toggleAttribute("dragging",!0);let f=e=>{let t=e.clientX-h,i=e.clientY-p;o?c.style.width=`${Math.max(0,g+t)}px`:r&&(c.style.width=`${Math.max(0,g-t)}px`),s?c.style.height=`${Math.max(0,m+i)}px`:a&&(c.style.height=`${Math.max(0,m-i)}px`),this.popup?.reposition()},b=()=>{this.toggleAttribute("dragging",!1),t.classList.remove("popover__resizer--active"),t.removeEventListener("pointermove",f),t.removeEventListener("lostpointercapture",b),t.removeEventListener("pointerup",b)};t.addEventListener("pointermove",f,{passive:!0}),t.addEventListener("lostpointercapture",b),t.addEventListener("pointerup",b)},this.handleTriggerBlur=e=>{this.open&&(this.hasTrigger("focus")||this.hasTrigger("focus-visible"))&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this._skipHideOnClick=!1,this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=e=>{let t=this.hasTrigger("focus")||this.hasTrigger("focus-visible");this.hasTrigger("click")&&t&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1,!this.open||"hover"!==this._triggeredBy||this.hasTrigger("click")||e.composedPath().includes(this.body)||(this.suppressed=!0,this.hide())},this.handleMouseUp=()=>{this.suppressed=!1},this.handleDragStart=()=>{this.suppressed=!0,this.hide()},this.handleDragEnd=()=>{this.suppressed=!1},this.handleTriggerFocus=e=>{let t=this.hasTrigger("focus"),i=this.hasTrigger("focus-visible");if(t||i){if(!t&&i){let t=e.target;if(null==t||"function"!=typeof t.matches||!t.matches(":focus-visible"))return}this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus")}},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleDocumentMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=iM(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){if(clearTimeout(this.hoverTimeout),this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let e=iM(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),e)}}}static closeOthers(e){for(let t of sP.openPopovers)t===e||function(e,t){let i=t;for(;null!=i;){if(i===e)return!0;i=i.parentNode??(i instanceof ShadowRoot?i.host:null)}return!1}(t,e)||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}connectedCallback(){super.connectedCallback?.(),this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("dragstart",this.handleDragStart,{capture:!0}),window.addEventListener("dragend",this.handleDragEnd,{capture:!0})}disconnectedCallback(){this.removeEventListener("blur",this.handleTriggerBlur,!0),this.removeEventListener("focus",this.handleTriggerFocus,!0),this.removeEventListener("click",this.handleTriggerClick),this.removeEventListener("mousedown",this.handleTriggerMouseDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("dragstart",this.handleDragStart,{capture:!0}),window.removeEventListener("dragend",this.handleDragEnd,{capture:!0}),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,sP.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),this.updateResizeObserver()}updateResizeObserver(){null!=this.resize?null==this.resizeObserver&&null!=this.body&&(this.resizeObserver=new ResizeObserver(()=>this.popup?.reposition()),this.resizeObserver.observe(this.body)):null!=this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0)}render(){let e=this._resolvedPlacement??this.placement,t=(function(e){if(!e)return[];let t=new Set;for(let i of e.trim().split(/\s+/))switch(i){case"horizontal":t.add("right");break;case"vertical":t.add("bottom");break;case"both":t.add("right"),t.add("bottom"),t.add("bottom-right");break;case"all":for(let e of sL)t.add(e);break;default:sL.includes(i)&&t.add(i)}return[...t]})(this.resize).filter(t=>!function(e,t){let i,o;if(!t)return!1;let[r,s]=t.split("-");switch(r){case"top":i="bottom";break;case"right":i="left";break;case"bottom":i="top";break;case"left":i="right"}let a="left"===r||"right"===r;"start"===s?o=a?"top":"left":"end"===s&&(o=a?"bottom":"right");let c=t=>null!=t&&(e===t||e.startsWith(`${t}-`)||e.endsWith(`-${t}`));return c(i)||c(o)}(t,e));return ew`<wa-popup
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
				${t.map(e=>ew`<div
							class="popover__resizer popover__resizer--${e}"
							role="separator"
							aria-orientation=${"top"===e||"bottom"===e?"horizontal":"vertical"}
							aria-label="Resize"
							data-handle=${e}
							@pointerdown=${this.handleResizePointerDown}
						></div>`)}
			</div>
		</wa-popup>`}async show(e){if(this.open||this.suppressed){"click"===e&&"hover"===this._triggeredBy&&(this._triggeredBy=e);return}return(null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),sP.closeOthers(this),this.open=!0,sP.openPopovers.add(this),iR(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,sP.openPopovers.delete(this),iR(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus")||this.hasTrigger("focus-visible"))&&document.addEventListener("mousedown",this.handleDocumentMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleResizeChange(){this.updateResizeObserver()}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};sP.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sP.openPopovers=new Set,sP.styles=[oF,D`
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
		`],sA([eB("#popover")],sP.prototype,"body",2),sA([eB("wa-popup")],sP.prototype,"popup",2),sA([eD({reflect:!0})],sP.prototype,"placement",2),sA([eD({type:Object})],sP.prototype,"anchor",2),sA([eD({reflect:!0,type:Boolean})],sP.prototype,"disabled",2),sA([eD({type:Number})],sP.prototype,"distance",2),sA([eD({reflect:!0,type:Boolean})],sP.prototype,"open",2),sA([eD({reflect:!0,type:Boolean})],sP.prototype,"arrow",2),sA([eD({reflect:!0,type:Boolean,attribute:"auto-size-vertical"})],sP.prototype,"autoSizeVertical",2),sA([eD({reflect:!0})],sP.prototype,"resize",2),sA([eD({type:Number})],sP.prototype,"skidding",2),sA([eD()],sP.prototype,"trigger",2),sA([eD({type:Boolean})],sP.prototype,"hoist",2),sA([eD({reflect:!0})],sP.prototype,"appearance",2),sA([eO()],sP.prototype,"suppressed",2),sA([eO()],sP.prototype,"_resolvedPlacement",2),sA([ia("open",{afterFirstUpdate:!0})],sP.prototype,"handleOpenChange",1),sA([ia(["distance","placement","skidding"])],sP.prototype,"handleOptionsChange",1),sA([ia("resize",{afterFirstUpdate:!0})],sP.prototype,"handleResizeChange",1),sA([ia("disabled")],sP.prototype,"handleDisabledChange",1),sP=sA([eM("gl-popover")],sP);var sT=Object.defineProperty,sM=Object.getOwnPropertyDescriptor,sR=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sM(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sT(t,i,s),s};let sD=0,sO=[],sj=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.showDelay=500,this.hideDelay=0,this.suppressed=!1,this.open=!1,this.bodyId=`gl-tooltip-${++sD}`,this.onAnchorSlotChange=e=>{let t=e.target.assignedElements({flatten:!0})[0];t!==this.anchorEl&&(this.detachAnchor(),this.attachAnchor(t))},this.onDocumentKeyDown=e=>{"Escape"===e.key&&this.open&&sO.at(-1)===this&&(e.preventDefault(),e.stopPropagation(),this.open=!1)},this.onMouseOver=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!0},this.showDelay))},this.onMouseOut=()=>{this.anchorEl?.matches(":hover")||this.matches(":hover")||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!1},this.hideDelay))},this.onFocusIn=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.open=!0)},this.onFocusOut=()=>{clearTimeout(this.hoverTimeout),this.open=!1},this.onMouseDown=e=>{this.suppressed=!0,this.open=!1},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.open=!1},this.onDragEnd=e=>{this.suppressed=!1},this.onClick=e=>{this.hideOnClick&&(this.open=!1)}}connectedCallback(){super.connectedCallback?.(),this.eventController=new AbortController;let{signal:e}=this.eventController;this.addEventListener("mouseover",this.onMouseOver,{signal:e}),this.addEventListener("mouseout",this.onMouseOut,{signal:e}),this.addEventListener("focusin",this.onFocusIn,{signal:e}),this.addEventListener("focusout",this.onFocusOut,{signal:e}),this.addEventListener("mousedown",this.onMouseDown,{signal:e}),this.addEventListener("click",this.onClick,{signal:e}),window.addEventListener("mouseup",this.onMouseUp,{signal:e}),window.addEventListener("dragstart",this.onDragStart,{capture:!0,signal:e}),window.addEventListener("dragend",this.onDragEnd,{capture:!0,signal:e})}disconnectedCallback(){this.eventController?.abort(),this.eventController=void 0,this.detachAnchor(),this.unregisterDismissible(),clearTimeout(this.hoverTimeout),super.disconnectedCallback?.()}updated(e){e.has("open")&&(this.open?this.registerDismissible():this.unregisterDismissible()),e.has("disabled")&&this.disabled&&this.open&&(this.open=!1)}attachAnchor(e){null!=e&&(this.anchorEl=e,this.addAriaDescribedBy(e,this.bodyId))}detachAnchor(){null!=this.anchorEl&&(this.removeAriaDescribedBy(this.anchorEl,this.bodyId),this.anchorEl=void 0)}addAriaDescribedBy(e,t){let i=(e.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean);i.includes(t)||(i.push(t),e.setAttribute("aria-describedby",i.join(" ")))}removeAriaDescribedBy(e,t){let i=(e.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean).filter(e=>e!==t);0===i.length?e.removeAttribute("aria-describedby"):e.setAttribute("aria-describedby",i.join(" "))}registerDismissible(){sO.includes(this)||(sO.push(this),document.addEventListener("keydown",this.onDocumentKeyDown,{signal:this.eventController?.signal}))}unregisterDismissible(){let e=sO.indexOf(this);-1!==e&&sO.splice(e,1),document.removeEventListener("keydown",this.onDocumentKeyDown)}async hide(){this.open=!1,await this.updateComplete}async show(){this.disabled||this.suppressed||(this.open=!0,await this.updateComplete)}render(){return ew`<wa-popup
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
				<slot name="content">${rs(this.content)}</slot>
			</div>
		</wa-popup>`}};sj.styles=D`
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
	`,sR([eD()],sj.prototype,"content",2),sR([eD({reflect:!0})],sj.prototype,"placement",2),sR([eD({type:Boolean})],sj.prototype,"disabled",2),sR([eD({type:Number})],sj.prototype,"distance",2),sR([eD({type:Number,attribute:"show-delay"})],sj.prototype,"showDelay",2),sR([eD({type:Number,attribute:"hide-delay"})],sj.prototype,"hideDelay",2),sR([eD({type:Boolean,attribute:"hide-on-click"})],sj.prototype,"hideOnClick",2),sR([eB("wa-popup")],sj.prototype,"popup",2),sR([eO()],sj.prototype,"suppressed",2),sR([eO()],sj.prototype,"open",2),sj=sR([eM("gl-tooltip")],sj);let sB=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a","add-small":"\\ec7b","remove-small":"\\ec7c","worktree-small":"\\ec7d",worktree:"\\ec7e","screen-cut":"\\ec7f",ask:"\\ec80",openai:"\\ec81",claude:"\\ec82","open-in-window":"\\ec83","new-session":"\\ec84"}),sF=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147","diff-right":"\\f11b","diff-left":"\\f12e","accept-right":"\\f12f","accept-left":"\\f130","accept-all-right":"\\f131","accept-all-left":"\\f132",continue:"\\f148",skip:"\\f149",abort:"\\f14a",pause:"\\f14b","kanban-view":"\\f14c","filter-mixed":"\\f14d"});var sq=Object.defineProperty,sN=Object.getOwnPropertyDescriptor,sU=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sN(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sq(t,i,s),s};function sV(e,t=""){return M(Object.entries(e).map(([e,i])=>(function(e,t,i=""){return`:host([icon='${i}${e}'])::before { content: '${t}'; }`})(e,i,t)).join(""))}let sH=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};sH.styles=D`
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

		${sV(sB)}
		${sV(sF,"gl-")}

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
	`,sU([eD({reflect:!0})],sH.prototype,"icon",2),sU([eD({reflect:!0})],sH.prototype,"modifier",2),sU([eD({type:Number})],sH.prototype,"size",2),sU([eD({reflect:!0})],sH.prototype,"flip",2),sU([eD({reflect:!0})],sH.prototype,"rotate",2),sH=sU([eM("code-icon")],sH);var sK=Object.defineProperty,sW=Object.getOwnPropertyDescriptor,sG=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sW(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sK(t,i,s),s};let sZ=class extends lit_element_i{constructor(){super(...arguments),this.truncate=!1,this.overlay="tooltip",this.icon="",this.disabled=!1,this._modifiers=new ModifierKeysController(this)}get isAltKeyPressed(){return this._modifiers.altKey||this._modifiers.shiftKey}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}get effectiveLabel(){return this.isAltKeyPressed&&this.altLabel?this.altLabel:this.label}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${re()}] ${this.altLabel}`:this.label}render(){return this.label&&"none"!==this.overlay?"popover"===this.overlay?ew`<gl-popover hoist
				>${this.renderContent()}
				<div slot="content">${rs(this.label)}</div></gl-popover
			>`:ew`<gl-tooltip content="${this.effectiveTooltip}">${this.renderContent()}</gl-tooltip>`:this.renderContent()}renderContent(){let e="popover"===this.overlay?"anchor":e$,t=this.effectiveIcon,i=ew`<code-icon
				class="chip__icon"
				part="icon"
				icon="${t}"
				modifier="${("loading"===t?"spin":"")??e$}"
			></code-icon
			>${this.activeIcon?ew`<code-icon class="chip__icon-active" part="active-icon" icon="${this.activeIcon}"></code-icon>`:e$}`,o=this.effectiveHref,r=this.effectiveLabel;return o?ew`
				<a
					class="chip"
					part="base"
					?disabled=${this.disabled}
					href=${o}
					slot=${e}
					aria-label=${r??e$}
				>
					${i}<slot></slot><slot name="suffix"></slot>
				</a>
			`:ew`
			<button
				class="chip"
				part="base"
				type="button"
				?disabled=${this.disabled}
				slot=${e}
				aria-label=${r??e$}
			>
				${i}<slot></slot><slot name="suffix"></slot>
			</button>
		`}focus(e){this.defaultFocusEl.focus(e)}};sZ.styles=[rt,ri,D`
			:host {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				vertical-align: text-bottom;
				border-radius: 0.5rem;
				max-width: 100%;
				min-width: 0;
			}

			* {
				box-sizing: border-box;
			}

			:host(:focus-within) {
				${oO}
			}

			:host(:hover) {
				background-color: var(--vscode-toolbar-hoverBackground);
			}

			:host(:active) {
				background-color: var(--vscode-toolbar-activeBackground);
			}

			:host([disabled]) {
				pointer-events: none;
				opacity: 0.5;
			}

			.chip__icon-active {
				display: none;
			}
			.chip:hover:has(.chip__icon-active) .chip__icon,
			.chip:focus-visible:has(.chip__icon-active) .chip__icon {
				display: none;
			}
			.chip:hover .chip__icon-active,
			.chip:focus-visible .chip__icon-active {
				display: inline-flex;
			}

			.chip {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				gap: 0.2rem;
				/* vertical-align: middle; */
				color: inherit;
				max-width: 100%;
				min-width: 2rem;
				max-width: 100%;
				height: 2rem;
				color: inherit;
				padding: 0.2rem;
				text-decoration: none;
				cursor: pointer;
				background: none;
				border: none;
				font: inherit;
				overflow: hidden;
			}
			.chip:hover {
				text-decoration: none;
			}
			.chip:focus {
				outline: none;
			}

			a:not(.chip) {
				text-decoration: underline;
			}

			::slotted(*) {
				padding-inline-end: 0.2rem;
				vertical-align: middle;
				text-transform: var(--chip-text-transform, capitalize);
			}
			/* Drop the trailing inline padding for suffix-slotted icons — the asymmetric box
			   shifts the rotation axis off the glyph's visual center, so a spinning loading
			   codicon wobbles. Flex gap already spaces this from the preceding label. */
			::slotted([slot='suffix']) {
				padding-inline-end: 0;
			}

			:host([truncate]) {
				min-width: 0;
				max-width: 100%;
			}
			:host([truncate]) ::slotted(*) {
				display: inline-block;
				max-width: 100%;
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				vertical-align: middle;
			}
		`],sG([eD({type:Boolean,reflect:!0})],sZ.prototype,"truncate",2),sG([eD()],sZ.prototype,"href",2),sG([eD({attribute:"alt-href"})],sZ.prototype,"altHref",2),sG([eD()],sZ.prototype,"label",2),sG([eD({attribute:"alt-label"})],sZ.prototype,"altLabel",2),sG([eD()],sZ.prototype,"overlay",2),sG([eD()],sZ.prototype,"icon",2),sG([eD({attribute:"alt-icon"})],sZ.prototype,"altIcon",2),sG([eD()],sZ.prototype,"activeIcon",2),sG([eD({type:Boolean})],sZ.prototype,"disabled",2),sG([eB(".chip")],sZ.prototype,"defaultFocusEl",2),sZ=sG([eM("gl-action-chip")],sZ);var sY=Object.defineProperty,sQ=Object.getOwnPropertyDescriptor,sX=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sQ(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sY(t,i,s),s};let sJ=class extends lit_element_i{constructor(){super(...arguments),this.size=12,this.worktree=!1,this.chevron=!1,this.onKeydown=e=>{"button"===this.appearance&&("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.click())}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this.onKeydown),super.disconnectedCallback?.()}updated(e){e.has("appearance")&&("button"===this.appearance?(this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")):("button"===this.getAttribute("role")&&this.removeAttribute("role"),"0"===this.getAttribute("tabindex")&&this.removeAttribute("tabindex")))}render(){let e=this.icon??(this.worktree?"gl-worktree":"git-branch");return ew`<code-icon class="icon" icon="${e}" size="${this.size}"></code-icon
			><span class="label">${this.name??"<missing>"}</span>${this.chevron?ew`<code-icon class="chevron" icon="chevron-down" size="12"></code-icon>`:e$}`}};function s0(e,t){return ew`<gl-branch-name .name=${e} .size=${12} ?worktree=${t??!1}></gl-branch-name>`}sJ.styles=D`
		:host {
			display: inline-flex;
			align-items: baseline;
			min-width: 0;
			max-width: 100%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-inline: 0.2rem;
		}

		:host([appearance='pill']) {
			padding: 0.1rem 0.6rem;
			border-radius: 0.3rem;
			background-color: color-mix(
				in srgb,
				var(--gl-branch-color, var(--vscode-gitlens-graphScrollMarkerLocalBranchesColor, #4ec9b0)) 15%,
				transparent
			);
			color: var(--gl-branch-color, var(--vscode-gitlens-graphScrollMarkerLocalBranchesColor, #4ec9b0));
		}

		:host([appearance='button']) {
			padding: 0.2rem 0.4rem;
			border-radius: var(--gk-action-radius, 0.3rem);
			cursor: pointer;
			color: var(--gl-branch-color, var(--vscode-gitlens-graphScrollMarkerLocalBranchesColor, inherit));
			font-size: var(--gl-font-base);
		}

		:host([appearance='button']:hover) {
			background: var(--vscode-toolbar-hoverBackground);
		}

		:host([appearance='button']:focus-visible) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: 2px;
		}

		:host(:focus:not([appearance='button'])) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: 2px;
		}

		.icon {
			margin-right: 0.3rem;
			align-self: center;
		}

		.label {
			font-weight: 600;
			/* Block-level box (default span is inline → text-overflow is ignored). flex 1 1 auto
			   lets the label both grow into available space and shrink when the parent narrows;
			   min-width: 0 unlocks shrinking past intrinsic content size. */
			display: block;
			flex: 1 1 auto;
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.chevron {
			margin-left: 0.2rem;
			align-self: center;
			flex-shrink: 0;
		}
	`,sX([eD({reflect:!0})],sJ.prototype,"appearance",2),sX([eD({type:String})],sJ.prototype,"name",2),sX([eD({type:Number})],sJ.prototype,"size",2),sX([eD({type:Boolean})],sJ.prototype,"worktree",2),sX([eD({type:Boolean})],sJ.prototype,"chevron",2),sX([eD()],sJ.prototype,"icon",2),sJ=sX([eM("gl-branch-name")],sJ);var s1=Object.defineProperty,s2=Object.getOwnPropertyDescriptor,s3=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?s2(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&s1(t,i,s),s};let s4=class extends lit_element_i{constructor(){super(...arguments),this.hasChanges=!1,this.worktree=!1,this.isDefault=!1}render(){return ew`<gl-tooltip placement="bottom"
			>${this.renderIcon()}<span slot="content">${this.renderTooltipContent()}</span></gl-tooltip
		>`}renderIcon(){let e;if(!this.worktree&&(!this.status||"local"===this.status))return ew`<code-icon icon="git-branch"></code-icon>`;if("detached"===this.status)return ew`<code-icon icon="git-commit"></code-icon>`;let t="0.5";switch(this.status){case"diverged":e="var(--gl-icon-color-status-diverged)";break;case"behind":e="var(--gl-icon-color-status-behind)";break;case"ahead":e="var(--gl-icon-color-status-ahead)";break;case"missingUpstream":e="var(--gl-icon-color-status-missingUpstream)";break;case"upToDate":e=`var(--gl-icon-color-status-${this.hasChanges?"changes":"synced"})`;break;default:this.hasChanges?e="var(--gl-icon-color-status-changes)":(e="transparent",t="1")}return this.worktree&&!1===this.isDefault?ex`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="var(--gl-icon-color-foreground, #c5c5c5)"
					d="M13.5 4h.501v1.003h-.2a5.5 5.5 0 0 1 1.2.755V3.5l-.5-.5H13.5v1zm-4 0V3H7.713l-.852-.854L6.507 2H1.511l-.5.5v3.996L1 6.507v6.995l.5.5h6.227a5.528 5.528 0 0 1-.836-1H2V7.496h.01v-.489h4.486l.354-.146.858-.858h.014a5.51 5.51 0 0 1 1.477-1H7.5l-.353.147-.858.857H2.011V3H6.3l.853.853.353.146H9.5z"
				/>
				<path
					fill="${e}"
					stroke="var(--gl-icon-color-foreground, #c5c5c5)"
					stroke-width="${t}"
					d="M11.5 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"
				/>
				<path stroke="var(--gl-icon-color-foreground, #c5c5c5)" d="M11.5 13v3M11.5 1v6" />
			</svg>`:ex`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="${e}"
				stroke="var(--gl-icon-color-foreground, #c5c5c5)"
				stroke-width="${t}"
				d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
			/>
			<path
				fill="var(--gl-icon-color-foreground, #c5c5c5)"
				d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 5.95a2.5 2.5 0 1 0-1 0v4.1a2.5 2.5 0 1 0 1.165.04c.168-.38.383-.622.61-.78.327-.227.738-.32 1.214-.31H7c.387 0 .76.03 1.124.059l.026.002c.343.027.694.055 1.003.046.313-.01.661-.06.954-.248.29-.185.466-.466.544-.812a.756.756 0 0 1 .046-.055 2.5 2.5 0 1 0-1.03-.134c-.028.108-.07.14-.1.16-.063.04-.191.08-.446.089a8.783 8.783 0 0 1-.917-.045A14.886 14.886 0 0 0 7.005 8c-.61-.013-1.249.105-1.8.488-.07.05-.14.102-.205.159V5.95zm7-.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-9 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
			/>
		</svg>`}renderTooltipContent(){let e,t=this.branch?s0(this.branch):"Branch",i=this.upstream?s0(this.upstream):"its upstream";switch(this.status){case"diverged":e=ew`${t} has diverged from ${i}`;break;case"behind":e=ew`${t} is behind ${i}`;break;case"ahead":e=ew`${t} is ahead of ${i}`;break;case"missingUpstream":e=ew`${t} is missing its upstream ${i}`;break;case"upToDate":e=ew`${t} is up to date with ${i}`;break;case"local":e=ew`${t} is a local branch which hasn't been published`;break;case"remote":e=ew`${t} is a remote branch`;break;case"detached":e=ew`${t} is in a detached state, i.e. checked out to a commit or tag`;break;default:e=ew`${t} is in an unknown state`}return e=ew`<p>${e}</p>`,this.worktree?e=this.hasChanges?ew`${e}
					<p>Checked out in a worktree and has working (uncommitted) changes</p>`:ew`${e}
					<p>Checked out in a worktree</p>`:this.hasChanges&&(e=ew`${e}
				<p>Has working (uncommitted) changes</p>`),e}};s4.styles=D`
		:host {
			display: inline-flex;
			width: 16px;
			height: 16px;

			--gl-icon-color-foreground: var(--vscode-foreground, #c5c5c5);

			--gl-icon-color-status-synced: var(
				--gl-icon-color-foreground,
				var(--vscode-gitlens-decoration\\.branchUpToDateForegroundColor)
			);
			--gl-icon-color-status-diverged: var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor, #ff5);
			--gl-icon-color-status-behind: var(--vscode-gitlens-decorations\\.branchBehindForegroundColor, #f05);
			--gl-icon-color-status-ahead: var(--vscode-gitlens-decorations\\.branchAheadForegroundColor, #0f5);
			--gl-icon-color-status-missingUpstream: var(
				--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor,
				#c74e39
			);
			--gl-icon-color-status-changes: #1a79ff;
		}

		:host-context(.vscode-dark),
		:host-context(.vscode-high-contrast) {
			--gl-icon-color-foreground: #c5c5c5;
		}

		:host-context(.vscode-light),
		:host-context(.vscode-high-contrast-light) {
			--gl-icon-color-foreground: #424242;
		}

		p {
			margin: 0;
		}

		p + p {
			margin-top: 0.4rem;
		}

		svg {
			width: 100%;
			height: 100%;
			margin-top: -0.2rem;
			vertical-align: middle;
		}
	`,s3([eD({type:String})],s4.prototype,"branch",2),s3([eD({type:String})],s4.prototype,"status",2),s3([eD({type:Boolean})],s4.prototype,"hasChanges",2),s3([eD({type:String})],s4.prototype,"upstream",2),s3([eD({type:Boolean})],s4.prototype,"worktree",2),s3([eD({type:Boolean,attribute:"is-default"})],s4.prototype,"isDefault",2),s4=s3([eM("gl-branch-icon")],s4);let s5={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}},s6=D`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--gl-pill-padding, 0.2rem 0.5rem);
		border-radius: var(--gl-pill-border-radius, 0.5rem);
		font-size: var(--gl-pill-font-size, 1rem);
		font-weight: 500;
		line-height: var(--gl-pill-line-height, 1);
		min-height: var(--gl-pill-min-height, auto);
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: var(--gl-pill-padding, 0.2rem 0.4rem);
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var s8=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,s9=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?s7(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&s8(t,i,s),s};let ne=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","remove"]]]),nt=class extends lit_element_i{constructor(){super(...arguments),this.noTooltip=!1}render(){let e=ne.map(([e,t])=>this.renderStat(e,t));return this.noTooltip?ew`${e}<slot></slot>`:ew`<gl-tooltip>
			${e}<slot></slot>
			<div slot="content">${this.renderTooltipContent()}</div>
		</gl-tooltip>`}renderStat(e,t){let i=this[e];if(null==i)return e$;let[o,r]=t,s="icons"===this.symbol?ew`<code-icon class="icon" icon=${r}></code-icon>`:ew`<span class="symbol">${o}</span>`;return ew`<span class="stat ${e}" aria-label="${i} ${e}"
			><span class="label">${s}${i}</span></span
		>`}renderTooltipContent(){let e=this.added??0,t=this.modified??0,i=this.removed??0,o=e+t+i,r=[];e>0&&r.push(ew`<span class="added">${e} added</span>`),t>0&&(r.length&&r.push(", "),r.push(ew`<span class="modified">${t} modified</span>`)),i>0&&(r.length&&r.push(", "),r.push(ew`<span class="removed">${i} removed</span>`));let s=e>0||i>0?ew`${eH("file",o)} changed (${r})`:eH("file changed",o,{plural:"files changed",zero:"No files changed"}),a=[];null!=this.additions&&a.push(ew`<span class="added">${eH("addition",this.additions)}</span>`),null!=this.deletions&&(a.length&&a.push(", "),a.push(ew`<span class="removed">${eH("deletion",this.deletions)}</span>`));let c=[ew`<div>${s}</div>`];return a.length>0&&c.push(ew`<div>${a}</div>`),c}};nt.styles=D`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			white-space: nowrap;
			font-size: 1.1rem;
			font-weight: 600;
		}

		:host([appearance='pill']) {
			background-color: color-mix(
				in srgb,
				var(--vscode-sideBarSectionHeader-background) 90%,
				var(--vscode-foreground) 10%
			);
			border: 1px solid color-mix(in srgb, transparent 80%, var(--color-foreground));
			border-radius: 0.4rem;
			padding: var(--commit-stats-pill-padding, 0 0.8rem 0 0.6rem);
			white-space: nowrap;
			line-height: var(--commit-stats-pill-line-height, 1.5rem);
			min-height: var(--commit-stats-pill-line-height, 1.5rem);
		}

		:host-context(.vscode-light):host([appearance='pill']),
		:host-context(.vscode-high-contrast-light):host([appearance='pill']) {
			background-color: color-mix(
				in srgb,
				var(--vscode-sideBarSectionHeader-background) 98%,
				var(--vscode-foreground) 2%
			);
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.stat + .stat {
			margin-inline-start: 1rem;
		}

		:host([symbol='icons']) .stat + .stat {
			margin-inline-start: 0.8rem;
		}

		.added {
			color: var(--gl-stat-added);
		}
		.modified {
			color: var(--gl-stat-modified);
		}
		.removed {
			color: var(--gl-stat-removed);
		}

		.label {
			user-select: none;
		}

		.icon {
			--code-icon-size: 1.1rem;
			--code-icon-v-align: middle;
			margin-inline-end: 0.2rem;
			font-weight: 600;
		}

		/* Pill styles */
		:host([appearance='pill']) .stat {
			padding: 0;
		}

		:host([appearance='pill']) .stat + .stat {
			margin-inline-start: 0.8rem;
		}

		:host([appearance='pill']) .icon {
			margin-inline-end: 0.3rem;
		}
	`,s9([eD({type:Number})],nt.prototype,"added",2),s9([eD({type:Number})],nt.prototype,"modified",2),s9([eD({type:Number})],nt.prototype,"removed",2),s9([eD({type:Number})],nt.prototype,"additions",2),s9([eD({type:Number})],nt.prototype,"deletions",2),s9([eD()],nt.prototype,"symbol",2),s9([eD({reflect:!0})],nt.prototype,"appearance",2),s9([eD({type:Boolean,attribute:"no-tooltip"})],nt.prototype,"noTooltip",2),nt=s9([eM("commit-stats")],nt);var ni=Object.defineProperty,no=Object.getOwnPropertyDescriptor,nr=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?no(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&ni(t,i,s),s};let ns=class extends lit_element_i{constructor(){super(...arguments),this.showClean=!1,this.badge=!1,this.noTooltip=!1,this.hasConflicts=!1}render(){if(null!=this.pausedOpStatus)return this.renderPausedOp(this.pausedOpStatus);let e=this.added??0,t=this.modified??0,i=this.removed??0;if(this.dirty??e+t+i>0){let o=this.badge?ew`<span class="indicator-pill pill pill--outlined" aria-label="Working tree has changes">
						<code-icon icon="pencil"></code-icon>
					</span>`:ew`<commit-stats
						added=${e||e$}
						modified=${t||e$}
						removed=${i||e$}
						symbol="icons"
						appearance="pill"
						no-tooltip
					></commit-stats>`;if(this.noTooltip)return o;let r=e+t+i>0?ew`<commit-stats
						added=${e||e$}
						modified=${t||e$}
						removed=${i||e$}
						symbol="icons"
						appearance="pill"
						no-tooltip
					></commit-stats>`:"Working tree has changes";return ew`<gl-tooltip placement="bottom"
				>${o}<span slot="content">${r}</span></gl-tooltip
			>`}if(!this.showClean||null==this.dirty&&null==this.added&&null==this.modified&&null==this.removed)return e$;if(this.badge){let e=ew`<span class="indicator-pill pill pill--outlined" aria-label="No changes">
				<code-icon class="wip-clean-check" icon="check"></code-icon>
			</span>`;return this.noTooltip?e:ew`<gl-tooltip placement="bottom">${e}<span slot="content">No changes</span></gl-tooltip>`}let o=ew`<commit-stats class="indicator-pill" appearance="pill" no-tooltip aria-label="No changes">
			<code-icon class="wip-clean-check" icon="check"></code-icon>
		</commit-stats>`;return this.noTooltip?o:ew`<gl-tooltip placement="bottom">${o}<span slot="content">No changes</span></gl-tooltip>`}renderPausedOp(e){let t=s5[e.type],i=this.hasConflicts?eH("conflict",this.conflictsCount??1):t.label,o=ew`<span
			class="paused-op-badge${this.hasConflicts?" paused-op-badge--conflicts":""}"
			aria-label=${i}
		>
			<code-icon icon="warning"></code-icon>
			${i}
		</span>`;return this.noTooltip?o:ew`<gl-tooltip placement="bottom"
			>${o}<span slot="content">${t.label} in progress</span></gl-tooltip
		>`}};ns.styles=[s6,D`
			:host {
				display: contents;
			}

			.wip-clean-check {
				--code-icon-size: 1.1rem;
				--code-icon-v-align: middle;
				color: var(--gl-stat-added);
			}

			.indicator-pill {
				--gl-pill-border: color-mix(in srgb, transparent 80%, var(--color-foreground));
			}

			.indicator-pill.pill {
				gap: 0.2rem;
				text-transform: none;
				user-select: none;
			}

			.indicator-pill.pill code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
				font-weight: inherit !important;
			}

			.wip__tooltip {
				display: contents;
				vertical-align: middle;
			}

			.paused-op-badge {
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				padding: 0.1rem 0.4rem;
				border-radius: 0.3rem;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
				color: #000;
				font-size: 1.1rem;
				font-weight: 600;
				line-height: 2rem;
				white-space: nowrap;
			}

			.paused-op-badge--conflicts {
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor);
				color: #fff;
			}
		`],nr([eD({type:Number})],ns.prototype,"added",2),nr([eD({type:Number})],ns.prototype,"modified",2),nr([eD({type:Number})],ns.prototype,"removed",2),nr([eD({type:Boolean})],ns.prototype,"dirty",2),nr([eD({type:Boolean,attribute:"show-clean"})],ns.prototype,"showClean",2),nr([eD({type:Boolean})],ns.prototype,"badge",2),nr([eD({type:Boolean,attribute:"no-tooltip"})],ns.prototype,"noTooltip",2),nr([eD({attribute:!1})],ns.prototype,"pausedOpStatus",2),nr([eD({type:Boolean,attribute:"has-conflicts"})],ns.prototype,"hasConflicts",2),nr([eD({type:Number,attribute:"conflicts-count"})],ns.prototype,"conflictsCount",2),ns=nr([eM("gl-wip-stats")],ns);var nn=Object.defineProperty,na=Object.getOwnPropertyDescriptor,nl=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?na(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nn(t,i,s),s};let nc=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?ew`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:ew`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="sync"></code-icon></span>
			</span>`:e$:ew`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${o6(this.behind>0,()=>ew`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${o6(this.ahead>0,()=>ew`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${o6(this.working>0,()=>ew`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};nc.styles=[s6,D`
			.pill {
				gap: 0.2rem;
				text-transform: none;
				user-select: none;
			}

			.state {
				display: inline-flex;
				align-items: center;
				gap: 0.1rem;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
				font-weight: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],nl([eD({type:Number})],nc.prototype,"ahead",2),nl([eD({type:Number})],nc.prototype,"behind",2),nl([eD({type:Number})],nc.prototype,"working",2),nl([eD({type:Boolean,attribute:"always-show"})],nc.prototype,"alwaysShow",2),nl([eD({type:Boolean})],nc.prototype,"outlined",2),nl([eD({type:Boolean})],nc.prototype,"colorized",2),nl([eD({type:Boolean})],nc.prototype,"missingUpstream",2),nc=nl([eM("gl-tracking-pill")],nc);let nh="important",nd=` !${nh}`,np=0-nd.length;let CspStyleMapDirective=class CspStyleMapDirective extends directive_i{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `cspStyleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return eC}update(e,[t]){let i=e.element.style,o=this._previous??=new Map;for(let e of o.keys())null==t[e]&&(o.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(let e in t){let r=t[e];if(null==r)continue;let s="string"==typeof r&&r.endsWith(nd),a=s?r.slice(0,np):String(r);o.get(e)!==a&&(o.set(e,a),e.includes("-")||s?i.setProperty(e,a,s?nh:""):i[e]=a)}return eC}};let nu=eF(CspStyleMapDirective),ng={_argdown:["\\E003","#519aba"],_argdown_light:["\\E003","#498ba7"],_asm:["\\E004","#cc3e44"],_asm_light:["\\E004","#b8383d"],_audio:["\\E005","#a074c4"],_audio_light:["\\E005","#9068b0"],_babel:["\\E006","#cbcb41"],_babel_light:["\\E006","#b7b73b"],_bazel:["\\E007","#8dc149"],_bazel_1:["\\E007","#4d5a5e"],_bazel_1_light:["\\E007","#455155"],_bazel_light:["\\E007","#7fae42"],_bicep:["\\E008","#519aba"],_bicep_light:["\\E008","#498ba7"],_bower:["\\E009","#e37933"],_bower_light:["\\E009","#cc6d2e"],_bsl:["\\E00A","#cc3e44"],_bsl_light:["\\E00A","#b8383d"],_c:["\\E00C","#519aba"],_c_1:["\\E00C","#a074c4"],_c_1_light:["\\E00C","#9068b0"],_c_2:["\\E00C","#cbcb41"],_c_2_light:["\\E00C","#b7b73b"],_c_light:["\\E00C","#498ba7"],"_c-sharp":["\\E00B","#519aba"],"_c-sharp_light":["\\E00B","#498ba7"],_cake:["\\E00D","#cc3e44"],_cake_light:["\\E00D","#b8383d"],_cake_php:["\\E00E","#cc3e44"],_cake_php_light:["\\E00E","#b8383d"],_clock:["\\E012","#519aba"],_clock_1:["\\E012","#6d8086"],_clock_1_light:["\\E012","#627379"],_clock_light:["\\E012","#498ba7"],_clojure:["\\E013","#8dc149"],_clojure_1:["\\E013","#519aba"],_clojure_1_light:["\\E013","#498ba7"],_clojure_light:["\\E013","#7fae42"],"_code-climate":["\\E014","#8dc149"],"_code-climate_light":["\\E014","#7fae42"],"_code-search":["\\E015","#a074c4"],"_code-search_light":["\\E015","#9068b0"],_coffee:["\\E016","#cbcb41"],_coffee_light:["\\E016","#b7b73b"],_coldfusion:["\\E018","#519aba"],_coldfusion_light:["\\E018","#498ba7"],_config:["\\E019","#6d8086"],_config_light:["\\E019","#627379"],_cpp:["\\E01A","#519aba"],_cpp_1:["\\E01A","#a074c4"],_cpp_1_light:["\\E01A","#9068b0"],_cpp_2:["\\E01A","#cbcb41"],_cpp_2_light:["\\E01A","#b7b73b"],_cpp_light:["\\E01A","#498ba7"],_crystal:["\\E01B","#d4d7d6"],_crystal_embedded:["\\E01C","#d4d7d6"],_crystal_embedded_light:["\\E01C","#bfc2c1"],_crystal_light:["\\E01B","#bfc2c1"],_css:["\\E01D","#519aba"],_css_light:["\\E01D","#498ba7"],_csv:["\\E01E","#8dc149"],_csv_light:["\\E01E","#7fae42"],_cu:["\\E01F","#8dc149"],_cu_1:["\\E01F","#a074c4"],_cu_1_light:["\\E01F","#9068b0"],_cu_light:["\\E01F","#7fae42"],_d:["\\E020","#cc3e44"],_d_light:["\\E020","#b8383d"],_dart:["\\E021","#519aba"],_dart_light:["\\E021","#498ba7"],_db:["\\E022","#f55385"],_db_1:["\\E022","#519aba"],_db_1_light:["\\E022","#498ba7"],_db_light:["\\E022","#dd4b78"],_default:["\\E023","#d4d7d6"],_default_light:["\\E023","#bfc2c1"],_docker:["\\E025","#519aba"],_docker_1:["\\E025","#4d5a5e"],_docker_1_light:["\\E025","#455155"],_docker_2:["\\E025","#8dc149"],_docker_2_light:["\\E025","#7fae42"],_docker_3:["\\E025","#f55385"],_docker_3_light:["\\E025","#dd4b78"],_docker_light:["\\E025","#498ba7"],_ejs:["\\E027","#cbcb41"],_ejs_light:["\\E027","#b7b73b"],_elixir:["\\E028","#a074c4"],_elixir_light:["\\E028","#9068b0"],_elixir_script:["\\E029","#a074c4"],_elixir_script_light:["\\E029","#9068b0"],_elm:["\\E02A","#519aba"],_elm_light:["\\E02A","#498ba7"],_eslint:["\\E02C","#a074c4"],_eslint_1:["\\E02C","#4d5a5e"],_eslint_1_light:["\\E02C","#455155"],_eslint_light:["\\E02C","#9068b0"],_ethereum:["\\E02D","#519aba"],_ethereum_light:["\\E02D","#498ba7"],"_f-sharp":["\\E02E","#519aba"],"_f-sharp_light":["\\E02E","#498ba7"],_favicon:["\\E02F","#cbcb41"],_favicon_light:["\\E02F","#b7b73b"],_firebase:["\\E030","#e37933"],_firebase_light:["\\E030","#cc6d2e"],_firefox:["\\E031","#e37933"],_firefox_light:["\\E031","#cc6d2e"],_font:["\\E033","#cc3e44"],_font_light:["\\E033","#b8383d"],_git:["\\E034","#41535b"],_git_light:["\\E034","#3b4b52"],_github:["\\E037","#d4d7d6"],_github_light:["\\E037","#bfc2c1"],_gitlab:["\\E038","#e37933"],_gitlab_light:["\\E038","#cc6d2e"],_go:["\\E039","#519aba"],_go_light:["\\E039","#498ba7"],_go2:["\\E03A","#519aba"],_go2_light:["\\E03A","#498ba7"],_godot:["\\E03B","#519aba"],_godot_1:["\\E03B","#cc3e44"],_godot_1_light:["\\E03B","#b8383d"],_godot_2:["\\E03B","#cbcb41"],_godot_2_light:["\\E03B","#b7b73b"],_godot_3:["\\E03B","#a074c4"],_godot_3_light:["\\E03B","#9068b0"],_godot_light:["\\E03B","#498ba7"],_gradle:["\\E03C","#519aba"],_gradle_light:["\\E03C","#498ba7"],_grails:["\\E03D","#8dc149"],_grails_light:["\\E03D","#7fae42"],_graphql:["\\E03E","#f55385"],_graphql_light:["\\E03E","#dd4b78"],_grunt:["\\E03F","#e37933"],_grunt_light:["\\E03F","#cc6d2e"],_gulp:["\\E040","#cc3e44"],_gulp_light:["\\E040","#b8383d"],_hacklang:["\\E041","#e37933"],_hacklang_light:["\\E041","#cc6d2e"],_haml:["\\E042","#cc3e44"],_haml_light:["\\E042","#b8383d"],_happenings:["\\E043","#519aba"],_happenings_light:["\\E043","#498ba7"],_haskell:["\\E044","#a074c4"],_haskell_light:["\\E044","#9068b0"],_haxe:["\\E045","#e37933"],_haxe_1:["\\E045","#cbcb41"],_haxe_1_light:["\\E045","#b7b73b"],_haxe_2:["\\E045","#519aba"],_haxe_2_light:["\\E045","#498ba7"],_haxe_3:["\\E045","#a074c4"],_haxe_3_light:["\\E045","#9068b0"],_haxe_light:["\\E045","#cc6d2e"],_heroku:["\\E046","#a074c4"],_heroku_light:["\\E046","#9068b0"],_hex:["\\E047","#cc3e44"],_hex_light:["\\E047","#b8383d"],_html:["\\E048","#519aba"],_html_1:["\\E048","#8dc149"],_html_1_light:["\\E048","#7fae42"],_html_2:["\\E048","#cbcb41"],_html_2_light:["\\E048","#b7b73b"],_html_3:["\\E048","#e37933"],_html_3_light:["\\E048","#cc6d2e"],_html_erb:["\\E049","#cc3e44"],_html_erb_light:["\\E049","#b8383d"],_html_light:["\\E048","#498ba7"],_ignored:["\\E04A","#41535b"],_ignored_light:["\\E04A","#3b4b52"],_illustrator:["\\E04B","#cbcb41"],_illustrator_light:["\\E04B","#b7b73b"],_image:["\\E04C","#a074c4"],_image_light:["\\E04C","#9068b0"],_info:["\\E04D","#519aba"],_info_light:["\\E04D","#498ba7"],_ionic:["\\E04E","#519aba"],_ionic_light:["\\E04E","#498ba7"],_jade:["\\E04F","#cc3e44"],_jade_light:["\\E04F","#b8383d"],_java:["\\E050","#cc3e44"],_java_1:["\\E050","#519aba"],_java_1_light:["\\E050","#498ba7"],_java_light:["\\E050","#b8383d"],_javascript:["\\E051","#cbcb41"],_javascript_1:["\\E051","#e37933"],_javascript_1_light:["\\E051","#cc6d2e"],_javascript_2:["\\E051","#519aba"],_javascript_2_light:["\\E051","#498ba7"],_javascript_light:["\\E051","#b7b73b"],_jenkins:["\\E052","#cc3e44"],_jenkins_light:["\\E052","#b8383d"],_jinja:["\\E053","#cc3e44"],_jinja_light:["\\E053","#b8383d"],_json:["\\E055","#cbcb41"],_json_1:["\\E055","#8dc149"],_json_1_light:["\\E055","#7fae42"],_json_light:["\\E055","#b7b73b"],_julia:["\\E056","#a074c4"],_julia_light:["\\E056","#9068b0"],_karma:["\\E057","#8dc149"],_karma_light:["\\E057","#7fae42"],_kotlin:["\\E058","#e37933"],_kotlin_light:["\\E058","#cc6d2e"],_less:["\\E059","#519aba"],_less_light:["\\E059","#498ba7"],_license:["\\E05A","#cbcb41"],_license_1:["\\E05A","#e37933"],_license_1_light:["\\E05A","#cc6d2e"],_license_2:["\\E05A","#cc3e44"],_license_2_light:["\\E05A","#b8383d"],_license_light:["\\E05A","#b7b73b"],_liquid:["\\E05B","#8dc149"],_liquid_light:["\\E05B","#7fae42"],_livescript:["\\E05C","#519aba"],_livescript_light:["\\E05C","#498ba7"],_lock:["\\E05D","#8dc149"],_lock_light:["\\E05D","#7fae42"],_lua:["\\E05E","#519aba"],_lua_light:["\\E05E","#498ba7"],_makefile:["\\E05F","#e37933"],_makefile_1:["\\E05F","#a074c4"],_makefile_1_light:["\\E05F","#9068b0"],_makefile_2:["\\E05F","#6d8086"],_makefile_2_light:["\\E05F","#627379"],_makefile_3:["\\E05F","#519aba"],_makefile_3_light:["\\E05F","#498ba7"],_makefile_light:["\\E05F","#cc6d2e"],_markdown:["\\E060","#519aba"],_markdown_light:["\\E060","#498ba7"],_maven:["\\E061","#cc3e44"],_maven_light:["\\E061","#b8383d"],_mdo:["\\E062","#cc3e44"],_mdo_light:["\\E062","#b8383d"],_mustache:["\\E063","#e37933"],_mustache_light:["\\E063","#cc6d2e"],_nim:["\\E065","#cbcb41"],_nim_light:["\\E065","#b7b73b"],_notebook:["\\E066","#519aba"],_notebook_light:["\\E066","#498ba7"],_npm:["\\E067","#41535b"],_npm_1:["\\E067","#cc3e44"],_npm_1_light:["\\E067","#b8383d"],_npm_ignored:["\\E068","#41535b"],_npm_ignored_light:["\\E068","#3b4b52"],_npm_light:["\\E067","#3b4b52"],_nunjucks:["\\E069","#8dc149"],_nunjucks_light:["\\E069","#7fae42"],_ocaml:["\\E06A","#e37933"],_ocaml_light:["\\E06A","#cc6d2e"],_odata:["\\E06B","#e37933"],_odata_light:["\\E06B","#cc6d2e"],_pddl:["\\E06C","#a074c4"],_pddl_light:["\\E06C","#9068b0"],_pdf:["\\E06D","#cc3e44"],_pdf_light:["\\E06D","#b8383d"],_perl:["\\E06E","#519aba"],_perl_light:["\\E06E","#498ba7"],_photoshop:["\\E06F","#519aba"],_photoshop_light:["\\E06F","#498ba7"],_php:["\\E070","#a074c4"],_php_light:["\\E070","#9068b0"],_pipeline:["\\E071","#e37933"],_pipeline_light:["\\E071","#cc6d2e"],_plan:["\\E072","#8dc149"],_plan_light:["\\E072","#7fae42"],_platformio:["\\E073","#e37933"],_platformio_light:["\\E073","#cc6d2e"],_powershell:["\\E074","#519aba"],_powershell_light:["\\E074","#498ba7"],_prisma:["\\E075","#519aba"],_prisma_light:["\\E075","#498ba7"],_prolog:["\\E077","#e37933"],_prolog_light:["\\E077","#cc6d2e"],_pug:["\\E078","#cc3e44"],_pug_light:["\\E078","#b8383d"],_puppet:["\\E079","#cbcb41"],_puppet_light:["\\E079","#b7b73b"],_purescript:["\\E07A","#d4d7d6"],_purescript_light:["\\E07A","#bfc2c1"],_python:["\\E07B","#519aba"],_python_light:["\\E07B","#498ba7"],_R:["\\E001","#519aba"],_R_light:["\\E001","#498ba7"],_react:["\\E07D","#519aba"],_react_1:["\\E07D","#e37933"],_react_1_light:["\\E07D","#cc6d2e"],_react_light:["\\E07D","#498ba7"],_reasonml:["\\E07E","#cc3e44"],_reasonml_light:["\\E07E","#b8383d"],_rescript:["\\E07F","#cc3e44"],_rescript_1:["\\E07F","#f55385"],_rescript_1_light:["\\E07F","#dd4b78"],_rescript_light:["\\E07F","#b8383d"],_rollup:["\\E080","#cc3e44"],_rollup_light:["\\E080","#b8383d"],_ruby:["\\E081","#cc3e44"],_ruby_light:["\\E081","#b8383d"],_rust:["\\E082","#6d8086"],_rust_light:["\\E082","#627379"],_salesforce:["\\E083","#519aba"],_salesforce_light:["\\E083","#498ba7"],_sass:["\\E084","#f55385"],_sass_light:["\\E084","#dd4b78"],_sbt:["\\E085","#519aba"],_sbt_light:["\\E085","#498ba7"],_scala:["\\E086","#cc3e44"],_scala_light:["\\E086","#b8383d"],_shell:["\\E089","#8dc149"],_shell_light:["\\E089","#7fae42"],_slim:["\\E08A","#e37933"],_slim_light:["\\E08A","#cc6d2e"],_smarty:["\\E08B","#cbcb41"],_smarty_light:["\\E08B","#b7b73b"],_spring:["\\E08C","#8dc149"],_spring_light:["\\E08C","#7fae42"],_stylelint:["\\E08D","#d4d7d6"],_stylelint_1:["\\E08D","#4d5a5e"],_stylelint_1_light:["\\E08D","#455155"],_stylelint_light:["\\E08D","#bfc2c1"],_stylus:["\\E08E","#8dc149"],_stylus_light:["\\E08E","#7fae42"],_sublime:["\\E08F","#e37933"],_sublime_light:["\\E08F","#cc6d2e"],_svelte:["\\E090","#cc3e44"],_svelte_light:["\\E090","#b8383d"],_svg:["\\E091","#a074c4"],_svg_1:["\\E091","#519aba"],_svg_1_light:["\\E091","#498ba7"],_svg_light:["\\E091","#9068b0"],_swift:["\\E092","#e37933"],_swift_light:["\\E092","#cc6d2e"],_terraform:["\\E093","#a074c4"],_terraform_light:["\\E093","#9068b0"],_tex:["\\E094","#519aba"],_tex_1:["\\E094","#cbcb41"],_tex_1_light:["\\E094","#b7b73b"],_tex_2:["\\E094","#e37933"],_tex_2_light:["\\E094","#cc6d2e"],_tex_3:["\\E094","#d4d7d6"],_tex_3_light:["\\E094","#bfc2c1"],_tex_light:["\\E094","#498ba7"],_todo:["\\E096",""],_tsconfig:["\\E097","#519aba"],_tsconfig_light:["\\E097","#498ba7"],_twig:["\\E098","#8dc149"],_twig_light:["\\E098","#7fae42"],_typescript:["\\E099","#519aba"],_typescript_1:["\\E099","#e37933"],_typescript_1_light:["\\E099","#cc6d2e"],_typescript_light:["\\E099","#498ba7"],_vala:["\\E09A","#6d8086"],_vala_light:["\\E09A","#627379"],_video:["\\E09B","#f55385"],_video_light:["\\E09B","#dd4b78"],_vite:["\\E09C","#cbcb41"],_vite_light:["\\E09C","#b7b73b"],_vue:["\\E09D","#8dc149"],_vue_light:["\\E09D","#7fae42"],_wasm:["\\E09E","#a074c4"],_wasm_light:["\\E09E","#9068b0"],_wat:["\\E09F","#a074c4"],_wat_light:["\\E09F","#9068b0"],_webpack:["\\E0A0","#519aba"],_webpack_light:["\\E0A0","#498ba7"],_wgt:["\\E0A1","#519aba"],_wgt_light:["\\E0A1","#498ba7"],_windows:["\\E0A2","#519aba"],_windows_light:["\\E0A2","#498ba7"],_word:["\\E0A3","#519aba"],_word_light:["\\E0A3","#498ba7"],_xls:["\\E0A4","#8dc149"],_xls_light:["\\E0A4","#7fae42"],_xml:["\\E0A5","#e37933"],_xml_light:["\\E0A5","#cc6d2e"],_yarn:["\\E0A6","#519aba"],_yarn_light:["\\E0A6","#498ba7"],_yml:["\\E0A7","#a074c4"],_yml_light:["\\E0A7","#9068b0"],_zig:["\\E0A8","#e37933"],_zig_light:["\\E0A8","#cc6d2e"],_zip:["\\E0A9","#cc3e44"],_zip_1:["\\E0A9","#6d8086"],_zip_1_light:["\\E0A9","#627379"],_zip_light:["\\E0A9","#b8383d"]},nm={"babel.config.cjs":"_babel","babel.config.js":"_babel","babel.config.json":"_babel","bower.json":"_bower",build:"_bazel","build.bazel":"_bazel",changelog:"_clock","changelog.md":"_clock","changelog.txt":"_clock",changes:"_clock","changes.md":"_clock","changes.txt":"_clock","cmakelists.txt":"_makefile_3",compiling:"_license_1","compiling.md":"_license_1","compiling.txt":"_license_1",contributing:"_license_2","contributing.md":"_license_2","contributing.txt":"_license_2",copying:"_license","copying.md":"_license","copying.txt":"_license","docker-healthcheck":"_docker_2","eslint.config.js":"_eslint","firebase.json":"_firebase",geckodriver:"_firefox","gruntfile.babel.js":"_grunt","gruntfile.coffee":"_grunt","gruntfile.js":"_grunt",gulpfile:"_gulp","gulpfile.js":"_gulp","ionic.config.json":"_ionic","ionic.project":"_ionic",jenkinsfile:"_jenkins","karma.conf.cjs":"_karma","karma.conf.coffee":"_karma","karma.conf.js":"_karma","karma.conf.mjs":"_karma",licence:"_license","licence.md":"_license","licence.txt":"_license",license:"_license","license.md":"_license","license.txt":"_license","mime.types":"_config",mix:"_hex",mvnw:"_maven","npm-debug.log":"_npm_ignored",omakefile:"_makefile_2","platformio.ini":"_platformio","pom.xml":"_maven",procfile:"_heroku",qmakefile:"_makefile_1",readme:"_info","readme.md":"_info","readme.txt":"_info","rollup.config.js":"_rollup","sass-lint.yml":"_sass","stylelint.config.cjs":"_stylelint","stylelint.config.js":"_stylelint","stylelint.config.mjs":"_stylelint","swagger.json":"_json_1","swagger.yaml":"_json_1","swagger.yml":"_json_1",todo:"_todo","todo.md":"_todo","todo.txt":"_todo","tsconfig.json":"_tsconfig",version:"_clock","version.md":"_clock","version.txt":"_clock","vite.config.cjs":"_vite","vite.config.cts":"_vite","vite.config.js":"_vite","vite.config.mjs":"_vite","vite.config.mts":"_vite","vite.config.ts":"_vite","webpack.common.cjs":"_webpack","webpack.common.js":"_webpack","webpack.common.mjs":"_webpack","webpack.common.ts":"_webpack","webpack.config.build.cjs":"_webpack","webpack.config.build.js":"_webpack","webpack.config.build.mjs":"_webpack","webpack.config.build.ts":"_webpack","webpack.config.cjs":"_webpack","webpack.config.js":"_webpack","webpack.config.mjs":"_webpack","webpack.config.ts":"_webpack","webpack.dev.cjs":"_webpack","webpack.dev.js":"_webpack","webpack.dev.mjs":"_webpack","webpack.dev.ts":"_webpack","webpack.prod.cjs":"_webpack","webpack.prod.js":"_webpack","webpack.prod.mjs":"_webpack","webpack.prod.ts":"_webpack",workspace:"_bazel","workspace.bazel":"_bazel","yarn.clean":"_yarn","yarn.lock":"_yarn"},nf={"3dm":"_svg_1","3ds":"_svg_1",ad:"_argdown",ai:"_illustrator",apex:"_salesforce",argdown:"_argdown",article:"_go",asax:"_html_2",ascx:"_html_1",asm:"_asm",aspx:"_html",avi:"_video",avif:"_image",babelrc:"_babel","babelrc.cjs":"_babel","babelrc.js":"_babel",bazel:"_bazel",bazelignore:"_bazel",bazelrc:"_bazel_1",bazelversion:"_bazel",bicep:"_bicep",bowerrc:"_bower",bsl:"_bsl",build:"_bazel",bzl:"_bazel",cake:"_cake",cer:"_lock",cert:"_lock",cfc:"_coldfusion",cfm:"_coldfusion","cjs.map":"_javascript",cjsx:"_react",class:"_java_1",classpath:"_java",cls:"_salesforce",cmx:"_ocaml",cmxa:"_ocaml","codeclimate.yml":"_code-climate",component:"_html_3",config:"_config",cr:"_crystal",crt:"_lock",cson:"_json","css.map":"_css",csv:"_csv",ctp:"_cake_php",cuh:"_cu_1",d:"_d",dae:"_svg_1",direnv:"_config",doc:"_word",dockerignore:"_docker_1",docx:"_word",ds_store:"_ignored",dtx:"_tex_2",ecr:"_crystal_embedded",edn:"_clojure_1",ejs:"_ejs",elm:"_elm",eot:"_font",epp:"_puppet",erb:"_html_erb","erb.html":"_html_erb",es:"_javascript",es5:"_javascript",es7:"_javascript",eslintignore:"_eslint_1",eslintrc:"_eslint","eslintrc.cjs":"_eslint","eslintrc.js":"_eslint","eslintrc.json":"_eslint","eslintrc.yaml":"_eslint","eslintrc.yml":"_eslint",ex:"_elixir",exs:"_elixir_script",firebaserc:"_firebase",flac:"_audio",gd:"_godot",gif:"_image",gitattributes:"_git",gitconfig:"_git","github-issues":"_github",gitkeep:"_git","gitlab-ci.yml":"_gitlab",gitmodules:"_git",godot:"_godot_1",gql:"_graphql",gradle:"_gradle",graphql:"_graphql",graphqls:"_graphql",gsp:"_grails",h:"_c_1","h++":"_cpp_1",hack:"_hacklang",haml:"_haml",happenings:"_happenings",hh:"_cpp_1",hpp:"_cpp_1",hs:"_haskell",htaccess:"_config","html.erb":"_html_erb",hu:"_cu_1",hx:"_haxe",hxml:"_haxe_3",hxp:"_haxe_2",hxs:"_haxe_1",hxx:"_cpp_1",ico:"_favicon",ins:"_tex_3",ipynb:"_notebook",jade:"_jade",jar:"_zip",jinja:"_jinja",jinja2:"_jinja",jpeg:"_image",jpg:"_image","js.map":"_javascript",jscsrc:"_javascript_2",jshintrc:"_javascript_2",key:"_lock",kt:"_kotlin",kts:"_kotlin",lhs:"_haskell",liquid:"_liquid",litcoffee:"_coffee",ls:"_livescript",master:"_html_2",mdo:"_mdo","mjs.map":"_javascript",ml:"_ocaml",mli:"_ocaml",mov:"_video",mp3:"_audio",mp4:"_video",mpg:"_video",mustache:"_mustache",nim:"_nim",nims:"_nim",nj:"_nunjucks",njk:"_nunjucks",njs:"_nunjucks","npm-debug.log":"_npm",npmignore:"_npm_1",npmrc:"_npm_1",nunj:"_nunjucks",nunjs:"_nunjucks",nunjucks:"_nunjucks",obj:"_svg_1",odata:"_odata",ogg:"_audio",ogv:"_video",otf:"_font",pddl:"_pddl",pdf:"_pdf",pem:"_lock","php.inc":"_php",pipeline:"_pipeline",plan:"_plan",png:"_image",pp:"_puppet",prisma:"_prisma",pro:"_prolog",psd:"_photoshop",purs:"_purescript",pxm:"_image",r:"_R",re:"_reasonml",res:"_rescript",resi:"_rescript_1",rmd:"_R",s:"_asm",sass:"_sass",sbt:"_sbt",scala:"_scala",slang:"_crystal_embedded",slide:"_go",slim:"_slim",slugignore:"_config","smarty.tpl":"_smarty",sol:"_ethereum",soql:"_db_1","spec.cjs":"_javascript_1","spec.js":"_javascript_1","spec.jsx":"_react_1","spec.mjs":"_javascript_1","spec.ts":"_typescript_1","spec.tsx":"_react_1",springbeans:"_spring",sss:"_css",stache:"_mustache",static:"_config",stl:"_svg_1",styl:"_stylus",stylelintignore:"_stylelint_1",stylelintrc:"_stylelint","stylelintrc.js":"_stylelint","stylelintrc.json":"_stylelint","stylelintrc.yaml":"_stylelint","stylelintrc.yml":"_stylelint","sublime-project":"_sublime","sublime-workspace":"_sublime",svelte:"_svelte",svg:"_svg",svgx:"_image","test.cjs":"_javascript_1","test.js":"_javascript_1","test.jsx":"_react_1","test.mjs":"_javascript_1","test.ts":"_typescript_1","test.tsx":"_react_1",tf:"_terraform","tf.json":"_terraform",tfvars:"_terraform","tfvars.json":"_terraform",tiff:"_image",tmp:"_clock_1",toml:"_config",tpl:"_smarty",tres:"_godot_2",tscn:"_godot_3",ttf:"_font",twig:"_twig",vala:"_vala",vapi:"_vala",vue:"_vue",wasm:"_wasm",wat:"_wat",wav:"_audio",webm:"_video",webp:"_image",wgt:"_wgt",woff:"_font",woff2:"_font",workspace:"_bazel",xls:"_xls",xlsx:"_xls",zig:"_zig",zip:"_zip_1"},nb={argdown:"_argdown",bat:"_windows",bicep:"_bicep",blade:"_php",c:"_c",chatagent:"_markdown",clojure:"_clojure",coffeescript:"_coffee",cpp:"_cpp",csharp:"_c-sharp",css:"_css","cuda-cpp":"_cu",dart:"_dart","django-html":"_html_3",dockercompose:"_docker_3",dockerfile:"_docker",dotenv:"_config",elixir:"_elixir",elm:"_elm",erb:"_html_erb",fsharp:"_f-sharp","git-commit":"_git","github-issues":"_github",go:"_go2",godot:"_godot",gradle:"_gradle",groovy:"_grails",haml:"_haml",handlebars:"_mustache",haskell:"_haskell",haxe:"_haxe",html:"_html_3",ignore:"_git",instructions:"_markdown",jade:"_pug",java:"_java",javascript:"_javascript",javascriptreact:"_react",jinja:"_jinja",json:"_json",jsonc:"_json",jsonl:"_json",julia:"_julia",kotlin:"_kotlin",latex:"_tex",less:"_less",lua:"_lua",makefile:"_makefile",markdown:"_markdown",mustache:"_mustache",nunjucks:"_nunjucks","objective-c":"_c_2","objective-cpp":"_cpp_2",ocaml:"_ocaml",perl:"_perl",php:"_php",postcss:"_css",powershell:"_powershell",prompt:"_markdown",properties:"_config",python:"_python",r:"_R",razor:"_html",rescript:"_rescript",ruby:"_ruby",rust:"_rust",sass:"_sass",scss:"_sass","search-result":"_code-search",shellscript:"_shell",skill:"_markdown",sql:"_db",stylus:"_stylus",swift:"_swift",terraform:"_terraform",tex:"_tex_1",todo:"_todo",typescript:"_typescript",typescriptreact:"_react",vala:"_vala",vue:"_vue",xml:"_xml",yaml:"_yml"},nv={"babel.config.cjs":"_babel_light","babel.config.js":"_babel_light","babel.config.json":"_babel_light","bower.json":"_bower_light",build:"_bazel_light","build.bazel":"_bazel_light",changelog:"_clock_light","changelog.md":"_clock_light","changelog.txt":"_clock_light",changes:"_clock_light","changes.md":"_clock_light","changes.txt":"_clock_light","cmakelists.txt":"_makefile_3_light",compiling:"_license_1_light","compiling.md":"_license_1_light","compiling.txt":"_license_1_light",contributing:"_license_2_light","contributing.md":"_license_2_light","contributing.txt":"_license_2_light",copying:"_license_light","copying.md":"_license_light","copying.txt":"_license_light","docker-healthcheck":"_docker_2_light","eslint.config.js":"_eslint_light","firebase.json":"_firebase_light",geckodriver:"_firefox_light","gruntfile.babel.js":"_grunt_light","gruntfile.coffee":"_grunt_light","gruntfile.js":"_grunt_light",gulpfile:"_gulp_light","gulpfile.js":"_gulp_light","ionic.config.json":"_ionic_light","ionic.project":"_ionic_light",jenkinsfile:"_jenkins_light","karma.conf.cjs":"_karma_light","karma.conf.coffee":"_karma_light","karma.conf.js":"_karma_light","karma.conf.mjs":"_karma_light",licence:"_license_light","licence.md":"_license_light","licence.txt":"_license_light",license:"_license_light","license.md":"_license_light","license.txt":"_license_light","mime.types":"_config_light",mix:"_hex_light",mvnw:"_maven_light","npm-debug.log":"_npm_ignored_light",omakefile:"_makefile_2_light","platformio.ini":"_platformio_light","pom.xml":"_maven_light",procfile:"_heroku_light",qmakefile:"_makefile_1_light",readme:"_info_light","readme.md":"_info_light","readme.txt":"_info_light","rollup.config.js":"_rollup_light","sass-lint.yml":"_sass_light","stylelint.config.cjs":"_stylelint_light","stylelint.config.js":"_stylelint_light","stylelint.config.mjs":"_stylelint_light","swagger.json":"_json_1_light","swagger.yaml":"_json_1_light","swagger.yml":"_json_1_light","tsconfig.json":"_tsconfig_light",version:"_clock_light","version.md":"_clock_light","version.txt":"_clock_light","vite.config.cjs":"_vite_light","vite.config.cts":"_vite_light","vite.config.js":"_vite_light","vite.config.mjs":"_vite_light","vite.config.mts":"_vite_light","vite.config.ts":"_vite_light","webpack.common.cjs":"_webpack_light","webpack.common.js":"_webpack_light","webpack.common.mjs":"_webpack_light","webpack.common.ts":"_webpack_light","webpack.config.build.cjs":"_webpack_light","webpack.config.build.js":"_webpack_light","webpack.config.build.mjs":"_webpack_light","webpack.config.build.ts":"_webpack_light","webpack.config.cjs":"_webpack_light","webpack.config.js":"_webpack_light","webpack.config.mjs":"_webpack_light","webpack.config.ts":"_webpack_light","webpack.dev.cjs":"_webpack_light","webpack.dev.js":"_webpack_light","webpack.dev.mjs":"_webpack_light","webpack.dev.ts":"_webpack_light","webpack.prod.cjs":"_webpack_light","webpack.prod.js":"_webpack_light","webpack.prod.mjs":"_webpack_light","webpack.prod.ts":"_webpack_light",workspace:"_bazel_light","workspace.bazel":"_bazel_light","yarn.clean":"_yarn_light","yarn.lock":"_yarn_light"},n_={"3dm":"_svg_1_light","3ds":"_svg_1_light",ad:"_argdown_light",ai:"_illustrator_light",apex:"_salesforce_light",argdown:"_argdown_light",article:"_go_light",asax:"_html_2_light",ascx:"_html_1_light",asm:"_asm_light",aspx:"_html_light",avi:"_video_light",avif:"_image_light",babelrc:"_babel_light","babelrc.cjs":"_babel_light","babelrc.js":"_babel_light",bazel:"_bazel_light",bazelignore:"_bazel_light",bazelrc:"_bazel_1_light",bazelversion:"_bazel_light",bicep:"_bicep_light",bowerrc:"_bower_light",bsl:"_bsl_light",build:"_bazel_light",bzl:"_bazel_light",cake:"_cake_light",cer:"_lock_light",cert:"_lock_light",cfc:"_coldfusion_light",cfm:"_coldfusion_light","cjs.map":"_javascript_light",cjsx:"_react_light",class:"_java_1_light",classpath:"_java_light",cls:"_salesforce_light",cmx:"_ocaml_light",cmxa:"_ocaml_light","codeclimate.yml":"_code-climate_light",component:"_html_3_light",config:"_config_light",cr:"_crystal_light",crt:"_lock_light",cson:"_json_light","css.map":"_css_light",csv:"_csv_light",ctp:"_cake_php_light",cuh:"_cu_1_light",d:"_d_light",dae:"_svg_1_light",direnv:"_config_light",doc:"_word_light",dockerignore:"_docker_1_light",docx:"_word_light",ds_store:"_ignored_light",dtx:"_tex_2_light",ecr:"_crystal_embedded_light",edn:"_clojure_1_light",ejs:"_ejs_light",elm:"_elm_light",eot:"_font_light",epp:"_puppet_light",erb:"_html_erb_light","erb.html":"_html_erb_light",es:"_javascript_light",es5:"_javascript_light",es7:"_javascript_light",eslintignore:"_eslint_1_light",eslintrc:"_eslint_light","eslintrc.cjs":"_eslint_light","eslintrc.js":"_eslint_light","eslintrc.json":"_eslint_light","eslintrc.yaml":"_eslint_light","eslintrc.yml":"_eslint_light",ex:"_elixir_light",exs:"_elixir_script_light",firebaserc:"_firebase_light",flac:"_audio_light",gd:"_godot_light",gif:"_image_light",gitattributes:"_git_light",gitconfig:"_git_light","github-issues":"_github_light",gitkeep:"_git_light","gitlab-ci.yml":"_gitlab_light",gitmodules:"_git_light",godot:"_godot_1_light",gql:"_graphql_light",gradle:"_gradle_light",graphql:"_graphql_light",graphqls:"_graphql_light",gsp:"_grails_light",h:"_c_1_light","h++":"_cpp_1_light",hack:"_hacklang_light",haml:"_haml_light",happenings:"_happenings_light",hh:"_cpp_1_light",hpp:"_cpp_1_light",hs:"_haskell_light",htaccess:"_config_light","html.erb":"_html_erb_light",hu:"_cu_1_light",hx:"_haxe_light",hxml:"_haxe_3_light",hxp:"_haxe_2_light",hxs:"_haxe_1_light",hxx:"_cpp_1_light",ico:"_favicon_light",ins:"_tex_3_light",ipynb:"_notebook_light",jade:"_jade_light",jar:"_zip_light",jinja:"_jinja_light",jinja2:"_jinja_light",jpeg:"_image_light",jpg:"_image_light","js.map":"_javascript_light",jscsrc:"_javascript_2_light",jshintrc:"_javascript_2_light",key:"_lock_light",kt:"_kotlin_light",kts:"_kotlin_light",lhs:"_haskell_light",liquid:"_liquid_light",litcoffee:"_coffee_light",ls:"_livescript_light",master:"_html_2_light",mdo:"_mdo_light","mjs.map":"_javascript_light",ml:"_ocaml_light",mli:"_ocaml_light",mov:"_video_light",mp3:"_audio_light",mp4:"_video_light",mpg:"_video_light",mustache:"_mustache_light",nim:"_nim_light",nims:"_nim_light",nj:"_nunjucks_light",njk:"_nunjucks_light",njs:"_nunjucks_light","npm-debug.log":"_npm_light",npmignore:"_npm_1_light",npmrc:"_npm_1_light",nunj:"_nunjucks_light",nunjs:"_nunjucks_light",nunjucks:"_nunjucks_light",obj:"_svg_1_light",odata:"_odata_light",ogg:"_audio_light",ogv:"_video_light",otf:"_font_light",pddl:"_pddl_light",pdf:"_pdf_light",pem:"_lock_light","php.inc":"_php_light",pipeline:"_pipeline_light",plan:"_plan_light",png:"_image_light",pp:"_puppet_light",prisma:"_prisma_light",pro:"_prolog_light",psd:"_photoshop_light",purs:"_purescript_light",pxm:"_image_light",r:"_R_light",re:"_reasonml_light",res:"_rescript_light",resi:"_rescript_1_light",rmd:"_R_light",s:"_asm_light",sass:"_sass_light",sbt:"_sbt_light",scala:"_scala_light",slang:"_crystal_embedded_light",slide:"_go_light",slim:"_slim_light",slugignore:"_config_light","smarty.tpl":"_smarty_light",sol:"_ethereum_light",soql:"_db_1_light","spec.cjs":"_javascript_1_light","spec.js":"_javascript_1_light","spec.jsx":"_react_1_light","spec.mjs":"_javascript_1_light","spec.ts":"_typescript_1_light","spec.tsx":"_react_1_light",springbeans:"_spring_light",sss:"_css_light",stache:"_mustache_light",static:"_config_light",stl:"_svg_1_light",styl:"_stylus_light",stylelintignore:"_stylelint_1_light",stylelintrc:"_stylelint_light","stylelintrc.js":"_stylelint_light","stylelintrc.json":"_stylelint_light","stylelintrc.yaml":"_stylelint_light","stylelintrc.yml":"_stylelint_light","sublime-project":"_sublime_light","sublime-workspace":"_sublime_light",svelte:"_svelte_light",svg:"_svg_light",svgx:"_image_light","test.cjs":"_javascript_1_light","test.js":"_javascript_1_light","test.jsx":"_react_1_light","test.mjs":"_javascript_1_light","test.ts":"_typescript_1_light","test.tsx":"_react_1_light",tf:"_terraform_light","tf.json":"_terraform_light",tfvars:"_terraform_light","tfvars.json":"_terraform_light",tiff:"_image_light",tmp:"_clock_1_light",toml:"_config_light",tpl:"_smarty_light",tres:"_godot_2_light",tscn:"_godot_3_light",ttf:"_font_light",twig:"_twig_light",vala:"_vala_light",vapi:"_vala_light",vue:"_vue_light",wasm:"_wasm_light",wat:"_wat_light",wav:"_audio_light",webm:"_video_light",webp:"_image_light",wgt:"_wgt_light",woff:"_font_light",woff2:"_font_light",workspace:"_bazel_light",xls:"_xls_light",xlsx:"_xls_light",zig:"_zig_light",zip:"_zip_1_light"},ny={argdown:"_argdown_light",bat:"_windows_light",bicep:"_bicep_light",blade:"_php_light",c:"_c_light",chatagent:"_markdown_light",clojure:"_clojure_light",coffeescript:"_coffee_light",cpp:"_cpp_light",csharp:"_c-sharp_light",css:"_css_light","cuda-cpp":"_cu_light",dart:"_dart_light","django-html":"_html_3_light",dockercompose:"_docker_3_light",dockerfile:"_docker_light",dotenv:"_config_light",elixir:"_elixir_light",elm:"_elm_light",erb:"_html_erb_light",fsharp:"_f-sharp_light","git-commit":"_git_light","github-issues":"_github_light",go:"_go2_light",godot:"_godot_light",gradle:"_gradle_light",groovy:"_grails_light",haml:"_haml_light",handlebars:"_mustache_light",haskell:"_haskell_light",haxe:"_haxe_light",html:"_html_3_light",ignore:"_git_light",instructions:"_markdown_light",jade:"_pug_light",java:"_java_light",javascript:"_javascript_light",javascriptreact:"_react_light",jinja:"_jinja_light",json:"_json_light",jsonc:"_json_light",jsonl:"_json_light",julia:"_julia_light",kotlin:"_kotlin_light",latex:"_tex_light",less:"_less_light",lua:"_lua_light",makefile:"_makefile_light",markdown:"_markdown_light",mustache:"_mustache_light",nunjucks:"_nunjucks_light","objective-c":"_c_2_light","objective-cpp":"_cpp_2_light",ocaml:"_ocaml_light",perl:"_perl_light",php:"_php_light",postcss:"_css_light",powershell:"_powershell_light",prompt:"_markdown_light",properties:"_config_light",python:"_python_light",r:"_R_light",razor:"_html_light",rescript:"_rescript_light",ruby:"_ruby_light",rust:"_rust_light",sass:"_sass_light",scss:"_sass_light","search-result":"_code-search_light",shellscript:"_shell_light",skill:"_markdown_light",sql:"_db_light",stylus:"_stylus_light",swift:"_swift_light",terraform:"_terraform_light",tex:"_tex_1_light",typescript:"_typescript_light",typescriptreact:"_react_light",vala:"_vala_light",vue:"_vue_light",xml:"_xml_light",yaml:"_yml_light"},nw="_default_light",nx={".bash":"shellscript",".bat":"bat",".c":"c",".cc":"cpp",".cjs":"javascript",".clj":"clojure",".cljc":"clojure",".cljs":"clojure",".cmd":"bat",".coffee":"coffeescript",".cpp":"cpp",".cs":"csharp",".cshtml":"razor",".css":"css",".cu":"cuda-cpp",".cxx":"cpp",".dart":"dart",".dockerfile":"dockerfile",".fs":"fsharp",".fsx":"fsharp",".gitignore":"ignore",".go":"go",".gradle":"groovy",".groovy":"groovy",".h":"c",".handlebars":"handlebars",".hbs":"handlebars",".hpp":"cpp",".htm":"html",".html":"html",".java":"java",".jl":"julia",".js":"javascript",".json":"json",".jsonc":"jsonc",".jsx":"javascriptreact",".kt":"kotlin",".kts":"kotlin",".less":"less",".lua":"lua",".m":"objective-c",".makefile":"makefile",".markdown":"markdown",".md":"markdown",".mjs":"javascript",".mk":"makefile",".mm":"objective-cpp",".npmignore":"ignore",".php":"php",".pl":"perl",".pm":"perl",".properties":"properties",".ps1":"powershell",".psm1":"powershell",".py":"python",".r":"r",".rb":"ruby",".rs":"rust",".sass":"scss",".scss":"scss",".sh":"shellscript",".sql":"sql",".swift":"swift",".tex":"latex",".ts":"typescript",".tsx":"typescriptreact",".xml":"xml",".xsd":"xml",".xsl":"xml",".yaml":"yaml",".yml":"yaml",".zsh":"shellscript"};function nk(e){let t=ng[e];if(null!=t)return{character:t[0],color:t[1]}}var nC=Object.defineProperty,n$=Object.getOwnPropertyDescriptor,nS=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?n$(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nC(t,i,s),s};let nE=class extends lit_element_i{render(){if(null==this.filename)return e$;let e=document.body.classList.contains("vscode-light")||document.body.classList.contains("vscode-high-contrast-light"),t=function(e,t=!1){let i=e.toLowerCase(),o=(t?nv:nm)[i];if(null!=o)return nk(o);let r=t?n_:nf,s=i.indexOf(".");for(;-1!==s&&s<i.length-1;){if(null!=(o=r[i.substring(s+1)]))return nk(o);s=i.indexOf(".",s+1)}let a=i.lastIndexOf(".");if(-1!==a){let e=nx[i.substring(a)];if(null!=e&&null!=(o=(t?ny:nb)[e]))return nk(o)}return nk(t&&nw?nw:"_default")}(this.filename,e);return null==t?e$:ew`<span class="font-icon" style=${nu({color:t.color||"inherit"})}
			>${function(e){if(1===e.length)return e;let t=/^\\+(?:u)?([0-9a-fA-F]{4,6})$/.exec(e);return null!=t?String.fromCodePoint(parseInt(t[1],16)):e}(t.character)}</span
		>`}};nE.styles=D`
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
	`,nS([eD()],nE.prototype,"filename",2),nE=nS([eM("gl-file-icon")],nE);let nz={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Added (Both)",AU:"Added (Current)",UA:"Added (Incoming)",DD:"Deleted (Both)",DU:"Deleted (Current)",UD:"Deleted (Incoming)",UU:"Modified (Both)",T:"Modified",U:"Updated but Unmerged"};var nI=Object.defineProperty,nA=Object.getOwnPropertyDescriptor,nL=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nA(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nI(t,i,s),s};let nP=class extends lit_element_i{get statusName(){return this.status?nz[this.status]??"Unknown":""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"),this.status?.length===2?this.setAttribute("conflict",""):this.removeAttribute("conflict"))}renderIgnored(){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflictGlyphs(e,t,i,o,r,s){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="none" viewBox="0 0 22 16">
				<path d="M3 0H10V16H3C1.35 16 0 14.65 0 13V3C0 1.35 1.35 0 3 0Z" fill="${e}" />
				<path d="M12 0H19C20.65 0 22 1.35 22 3V13C22 14.65 20.65 16 19 16H12V0Z" fill="${o}" />
				<text
					x="5"
					y="7"
					dominant-baseline="central"
					text-anchor="middle"
					font-size="12"
					font-weight="700"
					fill="${i}"
				>
					${t}
				</text>
				<text
					x="17"
					y="7"
					dominant-baseline="central"
					text-anchor="middle"
					font-size="12"
					font-weight="700"
					fill="${s}"
				>
					${r}
				</text>
			</svg>
		`}renderConflictUU(){let e="var(--gl-git-status-conflict-modified, #c4a000)";return this.renderConflictGlyphs(e,"±","#000",e,"±","#000")}renderConflictAA(){let e="var(--gl-git-status-added)";return this.renderConflictGlyphs(e,"+","#fff",e,"+","#fff")}renderConflictDD(){let e="var(--gl-git-status-deleted)";return this.renderConflictGlyphs(e,"−","#fff",e,"−","#fff")}renderConflictDU(){return this.renderConflictGlyphs("var(--gl-git-status-deleted)","−","#fff","var(--gl-git-status-conflict-modified, #c4a000)","±","#000")}renderConflictUD(){return this.renderConflictGlyphs("var(--gl-git-status-conflict-modified, #c4a000)","±","#000","var(--gl-git-status-deleted)","−","#fff")}renderConflictAU(){return this.renderConflictGlyphs("var(--gl-git-status-added)","+","#fff","var(--gl-git-status-conflict-modified, #c4a000)","±","#000")}renderConflictUA(){return this.renderConflictGlyphs("var(--gl-git-status-conflict-modified, #c4a000)","±","#000","var(--gl-git-status-added)","+","#fff")}renderUnknown(){return ew`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":return this.renderConflictAA();case"AU":return this.renderConflictAU();case"UA":return this.renderConflictUA();case"DD":return this.renderConflictDD();case"DU":return this.renderConflictDU();case"UD":return this.renderConflictUD();case"UU":return this.renderConflictUU()}return this.renderUnknown()}};nP.styles=[D`
			:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				--gl-icon-size: 1.6rem;

				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			:host([conflict]) {
				--gl-icon-size: 2.2rem;
				margin-right: 0.4rem;

				width: 22px;
				aspect-ratio: auto;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],nL([eD()],nP.prototype,"status",2),nL([eO()],nP.prototype,"statusName",1),nP=nL([eM("gl-git-status")],nP);var nT=Object.defineProperty,nM=Object.getOwnPropertyDescriptor,nR=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nM(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nT(t,i,s),s};let nD=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ew`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??e$}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ew`<gl-tooltip placement=${this.tooltipPlacement??e$}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ew`<a
				class="control"
				aria-label=${this.ariaLabel??e$}
				tabindex="${(!1===this.disabled?void 0:-1)??e$}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ew`<button
			class="control"
			role=${this.role??e$}
			aria-label=${this.ariaLabel??e$}
			aria-checked=${this.ariaChecked??e$}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};function nO(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}nD.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nD.styles=[oB,D`
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
				${oj}
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
		`],nR([eB(".control")],nD.prototype,"control",2),nR([eD({reflect:!0})],nD.prototype,"appearance",2),nR([eD({reflect:!0})],nD.prototype,"variant",2),nR([eD({type:Boolean,reflect:!0})],nD.prototype,"disabled",2),nR([eD({reflect:!0})],nD.prototype,"density",2),nR([eD({type:Boolean,reflect:!0})],nD.prototype,"full",2),nR([eD()],nD.prototype,"href",2),nR([eD()],nD.prototype,"tooltip",2),nR([eD()],nD.prototype,"tooltipPlacement",2),nR([eD({type:Boolean,reflect:!0})],nD.prototype,"truncate",2),nR([eD({type:String,attribute:"aria-label"})],nD.prototype,"ariaLabel",2),nD=nR([eM("gl-button")],nD);var nj=nO(),nB={exec:()=>null};function nF(e){let t=[];return i=>{let o=Math.max(0,Math.min(3,i-1)),r=t[o];return r||(r=e(o),t[o]=r),r}}function nq(e,t=""){let i="string"==typeof e?e:e.source,o={replace:(e,t)=>{let r="string"==typeof t?t:t.source;return r=r.replace(nU.caret,"$1"),i=i.replace(e,r),o},getRegex:()=>new RegExp(i,t)};return o}var nN=((e="")=>{try{return!!RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),nU={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:nF(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:nF(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:nF(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:nF(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:nF(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:nF(e=>RegExp(`^ {0,${e}}>`))},nV=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,nH=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,nK=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nW=nq(nK).replace(/bull/g,nH).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),nG=nq(nK).replace(/bull/g,nH).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),nZ=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nY=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,nQ=nq(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",nY).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),nX=nq(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,nH).getRegex(),nJ="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n0=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,n1=nq("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",n0).replace("tag",nJ).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n2=nq(nZ).replace("hr",nV).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nJ).getRegex(),n3={blockquote:nq(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",n2).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:nQ,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:nV,html:n1,lheading:nW,list:nX,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:n2,table:nB,text:/^[^\n]+/},n4=nq("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",nV).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nJ).getRegex(),n5={...n3,lheading:nG,table:n4,paragraph:nq(nZ).replace("hr",nV).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",n4).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nJ).getRegex()},n6={...n3,html:nq("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n0).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nB,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:nq(nZ).replace("hr",nV).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nW).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},n8=/^( {2,}|\\)\n(?!\s*$)/,n7=/[\p{P}\p{S}]/u,n9=/[\s\p{P}\p{S}]/u,ae=/[^\s\p{P}\p{S}]/u,at=nq(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,n9).getRegex(),ai=/(?!~)[\p{P}\p{S}]/u,ao=nq(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",nN?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ar=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,as=nq(ar,"u").replace(/punct/g,n7).getRegex(),an=nq(ar,"u").replace(/punct/g,ai).getRegex(),aa="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",al=nq(aa,"gu").replace(/notPunctSpace/g,ae).replace(/punctSpace/g,n9).replace(/punct/g,n7).getRegex(),ac=nq(aa,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,ai).getRegex(),ah=nq("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ae).replace(/punctSpace/g,n9).replace(/punct/g,n7).getRegex(),ad=nq(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,n7).getRegex(),ap=nq("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)","gu").replace(/notPunctSpace/g,ae).replace(/punctSpace/g,n9).replace(/punct/g,n7).getRegex(),au=nq(/\\(punct)/,"gu").replace(/punct/g,n7).getRegex(),ag=nq(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),am=nq(n0).replace("(?:--\x3e|$)","--\x3e").getRegex(),af=nq("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",am).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ab=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,av=nq(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ab).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),a_=nq(/^!?\[(label)\]\[(ref)\]/).replace("label",ab).replace("ref",nY).getRegex(),ay=nq(/^!?\[(ref)\](?:\[\])?/).replace("ref",nY).getRegex(),aw=nq("reflink|nolink(?!\\()","g").replace("reflink",a_).replace("nolink",ay).getRegex(),ax=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ak={_backpedal:nB,anyPunctuation:au,autolink:ag,blockSkip:ao,br:n8,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:nB,delLDelim:nB,delRDelim:nB,emStrongLDelim:as,emStrongRDelimAst:al,emStrongRDelimUnd:ah,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:av,nolink:ay,punctuation:at,reflink:a_,reflinkSearch:aw,tag:af,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:nB},aC={...ak,link:nq(/^!?\[(label)\]\((.*?)\)/).replace("label",ab).getRegex(),reflink:nq(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ab).getRegex()},a$={...ak,emStrongRDelimAst:ac,emStrongLDelim:an,delLDelim:ad,delRDelim:ap,url:nq(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ax).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:nq(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ax).getRegex()},aS={...a$,br:nq(n8).replace("{2,}","*").getRegex(),text:nq(a$.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},aE={normal:n3,gfm:n5,pedantic:n6},az={normal:ak,gfm:a$,breaks:aS,pedantic:aC},aI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},aA=e=>aI[e];function aL(e,t){if(t){if(nU.escapeTest.test(e))return e.replace(nU.escapeReplace,aA)}else if(nU.escapeTestNoEncode.test(e))return e.replace(nU.escapeReplaceNoEncode,aA);return e}function aP(e){try{e=encodeURI(e).replace(nU.percentDecode,"%")}catch{return null}return e}function aT(e,t){let i=e.replace(nU.findPipe,(e,t,i)=>{let o=!1,r=t;for(;--r>=0&&"\\"===i[r];)o=!o;return o?"|":" |"}).split(nU.splitPipe),o=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;o<i.length;o++)i[o]=i[o].trim().replace(nU.slashPipe,"|");return i}function aM(e,t,i){let o=e.length;if(0===o)return"";let r=0;for(;r<o;){let s=e.charAt(o-r-1);if(s!==t||i)if(s!==t&&i)r++;else break;else r++}return e.slice(0,o-r)}function aR(e){let t=e.split(`
`),i=t.length-1;for(;i>=0&&nU.blankLine.test(t[i]);)i--;return t.length-i<=2?e:t.slice(0,i+1).join(`
`)}function aD(e,t,i,o,r){let s=t.href,a=t.title||null,c=e[1].replace(r.other.outputLinkReplace,"$1");o.state.inLink=!0;let h={type:"!"===e[0].charAt(0)?"image":"link",raw:i,href:s,title:a,text:c,tokens:o.inlineTokens(c)};return o.state.inLink=!1,h}var aO=class{options;rules;lexer;constructor(e){this.options=e||nj}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:aR(t[0]),i=e.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e,codeBlockStyle:"indented",text:i}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],i=function(e,t,i){let o=e.match(i.other.indentCodeCompensation);if(null===o)return t;let r=o[1];return t.split(`
`).map(e=>{let t=e.match(i.other.beginningSpace);if(null===t)return e;let[o]=t;return o.length>=r.length?e.slice(r.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=aM(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:aM(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:aM(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=aM(t[0],`
`).split(`
`),i="",o="",r=[];for(;e.length>0;){let t=!1,s=[],a;for(a=0;a<e.length;a++)if(this.rules.other.blockquoteStart.test(e[a]))s.push(e[a]),t=!0;else if(t)break;else s.push(e[a]);e=e.slice(a);let c=s.join(`
`),h=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${c}`:c,o=o?`${o}
${h}`:h;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,r,!0),this.lexer.state.top=p,0===e.length)break;let u=r.at(-1);if(u?.type==="code")break;if(u?.type==="blockquote"){let t=u.raw+`
`+e.join(`
`),s=this.blockquote(t);r[r.length-1]=s,i=i.substring(0,i.length-u.raw.length)+s.raw,o=o.substring(0,o.length-u.text.length)+s.text;break}if(u?.type==="list"){let t=u.raw+`
`+e.join(`
`),s=this.list(t);r[r.length-1]=s,i=i.substring(0,i.length-u.raw.length)+s.raw,o=o.substring(0,o.length-u.raw.length)+s.raw,e=t.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:r,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim(),o=i.length>1,r={type:"list",raw:"",ordered:o,start:o?+i.slice(0,-1):"",loose:!1,items:[]};i=o?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=o?i:"[*+-]");let s=this.rules.other.listItemRegex(i),a=!1;for(;e;){let i=!1,o="",c="";if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let h=function(e,t=0){let i=t,o="";for(let t of e)if("	"===t){let e=4-i%4;o+=" ".repeat(e),i+=e}else o+=t,i++;return o}(t[2].split(`
`,1)[0],t[1].length),p=e.split(`
`,1)[0],u=!h.trim(),g=0;if(this.options.pedantic?(g=2,c=h.trimStart()):u?g=t[1].length+1:(g=(g=h.search(this.rules.other.nonSpaceChar))>4?1:g,c=h.slice(g),g+=t[1].length),u&&this.rules.other.blankLine.test(p)&&(o+=p+`
`,e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(g),i=this.rules.other.hrRegex(g),r=this.rules.other.fencesBeginRegex(g),s=this.rules.other.headingBeginRegex(g),a=this.rules.other.htmlBeginRegex(g),m=this.rules.other.blockquoteBeginRegex(g);for(;e;){let f=e.split(`
`,1)[0],b;if(p=f,b=this.options.pedantic?p=p.replace(this.rules.other.listReplaceNesting,"  "):p.replace(this.rules.other.tabCharGlobal,"    "),r.test(p)||s.test(p)||a.test(p)||m.test(p)||t.test(p)||i.test(p))break;if(b.search(this.rules.other.nonSpaceChar)>=g||!p.trim())c+=`
`+b.slice(g);else{if(u||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||r.test(h)||s.test(h)||i.test(h))break;c+=`
`+p}u=!p.trim(),o+=f+`
`,e=e.substring(f.length+1),h=b.slice(g)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(a=!0)),r.items.push({type:"list_item",raw:o,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),r.raw+=o}let c=r.items.at(-1);if(!c)return;for(let e of(c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),r.raw=r.raw.trimEnd(),r.items)){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type==="text"||t?.type==="paragraph")){e.text=e.text.replace(this.rules.other.listReplaceTask,""),t.raw=t.raw.replace(this.rules.other.listReplaceTask,""),t.text=t.text.replace(this.rules.other.listReplaceTask,"");for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,"");break}let i=this.rules.other.listTaskCheckbox.exec(e.raw);if(i){let t={type:"checkbox",raw:i[0]+" ",checked:"[ ]"!==i[0]};e.checked=t.checked,r.loose?e.tokens[0]&&["paragraph","text"].includes(e.tokens[0].type)&&"tokens"in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:"paragraph",raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&(e.task=!1);if(!r.loose){let t=e.tokens.filter(e=>"space"===e.type);r.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(r.loose)for(let e of r.items)for(let t of(e.loose=!0,e.tokens))"text"===t.type&&(t.type="paragraph");return r}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=aR(t[0]);return{type:"html",block:!0,raw:e,pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:aM(t[0],`
`),href:i,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let i=aT(t[1]),o=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:aM(t[0],`
`),header:[],align:[],rows:[]};if(i.length===o.length){for(let e of o)this.rules.other.tableAlignRight.test(e)?s.align.push("right"):this.rules.other.tableAlignCenter.test(e)?s.align.push("center"):this.rules.other.tableAlignLeft.test(e)?s.align.push("left"):s.align.push(null);for(let e=0;e<i.length;e++)s.header.push({text:i[e],tokens:this.lexer.inline(i[e]),header:!0,align:s.align[e]});for(let e of r)s.rows.push(aT(e,s.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:s.align[t]})));return s}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:"heading",raw:aM(t[0],`
`),depth:"="===t[2].charAt(0)?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=aM(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e){if(-1===e.indexOf(")"))return -1;let t=0;for(let i=0;i<e.length;i++)if("\\"===e[i])i++;else if("("===e[i])t++;else if(")"===e[i]&&--t<0)return i;return t>0?-2:-1}(t[2]);if(-2===e)return;if(e>-1){let i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],o=e[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i.slice(1):i.slice(1,-1)),aD(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=t[(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return aD(i,e,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!(!o||!o[1]&&!o[2]&&!o[3]&&!o[4]||o[4]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[3])||!i||this.rules.inline.punctuation.exec(i))){let i=[...o[0]].length-1,r,s,a=i,c=0,h="*"===o[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+i);null!==(o=h.exec(t));){if(!(r=o[1]||o[2]||o[3]||o[4]||o[5]||o[6]))continue;if(s=[...r].length,o[3]||o[4]){a+=s;continue}if((o[5]||o[6])&&i%3&&!((i+s)%3)){c+=s;continue}if((a-=s)>0)continue;s=Math.min(s,s+a+c);let t=[...o[0]][0].length,h=e.slice(0,i+o.index+t+s);if(Math.min(i,s)%2){let e=h.slice(1,-1);return{type:"em",raw:h,text:e,tokens:this.lexer.inlineTokens(e)}}let p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(e),o=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&o&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,i=""){let o=this.rules.inline.delLDelim.exec(e);if(o&&(!o[1]||!i||this.rules.inline.punctuation.exec(i))){let i=[...o[0]].length-1,r,s,a=i,c=this.rules.inline.delRDelim;for(c.lastIndex=0,t=t.slice(-1*e.length+i);null!==(o=c.exec(t));){if(!(r=o[1]||o[2]||o[3]||o[4]||o[5]||o[6])||(s=[...r].length)!==i)continue;if(o[3]||o[4]){a+=s;continue}if((a-=s)>0)continue;s=Math.min(s,s+a);let t=[...o[0]][0].length,c=e.slice(0,i+o.index+t+s),h=c.slice(i,-i);return{type:"del",raw:c,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,i;return i="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,i;if("@"===t[2])i="mailto:"+(e=t[0]);else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0])e=t[0],i="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},aj=class l{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nj,this.options.tokenizer=this.options.tokenizer||new aO,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:nU,block:aE.normal,inline:az.normal};this.options.pedantic?(t.block=aE.pedantic,t.inline=az.pedantic):this.options.gfm&&(t.block=aE.gfm,this.options.breaks?t.inline=az.breaks:t.inline=az.gfm),this.tokenizer.rules=t}static get rules(){return{block:aE,inline:az}}static lex(e,t){return new l(t).lex(e)}static lexInline(e,t){return new l(t).inlineTokens(e)}lex(e){e=e.replace(nU.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(nU.tabCharGlobal,"    ").replace(nU.spaceLine,""));let o=1/0;for(;e;){let r;if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}if(this.options.extensions?.block?.some(i=>!!(r=i.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let i=t.at(-1);1===r.raw.length&&void 0!==i?i.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if((r=this.tokenizer.fences(e))||(r=this.tokenizer.heading(e))||(r=this.tokenizer.hr(e))||(r=this.tokenizer.blockquote(e))||(r=this.tokenizer.list(e))||(r=this.tokenizer.html(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if((r=this.tokenizer.table(e))||(r=this.tokenizer.lheading(e))){e=e.substring(r.raw.length),t.push(r);continue}let s=e;if(this.options.extensions?.startBlock){let t=1/0,i=e.slice(1),o;this.options.extensions.startBlock.forEach(e=>{"number"==typeof(o=e.call({lexer:this},i))&&o>=0&&(t=Math.min(t,o))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){let o=t.at(-1);i&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r),i=s.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i;this.tokenizer.lexer=this;let o=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!==(r=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!==(r=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,r.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!==(r=this.tokenizer.rules.inline.blockSkip.exec(o));)i=r[2]?r[2].length:0,o=o.slice(0,r.index+i)+"["+"a".repeat(r[0].length-i-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=this.options.hooks?.emStrongMask?.call({lexer:this},o)??o;let s=!1,a="",c=1/0;for(;e;){let i;if(e.length<c)c=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}if(s||(a=""),s=!1,this.options.extensions?.inline?.some(o=>!!(i=o.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))continue;if((i=this.tokenizer.escape(e))||(i=this.tokenizer.tag(e))||(i=this.tokenizer.link(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length);let o=t.at(-1);"text"===i.type&&o?.type==="text"?(o.raw+=i.raw,o.text+=i.text):t.push(i);continue}if((i=this.tokenizer.emStrong(e,o,a))||(i=this.tokenizer.codespan(e))||(i=this.tokenizer.br(e))||(i=this.tokenizer.del(e,o,a))||(i=this.tokenizer.autolink(e))||!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),t.push(i);continue}let r=e;if(this.options.extensions?.startInline){let t=1/0,i=e.slice(1),o;this.options.extensions.startInline.forEach(e=>{"number"==typeof(o=e.call({lexer:this},i))&&o>=0&&(t=Math.min(t,o))}),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(i=this.tokenizer.inlineText(r)){e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(a=i.raw.slice(-1)),s=!0;let o=t.at(-1);o?.type==="text"?(o.raw+=i.raw,o.text+=i.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){if(this.options.silent);else throw Error("Infinite loop on byte: "+e)}},aB=class{options;parser;constructor(e){this.options=e||nj}space(e){return""}code({text:e,lang:t,escaped:i}){let o=(t||"").match(nU.notSpaceStart)?.[0],r=e.replace(nU.endingNewline,"")+`
`;return o?'<pre><code class="language-'+aL(o)+'">'+(i?r:aL(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:aL(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,i=e.start,o="";for(let t=0;t<e.items.length;t++){let i=e.items[t];o+=this.listitem(i)}let r=t?"ol":"ul";return"<"+r+(t&&1!==i?' start="'+i+'"':"")+`>
`+o+"</"+r+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let t=0;t<e.header.length;t++)i+=this.tablecell(e.header[t]);t+=this.tablerow({text:i});let o="";for(let t=0;t<e.rows.length;t++){let r=e.rows[t];i="";for(let e=0;e<r.length;e++)i+=this.tablecell(r[e]);o+=this.tablerow({text:i})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${aL(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let o=this.parser.parseInline(i),r=aP(e);if(null===r)return o;let s='<a href="'+(e=r)+'"';return t&&(s+=' title="'+aL(t)+'"'),s+=">"+o+"</a>"}image({href:e,title:t,text:i,tokens:o}){o&&(i=this.parser.parseInline(o,this.parser.textRenderer));let r=aP(e);if(null===r)return aL(i);e=r;let s=`<img src="${e}" alt="${aL(i)}"`;return t&&(s+=` title="${aL(t)}"`),s+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:aL(e.text)}},aF=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},aq=class l{options;renderer;textRenderer;constructor(e){this.options=e||nj,this.options.renderer=this.options.renderer||new aB,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new aF}static parse(e,t){return new l(t).parse(e)}static parseInline(e,t){return new l(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions?.renderers?.[o.type]){let e=this.options.extensions.renderers[o.type].call({parser:this},o);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){t+=e||"";continue}}switch(o.type){case"space":t+=this.renderer.space(o);break;case"hr":t+=this.renderer.hr(o);break;case"heading":t+=this.renderer.heading(o);break;case"code":t+=this.renderer.code(o);break;case"table":t+=this.renderer.table(o);break;case"blockquote":t+=this.renderer.blockquote(o);break;case"list":t+=this.renderer.list(o);break;case"checkbox":t+=this.renderer.checkbox(o);break;case"html":t+=this.renderer.html(o);break;case"def":t+=this.renderer.def(o);break;case"paragraph":t+=this.renderer.paragraph(o);break;case"text":t+=this.renderer.text(o);break;default:{let e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let i="";for(let o=0;o<e.length;o++){let r=e[o];if(this.options.extensions?.renderers?.[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){i+=e||"";continue}}switch(r.type){case"escape":case"text":i+=t.text(r);break;case"html":i+=t.html(r);break;case"link":i+=t.link(r);break;case"image":i+=t.image(r);break;case"checkbox":i+=t.checkbox(r);break;case"strong":i+=t.strong(r);break;case"em":i+=t.em(r);break;case"codespan":i+=t.codespan(r);break;case"br":i+=t.br(r);break;case"del":i+=t.del(r);break;default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return i}},aN=class{options;block;constructor(e){this.options=e||nj}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?aj.lex:aj.lexInline}provideParser(e=this.block){return e?aq.parse:aq.parseInline}},aU=class{defaults=nO();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=aq;Renderer=aB;TextRenderer=aF;Lexer=aj;Tokenizer=aO;Hooks=aN;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let o of e)switch(i=i.concat(t.call(this,o)),o.type){case"table":for(let e of o.header)i=i.concat(this.walkTokens(e.tokens,t));for(let e of o.rows)for(let o of e)i=i.concat(this.walkTokens(o.tokens,t));break;case"list":i=i.concat(this.walkTokens(o.items,t));break;default:{let e=o;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(o=>{let r=e[o].flat(1/0);i=i.concat(this.walkTokens(r,t))}):e.tokens&&(i=i.concat(this.walkTokens(e.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let i=t.renderers[e.name];i?t.renderers[e.name]=function(...t){let o=e.renderer.apply(this,t);return!1===o&&(o=i.apply(this,t)),o}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let i=t[e.level];i?i.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),i.extensions=t),e.renderer){let t=this.defaults.renderer||new aB(this.defaults);for(let i in e.renderer){if(!(i in t))throw Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=e.renderer[i],r=t[i];t[i]=(...e)=>{let i=o.apply(t,e);return!1===i&&(i=r.apply(t,e)),i||""}}i.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new aO(this.defaults);for(let i in e.tokenizer){if(!(i in t))throw Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=e.tokenizer[i],r=t[i];t[i]=(...e)=>{let i=o.apply(t,e);return!1===i&&(i=r.apply(t,e)),i}}i.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new aN;for(let i in e.hooks){if(!(i in t))throw Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=e.hooks[i],r=t[i];aN.passThroughHooks.has(i)?t[i]=e=>{if(this.defaults.async&&aN.passThroughHooksRespectAsync.has(i))return(async()=>{let i=await o.call(t,e);return r.call(t,i)})();let s=o.call(t,e);return r.call(t,s)}:t[i]=(...e)=>{if(this.defaults.async)return(async()=>{let i=await o.apply(t,e);return!1===i&&(i=await r.apply(t,e)),i})();let i=o.apply(t,e);return!1===i&&(i=r.apply(t,e)),i}}i.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,o=e.walkTokens;i.walkTokens=function(e){let i=[];return i.push(o.call(this,e)),t&&(i=i.concat(t.call(this,e))),i}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return aj.lex(e,t??this.defaults)}parser(e,t){return aq.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let o={...i},r={...this.defaults,...o},s=this.onError(!!r.silent,!!r.async);if(!0===this.defaults.async&&!1===o.async)return s(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return s(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return s(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=e),r.async)return(async()=>{let i=r.hooks?await r.hooks.preprocess(t):t,o=await (r.hooks?await r.hooks.provideLexer(e):e?aj.lex:aj.lexInline)(i,r),s=r.hooks?await r.hooks.processAllTokens(o):o;r.walkTokens&&await Promise.all(this.walkTokens(s,r.walkTokens));let a=await (r.hooks?await r.hooks.provideParser(e):e?aq.parse:aq.parseInline)(s,r);return r.hooks?await r.hooks.postprocess(a):a})().catch(s);try{r.hooks&&(t=r.hooks.preprocess(t));let i=(r.hooks?r.hooks.provideLexer(e):e?aj.lex:aj.lexInline)(t,r);r.hooks&&(i=r.hooks.processAllTokens(i)),r.walkTokens&&this.walkTokens(i,r.walkTokens);let o=(r.hooks?r.hooks.provideParser(e):e?aq.parse:aq.parseInline)(i,r);return r.hooks&&(o=r.hooks.postprocess(o)),o}catch(e){return s(e)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+aL(i.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(i);throw i}}},aV=new aU;function aH(e,t){return aV.parse(e,t)}aH.options=aH.setOptions=function(e){return aV.setOptions(e),aH.defaults=aV.defaults,nj=aH.defaults,aH},aH.getDefaults=nO,aH.defaults=nj,aH.use=function(...e){return aV.use(...e),aH.defaults=aV.defaults,nj=aH.defaults,aH},aH.walkTokens=function(e,t){return aV.walkTokens(e,t)},aH.parseInline=aV.parseInline,aH.Parser=aq,aH.parser=aq.parse,aH.Renderer=aB,aH.TextRenderer=aF,aH.Lexer=aj,aH.lexer=aj.lex,aH.Tokenizer=aO,aH.Hooks=aN,aH.parse=aH,aH.options,aH.setOptions,aH.use,aH.walkTokens,aH.parseInline,aq.parse,aj.lex;let aK=/\sstyle\s*=\s*("[^"]*"|'[^']*')/gi,aW=/\s*!important\s*$/i;function aG(e){return e.includes("style")?e.replace(aK," data-gl-style=$1"):e}var aZ=Object.defineProperty,aY=Object.getOwnPropertyDescriptor,aQ=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?aY(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&aZ(t,i,s),s};let aX=class extends lit_element_i{constructor(){super(...arguments),this.markdown="",this.density="compact",this.inline=!1}render(){return ew`${this.markdown?this.renderMarkdown(this.markdown):""}`}updated(e){for(let t of(super.updated(e),this.renderRoot.querySelectorAll("[data-gl-style]"))){let e=t.dataset.glStyle;e&&function(e,t){for(let i of t.split(";")){let t=i.indexOf(":");if(-1===t)continue;let o=i.slice(0,t).trim();if(!o)continue;let r=i.slice(t+1).trim();if(!r)continue;let s="";aW.test(r)&&(r=r.replace(aW,""),s="important"),e.style.setProperty(o,r,s)}}(t,e),t.removeAttribute("data-gl-style")}}renderMarkdown(e){let t,i,o,r;return this.inline?(h??=new aU({breaks:!1,gfm:!0,renderer:(i=0,o=!1,{blockquote:function({tokens:e}){return this.parser.parse(e)},code:function({text:e}){return`<code>${a1(e)}</code>`},codespan:function({text:e}){return`<code>${a1(e)}</code>`},heading:function({tokens:e}){return this.parser.parseInline(e)},hr:function(){return""},image:function({text:e}){return e||""},link:function({tokens:e}){return this.parser.parseInline(e)},list:function(e){o=e.ordered,i="number"==typeof e.start?e.start:1;let t="";for(let i of e.items)t+=r.call(this,i);return t},listitem:r=function(e){let t,r=this.parser.parse(e.tokens);return e.task?t=e.checked?"☑":"☐":o?(t=`${i}.`,i++):t="•",`${t} ${r.trim()} `},paragraph:function({tokens:e}){return this.parser.parseInline(e)},table:function(){return""},br:function(){return" "},html:function(){return""}})}),t=a9(t=h.parse(a7(e),{async:!1})),ew`<span>${rr(aG(t))}</span>`):(p??=new aU({breaks:!0,gfm:!0,renderer:{image:function({href:e,title:t,text:i}){let o=[],r=[];return e&&({href:e,dimensions:o}=function(e){let t=[],i=e.split("|").map(e=>e.trim());e=i[0];let o=i[1];if(o){let e=/height=(\d+)/.exec(o),i=/width=(\d+)/.exec(o),r=e?e[1]:"",s=i?i[1]:"",a=isFinite(parseInt(s)),c=isFinite(parseInt(r));a&&t.push(`width="${s}"`),c&&t.push(`height="${r}"`)}return{href:e,dimensions:t}}(e),r.push(`src="${lt(e)}"`)),i&&r.push(`alt="${lt(i)}"`),t&&r.push(`title="${lt(t)}"`),o.length&&(r=[...r,...o]),`<img ${r.join(" ")}>`},codespan:function({text:e}){return`<code>${a1(e)}</code>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},html:function({text:e}){return e.match(/^(<span[^>]+>)|(<\/\s*span>)$/)?e:""}}}),rr(aG(t=a9(t=p.parse(a7(e),{async:!1})))))}};aX.styles=[ri,D`
			:host {
				display: contents;

				--markdown-compact-block-spacing: 8px;
				--markdown-list-spacing: 20px;
			}

			a,
			a code {
				text-decoration: none;
				color: var(--vscode-textLink-foreground);
			}

			a:hover,
			a:hover code {
				color: var(--vscode-textLink-activeForeground);
			}

			a:hover:not(.disabled) {
				cursor: pointer;
			}

			p,
			.code,
			ul,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin-inline: 0;
			}

			:where(:host([density='compact'])) p,
			:where(:host([density='compact'])) .code,
			:where(:host([density='compact'])) ul,
			:where(:host([density='compact'])) h1,
			:where(:host([density='compact'])) h2,
			:where(:host([density='compact'])) h3,
			:where(:host([density='compact'])) h4,
			:where(:host([density='compact'])) h5,
			:where(:host([density='compact'])) h6 {
				margin-block: var(--markdown-compact-block-spacing);
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				line-height: 1.1;
			}

			code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}

			code code-icon {
				color: inherit;
				font-size: inherit;
				vertical-align: middle;
			}

			p:first-child,
			.code:first-child,
			ul:first-child {
				margin-top: 0;
			}

			p:last-child,
			.code:last-child,
			ul:last-child {
				margin-bottom: 0;
			}

			/* MarkupContent Layout */
			ul {
				padding-left: var(--markdown-list-spacing);
			}
			ol {
				padding-left: var(--markdown-list-spacing);
			}

			li > p {
				margin-bottom: 0;
			}

			li > ul {
				margin-top: 0;
			}
=		`],aQ([eD({type:String})],aX.prototype,"markdown",2),aQ([eD({type:String,reflect:!0})],aX.prototype,"density",2),aQ([eD({type:Boolean,reflect:!0})],aX.prototype,"inline",2),aX=aQ([eM("gl-markdown")],aX);let aJ={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},a0=e=>aJ[e];function a1(e,t){if(t){if(/[&<>"']/.test(e))return e.replace(/[&<>"']/g,a0)}else if(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/.test(e))return e.replace(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,a0);return e}let a2="[A-Za-z0-9-]+",a3="~[A-Za-z]+",a4=RegExp(`^(${a2})(${a3})?$`),a5=RegExp(`\\$\\(${a2}(?:${a3})?\\)`,"g"),a6=RegExp(`\\\\${a5.source}`,"g"),a8=RegExp(`(\\\\)?\\$\\((${a2}(?:${a3})?)\\)`,"g");function a7(e){return e.replace(a6,e=>`\\${e}`)}function a9(e){let t,i,o=[],r=0;for(;null!==(t=a8.exec(e));){r<(i=t.index||0)&&o.push(e.substring(r,i)),r=(t.index||0)+t[0].length;let[,s,a]=t;o.push(s?`$(${a})`:function(e){let[,t,i]=a4.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${i?` modifier="${i}"`:""}></code-icon>`}({id:a}))}return r<e.length&&o.push(e.substring(r)),o.join("")}let le=/"/g;function lt(e){return e.replace(le,"&quot;")}D`
		:host {
			display: block;
			height: 100%;
		}
	`;let li=[oB,D`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			cursor: pointer;
			/* Reduced containment to allow tooltips to escape */
			contain: layout;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		/* Rich mode: host a multi-line / card component (e.g. gl-commit-row) in the default slot.
		   Relaxes the single-line tree-row constraints so the consumer's content drives row height. */
		:host([rich]) {
			height: auto;
			min-height: var(--gl-tree-item-min-height, 2.2rem);
			line-height: normal;
			padding-top: var(--gl-tree-item-padding-y, 0.4rem);
			padding-bottom: var(--gl-tree-item-padding-y, 0.4rem);
		}

		:host([rich]) .item {
			align-items: stretch;
		}

		:host([rich]) .text {
			line-height: normal;
			white-space: normal;
			text-overflow: clip;
		}

		:host([rich]) .main,
		:host([rich]) .description {
			display: block;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
			/* Raise above sibling items so action tooltips aren't painted behind the next row */
			z-index: 1;
		}

		/* Disabled state — propagated from disable-check so AI-excluded files (or any other
		   row that shouldn't be acted on) read as visually inactive AND inert (clicking the
		   row will not open the file or trigger any action — same UX as a disabled menu item).
		   The checkbox visual is already dimmed via .checkbox:has(:disabled) and the underlying
		   <input> is :disabled, so it cannot be activated regardless. */
		:host([disable-check]) .item,
		:host([disable-check]) slot[name='decorations-before'],
		:host([disable-check]) slot[name='decorations-after'],
		:host([disable-check]) .actions {
			opacity: 0.7;
			color: var(--vscode-disabledForeground, inherit);
		}

		:host([disable-check]) .item {
			cursor: default;
			pointer-events: none;
		}

		:host([disable-check]) .actions {
			pointer-events: none;
		}

		:host([disable-check]:hover) {
			background-color: transparent;
		}

		/* A selected row defaults to the inactive selection colors. When the tree has focus, EVERY
		   selected row brightens to the active colors (not just the cursor row) — matching VS Code
		   multi-select. The signal is the --gl-tree-focus-within var (0/1), set by gl-tree-view's
		   :host(:focus-within) and inherited across the shadow boundary: clicking a row focuses its
		   inner button, so the container's own focus event never fires and focusin doesn't cross the
		   nested shadow roots — a CSS-only signal is the reliable one. */
		:host([aria-selected='true']) {
			--gl-tree-selection-bg: color-mix(
				in srgb,
				var(--vscode-list-activeSelectionBackground) calc(var(--gl-tree-focus-within, 0) * 100%),
				var(--vscode-list-inactiveSelectionBackground)
			);
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--gl-tree-selection-bg);
		}

		/* Focused state - when the item is the active descendant in the tree */
		:host([focused]) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
			z-index: 1;
		}

		/* The cursor row (and any row with real DOM focus within it) always uses the active colors. */
		:host([aria-selected='true'][focused]),
		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		/* Inactive focus state - when the item would be focused but container doesn't have focus */
		/* In VS Code, inactive focus shows the selection background without the outline */
		:host([focused-inactive]) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
			z-index: 1;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			flex: 1;
			min-width: 0;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
		}
		.icon {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: var(--gl-icon-size, 1.6rem);
			height: 2.2rem;
			pointer-events: none;
			flex: none;
		}

		slot[name='icon']::slotted(*) {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: var(--gl-icon-size, 1.6rem);
			height: 1.6rem;
			vertical-align: middle;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		@media (prefers-reduced-motion: reduce) {
			.node--connector::before {
				transition: none;
			}
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover'][focused]) .node--connector::before,
		:host-context([guides='onHover'][focused-inactive]) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.8rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
			margin-left: 0.4rem;
		}

		:host(:focus-within) .actions,
		:host([focused]) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host([focused-inactive]) .actions {
			color: var(--vscode-list-inactiveSelectionIconForeground, var(--vscode-icon-foreground));
		}

		:host(:not(:hover):not(:focus-within):not([focused]):not([focused-inactive])) .actions {
			display: none;
		}

		/* Tooltip wrapper around the checkbox has display: block + line-height from the host,
		   which adds inline leading and pushes the checkbox 1px above the row. Center-fit it. */
		gl-tooltip:has(> .checkbox) {
			display: inline-flex;
			align-items: center;
			line-height: 0;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked),
		.checkbox:has(:indeterminate) {
			color: var(--vscode-checkbox-foreground);
			border-color: var(--vscode-checkbox-selectBorder);
			background-color: var(--vscode-checkbox-selectBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check,
		.checkbox__dash {
			position: absolute;
			top: 0;
			left: 0;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		.checkbox__input:indeterminate ~ .checkbox__dash {
			opacity: 1;
		}

		slot[name='decorations-before'],
		slot[name='decorations-after'] {
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			flex: none;
			white-space: nowrap;
			margin-left: 0.4rem;
			--gl-pill-border: color-mix(in srgb, transparent 80%, var(--color-foreground));
		}

		::slotted([slot='decorations-before'].decoration-text) {
			font-size: var(--gl-decoration-before-font-size, inherit);
			opacity: var(--gl-decoration-before-opacity, 1);
		}

		::slotted([slot='decorations-after'].decoration-text) {
			font-size: var(--gl-decoration-after-font-size, inherit);
			opacity: var(--gl-decoration-after-opacity, 1);
		}

		::slotted([slot^='decorations-'].decoration-text--added),
		::slotted([slot^='decorations-'].conflict-count--added) {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		::slotted([slot^='decorations-'].conflict-count--added) {
			border-color: color-mix(in srgb, transparent 60%, var(--vscode-gitDecoration-addedResourceForeground));
		}

		::slotted([slot^='decorations-'].decoration-text--deleted),
		::slotted([slot^='decorations-'].conflict-count--deleted) {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}
		::slotted([slot^='decorations-'].conflict-count--deleted) {
			border-color: color-mix(in srgb, transparent 60%, var(--vscode-gitDecoration-deletedResourceForeground));
		}

		::slotted([slot^='decorations-'].decoration-text--modified),
		::slotted([slot^='decorations-'].conflict-count--modified) {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		::slotted([slot^='decorations-'].conflict-count--modified) {
			border-color: color-mix(in srgb, transparent 60%, var(--vscode-gitDecoration-modifiedResourceForeground));
		}

		::slotted([slot^='decorations-'].decoration-text--untracked) {
			color: var(--vscode-gitDecoration-untrackedResourceForeground);
		}

		::slotted([slot^='decorations-'].decoration-text--renamed) {
			color: var(--vscode-gitDecoration-renamedResourceForeground);
		}

		::slotted([slot^='decorations-'].decoration-text--conflict),
		::slotted([slot^='decorations-'].conflict-count--conflict) {
			color: var(--vscode-gitDecoration-conflictingResourceForeground);
		}
		::slotted([slot^='decorations-'].conflict-count--conflict) {
			border-color: color-mix(
				in srgb,
				transparent 60%,
				var(--vscode-gitDecoration-conflictingResourceForeground)
			);
		}

		::slotted([slot^='decorations-'].decoration-text--muted) {
			color: var(--vscode-descriptionForeground);
		}

		/* Agent phase decoration text — own palette (NOT SCM tokens, which semantically belong to
		   file change states). Matches the tree-icon-agent--* colors so a leaf's icon and its
		   phase text decoration agree. */
		::slotted([slot^='decorations-'].decoration-text--agent-working) {
			color: var(--gl-agent-working-color);
		}
		::slotted([slot^='decorations-'].decoration-text--agent-waiting) {
			color: var(--gl-agent-waiting-color);
		}
		::slotted([slot^='decorations-'].decoration-text--agent-idle) {
			color: var(--gl-agent-idle-color);
		}

		/* High Contrast Mode Support */
		@media (forced-colors: active) {
			:host {
				forced-color-adjust: none;
			}

			:host([focused]) {
				outline: 2px solid CanvasText;
				outline-offset: -2px;
			}

			:host([aria-selected='true']) {
				background-color: Highlight;
				color: HighlightText;
			}

			:host([aria-selected='true'][focused]) {
				outline: 2px solid CanvasText;
				outline-offset: -2px;
			}

			.checkbox {
				border: 1px solid CanvasText;
			}

			.checkbox:has(:checked),
			.checkbox:has(:indeterminate) {
				background-color: Highlight;
				border-color: CanvasText;
			}

			.node--connector::before {
				border-color: CanvasText;
				opacity: 1;
			}

			slot[name='decorations-after'] span {
				color: CanvasText !important;
			}
		}
	`];var lo=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,ls=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?lr(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&lo(t,i,s),s};let ln=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return ew`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<1)return;let t=this.handleKeydown.bind(this),i=`${this.actionNodes.length}`,o=this.actionNodes.map((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",i),e.setAttribute("tabindex",0===o?"0":"-1"),this.actionNodes.length>=2&&e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes)return;let t=e.target,i=parseInt(t.getAttribute("aria-posinset")??"0",10);if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||this.actionNodes.length<2)return;let o=null;if("ArrowLeft"===e.key){let e=1===i?this.actionNodes.length-1:i-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=i===this.actionNodes.length?0:i;o=this.actionNodes[e]}null!=o&&o!==t&&(e.preventDefault(),e.stopPropagation(),t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};ln.styles=D`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,ls([(m={flatten:!0},(e,t)=>{let{slot:i,selector:o}=m??{},r="slot"+(i?`[name=${i}]`:":not([name])");return ej(e,t,{get(){let e=this.renderRoot?.querySelector(r),t=e?.assignedElements(m)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],ln.prototype,"actionNodes",2),ln=ls([eM("action-nav")],ln);var la=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,lc=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?ll(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&la(t,i,s),s};let lh=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this._modifiers=new ModifierKeysController(this),this.showIcon=!0,this.rich=!1,this.matched=!1,this.tabIndex=-1,this.selected=!1,this.focused=!1,this.focusedInactive=!1,this.onComponentClick=e=>{this.selectCore({dblClick:!1,altKey:e.altKey})},this._checkboxClickAlt=!1}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this.onComponentClick)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("click",this.onComponentClick)}updateAttrs(e,t=!1){(e.has("expanded")||e.has("branch")||t)&&(this.branch?this.setAttribute("aria-expanded",this.expanded.toString()):this.removeAttribute("aria-expanded")),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){let e=this.level-1;if(e<1&&!this.branch)return e$;let t=[];if(e>0)for(let i=0;i<e;i++)t.push(ew`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(ew`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){if(!this.checkable)return e$;let e=ew`<span
			class="checkbox"
			@mouseenter=${this.onCheckboxMouseEnter}
			@mouseleave=${this.onCheckboxMouseLeave}
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${!0===this.checked}
				.indeterminate=${"indeterminate"===this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
			><code-icon icon="dash" size="14" class="checkbox__dash"></code-icon
		></span>`,t=this.getEffectiveCheckboxTooltip();return t?ew`<gl-tooltip placement="right" content=${t}>${e}</gl-tooltip>`:e}getEffectiveCheckboxTooltip(){let e=this.checkableTooltip,t=this.checkableAltTooltip;return t?e?this._modifiers.altKey?t:`${e}
[${re()}] ${t}`:t:e}renderActions(){return ew`<action-nav class="actions" part="actions"><slot name="actions"></slot></action-nav>`}renderBefore(){return ew`<slot name="decorations-before" class="decorations-before"></slot>`}renderAfter(){return ew`<slot name="decorations-after" class="decorations-after"></slot>`}render(){return ew`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				part="item"
				type="button"
				tabindex=${this.tabIndex}
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
				@contextmenu=${this.onButtonContextMenu}
			>
				${o6(this.showIcon,()=>ew`<slot name="icon" class="icon"></slot>`)}
				<span class="text" part="text">
					<slot class="main" part="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderBefore()}${this.renderActions()}${this.renderAfter()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.selected=!0,t||window.requestAnimationFrame(()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1,shiftKey:e?.shiftKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onButtonContextMenu(e){e.preventDefault(),e.stopPropagation();let t=new MouseEvent("contextmenu",{bubbles:!0,composed:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(t)}onCheckboxClick(e){e.stopPropagation(),this._checkboxClickAlt=e.altKey}onCheckboxChange(e){e.preventDefault(),e.stopPropagation();let t=e.target.checked,i=this._checkboxClickAlt||this._modifiers.altKey;"indeterminate"===this.checked&&i&&(t=!1,e.target.checked=!1),this._checkboxClickAlt=!1,this.checked=t,this.emit("gl-tree-item-checked",{node:this,checked:t})}onCheckboxMouseEnter(){this.emit("gl-tree-item-suspend-tooltip")}onCheckboxMouseLeave(){this.emit("gl-tree-item-resume-tooltip")}};lh.styles=li,lc([eD({type:Boolean})],lh.prototype,"branch",2),lc([eD({type:Boolean})],lh.prototype,"expanded",2),lc([eD({type:String})],lh.prototype,"path",2),lc([eD({type:String,attribute:"parent-path"})],lh.prototype,"parentPath",2),lc([eD({type:Boolean,attribute:"parent-expanded"})],lh.prototype,"parentExpanded",2),lc([eD({type:Number})],lh.prototype,"level",2),lc([eD({type:Number})],lh.prototype,"size",2),lc([eD({type:Number})],lh.prototype,"position",2),lc([eD({type:Boolean})],lh.prototype,"checkable",2),lc([eD()],lh.prototype,"checked",2),lc([eD({type:Boolean,reflect:!0,attribute:"disable-check"})],lh.prototype,"disableCheck",2),lc([eD({attribute:"checkable-tooltip"})],lh.prototype,"checkableTooltip",2),lc([eD({attribute:"checkable-alt-tooltip"})],lh.prototype,"checkableAltTooltip",2),lc([eD({type:Boolean})],lh.prototype,"showIcon",2),lc([eD({type:Boolean,reflect:!0})],lh.prototype,"rich",2),lc([eD({type:Boolean,reflect:!0})],lh.prototype,"matched",2),lc([eD({type:Number})],lh.prototype,"tabIndex",2),lc([eD({type:String,attribute:"data-vscode-context",reflect:!0})],lh.prototype,"vscodeContext",2),lc([eO()],lh.prototype,"selected",2),lc([eD({type:Boolean,reflect:!0})],lh.prototype,"focused",2),lc([eD({type:Boolean,reflect:!0,attribute:"focused-inactive"})],lh.prototype,"focusedInactive",2),lc([eB("#button")],lh.prototype,"buttonEl",2),lh=lc([eM("gl-tree-item")],lh);var ld=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,lu=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?lp(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&ld(t,i,s),s};let lg=/^[a-zA-Z0-9\s\-_.]$/,lm=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0,this.filtered=!1,this.filterable=!1,this.filterPlaceholder="Filter...",this.searchBoxFilter=!0,this.dimUnmatched=!1,this.emptyText="No items",this.tooltipAnchorRight=!1,this._filter=new FilterController(this,{debounceMs:150,applyMatch:e=>{0===e.length?(this.filtered=!1,null!=this._model&&function e(t){for(let i of t)i.matched=!1,null!=i.children&&e(i.children)}(this._model)):(this.filtered=!0,null!=this._model&&lb(this._model,[...e]))},onApplied:()=>this.rebuildFlattenedTree()}),this.ariaLabel="Tree",this.virtualizerRef=o3(),this.scrollableRef=o3(),this._containerHasFocus=!1,this._filterHasFocus=!1,this._actionButtonHasFocus=!1,this._collection=new VirtualCollectionController(this,{getItems:()=>this.treeItems,getItemId:e=>e.path,isSelectable:e=>!1===e.branch,mode:()=>this.multiSelectable?"multi":"single",focusStrategy:"activedescendant",getVirtualizer:()=>this.virtualizerRef.value,getContainer:()=>this.scrollableRef.value,onSelectionChange:()=>{this.requestUpdate(),this.multiSelectable&&this.emitSelectionChanged()},onActivate:e=>{let t=this._index.itemFor(e);null!=t&&this.handleItemActivation(t)},onUnhandledKey:e=>this.handleTreeKey(e)}),this._hoverOpen=!1,this._typeAheadBuffer="",this._typeAheadTimeout=800,this._nodeMap=new Map,this.multiSelectable=!1,this._virtualAnchorRect={x:0,y:0,top:0,bottom:0,left:0,right:0,width:0,height:0},this._virtualAnchor={getBoundingClientRect:()=>this._virtualAnchorRect},this.dismissRowTooltip=()=>{clearTimeout(this._hoverTimer),clearTimeout(this._unhoverTimer),this._hoverOpen=!1,this._hoveredTooltip=void 0,this._hoveredAnchor=void 0},this.handleContainerFocus=()=>{this._containerHasFocus=!0,this._focusedItemPath||(this._lastSelectedPath?(this._focusedItemPath=this._lastSelectedPath,this._focusedItemIndex=this.getItemIndex(this._lastSelectedPath)):this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0),this.requestUpdate())},this.handleContainerBlur=()=>{this._containerHasFocus=!1},this.handleFocusIn=e=>{let t=e.target;("GL-ACTION-CHIP"===t.tagName?t:t.closest("gl-action-chip"))&&(this._actionButtonHasFocus=!0)},this.handleFocusOut=e=>{let t=e.target,i=e.relatedTarget,o="GL-ACTION-CHIP"===t.tagName?t:t.closest("gl-action-chip"),r=i?.tagName==="GL-ACTION-CHIP"?i:i?.closest("gl-action-chip");o&&!r&&(this._actionButtonHasFocus=!1)},this.handleKeydown=e=>{if("Tab"===e.key&&e.composedPath().find(e=>"GL-ACTION-CHIP"===e.tagName))if(e.shiftKey){e.preventDefault();let t=this.scrollableRef.value;t&&t.focus()}else{e.preventDefault();let t=document.activeElement;setTimeout(()=>{t&&"function"==typeof t.blur&&t.blur()},0)}},this.handleContainerKeydown=e=>{if(this.treeItems?.length&&!this._actionButtonHasFocus){if("Tab"===e.key&&!e.shiftKey){if(this._focusedItemPath){let t=this.virtualizerRef.value;if(t){let i=[...t.querySelectorAll("gl-tree-item")].find(e=>e.id===`tree-item-${this._focusedItemPath}`);if(i){let t=i.querySelector("gl-action-chip");t&&(e.preventDefault(),e.stopPropagation(),t.focus())}}}return}if("ArrowUp"===e.key&&this.filterable&&0>=this.getCurrentFocusedIndex()){let t=this.renderRoot.querySelector(".filter-input");if(null!=t){e.preventDefault(),e.stopPropagation(),t.focus(),t.select();return}}if(" "===e.key){let t=this.treeItems[this.getCurrentFocusedIndex()];if(t?.branch){e.preventDefault(),e.stopPropagation(),this.handleItemActivation(t);return}}this._collection.handleKeydown(e)&&(e.preventDefault(),e.stopPropagation())}},this.handleFilterInput=e=>{let t=e.target.value;this.dispatchEvent(new CustomEvent("gl-tree-filter-changed",{detail:t,bubbles:!0,composed:!0})),this._filter.setQuery(t,{debounce:!0})},this.handleFilterFocus=()=>{this._filterHasFocus=!0,!this._focusedItemPath&&this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0)},this.handleFilterBlur=()=>{this._filterHasFocus=!1},this.handleFilterKeydown=e=>{if(!this.treeItems?.length)return;let t=this.getCurrentFocusedIndex(),i=t,o=!1;switch(e.key){case"ArrowDown":i=t<0?0:Math.min(t+1,this.treeItems.length-1),o=!0;break;case"ArrowUp":i=t<=0?0:t-1,o=!0;break;case"Home":i=0,o=!0;break;case"End":i=this.treeItems.length-1,o=!0;break;case"Enter":{e.preventDefault(),e.stopPropagation();let i=this.treeItems[t]??this.treeItems[0];this.handleItemActivation(i);return}}o&&(e.preventDefault(),e.stopPropagation(),this.setActiveDescendant(i))},this.toggleSearchBoxFilter=()=>{this.searchBoxFilter=!this.searchBoxFilter,this.dispatchEvent(new CustomEvent("gl-tree-search-box-filter-changed",{detail:this.searchBoxFilter,bubbles:!0,composed:!0})),this.filtered&&this.rebuildFlattenedTree()}}get filterText(){return this._filter.query}set filterText(e){let t=this._filter.query;t!==e&&(this._filter.setQuery(e),this.requestUpdate("filterText",t))}get _lastSelectedPath(){return this._selection.anchorId}set _lastSelectedPath(e){this.multiSelectable||(null==e?this._selection.clear():this._selection.setSingle(e))}get _focusedItemPath(){return this._focus.focusedId}set _focusedItemPath(e){this._focus.setFocusedId(e)}get _focusedItemIndex(){return this._focus.focusedIndex}set _focusedItemIndex(e){this._focus.setFocusedIndex(e)}get _index(){return this._collection.index}get _scroll(){return this._collection.scroll}get _selection(){return this._collection.selection}get _focus(){return this._collection.focus}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.handleKeydown,{capture:!0}),this.addEventListener("focusin",this.handleFocusIn,{capture:!0}),this.addEventListener("focusout",this.handleFocusOut,{capture:!0}),this.addEventListener("mousedown",this.dismissRowTooltip,{capture:!0})}focus(e){if(this.filterable){let t=this.renderRoot.querySelector(".filter-input");if(null!=t)return void t.focus(e)}this.scrollableRef.value?.focus(e)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("keydown",this.handleKeydown,{capture:!0}),this.removeEventListener("focusin",this.handleFocusIn,{capture:!0}),this.removeEventListener("focusout",this.handleFocusOut,{capture:!0}),this.removeEventListener("mousedown",this.dismissRowTooltip,{capture:!0}),this._typeAheadTimer&&(clearTimeout(this._typeAheadTimer),this._typeAheadTimer=void 0),this._typeAheadBuffer=""}set model(e){let t;if(this._model!==e){if(this._model=e,this._filter.terms.length>0&&null!=this._model&&lb(this._model,[...this._filter.terms]),this._nodeMap.clear(),null!=this._model){let e=this._model.length,i=this.filtered&&this.searchBoxFilter&&!this.dimUnmatched;t=[];for(let o=0;o<e;o++)lf(this._model[o],e,o+1,void 0,this._nodeMap,i,t)}if(this.treeItems=t,this.buildPathToIndexMap(),this.focusedPath&&(this._focusedItemPath=this.focusedPath,this._lastSelectedPath=this.focusedPath),this._focusedItemPath){let e=this._index.indexOf(this._focusedItemPath);if(-1!==e)this._focusedItemIndex=e;else{if(this.treeItems?.length){let e=Math.min(this._focusedItemIndex,this.treeItems.length-1);this._focusedItemPath=this.treeItems[Math.max(0,e)].path,this._focusedItemIndex=Math.max(0,e)}else this._focusedItemPath=void 0,this._focusedItemIndex=-1;this._lastSelectedPath&&!this._index.has(this._lastSelectedPath)&&(this._lastSelectedPath=this._focusedItemPath)}}else this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0)}}get model(){return this._model}willUpdate(e){if((e.has("filtered")||e.has("searchBoxFilter")||e.has("dimUnmatched"))&&null!=this._model&&this.rebuildFlattenedTree(),this.focusedPath&&(e.has("focusedPath")||e.has("model"))){let e=this._index.indexOf(this.focusedPath);-1!==e&&(this._focusedItemPath=this.focusedPath,this._focusedItemIndex=e,this._lastSelectedPath=this.focusedPath,this._pendingScrollToIndex=e)}}updated(e){if(super.updated?.(e),null!=this._pendingScrollToIndex){let e=this._pendingScrollToIndex;this._pendingScrollToIndex=void 0,this.scrollToItem(e,!1)}if(e.has("treeItems")){let t=e.get("treeItems");!t?.length&&(this.treeItems?.length??0)>0&&this.kickVirtualizerAfterFirstLayout()}}async kickVirtualizerAfterFirstLayout(){let e=this.virtualizerRef.value;e&&(await e.layoutComplete,this.treeItems?.length&&(this.treeItems=this.treeItems.slice()))}renderIcon(e){if(null==e)return e$;if("string"==typeof e)return ew`<code-icon slot="icon" icon=${e}></code-icon>`;if("status"===e.type)return ew`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`;if("branch"===e.type)return ew`<gl-branch-icon
				slot="icon"
				.status=${e.status}
				.worktree=${e.worktree??!1}
				.hasChanges=${e.hasChanges??!1}
			></gl-branch-icon>`;if("file-icon"===e.type)return ew`<gl-file-icon slot="icon" .filename=${e.filename}></gl-file-icon>`;if("agent"===e.type){let t="working"===e.phase?"sync":"waiting"===e.phase?"warning":"claude",i="working"===e.phase?"spin":void 0;return ew`<code-icon
				slot="icon"
				icon="${t}"
				modifier=${i??e$}
				class="tree-icon-agent tree-icon-agent--${e.phase}"
			></code-icon>`}return e$}renderActions(e){let t=e.actions;return null==t||0===t.length?e$:t.map(t=>ew`<gl-action-chip
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				.altIcon=${t.altIcon}
				.altLabel=${t.altLabel}
				@mouseenter=${()=>this.onSuspendRowTooltip()}
				@mouseleave=${()=>this.onResumeRowTooltip()}
				@click=${i=>this.onTreeItemActionClicked(i,e,t,!1)}
				@dblclick=${i=>this.onTreeItemActionClicked(i,e,t,!0)}
			></gl-action-chip>`)}renderDecorations(e){let t=e.decorations;return null==t||0===t.length?e$:t.map(e=>{let t="before"===e.position?"decorations-before":"decorations-after";if("icon"===e.type)return ew`<code-icon
					slot=${t}
					part=${t}
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`;if("text"===e.type){let i=`decoration-text${e.kind?` decoration-text--${e.kind}`:""}`;return ew`<span
					slot=${t}
					part=${t}
					class=${i}
					aria-label=${e.tooltip??e.label??e$}
					>${e.label}</span
				>`}if("tracking"===e.type)return ew`<gl-tracking-pill
					slot=${t}
					part=${t}
					.ahead=${e.ahead}
					.behind=${e.behind}
					colorized
					outlined
					?missingUpstream=${e.missingUpstream??!1}
				></gl-tracking-pill>`;if("wip"===e.type)return ew`<gl-wip-stats
					slot=${t}
					part=${t}
					badge
					show-clean
					no-tooltip
					.dirty=${e.hasChanges}
					added=${e.added??e$}
					modified=${e.changed??e$}
					removed=${e.deleted??e$}
				></gl-wip-stats>`;if("conflict"===e.type){let i=`conflict-count${e.kind?` conflict-count--${e.kind}`:""}`;return ew`<span
					slot=${t}
					part=${t}
					class=${i}
					aria-label=${e.tooltip??e.label??e$}
					><code-icon icon="warning" size="12"></code-icon>${e.count}</span
				>`}if("agent"===e.type){let i=e.tooltip??e.label;return ew`<gl-tooltip slot=${t} part=${t} placement="top">
					<span class="tree-icon-agent-pair">
						<code-icon
							icon="robot"
							class="tree-icon-agent tree-icon-agent--${e.phase}"
							aria-label=${i??e$}
						></code-icon>
						${"working"===e.phase?ew`<code-icon
									icon="sync"
									modifier="spin"
									class="tree-icon-agent tree-icon-agent--${e.phase}"
									aria-hidden="true"
								></code-icon>`:e$}
					</span>
					<span slot="content">${i}</span>
				</gl-tooltip>`}})}highlightText(e){if(!this.filtered||0===this._filter.terms.length)return e;let t=e.toLowerCase(),i=new Set;for(let e of this._filter.terms){let o=t.indexOf(e);if(-1!==o){for(let t=o;t<o+e.length;t++)i.add(t);continue}let r=lv(t,e);if(null!=r)for(let e of r)i.add(e)}return 0===i.size?e:function(e,t){let i=[],o=0,r=0;for(;r<t.length;){let s=r;for(;s+1<t.length&&t[s+1]===t[s]+1;)s++;let a=t[r],c=t[s]+1;a>o&&i.push(e.substring(o,a)),i.push(ew`<mark>${e.substring(a,c)}</mark>`),o=c,r=s+1}return o<e.length&&i.push(e.substring(o)),i}(e,[...i].sort((e,t)=>e-t))}renderTreeItem(e){let t=this.multiSelectable?this._selection.has(e.path):this._lastSelectedPath===e.path,i=this._focusedItemPath===e.path,o=(this._containerHasFocus||this._filterHasFocus)&&!this._actionButtonHasFocus,r=`tree-item-${e.path}`;return ew`<gl-tree-item
			id=${r}
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.checkableTooltip=${e.checkableTooltip}
			.checkableAltTooltip=${e.checkableAltTooltip}
			.showIcon=${null!=e.icon}
			.matched=${e.matched??!1}
			.selected=${t}
			.focused=${i&&o}
			.focusedInactive=${i&&!o}
			.tabIndex=${-1}
			.vscodeContext=${e.contextData}
			@gl-tree-item-select=${()=>this.onBeforeTreeItemSelected(e)}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
			@mouseenter=${t=>this.onTreeItemHover(t,e)}
			@mouseleave=${()=>this.onTreeItemUnhover()}
			@gl-tree-item-suspend-tooltip=${()=>this.onSuspendRowTooltip()}
			@gl-tree-item-resume-tooltip=${()=>this.onResumeRowTooltip()}
		>
			${this.renderIcon(e.icon)}
			${this.highlightText(e.label)}${o6(null!=e.description,()=>ew`<span slot="description">${this.highlightText(e.description)}</span>`)}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderFilterBar(e){return this.filterable?ew`<div class="filter">
			<div class="filter-field">
				<input
					class="filter-input"
					type="search"
					role="combobox"
					aria-controls="tree-list"
					aria-expanded="true"
					aria-haspopup="tree"
					aria-autocomplete="list"
					aria-activedescendant=${e||e$}
					placeholder="${this.searchBoxFilter?this.filterPlaceholder:this.searchPlaceholder??this.filterPlaceholder}"
					.value=${this._filter.query}
					@input=${this.handleFilterInput}
					@keydown=${this.handleFilterKeydown}
					@focus=${this.handleFilterFocus}
					@blur=${this.handleFilterBlur}
				/>
				<div class="filter-controls">
					<gl-button
						appearance="input"
						role="checkbox"
						aria-checked=${this.searchBoxFilter?"true":"false"}
						tooltip="Filter Results"
						aria-label="Filter Results"
						@click=${this.toggleSearchBoxFilter}
					>
						<code-icon icon="list-filter"></code-icon>
					</gl-button>
				</div>
			</div>
			<slot name="filter-actions"></slot>
		</div>`:e$}render(){let e=!!this.treeItems?.length,t=!e&&this._filter.query&&this._model?.length,i=!e&&!t&&!!this.emptyText;if(!e&&!t&&!i)return e$;let o=this._focusedItemPath?`tree-item-${this._focusedItemPath}`:void 0;return ew`
			${this.renderFilterBar(o)}
			${e?ew`<div
						${o5(this.scrollableRef)}
						id="tree-list"
						class="scrollable"
						tabindex="0"
						role="tree"
						aria-label=${this.ariaLabel}
						aria-multiselectable=${this.multiSelectable?"true":"false"}
						aria-activedescendant=${o||e$}
						@keydown=${this.handleContainerKeydown}
						@focus=${this.handleContainerFocus}
						@blur=${this.handleContainerBlur}
					>
						<lit-virtualizer
							class="scrollable"
							${o5(this.virtualizerRef)}
							.items=${this.treeItems}
							.keyFunction=${e=>e.path}
							.layout=${(0,S.flow)({direction:"vertical"})}
							.renderItem=${e=>this.renderTreeItem(e)}
							scroller
						></lit-virtualizer>
					</div>`:t?ew`<div class="no-results">No results found</div>`:ew`<div class="no-results">${this.emptyText}</div>`}
			${this._hoverOpen&&this._hoveredTooltip?ew`<gl-popover
						class="hover-popover"
						?open=${this._hoverOpen}
						.anchor=${this._hoveredAnchor}
						placement="right-start"
						trigger="manual"
						hoist
						.distance=${12}
					>
						<div slot="content" class="hover-content">
							${"string"==typeof this._hoveredTooltip?ew`<gl-markdown density="compact" .markdown=${this._hoveredTooltip}></gl-markdown>`:this._hoveredTooltip}
						</div>
					</gl-popover>`:e$}
		`}findTreeNode(e){return this._nodeMap.get(e)}getItemIndex(e){return this._index.indexOf(e)}rebuildFlattenedTree(){if(!this._model)return;this._nodeMap.clear();let e=this.filtered&&this.searchBoxFilter&&!this.dimUnmatched,t=this._model.length,i=[];for(let o=0;o<t;o++)lf(this._model[o],t,o+1,void 0,this._nodeMap,e,i);if(this.treeItems=i,this.buildPathToIndexMap(),this._focusedItemPath){let e=this._index.indexOf(this._focusedItemPath);-1!==e?this._focusedItemIndex=e:this.treeItems?.length?(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0):(this._focusedItemPath=void 0,this._focusedItemIndex=-1)}}onBeforeTreeItemSelected(e){if(this._lastSelectedPath!==e.path&&(this._lastSelectedPath=e.path),this._focusedItemPath!==e.path&&(this._focusedItemPath=e.path,this._focusedItemIndex=this.getItemIndex(e.path)),e.branch){let t=this.findTreeNode(e.path);t&&(t.expanded=!t.expanded,this.rebuildFlattenedTree(),this.emit("gl-tree-expansion-changed",{path:e.path,expanded:t.expanded}))}this.requestUpdate()}onTreeItemSelected(e,t){if(e.stopPropagation(),this.multiSelectable&&!t.branch){let i=e.detail;if(i.shiftKey)return void this._selection.selectRange(t.path,{additive:i.ctrlKey||i.metaKey});if(i.ctrlKey||i.metaKey)return void this._selection.toggle(t.path);this._selection.setSingle(t.path)}this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}emitSelectionChanged(){let e=this._selection.selectedIds,t=[],i=[],o=[];for(let r of this.treeItems??[])e.has(r.path)&&(t.push(r.path),i.push(r),o.push(r.context));this.emit("gl-tree-generated-selection-changed",{nodes:i,paths:t,contexts:o,lastPath:this._selection.anchorId})}pruneSelection(){this.multiSelectable&&this._selection.pruneTo(e=>this._index.has(e))}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemHover(e,t){if(!t.tooltip)return void this.onTreeItemUnhover();let i=e.currentTarget;clearTimeout(this._hoverTimer),clearTimeout(this._unhoverTimer);let o=i.getBoundingClientRect(),r=this.tooltipAnchorRight?this.getBoundingClientRect().right:e.clientX,s=this._virtualAnchorRect;(s.x=s.left=s.right=r,s.y=s.top=o.top,s.bottom=o.bottom,s.height=o.height,this._hoveredAnchor=this._virtualAnchor,this._hoveredTooltip=t.tooltip,this._hoverOpen)?this._repositionHoverPopover():this._hoverTimer=setTimeout(()=>{this._hoverOpen=!0},500)}async _repositionHoverPopover(){await this.updateComplete;let e=this.renderRoot?.querySelector("gl-popover.hover-popover"),t=e?.shadowRoot?.querySelector("wa-popup");t?.reposition?.()}onTreeItemUnhover(){clearTimeout(this._hoverTimer),this._unhoverTimer=setTimeout(()=>{this._hoverOpen=!1,this._hoveredTooltip=void 0,this._hoveredAnchor=void 0},100)}onSuspendRowTooltip(){clearTimeout(this._hoverTimer),clearTimeout(this._unhoverTimer),this._hoverOpen=!1}onResumeRowTooltip(){null!=this._hoveredTooltip&&null!=this._hoveredAnchor&&(this._hoverOpen=!0)}onTreeItemActionClicked(e,t,i,o=!1){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:i,dblClick:o,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}getCurrentFocusedIndex(){if(!this.treeItems?.length)return -1;if(this._focusedItemPath){let e=this.getItemIndex(this._focusedItemPath);if(-1!==e)return e}if(this._focusedItemIndex>=0&&this._focusedItemIndex<this.treeItems.length)return this._focusedItemIndex;if(this._lastSelectedPath){let e=this.getItemIndex(this._lastSelectedPath);if(-1!==e)return e}return 0}handleTreeKey(e){let t=this.treeItems;if(null==t||0===t.length)return!1;if("ArrowLeft"===e.key||"ArrowRight"===e.key){let i,o=this.getCurrentFocusedIndex(),r=t[o];if(null==r)return!1;if(this.handleBranchToggle(e,r))return!0;if("ArrowRight"===e.key)i=Math.min(o+1,t.length-1);else if(r.parentPath){let e=this.getItemIndex(r.parentPath);i=-1!==e?e:Math.max(o-1,0)}else i=Math.max(o-1,0);if(this.focusItemAtIndex(i),this.multiSelectable){let o=t[i];null!=o&&!o.branch&&(e.shiftKey?this._selection.selectRange(o.path):e.ctrlKey||e.metaKey||this._selection.setSingle(o.path))}return!0}return!!(!e.ctrlKey&&!e.metaKey&&!e.altKey&&this.isPrintableCharacter(e.key))&&(this.handleTypeAhead(e.key),!0)}handleItemActivation(e){e&&(this.onBeforeTreeItemSelected(e),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),e))}handleBranchToggle(e,t){if(!t?.branch)return!1;let i="ArrowRight"===e.key,o="ArrowLeft"===e.key;if(i&&t.expanded||o&&!t.expanded)return!1;e.preventDefault(),e.stopPropagation();let r=this.findTreeNode(t.path);return!!r&&(r.expanded=!r.expanded,this.rebuildFlattenedTree(),this.emit("gl-tree-expansion-changed",{path:t.path,expanded:r.expanded}),this.requestUpdate(),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),t),!0)}focusItemAtIndex(e){let t=this.treeItems?.[e];t&&(this._focusedItemPath=t.path,this._focusedItemIndex=e,this._lastSelectedPath!==t.path&&(this._lastSelectedPath=t.path),this.requestUpdate(),this.scrollToItem(e))}scrollToItem(e,t=!0){this._scroll.scrollToIndex(e,{restoreFocus:t})}handleTypeAhead(e){this._typeAheadTimer&&clearTimeout(this._typeAheadTimer);let t=!this._typeAheadBuffer;this._typeAheadBuffer+=e.toLowerCase();let i=this.treeItems?.[this._focusedItemIndex],o=i?.label?.toLowerCase().startsWith(this._typeAheadBuffer),r=!1;if(t?r=!0:o||(r=!0),r){let e=this.findNextMatchingItem(this._typeAheadBuffer);-1!==e&&this.focusItemAtIndex(e)}this._typeAheadTimer=window.setTimeout(()=>{this._typeAheadBuffer="",this._typeAheadTimer=void 0},this._typeAheadTimeout)}buildPathToIndexMap(){this._index.rebuild(),this.pruneSelection()}findNextMatchingItem(e){if(!this.treeItems?.length||!e)return -1;let t=e.toLowerCase(),i=this._focusedItemIndex,o=this.treeItems.length;for(let e=1;e<o;e++){let r=(i+e)%o;if(this.treeItems[r].label?.toLowerCase().startsWith(t))return r}return -1}isPrintableCharacter(e){return 1===e.length&&lg.test(e)}setActiveDescendant(e){let t=this.treeItems?.[e];t&&(this._focusedItemPath=t.path,this._focusedItemIndex=e,this._lastSelectedPath!==t.path&&(this._lastSelectedPath=t.path),this.requestUpdate(),this.scrollToItem(e,!1))}};function lf(e,t,i,o,r,s,a){if(s&&!1===e.matched)return a??[];let c=a??[];if(r?.set(e.path,e),c.push({...e,size:t,position:i,parentPath:o}),!1!==e.expanded&&null!=e.children&&e.children.length>0){let t=e.children.length;for(let i=0;i<t;i++)lf(e.children[i],t,i+1,e.path,r,s,c)}return c}function lb(e,t){let i=!1;for(let o of e){let e=(o.label??"").toLowerCase(),r=o.filterText?.toLowerCase(),s=o.description?.toLowerCase(),a=t.every(t=>r?.includes(t)||e.includes(t)||null!=lv(e,t)||s?.includes(t)),c=!1;null!=o.children&&o.children.length>0&&(c=lb(o.children,t)),o.matched=a||c,o.matched&&(i=!0),o.branch&&c&&(o.expanded=!0)}return i}function lv(e,t){let i=[],o=0;for(let r=0;r<e.length&&o<t.length;r++)e[r]===t[o]&&(i.push(r),o++);return o===t.length?i:void 0}lm.styles=[oF,D`
			:host {
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
				overflow: hidden;
			}

			/* Signals "the tree has focus" to descendant gl-tree-item rows (inherits across the shadow
			   boundary). Drives the active-vs-inactive selection background on every selected row —
			   reliable for click-focus, which doesn't surface as a focusin on this host. */
			:host(:focus-within) {
				--gl-tree-focus-within: 1;
			}

			.scrollable {
				flex: 1;
				width: 100%;
				min-height: 0;
				overflow-y: auto;
				overflow-x: visible; /* Allow horizontal overflow for tooltips */
				outline: none;
			}

			.scrollable:focus-within {
				outline: none;
			}

			lit-virtualizer {
				display: block;
				width: 100%;
				height: 100%;
				/* Use layout containment instead of strict to avoid rendering issues */
				/* Removed paint containment to allow tooltips to escape */
				contain: layout;
				/* lit-virtualizer sets an inline min-height based on its initial item-size
				   estimate, which can exceed the scrollable container in small viewports and
				   push scrolling onto the outer .scrollable div instead of the virtualizer's
				   own scroller. Since height: 100% already provides correct sizing from the
				   flex layout, the min-height is always redundant. */
				min-height: 0 !important;
			}

			gl-tree-item {
				width: 100%;
			}

			/* Dim non-matched items when highlighting: either the search box is in highlight mode
			   (search-box-filter absent) or an external source forces dim (dim-unmatched). */
			:host([filtered]:not([search-box-filter])) gl-tree-item:not([matched]),
			:host([filtered][dim-unmatched]) gl-tree-item:not([matched]) {
				opacity: 0.6;
			}

			.filter {
				display: flex;
				align-items: center;
				gap: 0.4rem;
				padding: 0.4rem 0.6rem;
				flex: none;
			}

			.filter-field {
				position: relative;
				flex: 1;
				min-width: 0;
			}

			.filter-input {
				width: 100%;
				height: 2.4rem;
				box-sizing: border-box;
				padding: 0 2rem 0 0.6rem;
				font-family: var(--vscode-font-family);
				font-size: var(--vscode-font-size);
				color: var(--vscode-input-foreground);
				background-color: var(--vscode-input-background);
				border: 1px solid var(--vscode-input-border, transparent);
				border-radius: var(--gl-input-border-radius);
				outline: none;
			}

			.filter-input:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.filter-input::placeholder {
				color: var(--vscode-input-placeholderForeground);
			}

			.filter-input::-webkit-search-cancel-button {
				-webkit-appearance: none;
				cursor: pointer;
				width: 16px;
				height: 16px;
				background-color: var(--vscode-foreground);
				-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z'/%3E%3C/svg%3E");
				-webkit-mask-size: contain;
			}

			.filter-controls {
				position: absolute;
				top: 1px;
				right: 0;
				bottom: 1px;
				display: inline-flex;
				align-items: center;
				gap: 0.1rem;
				padding-right: 0.2rem;
			}

			.filter-controls gl-button {
				--button-line-height: 1;
				--button-input-height: 2rem;
			}

			mark {
				background-color: var(--vscode-editor-findMatchHighlightBackground, rgba(234, 92, 0, 0.33));
				color: inherit;
				border-radius: 1px;
			}

			/* Shared by both the no-data case (emptyText) and the filter-yields-no-matches
			   case ("No results found"); class name dates from the latter. */
			.no-results {
				padding: 1rem;
				color: var(--vscode-descriptionForeground);
				font-style: italic;
				text-align: center;
			}

			.hover-popover {
				pointer-events: none;
				--max-width: min(40rem, 90vw);
			}
			.hover-popover::part(body) {
				box-sizing: border-box;
			}

			.hover-content {
				font-size: 1.2rem;
				line-height: 1.5;
				/* anywhere wraps at any character when forced — avoids the default behavior of
				   breaking paths at hyphens (the worst possible split point). */
				overflow-wrap: anywhere;
			}

			.conflict-count {
				display: inline-flex;
				align-items: center;
				gap: 0.3rem;
				padding: 0 0.6rem;
				height: 1.8rem;
				border-radius: 0.9rem;
				font-size: 1.1rem;
				font-weight: 500;
				border: 1px solid;
			}

			/* Phase-tinted agent icon — pulls from the shared --gl-agent-* palette defined in
			   theme.scss so leaf, tooltip, pill, and details panel all dereference the same set
			   of variables. code-icon's :host inherits color from its parent, so styling the
			   element here flows through to its rendered glyph. */
			code-icon.tree-icon-agent {
				color: var(--gl-agent-idle-color);
			}
			code-icon.tree-icon-agent--working {
				color: var(--gl-agent-working-color);
			}
			code-icon.tree-icon-agent--waiting {
				color: var(--gl-agent-waiting-color);
			}

			/* Pair wrapper for the robot + spinner glyphs so they sit flush as one identity
			   marker. The decoration slot's gap applies between the wrapper and any sibling
			   decoration but not between the icons inside. */
			.tree-icon-agent-pair {
				display: inline-flex;
				align-items: center;
				gap: 0;
			}
		`],lu([eO()],lm.prototype,"treeItems",2),lu([eD({reflect:!0})],lm.prototype,"guides",2),lu([eD({type:Boolean,reflect:!0})],lm.prototype,"filtered",2),lu([eD({type:Boolean,reflect:!0})],lm.prototype,"filterable",2),lu([eD({type:String,attribute:"filter-placeholder"})],lm.prototype,"filterPlaceholder",2),lu([eD({type:String,attribute:"search-placeholder"})],lm.prototype,"searchPlaceholder",2),lu([eD({type:Boolean,attribute:"search-box-filter",reflect:!0})],lm.prototype,"searchBoxFilter",2),lu([eD({type:Boolean,attribute:"dim-unmatched",reflect:!0})],lm.prototype,"dimUnmatched",2),lu([eD({type:String,attribute:"empty-text"})],lm.prototype,"emptyText",2),lu([eD({type:Boolean,attribute:"tooltip-anchor-right"})],lm.prototype,"tooltipAnchorRight",2),lu([eD({type:String,attribute:"filter-text"})],lm.prototype,"filterText",1),lu([eD({type:String,attribute:"aria-label"})],lm.prototype,"ariaLabel",2),lu([eD({type:String,attribute:"focused-path"})],lm.prototype,"focusedPath",2),lu([eO()],lm.prototype,"_containerHasFocus",2),lu([eO()],lm.prototype,"_filterHasFocus",2),lu([eO()],lm.prototype,"_actionButtonHasFocus",2),lu([eO()],lm.prototype,"_hoveredTooltip",2),lu([eO()],lm.prototype,"_hoveredAnchor",2),lu([eO()],lm.prototype,"_hoverOpen",2),lu([eD({type:Boolean,attribute:"multi-selectable"})],lm.prototype,"multiSelectable",2),lu([eD({type:Array,attribute:!1})],lm.prototype,"model",1),lm=lu([eM("gl-tree-view")],lm),Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]),Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let l_="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",ly=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${l_}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${l_}`,graph:`https://gitkraken.com/solutions/commit-graph?${l_}`,launchpad:`https://gitkraken.com/solutions/launchpad?${l_}`,platform:`https://gitkraken.com/devex?${l_}`,pricing:`https://gitkraken.com/gitlens/pricing?${l_}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${l_}`,security:`https://help.gitkraken.com/gitlens/security?${l_}`,workspaces:`https://gitkraken.com/solutions/workspaces?${l_}`,cli:`https://gitkraken.com/cli?${l_}`,browserExtension:`https://gitkraken.com/browser-extension?${l_}`,desktop:`https://gitkraken.com/git-client?${l_}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${l_}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${l_}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${l_}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${l_}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${l_}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${l_}`,helpCenterAiHooks:`https://help.gitkraken.com/cli/cli-home/?${l_}#how-to-uninstall-gitkraken-cli-ai-hooks`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${l_}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${l_}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${l_}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${l_}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${l_}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${l_}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${l_}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${l_}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${l_}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${l_}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${l_}`});function lw(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let lx=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!lx(e))??eC}update(e,t){let i=this._$Cbt,o=i.length;this._$Cbt=t;let r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!lx(a))return this._$Cwt=e,a;e<o&&a===i[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=r.deref();if(void 0!==t){let i=t._$Cbt.indexOf(a);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return eC}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let lk=eF(until_c);var lC=Object.defineProperty,l$=Object.getOwnPropertyDescriptor,lS=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?l$(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&lC(t,i,s),s};let lE=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ew`${lk(this.promoPromise?.then(e=>this.renderPromo(e)),e$)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ew`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ew`<p class="promo" part="text">${rr(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ew`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??e$}"
						>${rr(t.link.html)}</a
					>`}return this.hasPromo=!1,e$}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),lw(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};lE.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lE.styles=[D`
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
				${oO}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],lS([eB('a,button,[tabindex="0"]')],lE.prototype,"_focusable",2),lS([eD({type:Object})],lE.prototype,"promoPromise",2),lS([eD({type:Object})],lE.prototype,"source",2),lS([eD({reflect:!0,type:String})],lE.prototype,"type",2),lS([eD({type:Boolean,reflect:!0,attribute:"has-promo"})],lE.prototype,"hasPromo",1),lE=lS([eM("gl-promo")],lE);var lz=Object.defineProperty,lI=Object.getOwnPropertyDescriptor,lA=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?lI(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&lz(t,i,s),s};let lL=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,!e)switch(this.state){case eK.VerificationRequired:return ew`
					<slot name="feature"></slot>
					<p class="actions-row-center">
						<gl-button
							class="inline"
							href="${lw("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							href="${lw("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<hr />
					<p class="centered">Check your inbox for a verification link, then refresh once you've verified.</p>
				`;case eK.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let i=(new Date(t.at(-1).expiresOn).getTime()-Date.now())/36e5;return t.length<=3&&i>0&&i<24?"active":"expired"}(this.featurePreview))return ew`${this.renderFeaturePreview(this.featurePreview)}`;return ew`<slot name="feature"></slot>
					<p class="centered">
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${ly.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							href="${lw("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${lw("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<hr />
					<p class="centered">
						<a href="${ly.communityVsPro}"
							>Get ${eH("day",14)} of GitLens Pro free</a
						>
						— no credit card required.
					</p>`;case eK.TrialExpired:return ew`<slot name="feature"></slot>
					<p class="centered">
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${ly.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							href="${lw("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<hr />
					<p class="centered">
						Your trial has ended — upgrade to keep ${this.featureWithArticleIfNeeded??"all Pro features"}
						unlocked.
					</p>
					<p class="centered">${this.renderPromo()}</p>`;case eK.TrialReactivationEligible:return ew`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							href="${lw("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<hr />
					<p class="centered">
						Reactivate your Pro trial to experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${eH("day",14)}.
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,i=e.usages.length;return 0===i?ew`<slot name="feature"></slot>
				<p class="actions-row">
					<gl-button href="${this.featurePreviewCommandLink??e$}">Continue</gl-button>
				</p>
				<hr />
				<p class="centered">
					Already have an account?
					<a href="${lw("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					><br />
					${"alert"!==t?ew`<br />`:""}
					<a href="${lw("gitlens.plus.signUp",this.source)}"
						>Want full access to all Pro features? Start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ew`
			${this.renderFeaturePreviewStep(e,i)}
			<p class="actions-row">
				<gl-button class="inline" href="${this.featurePreviewCommandLink??e$}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${lw("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<hr />
			<p class="centered">
				${eH("day",3-i,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on `:""}privately hosted
				repos.<br />
				${"alert"!==t?ew`<br />`:""}
				<a href="${lw("gitlens.plus.signUp",this.source)}"
					>Want full access to all Pro features? Start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ew`<slot name="feature"></slot>`;switch(t){case 1:return ew`<p>Try Commit Search</p>
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
							</p> `;case 2:return ew`
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
						`;default:return ew`<slot name="feature"></slot>`}}renderPromo(){return ew`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"gate")}
			.source=${this.source}
		></gl-promo>`}};lL.styles=[D`
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
		`,rt],lA([eB("gl-button")],lL.prototype,"button",2),lA([eD()],lL.prototype,"appearance",2),lA([eD({type:Object})],lL.prototype,"featurePreview",2),lA([eD()],lL.prototype,"featurePreviewCommandLink",2),lA([eD()],lL.prototype,"featureRestriction",2),lA([eD()],lL.prototype,"featureWithArticleIfNeeded",2),lA([function({context:e,subscribe:t}){return(i,o)=>{"object"==typeof o?o.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{i.set.call(this,e)},subscribe:t})}):i.constructor.addInitializer(i=>{new context_consumer_s(i,{context:e,callback:e=>{i[o]=e},subscribe:t})})}}({context:"promos"})],lL.prototype,"promos",2),lA([eD({type:Object})],lL.prototype,"source",2),lA([eD({attribute:!1,type:Number})],lL.prototype,"state",2),lA([eD()],lL.prototype,"webroot",2),lL=lA([eM("gl-feature-gate-plus-state")],lL);var lP=Object.defineProperty,lT=Object.getOwnPropertyDescriptor,lM=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?lT(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&lP(t,i,s),s};let lR=class extends lit_element_i{constructor(){super(...arguments),this.status="loading",this.compact=!1,this.stale=!1,this.checking=!1}render(){switch(this.status){case"loading":return this.renderLoading();case"upgrade":return this.renderUpgrade();case"error":return this.renderError();case"conflicts":return this.renderConflicts();default:return this.renderClean()}}renderLoading(){return ew`
			<div class="indicator indicator--loading">
				<code-icon class="indicator__icon" icon="loading" modifier="spin" size="16"></code-icon>
				${this.compact?e$:ew`<span class="indicator__content">Detecting Conflicts</span>`}
			</div>
		`}renderStateIcon(e){return this.checking?ew`<code-icon class="indicator__icon" icon="loading" modifier="spin" size="16"></code-icon>`:ew`<code-icon class="indicator__icon" icon="${e}" size="16"></code-icon>`}renderError(){let e=this.result?.status==="error"?this.result.message:"Unable to detect conflicts";return this.compact?ew`
				<gl-popover placement="top" trigger="hover click focus" hoist>
					<div slot="anchor" class="indicator indicator--error" tabindex="0">
						${this.renderStateIcon("error")}
					</div>
					<div slot="content">
						<div class="popover">
							<p class="popover__title">Conflict Detection Unavailable</p>
							<p class="popover__message">${e}</p>
						</div>
					</div>
				</gl-popover>
			`:ew`
			<gl-popover placement="bottom" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--error" tabindex="0">
					${this.renderStateIcon("error")}
					<span class="indicator__content">Conflict Detection Unavailable</span>
				</div>
				<div slot="content">
					<div class="popover">
						<p class="popover__title">Conflict Detection Unavailable</p>
						<p class="popover__message">${e}</p>
					</div>
				</div>
			</gl-popover>
		`}renderClean(){let e=this.stale?"indicator--stale":"";return this.compact?ew`
				<gl-popover placement="top" trigger="hover click focus" hoist>
					<div slot="anchor" class="indicator indicator--clean ${e}" tabindex="0">
						${this.renderStateIcon("pass")}
					</div>
					<div slot="content">
						<div class="popover">
							<p class="popover__title">No Conflicts Detected</p>
							<p class="popover__message">This rebase should complete without conflicts.</p>
							${this.stale?ew`<p class="popover__message popover__message--warning">
										Detection may be stale. Rebase plan was modified after conflict check.
									</p>`:e$}
						</div>
					</div>
				</gl-popover>
			`:ew`
			<gl-popover placement="bottom" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--clean ${e}" tabindex="0">
					${this.renderStateIcon("pass")}
					<span class="indicator__content"
						>${this.checking?"Detecting Conflicts":"No Conflicts Detected"}</span
					>
				</div>
				<div slot="content">
					<div class="popover">
						<p class="popover__title">No Conflicts Detected</p>
						<p class="popover__message">This rebase should complete without conflicts.</p>
						${this.stale?ew`<p class="popover__message popover__message--warning">
									Detection may be stale. Rebase plan was modified after conflict check.
								</p>`:e$}
					</div>
				</div>
			</gl-popover>
		`}renderConflicts(){if(this.result?.status!=="conflicts")return e$;let e=this.stale?"indicator--stale":"",t=this.result.conflict.files,i=t.length;return this.compact?ew`
				<gl-popover placement="top" trigger="hover click focus" hoist>
					<div slot="anchor" class="indicator indicator--conflict ${e}" tabindex="0">
						${this.renderStateIcon("warning")}
					</div>
					<div slot="content">
						<div class="popover">
							<p class="popover__title">Potential Conflicts Detected</p>
							<p class="popover__message">
								This rebase will cause conflicts in ${eH("file",i)}:
							</p>
							<ul class="popover__files scrollable">
								${t.map(e=>ew`<li class="popover__file">${e.path}</li>`)}
							</ul>
							${this.stale?ew`<p class="popover__message popover__message--warning">
										Detection may be stale. Rebase plan was modified after conflict check.
									</p>`:e$}
						</div>
					</div>
				</gl-popover>
			`:ew`
			<gl-popover placement="bottom" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--conflict ${e}" tabindex="0">
					${this.renderStateIcon("warning")}
					<span class="indicator__content"
						>${this.checking?"Detecting Conflicts":ew`${i} Conflict${1===i?"":"s"} Detected`}</span
					>
				</div>
				<div slot="content">
					<div class="popover">
						<p class="popover__title">Potential Conflicts Detected</p>
						<p class="popover__message">
							This rebase will cause conflicts in ${eH("file",i)}:
						</p>
						<ul class="popover__files scrollable">
							${t.map(e=>ew`<li class="popover__file">${e.path}</li>`)}
						</ul>
						${this.stale?ew`<p class="popover__message popover__message--warning">
									Detection may be stale. Rebase plan was modified after conflict check.
								</p>`:e$}
					</div>
				</div>
			</gl-popover>
		`}renderUpgrade(){let e=this.compact?"top":"bottom";return ew`
			<gl-popover placement="${e}" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--upgrade" tabindex="0">
					<code-icon class="indicator__icon" icon="lock" size="16"></code-icon>
					${this.compact?e$:ew`<span class="indicator__content">Conflict Detection (Pro)</span>`}
				</div>
				<gl-feature-gate-plus-state
					slot="content"
					appearance="default"
					featureRestriction="all"
					.source=${{source:"rebaseEditor",detail:"conflict-detection"}}
					.state=${this.subscriptionState}
				>
					<p slot="feature">
						Detect potential conflicts before starting your rebase and take action to resolve them.
					</p>
				</gl-feature-gate-plus-state>
			</gl-popover>
		`}};lR.styles=[oB,oF,D`
			:host {
				display: inline-block;
			}

			gl-popover {
				--max-width: 80vw;
			}

			.indicator {
				position: relative;
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				cursor: pointer;
			}

			/* Compact mode (icon only) */
			:host([compact]) .indicator {
				gap: 0;
			}

			:host([compact]) .indicator__content {
				display: none;
			}

			/* Button mode (full) */
			:host(:not([compact])) .indicator {
				padding: 0.4rem 0.8rem;
				border-radius: 0.3rem;
				background-color: var(--vscode-button-secondaryBackground);
				border: 1px solid var(--vscode-button-secondaryBorder, transparent);
				font-size: 1.2rem;
			}

			.indicator__icon {
				flex: none;
				font-size: 1.6rem;
			}

			.indicator__content {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				font-weight: 500;
			}

			/* Clean state - green */
			.indicator--clean {
				background-color: color-mix(in srgb, var(--vscode-testing-iconPassed) 18%, transparent) !important;
				border: 1px solid color-mix(in srgb, var(--vscode-testing-iconPassed) 50%, transparent) !important;
				color: var(--vscode-foreground);
			}

			.indicator--clean .indicator__icon {
				color: var(--vscode-testing-iconPassed);
			}

			/* Conflict state - warning/orange */
			.indicator--conflict {
				background-color: color-mix(
					in srgb,
					var(--vscode-editorWarning-foreground) 18%,
					transparent
				) !important;
				border: 1px solid color-mix(in srgb, var(--vscode-editorWarning-foreground) 50%, transparent) !important;
				color: var(--vscode-foreground);
			}

			.indicator--conflict .indicator__icon {
				color: var(--vscode-editorWarning-foreground);
			}

			.indicator--upgrade .indicator__icon {
				color: var(--vscode-foreground);
				opacity: 0.6;
			}

			.indicator--stale {
				opacity: 0.6;
			}

			/* Error state - muted warning */
			.indicator--error {
				background-color: color-mix(
					in srgb,
					var(--vscode-editorWarning-foreground) 12%,
					transparent
				) !important;
				border: 1px solid color-mix(in srgb, var(--vscode-editorWarning-foreground) 30%, transparent) !important;
				color: var(--vscode-foreground);
				opacity: 0.8;
			}

			.indicator--error .indicator__icon {
				color: var(--vscode-editorWarning-foreground);
				opacity: 0.7;
			}

			/* Popover content styles */
			.popover {
				padding: 1.2rem;
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			.popover__title {
				font-weight: 600;
				margin: 0;
			}

			.popover__message {
				margin: 0;
			}

			.popover__message--warning {
				color: var(--vscode-editorWarning-foreground);
				font-weight: 500;
			}

			.popover__files {
				margin: 0;
				padding: 0.4rem 0.8rem;
				list-style: none;
				max-height: 20rem;
				overflow-y: auto;
				background: var(--vscode-sideBar-background);
			}

			.popover__file {
				padding: 0.4rem 0;
				font-family: var(--vscode-editor-font-family);
				font-size: 1.1rem;
			}

			gl-feature-gate-plus-state {
				display: block;
				margin-inline: 0.5rem;
				margin-block: -0.5rem;
			}
		`],lM([eD({type:String})],lR.prototype,"status",2),lM([eD({attribute:!1})],lR.prototype,"result",2),lM([eD({attribute:!1})],lR.prototype,"subscriptionState",2),lM([eD({type:Boolean})],lR.prototype,"compact",2),lM([eD({type:Boolean})],lR.prototype,"stale",2),lM([eD({type:Boolean})],lR.prototype,"checking",2),lR=lM([eM("gl-rebase-conflict-indicator")],lR);let lD=new Set(["pick","reword","edit","squash","fixup","drop"]),lO=D`
	:host {
		/* Dark theme action colors */
		--action-edit-color: hsl(120, 100%, 30%);
		--action-edit-bg: hsl(120, 100%, 10%);

		--action-squash-color: hsl(38, 100%, 42%);
		--action-squash-bg: hsl(38, 100%, 10%);

		--action-drop-color: hsl(0, 100%, 40%);
		--action-drop-bg: hsl(0, 100%, 10%);

		/* Muted text intensity */
		--fg-muted-intensity: 60%;

		--muted-opacity: 0.4;

		display: block;
		width: 100%;
		box-sizing: border-box;
		cursor: grab;

		&:hover {
			z-index: 100;
		}
	}

	/* Disable grab cursor when reordering is disabled (preserves merges) */
	:host-context(.preserves-merges) {
		cursor: default;
	}

	/* Light theme overrides */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		/* Brighter, more saturated colors for visibility on light backgrounds */
		--action-edit-color: hsl(130, 100%, 32%);
		--action-edit-bg: hsl(120, 70%, 78%);

		--action-squash-color: hsl(46, 100%, 46%);
		--action-squash-bg: hsl(55, 85%, 70%);

		--action-drop-color: hsl(355, 100%, 40%);
		--action-drop-bg: hsl(355, 80%, 82%);

		--fg-muted-intensity: 70%;
	}

	/* Raise z-index only when overlays are open/hovered/focused to escape row stacking contexts */
	:host:has(gl-select[open]),
	:host:has(gl-popover[open]),
	:host:has(gl-tooltip:hover),
	:host:has(gl-tooltip:focus-within),
	:host:has(gl-avatar-list:hover),
	:host:has(gl-avatar-list:focus-within),
	:host:has(gl-ref-overflow-chip:hover),
	:host:has(gl-ref-overflow-chip:focus-within) {
		z-index: 1000;
	}

	.entry {
		/*
		 * Two-layer foreground color system:
		 * --fg-color: base color that changes per state (hover/focus/selected)
		 * --fg-intensity: caps brightness, action types can reduce (e.g. drop = 50%)
		 * --fg: computed from both, used for primary text
		 * --fg-muted: derived from --fg for secondary text (date, sha)
		 */
		--fg-color: var(--color-foreground);
		--fg-intensity: 100%;
		--fg: color-mix(in srgb, var(--fg-color) var(--fg-intensity), transparent);
		--fg-muted: color-mix(in srgb, var(--fg) var(--fg-muted-intensity), transparent);

		--action-color: var(--color-foreground--65);
		--action-line-color: var(--color-foreground--65);
		--action-text-decoration: none;

		--entry-bg: var(--color-background);

		--wa-form-control-background-color: var(--color-background);
		--wa-form-control-value-color: var(--color-foreground);
		--wa-form-control-value-color-hover: var(--color-foreground);
		--wa-form-control-value-color-disabled: var(--color-foreground);

		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
		padding-inline: 1rem;
		padding-block: var(--gl-rebase-entry-padding-block, 0.2rem);
		border-radius: 0.3rem;
		box-sizing: border-box;
		color: var(--fg);
		width: 100%;

		&:hover {
			--entry-bg: var(--vscode-list-hoverBackground);

			background-color: var(--vscode-list-hoverBackground);
		}

		&:focus,
		&:focus-within {
			background-color: var(--vscode-list-focusBackground);
			box-shadow: 0 0 0 1px var(--vscode-list-focusOutline) inset;
			outline: none;
		}

		&.entry--selected {
			--fg-color: var(--vscode-list-activeSelectionForeground, var(--color-foreground));
			--entry-bg: var(--vscode-list-activeSelectionBackground);

			background-color: var(--vscode-list-activeSelectionBackground);
		}

		&.entry--first {
			.entry-graph::before {
				inset-block: 50% var(--gl-rebase-entry-graph-offset, -0.225rem);
			}
		}

		&.entry--last {
			.entry-graph::before {
				inset-block: var(--gl-rebase-entry-graph-offset, -0.225rem) 50%;
			}
		}

		/* Done entries - already applied commits */
		&.entry--done {
			--fg-intensity: 50%;
			--action-line-color: var(--color-foreground--50);
			/* Override default transparent action color with opaque muted gray for pick */
			--action-color: color-mix(in srgb, var(--color-foreground) 50%, var(--vscode-editor-background));

			background: var(--vscode-list-inactiveSelectionBackground);
			cursor: default;

			/* Filled circle for done entries */
			.entry-graph::after {
				border-color: transparent;
				background-color: var(--action-color);
				background-image: none;
			}

			/* Disabled select for done entries */
			.action-select {
				pointer-events: none;
				opacity: 0.6;

				/* Hide chevron for disabled selects */
				code-icon[slot='expand-icon'] {
					display: none;
				}
			}
		}

		/* Current entry - commit being processed (paused) */
		&.entry--current {
			--fg-intensity: 100%;

			background-color: color-mix(in srgb, var(--current-entry-color) 25%, transparent);
			outline: 1px solid color-mix(in srgb, var(--current-entry-color) 50%, transparent);
			outline-offset: -1px;

			.action-select {
				opacity: 1;
			}
		}

		/* Conflict entry - commit that will cause conflicts */
		&.entry--conflict {
			--fg-intensity: 100%;
			--conflict-color: var(
				--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
				#c74e39
			);

			background-color: color-mix(in srgb, var(--conflict-color) 25%, transparent);
			outline: 1px solid color-mix(in srgb, var(--conflict-color) 50%, transparent);
			outline-offset: -1px;

			.action-select {
				opacity: 1;
			}

			.entry-conflict-indicator {
				display: flex;
			}
		}
	}

	/* Conflict indicator - hidden by default, shown on conflict entries */
	.entry-conflict-indicator {
		display: none;
		align-items: center;
		justify-content: center;
		flex: 0 0 auto;
		padding-inline: 0.4rem;
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor, #c74e39);
	}

	/* Conflict popover content */
	.popover-conflict-header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem;
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor, #c74e39);
		font-weight: 600;

		hr {
			width: 100%;
			border: none;
			border-top: 1px solid var(--color-foreground--25);
			margin: 0.5rem 0;
		}
	}

	/* Graph node */
	.entry-graph {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex: 0 0 auto;
		width: 16px;
		height: var(--gl-rebase-entry-graph-height, 25px);
		z-index: 2;

		/* circle for commits */
		&::after {
			content: '';
			position: absolute;
			left: 0;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			border: 2px solid var(--action-color);
			/* Layer the row tint over an opaque editor base so the dot center always
			   covers the throughline — VS Code list hover/selection tokens are
			   semi-transparent overlays and would otherwise let the line shine through. */
			background-color: var(--vscode-editor-background);
			background-image: linear-gradient(var(--entry-bg), var(--entry-bg));
		}

		/* squircle for commands */
		.entry[data-type='command'] &::after {
			left: -0.2rem;
			width: 16px;
			height: 16px;
			border-radius: 0.4rem;
			z-index: -1;
		}

		/* throughline */
		&::before {
			content: '';
			position: absolute;
			inset-block: calc(-1 * var(--gl-rebase-entry-padding-block, 0.2rem));
			width: 0;
			border-right: 2px solid var(--action-line-color);
			z-index: -2;
		}
	}

	/* Action dropdown container */
	.entry-action {
		display: flex;
		align-items: center;
		flex: 0 0 auto;
	}

	/* Done action indicator - shows the completed action text */
	.entry-action--done {
		display: flex;
		align-items: center;
		min-width: 90px;
		padding-left: 0.75rem;
		font-size: 0.9em;
		color: var(--color-foreground--50);
	}

	.action-select {
		color: var(--color-foreground);
		min-width: 90px;
		/* Reset WA's form-control sizing tokens. WA defaults to padding-block: 0.75em
		   + line-height: 1.35 which produces a ~40px control height. We size the
		   combobox to track the graph dot so the select grows with row density. */
		--wa-form-control-padding-block: 0;
		--wa-form-control-value-line-height: 1.2;

		/* gl-select option styling overrides — wa-option lives in gl-select's shadow
		   root and can't be targeted directly from this scope, so we pass through
		   custom-properties exposed by gl-select itself. */
		--gl-select-option-padding: 0.2rem 0.4rem;
		--gl-select-option-hover-bg: var(--vscode-list-inactiveSelectionBackground);
		--gl-select-option-hover-color: var(--vscode-list-activeSelectionForeground);

		&::part(combobox) {
			padding: 0 0.75rem;
			outline: none;
			height: 25px;
			line-height: 1.2;
		}

		&::part(display-input) {
			field-sizing: content;
			line-height: 1.2;
		}

		&::part(expand-icon) {
			margin-inline-start: var(--wa-spacing-x-small);
		}

		&::part(listbox) {
			display: flex;
			flex-direction: column;
			gap: 0.1rem;
			padding-block: 0.2rem 0;
			min-width: anchor-size(width, 90px);
			width: max-content;
		}
	}

	/* Message */
	gl-popover.entry-message {
		--hide-delay: 100ms;
		--wa-z-index-tooltip: 10000;

		display: flex;
		flex: 1 1 0;
		align-self: stretch;
		min-width: 0;
		overflow: hidden;
		color: var(--fg);
		text-decoration: var(--action-text-decoration);

		/* Tooltip-style behavior: pointer events on the rendered popup pass through,
		   so the hover state ends as soon as the cursor leaves the anchor — matching
		   the file tree hover-popover. The wa-popup's popup part is re-exported from
		   gl-popover as base__popup (see popover.ts exportparts mapping). */
		&::part(base__popup),
		&::part(base__hover-bridge),
		&::part(body) {
			pointer-events: none;
		}

		&::part(body) {
			max-height: 50vh;
			overflow-y: auto;
		}
	}

	.entry-message-content {
		display: flex;
		align-items: center;
		height: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.entry-message-body {
		color: color-mix(in srgb, var(--vscode-descriptionForeground) 75%, transparent);
		margin-left: 1rem;
	}

	/* Update refs */
	.entry-update-refs {
		&:focus,
		&:focus-within {
			outline-color: var(--color-focus-border);
		}

		flex-shrink: 0;
		align-self: center;

		/* Improve chip visibility */
		--vscode-badge-background: var(--vscode-activityBarBadge-background, var(--vscode-badge-background));
		--vscode-badge-foreground: var(--vscode-activityBarBadge-foreground, var(--vscode-badge-foreground));
	}

	/* Avatar */
	.entry-avatar {
		flex: 0 0 auto;
		min-width: 4rem;
		margin: 0;

		gl-avatar-list& {
			--gl-avatar-size: 2.4rem;

			&::part(base) {
				display: flex;
				justify-content: flex-end;
			}
		}
	}

	/* Date */
	.entry-date {
		flex: 0 0 auto;
		min-width: 11ch;
		margin: 0;
		color: var(--fg-muted);
		text-align: right;
		text-decoration: var(--action-text-decoration);
	}

	/* SHA */
	.entry-sha {
		flex: 0 0 auto;
		min-width: 10ch;
		margin: 0;
		color: var(--fg-muted);
		text-decoration: var(--action-text-decoration);

		a {
			color: inherit;
			text-decoration: none;

			&:focus,
			&:focus-visible {
				outline-color: var(--color-focus-border);
			}
		}
	}

	/* ==========================================================================
	   Entry Actions
	   ========================================================================== */

	.entry[data-type='command'] {
		--action-color: var(--color-foreground--50);
		--action-line-color: var(--action-color);

		/* Muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 60%;

		.entry-graph code-icon {
			font-size: 13px;
			color: var(--color-foreground--65);
		}

		.action-select {
			pointer-events: none;

			&::part(combobox) {
				opacity: 0.7;
			}
		}

		.entry-message-content {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 0.9em;
			font-style: italic;

			code {
				display: inline;
				font-family: var(--vscode-editor-font-family, monospace);
				font-style: normal;
				background-color: var(--vscode-textCodeBlock-background, rgba(128, 128, 128, 0.15));
				padding: 0.15rem 0.5rem;
				border-radius: 3px;
				border: 1px solid var(--color-foreground--10);
			}
		}
	}

	.entry[data-type='base'] {
		--action-color: var(--color-foreground--25);
		--action-line-color: var(--color-foreground--25);

		/* Non-interactive - fixed muted color, doesn't respond to states */
		--fg: var(--color-foreground--65);

		background: var(--vscode-list-inactiveSelectionBackground);
		cursor: default;

		/* Filled circle for base entry - mix with background for opaque fill */
		.entry-graph::after {
			border-color: transparent;
			background-color: color-mix(in srgb, var(--color-foreground) 25%, var(--vscode-editor-background));
			background-image: none;
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-action='edit'],
	.entry[data-action='reword'] {
		--action-color: var(--action-edit-color);
		--action-line-color: var(--action-edit-color);

		--wa-form-control-background-color: var(--action-edit-bg);
		--wa-form-control-border-color: var(--action-edit-color);
		--wa-color-focus: var(--action-edit-color);
	}

	.entry[data-action='fixup'],
	.entry[data-action='squash'] {
		--action-color: var(--action-squash-color);
		--action-line-color: var(--action-squash-color);
		--action-text-decoration: line-through;

		--wa-form-control-background-color: var(--action-squash-bg);
		--wa-form-control-border-color: var(--action-squash-color);
		--wa-color-focus: var(--action-squash-color);

		/* Muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 60%;

		/* No circle for squash/fixup */
		.entry-graph::after {
			display: none;
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-action='squash'] {
		.entry-message {
			text-decoration: none;
		}
	}

	.entry[data-action='drop'] {
		--action-color: var(--action-drop-color);
		--action-line-color: var(--action-drop-color);
		--action-text-decoration: line-through;

		--wa-form-control-background-color: var(--action-drop-bg);
		--wa-form-control-border-color: var(--action-drop-color);
		--wa-color-focus: var(--action-drop-color);

		/* More muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 45%;

		/* No circle for drop */
		.entry-graph::after {
			display: none;
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-squashing] {
		--action-line-color: var(--action-squash-color);
	}

	.entry[data-squash-target] {
		--action-color: var(--action-squash-color);

		.entry-graph::after {
			border-color: var(--action-squash-color);
		}

		:host-context(.entries.ascending) & .entry-graph::before {
			border-image: linear-gradient(to bottom, var(--action-line-color) 50%, var(--action-squash-color) 50%) 1;
		}

		:host-context(.entries.descending) & .entry-graph::before {
			border-image: linear-gradient(to bottom, var(--action-squash-color) 50%, var(--action-line-color) 50%) 1;
		}
	}
`;var lj=Object.defineProperty,lB=Object.getOwnPropertyDescriptor,lF=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?lB(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&lj(t,i,s),s};let lq=class extends lit_element_i{render(){return this.name?ew`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?ew`<a href=${this.href} class="avatar" part="avatar">${this.renderContent()}</a>`:ew`<span class="avatar" part="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?ew`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:ew`<slot class="thumb thumb--text"></slot>`}};lq.styles=[D`
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
		`],lF([eD()],lq.prototype,"src",2),lF([eD()],lq.prototype,"name",2),lF([eD()],lq.prototype,"href",2),lq=lF([eM("gl-avatar")],lq);var lN=Object.defineProperty,lU=Object.getOwnPropertyDescriptor,lV=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?lU(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&lN(t,i,s),s};let lH=class extends lit_element_i{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return ew`<gl-avatar-group exportparts="base">${this.renderList()}</gl-avatar-group>`}renderList(){let e=this.avatars.slice(0,this.max),t=this.avatars.slice(this.max);return ew`
			${e.map(e=>ew`<gl-avatar exportparts="avatar" .src=${e.src} .name=${e.name} .href=${e.href}
						>${!e.src?ew`<code-icon icon="account"></code-icon>`:""}</gl-avatar
					>`)}
			${o6(t.length,()=>ew`<gl-popover>
						<gl-avatar exportparts="avatar" slot="anchor" class="overflow"
							>+${t.length}</gl-avatar
						>
						<div slot="content" class="overflow-list">
							${t.map(e=>ew`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}
										>${!e.src?ew`<code-icon icon="account"></code-icon>`:""}</gl-avatar
									>`)}
						</div>
					</gl-popover>`)}
		`}};lV([eD({type:Number})],lH.prototype,"max",2),lV([eD({type:Array})],lH.prototype,"avatars",2),lH=lV([eM("gl-avatar-list")],lH);let lK=class extends lit_element_i{render(){return ew`<div class="avatar-group" part="base"><slot></slot></div>`}};lK.styles=[D`
			.avatar-group {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.avatar-group ::slotted(*:not(:first-child)) {
				margin-left: calc(var(--gl-avatar-size, 1.6rem) * -0.2);
			}

			.avatar-group:focus-within ::slotted(*),
			.avatar-group:hover ::slotted(*) {
				opacity: 0.5;
			}

			.avatar-group:focus-within ::slotted(*:focus),
			.avatar-group:hover ::slotted(*:hover) {
				opacity: 1;
				z-index: var(--gl-avatar-selected-zindex, 1) !important;
			}
		`],lK=lV([eM("gl-avatar-group")],lK);var lW=Object.defineProperty,lG=Object.getOwnPropertyDescriptor,lZ=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?lG(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&lW(t,i,s),s};let lY=class extends lit_element_i{constructor(){super(...arguments),this.icon="git-branch",this.range=!1,this.refs=[]}render(){let{refs:e,icon:t}=this;if(!e?.length)return e$;let[i]=e,o=e.length;if(1===o)return ew`<gl-tooltip .content=${i.name}>
				<span class="chip" tabindex="0">
					<code-icon icon=${i.icon??t}></code-icon>
					<span class="chip__name">${i.name}</span>
				</span>
			</gl-tooltip>`;let r=e.at(-1);return ew`<gl-tooltip>
			<span class="chip chip--range" tabindex="0">
				<span class="chip__label">
					<code-icon icon=${i.icon??t}></code-icon>${i.name}
					${this.range?ew`<span class="chip__ellipsis">...</span>
								<code-icon icon=${r.icon??t}></code-icon>${r.name}`:e$}
				</span>
				<span class="chip__count">+${o}</span>
			</span>
			<div slot="content" class="tooltip-content">
				${this.label?ew`<div class="tooltip-header">${this.label}</div>`:e$}
				<div class="tooltip-list">
					${e.map(e=>ew`
							<div class="tooltip-item">
								<code-icon class="tooltip-item__icon" icon=${e.icon??t}></code-icon>
								<span class="tooltip-item__name">${e.name}</span>
							</div>
						`)}
				</div>
			</div>
		</gl-tooltip>`}};lY.styles=D`
		:host {
			display: inline-flex;
			align-items: center;
			max-width: 100%;

			--color-focus-border: var(--vscode-focusBorder);
		}

		:focus,
		:focus-within {
			outline-color: var(--color-focus-border);
		}

		.chip {
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			padding: 0.1rem 0.4rem;
			border-radius: 0.3rem;
			background-color: var(--vscode-badge-background);
			color: var(--vscode-badge-foreground);
			font-size: 0.85em;
			white-space: nowrap;
			max-width: 100%;
			overflow: hidden;
			opacity: 0.8;
			transition:
				opacity 0.3s ease-in-out,
				color 0.3s ease-in-out;
		}

		.chip:hover,
		.chip:focus {
			color: var(--color-foreground);
			opacity: 1;
		}

		.chip--range {
			cursor: pointer;
		}

		.chip__label {
			flex: 1 1 auto;
			min-width: 0;
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.chip__name {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.chip__ellipsis {
			opacity: 0.8;
			padding: 0 0.4rem;
		}

		.chip__count {
			padding-left: 0.4rem;
			font-weight: 600;
			font-size: 0.85em;
		}

		.chip code-icon {
			flex-shrink: 0;
			font-size: 0.9em;
		}

		/* Tooltip content styles */
		.tooltip-content {
			max-width: 400px;
		}

		.tooltip-header {
			padding-bottom: 0.6rem;
			font-weight: 500;
		}

		.tooltip-list {
			display: flex;
			flex-direction: column;
			gap: 0.2rem;
			max-height: 300px;
			overflow-y: auto;
		}

		.tooltip-item {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.3rem 0.4rem;
			font-size: 0.95em;
			line-height: 1.4;
		}

		.tooltip-item__icon {
			flex-shrink: 0;
			opacity: 0.8;
			font-size: 1.1em;
		}

		.tooltip-item__name {
			flex: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,lZ([eD()],lY.prototype,"icon",2),lZ([eD()],lY.prototype,"label",2),lZ([eD({type:Boolean})],lY.prototype,"range",2),lZ([eD({type:Array})],lY.prototype,"refs",2),lY=lZ([eM("gl-ref-overflow-chip")],lY);let lQ=D`
	:host {
		display: inline-block;
		width: 100%;
	}

	gl-select wa-select {
		width: 100%;
	}

	/* Combobox (the visible select control). Use the WA tokens with VS Code fallbacks
	   so consumers can override --wa-form-control-* on the gl-select host (e.g. for
	   action-state colorization in the rebase editor) and the values cascade in. */
	wa-select::part(combobox) {
		background-color: var(--wa-form-control-background-color, var(--vscode-dropdown-background));
		border: var(--wa-form-control-border-width, 1px) var(--wa-form-control-border-style, solid)
			var(--wa-form-control-border-color, var(--vscode-dropdown-border));
		border-radius: var(--wa-form-control-border-radius, 3px);
		color: var(--wa-form-control-value-color, var(--vscode-dropdown-foreground));
		font-family: var(--vscode-font-family);
		font-size: inherit;
		line-height: 1.35;
		padding: 1px 4px;
		min-height: auto;
	}

	wa-select::part(display-input) {
		field-sizing: content;
		color: var(--wa-form-control-value-color, var(--vscode-dropdown-foreground));
		font-family: var(--vscode-font-family);
		font-size: inherit;
	}

	wa-select::part(expand-icon) {
		margin-inline-start: 0.4rem;
	}

	wa-select:focus-within::part(combobox) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	wa-select[disabled]::part(combobox) {
		background-color: var(--vscode-input-background);
		color: var(--vscode-disabledForeground);
		cursor: not-allowed;
		opacity: 0.6;
	}

	/* Listbox (dropdown menu) */
	wa-select::part(listbox) {
		background-color: var(--vscode-dropdown-background);
		border: 1px solid var(--vscode-dropdown-border);
		border-radius: 3px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		padding: 4px 0;
	}

	/* VS Code-style scrollbar for the listbox (we can't apply class="scrollable",
	   so we style via ::part chained with ::-webkit-scrollbar) */
	wa-select::part(listbox)::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	wa-select::part(listbox)::-webkit-scrollbar-corner {
		background-color: transparent;
	}
	wa-select::part(listbox)::-webkit-scrollbar-thumb {
		background-color: var(--vscode-scrollbarSlider-background);
	}
	wa-select::part(listbox)::-webkit-scrollbar-thumb:hover {
		background-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	wa-select::part(listbox)::-webkit-scrollbar-thumb:active {
		background-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	/* Options — wa-option has no "base" part; the host element IS the styled box.
	   wa-options live inside gl-select's shadow root, so consumer CSS targeting them
	   from outside (e.g. .action-select wa-option { ... }) can't reach them. We expose
	   CSS variables here that consumers override on the gl-select host. */
	wa-option {
		background-color: transparent;
		color: var(--vscode-dropdown-foreground);
		font-family: var(--vscode-font-family);
		font-size: inherit;
		padding: var(--gl-select-option-padding, 4px 8px);
		cursor: pointer;
	}

	wa-option:hover {
		background-color: var(--gl-select-option-hover-bg, var(--vscode-list-hoverBackground));
		color: var(--gl-select-option-hover-color, var(--vscode-list-hoverForeground));
	}

	wa-option:focus {
		background-color: var(--gl-select-option-focus-bg, var(--vscode-list-activeSelectionBackground));
		color: var(--gl-select-option-focus-color, var(--vscode-list-activeSelectionForeground));
	}

	wa-option[aria-selected='true'],
	wa-option[selected] {
		background-color: var(--gl-select-option-selected-bg, var(--vscode-list-activeSelectionBackground));
		color: var(--gl-select-option-selected-color, var(--vscode-list-activeSelectionForeground));
	}

	wa-option[disabled] {
		color: var(--vscode-disabledForeground);
		cursor: not-allowed;
		opacity: 0.6;
	}

	/* Hide the WA built-in checked-icon — we don't use it */
	wa-option::part(checked-icon) {
		display: none;
	}
`;var lX=D`
  :host {
    --tag-max-size: 10ch;
    --show-duration: 100ms;
    --hide-duration: 100ms;
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline-color: var(--wa-color-focus);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) ease;
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding-block: 0.5em;
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`,lJ=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}},l0=[],l1=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}},l2=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},l3=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},l4=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};function l5(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}function l6(e,t){return new Promise(i=>{let o=new AbortController,{signal:r}=o;if(e.classList.contains(t))return;e.classList.add(t);let s=!1,a=()=>{s||(s=!0,e.classList.remove(t),i(),o.abort())};e.addEventListener("animationend",a,{once:!0,signal:r}),e.addEventListener("animationcancel",a,{once:!0,signal:r}),requestAnimationFrame(()=>{s||0!==e.getAnimations().length||a()})})}var l8=D`
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
`,l7=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},l9=class extends rk{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new l7))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[{observedAttributes:["custom-error"],checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let i of t.observedAttributes)e.add(i);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")||e.has("defaultValue")){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let i of e)t.append(this.name,i);this.setValue(t,t)}}else this.setValue(e,e)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(e),this.updateValidity()}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],i=e[1],o=e[2];o||(o=this.validationTarget),this.internals.setValidity(t,i,o||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&i),this.customStates.set("user-valid",t&&i)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,"restore"===t&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,i]=e;this.internals.setFormValue(t,i)}get allValidators(){return[...this.constructor.validators||[],...this.validators||[]]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate)return void this.resetValidity();let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},i=this.validationTarget||this.input||void 0,o="";for(let i of e){let{isValid:e,message:r,invalidKeys:s}=i.checkValidity(this);!e&&(o||(o=r),s?.length>=0&&s.forEach(e=>t[e]=!0))}o||(o=this.validationMessage),this.setValidity(t,o,i)}};l9.formAssociated=!0,ry([eD({reflect:!0})],l9.prototype,"name",2),ry([eD({type:Boolean})],l9.prototype,"disabled",2),ry([eD({state:!0,attribute:!1})],l9.prototype,"valueHasChanged",2),ry([eD({state:!0,attribute:!1})],l9.prototype,"hasInteracted",2),ry([eD({attribute:"custom-error",reflect:!0})],l9.prototype,"customError",2),ry([eD({attribute:!1,state:!0,type:Object})],l9.prototype,"validity",1);var ce={small:"s",medium:"m",large:"l"},ct=new Set;function ci(e,t){t in ce&&!ct.has(`${e}:${t}`)&&ct.add(`${e}:${t}`)}var co=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return!!this.host.childNodes&&[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===Node.ELEMENT_NODE){if("wa-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}},cr=D`
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
`;function cs(e,t){let i={waitUntilFirstUpdate:!1,...t};return(t,o)=>{let{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let r=e.get(t),s=this[t];r!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,s)}}),r.call(this,e)}}}var cn=class extends l9{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.cachedOptions=null,this.hasSlotController=new co(this,"hint","label"),this.localize=new rf(this),this.selectionOrder=new Map,this.typeToSelectString="",this.slotChangePending=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="m",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>ew`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${e.value}
          @wa-remove=${t=>this.handleTagRemove(t,e)}
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,i=null!==t.closest('[part~="clear-button"]'),o=null!==t.closest("wa-button");if(!i&&!o){if("Escape"===e.key&&this.open&&l0.length>0&&l0[l0.length-1]===this&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===e.key||" "===e.key&&""===this.typeToSelectString)return(e.preventDefault(),e.stopImmediatePropagation(),this.open)?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.getAllOptions(),i=t.indexOf(this.currentOption),o=Math.max(0,i);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===e.key?(o=i+1)>t.length-1&&(o=0):"ArrowUp"===e.key?(o=i-1)<0&&(o=t.length-1):"Home"===e.key?o=0:"End"===e.key&&(o=t.length-1),this.setCurrentOption(t[o])}if(e.key?.length===1||"Backspace"===e.key){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if("Backspace"===e.key)return;this.show()}for(let i of(e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===e.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase(),t))if(i.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[((e={})=>{let{validationElement:t,validationProperty:i}=e;t||(t=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");let o={observedAttributes:["required"],message:t.validationMessage,checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]};return e.required??e.hasAttribute("required")?(e[i]||(t.message="function"==typeof o.message?o.message(e):o.message||"",t.isValid=!1,t.invalidKeys.push("valueMissing")),t):t}};return o})({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(e,t){return null==e&&null==t||null!=e&&null!=t&&e.length===t.length&&e.every((e,i)=>e===t[i])}convertDefaultValue(e){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),null==e||Array.isArray(e)||(e=[e]);let i=this._value;this._value=e??null,this.rawValuesEqual(i,this._value)||(this.valueHasChanged=!0,this.requestUpdate("value",t))}get value(){let e=this._value??this.defaultValue??null;null!=e&&(e=Array.isArray(e)?e:[e]),this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return null!=e&&(t=e.filter(e=>this.optionValues.has(e)),t=(t=this.multiple?t:t[0])??null),t}handleSizeChange(){ci(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute("selected")||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),l0.push(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown);for(let e=l0.length-1;e>=0;e--)if(l0[e]===this){l0.splice(e,1);break}this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&"wa-button"===e.tagName.toLowerCase());this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,null!==this.value&&(this.displayLabel="",this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new lJ),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest("wa-option");t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange()),this.cachedOptions=null;let e=this.getAllOptions();this.updateDefaultValue();let t=this.value;if(null==t||!this.valueHasChanged&&!this.hasInteracted)return void this.selectionChanged();Array.isArray(t)||(t=[t]);let i=e.filter(e=>t.includes(e.value));this.setSelectedOptions(i)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let i=t;if(!i){let t=e.target.closest("wa-tag[data-value]");if(t){let e=t.dataset.value;i=this.selectedOptions.find(t=>t.value===e)}}i&&(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll("wa-option")],this.cachedOptions):[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}))}setSelectedOptions(e){let t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(e=>{i.includes(e)||(e.selected=!1)}),i.length&&i.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){!0===t||!1===t?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,i=Array.isArray(t)?t:[t];return e.hasAttribute("selected")||e.defaultSelected||e.selected||i?.includes(e.value)}return e.selected}),t=new Set(e.map(e=>e.value));for(let e of this.selectionOrder.keys())t.has(e)||this.selectionOrder.delete(e);let i=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let t of e)this.selectionOrder.has(t.value)||this.selectionOrder.set(t.value,i++);this.selectedOptions=e.sort((e,t)=>(this.selectionOrder.get(e.value)??0)-(this.selectionOrder.get(t.value)??0));let o=new Set(this.selectedOptions.map(e=>e.value));if(o.size>0||this._value){let e=this._value;if(null==this._value){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...o),this.requestUpdate("value",e)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let e=this.selectedOptions[0];this.displayLabel=e?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(e,t);return i?"string"==typeof i?rr(i):i:null}return t===this.maxOptionsVisible?ew`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `:null})}updated(e){super.updated(e),(e.has("value")||e.has("displayLabel"))&&this.customStates.set("blank",!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],i=e.filter(e=>t.includes(e.value));this.setSelectedOptions(i),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new l1;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await l6(this.popup.popup,"show"),this.currentOption&&function(e,t,i="vertical",o="smooth"){let r={top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)},s=r.top+t.scrollTop,a=r.left+t.scrollLeft,c=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,p=t.scrollTop,u=t.scrollTop+t.offsetHeight;("horizontal"===i||"both"===i)&&(a<c?t.scrollTo({left:a,behavior:o}):a+e.clientWidth>h&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:o})),("vertical"===i||"both"===i)&&(s<p?t.scrollTo({top:s,behavior:o}):s+e.clientHeight>u&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:o}))}(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new l4)}else{let e=new l2;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await l6(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new l3)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,l5(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,l5(this,"wa-after-hide")}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){let e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=!!this.label||!!e,o=!!this.hint||!!t,r=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return ew`
      <div
        part="form-control"
        class=${sC({"form-control":!0,"form-control-has-label":i})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${sC({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${sC({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?ew`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${r?ew`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${sC({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};cn.css=[lX,l8,cr],ry([eB(".select")],cn.prototype,"popup",2),ry([eB(".combobox")],cn.prototype,"combobox",2),ry([eB(".display-input")],cn.prototype,"displayInput",2),ry([eB(".value-input")],cn.prototype,"valueInput",2),ry([eB(".listbox")],cn.prototype,"listbox",2),ry([eO()],cn.prototype,"displayLabel",2),ry([eO()],cn.prototype,"currentOption",2),ry([eO()],cn.prototype,"selectedOptions",2),ry([eD({reflect:!0})],cn.prototype,"name",2),ry([eD({attribute:!1})],cn.prototype,"defaultValue",1),ry([eD({attribute:"value",reflect:!1})],cn.prototype,"value",1),ry([eD({reflect:!0})],cn.prototype,"size",2),ry([cs("size")],cn.prototype,"handleSizeChange",1),ry([eD()],cn.prototype,"placeholder",2),ry([eD({type:Boolean,reflect:!0})],cn.prototype,"multiple",2),ry([eD({attribute:"max-options-visible",type:Number})],cn.prototype,"maxOptionsVisible",2),ry([eD({type:Boolean})],cn.prototype,"disabled",2),ry([eD({attribute:"with-clear",type:Boolean})],cn.prototype,"withClear",2),ry([eD({type:Boolean,reflect:!0})],cn.prototype,"open",2),ry([eD({reflect:!0})],cn.prototype,"appearance",2),ry([eD({type:Boolean,reflect:!0})],cn.prototype,"pill",2),ry([eD()],cn.prototype,"label",2),ry([eD({reflect:!0})],cn.prototype,"placement",2),ry([eD({attribute:"hint"})],cn.prototype,"hint",2),ry([eD({attribute:"with-label",type:Boolean})],cn.prototype,"withLabel",2),ry([eD({attribute:"with-hint",type:Boolean})],cn.prototype,"withHint",2),ry([eD({type:Boolean,reflect:!0})],cn.prototype,"required",2),ry([eD({attribute:!1})],cn.prototype,"getTag",2),ry([cs("disabled",{waitUntilFirstUpdate:!0})],cn.prototype,"handleDisabledChange",1),ry([cs("value",{waitUntilFirstUpdate:!0})],cn.prototype,"handleValueChange",1),ry([cs("open",{waitUntilFirstUpdate:!0})],cn.prototype,"handleOpenChange",1),cn=ry([eM("wa-select")],cn),cn.disableWarning?.("change-in-update");var ca=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},cl=D`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`,cc=D`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`,ch=class extends rk{constructor(){super(...arguments),this.localize=new rf(this),this.variant="neutral",this.appearance="filled-outlined",this.size="m",this.pill=!1,this.withRemove=!1}handleSizeChange(){ci(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new ca)}render(){return ew`
      <slot part="content" class="content"></slot>

      ${this.withRemove?ew`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};ch.css=[cl,cc,cr],ry([eD({reflect:!0})],ch.prototype,"variant",2),ry([eD({reflect:!0})],ch.prototype,"appearance",2),ry([eD({reflect:!0})],ch.prototype,"size",2),ry([cs("size")],ch.prototype,"handleSizeChange",1),ry([eD({type:Boolean,reflect:!0})],ch.prototype,"pill",2),ry([eD({attribute:"with-remove",type:Boolean})],ch.prototype,"withRemove",2),ch=ry([eM("wa-tag")],ch);var cd=D`
  :host {
    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    line-height: var(--wa-line-height-condensed);
    transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
    opacity: 1;
  }

  :host(:state(disabled)) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,cp=class extends rk{constructor(){super(...arguments),this.localize=new rf(this),this.cachedDefaultLabel="",this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.handleHover=e=>{"mouseenter"===e.type?this.customStates.set("hover",!0):"mouseleave"===e.type&&this.customStates.set("hover",!1)}}set label(e){let t=this._label;this._label=e||"",this._label!==t&&this.requestUpdate("label",t)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.isDefaultLabelDirty=!0,this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{let e=this.closest("wa-select");e&&e.handleDefaultSlotChange()}),customElements.whenDefined("wa-combobox").then(()=>{let e=this.closest("wa-combobox");e&&e.handleDefaultSlotChange()})):this.isInitialized=!0}willUpdate(e){if(e.has("defaultSelected")&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}super.willUpdate(e)}updated(e){super.updated(e),e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected)),e.has("value")&&("string"!=typeof this.value&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has("current")&&this.customStates.set("current",this.current)}firstUpdated(e){if(super.firstUpdated(e),this.selected&&!this.defaultSelected){let e=this.closest("wa-select, wa-combobox");e&&!e.hasInteracted&&e.selectionChanged?.()}}updateDefaultLabel(){let e=this.cachedDefaultLabel;this.cachedDefaultLabel=(function e(t,i=0){if(!t||!globalThis.Node)return"";if("function"==typeof t[Symbol.iterator])return(Array.isArray(t)?t:[...t]).map(t=>e(t,--i)).join("");if(t.nodeType===Node.TEXT_NODE)return t.textContent??"";if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("slot")||t.matches("style, script"))return"";if(t instanceof HTMLSlotElement){let o=t.assignedNodes({flatten:!0});if(o.length>0)return e(o,--i)}return i>-1?e(t,--i):t.textContent??""}return t.hasChildNodes()?e(t.childNodes,--i):""})(this).trim(),this.isDefaultLabelDirty=!1;let t=this.cachedDefaultLabel!==e;return!this._label&&t&&this.requestUpdate("label",e),t}render(){return ew`
      ${this.selected?ew`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:ew`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};cp.css=cd,ry([eB(".label")],cp.prototype,"defaultSlot",2),ry([eO()],cp.prototype,"current",2),ry([eD({reflect:!0})],cp.prototype,"value",2),ry([eD({type:Boolean})],cp.prototype,"disabled",2),ry([eD({type:Boolean,attribute:!1})],cp.prototype,"selected",2),ry([eD({type:Boolean,attribute:"selected"})],cp.prototype,"defaultSelected",2),ry([eD()],cp.prototype,"label",1),cp=ry([eM("wa-option")],cp);var cu=D`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;let cg=Symbol.for(""),cm=e=>{if(e?.r===cg)return e?._$litStatic$},cf=(e,...t)=>({_$litStatic$:t.reduce((t,i,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:cg}),cb=new Map,cv=e=>(t,...i)=>{let o,r,s=i.length,a=[],c=[],h,p=0,u=!1;for(;p<s;){for(h=t[p];p<s&&void 0!==(o=cm(r=i[p]));)h+=o+t[++p],u=!0;p!==s&&c.push(r),a.push(h),p++}if(p===s&&a.push(t[s]),u){let e=a.join("$$lit$$");void 0===(t=cb.get(e))&&(a.raw=a,cb.set(e,t=a)),i=c}return e(t,...i)},c_=cv(ew);cv(ex),cv(ek);var cy=class extends l9{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new co(this,"[default]","start","end"),this.localize=new rf(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,{checkValidity(e){let t=e.input,i={message:"",isValid:!0,invalidKeys:[]};if(!t)return i;let o=!0;if("checkValidity"in t&&(o=t.checkValidity()),o)return i;if(i.isValid=!1,"validationMessage"in t&&(i.message=t.validationMessage),!("validity"in t))return i.invalidKeys.push("customError"),i;for(let e in t.validity)"valid"!==e&&t.validity[e]&&i.invalidKeys.push(e);return i}}]}handleSizeChange(){ci(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement("button");for(let t of this.attributes)"style"!==t.name&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position="absolute !important",e.style.width="0 !important",e.style.height="0 !important",e.style.clipPath="inset(50%) !important",e.style.overflow="hidden !important",e.style.whiteSpace="nowrap !important",this.name&&(e.name=this.name),e.value=this.value||"",e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if("submit"!==this.type&&"reset"!==this.type||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new l7)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,i=!1,o=!1,r=!1;[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE?"wa-icon"===e.localName?(i=!0,t||(t=void 0!==e.label)):r=!0:e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||"").length>0&&(o=!0)}),this.isIconButton=i&&!o&&!r,this.customStates.set("icon-button",this.isIconButton),this.isIconButton}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?cf`a`:cf`button`;return c_`
      <${t}
        part="base"
        class=${sC({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:"rtl"===this.localize.dir(),"has-label":this.hasSlotController.test("[default]"),"has-start":this.hasUpdated?this.hasSlotController.test("start"):this.withStart,"has-end":this.hasUpdated?this.hasSlotController.test("end"):this.withEnd,"is-icon-button":this.isIconButton})}
        ?disabled=${(e?void 0:this.disabled)??e$}
        type=${(e?void 0:this.type)??e$}
        title=${this.title}
        name=${(e?void 0:this.name)??e$}
        value=${(e?void 0:this.value)??e$}
        href=${(e?this.href:void 0)??e$}
        target=${(e?this.target:void 0)??e$}
        download=${(e?this.download:void 0)??e$}
        rel=${(e&&this.rel?this.rel:void 0)??e$}
        role=${(e?void 0:"button")??e$}
        aria-disabled=${(e&&this.disabled?"true":void 0)??e$}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?c_`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?c_`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};cy.shadowRootOptions={...l9.shadowRootOptions,delegatesFocus:!0},cy.css=[cu,cc,cr],ry([eB(".button")],cy.prototype,"button",2),ry([eB("slot:not([name])")],cy.prototype,"labelSlot",2),ry([eO()],cy.prototype,"invalid",2),ry([eO()],cy.prototype,"isIconButton",2),ry([eD()],cy.prototype,"title",2),ry([eD({reflect:!0})],cy.prototype,"variant",2),ry([eD({reflect:!0})],cy.prototype,"appearance",2),ry([eD({reflect:!0})],cy.prototype,"size",2),ry([cs("size")],cy.prototype,"handleSizeChange",1),ry([eD({attribute:"with-caret",type:Boolean,reflect:!0})],cy.prototype,"withCaret",2),ry([eD({attribute:"with-start",type:Boolean})],cy.prototype,"withStart",2),ry([eD({attribute:"with-end",type:Boolean})],cy.prototype,"withEnd",2),ry([eD({type:Boolean})],cy.prototype,"disabled",2),ry([eD({type:Boolean,reflect:!0})],cy.prototype,"loading",2),ry([eD({type:Boolean,reflect:!0})],cy.prototype,"pill",2),ry([eD()],cy.prototype,"type",2),ry([eD({reflect:!0})],cy.prototype,"name",2),ry([eD({reflect:!0})],cy.prototype,"value",2),ry([eD({reflect:!0})],cy.prototype,"href",2),ry([eD()],cy.prototype,"target",2),ry([eD()],cy.prototype,"rel",2),ry([eD()],cy.prototype,"download",2),ry([eD({attribute:"formaction"})],cy.prototype,"formAction",2),ry([eD({attribute:"formenctype"})],cy.prototype,"formEnctype",2),ry([eD({attribute:"formmethod"})],cy.prototype,"formMethod",2),ry([eD({attribute:"formnovalidate",type:Boolean})],cy.prototype,"formNoValidate",2),ry([eD({attribute:"formtarget"})],cy.prototype,"formTarget",2),ry([cs("disabled",{waitUntilFirstUpdate:!0})],cy.prototype,"handleDisabledChange",1),ry([cs("href")],cy.prototype,"handleHrefChange",1),ry([cs("loading",{waitUntilFirstUpdate:!0})],cy.prototype,"handleLoadingChange",1),cy=ry([eM("wa-button")],cy),cy.disableWarning?.("change-in-update");var cw=D`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`,cx=class extends rk{constructor(){super(...arguments),this.localize=new rf(this)}render(){return ew`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};cx.css=cw,cx=ry([eM("wa-spinner")],cx);var ck=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},cC=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}},c$=D`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
      transform: rotate(18deg);
    }
    16% {
      transform: rotate(-22deg);
    }
    20% {
      transform: rotate(22deg);
    }
    32% {
      transform: rotate(-12deg);
    }
    36% {
      transform: rotate(12deg);
    }
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,cS={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},cE="",cz="7.2.0",cI=[{name:"default",resolver:(e,t="classic",i="solid")=>(function(e,t,i){let o,r=(o="solid","chisel"===t&&(o="chisel-regular"),"etch"===t&&(o="etch-solid"),"graphite"===t&&(o="graphite-thin"),"jelly"===t&&(o="jelly-regular","duo-regular"===i&&(o="jelly-duo-regular"),"fill-regular"===i&&(o="jelly-fill-regular")),"jelly-duo"===t&&(o="jelly-duo-regular"),"jelly-fill"===t&&(o="jelly-fill-regular"),"notdog"===t&&("solid"===i&&(o="notdog-solid"),"duo-solid"===i&&(o="notdog-duo-solid")),"notdog-duo"===t&&(o="notdog-duo-solid"),"slab"===t&&(("solid"===i||"regular"===i)&&(o="slab-regular"),"press-regular"===i&&(o="slab-press-regular")),"slab-press"===t&&(o="slab-press-regular"),"thumbprint"===t&&(o="thumbprint-light"),"utility"===t&&(o="utility-semibold"),"utility-duo"===t&&(o="utility-duo-semibold"),"utility-fill"===t&&(o="utility-fill-semibold"),"whiteboard"===t&&(o="whiteboard-semibold"),"classic"===t&&("thin"===i&&(o="thin"),"light"===i&&(o="light"),"regular"===i&&(o="regular"),"solid"===i&&(o="solid")),"duotone"===t&&("thin"===i&&(o="duotone-thin"),"light"===i&&(o="duotone-light"),"regular"===i&&(o="duotone-regular"),"solid"===i&&(o="duotone")),"sharp"===t&&("thin"===i&&(o="sharp-thin"),"light"===i&&(o="sharp-light"),"regular"===i&&(o="sharp-regular"),"solid"===i&&(o="sharp-solid")),"sharp-duotone"===t&&("thin"===i&&(o="sharp-duotone-thin"),"light"===i&&(o="sharp-duotone-light"),"regular"===i&&(o="sharp-duotone-regular"),"solid"===i&&(o="sharp-duotone-solid")),"brands"===t&&(o="brands"),o),s="".replace(/\/$/,"");if(s)return`${s}/${r}/${e}.svg`;let a=function(){if(!cE){let e=document.querySelector("[data-fa-kit-code]");e&&(cE=e.getAttribute("data-fa-kit-code")||"")}return cE}();return a.length>0?`https://ka-p.fontawesome.com/releases/v${cz}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${cz}/svgs/${r}/${e}.svg`})(e,t,i),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute("data-duotone-initialized")){let{family:i,variant:o}=t;if("duotone"===i||"sharp-duotone"===i||"notdog-duo"===i||"notdog"===i&&"duo-solid"===o||"jelly-duo"===i||"jelly"===i&&"duo-regular"===o||"utility-duo"===i||"thumbprint"===i){let i=[...e.querySelectorAll("path")],o=i.find(e=>!e.hasAttribute("opacity")),r=i.find(e=>e.hasAttribute("opacity"));if(!o||!r)return;if(o.setAttribute("data-duotone-primary",""),r.setAttribute("data-duotone-secondary",""),t.swapOpacity&&o&&r){let e=r.getAttribute("opacity")||"0.4";o.style.setProperty("--path-opacity",e),r.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},{name:"system",resolver:(e,t="classic",i="solid")=>{let o=cS[i][e]??cS.regular[e]??cS.regular["circle-question"];if(o)return`data:image/svg+xml,${encodeURIComponent(o)}`;return""}}],cA=[];function cL(e){return cI.find(t=>t.name===e)}function cP(e,t){var i;i=e,cI=cI.filter(e=>e.name!==i),cI.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),cA.forEach(t=>{t.library===e&&t.setIcon()})}var cT=Symbol(),cM=Symbol(),cR=new Map,cD=class extends rk{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(e,t)=>{let i;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ew`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let i=this.shadowRoot.querySelector("[part='svg']");return"function"==typeof t.mutator&&t.mutator(i,this),this.svg}try{if(!(i=await fetch(e,{mode:"cors"})).ok)return 410===i.status?cT:cM}catch{return cM}try{let e=document.createElement("div");e.innerHTML=await i.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!=="svg")return cT;w||(w=new DOMParser);let o=w.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");if(!o)return cT;return o.part.add("svg"),document.adoptNode(o)}catch{return cT}}}connectedCallback(){super.connectedCallback(),cA.push(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,cA=cA.filter(t=>t!==e)}async getIconSource(){let e=cL(this.library),t=this.family||"classic";if(this.name&&e){let i;try{i=await e.resolver(this.name,t,this.variant,this.autoWidth)}catch{i=void 0}return{url:i,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),i=t?cL(this.library):void 0;if(!e){this.svg=null;return}let o=cR.get(e);o||(o=this.resolveIcon(e,i),cR.set(e,o));let r=await o;if(r===cM&&cR.delete(e),e===(await this.getIconSource()).url){let e;if(void 0===e?void 0!==r?._$litType$:r?._$litType$===e){this.svg=r;return}switch(r){case cM:case cT:this.svg=null,this.dispatchEvent(new ck);break;default:this.svg=r.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new cC)}}}updated(e){super.updated(e);let t=cL(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let i=this.shadowRoot?.querySelector("svg");i&&t?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:ew`<svg part="svg" width="16" height="16"></svg>`}};cD.css=c$,ry([eO()],cD.prototype,"svg",2),ry([eD({reflect:!0})],cD.prototype,"name",2),ry([eD({reflect:!0})],cD.prototype,"family",2),ry([eD({reflect:!0})],cD.prototype,"variant",2),ry([eD({attribute:"auto-width",type:Boolean,reflect:!0})],cD.prototype,"autoWidth",2),ry([eD({attribute:"swap-opacity",type:Boolean,reflect:!0})],cD.prototype,"swapOpacity",2),ry([eD()],cD.prototype,"src",2),ry([eD()],cD.prototype,"label",2),ry([eD({reflect:!0})],cD.prototype,"library",2),ry([eD({type:Number,reflect:!0})],cD.prototype,"rotate",2),ry([eD({type:String,reflect:!0})],cD.prototype,"flip",2),ry([eD({type:String,reflect:!0})],cD.prototype,"animation",2),ry([cs("label")],cD.prototype,"handleLabelChange",1),ry([cs(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],cD.prototype,"setIcon",1),cD=ry([eM("wa-icon")],cD);cP("default",{resolver:()=>""}),cP("system",{resolver:()=>""});var cO=Object.defineProperty,cj=Object.getOwnPropertyDescriptor,cB=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?cj(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&cO(t,i,s),s};let cF=class extends lit_element_i{constructor(){super(...arguments),this.value="",this.disabled=!1,this.options=[],this.hoist=!1,this.size="medium"}handleChange(e){let t=e.target;e.stopPropagation(),this.value=t.value;let i=new CustomEvent("gl-change-value",{detail:{value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(i);let o=new Event("change",{bubbles:!0,composed:!0});this.dispatchEvent(o)}render(){return ew`
			<wa-select
				exportparts="combobox, display-input, expand-icon, listbox"
				value=${this.value}
				?disabled=${this.disabled}
				placeholder=${this.placeholder??e$}
				size=${this.size}
				@change=${this.handleChange}
			>
				<code-icon icon="chevron-down" slot="expand-icon"></code-icon>
				${this.options.map(e=>ew`
						<wa-option value=${e.value} ?disabled=${e.disabled??!1}>
							${e.label}
						</wa-option>
					`)}
				<slot></slot>
			</wa-select>
		`}focus(e){this.selectElement?.focus(e)}blur(){this.selectElement?.blur()}async show(){await this.selectElement?.show()}async hide(){await this.selectElement?.hide()}};cF.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cF.styles=lQ,cB([eB("wa-select")],cF.prototype,"selectElement",2),cB([eD({type:String})],cF.prototype,"value",2),cB([eD({type:Boolean,reflect:!0})],cF.prototype,"disabled",2),cB([eD({type:String})],cF.prototype,"placeholder",2),cB([eD({type:Array})],cF.prototype,"options",2),cB([eD({type:Boolean})],cF.prototype,"hoist",2),cB([eD({type:String})],cF.prototype,"size",2),cF=cB([eM("gl-select")],cF);var cq=Object.defineProperty,cN=Object.getOwnPropertyDescriptor,cU=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?cN(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&cq(t,i,s),s};let cV=[...lD.values()],cH=cV.filter(e=>"squash"!==e&&"fixup"!==e),cK={break:"debug-pause",exec:"terminal",noop:"circle-slash"},cW={break:"Will pause the rebase here",exec:"Will run",noop:"No operation"},cG=class extends lit_element_i{constructor(){super(...arguments),this.revealLocation="graph",this.isBase=!1,this.isCurrent=!1,this.isDone=!1,this.isSquashTarget=!1,this.isOldest=!1,this.isFirst=!1,this.isLast=!1,this.isSelected=!1,this.isSquashing=!1,this.hasConflict=!1,this.onActionChanged=e=>{if(!eZ(this.entry))return;let t=e.target.value;this.dispatchEvent(new CustomEvent("action-changed",{detail:{sha:this.entry.sha,action:t},bubbles:!0,composed:!0}))},this.onClick=e=>{e.target.closest("gl-select, a, button")||(e.currentTarget?.focus(),this.dispatchEvent(new CustomEvent("entry-select",{detail:{id:this.entry.id,sha:eZ(this.entry)?this.entry.sha:void 0,ctrlKey:e.ctrlKey||e.metaKey,shiftKey:e.shiftKey},bubbles:!0,composed:!0})))},this.onDoubleClick=e=>{!eZ(this.entry)||e.target.closest("gl-select, a, button")||this.dispatchRevealCommit()},this.onShaClick=e=>{e.preventDefault(),eZ(this.entry)&&this.dispatchRevealCommit()}}connectedCallback(){super.connectedCallback?.(),this.isBase||this.isDone||this.setAttribute("draggable","true")}get availableActions(){return this.isOldest?cH:cV}dispatchRevealCommit(){eZ(this.entry)&&this.dispatchEvent(new CustomEvent("gl-reveal-commit",{detail:{sha:this.entry.sha},bubbles:!0,composed:!0}))}render(){return eZ(this.entry)?this.renderCommitEntry():this.renderCommandEntry()}renderCommitEntry(){if(!eZ(this.entry))return e$;let{authors:e,entry:{action:t,commit:i,message:o,updateRefs:r,sha:s},isBase:a,isCurrent:c,isDone:h}=this;i||this.emitMissingCommit(s);let p=i&&e?.[i.author],u=i&&e?.[i.committer],g=i?.message??o,m="commit";a?m="base":h&&(m="done");let f=`${t}, ${g}, ${s.substring(0,7)}`;return ew`
			<div
				role="listitem"
				aria-label=${f}
				class=${sC({entry:!0,"entry--first":this.isFirst,"entry--last":this.isLast,"entry--selected":!a&&!h&&this.isSelected,"entry--done":h,"entry--current":c,"entry--conflict":this.hasConflict})}
				data-type="${m}"
				data-action=${t}
				data-squashing=${(!!this.isSquashing||void 0)??e$}
				data-squash-target=${(!!this.isSquashTarget||void 0)??e$}
				tabindex="0"
				@click=${this.onClick}
				@dblclick=${this.onDoubleClick}
			>
				<span class="entry-graph" aria-hidden="true"></span>

				${!a?ew`<div class="entry-action">
							<gl-select
								class="action-select"
								value=${t}
								.options=${this.availableActions.map(e=>({value:e,label:e}))}
								@change=${this.onActionChanged}
								?disabled=${h}
							></gl-select>
						</div>`:e$}
				<gl-popover class="entry-message" hoist placement="bottom-start" trigger="hover">
					<span slot="anchor" class="entry-message-content">${this.renderMessage(g)}</span>
					<span slot="content"
						>${this.hasConflict?ew`<span class="popover-conflict-header">
									<code-icon icon="warning"></code-icon>
									This commit will cause conflicts
									<hr />
								</span>`:e$}${this.renderPopoverMessage(g)}</span
					>
				</gl-popover>
				${!a&&r?.length?this.renderUpdateRefBadges(r):e$}
				${this.renderAvatar(p,u)}
				${i?.formattedDate?ew`<gl-tooltip class="entry-date" hide-on-click .content=${i.date??""}>
							<span class="entry-date-content">${i.formattedDate}</span>
						</gl-tooltip>`:e$}

				<gl-tooltip
					class="entry-sha"
					hide-on-click
					content=${"graph"===this.revealLocation?"Open in Commit Graph":"Open in Inspect View"}
				>
					<a href="#" class="entry-sha-link" @click=${this.onShaClick}>
						<code-icon icon="git-commit"></code-icon>
						<span class="entry-sha-content">${s.substring(0,7)}</span>
					</a>
				</gl-tooltip>

				<gl-tooltip class="entry-conflict-indicator" content="This commit will cause conflicts">
					<code-icon icon="warning"></code-icon>
				</gl-tooltip>
			</div>
		`}renderCommandEntry(){if("command"!==this.entry.type)return e$;let{action:e,command:t}=this.entry,i=cK[e]??"circle-outline",o=cW[e],r=t?`${e} ${t}`:e;return ew`
			<div
				role="listitem"
				aria-label=${r}
				class=${sC({entry:!0,"entry--first":this.isFirst,"entry--last":this.isLast,"entry--selected":this.isSelected})}
				tabindex="0"
				data-type="command"
				data-action=${e}
				data-squashing=${(!!this.isSquashing||void 0)??e$}
				@click=${this.onClick}
			>
				<span class="entry-graph" aria-hidden="true">
					<code-icon icon=${i}></code-icon>
				</span>

				<div class="entry-action">
					<gl-select
						class="action-select"
						value=${e}
						.options=${[{value:e,label:e}]}
						disabled
					></gl-select>
				</div>

				${"exec"===e&&t?ew`<gl-tooltip class="entry-message" hide-on-click placement="bottom-start" .content=${t}
							><span class="entry-message-content"
								>${o} <code>${t}</code></span
							></gl-tooltip
						>`:o?ew`<span class="entry-message"
								><span class="entry-message-content">${o}</span></span
							>`:e$}
			</div>
		`}renderUpdateRefBadges(e){let t=e.map(e=>({name:e.ref}));return ew`<gl-ref-overflow-chip
			class="entry-update-refs"
			.refs=${t}
			icon="git-branch"
			label="Branches to update"
		></gl-ref-overflow-chip>`}renderMessage(e){if(!e)return e$;let{summary:t,body:i}=function(e){if(!e)return{summary:""};let t=e.trim(),i=t.indexOf(`
`);return i<0?{summary:t}:{summary:t.substring(0,i),body:t.substring(i+1).trim()}}(e);return i?ew`<gl-markdown .markdown=${t} inline></gl-markdown
			><span class="entry-message-body"><gl-markdown .markdown=${i} inline></gl-markdown></span>`:ew`<gl-markdown .markdown=${t} inline></gl-markdown>`}renderPopoverMessage(e){return e?ew`<gl-markdown .markdown=${e}></gl-markdown>`:e$}renderAvatar(e,t){if(!e)return e$;!e.avatarUrl&&e.email&&this.emitMissingAvatar(e.email);let i=[{name:t?.author!==e.author?`${e.author} (Author)`:e.author,src:e.avatarUrl??e.avatarFallbackUrl}];return t&&t.author!==e.author&&(!t.avatarUrl&&t.email&&this.emitMissingAvatar(t.email),i.push({name:`${t.author} (Committer)`,src:t.avatarUrl??t.avatarFallbackUrl})),ew`<gl-avatar-list class="entry-avatar" .avatars=${i} max="2"></gl-avatar-list>`}emitMissingAvatar(e){eZ(this.entry)&&this.dispatchEvent(new CustomEvent("missing-avatar",{detail:{email:e,sha:this.entry.sha},bubbles:!0,composed:!0}))}emitMissingCommit(e){this.dispatchEvent(new CustomEvent("missing-commit",{detail:{sha:e},bubbles:!0,composed:!0}))}};cG.styles=[lO],cU([eB(".action-select")],cG.prototype,"_actionSelect",2),cU([eD({type:Object,hasChanged:(e,t)=>e!==t&&(!e||!t||e.id!==t.id||e.action!==t.action||e.commit!==t.commit)})],cG.prototype,"entry",2),cU([eD({type:Object})],cG.prototype,"authors",2),cU([eD({type:String})],cG.prototype,"revealLocation",2),cU([eD({type:Boolean,reflect:!0})],cG.prototype,"isBase",2),cU([eD({type:Boolean,reflect:!0})],cG.prototype,"isCurrent",2),cU([eD({type:Boolean,reflect:!0})],cG.prototype,"isDone",2),cU([eD({type:Boolean})],cG.prototype,"isSquashTarget",2),cU([eD({type:Boolean})],cG.prototype,"isOldest",2),cU([eD({type:Boolean})],cG.prototype,"isFirst",2),cU([eD({type:Boolean})],cG.prototype,"isLast",2),cU([eD({type:Boolean})],cG.prototype,"isSelected",2),cU([eD({type:Boolean})],cG.prototype,"isSquashing",2),cU([eD({type:Boolean})],cG.prototype,"hasConflict",2),cG=cU([eM("gl-rebase-entry")],cG);let cZ=D`
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
`;var cY=Object.defineProperty,cQ=Object.getOwnPropertyDescriptor,cX=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?cQ(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&cY(t,i,s),s};let cJ=class extends lit_element_i{constructor(){super(...arguments),this.display="solid",this.dismissible=!1,this.layout="default"}get classNames(){return{banner:!0,[`banner--${this.display}`]:!0,[`banner--${this.layout}`]:"default"!==this.layout}}render(){return ew`<div part="base" class=${sC(this.classNames)}>
			<div class="banner__content">
				${"responsive"===this.layout?this.renderResponsiveContent():this.renderDefaultContent()}
			</div>
			${"responsive"!==this.layout?this.renderDismissButton():void 0}
		</div>`}renderDefaultContent(){return ew`${this.renderTitle()} ${this.renderBody()} ${this.renderButtons()}`}renderResponsiveContent(){return ew`
			<div class="banner__text">${this.renderTitle()} ${this.renderBody()}</div>
			${this.renderButtons()} ${this.renderDismissButton()}
		`}renderTitle(){if(this.bannerTitle)return ew`<div class="banner__title">${this.bannerTitle}</div>`}renderBody(){if(this.body)return ew`<div class="banner__body">${rr(this.body)}</div>`}renderButtons(){let e=this.renderPrimaryButton(),t=this.renderSecondaryButton();if(e||t)return ew`<div class="banner__buttons">${e} ${t}</div>`}renderPrimaryButton(){if(this.primaryButton)return ew`
			<gl-button
				class="banner__button banner__button--primary"
				appearance=${"gradient-purple"===this.display?"secondary":void 0}
				?full=${"gradient-purple"===this.display}
				href=${this.primaryButtonHref??e$}
				truncate
				@click=${this.onPrimaryButtonClick}
			>
				${this.primaryButton}
			</gl-button>
		`}renderSecondaryButton(){if(this.secondaryButton)return ew`
			<gl-button
				class="banner__button banner__button--secondary"
				appearance="toolbar"
				href=${this.secondaryButtonHref??e$}
				@click=${this.onSecondaryButtonClick}
			>
				${this.secondaryButton}
			</gl-button>
		`}renderDismissButton(){if(this.dismissible)return ew`
			<gl-button
				class="banner__dismiss"
				appearance="toolbar"
				href=${this.dismissHref??e$}
				aria-label="Dismiss"
				tooltip="Dismiss"
				@click=${this.onDismissClick}
			>
				<code-icon icon="close"></code-icon>
			</gl-button>
		`}onPrimaryButtonClick(e){this.primaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-primary-click",{detail:{command:this.primaryButtonCommand},bubbles:!0,composed:!0}))}onSecondaryButtonClick(e){this.secondaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-secondary-click",{detail:{command:this.secondaryButtonCommand},bubbles:!0,composed:!0}))}onDismissClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-dismiss",{bubbles:!0,composed:!0}))}};cJ.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cJ.styles=[cZ],cX([eD({reflect:!0})],cJ.prototype,"display",2),cX([eD({attribute:"banner-title"})],cJ.prototype,"bannerTitle",2),cX([eD()],cJ.prototype,"body",2),cX([eD({attribute:"primary-button"})],cJ.prototype,"primaryButton",2),cX([eD({attribute:"primary-button-href"})],cJ.prototype,"primaryButtonHref",2),cX([eD({attribute:"primary-button-command"})],cJ.prototype,"primaryButtonCommand",2),cX([eD({attribute:"secondary-button"})],cJ.prototype,"secondaryButton",2),cX([eD({attribute:"secondary-button-href"})],cJ.prototype,"secondaryButtonHref",2),cX([eD({attribute:"secondary-button-command"})],cJ.prototype,"secondaryButtonCommand",2),cX([eD({type:Boolean,attribute:"dismissible"})],cJ.prototype,"dismissible",2),cX([eD({attribute:"dismiss-href"})],cJ.prototype,"dismissHref",2),cX([eD({attribute:"layout"})],cJ.prototype,"layout",2),cJ=cX([eM("gl-banner")],cJ);let c0=D`
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
`;var c1=Object.defineProperty,c2=Object.getOwnPropertyDescriptor,c3=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?c2(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&c1(t,i,s),s};let c4=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this.indeterminate=!1,this._clickAlt=!1,this._modifiers=new ModifierKeysController(this),this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleClick(e){this._clickAlt=e.altKey}handleChange(e){let t=e.target.checked,i=this._clickAlt||this._modifiers.altKey;this.indeterminate&&i&&(t=!1,e.target.checked=!1),this._clickAlt=!1,this.checked=t,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("gl-change-value"))}renderCheck(){return ew`<code-icon icon=${this.indeterminate?"dash":"check"}></code-icon>`}render(){return ew`<label ?aria-disabled=${this.disabled}
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
		</label>`}};c4.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},c4.styles=[c0],c3([eD({type:Boolean,reflect:!0})],c4.prototype,"disabled",2),c3([eD({type:String})],c4.prototype,"value",2),c3([eD({type:Boolean})],c4.prototype,"defaultChecked",1),c3([eD({type:Boolean,reflect:!0})],c4.prototype,"checked",2),c3([eD({type:Boolean,reflect:!0})],c4.prototype,"indeterminate",2),c4=c3([eM("gl-checkbox")],c4);let c5="0000000000000000000000000000000000000000:",c6=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,c8=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,c7=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,c9=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,he=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,ht=/^(.*?)([\^@~:].*)?$/,hi=/^[0]{40}(?:[\^@~:]\S*)?:?$/,ho=/^[0]{40}([\^@~]\S*)?:$/;function hr(e,t){return!!t&&e.test(t)}function hs(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===c5||!t&&hr(hi,e)}function hn(e,t=!1){return e===c5||!t&&hr(ho,e)}var ha=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,hc=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?hl(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&ha(t,i,s),s};let hh="gl-copy-container",hd=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3,this._isMouseDown=!1,this.onMouseDown=()=>{this._isMouseDown=!0,window.addEventListener("mouseup",()=>this._isMouseDown=!1,{once:!0})},this.onFocusIn=()=>{this._isMouseDown||this.tooltip?.show()},this.onFocusOut=()=>{this.tooltip?.hide()}}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel,this.addEventListener("mousedown",this.onMouseDown),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut)}willUpdate(e){e.has("copyLabel")&&null==this._resetTimer&&(this.label=this.copyLabel)}disconnectedCallback(){this.cancelResetTimer(),this.removeEventListener("mousedown",this.onMouseDown),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut),super.disconnectedCallback?.()}render(){return this.content||this.disabled?ew`<gl-tooltip
			tabindex="0"
			.content="${this.label}"
			placement="${this.placement??e$}"
			@click=${this.onClick}
			@keydown=${this.onKeydown}
		>
			<slot></slot>
		</gl-tooltip>`:e$}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer(),await this.updateComplete,await this.tooltip?.updateComplete,this.tooltip?.show()}onKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onClick(e))}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};hd.tagName=hh,hd.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},hd.styles=D`
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
	`,hc([eD({reflect:!0})],hd.prototype,"appearance",2),hc([eD({reflect:!1})],hd.prototype,"content",2),hc([eD()],hd.prototype,"copyLabel",2),hc([eD()],hd.prototype,"copiedLabel",2),hc([eD({type:Boolean,reflect:!0})],hd.prototype,"disabled",2),hc([eD()],hd.prototype,"placement",2),hc([eD({type:Number})],hd.prototype,"timeout",2),hc([eO()],hd.prototype,"label",2),hc([eB("gl-tooltip")],hd.prototype,"tooltip",2),hd=hc([eM(hh)],hd);var hp=Object.defineProperty,hu=Object.getOwnPropertyDescriptor,hg=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?hu(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&hp(t,i,s),s};let hm=D`
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
`,hf=class extends lit_element_i{constructor(){super(...arguments),this.icon="git-commit",this.size=12}get label(){return function(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(hs(e))return hn(e)?t?.strings?.uncommittedStaged??"Index":t?.strings?.uncommitted??"Working Tree";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return c8.test(e);case"qualified-double-dot":return c7.test(e);case"qualified-triple-dot":return c9.test(e);default:return c6.test(e)}}(e)||!hr(he,e))return e;let i=ht.exec(e);if(null!=i){let[,e,t]=i;if(null!=t)return`${e.substring(0,7)}${t}`}return e.substring(0,7)}(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){if(null==this.sha)return e$;if(!this.sha||hs(this.sha)){let e=hn(this.sha)?"check":"pencil";return ew`<code-icon part="icon" class="icon" icon="${e}" size="${this.size}"></code-icon
				><span part="label" class="label--uncommitted">${this.label}</span>`}return ew`<code-icon part="icon" class="icon" icon="${this.icon}" size="${this.size}"></code-icon
			><span part="label">${this.label}</span>`}};hf.styles=hm,hg([eD({type:String})],hf.prototype,"sha",2),hg([eD({type:String})],hf.prototype,"icon",2),hg([eD({type:Number})],hf.prototype,"size",2),hf=hg([eM("gl-commit-sha")],hf);let hb=class extends lit_element_i{constructor(){super(...arguments),this.icon="git-commit",this.size=12,this.copyLabel="Copy",this.copiedLabel="Copied!",this.tooltipPlacement="top"}render(){return null==this.sha?e$:!this.sha||hs(this.sha)?ew`<gl-commit-sha .sha=${this.sha} .icon=${this.icon} .size=${this.size}></gl-commit-sha>`:ew`<gl-copy-container
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
		</gl-copy-container>`}};hb.styles=[hm,D`
			:host(:focus) {
				outline: none;
			}
		`],hg([eD({type:String})],hb.prototype,"sha",2),hg([eD({type:String})],hb.prototype,"icon",2),hg([eD({type:Number})],hb.prototype,"size",2),hg([eD({reflect:!0})],hb.prototype,"appearance",2),hg([eD({type:String,attribute:"copy-label"})],hb.prototype,"copyLabel",2),hg([eD({type:String,attribute:"copied-label"})],hb.prototype,"copiedLabel",2),hg([eD({type:String,attribute:"tooltip-placement"})],hb.prototype,"tooltipPlacement",2),hb=hg([eM("gl-commit-sha-copy")],hb);var hv=Object.defineProperty,h_=Object.getOwnPropertyDescriptor,hy=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?h_(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&hv(t,i,s),s};let hw=class extends lit_element_i{constructor(){super(...arguments),this._open=!1,this.confirm="Confirm",this.cancel="Cancel",this.initialFocus="confirm",this.placement="top-end",this.icon="warning",this.showIcon=!0}render(){return ew`
			<gl-popover
				placement=${this.placement}
				trigger="click"
				hoist
				@keydown=${this.onKeydown}
				@gl-popover-show=${this.onPopoverShow}
				@gl-popover-after-show=${this.onPopoverAfterShow}
				@gl-popover-hide=${this.onPopoverHide}
			>
				<slot name="anchor" slot="anchor"></slot>
				<div slot="content" class="confirm-popover" role="alertdialog" aria-labelledby="confirm-title">
					<div class="confirm-popover__header">
						${this.showIcon?ew`<slot name="icon">
									<code-icon class="confirm-popover__icon" icon=${this.icon}></code-icon>
								</slot>`:e$}
						<h4 id="confirm-title" class="confirm-popover__title">${this.heading}</h4>
					</div>
					${this.message?ew`<p class="confirm-popover__message">${rr(this.message)}</p>`:e$}
					<div class="confirm-popover__actions">
						<gl-button
							class="cancel-button"
							tabindex=${"cancel"===this.initialFocus?1:2}
							appearance="secondary"
							@click=${e=>this.onCancel(e)}
							>${this.cancel}</gl-button
						>
						<gl-button
							class="confirm-button"
							appearance=${this.confirmAppearance??e$}
							variant=${this.confirmVariant??e$}
							tabindex=${"confirm"===this.initialFocus?1:2}
							@click=${e=>this.onConfirm(e)}
							>${this.confirm}</gl-button
						>
					</div>
				</div>
			</gl-popover>
		`}onPopoverShow(){this._open=!0,this.setAnchorTooltipsDisabled(!0)}onPopoverAfterShow(){requestAnimationFrame(()=>{"cancel"===this.initialFocus?this._cancelButton?.focus():this._confirmButton?.focus()})}onPopoverHide(){this._open=!1,this.setAnchorTooltipsDisabled(!1)}setAnchorTooltipsDisabled(e){for(let t of this.querySelectorAll('[slot="anchor"]'))t.querySelectorAll("gl-tooltip").forEach(t=>t.disabled=e),t.shadowRoot?.querySelectorAll("gl-tooltip").forEach(t=>t.disabled=e)}onKeydown(e){if("Enter"===e.key||" "===e.key){let t=e.target;t.closest(".cancel-button")?(e.preventDefault(),e.stopPropagation(),this.onCancel()):t.closest(".confirm-button")&&(e.preventDefault(),e.stopPropagation(),this.onConfirm())}}onConfirm(e){e?.stopPropagation(),this.hide(),this.dispatchEvent(new CustomEvent("gl-confirm",{bubbles:!0,composed:!0}))}onCancel(e){e?.stopPropagation(),this.hide(),this.dispatchEvent(new CustomEvent("gl-cancel",{bubbles:!0,composed:!0}))}show(){return this._popover?.show()}hide(){return this._popover?.hide()}};hw.styles=[oB,D`
			:host {
				display: contents;
				--warning-color: var(--vscode-editorWarning-foreground, #cca700);
				--wa-tooltip-border-radius: 0.8rem;
			}

			.confirm-popover {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				max-width: 28rem;
				padding: 0.6rem 0.4rem;
			}

			.confirm-popover__header {
				display: flex;
				align-items: flex-start;
				gap: 0.6rem;
			}

			.confirm-popover__icon {
				flex: 0 0 auto;
				color: var(--warning-color);
			}

			.confirm-popover__title {
				margin: 0;
				font-weight: 600;
				font-size: 1.3rem;
				line-height: 1.4;
			}

			.confirm-popover__message {
				margin: 0;
				color: var(--color-foreground--75, inherit);
				line-height: 1.4;
			}

			.confirm-popover__actions {
				display: flex;
				justify-content: flex-end;
				gap: 0.8rem;
				margin-top: 0.4rem;
			}
		`],hy([eB("gl-popover")],hw.prototype,"_popover",2),hy([eB(".confirm-button")],hw.prototype,"_confirmButton",2),hy([eB(".cancel-button")],hw.prototype,"_cancelButton",2),hy([eO()],hw.prototype,"_open",2),hy([eD()],hw.prototype,"heading",2),hy([eD()],hw.prototype,"message",2),hy([eD()],hw.prototype,"confirm",2),hy([eD({attribute:"confirm-appearance"})],hw.prototype,"confirmAppearance",2),hy([eD({attribute:"confirm-variant"})],hw.prototype,"confirmVariant",2),hy([eD()],hw.prototype,"cancel",2),hy([eD({attribute:"initial-focus"})],hw.prototype,"initialFocus",2),hy([eD()],hw.prototype,"placement",2),hy([eD()],hw.prototype,"icon",2),hy([eD({type:Boolean,attribute:"show-icon"})],hw.prototype,"showIcon",2),hw=hy([eM("gl-popover-confirm")],hw);let hx=D`
	:host {
		display: grid;
		grid-template-columns:
			var(
				--gl-split-panel-start-size,
				min(var(--_start-size, 0%), calc(100% - var(--gl-split-panel-divider-width, 4px)))
			)
			var(--gl-split-panel-divider-width, 4px) 1fr;
		grid-template-rows: 1fr;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	:host([orientation='vertical']) {
		grid-template-columns: 1fr;
		grid-template-rows:
			var(
				--gl-split-panel-start-size,
				min(var(--_start-size, 0%), calc(100% - var(--gl-split-panel-divider-width, 4px)))
			)
			var(--gl-split-panel-divider-width, 4px) 1fr;
	}

	/* :host { display: grid } overrides the UA [hidden] rule; re-assert it. */
	:host([hidden]) {
		display: none;
	}

	:host([dragging]) {
		user-select: none;
	}

	/*
	 * min-width / min-height must be 0 on the slotted grid items themselves.
	 * Grid items default to min-*: auto (intrinsic content size), which prevents
	 * them from shrinking in a single frame when the container narrows — causing
	 * visible multi-frame "catch-up" jank during parent panel resizes. Targeting
	 * the <slot> elements directly doesn't work because slots default to
	 * display: contents and have no box.
	 */
	::slotted(*) {
		height: 100%;
		min-width: 0;
		min-height: 0;
	}

	.divider {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		cursor: ew-resize;
		touch-action: none;
		background-color: transparent;
		transition: background-color 0.1s ease-out;
		z-index: 1;
	}

	:host([orientation='vertical']) .divider {
		cursor: ns-resize;
	}

	.divider:focus {
		outline: none;
	}

	.divider:focus-visible {
		background-color: var(--vscode-focusBorder);
	}

	.divider:hover {
		transition-delay: 0.2s;
		background-color: var(--vscode-sash-hoverBorder, var(--vscode-focusBorder));
	}

	:host([dragging]) .divider,
	.divider:active {
		background-color: var(--vscode-sash-hoverBorder, var(--vscode-focusBorder));
	}

	/* Invisible hit area extending beyond the divider for easier grabbing */
	.divider::after {
		display: block;
		content: '';
		position: absolute;
		height: 100%;
		left: calc(var(--gl-split-panel-divider-hit-area, 8px) / -2 + var(--gl-split-panel-divider-width, 4px) / 2);
		width: var(--gl-split-panel-divider-hit-area, 8px);
	}

	:host([orientation='vertical']) .divider::after {
		width: 100%;
		height: var(--gl-split-panel-divider-hit-area, 8px);
		left: 0;
		top: calc(var(--gl-split-panel-divider-hit-area, 8px) / -2 + var(--gl-split-panel-divider-width, 4px) / 2);
	}

	@media (forced-colors: active) {
		.divider {
			outline: solid 1px transparent;
		}
	}

	/*
	 * Overlay mode — start panel floats over the end panel instead of redistributing space.
	 * Drag/snap/percentage math is unchanged; only the layout switches from grid to absolute
	 * positioning. The end panel always fills the container; the start panel is sized via the
	 * same --_start-size custom property the grid track would have used.
	 */
	:host([mode='overlay']) {
		display: block;
		position: relative;
		grid-template-columns: unset;
		grid-template-rows: unset;
	}

	:host([mode='overlay']) ::slotted([slot='start']) {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: var(--_start-size, 0%);
		max-width: 100%;
		z-index: 2;
		box-shadow: 0 0 0.5rem var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
		transition: width 0.08s ease-out;
	}

	:host([mode='overlay'][dragging]) ::slotted([slot='start']) {
		transition: none;
	}

	:host([mode='overlay']) ::slotted([slot='end']) {
		position: absolute;
		inset: 0;
		width: 100%;
	}

	:host([mode='overlay']) .divider {
		position: absolute;
		/* Sit flush against the panel's right edge — not centered on the boundary like split
		   mode — so the visible divider stays entirely outside the floating panel.
		   The ::after hit area still extends 2px into the panel, keeping it grabbable. */
		left: var(--_start-size, 0%);
		top: 0;
		bottom: 0;
		width: var(--gl-split-panel-divider-width, 4px);
		height: auto;
		z-index: 3;
		transition:
			background-color 0.1s ease-out,
			left 0.08s ease-out;
	}

	:host([mode='overlay'][dragging]) .divider {
		transition: none;
	}
`;var hk=Object.defineProperty,hC=Object.getOwnPropertyDescriptor,h$=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?hC(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&hk(t,i,s),s};let hS=class extends lit_element_i{constructor(){super(...arguments),this._size=0,this._position=0,this._positionBeforeCollapse=0,this._cachedPrimaryPx=0,this._lastPointerDownTime=0,this.orientation="horizontal",this.mode="split",this.disabled=!1}get position(){return this._position}set position(e){let t=this._position;this._position=hE(e),this.updateCachedPrimaryPx(),void 0!==this._closedState&&this.emitClosedIfChanged(),this.requestUpdate("position",t)}get isHorizontal(){return"vertical"!==this.orientation}updateCachedPrimaryPx(){this._size<=0||("end"===this.primary?this._cachedPrimaryPx=(100-this._position)/100*this._size:this._cachedPrimaryPx=this._position/100*this._size)}connectedCallback(){super.connectedCallback?.(),this._resizeObserver=new ResizeObserver(e=>{let t=e[0].contentRect,i=Math.round(this.isHorizontal?t.width:t.height);if(0!==i&&i!==this._size){let e=this._position;if(this._size=i,this.primary&&this._cachedPrimaryPx>0){let e="end"===this.primary?hE(100-this._cachedPrimaryPx/i*100):hE(this._cachedPrimaryPx/i*100),t=this.applySnap(e),o=!0===this._closedState;this._position=!o&&this.computeClosed(t)?e:t}this._position!==e&&this.emitChange(),this.requestUpdate()}}),this.updateComplete.then(()=>{this._resizeObserver.observe(this);let e=this.getBoundingClientRect();this._size=Math.round(this.isHorizontal?e.width:e.height),this._closedState=null!=this.primary&&this.computeClosed(this._position);let t=this.applySnap(this._position);t!==this._position&&(this._position=t,this.emitChange()),this.updateCachedPrimaryPx(),this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback?.(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._dragAc?.abort(),this._dragAc=void 0}willUpdate(){this.style.setProperty("--_start-size",`${this._position}%`)}render(){return ew`
			<slot name="start" part="start" class="start"></slot>

			<div
				part="divider"
				class="divider"
				tabindex=${this.disabled?-1:0}
				role="separator"
				aria-orientation=${this.orientation}
				aria-valuenow=${Math.max(0,Math.min(100,Math.round(this._position)))}
				aria-valuemin="0"
				aria-valuemax="100"
				aria-label="Resize"
				@keydown=${this.handleKeyDown}
				@pointerdown=${this.handlePointerDown}
			>
				<slot name="divider"></slot>
			</div>

			<slot name="end" part="end" class="end"></slot>
		`}applySnap(e){return this.snap?this.snap({pos:e,size:this._size}):e}emitChange(){this.dispatchEvent(new CustomEvent("gl-split-panel-change",{detail:{position:this._position}})),this.emitClosedIfChanged()}computeClosed(e){return null!=this.primary&&("end"===this.primary?e>=100:e<=0)}emitClosedIfChanged(){if(null==this.primary)return;let e=this.computeClosed(this._position);this._closedState!==e&&(this._closedState=e,this.dispatchEvent(new CustomEvent("gl-split-panel-closed-change",{detail:{closed:e,position:this._position}})))}handlePointerDown(e){if(this.disabled||0!==e.button)return;e.preventDefault();let t=e.timeStamp;if(t-this._lastPointerDownTime<400){this._lastPointerDownTime=0,this.dispatchEvent(new CustomEvent("gl-split-panel-dblclick",{bubbles:!0,composed:!0}));return}this._lastPointerDownTime=t;let i=this.isHorizontal,o=this.getBoundingClientRect(),r=i?e.clientX-o.left:e.clientY-o.top,s=this.dividerEl.getBoundingClientRect(),a=hE((i?s.left-o.left+s.width/2:s.top-o.top+s.height/2)/this._size*100);Math.abs(a-this._position)>1&&(this._position=a,this.updateCachedPrimaryPx(),this.style.setProperty("--_start-size",`${this._position}%`)),this.toggleAttribute("dragging",!0),this.dividerEl.setPointerCapture(e.pointerId),this._dragAc?.abort();let c=new AbortController;this._dragAc=c;let h=r-this._position/100*this._size,p=e=>{if(this._size<=0)return;let t=this.getBoundingClientRect(),o=((i?e.clientX-t.left:e.clientY-t.top)-h)/this._size*100;this.position=this.applySnap(o),this.emitChange()},u=()=>{this.toggleAttribute("dragging",!1),c.abort(),this._dragAc=void 0,this.dispatchEvent(new CustomEvent("gl-split-panel-drag-end",{detail:{position:this._position},bubbles:!0,composed:!0}))};this.dividerEl.addEventListener("pointermove",p,{passive:!0,signal:c.signal}),this.dividerEl.addEventListener("lostpointercapture",u,{signal:c.signal})}handleKeyDown(e){if(this.disabled)return;let t=e.shiftKey?10:1,i=this._position,o=!0,r=this.isHorizontal;switch(e.key){case"ArrowLeft":r?i-=t:o=!1;break;case"ArrowRight":r?i+=t:o=!1;break;case"ArrowUp":r?o=!1:i-=t;break;case"ArrowDown":r?o=!1:i+=t;break;case"Home":i=0;break;case"End":i=100;break;case"Enter":"end"===this.primary?this._position>=100&&this._positionBeforeCollapse<100?i=this._positionBeforeCollapse:(this._positionBeforeCollapse=this._position,i=100):this._position<=0&&this._positionBeforeCollapse>0?i=this._positionBeforeCollapse:(this._positionBeforeCollapse=this._position,i=0);break;default:o=!1}o&&(e.preventDefault(),this.position=this.applySnap(i),this.emitChange())}};function hE(e){return Math.max(0,Math.min(100,e))}hS.styles=hx,h$([eD({type:Number,reflect:!0})],hS.prototype,"position",1),h$([eD({reflect:!0})],hS.prototype,"orientation",2),h$([eD({attribute:!1})],hS.prototype,"snap",2),h$([eD({reflect:!0})],hS.prototype,"primary",2),h$([eD({reflect:!0})],hS.prototype,"mode",2),h$([eD({type:Boolean,reflect:!0})],hS.prototype,"disabled",2),h$([eB(".divider")],hS.prototype,"dividerEl",2),hS=h$([eM("gl-split-panel")],hS);var hz=Object.defineProperty,hI=Object.getOwnPropertyDescriptor,hA=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?hI(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&hz(t,i,s),s};let hL={p:"pick",P:"pick",r:"reword",R:"reword",e:"edit",E:"edit",s:"squash",S:"squash",f:"fixup",F:"fixup",d:"drop",D:"drop"},hP=class extends GlAppHost{constructor(){super(...arguments),this.virtualizerKeyFn=e=>e.id,this.virtualizerRenderFn=(e,t)=>this.renderEntry(e,t),this._contextMenuProxy=new ContextMenuProxyController(this),this._conflictsLoading=!1,this.dragOverBottom=!1,this.selectedIds=new Set,this.conflictDetectionStale=!1,this._idToSortedIndex=new Map,this._sortedEntries=[],this._squashingIds=new Set,this._squashTargetIds=new Set,this.closeWarningDismissedLocal=!1,this._conflictTreeModel=[],this._splitPosition=null,this._conflictFilesLayout="list",this._conflictPanelSnap=({pos:e})=>e<25?25:e>90?90:1.5>=Math.abs(e-50)?50:e,this._conflictCheckGeneration=0,this._hasCompletedInitialCheck=!1,this._editableStartOffset=0,this.onListKeyDown=e=>{if((e.ctrlKey||e.metaKey)&&"a"===e.key){e.preventDefault();let t=this.state?.onto?.sha,i=this._sortedEntries.filter(e=>e.id!==t).map(e=>e.id);this.selectedIds=new Set(i);return}if("Escape"===e.key){let t=e.composedPath().find(e=>e instanceof Element&&"gl-rebase-entry"===e.localName),i=t?.shadowRoot?.querySelector(".entry");i&&(e.preventDefault(),i.focus());return}if(e.composedPath().some(e=>e instanceof Element&&e.matches(".action-select")))return;let t=this.focusedEntryId;if(!t)return;let i=this.shadowRoot?.querySelector(`gl-rebase-entry[data-id="${t}"]`);if(!i)return;if("Enter"===e.key||" "===e.key){let o=e.composedPath()[0];if(!(o instanceof HTMLElement&&o.classList.contains("entry")))return;if(e.preventDefault(),!this.selectedIds.has(t)){this.selectedIds=new Set([t]),this.anchoredEntryId=t;let e=this._idToSortedIndex.get(t)??-1;if(-1!==e){let t=this._sortedEntries[e];eZ(t)&&this._ipc.sendCommand(e7,{sha:t.sha})}return}let r=i.shadowRoot?.querySelector(".action-select");null!=r&&(r.focus(),requestAnimationFrame(()=>void r.show()));return}let o=this._idToSortedIndex.get(t)??-1;if(-1===o)return;let r=this._sortedEntries[o];if(eZ(r)&&e.key in hL&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey){e.preventDefault(),e.stopPropagation(),this.onActionChanged(new CustomEvent("action-changed",{detail:{sha:r.sha,action:hL[e.key]}}));return}if("Home"===e.key||"End"===e.key){e.preventDefault();let t="Home"===e.key?0:this._sortedEntries.length-1;t>=0&&t<this._sortedEntries.length&&this.focusEntry(this._sortedEntries[t].id);return}if(this.isNavigationKey(e.key)){if(e.altKey&&!this.state?.preservesMerges)return void this.handleKeyboardMove(e,o,e.key);if(e.shiftKey)return void this.handleKeyboardMultiSelect(e,o,e.key);this.handleKeyboardNavigate(e,o,e.key)}},this.onEntrySelect=e=>{let{id:t,sha:i,ctrlKey:o,shiftKey:r}=e.detail,s=this.state?.onto?.sha;if(!s||t!==s){if(this.focusedEntryId=t,r&&this.anchoredEntryId){let e=this._idToSortedIndex.get(this.anchoredEntryId)??-1,i=this._idToSortedIndex.get(t)??-1;if(-1!==e&&-1!==i){let t=Math.min(e,i),o=Math.max(e,i),r=new FilterMapIterator(this._sortedEntries.slice(t,o+1),e=>e.id!==s?e.id:void 0);this.selectedIds=new Set(r)}}else if(o){let e=new Set(this.selectedIds);e.has(t)?e.delete(t):e.add(t),this.selectedIds=e,this.anchoredEntryId=t}else this.selectedIds=new Set([t]),this.anchoredEntryId=t;i&&this._ipc.sendCommand(e7,{sha:i})}},this.onActionChanged=e=>{let t,{sha:i,action:o}=e.detail;if(this.selectedIds.has(i)&&this.selectedIds.size>1){for(let e of(t=[],this.selectedIds))if(!e.startsWith("line:")){if(e===this._oldestCommitId&&("squash"===o||"fixup"===o))continue;t.push({sha:e,action:o})}}else{if(i===this._oldestCommitId&&("squash"===o||"fixup"===o))return;t=[{sha:i,action:o}]}if(t.length){if("drop"===o)for(let e of this.findOrphanedSquashEntries(t.map(e=>e.sha)))t.push({sha:e,action:"pick"});1===t.length?(this._stateProvider.changeEntryAction(t[0].sha,t[0].action),this._ipc.sendCommand(e3,{sha:t[0].sha,action:t[0].action})):(this._stateProvider.changeEntryActions(t),this._ipc.sendCommand(e4,{entries:t})),"drop"===o&&this.scheduleConflictCheck("todo")}},this.onDocumentKeyDown=e=>{if(e.ctrlKey||e.metaKey){"Enter"===e.key&&(e.preventDefault(),this.isRebasing?this.rebaseStatus?.hasConflicts||this.onContinueClicked():this.onStartClicked());return}"/"===e.key&&(e.preventDefault(),this.onSearch())},this.onStageAllCurrent=()=>{this._ipc.sendCommand(ta,{resolution:"current"})},this.onStageAllIncoming=()=>{this._ipc.sendCommand(ta,{resolution:"incoming"})},this.onToggleConflictFilesLayout=()=>{this._conflictFilesLayout="tree"===this._conflictFilesLayout?"list":"tree"},this.onSplitPanelChange=e=>{this._splitPosition=e.detail.position},this.onCurrentCommitClick=()=>{let e=this.rebaseStatus?.currentCommit;e&&this._ipc.sendCommand(e9,{type:"commit",ref:e})},this.onCurrentCommitKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onCurrentCommitClick())},this.onBranchClick=()=>{this.state?.branch&&this._ipc.sendCommand(e9,{type:"branch",ref:this.state.branch})},this.onBranchKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onBranchClick())},this.onOntoClick=()=>{this.state?.onto?.sha&&this._ipc.sendCommand(e9,{type:"commit",ref:this.state.onto.sha})},this.onOntoKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onOntoClick())},this.onRevealCommit=e=>{this._ipc.sendCommand(e9,{type:"commit",ref:e.detail.sha})}}get hasConflictPanel(){return(this.state?.conflictFiles?.length??0)>0&&(this.rebaseStatus?.hasConflicts??!1)}get ascending(){return this.state?.ascending??!1}get entries(){return this.state?.entries??[]}get doneEntries(){return this.state?.doneEntries??[]}get rebaseStatus(){return this.state?.rebaseStatus}get isRebasing(){return null!=this.rebaseStatus}get isEmptyOrNoop(){let{entries:e,doneEntries:t}=this;return!t.length&&(!e.length||1===e.length&&"command"===e[0].type&&"noop"===e[0].action)}createStateProvider(e,t,i){return new RebaseStateProvider(this,e,t,i)}connectedCallback(){super.connectedCallback?.(),document.addEventListener("keydown",this.onDocumentKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),super.disconnectedCallback?.()}onListClick(e){if(!e.target.closest("gl-rebase-entry"))if(this.focusedEntryId)this.focusEntry(this.focusedEntryId);else{let e=this.state?.onto?.sha,t=this._sortedEntries.find(t=>t.id!==e);t&&this.focusEntry(t.id)}}onDragStart(e){let t=e.target.closest("gl-rebase-entry"),i=t?.dataset.id;if(!i)return;let o=this.state?.onto?.sha;if(!o||i!==o){if(this.state?.preservesMerges)return void e.preventDefault();this.selectedIds.has(i)||(this.selectedIds=new Set([i]),this.anchoredEntryId=i),this.draggedId=i,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",i),requestAnimationFrame(()=>{if(t.classList.add("dragging"),this.selectedIds.has(i)&&this.selectedIds.size>1){for(let e of this.selectedIds)if(e!==i){let t=this.getEntryElement(e);t?.classList.add("dragging")}}})}}onDragEnd(){this.clearDragState()}onDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move",this.handleDragAutoScroll(e.clientY);let t=e.target.closest("gl-rebase-entry"),i=t?.dataset.id;if(i===this.draggedId)return;let o=!1,r=this.state?.onto?.sha;if(t&&(!r||i!==r)){let i=t.getBoundingClientRect();o=e.clientY>i.top+i.height/2}this.updateDragOverIndicator(i,t,o)}onDragLeave(e){let t=e.target.closest("gl-rebase-entry");t?.dataset.id===this.dragOverId&&(t.classList.remove("drag-over","drag-over-bottom"),this.dragOverId=void 0,this.dragOverBottom=!1)}onDrop(e){e.preventDefault();let t=e.target.closest("gl-rebase-entry");if(!this.isValidDropTarget(t))return void this.clearDragState();let i=e.dataTransfer?.getData("text/plain")||this.draggedId;if(!i)return void this.clearDragState();let o=t.dataset.id;if(!o)return void this.clearDragState();let r=this.state?.onto?.sha;if(r&&o===r)return void this.handleBaseDrop(i);let s=this._idToSortedIndex.get(o)??-1,a=t.getBoundingClientRect(),c=e.clientY>a.top+a.height/2;if(this.selectedIds.has(i)&&this.selectedIds.size>1)this.clearDragState(),this.executeMoveEntriesBySortedIndex([...this.selectedIds],s,c);else{let e=this._idToSortedIndex.get(i)??-1;this.clearDragState(),this.executeMoveEntryBySortedIndex(e,s,c)}}handleBaseDrop(e){let t=e??this.draggedId;if(!t)return void this.clearDragState();if(this.clearDragState(),this.selectedIds.has(t)&&this.selectedIds.size>1){let e=this.getIdsInArrayOrder(this.selectedIds);this.pendingFocusId=this.focusedEntryId&&this.selectedIds.has(this.focusedEntryId)?this.focusedEntryId:e[0],this._stateProvider.moveEntries(e,0),this.refreshIndices(),this._ipc.sendCommand(e6,{ids:e,to:0}),this.scheduleConflictCheck("todo")}else{let e=this.entries.findIndex(e=>e.id===t);if(-1===e)return;this.executeMoveEntry(e,0)}}handleDragAutoScroll(e){if(!this._virtualizer)return;let t=this._virtualizer.getBoundingClientRect();e<t.top+80?this._virtualizer.scrollBy({top:-8,behavior:"instant"}):e>t.bottom-80&&this._virtualizer.scrollBy({top:8,behavior:"instant"})}updateDragOverIndicator(e,t,i=!1){if(e!==this.dragOverId||i!==this.dragOverBottom){if(this.dragOverId){let e=this.getEntryElement(this.dragOverId);e?.classList.remove("drag-over","drag-over-bottom")}this.dragOverId=e,this.dragOverBottom=i,e&&t&&(t.classList.add("drag-over"),i&&t.classList.add("drag-over-bottom"))}}isValidDropTarget(e){let t=e?.dataset.id;return!!(t&&this.draggedId&&t!==this.draggedId)}clearDragState(){this.clearAllDragOverIndicators(),this.clearDraggingClass(),this.draggedId=void 0,this.dragOverId=void 0,this.dragOverBottom=!1}clearAllDragOverIndicators(){if(this._virtualizer)for(let e of this._virtualizer.querySelectorAll(".drag-over"))e.classList.remove("drag-over","drag-over-bottom")}clearDraggingClass(){if(this._virtualizer)for(let e of this._virtualizer.querySelectorAll(".dragging"))e.classList.remove("dragging")}getEntryElement(e){return this._virtualizer?.querySelector(`gl-rebase-entry[data-id="${e}"]`)??void 0}getIdsInArrayOrder(e){let t=[];for(let i of this._sortedEntries)e.has(i.id)&&t.push(i);return this.ascending||t.reverse(),t.map(e=>e.id)}executeMoveEntryBySortedIndex(e,t,i){let o,r,s=this._sortedEntries.length,a=this.entries.length,c=this._editableStartOffset;if(-1!==e&&-1!==t&&!(e>=s)&&!(t>=s)&&t!==e&&(!i||t!==e-1)&&(i||t!==e+1)){if(this.ascending){o=e-c;let s=t-c;r=i?s+1:s}else{o=a-1-e;let s=a-1-t;r=i?s:s+1}o<0||o>=a||r<0||r>a||this.executeMoveEntry(o,r)}}executeMoveEntry(e,t){if(-1===e||-1===t||e===t)return;let i=this.entries[e];if(!i)return;this.pendingFocusId=i.id;let o=e<t?t-1:t;this._stateProvider.moveEntry(e,o),this.refreshIndices(),this._ipc.sendCommand(e5,{id:i.id,to:t,relative:!1}),this.scheduleConflictCheck("todo")}executeMoveEntriesBySortedIndex(e,t,i){let o;if(0===e.length)return;let r=this._sortedEntries.length,s=this.entries.length,a=this._editableStartOffset,c=new Set(e);if(t<0||t>=r)return;let h=this.getIdsInArrayOrder(c),p=t;i&&(p=t+1);let u=0;for(let e=0;e<p&&e<r;e++)c.has(this._sortedEntries[e].id)&&u++;let g=p-u,m=s-h.length;o=this.ascending?Math.max(0,Math.min(g-a,m)):Math.max(0,Math.min(m-g,m));let f=this.focusedEntryId&&c.has(this.focusedEntryId)?this.focusedEntryId:h[0];this.pendingFocusId=f,this._stateProvider.moveEntries(h,o),this.refreshIndices(),this._ipc.sendCommand(e6,{ids:h,to:o}),this.scheduleConflictCheck("todo")}findOrphanedSquashEntries(e){let t=new Set(e),i=[],o=this.entries;for(let e=0;e<o.length;e++){let r=o[e];if(!eZ(r)||"squash"!==r.action&&"fixup"!==r.action)continue;let s=!1;for(let i=e-1;i>=0;i--){let e=o[i];if(!eZ(e))continue;let r=t.has(e.sha)?"drop":e.action;if("drop"!==r&&"squash"!==r&&"fixup"!==r){s=!0;break}}s||i.push(r.sha)}return i}handleKeyboardMove(e,t,i){e.preventDefault(),e.stopPropagation();let o=this._sortedEntries[t];if(!o)return;let r=this.isDownwardKey(i),s=r===this.ascending?"down":"up";if(this.selectedIds.has(o.id)&&this.selectedIds.size>1){let e=[...this.selectedIds];this.pendingFocusId=o.id,this._stateProvider.shiftEntries(e,s),this.refreshIndices(),this._ipc.sendCommand(e8,{ids:e,direction:s}),this.scheduleConflictCheck("todo")}else{let e=t+(r?1:-1);if(e<0||e>=this._sortedEntries.length)return;this.executeMoveEntryBySortedIndex(t,e,r)}}handleKeyboardNavigate(e,t,i){if(!this.isNavigationKey(i))return;e.preventDefault();let o=t+(this.isDownwardKey(i)?1:-1);o<0||o>=this._sortedEntries.length||this.focusEntry(this._sortedEntries[o].id)}handleKeyboardMultiSelect(e,t,i){if(!this.isNavigationKey(i))return;e.preventDefault();let o=t+(this.isDownwardKey(i)?1:-1);if(o<0||o>=this._sortedEntries.length)return;let r=this.state?.onto?.sha,s=this._sortedEntries[o].id;if(s===r)return;this.anchoredEntryId||=this._sortedEntries[t].id;let a=this._idToSortedIndex.get(this.anchoredEntryId)??t,c=Math.min(a,o),h=Math.max(a,o),p=new FilterMapIterator(this._sortedEntries.slice(c,h+1),e=>e.id!==r?e.id:void 0);this.pendingFocusId=s,this.selectedIds=new Set(p)}isNavigationKey(e){return"ArrowUp"===e||"ArrowDown"===e||"j"===e||"k"===e||"J"===e||"K"===e}isDownwardKey(e){return"ArrowDown"===e||"j"===e||"J"===e}focusEntry(e){if(e===this.state?.onto?.sha)return;this.focusedEntryId=e;let t=this._idToSortedIndex.get(e)??-1;if(-1===t)return;let i=this._virtualizer;i?.scrollToIndex&&(i.scrollToIndex(t,"nearest"),requestAnimationFrame(()=>{let t=this.getEntryElement(e);t?.shadowRoot?.querySelector(".entry")?.focus()}))}onOrderToggle(){this._ipc.sendCommand(e2,{ascending:!this.ascending})}onStartClicked(){this._ipc.sendCommand(e0,void 0)}onAbortClicked(){this._ipc.sendCommand(eY,void 0)}onContinueClicked(){this._ipc.sendCommand(eQ,void 0)}onSkipClicked(){this._ipc.sendCommand(eJ,void 0)}onSwitchClicked(){this._ipc.sendCommand(e1,void 0)}onSearch(){this._ipc.sendCommand(eX,void 0)}onRecomposeCommitsClicked(){this._ipc.sendCommand(ti,void 0)}computeSquashInfo(e){let t=new Set,i=new Set;for(let o=0;o<e.length;o++){let r=e[o];if(eZ(r)&&("squash"===r.action||"fixup"===r.action))for(let r=o-1;r>=0;r--){let o=e[r];if(!eZ(o)){i.add(o.id);continue}if("drop"!==o.action&&"squash"!==o.action&&"fixup"!==o.action){t.add(o.sha);break}}}return{targets:t,squashing:i}}refreshIndices(){let{entries:e,doneEntries:t}=this,i=this.state?.onto,o=+(null!=i)+t.length,r=t.length>0?[...t,...e]:e;if(i&&!r.some(e=>e.sha===i.sha)){let e={type:"commit",id:i.sha,action:"pick",sha:i.sha,message:i.commit?.message??"Base commit",line:0,commit:i.commit};this._sortedEntries=this.ascending?[e,...r]:[e,...r].toReversed()}else this._sortedEntries=this.ascending?r:r.toReversed();this._editableStartOffset=this.ascending?o:0,this._idToSortedIndex.clear();for(let e=0;e<this._sortedEntries.length;e++)this._idToSortedIndex.set(this._sortedEntries[e].id,e)}willUpdate(e){let t=this.entries,i=this.doneEntries.some(eZ);this._oldestCommitId=i?void 0:t.find(eZ)?.sha;let o=this.computeSquashInfo(t);if(this._squashTargetIds=o.targets,this._squashingIds=o.squashing,this.refreshIndices(),this.selectedIds.size){let e=0,t=new Set;for(let i of this.selectedIds)this._idToSortedIndex.has(i)?t.add(i):e++;e>0&&(this.selectedIds=t)}null==this.anchoredEntryId||this._idToSortedIndex.has(this.anchoredEntryId)||(this.anchoredEntryId=void 0),null==this.focusedEntryId||this._idToSortedIndex.has(this.focusedEntryId)||(this.focusedEntryId=void 0);let r=this.state?.conflictFiles;(r!==this._prevConflictFiles||e.has("_conflictFilesLayout"))&&(this._prevConflictFiles=r,this._conflictTreeModel=this.buildConflictTreeModel(r),0===this._conflictTreeModel.length&&(this._splitPosition=null));let s=this.getConflictCheckKey();if(s!==this._conflictCheckKey&&(this._conflictCheckKey=s,null!=s?this.scheduleConflictCheck("todo"):this.resetConflictCheckState()),!this.isRebasing&&this.state?.branch!=null&&this.state?.onto!=null&&eW(this.state?.subscription?.state)&&!this._hasCompletedInitialCheck&&!this._conflictsLoading&&null==this._conflictCheckTimer&&this.scheduleConflictCheck("initial",!0),null==this.focusedEntryId&&this._sortedEntries.length>0){let e,t=this.state?.onto?.sha;if(this.isRebasing&&this.doneEntries.length>0&&(e=this.doneEntries.at(-1).id),!e){let i=this._sortedEntries.find(e=>e.id!==t);e=i?.id}e&&(this.focusedEntryId=e,this.selectedIds=new Set([e]),this.anchoredEntryId=e,this.pendingFocusId=e)}if(null==this.pendingFocusId){let e=this.shadowRoot?.activeElement?.closest("gl-rebase-entry");this.pendingFocusId=e?.dataset.id}}updated(e){if(null==this._splitPosition&&this.hasConflictPanel&&(this._splitPosition=50),!this.pendingFocusId)return;let t=this.pendingFocusId;this.pendingFocusId=void 0,this.focusEntry(t)}render(){if(!this.state?.entries)return e$;let e=this.state.preservesMerges??!1,t=this.isRebasing,i=this.isEmptyOrNoop,o=this.state.density??"compact";return ew`
			<div
				class="container ${e?"preserves-merges":""} ${t?"active-rebase":""}"
				data-density="${o}"
			>
				${eN([this.state.branch,this.state.onto,this.state.entries.length,this.ascending,e,this.rebaseStatus,this.state.subscription?.state,this._conflictsLoading,this._conflictResult,this._conflictingShas,this.conflictDetectionStale],()=>this.renderHeader())}
				<div class="banners">
					${e?this.renderPreservesMergesBanner():e$} ${this.renderCloseWarningBanner()}
				</div>
				<div class="content">
					${this.hasConflictPanel?ew`<gl-split-panel
								class="conflict-split"
								orientation="vertical"
								primary="end"
								.position=${this._splitPosition??0}
								.snap=${this._conflictPanelSnap}
								@gl-split-panel-change=${this.onSplitPanelChange}
							>
								${!i?ew`<div slot="start" class="entries-panel">${this.renderEntries()}</div>`:ew`<div slot="start" class="entries-empty">No commits to rebase</div>`}
								${this.renderConflictPanel()}
							</gl-split-panel>`:!i?this.renderEntries():ew`<div class="entries-empty">No commits to rebase</div>`}
				</div>
				${this.renderFooter()}
			</div>
		`}renderEntries(){return ew`<lit-virtualizer
			role="list"
			class="entries scrollable ${this.ascending?"ascending":"descending"}${this.rebaseStatus?.hasConflicts?" has-conflicts":""}"
			autofocus
			@click=${this.onListClick}
			@keydown=${this.onListKeyDown}
			@dragstart=${this.onDragStart}
			@dragend=${this.onDragEnd}
			@dragover=${this.onDragOver}
			@dragleave=${this.onDragLeave}
			@drop=${this.onDrop}
			scroller
			.items=${this._sortedEntries}
			.keyFunction=${this.virtualizerKeyFn}
			.layout=${(0,S.flow)({direction:"vertical"})}
			.renderItem=${this.virtualizerRenderFn}
		></lit-virtualizer>`}renderPreservesMergesBanner(){return ew`<gl-banner
			class="preserves-merges-banner"
			display="outline"
			layout="responsive"
			body="This rebase contains merge commits. Reordering is disabled to preserve the merge structure, but you can still change actions (drop, reword, etc.)."
		></gl-banner>`}renderCloseWarningBanner(){return this.isRebasing||this.closeWarningDismissedLocal||this.state?.closeWarningDismissed?e$:ew`<gl-banner
			class="close-warning-banner"
			display="outline"
			layout="responsive"
			body="The rebase will start automatically when you close this tab."
			dismissible
			@gl-banner-dismiss=${this.onDismissCloseWarning}
		></gl-banner>`}onDismissCloseWarning(){this.closeWarningDismissedLocal=!0,this._ipc?.sendCommand(to,void 0)}renderConflictIndicator(){let e=this._conflictsLoading,t=this._conflictResult;if(this.isRebasing){if(e)return ew`<span class="conflict-loading" title="Checking remaining commits for conflicts...">
					<code-icon icon="loading" modifier="spin"></code-icon>
				</span>`;let i=t?.status==="conflicts"?t.conflict?.shas?.length??0:0;return i?ew`<gl-tooltip
					content="Potential conflicts detected in ${i} remaining commit${i>1?"s":""}"
				>
					<span class="conflict-summary warning">
						<code-icon icon="warning"></code-icon>
						<span>${i}</span>
					</span>
				</gl-tooltip>`:e$}if(!this.state?.branch||!this.state?.onto)return e$;let i=eW(this.state?.subscription?.state)?e&&null==t?"loading":t?.status==="error"?"error":t?.status==="conflicts"?"conflicts":"clean":"upgrade";return ew`<gl-rebase-conflict-indicator
			class="conflict-indicator"
			.status=${i}
			.result=${t}
			.stale=${this.conflictDetectionStale||e&&null!=t}
			.checking=${e}
			.subscriptionState=${this.state.subscription?.state}
		></gl-rebase-conflict-indicator>`}renderRebaseBanner(){let e,t=this.rebaseStatus;if(!t)return e$;let i=t.currentCommit,o=t.pauseReason,r=this.state?.revealLocation==="graph"?"Open in Commit Graph":"Open in Inspect View",s=i?ew`<gl-tooltip content=${r}>
					<gl-commit-sha
						.sha=${i}
						tabindex="0"
						@click=${this.onCurrentCommitClick}
						@keydown=${this.onCurrentCommitKeydown}
						class="clickable"
					></gl-commit-sha>
				</gl-tooltip>`:e$;switch(o){case"break":e=ew`Rebase paused at breakpoint`;break;case"conflict":e=i?ew`Rebase paused due to conflicts at ${s}`:ew`Rebase paused due to conflicts`;break;case"exec":e=ew`Rebase paused due to exec failure`;break;case"edit":e=i?ew`Rebase paused for editing at ${s}`:ew`Rebase paused for editing`;break;case"reword":e=i?ew`Rebase paused for rewording at ${s}`:ew`Rebase paused for rewording`;break;default:e=i?ew`Rebase paused at ${s}`:ew`Rebase paused`}return ew`<div class="rebase-banner ${"conflict"===o?"has-conflicts":""}">
			<code-icon icon="${"conflict"===o?"warning":"edit"===o||"break"===o||"exec"===o?"gl-pause":"gl-continue"}"></code-icon>
			<span class="rebase-status">${e}</span>
			${"conflict"===o?ew`<gl-tooltip content="Show Conflicts">
						<a class="rebase-action-link" href="${this.showConflictsCommandUrl}">Show conflicts</a>
					</gl-tooltip>`:e$}
			<span class="rebase-progress">(${t.currentStep}/${t.totalSteps})</span>
			<span class="rebase-remaining">${t.totalSteps-t.currentStep} remaining</span>
		</div>`}renderConflictPanel(){let e=this.state?.conflictFiles;return e?.length&&this.rebaseStatus?.hasConflicts?ew`<div slot="end" class="conflict-panel">
			<div class="conflict-panel__header">
				<code-icon icon="warning" aria-hidden="true"></code-icon>
				<span>${eH("conflicted file",e.length)}</span>
				<gl-button
					appearance="toolbar"
					density="compact"
					tooltip="Stage Current for All Conflicts"
					aria-label="Stage Current for All Conflicts"
					@click=${this.onStageAllCurrent}
					><code-icon icon="gl-accept-all-left"></code-icon
				></gl-button>
				<gl-button
					appearance="toolbar"
					density="compact"
					tooltip="Stage Incoming for All Conflicts"
					aria-label="Stage Incoming for All Conflicts"
					@click=${this.onStageAllIncoming}
					><code-icon icon="gl-accept-all-right"></code-icon
				></gl-button>
				<gl-button
					appearance="toolbar"
					density="compact"
					tooltip="${"tree"===this._conflictFilesLayout?"Switch to List Layout":"Switch to Tree Layout"}"
					aria-label="${"tree"===this._conflictFilesLayout?"Switch to List Layout":"Switch to Tree Layout"}"
					@click=${this.onToggleConflictFilesLayout}
					><code-icon icon="${"tree"===this._conflictFilesLayout?"list-flat":"list-tree"}"></code-icon
				></gl-button>
			</div>
			<gl-tree-view
				class="conflict-panel__list"
				filterable
				filter-placeholder="Filter conflicted files..."
				aria-label="${eH("conflicted file",e.length)}"
				.model=${this._conflictTreeModel}
				@gl-tree-generated-item-selected=${this.onConflictTreeItemSelected}
				@gl-tree-generated-item-action-clicked=${this.onConflictTreeActionClicked}
			></gl-tree-view>
		</div>`:e$}buildConflictTreeModel(e){return e?.length?"tree"===this._conflictFilesLayout?this.buildConflictTreeHierarchy(e):e.map(e=>{let t=e.path.lastIndexOf("/"),i=-1!==t?e.path.substring(0,t+1):"",o=-1!==t?e.path.substring(t+1):e.path;return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,icon:{type:"status",name:e.conflictStatus},label:o,description:i,tooltip:this.getConflictTooltip(e.conflictStatus,e.conflictCount),actions:oN(e.conflictStatus),contextData:oU(e.path,e.conflictStatus),decorations:this.getConflictDecorations(e.conflictStatus,e.conflictCount)}}):[]}buildConflictTreeHierarchy(e){let t=function(e,t,i,o=!1){let r={name:"",relativePath:"",children:new Map,descendants:[]},s=e.reduce((e,o)=>{let r=e,s="";for(let e of t(o)){s=i(s,e),r.children??=new Map;let t=r.children.get(e);null==t&&(t={name:e,relativePath:s,parent:r,children:void 0,descendants:void 0},r.children.set(e,t)),r.descendants??=[],r.descendants.push(o),r=t}return r.value=o,e},r);return o&&(s=function e(t,i,o=!0,r){if(null==t.children)return t;let s=[...t.children.values()];for(let t of s)e(t,i,!1,r);if(!o&&null==t.value&&1===s.length){let e=s[0];if((null==e.value||r?.(e.value))&&(t.name=i(t.name,e.name),t.relativePath=e.relativePath,t.children=e.children,t.descendants=e.descendants,t.value=e.value,null!=t.children))for(let e of t.children.values())e.parent=t}return t}(s,i,!0,void 0)),s}(e,e=>e.path.split("/"),(...e)=>e.join("/"),!0);return this.walkConflictHierarchy(t,1)}walkConflictHierarchy(e,t){let i=[];if(null!=e.children){for(let o of e.children.values())if(null!=o.value)i.push({branch:!1,expanded:!0,path:o.value.path,level:t,checkable:!1,icon:{type:"status",name:o.value.conflictStatus},label:o.name,tooltip:this.getConflictTooltip(o.value.conflictStatus,o.value.conflictCount),actions:oN(o.value.conflictStatus),contextData:oU(o.value.path,o.value.conflictStatus),decorations:this.getConflictDecorations(o.value.conflictStatus,o.value.conflictCount)});else if(null!=o.children&&o.children.size>0){let e=this.walkConflictHierarchy(o,t+1);i.push({branch:!0,expanded:!0,path:`folder:${o.relativePath}`,level:t,label:o.name,icon:"folder",checkable:!1,children:e})}}return i}getConflictDecorations(e,t){let i,o;return i=oq(e,this.state?.branch),o=[],null!=i&&(o.push({type:"text",label:e,tooltip:i.description,kind:i.kind,position:"after"}),o.push({type:"text",label:i.label,tooltip:i.label,kind:"muted",position:"before"})),null!=t&&t>0&&o.push({type:"conflict",label:eH("conflict",t),count:t,tooltip:eH("conflict",t),kind:i?.kind??"modified",position:"before"}),o.length?o:void 0}getConflictTooltip(e,t){let i,o;return i=oq(e,this.state?.branch),o=[],null!=i&&(o.push(`**${i.label}** (${e})`),o.push(i.description)),null!=t&&t>0&&o.push(eH("conflict",t)),o.join(`

`)}onConflictTreeItemSelected(e){this.onOpenConflictFile(e.detail.node.path)}onConflictTreeActionClicked(e){let{action:t}=e.detail.action,{path:i}=e.detail.node;switch(t){case"current-changes":this._ipc.sendCommand(ts,{path:i,side:"current"});break;case"incoming-changes":this._ipc.sendCommand(ts,{path:i,side:"incoming"});break;case"stage":this._ipc.sendCommand(tn,{path:i})}}onOpenConflictFile(e){this._ipc.sendCommand(tr,{path:e})}get showConflictsCommandUrl(){return this._webview.createCommandLink("gitlens.pausedOperation.showConflicts:rebase")}renderEntry(e,t){let i=e.id,o=0===t,r=t===this._sortedEntries.length-1,s=e.done??!1,a=this.rebaseStatus?.currentCommit,c="sha"in e&&null!=a&&e.sha?.startsWith(a);return"command"===e.type?ew`<gl-rebase-entry
				data-id=${i}
				.entry=${e}
				?isFirst=${o}
				?isLast=${r}
				?isDone=${s}
				?isCurrent=${c??!1}
				?isSelected=${this.selectedIds.has(i)}
				?isSquashing=${this._squashingIds.has(i)}
				@entry-select=${this.onEntrySelect}
			></gl-rebase-entry>`:ew`<gl-rebase-entry
			data-id=${i}
			.entry=${e}
			.authors=${this.state.authors}
			.revealLocation=${this.state.revealLocation}
			?isBase=${e.sha===this.state?.onto?.sha}
			?isFirst=${o}
			?isLast=${r}
			?isDone=${s}
			?isCurrent=${c??!1}
			?isOldest=${e.sha===this._oldestCommitId}
			?isSelected=${this.selectedIds.has(i)}
			?isSquashTarget=${this._squashTargetIds.has(i)}
			?hasConflict=${!!(null!=e.sha&&this._conflictingShas?.length&&function(e,t){for(let i of e)if(null==t||t(i))return!0;return!1}(this._conflictingShas,t=>t?.startsWith(e.sha)))}
			@action-changed=${this.onActionChanged}
			@entry-select=${this.onEntrySelect}
			@gl-reveal-commit=${this.onRevealCommit}
		></gl-rebase-entry>`}renderHeader(){return ew`<header tabindex="-1">
			<div class="header__row">
				<h1 class="header-title">GitLens Interactive Rebase</h1>
				<div class="header-info">${this.renderSubhead()}</div>
				<div class="header-actions">
					${this.renderConflictIndicator()}
					<gl-button
						class="header-toggle"
						appearance="toolbar"
						density="compact"
						tooltip="${this.ascending?"Showing Oldest Commits First":"Showing Newest Commits First"}"
						@click=${this.onOrderToggle}
					>
						<code-icon slot="prefix" icon="sort-precedence"></code-icon>
						<code-icon icon="${this.ascending?"arrow-up":"arrow-down"}"></code-icon>
					</gl-button>
				</div>
			</div>
			${this.isRebasing?this.renderRebaseBanner():e$}
		</header>`}renderSubhead(){if(!this.state)return e$;let e=this.doneEntries.filter(e=>"commit"===e.type).length,t=this.state.entries.filter(e=>"commit"===e.type).length,i=e+t,o="graph"===this.state.revealLocation?"Open in Commit Graph":"Open in Inspect View";return ew`
			<gl-tooltip content=${o}>
				<gl-branch-name
					.name=${this.state.branch}
					tabindex="0"
					@click=${this.onBranchClick}
					@keydown=${this.onBranchKeydown}
					class="clickable"
				></gl-branch-name>
			</gl-tooltip>
			${this.state.onto?ew`<span class="header-onto"
						>onto
						<gl-tooltip content=${o}>
							<gl-commit-sha
								.sha=${this.state.onto.sha}
								tabindex="0"
								@click=${this.onOntoClick}
								@keydown=${this.onOntoKeydown}
								class="clickable"
							></gl-commit-sha>
						</gl-tooltip>
					</span>`:e$}
			<span class="header-count"
				>${this.isRebasing?`${e}/${i} commits`:eH("commit",t)}</span
			>
		`}getConflictCheckKey(){if(this.isRebasing&&this.state?.onto?.sha)return`${this.state.onto.sha}|${this.rebaseStatus?.currentStep??0}|${this.doneEntries.length}|${this.entries.length}`}scheduleConflictCheck(e,t=!1){if(!eW(this.state?.subscription?.state))return;null!=this._conflictCheckTimer&&(clearTimeout(this._conflictCheckTimer),this._conflictCheckTimer=void 0),this._conflictingShas=void 0,this._conflictsLoading=!0,this.conflictDetectionStale="todo"===e&&null!=this._conflictResult;let i=()=>{this._conflictCheckTimer=void 0,this.runConflictCheck(e)};t||"initial"===e?i():this._conflictCheckTimer=setTimeout(i,500)}resetConflictCheckState(){null!=this._conflictCheckTimer&&(clearTimeout(this._conflictCheckTimer),this._conflictCheckTimer=void 0),this._conflictCheckGeneration++,this._conflictsLoading=!1,this._conflictResult=void 0,this._conflictingShas=void 0,this.conflictDetectionStale=!1,this._hasCompletedInitialCheck=!1}async runConflictCheck(e){let t=this.state;if(!t?.onto?.sha)return;let i="initial"===e?t.entries?.map(e=>eZ(e)?e.sha:void 0).filter(e=>null!=e)??[]:t.entries.filter(e=>eZ(e)&&"drop"!==e.action).map(e=>e.sha);if(!i.length){++this._conflictCheckGeneration,this._conflictsLoading=!1,this._conflictResult={status:"clean"},this._conflictingShas=void 0,this.conflictDetectionStale=!1,this._hasCompletedInitialCheck=!0;return}let o=++this._conflictCheckGeneration;try{let r=this.isRebasing?"HEAD":void 0,s=await this._ipc.sendRequest(tl,{trigger:e,onto:t.onto.sha,commits:i,base:r});if(o!==this._conflictCheckGeneration)return;this._conflictResult=s.conflicts,this._conflictingShas=this._conflictResult?.status==="conflicts"?this._conflictResult.conflict?.shas??[]:void 0}catch{if(o!==this._conflictCheckGeneration)return;this._conflictResult=void 0,this._conflictingShas=void 0}finally{o===this._conflictCheckGeneration&&(this._conflictsLoading=!1,this.conflictDetectionStale=!1,this._hasCompletedInitialCheck=!0)}}renderFooter(){let e=this.isRebasing,t=this.rebaseStatus?.hasConflicts??!1;return ew`<footer>
			<div class="shortcuts">
				<code-icon icon="keyboard"></code-icon>
				<span class="shortcut"><kbd class="word">p</kbd><span>ick</span></span>
				<span class="shortcut"><kbd class="word">r</kbd><span>eword</span></span>
				<span class="shortcut"><kbd class="word">e</kbd><span>dit</span></span>
				<span class="shortcut"><kbd class="word">s</kbd><span>quash</span></span>
				<span class="shortcut"><kbd class="word">f</kbd><span>ixup</span></span>
				<span class="shortcut"><kbd class="word">d</kbd><span>rop</span></span>
				<span class="shortcut"><kbd>alt</kbd> <kbd>↑↓</kbd><span class="label">move</span></span>
				<span class="shortcut"><kbd>/</kbd><span class="label">search</span></span>
			</div>
			<div class="actions">
				${this.renderRecomposeAction(e)}
				${e?this.renderActiveRebaseActions(t):this.renderStartRebaseActions()}
			</div>
		</footer>`}renderStartRebaseActions(){let e,t,i;if(!this.isRebasing&&this.state?.branch&&this.state?.onto){let o=this._conflictsLoading,r=this._conflictResult?.status==="conflicts",s=this.conflictDetectionStale;o?(t="loading",i="Checking for conflicts..."):r?(e="warning",t="warning",i="Start Rebase (Conflicts Detected)"):s||(e="success",t="check",i="Start Rebase (No Conflicts Detected)")}return ew`<gl-button
				?disabled=${!this.state?.entries?.length}
				variant=${e??e$}
				tooltip=${i??e$}
				@click=${this.onStartClicked}
			>
				<span
					>Start Rebase
					${t?ew`<code-icon
								slot="label"
								icon=${t}
								modifier=${("loading"===t?"spin":void 0)??e$}
							></code-icon>`:e$}</span
				>
				<span slot="suffix" class="button-shortcut">Ctrl+Enter</span>
			</gl-button>
			<gl-button appearance="secondary" @click=${this.onAbortClicked}>Abort</gl-button>`}renderRecomposeAction(e){let t=this.state?.isInPlace??!1;return ew`<gl-popover-confirm
			heading="Abort Rebase &amp; Recompose"
			message=${t?"Let AI intelligently reorganize these commits with clearer messages and better logical grouping.":"Let AI intelligently reorganize these commits with clearer messages and better logical grouping. <br><br> After recomposition, simply rebase again to apply these commits onto the target branch."}
			confirm="Abort &gt; Recompose"
			confirm-variant=${(e?"danger":void 0)??e$}
			initial-focus=${e?"cancel":"confirm"}
			icon=${e?"error":"warning"}
			@gl-confirm=${this.onRecomposeCommitsClicked}
		>
			<gl-button slot="anchor" appearance="secondary" tooltip="Open Commit Composer &amp; Recompose using AI">
				<code-icon slot=${(e?void 0:"prefix")??e$} icon="sparkle"></code-icon>
				${e?e$:"Recompose..."}
			</gl-button>
		</gl-popover-confirm>`}renderActiveRebaseActions(e){return ew`
			<gl-button @click=${this.onContinueClicked} ?disabled=${e}>
				<span>Continue</span>
				<span slot="suffix" class="button-shortcut">Ctrl+Enter</span>
			</gl-button>
			<gl-button appearance="secondary" @click=${this.onSkipClicked}>Skip</gl-button>
			<gl-button variant="danger" @click=${this.onAbortClicked}>Abort</gl-button>
		`}};hP.styles=[oF,oV],hA([eB("lit-virtualizer")],hP.prototype,"_virtualizer",2),hA([eO()],hP.prototype,"_conflictResult",2),hA([eO()],hP.prototype,"_conflictsLoading",2),hA([eO()],hP.prototype,"_conflictingShas",2),hA([eO()],hP.prototype,"selectedIds",2),hA([eO()],hP.prototype,"conflictDetectionStale",2),hA([eO()],hP.prototype,"closeWarningDismissedLocal",2),hA([eO()],hP.prototype,"_splitPosition",2),hA([eO()],hP.prototype,"_conflictFilesLayout",2),hP=hA([eM("gl-rebase-editor")],hP);export{hP as GlRebaseEditor};