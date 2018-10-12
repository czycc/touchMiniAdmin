webpackJsonp([0],{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(66)
/* template */
var __vue_template__ = __webpack_require__(67)
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

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 66:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Videos",
    data: function data() {
        var _this = this;

        return {
            delModal: false,
            editModal: false,
            selectIndex: 0,
            modal_loading: false,
            columns: [{
                title: "ID",
                key: "id"
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
                                _this.selectIndex = params.row.id;
                                _this.edit(params.row.id);
                            }
                        }
                    }, "编辑"), h("Button", {
                        props: {
                            type: "error",
                            size: "small"
                        },
                        on: {
                            click: function click() {
                                _this.selectIndex = params.row.id;
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
            var that = this;
            axios.get("/category/videos").then(function (res) {
                that.data = res.data.data;
            });
        },
        editCategory: function editCategory(index) {},
        delCategory: function delCategory() {
            this.modal_loading = true;
            var that = this;
            axios({
                method: "delete",
                url: "/category/videos/" + that.selectIndex
            }).then(function () {
                return that.$Massage.info("删除成功");
            }).catch(function (params) {
                that.$Massage.error("发生错误");
                this.modal_loading = false;
                this.delModal = false;
            });
        },
        create: function create() {}
    }
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "category-video" } },
    [
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
          _c("p", [_vm._v("Content of dialog")]),
          _vm._v(" "),
          _c("p", [_vm._v("Content of dialog")]),
          _vm._v(" "),
          _c("p", [_vm._v("Content of dialog")])
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
    require("vue-hot-reload-api")      .rerender("data-v-6472d862", module.exports)
  }
}

/***/ })

});