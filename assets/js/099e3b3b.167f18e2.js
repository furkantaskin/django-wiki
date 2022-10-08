"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[5211],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),k=i,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||a;return t?r.createElement(c,o(o({ref:n},p),{},{components:t})):r.createElement(c,o({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:6,custom_edit_url:null,description:"Veri taban\u0131ndaki verileri \xf6n y\xfczde dinamik bir \u015fekilde g\xf6stermek"},o="Verilerin \xd6n Y\xfczde G\xf6sterilmesi",l={unversionedId:"python/django/ilk-proje/ondegoster",id:"python/django/ilk-proje/ondegoster",title:"Verilerin \xd6n Y\xfczde G\xf6sterilmesi",description:"Veri taban\u0131ndaki verileri \xf6n y\xfczde dinamik bir \u015fekilde g\xf6stermek",source:"@site/docs/python/django/ilk-proje/ondegoster.mdx",sourceDirName:"python/django/ilk-proje",slug:"/python/django/ilk-proje/ondegoster",permalink:"/django-wiki/docs/python/django/ilk-proje/ondegoster",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,custom_edit_url:null,description:"Veri taban\u0131ndaki verileri \xf6n y\xfczde dinamik bir \u015fekilde g\xf6stermek"},sidebar:"tutorialSidebar",previous:{title:"Admin Paneli",permalink:"/django-wiki/docs/python/django/ilk-proje/adminpanel"},next:{title:"G\xf6rsel Ekleme",permalink:"/django-wiki/docs/python/django/ilk-proje/gorselekle"}},s={},d=[],p={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verilerin-\xf6n-y\xfczde-g\xf6sterilmesi"},"Verilerin \xd6n Y\xfczde G\xf6sterilmesi"),(0,i.kt)("p",null,"\xd6nceki k\u0131s\u0131mlarda model \xfczerinden yeni alanlar olu\u015fturup admin panelinden iki blog postu eklemi\u015ftik. Art\u0131k bunlar\u0131 \xf6n y\xfcze \xe7ekebiliriz. Bunun i\xe7in ",(0,i.kt)("inlineCode",{parentName:"p"},"blog/views.py")," i\xe7ine gitmemiz yeterlidir."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="blog/views.py"',title:'"blog/views.py"'},'\nfrom django.shortcuts import render\nfrom .models import Post\n# Create your views here.\n\n\ndef home(request):\n    data = Post.objects.all()\n    return render(request, "index.html", {"posts": data})\n\n')),(0,i.kt)("p",null,"Bu k\u0131s\u0131mdaki ",(0,i.kt)("inlineCode",{parentName:"p"},"Post.objects.all()")," bize \xe7a\u011f\u0131r\u0131lan Post modelinde kay\u0131tl\u0131 olan t\xfcm verileri \xe7ekecektir. Bu k\u0131s\u0131mda gerekirse filtre uygulanabilir. Biz \u015fimdilik bu filtreyi es ge\xe7iyoruz."),(0,i.kt)("p",null,"Burada de\u011fi\u015ftirmemiz gereken bir k\u0131s\u0131m var. Hat\u0131rlan\u0131rsa ",(0,i.kt)("inlineCode",{parentName:"p"},"blog/urls.py")," i\xe7inde html dosyam\u0131z\u0131 ",(0,i.kt)("inlineCode",{parentName:"p"},"TemplateView.as_view()")," olarak tan\u0131mlam\u0131\u015ft\u0131k. Bu kod par\xe7as\u0131 template i\xe7indeki python kodlar\u0131n\u0131 es ge\xe7ece\u011fi i\xe7in bunu de\u011fi\u015ftirmemiz gerekecektir."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="blog/urls.py"',title:'"blog/urls.py"'},"\nurlpatterns = [\n    # highlight-start\n    path('', views.home, name=\"index\")\n    # highlight-end\n]\n\n")),(0,i.kt)("p",null,"Sonras\u0131nda tempplate klas\xf6r\xfc i\xe7indeki home.html dosyam\u0131z\u0131 index.html olarak de\u011fi\u015ftirip \u015fu \u015fekilde bir kod kullan\u0131yoruz"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"{% for post in posts %}\n    <details>\n        <summary>{{ post.title }}</summary>\n        <p>{{ post.content }}</p>\n    </details>\n{% endfor %}\n\n")),(0,i.kt)("p",null,"Bu kod tuhaf g\xf6r\xfcnebilir. O y\xfczden a\xe7\u0131klamakta fayda var. Durum bloklar\u0131 Django template i\xe7inde {% statement %} \u015feklinde ve {% endstatement %} \u015feklinde gelir. Yukar\u0131da for ve endfor \u015feklinde iki blog a\xe7\u0131p i\xe7ine gereken html blo\u011funu ekliyoruz. E\u011fer ekrana bir \u015fey yazmam\u0131z gerekiyorsa {{}} \u015feklinde \xe7ift s\xfcsl\xfc parantez yeterli olacakt\u0131r."))}u.isMDXComponent=!0}}]);