"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[5169],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>p});var i=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,i,n=function(e,r){if(null==e)return{};var a,i,n={},t=Object.keys(e);for(i=0;i<t.length;i++)a=t[i],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)a=t[i],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),m=function(e){var r=i.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},u=function(e){var r=m(e.components);return i.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},c=i.forwardRef((function(e,r){var a=e.components,n=e.mdxType,t=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(a),p=n,k=c["".concat(d,".").concat(p)]||c[p]||s[p]||t;return a?i.createElement(k,l(l({ref:r},u),{},{components:a})):i.createElement(k,l({ref:r},u))}));function p(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var t=a.length,l=new Array(t);l[0]=c;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<t;m++)l[m]=a[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4385:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>t,metadata:()=>o,toc:()=>m});var i=a(7462),n=(a(7294),a(3905));const t={sidebar_position:2,custom_edit_url:null,description:"Temelde Programlama Nedir"},l="Ger\xe7ekten Nedir Bu Programlama Dili?",o={unversionedId:"python/temelbilgiler",id:"python/temelbilgiler",title:"Ger\xe7ekten Nedir Bu Programlama Dili?",description:"Temelde Programlama Nedir",source:"@site/docs/python/2-temelbilgiler.mdx",sourceDirName:"python",slug:"/python/temelbilgiler",permalink:"/django-wiki/docs/python/temelbilgiler",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,custom_edit_url:null,description:"Temelde Programlama Nedir"},sidebar:"tutorialSidebar",previous:{title:"Giri\u015f",permalink:"/django-wiki/docs/python/giris"},next:{title:"Django",permalink:"/django-wiki/docs/category/django"}},d={},m=[],u={toc:m};function s(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ger\xe7ekten-nedir-bu-programlama-dili"},"Ger\xe7ekten Nedir Bu Programlama Dili?"),(0,n.kt)("p",null,"Bu sekt\xf6re ilk defa ad\u0131m at\u0131nca asl\u0131nda bir\xe7o\u011fumuz terminoloji ve olaylar\u0131n mant\u0131\u011f\u0131ndan uzak kald\u0131\u011f\u0131m\u0131z i\xe7in bir\xe7ok defa t\xf6kezliyoruz. Bu yolda kimisi vazge\xe7erken kimisi yorulsa da devam ediyor. \u0130\u015fte bu s\xfcre\xe7te elimizden tutacak birisinin olmas\u0131 her zaman \xf6nemli. Benim buradaki amac\u0131m ise programlama dili ve Python'\u0131 ger\xe7ekten tan\u0131mak. "),(0,n.kt)("p",null,"Programlama dilinin bizim g\xfcnl\xfck hayattaki lisan ile hi\xe7bir fark\u0131 yok. En \xf6zet hali ile insanlar ile makineler aras\u0131nda (bunu sadece bilgisayar olarak k\u0131s\u0131tlamak do\u011fru olmaz) ileti\u015fimi sa\u011flayan ve insanlar\u0131n olu\u015fturdu\u011fu \xe7e\u015fitli mant\u0131ksal ad\u0131mlar\u0131 - ki biz genelde bunlara algoritma diyoruz - bilgisayara aktarmada yard\u0131mc\u0131 olan bilgisayar dilidir. "),(0,n.kt)("admonition",{title:"D\u0130KKATE DE\u011eER",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Burada fark\u0131ndaysak bir bilgisayar dili terimi kulland\u0131k. Asl\u0131nda bilgisayarlar ile sadece programlama dili ile ileti\u015fime ge\xe7meyiz. Burada betik dilleri (\xf6rnek olarak PHP bir scripting language olarak ge\xe7er) veya komut dilleri (command language ki en bariz \xf6rne\u011fi shell veya nam-\u0131 di\u011fer kabuktur) gibi \xe7ok fazla se\xe7enek vard\u0131r. Programlama dilleri, karakteristikleri ile burada di\u011fer dillerden ayr\u0131l\u0131r. ")),(0,n.kt)("p",null,"Nota istinaden a\xe7\u0131klamak gerekirse e\u011fer ge\xe7mi\u015ften g\xfcn\xfcm\xfcze ileti\u015fim ara\xe7lar\u0131 de\u011fi\u015fkenlik g\xf6sterdi. Duman ve hiyeroglif gibi say\u0131s\u0131z t\xfcr varken g\xfcn\xfcm\xfczde kullan\u0131lan s\xf6zl\xfc dil bunun bir par\xe7as\u0131 oldu. Programlama dili de bilgisayarla insanlar aras\u0131ndaki ileti\u015fim kanallar\u0131ndan birisi olarak duruyor. Asl\u0131nda g\xfcn\xfcm\xfczdeki dillere de \xe7ok benzer."))}s.isMDXComponent=!0}}]);