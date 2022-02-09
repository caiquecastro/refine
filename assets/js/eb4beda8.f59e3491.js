"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99777],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"useList",title:"useList",siderbar_label:"useList",description:"useList data hook from refine is a modified version of react-query's useQuery for retrieving  items from a resource with pagination, search, sort, and filter configurations."},s=void 0,d={unversionedId:"core/hooks/data/useList",id:"core/hooks/data/useList",isDocsHomePage:!1,title:"useList",description:"useList data hook from refine is a modified version of react-query's useQuery for retrieving  items from a resource with pagination, search, sort, and filter configurations.",source:"@site/docs/core/hooks/data/useList.md",sourceDirName:"core/hooks/data",slug:"/core/hooks/data/useList",permalink:"/docs/next/core/hooks/data/useList",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/data/useList.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"useList",title:"useList",siderbar_label:"useList",description:"useList data hook from refine is a modified version of react-query's useQuery for retrieving  items from a resource with pagination, search, sort, and filter configurations."},sidebar:"someSidebar",previous:{title:"useDeleteMany",permalink:"/docs/next/core/hooks/data/useDeleteMany"},next:{title:"useOne",permalink:"/docs/next/core/hooks/data/useOne"}},p=[{value:"Usage",id:"usage",children:[{value:"Query Configuration",id:"query-configuration",children:[{value:"<code>pagination</code>",id:"pagination",children:[],level:4},{value:"<code>sort</code>",id:"sort",children:[],level:4},{value:"<code>filters</code>",id:"filters",children:[],level:4}],level:3}],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Config parameters",id:"config-parameters",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useList")," is a modified version of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/queries"},(0,i.kt)("inlineCode",{parentName:"a"},"useQuery"))," used for retrieving items from a ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," with pagination, sort, and filter configurations."),(0,i.kt)("p",null,"It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"getList")," method as the query function from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/core/providers/data-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's say that we have a resource named ",(0,i.kt)("inlineCode",{parentName:"p"},"posts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n            status: "draft",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n            status: "published",\n        },\n        {\n            id: 3,\n            title: "Powerful Crypto",\n            status: "rejected",\n        },\n    ];\n}\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useList")," passes the query configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/core/providers/data-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider")),". We will be using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/core/providers/data-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider"))," from ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-simple-rest"},(0,i.kt)("inlineCode",{parentName:"a"},"@pankod/refine-simple-rest"))),(0,i.kt)("p",null,"First of all, we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"useList")," without passing any query configurations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useList } from "@pankod/refine-core";\n\ntype IPost = {\n    id: string;\n    title: string;\n    status: "rejected" | "published" | "draft";\n};\n\nconst postListQueryResult = useList<IPost>({ resource: "posts" });\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="postListQueryResult.data"',title:'"postListQueryResult.data"'},'{\n    data: [\n        {\n            id: 3,\n            title: "Powerful Crypto",\n            status: "rejected"\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n            status: "published"\n        },\n        {\n            id: 1,\n            title: "E-business",\n            status: "draft"\n        },\n    ],\n    total: 3\n}\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"Although we didn't pass any sort order configurations to ",(0,i.kt)("inlineCode",{parentName:"p"},"useList"),", data comes in descending order according to ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," since ",(0,i.kt)("inlineCode",{parentName:"p"},"getList")," has default values for sort order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    sort: [{ order: "desc", field: "id" }];\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"getList")," also has default values for pagination:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    pagination: { current: 1, pageSize: 10 }\n}\n")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to create your own ",(0,i.kt)("inlineCode",{parentName:"p"},"getList")," method, it will automatically implement default query configurations since ",(0,i.kt)("inlineCode",{parentName:"p"},"useList")," can work with no configuration parameters."))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"query-configuration"},"Query Configuration"),(0,i.kt)("h4",{id:"pagination"},(0,i.kt)("inlineCode",{parentName:"h4"},"pagination")),(0,i.kt)("p",null,"Allows us to set page and items per page values."),(0,i.kt)("p",null,"For example imagine that we have 1000 post records:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useList } from "@pankod/refine-core";\n\nconst postListQueryResult = useList<IPost>({\n    resource: "posts",\n    config: {\n        pagination: { current: 3, pageSize: 8 },\n    },\n});\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Listing will start from page 3 showing 8 records.")),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"sort"},(0,i.kt)("inlineCode",{parentName:"h4"},"sort")),(0,i.kt)("p",null,"Allows us to sort records by the speficified order and field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useList } from "@pankod/refine-core";\n\nconst postListQueryResult = useList<IPost>({\n    resource: "posts",\n    config: {\n        sort: [{ order: "asc", field: "title" }],\n    },\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="postListQueryResult.data"',title:'"postListQueryResult.data"'},'{\n    data: [\n        {\n            id: 1,\n            title: "E-business",\n            status: "draft"\n        },\n        {\n            id: 3,\n            title: "Powerful Crypto",\n            status: "rejected"\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n            status: "published"\n        },\n    ],\n    total: 3\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Listing starts from ascending alphabetical order on the ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," field.")),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"filters"},(0,i.kt)("inlineCode",{parentName:"h4"},"filters")),(0,i.kt)("p",null,"Allows us to filter queries using refine's filter operators. It is configured via ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"operator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," properites."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useList } from "@pankod/refine-core";\n\nconst postListQueryResult = useList<IPost>({\n    resource: "posts",\n    config: {\n        filters: [\n            {\n                field: "status",\n                operator: "eq",\n                value: "rejected",\n            },\n        ],\n    },\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="postListQueryResult.data"',title:'"postListQueryResult.data"'},'{\n    data: [\n        {\n            id: 3,\n            title: "Powerful Crypto",\n            status: "rejected"\n        },\n    ],\n    total: 1\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only lists records whose ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),' equals to "rejected".')),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Supported operators")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Filter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"eq")),(0,i.kt)("td",{parentName:"tr",align:null},"Equal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ne")),(0,i.kt)("td",{parentName:"tr",align:null},"Not equal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lt")),(0,i.kt)("td",{parentName:"tr",align:null},"Less than")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gt")),(0,i.kt)("td",{parentName:"tr",align:null},"Greater than")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lte")),(0,i.kt)("td",{parentName:"tr",align:null},"Less than or equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gte")),(0,i.kt)("td",{parentName:"tr",align:null},"Greater than or equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"in")),(0,i.kt)("td",{parentName:"tr",align:null},"Included in an array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nin")),(0,i.kt)("td",{parentName:"tr",align:null},"Not included in an array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contains")),(0,i.kt)("td",{parentName:"tr",align:null},"Contains")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ncontains")),(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't contain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"containss")),(0,i.kt)("td",{parentName:"tr",align:null},"Contains, case sensitive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ncontainss")),(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't contain, case sensitive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Is null or not null")))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"useList")," can also accept all ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," options as a third parameter.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"For example, to disable query from running automatically you can set ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useList } from "@pankod/refine-core";\n\nconst postListQueryResult = useList<IPost>({\n    resource: "posts",\n    queryOptions: { enabled: false },\n});\n')))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"useList")," returns the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties such as ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isFetching"),".\n",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"required-block"},(0,i.kt)("div",null,"resource")," ",(0,i.kt)("div",{className:"required"},"Required"))),(0,i.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"config"),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration for pagination, sorting and filtering"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#config-parameters"},(0,i.kt)("inlineCode",{parentName:"a"},"UseListConfig"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"useQuery")," options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"{ data: TData[]; },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TError>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful Query notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Unsuccessful Query notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"Error (status code: ',(0,i.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,i.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,i.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,i.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,i.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,i.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"config-parameters"},"Config parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'interface UseListConfig {\n    pagination?: {\n        current?: number;\n        pageSize?: number;\n    };\n    sort?: Array<{\n        field: string;\n        order: "asc" | "desc";\n    }>;\n    filters?: Array<{\n        field: string;\n        operator: CrudOperators;\n        value: any;\n    }>;\n}\n')),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,i.kt)("h3",{id:"return-values"},"Return values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," data: TData[];"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," total: number; },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," TError>")))))))}m.isMDXComponent=!0}}]);