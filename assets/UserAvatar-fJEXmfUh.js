import{_ as y}from"./PageContainer--2tEWLm_.js";import{u as E,r as _,o as l,c as i,b as o,d as s,z as S,e as r,f as d,bO as w,E as h,C as b,aP as f,bP as x,p as A,k as B,g as I}from"./index-Bme4T119.js";import{_ as C,E as R}from"./_plugin-vue_export-helper-DMoyYzE6.js";import{E as z}from"./el-progress-F8jzW0XY.js";import"./el-message-CbUzT_cB.js";import"./isEqual-BfUd6IH5.js";const N=t=>(A("data-v-6ee25485"),t=t(),B(),t),V=["src"],F=N(()=>I("br",null,null,-1)),P={__name:"UserAvatar",setup(t){const c=E(),a=_(c.user.user_pic),n=_(),m=u=>{const e=new FileReader;e.readAsDataURL(u.raw),e.onload=()=>{a.value=e.result,console.log(a.value)}},v=async()=>{await w(a.value),await c.getUser(),h.success("头像更新成功")};return(u,e)=>{const g=b,k=z,p=R,U=y;return l(),i(U,{title:"更换头像"},{default:o(()=>[s(k,{ref_key:"uploadRef",ref:n,"auto-upload":!1,class:"avatar-uploader","show-file-list":!1,"on-change":m},{default:o(()=>[a.value?(l(),S("img",{key:0,src:a.value,class:"avatar"},null,8,V)):(l(),i(g,{key:1,class:"avatar-uploader-icon"},{default:o(()=>[s(r(f))]),_:1}))]),_:1},512),F,s(p,{onClick:e[0]||(e[0]=$=>n.value.$el.querySelector("input").click()),type:"primary",icon:r(f),size:"large"},{default:o(()=>[d("选择图片")]),_:1},8,["icon"]),s(p,{onClick:v,type:"success",icon:r(x),size:"large"},{default:o(()=>[d("上传头像")]),_:1},8,["icon"])]),_:1})}}},j=C(P,[["__scopeId","data-v-6ee25485"]]);export{j as default};
