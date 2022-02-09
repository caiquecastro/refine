"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94445],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79529:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(89543),l=n(69504),s=["components"],d={id:"useShow",title:"useShow"},p=void 0,c={unversionedId:"core/hooks/show/useShow",id:"version-3.xx.xx/core/hooks/show/useShow",isDocsHomePage:!1,title:"useShow",description:"useShow hook allows you to fetch the desired record. It uses getOne method as query function from the dataProvider that is passed to ``.",source:"@site/versioned_docs/version-3.xx.xx/core/hooks/show/useShow.md",sourceDirName:"core/hooks/show",slug:"/core/hooks/show/useShow",permalink:"/docs/core/hooks/show/useShow",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/core/hooks/show/useShow.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"useShow",title:"useShow"},sidebar:"version-3.xx.xx/someSidebar",previous:{title:"useGetLocale",permalink:"/docs/core/hooks/translate/useGetLocale"},next:{title:"useResource",permalink:"/docs/core/hooks/resource/useResource"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2}],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," hook allows you to fetch the desired record. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"getOne")," method as query function from the dataProvider that is passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const { queryResult } = useShow();\n")),(0,o.kt)("p",null,"When no property is given, it tries to read the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," information from the route."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"First, we'll create a page to show the records. Then we'll use this page for the show property of the resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/show.tsx"',title:'"src/pages/posts/show.tsx"'},'// highlight-next-line\nimport { useShow } from "@pankod/refine-core";\nimport { Show, Typography } from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nexport const PostShow: React.FC = () => {\n// highlight-next-line\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show isLoading={isLoading}>\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,o.kt)("p",null,"We didn't give any property to ",(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," because it can read ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," information from the route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-json-server";\n\n// highlight-next-line\nimport { PostShow } from "./pages/posts";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-next-line\n            resources={[{ name: "posts", show: PostShow }]}\n        />\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"useShow Basic Usage"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"In the next example, we'll show how it is used for the modal."),(0,o.kt)("p",null,"Let's simply create a post list showing posts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { List, Table, useTable } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n')),(0,o.kt)("p",null,"Let's add our modal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'// highlight-next-line\nimport { List, Table, useTable } from "@pankod/refine-core";\nimport {\n    List,\n    Table,\n    useTable,\n// highlight-start\n    Modal,\n    Show,\n    ShowButton,\n    Typography,\n// highlight-end\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nexport const PostList: React.FC = () => {\n    const [visible, setVisible] = useState(false);\n\n    const { tableProps } = useTable<IPost>();\n\n// highlight-next-line\n    const { queryResult, showId, setShowId } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n// highlight-next-line\n    const record = data?.data;\n\n    return (\n        <>\n            <List>\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" />\n                    <Table.Column dataIndex="title" title="Title" />\n                    <Table.Column<IPost>\n                        title="Actions"\n                        dataIndex="actions"\n// highlight-start\n                        render={(_, record) => (\n                            <ShowButton\n                                size="small"\n                                recordItemId={record.id}\n                                onClick={() => {\n                                    setShowId(record.id);\n                                    setVisible(true);\n                                }}\n                            />\n                        )}\n// highlight-end\n                    />\n                </Table>\n            </List>\n// highlight-start\n            <Modal visible={visible} onCancel={() => setVisible(false)}>\n                <Show isLoading={isLoading} recordItemId={showId}>\n                    <Title level={5}>Id</Title>\n                    <Text>{record?.id}</Text>\n\n                    <Title level={5}>Title</Title>\n                    <Text>{record?.title}</Text>\n                </Show>\n            </Modal>\n// highlight-end\n        </>\n    );\n};\n')),(0,o.kt)("p",null,"Finally, let's pass this page to the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," as a list component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-json-server";\n\n// highlight-next-line\nimport { PostList } from "./pages/posts";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-next-line\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"useShow Modal Usage"})),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To show data in the drawer, you can do it by simply replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"<Modal>")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"<Drawer>"),"."))),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resource"),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the url")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"Record id for fetching"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Id that it reads from the url")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metaData"),(0,o.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,o.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,o.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,o.kt)("td",{parentName:"tr",align:null},"{}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,o.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,o.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,o.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,o.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,o.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,o.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,o.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,o.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,o.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"return-values"},"Return values"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,o.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"showId"),(0,o.kt)("td",{parentName:"tr",align:null},"Record id"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"setShowId"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"showId")," setter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction< string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"undefined>>"))))))}h.isMDXComponent=!0},69504:function(e,t,n){t.Z=n.p+"assets/images/modal-usage-0ace0a98706bb2cf500fce399a7e4241.png"},89543:function(e,t,n){t.Z=n.p+"assets/images/show-usage-f1fe5bbd294ab7fe19b311e2d86d397d.png"}}]);