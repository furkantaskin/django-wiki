(()=>{"use strict";var e,a,t,f,r,d={},c={};function o(e){var a=c[e];if(void 0!==a)return a.exports;var t=c[e]={exports:{}};return d[e].call(t.exports,t,t.exports,o),t.exports}o.m=d,e=[],o.O=(a,t,f,r)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var c=!0,b=0;b<t.length;b++)(!1&r||d>=r)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(c=!1,r<d&&(d=r));if(c){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var d={};a=a||[null,t({}),t([]),t(t)];for(var c=2&f&&e;"object"==typeof c&&!~a.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,o.d(r,d),r},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",175:"394985c4",308:"cd5fd9d0",774:"46ea1346",948:"8717b14a",1550:"b385a7d4",1798:"19e4bf36",1914:"d9f32620",1919:"1d2f1e07",2204:"7cbb947a",2267:"59362658",2362:"e273c56f",2535:"814f3328",2741:"e076a309",3080:"60dc0fda",3085:"1f391b9e",3089:"a6aa9e1f",3173:"1721e7a8",3514:"73664a40",3608:"9e4087bc",4004:"c0cb6342",4013:"01a85c17",4165:"a793739f",4195:"c4f5d8e4",4800:"b8d56728",5062:"4a693ac1",5641:"a24b4b53",6063:"c7d71666",6103:"ccc49370",6227:"f88e2e71",6677:"e986d1c0",6725:"712df1a1",7272:"db51eab4",7288:"cd543d85",7414:"393be207",7426:"530ee827",7631:"1b3b783e",7729:"4d25205a",7754:"e6aeeece",7904:"da82a528",7918:"17896441",8222:"0ad324d8",8517:"e512def3",8610:"6875c492",8636:"f4f34a3a",9003:"925b3f96",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9817:"14eb3368"}[e]||e)+"."+{53:"98293e12",175:"2cdc6ef5",308:"f85bfe1e",774:"ed66c4eb",948:"977862a3",1550:"559979fc",1798:"a5b891dc",1914:"7369c3d1",1919:"97bd84c0",2204:"f742e265",2267:"0f5b7bac",2362:"dd8c58da",2529:"4265d64c",2535:"d16df326",2741:"b0950b3f",3080:"5e7bcfb4",3085:"e21f5097",3089:"ec932205",3173:"2cce5df7",3514:"35647cfe",3608:"4c0b43ee",4004:"2a986129",4013:"e2e8d5fe",4165:"ea5668c1",4195:"f9291bd3",4800:"7a06c64f",4972:"b30ec84f",5062:"51c47f41",5172:"9e7c3e3b",5641:"c1f4d67f",6063:"3c34de1a",6103:"63c9224c",6227:"d528f403",6677:"9b0b2397",6725:"bd363838",7272:"12fc2cf0",7288:"f6736ae0",7414:"7a27a01b",7426:"c5c52fa0",7631:"ae546465",7654:"c05a8824",7729:"5f99137d",7754:"525318fe",7904:"3878a07c",7918:"b2e0d7fb",8222:"d0c6054c",8517:"53c0e470",8610:"b43ee5ae",8636:"6673eda7",9003:"7aa9b918",9514:"8668dce3",9642:"8395605e",9671:"912cb587",9817:"ef6e814c"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="django-wiki:",o.l=(e,a,t,d)=>{if(f[e])f[e].push(a);else{var c,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){c=u;break}}c||(b=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+t),c.src=e),f[e]=[a];var l=(a,t)=>{c.onerror=c.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),b&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/django-wiki/",o.gca=function(e){return e={17896441:"7918",59362658:"2267","935f2afb":"53","394985c4":"175",cd5fd9d0:"308","46ea1346":"774","8717b14a":"948",b385a7d4:"1550","19e4bf36":"1798",d9f32620:"1914","1d2f1e07":"1919","7cbb947a":"2204",e273c56f:"2362","814f3328":"2535",e076a309:"2741","60dc0fda":"3080","1f391b9e":"3085",a6aa9e1f:"3089","1721e7a8":"3173","73664a40":"3514","9e4087bc":"3608",c0cb6342:"4004","01a85c17":"4013",a793739f:"4165",c4f5d8e4:"4195",b8d56728:"4800","4a693ac1":"5062",a24b4b53:"5641",c7d71666:"6063",ccc49370:"6103",f88e2e71:"6227",e986d1c0:"6677","712df1a1":"6725",db51eab4:"7272",cd543d85:"7288","393be207":"7414","530ee827":"7426","1b3b783e":"7631","4d25205a":"7729",e6aeeece:"7754",da82a528:"7904","0ad324d8":"8222",e512def3:"8517","6875c492":"8610",f4f34a3a:"8636","925b3f96":"9003","1be78505":"9514","7661071f":"9642","0e384e19":"9671","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var f=o.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var d=o.p+o.u(a),c=new Error;o.l(d,(t=>{if(o.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",c.name="ChunkLoadError",c.type=r,c.request=d,f[1](c)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,d=t[0],c=t[1],b=t[2],n=0;if(d.some((a=>0!==e[a]))){for(f in c)o.o(c,f)&&(o.m[f]=c[f]);if(b)var i=b(o)}for(a&&a(t);n<d.length;n++)r=d[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},t=self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();