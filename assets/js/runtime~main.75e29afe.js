(()=>{"use strict";var e,a,c,t,r,d={},f={};function o(e){var a=f[e];if(void 0!==a)return a.exports;var c=f[e]={exports:{}};return d[e].call(c.exports,c,c.exports,o),c.exports}o.m=d,e=[],o.O=(a,c,t,r)=>{if(!c){var d=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],r=e[i][2];for(var f=!0,b=0;b<c.length;b++)(!1&r||d>=r)&&Object.keys(o.O).every((e=>o.O[e](c[b])))?c.splice(b--,1):(f=!1,r<d&&(d=r));if(f){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,t,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var d={};a=a||[null,c({}),c([]),c(c)];for(var f=2&t&&e;"object"==typeof f&&!~a.indexOf(f);f=c(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,o.d(r,d),r},o.d=(e,a)=>{for(var c in a)o.o(a,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,c)=>(o.f[c](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",175:"394985c4",639:"74cbc555",948:"8717b14a",1550:"b385a7d4",1914:"d9f32620",1971:"764ed899",2104:"1d494b7a",2109:"c3c5a938",2267:"59362658",2338:"c8f968c0",2362:"e273c56f",2535:"814f3328",2741:"e076a309",3085:"1f391b9e",3089:"a6aa9e1f",3173:"1721e7a8",3514:"73664a40",3608:"9e4087bc",4004:"c0cb6342",4013:"01a85c17",4195:"c4f5d8e4",4432:"162c7d21",4527:"8c7dc8d3",4800:"b8d56728",5062:"4a693ac1",5641:"a24b4b53",5665:"8b42d1df",6063:"c7d71666",6103:"ccc49370",6227:"f88e2e71",6691:"b789bce5",7095:"9149a935",7272:"db51eab4",7288:"cd543d85",7414:"393be207",7426:"530ee827",7729:"4d25205a",7754:"e6aeeece",7761:"2cec2cb4",7859:"5289e5bb",7904:"da82a528",7918:"17896441",8335:"da389812",8481:"a6a60f23",8610:"6875c492",8636:"f4f34a3a",8885:"987fa068",9003:"925b3f96",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9817:"14eb3368"}[e]||e)+"."+{53:"3886c329",175:"2cdc6ef5",639:"09359e82",948:"977862a3",1550:"559979fc",1914:"7369c3d1",1971:"6793a487",2104:"82dbd008",2109:"7c85332b",2267:"0f5b7bac",2338:"73813937",2362:"dd8c58da",2529:"4265d64c",2535:"d16df326",2741:"b0950b3f",3085:"e21f5097",3089:"ec932205",3173:"2cce5df7",3514:"35647cfe",3608:"4c0b43ee",4004:"2a986129",4013:"e2e8d5fe",4195:"067d8383",4432:"9b36cd35",4527:"b9ca7856",4800:"7a06c64f",4972:"b30ec84f",5062:"51c47f41",5172:"9e7c3e3b",5641:"c1f4d67f",5665:"acda19e0",6063:"3c34de1a",6103:"63c9224c",6227:"f519a341",6691:"7b2710c3",7095:"4fd642f9",7272:"12fc2cf0",7288:"3ec180fa",7414:"7a27a01b",7426:"c5c52fa0",7654:"c05a8824",7729:"5f99137d",7754:"525318fe",7761:"73777b94",7859:"78b0a061",7904:"3878a07c",7918:"b2e0d7fb",8335:"c0419347",8481:"e859e7eb",8610:"b43ee5ae",8636:"6673eda7",8885:"2a26828c",9003:"7aa9b918",9514:"8668dce3",9642:"8395605e",9671:"2c43a907",9817:"ef6e814c"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="django-wiki:",o.l=(e,a,c,d)=>{if(t[e])t[e].push(a);else{var f,b;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){f=u;break}}f||(b=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.setAttribute("data-webpack",r+c),f.src=e),t[e]=[a];var l=(a,c)=>{f.onerror=f.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),b&&document.head.appendChild(f)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/django-wiki/",o.gca=function(e){return e={17896441:"7918",59362658:"2267","935f2afb":"53","394985c4":"175","74cbc555":"639","8717b14a":"948",b385a7d4:"1550",d9f32620:"1914","764ed899":"1971","1d494b7a":"2104",c3c5a938:"2109",c8f968c0:"2338",e273c56f:"2362","814f3328":"2535",e076a309:"2741","1f391b9e":"3085",a6aa9e1f:"3089","1721e7a8":"3173","73664a40":"3514","9e4087bc":"3608",c0cb6342:"4004","01a85c17":"4013",c4f5d8e4:"4195","162c7d21":"4432","8c7dc8d3":"4527",b8d56728:"4800","4a693ac1":"5062",a24b4b53:"5641","8b42d1df":"5665",c7d71666:"6063",ccc49370:"6103",f88e2e71:"6227",b789bce5:"6691","9149a935":"7095",db51eab4:"7272",cd543d85:"7288","393be207":"7414","530ee827":"7426","4d25205a":"7729",e6aeeece:"7754","2cec2cb4":"7761","5289e5bb":"7859",da82a528:"7904",da389812:"8335",a6a60f23:"8481","6875c492":"8610",f4f34a3a:"8636","987fa068":"8885","925b3f96":"9003","1be78505":"9514","7661071f":"9642","0e384e19":"9671","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,c)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((c,r)=>t=e[a]=[c,r]));c.push(t[2]=r);var d=o.p+o.u(a),f=new Error;o.l(d,(c=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;f.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",f.name="ChunkLoadError",f.type=r,f.request=d,t[1](f)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,c)=>{var t,r,d=c[0],f=c[1],b=c[2],n=0;if(d.some((a=>0!==e[a]))){for(t in f)o.o(f,t)&&(o.m[t]=f[t]);if(b)var i=b(o)}for(a&&a(c);n<d.length;n++)r=d[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},c=self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();