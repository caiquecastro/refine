"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42125],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44768:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(29267),s=["components"],p={id:"search",title:"Search"},c=void 0,l={unversionedId:"guides-and-concepts/search/search",id:"guides-and-concepts/search/search",isDocsHomePage:!1,title:"Search",description:"We will create a ` component for your application with Ant Design's ` component.",source:"@site/docs/guides-and-concepts/search/search.md",sourceDirName:"guides-and-concepts/search",slug:"/guides-and-concepts/search/search",permalink:"/docs/next/guides-and-concepts/search/search",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/search/search.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"search",title:"Search"},sidebar:"someSidebar",previous:{title:"Auth0 Login",permalink:"/docs/next/guides-and-concepts/auth/auth0"},next:{title:"Table Search",permalink:"/docs/next/guides-and-concepts/search/table-search"}},d=[{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component for your application with Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/auto-complete"},(0,a.kt)("inlineCode",{parentName:"a"},"<AutoComplete>"))," component.\nWe will now examine how to search within the application with this component."),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"search"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"To do this, let's first create our ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { AntdLayout, AutoComplete, Input, Icons } from "@pankod/refine-antd";\n\nconst { SearchOutlined } = Icons;\n\nexport const Header: React.FC = () => {\n    return (\n        <AntdLayout.Header\n            style={{\n                padding: "0px 24px",\n                backgroundColor: "#FFF",\n            }}\n        >\n            <AutoComplete\n                style={{ width: "100%", maxWidth: "550px" }}\n                filterOption={false}\n            >\n                <Input\n                    size="large"\n                    placeholder="Search posts or categories"\n                    suffix={<SearchOutlined />}\n                />\n            </AutoComplete>\n        </AntdLayout.Header>\n    );\n};\n')),(0,a.kt)("p",null,"We created the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component as we want it to appear. We have not done anything for any search process at this stage. We just created the UI."),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Let's not forget to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," as below."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\n// highlight-next-line\nimport { Header } from "components";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n// highlight-next-line\n            Header={Header}\n        />\n    );\n};\n\nexport default App;\n')))),(0,a.kt)("p",null,"Now let's get our ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/auto-complete"},(0,a.kt)("inlineCode",{parentName:"a"},"<AutoComplete>"))," input ready to search. So, let's fetch our posts according to the value entered in our input."),(0,a.kt)("p",null,"In order to fetch more than one record, we will use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/core/hooks/data/useList"},(0,a.kt)("inlineCode",{parentName:"a"},"useList"))," data hook, and we will filter and fetch this data according to the search value."),(0,a.kt)("p",null,"Before we start, let's create the interfaces of our ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/auto-complete"},(0,a.kt)("inlineCode",{parentName:"a"},"<AutoComplete>")),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," property and the post source."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/interfaces/index.d.ts"',title:'"src/interfaces/index.d.ts"'},"export interface IPost {\n    id: string;\n    title: string;\n}\n\nexport interface ICategory {\n    id: string;\n    title: string;\n}\n\nexport interface IOptionGroup {\n    value: string;\n    label: string | React.ReactNode;\n}\n\nexport interface IOptions {\n    label: string | React.ReactNode;\n    options: IOptionGroup[];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { useState, useEffect } from "react";\nimport { useList } from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    AutoComplete,\n    Input,\n    Icons,\n    Typography,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router";\n\nconst { Link } = routerProvider;\nconst { Text } = Typography;\nconst { SearchOutlined } = Icons;\n\nimport { IOptions, IPost } from "interfaces";\n\n// To be able to customize the option title\nconst renderTitle = (title: string) => {\n    return (\n        <Text strong style={{ fontSize: "16px" }}>\n            {title}\n        </Text>\n    );\n};\n\n// To be able to customize the option item\nconst renderItem = (title: string, resource: string, id: string) => {\n    return {\n        value: title,\n        label: (\n            <Link to={`/${resource}/show/${id}`}>\n                <Text>{title}</Text>\n            </Link>\n        ),\n    };\n};\n\nexport const Header: React.FC = () => {\n    const [value, setValue] = useState<string>("");\n    const [options, setOptions] = useState<IOptions[]>([]);\n\n    const { refetch: refetchPosts } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [{ field: "title", operator: "contains", value }],\n        },\n        queryOptions: {\n            enabled: false,\n            onSuccess: (data) => {\n                const postOptionGroup = data.data.map((item) =>\n                    renderItem(item.title, "posts", item.id),\n                );\n                if (postOptionGroup.length > 0) {\n                    setOptions([\n                        {\n                            label: renderTitle("Posts"),\n                            options: postOptionGroup,\n                        },\n                    ]);\n                }\n            },\n        },\n    });\n\n    useEffect(() => {\n        setOptions([]);\n        refetchPosts();\n    }, [value]);\n\n    return (\n        <AntdLayout.Header\n            style={{\n                padding: "0px 24px",\n                backgroundColor: "#FFF",\n            }}\n        >\n            <AutoComplete\n                style={{ width: "100%", maxWidth: "550px" }}\n                filterOption={false}\n                options={options}\n                onSearch={(value: string) => setValue(value)}\n            >\n                <Input\n                    size="large"\n                    placeholder="Search posts or categories"\n                    suffix={<SearchOutlined />}\n                />\n            </AutoComplete>\n        </AntdLayout.Header>\n    );\n};\n')),(0,a.kt)("p",null,"We created states to dynamically manage the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," properties of the ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/auto-complete"},(0,a.kt)("inlineCode",{parentName:"a"},"<AutoComplete>"))," component. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/core/hooks/data/useList"},(0,a.kt)("inlineCode",{parentName:"a"},"useList"))," hook is triggered whenever the value changes. Likewise, the filter used to fetch the data is updated each time the value changes."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Search value is currently only searched and fetched inside posts. Let's update our code to search both posts and categories according to search value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'...\nexport const Header: React.FC = () => {\n    const [value, setValue] = useState<string>("");\n    const [options, setOptions] = useState<IOptions[]>([]);\n\n    const { refetch: refetchPosts } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [{ field: "title", operator: "contains", value }],\n        },\n        queryOptions: {\n            enabled: false,\n            onSuccess: (data) => {\n                const postOptionGroup = data.data.map((item) =>\n                    renderItem(item.title, "posts", item.id),\n                );\n                if (postOptionGroup.length > 0) {\n                    setOptions((prevOptions) => [\n                        ...prevOptions\n                        {\n                            label: renderTitle("Posts"),\n                            options: postOptionGroup,\n                        },\n                    ]);\n                }\n            },\n        },\n    });\n\n    const { refetch: refetchCategories } = useList<ICategory>({\n        resource: "categories",\n        config: {\n            filters: [{ field: "q", operator: "contains", value }],\n        },\n        queryOptions: {\n            enabled: false,\n            onSuccess: (data) => {\n                const categoryOptionGroup = data.data.map((item) =>\n                    renderItem(item.title, "categories", item.id),\n                );\n                if (categoryOptionGroup.length > 0) {\n                    setOptions((prevOptions) => [\n                        ...prevOptions,\n                        {\n                            label: renderTitle("Categories"),\n                            options: categoryOptionGroup,\n                        },\n                    ]);\n                }\n            },\n        },\n    });\n\n    useEffect(() => {\n        setOptions([]);\n        refetchPosts();\n        refetchCategories();\n    }, [value]);\n\n    return (\n        <AntdLayout.Header\n            style={{\n                padding: "0px 24px",\n                backgroundColor: "#FFF",\n            }}\n        >\n            ...\n        </AntdLayout.Header>\n    );\n};\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"By doing the same implementation on your other resources, you can search more than one resource with a value."))),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-search-example-jzrlp?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-search-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0},29267:function(e,t,n){t.Z=n.p+"assets/images/search-c44dd7ab710b07094e543fdde967d15e.gif"}}]);