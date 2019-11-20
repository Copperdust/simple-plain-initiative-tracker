webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "./node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "./node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_own-keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/library/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
















var _jsxFileName = "/Users/fabio/Sites/next-initiative-tracker/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



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
  var result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_15___default()(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_14__["default"])(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

var grid = 8;

var getItemStyle = function getItemStyle(isDragging, draggableStyle) {
  return _objectSpread({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: "0 0 ".concat(grid, "px 0"),
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey"
  }, draggableStyle);
};

var getListStyle = function getListStyle(isDraggingOver) {
  return {
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
  };
};

var InitiativeTracker =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(InitiativeTracker, _React$Component);

  function InitiativeTracker(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, InitiativeTracker);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(InitiativeTracker).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleNameInputChange", function (e) {
      _this.setState({
        nameInput: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleInitiativeInputChange", function (e) {
      _this.setState({
        initiativeInput: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "addEntity", function (e, sort) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "sortEntities", function (arr) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "forward", function () {
      var newOrder = _this.state.entities;
      newOrder.push(newOrder.shift());

      _this.setState({
        entities: newOrder
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "backward", function () {
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
    _this.addEntity = _this.addEntity.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    _this.handleNameInputChange = _this.handleNameInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    _this.handleInitiativeInputChange = _this.handleInitiativeInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    _this.forward = _this.forward.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    _this.backward = _this.backward.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    _this.onDragEnd = _this.onDragEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    _this.state.entities = _this.sortEntities(TEST_ENTITIES);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(InitiativeTracker, [{
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
        return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_18__["Draggable"], {
          key: item.id,
          draggableId: item.id,
          index: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, function (provided, snapshot) {
          return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
            ref: provided.innerRef
          }, provided.draggableProps, provided.dragHandleProps, {
            style: getItemStyle(snapshot.isDragging, provided.draggableProps.style),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
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
          lineNumber: 175
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_18__["DragDropContext"], {
        onDragEnd: this.onDragEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_18__["Droppable"], {
        droppableId: "droppable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, function (provided, snapshot) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, provided.droppableProps, {
          ref: provided.innerRef,
          style: getListStyle(snapshot.isDraggingOver),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }), items, provided.placeholder);
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx("button", {
        onClick: this.forward,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Advance"), __jsx("button", {
        onClick: this.backward,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Go Back")), __jsx("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Entity Name: ", __jsx("input", {
        value: this.state.nameInput,
        onChange: this.handleNameInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      })), __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Entity Initiative: ", __jsx("input", {
        value: this.state.initiativeInput,
        onChange: this.handleInitiativeInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })), __jsx("button", {
        onClick: function onClick(e) {
          return _this2.addEntity(e, true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Add and Sort"), __jsx("button", {
        onClick: function onClick(e) {
          return _this2.addEntity(e, false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Add")));
    }
  }]);

  return InitiativeTracker;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component);

function Main() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(InitiativeTracker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.6d33a73dd61ebc9b51b0.hot-update.js.map