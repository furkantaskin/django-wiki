"use strict";(self.webpackChunkdjango_wiki=self.webpackChunkdjango_wiki||[]).push([[6483],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>c});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=l,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||r;return n?t.createElement(k,i(i({ref:a},d),{},{components:n})):t.createElement(k,i({ref:a},d))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:a,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},a)}},5488:(e,a,n)=>{n.d(a,{Z:()=>c});var t=n(7462),l=n(7294),r=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",m="tabItem_LNqP";function p(e){var a,n;const{lazy:i,block:p,defaultValue:c,values:k,groupId:y,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),v=(0,o.l)(f,((e,a)=>e.value===a.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===c?c:null!=(a=null!=c?c:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?a:g[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:j,setTabGroupChoices:w}=(0,s.U)(),[T,O]=(0,l.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=y){const e=j[y];null!=e&&e!==T&&f.some((a=>a.value===e))&&O(e)}const E=e=>{const a=e.currentTarget,n=N.indexOf(a),t=f[n].value;t!==T&&(x(a),O(t),null!=y&&w(y,String(t)))},z=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{var t;const a=N.indexOf(e.currentTarget)+1;n=null!=(t=N[a])?t:N[0];break}case"ArrowLeft":{var l;const a=N.indexOf(e.currentTarget)-1;n=null!=(l=N[a])?l:N[N.length-1];break}}null==(a=n)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},b)},f.map((e=>{let{value:a,label:n,attributes:i}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>N.push(e),onKeyDown:z,onFocus:E,onClick:E},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===a})}),null!=n?n:a)}))),i?(0,l.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function c(e){const a=(0,i.Z)();return l.createElement(p,(0,t.Z)({key:String(a)},e))}},1644:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var t=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);const o={sidebar_position:8,custom_edit_url:null,description:"Sayfa i\xe7indeki alt sayfalar\u0131 kullanmak ve ana sayfay\u0131 alt sayfaya ba\u011flayacak k\xf6pr\xfc olu\u015fturmak"},s="Alt Sayfa Olu\u015fturmak",u={unversionedId:"python/django/ilk-proje/altsayfa",id:"python/django/ilk-proje/altsayfa",title:"Alt Sayfa Olu\u015fturmak",description:"Sayfa i\xe7indeki alt sayfalar\u0131 kullanmak ve ana sayfay\u0131 alt sayfaya ba\u011flayacak k\xf6pr\xfc olu\u015fturmak",source:"@site/docs/python/django/ilk-proje/altsayfa.mdx",sourceDirName:"python/django/ilk-proje",slug:"/python/django/ilk-proje/altsayfa",permalink:"/django-wiki/docs/python/django/ilk-proje/altsayfa",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,custom_edit_url:null,description:"Sayfa i\xe7indeki alt sayfalar\u0131 kullanmak ve ana sayfay\u0131 alt sayfaya ba\u011flayacak k\xf6pr\xfc olu\u015fturmak"},sidebar:"tutorialSidebar",previous:{title:"G\xf6rsel Ekleme",permalink:"/django-wiki/docs/python/django/ilk-proje/gorselekle"},next:{title:"HTML Template Yap\u0131s\u0131",permalink:"/django-wiki/docs/python/django/ilk-proje/htmltemplate"}},d={},m=[{value:"Nas\u0131l Alt Sayfa Olu\u015fturulur",id:"nas\u0131l-alt-sayfa-olu\u015fturulur",level:2},{value:"\xdcst Sayfadan Alt Sayfaya Ba\u011flanmak",id:"\xfcst-sayfadan-alt-sayfaya-ba\u011flanmak",level:2}],p={toc:m};function c(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alt-sayfa-olu\u015fturmak"},"Alt Sayfa Olu\u015fturmak"),(0,l.kt)("p",null,"Alt sayfalar \xf6zellikle blog gibi sistemlerin olmazsa olmaz\u0131d\u0131r. Her postun kendisine ait sayfas\u0131 oldu\u011funu d\xfc\u015f\xfcnerek burada bir alt sayfa a\xe7mak bizim i\xe7in \xf6nemli ad\u0131mlardan birisi olacakt\u0131r. \xd6rne\u011fin a\xe7t\u0131\u011f\u0131m\u0131z postlardan birisini okumam\u0131z gerekiyorsa burada yeni bir terimi kullanaca\u011f\u0131z: ",(0,l.kt)("inlineCode",{parentName:"p"},"slug"),"..."),(0,l.kt)("h2",{id:"nas\u0131l-alt-sayfa-olu\u015fturulur"},"Nas\u0131l Alt Sayfa Olu\u015fturulur"),(0,l.kt)("p",null,"\xd6ncelikle blog i\xe7indeki urls.py i\xe7ine girerek burada post detay sayfas\u0131 i\xe7in bir ayar yapmam\u0131z gerekiyor. Burada yapaca\u011f\u0131m\u0131z ilk i\u015f slug parametresini kullanmak olacakt\u0131r. Ard\u0131ndan blog i\xe7indeki views.py i\xe7ine Post'a dair bir single fonksiyonu a\xe7mak ve buna sadece URL i\xe7inden gelen slug de\u011ferini kullananlar\u0131n eri\u015febilece\u011fi ekran olu\u015fturmak bizim yeni amac\u0131m\u0131z olacakt\u0131r."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"urls",label:"blog/urls.py",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    from django.urls import path\n    from . import views\n\n    urlpatterns = [\n        path('', views.home, name=\"index\"),\n        path('single/<slug:slug>', views.single, name=\"single\")\n    ]\n\n"))),(0,l.kt)(i.Z,{value:"views",label:"blog/views.py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    from django.shortcuts import render\n    from .models import Post\n\n\n    def home(request):\n        data = Post.objects.all()\n        return render(request, \"index.html\", {'posts': data})\n\n    # highlight-start\n    def single(request, slug):\n        data = Post.objects.get(slug=slug)\n        return render(request, \"single.html\", {'post': data})\n    #highlight-end\n    \n")))),(0,l.kt)("admonition",{title:"Kodlara Dikkat",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Burada blog i\xe7indeki views.py i\xe7inde Post s\u0131n\u0131f\u0131n\u0131 \xe7a\u011f\u0131rma mant\u0131\u011f\u0131m\u0131z bir t\u0131k de\u011fi\u015fmi\u015f olabilir. \xd6nceden ",(0,l.kt)("inlineCode",{parentName:"p"},"from . import models")," \u015feklinde \xe7a\u011f\u0131r\u0131rken art\u0131k ",(0,l.kt)("inlineCode",{parentName:"p"},"from .models import Post")," olarak \xe7a\u011f\u0131rmaya ba\u015flad\u0131k. Bunu kod kolayl\u0131\u011f\u0131 i\xe7in yapt\u0131k. Mod\xfclleri takip etmeden kodu direkt kopyalaman\u0131z durumunda kodun \xe7al\u0131\u015fmama ihtimali y\xfcksektir. Buna dikkat etmeniz gerekir.")),(0,l.kt)("h2",{id:"\xfcst-sayfadan-alt-sayfaya-ba\u011flanmak"},"\xdcst Sayfadan Alt Sayfaya Ba\u011flanmak"),(0,l.kt)("p",null,"Her alt sayfa kendine ait has bir slug linkine sahip demi\u015ftik. Ancak ba\u015fka uygulamalardaki iki farkl\u0131 veri ayn\u0131 slug verisine sahip olabilir. Bu durumda Django'ya buradaki ayr\u0131m\u0131 tan\u0131tmam\u0131z gerekecek. \u0130\u015fler bir t\u0131k kar\u0131\u015fabilir."),(0,l.kt)("p",null,"\xd6ncelikle bu k\u0131s\u0131mda her alt sayfan\u0131n slug verisini alt uygulama ve ana proje linki ile birle\u015ftirmemiz gerekiyor. Bunun i\xe7in blog i\xe7indeki models.py dosyas\u0131nda birka\xe7 ekleme yapaca\u011f\u0131z."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"models2",label:"blog/models.py",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\n  def get_absolute_url(self):\n      return reverse("blog:single", args=[self.slug])\n\n'))),(0,l.kt)(i.Z,{value:"urls2",label:"blog/urls.py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\n  #highlight-start\n  app_name = "blog"\n  #highlight-end\n\n  urlpatterns = [\n      path(\'\', views.home, name="index"),\n      path(\'single/<slug:slug>\', views.single, name="single")\n  ]\n    \n'))),(0,l.kt)(i.Z,{value:"coreurls",label:"core/urls.py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nurlpatterns = [\n  path('admin/', admin.site.urls),\n  path('', include('blog.urls', namespace=\"blog\"))\n]\n")))),(0,l.kt)("p",null,"Burada \xf6ncelikle uygulamam\u0131z\u0131n (blog) ad\u0131n\u0131 kullanarak bir tan\u0131mlama yapt\u0131k. Buradaki ",(0,l.kt)("inlineCode",{parentName:"p"},"blog:single")," k\u0131sm\u0131 bizim blog uygulamam\u0131zda bulunan urls.py i\xe7inde ismi single (",(0,l.kt)("inlineCode",{parentName:"p"},'name="single"'),") olan veriyi arayaca\u011f\u0131n\u0131 ifade etmektedir. "),(0,l.kt)("p",null,"Core i\xe7indeki urls'e blog.urls'e bakaca\u011f\u0131 zaman\u0131n alan ad\u0131n\u0131n blog i\xe7ermesi durumunda olaca\u011f\u0131n\u0131 s\xf6yledik. Ard\u0131ndan blog i\xe7indeki urls'e de uygulamam\u0131z\u0131n ad\u0131n\u0131 ",(0,l.kt)("inlineCode",{parentName:"p"},'app_name = "blog"')," olarak kaydettik"))}c.isMDXComponent=!0}}]);