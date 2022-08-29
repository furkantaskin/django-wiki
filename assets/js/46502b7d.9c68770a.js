"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[3128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:5,custom_edit_url:null,description:"Django ile statik dosya \xe7ektirme"},l="Statik Dosyalar",o={unversionedId:"django/orm/tutorial5",id:"django/orm/tutorial5",title:"Statik Dosyalar",description:"Django ile statik dosya \xe7ektirme",source:"@site/docs/django/orm/5-tutorial5.mdx",sourceDirName:"django/orm",slug:"/django/orm/tutorial5",permalink:"/django-wiki/docs/django/orm/tutorial5",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,custom_edit_url:null,description:"Django ile statik dosya \xe7ektirme"},sidebar:"tutorialSidebar",previous:{title:"Form Olu\u015fturma",permalink:"/django-wiki/docs/django/orm/tutorial4"},next:{title:"Intermediate Django",permalink:"/django-wiki/docs/category/intermediate-django"}},s={},c=[{value:"Dekorasyon",id:"dekorasyon",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"statik-dosyalar"},"Statik Dosyalar"),(0,i.kt)("p",null,"\xd6nceki k\u0131s\u0131mlar\u0131m\u0131zda ba\u015far\u0131l\u0131 bir \u015fekilde listeleme ve \xe7e\u015fitli form i\u015flemleri yapt\u0131k. Ancak bizim tasar\u0131m\u0131m\u0131z\u0131n baz\u0131 g\xf6rsel dekorasyona ihtiyac\u0131 olacak. Bunlar\u0131 biz \xf6n y\xfczde HTML, CSS ve JS ile yap\u0131yoruz. Peki bunlar\u0131n \xf6n y\xfcze \xe7ekilmesi i\xe7in neler yapmam\u0131z gerekiyor?"),(0,i.kt)("h2",{id:"dekorasyon"},"Dekorasyon"),(0,i.kt)("p",null,"\xd6ncelikle uygulamam\u0131z olan polls klas\xf6r\xfc i\xe7ine bir static klas\xf6r\xfc a\xe7\u0131p i\xe7ine basit\xe7e bir css dosyas\u0131 ekleyece\u011fiz. "),(0,i.kt)("admonition",{title:"\xf6nemli",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Ben bu k\u0131s\u0131mda CSS i\xe7in Sass kullan\u0131yorum. Normal CSS kullanmak isterseniz kullanabilirsiniz.")),(0,i.kt)("p",null,"\xd6ncelikle ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," i\xe7indeki listemizi g\xfczelle\u015ftirmek i\xe7in static i\xe7inde CSS klas\xf6r\xfc olu\u015fturup burada bir dosya a\xe7\u0131p listemizin renkleri ve font b\xfcy\xfckl\xfcklerini \xf6zelle\u015ftiriyoruz."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="apps/polls/static/polls/css/style.scss"',title:'"apps/polls/static/polls/css/style.scss"'},".questionList{\n  li{\n    font-size: 20px;\n    color: red;\n  }\n}\n")),(0,i.kt)("p",null,"S\u0131rada bunu index.html i\xe7ine \xe7ektiriyoruz."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="apps/polls/templates/index.html"',title:'"apps/polls/templates/index.html"'},'{% load static %}\n\n<link rel="stylesheet" href="{% static \'polls/css/style.css\' %}">\n')),(0,i.kt)("p",null,"index.html dosyas\u0131na kar\u015f\u0131l\u0131k gelen sayfam\u0131za gitti\u011fimizde css dosyas\u0131n\u0131n \xe7al\u0131\u015ft\u0131\u011f\u0131n\u0131 g\xf6rebiliriz. "),(0,i.kt)("p",null,"Art\u0131k ba\u015far\u0131l\u0131 bir \u015fekilde temel Django kullanarak arka planda CRUD i\u015flemi yapabilir ve \xf6n tarafta bunu g\xf6sterebiliriz. Yeni \u015feyler \xf6\u011frendik\xe7e buralara ekleyece\u011fim. \u015eimdiden iyi \xe7al\u0131\u015fmalar."))}u.isMDXComponent=!0}}]);