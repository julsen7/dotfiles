let t,i,r,o,s,n,a,c,h,p;var u,g,f,m,b,_,v={518(t){function i(t){if("string"!=typeof t)throw TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,i){for(var r,o="",s=0,n=-1,a=0,c=0;c<=t.length;++c){if(c<t.length)r=t.charCodeAt(c);else if(47===r)break;else r=47;if(47===r){if(n===c-1||1===a);else if(n!==c-1&&2===a){if(o.length<2||2!==s||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var h=o.lastIndexOf("/");if(h!==o.length-1){-1===h?(o="",s=0):s=(o=o.slice(0,h)).length-1-o.lastIndexOf("/"),n=c,a=0;continue}}else if(2===o.length||1===o.length){o="",s=0,n=c,a=0;continue}}i&&(o.length>0?o+="/..":o="..",s=2)}else o.length>0?o+="/"+t.slice(n+1,c):o=t.slice(n+1,c),s=c-n-1;n=c,a=0}else 46===r&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var t,o,s="",n=!1,a=arguments.length-1;a>=-1&&!n;a--)a>=0?o=arguments[a]:(void 0===t&&(t=process.cwd()),o=t),i(o),0!==o.length&&(s=o+"/"+s,n=47===o.charCodeAt(0));if(s=r(s,!n),n)if(s.length>0)return"/"+s;else return"/";return s.length>0?s:"."},normalize:function(t){if(i(t),0===t.length)return".";var o=47===t.charCodeAt(0),s=47===t.charCodeAt(t.length-1);return(0!==(t=r(t,!o)).length||o||(t="."),t.length>0&&s&&(t+="/"),o)?"/"+t:t},isAbsolute:function(t){return i(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var t,r=0;r<arguments.length;++r){var s=arguments[r];i(s),s.length>0&&(void 0===t?t=s:t+="/"+s)}return void 0===t?".":o.normalize(t)},relative:function(t,r){if(i(t),i(r),t===r||(t=o.resolve(t))===(r=o.resolve(r)))return"";for(var s=1;s<t.length&&47===t.charCodeAt(s);++s);for(var n=t.length,a=n-s,c=1;c<r.length&&47===r.charCodeAt(c);++c);for(var h=r.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===r.charCodeAt(c+g))return r.slice(c+g+1);else if(0===g)return r.slice(c+g)}else a>p&&(47===t.charCodeAt(s+g)?u=g:0===g&&(u=0));break}var f=t.charCodeAt(s+g);if(f!==r.charCodeAt(c+g))break;47===f&&(u=g)}var m="";for(g=s+u+1;g<=n;++g)(g===n||47===t.charCodeAt(g))&&(0===m.length?m+="..":m+="/..");return m.length>0?m+r.slice(c+u):(c+=u,47===r.charCodeAt(c)&&++c,r.slice(c))},_makeLong:function(t){return t},dirname:function(t){if(i(t),0===t.length)return".";for(var r=t.charCodeAt(0),o=47===r,s=-1,n=!0,a=t.length-1;a>=1;--a)if(47===(r=t.charCodeAt(a))){if(!n){s=a;break}}else n=!1;return -1===s?o?"/":".":o&&1===s?"//":t.slice(0,s)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');i(t);var o,s=0,n=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return"";var c=r.length-1,h=-1;for(o=t.length-1;o>=0;--o){var p=t.charCodeAt(o);if(47===p){if(!a){s=o+1;break}}else -1===h&&(a=!1,h=o+1),c>=0&&(p===r.charCodeAt(c)?-1==--c&&(n=o):(c=-1,n=h))}return s===n?n=h:-1===n&&(n=t.length),t.slice(s,n)}for(o=t.length-1;o>=0;--o)if(47===t.charCodeAt(o)){if(!a){s=o+1;break}}else -1===n&&(a=!1,n=o+1);return -1===n?"":t.slice(s,n)},extname:function(t){i(t);for(var r=-1,o=0,s=-1,n=!0,a=0,c=t.length-1;c>=0;--c){var h=t.charCodeAt(c);if(47===h){if(!n){o=c+1;break}continue}-1===s&&(n=!1,s=c+1),46===h?-1===r?r=c:1!==a&&(a=1):-1!==r&&(a=-1)}return -1===r||-1===s||0===a||1===a&&r===s-1&&r===o+1?"":t.slice(r,s)},format:function(t){var i,r;if(null===t||"object"!=typeof t)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return i=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||""),i?i===t.root?i+r:i+"/"+r:r},parse:function(t){i(t);var r,o={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return o;var s=t.charCodeAt(0),n=47===s;n?(o.root="/",r=1):r=0;for(var a=-1,c=0,h=-1,p=!0,u=t.length-1,g=0;u>=r;--u){if(47===(s=t.charCodeAt(u))){if(!p){c=u+1;break}continue}-1===h&&(p=!1,h=u+1),46===s?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1)}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(0===c&&n?o.base=o.name=t.slice(1,h):o.base=o.name=t.slice(c,h)):(0===c&&n?(o.name=t.slice(1,a),o.base=t.slice(1,h)):(o.name=t.slice(c,a),o.base=t.slice(c,h)),o.ext=t.slice(a,h)),c>0?o.dir=t.slice(0,c-1):n&&(o.dir="/"),o},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,t.exports=o},285(t,i,r){r.d(i,{FlowLayout:()=>FlowLayout,flow:()=>s}),r.r(i);let SizeCache=class SizeCache{constructor(t){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,t?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(t,i){let r=this._map.get(t)||0;this._map.set(t,i),this.totalSize+=i-r}get averageSize(){if(this._map.size>0){let t=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(t):t}return 0}getSize(t){return this._map.get(t)}clear(){this._map.clear(),this.totalSize=0}};function o(t){return"horizontal"===t?"width":"height"}let BaseLayout=class BaseLayout{_getDefaultConfig(){return{direction:"vertical"}}constructor(t,i){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=t,Promise.resolve().then(()=>this.config=i||this._getDefaultConfig())}set config(t){Object.assign(this,Object.assign({},this._getDefaultConfig(),t))}get config(){return{direction:this.direction}}get items(){return this._items}set items(t){this._setItems(t)}_setItems(t){t!==this._items&&(this._items=t,this._scheduleReflow())}get direction(){return this._direction}set direction(t){(t="horizontal"===t?t:"vertical")!==this._direction&&(this._direction=t,this._sizeDim="horizontal"===t?"width":"height",this._secondarySizeDim="horizontal"===t?"height":"width",this._positionDim="horizontal"===t?"left":"top",this._secondaryPositionDim="horizontal"===t?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(t){let{_viewDim1:i,_viewDim2:r}=this;Object.assign(this._viewportSize,t),r!==this._viewDim2?this._scheduleLayoutUpdate():i!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(t){Object.assign(this._latestCoords,t);let i=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(i-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(t=!1){(t||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(t){this._pin=t,this._triggerReflow()}get pin(){if(null!==this._pin){let{index:t,block:i}=this._pin;return{index:Math.max(0,Math.min(t,this.items.length-1)),block:i}}return null}_clampScrollPosition(t){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(t,this.totalScrollSize[o(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){let t=this._scrollPosition,{index:i,block:r}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:i,block:r||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=t-this._scrollPosition}}_calculateScrollIntoViewPosition(t){let{block:i}=t,r=Math.min(this.items.length,Math.max(0,t.index)),o=this._getItemPosition(r)[this._positionDim],s=o;if("start"!==i){let t=this._getItemSize(r)[this._sizeDim];if("center"===i)s=o-.5*this._viewDim1+.5*t;else{let r=o-this._viewDim1+t;if("end"===i)s=r;else{let t=this._scrollPosition;s=Math.abs(t-o)<Math.abs(t-r)?o:r}}}return s+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(s)}getScrollIntoViewCoordinates(t){return{[this._positionDim]:this._calculateScrollIntoViewPosition(t)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let t=new Map;if(-1!==this._first&&-1!==this._last)for(let i=this._first;i<=this._last;i++)t.set(i,this._getItemPosition(i));let i={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:t};this._scrollError&&(i.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(i)}get _num(){return -1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{let t=Math.max(0,this._scrollPosition-this._overhang),i=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>t||this._physicalMax<i?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(t){if(-1===this._first||-1===this._last)return;let i=this._first;for(;i<this._last&&Math.round(this._getItemPosition(i)[this._positionDim]+this._getItemSize(i)[this._sizeDim])<=Math.round(this._scrollPosition);)i++;let r=this._last;for(;r>this._first&&Math.round(this._getItemPosition(r)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)r--;(i!==this._firstVisible||r!==this._lastVisible)&&(this._firstVisible=i,this._lastVisible=r,t&&t.emit&&this._sendVisibilityChangedMessage())}};let s=t=>Object.assign({type:FlowLayout},t);function n(t){return"horizontal"===t?"marginLeft":"marginTop"}let MetricsCache=class MetricsCache{constructor(){this._childSizeCache=new SizeCache,this._marginSizeCache=new SizeCache,this._metricsCache=new Map}update(t,i){let r=new Set;for(let s of(Object.keys(t).forEach(s=>{let n=Number(s);this._metricsCache.set(n,t[n]),this._childSizeCache.set(n,t[n][o(i)]),r.add(n),r.add(n+1)}),r)){let t=this._metricsCache.get(s)?.[n(i)]||0,r=this._metricsCache.get(s-1)?.["horizontal"===i?"marginRight":"marginBottom"]||0;this._marginSizeCache.set(s,function(t,i){let r=[t,i].sort();return r[1]<=0?Math.min(...r):r[0]>=0?Math.max(...r):r[0]+r[1]}(t,r))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(t,i){return this._metricsCache.get(t)?.[n(i)]||0}getChildSize(t){return this._childSizeCache.getSize(t)}getMarginSize(t){return this._marginSizeCache.getSize(t)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}};let FlowLayout=class FlowLayout extends BaseLayout{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new MetricsCache,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(t){this._metricsCache.update(t,this.direction),this._scheduleReflow()}_getPhysicalItem(t){return this._newPhysicalItems.get(t)??this._physicalItems.get(t)}_getSize(t){return this._getPhysicalItem(t)&&this._metricsCache.getChildSize(t)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(t){let i=this._metricsCache;if(-1===this._first||-1===this._last)return i.averageMarginSize+t*(i.averageMarginSize+this._getAverageSize());if(t<this._first){let r=this._first-t;return this._getPhysicalItem(this._first).pos-(i.getMarginSize(this._first-1)||i.averageMarginSize)-(r*i.averageChildSize+(r-1)*i.averageMarginSize)}{let r=t-this._last;return this._getPhysicalItem(this._last).pos+(i.getChildSize(this._last)||i.averageChildSize)+(i.getMarginSize(this._last)||i.averageMarginSize)+r*(i.averageChildSize+i.averageMarginSize)}}_getPosition(t){let i=this._getPhysicalItem(t),{averageMarginSize:r}=this._metricsCache;return 0===t?this._metricsCache.getMarginSize(0)??r:i?i.pos:this._estimatePosition(t)}_calculateAnchor(t,i){return t<=0?0:i>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((t+i)/2/this._delta)))}_getAnchor(t,i){if(0===this._physicalItems.size||this._first<0||this._last<0)return this._calculateAnchor(t,i);let r=this._getPhysicalItem(this._first),o=this._getPhysicalItem(this._last),s=r.pos;if(o.pos+this._metricsCache.getChildSize(this._last)<t||s>i)return this._calculateAnchor(t,i);let n=this._firstVisible-1,a=-1/0;for(;a<t;)a=this._getPhysicalItem(++n).pos+this._metricsCache.getChildSize(n);return n}_getActiveItems(){0===this._viewDim1||0===this.items.length?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let t=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=t,this._stable=!0}_getItems(){let t,i,r=this._newPhysicalItems;if(this._stable=!0,null!==this.pin){let{index:t}=this.pin;this._anchorIdx=t,this._anchorPos=this._getPosition(t)}if(t=this._scrollPosition-this._overhang,(i=this._scrollPosition+this._viewDim1+this._overhang)<0||t>this._scrollSize)return void this._clearItems();(null===this._anchorIdx||null===this._anchorPos)&&(this._anchorIdx=this._getAnchor(t,i),this._anchorPos=this._getPosition(this._anchorIdx));let o=this._getSize(this._anchorIdx);void 0===o&&(this._stable=!1,o=this._getAverageSize());let s=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,n=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=s),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-n-o);let a=0;for(this._anchorPos+o+n<t&&(a=t-(this._anchorPos+o+n)),this._anchorPos-s>i&&(a=i-(this._anchorPos-s)),a&&(this._scrollPosition-=a,t-=a,i-=a,this._scrollError+=a),r.set(this._anchorIdx,{pos:this._anchorPos,size:o}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-s,this._physicalMax=this._anchorPos+o+n;this._physicalMin>t&&this._first>0;){let t=this._getSize(--this._first);void 0===t&&(this._stable=!1,t=this._getAverageSize());let i=this._metricsCache.getMarginSize(this._first);void 0===i&&(this._stable=!1,i=this._metricsCache.averageMarginSize),this._physicalMin-=t;let o=this._physicalMin;if(r.set(this._first,{pos:o,size:t}),this._physicalMin-=i,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<i&&this._last<this.items.length-1;){let t=this._getSize(++this._last);void 0===t&&(this._stable=!1,t=this._getAverageSize());let i=this._metricsCache.getMarginSize(this._last);void 0===i&&(this._stable=!1,i=this._metricsCache.averageMarginSize);let o=this._physicalMax;if(r.set(this._last,{pos:o,size:t}),this._physicalMax+=t+i,!this._stable&&!this._estimate)break}let c=this._calculateError();c&&(this._physicalMin-=c,this._physicalMax-=c,this._anchorPos-=c,this._scrollPosition-=c,r.forEach(t=>t.pos-=c),this._scrollError+=c),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=r)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:t,_last:i}=this;super._reflow(),(-1===this._first&&-1==this._last||this._first===t&&this._last===i)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:t}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(t+this._getAverageSize())+t)}get _delta(){let{averageMarginSize:t}=this._metricsCache;return this._getAverageSize()+t}_getItemPosition(t){return{[this._positionDim]:this._getPosition(t),[this._secondaryPositionDim]:0,["horizontal"===this.direction?"xOffset":"yOffset"]:-(this._metricsCache.getLeadingMarginValue(t,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(t){return{[this._sizeDim]:this._getSize(t)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}}},y={};function w(t){var i=y[t];if(void 0!==i)return i.exports;var r=y[t]={exports:{}};return v[t](r,r.exports,w),r.exports}function x(t,i,r){let o,s,n,a,c,h,p,u,g,f,m=0;null!=r&&({edges:h,maxWait:p,cancellation:u,aggregator:g}=r);let b="leading"===(h??="trailing")||"both"===h,_="trailing"===h||"both"===h;function v(){if(null!=o){m=Date.now();let i=o,r=f;return f=void 0,o=void 0,n=t.apply(r,i)}}function y(){null!=a&&(clearTimeout(a),a=void 0)}function w(){null!=c&&(clearTimeout(c),c=void 0)}function x(){y(),w(),f=void 0,o=void 0,s=void 0,m=0}function C(...t){if(u?.aborted)return;let r=Date.now();null!=g&&null!=o?o=g(o,t):(f=this,o=t);let h=null==a&&null==c;s=r,y();let w=Date.now();if(s=w,a=setTimeout(()=>{a=void 0,function t(){let r,o,n=Date.now();if(r=n-(s??0),o=n-m,null==s||r>=i||r<0||null!=p&&o>=p){_&&v(),x();return}a=setTimeout(()=>{a=void 0,t()},i-(n-(s??0)))}()},i),null!=p&&!c){0===m&&(m=w);let t=p-(w-m);t>0?c=setTimeout(()=>{c=void 0,_&&null!=o&&v(),m=Date.now()},t):(_&&null!=o&&v(),x())}return b&&h?v():n}return C.cancel=x,C.flush=function(){return y(),w(),v()},C.pending=function(){return null!=a||null!=c},u?.addEventListener("abort",x,{once:!0}),C}w.d=(t,i)=>{for(var r in i)w.o(i,r)&&!w.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},w.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),w.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},Object.defineProperty(w,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(t){}});let IpcCall=class IpcCall{constructor(t,i,r=!1){this.scope=t,this.reset=r,this.method=`${t}/${i}`}is(t){return t.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(t,i,r){super(t,i,r),this.response=new IpcNotification(this.scope,`${i}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let C="patchDetails",$=new IpcCommand(C,"apply"),E=new IpcCommand(C,"archive"),A=new IpcCommand(C,"create");new IpcCommand(C,"openInGraph");let P=new IpcCommand(C,"checked"),T=new IpcCommand(C,"selectRepo"),j=new IpcCommand(C,"selectBase"),M=new IpcCommand(C,"file/actions/execute"),O=new IpcCommand(C,"file/open"),D=new IpcCommand(C,"file/openOnRemote"),B=new IpcCommand(C,"file/compareWorking"),F=new IpcCommand(C,"file/comparePrevious"),N=new IpcCommand(C,"preferences/update"),U=new IpcCommand(C,"switchMode"),q=new IpcCommand(C,"cloud/copyLink"),V=new IpcCommand(C,"local/createPatch"),K=new IpcCommand(C,"create/repository/check"),W=new IpcCommand(C,"update/create/metadata"),G=new IpcCommand(C,"update/draft/metadata"),Q=new IpcCommand(C,"update/draft/permissions"),X=new IpcCommand(C,"update/users"),J=new IpcCommand(C,"update/userSelection"),Y=new IpcRequest(C,"explain"),ee=new IpcRequest(C,"generate"),et=new IpcNotification(C,"didChange",!0),ei=new IpcNotification(C,"create/didChange"),er=new IpcNotification(C,"draft/didChange"),eo=new IpcNotification(C,"preferences/didChange"),es=new IpcNotification(C,"draft/didChangeRepository");new IpcNotification(C,"org/settings/didChange");let en=new IpcRequest("core","webview/ready"),ea=new IpcCommand("core","webview/focus/changed"),el=new IpcCommand("core","command/execute"),ec=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let eh=new IpcCommand("core","telemetry/sendEvent"),ed=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let ep=new IpcCommand("core","webview/focus/didChange"),eu=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(t,i,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=i,this.callback=r,this.subscribe=o??!1}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,i=!1){let r=i||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:i}]of this.subscriptions)t(this.o,i)},void 0!==t&&(this.value=t)}addCallback(t,i,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:i});let{disposer:o}=this.subscriptions.get(t);t(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let e=class e extends Event{constructor(t,i){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=i}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(t,i,r){super(void 0!==i.context?i.initialValue:r),this.onContextRequest=t=>{if(t.context!==this.context)return;let i=t.contextTarget??t.composedPath()[0];i!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,i,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context||(t.contextTarget??t.composedPath()[0])===this.host)return;let i=new Set;for(let[t,{consumerHost:r}]of this.subscriptions)i.has(t)||(i.add(t),r.dispatchEvent(new context_request_event_s(this.context,r,t,!0)));t.stopPropagation()},this.host=t,void 0!==i.context?this.context=i.context:this.context=i,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new e(this.context,this.host))}};function eg({context:t}){return(i,r)=>{let o=new WeakMap;if("object"==typeof r)return{get(){return i.get.call(this)},set(t){return o.get(this).setValue(t),i.set.call(this,t)},init(i){return o.set(this,new context_provider_i(this,{context:t,initialValue:i})),i}};{let s;i.constructor.addInitializer(i=>{o.set(i,new context_provider_i(i,{context:t}))});let n=Object.getOwnPropertyDescriptor(i,r);if(void 0===n){let t=new WeakMap;s={get(){return t.get(this)},set(i){o.get(this).setValue(i),t.set(this,i)},configurable:!0,enumerable:!0}}else{let t=n.set;s={...n,set(i){o.get(this).setValue(i),t?.call(this,i)}}}return void Object.defineProperty(i,r,s)}}}var ef=Object.defineProperty,em=(t,i,r)=>{let o;return(o="symbol"!=typeof i?i+"":i)in t?ef(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,r},eb=(t,i)=>{if(Object(i)!==i)throw TypeError('Cannot use the "in" operator on this value');return t.has(i)},e_=(t,i,r)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,r)},ev=(t,i,r)=>{if(!i.has(t))throw TypeError("Cannot access private method");return r};function ey(t,i){return Object.is(t,i)}let ew=null,ek=!1,ex=1,eC=Symbol("SIGNAL");function e$(t){let i=ew;return ew=t,i}let eE={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function eS(t){if(ek)throw Error("u">typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===ew)return;ew.consumerOnSignalRead(t);let i=ew.nextProducerIndex++;ez(ew),i<ew.producerNode.length&&ew.producerNode[i]!==t&&eI(ew)&&eA(ew.producerNode[i],ew.producerIndexOfThis[i]),ew.producerNode[i]!==t&&(ew.producerNode[i]=t,ew.producerIndexOfThis[i]=eI(ew)?function t(i,r,o){var s;if(eP(i),ez(i),0===i.liveConsumerNode.length){null==(s=i.watched)||s.call(i.wrapper);for(let r=0;r<i.producerNode.length;r++)i.producerIndexOfThis[r]=t(i.producerNode[r],i,r)}return i.liveConsumerIndexOfThis.push(o),i.liveConsumerNode.push(r)-1}(t,ew,i):0),ew.producerLastReadVersion[i]=t.version}function eA(t,i){var r;if(eP(t),ez(t),"u">typeof ngDevMode&&ngDevMode&&i>=t.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${i} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(1===t.liveConsumerNode.length){null==(r=t.unwatched)||r.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)eA(t.producerNode[i],t.producerIndexOfThis[i])}let o=t.liveConsumerNode.length-1;if(t.liveConsumerNode[i]=t.liveConsumerNode[o],t.liveConsumerIndexOfThis[i]=t.liveConsumerIndexOfThis[o],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,i<t.liveConsumerNode.length){let r=t.liveConsumerIndexOfThis[i],o=t.liveConsumerNode[i];ez(o),o.producerIndexOfThis[r]=i}}function eI(t){var i;return t.consumerIsAlwaysLive||((null==(i=null==t?void 0:t.liveConsumerNode)?void 0:i.length)??0)>0}function ez(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function eP(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}function eT(t){if(function t(i){if(i.dirty||i.lastCleanEpoch!==ex){if(!i.producerMustRecompute(i)&&!function(i){ez(i);for(let r=0;r<i.producerNode.length;r++){let o=i.producerNode[r],s=i.producerLastReadVersion[r];if(s!==o.version||(t(o),s!==o.version))return!0}return!1}(i)){i.dirty=!1,i.lastCleanEpoch=ex;return}i.producerRecomputeValue(i),i.dirty=!1,i.lastCleanEpoch=ex}}(t),eS(t),t.value===eM)throw t.error;return t.value}let ej=Symbol("UNSET"),eR=Symbol("COMPUTING"),eM=Symbol("ERRORED"),eO={...eE,value:ej,dirty:!0,error:null,equal:ey,producerMustRecompute:t=>t.value===ej||t.value===eR,producerRecomputeValue(t){let i;if(t.value===eR)throw Error("Detected cycle in computations.");let r=t.value;t.value=eR;let o=(t&&(t.nextProducerIndex=0),e$(t)),s=!1;try{i=t.computation.call(t.wrapper),s=r!==ej&&r!==eM&&t.equal.call(t.wrapper,r,i)}catch(r){i=eM,t.error=r}finally{if(e$(o),t&&void 0!==t.producerNode&&void 0!==t.producerIndexOfThis&&void 0!==t.producerLastReadVersion){if(eI(t))for(let i=t.nextProducerIndex;i<t.producerNode.length;i++)eA(t.producerNode[i],t.producerIndexOfThis[i]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}if(s){t.value=r;return}t.value=i,t.version++}},eL=function(){throw Error()};function eD(){return eS(this),this.value}let eB={...eE,equal:ey,value:void 0},eF=Symbol("node");(t=>{var i,r,o,s;let State=class State{constructor(o,s={}){let n,a;e_(this,r),em(this,i);let c=((n=Object.create(eB)).value=o,(a=()=>(eS(n),n.value))[eC]=n,a)[eC];if(this[eF]=c,c.wrapper=this,s){let i=s.equals;i&&(c.equal=i),c.watched=s[t.subtle.watched],c.unwatched=s[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return eD.call(this[eF])}set(i){var r,o;if(!(0,t.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(ek)throw Error("Writes to signals not permitted during Watcher callback");r=this[eF],(null==ew?void 0:ew.consumerAllowSignalWrites)===!1&&eL(),r.equal.call(r.wrapper,r.value,i)||(r.value=i,o=r,o.version++,ex++,function t(i){if(void 0===i.liveConsumerNode)return;let r=ek;ek=!0;try{for(let r of i.liveConsumerNode)r.dirty||function(i){var r;i.dirty=!0,t(i),null==(r=i.consumerMarkedDirty)||r.call(i.wrapper??i)}(r)}finally{ek=r}}(o))}};i=eF,r=new WeakSet,t.isState=t=>"object"==typeof t&&eb(r,t),t.State=State;let Computed=class Computed{constructor(i,r){let n,a;e_(this,s),em(this,o);let c=((n=Object.create(eO)).computation=i,(a=()=>eT(n))[eC]=n,a)[eC];if(c.consumerAllowSignalWrites=!0,this[eF]=c,c.wrapper=this,r){let i=r.equals;i&&(c.equal=i),c.watched=r[t.subtle.watched],c.unwatched=r[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return eT(this[eF])}};o=eF,s=new WeakSet,t.isComputed=t=>"object"==typeof t&&eb(s,t),t.Computed=Computed,(i=>{var r,o,s,n;i.untrack=function(t){let i,r=null;try{r=e$(null),i=t()}finally{e$(r)}return i},i.introspectSources=function(i){var r;if(!(0,t.isComputed)(i)&&!(0,t.isWatcher)(i))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=i[eF].producerNode)?void 0:r.map(t=>t.wrapper))??[]},i.introspectSinks=function(i){var r;if(!(0,t.isComputed)(i)&&!(0,t.isState)(i))throw TypeError("Called introspectSinks without a Signal argument");return(null==(r=i[eF].liveConsumerNode)?void 0:r.map(t=>t.wrapper))??[]},i.hasSinks=function(i){if(!(0,t.isComputed)(i)&&!(0,t.isState)(i))throw TypeError("Called hasSinks without a Signal argument");let r=i[eF].liveConsumerNode;return!!r&&r.length>0},i.hasSources=function(i){if(!(0,t.isComputed)(i)&&!(0,t.isWatcher)(i))throw TypeError("Called hasSources without a Computed or Watcher argument");let r=i[eF].producerNode;return!!r&&r.length>0};let Watcher=class Watcher{constructor(t){e_(this,o),e_(this,s),em(this,r);let i=Object.create(eE);i.wrapper=this,i.consumerMarkedDirty=t,i.consumerIsAlwaysLive=!0,i.consumerAllowSignalWrites=!1,i.producerNode=[],this[eF]=i}watch(...i){if(!(0,t.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");ev(this,s,n).call(this,i);let r=this[eF];r.dirty=!1;let o=e$(r);for(let t of i)eS(t[eF]);e$(o)}unwatch(...i){if(!(0,t.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");ev(this,s,n).call(this,i);let r=this[eF];ez(r);for(let t=r.producerNode.length-1;t>=0;t--)if(i.includes(r.producerNode[t].wrapper)){eA(r.producerNode[t],r.producerIndexOfThis[t]);let i=r.producerNode.length-1;if(r.producerNode[t]=r.producerNode[i],r.producerIndexOfThis[t]=r.producerIndexOfThis[i],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,t<r.producerNode.length){let i=r.producerIndexOfThis[t],o=r.producerNode[t];eP(o),o.liveConsumerIndexOfThis[i]=t}}}getPending(){if(!(0,t.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[eF].producerNode.filter(t=>t.dirty).map(t=>t.wrapper)}};r=eF,o=new WeakSet,s=new WeakSet,n=function(i){for(let r of i)if(!(0,t.isComputed)(r)&&!(0,t.isState)(r))throw TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=t=>eb(o,t),i.Watcher=Watcher,i.currentComputed=function(){var t;return null==(t=ew)?void 0:t.wrapper},i.watched=Symbol("watched"),i.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(f||(f={}));let eN=!1,eU=new f.subtle.Watcher(()=>{eN||(eN=!0,queueMicrotask(()=>{for(let t of(eN=!1,eU.getPending()))t.get();eU.watch()}))}),eq=Symbol("SignalWatcherBrand"),eV=(new FinalizationRegistry(t=>{t.unwatch(...f.subtle.introspectSources(t))}),new WeakMap,t=>(...i)=>({_$litDirective$:t,values:i}));let directive_i=class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};let eH=globalThis,eK=t=>t,eW=eH.trustedTypes,eG=eW?eW.createPolicy("lit-html",{createHTML:t=>t}):void 0,eZ="$lit$",eQ=`lit$${Math.random().toFixed(9).slice(2)}$`,eX="?"+eQ,eJ=`<${eX}>`,eY=document,e0=()=>eY.createComment(""),e1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,e2=Array.isArray,e5=t=>e2(t)||"function"==typeof t?.[Symbol.iterator],e3=`[ 	
\x0c\r]`,e4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,e7=/-->/g,e6=/>/g,e8=RegExp(`>|${e3}(?:([^\\s"'>=/]+)(${e3}*=${e3}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),e9=/'/g,te=/"/g,tt=/^(?:script|style|textarea|title)$/i,ti=t=>(i,...r)=>({_$litType$:t,strings:i,values:r}),tr=ti(1),to=ti(2),ts=(ti(3),Symbol.for("lit-noChange")),tn=Symbol.for("lit-nothing"),ta=new WeakMap,tl=eY.createTreeWalker(eY,129);function tc(t,i){if(!e2(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==eG?eG.createHTML(i):i}let th=(t,i)=>{let r=t.length-1,o=[],s,n=2===i?"<svg>":3===i?"<math>":"",a=e4;for(let i=0;i<r;i++){let r=t[i],c,h,p=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(h=a.exec(r)));)u=a.lastIndex,a===e4?"!--"===h[1]?a=e7:void 0!==h[1]?a=e6:void 0!==h[2]?(tt.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=e8):void 0!==h[3]&&(a=e8):a===e8?">"===h[0]?(a=s??e4,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?e8:'"'===h[3]?te:e9):a===te||a===e9?a=e8:a===e7||a===e6?a=e4:(a=e8,s=void 0);let g=a===e8&&t[i+1].startsWith("/>")?" ":"";n+=a===e4?r+eJ:p>=0?(o.push(c),r.slice(0,p)+eZ+r.slice(p)+eQ+g):r+eQ+(-2===p?i:g)}return[tc(t,n+(t[r]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};let S=class S{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0,a=t.length-1,c=this.parts,[h,p]=th(t,i);if(this.el=S.createElement(h,r),tl.currentNode=this.el.content,2===i||3===i){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=tl.nextNode())&&c.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let t of o.getAttributeNames())if(t.endsWith(eZ)){let i=p[n++],r=o.getAttribute(t).split(eQ),a=/([.?@])?(.*)/.exec(i);c.push({type:1,index:s,name:a[2],strings:r,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),o.removeAttribute(t)}else t.startsWith(eQ)&&(c.push({type:6,index:s}),o.removeAttribute(t));if(tt.test(o.tagName)){let t=o.textContent.split(eQ),i=t.length-1;if(i>0){o.textContent=eW?eW.emptyScript:"";for(let r=0;r<i;r++)o.append(t[r],e0()),tl.nextNode(),c.push({type:2,index:++s});o.append(t[i],e0())}}}else if(8===o.nodeType)if(o.data===eX)c.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(eQ,t+1));)c.push({type:7,index:s}),t+=eQ.length-1}s++}}static createElement(t,i){let r=eY.createElement("template");return r.innerHTML=t,r}};function td(t,i,r=t,o){if(i===ts)return i;let s=void 0!==o?r._$Co?.[o]:r._$Cl,n=e1(i)?void 0:i._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t))._$AT(t,r,o),void 0!==o?(r._$Co??=[])[o]=s:r._$Cl=s),void 0!==s&&(i=td(t,s._$AS(t,i.values),s,o)),i}let R=class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:i},parts:r}=this._$AD,o=(t?.creationScope??eY).importNode(i,!0);tl.currentNode=o;let s=tl.nextNode(),n=0,a=0,c=r[0];for(;void 0!==c;){if(n===c.index){let i;2===c.type?i=new k(s,s.nextSibling,this,t):1===c.type?i=new c.ctor(s,c.name,c.strings,this,t):6===c.type&&(i=new Z(s,this,t)),this._$AV.push(i),c=r[++a]}n!==c?.index&&(s=tl.nextNode(),n++)}return tl.currentNode=eY,o}p(t){let i=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,r,o){this.type=2,this._$AH=tn,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){e1(t=td(this,t,i))?t===tn||null==t||""===t?(this._$AH!==tn&&this._$AR(),this._$AH=tn):t!==this._$AH&&t!==ts&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):e5(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==tn&&e1(this._$AH)?this._$AA.nextSibling.data=t:this.T(eY.createTextNode(t)),this._$AH=t}$(t){let{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=S.createElement(tc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(i);else{let t=new R(o,this),r=t.u(this.options);t.p(i),this.T(r),this._$AH=t}}_$AC(t){let i=ta.get(t.strings);return void 0===i&&ta.set(t.strings,i=new S(t)),i}k(t){e2(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,r,o=0;for(let s of t)o===i.length?i.push(r=new k(this.O(e0()),this.O(e0()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){let i=eK(t).nextSibling;eK(t).remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,o,s){this.type=1,this._$AH=tn,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=tn}_$AI(t,i=this,r,o){let s=this.strings,n=!1;if(void 0===s)(n=!e1(t=td(this,t,i,0))||t!==this._$AH&&t!==ts)&&(this._$AH=t);else{let o,a,c=t;for(t=s[0],o=0;o<s.length-1;o++)(a=td(this,c[r+o],i,o))===ts&&(a=this._$AH[o]),n||=!e1(a)||a!==this._$AH[o],a===tn?t=tn:t!==tn&&(t+=(a??"")+s[o+1]),this._$AH[o]=a}n&&!o&&this.j(t)}j(t){t===tn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===tn?void 0:t}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==tn)}};let z=class z extends H{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){if((t=td(this,t,i,0)??tn)===ts)return;let r=this._$AH,o=t===tn&&r!==tn||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==tn&&(r===tn||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};let Z=class Z{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){td(this,t)}};let tp=eH.litHtmlPolyfillSupport;tp?.(S,k),(eH.litHtmlVersions??=[]).push("3.3.3");let{I:tu}={M:eZ,P:eQ,A:eX,C:1,L:th,R,D:e5,V:td,I:k,H,N:L,U:z,B:I,F:Z},tg=t=>t,tf=(t,i,r)=>{let o=t._$AA.parentNode,s=void 0===i?t._$AB:i._$AA;if(void 0===r)r=new tu(o.insertBefore(document.createComment(""),s),o.insertBefore(document.createComment(""),s),t,t.options);else{let i=r._$AB.nextSibling,n=r._$AM,a=n!==t;if(a){let i;r._$AQ?.(t),r._$AM=t,void 0!==r._$AP&&(i=t._$AU)!==n._$AU&&r._$AP(i)}if(i!==s||a){let t=r._$AA;for(;t!==i;){let i=tg(t).nextSibling;tg(o).insertBefore(t,s),t=i}}}return r},tm=(t,i,r=t)=>(t._$AI(i,r),t),tb={},t_=t=>{t._$AR(),t._$AA.remove()},tv=(t,i)=>{let r=t._$AN;if(void 0===r)return!1;for(let t of r)t._$AO?.(i,!1),tv(t,i);return!0},ty=t=>{let i,r;do{if(void 0===(i=t._$AM))break;(r=i._$AN).delete(t),t=i}while(0===r?.size)},tw=t=>{for(let i;i=t._$AM;t=i){let r=i._$AN;if(void 0===r)i._$AN=r=new Set;else if(r.has(t))break;r.add(t),tC(i)}};function tk(t){void 0!==this._$AN?(ty(this),this._$AM=t,tw(this)):this._$AM=t}function tx(t,i=!1,r=0){let o=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(i)if(Array.isArray(o))for(let t=r;t<o.length;t++)tv(o[t],!1),ty(o[t]);else null!=o&&(tv(o,!1),ty(o));else tv(this,t)}let tC=t=>{2==t.type&&(t._$AP??=tx,t._$AQ??=tk)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),tw(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(tv(this,t),ty(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{let i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};let t$=!1,tE=new f.subtle.Watcher(async()=>{t$||(t$=!0,queueMicrotask(()=>{for(let t of(t$=!1,tE.getPending()))t.get();tE.watch()}))});let watch_r=class watch_r extends async_directive_f{_$S_(){var t,i;void 0===this._$Sm&&(this._$Sj=new f.Computed(()=>{var t;let i=null==(t=this._$SW)?void 0:t.get();return this.setValue(i),i}),this._$Sm=null!=(i=null==(t=this._$Sk)?void 0:t.h)?i:tE,this._$Sm.watch(this._$Sj),f.subtle.untrack(()=>{var t;return null==(t=this._$Sj)?void 0:t.get()}))}_$Sp(){void 0!==this._$Sm&&(this._$Sm.unwatch(this._$SW),this._$Sm=void 0)}render(t){return f.subtle.untrack(()=>t.get())}update(t,[i]){var r;return null!=this._$Sk||(this._$Sk=null==(r=t.options)?void 0:r.host),i!==this._$SW&&void 0!==this._$SW&&this._$Sp(),this._$SW=i,this._$S_(),f.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$S_()}};let tS=eV(watch_r),tA=t=>(i,...r)=>t(i,...r.map(t=>t instanceof f.State||t instanceof f.Computed?tS(t):t));tA(tr),tA(to),f.State,f.Computed;let tI=globalThis,tz=tI.ShadowRoot&&(void 0===tI.ShadyCSS||tI.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tP=Symbol(),tT=new WeakMap;let css_tag_n=class css_tag_n{constructor(t,i,r){if(this._$cssResult$=!0,r!==tP)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o,i=this.t;if(tz&&void 0===t){let r=void 0!==i&&1===i.length;r&&(t=tT.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&tT.set(i,t))}return t}toString(){return this.cssText}};let tj=t=>new css_tag_n("string"==typeof t?t:t+"",void 0,tP),tR=(t,...i)=>new css_tag_n(1===t.length?t[0]:i.reduce((i,r,o)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]),t,tP),tM=tz?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(let r of t.cssRules)i+=r.cssText;return tj(i)})(t):t,{is:tO,defineProperty:tL,getOwnPropertyDescriptor:tD,getOwnPropertyNames:tB,getOwnPropertySymbols:tF,getPrototypeOf:tN}=Object,tU=globalThis,tq=tU.trustedTypes,tV=tq?tq.emptyScript:"",tH=tU.reactiveElementPolyfillSupport,tK={toAttribute(t,i){switch(i){case Boolean:t=t?tV:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let r=t;switch(i){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},tW=(t,i)=>!tO(t,i),tG={attribute:!0,type:String,converter:tK,reflect:!1,useDefault:!1,hasChanged:tW};Symbol.metadata??=Symbol("metadata"),tU.litPropertyMetadata??=new WeakMap;let reactive_element_y=class reactive_element_y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=tG){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(t,r,i);void 0!==o&&tL(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){let{get:o,set:s}=tD(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get:o,set(i){let n=o?.call(this);s?.call(this,i),this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tG}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=tN(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let i of[...tB(t),...tF(t)])this.createProperty(i,t[i])}let t=this[Symbol.metadata];if(null!==t){let i=litPropertyMetadata.get(t);if(void 0!==i)for(let[t,r]of i)this.elementProperties.set(t,r)}for(let[t,i]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(t,i);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let i=[];if(Array.isArray(t))for(let r of new Set(t.flat(1/0).reverse()))i.unshift(tM(r));else void 0!==t&&i.push(tM(t));return i}static _$Eu(t,i){let r=i.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let i of this.constructor.elementProperties.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(tz)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let r of i){let i=document.createElement("style"),o=tI.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){let r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){let s=(void 0!==r.converter?.toAttribute?r.converter:tK).toAttribute(i,r.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,i){let r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){let t=r.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:tK;this._$Em=o;let n=s.fromAttribute(i,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,i,r,o=!1,s){if(void 0!==t){let n=this.constructor;if(!1===o&&(s=this[t]),!(((r??=n.getPropertyOptions(t)).hasChanged??tW)(s,i)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,i,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:o,wrapped:s},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??i??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[i,r]of t){let{wrapped:t}=r,o=this[i];!0!==t||this._$AL.has(i)||void 0===o||this.C(i,void 0,r,o)}}let t=!1,i=this._$AL;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(i)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};reactive_element_y.elementStyles=[],reactive_element_y.shadowRootOptions={mode:"open"},reactive_element_y.elementProperties=new Map,reactive_element_y.finalized=new Map,tH?.({ReactiveElement:reactive_element_y}),(tU.reactiveElementVersions??=[]).push("2.1.2");let tZ=globalThis;let lit_element_i=class lit_element_i extends reactive_element_y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,r)=>{let o=r?.renderBefore??i,s=o._$litPart$;if(void 0===s){let t=r?.renderBefore??null;o._$litPart$=s=new k(i.insertBefore(e0(),t),t,void 0,r??{})}return s._$AI(t),s})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ts}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,tZ.litElementHydrateSupport?.({LitElement:lit_element_i});let tQ=tZ.litElementPolyfillSupport;tQ?.({LitElement:lit_element_i}),(tZ.litElementVersions??=[]).push("4.2.2");let tX=t=>(i,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,i)}):customElements.define(t,i)},tJ={attribute:!0,type:String,converter:tK,reflect:!1,hasChanged:tW};function tY(t){return(i,r)=>{let o;return"object"==typeof r?((t=tJ,i,r)=>{let{kind:o,metadata:s}=r,n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(r.name,t),"accessor"===o){let{name:o}=r;return{set(r){let s=i.get.call(this);i.set.call(this,r),this.requestUpdate(o,s,t,!0,r)},init(i){return void 0!==i&&this.C(o,void 0,t,i),i}}}if("setter"===o){let{name:o}=r;return function(r){let s=this[o];i.call(this,r),this.requestUpdate(o,s,t,!0,r)}}throw Error("Unsupported decorator location: "+o)})(t,i,r):(o=i.hasOwnProperty(r),i.constructor.createProperty(r,t),o?Object.getOwnPropertyDescriptor(i,r):void 0)}}function t0(t){return tY({...t,state:!0,attribute:!1})}let t1=(t,i,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof i&&Object.defineProperty(t,i,r),r);function t2(t,i){return(r,o,s)=>{let n=i=>i.renderRoot?.querySelector(t)??null;if(i){let t,{get:i,set:a}="object"==typeof o?r:s??(t=Symbol(),{get(){return this[t]},set(i){this[t]=i}});return t1(r,o,{get(){let t=i.call(this);return void 0===t&&(null!==(t=n(this))||this.hasUpdated)&&a.call(this,t),t}})}return t1(r,o,{get(){return n(this)}})}}let{fromCharCode:t5}=String;new TextEncoder;let t3=new TextDecoder;function t4(t,i,r,o){return`command:${t}?${encodeURIComponent(JSON.stringify({webview:i,webviewInstance:r,...o}))}`}let t7=new WeakMap;function t6(t,i){return function(r,o,s){let n=t7.get(r.constructor);null==n&&t7.set(r.constructor,n=[]),n.push({method:s.value,keys:Array.isArray(t)?t:[t],afterFirstUpdate:i?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(t,i,r){let o=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:i});return this.dispatchEvent(o),o}update(t){let i=t7.get(this.constructor);if(null!=i)for(let{keys:r,method:o,afterFirstUpdate:s}of i){if(s&&!this.hasUpdated)continue;let i=r.filter(i=>t.has(i));i.length&&o.call(this,i)}super.update(t)}};let t8=new Map;function t9(i,r){i??="decimal";let o=`${r??""}:${i}`,s=t8.get(o);if(null==s){let n={localeMatcher:"best fit",style:i};s=new Intl.NumberFormat(null==r?t:"system"===r?void 0:[r],n),t8.set(o,s)}return s.format}function ie(t,r,o){let s;if(null==o)return i??=t9(),`${i(r)} ${t}${1===r?"":"s"}`;let n=1===r?t:o.plural??`${t}s`;return o.only?n:(0===r?s=o.zero??r:!1===o.format?s=r:null!=o.format?s=o.format(r):(i??=t9(),s=i(r)),`${s}${o.infix??" "}${n}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let it=/T/,ii=/.*\s*?at\s(.+?)\s/,ir=/^_+/,io=["accessToken","password","token"];let Logger=class Logger{#e;#t;configure(t,i=!1){this.#t={...t,sanitizeKeys:new Set([...io,...t.sanitizeKeys??[]])},this.#i=i,this.#e=t.createChannel(t.name),this.#r=this.#e.logLevel,this.#e.onDidChangeLogLevel?.(t=>{this.#r=t})}enabled(t){return!!this.isDebugging||0!==this.#r&&(null==t||this.#r<=function(t){switch(t){case"off":default:return 0;case"trace":return 1;case"debug":return 2;case"info":return 3;case"warn":return 4;case"error":return 5}}(t))}#i=!1;get isDebugging(){return this.#i}#r=0;get logLevel(){var t=this.#r;switch(t){case 0:default:return"off";case 1:return"trace";case 2:return"debug";case 3:return"info";case 4:return"warn";case 5:return"error"}}get timestamp(){return`[${new Date().toISOString().replace(it," ").slice(0,-1)}]`}trace(t,...i){let r;(0!==this.#r&&!(this.#r>1)||this.isDebugging)&&("string"==typeof t?r=t:(r=i.shift(),null!=t&&(r=`${t.prefix} ${r??""}`)),this.isDebugging,this.#e?.trace(`  ${r??""}${this.#o(!0,i)}`))}debug(t,...i){let r;(0!==this.#r&&!(this.#r>2)||this.isDebugging)&&("string"==typeof t?r=t:(r=i.shift(),null!=t&&(r=`${t.prefix} ${r??""}`)),this.isDebugging,this.#e?.debug(`  ${r??""}${this.#o(!1,i)}`))}info(t,...i){let r;(0!==this.#r&&!(this.#r>3)||this.isDebugging)&&("string"==typeof t?r=t:(r=i.shift(),null!=t&&(r=`${t.prefix} ${r??""}`)),this.isDebugging,this.#e?.info(`   ${r??""}${this.#o(!1,i)}`))}warn(t,...i){let r;(0!==this.#r&&!(this.#r>4)||this.isDebugging)&&("string"==typeof t?r=t:(r=i.shift(),null!=t&&(r=`${t.prefix} ${r??""}`)),this.isDebugging,this.#e?.warn(`${r??""}${this.#o(!1,i)}`))}error(t,i,...r){let o;if((0===this.#r||this.#r>5)&&!this.isDebugging)return;if(null==(o=null==i||"string"==typeof i?i:`${i.prefix} ${r.shift()??""}`)){let i=t instanceof Error?t.stack:void 0;if(i){let t=ii.exec(i);null!=t&&(o=t[1])}}this.isDebugging;let s=`  ${o??""}${this.#o(!1,r)}`;null!=t?this.#e?.error(String(t),s):this.#e?.error(s)}showOutputChannel(t){this.#e?.show?.(t)}toLoggable(t,i){if(null!=i){let r=this.sanitize(i,t);if(null!=r)return r}if("function"==typeof t)return"<function>";if(null==t||"object"!=typeof t||t instanceof Error)return String(t);if(Array.isArray(t)){let i=t.length>10?t.slice(0,10):t,r=t.length>10?`, \u2026+${t.length-10}`:"";return`[${i.map(t=>this.toLoggable(t)).join(", ")}${r}]`}let r=this.#t?.toLoggable,o=r?.(t);if(null!=o)return o;let s=this.#t?.sanitizeKeys;try{return JSON.stringify(t,(t,i)=>{if(95!==t.charCodeAt(0))return s?.has(t)?this.sanitize(t,i):""===t||"object"!=typeof i||null==i||Array.isArray(i)?i:i instanceof Error?String(i):r?.(i)??i})}catch{return"<error>"}}sanitize(t,i){if(null==i)return;let r=t.replace(ir,"")||t;if(this.#t?.sanitizeKeys?.has(r))return null!=this.#t.hash?`<${r}:${this.#t.hash("string"==typeof i?i:JSON.stringify(i))}>`:`<${r}>`}#o(t,i){if(0===i.length||t&&(0===this.#r||this.#r>2)&&!this.isDebugging)return"";let r=i.map(t=>this.toLoggable(t)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};let is=new Logger,ia=new WeakMap,il={enabled:t=>is.enabled(t),log:(t,i,r,...o)=>{switch(t){case"error":is.error(void 0,i,r,...o);break;case"warn":i?.warn(r,...o);break;case"info":i?.info(r,...o);break;case"debug":default:i?.debug(r,...o);break;case"trace":i?.trace(r,...o)}}},ic=new Map;function ih(t,i){let o=r;r=t.scopeId,ic.set(t.scopeId,t);try{return i()}finally{r=o,ic.delete(t.scopeId)}}function id(){return null!=r?ic.get(r):void 0}let ip=0x40000000-1;function iu(){let t=0;return{get current(){return t},next:function(){return t===ip&&(t=0),++t},reset:function(){t=0}}}function ig(t){let i=.001*performance.now(),r=Math.floor(i),o=Math.floor(i%1*1e9);return void 0!==t&&(r-=t[0],(o-=t[1])<0&&(r--,o+=1e9)),[r,o]}function im(t){let[i,r]=ig(t);return 1e3*i+Math.floor(r/1e6)}let ib=iu();function i_(t,i,r){var o;let s,n,a={scopeId:t,prevScopeId:i,prefix:r,enabled:t=>is.enabled(t),addExitInfo:function(...t){(s??=[]).push(...t)},setFailed:function(t){n=t},getExitInfo:function(){return{details:s?.length?` \u2022 ${s.join(", ")}`:void 0,failed:n}}};return iv(a,"trace",is.trace),iv(a,"debug",is.debug),iv(a,"info",is.info),iv(a,"warn",is.warn),Object.defineProperty(o=a,"error",{configurable:!0,enumerable:!0,get:function(){let t=(t,i,...r)=>is.error(t,o,i,...r);return Object.defineProperty(o,"error",{value:t,writable:!1,enumerable:!0}),t}}),a}function iv(t,i,r){Object.defineProperty(t,i,{configurable:!0,enumerable:!0,get:function(){let o=r.bind(is,t);return Object.defineProperty(t,i,{value:o,writable:!1,enumerable:!0}),o}})}function iy(t,i,r){if(null!=r){let o=null==i?t.toString(16):`${i.toString(16)} \u2192 ${t.toString(16)}`;return null==o?`[${r.padEnd(13)}]`:`[${r}${o.padStart(13-r.length)}]`}return null==i?`[${t.toString(16).padStart(13)}]`:`[${i.toString(16).padStart(5)} \u2192 ${t.toString(16).padStart(5)}]`}function iw(){let t=id();if(null==t)return;let i=Object.create(t);return i[Symbol.dispose]=()=>{},i}function ik(t,i,r){if(null!=i&&"boolean"!=typeof i)return i_(i.scopeId,i.prevScopeId,`${i.prefix}${t}`);let o=i?id()?.scopeId:void 0,s=ib.next();return i_(s,o,`${iy(s,o,r)} ${t}`)}function ix(t,i,r,...o){switch(i){case"trace":is.trace(t,r,...o);break;case"info":is.info(t,r,...o);break;default:is.debug(t,r,...o)}}let LoggerContext=class LoggerContext{constructor(t){this.scope=ik(t,void 0),is.configure({name:t,createChannel:function(t){let i=is.isDebugging?function(t){}:function(t){};return{name:t,logLevel:0,trace:i,debug:i,info:i,warn:i,error:i}}},!1)}trace(t,...i){"string"==typeof t?is.trace(this.scope,t,...i):is.trace(t,i.shift(),...i)}debug(t,...i){"string"==typeof t?is.debug(this.scope,t,...i):is.debug(t,i.shift(),...i)}info(t,...i){"string"==typeof t?is.info(this.scope,t,...i):is.info(t,i.shift(),...i)}};let iC=new IpcNotification("home","subscription/didChange"),i$="graph";new IpcCommand(i$,"chooseRepository"),new IpcCommand(i$,"dblclick"),new IpcCommand(i$,"avatars/get"),new IpcCommand(i$,"refs/metadata/get"),new IpcCommand(i$,"rows/get"),new IpcCommand(i$,"pullRequest/openDetails"),new IpcCommand(i$,"row/action"),new IpcCommand(i$,"treemap/file/action"),new IpcCommand(i$,"search/openInView"),new IpcCommand(i$,"search/cancel"),new IpcCommand(i$,"columns/update"),new IpcCommand(i$,"refs/update/visibility"),new IpcCommand(i$,"refs/update/pinned"),new IpcCommand(i$,"filters/update/excludeTypes"),new IpcCommand(i$,"configuration/update"),new IpcCommand(i$,"displayMode/update"),new IpcCommand(i$,"search/update/mode"),new IpcCommand(i$,"filters/update/includedRefs"),new IpcCommand(i$,"filters/reset"),new IpcCommand(i$,"selection/update"),new IpcCommand(i$,"wipDraft/update"),new IpcRequest(i$,"jumpToHead"),new IpcRequest(i$,"chooseRef"),new IpcRequest(i$,"chooseComparison"),new IpcRequest(i$,"chooseAuthor"),new IpcRequest(i$,"chooseFile"),new IpcRequest(i$,"scope/resolve"),new IpcRequest(i$,"rows/ensure"),new IpcRequest(i$,"search/history/get"),new IpcRequest(i$,"search/history/store"),new IpcRequest(i$,"search/history/delete"),new IpcRequest(i$,"counts"),new IpcRequest(i$,"overview/get"),new IpcRequest(i$,"overview/wip/get"),new IpcRequest(i$,"overview/wip/detailed/get"),new IpcRequest(i$,"overview/enrichment/get"),new IpcRequest(i$,"agentSessions/get"),new IpcRequest(i$,"wip/stats/get"),new IpcCommand(i$,"wip/watches/sync"),new IpcNotification(i$,"wip/refetch/request"),new IpcRequest(i$,"row/hover/get"),new IpcRequest(i$,"search"),new IpcNotification(i$,"overview/didChange"),new IpcNotification(i$,"agentSessions/didChange"),new IpcNotification(i$,"repositories/integration/didChange"),new IpcNotification(i$,"wipDrafts/didChange"),new IpcNotification(i$,"didChange",!0),new IpcNotification(i$,"configuration/didChange");let iE=new IpcNotification(i$,"subscription/didChange");new IpcNotification(i$,"org/settings/didChange"),new IpcNotification(i$,"avatars/didChange"),new IpcNotification(i$,"mcp/didChange"),new IpcNotification(i$,"hooks/didChange"),new IpcNotification(i$,"agents/canInstallClaudeHook/didChange"),new IpcCommand(i$,"graphWalkthrough/banner/close"),new IpcNotification(i$,"graphWalkthrough/banner/didChange"),new IpcNotification(i$,"graphWalkthrough/complete/didChange"),new IpcNotification(i$,"graphWalkthrough/started/didChange"),new IpcNotification(i$,"visualizationsButtonCallout/didChange"),new IpcCommand(i$,"visualizationsButtonCallout/dismiss"),new IpcNotification(i$,"sidebar/activePanel/didRequest"),new IpcNotification(i$,"action/didRequest"),new IpcCommand(i$,"track/overview/shown"),new IpcCommand(i$,"track/scope/changed"),new IpcCommand(i$,"track/details/reviewMode"),new IpcCommand(i$,"track/details/composeMode"),new IpcCommand(i$,"track/details/resolveMode"),new IpcCommand(i$,"track/details/compareMode"),new IpcCommand(i$,"track/details/wipShown"),new IpcNotification(i$,"branchState/didChange"),new IpcNotification(i$,"refs/didChangeMetadata"),new IpcNotification(i$,"columns/didChange"),new IpcNotification(i$,"scrollMarkers/didChange"),new IpcNotification(i$,"refs/didChangeVisibility"),new IpcNotification(i$,"refs/didChangePinned"),new IpcNotification(i$,"rows/didChange"),new IpcNotification(i$,"rows/stats/didChange"),new IpcNotification(i$,"selection/didChange"),new IpcNotification(i$,"compareMode/didRequestOpen"),new IpcNotification(i$,"timeline/didRequestOpenScope"),new IpcNotification(i$,"search/didRequest"),new IpcNotification(i$,"workingTree/didChange"),new IpcNotification(i$,"didSearch"),new IpcNotification(i$,"didFetch"),new IpcNotification(i$,"scope/anchors/didInvalidate"),new IpcNotification(i$,"treemap/didInvalidate"),new IpcNotification(i$,"featurePreview/didStart");let iS=new IpcNotification("timeline","didChange");let PromosContext=class PromosContext{constructor(t){this.disposables=[],this._promos=new Map,this.ipc=t,this.disposables.push(this.ipc.onReceiveMessage(t=>{(iC.is(t)||iE.is(t)||iS.is(t))&&this._promos.clear()}))}async getApplicablePromo(t,i){let r=`${t}|${i}`,o=this._promos.get(r);return null==o&&(o=this.ipc.sendRequest(ec,{plan:t,location:i}).then(t=>t.promo,()=>void 0),this._promos.set(r,o)),await o}dispose(){this.disposables.forEach(t=>t.dispose())}};let TelemetryContext=class TelemetryContext{constructor(t){this.disposables=[],this.ipc=t}sendEvent(t){this.ipc.sendCommand(eh,t)}dispose(){this.disposables.forEach(t=>t.dispose())}};function iA(t){return(t=t.toString().toLowerCase()).includes("ms")?parseFloat(t):t.includes("s")?1e3*parseFloat(t):parseFloat(t)}function iI(t,i){return new Promise(r=>{t.addEventListener(i,function o(s){s.target===t&&(t.removeEventListener(i,o),r())})})}(m||(m={})).on=function(t,i,r,o){let s=!1;if("string"==typeof t){let n=function(i){let o=i?.target?.closest(t);null!=o&&r(i,o)};return document.addEventListener(i,n,o??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(i,n,o??!0))}}}let n=function(t){r(t,this)};return t.addEventListener(i,n,o??!1),{dispose:()=>{s||(s=!0,t.removeEventListener(i,n,o??!1))}}};var iz=Uint8Array,iP=Uint16Array,iT=Int32Array,ij=new iz([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),iR=new iz([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),iM=new iz([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),iO=function(t,i){for(var r=new iP(31),o=0;o<31;++o)r[o]=i+=1<<t[o-1];for(var s=new iT(r[30]),o=1;o<30;++o)for(var n=r[o];n<r[o+1];++n)s[n]=n-r[o]<<5|o;return{b:r,r:s}},iL=iO(ij,2),iD=iL.b,iB=iL.r;iD[28]=258,iB[258]=28;var iF=iO(iR,0),iN=iF.b;iF.r;for(var iU=new iP(32768),iq=0;iq<32768;++iq){var iV=(43690&iq)>>1|(21845&iq)<<1;iV=(61680&(iV=(52428&iV)>>2|(13107&iV)<<2))>>4|(3855&iV)<<4,iU[iq]=((65280&iV)>>8|(255&iV)<<8)>>1}for(var iH=function(t,i,r){for(var o,s=t.length,n=0,a=new iP(i);n<s;++n)t[n]&&++a[t[n]-1];var c=new iP(i);for(n=1;n<i;++n)c[n]=c[n-1]+a[n-1]<<1;if(r){o=new iP(1<<i);var h=15-i;for(n=0;n<s;++n)if(t[n])for(var p=n<<4|t[n],u=i-t[n],g=c[t[n]-1]++<<u,f=g|(1<<u)-1;g<=f;++g)o[iU[g]>>h]=p}else for(o=new iP(s),n=0;n<s;++n)t[n]&&(o[n]=iU[c[t[n]-1]++]>>15-t[n]);return o},iK=new iz(288),iq=0;iq<144;++iq)iK[iq]=8;for(var iq=144;iq<256;++iq)iK[iq]=9;for(var iq=256;iq<280;++iq)iK[iq]=7;for(var iq=280;iq<288;++iq)iK[iq]=8;for(var iW=new iz(32),iq=0;iq<32;++iq)iW[iq]=5;var iG=iH(iK,9,1),iZ=iH(iW,5,1),iQ=function(t){for(var i=t[0],r=1;r<t.length;++r)t[r]>i&&(i=t[r]);return i},iX=function(t,i,r){var o=i/8|0;return(t[o]|t[o+1]<<8)>>(7&i)&r},iJ=function(t,i){var r=i/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(7&i)},iY=function(t,i,r){return(null==i||i<0)&&(i=0),(null==r||r>t.length)&&(r=t.length),new iz(t.subarray(i,r))},i0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],i1=function(t,i,r){var o=Error(i||i0[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,i1),!r)throw o;return o},i2=function(t,i,r,o){var s=t.length,n=o?o.length:0;if(!s||i.f&&!i.l)return r||new iz(0);var a=!r,c=a||2!=i.i,h=i.i;a&&(r=new iz(3*s));var p=function(t){var i=r.length;if(t>i){var o=new iz(Math.max(2*i,t));o.set(r),r=o}},u=i.f||0,g=i.p||0,f=i.b||0,m=i.l,b=i.d,_=i.m,v=i.n,y=8*s;do{if(!m){u=iX(t,g,1);var w=iX(t,g+1,3);if(g+=3,w)if(1==w)m=iG,b=iZ,_=9,v=5;else if(2==w){var x=iX(t,g,31)+257,C=iX(t,g+10,15)+4,$=x+iX(t,g+5,31)+1;g+=14;for(var E=new iz($),A=new iz(19),P=0;P<C;++P)A[iM[P]]=iX(t,g+3*P,7);g+=3*C;for(var T=iQ(A),j=(1<<T)-1,M=iH(A,T,1),P=0;P<$;){var O=M[iX(t,g,j)];g+=15&O;var D=O>>4;if(D<16)E[P++]=D;else{var B=0,F=0;for(16==D?(F=3+iX(t,g,3),g+=2,B=E[P-1]):17==D?(F=3+iX(t,g,7),g+=3):18==D&&(F=11+iX(t,g,127),g+=7);F--;)E[P++]=B}}var N=E.subarray(0,x),U=E.subarray(x);_=iQ(N),v=iQ(U),m=iH(N,_,1),b=iH(U,v,1)}else i1(1);else{var D=((g+7)/8|0)+4,q=t[D-4]|t[D-3]<<8,V=D+q;if(V>s){h&&i1(0);break}c&&p(f+q),r.set(t.subarray(D,V),f),i.b=f+=q,i.p=g=8*V,i.f=u;continue}if(g>y){h&&i1(0);break}}c&&p(f+131072);for(var K=(1<<_)-1,W=(1<<v)-1,G=g;;G=g){var B=m[iJ(t,g)&K],Q=B>>4;if((g+=15&B)>y){h&&i1(0);break}if(B||i1(2),Q<256)r[f++]=Q;else if(256==Q){G=g,m=null;break}else{var X=Q-254;if(Q>264){var P=Q-257,J=ij[P];X=iX(t,g,(1<<J)-1)+iD[P],g+=J}var Y=b[iJ(t,g)&W],ee=Y>>4;Y||i1(3),g+=15&Y;var U=iN[ee];if(ee>3){var J=iR[ee];U+=iJ(t,g)&(1<<J)-1,g+=J}if(g>y){h&&i1(0);break}c&&p(f+131072);var et=f+X;if(f<U){var ei=n-U,er=Math.min(U,et);for(ei+f<0&&i1(3);f<er;++f)r[f]=o[ei+f]}for(;f<et;++f)r[f]=r[f-U]}}i.l=m,i.p=G,i.b=f,i.f=u,m&&(u=1,i.m=_,i.d=b,i.n=v)}while(!u)return f!=r.length&&a?iY(r,0,f):r.subarray(0,f)},i5=new iz(0),i3="u">typeof TextDecoder&&new TextDecoder;try{i3.decode(i5,{stream:!0})}catch{}var i4=function(t){for(var i="",r=0;;){var o=t[r++],s=(o>127)+(o>223)+(o>239);if(r+s>t.length)return{s:i,r:iY(t,r-1)};s?3==s?i+=String.fromCharCode(55296|(o=((15&o)<<18|(63&t[r++])<<12|(63&t[r++])<<6|63&t[r++])-65536)>>10,56320|1023&o):1&s?i+=String.fromCharCode((31&o)<<6|63&t[r++]):i+=String.fromCharCode((15&o)<<12|(63&t[r++])<<6|63&t[r++]):i+=String.fromCharCode(o)}};function i7(t,i){if(i){for(var r="",o=0;o<t.length;o+=16384)r+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return r}if(i3)return i3.decode(t);var s=i4(t),n=s.s,r=s.r;return r.length&&i1(8),n}"function"==typeof queueMicrotask&&queueMicrotask;let i6=/\(([\s\S]*)\)/,i8=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,i9=/\s?=.*$/;function re(t){var i,r;let o,s,n,a,c,h,p,u,g;return i="debug",c=!1,h=!0,null!=(r=t)&&({args:o,when:s,exit:n,prefix:a,onlyExit:c=!1,timing:h=!0}=r),p="object"==typeof h?h.warnAfter:1500,u=!1!==h||"object"==typeof c&&c.after>0,g="trace"===i?is.trace:"debug"===i?is.debug:is.info,(t,r,h)=>{let f,m;if("function"==typeof h.value?(f=h.value,m="value"):"function"==typeof h.get&&(f=h.get,m="get"),null==f||null==m)throw Error("Not supported");let b=null==o?function(t){if("function"!=typeof t)throw Error("Not supported");if(0===t.length)return[];let i=Function.prototype.toString.call(t),r=(i=(i=i.replace(i8,"")||i).slice(0,i.indexOf("{"))).indexOf("("),o=i.indexOf(")");r=r>=0?r+1:0,o=o>0?o:i.indexOf("="),i=i.slice(r,o),i=`(${i})`;let s=i6.exec(i);return null!=s?s[1].split(",").map(t=>t.trim().replace(i9,"")):[]}(f):[];h[m]=function(...t){let h;if(!is.enabled()||null!=s&&!s.apply(this,t))return f.apply(this,t);let m=is.enabled(i),_=iw(),v=_?.scopeId,y=ib.next(),w=this!=null?function(t){let i;if("function"==typeof t){if(null==(i=t.prototype?.constructor))return t.name}else i=t.constructor;let r=i?.name??"",o=r.indexOf("_");-1!==o&&(r=r.substring(o+1));let s=i;for(;null!=s;){let i=ia.get(s);if(null!=i)return i(t,r);s=Object.getPrototypeOf(s)}return r}(this):void 0,x=w?`${iy(y,v)} ${w}.${r}`:`${iy(y,v)} ${r}`;null!=a&&(x=a({id:y,instance:this,instanceName:w??"",name:r,prefix:x},...t));let C=i_(y,v,x),$=!1,E=()=>($||($=!0,h=function(t,i,r){if(!1===t||!i.length)return;if("function"==typeof t){let r=t(...i);if(!1===r)return;let o="";for(let[t,i]of Object.entries(r))o.length&&(o+=", "),o+=`${t}=${is.toLoggable(i,t)}`;return o||void 0}let o="",s=-1;for(let t of i){let i=r[++s];o.length&&(o+=", "),o+=i?`${i}=${is.toLoggable(t,i)}`:is.toLoggable(t)}return o||void 0}(o,t,b)),h);if(!c&&m){let t=E();g.call(is,t?`${x}(${t})`:x)}if(c||u||null!=n){let i=u?ig():void 0,r=t=>{let r=void 0!==i?` [${im(i)}ms]`:"",o=C.getExitInfo();if(c){let i=E();is.error(t,i?`${x}(${i})`:x,o?.details?`failed${o.details}${r}`:`failed${r}`)}else is.error(t,x,o?.details?`failed${o.details}${r}`:`failed${r}`)},o=t=>{let r,o,s,a;null!=i?(r=im(i))>p?(o=is.warn,s=` [*${r}ms] (slow)`):(o=g,s=` [${r}ms]`):(s="",o=g);let h=C.getExitInfo();if(null!=n)if("function"==typeof n)try{a=n(t)}catch(t){a=`@log.exit error: ${t}`}else!0===n&&(a=`returned ${is.toLoggable(t)}`);else h?.failed?(a=h.failed,o=(t,...i)=>is.error(null,t,...i)):a="completed";if(m||o!==g){let t=E();c?(!0===c||0===c.after||r>c.after)&&o.call(is,t?`${x}(${t}) ${a}${h?.details||""}${s}`:`${x} ${a}${h?.details||""}${s}`):o.call(is,t?`${x}(${t}) ${a}${h?.details||""}${s}`:`${x} ${a}${h?.details||""}${s}`)}};return ih(C,()=>{var i;let s;try{s=f.apply(this,t)}catch(t){throw r(t),t}return null!=s&&null!=(i=s)&&(i instanceof Promise||"function"==typeof i?.then)?s.then(o,r).catch(()=>{}):o(s),s})}return ih(C,()=>f.apply(this,t))}}}globalThis.scheduler?.yield?.bind(globalThis.scheduler),Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(t,i,...r){let o;this._stopped=!1,this.logScope=null!=t&&"string"!=typeof t?t:ik(t??"",!1,i?.scopeLabel);let s=i?.log;if(o=null==s||!0===s?{}:!1===s||s.onlyExit?void 0:s,this.logLevel=("object"==typeof s?s.level:void 0)??"debug",this.logProvider=i?.provider??il,this._time=ig(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){return im(this._time)}log(t){this.logCore(t,!1)}restart(t){this.logCore(t,!0),this._time=ig(),this._stopped=!1}stop(t){this._stopped||(this.restart(t),this._stopped=!0)}logCore(t,i){if(!this.logProvider.enabled(this.logLevel))return;if(!i)return void this.logProvider.log(this.logLevel,this.logScope,`${t?.message??""}${t?.suffix??""}`);let r=im(this._time),o=t?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${o?`${o} `:""}[${r}ms]${t?.suffix??""}`)}};(()=>{let t;var i,r,o={975:t=>{function i(t){if("string"!=typeof t)throw TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,i){for(var r,o="",s=0,n=-1,a=0,c=0;c<=t.length;++c){if(c<t.length)r=t.charCodeAt(c);else{if(47===r)break;r=47}if(47===r){if(n===c-1||1===a);else if(n!==c-1&&2===a){if(o.length<2||2!==s||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var h=o.lastIndexOf("/");if(h!==o.length-1){-1===h?(o="",s=0):s=(o=o.slice(0,h)).length-1-o.lastIndexOf("/"),n=c,a=0;continue}}else if(2===o.length||1===o.length){o="",s=0,n=c,a=0;continue}}i&&(o.length>0?o+="/..":o="..",s=2)}else o.length>0?o+="/"+t.slice(n+1,c):o=t.slice(n+1,c),s=c-n-1;n=c,a=0}else 46===r&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var t,o,s="",n=!1,a=arguments.length-1;a>=-1&&!n;a--)a>=0?t=arguments[a]:(void 0===o&&(o=process.cwd()),t=o),i(t),0!==t.length&&(s=t+"/"+s,n=47===t.charCodeAt(0));return s=r(s,!n),n?s.length>0?"/"+s:"/":s.length>0?s:"."},normalize:function(t){if(i(t),0===t.length)return".";var o=47===t.charCodeAt(0),s=47===t.charCodeAt(t.length-1);return 0!==(t=r(t,!o)).length||o||(t="."),t.length>0&&s&&(t+="/"),o?"/"+t:t},isAbsolute:function(t){return i(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var t,r=0;r<arguments.length;++r){var s=arguments[r];i(s),s.length>0&&(void 0===t?t=s:t+="/"+s)}return void 0===t?".":o.normalize(t)},relative:function(t,r){if(i(t),i(r),t===r||(t=o.resolve(t))===(r=o.resolve(r)))return"";for(var s=1;s<t.length&&47===t.charCodeAt(s);++s);for(var n=t.length,a=n-s,c=1;c<r.length&&47===r.charCodeAt(c);++c);for(var h=r.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===r.charCodeAt(c+g))return r.slice(c+g+1);if(0===g)return r.slice(c+g)}else a>p&&(47===t.charCodeAt(s+g)?u=g:0===g&&(u=0));break}var f=t.charCodeAt(s+g);if(f!==r.charCodeAt(c+g))break;47===f&&(u=g)}var m="";for(g=s+u+1;g<=n;++g)g!==n&&47!==t.charCodeAt(g)||(0===m.length?m+="..":m+="/..");return m.length>0?m+r.slice(c+u):(c+=u,47===r.charCodeAt(c)&&++c,r.slice(c))},_makeLong:function(t){return t},dirname:function(t){if(i(t),0===t.length)return".";for(var r=t.charCodeAt(0),o=47===r,s=-1,n=!0,a=t.length-1;a>=1;--a)if(47===(r=t.charCodeAt(a))){if(!n){s=a;break}}else n=!1;return -1===s?o?"/":".":o&&1===s?"//":t.slice(0,s)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');i(t);var o,s=0,n=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return"";var c=r.length-1,h=-1;for(o=t.length-1;o>=0;--o){var p=t.charCodeAt(o);if(47===p){if(!a){s=o+1;break}}else -1===h&&(a=!1,h=o+1),c>=0&&(p===r.charCodeAt(c)?-1==--c&&(n=o):(c=-1,n=h))}return s===n?n=h:-1===n&&(n=t.length),t.slice(s,n)}for(o=t.length-1;o>=0;--o)if(47===t.charCodeAt(o)){if(!a){s=o+1;break}}else -1===n&&(a=!1,n=o+1);return -1===n?"":t.slice(s,n)},extname:function(t){i(t);for(var r=-1,o=0,s=-1,n=!0,a=0,c=t.length-1;c>=0;--c){var h=t.charCodeAt(c);if(47!==h)-1===s&&(n=!1,s=c+1),46===h?-1===r?r=c:1!==a&&(a=1):-1!==r&&(a=-1);else if(!n){o=c+1;break}}return -1===r||-1===s||0===a||1===a&&r===s-1&&r===o+1?"":t.slice(r,s)},format:function(t){var i,r;if(null===t||"object"!=typeof t)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return i=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||""),i?i===t.root?i+r:i+"/"+r:r},parse:function(t){i(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var o,s=t.charCodeAt(0),n=47===s;n?(r.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=t.length-1,g=0;u>=o;--u)if(47!==(s=t.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===s?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(r.base=r.name=0===c&&n?t.slice(1,h):t.slice(c,h)):(0===c&&n?(r.name=t.slice(1,a),r.base=t.slice(1,h)):(r.name=t.slice(c,a),r.base=t.slice(c,h)),r.ext=t.slice(a,h)),c>0?r.dir=t.slice(0,c-1):n&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,t.exports=o}},s={};function n(t){var i=s[t];if(void 0!==i)return i.exports;var r=s[t]={exports:{}};return o[t](r,r.exports,n),r.exports}n.d=(t,i)=>{for(var r in i)n.o(i,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},n.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),n.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};(n.r(a),n.d(a,{URI:()=>l,Utils:()=>r}),"object"==typeof process)?t="win32"===process.platform:"object"==typeof navigator&&(t=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(t,i){if(!t.scheme&&i)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);if(t.scheme&&!c.test(t.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(t.path){if(t.authority){if(!h.test(t.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(t.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let g=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(t){return t instanceof l||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"string"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString}scheme;authority;path;query;fragment;constructor(t,i,r,o,s,n=!1){"object"==typeof t?(this.scheme=t.scheme||"",this.authority=t.authority||"",this.path=t.path||"",this.query=t.query||"",this.fragment=t.fragment||""):(this.scheme=t||n?t:"file",this.authority=i||"",this.path=function(t,i){switch(t){case"https":case"http":case"file":i?"/"!==i[0]&&(i="/"+i):i="/"}return i}(this.scheme,r||""),this.query=o||"",this.fragment=s||"",u(this,n))}get fsPath(){return y(this,!1)}with(t){if(!t)return this;let{scheme:i,authority:r,path:o,query:s,fragment:n}=t;return void 0===i?i=this.scheme:null===i&&(i=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===o?o=this.path:null===o&&(o=""),void 0===s?s=this.query:null===s&&(s=""),void 0===n?n=this.fragment:null===n&&(n=""),i===this.scheme&&r===this.authority&&o===this.path&&s===this.query&&n===this.fragment?this:new d(i,r,o,s,n)}static parse(t,i=!1){let r=g.exec(t);return r?new d(r[2]||"",C(r[4]||""),C(r[5]||""),C(r[7]||""),C(r[9]||""),i):new d("","","","","")}static file(i){let r="";if(t&&(i=i.replace(/\\/g,"/")),"/"===i[0]&&"/"===i[1]){let t=i.indexOf("/",2);-1===t?(r=i.substring(2),i="/"):(r=i.substring(2,t),i=i.substring(t)||"/")}return new d("file",r,i,"","")}static from(t){let i=new d(t.scheme,t.authority,t.path,t.query,t.fragment);return u(i,!0),i}toString(t=!1){return w(this,t)}toJSON(){return this}static revive(t){if(t){if(t instanceof l)return t;{let i=new d(t);return i._formatted=t.external,i._fsPath=t._sep===f?t.fsPath:null,i}}return t}};let f=t?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=y(this,!1)),this._fsPath}toString(t=!1){return t?w(this,!0):(this._formatted||(this._formatted=w(this,!1)),this._formatted)}toJSON(){let t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=f),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t}};let m={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function _(t,i,r){let o,s=-1;for(let n=0;n<t.length;n++){let a=t.charCodeAt(n);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||i&&47===a||r&&91===a||r&&93===a||r&&58===a)-1!==s&&(o+=encodeURIComponent(t.substring(s,n)),s=-1),void 0!==o&&(o+=t.charAt(n));else{void 0===o&&(o=t.substr(0,n));let i=m[a];void 0!==i?(-1!==s&&(o+=encodeURIComponent(t.substring(s,n)),s=-1),o+=i):-1===s&&(s=n)}}return -1!==s&&(o+=encodeURIComponent(t.substring(s))),void 0!==o?o:t}function v(t){let i;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);35===o||63===o?(void 0===i&&(i=t.substr(0,r)),i+=m[o]):void 0!==i&&(i+=t[r])}return void 0!==i?i:t}function y(i,r){let o;return o=i.authority&&i.path.length>1&&"file"===i.scheme?`//${i.authority}${i.path}`:47===i.path.charCodeAt(0)&&(i.path.charCodeAt(1)>=65&&90>=i.path.charCodeAt(1)||i.path.charCodeAt(1)>=97&&122>=i.path.charCodeAt(1))&&58===i.path.charCodeAt(2)?r?i.path.substr(1):i.path[1].toLowerCase()+i.path.substr(2):i.path,t&&(o=o.replace(/\//g,"\\")),o}function w(t,i){let r=i?v:_,o="",{scheme:s,authority:n,path:a,query:c,fragment:h}=t;if(s&&(o+=s,o+=":"),(n||"file"===s)&&(o+="/",o+="/"),n){let t=n.indexOf("@");if(-1!==t){let i=n.substr(0,t);n=n.substr(t+1),-1===(t=i.lastIndexOf(":"))?o+=r(i,!1,!1):(o+=r(i.substr(0,t),!1,!1),o+=":",o+=r(i.substr(t+1),!1,!0)),o+="@"}-1===(t=(n=n.toLowerCase()).lastIndexOf(":"))?o+=r(n,!1,!0):(o+=r(n.substr(0,t),!1,!0),o+=n.substr(t))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let t=a.charCodeAt(1);t>=65&&t<=90&&(a=`/${String.fromCharCode(t+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let t=a.charCodeAt(0);t>=65&&t<=90&&(a=`${String.fromCharCode(t+32)}:${a.substr(2)}`)}o+=r(a,!0,!1)}return c&&(o+="?",o+=r(c,!1,!1)),h&&(o+="#",o+=i?h:_(h,!1,!1)),o}let x=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function C(t){return t.match(x)?t.replace(x,t=>(function t(i){try{return decodeURIComponent(i)}catch{return i.length>3?i.substr(0,3)+t(i.substr(3)):i}})(t)):t}var $=n(975);let E=$.posix||$;(i=r||(r={})).joinPath=function(t,...i){return t.with({path:E.join(t.path,...i)})},i.resolvePath=function(t,...i){let r=t.path,o=!1;"/"!==r[0]&&(r="/"+r,o=!0);let s=E.resolve(r,...i);return o&&"/"===s[0]&&!t.authority&&(s=s.substring(1)),t.with({path:s})},i.dirname=function(t){if(0===t.path.length||"/"===t.path)return t;let i=E.dirname(t.path);return 1===i.length&&46===i.charCodeAt(0)&&(i=""),t.with({path:i})},i.basename=function(t){return E.basename(t.path)},i.extname=function(t){return E.extname(t.path)},b=a})();let{URI:rt,Utils:ri}=b;function rr(t,i){return JSON.parse(t,(t,r)=>(function(t,i){let r=function(t){if("object"!=typeof t||null==t)return;let i=t.__ipc;if(null!=i)switch(i){case"date":return"number"==typeof t.value?t:void 0;case"promise":return"object"==typeof t.value&&"string"==typeof t.value.id&&"string"==typeof t.value.method?t:void 0;case"uri":return"object"==typeof t.value&&"string"==typeof t.value?.scheme?t:void 0;default:return}}(t);if(null==r)return t;switch(r.__ipc){case"date":return new Date(r.value);case"promise":return i(r.value);case"uri":return rt.revive(r.value)}})(r,i))}let ro="__supertalk_rpc__";new TextEncoder,new TextDecoder;let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return this._event??=(t,i,r)=>{this.listeners??=new LinkedList;let o=this.listeners.push(null==i?t:[t,i]),s={dispose:()=>{s.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(r)&&r.push(s),s},this._event}fire(t){if(null!=this.listeners){this._deliveryQueue??=new LinkedList;for(let i=this.listeners.iterator(),r=i.next();!r.done;r=i.next())this._deliveryQueue.push([r.value,t]);for(;this._deliveryQueue.size>0;){let[t,i]=this._deliveryQueue.shift();try{"function"==typeof t?t(i):t[0].call(t[1],i)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let rs={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(t){this.element=t,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,i){let r=new events_Node(t);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(i){let t=this._last;this._last=r,r.prev=t,t.next=r}else{let t=this._first;this._first=r,r.next=t,t.prev=r}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===events_Node.Undefined)return;let t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==events_Node.Undefined&&t.next!==events_Node.Undefined){let i=t.prev;i.next=t.next,t.next.prev=i}else t.prev===events_Node.Undefined&&t.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):t.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):t.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let t,i=this._first;return{next:function(){return i===events_Node.Undefined?rs:(null==t?t={done:!1,value:i.element}:t.value=i.element,i=i.next,t)}}}toArray(){let t=[];for(let i=this._first;i!==events_Node.Undefined;i=i.next)t.push(i.element);return t}};var rn=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,rl=(t,i)=>(i=Symbol[t])?i:Symbol.for("Symbol."+t),rc=t=>{throw TypeError(t)},rh=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?ra(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&rn(i,r,n),n};function rd(){return o??=null!=s?s():acquireVsCodeApi()}let rp=iu();function ru(){return`webview:${rp.next()}`}let rg=`wv-${Math.random().toString(36).slice(2,10)}`,rf=Date.now(),rm=class{constructor(t){this.appName=t,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=rd(),this._disposable=m.on(window,"message",t=>this.onMessageReceived(t))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(t){var i,o,s,n,a,c,h,p,u,g=[];try{if(s=t.data,"object"==typeof s&&null!==s&&ro in s&&!0===s[ro])return;let a=t.data,c=((t,i,r)=>{if(null!=i){var o,s;"object"!=typeof i&&"function"!=typeof i&&rc("Object expected"),r&&(o=i[rl("asyncDispose")]),void 0===o&&(o=i[rl("dispose")],r&&(s=o)),"function"!=typeof o&&rc("Object not disposable"),s&&(o=function(){try{s.call(this)}catch(t){return Promise.reject(t)}}),t.push([r,o,i])}else r&&t.push([r]);return i})(g,function(t,i,o){var s,n;let a,c,h;if(!is.enabled())return;let p=(s=o?.scope??!0,n=o?.scopeLabel,c=id(),r=(h=ik(t,s,n)).scopeId,ic.set(h.scopeId,h),h[Symbol.dispose]=()=>{let t;t=h?.scopeId??r,null!=t&&ic.delete(t),r=c?.scopeId},h);if(!i)return p;let u="debug",g=!1;"object"==typeof i&&(u=i.level??u,a=i.message,g=!0===i.onlyExit);let f=ig();g||ix(p,u,a??"");let m=p[Symbol.dispose];return p[Symbol.dispose]=()=>{let t=im(f),i=` [${t}ms]`,r=p.getExitInfo(),o=r.failed??"completed";null!=r.failed?is.error(null,p,`${o}${r.details??""}${i}`):ix(p,u,`${o}${r.details??""}${i}`),m()},p}(`(e=${a.id}|${a.method})`,void 0,{scope:iw()})),h=function(t,i,...r){let o=("object"==typeof i?.log?i.log.level:void 0)??"info";return(i?.provider??il).enabled(o)?new Stopwatch(t,i,...r):void 0}(c,{log:{onlyExit:!0,level:"debug"}});if(a.compressed&&a.params instanceof Uint8Array){if("deflate"===a.compressed)try{a.params=i7((n=a.params,i2(n,{i:2},void 0,void 0)))}catch(t){a.params=i7(a.params)}else a.params=i7(a.params);h?.restart({message:`\u2022 decompressed (${a.compressed}) serialized params`})}if("string"==typeof a.params?(a.params=rr(a.params,t=>this.getResponsePromise(t.method,t.id)),h?.stop({message:"• deserialized params"})):null==a.params?h?.stop({message:"• no params"}):h?.stop({message:"• invalid params"}),c?.addExitInfo(`ipc (host -> webview) duration=${Date.now()-a.timestamp}ms`),null!=a.completionId){let t=(i=a.method,o=a.completionId,`${i}|${o}`);this._pendingHandlers.get(t)?.(a);return}this._onReceiveMessage.fire(a)}catch(t){var f=t,m=!0}finally{a=f,c=m,h="function"==typeof SuppressedError?SuppressedError:function(t,i,r,o){return(o=Error(r)).name="SuppressedError",o.error=t,o.suppressed=i,o},p=t=>a=c?new h(t,a,"An error was suppressed during disposal"):(c=!0,t),(u=t=>{for(;t=g.pop();)try{var i=t[1]&&t[1].call(t[2]);if(t[0])return Promise.resolve(i).then(u,t=>(p(t),u()))}catch(t){p(t)}if(c)throw a})()}}deserializeIpcData(t){return rr(t,t=>this.getResponsePromise(t.method,t.id))}sendCommand(t,i){let r=ru();this.postMessage({id:r,scope:t.scope,method:t.method,params:i,compressed:!1,timestamp:Date.now()})}async sendRequest(t,i){let r=ru(),o=this.getResponsePromise(t.response.method,r);return this.postMessage({id:r,scope:t.scope,method:t.method,params:i,compressed:!1,timestamp:Date.now(),completionId:r}),o}getResponsePromise(t,i){return new Promise((r,o)=>{var s,n;let a,c=(s=t,n=i,`${s}|${n}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(is.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,t=>{if(h.call(this),t.method===ed.method){let i=t.params;"rejected"===i.status?queueMicrotask(()=>o(Error(i.reason))):queueMicrotask(()=>r(i.value))}else queueMicrotask(()=>r(t.params))})})}setPersistedState(t){this._api.setState(t)}updatePersistedState(t){let i=this._api.getState();null!=i&&"object"==typeof i?(i={...i,...t},this._api.setState(i)):i=t,this.setPersistedState(i)}postMessage(t){this._api.postMessage(t)}};function rb(t,i){let r=Math.pow(10,i);return Math.round(t*r)/r}rh([re({args:t=>({e:`${t.data.id}|${t.data.method}`})})],rm.prototype,"onMessageReceived",1),rh([re({args:t=>({commandType:t.method})})],rm.prototype,"sendCommand",1),rh([re({args:t=>({requestType:t.method})})],rm.prototype,"sendRequest",1),rh([re({args:t=>({e:`${t.id}, method=${t.method}`})})],rm.prototype,"postMessage",1),rm=rh([(u=t=>`${t.appName}(HostIpc)`,t=>void ia.set(t,u))],rm);let RGBA=class RGBA{constructor(t,i,r,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,t)),this.g=0|Math.min(255,Math.max(0,i)),this.b=0|Math.min(255,Math.max(0,r)),this.a=rb(Math.max(Math.min(1,o),0),3)}static equals(t,i){return t.r===i.r&&t.g===i.g&&t.b===i.b&&t.a===i.a}};let HSLA=class HSLA{constructor(t,i,r,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=rb(Math.max(Math.min(1,i),0),3),this.l=rb(Math.max(Math.min(1,r),0),3),this.a=rb(Math.max(Math.min(1,o),0),3)}static equals(t,i){return t.h===i.h&&t.s===i.s&&t.l===i.l&&t.a===i.a}static fromRGBA(t){let i=t.r/255,r=t.g/255,o=t.b/255,s=t.a,n=Math.max(i,r,o),a=Math.min(i,r,o),c=0,h=0,p=(a+n)/2,u=n-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),n){case i:c=(r-o)/u+6*(r<o);break;case r:c=(o-i)/u+2;break;case o:c=(i-r)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,s)}static _hue2rgb(t,i,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?t+(i-t)*6*r:r<.5?i:r<2/3?t+(i-t)*(2/3-r)*6:t}static toRGBA(t){let i,r,o,s=t.h/360,{s:n,l:a,a:c}=t;if(0===n)i=r=o=a;else{let t=a<.5?a*(1+n):a+n-a*n,c=2*a-t;i=HSLA._hue2rgb(c,t,s+1/3),r=HSLA._hue2rgb(c,t,s),o=HSLA._hue2rgb(c,t,s-1/3)}return new RGBA(Math.round(255*i),Math.round(255*r),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(t,i,r,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=rb(Math.max(Math.min(1,i),0),3),this.v=rb(Math.max(Math.min(1,r),0),3),this.a=rb(Math.max(Math.min(1,o),0),3)}static equals(t,i){return t.h===i.h&&t.s===i.s&&t.v===i.v&&t.a===i.a}static fromRGBA(t){let i=t.r/255,r=t.g/255,o=t.b/255,s=Math.max(i,r,o),n=s-Math.min(i,r,o);return new HSVA(Math.round(60*(0===n?0:s===i?((r-o)/n%6+6)%6:s===r?(o-i)/n+2:(i-r)/n+4)),0===s?0:n/s,s,t.a)}static toRGBA(t){let{h:i,s:r,v:o,a:s}=t,n=o*r,a=n*(1-Math.abs(i/60%2-1)),c=o-n,[h,p,u]=[0,0,0];return i<60?(h=n,p=a):i<120?(h=a,p=n):i<180?(p=n,u=a):i<240?(p=a,u=n):i<300?(h=a,u=n):i<=360&&(h=n,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),s)}};function r_(t,i){return i.getPropertyValue(t).trim()}let Color=class Color{static from(t){return t instanceof Color?t:parseColor(t)||Color.red}static fromCssVariable(t,i){return parseColor(r_(t,i))||Color.red}static fromHex(t){return parseHexColor(t)||Color.red}static equals(t,i){return!t&&!i||!!t&&!!i&&t.equals(i)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(t){if(t)if(t instanceof RGBA)this.rgba=t;else if(t instanceof HSLA)this._hsla=t,this.rgba=HSLA.toRGBA(t);else if(t instanceof HSVA)this._hsva=t,this.rgba=HSVA.toRGBA(t);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(t){return null!=t&&!!t&&RGBA.equals(this.rgba,t.rgba)&&HSLA.equals(this.hsla,t.hsla)&&HSVA.equals(this.hsva,t.hsva)}getRelativeLuminance(){return rb(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(t){let i=t/255;return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}luminance(t){return luminance(this,t)}getContrastRatio(t){let i=this.getRelativeLuminance(),r=t.getRelativeLuminance();return i>r?(i+.05)/(r+.05):(r+.05)/(i+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(t){return this.getRelativeLuminance()>t.getRelativeLuminance()}isDarkerThan(t){return this.getRelativeLuminance()<t.getRelativeLuminance()}lighten(t){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){let{r:i,g:r,b:o,a:s}=this.rgba;return new Color(new RGBA(i,r,o,s*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){let i=t.rgba,r=this.rgba.a,o=i.a,s=r+o*(1-r);return s<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*r/s+i.r*o*(1-r)/s,this.rgba.g*r/s+i.g*o*(1-r)/s,this.rgba.b*r/s+i.b*o*(1-r)/s,s))}mix(t,i){return mixColors(this,t,i)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;let{r:i,g:r,b:o,a:s}=this.rgba;return new Color(new RGBA(t.rgba.r-s*(t.rgba.r-i),t.rgba.g-s*(t.rgba.g-r),t.rgba.b-s*(t.rgba.b-o),1))}flatten(...t){let i=t.reduceRight((t,i)=>Color._flatten(i,t));return Color._flatten(this,i)}static _flatten(t,i){let r=1-t.rgba.a;return new Color(new RGBA(r*i.rgba.r+t.rgba.a*t.rgba.r,r*i.rgba.g+t.rgba.a*t.rgba.g,r*i.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(t){return t.isOpaque()?`#${rv(t.rgba.r)}${rv(t.rgba.g)}${rv(t.rgba.b)}`:`rgba(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b}, ${Number(t.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(t,i,r){if(t.isLighterThan(i))return t;r=r||.5;let o=t.getRelativeLuminance(),s=i.getRelativeLuminance();return r=r*(s-o)/s,t.lighten(r)}static getDarkerColor(t,i,r){if(t.isDarkerThan(i))return t;r=r||.5;let o=t.getRelativeLuminance(),s=i.getRelativeLuminance();return r=r*(o-s)/o,t.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function rv(t){let i=t.toString(16);return 2!==i.length?`0${i}`:i}let ry=new Emitter,rw=ry.event;function rk(t){let i=document.documentElement,r=window.getComputedStyle(i),o=document.body.classList,s=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),n=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=r_("--vscode-editor-background",r),c=r_("--vscode-editor-foreground",r);return c||(c=r_("--vscode-foreground",r)),{colors:{background:a,foreground:c},computedStyle:r,isLightTheme:s,isHighContrastTheme:n,isInitializing:null==t}}function rx(){let t=new MutationObserver(t=>{ry.fire(rk(t))});return t.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>t.disconnect()}}var rC=Object.defineProperty,r$=Object.getOwnPropertyDescriptor,rE=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?r$(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&rC(i,r,n),n};let GlWebviewApp=class GlWebviewApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[]}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}initWebviewContext(t){let i=JSON.parse(t3.decode(function(t){let i=globalThis.atob(t),r=i.length,o=new Uint8Array(r),s=0,n=r-r%8;for(;s<n;s+=8)o[s]=i.charCodeAt(s),o[s+1]=i.charCodeAt(s+1),o[s+2]=i.charCodeAt(s+2),o[s+3]=i.charCodeAt(s+3),o[s+4]=i.charCodeAt(s+4),o[s+5]=i.charCodeAt(s+5),o[s+6]=i.charCodeAt(s+6),o[s+7]=i.charCodeAt(s+7);for(;s<r;s++)o[s]=i.charCodeAt(s);return o}(t))),r=i.webviewId,o=i.webviewInstanceId;this._webview={webviewId:r,webviewInstanceId:o,createCommandLink:(t,i)=>(t.endsWith(":")&&(t=`${t}${r.split(".").at(-1)}`),t4(t,r,o,i))}}connectedCallback(){let t,i,r,o;super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.debug("connected"),this._ipc=new rm(this.name),this.disposables.push(rx()),null!=this.onThemeUpdated&&(this.onThemeUpdated(rk()),this.disposables.push(rw(this.onThemeUpdated,this))),this.disposables.push(this._ipc.onReceiveMessage(t=>{switch(!0){case ep.is(t):this.onWebviewFocusChanged?.(t.params.focused),window.dispatchEvent(new CustomEvent(t.params.focused?"webview-focus":"webview-blur"));break;case eu.is(t):this.onWebviewVisibilityChanged?.(t.params.visible),window.dispatchEvent(new CustomEvent(t.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._focusTracker=(r=0,o=x(t=>{let i=`webview:${++r}`,o=document.hasFocus();t.focused=o,o||(t.inputFocused=!1),rd().postMessage({id:i,scope:ea.scope,method:ea.method,params:t,compressed:!1,timestamp:Date.now()})},150),{onFocusIn:r=>{let s=r.composedPath().some(t=>"INPUT"===t.tagName);(!0!==t||i!==s)&&(t=!0,i=s,o({focused:!0,inputFocused:s}))},onFocusOut:t=>{o({focused:!1,inputFocused:!1})}}),document.addEventListener("focusin",this._focusTracker.onFocusIn),document.addEventListener("focusout",this._focusTracker.onFocusOut),document.querySelectorAll("a").forEach(t=>{t.href===t.title&&t.removeAttribute("title")}),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.debug("disconnected"),null!=this._focusTracker&&(document.removeEventListener("focusin",this._focusTracker.onFocusIn),document.removeEventListener("focusout",this._focusTracker.onFocusOut),this._focusTracker=void 0),this.disposables.forEach(t=>t.dispose())}render(){return tr`<slot></slot>`}};rE([tY({type:String})],GlWebviewApp.prototype,"name",2),rE([tY({type:String})],GlWebviewApp.prototype,"placement",2),rE([eg({context:"ipc"})],GlWebviewApp.prototype,"_ipc",2),rE([eg({context:"logger"})],GlWebviewApp.prototype,"_logger",2),rE([eg({context:"promos"})],GlWebviewApp.prototype,"_promos",2),rE([eg({context:"telemetry"})],GlWebviewApp.prototype,"_telemetry",2),rE([eg({context:"webview"})],GlWebviewApp.prototype,"_webview",2),GlWebviewApp[eq];let App=class App{constructor(t){this.appName=t;let i=[],r=rk();null!=this.onThemeUpdated&&(this.onThemeUpdated(r),i.push(rw(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(t),this.log("opening..."),this._api=rd(),this._hostIpc=new rm(this.appName),i.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),i.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),i.push(this._telemetry);let{webviewId:o,webviewInstanceId:s}=this.state;if(this._webview={webviewId:o,webviewInstanceId:s,createCommandLink:(t,i)=>(t.endsWith(":")&&(t=`${t}${o.split(".").at(-1)}`),t4(t,o,s,i))},new context_provider_i(document.body,{context:"ipc",initialValue:this._hostIpc}),new context_provider_i(document.body,{context:"logger",initialValue:this._logger}),new context_provider_i(document.body,{context:"promos",initialValue:this._promos}),new context_provider_i(document.body,{context:"telemetry",initialValue:this._telemetry}),new context_provider_i(document.body,{context:"webview",initialValue:this._webview}),null!=this.state){let t=this.getState();this.state.timestamp>=(t?.timestamp??0)?this._api.setState(this.state):this.state=t}i.push(rx()),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&i.push(this._hostIpc.onReceiveMessage(t=>{switch(!0){case ep.is(t):window.dispatchEvent(new CustomEvent(t.params.focused?"webview-focus":"webview-blur"));break;case eu.is(t):window.dispatchEvent(new CustomEvent(t.params.visible?"webview-visible":"webview-hidden"));break;default:this.onMessageReceived(t)}})),this.sendRequest(en,{bootstrap:!1,clientId:rg,clientLoadedAt:rf}),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),i.push(m.on(window,"pagehide",()=>{i?.forEach(t=>t.dispose()),this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=void 0})),i.push(m.on(window,"gl-telemetry-fired",t=>{this._telemetry.sendEvent(t.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(t=>{t.href===t.title&&t.removeAttribute("title")}),this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=this.onBind?.(),this.bindDisposables??=[];let t=x(t=>{let i=document.hasFocus();t.focused=i,i||(t.inputFocused=!1),this.sendCommand(ea,t)},150);this.bindDisposables.push(m.on(document,"focusin",i=>{t({focused:!0,inputFocused:i.composedPath().some(t=>"INPUT"===t.tagName)})}),m.on(document,"focusout",()=>{t({focused:!1,inputFocused:!1})}))}log(t,...i){this._logger.debug(t,...i)}getState(){return this._api.getState()}sendCommand(t,i){this._hostIpc.sendCommand(t,i)}sendRequest(t,i){return this._hostIpc.sendRequest(t,i)}setState(t){this._api.setState(t)}};function rS(t,i,r){return t?i(t):r?.(t)}let ContextMenuProxyController=class ContextMenuProxyController{constructor(t){this._onContextMenu=t=>{let i=t.composedPath().find(t=>t instanceof HTMLElement&&null!=t.dataset.vscodeContext);null!=i&&i!==this._host&&(this._host.dataset.vscodeContext=i.dataset.vscodeContext,setTimeout(()=>{delete this._host.dataset.vscodeContext},100))},this._host=t,t.addController(this)}hostConnected(){this._host.addEventListener("contextmenu",this._onContextMenu)}hostDisconnected(){this._host.removeEventListener("contextmenu",this._onContextMenu)}};function*rA(t,i){if(void 0!==t){let r=0;for(let o of t)yield i(o,r++)}}let rI=(t,i,r)=>{let o=new Map;for(let s=i;s<=r;s++)o.set(t[s],s);return o},rz=eV(class extends directive_i{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,i,r){let o;void 0===r?r=i:void 0!==i&&(o=i);let s=[],n=[],a=0;for(let i of t)s[a]=o?o(i,a):a,n[a]=r(i,a),a++;return{values:n,keys:s}}render(t,i,r){return this.dt(t,i,r).values}update(t,[i,r,o]){let s=t._$AH,{values:n,keys:a}=this.dt(i,r,o);if(!Array.isArray(s))return this.ut=a,n;let c=this.ut??=[],h=[],p,u,g=0,f=s.length-1,m=0,b=n.length-1;for(;g<=f&&m<=b;)if(null===s[g])g++;else if(null===s[f])f--;else if(c[g]===a[m])h[m]=tm(s[g],n[m]),g++,m++;else if(c[f]===a[b])h[b]=tm(s[f],n[b]),f--,b--;else if(c[g]===a[b])h[b]=tm(s[g],n[b]),tf(t,h[b+1],s[g]),g++,b--;else if(c[f]===a[m])h[m]=tm(s[f],n[m]),tf(t,s[g],s[f]),f--,m++;else if(void 0===p&&(p=rI(a,m,b),u=rI(c,g,f)),p.has(c[g]))if(p.has(c[f])){let i=u.get(a[m]),r=void 0!==i?s[i]:null;if(null===r){let i=tf(t,s[g]);tm(i,n[m]),h[m]=i}else h[m]=tm(r,n[m]),tf(t,s[g],r),s[i]=null;m++}else t_(s[f]),f--;else t_(s[g]),g++;for(;m<=b;){let i=tf(t,h[b+1]);tm(i,n[m]),h[m++]=i}for(;g<=f;){let t=s[g++];null!==t&&t_(t)}return this.ut=a,((t,i=tb)=>t._$AH=i)(t,h),ts}});let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(t){if(super(t),this.it=tn,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===tn||null==t)return this._t=void 0,this.it=t;if(t===ts)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let rP=eV(unsafe_html_e);function rT(t,i,r,o=!1,s){let n={name:"",relativePath:"",children:new Map,descendants:[]},a=t.reduce((t,o)=>{let s=t,n="";for(let t of i(o)){n=r(n,t),s.children??=new Map;let i=s.children.get(t);null==i&&(i={name:t,relativePath:n,parent:s,children:void 0,descendants:void 0},s.children.set(t,i)),s.descendants??=[],s.descendants.push(o),s=i}return s.value=o,t},n);return o&&(a=function t(i,r,o=!0,s){if(null==i.children)return i;let n=[...i.children.values()];for(let i of n)t(i,r,!1,s);if(!o&&null==i.value&&1===n.length){let t=n[0];if((null==t.value||s?.(t.value))&&(i.name=r(i.name,t.name),i.relativePath=t.relativePath,i.children=t.children,i.descendants=t.descendants,i.value=t.value,null!=i.children))for(let t of i.children.values())t.parent=i}return i}(a,r,!0,s)),a}function rj(t,i){if(null==t)return 0;let r=0;for(let o of t)r+=i(o);return r}var rR=w(518),rM=w(285);let rO=()=>new ref_h;let ref_h=class ref_h{};let rL=new WeakMap,rD=eV(class extends async_directive_f{render(t){return tn}update(t,[i]){let r=i!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=i,this.ht=t.options?.host,this.rt(this.ct=t.element)),tn}rt(t){if(void 0!==this.G)if(this.isConnected||(t=void 0),"function"==typeof this.G){let i=this.ht??globalThis,r=rL.get(i);void 0===r&&(r=new WeakMap,rL.set(i,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?rL.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});let FilterController=class FilterController{constructor(t,i){this.host=t,this.options=i,this._query="",this._terms=[],t.addController(this)}hostConnected(){}hostDisconnected(){clearTimeout(this._debounceTimer),this._debounceTimer=void 0}get query(){return this._query}get terms(){return this._terms}get isFiltering(){return this._terms.length>0}setQuery(t,i){(this._query!==t||i?.debounce)&&(this._query=t,this.options.onQueryChanged?.(t),clearTimeout(this._debounceTimer),i?.debounce?this._debounceTimer=setTimeout(()=>this.apply(),this.options.debounceMs??150):this.apply())}clear(){this.setQuery("")}apply(){this._terms=this._query.toLowerCase().trim().split(/\s+/).filter(t=>t.length>0),this.options.applyMatch(this._terms),this.options.onApplied?.(),this.host.requestUpdate()}};let CollectionIndexController=class CollectionIndexController{constructor(t,i){this.options=i,this._idToIndex=new Map,t.addController(this)}hostConnected(){this.rebuild()}hostDisconnected(){this._idToIndex.clear()}rebuild(){this._idToIndex.clear();let t=this.options.getItems();if(null!=t)for(let i=0;i<t.length;i++)this._idToIndex.set(this.options.getItemId(t[i]),i)}get size(){return this.options.getItems()?.length??0}indexOf(t){return this._idToIndex.get(t)??-1}has(t){return this._idToIndex.has(t)}itemAt(t){return this.options.getItems()?.[t]}idAt(t){let i=this.itemAt(t);return null==i?void 0:this.options.getItemId(i)}itemFor(t){let i=this.indexOf(t);return -1===i?void 0:this.itemAt(i)}ids(){let t=this.options.getItems();return null==t?[]:t.map(t=>this.options.getItemId(t))}};let FocusController=class FocusController{constructor(t,i){this.host=t,this.options=i,this._focusedIndex=-1,this._containerHasFocus=!1,this._connected=!1,t.addController(this)}hostConnected(){this._connected=!0}hostDisconnected(){this._connected=!1}get strategy(){return this.options.strategy??"activedescendant"}get focusedId(){return this._focusedId}get focusedIndex(){return this._focusedIndex}setFocusedId(t){this._focusedId=t}setFocusedIndex(t){this._focusedIndex=t}get containerHasFocus(){return this._containerHasFocus}setContainerHasFocus(t){this._containerHasFocus!==t&&(this._containerHasFocus=t,this.host.requestUpdate())}currentIndex(){let t=this.options.index;if(null!=this._focusedId){let i=t.indexOf(this._focusedId);if(-1!==i)return i}return this._focusedIndex>=0&&this._focusedIndex<t.size?this._focusedIndex:t.size>0?0:-1}focusIndex(t,i){let r=this.options.index.size;if(0===r)return;let o=Math.max(0,Math.min(t,r-1)),s=this.options.index.idAt(o);null!=s&&(this._focusedId=s,this._focusedIndex=o,this.options.onChange?.(),this.host.requestUpdate(),i?.scroll!==!1&&this.options.scroll?.scrollToIndex(o,{restoreFocus:i?.restoreFocus??!0}))}setFocused(t,i){let r=this.options.index.indexOf(t);-1!==r&&this.focusIndex(r,{scroll:i?.scroll})}move(t,i){let r=this.currentIndex()+t;this.focusIndex(r,{scroll:i?.scroll})}first(){this.focusIndex(0)}last(){this.focusIndex(this.options.index.size-1)}pageBy(t,i){this.move(t*Math.max(1,i))}focusElement(t){let i=t??this._focusedId;if(null==i)return;let r=this.options.index.indexOf(i);-1!==r&&this.options.scroll?.scrollToIndex(r,{restoreFocus:!1}),requestAnimationFrame(()=>{if(this._connected)if("roving"===this.strategy){var t;let r,o=this.options.getElementForId?.(i)??this.options.getContainer?.()?.querySelector(`[data-id="${(t=i,r=globalThis.CSS,r?.escape!=null?r.escape(t):t.replace(/["\\]/g,"\\$&"))}"]`);o?.focus()}else this.options.getContainer?.()?.focus()})}reconcile(){let t=this.options.index;if(null!=this._focusedId){let i=t.indexOf(this._focusedId);if(-1!==i){this._focusedIndex=i;return}if(t.size>0){let i=Math.max(0,Math.min(this._focusedIndex,t.size-1));this._focusedIndex=i,this._focusedId=t.idAt(i)}else this._focusedId=void 0,this._focusedIndex=-1}else t.size>0&&(this._focusedId=t.idAt(0),this._focusedIndex=0)}seedFirstIfUnset(){null!=this._focusedId||0!==this.options.index.size&&(this._focusedId=this.options.index.idAt(0),this._focusedIndex=0)}};let KeyboardNavController=class KeyboardNavController{constructor(t,i){this.host=t,this.options=i,t.addController(this)}hostConnected(){}hostDisconnected(){}get multi(){return"multi"===this.options.mode()}get followsFocus(){return this.options.selectionFollowsFocus?.()??!0}handleKeydown(t){let{focus:i,selection:r}=this.options;switch(t.key){case"ArrowDown":case"ArrowUp":{let r="ArrowDown"===t.key?1:-1;if(this.multi&&(t.ctrlKey||t.metaKey))return i.move(r),!0;return i.move(r),this.applyNavSelection(t),!0}case"Home":case"End":return"Home"===t.key?i.first():i.last(),this.applyNavSelection(t),!0;case"PageUp":case"PageDown":return i.pageBy("PageDown"===t.key?1:-1,this.options.pageSize?.()??10),this.applyNavSelection(t),!0;case"Enter":{let t=i.focusedId;return null!=t&&this.options.onActivate?.(t),!0}case" ":{let t=i.focusedId;if(null==t)return!0;return this.multi?r.toggle(t):this.options.onActivate?.(t),!0}case"a":case"A":if(this.multi&&(t.ctrlKey||t.metaKey))return r.selectAll(),!0;return this.options.onUnhandledKey?.(t)??!1;default:return this.options.onUnhandledKey?.(t)??!1}}applyNavSelection(t){let i=this.options.focus.focusedId;if(null!=i){if(this.multi&&t.shiftKey)return void this.options.selection.selectRange(i);if(this.followsFocus){if(this.multi&&!this.options.selection.canSelect(i))return;this.options.selection.setSingle(i)}}}};let SelectionController=class SelectionController{constructor(t,i){this.options=i,this._selected=new Set,t.addController(this)}hostConnected(){}hostDisconnected(){}get mode(){return this.options.mode?.()??"single"}get selectedIds(){return this._selected}get size(){return this._selected.size}get anchorId(){return this._anchorId}has(t){return this._selected.has(t)}isSelectable(t){return this.options.isSelectable?.(t)??!0}canSelect(t){return this.isSelectable(t)}commit(t){this._selected=t,this.options.onChange?.()}setSingle(t){this._anchorId=t,this.commit(new Set([t]))}setAnchor(t){this._anchorId=t}toggle(t){if(!this.isSelectable(t))return;let i=new Set(this._selected);i.has(t)?i.delete(t):i.add(t),this._anchorId=t,this.commit(i)}selectRange(t,i){let r=this.options.orderedIds(),o=this._anchorId??t,s=r.indexOf(o),n=r.indexOf(t);if(-1===s||-1===n)return void this.setSingle(t);let[a,c]=s<=n?[s,n]:[n,s],h=i?.additive?new Set(this._selected):new Set;for(let t=a;t<=c;t++){let i=r[t];this.isSelectable(i)&&h.add(i)}this.commit(h)}selectAll(){let t=new Set;for(let i of this.options.orderedIds())this.isSelectable(i)&&t.add(i);(0!==t.size||0!==this._selected.size)&&this.commit(t)}clear(){0!==this._selected.size&&(this._anchorId=void 0,this.commit(new Set))}pruneTo(t){let i="function"==typeof t?t:i=>t.has(i),r=!1,o=new Set;for(let t of this._selected)i(t)?o.add(t):r=!0;null==this._anchorId||i(this._anchorId)||(this._anchorId=void 0),r&&this.commit(o)}};let VirtualScrollController=class VirtualScrollController{constructor(t,i){this.host=t,this.options=i,this._scrolling=!1,t.addController(this)}hostConnected(){}hostDisconnected(){this._scrolling=!1}scrollToIndex(t,i){if(this._scrolling)return;this._scrolling=!0;let r=i?.restoreFocus??!0;this.host.updateComplete.then(()=>{let i=this.options.getVirtualizer(),o=this.options.getContainer?.();if(null==i){this._scrolling=!1;return}let s=()=>{r&&null!=o&&document.activeElement!==o&&o.focus(),this._scrolling=!1},n=0===t,a=t===this.options.getCount()-1;n||a?requestAnimationFrame(()=>{n?i.scrollTop=0:i.scrollTop=i.scrollHeight,requestAnimationFrame(s)}):requestAnimationFrame(()=>{let r=i.scrollToIndex?.(t,"nearest");null!=r&&"function"==typeof r.then?r.then(s):requestAnimationFrame(s)})},()=>{this._scrolling=!1})}async kickAfterFirstLayout(t){let i=this.options.getVirtualizer();null!=i&&(await i.layoutComplete,t())}};let VirtualCollectionController=class VirtualCollectionController{constructor(t,i){this.host=t,this.options=i,t.addController(this),this.index=new CollectionIndexController(t,{getItems:i.getItems,getItemId:i.getItemId}),this.scroll=new VirtualScrollController(t,{getVirtualizer:i.getVirtualizer,getContainer:i.getContainer,getCount:()=>this.index.size}),this.selection=new SelectionController(t,{mode:i.mode,orderedIds:()=>this.index.ids(),isSelectable:null!=i.isSelectable?t=>this.isSelectable(t):void 0,onChange:i.onSelectionChange}),this.focus=new FocusController(t,{index:this.index,scroll:this.scroll,strategy:i.focusStrategy,getContainer:i.getContainer}),this.keyboard=new KeyboardNavController(t,{index:this.index,focus:this.focus,selection:this.selection,mode:i.mode??(()=>"single"),pageSize:i.pageSize,selectionFollowsFocus:i.selectionFollowsFocus,onActivate:i.onActivate,onUnhandledKey:i.onUnhandledKey})}hostConnected(){}hostDisconnected(){}hostUpdated(){this.seedAnchor()}seedAnchor(){if("multi"!==this.selection.mode||null!=this.selection.anchorId)return;let t=this.focus.focusedId;null!=t&&this.selection.setAnchor(t)}isSelectable(t){let i=this.options.isSelectable;if(null==i)return!0;let r=this.index.itemFor(t);return null!=r&&i(r)}onItemsChanged(){this.index.rebuild(),this.focus.reconcile(),this.selection.pruneTo(t=>this.index.has(t))}handleKeydown(t){return this.keyboard.handleKeydown(t)}};let rB=tR`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;tR`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${rB}
	}
`;let rF=tR`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,rN=tR`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;tR`
	:focus-visible {
		${rF}
	}
`;let rU=tR`
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
`;tR`
	* {
		box-sizing: border-box;
	}
`,tR`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${rF}
	}
	a:hover {
		text-decoration: underline;
	}
`;let rq=tR`
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
`;tR`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`,tR`
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
`,tR`
	:host {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}
`,tR`
	:host {
		--gl-metadata-bar-bg: color-mix(in srgb, var(--color-background) 95%, var(--color-foreground) 5%);
		--gl-metadata-bar-border: var(--vscode-sideBarSectionHeader-border, var(--color-foreground--25));
		--gl-metadata-bar-min-height: 2.94rem;
	}
`;function rV(t,i,r,o){var s,n=arguments.length,a=n<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(n<3?s(a):n>3?s(i,r,a):s(i,r))||a);return n>3&&a&&Object.defineProperty(i,r,a),a}let RangeChangedEvent=class RangeChangedEvent extends Event{constructor(t){super(RangeChangedEvent.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}};RangeChangedEvent.eventName="rangeChanged";let VisibilityChangedEvent=class VisibilityChangedEvent extends Event{constructor(t){super(VisibilityChangedEvent.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}};VisibilityChangedEvent.eventName="visibilityChanged";let UnpinnedEvent=class UnpinnedEvent extends Event{constructor(){super(UnpinnedEvent.eventName,{bubbles:!1})}};UnpinnedEvent.eventName="unpinned";let ScrollerShim=class ScrollerShim{constructor(t){this._element=null;let i=t??window;this._node=i,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}};let ScrollerController=class ScrollerController extends ScrollerShim{constructor(t,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let r=this._node;this._originalScrollTo=r.scrollTo,this._originalScrollBy=r.scrollBy,this._originalScroll=r.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return null!==this._destination}scrollTo(t,i){this._scrollTo("number"==typeof t&&"number"==typeof i?{left:t,top:i}:t)}scrollBy(t,i){let r="number"==typeof t&&"number"==typeof i?{left:t,top:i}:t;void 0!==r.top&&(r.top+=this.scrollTop),void 0!==r.left&&(r.left+=this.scrollLeft),this._scrollTo(r)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,i=null,r=null){null!==this._end&&this._end(),"smooth"===t.behavior?(this._setDestination(t),this._retarget=i,this._end=r):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:i,left:r}=t;return i=void 0===i?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),r=void 0===r?void 0:Math.max(0,Math.min(r,this.maxScrollLeft)),(null===this._destination||r!==this._destination.left||i!==this._destination.top)&&(this.__destination={top:i,left:r,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,i,r){return this._scrollTo(t,i,r),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(null!==this._destination){let{scrollTop:t,scrollLeft:i}=this,{top:r,left:o}=this._destination;r=Math.min(r||0,this.maxScrollTop);let s=Math.abs((o=Math.min(o||0,this.maxScrollLeft))-i);1>Math.abs(r-t)&&s<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),0===this._clients.size&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),1===this._clients.size&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};let rH="u">typeof window?window.ResizeObserver:void 0,rK=Symbol("virtualizerRef"),rW="virtualizer-sizer";let Virtualizer=class Virtualizer{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);let i=t.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new rH(()=>this._hostElementSizeChanged()),this._childrenRO=new rH(this._childrenSizeChanged.bind(this))}_initHostElement(t){let i=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),i[rK]=this}connected(){this._initObservers();let t=this._isScroller;this._clippingAncestors=function(t,i=!1){let r=!1;return(function(t,i=!1){let r=[],o=i?t:rZ(t);for(;null!==o;)r.push(o),o=rZ(o);return r})(t,i).filter(t=>{if(r)return!1;let i=getComputedStyle(t);return r="fixed"===i.position,"visible"!==i.overflow})}(this._hostElement,t),this._scrollerController=new ScrollerController(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){let t=this._hostElement;if(!this._sizer){let i=t.querySelector(`[${rW}]`);i||((i=document.createElement("div")).setAttribute(rW,""),t.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(rW,""),this._sizer=i}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;let i=t.type||n;if("function"==typeof i&&this._layout instanceof i){let i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let i,r;if("function"==typeof t.type){r=t.type;let o={...t};delete o.type,i=o}else i=t;void 0===r&&(n=r=(await Promise.resolve().then(w.bind(w,285))).FlowLayout),this._layout=new r(t=>this._handleLayoutMessage(t),i),this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){let t=window.performance.now(),i=t-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(i=>i.startTime>=this._benchmarkStart&&i.startTime<t).reduce((t,i)=>t+i.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:r}}return null}_measureChildren(){let t={},i=this._children,r=this._measureChildOverride||this._measureChild;for(let o=0;o<i.length;o++){let s=i[o],n=this._first+o;(this._itemsChanged||this._toBeMeasured.has(s))&&(t[n]=r.call(this,s,this._items[n]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){var i;let r,{width:o,height:s}=t.getBoundingClientRect();return Object.assign({width:o,height:s},(i=t,{marginTop:rG((r=window.getComputedStyle(i)).marginTop),marginRight:rG(r.marginRight),marginBottom:rG(r.marginBottom),marginLeft:rG(r.marginLeft)}))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;let{_rangeChanged:i,_itemsChanged:r}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||r)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch{}window.performance.mark("uv-start")}!1===this._scrollerController.correctingScrollError&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){"scroll"===t.type&&(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent()}_handleLayoutMessage(t){"stateChanged"===t.type?this._updateDOM(t):"visibilityChanged"===t.type?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):"unpinned"===t.type&&this._hostElement.dispatchEvent(new UnpinnedEvent)}get _children(){let t=[],i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(rW)||t.push(i),i=i.nextElementSibling;return t}_updateView(){let t=this._hostElement,i=this._scrollerController?.element,r=this._layout;if(t&&i&&r){let o,s,n,a,c=t.getBoundingClientRect();o=0,s=0,n=window.innerHeight,a=window.innerWidth;let h=this._clippingAncestors.map(t=>t.getBoundingClientRect());for(let t of(h.unshift(c),h))o=Math.max(o,t.top),s=Math.max(s,t.left),n=Math.min(n,t.bottom),a=Math.min(a,t.right);let p=i.getBoundingClientRect(),u={left:c.left-p.left,top:c.top-p.top},g={width:i.scrollWidth,height:i.scrollHeight},f=o-c.top+t.scrollTop,m=s-c.left+t.scrollLeft;r.viewportSize={width:Math.max(0,a-s),height:Math.max(0,n-o)},r.viewportScroll={top:f,left:m},r.totalScrollSize=g,r.offsetWithinScroller=u}}_sizeHostElement(t){let i=t&&null!==t.width?Math.min(82e5,t.width):0,r=t&&null!==t.height?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{let t=this._hostElement.style;t.minWidth=i?`${i}px`:"100%",t.minHeight=r?`${r}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:t,left:i,width:r,height:o,xOffset:s,yOffset:n},a)=>{let c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${t}px)`,void 0!==r&&(c.style.width=r+"px"),void 0!==o&&(c.style.height=o+"px"),c.style.left=void 0===s?null:s+"px",c.style.top=void 0===n?null:n+"px")})}async _adjustRange(t){let{_first:i,_last:r,_firstVisible:o,_lastVisible:s}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==r,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==s}_correctScrollError(){if(this._scrollError){let{scrollTop:t,scrollLeft:i}=this._scrollerController,{top:r,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-r,left:i-o})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),"smooth"===t.behavior){let i=this._layout.getScrollIntoViewCoordinates(t),{behavior:r}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:r}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){let{index:i}=this._scrollIntoViewTarget||{};i&&t?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new RangeChangedEvent({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new VisibilityChangedEvent({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,i)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){null!==this._layoutCompleteRejecter&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&null===this._pendingLayoutComplete&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){null!==this._layoutCompleteResolver&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(let i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function rG(t){let i=t?parseFloat(t):NaN;return Number.isNaN(i)?0:i}function rZ(t){if(null!==t.assignedSlot)return t.assignedSlot;if(null!==t.parentElement)return t.parentElement;let i=t.parentNode;return i&&i.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&i.host||null}let rQ=t=>t,rX=(t,i)=>tr`${i}: ${JSON.stringify(t,null,2)}`;let VirtualizeDirective=class VirtualizeDirective extends async_directive_f{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>rX(t,i+this._first),this._keyFunction=(t,i)=>rQ(t,this._first),this._items=[],2!==t.type)throw Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);let i=[];if(this._first>=0&&this._last>=this._first)for(let t=this._first;t<=this._last;t++)i.push(this._items[t]);return rz(i,this._keyFunction,this._renderItem)}update(t,[i]){this._setFunctions(i);let r=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(t,i):this._initialize(t,i),r?ts:this.render()}async _updateVirtualizerConfig(t,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){let r=t.parentNode;this._makeVirtualizer(r,i)}this._virtualizer.items=this._items}_setFunctions(t){let{renderItem:i,keyFunction:r}=t;i&&(this._renderItem=(t,r)=>i(t,r+this._first)),r&&(this._keyFunction=(t,i)=>r(t,i+this._first))}_makeVirtualizer(t,i){this._virtualizer&&this._virtualizer.disconnected();let{layout:r,scroller:o,items:s}=i;this._virtualizer=new Virtualizer({hostElement:t,layout:r,scroller:o}),this._virtualizer.items=s,this._virtualizer.connected()}_initialize(t,i){let r=t.parentNode;r&&1===r.nodeType&&(r.addEventListener("rangeChanged",t=>{this._first=t.first,this._last=t.last,this.setValue(this.render())}),this._makeVirtualizer(r,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}};let rJ=eV(VirtualizeDirective);let LitVirtualizer=class LitVirtualizer extends lit_element_i{constructor(){super(...arguments),this.items=[],this.renderItem=rX,this.keyFunction=rQ,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:t,renderItem:i,keyFunction:r,layout:o,scroller:s}=this;return tr`${rJ({items:t,renderItem:i,keyFunction:r,layout:o,scroller:s})}`}element(t){return this[rK]?.element(t)}get layoutComplete(){return this[rK]?.layoutComplete}scrollToIndex(t,i="start"){this.element(t)?.scrollIntoView({block:i})}};rV([tY({attribute:!1})],LitVirtualizer.prototype,"items",void 0),rV([tY()],LitVirtualizer.prototype,"renderItem",void 0),rV([tY()],LitVirtualizer.prototype,"keyFunction",void 0),rV([tY({attribute:!1})],LitVirtualizer.prototype,"layout",void 0),rV([tY({reflect:!0,type:Boolean})],LitVirtualizer.prototype,"scroller",void 0),customElements.define("lit-virtualizer",LitVirtualizer);let rY=navigator?.userAgentData?.platform,r0=navigator.userAgent;"Linux"===rY||r0.includes("Linux");let r1="macOS"===rY||r0.includes("Macintosh");function r2(){return r1?"⌥":"Alt"}"Windows"===rY||r0.includes("Windows");let r5=tR`
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
`,r3=tR`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;let ModifierKeysTracker=class ModifierKeysTracker{constructor(){this._altKey=!1,this._shiftKey=!1,this._ctrlKey=!1,this._metaKey=!1,this._hosts=new Set,this._listening=!1,this._onKey=t=>{let i=t.altKey||"keydown"===t.type&&"Alt"===t.key,r=t.shiftKey||"keydown"===t.type&&"Shift"===t.key,o=t.ctrlKey||"keydown"===t.type&&"Control"===t.key,s=t.metaKey||"keydown"===t.type&&"Meta"===t.key,n=("keyup"!==t.type||"Alt"!==t.key)&&i,a=("keyup"!==t.type||"Shift"!==t.key)&&r,c=("keyup"!==t.type||"Control"!==t.key)&&o,h=("keyup"!==t.type||"Meta"!==t.key)&&s;(this._altKey!==n||this._shiftKey!==a||this._ctrlKey!==c||this._metaKey!==h)&&(this._altKey=n,this._shiftKey=a,this._ctrlKey=c,this._metaKey=h,this._notify())},this._onPointer=t=>{(this._altKey!==t.altKey||this._shiftKey!==t.shiftKey||this._ctrlKey!==t.ctrlKey||this._metaKey!==t.metaKey)&&(this._altKey=t.altKey,this._shiftKey=t.shiftKey,this._ctrlKey=t.ctrlKey,this._metaKey=t.metaKey,this._notify())},this._onVisibilityChange=()=>{"hidden"===document.visibilityState&&this._reset()}}get altKey(){return this._altKey}get shiftKey(){return this._shiftKey}get ctrlKey(){return this._ctrlKey}get metaKey(){return this._metaKey}subscribe(t){return this._hosts.add(t),this._listening||this._start(),()=>{this._hosts.delete(t),0===this._hosts.size&&this._stop()}}_start(){this._listening=!0,window.addEventListener("keydown",this._onKey,{capture:!0}),window.addEventListener("keyup",this._onKey,{capture:!0}),window.addEventListener("mousemove",this._onPointer,{capture:!0}),window.addEventListener("mouseover",this._onPointer,{capture:!0}),document.addEventListener("visibilitychange",this._onVisibilityChange)}_stop(){this._listening=!1,window.removeEventListener("keydown",this._onKey,{capture:!0}),window.removeEventListener("keyup",this._onKey,{capture:!0}),window.removeEventListener("mousemove",this._onPointer,{capture:!0}),window.removeEventListener("mouseover",this._onPointer,{capture:!0}),document.removeEventListener("visibilitychange",this._onVisibilityChange),this._reset()}_reset(){let t=this._altKey||this._shiftKey||this._ctrlKey||this._metaKey;this._altKey=this._shiftKey=this._ctrlKey=this._metaKey=!1,t&&this._notify()}_notify(){for(let t of this._hosts)t.requestUpdate()}};let r4=new ModifierKeysTracker;let ModifierKeysController=class ModifierKeysController{constructor(t){this.host=t,t.addController(this)}get altKey(){return r4.altKey}get shiftKey(){return r4.shiftKey}get ctrlKey(){return r4.ctrlKey}get metaKey(){return r4.metaKey}hostConnected(){this._unsubscribe=r4.subscribe(this.host)}hostDisconnected(){this._unsubscribe?.(),this._unsubscribe=void 0}};function r7(t){return t?.includes(`
`)?rP(t.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):t}var r6=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}},r8=tR`
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
`;let r9=new Set,oe=new Map,ot="ltr",oi="en",or="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(or){let t=new MutationObserver(os);ot=document.documentElement.dir||"ltr",oi=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function oo(...t){t.map(t=>{let i=t.$code.toLowerCase();oe.has(i)?oe.set(i,Object.assign(Object.assign({},oe.get(i)),t)):oe.set(i,t),a||(a=t)}),os()}function os(){or&&(ot=document.documentElement.dir||"ltr",oi=document.documentElement.lang||navigator.language),[...r9.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){r9.add(this.host)}hostDisconnected(){r9.delete(this.host)}dir(){return`${this.host.dir||ot}`.toLowerCase()}lang(){return`${this.host.lang||oi}`.toLowerCase()}getTranslationData(t){var i,r;let o;try{o=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let s=o.language.toLowerCase(),n=null!=(r=null==(i=o.region)?void 0:i.toLowerCase())?r:"",a=oe.get(`${s}-${n}`),c=oe.get(s);return{locale:o,language:s,region:n,primary:a,secondary:c}}exists(t,i){var r;let{primary:o,secondary:s}=this.getTranslationData(null!=(r=i.lang)?r:this.lang());return i=Object.assign({includeFallback:!1},i),!!o&&!!o[t]||!!s&&!!s[t]||!!i.includeFallback&&!!a&&!!a[t]}term(t,...i){let r,{primary:o,secondary:s}=this.getTranslationData(this.lang());if(o&&o[t])r=o[t];else if(s&&s[t])r=s[t];else{if(!a||!a[t])return String(t);r=a[t]}return"function"==typeof r?r(...i):r}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,i)}};var on={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",clearEntry:"Clear entry",close:"Close",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,i)=>`Go to slide ${t} of ${i}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",moreOptions:"More Options",mute:"Mute",nextSlide:"Next slide",nextVideo:"Next Video",numCharacters:t=>1===t?"1 character":`${t} characters`,numCharactersRemaining:t=>1===t?"1 character remaining":`${t} characters remaining`,numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousSlide:"Previous slide",previousVideo:"Previous video",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,i)=>`${t} of ${i}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",zoomIn:"Zoom in",zoomOut:"Zoom out"};oo(on);var oa=class extends LocalizeController{};oo(on);var ol=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,oh=t=>{throw TypeError(t)},od=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?oc(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&ol(i,r,n),n},op=(t,i,r)=>i.has(t)||oh("Cannot "+r),ou=tR`
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
`,og=class extends lit_element_i{constructor(){let t;super(),(t=_).has(this)?oh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(this):t.set(this,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,i)=>{if(this.internals?.states)try{i?this.internals.states.add(t):this.internals.states.delete(t)}catch(t){if(String(t).includes("must start with '--'"));else throw t}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{}for(let[t,i]of(this.customStates.set("wa-defined",!0),this.constructor.elementProperties))"inherit"===i.default&&void 0!==i.initial&&"string"==typeof t&&this.customStates.set(`initial-${t}-${i.initial}`,!0)}static get styles(){return[ou,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))}attributeChangedCallback(t,i,r){let o,s;if(op(this,o=_,"read from private field"),s?!s.call(this):!o.get(this)){let t,i;this.constructor.elementProperties.forEach((t,i)=>{t.reflect&&null!=this[i]&&this.initialReflectedProperties.set(i,this[i])}),op(this,t=_,"write to private field"),i?i.call(this,!0):t.set(this,!0)}super.attributeChangedCallback(t,i,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((i,r)=>{t.has(r)&&null==this[r]&&(this[r]=i)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(t){if(this.didSSR&&!this.hasUpdated){let i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=t,this.dispatchEvent(i)}throw t}}relayNativeEvent(t,i){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...i}))}};_=new WeakMap,od([tY()],og.prototype,"dir",2),od([tY()],og.prototype,"lang",2),od([tY({type:Boolean,reflect:!0,attribute:"did-ssr"})],og.prototype,"didSSR",2);let of=Math.min,om=Math.max,ob=Math.round,o_=Math.floor,ov=t=>({x:t,y:t}),oy={left:"right",right:"left",bottom:"top",top:"bottom"};function ow(t,i){return"function"==typeof t?t(i):t}function ok(t){return t.split("-")[0]}function ox(t){return t.split("-")[1]}function oC(t){return"x"===t?"y":"x"}function o$(t){return"y"===t?"height":"width"}function oE(t){let i=t[0];return"t"===i||"b"===i?"y":"x"}function oS(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}let oA=["left","right"],oI=["right","left"],oz=["top","bottom"],oP=["bottom","top"];function oT(t){let i=ok(t);return oy[i]+t.slice(i.length)}function oj(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function oR(t){let{x:i,y:r,width:o,height:s}=t;return{width:o,height:s,top:r,left:i,right:i+o,bottom:r+s,x:i,y:r}}function oM(t,i,r){let o,{reference:s,floating:n}=t,a=oE(i),c=oC(oE(i)),h=o$(c),p=ok(i),u="y"===a,g=s.x+s.width/2-n.width/2,f=s.y+s.height/2-n.height/2,m=s[h]/2-n[h]/2;switch(p){case"top":o={x:g,y:s.y-n.height};break;case"bottom":o={x:g,y:s.y+s.height};break;case"right":o={x:s.x+s.width,y:f};break;case"left":o={x:s.x-n.width,y:f};break;default:o={x:s.x,y:s.y}}switch(ox(i)){case"start":o[c]-=m*(r&&u?-1:1);break;case"end":o[c]+=m*(r&&u?-1:1)}return o}async function oO(t,i){var r;void 0===i&&(i={});let{x:o,y:s,platform:n,rects:a,elements:c,strategy:h}=t,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:f=!1,padding:m=0}=ow(i,t),b=oj(m),_=c[f?"floating"===g?"reference":"floating":g],v=oR(await n.getClippingRect({element:null==(r=await (null==n.isElement?void 0:n.isElement(_)))||r?_:_.contextElement||await (null==n.getDocumentElement?void 0:n.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),y="floating"===g?{x:o,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await (null==n.getOffsetParent?void 0:n.getOffsetParent(c.floating)),x=await (null==n.isElement?void 0:n.isElement(w))&&await (null==n.getScale?void 0:n.getScale(w))||{x:1,y:1},C=oR(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:h}):y);return{top:(v.top-C.top+b.top)/x.y,bottom:(C.bottom-v.bottom+b.bottom)/x.y,left:(v.left-C.left+b.left)/x.x,right:(C.right-v.right+b.right)/x.x}}let oL=async(t,i,r)=>{let{placement:o="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,c=a.detectOverflow?a:{...a,detectOverflow:oO},h=await (null==a.isRTL?void 0:a.isRTL(i)),p=await a.getElementRects({reference:t,floating:i,strategy:s}),{x:u,y:g}=oM(p,o,h),f=o,m=0,b={};for(let r=0;r<n.length;r++){let _=n[r];if(!_)continue;let{name:v,fn:y}=_,{x:w,y:x,data:C,reset:$}=await y({x:u,y:g,initialPlacement:o,placement:f,strategy:s,middlewareData:b,rects:p,platform:c,elements:{reference:t,floating:i}});u=null!=w?w:u,g=null!=x?x:g,b[v]={...b[v],...C},$&&m<50&&(m++,"object"==typeof $&&($.placement&&(f=$.placement),$.rects&&(p=!0===$.rects?await a.getElementRects({reference:t,floating:i,strategy:s}):$.rects),{x:u,y:g}=oM(p,f,h)),r=-1)}return{x:u,y:g,placement:f,strategy:s,middlewareData:b}},oD=new Set(["left","top"]);async function oB(t,i){let{placement:r,platform:o,elements:s}=t,n=await (null==o.isRTL?void 0:o.isRTL(s.floating)),a=ok(r),c=ox(r),h="y"===oE(r),p=oD.has(a)?-1:1,u=n&&h?-1:1,g=ow(i,t),{mainAxis:f,crossAxis:m,alignmentAxis:b}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&"number"==typeof b&&(m="end"===c?-1*b:b),h?{x:m*u,y:f*p}:{x:f*p,y:m*u}}function oF(){return"u">typeof window}function oN(t){return oV(t)?(t.nodeName||"").toLowerCase():"#document"}function oU(t){var i;return(null==t||null==(i=t.ownerDocument)?void 0:i.defaultView)||window}function oq(t){var i;return null==(i=(oV(t)?t.ownerDocument:t.document)||window.document)?void 0:i.documentElement}function oV(t){return!!oF()&&(t instanceof Node||t instanceof oU(t).Node)}function oH(t){return!!oF()&&(t instanceof Element||t instanceof oU(t).Element)}function oK(t){return!!oF()&&(t instanceof HTMLElement||t instanceof oU(t).HTMLElement)}function oW(t){return!(!oF()||"u"<typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof oU(t).ShadowRoot)}function oG(t){let{overflow:i,overflowX:r,overflowY:o,display:s}=o2(t);return/auto|scroll|overlay|hidden|clip/.test(i+o+r)&&"inline"!==s&&"contents"!==s}function oZ(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}let oQ=/transform|translate|scale|rotate|perspective|filter/,oX=/paint|layout|strict|content/,oJ=t=>!!t&&"none"!==t;function oY(t){let i=oH(t)?o2(t):t;return oJ(i.transform)||oJ(i.translate)||oJ(i.scale)||oJ(i.rotate)||oJ(i.perspective)||!o0()&&(oJ(i.backdropFilter)||oJ(i.filter))||oQ.test(i.willChange||"")||oX.test(i.contain||"")}function o0(){return null==c&&(c="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),c}function o1(t){return/^(html|body|#document)$/.test(oN(t))}function o2(t){return oU(t).getComputedStyle(t)}function o5(t){return oH(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function o3(t){if("html"===oN(t))return t;let i=t.assignedSlot||t.parentNode||oW(t)&&t.host||oq(t);return oW(i)?i.host:i}function o4(t,i,r){var o;void 0===i&&(i=[]),void 0===r&&(r=!0);let s=function t(i){let r=o3(i);return o1(r)?i.ownerDocument?i.ownerDocument.body:i.body:oK(r)&&oG(r)?r:t(r)}(t),n=s===(null==(o=t.ownerDocument)?void 0:o.body),a=oU(s);if(!n)return i.concat(s,o4(s,[],r));{let t=o7(a);return i.concat(a,a.visualViewport||[],oG(s)?s:[],t&&r?o4(t):[])}}function o7(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function o6(t){let i=o2(t),r=parseFloat(i.width)||0,o=parseFloat(i.height)||0,s=oK(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:o,c=ob(r)!==n||ob(o)!==a;return c&&(r=n,o=a),{width:r,height:o,$:c}}function o8(t){return oH(t)?t:t.contextElement}function o9(t){let i=o8(t);if(!oK(i))return ov(1);let r=i.getBoundingClientRect(),{width:o,height:s,$:n}=o6(i),a=(n?ob(r.width):r.width)/o,c=(n?ob(r.height):r.height)/s;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let se=ov(0);function st(t){let i=oU(t);return o0()&&i.visualViewport?{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}:se}function si(t,i,r,o){var s;void 0===i&&(i=!1),void 0===r&&(r=!1);let n=t.getBoundingClientRect(),a=o8(t),c=ov(1);i&&(o?oH(o)&&(c=o9(o)):c=o9(t));let h=(void 0===(s=r)&&(s=!1),o&&(!s||o===oU(a))&&s)?st(a):ov(0),p=(n.left+h.x)/c.x,u=(n.top+h.y)/c.y,g=n.width/c.x,f=n.height/c.y;if(a){let t=oU(a),i=o&&oH(o)?oU(o):o,r=t,s=o7(r);for(;s&&o&&i!==r;){let t=o9(s),i=s.getBoundingClientRect(),o=o2(s),n=i.left+(s.clientLeft+parseFloat(o.paddingLeft))*t.x,a=i.top+(s.clientTop+parseFloat(o.paddingTop))*t.y;p*=t.x,u*=t.y,g*=t.x,f*=t.y,p+=n,u+=a,s=o7(r=oU(s))}}return oR({width:g,height:f,x:p,y:u})}function sr(t,i){let r=o5(t).scrollLeft;return i?i.left+r:si(oq(t)).left+r}function so(t,i){let r=t.getBoundingClientRect();return{x:r.left+i.scrollLeft-sr(t,r),y:r.top+i.scrollTop}}function ss(t,i,r){var o;let s;if("viewport"===i)s=function(t,i){let r=oU(t),o=oq(t),s=r.visualViewport,n=o.clientWidth,a=o.clientHeight,c=0,h=0;if(s){n=s.width,a=s.height;let t=o0();(!t||t&&"fixed"===i)&&(c=s.offsetLeft,h=s.offsetTop)}let p=sr(o);if(p<=0){let t=o.ownerDocument,i=t.body,r=getComputedStyle(i),s="CSS1Compat"===t.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,a=Math.abs(o.clientWidth-i.clientWidth-s);a<=25&&(n-=a)}else p<=25&&(n+=p);return{width:n,height:a,x:c,y:h}}(t,r);else if("document"===i){let i,r,n,a,c,h,p;o=oq(t),i=oq(o),r=o5(o),n=o.ownerDocument.body,a=om(i.scrollWidth,i.clientWidth,n.scrollWidth,n.clientWidth),c=om(i.scrollHeight,i.clientHeight,n.scrollHeight,n.clientHeight),h=-r.scrollLeft+sr(o),p=-r.scrollTop,"rtl"===o2(n).direction&&(h+=om(i.clientWidth,n.clientWidth)-a),s={width:a,height:c,x:h,y:p}}else if(oH(i)){let t,o,n,a,c,h;o=(t=si(i,!0,"fixed"===r)).top+i.clientTop,n=t.left+i.clientLeft,a=oK(i)?o9(i):ov(1),c=i.clientWidth*a.x,h=i.clientHeight*a.y,s={width:c,height:h,x:n*a.x,y:o*a.y}}else{let r=st(t);s={x:i.x-r.x,y:i.y-r.y,width:i.width,height:i.height}}return oR(s)}function sn(t){return"static"===o2(t).position}function sa(t,i){if(!oK(t)||"fixed"===o2(t).position)return null;if(i)return i(t);let r=t.offsetParent;return oq(t)===r&&(r=r.ownerDocument.body),r}function sl(t,i){var r;let o=oU(t);if(oZ(t))return o;if(!oK(t)){let i=o3(t);for(;i&&!o1(i);){if(oH(i)&&!sn(i))return i;i=o3(i)}return o}let s=sa(t,i);for(;s&&(r=s,/^(table|td|th)$/.test(oN(r)))&&sn(s);)s=sa(s,i);return s&&o1(s)&&sn(s)&&!oY(s)?o:s||function(t){let i=o3(t);for(;oK(i)&&!o1(i);){if(oY(i))return i;if(oZ(i))break;i=o3(i)}return null}(t)||o}let sc=async function(t){let i=this.getOffsetParent||sl,r=this.getDimensions,o=await r(t.floating);return{reference:function(t,i,r){let o=oK(i),s=oq(i),n="fixed"===r,a=si(t,!0,n,i),c={scrollLeft:0,scrollTop:0},h=ov(0);if(o||!o&&!n)if(("body"!==oN(i)||oG(s))&&(c=o5(i)),o){let t=si(i,!0,n,i);h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}else s&&(h.x=sr(s));n&&!o&&s&&(h.x=sr(s));let p=!s||o||n?ov(0):so(s,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(t.reference,await i(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},sh={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:i,rect:r,offsetParent:o,strategy:s}=t,n="fixed"===s,a=oq(o),c=!!i&&oZ(i.floating);if(o===a||c&&n)return r;let h={scrollLeft:0,scrollTop:0},p=ov(1),u=ov(0),g=oK(o);if((g||!g&&!n)&&(("body"!==oN(o)||oG(a))&&(h=o5(o)),g)){let t=si(o);p=o9(o),u.x=t.x+o.clientLeft,u.y=t.y+o.clientTop}let f=!a||g||n?ov(0):so(a,h);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+u.x+f.x,y:r.y*p.y-h.scrollTop*p.y+u.y+f.y}},getDocumentElement:oq,getClippingRect:function(t){let{element:i,boundary:r,rootBoundary:o,strategy:s}=t,n=[..."clippingAncestors"===r?oZ(i)?[]:function(t,i){let r=i.get(t);if(r)return r;let o=o4(t,[],!1).filter(t=>oH(t)&&"body"!==oN(t)),s=null,n="fixed"===o2(t).position,a=n?o3(t):t;for(;oH(a)&&!o1(a);){let i=o2(a),r=oY(a);r||"fixed"!==i.position||(s=null),(n?r||s:!(!r&&"static"===i.position&&s&&("absolute"===s.position||"fixed"===s.position)||oG(a)&&!r&&function t(i,r){let o=o3(i);return!(o===r||!oH(o)||o1(o))&&("fixed"===o2(o).position||t(o,r))}(t,a)))?s=i:o=o.filter(t=>t!==a),a=o3(a)}return i.set(t,o),o}(i,this._c):[].concat(r),o],a=ss(i,n[0],s),c=a.top,h=a.right,p=a.bottom,u=a.left;for(let t=1;t<n.length;t++){let r=ss(i,n[t],s);c=om(r.top,c),h=of(r.right,h),p=of(r.bottom,p),u=om(r.left,u)}return{width:h-u,height:p-c,x:u,y:c}},getOffsetParent:sl,getElementRects:sc,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:i,height:r}=o6(t);return{width:i,height:r}},getScale:o9,isElement:oH,isRTL:function(t){return"rtl"===o2(t).direction}};function sd(t,i){return t.x===i.x&&t.y===i.y&&t.width===i.width&&t.height===i.height}let sp=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(i){var r,o;let s,n,{placement:a,rects:c,platform:h,elements:p}=i,{apply:u=()=>{},...g}=ow(t,i),f=await h.detectOverflow(i,g),m=ok(a),b=ox(a),_="y"===oE(a),{width:v,height:y}=c.floating;"top"===m||"bottom"===m?(s=m,n=b===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(n=m,s="end"===b?"top":"bottom");let w=y-f.top-f.bottom,x=v-f.left-f.right,C=of(y-f[s],w),$=of(v-f[n],x),E=!i.middlewareData.shift,A=C,P=$;if(null!=(r=i.middlewareData.shift)&&r.enabled.x&&(P=x),null!=(o=i.middlewareData.shift)&&o.enabled.y&&(A=w),E&&!b){let t=om(f.left,0),i=om(f.right,0),r=om(f.top,0),o=om(f.bottom,0);_?P=v-2*(0!==t||0!==i?t+i:om(f.left,f.right)):A=y-2*(0!==r||0!==o?r+o:om(f.top,f.bottom))}await u({...i,availableWidth:P,availableHeight:A});let T=await h.getDimensions(p.floating);return v!==T.width||y!==T.height?{reset:{rects:!0}}:{}}}};function su(t){var i=t;for(let t=i;t;t=sg(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=sg(i);t;t=sg(t)){if(!(t instanceof Element))continue;let i=getComputedStyle(t);if("contents"!==i.display&&("static"!==i.position||oY(i)||"BODY"===t.tagName))return t}return null}function sg(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}let sf=eV(class extends directive_i{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),i)i[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(i)}let r=t.element.classList;for(let t of this.st)t in i||(r.remove(t),this.st.delete(t));for(let t in i){let o=!!i[t];o===this.st.has(t)||this.nt?.has(t)||(o?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return ts}});function sm(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t instanceof Element)}var sb=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),s_=class extends og{constructor(){super(...arguments),this.localize=new oa(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,s=0,n=0,a=0,c=0,h=0,p=0,u=0;r?t.top<i.top?(o=t.left,s=t.bottom,n=t.right,a=t.bottom,c=i.left,h=i.top,p=i.right,u=i.top):(o=i.left,s=i.bottom,n=i.right,a=i.bottom,c=t.left,h=t.top,p=t.right,u=t.top):t.left<i.left?(o=t.right,s=t.top,n=i.left,a=i.top,c=t.right,h=t.bottom,p=i.left,u=i.bottom):(o=i.right,s=i.top,n=t.left,a=t.top,c=i.right,h=i.bottom,p=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||sm(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=function(t,i,r,o){let s;void 0===o&&(o={});let{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=o,u=o8(t),g=n||a?[...u?o4(u):[],...i?o4(i):[]]:[];g.forEach(t=>{n&&t.addEventListener("scroll",r,{passive:!0}),a&&t.addEventListener("resize",r)});let f=u&&h?function(t,i){let r,o=null,s=oq(t);function n(){var t;clearTimeout(r),null==(t=o)||t.disconnect(),o=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),n();let p=t.getBoundingClientRect(),{left:u,top:g,width:f,height:m}=p;if(c||i(),!f||!m)return;let b={rootMargin:-o_(g)+"px "+-o_(s.clientWidth-(u+f))+"px "+-o_(s.clientHeight-(g+m))+"px "+-o_(u)+"px",threshold:om(0,of(1,h))||1},_=!0;function v(i){let o=i[0].intersectionRatio;if(o!==h){if(!_)return a();o?a(!1,o):r=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||sd(p,t.getBoundingClientRect())||a(),_=!1}try{o=new IntersectionObserver(v,{...b,root:s.ownerDocument})}catch{o=new IntersectionObserver(v,b)}o.observe(t)}(!0),n}(u,r):null,m=-1,b=null;c&&(b=new ResizeObserver(t=>{let[o]=t;o&&o.target===u&&b&&i&&(b.unobserve(i),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var t;null==(t=b)||t.observe(i)})),r()}),u&&!p&&b.observe(u),i&&b.observe(i));let _=p?si(t):null;return p&&function i(){let o=si(t);_&&!sd(_,o)&&r(),_=o,s=requestAnimationFrame(i)}(),r(),()=>{var t;g.forEach(t=>{n&&t.removeEventListener("scroll",r),a&&t.removeEventListener("resize",r)}),null==f||f(),null==(t=b)||t.disconnect(),b=null,p&&cancelAnimationFrame(s)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){var t,i,r,o,s,n;let a,c,h,p,u;if(!this.active||!this.anchorEl||!this.popup)return;let g=[{name:"offset",options:t={mainAxis:this.distance,crossAxis:this.skidding},async fn(i){var r,o;let{x:s,y:n,placement:a,middlewareData:c}=i,h=await oB(i,t);return a===(null==(r=c.offset)?void 0:r.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:a}}}}];this.sync?g.push(sp({apply:({rects:t})=>{let i="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=i?`${t.reference.width}px`:"",this.popup.style.height=r?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),sb&&!sm(this.anchor)&&"scroll"===this.boundary&&(a=o4(this.anchorEl).filter(t=>t instanceof Element)),this.flip&&g.push({name:"flip",options:i={boundary:this.flipBoundary||a,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(t){var r,o,s,n,a,c,h,p;let u,g,f,{placement:m,middlewareData:b,rects:_,initialPlacement:v,platform:y,elements:w}=t,{mainAxis:x=!0,crossAxis:C=!0,fallbackPlacements:$,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:P=!0,...T}=ow(i,t);if(null!=(r=b.arrow)&&r.alignmentOffset)return{};let j=ok(m),M=oE(v),O=ok(v)===v,D=await (null==y.isRTL?void 0:y.isRTL(w.floating)),B=$||(O||!P?[oT(v)]:(u=oT(v),[oS(v),u,oS(u)])),F="none"!==A;!$&&F&&B.push(...(g=ox(v),f=function(t,i,r){switch(t){case"top":case"bottom":if(r)return i?oI:oA;return i?oA:oI;case"left":case"right":return i?oz:oP;default:return[]}}(ok(v),"start"===A,D),g&&(f=f.map(t=>t+"-"+g),P&&(f=f.concat(f.map(oS)))),f));let N=[v,...B],U=await y.detectOverflow(t,T),q=[],V=(null==(o=b.flip)?void 0:o.overflows)||[];if(x&&q.push(U[j]),C){let t,i,r,o,s=(c=m,h=_,void 0===(p=D)&&(p=!1),t=ox(c),r=o$(i=oC(oE(c))),o="x"===i?t===(p?"end":"start")?"right":"left":"start"===t?"bottom":"top",h.reference[r]>h.floating[r]&&(o=oT(o)),[o,oT(o)]);q.push(U[s[0]],U[s[1]])}if(V=[...V,{placement:m,overflows:q}],!q.every(t=>t<=0)){let t=((null==(s=b.flip)?void 0:s.index)||0)+1,i=N[t];if(i&&("alignment"!==C||M===oE(i)||V.every(t=>oE(t.placement)!==M||t.overflows[0]>0)))return{data:{index:t,overflows:V},reset:{placement:i}};let r=null==(n=V.filter(t=>t.overflows[0]<=0).sort((t,i)=>t.overflows[1]-i.overflows[1])[0])?void 0:n.placement;if(!r)switch(E){case"bestFit":{let t=null==(a=V.filter(t=>{if(F){let i=oE(t.placement);return i===M||"y"===i}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,i)=>t+i,0)]).sort((t,i)=>t[1]-i[1])[0])?void 0:a[0];t&&(r=t);break}case"initialPlacement":r=v}if(m!==r)return{reset:{placement:r}}}return{}}}),this.shift&&g.push({name:"shift",options:r={boundary:this.shiftBoundary||a,padding:this.shiftPadding},async fn(t){let{x:i,y:o,placement:s,platform:n}=t,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:t=>{let{x:i,y:r}=t;return{x:i,y:r}}},...p}=ow(r,t),u={x:i,y:o},g=await n.detectOverflow(t,p),f=oE(ok(s)),m=oC(f),b=u[m],_=u[f];if(a){let t="y"===m?"top":"left",i="y"===m?"bottom":"right",r=b+g[t],o=b-g[i];b=om(r,of(b,o))}if(c){let t="y"===f?"top":"left",i="y"===f?"bottom":"right",r=_+g[t],o=_-g[i];_=om(r,of(_,o))}let v=h.fn({...t,[m]:b,[f]:_});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[m]:a,[f]:c}}}}}),this.autoSize?g.push(sp({boundary:this.autoSizeBoundary||a,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:i})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&g.push({name:"arrow",options:c={element:this.arrowEl,padding:this.arrowPadding},async fn(t){let{x:i,y:r,placement:o,rects:s,platform:n,elements:a,middlewareData:h}=t,{element:p,padding:u=0}=ow(c,t)||{};if(null==p)return{};let g=oj(u),f={x:i,y:r},m=oC(oE(o)),b=o$(m),_=await n.getDimensions(p),v="y"===m,y=v?"clientHeight":"clientWidth",w=s.reference[b]+s.reference[m]-f[m]-s.floating[b],x=f[m]-s.reference[m],C=await (null==n.getOffsetParent?void 0:n.getOffsetParent(p)),$=C?C[y]:0;$&&await (null==n.isElement?void 0:n.isElement(C))||($=a.floating[y]||s.floating[b]);let E=$/2-_[b]/2-1,A=of(g[v?"top":"left"],E),P=of(g[v?"bottom":"right"],E),T=$-_[b]-P,j=$/2-_[b]/2+(w/2-x/2),M=om(A,of(j,T)),O=!h.arrow&&null!=ox(o)&&j!==M&&s.reference[b]/2-(j<A?A:P)-_[b]/2<0,D=O?j<A?j-A:j-T:0;return{[m]:f[m]+D,data:{[m]:M,centerOffset:j-M-D,...O&&{alignmentOffset:D}},reset:O}}});let f=sb?t=>sh.getOffsetParent(t,su):sh.getOffsetParent;(o=this.anchorEl,s=this.popup,n={placement:this.placement,middleware:g,strategy:sb?"absolute":"fixed",platform:{...sh,getOffsetParent:f}},h=new Map,u={...(p={platform:sh,...n}).platform,_c:h},oL(o,s,{...p,platform:u})).then(({x:t,y:i,middlewareData:r,placement:o})=>{let s="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${i}px`}),this.arrow){let t=r.arrow.x,i=r.arrow.y,o="",a="",c="",h="";if("start"===this.arrowPlacement){let r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof i?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?r:"",h=s?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":r,h=s?r:"",c="number"==typeof i?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof i?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof t?`${t}px`:"",o="number"==typeof i?`${i}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:c,left:h,[n]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new r6)}render(){return tr`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${sf({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${sf({popup:!0,"popup-active":this.active,"popup-fixed":!sb,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?tr`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};s_.css=r8,od([t2(".popup")],s_.prototype,"popup",2),od([t2(".arrow")],s_.prototype,"arrowEl",2),od([tY()],s_.prototype,"anchor",2),od([tY({type:Boolean,reflect:!0})],s_.prototype,"active",2),od([tY({reflect:!0})],s_.prototype,"placement",2),od([tY()],s_.prototype,"boundary",2),od([tY({type:Number})],s_.prototype,"distance",2),od([tY({type:Number})],s_.prototype,"skidding",2),od([tY({type:Boolean})],s_.prototype,"arrow",2),od([tY({attribute:"arrow-placement"})],s_.prototype,"arrowPlacement",2),od([tY({attribute:"arrow-padding",type:Number})],s_.prototype,"arrowPadding",2),od([tY({type:Boolean})],s_.prototype,"flip",2),od([tY({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],s_.prototype,"flipFallbackPlacements",2),od([tY({attribute:"flip-fallback-strategy"})],s_.prototype,"flipFallbackStrategy",2),od([tY({type:Object})],s_.prototype,"flipBoundary",2),od([tY({attribute:"flip-padding",type:Number})],s_.prototype,"flipPadding",2),od([tY({type:Boolean})],s_.prototype,"shift",2),od([tY({type:Object})],s_.prototype,"shiftBoundary",2),od([tY({attribute:"shift-padding",type:Number})],s_.prototype,"shiftPadding",2),od([tY({attribute:"auto-size"})],s_.prototype,"autoSize",2),od([tY()],s_.prototype,"sync",2),od([tY({type:Object})],s_.prototype,"autoSizeBoundary",2),od([tY({attribute:"auto-size-padding",type:Number})],s_.prototype,"autoSizePadding",2),od([tY({attribute:"hover-bridge",type:Boolean})],s_.prototype,"hoverBridge",2),s_=od([tX("wa-popup")],s_);var sv=Object.defineProperty,sy=Object.getOwnPropertyDescriptor,sw=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?sy(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&sv(i,r,n),n};let sk=["top","right","bottom","left","top-left","top-right","bottom-left","bottom-right"],sx=class extends GlElement{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.autoSizeVertical=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.suppressed=!1,this.handleReposition=()=>{let t=this.popup?.getAttribute("data-current-placement");null!=t&&t!==this._resolvedPlacement&&(this._resolvedPlacement=t)},this.handleResizePointerDown=t=>{if(0!==t.button)return;let i=t.currentTarget,r=i.dataset.handle;if(null==r)return;t.preventDefault();let o="right"===r||"top-right"===r||"bottom-right"===r,s="left"===r||"top-left"===r||"bottom-left"===r,n="bottom"===r||"bottom-left"===r||"bottom-right"===r,a="top"===r||"top-left"===r||"top-right"===r,c=this.body,h=t.clientX,p=t.clientY,u=c.getBoundingClientRect(),g=u.width,f=u.height;i.setPointerCapture(t.pointerId),i.classList.add("popover__resizer--active"),this.toggleAttribute("dragging",!0);let m=t=>{let i=t.clientX-h,r=t.clientY-p;o?c.style.width=`${Math.max(0,g+i)}px`:s&&(c.style.width=`${Math.max(0,g-i)}px`),n?c.style.height=`${Math.max(0,f+r)}px`:a&&(c.style.height=`${Math.max(0,f-r)}px`),this.popup?.reposition()},b=()=>{this.toggleAttribute("dragging",!1),i.classList.remove("popover__resizer--active"),i.removeEventListener("pointermove",m),i.removeEventListener("lostpointercapture",b),i.removeEventListener("pointerup",b)};i.addEventListener("pointermove",m,{passive:!0}),i.addEventListener("lostpointercapture",b),i.addEventListener("pointerup",b)},this.handleTriggerBlur=t=>{this.open&&(this.hasTrigger("focus")||this.hasTrigger("focus-visible"))&&(t.relatedTarget&&this.contains(t.relatedTarget)||this.hide())},this.handleTriggerClick=t=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(t.composedPath().includes(this.body))return;this.hide()}else this._skipHideOnClick=!1,this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=t=>{let i=this.hasTrigger("focus")||this.hasTrigger("focus-visible");this.hasTrigger("click")&&i&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1,!this.open||"hover"!==this._triggeredBy||this.hasTrigger("click")||t.composedPath().includes(this.body)||(this.suppressed=!0,this.hide())},this.handleMouseUp=()=>{this.suppressed=!1},this.handleDragStart=()=>{this.suppressed=!0,this.hide()},this.handleDragEnd=()=>{this.suppressed=!1},this.handleTriggerFocus=t=>{let i=this.hasTrigger("focus"),r=this.hasTrigger("focus-visible");if(i||r){if(!i&&r){let i=t.target;if(null==i||"function"!=typeof i.matches||!i.matches(":focus-visible"))return}this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus")}},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handlePopupBlur=t=>{let i=t.composedPath();i.includes(this)||i.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleDocumentMouseDown=t=>{let i=t.composedPath();i.includes(this)||i.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=iA(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){if(clearTimeout(this.hoverTimeout),this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let t=iA(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),t)}}}static closeOthers(t){for(let i of sx.openPopovers)i===t||function(t,i){let r=i;for(;null!=r;){if(r===t)return!0;r=r.parentNode??(r instanceof ShadowRoot?r.host:null)}return!1}(i,t)||i.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}connectedCallback(){super.connectedCallback?.(),this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("dragstart",this.handleDragStart,{capture:!0}),window.addEventListener("dragend",this.handleDragEnd,{capture:!0})}disconnectedCallback(){this.removeEventListener("blur",this.handleTriggerBlur,!0),this.removeEventListener("focus",this.handleTriggerFocus,!0),this.removeEventListener("click",this.handleTriggerClick),this.removeEventListener("mousedown",this.handleTriggerMouseDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("dragstart",this.handleDragStart,{capture:!0}),window.removeEventListener("dragend",this.handleDragEnd,{capture:!0}),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,sx.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),this.updateResizeObserver()}updateResizeObserver(){null!=this.resize?null==this.resizeObserver&&null!=this.body&&(this.resizeObserver=new ResizeObserver(()=>this.popup?.reposition()),this.resizeObserver.observe(this.body)):null!=this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0)}render(){let t=this._resolvedPlacement??this.placement,i=(function(t){if(!t)return[];let i=new Set;for(let r of t.trim().split(/\s+/))switch(r){case"horizontal":i.add("right");break;case"vertical":i.add("bottom");break;case"both":i.add("right"),i.add("bottom"),i.add("bottom-right");break;case"all":for(let t of sk)i.add(t);break;default:sk.includes(r)&&i.add(r)}return[...i]})(this.resize).filter(i=>!function(t,i){let r,o;if(!i)return!1;let[s,n]=i.split("-");switch(s){case"top":r="bottom";break;case"right":r="left";break;case"bottom":r="top";break;case"left":r="right"}let a="left"===s||"right"===s;"start"===n?o=a?"top":"left":"end"===n&&(o=a?"bottom":"right");let c=i=>null!=i&&(t===i||t.startsWith(`${i}-`)||t.endsWith(`-${i}`));return c(r)||c(o)}(i,t));return tr`<wa-popup
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
				${i.map(t=>tr`<div
							class="popover__resizer popover__resizer--${t}"
							role="separator"
							aria-orientation=${"top"===t||"bottom"===t?"horizontal":"vertical"}
							aria-label="Resize"
							data-handle=${t}
							@pointerdown=${this.handleResizePointerDown}
						></div>`)}
			</div>
		</wa-popup>`}async show(t){if(this.open||this.suppressed){"click"===t&&"hover"===this._triggeredBy&&(this._triggeredBy=t);return}return(null==this._triggeredBy||"hover"!==t)&&(this._triggeredBy=t),sx.closeOthers(this),this.open=!0,sx.openPopovers.add(this),iI(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,sx.openPopovers.delete(this),iI(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(t){return this.trigger.split(" ").includes(t)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus")||this.hasTrigger("focus-visible"))&&document.addEventListener("mousedown",this.handleDocumentMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleResizeChange(){this.updateResizeObserver()}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};sx.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sx.openPopovers=new Set,sx.styles=[rq,tR`
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
		`],sw([t2("#popover")],sx.prototype,"body",2),sw([t2("wa-popup")],sx.prototype,"popup",2),sw([tY({reflect:!0})],sx.prototype,"placement",2),sw([tY({type:Object})],sx.prototype,"anchor",2),sw([tY({reflect:!0,type:Boolean})],sx.prototype,"disabled",2),sw([tY({type:Number})],sx.prototype,"distance",2),sw([tY({reflect:!0,type:Boolean})],sx.prototype,"open",2),sw([tY({reflect:!0,type:Boolean})],sx.prototype,"arrow",2),sw([tY({reflect:!0,type:Boolean,attribute:"auto-size-vertical"})],sx.prototype,"autoSizeVertical",2),sw([tY({reflect:!0})],sx.prototype,"resize",2),sw([tY({type:Number})],sx.prototype,"skidding",2),sw([tY()],sx.prototype,"trigger",2),sw([tY({type:Boolean})],sx.prototype,"hoist",2),sw([tY({reflect:!0})],sx.prototype,"appearance",2),sw([t0()],sx.prototype,"suppressed",2),sw([t0()],sx.prototype,"_resolvedPlacement",2),sw([t6("open",{afterFirstUpdate:!0})],sx.prototype,"handleOpenChange",1),sw([t6(["distance","placement","skidding"])],sx.prototype,"handleOptionsChange",1),sw([t6("resize",{afterFirstUpdate:!0})],sx.prototype,"handleResizeChange",1),sw([t6("disabled")],sx.prototype,"handleDisabledChange",1),sx=sw([tX("gl-popover")],sx);var sC=Object.defineProperty,s$=Object.getOwnPropertyDescriptor,sE=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?s$(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&sC(i,r,n),n};let sS=0,sA=[],sI=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.showDelay=500,this.hideDelay=0,this.suppressed=!1,this.open=!1,this.bodyId=`gl-tooltip-${++sS}`,this.onAnchorSlotChange=t=>{let i=t.target.assignedElements({flatten:!0})[0];i!==this.anchorEl&&(this.detachAnchor(),this.attachAnchor(i))},this.onDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&sA.at(-1)===this&&(t.preventDefault(),t.stopPropagation(),this.open=!1)},this.onMouseOver=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!0},this.showDelay))},this.onMouseOut=()=>{this.anchorEl?.matches(":hover")||this.matches(":hover")||(clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(()=>{this.open=!1},this.hideDelay))},this.onFocusIn=()=>{this.disabled||this.suppressed||(clearTimeout(this.hoverTimeout),this.open=!0)},this.onFocusOut=()=>{clearTimeout(this.hoverTimeout),this.open=!1},this.onMouseDown=t=>{this.suppressed=!0,this.open=!1},this.onMouseUp=t=>{this.suppressed=!1},this.onDragStart=t=>{this.suppressed=!0,this.open=!1},this.onDragEnd=t=>{this.suppressed=!1},this.onClick=t=>{this.hideOnClick&&(this.open=!1)}}connectedCallback(){super.connectedCallback?.(),this.eventController=new AbortController;let{signal:t}=this.eventController;this.addEventListener("mouseover",this.onMouseOver,{signal:t}),this.addEventListener("mouseout",this.onMouseOut,{signal:t}),this.addEventListener("focusin",this.onFocusIn,{signal:t}),this.addEventListener("focusout",this.onFocusOut,{signal:t}),this.addEventListener("mousedown",this.onMouseDown,{signal:t}),this.addEventListener("click",this.onClick,{signal:t}),window.addEventListener("mouseup",this.onMouseUp,{signal:t}),window.addEventListener("dragstart",this.onDragStart,{capture:!0,signal:t}),window.addEventListener("dragend",this.onDragEnd,{capture:!0,signal:t})}disconnectedCallback(){this.eventController?.abort(),this.eventController=void 0,this.detachAnchor(),this.unregisterDismissible(),clearTimeout(this.hoverTimeout),super.disconnectedCallback?.()}updated(t){t.has("open")&&(this.open?this.registerDismissible():this.unregisterDismissible()),t.has("disabled")&&this.disabled&&this.open&&(this.open=!1)}attachAnchor(t){null!=t&&(this.anchorEl=t,this.addAriaDescribedBy(t,this.bodyId))}detachAnchor(){null!=this.anchorEl&&(this.removeAriaDescribedBy(this.anchorEl,this.bodyId),this.anchorEl=void 0)}addAriaDescribedBy(t,i){let r=(t.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean);r.includes(i)||(r.push(i),t.setAttribute("aria-describedby",r.join(" ")))}removeAriaDescribedBy(t,i){let r=(t.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean).filter(t=>t!==i);0===r.length?t.removeAttribute("aria-describedby"):t.setAttribute("aria-describedby",r.join(" "))}registerDismissible(){sA.includes(this)||(sA.push(this),document.addEventListener("keydown",this.onDocumentKeyDown,{signal:this.eventController?.signal}))}unregisterDismissible(){let t=sA.indexOf(this);-1!==t&&sA.splice(t,1),document.removeEventListener("keydown",this.onDocumentKeyDown)}async hide(){this.open=!1,await this.updateComplete}async show(){this.disabled||this.suppressed||(this.open=!0,await this.updateComplete)}render(){return tr`<wa-popup
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
				<slot name="content">${r7(this.content)}</slot>
			</div>
		</wa-popup>`}};sI.styles=tR`
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
	`,sE([tY()],sI.prototype,"content",2),sE([tY({reflect:!0})],sI.prototype,"placement",2),sE([tY({type:Boolean})],sI.prototype,"disabled",2),sE([tY({type:Number})],sI.prototype,"distance",2),sE([tY({type:Number,attribute:"show-delay"})],sI.prototype,"showDelay",2),sE([tY({type:Number,attribute:"hide-delay"})],sI.prototype,"hideDelay",2),sE([tY({type:Boolean,attribute:"hide-on-click"})],sI.prototype,"hideOnClick",2),sE([t2("wa-popup")],sI.prototype,"popup",2),sE([t0()],sI.prototype,"suppressed",2),sE([t0()],sI.prototype,"open",2),sI=sE([tX("gl-tooltip")],sI);let sz=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a","add-small":"\\ec7b","remove-small":"\\ec7c","worktree-small":"\\ec7d",worktree:"\\ec7e","screen-cut":"\\ec7f",ask:"\\ec80",openai:"\\ec81",claude:"\\ec82","open-in-window":"\\ec83","new-session":"\\ec84"}),sP=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147","diff-right":"\\f11b","diff-left":"\\f12e","accept-right":"\\f12f","accept-left":"\\f130","accept-all-right":"\\f131","accept-all-left":"\\f132",continue:"\\f148",skip:"\\f149",abort:"\\f14a",pause:"\\f14b","kanban-view":"\\f14c","filter-mixed":"\\f14d"});var sT=Object.defineProperty,sj=Object.getOwnPropertyDescriptor,sR=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?sj(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&sT(i,r,n),n};function sM(t,i=""){return tj(Object.entries(t).map(([t,r])=>(function(t,i,r=""){return`:host([icon='${r}${t}'])::before { content: '${i}'; }`})(t,r,i)).join(""))}let sO=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(t){t.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(t)}};sO.styles=tR`
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

		${sM(sz)}
		${sM(sP,"gl-")}

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
	`,sR([tY({reflect:!0})],sO.prototype,"icon",2),sR([tY({reflect:!0})],sO.prototype,"modifier",2),sR([tY({type:Number})],sO.prototype,"size",2),sR([tY({reflect:!0})],sO.prototype,"flip",2),sR([tY({reflect:!0})],sO.prototype,"rotate",2),sO=sR([tX("code-icon")],sO);var sL=Object.defineProperty,sD=Object.getOwnPropertyDescriptor,sB=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?sD(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&sL(i,r,n),n};let sF=class extends lit_element_i{constructor(){super(...arguments),this.truncate=!1,this.overlay="tooltip",this.icon="",this.disabled=!1,this._modifiers=new ModifierKeysController(this)}get isAltKeyPressed(){return this._modifiers.altKey||this._modifiers.shiftKey}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}get effectiveLabel(){return this.isAltKeyPressed&&this.altLabel?this.altLabel:this.label}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${r2()}] ${this.altLabel}`:this.label}render(){return this.label&&"none"!==this.overlay?"popover"===this.overlay?tr`<gl-popover hoist
				>${this.renderContent()}
				<div slot="content">${r7(this.label)}</div></gl-popover
			>`:tr`<gl-tooltip content="${this.effectiveTooltip}">${this.renderContent()}</gl-tooltip>`:this.renderContent()}renderContent(){let t="popover"===this.overlay?"anchor":tn,i=this.effectiveIcon,r=tr`<code-icon
				class="chip__icon"
				part="icon"
				icon="${i}"
				modifier="${("loading"===i?"spin":"")??tn}"
			></code-icon
			>${this.activeIcon?tr`<code-icon class="chip__icon-active" part="active-icon" icon="${this.activeIcon}"></code-icon>`:tn}`,o=this.effectiveHref,s=this.effectiveLabel;return o?tr`
				<a
					class="chip"
					part="base"
					?disabled=${this.disabled}
					href=${o}
					slot=${t}
					aria-label=${s??tn}
				>
					${r}<slot></slot><slot name="suffix"></slot>
				</a>
			`:tr`
			<button
				class="chip"
				part="base"
				type="button"
				?disabled=${this.disabled}
				slot=${t}
				aria-label=${s??tn}
			>
				${r}<slot></slot><slot name="suffix"></slot>
			</button>
		`}focus(t){this.defaultFocusEl.focus(t)}};sF.styles=[r5,r3,tR`
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
				${rF}
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
		`],sB([tY({type:Boolean,reflect:!0})],sF.prototype,"truncate",2),sB([tY()],sF.prototype,"href",2),sB([tY({attribute:"alt-href"})],sF.prototype,"altHref",2),sB([tY()],sF.prototype,"label",2),sB([tY({attribute:"alt-label"})],sF.prototype,"altLabel",2),sB([tY()],sF.prototype,"overlay",2),sB([tY()],sF.prototype,"icon",2),sB([tY({attribute:"alt-icon"})],sF.prototype,"altIcon",2),sB([tY()],sF.prototype,"activeIcon",2),sB([tY({type:Boolean})],sF.prototype,"disabled",2),sB([t2(".chip")],sF.prototype,"defaultFocusEl",2),sF=sB([tX("gl-action-chip")],sF);var sN=Object.defineProperty,sU=Object.getOwnPropertyDescriptor,sq=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?sU(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&sN(i,r,n),n};let sV=class extends lit_element_i{constructor(){super(...arguments),this.size=12,this.worktree=!1,this.chevron=!1,this.onKeydown=t=>{"button"===this.appearance&&("Enter"===t.key||" "===t.key)&&(t.preventDefault(),this.click())}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this.onKeydown),super.disconnectedCallback?.()}updated(t){t.has("appearance")&&("button"===this.appearance?(this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")):("button"===this.getAttribute("role")&&this.removeAttribute("role"),"0"===this.getAttribute("tabindex")&&this.removeAttribute("tabindex")))}render(){let t=this.icon??(this.worktree?"gl-worktree":"git-branch");return tr`<code-icon class="icon" icon="${t}" size="${this.size}"></code-icon
			><span class="label">${this.name??"<missing>"}</span>${this.chevron?tr`<code-icon class="chevron" icon="chevron-down" size="12"></code-icon>`:tn}`}};function sH(t,i){return tr`<gl-branch-name .name=${t} .size=${12} ?worktree=${i??!1}></gl-branch-name>`}sV.styles=tR`
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
	`,sq([tY({reflect:!0})],sV.prototype,"appearance",2),sq([tY({type:String})],sV.prototype,"name",2),sq([tY({type:Number})],sV.prototype,"size",2),sq([tY({type:Boolean})],sV.prototype,"worktree",2),sq([tY({type:Boolean})],sV.prototype,"chevron",2),sq([tY()],sV.prototype,"icon",2),sV=sq([tX("gl-branch-name")],sV);var sK=Object.defineProperty,sW=Object.getOwnPropertyDescriptor,sG=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?sW(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&sK(i,r,n),n};let sZ=class extends lit_element_i{constructor(){super(...arguments),this.hasChanges=!1,this.worktree=!1,this.isDefault=!1}render(){return tr`<gl-tooltip placement="bottom"
			>${this.renderIcon()}<span slot="content">${this.renderTooltipContent()}</span></gl-tooltip
		>`}renderIcon(){let t;if(!this.worktree&&(!this.status||"local"===this.status))return tr`<code-icon icon="git-branch"></code-icon>`;if("detached"===this.status)return tr`<code-icon icon="git-commit"></code-icon>`;let i="0.5";switch(this.status){case"diverged":t="var(--gl-icon-color-status-diverged)";break;case"behind":t="var(--gl-icon-color-status-behind)";break;case"ahead":t="var(--gl-icon-color-status-ahead)";break;case"missingUpstream":t="var(--gl-icon-color-status-missingUpstream)";break;case"upToDate":t=`var(--gl-icon-color-status-${this.hasChanges?"changes":"synced"})`;break;default:this.hasChanges?t="var(--gl-icon-color-status-changes)":(t="transparent",i="1")}return this.worktree&&!1===this.isDefault?to`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="var(--gl-icon-color-foreground, #c5c5c5)"
					d="M13.5 4h.501v1.003h-.2a5.5 5.5 0 0 1 1.2.755V3.5l-.5-.5H13.5v1zm-4 0V3H7.713l-.852-.854L6.507 2H1.511l-.5.5v3.996L1 6.507v6.995l.5.5h6.227a5.528 5.528 0 0 1-.836-1H2V7.496h.01v-.489h4.486l.354-.146.858-.858h.014a5.51 5.51 0 0 1 1.477-1H7.5l-.353.147-.858.857H2.011V3H6.3l.853.853.353.146H9.5z"
				/>
				<path
					fill="${t}"
					stroke="var(--gl-icon-color-foreground, #c5c5c5)"
					stroke-width="${i}"
					d="M11.5 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"
				/>
				<path stroke="var(--gl-icon-color-foreground, #c5c5c5)" d="M11.5 13v3M11.5 1v6" />
			</svg>`:to`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="${t}"
				stroke="var(--gl-icon-color-foreground, #c5c5c5)"
				stroke-width="${i}"
				d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
			/>
			<path
				fill="var(--gl-icon-color-foreground, #c5c5c5)"
				d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 5.95a2.5 2.5 0 1 0-1 0v4.1a2.5 2.5 0 1 0 1.165.04c.168-.38.383-.622.61-.78.327-.227.738-.32 1.214-.31H7c.387 0 .76.03 1.124.059l.026.002c.343.027.694.055 1.003.046.313-.01.661-.06.954-.248.29-.185.466-.466.544-.812a.756.756 0 0 1 .046-.055 2.5 2.5 0 1 0-1.03-.134c-.028.108-.07.14-.1.16-.063.04-.191.08-.446.089a8.783 8.783 0 0 1-.917-.045A14.886 14.886 0 0 0 7.005 8c-.61-.013-1.249.105-1.8.488-.07.05-.14.102-.205.159V5.95zm7-.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-9 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
			/>
		</svg>`}renderTooltipContent(){let t,i=this.branch?sH(this.branch):"Branch",r=this.upstream?sH(this.upstream):"its upstream";switch(this.status){case"diverged":t=tr`${i} has diverged from ${r}`;break;case"behind":t=tr`${i} is behind ${r}`;break;case"ahead":t=tr`${i} is ahead of ${r}`;break;case"missingUpstream":t=tr`${i} is missing its upstream ${r}`;break;case"upToDate":t=tr`${i} is up to date with ${r}`;break;case"local":t=tr`${i} is a local branch which hasn't been published`;break;case"remote":t=tr`${i} is a remote branch`;break;case"detached":t=tr`${i} is in a detached state, i.e. checked out to a commit or tag`;break;default:t=tr`${i} is in an unknown state`}return t=tr`<p>${t}</p>`,this.worktree?t=this.hasChanges?tr`${t}
					<p>Checked out in a worktree and has working (uncommitted) changes</p>`:tr`${t}
					<p>Checked out in a worktree</p>`:this.hasChanges&&(t=tr`${t}
				<p>Has working (uncommitted) changes</p>`),t}};sZ.styles=tR`
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
	`,sG([tY({type:String})],sZ.prototype,"branch",2),sG([tY({type:String})],sZ.prototype,"status",2),sG([tY({type:Boolean})],sZ.prototype,"hasChanges",2),sG([tY({type:String})],sZ.prototype,"upstream",2),sG([tY({type:Boolean})],sZ.prototype,"worktree",2),sG([tY({type:Boolean,attribute:"is-default"})],sZ.prototype,"isDefault",2),sZ=sG([tX("gl-branch-icon")],sZ);let sQ={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}},sX=tR`
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
`;var sJ=Object.defineProperty,sY=Object.getOwnPropertyDescriptor,s0=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?sY(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&sJ(i,r,n),n};let s1=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","remove"]]]),s2=class extends lit_element_i{constructor(){super(...arguments),this.noTooltip=!1}render(){let t=s1.map(([t,i])=>this.renderStat(t,i));return this.noTooltip?tr`${t}<slot></slot>`:tr`<gl-tooltip>
			${t}<slot></slot>
			<div slot="content">${this.renderTooltipContent()}</div>
		</gl-tooltip>`}renderStat(t,i){let r=this[t];if(null==r)return tn;let[o,s]=i,n="icons"===this.symbol?tr`<code-icon class="icon" icon=${s}></code-icon>`:tr`<span class="symbol">${o}</span>`;return tr`<span class="stat ${t}" aria-label="${r} ${t}"
			><span class="label">${n}${r}</span></span
		>`}renderTooltipContent(){let t=this.added??0,i=this.modified??0,r=this.removed??0,o=t+i+r,s=[];t>0&&s.push(tr`<span class="added">${t} added</span>`),i>0&&(s.length&&s.push(", "),s.push(tr`<span class="modified">${i} modified</span>`)),r>0&&(s.length&&s.push(", "),s.push(tr`<span class="removed">${r} removed</span>`));let n=t>0||r>0?tr`${ie("file",o)} changed (${s})`:ie("file changed",o,{plural:"files changed",zero:"No files changed"}),a=[];null!=this.additions&&a.push(tr`<span class="added">${ie("addition",this.additions)}</span>`),null!=this.deletions&&(a.length&&a.push(", "),a.push(tr`<span class="removed">${ie("deletion",this.deletions)}</span>`));let c=[tr`<div>${n}</div>`];return a.length>0&&c.push(tr`<div>${a}</div>`),c}};s2.styles=tR`
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
	`,s0([tY({type:Number})],s2.prototype,"added",2),s0([tY({type:Number})],s2.prototype,"modified",2),s0([tY({type:Number})],s2.prototype,"removed",2),s0([tY({type:Number})],s2.prototype,"additions",2),s0([tY({type:Number})],s2.prototype,"deletions",2),s0([tY()],s2.prototype,"symbol",2),s0([tY({reflect:!0})],s2.prototype,"appearance",2),s0([tY({type:Boolean,attribute:"no-tooltip"})],s2.prototype,"noTooltip",2),s2=s0([tX("commit-stats")],s2);var s5=Object.defineProperty,s3=Object.getOwnPropertyDescriptor,s4=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?s3(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&s5(i,r,n),n};let s7=class extends lit_element_i{constructor(){super(...arguments),this.showClean=!1,this.badge=!1,this.noTooltip=!1,this.hasConflicts=!1}render(){if(null!=this.pausedOpStatus)return this.renderPausedOp(this.pausedOpStatus);let t=this.added??0,i=this.modified??0,r=this.removed??0;if(this.dirty??t+i+r>0){let o=this.badge?tr`<span class="indicator-pill pill pill--outlined" aria-label="Working tree has changes">
						<code-icon icon="pencil"></code-icon>
					</span>`:tr`<commit-stats
						added=${t||tn}
						modified=${i||tn}
						removed=${r||tn}
						symbol="icons"
						appearance="pill"
						no-tooltip
					></commit-stats>`;if(this.noTooltip)return o;let s=t+i+r>0?tr`<commit-stats
						added=${t||tn}
						modified=${i||tn}
						removed=${r||tn}
						symbol="icons"
						appearance="pill"
						no-tooltip
					></commit-stats>`:"Working tree has changes";return tr`<gl-tooltip placement="bottom"
				>${o}<span slot="content">${s}</span></gl-tooltip
			>`}if(!this.showClean||null==this.dirty&&null==this.added&&null==this.modified&&null==this.removed)return tn;if(this.badge){let t=tr`<span class="indicator-pill pill pill--outlined" aria-label="No changes">
				<code-icon class="wip-clean-check" icon="check"></code-icon>
			</span>`;return this.noTooltip?t:tr`<gl-tooltip placement="bottom">${t}<span slot="content">No changes</span></gl-tooltip>`}let o=tr`<commit-stats class="indicator-pill" appearance="pill" no-tooltip aria-label="No changes">
			<code-icon class="wip-clean-check" icon="check"></code-icon>
		</commit-stats>`;return this.noTooltip?o:tr`<gl-tooltip placement="bottom">${o}<span slot="content">No changes</span></gl-tooltip>`}renderPausedOp(t){let i=sQ[t.type],r=this.hasConflicts?ie("conflict",this.conflictsCount??1):i.label,o=tr`<span
			class="paused-op-badge${this.hasConflicts?" paused-op-badge--conflicts":""}"
			aria-label=${r}
		>
			<code-icon icon="warning"></code-icon>
			${r}
		</span>`;return this.noTooltip?o:tr`<gl-tooltip placement="bottom"
			>${o}<span slot="content">${i.label} in progress</span></gl-tooltip
		>`}};s7.styles=[sX,tR`
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
		`],s4([tY({type:Number})],s7.prototype,"added",2),s4([tY({type:Number})],s7.prototype,"modified",2),s4([tY({type:Number})],s7.prototype,"removed",2),s4([tY({type:Boolean})],s7.prototype,"dirty",2),s4([tY({type:Boolean,attribute:"show-clean"})],s7.prototype,"showClean",2),s4([tY({type:Boolean})],s7.prototype,"badge",2),s4([tY({type:Boolean,attribute:"no-tooltip"})],s7.prototype,"noTooltip",2),s4([tY({attribute:!1})],s7.prototype,"pausedOpStatus",2),s4([tY({type:Boolean,attribute:"has-conflicts"})],s7.prototype,"hasConflicts",2),s4([tY({type:Number,attribute:"conflicts-count"})],s7.prototype,"conflictsCount",2),s7=s4([tX("gl-wip-stats")],s7);var s6=Object.defineProperty,s8=Object.getOwnPropertyDescriptor,s9=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?s8(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&s6(i,r,n),n};let ne=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?tr`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:tr`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="sync"></code-icon></span>
			</span>`:tn:tr`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${rS(this.behind>0,()=>tr`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${rS(this.ahead>0,()=>tr`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${rS(this.working>0,()=>tr`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};ne.styles=[sX,tR`
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
		`],s9([tY({type:Number})],ne.prototype,"ahead",2),s9([tY({type:Number})],ne.prototype,"behind",2),s9([tY({type:Number})],ne.prototype,"working",2),s9([tY({type:Boolean,attribute:"always-show"})],ne.prototype,"alwaysShow",2),s9([tY({type:Boolean})],ne.prototype,"outlined",2),s9([tY({type:Boolean})],ne.prototype,"colorized",2),s9([tY({type:Boolean})],ne.prototype,"missingUpstream",2),ne=s9([tX("gl-tracking-pill")],ne);let nt="important",ni=` !${nt}`,nr=0-ni.length;let CspStyleMapDirective=class CspStyleMapDirective extends directive_i{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `cspStyleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return ts}update(t,[i]){let r=t.element.style,o=this._previous??=new Map;for(let t of o.keys())null==i[t]&&(o.delete(t),t.includes("-")?r.removeProperty(t):r[t]=null);for(let t in i){let s=i[t];if(null==s)continue;let n="string"==typeof s&&s.endsWith(ni),a=n?s.slice(0,nr):String(s);o.get(t)!==a&&(o.set(t,a),t.includes("-")||n?r.setProperty(t,a,n?nt:""):r[t]=a)}return ts}};let no=eV(CspStyleMapDirective),ns={_argdown:["\\E003","#519aba"],_argdown_light:["\\E003","#498ba7"],_asm:["\\E004","#cc3e44"],_asm_light:["\\E004","#b8383d"],_audio:["\\E005","#a074c4"],_audio_light:["\\E005","#9068b0"],_babel:["\\E006","#cbcb41"],_babel_light:["\\E006","#b7b73b"],_bazel:["\\E007","#8dc149"],_bazel_1:["\\E007","#4d5a5e"],_bazel_1_light:["\\E007","#455155"],_bazel_light:["\\E007","#7fae42"],_bicep:["\\E008","#519aba"],_bicep_light:["\\E008","#498ba7"],_bower:["\\E009","#e37933"],_bower_light:["\\E009","#cc6d2e"],_bsl:["\\E00A","#cc3e44"],_bsl_light:["\\E00A","#b8383d"],_c:["\\E00C","#519aba"],_c_1:["\\E00C","#a074c4"],_c_1_light:["\\E00C","#9068b0"],_c_2:["\\E00C","#cbcb41"],_c_2_light:["\\E00C","#b7b73b"],_c_light:["\\E00C","#498ba7"],"_c-sharp":["\\E00B","#519aba"],"_c-sharp_light":["\\E00B","#498ba7"],_cake:["\\E00D","#cc3e44"],_cake_light:["\\E00D","#b8383d"],_cake_php:["\\E00E","#cc3e44"],_cake_php_light:["\\E00E","#b8383d"],_clock:["\\E012","#519aba"],_clock_1:["\\E012","#6d8086"],_clock_1_light:["\\E012","#627379"],_clock_light:["\\E012","#498ba7"],_clojure:["\\E013","#8dc149"],_clojure_1:["\\E013","#519aba"],_clojure_1_light:["\\E013","#498ba7"],_clojure_light:["\\E013","#7fae42"],"_code-climate":["\\E014","#8dc149"],"_code-climate_light":["\\E014","#7fae42"],"_code-search":["\\E015","#a074c4"],"_code-search_light":["\\E015","#9068b0"],_coffee:["\\E016","#cbcb41"],_coffee_light:["\\E016","#b7b73b"],_coldfusion:["\\E018","#519aba"],_coldfusion_light:["\\E018","#498ba7"],_config:["\\E019","#6d8086"],_config_light:["\\E019","#627379"],_cpp:["\\E01A","#519aba"],_cpp_1:["\\E01A","#a074c4"],_cpp_1_light:["\\E01A","#9068b0"],_cpp_2:["\\E01A","#cbcb41"],_cpp_2_light:["\\E01A","#b7b73b"],_cpp_light:["\\E01A","#498ba7"],_crystal:["\\E01B","#d4d7d6"],_crystal_embedded:["\\E01C","#d4d7d6"],_crystal_embedded_light:["\\E01C","#bfc2c1"],_crystal_light:["\\E01B","#bfc2c1"],_css:["\\E01D","#519aba"],_css_light:["\\E01D","#498ba7"],_csv:["\\E01E","#8dc149"],_csv_light:["\\E01E","#7fae42"],_cu:["\\E01F","#8dc149"],_cu_1:["\\E01F","#a074c4"],_cu_1_light:["\\E01F","#9068b0"],_cu_light:["\\E01F","#7fae42"],_d:["\\E020","#cc3e44"],_d_light:["\\E020","#b8383d"],_dart:["\\E021","#519aba"],_dart_light:["\\E021","#498ba7"],_db:["\\E022","#f55385"],_db_1:["\\E022","#519aba"],_db_1_light:["\\E022","#498ba7"],_db_light:["\\E022","#dd4b78"],_default:["\\E023","#d4d7d6"],_default_light:["\\E023","#bfc2c1"],_docker:["\\E025","#519aba"],_docker_1:["\\E025","#4d5a5e"],_docker_1_light:["\\E025","#455155"],_docker_2:["\\E025","#8dc149"],_docker_2_light:["\\E025","#7fae42"],_docker_3:["\\E025","#f55385"],_docker_3_light:["\\E025","#dd4b78"],_docker_light:["\\E025","#498ba7"],_ejs:["\\E027","#cbcb41"],_ejs_light:["\\E027","#b7b73b"],_elixir:["\\E028","#a074c4"],_elixir_light:["\\E028","#9068b0"],_elixir_script:["\\E029","#a074c4"],_elixir_script_light:["\\E029","#9068b0"],_elm:["\\E02A","#519aba"],_elm_light:["\\E02A","#498ba7"],_eslint:["\\E02C","#a074c4"],_eslint_1:["\\E02C","#4d5a5e"],_eslint_1_light:["\\E02C","#455155"],_eslint_light:["\\E02C","#9068b0"],_ethereum:["\\E02D","#519aba"],_ethereum_light:["\\E02D","#498ba7"],"_f-sharp":["\\E02E","#519aba"],"_f-sharp_light":["\\E02E","#498ba7"],_favicon:["\\E02F","#cbcb41"],_favicon_light:["\\E02F","#b7b73b"],_firebase:["\\E030","#e37933"],_firebase_light:["\\E030","#cc6d2e"],_firefox:["\\E031","#e37933"],_firefox_light:["\\E031","#cc6d2e"],_font:["\\E033","#cc3e44"],_font_light:["\\E033","#b8383d"],_git:["\\E034","#41535b"],_git_light:["\\E034","#3b4b52"],_github:["\\E037","#d4d7d6"],_github_light:["\\E037","#bfc2c1"],_gitlab:["\\E038","#e37933"],_gitlab_light:["\\E038","#cc6d2e"],_go:["\\E039","#519aba"],_go_light:["\\E039","#498ba7"],_go2:["\\E03A","#519aba"],_go2_light:["\\E03A","#498ba7"],_godot:["\\E03B","#519aba"],_godot_1:["\\E03B","#cc3e44"],_godot_1_light:["\\E03B","#b8383d"],_godot_2:["\\E03B","#cbcb41"],_godot_2_light:["\\E03B","#b7b73b"],_godot_3:["\\E03B","#a074c4"],_godot_3_light:["\\E03B","#9068b0"],_godot_light:["\\E03B","#498ba7"],_gradle:["\\E03C","#519aba"],_gradle_light:["\\E03C","#498ba7"],_grails:["\\E03D","#8dc149"],_grails_light:["\\E03D","#7fae42"],_graphql:["\\E03E","#f55385"],_graphql_light:["\\E03E","#dd4b78"],_grunt:["\\E03F","#e37933"],_grunt_light:["\\E03F","#cc6d2e"],_gulp:["\\E040","#cc3e44"],_gulp_light:["\\E040","#b8383d"],_hacklang:["\\E041","#e37933"],_hacklang_light:["\\E041","#cc6d2e"],_haml:["\\E042","#cc3e44"],_haml_light:["\\E042","#b8383d"],_happenings:["\\E043","#519aba"],_happenings_light:["\\E043","#498ba7"],_haskell:["\\E044","#a074c4"],_haskell_light:["\\E044","#9068b0"],_haxe:["\\E045","#e37933"],_haxe_1:["\\E045","#cbcb41"],_haxe_1_light:["\\E045","#b7b73b"],_haxe_2:["\\E045","#519aba"],_haxe_2_light:["\\E045","#498ba7"],_haxe_3:["\\E045","#a074c4"],_haxe_3_light:["\\E045","#9068b0"],_haxe_light:["\\E045","#cc6d2e"],_heroku:["\\E046","#a074c4"],_heroku_light:["\\E046","#9068b0"],_hex:["\\E047","#cc3e44"],_hex_light:["\\E047","#b8383d"],_html:["\\E048","#519aba"],_html_1:["\\E048","#8dc149"],_html_1_light:["\\E048","#7fae42"],_html_2:["\\E048","#cbcb41"],_html_2_light:["\\E048","#b7b73b"],_html_3:["\\E048","#e37933"],_html_3_light:["\\E048","#cc6d2e"],_html_erb:["\\E049","#cc3e44"],_html_erb_light:["\\E049","#b8383d"],_html_light:["\\E048","#498ba7"],_ignored:["\\E04A","#41535b"],_ignored_light:["\\E04A","#3b4b52"],_illustrator:["\\E04B","#cbcb41"],_illustrator_light:["\\E04B","#b7b73b"],_image:["\\E04C","#a074c4"],_image_light:["\\E04C","#9068b0"],_info:["\\E04D","#519aba"],_info_light:["\\E04D","#498ba7"],_ionic:["\\E04E","#519aba"],_ionic_light:["\\E04E","#498ba7"],_jade:["\\E04F","#cc3e44"],_jade_light:["\\E04F","#b8383d"],_java:["\\E050","#cc3e44"],_java_1:["\\E050","#519aba"],_java_1_light:["\\E050","#498ba7"],_java_light:["\\E050","#b8383d"],_javascript:["\\E051","#cbcb41"],_javascript_1:["\\E051","#e37933"],_javascript_1_light:["\\E051","#cc6d2e"],_javascript_2:["\\E051","#519aba"],_javascript_2_light:["\\E051","#498ba7"],_javascript_light:["\\E051","#b7b73b"],_jenkins:["\\E052","#cc3e44"],_jenkins_light:["\\E052","#b8383d"],_jinja:["\\E053","#cc3e44"],_jinja_light:["\\E053","#b8383d"],_json:["\\E055","#cbcb41"],_json_1:["\\E055","#8dc149"],_json_1_light:["\\E055","#7fae42"],_json_light:["\\E055","#b7b73b"],_julia:["\\E056","#a074c4"],_julia_light:["\\E056","#9068b0"],_karma:["\\E057","#8dc149"],_karma_light:["\\E057","#7fae42"],_kotlin:["\\E058","#e37933"],_kotlin_light:["\\E058","#cc6d2e"],_less:["\\E059","#519aba"],_less_light:["\\E059","#498ba7"],_license:["\\E05A","#cbcb41"],_license_1:["\\E05A","#e37933"],_license_1_light:["\\E05A","#cc6d2e"],_license_2:["\\E05A","#cc3e44"],_license_2_light:["\\E05A","#b8383d"],_license_light:["\\E05A","#b7b73b"],_liquid:["\\E05B","#8dc149"],_liquid_light:["\\E05B","#7fae42"],_livescript:["\\E05C","#519aba"],_livescript_light:["\\E05C","#498ba7"],_lock:["\\E05D","#8dc149"],_lock_light:["\\E05D","#7fae42"],_lua:["\\E05E","#519aba"],_lua_light:["\\E05E","#498ba7"],_makefile:["\\E05F","#e37933"],_makefile_1:["\\E05F","#a074c4"],_makefile_1_light:["\\E05F","#9068b0"],_makefile_2:["\\E05F","#6d8086"],_makefile_2_light:["\\E05F","#627379"],_makefile_3:["\\E05F","#519aba"],_makefile_3_light:["\\E05F","#498ba7"],_makefile_light:["\\E05F","#cc6d2e"],_markdown:["\\E060","#519aba"],_markdown_light:["\\E060","#498ba7"],_maven:["\\E061","#cc3e44"],_maven_light:["\\E061","#b8383d"],_mdo:["\\E062","#cc3e44"],_mdo_light:["\\E062","#b8383d"],_mustache:["\\E063","#e37933"],_mustache_light:["\\E063","#cc6d2e"],_nim:["\\E065","#cbcb41"],_nim_light:["\\E065","#b7b73b"],_notebook:["\\E066","#519aba"],_notebook_light:["\\E066","#498ba7"],_npm:["\\E067","#41535b"],_npm_1:["\\E067","#cc3e44"],_npm_1_light:["\\E067","#b8383d"],_npm_ignored:["\\E068","#41535b"],_npm_ignored_light:["\\E068","#3b4b52"],_npm_light:["\\E067","#3b4b52"],_nunjucks:["\\E069","#8dc149"],_nunjucks_light:["\\E069","#7fae42"],_ocaml:["\\E06A","#e37933"],_ocaml_light:["\\E06A","#cc6d2e"],_odata:["\\E06B","#e37933"],_odata_light:["\\E06B","#cc6d2e"],_pddl:["\\E06C","#a074c4"],_pddl_light:["\\E06C","#9068b0"],_pdf:["\\E06D","#cc3e44"],_pdf_light:["\\E06D","#b8383d"],_perl:["\\E06E","#519aba"],_perl_light:["\\E06E","#498ba7"],_photoshop:["\\E06F","#519aba"],_photoshop_light:["\\E06F","#498ba7"],_php:["\\E070","#a074c4"],_php_light:["\\E070","#9068b0"],_pipeline:["\\E071","#e37933"],_pipeline_light:["\\E071","#cc6d2e"],_plan:["\\E072","#8dc149"],_plan_light:["\\E072","#7fae42"],_platformio:["\\E073","#e37933"],_platformio_light:["\\E073","#cc6d2e"],_powershell:["\\E074","#519aba"],_powershell_light:["\\E074","#498ba7"],_prisma:["\\E075","#519aba"],_prisma_light:["\\E075","#498ba7"],_prolog:["\\E077","#e37933"],_prolog_light:["\\E077","#cc6d2e"],_pug:["\\E078","#cc3e44"],_pug_light:["\\E078","#b8383d"],_puppet:["\\E079","#cbcb41"],_puppet_light:["\\E079","#b7b73b"],_purescript:["\\E07A","#d4d7d6"],_purescript_light:["\\E07A","#bfc2c1"],_python:["\\E07B","#519aba"],_python_light:["\\E07B","#498ba7"],_R:["\\E001","#519aba"],_R_light:["\\E001","#498ba7"],_react:["\\E07D","#519aba"],_react_1:["\\E07D","#e37933"],_react_1_light:["\\E07D","#cc6d2e"],_react_light:["\\E07D","#498ba7"],_reasonml:["\\E07E","#cc3e44"],_reasonml_light:["\\E07E","#b8383d"],_rescript:["\\E07F","#cc3e44"],_rescript_1:["\\E07F","#f55385"],_rescript_1_light:["\\E07F","#dd4b78"],_rescript_light:["\\E07F","#b8383d"],_rollup:["\\E080","#cc3e44"],_rollup_light:["\\E080","#b8383d"],_ruby:["\\E081","#cc3e44"],_ruby_light:["\\E081","#b8383d"],_rust:["\\E082","#6d8086"],_rust_light:["\\E082","#627379"],_salesforce:["\\E083","#519aba"],_salesforce_light:["\\E083","#498ba7"],_sass:["\\E084","#f55385"],_sass_light:["\\E084","#dd4b78"],_sbt:["\\E085","#519aba"],_sbt_light:["\\E085","#498ba7"],_scala:["\\E086","#cc3e44"],_scala_light:["\\E086","#b8383d"],_shell:["\\E089","#8dc149"],_shell_light:["\\E089","#7fae42"],_slim:["\\E08A","#e37933"],_slim_light:["\\E08A","#cc6d2e"],_smarty:["\\E08B","#cbcb41"],_smarty_light:["\\E08B","#b7b73b"],_spring:["\\E08C","#8dc149"],_spring_light:["\\E08C","#7fae42"],_stylelint:["\\E08D","#d4d7d6"],_stylelint_1:["\\E08D","#4d5a5e"],_stylelint_1_light:["\\E08D","#455155"],_stylelint_light:["\\E08D","#bfc2c1"],_stylus:["\\E08E","#8dc149"],_stylus_light:["\\E08E","#7fae42"],_sublime:["\\E08F","#e37933"],_sublime_light:["\\E08F","#cc6d2e"],_svelte:["\\E090","#cc3e44"],_svelte_light:["\\E090","#b8383d"],_svg:["\\E091","#a074c4"],_svg_1:["\\E091","#519aba"],_svg_1_light:["\\E091","#498ba7"],_svg_light:["\\E091","#9068b0"],_swift:["\\E092","#e37933"],_swift_light:["\\E092","#cc6d2e"],_terraform:["\\E093","#a074c4"],_terraform_light:["\\E093","#9068b0"],_tex:["\\E094","#519aba"],_tex_1:["\\E094","#cbcb41"],_tex_1_light:["\\E094","#b7b73b"],_tex_2:["\\E094","#e37933"],_tex_2_light:["\\E094","#cc6d2e"],_tex_3:["\\E094","#d4d7d6"],_tex_3_light:["\\E094","#bfc2c1"],_tex_light:["\\E094","#498ba7"],_todo:["\\E096",""],_tsconfig:["\\E097","#519aba"],_tsconfig_light:["\\E097","#498ba7"],_twig:["\\E098","#8dc149"],_twig_light:["\\E098","#7fae42"],_typescript:["\\E099","#519aba"],_typescript_1:["\\E099","#e37933"],_typescript_1_light:["\\E099","#cc6d2e"],_typescript_light:["\\E099","#498ba7"],_vala:["\\E09A","#6d8086"],_vala_light:["\\E09A","#627379"],_video:["\\E09B","#f55385"],_video_light:["\\E09B","#dd4b78"],_vite:["\\E09C","#cbcb41"],_vite_light:["\\E09C","#b7b73b"],_vue:["\\E09D","#8dc149"],_vue_light:["\\E09D","#7fae42"],_wasm:["\\E09E","#a074c4"],_wasm_light:["\\E09E","#9068b0"],_wat:["\\E09F","#a074c4"],_wat_light:["\\E09F","#9068b0"],_webpack:["\\E0A0","#519aba"],_webpack_light:["\\E0A0","#498ba7"],_wgt:["\\E0A1","#519aba"],_wgt_light:["\\E0A1","#498ba7"],_windows:["\\E0A2","#519aba"],_windows_light:["\\E0A2","#498ba7"],_word:["\\E0A3","#519aba"],_word_light:["\\E0A3","#498ba7"],_xls:["\\E0A4","#8dc149"],_xls_light:["\\E0A4","#7fae42"],_xml:["\\E0A5","#e37933"],_xml_light:["\\E0A5","#cc6d2e"],_yarn:["\\E0A6","#519aba"],_yarn_light:["\\E0A6","#498ba7"],_yml:["\\E0A7","#a074c4"],_yml_light:["\\E0A7","#9068b0"],_zig:["\\E0A8","#e37933"],_zig_light:["\\E0A8","#cc6d2e"],_zip:["\\E0A9","#cc3e44"],_zip_1:["\\E0A9","#6d8086"],_zip_1_light:["\\E0A9","#627379"],_zip_light:["\\E0A9","#b8383d"]},nn={"babel.config.cjs":"_babel","babel.config.js":"_babel","babel.config.json":"_babel","bower.json":"_bower",build:"_bazel","build.bazel":"_bazel",changelog:"_clock","changelog.md":"_clock","changelog.txt":"_clock",changes:"_clock","changes.md":"_clock","changes.txt":"_clock","cmakelists.txt":"_makefile_3",compiling:"_license_1","compiling.md":"_license_1","compiling.txt":"_license_1",contributing:"_license_2","contributing.md":"_license_2","contributing.txt":"_license_2",copying:"_license","copying.md":"_license","copying.txt":"_license","docker-healthcheck":"_docker_2","eslint.config.js":"_eslint","firebase.json":"_firebase",geckodriver:"_firefox","gruntfile.babel.js":"_grunt","gruntfile.coffee":"_grunt","gruntfile.js":"_grunt",gulpfile:"_gulp","gulpfile.js":"_gulp","ionic.config.json":"_ionic","ionic.project":"_ionic",jenkinsfile:"_jenkins","karma.conf.cjs":"_karma","karma.conf.coffee":"_karma","karma.conf.js":"_karma","karma.conf.mjs":"_karma",licence:"_license","licence.md":"_license","licence.txt":"_license",license:"_license","license.md":"_license","license.txt":"_license","mime.types":"_config",mix:"_hex",mvnw:"_maven","npm-debug.log":"_npm_ignored",omakefile:"_makefile_2","platformio.ini":"_platformio","pom.xml":"_maven",procfile:"_heroku",qmakefile:"_makefile_1",readme:"_info","readme.md":"_info","readme.txt":"_info","rollup.config.js":"_rollup","sass-lint.yml":"_sass","stylelint.config.cjs":"_stylelint","stylelint.config.js":"_stylelint","stylelint.config.mjs":"_stylelint","swagger.json":"_json_1","swagger.yaml":"_json_1","swagger.yml":"_json_1",todo:"_todo","todo.md":"_todo","todo.txt":"_todo","tsconfig.json":"_tsconfig",version:"_clock","version.md":"_clock","version.txt":"_clock","vite.config.cjs":"_vite","vite.config.cts":"_vite","vite.config.js":"_vite","vite.config.mjs":"_vite","vite.config.mts":"_vite","vite.config.ts":"_vite","webpack.common.cjs":"_webpack","webpack.common.js":"_webpack","webpack.common.mjs":"_webpack","webpack.common.ts":"_webpack","webpack.config.build.cjs":"_webpack","webpack.config.build.js":"_webpack","webpack.config.build.mjs":"_webpack","webpack.config.build.ts":"_webpack","webpack.config.cjs":"_webpack","webpack.config.js":"_webpack","webpack.config.mjs":"_webpack","webpack.config.ts":"_webpack","webpack.dev.cjs":"_webpack","webpack.dev.js":"_webpack","webpack.dev.mjs":"_webpack","webpack.dev.ts":"_webpack","webpack.prod.cjs":"_webpack","webpack.prod.js":"_webpack","webpack.prod.mjs":"_webpack","webpack.prod.ts":"_webpack",workspace:"_bazel","workspace.bazel":"_bazel","yarn.clean":"_yarn","yarn.lock":"_yarn"},na={"3dm":"_svg_1","3ds":"_svg_1",ad:"_argdown",ai:"_illustrator",apex:"_salesforce",argdown:"_argdown",article:"_go",asax:"_html_2",ascx:"_html_1",asm:"_asm",aspx:"_html",avi:"_video",avif:"_image",babelrc:"_babel","babelrc.cjs":"_babel","babelrc.js":"_babel",bazel:"_bazel",bazelignore:"_bazel",bazelrc:"_bazel_1",bazelversion:"_bazel",bicep:"_bicep",bowerrc:"_bower",bsl:"_bsl",build:"_bazel",bzl:"_bazel",cake:"_cake",cer:"_lock",cert:"_lock",cfc:"_coldfusion",cfm:"_coldfusion","cjs.map":"_javascript",cjsx:"_react",class:"_java_1",classpath:"_java",cls:"_salesforce",cmx:"_ocaml",cmxa:"_ocaml","codeclimate.yml":"_code-climate",component:"_html_3",config:"_config",cr:"_crystal",crt:"_lock",cson:"_json","css.map":"_css",csv:"_csv",ctp:"_cake_php",cuh:"_cu_1",d:"_d",dae:"_svg_1",direnv:"_config",doc:"_word",dockerignore:"_docker_1",docx:"_word",ds_store:"_ignored",dtx:"_tex_2",ecr:"_crystal_embedded",edn:"_clojure_1",ejs:"_ejs",elm:"_elm",eot:"_font",epp:"_puppet",erb:"_html_erb","erb.html":"_html_erb",es:"_javascript",es5:"_javascript",es7:"_javascript",eslintignore:"_eslint_1",eslintrc:"_eslint","eslintrc.cjs":"_eslint","eslintrc.js":"_eslint","eslintrc.json":"_eslint","eslintrc.yaml":"_eslint","eslintrc.yml":"_eslint",ex:"_elixir",exs:"_elixir_script",firebaserc:"_firebase",flac:"_audio",gd:"_godot",gif:"_image",gitattributes:"_git",gitconfig:"_git","github-issues":"_github",gitkeep:"_git","gitlab-ci.yml":"_gitlab",gitmodules:"_git",godot:"_godot_1",gql:"_graphql",gradle:"_gradle",graphql:"_graphql",graphqls:"_graphql",gsp:"_grails",h:"_c_1","h++":"_cpp_1",hack:"_hacklang",haml:"_haml",happenings:"_happenings",hh:"_cpp_1",hpp:"_cpp_1",hs:"_haskell",htaccess:"_config","html.erb":"_html_erb",hu:"_cu_1",hx:"_haxe",hxml:"_haxe_3",hxp:"_haxe_2",hxs:"_haxe_1",hxx:"_cpp_1",ico:"_favicon",ins:"_tex_3",ipynb:"_notebook",jade:"_jade",jar:"_zip",jinja:"_jinja",jinja2:"_jinja",jpeg:"_image",jpg:"_image","js.map":"_javascript",jscsrc:"_javascript_2",jshintrc:"_javascript_2",key:"_lock",kt:"_kotlin",kts:"_kotlin",lhs:"_haskell",liquid:"_liquid",litcoffee:"_coffee",ls:"_livescript",master:"_html_2",mdo:"_mdo","mjs.map":"_javascript",ml:"_ocaml",mli:"_ocaml",mov:"_video",mp3:"_audio",mp4:"_video",mpg:"_video",mustache:"_mustache",nim:"_nim",nims:"_nim",nj:"_nunjucks",njk:"_nunjucks",njs:"_nunjucks","npm-debug.log":"_npm",npmignore:"_npm_1",npmrc:"_npm_1",nunj:"_nunjucks",nunjs:"_nunjucks",nunjucks:"_nunjucks",obj:"_svg_1",odata:"_odata",ogg:"_audio",ogv:"_video",otf:"_font",pddl:"_pddl",pdf:"_pdf",pem:"_lock","php.inc":"_php",pipeline:"_pipeline",plan:"_plan",png:"_image",pp:"_puppet",prisma:"_prisma",pro:"_prolog",psd:"_photoshop",purs:"_purescript",pxm:"_image",r:"_R",re:"_reasonml",res:"_rescript",resi:"_rescript_1",rmd:"_R",s:"_asm",sass:"_sass",sbt:"_sbt",scala:"_scala",slang:"_crystal_embedded",slide:"_go",slim:"_slim",slugignore:"_config","smarty.tpl":"_smarty",sol:"_ethereum",soql:"_db_1","spec.cjs":"_javascript_1","spec.js":"_javascript_1","spec.jsx":"_react_1","spec.mjs":"_javascript_1","spec.ts":"_typescript_1","spec.tsx":"_react_1",springbeans:"_spring",sss:"_css",stache:"_mustache",static:"_config",stl:"_svg_1",styl:"_stylus",stylelintignore:"_stylelint_1",stylelintrc:"_stylelint","stylelintrc.js":"_stylelint","stylelintrc.json":"_stylelint","stylelintrc.yaml":"_stylelint","stylelintrc.yml":"_stylelint","sublime-project":"_sublime","sublime-workspace":"_sublime",svelte:"_svelte",svg:"_svg",svgx:"_image","test.cjs":"_javascript_1","test.js":"_javascript_1","test.jsx":"_react_1","test.mjs":"_javascript_1","test.ts":"_typescript_1","test.tsx":"_react_1",tf:"_terraform","tf.json":"_terraform",tfvars:"_terraform","tfvars.json":"_terraform",tiff:"_image",tmp:"_clock_1",toml:"_config",tpl:"_smarty",tres:"_godot_2",tscn:"_godot_3",ttf:"_font",twig:"_twig",vala:"_vala",vapi:"_vala",vue:"_vue",wasm:"_wasm",wat:"_wat",wav:"_audio",webm:"_video",webp:"_image",wgt:"_wgt",woff:"_font",woff2:"_font",workspace:"_bazel",xls:"_xls",xlsx:"_xls",zig:"_zig",zip:"_zip_1"},nl={argdown:"_argdown",bat:"_windows",bicep:"_bicep",blade:"_php",c:"_c",chatagent:"_markdown",clojure:"_clojure",coffeescript:"_coffee",cpp:"_cpp",csharp:"_c-sharp",css:"_css","cuda-cpp":"_cu",dart:"_dart","django-html":"_html_3",dockercompose:"_docker_3",dockerfile:"_docker",dotenv:"_config",elixir:"_elixir",elm:"_elm",erb:"_html_erb",fsharp:"_f-sharp","git-commit":"_git","github-issues":"_github",go:"_go2",godot:"_godot",gradle:"_gradle",groovy:"_grails",haml:"_haml",handlebars:"_mustache",haskell:"_haskell",haxe:"_haxe",html:"_html_3",ignore:"_git",instructions:"_markdown",jade:"_pug",java:"_java",javascript:"_javascript",javascriptreact:"_react",jinja:"_jinja",json:"_json",jsonc:"_json",jsonl:"_json",julia:"_julia",kotlin:"_kotlin",latex:"_tex",less:"_less",lua:"_lua",makefile:"_makefile",markdown:"_markdown",mustache:"_mustache",nunjucks:"_nunjucks","objective-c":"_c_2","objective-cpp":"_cpp_2",ocaml:"_ocaml",perl:"_perl",php:"_php",postcss:"_css",powershell:"_powershell",prompt:"_markdown",properties:"_config",python:"_python",r:"_R",razor:"_html",rescript:"_rescript",ruby:"_ruby",rust:"_rust",sass:"_sass",scss:"_sass","search-result":"_code-search",shellscript:"_shell",skill:"_markdown",sql:"_db",stylus:"_stylus",swift:"_swift",terraform:"_terraform",tex:"_tex_1",todo:"_todo",typescript:"_typescript",typescriptreact:"_react",vala:"_vala",vue:"_vue",xml:"_xml",yaml:"_yml"},nc={"babel.config.cjs":"_babel_light","babel.config.js":"_babel_light","babel.config.json":"_babel_light","bower.json":"_bower_light",build:"_bazel_light","build.bazel":"_bazel_light",changelog:"_clock_light","changelog.md":"_clock_light","changelog.txt":"_clock_light",changes:"_clock_light","changes.md":"_clock_light","changes.txt":"_clock_light","cmakelists.txt":"_makefile_3_light",compiling:"_license_1_light","compiling.md":"_license_1_light","compiling.txt":"_license_1_light",contributing:"_license_2_light","contributing.md":"_license_2_light","contributing.txt":"_license_2_light",copying:"_license_light","copying.md":"_license_light","copying.txt":"_license_light","docker-healthcheck":"_docker_2_light","eslint.config.js":"_eslint_light","firebase.json":"_firebase_light",geckodriver:"_firefox_light","gruntfile.babel.js":"_grunt_light","gruntfile.coffee":"_grunt_light","gruntfile.js":"_grunt_light",gulpfile:"_gulp_light","gulpfile.js":"_gulp_light","ionic.config.json":"_ionic_light","ionic.project":"_ionic_light",jenkinsfile:"_jenkins_light","karma.conf.cjs":"_karma_light","karma.conf.coffee":"_karma_light","karma.conf.js":"_karma_light","karma.conf.mjs":"_karma_light",licence:"_license_light","licence.md":"_license_light","licence.txt":"_license_light",license:"_license_light","license.md":"_license_light","license.txt":"_license_light","mime.types":"_config_light",mix:"_hex_light",mvnw:"_maven_light","npm-debug.log":"_npm_ignored_light",omakefile:"_makefile_2_light","platformio.ini":"_platformio_light","pom.xml":"_maven_light",procfile:"_heroku_light",qmakefile:"_makefile_1_light",readme:"_info_light","readme.md":"_info_light","readme.txt":"_info_light","rollup.config.js":"_rollup_light","sass-lint.yml":"_sass_light","stylelint.config.cjs":"_stylelint_light","stylelint.config.js":"_stylelint_light","stylelint.config.mjs":"_stylelint_light","swagger.json":"_json_1_light","swagger.yaml":"_json_1_light","swagger.yml":"_json_1_light","tsconfig.json":"_tsconfig_light",version:"_clock_light","version.md":"_clock_light","version.txt":"_clock_light","vite.config.cjs":"_vite_light","vite.config.cts":"_vite_light","vite.config.js":"_vite_light","vite.config.mjs":"_vite_light","vite.config.mts":"_vite_light","vite.config.ts":"_vite_light","webpack.common.cjs":"_webpack_light","webpack.common.js":"_webpack_light","webpack.common.mjs":"_webpack_light","webpack.common.ts":"_webpack_light","webpack.config.build.cjs":"_webpack_light","webpack.config.build.js":"_webpack_light","webpack.config.build.mjs":"_webpack_light","webpack.config.build.ts":"_webpack_light","webpack.config.cjs":"_webpack_light","webpack.config.js":"_webpack_light","webpack.config.mjs":"_webpack_light","webpack.config.ts":"_webpack_light","webpack.dev.cjs":"_webpack_light","webpack.dev.js":"_webpack_light","webpack.dev.mjs":"_webpack_light","webpack.dev.ts":"_webpack_light","webpack.prod.cjs":"_webpack_light","webpack.prod.js":"_webpack_light","webpack.prod.mjs":"_webpack_light","webpack.prod.ts":"_webpack_light",workspace:"_bazel_light","workspace.bazel":"_bazel_light","yarn.clean":"_yarn_light","yarn.lock":"_yarn_light"},nh={"3dm":"_svg_1_light","3ds":"_svg_1_light",ad:"_argdown_light",ai:"_illustrator_light",apex:"_salesforce_light",argdown:"_argdown_light",article:"_go_light",asax:"_html_2_light",ascx:"_html_1_light",asm:"_asm_light",aspx:"_html_light",avi:"_video_light",avif:"_image_light",babelrc:"_babel_light","babelrc.cjs":"_babel_light","babelrc.js":"_babel_light",bazel:"_bazel_light",bazelignore:"_bazel_light",bazelrc:"_bazel_1_light",bazelversion:"_bazel_light",bicep:"_bicep_light",bowerrc:"_bower_light",bsl:"_bsl_light",build:"_bazel_light",bzl:"_bazel_light",cake:"_cake_light",cer:"_lock_light",cert:"_lock_light",cfc:"_coldfusion_light",cfm:"_coldfusion_light","cjs.map":"_javascript_light",cjsx:"_react_light",class:"_java_1_light",classpath:"_java_light",cls:"_salesforce_light",cmx:"_ocaml_light",cmxa:"_ocaml_light","codeclimate.yml":"_code-climate_light",component:"_html_3_light",config:"_config_light",cr:"_crystal_light",crt:"_lock_light",cson:"_json_light","css.map":"_css_light",csv:"_csv_light",ctp:"_cake_php_light",cuh:"_cu_1_light",d:"_d_light",dae:"_svg_1_light",direnv:"_config_light",doc:"_word_light",dockerignore:"_docker_1_light",docx:"_word_light",ds_store:"_ignored_light",dtx:"_tex_2_light",ecr:"_crystal_embedded_light",edn:"_clojure_1_light",ejs:"_ejs_light",elm:"_elm_light",eot:"_font_light",epp:"_puppet_light",erb:"_html_erb_light","erb.html":"_html_erb_light",es:"_javascript_light",es5:"_javascript_light",es7:"_javascript_light",eslintignore:"_eslint_1_light",eslintrc:"_eslint_light","eslintrc.cjs":"_eslint_light","eslintrc.js":"_eslint_light","eslintrc.json":"_eslint_light","eslintrc.yaml":"_eslint_light","eslintrc.yml":"_eslint_light",ex:"_elixir_light",exs:"_elixir_script_light",firebaserc:"_firebase_light",flac:"_audio_light",gd:"_godot_light",gif:"_image_light",gitattributes:"_git_light",gitconfig:"_git_light","github-issues":"_github_light",gitkeep:"_git_light","gitlab-ci.yml":"_gitlab_light",gitmodules:"_git_light",godot:"_godot_1_light",gql:"_graphql_light",gradle:"_gradle_light",graphql:"_graphql_light",graphqls:"_graphql_light",gsp:"_grails_light",h:"_c_1_light","h++":"_cpp_1_light",hack:"_hacklang_light",haml:"_haml_light",happenings:"_happenings_light",hh:"_cpp_1_light",hpp:"_cpp_1_light",hs:"_haskell_light",htaccess:"_config_light","html.erb":"_html_erb_light",hu:"_cu_1_light",hx:"_haxe_light",hxml:"_haxe_3_light",hxp:"_haxe_2_light",hxs:"_haxe_1_light",hxx:"_cpp_1_light",ico:"_favicon_light",ins:"_tex_3_light",ipynb:"_notebook_light",jade:"_jade_light",jar:"_zip_light",jinja:"_jinja_light",jinja2:"_jinja_light",jpeg:"_image_light",jpg:"_image_light","js.map":"_javascript_light",jscsrc:"_javascript_2_light",jshintrc:"_javascript_2_light",key:"_lock_light",kt:"_kotlin_light",kts:"_kotlin_light",lhs:"_haskell_light",liquid:"_liquid_light",litcoffee:"_coffee_light",ls:"_livescript_light",master:"_html_2_light",mdo:"_mdo_light","mjs.map":"_javascript_light",ml:"_ocaml_light",mli:"_ocaml_light",mov:"_video_light",mp3:"_audio_light",mp4:"_video_light",mpg:"_video_light",mustache:"_mustache_light",nim:"_nim_light",nims:"_nim_light",nj:"_nunjucks_light",njk:"_nunjucks_light",njs:"_nunjucks_light","npm-debug.log":"_npm_light",npmignore:"_npm_1_light",npmrc:"_npm_1_light",nunj:"_nunjucks_light",nunjs:"_nunjucks_light",nunjucks:"_nunjucks_light",obj:"_svg_1_light",odata:"_odata_light",ogg:"_audio_light",ogv:"_video_light",otf:"_font_light",pddl:"_pddl_light",pdf:"_pdf_light",pem:"_lock_light","php.inc":"_php_light",pipeline:"_pipeline_light",plan:"_plan_light",png:"_image_light",pp:"_puppet_light",prisma:"_prisma_light",pro:"_prolog_light",psd:"_photoshop_light",purs:"_purescript_light",pxm:"_image_light",r:"_R_light",re:"_reasonml_light",res:"_rescript_light",resi:"_rescript_1_light",rmd:"_R_light",s:"_asm_light",sass:"_sass_light",sbt:"_sbt_light",scala:"_scala_light",slang:"_crystal_embedded_light",slide:"_go_light",slim:"_slim_light",slugignore:"_config_light","smarty.tpl":"_smarty_light",sol:"_ethereum_light",soql:"_db_1_light","spec.cjs":"_javascript_1_light","spec.js":"_javascript_1_light","spec.jsx":"_react_1_light","spec.mjs":"_javascript_1_light","spec.ts":"_typescript_1_light","spec.tsx":"_react_1_light",springbeans:"_spring_light",sss:"_css_light",stache:"_mustache_light",static:"_config_light",stl:"_svg_1_light",styl:"_stylus_light",stylelintignore:"_stylelint_1_light",stylelintrc:"_stylelint_light","stylelintrc.js":"_stylelint_light","stylelintrc.json":"_stylelint_light","stylelintrc.yaml":"_stylelint_light","stylelintrc.yml":"_stylelint_light","sublime-project":"_sublime_light","sublime-workspace":"_sublime_light",svelte:"_svelte_light",svg:"_svg_light",svgx:"_image_light","test.cjs":"_javascript_1_light","test.js":"_javascript_1_light","test.jsx":"_react_1_light","test.mjs":"_javascript_1_light","test.ts":"_typescript_1_light","test.tsx":"_react_1_light",tf:"_terraform_light","tf.json":"_terraform_light",tfvars:"_terraform_light","tfvars.json":"_terraform_light",tiff:"_image_light",tmp:"_clock_1_light",toml:"_config_light",tpl:"_smarty_light",tres:"_godot_2_light",tscn:"_godot_3_light",ttf:"_font_light",twig:"_twig_light",vala:"_vala_light",vapi:"_vala_light",vue:"_vue_light",wasm:"_wasm_light",wat:"_wat_light",wav:"_audio_light",webm:"_video_light",webp:"_image_light",wgt:"_wgt_light",woff:"_font_light",woff2:"_font_light",workspace:"_bazel_light",xls:"_xls_light",xlsx:"_xls_light",zig:"_zig_light",zip:"_zip_1_light"},nd={argdown:"_argdown_light",bat:"_windows_light",bicep:"_bicep_light",blade:"_php_light",c:"_c_light",chatagent:"_markdown_light",clojure:"_clojure_light",coffeescript:"_coffee_light",cpp:"_cpp_light",csharp:"_c-sharp_light",css:"_css_light","cuda-cpp":"_cu_light",dart:"_dart_light","django-html":"_html_3_light",dockercompose:"_docker_3_light",dockerfile:"_docker_light",dotenv:"_config_light",elixir:"_elixir_light",elm:"_elm_light",erb:"_html_erb_light",fsharp:"_f-sharp_light","git-commit":"_git_light","github-issues":"_github_light",go:"_go2_light",godot:"_godot_light",gradle:"_gradle_light",groovy:"_grails_light",haml:"_haml_light",handlebars:"_mustache_light",haskell:"_haskell_light",haxe:"_haxe_light",html:"_html_3_light",ignore:"_git_light",instructions:"_markdown_light",jade:"_pug_light",java:"_java_light",javascript:"_javascript_light",javascriptreact:"_react_light",jinja:"_jinja_light",json:"_json_light",jsonc:"_json_light",jsonl:"_json_light",julia:"_julia_light",kotlin:"_kotlin_light",latex:"_tex_light",less:"_less_light",lua:"_lua_light",makefile:"_makefile_light",markdown:"_markdown_light",mustache:"_mustache_light",nunjucks:"_nunjucks_light","objective-c":"_c_2_light","objective-cpp":"_cpp_2_light",ocaml:"_ocaml_light",perl:"_perl_light",php:"_php_light",postcss:"_css_light",powershell:"_powershell_light",prompt:"_markdown_light",properties:"_config_light",python:"_python_light",r:"_R_light",razor:"_html_light",rescript:"_rescript_light",ruby:"_ruby_light",rust:"_rust_light",sass:"_sass_light",scss:"_sass_light","search-result":"_code-search_light",shellscript:"_shell_light",skill:"_markdown_light",sql:"_db_light",stylus:"_stylus_light",swift:"_swift_light",terraform:"_terraform_light",tex:"_tex_1_light",typescript:"_typescript_light",typescriptreact:"_react_light",vala:"_vala_light",vue:"_vue_light",xml:"_xml_light",yaml:"_yml_light"},np="_default_light",nu={".bash":"shellscript",".bat":"bat",".c":"c",".cc":"cpp",".cjs":"javascript",".clj":"clojure",".cljc":"clojure",".cljs":"clojure",".cmd":"bat",".coffee":"coffeescript",".cpp":"cpp",".cs":"csharp",".cshtml":"razor",".css":"css",".cu":"cuda-cpp",".cxx":"cpp",".dart":"dart",".dockerfile":"dockerfile",".fs":"fsharp",".fsx":"fsharp",".gitignore":"ignore",".go":"go",".gradle":"groovy",".groovy":"groovy",".h":"c",".handlebars":"handlebars",".hbs":"handlebars",".hpp":"cpp",".htm":"html",".html":"html",".java":"java",".jl":"julia",".js":"javascript",".json":"json",".jsonc":"jsonc",".jsx":"javascriptreact",".kt":"kotlin",".kts":"kotlin",".less":"less",".lua":"lua",".m":"objective-c",".makefile":"makefile",".markdown":"markdown",".md":"markdown",".mjs":"javascript",".mk":"makefile",".mm":"objective-cpp",".npmignore":"ignore",".php":"php",".pl":"perl",".pm":"perl",".properties":"properties",".ps1":"powershell",".psm1":"powershell",".py":"python",".r":"r",".rb":"ruby",".rs":"rust",".sass":"scss",".scss":"scss",".sh":"shellscript",".sql":"sql",".swift":"swift",".tex":"latex",".ts":"typescript",".tsx":"typescriptreact",".xml":"xml",".xsd":"xml",".xsl":"xml",".yaml":"yaml",".yml":"yaml",".zsh":"shellscript"};function ng(t){let i=ns[t];if(null!=i)return{character:i[0],color:i[1]}}var nf=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,nb=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?nm(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&nf(i,r,n),n};let n_=class extends lit_element_i{render(){if(null==this.filename)return tn;let t=document.body.classList.contains("vscode-light")||document.body.classList.contains("vscode-high-contrast-light"),i=function(t,i=!1){let r=t.toLowerCase(),o=(i?nc:nn)[r];if(null!=o)return ng(o);let s=i?nh:na,n=r.indexOf(".");for(;-1!==n&&n<r.length-1;){if(null!=(o=s[r.substring(n+1)]))return ng(o);n=r.indexOf(".",n+1)}let a=r.lastIndexOf(".");if(-1!==a){let t=nu[r.substring(a)];if(null!=t&&null!=(o=(i?nd:nl)[t]))return ng(o)}return ng(i&&np?np:"_default")}(this.filename,t);return null==i?tn:tr`<span class="font-icon" style=${no({color:i.color||"inherit"})}
			>${function(t){if(1===t.length)return t;let i=/^\\+(?:u)?([0-9a-fA-F]{4,6})$/.exec(t);return null!=i?String.fromCodePoint(parseInt(i[1],16)):t}(i.character)}</span
		>`}};n_.styles=tR`
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
	`,nb([tY()],n_.prototype,"filename",2),n_=nb([tX("gl-file-icon")],n_);let nv={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Added (Both)",AU:"Added (Current)",UA:"Added (Incoming)",DD:"Deleted (Both)",DU:"Deleted (Current)",UD:"Deleted (Incoming)",UU:"Modified (Both)",T:"Modified",U:"Updated but Unmerged"};var ny=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,nk=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?nw(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&ny(i,r,n),n};let nx=class extends lit_element_i{get statusName(){return this.status?nv[this.status]??"Unknown":""}updated(t){super.updated(t),t.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"),this.status?.length===2?this.setAttribute("conflict",""):this.removeAttribute("conflict"))}renderIgnored(){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflictGlyphs(t,i,r,o,s,n){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="none" viewBox="0 0 22 16">
				<path d="M3 0H10V16H3C1.35 16 0 14.65 0 13V3C0 1.35 1.35 0 3 0Z" fill="${t}" />
				<path d="M12 0H19C20.65 0 22 1.35 22 3V13C22 14.65 20.65 16 19 16H12V0Z" fill="${o}" />
				<text
					x="5"
					y="7"
					dominant-baseline="central"
					text-anchor="middle"
					font-size="12"
					font-weight="700"
					fill="${r}"
				>
					${i}
				</text>
				<text
					x="17"
					y="7"
					dominant-baseline="central"
					text-anchor="middle"
					font-size="12"
					font-weight="700"
					fill="${n}"
				>
					${s}
				</text>
			</svg>
		`}renderConflictUU(){let t="var(--gl-git-status-conflict-modified, #c4a000)";return this.renderConflictGlyphs(t,"±","#000",t,"±","#000")}renderConflictAA(){let t="var(--gl-git-status-added)";return this.renderConflictGlyphs(t,"+","#fff",t,"+","#fff")}renderConflictDD(){let t="var(--gl-git-status-deleted)";return this.renderConflictGlyphs(t,"−","#fff",t,"−","#fff")}renderConflictDU(){return this.renderConflictGlyphs("var(--gl-git-status-deleted)","−","#fff","var(--gl-git-status-conflict-modified, #c4a000)","±","#000")}renderConflictUD(){return this.renderConflictGlyphs("var(--gl-git-status-conflict-modified, #c4a000)","±","#000","var(--gl-git-status-deleted)","−","#fff")}renderConflictAU(){return this.renderConflictGlyphs("var(--gl-git-status-added)","+","#fff","var(--gl-git-status-conflict-modified, #c4a000)","±","#000")}renderConflictUA(){return this.renderConflictGlyphs("var(--gl-git-status-conflict-modified, #c4a000)","±","#000","var(--gl-git-status-added)","+","#fff")}renderUnknown(){return tr`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":return this.renderConflictAA();case"AU":return this.renderConflictAU();case"UA":return this.renderConflictUA();case"DD":return this.renderConflictDD();case"DU":return this.renderConflictDU();case"UD":return this.renderConflictUD();case"UU":return this.renderConflictUU()}return this.renderUnknown()}};nx.styles=[tR`
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
		`],nk([tY()],nx.prototype,"status",2),nk([t0()],nx.prototype,"statusName",1),nx=nk([tX("gl-git-status")],nx);var nC=Object.defineProperty,n$=Object.getOwnPropertyDescriptor,nE=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?n$(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&nC(i,r,n),n};let nS=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(t){if(t.has("href")&&this.setAttribute("role",this.href?"link":"button"),t.has("disabled")){let i=t.get("disabled");i?this.setAttribute("aria-disabled",i.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(t)}render(){return this.tooltip?tr`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??tn}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?tr`<gl-tooltip placement=${this.tooltipPlacement??tn}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?tr`<a
				class="control"
				aria-label=${this.ariaLabel??tn}
				tabindex="${(!1===this.disabled?void 0:-1)??tn}"
				href=${this.href}
				@keypress=${t=>this.onLinkKeypress(t)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:tr`<button
			class="control"
			role=${this.role??tn}
			aria-label=${this.ariaLabel??tn}
			aria-checked=${this.ariaChecked??tn}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(t){" "===t.key&&this.control.click()}focus(t){this.control.focus(t)}blur(){this.control.blur()}click(){this.control.click()}};function nA(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}nS.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nS.styles=[rU,tR`
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
				${rN}
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
		`],nE([t2(".control")],nS.prototype,"control",2),nE([tY({reflect:!0})],nS.prototype,"appearance",2),nE([tY({reflect:!0})],nS.prototype,"variant",2),nE([tY({type:Boolean,reflect:!0})],nS.prototype,"disabled",2),nE([tY({reflect:!0})],nS.prototype,"density",2),nE([tY({type:Boolean,reflect:!0})],nS.prototype,"full",2),nE([tY()],nS.prototype,"href",2),nE([tY()],nS.prototype,"tooltip",2),nE([tY()],nS.prototype,"tooltipPlacement",2),nE([tY({type:Boolean,reflect:!0})],nS.prototype,"truncate",2),nE([tY({type:String,attribute:"aria-label"})],nS.prototype,"ariaLabel",2),nS=nE([tX("gl-button")],nS);var nI=nA(),nz={exec:()=>null};function nP(t){let i=[];return r=>{let o=Math.max(0,Math.min(3,r-1)),s=i[o];return s||(s=t(o),i[o]=s),s}}function nT(t,i=""){let r="string"==typeof t?t:t.source,o={replace:(t,i)=>{let s="string"==typeof i?i:i.source;return s=s.replace(nR.caret,"$1"),r=r.replace(t,s),o},getRegex:()=>new RegExp(r,i)};return o}var nj=((t="")=>{try{return!!RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),nR={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:nP(t=>RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:nP(t=>RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:nP(t=>RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:nP(t=>RegExp(`^ {0,${t}}#`)),htmlBeginRegex:nP(t=>RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:nP(t=>RegExp(`^ {0,${t}}>`))},nM=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,nO=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,nL=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nD=nT(nL).replace(/bull/g,nO).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),nB=nT(nL).replace(/bull/g,nO).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),nF=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nN=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,nU=nT(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",nN).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),nq=nT(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,nO).getRegex(),nV="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",nH=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,nK=nT("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",nH).replace("tag",nV).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nW=nT(nF).replace("hr",nM).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nV).getRegex(),nG={blockquote:nT(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nW).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:nU,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:nM,html:nK,lheading:nD,list:nq,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:nW,table:nz,text:/^[^\n]+/},nZ=nT("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",nM).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nV).getRegex(),nQ={...nG,lheading:nB,table:nZ,paragraph:nT(nF).replace("hr",nM).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nZ).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nV).getRegex()},nX={...nG,html:nT("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",nH).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nz,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:nT(nF).replace("hr",nM).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nD).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nJ=/^( {2,}|\\)\n(?!\s*$)/,nY=/[\p{P}\p{S}]/u,n0=/[\s\p{P}\p{S}]/u,n1=/[^\s\p{P}\p{S}]/u,n2=nT(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,n0).getRegex(),n5=/(?!~)[\p{P}\p{S}]/u,n3=nT(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",nj?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),n4=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,n7=nT(n4,"u").replace(/punct/g,nY).getRegex(),n6=nT(n4,"u").replace(/punct/g,n5).getRegex(),n8="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",n9=nT(n8,"gu").replace(/notPunctSpace/g,n1).replace(/punctSpace/g,n0).replace(/punct/g,nY).getRegex(),ae=nT(n8,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,n5).getRegex(),at=nT("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,n1).replace(/punctSpace/g,n0).replace(/punct/g,nY).getRegex(),ai=nT(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,nY).getRegex(),ar=nT("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)","gu").replace(/notPunctSpace/g,n1).replace(/punctSpace/g,n0).replace(/punct/g,nY).getRegex(),ao=nT(/\\(punct)/,"gu").replace(/punct/g,nY).getRegex(),as=nT(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),an=nT(nH).replace("(?:--\x3e|$)","--\x3e").getRegex(),aa=nT("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",an).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),al=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,ac=nT(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",al).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ah=nT(/^!?\[(label)\]\[(ref)\]/).replace("label",al).replace("ref",nN).getRegex(),ad=nT(/^!?\[(ref)\](?:\[\])?/).replace("ref",nN).getRegex(),ap=nT("reflink|nolink(?!\\()","g").replace("reflink",ah).replace("nolink",ad).getRegex(),au=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ag={_backpedal:nz,anyPunctuation:ao,autolink:as,blockSkip:n3,br:nJ,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:nz,delLDelim:nz,delRDelim:nz,emStrongLDelim:n7,emStrongRDelimAst:n9,emStrongRDelimUnd:at,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:ac,nolink:ad,punctuation:n2,reflink:ah,reflinkSearch:ap,tag:aa,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:nz},af={...ag,link:nT(/^!?\[(label)\]\((.*?)\)/).replace("label",al).getRegex(),reflink:nT(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",al).getRegex()},am={...ag,emStrongRDelimAst:ae,emStrongLDelim:n6,delLDelim:ai,delRDelim:ar,url:nT(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",au).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:nT(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",au).getRegex()},ab={...am,br:nT(nJ).replace("{2,}","*").getRegex(),text:nT(am.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},a_={normal:nG,gfm:nQ,pedantic:nX},av={normal:ag,gfm:am,breaks:ab,pedantic:af},ay={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},aw=t=>ay[t];function ak(t,i){if(i){if(nR.escapeTest.test(t))return t.replace(nR.escapeReplace,aw)}else if(nR.escapeTestNoEncode.test(t))return t.replace(nR.escapeReplaceNoEncode,aw);return t}function ax(t){try{t=encodeURI(t).replace(nR.percentDecode,"%")}catch{return null}return t}function aC(t,i){let r=t.replace(nR.findPipe,(t,i,r)=>{let o=!1,s=i;for(;--s>=0&&"\\"===r[s];)o=!o;return o?"|":" |"}).split(nR.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),i)if(r.length>i)r.splice(i);else for(;r.length<i;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(nR.slashPipe,"|");return r}function a$(t,i,r){let o=t.length;if(0===o)return"";let s=0;for(;s<o;){let n=t.charAt(o-s-1);if(n!==i||r)if(n!==i&&r)s++;else break;else s++}return t.slice(0,o-s)}function aE(t){let i=t.split(`
`),r=i.length-1;for(;r>=0&&nR.blankLine.test(i[r]);)r--;return i.length-r<=2?t:i.slice(0,r+1).join(`
`)}function aS(t,i,r,o,s){let n=i.href,a=i.title||null,c=t[1].replace(s.other.outputLinkReplace,"$1");o.state.inLink=!0;let h={type:"!"===t[0].charAt(0)?"image":"link",raw:r,href:n,title:a,text:c,tokens:o.inlineTokens(c)};return o.state.inLink=!1,h}var aA=class{options;rules;lexer;constructor(t){this.options=t||nI}space(t){let i=this.rules.block.newline.exec(t);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(t){let i=this.rules.block.code.exec(t);if(i){let t=this.options.pedantic?i[0]:aE(i[0]),r=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:r}}}fences(t){let i=this.rules.block.fences.exec(t);if(i){let t=i[0],r=function(t,i,r){let o=t.match(r.other.indentCodeCompensation);if(null===o)return i;let s=o[1];return i.split(`
`).map(t=>{let i=t.match(r.other.beginningSpace);if(null===i)return t;let[o]=i;return o.length>=s.length?t.slice(s.length):t}).join(`
`)}(t,i[3]||"",this.rules);return{type:"code",raw:t,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:r}}}heading(t){let i=this.rules.block.heading.exec(t);if(i){let t=i[2].trim();if(this.rules.other.endingHash.test(t)){let i=a$(t,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(t=i.trim())}return{type:"heading",raw:a$(i[0],`
`),depth:i[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(t){let i=this.rules.block.hr.exec(t);if(i)return{type:"hr",raw:a$(i[0],`
`)}}blockquote(t){let i=this.rules.block.blockquote.exec(t);if(i){let t=a$(i[0],`
`).split(`
`),r="",o="",s=[];for(;t.length>0;){let i=!1,n=[],a;for(a=0;a<t.length;a++)if(this.rules.other.blockquoteStart.test(t[a]))n.push(t[a]),i=!0;else if(i)break;else n.push(t[a]);t=t.slice(a);let c=n.join(`
`),h=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,o=o?`${o}
${h}`:h;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,s,!0),this.lexer.state.top=p,0===t.length)break;let u=s.at(-1);if(u?.type==="code")break;if(u?.type==="blockquote"){let i=u.raw+`
`+t.join(`
`),n=this.blockquote(i);s[s.length-1]=n,r=r.substring(0,r.length-u.raw.length)+n.raw,o=o.substring(0,o.length-u.text.length)+n.text;break}if(u?.type==="list"){let i=u.raw+`
`+t.join(`
`),n=this.list(i);s[s.length-1]=n,r=r.substring(0,r.length-u.raw.length)+n.raw,o=o.substring(0,o.length-u.raw.length)+n.raw,t=i.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:o}}}list(t){let i=this.rules.block.list.exec(t);if(i){let r=i[1].trim(),o=r.length>1,s={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");let n=this.rules.other.listItemRegex(r),a=!1;for(;t;){let r=!1,o="",c="";if(!(i=n.exec(t))||this.rules.block.hr.test(t))break;o=i[0],t=t.substring(o.length);let h=function(t,i=0){let r=i,o="";for(let i of t)if("	"===i){let t=4-r%4;o+=" ".repeat(t),r+=t}else o+=i,r++;return o}(i[2].split(`
`,1)[0],i[1].length),p=t.split(`
`,1)[0],u=!h.trim(),g=0;if(this.options.pedantic?(g=2,c=h.trimStart()):u?g=i[1].length+1:(g=(g=h.search(this.rules.other.nonSpaceChar))>4?1:g,c=h.slice(g),g+=i[1].length),u&&this.rules.other.blankLine.test(p)&&(o+=p+`
`,t=t.substring(p.length+1),r=!0),!r){let i=this.rules.other.nextBulletRegex(g),r=this.rules.other.hrRegex(g),s=this.rules.other.fencesBeginRegex(g),n=this.rules.other.headingBeginRegex(g),a=this.rules.other.htmlBeginRegex(g),f=this.rules.other.blockquoteBeginRegex(g);for(;t;){let m=t.split(`
`,1)[0],b;if(p=m,b=this.options.pedantic?p=p.replace(this.rules.other.listReplaceNesting,"  "):p.replace(this.rules.other.tabCharGlobal,"    "),s.test(p)||n.test(p)||a.test(p)||f.test(p)||i.test(p)||r.test(p))break;if(b.search(this.rules.other.nonSpaceChar)>=g||!p.trim())c+=`
`+b.slice(g);else{if(u||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||s.test(h)||n.test(h)||r.test(h))break;c+=`
`+p}u=!p.trim(),o+=m+`
`,t=t.substring(m.length+1),h=b.slice(g)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(a=!0)),s.items.push({type:"list_item",raw:o,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),s.raw+=o}let c=s.items.at(-1);if(!c)return;for(let t of(c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),s.raw=s.raw.trimEnd(),s.items)){this.lexer.state.top=!1,t.tokens=this.lexer.blockTokens(t.text,[]);let i=t.tokens[0];if(t.task&&(i?.type==="text"||i?.type==="paragraph")){t.text=t.text.replace(this.rules.other.listReplaceTask,""),i.raw=i.raw.replace(this.rules.other.listReplaceTask,""),i.text=i.text.replace(this.rules.other.listReplaceTask,"");for(let t=this.lexer.inlineQueue.length-1;t>=0;t--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[t].src)){this.lexer.inlineQueue[t].src=this.lexer.inlineQueue[t].src.replace(this.rules.other.listReplaceTask,"");break}let r=this.rules.other.listTaskCheckbox.exec(t.raw);if(r){let i={type:"checkbox",raw:r[0]+" ",checked:"[ ]"!==r[0]};t.checked=i.checked,s.loose?t.tokens[0]&&["paragraph","text"].includes(t.tokens[0].type)&&"tokens"in t.tokens[0]&&t.tokens[0].tokens?(t.tokens[0].raw=i.raw+t.tokens[0].raw,t.tokens[0].text=i.raw+t.tokens[0].text,t.tokens[0].tokens.unshift(i)):t.tokens.unshift({type:"paragraph",raw:i.raw,text:i.raw,tokens:[i]}):t.tokens.unshift(i)}}else t.task&&(t.task=!1);if(!s.loose){let i=t.tokens.filter(t=>"space"===t.type);s.loose=i.length>0&&i.some(t=>this.rules.other.anyLine.test(t.raw))}}if(s.loose)for(let t of s.items)for(let i of(t.loose=!0,t.tokens))"text"===i.type&&(i.type="paragraph");return s}}html(t){let i=this.rules.block.html.exec(t);if(i){let t=aE(i[0]);return{type:"html",block:!0,raw:t,pre:"pre"===i[1]||"script"===i[1]||"style"===i[1],text:t}}}def(t){let i=this.rules.block.def.exec(t);if(i){let t=i[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=i[2]?i[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:t,raw:a$(i[0],`
`),href:r,title:o}}}table(t){let i=this.rules.block.table.exec(t);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let r=aC(i[1]),o=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=i[3]?.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:a$(i[0],`
`),header:[],align:[],rows:[]};if(r.length===o.length){for(let t of o)this.rules.other.tableAlignRight.test(t)?n.align.push("right"):this.rules.other.tableAlignCenter.test(t)?n.align.push("center"):this.rules.other.tableAlignLeft.test(t)?n.align.push("left"):n.align.push(null);for(let t=0;t<r.length;t++)n.header.push({text:r[t],tokens:this.lexer.inline(r[t]),header:!0,align:n.align[t]});for(let t of s)n.rows.push(aC(t,n.header.length).map((t,i)=>({text:t,tokens:this.lexer.inline(t),header:!1,align:n.align[i]})));return n}}lheading(t){let i=this.rules.block.lheading.exec(t);if(i){let t=i[1].trim();return{type:"heading",raw:a$(i[0],`
`),depth:"="===i[2].charAt(0)?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(t){let i=this.rules.block.paragraph.exec(t);if(i){let t=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:t,tokens:this.lexer.inline(t)}}}text(t){let i=this.rules.block.text.exec(t);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(t){let i=this.rules.inline.escape.exec(t);if(i)return{type:"escape",raw:i[0],text:i[1]}}tag(t){let i=this.rules.inline.tag.exec(t);if(i)return!this.lexer.state.inLink&&this.rules.other.startATag.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(t){let i=this.rules.inline.link.exec(t);if(i){let t=i[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let i=a$(t.slice(0,-1),"\\");if((t.length-i.length)%2==0)return}else{let t=function(t){if(-1===t.indexOf(")"))return -1;let i=0;for(let r=0;r<t.length;r++)if("\\"===t[r])r++;else if("("===t[r])i++;else if(")"===t[r]&&--i<0)return r;return i>0?-2:-1}(i[2]);if(-2===t)return;if(t>-1){let r=(0===i[0].indexOf("!")?5:4)+i[1].length+t;i[2]=i[2].substring(0,t),i[0]=i[0].substring(0,r).trim(),i[3]=""}}let r=i[2],o="";if(this.options.pedantic){let t=this.rules.other.pedanticHrefTitle.exec(r);t&&(r=t[1],o=t[3])}else o=i[3]?i[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(r=this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r.slice(1):r.slice(1,-1)),aS(i,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer,this.rules)}}reflink(t,i){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let t=i[(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!t){let t=r[0].charAt(0);return{type:"text",raw:t,text:t}}return aS(r,t,r[0],this.lexer,this.rules)}}emStrong(t,i,r=""){let o=this.rules.inline.emStrongLDelim.exec(t);if(!(!o||!o[1]&&!o[2]&&!o[3]&&!o[4]||o[4]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[3])||!r||this.rules.inline.punctuation.exec(r))){let r=[...o[0]].length-1,s,n,a=r,c=0,h="*"===o[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,i=i.slice(-1*t.length+r);null!==(o=h.exec(i));){if(!(s=o[1]||o[2]||o[3]||o[4]||o[5]||o[6]))continue;if(n=[...s].length,o[3]||o[4]){a+=n;continue}if((o[5]||o[6])&&r%3&&!((r+n)%3)){c+=n;continue}if((a-=n)>0)continue;n=Math.min(n,n+a+c);let i=[...o[0]][0].length,h=t.slice(0,r+o.index+i+n);if(Math.min(r,n)%2){let t=h.slice(1,-1);return{type:"em",raw:h,text:t,tokens:this.lexer.inlineTokens(t)}}let p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){let i=this.rules.inline.code.exec(t);if(i){let t=i[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),o=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&o&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:i[0],text:t}}}br(t){let i=this.rules.inline.br.exec(t);if(i)return{type:"br",raw:i[0]}}del(t,i,r=""){let o=this.rules.inline.delLDelim.exec(t);if(o&&(!o[1]||!r||this.rules.inline.punctuation.exec(r))){let r=[...o[0]].length-1,s,n,a=r,c=this.rules.inline.delRDelim;for(c.lastIndex=0,i=i.slice(-1*t.length+r);null!==(o=c.exec(i));){if(!(s=o[1]||o[2]||o[3]||o[4]||o[5]||o[6])||(n=[...s].length)!==r)continue;if(o[3]||o[4]){a+=n;continue}if((a-=n)>0)continue;n=Math.min(n,n+a);let i=[...o[0]][0].length,c=t.slice(0,r+o.index+i+n),h=c.slice(r,-r);return{type:"del",raw:c,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(t){let i=this.rules.inline.autolink.exec(t);if(i){let t,r;return r="@"===i[2]?"mailto:"+(t=i[1]):t=i[1],{type:"link",raw:i[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(t){let i;if(i=this.rules.inline.url.exec(t)){let t,r;if("@"===i[2])r="mailto:"+(t=i[0]);else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])?.[0]??"";while(o!==i[0])t=i[0],r="www."===i[1]?"http://"+i[0]:i[0]}return{type:"link",raw:i[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(t){let i=this.rules.inline.text.exec(t);if(i){let t=this.lexer.state.inRawBlock;return{type:"text",raw:i[0],text:i[0],escaped:t}}}},aI=class l{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||nI,this.options.tokenizer=this.options.tokenizer||new aA,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:nR,block:a_.normal,inline:av.normal};this.options.pedantic?(i.block=a_.pedantic,i.inline=av.pedantic):this.options.gfm&&(i.block=a_.gfm,this.options.breaks?i.inline=av.breaks:i.inline=av.gfm),this.tokenizer.rules=i}static get rules(){return{block:a_,inline:av}}static lex(t,i){return new l(i).lex(t)}static lexInline(t,i){return new l(i).inlineTokens(t)}lex(t){t=t.replace(nR.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let i=this.inlineQueue[t];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,i=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(nR.tabCharGlobal,"    ").replace(nR.spaceLine,""));let o=1/0;for(;t;){let s;if(t.length<o)o=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}if(this.options.extensions?.block?.some(r=>!!(s=r.call({lexer:this},t,i))&&(t=t.substring(s.raw.length),i.push(s),!0)))continue;if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length);let r=i.at(-1);1===s.raw.length&&void 0!==r?r.raw+=`
`:i.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length);let r=i.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+s.raw,r.text+=`
`+s.text,this.inlineQueue.at(-1).src=r.text):i.push(s);continue}if((s=this.tokenizer.fences(t))||(s=this.tokenizer.heading(t))||(s=this.tokenizer.hr(t))||(s=this.tokenizer.blockquote(t))||(s=this.tokenizer.list(t))||(s=this.tokenizer.html(t))){t=t.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length);let r=i.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+s.raw,r.text+=`
`+s.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},i.push(s));continue}if((s=this.tokenizer.table(t))||(s=this.tokenizer.lheading(t))){t=t.substring(s.raw.length),i.push(s);continue}let n=t;if(this.options.extensions?.startBlock){let i=1/0,r=t.slice(1),o;this.options.extensions.startBlock.forEach(t=>{"number"==typeof(o=t.call({lexer:this},r))&&o>=0&&(i=Math.min(i,o))}),i<1/0&&i>=0&&(n=t.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(n))){let o=i.at(-1);r&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):i.push(s),r=n.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length);let r=i.at(-1);r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+s.raw,r.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):i.push(s);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let r;this.tokenizer.lexer=this;let o=t,s=null;if(this.tokens.links){let t=Object.keys(this.tokens.links);if(t.length>0)for(;null!==(s=this.tokenizer.rules.inline.reflinkSearch.exec(o));)t.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!==(s=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,s.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!==(s=this.tokenizer.rules.inline.blockSkip.exec(o));)r=s[2]?s[2].length:0,o=o.slice(0,s.index+r)+"["+"a".repeat(s[0].length-r-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=this.options.hooks?.emStrongMask?.call({lexer:this},o)??o;let n=!1,a="",c=1/0;for(;t;){let r;if(t.length<c)c=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}if(n||(a=""),n=!1,this.options.extensions?.inline?.some(o=>!!(r=o.call({lexer:this},t,i))&&(t=t.substring(r.raw.length),i.push(r),!0)))continue;if((r=this.tokenizer.escape(t))||(r=this.tokenizer.tag(t))||(r=this.tokenizer.link(t))){t=t.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(r.raw.length);let o=i.at(-1);"text"===r.type&&o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):i.push(r);continue}if((r=this.tokenizer.emStrong(t,o,a))||(r=this.tokenizer.codespan(t))||(r=this.tokenizer.br(t))||(r=this.tokenizer.del(t,o,a))||(r=this.tokenizer.autolink(t))||!this.state.inLink&&(r=this.tokenizer.url(t))){t=t.substring(r.raw.length),i.push(r);continue}let s=t;if(this.options.extensions?.startInline){let i=1/0,r=t.slice(1),o;this.options.extensions.startInline.forEach(t=>{"number"==typeof(o=t.call({lexer:this},r))&&o>=0&&(i=Math.min(i,o))}),i<1/0&&i>=0&&(s=t.substring(0,i+1))}if(r=this.tokenizer.inlineText(s)){t=t.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(a=r.raw.slice(-1)),n=!0;let o=i.at(-1);o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):i.push(r);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return i}infiniteLoopError(t){if(this.options.silent);else throw Error("Infinite loop on byte: "+t)}},az=class{options;parser;constructor(t){this.options=t||nI}space(t){return""}code({text:t,lang:i,escaped:r}){let o=(i||"").match(nR.notSpaceStart)?.[0],s=t.replace(nR.endingNewline,"")+`
`;return o?'<pre><code class="language-'+ak(o)+'">'+(r?s:ak(s,!0))+`</code></pre>
`:"<pre><code>"+(r?s:ak(s,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:i}){return`<h${i}>${this.parser.parseInline(t)}</h${i}>
`}hr(t){return`<hr>
`}list(t){let i=t.ordered,r=t.start,o="";for(let i=0;i<t.items.length;i++){let r=t.items[i];o+=this.listitem(r)}let s=i?"ol":"ul";return"<"+s+(i&&1!==r?' start="'+r+'"':"")+`>
`+o+"</"+s+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let i="",r="";for(let i=0;i<t.header.length;i++)r+=this.tablecell(t.header[i]);i+=this.tablerow({text:r});let o="";for(let i=0;i<t.rows.length;i++){let s=t.rows[i];r="";for(let t=0;t<s.length;t++)r+=this.tablecell(s[t]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+o+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let i=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+i+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${ak(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:i,tokens:r}){let o=this.parser.parseInline(r),s=ax(t);if(null===s)return o;let n='<a href="'+(t=s)+'"';return i&&(n+=' title="'+ak(i)+'"'),n+=">"+o+"</a>"}image({href:t,title:i,text:r,tokens:o}){o&&(r=this.parser.parseInline(o,this.parser.textRenderer));let s=ax(t);if(null===s)return ak(r);t=s;let n=`<img src="${t}" alt="${ak(r)}"`;return i&&(n+=` title="${ak(i)}"`),n+=">"}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:ak(t.text)}},aP=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},aT=class l{options;renderer;textRenderer;constructor(t){this.options=t||nI,this.options.renderer=this.options.renderer||new az,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new aP}static parse(t,i){return new l(i).parse(t)}static parseInline(t,i){return new l(i).parseInline(t)}parse(t){this.renderer.parser=this;let i="";for(let r=0;r<t.length;r++){let o=t[r];if(this.options.extensions?.renderers?.[o.type]){let t=this.options.extensions.renderers[o.type].call({parser:this},o);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){i+=t||"";continue}}switch(o.type){case"space":i+=this.renderer.space(o);break;case"hr":i+=this.renderer.hr(o);break;case"heading":i+=this.renderer.heading(o);break;case"code":i+=this.renderer.code(o);break;case"table":i+=this.renderer.table(o);break;case"blockquote":i+=this.renderer.blockquote(o);break;case"list":i+=this.renderer.list(o);break;case"checkbox":i+=this.renderer.checkbox(o);break;case"html":i+=this.renderer.html(o);break;case"def":i+=this.renderer.def(o);break;case"paragraph":i+=this.renderer.paragraph(o);break;case"text":i+=this.renderer.text(o);break;default:{let t='Token with "'+o.type+'" type was not found.';if(this.options.silent)return"";throw Error(t)}}}return i}parseInline(t,i=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<t.length;o++){let s=t[o];if(this.options.extensions?.renderers?.[s.type]){let t=this.options.extensions.renderers[s.type].call({parser:this},s);if(!1!==t||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=t||"";continue}}switch(s.type){case"escape":case"text":r+=i.text(s);break;case"html":r+=i.html(s);break;case"link":r+=i.link(s);break;case"image":r+=i.image(s);break;case"checkbox":r+=i.checkbox(s);break;case"strong":r+=i.strong(s);break;case"em":r+=i.em(s);break;case"codespan":r+=i.codespan(s);break;case"br":r+=i.br(s);break;case"del":r+=i.del(s);break;default:{let t='Token with "'+s.type+'" type was not found.';if(this.options.silent)return"";throw Error(t)}}}return r}},aj=class{options;block;constructor(t){this.options=t||nI}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?aI.lex:aI.lexInline}provideParser(t=this.block){return t?aT.parse:aT.parseInline}},aR=class{defaults=nA();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=aT;Renderer=az;TextRenderer=aP;Lexer=aI;Tokenizer=aA;Hooks=aj;constructor(...t){this.use(...t)}walkTokens(t,i){let r=[];for(let o of t)switch(r=r.concat(i.call(this,o)),o.type){case"table":for(let t of o.header)r=r.concat(this.walkTokens(t.tokens,i));for(let t of o.rows)for(let o of t)r=r.concat(this.walkTokens(o.tokens,i));break;case"list":r=r.concat(this.walkTokens(o.items,i));break;default:{let t=o;this.defaults.extensions?.childTokens?.[t.type]?this.defaults.extensions.childTokens[t.type].forEach(o=>{let s=t[o].flat(1/0);r=r.concat(this.walkTokens(s,i))}):t.tokens&&(r=r.concat(this.walkTokens(t.tokens,i)))}}return r}use(...t){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(t=>{if(!t.name)throw Error("extension name required");if("renderer"in t){let r=i.renderers[t.name];r?i.renderers[t.name]=function(...i){let o=t.renderer.apply(this,i);return!1===o&&(o=r.apply(this,i)),o}:i.renderers[t.name]=t.renderer}if("tokenizer"in t){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw Error("extension level must be 'block' or 'inline'");let r=i[t.level];r?r.unshift(t.tokenizer):i[t.level]=[t.tokenizer],t.start&&("block"===t.level?i.startBlock?i.startBlock.push(t.start):i.startBlock=[t.start]:"inline"===t.level&&(i.startInline?i.startInline.push(t.start):i.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(i.childTokens[t.name]=t.childTokens)}),r.extensions=i),t.renderer){let i=this.defaults.renderer||new az(this.defaults);for(let r in t.renderer){if(!(r in i))throw Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let o=t.renderer[r],s=i[r];i[r]=(...t)=>{let r=o.apply(i,t);return!1===r&&(r=s.apply(i,t)),r||""}}r.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new aA(this.defaults);for(let r in t.tokenizer){if(!(r in i))throw Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let o=t.tokenizer[r],s=i[r];i[r]=(...t)=>{let r=o.apply(i,t);return!1===r&&(r=s.apply(i,t)),r}}r.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new aj;for(let r in t.hooks){if(!(r in i))throw Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let o=t.hooks[r],s=i[r];aj.passThroughHooks.has(r)?i[r]=t=>{if(this.defaults.async&&aj.passThroughHooksRespectAsync.has(r))return(async()=>{let r=await o.call(i,t);return s.call(i,r)})();let n=o.call(i,t);return s.call(i,n)}:i[r]=(...t)=>{if(this.defaults.async)return(async()=>{let r=await o.apply(i,t);return!1===r&&(r=await s.apply(i,t)),r})();let r=o.apply(i,t);return!1===r&&(r=s.apply(i,t)),r}}r.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,o=t.walkTokens;r.walkTokens=function(t){let r=[];return r.push(o.call(this,t)),i&&(r=r.concat(i.call(this,t))),r}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,i){return aI.lex(t,i??this.defaults)}parser(t,i){return aT.parse(t,i??this.defaults)}parseMarkdown(t){return(i,r)=>{let o={...r},s={...this.defaults,...o},n=this.onError(!!s.silent,!!s.async);if(!0===this.defaults.async&&!1===o.async)return n(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||null===i)return n(Error("marked(): input parameter is undefined or null"));if("string"!=typeof i)return n(Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=t),s.async)return(async()=>{let r=s.hooks?await s.hooks.preprocess(i):i,o=await (s.hooks?await s.hooks.provideLexer(t):t?aI.lex:aI.lexInline)(r,s),n=s.hooks?await s.hooks.processAllTokens(o):o;s.walkTokens&&await Promise.all(this.walkTokens(n,s.walkTokens));let a=await (s.hooks?await s.hooks.provideParser(t):t?aT.parse:aT.parseInline)(n,s);return s.hooks?await s.hooks.postprocess(a):a})().catch(n);try{s.hooks&&(i=s.hooks.preprocess(i));let r=(s.hooks?s.hooks.provideLexer(t):t?aI.lex:aI.lexInline)(i,s);s.hooks&&(r=s.hooks.processAllTokens(r)),s.walkTokens&&this.walkTokens(r,s.walkTokens);let o=(s.hooks?s.hooks.provideParser(t):t?aT.parse:aT.parseInline)(r,s);return s.hooks&&(o=s.hooks.postprocess(o)),o}catch(t){return n(t)}}}onError(t,i){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let t="<p>An error occurred:</p><pre>"+ak(r.message+"",!0)+"</pre>";return i?Promise.resolve(t):t}if(i)return Promise.reject(r);throw r}}},aM=new aR;function aO(t,i){return aM.parse(t,i)}aO.options=aO.setOptions=function(t){return aM.setOptions(t),aO.defaults=aM.defaults,nI=aO.defaults,aO},aO.getDefaults=nA,aO.defaults=nI,aO.use=function(...t){return aM.use(...t),aO.defaults=aM.defaults,nI=aO.defaults,aO},aO.walkTokens=function(t,i){return aM.walkTokens(t,i)},aO.parseInline=aM.parseInline,aO.Parser=aT,aO.parser=aT.parse,aO.Renderer=az,aO.TextRenderer=aP,aO.Lexer=aI,aO.lexer=aI.lex,aO.Tokenizer=aA,aO.Hooks=aj,aO.parse=aO,aO.options,aO.setOptions,aO.use,aO.walkTokens,aO.parseInline,aT.parse,aI.lex;let aL=/\sstyle\s*=\s*("[^"]*"|'[^']*')/gi,aD=/\s*!important\s*$/i;function aB(t){return t.includes("style")?t.replace(aL," data-gl-style=$1"):t}var aF=Object.defineProperty,aN=Object.getOwnPropertyDescriptor,aU=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?aN(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&aF(i,r,n),n};let aq=class extends lit_element_i{constructor(){super(...arguments),this.markdown="",this.density="compact",this.inline=!1}render(){return tr`${this.markdown?this.renderMarkdown(this.markdown):""}`}updated(t){for(let i of(super.updated(t),this.renderRoot.querySelectorAll("[data-gl-style]"))){let t=i.dataset.glStyle;t&&function(t,i){for(let r of i.split(";")){let i=r.indexOf(":");if(-1===i)continue;let o=r.slice(0,i).trim();if(!o)continue;let s=r.slice(i+1).trim();if(!s)continue;let n="";aD.test(s)&&(s=s.replace(aD,""),n="important"),t.style.setProperty(o,s,n)}}(i,t),i.removeAttribute("data-gl-style")}}renderMarkdown(t){let i,r,o,s;return this.inline?(h??=new aR({breaks:!1,gfm:!0,renderer:(r=0,o=!1,{blockquote:function({tokens:t}){return this.parser.parse(t)},code:function({text:t}){return`<code>${aK(t)}</code>`},codespan:function({text:t}){return`<code>${aK(t)}</code>`},heading:function({tokens:t}){return this.parser.parseInline(t)},hr:function(){return""},image:function({text:t}){return t||""},link:function({tokens:t}){return this.parser.parseInline(t)},list:function(t){o=t.ordered,r="number"==typeof t.start?t.start:1;let i="";for(let r of t.items)i+=s.call(this,r);return i},listitem:s=function(t){let i,s=this.parser.parse(t.tokens);return t.task?i=t.checked?"☑":"☐":o?(i=`${r}.`,r++):i="•",`${i} ${s.trim()} `},paragraph:function({tokens:t}){return this.parser.parseInline(t)},table:function(){return""},br:function(){return" "},html:function(){return""}})}),i=a0(i=h.parse(aY(t),{async:!1})),tr`<span>${rP(aB(i))}</span>`):(p??=new aR({breaks:!0,gfm:!0,renderer:{image:function({href:t,title:i,text:r}){let o=[],s=[];return t&&({href:t,dimensions:o}=function(t){let i=[],r=t.split("|").map(t=>t.trim());t=r[0];let o=r[1];if(o){let t=/height=(\d+)/.exec(o),r=/width=(\d+)/.exec(o),s=t?t[1]:"",n=r?r[1]:"",a=isFinite(parseInt(n)),c=isFinite(parseInt(s));a&&i.push(`width="${n}"`),c&&i.push(`height="${s}"`)}return{href:t,dimensions:i}}(t),s.push(`src="${a2(t)}"`)),r&&s.push(`alt="${a2(r)}"`),i&&s.push(`title="${a2(i)}"`),o.length&&(s=[...s,...o]),`<img ${s.join(" ")}>`},codespan:function({text:t}){return`<code>${aK(t)}</code>`},paragraph:function({tokens:t}){let i=this.parser.parseInline(t);return`<p>${i}</p>`},html:function({text:t}){return t.match(/^(<span[^>]+>)|(<\/\s*span>)$/)?t:""}}}),rP(aB(i=a0(i=p.parse(aY(t),{async:!1})))))}};aq.styles=[r3,tR`
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
=		`],aU([tY({type:String})],aq.prototype,"markdown",2),aU([tY({type:String,reflect:!0})],aq.prototype,"density",2),aU([tY({type:Boolean,reflect:!0})],aq.prototype,"inline",2),aq=aU([tX("gl-markdown")],aq);let aV={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},aH=t=>aV[t];function aK(t,i){if(i){if(/[&<>"']/.test(t))return t.replace(/[&<>"']/g,aH)}else if(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/.test(t))return t.replace(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,aH);return t}let aW="[A-Za-z0-9-]+",aG="~[A-Za-z]+",aZ=RegExp(`^(${aW})(${aG})?$`),aQ=RegExp(`\\$\\(${aW}(?:${aG})?\\)`,"g"),aX=RegExp(`\\\\${aQ.source}`,"g"),aJ=RegExp(`(\\\\)?\\$\\((${aW}(?:${aG})?)\\)`,"g");function aY(t){return t.replace(aX,t=>`\\${t}`)}function a0(t){let i,r,o=[],s=0;for(;null!==(i=aJ.exec(t));){s<(r=i.index||0)&&o.push(t.substring(s,r)),s=(i.index||0)+i[0].length;let[,n,a]=i;o.push(n?`$(${a})`:function(t){let[,i,r]=aZ.exec(t.id)??[void 0,"error",void 0];return i.startsWith("gitlens-")&&(i=`gl-${i.substring(8)}`),`<code-icon icon="${i}"${r?` modifier="${r}"`:""}></code-icon>`}({id:a}))}return s<t.length&&o.push(t.substring(s)),o.join("")}let a1=/"/g;function a2(t){return t.replace(a1,"&quot;")}tR`
		:host {
			display: block;
			height: 100%;
		}
	`;let a5=[rU,tR`
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
	`];var a3=Object.defineProperty,a4=Object.getOwnPropertyDescriptor,a7=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?a4(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&a3(i,r,n),n};let a6=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return tr`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(t){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<1)return;let i=this.handleKeydown.bind(this),r=`${this.actionNodes.length}`,o=this.actionNodes.map((t,o)=>(t.setAttribute("aria-posinset",`${o+1}`),t.setAttribute("aria-setsize",r),t.setAttribute("tabindex",0===o?"0":"-1"),this.actionNodes.length>=2&&t.addEventListener("keydown",i,!1),{dispose:()=>{t?.removeEventListener("keydown",i,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:t})=>t())}}handleKeydown(t){if(!t.target||null==this.actionNodes)return;let i=t.target,r=parseInt(i.getAttribute("aria-posinset")??"0",10);if("ArrowLeft"!==t.key&&"ArrowRight"!==t.key||this.actionNodes.length<2)return;let o=null;if("ArrowLeft"===t.key){let t=1===r?this.actionNodes.length-1:r-2;o=this.actionNodes[t]}else if("ArrowRight"===t.key){let t=r===this.actionNodes.length?0:r;o=this.actionNodes[t]}null!=o&&o!==i&&(t.preventDefault(),t.stopPropagation(),i.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};a6.styles=tR`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,a7([(g={flatten:!0},(t,i)=>{let{slot:r,selector:o}=g??{},s="slot"+(r?`[name=${r}]`:":not([name])");return t1(t,i,{get(){let t=this.renderRoot?.querySelector(s),i=t?.assignedElements(g)??[];return void 0===o?i:i.filter(t=>t.matches(o))}})})],a6.prototype,"actionNodes",2),a6=a7([tX("action-nav")],a6);var a8=Object.defineProperty,a9=Object.getOwnPropertyDescriptor,le=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?a9(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&a8(i,r,n),n};let lt=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this._modifiers=new ModifierKeysController(this),this.showIcon=!0,this.rich=!1,this.matched=!1,this.tabIndex=-1,this.selected=!1,this.focused=!1,this.focusedInactive=!1,this.onComponentClick=t=>{this.selectCore({dblClick:!1,altKey:t.altKey})},this._checkboxClickAlt=!1}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this.onComponentClick)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("click",this.onComponentClick)}updateAttrs(t,i=!1){(t.has("expanded")||t.has("branch")||i)&&(this.branch?this.setAttribute("aria-expanded",this.expanded.toString()):this.removeAttribute("aria-expanded")),(t.has("parentExpanded")||i)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(t.has("selected")||i)&&this.setAttribute("aria-selected",this.selected.toString()),(t.has("size")||i)&&this.setAttribute("aria-setsize",this.size.toString()),(t.has("position")||i)&&this.setAttribute("aria-posinset",this.position.toString()),(t.has("level")||i)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(t){this.updateAttrs(t)}renderBranching(){let t=this.level-1;if(t<1&&!this.branch)return tn;let i=[];if(t>0)for(let r=0;r<t;r++)i.push(tr`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&i.push(tr`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),i}renderCheckbox(){if(!this.checkable)return tn;let t=tr`<span
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
		></span>`,i=this.getEffectiveCheckboxTooltip();return i?tr`<gl-tooltip placement="right" content=${i}>${t}</gl-tooltip>`:t}getEffectiveCheckboxTooltip(){let t=this.checkableTooltip,i=this.checkableAltTooltip;return i?t?this._modifiers.altKey?i:`${t}
[${r2()}] ${i}`:i:t}renderActions(){return tr`<action-nav class="actions" part="actions"><slot name="actions"></slot></action-nav>`}renderBefore(){return tr`<slot name="decorations-before" class="decorations-before"></slot>`}renderAfter(){return tr`<slot name="decorations-after" class="decorations-after"></slot>`}render(){return tr`
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
				${rS(this.showIcon,()=>tr`<slot name="icon" class="icon"></slot>`)}
				<span class="text" part="text">
					<slot class="main" part="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderBefore()}${this.renderActions()}${this.renderAfter()}
		`}selectCore(t,i=!1){this.emit("gl-tree-item-select"),this.selected=!0,i||window.requestAnimationFrame(()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:t?.dblClick??!1,altKey:t?.altKey??!1,ctrlKey:t?.ctrlKey??!1,metaKey:t?.metaKey??!1,shiftKey:t?.shiftKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(t){t.stopPropagation(),this.selectCore({dblClick:!1,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey})}onButtonDblClick(t){t.stopPropagation(),this.selectCore({dblClick:!0,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey})}onButtonContextMenu(t){t.preventDefault(),t.stopPropagation();let i=new MouseEvent("contextmenu",{bubbles:!0,composed:!0,cancelable:!0,clientX:t.clientX,clientY:t.clientY,button:t.button,buttons:t.buttons,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey});this.dispatchEvent(i)}onCheckboxClick(t){t.stopPropagation(),this._checkboxClickAlt=t.altKey}onCheckboxChange(t){t.preventDefault(),t.stopPropagation();let i=t.target.checked,r=this._checkboxClickAlt||this._modifiers.altKey;"indeterminate"===this.checked&&r&&(i=!1,t.target.checked=!1),this._checkboxClickAlt=!1,this.checked=i,this.emit("gl-tree-item-checked",{node:this,checked:i})}onCheckboxMouseEnter(){this.emit("gl-tree-item-suspend-tooltip")}onCheckboxMouseLeave(){this.emit("gl-tree-item-resume-tooltip")}};lt.styles=a5,le([tY({type:Boolean})],lt.prototype,"branch",2),le([tY({type:Boolean})],lt.prototype,"expanded",2),le([tY({type:String})],lt.prototype,"path",2),le([tY({type:String,attribute:"parent-path"})],lt.prototype,"parentPath",2),le([tY({type:Boolean,attribute:"parent-expanded"})],lt.prototype,"parentExpanded",2),le([tY({type:Number})],lt.prototype,"level",2),le([tY({type:Number})],lt.prototype,"size",2),le([tY({type:Number})],lt.prototype,"position",2),le([tY({type:Boolean})],lt.prototype,"checkable",2),le([tY()],lt.prototype,"checked",2),le([tY({type:Boolean,reflect:!0,attribute:"disable-check"})],lt.prototype,"disableCheck",2),le([tY({attribute:"checkable-tooltip"})],lt.prototype,"checkableTooltip",2),le([tY({attribute:"checkable-alt-tooltip"})],lt.prototype,"checkableAltTooltip",2),le([tY({type:Boolean})],lt.prototype,"showIcon",2),le([tY({type:Boolean,reflect:!0})],lt.prototype,"rich",2),le([tY({type:Boolean,reflect:!0})],lt.prototype,"matched",2),le([tY({type:Number})],lt.prototype,"tabIndex",2),le([tY({type:String,attribute:"data-vscode-context",reflect:!0})],lt.prototype,"vscodeContext",2),le([t0()],lt.prototype,"selected",2),le([tY({type:Boolean,reflect:!0})],lt.prototype,"focused",2),le([tY({type:Boolean,reflect:!0,attribute:"focused-inactive"})],lt.prototype,"focusedInactive",2),le([t2("#button")],lt.prototype,"buttonEl",2),lt=le([tX("gl-tree-item")],lt);var li=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,lo=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lr(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&li(i,r,n),n};let ls=/^[a-zA-Z0-9\s\-_.]$/,ln=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0,this.filtered=!1,this.filterable=!1,this.filterPlaceholder="Filter...",this.searchBoxFilter=!0,this.dimUnmatched=!1,this.emptyText="No items",this.tooltipAnchorRight=!1,this._filter=new FilterController(this,{debounceMs:150,applyMatch:t=>{0===t.length?(this.filtered=!1,null!=this._model&&function t(i){for(let r of i)r.matched=!1,null!=r.children&&t(r.children)}(this._model)):(this.filtered=!0,null!=this._model&&ll(this._model,[...t]))},onApplied:()=>this.rebuildFlattenedTree()}),this.ariaLabel="Tree",this.virtualizerRef=rO(),this.scrollableRef=rO(),this._containerHasFocus=!1,this._filterHasFocus=!1,this._actionButtonHasFocus=!1,this._collection=new VirtualCollectionController(this,{getItems:()=>this.treeItems,getItemId:t=>t.path,isSelectable:t=>!1===t.branch,mode:()=>this.multiSelectable?"multi":"single",focusStrategy:"activedescendant",getVirtualizer:()=>this.virtualizerRef.value,getContainer:()=>this.scrollableRef.value,onSelectionChange:()=>{this.requestUpdate(),this.multiSelectable&&this.emitSelectionChanged()},onActivate:t=>{let i=this._index.itemFor(t);null!=i&&this.handleItemActivation(i)},onUnhandledKey:t=>this.handleTreeKey(t)}),this._hoverOpen=!1,this._typeAheadBuffer="",this._typeAheadTimeout=800,this._nodeMap=new Map,this.multiSelectable=!1,this._virtualAnchorRect={x:0,y:0,top:0,bottom:0,left:0,right:0,width:0,height:0},this._virtualAnchor={getBoundingClientRect:()=>this._virtualAnchorRect},this.dismissRowTooltip=()=>{clearTimeout(this._hoverTimer),clearTimeout(this._unhoverTimer),this._hoverOpen=!1,this._hoveredTooltip=void 0,this._hoveredAnchor=void 0},this.handleContainerFocus=()=>{this._containerHasFocus=!0,this._focusedItemPath||(this._lastSelectedPath?(this._focusedItemPath=this._lastSelectedPath,this._focusedItemIndex=this.getItemIndex(this._lastSelectedPath)):this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0),this.requestUpdate())},this.handleContainerBlur=()=>{this._containerHasFocus=!1},this.handleFocusIn=t=>{let i=t.target;("GL-ACTION-CHIP"===i.tagName?i:i.closest("gl-action-chip"))&&(this._actionButtonHasFocus=!0)},this.handleFocusOut=t=>{let i=t.target,r=t.relatedTarget,o="GL-ACTION-CHIP"===i.tagName?i:i.closest("gl-action-chip"),s=r?.tagName==="GL-ACTION-CHIP"?r:r?.closest("gl-action-chip");o&&!s&&(this._actionButtonHasFocus=!1)},this.handleKeydown=t=>{if("Tab"===t.key&&t.composedPath().find(t=>"GL-ACTION-CHIP"===t.tagName))if(t.shiftKey){t.preventDefault();let i=this.scrollableRef.value;i&&i.focus()}else{t.preventDefault();let i=document.activeElement;setTimeout(()=>{i&&"function"==typeof i.blur&&i.blur()},0)}},this.handleContainerKeydown=t=>{if(this.treeItems?.length&&!this._actionButtonHasFocus){if("Tab"===t.key&&!t.shiftKey){if(this._focusedItemPath){let i=this.virtualizerRef.value;if(i){let r=[...i.querySelectorAll("gl-tree-item")].find(t=>t.id===`tree-item-${this._focusedItemPath}`);if(r){let i=r.querySelector("gl-action-chip");i&&(t.preventDefault(),t.stopPropagation(),i.focus())}}}return}if("ArrowUp"===t.key&&this.filterable&&0>=this.getCurrentFocusedIndex()){let i=this.renderRoot.querySelector(".filter-input");if(null!=i){t.preventDefault(),t.stopPropagation(),i.focus(),i.select();return}}if(" "===t.key){let i=this.treeItems[this.getCurrentFocusedIndex()];if(i?.branch){t.preventDefault(),t.stopPropagation(),this.handleItemActivation(i);return}}this._collection.handleKeydown(t)&&(t.preventDefault(),t.stopPropagation())}},this.handleFilterInput=t=>{let i=t.target.value;this.dispatchEvent(new CustomEvent("gl-tree-filter-changed",{detail:i,bubbles:!0,composed:!0})),this._filter.setQuery(i,{debounce:!0})},this.handleFilterFocus=()=>{this._filterHasFocus=!0,!this._focusedItemPath&&this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0)},this.handleFilterBlur=()=>{this._filterHasFocus=!1},this.handleFilterKeydown=t=>{if(!this.treeItems?.length)return;let i=this.getCurrentFocusedIndex(),r=i,o=!1;switch(t.key){case"ArrowDown":r=i<0?0:Math.min(i+1,this.treeItems.length-1),o=!0;break;case"ArrowUp":r=i<=0?0:i-1,o=!0;break;case"Home":r=0,o=!0;break;case"End":r=this.treeItems.length-1,o=!0;break;case"Enter":{t.preventDefault(),t.stopPropagation();let r=this.treeItems[i]??this.treeItems[0];this.handleItemActivation(r);return}}o&&(t.preventDefault(),t.stopPropagation(),this.setActiveDescendant(r))},this.toggleSearchBoxFilter=()=>{this.searchBoxFilter=!this.searchBoxFilter,this.dispatchEvent(new CustomEvent("gl-tree-search-box-filter-changed",{detail:this.searchBoxFilter,bubbles:!0,composed:!0})),this.filtered&&this.rebuildFlattenedTree()}}get filterText(){return this._filter.query}set filterText(t){let i=this._filter.query;i!==t&&(this._filter.setQuery(t),this.requestUpdate("filterText",i))}get _lastSelectedPath(){return this._selection.anchorId}set _lastSelectedPath(t){this.multiSelectable||(null==t?this._selection.clear():this._selection.setSingle(t))}get _focusedItemPath(){return this._focus.focusedId}set _focusedItemPath(t){this._focus.setFocusedId(t)}get _focusedItemIndex(){return this._focus.focusedIndex}set _focusedItemIndex(t){this._focus.setFocusedIndex(t)}get _index(){return this._collection.index}get _scroll(){return this._collection.scroll}get _selection(){return this._collection.selection}get _focus(){return this._collection.focus}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.handleKeydown,{capture:!0}),this.addEventListener("focusin",this.handleFocusIn,{capture:!0}),this.addEventListener("focusout",this.handleFocusOut,{capture:!0}),this.addEventListener("mousedown",this.dismissRowTooltip,{capture:!0})}focus(t){if(this.filterable){let i=this.renderRoot.querySelector(".filter-input");if(null!=i)return void i.focus(t)}this.scrollableRef.value?.focus(t)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("keydown",this.handleKeydown,{capture:!0}),this.removeEventListener("focusin",this.handleFocusIn,{capture:!0}),this.removeEventListener("focusout",this.handleFocusOut,{capture:!0}),this.removeEventListener("mousedown",this.dismissRowTooltip,{capture:!0}),this._typeAheadTimer&&(clearTimeout(this._typeAheadTimer),this._typeAheadTimer=void 0),this._typeAheadBuffer=""}set model(t){let i;if(this._model!==t){if(this._model=t,this._filter.terms.length>0&&null!=this._model&&ll(this._model,[...this._filter.terms]),this._nodeMap.clear(),null!=this._model){let t=this._model.length,r=this.filtered&&this.searchBoxFilter&&!this.dimUnmatched;i=[];for(let o=0;o<t;o++)la(this._model[o],t,o+1,void 0,this._nodeMap,r,i)}if(this.treeItems=i,this.buildPathToIndexMap(),this.focusedPath&&(this._focusedItemPath=this.focusedPath,this._lastSelectedPath=this.focusedPath),this._focusedItemPath){let t=this._index.indexOf(this._focusedItemPath);if(-1!==t)this._focusedItemIndex=t;else{if(this.treeItems?.length){let t=Math.min(this._focusedItemIndex,this.treeItems.length-1);this._focusedItemPath=this.treeItems[Math.max(0,t)].path,this._focusedItemIndex=Math.max(0,t)}else this._focusedItemPath=void 0,this._focusedItemIndex=-1;this._lastSelectedPath&&!this._index.has(this._lastSelectedPath)&&(this._lastSelectedPath=this._focusedItemPath)}}else this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0)}}get model(){return this._model}willUpdate(t){if((t.has("filtered")||t.has("searchBoxFilter")||t.has("dimUnmatched"))&&null!=this._model&&this.rebuildFlattenedTree(),this.focusedPath&&(t.has("focusedPath")||t.has("model"))){let t=this._index.indexOf(this.focusedPath);-1!==t&&(this._focusedItemPath=this.focusedPath,this._focusedItemIndex=t,this._lastSelectedPath=this.focusedPath,this._pendingScrollToIndex=t)}}updated(t){if(super.updated?.(t),null!=this._pendingScrollToIndex){let t=this._pendingScrollToIndex;this._pendingScrollToIndex=void 0,this.scrollToItem(t,!1)}if(t.has("treeItems")){let i=t.get("treeItems");!i?.length&&(this.treeItems?.length??0)>0&&this.kickVirtualizerAfterFirstLayout()}}async kickVirtualizerAfterFirstLayout(){let t=this.virtualizerRef.value;t&&(await t.layoutComplete,this.treeItems?.length&&(this.treeItems=this.treeItems.slice()))}renderIcon(t){if(null==t)return tn;if("string"==typeof t)return tr`<code-icon slot="icon" icon=${t}></code-icon>`;if("status"===t.type)return tr`<gl-git-status slot="icon" .status=${t.name}></gl-git-status>`;if("branch"===t.type)return tr`<gl-branch-icon
				slot="icon"
				.status=${t.status}
				.worktree=${t.worktree??!1}
				.hasChanges=${t.hasChanges??!1}
			></gl-branch-icon>`;if("file-icon"===t.type)return tr`<gl-file-icon slot="icon" .filename=${t.filename}></gl-file-icon>`;if("agent"===t.type){let i="working"===t.phase?"sync":"waiting"===t.phase?"warning":"claude",r="working"===t.phase?"spin":void 0;return tr`<code-icon
				slot="icon"
				icon="${i}"
				modifier=${r??tn}
				class="tree-icon-agent tree-icon-agent--${t.phase}"
			></code-icon>`}return tn}renderActions(t){let i=t.actions;return null==i||0===i.length?tn:i.map(i=>tr`<gl-action-chip
				slot="actions"
				.icon=${i.icon}
				.label=${i.label}
				.altIcon=${i.altIcon}
				.altLabel=${i.altLabel}
				@mouseenter=${()=>this.onSuspendRowTooltip()}
				@mouseleave=${()=>this.onResumeRowTooltip()}
				@click=${r=>this.onTreeItemActionClicked(r,t,i,!1)}
				@dblclick=${r=>this.onTreeItemActionClicked(r,t,i,!0)}
			></gl-action-chip>`)}renderDecorations(t){let i=t.decorations;return null==i||0===i.length?tn:i.map(t=>{let i="before"===t.position?"decorations-before":"decorations-after";if("icon"===t.type)return tr`<code-icon
					slot=${i}
					part=${i}
					aria-label="${t.label}"
					.icon=${t.icon}
				></code-icon>`;if("text"===t.type){let r=`decoration-text${t.kind?` decoration-text--${t.kind}`:""}`;return tr`<span
					slot=${i}
					part=${i}
					class=${r}
					aria-label=${t.tooltip??t.label??tn}
					>${t.label}</span
				>`}if("tracking"===t.type)return tr`<gl-tracking-pill
					slot=${i}
					part=${i}
					.ahead=${t.ahead}
					.behind=${t.behind}
					colorized
					outlined
					?missingUpstream=${t.missingUpstream??!1}
				></gl-tracking-pill>`;if("wip"===t.type)return tr`<gl-wip-stats
					slot=${i}
					part=${i}
					badge
					show-clean
					no-tooltip
					.dirty=${t.hasChanges}
					added=${t.added??tn}
					modified=${t.changed??tn}
					removed=${t.deleted??tn}
				></gl-wip-stats>`;if("conflict"===t.type){let r=`conflict-count${t.kind?` conflict-count--${t.kind}`:""}`;return tr`<span
					slot=${i}
					part=${i}
					class=${r}
					aria-label=${t.tooltip??t.label??tn}
					><code-icon icon="warning" size="12"></code-icon>${t.count}</span
				>`}if("agent"===t.type){let r=t.tooltip??t.label;return tr`<gl-tooltip slot=${i} part=${i} placement="top">
					<span class="tree-icon-agent-pair">
						<code-icon
							icon="robot"
							class="tree-icon-agent tree-icon-agent--${t.phase}"
							aria-label=${r??tn}
						></code-icon>
						${"working"===t.phase?tr`<code-icon
									icon="sync"
									modifier="spin"
									class="tree-icon-agent tree-icon-agent--${t.phase}"
									aria-hidden="true"
								></code-icon>`:tn}
					</span>
					<span slot="content">${r}</span>
				</gl-tooltip>`}})}highlightText(t){if(!this.filtered||0===this._filter.terms.length)return t;let i=t.toLowerCase(),r=new Set;for(let t of this._filter.terms){let o=i.indexOf(t);if(-1!==o){for(let i=o;i<o+t.length;i++)r.add(i);continue}let s=lc(i,t);if(null!=s)for(let t of s)r.add(t)}return 0===r.size?t:function(t,i){let r=[],o=0,s=0;for(;s<i.length;){let n=s;for(;n+1<i.length&&i[n+1]===i[n]+1;)n++;let a=i[s],c=i[n]+1;a>o&&r.push(t.substring(o,a)),r.push(tr`<mark>${t.substring(a,c)}</mark>`),o=c,s=n+1}return o<t.length&&r.push(t.substring(o)),r}(t,[...r].sort((t,i)=>t-i))}renderTreeItem(t){let i=this.multiSelectable?this._selection.has(t.path):this._lastSelectedPath===t.path,r=this._focusedItemPath===t.path,o=(this._containerHasFocus||this._filterHasFocus)&&!this._actionButtonHasFocus,s=`tree-item-${t.path}`;return tr`<gl-tree-item
			id=${s}
			.branch=${t.branch}
			.expanded=${t.expanded}
			.path=${t.path}
			.parentPath=${t.parentPath}
			.parentExpanded=${t.parentExpanded}
			.level=${t.level}
			.size=${t.size}
			.position=${t.position}
			.checkable=${t.checkable}
			.checked=${t.checked??!1}
			.disableCheck=${t.disableCheck??!1}
			.checkableTooltip=${t.checkableTooltip}
			.checkableAltTooltip=${t.checkableAltTooltip}
			.showIcon=${null!=t.icon}
			.matched=${t.matched??!1}
			.selected=${i}
			.focused=${r&&o}
			.focusedInactive=${r&&!o}
			.tabIndex=${-1}
			.vscodeContext=${t.contextData}
			@gl-tree-item-select=${()=>this.onBeforeTreeItemSelected(t)}
			@gl-tree-item-selected=${i=>this.onTreeItemSelected(i,t)}
			@gl-tree-item-checked=${i=>this.onTreeItemChecked(i,t)}
			@mouseenter=${i=>this.onTreeItemHover(i,t)}
			@mouseleave=${()=>this.onTreeItemUnhover()}
			@gl-tree-item-suspend-tooltip=${()=>this.onSuspendRowTooltip()}
			@gl-tree-item-resume-tooltip=${()=>this.onResumeRowTooltip()}
		>
			${this.renderIcon(t.icon)}
			${this.highlightText(t.label)}${rS(null!=t.description,()=>tr`<span slot="description">${this.highlightText(t.description)}</span>`)}
			${this.renderActions(t)} ${this.renderDecorations(t)}
		</gl-tree-item>`}renderFilterBar(t){return this.filterable?tr`<div class="filter">
			<div class="filter-field">
				<input
					class="filter-input"
					type="search"
					role="combobox"
					aria-controls="tree-list"
					aria-expanded="true"
					aria-haspopup="tree"
					aria-autocomplete="list"
					aria-activedescendant=${t||tn}
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
		</div>`:tn}render(){let t=!!this.treeItems?.length,i=!t&&this._filter.query&&this._model?.length,r=!t&&!i&&!!this.emptyText;if(!t&&!i&&!r)return tn;let o=this._focusedItemPath?`tree-item-${this._focusedItemPath}`:void 0;return tr`
			${this.renderFilterBar(o)}
			${t?tr`<div
						${rD(this.scrollableRef)}
						id="tree-list"
						class="scrollable"
						tabindex="0"
						role="tree"
						aria-label=${this.ariaLabel}
						aria-multiselectable=${this.multiSelectable?"true":"false"}
						aria-activedescendant=${o||tn}
						@keydown=${this.handleContainerKeydown}
						@focus=${this.handleContainerFocus}
						@blur=${this.handleContainerBlur}
					>
						<lit-virtualizer
							class="scrollable"
							${rD(this.virtualizerRef)}
							.items=${this.treeItems}
							.keyFunction=${t=>t.path}
							.layout=${(0,rM.flow)({direction:"vertical"})}
							.renderItem=${t=>this.renderTreeItem(t)}
							scroller
						></lit-virtualizer>
					</div>`:i?tr`<div class="no-results">No results found</div>`:tr`<div class="no-results">${this.emptyText}</div>`}
			${this._hoverOpen&&this._hoveredTooltip?tr`<gl-popover
						class="hover-popover"
						?open=${this._hoverOpen}
						.anchor=${this._hoveredAnchor}
						placement="right-start"
						trigger="manual"
						hoist
						.distance=${12}
					>
						<div slot="content" class="hover-content">
							${"string"==typeof this._hoveredTooltip?tr`<gl-markdown density="compact" .markdown=${this._hoveredTooltip}></gl-markdown>`:this._hoveredTooltip}
						</div>
					</gl-popover>`:tn}
		`}findTreeNode(t){return this._nodeMap.get(t)}getItemIndex(t){return this._index.indexOf(t)}rebuildFlattenedTree(){if(!this._model)return;this._nodeMap.clear();let t=this.filtered&&this.searchBoxFilter&&!this.dimUnmatched,i=this._model.length,r=[];for(let o=0;o<i;o++)la(this._model[o],i,o+1,void 0,this._nodeMap,t,r);if(this.treeItems=r,this.buildPathToIndexMap(),this._focusedItemPath){let t=this._index.indexOf(this._focusedItemPath);-1!==t?this._focusedItemIndex=t:this.treeItems?.length?(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0):(this._focusedItemPath=void 0,this._focusedItemIndex=-1)}}onBeforeTreeItemSelected(t){if(this._lastSelectedPath!==t.path&&(this._lastSelectedPath=t.path),this._focusedItemPath!==t.path&&(this._focusedItemPath=t.path,this._focusedItemIndex=this.getItemIndex(t.path)),t.branch){let i=this.findTreeNode(t.path);i&&(i.expanded=!i.expanded,this.rebuildFlattenedTree(),this.emit("gl-tree-expansion-changed",{path:t.path,expanded:i.expanded}))}this.requestUpdate()}onTreeItemSelected(t,i){if(t.stopPropagation(),this.multiSelectable&&!i.branch){let r=t.detail;if(r.shiftKey)return void this._selection.selectRange(i.path,{additive:r.ctrlKey||r.metaKey});if(r.ctrlKey||r.metaKey)return void this._selection.toggle(i.path);this._selection.setSingle(i.path)}this.emit("gl-tree-generated-item-selected",{...t.detail,node:i,context:i.context})}emitSelectionChanged(){let t=this._selection.selectedIds,i=[],r=[],o=[];for(let s of this.treeItems??[])t.has(s.path)&&(i.push(s.path),r.push(s),o.push(s.context));this.emit("gl-tree-generated-selection-changed",{nodes:r,paths:i,contexts:o,lastPath:this._selection.anchorId})}pruneSelection(){this.multiSelectable&&this._selection.pruneTo(t=>this._index.has(t))}onTreeItemChecked(t,i){t.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...t.detail,node:i,context:i.context})}onTreeItemHover(t,i){if(!i.tooltip)return void this.onTreeItemUnhover();let r=t.currentTarget;clearTimeout(this._hoverTimer),clearTimeout(this._unhoverTimer);let o=r.getBoundingClientRect(),s=this.tooltipAnchorRight?this.getBoundingClientRect().right:t.clientX,n=this._virtualAnchorRect;(n.x=n.left=n.right=s,n.y=n.top=o.top,n.bottom=o.bottom,n.height=o.height,this._hoveredAnchor=this._virtualAnchor,this._hoveredTooltip=i.tooltip,this._hoverOpen)?this._repositionHoverPopover():this._hoverTimer=setTimeout(()=>{this._hoverOpen=!0},500)}async _repositionHoverPopover(){await this.updateComplete;let t=this.renderRoot?.querySelector("gl-popover.hover-popover"),i=t?.shadowRoot?.querySelector("wa-popup");i?.reposition?.()}onTreeItemUnhover(){clearTimeout(this._hoverTimer),this._unhoverTimer=setTimeout(()=>{this._hoverOpen=!1,this._hoveredTooltip=void 0,this._hoveredAnchor=void 0},100)}onSuspendRowTooltip(){clearTimeout(this._hoverTimer),clearTimeout(this._unhoverTimer),this._hoverOpen=!1}onResumeRowTooltip(){null!=this._hoveredTooltip&&null!=this._hoveredAnchor&&(this._hoverOpen=!0)}onTreeItemActionClicked(t,i,r,o=!1){t.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:i,context:i.context,action:r,dblClick:o,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey})}getCurrentFocusedIndex(){if(!this.treeItems?.length)return -1;if(this._focusedItemPath){let t=this.getItemIndex(this._focusedItemPath);if(-1!==t)return t}if(this._focusedItemIndex>=0&&this._focusedItemIndex<this.treeItems.length)return this._focusedItemIndex;if(this._lastSelectedPath){let t=this.getItemIndex(this._lastSelectedPath);if(-1!==t)return t}return 0}handleTreeKey(t){let i=this.treeItems;if(null==i||0===i.length)return!1;if("ArrowLeft"===t.key||"ArrowRight"===t.key){let r,o=this.getCurrentFocusedIndex(),s=i[o];if(null==s)return!1;if(this.handleBranchToggle(t,s))return!0;if("ArrowRight"===t.key)r=Math.min(o+1,i.length-1);else if(s.parentPath){let t=this.getItemIndex(s.parentPath);r=-1!==t?t:Math.max(o-1,0)}else r=Math.max(o-1,0);if(this.focusItemAtIndex(r),this.multiSelectable){let o=i[r];null!=o&&!o.branch&&(t.shiftKey?this._selection.selectRange(o.path):t.ctrlKey||t.metaKey||this._selection.setSingle(o.path))}return!0}return!!(!t.ctrlKey&&!t.metaKey&&!t.altKey&&this.isPrintableCharacter(t.key))&&(this.handleTypeAhead(t.key),!0)}handleItemActivation(t){t&&(this.onBeforeTreeItemSelected(t),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),t))}handleBranchToggle(t,i){if(!i?.branch)return!1;let r="ArrowRight"===t.key,o="ArrowLeft"===t.key;if(r&&i.expanded||o&&!i.expanded)return!1;t.preventDefault(),t.stopPropagation();let s=this.findTreeNode(i.path);return!!s&&(s.expanded=!s.expanded,this.rebuildFlattenedTree(),this.emit("gl-tree-expansion-changed",{path:i.path,expanded:s.expanded}),this.requestUpdate(),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),i),!0)}focusItemAtIndex(t){let i=this.treeItems?.[t];i&&(this._focusedItemPath=i.path,this._focusedItemIndex=t,this._lastSelectedPath!==i.path&&(this._lastSelectedPath=i.path),this.requestUpdate(),this.scrollToItem(t))}scrollToItem(t,i=!0){this._scroll.scrollToIndex(t,{restoreFocus:i})}handleTypeAhead(t){this._typeAheadTimer&&clearTimeout(this._typeAheadTimer);let i=!this._typeAheadBuffer;this._typeAheadBuffer+=t.toLowerCase();let r=this.treeItems?.[this._focusedItemIndex],o=r?.label?.toLowerCase().startsWith(this._typeAheadBuffer),s=!1;if(i?s=!0:o||(s=!0),s){let t=this.findNextMatchingItem(this._typeAheadBuffer);-1!==t&&this.focusItemAtIndex(t)}this._typeAheadTimer=window.setTimeout(()=>{this._typeAheadBuffer="",this._typeAheadTimer=void 0},this._typeAheadTimeout)}buildPathToIndexMap(){this._index.rebuild(),this.pruneSelection()}findNextMatchingItem(t){if(!this.treeItems?.length||!t)return -1;let i=t.toLowerCase(),r=this._focusedItemIndex,o=this.treeItems.length;for(let t=1;t<o;t++){let s=(r+t)%o;if(this.treeItems[s].label?.toLowerCase().startsWith(i))return s}return -1}isPrintableCharacter(t){return 1===t.length&&ls.test(t)}setActiveDescendant(t){let i=this.treeItems?.[t];i&&(this._focusedItemPath=i.path,this._focusedItemIndex=t,this._lastSelectedPath!==i.path&&(this._lastSelectedPath=i.path),this.requestUpdate(),this.scrollToItem(t,!1))}};function la(t,i,r,o,s,n,a){if(n&&!1===t.matched)return a??[];let c=a??[];if(s?.set(t.path,t),c.push({...t,size:i,position:r,parentPath:o}),!1!==t.expanded&&null!=t.children&&t.children.length>0){let i=t.children.length;for(let r=0;r<i;r++)la(t.children[r],i,r+1,t.path,s,n,c)}return c}function ll(t,i){let r=!1;for(let o of t){let t=(o.label??"").toLowerCase(),s=o.filterText?.toLowerCase(),n=o.description?.toLowerCase(),a=i.every(i=>s?.includes(i)||t.includes(i)||null!=lc(t,i)||n?.includes(i)),c=!1;null!=o.children&&o.children.length>0&&(c=ll(o.children,i)),o.matched=a||c,o.matched&&(r=!0),o.branch&&c&&(o.expanded=!0)}return r}function lc(t,i){let r=[],o=0;for(let s=0;s<t.length&&o<i.length;s++)t[s]===i[o]&&(r.push(s),o++);return o===i.length?r:void 0}ln.styles=[rq,tR`
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
		`],lo([t0()],ln.prototype,"treeItems",2),lo([tY({reflect:!0})],ln.prototype,"guides",2),lo([tY({type:Boolean,reflect:!0})],ln.prototype,"filtered",2),lo([tY({type:Boolean,reflect:!0})],ln.prototype,"filterable",2),lo([tY({type:String,attribute:"filter-placeholder"})],ln.prototype,"filterPlaceholder",2),lo([tY({type:String,attribute:"search-placeholder"})],ln.prototype,"searchPlaceholder",2),lo([tY({type:Boolean,attribute:"search-box-filter",reflect:!0})],ln.prototype,"searchBoxFilter",2),lo([tY({type:Boolean,attribute:"dim-unmatched",reflect:!0})],ln.prototype,"dimUnmatched",2),lo([tY({type:String,attribute:"empty-text"})],ln.prototype,"emptyText",2),lo([tY({type:Boolean,attribute:"tooltip-anchor-right"})],ln.prototype,"tooltipAnchorRight",2),lo([tY({type:String,attribute:"filter-text"})],ln.prototype,"filterText",1),lo([tY({type:String,attribute:"aria-label"})],ln.prototype,"ariaLabel",2),lo([tY({type:String,attribute:"focused-path"})],ln.prototype,"focusedPath",2),lo([t0()],ln.prototype,"_containerHasFocus",2),lo([t0()],ln.prototype,"_filterHasFocus",2),lo([t0()],ln.prototype,"_actionButtonHasFocus",2),lo([t0()],ln.prototype,"_hoveredTooltip",2),lo([t0()],ln.prototype,"_hoveredAnchor",2),lo([t0()],ln.prototype,"_hoverOpen",2),lo([tY({type:Boolean,attribute:"multi-selectable"})],ln.prototype,"multiSelectable",2),lo([tY({type:Array,attribute:!1})],ln.prototype,"model",1),ln=lo([tX("gl-tree-view")],ln);var lh=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,lp=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?ld(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lh(i,r,n),n};let lu=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){return tr`<div class="skeleton" style=${no({"--skeleton-lines":String(this.lines)})}></div>`}};lu.styles=tR`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,lp([tY({type:Number})],lu.prototype,"lines",2),lu=lp([tX("skeleton-loader")],lu);let GlTreeBase=class GlTreeBase extends GlElement{renderLoading(){return tr`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(t){if(!t)return tn;let i="tree",r="list-tree",o="View as Tree";switch(t){case"auto":i="list",r="gl-list-auto",o="View as List";break;case"list":i="tree",r="list-flat",o="View as Tree";break;case"tree":i="auto",r="list-tree",o="View as Auto"}return tr`<gl-action-chip data-switch-value="${i}" label="${o}" icon="${r}"></gl-action-chip>`}renderTreeView(t,i="none",r){return tr`<gl-tree-view
			.model=${t}
			.guides=${i}
			empty-text=${r??tn}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-view>`}renderFiles(t,i=!1,r=!1,o=2){let s=[];if(i){let i=t[0]?.repoPath,n=rT(t,t=>t.path.split("/"),(...t)=>t.join("/"),r);if(null!=n.children)for(let t of n.children.values()){let r=this.walkFileTree(t,{level:o},i);s.push(r)}}else for(let i of t){let t=this.fileToTreeModel(i,{level:o,branch:!1},!0);s.push(t)}return s}walkFileTree(t,i={level:1},r){let o;if(void 0===i.level&&(i.level=1),null==t.value?(o=this.folderToTreeModel(t.name,t.relativePath,i),r&&(o.tooltip=(0,rR.join)(r,t.relativePath))):o=this.fileToTreeModel(t.value,i),null!=t.children){let s=[];for(let o of t.children.values()){let t=this.walkFileTree(o,{...i,level:i.level+1},r);s.push(t)}s.length>0&&(o.branch=!0,o.children=s)}return o}folderToTreeModel(t,i,r){return{branch:!1,expanded:!0,path:i,level:1,checkable:!1,checked:!1,icon:"folder",label:t,tooltip:i,...r}}getRepoActions(t,i,r){return[]}emptyTreeModel(t,i){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:t,...i}}repoToTreeModel(t,i,r,o){return{branch:!1,expanded:!0,path:i,level:1,checkable:!0,checked:!0,icon:"gl-repository",label:t,description:o,context:[i],actions:this.getRepoActions(t,i,r),...r}}getFileActions(t,i){return[]}fileToTreeModel(t,i,r=!1,o="/"){let s,n,a,c=t.path.lastIndexOf(o),h=-1!==c?t.path.substring(c+1):t.path,p=r&&-1!==c?t.path.substring(0,c):"";return{branch:!1,expanded:!0,path:t.path,level:1,checkable:!1,checked:!1,icon:"file",label:h,description:!0===r?p:void 0,tooltip:(s=function(t){switch(t){case"A":return{letter:"A",tooltip:"Added",kind:"added"};case"?":return{letter:"U",tooltip:"Untracked",kind:"untracked"};case"M":return{letter:"M",tooltip:"Modified",kind:"modified"};case"D":return{letter:"D",tooltip:"Deleted",kind:"deleted"};case"R":return{letter:"R",tooltip:"Renamed",kind:"renamed"};case"C":return{letter:"C",tooltip:"Copied",kind:"renamed"};case"T":return{letter:"T",tooltip:"Type Changed",kind:"modified"};case"U":case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return{letter:"!",tooltip:"Conflict",kind:"conflict"};default:return}}(t.status)?.tooltip,n=t.repoPath?(0,rR.join)(t.repoPath,t.path):t.path,a=[`${n}${null!=t.submodule?" (submodule)":""}`],s&&a.push(s),"R"===t.status&&t.originalPath&&a.push(`\u2190 ${t.originalPath}`),a.join(`
`)),context:[t],actions:this.getFileActions(t,i),decorations:[{type:"text",label:t.status}],...i}}};var lg=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,lm=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lf(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lg(i,r,n),n};let lb=class extends lit_element_i{render(){return this.name?tr`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?tr`<a href=${this.href} class="avatar" part="avatar">${this.renderContent()}</a>`:tr`<span class="avatar" part="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?tr`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:tr`<slot class="thumb thumb--text"></slot>`}};lb.styles=[tR`
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
		`],lm([tY()],lb.prototype,"src",2),lm([tY()],lb.prototype,"name",2),lm([tY()],lb.prototype,"href",2),lb=lm([tX("gl-avatar")],lb);let l_=tR`
	.badge {
		display: inline-flex;
		font-size: var(--gl-badge-font-size, x-small);
		font-variant: all-small-caps;
		font-weight: 600;
		color: var(--gl-badge-color, var(--color-foreground--50));
		border: currentColor 1px solid;
		border-radius: 1rem;
		padding: 0 0.8rem 0.1rem;
		white-space: nowrap;
	}

	:host([appearance='filled']) .badge {
		background-color: var(--vscode-badge-background);
		color: var(--vscode-badge-foreground);
		border: none;
		font-weight: 500;
		line-height: 1;
		min-width: 1.6rem;
		justify-content: center;
		padding: 0.2rem 0.4rem;
		border-radius: 0.4rem;
	}

	:host([appearance='warning']) .badge {
		background-color: var(--vscode-gitDecoration-conflictingResourceForeground);
		color: var(--vscode-button-foreground, #fff);
		border: none;
		font-weight: 500;
		line-height: 1;
		min-width: 1.6rem;
		justify-content: center;
		padding: 0.2rem 0.4rem;
		border-radius: 0.4rem;
	}

	/* Recessed sub-segment meant to nest INSIDE a filled badge (e.g. "+N Mixed" inside
	 * "x of y Staged"). Translucent foreground tint reads as a chip carved into the accent fill,
	 * while text keeps the badge foreground so it stays legible across themes. */
	:host([appearance='muted']) .badge {
		background-color: color-mix(in srgb, var(--vscode-badge-foreground) 20%, transparent);
		color: var(--vscode-badge-foreground);
		border: none;
		font-weight: 500;
		line-height: 1;
		justify-content: center;
		padding: 0.1rem 0.4rem;
		border-radius: 0.3rem;
	}

	/* "Experimental" stamp used by features still gated behind a config flag (e.g. Agent Kanban,
	 * Visualizations treemap). Uses the editor-warning tone with color-mix so the badge reads as
	 * a heads-up without overwhelming the surrounding chrome. */
	:host([appearance='experimental']) {
		display: inline-flex;
	}

	:host([appearance='experimental']) .badge {
		color: var(--vscode-editorWarning-foreground, var(--color-foreground--65));
		border: 1px solid color-mix(in srgb, var(--vscode-editorWarning-foreground, currentColor) 60%, transparent);
		background-color: color-mix(in srgb, var(--vscode-editorWarning-foreground, currentColor) 12%, transparent);
		font-variant: normal;
		font-weight: 600;
		letter-spacing: 0.06em;
		padding: 0.1rem 0.6rem;
		border-radius: 0.3rem;
		align-items: center;
		justify-content: center;
	}
`;var lv=Object.defineProperty,ly=Object.getOwnPropertyDescriptor,lw=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?ly(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lv(i,r,n),n};let lk=class extends lit_element_i{render(){return tr`<slot class="badge" part="base"></slot>`}};lk.styles=[l_],lw([tY({reflect:!0})],lk.prototype,"appearance",2),lk=lw([tX("gl-badge")],lk);var lx=Object.defineProperty,lC=Object.getOwnPropertyDescriptor,l$=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lC(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lx(i,r,n),n};let lE=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return tr`<div class="group"><slot></slot></div>`}};lE.styles=[rU,tR`
			:host {
				--button-group-gap: 0.4rem;
				--button-max-width: 30rem;
				--button-group-max-width: 30rem;
				display: block;
				max-width: var(--button-max-width, 30rem);
				margin-inline: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			:host([grouping='gap-wide']) {
				--button-group-gap: 1rem;
			}

			:host([grouping='split']) {
				--button-group-gap: 0.1rem;
			}

			@media (min-width: 640px) {
				:host([layout='shift']) {
					--button-max-width: 100%;
				}
			}

			:host([layout='full']) {
				--button-max-width: 100%;
				--button-group-max-width: 100%;
			}

			.group {
				display: inline-flex;
				gap: var(--button-group-gap, 0.4rem);
				width: 100%;
				max-width: var(--button-group-max-width, 30rem);
			}

			:host([grouping='split']) ::slotted(*:not(:first-child)) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			:host([grouping='split']) ::slotted(*:not(:last-child)) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
		`],l$([tY({type:Boolean})],lE.prototype,"editor",2),l$([tY({reflect:!0})],lE.prototype,"layout",2),l$([tY({reflect:!0})],lE.prototype,"grouping",2),lE=l$([tX("button-container")],lE);var lS=Object.defineProperty,lA=Object.getOwnPropertyDescriptor,lI=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lA(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lS(i,r,n),n};let lz=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.role="option",this.onKeydown=t=>{this.disabled||t.target!==this||("Enter"===t.key||" "===t.key)&&(t.preventDefault(),this.click())}}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(t){(t.has("disabled")||t.has("role"))&&this.updateInteractiveState()}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this.onKeydown),super.disconnectedCallback?.()}render(){return this.href?tr`<a href=${this.href}><slot></slot></a>`:tr`<slot></slot>`}};lz.styles=[rU,tR`
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
		`],lI([tY({type:Boolean,reflect:!0})],lz.prototype,"disabled",2),lI([tY({reflect:!0})],lz.prototype,"href",2),lI([tY({reflect:!0})],lz.prototype,"role",2),lz=lI([tX("menu-item")],lz);var lP=Object.defineProperty,lT=Object.getOwnPropertyDescriptor;let lj=class extends lit_element_i{firstUpdated(t){this.role="listbox"}render(){return tr`<slot></slot>`}};lj.styles=[rU,tR`
			:host {
				width: max-content;
				background-color: var(--vscode-menu-background);
				border: 1px solid var(--vscode-menu-border);
				padding-bottom: 0.6rem;
			}
		`],lj=((t,i,r,o)=>{for(var s,n=o>1?void 0:o?lT(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lP(i,r,n),n})([tX("menu-list")],lj);var lR=Object.defineProperty,lM=Object.getOwnPropertyDescriptor,lO=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lM(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lR(i,r,n),n};let lL=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.minVisible=0,this.position="bottom",this._shownAt=0}willUpdate(t){if(t.has("active")){if(this.active)null!=this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=void 0),this._shownAt=performance.now(),this.toggleAttribute("visible",!0);else if(this.hasAttribute("visible")){let t=this.minVisible-(performance.now()-this._shownAt);t>0?this._hideTimer=setTimeout(()=>{this._hideTimer=void 0,this.toggleAttribute("visible",!1)},t):this.toggleAttribute("visible",!1)}}}firstUpdated(){this.setAttribute("role","progressbar")}disconnectedCallback(){super.disconnectedCallback?.(),null!=this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=void 0,this.toggleAttribute("visible",!1))}render(){return tr`<div class="progress-bar"></div>`}};lL.styles=tR`
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
	`,lO([tY({reflect:!0})],lL.prototype,"mode",2),lO([tY({type:Boolean})],lL.prototype,"active",2),lO([tY({type:Number,attribute:"min-visible"})],lL.prototype,"minVisible",2),lO([tY()],lL.prototype,"position",2),lL=lO([tX("progress-indicator")],lL);var lD=Object.defineProperty,lB=Object.getOwnPropertyDescriptor,lF=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lB(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lD(i,r,n),n};let lN=class extends lit_element_i{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?tr`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:tr`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return tr`
			<header class="header" part="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};lN.styles=[rq,tR`
			:host {
				display: flex;
				flex-direction: column;
				/* background-color: var(--vscode-sideBar-background); */
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground, var(--vscode-foreground));
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			:host([collapsable]) .header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
				flex: 1;
				min-width: 0;
				width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
			}

			.subtitle::slotted(*) {
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				display: flex;
				flex-direction: column;
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],lF([tY({type:Boolean,reflect:!0})],lN.prototype,"collapsable",2),lF([tY({type:Boolean,reflect:!0})],lN.prototype,"expanded",2),lF([tY({type:Boolean,reflect:!0})],lN.prototype,"loading",2),lN=lF([tX("webview-pane")],lN);var lU=Object.defineProperty,lq=Object.getOwnPropertyDescriptor,lV=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lq(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lU(i,r,n),n};let lH=class extends GlTreeBase{constructor(){super(...arguments),this.explainBusy=!1,this.selectedPatches=[],this._copiedLink=!1}get cloudDraft(){if(this.state.draft?.draftType==="cloud")return this.state.draft}get isCodeSuggestion(){return this.cloudDraft?.type==="suggested_pr_change"}get canSubmit(){return this.selectedPatches.length>0}updated(t){if(t.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="ai-explanation"]')?.scrollIntoView()),t.has("state")){let t=this.state?.draft?.patches;if(t?.length)for(let i of(this.selectedPatches=t.map(t=>t.id),t)){let t=this.selectedPatches.indexOf(i.id);i.repository.located?-1===t&&this.selectedPatches.push(i.id):t>-1&&this.selectedPatches.splice(t,1)}else this.selectedPatches=[]}}renderEmptyContent(){return tr`
			<div class="section section--empty" id="empty">
				<button-container>
					<gl-button full href="command:gitlens.openPatch">Open Patch...</gl-button>
				</button-container>
			</div>
		`}renderPatchMessage(){if(this.state?.draft?.title==null)return;let t=this.cloudDraft?.description;if(null!=t)return t=t.trim(),tr`
			<div class="message-block">
				<p class="message-block__text scrollable" data-region="message">
					<span>${rP(t)}</span>
				</p>
			</div>
		`}renderExplainAi(){if(this.state?.orgSettings.ai===!1||this.state?.preferences.aiEnabled===!1)return;let t=this.explain?.result!=null?`${this.explain.result.summary}

${this.explain.result.body}`:void 0;return tr`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<action-nav slot="actions">
					<gl-action-chip
						data-action="switch-ai"
						label="Switch AI Provider/Model"
						icon="arrow-swap"
					></gl-action-chip>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this patch.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="ai-explain"
								aria-busy="${(this.explainBusy?"true":void 0)??tn}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${t?tr`<div class="ai-content" data-region="commit-explanation">
								<gl-markdown
									class="ai-content__summary scrollable"
									markdown="${t}"
								></gl-markdown>
							</div>`:this.explain?.error?tr`<div class="ai-content has-error" data-region="commit-explanation">
									<p class="ai-content__summary scrollable">
										${this.explain.error.message??"Error retrieving content"}
									</p>
								</div>`:void 0}
				</div>
			</webview-pane>
		`}renderChangedFiles(){let t=this.state?.preferences?.files?.layout??"auto";return tr`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<!-- <span slot="subtitle" data-region="stats">\${this.renderCommitStats()}</span> -->
				<action-nav slot="actions">${this.renderLayoutAction(t)}</action-nav>

				${rS(null!=this.validityMessage,()=>tr`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${rS(this.state?.draft?.patches==null,()=>this.renderLoading(),()=>this.renderTreeView(this.treeModel,this.state?.preferences?.indentGuides,"No files"))}
				</div>
			</webview-pane>
		`}get treeModel(){if(this.state?.draft?.patches==null)return[];let{draft:{patches:t}}=this.state,i=this.state?.preferences?.files?.layout??"auto",r=!1,o=rj(t,t=>t?.files?.length??0);return r="auto"===i?o>(this.state.preferences?.files?.threshold??5):"tree"===i,t?.map(t=>this.draftPatchToTreeModel(t,r,this.state.preferences?.files?.compact,{checkable:!0,checked:this.selectedPatches.includes(t.id)}))}renderUserSelection(t,i){if("delete"===t.change)return;let r=t.pendingRole??t.user.role,o=new Map([["owner","owner"],["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),s=o.get(r);return tr`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gl-avatar .src=${t.avatarUrl}></gl-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${t.member?.name??t.member?.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					${rS("owner"!==r&&("owner"===i||"admin"===i),()=>tr`
							<gl-popover trigger="click" appearance="menu" ?arrow=${!1}>
								<gl-button slot="anchor"
									>${s} <code-icon icon="chevron-down"></code-icon
								></gl-button>
								<menu-list slot="content">
									${rA(o,([i,o])=>"owner"===i?void 0:tr`<menu-item
													@click=${r=>this.onChangeSelectionRole(r,t,i)}
												>
													<code-icon
														icon="check"
														class="user-selection__check ${r===i?"is-active":""}"
													></code-icon>
													${o}
												</menu-item>`)}
								</menu-list>
							</gl-popover>
						`,()=>tr`${s}`)}
				</div>
			</div>
		`}renderUserSelectionList(t,i=!1){if(!t.userSelections?.length)return;let r=t.userSelections;return!1===i&&(r=r.filter(t=>t.user?.role!=="owner")),tr`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${rz(r,t=>t.member?.id??t.user?.id,i=>this.renderUserSelection(i,t.role))}
				</div>
			</div>
		`}renderPatchPermissions(){let t=this.cloudDraft;if(null!=t){if("admin"===t.role||"owner"===t.role){let i,r=t.userSelections?.some(t=>void 0!==t.change);switch(t.visibility){case"private":i="organization";break;case"invite_only":i="lock";break;default:i="globe"}return tr`
				${rS(!0!==this.isCodeSuggestion,()=>tr` <div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${i}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===t.visibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===t.visibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===t.visibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>`)}
				${this.renderUserSelectionList(t)}
				${rS(r,()=>tr`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${this.onUpdatePatch}
									>Update Patch</gl-button
								>
							</span>
						</p>
					`)}
			`}return tr`
			${rS(!0!==this.isCodeSuggestion,()=>tr` <div class="message-input">
						<div class="message-input__control message-input__control--text">
							${rS("public"===t.visibility,()=>tr`<code-icon icon="globe"></code-icon> Anyone with the link`)}
							${rS("private"===t.visibility,()=>tr`<code-icon icon="organization"></code-icon> Members of my Org with the link`)}
							${rS("invite_only"===t.visibility,()=>tr`<code-icon icon="lock"></code-icon> Collaborators only`)}
						</div>
					</div>`)}
			${this.renderUserSelectionList(t,!0)}
		`}}renderCodeSuggectionActions(){if(this.isCodeSuggestion&&null!=this.cloudDraft&&!this.cloudDraft.isArchived&&"viewer"!==this.cloudDraft.role)return tr`
			<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("accepted")}
						>Accept</gl-button
					>
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("rejected")}
						>Reject</gl-button
					>
				</span>
			</p>
		`}renderPatches(){return tr`
			<div class="section section--action">
				${this.renderPatchPermissions()}
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${this.onApplyPatch}>Apply Patch</gl-button>
						<gl-popover placement="top" trigger="click" appearance="menu" ?arrow=${!1}>
							<gl-button
								slot="anchor"
								density="compact"
								aria-label="Apply Patch Options..."
								title="Apply Patch Options..."
								><code-icon icon="chevron-down"></code-icon
							></gl-button>
							<menu-list slot="content" class="mine-menu">
								<menu-item data-value="branch" @click=${this.onSelectApplyOption}
									>Apply to a Branch</menu-item
								>
								<!-- <menu-item data-value="worktree">Apply to new worktree</menu-item> -->
							</menu-list>
						</gl-popover>
					</span>
				</p>
				${this.renderCodeSuggectionActions()}
			</div>
		`}renderActionbar(){let t=this.state?.draft;if(null!=t)return"local"===t.draftType?tr`
				<div class="top-details__actionbar">
					<div class="top-details__actionbar-group"></div>
					<div class="top-details__actionbar-group">
						<a
							class="commit-action"
							href="#"
							aria-label="Share Patch"
							title="Share Patch"
							@click=${this.onShareLocalPatch}
							>Share</a
						>
					</div>
				</div>
			`:tr`
			<div class="top-details__actionbar">
				<div class="top-details__actionbar-group"></div>
				<div class="top-details__actionbar-group">
					<a class="commit-action" href="#" @click=${this.onCopyCloudLink}>
						<code-icon icon="${this._copiedLink?"check":"link"}"></code-icon>
						<span class="top-details__sha">Copy Link</span></a
					>
					${rS(this.cloudDraft?.gkDevLink!=null,()=>tr`
							<a class="commit-action" href=${this.cloudDraft.gkDevLink} title="Open on gitkraken.dev">
								<code-icon icon="globe"></code-icon>
							</a>
						`)}
				</div>
			</div>
		`}renderDraftInfo(){let t;if(this.state.draft?.title==null)return tn;if(this.cloudDraft?.isArchived){let i=this.cloudDraft.archivedReason??"archived";t=tr`<gl-badge class="title__badge">${i}</gl-badge>`}return tr`
			<h1 class="title">${this.state.draft?.title} ${t}</h1>
			${this.renderPatchMessage()}
		`}render(){return this.state?.draft==null?tr` <div class="commit-detail-panel scrollable">${this.renderEmptyContent()}</div>`:tr`
			<div class="pane-groups">
				<div class="pane-groups__group-fixed">
					<div class="section">${this.renderActionbar()}${this.renderDraftInfo()}</div>
				</div>
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">
					${this.renderExplainAi()}${this.renderPatches()}
				</div>
			</div>
		`}createRenderRoot(){return this}onInviteUsers(t){this.emit("gl-patch-details-invite-users")}onChangeSelectionRole(t,i,r){this.emit("gl-patch-details-update-selection",{selection:i,role:r});let o=t.target?.closest("gl-popover");o?.hide()}onVisibilityChange(t){let i=this.state.draft;i.visibility=t.target.value,this.emit("gl-patch-details-update-metadata",{visibility:i.visibility})}onUpdatePatch(t){this.emit("gl-patch-details-update-permissions")}onExplainChanges(t){if(!0===this.explainBusy||t instanceof KeyboardEvent&&"Enter"!==t.key){t.preventDefault(),t.stopPropagation();return}this.explainBusy=!0}onTreeItemActionClicked(t){if(t.detail.context&&t.detail.action)switch(t.detail.action.action){case"apply-patch":this.onApplyPatch();break;case"change-patch-base":this.onChangePatchBase();break;case"show-patch-in-graph":this.onShowInGraph();break;case"file-open":this.onOpenFile(t);break;case"file-compare-working":this.onCompareWorking(t)}}fireFileEvent(t,i,r){let o=new CustomEvent(t,{detail:{...i,showOptions:r}});this.dispatchEvent(o)}onCompareWorking(t){if(!t.detail.context)return;let[i]=t.detail.context;this.emit("gl-patch-file-compare-working",{...i,showOptions:{preview:!t.detail.dblClick,viewColumn:t.detail.altKey?-2:void 0}})}onOpenFile(t){if(!t.detail.context)return;let[i]=t.detail.context;this.emit("gl-patch-file-open",{...i,showOptions:{preview:!t.detail.dblClick,viewColumn:t.detail.altKey?-2:void 0}})}onTreeItemChecked(t){if(!t.detail.context)return;let[i]=t.detail.context,r=this.state.draft?.patches?.find(t=>t.gkRepositoryId===i);if(!r)return;let o=this.selectedPatches.indexOf(r?.id);t.detail.checked?-1===o&&(this.selectedPatches.push(r.id),this.validityMessage=void 0):o>-1&&this.selectedPatches.splice(o,1);let s=new CustomEvent("gl-patch-checked",{detail:{patch:r,checked:t.detail.checked}});this.dispatchEvent(s)}onTreeItemSelected(t){let{node:i,context:r}=t.detail;if(!0===i.branch||null==r)return;let[o]=r;this.emit("gl-patch-file-compare-previous",{...o})}onApplyPatch(t,i="current"){if(!1===this.canSubmit){this.validityMessage="Please select changes to apply";return}this.validityMessage=void 0,this.emit("gl-patch-apply-patch",{draft:this.state.draft,target:i,selectedPatches:this.selectedPatches})}onArchiveDraft(t){this.emit("gl-draft-archive",{reason:t})}onSelectApplyOption(t){if(!1===this.canSubmit){this.validityMessage="Please select changes to apply";return}let i=t.target?.closest("menu-item");i?.dataset?.value!=null&&this.onApplyPatch(void 0,i.dataset.value)}onChangePatchBase(t){let i=new CustomEvent("change-patch-base",{detail:{draft:this.state.draft}});this.dispatchEvent(i)}onSelectPatchRepo(t){let i=new CustomEvent("select-patch-repo",{detail:{draft:this.state.draft}});this.dispatchEvent(i)}onShowInGraph(t){this.emit("gl-patch-details-graph-show-patch",{draft:this.state.draft})}onCopyCloudLink(){this.emit("gl-patch-details-copy-cloud-link",{draft:this.state.draft}),this._copiedLink=!0,setTimeout(()=>this._copiedLink=!1,1e3)}onShareLocalPatch(){this.emit("gl-patch-details-share-local-patch",{draft:this.state.draft})}draftPatchToTreeModel(t,i=!1,r=!0,o){let s=this.repoToTreeModel(t.repository.name,t.gkRepositoryId,o,t.repository.located?void 0:"missing");if(!t.files?.length)return s;let n=[];if(i){let i=rT(t.files,t=>t.path.split("/"),(...t)=>t.join("/"),r);if(null!=i.children)for(let t of i.children.values()){let i=this.walkFileTree(t,{level:2});n.push(i)}}else for(let i of t.files){let t=this.fileToTreeModel(i,{level:2,branch:!1},!0);n.push(t)}return n.length>0&&(s.branch=!0,s.children=n),s}getFileActions(t,i){return[{icon:"go-to-file",label:"Open file",action:"file-open"},{icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}]}};lV([tY({type:Object})],lH.prototype,"state",2),lV([t0()],lH.prototype,"explainBusy",2),lV([tY({type:Object})],lH.prototype,"explain",2),lV([t0()],lH.prototype,"selectedPatches",2),lV([t0()],lH.prototype,"validityMessage",2),lV([t0()],lH.prototype,"_copiedLink",2),lH=lV([tX("gl-draft-details")],lH),Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]),Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let lK="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",lW=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${lK}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${lK}`,graph:`https://gitkraken.com/solutions/commit-graph?${lK}`,launchpad:`https://gitkraken.com/solutions/launchpad?${lK}`,platform:`https://gitkraken.com/devex?${lK}`,pricing:`https://gitkraken.com/gitlens/pricing?${lK}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${lK}`,security:`https://help.gitkraken.com/gitlens/security?${lK}`,workspaces:`https://gitkraken.com/solutions/workspaces?${lK}`,cli:`https://gitkraken.com/cli?${lK}`,browserExtension:`https://gitkraken.com/browser-extension?${lK}`,desktop:`https://gitkraken.com/git-client?${lK}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${lK}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${lK}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${lK}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${lK}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${lK}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${lK}`,helpCenterAiHooks:`https://help.gitkraken.com/cli/cli-home/?${lK}#how-to-uninstall-gitkraken-cli-ai-hooks`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${lK}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${lK}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${lK}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${lK}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${lK}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${lK}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${lK}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${lK}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${lK}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${lK}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${lK}`});var lG=Object.defineProperty,lZ=Object.getOwnPropertyDescriptor,lQ=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lZ(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lG(i,r,n),n};let lX=class extends GlTreeBase{constructor(){super(...arguments),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=x(this.onTitleInput,500),this.onDebounceDescriptionInput=x(this.onDescriptionInput,500)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some(t=>t?.type==="wip")}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter(([,t])=>!1!==t.checked)}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return rj(this.createChanges,t=>t.files?.length??0)}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(t){t.has("state")&&(this.creationBusy=!1),t.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame(()=>{this.titleInput.focus()})}renderUserSelection(t){let i=t.pendingRole,r=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),o=r.get(i);return tr`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gl-avatar .src=${t.avatarUrl}></gl-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${t.member.name??t.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gl-popover trigger="click" appearance="menu" ?arrow=${!1}>
						<gl-button slot="anchor">${o} <code-icon icon="chevron-down"></code-icon></gl-button>
						<menu-list slot="content">
							${rA(r,([r,o])=>tr`<menu-item
										@click=${i=>this.onChangeSelectionRole(i,t,r)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${i===r?"is-active":""}"
										></code-icon>
										${o}
									</menu-item>`)}
						</menu-list>
					</gl-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(this.state?.create?.userSelections!=null&&this.state?.create?.userSelections.length!==0)return tr`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${rz(this.state.create.userSelections,t=>t.member.id,t=>this.renderUserSelection(t))}
				</div>
			</div>
		`}renderForm(){let t;switch(this.draftVisibility){case"private":t="organization";break;case"invite_only":t="lock";break;default:t="globe"}let i=this.review?"Code Suggestion":"Cloud Patch",r=this.review?"Code Suggestions":"Cloud Patches";return tr`
			<div class="section section--action">
				${rS(this.state?.create?.creationError!=null,()=>tr` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`)}
				${rS(!1===this.review,()=>tr`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${t}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`)}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${t=>this.onDebounceTitleInput(t)}
					/>
					${rS(this.state?.orgSettings.ai===!0&&this.state?.preferences.aiEnabled===!0,()=>tr`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${t=>this.onGenerateTitleClick(t)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`)}
				</div>

				${rS(this.generate?.error!=null,()=>tr`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`)}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${t=>this.onDebounceDescriptionInput(t)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${t=>this.onCreateAll(t)}
							>Create ${i}</gl-button
						>
					</span>
				</p>
				${rS(!0===this.review,()=>tr`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`)}
				${rS(this.state?.orgSettings.byob===!1,()=>tr`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${lW.cloudPatches}"
								title="Learn more about ${r}"
								aria-label="Learn more about ${r}"
								>${r}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`,()=>tr`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${lW.cloudPatches}"
								title="Learn more about ${r}"
								aria-label="Learn more about ${r}"
								>${i}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`)}
			</div>
		`}render(){return tr`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return tr`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${rS(null!=this.validityMessage,()=>tr`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${rS(null==this.create.changes,()=>this.renderLoading(),()=>this.renderTreeViewWithModel())}
				</div>
			</webview-pane>
		`}onTreeItemChecked(t){if(null==t.detail.context||t.detail.context.length<1)return;let[i,r]=t.detail.context,o=t.detail.checked;"unstaged"===r&&(o=!!t.detail.checked||"staged");let s=this.getChangeForRepo(i);null==s||s.checked!==o&&(s.checked=o,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:i,checked:o}))}onTreeItemSelected(t){if(!t.detail.context)return;let[i]=t.detail.context;this.emit("gl-patch-file-compare-previous",{...i})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([],"none","No changes");let t=[],i=this.createChanges.length>1,r=this.isTree(this.filesModified??0),o=this.isCompact;if(i)for(let i of this.createChanges){let s=this.getTreeForChange(i,!0,r,o);null!=s&&t.push(...s)}else{let i=this.createChanges[0],s=this.getTreeForChange(i,!1,r,o);null!=s&&t.push(...s)}return this.renderTreeView(t,this.state?.preferences?.indentGuides,"No changes")}getTreeForChange(t,i=!1,r=!1,o=!0){if(null==t.files||0===t.files.length)return;let s=[];if("wip"===t.type){let n=[],a=[];for(let i of t.files)i.staged?n.push(i):a.push(i);0===n.length||0===a.length?s.push(...this.renderFiles(t.files,r,o,i?2:1)):(a.length&&s.push({label:"Unstaged Changes",path:"",level:i?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===t.checked,context:[t.repository.uri,"unstaged"],children:this.renderFiles(a,r,o,i?3:2)}),n.length&&s.push({label:"Staged Changes",path:"",level:i?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==t.checked,disableCheck:!0,children:this.renderFiles(n,r,o,i?3:2)}))}else s.push(...this.renderFiles(t.files,r,o));if(!i)return s;let n=this.repoToTreeModel(t.repository.name,t.repository.uri,{branch:!0,checkable:!0,checked:!1!==t.checked});return n.children=s,[n]}isTree(t){return"auto"===this.fileLayout?t>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit){0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0;return}this.validityMessage=void 0,this.titleInput.setCustomValidity("");let t=this.selectedChanges.reduce((t,[i,r])=>(t[i]=r,t),{}),i={title:this.create.title??"",description:this.create.description,changesets:t,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",i)}onCreateAll(t){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(t){}getChangeForRepo(t){return this.create.changes[t]}onTitleInput(t){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(t){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(t){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(t,i,r){this.emit("gl-patch-create-update-selection",{selection:i,role:r});let o=t.target?.closest("gl-popover");o?.hide()}onVisibilityChange(t){this.create.visibility=t.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(t){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(t){if(t.detail.context&&t.detail.action)switch(t.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(t);break;case"file-open":this.onOpenFile(t);break;case"file-stage":this.onStageFile(t);break;case"file-unstage":this.onUnstageFile(t)}}onOpenFile(t){if(!t.detail.context)return;let[i]=t.detail.context;this.emit("gl-patch-file-open",{...i,showOptions:{preview:!t.detail.dblClick,viewColumn:t.detail.altKey?-2:void 0}})}onStageFile(t){if(!t.detail.context)return;let[i]=t.detail.context;this.emit("gl-patch-file-stage",{...i,showOptions:{preview:!t.detail.dblClick,viewColumn:t.detail.altKey?-2:void 0}})}onUnstageFile(t){if(!t.detail.context)return;let[i]=t.detail.context;this.emit("gl-patch-file-unstage",{...i,showOptions:{preview:!t.detail.dblClick,viewColumn:t.detail.altKey?-2:void 0}})}onShowInGraph(t){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(t,i){let r={icon:"go-to-file",label:"Open File",action:"file-open"};return this.review?[r]:!0===t.staged?[r,{icon:"remove",label:"Unstage Changes",action:"file-unstage"}]:[r,{icon:"plus",label:"Stage Changes",action:"file-stage"}]}getRepoActions(t,i,r){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};lQ([tY({type:Object})],lX.prototype,"state",2),lQ([tY({type:Boolean})],lX.prototype,"review",2),lQ([tY({type:Object})],lX.prototype,"generate",2),lQ([t0()],lX.prototype,"generateBusy",2),lQ([t0()],lX.prototype,"creationBusy",2),lQ([t2("#title")],lX.prototype,"titleInput",2),lQ([t2("#desc")],lX.prototype,"descInput",2),lQ([t2("#generate-ai")],lX.prototype,"generateAiButton",2),lQ([t0()],lX.prototype,"validityMessage",2),lX=lQ([tX("gl-patch-create")],lX);var lJ=Object.defineProperty,lY=Object.getOwnPropertyDescriptor,l0=(t,i,r,o)=>{for(var s,n=o>1?void 0:o?lY(i,r):i,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o?s(i,r,n):s(n))||n);return o&&n&&lJ(i,r,n),n};let l1=class extends GlElement{constructor(){super(...arguments),this._contextMenuProxy=new ContextMenuProxyController(this),this.indentPreference=16}get wipChangesCount(){return this.state?.create==null?0:Object.values(this.state.create.changes).reduce((t,i)=>t+=i.files?.length??0,0)}get wipChangeState(){if(this.state?.create==null)return;let t=Object.values(this.state.create.changes).reduce((t,i)=>(null!=i.files&&(t.files+=i.files.length,t.on.add(i.repository.uri)),t),{files:0,on:new Set});return{count:t.files,branches:[...t.on].join(", ")}}get mode(){return this.state?.mode??"view"}updateDocumentProperties(){let t=this.state?.preferences?.indent;t===this.indentPreference||(this.indentPreference=t??16,document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`))}updated(t){t.has("state")&&this.updateDocumentProperties()}render(){return tr`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					${rS("view"===this.mode,()=>tr`<gl-draft-details .state=${this.state} .explain=${this.explain}></gl-draft-details>`,()=>tr`<gl-patch-create .state=${this.state} .generate=${this.generate}></gl-patch-create>`)}
				</main>
			</div>
		`}createRenderRoot(){return this}};l0([tY({type:Object})],l1.prototype,"state",2),l0([tY({type:Object})],l1.prototype,"explain",2),l0([tY({type:Object})],l1.prototype,"generate",2),l0([tY({attribute:!1,type:Object})],l1.prototype,"app",2),l1=l0([tX("gl-patch-details-app")],l1);let l2="0000000000000000000000000000000000000000";let PatchDetailsApp=class PatchDetailsApp extends App{constructor(){super("PatchDetailsApp"),this.debouncedAttachState=x(this.attachState.bind(this),100)}onInitialize(){this.debouncedAttachState()}onBind(){return[m.on("[data-switch-value]","click",t=>this.onToggleFilesLayout(t)),m.on('[data-action="ai-explain"]',"click",t=>this.onAIExplain(t)),m.on('[data-action="switch-ai"]',"click",t=>this.onSwitchAIModel(t)),m.on('[data-action="mode"]',"click",t=>this.onModeClicked(t)),m.on("gl-draft-details","gl-patch-apply-patch",t=>this.onApplyPatch(t.detail)),m.on("gl-draft-details","gl-draft-archive",t=>this.onArchiveDraft(t.detail.reason)),m.on("gl-patch-details-app","change-patch-base",t=>this.onChangePatchBase(t.detail)),m.on("gl-patch-details-app","select-patch-repo",t=>this.onSelectPatchRepo(t.detail)),m.on("gl-patch-details-app","gl-patch-details-graph-show-patch",t=>this.onShowPatchInGraph(t.detail)),m.on("gl-patch-details-app","gl-patch-create-patch",t=>this.onCreatePatch(t.detail)),m.on("gl-patch-details-app","gl-patch-share-local-patch",()=>this.onShareLocalPatch()),m.on("gl-draft-details","gl-patch-details-copy-cloud-link",()=>this.onCopyCloudLink()),m.on("gl-patch-create","gl-patch-create-invite-users",()=>this.onInviteUsers()),m.on("gl-draft-details","gl-patch-details-invite-users",()=>this.onInviteUsers()),m.on("gl-patch-create","gl-patch-create-update-selection",t=>this.onUpdateUserSelection(t.detail)),m.on("gl-draft-details","gl-patch-details-update-selection",t=>this.onUpdateUserSelection(t.detail)),m.on("gl-patch-create","gl-patch-create-repo-checked",t=>this.onCreateCheckRepo(t.detail)),m.on("gl-patch-create","gl-patch-generate-title",t=>this.onCreateGenerateTitle(t.detail)),m.on("gl-patch-create","gl-patch-create-update-metadata",t=>this.onCreateUpdateMetadata(t.detail)),m.on("gl-draft-details","gl-patch-details-update-metadata",t=>this.onDraftUpdateMetadata(t.detail)),m.on("gl-draft-details","gl-patch-details-update-permissions",()=>this.onDraftUpdatePermissions()),m.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-previous",t=>this.onCompareFileWithPrevious(t.detail)),m.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-working",t=>this.onCompareFileWithWorking(t.detail)),m.on("gl-patch-create,gl-draft-details","gl-patch-file-open",t=>this.onOpenFile(t.detail)),m.on("gl-draft-details","gl-patch-checked",t=>this.onPatchChecked(t.detail))]}onMessageReceived(t){switch(!0){case et.is(t):t.params.state,this.state=t.params.state,this.setState(this.state),this.debouncedAttachState();break;case ei.is(t):case er.is(t):case eo.is(t):this.state={...this.state,...t.params},this.setState(this.state),this.debouncedAttachState(!0);break;case es.is(t):{let i=this.state.draft,r=i.patches,o=r.findIndex(i=>i.id===t.params.patch.id);r.splice(o,1,t.params.patch),this.state={...this.state,draft:i},this.setState(this.state),this.debouncedAttachState(!0);break}default:super.onMessageReceived?.(t)}}onPatchChecked(t){this.sendCommand(P,t)}onCreateCheckRepo(t){this.sendCommand(K,t)}onCreateUpdateMetadata(t){this.sendCommand(W,t)}async onCreateGenerateTitle(t){try{let t=await this.sendRequest(ee,void 0);t.error?this.component.generate={error:{message:t.error.message??"Error retrieving content"}}:t.title||t.description?(this.component.generate={title:t.title,description:t.description},this.state={...this.state,create:{...this.state.create,title:t.title??this.state.create?.title,description:t.description??this.state.create?.description}},this.setState(this.state),this.debouncedAttachState()):this.component.generate=void 0}catch{this.component.generate={error:{message:"Error retrieving content"}}}}onDraftUpdateMetadata(t){this.sendCommand(G,t)}onDraftUpdatePermissions(){this.sendCommand(Q,void 0)}onShowPatchInGraph(t){}onCreatePatch(t){this.sendCommand(A,t)}onShareLocalPatch(){this.sendCommand(V,void 0)}onCopyCloudLink(){this.sendCommand(q,void 0)}onModeClicked(t){let i=t.target?.dataset.actionValue??void 0;i!==this.state.mode&&this.sendCommand(U,{mode:i})}onApplyPatch(t){null!=t.selectedPatches&&0!==t.selectedPatches.length&&this.sendCommand($,{details:t.draft,target:t.target??"current",selected:t.selectedPatches})}onArchiveDraft(t){this.sendCommand(E,{reason:t})}onChangePatchBase(t){this.sendCommand(j,void 0)}onSelectPatchRepo(t){this.sendCommand(T,void 0)}onCommandClickedCore(t){let i=t?.startsWith("command:")?t.slice(8):t;null!=i&&this.sendCommand(el,{command:i})}onSwitchAIModel(t){this.onCommandClickedCore("gitlens.ai.switchProvider")}async onAIExplain(t){try{let t=await this.sendRequest(Y,void 0);t.error?this.component.explain={error:{message:t.error.message??"Error retrieving content"}}:this.component.explain=t}catch{this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(t){let i=t.target?.dataset.switchValue??void 0;if(i===this.state.preferences.files?.layout)return;let r={...this.state.preferences.files,layout:i??"auto",compact:this.state.preferences.files?.compact??!0,threshold:this.state.preferences.files?.threshold??5,icon:this.state.preferences.files?.icon??"type"};this.state={...this.state,preferences:{...this.state.preferences,files:r}},this.debouncedAttachState(),this.sendCommand(N,{files:r})}onInviteUsers(){this.sendCommand(X,void 0)}onUpdateUserSelection(t){this.sendCommand(J,t)}onOpenFileOnRemote(t){this.sendCommand(D,t)}onOpenFile(t){this.sendCommand(O,t)}onCompareFileWithWorking(t){this.sendCommand(B,t)}onCompareFileWithPrevious(t){this.sendCommand(F,t)}onFileMoreActions(t){this.sendCommand(M,t)}get component(){return null==this._component&&(this._component=document.getElementById("app"),this._component.app=this),this._component}attachState(t){this.component.state=this.state}};new PatchDetailsApp;export{PatchDetailsApp,l2 as uncommittedSha};