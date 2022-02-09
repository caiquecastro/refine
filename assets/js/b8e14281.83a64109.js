"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45017],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53402:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(82897),l=n(74398),s=n(82520),p=["components"],d={id:"multipart-upload",title:"Multipart Upload"},m=void 0,u={unversionedId:"guides-and-concepts/upload/multipart-upload",id:"version-2.xx.xx/guides-and-concepts/upload/multipart-upload",isDocsHomePage:!1,title:"Multipart Upload",description:"We will show you how to multipart upload with refine.",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/upload/multipart-upload.md",sourceDirName:"guides-and-concepts/upload",slug:"/guides-and-concepts/upload/multipart-upload",permalink:"/docs/2.xx.xx/guides-and-concepts/upload/multipart-upload",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/upload/multipart-upload.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"multipart-upload",title:"Multipart Upload"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Live / Realtime",permalink:"/docs/2.xx.xx/guides-and-concepts/real-time"},next:{title:"Base64 Upload",permalink:"/docs/2.xx.xx/guides-and-concepts/upload/base64-upload"}},c=[{value:"Create Form",id:"create-form",children:[],level:3},{value:"Edit Form",id:"edit-form",children:[],level:3},{value:"Uploading State",id:"uploading-state",children:[],level:3},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],g={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will show you how to multipart upload with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,"Let's start with the ",(0,i.kt)("inlineCode",{parentName:"p"},"creation form")," first."),(0,i.kt)("h3",{id:"create-form"},"Create Form"),(0,i.kt)("p",null,"Let's add the image field to the post ",(0,i.kt)("inlineCode",{parentName:"p"},"creation form"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { \n// highlight-start\n    Upload,\n    getValueFromEvent,\n    useApiUrl,\n// highlight-end\n    Create,\n    Form,\n    Input,\n    useForm,\n} from "@pankod/refine";\n\nexport const PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n// highlight-next-line\n    const apiUrl = useApiUrl();\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Image">\n                    <Form.Item\n                        name="image"\n                        valuePropName="fileList"\n// highlight-next-line\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                    >\n// highlight-start\n                        <Upload.Dragger\n                            name="file"\n                            action={`${apiUrl}/media/upload`}\n                            listType="picture"\n                            maxCount={5}\n                            multiple\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n// highlight-end\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    image: [\n        {\n            uid: string;\n            name: string;\n            url: string;\n            status: "error" | "success" | "done" | "uploading" | "removed";\n        },\n    ];\n}\n')),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We can reach the API URL by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useApiUrl")," hook."))),(0,i.kt)("p",null,"It will look like this."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:o.Z,alt:"multipart upload in a create page"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"What we need now is an upload end-point that accepts multipart uploads. We write this address in the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/media/upload"',title:'"[POST]','https://api.fake-rest.refine.dev/media/upload"':!0},'{\n    "file": "binary"\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This end-point should be ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-type: multipart/form-data")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Form Data: file: binary"),"?."))),(0,i.kt)("p",null,"This end-point should respond similarly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/media/upload"',title:'"[POST]','https://api.fake-rest.refine.dev/media/upload"':!0},'{\n    "url": "https://example.com/uploaded-file.jpeg"\n}\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:l.Z,alt:"multipart upload uploaded item"})),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"getValueFromEvent")," method to convert the uploaded files to ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/#UploadFile"},"Antd UploadFile")," object."))),(0,i.kt)("p",null,"This data is sent to the API when form submitted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/posts"',title:'"[POST]','https://api.fake-rest.refine.dev/posts"':!0},'{\n    "title": "Test",\n    "image": [\n        {\n            "uid": "rc-upload-1620630541327-7",\n            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n            "type": "image/jpeg",\n            "size": 70922,\n            "percent": 100,\n            "status": "done"\n        }\n    ]\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following data are required for the ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/upload"},"Antd Upload")," component and all should be saved."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uid"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"File Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},"Download URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},"error, success, done, uploading, removed")))),(0,i.kt)("h3",{id:"edit-form"},"Edit Form"),(0,i.kt)("p",null,"Let's add the image field to the post editing form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/edit.tsx"',title:'"pages/posts/edit.tsx"'},'import { \n// highlight-start\n    Upload,\n    getValueFromEvent,\n    useApiUrl,\n// highlight-end\n    Edit,\n    Form,\n    Input,\n    useForm,\n} from "@pankod/refine";\n\nexport const PostEdit: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n// highlight-next-line\n    const apiUrl = useApiUrl();\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Image">\n                    <Form.Item\n                        name="image"\n                        valuePropName="fileList"\n// highlight-next-line\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                    >\n// highlight-start\n                        <Upload.Dragger\n                            name="file"\n                            action={`${apiUrl}/media/upload`}\n                            listType="picture"\n                            maxCount={5}\n                            multiple\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n// highlight-end\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:s.Z,alt:"multipart upload in edit page"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"A request, like the one below, is sent for edit form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[GET] https://api.fake-rest.refine.dev/posts/1"',title:'"[GET]','https://api.fake-rest.refine.dev/posts/1"':!0},'{\n    "id": 1,\n    "title": "Test",\n    "image": [\n        {\n            "uid": "rc-upload-1620630541327-7",\n            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n            "type": "image/jpeg",\n            "size": 70922,\n            "percent": 100,\n            "status": "done"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"This data is sent to the API when form is submitted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[PUT] https://api.fake-rest.refine.dev/posts/1"',title:'"[PUT]','https://api.fake-rest.refine.dev/posts/1"':!0},'{\n    "title": "Test",\n    "image": [\n        {\n            "uid": "rc-upload-1620630541327-7",\n            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n            "type": "image/jpeg",\n            "size": 70922,\n            "percent": 100,\n            "status": "done"\n        }\n    ]\n}\n')),(0,i.kt)("h3",{id:"uploading-state"},"Uploading State"),(0,i.kt)("p",null,'You may want to disable the "Save" button in the form while the upload is going on. To do this, you can use the ',(0,i.kt)("inlineCode",{parentName:"p"},"useFileUploadState")," hook."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import {\n    Upload,\n    getValueFromEvent,\n// highlight-next-line\n    useFileUploadState,\n    Create,\n    Form,\n    Input,\n    useForm,\n    useApiUrl,\n} from "@pankod/refine";\n\nexport const PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n// highlight-next-line\n    const { isLoading, onChange } = useFileUploadState();\n\n    const apiUrl = useApiUrl();\n\n    return (\n        <Create\n// highlight-start\n            saveButtonProps={{\n                ...saveButtonProps,\n                disabled: isLoading,\n            }}\n// highlight-end\n        >\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Image">\n                    <Form.Item\n                        name="image"\n                        valuePropName="fileList"\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            action={`${apiUrl}/media/upload`}\n                            listType="picture"\n                            maxCount={5}\n                            multiple\n// highlight-next-line\n                            onChange={onChange}\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n')),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-multipart-upload-example-88thp?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-multipart-upload-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0},82897:function(e,t,n){t.Z=n.p+"assets/images/create-1f2305f328a72a111a42d715d4a08f4e.png"},82520:function(e,t,n){t.Z=n.p+"assets/images/edit-8cfa57412cd2f21abc00b4daba58e17f.png"},74398:function(e,t,n){t.Z=n.p+"assets/images/uploaded-95ffa22caa8021e61d53ffd0e7e62c63.png"}}]);