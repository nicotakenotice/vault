import{a as d}from"./chunk-RYSMVF6E.js";import{a as c}from"./chunk-LF5XB4YN.js";import{e as l}from"./chunk-JHI3MBHO.js";var h=()=>d.get("experimentalCloseWatcher",!1)&&c!==void 0&&"CloseWatcher"in c,p=()=>{document.addEventListener("backbutton",()=>{})},E=()=>{let r=document,s=!1,a=()=>{if(s)return;let n=0,o=[],u=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(e,t){o.push({priority:e,handler:t,id:n++})}}});r.dispatchEvent(u);let f=e=>l(void 0,null,function*(){try{if(e?.handler){let t=e.handler(i);t!=null&&(yield t)}}catch(t){console.error(t)}}),i=()=>{if(o.length>0){let e={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};o.forEach(t=>{t.priority>=e.priority&&(e=t)}),s=!0,o=o.filter(t=>t.id!==e.id),f(e).then(()=>s=!1)}};i()};if(h()){let n,o=()=>{n?.destroy(),n=new c.CloseWatcher,n.onclose=()=>{a(),o()}};o()}else r.addEventListener("backbutton",a)},m=100,v=99;export{h as a,p as b,E as c,m as d,v as e};
