(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(8),s=n(7),i=n(1),l=n(2),p=n(4),m=n(3),h=(n(15),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrappi"},r.a.createElement("span",{className:this.styyliChangee()}," ",this.formatCount()),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)}}," more"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"deleteButton"},"DEL"))}},{key:"styyliChangee",value:function(){var e="spanni";return e+=0===this.props.counter.value?"":"Tiukka"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"0":e}}]),n}(a.Component)),v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:1,value:5},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(t){var n=Object(s.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(u.a)({},t),n[a].value++,e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleReset,className:"reset"},"RESET "),r.a.createElement("span",{className:"topSpan"},"React2gh-p"),this.state.counters.map((function(t){return r.a.createElement(h,{key:t.id,onDelete:e.handleDelete,onIncrement:e.handleIncrement,counter:t})})),";")}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2b2d638e.chunk.js.map