(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{13:function(e,t,r){e.exports={container:"Cards_container__34lGA",card:"Cards_card__qCxY-",infected:"Cards_infected__-QCru",recovered:"Cards_recovered__3e23N",deaths:"Cards_deaths__2jOSh",active:"Cards_active__3GSNl"}},14:function(e,t,r){e.exports={container:"Cards_container__2v4vQ",card:"Cards_card__vV8oa",infected:"Cards_infected__9kyeI",recovered:"Cards_recovered__obxj_",deaths:"Cards_deaths__3w7np",active:"Cards_active__1LZ_k"}},25:function(e,t,r){e.exports={container:"App_container__2llA9",image:"App_image__1Rg5l"}},26:function(e,t,r){e.exports={container:"Home_container__3o6GM"}},44:function(e,t,r){e.exports={formControl:"CountryPicker_formControl__2y1oO"}},78:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(36),o=r.n(c),s=r(6),i=r.n(s),u=r(11),d=r(37),l=r(38),f=r(46),j=r(45),p=r(96),x=r(100),b=r(97),h=r(98),v=r(13),m=r.n(v),O=r(17),y=r.n(O),_=r(18),g=r.n(_),C=r(2),N=function(e){var t=e.data,r=t.confirmed,n=t.recovered,a=t.deaths,c=e.country;if(!r)return"Loading...";var o=[{style:m.a.infected,text:"Confirmed",value:r.value,bottomText:"Number of infect cases of COVID-19"},{style:m.a.recovered,text:"Recovered",value:n.value,bottomText:"Number of recoveries from COVID-19"},{style:m.a.deaths,text:"Deaths",value:a.value,bottomText:"Number of deaths caused by COVID-19"}];return Object(C.jsx)("div",{className:m.a.container,children:Object(C.jsx)(p.a,{container:!0,spacing:3,justify:"center",children:o.map((function(e,t){return Object(C.jsx)(p.a,{item:!0,component:x.a,xs:12,md:2,className:g()(m.a.Card,e.style),style:{margin:"0px 23.675px",padding:"12px"},children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(h.a,{color:"textPrimary",gutterBottom:!0,children:Object(C.jsx)("b",{children:e.text})}),Object(C.jsx)(h.a,{variant:"h5",children:Object(C.jsx)(y.a,{start:0,end:e.value,duration:2,separator:","})}),Object(C.jsx)(h.a,{variant:"body2",children:e.bottomText}),Object(C.jsxs)(h.a,{color:"textPrimary",children:[" ",c," "]})]})},t)}))})})},k=r(21),w=r(101),I=r(99),T=r(44),D=r.n(T),S=r(22),V=r.n(S),A="https://covid19.mathdro.id/api",P=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,n,a,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=A,t&&(r="".concat(A,"/countries/").concat(t)),e.prev=2,e.next=5,V.a.get(r);case 5:return n=e.sent,a=n.data,c=a.confirmed,o=a.recovered,s=a.deaths,u=a.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(i.a.mark((function e(){var t,r,n,a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("".concat(A));case 3:return t=e.sent,r=t.data,n=r.confirmed,a=r.recovered,c=r.deaths,o=r.lastUpdate,e.abrupt("return",{confirmed:n,recovered:a,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("".concat(A,"/countries"));case 3:return t=e.sent,r=t.data.countries,e.abrupt("return",r.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),G=function(e){var t=e.handleCountryChange,r=Object(n.useState)([]),a=Object(k.a)(r,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(C.jsx)(w.a,{className:D.a.formControl,children:Object(C.jsxs)(I.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(C.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(C.jsx)("option",{value:e,children:e},t)}))]})})},L=r(14),R=r.n(L),U=function(e){var t=e.data,r=t.confirmed,a=(t.recovered,t.deaths,e.country),c=Object(n.useState)(""),o=Object(k.a)(c,2),s=o[0],d=o[1];if(Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,M();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!r)return"Loading...";var l=[{style:R.a.infected,text:"Confirmed",value:s.confirmed.value,bottomText:"Number of infect cases of COVID-19"},{style:R.a.recovered,text:"Recovered",value:s.recovered.value,bottomText:"Number of recoveries from COVID-19"},{style:R.a.deaths,text:"Deaths",value:s.deaths.value,bottomText:"Number of deaths caused by COVID-19"}];return Object(C.jsx)("div",{className:R.a.container,children:Object(C.jsx)(p.a,{container:!0,spacing:3,justify:"center",children:l.map((function(e,t){return Object(C.jsx)(p.a,{item:!0,component:x.a,xs:12,md:2,className:g()(R.a.Card,e.style),style:{margin:"0px 23.675px",padding:"12px"},children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(h.a,{color:"textPrimary",gutterBottom:!0,children:Object(C.jsx)("b",{children:e.text})}),Object(C.jsx)(h.a,{variant:"h5",children:Object(C.jsx)(y.a,{start:0,end:e.value,duration:2,separator:","})}),Object(C.jsx)(h.a,{variant:"body2",children:e.bottomText}),Object(C.jsxs)(h.a,{color:"textPrimary",children:[" ",a," "]})]})},t)}))})})},z=r(25),E=r.n(z),H=r.p+"static/media/image.e964f919.png",J=r(26),Q=r.n(J),q=function(){var e=function(e){e.target.style.color="#cccccc"};return Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)("div",{className:Q.a.container,children:Object(C.jsx)("h6",{style:{display:"block",marginBottom:"0px",fontSize:30,marginTop:"40px",textAlign:"center"}})}),Object(C.jsxs)("div",{className:Q.a.container,children:[Object(C.jsx)("br",{}),Object(C.jsx)("ul",{className:"list",style:{listStyleType:"none"},children:[{Title:"Home",ProfileLink:"https://debirizk.github.io/index.html",fontAwesomeIconName:"fa fa-home",OnMouseOverColor:"#4875B4"}].map((function(t,r){return Object(C.jsx)("li",{style:{display:"inline-block",marginRight:"17px"},children:Object(C.jsx)("a",{onMouseOver:function(e){e.target.style.color="".concat(t.OnMouseOverColor)},onMouseOut:e,href:t.ProfileLink,target:"_blank",rel:"noopener noreferrer",style:{color:"#cccccc",fontSize:"40px"},children:Object(C.jsx)("i",{className:"".concat(t.fontAwesomeIconName)})})},r)}))})]})]})},F=function(e){Object(f.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(d.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(r){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(r);case 2:n=t.sent,e.setState({data:n,country:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,r=e.country;return Object(C.jsxs)("div",{className:E.a.container,children:[Object(C.jsx)("img",{className:E.a.image,src:H,alt:"COVID-19"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(U,{data:t,country:"Global"}),Object(C.jsx)(G,{handleCountryChange:this.handleCountryChange}),Object(C.jsx)(N,{data:t,country:r}),Object(C.jsx)(q,{})]})}}]),r}(a.a.Component);o.a.render(Object(C.jsx)(F,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.02b1cb87.chunk.js.map