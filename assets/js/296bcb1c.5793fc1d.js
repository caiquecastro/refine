"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),o=n(65426),r=n(17010);const s={title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react","memoization","usecallback","performance"],image:"/img/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-usecallback-guide",source:"@site/blog/2022-09-20-react-use-callback.md",title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"usecallback",permalink:"/blog/tags/usecallback"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:6.185,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react","memoization","usecallback","performance"],image:"/img/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},prevItem:{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react"},nextItem:{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect"},relatedPosts:[{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.635,date:"2022-03-01T00:00:00.000Z"},{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed Arslan Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"https://media-exp1.licdn.com/dms/image/C5603AQHKaAhTXytlEw/profile-displayphoto-shrink_800_800/0/1643978601436?e=1666224000&v=beta&t=vM0ajc7YqtkLTEhxsLs-cIcc1bGnYwl8-Ct1bsCoUL0",key:"muhammed_arslan"}],readingTime:8.64,date:"2022-10-07T00:00:00.000Z"},{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.925,date:"2021-10-25T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.44,date:"2022-09-30T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.87,date:"2022-10-10T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.47,date:"2022-10-03T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Pass Callback from Parent to Child",id:"pass-callback-from-parent-to-child",level:2},{value:"Referential Integrity",id:"referential-integrity",level:2},{value:"Memoizing Event Listeners with <code>useCallback()</code>",id:"memoizing-event-listeners-with-usecallback",level:2},{value:"Other Cases",id:"other-cases",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This post is about using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook in React. This is the third part of the series titled Memoization in React."),(0,i.kt)("p",null,"In React, callback functions like event handlers inside a component are re-created as unique function objects at every re-render of the component. When a callback is passed from a parent to a child as a prop, the child component re-renders just because of the absence of referential integrity of the callback. ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps maintain the callback's referential integrity and prevent these re-renders."),(0,i.kt)("p",null,"We'll look at the details of the ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook with an example demonstrated in the previous post titled ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-usememo/"},"Memoization in React - How ",(0,i.kt)("inlineCode",{parentName:"a"},"useMemo()")," Works"),". "),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#referential-integrity"},"Referential Integrity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,i.kt)("inlineCode",{parentName:"a"},"useCallback()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#other-cases"},"Other Cases"))),(0,i.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,i.kt)("p",null,"The app is based on the idea of a list of posts on a blog."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"The example app live code")),(0,i.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing callback functions that are passed as a prop from a parent component to a child. We are going to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook for this."),(0,i.kt)("h2",{id:"pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child"),(0,i.kt)("p",null,"In this example, we'll consider the ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPosts />")," components."),(0,i.kt)("p",null,"As you can see below, ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," fetches and sets ",(0,i.kt)("inlineCode",{parentName:"p"},"userPosts")," when the compnent renders:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'import React, { useEffect, useState } from "react";\nimport fetchUserPosts from "../fetch/fetchUserPosts";\nimport UserPostsList from "./UserPostsList";\n\nconst UserPostsIndex = ({ signedIn }) => {\n  const [userPosts, setUserPosts] = useState([]);\n\n  const deletePost = e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n  };\n\n  useEffect(() => {\n    const posts = fetchUserPosts();\n    setUserPosts(posts);\n  }, []);\n\n\n  return (\n    <div className="my-1 p-2 box">\n      <div className="m-1 py-1">\n        <h2 className="heading-md">Your Posts</h2>\n        <p className="m-1 p-1">{signedIn ? `Signed in`: `Signed out `}</p>\n        {\n          userPosts &&\n          (\n            <div className="px-1">\n              {\n                <UserPostsList userPosts={userPosts}\n                  deletePost={deletePost}\n                />\n              }\n            </div>\n          )\n        }\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,i.kt)("p",null,"In the JSX, we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePost()")," function passed on to ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, along with ",(0,i.kt)("inlineCode",{parentName:"p"},"userPosts"),". Prior to that, ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex>")," receives ",(0,i.kt)("inlineCode",{parentName:"p"},"signedIn")," as a prop from ",(0,i.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, we receive ",(0,i.kt)("inlineCode",{parentName:"p"},"userPosts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePost()")," function and display a ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPost />")," for each post in ",(0,i.kt)("inlineCode",{parentName:"p"},"userPosts")," array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"import React from 'react';\nimport UserPost from './UserPost';\n\nconst UserPostsList = ({ userPosts, deletePost }) => {\n\n  console.log('Rendering UserPostsList component');\n\n  return (\n    (\n      <div className=\"px-1\">\n        {\n          userPosts.map(post => (\n            <div key={post.id} className=\"my-1 box flex-row\">\n              <UserPost post={post} />\n              <button className=\"btn btn-danger\" data-post-id={post.id} onClick={deletePost}>Delete</button>\n            </div>\n        ))\n        }\n      </div>\n    )\n  );\n};\n\nexport default React.memo(UserPostsList);\n")),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePost()")," is used to remove an item from the list."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is just a presentational component where we display the title as a link. Feel free to go over it in your editor."),(0,i.kt)("p",null,"Now let's add following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},"console.log('Rendering UserPostsIndex component');\n")),(0,i.kt)("p",null,"and this one in ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"console.log('Rendering UserPostsList component');\n")),(0,i.kt)("p",null,"If we check our console, we can see the logs for the inital rendering of the components.",(0,i.kt)("br",{parentName:"p"}),"\n","Then if we click the ",(0,i.kt)("inlineCode",{parentName:"p"},"SignOut")," button on the navbar, we see batches of renders from ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPost />"),":"),(0,i.kt)("div",{class:"img-container","align-items":"center"},(0,i.kt)("img",{style:{alignSelf:"center",width:"400px"},src:o.Z,alt:"usecallback1"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"We can account for the re-render of ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," because the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"signedIn")," prop changed. However, re-rendering ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," does not make sense because ",(0,i.kt)("inlineCode",{parentName:"p"},"userPosts")," does not change with the change in the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"signedIn"),".  "),(0,i.kt)("p",null,"We already memoized ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"React.memo()"),". We don't see any reason why it should re-render due changes in any ancestor's state."),(0,i.kt)("p",null," Does ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePost()")," change ?"),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/pankod/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,i.kt)("h2",{id:"referential-integrity"},"Referential Integrity"),(0,i.kt)("p",null,"Well, ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePost()")," changes, and it changes due to breaking of ",(0,i.kt)("strong",{parentName:"p"},"referential integrity"),". And this change triggers a re-render in ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," which we don't expect to see."),(0,i.kt)("p",null,"In React, a function passed to a component as a prop fails to maintain referential integrity because a new function object is created at every render from a function declared inside a parent component. So the value of the prop in the receiver component is different at every re-render of the parent. As a result, the receiver also re-renders, unexpectedly."),(0,i.kt)("p",null,"In our example, ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," is not expected to be re-rendered, but it does because referential integrity fails as ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePost()")," is a different function object at every re-render of ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", i.e. they are not equal. So, when we change ",(0,i.kt)("inlineCode",{parentName:"p"},"signedIn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," re-renders, and so ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," also re-renders."),(0,i.kt)("h2",{id:"memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,i.kt)("inlineCode",{parentName:"h2"},"useCallback()")),(0,i.kt)("p",null,"Now, memoizing ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePost()")," produces the same function at every re-render. Let's memoize it with ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback()")," by making the following changes in ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'  // highlight-next-line\nimport React, { useCallback, useEffect, useState } from "react";\n\nconst UserPostsIndex = ({ signedIn }) => {\n\n// highlight-next-line\n  const deletePost = useCallback(e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n    // highlight-next-line\n  }, [userPosts]);\n\n  ...\n\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,i.kt)("p",null,"Now, if we click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign Out")," button a few times, we'll see in the console that ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," is re-rendered, but ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is not:"),(0,i.kt)("div",{class:"img-container","align-items":"center"},(0,i.kt)("img",{style:{alignSelf:"center",width:"400px"},src:r.Z,alt:"usecallback2"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"This is because ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback()")," caches and produces the same copy of ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePost()")," at every render of ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", until its dependencies change. "),(0,i.kt)("p",null,"Here, a change in ",(0,i.kt)("inlineCode",{parentName:"p"},"userPosts")," triggers renewal of the memo of the function, so everytime the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"userPosts")," changes, ",(0,i.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," will be re-rendered."),(0,i.kt)("h2",{id:"other-cases"},"Other Cases"),(0,i.kt)("p",null,"Memoized callbacks are very important to maintain referential integrity so that the same function object is made available every time a component re-renders. ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback()")," is also used to cache callbacks in debouncing, as well as dependencies in hooks like ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we looked at how re-renders of a parent component lead to violation of referential integrity of callback functions passed in as props to child components, which causes unnecessary re-renders of a child. ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps us produce the same function object at every re-render of the parent, and be pass it to the child. This prevents the unnecessary re-renders of child components."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,i.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,i.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/blog/react-memoization-memo/?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"react-memoization-memo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,i.kt)("p",null,"Low-code React frameworks are great for gaining development speed but they often fall short of flexibility if you need extensive styling and customization for your project."),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine"),",if you are interested in a headless framework you can use with any custom design or UI-Kit for 100% control over styling."),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/pankod/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is an open-source React-based framework for building CRUD applications ",(0,i.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,i.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,i.kt)("strong",{parentName:"p"},"styling"),", ",(0,i.kt)("strong",{parentName:"p"},"customization")," and ",(0,i.kt)("strong",{parentName:"p"},"project workflow.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,i.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects."))}u.isMDXComponent=!0},65426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/usecallback1-40a9e312d402ada1effd8c6d41d8603d.png"},17010:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/usecallback2-588f68ce5217abd67650ca5745cc200a.png"}}]);