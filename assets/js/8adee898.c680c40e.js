"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[9359],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>p});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=a.createContext({}),d=function(e){var n=a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(r),p=t,k=m["".concat(u,".").concat(p)]||m[p]||c[p]||l;return r?a.createElement(k,i(i({ref:n},s),{},{components:r})):a.createElement(k,i({ref:n},s))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,n,r)=>{r.d(n,{Z:()=>i});var a=r(7294),t=r(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,t.Z)(l,i),hidden:r},n)}},5488:(e,n,r)=>{r.d(n,{Z:()=>p});var a=r(7462),t=r(7294),l=r(6010),i=r(2389),o=r(7392),u=r(7094),d=r(2466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){var n,r;const{lazy:i,block:m,defaultValue:p,values:k,groupId:g,className:f}=e,b=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:b.map((e=>{let{props:{value:n,label:r,attributes:a}}=e;return{value:n,label:r,attributes:a}})),v=(0,o.l)(y,((e,n)=>e.value===n.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===p?p:null!=(n=null!=p?p:null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)?n:b[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:j}=(0,u.U)(),[N,O]=(0,t.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=g){const e=w[g];null!=e&&e!==N&&y.some((n=>n.value===e))&&O(e)}const C=e=>{const n=e.currentTarget,r=T.indexOf(n),a=y[r].value;a!==N&&(E(n),O(a),null!=g&&j(g,String(a)))},P=e=>{var n;let r=null;switch(e.key){case"ArrowRight":{var a;const n=T.indexOf(e.currentTarget)+1;r=null!=(a=T[n])?a:T[0];break}case"ArrowLeft":{var t;const n=T.indexOf(e.currentTarget)-1;r=null!=(t=T[n])?t:T[T.length-1];break}}null==(n=r)||n.focus()};return t.createElement("div",{className:(0,l.Z)("tabs-container",s)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},y.map((e=>{let{value:n,label:r,attributes:i}=e;return t.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>T.push(e),onKeyDown:P,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===n})}),null!=r?r:n)}))),i?(0,t.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function p(e){const n=(0,i.Z)();return t.createElement(m,(0,a.Z)({key:String(n)},e))}},4482:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=r(7462),t=(r(7294),r(3905)),l=r(5488),i=r(5162);const o={sidebar_position:2,custom_edit_url:null,description:"Go i\xe7erisinde d\xf6ng\xfcler ve yap\u0131lar\u0131"},u="D\xf6ng\xfcler",d={unversionedId:"go/temelbilgiler/donguler",id:"go/temelbilgiler/donguler",title:"D\xf6ng\xfcler",description:"Go i\xe7erisinde d\xf6ng\xfcler ve yap\u0131lar\u0131",source:"@site/docs/go/temelbilgiler/2-donguler.mdx",sourceDirName:"go/temelbilgiler",slug:"/go/temelbilgiler/donguler",permalink:"/django-wiki/docs/go/temelbilgiler/donguler",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,custom_edit_url:null,description:"Go i\xe7erisinde d\xf6ng\xfcler ve yap\u0131lar\u0131"},sidebar:"tutorialSidebar",previous:{title:"Temel Kavramlar",permalink:"/django-wiki/docs/go/temelbilgiler/gotemel"}},s={},c=[],m={toc:c};function p(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"d\xf6ng\xfcler"},"D\xf6ng\xfcler"),(0,t.kt)("p",null,"Go i\xe7inde de di\u011fer dillerdeki gibi for d\xf6ng\xfcs\xfc bulunmaktad\u0131r. Ancak Go dilinde while d\xf6ng\xfcs\xfc mevcut de\u011fildir. D\xf6ng\xfcler ",(0,t.kt)("inlineCode",{parentName:"p"},"for")," ile kontrol edilmektedir. For d\xf6ng\xfcs\xfcn\xfcn \xe7al\u0131\u015fma mant\u0131\u011f\u0131n\u0131n ise ufak detaylar d\u0131\u015f\u0131nda hi\xe7bir fark\u0131 yoktur. "),(0,t.kt)("p",null,"\u015eu \u015fekilde di\u011fer dillerden \xf6rnek vererek gelebiliriz."),(0,t.kt)(l.Z,{mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main(){\n  for j := 1; j < 5; j++{\n    fmt.Println(j)\n  }\n}\n'))),(0,t.kt)(i.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\n\nint main(){\nfor(int j = 1; j < 5; j++){\n  cout << j << endl;\n}\n\nreturn 0;\n}\n"))),(0,t.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},"```python for i in range(1,5): print(i) ```")),(0,t.kt)("p",null,"\xd6zellikle C ailesine benzer bir yap\u0131s\u0131 oldu\u011funu g\xf6rd\xfck. Ayr\u0131ca h\u0131zl\u0131 de\u011fi\u015fken tan\u0131mlama operat\xf6r\xfcn\xfc de i\xe7eride kullanabiliyoruz. Dilersek herhangi bir saya\xe7 kullanmadan direkt olarak ",(0,t.kt)("inlineCode",{parentName:"p"},"for")," blo\u011fu kullanarak sonsuz d\xf6ng\xfcye de alabiliriz. \xd6rnek vermek gerekirse "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main(){\n\n  for j := 1; j < 5; j++{\n    fmt.Println(j)\n  }\n\n  for{\n    fmt.Println("loop")\n    break\n  }\n}\n')),(0,t.kt)("p",null,"Burada for d\xf6ng\xfcs\xfcnde C ailesindeki gibi d\xf6ng\xfc parametresini parantez i\xe7ine almaya gerek yoktur. Ancak d\xf6ng\xfc blo\u011fu i\xe7in s\xfcsl\xfc parantez olmak zorundad\u0131r."),(0,t.kt)("p",null,"Yine python ve C++ i\xe7indeki break ile continue mekanizmalar\u0131 burada da vard\u0131r."),(0,t.kt)("p",null,"Ayr\u0131ca Go i\xe7inde Python'daki blank identifier da mevcuttur. \u015e\xf6yle hat\u0131rlatmak gerekirse alt \xe7izgi (_) ile tan\u0131mlanan ifadeler blank identifier olark ge\xe7mektedir. Bunlar\u0131n amac\u0131 d\xf6ng\xfclerde ya da kullan\u0131ld\u0131klar\u0131 saya\xe7 sistemlerinde sadece ama sadece ad\u0131m\u0131 ilerletmek i\xe7in kullan\u0131lmaktad\u0131r ve d\xf6ng\xfc i\xe7inde de\u011fer almamaktad\u0131r. Yani d\xf6ng\xfc i\xe7inde sayaca ba\u011fl\u0131 bir i\u015flem yap\u0131lm\u0131yorsa (ekrana yazd\u0131rmak gibi) bu durumda rahat bir \u015fekilde kullan\u0131labilir. Bunu dizilerde s\u0131k\xe7a g\xf6rece\u011fiz. \xd6rne\u011fin string i\xe7indeki gezinme mant\u0131\u011f\u0131 \u015fu \u015fekildedir"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    var myname string = "furkan"\n  var mynametwo string = "di\u011ferfurkan"\n\n    for pos, char := range myname {\n        fmt.Printf("%c , %d\\n", char, pos)\n    }\n\n  for char := range mynametwo{\n    fmt.Printf("%c", char)\n  }\n}\n')),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Burada ",(0,t.kt)("inlineCode",{parentName:"p"},"pos")," de\u011feri i\xe7eride stringin ka\xe7\u0131nc\u0131 indeksi oldu\u011funu tutarken ",(0,t.kt)("inlineCode",{parentName:"p"},"char")," ifadesi o indeksteki de\u011feri tutmaktad\u0131r. ",(0,t.kt)("inlineCode",{parentName:"p"},"range")," ifadesi string i\xe7indeki gezinmede gereklidir.")),(0,t.kt)("p",null,"Yukar\u0131daki kodda ",(0,t.kt)("inlineCode",{parentName:"p"},"myname"),' d\xf6ng\xfcs\xfc i\xe7in \xe7\u0131kt\u0131 "012345" \u015feklinde olurken ',(0,t.kt)("inlineCode",{parentName:"p"},"mynametwo"),' i\xe7in "f,0 u,1 r,2 ..." \u015feklinde bir \xe7\u0131kt\u0131 gelecektir.'))}p.isMDXComponent=!0}}]);