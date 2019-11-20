webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");










var _jsxFileName = "/Users/fabio/Sites/next-initiative-tracker/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;


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
  var result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_9___default()(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

var InitiativeTracker =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(InitiativeTracker, _React$Component);

  function InitiativeTracker(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InitiativeTracker);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(InitiativeTracker).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleNameInputChange", function (e) {
      _this.setState({
        nameInput: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleInitiativeInputChange", function (e) {
      _this.setState({
        initiativeInput: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addEntity", function (e, sort) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sortEntities", function (arr) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "forward", function () {
      var newOrder = _this.state.entities;
      newOrder.push(newOrder.shift());

      _this.setState({
        entities: newOrder
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "backward", function () {
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
    _this.addEntity = _this.addEntity.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleNameInputChange = _this.handleNameInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleInitiativeInputChange = _this.handleInitiativeInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.forward = _this.forward.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.backward = _this.backward.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onDragEnd = _this.onDragEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state.entities = _this.sortEntities(TEST_ENTITIES);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InitiativeTracker, [{
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
      var items = this.state.entities.map(function (item, index) {
        return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Draggable"], {
          key: item.id,
          draggableId: item.id,
          index: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, function (provided, snapshot) {
          return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            ref: provided.innerRef
          }, provided.draggableProps, provided.dragHandleProps, {
            style: getItemStyle(snapshot.isDragging, provided.draggableProps.style),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }), item.content);
        }) // <tr key={key}>
        //     <td className="name">{item.name}</td>
        //     <td className="initative">{item.initiative}</td>
        // </tr>
        ;
      });
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["DragDropContext"], {
        onDragEnd: this.onDragEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Droppable"], {
        droppableId: "droppable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, function (provided, snapshot) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.droppableProps, {
          ref: provided.innerRef,
          style: getListStyle(snapshot.isDraggingOver),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }), items, provided.placeholder);
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("button", {
        onClick: this.forward,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Advance"), __jsx("button", {
        onClick: this.backward,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Go Back")), __jsx("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Entity Name: ", __jsx("input", {
        value: this.state.nameInput,
        onChange: this.handleNameInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })), __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Entity Initiative: ", __jsx("input", {
        value: this.state.initiativeInput,
        onChange: this.handleInitiativeInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      })), __jsx("button", {
        onClick: function onClick(e) {
          return _this2.addEntity(e, true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Add and Sort"), __jsx("button", {
        onClick: function onClick(e) {
          return _this2.addEntity(e, false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Add")));
    }
  }]);

  return InitiativeTracker;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

function Main() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(InitiativeTracker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.420a0eb301ec177ccdc5.hot-update.js.map