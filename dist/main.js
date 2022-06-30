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
/* harmony export */   "listOfProjects": () => (/* binding */ listOfProjects),
/* harmony export */   "populateProjectList": () => (/* binding */ populateProjectList)
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
            _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.push((0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.project)(`${e.target.value}`, [['Step 1', new Date(), 'A few notes on how to complete this subtask']], 1, '', 0))
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



const projects = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList)().projectsArray


const updateMainPane = (content) => {
    
    const projectNameHeading = document.getElementById('projectName')
    const tasksRemaining = document.getElementById('tasksRemaining')
    
    const mainPane = document.querySelector('.mainTaskList')

    mainPane.textContent = ''

    if (content == 'default') {
        mainPane.textContent = 'This is the placeholder content';
    } else {
        const project = projects.filter(project => project.projectName == content.projectName)[0]
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
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const projects = []

const projectList = () => {
    let projectsArray = projects;

    const addProject = (project) => {
        projectsArray.push(project)
    }

    const removeProject = (projectName) => {
        if (projectsArray.filter(project => project.projectName == projectName)) {
            let newArray = []
            newArray = projectsArray.filter(project => project.projectName != projectName)
            console.log(projectsArray.filter(project => project.projectName != projectName))
        } else {
            console.log('no match')
        }
        
    }

    return {projectsArray, addProject, removeProject}
}

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
/* harmony import */ var _leftPanelActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leftPanelActions */ "./src/leftPanelActions.js");
/* harmony import */ var _mainPanelActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPanelActions */ "./src/mainPanelActions.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");






const getProject = () => {
    const projectName = document.getElementById('projectName');
    const project = _projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter(project => project.projectName == projectName.textContent)
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
    (0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_1__.updateMainPane)(getProject());
}

const removeProject = (projectTitle) => {
    _projects__WEBPACK_IMPORTED_MODULE_2__.projects.splice(projectTitle.dataset.index, 1)
    ;(0,_leftPanelActions__WEBPACK_IMPORTED_MODULE_0__.populateProjectList)(_projects__WEBPACK_IMPORTED_MODULE_2__.projects)
    hideModal()
    showModal('removeProject')
    if (_projects__WEBPACK_IMPORTED_MODULE_2__.projects[0]) {
        (0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_1__.updateMainPane)(_projects__WEBPACK_IMPORTED_MODULE_2__.projects[0])
    } else {(0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_1__.updateMainPane)('default')}
    
}

const removeProjectContent = () => {
    const contentBox = document.getElementById('modalContent')

    contentBox.innerHTML = ''

    const heading = document.createElement('h3');
    heading.textContent = 'Remove project(s)';

    const projectContainer = document.createElement('div');
    const projectList = document.createElement('ul')
    
    _projects__WEBPACK_IMPORTED_MODULE_2__.projects.forEach(project => {
        const projectName = document.createElement('li')
        projectName.textContent = project.projectName
        projectList.append(projectName)

        projectName.setAttribute('data-index', _projects__WEBPACK_IMPORTED_MODULE_2__.projects.indexOf(project, 0))

        projectName.addEventListener('click', function (e) {removeProject(projectName)})
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

    projectContainer.append(projectList, buttonsContainer)

    contentBox.append(heading, projectContainer)


    return contentBox
}

const removeTask = (taskTitle) => {
    getProject().projectTasks = getProject().projectTasks.filter(project => project[0] != taskTitle.textContent)
    ;(0,_mainPanelActions__WEBPACK_IMPORTED_MODULE_1__.updateMainPane)(getProject())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUztBQUNqQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRXlEO0FBQ0w7QUFDZjs7OztBQUlyQztBQUNBO0FBQ0Esb0JBQW9CLHNEQUFlO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBYztBQUNsQjs7QUFFQTtBQUNBLElBQUksc0RBQWU7QUFDbkIsSUFBSSx1RUFBbUIsQ0FBQywrQ0FBUTtBQUNoQztBQUNBO0FBQ0EsUUFBUSxrREFBVztBQUNuQixRQUFRLGlFQUFjLENBQUMsa0RBQVc7QUFDbEMsTUFBTSxNQUFNLGlFQUFjO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsdURBQWdCOztBQUUvRCw0REFBNEQsMkJBQTJCO0FBQ3ZGLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGtFQUFjO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwwREFBMEQsc0JBQXNCO0FBQ2hGLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7OztVQ3JWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCO0FBQ1k7QUFDZTs7QUFFckUsdURBQVU7O0FBRVYsb0VBQWdCO0FBQ2hCLGtFQUFlOztBQUVmLGlFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9sZWZ0UGFuZWxBY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9tYWluUGFuZWxBY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1vZGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1vZGluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG59XFxuXFxuLm5hdlBhbmVsLFxcbi5tYWluUGFuZWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNwYWNlQmV0d2VlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFsaWduU2VsZkVuZCB7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmp1c3RpZnlDb250ZW50RW5kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubW9kYWxQYXJlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWxXaW5kb3cge1xcbiAgICBtaW4td2lkdGg6IDE1ZW07XFxuICAgIG1pbi1oZWlnaHQ6IDVlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4jbW9kYWxDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxufVxcblxcbiNtb2RhbENvbnRlbnQgPiBpbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuI21vZGFsQ29udGVudCA+IHRleHRhcmVhIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jbW9kYWxDb250ZW50ID4gbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuMjVlbTtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b25zQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC4yNWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4ubmF2UGFuZWwsXFxuLm1haW5QYW5lbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3BhY2VCZXR3ZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWxpZ25TZWxmRW5kIHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4uanVzdGlmeUNvbnRlbnRFbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5tb2RhbFBhcmVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbFdpbmRvdyB7XFxuICAgIG1pbi13aWR0aDogMTVlbTtcXG4gICAgbWluLWhlaWdodDogNWVtO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgICBjdXJzb3I6IGF1dG87XFxufVxcblxcbiNtb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG59XFxuXFxuI21vZGFsQ29udGVudCA+IGlucHV0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jbW9kYWxDb250ZW50ID4gdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbiNtb2RhbENvbnRlbnQgPiBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IC4yNWVtO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbnNDb250YWluZXIgPiBidXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogLjI1ZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlTWFpblBhbmUgfSBmcm9tIFwiLi9tYWluUGFuZWxBY3Rpb25zXCI7XG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XG5cblxuY29uc3Qgc2VhcmNoQmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZTZWFyY2hCYXInKVxuXG4gICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwcm9qZWN0cy5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdC5wcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0TGlzdChyZXN1bHQpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBsaXN0T2ZQcm9qZWN0cyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGVhY2hwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuXG4gICAgXG4gICAgZWFjaHByb2plY3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzUHJvamVjdCA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QucHJvamVjdE5hbWUgPT0gZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVNYWluUGFuZShmb2N1c1Byb2plY3RbMF0pXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBcblxuICAgIFxufVxuXG5jb25zdCBhZGROZXdQcm9qZWN0RmllbGQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkTmV3RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdElucHV0JylcblxuICAgIGFkZE5ld0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QoYCR7ZS50YXJnZXQudmFsdWV9YCwgW1snU3RlcCAxJywgbmV3IERhdGUoKSwgJ0EgZmV3IG5vdGVzIG9uIGhvdyB0byBjb21wbGV0ZSB0aGlzIHN1YnRhc2snXV0sIDEsICcnLCAwKSlcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHBvcHVsYXRlUHJvamVjdExpc3QocHJvamVjdHMpXG4gICAgICAgIFxuICAgIH0pXG5cbn1cblxuY29uc3QgcG9wdWxhdGVQcm9qZWN0TGlzdCA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGNvbnN0IGxlZnRQYW5lbFByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0JylcblxuICAgIHdoaWxlIChsZWZ0UGFuZWxQcm9qZWN0TGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGxlZnRQYW5lbFByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGxlZnRQYW5lbFByb2plY3RMaXN0LmZpcnN0Q2hpbGQpXG4gICAgfVxuXG4gICAgLy8gIFRPIERPOiBcbiAgICAvLyBwdXQgdGhpcyBpbnRvIGEgcHJvamVjdCBsaXN0aW5nIG1vZHVsZS9mdW5jdGlvbi9vYmplY3QgYXMgYSBtZXRob2Q/P1xuICAgIFxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIHByb2plY3RUb0xpc3QudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnByb2plY3ROYW1lfWBcbiAgICAgICAgcHJvamVjdFRvTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICAgICAgbGVmdFBhbmVsUHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdFRvTGlzdClcbiAgICB9KTtcblxuICAgIGxpc3RPZlByb2plY3RzKClcblxufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVByb2plY3RCdXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93TW9kYWwoJ3JlbW92ZVByb2plY3QnKVxuICAgIH0pXG59XG5cbmNvbnN0IGxlZnRQYW5lbEFjdGlvbnMgPSAoKSA9PiB7XG5cbiAgICBzZWFyY2hCYXIoKVxuXG4gICAgYWRkTmV3UHJvamVjdEZpZWxkKClcbiAgICBcbiAgICBwb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzKVxuXG4gICAgZGVsZXRlUHJvamVjdCgpXG4gICAgXG59XG5cbmV4cG9ydCB7bGVmdFBhbmVsQWN0aW9ucywgbGlzdE9mUHJvamVjdHMsIHBvcHVsYXRlUHJvamVjdExpc3R9IiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgc2hvd01vZGFsIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IHByb2plY3RMaXN0KCkucHJvamVjdHNBcnJheVxuXG5cbmNvbnN0IHVwZGF0ZU1haW5QYW5lID0gKGNvbnRlbnQpID0+IHtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0TmFtZUhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKVxuICAgIGNvbnN0IHRhc2tzUmVtYWluaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzUmVtYWluaW5nJylcbiAgICBcbiAgICBjb25zdCBtYWluUGFuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluVGFza0xpc3QnKVxuXG4gICAgbWFpblBhbmUudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgaWYgKGNvbnRlbnQgPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIG1haW5QYW5lLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgdGhlIHBsYWNlaG9sZGVyIGNvbnRlbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09IGNvbnRlbnQucHJvamVjdE5hbWUpWzBdXG4gICAgICAgIGxldCBpc1Rhc2tDb21wbGV0ZSA9ICcnXG4gICAgICAgIGlmIChwcm9qZWN0LmdldENvbXBsZXRlZCgpID09IDEpIHtcbiAgICAgICAgICAgIGlzVGFza0NvbXBsZXRlID0gJ1Rhc2sgQ29tcGxldGUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1Rhc2tDb21wbGV0ZSA9ICdJbmNvbXBsZXRlJ1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vT2ZUYXNrcyA9IHByb2plY3QucHJvamVjdFRhc2tzLmxlbmd0aFxuICAgICAgICBsZXQgdGFza3NDb21wbGV0ZWQgPSBwcm9qZWN0LnRhc2tzQ29tcGxldGVkLmxlbmd0aFxuICAgICAgICB0YXNrc1JlbWFpbmluZy50ZXh0Q29udGVudCA9IGAke3Rhc2tzQ29tcGxldGVkfSBvZiAke25vT2ZUYXNrc30gdGFza3MgY29tcGxldGVkYDtcblxuXG4gICAgICAgIGNvbnN0IG1haW5QYW5lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBtYWluUGFuZVN1YlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1haW5QYW5lQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBtYWluUGFuZUNvbXBsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcGxldGlvblN0YXR1cycpXG4gICAgICAgIGNvbnN0IG1haW5QYW5lRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBwcm9qZWN0TmFtZUhlYWRpbmcudGV4dENvbnRlbnQgPSBjb250ZW50LnByb2plY3ROYW1lO1xuXG4gICAgICAgIG1haW5QYW5lVGl0bGUudGV4dENvbnRlbnQgPSBjb250ZW50LnByb2plY3ROYW1lICsgJyAtIFN1YnRhc2tzJztcbiAgICAgICAgXG4gICAgICAgIG1haW5QYW5lQ29tcGxldGUudGV4dENvbnRlbnQgPSBpc1Rhc2tDb21wbGV0ZTtcbiAgICAgICAgbWFpblBhbmVEdWVEYXRlLnRleHRDb250ZW50ID0gY29udGVudC5kdWVEYXRlO1xuXG4gICAgICAgIGlmIChjb250ZW50LnByb2plY3RUYXNrcykge1xuICAgICAgICAgICAgY29udGVudC5wcm9qZWN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwSGVhZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHN0ZXBIZWFkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NwYWNlQmV0d2VlbicpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgICAgICBzdGVwVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrWzBdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHN0ZXBEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza1sxXTtcbiAgICAgICAgICAgICAgICBzdGVwSGVhZENvbnRhaW5lci5hcHBlbmQoc3RlcFRpdGxlLCBzdGVwRHVlRGF0ZSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBzdGVwTm90ZXMudGV4dENvbnRlbnQgPSB0YXNrWzJdO1xuXG4gICAgICAgICAgICAgICAgc3RlcENvbnRhaW5lci5hcHBlbmQoc3RlcEhlYWRDb250YWluZXIsIHN0ZXBOb3RlcylcblxuICAgICAgICAgICAgICAgIHN0ZXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgYCR7Y29udGVudC5wcm9qZWN0VGFza3MuaW5kZXhPZih0YXNrLCAwKX1gKVxuXG4gICAgICAgICAgICAgICAgc3RlcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlU3ViVGFzayhwcm9qZWN0LCBlKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBtYWluUGFuZVN1YlRhc2tzLmFwcGVuZChzdGVwQ29udGFpbmVyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluUGFuZS5hcHBlbmQobWFpblBhbmVUaXRsZSwgbWFpblBhbmVEdWVEYXRlLCBtYWluUGFuZVN1YlRhc2tzLCBtYWluUGFuZUNvbXBsZXRlKVxuXG4gICAgICAgIHVwZGF0ZUNvbXBsZXRpb25TdGF0dXMocHJvamVjdClcbiAgICB9XG5cbiAgICBcbn1cblxuY29uc3QgY29tcGxldGVTdWJUYXNrID0gKHByb2plY3QsIGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnByb2plY3RUYXNrc1tlLnRhcmdldC5kYXRhc2V0LmluZGV4XSlcbiAgICAvLyBzZWFyY2ggdGhlIHRhc2tzQ29tcGxldGVkIGFycmF5IGZvciB0aGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBpcyBjbGlja2VkXG4gICAgLy8gaWYgaXQgaXMgbm90IGluIHRoZSBhcnJheSwgYWRkIGl0LiBpZiBpdCBpcyBpbiB0aGUgYXJyYXksIHJlbW92ZSBpdC5cbiAgICBpZiAocHJvamVjdC50YXNrc0NvbXBsZXRlZC5pbmRleE9mKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpID09IC0xKSB7XG4gICAgICAgIHByb2plY3QudGFza3NDb21wbGV0ZWQucHVzaChlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3QudGFza3NDb21wbGV0ZWQgPSBwcm9qZWN0LnRhc2tzQ29tcGxldGVkLmZpbHRlcih0YXNrcyA9PiB0YXNrcyAhPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgIH1cbiAgICB1cGRhdGVNYWluUGFuZShwcm9qZWN0KVxufVxuXG5jb25zdCB1cGRhdGVDb21wbGV0aW9uU3RhdHVzID0gKHByb2plY3QpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRpb25TdGF0dXMnKSkge1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGlvblN0YXR1cycpXG5cbiAgICAgICAgY29tcGxldGlvblN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnRvZ2dsZUNvbXBsZXRlZCgpXG5cbiAgICAgICAgICAgIHVwZGF0ZU1haW5QYW5lKHByb2plY3QpXG4gICAgfSlcbn1cbn1cblxuXG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJylcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93TW9kYWwoJ2FkZFRhc2snKVxuICAgIH0pXG59XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVUYXNrQnV0dG9uJylcbiAgICByZW1vdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93TW9kYWwoJ3JlbW92ZVRhc2snKVxuICAgIH0pO1xuICAgIFxufVxuXG5jb25zdCBtYWluUGFuZUFjdGlvbnMgPSAoKSA9PiB7XG4gICAgXG4gICAgYWRkVGFzaygpXG4gICAgcmVtb3ZlVGFzaygpXG59XG5cblxuXG5leHBvcnQgeyB1cGRhdGVDb21wbGV0aW9uU3RhdHVzLCB1cGRhdGVNYWluUGFuZSwgbWFpblBhbmVBY3Rpb25zIH0iLCJjb25zdCBwcm9qZWN0cyA9IFtdXG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gcHJvamVjdHM7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHNBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09IHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgbGV0IG5ld0FycmF5ID0gW11cbiAgICAgICAgICAgIG5ld0FycmF5ID0gcHJvamVjdHNBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lICE9IHByb2plY3ROYW1lKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lICE9IHByb2plY3ROYW1lKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBtYXRjaCcpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHtwcm9qZWN0c0FycmF5LCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0fVxufVxuXG5jb25zdCBwcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0VGFza3MsIHByb2plY3RQcmlvcml0eSwgZHVlRGF0ZSkgPT4ge1xuICAgIFxuICAgIGxldCBpc0NvbXBsZXRlZCA9IDA7XG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGlzQ29tcGxldGVkID0gIWlzQ29tcGxldGVkO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlZCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRhc2tzQ29tcGxldGVkID0gW11cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0VGFza3MsXG4gICAgICAgIHRhc2tzQ29tcGxldGVkLFxuICAgICAgICBwcm9qZWN0UHJpb3JpdHksXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHRhc2tzQ29tcGxldGVkLFxuICAgICAgICB0b2dnbGVDb21wbGV0ZWQsXG4gICAgICAgIGdldENvbXBsZXRlZCxcbiAgICB9XG59XG5cbnByb2plY3RzLnB1c2gocHJvamVjdChcbiAgICAnRGVmYXVsdCBQcmF3YmVjdCcsXG4gICAgW1xuICAgICAgICBbJ1N0ZXAgMScsICcyOS0wNi0yMDIyJywgJ05vdGVzIGFib3V0IHN0ZXAgMSddLFxuICAgICAgICBbJ1N0ZXAgMicsICcyOS0wNi0yMDIyJywgJ05vdGVzIGFib3V0IHN0ZXAgMSddLFxuICAgICAgICBbJ1N0ZXAgMycsICcyOS0wNi0yMDIyJywgJ05vdGVzIGFib3V0IHN0ZXAgMSddLFxuICAgIF0sXG4gICAgMSxcbiAgICAnJyxcbikpXG5wcm9qZWN0cy5wdXNoKHByb2plY3QoJ1Byb2plY3QgMicsIFtbJ1Rhc2sgMScsICcyOS0wNi0yMDIyJywgJ05vdGVzIGFib3V0IHN0ZXAgMSddLCBbJ1Rhc2sgMicsICcyOS0wNi0yMDIyJywgJ05vdGVzIGFib3V0IHN0ZXAgMSddLCBbJ1Rhc2sgMycsICcyOS0wNi0yMDIyJywgJ05vdGVzIGFib3V0IHN0ZXAgMSddXSwgMCwgJycpKVxucHJvamVjdHNbMV0udG9nZ2xlQ29tcGxldGVkKClcblxuZXhwb3J0IHtwcm9qZWN0cywgcHJvamVjdCwgcHJvamVjdExpc3R9IiwiaW1wb3J0IHsgcG9wdWxhdGVQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2xlZnRQYW5lbEFjdGlvbnNcIjtcbmltcG9ydCB7IHVwZGF0ZU1haW5QYW5lIH0gZnJvbSBcIi4vbWFpblBhbmVsQWN0aW9uc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiXG5cblxuXG5jb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QucHJvamVjdE5hbWUgPT0gcHJvamVjdE5hbWUudGV4dENvbnRlbnQpXG4gICAgcmV0dXJuIHByb2plY3RbMF1cbn1cblxuY29uc3QgY3JlYXRlTWFpbkZyYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5GcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5GcmFtZS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICByZXR1cm4gbWFpbkZyYW1lXG59XG5cbmNvbnN0IGNyZWF0ZUxlZnRQYW5lbCA9ICgpID0+IHtcbiAgICBjb25zdCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0UGFuZWwuY2xhc3NMaXN0LmFkZCgnbmF2UGFuZWwnKTtcblxuICAgIGNvbnN0IG5hdlNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmF2U2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2U2VhcmNoQmFyJylcbiAgICBuYXZTZWFyY2hCYXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYXZTZWFyY2hCYXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2ggZm9yIGEgcHJvamVjdCcpO1xuXG4gICAgY29uc3QgbmF2SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbmF2SGVhZGluZy50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cyc7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TGlzdCcpXG4gICAgY29uc3QgZGVtb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRlbW9Qcm9qZWN0LnRleHRDb250ZW50ID0gJ0RlbW8gUHJvamVjdCc7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGRlbW9Qcm9qZWN0KTtcblxuICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdElucHV0Jyk7XG4gICAgY3JlYXRlTmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0NyZWF0ZSBhIG5ldyBwcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZVByb2plY3RCdXR0b24nKVxuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHNlbGVjdGVkIHByb2plY3QnO1xuXG4gICAgbGVmdFBhbmVsLmFwcGVuZChuYXZTZWFyY2hCYXIsIG5hdkhlYWRpbmcsIHByb2plY3RMaXN0LCBjcmVhdGVOZXdQcm9qZWN0LCBkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgIHJldHVybiBsZWZ0UGFuZWxcbn1cblxuY29uc3QgY3JlYXRlUmlnaHRQYW5lbCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluUGFuZWwuY2xhc3NMaXN0LmFkZCgnbWFpblBhbmVsJyk7XG5cbiAgICBjb25zdCBtYWluUGFuZWxIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIG1haW5IZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdE5hbWUnKVxuICAgIG1haW5QYW5lbEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc3BhY2VCZXR3ZWVuJyk7XG5cbiAgICBjb25zdCBtYWluVGFza1JlbWFpbmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWFpblRhc2tSZW1haW5pbmcuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrc1JlbWFpbmluZycpXG4gICAgbWFpblRhc2tSZW1haW5pbmcudGV4dENvbnRlbnQgPSAneC95IHRhc2tzIGNvbXBsZXRlZCdcblxuICAgIGNvbnN0IG1haW5UYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5UYXNrTGlzdC5jbGFzc0xpc3QuYWRkKCdtYWluVGFza0xpc3QnKTtcbiAgICBtYWluVGFza0xpc3QudGV4dENvbnRlbnQgPSAnTGlzdCBvZiB0YXNrcyBhc3NvY2lhdGVkIHdpdGggc2VsZWN0ZWQgcHJvamVjdCc7XG5cbiAgICBjb25zdCBtYWluQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5BZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ3NwYWNlQmV0d2VlbicpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdGFzaydcbiAgICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J1dHRvbicpXG5cbiAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICByZW1vdmVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1JlbW92ZSB0YXNrJ1xuICAgIHJlbW92ZVRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZW1vdmVUYXNrQnV0dG9uJylcblxuICAgIG1haW5BZGRUYXNrLmFwcGVuZChhZGRUYXNrQnV0dG9uLCByZW1vdmVUYXNrQnV0dG9uKVxuXG4gICAgbWFpblBhbmVsSGVhZGluZy5hcHBlbmQobWFpbkhlYWRpbmcsIG1haW5UYXNrUmVtYWluaW5nKTtcblxuICAgIG1haW5QYW5lbC5hcHBlbmQobWFpblBhbmVsSGVhZGluZywgbWFpblRhc2tMaXN0LCBtYWluQWRkVGFzayk7XG4gICAgXG4gICAgcmV0dXJuIG1haW5QYW5lbFxufVxuXG5jb25zdCBjcmVhdGVNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbW9kYWxQYXJlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxQYXJlbnQnKVxuICAgIG1vZGFsUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsV2luZG93JylcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsQ29udGVudCcpXG5cbiAgICBtb2RhbC5hcHBlbmQobW9kYWxDb250ZW50KVxuICAgIFxuICAgIG1vZGFsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsUGFyZW50KSB7aGlkZU1vZGFsKCl9XG4gICAgfSlcblxuICAgIFxuICAgIFxuICAgIG1vZGFsUGFyZW50LmFwcGVuZChtb2RhbClcblxuICAgIHJldHVybiBtb2RhbFBhcmVudFxufVxuXG4vLyB0aGVzZSBtb2RhbCB2YXJpYXRpb25zIHNob3VsZCBoYXZlIGNvbnRlbnQgJiBzdHJ1Y3R1cmUgaW5zaWRlIHRoZSBmdW5jdGlvbnNcbi8vIHRoZW4gdGhzZSBmdW5jdGlvbnMgYXJlIHBhc3NlZCBpbnRvIHNob3dNb2RhbCBhcyBzd2l0Y2ggc3RhdGVtZW50IGJhc2VkIG9uIHBhcmFtZXRlclxuLy8gdGhhdCBpcyBwYXNzZWQgZnJvbSBidXR0b24gY2xpY2sgKGluIHRoZSBvdGhlciBtb2R1bGVzKVxuLy8gdGhpcyB3aWxsIGFsbG93IHRoZSByZWxldmFudCBzdHVmZiB0byB0aGUgYXBwbGllZCB0byB0aGUgbW9kYWwgd2luZG93IHdoZW4gYSBidXR0b24gaXMgcHJlc3NlZFxuXG5jb25zdCBhZGRUYXNrQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGVudCcpXG5cbiAgICBjb250ZW50Qm94LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0FkZCB0YXNrKHMpJztcblxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0lucHV0JylcbiAgICBjb25zdCB0YXNrSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0lucHV0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3VGFza0lucHV0JylcbiAgICB0YXNrSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIG5hbWUnXG5cbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tEdWVEYXRlJyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXdUYXNrSW5wdXQnKTtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgZHVlJztcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3VGFza0Rlc2NyaXB0aW9uJylcbiAgICB0YXNrRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdOb3RlcydcblxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ1dHRvbnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnV0dG9uc0NvbnRhaW5lcicpXG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5Q29udGVudEVuZCcpXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaGlkZU1vZGFsKClcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdGFzaydcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHN1Ym1pdE5ld1Rhc2sodGFza0lucHV0LnZhbHVlLCB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza0Rlc2NyaXB0aW9uLnZhbHVlKVxuICAgIH0pXG4gICAgXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbilcblxuICAgIGNvbnRlbnRCb3guYXBwZW5kKGhlYWRpbmcsIHRhc2tJbnB1dExhYmVsLCBcbiAgICAgICAgdGFza0lucHV0LCB0YXNrRHVlRGF0ZUxhYmVsLCBcbiAgICAgICAgdGFza0R1ZURhdGUsIHRhc2tEZXNjcmlwdGlvbkxhYmVsLCBcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLCBidXR0b25zQ29udGFpbmVyKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRCb3hcbn1cblxuY29uc3Qgc3VibWl0TmV3VGFzayA9ICh0YXNrLCBkdWVkYXRlLCBub3RlcykgPT4ge1xuICAgIGdldFByb2plY3QoKS5wcm9qZWN0VGFza3MucHVzaChbdGFzaywgZHVlZGF0ZSwgbm90ZXNdKVxuICAgIGhpZGVNb2RhbCgpO1xuICAgIHVwZGF0ZU1haW5QYW5lKGdldFByb2plY3QoKSk7XG59XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RUaXRsZS5kYXRhc2V0LmluZGV4LCAxKVxuICAgIHBvcHVsYXRlUHJvamVjdExpc3QocHJvamVjdHMpXG4gICAgaGlkZU1vZGFsKClcbiAgICBzaG93TW9kYWwoJ3JlbW92ZVByb2plY3QnKVxuICAgIGlmIChwcm9qZWN0c1swXSkge1xuICAgICAgICB1cGRhdGVNYWluUGFuZShwcm9qZWN0c1swXSlcbiAgICB9IGVsc2Uge3VwZGF0ZU1haW5QYW5lKCdkZWZhdWx0Jyl9XG4gICAgXG59XG5cbmNvbnN0IHJlbW92ZVByb2plY3RDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250ZW50JylcblxuICAgIGNvbnRlbnRCb3guaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnUmVtb3ZlIHByb2plY3QocyknO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIFxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3ROYW1lKVxuXG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCwgMCkpXG5cbiAgICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge3JlbW92ZVByb2plY3QocHJvamVjdE5hbWUpfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ1dHRvbnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnV0dG9uc0NvbnRhaW5lcicpXG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5Q29udGVudEVuZCcpXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaGlkZU1vZGFsKClcbiAgICB9KVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoY2xvc2VCdXR0b24pXG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0TGlzdCwgYnV0dG9uc0NvbnRhaW5lcilcblxuICAgIGNvbnRlbnRCb3guYXBwZW5kKGhlYWRpbmcsIHByb2plY3RDb250YWluZXIpXG5cblxuICAgIHJldHVybiBjb250ZW50Qm94XG59XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgZ2V0UHJvamVjdCgpLnByb2plY3RUYXNrcyA9IGdldFByb2plY3QoKS5wcm9qZWN0VGFza3MuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdFswXSAhPSB0YXNrVGl0bGUudGV4dENvbnRlbnQpXG4gICAgdXBkYXRlTWFpblBhbmUoZ2V0UHJvamVjdCgpKVxuICAgIHNob3dNb2RhbCgncmVtb3ZlVGFzaycpXG59XG5cbmNvbnN0IHJlbW92ZVRhc2tDb250ZW50PSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRlbnQnKVxuXG4gICAgY29udGVudEJveC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdSZW1vdmUgdGFzayhzKSc7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgIGdldFByb2plY3QoKS5wcm9qZWN0VGFza3MuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0WzBdXG5cbiAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGdldFByb2plY3QoKS5wcm9qZWN0VGFza3MuaW5kZXhPZihwcm9qZWN0LCAwKSlcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tUaXRsZSlcblxuICAgICAgICBcblxuICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge3JlbW92ZVRhc2sodGFza1RpdGxlKX0pXG4gICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnV0dG9uc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdXR0b25zQ29udGFpbmVyJylcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnlDb250ZW50RW5kJylcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZU1vZGFsJyk7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBoaWRlTW9kYWwoKVxuICAgIH0pXG5cbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChjbG9zZUJ1dHRvbilcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tMaXN0LCBidXR0b25zQ29udGFpbmVyKVxuXG4gICAgY29udGVudEJveC5hcHBlbmQoaGVhZGluZywgdGFza0NvbnRhaW5lcilcblxuICAgIFxuXG4gICAgcmV0dXJuIGNvbnRlbnRCb3hcbn1cblxuY29uc3Qgc2hvd01vZGFsID0gKGNvbnRlbnQpID0+IHtcblxuICAgIGNvbnN0IG1vZGFsUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsUGFyZW50JylcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbFdpbmRvdycpXG5cbiAgICBtb2RhbFBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcblxuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGhpZGVNb2RhbCgpXG4gICAgICAgIH1cbiAgICB9LCB7b25jZTogdHJ1ZX0pXG5cbiAgICBzd2l0Y2ggKGNvbnRlbnQpIHtcbiAgICAgICAgY2FzZSAnYWRkVGFzayc6XG4gICAgICAgICAgICBtb2RhbC5hcHBlbmQoYWRkVGFza0NvbnRlbnQoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ3JlbW92ZVRhc2snOlxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kKHJlbW92ZVRhc2tDb250ZW50KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlUHJvamVjdCc6XG4gICAgICAgICAgICBtb2RhbC5hcHBlbmQocmVtb3ZlUHJvamVjdENvbnRlbnQoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgXG4gICAgICAgIFxufVxuXG5jb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxQYXJlbnQnKVxuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuXG59XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkZyYW1lID0gY3JlYXRlTWFpbkZyYW1lKCkgICAgXG5cbiAgICBjb25zdCBsZWZ0UGFuZWwgPSBjcmVhdGVMZWZ0UGFuZWwoKVxuXG4gICAgY29uc3QgcmlnaHRQYW5lbCA9IGNyZWF0ZVJpZ2h0UGFuZWwoKVxuXG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBjcmVhdGVNb2RhbFdpbmRvdygpXG5cbiAgICBtYWluRnJhbWUuYXBwZW5kKGxlZnRQYW5lbCwgcmlnaHRQYW5lbCwgbW9kYWxXaW5kb3cpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbkZyYW1lKTtcblxuICAgIHJldHVybiB7bWFpbkZyYW1lfVxufVxuXG5leHBvcnQge3JlbmRlclBhZ2UsIHNob3dNb2RhbH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuaW1wb3J0IHsgbGVmdFBhbmVsQWN0aW9ucyB9IGZyb20gXCIuL2xlZnRQYW5lbEFjdGlvbnNcIjtcbmltcG9ydCB7IG1haW5QYW5lQWN0aW9ucywgdXBkYXRlTWFpblBhbmUgfSBmcm9tIFwiLi9tYWluUGFuZWxBY3Rpb25zXCI7XG5cbnJlbmRlclBhZ2UoKVxuXG5sZWZ0UGFuZWxBY3Rpb25zKCk7XG5tYWluUGFuZUFjdGlvbnMoKTtcblxudXBkYXRlTWFpblBhbmUoJ2RlZmF1bHQnKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==