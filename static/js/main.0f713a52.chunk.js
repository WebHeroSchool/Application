(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{11:function(e,t,a){e.exports={title:"Contacts_title__10gP3",wrap:"Contacts_wrap__3oOH3",container:"Contacts_container__3e04M",avatar:"Contacts_avatar__C1qEP",wrapper:"Contacts_wrapper__r3l5J",conctacts__wrapper:"Contacts_conctacts__wrapper__2xqbJ",name:"Contacts_name__HIEeN",links__wrapper:"Contacts_links__wrapper__37yj0",tg:"Contacts_tg__27snk",tg__logo:"Contacts_tg__logo__2TJ2J",gmail:"Contacts_gmail__22qqB",gmail__logo:"Contacts_gmail__logo__3A1JE",mail:"Contacts_mail__3hyL2",mail__logo:"Contacts_mail__logo__2_TtH",socials__wrapper:"Contacts_socials__wrapper__ml0_4",github__logo:"Contacts_github__logo__bk0DR",vk__logo:"Contacts_vk__logo__3gxzz",upwork__logo:"Contacts_upwork__logo__1awWj",error__container:"Contacts_error__container__O9tlu",error__logo:"Contacts_error__logo__DD5ol",error__text:"Contacts_error__text__3kYWI",avatar__wrapper:"Contacts_avatar__wrapper__2nC7n"}},12:function(e,t,a){e.exports={app:"App_app__GMlKB",container:"App_container__1-P2D",wrap:"App_wrap__jlwNL",link:"App_link__2CD__",link__active:"App_link__active__3MXyP",sidebar:"App_sidebar__1-oZE",menulist:"App_menulist__1Ayq4",about:"App_about__v9f2b",abouticon:"App_abouticon__QVdqh",tasks:"App_tasks__1InVo",tasksicon:"App_tasksicon__23v0T",contacts:"App_contacts__2Xfth",contactsicon:"App_contactsicon__kuXSa",mode__container:"App_mode__container__3ua0x",mode:"App_mode__2ymZH",mode__logo:"App_mode__logo__2iU80",selected__mode:"App_selected__mode__2Lhh-",lang__container:"App_lang__container__3IHvr",lang:"App_lang__UWEO1",rus__logo:"App_rus__logo__1zdEH",usa__logo:"App_usa__logo__2NNMV",whs__logo:"App_whs__logo__2cH3W",doc__wrap:"App_doc__wrap__situc",doc:"App_doc__1k-E-",doc__logo:"App_doc__logo__2oqUx",whs__link:"App_whs__link__2qhYy",content:"App_content__3dAK2"}},154:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),o=a(14),i=a.n(o),n=a(13),c=a(15),l=a(73),_=a(17),d=a(155),u=a(199),p=a(193),j=a(198),b=a(200),m=a(187),g=a(117),h=a(37),O=a(188),x=a(20),f=a(41),v=a(21),k=a(22),N=a(202),y=a(89),w=a.n(y),I=a(194),C=a(197),A=a(1),S=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={InputValue:""},e.onButtonClick=function(){e.setState({InputValue:""}),e.props.onClickAdd(e.state.InputValue)},e}return Object(f.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.isError,s=this.props.isErrorSame,r=this.props.isSuccess,o=this.props.isEdited,i=this.props.isDeleted;return e=a?Object(A.jsx)(I.a,{severity:"error",children:Object(A.jsx)(C.a,{i18nKey:"description.InputItem__empty",children:"This field cannot be empty!"})}):s?Object(A.jsx)(I.a,{severity:"error",children:Object(A.jsx)(C.a,{i18nKey:"description.InputItem__same",children:"This task has already been added!"})}):r?Object(A.jsx)(I.a,{severity:"success",children:Object(A.jsx)(C.a,{i18nKey:"description.InputItem__success",children:"Your task was successfully added!"})}):o?Object(A.jsx)(I.a,{severity:"warning",children:Object(A.jsx)(C.a,{i18nKey:"description.InputItem__edited",children:"Your task was successfully edited!"})}):i?Object(A.jsx)(I.a,{severity:"success",children:Object(A.jsx)(C.a,{i18nKey:"description.InputItem__deleted",children:"Your task was successfully deleted!"})}):"",Object(A.jsxs)("div",{className:w.a.input,children:[Object(A.jsx)("div",{className:w.a.alert,children:e}),Object(A.jsx)(N.a,{id:"standard-helperText",style:{marginRight:11},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},value:this.state.InputValue,onChange:function(e){return t.setState({InputValue:e.target.value})}}),Object(A.jsx)("button",{variant:"contained",color:"primary",className:w.a.create,onClick:this.onButtonClick,children:Object(A.jsx)(C.a,{i18nKey:"description.InputItem__create",children:"CREATE"})})]})}}]),a}(r.a.Component),D=a(68),T=a.n(D),R=a(195),L=a(51),E=a.n(L),K=a(184),V=a(108),B=a.n(V),H=function(e){var t,a=e.value,s=e.isDone,r=e.onClickDone,o=e.id,i=e.onClickDelete,c=e.newValue,l=e.setNewValue,_=e.editItem,d=e.newItemValue;return e.isEditing?Object(A.jsx)("div",{className:T.a.container,onKeyPress:function(e){"Enter"===e.key&&d(o,c)},children:Object(A.jsx)(N.a,{id:"standard-required",size:"large",fullWidth:!0,style:{margin:5},value:c,onChange:function(e){l(e.target.value)}})}):Object(A.jsxs)("div",{className:T.a.container,onDoubleClick:function(){return _(o,a)},children:[Object(A.jsx)(R.a,{checked:s,color:"secondary",inputProps:{"aria-label":"controlled"},onClick:function(){return r(o,s)}}),Object(A.jsx)("span",{className:E()((t={},Object(n.a)(t,T.a.item,!0),Object(n.a)(t,T.a.done,s),t)),children:a}),Object(A.jsx)("div",{children:Object(A.jsx)(K.a,{"aria-label":"delete",className:T.a.basket,onClick:function(){return i(o)},children:Object(A.jsx)(B.a,{})})})]})};H.defaultProps={isDone:!1};var M=H,J=a.p+"static/media/notes.f4eca943.ico",F=a(56),P=a.n(F),Y=a(201),U=a(196),q=function(e){var t=e.items,a=e.onClickDone,s=e.onClickDelete,r=e.dragStartHandler,o=e.dragEndHandler,i=e.dragOverHandler,n=e.dropHandler,c=e.sortItems,l=e.editItem,_=e.newValue,d=e.setNewValue,u=e.newItemValue;return 0===t.length?Object(A.jsxs)("div",{className:P.a.empty__wrapper,children:[Object(A.jsx)("img",{src:J,alt:"Error",className:P.a.empty__logo}),Object(A.jsx)("h3",{className:P.a.empty__text,children:Object(A.jsx)(C.a,{i18nKey:"description.ItemList",children:"It is the best time to fill your list up!"})})]}):Object(A.jsx)("div",{className:P.a.wrapperlist,children:Object(A.jsx)(Y.a,{component:"ul",className:P.a.list,children:t.sort(c).map((function(e){return e.isVisible&&Object(A.jsx)(U.a,{classNames:"item",timeout:800,children:Object(A.jsx)("li",{className:P.a.list__item,onDragStart:function(t){return r(t,e)},onDragLeave:function(e){return o(e)},onDragEnd:function(e){return o(e)},onDragOver:function(e){return i(e)},onDrop:function(t){return n(t,e)},draggable:!0,children:Object(A.jsx)(M,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:a,onClickDelete:s,isEditing:e.isEditing,editItem:l,newValue:_,setNewValue:d,newItemValue:u})})},e.id)}))})})},W=a(39),z=a.n(W),G=function(e){var t=e.count,a=e.clickbox,s=e.onFilterChange,r=e.onClickDeleteDone,o=e.counterCompleted,i=e.counterInProgress;return Object(A.jsxs)("div",{className:z.a.footer,children:[Object(A.jsxs)("button",{className:z.a.tasks,children:[Object(A.jsx)(C.a,{i18nKey:"description.footer1",children:"Task(s) left:"})," ",t]}),Object(A.jsxs)("div",{className:z.a.filter,children:[Object(A.jsxs)("button",{className:z.a.all,onClick:function(){return s("All")},children:[Object(A.jsx)(C.a,{i18nKey:"description.footer2",children:"All"}),Object(A.jsx)("span",{className:z.a.allcounter,children:" (".concat(o+i,") ")})]}),Object(A.jsxs)("button",{className:z.a.completed,onClick:function(){return s("Completed")},children:[Object(A.jsx)(C.a,{i18nKey:"description.footer3",children:"Completed"}),Object(A.jsx)("span",{className:z.a.completedcounter,children:" (".concat(o,") ")})]}),Object(A.jsxs)("button",{className:z.a.inprogress,onClick:function(){return s("In progress")},children:[Object(A.jsx)(C.a,{i18nKey:"description.footer4",children:"In progress"}),Object(A.jsx)("span",{className:z.a.inprogresscounter,children:" (".concat(i,") ")})]})]}),Object(A.jsxs)("button",{className:z.a.delete,onClick:r,value:"Delete completed",children:[Object(A.jsx)(C.a,{i18nKey:"description.footer5",children:"Delete completed:"})," ",a]})]})};G.defaultProps={count:0,clickbox:0};var Z=G,Q=a(94),X=a.n(Q),$=function(){var e={isError:!1,isErrorSame:!1,isSuccess:!1,isEdited:!1,isDeleted:!1,items:JSON.parse(localStorage.getItem("items"))||[],count:JSON.parse(localStorage.getItem("count"))||0,newValue:"",filter:"All",clickbox:0},t=Object(O.a)().t,a=Object(s.useState)(e.items),r=Object(c.a)(a,2),o=r[0],i=r[1],n=Object(s.useState)(e.count),l=Object(c.a)(n,2),_=l[0],d=l[1],u=Object(s.useState)(e.isError),p=Object(c.a)(u,2),j=p[0],b=p[1],m=Object(s.useState)(e.isErrorSame),x=Object(c.a)(m,2),f=x[0],v=x[1],k=Object(s.useState)(e.isSuccess),N=Object(c.a)(k,2),y=N[0],w=N[1],I=Object(s.useState)(e.isEdited),C=Object(c.a)(I,2),D=C[0],T=C[1],R=Object(s.useState)(e.isDeleted),L=Object(c.a)(R,2),E=L[0],K=L[1],V=Object(s.useState)(e.clickbox),B=Object(c.a)(V,2),H=B[0],M=B[1],J=Object(s.useState)(e.filter),F=Object(c.a)(J,2),P=F[0],Y=F[1],U=Object(s.useState)(e.null),W=Object(c.a)(U,2),z=W[0],G=W[1],Q=Object(s.useState)(e.newValue),$=Object(c.a)(Q,2),ee=$[0],te=$[1];Object(s.useEffect)((function(){localStorage.setItem("items",JSON.stringify(o)),localStorage.setItem("count",JSON.stringify(_))}));var ae;switch(P){default:case"All":ae=o;break;case"Completed":ae=o.filter((function(e){return e.isDone}));break;case"In progress":ae=o.filter((function(e){return!e.isDone}))}var se=o.filter((function(e){return e.isDone})).length,re=o.filter((function(e){return!e.isDone})).length;return Object(A.jsx)(s.Suspense,{fallback:"Loading...",children:Object(A.jsxs)("div",{className:X.a.wrap,children:[Object(A.jsx)("h1",{className:X.a.title,children:t("description.todolist__title")}),Object(A.jsx)(S,{onClickAdd:function(e){var t=[].concat(Object(g.a)(o),[{value:e,isDone:!1,id:Date.now(),order:Date.now(),isVisible:!0,isEditing:!1}]);t.reverse((function(e,t){return e.id-t.id})),setTimeout((function(){b(!1),v(!1),w(!1),K(!1)}),1500);var a=o.find((function(t){return t.value===e}));""===e?(b(!0),i(o)):a?(b(!1),v(!0),i(o)):(b(!1),v(!1),w(!0),d((function(e){return e+1})),i(t))},isError:j,isErrorSame:f,isSuccess:y,isEdited:D,isDeleted:E}),Object(A.jsx)(q,{items:ae,onClickDone:function(e,t){var a=o.sort((function(e,t){return t.id-e.id})).map((function(t){var a=Object(h.a)({},t);return t.id===e&&(a.isDone=!t.isDone),a}));t?(i(a),M((function(e){return e-1}))):(i(a),M((function(e){return e+1})))},onClickDelete:function(e){var t=o.filter((function(t){return t.id!==e}));i(t),K(!0),setTimeout((function(){K(!1)}),1500),d(0===_?_:function(e){return e-1}),M(0===H?H:function(e){return e-1})},dragStartHandler:function(e,t){e.target.style.boxShadow="0 5px 4px grey",G(t)},dragEndHandler:function(e){e.target.style.boxShadow="none"},dragOverHandler:function(e){e.preventDefault(),e.target.style.boxShadow="7px 6px 5px 3px grey"},dropHandler:function(e,t){e.preventDefault(),i(o.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{order:z.order}):e.id===z.id?Object(h.a)(Object(h.a)({},e),{},{order:t.order}):e}))),e.target.style.boxShadow="none"},sortItems:function(e,t){return e.order>t.order?1:-1},editItem:function(e,t){var a=o.map((function(t){var a=Object(h.a)({},t);return a.id===e&&(a.isEditing=!0),a}));te(t),i(a)},newItemValue:function(e,t){var a=o.map((function(a){var s=Object(h.a)({},a);return s.id===e&&(s.value=t,s.isEditing=!1),s}));te(""),i(a),d((function(e){return e-1})),setTimeout((function(){b(!1),v(!1),w(!1),T(!1)}),1500);var s=o.find((function(e){return e.value===t}));""===t?(b(!0),i(o)):s?(b(!1),v(!0),i(o)):(b(!1),v(!1),T(!0),d((function(e){return e+1})),i(a))},newValue:ee,setNewValue:te}),Object(A.jsx)(Z,{count:_,clickbox:H,filter:P,onFilterChange:function(e){o.sort((function(e,t){return t.id-e.id})),Y(e)},counterCompleted:se,counterInProgress:re,onClickDeleteDone:function(e){var t=o.filter((function(e){return!e.isDone}));i(t),K(!0),M((function(e){return 0})),d((function(e){return e-(e-t.length)})),setTimeout((function(){K(!1)}),1500)},t:Object(O.a)()})]})})},ee=a(18),te=a.n(ee),ae=a(7),se=a.n(ae),re=a(190),oe=a(189),ie=a.p+"static/media/fork.fa418bb5.svg",ne=a.p+"static/media/star.48b542f4.svg",ce=a.p+"static/media/error.e36e014a.svg",le=a(64),_e=new le.a,de=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,isError:!1,repoList:[],firstRep:0,lastRep:5},e.buttonBack=function(){e.setState({firstRep:e.state.firstRep-5,lastRep:e.state.lastRep-5})},e.buttonNext=function(){e.setState({firstRep:e.state.firstRep+5,lastRep:e.state.lastRep+5})},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;_e.repos.listForUser({username:"Antoha208"}).then((function(t){var a=t.data;e.setState({repoList:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,isError:!0})}))}},{key:"render",value:function(){var e,t,a=this,s=this.state,r=s.isLoading,o=s.isError,i=s.repoList,c=s.firstRep,l=s.lastRep;return Object(A.jsx)("div",{className:se.a.wrap,children:r?Object(A.jsx)(oe.a,{className:se.a.preloader}):Object(A.jsx)("div",{className:se.a.inner,children:o?Object(A.jsxs)("div",{className:se.a.error__wrapper,children:[Object(A.jsx)("img",{src:ce,alt:"Error",className:se.a.error__logo}),Object(A.jsx)("h2",{className:se.a.error__text,children:Object(A.jsx)(C.a,{i18nKey:"description.repositories__text1",children:"There is something wrong"})})]}):Object(A.jsx)("div",{children:0===i.length?Object(A.jsxs)("div",{className:se.a.error__wrapper,children:[Object(A.jsx)("img",{src:ce,alt:"Error",className:se.a.error__logo}),Object(A.jsxs)("h3",{className:se.a.error__text,children:[Object(A.jsx)(C.a,{i18nKey:"description.repositories__text2",children:"The repositories list is empty on "}),Object(A.jsx)("a",{href:"www.github.com",children:"github.com"})]})]}):Object(A.jsxs)("div",{children:[!r&&Object(A.jsx)("ol",{className:se.a.list,children:i.slice(c,l).map((function(e){var t;return Object(A.jsx)("li",{className:se.a.list__item,children:Object(A.jsxs)(re.a,{className:se.a.cards,children:[Object(A.jsx)("a",{href:e.html_url,className:se.a.name,target:"_blank",rel:"noreferrer",children:Object(A.jsx)("b",{className:se.a.name__text,children:e.name})}),Object(A.jsxs)("div",{className:se.a.info,children:[Object(A.jsxs)("div",{className:se.a.info__language,children:[Object(A.jsx)("div",{className:E()((t={},Object(n.a)(t,se.a.language,!0),Object(n.a)(t,se.a.html,"HTML"===e.language),Object(n.a)(t,se.a.css,"CSS"===e.language),Object(n.a)(t,se.a.js,"JavaScript"===e.language),Object(n.a)(t,se.a.typeScript,"TypeScript"===e.language),Object(n.a)(t,se.a.text,"Markdown"===e.language),t))}),Object(A.jsx)("p",{className:se.a.language__text,children:e.language})]}),Object(A.jsxs)("div",{className:se.a.star,children:[Object(A.jsx)("img",{src:ne,className:se.a.star__logo,alt:"Star"}),Object(A.jsx)("p",{className:se.a.count,children:e.stargazers_count})]}),Object(A.jsxs)("div",{className:se.a.fork,children:[Object(A.jsx)("img",{src:ie,className:se.a.fork__logo,alt:"Fork"}),Object(A.jsx)("p",{className:se.a.count,children:e.forks})]}),Object(A.jsxs)("p",{className:se.a.update,children:[Object(A.jsx)(C.a,{i18nKey:"description.repositories__update",children:"Last update: "}),new Date(e.updated_at).toLocaleString("en-GB",{month:"numeric",day:"numeric",year:"numeric"})]})]})]})},e.id)}))}),Object(A.jsxs)("div",{className:se.a.nav,children:[Object(A.jsx)("button",{className:E()((e={},Object(n.a)(e,se.a.button,!0),Object(n.a)(e,se.a.disabled,0===c),e)),disabled:0===c,onClick:function(){return a.buttonBack()},children:"<<<"}),Object(A.jsx)("button",{className:E()((t={},Object(n.a)(t,se.a.button,!0),Object(n.a)(t,se.a.disabled,i.length<=l),t)),onClick:function(){return a.buttonNext()},disabled:i.length<=l,children:">>>"})]})]})})})})}}]),a}(r.a.Component),ue=a.p+"static/media/error.e36e014a.svg",pe=a.p+"static/media/location.511f1bc3.svg",je=new le.a,be=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,error:null,userInfo:[]},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;je.users.getByUsername({username:"Antoha208"}).then((function(t){var a=t.data;e.setState({userInfo:a,isLoading:!1})}),(function(t){e.setState({isLoading:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.error,s=e.userInfo;return a?Object(A.jsxs)("div",{className:te.a.error__container,children:[Object(A.jsx)("img",{src:ue,alt:"Error",className:te.a.error__logo}),Object(A.jsx)("h2",{className:te.a.error__text,children:Object(A.jsx)(C.a,{i18nKey:"description.about__text1",children:"There is something wrong"})}),Object(A.jsx)("p",{className:te.a.error__text,children:Object(A.jsxs)(C.a,{i18nKey:"description.about__text2",children:["The information is: ",a.message]})})]}):Object(A.jsxs)("div",{className:te.a.wrap,children:[Object(A.jsx)("h1",{className:te.a.title,children:t?Object(A.jsx)(oe.a,{}):Object(A.jsx)(C.a,{i18nKey:"description.about__title",children:"'ABOUT'"})}),Object(A.jsx)("p",{className:te.a.profile,children:Object(A.jsx)("b",{children:Object(A.jsx)(C.a,{i18nKey:"description.about__profile",children:"Profile"})})}),Object(A.jsxs)(re.a,{className:te.a.repo__wrapper,children:[Object(A.jsx)("div",{className:te.a.avatar__wrapper,children:Object(A.jsx)("img",{src:s.avatar_url,alt:"",className:te.a.avatar})}),Object(A.jsxs)("div",{className:te.a.repo,children:[Object(A.jsx)("h1",{className:te.a.login,children:s.login}),Object(A.jsx)("p",{className:te.a.bio,children:Object(A.jsx)(C.a,{i18nKey:"description.about__bio",children:s.bio})}),Object(A.jsx)("p",{className:te.a.bio__art,children:Object(A.jsx)(C.a,{i18nKey:"description.about__bio2",children:"Already know what TODO"})}),Object(A.jsxs)("a",{className:te.a.location,href:"https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3/@59.9399138,29.5342491,9z/data=!3m1!4b1!4m5!3m4!1s0x4696378cc74a65ed:0x6dc7673fab848eff!8m2!3d59.9310584!4d30.3609096?hl=ru-RU",target:"_blank",rel:"noreferrer",children:[Object(A.jsx)("img",{className:te.a.location__logo,src:pe,alt:"location"}),Object(A.jsx)("b",{children:Object(A.jsx)(C.a,{i18nKey:"description.about__location",children:"Location: ".concat(s.location)})})]})]})]}),Object(A.jsx)("h3",{className:te.a.repoTitle,children:Object(A.jsx)(C.a,{i18nKey:"description.about__repoTitle",children:"Repositories on github.com"})}),Object(A.jsx)(re.a,{className:te.a.wrapper,children:Object(A.jsx)(de,{})})]})}}]),a}(r.a.Component),me=a(113),ge=a.n(me),he=a(114),Oe=a.n(he),xe=a(115),fe=a.n(xe),ve=a.p+"static/media/ModeLogo.a3814ccb.ico",ke=a.p+"static/media/russiaLogo.078e6709.ico",Ne=a.p+"static/media/UsaLogo.b8d838f3.ico",ye=a.p+"static/media/document.15810c27.gif",we=a(11),Ie=a.n(we),Ce=a.p+"static/media/error.e36e014a.svg",Ae=a.p+"static/media/gmail.7bf1a224.svg",Se=a.p+"static/media/mail.e3ffc26c.svg",De=a.p+"static/media/telegram.da27cc00.svg",Te=a.p+"static/media/github.d1bb13ce.svg",Re=a.p+"static/media/vk.27011227.svg",Le=a.p+"static/media/upwork.816941b2.svg",Ee=new le.a,Ke=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,error:null,userInfo:[]},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;Ee.users.getByUsername({username:"Antoha208"}).then((function(t){var a=t.data;e.setState({userInfo:a,isLoading:!1})}),(function(t){e.setState({isLoading:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.error,s=e.userInfo;return a?Object(A.jsxs)("div",{className:Ie.a.error__container,children:[Object(A.jsx)("img",{src:Ce,alt:"Error",className:Ie.a.error__logo}),Object(A.jsx)("h2",{className:Ie.a.error__text,children:Object(A.jsx)(C.a,{i18nKey:"description.contacts__text1",children:"There is something wrong"})}),Object(A.jsx)("p",{className:Ie.a.error__text,children:Object(A.jsxs)(C.a,{i18nKey:"description.contacts__text2",children:["The information is: ",a.message]})})]}):Object(A.jsxs)("div",{className:Ie.a.wrap,children:[Object(A.jsx)("h1",{className:Ie.a.title,children:t?Object(A.jsx)(oe.a,{}):Object(A.jsx)(C.a,{i18nKey:"description.contacts__title",children:"'CONTACTS'"})}),Object(A.jsxs)(re.a,{className:Ie.a.container,children:[Object(A.jsx)("div",{className:Ie.a.avatar__wrapper,children:Object(A.jsx)("img",{src:s.avatar_url,alt:"",className:Ie.a.avatar})}),Object(A.jsxs)("div",{className:Ie.a.wrapper,children:[Object(A.jsxs)("div",{className:Ie.a.conctacts__wrapper,children:[Object(A.jsx)("p",{className:Ie.a.name,children:Object(A.jsx)("b",{children:Object(A.jsx)(C.a,{i18nKey:"description.contacts__name",children:s.name})})}),Object(A.jsxs)("div",{className:Ie.a.links__wrapper,children:[Object(A.jsxs)("a",{className:Ie.a.tg,href:"https://web.telegram.org/k/",target:"_blank",rel:"noreferrer",children:[Object(A.jsx)("img",{className:Ie.a.tg__logo,src:De,alt:"telegram"}),"@Antoha208"]}),Object(A.jsxs)("a",{className:Ie.a.gmail,href:"mailto: aanton229@gmail.com",target:"_blank",rel:"noreferrer",children:[Object(A.jsx)("img",{className:Ie.a.gmail__logo,src:Ae,alt:"gmail"}),"aanton229@gmail.com"]}),Object(A.jsxs)("a",{className:Ie.a.mail,href:"mailto: anton_androsyak@mail.ru",target:"_blank",rel:"noreferrer",children:[Object(A.jsx)("img",{className:Ie.a.mail__logo,src:Se,alt:"mail"}),"anton_androsyak@mail.ru"]})]})]}),Object(A.jsxs)("div",{className:Ie.a.socials__wrapper,children:[Object(A.jsx)("a",{className:Ie.a.github,href:"https://github.com/Antoha208",children:Object(A.jsx)("img",{className:Ie.a.github__logo,src:Te,alt:"github",target:"_blank",rel:"noreferrer"})}),Object(A.jsx)("a",{className:Ie.a.vk,href:"https://vk.com/antoha208",target:"_blank",rel:"noreferrer",children:Object(A.jsx)("img",{className:Ie.a.vk__logo,src:Re,alt:"vk"})}),Object(A.jsx)("a",{className:Ie.a.upwork,href:"https://www.upwork.com/",children:Object(A.jsx)("img",{className:Ie.a.upwork__logo,src:Le,alt:"upwork",target:"_blank",rel:"noreferrer"})})]})]})]})]})}}]),a}(r.a.Component),Ve=a(12),Be=a.n(Ve),He=a(192),Me=a(116),Je=a(191),Fe=Object(Me.a)({palette:{primary:{main:"#757575"},secondary:{main:"rgba(241, 244, 245, 0.973)"},error:{main:"rgba(255, 52, 60, 1)"},warning:{main:"#ff9100"},success:{main:"#4caf50"},type:"dark"},typography:{fontFamily:"monospace"},shape:{borderRadius:10},transition:{easing:{easeOut:"cubic-bezier(0.0, 0, 0.2, 1)"},duration:{standard:500}},props:{MuiPaper:{elevation:12},MuiCard:{elevation:7},MuiButton:{disableRipple:!0},MuiCheckbox:{disableRipple:!0}}}),Pe=Object(Me.a)({palette:{primary:{main:"#757575"},secondary:{main:"#283593"},error:{main:"rgba(255, 52, 60, 1)"},warning:{main:"#ff9100"},success:{main:"#4caf50"},type:"light"},typography:{fontFamily:"monospace"},shape:{borderRadius:10},spacing:2,transition:{easing:{easeOut:"cubic-bezier(0.0, 0, 0.2, 1)"},duration:{standard:500}},props:{MuiPaper:{elevation:12},MuiCard:{elevation:7},MuiButton:{disableRipple:!0},MuiCheckbox:{disableRipple:!0}}}),Ye=Object(Je.a)((function(e){return{formControl:{margin:e.spacing(1),maxWidth:120,minWidth:52},selectEmpty:{marginTop:e.spacing(2)}}})),Ue=a(74),qe=a(44),We=a(118),ze=function(e){"eng"===e.target.value?Ue.a.changeLanguage("en"):"rus"===e.target.value&&Ue.a.changeLanguage("ru")};Ue.a.use(We.a).use(qe.e).init({debug:!1,fallbackLng:"en",detection:{order:["localStorage"],caches:["localStorage"]},interpolation:{escapeValue:!1},resources:{en:{translation:{description:{app__lang:"Lang",about:"About",tasks:"Tasks",contacts:"Contacts",todolist__title:"TODOLIST",footer1:"Task(s) left:",footer2:"All",footer3:"Completed",footer4:"In progress",footer5:"Delete completed:",about__text1:"There is something wrong",about__text2:"There information is:",about__title:"About",about__profile:"Profile",about__bio:"Young, fresh and perspective - Frontend Developer",about__bio2:"Already know what to do",about__location:"Location: St. Petersburg",about__repoTitle:"Repositories on github.com",repositories__text1:"There is something wrong",repositories__text2:"The repositories list is empty on ",repositories__update:"Last update: ",contacts__text1:"There is something wrong",contacts__text2:"There information is:",contacts__title:"Contacts",contacts__name:"Anton Androsiuk",InputItem__empty:"This field cannot be empty!",InputItem__same:"This task has already been added!",InputItem__success:"Your task was successfully added!",InputItem__edited:"Your task was successfully edited!",InputItem__deleted:"Your task was successfully deleted!",InputItem__create:"CREATE",ItemList:"It is the best time to fill your list up!"}}},ru:{translation:{description:{app__lang:"\u042f\u0437\u044b\u043a",about:"\u041e\u0431\u043e \u043c\u043d\u0435",tasks:"\u041c\u043e\u0438 \u0434\u0435\u043b\u0430",contacts:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",todolist__title:"\u041c\u043e\u0438 \u0434\u0435\u043b\u0430",footer1:"\u0414\u0435\u043b \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c:",footer2:"\u0412\u0441\u0435",footer3:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",footer4:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435",footer5:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435:",about__text1:"\u0427\u0442\u043e-\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u043d\u0435 \u0442\u0430\u043a..",about__text2:"\u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e:",about__title:"\u041e\u0431\u043e \u043c\u043d\u0435",about__profile:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",about__bio:"\u041c\u043e\u043b\u043e\u0434, \u0441\u0432\u0435\u0436, \u043f\u0435\u0440\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u0435\u043d, \u0434\u0432\u0443\u043c\u044f \u0441\u043b\u043e\u0432\u0430\u043c\u0438 - \u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",about__bio2:"\u0423\u0436\u0435 \u0437\u043d\u0430\u044e, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c",about__location:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u0421\u041f\u0431",about__repoTitle:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 github.com",repositories__text1:"\u0427\u0442\u043e-\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u043d\u0435 \u0442\u0430\u043a..",repositories__text2:"\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 \u043f\u0443\u0441\u0442 \u043d\u0430 ",repositories__update:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435: ",contacts__text1:"\u0427\u0442\u043e-\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u043d\u0435 \u0442\u0430\u043a..",contacts__text2:"\u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e:",contacts__title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",contacts__name:"\u0410\u043d\u0442\u043e\u043d \u0410\u043d\u0434\u0440\u043e\u0441\u044e\u043a",InputItem__empty:"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!",InputItem__same:"\u042d\u0442\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u0443\u0436\u0435 \u0431\u044b\u043b\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430!",InputItem__success:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430!",InputItem__edited:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430!",InputItem__deleted:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0430!",InputItem__create:"\u0421\u041e\u0417\u0414\u0410\u0422\u042c",ItemList:"\u0421\u0430\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c!"}}}}});Ue.a;var Ge=function(){var e={darkTheme:JSON.parse(localStorage.getItem("darkTheme")),lang:JSON.parse(localStorage.getItem("language")),isLoading:!0},t=Object(O.a)().t,a=Ye(),o=Object(s.useState)(e.darkTheme),i=Object(c.a)(o,2),g=i[0],h=i[1],x=r.a.useState(e.lang),f=Object(c.a)(x,2),v=f[0],k=f[1],N=Object(s.useState)(e.isLoading),y=Object(c.a)(N,2),w=y[0],I=y[1];Object(s.useEffect)((function(){localStorage.setItem("darkTheme",JSON.stringify(g)),localStorage.setItem("language",JSON.stringify(v)),setTimeout((function(){I(!1)}),3e3)}));var C;return w?Object(A.jsx)("div",{style:{margin:"auto"},className:Be.a.doc__wrap,children:Object(A.jsx)("div",{className:Be.a.doc,children:Object(A.jsx)("img",{src:ye,alt:"doc",className:Be.a.doc__logo})})}):Object(A.jsx)(s.Suspense,{fallback:"Loading...",children:Object(A.jsx)(He.a,{theme:g?Fe:Pe,children:Object(A.jsx)("div",{className:Be.a.app,children:Object(A.jsx)(l.a,{children:Object(A.jsxs)(d.a,{className:Be.a.wrap,children:[Object(A.jsxs)("div",{className:Be.a.sidebar,children:[Object(A.jsx)("a",{href:"https://webheroschool.ru",target:"_blank",rel:"noreferrer",className:Be.a.whs__link,children:Object(A.jsx)("div",{className:Be.a.whs__logo})}),Object(A.jsxs)(u.a,{className:Be.a.menulist,children:[Object(A.jsxs)(l.b,{to:"/",exact:!0,className:Be.a.link,activeClassName:Be.a.link__active,children:[Object(A.jsx)(ge.a,{className:Be.a.abouticon}),t("description.about")]}),Object(A.jsxs)(l.b,{to:"/todo",className:Be.a.link,activeClassName:Be.a.link__active,children:[Object(A.jsx)(Oe.a,{className:Be.a.tasksicon}),t("description.tasks")]}),Object(A.jsxs)(l.b,{to:"/contacts",className:Be.a.link,activeClassName:Be.a.link__active,children:[Object(A.jsx)(fe.a,{className:Be.a.contactsicon}),t("description.contacts")]}),Object(A.jsx)("div",{className:Be.a.mode__container,children:Object(A.jsx)("div",{className:Be.a.mode,children:Object(A.jsx)("img",{className:E()((C={},Object(n.a)(C,Be.a.mode__logo,!0),Object(n.a)(C,Be.a.selected__mode,g),C)),src:ve,alt:"ModeLogo",onClick:function(){return h(!g)}})})}),Object(A.jsx)("div",{className:Be.a.lang__container,children:Object(A.jsxs)(m.a,{className:a.formControl,children:[Object(A.jsx)(j.a,{id:"demo-simple-select-autowidth-label",children:t("description.app__lang")}),Object(A.jsxs)(p.a,{labelId:"demo-simple-select-autowidth-label",id:"select",defaultValue:"",displayEmpty:!0,onChange:ze,onClick:function(e){k(e.target.value)},autoWidth:!0,children:[Object(A.jsxs)(b.a,{value:"eng",children:[Object(A.jsx)("img",{src:Ne,alt:"UsaLogo",className:Be.a.usa__logo}),"English"]}),Object(A.jsxs)(b.a,{value:"rus",children:[Object(A.jsx)("img",{src:ke,alt:"russiaLogo",className:Be.a.rus__logo}),"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]})]})]})})]})]}),Object(A.jsxs)(d.a,{className:Be.a.content,children:[Object(A.jsx)(_.a,{path:"/",exact:!0,component:be}),Object(A.jsx)(_.a,{path:"/todo",component:$}),Object(A.jsx)(_.a,{path:"/contacts",component:Ke})]})]})})})})})};i.a.render(Object(A.jsx)(Ge,{}),document.getElementById("root"))},18:function(e,t,a){e.exports={wrap:"About_wrap__2VNko",title:"About_title__1rTh9",login:"About_login__Nei0-",repo__wrapper:"About_repo__wrapper__3aj8A",avatar__wrapper:"About_avatar__wrapper__1IMYv",avatar:"About_avatar__1Y9HT",repo:"About_repo__tTf11",profile:"About_profile__2DPLu",bio:"About_bio__2Hssi",bio__art:"About_bio__art__2TyhW",location:"About_location__3dC4a",location__logo:"About_location__logo__1-dyQ",repoTitle:"About_repoTitle__E5K8K",wrapper:"About_wrapper__17QGv",error__container:"About_error__container__2ehcw",error__logo:"About_error__logo__2lEkJ",error__text:"About_error__text__33dyH"}},39:function(e,t,a){e.exports={footer:"Footer_footer__2GFTH",tasks:"Footer_tasks__19ViO",filter:"Footer_filter__BxRiR",all:"Footer_all__3Nxxa",completed:"Footer_completed__F3uT3",inprogress:"Footer_inprogress__1uorA",delete:"Footer_delete__2_1Dz"}},56:function(e,t,a){e.exports={list:"ItemList_list__4nOI2",empty__wrapper:"ItemList_empty__wrapper__38K9B",empty__logo:"ItemList_empty__logo__1Z92R",empty__text:"ItemList_empty__text__3lYfb","item-enter-active":"ItemList_item-enter-active__nfwyy","item-exit-active":"ItemList_item-exit-active__1jDu8"}},68:function(e,t,a){e.exports={item:"Item_item__3plCH",item__dark:"Item_item__dark__2u3vb",done:"Item_done__3jshH",container:"Item_container__2ydR2",basket:"Item_basket__19HSF",delete:"Item_delete__2YbZF"}},7:function(e,t,a){e.exports={list:"Repositories_list__w8NUm",error__wrapper:"Repositories_error__wrapper__TCLrM",error__text:"Repositories_error__text__2T1hq",error__logo:"Repositories_error__logo__3vZoJ",name:"Repositories_name__3-Tub",name__text:"Repositories_name__text__1SQgE",star__logo:"Repositories_star__logo__2By0r",fork__logo:"Repositories_fork__logo__iEpdw",star:"Repositories_star__1Ulys",fork:"Repositories_fork__1tyOO",count:"Repositories_count__130yh",list__item:"Repositories_list__item__rG1aB",cards:"Repositories_cards__1zykW",info:"Repositories_info__3lJMP",info__language:"Repositories_info__language__1du6a",language:"Repositories_language__1PR9a",language__text:"Repositories_language__text__1YAUO",html:"Repositories_html__2Vs0O",css:"Repositories_css__7ZTBa",js:"Repositories_js__1HtGC",typeScript:"Repositories_typeScript__1vOCT",text:"Repositories_text__2L-83",update:"Repositories_update__1yIxe",nav:"Repositories_nav__3aCvR",button:"Repositories_button__3y8yv",disabled:"Repositories_disabled__3wEqv"}},89:function(e,t,a){e.exports={input:"InputItem_input__3y75H",create:"InputItem_create__Mkdto"}},94:function(e,t,a){e.exports={wrap:"Todo_wrap__1_JVK",title:"Todo_title__1RRpf"}}},[[154,1,2]]]);
//# sourceMappingURL=main.0f713a52.chunk.js.map