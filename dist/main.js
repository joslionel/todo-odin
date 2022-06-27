/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n    display: grid;\n    grid-template-columns: 1fr 7fr;\n    min-height: 90vh;\n}\n\n.navPanel,\n.mainPanel {\n    min-height: 100%;\n    border: 1px solid black;\n}\n\n.spaceBetween {\n    display: flex;\n    justify-content: space-between;\n}\n\n.alignSelfEnd {\n    align-self: end;\n}\n\n.justifyContentEnd {\n    display: flex;\n    justify-content: end;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n.modalParent {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .8);\n    cursor: pointer;\n}\n\n.modalWindow {\n    min-width: 15em;\n    min-height: 5em;\n    padding: 1em;\n    border: 0px;\n    border-radius: 1em;\n    background-color: cornflowerblue;\n    cursor: auto;\n}\n\n#modalContent {\n    display: flex;\n    flex-direction: column;\n    \n}\n\n#modalContent > input {\n    margin-bottom: 1em;\n}\n\n#modalContent > textarea {\n    margin-bottom: 1em;\n}\n\n#modalContent > label {\n    margin-bottom: .25em;\n}\n\n#addTaskButtonsContainer > button {\n    margin-left: .25em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[".main {\n    display: grid;\n    grid-template-columns: 1fr 7fr;\n    min-height: 90vh;\n}\n\n.navPanel,\n.mainPanel {\n    min-height: 100%;\n    border: 1px solid black;\n}\n\n.spaceBetween {\n    display: flex;\n    justify-content: space-between;\n}\n\n.alignSelfEnd {\n    align-self: end;\n}\n\n.justifyContentEnd {\n    display: flex;\n    justify-content: end;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n.modalParent {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .8);\n    cursor: pointer;\n}\n\n.modalWindow {\n    min-width: 15em;\n    min-height: 5em;\n    padding: 1em;\n    border: 0px;\n    border-radius: 1em;\n    background-color: cornflowerblue;\n    cursor: auto;\n}\n\n#modalContent {\n    display: flex;\n    flex-direction: column;\n    \n}\n\n#modalContent > input {\n    margin-bottom: 1em;\n}\n\n#modalContent > textarea {\n    margin-bottom: 1em;\n}\n\n#modalContent > label {\n    margin-bottom: .25em;\n}\n\n#addTaskButtonsContainer > button {\n    margin-left: .25em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/leftPanelActions.js":
/*!*********************************!*\
  !*** ./src/leftPanelActions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leftPanelActions": () => (/* binding */ leftPanelActions),
/* harmony export */   "listOfProjects": () => (/* binding */ listOfProjects)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _mainPanelActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPanelActions */ "./src/mainPanelActions.js");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");





const searchBar = () => {
    const searchBar = document.getElementById('navSearchBar')

    searchBar.addEventListener('keypress', e => {
        if (e.key == 'Enter') {
            const result = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.filter(result => result.projectName.toLowerCase().includes(e.target.value.toLowerCase()));
            
            populateProjectList(result)
        }
    })
}

const listOfProjects = () => {

    const eachproject = document.querySelectorAll('.project')

    
    eachproject.forEach(project => {
        project.addEventListener('click', function (e) {
            
            const focusProject = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.filter(project => project.projectName == e.target.textContent);
            
            (0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_1__.updateMainPane)(focusProject[0])
        })
    });

    

    
}

const addNewProjectField = () => {
    const addNewField = document.getElementById('newProjectInput')

    addNewField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.push((0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.project)(`${e.target.value}`, [], 1, '', 0))
            e.target.value = '';
        }


        populateProjectList(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projects)
        
    })

}

const populateProjectList = (projectList) => {
    const leftPanelProjectList = document.getElementById('projectList')

    while (leftPanelProjectList.firstChild) {
        leftPanelProjectList.removeChild(leftPanelProjectList.firstChild)
    }

    //  TO DO: 
    // put this into a project listing module/function/object as a method??
    
    projectList.forEach(project => {
        const projectToList = document.createElement('li')
        projectToList.textContent = `${project.projectName}`
        projectToList.classList.add('project')
        leftPanelProjectList.appendChild(projectToList)
    });

    listOfProjects()

}

const deleteProject =  () => {
    const deleteProjectButton = document.getElementById('deleteProjectButton');
    deleteProjectButton.addEventListener('click', _renderPage__WEBPACK_IMPORTED_MODULE_2__.showModal)
}

const leftPanelActions = () => {

    searchBar()

    addNewProjectField()
    
    populateProjectList(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projects)

    deleteProject()
    
}



/***/ }),

/***/ "./src/mainPanelActions.js":
/*!*********************************!*\
  !*** ./src/mainPanelActions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPaneActions": () => (/* binding */ mainPaneActions),
/* harmony export */   "updateCompletionStatus": () => (/* binding */ updateCompletionStatus),
/* harmony export */   "updateMainPane": () => (/* binding */ updateMainPane)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");



const updateMainPane = (content) => {
    
    const projectNameHeading = document.getElementById('projectName')
    const tasksRemaining = document.getElementById('tasksRemaining')
    
    const mainPane = document.querySelector('.mainTaskList')

    mainPane.textContent = ''

    if (content == 'default') {
        mainPane.textContent = 'This is the placeholder content';
    } else {
        const project = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.filter(project => project.projectName == content.projectName)[0]
        let isTaskComplete = ''
        if (project.getCompleted() == 1) {
            isTaskComplete = 'Task Complete'
        } else {
            isTaskComplete = 'Incomplete'
        }

        let noOfTasks = project.projectTasks.length
        let tasksCompleted = project.tasksCompleted.length
        tasksRemaining.textContent = `${tasksCompleted} of ${noOfTasks} tasks completed`;


        const mainPaneTitle = document.createElement('h3');
        const mainPaneSubTasks = document.createElement('ul');
        const mainPaneComplete = document.createElement('h3');
        mainPaneComplete.setAttribute('id', 'completionStatus')
        const mainPaneDueDate = document.createElement('p');

        projectNameHeading.textContent = content.projectName;

        mainPaneTitle.textContent = content.projectName + ' - Subtasks';
        
        mainPaneComplete.textContent = isTaskComplete;
        mainPaneDueDate.textContent = content.dueDate;

        if (content.projectTasks) {
            content.projectTasks.forEach(task => {
                let step = document.createElement('li');
                step.textContent = task;
                step.setAttribute('data-index', `${content.projectTasks.indexOf(task, 0)}`)

                step.addEventListener('click', function (e) {
                    completeSubTask(project, e)
                })

                mainPaneSubTasks.append(step)
            });
        }

        mainPane.append(mainPaneTitle, mainPaneDueDate, mainPaneSubTasks, mainPaneComplete)

        updateCompletionStatus(project)
    }

    
}

const completeSubTask = (project, e) => {
    console.log(project.projectTasks[e.target.dataset.index])
    // search the tasksCompleted array for the index of the task that is clicked
    // if it is not in the array, add it. if it is in the array, remove it.
    if (project.tasksCompleted.indexOf(e.target.dataset.index) == -1) {
        project.tasksCompleted.push(e.target.dataset.index)
    } else {
        project.tasksCompleted = project.tasksCompleted.filter(tasks => tasks != e.target.dataset.index)
    }
    updateMainPane(project)
}

const updateCompletionStatus = (project) => {
    if (document.getElementById('completionStatus')) {

        const completionStatus = document.getElementById('completionStatus')

        completionStatus.addEventListener('click', function (e) {
            project.toggleCompleted()

            updateMainPane(project)
    })
}
}



const addTask = () => {
    const addTaskButton = document.getElementById('addTaskButton')
    addTaskButton.addEventListener('click', function () {
        ;(0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.showModal)('addTask')
    })
}

const removeTask = () => {
    const removeTaskButton = document.getElementById('removeTaskButton')
removeTaskButton.addEventListener('click', _renderPage__WEBPACK_IMPORTED_MODULE_1__.showModal);
    
}

const mainPaneActions = () => {
    
    addTask()
    removeTask()
}





/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const projects = []

const project = (projectName, projectTasks, projectPriority, dueDate) => {
    
    let isCompleted = 0;

    const toggleCompleted = () => {
        isCompleted = !isCompleted;
        
    }

    const getCompleted = () => {
        if (isCompleted == 0) {
            return 0;
        } else {
            return 1;
        }
    }

    let tasksCompleted = []

    return {
        projectName,
        projectTasks,
        tasksCompleted,
        projectPriority,
        dueDate,
        tasksCompleted,
        toggleCompleted,
        getCompleted,
    }
}

projects.push(project(
    'Default Prawbect',
    [
        'Step 1',
        'Step 2',
        'Step 3',
    ],
    1,
    '',
))
projects.push(project('Project 2', ['Task 1', 'Task 2', 'Task 3'], 0, ''))
projects[1].toggleCompleted()



/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPage": () => (/* binding */ renderPage),
/* harmony export */   "showModal": () => (/* binding */ showModal)
/* harmony export */ });
/* harmony import */ var _mainPanelActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPanelActions */ "./src/mainPanelActions.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const getProject = () => {
    const projectName = document.getElementById('projectName');
    const project = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.filter(project => project.projectName == projectName.textContent)
    return project[0]
}

const createMainFrame = () => {
    const mainFrame = document.createElement('div');
    mainFrame.classList.add('main');

    return mainFrame
}

const createLeftPanel = () => {
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('navPanel');

    const navSearchBar = document.createElement('input');
    navSearchBar.setAttribute('id', 'navSearchBar')
    navSearchBar.setAttribute('type', 'text');
    navSearchBar.setAttribute('placeholder', 'Search for a project');

    const navHeading = document.createElement('h2');
    navHeading.textContent = 'My Projects';

    const projectList = document.createElement('ul');
    projectList.setAttribute('id', 'projectList')
    const demoProject = document.createElement('li');
    demoProject.textContent = 'Demo Project';
    projectList.append(demoProject);

    const createNewProject = document.createElement('input');
    createNewProject.setAttribute('type', 'text');
    createNewProject.setAttribute('id', 'newProjectInput');
    createNewProject.setAttribute('placeholder', 'Create a new project');

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.setAttribute('id', 'deleteProjectButton')
    deleteProjectButton.textContent = 'Delete selected project';

    leftPanel.append(navSearchBar, navHeading, projectList, createNewProject, deleteProjectButton);

    return leftPanel
}

const createRightPanel = () => {
    const mainPanel = document.createElement('div');
    mainPanel.classList.add('mainPanel');

    const mainPanelHeading = document.createElement('div');

    const mainHeading = document.createElement('h2');
    mainHeading.textContent = "Project Name";
    mainHeading.setAttribute('id', 'projectName')
    mainPanelHeading.classList.add('spaceBetween');

    const mainTaskRemaining = document.createElement('h3');
    mainTaskRemaining.setAttribute('id', 'tasksRemaining')
    mainTaskRemaining.textContent = 'x/y tasks completed'

    const mainTaskList = document.createElement('div');
    mainTaskList.classList.add('mainTaskList');
    mainTaskList.textContent = 'List of tasks associated with selected project';

    const mainAddTask = document.createElement('div');
    mainAddTask.classList.add('spaceBetween');

    const addTaskButton = document.createElement('button')
    addTaskButton.textContent = 'Add task'
    addTaskButton.setAttribute('id', 'addTaskButton')

    const removeTaskButton = document.createElement('button')
    removeTaskButton.textContent = 'Remove task'
    removeTaskButton.setAttribute('id', 'removeTaskButton')

    mainAddTask.append(addTaskButton, removeTaskButton)

    mainPanelHeading.append(mainHeading, mainTaskRemaining);

    mainPanel.append(mainPanelHeading, mainTaskList, mainAddTask);
    
    return mainPanel
}

const createModalWindow = () => {
    const modalParent = document.createElement('div')
    modalParent.classList.add('modalParent')
    modalParent.classList.add('hide')

    const modal = document.createElement('div')
    modal.classList.add('modalWindow')

    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modalContent')

    modal.append(modalContent)
    
    modalParent.addEventListener('click', function (e) {
        if (e.target == modalParent) {hideModal()}
    })

    
    
    modalParent.append(modal)

    return modalParent
}

// these modal variations should have content & structure inside the functions
// then thse functions are passed into showModal as switch statement based on parameter
// that is passed from button click (in the other modules)
// this will allow the relevant stuff to the applied to the modal window when a button is pressed

const addTaskContent = () => {
    const contentBox = document.getElementById('modalContent')

    contentBox.innerHTML = ''

    const heading = document.createElement('h3');
    heading.textContent = 'Add task(s)';

    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('id', 'newTaskInput')
    const taskInputLabel = document.createElement('label');
    taskInputLabel.setAttribute('for', 'newTaskInput')
    taskInputLabel.textContent = 'Task name'

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('id', 'newTaskDueDate');
    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.setAttribute('for', 'newTaskInput');
    taskDueDateLabel.textContent = 'Task due';

    const taskDescription = document.createElement('textarea');
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id', 'newTaskDescription')
    const taskDescriptionLabel = document.createElement('label');
    taskDescriptionLabel.setAttribute('for', 'newTaskDescription')
    taskDescriptionLabel.textContent = 'Notes'

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('id', 'addTaskButtonsContainer')
    buttonsContainer.classList.add('justifyContentEnd')

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeModal');
    closeButton.textContent = 'Close'
    closeButton.addEventListener('click', function (e) {
        hideModal()
    })
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add task'

    submitButton.addEventListener('click', function (e) {
        submitNewTask(taskInput.value, taskDueDate.value, taskDescription.value)
    })
    
    buttonsContainer.append(submitButton, closeButton)

    contentBox.append(heading, taskInputLabel, 
        taskInput, taskDueDateLabel, 
        taskDueDate, taskDescriptionLabel, 
        taskDescription, buttonsContainer)

    return contentBox
}

const submitNewTask = (task, duedate, notes) => {
    getProject().projectTasks.push([task, duedate, notes])
    hideModal();
    (0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_0__.updateMainPane)(getProject());
}

const removeProjectModal = () => {

}

const removeTaskModal = () => {

}

const showModal = (content) => {

    const modalParent = document.querySelector('.modalParent')
    const modal = document.querySelector('.modalWindow')

    modalParent.classList.toggle('hide')

    
    document.addEventListener('keydown', function (e) {
        if (e.key == 'Escape') {
            hideModal()
        }
    }, {once: true})

    switch (content) {
        case 'addTask':
            modal.append(addTaskContent());
            break;
    
        default:
            modal.innerHTML = '';
            break;
    }

    
        
}

const hideModal = () => {
    const modalWindow = document.querySelector('.modalParent')
    modalWindow.classList.add('hide')

}

const renderPage = () => {
    const mainFrame = createMainFrame()    

    const leftPanel = createLeftPanel()

    const rightPanel = createRightPanel()

    const modalWindow = createModalWindow()

    mainFrame.append(leftPanel, rightPanel, modalWindow);

    document.body.append(mainFrame);

    return {mainFrame}
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");
/* harmony import */ var _leftPanelActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leftPanelActions */ "./src/leftPanelActions.js");
/* harmony import */ var _mainPanelActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainPanelActions */ "./src/mainPanelActions.js");





(0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderPage)()

;(0,_leftPanelActions__WEBPACK_IMPORTED_MODULE_2__.leftPanelActions)();
(0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_3__.mainPaneActions)();

(0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_3__.updateMainPane)('default')



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9CQUFvQixxQ0FBcUMsdUJBQXVCLEdBQUcsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsR0FBRyxtQkFBbUIsb0JBQW9CLHFDQUFxQyxHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyx3QkFBd0Isb0JBQW9CLDJCQUEyQixHQUFHLFdBQVcseUJBQXlCLEdBQUcsa0JBQWtCLHlCQUF5QixvQkFBb0IsMEJBQTBCLDhCQUE4QixrQkFBa0IsbUJBQW1CLDBDQUEwQyxzQkFBc0IsR0FBRyxrQkFBa0Isc0JBQXNCLHNCQUFzQixtQkFBbUIsa0JBQWtCLHlCQUF5Qix1Q0FBdUMsbUJBQW1CLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsU0FBUywyQkFBMkIseUJBQXlCLEdBQUcsOEJBQThCLHlCQUF5QixHQUFHLDJCQUEyQiwyQkFBMkIsR0FBRyx1Q0FBdUMseUJBQXlCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGlDQUFpQyxvQkFBb0IscUNBQXFDLHVCQUF1QixHQUFHLDRCQUE0Qix1QkFBdUIsOEJBQThCLEdBQUcsbUJBQW1CLG9CQUFvQixxQ0FBcUMsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQiwyQkFBMkIsR0FBRyxXQUFXLHlCQUF5QixHQUFHLGtCQUFrQix5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsa0JBQWtCLG1CQUFtQiwwQ0FBMEMsc0JBQXNCLEdBQUcsa0JBQWtCLHNCQUFzQixzQkFBc0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsdUNBQXVDLG1CQUFtQixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLFNBQVMsMkJBQTJCLHlCQUF5QixHQUFHLDhCQUE4Qix5QkFBeUIsR0FBRywyQkFBMkIsMkJBQTJCLEdBQUcsdUNBQXVDLHlCQUF5QixHQUFHLG1CQUFtQjtBQUNwNEY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmtEO0FBQ0U7QUFDWDs7O0FBR3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQix5REFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseURBQWU7QUFDaEQ7QUFDQSxZQUFZLGlFQUFjO0FBQzFCLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1REFBYSxDQUFDLHFEQUFPLElBQUksZUFBZTtBQUNwRDtBQUNBOzs7QUFHQSw0QkFBNEIsa0RBQVE7QUFDcEM7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0Qsa0RBQVM7QUFDM0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrREFBUTs7QUFFaEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGeUM7QUFDQTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLHlEQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0JBQWdCLEtBQUssV0FBVzs7O0FBR3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsc0NBQXNDOztBQUV6RjtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUztBQUNqQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxrREFBUztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q29EO0FBQ2Q7O0FBRXRDO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQWU7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFjO0FBQ2xCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRyxXQUFXOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7VUMzT0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUNZO0FBQ2U7O0FBRXJFLHVEQUFVOztBQUVWLG9FQUFnQjtBQUNoQixrRUFBZTs7QUFFZixpRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvbGVmdFBhbmVsQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvbWFpblBhbmVsQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tb2Rpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLW9kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxufVxcblxcbi5uYXZQYW5lbCxcXG4ubWFpblBhbmVsIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zcGFjZUJldHdlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hbGlnblNlbGZFbmQge1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5qdXN0aWZ5Q29udGVudEVuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm1vZGFsUGFyZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsV2luZG93IHtcXG4gICAgbWluLXdpZHRoOiAxNWVtO1xcbiAgICBtaW4taGVpZ2h0OiA1ZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIGN1cnNvcjogYXV0bztcXG59XFxuXFxuI21vZGFsQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbn1cXG5cXG4jbW9kYWxDb250ZW50ID4gaW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbiNtb2RhbENvbnRlbnQgPiB0ZXh0YXJlYSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuI21vZGFsQ29udGVudCA+IGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAuMjVlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG59XFxuXFxuLm5hdlBhbmVsLFxcbi5tYWluUGFuZWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNwYWNlQmV0d2VlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFsaWduU2VsZkVuZCB7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmp1c3RpZnlDb250ZW50RW5kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubW9kYWxQYXJlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWxXaW5kb3cge1xcbiAgICBtaW4td2lkdGg6IDE1ZW07XFxuICAgIG1pbi1oZWlnaHQ6IDVlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4jbW9kYWxDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxufVxcblxcbiNtb2RhbENvbnRlbnQgPiBpbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuI21vZGFsQ29udGVudCA+IHRleHRhcmVhIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jbW9kYWxDb250ZW50ID4gbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuMjVlbTtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b25zQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC4yNWVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IHVwZGF0ZU1haW5QYW5lIH0gZnJvbSBcIi4vbWFpblBhbmVsQWN0aW9uc1wiO1xuaW1wb3J0IHsgc2hvd01vZGFsIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuXG5cbmNvbnN0IHNlYXJjaEJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2U2VhcmNoQmFyJylcblxuICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHJvamVjdHMuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdExpc3QocmVzdWx0KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgbGlzdE9mUHJvamVjdHMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBlYWNocHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcblxuICAgIFxuICAgIGVhY2hwcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBmb2N1c1Byb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09IGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlTWFpblBhbmUoZm9jdXNQcm9qZWN0WzBdKVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgXG5cbiAgICBcbn1cblxuY29uc3QgYWRkTmV3UHJvamVjdEZpZWxkID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZE5ld0ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RJbnB1dCcpXG5cbiAgICBhZGROZXdGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KGAke2UudGFyZ2V0LnZhbHVlfWAsIFtdLCAxLCAnJywgMCkpXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cblxuICAgICAgICBwb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzKVxuICAgICAgICBcbiAgICB9KVxuXG59XG5cbmNvbnN0IHBvcHVsYXRlUHJvamVjdExpc3QgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICBjb25zdCBsZWZ0UGFuZWxQcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpXG5cbiAgICB3aGlsZSAobGVmdFBhbmVsUHJvamVjdExpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBsZWZ0UGFuZWxQcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChsZWZ0UGFuZWxQcm9qZWN0TGlzdC5maXJzdENoaWxkKVxuICAgIH1cblxuICAgIC8vICBUTyBETzogXG4gICAgLy8gcHV0IHRoaXMgaW50byBhIHByb2plY3QgbGlzdGluZyBtb2R1bGUvZnVuY3Rpb24vb2JqZWN0IGFzIGEgbWV0aG9kPz9cbiAgICBcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBwcm9qZWN0VG9MaXN0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5wcm9qZWN0TmFtZX1gXG4gICAgICAgIHByb2plY3RUb0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgIGxlZnRQYW5lbFByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RUb0xpc3QpXG4gICAgfSk7XG5cbiAgICBsaXN0T2ZQcm9qZWN0cygpXG5cbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9ICAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVQcm9qZWN0QnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbClcbn1cblxuY29uc3QgbGVmdFBhbmVsQWN0aW9ucyA9ICgpID0+IHtcblxuICAgIHNlYXJjaEJhcigpXG5cbiAgICBhZGROZXdQcm9qZWN0RmllbGQoKVxuICAgIFxuICAgIHBvcHVsYXRlUHJvamVjdExpc3QocHJvamVjdHMpXG5cbiAgICBkZWxldGVQcm9qZWN0KClcbiAgICBcbn1cblxuZXhwb3J0IHtsZWZ0UGFuZWxBY3Rpb25zLCBsaXN0T2ZQcm9qZWN0c30iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XG5cbmNvbnN0IHVwZGF0ZU1haW5QYW5lID0gKGNvbnRlbnQpID0+IHtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0TmFtZUhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKVxuICAgIGNvbnN0IHRhc2tzUmVtYWluaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzUmVtYWluaW5nJylcbiAgICBcbiAgICBjb25zdCBtYWluUGFuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluVGFza0xpc3QnKVxuXG4gICAgbWFpblBhbmUudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgaWYgKGNvbnRlbnQgPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIG1haW5QYW5lLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgdGhlIHBsYWNlaG9sZGVyIGNvbnRlbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09IGNvbnRlbnQucHJvamVjdE5hbWUpWzBdXG4gICAgICAgIGxldCBpc1Rhc2tDb21wbGV0ZSA9ICcnXG4gICAgICAgIGlmIChwcm9qZWN0LmdldENvbXBsZXRlZCgpID09IDEpIHtcbiAgICAgICAgICAgIGlzVGFza0NvbXBsZXRlID0gJ1Rhc2sgQ29tcGxldGUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1Rhc2tDb21wbGV0ZSA9ICdJbmNvbXBsZXRlJ1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vT2ZUYXNrcyA9IHByb2plY3QucHJvamVjdFRhc2tzLmxlbmd0aFxuICAgICAgICBsZXQgdGFza3NDb21wbGV0ZWQgPSBwcm9qZWN0LnRhc2tzQ29tcGxldGVkLmxlbmd0aFxuICAgICAgICB0YXNrc1JlbWFpbmluZy50ZXh0Q29udGVudCA9IGAke3Rhc2tzQ29tcGxldGVkfSBvZiAke25vT2ZUYXNrc30gdGFza3MgY29tcGxldGVkYDtcblxuXG4gICAgICAgIGNvbnN0IG1haW5QYW5lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBtYWluUGFuZVN1YlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgbWFpblBhbmVDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG1haW5QYW5lQ29tcGxldGUuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0aW9uU3RhdHVzJylcbiAgICAgICAgY29uc3QgbWFpblBhbmVEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIHByb2plY3ROYW1lSGVhZGluZy50ZXh0Q29udGVudCA9IGNvbnRlbnQucHJvamVjdE5hbWU7XG5cbiAgICAgICAgbWFpblBhbmVUaXRsZS50ZXh0Q29udGVudCA9IGNvbnRlbnQucHJvamVjdE5hbWUgKyAnIC0gU3VidGFza3MnO1xuICAgICAgICBcbiAgICAgICAgbWFpblBhbmVDb21wbGV0ZS50ZXh0Q29udGVudCA9IGlzVGFza0NvbXBsZXRlO1xuICAgICAgICBtYWluUGFuZUR1ZURhdGUudGV4dENvbnRlbnQgPSBjb250ZW50LmR1ZURhdGU7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQucHJvamVjdFRhc2tzKSB7XG4gICAgICAgICAgICBjb250ZW50LnByb2plY3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBzdGVwLnRleHRDb250ZW50ID0gdGFzaztcbiAgICAgICAgICAgICAgICBzdGVwLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGAke2NvbnRlbnQucHJvamVjdFRhc2tzLmluZGV4T2YodGFzaywgMCl9YClcblxuICAgICAgICAgICAgICAgIHN0ZXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZVN1YlRhc2socHJvamVjdCwgZSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbWFpblBhbmVTdWJUYXNrcy5hcHBlbmQoc3RlcClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpblBhbmUuYXBwZW5kKG1haW5QYW5lVGl0bGUsIG1haW5QYW5lRHVlRGF0ZSwgbWFpblBhbmVTdWJUYXNrcywgbWFpblBhbmVDb21wbGV0ZSlcblxuICAgICAgICB1cGRhdGVDb21wbGV0aW9uU3RhdHVzKHByb2plY3QpXG4gICAgfVxuXG4gICAgXG59XG5cbmNvbnN0IGNvbXBsZXRlU3ViVGFzayA9IChwcm9qZWN0LCBlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdC5wcm9qZWN0VGFza3NbZS50YXJnZXQuZGF0YXNldC5pbmRleF0pXG4gICAgLy8gc2VhcmNoIHRoZSB0YXNrc0NvbXBsZXRlZCBhcnJheSBmb3IgdGhlIGluZGV4IG9mIHRoZSB0YXNrIHRoYXQgaXMgY2xpY2tlZFxuICAgIC8vIGlmIGl0IGlzIG5vdCBpbiB0aGUgYXJyYXksIGFkZCBpdC4gaWYgaXQgaXMgaW4gdGhlIGFycmF5LCByZW1vdmUgaXQuXG4gICAgaWYgKHByb2plY3QudGFza3NDb21wbGV0ZWQuaW5kZXhPZihlLnRhcmdldC5kYXRhc2V0LmluZGV4KSA9PSAtMSkge1xuICAgICAgICBwcm9qZWN0LnRhc2tzQ29tcGxldGVkLnB1c2goZS50YXJnZXQuZGF0YXNldC5pbmRleClcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0LnRhc2tzQ29tcGxldGVkID0gcHJvamVjdC50YXNrc0NvbXBsZXRlZC5maWx0ZXIodGFza3MgPT4gdGFza3MgIT0gZS50YXJnZXQuZGF0YXNldC5pbmRleClcbiAgICB9XG4gICAgdXBkYXRlTWFpblBhbmUocHJvamVjdClcbn1cblxuY29uc3QgdXBkYXRlQ29tcGxldGlvblN0YXR1cyA9IChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0aW9uU3RhdHVzJykpIHtcblxuICAgICAgICBjb25zdCBjb21wbGV0aW9uU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRpb25TdGF0dXMnKVxuXG4gICAgICAgIGNvbXBsZXRpb25TdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcHJvamVjdC50b2dnbGVDb21wbGV0ZWQoKVxuXG4gICAgICAgICAgICB1cGRhdGVNYWluUGFuZShwcm9qZWN0KVxuICAgIH0pXG59XG59XG5cblxuXG5jb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd01vZGFsKCdhZGRUYXNrJylcbiAgICB9KVxufVxuXG5jb25zdCByZW1vdmVUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlVGFza0J1dHRvbicpXG5yZW1vdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsKTtcbiAgICBcbn1cblxuY29uc3QgbWFpblBhbmVBY3Rpb25zID0gKCkgPT4ge1xuICAgIFxuICAgIGFkZFRhc2soKVxuICAgIHJlbW92ZVRhc2soKVxufVxuXG5cblxuZXhwb3J0IHsgdXBkYXRlQ29tcGxldGlvblN0YXR1cywgdXBkYXRlTWFpblBhbmUsIG1haW5QYW5lQWN0aW9ucyB9IiwiY29uc3QgcHJvamVjdHMgPSBbXVxuXG5jb25zdCBwcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0VGFza3MsIHByb2plY3RQcmlvcml0eSwgZHVlRGF0ZSkgPT4ge1xuICAgIFxuICAgIGxldCBpc0NvbXBsZXRlZCA9IDA7XG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGlzQ29tcGxldGVkID0gIWlzQ29tcGxldGVkO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlZCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRhc2tzQ29tcGxldGVkID0gW11cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0VGFza3MsXG4gICAgICAgIHRhc2tzQ29tcGxldGVkLFxuICAgICAgICBwcm9qZWN0UHJpb3JpdHksXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHRhc2tzQ29tcGxldGVkLFxuICAgICAgICB0b2dnbGVDb21wbGV0ZWQsXG4gICAgICAgIGdldENvbXBsZXRlZCxcbiAgICB9XG59XG5cbnByb2plY3RzLnB1c2gocHJvamVjdChcbiAgICAnRGVmYXVsdCBQcmF3YmVjdCcsXG4gICAgW1xuICAgICAgICAnU3RlcCAxJyxcbiAgICAgICAgJ1N0ZXAgMicsXG4gICAgICAgICdTdGVwIDMnLFxuICAgIF0sXG4gICAgMSxcbiAgICAnJyxcbikpXG5wcm9qZWN0cy5wdXNoKHByb2plY3QoJ1Byb2plY3QgMicsIFsnVGFzayAxJywgJ1Rhc2sgMicsICdUYXNrIDMnXSwgMCwgJycpKVxucHJvamVjdHNbMV0udG9nZ2xlQ29tcGxldGVkKClcblxuZXhwb3J0IHtwcm9qZWN0cywgcHJvamVjdH0iLCJpbXBvcnQgeyB1cGRhdGVNYWluUGFuZSB9IGZyb20gXCIuL21haW5QYW5lbEFjdGlvbnNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09IHByb2plY3ROYW1lLnRleHRDb250ZW50KVxuICAgIHJldHVybiBwcm9qZWN0WzBdXG59XG5cbmNvbnN0IGNyZWF0ZU1haW5GcmFtZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRnJhbWUuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgcmV0dXJuIG1haW5GcmFtZVxufVxuXG5jb25zdCBjcmVhdGVMZWZ0UGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ25hdlBhbmVsJyk7XG5cbiAgICBjb25zdCBuYXZTZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hdlNlYXJjaEJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdlNlYXJjaEJhcicpXG4gICAgbmF2U2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmF2U2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIGZvciBhIHByb2plY3QnKTtcblxuICAgIGNvbnN0IG5hdkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG5hdkhlYWRpbmcudGV4dENvbnRlbnQgPSAnTXkgUHJvamVjdHMnO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdExpc3QnKVxuICAgIGNvbnN0IGRlbW9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkZW1vUHJvamVjdC50ZXh0Q29udGVudCA9ICdEZW1vIFByb2plY3QnO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChkZW1vUHJvamVjdCk7XG5cbiAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgY3JlYXRlTmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RJbnB1dCcpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdDcmVhdGUgYSBuZXcgcHJvamVjdCcpO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVQcm9qZWN0QnV0dG9uJylcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBzZWxlY3RlZCBwcm9qZWN0JztcblxuICAgIGxlZnRQYW5lbC5hcHBlbmQobmF2U2VhcmNoQmFyLCBuYXZIZWFkaW5nLCBwcm9qZWN0TGlzdCwgY3JlYXRlTmV3UHJvamVjdCwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICByZXR1cm4gbGVmdFBhbmVsXG59XG5cbmNvbnN0IGNyZWF0ZVJpZ2h0UGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpblBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpblBhbmVsLmNsYXNzTGlzdC5hZGQoJ21haW5QYW5lbCcpO1xuXG4gICAgY29uc3QgbWFpblBhbmVsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbWFpbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgICBtYWluSGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3ROYW1lJylcbiAgICBtYWluUGFuZWxIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NwYWNlQmV0d2VlbicpO1xuXG4gICAgY29uc3QgbWFpblRhc2tSZW1haW5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1haW5UYXNrUmVtYWluaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3NSZW1haW5pbmcnKVxuICAgIG1haW5UYXNrUmVtYWluaW5nLnRleHRDb250ZW50ID0gJ3gveSB0YXNrcyBjb21wbGV0ZWQnXG5cbiAgICBjb25zdCBtYWluVGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluVGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnbWFpblRhc2tMaXN0Jyk7XG4gICAgbWFpblRhc2tMaXN0LnRleHRDb250ZW50ID0gJ0xpc3Qgb2YgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHNlbGVjdGVkIHByb2plY3QnO1xuXG4gICAgY29uc3QgbWFpbkFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQWRkVGFzay5jbGFzc0xpc3QuYWRkKCdzcGFjZUJldHdlZW4nKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIHRhc2snXG4gICAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdXR0b24nKVxuXG4gICAgY29uc3QgcmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVtb3ZlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdSZW1vdmUgdGFzaydcbiAgICByZW1vdmVUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVtb3ZlVGFza0J1dHRvbicpXG5cbiAgICBtYWluQWRkVGFzay5hcHBlbmQoYWRkVGFza0J1dHRvbiwgcmVtb3ZlVGFza0J1dHRvbilcblxuICAgIG1haW5QYW5lbEhlYWRpbmcuYXBwZW5kKG1haW5IZWFkaW5nLCBtYWluVGFza1JlbWFpbmluZyk7XG5cbiAgICBtYWluUGFuZWwuYXBwZW5kKG1haW5QYW5lbEhlYWRpbmcsIG1haW5UYXNrTGlzdCwgbWFpbkFkZFRhc2spO1xuICAgIFxuICAgIHJldHVybiBtYWluUGFuZWxcbn1cblxuY29uc3QgY3JlYXRlTW9kYWxXaW5kb3cgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsUGFyZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsUGFyZW50JylcbiAgICBtb2RhbFBhcmVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbFdpbmRvdycpXG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbENvbnRlbnQnKVxuXG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudClcbiAgICBcbiAgICBtb2RhbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbFBhcmVudCkge2hpZGVNb2RhbCgpfVxuICAgIH0pXG5cbiAgICBcbiAgICBcbiAgICBtb2RhbFBhcmVudC5hcHBlbmQobW9kYWwpXG5cbiAgICByZXR1cm4gbW9kYWxQYXJlbnRcbn1cblxuLy8gdGhlc2UgbW9kYWwgdmFyaWF0aW9ucyBzaG91bGQgaGF2ZSBjb250ZW50ICYgc3RydWN0dXJlIGluc2lkZSB0aGUgZnVuY3Rpb25zXG4vLyB0aGVuIHRoc2UgZnVuY3Rpb25zIGFyZSBwYXNzZWQgaW50byBzaG93TW9kYWwgYXMgc3dpdGNoIHN0YXRlbWVudCBiYXNlZCBvbiBwYXJhbWV0ZXJcbi8vIHRoYXQgaXMgcGFzc2VkIGZyb20gYnV0dG9uIGNsaWNrIChpbiB0aGUgb3RoZXIgbW9kdWxlcylcbi8vIHRoaXMgd2lsbCBhbGxvdyB0aGUgcmVsZXZhbnQgc3R1ZmYgdG8gdGhlIGFwcGxpZWQgdG8gdGhlIG1vZGFsIHdpbmRvdyB3aGVuIGEgYnV0dG9uIGlzIHByZXNzZWRcblxuY29uc3QgYWRkVGFza0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRlbnQnKVxuXG4gICAgY29udGVudEJveC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdBZGQgdGFzayhzKSc7XG5cbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgY29uc3QgdGFza0lucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tJbnB1dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgdGFza0lucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBuYW1lJ1xuXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrRHVlRGF0ZScpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3VGFza0lucHV0Jyk7XG4gICAgdGFza0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIGR1ZSc7XG5cbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tEZXNjcmlwdGlvbicpXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ld1Rhc2tEZXNjcmlwdGlvbicpXG4gICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXMnXG5cbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXR0b25zQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J1dHRvbnNDb250YWluZXInKVxuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnanVzdGlmeUNvbnRlbnRFbmQnKVxuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlTW9kYWwnKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSdcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGhpZGVNb2RhbCgpXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIHRhc2snXG5cbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzdWJtaXROZXdUYXNrKHRhc2tJbnB1dC52YWx1ZSwgdGFza0R1ZURhdGUudmFsdWUsIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSlcbiAgICB9KVxuICAgIFxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHN1Ym1pdEJ1dHRvbiwgY2xvc2VCdXR0b24pXG5cbiAgICBjb250ZW50Qm94LmFwcGVuZChoZWFkaW5nLCB0YXNrSW5wdXRMYWJlbCwgXG4gICAgICAgIHRhc2tJbnB1dCwgdGFza0R1ZURhdGVMYWJlbCwgXG4gICAgICAgIHRhc2tEdWVEYXRlLCB0YXNrRGVzY3JpcHRpb25MYWJlbCwgXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbiwgYnV0dG9uc0NvbnRhaW5lcilcblxuICAgIHJldHVybiBjb250ZW50Qm94XG59XG5cbmNvbnN0IHN1Ym1pdE5ld1Rhc2sgPSAodGFzaywgZHVlZGF0ZSwgbm90ZXMpID0+IHtcbiAgICBnZXRQcm9qZWN0KCkucHJvamVjdFRhc2tzLnB1c2goW3Rhc2ssIGR1ZWRhdGUsIG5vdGVzXSlcbiAgICBoaWRlTW9kYWwoKTtcbiAgICB1cGRhdGVNYWluUGFuZShnZXRQcm9qZWN0KCkpO1xufVxuXG5jb25zdCByZW1vdmVQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG5cbn1cblxuY29uc3QgcmVtb3ZlVGFza01vZGFsID0gKCkgPT4ge1xuXG59XG5cbmNvbnN0IHNob3dNb2RhbCA9IChjb250ZW50KSA9PiB7XG5cbiAgICBjb25zdCBtb2RhbFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbFBhcmVudCcpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxXaW5kb3cnKVxuXG4gICAgbW9kYWxQYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpXG5cbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICB9XG4gICAgfSwge29uY2U6IHRydWV9KVxuXG4gICAgc3dpdGNoIChjb250ZW50KSB7XG4gICAgICAgIGNhc2UgJ2FkZFRhc2snOlxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kKGFkZFRhc2tDb250ZW50KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIFxuICAgICAgICBcbn1cblxuY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsUGFyZW50JylcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcblxufVxuXG5jb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5GcmFtZSA9IGNyZWF0ZU1haW5GcmFtZSgpICAgIFxuXG4gICAgY29uc3QgbGVmdFBhbmVsID0gY3JlYXRlTGVmdFBhbmVsKClcblxuICAgIGNvbnN0IHJpZ2h0UGFuZWwgPSBjcmVhdGVSaWdodFBhbmVsKClcblxuICAgIGNvbnN0IG1vZGFsV2luZG93ID0gY3JlYXRlTW9kYWxXaW5kb3coKVxuXG4gICAgbWFpbkZyYW1lLmFwcGVuZChsZWZ0UGFuZWwsIHJpZ2h0UGFuZWwsIG1vZGFsV2luZG93KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW5GcmFtZSk7XG5cbiAgICByZXR1cm4ge21haW5GcmFtZX1cbn1cblxuZXhwb3J0IHtyZW5kZXJQYWdlLCBzaG93TW9kYWx9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcbmltcG9ydCB7IGxlZnRQYW5lbEFjdGlvbnMgfSBmcm9tIFwiLi9sZWZ0UGFuZWxBY3Rpb25zXCI7XG5pbXBvcnQgeyBtYWluUGFuZUFjdGlvbnMsIHVwZGF0ZU1haW5QYW5lIH0gZnJvbSBcIi4vbWFpblBhbmVsQWN0aW9uc1wiO1xuXG5yZW5kZXJQYWdlKClcblxubGVmdFBhbmVsQWN0aW9ucygpO1xubWFpblBhbmVBY3Rpb25zKCk7XG5cbnVwZGF0ZU1haW5QYW5lKCdkZWZhdWx0JylcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=