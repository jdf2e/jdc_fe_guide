(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),c=n(9),i=(n(0),n(198)),o={title:"git\u63d0\u4ea4\u89c4\u8303"},a={id:"git/commit",title:"git\u63d0\u4ea4\u89c4\u8303",description:"### \u4ecb\u7ecd",source:"@site/docs/git/commit.md",permalink:"/jdc_fe_guide/docs/git/commit",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/git/commit.md",sidebar:"someSidebar",previous:{title:"git\u5206\u652f\u89c4\u8303",permalink:"/jdc_fe_guide/docs/git/branch"},next:{title:"\u547d\u540d\u89c4\u8303",permalink:"/jdc_fe_guide/docs/name/dir"}},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u63d0\u4ea4\u89c4\u8303",id:"\u63d0\u4ea4\u89c4\u8303",children:[]},{value:"\u6821\u9a8c",id:"\u6821\u9a8c",children:[]},{value:"\u81ea\u52a8\u5316",id:"\u81ea\u52a8\u5316",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),Object(i.b)("p",null,"\u53c2\u8003angular\u56e2\u961f\u7684git\u63d0\u4ea4\u89c4\u8303"),Object(i.b)("h3",{id:"\u63d0\u4ea4\u89c4\u8303"},"\u63d0\u4ea4\u89c4\u8303"),Object(i.b)("p",null,"\u683c\u5f0f:\xa0type (scope): subject"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"  - type\n    - \u7528\u4e8e\u8bf4\u660e\xa0`commit`\xa0\u7684\u7c7b\u522b\uff0c\u53ea\u5141\u8bb8\u4f7f\u7528\u4e0b\u976210\u4e2a\u6807\u8bc6\u3002\n      - feat\uff1a\u65b0\u529f\u80fd\uff08feature\uff09\n      - fix\uff1a\u4fee\u8865bug\n      - docs\uff1a\u6587\u6863\uff08documentation\uff09\n      - style\uff1a \u683c\u5f0f\uff08\u4e0d\u5f71\u54cd\u4ee3\u7801\u8fd0\u884c\u7684\u53d8\u52a8\uff09\n      - refactor\uff1a\u91cd\u6784\uff08\u5373\u4e0d\u662f\u65b0\u589e\u529f\u80fd\uff0c\u4e5f\u4e0d\u662f\u4fee\u6539bug\u7684\u4ee3\u7801\u53d8\u52a8\uff09\n      - perf\uff1a\u6027\u80fd\u4f18\u5316\n      - test\uff1a\u589e\u52a0\u6d4b\u8bd5\n      - chore\uff1a\u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u7684\u53d8\u52a8\n      - revert\uff1a\u56de\u9000\n      - build\uff1a\u6253\u5305\n  - scope(\u53ef\u9009)\n    - \u7528\u4e8e\u8bf4\u660e\xa0`commit`\xa0\u5f71\u54cd\u7684\u8303\u56f4\uff0c\u6bd4\u5982Button\u7ec4\u4ef6\u3001store\u3001\u9996\u9875\u3001\u8def\u7531\u7b49\u7b49\uff0c\u89c6\u9879\u76ee\u4e0d\u540c\u800c\u4e0d\u540c\u3002\n  - subject(\u53ef\u9009))\n    - \u662f\xa0`commit`\xa0\u76ee\u7684\u7684\u7b80\u77ed\u63cf\u8ff0\uff0c\u4e0d\u8d85\u8fc750\u4e2a\u5b57\u7b26\u3002\n      - \u4ee5\u52a8\u8bcd\u5f00\u5934\uff0c\u4f7f\u7528\u7b2c\u4e00\u4eba\u79f0\u73b0\u5728\u65f6\uff0c\u6bd4\u5982change\uff0c\u800c\u4e0d\u662fchanged\u6216changes\n      - \u7b2c\u4e00\u4e2a\u5b57\u6bcd\u5c0f\u5199\n      - \u7ed3\u5c3e\u4e0d\u52a0\u53e5\u53f7\uff08.\uff09\n")),Object(i.b)("h3",{id:"\u6821\u9a8c"},"\u6821\u9a8c"),Object(i.b)("p",null,"\u63d0\u4ea4\u7684\u4ee3\u7801\u5fc5\u987b\u901a\u8fc7 eslint \u7684\u6821\u9a8c(\u53ef\u901a\u8fc7 husky \u81ea\u52a8\u5b8c\u6210)"),Object(i.b)("h3",{id:"\u81ea\u52a8\u5316"},"\u81ea\u52a8\u5316"),Object(i.b)("p",null,"husky + commitizen + prettier"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'  "lint-staged": {\n    "*.{js,jsx,less,scss,md,json}": [\n      "prettier --write",\n      "git add"\n    ],\n    "*.ts?(x)": [\n      "prettier --parser=typescript --write",\n      "git add"\n    ]\n  },\n  "husky": {\n    "hooks": {\n      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n    }\n  },\n  "config": {\n    "commitizen": {\n      "path": "./node_modules/cz-customizable"\n    }\n  },\n\n')),Object(i.b)("p",null,"\u6267\u884c\u63d0\u4ea4"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ git add . && git cz\n\n")))}p.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?c.a.createElement(m,a({ref:t},l,{components:n})):c.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);