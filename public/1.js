webpackJsonp([1],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(65)
/* template */
var __vue_template__ = __webpack_require__(66)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/category/Videos.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6472d862", Component.options)
  } else {
    hotAPI.reload("data-v-6472d862", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("477091e4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6472d862\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Videos.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6472d862\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Videos.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Videos",
    data: function data() {
        var _this = this;

        return {
            delModal: false,
            editModal: false,
            selectCategory: null,
            createCategory: "",
            selectIndex: -1,
            modal_loading: false,
            columns: [{
                title: "ID",
                key: "id",
                sortable: true
            }, {
                title: "类别名称",
                key: "category"
            }, {
                title: "操作",
                key: "action",
                width: 150,
                align: "center",
                render: function render(h, params) {
                    return h("div", [h("Button", {
                        props: {
                            type: "primary",
                            size: "small"
                        },
                        style: {
                            marginRight: "5px"
                        },
                        on: {
                            click: function click() {
                                _this.selectIndex = params.index;
                                _this.selectCategory = _this.data[params.index]["category"];
                                _this.editModal = true;
                            }
                        }
                    }, "编辑"), h("Button", {
                        props: {
                            type: "error",
                            size: "small"
                        },
                        on: {
                            click: function click() {
                                _this.selectIndex = params.index;
                                _this.delModal = true;
                            }
                        }
                    }, "删除")]);
                }
            }],
            data: []
        };
    },

    created: function created() {
        this.updateData();
    },
    methods: {
        updateData: function updateData() {
            var _this2 = this;

            axios.get("/category/videos").then(function (res) {
                _this2.data = res.data.data;
            });
        },
        editCategory: function editCategory() {
            var _this3 = this;

            axios({
                method: "PUT",
                url: "/category/videos/" + this.data[this.selectIndex]["id"],
                params: {
                    id: this.selectIndex,
                    category: this.selectCategory
                }
            }).then(function (res) {
                _this3.$Message.info("修改成功");
                _this3.updateData();
            }).catch(function (res) {
                console.error(res);
                _this3.$Message.error("发生错误");
                _this3.editModal = false;
            });
        },
        delCategory: function delCategory() {
            var _this4 = this;

            this.modal_loading = true;
            axios({
                method: "delete",
                url: "/category/videos/" + this.data[this.selectIndex]["id"]
            }).then(function (res) {
                _this4.$Message.info("删除成功");
                _this4.updateData();
                _this4.modal_loading = false;
                _this4.delModal = false;
            }).catch(function (res) {
                _this4.$Message.error("发生错误");
                _this4.modal_loading = false;
                _this4.delModal = false;
            });
        },
        create: function create() {
            var _this5 = this;

            axios({
                method: "POST",
                url: "/category/videos",
                params: {
                    category: this.createCategory
                }
            }).then(function (res) {
                _this5.$Message.info("创建成功");
                _this5.updateData();
                _this5.createCategory = "";
            }).catch(function (res) {
                _this5.$Message.error("发生错误");
                console.error(res);
            });
        }
    }
});

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "category-video" } },
    [
      _c(
        "p",
        { staticStyle: { "text-align": "right", "padding-bottom": "20px" } },
        [
          _c("Input", {
            staticStyle: { width: "150px", "padding-right": "10px" },
            attrs: { placeholder: "请输入类别名" },
            model: {
              value: _vm.createCategory,
              callback: function($$v) {
                _vm.createCategory = typeof $$v === "string" ? $$v.trim() : $$v
              },
              expression: "createCategory"
            }
          }),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "success", size: "small" },
              on: {
                click: function($event) {
                  _vm.create()
                }
              }
            },
            [_vm._v("新增")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Table", { attrs: { columns: _vm.columns, data: _vm.data } }),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { width: "360" },
          model: {
            value: _vm.delModal,
            callback: function($$v) {
              _vm.delModal = $$v
            },
            expression: "delModal"
          }
        },
        [
          _c(
            "p",
            {
              staticStyle: { color: "#f60", "text-align": "center" },
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("Icon", { attrs: { type: "ios-information-circle" } }),
              _vm._v(" "),
              _c("span", [_vm._v("删除确认")])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("p", [_vm._v("删除后会类别下的文章将不再显示")]),
            _vm._v(" "),
            _c("p", [_vm._v("确认删除？")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: {
                    type: "error",
                    size: "large",
                    long: "",
                    loading: _vm.modal_loading
                  },
                  on: { click: _vm.delCategory }
                },
                [_vm._v("删除")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "修改类别" },
          on: { "on-ok": _vm.editCategory },
          model: {
            value: _vm.editModal,
            callback: function($$v) {
              _vm.editModal = $$v
            },
            expression: "editModal"
          }
        },
        [
          _c("Input", {
            model: {
              value: _vm.selectCategory,
              callback: function($$v) {
                _vm.selectCategory = typeof $$v === "string" ? $$v.trim() : $$v
              },
              expression: "selectCategory"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6472d862", module.exports)
  }
}

/***/ })

});