(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./www/app/components/Production/Production.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./www/app/components/Production/Production.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      modal1: false,\n      imgUrl: '/app/components/Production',\n      items: [{\n        title: \"\\u98DF\\u8C31\\u6307\\u5357\",\n        desc: '微信小程序项目',\n        name: 'cook.jpg'\n      }, {\n        title: \"\\u4EFF\\u77E5\\u4E4E\\u65E5\\u62A5\",\n        desc: '基于react的DVA框架构建的新闻类项目',\n        name: 'zhihu.jpg'\n      }, {\n        title: \"\\u4E8C\\u624B\\u8F66\\u5E73\\u53F0\",\n        desc: 'vue+iview构建的汽车二手车查询平台',\n        name: 'car.jpg'\n      }, {\n        title: \"\\u97F3\\u4E50APP\",\n        desc: '使用QQ音乐接口构建的一款移动端音乐APP',\n        name: 'music.jpg'\n      }, {\n        title: \"\\u4EFF\\u5916\\u5356APP\\u5546\\u5BB6\\u9875\\u9762\",\n        desc: 'vue移动端项目',\n        name: 'sell.jpg'\n      }, {\n        title: \"Flappy Bird\",\n        desc: 'canvas练习游戏',\n        name: 'flappy-bird.jpg'\n      }, {\n        title: \"\\u4FC4\\u7F57\\u65AF\\u65B9\\u5757\",\n        desc: '使用二维数组及面向对象中介者模式编写',\n        name: 'eluosi.jpg'\n      }]\n    };\n  },\n  methods: {\n    showMessage: function showMessage(title) {\n      if (title === '食谱指南') {\n        this.$Message.info('访问方式：进入微信小程序搜索“食谱指南”');\n      } else if (title === '仿知乎日报') {\n        this.$Modal.confirm({\n          title: '本作品为移动端项目，请切换成移动端视口打开',\n          onOk: function onOk() {\n            window.open('http://hanzhibang.cn/zhihu');\n          }\n        });\n      } else if (title === '音乐APP') {\n        this.$Modal.confirm({\n          title: '本作品为移动端项目，请切换成移动端视口打开',\n          onOk: function onOk() {\n            window.open('http://hanzhibang.cn/music');\n          }\n        });\n      } else if (title === '俄罗斯方块') {\n        window.open('http://hanzhibang.cn/tetris');\n      } else if (title === 'Flappy Bird') {\n        window.open('http://hanzhibang.cn/bird');\n      } else if (title === '仿外卖APP商家页面') {\n        this.$Modal.confirm({\n          title: '本作品为移动端项目，请切换成移动端视口打开',\n          onOk: function onOk() {\n            window.open('http://hanzhibang.cn/sell');\n          }\n        });\n      } else if (title === '二手车平台') {\n        window.open('http://hanzhibang.cn/car');\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./www/app/components/Production/Production.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.production[data-v-4abbf4ca] {\\n  background: #252830;\\n  padding: 75px 0;\\n  text-align: center;\\n}\\n.production .wrapper[data-v-4abbf4ca] {\\n  box-sizing: border-box;\\n  width: 1050px;\\n  margin: 0 auto;\\n  background: #242c35;\\n  padding: 10px;\\n}\\n.production .wrapper ul[data-v-4abbf4ca] {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n}\\n.production .wrapper ul li[data-v-4abbf4ca] {\\n  background: #434857;\\n  margin: 10px;\\n  width: 400px;\\n  transition: 0.5s;\\n}\\n.production .wrapper ul li h3[data-v-4abbf4ca] {\\n  margin: 10px 0;\\n}\\n.production .wrapper ul li .desc[data-v-4abbf4ca] {\\n  margin: 5px 0;\\n}\\n.production .wrapper ul li a[data-v-4abbf4ca]:hover {\\n  color: #fff;\\n}\\n.production .wrapper ul li .imgwrapper[data-v-4abbf4ca] {\\n  width: 400px;\\n  height: 200px;\\n  overflow: hidden;\\n}\\n.production .wrapper ul li .imgwrapper .car[data-v-4abbf4ca] {\\n  width: 400px;\\n}\\n.production .wrapper ul li .imgwrapper .flappy-bird[data-v-4abbf4ca] {\\n  width: 400px;\\n}\\n.production .wrapper ul li .imgwrapper .zhihu[data-v-4abbf4ca],\\n.production .wrapper ul li .imgwrapper .music[data-v-4abbf4ca],\\n.production .wrapper ul li .imgwrapper .sell[data-v-4abbf4ca] {\\n  width: 200px;\\n}\\n.production .wrapper ul li[data-v-4abbf4ca]:hover {\\n  background: #3b68bd;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./www/app/components/Production/Production.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./www/app/components/Production/Production.vue?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./www/app/components/Production/Production.vue?vue&type=template&id=4abbf4ca&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./www/app/components/Production/Production.vue?vue&type=template&id=4abbf4ca&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"production\" }, [\n    _c(\"div\", { staticClass: \"wrapper\" }, [\n      _c(\n        \"ul\",\n        _vm._l(_vm.items, function(item) {\n          return _c(\n            \"li\",\n            {\n              on: {\n                click: function($event) {\n                  _vm.showMessage(item.title)\n                }\n              }\n            },\n            [\n              _c(\"a\", { attrs: { href: \"javascript:;\" } }, [\n                _c(\"div\", { staticClass: \"imgwrapper\" }, [\n                  _c(\"img\", {\n                    ref: \"img\",\n                    refInFor: true,\n                    class: item.name.slice(0, -4),\n                    attrs: { src: _vm.imgUrl + \"/\" + item.name, alt: \"\" }\n                  })\n                ]),\n                _vm._v(\" \"),\n                _c(\"h3\", [_vm._v(_vm._s(item.title))]),\n                _vm._v(\" \"),\n                _c(\"p\", { staticClass: \"desc\" }, [_vm._v(_vm._s(item.desc))])\n              ])\n            ]\n          )\n        })\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./www/app/components/Production/Production.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./www/app/components/Production/Production.vue":
/*!******************************************************!*\
  !*** ./www/app/components/Production/Production.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Production_vue_vue_type_template_id_4abbf4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Production.vue?vue&type=template&id=4abbf4ca&scoped=true& */ \"./www/app/components/Production/Production.vue?vue&type=template&id=4abbf4ca&scoped=true&\");\n/* harmony import */ var _Production_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Production.vue?vue&type=script&lang=js& */ \"./www/app/components/Production/Production.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Production_vue_vue_type_style_index_0_id_4abbf4ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true& */ \"./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Production_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Production_vue_vue_type_template_id_4abbf4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Production_vue_vue_type_template_id_4abbf4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4abbf4ca\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"www/app/components/Production/Production.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./www/app/components/Production/Production.vue?");

/***/ }),

/***/ "./www/app/components/Production/Production.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./www/app/components/Production/Production.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Production.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./www/app/components/Production/Production.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./www/app/components/Production/Production.vue?");

/***/ }),

/***/ "./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_style_index_0_id_4abbf4ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./www/app/components/Production/Production.vue?vue&type=style&index=0&id=4abbf4ca&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_style_index_0_id_4abbf4ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_style_index_0_id_4abbf4ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_style_index_0_id_4abbf4ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_style_index_0_id_4abbf4ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_style_index_0_id_4abbf4ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./www/app/components/Production/Production.vue?");

/***/ }),

/***/ "./www/app/components/Production/Production.vue?vue&type=template&id=4abbf4ca&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./www/app/components/Production/Production.vue?vue&type=template&id=4abbf4ca&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_template_id_4abbf4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Production.vue?vue&type=template&id=4abbf4ca&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./www/app/components/Production/Production.vue?vue&type=template&id=4abbf4ca&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_template_id_4abbf4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Production_vue_vue_type_template_id_4abbf4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./www/app/components/Production/Production.vue?");

/***/ })

}]);