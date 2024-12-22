import{x as w,y as a,u as p,i as x,r as l,j as s,k as j,z as f}from"./index-8b8b7948.js";import{S as b}from"./SubHeader-f8db0a6f.js";import{y as d,u as _,a as v,F as y,I as n}from"./InputFormItem-0386d560.js";import{u as N}from"./useDispatch-f8abbc8a.js";const S=w().shape({amount:d.integer(a("entities.transaction.fields.amount"),{required:!0,min:20}),withdrawPassword:d.string(a("user.fields.withdrawPassword"),{required:!0})});function D(){var r;const e=p(x.selectCurrentUser),t=N();l.useEffect(()=>{},[e]);const o=({amount:u,withdrawPassword:m})=>{const h={status:"pending",date:new Date,user:e?e.id:null,type:"withdraw",amount:u,vip:e,withdrawPassword:m};t(j.doRefreshCurrentUser()),t(f.doCreate(h))},[c]=l.useState({amount:""}),i=_({resolver:v.yupResolver(S),mode:"onSubmit",defaultValues:c});return s.jsxs("div",{children:[s.jsx(b,{title:"WithDraw",path:"/"}),s.jsxs("div",{className:"withdraw__page",children:[s.jsxs("div",{className:"withdraw__content",children:[s.jsxs("div",{className:"withdraw__header",children:[s.jsx("h3",{className:"hall",style:{paddingTop:0},children:"Withdraw Amount:"}),s.jsxs("span",{style:{color:"black",fontSize:"14px"},children:["Availabe balance : ",((r=e==null?void 0:e.balance)==null?void 0:r.toFixed(2))||0," Usdt"]})]}),s.jsx(y,{...i,children:s.jsx("form",{onSubmit:i.handleSubmit(o),children:s.jsxs("div",{children:[s.jsx(n,{type:"text",name:"amount",placeholder:a("entities.transaction.fields.amount"),className:"input__withdraw"}),s.jsxs("div",{className:"number__click",children:[s.jsx("h3",{className:"hall",style:{paddingTop:0},children:"Withdraw Password:"}),s.jsx(n,{type:"text",name:"withdrawPassword",placeholder:a("user.fields.withdrawPassword"),className:"input__withdraw"})]}),e.withdraw?s.jsx("button",{className:"confirm",type:"submit",children:"Confirm"}):s.jsx("button",{className:"confirm",disabled:!0,children:"Confirm"})]})})})]}),s.jsxs("div",{className:"withdraw__rules",children:[s.jsx("div",{className:"rules__title",children:"Rules Description"}),s.jsxs("ul",{className:"rules__list",children:[s.jsx("li",{children:"(1) minimum withdraw is 20 USDT"}),s.jsx("li",{children:"(2) The payment shall be made with 48 hours after withdrawal application is approved"}),s.jsx("li",{children:"(3) incomplete daily order submission is subjected to no withdrawal, all products must be submitted for withdrawal"})]})]})]})]})}export{D as default};