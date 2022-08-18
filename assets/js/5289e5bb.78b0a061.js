"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[7859],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>c});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),d=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(r),c=i,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||a;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function c(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1244:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const a={sidebar_position:6,custom_edit_url:null,description:"Django ile haz\u0131r admin panelini kullanmak"},o="Admin Paneli",l={unversionedId:"django/ilk-proje/adminpanel",id:"django/ilk-proje/adminpanel",title:"Admin Paneli",description:"Django ile haz\u0131r admin panelini kullanmak",source:"@site/docs/django/ilk-proje/adminpanel.mdx",sourceDirName:"django/ilk-proje",slug:"/django/ilk-proje/adminpanel",permalink:"/django-wiki/docs/django/ilk-proje/adminpanel",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,custom_edit_url:null,description:"Django ile haz\u0131r admin panelini kullanmak"},sidebar:"tutorialSidebar",previous:{title:"Model Kullan\u0131m\u0131",permalink:"/django-wiki/docs/django/ilk-proje/newmodel"},next:{title:"Verilerin \xd6n Y\xfczde G\xf6sterilmesi",permalink:"/django-wiki/docs/django/ilk-proje/ondegoster"}},p={},d=[],u={toc:d};function s(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"admin-paneli"},"Admin Paneli"),(0,i.kt)("p",null,"Django kendi i\xe7inde bir admin paneli bulundurur. Bu admin paneline eri\u015fim i\xe7in \xf6ncelikle bir superuser olu\u015fturmam\u0131z gerekir. Bunu yapmak terminal yoluyla \xe7ok kolayd\u0131r."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"py manage.py createsuperuser\n")),(0,i.kt)("p",null,"Sistem bizden burada isim (bo\u015f girilmesi durumunda varsay\u0131lan oturum kullan\u0131c\u0131 ad\u0131), e-posta adresi ve parola isteyecektir. Bunlar\u0131n doldurulmas\u0131 sonras\u0131nda superuser olu\u015fturulacakt\u0131r."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin paneli",src:r(3154).Z,width:"1920",height:"1040"})),(0,i.kt)("p",null,"Burada blog i\xe7indeki veri taban\u0131na eri\u015febilmemiz i\xe7in blog i\xe7inden modelimizi admine kaydetmemiz gerekecektir."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="blog/admin.py"',title:'"blog/admin.py"'},"    from django.contrib import admin\n    # highlight-start\n    from . import models\n    \n    admin.site.register(models.Post)\n    # highlight-end\n")))}s.isMDXComponent=!0},3154:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-adminpanel-7cd8a18eb09178b89390c28dd7f69e70.jpg"}}]);