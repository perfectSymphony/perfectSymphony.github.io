(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{433:function(a,v,t){"use strict";t.r(v);var _=t(45),e=Object(_.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"什么是mpa、spa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是mpa、spa"}},[a._v("#")]),a._v(" 什么是MPA、SPA")]),a._v(" "),t("h2",{attrs:{id:"mpa概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mpa概念"}},[a._v("#")]),a._v(" MPA概念")]),a._v(" "),t("p",[a._v("MPA(multiple-page application)  是指一个普通的独立完整页面，它具备完整的HTML、JS、CSS等资源，可以灵活的独立部署（部署到Nginx或是CDN节点，也可以形成独立的URL）、集成、下线，多个具备关联业务的独立页面组合可以构成一个独立站点。")]),a._v(" "),t("h2",{attrs:{id:"mpa-场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mpa-场景"}},[a._v("#")]),a._v(" MPA 场景")]),a._v(" "),t("ul",[t("li",[a._v("singleApp 可以是一个推广宣传性质的 landing page；")]),a._v(" "),t("li",[a._v("也可以是官网的首页、宣传页、介绍页等")]),a._v(" "),t("li",[a._v("嵌入到门户型应用")]),a._v(" "),t("li",[a._v("嵌入到其它合作的友商应用中")]),a._v(" "),t("li",[a._v("其他场景。")])]),a._v(" "),t("h2",{attrs:{id:"mpa-微应用模式下的项目目录组织指导"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mpa-微应用模式下的项目目录组织指导"}},[a._v("#")]),a._v(" MPA 微应用模式下的项目目录组织指导")]),a._v(" "),t("p",[a._v("在ucf-apps目录中，一个独立目录即为一个微应用，MPA 是其中一种微应用模式。")]),a._v(" "),t("p",[a._v("按 MPA 的方式，一个完整站点有可能含有几百个独立页面，在目录组织方式上，我们不建议再按业务类型新加目录，而是遵循以下两种方案：")]),a._v(" "),t("ul",[t("li",[a._v("多仓库方式：按不同业务模块/功能/领域来新建代码仓库进行维护；")]),a._v(" "),t("li",[a._v("单仓库方式：遵循一定的命名规范将其平铺。比如 modulea/xx、modulea/yy中的资源变为 modulea-xx、modulea-yy。")])]),a._v(" "),t("h2",{attrs:{id:"spa概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spa概念"}},[a._v("#")]),a._v(" SPA概念")]),a._v(" "),t("p",[a._v("什么是单页应用呢？单页应用的全称是 single-page application，简称 SPA，它是一种网站应用的模型，它可以动态重写当前的页面来与用户交互，而不需要重新加载整个页面。单页应用的流畅性让 Web 应用更像桌面端或 Native 应用了。相对于传统的 Web 应用，单页应用做到了前后端分离，后端只负责处理数据提供接口，页面逻辑和页面渲染都交给了前端。前端发展到现在，单页应用的使用已经很广泛，目前时兴的 React、Vue、Angular 等前端框架均采用了 SPA 原则。单页应用意味着前端掌握了主动权，也让前端代码更复杂和庞大，模块化、组件化以及架构设计都变得越来越重要。")]),a._v(" "),t("p",[a._v("来体验一下单页应用吧，打开你的 Gmail，点击左侧的导航栏，在开发者工具的 Network 中可以看到资源是按需加载的，此时页面也并没有刷新，观察 Elements 栏下的 HTML，你会发现整个 HTML 的大框架是不变的，页面改变时，或者说路由改变时，DOM 树只是改变它需要改变的部分，也就是动态改变。")]),a._v(" "),t("h2",{attrs:{id:"场景及优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景及优缺点"}},[a._v("#")]),a._v(" 场景及优缺点")]),a._v(" "),t("p",[a._v("在早期的 Web 应用中，前端的作用很弱，业务逻辑和数据处理都在后端，后端给前端返回一个 HTML 页面，前端只负责展示。在这种模式下，单个 HTML 页面被当做一个功能原件，表单提交，超链接跳转都可以用来重新请求新的 HTML 页面，从而达到给用户展示新的页面的目的。在这种方式中，你可以感觉到页面总是在不停的刷新，一个点击可能都需要等待很久，这是因为，当页面变化时，所有资源都需要重新请求。这些问题导致了用户体验不佳，也浪费了资源。单页应用便很好的解决了这些问题。\nSPA 可圈可点，现在已被大家广泛使用，也得到了主流框架的支持，但是它也有局限性，我们将它的优缺点总结如下，优点有：")]),a._v(" "),t("ul",[t("li",[a._v("无刷新体验，用户在切换页面过程中不会频繁被“打断”，因为界面框架都在本地，对用户的响应非常及时，因此提升了用户体验；")]),a._v(" "),t("li",[a._v("分离前后端关注点，前端负责界面显示，后端负责数据存储和计算，各司其职，不会把前后端的逻辑混杂在一起；")]),a._v(" "),t("li",[a._v("减轻服务器压力，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；")]),a._v(" "),t("li",[a._v("API 共享，同一套后端程序代码，不用修改就可以用于Web界面、手机、平板等多种客户端；")]),a._v(" "),t("li",[a._v("完全的前端组件化，前端开发不再以页面为单位，更多地采用组件化的思想，代码结构和组织方式更加规范化，便于修改和调整。")])]),a._v(" "),t("p",[a._v("缺点有：")]),a._v(" "),t("ul",[t("li",[a._v("对 SEO 不太优好，尽管可以通过 Prerender 预渲染优化等技术解决一部分，但是相对还是不容易索引到它；")]),a._v(" "),t("li",[a._v("易出错，需要使用程序管理前进、后退、地址栏等信息；")]),a._v(" "),t("li",[a._v("首屏加载时间较长，因为需要加载大量静态资源；")]),a._v(" "),t("li",[a._v("较高的前端开发门槛，对技术能力要求较高，需要对设计模式有一定理解，因为面对不是一个简单的页面，而是一个运行在浏览器环境里面的桌面软件。")])]),a._v(" "),t("h2",{attrs:{id:"更多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[a._v("#")]),a._v(" 更多")]),a._v(" "),t("p",[a._v("我们简单理解了 SPA 以及 SPA 在路由层面的实现，但需要完整做一个spaApp，你需要掌握：")]),a._v(" "),t("ul",[t("li",[a._v("history API 及浏览器刷新机制")]),a._v(" "),t("li",[a._v("主流前端路由方案的使用：react-router, vue-router等；")])])])}),[],!1,null,null,null);v.default=e.exports}}]);