"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64554],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),p=i,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39960:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(63366),i=n(67294),a=n(73727),o=n(52263),u=n(13919),c=n(10412),l=(0,i.createContext)({collectLink:function(){}}),s=n(44996),d=n(18780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,k=void 0===y||y,w=(0,r.Z)(e,f),O=(0,o.Z)().siteConfig,C=O.trailingSlash,P=O.baseUrl,T=(0,s.C)().withBaseUrl,U=(0,i.useContext)(l),j=m||v,N=(0,u.Z)(j),x=null==j?void 0:j.replace("pathname://",""),E=void 0!==x?(n=x,k&&function(e){return e.startsWith("/")}(n)?T(n):n):void 0;E&&N&&(E=(0,d.applyTrailingSlash)(E,{trailingSlash:C,baseUrl:P}));var A=(0,i.useRef)(!1),I=p?a.OL:a.rU,R=c.default.canUseIntersectionObserver,S=(0,i.useRef)();(0,i.useEffect)((function(){return!R&&N&&null!=E&&window.docusaurus.prefetch(E),function(){R&&S.current&&S.current.disconnect()}}),[S,E,R,N]);var Z=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,_=!E||!N||Z;return E&&N&&!Z&&!g&&U.collectLink(E),_?i.createElement("a",Object.assign({href:E},j&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(I,Object.assign({},w,{onMouseEnter:function(){A.current||null==E||(window.docusaurus.preload(E),A.current=!0)},innerRef:function(e){var t,n;R&&e&&N&&(t=e,n=function(){null!=E&&window.docusaurus.prefetch(E)},S.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.current.unobserve(t),S.current.disconnect(),n())}))})),S.current.observe(t))},to:E||""},p&&{isActive:b,activeClassName:h}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(52263),i=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,u=void 0!==o&&o,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},28771:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i=n(39960),a=n(44996),o="card_mflC",u=function(e){var t=e.iconPath,n=e.title,u=e.direction;return r.createElement(i.Z,{to:(0,a.Z)(u)},r.createElement("div",{className:o},r.createElement("img",{src:t,alt:"next.js"}),r.createElement("span",null,n)))}},66351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(28771),u=["components"],c={id:"tutorial",title:"Tutorial",sidebar_label:"Tutorial",slug:"/"},l=void 0,s={unversionedId:"tutorial",id:"tutorial",isDocsHomePage:!1,title:"Tutorial",description:"Introduction",source:"@site/docs/tutorial.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/tutorial.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"tutorial",title:"Tutorial",sidebar_label:"Tutorial",slug:"/"},sidebar:"someSidebar",previous:{title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool",permalink:"/docs/next/comparison"},next:{title:"Tutorial",permalink:"/docs/next/core/tutorial"}},d=[{value:"Introduction",id:"introduction",children:[],level:2}],f={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"refine is a ",(0,a.kt)("strong",{parentName:"p"},"Headless")," React Framework, it does not include a UI Component by default. "),(0,a.kt)("p",null,"There are two ways to add UI elements to refine;"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using a ",(0,a.kt)("strong",{parentName:"li"},"UI Library")," such as ",(0,a.kt)("a",{parentName:"li",href:"https://tailwindcss.com/"},"Tailwind"),", ",(0,a.kt)("a",{parentName:"li",href:"https://chakra-ui.com/"},"Chakra UI"),", etc."),(0,a.kt)("li",{parentName:"ol"},"Using a complete ",(0,a.kt)("strong",{parentName:"li"},"UI Framework")," such as ",(0,a.kt)("a",{parentName:"li",href:"https://ant.design/"},"Ant Design"),", ",(0,a.kt)("a",{parentName:"li",href:"https://mui.com/"},"Material UI"),", etc.")),(0,a.kt)("p",null,"These tutorials will go through process of building a simple ",(0,a.kt)("em",{parentName:"p"},"admin panel")," for a ",(0,a.kt)("em",{parentName:"p"},"CMS-like")," application."),(0,a.kt)("p",null,"Step by step, you're going to learn how to consume a ",(0,a.kt)("em",{parentName:"p"},"REST API")," and add basic CRUD functionality to your panel leveraging the unique capabilities of ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("div",{className:"tutorial-cards"},(0,a.kt)(o.Z,{iconPath:"/img/cra-tailwind.png",title:"Refine Core - Tailwind - CRA",direction:"/docs/next/core/tutorial",mdxType:"Card"}),(0,a.kt)(o.Z,{iconPath:"/img/cra-antd.png",title:"Refine Core & Ant Design - CRA",direction:"/docs/next/ui-frameworks/antd/tutorial",mdxType:"Card"})))}p.isMDXComponent=!0}}]);