webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");









var _jsxFileName = "/Users/fabio/Sites/next-initiative-tracker/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;


var TEST_ENTITIES = [{
  name: "Rivulet",
  initiative: Math.floor(Math.random() * 20) + 1 + 5
}, {
  name: "Rimaru",
  initiative: Math.floor(Math.random() * 20) + 1 + 4
}, {
  name: "Gesh",
  initiative: Math.floor(Math.random() * 20) + 1 + 3
}, {
  name: "Skytree",
  initiative: Math.floor(Math.random() * 20) + 1 + 2
}, {
  name: "NPC 1",
  initiative: Math.floor(Math.random() * 20) + 1
}, {
  name: "NPC 2",
  initiative: Math.floor(Math.random() * 20) + 1
}, {
  name: "NPC 3",
  initiative: Math.floor(Math.random() * 20) + 1
}, {
  name: "NPC 4",
  initiative: Math.floor(Math.random() * 20) + 1
}]; // a little function to help us with reordering the result

var reorder = function reorder(list, startIndex, endIndex) {
  var result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8___default()(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

var InitiativeTracker =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InitiativeTracker, _React$Component);

  function InitiativeTracker(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InitiativeTracker);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InitiativeTracker).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleNameInputChange", function (e) {
      _this.setState({
        nameInput: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleInitiativeInputChange", function (e) {
      _this.setState({
        initiativeInput: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addEntity", function (e, sort) {
      e.preventDefault();
      var newState = {};
      newState.entities = _this.state.entities.concat({
        name: _this.state.nameInput,
        initiative: _this.state.initiativeInput
      });

      if (sort) {
        newState.entities = _this.sortEntities(newState.entities);
      }

      _this.setState(newState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sortEntities", function (arr) {
      return arr.sort(function (x, y) {
        if (x.initiative < y.initiative) {
          return -1;
        }

        if (x.initiative > y.initiative) {
          return 1;
        }

        return 0;
      }).reverse();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "forward", function () {
      var newOrder = _this.state.entities;
      newOrder.push(newOrder.shift());

      _this.setState({
        entities: newOrder
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "backward", function () {
      var newOrder = _this.state.entities;
      newOrder.unshift(newOrder.pop());

      _this.setState({
        entities: newOrder
      });
    });

    _this.state = {
      nameInput: '',
      initiativeInput: '',
      entities: []
    };
    _this.addEntity = _this.addEntity.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleNameInputChange = _this.handleNameInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleInitiativeInputChange = _this.handleInitiativeInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.forward = _this.forward.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.backward = _this.backward.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onDragEnd = _this.onDragEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state.entities = _this.sortEntities(TEST_ENTITIES);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InitiativeTracker, [{
    key: "onDragEnd",
    value: function onDragEnd(result) {
      // dropped outside the list
      if (!result.destination) {
        return;
      }

      var items = reorder(this.state.items, result.source.index, result.destination.index);
      this.setState({
        entities: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var first = true;
      var items = this.state.entities.map(function (item, key) {
        return __jsx("tr", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, __jsx("td", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, item.name), __jsx("td", {
          className: "initative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, item.initiative));
      });
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("table", {
        className: "initiative-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Name"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Initiative")), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, items))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("button", {
        onClick: this.forward,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Advance"), __jsx("button", {
        onClick: this.backward,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Go Back")), __jsx("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Entity Name: ", __jsx("input", {
        value: this.state.nameInput,
        onChange: this.handleNameInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Entity Initiative: ", __jsx("input", {
        value: this.state.initiativeInput,
        onChange: this.handleInitiativeInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })), __jsx("button", {
        onClick: function onClick(e) {
          return _this2.addEntity(e, true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Add and Sort"), __jsx("button", {
        onClick: function onClick(e) {
          return _this2.addEntity(e, false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Add")));
    }
  }]);

  return InitiativeTracker;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

function Main() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(InitiativeTracker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.28147792e92a6d9a525d.hot-update.js.map