/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./secret.js":
/*!*******************!*\
  !*** ./secret.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  JOBSEEKERS: ["Chris Thorne", "Jung Park", "Tasnim Saiduzzaman", "Audrey Yun", "Soobin Lim", "Kai Zhu", "Paul Stonebraker", "Jose Mejia", "Paul Ramirez", "Monica Liang Zheng", "Ralles Liu", "James Park", "Juan Sanchez", "Mike Criollo", "Stephen Yang", "Gabe Reiter", "Stephen Yim", "Gigi Scarborough", "Daniel Giovinazzo", "Bert Hill", "Sukhdip Rai", "Ariel Taylor", "Azim Siddiki", "Zihao Li", "Jane Baik", "Jose Miralles", "Galen Davis", "Henry Huang", "Hojung Cha", "Yehudah Rosenberg", "Philip Kor", "David Jhinku", "David/Dave Suh", "Daniel Ahn", "Mansour Dione"]
}; // Cycle.last.students.map {|stud| "#{(stud.preferred_firstname ? stud.preferred_firstname : stud.firstname)} #{stud.lastname}"}

/***/ }),

/***/ "./src/images/yoda-stitch.jpg":
/*!************************************!*\
  !*** ./src/images/yoda-stitch.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/yoda-stitch.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/square */ "./src/scripts/square.js");
/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/DOMExample */ "./src/scripts/DOMExample.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var currentStateObj = {
  currentExample: null,
  currentEventListeners: []
};
document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
document.querySelector("#DOM-demo").addEventListener("click", startDOM);

function startDOM() {
  unregisterEventListeners();
  clearDemo();
  currentStateObj.currentExample = "DOMDEMO";
  Object(_scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__["DOMExample"])();
}

function startCanvas() {
  clearDemo();
  unregisterEventListeners();
  currentStateObj.currentExample = "CANVASDEMO";
  var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__["default"]();
  canvas.createCanvas();
  var squares = [new _scripts_square__WEBPACK_IMPORTED_MODULE_3__["default"](canvas.ctx, canvas.coords, canvas.fillColor)];
  var animating = true;

  var animation = function animation() {
    canvas.clearCanvas();
    if (animating) squares.forEach(function (sq) {
      return sq.updateSquare(canvas.fillColor);
    });
    squares.forEach(function (sq) {
      return sq.drawSquare();
    });
    window.requestAnimationFrame(animation);
    squares.forEach(function (sq) {
      if (sq.coords[0] + sq.coords[2] > window.innerWidth) sq.reverseAnimation();
      if (sq.coords[0] < 0) sq.reverseAnimation();
    });
  };

  window.requestAnimationFrame(animation);
  window.addEventListener("keydown", handleKeyDown);
  currentStateObj.currentEventListeners.push(["window", "keydown", handleKeyDown]);
  window.addEventListener("mousedown", handleMouseDown);
  currentStateObj.currentEventListeners.push(["window", "mousedown", handleMouseDown]);

  function handleKeyDown(event) {
    if (event.which === 32) {
      event.preventDefault();
      squares.forEach(function (sq) {
        return sq.reverseAnimation();
      });
      canvas.setColor("#".concat(Math.floor(Math.random() * 16777215).toString(16)));
    }
  }

  function handleMouseDown(event) {
    event.preventDefault();
    squares.push(new _scripts_square__WEBPACK_IMPORTED_MODULE_3__["default"](canvas.ctx, canvas.coords.map(function (co) {
      return co + 25;
    }), canvas.fillColor)); // animating = !animating;
  }
}

function unregisterEventListeners() {
  while (currentStateObj.currentEventListeners.length) {
    var _currentStateObj$curr = currentStateObj.currentEventListeners.pop(),
        _currentStateObj$curr2 = _slicedToArray(_currentStateObj$curr, 3),
        selector = _currentStateObj$curr2[0],
        event = _currentStateObj$curr2[1],
        handler = _currentStateObj$curr2[2];

    if (selector === "window") {
      window.removeEventListener(event, handler);
      console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {
  if (currentStateObj.currentExample === "CANVASDEMO") document.body.removeChild(document.querySelector("canvas"));

  if (currentStateObj.currentExample === "DOMDEMO") {
    _toConsumableArray(document.querySelectorAll(".card")).forEach(function (elem) {
      return document.body.removeChild(elem);
    });
  }
}

/***/ }),

/***/ "./src/scripts/DOMExample.js":
/*!***********************************!*\
  !*** ./src/scripts/DOMExample.js ***!
  \***********************************/
/*! exports provided: DOMExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMExample", function() { return DOMExample; });
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");

var DOMExample = function DOMExample() {
  var _testObj$key;

  var testObj = {
    key1: "hi",
    key2: {
      key3: "Hello"
    }
  };
  var greeting = (testObj === null || testObj === void 0 ? void 0 : (_testObj$key = testObj.key2) === null || _testObj$key === void 0 ? void 0 : _testObj$key.key3) || testObj.key1;
  document.body.classList.add("center");
  var randomCard = document.createElement("div");
  randomCard.classList.add("card", "center", "rando");
  var winnerP = document.createElement("p");
  var randomButton = document.createElement("btn");
  randomButton.innerText = "Pick Me!";
  randomCard.append(randomButton, winnerP);
  document.body.append(randomCard);

  randomButton.onclick = function (e) {
    e.preventDefault();
    winnerP.innerHTML = randomJobSeeker();
  };

  var card = document.createElement("div");
  card.classList.add("card", "center");
  card.innerHTML = "<h2>".concat(greeting, " World!</h2>");
  document.body.append(card);
  var imgCard = document.createElement("div");
  imgCard.classList.add("card", "center", "image-card");
  document.body.appendChild(imgCard);
  var imgElement = document.createElement("img");
  imgElement.src = buildAssetPath(_images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  imgElement.classList.add("card", "center");
  imgElement.style.objectFit = "cover";
  imgElement.style.filter = "grayscale(80%)";
  document.body.appendChild(imgElement);
}; // to resolve path issues for images in JS

function buildAssetPath(imgSrc) {
  return "./dist/".concat(imgSrc);
}

function randomJobSeeker() {
  var jobSeekers =  true ? __webpack_require__(/*! ../../secret */ "./secret.js").JOBSEEKERS : undefined;
  var winner = jobSeekers[Math.floor(Math.random() * jobSeekers.length)];
  return winner;
}

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvasExample = /*#__PURE__*/function () {
  function canvasExample(props) {
    _classCallCheck(this, canvasExample);

    this.coords = [10, 10, 150, 100];
    this.animationDir = 1;
    this.fillColor = "green";
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width / 2;
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    } // drawSquare() {
    //   this.ctx.fillStyle = this.fillColor;
    //   this.ctx.fillRect(...this.coords);
    // }
    // updateSquare() {
    //   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
    // }
    // clearSquare() {
    //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }
    // reverseAnimation() {
    //   this.animationDir *= -1;
    // }

  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }]);

  return canvasExample;
}();

/* harmony default export */ __webpack_exports__["default"] = (canvasExample);

/***/ }),

/***/ "./src/scripts/square.js":
/*!*******************************!*\
  !*** ./src/scripts/square.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(ctx, coords) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "green";

    _classCallCheck(this, Square);

    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.animationDir = 1;
  }

  _createClass(Square, [{
    key: "drawSquare",
    value: function drawSquare() {
      var _this$ctx;

      this.ctx.fillStyle = this.color;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "updateSquare",
    value: function updateSquare(color) {
      var _this = this;

      this.color = color;
      this.coords = this.coords.map(function (coord) {
        return coord += 1 * _this.animationDir;
      });
    }
  }, {
    key: "reverseAnimation",
    value: function reverseAnimation() {
      this.animationDir *= -1;
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMveW9kYS1zdGl0Y2guanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ET01FeGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkpPQlNFRUtFUlMiLCJjdXJyZW50U3RhdGVPYmoiLCJjdXJyZW50RXhhbXBsZSIsImN1cnJlbnRFdmVudExpc3RlbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydENhbnZhcyIsInN0YXJ0RE9NIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwiY2xlYXJEZW1vIiwiRE9NRXhhbXBsZSIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJzcXVhcmVzIiwiU3F1YXJlIiwiY3R4IiwiY29vcmRzIiwiZmlsbENvbG9yIiwiYW5pbWF0aW5nIiwiYW5pbWF0aW9uIiwiY2xlYXJDYW52YXMiLCJmb3JFYWNoIiwic3EiLCJ1cGRhdGVTcXVhcmUiLCJkcmF3U3F1YXJlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5uZXJXaWR0aCIsInJldmVyc2VBbmltYXRpb24iLCJoYW5kbGVLZXlEb3duIiwicHVzaCIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJtYXAiLCJjbyIsImxlbmd0aCIsInBvcCIsInNlbGVjdG9yIiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJ0ZXN0T2JqIiwia2V5MSIsImtleTIiLCJrZXkzIiwiZ3JlZXRpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJyYW5kb21DYXJkIiwiY3JlYXRlRWxlbWVudCIsIndpbm5lclAiLCJyYW5kb21CdXR0b24iLCJpbm5lclRleHQiLCJhcHBlbmQiLCJvbmNsaWNrIiwiZSIsImlubmVySFRNTCIsInJhbmRvbUpvYlNlZWtlciIsImNhcmQiLCJpbWdDYXJkIiwiYXBwZW5kQ2hpbGQiLCJpbWdFbGVtZW50Iiwic3JjIiwiYnVpbGRBc3NldFBhdGgiLCJzdGl0Y2hBbmRZb2RhIiwic3R5bGUiLCJvYmplY3RGaXQiLCJmaWx0ZXIiLCJpbWdTcmMiLCJqb2JTZWVrZXJzIiwicHJvY2VzcyIsInJlcXVpcmUiLCJ3aW5uZXIiLCJwcm9wcyIsImFuaW1hdGlvbkRpciIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb29yZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNB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RDs7Ozs7O0FBR1lwRSw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdENNRyxNO0FBQ0osa0JBQVlDLEdBQVosRUFBaUJDLE1BQWpCLEVBQTBDO0FBQUEsUUFBakIyRSxLQUFpQix1RUFBVCxPQUFTOztBQUFBOztBQUN4QyxTQUFLNUUsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBSzJFLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtMLFlBQUwsR0FBb0IsQ0FBcEI7QUFDRDs7OztpQ0FFWTtBQUFBOztBQUNYLFdBQUt2RSxHQUFMLENBQVM4RSxTQUFULEdBQXFCLEtBQUtGLEtBQTFCOztBQUNBLHdCQUFLNUUsR0FBTCxFQUFTK0UsUUFBVCxxQ0FBcUIsS0FBSzlFLE1BQTFCO0FBQ0Q7OztpQ0FDWTJFLEssRUFBTztBQUFBOztBQUNsQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLM0UsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWXdCLEdBQVosQ0FBZ0IsVUFBQ3VELEtBQUQ7QUFBQSxlQUFZQSxLQUFLLElBQUksSUFBSSxLQUFJLENBQUNULFlBQTlCO0FBQUEsT0FBaEIsQ0FBZDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFdBQUtBLFlBQUwsSUFBcUIsQ0FBQyxDQUF0QjtBQUNEOzs7Ozs7QUFHWXhFLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDdEJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge0pPQlNFRUtFUlM6W1wiQ2hyaXMgVGhvcm5lXCIsIFwiSnVuZyBQYXJrXCIsIFwiVGFzbmltIFNhaWR1enphbWFuXCIsIFwiQXVkcmV5IFl1blwiLCBcIlNvb2JpbiBMaW1cIiwgXCJLYWkgWmh1XCIsIFwiUGF1bCBTdG9uZWJyYWtlclwiLCBcIkpvc2UgTWVqaWFcIiwgXCJQYXVsIFJhbWlyZXpcIiwgXCJNb25pY2EgTGlhbmcgWmhlbmdcIiwgXCJSYWxsZXMgTGl1XCIsIFwiSmFtZXMgUGFya1wiLCBcIkp1YW4gU2FuY2hlelwiLCBcIk1pa2UgQ3Jpb2xsb1wiLCBcIlN0ZXBoZW4gWWFuZ1wiLCBcIkdhYmUgUmVpdGVyXCIsIFwiU3RlcGhlbiBZaW1cIiwgXCJHaWdpIFNjYXJib3JvdWdoXCIsIFwiRGFuaWVsIEdpb3ZpbmF6em9cIiwgXCJCZXJ0IEhpbGxcIiwgXCJTdWtoZGlwIFJhaVwiLCBcIkFyaWVsIFRheWxvclwiLCBcIkF6aW0gU2lkZGlraVwiLCBcIlppaGFvIExpXCIsIFwiSmFuZSBCYWlrXCIsIFwiSm9zZSBNaXJhbGxlc1wiLCBcIkdhbGVuIERhdmlzXCIsIFwiSGVucnkgSHVhbmdcIiwgXCJIb2p1bmcgQ2hhXCIsIFwiWWVodWRhaCBSb3NlbmJlcmdcIiwgXCJQaGlsaXAgS29yXCIsIFwiRGF2aWQgSmhpbmt1XCIsIFwiRGF2aWQvRGF2ZSBTdWhcIiwgXCJEYW5pZWwgQWhuXCIsIFwiTWFuc291ciBEaW9uZVwiXX07XG5cbi8vIEN5Y2xlLmxhc3Quc3R1ZGVudHMubWFwIHt8c3R1ZHwgXCIjeyhzdHVkLnByZWZlcnJlZF9maXJzdG5hbWUgPyBzdHVkLnByZWZlcnJlZF9maXJzdG5hbWUgOiBzdHVkLmZpcnN0bmFtZSl9ICN7c3R1ZC5sYXN0bmFtZX1cIn0iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy95b2RhLXN0aXRjaC5qcGdcIjsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy95b2RhLXN0aXRjaC5qcGdcIjtcbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG5pbXBvcnQgeyBET01FeGFtcGxlIH0gZnJvbSBcIi4vc2NyaXB0cy9ET01FeGFtcGxlXCI7XG5jb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4gIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuICBjdXJyZW50RXZlbnRMaXN0ZW5lcnM6IFtdLFxufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtZGVtb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRDYW52YXMpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNET00tZGVtb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRET00pO1xuXG5mdW5jdGlvbiBzdGFydERPTSgpIHtcbiAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gIGNsZWFyRGVtbygpO1xuICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkRPTURFTU9cIjtcbiAgRE9NRXhhbXBsZSgpO1xufVxuXG5mdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbiAgY2xlYXJEZW1vKCk7XG4gIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbiAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbiAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbiAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgaWYgKHNxLmNvb3Jkc1swXSA8IDApIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICB9KTtcbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgIFwid2luZG93XCIsXG4gICAgXCJrZXlkb3duXCIsXG4gICAgaGFuZGxlS2V5RG93bixcbiAgXSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICBcIndpbmRvd1wiLFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgaGFuZGxlTW91c2VEb3duLFxuICBdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4gICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzcXVhcmVzLnB1c2goXG4gICAgICBuZXcgU3F1YXJlKFxuICAgICAgICBjYW52YXMuY3R4LFxuICAgICAgICBjYW52YXMuY29vcmRzLm1hcCgoY28pID0+IGNvICsgMjUpLFxuICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4gICAgICApXG4gICAgKTtcbiAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgd2hpbGUgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgbGV0IFtcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgZXZlbnQsXG4gICAgICBoYW5kbGVyLFxuICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuICAgIGlmIChzZWxlY3RvciA9PT0gXCJ3aW5kb3dcIikge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgY29uc29sZS5sb2coaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRlbW8oKSB7XG4gIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiQ0FOVkFTREVNT1wiKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG4gIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiRE9NREVNT1wiKSB7XG4gICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKV0uZm9yRWFjaCgoZWxlbSkgPT5cbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgc3RpdGNoQW5kWW9kYSBmcm9tIFwiLi4vaW1hZ2VzL3lvZGEtc3RpdGNoLmpwZ1wiO1xuXG5leHBvcnQgY29uc3QgRE9NRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgdGVzdE9iaiA9IHtcbiAgICBrZXkxOiBcImhpXCIsXG4gICAga2V5Mjoge1xuICAgICAga2V5MzogXCJIZWxsb1wiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZ3JlZXRpbmcgPSB0ZXN0T2JqPy5rZXkyPy5rZXkzIHx8IHRlc3RPYmoua2V5MTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiY2VudGVyXCIpO1xuICBjb25zdCByYW5kb21DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmFuZG9tQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiLCBcInJhbmRvXCIpO1xuICBjb25zdCB3aW5uZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHJhbmRvbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidG5cIik7XG4gIHJhbmRvbUJ1dHRvbi5pbm5lclRleHQgPSBcIlBpY2sgTWUhXCI7XG4gIHJhbmRvbUNhcmQuYXBwZW5kKHJhbmRvbUJ1dHRvbiwgd2lubmVyUCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHJhbmRvbUNhcmQpO1xuICByYW5kb21CdXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdpbm5lclAuaW5uZXJIVE1MID0gcmFuZG9tSm9iU2Vla2VyKCk7XG4gIH07XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbiAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nRWxlbWVudC5zcmMgPSBidWlsZEFzc2V0UGF0aChzdGl0Y2hBbmRZb2RhKTtcbiAgaW1nRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiKTtcbiAgaW1nRWxlbWVudC5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG4gIGltZ0VsZW1lbnQuc3R5bGUuZmlsdGVyID0gXCJncmF5c2NhbGUoODAlKVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICBcbn07XG5cbi8vIHRvIHJlc29sdmUgcGF0aCBpc3N1ZXMgZm9yIGltYWdlcyBpbiBKU1xuXG5mdW5jdGlvbiBidWlsZEFzc2V0UGF0aChpbWdTcmMpIHtcbiAgcmV0dXJuIGAuL2Rpc3QvJHtpbWdTcmN9YDtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSm9iU2Vla2VyKCkge1xuY29uc3Qgam9iU2Vla2VycyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gXG4gIHJlcXVpcmUoJy4uLy4uL3NlY3JldCcpLkpPQlNFRUtFUlMgOiBcbiAgW1xuICAgIFwiQXJ0aHVyIERlbnRcIixcbiAgICBcIkZvcmQgUHJlZmVjdFwiLFxuICAgIFwiWmFwaG9kIEJlZWJsZWJyb3hcIixcbiAgICBcIk1hcnZpbiB0aGUgUGFyYW5vaWQgQW5kcm9pZFwiLFxuICAgIFwiVHJpbGxpYW5cIixcbiAgICBcIlNsYXJ0aWJhcnRmYXN0XCIsXG4gIF07XG5cbiAgY29uc3Qgd2lubmVyID0gam9iU2Vla2Vyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBqb2JTZWVrZXJzLmxlbmd0aCldO1xuICByZXR1cm4gd2lubmVyO1xufVxuXG4iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmNvb3JkcyA9IFsxMCwgMTAsIDE1MCwgMTAwXTtcbiAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBgZ3JlZW5gO1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC43NTtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIH1cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgfVxuICAvLyBkcmF3U3F1YXJlKCkge1xuICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgLy8gfVxuICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gIC8vIH1cblxuICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIC8vIH1cblxuICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAvLyB9XG4gIGNsZWFyQ2FudmFzKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuICBzZXRDb2xvcihjb2xvcikge1xuICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlO1xuIiwiY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgfVxuXG4gIGRyYXdTcXVhcmUoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gIH1cbiAgdXBkYXRlU3F1YXJlKGNvbG9yKSB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICB9XG5cbiAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9