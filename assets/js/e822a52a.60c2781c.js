"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[9573],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var i=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,i,a=function(e,n){if(null==e)return{};var r,i,a={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=i.createContext({}),s=function(e){var n=i.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var r=e.components,a=e.mdxType,t=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),g=a,p=c["".concat(d,".").concat(g)]||c[g]||m[g]||t;return r?i.createElement(p,o(o({ref:n},u),{},{components:r})):i.createElement(p,o({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=r.length,o=new Array(t);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<t;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},518:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>s});var i=r(7462),a=(r(7294),r(3905));const t={sidebar_position:1,custom_edit_url:null},o="Giri\u015f",l={unversionedId:"python/django/djangogiris",id:"python/django/djangogiris",title:"Giri\u015f",description:"Buraya gelmemizin sebebi Django ile ilerleyebilmek ve kendimi daha iyi noktalara ta\u015f\u0131mak. Bunun i\xe7in Django'yu en iyi \u015fekilde \xf6\u011frenmek gerekiyor. \xc7\xfcnk\xfc en b\xfcy\xfck sebeplerinden bir tanesi Python tabanl\u0131 olmas\u0131 ve web \xfczerindeki eksi\u011fimi Python ile giderebilme imkan\u0131 sunmas\u0131.",source:"@site/docs/python/django/djangogiris.mdx",sourceDirName:"python/django",slug:"/python/django/djangogiris",permalink:"/django-wiki/docs/python/django/djangogiris",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Django",permalink:"/django-wiki/docs/category/django"},next:{title:"MVC Nedir",permalink:"/django-wiki/docs/python/django/mvcnedir"}},d={},s=[{value:"Neden Django",id:"neden-django",level:2},{value:"Django Ger\xe7ekte Nedir",id:"django-ger\xe7ekte-nedir",level:2}],u={toc:s};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"giri\u015f"},"Giri\u015f"),(0,a.kt)("p",null,"Buraya gelmemizin sebebi Django ile ilerleyebilmek ve kendimi daha iyi noktalara ta\u015f\u0131mak. Bunun i\xe7in Django'yu en iyi \u015fekilde \xf6\u011frenmek gerekiyor. \xc7\xfcnk\xfc en b\xfcy\xfck sebeplerinden bir tanesi Python tabanl\u0131 olmas\u0131 ve web \xfczerindeki eksi\u011fimi Python ile giderebilme imkan\u0131 sunmas\u0131."),(0,a.kt)("h2",{id:"neden-django"},"Neden Django"),(0,a.kt)("p",null,"\xd6nceden de s\xf6yledi\u011fim gibi Django Python tabanl\u0131 bir framework. Peki Flask gibi alternatifler varken neden Django tercih ettim.\nBir framework \xf6\u011frenmenin benim programlama \xfczerine olan yetkinli\u011fimi art\u0131raca\u011f\u0131n\u0131 da d\xfc\u015f\xfcnd\xfcm. Ayr\u0131ca \xf6nceden de dedi\u011fim gibi web \xfczerine yeterince kendimi geli\u015ftiremedim ve bu a\xe7\u0131\u011f\u0131 kapatmak i\xe7in Django'nun uygun olaca\u011f\u0131n\u0131 tahmin ediyorum."),(0,a.kt)("p",null,"Burada bir s\xfcreli\u011fine Django tan\u0131t\u0131p sonras\u0131nda kodla ilgili k\u0131s\u0131mlara ge\xe7ece\u011fim."),(0,a.kt)("h2",{id:"django-ger\xe7ekte-nedir"},"Django Ger\xe7ekte Nedir"),(0,a.kt)("p",null,"Django, ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction"},(0,a.kt)("strong",{parentName:"a"},"MDN"))," \xfczerinde de belirtildi\u011fi gibi y\xfcksek seviye ve Python tabanl\u0131 bir web framework\xfcd\xfcr. Django bu k\u0131s\u0131mda h\u0131zl\u0131 bir geli\u015ftirme ve g\xfcvenlik deste\u011fi sa\u011flamaktad\u0131r. Burada MVC yap\u0131s\u0131 yerine MTV yap\u0131s\u0131 kullanmaktad\u0131r. Burada MVC i\xe7in gereken bilgiyi ",(0,a.kt)("a",{parentName:"p",href:"mvcnedir"},(0,a.kt)("strong",{parentName:"a"},"MVC Nedir"))," sayfas\u0131ndan inceleyebilirsiniz. Ancak \u015funu unutmamakta fayda var: Django direkt olarak MVC de\u011fil MVT (Model-View-Template) yap\u0131s\u0131n\u0131 kullan\u0131r."))}m.isMDXComponent=!0}}]);