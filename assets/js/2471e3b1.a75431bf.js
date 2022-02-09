"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75819],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14912:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(80757),l=["components"],d={id:"clone-button",title:"Clone"},s=void 0,p={unversionedId:"ui-frameworks/antd/components/buttons/clone-button",id:"version-3.xx.xx/ui-frameworks/antd/components/buttons/clone-button",isDocsHomePage:!1,title:"Clone",description:"` uses Ant Design's  component. It uses the clone` method from useNavigation under the hood.",source:"@site/versioned_docs/version-3.xx.xx/ui-frameworks/antd/components/buttons/clone.md",sourceDirName:"ui-frameworks/antd/components/buttons",slug:"/ui-frameworks/antd/components/buttons/clone-button",permalink:"/docs/ui-frameworks/antd/components/buttons/clone-button",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/ui-frameworks/antd/components/buttons/clone.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"clone-button",title:"Clone"},sidebar:"version-3.xx.xx/someSidebar",previous:{title:"Delete",permalink:"/docs/ui-frameworks/antd/components/buttons/delete-button"},next:{title:"Refresh",permalink:"/docs/ui-frameworks/antd/components/buttons/refresh-button"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>recordItemId</code>",id:"recorditemid",children:[],level:3},{value:"<code>resourceName</code>",id:"resourcename",children:[],level:3},{value:"<code>hideText</code>",id:"hidetext",children:[],level:3},{value:"<code>ignoreAccessControlProvider</code>",id:"ignoreaccesscontrolprovider",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<CloneButton>")," uses Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"clone")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},"useNavigation")," under the hood.\nIt can be useful when redirecting the app to the create page with the record id route of resource."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    useTable,\n    // highlight-next-line\n    CloneButton,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    key="actions"\n                    render={(_, record) => (\n                        // highlight-next-line\n                        <CloneButton size="small" recordItemId={record.id} />\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,a.kt)("p",null,"Will look like this:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"Default clone button"})),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"recorditemid"},(0,a.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CloneButton } from "@pankod/refine-antd";\n\nexport const MyCloneComponent = () => {\n    return <CloneButton resourceName="posts" recordItemId="1" />;\n};\n')),(0,a.kt)("p",null,"Clicking the button will trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts/clone/1"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<CloneButton>"))," component reads the id information from the route by default."))),(0,a.kt)("h3",{id:"resourcename"},(0,a.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,a.kt)("p",null,"It is used to redirect the app to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/clone")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,a.kt)("inlineCode",{parentName:"p"},"/clone")," defined by the name property of the resource object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CloneButton } from "@pankod/refine-antd";\n\nexport const MyCloneComponent = () => {\n    return <CloneButton resourceName="categories" recordItemId="2" />;\n};\n')),(0,a.kt)("p",null,"Clicking the button will trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,a.kt)("inlineCode",{parentName:"p"},"/categories/clone/2"),"."),(0,a.kt)("h3",{id:"hidetext"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,a.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CloneButton } from "@pankod/refine-antd";\n\nexport const MyCloneComponent = () => {\n    return <CloneButton hideText />;\n};\n')),(0,a.kt)("h3",{id:"ignoreaccesscontrolprovider"},(0,a.kt)("inlineCode",{parentName:"h3"},"ignoreAccessControlProvider")),(0,a.kt)("p",null,"It is used to skip access control for the button so that it doesn't check for access control. This is relevant only when an ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/providers/accessControl-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CloneButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n    return <CloneButton ignoreAccessControlProvider />;\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design button props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/button/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonProps"))," & ",(0,a.kt)("inlineCode",{parentName:"td"},"{ resourceName?: string; recordItemId?: string; hideText?: boolean; }")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines which resource to use for redirection"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"recordItemId"),(0,a.kt)("td",{parentName:"tr",align:null},"Adds ",(0,a.kt)("inlineCode",{parentName:"td"},"id")," to the end of the URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Record id that it reads from route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hideText"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ignoreAccessControlProvider"),(0,a.kt)("td",{parentName:"tr",align:null},"Skip access control"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"Clone"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"icon"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/icon/"},(0,a.kt)("inlineCode",{parentName:"a"},"<PlusSquareOutlined />")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onClick"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the handler to handle click event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(event) => void")),(0,a.kt)("td",{parentName:"tr",align:null},"Triggers navigation for redirection to the create page of resource")))))}m.isMDXComponent=!0},80757:function(e,t,n){t.Z=n.p+"assets/images/clone-32f3fb8734c09dc01a68630d3d5bcd92.png"}}]);