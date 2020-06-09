define(["react","@grafana/ui","@grafana/data","app/core/core"],(function(e,t,n,o){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t);var o=n(2),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var s=n(0),p=n.n(s),l=n(3);function u(){return Math.floor((new Date).getTime()/1e3)}var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=i({host:window.location.href.replace(/^.+\/\//g,"").replace(/\/.+$/g,""),update:""},l.contextSrv.user),t.body=function(){return i(i(i({},t.props.options),t.state),{time:u()})},t}return a(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.options;fetch(t.server,{method:"POST",mode:t.cors?"cors":"no-cors",body:JSON.stringify(this.body()),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({update:t.location})}))},t.prototype.componentWillUnmount=function(){var e=this.props.options;e.postEnd&&fetch(e.server+"/"+this.state.update,{method:"POST",mode:e.cors?"cors":"no-cors",body:JSON.stringify(this.body()),headers:{"Content-Type":"application/json"}})},t.prototype.render=function(){var e=this.props,t=e.options,n=e.width,o=e.height;return!t.hidden&&p.a.createElement("div",{style:{position:"relative",width:n,height:o}},p.a.createElement("pre",null,JSON.stringify(this.body(),null,1)))},t}(s.PureComponent),h=n(1),d=h.LegacyForms.FormField,f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onServerChanged=function(e){var n=e.target;t.props.onOptionsChange(i(i({},t.props.options),{server:n.value}))},t.onKeyChanged=function(e){var n=e.target;t.props.onOptionsChange(i(i({},t.props.options),{key:n.value}))},t.onDescriptionChanged=function(e){var n=e.target;t.props.onOptionsChange(i(i({},t.props.options),{description:n.value}))},t.onHiddenChanged=function(e){var n="True"===e.value;t.props.onOptionsChange(i(i({},t.props.options),{hidden:n}))},t.onPostEndChanged=function(e){var n="True"===e.value;t.props.onOptionsChange(i(i({},t.props.options),{postEnd:n}))},t.onCorsChanged=function(e){var n="True"===e.value;t.props.onOptionsChange(i(i({},t.props.options),{cors:n}))},t.hValue=function(e){return e?"True":"False"},t}return a(t,e),t.prototype.componentWillMount=function(){var e=this.props.options,t=window.location.href;""===e.key&&(e.key=t.replace(/^.+\/d\//g,"").replace(/\/.+$/g,""),this.props.onOptionsChange(i({},this.props.options))),""===e.description&&(e.description=t.replace(/^.+\/d\/.+\//g,"").replace(/\?.+$/g,""),this.props.onOptionsChange(i({},this.props.options)))},t.prototype.render=function(){var e=this.props.options;return p.a.createElement("div",{className:"section gf-form-group"},p.a.createElement("h5",{className:"section-heading"},"Server"),p.a.createElement(d,{label:"URL",labelWidth:10,inputWidth:40,type:"text",onChange:this.onServerChanged,value:e.server||""}),p.a.createElement("br",null),p.a.createElement("h5",{className:"section-heading"},"Settings"),p.a.createElement(d,{label:"Unique ID",labelWidth:10,inputWidth:20,type:"text",onChange:this.onKeyChanged,value:e.key||""}),p.a.createElement(d,{label:"Description",labelWidth:10,inputWidth:80,type:"text",onChange:this.onDescriptionChanged,value:e.description||""}),p.a.createElement("br",null),p.a.createElement(h.PanelOptionsGroup,{title:"Post End"},p.a.createElement(h.Select,{value:{value:this.hValue(e.postEnd),label:this.hValue(e.postEnd)},onChange:this.onPostEndChanged,options:[{label:"False",value:"False"},{label:"True",value:"True"}]})),p.a.createElement("br",null),p.a.createElement(h.PanelOptionsGroup,{title:"Hidden"},p.a.createElement(h.Select,{value:{value:this.hValue(e.hidden),label:this.hValue(e.hidden)},onChange:this.onHiddenChanged,options:[{label:"False",value:"False"},{label:"True",value:"True"}]})),p.a.createElement("br",null),p.a.createElement(h.PanelOptionsGroup,{title:"CORS"},p.a.createElement(h.Select,{value:{value:this.hValue(e.cors),label:this.hValue(e.cors)},onChange:this.onCorsChanged,options:[{label:"True",value:"True"},{label:"False",value:"False"}]})))},t}(s.PureComponent);n.d(t,"plugin",(function(){return v}));var v=new o.PanelPlugin(c).setDefaults({server:"",description:"",key:"",hidden:!1,postEnd:!0,cors:!0}).setEditor(f)}])}));
//# sourceMappingURL=module.js.map