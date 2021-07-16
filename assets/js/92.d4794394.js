(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{447:function(e,v,_){"use strict";_.r(v);var t=_(45),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"vue3面试中必问的5个考点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue3面试中必问的5个考点"}},[e._v("#")]),e._v(" vue3面试中必问的5个考点")]),e._v(" "),_("h2",{attrs:{id:"一、vue-3-0-性能提升主要是通过哪几方面体现的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、vue-3-0-性能提升主要是通过哪几方面体现的"}},[e._v("#")]),e._v(" 一、Vue 3.0 性能提升主要是通过哪几方面体现的？")]),e._v(" "),_("h3",{attrs:{id:"_1-响应式系统提升"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-响应式系统提升"}},[e._v("#")]),e._v(" 1.响应式系统提升")]),e._v(" "),_("p",[e._v("vue2在初始化的时候，对"),_("code",[e._v("data")]),e._v("中的每个属性使用"),_("code",[e._v("definepropery")]),e._v("调用"),_("code",[e._v("getter")]),e._v("和"),_("code",[e._v("setter")]),e._v("使之变为响应式对象。如果属性值为对象，还会递归调用"),_("code",[e._v("defineproperty")]),e._v("使之变为响应式对象。\nvue3使用"),_("code",[e._v("proxy")]),e._v("对象重写响应式。proxy的性能本来比defineproperty好，proxy可以拦截属性的访问、赋值、删除等操作，不需要初始化的时候遍历所有属性，另外有多层属性嵌套的话，只有访问某个属性的时候，才会递归处理下一级的属性。")]),e._v(" "),_("h3",{attrs:{id:"优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[e._v("#")]),e._v(" 优势：")]),e._v(" "),_("ul",[_("li",[e._v("可以监听动态新增的属性；")]),e._v(" "),_("li",[e._v("可以监听删除的属性；")]),e._v(" "),_("li",[e._v("可以监听数组的索引和 "),_("code",[e._v("length")]),e._v(" 属性；")])]),e._v(" "),_("h3",{attrs:{id:"_2-编译优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译优化"}},[e._v("#")]),e._v(" 2.编译优化")]),e._v(" "),_("p",[e._v("优化编译和重写虚拟dom，让首次渲染和更新dom性能有更大的提升 vue2 通过标记静态根节点,优化 "),_("code",[e._v("diff")]),e._v(" 算法 vue3 标记和提升所有静态根节点,"),_("code",[e._v("diff")]),e._v(" 的时候只比较动态节点内容")]),e._v(" "),_("p",[_("code",[e._v("Fragments")]),e._v(", 模板里面不用创建唯一根节点,可以直接放同级标签和文本内容")]),e._v(" "),_("h3",{attrs:{id:"静态提升"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#静态提升"}},[e._v("#")]),e._v(" 静态提升")]),e._v(" "),_("p",[_("code",[e._v("patch flag")]),e._v(", 跳过静态节点,直接对比动态节点,缓存事件处理函数")]),e._v(" "),_("h3",{attrs:{id:"_3-源码体积的优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-源码体积的优化"}},[e._v("#")]),e._v(" 3.源码体积的优化")]),e._v(" "),_("p",[e._v("vue3移除了一些不常用的api，例如："),_("code",[e._v("inline-template")]),e._v("、"),_("code",[e._v("filter")]),e._v("等 使用"),_("code",[e._v("tree-shaking")]),e._v("。")]),e._v(" "),_("h2",{attrs:{id:"二、-composition-api-与-vue-2-x使用的options-api-有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、-composition-api-与-vue-2-x使用的options-api-有什么区别"}},[e._v("#")]),e._v(" 二、 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？")]),e._v(" "),_("h3",{attrs:{id:"options-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#options-api"}},[e._v("#")]),e._v(" Options Api")]),e._v(" "),_("p",[e._v("包含一个描述组件选项（"),_("code",[e._v("data")]),e._v("、"),_("code",[e._v("methods")]),e._v("、"),_("code",[e._v("props")]),e._v("等）的对象 options；\nAPI开发复杂组件，同一个功能逻辑的代码被拆分到不同选项 ；\n使用"),_("code",[e._v("mixin")]),e._v("重用公用代码，也有问题：命名冲突，数据来源不清晰；")]),e._v(" "),_("h3",{attrs:{id:"composition-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[e._v("#")]),e._v(" composition Api")]),e._v(" "),_("p",[e._v("vue3 新增的一组 api，它是基于函数的 api，可以更灵活的组织组件的逻辑。\n解决options api在大型项目中，options api不好拆分和重用的问题。")]),e._v(" "),_("h2",{attrs:{id:"三、-proxy-相对于-object-defineproperty-有哪些优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、-proxy-相对于-object-defineproperty-有哪些优点"}},[e._v("#")]),e._v(" 三、 Proxy 相对于 Object.defineProperty 有哪些优点？")]),e._v(" "),_("p",[_("code",[e._v("proxy")]),e._v("的性能本来比"),_("code",[e._v("defineproperty")]),e._v("好，"),_("code",[e._v("proxy")]),e._v("可以拦截属性的访问、赋值、删除等操作，不需要初始化的时候遍历所有属性，另外有多层属性嵌套的话，只有访问某个属性的时候，才会递归处理下一级的属性。\n可以* 监听数组变化\n可以劫持整个对象\n操作时不是对原对象操作,是 "),_("code",[e._v("new Proxy")]),e._v(" 返回的一个新对象\n可以劫持的操作有 13 种")]),e._v(" "),_("h2",{attrs:{id:"四、-vue-3-0-在编译方面有哪些优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、-vue-3-0-在编译方面有哪些优化"}},[e._v("#")]),e._v(" 四、 Vue 3.0 在编译方面有哪些优化？")]),e._v(" "),_("p",[e._v("vue.js 3.x中标记和提升所有的静态节点，"),_("code",[e._v("diff")]),e._v("的时候只需要对比动态节点内容；")]),e._v(" "),_("p",[_("strong",[e._v("Fragments（升级vetur插件):")])]),e._v(" "),_("p",[e._v("template中不需要唯一根节点，可以直接放文本或者同级标签")]),e._v(" "),_("p",[e._v("静态提升("),_("code",[e._v("hoistStatic")]),e._v("),当使用 "),_("code",[e._v("hoistStatic")]),e._v(" 时,所有静态的节点都被提升到 "),_("code",[e._v("render")]),e._v(" 方法之外.只会在应用启动的时候被创建一次,之后使用只需要应用提取的静态节点，随着每次的渲染被不停的复用。\n"),_("code",[e._v("patch flag")]),e._v(", 在动态标签末尾加上相应的标记,只能带 "),_("code",[e._v("patchFlag")]),e._v(" 的节点才被认为是动态的元素,会被追踪属性的修改,能快速的找到动态节点,而不用逐个逐层遍历，提高了虚拟dom diff的性能。\n缓存事件处理函数"),_("code",[e._v("cacheHandler")]),e._v(",避免每次触发都要重新生成全新的function去更新之前的函数 "),_("code",[e._v("tree shaking")]),e._v(" 通过摇树优化核心库体积,减少不必要的代码量。")]),e._v(" "),_("h2",{attrs:{id:"五、vue-js-3-0-响应式系统的实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、vue-js-3-0-响应式系统的实现原理"}},[e._v("#")]),e._v(" 五、Vue.js 3.0 响应式系统的实现原理？")]),e._v(" "),_("p",[_("strong",[e._v("1.reactive")])]),e._v(" "),_("p",[e._v("设置对象为响应式对象。接收一个参数，判断这参数是否是对象。不是对象则直接返回这个参数，不做响应式处理。创建拦截器"),_("code",[e._v("handerler")]),e._v("，设置"),_("code",[e._v("get/set/deleteproperty")]),e._v("。")]),e._v(" "),_("p",[_("strong",[e._v("get")])]),e._v(" "),_("p",[e._v("收集依赖（"),_("code",[e._v("track")]),e._v("）；\n如果当前 "),_("code",[e._v("key")]),e._v(" 的值是对象，则为当前 "),_("code",[e._v("key")]),e._v(" 的对象创建拦截器 "),_("code",[e._v("handler")]),e._v(", 设置 "),_("code",[e._v("get/set/deleteProperty")]),e._v("；\n如果当前的 "),_("code",[e._v("key")]),e._v(" 的值不是对象，则返回当前 "),_("code",[e._v("key")]),e._v(" 的值。")]),e._v(" "),_("p",[_("strong",[e._v("2.effect")])]),e._v(" "),_("p",[e._v("接收一个函数作为参数。作用是：访问响应式对象属性时去收集依赖")]),e._v(" "),_("p",[_("strong",[e._v("3.track")])]),e._v(" "),_("p",[e._v("接收两个参数："),_("code",[e._v("target")]),e._v(" 和 "),_("code",[e._v("key")]),e._v("\n如果没有 "),_("code",[e._v("activeEffect")]),e._v("，则说明没有创建 "),_("code",[e._v("effect")]),e._v(" 依赖；\n如果有 "),_("code",[e._v("activeEffect")]),e._v("，则去判断 "),_("code",[e._v("WeakMap")]),e._v(" 集合中是否有 "),_("code",[e._v("target")]),e._v(" 属性；\n"),_("code",[e._v("WeakMap")]),e._v(" 集合中没有 "),_("code",[e._v("target")]),e._v(" 属性，则 "),_("code",[e._v("set(target, (depsMap = new Map()))")]),e._v("；\n"),_("code",[e._v("WeakMap")]),e._v(" 集合中有 "),_("code",[e._v("target")]),e._v(" 属性，则判断 "),_("code",[e._v("target")]),e._v(" 属性的 "),_("code",[e._v("map")]),e._v(" 值的 "),_("code",[e._v("depsMap")]),e._v(" 中是否有 "),_("code",[e._v("key")]),e._v(" 属性；\n"),_("code",[e._v("depsMap")]),e._v(" 中没有 "),_("code",[e._v("key")]),e._v(" 属性，则 "),_("code",[e._v("set(key, (dep = new Set()))")]),e._v("；\n"),_("code",[e._v("depsMap")]),e._v(" 中有 "),_("code",[e._v("key")]),e._v(" 属性，则添加这个 "),_("code",[e._v("activeEffect")]),e._v("。")]),e._v(" "),_("p",[_("strong",[e._v("4.trigger")])]),e._v(" "),_("p",[e._v("判断 "),_("code",[e._v("WeakMap")]),e._v(" 中是否有 "),_("code",[e._v("target")]),e._v(" 属性，"),_("code",[e._v("WeakMap")]),e._v(" 中有 "),_("code",[e._v("target")]),e._v(" 属性，则判断 "),_("code",[e._v("target")]),e._v(" 属性的 "),_("code",[e._v("map")]),e._v(" 值中是否有 "),_("code",[e._v("key")]),e._v(" 属性，有的话循环触发收集的 "),_("code",[e._v("effect()")]),e._v("。")])])}),[],!1,null,null,null);v.default=a.exports}}]);