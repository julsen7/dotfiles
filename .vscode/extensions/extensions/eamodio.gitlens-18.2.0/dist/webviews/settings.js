let t,i,r,o,n,a,c;"u">typeof __webpack_require__&&Object.defineProperty(__webpack_require__,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(t){}});var h,u,p,f,g,m,v,b=((p=b||{}).Jira="jira",p.Linear="linear",p.Trello="trello",p);function w(t,i){return null==i?`command:${t}`:`command:${t}?${encodeURIComponent("string"==typeof i?i:JSON.stringify(i))}`}let IpcCall=class IpcCall{constructor(t,i,r=!1){this.scope=t,this.reset=r,this.method=`${t}/${i}`}is(t){return t.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(t,i,r){super(t,i,r),this.response=new IpcNotification(this.scope,`${i}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let y=new IpcRequest("core","webview/ready"),_=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let C=new IpcRequest("core","promos/applicable"),$=new IpcCommand("core","configuration/update"),x=new IpcCommand("core","telemetry/sendEvent"),A=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let E=new IpcCommand("core","webview/focus/didChange"),P=new IpcNotification("core","webview/visibility/didChange"),T=new IpcNotification("core","configuration/didChange"),O="settings",M=new IpcRequest(O,"configuration/preview"),N=new IpcNotification(O,"didOpenAnchor"),D=new IpcNotification(O,"didChangeAccount"),q=new IpcNotification(O,"didChangeIssueIntegrationConnected");let context_request_event_s=class context_request_event_s extends Event{constructor(t,i,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=i,this.callback=r,this.subscribe=o??!1}};let s=class s{constructor(t,i,r,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,i)=>{this.unsubscribe&&(this.unsubscribe!==i&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,i)),this.unsubscribe=i},this.host=t,void 0!==i.context)?(this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1):(this.context=i,this.callback=r,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,i=!1){let r=i||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:i}]of this.subscriptions)t(this.o,i)},void 0!==t&&(this.value=t)}addCallback(t,i,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:i});let{disposer:o}=this.subscriptions.get(t);t(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let e=class e extends Event{constructor(t,i){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=i}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(t,i,r){super(void 0!==i.context?i.initialValue:r),this.onContextRequest=t=>{if(t.context!==this.context)return;let i=t.contextTarget??t.composedPath()[0];i!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,i,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context||(t.contextTarget??t.composedPath()[0])===this.host)return;let i=new Set;for(let[t,{consumerHost:r}]of this.subscriptions)i.has(t)||(i.add(t),r.dispatchEvent(new context_request_event_s(this.context,r,t,!0)));t.stopPropagation()},this.host=t,void 0!==i.context?this.context=i.context:this.context=i,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new e(this.context,this.host))}};function B({context:t}){return(i,r)=>{let o=new WeakMap;if("object"==typeof r)return{get(){return i.get.call(this)},set(t){return o.get(this).setValue(t),i.set.call(this,t)},init(i){return o.set(this,new context_provider_i(this,{context:t,initialValue:i})),i}};{let n;i.constructor.addInitializer(i=>{o.set(i,new context_provider_i(i,{context:t}))});let a=Object.getOwnPropertyDescriptor(i,r);if(void 0===a){let t=new WeakMap;n={get(){return t.get(this)},set(i){o.get(this).setValue(i),t.set(this,i)},configurable:!0,enumerable:!0}}else{let t=a.set;n={...a,set(i){o.get(this).setValue(i),t?.call(this,i)}}}return void Object.defineProperty(i,r,n)}}}var j=Object.defineProperty,U=(t,i,r)=>{let o;return(o="symbol"!=typeof i?i+"":i)in t?j(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,r},F=(t,i)=>{if(Object(i)!==i)throw TypeError('Cannot use the "in" operator on this value');return t.has(i)},V=(t,i,r)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,r)},W=(t,i,r)=>{if(!i.has(t))throw TypeError("Cannot access private method");return r};function G(t,i){return Object.is(t,i)}let Y=null,J=!1,K=1,X=Symbol("SIGNAL");function Q(t){let i=Y;return Y=t,i}let ee={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function et(t){if(J)throw Error("u">typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===Y)return;Y.consumerOnSignalRead(t);let i=Y.nextProducerIndex++;eo(Y),i<Y.producerNode.length&&Y.producerNode[i]!==t&&er(Y)&&ei(Y.producerNode[i],Y.producerIndexOfThis[i]),Y.producerNode[i]!==t&&(Y.producerNode[i]=t,Y.producerIndexOfThis[i]=er(Y)?function t(i,r,o){var n;if(es(i),eo(i),0===i.liveConsumerNode.length){null==(n=i.watched)||n.call(i.wrapper);for(let r=0;r<i.producerNode.length;r++)i.producerIndexOfThis[r]=t(i.producerNode[r],i,r)}return i.liveConsumerIndexOfThis.push(o),i.liveConsumerNode.push(r)-1}(t,Y,i):0),Y.producerLastReadVersion[i]=t.version}function ei(t,i){var r;if(es(t),eo(t),"u">typeof ngDevMode&&ngDevMode&&i>=t.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${i} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(1===t.liveConsumerNode.length){null==(r=t.unwatched)||r.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)ei(t.producerNode[i],t.producerIndexOfThis[i])}let o=t.liveConsumerNode.length-1;if(t.liveConsumerNode[i]=t.liveConsumerNode[o],t.liveConsumerIndexOfThis[i]=t.liveConsumerIndexOfThis[o],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,i<t.liveConsumerNode.length){let r=t.liveConsumerIndexOfThis[i],o=t.liveConsumerNode[i];eo(o),o.producerIndexOfThis[r]=i}}function er(t){var i;return t.consumerIsAlwaysLive||((null==(i=null==t?void 0:t.liveConsumerNode)?void 0:i.length)??0)>0}function eo(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function es(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}function en(t){if(function t(i){if(i.dirty||i.lastCleanEpoch!==K){if(!i.producerMustRecompute(i)&&!function(i){eo(i);for(let r=0;r<i.producerNode.length;r++){let o=i.producerNode[r],n=i.producerLastReadVersion[r];if(n!==o.version||(t(o),n!==o.version))return!0}return!1}(i)){i.dirty=!1,i.lastCleanEpoch=K;return}i.producerRecomputeValue(i),i.dirty=!1,i.lastCleanEpoch=K}}(t),et(t),t.value===ec)throw t.error;return t.value}let ea=Symbol("UNSET"),el=Symbol("COMPUTING"),ec=Symbol("ERRORED"),eh={...ee,value:ea,dirty:!0,error:null,equal:G,producerMustRecompute:t=>t.value===ea||t.value===el,producerRecomputeValue(t){let i;if(t.value===el)throw Error("Detected cycle in computations.");let r=t.value;t.value=el;let o=(t&&(t.nextProducerIndex=0),Q(t)),n=!1;try{i=t.computation.call(t.wrapper),n=r!==ea&&r!==ec&&t.equal.call(t.wrapper,r,i)}catch(r){i=ec,t.error=r}finally{if(Q(o),t&&void 0!==t.producerNode&&void 0!==t.producerIndexOfThis&&void 0!==t.producerLastReadVersion){if(er(t))for(let i=t.nextProducerIndex;i<t.producerNode.length;i++)ei(t.producerNode[i],t.producerIndexOfThis[i]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}if(n){t.value=r;return}t.value=i,t.version++}},ed=function(){throw Error()};function eu(){return et(this),this.value}let ep={...ee,equal:G,value:void 0},ef=Symbol("node");(t=>{var i,r,o,n;let State=class State{constructor(o,n={}){let a,c;V(this,r),U(this,i);let h=((a=Object.create(ep)).value=o,(c=()=>(et(a),a.value))[X]=a,c)[X];if(this[ef]=h,h.wrapper=this,n){let i=n.equals;i&&(h.equal=i),h.watched=n[t.subtle.watched],h.unwatched=n[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return eu.call(this[ef])}set(i){var r,o;if(!(0,t.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(J)throw Error("Writes to signals not permitted during Watcher callback");r=this[ef],(null==Y?void 0:Y.consumerAllowSignalWrites)===!1&&ed(),r.equal.call(r.wrapper,r.value,i)||(r.value=i,o=r,o.version++,K++,function t(i){if(void 0===i.liveConsumerNode)return;let r=J;J=!0;try{for(let r of i.liveConsumerNode)r.dirty||function(i){var r;i.dirty=!0,t(i),null==(r=i.consumerMarkedDirty)||r.call(i.wrapper??i)}(r)}finally{J=r}}(o))}};i=ef,r=new WeakSet,t.isState=t=>"object"==typeof t&&F(r,t),t.State=State;let Computed=class Computed{constructor(i,r){let a,c;V(this,n),U(this,o);let h=((a=Object.create(eh)).computation=i,(c=()=>en(a))[X]=a,c)[X];if(h.consumerAllowSignalWrites=!0,this[ef]=h,h.wrapper=this,r){let i=r.equals;i&&(h.equal=i),h.watched=r[t.subtle.watched],h.unwatched=r[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return en(this[ef])}};o=ef,n=new WeakSet,t.isComputed=t=>"object"==typeof t&&F(n,t),t.Computed=Computed,(i=>{var r,o,n,a;i.untrack=function(t){let i,r=null;try{r=Q(null),i=t()}finally{Q(r)}return i},i.introspectSources=function(i){var r;if(!(0,t.isComputed)(i)&&!(0,t.isWatcher)(i))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=i[ef].producerNode)?void 0:r.map(t=>t.wrapper))??[]},i.introspectSinks=function(i){var r;if(!(0,t.isComputed)(i)&&!(0,t.isState)(i))throw TypeError("Called introspectSinks without a Signal argument");return(null==(r=i[ef].liveConsumerNode)?void 0:r.map(t=>t.wrapper))??[]},i.hasSinks=function(i){if(!(0,t.isComputed)(i)&&!(0,t.isState)(i))throw TypeError("Called hasSinks without a Signal argument");let r=i[ef].liveConsumerNode;return!!r&&r.length>0},i.hasSources=function(i){if(!(0,t.isComputed)(i)&&!(0,t.isWatcher)(i))throw TypeError("Called hasSources without a Computed or Watcher argument");let r=i[ef].producerNode;return!!r&&r.length>0};let Watcher=class Watcher{constructor(t){V(this,o),V(this,n),U(this,r);let i=Object.create(ee);i.wrapper=this,i.consumerMarkedDirty=t,i.consumerIsAlwaysLive=!0,i.consumerAllowSignalWrites=!1,i.producerNode=[],this[ef]=i}watch(...i){if(!(0,t.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");W(this,n,a).call(this,i);let r=this[ef];r.dirty=!1;let o=Q(r);for(let t of i)et(t[ef]);Q(o)}unwatch(...i){if(!(0,t.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");W(this,n,a).call(this,i);let r=this[ef];eo(r);for(let t=r.producerNode.length-1;t>=0;t--)if(i.includes(r.producerNode[t].wrapper)){ei(r.producerNode[t],r.producerIndexOfThis[t]);let i=r.producerNode.length-1;if(r.producerNode[t]=r.producerNode[i],r.producerIndexOfThis[t]=r.producerIndexOfThis[i],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,t<r.producerNode.length){let i=r.producerIndexOfThis[t],o=r.producerNode[t];es(o),o.liveConsumerIndexOfThis[i]=t}}}getPending(){if(!(0,t.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[ef].producerNode.filter(t=>t.dirty).map(t=>t.wrapper)}};r=ef,o=new WeakSet,n=new WeakSet,a=function(i){for(let r of i)if(!(0,t.isComputed)(r)&&!(0,t.isState)(r))throw TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=t=>F(o,t),i.Watcher=Watcher,i.currentComputed=function(){var t;return null==(t=Y)?void 0:t.wrapper},i.watched=Symbol("watched"),i.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(f||(f={}));let eg=!1,em=new f.subtle.Watcher(()=>{eg||(eg=!0,queueMicrotask(()=>{for(let t of(eg=!1,em.getPending()))t.get();em.watch()}))}),ev=Symbol("SignalWatcherBrand"),eb=(new FinalizationRegistry(t=>{t.unwatch(...f.subtle.introspectSources(t))}),new WeakMap,t=>(...i)=>({_$litDirective$:t,values:i}));let directive_i=class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};let ew=globalThis,ey=t=>t,e_=ew.trustedTypes,eC=e_?e_.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$="$lit$",ex=`lit$${Math.random().toFixed(9).slice(2)}$`,eS="?"+ex,ek=`<${eS}>`,eA=document,eE=()=>eA.createComment(""),eL=t=>null===t||"object"!=typeof t&&"function"!=typeof t,eP=Array.isArray,eT=t=>eP(t)||"function"==typeof t?.[Symbol.iterator],eI=`[ 	
\x0c\r]`,eO=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eM=/-->/g,eR=/>/g,eN=RegExp(`>|${eI}(?:([^\\s"'>=/]+)(${eI}*=${eI}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eD=/'/g,ez=/"/g,eq=/^(?:script|style|textarea|title)$/i,eB=t=>(i,...r)=>({_$litType$:t,strings:i,values:r}),ej=eB(1),eU=eB(2),eH=(eB(3),Symbol.for("lit-noChange")),eF=Symbol.for("lit-nothing"),eV=new WeakMap,eW=eA.createTreeWalker(eA,129);function eZ(t,i){if(!eP(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==eC?eC.createHTML(i):i}let eG=(t,i)=>{let r=t.length-1,o=[],n,a=2===i?"<svg>":3===i?"<math>":"",c=eO;for(let i=0;i<r;i++){let r=t[i],h,u,p=-1,f=0;for(;f<r.length&&(c.lastIndex=f,null!==(u=c.exec(r)));)f=c.lastIndex,c===eO?"!--"===u[1]?c=eM:void 0!==u[1]?c=eR:void 0!==u[2]?(eq.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=eN):void 0!==u[3]&&(c=eN):c===eN?">"===u[0]?(c=n??eO,p=-1):void 0===u[1]?p=-2:(p=c.lastIndex-u[2].length,h=u[1],c=void 0===u[3]?eN:'"'===u[3]?ez:eD):c===ez||c===eD?c=eN:c===eM||c===eR?c=eO:(c=eN,n=void 0);let g=c===eN&&t[i+1].startsWith("/>")?" ":"";a+=c===eO?r+ek:p>=0?(o.push(h),r.slice(0,p)+e$+r.slice(p)+ex+g):r+ex+(-2===p?i:g)}return[eZ(t,a+(t[r]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};let S=class S{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let n=0,a=0,c=t.length-1,h=this.parts,[u,p]=eG(t,i);if(this.el=S.createElement(u,r),eW.currentNode=this.el.content,2===i||3===i){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=eW.nextNode())&&h.length<c;){if(1===o.nodeType){if(o.hasAttributes())for(let t of o.getAttributeNames())if(t.endsWith(e$)){let i=p[a++],r=o.getAttribute(t).split(ex),c=/([.?@])?(.*)/.exec(i);h.push({type:1,index:n,name:c[2],strings:r,ctor:"."===c[1]?I:"?"===c[1]?L:"@"===c[1]?z:H}),o.removeAttribute(t)}else t.startsWith(ex)&&(h.push({type:6,index:n}),o.removeAttribute(t));if(eq.test(o.tagName)){let t=o.textContent.split(ex),i=t.length-1;if(i>0){o.textContent=e_?e_.emptyScript:"";for(let r=0;r<i;r++)o.append(t[r],eE()),eW.nextNode(),h.push({type:2,index:++n});o.append(t[i],eE())}}}else if(8===o.nodeType)if(o.data===eS)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(ex,t+1));)h.push({type:7,index:n}),t+=ex.length-1}n++}}static createElement(t,i){let r=eA.createElement("template");return r.innerHTML=t,r}};function eY(t,i,r=t,o){if(i===eH)return i;let n=void 0!==o?r._$Co?.[o]:r._$Cl,a=eL(i)?void 0:i._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t))._$AT(t,r,o),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(i=eY(t,n._$AS(t,i.values),n,o)),i}let R=class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:i},parts:r}=this._$AD,o=(t?.creationScope??eA).importNode(i,!0);eW.currentNode=o;let n=eW.nextNode(),a=0,c=0,h=r[0];for(;void 0!==h;){if(a===h.index){let i;2===h.type?i=new k(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new Z(n,this,t)),this._$AV.push(i),h=r[++c]}a!==h?.index&&(n=eW.nextNode(),a++)}return eW.currentNode=eA,o}p(t){let i=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,r,o){this.type=2,this._$AH=eF,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){eL(t=eY(this,t,i))?t===eF||null==t||""===t?(this._$AH!==eF&&this._$AR(),this._$AH=eF):t!==this._$AH&&t!==eH&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):eT(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==eF&&eL(this._$AH)?this._$AA.nextSibling.data=t:this.T(eA.createTextNode(t)),this._$AH=t}$(t){let{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=S.createElement(eZ(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(i);else{let t=new R(o,this),r=t.u(this.options);t.p(i),this.T(r),this._$AH=t}}_$AC(t){let i=eV.get(t.strings);return void 0===i&&eV.set(t.strings,i=new S(t)),i}k(t){eP(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,r,o=0;for(let n of t)o===i.length?i.push(r=new k(this.O(eE()),this.O(eE()),this,this.options)):r=i[o],r._$AI(n),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){let i=ey(t).nextSibling;ey(t).remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,o,n){this.type=1,this._$AH=eF,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=eF}_$AI(t,i=this,r,o){let n=this.strings,a=!1;if(void 0===n)(a=!eL(t=eY(this,t,i,0))||t!==this._$AH&&t!==eH)&&(this._$AH=t);else{let o,c,h=t;for(t=n[0],o=0;o<n.length-1;o++)(c=eY(this,h[r+o],i,o))===eH&&(c=this._$AH[o]),a||=!eL(c)||c!==this._$AH[o],c===eF?t=eF:t!==eF&&(t+=(c??"")+n[o+1]),this._$AH[o]=c}a&&!o&&this.j(t)}j(t){t===eF?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===eF?void 0:t}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==eF)}};let z=class z extends H{constructor(t,i,r,o,n){super(t,i,r,o,n),this.type=5}_$AI(t,i=this){if((t=eY(this,t,i,0)??eF)===eH)return;let r=this._$AH,o=t===eF&&r!==eF||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==eF&&(r===eF||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};let Z=class Z{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){eY(this,t)}};let eJ=ew.litHtmlPolyfillSupport;eJ?.(S,k),(ew.litHtmlVersions??=[]).push("3.3.3");let{I:eK}={M:e$,P:ex,A:eS,C:1,L:eG,R,D:eT,V:eY,I:k,H,N:L,U:z,B:I,F:Z},eX=(t,i)=>{let r=t._$AN;if(void 0===r)return!1;for(let t of r)t._$AO?.(i,!1),eX(t,i);return!0},eQ=t=>{let i,r;do{if(void 0===(i=t._$AM))break;(r=i._$AN).delete(t),t=i}while(0===r?.size)},e1=t=>{for(let i;i=t._$AM;t=i){let r=i._$AN;if(void 0===r)i._$AN=r=new Set;else if(r.has(t))break;r.add(t),e3(i)}};function e0(t){void 0!==this._$AN?(eQ(this),this._$AM=t,e1(this)):this._$AM=t}function e2(t,i=!1,r=0){let o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(i)if(Array.isArray(o))for(let t=r;t<o.length;t++)eX(o[t],!1),eQ(o[t]);else null!=o&&(eX(o,!1),eQ(o));else eX(this,t)}let e3=t=>{2==t.type&&(t._$AP??=e2,t._$AQ??=e0)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),e1(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(eX(this,t),eQ(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{let i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};let e5=!1,e4=new f.subtle.Watcher(async()=>{e5||(e5=!0,queueMicrotask(()=>{for(let t of(e5=!1,e4.getPending()))t.get();e4.watch()}))});let watch_r=class watch_r extends async_directive_f{_$S_(){var t,i;void 0===this._$Sm&&(this._$Sj=new f.Computed(()=>{var t;let i=null==(t=this._$SW)?void 0:t.get();return this.setValue(i),i}),this._$Sm=null!=(i=null==(t=this._$Sk)?void 0:t.h)?i:e4,this._$Sm.watch(this._$Sj),f.subtle.untrack(()=>{var t;return null==(t=this._$Sj)?void 0:t.get()}))}_$Sp(){void 0!==this._$Sm&&(this._$Sm.unwatch(this._$SW),this._$Sm=void 0)}render(t){return f.subtle.untrack(()=>t.get())}update(t,[i]){var r;return null!=this._$Sk||(this._$Sk=null==(r=t.options)?void 0:r.host),i!==this._$SW&&void 0!==this._$SW&&this._$Sp(),this._$SW=i,this._$S_(),f.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$S_()}};let e6=eb(watch_r),e7=t=>(i,...r)=>t(i,...r.map(t=>t instanceof f.State||t instanceof f.Computed?e6(t):t));e7(ej),e7(eU),f.State,f.Computed;let e8=globalThis,e9=e8.ShadowRoot&&(void 0===e8.ShadyCSS||e8.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),tt=new WeakMap;let css_tag_n=class css_tag_n{constructor(t,i,r){if(this._$cssResult$=!0,r!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o,i=this.t;if(e9&&void 0===t){let r=void 0!==i&&1===i.length;r&&(t=tt.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&tt.set(i,t))}return t}toString(){return this.cssText}};let ti=t=>new css_tag_n("string"==typeof t?t:t+"",void 0,te),tr=(t,...i)=>new css_tag_n(1===t.length?t[0]:i.reduce((i,r,o)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]),t,te),to=e9?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(let r of t.cssRules)i+=r.cssText;return ti(i)})(t):t,{is:ts,defineProperty:tn,getOwnPropertyDescriptor:ta,getOwnPropertyNames:tl,getOwnPropertySymbols:tc,getPrototypeOf:th}=Object,td=globalThis,tu=td.trustedTypes,tp=tu?tu.emptyScript:"",tf=td.reactiveElementPolyfillSupport,tg={toAttribute(t,i){switch(i){case Boolean:t=t?tp:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let r=t;switch(i){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},tm=(t,i)=>!ts(t,i),tv={attribute:!0,type:String,converter:tg,reflect:!1,useDefault:!1,hasChanged:tm};Symbol.metadata??=Symbol("metadata"),td.litPropertyMetadata??=new WeakMap;let reactive_element_y=class reactive_element_y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=tv){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(t,r,i);void 0!==o&&tn(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){let{get:o,set:n}=ta(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get:o,set(i){let a=o?.call(this);n?.call(this,i),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tv}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=th(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let i of[...tl(t),...tc(t)])this.createProperty(i,t[i])}let t=this[Symbol.metadata];if(null!==t){let i=litPropertyMetadata.get(t);if(void 0!==i)for(let[t,r]of i)this.elementProperties.set(t,r)}for(let[t,i]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(t,i);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let i=[];if(Array.isArray(t))for(let r of new Set(t.flat(1/0).reverse()))i.unshift(to(r));else void 0!==t&&i.push(to(t));return i}static _$Eu(t,i){let r=i.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let i of this.constructor.elementProperties.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(e9)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let r of i){let i=document.createElement("style"),o=e8.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){let r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:tg).toAttribute(i,r.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,i){let r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){let t=r.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:tg;this._$Em=o;let a=n.fromAttribute(i,t.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,i,r,o=!1,n){if(void 0!==t){let a=this.constructor;if(!1===o&&(n=this[t]),!(((r??=a.getPropertyOptions(t)).hasChanged??tm)(n,i)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,i,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:o,wrapped:n},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??i??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[i,r]of t){let{wrapped:t}=r,o=this[i];!0!==t||this._$AL.has(i)||void 0===o||this.C(i,void 0,r,o)}}let t=!1,i=this._$AL;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(i)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};reactive_element_y.elementStyles=[],reactive_element_y.shadowRootOptions={mode:"open"},reactive_element_y.elementProperties=new Map,reactive_element_y.finalized=new Map,tf?.({ReactiveElement:reactive_element_y}),(td.reactiveElementVersions??=[]).push("2.1.2");let tb=globalThis;let lit_element_i=class lit_element_i extends reactive_element_y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,r)=>{let o=r?.renderBefore??i,n=o._$litPart$;if(void 0===n){let t=r?.renderBefore??null;o._$litPart$=n=new k(i.insertBefore(eE(),t),t,void 0,r??{})}return n._$AI(t),n})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eH}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,tb.litElementHydrateSupport?.({LitElement:lit_element_i});let tw=tb.litElementPolyfillSupport;tw?.({LitElement:lit_element_i}),(tb.litElementVersions??=[]).push("4.2.2");let ty=t=>(i,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,i)}):customElements.define(t,i)},t_={attribute:!0,type:String,converter:tg,reflect:!1,hasChanged:tm};function tC(t){return(i,r)=>{let o;return"object"==typeof r?((t=t_,i,r)=>{let{kind:o,metadata:n}=r,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),a.set(r.name,t),"accessor"===o){let{name:o}=r;return{set(r){let n=i.get.call(this);i.set.call(this,r),this.requestUpdate(o,n,t,!0,r)},init(i){return void 0!==i&&this.C(o,void 0,t,i),i}}}if("setter"===o){let{name:o}=r;return function(r){let n=this[o];i.call(this,r),this.requestUpdate(o,n,t,!0,r)}}throw Error("Unsupported decorator location: "+o)})(t,i,r):(o=i.hasOwnProperty(r),i.constructor.createProperty(r,t),o?Object.getOwnPropertyDescriptor(i,r):void 0)}}function t$(t){return tC({...t,state:!0,attribute:!1})}let tx=(t,i,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof i&&Object.defineProperty(t,i,r),r);function tS(t,i){return(r,o,n)=>{let a=i=>i.renderRoot?.querySelector(t)??null;if(i){let t,{get:i,set:c}="object"==typeof o?r:n??(t=Symbol(),{get(){return this[t]},set(i){this[t]=i}});return tx(r,o,{get(){let t=i.call(this);return void 0===t&&(null!==(t=a(this))||this.hasUpdated)&&c.call(this,t),t}})}return tx(r,o,{get(){return a(this)}})}}let{fromCharCode:tk}=String;new TextEncoder;let tA=new TextDecoder;function tE(t,i,r){let o,n,a,c,h,u,p,f,g,m,v=0;null!=r&&({edges:u,maxWait:p,cancellation:f,aggregator:g}=r);let b="leading"===(u??="trailing")||"both"===u,w="trailing"===u||"both"===u;function y(){if(null!=o){v=Date.now();let i=o,r=m;return m=void 0,o=void 0,a=t.apply(r,i)}}function _(){null!=c&&(clearTimeout(c),c=void 0)}function C(){null!=h&&(clearTimeout(h),h=void 0)}function $(){_(),C(),m=void 0,o=void 0,n=void 0,v=0}function x(...t){if(f?.aborted)return;let r=Date.now();null!=g&&null!=o?o=g(o,t):(m=this,o=t);let u=null==c&&null==h;n=r,_();let C=Date.now();if(n=C,c=setTimeout(()=>{c=void 0,function t(){let r,o,a=Date.now();if(r=a-(n??0),o=a-v,null==n||r>=i||r<0||null!=p&&o>=p){w&&y(),$();return}c=setTimeout(()=>{c=void 0,t()},i-(a-(n??0)))}()},i),null!=p&&!h){0===v&&(v=C);let t=p-(C-v);t>0?h=setTimeout(()=>{h=void 0,w&&null!=o&&y(),v=Date.now()},t):(w&&null!=o&&y(),$())}return b&&u?y():a}return x.cancel=$,x.flush=function(){return _(),C(),y()},x.pending=function(){return null!=c||null!=h},f?.addEventListener("abort",$,{once:!0}),x}function tL(t,i,r,o){return`command:${t}?${encodeURIComponent(JSON.stringify({webview:i,webviewInstance:r,...o}))}`}let tP=new WeakMap;function tT(t,i){return function(r,o,n){let a=tP.get(r.constructor);null==a&&tP.set(r.constructor,a=[]),a.push({method:n.value,keys:Array.isArray(t)?t:[t],afterFirstUpdate:i?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(t,i,r){let o=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:i});return this.dispatchEvent(o),o}update(t){let i=tP.get(this.constructor);if(null!=i)for(let{keys:r,method:o,afterFirstUpdate:n}of i){if(n&&!this.hasUpdated)continue;let i=r.filter(i=>t.has(i));i.length&&o.call(this,i)}super.update(t)}};let tI=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,tO=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tM=new Map,tR=new Map;function tN(i,r,o,n=!0){if(r=r??void 0,Number.isNaN("number"==typeof i?i:i.getTime()))return"";let a=`${o??""}:${r}`,c=tM.get(a);if(null==c){let i,h=function(t){if(null==t)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let i=tO.exec(t);if(i?.groups!=null){let{dateStyle:t,timeStyle:r}=i.groups;return{localeMatcher:"best fit",dateStyle:t||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:i}of t.matchAll(tI))if(null!=i){for(let[t,o]of Object.entries(i))if(null!=o)switch(t){case"year":r.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":"DD"===o?r.day="2-digit":r.day="numeric";break;case"weekday":switch(o.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===o.length?"2-digit":"numeric",r.hour12="hh"===o||"h"===o;break;case"minute":r.minute=2===o.length?"2-digit":"numeric";break;case"second":r.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===o.length?"long":"short"}}return r}(r);i=null==o?t:"system"===o?void 0:[o],c=new Intl.DateTimeFormat(i,h),n&&tM.set(a,c)}if(null==r||tO.test(r))return c.format(i);let h=c.formatToParts(i);return r.replace(tI,(r,a,c,u,p,f,g,m,v,b,w,y,_,C,$)=>{if(null!=a)return a.substring(1,a.length-1);for(let[r,a]of Object.entries($)){if(null==a)continue;let c=h.find(t=>t.type===r);if("Do"===a&&c?.type==="day")return function(t){let i=t%100;return`${t}${tD[(i-20)%10]??tD[i]??tD[0]}`}(Number(c.value));if("a"===a&&c?.type==="dayPeriod"){let r=(function(i){let r=`${o??""}:time:${i}`,a=tM.get(r);if(null==a){let c;c=null==o?t:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(c,{localeMatcher:"best fit",timeStyle:i}),n&&tM.set(r,a)}return a})("short").formatToParts(i).find(t=>"dayPeriod"===t.type);return` ${(r??c)?.value??""}`}return c?.value??""}return""})}let tD=["th","st","nd","rd"];function tz(i,r){i??="decimal";let o=`${r??""}:${i}`,n=tR.get(o);if(null==n){let a,c={localeMatcher:"best fit",style:i};a=null==r?t:"system"===r?void 0:[r],n=new Intl.NumberFormat(a,c),tR.set(o,n)}return n.format}function tq(t,r,o){let n;if(null==o)return i??=tz(),`${i(r)} ${t}${1===r?"":"s"}`;let a=1===r?t:o.plural??`${t}s`;return o.only?a:(0===r?n=o.zero??r:!1===o.format?n=r:null!=o.format?n=o.format(r):(i??=tz(),n=i(r)),`${n}${o.infix??" "}${a}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let tB=/T/,tj=/.*\s*?at\s(.+?)\s/,tU=/^_+/,tH=["accessToken","password","token"];let Logger=class Logger{#e;#t;configure(t,i=!1){this.#t={...t,sanitizeKeys:new Set([...tH,...t.sanitizeKeys??[]])},this.#i=i,this.#e=t.createChannel(t.name),this.#r=this.#e.logLevel,this.#e.onDidChangeLogLevel?.(t=>{this.#r=t})}enabled(t){return!!this.isDebugging||0!==this.#r&&(null==t||this.#r<=function(t){switch(t){case"off":default:return 0;case"trace":return 1;case"debug":return 2;case"info":return 3;case"warn":return 4;case"error":return 5}}(t))}#i=!1;get isDebugging(){return this.#i}#r=0;get logLevel(){var t=this.#r;switch(t){case 0:default:return"off";case 1:return"trace";case 2:return"debug";case 3:return"info";case 4:return"warn";case 5:return"error"}}get timestamp(){return`[${new Date().toISOString().replace(tB," ").slice(0,-1)}]`}trace(t,...i){let r;(0!==this.#r&&!(this.#r>1)||this.isDebugging)&&("string"==typeof t?r=t:(r=i.shift(),null!=t&&(r=`${t.prefix} ${r??""}`)),this.isDebugging,this.#e?.trace(`  ${r??""}${this.#o(!0,i)}`))}debug(t,...i){let r;(0!==this.#r&&!(this.#r>2)||this.isDebugging)&&("string"==typeof t?r=t:(r=i.shift(),null!=t&&(r=`${t.prefix} ${r??""}`)),this.isDebugging,this.#e?.debug(`  ${r??""}${this.#o(!1,i)}`))}info(t,...i){let r;(0!==this.#r&&!(this.#r>3)||this.isDebugging)&&("string"==typeof t?r=t:(r=i.shift(),null!=t&&(r=`${t.prefix} ${r??""}`)),this.isDebugging,this.#e?.info(`   ${r??""}${this.#o(!1,i)}`))}warn(t,...i){let r;(0!==this.#r&&!(this.#r>4)||this.isDebugging)&&("string"==typeof t?r=t:(r=i.shift(),null!=t&&(r=`${t.prefix} ${r??""}`)),this.isDebugging,this.#e?.warn(`${r??""}${this.#o(!1,i)}`))}error(t,i,...r){let o;if((0===this.#r||this.#r>5)&&!this.isDebugging)return;if(null==(o=null==i||"string"==typeof i?i:`${i.prefix} ${r.shift()??""}`)){let i=t instanceof Error?t.stack:void 0;if(i){let t=tj.exec(i);null!=t&&(o=t[1])}}this.isDebugging;let n=`  ${o??""}${this.#o(!1,r)}`;null!=t?this.#e?.error(String(t),n):this.#e?.error(n)}showOutputChannel(t){this.#e?.show?.(t)}toLoggable(t,i){if(null!=i){let r=this.sanitize(i,t);if(null!=r)return r}if("function"==typeof t)return"<function>";if(null==t||"object"!=typeof t||t instanceof Error)return String(t);if(Array.isArray(t)){let i=t.length>10?t.slice(0,10):t,r=t.length>10?`, \u2026+${t.length-10}`:"";return`[${i.map(t=>this.toLoggable(t)).join(", ")}${r}]`}let r=this.#t?.toLoggable,o=r?.(t);if(null!=o)return o;let n=this.#t?.sanitizeKeys;try{return JSON.stringify(t,(t,i)=>{if(95!==t.charCodeAt(0))return n?.has(t)?this.sanitize(t,i):""===t||"object"!=typeof i||null==i||Array.isArray(i)?i:i instanceof Error?String(i):r?.(i)??i})}catch{return"<error>"}}sanitize(t,i){if(null==i)return;let r=t.replace(tU,"")||t;if(this.#t?.sanitizeKeys?.has(r))return null!=this.#t.hash?`<${r}:${this.#t.hash("string"==typeof i?i:JSON.stringify(i))}>`:`<${r}>`}#o(t,i){if(0===i.length||t&&(0===this.#r||this.#r>2)&&!this.isDebugging)return"";let r=i.map(t=>this.toLoggable(t)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};let tF=new Logger,tV=new WeakMap,tW={enabled:t=>tF.enabled(t),log:(t,i,r,...o)=>{switch(t){case"error":tF.error(void 0,i,r,...o);break;case"warn":i?.warn(r,...o);break;case"info":i?.info(r,...o);break;case"debug":default:i?.debug(r,...o);break;case"trace":i?.trace(r,...o)}}},tZ=new Map;function tG(t,i){let o=r;r=t.scopeId,tZ.set(t.scopeId,t);try{return i()}finally{r=o,tZ.delete(t.scopeId)}}function tY(){return null!=r?tZ.get(r):void 0}let tJ=0x40000000-1;function tK(){let t=0;return{get current(){return t},next:function(){return t===tJ&&(t=0),++t},reset:function(){t=0}}}function tX(t){let i=.001*performance.now(),r=Math.floor(i),o=Math.floor(i%1*1e9);return void 0!==t&&(r-=t[0],(o-=t[1])<0&&(r--,o+=1e9)),[r,o]}function tQ(t){let[i,r]=tX(t);return 1e3*i+Math.floor(r/1e6)}let t1=tK();function t0(t,i,r){var o;let n,a,c={scopeId:t,prevScopeId:i,prefix:r,enabled:t=>tF.enabled(t),addExitInfo:function(...t){(n??=[]).push(...t)},setFailed:function(t){a=t},getExitInfo:function(){return{details:n?.length?` \u2022 ${n.join(", ")}`:void 0,failed:a}}};return t2(c,"trace",tF.trace),t2(c,"debug",tF.debug),t2(c,"info",tF.info),t2(c,"warn",tF.warn),Object.defineProperty(o=c,"error",{configurable:!0,enumerable:!0,get:function(){let t=(t,i,...r)=>tF.error(t,o,i,...r);return Object.defineProperty(o,"error",{value:t,writable:!1,enumerable:!0}),t}}),c}function t2(t,i,r){Object.defineProperty(t,i,{configurable:!0,enumerable:!0,get:function(){let o=r.bind(tF,t);return Object.defineProperty(t,i,{value:o,writable:!1,enumerable:!0}),o}})}function t3(t,i,r){if(null!=r){let o=null==i?t.toString(16):`${i.toString(16)} \u2192 ${t.toString(16)}`;return null==o?`[${r.padEnd(13)}]`:`[${r}${o.padStart(13-r.length)}]`}return null==i?`[${t.toString(16).padStart(13)}]`:`[${i.toString(16).padStart(5)} \u2192 ${t.toString(16).padStart(5)}]`}function t5(){let t=tY();if(null==t)return;let i=Object.create(t);return i[Symbol.dispose]=()=>{},i}function t4(t,i,r){if(null!=i&&"boolean"!=typeof i)return t0(i.scopeId,i.prevScopeId,`${i.prefix}${t}`);let o=i?tY()?.scopeId:void 0,n=t1.next();return t0(n,o,`${t3(n,o,r)} ${t}`)}function t6(t,i,r,...o){switch(i){case"trace":tF.trace(t,r,...o);break;case"info":tF.info(t,r,...o);break;default:tF.debug(t,r,...o)}}let LoggerContext=class LoggerContext{constructor(t){this.scope=t4(t,void 0),tF.configure({name:t,createChannel:function(t){let i=tF.isDebugging?function(t){}:function(t){};return{name:t,logLevel:0,trace:i,debug:i,info:i,warn:i,error:i}}},!1)}trace(t,...i){"string"==typeof t?tF.trace(this.scope,t,...i):tF.trace(t,i.shift(),...i)}debug(t,...i){"string"==typeof t?tF.debug(this.scope,t,...i):tF.debug(t,i.shift(),...i)}info(t,...i){"string"==typeof t?tF.info(this.scope,t,...i):tF.info(t,i.shift(),...i)}};let t7=new IpcNotification("home","subscription/didChange"),t8="graph";new IpcCommand(t8,"chooseRepository"),new IpcCommand(t8,"dblclick"),new IpcCommand(t8,"avatars/get"),new IpcCommand(t8,"refs/metadata/get"),new IpcCommand(t8,"rows/get"),new IpcCommand(t8,"pullRequest/openDetails"),new IpcCommand(t8,"row/action"),new IpcCommand(t8,"treemap/file/action"),new IpcCommand(t8,"search/openInView"),new IpcCommand(t8,"search/cancel"),new IpcCommand(t8,"columns/update"),new IpcCommand(t8,"refs/update/visibility"),new IpcCommand(t8,"refs/update/pinned"),new IpcCommand(t8,"filters/update/excludeTypes"),new IpcCommand(t8,"configuration/update"),new IpcCommand(t8,"displayMode/update"),new IpcCommand(t8,"search/update/mode"),new IpcCommand(t8,"filters/update/includedRefs"),new IpcCommand(t8,"filters/reset"),new IpcCommand(t8,"selection/update"),new IpcCommand(t8,"wipDraft/update"),new IpcRequest(t8,"jumpToHead"),new IpcRequest(t8,"chooseRef"),new IpcRequest(t8,"chooseComparison"),new IpcRequest(t8,"chooseAuthor"),new IpcRequest(t8,"chooseFile"),new IpcRequest(t8,"scope/resolve"),new IpcRequest(t8,"rows/ensure"),new IpcRequest(t8,"search/history/get"),new IpcRequest(t8,"search/history/store"),new IpcRequest(t8,"search/history/delete"),new IpcRequest(t8,"counts"),new IpcRequest(t8,"overview/get"),new IpcRequest(t8,"overview/wip/get"),new IpcRequest(t8,"overview/wip/detailed/get"),new IpcRequest(t8,"overview/enrichment/get"),new IpcRequest(t8,"agentSessions/get"),new IpcRequest(t8,"wip/stats/get"),new IpcCommand(t8,"wip/watches/sync"),new IpcNotification(t8,"wip/refetch/request"),new IpcRequest(t8,"row/hover/get"),new IpcRequest(t8,"search"),new IpcNotification(t8,"overview/didChange"),new IpcNotification(t8,"agentSessions/didChange"),new IpcNotification(t8,"repositories/integration/didChange"),new IpcNotification(t8,"wipDrafts/didChange"),new IpcNotification(t8,"didChange",!0),new IpcNotification(t8,"configuration/didChange");let t9=new IpcNotification(t8,"subscription/didChange");new IpcNotification(t8,"org/settings/didChange"),new IpcNotification(t8,"avatars/didChange"),new IpcNotification(t8,"mcp/didChange"),new IpcNotification(t8,"hooks/didChange"),new IpcNotification(t8,"agents/canInstallClaudeHook/didChange"),new IpcCommand(t8,"graphWalkthrough/banner/close"),new IpcNotification(t8,"graphWalkthrough/banner/didChange"),new IpcNotification(t8,"graphWalkthrough/complete/didChange"),new IpcNotification(t8,"graphWalkthrough/started/didChange"),new IpcNotification(t8,"visualizationsButtonCallout/didChange"),new IpcCommand(t8,"visualizationsButtonCallout/dismiss"),new IpcNotification(t8,"sidebar/activePanel/didRequest"),new IpcNotification(t8,"action/didRequest"),new IpcCommand(t8,"track/overview/shown"),new IpcCommand(t8,"track/scope/changed"),new IpcCommand(t8,"track/details/reviewMode"),new IpcCommand(t8,"track/details/composeMode"),new IpcCommand(t8,"track/details/resolveMode"),new IpcCommand(t8,"track/details/compareMode"),new IpcCommand(t8,"track/details/wipShown"),new IpcNotification(t8,"branchState/didChange"),new IpcNotification(t8,"refs/didChangeMetadata"),new IpcNotification(t8,"columns/didChange"),new IpcNotification(t8,"scrollMarkers/didChange"),new IpcNotification(t8,"refs/didChangeVisibility"),new IpcNotification(t8,"refs/didChangePinned"),new IpcNotification(t8,"rows/didChange"),new IpcNotification(t8,"rows/stats/didChange"),new IpcNotification(t8,"selection/didChange"),new IpcNotification(t8,"compareMode/didRequestOpen"),new IpcNotification(t8,"timeline/didRequestOpenScope"),new IpcNotification(t8,"search/didRequest"),new IpcNotification(t8,"workingTree/didChange"),new IpcNotification(t8,"didSearch"),new IpcNotification(t8,"didFetch"),new IpcNotification(t8,"scope/anchors/didInvalidate"),new IpcNotification(t8,"treemap/didInvalidate"),new IpcNotification(t8,"featurePreview/didStart");let ie=new IpcNotification("timeline","didChange");let PromosContext=class PromosContext{constructor(t){this.disposables=[],this._promos=new Map,this.ipc=t,this.disposables.push(this.ipc.onReceiveMessage(t=>{(t7.is(t)||t9.is(t)||ie.is(t))&&this._promos.clear()}))}async getApplicablePromo(t,i){let r=`${t}|${i}`,o=this._promos.get(r);return null==o&&(o=this.ipc.sendRequest(C,{plan:t,location:i}).then(t=>t.promo,()=>void 0),this._promos.set(r,o)),await o}dispose(){this.disposables.forEach(t=>t.dispose())}};let TelemetryContext=class TelemetryContext{constructor(t){this.disposables=[],this.ipc=t}sendEvent(t){this.ipc.sendCommand(x,t)}dispose(){this.disposables.forEach(t=>t.dispose())}};function it(t){return(t=t.toString().toLowerCase()).includes("ms")?parseFloat(t):t.includes("s")?1e3*parseFloat(t):parseFloat(t)}function ii(t,i){return new Promise(r=>{t.addEventListener(i,function o(n){n.target===t&&(t.removeEventListener(i,o),r())})})}(g||(g={})).on=function(t,i,r,o){let n=!1;if("string"==typeof t){let a=function(i){let o=i?.target?.closest(t);null!=o&&r(i,o)};return document.addEventListener(i,a,o??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(i,a,o??!0))}}}let a=function(t){r(t,this)};return t.addEventListener(i,a,o??!1),{dispose:()=>{n||(n=!0,t.removeEventListener(i,a,o??!1))}}};var ir=Uint8Array,io=Uint16Array,is=Int32Array,ia=new ir([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),il=new ir([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ic=new ir([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ih=function(t,i){for(var r=new io(31),o=0;o<31;++o)r[o]=i+=1<<t[o-1];for(var n=new is(r[30]),o=1;o<30;++o)for(var a=r[o];a<r[o+1];++a)n[a]=a-r[o]<<5|o;return{b:r,r:n}},id=ih(ia,2),iu=id.b,ip=id.r;iu[28]=258,ip[258]=28;var ig=ih(il,0),im=ig.b;ig.r;for(var iv=new io(32768),ib=0;ib<32768;++ib){var iw=(43690&ib)>>1|(21845&ib)<<1;iw=(61680&(iw=(52428&iw)>>2|(13107&iw)<<2))>>4|(3855&iw)<<4,iv[ib]=((65280&iw)>>8|(255&iw)<<8)>>1}for(var iy=function(t,i,r){for(var o,n=t.length,a=0,c=new io(i);a<n;++a)t[a]&&++c[t[a]-1];var h=new io(i);for(a=1;a<i;++a)h[a]=h[a-1]+c[a-1]<<1;if(r){o=new io(1<<i);var u=15-i;for(a=0;a<n;++a)if(t[a])for(var p=a<<4|t[a],f=i-t[a],g=h[t[a]-1]++<<f,m=g|(1<<f)-1;g<=m;++g)o[iv[g]>>u]=p}else for(o=new io(n),a=0;a<n;++a)t[a]&&(o[a]=iv[h[t[a]-1]++]>>15-t[a]);return o},i_=new ir(288),ib=0;ib<144;++ib)i_[ib]=8;for(var ib=144;ib<256;++ib)i_[ib]=9;for(var ib=256;ib<280;++ib)i_[ib]=7;for(var ib=280;ib<288;++ib)i_[ib]=8;for(var iC=new ir(32),ib=0;ib<32;++ib)iC[ib]=5;var i$=iy(i_,9,1),ix=iy(iC,5,1),iS=function(t){for(var i=t[0],r=1;r<t.length;++r)t[r]>i&&(i=t[r]);return i},ik=function(t,i,r){var o=i/8|0;return(t[o]|t[o+1]<<8)>>(7&i)&r},iA=function(t,i){var r=i/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(7&i)},iE=function(t,i,r){return(null==i||i<0)&&(i=0),(null==r||r>t.length)&&(r=t.length),new ir(t.subarray(i,r))},iL=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],iP=function(t,i,r){var o=Error(i||iL[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,iP),!r)throw o;return o},iT=function(t,i,r,o){var n=t.length,a=o?o.length:0;if(!n||i.f&&!i.l)return r||new ir(0);var c=!r,h=c||2!=i.i,u=i.i;c&&(r=new ir(3*n));var p=function(t){var i=r.length;if(t>i){var o=new ir(Math.max(2*i,t));o.set(r),r=o}},f=i.f||0,g=i.p||0,m=i.b||0,v=i.l,b=i.d,w=i.m,y=i.n,_=8*n;do{if(!v){f=ik(t,g,1);var C=ik(t,g+1,3);if(g+=3,C)if(1==C)v=i$,b=ix,w=9,y=5;else if(2==C){var $=ik(t,g,31)+257,x=ik(t,g+10,15)+4,A=$+ik(t,g+5,31)+1;g+=14;for(var E=new ir(A),P=new ir(19),T=0;T<x;++T)P[ic[T]]=ik(t,g+3*T,7);g+=3*x;for(var O=iS(P),M=(1<<O)-1,N=iy(P,O,1),T=0;T<A;){var D=N[ik(t,g,M)];g+=15&D;var q=D>>4;if(q<16)E[T++]=q;else{var B=0,j=0;for(16==q?(j=3+ik(t,g,3),g+=2,B=E[T-1]):17==q?(j=3+ik(t,g,7),g+=3):18==q&&(j=11+ik(t,g,127),g+=7);j--;)E[T++]=B}}var U=E.subarray(0,$),F=E.subarray($);w=iS(U),y=iS(F),v=iy(U,w,1),b=iy(F,y,1)}else iP(1);else{var q=((g+7)/8|0)+4,V=t[q-4]|t[q-3]<<8,W=q+V;if(W>n){u&&iP(0);break}h&&p(m+V),r.set(t.subarray(q,W),m),i.b=m+=V,i.p=g=8*W,i.f=f;continue}if(g>_){u&&iP(0);break}}h&&p(m+131072);for(var G=(1<<w)-1,Y=(1<<y)-1,J=g;;J=g){var B=v[iA(t,g)&G],K=B>>4;if((g+=15&B)>_){u&&iP(0);break}if(B||iP(2),K<256)r[m++]=K;else if(256==K){J=g,v=null;break}else{var X=K-254;if(K>264){var T=K-257,Q=ia[T];X=ik(t,g,(1<<Q)-1)+iu[T],g+=Q}var ee=b[iA(t,g)&Y],et=ee>>4;ee||iP(3),g+=15&ee;var F=im[et];if(et>3){var Q=il[et];F+=iA(t,g)&(1<<Q)-1,g+=Q}if(g>_){u&&iP(0);break}h&&p(m+131072);var ei=m+X;if(m<F){var er=a-F,eo=Math.min(F,ei);for(er+m<0&&iP(3);m<eo;++m)r[m]=o[er+m]}for(;m<ei;++m)r[m]=r[m-F]}}i.l=v,i.p=J,i.b=m,i.f=f,v&&(f=1,i.m=w,i.d=b,i.n=y)}while(!f)return m!=r.length&&c?iE(r,0,m):r.subarray(0,m)},iI=new ir(0),iO="u">typeof TextDecoder&&new TextDecoder;try{iO.decode(iI,{stream:!0})}catch{}var iM=function(t){for(var i="",r=0;;){var o=t[r++],n=(o>127)+(o>223)+(o>239);if(r+n>t.length)return{s:i,r:iE(t,r-1)};n?3==n?i+=String.fromCharCode(55296|(o=((15&o)<<18|(63&t[r++])<<12|(63&t[r++])<<6|63&t[r++])-65536)>>10,56320|1023&o):1&n?i+=String.fromCharCode((31&o)<<6|63&t[r++]):i+=String.fromCharCode((15&o)<<12|(63&t[r++])<<6|63&t[r++]):i+=String.fromCharCode(o)}};function iR(t,i){if(i){for(var r="",o=0;o<t.length;o+=16384)r+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return r}if(iO)return iO.decode(t);var n=iM(t),a=n.s,r=n.r;return r.length&&iP(8),a}"function"==typeof queueMicrotask&&queueMicrotask;let iN=/\(([\s\S]*)\)/,iD=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,iz=/\s?=.*$/;function iq(t){var i,r;let o,n,a,c,h,u,p,f,g;return i="debug",h=!1,u=!0,null!=(r=t)&&({args:o,when:n,exit:a,prefix:c,onlyExit:h=!1,timing:u=!0}=r),p="object"==typeof u?u.warnAfter:1500,f=!1!==u||"object"==typeof h&&h.after>0,g="trace"===i?tF.trace:"debug"===i?tF.debug:tF.info,(t,r,u)=>{let m,v;if("function"==typeof u.value?(m=u.value,v="value"):"function"==typeof u.get&&(m=u.get,v="get"),null==m||null==v)throw Error("Not supported");let b=null==o?function(t){if("function"!=typeof t)throw Error("Not supported");if(0===t.length)return[];let i=Function.prototype.toString.call(t),r=(i=(i=i.replace(iD,"")||i).slice(0,i.indexOf("{"))).indexOf("("),o=i.indexOf(")");r=r>=0?r+1:0,o=o>0?o:i.indexOf("="),i=i.slice(r,o),i=`(${i})`;let n=iN.exec(i);return null!=n?n[1].split(",").map(t=>t.trim().replace(iz,"")):[]}(m):[];u[v]=function(...t){let u;if(!tF.enabled()||null!=n&&!n.apply(this,t))return m.apply(this,t);let v=tF.enabled(i),w=t5(),y=w?.scopeId,_=t1.next(),C=this!=null?function(t){let i;if("function"==typeof t){if(null==(i=t.prototype?.constructor))return t.name}else i=t.constructor;let r=i?.name??"",o=r.indexOf("_");-1!==o&&(r=r.substring(o+1));let n=i;for(;null!=n;){let i=tV.get(n);if(null!=i)return i(t,r);n=Object.getPrototypeOf(n)}return r}(this):void 0,$=C?`${t3(_,y)} ${C}.${r}`:`${t3(_,y)} ${r}`;null!=c&&($=c({id:_,instance:this,instanceName:C??"",name:r,prefix:$},...t));let x=t0(_,y,$),A=!1,E=()=>(A||(A=!0,u=function(t,i,r){if(!1===t||!i.length)return;if("function"==typeof t){let r=t(...i);if(!1===r)return;let o="";for(let[t,i]of Object.entries(r))o.length&&(o+=", "),o+=`${t}=${tF.toLoggable(i,t)}`;return o||void 0}let o="",n=-1;for(let t of i){let i=r[++n];o.length&&(o+=", "),o+=i?`${i}=${tF.toLoggable(t,i)}`:tF.toLoggable(t)}return o||void 0}(o,t,b)),u);if(!h&&v){let t=E();g.call(tF,t?`${$}(${t})`:$)}if(h||f||null!=a){let i=f?tX():void 0,r=t=>{let r=void 0!==i?` [${tQ(i)}ms]`:"",o=x.getExitInfo();if(h){let i=E();tF.error(t,i?`${$}(${i})`:$,o?.details?`failed${o.details}${r}`:`failed${r}`)}else tF.error(t,$,o?.details?`failed${o.details}${r}`:`failed${r}`)},o=t=>{let r,o,n,c;null!=i?(r=tQ(i))>p?(o=tF.warn,n=` [*${r}ms] (slow)`):(o=g,n=` [${r}ms]`):(n="",o=g);let u=x.getExitInfo();if(null!=a)if("function"==typeof a)try{c=a(t)}catch(t){c=`@log.exit error: ${t}`}else!0===a&&(c=`returned ${tF.toLoggable(t)}`);else u?.failed?(c=u.failed,o=(t,...i)=>tF.error(null,t,...i)):c="completed";if(v||o!==g){let t=E();h?(!0===h||0===h.after||r>h.after)&&o.call(tF,t?`${$}(${t}) ${c}${u?.details||""}${n}`:`${$} ${c}${u?.details||""}${n}`):o.call(tF,t?`${$}(${t}) ${c}${u?.details||""}${n}`:`${$} ${c}${u?.details||""}${n}`)}};return tG(x,()=>{var i;let n;try{n=m.apply(this,t)}catch(t){throw r(t),t}return null!=n&&null!=(i=n)&&(i instanceof Promise||"function"==typeof i?.then)?n.then(o,r).catch(()=>{}):o(n),n})}return tG(x,()=>m.apply(this,t))}}}globalThis.scheduler?.yield?.bind(globalThis.scheduler),Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(t,i,...r){let o;this._stopped=!1,this.logScope=null!=t&&"string"!=typeof t?t:t4(t??"",!1,i?.scopeLabel);let n=i?.log;if(o=null==n||!0===n?{}:!1===n||n.onlyExit?void 0:n,this.logLevel=("object"==typeof n?n.level:void 0)??"debug",this.logProvider=i?.provider??tW,this._time=tX(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){return tQ(this._time)}log(t){this.logCore(t,!1)}restart(t){this.logCore(t,!0),this._time=tX(),this._stopped=!1}stop(t){this._stopped||(this.restart(t),this._stopped=!0)}logCore(t,i){if(!this.logProvider.enabled(this.logLevel))return;if(!i)return void this.logProvider.log(this.logLevel,this.logScope,`${t?.message??""}${t?.suffix??""}`);let r=tQ(this._time),o=t?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${o?`${o} `:""}[${r}ms]${t?.suffix??""}`)}};(()=>{let t;var i,r,o={975:t=>{function i(t){if("string"!=typeof t)throw TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,i){for(var r,o="",n=0,a=-1,c=0,h=0;h<=t.length;++h){if(h<t.length)r=t.charCodeAt(h);else{if(47===r)break;r=47}if(47===r){if(a===h-1||1===c);else if(a!==h-1&&2===c){if(o.length<2||2!==n||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var u=o.lastIndexOf("/");if(u!==o.length-1){-1===u?(o="",n=0):n=(o=o.slice(0,u)).length-1-o.lastIndexOf("/"),a=h,c=0;continue}}else if(2===o.length||1===o.length){o="",n=0,a=h,c=0;continue}}i&&(o.length>0?o+="/..":o="..",n=2)}else o.length>0?o+="/"+t.slice(a+1,h):o=t.slice(a+1,h),n=h-a-1;a=h,c=0}else 46===r&&-1!==c?++c:c=-1}return o}var o={resolve:function(){for(var t,o,n="",a=!1,c=arguments.length-1;c>=-1&&!a;c--)c>=0?t=arguments[c]:(void 0===o&&(o=process.cwd()),t=o),i(t),0!==t.length&&(n=t+"/"+n,a=47===t.charCodeAt(0));return n=r(n,!a),a?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(t){if(i(t),0===t.length)return".";var o=47===t.charCodeAt(0),n=47===t.charCodeAt(t.length-1);return 0!==(t=r(t,!o)).length||o||(t="."),t.length>0&&n&&(t+="/"),o?"/"+t:t},isAbsolute:function(t){return i(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var t,r=0;r<arguments.length;++r){var n=arguments[r];i(n),n.length>0&&(void 0===t?t=n:t+="/"+n)}return void 0===t?".":o.normalize(t)},relative:function(t,r){if(i(t),i(r),t===r||(t=o.resolve(t))===(r=o.resolve(r)))return"";for(var n=1;n<t.length&&47===t.charCodeAt(n);++n);for(var a=t.length,c=a-n,h=1;h<r.length&&47===r.charCodeAt(h);++h);for(var u=r.length-h,p=c<u?c:u,f=-1,g=0;g<=p;++g){if(g===p){if(u>p){if(47===r.charCodeAt(h+g))return r.slice(h+g+1);if(0===g)return r.slice(h+g)}else c>p&&(47===t.charCodeAt(n+g)?f=g:0===g&&(f=0));break}var m=t.charCodeAt(n+g);if(m!==r.charCodeAt(h+g))break;47===m&&(f=g)}var v="";for(g=n+f+1;g<=a;++g)g!==a&&47!==t.charCodeAt(g)||(0===v.length?v+="..":v+="/..");return v.length>0?v+r.slice(h+f):(h+=f,47===r.charCodeAt(h)&&++h,r.slice(h))},_makeLong:function(t){return t},dirname:function(t){if(i(t),0===t.length)return".";for(var r=t.charCodeAt(0),o=47===r,n=-1,a=!0,c=t.length-1;c>=1;--c)if(47===(r=t.charCodeAt(c))){if(!a){n=c;break}}else a=!1;return -1===n?o?"/":".":o&&1===n?"//":t.slice(0,n)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');i(t);var o,n=0,a=-1,c=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return"";var h=r.length-1,u=-1;for(o=t.length-1;o>=0;--o){var p=t.charCodeAt(o);if(47===p){if(!c){n=o+1;break}}else -1===u&&(c=!1,u=o+1),h>=0&&(p===r.charCodeAt(h)?-1==--h&&(a=o):(h=-1,a=u))}return n===a?a=u:-1===a&&(a=t.length),t.slice(n,a)}for(o=t.length-1;o>=0;--o)if(47===t.charCodeAt(o)){if(!c){n=o+1;break}}else -1===a&&(c=!1,a=o+1);return -1===a?"":t.slice(n,a)},extname:function(t){i(t);for(var r=-1,o=0,n=-1,a=!0,c=0,h=t.length-1;h>=0;--h){var u=t.charCodeAt(h);if(47!==u)-1===n&&(a=!1,n=h+1),46===u?-1===r?r=h:1!==c&&(c=1):-1!==r&&(c=-1);else if(!a){o=h+1;break}}return -1===r||-1===n||0===c||1===c&&r===n-1&&r===o+1?"":t.slice(r,n)},format:function(t){var i,r;if(null===t||"object"!=typeof t)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return i=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||""),i?i===t.root?i+r:i+"/"+r:r},parse:function(t){i(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var o,n=t.charCodeAt(0),a=47===n;a?(r.root="/",o=1):o=0;for(var c=-1,h=0,u=-1,p=!0,f=t.length-1,g=0;f>=o;--f)if(47!==(n=t.charCodeAt(f)))-1===u&&(p=!1,u=f+1),46===n?-1===c?c=f:1!==g&&(g=1):-1!==c&&(g=-1);else if(!p){h=f+1;break}return -1===c||-1===u||0===g||1===g&&c===u-1&&c===h+1?-1!==u&&(r.base=r.name=0===h&&a?t.slice(1,u):t.slice(h,u)):(0===h&&a?(r.name=t.slice(1,c),r.base=t.slice(1,u)):(r.name=t.slice(h,c),r.base=t.slice(h,u)),r.ext=t.slice(c,u)),h>0?r.dir=t.slice(0,h-1):a&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,t.exports=o}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var r=n[t]={exports:{}};return o[t](r,r.exports,a),r.exports}a.d=(t,i)=>{for(var r in i)a.o(i,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},a.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),a.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var c={};(a.r(c),a.d(c,{URI:()=>l,Utils:()=>r}),"object"==typeof process)?t="win32"===process.platform:"object"==typeof navigator&&(t=navigator.userAgent.indexOf("Windows")>=0);let h=/^\w[\w\d+.-]*$/,u=/^\//,p=/^\/\//;function f(t,i){if(!t.scheme&&i)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);if(t.scheme&&!h.test(t.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(t.path){if(t.authority){if(!u.test(t.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(t.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let g=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(t){return t instanceof l||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"string"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString}scheme;authority;path;query;fragment;constructor(t,i,r,o,n,a=!1){"object"==typeof t?(this.scheme=t.scheme||"",this.authority=t.authority||"",this.path=t.path||"",this.query=t.query||"",this.fragment=t.fragment||""):(this.scheme=t||a?t:"file",this.authority=i||"",this.path=function(t,i){switch(t){case"https":case"http":case"file":i?"/"!==i[0]&&(i="/"+i):i="/"}return i}(this.scheme,r||""),this.query=o||"",this.fragment=n||"",f(this,a))}get fsPath(){return _(this,!1)}with(t){if(!t)return this;let{scheme:i,authority:r,path:o,query:n,fragment:a}=t;return void 0===i?i=this.scheme:null===i&&(i=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===o?o=this.path:null===o&&(o=""),void 0===n?n=this.query:null===n&&(n=""),void 0===a?a=this.fragment:null===a&&(a=""),i===this.scheme&&r===this.authority&&o===this.path&&n===this.query&&a===this.fragment?this:new d(i,r,o,n,a)}static parse(t,i=!1){let r=g.exec(t);return r?new d(r[2]||"",x(r[4]||""),x(r[5]||""),x(r[7]||""),x(r[9]||""),i):new d("","","","","")}static file(i){let r="";if(t&&(i=i.replace(/\\/g,"/")),"/"===i[0]&&"/"===i[1]){let t=i.indexOf("/",2);-1===t?(r=i.substring(2),i="/"):(r=i.substring(2,t),i=i.substring(t)||"/")}return new d("file",r,i,"","")}static from(t){let i=new d(t.scheme,t.authority,t.path,t.query,t.fragment);return f(i,!0),i}toString(t=!1){return C(this,t)}toJSON(){return this}static revive(t){if(t){if(t instanceof l)return t;{let i=new d(t);return i._formatted=t.external,i._fsPath=t._sep===v?t.fsPath:null,i}}return t}};let v=t?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=_(this,!1)),this._fsPath}toString(t=!1){return t?C(this,!0):(this._formatted||(this._formatted=C(this,!1)),this._formatted)}toJSON(){let t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=v),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t}};let b={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function w(t,i,r){let o,n=-1;for(let a=0;a<t.length;a++){let c=t.charCodeAt(a);if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||45===c||46===c||95===c||126===c||i&&47===c||r&&91===c||r&&93===c||r&&58===c)-1!==n&&(o+=encodeURIComponent(t.substring(n,a)),n=-1),void 0!==o&&(o+=t.charAt(a));else{void 0===o&&(o=t.substr(0,a));let i=b[c];void 0!==i?(-1!==n&&(o+=encodeURIComponent(t.substring(n,a)),n=-1),o+=i):-1===n&&(n=a)}}return -1!==n&&(o+=encodeURIComponent(t.substring(n))),void 0!==o?o:t}function y(t){let i;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);35===o||63===o?(void 0===i&&(i=t.substr(0,r)),i+=b[o]):void 0!==i&&(i+=t[r])}return void 0!==i?i:t}function _(i,r){let o;return o=i.authority&&i.path.length>1&&"file"===i.scheme?`//${i.authority}${i.path}`:47===i.path.charCodeAt(0)&&(i.path.charCodeAt(1)>=65&&90>=i.path.charCodeAt(1)||i.path.charCodeAt(1)>=97&&122>=i.path.charCodeAt(1))&&58===i.path.charCodeAt(2)?r?i.path.substr(1):i.path[1].toLowerCase()+i.path.substr(2):i.path,t&&(o=o.replace(/\//g,"\\")),o}function C(t,i){let r=i?y:w,o="",{scheme:n,authority:a,path:c,query:h,fragment:u}=t;if(n&&(o+=n,o+=":"),(a||"file"===n)&&(o+="/",o+="/"),a){let t=a.indexOf("@");if(-1!==t){let i=a.substr(0,t);a=a.substr(t+1),-1===(t=i.lastIndexOf(":"))?o+=r(i,!1,!1):(o+=r(i.substr(0,t),!1,!1),o+=":",o+=r(i.substr(t+1),!1,!0)),o+="@"}-1===(t=(a=a.toLowerCase()).lastIndexOf(":"))?o+=r(a,!1,!0):(o+=r(a.substr(0,t),!1,!0),o+=a.substr(t))}if(c){if(c.length>=3&&47===c.charCodeAt(0)&&58===c.charCodeAt(2)){let t=c.charCodeAt(1);t>=65&&t<=90&&(c=`/${String.fromCharCode(t+32)}:${c.substr(3)}`)}else if(c.length>=2&&58===c.charCodeAt(1)){let t=c.charCodeAt(0);t>=65&&t<=90&&(c=`${String.fromCharCode(t+32)}:${c.substr(2)}`)}o+=r(c,!0,!1)}return h&&(o+="?",o+=r(h,!1,!1)),u&&(o+="#",o+=i?u:w(u,!1,!1)),o}let $=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function x(t){return t.match($)?t.replace($,t=>(function t(i){try{return decodeURIComponent(i)}catch{return i.length>3?i.substr(0,3)+t(i.substr(3)):i}})(t)):t}var A=a(975);let E=A.posix||A;(i=r||(r={})).joinPath=function(t,...i){return t.with({path:E.join(t.path,...i)})},i.resolvePath=function(t,...i){let r=t.path,o=!1;"/"!==r[0]&&(r="/"+r,o=!0);let n=E.resolve(r,...i);return o&&"/"===n[0]&&!t.authority&&(n=n.substring(1)),t.with({path:n})},i.dirname=function(t){if(0===t.path.length||"/"===t.path)return t;let i=E.dirname(t.path);return 1===i.length&&46===i.charCodeAt(0)&&(i=""),t.with({path:i})},i.basename=function(t){return E.basename(t.path)},i.extname=function(t){return E.extname(t.path)},m=c})();let{URI:iB,Utils:ij}=m;function iU(t,i){return JSON.parse(t,(t,r)=>(function(t,i){let r=function(t){if("object"!=typeof t||null==t)return;let i=t.__ipc;if(null!=i)switch(i){case"date":return"number"==typeof t.value?t:void 0;case"promise":return"object"==typeof t.value&&"string"==typeof t.value.id&&"string"==typeof t.value.method?t:void 0;case"uri":return"object"==typeof t.value&&"string"==typeof t.value?.scheme?t:void 0;default:return}}(t);if(null==r)return t;switch(r.__ipc){case"date":return new Date(r.value);case"promise":return i(r.value);case"uri":return iB.revive(r.value)}})(r,i))}let iH="__supertalk_rpc__";new TextEncoder,new TextDecoder;let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return this._event??=(t,i,r)=>{this.listeners??=new LinkedList;let o=this.listeners.push(null==i?t:[t,i]),n={dispose:()=>{n.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(r)&&r.push(n),n},this._event}fire(t){if(null!=this.listeners){this._deliveryQueue??=new LinkedList;for(let i=this.listeners.iterator(),r=i.next();!r.done;r=i.next())this._deliveryQueue.push([r.value,t]);for(;this._deliveryQueue.size>0;){let[t,i]=this._deliveryQueue.shift();try{"function"==typeof t?t(i):t[0].call(t[1],i)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let iF={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(t){this.element=t,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,i){let r=new events_Node(t);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(i){let t=this._last;this._last=r,r.prev=t,t.next=r}else{let t=this._first;this._first=r,r.next=t,t.prev=r}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===events_Node.Undefined)return;let t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==events_Node.Undefined&&t.next!==events_Node.Undefined){let i=t.prev;i.next=t.next,t.next.prev=i}else t.prev===events_Node.Undefined&&t.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):t.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):t.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let t,i=this._first;return{next:function(){return i===events_Node.Undefined?iF:(null==t?t={done:!1,value:i.element}:t.value=i.element,i=i.next,t)}}}toArray(){let t=[];for(let i=this._first;i!==events_Node.Undefined;i=i.next)t.push(i.element);return t}};var iV=Object.defineProperty,iW=Object.getOwnPropertyDescriptor,iZ=(t,i)=>(i=Symbol[t])?i:Symbol.for("Symbol."+t),iG=t=>{throw TypeError(t)},iY=(t,i,r,o)=>{for(var n,a=o>1?void 0:o?iW(i,r):i,c=t.length-1;c>=0;c--)(n=t[c])&&(a=(o?n(i,r,a):n(a))||a);return o&&a&&iV(i,r,a),a};function iJ(){return o??=null!=n?n():acquireVsCodeApi()}let iK=tK();function iX(){return`webview:${iK.next()}`}let iQ=`wv-${Math.random().toString(36).slice(2,10)}`,i1=Date.now(),i0=class{constructor(t){this.appName=t,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=iJ(),this._disposable=g.on(window,"message",t=>this.onMessageReceived(t))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(t){var i,o,n,a,c,h,u,p,f,g=[];try{if(n=t.data,"object"==typeof n&&null!==n&&iH in n&&!0===n[iH])return;let c=t.data,h=((t,i,r)=>{if(null!=i){var o,n;"object"!=typeof i&&"function"!=typeof i&&iG("Object expected"),r&&(o=i[iZ("asyncDispose")]),void 0===o&&(o=i[iZ("dispose")],r&&(n=o)),"function"!=typeof o&&iG("Object not disposable"),n&&(o=function(){try{n.call(this)}catch(t){return Promise.reject(t)}}),t.push([r,o,i])}else r&&t.push([r]);return i})(g,function(t,i,o){var n,a;let c,h,u;if(!tF.enabled())return;let p=(n=o?.scope??!0,a=o?.scopeLabel,h=tY(),r=(u=t4(t,n,a)).scopeId,tZ.set(u.scopeId,u),u[Symbol.dispose]=()=>{let t;t=u?.scopeId??r,null!=t&&tZ.delete(t),r=h?.scopeId},u);if(!i)return p;let f="debug",g=!1;"object"==typeof i&&(f=i.level??f,c=i.message,g=!0===i.onlyExit);let m=tX();g||t6(p,f,c??"");let v=p[Symbol.dispose];return p[Symbol.dispose]=()=>{let t=tQ(m),i=` [${t}ms]`,r=p.getExitInfo(),o=r.failed??"completed";null!=r.failed?tF.error(null,p,`${o}${r.details??""}${i}`):t6(p,f,`${o}${r.details??""}${i}`),v()},p}(`(e=${c.id}|${c.method})`,void 0,{scope:t5()})),u=function(t,i,...r){let o=("object"==typeof i?.log?i.log.level:void 0)??"info";return(i?.provider??tW).enabled(o)?new Stopwatch(t,i,...r):void 0}(h,{log:{onlyExit:!0,level:"debug"}});if(c.compressed&&c.params instanceof Uint8Array){if("deflate"===c.compressed)try{c.params=iR((a=c.params,iT(a,{i:2},void 0,void 0)))}catch(t){c.params=iR(c.params)}else c.params=iR(c.params);u?.restart({message:`\u2022 decompressed (${c.compressed}) serialized params`})}if("string"==typeof c.params?(c.params=iU(c.params,t=>this.getResponsePromise(t.method,t.id)),u?.stop({message:"• deserialized params"})):null==c.params?u?.stop({message:"• no params"}):u?.stop({message:"• invalid params"}),h?.addExitInfo(`ipc (host -> webview) duration=${Date.now()-c.timestamp}ms`),null!=c.completionId){let t=(i=c.method,o=c.completionId,`${i}|${o}`);this._pendingHandlers.get(t)?.(c);return}this._onReceiveMessage.fire(c)}catch(t){var m=t,v=!0}finally{c=m,h=v,u="function"==typeof SuppressedError?SuppressedError:function(t,i,r,o){return(o=Error(r)).name="SuppressedError",o.error=t,o.suppressed=i,o},p=t=>c=h?new u(t,c,"An error was suppressed during disposal"):(h=!0,t),(f=t=>{for(;t=g.pop();)try{var i=t[1]&&t[1].call(t[2]);if(t[0])return Promise.resolve(i).then(f,t=>(p(t),f()))}catch(t){p(t)}if(h)throw c})()}}deserializeIpcData(t){return iU(t,t=>this.getResponsePromise(t.method,t.id))}sendCommand(t,i){let r=iX();this.postMessage({id:r,scope:t.scope,method:t.method,params:i,compressed:!1,timestamp:Date.now()})}async sendRequest(t,i){let r=iX(),o=this.getResponsePromise(t.response.method,r);return this.postMessage({id:r,scope:t.scope,method:t.method,params:i,compressed:!1,timestamp:Date.now(),completionId:r}),o}getResponsePromise(t,i){return new Promise((r,o)=>{var n,a;let c,h=(n=t,a=i,`${n}|${a}`);function u(){clearTimeout(c),c=void 0,this._pendingHandlers.delete(h)}c=setTimeout(()=>{u.call(this),o(Error(`Timed out waiting for completion of ${h}`))},(tF.isDebugging?60:5)*6e4),this._pendingHandlers.set(h,t=>{if(u.call(this),t.method===A.method){let i=t.params;"rejected"===i.status?queueMicrotask(()=>o(Error(i.reason))):queueMicrotask(()=>r(i.value))}else queueMicrotask(()=>r(t.params))})})}setPersistedState(t){this._api.setState(t)}updatePersistedState(t){let i=this._api.getState();null!=i&&"object"==typeof i?(i={...i,...t},this._api.setState(i)):i=t,this.setPersistedState(i)}postMessage(t){this._api.postMessage(t)}};function i2(t,i){let r=Math.pow(10,i);return Math.round(t*r)/r}iY([iq({args:t=>({e:`${t.data.id}|${t.data.method}`})})],i0.prototype,"onMessageReceived",1),iY([iq({args:t=>({commandType:t.method})})],i0.prototype,"sendCommand",1),iY([iq({args:t=>({requestType:t.method})})],i0.prototype,"sendRequest",1),iY([iq({args:t=>({e:`${t.id}, method=${t.method}`})})],i0.prototype,"postMessage",1),i0=iY([(h=t=>`${t.appName}(HostIpc)`,t=>void tV.set(t,h))],i0);let RGBA=class RGBA{constructor(t,i,r,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,t)),this.g=0|Math.min(255,Math.max(0,i)),this.b=0|Math.min(255,Math.max(0,r)),this.a=i2(Math.max(Math.min(1,o),0),3)}static equals(t,i){return t.r===i.r&&t.g===i.g&&t.b===i.b&&t.a===i.a}};let HSLA=class HSLA{constructor(t,i,r,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=i2(Math.max(Math.min(1,i),0),3),this.l=i2(Math.max(Math.min(1,r),0),3),this.a=i2(Math.max(Math.min(1,o),0),3)}static equals(t,i){return t.h===i.h&&t.s===i.s&&t.l===i.l&&t.a===i.a}static fromRGBA(t){let i=t.r/255,r=t.g/255,o=t.b/255,n=t.a,a=Math.max(i,r,o),c=Math.min(i,r,o),h=0,u=0,p=(c+a)/2,f=a-c;if(f>0){switch(u=Math.min(p<=.5?f/(2*p):f/(2-2*p),1),a){case i:h=(r-o)/f+6*(r<o);break;case r:h=(o-i)/f+2;break;case o:h=(i-r)/f+4}h*=60,h=Math.round(h)}return new HSLA(h,u,p,n)}static _hue2rgb(t,i,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?t+(i-t)*6*r:r<.5?i:r<2/3?t+(i-t)*(2/3-r)*6:t}static toRGBA(t){let i,r,o,n=t.h/360,{s:a,l:c,a:h}=t;if(0===a)i=r=o=c;else{let t=c<.5?c*(1+a):c+a-c*a,h=2*c-t;i=HSLA._hue2rgb(h,t,n+1/3),r=HSLA._hue2rgb(h,t,n),o=HSLA._hue2rgb(h,t,n-1/3)}return new RGBA(Math.round(255*i),Math.round(255*r),Math.round(255*o),h)}};let HSVA=class HSVA{constructor(t,i,r,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=i2(Math.max(Math.min(1,i),0),3),this.v=i2(Math.max(Math.min(1,r),0),3),this.a=i2(Math.max(Math.min(1,o),0),3)}static equals(t,i){return t.h===i.h&&t.s===i.s&&t.v===i.v&&t.a===i.a}static fromRGBA(t){let i=t.r/255,r=t.g/255,o=t.b/255,n=Math.max(i,r,o),a=n-Math.min(i,r,o);return new HSVA(Math.round(60*(0===a?0:n===i?((r-o)/a%6+6)%6:n===r?(o-i)/a+2:(i-r)/a+4)),0===n?0:a/n,n,t.a)}static toRGBA(t){let{h:i,s:r,v:o,a:n}=t,a=o*r,c=a*(1-Math.abs(i/60%2-1)),h=o-a,[u,p,f]=[0,0,0];return i<60?(u=a,p=c):i<120?(u=c,p=a):i<180?(p=a,f=c):i<240?(p=c,f=a):i<300?(u=c,f=a):i<=360&&(u=a,f=c),new RGBA(u=Math.round((u+h)*255),p=Math.round((p+h)*255),f=Math.round((f+h)*255),n)}};function i3(t,i){return i.getPropertyValue(t).trim()}let Color=class Color{static from(t){return t instanceof Color?t:parseColor(t)||Color.red}static fromCssVariable(t,i){return parseColor(i3(t,i))||Color.red}static fromHex(t){return parseHexColor(t)||Color.red}static equals(t,i){return!t&&!i||!!t&&!!i&&t.equals(i)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(t){if(t)if(t instanceof RGBA)this.rgba=t;else if(t instanceof HSLA)this._hsla=t,this.rgba=HSLA.toRGBA(t);else if(t instanceof HSVA)this._hsva=t,this.rgba=HSVA.toRGBA(t);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(t){return null!=t&&!!t&&RGBA.equals(this.rgba,t.rgba)&&HSLA.equals(this.hsla,t.hsla)&&HSVA.equals(this.hsva,t.hsva)}getRelativeLuminance(){return i2(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(t){let i=t/255;return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}luminance(t){return luminance(this,t)}getContrastRatio(t){let i=this.getRelativeLuminance(),r=t.getRelativeLuminance();return i>r?(i+.05)/(r+.05):(r+.05)/(i+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(t){return this.getRelativeLuminance()>t.getRelativeLuminance()}isDarkerThan(t){return this.getRelativeLuminance()<t.getRelativeLuminance()}lighten(t){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){let{r:i,g:r,b:o,a:n}=this.rgba;return new Color(new RGBA(i,r,o,n*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){let i=t.rgba,r=this.rgba.a,o=i.a,n=r+o*(1-r);return n<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*r/n+i.r*o*(1-r)/n,this.rgba.g*r/n+i.g*o*(1-r)/n,this.rgba.b*r/n+i.b*o*(1-r)/n,n))}mix(t,i){return mixColors(this,t,i)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;let{r:i,g:r,b:o,a:n}=this.rgba;return new Color(new RGBA(t.rgba.r-n*(t.rgba.r-i),t.rgba.g-n*(t.rgba.g-r),t.rgba.b-n*(t.rgba.b-o),1))}flatten(...t){let i=t.reduceRight((t,i)=>Color._flatten(i,t));return Color._flatten(this,i)}static _flatten(t,i){let r=1-t.rgba.a;return new Color(new RGBA(r*i.rgba.r+t.rgba.a*t.rgba.r,r*i.rgba.g+t.rgba.a*t.rgba.g,r*i.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(t){return t.isOpaque()?`#${i5(t.rgba.r)}${i5(t.rgba.g)}${i5(t.rgba.b)}`:`rgba(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b}, ${Number(t.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(t,i,r){if(t.isLighterThan(i))return t;r=r||.5;let o=t.getRelativeLuminance(),n=i.getRelativeLuminance();return r=r*(n-o)/n,t.lighten(r)}static getDarkerColor(t,i,r){if(t.isDarkerThan(i))return t;r=r||.5;let o=t.getRelativeLuminance(),n=i.getRelativeLuminance();return r=r*(o-n)/o,t.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function i5(t){let i=t.toString(16);return 2!==i.length?`0${i}`:i}let i4=new Emitter,i6=i4.event;function i7(t){let i=document.documentElement,r=window.getComputedStyle(i),o=document.body.classList,n=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),a=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),c=i3("--vscode-editor-background",r),h=i3("--vscode-editor-foreground",r);return h||(h=i3("--vscode-foreground",r)),{colors:{background:c,foreground:h},computedStyle:r,isLightTheme:n,isHighContrastTheme:a,isInitializing:null==t}}function i8(){let t=new MutationObserver(t=>{i4.fire(i7(t))});return t.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>t.disconnect()}}var i9=Object.defineProperty,re=Object.getOwnPropertyDescriptor,rt=(t,i,r,o)=>{for(var n,a=o>1?void 0:o?re(i,r):i,c=t.length-1;c>=0;c--)(n=t[c])&&(a=(o?n(i,r,a):n(a))||a);return o&&a&&i9(i,r,a),a};let GlWebviewApp=class GlWebviewApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[]}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}initWebviewContext(t){let i=JSON.parse(tA.decode(function(t){let i=globalThis.atob(t),r=i.length,o=new Uint8Array(r),n=0,a=r-r%8;for(;n<a;n+=8)o[n]=i.charCodeAt(n),o[n+1]=i.charCodeAt(n+1),o[n+2]=i.charCodeAt(n+2),o[n+3]=i.charCodeAt(n+3),o[n+4]=i.charCodeAt(n+4),o[n+5]=i.charCodeAt(n+5),o[n+6]=i.charCodeAt(n+6),o[n+7]=i.charCodeAt(n+7);for(;n<r;n++)o[n]=i.charCodeAt(n);return o}(t))),r=i.webviewId,o=i.webviewInstanceId;this._webview={webviewId:r,webviewInstanceId:o,createCommandLink:(t,i)=>(t.endsWith(":")&&(t=`${t}${r.split(".").at(-1)}`),tL(t,r,o,i))}}connectedCallback(){let t,i,r,o;super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.debug("connected"),this._ipc=new i0(this.name),this.disposables.push(i8()),null!=this.onThemeUpdated&&(this.onThemeUpdated(i7()),this.disposables.push(i6(this.onThemeUpdated,this))),this.disposables.push(this._ipc.onReceiveMessage(t=>{switch(!0){case E.is(t):this.onWebviewFocusChanged?.(t.params.focused),window.dispatchEvent(new CustomEvent(t.params.focused?"webview-focus":"webview-blur"));break;case P.is(t):this.onWebviewVisibilityChanged?.(t.params.visible),window.dispatchEvent(new CustomEvent(t.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._focusTracker=(r=0,o=tE(t=>{let i=`webview:${++r}`,o=document.hasFocus();t.focused=o,o||(t.inputFocused=!1),iJ().postMessage({id:i,scope:_.scope,method:_.method,params:t,compressed:!1,timestamp:Date.now()})},150),{onFocusIn:r=>{let n=r.composedPath().some(t=>"INPUT"===t.tagName);(!0!==t||i!==n)&&(t=!0,i=n,o({focused:!0,inputFocused:n}))},onFocusOut:t=>{o({focused:!1,inputFocused:!1})}}),document.addEventListener("focusin",this._focusTracker.onFocusIn),document.addEventListener("focusout",this._focusTracker.onFocusOut),document.querySelectorAll("a").forEach(t=>{t.href===t.title&&t.removeAttribute("title")}),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.debug("disconnected"),null!=this._focusTracker&&(document.removeEventListener("focusin",this._focusTracker.onFocusIn),document.removeEventListener("focusout",this._focusTracker.onFocusOut),this._focusTracker=void 0),this.disposables.forEach(t=>t.dispose())}render(){return ej`<slot></slot>`}};rt([tC({type:String})],GlWebviewApp.prototype,"name",2),rt([tC({type:String})],GlWebviewApp.prototype,"placement",2),rt([B({context:"ipc"})],GlWebviewApp.prototype,"_ipc",2),rt([B({context:"logger"})],GlWebviewApp.prototype,"_logger",2),rt([B({context:"promos"})],GlWebviewApp.prototype,"_promos",2),rt([B({context:"telemetry"})],GlWebviewApp.prototype,"_telemetry",2),rt([B({context:"webview"})],GlWebviewApp.prototype,"_webview",2),GlWebviewApp[ev];let App=class App{constructor(t){this.appName=t;let i=[],r=i7();null!=this.onThemeUpdated&&(this.onThemeUpdated(r),i.push(i6(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(t),this.log("opening..."),this._api=iJ(),this._hostIpc=new i0(this.appName),i.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),i.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),i.push(this._telemetry);let{webviewId:o,webviewInstanceId:n}=this.state;if(this._webview={webviewId:o,webviewInstanceId:n,createCommandLink:(t,i)=>(t.endsWith(":")&&(t=`${t}${o.split(".").at(-1)}`),tL(t,o,n,i))},new context_provider_i(document.body,{context:"ipc",initialValue:this._hostIpc}),new context_provider_i(document.body,{context:"logger",initialValue:this._logger}),new context_provider_i(document.body,{context:"promos",initialValue:this._promos}),new context_provider_i(document.body,{context:"telemetry",initialValue:this._telemetry}),new context_provider_i(document.body,{context:"webview",initialValue:this._webview}),null!=this.state){let t=this.getState();this.state.timestamp>=(t?.timestamp??0)?this._api.setState(this.state):this.state=t}i.push(i8()),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&i.push(this._hostIpc.onReceiveMessage(t=>{switch(!0){case E.is(t):window.dispatchEvent(new CustomEvent(t.params.focused?"webview-focus":"webview-blur"));break;case P.is(t):window.dispatchEvent(new CustomEvent(t.params.visible?"webview-visible":"webview-hidden"));break;default:this.onMessageReceived(t)}})),this.sendRequest(y,{bootstrap:!1,clientId:iQ,clientLoadedAt:i1}),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),i.push(g.on(window,"pagehide",()=>{i?.forEach(t=>t.dispose()),this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=void 0})),i.push(g.on(window,"gl-telemetry-fired",t=>{this._telemetry.sendEvent(t.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(t=>{t.href===t.title&&t.removeAttribute("title")}),this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=this.onBind?.(),this.bindDisposables??=[];let t=tE(t=>{let i=document.hasFocus();t.focused=i,i||(t.inputFocused=!1),this.sendCommand(_,t)},150);this.bindDisposables.push(g.on(document,"focusin",i=>{t({focused:!0,inputFocused:i.composedPath().some(t=>"INPUT"===t.tagName)})}),g.on(document,"focusout",()=>{t({focused:!1,inputFocused:!1})}))}log(t,...i){this._logger.debug(t,...i)}getState(){return this._api.getState()}sendCommand(t,i){this._hostIpc.sendCommand(t,i)}sendRequest(t,i){return this._hostIpc.sendRequest(t,i)}setState(t){this._api.setState(t)}};var ri=((u=ri||{})[u.VerificationRequired=-1]="VerificationRequired",u[u.Community=0]="Community",u[u.DeprecatedPreview=1]="DeprecatedPreview",u[u.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",u[u.Trial=3]="Trial",u[u.TrialExpired=4]="TrialExpired",u[u.TrialReactivationEligible=5]="TrialReactivationEligible",u[u.Paid=6]="Paid",u);let rr=["student","pro","advanced","teams","enterprise"],ro=tr`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;tr`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${ro}
	}
`;let rs=tr`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`;tr`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,tr`
	:focus-visible {
		${rs}
	}
`;let rn=tr`
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
`;tr`
	* {
		box-sizing: border-box;
	}
`;let ra=tr`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${rs}
	}
	a:hover {
		text-decoration: underline;
	}
`,rl=tr`
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
`;tr`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`,tr`
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
`,tr`
	:host {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}
`,tr`
	:host {
		--gl-metadata-bar-bg: color-mix(in srgb, var(--color-background) 95%, var(--color-foreground) 5%);
		--gl-metadata-bar-border: var(--vscode-sideBarSectionHeader-border, var(--color-foreground--25));
		--gl-metadata-bar-min-height: 2.94rem;
	}
`;var rc=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}},rh=tr`
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
`;let rd=new Set,ru=new Map,rp="ltr",rf="en",rg="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(rg){let t=new MutationObserver(rv);rp=document.documentElement.dir||"ltr",rf=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rm(...t){t.map(t=>{let i=t.$code.toLowerCase();ru.has(i)?ru.set(i,Object.assign(Object.assign({},ru.get(i)),t)):ru.set(i,t),a||(a=t)}),rv()}function rv(){rg&&(rp=document.documentElement.dir||"ltr",rf=document.documentElement.lang||navigator.language),[...rd.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){rd.add(this.host)}hostDisconnected(){rd.delete(this.host)}dir(){return`${this.host.dir||rp}`.toLowerCase()}lang(){return`${this.host.lang||rf}`.toLowerCase()}getTranslationData(t){var i,r;let o;try{o=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let n=o.language.toLowerCase(),a=null!=(r=null==(i=o.region)?void 0:i.toLowerCase())?r:"",c=ru.get(`${n}-${a}`),h=ru.get(n);return{locale:o,language:n,region:a,primary:c,secondary:h}}exists(t,i){var r;let{primary:o,secondary:n}=this.getTranslationData(null!=(r=i.lang)?r:this.lang());return i=Object.assign({includeFallback:!1},i),!!o&&!!o[t]||!!n&&!!n[t]||!!i.includeFallback&&!!a&&!!a[t]}term(t,...i){let r,{primary:o,secondary:n}=this.getTranslationData(this.lang());if(o&&o[t])r=o[t];else if(n&&n[t])r=n[t];else{if(!a||!a[t])return String(t);r=a[t]}return"function"==typeof r?r(...i):r}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,i)}};var rb={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",clearEntry:"Clear entry",close:"Close",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,i)=>`Go to slide ${t} of ${i}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",moreOptions:"More Options",mute:"Mute",nextSlide:"Next slide",nextVideo:"Next Video",numCharacters:t=>1===t?"1 character":`${t} characters`,numCharactersRemaining:t=>1===t?"1 character remaining":`${t} characters remaining`,numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousSlide:"Previous slide",previousVideo:"Previous video",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,i)=>`${t} of ${i}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",zoomIn:"Zoom in",zoomOut:"Zoom out"};rm(rb);var rw=class extends LocalizeController{};rm(rb);var ry=Object.defineProperty,r_=Object.getOwnPropertyDescriptor,rC=t=>{throw TypeError(t)},r$=(t,i,r,o)=>{for(var n,a=o>1?void 0:o?r_(i,r):i,c=t.length-1;c>=0;c--)(n=t[c])&&(a=(o?n(i,r,a):n(a))||a);return o&&a&&ry(i,r,a),a},rx=(t,i,r)=>i.has(t)||rC("Cannot "+r),rS=tr`
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
`,rk=class extends lit_element_i{constructor(){let t;super(),(t=v).has(this)?rC("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(this):t.set(this,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,i)=>{if(this.internals?.states)try{i?this.internals.states.add(t):this.internals.states.delete(t)}catch(t){if(String(t).includes("must start with '--'"));else throw t}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{}for(let[t,i]of(this.customStates.set("wa-defined",!0),this.constructor.elementProperties))"inherit"===i.default&&void 0!==i.initial&&"string"==typeof t&&this.customStates.set(`initial-${t}-${i.initial}`,!0)}static get styles(){return[rS,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))}attributeChangedCallback(t,i,r){let o,n;if(rx(this,o=v,"read from private field"),n?!n.call(this):!o.get(this)){let t,i;this.constructor.elementProperties.forEach((t,i)=>{t.reflect&&null!=this[i]&&this.initialReflectedProperties.set(i,this[i])}),rx(this,t=v,"write to private field"),i?i.call(this,!0):t.set(this,!0)}super.attributeChangedCallback(t,i,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((i,r)=>{t.has(r)&&null==this[r]&&(this[r]=i)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(t){if(this.didSSR&&!this.hasUpdated){let i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=t,this.dispatchEvent(i)}throw t}}relayNativeEvent(t,i){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...i}))}};v=new WeakMap,r$([tC()],rk.prototype,"dir",2),r$([tC()],rk.prototype,"lang",2),r$([tC({type:Boolean,reflect:!0,attribute:"did-ssr"})],rk.prototype,"didSSR",2);let rA=Math.min,rE=Math.max,rL=Math.round,rP=Math.floor,rT=t=>({x:t,y:t}),rI={left:"right",right:"left",bottom:"top",top:"bottom"};function rO(t,i){return"function"==typeof t?t(i):t}function rM(t){return t.split("-")[0]}function rR(t){return t.split("-")[1]}function rN(t){return"x"===t?"y":"x"}function rD(t){return"y"===t?"height":"width"}function rz(t){let i=t[0];return"t"===i||"b"===i?"y":"x"}function rq(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}let rB=["left","right"],rj=["right","left"],rU=["top","bottom"],rH=["bottom","top"];function rF(t){let i=rM(t);return rI[i]+t.slice(i.length)}function rV(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function rW(t){let{x:i,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:i,right:i+o,bottom:r+n,x:i,y:r}}function rZ(t,i,r){let o,{reference:n,floating:a}=t,c=rz(i),h=rN(rz(i)),u=rD(h),p=rM(i),f="y"===c,g=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,v=n[u]/2-a[u]/2;switch(p){case"top":o={x:g,y:n.y-a.height};break;case"bottom":o={x:g,y:n.y+n.height};break;case"right":o={x:n.x+n.width,y:m};break;case"left":o={x:n.x-a.width,y:m};break;default:o={x:n.x,y:n.y}}switch(rR(i)){case"start":o[h]-=v*(r&&f?-1:1);break;case"end":o[h]+=v*(r&&f?-1:1)}return o}async function rG(t,i){var r;void 0===i&&(i={});let{x:o,y:n,platform:a,rects:c,elements:h,strategy:u}=t,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:m=!1,padding:v=0}=rO(i,t),b=rV(v),w=h[m?"floating"===g?"reference":"floating":g],y=rW(await a.getClippingRect({element:null==(r=await (null==a.isElement?void 0:a.isElement(w)))||r?w:w.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(h.floating)),boundary:p,rootBoundary:f,strategy:u})),_="floating"===g?{x:o,y:n,width:c.floating.width,height:c.floating.height}:c.reference,C=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h.floating)),$=await (null==a.isElement?void 0:a.isElement(C))&&await (null==a.getScale?void 0:a.getScale(C))||{x:1,y:1},x=rW(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:_,offsetParent:C,strategy:u}):_);return{top:(y.top-x.top+b.top)/$.y,bottom:(x.bottom-y.bottom+b.bottom)/$.y,left:(y.left-x.left+b.left)/$.x,right:(x.right-y.right+b.right)/$.x}}let rY=async(t,i,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:a=[],platform:c}=r,h=c.detectOverflow?c:{...c,detectOverflow:rG},u=await (null==c.isRTL?void 0:c.isRTL(i)),p=await c.getElementRects({reference:t,floating:i,strategy:n}),{x:f,y:g}=rZ(p,o,u),m=o,v=0,b={};for(let r=0;r<a.length;r++){let w=a[r];if(!w)continue;let{name:y,fn:_}=w,{x:C,y:$,data:x,reset:A}=await _({x:f,y:g,initialPlacement:o,placement:m,strategy:n,middlewareData:b,rects:p,platform:h,elements:{reference:t,floating:i}});f=null!=C?C:f,g=null!=$?$:g,b[y]={...b[y],...x},A&&v<50&&(v++,"object"==typeof A&&(A.placement&&(m=A.placement),A.rects&&(p=!0===A.rects?await c.getElementRects({reference:t,floating:i,strategy:n}):A.rects),{x:f,y:g}=rZ(p,m,u)),r=-1)}return{x:f,y:g,placement:m,strategy:n,middlewareData:b}},rJ=new Set(["left","top"]);async function rK(t,i){let{placement:r,platform:o,elements:n}=t,a=await (null==o.isRTL?void 0:o.isRTL(n.floating)),c=rM(r),h=rR(r),u="y"===rz(r),p=rJ.has(c)?-1:1,f=a&&u?-1:1,g=rO(i,t),{mainAxis:m,crossAxis:v,alignmentAxis:b}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return h&&"number"==typeof b&&(v="end"===h?-1*b:b),u?{x:v*f,y:m*p}:{x:m*p,y:v*f}}function rX(){return"u">typeof window}function rQ(t){return r2(t)?(t.nodeName||"").toLowerCase():"#document"}function r1(t){var i;return(null==t||null==(i=t.ownerDocument)?void 0:i.defaultView)||window}function r0(t){var i;return null==(i=(r2(t)?t.ownerDocument:t.document)||window.document)?void 0:i.documentElement}function r2(t){return!!rX()&&(t instanceof Node||t instanceof r1(t).Node)}function r3(t){return!!rX()&&(t instanceof Element||t instanceof r1(t).Element)}function r5(t){return!!rX()&&(t instanceof HTMLElement||t instanceof r1(t).HTMLElement)}function r4(t){return!(!rX()||"u"<typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof r1(t).ShadowRoot)}function r6(t){let{overflow:i,overflowX:r,overflowY:o,display:n}=oo(t);return/auto|scroll|overlay|hidden|clip/.test(i+o+r)&&"inline"!==n&&"contents"!==n}function r7(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}let r8=/transform|translate|scale|rotate|perspective|filter/,r9=/paint|layout|strict|content/,oe=t=>!!t&&"none"!==t;function ot(t){let i=r3(t)?oo(t):t;return oe(i.transform)||oe(i.translate)||oe(i.scale)||oe(i.rotate)||oe(i.perspective)||!oi()&&(oe(i.backdropFilter)||oe(i.filter))||r8.test(i.willChange||"")||r9.test(i.contain||"")}function oi(){return null==c&&(c="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),c}function or(t){return/^(html|body|#document)$/.test(rQ(t))}function oo(t){return r1(t).getComputedStyle(t)}function os(t){return r3(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function on(t){if("html"===rQ(t))return t;let i=t.assignedSlot||t.parentNode||r4(t)&&t.host||r0(t);return r4(i)?i.host:i}function oa(t,i,r){var o;void 0===i&&(i=[]),void 0===r&&(r=!0);let n=function t(i){let r=on(i);return or(r)?i.ownerDocument?i.ownerDocument.body:i.body:r5(r)&&r6(r)?r:t(r)}(t),a=n===(null==(o=t.ownerDocument)?void 0:o.body),c=r1(n);if(!a)return i.concat(n,oa(n,[],r));{let t=ol(c);return i.concat(c,c.visualViewport||[],r6(n)?n:[],t&&r?oa(t):[])}}function ol(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function oc(t){let i=oo(t),r=parseFloat(i.width)||0,o=parseFloat(i.height)||0,n=r5(t),a=n?t.offsetWidth:r,c=n?t.offsetHeight:o,h=rL(r)!==a||rL(o)!==c;return h&&(r=a,o=c),{width:r,height:o,$:h}}function oh(t){return r3(t)?t:t.contextElement}function od(t){let i=oh(t);if(!r5(i))return rT(1);let r=i.getBoundingClientRect(),{width:o,height:n,$:a}=oc(i),c=(a?rL(r.width):r.width)/o,h=(a?rL(r.height):r.height)/n;return c&&Number.isFinite(c)||(c=1),h&&Number.isFinite(h)||(h=1),{x:c,y:h}}let ou=rT(0);function op(t){let i=r1(t);return oi()&&i.visualViewport?{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}:ou}function of(t,i,r,o){var n;void 0===i&&(i=!1),void 0===r&&(r=!1);let a=t.getBoundingClientRect(),c=oh(t),h=rT(1);i&&(o?r3(o)&&(h=od(o)):h=od(t));let u=(void 0===(n=r)&&(n=!1),o&&(!n||o===r1(c))&&n)?op(c):rT(0),p=(a.left+u.x)/h.x,f=(a.top+u.y)/h.y,g=a.width/h.x,m=a.height/h.y;if(c){let t=r1(c),i=o&&r3(o)?r1(o):o,r=t,n=ol(r);for(;n&&o&&i!==r;){let t=od(n),i=n.getBoundingClientRect(),o=oo(n),a=i.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,c=i.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;p*=t.x,f*=t.y,g*=t.x,m*=t.y,p+=a,f+=c,n=ol(r=r1(n))}}return rW({width:g,height:m,x:p,y:f})}function og(t,i){let r=os(t).scrollLeft;return i?i.left+r:of(r0(t)).left+r}function om(t,i){let r=t.getBoundingClientRect();return{x:r.left+i.scrollLeft-og(t,r),y:r.top+i.scrollTop}}function ov(t,i,r){var o;let n;if("viewport"===i)n=function(t,i){let r=r1(t),o=r0(t),n=r.visualViewport,a=o.clientWidth,c=o.clientHeight,h=0,u=0;if(n){a=n.width,c=n.height;let t=oi();(!t||t&&"fixed"===i)&&(h=n.offsetLeft,u=n.offsetTop)}let p=og(o);if(p<=0){let t=o.ownerDocument,i=t.body,r=getComputedStyle(i),n="CSS1Compat"===t.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,c=Math.abs(o.clientWidth-i.clientWidth-n);c<=25&&(a-=c)}else p<=25&&(a+=p);return{width:a,height:c,x:h,y:u}}(t,r);else if("document"===i){let i,r,a,c,h,u,p;o=r0(t),i=r0(o),r=os(o),a=o.ownerDocument.body,c=rE(i.scrollWidth,i.clientWidth,a.scrollWidth,a.clientWidth),h=rE(i.scrollHeight,i.clientHeight,a.scrollHeight,a.clientHeight),u=-r.scrollLeft+og(o),p=-r.scrollTop,"rtl"===oo(a).direction&&(u+=rE(i.clientWidth,a.clientWidth)-c),n={width:c,height:h,x:u,y:p}}else if(r3(i)){let t,o,a,c,h,u;o=(t=of(i,!0,"fixed"===r)).top+i.clientTop,a=t.left+i.clientLeft,c=r5(i)?od(i):rT(1),h=i.clientWidth*c.x,u=i.clientHeight*c.y,n={width:h,height:u,x:a*c.x,y:o*c.y}}else{let r=op(t);n={x:i.x-r.x,y:i.y-r.y,width:i.width,height:i.height}}return rW(n)}function ob(t){return"static"===oo(t).position}function ow(t,i){if(!r5(t)||"fixed"===oo(t).position)return null;if(i)return i(t);let r=t.offsetParent;return r0(t)===r&&(r=r.ownerDocument.body),r}function oy(t,i){var r;let o=r1(t);if(r7(t))return o;if(!r5(t)){let i=on(t);for(;i&&!or(i);){if(r3(i)&&!ob(i))return i;i=on(i)}return o}let n=ow(t,i);for(;n&&(r=n,/^(table|td|th)$/.test(rQ(r)))&&ob(n);)n=ow(n,i);return n&&or(n)&&ob(n)&&!ot(n)?o:n||function(t){let i=on(t);for(;r5(i)&&!or(i);){if(ot(i))return i;if(r7(i))break;i=on(i)}return null}(t)||o}let o_=async function(t){let i=this.getOffsetParent||oy,r=this.getDimensions,o=await r(t.floating);return{reference:function(t,i,r){let o=r5(i),n=r0(i),a="fixed"===r,c=of(t,!0,a,i),h={scrollLeft:0,scrollTop:0},u=rT(0);if(o||!o&&!a)if(("body"!==rQ(i)||r6(n))&&(h=os(i)),o){let t=of(i,!0,a,i);u.x=t.x+i.clientLeft,u.y=t.y+i.clientTop}else n&&(u.x=og(n));a&&!o&&n&&(u.x=og(n));let p=!n||o||a?rT(0):om(n,h);return{x:c.left+h.scrollLeft-u.x-p.x,y:c.top+h.scrollTop-u.y-p.y,width:c.width,height:c.height}}(t.reference,await i(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},oC={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:i,rect:r,offsetParent:o,strategy:n}=t,a="fixed"===n,c=r0(o),h=!!i&&r7(i.floating);if(o===c||h&&a)return r;let u={scrollLeft:0,scrollTop:0},p=rT(1),f=rT(0),g=r5(o);if((g||!g&&!a)&&(("body"!==rQ(o)||r6(c))&&(u=os(o)),g)){let t=of(o);p=od(o),f.x=t.x+o.clientLeft,f.y=t.y+o.clientTop}let m=!c||g||a?rT(0):om(c,u);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-u.scrollLeft*p.x+f.x+m.x,y:r.y*p.y-u.scrollTop*p.y+f.y+m.y}},getDocumentElement:r0,getClippingRect:function(t){let{element:i,boundary:r,rootBoundary:o,strategy:n}=t,a=[..."clippingAncestors"===r?r7(i)?[]:function(t,i){let r=i.get(t);if(r)return r;let o=oa(t,[],!1).filter(t=>r3(t)&&"body"!==rQ(t)),n=null,a="fixed"===oo(t).position,c=a?on(t):t;for(;r3(c)&&!or(c);){let i=oo(c),r=ot(c);r||"fixed"!==i.position||(n=null),(a?r||n:!(!r&&"static"===i.position&&n&&("absolute"===n.position||"fixed"===n.position)||r6(c)&&!r&&function t(i,r){let o=on(i);return!(o===r||!r3(o)||or(o))&&("fixed"===oo(o).position||t(o,r))}(t,c)))?n=i:o=o.filter(t=>t!==c),c=on(c)}return i.set(t,o),o}(i,this._c):[].concat(r),o],c=ov(i,a[0],n),h=c.top,u=c.right,p=c.bottom,f=c.left;for(let t=1;t<a.length;t++){let r=ov(i,a[t],n);h=rE(r.top,h),u=rA(r.right,u),p=rA(r.bottom,p),f=rE(r.left,f)}return{width:u-f,height:p-h,x:f,y:h}},getOffsetParent:oy,getElementRects:o_,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:i,height:r}=oc(t);return{width:i,height:r}},getScale:od,isElement:r3,isRTL:function(t){return"rtl"===oo(t).direction}};function o$(t,i){return t.x===i.x&&t.y===i.y&&t.width===i.width&&t.height===i.height}let ox=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(i){var r,o;let n,a,{placement:c,rects:h,platform:u,elements:p}=i,{apply:f=()=>{},...g}=rO(t,i),m=await u.detectOverflow(i,g),v=rM(c),b=rR(c),w="y"===rz(c),{width:y,height:_}=h.floating;"top"===v||"bottom"===v?(n=v,a=b===(await (null==u.isRTL?void 0:u.isRTL(p.floating))?"start":"end")?"left":"right"):(a=v,n="end"===b?"top":"bottom");let C=_-m.top-m.bottom,$=y-m.left-m.right,x=rA(_-m[n],C),A=rA(y-m[a],$),E=!i.middlewareData.shift,P=x,T=A;if(null!=(r=i.middlewareData.shift)&&r.enabled.x&&(T=$),null!=(o=i.middlewareData.shift)&&o.enabled.y&&(P=C),E&&!b){let t=rE(m.left,0),i=rE(m.right,0),r=rE(m.top,0),o=rE(m.bottom,0);w?T=y-2*(0!==t||0!==i?t+i:rE(m.left,m.right)):P=_-2*(0!==r||0!==o?r+o:rE(m.top,m.bottom))}await f({...i,availableWidth:T,availableHeight:P});let O=await u.getDimensions(p.floating);return y!==O.width||_!==O.height?{reset:{rects:!0}}:{}}}};function oS(t){var i=t;for(let t=i;t;t=ok(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=ok(i);t;t=ok(t)){if(!(t instanceof Element))continue;let i=getComputedStyle(t);if("contents"!==i.display&&("static"!==i.position||ot(i)||"BODY"===t.tagName))return t}return null}function ok(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}let oA=eb(class extends directive_i{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),i)i[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(i)}let r=t.element.classList;for(let t of this.st)t in i||(r.remove(t),this.st.delete(t));for(let t in i){let o=!!i[t];o===this.st.has(t)||this.nt?.has(t)||(o?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return eH}});function oE(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t instanceof Element)}var oL=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),oP=class extends rk{constructor(){super(...arguments),this.localize=new rw(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,n=0,a=0,c=0,h=0,u=0,p=0,f=0;r?t.top<i.top?(o=t.left,n=t.bottom,a=t.right,c=t.bottom,h=i.left,u=i.top,p=i.right,f=i.top):(o=i.left,n=i.bottom,a=i.right,c=i.bottom,h=t.left,u=t.top,p=t.right,f=t.top):t.left<i.left?(o=t.right,n=t.top,a=i.left,c=i.top,h=t.right,u=t.bottom,p=i.left,f=i.bottom):(o=i.right,n=i.top,a=t.left,c=t.top,h=i.right,u=i.bottom,p=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||oE(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=function(t,i,r,o){let n;void 0===o&&(o={});let{ancestorScroll:a=!0,ancestorResize:c=!0,elementResize:h="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:p=!1}=o,f=oh(t),g=a||c?[...f?oa(f):[],...i?oa(i):[]]:[];g.forEach(t=>{a&&t.addEventListener("scroll",r,{passive:!0}),c&&t.addEventListener("resize",r)});let m=f&&u?function(t,i){let r,o=null,n=r0(t);function a(){var t;clearTimeout(r),null==(t=o)||t.disconnect(),o=null}return!function c(h,u){void 0===h&&(h=!1),void 0===u&&(u=1),a();let p=t.getBoundingClientRect(),{left:f,top:g,width:m,height:v}=p;if(h||i(),!m||!v)return;let b={rootMargin:-rP(g)+"px "+-rP(n.clientWidth-(f+m))+"px "+-rP(n.clientHeight-(g+v))+"px "+-rP(f)+"px",threshold:rE(0,rA(1,u))||1},w=!0;function y(i){let o=i[0].intersectionRatio;if(o!==u){if(!w)return c();o?c(!1,o):r=setTimeout(()=>{c(!1,1e-7)},1e3)}1!==o||o$(p,t.getBoundingClientRect())||c(),w=!1}try{o=new IntersectionObserver(y,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(y,b)}o.observe(t)}(!0),a}(f,r):null,v=-1,b=null;h&&(b=new ResizeObserver(t=>{let[o]=t;o&&o.target===f&&b&&i&&(b.unobserve(i),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var t;null==(t=b)||t.observe(i)})),r()}),f&&!p&&b.observe(f),i&&b.observe(i));let w=p?of(t):null;return p&&function i(){let o=of(t);w&&!o$(w,o)&&r(),w=o,n=requestAnimationFrame(i)}(),r(),()=>{var t;g.forEach(t=>{a&&t.removeEventListener("scroll",r),c&&t.removeEventListener("resize",r)}),null==m||m(),null==(t=b)||t.disconnect(),b=null,p&&cancelAnimationFrame(n)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){var t,i,r,o,n,a;let c,h,u,p,f;if(!this.active||!this.anchorEl||!this.popup)return;let g=[{name:"offset",options:t={mainAxis:this.distance,crossAxis:this.skidding},async fn(i){var r,o;let{x:n,y:a,placement:c,middlewareData:h}=i,u=await rK(i,t);return c===(null==(r=h.offset)?void 0:r.placement)&&null!=(o=h.arrow)&&o.alignmentOffset?{}:{x:n+u.x,y:a+u.y,data:{...u,placement:c}}}}];this.sync?g.push(ox({apply:({rects:t})=>{let i="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=i?`${t.reference.width}px`:"",this.popup.style.height=r?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),oL&&!oE(this.anchor)&&"scroll"===this.boundary&&(c=oa(this.anchorEl).filter(t=>t instanceof Element)),this.flip&&g.push({name:"flip",options:i={boundary:this.flipBoundary||c,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(t){var r,o,n,a,c,h,u,p;let f,g,m,{placement:v,middlewareData:b,rects:w,initialPlacement:y,platform:_,elements:C}=t,{mainAxis:$=!0,crossAxis:x=!0,fallbackPlacements:A,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:T=!0,...O}=rO(i,t);if(null!=(r=b.arrow)&&r.alignmentOffset)return{};let M=rM(v),N=rz(y),D=rM(y)===y,q=await (null==_.isRTL?void 0:_.isRTL(C.floating)),B=A||(D||!T?[rF(y)]:(f=rF(y),[rq(y),f,rq(f)])),j="none"!==P;!A&&j&&B.push(...(g=rR(y),m=function(t,i,r){switch(t){case"top":case"bottom":if(r)return i?rj:rB;return i?rB:rj;case"left":case"right":return i?rU:rH;default:return[]}}(rM(y),"start"===P,q),g&&(m=m.map(t=>t+"-"+g),T&&(m=m.concat(m.map(rq)))),m));let U=[y,...B],F=await _.detectOverflow(t,O),V=[],W=(null==(o=b.flip)?void 0:o.overflows)||[];if($&&V.push(F[M]),x){let t,i,r,o,n=(h=v,u=w,void 0===(p=q)&&(p=!1),t=rR(h),r=rD(i=rN(rz(h))),o="x"===i?t===(p?"end":"start")?"right":"left":"start"===t?"bottom":"top",u.reference[r]>u.floating[r]&&(o=rF(o)),[o,rF(o)]);V.push(F[n[0]],F[n[1]])}if(W=[...W,{placement:v,overflows:V}],!V.every(t=>t<=0)){let t=((null==(n=b.flip)?void 0:n.index)||0)+1,i=U[t];if(i&&("alignment"!==x||N===rz(i)||W.every(t=>rz(t.placement)!==N||t.overflows[0]>0)))return{data:{index:t,overflows:W},reset:{placement:i}};let r=null==(a=W.filter(t=>t.overflows[0]<=0).sort((t,i)=>t.overflows[1]-i.overflows[1])[0])?void 0:a.placement;if(!r)switch(E){case"bestFit":{let t=null==(c=W.filter(t=>{if(j){let i=rz(t.placement);return i===N||"y"===i}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,i)=>t+i,0)]).sort((t,i)=>t[1]-i[1])[0])?void 0:c[0];t&&(r=t);break}case"initialPlacement":r=y}if(v!==r)return{reset:{placement:r}}}return{}}}),this.shift&&g.push({name:"shift",options:r={boundary:this.shiftBoundary||c,padding:this.shiftPadding},async fn(t){let{x:i,y:o,placement:n,platform:a}=t,{mainAxis:c=!0,crossAxis:h=!1,limiter:u={fn:t=>{let{x:i,y:r}=t;return{x:i,y:r}}},...p}=rO(r,t),f={x:i,y:o},g=await a.detectOverflow(t,p),m=rz(rM(n)),v=rN(m),b=f[v],w=f[m];if(c){let t="y"===v?"top":"left",i="y"===v?"bottom":"right",r=b+g[t],o=b-g[i];b=rE(r,rA(b,o))}if(h){let t="y"===m?"top":"left",i="y"===m?"bottom":"right",r=w+g[t],o=w-g[i];w=rE(r,rA(w,o))}let y=u.fn({...t,[v]:b,[m]:w});return{...y,data:{x:y.x-i,y:y.y-o,enabled:{[v]:c,[m]:h}}}}}),this.autoSize?g.push(ox({boundary:this.autoSizeBoundary||c,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:i})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&g.push({name:"arrow",options:h={element:this.arrowEl,padding:this.arrowPadding},async fn(t){let{x:i,y:r,placement:o,rects:n,platform:a,elements:c,middlewareData:u}=t,{element:p,padding:f=0}=rO(h,t)||{};if(null==p)return{};let g=rV(f),m={x:i,y:r},v=rN(rz(o)),b=rD(v),w=await a.getDimensions(p),y="y"===v,_=y?"clientHeight":"clientWidth",C=n.reference[b]+n.reference[v]-m[v]-n.floating[b],$=m[v]-n.reference[v],x=await (null==a.getOffsetParent?void 0:a.getOffsetParent(p)),A=x?x[_]:0;A&&await (null==a.isElement?void 0:a.isElement(x))||(A=c.floating[_]||n.floating[b]);let E=A/2-w[b]/2-1,P=rA(g[y?"top":"left"],E),T=rA(g[y?"bottom":"right"],E),O=A-w[b]-T,M=A/2-w[b]/2+(C/2-$/2),N=rE(P,rA(M,O)),D=!u.arrow&&null!=rR(o)&&M!==N&&n.reference[b]/2-(M<P?P:T)-w[b]/2<0,q=D?M<P?M-P:M-O:0;return{[v]:m[v]+q,data:{[v]:N,centerOffset:M-N-q,...D&&{alignmentOffset:q}},reset:D}}});let m=oL?t=>oC.getOffsetParent(t,oS):oC.getOffsetParent;(o=this.anchorEl,n=this.popup,a={placement:this.placement,middleware:g,strategy:oL?"absolute":"fixed",platform:{...oC,getOffsetParent:m}},u=new Map,f={...(p={platform:oC,...a}).platform,_c:u},rY(o,n,{...p,platform:f})).then(({x:t,y:i,middlewareData:r,placement:o})=>{let n="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${i}px`}),this.arrow){let t=r.arrow.x,i=r.arrow.y,o="",c="",h="",u="";if("start"===this.arrowPlacement){let r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof i?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",c=n?r:"",u=n?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=n?"":r,u=n?r:"",h="number"==typeof i?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(u="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof i?"calc(50% - var(--arrow-size-diagonal))":""):(u="number"==typeof t?`${t}px`:"",o="number"==typeof i?`${i}px`:"");Object.assign(this.arrowEl.style,{top:o,right:c,bottom:h,left:u,[a]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new rc)}render(){return ej`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${oA({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${oA({popup:!0,"popup-active":this.active,"popup-fixed":!oL,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ej`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};oP.css=rh,r$([tS(".popup")],oP.prototype,"popup",2),r$([tS(".arrow")],oP.prototype,"arrowEl",2),r$([tC()],oP.prototype,"anchor",2),r$([tC({type:Boolean,reflect:!0})],oP.prototype,"active",2),r$([tC({reflect:!0})],oP.prototype,"placement",2),r$([tC()],oP.prototype,"boundary",2),r$([tC({type:Number})],oP.prototype,"distance",2),r$([tC({type:Number})],oP.prototype,"skidding",2),r$([tC({type:Boolean})],oP.prototype,"arrow",2),r$([tC({attribute:"arrow-placement"})],oP.prototype,"arrowPlacement",2),r$([tC({attribute:"arrow-padding",type:Number})],oP.prototype,"arrowPadding",2),r$([tC({type:Boolean})],oP.prototype,"flip",2),r$([tC({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],oP.prototype,"flipFallbackPlacements",2),r$([tC({attribute:"flip-fallback-strategy"})],oP.prototype,"flipFallbackStrategy",2),r$([tC({type:Object})],oP.prototype,"flipBoundary",2),r$([tC({attribute:"flip-padding",type:Number})],oP.prototype,"flipPadding",2),r$([tC({type:Boolean})],oP.prototype,"shift",2),r$([tC({type:Object})],oP.prototype,"shiftBoundary",2),r$([tC({attribute:"shift-padding",type:Number})],oP.prototype,"shiftPadding",2),r$([tC({attribute:"auto-size"})],oP.prototype,"autoSize",2),r$([tC()],oP.prototype,"sync",2),r$([tC({type:Object})],oP.prototype,"autoSizeBoundary",2),r$([tC({attribute:"auto-size-padding",type:Number})],oP.prototype,"autoSizePadding",2),r$([tC({attribute:"hover-bridge",type:Boolean})],oP.prototype,"hoverBridge",2),oP=r$([ty("wa-popup")],oP);var oT=Object.defineProperty,oI=Object.getOwnPropertyDescriptor,oO=(t,i,r,o)=>{for(var n,a=o>1?void 0:o?oI(i,r):i,c=t.length-1;c>=0;c--)(n=t[c])&&(a=(o?n(i,r,a):n(a))||a);return o&&a&&oT(i,r,a),a};let oM=["top","right","bottom","left","top-left","top-right","bottom-left","bottom-right"],oR=class extends GlElement{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.autoSizeVertical=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.suppressed=!1,this.handleReposition=()=>{let t=this.popup?.getAttribute("data-current-placement");null!=t&&t!==this._resolvedPlacement&&(this._resolvedPlacement=t)},this.handleResizePointerDown=t=>{if(0!==t.button)return;let i=t.currentTarget,r=i.dataset.handle;if(null==r)return;t.preventDefault();let o="right"===r||"top-right"===r||"bottom-right"===r,n="left"===r||"top-left"===r||"bottom-left"===r,a="bottom"===r||"bottom-left"===r||"bottom-right"===r,c="top"===r||"top-left"===r||"top-right"===r,h=this.body,u=t.clientX,p=t.clientY,f=h.getBoundingClientRect(),g=f.width,m=f.height;i.setPointerCapture(t.pointerId),i.classList.add("popover__resizer--active"),this.toggleAttribute("dragging",!0);let v=t=>{let i=t.clientX-u,r=t.clientY-p;o?h.style.width=`${Math.max(0,g+i)}px`:n&&(h.style.width=`${Math.max(0,g-i)}px`),a?h.style.height=`${Math.max(0,m+r)}px`:c&&(h.style.height=`${Math.max(0,m-r)}px`),this.popup?.reposition()},b=()=>{this.toggleAttribute("dragging",!1),i.classList.remove("popover__resizer--active"),i.removeEventListener("pointermove",v),i.removeEventListener("lostpointercapture",b),i.removeEventListener("pointerup",b)};i.addEventListener("pointermove",v,{passive:!0}),i.addEventListener("lostpointercapture",b),i.addEventListener("pointerup",b)},this.handleTriggerBlur=t=>{this.open&&(this.hasTrigger("focus")||this.hasTrigger("focus-visible"))&&(t.relatedTarget&&this.contains(t.relatedTarget)||this.hide())},this.handleTriggerClick=t=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(t.composedPath().includes(this.body))return;this.hide()}else this._skipHideOnClick=!1,this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=t=>{let i=this.hasTrigger("focus")||this.hasTrigger("focus-visible");this.hasTrigger("click")&&i&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1,!this.open||"hover"!==this._triggeredBy||this.hasTrigger("click")||t.composedPath().includes(this.body)||(this.suppressed=!0,this.hide())},this.handleMouseUp=()=>{this.suppressed=!1},this.handleDragStart=()=>{this.suppressed=!0,this.hide()},this.handleDragEnd=()=>{this.suppressed=!1},this.handleTriggerFocus=t=>{let i=this.hasTrigger("focus"),r=this.hasTrigger("focus-visible");if(i||r){if(!i&&r){let i=t.target;if(null==i||"function"!=typeof i.matches||!i.matches(":focus-visible"))return}this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus")}},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handlePopupBlur=t=>{let i=t.composedPath();i.includes(this)||i.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleDocumentMouseDown=t=>{let i=t.composedPath();i.includes(this)||i.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=it(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){if(clearTimeout(this.hoverTimeout),this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let t=it(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),t)}}}static closeOthers(t){for(let i of oR.openPopovers)i===t||function(t,i){let r=i;for(;null!=r;){if(r===t)return!0;r=r.parentNode??(r instanceof ShadowRoot?r.host:null)}return!1}(i,t)||i.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}connectedCallback(){super.connectedCallback?.(),this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("dragstart",this.handleDragStart,{capture:!0}),window.addEventListener("dragend",this.handleDragEnd,{capture:!0})}disconnectedCallback(){this.removeEventListener("blur",this.handleTriggerBlur,!0),this.removeEventListener("focus",this.handleTriggerFocus,!0),this.removeEventListener("click",this.handleTriggerClick),this.removeEventListener("mousedown",this.handleTriggerMouseDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("dragstart",this.handleDragStart,{capture:!0}),window.removeEventListener("dragend",this.handleDragEnd,{capture:!0}),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,oR.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),this.updateResizeObserver()}updateResizeObserver(){null!=this.resize?null==this.resizeObserver&&null!=this.body&&(this.resizeObserver=new ResizeObserver(()=>this.popup?.reposition()),this.resizeObserver.observe(this.body)):null!=this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0)}render(){let t=this._resolvedPlacement??this.placement,i=(function(t){if(!t)return[];let i=new Set;for(let r of t.trim().split(/\s+/))switch(r){case"horizontal":i.add("right");break;case"vertical":i.add("bottom");break;case"both":i.add("right"),i.add("bottom"),i.add("bottom-right");break;case"all":for(let t of oM)i.add(t);break;default:oM.includes(r)&&i.add(r)}return[...i]})(this.resize).filter(i=>!function(t,i){let r,o;if(!i)return!1;let[n,a]=i.split("-");switch(n){case"top":r="bottom";break;case"right":r="left";break;case"bottom":r="top";break;case"left":r="right"}let c="left"===n||"right"===n;"start"===a?o=c?"top":"left":"end"===a&&(o=c?"bottom":"right");let h=i=>null!=i&&(t===i||t.startsWith(`${i}-`)||t.endsWith(`-${i}`));return h(r)||h(o)}(i,t));return ej`<wa-popup
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
				${i.map(t=>ej`<div
							class="popover__resizer popover__resizer--${t}"
							role="separator"
							aria-orientation=${"top"===t||"bottom"===t?"horizontal":"vertical"}
							aria-label="Resize"
							data-handle=${t}
							@pointerdown=${this.handleResizePointerDown}
						></div>`)}
			</div>
		</wa-popup>`}async show(t){if(this.open||this.suppressed){"click"===t&&"hover"===this._triggeredBy&&(this._triggeredBy=t);return}return(null==this._triggeredBy||"hover"!==t)&&(this._triggeredBy=t),oR.closeOthers(this),this.open=!0,oR.openPopovers.add(this),ii(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,oR.openPopovers.delete(this),ii(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(t){return this.trigger.split(" ").includes(t)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus")||this.hasTrigger("focus-visible"))&&document.addEventListener("mousedown",this.handleDocumentMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleResizeChange(){this.updateResizeObserver()}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};oR.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},oR.openPopovers=new Set,oR.styles=[rl,tr`
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
		`],oO([tS("#popover")],oR.prototype,"body",2),oO([tS("wa-popup")],oR.prototype,"popup",2),oO([tC({reflect:!0})],oR.prototype,"placement",2),oO([tC({type:Object})],oR.prototype,"anchor",2),oO([tC({reflect:!0,type:Boolean})],oR.prototype,"disabled",2),oO([tC({type:Number})],oR.prototype,"distance",2),oO([tC({reflect:!0,type:Boolean})],oR.prototype,"open",2),oO([tC({reflect:!0,type:Boolean})],oR.prototype,"arrow",2),oO([tC({reflect:!0,type:Boolean,attribute:"auto-size-vertical"})],oR.prototype,"autoSizeVertical",2),oO([tC({reflect:!0})],oR.prototype,"resize",2),oO([tC({type:Number})],oR.prototype,"skidding",2),oO([tC()],oR.prototype,"trigger",2),oO([tC({type:Boolean})],oR.prototype,"hoist",2),oO([tC({reflect:!0})],oR.prototype,"appearance",2),oO([t$()],oR.prototype,"suppressed",2),oO([t$()],oR.prototype,"_resolvedPlacement",2),oO([tT("open",{afterFirstUpdate:!0})],oR.prototype,"handleOpenChange",1),oO([tT(["distance","placement","skidding"])],oR.prototype,"handleOptionsChange",1),oO([tT("resize",{afterFirstUpdate:!0})],oR.prototype,"handleResizeChange",1),oO([tT("disabled")],oR.prototype,"handleDisabledChange",1),oR=oO([ty("gl-popover")],oR);let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(t){if(super(t),this.it=eF,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===eF||null==t)return this._t=void 0,this.it=t;if(t===eH)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let oN=eb(unsafe_html_e);var oD=Object.defineProperty,oz=Object.getOwnPropertyDescriptor,oq=(t,i,r,o)=>{for(var n,a=o>1?void 0:o?oz(i,r):i,c=t.length-1;c>=0;c--)(n=t[c])&&(a=(o?n(i,r,a):n(a))||a);return o&&a&&oD(i,r,a),a};let oB=0,oj=[],oU=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.showDelay=500,this.hideDelay=0,this.suppressed=!1,this.open=!1,this.bodyId=`gl-tooltip-${++oB}`,this.onAnchorSlotChange=t=>{let i=t.target.assignedElements({flatten:!0})[0];i!==this.anchorEl&&(this.detachAnchor(),this.attachAnchor(i))},this.onDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&oj.at(-1)===this&&(t.preventDefault(),t.stopPropagation(),this.open=!1)},this.onMouseOver=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!0},this.showDelay))},this.onMouseOut=()=>{this.anchorEl?.matches(":hover")||this.matches(":hover")||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!1},this.hideDelay))},this.onFocusIn=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.open=!0)},this.onFocusOut=()=>{clearTimeout(this.hoverTimeout),this.open=!1},this.onMouseDown=t=>{this.suppressed=!0,this.open=!1},this.onMouseUp=t=>{this.suppressed=!1},this.onDragStart=t=>{this.suppressed=!0,this.open=!1},this.onDragEnd=t=>{this.suppressed=!1},this.onClick=t=>{this.hideOnClick&&(this.open=!1)}}connectedCallback(){super.connectedCallback?.(),this.eventController=new AbortController;let{signal:t}=this.eventController;this.addEventListener("mouseover",this.onMouseOver,{signal:t}),this.addEventListener("mouseout",this.onMouseOut,{signal:t}),this.addEventListener("focusin",this.onFocusIn,{signal:t}),this.addEventListener("focusout",this.onFocusOut,{signal:t}),this.addEventListener("mousedown",this.onMouseDown,{signal:t}),this.addEventListener("click",this.onClick,{signal:t}),window.addEventListener("mouseup",this.onMouseUp,{signal:t}),window.addEventListener("dragstart",this.onDragStart,{capture:!0,signal:t}),window.addEventListener("dragend",this.onDragEnd,{capture:!0,signal:t})}disconnectedCallback(){this.eventController?.abort(),this.eventController=void 0,this.detachAnchor(),this.unregisterDismissible(),clearTimeout(this.hoverTimeout),super.disconnectedCallback?.()}updated(t){t.has("open")&&(this.open?this.registerDismissible():this.unregisterDismissible()),t.has("disabled")&&this.disabled&&this.open&&(this.open=!1)}attachAnchor(t){null!=t&&(this.anchorEl=t,this.addAriaDescribedBy(t,this.bodyId))}detachAnchor(){null!=this.anchorEl&&(this.removeAriaDescribedBy(this.anchorEl,this.bodyId),this.anchorEl=void 0)}addAriaDescribedBy(t,i){let r=(t.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean);r.includes(i)||(r.push(i),t.setAttribute("aria-describedby",r.join(" ")))}removeAriaDescribedBy(t,i){let r=(t.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean).filter(t=>t!==i);0===r.length?t.removeAttribute("aria-describedby"):t.setAttribute("aria-describedby",r.join(" "))}registerDismissible(){oj.includes(this)||(oj.push(this),document.addEventListener("keydown",this.onDocumentKeyDown,{signal:this.eventController?.signal}))}unregisterDismissible(){let t=oj.indexOf(this);-1!==t&&oj.splice(t,1),document.removeEventListener("keydown",this.onDocumentKeyDown)}async hide(){this.open=!1,await this.updateComplete}async show(){this.disabled||this.suppressed||(this.open=!0,await this.updateComplete)}render(){var t;return ej`<wa-popup
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
				<slot name="content">${t=this.content,t?.includes(`
`)?oN(t.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):t}</slot>
			</div>
		</wa-popup>`}};oU.styles=tr`
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
	`,oq([tC()],oU.prototype,"content",2),oq([tC({reflect:!0})],oU.prototype,"placement",2),oq([tC({type:Boolean})],oU.prototype,"disabled",2),oq([tC({type:Number})],oU.prototype,"distance",2),oq([tC({type:Number,attribute:"show-delay"})],oU.prototype,"showDelay",2),oq([tC({type:Number,attribute:"hide-delay"})],oU.prototype,"hideDelay",2),oq([tC({type:Boolean,attribute:"hide-on-click"})],oU.prototype,"hideOnClick",2),oq([tS("wa-popup")],oU.prototype,"popup",2),oq([t$()],oU.prototype,"suppressed",2),oq([t$()],oU.prototype,"open",2),oU=oq([ty("gl-tooltip")],oU);let private_async_helpers_s=class private_async_helpers_s{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let oH=t=>null!==t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...t){return t.find(t=>!oH(t))??eH}update(t,i){let r=this._$Cbt,o=r.length;this._$Cbt=i;let n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cwt);t++){let c=i[t];if(!oH(c))return this._$Cwt=t,c;t<o&&c===r[t]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(c).then(async t=>{for(;a.get();)await a.get();let i=n.deref();if(void 0!==i){let r=i._$Cbt.indexOf(c);r>-1&&r<i._$Cwt&&(i._$Cwt=r,i.setValue(t))}}))}return eH}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let oF=eb(until_c);var oV=Object.defineProperty,oW=Object.getOwnPropertyDescriptor,oZ=(t,i,r,o)=>{for(var n,a=o>1?void 0:o?oW(i,r):i,c=t.length-1;c>=0;c--)(n=t[c])&&(a=(o?n(i,r,a):n(a))||a);return o&&a&&oV(i,r,a),a};let oG=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(t){this._hasPromo=t}render(){return ej`${oF(this.promoPromise?.then(t=>this.renderPromo(t)),eF)}`}renderPromo(t){if(!t?.content?.webview){this.hasPromo=!1;return}let i=t.content.webview;switch(this.type){case"icon":return ej`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(i.info)return this.hasPromo=!0,ej`<p class="promo" part="text">${oN(i.info.html)}</p>`;break;case"link":if(i.link)return this.hasPromo=!0,ej`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(t)}"
						title="${i.link.title??eF}"
						>${oN(i.link.html)}</a
					>`}return this.hasPromo=!1,eF}getCommandUrl(t){let i;return t?.content?.webview?.link?.command?.startsWith("command:")&&(i=t.content.webview.link.command.substring(8)),w(i??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};oG.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},oG.styles=[tr`
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
				${rs}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],oZ([tS('a,button,[tabindex="0"]')],oG.prototype,"_focusable",2),oZ([tC({type:Object})],oG.prototype,"promoPromise",2),oZ([tC({type:Object})],oG.prototype,"source",2),oZ([tC({reflect:!0,type:String})],oG.prototype,"type",2),oZ([tC({type:Boolean,reflect:!0,attribute:"has-promo"})],oG.prototype,"hasPromo",1),oG=oZ([ty("gl-promo")],oG);var oY=Object.defineProperty,oJ=Object.getOwnPropertyDescriptor,oK=(t,i,r,o)=>{for(var n,a=o>1?void 0:o?oJ(i,r):i,c=t.length-1;c>=0;c--)(n=t[c])&&(a=(o?n(i,r,a):n(a))||a);return o&&a&&oY(i,r,a),a};let oX=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var t,i;return null==this.subscription?0:(t=this.subscription,i=t.plan.effective.expiresOn,(null!=i?function(t,i,r,o){let n=("number"==typeof i?i:i.getTime())-("number"==typeof t?t:t.getTime()),a=o??Math.floor;switch(r){case"days":return a(n/864e5);case"hours":return a(n/36e5);case"minutes":return a(n/6e4);case"seconds":return a(n/1e3);default:return n}}(Date.now(),new Date(i),"days",Math.round):void 0)??0)}get state(){return this.subscription?.state}render(){return ej`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let t=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===ri.VerificationRequired)return ej`${t} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var i,r;if(i=this.subscription.plan.actual.id,rr.includes(i)||this.cloud&&null!=this.subscription.account)return ej`${t} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(r=this.subscription).state?r.state===ri.Trial:r.plan.actual.id!==r.plan.effective.id)return ej`${t} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return t}renderPopoverHeader(){let t=ej`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===ri.Paid?ej`<div class="popup-header">${t}</div>`:this.cloud?this.preview?ej`<div class="popup-header">
					${t}<span class="popup-subtitle"
						>Unlock this feature with an account and may require GitLens Pro in the future</span
					>
				</div>`:ej`<div class="popup-header">
				${t}<span class="popup-subtitle"> Unlock this feature with GitLens Pro</span>
			</div>`:this.preview?ej`<div class="popup-header">
				${t}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ej`<div class="popup-header">
			${t}<span class="popup-subtitle"> Unlock this feature for privately hosted repos with GitLens Pro</span>
		</div>`}renderPopoverContent(){let t;if(null==this.subscription)return eF;switch(this.state){case ri.Paid:var i;t=ej`<p>
					Your
					<gl-tooltip content="Show Account view">
						<a href="${w("gitlens.showAccountView")}"
							>${i=this.subscription?.plan.actual.id??"pro",`GitLens ${function(t){switch(t){case"student":return"Student";case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}(i)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case ri.VerificationRequired:t=ej`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${w("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${w("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case ri.Trial:{let i=this.daysRemaining;t=ej`<p>
						You have
						<strong>${i<1?"<1 day":tq("day",i,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case ri.TrialExpired:t=ej`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ej`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case ri.TrialReactivationEligible:t=ej`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tq("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${w("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tq("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:t=ej`<p>
						You only have access to
						<gl-tooltip content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ej`<div class="popup-content">${t}</div>`}renderStartTrialActions(){return ej`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${w("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${w("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(t){return ej`<div class="actions">
			${t??eF}
			<gl-button
				density="tight"
				href="${w("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ej`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};oX.styles=[rn,ra,tr`
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
				${ti(rs)}
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
		`],oK([tC({type:Boolean})],oX.prototype,"cloud",2),oK([tC({reflect:!0})],oX.prototype,"placement",2),oK([tC({type:Boolean})],oX.prototype,"preview",2),oK([function({context:t,subscribe:i}){return(r,o)=>{"object"==typeof o?o.addInitializer(function(){new s(this,{context:t,callback:t=>{r.set.call(this,t)},subscribe:i})}):r.constructor.addInitializer(r=>{new s(r,{context:t,callback:t=>{r[o]=t},subscribe:i})})}}({context:"promos"})],oX.prototype,"promos",2),oK([tC({type:Object})],oX.prototype,"source",2),oK([tC({attribute:!1})],oX.prototype,"subscription",2),oX=oK([ty("gl-feature-badge")],oX);var oQ=Object.defineProperty,o1=Object.getOwnPropertyDescriptor;let o0=class extends lit_element_i{render(){return ej`<svg
			alt="GitLens"
			width="159"
			height="46"
			viewBox="0 0 159 46"
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
			<path
				d="M71.554 18.5081C71.0032 17.4524 70.2382 16.6607 69.2591 16.1328C68.2799 15.5846 67.1477 15.3106 65.8626 15.3106C64.455 15.3106 63.2005 15.6252 62.0989 16.2546C60.9974 16.884 60.1304 17.7773 59.498 18.9345C58.8861 20.0917 58.5801 21.4317 58.5801 22.9543C58.5801 24.477 58.8861 25.8271 59.498 27.0046C60.1304 28.1618 60.9974 29.0551 62.0989 29.6845C63.2005 30.3138 64.455 30.6285 65.8626 30.6285C67.7597 30.6285 69.2999 30.1007 70.483 29.0449C71.6662 27.9892 72.3903 26.5579 72.6555 24.7511H64.6692V21.9798H76.3886C76.3886 21.9798 76.4973 22.789 76.4973 23.4052C76.4973 23.9332 76.3886 24.6901 76.3886 24.6901C76.1642 26.3346 75.5726 27.8471 74.6139 29.2277C73.6755 30.6082 72.4413 31.7147 70.9114 32.5471C69.4019 33.3592 67.7189 33.7652 65.8626 33.7652C63.8635 33.7652 62.0377 33.3084 60.3854 32.3948C58.7331 31.4609 57.4173 30.1717 56.4381 28.5272C55.4794 26.8828 55 25.0251 55 22.9543C55 20.8835 55.4794 19.0259 56.4381 17.3814C57.4173 15.7369 58.7331 14.4579 60.3854 13.5443C62.0581 12.6104 63.8839 12.1434 65.8626 12.1434C68.1269 12.1434 70.1362 12.7017 71.8906 13.8184C73.6653 14.9147 74.9505 16.4779 75.746 18.5081H71.554Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path d="M82.7053 19.7872V33.5825H79.2171V19.7872H82.7053Z" fill="#F7DEFF" class="letters" />
			<path
				d="M90.7428 19.6349V28.9231C90.7428 29.5525 90.8856 30.0093 91.1712 30.2935C91.4772 30.5575 91.9872 30.6894 92.7011 30.6894H94.8431V33.5825H92.0892C90.5184 33.5825 89.3149 33.217 88.4785 32.4862C87.6421 31.7553 87.2239 30.5676 87.2239 28.9231V19.6349H85.235V16.8028H87.2239V12.4049H90.7428V16.8028H94.8431V19.6349H90.7428Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M100.934 30.7808H109.505V33.5825H97.4461V12.4175H100.934V30.7808Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M125.883 24.7815C125.883 25.4109 125.842 25.9793 125.76 26.4869H112.878C112.98 27.8268 113.48 28.9028 114.378 29.7149C115.275 30.527 116.377 30.933 117.682 30.933C119.559 30.933 120.885 30.1514 121.66 28.5882H125.424C124.914 30.1311 123.986 31.4 122.639 32.3948C121.313 33.3693 119.661 33.8566 117.682 33.8566C116.071 33.8566 114.622 33.5013 113.337 32.7907C112.072 32.0598 111.073 31.0447 110.339 29.7454C109.625 28.4257 109.268 26.9031 109.268 25.1774C109.268 23.4517 109.614 21.9392 110.308 20.6399C111.022 19.3202 112.011 18.3051 113.276 17.5946C114.561 16.884 116.03 16.5287 117.682 16.5287C119.273 16.5287 120.691 16.8738 121.935 17.5641C123.18 18.2544 124.149 19.2289 124.842 20.4876C125.536 21.726 125.883 23.1573 125.883 24.7815ZM122.241 23.6852C122.221 22.4062 121.762 21.3809 120.865 20.6094C119.967 19.8379 118.855 19.4522 117.529 19.4522C116.326 19.4522 115.296 19.8379 114.439 20.6094C113.582 21.3606 113.072 22.3859 112.909 23.6852H122.241Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M136.29 16.5287C137.616 16.5287 138.799 16.8028 139.84 17.3509C140.901 17.8991 141.727 18.7112 142.318 19.7872C142.91 20.8632 143.206 22.1625 143.206 23.6852V33.5825H139.748V24.2029C139.748 22.7005 139.371 21.5535 138.616 20.7617C137.861 19.9496 136.831 19.5436 135.525 19.5436C134.22 19.5436 133.179 19.9496 132.404 20.7617C131.65 21.5535 131.272 22.7005 131.272 24.2029V33.5825H127.784V16.8028H131.272V18.7213C131.843 18.031 132.568 17.493 133.445 17.1073C134.342 16.7216 135.291 16.5287 136.29 16.5287Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M152.243 33.8566C150.917 33.8566 149.724 33.6231 148.663 33.1561C147.623 32.6689 146.797 32.0192 146.185 31.2071C145.573 30.3747 145.246 29.451 145.206 28.4359H148.816C148.877 29.1465 149.214 29.7454 149.826 30.2326C150.458 30.6996 151.244 30.933 152.182 30.933C153.161 30.933 153.916 30.7503 154.446 30.3849C154.997 29.9991 155.273 29.5119 155.273 28.9231C155.273 28.2938 154.967 27.8268 154.355 27.5223C153.763 27.2178 152.815 26.8828 151.509 26.5173C150.244 26.1722 149.214 25.8372 148.418 25.5124C147.623 25.1875 146.929 24.6901 146.338 24.0202C145.767 23.3502 145.481 22.4671 145.481 21.3707C145.481 20.4775 145.746 19.6654 146.277 18.9345C146.807 18.1833 147.562 17.5946 148.541 17.1682C149.54 16.7419 150.683 16.5287 151.968 16.5287C153.885 16.5287 155.426 17.0159 156.588 17.9904C157.772 18.9446 158.404 20.2541 158.486 21.9189H154.997C154.936 21.1677 154.63 20.5688 154.079 20.1222C153.528 19.6755 152.784 19.4522 151.846 19.4522C150.928 19.4522 150.224 19.6248 149.734 19.9699C149.245 20.315 149 20.7718 149 21.3403C149 21.7869 149.163 22.1625 149.489 22.4671C149.816 22.7716 150.214 23.0152 150.683 23.1979C151.152 23.3604 151.846 23.5735 152.764 23.8375C153.987 24.1623 154.987 24.4973 155.762 24.8424C156.558 25.1672 157.241 25.6545 157.812 26.3042C158.384 26.9538 158.679 27.8167 158.7 28.8927C158.7 29.8469 158.435 30.6996 157.904 31.4508C157.374 32.2019 156.619 32.7907 155.64 33.217C154.681 33.6434 153.549 33.8566 152.243 33.8566Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M83.4777 14.9015C83.4777 16.2735 82.3602 17.3857 80.9817 17.3857C79.6031 17.3857 78.4856 16.2735 78.4856 14.9015C78.4856 13.5295 79.6031 12.4173 80.9817 12.4173C82.3602 12.4173 83.4777 13.5295 83.4777 14.9015Z"
				fill="#F7DEFF"
				class="letters"
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
		</svg>`}};o0.styles=[tr`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				vertical-align: middle;
			}

			.soft-light {
				mix-blend-mode: soft-light;
			}
		`],o0=((t,i,r,o)=>{for(var n,a=o>1?void 0:o?o1(i,r):i,c=t.length-1;c>=0;c--)(n=t[c])&&(a=(o?n(i,r,a):n(a))||a);return o&&a&&oQ(i,r,a),a})([ty("gitlens-logo")],o0);let o2=new Date().getTimezoneOffset()/60*100,o3=new Date(`Wed Jul 25 2018 19:18:00 GMT${o2>=0?"-":"+"}${String(Math.abs(o2)).padStart(4,"0")}`);let SettingsApp=class SettingsApp extends App{constructor(){super("SettingsApp"),this._scopes=null,this._activeSection="general",this._changes=Object.create(null),this._sections=new Map,this._updating=!1}onInitialize(){let t=document.getElementById("scopes");if(null!=t&&this.state.scopes.length>1){for(let[i,r]of this.state.scopes){let o=document.createElement("option");o.value=i,o.innerHTML=r,this.state.scope===i&&(o.selected=!0),t.appendChild(o)}t.parentElement.parentElement.classList.remove("hidden"),this._scopes=t}let i=83,r=document.querySelector(".hero__area--sticky");for(let t of(null!=r&&(i=r.clientHeight),this._observer=new IntersectionObserver(this.onObserver.bind(this),{rootMargin:`-${i}px 0px 0px 0px`}),document.querySelectorAll("section[id]>.section__header")))this._sections.set(t.parentElement.id,!1),this._observer.observe(t);for(let t of document.querySelectorAll("[data-setting]"))for(let i of(t.title||"checkbox"!==t.type||(t.title=`Setting name: "gitlens.${t.name}"`),document.querySelectorAll(`label[for="${t.id}"]`)))i.title||(i.title=`Setting name: "gitlens.${t.name}"`)}onBind(){let t=super.onBind?.()??[];return t.push(g.on("input[type=checkbox][data-setting]","change",(t,i)=>this.onInputChecked(i)),g.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","blur",(t,i)=>this.onInputBlurred(i)),g.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","focus",(t,i)=>this.onInputFocused(i)),g.on("input[type=text][data-setting][data-setting-preview], input[type=number][data-setting][data-setting-preview]","input",(t,i)=>this.onInputChanged(i)),g.on("button[data-setting-clear]","click",(t,i)=>this.onButtonClicked(i)),g.on("select[data-setting]","change",(t,i)=>this.onInputSelected(i)),g.on(".token[data-token]","mousedown",(t,i)=>this.onTokenMouseDown(i,t)),g.on(".section--collapsible>.section__header","click",(t,i)=>this.onSectionHeaderClicked(i,t)),g.on(".setting--expandable .setting__expander","click",(t,i)=>this.onSettingExpanderCicked(i,t)),g.on('a[data-action="jump"]',"mousedown",t=>{t.target?.focus(),t.stopPropagation(),t.preventDefault()}),g.on('a[data-action="jump"]',"click",(t,i)=>this.onJumpToLinkClicked(i,t)),g.on("[data-action]","mousedown",t=>{t.target?.focus(),t.stopPropagation(),t.preventDefault()}),g.on("[data-action]","click",(t,i)=>this.onActionLinkClicked(i,t))),t}onMessageReceived(t){switch(!0){case N.is(t):this.scrollToAnchor(t.params.anchor,t.params.scrollBehavior);break;case T.is(t):this.state.config=t.params.config,this.state.customSettings=t.params.customSettings,this.state.timestamp=Date.now(),this.setState(this.state),this.updateState();break;case D.is(t):this.state.hasAccount=t.params.hasAccount,this.setState(this.state),this.renderAutolinkIntegration();break;case q.is(t):t.params.integrationId===b.Jira?this.state.hasConnectedJira=t.params.connected:t.params.integrationId===b.Linear&&(this.state.hasConnectedLinear=t.params.connected),this.setState(this.state),this.renderAutolinkIntegration();break;default:super.onMessageReceived?.(t)}}applyChanges(){this.sendCommand($,{changes:{...this._changes},removes:Object.keys(this._changes).filter(t=>void 0===this._changes[t]),scope:this.getSettingsScope()}),this._changes=Object.create(null)}getSettingsScope(){return null!=this._scopes?this._scopes.options[this._scopes.selectedIndex].value:"user"}onInputBlurred(t){this.log(`onInputBlurred(${t.name}): value=${t.value})`);let i=document.getElementById(`${t.name}.popup`);null!=i&&i.classList.add("hidden");let r=t.value;if((null==r||0===r.length)&&void 0===(r=t.dataset.defaultValue)&&(r=null),"arrayObject"===t.dataset.settingType){let i=t.name.split("."),o=i[0],n=parseInt(i[1],10),a=i.slice(2),c=this.getSettingValue(o);if(null==r&&(void 0===c||c?.length===0))void 0!==c&&(this._changes[o]=void 0);else{let i=(c=c??[])[n];(null!=r||null==r&&void 0!==i)&&(void 0===i&&(i=Object.create(null),c[n]=i),o4(i,a.join("."),"number"===t.type&&null!=r?Number(r):r),this._changes[o]=c)}}else this._changes[t.name]="number"===t.type&&null!=r?Number(r):r;this.applyChanges()}onButtonClicked(t){if("arrayObject"===t.dataset.settingType){let i=t.name.split("."),r=i[0],o=this.getSettingValue(r);if(void 0===o)return;let n=parseInt(i[1],10);null!=o[n]&&(o.splice(n,1),this._changes[r]=o.length?o:void 0,this.applyChanges())}}onInputChanged(t){if(!this._updating)for(let i of document.querySelectorAll(`span[data-setting-preview="${t.name}"]`))this.updatePreview(i,t.value)}onInputChecked(t){if(!this._updating){switch(this.log(`onInputChecked(${t.name}): checked=${t.checked}, value=${t.value})`),t.dataset.settingType){case"object":{let i=t.name.split("."),r=i.splice(0,1)[0],o=this.getSettingValue(r)??Object.create(null);t.checked?o4(o,i.join("."),o6(t.value)):o4(o,i.join("."),!1),this._changes[r]=o;break}case"array":{let i=this.getSettingValue(t.name)??[];if(Array.isArray(i)){if(t.checked)i.includes(t.value)||i.push(t.value);else{let r=i.indexOf(t.value);-1!==r&&i.splice(r,1)}this._changes[t.name]=i}break}case"arrayObject":{let i=t.name.split("."),r=i[0],o=parseInt(i[1],10),n=i.slice(2),a=this.getSettingValue(r)??[],c=a[o]??Object.create(null);void 0===a[o]&&(a[o]=c),t.checked?o4(a[o],n.join("."),o6(t.value)):o4(a[o],n.join("."),!1),this._changes[r]=a;break}case"custom":this._changes[t.name]=t.checked;break;default:t.checked?this._changes[t.name]=o6(t.value):this._changes[t.name]=t.dataset.valueOff??!1}this.setAdditionalSettings(t.checked?t.dataset.addSettingsOn:t.dataset.addSettingsOff),this.applyChanges()}}onInputFocused(t){this.log(`onInputFocused(${t.name}): value=${t.value}`);let i=document.getElementById(`${t.name}.popup`);if(null!=i){if(0===i.childElementCount){let t=document.querySelector("#token-popup")?.content.cloneNode(!0);null!=t&&i.appendChild(t)}i.classList.remove("hidden")}}onInputSelected(t){if(t===this._scopes||this._updating)return;let i=t.options[t.selectedIndex].value;this.log(`onInputSelected(${t.name}): value=${i}`),this._changes[t.name]=o5(i),this.applyChanges()}onTokenMouseDown(t,i){if(this._updating)return;this.log(`onTokenMouseDown(${t.id})`);let r=t.closest(".setting");if(null==r)return;let o=r.querySelector("input[type=text], input:not([type])");if(null==o)return;let n=`\${${t.dataset.token}}`,a=o.selectionStart;null!=a?(o.value=`${o.value.substring(0,a)}${n}${o.value.substring(o.selectionEnd??a)}`,a+=n.length):a=o.value.length,o.focus(),o.setSelectionRange(a,a),a===o.value.length&&(o.scrollLeft=o.scrollWidth),setTimeout(()=>this.onInputChanged(o),0),setTimeout(()=>o.focus(),250),i.stopPropagation(),i.stopImmediatePropagation(),i.preventDefault()}scrollToAnchor(t,i,r){r=83;let o=document.querySelector(".hero__area--sticky");null!=o&&(r=o.clientHeight);let n=document.getElementById(t);null!=n&&this.scrollTo(n,i,r)}scrollTo(t,i,r){let o=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(r??0);window.scrollTo({top:o,behavior:i??"smooth"});let n=()=>{null!=this._scrollTimer&&clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout(()=>{(window.removeEventListener("scroll",n),2>Math.abs(o-(t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(r??0))))?t.focus({preventScroll:!0}):this.scrollTo(t,i,r)},50)};window.addEventListener("scroll",n,!1)}evaluateStateExpression(t,i){let r=!1;for(let o of t.trim().split("&")){let[t,n,a]=function(t){let[i,r,o]=t.trim().split(/([=+!])/);return[i.trim(),void 0!==r?r.trim():"=",void 0!==o?o.trim():o]}(o);switch(n){case"=":{let o=i[t];void 0===o&&(void 0===(o=this.getSettingValue(t))||null===o&&"string"!=typeof a)&&(o=!1),r=void 0!==a?a===String(o):!!o;break}case"!":{let o=i[t];void 0===o&&(void 0===(o=this.getSettingValue(t))||null===o&&"string"!=typeof a)&&(o=!1),r=void 0!==a?a!==String(o):!o;break}case"+":if(void 0!==a){let i=this.getSettingValue(t);r=void 0!==i&&i.includes(a.toString())}}if(!r)break}return r}getCustomSettingValue(t){return this.state.customSettings?.[t]}getSettingValue(t){var i;let r=this.getCustomSettingValue(t);return null!=r?r:(i=this.state.config,t.split(".").reduce((t={},i)=>null==t?void 0:t[i],i))}updateState(){var i;let{version:r}=this.state;document.getElementById("version").textContent=r;let o=document.activeElement?.id;this.renderAutolinkIntegration(),this.renderAutolinks(),o?.startsWith("autolinks.")&&queueMicrotask(()=>{document.getElementById(o)?.focus()}),this._updating=!0,t="string"==typeof(i=this.state.config.defaultDateLocale)?"system"===i||0===i.trim().length?void 0:[i]:i??void 0,tM.clear(),tR.clear();try{for(let t of document.querySelectorAll("input[type=checkbox][data-setting]"))if("custom"===t.dataset.settingType)t.checked=this.getCustomSettingValue(t.name)??!1;else if("array"===t.dataset.settingType)t.checked=(this.getSettingValue(t.name)??[]).includes(t.value);else if(null!=t.dataset.valueOff){let i=this.getSettingValue(t.name);t.checked=t.dataset.valueOff!==i,t.indeterminate=null===i}else t.checked=this.getSettingValue(t.name)??!1;for(let t of document.querySelectorAll("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]"))t.value=this.getSettingValue(t.name)??"";for(let t of document.querySelectorAll("select[data-setting]")){let i=this.getSettingValue(t.name),r=t.querySelector(`option[value='${i}']`);null!=r&&(r.selected=!0)}for(let t of document.querySelectorAll("span[data-setting-preview]"))this.updatePreview(t)}finally{this._updating=!1}let n=function t(i,r){let o={};for(let n in i){let a=i[n];Array.isArray(a)||("object"==typeof a?Object.assign(o,t(a,void 0===r?n:`${r}.${n}`)):o[void 0===r?n:`${r}.${n}`]=a)}return o}(this.state.config);if(null!=this.state.customSettings)for(let[t,i]of Object.entries(this.state.customSettings))n[t]=i;this.setVisibility(n),this.setEnablement(n)}setAdditionalSettings(t){if(t){for(let[i,r]of t.trim().split(",").map(t=>{let[i,r]=t.split("=");return[i,o5(r)]}))this._changes[i]=r}}setEnablement(t){for(let i of document.querySelectorAll("[data-enablement]")){let r=!this.evaluateStateExpression(i.dataset.enablement,t);if(r?i.setAttribute("disabled",""):i.removeAttribute("disabled"),i.matches("input,select"))i.disabled=r;else{let t=i.querySelector("input,select");if(null==t)continue;t.disabled=r}}}setVisibility(t){for(let i of document.querySelectorAll("[data-visibility]"))i.classList.toggle("hidden",!this.evaluateStateExpression(i.dataset.visibility,t))}updatePreview(t,i){let r=t.dataset.settingPreviewType;switch(r){case"date":if(void 0===i&&(i=this.getSettingValue(t.dataset.settingPreview)),!i){let r=t.dataset.settingPreviewDefaultLookup;null!=r&&(i=this.getSettingValue(r)),i??=t.dataset.settingPreviewDefault}t.innerText=null==i?"":tN(o3,i,void 0,!1);break;case"date-locale":{void 0===i&&(i=this.getSettingValue(t.dataset.settingPreview)),i||(i=void 0);let r=this.getSettingValue(t.dataset.settingPreviewDefault)??"MMMM Do, YYYY h:mma";try{t.innerText=tN(o3,r,i,!1)}catch(i){t.innerText=i.message}break}case"commit":case"commit-uncommitted":if(void 0===i&&(i=this.getSettingValue(t.dataset.settingPreview)),!i&&null==(i=t.dataset.settingPreviewDefault)){let r=t.dataset.settingPreviewDefaultLookup;null!=r&&(i=this.getSettingValue(r))}if(null==i){t.innerText="";return}this.sendRequest(M,{key:t.dataset.settingPreview,type:r,format:i}).then(i=>{t.innerText=i.preview??""})}}onObserver(t,i){let r;for(let i of t)this._sections.set(i.target.parentElement.id,i.isIntersecting);for(let[t,i]of this._sections.entries())if(i){r=t;break}if(void 0===r){if(1!==t.length)return;let i=t[0];if(null==i.boundingClientRect||null==i.rootBounds)return;if(r=i.target.parentElement.id,i.boundingClientRect.top>=i.rootBounds.bottom){let t=[...this._sections.keys()],i=t.indexOf(r);if(i<=0)return;r=t[i-1]}}this._activeSection!==r&&(void 0!==this._activeSection&&this.toggleJumpLink(this._activeSection,!1),this._activeSection=r,this.toggleJumpLink(this._activeSection,!0))}onActionLinkClicked(t,i){switch(t.dataset.action){case"collapse":for(let t of document.querySelectorAll(".section--collapsible"))t.classList.add("collapsed");document.querySelector('[data-action="collapse"]').classList.add("hidden"),document.querySelector('[data-action="expand"]').classList.remove("hidden");break;case"expand":for(let t of document.querySelectorAll(".section--collapsible"))t.classList.remove("collapsed");document.querySelector('[data-action="collapse"]').classList.remove("hidden"),document.querySelector('[data-action="expand"]').classList.add("hidden");break;case"show":if(t.dataset.actionTarget)for(let i of document.querySelectorAll(`[data-region="${t.dataset.actionTarget}"]`))i.classList.remove("hidden"),i.querySelector("input,select,textarea,button")?.focus();break;case"hide":if(t.dataset.actionTarget)for(let i of document.querySelectorAll(`[data-region="${t.dataset.actionTarget}"]`))i.classList.add("hidden")}i.preventDefault(),i.stopPropagation()}onJumpToLinkClicked(t,i){let r=t.getAttribute("href");if(null==r)return;let o=r.substring(1);this.scrollToAnchor(o,"smooth"),i.stopPropagation(),i.preventDefault()}onSectionHeaderClicked(t,i){i.target.matches("a, input, label, i.icon__info")||t.parentElement.classList.toggle("collapsed")}onSettingExpanderCicked(t,i){t.parentElement.parentElement.classList.toggle("expanded")}toggleJumpLink(t,i){let r=document.querySelector(`a.sidebar__jump-link[href="#${t}"]`);null!=r&&r.classList.toggle("active",i)}renderAutolinkIntegration(){let t=document.querySelector('[data-component="autolink-integration"]');if(null==t)return;let{hasAccount:i,hasConnectedJira:r,hasConnectedLinear:o}=this.state,n=`<a href="${w("gitlens.plus.cloudIntegrations.connect",{integrationIds:["jira"],source:{source:"settings",detail:{action:"connect",integration:"jira"}}})}">Connect to Jira Cloud</a> &mdash; ${i?"":"sign up and "}get access to automatic rich Jira autolinks.`;i&&r&&(n='<i class="codicon codicon-check codicon--inline"></i> Jira connected &mdash; automatic rich Jira autolinks are enabled.');let a=`<a href="${w("gitlens.plus.cloudIntegrations.connect",{integrationIds:["linear"],source:{source:"settings",detail:{action:"connect",integration:"linear"}}})}">Connect to Linear</a> &mdash; ${i?"":"sign up and "}get access to automatic rich Linear autolinks.`;i&&o&&(a='<i class="codicon codicon-check codicon--inline"></i> Linear connected &mdash; automatic rich Linear autolinks are enabled.'),t.innerHTML=`${n}<br/>${a}`}renderAutolinks(){let t=document.querySelector('[data-component="autolinks"]');if(null==t)return;let i=()=>`
			<div class="setting__hint">
				<span class="setting__hint--tall">
					<i class="icon icon--sm icon__info"></i> Matches prefixes that are followed by a reference value within commit messages.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The URL must contain a <code>&lt;num&gt;</code> for the reference value to be included in the link.
				</span>
			</div>
		`,r=(t,r,o=!1,n=!0)=>`
			<div class="setting${o?' hidden" data-region="autolink':""}">
				<div class="setting__group">
					<div class="setting__input setting__input--short setting__input--with-actions">
						<label for="autolinks.${t}.prefix">Prefix</label>
						<input
							id="autolinks.${t}.prefix"
							name="autolinks.${t}.prefix"
							placeholder="TICKET-"
							data-setting
							data-setting-type="arrayObject"
							${r?.prefix?`value="${encodeURIComponent(r.prefix)}"`:""}
						>
						<div class="setting__input-actions">
							<div class="toggle-button">
								<input
									id="autolinks.${t}.ignoreCase"
									name="autolinks.${t}.ignoreCase"
									type="checkbox"
									class="toggle-button__control"
									data-setting
									data-setting-type="arrayObject"
									${r?.ignoreCase?"checked":""}
								>
								<label class="toggle-button__label" for="autolinks.${t}.ignoreCase" title="Case-sensitive" aria-label="Case-sensitive">Aa</label>
							</div>
							<div class="toggle-button">
								<input
									id="autolinks.${t}.alphanumeric"
									name="autolinks.${t}.alphanumeric"
									type="checkbox"
									class="toggle-button__control"
									data-setting
									data-setting-type="arrayObject"
									${r?.alphanumeric?"checked":""}
								>
								<label class="toggle-button__label" for="autolinks.${t}.alphanumeric" title="Alphanumeric" aria-label="Alphanumeric">a1</label>
							</div>
						</div>
					</div>
					<div class="setting__input setting__input--long setting__input--centered">
						<label for="autolinks.${t}.url">URL</label>
						<input
							id="autolinks.${t}.url"
							name="autolinks.${t}.url"
							type="text"
							placeholder="https://example.com/TICKET?q=&lt;num&gt;"
							data-setting
							data-setting-type="arrayObject"
							${r?.url?`value="${encodeURIComponent(r.url)}"`:""}
						>
						${o?`
							<button
								class="button button--compact button--flat-subtle"
								type="button"
								data-action="hide"
								data-action-target="autolink"
								title="Delete"
								aria-label="Delete"
							><i class="codicon codicon-close"></i></button>
						`:`
							<button
								id="autolinks.${t}.delete"
								name="autolinks.${t}.delete"
								class="button button--compact button--flat-subtle"
								type="button"
								data-setting-type="arrayObject"
								data-setting-clear
								title="Delete"
								aria-label="Delete"
							><i class="codicon codicon-close"></i></button>
						`}
					</div>
				</div>
				${n&&o?i():""}
			</div>
		`,o=[],n=(this.state.config.autolinks?.length||0)>0;n&&this.state.config.autolinks?.forEach((t,i)=>o.push(r(i,t))),o.push(r(this.state.config.autolinks?.length??0,void 0,!0,!n)),n&&o.push(i()),t.innerHTML=o.join("")}};function o5(t){return"true"===t||"false"!==t&&("null"===t?null:t)}function o4(t,i,r){let o=i.split("."),n=o.length,a=n-1,c=-1,h=t;for(;null!=h&&++c<n;){let t=o[c],i=r;if(c!==a){let r=h[t];i="object"==typeof r?r:{}}h[t]=i,h=h[t]}return t}function o6(t){switch(t){case"on":return!0;case"null":return null;case"undefined":return;default:return t}}new SettingsApp;export{SettingsApp};