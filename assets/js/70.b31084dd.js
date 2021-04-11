(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{445:function(n,i,t){"use strict";t.r(i);var p=t(45),e=Object(p.a)({},(function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"nginx的gzip设置详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx的gzip设置详解"}},[n._v("#")]),n._v(" nginx的gzip设置详解")]),n._v(" "),t("p",[n._v("nginx中gzip压缩(节省带宽)\n原理:\n浏览器---请求----\x3e 声明可以接受 gzip压缩 或 deflate压缩 或compress 或 sdch压缩\n从http协议的角度看--请求头 声明 acceopt-encoding: gzip deflate sdch (是指压缩算法,其中sdch是google倡导的一种压缩方式,目前支持的服务器尚不多)\n服务器--\x3e回应---把内容用gzip方式压缩----\x3e发给浏览器\n浏览<-----解码gzip-----接收gzip压缩内容----")]),n._v(" "),t("p",[n._v("官方文档 http://nginx.org/en/docs/http/ngx_http_gzip_module.html")]),n._v(" "),t("p",[n._v("gzip配置的常用参数\ngzip on|off; #是否开启gzip\ngzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)\ngzip_comp_level [1-9] #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)\ngzip_disable #正则匹配UA 什么样的Uri不进行gzip\ngzip_min_length 200 # 开始压缩的最小长度(再小就不要压缩了,意义不在)\ngzip_http_version 1.0|1.1 # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)\ngzip_proxied # 设置请求者代理服务器,该如何缓存内容\ngzip_types text/plain application/xml # 对哪些类型的文件用压缩 如txt,xml,html ,css\ngzip_vary on|off # 是否传输gzip压缩标志")]),n._v(" "),t("p",[n._v("注意:\n图片/mp3这样的二进制文件,不必压缩\n因为压缩率比较小, 比如100->80字节,而且压缩也是耗费CPU资源的,比较小的文件不必压缩")]),n._v(" "),t("p",[n._v("nginx中的expires缓存(缓存在浏览器中 提高网站性能)\n使用场景:对于网站的图片,尤其是新闻站, 图片一旦发布, 改动的可能是非常小的.我们希望 能否在用户访问一次后, 图片缓存在用户的浏览器端,且时间比较长的缓存.\n列如:缓存一个小时\nlocation ~..(jpg|png|jpeg|gif){\nexpires 1d;\n}\n(注意:服务器的日期要准确,如果服务器的日期落后于实际日期,可能导致缓存失效)\n304 也是一种很好的缓存手段\n原理是: 服务器响应文件内容是,同时响应etag标签(内容的签名,内容一变,他也变), 和 last_modified_since 2个标签值浏览器下次去请求时,头信息发送这两个标签, 服务器检测文件有没有发生变化,如无,直接头信息返回 etag,last_modified_since浏览器知道内容无改变,于是直接调用本地缓存.\n这个过程,也请求了服务器,但是传着的内容极少.\n对于变化周期较短的,如静态html,js,css,比较适于用这个方式")])])}),[],!1,null,null,null);i.default=e.exports}}]);