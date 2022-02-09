"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49871],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||a;return n?i.createElement(u,r(r({ref:t},l),{},{components:n})):i.createElement(u,r({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],s={id:"notification-provider",title:"Notification Provider"},p=void 0,c={unversionedId:"core/providers/notification-provider",id:"core/providers/notification-provider",isDocsHomePage:!1,title:"Notification Provider",description:"refine let's you set a notification API by providing the notificationProvider property to the `` component.",source:"@site/docs/core/providers/notification-provider.md",sourceDirName:"core/providers",slug:"/core/providers/notification-provider",permalink:"/docs/next/core/providers/notification-provider",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/providers/notification-provider.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"notification-provider",title:"Notification Provider"},sidebar:"someSidebar",previous:{title:"Router Provider",permalink:"/docs/next/core/providers/router-provider"},next:{title:"useCreate",permalink:"/docs/next/core/hooks/data/useCreate"}},l=[{value:"Usage",id:"usage",children:[],level:2},{value:"Creating an <code>notificationProvider</code>",id:"creating-an-notificationprovider",children:[{value:"<code>open</code>",id:"open",children:[],level:3},{value:"<code>close</code>",id:"close",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," let's you set a notification API by providing the ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," is an object with close and open methods. ",(0,a.kt)("strong",{parentName:"p"},"refine")," uses these methods to show and hide notifications. These methods can be called from anywhere in the application with ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/core/hooks/useNotification"},(0,a.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," must include following methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const notificationProvider = {\n    show: () => {},\n    close: () => {},\n};\n")),(0,a.kt)("p",null,"And these methods types like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'interface NotificationProvider {\n    open: (params: OpenNotificationParams) => void;\n    close: (key: string) => void;\n}\n\ninterface OpenNotificationParams {\n    key?: string;\n    message: string;\n    type: "success" | "error" | "progress";\n    description?: string;\n    cancelMutation?: () => void;\n    undoableTimeout?: number;\n}\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are using Ant Design you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," exported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," package. It is compatible with Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/notification/#header"},(0,a.kt)("inlineCode",{parentName:"a"},"notification"))," component."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider } from "@pankod/refine-antd";\n\n<Refine\n    ...\n    notificationProvider={notificationProvider}\n/>\n')))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," in refine, we have to pass the notificationProvider to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, NotificationProvider } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n//highlight-start\nconst notificationProvider: NotificationProvider = {\n    open: () => {},\n    close: () => {},\n};\n//highlight-end\n\nconst App = () => {\n    return (\n        <Refine\n            //highlight-next-line\n            notificationProvider={notificationProvider}\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        />\n    );\n};\n')),(0,a.kt)("p",null,"By default, ",(0,a.kt)("strong",{parentName:"p"},"refine")," doesn't require ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," configuration."),(0,a.kt)("p",null,"If an ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," property is not provided, ",(0,a.kt)("strong",{parentName:"p"},"refine")," will use the default ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider"),". This default ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," lets the app work without an notification.\nIf your app doesn't require ",(0,a.kt)("inlineCode",{parentName:"p"},"notification"),", no further setup is necessary for the app to work."),(0,a.kt)("h2",{id:"creating-an-notificationprovider"},"Creating an ",(0,a.kt)("inlineCode",{parentName:"h2"},"notificationProvider")),(0,a.kt)("p",null,"We will build a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," from scratch to show the logic of how ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationProvider")," methods interact with the app. For this, we will use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fkhadra/react-toastify"},(0,a.kt)("inlineCode",{parentName:"a"},"react-toastify"))," package, which is very ",(0,a.kt)("strong",{parentName:"p"},"popular")," in the ",(0,a.kt)("strong",{parentName:"p"},"React Ecosystem"),". If you want to use another notification library, you can use the same approach."),(0,a.kt)("p",null,"Before we start, we need set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-toastify")," requirements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\n\n//highlight-start\nimport { ToastContainer } from "react-toastify";\nimport "react-toastify/dist/ReactToastify.css";\n//highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            ...\n            //highlight-start\n            Layout={({ children }) => (\n                <div>\n                    {children}\n                    <ToastContainer />\n                </div>\n            )}\n            //highlight-end\n        />\n    );\n};\n\nexport default App;\n\n')),(0,a.kt)("h3",{id:"open"},(0,a.kt)("inlineCode",{parentName:"h3"},"open")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," calls this method when it wants to open a notification. It also helps you to get the right notification by sending some parameters to the ",(0,a.kt)("strong",{parentName:"p"},"refine")," open method. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"description"),", etc..."),(0,a.kt)("p",null,"Here we open a ",(0,a.kt)("strong",{parentName:"p"},"notification")," with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fkhadra/react-toastify"},(0,a.kt)("inlineCode",{parentName:"a"},"react-toastify")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n    open: ({ message, key, type }) => {\n        toast(message, {\n            toastId: key,\n            type,\n        });\n    },\n};\n')),(0,a.kt)("p",null,"In case the notification is called repeatedly with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", let's update the previous notification instead of creating a new one."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toast.isActive(key)")," returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the notification is still active. So we can check if the notification is already active and update it instead of creating a new one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n    open: ({ message, key, type }) => {\n        //highlight-start\n        if (toast.isActive(key)) {\n            toast.update(key, {\n                render: message,\n                type,\n            });\n        } else {\n            //highlight-end\n            toast(message, {\n                toastId: key,\n                type,\n            });\n        }\n    },\n};\n')),(0,a.kt)("p",null,"Now, let's create a custom notification when the mutation mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"undoable"),". In this case, ",(0,a.kt)("strong",{parentName:"p"},"refine")," sends notification's type as ",(0,a.kt)("inlineCode",{parentName:"p"},"progress")," as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"cancelMutation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"undoableTimeout"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," decreases by 1 every second until it reaches 0. When it reaches 0, the notification is closed. ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," method is called again with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," each countdown. So, the notification should be updated with the new ",(0,a.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n    open: ({ message, key, type }) => {\n        //highlight-start\n        if (type === "progress") {\n            if (toast.isActive(key)) {\n                toast.update(key, {\n                    progress: undoableTimeout && (undoableTimeout / 10) * 2,\n                    render: (\n                        <UndoableNotification\n                            message={message}\n                            cancelMutation={cancelMutation}\n                        />\n                    ),\n                    type: "default",\n                });\n            } else {\n                toast(\n                    <UndoableNotification\n                        message={message}\n                        cancelMutation={cancelMutation}\n                    />,\n                    {\n                        toastId: key,\n                        updateId: key,\n                        closeOnClick: false,\n                        closeButton: false,\n                        autoClose: false,\n                        progress: undoableTimeout && (undoableTimeout / 10) * 2,\n                    },\n                );\n            }\n        } else {\n            //highlight-end\n            if (toast.isActive(key)) {\n                toast.update(key, {\n                    render: message,\n                    //highlight-start\n                    closeButton: true,\n                    autoClose: 5000,\n                    //highlight-end\n                    type,\n                });\n            } else {\n                toast(message, {\n                    toastId: key,\n                    type,\n                });\n            }\n        }\n    },\n};\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": We add ",(0,a.kt)("inlineCode",{parentName:"p"},"closeButton")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"autoClose")," for progress notifications are not closable by default. Because, when progress is done, the progress notification to be updated should be closeable.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"See UndoableNotification Component"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type UndoableNotification = {\n    message: string;\n    cancelMutation?: () => void;\n    closeToast?: () => void;\n};\n\nexport const UndoableNotification: React.FC<UndoableNotification> = ({\n    closeToast,\n    cancelMutation,\n    message,\n}) => {\n    return (\n        <div>\n            <p>{message}</p>\n            <button\n                onClick={() => {\n                    cancelMutation?.();\n                    closeToast?.();\n                }}\n            >\n                Undo\n            </button>\n        </div>\n    );\n};\n")))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"open")," method will be accessible via ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/core/hooks/useNotification"},(0,a.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@pankod/refine-core";\n\nconst { open } = useNotification();\n\nopen({\n    message: "Hey",\n    description: "I <3 Refine",\n    key: "unique-id",\n});\n')))),(0,a.kt)("h3",{id:"close"},(0,a.kt)("inlineCode",{parentName:"h3"},"close")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," calls this method when it wants to close a notification. ",(0,a.kt)("strong",{parentName:"p"},"refine")," pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," of the notification to the ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," method. So, we can handle the notification close logic with this ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n    //...\n    close: (key) => toast.dismiss(key),\n};\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"close")," method will be accessible via ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/core/hooks/useNotification"},(0,a.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@pankod/refine-core";\n\nconst { close } = useNotification();\n\nclose("displayed-notification-key");\n')))),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-react-toastify-example-ynsf7?autoresize=1&fontsize=14&module=%2Fsrc%2Fproviders%2FnotificationProvider.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-react-toastify-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0}}]);