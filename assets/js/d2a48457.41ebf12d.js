"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58905],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1126:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"useAuthenticated",title:"useAuthenticated",siderbar_label:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations"},c=void 0,u={unversionedId:"core/hooks/auth/useAuthenticated",id:"version-3.xx.xx/core/hooks/auth/useAuthenticated",isDocsHomePage:!1,title:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/versioned_docs/version-3.xx.xx/core/hooks/auth/useAuthenticated.md",sourceDirName:"core/hooks/auth",slug:"/core/hooks/auth/useAuthenticated",permalink:"/docs/core/hooks/auth/useAuthenticated",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/core/hooks/auth/useAuthenticated.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"useAuthenticated",title:"useAuthenticated",siderbar_label:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations"},sidebar:"version-3.xx.xx/someSidebar",previous:{title:"useCheckError",permalink:"/docs/core/hooks/auth/useCheckError"},next:{title:"useGetIdentity",permalink:"/docs/core/hooks/auth/useGetIdentity"}},l=[{value:"Usage",id:"usage",children:[],level:2}],d={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkAuth")," method from the",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. "),(0,o.kt)("p",null,"It returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,o.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"isError"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Data that is resolved from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," will be returned as the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," can be useful when you want to ask for authentication to grant access to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/custom-pages"},"custom pages")," manually."),(0,o.kt)("p",null,"We have used this hook in refine's ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/auth/authenticated"},(0,o.kt)("inlineCode",{parentName:"a"},"<Authenticated>"))," component which allows only authenticated users to access the page or any part of the code."),(0,o.kt)("p",null,"We will demonstrate a similar basic implementation below. Imagine that you have public page but you want to make some specific fields private."),(0,o.kt)("p",null,"We have a logic in ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"checkAuth")," method like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    checkAuth: () => {\n        localStorage.getItem("username")\n                ? Promise.resolve()\n                : Promise.reject(),\n    },\n    // highlight-end\n  ...\n};\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"Let's create a wrapper component that renders children if ",(0,o.kt)("inlineCode",{parentName:"p"},"checkAuth")," method returns the Promise resolved."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/authenticated.tsx"',title:'"components/authenticated.tsx"'},'// highlight-next-line\nimport { useAuthenticated, useNavigation } from "@pankod/refine";\n\nexport const Authenticated: React.FC<AuthenticatedProps> = ({\n    children,\n    fallback,\n    loading,\n}) => {\n    // highlight-next-line\n    const { isSuccess, isLoading, isError } = useAuthenticated();\n\n    const { replace } = useNavigation();\n\n    if (isLoading) {\n        return <>{loading}</> || null;\n    }\n\n    if (isError) {\n        if (!fallback) {\n            replace("/");\n            return null;\n        }\n\n        return <>{fallback}</>;\n    }\n\n    if (isSuccess) {\n        return <>{children}</>;\n    }\n\n    return null;\n};\n\ntype AuthenticatedProps = {\n    fallback?: React.ReactNode;\n    loading?: React.ReactNode;\n};\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now, only authenticated users can see the price field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/postShow"',title:'"components/postShow"'},'import { Typography, Show } from "@pankod/refine-antd";\n\n// highlight-next-line\nimport { Authenticated } from "components/authenticated"\n\nconst { Title, Text } = Typography;\n\nexport const PostShow: React.FC = () => (\n    <Show>\n        <Title>Status</Title>\n        <Text>Approved</Text>\n        // highlight-start\n        <Authenticated>\n            <Title>Price</Title>\n            <Text>20</Text>\n        </Authenticated>\n        // highlight-end\n    </Show>\n)\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This hook can only be used if the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}p.isMDXComponent=!0}}]);