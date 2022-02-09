"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97066],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(d,".").concat(u)]||c[u]||p[u]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44071:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"useDelete",title:"useDelete",siderbar_label:"useDelete",description:"useDelete data hook from refine is a modified version of react-query's useMutation for delete mutations"},d=void 0,s={unversionedId:"core/hooks/data/useDelete",id:"core/hooks/data/useDelete",isDocsHomePage:!1,title:"useDelete",description:"useDelete data hook from refine is a modified version of react-query's useMutation for delete mutations",source:"@site/docs/core/hooks/data/useDelete.md",sourceDirName:"core/hooks/data",slug:"/core/hooks/data/useDelete",permalink:"/docs/next/core/hooks/data/useDelete",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/data/useDelete.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"useDelete",title:"useDelete",siderbar_label:"useDelete",description:"useDelete data hook from refine is a modified version of react-query's useMutation for delete mutations"},sidebar:"someSidebar",previous:{title:"useUpdateMany",permalink:"/docs/next/core/hooks/data/useUpdateMany"},next:{title:"useDeleteMany",permalink:"/docs/next/core/hooks/data/useDeleteMany"}},m=[{value:"Features",id:"features",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Mutation mode",id:"mutation-mode",children:[{value:"Creating a custom method for cancelling mutations",id:"creating-a-custom-method-for-cancelling-mutations",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return value",id:"return-value",children:[],level:3}],level:2}],p={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useDelete")," is a modified version of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation#"},(0,i.kt)("inlineCode",{parentName:"a"},"useMutation"))," for delete mutations."),(0,i.kt)("p",null,"It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteOne")," method as mutation function from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/core/providers/data-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shows notifications after the mutation succeeds, fails or gets canceled.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatically invalidates ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," queries after mutation is succesfully run.\n",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/invalidations-from-mutations"},"Refer to React Query docs for detailed information ","\u2192"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supports ",(0,i.kt)("a",{parentName:"p",href:"#mutation-mode"},"mutation mode"),"."))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's say that we have a resource named ",(0,i.kt)("inlineCode",{parentName:"p"},"categories"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n    ];\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useDelete } from "@pankod/refine-core";\n\nconst { mutate } = useDelete();\n\nmutate({\n    resource: "categories",\n    id: "2",\n});\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"mutate")," can also accept lifecycle methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onError"),".\n",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/mutations#mutation-side-effects"},"Refer to react-query docs for further information. ","\u2192")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"After the mutation runs ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," will be updated as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n    ];\n}\n')),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Queries that use ",(0,i.kt)("inlineCode",{parentName:"p"},"/categories")," endpoint will be automatically invalidated to show the updated data. For example, data returned from ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/core/hooks/data/useList"},(0,i.kt)("inlineCode",{parentName:"a"},"useList"))," will be automatically updated."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"useDelete")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"useMutation")," result. This result includes ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"a lot of properties"),", one of which being ",(0,i.kt)("inlineCode",{parentName:"p"},"mutate"),"."))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Variables passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"mutate")," must have these types."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n    id: string;\n    resource: string;\n    mutationMode?: MutationMode;\n    undoableTimeout?: number;\n    onCancel?: (cancelMutation: () => void) => void;\n}\n")))),(0,i.kt)("h2",{id:"mutation-mode"},"Mutation mode"),(0,i.kt)("p",null,"Mutation mode determines the mode which the mutation runs with."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useDelete } from "@pankod/refine-core";\n\nconst { mutate } = useDelete();\n\nmutate({\n    resource: "categories",\n    id: "2",\n    // highlight-next-line\n    mutationMode: "optimistic",\n});\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/guides-and-concepts/mutation-mode"},"Refer to mutation mode docs for further information. ","\u2192")),(0,i.kt)("h3",{id:"creating-a-custom-method-for-cancelling-mutations"},"Creating a custom method for cancelling mutations"),(0,i.kt)("p",null,"You can pass a custom cancel callback to ",(0,i.kt)("inlineCode",{parentName:"p"},"useUpdate"),". This callback is triggered instead of the default one when undo button is clicked when ",(0,i.kt)("inlineCode",{parentName:"p"},'mutationMode = "undoable"'),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Default behaviour on undo action includes notifications. If a custom callback is passed this notification will not appear."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Passed callback will receive a function that actually cancels the mutation. Don't forget to run this function to cancel the mutation on the ",(0,i.kt)("inlineCode",{parentName:"p"},"undoable")," mode."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useDelete } from "@pankod/refine-core";\n\n// highlight-start\nconst customOnCancel = (cancelMutation: () => void) => {\n    cancelMutation();\n    // rest of custom cancel logic...\n};\n// highlight-end\n\nconst { mutate } = useDelete();\n\nmutate({\n    resource: "categories",\n    id: "1",\n    mutationMode: "undoable",\n    // highlight-start\n    undoableTimeout: 7500,\n    onCancel: customOnCancel,\n    // highlight-end\n});\n')),(0,i.kt)("p",{parentName:"div"},"After 7.5 seconds the mutation will be executed. The mutation can be cancelled within that 7.5 seconds. If cancelled ",(0,i.kt)("inlineCode",{parentName:"p"},"customOnCancel")," will be executed and the request will not be sent."))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"required-block"},(0,i.kt)("div",null,"resource")," ",(0,i.kt)("div",{className:" required"},"Required"))),(0,i.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id ",(0,i.kt)("div",{className:" required"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"id for mutation function"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/guides-and-concepts/mutation-mode"},"Determines when mutations are executed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing the mutation when ",(0,i.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5000ms"),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onCancel"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback that runs when undo button is clicked on ",(0,i.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(cancelMutation: () => void) => void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"Successfully deleted a ',(0,i.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"Error (status code: ',(0,i.kt)("inlineCode",{parentName:"td"},"status"),'"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,i.kt)("td",{parentName:"tr",align:null},"{}")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,i.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,i.kt)("strong",{parentName:"p"},"<",(0,i.kt)("a",{parentName:"strong",href:"/docs/next/core/components/refine-config"},"Refine"),">")," component. ",(0,i.kt)("inlineCode",{parentName:"p"},"useDelete")," will use what is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,i.kt)("h3",{id:"return-value"},"Return value"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,i.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"},"TError,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," { id: string; },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," DeleteContext>")))))))}c.isMDXComponent=!0}}]);