"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[8338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),i=r(7392),u=r(7094),s=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r;const{lazy:o,block:m,defaultValue:d,values:b,groupId:f,className:k}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===d?d:null!=(t=null!=d?d:null==(r=y.find((e=>e.props.default)))?void 0:r.props.value)?t:y[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:j,setTabGroupChoices:w}=(0,u.U)(),[O,T]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=f){const e=j[f];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,r=E.indexOf(t),n=g[r].value;n!==O&&(P(t),T(n),null!=f&&w(f,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;r=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;r=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},g.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),l=r(5488),o=r(5162);const i={sidebar_position:3,custom_edit_url:null,description:"Go ile \u0130lk Proje"},u="Go ile \u0130lk Proje",s={unversionedId:"go/ilkproje",id:"go/ilkproje",title:"Go ile \u0130lk Proje",description:"Go ile \u0130lk Proje",source:"@site/docs/go/3-ilkproje.mdx",sourceDirName:"go",slug:"/go/ilkproje",permalink:"/django-wiki/docs/go/ilkproje",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,custom_edit_url:null,description:"Go ile \u0130lk Proje"},sidebar:"tutorialSidebar",previous:{title:"Go Kurulumu",permalink:"/django-wiki/docs/go/baslangic"}},c={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-ile-i\u0307lk-proje"},"Go ile \u0130lk Proje"),(0,a.kt)("p",null,"\xd6ncelikle ilk proje i\xe7in init i\u015flemi gerekiyor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go mod init example/hello\n")),(0,a.kt)("p",null,"Bu koddan sonra bir go.mod dosyas\u0131n\u0131n klas\xf6re eklenmesi gerekiyor. S\u0131rada sisteme hello.go isimli bir dosya olu\u015fturmas\u0131 kald\u0131. Dosyay\u0131 olu\u015fturdu\u011fumuzda bu k\u0131s\u0131mda VSCode kullan\u0131yorsak IntelliSense \xe7al\u0131\u015fmayabilir. Bunu etkinle\u015ftirmek i\xe7in workspace veya user i\xe7in settings.json i\xe7ine \u015fu sat\u0131r\u0131 eklemeniz yeterli:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"go.useLanguageServer": true\n')),(0,a.kt)("p",null,"Art\u0131k yapaca\u011f\u0131m\u0131z \u015feyler temel i\u015flemler. Basit\xe7e bir hello world uygulamas\u0131 yap\u0131yoruz."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"go",label:"main.go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'  package main\n\n  import "fmt"\n\n  func main(){\n    fmt.Println("Hello World")\n  }\n'))),(0,a.kt)(o.Z,{value:"cpp",label:"main.cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include <iostream>\nusing namespace std;\n\nint main(){\n  cout << "Hello World";\n\n  return 0;\n}\n    \n')))),(0,a.kt)("p",null,"Asl\u0131nda fark\u0131ndaysak C ailesine benzer bir yap\u0131s\u0131 var. Ancak yaz\u0131m\u0131 bir t\u0131k daha rahat. Python ile C aras\u0131 bir yap\u0131 g\xf6r\xfcyoruz."))}d.isMDXComponent=!0}}]);