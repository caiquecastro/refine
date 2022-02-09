"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7915],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80392:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data"},u=void 0,d={unversionedId:"api-references/hooks/auth/useGetIdentity",id:"version-2.xx.xx/api-references/hooks/auth/useGetIdentity",isDocsHomePage:!1,title:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/auth/useGetIdentity.md",sourceDirName:"api-references/hooks/auth",slug:"/api-references/hooks/auth/useGetIdentity",permalink:"/docs/2.xx.xx/api-references/hooks/auth/useGetIdentity",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/auth/useGetIdentity.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useAuthenticated",permalink:"/docs/2.xx.xx/api-references/hooks/auth/useAuthenticated"},next:{title:"usePermissions",permalink:"/docs/2.xx.xx/api-references/hooks/auth/usePermissions"}},l=[{value:"Usage",id:"usage",children:[],level:2}],c={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-references/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,a.kt)("p",null,"It returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"  which includes many properties, some of which being ",(0,a.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"isError"),". Data that is resolved from the ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," will be returned as the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," can be useful when you want to get the user information anywhere in your code."),(0,a.kt)("p",null,"Let's say that you want to show the user's name."),(0,a.kt)("p",null,"We have a logic in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-references/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    getUserIdentity: () =>\n            Promise.resolve({\n                id: 1,\n                fullName: "Jane Doe",\n            }),\n  // highlight-end\n  ...\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"You can access identity data like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { useGetIdentity } from "@pankod/refine";\n\nexport const User: React.FC = () => {\n    // highlight-next-line\n    const { data: identity } = useGetIdentity<{ id: string; fullName: string}>();\n\n    return <span>{identity?.fullName}</span>\n}\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This hook can only be used if the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}p.isMDXComponent=!0}}]);