(this["webpackJsonpbruin-paint-admin"]=this["webpackJsonpbruin-paint-admin"]||[]).push([[0],{66:function(e,t,a){e.exports=a(81)},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(44),r=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(11),o={auth:{isAuthenticated:!1,succeed:Object(c.b)((function(e,t){return e.isAuthenticated=!0})),failed:Object(c.b)((function(e,t){return e.isAuthenticated=!1}))}},s=Object(c.c)(o),m=a(20),d=a(17),p=a(89),h="/",x="/alerts",u="/contacts",g="/documents",b="/equipment",v="/schedule",f="/login",E="/not-found",z={global:{colors:{icon:{0:"#",1:"6",2:"6",3:"6",4:"6",5:"6",6:"6",dark:"#f8f8f8",light:"#666666"},active:"rgba(221,221,221,0.5)",black:"#000000",border:{dark:"rgba(255,255,255,0.33)",light:"rgba(0,0,0,0.33)"},brand:"#7D4CDB",control:{dark:"accent-1",light:"brand"},focus:"none",placeholder:"#AAAAAA",selected:"brand",text:{dark:"#f8f8f8",light:"#444444"},white:"#FFFFFF","accent-1":"none","accent-2":"#FD6FFF","accent-3":"#81FCED","accent-4":"#FFCA58","dark-1":"#333333","dark-2":"#555555","dark-3":"#777777","dark-4":"#999999","dark-5":"#999999","dark-6":"#999999","light-1":"#F8F8F8","light-2":"#F2F2F2","light-3":"#EDEDED","light-4":"#DADADA","light-5":"#DADADA","light-6":"#DADADA","neutral-1":"#00873D","neutral-2":"#3D138D","neutral-3":"#00739D","neutral-4":"#A2423D","status-critical":"#FF4040","status-error":"#FF4040","status-warning":"#FFAA15","status-ok":"#00C781","status-unknown":"#CCCCCC","status-disabled":"#CCCCCC"},animation:{duration:"1s",jiggle:{duration:"0.1s"}},borderSize:{xsmall:"1px",small:"2px",medium:"4px",large:"12px",xlarge:"24px"},breakpoints:{small:{value:768,borderSize:{xsmall:"1px",small:"2px",medium:"4px",large:"6px",xlarge:"12px"},edgeSize:{none:"0px",hair:"1px",xxsmall:"2px",xsmall:"3px",small:"6px",medium:"12px",large:"24px",xlarge:"48px"},size:{xxsmall:"24px",xsmall:"48px",small:"96px",medium:"192px",large:"384px",xlarge:"768px",full:"100%"}},medium:{value:1536},large:{}},deviceBreakpoints:{phone:"small",tablet:"medium",computer:"large"},control:{border:{width:"1px",radius:"4px",color:"border"}},debounceDelay:300,drop:{background:"#ffffff",border:{width:"0px",radius:"0px"},shadowSize:"small",zIndex:"20"},edgeSize:{none:"0px",hair:"1px",xxsmall:"3px",xsmall:"6px",small:"12px",medium:"24px",large:"48px",xlarge:"96px",responsiveBreakpoint:"small"},elevation:{light:{none:"none",xsmall:"0px 1px 2px rgba(0, 0, 0, 0.20)",small:"0px 2px 4px rgba(0, 0, 0, 0.20)",medium:"0px 4px 8px rgba(0, 0, 0, 0.20)",large:"0px 8px 16px rgba(0, 0, 0, 0.20)",xlarge:"0px 12px 24px rgba(0, 0, 0, 0.20)"},dark:{none:"none",xsmall:"0px 2px 2px rgba(255, 255, 255, 0.40)",small:"0px 4px 4px rgba(255, 255, 255, 0.40)",medium:"0px 6px 8px rgba(255, 255, 255, 0.40)",large:"0px 8px 16px rgba(255, 255, 255, 0.40)",xlarge:"0px 12px 24px rgba(255, 255, 255, 0.40)"}},focus:{border:{color:"focus"}},font:{size:"18px",height:"24px",maxWidth:"432px"},hover:{background:{dark:{color:"active",opacity:"medium"},light:{color:"active",opacity:"medium"}},color:{dark:"white",light:"black"}},input:{padding:"12px",weight:600},opacity:{strong:.8,medium:.4,weak:.1},selected:{background:"selected",color:"white"},spacing:"24px",size:{xxsmall:"48px",xsmall:"96px",small:"192px",medium:"384px",large:"768px",xlarge:"1152px",xxlarge:"1536px",full:"100%"}},icon:{size:{small:"12px",medium:"24px",large:"48px",xlarge:"96px"}},accordion:{icons:{}},anchor:{textDecoration:"none",fontWeight:600,color:{dark:"accent-1",light:"brand"},hover:{textDecoration:"underline"}},box:{responsiveBreakpoint:"small"},button:{border:{width:"2px",radius:"18px"},primary:{},disabled:{opacity:.3},minWidth:"96px",maxWidth:"384px",padding:{vertical:"4px",horizontal:"22px"}},calendar:{small:{fontSize:"14px",lineHeight:1.375,daySize:"27.428571428571427px",slideDuration:"0.2s"},medium:{fontSize:"18px",lineHeight:1.45,daySize:"54.857142857142854px",slideDuration:"0.5s"},large:{fontSize:"30px",lineHeight:1.11,daySize:"109.71428571428571px",slideDuration:"0.8s"},icons:{small:{}}},carousel:{icons:{}},chart:{},checkBox:{border:{color:{dark:"rgba(255, 255, 255, 0.5)",light:"rgba(0, 0, 0, 0.15)"},width:"2px"},check:{radius:"4px",thickness:"4px"},icon:{},icons:{},hover:{border:{color:{dark:"white",light:"black"}}},size:"24px",toggle:{color:{dark:"#d9d9d9",light:"#d9d9d9"},radius:"24px",size:"48px",knob:{}}},clock:{analog:{hour:{color:{dark:"light-2",light:"dark-3"},width:"8px",size:"24px",shape:"round"},minute:{color:{dark:"light-4",light:"dark-3"},width:"4px",size:"12px",shape:"round"},second:{color:{dark:"accent-1",light:"accent-1"},width:"3px",size:"9px",shape:"round"},size:{small:"72px",medium:"96px",large:"144px",xlarge:"216px",huge:"288px"}},digital:{text:{xsmall:{size:"10px",height:1.5},small:{size:"14px",height:1.43},medium:{size:"18px",height:1.375},large:{size:"22px",height:1.167},xlarge:{size:"26px",height:1.1875},xxlarge:{size:"34px",height:1.125}}}},collapsible:{minSpeed:200,baseline:500},dataTable:{header:{},groupHeader:{border:{side:"bottom",size:"xsmall"},fill:"vertical",pad:{horizontal:"small",vertical:"xsmall"},background:{dark:"dark-2",light:"light-2"}},icons:{},resize:{border:{side:"right",color:"border"}},primary:{weight:"bold"}},diagram:{line:{color:"accent-1"}},formField:{border:{color:"border",position:"inner",side:"bottom",error:{color:{dark:"white",light:"status-critical"}}},content:{pad:{horizontal:"small",bottom:"small"}},error:{margin:{vertical:"xsmall",horizontal:"small"},color:{dark:"status-critical",light:"status-critical"}},help:{margin:{left:"small"},color:{dark:"dark-3",light:"dark-3"}},label:{margin:{vertical:"xsmall",horizontal:"small"}},margin:{bottom:"small"}},grommet:{},heading:{font:{},level:{1:{font:{},small:{size:"34px",height:"40px",maxWidth:"816px"},medium:{size:"50px",height:"56px",maxWidth:"1200px"},large:{size:"82px",height:"88px",maxWidth:"1968px"},xlarge:{size:"114px",height:"120px",maxWidth:"2736px"}},2:{font:{},small:{size:"26px",height:"32px",maxWidth:"624px"},medium:{size:"34px",height:"40px",maxWidth:"816px"},large:{size:"50px",height:"56px",maxWidth:"1200px"},xlarge:{size:"66px",height:"72px",maxWidth:"1584px"}},3:{font:{},small:{size:"22px",height:"28px",maxWidth:"528px"},medium:{size:"26px",height:"32px",maxWidth:"624px"},large:{size:"34px",height:"40px",maxWidth:"816px"},xlarge:{size:"42px",height:"48px",maxWidth:"1008px"}},4:{font:{},small:{size:"18px",height:"24px",maxWidth:"432px"},medium:{size:"18px",height:"24px",maxWidth:"432px"},large:{size:"18px",height:"24px",maxWidth:"432px"},xlarge:{size:"18px",height:"24px",maxWidth:"432px"}},5:{font:{},small:{size:"16px",height:"22px",maxWidth:"384px"},medium:{size:"16px",height:"22px",maxWidth:"384px"},large:{size:"16px",height:"22px",maxWidth:"384px"},xlarge:{size:"16px",height:"22px",maxWidth:"384px"}},6:{font:{},small:{size:"14px",height:"20px",maxWidth:"336px"},medium:{size:"14px",height:"20px",maxWidth:"336px"},large:{size:"14px",height:"20px",maxWidth:"336px"},xlarge:{size:"14px",height:"20px",maxWidth:"336px"}}},responsiveBreakpoint:"small",weight:600},layer:{background:"white",border:{radius:"4px"},container:{zIndex:"15"},overlay:{background:"rgba(0, 0, 0, 0.5)"},responsiveBreakpoint:"small",zIndex:"10"},menu:{icons:{}},meter:{color:"accent-1"},paragraph:{small:{size:"14px",height:"20px",maxWidth:"336px"},medium:{size:"18px",height:"24px",maxWidth:"432px"},large:{size:"22px",height:"28px",maxWidth:"528px"},xlarge:{size:"26px",height:"32px",maxWidth:"624px"},xxlarge:{size:"34px",height:"40px",maxWidth:"816px"}},radioButton:{border:{color:{dark:"rgba(255, 255, 255, 0.5)",light:"rgba(0, 0, 0, 0.15)"},width:"2px"},check:{radius:"100%"},hover:{border:{color:{dark:"white",light:"black"}}},icon:{},icons:{},gap:"small",size:"24px"},rangeInput:{track:{height:"4px",color:[null,";"]},thumb:{}},rangeSelector:{background:{invert:{color:"light-4"}}},select:{container:{},control:{},icons:{},options:{box:{align:"start",pad:"small"},text:{margin:"none"}},step:20},tab:{active:{color:"text"},border:{side:"bottom",size:"small",color:{dark:"accent-1",light:"brand"},active:{color:{dark:"white",light:"black"}},hover:{color:{dark:"white",light:"black"}}},color:"control",hover:{color:{dark:"white",light:"black"}},margin:{vertical:"xxsmall",horizontal:"small"},pad:{bottom:"xsmall"}},tabs:{header:{},panel:{}},table:{header:{align:"start",pad:{horizontal:"small",vertical:"xsmall"},border:"bottom",verticalAlign:"bottom",fill:"vertical"},body:{align:"start",pad:{horizontal:"small",vertical:"xsmall"}},footer:{align:"start",pad:{horizontal:"small",vertical:"xsmall"},border:"top",verticalAlign:"top",fill:"vertical"}},text:{xsmall:{size:"12px",height:"18px",maxWidth:"288px"},small:{size:"14px",height:"20px",maxWidth:"336px"},medium:{size:"18px",height:"24px",maxWidth:"432px"},large:{size:"22px",height:"28px",maxWidth:"528px"},xlarge:{size:"26px",height:"32px",maxWidth:"624px"},xxlarge:{size:"34px",height:"40px",maxWidth:"816px"}},video:{captions:{background:"rgba(0, 0, 0, 0.7)"},icons:{},scrubber:{color:"light-4"}},worldMap:{color:"light-3",continent:{active:"8px",base:"6px"},hover:{color:"light-4"},place:{active:"20px",base:"8px"}}},k=a(9),A=function(e){var t=e.children,a=Object(k.a)(e,["children"]),i=Object(c.e)((function(e){return e.auth.isAuthenticated}));return n.a.createElement(m.b,Object.assign({},a,{render:function(e){var a=e.location;return i?t:n.a.createElement(m.a,{to:{pathname:f,state:{from:a}}})}}))},y={error404:{display:"flex",flexDirection:"column",alignItems:"center"},title:{},goBack:{}},w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:y.error404},n.a.createElement("div",null,n.a.createElement("h1",{className:"f-s-40 m-b-20",style:y.title},"404: Page not found.")),n.a.createElement("div",null,n.a.createElement("span",null,"Go back: "),n.a.createElement("span",null,n.a.createElement("a",{style:y.goBack,href:"/"},"Home Page")))))},j=a(83),W="transparent",F="#D82828",S="#2C2C2C",O="#7F7F7F",D="#EFEFEF",C="#FFFFFF",H=a(12),N={main:{backgroundColor:D,fontWeight:"normal",borderRadius:11,borderWidth:0,outline:0},icon:{position:"absolute",marginLeft:15,marginTop:11}},I=function e(t){var a=t.id,i=t.style,l=t.type,r=t.leftIcon,c=Object(k.a)(t,["id","style","type","leftIcon"]);return n.a.createElement(n.a.Fragment,null,r&&n.a.createElement("div",{style:N.icon},r),n.a.createElement("input",Object.assign({},c,{id:a,type:l,style:Object(H.a)({},e.defaultProps.style,{},N.main,{},i)})))};I.defaultProps={style:{width:328,height:48,paddingLeft:20,paddingRight:20},type:"text"};var B=I,M=function(e){var t=e.children,a=e.className,i=e.to,l=Object(k.a)(e,["children","className","to"]);return n.a.createElement(d.b,Object.assign({to:i,className:a+" bold "},l),t)},V=a(90),L={borderRadius:16},q=function(e){var t=e.style,a=e.type,i=Object(k.a)(e,["style","type"]);return n.a.createElement(V.a,Object.assign({},i,{focusIndicator:!1,primary:!0,type:a,color:F,style:Object(H.a)({},t,{},L),onClick:function(){}}))};q.defaultProps={type:"button"};var R=q,P={main:{backgroundColor:C,color:S,borderRadius:9,padding:"53px 56px 28px 56px"},button:{width:"100%",height:48,fontSize:18},question:{color:O}},T=function(){return n.a.createElement(j.a,{direction:"column",style:P.main},n.a.createElement("div",{className:"f-s-32 m-b-30 bold"},"Log In"),n.a.createElement(B,{id:"email",type:"email",placeholder:"Email",className:"m-b-20 center"}),n.a.createElement(B,{id:"pwd",type:"password",placeholder:"Password"}),n.a.createElement(M,{to:"/forgot-password",className:"m-t-16 text-end"},"Forgot Password?"),n.a.createElement("div",{className:"m-t-57 bold"},n.a.createElement(R,{type:"submit",style:P.button,label:"Continue"})),n.a.createElement("div",{className:"m-t-37 text-center f-s-16",style:P.question},"Don't have an account?"),n.a.createElement(M,{className:"text-center m-t-6 f-s-16",to:"/signup"},"Sign Up"))},J=function(){return n.a.createElement(T,null)},U=function(){return n.a.createElement(n.a.Fragment,null)},G=a(88),$=a(87),K="0.5px solid rgba(0,0,0,0.2)",Q={main:{width:"100%",height:"100%"},img:{borderLeft:K,height:80,width:80,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}},X=function(e){var t=e.name;return n.a.createElement(j.a,{style:Q.img},n.a.createElement(G.a,{src:"/images/".concat(t,".svg")}))},Y=function(e){var t=e.style,a=(e.children,e.isAuth),i=Object(k.a)(e,["style","children","isAuth"]);return n.a.createElement("div",{style:Q.main},n.a.createElement($.a,Object.assign({style:Object(H.a)({},t,{height:"100%",paddingRight:0})},i,{background:W,pad:"small"}),n.a.createElement("div",{className:"m-l-32"},n.a.createElement(G.a,{fit:"cover",src:"/images/logo.svg"})),a&&n.a.createElement(j.a,{direction:"row"},n.a.createElement(X,{name:"search"}),n.a.createElement(X,{name:"alerts"}),n.a.createElement(X,{name:"profile"}))))},Z=a(13),_={main:{height:120,borderBottom:K,direction:"column",alignItems:"center",justifyContent:"center",borderLeft:"3px solid ".concat(F),cursor:"pointer",userSelect:"none"},title:{color:O}},ee=function(e){var t=e.name,a=e.isActive,i=e.children,l=a?S:O,r=a?"bold":"";return _.title=Object(H.a)({},_.title,{color:l}),_.main.borderLeft=a?"3px solid ".concat(F):"none",n.a.createElement(j.a,{style:_.main},n.a.createElement("div",null,i),n.a.createElement("div",{className:r,style:_.title},t))},te=[{id:0,name:"Schedule",svg:"schedule",isActive:!1,route:v},{id:1,name:"Equipment",svg:"equipment",isActive:!1,route:b},{id:2,name:"Contacts",svg:"contacts",isActive:!1,route:u},{id:3,name:"Alerts",svg:"alertsSide",isActive:!1,route:x},{id:4,name:"Documents",svg:"document",isActive:!1,route:g}];var ae=function(e){return i.createElement("svg",Object.assign({width:24,height:25,fill:"none"},e),i.createElement("path",{d:"M17 11.07a3.987 3.987 0 01-2.828-1.179A4.038 4.038 0 0113 7.045c0-1.068.421-2.092 1.172-2.847A3.987 3.987 0 0117 3.02c1.06 0 2.078.424 2.828 1.18A4.038 4.038 0 0121 7.044a4.038 4.038 0 01-1.172 2.846A3.987 3.987 0 0117 11.071zM5 5.032h6v2.013H5v12.077h12v-6.039h2v6.039a2.02 2.02 0 01-.586 1.423c-.375.377-.884.59-1.414.59H5c-.53 0-1.04-.213-1.414-.59A2.02 2.02 0 013 19.122V7.045c0-.534.21-1.046.586-1.423.375-.378.884-.59 1.414-.59z"}))};var ie=function(e){return i.createElement("svg",Object.assign({width:24,height:25,fill:"none"},e),i.createElement("path",{d:"M18.778 2.013H6.556c-1.838 0-3.334 1.505-3.334 3.354v1.119h-1.11c-.296 0-.578.117-.787.327a1.122 1.122 0 000 1.582c.209.21.491.327.786.327h1.111v2.237h-1.11c-.296 0-.578.117-.787.327a1.122 1.122 0 000 1.582c.209.21.491.327.786.327h1.111v2.236h-1.11c-.296 0-.578.118-.787.328a1.122 1.122 0 000 1.581c.209.21.491.328.786.328h1.111v1.118c0 1.85 1.496 3.355 3.334 3.355h12.222c1.838 0 3.333-1.505 3.333-3.355V5.367c0-1.85-1.495-3.354-3.333-3.354zM5.444 5.367c0-.616.5-1.118 1.112-1.118v2.237H5.444V5.367zm0 3.355h1.112v2.237H5.444V8.722zm0 4.473h1.112v2.236H5.444v-2.236zm0 5.591v-1.118h1.112v2.236a1.117 1.117 0 01-1.112-1.118zm14.445 0c0 .616-.499 1.118-1.111 1.118H7.667V4.25h11.11c.613 0 1.112.502 1.112 1.118v13.42z"}),i.createElement("path",{d:"M13.222 12.636a2.23 2.23 0 002.222-2.237 2.23 2.23 0 00-2.222-2.236A2.23 2.23 0 0011 10.399a2.23 2.23 0 002.222 2.237zM13.222 13.593c-1.735 0-2.778.8-2.778 1.598 0 .4 1.043.8 2.778.8 1.629 0 2.778-.4 2.778-.8 0-.798-1.089-1.598-2.778-1.598z"}))};var ne=function(e){return i.createElement("svg",Object.assign({width:24,height:25,fill:"none"},e),i.createElement("path",{d:"M19.508 9.316a.955.955 0 00-.186-.28l-5.7-5.737a.947.947 0 00-.279-.187c-.028-.013-.059-.021-.09-.032a.936.936 0 00-.245-.048c-.02-.002-.038-.013-.058-.013H6.3c-1.048 0-1.9.858-1.9 1.912V20.23c0 1.054.852 1.912 1.9 1.912h11.4c1.048 0 1.9-.858 1.9-1.912V9.712c0-.02-.01-.039-.012-.06a.917.917 0 00-.049-.247c-.01-.03-.018-.06-.031-.09zm-3.151-.56H13.9V6.283l2.457 2.473zM6.3 20.229V4.93H12v4.78c0 .254.1.498.278.677.178.18.42.28.672.28h4.75l.002 9.56H6.3z"}),i.createElement("path",{d:"M8.2 12.58h7.6v1.912H8.2V12.58zm0 3.824h7.6v1.912H8.2v-1.912zm0-7.648h1.9v1.912H8.2V8.756z"}))};var le=function(e){return i.createElement("svg",Object.assign({width:24,height:25,fill:"none"},e),i.createElement("path",{d:"M18.111 3.02H7.722c-1.042 0-1.889.909-1.889 2.027v3.041c0 1.119.847 2.028 1.89 2.028H18.11c1.042 0 1.889-.91 1.889-2.028V5.047c0-1.118-.847-2.028-1.889-2.028zM7.722 8.087V5.047h10.389l.002 3.041H7.723z"}),i.createElement("path",{d:"M13.389 16.2v-2.028c0-1.119-.847-2.028-1.889-2.028H4.889V6.06C3.847 6.06 3 6.97 3 8.088v4.056c0 1.118.847 2.027 1.889 2.027H11.5V16.2c-.25 0-.49.107-.668.297-.177.19-.276.448-.276.717v5.07c0 .268.1.526.276.716.177.19.417.297.668.297h1.889c.25 0 .49-.107.668-.297.177-.19.276-.448.276-.717v-5.069c0-.269-.1-.527-.276-.717a.913.913 0 00-.668-.297z"}))};var re=function(e){var t=e.fill,a=Object(k.a)(e,["fill"]);return i.createElement("svg",Object.assign({width:20,height:22,fill:t},a),i.createElement("path",{d:"M8.331 17.804l-4.117-4.12 1.573-1.574 2.549 2.553 5.88-5.888 1.573 1.574-7.458 7.455zM20 4.456v14.46a2.226 2.226 0 01-2.222 2.225H2.222A2.22 2.22 0 010 18.916V4.456A2.226 2.226 0 012.222 2.23h1.111V.006h2.223v2.225h8.888V.006h2.223v2.225h1.11A2.22 2.22 0 0120 4.456zM17.778 6.68H2.222v12.236h15.556V6.68z"}))},ce={list:{listStyleType:"none",margin:0,padding:0,borderRight:K}},oe=function(e){var t=e.route;return n.a.createElement("ul",{style:ce.list},Object(Z.a)(te).map((function(e){var a=e.route===t;return n.a.createElement("li",{key:e.id},n.a.createElement(d.b,{to:e.route},n.a.createElement(ee,{name:e.name,isActive:a,icon:e.svg},function(e,t){var a=e?F:O;switch(t){case"schedule":return n.a.createElement(re,{fill:a});case"equipment":return n.a.createElement(le,{fill:a});case"contacts":return n.a.createElement(ie,{fill:a});case"document":return n.a.createElement(ne,{fill:a});default:return n.a.createElement(ae,{fill:a})}}(a,e.svg))))})))},se="5px 4px 14px rgba(0, 0, 0, 0.04)",me={main:{zIndex:999,display:"flex",flexDirection:"column",minHeight:"100vh"},menu:{display:"flex",alignItems:"center",background:C,height:80,boxShadow:se,borderBottom:K},content:{display:"flex",flexDirection:"rows"},pageSpace:{display:"flex",alignItems:"center",justifyContent:"center",background:D,height:"calc(100vh - 80px)",width:"100%"},sideMenu:{background:C,minWidth:120,boxShadow:se}},de=function(e){var t=e.children,a=e.location,i=a.pathname===f||a.pathname===E;return n.a.createElement("div",{style:me.main},n.a.createElement("div",{style:me.menu},n.a.createElement(Y,{isAuth:!i})),n.a.createElement("div",{style:me.content},!i&&n.a.createElement("div",{style:me.sideMenu},n.a.createElement(oe,{route:a.pathname})),n.a.createElement("div",{style:me.pageSpace},t)))},pe={main:{height:"100%",width:"100%"},header:{backgroundColor:C,padding:"0 31.5px 28px 32px",height:160}},he=function(e){var t=e.children,a=e.header;return n.a.createElement("div",{style:pe.main},n.a.createElement("div",{style:pe.header},a),n.a.createElement("div",null,t))},xe={cursor:"pointer",userSelect:"none"},ue={span:Object(H.a)({},xe,{color:O}),spanActive:Object(H.a)({},xe,{fontWeight:700,borderBottom:"3px solid ".concat(F)})},ge=function(e){var t=e.actions,a=e.onSelectAction;return n.a.createElement("div",null,t&&t.map((function(e){return n.a.createElement("span",{key:e.id,className:"m-r-19 f-s-16 p-b-4",style:e.isActive?ue.spanActive:ue.span,onClick:function(){return a(e.id)}},e.name)})))};var be=function(e){return i.createElement("svg",Object.assign({width:17,height:17,fill:"#000000"},e),i.createElement("path",{d:"M7.27 14.54c1.613-.001 3.18-.541 4.45-1.535L15.715 17 17 15.715l-3.995-3.995a7.225 7.225 0 001.535-4.45C14.54 3.26 11.279 0 7.27 0 3.262 0 0 3.261 0 7.27c0 4.008 3.262 7.27 7.27 7.27zm0-12.723a5.458 5.458 0 015.453 5.453 5.458 5.458 0 01-5.453 5.452A5.458 5.458 0 011.818 7.27 5.458 5.458 0 017.27 1.817z"}))},ve={main:{height:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},button:{width:176.8,height:40,borderRadius:16,fontSize:18,marginBottom:4},input:{width:280,height:40,marginBottom:4,marginRight:16,textIndent:31}},fe=function(e){var t=e.title,a=e.quickAction,i=e.placeholder,l=e.actionName,r=e.onSelectAction;return n.a.createElement("div",{style:ve.main},n.a.createElement(j.a,null,n.a.createElement("div",{className:"f-s-40 bold"},t),n.a.createElement("div",{className:"m-t-19"},n.a.createElement(ge,{actions:a,onSelectAction:r}))),n.a.createElement(j.a,{direction:"row"},n.a.createElement(B,{id:"input-filter",placeholder:i,leftIcon:n.a.createElement(be,null),style:ve.input}),n.a.createElement(R,{label:l,style:ve.button})))},Ee=function(){return n.a.createElement(he,{header:n.a.createElement(fe,{actionName:"Add Alert",placeholder:"Enter Location",title:"Alerts"})},"Alerts!!!")},ze=a(19),ke=[{id:0,name:"All",isActive:!0},{id:1,name:"Send an Invite",isActive:!1}],Ae=function(){var e=Object(i.useState)(ke),t=Object(ze.a)(e,2),a=t[0],l=t[1];return n.a.createElement(he,{header:n.a.createElement(fe,{actionName:"Invite Contact",placeholder:"Enter Name, Location, Etc...",quickAction:a,onSelectAction:function(e){var t=Object(Z.a)(a).map((function(t){return t.isActive=t.id===e,t}));l(t)},title:"Schedule"})},"Contacts!!!")},ye=[{id:0,name:"In-App Storage",isActive:!0},{id:1,name:"In-Registration Flow",isActive:!1}],we=function(){var e=Object(i.useState)(ye),t=Object(ze.a)(e,2),a=t[0],l=t[1];return n.a.createElement(he,{header:n.a.createElement(fe,{actionName:"Add Source",placeholder:"Enter Location",quickAction:a,onSelectAction:function(e){var t=Object(Z.a)(a).map((function(t){return t.isActive=t.id===e,t}));l(t)},title:"Documents"})},"Documents!!!")},je=[{id:0,name:"All",isActive:!0},{id:1,name:"Free",isActive:!1},{id:2,name:"Busy",isActive:!1},{id:3,name:"Under Repair",isActive:!1}],We=function(){var e=Object(i.useState)(je),t=Object(ze.a)(e,2),a=t[0],l=t[1];return n.a.createElement(he,{header:n.a.createElement(fe,{actionName:"Add Equipment",placeholder:"Enter Name, Location, Type...",quickAction:a,onSelectAction:function(e){var t=Object(Z.a)(a).map((function(t){return t.isActive=t.id===e,t}));l(t)},title:"Schedule"})},"Equipment!!!")},Fe=[{id:0,name:"By Location",isActive:!0},{id:1,name:"By People",isActive:!1}],Se=function(){var e=Object(i.useState)(Fe),t=Object(ze.a)(e,2),a=t[0],l=t[1];return n.a.createElement(he,{header:n.a.createElement(fe,{actionName:"Add Location",placeholder:"Enter Name, Location, Type...",quickAction:a,onSelectAction:function(e){var t=Object(Z.a)(a).map((function(t){return t.isActive=t.id===e,t}));l(t)},title:"Schedule"})},"Schedule!!!")},Oe=Object(m.g)((function(e){return n.a.createElement(de,e)})),De=function(){return Object(c.d)((function(e){return e.auth.succeed}))(),n.a.createElement(p.a,{theme:z},n.a.createElement(d.a,null,n.a.createElement(Oe,null,n.a.createElement(m.d,null,n.a.createElement(A,{exact:!0,path:h},n.a.createElement(U,null)),n.a.createElement(A,{path:x},n.a.createElement(Ee,null)),n.a.createElement(A,{path:u},n.a.createElement(Ae,null)),n.a.createElement(A,{path:g},n.a.createElement(we,null)),n.a.createElement(A,{path:b},n.a.createElement(We,null)),n.a.createElement(A,{path:v},n.a.createElement(Se,null)),n.a.createElement(m.b,{path:f},n.a.createElement(J,null)),n.a.createElement(m.b,{path:E},n.a.createElement(w,null)),n.a.createElement(m.a,{to:E},n.a.createElement(w,null))))))};a(79),a(80);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.a,{store:s},n.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.463285f6.chunk.js.map