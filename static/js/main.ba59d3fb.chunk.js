(this.webpackJsonppic2pill=this.webpackJsonppic2pill||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(14),s=a(15),o=a(17),i=a(16),l=a(18),r=a(1),c=a.n(r),d=a(32),p=a.n(d),u=a(21),m=(a(75),a(76),a(22)),h=a(105),f=a(108),b=a(67),g=a(109),v=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.show?c.a.createElement(g.a,{variant:this.props.variant||"danger",onClose:this.props.onClose,dismissible:!0},this.props.title&&c.a.createElement("h5",null,c.a.createElement("strong",null,this.props.title)),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.message}})):null}}]),t}(r.Component),w=(a(79),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"About container"},c.a.createElement("h1",null,"About"),c.a.createElement("p",null,c.a.createElement("i",null,"PicToPill")," is a TensorFlow.js based Progresssive web app where users can classify pill images locally or taken with their device's camera(",c.a.createElement("i",null,"even in OFFLINE!"),"). You can even install this as Standalone app on any device from the browser itself. Click on the 'Add to HomeScreen'(on mobile) and '+' symbol on System browser address bar to install as Local app! The app uses TensorFlow.js and a pre-trained model converted to the TensorFlow.js format to provide the inference capabilities. This model is saved locally in the browser using IndexedDB. A service worker is also used to provide offline capabilities."),c.a.createElement("p",null,"Currently, It Supports only five types of Pill Classification namely, Amoxicillin,Aspirin, Cimetidine,Paracetamol and Provigil. Further more classification dataset will be compilied and updated."),c.a.createElement("p",null,c.a.createElement("b",null,"*DISCLAIMER* :")," The following tool is done for experimental purposes and maybe bound to be error. So, Strictly advised not to use on real medication purposes and the developer may not be responsible for the events caused on violating above."))}}]),t}(r.Component)),E=a(6),y=a.n(E),x=a(104),C=a(103),S=a(61),A=a(110),O=a(106),j=a(107),k=a(111),N=a(45),U=a(68),I=a(60),T=a.n(I),L=a(9),M=a(69),P=function(e){var t=e.isLoading,a=e.text,n=e.loadingText,s=e.className,o=void 0===s?"":s,i=e.disabled,l=void 0!==i&&i,r=Object(M.a)(e,["isLoading","text","loadingText","className","disabled"]);return c.a.createElement(C.a,Object.assign({className:"LoadButton ".concat(o),disabled:l||t},r),t&&c.a.createElement(x.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",t?n:a)},F={0:"Amoxicillin",1:"Aspirin",2:"Cimetidine",3:"Paracetamol",4:"Provigil"},D={API_ENDPOINT:"http://localhost:5000/api"},W=(a(93),a(94),"https://coderganesh.github.io/pic2pill/model/model.json"),B=224,_=224,z=1,K="web-model",R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).initWebcam=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.awrap(L.b.webcam(a.refs.webcam,{resizeWidth:_,resizeHeight:_,facingMode:"environment"}));case 3:a.webcam=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a.refs.noWebcam.style.display="block";case 9:case"end":return e.stop()}}),null,null,[[0,6]])},a.startWebcam=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.webcam&&a.webcam.start();case 1:case"end":return e.stop()}}))},a.stopWebcam=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.webcam&&a.webcam.stop();case 1:case"end":return e.stop()}}))},a.getModelInfo=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.awrap(fetch("".concat(D.API_ENDPOINT,"/model_info"),{method:"GET"}).then((function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(e.json().then((function(e){a.modelLastUpdated=e.last_updated})).catch((function(e){console.log("Unable to get parse model info.")})));case 2:case"end":return t.stop()}}))})).catch((function(e){console.log("Unable to get model info")})));case 2:case"end":return e.stop()}}))},a.updateModel=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Updating the model: "+K),a.setState({isDownloadingModel:!0}),e.next=4,y.a.awrap(L.d(W));case 4:return a.model=e.sent,e.next=7,y.a.awrap(a.model.save("indexeddb://"+K));case 7:a.setState({isDownloadingModel:!1,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!0});case 8:case"end":return e.stop()}}))},a.classifyLocalImage=function(){var e,t,n,s,o,i,l,r,c,d,p;return y.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return a.setState({isClassifying:!0}),e=a.refs.cropper.getCroppedCanvas(),t=L.e((function(){return L.a.fromPixels(e).toFloat()})),u.next=5,y.a.awrap(a.processImage(t));case 5:return n=u.sent,s=L.c.resizeBilinear(n,[B,B]),o=a.model.predict(s),u.next=10,y.a.awrap(o.data());case 10:return i=u.sent,u.next=13,y.a.awrap(a.getTopKClasses(i,z));case 13:l=u.sent,a.setState({predictions:l,isClassifying:!1,photoSettingsOpen:!a.state.photoSettingsOpen}),r=a.refs.canvas.getContext("2d"),c=_/e.width,d=_/e.height,p=Math.min(c,d),r.clearRect(0,0,_,_),r.drawImage(e,0,0,e.width*p,e.height*p),t.dispose(),n.dispose(),s.dispose(),o.dispose();case 25:case"end":return u.stop()}}))},a.classifyWebcamImage=function(){var e,t,n,s,o,i,l;return y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a.setState({isClassifying:!0}),r.next=3,y.a.awrap(a.webcam.capture());case 3:return e=r.sent,t=L.c.resizeBilinear(e,[B,B]),r.next=7,y.a.awrap(a.processImage(t));case 7:return n=r.sent,s=a.model.predict(n),r.next=11,y.a.awrap(s.data());case 11:return o=r.sent,r.next=14,y.a.awrap(a.getTopKClasses(o,z));case 14:return i=r.sent,a.setState({predictions:i,isClassifying:!1,photoSettingsOpen:!a.state.photoSettingsOpen}),l=L.e((function(){return e.toFloat().div(255)})),r.next=19,y.a.awrap(L.a.toPixels(l,a.refs.canvas));case 19:t.dispose(),e.dispose(),n.dispose(),s.dispose(),l.dispose();case 24:case"end":return r.stop()}}))},a.processImage=function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",L.e((function(){return e.expandDims(0).toFloat().div(127).sub(1)})));case 1:case"end":return t.stop()}}))},a.getTopKClasses=function(e,t){var a,n,s,o,i,l,r;return y.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:for(a=[],n=0;n<e.length;n++)a.push({value:e[n],index:n});for(a.sort((function(e,t){return t.value-e.value})),s=new Float32Array(t),o=new Int32Array(t),i=0;i<t;i++)s[i]=a[i].value,o[i]=a[i].index;for(l=[],r=0;r<o.length;r++)l.push({className:F[o[r]],probability:(100*s[r]).toFixed(2)});return c.abrupt("return",l);case 9:case"end":return c.stop()}}))},a.handlePanelClick=function(e){a.setState({photoSettingsOpen:!a.state.photoSettingsOpen})},a.handleFileChange=function(e){e.target.files&&e.target.files.length>0&&a.setState({file:URL.createObjectURL(e.target.files[0]),filename:e.target.files[0].name})},a.handleTabSelect=function(e){switch(e){case"camera":a.startWebcam();break;case"localfile":a.setState({filename:null,file:null}),a.stopWebcam()}},a.webcam=null,a.model=null,a.modelLastUpdated=null,a.state={modelLoaded:!1,filename:"",isModelLoading:!1,isClassifying:!1,predictions:[],photoSettingsOpen:!0,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!1,isDownloadingModel:!1},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n=this;return y.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(!("indexedDB"in window)){s.next=36;break}return s.prev=1,s.next=4,y.a.awrap(L.d("indexeddb://"+K));case 4:return this.model=s.sent,s.prev=5,s.next=8,y.a.awrap(Object(U.a)("tensorflowjs",1));case 8:return e=s.sent,s.next=11,y.a.awrap(e.transaction("model_info_store").objectStore("model_info_store").get(K));case 11:return t=s.sent,a=new Date(t.modelArtifactsInfo.dateSaved),s.next=15,y.a.awrap(this.getModelInfo());case 15:console.log(this.modelLastUpdated),!this.modelLastUpdated||a>=new Date(this.modelLastUpdated).getTime()?console.log("Using saved model"):this.setState({modelUpdateAvailable:!0,showModelUpdateAlert:!0}),s.next=23;break;case 19:s.prev=19,s.t0=s.catch(5),console.warn(s.t0),console.warn("Could not retrieve when model was saved.");case 23:s.next=34;break;case 25:return s.prev=25,s.t1=s.catch(1),console.log("Not found in IndexedDB. Loading and saving..."),console.log(s.t1),s.next=31,y.a.awrap(L.d(W));case 31:return this.model=s.sent,s.next=34,y.a.awrap(this.model.save("indexeddb://"+K));case 34:s.next=40;break;case 36:return console.warn("IndexedDB not supported."),s.next=39,y.a.awrap(L.d(W));case 39:this.model=s.sent;case 40:this.setState({modelLoaded:!0}),this.initWebcam(),L.e((function(){return n.model.predict(L.f([1,B,B,3]))})).dispose();case 44:case"end":return s.stop()}}),null,this,[[1,25],[5,19]])}},{key:"componentWillUnmount",value:function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.webcam&&this.webcam.stop();try{this.model.dispose()}catch(t){}case 2:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Classify container"},!this.state.modelLoaded&&c.a.createElement(r.Fragment,null,c.a.createElement(x.a,{animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))," ",c.a.createElement("span",{className:"loading-model-text"},"Loading Model")),this.state.modelLoaded&&c.a.createElement(r.Fragment,null,c.a.createElement(C.a,{onClick:this.handlePanelClick,className:"classify-panel-header","aria-controls":"photo-selection-pane","aria-expanded":this.state.photoSettingsOpen},"Take or Select a Photo to Classify",c.a.createElement("span",{className:"panel-arrow"},this.state.photoSettingsOpen?c.a.createElement(N.b,null):c.a.createElement(N.c,null))),c.a.createElement(S.a,{in:this.state.photoSettingsOpen},c.a.createElement("div",{id:"photo-selection-pane"},this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert&&c.a.createElement(h.a,null,c.a.createElement(g.a,{variant:"info",show:this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert,onClose:function(){return e.setState({showModelUpdateAlert:!1})},dismissible:!0},"An update for the ",c.a.createElement("strong",null,this.state.modelType)," model is available.",c.a.createElement("div",{className:"d-flex justify-content-center pt-1"},!this.state.isDownloadingModel&&c.a.createElement(C.a,{onClick:this.updateModel,variant:"outline-info"},"Update"),this.state.isDownloadingModel&&c.a.createElement("div",null,c.a.createElement(x.a,{animation:"border",role:"status",size:"sm"},c.a.createElement("span",{className:"sr-only"},"Downloading..."))," ",c.a.createElement("strong",null,"Downloading..."))))),this.state.showModelUpdateSuccess&&c.a.createElement(h.a,null,c.a.createElement(g.a,{variant:"success",onClose:function(){return e.setState({showModelUpdateSuccess:!1})},dismissible:!0},"The ",c.a.createElement("strong",null,this.state.modelType)," model has been updated!")),c.a.createElement(A.a,{defaultActiveKey:"camera",id:"input-options",onSelect:this.handleTabSelect,className:"justify-content-center"},c.a.createElement(O.a,{eventKey:"camera",title:"Take Photo"},c.a.createElement("div",{id:"no-webcam",ref:"noWebcam"},c.a.createElement("span",{className:"camera-icon"},c.a.createElement(N.a,null)),"No camera found. ",c.a.createElement("br",null),"Please use a device with a camera, or upload an image instead."),c.a.createElement("div",{className:"webcam-box-outer"},c.a.createElement("div",{className:"webcam-box-inner"},c.a.createElement("video",{ref:"webcam",autoPlay:!0,playsInline:!0,muted:!0,id:"webcam",width:"448",height:"448"}))),c.a.createElement("div",{className:"button-container"},c.a.createElement(P,{variant:"primary",size:"lg",onClick:this.classifyWebcamImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."}))),c.a.createElement(O.a,{eventKey:"localfile",title:"Select Local File"},c.a.createElement(j.a.Group,{controlId:"file"},c.a.createElement(j.a.Label,null,"Select Image File"),c.a.createElement("br",null),c.a.createElement(j.a.Label,{className:"imagelabel"},this.state.filename?this.state.filename:"Browse..."),c.a.createElement(j.a.Control,{onChange:this.handleFileChange,type:"file",accept:"image/*",className:"imagefile"})),this.state.file&&c.a.createElement(r.Fragment,null,c.a.createElement("div",{id:"local-image"},c.a.createElement(T.a,{ref:"cropper",src:this.state.file,style:{height:400,width:"100%"},guides:!0,aspectRatio:1,viewMode:2})),c.a.createElement("div",{className:"button-container"},c.a.createElement(P,{variant:"primary",size:"lg",disabled:!this.state.filename,onClick:this.classifyLocalImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."}))))))),this.state.predictions.length>0&&c.a.createElement("div",{className:"classification-results"},c.a.createElement("h3",null,"Predictions"),c.a.createElement("canvas",{ref:"canvas",width:_,height:_}),c.a.createElement("br",null),c.a.createElement(k.a,null,this.state.predictions.map((function(e){return c.a.createElement(k.a.Item,{key:e.className},c.a.createElement("strong",null,e.className)," ",e.probability,"%")}))))))}}]),t}(r.Component),G=(a(97),function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("h1",null,"404"),c.a.createElement("h3",null,"The page you were looking for is not here."),c.a.createElement(u.b,{to:"/pic2pill/"},"Go Home"))}),H=function(e){var t=e.childProps;return c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/pic2pill/",exact:!0,component:R,props:t}),c.a.createElement(m.a,{path:"/pic2pill/about",exact:!0,component:w,props:t}),c.a.createElement(m.a,{component:G}))},J=(a(100),function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).dismissUpdateAlert=function(e){a.setState({showUpdateAlert:!1})};return a.state={showUpdateAlert:!0,reloadMsg:"\n      New content is available.<br />\n      Please <a href='javascript:location.reload();'>reload</a>.<br />\n      <small>If reloading doesn't work, close all tabs/windows of this web application,\n      and then reopen the application.</small>\n    "},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement(f.a,{collapseOnSelect:!0,className:"app-nav-bar",variant:"dark",expand:"lg"},c.a.createElement(f.a.Brand,{href:"/pic2pill"},"Pic2Pill"),c.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(b.a,{className:""},c.a.createElement(u.b,{className:"nav-link",to:"/pic2pill/"},"Classify"),c.a.createElement(u.b,{className:"nav-link",to:"/pic2pill/about"},"About")))),this.props.updateAvailable&&this.state.showUpdateAlert&&c.a.createElement("div",{style:{paddingTop:"10px"}},c.a.createElement(v,{title:"",variant:"info",message:this.state.reloadMsg,show:this.props.updateAvailable&&this.state.showUpdateAlert,onClose:this.dismissUpdateAlert}))),c.a.createElement(h.a,null,c.a.createElement(H,null)),c.a.createElement("div",{style:{width:"100%",height:50,backgroundColor:"#FFFFFF",justifyContent:"center",alignItems:"center",position:"absolute",bottom:0}},c.a.createElement("h3",{style:{color:"#000",fontSize:18}},"Dev by ",c.a.createElement("a",{href:"/"},"Ganesh Kumar"))))}}]),t}(r.Component)),Y=Object(m.f)(J),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e){if("serviceWorker"in navigator){if(new URL("/pic2pill",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pic2pill","/service-worker.js");$?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(t,e)}))}}function Q(e,t){navigator.serviceWorker.register(e).then((function(e){function a(a){console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA2-PWA."),t&&t.onUpdate&&t.onUpdate(e,a)}e.waiting&&e.active&&a(e.waiting),e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?a(n):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,l=new Array(s),r=0;r<s;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={contentCached:!1,updateAvailable:!1},a.handleUpdate=function(e){var t=e.waiting;t&&t.postMessage({type:"SKIP_WAITING"}),a.setState({updateAvailable:!0})},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){q({onUpdate:this.handleUpdate})}},{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(Y,{updateAvailable:this.state.updateAvailable}))}}]),t}(r.Component);p.a.render(c.a.createElement(V,null),document.getElementById("root"))},70:function(e,t,a){e.exports=a(101)},76:function(e,t,a){},79:function(e,t,a){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t){},91:function(e,t){},92:function(e,t){},93:function(e,t,a){},97:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.ba59d3fb.chunk.js.map