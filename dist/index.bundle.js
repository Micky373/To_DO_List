/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #f4f2f3;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n\r\n.to_do_list_container {\r\n  border: 1px solid #9497ae;\r\n  box-shadow: 0.05rem 0.05rem 2rem;\r\n  width: 40rem;\r\n  height: auto;\r\n  margin: 7rem auto;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: auto;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #c4c6d8;\r\n  background-color: white;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  font-family: Quintessential, sans-serif;\r\n  font-size: 1.8rem;\r\n  color: black;\r\n}\r\n\r\n.reload {\r\n  align-self: center;\r\n  color: #c4c6d8;\r\n  margin-right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.task_input {\r\n  background-color: white;\r\n  border-bottom: 1px solid #c4c6d8;\r\n}\r\n\r\ninput {\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n  font-family: Quintessential, sans-serif;\r\n  width: 85%;\r\n  border: none;\r\n  outline: none;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.task_container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: white;\r\n}\r\n\r\n.task_container .task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-family: Quintessential, sans-serif;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #c4c6d8;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.checking {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  flex-shrink: 0;\r\n  background-color: red;\r\n  display: block;\r\n}\r\n\r\n.clear {\r\n  text-align: center;\r\n  padding: 1rem;\r\n  color: #9497ae;\r\n  font-family: Quintessential, sans-serif;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.clear .finish {\r\n  cursor: pointer;\r\n}\r\n\r\n.the_task {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.delete_task {\r\n  color: rgb(233, 47, 47);\r\n  align-self: center;\r\n  cursor: pointer;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.the_task .to_do {\r\n  width: 20rem;\r\n  overflow: scroll;\r\n}\r\n\r\n.marked {\r\n  text-decoration: line-through;\r\n  color: #e66465;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .to_do_list_container {\r\n    width: 25rem;\r\n  }\r\n\r\n  .the_task .to_do {\r\n    width: 15rem;\r\n  }\r\n\r\n  .the_task {\r\n    gap: 0;\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
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
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _remove_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _complete_check_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);




const taskContainer = document.querySelector('.task_container');

const showActivity = (taskLists) => {
    for (let i = 0; i < taskLists.length; i += 1) {
        const div = document.createElement('div');
        div.classList.add('task');
        div.setAttribute('id', `${taskLists[i].index}`);
        const theTask = document.createElement('div');
        theTask.classList.add('the_task');
        const checkBox = document.createElement('input');
        checkBox.classList.add('checking');
        checkBox.type = 'checkbox';
        checkBox.id = taskLists[i].index;
        checkBox.setAttribute('data-id', `${taskLists[i].index}`);
        if (taskLists[i].completed == true) {
            checkBox.setAttribute('checked', 'checked')
        }
        checkBox.addEventListener('change', (e) => {
            const index = e.target.dataset.id
            const deleteTask = e.target.parentNode.parentNode.querySelector('.to_do');
            if (e.target.checked) {
                deleteTask.style.textDecoration = "line-through"
                deleteTask.style.color = "#e66465"
                taskLists[index - 1].completed = true
                checkBox.setAttribute('checked', 'checked')
                ;(0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(taskLists)
                window.location.reload()
            } else {
                deleteTask.style.textDecoration = "none"
                deleteTask.style.color = "inherit"
                taskLists[index - 1].completed = false
                ;(0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(taskLists)
            }
        })
        theTask.appendChild(checkBox);
        const taskElement = document.createElement('input');
        taskElement.type = 'text';
        taskElement.classList.add('to_do');
        taskElement.id = taskLists[i].index;
        if (taskLists[i].completed == true) {
            taskElement.classList.add('marked')
        }
        taskElement.setAttribute('data-id', `${taskLists[i].index}`);
        taskElement.value = `${taskLists[i].description}`;
        taskElement.addEventListener('input', (e) => {
            const editTask = e.target.parentNode.parentNode;
            const deleteIcon = editTask.querySelector('.delete_task');
            e.target.parentNode.style.backgroundColor = 'lightgoldenrodyellow';
            e.target.style.backgroundColor = 'lightgoldenrodyellow';
            e.target.parentNode.parentNode.style.backgroundColor = 'lightgoldenrodyellow';
            deleteIcon.classList.remove('none');
            const index = e.target.dataset.id;
            taskLists[index - 1].description = e.target.value;
            (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(taskLists);
        });
        taskElement.addEventListener('blur', (e) => {
            e.target.parentNode.style.backgroundColor = 'white';
            e.target.style.backgroundColor = 'white';
            e.target.parentNode.parentNode.style.backgroundColor = 'white';
            setTimeout(() => {
                window.location.reload();
            }, 200);
        });
        theTask.appendChild(taskElement);
        div.appendChild(theTask);
        const deleteIcon = document.createElement('div');
        deleteIcon.classList.add('delete_task');
        deleteIcon.classList.add('none');
        deleteIcon.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        deleteIcon.id = taskLists[i].index;
        deleteIcon.addEventListener('click', (e) => {
            const ref = e.target.parentElement.id;
            (0,_remove_task_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ref);
            e.target.parentElement.parentElement.remove();
            window.location.reload();
        });
        div.appendChild(deleteIcon);
        taskContainer.appendChild(div);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showActivity);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function addToLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


let taskLists = JSON.parse(localStorage.getItem('data'));

const removeTask = (ref) => {
  const result = taskLists.filter((value) => value.index !== Number(ref));
  taskLists = result;
  for (let i = 0; i < taskLists.length; i += 1) {
    taskLists[i].index = i + 1;
  }
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(taskLists);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


let taskLists = JSON.parse(localStorage.getItem('data'));

const finish = () => {
    console.log(taskLists)
    const result = taskLists.filter((value) => value.completed !== true);
    taskLists = result;
    console.log(taskLists)
    for (let i = 0; i < taskLists.length; i += 1) {
        taskLists[i].index = i + 1;
    }
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(taskLists);
    window.location.reload()
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (finish);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _show_activity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);




const taskLists = (localStorage.length === 0) ? [] : JSON.parse(localStorage.getItem('data'));

const addTask = () => {
  const activity = document.querySelector('#add_task').value;
  if (activity !== null) {
    const tasks = new _local_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"](activity, false, ((taskLists.length) + 1));
    taskLists.push(tasks);
    (0,_show_activity_js__WEBPACK_IMPORTED_MODULE_1__["default"])([tasks]);
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(taskLists);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);


/***/ })
/******/ 	]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_show_activity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _modules_add_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _modules_complete_check_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);






// Populating the html element

let taskLists = [];

// Add task

const activity = document.querySelector('#add_task');
const finishTask = document.querySelector('.finish')

finishTask.addEventListener('click', () => {
  finishTask.style.textDecoration = "underline"
  ;(0,_modules_complete_check_js__WEBPACK_IMPORTED_MODULE_4__["default"])()
})

activity.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (e.target.value === '') return;
    (0,_modules_add_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    window.location.reload();
    e.target.value = '';
  }
});

window.onload = () => {
  if (localStorage.getItem('data') === null) {
    (0,_modules_show_activity_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskLists);
    (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.addToLocalStorage)(taskLists);
  } else {
    const localActivities = JSON.parse(localStorage.getItem('data'));
    for (let i = 0; i < localActivities.length; i += 1) {
      localActivities[i].index = i + 1;
    }
    (0,_modules_show_activity_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localActivities);
    taskLists = localActivities;
    for (let i = 0; i < taskLists.length; i += 1) {
      taskLists[i].index = i + 1;
    }
    (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.addToLocalStorage)(taskLists);
  }
};

})();

/******/ })()
;