(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(156)),l=n(158),c=n(160),i={id:"example",title:"Running Example App"},p={id:"version-1.6.1/example",title:"Running Example App",description:"Example app code is located under Example/ folder in the repo.",source:"@site/versioned_docs/version-1.6.1/example.md",permalink:"/react-native-gesture-handler/docs/example",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-1.6.1/example.md",version:"1.6.1",sidebar:"version-1.6.1/docs",previous:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/interactions"},next:{title:"Common handler properties",permalink:"/react-native-gesture-handler/docs/handler-common"}},s=[{value:"Running example app on Expo",id:"running-example-app-on-expo",children:[]},{value:"Running example app locally",id:"running-example-app-locally",children:[]}],u={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Example app code is located under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/Example"}),Object(o.b)("inlineCode",{parentName:"a"},"Example/"))," folder in the repo.\nIt showcases the majority of the Gesture Handler library features.\nThe app consist of the list of single screen examples presenting the capabilities of the library.\nEach example is located under a separate folder under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/Example"}),Object(o.b)("inlineCode",{parentName:"a"},"Example/")),"."),Object(o.b)(c.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(l.a)("gifs/sampleapp.gif"),width:"180",height:"320"})),Object(o.b)("h2",{id:"running-example-app-on-expo"},"Running example app on Expo"),Object(o.b)("p",null,"You can run example app on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://expo.io"}),"Expo"),". Follow instructions under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"}),"this link")," to do so. Note that the app published to Expo is not the most up to date version. We publish updates whenever new version of Expo SDK is released. If you wish to try the most up to date version you will have to run example app locally. For that see below \ud83d\udc47"),Object(o.b)("h2",{id:"running-example-app-locally"},"Running example app locally"),Object(o.b)("p",null,"Before you begin you should follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/getting-started.html"}),"React Native's setup steps")," to make sure you have all the tools necessary to build and run React Native apps installed.\nThe example app is a regular React Native app, so in case of problems or to learn about available commands you may want to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/README.md"}),"check react-native cli documentation"),"."),Object(o.b)("p",null,"In order to run example app you need to clone the repo first:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:software-mansion/react-native-gesture-handler.git\n")),Object(o.b)("p",null,"Then go to the library folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd react-native-gesture-handler/\n")),Object(o.b)("p",null,"Install dependencies of library with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(o.b)("p",null,"Then go to the ",Object(o.b)("inlineCode",{parentName:"p"},"Example")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd Example\n")),Object(o.b)("p",null,"Install dependencies of example with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(o.b)("p",null,"Run development server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn start\n")),Object(o.b)("p",null,"Finally run one of the commands below in order to build, install and launch the app on Android:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"react-native run-android\n")),Object(o.b)("p",null,"or on iOS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"react-native run-ios\n")),Object(o.b)("p",null,"You will need to have an Android or iOS device or emulator connected and ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-cli")," package installed globally."))}b.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";var a=n(0),r=n(34);t.a=function(){return Object(a.useContext)(r.a)}},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(157);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},160:function(e,t,n){"use strict";var a=n(0),r=n.n(a);const o={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=({children:e})=>r.a.createElement("div",{style:o.container},a.Children.map(e,e=>Object(a.cloneElement)(e,{...e.props.style,style:o.img})))}}]);