import{u as c,f as u,h as f,r as l,i as T,v as z,j as s,L as x,C as E,k as $}from"./index-8b8b7948.js";import{L as F}from"./LoadingModal-8550f909.js";import{u as I}from"./useDispatch-f8abbc8a.js";function W(){var p;const r=I(),d=c(u.selectRows),_=c(f.selectRows),t=c((p=f)==null?void 0:p.selectLoading),[j,g]=l.useState(!0),v=c(u.selectLoading),[N,m]=l.useState(!1),h=c(T.selectCurrentUser),y=async()=>{},[i,w]=l.useState(null),b=()=>{const e={timeZone:"America/Los_Angeles"};return new Date().toLocaleString("en-US",e)},k=()=>{r(E.doFetch())};l.useEffect(()=>{k(),y(),r(z.doFetch()),b()},[r]);const S=()=>{m(!1)},C=a=>{w(a),m(!0)},L=[{icon:"fa-regular fa-building",text:"About",link:"/company"},{icon:"fa-solid fa-file-contract",text:"T&C",link:"/tc"},{icon:"fa fa-certificate",text:"Certificate",link:"/Certificate"},{icon:"fa-solid fa-question",text:"FAQs",link:"/faqs"},{icon:"fa fa-user-plus",text:"Invitation",link:"/invitation"}],D=a=>{const e={vip:a};r($.doUpdateProfileMobile(e))},U=({text:a})=>s.jsx("div",{className:"news-ticker-container",children:s.jsx("div",{className:"news-ticker",children:s.jsx("span",{children:a})})}),[A,R]=l.useState(0),M=["https://koozaimarketing.com/member/assets/images/01.gif"];return l.useEffect(()=>{}),s.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[s.jsx("div",{className:"market__header",children:!t&&_.map(a=>{var e;return s.jsx("img",{src:(e=a==null?void 0:a.photo[0])==null?void 0:e.downloadUrl,alt:"",className:"logo__header"})})}),s.jsx("div",{className:"advertise__header",children:M.map((a,e)=>s.jsx("div",{style:{display:e===A?"block":"none"},children:s.jsx("img",{src:a,alt:`Image ${e+1}`,className:"image"})},e))}),s.jsxs("div",{className:"home__section",children:[s.jsxs("div",{className:"advertise__speaker",children:[s.jsx("div",{children:s.jsx("i",{className:"fa-solid fa-volume-off speaker"})}),s.jsx("div",{className:"marquee",children:s.jsx("span",{children:"Dear users, welcome to join us. The daily working hours are from 10:00 am to 23:00 pm Eastern. If you keep working for 4 days, you will be paid 200$. If you keep working for 7 days, you can get 500$. If you keep working for 10 days, you will be paid 1,000 USD. If you stay on the job for 20 days, you will be paid $2,500. If you stay on the job for 30 days, you will be paid $3,500"})}),s.jsx(U,{text:""})]}),s.jsxs("div",{className:"advertise__buttons",children:[s.jsx(x,{to:"/online",className:"button__deposit",style:{textDecoration:"none"},children:s.jsx("div",{children:"Deposit"})}),s.jsxs(x,{to:"/withdraw",className:"button__withdraw",style:{textDecoration:"none"},children:[" ","Withdraw"]})]}),s.jsx("div",{className:"adverstise__actions",children:L.map(a=>s.jsx(x,{to:a.link,className:"remove__ligne",children:s.jsxs("div",{className:"button__action",children:[s.jsx("div",{className:"action__cirlce",children:s.jsx("i",{className:`${a.icon} icon__action`})}),s.jsx("label",{htmlFor:"",className:"action__label",children:a.text})]})}))}),s.jsxs("div",{className:"advertise__content",children:[s.jsxs("div",{className:"content__header",children:[s.jsx("h3",{className:"hall",children:"Business Hall"}),v&&s.jsx(F,{}),!v&&d&&s.jsx("div",{className:"content__vip",children:d==null?void 0:d.map((a,e)=>{var o,n;return s.jsxs("div",{className:"vip",onClick:()=>C(a),children:[((o=h==null?void 0:h.vip)==null?void 0:o.id)===a.id?s.jsx("div",{className:"success__vip"}):s.jsx("div",{className:"subscribe__"}),s.jsx("div",{className:"vip__image",children:s.jsx("img",{src:(n=a==null?void 0:a.photo[0])==null?void 0:n.downloadUrl,alt:"Vip__image",className:"vip__level"})}),s.jsxs("div",{className:"vip__text",children:[s.jsx("div",{className:"vip__title",children:a==null?void 0:a.title}),s.jsxs("div",{className:"vip__price",children:["USDT ",a==null?void 0:a.levellimit]}),s.jsxs("div",{className:"vip__details",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"● "}),a.comisionrate,"% commission per data"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"● "}),a.commissionmergedata,"% commission for merge data"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"● "}),"Limited to ",a.tasksperday," data per set,"," ",a==null?void 0:a.setperday," sets of data everyday"]}),(a==null?void 0:a.withdrawlimit)&&s.jsxs("div",{children:[s.jsx("strong",{children:"● "}),"Withdrawal limit: ",a==null?void 0:a.withdrawlimit]}),s.jsxs("div",{children:[s.jsx("strong",{children:"● "}),a==null?void 0:a.withdrawperday," times of withdrawal"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"● "}),a==null?void 0:a.handlingfee,"% handling fee"]})]})]})]},e)})})]}),s.jsx("div",{className:"content__footer"})]})]}),i&&N&&s.jsx("div",{className:"modal__grap",children:s.jsx("div",{className:"modal__product",children:s.jsxs("div",{className:"single__product",children:[s.jsx("div",{className:"single__header",children:i==null?void 0:i.title}),s.jsxs("div",{className:"order__time",children:[s.jsxs("div",{style:{fontSize:20},children:["Level Limit: ",i==null?void 0:i.levellimit]}),s.jsxs("div",{style:{fontSize:20},children:["Data per set: ",i==null?void 0:i.dailyorder]}),s.jsxs("div",{style:{fontSize:20},children:["Commission Rate: ",i==null?void 0:i.comisionrate,"%"]})]}),s.jsx("div",{className:"badge__ pending",children:s.jsx("label",{children:"Pending"})}),s.jsxs("div",{className:"bottom__submit",children:[s.jsx("div",{className:"submit__ligne"}),s.jsxs("div",{className:"sumbit__buttons",children:[s.jsx("div",{className:"cancel__product",onClick:()=>S(),children:"Cancel"}),s.jsx("div",{className:"submit__product",onClick:()=>D(i),children:"Upgrage"})]})]})]})})}),j&&s.jsx("div",{className:"big__modal",children:s.jsxs("div",{className:"modal__time",children:[_.map(a=>{var e,o,n;return s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"modal__companyname",children:a.name}),!t&&((e=a==null?void 0:a.photo[0])==null?void 0:e.downloadUrl)&&s.jsx("img",{src:(o=a==null?void 0:a.photo[0])==null?void 0:o.downloadUrl,alt:"",style:{width:190}}),!t&&!((n=a==null?void 0:a.photo[0])!=null&&n.downloadUrl)&&s.jsx("img",{src:"/images/invitation/logo.png",alt:"",className:"invitation__"})]})}),s.jsx("div",{className:"time__",children:"Each time user completed a set of optimisation tasks, they can immedialy approch the platform's customer serivice to receive a random bonus"}),s.jsx("div",{className:"close",onClick:()=>g(!j),children:s.jsx("i",{className:"fa fa-close closa"})})]})})]})}export{W as default};