(this["webpackJsonpbruin-paint-admin"]=this["webpackJsonpbruin-paint-admin"]||[]).push([[0],{72:function(e,t,a){e.exports=a(87)},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),n=a(50),r=a.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(9),o={auth:{isAuthenticated:!1,succeed:Object(c.b)((function(e,t){return e.isAuthenticated=!0})),failed:Object(c.b)((function(e,t){return e.isAuthenticated=!1}))}},m=Object(c.c)(o),s=a(17),d=a(14),h=a(98),p="/",x="/alerts",u="/contacts",g="/documents",b="/equipment",v="/schedule",f="/login",E="/not-found",z={global:{colors:{icon:{0:"#",1:"6",2:"6",3:"6",4:"6",5:"6",6:"6",dark:"#f8f8f8",light:"#666666"},active:"rgba(221,221,221,0.5)",black:"#000000",border:{dark:"rgba(255,255,255,0.33)",light:"rgba(0,0,0,0.33)"},brand:"#7D4CDB",control:{dark:"accent-1",light:"brand"},focus:"none",placeholder:"#AAAAAA",selected:"brand",text:{dark:"#f8f8f8",light:"#444444"},white:"#FFFFFF","accent-1":"none","accent-2":"#FD6FFF","accent-3":"#81FCED","accent-4":"#FFCA58","dark-1":"#333333","dark-2":"#555555","dark-3":"#777777","dark-4":"#999999","dark-5":"#999999","dark-6":"#999999","light-1":"#F8F8F8","light-2":"#F2F2F2","light-3":"#EDEDED","light-4":"#DADADA","light-5":"#DADADA","light-6":"#DADADA","neutral-1":"#00873D","neutral-2":"#3D138D","neutral-3":"#00739D","neutral-4":"#A2423D","status-critical":"#FF4040","status-error":"#FF4040","status-warning":"#FFAA15","status-ok":"#00C781","status-unknown":"#CCCCCC","status-disabled":"#CCCCCC"},animation:{duration:"1s",jiggle:{duration:"0.1s"}},borderSize:{xsmall:"1px",small:"2px",medium:"4px",large:"12px",xlarge:"24px"},breakpoints:{small:{value:768,borderSize:{xsmall:"1px",small:"2px",medium:"4px",large:"6px",xlarge:"12px"},edgeSize:{none:"0px",hair:"1px",xxsmall:"2px",xsmall:"3px",small:"6px",medium:"12px",large:"24px",xlarge:"48px"},size:{xxsmall:"24px",xsmall:"48px",small:"96px",medium:"192px",large:"384px",xlarge:"768px",full:"100%"}},medium:{value:1536},large:{}},deviceBreakpoints:{phone:"small",tablet:"medium",computer:"large"},control:{border:{width:"1px",radius:"4px",color:"border"}},debounceDelay:300,drop:{background:"#ffffff",border:{width:"0px",radius:"0px"},shadowSize:"small",zIndex:"20"},edgeSize:{none:"0px",hair:"1px",xxsmall:"3px",xsmall:"6px",small:"12px",medium:"24px",large:"48px",xlarge:"96px",responsiveBreakpoint:"small"},elevation:{light:{none:"none",xsmall:"0px 1px 2px rgba(0, 0, 0, 0.20)",small:"0px 2px 4px rgba(0, 0, 0, 0.20)",medium:"0px 4px 8px rgba(0, 0, 0, 0.20)",large:"0px 8px 16px rgba(0, 0, 0, 0.20)",xlarge:"0px 12px 24px rgba(0, 0, 0, 0.20)"},dark:{none:"none",xsmall:"0px 2px 2px rgba(255, 255, 255, 0.40)",small:"0px 4px 4px rgba(255, 255, 255, 0.40)",medium:"0px 6px 8px rgba(255, 255, 255, 0.40)",large:"0px 8px 16px rgba(255, 255, 255, 0.40)",xlarge:"0px 12px 24px rgba(255, 255, 255, 0.40)"}},focus:{border:{color:"focus"}},font:{size:"18px",height:"24px",maxWidth:"432px"},hover:{background:{dark:{color:"active",opacity:"medium"},light:{color:"active",opacity:"medium"}},color:{dark:"white",light:"black"}},input:{padding:"12px",weight:600},opacity:{strong:.8,medium:.4,weak:.1},selected:{background:"selected",color:"white"},spacing:"24px",size:{xxsmall:"48px",xsmall:"96px",small:"192px",medium:"384px",large:"768px",xlarge:"1152px",xxlarge:"1536px",full:"100%"}},icon:{size:{small:"12px",medium:"24px",large:"48px",xlarge:"96px"}},accordion:{icons:{}},anchor:{textDecoration:"none",fontWeight:600,color:{dark:"accent-1",light:"brand"},hover:{textDecoration:"underline"}},box:{responsiveBreakpoint:"small"},button:{border:{width:"2px",radius:"18px"},primary:{},disabled:{opacity:.3},minWidth:"96px",maxWidth:"384px",padding:{vertical:"4px",horizontal:"22px"}},calendar:{small:{fontSize:"14px",lineHeight:1.375,daySize:"27.428571428571427px",slideDuration:"0.2s"},medium:{fontSize:"18px",lineHeight:1.45,daySize:"54.857142857142854px",slideDuration:"0.5s"},large:{fontSize:"30px",lineHeight:1.11,daySize:"109.71428571428571px",slideDuration:"0.8s"},icons:{small:{}}},carousel:{icons:{}},chart:{},checkBox:{border:{color:{dark:"rgba(255, 255, 255, 0.5)",light:"rgba(0, 0, 0, 0.15)"},width:"2px"},check:{radius:"4px",thickness:"4px"},icon:{},icons:{},hover:{border:{color:{dark:"white",light:"black"}}},size:"24px",toggle:{color:{dark:"#d9d9d9",light:"#d9d9d9"},radius:"24px",size:"48px",knob:{}}},clock:{analog:{hour:{color:{dark:"light-2",light:"dark-3"},width:"8px",size:"24px",shape:"round"},minute:{color:{dark:"light-4",light:"dark-3"},width:"4px",size:"12px",shape:"round"},second:{color:{dark:"accent-1",light:"accent-1"},width:"3px",size:"9px",shape:"round"},size:{small:"72px",medium:"96px",large:"144px",xlarge:"216px",huge:"288px"}},digital:{text:{xsmall:{size:"10px",height:1.5},small:{size:"14px",height:1.43},medium:{size:"18px",height:1.375},large:{size:"22px",height:1.167},xlarge:{size:"26px",height:1.1875},xxlarge:{size:"34px",height:1.125}}}},collapsible:{minSpeed:200,baseline:500},dataTable:{header:{},groupHeader:{border:{side:"bottom",size:"xsmall"},fill:"vertical",pad:{horizontal:"small",vertical:"xsmall"},background:{dark:"dark-2",light:"light-2"}},icons:{},resize:{border:{side:"right",color:"border"}},primary:{weight:"bold"}},diagram:{line:{color:"accent-1"}},formField:{border:{color:"border",position:"inner",side:"bottom",error:{color:{dark:"white",light:"status-critical"}}},content:{pad:{horizontal:"small",bottom:"small"}},error:{margin:{vertical:"xsmall",horizontal:"small"},color:{dark:"status-critical",light:"status-critical"}},help:{margin:{left:"small"},color:{dark:"dark-3",light:"dark-3"}},label:{margin:{vertical:"xsmall",horizontal:"small"}},margin:{bottom:"small"}},grommet:{},heading:{font:{},level:{1:{font:{},small:{size:"34px",height:"40px",maxWidth:"816px"},medium:{size:"50px",height:"56px",maxWidth:"1200px"},large:{size:"82px",height:"88px",maxWidth:"1968px"},xlarge:{size:"114px",height:"120px",maxWidth:"2736px"}},2:{font:{},small:{size:"26px",height:"32px",maxWidth:"624px"},medium:{size:"34px",height:"40px",maxWidth:"816px"},large:{size:"50px",height:"56px",maxWidth:"1200px"},xlarge:{size:"66px",height:"72px",maxWidth:"1584px"}},3:{font:{},small:{size:"22px",height:"28px",maxWidth:"528px"},medium:{size:"26px",height:"32px",maxWidth:"624px"},large:{size:"34px",height:"40px",maxWidth:"816px"},xlarge:{size:"42px",height:"48px",maxWidth:"1008px"}},4:{font:{},small:{size:"18px",height:"24px",maxWidth:"432px"},medium:{size:"18px",height:"24px",maxWidth:"432px"},large:{size:"18px",height:"24px",maxWidth:"432px"},xlarge:{size:"18px",height:"24px",maxWidth:"432px"}},5:{font:{},small:{size:"16px",height:"22px",maxWidth:"384px"},medium:{size:"16px",height:"22px",maxWidth:"384px"},large:{size:"16px",height:"22px",maxWidth:"384px"},xlarge:{size:"16px",height:"22px",maxWidth:"384px"}},6:{font:{},small:{size:"14px",height:"20px",maxWidth:"336px"},medium:{size:"14px",height:"20px",maxWidth:"336px"},large:{size:"14px",height:"20px",maxWidth:"336px"},xlarge:{size:"14px",height:"20px",maxWidth:"336px"}}},responsiveBreakpoint:"small",weight:600},layer:{background:"white",border:{radius:"4px"},container:{zIndex:"15"},overlay:{background:"rgba(0, 0, 0, 0.5)"},responsiveBreakpoint:"small",zIndex:"10"},menu:{icons:{}},meter:{color:"accent-1"},paragraph:{small:{size:"14px",height:"20px",maxWidth:"336px"},medium:{size:"18px",height:"24px",maxWidth:"432px"},large:{size:"22px",height:"28px",maxWidth:"528px"},xlarge:{size:"26px",height:"32px",maxWidth:"624px"},xxlarge:{size:"34px",height:"40px",maxWidth:"816px"}},radioButton:{border:{color:{dark:"rgba(255, 255, 255, 0.5)",light:"rgba(0, 0, 0, 0.15)"},width:"2px"},check:{radius:"100%"},hover:{border:{color:{dark:"white",light:"black"}}},icon:{},icons:{},gap:"small",size:"24px"},rangeInput:{track:{height:"4px",color:[null,";"]},thumb:{}},rangeSelector:{background:{invert:{color:"light-4"}}},select:{container:{},control:{},icons:{},options:{box:{align:"start",pad:"small"},text:{margin:"none"}},step:20},tab:{active:{color:"text"},border:{side:"bottom",size:"small",color:{dark:"accent-1",light:"brand"},active:{color:{dark:"white",light:"black"}},hover:{color:{dark:"white",light:"black"}}},color:"control",hover:{color:{dark:"white",light:"black"}},margin:{vertical:"xxsmall",horizontal:"small"},pad:{bottom:"xsmall"}},tabs:{header:{},panel:{}},table:{header:{align:"start",pad:{horizontal:"small",vertical:"xsmall"},border:"bottom",verticalAlign:"bottom",fill:"vertical"},body:{align:"start",pad:{horizontal:"small",vertical:"xsmall"}},footer:{align:"start",pad:{horizontal:"small",vertical:"xsmall"},border:"top",verticalAlign:"top",fill:"vertical"}},text:{xsmall:{size:"12px",height:"18px",maxWidth:"288px"},small:{size:"14px",height:"20px",maxWidth:"336px"},medium:{size:"18px",height:"24px",maxWidth:"432px"},large:{size:"22px",height:"28px",maxWidth:"528px"},xlarge:{size:"26px",height:"32px",maxWidth:"624px"},xxlarge:{size:"34px",height:"40px",maxWidth:"816px"}},video:{captions:{background:"rgba(0, 0, 0, 0.7)"},icons:{},scrubber:{color:"light-4"}},worldMap:{color:"light-3",continent:{active:"8px",base:"6px"},hover:{color:"light-4"},place:{active:"20px",base:"8px"}}},k=a(10),A=function(e){var t=e.children,a=Object(k.a)(e,["children"]),l=Object(c.e)((function(e){return e.auth.isAuthenticated}));return i.a.createElement(s.b,Object.assign({},a,{render:function(e){var a=e.location;return l?t:i.a.createElement(s.a,{to:{pathname:f,state:{from:a}}})}}))},C={error404:{display:"flex",flexDirection:"column",alignItems:"center"},title:{},goBack:{}},y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:C.error404},i.a.createElement("div",null,i.a.createElement("h1",{className:"f-s-40 m-b-20",style:C.title},"404: Page not found.")),i.a.createElement("div",null,i.a.createElement("span",null,"Go back: "),i.a.createElement("span",null,i.a.createElement("a",{style:C.goBack,href:"/"},"Home Page")))))},O=a(88),S="transparent",w="#D82828",N="#2C2C2C",j="#7F7F7F",W="#EFEFEF",D="#FFFFFF",F=a(22),H={main:{backgroundColor:W,fontWeight:"normal",borderRadius:11,borderWidth:0,outline:0},icon:{position:"absolute",marginLeft:15,marginTop:11}},M=function e(t){var a=t.id,l=t.style,n=t.type,r=t.leftIcon,c=Object(k.a)(t,["id","style","type","leftIcon"]);return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement("div",{style:H.icon},r),i.a.createElement("input",Object.assign({},c,{id:a,type:n,style:Object(F.a)({},e.defaultProps.style,{},H.main,{},l)})))};M.defaultProps={style:{width:328,height:48,paddingLeft:20,paddingRight:20},type:"text"};var L=M,I=function(e){var t=e.children,a=e.className,l=e.to,n=Object(k.a)(e,["children","className","to"]);return i.a.createElement(d.b,Object.assign({to:l,className:a+" bold "},n),t)},B=a(99),V={borderRadius:16},R=function(e){var t=e.style,a=e.type,l=Object(k.a)(e,["style","type"]);return i.a.createElement(B.a,Object.assign({},l,{focusIndicator:!1,primary:!0,type:a,color:w,style:Object(F.a)({},t,{},V),onClick:function(){}}))};R.defaultProps={type:"button"};var T=R,q={main:{backgroundColor:D,color:N,borderRadius:9,padding:"53px 56px 28px 56px"},button:{width:"100%",height:48,fontSize:18},question:{color:j}},P=function(){return i.a.createElement(O.a,{direction:"column",style:q.main},i.a.createElement("div",{className:"f-s-32 m-b-30 bold"},"Log In"),i.a.createElement(L,{id:"email",type:"email",placeholder:"Email",className:"m-b-20 center"}),i.a.createElement(L,{id:"pwd",type:"password",placeholder:"Password"}),i.a.createElement(I,{to:"/forgot-password",className:"m-t-16 text-end"},"Forgot Password?"),i.a.createElement("div",{className:"m-t-57 bold"},i.a.createElement(T,{type:"submit",style:q.button,label:"Continue"})),i.a.createElement("div",{className:"m-t-37 text-center f-s-16",style:q.question},"Don't have an account?"),i.a.createElement(I,{className:"text-center m-t-6 f-s-16",to:"/signup"},"Sign Up"))},U=function(){return i.a.createElement(P,null)},J=function(){return i.a.createElement(O.a,null,"HomePage :-)")},G=a(20),$=a(69),K=a(95),Q="0.5px solid rgba(0,0,0,0.2)";var X=function(e){return l.createElement("svg",Object.assign({width:110,height:29,fill:"none"},e),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M94.636 5.796l-4.052 15.663h4.086l3.684-14.24.14 11.197c.04 2.261 1 3.378 2.915 3.322 1.001-.028 1.925-.419 2.786-1.117.834-.698 1.363-1.535 1.623-2.54L110 1.915h-4.058l-3.699 14.295-.082-11.308c-.022-1.563-.535-2.54-1.59-2.96a3.695 3.695 0 00-1.354-.25c-1.107 0-2.095.418-2.965 1.256-.79.754-1.32 1.703-1.616 2.848zM38.5 1.91h10.245c1.448 0 2.41.446 2.896 1.312.331.586.29 1.62-.092 3.099l-.412 1.591c-.484 1.871-1.376 3.127-2.663 3.714.877.446 1.207 1.368.995 2.736l-.043.251-.096.503-.505 1.954c-.06.228-.148.48-.244.754l-.03.084c-.926 2.373-2.592 3.545-5.032 3.545H33.444L38.5 1.91zm.292 15.328h4.71c.675-.084 1.081-.447 1.247-1.09l.325-1.256c.167-.642-.073-1.033-.753-1.144h-4.626c-.572 2.317-.868 3.462-.903 3.49zm1.993-7.706h4.74c.653 0 1.087-.363 1.267-1.061l.333-1.285c.072-.279.052-.53-.089-.753a.74.74 0 00-.63-.308h-4.74l-.88 3.407zM55.361 1.91h9.99c2.355 0 3.442 1.06 3.227 3.21 0 .112-.066.363-.167.754L67.4 9.783c-.094.363-.159.614-.238.81-.838 1.814-2.184 2.848-4.009 3.099l-.22.02-.532.036-.674-.028 2.852 7.733h-5.051l-2.6-7.287c-.167-.446-.15-.949.05-1.507.569-1.648 1.658-2.457 3.219-2.457h1.73c.767 0 1.23-.363 1.425-1.117l.462-1.787c.166-.642-.073-1.033-.754-1.145-.05-.028-.134-.028-.276-.028h-4.257L54.56 21.453h-4.257L55.361 1.91zm16.444 0l-3.799 14.685c-.318 1.229-.407 2.122-.289 2.653.327 1.48 1.501 2.205 3.46 2.205h5.505c1.901 0 3.423-.725 4.558-2.15.42-.53.801-1.451 1.133-2.736L86.166 1.91h-4.257l-3.742 14.462-.065.14c-.208.474-.755.726-1.635.726h-2.894c-.909 0-1.326-.252-1.274-.782L76.062 1.91h-4.257zm21.228 0h-4.257L83.72 21.453h4.257L93.033 1.91z",fill:"#CCC"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.05 4.673l-4.053 15.663h4.087l3.683-14.24.14 11.196c.04 2.262 1 3.379 2.915 3.323 1.001-.028 1.925-.419 2.787-1.117.833-.698 1.362-1.536 1.622-2.54L108.413.791h-4.058l-3.698 14.295-.083-11.308c-.021-1.563-.535-2.54-1.59-2.96A3.694 3.694 0 0097.63.57c-1.107 0-2.095.418-2.964 1.256-.791.754-1.32 1.703-1.617 2.848zM36.913.813h10.245c1.447 0 2.41.447 2.895 1.313.331.586.291 1.62-.092 3.099l-.412 1.591c-.483 1.87-1.376 3.127-2.663 3.714.878.446 1.207 1.368.995 2.736l-.043.251-.095.503-.506 1.954c-.059.228-.147.48-.244.754l-.03.084c-.926 2.373-2.591 3.546-5.032 3.546H31.857L36.914.813zm.291 15.329h4.711c.675-.084 1.08-.447 1.247-1.09l.325-1.256c.166-.642-.074-1.033-.754-1.144h-4.626c-.571 2.317-.867 3.462-.903 3.49zM39.2 8.436h4.74c.652 0 1.086-.363 1.267-1.061l.332-1.285c.072-.279.052-.53-.089-.753a.74.74 0 00-.63-.308H40.08l-.881 3.407zM53.774.813h9.99c2.355 0 3.443 1.061 3.227 3.211 0 .112-.065.363-.166.754l-1.012 3.909c-.094.363-.159.614-.238.81-.838 1.814-2.184 2.847-4.008 3.099l-.22.02-.533.036-.673-.028 2.852 7.734H57.94l-2.599-7.288c-.168-.446-.151-.949.05-1.507.568-1.648 1.657-2.457 3.218-2.457h1.731c.766 0 1.23-.363 1.424-1.117l.462-1.787c.167-.642-.073-1.033-.753-1.145-.05-.028-.135-.028-.277-.028H56.94l-3.965 15.329h-4.257L53.774.813zm16.445 0l-3.8 14.686c-.317 1.229-.407 2.122-.288 2.653.326 1.48 1.5 2.206 3.459 2.206h5.505c1.902 0 3.423-.727 4.558-2.15.421-.53.801-1.452 1.134-2.736L84.579.813h-4.257L76.58 15.276l-.064.14c-.208.474-.756.726-1.635.726h-2.895c-.908 0-1.326-.252-1.274-.782L74.476.813h-4.257zm21.228 0H87.19l-5.057 19.545h4.257L91.447.813z",fill:"#E42C38"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M60.345 24.353l-1.07 3.379h.824l1.07-3.38h-.824zm.435-1.255a.73.73 0 00-.267.393c-.04.148-.023.27.039.366.062.097.163.148.306.148a.697.697 0 00.42-.154.776.776 0 00.269-.38.444.444 0 00-.028-.38.358.358 0 00-.317-.154.652.652 0 00-.422.16zm-8.455 5.895l1.184-3.739.068-.174c.171-.405.45-.643.839-.714l.115-.013h1.182l.161.02c.388.083.511.36.358.843l-.554 1.75a1.046 1.046 0 01-.285.431l-.126.103c-.203.155-.407.232-.599.232h-1.12l-.4 1.261c.002-.006-.064-.012-.206-.012l-.617.012zm1.565-2.323c-.018.116.03.18.141.2l.048.006h.625a.333.333 0 00.154-.077l.089-.122.41-1.294c.01-.09-.022-.148-.103-.167l-.029-.007h-.643c-.093 0-.177.052-.251.148l-.066.11-.365 1.152-.01.051zm2.344.296l.218-.688c.08-.251.21-.45.404-.592.179-.136.4-.206.64-.206H58.6l.05-.18c.017-.071-.025-.117-.13-.136h-1.702l.257-.81h1.869l.138.012c.376.045.531.258.475.63l-.034.149-.569 1.796-.061.154a1.242 1.242 0 01-.4.463.92.92 0 01-.532.174h-1.133c-.477 0-.69-.206-.63-.611l.037-.155zm.905-.141c.02.032.056.058.107.07l.042.007h.644c.142 0 .23-.065.271-.193l.076-.238c.026-.084.007-.142-.05-.174-.013-.02-.048-.026-.104-.026l-.726.007c-.072.013-.134.07-.177.167l-.084.264a.186.186 0 00.001.116zm4.408-1.822c.198-.43.521-.65.967-.65h1.145c.446 0 .63.22.555.65l-.036.155-.816 2.574h-.823l.724-2.285.01-.051c.02-.122-.046-.187-.207-.187h-.508c-.16 0-.268.065-.325.187l-.74 2.336h-.823l.815-2.574.062-.155zm3.847-1.903l-1.469 4.64h.823l.8-2.522h.55l.271-.856h-.55l.399-1.262h-.824zm.221 4.632l1.07-3.38h.823l-1.07 3.38h-.823zm1.238-4.241a.73.73 0 01.267-.393.652.652 0 01.422-.161c.142 0 .244.051.317.154.064.11.075.232.028.38a.776.776 0 01-.269.38.697.697 0 01-.42.154c-.143 0-.244-.051-.306-.148-.063-.096-.08-.218-.039-.366zm2 .862c-.445 0-.768.22-.967.65l-.06.155-.816 2.574h.823l.74-2.336c.057-.122.164-.187.325-.187h.508c.16 0 .227.065.207.187l-.01.051-.724 2.285h.823l.816-2.574.036-.155c.075-.43-.11-.65-.555-.65h-1.145zm1.024 4.64l.271-.855h1.703a.347.347 0 00.283-.213l.061-.193h-1.07c-.236 0-.411-.07-.527-.212-.118-.136-.138-.328-.062-.567l.53-1.673c.1-.315.237-.553.42-.701.17-.149.412-.226.715-.226h1.096l.146.007c.231.032.374.09.43.186.068.116.063.29-.01.522l-.969 3.057-.059.148c-.233.482-.587.72-1.051.72l-.491.007-1.416-.007zm1.572-2.303c-.006.077.025.135.083.167l.074.02h.693c.12-.027.2-.104.239-.226l.406-1.28c.008-.046-.011-.084-.044-.117a.173.173 0 00-.122-.045h-.656c-.112 0-.198.058-.262.18l-.02.046-.385 1.216-.006.038zm4.684-1.539l-.54 1.706c-.186.585.007.875.583.875H77.5l.271-.856H76.64c-.087 0-.139-.032-.153-.103-.021-.032-.02-.077 0-.135l.407-1.287c.049-.097.15-.142.292-.142H78.3l.271-.856h-1.498c-.458 0-.77.264-.94.798zm3.148 1.725h.73c.044 0 .095-.026.157-.084a.38.38 0 00.104-.154l.38-1.197a.25.25 0 00-.007-.154c-.027-.052-.063-.078-.106-.078h-.73c-.05 0-.101.026-.155.078a.381.381 0 00-.104.154l-.382 1.203a.221.221 0 00.007.155c.021.051.056.077.106.077zm-1.04.097l.59-1.86.067-.155c.209-.405.538-.605.99-.605h1.108c.241 0 .419.065.533.193.108.13.123.316.043.567l-.589 1.86c-.08.25-.213.437-.402.566a1.166 1.166 0 01-.655.193h-1.108c-.483 0-.686-.2-.607-.605l.03-.154zm4.96-2.62c-.557 0-.927.29-1.11.87l-.796 2.51h.824l.741-2.343c.031-.097.12-.161.268-.18h.359l.271-.857h-.557zm-.589 4.64l1.184-3.739.068-.174c.172-.405.451-.643.839-.714l.115-.013h1.183l.16.02c.389.083.512.36.359.843l-.555 1.75a1.046 1.046 0 01-.285.431l-.125.103c-.204.155-.408.232-.6.232h-1.12l-.4 1.261c.003-.006-.064-.012-.206-.012l-.617.012zm1.566-2.323c-.019.116.03.18.14.2l.048.006h.625a.332.332 0 00.155-.077l.088-.122.41-1.294c.01-.09-.022-.148-.102-.167l-.03-.007h-.643c-.093 0-.177.052-.251.148l-.066.11-.364 1.152-.01.051zm4.111.206h-.73c-.05 0-.085-.026-.106-.077a.222.222 0 01-.007-.155l.381-1.203a.381.381 0 01.105-.154c.053-.052.105-.078.154-.078h.73c.044 0 .08.026.106.078a.25.25 0 01.007.154l-.379 1.197a.38.38 0 01-.105.154c-.061.058-.113.084-.156.084zm-1.18-1.763l-.59 1.86-.03.154c-.08.405.124.605.607.605h1.108c.241 0 .46-.064.655-.193.19-.129.323-.315.402-.566l.59-1.86c.079-.251.064-.438-.044-.567-.114-.128-.292-.193-.533-.193h-1.108c-.452 0-.781.2-.99.605l-.068.155zm3.287.11c.183-.58.553-.87 1.11-.87h.558l-.272.856h-.359c-.148.02-.237.084-.267.18l-.742 2.343h-.823l.795-2.51zm1.354 1.055l-.218.688-.036.155c-.06.405.153.611.63.611h1.132a.92.92 0 00.532-.174c.166-.116.302-.27.4-.463l.061-.154.569-1.796.035-.148c.056-.373-.1-.586-.475-.63l-.139-.014h-1.869l-.257.811h1.702c.106.02.147.065.13.135l-.05.18h-1.102c-.241 0-.462.071-.64.207a1.128 1.128 0 00-.405.592zm.795.617a.172.172 0 01-.108-.07.186.186 0 010-.116l.084-.264c.042-.097.104-.154.176-.167l.727-.007c.055 0 .09.007.103.026.058.032.076.09.05.174l-.076.238c-.04.128-.129.193-.271.193h-.644l-.041-.007zm2.027.846l1.47-4.64h.823l-.4 1.26h.551l-.27.857h-.552l-.799 2.523h-.823zm2.76-3.388l-1.07 3.379h.824l1.07-3.38h-.823zm.435-1.255a.73.73 0 00-.267.393c-.04.148-.023.27.039.366.062.097.164.148.306.148a.697.697 0 00.42-.154.775.775 0 00.269-.38.444.444 0 00-.028-.38.358.358 0 00-.317-.154.652.652 0 00-.422.16zm1.17 3.778h.73c.044 0 .095-.026.157-.084a.38.38 0 00.105-.154l.379-1.197a.25.25 0 00-.007-.154c-.027-.052-.062-.078-.106-.078h-.73c-.05 0-.101.026-.154.078a.38.38 0 00-.105.154l-.381 1.203a.222.222 0 00.007.155c.02.051.056.077.105.077zm-1.04.097l.59-1.86.067-.155c.209-.405.538-.605.99-.605h1.108c.242 0 .419.065.533.193.108.13.123.316.044.567l-.589 1.86c-.08.25-.213.437-.403.566a1.163 1.163 0 01-.655.193h-1.108c-.483 0-.686-.2-.607-.605l.03-.154zm4.898-2.62c-.445 0-.768.22-.967.65l-.061.155-.815 2.574h.823l.74-2.336c.057-.122.164-.187.325-.187h.508c.16 0 .227.065.207.187l-.011.051-.723 2.285h.823l.815-2.574.037-.155c.075-.43-.11-.65-.556-.65h-1.145z",fill:"#A7A9AC"}),l.createElement("path",{d:"M10.754 10.054c-5.46 5.307.816 9.514 4.685 7.337 3.245-1.967 3.428-5.127 3.299-6.11C17.502 1.077.652 2.716 1.933 15.974c.218 2.247 1.413 4.553 4.033 7.224.115.114.647.585-.413-.026-5.9-3.393-5.244-12.358-2.16-16.016 3.084-3.658 9.38-5.043 13.378-1.68 3.998 3.361 3.32 7.516 3.804 8.108C24.336 8.722 18.286 2.59 15.353.655c-.2-.124.381-.121.903.064 14.764 6.343 6.767 28.58-9.382 20.774-.2-.097-.258-.413-.634-.825-.064-.592 1.741.782 2.278.106-4.126-3.849-2.837-12.137 2.236-10.72z",fill:"#D1D3D4"}),l.createElement("path",{d:"M9.785 9.484c-5.459 5.307.817 9.515 4.685 7.337 3.245-1.967 3.428-5.127 3.3-6.11C16.532.507-.317 2.146.964 15.404c.217 2.248 1.412 4.553 4.032 7.225.115.113.648.584-.413-.026-5.9-3.394-5.244-12.359-2.16-16.017 3.084-3.658 9.381-5.043 13.378-1.68 3.998 3.361 3.321 7.516 3.805 8.108 3.76-4.863-2.29-10.995-5.223-12.93-.2-.124.382-.121.903.064 14.765 6.343 6.768 28.58-9.381 20.774-.2-.097-.258-.412-.634-.825-.065-.592 1.74.782 2.278.106-4.127-3.848-2.837-12.137 2.235-10.72z",fill:"#E42C38"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M.292 13.886C.107 8.082 4.348 3.261 9.74 3.095a9.555 9.555 0 013.502.524c-.81-.182-1.66-.26-2.542-.234C5.128 3.557.785 8.53.975 14.467c.091 2.86 1.035 5.217 2.559 6.942C1.62 19.7.396 17.137.292 13.887zm4.013 8.298l-.09.124C1.742 20.583.128 17.68.007 13.895c-.19-5.937 4.153-10.91 9.725-11.082 2.098-.065 4.027.473 5.622 1.559a8.75 8.75 0 012.18 1.566c1.778 1.746 2.936 4.337 3.152 7.641a.142.142 0 01-.133.15.142.142 0 01-.152-.131c-.213-3.25-1.35-5.772-3.07-7.46a8.568 8.568 0 00-.313-.293c1.521 1.727 2.502 4.148 2.7 7.163l-.286.018c-.213-3.25-1.35-5.772-3.07-7.46a8.51 8.51 0 00-1.156-.952c-1.335-.672-2.86-.999-4.496-.948-5.392.167-9.633 4.988-9.448 10.793.119 3.707 1.696 6.523 4.09 8.191a.14.14 0 01.033.196.145.145 0 01-.2.034 9.307 9.307 0 01-.88-.696z",fill:"#E42C38"}))};var Y=function(e){return l.createElement("svg",Object.assign({width:24,height:24,fill:"none"},e),l.createElement("path",{d:"M10.27 18.54c1.613-.001 3.18-.541 4.45-1.535L18.715 21 20 19.715l-3.995-3.995a7.225 7.225 0 001.535-4.45C17.54 7.26 14.279 4 10.27 4 6.262 4 3 7.261 3 11.27c0 4.008 3.262 7.27 7.27 7.27zm0-12.723a5.458 5.458 0 015.453 5.453 5.458 5.458 0 01-5.453 5.452 5.458 5.458 0 01-5.452-5.452 5.458 5.458 0 015.452-5.453z",fill:"#2C2C2C"}))};var Z=function(e){return l.createElement("svg",Object.assign({width:24,height:24,fill:"none"},e),l.createElement("path",{d:"M11.5 22a2.27 2.27 0 01-1.57-.587c-.436-.391-.655-.853-.655-1.385h4.45c0 .532-.219.994-.655 1.385A2.27 2.27 0 0111.5 22zm7.25-6.01L21 18.01v.985H2v-.986l2.25-2.018v-5.493c0-1.534.524-2.888 1.57-4.061C6.869 5.263 8.195 4.504 9.8 4.16v-.658c0-.438.166-.798.497-1.08C10.628 2.142 11.03 2 11.5 2s.864.14 1.178.423c.314.281.47.641.47 1.08v.657c1.64.344 2.984 1.103 4.031 2.277 1.047 1.173 1.57 2.527 1.57 4.06v5.494zm-2.251 1.033v-6.525c0-1.252-.489-2.316-1.466-3.193-.977-.876-2.163-1.314-3.56-1.314-1.395 0-2.581.438-3.558 1.314-.977.877-1.466 1.94-1.466 3.193v6.525h10.05z",fill:"#2C2C2C"}))};var _=function(e){return l.createElement("svg",Object.assign({width:24,height:24,fill:"none"},e),l.createElement("path",{d:"M12 4a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4zm0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1z",fill:"#2C2C2C"}))},ee={main:{width:"100%",height:"100%"},img:{borderLeft:Q,height:80,width:80,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}},te=function(e){var t=e.style,a=(e.children,e.isAuth),l=Object($.a)(e,["style","children","isAuth"]);return i.a.createElement("div",{style:ee.main},i.a.createElement(K.a,Object.assign({style:Object(G.a)({},t,{height:"100%",paddingRight:0})},l,{background:S,pad:"small"}),i.a.createElement("div",{className:"m-l-32"},i.a.createElement(X,null)),a&&i.a.createElement(O.a,{direction:"row"},i.a.createElement(O.a,{style:ee.img},i.a.createElement(Y,null)),i.a.createElement(O.a,{style:ee.img},i.a.createElement(Z,null)),i.a.createElement(O.a,{style:ee.img},i.a.createElement(_,null)))))},ae=a(30),le={main:{height:120,borderBottom:Q,direction:"column",alignItems:"center",justifyContent:"center",borderLeft:"3px solid ".concat(w),cursor:"pointer",userSelect:"none"},title:{color:j}},ie=function(e){var t=e.name,a=e.isActive,l=e.children,n=a?N:j,r=a?"bold":"";return le.title=Object(F.a)({},le.title,{color:n}),le.main.borderLeft=a?"3px solid ".concat(w):"none",i.a.createElement(O.a,{style:le.main},i.a.createElement("div",null,l),i.a.createElement("div",{className:r,style:le.title},t))},ne=[{id:0,name:"Schedule",svg:"schedule",isActive:!1,route:v},{id:1,name:"Equipment",svg:"equipment",isActive:!1,route:b},{id:2,name:"Contacts",svg:"contacts",isActive:!1,route:u},{id:3,name:"Alerts",svg:"alertsSide",isActive:!1,route:x},{id:4,name:"Documents",svg:"document",isActive:!1,route:g}];var re=function(e){return l.createElement("svg",Object.assign({width:24,height:25,fill:"none"},e),l.createElement("path",{d:"M17 11.07a3.987 3.987 0 01-2.828-1.179A4.038 4.038 0 0113 7.045c0-1.068.421-2.092 1.172-2.847A3.987 3.987 0 0117 3.02c1.06 0 2.078.424 2.828 1.18A4.038 4.038 0 0121 7.044a4.038 4.038 0 01-1.172 2.846A3.987 3.987 0 0117 11.071zM5 5.032h6v2.013H5v12.077h12v-6.039h2v6.039a2.02 2.02 0 01-.586 1.423c-.375.377-.884.59-1.414.59H5c-.53 0-1.04-.213-1.414-.59A2.02 2.02 0 013 19.122V7.045c0-.534.21-1.046.586-1.423.375-.378.884-.59 1.414-.59z"}))};var ce=function(e){return l.createElement("svg",Object.assign({width:24,height:25,fill:"none"},e),l.createElement("path",{d:"M18.778 2.013H6.556c-1.838 0-3.334 1.505-3.334 3.354v1.119h-1.11c-.296 0-.578.117-.787.327a1.122 1.122 0 000 1.582c.209.21.491.327.786.327h1.111v2.237h-1.11c-.296 0-.578.117-.787.327a1.122 1.122 0 000 1.582c.209.21.491.327.786.327h1.111v2.236h-1.11c-.296 0-.578.118-.787.328a1.122 1.122 0 000 1.581c.209.21.491.328.786.328h1.111v1.118c0 1.85 1.496 3.355 3.334 3.355h12.222c1.838 0 3.333-1.505 3.333-3.355V5.367c0-1.85-1.495-3.354-3.333-3.354zM5.444 5.367c0-.616.5-1.118 1.112-1.118v2.237H5.444V5.367zm0 3.355h1.112v2.237H5.444V8.722zm0 4.473h1.112v2.236H5.444v-2.236zm0 5.591v-1.118h1.112v2.236a1.117 1.117 0 01-1.112-1.118zm14.445 0c0 .616-.499 1.118-1.111 1.118H7.667V4.25h11.11c.613 0 1.112.502 1.112 1.118v13.42z"}),l.createElement("path",{d:"M13.222 12.636a2.23 2.23 0 002.222-2.237 2.23 2.23 0 00-2.222-2.236A2.23 2.23 0 0011 10.399a2.23 2.23 0 002.222 2.237zM13.222 13.593c-1.735 0-2.778.8-2.778 1.598 0 .4 1.043.8 2.778.8 1.629 0 2.778-.4 2.778-.8 0-.798-1.089-1.598-2.778-1.598z"}))};var oe=function(e){return l.createElement("svg",Object.assign({width:24,height:25,fill:"none"},e),l.createElement("path",{d:"M19.508 9.316a.955.955 0 00-.186-.28l-5.7-5.737a.947.947 0 00-.279-.187c-.028-.013-.059-.021-.09-.032a.936.936 0 00-.245-.048c-.02-.002-.038-.013-.058-.013H6.3c-1.048 0-1.9.858-1.9 1.912V20.23c0 1.054.852 1.912 1.9 1.912h11.4c1.048 0 1.9-.858 1.9-1.912V9.712c0-.02-.01-.039-.012-.06a.917.917 0 00-.049-.247c-.01-.03-.018-.06-.031-.09zm-3.151-.56H13.9V6.283l2.457 2.473zM6.3 20.229V4.93H12v4.78c0 .254.1.498.278.677.178.18.42.28.672.28h4.75l.002 9.56H6.3z"}),l.createElement("path",{d:"M8.2 12.58h7.6v1.912H8.2V12.58zm0 3.824h7.6v1.912H8.2v-1.912zm0-7.648h1.9v1.912H8.2V8.756z"}))};var me=function(e){return l.createElement("svg",Object.assign({width:24,height:25,fill:"none"},e),l.createElement("path",{d:"M18.111 3.02H7.722c-1.042 0-1.889.909-1.889 2.027v3.041c0 1.119.847 2.028 1.89 2.028H18.11c1.042 0 1.889-.91 1.889-2.028V5.047c0-1.118-.847-2.028-1.889-2.028zM7.722 8.087V5.047h10.389l.002 3.041H7.723z"}),l.createElement("path",{d:"M13.389 16.2v-2.028c0-1.119-.847-2.028-1.889-2.028H4.889V6.06C3.847 6.06 3 6.97 3 8.088v4.056c0 1.118.847 2.027 1.889 2.027H11.5V16.2c-.25 0-.49.107-.668.297-.177.19-.276.448-.276.717v5.07c0 .268.1.526.276.716.177.19.417.297.668.297h1.889c.25 0 .49-.107.668-.297.177-.19.276-.448.276-.717v-5.069c0-.269-.1-.527-.276-.717a.913.913 0 00-.668-.297z"}))};var se=function(e){var t=e.fill,a=Object(k.a)(e,["fill"]);return l.createElement("svg",Object.assign({width:20,height:22,fill:t},a),l.createElement("path",{d:"M8.331 17.804l-4.117-4.12 1.573-1.574 2.549 2.553 5.88-5.888 1.573 1.574-7.458 7.455zM20 4.456v14.46a2.226 2.226 0 01-2.222 2.225H2.222A2.22 2.22 0 010 18.916V4.456A2.226 2.226 0 012.222 2.23h1.111V.006h2.223v2.225h8.888V.006h2.223v2.225h1.11A2.22 2.22 0 0120 4.456zM17.778 6.68H2.222v12.236h15.556V6.68z"}))},de={list:{listStyleType:"none",margin:0,padding:0,borderRight:Q}},he=function(e){var t=e.route;return i.a.createElement("ul",{style:de.list},Object(ae.a)(ne).map((function(e){var a=e.route===t;return i.a.createElement("li",{key:e.id},i.a.createElement(d.b,{to:e.route},i.a.createElement(ie,{name:e.name,isActive:a,icon:e.svg},function(e,t){var a=e?w:j;switch(t){case"schedule":return i.a.createElement(se,{fill:a});case"equipment":return i.a.createElement(me,{fill:a});case"contacts":return i.a.createElement(ce,{fill:a});case"document":return i.a.createElement(oe,{fill:a});default:return i.a.createElement(re,{fill:a})}}(a,e.svg))))})))},pe="5px 4px 14px rgba(0, 0, 0, 0.04)",xe={main:{zIndex:999,display:"flex",flexDirection:"column",minHeight:"100vh"},menu:{display:"flex",alignItems:"center",background:D,height:80,boxShadow:pe,borderBottom:Q},content:{display:"flex",flexDirection:"rows"},pageSpace:{display:"flex",alignItems:"center",justifyContent:"center",background:W,height:"calc(100vh - 80px)",width:"100%"},sideMenu:{background:D,minWidth:120,boxShadow:pe}},ue=function(e){var t=e.children,a=e.location,l=a.pathname===f||a.pathname===E;return i.a.createElement("div",{style:xe.main},i.a.createElement("div",{style:xe.menu},i.a.createElement(te,{isAuth:!l})),i.a.createElement("div",{style:xe.content},!l&&i.a.createElement("div",{style:xe.sideMenu},i.a.createElement(he,{route:a.pathname})),i.a.createElement("div",{style:xe.pageSpace},t)))},ge={main:{height:"100%",width:"100%"},header:{backgroundColor:D,padding:"0 31.5px 28px 32px",height:160}},be=function(e){var t=e.children,a=e.header;return i.a.createElement("div",{style:ge.main},i.a.createElement("div",{style:ge.header},a),i.a.createElement("div",null,t))},ve={cursor:"pointer",userSelect:"none"},fe={span:Object(G.a)({},ve,{color:j}),spanActive:Object(G.a)({},ve,{fontWeight:700,borderBottom:"3px solid ".concat(w)})},Ee=function(e){var t=e.actions,a=e.onSelectAction;return i.a.createElement("div",null,t&&t.map((function(e){return i.a.createElement("span",{key:e.id,className:"m-r-19 f-s-16 p-b-4",style:e.isActive?fe.spanActive:fe.span,onClick:function(){return a(e.id)}},e.name)})))};var ze=function(e){return l.createElement("svg",Object.assign({width:17,height:17,fill:"#000000"},e),l.createElement("path",{d:"M7.27 14.54c1.613-.001 3.18-.541 4.45-1.535L15.715 17 17 15.715l-3.995-3.995a7.225 7.225 0 001.535-4.45C14.54 3.26 11.279 0 7.27 0 3.262 0 0 3.261 0 7.27c0 4.008 3.262 7.27 7.27 7.27zm0-12.723a5.458 5.458 0 015.453 5.453 5.458 5.458 0 01-5.453 5.452A5.458 5.458 0 011.818 7.27 5.458 5.458 0 017.27 1.817z"}))},ke={main:{height:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},button:{width:176.8,height:40,borderRadius:16,fontSize:18,marginBottom:4},input:{width:280,height:40,marginBottom:4,marginRight:16,textIndent:31}},Ae=function(e){var t=e.title,a=e.quickAction,l=e.placeholder,n=e.actionName,r=e.onSelectAction;return i.a.createElement("div",{style:ke.main},i.a.createElement(O.a,null,i.a.createElement("div",{className:"f-s-40 bold"},t),i.a.createElement("div",{className:"m-t-19"},i.a.createElement(Ee,{actions:a,onSelectAction:r}))),i.a.createElement(O.a,{direction:"row"},i.a.createElement(L,{id:"input-filter",placeholder:l,leftIcon:i.a.createElement(ze,null),style:ke.input}),i.a.createElement(T,{label:n,style:ke.button})))},Ce=a(16),ye=a(96),Oe=a(97),Se={NONE:0,ASC:1,DESC:2};Object.freeze(Se);var we=Se,Ne={wrapper:{},main:{userSelect:"none"},chevron:{width:16},label:{letterSpacing:-.24}},je=function(e){var t=e.id,a=e.label,n=e.sortOrder,r=e.isSortable,c=e.onClick,o=Object(l.useState)(n),m=Object(Ce.a)(o,2),s=m[0],d=m[1],h=null;return r&&(h=s===we.NONE?null:s===we.ASC?i.a.createElement(ye.a,{color:w,style:Ne.chevron}):i.a.createElement(Oe.a,{color:w,style:Ne.chevron})),i.a.createElement("span",null,i.a.createElement(O.a,{direction:"row",style:Ne.main,onClick:function(){if(r){var e=we.NONE;c(t,e=s===we.NONE?we.ASC:s===we.ASC?we.DESC:we.ASC),d(e)}}},i.a.createElement("span",{className:"bold f-s-14",style:Ne.label},a),h))};je.defaultProps={id:0,onClick:function(){},isSortable:!0,sortOrder:we.NONE,width:"auto"};var We=je,De={main:{display:"grid",padding:"14px 32px",backgroundColor:D,borderTop:Q}},Fe=function(e){var t=e.model,a=e.gridTemplateColumns,l=function(e,t){console.log(e,t)},n=Object(G.a)({},De.main,{gridTemplateColumns:a});return i.a.createElement("div",{style:n},t.items.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement(We,{id:e.id,label:e.label,isSortable:e.isSortable,sortOrder:e.sortOrder,onClick:l}))})))},He=function(e,t){console.log("clicked: ".concat(e,", ").concat(t))},Me={items:[{id:0,label:"Alert Type",isSortable:!0,sortOrder:we.ASC,onClick:He},{id:1,label:"Title",isSortable:!0,onClick:He},{id:2,label:"Description",isSortable:!1,sortOrder:we.NONE,onClick:He},{id:3,label:"Periodicity",isSortable:!0,sortOrder:we.NONE,onClick:He},{id:4,label:"Time",isSortable:!0,sortOrder:we.NONE,onClick:He},{id:6,label:"Assigned to",isSortable:!0,sortOrder:we.NONE,onClick:He}]},Le=function(){return i.a.createElement(be,{header:i.a.createElement(Ae,{actionName:"Add Alert",placeholder:"Enter Location",title:"Alerts"})},i.a.createElement(Fe,{model:Me,gridTemplateColumns:"3fr 2fr minmax(200px, 4fr) 1fr 1fr 3fr"}),"Alerts!!!")},Ie=a(21),Be=[{id:0,name:"All",isActive:!0},{id:1,name:"Send an Invite",isActive:!1}],Ve=function(e,t){console.log("clicked: ".concat(e,", ").concat(t))},Re={items:[{id:0,label:"Name",isSortable:!0,sortOrder:we.ASC,onClick:Ve},{id:1,label:"Current Location",isSortable:!1,sortOrder:we.NONE,onClick:Ve},{id:2,label:"Tools",isSortable:!0,sortOrder:we.NONE,onClick:Ve}]},Te=function(){var e=Object(l.useState)(Be),t=Object(Ce.a)(e,2),a=t[0],n=t[1];return i.a.createElement(be,{header:i.a.createElement(Ae,{actionName:"Invite Contact",placeholder:"Enter Name, Location, Etc...",quickAction:a,onSelectAction:function(e){var t=Object(Ie.a)(a).map((function(t){return t.isActive=t.id===e,t}));n(t)},title:"Contacts"})},i.a.createElement(Fe,{model:Re,gridTemplateColumns:"2fr minmax(200px, 5fr) 3fr"}),"Contacts!!!")},qe=[{id:0,name:"In-App Storage",isActive:!0},{id:1,name:"In-Registration Flow",isActive:!1}],Pe=function(e,t){console.log("clicked: ".concat(e,", ").concat(t))},Ue={items:[{id:0,label:"Name",isSortable:!0,sortOrder:we.ASC,onClick:Pe},{id:1,label:"Type",isSortable:!0,onClick:Pe},{id:2,label:"Description",isSortable:!1,sortOrder:we.NONE,onClick:Pe},{id:3,label:"Date Upload",isSortable:!0,sortOrder:we.NONE,onClick:Pe}]},Je=function(){var e=Object(l.useState)(qe),t=Object(Ce.a)(e,2),a=t[0],n=t[1];return i.a.createElement(be,{header:i.a.createElement(Ae,{actionName:"Add Source",placeholder:"Enter Location",quickAction:a,onSelectAction:function(e){var t=Object(Ie.a)(a).map((function(t){return t.isActive=t.id===e,t}));n(t)},title:"Documents"})},i.a.createElement(Fe,{model:Ue,gridTemplateColumns:"4fr 2fr 4fr 4fr"}),"Documents!!!")},Ge=[{id:0,name:"All",isActive:!0},{id:1,name:"Free",isActive:!1},{id:2,name:"Busy",isActive:!1},{id:3,name:"Under Repair",isActive:!1}],$e=function(e,t){console.log("clicked: ".concat(e,", ").concat(t))},Ke={items:[{id:0,label:"Model",isSortable:!0,sortOrder:we.ASC,onClick:$e},{id:1,label:"Type",isSortable:!0,onClick:$e},{id:2,label:"Location",isSortable:!1,sortOrder:we.NONE,onClick:$e},{id:3,label:"Assigned to",isSortable:!0,sortOrder:we.NONE,onClick:$e},{id:4,label:"Status",isSortable:!0,sortOrder:we.NONE,onClick:$e}]},Qe=function(){var e=Object(l.useState)(Ge),t=Object(Ce.a)(e,2),a=t[0],n=t[1];return i.a.createElement(be,{header:i.a.createElement(Ae,{actionName:"Add Equipment",placeholder:"Enter Name, Location, Type...",quickAction:a,onSelectAction:function(e){var t=Object(Ie.a)(a).map((function(t){return t.isActive=t.id===e,t}));n(t)},title:"Equipment"})},i.a.createElement(Fe,{model:Ke,gridTemplateColumns:"2fr 1fr minmax(200px, 3fr) 2fr 2fr"}),"Equipment!!!")},Xe=a(68),Ye=[{id:0,name:"By Location",isActive:!0},{id:1,name:"By People",isActive:!1}],Ze=function(){var e=Object(l.useState)(Ye),t=Object(Xe.a)(e,2),a=t[0],n=t[1];return i.a.createElement(be,{header:i.a.createElement(Ae,{actionName:"Add Location",placeholder:"Enter Name, Location, Type...",quickAction:a,onSelectAction:function(e){var t=Object(ae.a)(a).map((function(t){return t.isActive=t.id===e,t}));n(t)},title:"Schedule"})},"Schedule!!!")},_e=Object(s.g)((function(e){return i.a.createElement(ue,e)})),et=function(){return Object(c.d)((function(e){return e.auth.succeed}))(),i.a.createElement(h.a,{theme:z},i.a.createElement(d.a,null,i.a.createElement(_e,null,i.a.createElement(s.d,null,i.a.createElement(A,{exact:!0,path:p},i.a.createElement(J,null)),i.a.createElement(A,{path:x},i.a.createElement(Le,null)),i.a.createElement(A,{path:u},i.a.createElement(Te,null)),i.a.createElement(A,{path:g},i.a.createElement(Je,null)),i.a.createElement(A,{path:b},i.a.createElement(Qe,null)),i.a.createElement(A,{path:v},i.a.createElement(Ze,null)),i.a.createElement(s.b,{path:f},i.a.createElement(U,null)),i.a.createElement(s.b,{path:E},i.a.createElement(y,null)),i.a.createElement(s.a,{to:E},i.a.createElement(y,null))))))};a(85),a(86);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{store:m},i.a.createElement(et,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.90aed191.chunk.js.map