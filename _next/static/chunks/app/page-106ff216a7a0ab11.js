(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8386:(e,s,t)=>{Promise.resolve().then(t.bind(t,7238))},7238:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var n=t(5155),a=t(2115);let i=[{name:"DiseaseAtlas",subitems:[{name:"components",subitems:[{name:"DiseaseAtlasAssociatedPopup.js"},{name:"DiseaseAtlasTreeFolder.js"}]},{name:"store",subitems:[{name:"reducer.js"},{name:"saga.js"},{name:"selectors.js"}]},{name:"backend",subitems:[{name:"index.php"},{name:"db.php"}]},{name:"nodejs",subitems:[{name:"api",subitems:[{name:"get.js"},{name:"post.js"},{name:"patch.js"}]}]},{name:"DiseaseAtlasPage.js"},{name:"DiseaseAtlasPage.css"},{name:"Utils.js"}]},{name:"FindRelated"}],l=()=>new Promise(e=>{setTimeout(()=>{e(i)},1e3)});var m=t(5565);let r="/icons/file.png",u="/icons/empty_folder.png",c=e=>{let{node:s}=e,[t,i]=(0,a.useState)(!1),[l,d]=(0,a.useState)(r);return((0,a.useEffect)(()=>{s.subitems?s.subitems.some(e=>e.subitems)?d("/icons/folder.png"):d(u):s.name.includes(".")?d(r):d(u)},[]),s.subitems)?(0,n.jsxs)("li",{style:{listStyle:"none"},children:[(0,n.jsxs)("span",{onClick:()=>{i(!t)},style:{cursor:"pointer"},children:[(0,n.jsx)(m.default,{src:l,alt:"icon",width:14,height:14})," ",s.name]}),t&&s.subitems&&(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:s.subitems.map((e,s)=>(0,n.jsx)(c,{node:e},s))})]}):(0,n.jsxs)("li",{style:{listStyle:"none"},children:[(0,n.jsx)(m.default,{src:l,alt:"icon",width:14,height:14})," ",s.name]})},d=e=>{let{tree:s}=e;return(0,n.jsx)("ul",{children:s.map((e,s)=>(0,n.jsx)(c,{node:e},s))})};function o(){let[e,s]=(0,a.useState)(null);return(0,a.useEffect)(()=>{(async()=>{s(await l())})()},[]),(0,n.jsx)("main",{children:(0,n.jsx)("aside",{children:e?(0,n.jsx)(d,{tree:e}):"Loading..."})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[565,441,517,358],()=>s(8386)),_N_E=e.O()}]);