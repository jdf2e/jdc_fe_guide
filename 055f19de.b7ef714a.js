(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),b=(n(0),n(198)),c={title:"git\u5206\u652f\u89c4\u8303"},i={id:"git/branch",title:"git\u5206\u652f\u89c4\u8303",description:"### \u4ecb\u7ecd",source:"@site/docs/git/branch.md",permalink:"/jdc_fe_guide/docs/git/branch",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/git/branch.md",sidebar:"someSidebar",previous:{title:"\u7f16\u8f91\u5668\u89c4\u8303",permalink:"/jdc_fe_guide/docs/ide/index"},next:{title:"git\u63d0\u4ea4\u89c4\u8303",permalink:"/jdc_fe_guide/docs/git/commit"}},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u5f00\u53d1\u6d41\u7a0b",id:"\u5f00\u53d1\u6d41\u7a0b",children:[]},{value:"\u4e0a\u7ebf\u6d41\u7a0b",id:"\u4e0a\u7ebf\u6d41\u7a0b",children:[]},{value:"Bugfix \u6d41\u7a0b",id:"bugfix-\u6d41\u7a0b",children:[]},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[]},{value:"\u63a8\u9001\u811a\u672c",id:"\u63a8\u9001\u811a\u672c",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"\u56e0\u4e3aJ-ONE\u4e0a\u7ebf\u5fc5\u987b\u53ea\u80fd\u4ecemaster\u5206\u652f\u62bd\u53d6\u6587\u4ef6\uff0c\u56e0\u6b64\u6211\u4eec\u7ea6\u5b9amaster\u5206\u652f\u53ea\u5b58\u653e\u4e0a\u7ebf\u6587\u4ef6\uff0c\u4e0d\u5b58\u653e\u6e90\u4ee3\u7801\u3002\n")),Object(b.b)("h4",{id:"branch"},"branch"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6bcf\u4e2arepo\u6709\u4e14\u4ec5\u6709\u4ee5\u4e0b\u7684 branch \u548c tag\u3002")),Object(b.b)("p",null," Branch: master \u3001dev \u3001 feat \u3001fix"),Object(b.b)("p",null,"\u5176\u4e2d\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"master \u53d7\u4fdd\u62a4\uff0c\u4e0d\u5b58\u653e\u6e90\u4ee3\u7801\uff0c\u4e0d\u76f4\u63a5\u63d0\u4ea4\u4ee3\u7801\uff0c\u6240\u6709\u7684 \u4e0a\u7ebf\u6587\u4ef6 \u9700\u8981\u63a8\u9001\u5230\u6b64\u5206\u652f\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"dev \u53d7\u4fdd\u62a4\uff0c\u4e3b\u5206\u652f\uff0c\u4e0d\u80fd\u76f4\u63a5\u63d0\u4ea4\u4ee3\u7801\uff0c\u5728\u8fd9\u4e2a\u5206\u652f\u53ea\u80fd\u589e\u52a0\u4ece feat \u5408\u5e76 \u8fc7\u6765\u7684 commit\u3002\u7d27\u6025bug\u9664\u5916\uff0c\u7d27\u6025bug\u5904\u7406\u65b9\u5f0f\u770b\u540e\u6587bugfix\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"feat\u5206\u652f\u9700\u8981dev\u5207\u51fa\uff0c\u7136\u540e\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u63d0\u4ea4\u5408\u5e76\u8bf7\u6c42\u5230 dev.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"fix\u5206\u652f\u9700\u8981dev\u5207\u51fa\uff0c\u7136\u540ebug\u4fee\u590d\u5b8c\u6210\u540e\uff0c\u63d0\u4ea4\u5408\u5e76\u8bf7\u6c42\u5230 dev. \u5373\uff1a",Object(b.b)("br",null)))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"master\ndev\nfeat/xxx\nhotfix/xxx\n\n")),Object(b.b)("h4",{id:"tag"},"Tag"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5bf9\u5e94\u6bcf\u4e2a\u53d1\u5e03\u7248\u672c\u7684\u6e90\u4ee3\u7801 tag\u3002tag\u7248\u672c\u53f7\u4e0e\u9700\u6c42\u7248\u672c\u4e00\u81f4\uff0c\u4ecedev\u5206\u652f\u6253tag\uff0c\u547d\u540d release",Object(b.b)("em",{parentName:"p"},"\u7248\u672c\u53f7"),"\u65e5\u671f\uff0c\u5982\uff1arelease_1.0_20200426")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5bf9\u5e94\u6bcf\u4e2a\u53d1\u5e03\u7248\u672c\u7684\u4e0a\u7ebf\u6587\u4ef6 tag\u3002tag\u7248\u672c\u53f7\u4e0e\u9700\u6c42\u7248\u672c\u4e00\u81f4\uff0c\u547d\u540d dist",Object(b.b)("em",{parentName:"p"},"\u7248\u672c\u53f7"),"\u65e5\u671f\uff0c\u5982\uff1adist_1.0_20200426"))),Object(b.b)("a",{name:"gvw0ft"}),Object(b.b)("h3",{id:"\u5f00\u53d1\u6d41\u7a0b"},"\u5f00\u53d1\u6d41\u7a0b"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u4ecedev\u5206\u652f\u6839\u636e\u9700\u6c42\uff0c\u68c0\u51fa\u5206\u652f ",Object(b.b)("inlineCode",{parentName:"p"},"feat/xxx"),"\uff1b\u5373 ",Object(b.b)("inlineCode",{parentName:"p"},"dev --\x3e feat/xxxx "))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u9884\u53d1\u73af\u5883\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u901a\u8fc7\u540e\uff0c\u5148\u4ecedev\u5206\u652f\u5408\u5e76\u4ee3\u7801 \u5373 ",Object(b.b)("inlineCode",{parentName:"p"},"dev --\x3e feat/xxxx "))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u53d1\u8d77 ",Object(b.b)("inlineCode",{parentName:"p"},"merge request"),"\uff0c\u5f85 ",Object(b.b)("inlineCode",{parentName:"p"},"code review")," \u901a\u8fc7\u540e\uff0c\u8d1f\u8d23\u4eba merge \u4ee3\u7801\uff0c\u5373  ",Object(b.b)("inlineCode",{parentName:"p"},"feat/xxxx --\x3e  dev")))),Object(b.b)("h3",{id:"\u4e0a\u7ebf\u6d41\u7a0b"},"\u4e0a\u7ebf\u6d41\u7a0b"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u786e\u4fdd\u6240\u6709\u7814\u53d1\u5206\u652f \u90fd\u5df2\u7ecf merge \u5230 dev\uff1b")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u4f7f\u7528 dev branch \u7684\u4ee3\u7801\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5982\u679c\u53d1\u73b0 bug\uff0c\u628a\u5bf9\u5e94\u7684 bugfix merge \u5230 dev\uff1b")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5728dev\u5206\u652f\u7f16\u8bd1\u6784\u5efa \u4f7f\u7528\u811a\u672c\u63a8\u9001\u5230 master \u5206\u652f\uff0c\u62bd\u5305\u4e0a\u7ebf\uff1b(\u63a8\u9001\u811a\u672c\u5f80\u4e0b\u770b)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u53d1\u5e03\u5b8c\u6210\u540e\u5728\u5f53\u524d\u7684 dev branch \u6253\u4e0a\u5bf9\u5e94\u7248\u672c\u7684 tag\uff0cmaster\u5206\u652f\u6253\u4e0a\u5bf9\u5e94\u7684\u4e0a\u7ebf\u6587\u4ef6\u7248\u672c\u7684tag\u3002"))),Object(b.b)("h3",{id:"bugfix-\u6d41\u7a0b"},"Bugfix \u6d41\u7a0b"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"dev\u7684bug\uff0c\u76f4\u63a5\u68c0\u51fa ",Object(b.b)("inlineCode",{parentName:"p"},"fix/xxx")," \u4fee\u6b63,\u4fee\u590d\u5b8c\u6210\u6d4b\u8bd5\u901a\u8fc7\u540e\uff0cmerge \u8fdb dev \u5206\u652f\uff1b \u5373 ",Object(b.b)("inlineCode",{parentName:"p"},"dev --\x3e fix/xxxx  --\x3e dev "))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"feat\u5206\u652f\u4e2d\u7684bug\uff0c\u76f4\u63a5\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"feat/xxx")," \u5206\u652f\u4fee\u590d"))),Object(b.b)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5982\u679c\u6d89\u53ca\u5230\u7248\u672c\u540c\u65f6\u8fed\u4ee3\u95ee\u9898\uff0c\u53eb\u4e0a\u76f8\u5173\u4eba\u5458\uff0c\u4e00\u5757\u8ba8\u8bba\u4e00\u4e0b\u786e\u5b9a\u5206\u652f\u5f00\u53d1\u65b9\u6848")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u4ee3\u7801\u5408\u5e76\u524d\u662f\u5426\u9700\u8981\u4ee3\u7801\u8bc4\u5ba1\uff0c\u7531\u9879\u76ee\u8d1f\u8d23\u4eba\u5236\u5b9a")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u524d\u7aef\u81ea\u52a8\u5316\u80fd\u5426\u57fa\u4e8egitlab-ci\u505a\u6301\u7eed\u96c6\u6210"))),Object(b.b)("h3",{id:"\u63a8\u9001\u811a\u672c"},"\u63a8\u9001\u811a\u672c"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# -d \u9700\u8981\u63a8\u9001\u7684\u4e0a\u7ebf\u6587\u4ef6\u76ee\u5f55\n# -b \u63a8\u9001\u5230master\u5206\u652f\n# -e \u628abuild\u76ee\u5f55\u63a8\u9001\u5230\u8fdc\u7aef\u7684\u76ee\u5f55\u4e0b\n\n$ gh-pages -d build -b master -e build\n\n")))}u.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},o=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),o=u(n),d=r,O=o["".concat(c,".").concat(d)]||o[d]||m[d]||b;return n?a.a.createElement(O,i({ref:t},p,{components:n})):a.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<b;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);