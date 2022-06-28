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
    deleteProjectButton.addEventListener('click', function () {
        (0,_renderPage__WEBPACK_IMPORTED_MODULE_2__.showModal)('removeProject')
    })
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
        const mainPaneSubTasks = document.createElement('div');
        const mainPaneComplete = document.createElement('h3');
        mainPaneComplete.setAttribute('id', 'completionStatus')
        const mainPaneDueDate = document.createElement('p');

        projectNameHeading.textContent = content.projectName;

        mainPaneTitle.textContent = content.projectName + ' - Subtasks';
        
        mainPaneComplete.textContent = isTaskComplete;
        mainPaneDueDate.textContent = content.dueDate;

        if (content.projectTasks) {
            content.projectTasks.forEach(task => {
                const stepContainer = document.createElement('div')
                
                const stepHeadContainer = document.createElement('div');
                stepHeadContainer.classList.add('spaceBetween')
                
                const stepTitle = document.createElement('h3');
                stepTitle.textContent = task[0];
                
                const stepDueDate = document.createElement('p');
                stepDueDate.textContent = task[1];
                stepHeadContainer.append(stepTitle, stepDueDate)

                const stepNotes = document.createElement('p');
                stepNotes.textContent = task[2];

                stepContainer.append(stepHeadContainer, stepNotes)

                stepContainer.setAttribute('data-index', `${content.projectTasks.indexOf(task, 0)}`)

                stepContainer.addEventListener('click', function (e) {
                    completeSubTask(project, e)
                })

                mainPaneSubTasks.append(stepContainer)
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
    removeTaskButton.addEventListener('click', function () {
        ;(0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.showModal)('removeTask')
    });
    
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
        ['Step 1', '29-06-2022', 'Notes about step 1'],
        ['Step 2', '29-06-2022', 'Notes about step 1'],
        ['Step 3', '29-06-2022', 'Notes about step 1'],
    ],
    1,
    '',
))
projects.push(project('Project 2', [['Task 1', '29-06-2022', 'Notes about step 1'], ['Task 2', '29-06-2022', 'Notes about step 1'], ['Task 3', '29-06-2022', 'Notes about step 1']], 0, ''))
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

const removeProjectContent = () => {
    const contentBox = document.getElementById('modalContent')

    contentBox.innerHTML = ''

    const heading = document.createElement('h3');
    heading.textContent = 'Remove project(s)';

    contentBox.append(heading)

    return contentBox
}

const removeTask = (taskTitle) => {
    getProject().projectTasks = getProject().projectTasks.filter(project => project[0] != taskTitle.textContent)
    ;(0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_0__.updateMainPane)(getProject())
    showModal('removeTask')    
}

const removeTaskContent= () => {
    const contentBox = document.getElementById('modalContent')

    contentBox.innerHTML = ''

    const heading = document.createElement('h3');
    heading.textContent = 'Remove task(s)';

    const taskContainer = document.createElement('div');
    const taskList = document.createElement('ul')
     getProject().projectTasks.forEach(project => {
        const taskTitle = document.createElement('li')
        taskTitle.textContent = project[0]

        taskTitle.setAttribute('data-index', getProject().projectTasks.indexOf(project, 0))
        taskList.append(taskTitle)

        

        taskTitle.addEventListener('click', function (e) {removeTask(taskTitle)})
     });

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('id', 'addTaskButtonsContainer')
    buttonsContainer.classList.add('justifyContentEnd')

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeModal');
    closeButton.textContent = 'Close'
    closeButton.addEventListener('click', function (e) {
        hideModal()
    })

    buttonsContainer.append(closeButton)

    taskContainer.append(taskList, buttonsContainer)

    contentBox.append(heading, taskContainer)

    

    return contentBox
}

const showModal = (content) => {

    const modalParent = document.querySelector('.modalParent')
    const modal = document.querySelector('.modalWindow')

    modalParent.classList.remove('hide')

    
    document.addEventListener('keydown', function (e) {
        if (e.key == 'Escape') {
            hideModal()
        }
    }, {once: true})

    switch (content) {
        case 'addTask':
            modal.append(addTaskContent());
            break;
        
        case 'removeTask':
            modal.append(removeTaskContent());
            break;

        case 'removeProject':
            modal.append(removeProjectContent());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVM7QUFDakIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVM7QUFDakIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDb0Q7QUFDZDs7QUFFdEM7QUFDQTtBQUNBLG9CQUFvQixzREFBZTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWM7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksa0VBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDBEQUEwRCxzQkFBc0I7QUFDaEYsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUcsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7O1VDMVNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDWTtBQUNlOztBQUVyRSx1REFBVTs7QUFFVixvRUFBZ0I7QUFDaEIsa0VBQWU7O0FBRWYsaUVBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL2xlZnRQYW5lbEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL21haW5QYW5lbEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLW9kaW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1vZGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLW9kaW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4ubmF2UGFuZWwsXFxuLm1haW5QYW5lbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3BhY2VCZXR3ZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWxpZ25TZWxmRW5kIHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4uanVzdGlmeUNvbnRlbnRFbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5tb2RhbFBhcmVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbFdpbmRvdyB7XFxuICAgIG1pbi13aWR0aDogMTVlbTtcXG4gICAgbWluLWhlaWdodDogNWVtO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgICBjdXJzb3I6IGF1dG87XFxufVxcblxcbiNtb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG59XFxuXFxuI21vZGFsQ29udGVudCA+IGlucHV0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jbW9kYWxDb250ZW50ID4gdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbiNtb2RhbENvbnRlbnQgPiBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IC4yNWVtO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbnNDb250YWluZXIgPiBidXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogLjI1ZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxufVxcblxcbi5uYXZQYW5lbCxcXG4ubWFpblBhbmVsIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zcGFjZUJldHdlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hbGlnblNlbGZFbmQge1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5qdXN0aWZ5Q29udGVudEVuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm1vZGFsUGFyZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsV2luZG93IHtcXG4gICAgbWluLXdpZHRoOiAxNWVtO1xcbiAgICBtaW4taGVpZ2h0OiA1ZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIGN1cnNvcjogYXV0bztcXG59XFxuXFxuI21vZGFsQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbn1cXG5cXG4jbW9kYWxDb250ZW50ID4gaW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbiNtb2RhbENvbnRlbnQgPiB0ZXh0YXJlYSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuI21vZGFsQ29udGVudCA+IGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAuMjVlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVNYWluUGFuZSB9IGZyb20gXCIuL21haW5QYW5lbEFjdGlvbnNcIjtcbmltcG9ydCB7IHNob3dNb2RhbCB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcblxuXG5jb25zdCBzZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlNlYXJjaEJhcicpXG5cbiAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHByb2plY3RzLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0LnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RMaXN0KHJlc3VsdClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGxpc3RPZlByb2plY3RzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZWFjaHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG5cbiAgICBcbiAgICBlYWNocHJvamVjdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZm9jdXNQcm9qZWN0ID0gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PSBlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZU1haW5QYW5lKGZvY3VzUHJvamVjdFswXSlcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIFxuXG4gICAgXG59XG5cbmNvbnN0IGFkZE5ld1Byb2plY3RGaWVsZCA9ICgpID0+IHtcbiAgICBjb25zdCBhZGROZXdGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0SW5wdXQnKVxuXG4gICAgYWRkTmV3RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdChgJHtlLnRhcmdldC52YWx1ZX1gLCBbXSwgMSwgJycsIDApKVxuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cylcbiAgICAgICAgXG4gICAgfSlcblxufVxuXG5jb25zdCBwb3B1bGF0ZVByb2plY3RMaXN0ID0gKHByb2plY3RMaXN0KSA9PiB7XG4gICAgY29uc3QgbGVmdFBhbmVsUHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKVxuXG4gICAgd2hpbGUgKGxlZnRQYW5lbFByb2plY3RMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbGVmdFBhbmVsUHJvamVjdExpc3QucmVtb3ZlQ2hpbGQobGVmdFBhbmVsUHJvamVjdExpc3QuZmlyc3RDaGlsZClcbiAgICB9XG5cbiAgICAvLyAgVE8gRE86IFxuICAgIC8vIHB1dCB0aGlzIGludG8gYSBwcm9qZWN0IGxpc3RpbmcgbW9kdWxlL2Z1bmN0aW9uL29iamVjdCBhcyBhIG1ldGhvZD8/XG4gICAgXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgcHJvamVjdFRvTGlzdC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QucHJvamVjdE5hbWV9YFxuICAgICAgICBwcm9qZWN0VG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBsZWZ0UGFuZWxQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0VG9MaXN0KVxuICAgIH0pO1xuXG4gICAgbGlzdE9mUHJvamVjdHMoKVxuXG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAgKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlUHJvamVjdEJ1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dNb2RhbCgncmVtb3ZlUHJvamVjdCcpXG4gICAgfSlcbn1cblxuY29uc3QgbGVmdFBhbmVsQWN0aW9ucyA9ICgpID0+IHtcblxuICAgIHNlYXJjaEJhcigpXG5cbiAgICBhZGROZXdQcm9qZWN0RmllbGQoKVxuICAgIFxuICAgIHBvcHVsYXRlUHJvamVjdExpc3QocHJvamVjdHMpXG5cbiAgICBkZWxldGVQcm9qZWN0KClcbiAgICBcbn1cblxuZXhwb3J0IHtsZWZ0UGFuZWxBY3Rpb25zLCBsaXN0T2ZQcm9qZWN0c30iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XG5cbmNvbnN0IHVwZGF0ZU1haW5QYW5lID0gKGNvbnRlbnQpID0+IHtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0TmFtZUhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKVxuICAgIGNvbnN0IHRhc2tzUmVtYWluaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzUmVtYWluaW5nJylcbiAgICBcbiAgICBjb25zdCBtYWluUGFuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluVGFza0xpc3QnKVxuXG4gICAgbWFpblBhbmUudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgaWYgKGNvbnRlbnQgPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIG1haW5QYW5lLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgdGhlIHBsYWNlaG9sZGVyIGNvbnRlbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09IGNvbnRlbnQucHJvamVjdE5hbWUpWzBdXG4gICAgICAgIGxldCBpc1Rhc2tDb21wbGV0ZSA9ICcnXG4gICAgICAgIGlmIChwcm9qZWN0LmdldENvbXBsZXRlZCgpID09IDEpIHtcbiAgICAgICAgICAgIGlzVGFza0NvbXBsZXRlID0gJ1Rhc2sgQ29tcGxldGUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1Rhc2tDb21wbGV0ZSA9ICdJbmNvbXBsZXRlJ1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vT2ZUYXNrcyA9IHByb2plY3QucHJvamVjdFRhc2tzLmxlbmd0aFxuICAgICAgICBsZXQgdGFza3NDb21wbGV0ZWQgPSBwcm9qZWN0LnRhc2tzQ29tcGxldGVkLmxlbmd0aFxuICAgICAgICB0YXNrc1JlbWFpbmluZy50ZXh0Q29udGVudCA9IGAke3Rhc2tzQ29tcGxldGVkfSBvZiAke25vT2ZUYXNrc30gdGFza3MgY29tcGxldGVkYDtcblxuXG4gICAgICAgIGNvbnN0IG1haW5QYW5lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBtYWluUGFuZVN1YlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1haW5QYW5lQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBtYWluUGFuZUNvbXBsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcGxldGlvblN0YXR1cycpXG4gICAgICAgIGNvbnN0IG1haW5QYW5lRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBwcm9qZWN0TmFtZUhlYWRpbmcudGV4dENvbnRlbnQgPSBjb250ZW50LnByb2plY3ROYW1lO1xuXG4gICAgICAgIG1haW5QYW5lVGl0bGUudGV4dENvbnRlbnQgPSBjb250ZW50LnByb2plY3ROYW1lICsgJyAtIFN1YnRhc2tzJztcbiAgICAgICAgXG4gICAgICAgIG1haW5QYW5lQ29tcGxldGUudGV4dENvbnRlbnQgPSBpc1Rhc2tDb21wbGV0ZTtcbiAgICAgICAgbWFpblBhbmVEdWVEYXRlLnRleHRDb250ZW50ID0gY29udGVudC5kdWVEYXRlO1xuXG4gICAgICAgIGlmIChjb250ZW50LnByb2plY3RUYXNrcykge1xuICAgICAgICAgICAgY29udGVudC5wcm9qZWN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwSGVhZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHN0ZXBIZWFkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NwYWNlQmV0d2VlbicpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgICAgICBzdGVwVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrWzBdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHN0ZXBEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza1sxXTtcbiAgICAgICAgICAgICAgICBzdGVwSGVhZENvbnRhaW5lci5hcHBlbmQoc3RlcFRpdGxlLCBzdGVwRHVlRGF0ZSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBzdGVwTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrWzJdO1xuXG4gICAgICAgICAgICAgICAgc3RlcENvbnRhaW5lci5hcHBlbmQoc3RlcEhlYWRDb250YWluZXIsIHN0ZXBOb3RlcylcblxuICAgICAgICAgICAgICAgIHN0ZXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgYCR7Y29udGVudC5wcm9qZWN0VGFza3MuaW5kZXhPZih0YXNrLCAwKX1gKVxuXG4gICAgICAgICAgICAgICAgc3RlcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlU3ViVGFzayhwcm9qZWN0LCBlKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBtYWluUGFuZVN1YlRhc2tzLmFwcGVuZChzdGVwQ29udGFpbmVyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluUGFuZS5hcHBlbmQobWFpblBhbmVUaXRsZSwgbWFpblBhbmVEdWVEYXRlLCBtYWluUGFuZVN1YlRhc2tzLCBtYWluUGFuZUNvbXBsZXRlKVxuXG4gICAgICAgIHVwZGF0ZUNvbXBsZXRpb25TdGF0dXMocHJvamVjdClcbiAgICB9XG5cbiAgICBcbn1cblxuY29uc3QgY29tcGxldGVTdWJUYXNrID0gKHByb2plY3QsIGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnByb2plY3RUYXNrc1tlLnRhcmdldC5kYXRhc2V0LmluZGV4XSlcbiAgICAvLyBzZWFyY2ggdGhlIHRhc2tzQ29tcGxldGVkIGFycmF5IGZvciB0aGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBpcyBjbGlja2VkXG4gICAgLy8gaWYgaXQgaXMgbm90IGluIHRoZSBhcnJheSwgYWRkIGl0LiBpZiBpdCBpcyBpbiB0aGUgYXJyYXksIHJlbW92ZSBpdC5cbiAgICBpZiAocHJvamVjdC50YXNrc0NvbXBsZXRlZC5pbmRleE9mKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpID09IC0xKSB7XG4gICAgICAgIHByb2plY3QudGFza3NDb21wbGV0ZWQucHVzaChlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3QudGFza3NDb21wbGV0ZWQgPSBwcm9qZWN0LnRhc2tzQ29tcGxldGVkLmZpbHRlcih0YXNrcyA9PiB0YXNrcyAhPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgIH1cbiAgICB1cGRhdGVNYWluUGFuZShwcm9qZWN0KVxufVxuXG5jb25zdCB1cGRhdGVDb21wbGV0aW9uU3RhdHVzID0gKHByb2plY3QpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRpb25TdGF0dXMnKSkge1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGlvblN0YXR1cycpXG5cbiAgICAgICAgY29tcGxldGlvblN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnRvZ2dsZUNvbXBsZXRlZCgpXG5cbiAgICAgICAgICAgIHVwZGF0ZU1haW5QYW5lKHByb2plY3QpXG4gICAgfSlcbn1cbn1cblxuXG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJylcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93TW9kYWwoJ2FkZFRhc2snKVxuICAgIH0pXG59XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVUYXNrQnV0dG9uJylcbiAgICByZW1vdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93TW9kYWwoJ3JlbW92ZVRhc2snKVxuICAgIH0pO1xuICAgIFxufVxuXG5jb25zdCBtYWluUGFuZUFjdGlvbnMgPSAoKSA9PiB7XG4gICAgXG4gICAgYWRkVGFzaygpXG4gICAgcmVtb3ZlVGFzaygpXG59XG5cblxuXG5leHBvcnQgeyB1cGRhdGVDb21wbGV0aW9uU3RhdHVzLCB1cGRhdGVNYWluUGFuZSwgbWFpblBhbmVBY3Rpb25zIH0iLCJjb25zdCBwcm9qZWN0cyA9IFtdXG5cbmNvbnN0IHByb2plY3QgPSAocHJvamVjdE5hbWUsIHByb2plY3RUYXNrcywgcHJvamVjdFByaW9yaXR5LCBkdWVEYXRlKSA9PiB7XG4gICAgXG4gICAgbGV0IGlzQ29tcGxldGVkID0gMDtcblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICAgICAgaXNDb21wbGV0ZWQgPSAhaXNDb21wbGV0ZWQ7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGdldENvbXBsZXRlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGlzQ29tcGxldGVkID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGFza3NDb21wbGV0ZWQgPSBbXVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHByb2plY3RUYXNrcyxcbiAgICAgICAgdGFza3NDb21wbGV0ZWQsXG4gICAgICAgIHByb2plY3RQcmlvcml0eSxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgdGFza3NDb21wbGV0ZWQsXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlZCxcbiAgICAgICAgZ2V0Q29tcGxldGVkLFxuICAgIH1cbn1cblxucHJvamVjdHMucHVzaChwcm9qZWN0KFxuICAgICdEZWZhdWx0IFByYXdiZWN0JyxcbiAgICBbXG4gICAgICAgIFsnU3RlcCAxJywgJzI5LTA2LTIwMjInLCAnTm90ZXMgYWJvdXQgc3RlcCAxJ10sXG4gICAgICAgIFsnU3RlcCAyJywgJzI5LTA2LTIwMjInLCAnTm90ZXMgYWJvdXQgc3RlcCAxJ10sXG4gICAgICAgIFsnU3RlcCAzJywgJzI5LTA2LTIwMjInLCAnTm90ZXMgYWJvdXQgc3RlcCAxJ10sXG4gICAgXSxcbiAgICAxLFxuICAgICcnLFxuKSlcbnByb2plY3RzLnB1c2gocHJvamVjdCgnUHJvamVjdCAyJywgW1snVGFzayAxJywgJzI5LTA2LTIwMjInLCAnTm90ZXMgYWJvdXQgc3RlcCAxJ10sIFsnVGFzayAyJywgJzI5LTA2LTIwMjInLCAnTm90ZXMgYWJvdXQgc3RlcCAxJ10sIFsnVGFzayAzJywgJzI5LTA2LTIwMjInLCAnTm90ZXMgYWJvdXQgc3RlcCAxJ11dLCAwLCAnJykpXG5wcm9qZWN0c1sxXS50b2dnbGVDb21wbGV0ZWQoKVxuXG5leHBvcnQge3Byb2plY3RzLCBwcm9qZWN0fSIsImltcG9ydCB7IHVwZGF0ZU1haW5QYW5lIH0gZnJvbSBcIi4vbWFpblBhbmVsQWN0aW9uc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QucHJvamVjdE5hbWUgPT0gcHJvamVjdE5hbWUudGV4dENvbnRlbnQpXG4gICAgcmV0dXJuIHByb2plY3RbMF1cbn1cblxuY29uc3QgY3JlYXRlTWFpbkZyYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5GcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5GcmFtZS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICByZXR1cm4gbWFpbkZyYW1lXG59XG5cbmNvbnN0IGNyZWF0ZUxlZnRQYW5lbCA9ICgpID0+IHtcbiAgICBjb25zdCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0UGFuZWwuY2xhc3NMaXN0LmFkZCgnbmF2UGFuZWwnKTtcblxuICAgIGNvbnN0IG5hdlNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmF2U2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2U2VhcmNoQmFyJylcbiAgICBuYXZTZWFyY2hCYXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYXZTZWFyY2hCYXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2ggZm9yIGEgcHJvamVjdCcpO1xuXG4gICAgY29uc3QgbmF2SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbmF2SGVhZGluZy50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cyc7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TGlzdCcpXG4gICAgY29uc3QgZGVtb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRlbW9Qcm9qZWN0LnRleHRDb250ZW50ID0gJ0RlbW8gUHJvamVjdCc7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGRlbW9Qcm9qZWN0KTtcblxuICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdElucHV0Jyk7XG4gICAgY3JlYXRlTmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0NyZWF0ZSBhIG5ldyBwcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZVByb2plY3RCdXR0b24nKVxuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHNlbGVjdGVkIHByb2plY3QnO1xuXG4gICAgbGVmdFBhbmVsLmFwcGVuZChuYXZTZWFyY2hCYXIsIG5hdkhlYWRpbmcsIHByb2plY3RMaXN0LCBjcmVhdGVOZXdQcm9qZWN0LCBkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgIHJldHVybiBsZWZ0UGFuZWxcbn1cblxuY29uc3QgY3JlYXRlUmlnaHRQYW5lbCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluUGFuZWwuY2xhc3NMaXN0LmFkZCgnbWFpblBhbmVsJyk7XG5cbiAgICBjb25zdCBtYWluUGFuZWxIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIG1haW5IZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdE5hbWUnKVxuICAgIG1haW5QYW5lbEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc3BhY2VCZXR3ZWVuJyk7XG5cbiAgICBjb25zdCBtYWluVGFza1JlbWFpbmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWFpblRhc2tSZW1haW5pbmcuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrc1JlbWFpbmluZycpXG4gICAgbWFpblRhc2tSZW1haW5pbmcudGV4dENvbnRlbnQgPSAneC95IHRhc2tzIGNvbXBsZXRlZCdcblxuICAgIGNvbnN0IG1haW5UYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5UYXNrTGlzdC5jbGFzc0xpc3QuYWRkKCdtYWluVGFza0xpc3QnKTtcbiAgICBtYWluVGFza0xpc3QudGV4dENvbnRlbnQgPSAnTGlzdCBvZiB0YXNrcyBhc3NvY2lhdGVkIHdpdGggc2VsZWN0ZWQgcHJvamVjdCc7XG5cbiAgICBjb25zdCBtYWluQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5BZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ3NwYWNlQmV0d2VlbicpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdGFzaydcbiAgICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J1dHRvbicpXG5cbiAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICByZW1vdmVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1JlbW92ZSB0YXNrJ1xuICAgIHJlbW92ZVRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZW1vdmVUYXNrQnV0dG9uJylcblxuICAgIG1haW5BZGRUYXNrLmFwcGVuZChhZGRUYXNrQnV0dG9uLCByZW1vdmVUYXNrQnV0dG9uKVxuXG4gICAgbWFpblBhbmVsSGVhZGluZy5hcHBlbmQobWFpbkhlYWRpbmcsIG1haW5UYXNrUmVtYWluaW5nKTtcblxuICAgIG1haW5QYW5lbC5hcHBlbmQobWFpblBhbmVsSGVhZGluZywgbWFpblRhc2tMaXN0LCBtYWluQWRkVGFzayk7XG4gICAgXG4gICAgcmV0dXJuIG1haW5QYW5lbFxufVxuXG5jb25zdCBjcmVhdGVNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbW9kYWxQYXJlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxQYXJlbnQnKVxuICAgIG1vZGFsUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsV2luZG93JylcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsQ29udGVudCcpXG5cbiAgICBtb2RhbC5hcHBlbmQobW9kYWxDb250ZW50KVxuICAgIFxuICAgIG1vZGFsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsUGFyZW50KSB7aGlkZU1vZGFsKCl9XG4gICAgfSlcblxuICAgIFxuICAgIFxuICAgIG1vZGFsUGFyZW50LmFwcGVuZChtb2RhbClcblxuICAgIHJldHVybiBtb2RhbFBhcmVudFxufVxuXG4vLyB0aGVzZSBtb2RhbCB2YXJpYXRpb25zIHNob3VsZCBoYXZlIGNvbnRlbnQgJiBzdHJ1Y3R1cmUgaW5zaWRlIHRoZSBmdW5jdGlvbnNcbi8vIHRoZW4gdGhzZSBmdW5jdGlvbnMgYXJlIHBhc3NlZCBpbnRvIHNob3dNb2RhbCBhcyBzd2l0Y2ggc3RhdGVtZW50IGJhc2VkIG9uIHBhcmFtZXRlclxuLy8gdGhhdCBpcyBwYXNzZWQgZnJvbSBidXR0b24gY2xpY2sgKGluIHRoZSBvdGhlciBtb2R1bGVzKVxuLy8gdGhpcyB3aWxsIGFsbG93IHRoZSByZWxldmFudCBzdHVmZiB0byB0aGUgYXBwbGllZCB0byB0aGUgbW9kYWwgd2luZG93IHdoZW4gYSBidXR0b24gaXMgcHJlc3NlZFxuXG5jb25zdCBhZGRUYXNrQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGVudCcpXG5cbiAgICBjb250ZW50Qm94LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0FkZCB0YXNrKHMpJztcblxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0lucHV0JylcbiAgICBjb25zdCB0YXNrSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0lucHV0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3VGFza0lucHV0JylcbiAgICB0YXNrSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIG5hbWUnXG5cbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tEdWVEYXRlJyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXdUYXNrSW5wdXQnKTtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgZHVlJztcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3VGFza0Rlc2NyaXB0aW9uJylcbiAgICB0YXNrRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdOb3RlcydcblxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ1dHRvbnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnV0dG9uc0NvbnRhaW5lcicpXG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5Q29udGVudEVuZCcpXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaGlkZU1vZGFsKClcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdGFzaydcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHN1Ym1pdE5ld1Rhc2sodGFza0lucHV0LnZhbHVlLCB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza0Rlc2NyaXB0aW9uLnZhbHVlKVxuICAgIH0pXG4gICAgXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbilcblxuICAgIGNvbnRlbnRCb3guYXBwZW5kKGhlYWRpbmcsIHRhc2tJbnB1dExhYmVsLCBcbiAgICAgICAgdGFza0lucHV0LCB0YXNrRHVlRGF0ZUxhYmVsLCBcbiAgICAgICAgdGFza0R1ZURhdGUsIHRhc2tEZXNjcmlwdGlvbkxhYmVsLCBcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLCBidXR0b25zQ29udGFpbmVyKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRCb3hcbn1cblxuY29uc3Qgc3VibWl0TmV3VGFzayA9ICh0YXNrLCBkdWVkYXRlLCBub3RlcykgPT4ge1xuICAgIGdldFByb2plY3QoKS5wcm9qZWN0VGFza3MucHVzaChbdGFzaywgZHVlZGF0ZSwgbm90ZXNdKVxuICAgIGhpZGVNb2RhbCgpO1xuICAgIHVwZGF0ZU1haW5QYW5lKGdldFByb2plY3QoKSk7XG59XG5cbmNvbnN0IHJlbW92ZVByb2plY3RDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250ZW50JylcblxuICAgIGNvbnRlbnRCb3guaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnUmVtb3ZlIHByb2plY3QocyknO1xuXG4gICAgY29udGVudEJveC5hcHBlbmQoaGVhZGluZylcblxuICAgIHJldHVybiBjb250ZW50Qm94XG59XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgZ2V0UHJvamVjdCgpLnByb2plY3RUYXNrcyA9IGdldFByb2plY3QoKS5wcm9qZWN0VGFza3MuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdFswXSAhPSB0YXNrVGl0bGUudGV4dENvbnRlbnQpXG4gICAgdXBkYXRlTWFpblBhbmUoZ2V0UHJvamVjdCgpKVxuICAgIHNob3dNb2RhbCgncmVtb3ZlVGFzaycpICAgIFxufVxuXG5jb25zdCByZW1vdmVUYXNrQ29udGVudD0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250ZW50JylcblxuICAgIGNvbnRlbnRCb3guaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnUmVtb3ZlIHRhc2socyknO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICBnZXRQcm9qZWN0KCkucHJvamVjdFRhc2tzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFswXVxuXG4gICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBnZXRQcm9qZWN0KCkucHJvamVjdFRhc2tzLmluZGV4T2YocHJvamVjdCwgMCkpXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrVGl0bGUpXG5cbiAgICAgICAgXG5cbiAgICAgICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtyZW1vdmVUYXNrKHRhc2tUaXRsZSl9KVxuICAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ1dHRvbnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnV0dG9uc0NvbnRhaW5lcicpXG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5Q29udGVudEVuZCcpXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaGlkZU1vZGFsKClcbiAgICB9KVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoY2xvc2VCdXR0b24pXG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrTGlzdCwgYnV0dG9uc0NvbnRhaW5lcilcblxuICAgIGNvbnRlbnRCb3guYXBwZW5kKGhlYWRpbmcsIHRhc2tDb250YWluZXIpXG5cbiAgICBcblxuICAgIHJldHVybiBjb250ZW50Qm94XG59XG5cbmNvbnN0IHNob3dNb2RhbCA9IChjb250ZW50KSA9PiB7XG5cbiAgICBjb25zdCBtb2RhbFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbFBhcmVudCcpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxXaW5kb3cnKVxuXG4gICAgbW9kYWxQYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG5cbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICB9XG4gICAgfSwge29uY2U6IHRydWV9KVxuXG4gICAgc3dpdGNoIChjb250ZW50KSB7XG4gICAgICAgIGNhc2UgJ2FkZFRhc2snOlxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kKGFkZFRhc2tDb250ZW50KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlICdyZW1vdmVUYXNrJzpcbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZChyZW1vdmVUYXNrQ29udGVudCgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlbW92ZVByb2plY3QnOlxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kKHJlbW92ZVByb2plY3RDb250ZW50KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIFxuICAgICAgICBcbn1cblxuY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsUGFyZW50JylcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcblxufVxuXG5jb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5GcmFtZSA9IGNyZWF0ZU1haW5GcmFtZSgpICAgIFxuXG4gICAgY29uc3QgbGVmdFBhbmVsID0gY3JlYXRlTGVmdFBhbmVsKClcblxuICAgIGNvbnN0IHJpZ2h0UGFuZWwgPSBjcmVhdGVSaWdodFBhbmVsKClcblxuICAgIGNvbnN0IG1vZGFsV2luZG93ID0gY3JlYXRlTW9kYWxXaW5kb3coKVxuXG4gICAgbWFpbkZyYW1lLmFwcGVuZChsZWZ0UGFuZWwsIHJpZ2h0UGFuZWwsIG1vZGFsV2luZG93KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW5GcmFtZSk7XG5cbiAgICByZXR1cm4ge21haW5GcmFtZX1cbn1cblxuZXhwb3J0IHtyZW5kZXJQYWdlLCBzaG93TW9kYWx9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcbmltcG9ydCB7IGxlZnRQYW5lbEFjdGlvbnMgfSBmcm9tIFwiLi9sZWZ0UGFuZWxBY3Rpb25zXCI7XG5pbXBvcnQgeyBtYWluUGFuZUFjdGlvbnMsIHVwZGF0ZU1haW5QYW5lIH0gZnJvbSBcIi4vbWFpblBhbmVsQWN0aW9uc1wiO1xuXG5yZW5kZXJQYWdlKClcblxubGVmdFBhbmVsQWN0aW9ucygpO1xubWFpblBhbmVBY3Rpb25zKCk7XG5cbnVwZGF0ZU1haW5QYW5lKCdkZWZhdWx0JylcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=