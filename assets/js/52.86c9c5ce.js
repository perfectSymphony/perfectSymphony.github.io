(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{407:function(s,t,a){"use strict";a.r(t);var n=a(45),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"js判断变量是不是数组的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js判断变量是不是数组的方法"}},[s._v("#")]),s._v(" js判断变量是不是数组的方法")]),s._v(" "),a("h3",{attrs:{id:"方案一-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一-instanceof"}},[s._v("#")]),s._v(" 方案一： instanceof")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("变量 instanceof 类型  返回的是布尔值  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" false"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("例: var a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   a instanceof Array\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"方案二-原型prototype-tostring-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二-原型prototype-tostring-call"}},[s._v("#")]),s._v(" 方案二： 原型prototype + toString +  call()")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/11/24/DYq1xS.png",alt:"DYq1xS.png"}})]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("首先: Object.prototype.toString.call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("来判断，返回值是字符串\n其次: Object.prototype.toString.call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".indexOf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Array'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 如果变量对象是纯数组，返回的数字不是-1\n最后: Object.prototype.toString.call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".indexOf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Array'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -1 比对数值是否等于-1就能判断是否是数组类型 是为true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"方案三-原型prototype-isprototypeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案三-原型prototype-isprototypeof"}},[s._v("#")]),s._v(" 方案三：原型prototype + isPrototypeOf()")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Array.prototype.isPrototypeOf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"isprototypeof-函数-用于指示对象是否存在于一个对象的原型链中。如果存在返回true-反之返回false。该方法属object对象-由于所有的对象都继承了object的对象实例-因此几乎所有的实例对象都可以使用该方法。如果variable的原型链中存在array对象-就会返回true-也就说明variable是数组类型。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isprototypeof-函数-用于指示对象是否存在于一个对象的原型链中。如果存在返回true-反之返回false。该方法属object对象-由于所有的对象都继承了object的对象实例-因此几乎所有的实例对象都可以使用该方法。如果variable的原型链中存在array对象-就会返回true-也就说明variable是数组类型。"}},[s._v("#")]),s._v(" isPrototypeOf() 函数 : 用于指示对象是否存在于一个对象的原型链中。如果存在返回true，反之返回false。该方法属Object对象，由于所有的对象都继承了Object的对象实例，因此几乎所有的实例对象都可以使用该方法。如果variable的原型链中存在Array对象，就会返回true，也就说明variable是数组类型。")]),s._v(" "),a("h3",{attrs:{id:"方案四-构造函数-constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案四-构造函数-constructor"}},[s._v("#")]),s._v(" 方案四：构造函数 constructor")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("variable.constructor\nvariable.constructor.toString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nvariable.constructor.toString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".indexOf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Array"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ！"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" -1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("一个数组类型的实例，其原型__proto__.constructor右边是Array关键字，再拿到字符串，最后查找字符串中Array关键字的位置是否等于-1")]),s._v(" "),a("h3",{attrs:{id:"方案五-数组方法-isarray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案五-数组方法-isarray"}},[s._v("#")]),s._v(" 方案五：数组方法 isArray()")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Array.isArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"javascript如何判断是否为对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript如何判断是否为对象"}},[s._v("#")]),s._v(" javascript如何判断是否为对象？")]),s._v(" "),a("p",[a("strong",[s._v("先声明一个对象")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("var obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("；\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("判断是否为对象的方法：")])]),s._v(" "),a("p",[s._v("1、toString（推荐）")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Object.prototype.toString.call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[Object Object]'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、constructor属性")]),s._v(" "),a("p",[s._v("constructor 属性返回对创建此对象的 Boolean 函数的引用。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("obj.constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、instanceof运算符")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("obj instanceof Object\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注：需要注意的是由于数组也是对象，因此用 arr instanceof Object 也为true。")]),s._v(" "),a("p",[s._v("4、typeof运算符")]),s._v(" "),a("p",[s._v("typeof运算符返回一个字符串，表示未经计算的操作数的类型。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("typeof obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object\n\n// 根据typeof判断对象也不太准确\n表达式                     返回值\ntypeof undefined       "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),s._v("\ntypeof null               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'object'")]),s._v("\ntypeof "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'boolean'")]),s._v("\ntypeof "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'number'")]),s._v("\ntypeof "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),s._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("\ntypeof "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'function'")]),s._v("\ntypeof "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'object'")]),s._v("\ntypeof "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'object'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("5、$.isPlainObject()")]),s._v(" "),a("p",[s._v('该方法判断指定参数是否是一个纯粹的对象（所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的。）')]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$.isPlainObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);