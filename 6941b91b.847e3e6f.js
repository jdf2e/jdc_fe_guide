(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(9),c=(t(0),t(198)),b={title:"\u8bed\u8a00\u89c4\u8303"},l={id:"js/language",title:"\u8bed\u8a00\u89c4\u8303",description:"## \u8bed\u8a00\u89c4\u8303",source:"@site/docs/js/language.md",permalink:"/jdc_fe_guide/docs/js/language",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/js/language.md",sidebar:"someSidebar",previous:{title:"\u4ee3\u7801\u89c4\u8303",permalink:"/jdc_fe_guide/docs/js/code"},next:{title:"React \u98ce\u683c\u6307\u5357",permalink:"/jdc_fe_guide/docs/react/code"}},o=[{value:"\u8bed\u8a00\u89c4\u8303",id:"\u8bed\u8a00\u89c4\u8303",children:[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u5f15\u7528",id:"\u5f15\u7528",children:[]},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",children:[]},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",children:[]},{value:"\u89e3\u6784\u8d4b\u503c",id:"\u89e3\u6784\u8d4b\u503c",children:[]},{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",children:[]},{value:"\u51fd\u6570",id:"\u51fd\u6570",children:[]},{value:"\u539f\u578b",id:"\u539f\u578b",children:[]},{value:"\u6a21\u5757",id:"\u6a21\u5757",children:[]},{value:"\u8fed\u4ee3\u5668",id:"\u8fed\u4ee3\u5668",children:[]},{value:"\u5bf9\u8c61\u5c5e\u6027",id:"\u5bf9\u8c61\u5c5e\u6027",children:[]},{value:"\u53d8\u91cf\u58f0\u660e",id:"\u53d8\u91cf\u58f0\u660e",children:[]},{value:"Hoisting",id:"hoisting",children:[]},{value:"\u5206\u53f7",id:"\u5206\u53f7",children:[]},{value:"\u6807\u51c6\u7279\u6027",id:"\u6807\u51c6\u7279\u6027",children:[]},{value:"eval()",id:"eval",children:[]},{value:"with() {}",id:"with-",children:[]},{value:"for-in \u5faa\u73af",id:"for-in-\u5faa\u73af",children:[]},{value:"\u4fee\u6539\u5185\u7f6e\u5bf9\u8c61\u7684\u539f\u578b",id:"\u4fee\u6539\u5185\u7f6e\u5bf9\u8c61\u7684\u539f\u578b",children:[]}]}],i={rightToc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u8bed\u8a00\u89c4\u8303"},"\u8bed\u8a00\u89c4\u8303"),Object(c.b)("p",null,"JavaScript \u662f\u4e00\u79cd\u5ba2\u6237\u7aef\u811a\u672c\u8bed\u8a00\uff0c\u8fd9\u91cc\u5217\u51fa\u4e86\u7f16\u5199 JavaScript \u65f6\u9700\u8981\u9075\u5b88\u7684\u89c4\u5219\u3002"),Object(c.b)("h3",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u57fa\u672c\u7c7b\u578b"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32"),Object(c.b)("li",{parentName:"ul"},"\u6570\u503c"),Object(c.b)("li",{parentName:"ul"},"\u5e03\u5c14\u7c7b\u578b"),Object(c.b)("li",{parentName:"ul"},"null"),Object(c.b)("li",{parentName:"ul"},"undefined")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const foo = 1\nlet bar = foo\n\nbar = 9\n\nconsole.log(foo, bar) // 1, 9\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u590d\u6742\u7c7b\u578b"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"object"),Object(c.b)("li",{parentName:"ul"},"array"),Object(c.b)("li",{parentName:"ul"},"function")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const foo = [1, 2, 3]\nconst bar = foo\n\nbar[0] = 9\n\nconsole.log(foo[0], bar[0]) // 9, 9\n")))),Object(c.b)("h3",{id:"\u5f15\u7528"},"\u5f15\u7528"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"const")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"let")," \u90fd\u662f\u5757\u7ea7\u4f5c\u7528\u57df\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"var")," \u662f\u51fd\u6570\u7ea7\u4f5c\u7528\u57df"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5bf9\u6240\u6709\u5f15\u7528\u90fd\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"const"),"\uff0c\u4e0d\u8981\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"var")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nvar a = 1\nvar b = 2\n\n// good\nconst a = 1\nconst b = 2\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5982\u679c\u5f15\u7528\u662f\u53ef\u53d8\u52a8\u7684\uff0c\u5219\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"let")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nvar count = 1\nif (count < 10) {\n  count += 1\n}\n\n// good\nlet count = 1\nif (count < 10) {\n  count += 1\n}\n")))),Object(c.b)("h3",{id:"\u5bf9\u8c61"},"\u5bf9\u8c61"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u4f7f\u7528\u5b57\u9762\u91cf\u503c\u521b\u5efa\u5bf9\u8c61"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst a = new Object{}\n\n// good\nconst a = {}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u522b\u4f7f\u7528\u4fdd\u7559\u5b57\u4f5c\u4e3a\u5bf9\u8c61\u7684\u952e\u503c\uff0c\u8fd9\u6837\u5728 IE8 \u4e0b\u4e0d\u4f1a\u8fd0\u884c"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst a = {\n  default: {},  // default \u662f\u4fdd\u7559\u5b57\n  common: {}\n}\n\n// good\nconst a = {\n  defaults: {},\n  common: {}\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u4f7f\u7528\u5bf9\u8c61\u65b9\u6cd5\u7684\u7b80\u5199\u65b9\u5f0f"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst item = {\n  value: 1,\n\n  addValue: function (val) {\n    return item.value + val\n  }\n}\n\n// good\nconst item = {\n  value: 1,\n\n  addValue(val) {\n    return item.value + val\n  }\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u4f7f\u7528\u5bf9\u8c61\u5c5e\u6027\u503c\u7684\u7b80\u5199\u65b9\u5f0f"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const job = 'FrontEnd'\n\n// bad\nconst item = {\n  job: job\n}\n\n// good\nconst item = {\n  job\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5bf9\u8c61\u5c5e\u6027\u503c\u7684\u7b80\u5199\u65b9\u5f0f\u8981\u548c\u58f0\u660e\u5f0f\u7684\u65b9\u5f0f\u5206\u7ec4"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const job = 'FrontEnd'\nconst department = 'JDC'\n\n// bad\nconst item = {\n  sex: 'male',\n  job,\n  age: 25,\n  department\n}\n\n// good\nconst item = {\n  job,\n  department,\n  sex: 'male',\n  age: 25\n}\n")))),Object(c.b)("h3",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u4f7f\u7528\u5b57\u9762\u91cf\u503c\u521b\u5efa\u6570\u7ec4"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst items = new Array()\n\n// good\nconst items = []\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5411\u6570\u7ec4\u4e2d\u6dfb\u52a0\u5143\u7d20\u65f6\uff0c\u8bf7\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"push")," \u65b9\u6cd5"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const items = []\n\n// bad\nitems[items.length] = 'test'\n\n// good\nitems.push('test')\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4f7f\u7528\u62d3\u5c55\u8fd0\u7b97\u7b26 ",Object(c.b)("inlineCode",{parentName:"p"},"...")," \u590d\u5236\u6570\u7ec4"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst items = []\nconst itemsCopy = []\nconst len = items.length\nlet i\n\n// bad\nfor (i = 0; i < len; i++) {\n  itemsCopy[i] = items[i]\n}\n\n// good\nitemsCopy = [...items]\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4f7f\u7528\u6570\u7ec4\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"map")," \u7b49\u65b9\u6cd5\u65f6\uff0c\u8bf7\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"return")," \u58f0\u660e\uff0c\u5982\u679c\u662f\u5355\u4e00\u58f0\u660e\u8bed\u53e5\u7684\u60c5\u51b5\uff0c\u53ef\u7701\u7565 ",Object(c.b)("inlineCode",{parentName:"p"},"return")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// good\n[1, 2, 3].map(x => {\n  const y = x + 1\n  return x * y\n})\n\n// good\n[1, 2, 3].map(x => x + 1)\n\n// bad\nconst flat = {}\n[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {\n  const flatten = memo.concat(item)\n  flat[index] = flatten\n})\n\n// good\nconst flat = {}\n[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {\n  const flatten = memo.concat(item)\n  flat[index] = flatten\n  return flatten\n})\n\n// bad\ninbox.filter((msg) => {\n  const { subject, author } = msg\n  if (subject === 'Mockingbird') {\n    return author === 'Harper Lee'\n  } else {\n    return false\n  }\n})\n\n// good\ninbox.filter((msg) => {\n  const { subject, author } = msg\n  if (subject === 'Mockingbird') {\n    return author === 'Harper Lee'\n  }\n\n  return false\n})\n")))),Object(c.b)("h3",{id:"\u89e3\u6784\u8d4b\u503c"},"\u89e3\u6784\u8d4b\u503c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5f53\u9700\u8981\u4f7f\u7528\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027\u65f6\uff0c\u8bf7\u4f7f\u7528\u89e3\u6784\u8d4b\u503c"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nfunction getFullName (user) {\n  const firstName = user.firstName\n  const lastName = user.lastName\n\n  return `${firstName} ${lastName}`\n}\n\n// good\nfunction getFullName (user) {\n  const { firstName, lastName } = user\n\n  return `${firstName} ${lastName}`\n}\n\n// better\nfunction getFullName ({ firstName, lastName }) {\n  return `${firstName} ${lastName}`\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5f53\u9700\u8981\u4f7f\u7528\u6570\u7ec4\u7684\u591a\u4e2a\u503c\u65f6\uff0c\u8bf7\u540c\u6837\u4f7f\u7528\u89e3\u6784\u8d4b\u503c"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const arr = [1, 2, 3, 4]\n\n// bad\nconst first = arr[0]\nconst second = arr[1]\n\n// good\nconst [first, second] = arr\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u51fd\u6570\u9700\u8981\u56de\u4f20\u591a\u4e2a\u503c\u65f6\uff0c\u8bf7\u4f7f\u7528\u5bf9\u8c61\u7684\u89e3\u6784\uff0c\u800c\u4e0d\u662f\u6570\u7ec4\u7684\u89e3\u6784"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nfunction doSomething () {\n  return [top, right, bottom, left]\n}\n\n// \u5982\u679c\u662f\u6570\u7ec4\u89e3\u6784\uff0c\u90a3\u4e48\u5728\u8c03\u7528\u65f6\u5c31\u9700\u8981\u8003\u8651\u6570\u636e\u7684\u987a\u5e8f\nconst [top, xx, xxx, left] = doSomething()\n\n// good\nfunction doSomething () {\n  return { top, right, bottom, left }\n}\n\n// \u6b64\u65f6\u4e0d\u9700\u8981\u8003\u8651\u6570\u636e\u7684\u987a\u5e8f\nconst { top, left } = doSomething()\n")))),Object(c.b)("h3",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5b57\u7b26\u4e32\u7edf\u4e00\u4f7f\u7528\u5355\u5f15\u53f7\u7684\u5f62\u5f0f ",Object(c.b)("inlineCode",{parentName:"p"},"''")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst department = \"JDC\"\n\n// good\nconst department = 'JDC'\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5b57\u7b26\u4e32\u592a\u957f\u7684\u65f6\u5019\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26\u6362\u884c ",Object(c.b)("inlineCode",{parentName:"p"},"\\"),"\uff0c\u800c\u662f\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"+")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const str = '\u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4' +\n  '\u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4' +\n  '\u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4'\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u7a0b\u5e8f\u5316\u751f\u6210\u5b57\u7b26\u4e32\u65f6\uff0c\u8bf7\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const test = 'test'\n\n// bad\nconst str = ['a', 'b', test].join()\n\n// bad\nconst str = 'a' + 'b' + test\n\n// good\nconst str = `ab${test}`\n")))),Object(c.b)("h3",{id:"\u51fd\u6570"},"\u51fd\u6570"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u4f7f\u7528\u51fd\u6570\u58f0\u660e\uff0c\u800c\u4e0d\u662f\u51fd\u6570\u8868\u8fbe\u5f0f"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst foo = function () {\n  // do something\n}\n\n// good\nfunction foo () {\n  // do something\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4e0d\u8981\u5728\u975e\u51fd\u6570\u4ee3\u7801\u5757\u4e2d\u58f0\u660e\u51fd\u6570"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nif (isUse) {\n  function test () {\n    // do something\n  }\n}\n\n// good\nlet test\nif (isUse) {\n  test = () => {\n    // do something\n  }\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4e0d\u8981\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"arguments"),"\uff0c\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"...")),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"arguments")," \u53ea\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\uff0c\u800c ",Object(c.b)("inlineCode",{parentName:"p"},"...")," \u662f\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u7ec4")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nfunction test () {\n  const args = Array.prototype.slice.call(arguments)\n  return args.join('')\n}\n\n// good\nfunction test (...args) {\n  return args.join('')\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4e0d\u8981\u66f4\u6539\u51fd\u6570\u53c2\u6570\u7684\u503c"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nfunction test (opts) {\n  opts = opts || {}\n}\n\n// good\nfunction test (opts = {}) {\n  // ...\n}\n")))),Object(c.b)("h3",{id:"\u539f\u578b"},"\u539f\u578b"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"class"),"\uff0c\u907f\u514d\u76f4\u63a5\u64cd\u4f5c ",Object(c.b)("inlineCode",{parentName:"p"},"prototype")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nfunction Queue (contents = []) {\n  this._queue = [..contents]\n}\nQueue.prototype.pop = function () {\n  const value = this._queue[0]\n  this._queue.splice(0, 1)\n  return value\n}\n\n// good\nclass Queue {\n  constructor (contents = []) {\n    this._queue = [...contents]\n  }\n\n  pop () {\n    const value = this._queue[0]\n    this._queue.splice(0, 1)\n    return value\n  }\n}\n")))),Object(c.b)("h3",{id:"\u6a21\u5757"},"\u6a21\u5757"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4f7f\u7528\u6807\u51c6\u7684 ES6 \u6a21\u5757\u8bed\u6cd5 ",Object(c.b)("inlineCode",{parentName:"p"},"import")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"export")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst util = require('./util')\nmodule.exports = util\n\n// good\nimport Util from './util'\nexport default Util\n\n// better\nimport { Util } from './util'\nexport default Util\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4e0d\u8981\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"import")," \u7684\u901a\u914d\u7b26 ",Object(c.b)("inlineCode",{parentName:"p"},"*"),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u4f60\u53ea\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684 export"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nimport * as Util from './util'\n\n// good\nimport Util from './util'\n")))),Object(c.b)("h3",{id:"\u8fed\u4ee3\u5668"},"\u8fed\u4ee3\u5668"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4e0d\u8981\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"iterators")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const numbers = [1, 2, 3, 4, 5]\n\n// bad\nlet sum = 0\nfor (let num of numbers) {\n  sum += num\n}\n\n// good\nlet sum = 0\nnumbers.forEach(num => sum += num)\n\n// better\nconst sum = numbers.reduce((total, num) => total + num, 0)\n")))),Object(c.b)("h3",{id:"\u5bf9\u8c61\u5c5e\u6027"},"\u5bf9\u8c61\u5c5e\u6027"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},".")," \u6765\u8bbf\u95ee\u5bf9\u8c61\u5c5e\u6027"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const joke = {\n  name: 'haha',\n  age: 28\n}\n\n// bad\nconst name = joke['name']\n\n// good\nconst name = joke.name\n")))),Object(c.b)("h3",{id:"\u53d8\u91cf\u58f0\u660e"},"\u53d8\u91cf\u58f0\u660e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u8bf7\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"const"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"let")," \u5173\u952e\u5b57\uff0c\u5982\u679c\u6ca1\u6709\u5199\u5173\u952e\u5b57\uff0c\u53d8\u91cf\u5c31\u4f1a\u66b4\u9732\u5728\u5168\u5c40\u4e0a\u4e0b\u6587\u4e2d\uff0c\u8fd9\u6837\u5f88\u53ef\u80fd\u4f1a\u548c\u73b0\u6709\u53d8\u91cf\u51b2\u7a81\uff0c\u53e6\u5916\uff0c\u4e5f\u5f88\u96be\u660e\u786e\u8be5\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u662f\u4ec0\u4e48\u3002\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"const")," \u6765\u58f0\u660e\u53d8\u91cf\uff0c\u6211\u4eec\u9700\u8981\u907f\u514d\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u7684\u6c61\u67d3\u3002"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\ndemo = new Demo()\n\n// good\nconst demo = new Demo()\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5c06\u6240\u6709\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"const")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"let")," \u5206\u7ec4"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nlet a\nconst b\nlet c\nconst d\nlet e\n\n// good\nconst b\nconst d\nlet a\nlet c\nlet e\n")))),Object(c.b)("h3",{id:"hoisting"},"Hoisting"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"var")," \u5b58\u5728\u53d8\u91cf\u63d0\u5347\u7684\u60c5\u51b5\uff0c\u5373 ",Object(c.b)("inlineCode",{parentName:"p"},"var")," \u58f0\u660e\u4f1a\u88ab\u63d0\u5347\u81f3\u8be5\u4f5c\u7528\u57df\u7684\u9876\u90e8\uff0c\u4f46\u662f\u4ed6\u4eec\u7684\u8d4b\u503c\u5e76\u4e0d\u4f1a\u3002\u800c ",Object(c.b)("inlineCode",{parentName:"p"},"const")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"let")," \u5e76\u4e0d\u5b58\u5728\u8fd9\u79cd\u60c5\u51b5\uff0c\u4ed6\u4eec\u88ab\u8d4b\u4e88\u4e86 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let"}),"Temporal Dead Zones, TDZ")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function example () {\n  console.log(notDefined)   // => throws a ReferenceError\n}\n\nfunction example () {\n  console.log(declareButNotAssigned)  // => undefined\n  var declaredButNotAssigned = true\n}\n\nfunction example () {\n  let declaredButNotAssigned\n  console.log(declaredButNotAssigned)   // => undefined\n  declaredButNotAssigned = true\n}\n\nfunction example () {\n  console.log(declaredButNotAssigned)   // => throws a ReferenceError\n  console.log(typeof declaredButNotAssigned)  // => throws a ReferenceError\n  const declaredButNotAssigned = true\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u533f\u540d\u51fd\u6570\u7684\u53d8\u91cf\u540d\u4f1a\u63d0\u5347\uff0c\u4f46\u51fd\u6570\u5185\u5bb9\u4e0d\u4f1a"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function example () {\n  console.log(anonymous)  // => undefined\n\n  anonymous()\n\n  var anonymous = function () {\n    console.log('test')\n  }\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u547d\u540d\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u53d8\u91cf\u540d\u4f1a\u88ab\u63d0\u5347\uff0c\u4f46\u51fd\u6570\u540d\u548c\u51fd\u6570\u51fd\u6570\u5185\u5bb9\u5e76\u4e0d\u4f1a"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function example() {\n  console.log(named)  // => undefined\n\n  named()   // => TypeError named is not a function\n\n  superPower()  // => ReferenceError superPower is not defined\n\n  var named = function superPower () {\n    console.log('Flying')\n  }\n}\n\nfunction example() {\n  console.log(named)  // => undefined\n\n  named()   // => TypeError named is not a function\n\n  var named = function named () {\n    console.log('named')\n  }\n}\n")))),Object(c.b)("h3",{id:"\u5206\u53f7"},"\u5206\u53f7"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u6211\u4eec\u9075\u5faa ",Object(c.b)("inlineCode",{parentName:"p"},"Standard")," \u7684\u89c4\u8303\uff0c\u4e0d\u4f7f\u7528\u5206\u53f7\u3002"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"\u5173\u4e8e\u5e94\u4e0d\u5e94\u8be5\u4f7f\u7528\u5206\u53f7\u7684\u8ba8\u8bba\u6709\u5f88\u591a\uff0c\u672c\u89c4\u8303\u8ba4\u4e3a\u975e\u5fc5\u8981\u7684\u65f6\u5019\uff0c\u5e94\u8be5\u4e0d\u4f7f\u7528\u5206\u53f7\uff0c\u597d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"JS")," \u7a0b\u5e8f\u5458\u5e94\u8be5\u6e05\u695a\u573a\u666f\u4e0b\u662f\u4e00\u5b9a\u8981\u52a0\u5206\u53f7\u7684\uff0c\u76f8\u4fe1\u4f60\u4e5f\u662f\u540d\u597d\u7684\u5f00\u53d1\u8005\u3002")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bad\nconst test = 'good';\n(function () {\n  const str = 'hahaha';\n})()\n\n// good\nconst test = 'good'\n;(() => {\n  const str = 'hahaha'\n})();\n")))),Object(c.b)("h3",{id:"\u6807\u51c6\u7279\u6027"},"\u6807\u51c6\u7279\u6027"),Object(c.b)("p",null,"\u4e3a\u4e86\u4ee3\u7801\u7684\u53ef\u79fb\u690d\u6027\u548c\u517c\u5bb9\u6027\uff0c\u6211\u4eec\u5e94\u8be5\u6700\u5927\u5316\u7684\u4f7f\u7528\u6807\u51c6\u65b9\u6cd5\uff0c\u4f8b\u5982\u4f18\u5148\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"string.charAt(3)")," \u800c\u4e0d\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"string[3]")),Object(c.b)("h3",{id:"eval"},"eval()"),Object(c.b)("p",null,"\u7531\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"eval")," \u65b9\u6cd5\u6bd4\u8f83 ",Object(c.b)("inlineCode",{parentName:"p"},"evil"),"\uff0c\u6240\u4ee5\u6211\u4eec\u7ea6\u5b9a\u7981\u6b62\u4f7f\u7528\u8be5\u65b9\u6cd5"),Object(c.b)("h3",{id:"with-"},"with() {}"),Object(c.b)("p",null,"\u7531\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"with")," \u65b9\u6cd5\u4f1a\u4ea7\u751f\u795e\u5947\u7684\u4f5c\u7528\u57df\uff0c\u6240\u4ee5\u6211\u4eec\u4e5f\u662f\u7981\u6b62\u4f7f\u7528\u8be5\u65b9\u6cd5\u7684"),Object(c.b)("h3",{id:"for-in-\u5faa\u73af"},"for-in \u5faa\u73af"),Object(c.b)("p",null,"\u63a8\u8350\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"for in")," \u8bed\u6cd5\uff0c\u4f46\u662f\u5728\u5bf9\u5bf9\u8c61\u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u5bb9\u6613\u5fd8\u4e86\u68c0\u6d4b ",Object(c.b)("inlineCode",{parentName:"p"},"hasOwnProperty(key)"),"\uff0c\u6240\u4ee5\u6211\u4eec\u542f\u7528\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"ESLint")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"guard-for-in")," \u9009\u9879"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5bf9\u6570\u7ec4\u8fdb\u884c ",Object(c.b)("inlineCode",{parentName:"p"},"for in")," \u7684\u65f6\u5019\uff0c\u987a\u5e8f\u662f\u4e0d\u56fa\u5b9a\u7684")),Object(c.b)("h3",{id:"\u4fee\u6539\u5185\u7f6e\u5bf9\u8c61\u7684\u539f\u578b"},"\u4fee\u6539\u5185\u7f6e\u5bf9\u8c61\u7684\u539f\u578b"),Object(c.b)("p",null,"\u4e0d\u8981\u4fee\u6539\u5185\u7f6e\u5bf9\u8c61\uff0c\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"Object")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"Array")))}p.isMDXComponent=!0},198:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},m=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,j=m["".concat(b,".").concat(u)]||m[u]||s[u]||c;return t?r.a.createElement(j,l({ref:n},i,{components:t})):r.a.createElement(j,l({ref:n},i))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,b=new Array(c);b[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<c;i++)b[i]=t[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);