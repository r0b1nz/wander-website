(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),i=(a(16),a(9)),o=a(1),u=a(2),l=a(4),h=a(3),p=a(5),d=a(6),m=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={currentKeyword:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r)),a.props.updateSearchKeyword(r)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.currentKeyword;return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{type:"text",value:e,name:"currentKeyword",onChange:this.handleChange}))}}]),t}(n.Component),f=function(e){return e.titles||e.descriptions?e.titles.map(function(t,a){return r.a.createElement("div",{id:a},r.a.createElement("h1",null,t),e.descriptions[a]&&r.a.createElement("p",null,e.descriptions[a]))}):""},b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.titles,a=e.descriptions;return r.a.createElement("div",{className:"MotherOfAllSearchViews"},r.a.createElement(f,{titles:t,descriptions:a}))}}]),t}(n.Component),v=function(e){return"https://en.wikipedia.org/w/api.php?action=opensearch&search="+e.split(" ").join("+")+"&format=json&origin=*"};function j(e,t){var a=v(e);fetch(a).then(function(e){return e.json()}).then(function(e){return t(e)})}a(17);var w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={searchKeyword:"",searchResults:[]},a.updateSearchKeyword=function(e){j(e,a.updateResults),a.setState({searchKeyword:e})},a.updateResults=function(e){a.setState(Object(i.a)({},a.state,{searchResults:e}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"Wiki - Searcher"),r.a.createElement(m,{updateSearchKeyword:this.updateSearchKeyword})),r.a.createElement(b,{titles:this.state.searchResults[1],descriptions:this.state.searchResults[2]}),r.a.createElement("div",{className:"Footer"},r.a.createElement("h3",null,"Designed and developed by ",r.a.createElement("b",null,"Robin Gautam"))))}}]),t}(n.Component);s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ed068f9b.chunk.js.map