"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[7828],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),d=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=d(r),m=t,c=k["".concat(p,".").concat(m)]||k[m]||s[m]||i;return r?a.createElement(c,l(l({ref:n},u),{},{components:r})):a.createElement(c,l({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2242:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(7462),t=(r(7294),r(3905));const i={sidebar_position:5,custom_edit_url:null,description:"Python i\xe7inde generator kullan\u0131m\u0131"},l="Generator",o={unversionedId:"django/patika/ileri-python/page5",id:"django/patika/ileri-python/page5",title:"Generator",description:"Python i\xe7inde generator kullan\u0131m\u0131",source:"@site/docs/django/patika/ileri-python/page5.mdx",sourceDirName:"django/patika/ileri-python",slug:"/django/patika/ileri-python/page5",permalink:"/django-wiki/docs/django/patika/ileri-python/page5",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,custom_edit_url:null,description:"Python i\xe7inde generator kullan\u0131m\u0131"},sidebar:"tutorialSidebar",previous:{title:"Inheritance",permalink:"/django-wiki/docs/django/patika/ileri-python/page4"}},p={},d=[],u={toc:d};function s(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"generator"},"Generator"),(0,t.kt)("p",null,"Generator, iterator gibi davranan bir fonksiyon tan\u0131mlamam\u0131z\u0131 sa\u011flayan \xf6zel fonksiyonlard\u0131r",(0,t.kt)("sup",{parentName:"p",id:"fnref-1"},(0,t.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,t.kt)("p",null,"Normalde generator kavram\u0131 neden var d\xfc\u015f\xfcnebiliriz. \xd6ncelikle burada biraz Python'\u0131n performans kavram\u0131ndan bahsetmek laz\u0131m."),(0,t.kt)("p",null,"Asl\u0131nda biz bir liste olu\u015fturup bu listeye say\u0131lar\u0131 ekledi\u011fimizde bu listenin haf\u0131zadaki konumu dinamik olarak de\u011fi\u015fir. Yani 3 elemanl\u0131 liste \xf6rne\u011fin 3x bir alan tutarken 100 elemanl\u0131 liste burada 100x yer tutacakt\u0131r. Peki 1 milyon veri eklersek bu listeye haf\u0131za ne hale gelir? Tabii ki de 10 MB'l\u0131k yer tutar. Bu elimizdeki 16 GB'l\u0131k RAM i\xe7in az g\xf6r\xfcnebilir ancak kompleks bir b\xfcy\xfck i\u015flemle ilgilenirsek burada milyon veriden de\u011fil, neredeyse milyarlarca veriden bahsedece\u011fiz. Bu bizim GB boyutunda veri tutmas\u0131na sebep olacak ve RAM'de ciddi \u015fi\u015fmelere sebep olacakt\u0131r."),(0,t.kt)("p",null,"\u0130\u015fte Python buna \xe7\xf6z\xfcm olarak generator terimini bize sundu.",(0,t.kt)("sup",{parentName:"p",id:"fnref-2"},(0,t.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,t.kt)("p",null,"Normalde fonksiyonlar bir return de\u011feri al\u0131nca kendisini kapat\u0131r ve ortal\u0131ktan kaybolurdu (ta ki yeniden \xe7a\u011fr\u0131lana dek). Ancak generator fonksiyonlar t\xfcm d\xf6ng\xfc bitene kadar kapanmaz ve s\xfcrekli veri d\xf6nd\xfcrmeye devam eder."),(0,t.kt)("p",null,"Mesela elimizdeki devasa bir dizinin t\xfcm elemanlar\u0131n\u0131 karesini al\u0131p yeni bir dizi olmas\u0131n\u0131 istesek?"),(0,t.kt)("p",null,"Normalde bunu olu\u015fturdu\u011fumuzuda t\xfcm listeyi haf\u0131zaya kaydetmemiz laz\u0131m."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"l=[1,2,3]\nprint(square(l)) # [1,4,9]\n")),(0,t.kt)("p",null,"Burada ufak bir liste h\u0131zl\u0131ca bitti ancak bu liste \xe7ok b\xfcy\xfck olursa devasa bir d\xf6n\xfc\u015f olacakt\u0131r. Bunu daha rahat bir \u015fekilde yapabiliriz."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"def n_square(elem):\n    for e in elem:\n        # This will active\n        yield e*e\n")),(0,t.kt)("p",null,"Normalde ",(0,t.kt)("inlineCode",{parentName:"p"},"yield")," terimi ile ",(0,t.kt)("inlineCode",{parentName:"p"},"return")," terimi birbirine \xe7ok benzer ancak \xf6nemli farklar\u0131 vard\u0131r. \u0130kisi de veri d\xf6nd\xfcr\xfcr ancak return t\xfcm fonksiyonu kapat\u0131rken yield bize o anl\u0131k de\u011feri d\xf6nd\xfcrd\xfc. Asl\u0131nda fonksiyon \u015fu hale geliyor."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"def n_square(elem):\n    for e in elem:\n        # This will active\n        yield e*e\nl = [1,2,3]\ng = n_square(l)\nprint(g) # 1\nnext(g) # 4\nnext(g) # 9\n")),(0,t.kt)("p",null,"Bak\u0131n asl\u0131nda t\xfcm dizi d\xf6nmedi. Dizinin her eleman\u0131 i\xe7in bu fonksiyon \xe7al\u0131\u015ft\u0131. Bu \xe7ok u\u011fra\u015ft\u0131r\u0131c\u0131 gibi g\xf6r\xfcnsede haf\u0131zada ciddi kay\u0131plar\u0131n \xf6n\xfcne ge\xe7meyi sa\u011flar. Peki tek tek u\u011fra\u015fmak istemiyorsak ne olacak? \u0130\u015fte burada bir d\xf6ng\xfc komutu i\u015fin i\xe7ine giriyor."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},'for i in g:\n    print(i)\n"""\n1\n4\n9\n"""\n')),(0,t.kt)("p",null,"Asl\u0131nda generatorleri ",(0,t.kt)("a",{parentName:"p",href:"/django-wiki/docs/django/patika/page2#list-comprehension"},"\xf6nceden g\xf6rd\xfck.")),(0,t.kt)("p",null,"\xd6rne\u011fin elimizde 1'den 10'a kadar olan bir a listesi olsun. Bunun t\xfcm elemanlar\u0131n\u0131n karesini olu\u015fturan bir liste d\xfc\u015f\xfcn\xfcrsek bunu basit\xe7e \u015fu \u015fekilde olu\u015fturabiliyorduk."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"a= [1,2,3,4,5,6,7,8,9,10]\nb=[x**2 for x in a]\nprint(b) # [1,4,9,16,25,36,49,64,81,100]\n")),(0,t.kt)("p",null,"Asl\u0131nda a'n\u0131n her bir terimi i\xe7in bir fonksiyon \xe7al\u0131\u015f\u0131p bunu b de\u011ferindeki diziye ekledi. Bunu liste de\u011fil de bir generator yapabiliriz. Tek yapmam\u0131z gereken k\xf6\u015feli parantezi normal ile de\u011fi\u015ftirmek."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"b=(x**2 for x in a)\nprint(b) # generator nesne \xe7\u0131kt\u0131s\u0131 verir\n# highlight-start\nnext(b) # 1\nnext(b) # 4\n# highligh-end\n\nfor e in b:\n    print(e) # 9 \n")),(0,t.kt)("p",null,"Fark\u0131ndaysak ",(0,t.kt)("inlineCode",{parentName:"p"},"print(e)")," de\u011feri 9 dedik ancak dizimiz 1'den ba\u015fl\u0131yordu. Bunun sebebi i\u015faretledi\u011fim sat\u0131rdaki ",(0,t.kt)("inlineCode",{parentName:"p"},"next")," komutlar\u0131. Bunlar\u0131 silip for d\xf6ng\xfcs\xfcn\xfc yerinde b\u0131rak\u0131rsak 1 de\u011ferinden ba\u015flayacakt\u0131r."),(0,t.kt)("p",null,"\xd6rnek bir range fonksiyonu d\xfc\u015f\xfcnelim"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"def range_generator(start,end,step):\n    current = start\n    while current < end\n        yield current\n        current += step\n\nr = range_generator(1,20,3)\nnext(r) # 1\nnext(r) # 4\nnext(r) # 7 \n")),(0,t.kt)("div",{className:"footnotes"},(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",{parentName:"ol",id:"fn-1"},(0,t.kt)("a",{parentName:"li",href:"https://wiki.python.org/moin/Generators"},"https://wiki.python.org/moin/Generators"),(0,t.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,t.kt)("li",{parentName:"ol",id:"fn-2"},(0,t.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0255/"},"https://peps.python.org/pep-0255/"),(0,t.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}s.isMDXComponent=!0}}]);