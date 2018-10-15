webpackJsonp([3],{

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(69)
}
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(71)
/* template */
var __vue_template__ = __webpack_require__(72)
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
Component.options.__file = "resources/assets/js/components/tag/Tag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b3d39d84", Component.options)
  } else {
    hotAPI.reload("data-v-b3d39d84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("89ca6318", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b3d39d84\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tag.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b3d39d84\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tag.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.modal-input {\n    margin: 1em 2.5em 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 71:
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
    name: "Tag",
    data: function data() {
        var _this = this;

        return {
            createModal: false,
            delModal: false,
            editModal: false,
            modal_loading: false,

            createTag: {
                name: "",
                description: ""
            },

            selectTag: {
                id: -1,
                name: "",
                description: ""
            },

            columns: [{
                title: "ID",
                key: "id",
                sortable: true
            }, {
                title: "标签名",
                key: "name"
            }, {
                title: "描述",
                key: "description"
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
                                _this.selectTag = params.row;
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
                                _this.selectTag = params.row;
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

            axios.get("/tags").then(function (res) {
                _this2.data = res.data.data;
            });
        },
        editData: function editData() {
            var _this3 = this;

            axios({
                method: "PUT",
                url: "/tags/" + this.selectTag.id,
                params: this.selectTag
            }).then(function (res) {
                _this3.$Message.info("修改成功");
                _this3.updateData();
            }).catch(function (res) {
                console.error(res);
                _this3.$Message.error("发生错误");
                _this3.editModal = false;
            });
        },
        delData: function delData() {
            var _this4 = this;

            this.modal_loading = true;
            axios({
                method: "delete",
                url: "/tags/" + this.selectTag.id
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
        createData: function createData() {
            var _this5 = this;

            axios({
                method: "POST",
                url: "/tags",
                params: this.createTag
            }).then(function (res) {
                _this5.$Message.info("创建成功");
                _this5.updateData();
                _this5.createTag = {};
            }).catch(function (res) {
                _this5.$Message.error("发生错误");
                console.error(res);
            });
        }
    }
});

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "category-tag" } },
    [
      _c(
        "p",
        { staticStyle: { "text-align": "right", "padding-bottom": "20px" } },
        [
          _c(
            "Button",
            {
              attrs: { type: "success", size: "small" },
              on: {
                click: function($event) {
                  _vm.createModal = true
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
            _c("p", [_vm._v("删除后会清除所有文章视频已添加的标签")]),
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
                  on: { click: _vm.delData }
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
          attrs: { title: "修改标签" },
          on: { "on-ok": _vm.editData },
          model: {
            value: _vm.editModal,
            callback: function($$v) {
              _vm.editModal = $$v
            },
            expression: "editModal"
          }
        },
        [
          _c("section", { staticClass: "modal-input" }, [
            _c(
              "p",
              [
                _c("label", { attrs: { for: "name" } }, [_vm._v(" 标签名*：")]),
                _vm._v(" "),
                _c("Input", {
                  attrs: { name: "name" },
                  model: {
                    value: _vm.selectTag.name,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.selectTag,
                        "name",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "selectTag.name"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "p",
              [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("描述：")
                ]),
                _vm._v(" "),
                _c("Input", {
                  attrs: { name: "description" },
                  model: {
                    value: _vm.selectTag.description,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.selectTag,
                        "description",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "selectTag.description"
                  }
                })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "新增标签" },
          on: { "on-ok": _vm.createData },
          model: {
            value: _vm.createModal,
            callback: function($$v) {
              _vm.createModal = $$v
            },
            expression: "createModal"
          }
        },
        [
          _c("section", { staticClass: "modal-input" }, [
            _c(
              "p",
              [
                _c("label", { attrs: { for: "name" } }, [_vm._v(" 标签名*：")]),
                _vm._v(" "),
                _c("Input", {
                  attrs: { name: "name" },
                  model: {
                    value: _vm.createTag.name,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.createTag,
                        "name",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "createTag.name"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "p",
              [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("描述：")
                ]),
                _vm._v(" "),
                _c("Input", {
                  attrs: { name: "description" },
                  model: {
                    value: _vm.createTag.description,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.createTag,
                        "description",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "createTag.description"
                  }
                })
              ],
              1
            )
          ])
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-b3d39d84", module.exports)
  }
}

/***/ })

});