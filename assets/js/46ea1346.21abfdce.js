"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:6,custom_edit_url:null},o="Verilerin \xd6n Y\xfczde G\xf6sterilmesi",l={unversionedId:"ilk-proje/ondegoster",id:"ilk-proje/ondegoster",title:"Verilerin \xd6n Y\xfczde G\xf6sterilmesi",description:"\xd6nceki k\u0131s\u0131mlarda model \xfczerinden yeni alanlar olu\u015fturup admin panelinden iki blog postu eklemi\u015ftik. Art\u0131k bunlar\u0131 \xf6n y\xfcze \xe7ekebiliriz. Bunun i\xe7in blog/views.py i\xe7ine gitmemiz yeterlidir.",source:"@site/docs/ilk-proje/ondegoster.mdx",sourceDirName:"ilk-proje",slug:"/ilk-proje/ondegoster",permalink:"/django-wiki/docs/ilk-proje/ondegoster",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Admin Paneli",permalink:"/django-wiki/docs/ilk-proje/adminpanel"},next:{title:"Tutorial - Extras",permalink:"/django-wiki/docs/category/tutorial---extras"}},s={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verilerin-\xf6n-y\xfczde-g\xf6sterilmesi"},"Verilerin \xd6n Y\xfczde G\xf6sterilmesi"),(0,i.kt)("p",null,"\xd6nceki k\u0131s\u0131mlarda model \xfczerinden yeni alanlar olu\u015fturup admin panelinden iki blog postu eklemi\u015ftik. Art\u0131k bunlar\u0131 \xf6n y\xfcze \xe7ekebiliriz. Bunun i\xe7in ",(0,i.kt)("inlineCode",{parentName:"p"},"blog/views.py")," i\xe7ine gitmemiz yeterlidir."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="blog/views.py"',title:'"blog/views.py"'},'\nfrom django.shortcuts import render\nfrom .models import Post\n# Create your views here.\n\n\ndef home(request):\n    data = Post.objects.all()\n    return render(request, "index.html", {"posts": data})\n\n')),(0,i.kt)("p",null,"Burada de\u011fi\u015ftirmemiz gereken bir k\u0131s\u0131m var. Hat\u0131rlan\u0131rsa ",(0,i.kt)("inlineCode",{parentName:"p"},"blog/urls.py")," i\xe7inde html dosyam\u0131z\u0131 ",(0,i.kt)("inlineCode",{parentName:"p"},"TemplateView.as_view()")," olarak tan\u0131mlam\u0131\u015ft\u0131k. Bu kod par\xe7as\u0131 template i\xe7indeki python kodlar\u0131n\u0131 es ge\xe7ece\u011fi i\xe7in bunu de\u011fi\u015ftirmemiz gerekecektir."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="blog/urls.py"',title:'"blog/urls.py"'},"\nurlpatterns = [\n    # highlight-start\n    path('', views.home, name=\"index\")\n    # highlight-end\n]\n\n")),(0,i.kt)("p",null,"Sonras\u0131nda tempplate klas\xf6r\xfc i\xe7indeki home.html dosyam\u0131z\u0131 index.html olarak de\u011fi\u015ftirip \u015fu \u015fekilde bir kod kullan\u0131yoruz"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"{% for post in posts %}\n    <details>\n        <summary>{{ post.title }}</summary>\n        <p>{{ post.content }}</p>\n    </details>\n{% endfor %}\n\n")),(0,i.kt)("p",null,"Bu kod tuhaf g\xf6r\xfcnebilir. O y\xfczden a\xe7\u0131klamakta fayda var. Durum bloklar\u0131 Django template i\xe7inde {% statement %} \u015feklinde ve {% endstatement %} \u015feklinde gelir. Yukar\u0131da for ve endfor \u015feklinde iki blog a\xe7\u0131p i\xe7ine gereken html blo\u011funu ekliyoruz. E\u011fer ekrana bir \u015fey yazmam\u0131z gerekiyorsa {{}} \u015feklinde \xe7ift s\xfcsl\xfc parantez yeterli olacakt\u0131r."))}d.isMDXComponent=!0}}]);