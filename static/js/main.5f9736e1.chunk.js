(this["webpackJsonpimpact-analytics"]=this["webpackJsonpimpact-analytics"]||[]).push([[0],{30:function(e,t,s){},49:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(31),i=s.n(n),r=s(9),o=s(10),l=s(12),d=s(11),j=s(6),u=(s(30),s(21)),h=(s(49),s(2)),b=function(e){var t=e.imageurl,s=e.name,a=e.id;return Object(h.jsxs)("div",{className:"user-card",children:[Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:t,alt:"images",className:"user-image"})}),Object(h.jsxs)("div",{className:"user-details-container",children:[Object(h.jsxs)("h2",{className:"user-heading",children:["User Name :",s]}),Object(h.jsxs)("p",{className:"user-details",children:["User Id :",a]})]})]})},m=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={users:[],loaded:!1},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(e){return e.json()})).then((function(t){e.setState({users:t,loaded:!0})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"section-container",children:[Object(h.jsx)("div",{class:"heading",children:Object(h.jsx)("h1",{style:{color:"black",fontSize:"40px",textDecoration:"dashed"},children:"Users Fetched"})}),Object(h.jsxs)("div",{className:"button-nav",children:[Object(h.jsx)("div",{className:"Shortlisted",children:Object(h.jsx)(u.a,{to:"/shortlisted",className:"Link1",children:"Shortlisted"})}),Object(h.jsx)("div",{className:"Rejected",children:Object(h.jsx)(u.a,{to:"/rejected",className:"Link2",children:"Rejected"})})]}),Object(h.jsx)("div",{className:"user-card-container",children:this.state.users.map((function(e){return Object(h.jsx)(u.a,{to:"/"+e.id,children:Object(h.jsx)(b,{imageurl:e.Image,name:e.name,id:e.id})})}))})]})}}]),s}(c.a.Component),O=(s(53),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={users:[],loaded:!1,ids:[]},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this,t="",s=[];localStorage.length>0&&void 0!==localStorage.rejected&&(t=localStorage.rejected),t.length>0&&(s=t.split(",")),fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(e){return e.json()})).then((function(t){e.setState({users:t,loaded:!0,ids:s})}))}},{key:"render",value:function(){var e=this;return 0===this.state.ids.length?Object(h.jsx)("div",{class:"heading",children:Object(h.jsx)("h1",{style:{color:"black",fontSize:"40px",textDecoration:"dashed"},children:"The Rejected List is Empty"})}):Object(h.jsxs)("div",{className:"section-container",children:[Object(h.jsx)("div",{class:"heading",children:Object(h.jsx)("h1",{style:{color:"black",fontSize:"40px",textDecoration:"dashed"},children:"Rejected LiSt"})}),Object(h.jsx)("div",{className:"user-card-container",children:this.state.ids.map((function(t){return e.state.users.map((function(e){if(t===e.id)return Object(h.jsx)(b,{imageurl:e.Image,name:e.name,id:e.id})}))}))})]})}}]),s}(c.a.Component)),x=(s(54),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={users:[],loaded:!1,ids:[]},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this,t="",s=[];localStorage.length>0&&void 0!==localStorage.ids&&(t=localStorage.ids),t.length>0&&(s=t.split(",")),fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(e){return e.json()})).then((function(t){e.setState({users:t,loaded:!0,ids:s})}))}},{key:"render",value:function(){var e=this;return 0===this.state.ids.length?Object(h.jsx)("div",{class:"heading",children:Object(h.jsx)("h1",{style:{color:"black",fontSize:"40px",textDecoration:"dashed"},children:"The Shortlisted List is Empty"})}):Object(h.jsxs)("div",{className:"section-container",children:[Object(h.jsx)("div",{class:"heading",children:Object(h.jsx)("h1",{style:{color:"black",fontSize:"40px",textDecoration:"dashed"},children:"Shortlisted LiSt"})}),Object(h.jsx)("div",{className:"user-card-container",children:this.state.ids.map((function(t){return e.state.users.map((function(e){if(t===e.id)return Object(h.jsx)(b,{imageurl:e.Image,name:e.name,id:e.id})}))}))})]})}}]),s}(c.a.Component)),f=s(22),g=(s(55),function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),i=Object(f.a)(n,2),r=i[0],o=i[1],l=Object(a.useState)(""),d=Object(f.a)(l,2),u=d[0],b=d[1];return Object(a.useEffect)((function(){fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(e){return e.json()})).then((function(e){var t=window.location.pathname,s=t.length;t=t.substring(1,s),c(e.find((function(e){return e.id===t})).name),o(e.find((function(e){return e.id===t})).Image),b(e.find((function(e){return e.id===t})).id)}))}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"Image",children:Object(h.jsx)("img",{src:r,class:"user-image",alt:" user"})}),Object(h.jsxs)("div",{className:"User-Details",children:[Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:["User Id: ",u]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:["User Name: ",s]})}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("div",{className:"b11",children:Object(h.jsx)("button",{className:"b1",onClick:function(){var e=window.location.pathname,t=e.length;if(e=e.substring(1,t),void 0===localStorage.rejected)void 0===localStorage.ids?(localStorage.setItem("rejected",e),alert("User is Now Rejected,You will be redirected in 1 sec!"),setTimeout((function(){return Object(h.jsx)(j.Redirect,{to:"/"})}),1e3)):localStorage.ids.includes(e)?alert("User is already in the shortlisted tab"):(localStorage.setItem("rejected",e),alert("User is Now Rejected,You will be redirected in 1 sec!"),setTimeout((function(){return Object(h.jsx)(j.Redirect,{to:"/"})}),1e3));else if(localStorage.rejected.includes(e))alert("Connaot reject the user again ");else if(void 0!==localStorage.ids)if(localStorage.ids.includes(e))alert("User is already in the shortlist tab");else{var s=localStorage.rejected;s=s+","+e,localStorage.setItem("rejected",s),alert("User is Now Rejected,You will be redirected in 1 sec!"),setTimeout((function(){return Object(h.jsx)(j.Redirect,{to:"/"})}),1e3)}else{var a=localStorage.rejected;a=a+","+e,localStorage.setItem("rejected",a),alert("User is Now Rejected,You will be redirected in 1 sec!"),setTimeout((function(){return Object(h.jsx)(j.Redirect,{to:"/"})}),1e3)}},children:"Reject"})}),Object(h.jsx)("div",{className:"b22",children:Object(h.jsx)("button",{className:"b2",onClick:function(){var e=window.location.pathname,t=e.length;if(e=e.substring(1,t),void 0===localStorage.ids)void 0===localStorage.rejected?localStorage.setItem("ids",e):localStorage.rejected.includes(e)&&alert("User is already in the rejection tab");else if(localStorage.ids.includes(e))alert("Connaot shortlist the user again ");else if(void 0!==localStorage.rejected)if(localStorage.rejected.includes(e))alert("User is already in the rejection tab");else{var s=localStorage.ids;s=s+","+e,localStorage.setItem("ids",s)}else{var a=localStorage.ids;a=a+","+e,localStorage.setItem("ids",a)}},children:"Shortlist"})})]})]})]})}),v=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)(j.BrowserRouter,{children:Object(h.jsxs)(j.Routes,{children:[Object(h.jsx)(j.Route,{path:"/",element:Object(h.jsx)(m,{}),exact:!0}),Object(h.jsx)(j.Route,{path:"/rejected",element:Object(h.jsx)(O,{}),exact:!0}),Object(h.jsx)(j.Route,{path:"/shortlisted",element:Object(h.jsx)(x,{}),exact:!0}),Object(h.jsx)(j.Route,{path:"/:id",element:Object(h.jsx)(g,{}),exact:!0})]})})}}]),s}(c.a.Component),p=v;i.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.5f9736e1.chunk.js.map