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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(9);
var defineProperty = __webpack_require__(12).f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(96)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(21);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var shared = __webpack_require__(45);
var hasOwn = __webpack_require__(10);
var uid = __webpack_require__(64);
var NATIVE_SYMBOL = __webpack_require__(44);
var USE_SYMBOL_AS_UID = __webpack_require__(61);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(21);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var getOwnPropertyDescriptor = __webpack_require__(42).f;
var createNonEnumerableProperty = __webpack_require__(26);
var defineBuiltIn = __webpack_require__(15);
var defineGlobalProperty = __webpack_require__(47);
var copyConstructorProperties = __webpack_require__(102);
var isForced = __webpack_require__(52);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var toObject = __webpack_require__(63);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(3);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(65);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(66);
var anObject = __webpack_require__(8);
var toPropertyKey = __webpack_require__(60);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var isCallable = __webpack_require__(3);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(3);
var tryToString = __webpack_require__(36);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(26);
var makeBuiltIn = __webpack_require__(67);
var defineGlobalProperty = __webpack_require__(47);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    if (!options.unsafe) delete O[key];
    else if (O[key]) simple = true;
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
  } return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(138);
__webpack_require__(139);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(40);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__(2);
var defineBuiltIn = __webpack_require__(15);

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var un$DateToString = uncurryThis(DatePrototype[TO_STRING]);
var getTime = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = getTime(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? un$DateToString(this) : INVALID_DATE;
  });
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var o, n; }}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,i="fslightbox-",r="".concat(i,"styles"),s="".concat(i,"cursor-grabbing"),a="".concat(i,"full-dimension"),c="".concat(i,"flex-centered"),l="".concat(i,"open"),u="".concat(i,"transform-transition"),d="".concat(i,"absoluted"),f="".concat(i,"slide-btn"),p="".concat(f,"-container"),h="".concat(i,"fade-in"),m="".concat(i,"fade-out"),g=h+"-strong",v=m+"-strong",b="".concat(i,"opacity-"),x="".concat(b,"1"),y="".concat(i,"source");function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e){var t=e.stageIndexes,n=e.core.stageManager,o=e.props.sources.length-1;n.getPreviousSlideIndex=function(){return 0===t.current?o:t.current-1},n.getNextSlideIndex=function(){return t.current===o?0:t.current+1},n.updateStageIndexes=0===o?function(){}:1===o?function(){0===t.current?(t.next=1,delete t.previous):(t.previous=0,delete t.next)}:function(){t.previous=n.getPreviousSlideIndex(),t.next=n.getNextSlideIndex()},n.i=o<=2?function(){return!0}:function(e){var n=t.current;if(0===n&&e===o||n===o&&0===e)return!0;var i=n-e;return-1===i||0===i||1===i}}"object"===("undefined"==typeof document?"undefined":w(document))&&((o=document.createElement("style")).className=r,o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")),document.head.appendChild(o));function L(e){var t,n=e.props,o=0,i={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:r(e)},this.handleReceivedSourceTypeForUrl=function(e,n){if(!1===i[n]&&(o--,"invalid"!==e?i[n]=e:delete i[n],0===o)){!function(e,t){for(var n in t)e[n]=t[n]}(t,i);try{localStorage.setItem("fslightbox-types",JSON.stringify(t))}catch(e){}}};var r=function(e){o++,i[e]=!1};if(n.disableLocalStorage)this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){};else{try{t=JSON.parse(localStorage.getItem("fslightbox-types"))}catch(e){}t||(t={},this.getSourceTypeFromLocalStorageByUrl=r)}}function A(e,t,n,o){var i=e.data,r=e.elements.sources,s=n/o,a=0;this.adjustSize=function(){if((a=i.maxSourceWidth/s)<i.maxSourceHeight)return n<i.maxSourceWidth&&(a=o),c();a=o>i.maxSourceHeight?i.maxSourceHeight:o,c()};var c=function(){r[t].style.width=a*s+"px",r[t].style.height=a+"px"}}function C(e,t){var n=this,o=e.collections.sourceSizers,i=e.elements,r=i.sourceAnimationWrappers,s=i.sources,a=e.isl,c=e.resolve;function l(e,n){o[t]=c(A,[t,e,n]),o[t].adjustSize()}this.runActions=function(e,o){a[t]=!0,s[t].classList.add(x),r[t].classList.add(g),r[t].removeChild(r[t].firstChild),l(e,o),n.runActions=l}}function E(e,t){var n,o=this,i=e.elements.sources,r=e.props,s=(0,e.resolve)(C,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,o=t.naturalHeight;s.runActions(n,o)},this.handleVideoLoad=function(e){var t=e.target,o=t.videoWidth,i=t.videoHeight;n=!0,s.runActions(o,i)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;r.maxYoutubeDimensions&&(e=r.maxYoutubeDimensions.width,t=r.maxYoutubeDimensions.height),s.runActions(e,t)},this.handleCustomLoad=function(){var e=i[t],n=e.offsetWidth,r=e.offsetHeight;n&&r?s.runActions(n,r):setTimeout(o.handleCustomLoad)}}function F(e,t,n){var o=e.elements.sources,i=e.props.customClasses,r=i[t]?i[t]:"";o[t].className=n+" "+r}function I(e,t){var n=e.elements.sources,o=e.props.customAttributes;for(var i in o[t])n[t].setAttribute(i,o[t][i])}function T(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props.sources;i[t]=document.createElement("img"),F(e,t,y),i[t].src=s[t],i[t].onload=n[t].handleImageLoad,I(e,t),r[t].appendChild(i[t])}function N(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props,a=s.sources,c=s.videosPosters;i[t]=document.createElement("video"),F(e,t,y),i[t].src=a[t],i[t].onloadedmetadata=function(e){n[t].handleVideoLoad(e)},i[t].controls=!0,I(e,t),c[t]&&(i[t].poster=c[t]);var l=document.createElement("source");l.src=a[t],i[t].appendChild(l),setTimeout(n[t].handleNotMetaDatedVideoLoad,3e3),r[t].appendChild(i[t])}function z(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,r=o.sources,s=o.sourceAnimationWrappers,a=e.props.sources;r[t]=document.createElement("iframe"),F(e,t,"".concat(y," ").concat(i,"youtube-iframe"));var c=a[t],l=c.split("?")[1];r[t].src="https://www.youtube.com/embed/".concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],"?").concat(l||""),r[t].allowFullscreen=!0,I(e,t),s[t].appendChild(r[t]),n[t].handleYoutubeLoad()}function P(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props.sources;i[t]=s[t],F(e,t,"".concat(i[t].className," ").concat(y)),r[t].appendChild(i[t]),n[t].handleCustomLoad()}function k(e,t){var n=e.elements,o=n.sources,r=n.sourceAnimationWrappers;e.props.sources;o[t]=document.createElement("div"),o[t].className="".concat(i,"invalid-file-wrapper ").concat(c),o[t].innerHTML="Invalid source",r[t].classList.add(g),r[t].removeChild(r[t].firstChild),r[t].appendChild(o[t])}function H(e){var t=e.collections,n=t.sourceLoadHandlers,o=t.sourcesRenderFunctions,i=e.core.sourceDisplayFacade,r=e.resolve;this.runActionsForSourceTypeAndIndex=function(t,s){var a;switch("invalid"!==t&&(n[s]=r(E,[s])),t){case"image":a=T;break;case"video":a=N;break;case"youtube":a=z;break;case"custom":a=P;break;default:a=k}o[s]=function(){return a(e,s)},i.displaySourcesWhichShouldBeDisplayed()}}function W(){var e,t,n,o={isUrlYoutubeOne:function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname||"youtu.be"===t.hostname},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};function i(){if(4!==n.readyState){if(2===n.readyState){var e;switch(o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))){case"image":e="image";break;case"video":e="video";break;default:e="invalid"}n.onreadystatechange=null,n.abort(),t(e)}}else t("invalid")}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(r){if(o.isUrlYoutubeOne(e))return r("youtube");t=r,(n=new XMLHttpRequest).onreadystatechange=i,n.open("GET",e,!0),n.send()}}function R(e,t,n){var o=e.props,i=o.types,r=o.type,s=o.sources,a=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return i&&i[e]?t=i[e]:r&&(t=r),t},this.retrieveTypeWithXhrForIndex=function(e){var o=a(W);o.setUrlToCheck(s[e]),o.getSourceType((function(o){t.handleReceivedSourceTypeForUrl(o,s[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function D(e,t){var n=e.core.stageManager,o=e.elements,i=o.smw,r=o.sourceWrappersContainer,s=e.props,l=0,f=document.createElement("div");function p(e){f.style.transform="translateX(".concat(e+l,"px)"),l=0}function h(){return(1+s.slideDistance)*innerWidth}f.className="".concat(d," ").concat(a," ").concat(c),f.s=function(){f.style.display="flex"},f.h=function(){f.style.display="none"},f.a=function(){f.classList.add(u)},f.d=function(){f.classList.remove(u)},f.n=function(){f.style.removeProperty("transform")},f.v=function(e){return l=e,f},f.ne=function(){p(-h())},f.z=function(){p(0)},f.p=function(){p(h())},n.i(t)||f.h(),i[t]=f,r.appendChild(f),function(e,t){var n=e.elements,o=n.smw,i=n.sourceAnimationWrappers,r=document.createElement("div"),s=document.createElement("div");s.className="fslightboxl";for(var a=0;a<3;a++){var c=document.createElement("div");s.appendChild(c)}r.appendChild(s),o[t].appendChild(r),i[t]=r}(e,t)}function O(e,t,n,o){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width",t),r.setAttributeNS(null,"height",t),r.setAttributeNS(null,"viewBox",n);var s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttributeNS(null,"class","".concat(i,"svg-path")),s.setAttributeNS(null,"d",o),r.appendChild(s),e.appendChild(r),r}function M(e,t){var n=document.createElement("div");return n.className="".concat(i,"toolbar-button ").concat(c),n.title=t,e.appendChild(n),n}function j(e,t){var n=document.createElement("div");n.className="".concat(i,"toolbar"),t.appendChild(n),function(e,t){var n=e.componentsServices,o=e.data,i=e.fs,r="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",s=M(t);s.title="Enter fullscreen";var a=O(s,"20px","0 0 18 18",r);n.ofs=function(){o.ifs=!0,s.title="Exit fullscreen",a.setAttributeNS(null,"width","24px"),a.setAttributeNS(null,"height","24px"),a.setAttributeNS(null,"viewBox","0 0 950 1024"),a.firstChild.setAttributeNS(null,"d","M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")},n.xfs=function(){o.ifs=!1,s.title="Enter fullscreen",a.setAttributeNS(null,"width","20px"),a.setAttributeNS(null,"height","20px"),a.setAttributeNS(null,"viewBox","0 0 18 18"),a.firstChild.setAttributeNS(null,"d",r)},s.onclick=i.t}(e,n),function(e,t){var n=M(t,"Close");n.onclick=e.core.lightboxCloser.closeLightbox,O(n,"20px","0 0 24 24","M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")}(e,n)}function X(e){var t=e.props.sources,n=e.elements.container,o=document.createElement("div");o.className="".concat(i,"nav"),n.appendChild(o),j(e,o),t.length>1&&function(e,t){var n=e.componentsServices,o=e.props.sources,r=(e.stageIndexes,document.createElement("div"));r.className="".concat(i,"slide-number-container");var s=document.createElement("div");s.className=c;var a=document.createElement("span");n.setSlideNumber=function(e){return a.innerHTML=e};var l=document.createElement("span");l.className="".concat(i,"slash");var u=document.createElement("div");u.innerHTML=o.length,r.appendChild(s),s.appendChild(a),s.appendChild(l),s.appendChild(u),t.appendChild(r),setTimeout((function(){s.offsetWidth>55&&(r.style.justifyContent="flex-start")}))}(e,o)}function B(e,t,n,o){var i=e.elements.container,r=n.charAt(0).toUpperCase()+n.slice(1),s=document.createElement("div");s.className="".concat(p," ").concat(p,"-").concat(n),s.title="".concat(r," slide"),s.onclick=t,function(e,t){var n=document.createElement("div");n.className="".concat(f," ").concat(c),O(n,"20px","0 0 20 20",t),e.appendChild(n)}(s,o),i.appendChild(s)}function U(e){var t=e.core,n=t.lightboxCloser,o=t.slideChangeFacade,i=e.fs;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":o.changeToPrevious();break;case"ArrowRight":o.changeToNext();break;case"F11":e.preventDefault(),i.t()}}}function q(e){var t=e.elements,n=e.sourcePointerProps,o=e.stageIndexes;function i(e,o){t.smw[e].v(n.swipedX)[o]()}this.runActionsForEvent=function(e){var r,a,c;t.container.contains(t.slideSwipingHoverer)||t.container.appendChild(t.slideSwipingHoverer),r=t.container,a=s,(c=r.classList).contains(a)||c.add(a),n.swipedX=e.screenX-n.downScreenX;var l=o.previous,u=o.next;i(o.current,"z"),void 0!==l&&n.swipedX>0?i(l,"ne"):void 0!==u&&n.swipedX<0&&i(u,"p")}}function V(e){var t=e.props.sources,n=e.resolve,o=e.sourcePointerProps,i=n(q);1===t.length?this.listener=function(){o.swipedX=1}:this.listener=function(e){o.isPointering&&i.runActionsForEvent(e)}}function _(e){var t=e.core.slideIndexChanger,n=e.elements.smw,o=e.stageIndexes,i=e.sws;function r(e){var t=n[o.current];t.a(),t[e]()}function s(e,t){void 0!==e&&(n[e].s(),n[e][t]())}this.runPositiveSwipedXActions=function(){var e=o.previous;if(void 0===e)r("z");else{r("p");var n=o.next;t.changeTo(e);var a=o.previous;i.d(a),i.b(n),r("z"),s(a,"ne")}},this.runNegativeSwipedXActions=function(){var e=o.next;if(void 0===e)r("z");else{r("ne");var n=o.previous;t.changeTo(e);var a=o.next;i.d(a),i.b(n),r("z"),s(a,"p")}}}function Y(e,t){e.contains(t)&&e.removeChild(t)}function J(e){var t=e.core.lightboxCloser,n=e.elements,o=e.resolve,i=e.sourcePointerProps,r=o(_);this.runNoSwipeActions=function(){Y(n.container,n.slideSwipingHoverer),i.isSourceDownEventTarget||t.closeLightbox(),i.isPointering=!1},this.runActions=function(){i.swipedX>0?r.runPositiveSwipedXActions():r.runNegativeSwipedXActions(),Y(n.container,n.slideSwipingHoverer),n.container.classList.remove(s),i.isPointering=!1}}function G(e){var t=e.resolve,n=e.sourcePointerProps,o=t(J);this.listener=function(){n.isPointering&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function $(e){var t=this,n=e.core,o=n.eventsDispatcher,i=n.globalEventsController,r=n.scrollbarRecompensor,s=e.data,a=e.elements,c=e.fs,u=e.props,d=e.sourcePointerProps;this.isLightboxFadingOut=!1,this.runActions=function(){t.isLightboxFadingOut=!0,a.container.classList.add(v),i.removeListeners(),u.exitFullscreenOnClose&&s.ifs&&c.x(),setTimeout((function(){t.isLightboxFadingOut=!1,d.isPointering=!1,a.container.classList.remove(v),document.documentElement.classList.remove(l),r.removeRecompense(),document.body.removeChild(a.container),o.dispatch("onClose")}),270)}}function K(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function Q(e){var t,n,o;n=(t=e).core.eventsDispatcher,o=t.props,n.dispatch=function(e){o[e]&&o[e]()},function(e){var t=e.componentsServices,n=e.data,o=e.fs,i=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];function r(e){for(var t=0;t<i.length;t++)document[e](i[t],s)}function s(){document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement?t.ofs():t.xfs()}o.o=function(){t.ofs();var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},o.x=function(){t.xfs(),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},o.t=function(){n.ifs?o.x():o.o()},o.l=function(){r("addEventListener")},o.q=function(){r("removeEventListener")}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,i=e.fs,r=e.resolve,s=r(U),a=r(V),c=r(G);n.attachListeners=function(){document.addEventListener("pointermove",a.listener),document.addEventListener("pointerup",c.listener),addEventListener("resize",o.runActions),document.addEventListener("keydown",s.listener),i.l()},n.removeListeners=function(){document.removeEventListener("pointermove",a.listener),document.removeEventListener("pointerup",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",s.listener),i.q()}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)($);t.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;function o(){document.body.offsetHeight>innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")}n.addRecompense=function(){"complete"===document.readyState?o():addEventListener("load",(function(){o(),n.addRecompense=o}))},n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,i=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){o.jumpTo(i.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(i.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),function(e){var t=e.componentsServices,n=e.core,o=n.slideIndexChanger,i=n.sourceDisplayFacade,r=n.stageManager,s=e.elements,a=s.smw,c=s.sourceAnimationWrappers,l=e.isl,u=e.stageIndexes,d=e.sws;o.changeTo=function(e){u.current=e,r.updateStageIndexes(),t.setSlideNumber(e+1),i.displaySourcesWhichShouldBeDisplayed()},o.jumpTo=function(e){var t=u.previous,n=u.current,i=u.next,s=l[n],f=l[e];o.changeTo(e);for(var p=0;p<a.length;p++)a[p].d();d.d(n),d.c(),requestAnimationFrame((function(){requestAnimationFrame((function(){var e=u.previous,o=u.next;function p(){r.i(n)?n===u.previous?a[n].ne():n===u.next&&a[n].p():(a[n].h(),a[n].n())}s&&c[n].classList.add(m),f&&c[u.current].classList.add(h),d.a(),void 0!==e&&e!==n&&a[e].ne(),a[u.current].n(),void 0!==o&&o!==n&&a[o].p(),d.b(t),d.b(i),l[n]?setTimeout(p,260):p()}))}))}}(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=n.smw,i=n.sources,r=e.sourcePointerProps,s=e.stageIndexes;t.listener=function(e){"VIDEO"!==e.target.tagName&&e.preventDefault(),r.isPointering=!0,r.downScreenX=e.screenX,r.swipedX=0;var t=i[s.current];t&&t.contains(e.target)?r.isSourceDownEventTarget=!0:r.isSourceDownEventTarget=!1;for(var n=0;n<o.length;n++)o[n].d()}}(e),function(e){var t=e.collections.sourcesRenderFunctions,n=e.core.sourceDisplayFacade,o=e.props,i=e.stageIndexes;function r(e){t[e]&&(t[e](),delete t[e])}n.displaySourcesWhichShouldBeDisplayed=function(){if(o.loadOnlyCurrentSource)r(i.current);else for(var e in i)r(i[e])}}(e),function(e){var t=e.core.stageManager,n=e.elements,o=n.smw,i=n.sourceAnimationWrappers,r=e.isl,s=e.stageIndexes,a=e.sws;a.a=function(){for(var e in s)o[s[e]].s()},a.b=function(e){void 0===e||t.i(e)||(o[e].h(),o[e].n())},a.c=function(){for(var e in s)a.d(s[e])},a.d=function(e){if(r[e]){var t=i[e];K(t,g),K(t,h),K(t,m)}}}(e),function(e){var t=e.collections.sourceSizers,n=e.core.windowResizeActioner,o=e.data,i=e.elements.smw,r=e.stageIndexes;n.runActions=function(){innerWidth<992?o.maxSourceWidth=innerWidth:o.maxSourceWidth=.9*innerWidth,o.maxSourceHeight=.9*innerHeight;for(var e=0;e<i.length;e++)i[e].d(),t[e]&&t[e].adjustSize();var n=r.previous,s=r.next;void 0!==n&&i[n].ne(),void 0!==s&&i[s].p()}}(e)}function Z(e){var t=e.componentsServices,n=e.core,o=n.eventsDispatcher,r=n.globalEventsController,s=n.scrollbarRecompensor,c=n.sourceDisplayFacade,u=n.stageManager,f=n.windowResizeActioner,p=e.data,h=e.elements,m=(e.props,e.stageIndexes),v=e.sws;function b(){var t,n;p.i=!0,p.scrollbarWidth=function(){var e=document.createElement("div"),t=e.style,n=document.createElement("div");t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",n.style.width="100%",document.body.appendChild(e);var o=e.offsetWidth;e.appendChild(n);var i=n.offsetWidth;return document.body.removeChild(e),o-i}(),Q(e),h.container=document.createElement("div"),h.container.className="".concat(i,"container ").concat(a," ").concat(g),function(e){var t=e.elements;t.slideSwipingHoverer=document.createElement("div"),t.slideSwipingHoverer.className="".concat(i,"slide-swiping-hoverer ").concat(a," ").concat(d)}(e),X(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=e.props.sources,i=document.createElement("div");i.className="".concat(d," ").concat(a),n.container.appendChild(i),i.addEventListener("pointerdown",t.listener),n.sourceWrappersContainer=i;for(var r=0;r<o.length;r++)D(e,r)}(e),e.props.sources.length>1&&(n=(t=e).core.slideChangeFacade,B(t,n.changeToPrevious,"previous","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),B(t,n.changeToNext,"next","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")),function(e){for(var t=e.props.sources,n=e.resolve,o=n(L),i=n(H),r=n(R,[o,i]),s=0;s<t.length;s++)if("string"==typeof t[s]){var a=r.getTypeSetByClientForIndex(s);if(a)i.runActionsForSourceTypeAndIndex(a,s);else{var c=o.getSourceTypeFromLocalStorageByUrl(t[s]);c?i.runActionsForSourceTypeAndIndex(c,s):r.retrieveTypeWithXhrForIndex(s)}}else i.runActionsForSourceTypeAndIndex("custom",s)}(e),o.dispatch("onInit")}e.open=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=m.previous,a=m.current,d=m.next;m.current=n,p.i||S(e),u.updateStageIndexes(),p.i?(v.c(),v.a(),v.b(i),v.b(a),v.b(d),o.dispatch("onShow")):b(),c.displaySourcesWhichShouldBeDisplayed(),t.setSlideNumber(n+1),document.body.appendChild(h.container),document.documentElement.classList.add(l),s.addRecompense(),r.attachListeners(),f.runActions(),h.smw[m.current].n(),o.dispatch("onOpen")}}function ee(e,t,n){return(ee=te()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&ne(i,n.prototype),i}).apply(null,arguments)}function te(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ne(e,t){return(ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function oe(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function re(){for(var e=document.getElementsByTagName("a"),t=function(t){if(!e[t].hasAttribute("data-fslightbox"))return"continue";var n=e[t].hasAttribute("data-href")?e[t].getAttribute("data-href"):e[t].getAttribute("href");if(!n)return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'),"continue";var o=e[t].getAttribute("data-fslightbox");fsLightboxInstances[o]||(fsLightboxInstances[o]=new FsLightbox);var i=null;"#"===n.charAt(0)?(i=document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id"):i=n,fsLightboxInstances[o].props.sources.push(i),fsLightboxInstances[o].elements.a.push(e[t]);var r=fsLightboxInstances[o].props.sources.length-1;e[t].onclick=function(e){e.preventDefault(),fsLightboxInstances[o].open(r)},d("types","data-type"),d("videosPosters","data-video-poster"),d("customClasses","data-class"),d("customClasses","data-custom-class");for(var s=["href","data-fslightbox","data-href","data-type","data-video-poster","data-class","data-custom-class"],a=e[t].attributes,c=fsLightboxInstances[o].props.customAttributes,l=0;l<a.length;l++)if(-1===s.indexOf(a[l].name)&&"data-"===a[l].name.substr(0,5)){c[r]||(c[r]={});var u=a[l].name.substr(5);c[r][u]=a[l].value}function d(n,i){e[t].hasAttribute(i)&&(fsLightboxInstances[o].props[n][r]=e[t].getAttribute(i))}},n=0;n<e.length;n++)t(n);var o=Object.keys(fsLightboxInstances);window.fsLightbox=fsLightboxInstances[o[o.length-1]]}window.FsLightbox=function(){var e=this;this.props={sources:[],customAttributes:[],customClasses:[],types:[],videosPosters:[],slideDistance:.3},this.data={isFullscreenOpen:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},this.isl=[],this.sourcePointerProps={downScreenX:null,isPointering:!1,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={},this.elements={a:[],container:null,slideSwipingHoverer:null,smw:[],sourceWrappersContainer:null,sources:[],sourceAnimationWrappers:[]},this.componentsServices={setSlideNumber:function(){}},this.resolve=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(e),ee(t,oe(n))},this.collections={sourceLoadHandlers:[],sourcesRenderFunctions:[],sourceSizers:[]},this.core={eventsDispatcher:{},globalEventsController:{},lightboxCloser:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},sourcesPointerDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},this.fs={},this.sws={},Z(this),this.close=function(){return e.core.lightboxCloser.closeLightbox()}},window.fsLightboxInstances={},re(),window.refreshFsLightbox=function(){for(var e in fsLightboxInstances){var t=fsLightboxInstances[e].props;fsLightboxInstances[e]=new FsLightbox,fsLightboxInstances[e].props=t,fsLightboxInstances[e].props.sources=[],fsLightboxInstances[e].elements.a=[]}re()}}])}));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(13);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var definePropertyModule = __webpack_require__(12);
var createPropertyDescriptor = __webpack_require__(59);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(101);
var global = __webpack_require__(1);
var uncurryThis = __webpack_require__(2);
var isObject = __webpack_require__(11);
var createNonEnumerableProperty = __webpack_require__(26);
var hasOwn = __webpack_require__(10);
var shared = __webpack_require__(46);
var sharedKey = __webpack_require__(68);
var hiddenKeys = __webpack_require__(50);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7);
var bind = __webpack_require__(107);

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $includes = __webpack_require__(71).includes;
var fails = __webpack_require__(4);
var addToUnscopables = __webpack_require__(108);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var uncurryThis = __webpack_require__(2);
var notARegExp = __webpack_require__(111);
var requireObjectCoercible = __webpack_require__(22);
var toString = __webpack_require__(18);
var correctIsRegExpLogic = __webpack_require__(112);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

module.exports = global.Promise;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var NativePromiseConstructor = __webpack_require__(31);
var isCallable = __webpack_require__(3);
var isForced = __webpack_require__(52);
var inspectSource = __webpack_require__(37);
var wellKnownSymbol = __webpack_require__(5);
var IS_BROWSER = __webpack_require__(127);
var IS_PURE = __webpack_require__(25);
var V8_VERSION = __webpack_require__(62);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(14);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(98);
var requireObjectCoercible = __webpack_require__(22);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(14);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var isCallable = __webpack_require__(3);
var store = __webpack_require__(46);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__(105);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);

module.exports = uncurryThis([].slice);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(53);
var isCallable = __webpack_require__(3);
var classofRaw = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(21);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var call = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(97);
var createPropertyDescriptor = __webpack_require__(59);
var toIndexedObject = __webpack_require__(34);
var toPropertyKey = __webpack_require__(60);
var hasOwn = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(65);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(13);
var isCallable = __webpack_require__(3);
var isPrototypeOf = __webpack_require__(23);
var USE_SYMBOL_AS_UID = __webpack_require__(61);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(62);
var fails = __webpack_require__(4);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(25);
var store = __webpack_require__(46);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.22.8',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var defineGlobalProperty = __webpack_require__(47);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var isObject = __webpack_require__(11);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var hasOwn = __webpack_require__(10);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var isCallable = __webpack_require__(3);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(17);
var global = __webpack_require__(1);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var aCallable = __webpack_require__(14);
var NATIVE_BIND = __webpack_require__(21);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var global = __webpack_require__(1);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(6);
var uncurryThis = __webpack_require__(2);
var toString = __webpack_require__(18);
var regexpFlags = __webpack_require__(92);
var stickyHelpers = __webpack_require__(57);
var shared = __webpack_require__(45);
var create = __webpack_require__(74);
var getInternalState = __webpack_require__(27).get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(93);
var UNSUPPORTED_NCG = __webpack_require__(94);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(99);
var isSymbol = __webpack_require__(43);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(44);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var userAgent = __webpack_require__(24);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(22);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(4);
var createElement = __webpack_require__(48);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(4);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var isCallable = __webpack_require__(3);
var hasOwn = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(9);
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(49).CONFIGURABLE;
var inspectSource = __webpack_require__(37);
var InternalStateModule = __webpack_require__(27);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    defineProperty(value, 'name', { value: name, configurable: true });
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45);
var uid = __webpack_require__(64);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(70);
var enumBugKeys = __webpack_require__(51);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var hasOwn = __webpack_require__(10);
var toIndexedObject = __webpack_require__(34);
var indexOf = __webpack_require__(71).indexOf;
var hiddenKeys = __webpack_require__(50);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(104);
var lengthOfArrayLike = __webpack_require__(72);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(73);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(38);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(8);
var definePropertiesModule = __webpack_require__(109);
var enumBugKeys = __webpack_require__(51);
var hiddenKeys = __webpack_require__(50);
var html = __webpack_require__(75);
var documentCreateElement = __webpack_require__(48);
var sharedKey = __webpack_require__(68);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(13);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var classof = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(5);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var FUNCTION_NAME_EXISTS = __webpack_require__(49).EXISTS;
var uncurryThis = __webpack_require__(2);
var defineProperty = __webpack_require__(12).f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var getBuiltIn = __webpack_require__(13);
var apply = __webpack_require__(41);
var call = __webpack_require__(6);
var uncurryThis = __webpack_require__(2);
var fails = __webpack_require__(4);
var isArray = __webpack_require__(113);
var isCallable = __webpack_require__(3);
var isObject = __webpack_require__(11);
var isSymbol = __webpack_require__(43);
var arraySlice = __webpack_require__(39);
var NATIVE_SYMBOL = __webpack_require__(44);

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(53);
var defineBuiltIn = __webpack_require__(15);
var toString = __webpack_require__(114);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(115);
__webpack_require__(128);
__webpack_require__(133);
__webpack_require__(134);
__webpack_require__(135);
__webpack_require__(136);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(2);
var anObject = __webpack_require__(8);
var aPossiblePrototype = __webpack_require__(116);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(13);
var definePropertyModule = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var apply = __webpack_require__(41);
var bind = __webpack_require__(55);
var isCallable = __webpack_require__(3);
var hasOwn = __webpack_require__(10);
var fails = __webpack_require__(4);
var html = __webpack_require__(75);
var arraySlice = __webpack_require__(39);
var createElement = __webpack_require__(48);
var validateArgumentsLength = __webpack_require__(84);
var IS_IOS = __webpack_require__(85);
var IS_NODE = __webpack_require__(54);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(24);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(55);
var call = __webpack_require__(6);
var anObject = __webpack_require__(8);
var tryToString = __webpack_require__(36);
var isArrayIteratorMethod = __webpack_require__(129);
var lengthOfArrayLike = __webpack_require__(72);
var isPrototypeOf = __webpack_require__(23);
var getIterator = __webpack_require__(130);
var getIteratorMethod = __webpack_require__(88);
var iteratorClose = __webpack_require__(131);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(40);
var getMethod = __webpack_require__(35);
var Iterators = __webpack_require__(87);
var wellKnownSymbol = __webpack_require__(5);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var NativePromiseConstructor = __webpack_require__(31);
var checkCorrectnessOfIteration = __webpack_require__(132);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(32).CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var apply = __webpack_require__(41);
var isCallable = __webpack_require__(3);
var userAgent = __webpack_require__(24);
var arraySlice = __webpack_require__(39);
var validateArgumentsLength = __webpack_require__(84);

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return MSIE ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(fn, this, args);
    } : fn, timeout);
  } : scheduler;
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
module.exports = {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(6);
var hasOwn = __webpack_require__(10);
var isPrototypeOf = __webpack_require__(23);
var regExpFlags = __webpack_require__(92);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(8);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var global = __webpack_require__(1);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var global = __webpack_require__(1);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var exec = __webpack_require__(58);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 96 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var fails = __webpack_require__(4);
var classof = __webpack_require__(17);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(6);
var isObject = __webpack_require__(11);
var isSymbol = __webpack_require__(43);
var getMethod = __webpack_require__(35);
var ordinaryToPrimitive = __webpack_require__(100);
var wellKnownSymbol = __webpack_require__(5);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(6);
var isCallable = __webpack_require__(3);
var isObject = __webpack_require__(11);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var isCallable = __webpack_require__(3);
var inspectSource = __webpack_require__(37);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(10);
var ownKeys = __webpack_require__(103);
var getOwnPropertyDescriptorModule = __webpack_require__(42);
var definePropertyModule = __webpack_require__(12);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(13);
var uncurryThis = __webpack_require__(2);
var getOwnPropertyNamesModule = __webpack_require__(69);
var getOwnPropertySymbolsModule = __webpack_require__(106);
var anObject = __webpack_require__(8);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(38);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(2);
var aCallable = __webpack_require__(14);
var isObject = __webpack_require__(11);
var hasOwn = __webpack_require__(10);
var arraySlice = __webpack_require__(39);
var NATIVE_BIND = __webpack_require__(21);

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);
var create = __webpack_require__(74);
var defineProperty = __webpack_require__(12).f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(66);
var definePropertyModule = __webpack_require__(12);
var anObject = __webpack_require__(8);
var toIndexedObject = __webpack_require__(34);
var objectKeys = __webpack_require__(110);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(70);
var enumBugKeys = __webpack_require__(51);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(76);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(17);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(53);
var classof = __webpack_require__(40);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var IS_PURE = __webpack_require__(25);
var IS_NODE = __webpack_require__(54);
var global = __webpack_require__(1);
var call = __webpack_require__(6);
var defineBuiltIn = __webpack_require__(15);
var setPrototypeOf = __webpack_require__(81);
var setToStringTag = __webpack_require__(117);
var setSpecies = __webpack_require__(82);
var aCallable = __webpack_require__(14);
var isCallable = __webpack_require__(3);
var isObject = __webpack_require__(11);
var anInstance = __webpack_require__(118);
var speciesConstructor = __webpack_require__(119);
var task = __webpack_require__(83).set;
var microtask = __webpack_require__(122);
var hostReportErrors = __webpack_require__(125);
var perform = __webpack_require__(56);
var Queue = __webpack_require__(126);
var InternalStateModule = __webpack_require__(27);
var NativePromiseConstructor = __webpack_require__(31);
var PromiseConstructorDetection = __webpack_require__(32);
var newPromiseCapabilityModule = __webpack_require__(33);

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(3);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(12).f;
var hasOwn = __webpack_require__(10);
var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(23);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var aConstructor = __webpack_require__(120);
var wellKnownSymbol = __webpack_require__(5);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__(121);
var tryToString = __webpack_require__(36);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var fails = __webpack_require__(4);
var isCallable = __webpack_require__(3);
var classof = __webpack_require__(40);
var getBuiltIn = __webpack_require__(13);
var inspectSource = __webpack_require__(37);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var bind = __webpack_require__(55);
var getOwnPropertyDescriptor = __webpack_require__(42).f;
var macrotask = __webpack_require__(83).set;
var IS_IOS = __webpack_require__(85);
var IS_IOS_PEBBLE = __webpack_require__(123);
var IS_WEBOS_WEBKIT = __webpack_require__(124);
var IS_NODE = __webpack_require__(54);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(24);
var global = __webpack_require__(1);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(24);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = typeof window == 'object' && typeof Deno != 'object';


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var call = __webpack_require__(6);
var aCallable = __webpack_require__(14);
var newPromiseCapabilityModule = __webpack_require__(33);
var perform = __webpack_require__(56);
var iterate = __webpack_require__(86);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(89);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);
var Iterators = __webpack_require__(87);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(6);
var aCallable = __webpack_require__(14);
var anObject = __webpack_require__(8);
var tryToString = __webpack_require__(36);
var getIteratorMethod = __webpack_require__(88);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(6);
var anObject = __webpack_require__(8);
var getMethod = __webpack_require__(35);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var IS_PURE = __webpack_require__(25);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(32).CONSTRUCTOR;
var NativePromiseConstructor = __webpack_require__(31);
var getBuiltIn = __webpack_require__(13);
var isCallable = __webpack_require__(3);
var defineBuiltIn = __webpack_require__(15);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var call = __webpack_require__(6);
var aCallable = __webpack_require__(14);
var newPromiseCapabilityModule = __webpack_require__(33);
var perform = __webpack_require__(56);
var iterate = __webpack_require__(86);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(89);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var call = __webpack_require__(6);
var newPromiseCapabilityModule = __webpack_require__(33);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(32).CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var getBuiltIn = __webpack_require__(13);
var IS_PURE = __webpack_require__(25);
var NativePromiseConstructor = __webpack_require__(31);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(32).CONSTRUCTOR;
var promiseResolve = __webpack_require__(137);

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var isObject = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(33);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var global = __webpack_require__(1);
var setInterval = __webpack_require__(90).setInterval;

// ie9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var global = __webpack_require__(1);
var setTimeout = __webpack_require__(90).setTimeout;

// ie9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var global = __webpack_require__(1);
var uncurryThis = __webpack_require__(2);
var isForced = __webpack_require__(52);
var inheritIfRequired = __webpack_require__(141);
var createNonEnumerableProperty = __webpack_require__(26);
var getOwnPropertyNames = __webpack_require__(69).f;
var isPrototypeOf = __webpack_require__(23);
var isRegExp = __webpack_require__(76);
var toString = __webpack_require__(18);
var getRegExpFlags = __webpack_require__(91);
var stickyHelpers = __webpack_require__(57);
var proxyAccessor = __webpack_require__(142);
var defineBuiltIn = __webpack_require__(15);
var fails = __webpack_require__(4);
var hasOwn = __webpack_require__(10);
var enforceInternalState = __webpack_require__(27).enforce;
var setSpecies = __webpack_require__(82);
var wellKnownSymbol = __webpack_require__(5);
var UNSUPPORTED_DOT_ALL = __webpack_require__(93);
var UNSUPPORTED_NCG = __webpack_require__(94);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(global, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(3);
var isObject = __webpack_require__(11);
var setPrototypeOf = __webpack_require__(81);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(12).f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var MISSED_STICKY = __webpack_require__(57).MISSED_STICKY;
var classof = __webpack_require__(17);
var defineBuiltInAccessor = __webpack_require__(144);
var getInternalState = __webpack_require__(27).get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) {
  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var makeBuiltIn = __webpack_require__(67);
var defineProperty = __webpack_require__(12);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(49).PROPER;
var defineBuiltIn = __webpack_require__(15);
var anObject = __webpack_require__(8);
var $toString = __webpack_require__(18);
var fails = __webpack_require__(4);
var getRegExpFlags = __webpack_require__(91);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(41);
var call = __webpack_require__(6);
var uncurryThis = __webpack_require__(2);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(147);
var fails = __webpack_require__(4);
var anObject = __webpack_require__(8);
var isCallable = __webpack_require__(3);
var toIntegerOrInfinity = __webpack_require__(38);
var toLength = __webpack_require__(73);
var toString = __webpack_require__(18);
var requireObjectCoercible = __webpack_require__(22);
var advanceStringIndex = __webpack_require__(148);
var getMethod = __webpack_require__(35);
var getSubstitution = __webpack_require__(150);
var regExpExec = __webpack_require__(151);
var wellKnownSymbol = __webpack_require__(5);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(95);
var uncurryThis = __webpack_require__(2);
var defineBuiltIn = __webpack_require__(15);
var regexpExec = __webpack_require__(58);
var fails = __webpack_require__(4);
var wellKnownSymbol = __webpack_require__(5);
var createNonEnumerableProperty = __webpack_require__(26);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(149).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var toIntegerOrInfinity = __webpack_require__(38);
var toString = __webpack_require__(18);
var requireObjectCoercible = __webpack_require__(22);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var toObject = __webpack_require__(63);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(6);
var anObject = __webpack_require__(8);
var isCallable = __webpack_require__(3);
var classof = __webpack_require__(17);
var regexpExec = __webpack_require__(58);

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(30);

// CONCATENATED MODULE: ./src/core/preview/openModal.js
function openModal(modal) {
  // for (let i = 0; i < data.group_stories_list.length; i++) {
  //     const group_stories = data.group_stories_list[i]
  //     group_stories.classList.remove('active')
  // }
  modal.classList.add('sitestories__modal_open'); //data.group_stories_list[data.preview_index].classList.add('active')
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(78);

// CONCATENATED MODULE: ./src/adapters/storages/localStorage.js


var LStorage = {
  name: 'sitestories',
  setData: function setData(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  },
  getData: function getData() {
    var storage_data = JSON.parse(localStorage.getItem(this.name));

    if (!storage_data) {
      storage_data = {
        'stories': {}
      };
    }

    return storage_data;
  },
  setGroupData: function setGroupData(stories_id, group_id, prop, group_data) {
    var storage_data = this.getData();
    if (!storage_data['stories']) storage_data['stories'] = {};
    if (!storage_data['stories'][stories_id]) storage_data['stories'][stories_id] = {};
    if (!storage_data['stories'][stories_id]['groups']) storage_data['stories'][stories_id]['groups'] = {};
    if (!storage_data['stories'][stories_id]['groups'][group_id]) storage_data['stories'][stories_id]['groups'][group_id] = {};
    storage_data['stories'][stories_id]['groups'][group_id][prop] = group_data;
    this.setData(storage_data);
  },
  getGroupData: function getGroupData(stories_id, group_id, prop) {
    var storage_data = this.getData();
    if (!storage_data['stories']) storage_data['stories'] = {};
    if (!storage_data['stories'][stories_id]) storage_data['stories'][stories_id] = {};
    if (!storage_data['stories'][stories_id]['groups']) storage_data['stories'][stories_id]['groups'] = {};
    if (!storage_data['stories'][stories_id]['groups'][group_id]) storage_data['stories'][stories_id]['groups'][group_id] = {};
    if (!storage_data['stories'][stories_id]['groups'][group_id][prop]) storage_data['stories'][stories_id]['groups'][group_id][prop] = null;
    return storage_data['stories'][stories_id]['groups'][group_id][prop];
  }
};
// CONCATENATED MODULE: ./src/adapters/storages/storages.js

// CONCATENATED MODULE: ./src/use_cases/storage.js

// CONCATENATED MODULE: ./src/core/preview/saveViewStoriesGroup.js

function saveViewStoriesGroup(storiesId, groupId) {
  LStorage.setGroupData(storiesId, groupId, 'viewed', true);
}
// CONCATENATED MODULE: ./src/core/preview/updateStatePreview.js

function updateStatePreview(preview, storiesId, groupId) {
  var isViewedGroup = LStorage.getGroupData(storiesId, groupId, 'viewed');

  if (isViewedGroup) {
    preview.classList.add('sitestories__preview_viewed');
  }
}
// CONCATENATED MODULE: ./src/core/modal/modal.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal(modalEl) {
    _classCallCheck(this, Modal);

    this.el = modalEl;
    this.eventListeners = {};
  }

  _createClass(Modal, [{
    key: "open",
    value: function open() {
      var self = this;
      document.body.classList.add('sitestories_no-scroll');
      this.el.classList.add('sitestories__modal_start-open');
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          self.el.classList.remove('sitestories__modal_start-open');
          self.el.classList.add('sitestories__modal_open');
        });
      });
    }
  }, {
    key: "close",
    value: function close() {
      var self = this;
      this.el.classList.add('sitestories__modal_start-close');
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          self.el.classList.remove('sitestories__modal_start-close');
          self.el.classList.remove('sitestories__modal_open');
          self.el.classList.add('sitestories__modal_close');
        });
      });

      function handler(e) {
        self.el.classList.remove('sitestories__modal_close');
        document.body.classList.remove('sitestories_no-scroll');
        /* Event: close */

        if ('close' in self.eventListeners) self.eventListeners.close();
        self.el.removeEventListener('transitionend', handler);
      }

      this.el.addEventListener('transitionend', handler);
    }
  }, {
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }]);

  return Modal;
}();
// CONCATENATED MODULE: ./src/core/modal/modalBackground.js


function modalBackground_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modalBackground_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modalBackground_createClass(Constructor, protoProps, staticProps) { if (protoProps) modalBackground_defineProperties(Constructor.prototype, protoProps); if (staticProps) modalBackground_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var ModalBackground = /*#__PURE__*/function () {
  function ModalBackground(modal) {
    modalBackground_classCallCheck(this, ModalBackground);

    this.modalEl = modal;
    this.video = this.modalEl.querySelector('.sitestories__modal-overlay-video');
  }

  modalBackground_createClass(ModalBackground, [{
    key: "getInstance",
    value: function getInstance() {
      if (_classStaticPrivateFieldSpecGet(ModalBackground, ModalBackground, _instance) === null) {
        _classStaticPrivateFieldSpecSet(ModalBackground, ModalBackground, _instance, this);
      }

      return _classStaticPrivateFieldSpecGet(ModalBackground, ModalBackground, _instance);
    }
  }, {
    key: "setBackground",
    value: function setBackground(src, type) {
      var videoModalOverlay = this.modalEl.querySelector('.sitestories__modal-overlay-video');
      var imgModalOverlay = this.modalEl.querySelector('.sitestories__modal-overlay-img');
      imgModalOverlay.classList.remove('sitestories__modal-overlay-img_active');
      videoModalOverlay.classList.remove('sitestories__modal-overlay-video_active');

      switch (type) {
        case 'img':
          imgModalOverlay.src = src;
          imgModalOverlay.classList.add('sitestories__modal-overlay-img_active');
          imgModalOverlay.classList.remove('sitestories__modal-overlay-img_anim');
          window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
              imgModalOverlay.classList.add('sitestories__modal-overlay-img_anim');
            });
          });
          break;

        case 'video':
          var isPlaying = videoModalOverlay.currentTime > 0 && !videoModalOverlay.paused && !videoModalOverlay.ended && videoModalOverlay.readyState > videoModalOverlay.HAVE_CURRENT_DATA;

          if (!isPlaying) {
            videoModalOverlay.src = src;
            videoModalOverlay.classList.add('sitestories__modal-overlay-video_active');
            videoModalOverlay.classList.remove('sitestories__modal-overlay-video_anim');
            window.requestAnimationFrame(function () {
              window.requestAnimationFrame(function () {
                videoModalOverlay.classList.add('sitestories__modal-overlay-video_anim');
              });
            });
          }

          break;

        default:
          console.log('[sitestories]: Unknown type story' + type);
          break;
      }
    }
  }, {
    key: "playVideo",
    value: function playVideo() {
      var isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > this.video.HAVE_CURRENT_DATA;

      if (!isPlaying) {
        this.video.play();
      }
    }
  }, {
    key: "pauseVideo",
    value: function pauseVideo() {
      var isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > this.video.HAVE_CURRENT_DATA;

      if (isPlaying) {
        this.video.pause();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.pauseVideo();
      this.video.currentTime = 0;
    }
  }]);

  return ModalBackground;
}();
var _instance = {
  writable: true,
  value: null
};
// CONCATENATED MODULE: ./src/core/group/groupStories.js


function groupStories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function groupStories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function groupStories_createClass(Constructor, protoProps, staticProps) { if (protoProps) groupStories_defineProperties(Constructor.prototype, protoProps); if (staticProps) groupStories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GroupStories = /*#__PURE__*/function () {
  function GroupStories(groupEl) {
    groupStories_classCallCheck(this, GroupStories);

    this.el = groupEl;
    this.eventListeners = {};
    this.timeoutTouchStart = null;
    this.timeTouchStart = 0;
    this.timeTouchEnd = 0; //this.el.prototype = this
  }

  groupStories_createClass(GroupStories, [{
    key: "init",
    value: function init() {
      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.addEventListener(event, this.eventListeners[event]);
        }
      }
    }
  }, {
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.removeEventListener(event, this.eventListeners[event], false);
        }
      }

      this.eventListeners = {};
    }
  }]);

  return GroupStories;
}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(16);

// CONCATENATED MODULE: ./src/core/group/animationBullets.js





function animationBullets_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function animationBullets_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function animationBullets_createClass(Constructor, protoProps, staticProps) { if (protoProps) animationBullets_defineProperties(Constructor.prototype, protoProps); if (staticProps) animationBullets_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function animationBullets_classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { animationBullets_classCheckPrivateStaticAccess(receiver, classConstructor); animationBullets_classCheckPrivateStaticFieldDescriptor(descriptor, "set"); animationBullets_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function animationBullets_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function animationBullets_classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { animationBullets_classCheckPrivateStaticAccess(receiver, classConstructor); animationBullets_classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return animationBullets_classApplyDescriptorGet(receiver, descriptor); }

function animationBullets_classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function animationBullets_classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function animationBullets_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var AnimationBullets = /*#__PURE__*/function () {
  function AnimationBullets() {
    animationBullets_classCallCheck(this, AnimationBullets);

    this.intervalFunc = '';
    this.distance = 0;
  }

  animationBullets_createClass(AnimationBullets, [{
    key: "getInstance",
    value: function getInstance() {
      if (animationBullets_classStaticPrivateFieldSpecGet(AnimationBullets, AnimationBullets, animationBullets_instance) === null) {
        animationBullets_classStaticPrivateFieldSpecSet(AnimationBullets, AnimationBullets, animationBullets_instance, this);
      }

      return animationBullets_classStaticPrivateFieldSpecGet(AnimationBullets, AnimationBullets, animationBullets_instance);
    }
  }, {
    key: "start",
    value: function start(el, timeMS) {
      return this._startAnimation(el, timeMS, 0);
    }
  }, {
    key: "resume",
    value: function resume(el, timeMS) {
      return this._startAnimation(el, timeMS, this.distance);
    }
  }, {
    key: "stop",
    value: function stop(el) {
      clearInterval(this.intervalFunc);
      el.style.transform = "scaleX(" + this.distance + ")";
    }
  }, {
    key: "reset",
    value: function reset() {
      this.distance = 0;
      clearInterval(this.intervalFunc);
    }
  }, {
    key: "updateState",
    value: function updateState(bullets, slideActiveIndex) {
      for (var bulletIndex = 0; bulletIndex < bullets.length; bulletIndex++) {
        var bulletAnimEl = bullets[bulletIndex].querySelector('.sitestories-story-pagination__bullet_anim');

        if (bulletIndex >= slideActiveIndex) {
          bulletAnimEl.style.transform = "scaleX(0)";
        } else {
          bulletAnimEl.style.transform = "scaleX(1)";
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.reset();

      animationBullets_classStaticPrivateFieldSpecSet(AnimationBullets, AnimationBullets, animationBullets_instance, null);
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation(el, timeMS, distance) {
      var _this = this;

      clearInterval(this.intervalFunc);
      this.distance = distance;
      var timeSEC = timeMS / 1000;
      var self = this;
      return new Promise(function (resolve) {
        var intervalFunc = setInterval(function () {
          self.distance += 1 / (100 * timeSEC);
          el.style.transform = "scaleX(" + self.distance + ")";

          if (self.distance >= 1) {
            resolve();
            clearInterval(intervalFunc);
          }
        }, 10);
        _this.intervalFunc = intervalFunc;
      });
    }
  }]);

  return AnimationBullets;
}();
var animationBullets_instance = {
  writable: true,
  value: null
};
// CONCATENATED MODULE: ./src/core/group/statesIconsPlay.js


function statesIconsPlay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function statesIconsPlay_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function statesIconsPlay_createClass(Constructor, protoProps, staticProps) { if (protoProps) statesIconsPlay_defineProperties(Constructor.prototype, protoProps); if (staticProps) statesIconsPlay_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function statesIconsPlay_classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { statesIconsPlay_classCheckPrivateStaticAccess(receiver, classConstructor); statesIconsPlay_classCheckPrivateStaticFieldDescriptor(descriptor, "set"); statesIconsPlay_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function statesIconsPlay_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function statesIconsPlay_classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { statesIconsPlay_classCheckPrivateStaticAccess(receiver, classConstructor); statesIconsPlay_classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return statesIconsPlay_classApplyDescriptorGet(receiver, descriptor); }

function statesIconsPlay_classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function statesIconsPlay_classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function statesIconsPlay_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var StatesIconsPlay = /*#__PURE__*/function () {
  function StatesIconsPlay(wrapperIcons) {
    statesIconsPlay_classCallCheck(this, StatesIconsPlay);

    this.wrapperIcons = wrapperIcons;
    this.playBLockEl = this.wrapperIcons.querySelector('.sitestories-story-play');
  }

  statesIconsPlay_createClass(StatesIconsPlay, [{
    key: "getInstance",
    value: function getInstance() {
      if (statesIconsPlay_classStaticPrivateFieldSpecGet(StatesIconsPlay, StatesIconsPlay, statesIconsPlay_instance) === null) {
        statesIconsPlay_classStaticPrivateFieldSpecSet(StatesIconsPlay, StatesIconsPlay, statesIconsPlay_instance, this);
      }

      return statesIconsPlay_classStaticPrivateFieldSpecGet(StatesIconsPlay, StatesIconsPlay, statesIconsPlay_instance);
    }
  }, {
    key: "play",
    value: function play() {
      this.playBLockEl.setAttribute('data-state', 'pause'); // const iconPlay = this.wrapperIcons.querySelector('.sitestories-story-play__icon')
      // const iconPause = this.wrapperIcons.querySelector('.sitestories-story-pause__icon')
      // iconPlay.classList.remove('sitestories-story-play__icon_show')
      // iconPause.classList.add('sitestories-story-pause__icon_show')

      statesIconsPlay_classStaticPrivateFieldSpecSet(StatesIconsPlay, StatesIconsPlay, _isPlaying, true);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.playBLockEl.setAttribute('data-state', 'play'); // const iconPlay = this.wrapperIcons.querySelector('.sitestories-story-play__icon')
      // const iconPause = this.wrapperIcons.querySelector('.sitestories-story-pause__icon')
      // iconPlay.classList.add('sitestories-story-play__icon_show')
      // iconPause.classList.remove('sitestories-story-pause__icon_show')

      statesIconsPlay_classStaticPrivateFieldSpecSet(StatesIconsPlay, StatesIconsPlay, _isPlaying, false);
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return statesIconsPlay_classStaticPrivateFieldSpecGet(StatesIconsPlay, StatesIconsPlay, _isPlaying);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      statesIconsPlay_classStaticPrivateFieldSpecSet(StatesIconsPlay, StatesIconsPlay, statesIconsPlay_instance, null);
    }
  }]);

  return StatesIconsPlay;
}();
var statesIconsPlay_instance = {
  writable: true,
  value: null
};
var _isPlaying = {
  writable: true,
  value: null
};
// CONCATENATED MODULE: ./src/core/group/statesSoundIcons.js


function statesSoundIcons_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function statesSoundIcons_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function statesSoundIcons_createClass(Constructor, protoProps, staticProps) { if (protoProps) statesSoundIcons_defineProperties(Constructor.prototype, protoProps); if (staticProps) statesSoundIcons_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function statesSoundIcons_classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { statesSoundIcons_classCheckPrivateStaticAccess(receiver, classConstructor); statesSoundIcons_classCheckPrivateStaticFieldDescriptor(descriptor, "set"); statesSoundIcons_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function statesSoundIcons_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function statesSoundIcons_classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { statesSoundIcons_classCheckPrivateStaticAccess(receiver, classConstructor); statesSoundIcons_classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return statesSoundIcons_classApplyDescriptorGet(receiver, descriptor); }

function statesSoundIcons_classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function statesSoundIcons_classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function statesSoundIcons_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var StatesSoundIcons = /*#__PURE__*/function () {
  function StatesSoundIcons(wrapperIcons) {
    statesSoundIcons_classCallCheck(this, StatesSoundIcons);

    this.wrapperIcons = wrapperIcons;
    this.soundBLockEl = this.wrapperIcons.querySelector('.sitestories-story-sound');
  }

  statesSoundIcons_createClass(StatesSoundIcons, [{
    key: "getInstance",
    value: function getInstance() {
      if (statesSoundIcons_classStaticPrivateFieldSpecGet(StatesSoundIcons, StatesSoundIcons, statesSoundIcons_instance) === null) {
        statesSoundIcons_classStaticPrivateFieldSpecSet(StatesSoundIcons, StatesSoundIcons, statesSoundIcons_instance, this);
      }

      return statesSoundIcons_classStaticPrivateFieldSpecGet(StatesSoundIcons, StatesSoundIcons, statesSoundIcons_instance);
    }
  }, {
    key: "enable",
    value: function enable() {
      this.soundBLockEl.setAttribute('data-state', 'enable');

      statesSoundIcons_classStaticPrivateFieldSpecSet(StatesSoundIcons, StatesSoundIcons, _isSoundOn, true);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.soundBLockEl.setAttribute('data-state', 'disable');

      statesSoundIcons_classStaticPrivateFieldSpecSet(StatesSoundIcons, StatesSoundIcons, _isSoundOn, false);
    }
  }, {
    key: "isSoundOn",
    value: function isSoundOn() {
      return statesSoundIcons_classStaticPrivateFieldSpecGet(StatesSoundIcons, StatesSoundIcons, _isSoundOn);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      statesSoundIcons_classStaticPrivateFieldSpecSet(StatesSoundIcons, StatesSoundIcons, statesSoundIcons_instance, null);
    }
  }]);

  return StatesSoundIcons;
}();
var statesSoundIcons_instance = {
  writable: true,
  value: null
};
var _isSoundOn = {
  writable: true,
  value: null
};
// CONCATENATED MODULE: ./src/core/group/groupControlsElems.js



function groupControlsElems_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function groupControlsElems_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function groupControlsElems_createClass(Constructor, protoProps, staticProps) { if (protoProps) groupControlsElems_defineProperties(Constructor.prototype, protoProps); if (staticProps) groupControlsElems_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function groupControlsElems_classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { groupControlsElems_classCheckPrivateStaticAccess(receiver, classConstructor); groupControlsElems_classCheckPrivateStaticFieldDescriptor(descriptor, "set"); groupControlsElems_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function groupControlsElems_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function groupControlsElems_classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { groupControlsElems_classCheckPrivateStaticAccess(receiver, classConstructor); groupControlsElems_classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return groupControlsElems_classApplyDescriptorGet(receiver, descriptor); }

function groupControlsElems_classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function groupControlsElems_classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function groupControlsElems_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var GroupControlsElems = /*#__PURE__*/function () {
  function GroupControlsElems(wrapperControlsElems) {
    groupControlsElems_classCallCheck(this, GroupControlsElems);

    this.wrapperControlsElems = wrapperControlsElems;
    this.elems = this.wrapperControlsElems.querySelectorAll('.sitestories-control-elem');
  }

  groupControlsElems_createClass(GroupControlsElems, [{
    key: "getInstance",
    value: function getInstance() {
      if (groupControlsElems_classStaticPrivateFieldSpecGet(GroupControlsElems, GroupControlsElems, groupControlsElems_instance) === null) {
        groupControlsElems_classStaticPrivateFieldSpecSet(GroupControlsElems, GroupControlsElems, groupControlsElems_instance, this);
      }

      return groupControlsElems_classStaticPrivateFieldSpecGet(GroupControlsElems, GroupControlsElems, groupControlsElems_instance);
    }
  }, {
    key: "show",
    value: function show() {
      for (var i = 0; i < this.elems.length; i++) {
        var elem = this.elems[i];
        elem.classList.remove('sitestories-control-elem_hide');
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      for (var i = 0; i < this.elems.length; i++) {
        var elem = this.elems[i];
        elem.classList.add('sitestories-control-elem_hide');
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      var _loop = function _loop(i) {
        var elem = _this.elems[i];
        elem.style.transition = 'none';
        elem.classList.remove('sitestories-control-elem_hide');
        setTimeout(function () {
          elem.style.transition = '';
        }, 1);
      };

      for (var i = 0; i < this.elems.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      groupControlsElems_classStaticPrivateFieldSpecSet(GroupControlsElems, GroupControlsElems, groupControlsElems_instance, null);
    }
  }]);

  return GroupControlsElems;
}();
var groupControlsElems_instance = {
  writable: true,
  value: null
};
// CONCATENATED MODULE: ./src/core/group/groupStoriesFacade.js


function groupStoriesFacade_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function groupStoriesFacade_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function groupStoriesFacade_createClass(Constructor, protoProps, staticProps) { if (protoProps) groupStoriesFacade_defineProperties(Constructor.prototype, protoProps); if (staticProps) groupStoriesFacade_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var groupStoriesFacade_GroupStoriesFacade = /*#__PURE__*/function () {
  function GroupStoriesFacade(groupEl) {
    groupStoriesFacade_classCallCheck(this, GroupStoriesFacade);

    this.control = new GroupStories(groupEl);
    this.animationBullets = new AnimationBullets(groupEl);
    this.statesIconsPlay = new StatesIconsPlay(groupEl);
    this.statesSoundIcons = new StatesSoundIcons(groupEl);
    this.controlsElems = new GroupControlsElems(groupEl);
  }

  groupStoriesFacade_createClass(GroupStoriesFacade, [{
    key: "getControl",
    value: function getControl() {
      return this.control;
    }
  }, {
    key: "getAnimBullets",
    value: function getAnimBullets() {
      return this.animationBullets;
    }
  }, {
    key: "getStatesIconsPlay",
    value: function getStatesIconsPlay() {
      return this.statesIconsPlay;
    }
  }, {
    key: "getStatesSoundIcons",
    value: function getStatesSoundIcons() {
      return this.statesSoundIcons;
    }
  }, {
    key: "getControlsElems",
    value: function getControlsElems() {
      return this.controlsElems;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.control.destroy();
      this.animationBullets.destroy();
      this.control = null;
      this.animationBullets = null;
      this.statesIconsPlay = null;
      this.statesSoundIcons = null;
      this.controlsElems = null;
    }
  }]);

  return GroupStoriesFacade;
}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__(143);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(146);

// CONCATENATED MODULE: ./src/core/story/story.js







function story_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function story_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function story_createClass(Constructor, protoProps, staticProps) { if (protoProps) story_defineProperties(Constructor.prototype, protoProps); if (staticProps) story_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Story = /*#__PURE__*/function () {
  function Story(params) {
    story_classCallCheck(this, Story);

    this.wrapper = params.wrapper;
    this.el = this.wrapper.querySelector('.sitestories-story');
    this.type = this.el.getAttribute('data-type');
    this.bullets = params.bullets;
    this.slideActiveIndex = params.slideActiveIndex;
    this.activeBullet = params.activeBullet;
    this.eventListeners = {};
    this.typeStory = this.getTypeStory();
    this.srcMedia = this.getSrcMedia();
    this.speedAutoplayMS = this.wrapper.getAttribute('data-speed');
    this.bulletAnimEl = this.activeBullet.querySelector('.sitestories-story-pagination__bullet_anim');
  }

  story_createClass(Story, [{
    key: "active",
    value: function active() {
      /* Event: active */
      if ('active' in this.eventListeners) this.eventListeners.active(this);
    }
  }, {
    key: "reset",
    value: function reset() {
      /* Event: reset */
      if ('reset' in this.eventListeners) this.eventListeners.reset(this);
    }
  }, {
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }, {
    key: "getSrcMedia",
    value: function getSrcMedia() {
      var media = this.el.querySelector('#story-media');
      return media.children[0].src;
    }
  }, {
    key: "getTypeStory",
    value: function getTypeStory() {
      var media = this.el.querySelector('#story-media');

      if (media.getAttribute('data-type')) {
        return media.getAttribute('data-type');
      }

      switch (media.children[0].nodeName) {
        case 'IMG':
          return 'img';

        case 'VIDEO':
          return 'video';

        default:
          console.log('[sitestories]: unknown media node name' + media.children[0].nodeName);
      }
    }
  }, {
    key: "activeAnimate",
    value: function activeAnimate() {
      var animElems = this.el.querySelectorAll('[data-anim]');

      for (var i = 0; i < animElems.length; i++) {
        var animEl = animElems[i];
        var anim = animEl.getAttribute('data-anim');
        animEl.className += ' ' + anim;
      }
    }
  }, {
    key: "resetAnimate",
    value: function resetAnimate() {
      var animElems = this.el.querySelectorAll('[data-anim]');

      for (var i = 0; i < animElems.length; i++) {
        var animEl = animElems[i];
        var anim = animEl.getAttribute('data-anim');
        var re = new RegExp(' ' + anim, 'gi');
        animEl.className = animEl.className.replace(re, '');
      }
    }
  }]);

  return Story;
}();
// CONCATENATED MODULE: ./src/core/story/storyVideoManager.js


function storyVideoManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storyVideoManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storyVideoManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) storyVideoManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) storyVideoManager_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function storyVideoManager_classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { storyVideoManager_classCheckPrivateStaticAccess(receiver, classConstructor); storyVideoManager_classCheckPrivateStaticFieldDescriptor(descriptor, "set"); storyVideoManager_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function storyVideoManager_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function storyVideoManager_classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { storyVideoManager_classCheckPrivateStaticAccess(receiver, classConstructor); storyVideoManager_classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return storyVideoManager_classApplyDescriptorGet(receiver, descriptor); }

function storyVideoManager_classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function storyVideoManager_classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function storyVideoManager_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var StoryVideoManager = /*#__PURE__*/function () {
  function StoryVideoManager(story) {
    storyVideoManager_classCallCheck(this, StoryVideoManager);

    this.el = story;
    this.video = this.el.querySelector('.sitestories-story__video');
  }

  storyVideoManager_createClass(StoryVideoManager, [{
    key: "getInstance",
    value: function getInstance() {
      if (storyVideoManager_classStaticPrivateFieldSpecGet(StoryVideoManager, StoryVideoManager, storyVideoManager_instance) === null) {
        storyVideoManager_classStaticPrivateFieldSpecSet(StoryVideoManager, StoryVideoManager, storyVideoManager_instance, this);
      }

      return storyVideoManager_classStaticPrivateFieldSpecGet(StoryVideoManager, StoryVideoManager, storyVideoManager_instance);
    }
  }, {
    key: "play",
    value: function play() {
      if (!this.video) return;
      var isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > this.video.HAVE_CURRENT_DATA;

      if (!isPlaying) {
        this.video.play();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!this.video) return;
      var isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > this.video.HAVE_CURRENT_DATA;

      if (isPlaying) {
        this.video.pause();
      }
    }
  }, {
    key: "enableSound",
    value: function enableSound() {
      if (!this.video) return;
      this.video.muted = false;
    }
  }, {
    key: "disableSound",
    value: function disableSound() {
      if (!this.video) return;
      this.video.muted = true;
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.video) {
        this.pause();
        this.video.currentTime = 0;
      }
    }
  }]);

  return StoryVideoManager;
}();
var storyVideoManager_instance = {
  writable: true,
  value: null
};
// CONCATENATED MODULE: ./src/core/story/storyProduct.js


function storyProduct_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storyProduct_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storyProduct_createClass(Constructor, protoProps, staticProps) { if (protoProps) storyProduct_defineProperties(Constructor.prototype, protoProps); if (staticProps) storyProduct_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var StoryProduct = /*#__PURE__*/function () {
  function StoryProduct(el) {
    storyProduct_classCallCheck(this, StoryProduct);

    this.el = el;
    this.action = this.el.getAttribute('data-action');
    this.eventListeners = {};
    this.sliderImages = null;
  }

  storyProduct_createClass(StoryProduct, [{
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }, {
    key: "init",
    value: function init() {
      if ('init' in this.eventListeners) {
        this.eventListeners.init();
      }

      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.addEventListener(event, this.eventListeners[event]);
        }
      }
    }
  }, {
    key: "setSliderImages",
    value: function setSliderImages(slider) {
      this.sliderImages = slider;
    }
  }, {
    key: "initSliderImages",
    value: function initSliderImages(params) {
      this.sliderImages.init(params);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.removeEventListener(event, this.eventListeners[event], false);
        }
      }

      if (this.sliderImages) this.sliderImages.destroy();
      this.eventListeners = {};
    }
  }]);

  return StoryProduct;
}();
// CONCATENATED MODULE: ./src/core/story/storyProductCollection.js


function storyProductCollection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storyProductCollection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storyProductCollection_createClass(Constructor, protoProps, staticProps) { if (protoProps) storyProductCollection_defineProperties(Constructor.prototype, protoProps); if (staticProps) storyProductCollection_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var StoryProductCollection = /*#__PURE__*/function () {
  function StoryProductCollection(el) {
    storyProductCollection_classCallCheck(this, StoryProductCollection);

    this.el = el;
    this.eventListeners = {};
    this.slider = null;
  }

  storyProductCollection_createClass(StoryProductCollection, [{
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }, {
    key: "init",
    value: function init() {
      if ('init' in this.eventListeners) {
        this.eventListeners.init();
      }

      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.addEventListener(event, this.eventListeners[event]);
        }
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.el.classList.add('sitestories-story-product-card_active');
    }
  }, {
    key: "close",
    value: function close() {
      this.el.classList.remove('sitestories-story-product-card_active');
    }
  }, {
    key: "setSlider",
    value: function setSlider(slider) {
      this.slider = slider;
    }
  }, {
    key: "initSlider",
    value: function initSlider(params) {
      this.slider.init(params);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if ('destroy' in this.eventListeners) {
        this.eventListeners.destroy();
      }

      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.removeEventListener(event, this.eventListeners[event], false);
        }
      }

      this.slider.destroy();
      this.eventListeners = {};
    }
  }]);

  return StoryProductCollection;
}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(19);

// CONCATENATED MODULE: ./src/core/story/storyTimePassed.js



function storyTimePassed_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storyTimePassed_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storyTimePassed_createClass(Constructor, protoProps, staticProps) { if (protoProps) storyTimePassed_defineProperties(Constructor.prototype, protoProps); if (staticProps) storyTimePassed_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var StoryTimePassed = /*#__PURE__*/function () {
  function StoryTimePassed(wrapperEl, storyEl, lang) {
    storyTimePassed_classCallCheck(this, StoryTimePassed);

    this.wrapperEl = wrapperEl;
    this.storyEl = storyEl;
    this.timePublic = this.storyEl.getAttribute('data-time-public');
    this.el = this.wrapperEl.querySelector('#story-time-passed');
    this.lang = lang;

    if (this.el) {
      if (this.timePublic) {
        this.init();
        this.el.classList.remove('sitestories-time-passed_hide');
      } else {
        this.el.classList.add('sitestories-time-passed_hide');
      }
    }
  }

  storyTimePassed_createClass(StoryTimePassed, [{
    key: "init",
    value: function init() {
      this.el.innerHTML = this.timeSince(new Date(this.timePublic));
    }
  }, {
    key: "timeSince",
    value: function timeSince(date) {
      var seconds = Math.floor((new Date() - date) / 1000);
      var interval = seconds / 31536000;
      var textTimeLang = this.getTextTimeLang();
      var textTime;

      if (interval > 1) {
        interval = Math.floor(interval);

        if (interval <= 1) {
          textTime = textTimeLang['year'][this.lang];
        }

        if (interval > 1 && interval < 5) {
          textTime = textTimeLang['years'][this.lang];
        }

        if (interval >= 5) {
          textTime = textTimeLang['years_5'][this.lang];
        }

        return interval + ' ' + textTime;
      }

      interval = seconds / 2592000;

      if (interval > 1) {
        interval = Math.floor(interval);

        if (interval <= 1) {
          textTime = textTimeLang['month'][this.lang];
        }

        if (interval > 1 && interval < 5) {
          textTime = textTimeLang['months'][this.lang];
        }

        if (interval >= 5) {
          textTime = textTimeLang['months_5'][this.lang];
        }

        return interval + ' ' + textTime;
      }

      interval = seconds / 86400;

      if (interval > 1) {
        interval = Math.floor(interval);

        if (interval <= 1) {
          textTime = textTimeLang['day'][this.lang];
        }

        if (interval > 1 && interval < 5) {
          textTime = textTimeLang['days'][this.lang];
        }

        if (interval >= 5) {
          textTime = textTimeLang['days_5'][this.lang];
        }

        return interval + ' ' + textTime;
      }

      interval = seconds / 3600;

      if (interval > 1) {
        interval = Math.floor(interval);

        if (interval <= 1) {
          textTime = textTimeLang['hour'][this.lang];
        }

        if (interval > 1 && interval < 5) {
          textTime = textTimeLang['hours'][this.lang];
        }

        if (interval >= 5) {
          textTime = textTimeLang['hours_5'][this.lang];
        }

        return interval + ' ' + textTime;
      }

      interval = seconds / 60;

      if (interval > 1) {
        interval = Math.floor(interval);

        if (interval <= 1) {
          textTime = textTimeLang['minute'][this.lang];
        }

        if (interval > 1 && interval < 5) {
          textTime = textTimeLang['minutes'][this.lang];
        }

        if (interval >= 5) {
          textTime = textTimeLang['minutes_5'][this.lang];
        }

        return interval + ' ' + textTime;
      }

      interval = Math.floor(interval);

      if (interval <= 1) {
        textTime = textTimeLang['second'][this.lang];
      }

      if (interval > 1 && interval < 5) {
        textTime = textTimeLang['seconds'][this.lang];
      }

      if (interval >= 5) {
        textTime = textTimeLang['seconds_5'][this.lang];
      }

      return interval + ' ' + textTime;
    }
  }, {
    key: "getTextTimeLang",
    value: function getTextTimeLang() {
      return {
        "year": {
          "en": "year ago",
          "ru": "год назад"
        },
        "years": {
          "en": "years ago",
          "ru": "года назад"
        },
        "years_5": {
          "en": "years ago",
          "ru": "лет назад"
        },
        "month": {
          "en": "month ago",
          "ru": "месяц назад"
        },
        "months": {
          "en": "months ago",
          "ru": "месяца назад"
        },
        "months_5": {
          "en": "months ago",
          "ru": "месяцев назад"
        },
        "day": {
          "en": "day ago",
          "ru": "день назад"
        },
        "days": {
          "en": "days ago",
          "ru": "дня назад"
        },
        "days_5": {
          "en": "days ago",
          "ru": "дней назад"
        },
        "hour": {
          "en": "hour ago",
          "ru": "час назад"
        },
        "hours": {
          "en": "hours ago",
          "ru": "часа назад"
        },
        "hours_5": {
          "en": "hours ago",
          "ru": "часов назад"
        },
        "minute": {
          "en": "minute ago",
          "ru": "минута назад"
        },
        "minutes": {
          "en": "minutes ago",
          "ru": "минуты назад"
        },
        "minutes_5": {
          "en": "minutes ago",
          "ru": "минут назад"
        },
        "second": {
          "en": "second ago",
          "ru": "секунда назад"
        },
        "seconds": {
          "en": "seconds ago",
          "ru": "секунды назад"
        },
        "seconds_5": {
          "en": "seconds ago",
          "ru": "секунд назад"
        }
      };
    }
  }]);

  return StoryTimePassed;
}();
// CONCATENATED MODULE: ./src/core/story/storyProductCard.js


function storyProductCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storyProductCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storyProductCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) storyProductCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) storyProductCard_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var StoryProductCard = /*#__PURE__*/function () {
  function StoryProductCard(el) {
    storyProductCard_classCallCheck(this, StoryProductCard);

    this.el = el;
    this.type = this.el.getAttribute('data-type');
    this.eventListeners = {};
    this.slider = null;
  }

  storyProductCard_createClass(StoryProductCard, [{
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }, {
    key: "init",
    value: function init() {
      if ('init' in this.eventListeners) {
        this.eventListeners.init();
      }

      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.addEventListener(event, this.eventListeners[event]);
        }
      }
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.el.setAttribute('data-state', state);
    }
  }, {
    key: "setSlider",
    value: function setSlider(slider) {
      this.slider = slider;
    }
  }, {
    key: "initSlider",
    value: function initSlider(params) {
      this.slider.init(params);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.removeEventListener(event, this.eventListeners[event], false);
        }
      }

      this.setState('hide');
      this.eventListeners = {};

      if (this.slider !== null) {
        this.slider.destroy();
      }
    }
  }]);

  return StoryProductCard;
}();
// CONCATENATED MODULE: ./src/core/story/storyProductPreview.js


function storyProductPreview_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storyProductPreview_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storyProductPreview_createClass(Constructor, protoProps, staticProps) { if (protoProps) storyProductPreview_defineProperties(Constructor.prototype, protoProps); if (staticProps) storyProductPreview_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var StoryProductPreview = /*#__PURE__*/function () {
  function StoryProductPreview(el) {
    storyProductPreview_classCallCheck(this, StoryProductPreview);

    this.el = el;
    this.type = this.el.getAttribute('data-type');
    this.eventListeners = {};
  }

  storyProductPreview_createClass(StoryProductPreview, [{
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }, {
    key: "init",
    value: function init() {
      if ('init' in this.eventListeners) {
        this.eventListeners.init();
      }

      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.addEventListener(event, this.eventListeners[event]);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var event in this.eventListeners) {
        if (Object.hasOwnProperty.call(this.eventListeners, event)) {
          this.el.removeEventListener(event, this.eventListeners[event], false);
        }
      }

      this.eventListeners = {};
    }
  }]);

  return StoryProductPreview;
}();
// CONCATENATED MODULE: ./src/core/story/storyFacade.js


function storyFacade_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storyFacade_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storyFacade_createClass(Constructor, protoProps, staticProps) { if (protoProps) storyFacade_defineProperties(Constructor.prototype, protoProps); if (staticProps) storyFacade_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }








var storyFacade_StoryFacade = /*#__PURE__*/function () {
  function StoryFacade(params) {
    storyFacade_classCallCheck(this, StoryFacade);

    this.storyEl = params.wrapper.querySelector('.sitestories-story');
    this.control = new Story(params);
    this.videoManager = new StoryVideoManager(this.storyEl);
    this.product = null;
    this.productCard = null;
    this.productCollection = null;
    this.productPreview = null;
    this.timePassed = null;
    this.eventListeners = {};
  }

  storyFacade_createClass(StoryFacade, [{
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }, {
    key: "setProduct",
    value: function setProduct(el) {
      this.product = new StoryProduct(el);
    }
  }, {
    key: "setProductCollection",
    value: function setProductCollection(el) {
      this.productCollection = new StoryProductCollection(el);
    }
  }, {
    key: "setProductPreview",
    value: function setProductPreview(el) {
      this.productPreview = new StoryProductPreview(el);
    }
  }, {
    key: "setTimePassed",
    value: function setTimePassed(groupEl, lang) {
      this.timePassed = new StoryTimePassed(groupEl, this.storyEl, lang);
    }
  }, {
    key: "setProductCard",
    value: function setProductCard(el) {
      this.productCard = new StoryProductCard(el);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if ('destroy' in this.eventListeners) {
        this.eventListeners.destroy();
      }

      this.control.reset();

      if (this.product !== null) {
        this.product.destroy();
      }

      if (this.productCard !== null) {
        this.productCard.destroy();
      }

      if (this.productCollection !== null) {
        this.productCollection.destroy();
      }

      if (this.productPreview !== null) {
        this.productPreview.destroy();
      }

      this.eventListeners = {};
    }
  }]);

  return StoryFacade;
}();
// CONCATENATED MODULE: ./src/core/core.js







// CONCATENATED MODULE: ./node_modules/swiper/shared/ssr-window.esm.mjs
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}



// CONCATENATED MODULE: ./node_modules/swiper/shared/utils.mjs


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function utils_getComputedStyle(el) {
  const window = getWindow();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = utils_getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function utils_isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function utils_extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  return [...element.children].filter(el => el.matches(selector));
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = getWindow();
  const document = getDocument();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = getWindow();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = getWindow();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}



// CONCATENATED MODULE: ./node_modules/swiper/shared/swiper-core.mjs



let swiper_core_support;
function calcSupport() {
  const window = getWindow();
  const document = getDocument();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!swiper_core_support) {
    swiper_core_support = calcSupport();
  }
  return swiper_core_support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let swiper_core_browser;
function calcBrowser() {
  const window = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!swiper_core_browser) {
    swiper_core_browser = calcBrowser();
  }
  return swiper_core_browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = getWindow();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function swiper_core_updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
  height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    if (isFullyVisible) {
      slides[i].classList.add(params.slideFullyVisibleClass);
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter(slideEl => slideEl.column === activeIndex)[0];
      nextSlide = slides.filter(slideEl => slideEl.column === activeIndex + 1)[0];
      prevSlide = slides.filter(slideEl => slideEl.column === activeIndex - 1)[0];
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    // Active classes
    activeSlide.classList.add(params.slideActiveClass);
    if (gridEnabled) {
      if (nextSlide) {
        nextSlide.classList.add(params.slideNextClass);
      }
      if (prevSlide) {
        prevSlide.classList.add(params.slidePrevClass);
      }
    } else {
      // Next Slide
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      if (nextSlide) {
        nextSlide.classList.add(params.slideNextClass);
      }

      // Prev Slide
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
      if (prevSlide) {
        prevSlide.classList.add(params.slidePrevClass);
      }
    }
  }
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter(slideEl => slideEl.column === activeIndex)[0];
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var swiper_core_update = {
  updateSize: swiper_core_updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function swiper_core_setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function swiper_core_minTranslate() {
  return -this.snapGrid[0];
}

function swiper_core_maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var swiper_core_translate = {
  getTranslate: getSwiperTranslate,
  setTranslate: swiper_core_setTranslate,
  minTranslate: swiper_core_minTranslate,
  maxTranslate: swiper_core_maxTranslate,
  translateTo
};

function swiper_core_setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition: swiper_core_setTransition,
  transitionStart,
  transitionEnd
};

function swiper_core_slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial || swiper.destroyed) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var swiper_core_slide = {
  slideTo: swiper_core_slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function swiper_core_onTouchStart(event) {
  const swiper = this;
  const document = getDocument();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function swiper_core_onTouchMove(event) {
  const document = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function swiper_core_onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const swiper_core_events = (swiper, method) => {
  const document = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = swiper_core_onTouchStart.bind(swiper);
  swiper.onTouchMove = swiper_core_onTouchMove.bind(swiper);
  swiper.onTouchEnd = swiper_core_onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  swiper_core_events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  swiper_core_events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  utils_extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var swiper_core_breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      utils_extend(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      utils_extend(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    utils_extend(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update: swiper_core_update,
  translate: swiper_core_translate,
  transition,
  slide: swiper_core_slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints: swiper_core_breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class swiper_core_Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = utils_extend({}, params);
    if (el && !params.el) params.el = el;
    const document = getDocument();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = utils_extend({}, params, {
          el: containerEl
        });
        swipers.push(new swiper_core_Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = utils_extend({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = utils_extend({}, swiper.params);
    swiper.passedParams = utils_extend({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
      wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute('style');
      wrapperEl.removeAttribute('style');
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    utils_extend(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
    const modules = swiper_core_Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => swiper_core_Swiper.installModule(m));
      return swiper_core_Swiper;
    }
    swiper_core_Swiper.installModule(module);
    return swiper_core_Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
swiper_core_Swiper.use([Resize, Observer]);



// CONCATENATED MODULE: ./node_modules/swiper/swiper.mjs
/**
 * Swiper 11.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 27, 2024
 */



// CONCATENATED MODULE: ./node_modules/swiper/modules/virtual.mjs



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = getDocument();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = createElement('swiper-slide');
    } else {
      slideEl = createElement('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update();
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/keyboard.mjs



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = getDocument();
  const window = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = elementOffset(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/mousewheel.mjs



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = nextTick(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/shared/create-element-if-not-defined.mjs


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/navigation.mjs



function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/shared/classes-to-selector.mjs
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/pagination.mjs




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/scrollbar.mjs





function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = createElement('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/parallax.mjs


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = elementChildren(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...elementChildren(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/zoom.mjs



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !gesture.slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth;
      image.height = gesture.imageEl.offsetHeight;
      image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;
      image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
      offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth;
      imageHeight = gesture.imageEl.offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/controller.mjs


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }
        elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper) {
        swiper.controller.control = controlElement.swiper;
      } else if (controlElement) {
        const onControllerSwiper = e => {
          swiper.controller.control = e.detail[0];
          swiper.update();
          controlElement.removeEventListener('init', onControllerSwiper);
        };
        controlElement.addEventListener('init', onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/a11y.mjs



function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
        }
      }
      if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.removeEventListener('focus', handleFocus, true);
    swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
    swiper.el.removeEventListener('pointerup', handlePointerUp, true);
  }
  on('beforeInit', () => {
    liveRegion = createElement('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/history.mjs


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = getWindow();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = getWindow();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = getWindow();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/hash-navigation.mjs



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = getDocument();
  const window = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/autoplay.mjs


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = getDocument();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener('pointerenter', onPointerEnter);
    swiper.el.removeEventListener('pointerleave', onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document = getDocument();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/thumbs.mjs



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (utils_isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener('init', onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener('init', onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/free-mode.mjs


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: now()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        elementTransitionEnd(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit('_freeModeStaticRelease');
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/grid.mjs
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slides => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach(slide => {
        if (slide.swiperSlideGridSet) {
          slide.style.height = '';
          slide.style[swiper.getDirectionLabel('margin-top')] = '';
        }
      });
    }
  };
  const updateSlide = (i, slide, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
    slide.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on('init', onInit);
  on('update', onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/manipulation.mjs
function manipulation_appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function manipulation_prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function manipulation_removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function manipulation_removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: manipulation_appendSlide.bind(swiper),
    prependSlide: manipulation_prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: manipulation_removeSlide.bind(swiper),
    removeAllSlides: manipulation_removeAllSlides.bind(swiper)
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-target.mjs


function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}



// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-virtual-transition-end.mjs


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-fade.mjs





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cube.mjs



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = createElement('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = createElement('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        if (swiper.browser && swiper.browser.need3dFix && Math.abs(wrapperRotate) / 90 % 2 === 1) {
          wrapperRotate += 0.001;
        }
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  effectInit({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/shared/create-shadow.mjs


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = createElement('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-flip.mjs






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = createShadow('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = createShadow('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      if (swiper.browser && swiper.browser.need3dFix) {
        if (Math.abs(rotateY) / 90 % 2 === 1) {
          rotateY += 0.001;
        }
        if (Math.abs(rotateX) / 90 % 2 === 1) {
          rotateX += 0.001;
        }
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-coverflow.mjs





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      if (swiper.browser && swiper.browser.need3dFix) {
        if (Math.abs(rotateY) / 90 % 2 === 1) {
          rotateY += 0.001;
        }
        if (Math.abs(rotateX) / 90 % 2 === 1) {
          rotateX += 0.001;
        }
      }
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  effectInit({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-creative.mjs






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        if (swiper.browser && swiper.browser.need3dFix && Math.abs(val) / 90 % 2 === 1) {
          val += 0.001;
        }
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = createShadow('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cards.mjs






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = createShadow('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



// CONCATENATED MODULE: ./node_modules/swiper/modules/index.mjs























// CONCATENATED MODULE: ./src/adapters/sliders/sliderSwiper.js


function sliderSwiper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sliderSwiper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sliderSwiper_createClass(Constructor, protoProps, staticProps) { if (protoProps) sliderSwiper_defineProperties(Constructor.prototype, protoProps); if (staticProps) sliderSwiper_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// import Swiper bundle with all modules installed


var sliderSwiper_SliderSwiperAdapter = /*#__PURE__*/function () {
  function SliderSwiperAdapter() {
    sliderSwiper_classCallCheck(this, SliderSwiperAdapter);

    this.eventListeners = {};
    this.slides = null;
    this.activeIndex = null;
    this.activeSlide = null;
    this.swiper;
    this.isEnd;
    this.isBeginning;
  }

  sliderSwiper_createClass(SliderSwiperAdapter, [{
    key: "init",
    value: function init(params) {
      var self = this;
      var swiperSettings = {
        modules: [Navigation, Pagination, EffectCube, EffectFade, Autoplay, Controller],
        slideToClickedSlide: params.slideToClickedSlide,
        centeredSlides: params.centeredSlides,
        containerModifierClass: params.containerModifierClass,
        wrapperClass: params.wrapperClass,
        slideClass: params.slideClass,
        slideActiveClass: params.slideActiveClass,
        slideNextClass: params.slideNextClass,
        slidePrevClass: params.slidePrevClass,
        slidesPerView: params.slidesPerView,
        spaceBetween: params.spaceBetween,
        simulateTouch: params.simulateTouch,
        allowTouchMove: params.allowTouchMove,
        initialSlide: params.initialSlide,
        slideFullyVisibleClass: params.slideFullyVisibleClass ? params.slideFullyVisibleClass : 'sitestories__slide-fully-visible',
        slideVisibleClass: params.slideVisibleClass ? params.slideVisibleClass : 'sitestories__slide-visible',
        direction: params.direction ? params.direction : 'horizontal',
        on: {
          init: function init(swiper) {
            //console.log('event init', swiper.el)
            self.initProps(swiper);
            if ('init' in self.eventListeners) self.eventListeners.init();
          },
          slideChange: function slideChange(swiper) {
            self.initProps(swiper);
            if ('slideChange' in self.eventListeners) self.eventListeners.slideChange();
          },
          reachEnd: function reachEnd(swiper) {
            self.initProps(swiper);
            if ('reachEnd' in self.eventListeners) self.eventListeners.reachEnd();
          },
          click: function click(swiper, e) {
            // console.log('click swiper event')
            self.initProps(swiper);
            if ('click' in self.eventListeners) self.eventListeners.click(e);
          },
          autoplayPause: function autoplayPause(swiper) {
            // console.log('autoplay pause')
            self.initProps(swiper);
            if ('autoplayPause' in self.eventListeners) self.eventListeners.autoplayPause();
          },
          autoplayResume: function autoplayResume(swiper) {
            // console.log('autoplay resume')
            self.initProps(swiper);
            if ('autoplayResume' in self.eventListeners) self.eventListeners.autoplayResume();
          },
          autoplayStop: function autoplayStop(swiper) {
            // console.log('autoplayStop')
            self.initProps(swiper);
            if ('autoplayStop' in self.eventListeners) self.eventListeners.autoplayStop();
          },
          autoplayStart: function autoplayStart(swiper) {
            // console.log('autoplayStart')
            self.initProps(swiper);
            if ('autoplayStart' in self.eventListeners) self.eventListeners.autoplayStart();
          },
          touchStart: function touchStart(swiper, e) {
            // console.log('touchStart', swiper, e.target)
            self.initProps(swiper);
            if ('pointerdown' in self.eventListeners) self.eventListeners.pointerdown(e);
          },
          touchEnd: function touchEnd(swiper, e) {
            //console.log('touchEnd')                  
            self.initProps(swiper);
            if ('pointerup' in self.eventListeners) self.eventListeners.pointerup(e);
          },
          autoplay: function autoplay(swiper) {//console.log('autoplay')
          },
          sliderMove: function sliderMove(swiper, e) {//console.log('sliderMove', e)
          },
          resize: function resize(swiper) {//console.log('resize event', swiper.getTranslate())
          }
        }
      };

      if ('pagination' in params) {
        swiperSettings.pagination = {
          el: params.pagination.el,
          clickable: true,
          type: 'bullets',
          bulletClass: params.bulletClass,
          bulletActiveClass: params.bulletClass + '_active',
          bulletElement: 'div',
          progressbarOpposite: false,
          renderBullet: function renderBullet(index, className) {
            return '<div class="' + className + '">' + '<span class="' + params.bulletClass + '_anim"></span>' + '</div>';
          }
        };
      }

      if ('autoplay' in params) {
        swiperSettings.autoplay = {
          delay: 0,
          pauseOnMouseEnter: false,
          stopOnLastSlide: true,
          disableOnInteraction: false
        };
      }

      if ('effect' in params) {
        swiperSettings.effect = params.effect;

        if (params.effect === 'fade') {
          swiperSettings.fadeEffect = {
            crossFade: true
          };
        }

        if (params.effect === 'cube') {
          swiperSettings.fadeEffect = {
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 0.94
          };
        }
      }

      if ('navigation' in params) {
        swiperSettings.navigation = {
          nextEl: params.navigation.nextEl,
          prevEl: params.navigation.prevEl,
          disabledClass: params.navigation.disabledClass
        };
      }

      this.swiper = new swiper_core_Swiper(params.el, swiperSettings);
      this.initProps();
    }
  }, {
    key: "initProps",
    value: function initProps(swiper) {
      if (swiper) {
        this.el = swiper.el;
        this.slides = swiper.slides;
        this.activeIndex = swiper.activeIndex;
        this.activeSlide = this.slides[this.activeIndex];
        this.bullets = swiper.pagination.bullets;
        this.activeBullet = this.bullets[swiper.activeIndex];
        this.isEnd = swiper.isEnd;
        this.isBeginning = swiper.isBeginning;
        this.isIos = swiper.device.ios;
        this.isAndroid = swiper.device.android;
      }
    }
  }, {
    key: "slideNext",
    value: function slideNext() {
      //console.log('swiper slide next')
      this.swiper.slideNext();
    }
  }, {
    key: "slidePrev",
    value: function slidePrev() {
      //console.log('swiper slide prev')
      this.swiper.slidePrev();
    }
  }, {
    key: "autoplayResume",
    value: function autoplayResume() {
      this.swiper.autoplay.resume();
    }
  }, {
    key: "autoplayPause",
    value: function autoplayPause() {
      this.swiper.autoplay.pause();
    }
  }, {
    key: "autoplayStart",
    value: function autoplayStart() {
      this.swiper.autoplay.start();
    }
  }, {
    key: "autoplayStop",
    value: function autoplayStop() {
      this.swiper.autoplay.stop();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.eventListeners = {};
      this.swiper.destroy();
    }
  }, {
    key: "subscribeEvent",
    value: function subscribeEvent(event, listener) {
      this.eventListeners[event] = listener;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.swiper.disable();
    }
  }, {
    key: "enable",
    value: function enable() {
      this.swiper.enable();
    }
  }]);

  return SliderSwiperAdapter;
}();
// CONCATENATED MODULE: ./src/adapters/sliders/sliders.js

// CONCATENATED MODULE: ./src/use_cases/themes/instagram/previewsThemeBusinessLogic.js


function previewsThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function previewsThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function previewsThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) previewsThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) previewsThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var PreviewsThemeBusinessLogic = /*#__PURE__*/function () {
  function PreviewsThemeBusinessLogic(theme) {
    previewsThemeBusinessLogic_classCallCheck(this, PreviewsThemeBusinessLogic);

    this.theme = theme;
  }

  previewsThemeBusinessLogic_createClass(PreviewsThemeBusinessLogic, [{
    key: "getParamsSlider",
    value: function getParamsSlider() {
      var spaceBetweenPreviews = this.theme.previewsEl.getAttribute('data-space-between') ? this.theme.previewsEl.getAttribute('data-space-between') : 10;
      return {
        el: this.theme.previewsEl.querySelector('#previews-slider'),
        containerModifierClass: 'sitestories-previews-slider_',
        wrapperClass: 'sitestories-previews-slider__wrapper',
        slideClass: 'sitestories-previews-slider__slide',
        slideActiveClass: 'sitestories-previews-slider__slide_active',
        slideNextClass: 'sitestories-previews-slider__slide_next',
        slidePrevClass: 'sitestories-previews-slider__slide_prev',
        slidesPerView: 'auto',
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        spaceBetween: spaceBetweenPreviews,
        centeredSlides: false,
        slideToClickedSlide: true,
        initialSlide: 0,
        navigation: {
          nextEl: '.sitestories-previews-slider__button-nav_next',
          prevEl: '.sitestories-previews-slider__button-nav_prev',
          disabledClass: 'sitestories-previews-slider__button-nav_disabled'
        }
      };
    }
  }]);

  return PreviewsThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/instagram/sliderGroupStoriesThemeBusinessLogic.js




function sliderGroupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sliderGroupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sliderGroupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SliderGroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function SliderGroupStoriesThemeBusinessLogic(theme) {
    sliderGroupStoriesThemeBusinessLogic_classCallCheck(this, SliderGroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  sliderGroupStoriesThemeBusinessLogic_createClass(SliderGroupStoriesThemeBusinessLogic, [{
    key: "eventSlideChange",
    value: function eventSlideChange() {
      if (this.theme.isInit) {
        this.theme.story.destroy();
        this.theme.sliderStory.destroy();
        this.theme.groupStories.getControlsElems().hide();
        this.theme.groupStories.destroy();
        this.theme.story = null;
        this.theme.sliderStory = null;
        this.theme.initGroupStories();

        if (this.theme.isPlaying === false) {
          this.theme.sliderStory.autoplayStop();
          this.theme.groupStories.getStatesIconsPlay().pause();
        }
      }
    }
  }, {
    key: "eventPointerdown",
    value: function eventPointerdown(e) {
      var self = this;

      if (!e.target.closest('.sitestories-story-content-product-link__product-images') && !e.target.closest('.sitestories-group-stories__header') && !e.target.closest('.sitestories-story-product-card') && !e.target.closest('.sitestories-story-product__button-box') && !e.target.closest('.sitestories-story-product-card__close') && !e.target.closest('.sitestories-story-product__product-images') && !e.target.closest('.sitestories-product-list__product-preview') && !e.target.closest('.sitestories-product-collection__product-preview')) {
        this.theme.groupStories.getControl().timeoutTouchStart = setTimeout(function () {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getControlsElems().hide();
        }, 150);
        this.theme.groupStories.getControl().timeTouchStart = new Date().valueOf();
      }
    }
  }, {
    key: "eventPointerup",
    value: function eventPointerup(e) {
      clearTimeout(this.theme.groupStories.getControl().timeoutTouchStart);
      this.theme.groupStories.getControl().timeTouchEnd = new Date().valueOf();
      var timeTouchMS = this.theme.groupStories.getControl().timeTouchEnd - this.theme.groupStories.getControl().timeTouchStart;
      var clientX = this.theme.isMobile ? e.changedTouches[0].clientX : e.clientX;

      if (timeTouchMS < 150) {
        var halfWidthWindow = window.innerWidth / 2;

        if (clientX > halfWidthWindow) {
          this.theme.navigation.next();
        }

        if (clientX < halfWidthWindow) {
          this.theme.navigation.prev();
        }
      } else {
        if (this.theme.isPlaying || this.theme.isPlaying === null) {
          this.theme.sliderStory.autoplayStart();
        }

        this.theme.groupStories.getControlsElems().show();
      }
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider(indexGroup) {
      return {
        el: this.theme.modalEl.querySelector('#slider-groups'),
        containerModifierClass: 'sitestories-slider-groups_',
        wrapperClass: 'sitestories-slider-groups__wrapper',
        slideClass: 'sitestories-slider-groups__slide',
        slideActiveClass: 'sitestories-slider-groups__slide_active',
        slideNextClass: 'sitestories-slider-groups__slide_next',
        slidePrevClass: 'sitestories-slider-groups__slide_prev',
        slideFullyVisibleClass: 'sitestories-slider-groups__slide-fully-visible',
        slideVisibleClass: 'sitestories-slider-groups__slide-visible',
        slidesPerView: 'auto',
        effect: this.theme.isMobile ? 'cube' : 'slide',
        simulateTouch: true,
        allowTouchMove: this.theme.isMobile ? true : false,
        spaceBetween: 0,
        centeredSlides: true,
        slideToClickedSlide: false,
        initialSlide: indexGroup
      };
    }
  }]);

  return SliderGroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/instagram/groupStoriesThemeBusinessLogic.js


function groupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function groupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function groupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) groupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) groupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function GroupStoriesThemeBusinessLogic(theme) {
    groupStoriesThemeBusinessLogic_classCallCheck(this, GroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  groupStoriesThemeBusinessLogic_createClass(GroupStoriesThemeBusinessLogic, [{
    key: "eventClick",
    value: function eventClick(e) {
      var self = this;

      if (e.target.closest('.sitestories-story-play[data-state="play"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.sliderStory.autoplayStart();
            self.theme.groupStories.getStatesIconsPlay().play();
            self.theme.isPlaying = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-play[data-state="pause"]')) {
        this.theme.sliderStory.autoplayStop();
        this.theme.groupStories.getStatesIconsPlay().pause();
        this.theme.isPlaying = false;
      }

      if (e.target.closest('.sitestories-story-sound[data-state="disable"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.story.videoManager.enableSound();
            self.theme.groupStories.getStatesSoundIcons().enable();
            self.theme.isSoundOn = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-sound[data-state="enable"]')) {
        this.theme.story.videoManager.disableSound();
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.isSoundOn = false;
      }
    }
  }, {
    key: "eventMouseout",
    value: function eventMouseout(e) {
      this.theme.groupStories.getControlsElems().show();
    }
  }]);

  return GroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/instagram/storySliderThemeBusinessLogic.js


function storySliderThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storySliderThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storySliderThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) storySliderThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) storySliderThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var StorySliderThemeBusinessLogic = /*#__PURE__*/function () {
  function StorySliderThemeBusinessLogic(theme) {
    storySliderThemeBusinessLogic_classCallCheck(this, StorySliderThemeBusinessLogic);

    this.theme = theme;
  }

  storySliderThemeBusinessLogic_createClass(StorySliderThemeBusinessLogic, [{
    key: "eventAutoplayStop",
    value: function eventAutoplayStop() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventAutoplayStart",
    value: function eventAutoplayStart() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayResume",
    value: function eventAutoplayResume() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayPause",
    value: function eventAutoplayPause() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventSlideChange",
    value: function eventSlideChange() {
      this.theme.story.destroy();
      this.theme.groupStories.getAnimBullets().reset();
      this.theme.initStory();

      if (this.theme.isSoundOn) {
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.story.videoManager.disableSound();
      }

      this.theme.groupStories.getAnimBullets().updateState(this.theme.sliderStory.bullets, this.theme.sliderStory.activeIndex);
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider() {
      return {
        el: this.theme.groupStories.getControl().el.querySelector('.sitestories-slider-story'),
        containerModifierClass: 'sitestories-slider-story_',
        wrapperClass: 'sitestories-slider-story__wrapper',
        slideClass: 'sitestories-slider-story__slide',
        slideActiveClass: 'sitestories-slider-story__slide_active',
        slideNextClass: 'sitestories-slider-story__slide_next',
        slidePrevClass: 'sitestories-slider-story__slide_prev',
        bulletClass: 'sitestories-story-pagination__bullet',
        slidesPerView: 1,
        pagination: {
          el: this.theme.groupStories.getControl().el.querySelector('.sitestories-story-pagination')
        },
        //autoplay: {},
        //nested: false,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: true,
        spaceBetween: 0,
        centeredSlides: false,
        slideToClickedSlide: false,
        initialSlide: 0
      };
    }
  }]);

  return StorySliderThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./node_modules/colorthief/dist/color-thief.mjs
if(!color_thief_t)var color_thief_t={map:function(t,r){var n={};return r?t.map(function(t,o){return n.index=o,r.call(n,t)}):t.slice()},naturalOrder:function(t,r){return t<r?-1:t>r?1:0},sum:function(t,r){var n={};return t.reduce(r?function(t,o,e){return n.index=e,t+r.call(n,o)}:function(t,r){return t+r},0)},max:function(r,n){return Math.max.apply(null,n?color_thief_t.map(r,n):r)}};var color_thief_r=function(){var r=5,n=8-r,o=1e3;function e(t,n,o){return(t<<2*r)+(n<<r)+o}function u(t){var r=[],n=!1;function o(){r.sort(t),n=!0}return{push:function(t){r.push(t),n=!1},peek:function(t){return n||o(),void 0===t&&(t=r.length-1),r[t]},pop:function(){return n||o(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return n||o(),r}}}function a(t,r,n,o,e,u,a){var i=this;i.r1=t,i.r2=r,i.g1=n,i.g2=o,i.b1=e,i.b2=u,i.histo=a}function i(){this.vboxes=new u(function(r,n){return color_thief_t.naturalOrder(r.vbox.count()*r.vbox.volume(),n.vbox.count()*n.vbox.volume())})}function c(r,n){if(n.count()){var o=n.r2-n.r1+1,u=n.g2-n.g1+1,a=color_thief_t.max([o,u,n.b2-n.b1+1]);if(1==n.count())return[n.copy()];var i,c,f,s,h=0,v=[],l=[];if(a==o)for(i=n.r1;i<=n.r2;i++){for(s=0,c=n.g1;c<=n.g2;c++)for(f=n.b1;f<=n.b2;f++)s+=r[e(i,c,f)]||0;v[i]=h+=s}else if(a==u)for(i=n.g1;i<=n.g2;i++){for(s=0,c=n.r1;c<=n.r2;c++)for(f=n.b1;f<=n.b2;f++)s+=r[e(c,i,f)]||0;v[i]=h+=s}else for(i=n.b1;i<=n.b2;i++){for(s=0,c=n.r1;c<=n.r2;c++)for(f=n.g1;f<=n.g2;f++)s+=r[e(c,f,i)]||0;v[i]=h+=s}return v.forEach(function(t,r){l[r]=h-t}),function(t){var r,o,e,u,a,c=t+"1",f=t+"2",s=0;for(i=n[c];i<=n[f];i++)if(v[i]>h/2){for(e=n.copy(),u=n.copy(),a=(r=i-n[c])<=(o=n[f]-i)?Math.min(n[f]-1,~~(i+o/2)):Math.max(n[c],~~(i-1-r/2));!v[a];)a++;for(s=l[a];!s&&v[a-1];)s=l[--a];return e[f]=a,u[c]=e[f]+1,[e,u]}}(a==o?"r":a==u?"g":"b")}}return a.prototype={volume:function(t){var r=this;return r._volume&&!t||(r._volume=(r.r2-r.r1+1)*(r.g2-r.g1+1)*(r.b2-r.b1+1)),r._volume},count:function(t){var r=this,n=r.histo;if(!r._count_set||t){var o,u,a,i=0;for(o=r.r1;o<=r.r2;o++)for(u=r.g1;u<=r.g2;u++)for(a=r.b1;a<=r.b2;a++)i+=n[e(o,u,a)]||0;r._count=i,r._count_set=!0}return r._count},copy:function(){var t=this;return new a(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(t){var n=this,o=n.histo;if(!n._avg||t){var u,a,i,c,f=0,s=1<<8-r,h=0,v=0,l=0;for(a=n.r1;a<=n.r2;a++)for(i=n.g1;i<=n.g2;i++)for(c=n.b1;c<=n.b2;c++)f+=u=o[e(a,i,c)]||0,h+=u*(a+.5)*s,v+=u*(i+.5)*s,l+=u*(c+.5)*s;n._avg=f?[~~(h/f),~~(v/f),~~(l/f)]:[~~(s*(n.r1+n.r2+1)/2),~~(s*(n.g1+n.g2+1)/2),~~(s*(n.b1+n.b2+1)/2)]}return n._avg},contains:function(t){var r=this,o=t[0]>>n;return gval=t[1]>>n,bval=t[2]>>n,o>=r.r1&&o<=r.r2&&gval>=r.g1&&gval<=r.g2&&bval>=r.b1&&bval<=r.b2}},i.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,n=0;n<r.size();n++)if(r.peek(n).vbox.contains(t))return r.peek(n).color;return this.nearest(t)},nearest:function(t){for(var r,n,o,e=this.vboxes,u=0;u<e.size();u++)((n=Math.sqrt(Math.pow(t[0]-e.peek(u).color[0],2)+Math.pow(t[1]-e.peek(u).color[1],2)+Math.pow(t[2]-e.peek(u).color[2],2)))<r||void 0===r)&&(r=n,o=e.peek(u).color);return o},forcebw:function(){var r=this.vboxes;r.sort(function(r,n){return color_thief_t.naturalOrder(color_thief_t.sum(r.color),color_thief_t.sum(n.color))});var n=r[0].color;n[0]<5&&n[1]<5&&n[2]<5&&(r[0].color=[0,0,0]);var o=r.length-1,e=r[o].color;e[0]>251&&e[1]>251&&e[2]>251&&(r[o].color=[255,255,255])}},{quantize:function(f,s){if(!f.length||s<2||s>256)return!1;var h=function(t){var o,u=new Array(1<<3*r);return t.forEach(function(t){o=e(t[0]>>n,t[1]>>n,t[2]>>n),u[o]=(u[o]||0)+1}),u}(f);h.forEach(function(){});var v=function(t,r){var o,e,u,i=1e6,c=0,f=1e6,s=0,h=1e6,v=0;return t.forEach(function(t){(o=t[0]>>n)<i?i=o:o>c&&(c=o),(e=t[1]>>n)<f?f=e:e>s&&(s=e),(u=t[2]>>n)<h?h=u:u>v&&(v=u)}),new a(i,c,f,s,h,v,r)}(f,h),l=new u(function(r,n){return color_thief_t.naturalOrder(r.count(),n.count())});function g(t,r){for(var n,e=t.size(),u=0;u<o;){if(e>=r)return;if(u++>o)return;if((n=t.pop()).count()){var a=c(h,n),i=a[0],f=a[1];if(!i)return;t.push(i),f&&(t.push(f),e++)}else t.push(n),u++}}l.push(v),g(l,.75*s);for(var p=new u(function(r,n){return color_thief_t.naturalOrder(r.count()*r.volume(),n.count()*n.volume())});l.size();)p.push(l.pop());g(p,s);for(var b=new i;p.size();)b.push(p.pop());return b}}}().quantize,n=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};n.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var o=function(){};o.prototype.getColor=function(t,r){return void 0===r&&(r=10),this.getPalette(t,5,r)[0]},o.prototype.getPalette=function(t,o,e){var u=function(t){var r=t.colorCount,n=t.quality;if(void 0!==r&&Number.isInteger(r)){if(1===r)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");r=Math.max(r,2),r=Math.min(r,20)}else r=10;return(void 0===n||!Number.isInteger(n)||n<1)&&(n=10),{colorCount:r,quality:n}}({colorCount:o,quality:e}),a=new n(t),i=function(t,r,n){for(var o,e,u,a,i,c=t,f=[],s=0;s<r;s+=n)e=c[0+(o=4*s)],u=c[o+1],a=c[o+2],(void 0===(i=c[o+3])||i>=125)&&(e>250&&u>250&&a>250||f.push([e,u,a]));return f}(a.getImageData().data,a.width*a.height,u.quality),c=color_thief_r(i,u.colorCount);return c?c.palette():null},o.prototype.getColorFromUrl=function(t,r,n){var o=this,e=document.createElement("img");e.addEventListener("load",function(){var u=o.getPalette(e,5,n);r(u[0],t)}),e.src=t},o.prototype.getImageData=function(t,r){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var n=new Array(i),o=0;o<t.length;o++)n[o]=String.fromCharCode(t[o]);var e=n.join(""),u=window.btoa(e);r("data:image/png;base64,"+u)}},n.send()},o.prototype.getColorAsync=function(t,r,n){var o=this;this.getImageData(t,function(t){var e=document.createElement("img");e.addEventListener("load",function(){var t=o.getPalette(e,5,n);r(t[0],this)}),e.src=t})};

// CONCATENATED MODULE: ./src/use_cases/themes/instagram/storyThemeBusinessLogic.js


function storyThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storyThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storyThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) storyThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) storyThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var colorThief = new o();
var storyThemeBusinessLogic_StoryThemeBusinessLogic = /*#__PURE__*/function () {
  function StoryThemeBusinessLogic(theme) {
    storyThemeBusinessLogic_classCallCheck(this, StoryThemeBusinessLogic);

    this.theme = theme;
  }

  storyThemeBusinessLogic_createClass(StoryThemeBusinessLogic, [{
    key: "typeProduct",
    value: function typeProduct() {
      var self = this;
      var productEl = this.theme.story.control.el.querySelector('#story-product');
      this.theme.story.setProduct(productEl);
      this.theme.story.product.subscribeEvent('init', function () {
        var img = self.theme.story.product.el.querySelector('.sitestories-slider-product-images__image');

        if (img.complete) {
          var imgMainColorArr = colorThief.getColor(img);
          self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
        } else {
          img.addEventListener('load', function () {
            var imgMainColorArr = colorThief.getColor(img);
            self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
          });
        }
      });

      if (this.theme.story.product.action === 'go-to-link') {
        this._typeProductActionLink();
      }

      if (this.theme.story.product.action === 'open-product-card') {
        this._typeProductActionCard();
      }

      this.theme.story.product.init();
    }
  }, {
    key: "_typeProductActionLink",
    value: function _typeProductActionLink() {
      var self = this;
      this.theme.story.product.subscribeEvent('click', function (e) {
        var halfWidthWindow = window.innerWidth / 2;

        if (self.theme.story.product.sliderImages) {
          if (e.clientX > halfWidthWindow) {
            self.theme.story.product.sliderImages.slideNext();
          } else {
            self.theme.story.product.sliderImages.slidePrev();
          }
        }

        if (e.target.closest('.sitestories-story-product__button-box')) {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
        }
      });
      var sliderProductImagesEl = this.theme.story.product.el.querySelector('.sitestories-slider-product-images');
      var sliderProductImagesParams = {
        el: sliderProductImagesEl,
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-slider-product-images_',
        wrapperClass: 'sitestories-slider-product-images__wrapper',
        slideClass: 'sitestories-slider-product-images__slide',
        slideActiveClass: 'sitestories-slider-product-images__slide_active',
        slideNextClass: 'sitestories-slider-product-images__slide_next',
        slidePrevClass: 'sitestories-slider-product-images__slide_prev',
        bulletClass: 'sitestories-slider-product-images__bullet',
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 15,
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0,
        pagination: {
          el: sliderProductImagesEl.querySelector('.sitestories-slider-product-images__pagination')
        }
      };
      this.theme.story.product.setSliderImages(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.initSliderImages(sliderProductImagesParams);
    }
  }, {
    key: "_typeProductActionCard",
    value: function _typeProductActionCard() {
      var self = this;
      var productCardEl = this.theme.story.control.el.querySelector('#product-card');
      this.theme.story.setProductCard(productCardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.subscribeEvent('click', function (e) {
        if (e.target.closest('.sitestories-story-product__button')) {
          e.preventDefault();
        }
      });
      this.theme.story.product.subscribeEvent('pointerup', function (e) {
        // Open card
        if (e.target.closest('.sitestories-story-product__button-box')) {
          e.preventDefault();
          self.theme.story.productCard.setState('card');
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
          self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.disable();
          self.theme.sliderStory.disable();
        } // Go to checkout


        if (e.target.closest('.sitestories-story-product-card__response-button-checkout')) {
          var link = e.target.getAttribute('data-link') ? e.target.getAttribute('data-link') : '#no-link';
          window.location.href = link;
        }
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
        }
      });

      if (this.theme.isMobile) {
        this._closeProductCardAtTouch(productCardEl);
      }

      this.theme.story.subscribeEvent('destroy', function () {
        self.theme.story.productCard.setState('hide');
        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = this.theme.story.control.el.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "typeProductCollection",
    value: function typeProductCollection() {
      var self = this;
      var productCollectionEl = this.theme.story.control.el.querySelector('#product-collection');
      this.theme.story.setProductCollection(productCollectionEl);
      var sliderParams = this.getParamsSliderProductCollection();
      this.theme.story.productCollection.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.productCollection.initSlider(sliderParams);
      var previewEl = this.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
      this.theme.story.setProductPreview(previewEl);
      this.theme.story.productCollection.slider.subscribeEvent('pointerdown', function () {
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
      });
      this.theme.story.productCollection.slider.subscribeEvent('pointerup', function () {
        self.theme.sliderGroupStories.enable();
        self.theme.sliderStory.enable();
      });

      if (this.theme.story.productPreview.type === 'card') {
        this._typeProductCollectionCard();
      }

      if (this.theme.story.productPreview.type === 'link') {
        this._typeProductCollectionLink();
      }

      this.theme.story.productCollection.slider.subscribeEvent('slideChange', function (e) {
        self.theme.story.productPreview.destroy();
        var previewEl = self.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
        self.theme.story.setProductPreview(previewEl);

        if (self.theme.story.productPreview.type === 'card') {
          self._typeProductCollectionCard();
        }

        if (self.theme.story.productPreview.type === 'link') {
          self._typeProductCollectionLink();
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCollection.init();
      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      this.theme.story.productCollection.subscribeEvent('destroy', function () {
        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
      });
    }
  }, {
    key: "_typeProductCollectionCard",
    value: function _typeProductCollectionCard() {
      var self = this;

      if (self.theme.story.productCard) {
        self.theme.story.productCard.destroy();
      }

      var cardEl = this.theme.story.control.el.querySelectorAll('#product-card')[this.theme.story.productCollection.slider.activeIndex];

      if (!cardEl) {
        console.error('[sitestories]: Couldn\'t find product card element');
        return;
      }

      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.setProductCard(cardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card

      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();

        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width');
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
        self.theme.story.productCollection.slider.disable();
        self.theme.story.productCard.setState('card');
        self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
        self.theme.sliderStory.autoplayStop();
        self.theme.groupStories.getStatesIconsPlay().pause();
        self.theme.isPlaying = false;
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          if (self.theme.story.productCollection.slider.isEnd) {
            self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
          }

          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
          self.theme.story.productCollection.slider.enable();
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "_typeProductCollectionLink",
    value: function _typeProductCollectionLink() {
      var self = this;
      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();
        var button = self.theme.story.productPreview.el.querySelector('.sitestories-product-collection__product-preview-button');
        var link = button.getAttribute('href');
        window.location.href = link;
      });
      this.theme.story.productPreview.init();
    }
  }, {
    key: "typeProductList",
    value: function typeProductList() {
      var _this = this;

      var self = this;
      var previewsElems = this.theme.story.control.el.querySelectorAll('#product-preview');
      var cardsElems = this.theme.story.control.el.querySelectorAll('#product-card');
      var paramsSliderProductCard = this.getParamsSliderProductCard();

      var _loop = function _loop(i) {
        var previewEl = previewsElems[i];

        if (previewEl.getAttribute('data-type') === 'card') {
          var cardEl = cardsElems[i];
          paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');

          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.setProductCard(cardEl);

          _this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card


          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            self.theme.story.setProductCard(cardEl);
            self.theme.story.productCard.setState('card');
            self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
            self.theme.sliderStory.autoplayStop();
            self.theme.groupStories.getStatesIconsPlay().pause();
            self.theme.isPlaying = false;
            self.theme.sliderGroupStories.disable();
            self.theme.sliderStory.disable();
          });

          _this.theme.story.productCard.subscribeEvent('click', function (e) {
            // Close product card
            if (e.target.closest('.sitestories-story-product-card__close')) {
              self.theme.story.setProductCard(cardEl);
              self.theme.story.productCard.setState('hide');
              self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
              self.theme.sliderGroupStories.enable();
              self.theme.sliderStory.enable();
            }
          });

          _this.theme.story.productPreview.init();

          _this.theme.story.productCard.init();

          _this.theme.story.productCard.initSlider(paramsSliderProductCard);
        }

        if (previewEl.getAttribute('data-type') === 'link') {
          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            var button = previewEl.querySelector('.sitestories-product-list__product-button');
            var link = button.getAttribute('href');
            window.location.href = link;
          });

          _this.theme.story.productPreview.init();
        }
      };

      for (var i = 0; i < previewsElems.length; i++) {
        _loop(i);
      }

      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
    }
  }, {
    key: "getParamsSliderProductCollection",
    value: function getParamsSliderProductCollection() {
      return {
        el: this.theme.story.productCollection.el.querySelector('.sitestories-product-collection__slider'),
        slideToClickedSlide: true,
        containerModifierClass: 'sitestories-product-collection__slider_',
        wrapperClass: 'sitestories-product-collection__slider-wrapper',
        slideClass: 'sitestories-product-collection__slide',
        slideActiveClass: 'sitestories-product-collection__slide_active',
        slideNextClass: 'sitestories-product-collection__slide_next',
        slidePrevClass: 'sitestories-product-collection__slide_prev',
        bulletClass: 'sitestories-product-collection__slider-bullet',
        slidesPerView: 1.2,
        centeredSlides: false,
        spaceBetween: 0,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "getParamsSliderProductCard",
    value: function getParamsSliderProductCard() {
      return {
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-story-product-card__slider_',
        wrapperClass: 'sitestories-story-product-card__slider-wrapper',
        slideClass: 'sitestories-story-product-card__slide',
        slideActiveClass: 'sitestories-story-product-card__slide_active',
        slideNextClass: 'sitestories-story-product-card__slide_next',
        slidePrevClass: 'sitestories-story-product-card__slide_prev',
        bulletClass: 'sitestories-story-product-card__slider-bullet',
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "eventActive",
    value: function eventActive(storyControl) {
      var self = this;
      this.theme.modalBackground.setBackground(storyControl.srcMedia, storyControl.typeStory);
      this.theme.groupStories.getControlsElems().show();

      if (this.theme.isPlaying === null || this.theme.isPlaying) {
        this.theme.story.videoManager.play();
        this.theme.groupStories.getAnimBullets().start(storyControl.bulletAnimEl, storyControl.speedAutoplayMS).then(function () {
          self.theme.story.videoManager.pause();
          self.theme.modalBackground.pauseVideo();
          self.theme.navigation.next();
        });
        this.theme.groupStories.getStatesIconsPlay().play();

        if (storyControl.typeStory === 'video') {
          this.theme.modalBackground.playVideo();
        }
      }

      if (this.theme.isSoundOn) {
        this.theme.groupStories.getStatesSoundIcons().enable();
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.story.videoManager.disableSound();
      }

      this.theme.story.setTimePassed(this.theme.groupStories.control.el, this.theme.lang);
      this.theme.story.control.activeAnimate();
    }
  }, {
    key: "eventReset",
    value: function eventReset() {
      this.theme.modalBackground.reset();
      this.theme.story.videoManager.reset();
      this.theme.story.control.resetAnimate();
    }
  }, {
    key: "_closeProductCardAtTouch",
    value: function _closeProductCardAtTouch(elem) {
      var card = elem.querySelector('.sitestories-story-product-card__card');
      var self = this;
      var touchStartY = 0;
      var touchDifferenceY = 0;
      var currentPositionY = 0;
      var positionMoveY = 0;
      var swipe_distance_hide = 80;

      var touchstartHandler = function touchstartHandler(e) {
        touchStartY = e.touches[0].clientY;
      };

      var touchmoveHandler = function touchmoveHandler(e) {
        touchDifferenceY = Math.ceil(touchStartY - e.touches[0].clientY);
        positionMoveY = currentPositionY - touchDifferenceY;
        console.log(positionMoveY);
        card.style.transform = "translateY(".concat(positionMoveY, "px)");
        card.style.transition = 'none';

        if (positionMoveY < 0) {
          card.style.transform = 'translateY(0px)';
          card.style.transition = '';
        }
      };

      var touchendHandler = function touchendHandler(e) {
        if (positionMoveY > swipe_distance_hide) {
          // close
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
          card.style.transform = ''; // card.removeEventListener('touchstart', touchstartHandler)
          // card.removeEventListener('touchmove', touchmoveHandler)
          // card.removeEventListener('touchend', touchendHandler)
          // card.removeEventListener('touchcancel', touchcancelHanler)
        } else {
          card.style.transform = 'translateY(0px)';
          card.style.transition = '';
        }
      };

      var touchcancelHanler = function touchcancelHanler(e) {
        card.style.transform = 'translateY(0px)';
        card.style.transition = '';
      };

      card.addEventListener('touchstart', touchstartHandler, {
        passive: true
      });
      card.addEventListener('touchmove', touchmoveHandler, {
        passive: true
      });
      card.addEventListener('touchend', touchendHandler, {
        passive: true
      });
      card.addEventListener('touchcancel', touchcancelHanler, {
        passive: true
      });
    }
  }]);

  return StoryThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/instagram/navigationThemeBusinessLogic.js


function navigationThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navigationThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navigationThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) navigationThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) navigationThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var NavigationThemeBusinessLogic = /*#__PURE__*/function () {
  function NavigationThemeBusinessLogic(theme) {
    navigationThemeBusinessLogic_classCallCheck(this, NavigationThemeBusinessLogic);

    this.theme = theme;
    this.isLastStory = false;
  }

  navigationThemeBusinessLogic_createClass(NavigationThemeBusinessLogic, [{
    key: "next",
    value: function next() {
      if (this.theme.sliderStory.isEnd) {
        this.theme.sliderGroupStories.slideNext();
      } else {
        this.theme.sliderStory.slideNext();
      }

      if (this.isLastStory) {
        this.theme.modal.close();
      }

      if (this.theme.sliderGroupStories.isEnd) {
        if (this.theme.sliderStory.isEnd) {
          this.isLastStory = true;
        }
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this.isLastStory = false;

      if (this.theme.sliderStory.isBeginning) {
        this.theme.sliderGroupStories.slidePrev();
      } else {
        this.theme.sliderStory.slidePrev();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.theme = null;
    }
  }]);

  return NavigationThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/instagram/instagram.js





function instagram_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function instagram_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function instagram_createClass(Constructor, protoProps, staticProps) { if (protoProps) instagram_defineProperties(Constructor.prototype, protoProps); if (staticProps) instagram_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Core
 // Adapters

 // Use cases






 // Libs

var fslightbox = __webpack_require__(20);

var instagram_Instagram = /*#__PURE__*/function () {
  function Instagram(params) {
    instagram_classCallCheck(this, Instagram);

    this.storiesEl = params.storiesEl;
    this.storiesId = this.storiesEl.getAttribute('id');
    this.isMobile = this.storiesEl.getAttribute('data-device') === 'mobile';
    this.lang = this.storiesEl.getAttribute('data-lang') ? this.storiesEl.getAttribute('data-lang') : 'en';
    this.previewsEl = this.storiesEl.querySelector('.sitestories__previews');
    this.previewlistElems = this.previewsEl.querySelectorAll('.sitestories__preview');
    this.modalEl = this.storiesEl.querySelector('.sitestories__modal');
    this.modal = new Modal(this.modalEl);
    this.modalBackground = new ModalBackground(this.modalEl);
    this.iconCloseElems = this.modalEl.querySelectorAll('.sitestories__modal-close');
    this.sliderGroupStories = null;
    this.sliderPreviews = null;
    this.groupStories = null;
    this.sliderStory = null;
    this.story = null;
    this.navigation = null;
    this.isPlaying = null;
    this.isSoundOn = null;
    this.isInit = null;
    this.init();
  }

  instagram_createClass(Instagram, [{
    key: "init",
    value: function init() {
      var self = this;
      this.modal.subscribeEvent('close', function () {
        self.destroy();
      });

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.addEventListener('click', this.modalClose.bind(this), false);
      }

      this.previewsInit();
    }
  }, {
    key: "modalClose",
    value: function modalClose() {
      this.modal.close();
    }
  }, {
    key: "previewsInit",
    value: function previewsInit() {
      var _this = this;

      var self = this;
      this.sliderPreviews = new sliderSwiper_SliderSwiperAdapter();
      var previewsThemeBusinessLogic = new PreviewsThemeBusinessLogic(this);
      var paramsSliderPreviews = previewsThemeBusinessLogic.getParamsSlider();
      this.sliderPreviews.init(paramsSliderPreviews);

      var _loop = function _loop(i) {
        var previewEl = _this.previewlistElems[i];
        var groupId = previewEl.getAttribute('data-group');
        updateStatePreview(previewEl, _this.storiesId, groupId);
        previewEl.addEventListener('click', function () {
          self.modal.open();
          self.initSliderGroupStories(i);
        });
      };

      for (var i = 0; i < this.previewlistElems.length; i++) {
        _loop(i);
      }

      this.previewsEl.style.opacity = '';
    }
  }, {
    key: "initSliderGroupStories",
    value: function initSliderGroupStories(indexGroup) {
      var sliderGroupStoriesThemeBusinessLogic = new SliderGroupStoriesThemeBusinessLogic(this);
      var paramsSliderGroupStories = sliderGroupStoriesThemeBusinessLogic.getParamsSlider(indexGroup);
      this.sliderGroupStories = new sliderSwiper_SliderSwiperAdapter();
      this.sliderGroupStories.subscribeEvent('slideChange', function () {
        sliderGroupStoriesThemeBusinessLogic.eventSlideChange();
      });
      this.sliderGroupStories.subscribeEvent('pointerdown', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerdown(e);
      });
      this.sliderGroupStories.subscribeEvent('pointerup', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerup(e);
      });

      function iOS() {
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
        || navigator.userAgent.includes("Mac") && "ontouchend" in document;
      }

      if (iOS) {
        paramsSliderGroupStories.effect = 'slide';
      }

      this.sliderGroupStories.init(paramsSliderGroupStories);
      this.initGroupStories();
    }
  }, {
    key: "initGroupStories",
    value: function initGroupStories() {
      var previewEl = this.previewlistElems[this.sliderGroupStories.activeIndex];
      var groupId = previewEl.getAttribute('data-group');
      saveViewStoriesGroup(this.storiesId, groupId);
      updateStatePreview(previewEl, this.storiesId, groupId);
      var groupStoriesThemeBusinessLogic = new GroupStoriesThemeBusinessLogic(this);
      var activeSlide = this.sliderGroupStories.activeSlide;
      var groupEl = activeSlide.querySelector('.sitestories-group-stories');
      this.groupStories = new groupStoriesFacade_GroupStoriesFacade(groupEl);
      this.groupStories.getControl().subscribeEvent('click', function (e) {
        groupStoriesThemeBusinessLogic.eventClick(e);
      });
      this.groupStories.getControl().subscribeEvent('mouseout', function (e) {
        groupStoriesThemeBusinessLogic.eventMouseout(e);
      });
      this.groupStories.getControl().init();
      this.initStorySlider();
    }
  }, {
    key: "initStorySlider",
    value: function initStorySlider() {
      this.sliderStory = new sliderSwiper_SliderSwiperAdapter();
      var storySliderThemeBusinessLogic = new StorySliderThemeBusinessLogic(this);
      var paramsSliderStory = storySliderThemeBusinessLogic.getParamsSlider();
      this.sliderStory.subscribeEvent('autoplayStop', function () {
        storySliderThemeBusinessLogic.eventAutoplayStop();
      });
      this.sliderStory.subscribeEvent('autoplayStart', function () {
        storySliderThemeBusinessLogic.eventAutoplayStart();
      });
      this.sliderStory.subscribeEvent('autoplayResume', function () {
        storySliderThemeBusinessLogic.eventAutoplayResume();
      });
      this.sliderStory.subscribeEvent('autoplayPause', function () {
        storySliderThemeBusinessLogic.eventAutoplayPause();
      });
      this.sliderStory.subscribeEvent('slideChange', function () {
        storySliderThemeBusinessLogic.eventSlideChange();
      });
      this.sliderStory.init(paramsSliderStory);
      this.navigation = new NavigationThemeBusinessLogic(this);
      this.initStory();
    }
  }, {
    key: "initStory",
    value: function initStory() {
      this.story = new storyFacade_StoryFacade({
        wrapper: this.sliderStory.activeSlide,
        bullets: this.sliderStory.bullets,
        slideActiveIndex: this.sliderStory.activeIndex,
        activeBullet: this.sliderStory.activeBullet
      });
      var storyThemeBusinessLogic = new storyThemeBusinessLogic_StoryThemeBusinessLogic(this);
      this.story.control.subscribeEvent('active', function (storyControl) {
        storyThemeBusinessLogic.eventActive(storyControl);
      });

      if (this.story.control.type === 'product') {
        storyThemeBusinessLogic.typeProduct();
      }

      if (this.story.control.type === 'product-collection') {
        storyThemeBusinessLogic.typeProductCollection();
      }

      if (this.story.control.type === 'product-list') {
        storyThemeBusinessLogic.typeProductList();
      }

      this.story.control.subscribeEvent('reset', function (story) {
        storyThemeBusinessLogic.eventReset();
      });
      this.story.control.active();
      this.isInit = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.sliderGroupStories) {
        this.story.destroy();
        this.sliderStory.destroy();
        this.groupStories.destroy();
        this.sliderGroupStories.destroy();
        this.sliderGroupStories = null;
        this.groupStories = null;
        this.sliderStory = null;
        this.story = null;
        this.navigation = null;
        this.isPlaying = null;
        this.isSoundOn = null;
        this.isInit = null;
      }

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.removeEventListener('click', this.modalClose.bind(this), false);
      }
    }
  }]);

  return Instagram;
}();


// CONCATENATED MODULE: ./src/use_cases/themes/facebook/previewsThemeBusinessLogic.js


function facebook_previewsThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function facebook_previewsThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function facebook_previewsThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) facebook_previewsThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) facebook_previewsThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var previewsThemeBusinessLogic_PreviewsThemeBusinessLogic = /*#__PURE__*/function () {
  function PreviewsThemeBusinessLogic(theme) {
    facebook_previewsThemeBusinessLogic_classCallCheck(this, PreviewsThemeBusinessLogic);

    this.theme = theme;
  }

  facebook_previewsThemeBusinessLogic_createClass(PreviewsThemeBusinessLogic, [{
    key: "getParamsSlider",
    value: function getParamsSlider() {
      var spaceBetweenPreviews = this.theme.previewsEl.getAttribute('data-space-between') ? this.theme.previewsEl.getAttribute('data-space-between') : 10;
      return {
        el: this.theme.previewsEl.querySelector('#previews-slider'),
        containerModifierClass: 'sitestories-previews-slider_',
        wrapperClass: 'sitestories-previews-slider__wrapper',
        slideClass: 'sitestories-previews-slider__slide',
        slideActiveClass: 'sitestories-previews-slider__slide_active',
        slideNextClass: 'sitestories-previews-slider__slide_next',
        slidePrevClass: 'sitestories-previews-slider__slide_prev',
        slidesPerView: 'auto',
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        spaceBetween: spaceBetweenPreviews,
        centeredSlides: false,
        slideToClickedSlide: true,
        initialSlide: 0,
        navigation: {
          nextEl: '.sitestories-previews-slider__button-nav_next',
          prevEl: '.sitestories-previews-slider__button-nav_prev',
          disabledClass: 'sitestories-previews-slider__button-nav_disabled'
        }
      };
    }
  }]);

  return PreviewsThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/facebook/sliderGroupStoriesThemeBusinessLogic.js




function facebook_sliderGroupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function facebook_sliderGroupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function facebook_sliderGroupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) facebook_sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) facebook_sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var sliderGroupStoriesThemeBusinessLogic_SliderGroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function SliderGroupStoriesThemeBusinessLogic(theme) {
    facebook_sliderGroupStoriesThemeBusinessLogic_classCallCheck(this, SliderGroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  facebook_sliderGroupStoriesThemeBusinessLogic_createClass(SliderGroupStoriesThemeBusinessLogic, [{
    key: "eventSlideChange",
    value: function eventSlideChange() {
      if (this.theme.isInit) {
        this.theme.story.destroy();
        this.theme.sliderStory.destroy();
        this.theme.groupStories.getControlsElems().hide();
        this.theme.groupStories.destroy();
        this.theme.story = null;
        this.theme.sliderStory = null;
        this.theme.initGroupStories();

        if (this.theme.isPlaying === false) {
          this.theme.sliderStory.autoplayStop();
          this.theme.groupStories.getStatesIconsPlay().pause();
        }
      }
    }
  }, {
    key: "eventPointerdown",
    value: function eventPointerdown(e) {
      var self = this;

      if (!e.target.closest('.sitestories-story-content-product-link__product-images') && !e.target.closest('.sitestories-group-stories__header') && !e.target.closest('.sitestories-story-product-card') && !e.target.closest('.sitestories-story-product__button-box') && !e.target.closest('.sitestories-story-product-card__close') && !e.target.closest('.sitestories-story-product__product-images') && !e.target.closest('.sitestories-product-list__product-preview') && !e.target.closest('.sitestories-product-collection__product-preview')) {
        this.theme.groupStories.getControl().timeoutTouchStart = setTimeout(function () {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getControlsElems().hide();
        }, 150);
        this.theme.groupStories.getControl().timeTouchStart = new Date().valueOf();
      }
    }
  }, {
    key: "eventPointerup",
    value: function eventPointerup(e) {
      clearTimeout(this.theme.groupStories.getControl().timeoutTouchStart);
      this.theme.groupStories.getControl().timeTouchEnd = new Date().valueOf();
      var timeTouchMS = this.theme.groupStories.getControl().timeTouchEnd - this.theme.groupStories.getControl().timeTouchStart;
      var clientX = this.theme.isMobile ? e.changedTouches[0].clientX : e.clientX;

      if (timeTouchMS < 150) {
        var halfWidthWindow = window.innerWidth / 2;

        if (clientX > halfWidthWindow) {
          this.theme.navigation.next();
        }

        if (clientX < halfWidthWindow) {
          this.theme.navigation.prev();
        }
      } else {
        if (this.theme.isPlaying || this.theme.isPlaying === null) {
          this.theme.sliderStory.autoplayStart();
        }

        this.theme.groupStories.getControlsElems().show();
      }
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider(indexGroup) {
      return {
        el: this.theme.modalEl.querySelector('#slider-groups'),
        containerModifierClass: 'sitestories-slider-groups_',
        wrapperClass: 'sitestories-slider-groups__wrapper',
        slideClass: 'sitestories-slider-groups__slide',
        slideActiveClass: 'sitestories-slider-groups__slide_active',
        slideNextClass: 'sitestories-slider-groups__slide_next',
        slidePrevClass: 'sitestories-slider-groups__slide_prev',
        slideFullyVisibleClass: 'sitestories-slider-groups__slide-fully-visible',
        slideVisibleClass: 'sitestories-slider-groups__slide-visible',
        slidesPerView: 'auto',
        effect: this.theme.isMobile ? 'cube' : 'slide',
        simulateTouch: true,
        allowTouchMove: this.theme.isMobile ? true : false,
        spaceBetween: 0,
        centeredSlides: true,
        slideToClickedSlide: false,
        initialSlide: indexGroup
      };
    }
  }]);

  return SliderGroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/facebook/groupStoriesThemeBusinessLogic.js


function facebook_groupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function facebook_groupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function facebook_groupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) facebook_groupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) facebook_groupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var groupStoriesThemeBusinessLogic_GroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function GroupStoriesThemeBusinessLogic(theme) {
    facebook_groupStoriesThemeBusinessLogic_classCallCheck(this, GroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  facebook_groupStoriesThemeBusinessLogic_createClass(GroupStoriesThemeBusinessLogic, [{
    key: "eventClick",
    value: function eventClick(e) {
      var self = this;

      if (e.target.closest('.sitestories-story-play[data-state="play"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.sliderStory.autoplayStart();
            self.theme.groupStories.getStatesIconsPlay().play();
            self.theme.isPlaying = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-play[data-state="pause"]')) {
        this.theme.sliderStory.autoplayStop();
        this.theme.groupStories.getStatesIconsPlay().pause();
        this.theme.isPlaying = false;
      }

      if (e.target.closest('.sitestories-story-sound[data-state="disable"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.story.videoManager.enableSound();
            self.theme.groupStories.getStatesSoundIcons().enable();
            self.theme.isSoundOn = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-sound[data-state="enable"]')) {
        this.theme.story.videoManager.disableSound();
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.isSoundOn = false;
      }
    }
  }, {
    key: "eventMouseout",
    value: function eventMouseout(e) {
      this.theme.groupStories.getControlsElems().show();
    }
  }]);

  return GroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/facebook/storySliderThemeBusinessLogic.js


function facebook_storySliderThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function facebook_storySliderThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function facebook_storySliderThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) facebook_storySliderThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) facebook_storySliderThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var storySliderThemeBusinessLogic_StorySliderThemeBusinessLogic = /*#__PURE__*/function () {
  function StorySliderThemeBusinessLogic(theme) {
    facebook_storySliderThemeBusinessLogic_classCallCheck(this, StorySliderThemeBusinessLogic);

    this.theme = theme;
  }

  facebook_storySliderThemeBusinessLogic_createClass(StorySliderThemeBusinessLogic, [{
    key: "eventAutoplayStop",
    value: function eventAutoplayStop() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventAutoplayStart",
    value: function eventAutoplayStart() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayResume",
    value: function eventAutoplayResume() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayPause",
    value: function eventAutoplayPause() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventSlideChange",
    value: function eventSlideChange() {
      this.theme.story.destroy();
      this.theme.groupStories.getAnimBullets().reset();
      this.theme.initStory();

      if (this.theme.isSoundOn) {
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.story.videoManager.disableSound();
      }

      this.theme.groupStories.getAnimBullets().updateState(this.theme.sliderStory.bullets, this.theme.sliderStory.activeIndex);
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider() {
      return {
        el: this.theme.groupStories.getControl().el.querySelector('.sitestories-slider-story'),
        containerModifierClass: 'sitestories-slider-story_',
        wrapperClass: 'sitestories-slider-story__wrapper',
        slideClass: 'sitestories-slider-story__slide',
        slideActiveClass: 'sitestories-slider-story__slide_active',
        slideNextClass: 'sitestories-slider-story__slide_next',
        slidePrevClass: 'sitestories-slider-story__slide_prev',
        bulletClass: 'sitestories-story-pagination__bullet',
        slidesPerView: 1,
        pagination: {
          el: this.theme.groupStories.getControl().el.querySelector('.sitestories-story-pagination')
        },
        //autoplay: {},
        //nested: false,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: true,
        spaceBetween: 0,
        centeredSlides: false,
        slideToClickedSlide: false,
        initialSlide: 0
      };
    }
  }]);

  return StorySliderThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/facebook/storyThemeBusinessLogic.js


function facebook_storyThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function facebook_storyThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function facebook_storyThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) facebook_storyThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) facebook_storyThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var storyThemeBusinessLogic_colorThief = new o();
var facebook_storyThemeBusinessLogic_StoryThemeBusinessLogic = /*#__PURE__*/function () {
  function StoryThemeBusinessLogic(theme) {
    facebook_storyThemeBusinessLogic_classCallCheck(this, StoryThemeBusinessLogic);

    this.theme = theme;
  }

  facebook_storyThemeBusinessLogic_createClass(StoryThemeBusinessLogic, [{
    key: "typeProduct",
    value: function typeProduct() {
      var self = this;
      var productEl = this.theme.story.control.el.querySelector('#story-product');
      this.theme.story.setProduct(productEl);
      this.theme.story.product.subscribeEvent('init', function () {
        var img = self.theme.story.product.el.querySelector('.sitestories-slider-product-images__image');

        if (img.complete) {
          var imgMainColorArr = storyThemeBusinessLogic_colorThief.getColor(img);
          self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
        } else {
          img.addEventListener('load', function () {
            var imgMainColorArr = storyThemeBusinessLogic_colorThief.getColor(img);
            self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
          });
        }
      });

      if (this.theme.story.product.action === 'go-to-link') {
        this._typeProductActionLink();
      }

      if (this.theme.story.product.action === 'open-product-card') {
        this._typeProductActionCard();
      }

      this.theme.story.product.init();
    }
  }, {
    key: "_typeProductActionLink",
    value: function _typeProductActionLink() {
      var self = this;
      this.theme.story.product.subscribeEvent('click', function (e) {
        var halfWidthWindow = window.innerWidth / 2;

        if (self.theme.story.product.sliderImages) {
          if (e.clientX > halfWidthWindow) {
            self.theme.story.product.sliderImages.slideNext();
          } else {
            self.theme.story.product.sliderImages.slidePrev();
          }
        }

        if (e.target.closest('.sitestories-story-product__button-box')) {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
        }
      });
      var sliderProductImagesEl = this.theme.story.product.el.querySelector('.sitestories-slider-product-images');
      var sliderProductImagesParams = {
        el: sliderProductImagesEl,
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-slider-product-images_',
        wrapperClass: 'sitestories-slider-product-images__wrapper',
        slideClass: 'sitestories-slider-product-images__slide',
        slideActiveClass: 'sitestories-slider-product-images__slide_active',
        slideNextClass: 'sitestories-slider-product-images__slide_next',
        slidePrevClass: 'sitestories-slider-product-images__slide_prev',
        bulletClass: 'sitestories-slider-product-images__bullet',
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 15,
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0,
        pagination: {
          el: sliderProductImagesEl.querySelector('.sitestories-slider-product-images__pagination')
        }
      };
      this.theme.story.product.setSliderImages(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.initSliderImages(sliderProductImagesParams);
    }
  }, {
    key: "_typeProductActionCard",
    value: function _typeProductActionCard() {
      var self = this;
      var productCardEl = this.theme.story.control.el.querySelector('#product-card');
      this.theme.story.setProductCard(productCardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.subscribeEvent('click', function (e) {
        if (e.target.closest('.sitestories-story-product__button')) {
          e.preventDefault();
        }
      });
      this.theme.story.product.subscribeEvent('pointerup', function (e) {
        // Open card
        if (e.target.closest('.sitestories-story-product__button-box')) {
          e.preventDefault();
          self.theme.story.productCard.setState('card');
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
          self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.disable();
          self.theme.sliderStory.disable();
        } // Go to checkout


        if (e.target.closest('.sitestories-story-product-card__response-button-checkout')) {
          var link = e.target.getAttribute('data-link') ? e.target.getAttribute('data-link') : '#no-link';
          window.location.href = link;
        }
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
        }
      });
      this.theme.story.subscribeEvent('destroy', function () {
        self.theme.story.productCard.setState('hide');
        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = this.theme.story.control.el.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "typeProductCollection",
    value: function typeProductCollection() {
      var self = this;
      var productCollectionEl = this.theme.story.control.el.querySelector('#product-collection');
      this.theme.story.setProductCollection(productCollectionEl);
      var sliderParams = this.getParamsSliderProductCollection();
      this.theme.story.productCollection.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.productCollection.initSlider(sliderParams);
      var previewEl = this.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
      this.theme.story.setProductPreview(previewEl);
      this.theme.story.productCollection.slider.subscribeEvent('pointerdown', function () {
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
      });
      this.theme.story.productCollection.slider.subscribeEvent('pointerup', function () {
        self.theme.sliderGroupStories.enable();
        self.theme.sliderStory.enable();
      });

      if (this.theme.story.productPreview.type === 'card') {
        this._typeProductCollectionCard();
      }

      if (this.theme.story.productPreview.type === 'link') {
        this._typeProductCollectionLink();
      }

      this.theme.story.productCollection.slider.subscribeEvent('slideChange', function (e) {
        self.theme.story.productPreview.destroy();
        var previewEl = self.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
        self.theme.story.setProductPreview(previewEl);

        if (self.theme.story.productPreview.type === 'card') {
          self._typeProductCollectionCard();
        }

        if (self.theme.story.productPreview.type === 'link') {
          self._typeProductCollectionLink();
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCollection.init();
      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      this.theme.story.productCollection.subscribeEvent('destroy', function () {
        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
      });
    }
  }, {
    key: "_typeProductCollectionCard",
    value: function _typeProductCollectionCard() {
      var self = this;

      if (self.theme.story.productCard) {
        self.theme.story.productCard.destroy();
      }

      var cardEl = this.theme.story.control.el.querySelectorAll('#product-card')[this.theme.story.productCollection.slider.activeIndex];

      if (!cardEl) {
        console.error('[sitestories]: Couldn\'t find product card element');
        return;
      }

      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.setProductCard(cardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card

      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();

        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width');
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
        self.theme.story.productCollection.slider.disable();
        self.theme.story.productCard.setState('card');
        self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
        self.theme.sliderStory.autoplayStop();
        self.theme.groupStories.getStatesIconsPlay().pause();
        self.theme.isPlaying = false;
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          if (self.theme.story.productCollection.slider.isEnd) {
            self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
          }

          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
          self.theme.story.productCollection.slider.enable();
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "_typeProductCollectionLink",
    value: function _typeProductCollectionLink() {
      var self = this;
      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();
        var button = self.theme.story.productPreview.el.querySelector('.sitestories-product-collection__product-preview-button');
        var link = button.getAttribute('href');
        window.location.href = link;
      });
      this.theme.story.productPreview.init();
    }
  }, {
    key: "typeProductList",
    value: function typeProductList() {
      var _this = this;

      var self = this;
      var previewsElems = this.theme.story.control.el.querySelectorAll('#product-preview');
      var cardsElems = this.theme.story.control.el.querySelectorAll('#product-card');
      var paramsSliderProductCard = this.getParamsSliderProductCard();

      var _loop = function _loop(i) {
        var previewEl = previewsElems[i];

        if (previewEl.getAttribute('data-type') === 'card') {
          var cardEl = cardsElems[i];
          paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');

          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.setProductCard(cardEl);

          _this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card


          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            self.theme.story.setProductCard(cardEl);
            self.theme.story.productCard.setState('card');
            self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
            self.theme.sliderStory.autoplayStop();
            self.theme.groupStories.getStatesIconsPlay().pause();
            self.theme.isPlaying = false;
            self.theme.sliderGroupStories.disable();
            self.theme.sliderStory.disable();
          });

          _this.theme.story.productCard.subscribeEvent('click', function (e) {
            // Close product card
            if (e.target.closest('.sitestories-story-product-card__close')) {
              self.theme.story.setProductCard(cardEl);
              self.theme.story.productCard.setState('hide');
              self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
              self.theme.sliderGroupStories.enable();
              self.theme.sliderStory.enable();
            }
          });

          _this.theme.story.productPreview.init();

          _this.theme.story.productCard.init();

          _this.theme.story.productCard.initSlider(paramsSliderProductCard);
        }

        if (previewEl.getAttribute('data-type') === 'link') {
          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            var button = previewEl.querySelector('.sitestories-product-list__product-button');
            var link = button.getAttribute('href');
            window.location.href = link;
          });

          _this.theme.story.productPreview.init();
        }
      };

      for (var i = 0; i < previewsElems.length; i++) {
        _loop(i);
      }

      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
    }
  }, {
    key: "getParamsSliderProductCollection",
    value: function getParamsSliderProductCollection() {
      return {
        el: this.theme.story.productCollection.el.querySelector('.sitestories-product-collection__slider'),
        slideToClickedSlide: true,
        containerModifierClass: 'sitestories-product-collection__slider_',
        wrapperClass: 'sitestories-product-collection__slider-wrapper',
        slideClass: 'sitestories-product-collection__slide',
        slideActiveClass: 'sitestories-product-collection__slide_active',
        slideNextClass: 'sitestories-product-collection__slide_next',
        slidePrevClass: 'sitestories-product-collection__slide_prev',
        bulletClass: 'sitestories-product-collection__slider-bullet',
        slidesPerView: 1.2,
        centeredSlides: false,
        spaceBetween: 0,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "getParamsSliderProductCard",
    value: function getParamsSliderProductCard() {
      return {
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-story-product-card__slider_',
        wrapperClass: 'sitestories-story-product-card__slider-wrapper',
        slideClass: 'sitestories-story-product-card__slide',
        slideActiveClass: 'sitestories-story-product-card__slide_active',
        slideNextClass: 'sitestories-story-product-card__slide_next',
        slidePrevClass: 'sitestories-story-product-card__slide_prev',
        bulletClass: 'sitestories-story-product-card__slider-bullet',
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "eventActive",
    value: function eventActive(storyControl) {
      var self = this;
      this.theme.modalBackground.setBackground(storyControl.srcMedia, storyControl.typeStory);
      this.theme.groupStories.getControlsElems().show();

      if (this.theme.isPlaying === null || this.theme.isPlaying) {
        this.theme.story.videoManager.play();
        this.theme.groupStories.getAnimBullets().start(storyControl.bulletAnimEl, storyControl.speedAutoplayMS).then(function () {
          self.theme.story.videoManager.pause();
          self.theme.modalBackground.pauseVideo();
          self.theme.navigation.next();
        });
        this.theme.groupStories.getStatesIconsPlay().play();

        if (storyControl.typeStory === 'video') {
          this.theme.modalBackground.playVideo();
        }
      }

      if (this.theme.isSoundOn) {
        this.theme.groupStories.getStatesSoundIcons().enable();
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.story.videoManager.disableSound();
      }

      this.theme.story.setTimePassed(this.theme.groupStories.control.el, this.theme.lang);
      this.theme.story.control.activeAnimate();
    }
  }, {
    key: "eventReset",
    value: function eventReset() {
      this.theme.modalBackground.reset();
      this.theme.story.videoManager.reset();
      this.theme.story.control.resetAnimate();
    }
  }]);

  return StoryThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/facebook/navigationThemeBusinessLogic.js


function facebook_navigationThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function facebook_navigationThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function facebook_navigationThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) facebook_navigationThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) facebook_navigationThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var navigationThemeBusinessLogic_NavigationThemeBusinessLogic = /*#__PURE__*/function () {
  function NavigationThemeBusinessLogic(theme) {
    facebook_navigationThemeBusinessLogic_classCallCheck(this, NavigationThemeBusinessLogic);

    this.theme = theme;
    this.isLastStory = false;
  }

  facebook_navigationThemeBusinessLogic_createClass(NavigationThemeBusinessLogic, [{
    key: "next",
    value: function next() {
      if (this.theme.sliderStory.isEnd) {
        this.theme.sliderGroupStories.slideNext();
      } else {
        this.theme.sliderStory.slideNext();
      }

      if (this.isLastStory) {
        this.theme.modal.close();
      }

      if (this.theme.sliderGroupStories.isEnd) {
        if (this.theme.sliderStory.isEnd) {
          this.isLastStory = true;
        }
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this.isLastStory = false;

      if (this.theme.sliderStory.isBeginning) {
        this.theme.sliderGroupStories.slidePrev();
      } else {
        this.theme.sliderStory.slidePrev();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.theme = null;
    }
  }]);

  return NavigationThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/facebook/facebook.js





function facebook_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function facebook_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function facebook_createClass(Constructor, protoProps, staticProps) { if (protoProps) facebook_defineProperties(Constructor.prototype, protoProps); if (staticProps) facebook_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Core
 // Adapters

 // Use cases






 // Libs

var facebook_fslightbox = __webpack_require__(20);

var facebook_Facebook = /*#__PURE__*/function () {
  function Facebook(params) {
    facebook_classCallCheck(this, Facebook);

    this.storiesEl = params.storiesEl;
    this.storiesId = this.storiesEl.getAttribute('id');
    this.isMobile = this.storiesEl.getAttribute('data-device') === 'mobile';
    this.lang = this.storiesEl.getAttribute('data-lang') ? this.storiesEl.getAttribute('data-lang') : 'en';
    this.previewsEl = this.storiesEl.querySelector('.sitestories__previews');
    this.previewlistElems = this.previewsEl.querySelectorAll('.sitestories__preview');
    this.modalEl = this.storiesEl.querySelector('.sitestories__modal');
    this.modal = new Modal(this.modalEl);
    this.modalBackground = new ModalBackground(this.modalEl);
    this.iconCloseElems = this.modalEl.querySelectorAll('.sitestories__modal-close');
    this.sliderGroupStories = null;
    this.sliderPreviews = null;
    this.groupStories = null;
    this.sliderStory = null;
    this.story = null;
    this.navigation = null;
    this.isPlaying = null;
    this.isSoundOn = null;
    this.isInit = null;
    this.init();
  }

  facebook_createClass(Facebook, [{
    key: "init",
    value: function init() {
      var self = this;
      this.modal.subscribeEvent('close', function () {
        self.destroy();
      });

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.addEventListener('click', this.modalClose.bind(this), false);
      }

      this.previewsInit();
    }
  }, {
    key: "modalClose",
    value: function modalClose() {
      this.modal.close();
    }
  }, {
    key: "previewsInit",
    value: function previewsInit() {
      var _this = this;

      var self = this;
      this.sliderPreviews = new sliderSwiper_SliderSwiperAdapter();
      var previewsThemeBusinessLogic = new previewsThemeBusinessLogic_PreviewsThemeBusinessLogic(this);
      var paramsSliderPreviews = previewsThemeBusinessLogic.getParamsSlider();
      this.sliderPreviews.init(paramsSliderPreviews);

      var _loop = function _loop(i) {
        var previewEl = _this.previewlistElems[i];
        var groupId = previewEl.getAttribute('data-group');
        updateStatePreview(previewEl, _this.storiesId, groupId);
        previewEl.addEventListener('click', function () {
          self.modal.open();
          self.initSliderGroupStories(i);
        });
      };

      for (var i = 0; i < this.previewlistElems.length; i++) {
        _loop(i);
      }

      this.previewsEl.style.opacity = '';
    }
  }, {
    key: "initSliderGroupStories",
    value: function initSliderGroupStories(indexGroup) {
      var sliderGroupStoriesThemeBusinessLogic = new sliderGroupStoriesThemeBusinessLogic_SliderGroupStoriesThemeBusinessLogic(this);
      var paramsSliderGroupStories = sliderGroupStoriesThemeBusinessLogic.getParamsSlider(indexGroup);
      this.sliderGroupStories = new sliderSwiper_SliderSwiperAdapter();
      this.sliderGroupStories.subscribeEvent('slideChange', function () {
        sliderGroupStoriesThemeBusinessLogic.eventSlideChange();
      });
      this.sliderGroupStories.subscribeEvent('pointerdown', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerdown(e);
      });
      this.sliderGroupStories.subscribeEvent('pointerup', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerup(e);
      });

      function iOS() {
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
        || navigator.userAgent.includes("Mac") && "ontouchend" in document;
      }

      if (iOS) {
        paramsSliderGroupStories.effect = 'slide';
      }

      this.sliderGroupStories.init(paramsSliderGroupStories);
      this.initGroupStories();
    }
  }, {
    key: "initGroupStories",
    value: function initGroupStories() {
      var previewEl = this.previewlistElems[this.sliderGroupStories.activeIndex];
      var groupId = previewEl.getAttribute('data-group');
      saveViewStoriesGroup(this.storiesId, groupId);
      updateStatePreview(previewEl, this.storiesId, groupId);
      var groupStoriesThemeBusinessLogic = new groupStoriesThemeBusinessLogic_GroupStoriesThemeBusinessLogic(this);
      var activeSlide = this.sliderGroupStories.activeSlide;
      var groupEl = activeSlide.querySelector('.sitestories-group-stories');
      this.groupStories = new groupStoriesFacade_GroupStoriesFacade(groupEl);
      this.groupStories.getControl().subscribeEvent('click', function (e) {
        groupStoriesThemeBusinessLogic.eventClick(e);
      });
      this.groupStories.getControl().subscribeEvent('mouseout', function (e) {
        groupStoriesThemeBusinessLogic.eventMouseout(e);
      });
      this.groupStories.getControl().init();
      this.initStorySlider();
    }
  }, {
    key: "initStorySlider",
    value: function initStorySlider() {
      this.sliderStory = new sliderSwiper_SliderSwiperAdapter();
      var storySliderThemeBusinessLogic = new storySliderThemeBusinessLogic_StorySliderThemeBusinessLogic(this);
      var paramsSliderStory = storySliderThemeBusinessLogic.getParamsSlider();
      this.sliderStory.subscribeEvent('autoplayStop', function () {
        storySliderThemeBusinessLogic.eventAutoplayStop();
      });
      this.sliderStory.subscribeEvent('autoplayStart', function () {
        storySliderThemeBusinessLogic.eventAutoplayStart();
      });
      this.sliderStory.subscribeEvent('autoplayResume', function () {
        storySliderThemeBusinessLogic.eventAutoplayResume();
      });
      this.sliderStory.subscribeEvent('autoplayPause', function () {
        storySliderThemeBusinessLogic.eventAutoplayPause();
      });
      this.sliderStory.subscribeEvent('slideChange', function () {
        storySliderThemeBusinessLogic.eventSlideChange();
      });
      this.sliderStory.init(paramsSliderStory);
      this.navigation = new navigationThemeBusinessLogic_NavigationThemeBusinessLogic(this);
      this.initStory();
    }
  }, {
    key: "initStory",
    value: function initStory() {
      this.story = new storyFacade_StoryFacade({
        wrapper: this.sliderStory.activeSlide,
        bullets: this.sliderStory.bullets,
        slideActiveIndex: this.sliderStory.activeIndex,
        activeBullet: this.sliderStory.activeBullet
      });
      var storyThemeBusinessLogic = new facebook_storyThemeBusinessLogic_StoryThemeBusinessLogic(this);
      this.story.control.subscribeEvent('active', function (storyControl) {
        storyThemeBusinessLogic.eventActive(storyControl);
      });

      if (this.story.control.type === 'product') {
        storyThemeBusinessLogic.typeProduct();
      }

      if (this.story.control.type === 'product-collection') {
        storyThemeBusinessLogic.typeProductCollection();
      }

      if (this.story.control.type === 'product-list') {
        storyThemeBusinessLogic.typeProductList();
      }

      this.story.control.subscribeEvent('reset', function (story) {
        storyThemeBusinessLogic.eventReset();
      });
      this.story.control.active();
      this.isInit = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.sliderGroupStories) {
        this.story.destroy();
        this.sliderStory.destroy();
        this.groupStories.destroy();
        this.sliderGroupStories.destroy();
        this.sliderGroupStories = null;
        this.groupStories = null;
        this.sliderStory = null;
        this.story = null;
        this.navigation = null;
        this.isPlaying = null;
        this.isSoundOn = null;
        this.isInit = null;
      }

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.removeEventListener('click', this.modalClose.bind(this), false);
      }
    }
  }]);

  return Facebook;
}();


// CONCATENATED MODULE: ./src/use_cases/themes/samokat/previewsThemeBusinessLogic.js


function samokat_previewsThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function samokat_previewsThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function samokat_previewsThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) samokat_previewsThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) samokat_previewsThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var samokat_previewsThemeBusinessLogic_PreviewsThemeBusinessLogic = /*#__PURE__*/function () {
  function PreviewsThemeBusinessLogic(theme) {
    samokat_previewsThemeBusinessLogic_classCallCheck(this, PreviewsThemeBusinessLogic);

    this.theme = theme;
  }

  samokat_previewsThemeBusinessLogic_createClass(PreviewsThemeBusinessLogic, [{
    key: "getParamsSlider",
    value: function getParamsSlider() {
      var spaceBetweenPreviews = this.theme.previewsEl.getAttribute('data-space-between') ? this.theme.previewsEl.getAttribute('data-space-between') : 10;
      return {
        el: this.theme.previewsEl.querySelector('#previews-slider'),
        containerModifierClass: 'sitestories-previews-slider_',
        wrapperClass: 'sitestories-previews-slider__wrapper',
        slideClass: 'sitestories-previews-slider__slide',
        slideActiveClass: 'sitestories-previews-slider__slide_active',
        slideNextClass: 'sitestories-previews-slider__slide_next',
        slidePrevClass: 'sitestories-previews-slider__slide_prev',
        slidesPerView: 'auto',
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        spaceBetween: spaceBetweenPreviews,
        centeredSlides: false,
        slideToClickedSlide: true,
        initialSlide: 0,
        navigation: {
          nextEl: '.sitestories-previews-slider__button-nav_next',
          prevEl: '.sitestories-previews-slider__button-nav_prev',
          disabledClass: 'sitestories-previews-slider__button-nav_disabled'
        }
      };
    }
  }]);

  return PreviewsThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/samokat/sliderGroupStoriesThemeBusinessLogic.js




function samokat_sliderGroupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function samokat_sliderGroupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function samokat_sliderGroupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) samokat_sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) samokat_sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var samokat_sliderGroupStoriesThemeBusinessLogic_SliderGroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function SliderGroupStoriesThemeBusinessLogic(theme) {
    samokat_sliderGroupStoriesThemeBusinessLogic_classCallCheck(this, SliderGroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  samokat_sliderGroupStoriesThemeBusinessLogic_createClass(SliderGroupStoriesThemeBusinessLogic, [{
    key: "eventSlideChange",
    value: function eventSlideChange() {
      if (this.theme.isInit) {
        this.theme.story.destroy();
        this.theme.sliderStory.destroy();
        this.theme.groupStories.getControlsElems().hide();
        this.theme.groupStories.destroy();
        this.theme.story = null;
        this.theme.sliderStory = null;
        this.theme.initGroupStories();

        if (this.theme.isPlaying === false) {
          this.theme.sliderStory.autoplayStop();
          this.theme.groupStories.getStatesIconsPlay().pause();
        }
      }
    }
  }, {
    key: "eventPointerdown",
    value: function eventPointerdown(e) {
      var self = this;

      if (!e.target.closest('.sitestories-story-content-product-link__product-images') && !e.target.closest('.sitestories-group-stories__header') && !e.target.closest('.sitestories-story-product-card') && !e.target.closest('.sitestories-story-product__button-box') && !e.target.closest('.sitestories-story-product-card__close') && !e.target.closest('.sitestories-story-product__product-images') && !e.target.closest('.sitestories-product-list__product-preview') && !e.target.closest('.sitestories-product-collection__product-preview')) {
        this.theme.groupStories.getControl().timeoutTouchStart = setTimeout(function () {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getControlsElems().hide();
        }, 150);
        this.theme.groupStories.getControl().timeTouchStart = new Date().valueOf();
      }
    }
  }, {
    key: "eventPointerup",
    value: function eventPointerup(e) {
      clearTimeout(this.theme.groupStories.getControl().timeoutTouchStart);
      this.theme.groupStories.getControl().timeTouchEnd = new Date().valueOf();
      var timeTouchMS = this.theme.groupStories.getControl().timeTouchEnd - this.theme.groupStories.getControl().timeTouchStart;
      var clientX = this.theme.isMobile ? e.changedTouches[0].clientX : e.clientX;

      if (timeTouchMS < 150) {
        var halfWidthWindow = window.innerWidth / 2;

        if (clientX > halfWidthWindow) {
          this.theme.navigation.next();
        }

        if (clientX < halfWidthWindow) {
          this.theme.navigation.prev();
        }
      } else {
        if (this.theme.isPlaying || this.theme.isPlaying === null) {
          this.theme.sliderStory.autoplayStart();
        }

        this.theme.groupStories.getControlsElems().show();
      }
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider(indexGroup) {
      return {
        el: this.theme.modalEl.querySelector('#slider-groups'),
        containerModifierClass: 'sitestories-slider-groups_',
        wrapperClass: 'sitestories-slider-groups__wrapper',
        slideClass: 'sitestories-slider-groups__slide',
        slideActiveClass: 'sitestories-slider-groups__slide_active',
        slideNextClass: 'sitestories-slider-groups__slide_next',
        slidePrevClass: 'sitestories-slider-groups__slide_prev',
        slideFullyVisibleClass: 'sitestories-slider-groups__slide-fully-visible',
        slideVisibleClass: 'sitestories-slider-groups__slide-visible',
        slidesPerView: 'auto',
        effect: this.theme.isMobile ? 'cube' : 'slide',
        simulateTouch: true,
        allowTouchMove: this.theme.isMobile ? true : false,
        spaceBetween: 0,
        centeredSlides: true,
        slideToClickedSlide: false,
        initialSlide: indexGroup
      };
    }
  }]);

  return SliderGroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/samokat/groupStoriesThemeBusinessLogic.js


function samokat_groupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function samokat_groupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function samokat_groupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) samokat_groupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) samokat_groupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var samokat_groupStoriesThemeBusinessLogic_GroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function GroupStoriesThemeBusinessLogic(theme) {
    samokat_groupStoriesThemeBusinessLogic_classCallCheck(this, GroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  samokat_groupStoriesThemeBusinessLogic_createClass(GroupStoriesThemeBusinessLogic, [{
    key: "eventClick",
    value: function eventClick(e) {
      var self = this;

      if (e.target.closest('.sitestories-story-play[data-state="play"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.sliderStory.autoplayStart();
            self.theme.groupStories.getStatesIconsPlay().play();
            self.theme.isPlaying = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-play[data-state="pause"]')) {
        this.theme.sliderStory.autoplayStop();
        this.theme.groupStories.getStatesIconsPlay().pause();
        this.theme.isPlaying = false;
      }

      if (e.target.closest('.sitestories-story-sound[data-state="disable"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.story.videoManager.enableSound();
            self.theme.groupStories.getStatesSoundIcons().enable();
            self.theme.isSoundOn = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-sound[data-state="enable"]')) {
        this.theme.story.videoManager.disableSound();
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.isSoundOn = false;
      }
    }
  }, {
    key: "eventMouseout",
    value: function eventMouseout(e) {
      this.theme.groupStories.getControlsElems().show();
    }
  }]);

  return GroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/samokat/storySliderThemeBusinessLogic.js


function samokat_storySliderThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function samokat_storySliderThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function samokat_storySliderThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) samokat_storySliderThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) samokat_storySliderThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var samokat_storySliderThemeBusinessLogic_StorySliderThemeBusinessLogic = /*#__PURE__*/function () {
  function StorySliderThemeBusinessLogic(theme) {
    samokat_storySliderThemeBusinessLogic_classCallCheck(this, StorySliderThemeBusinessLogic);

    this.theme = theme;
  }

  samokat_storySliderThemeBusinessLogic_createClass(StorySliderThemeBusinessLogic, [{
    key: "eventAutoplayStop",
    value: function eventAutoplayStop() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventAutoplayStart",
    value: function eventAutoplayStart() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayResume",
    value: function eventAutoplayResume() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayPause",
    value: function eventAutoplayPause() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventSlideChange",
    value: function eventSlideChange() {
      this.theme.story.destroy();
      this.theme.groupStories.getAnimBullets().reset();
      this.theme.initStory();

      if (this.theme.isSoundOn) {
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.story.videoManager.disableSound();
      }

      this.theme.groupStories.getAnimBullets().updateState(this.theme.sliderStory.bullets, this.theme.sliderStory.activeIndex);
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider() {
      return {
        el: this.theme.groupStories.getControl().el.querySelector('.sitestories-slider-story'),
        containerModifierClass: 'sitestories-slider-story_',
        wrapperClass: 'sitestories-slider-story__wrapper',
        slideClass: 'sitestories-slider-story__slide',
        slideActiveClass: 'sitestories-slider-story__slide_active',
        slideNextClass: 'sitestories-slider-story__slide_next',
        slidePrevClass: 'sitestories-slider-story__slide_prev',
        bulletClass: 'sitestories-story-pagination__bullet',
        slidesPerView: 1,
        pagination: {
          el: this.theme.groupStories.getControl().el.querySelector('.sitestories-story-pagination')
        },
        //autoplay: {},
        //nested: false,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: true,
        spaceBetween: 0,
        centeredSlides: false,
        slideToClickedSlide: false,
        initialSlide: 0
      };
    }
  }]);

  return StorySliderThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/samokat/storyThemeBusinessLogic.js


function samokat_storyThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function samokat_storyThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function samokat_storyThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) samokat_storyThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) samokat_storyThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var samokat_storyThemeBusinessLogic_colorThief = new o();
var samokat_storyThemeBusinessLogic_StoryThemeBusinessLogic = /*#__PURE__*/function () {
  function StoryThemeBusinessLogic(theme) {
    samokat_storyThemeBusinessLogic_classCallCheck(this, StoryThemeBusinessLogic);

    this.theme = theme;
  }

  samokat_storyThemeBusinessLogic_createClass(StoryThemeBusinessLogic, [{
    key: "typeProduct",
    value: function typeProduct() {
      var self = this;
      var productEl = this.theme.story.control.el.querySelector('#story-product');
      this.theme.story.setProduct(productEl);
      this.theme.story.product.subscribeEvent('init', function () {
        var img = self.theme.story.product.el.querySelector('.sitestories-slider-product-images__image');

        if (img.complete) {
          var imgMainColorArr = samokat_storyThemeBusinessLogic_colorThief.getColor(img);
          self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
        } else {
          img.addEventListener('load', function () {
            var imgMainColorArr = samokat_storyThemeBusinessLogic_colorThief.getColor(img);
            self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
          });
        }
      });

      if (this.theme.story.product.action === 'go-to-link') {
        this._typeProductActionLink();
      }

      if (this.theme.story.product.action === 'open-product-card') {
        this._typeProductActionCard();
      }

      this.theme.story.product.init();
    }
  }, {
    key: "_typeProductActionLink",
    value: function _typeProductActionLink() {
      var self = this;
      this.theme.story.product.subscribeEvent('click', function (e) {
        var halfWidthWindow = window.innerWidth / 2;

        if (self.theme.story.product.sliderImages) {
          if (e.clientX > halfWidthWindow) {
            self.theme.story.product.sliderImages.slideNext();
          } else {
            self.theme.story.product.sliderImages.slidePrev();
          }
        }

        if (e.target.closest('.sitestories-story-product__button-box')) {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
        }
      });
      var sliderProductImagesEl = this.theme.story.product.el.querySelector('.sitestories-slider-product-images');
      var sliderProductImagesParams = {
        el: sliderProductImagesEl,
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-slider-product-images_',
        wrapperClass: 'sitestories-slider-product-images__wrapper',
        slideClass: 'sitestories-slider-product-images__slide',
        slideActiveClass: 'sitestories-slider-product-images__slide_active',
        slideNextClass: 'sitestories-slider-product-images__slide_next',
        slidePrevClass: 'sitestories-slider-product-images__slide_prev',
        bulletClass: 'sitestories-slider-product-images__bullet',
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 15,
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0,
        pagination: {
          el: sliderProductImagesEl.querySelector('.sitestories-slider-product-images__pagination')
        }
      };
      this.theme.story.product.setSliderImages(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.initSliderImages(sliderProductImagesParams);
    }
  }, {
    key: "_typeProductActionCard",
    value: function _typeProductActionCard() {
      var self = this;
      var productCardEl = this.theme.story.control.el.querySelector('#product-card');
      this.theme.story.setProductCard(productCardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.subscribeEvent('click', function (e) {
        if (e.target.closest('.sitestories-story-product__button')) {
          e.preventDefault();
        }
      });
      this.theme.story.product.subscribeEvent('pointerup', function (e) {
        // Open card
        if (e.target.closest('.sitestories-story-product__button-box')) {
          e.preventDefault();
          self.theme.story.productCard.setState('card');
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
          self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.disable();
          self.theme.sliderStory.disable();
        } // Go to checkout


        if (e.target.closest('.sitestories-story-product-card__response-button-checkout')) {
          var link = e.target.getAttribute('data-link') ? e.target.getAttribute('data-link') : '#no-link';
          window.location.href = link;
        }
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
        }
      });
      this.theme.story.subscribeEvent('destroy', function () {
        self.theme.story.productCard.setState('hide');
        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = this.theme.story.control.el.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "typeProductCollection",
    value: function typeProductCollection() {
      var self = this;
      var productCollectionEl = this.theme.story.control.el.querySelector('#product-collection');
      this.theme.story.setProductCollection(productCollectionEl);
      var sliderParams = this.getParamsSliderProductCollection();
      this.theme.story.productCollection.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.productCollection.initSlider(sliderParams);
      var previewEl = this.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
      this.theme.story.setProductPreview(previewEl);
      this.theme.story.productCollection.slider.subscribeEvent('pointerdown', function () {
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
      });
      this.theme.story.productCollection.slider.subscribeEvent('pointerup', function () {
        self.theme.sliderGroupStories.enable();
        self.theme.sliderStory.enable();
      });

      if (this.theme.story.productPreview.type === 'card') {
        this._typeProductCollectionCard();
      }

      if (this.theme.story.productPreview.type === 'link') {
        this._typeProductCollectionLink();
      }

      this.theme.story.productCollection.slider.subscribeEvent('slideChange', function (e) {
        self.theme.story.productPreview.destroy();
        var previewEl = self.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
        self.theme.story.setProductPreview(previewEl);

        if (self.theme.story.productPreview.type === 'card') {
          self._typeProductCollectionCard();
        }

        if (self.theme.story.productPreview.type === 'link') {
          self._typeProductCollectionLink();
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCollection.init();
      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      this.theme.story.productCollection.subscribeEvent('destroy', function () {
        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
      });
    }
  }, {
    key: "_typeProductCollectionCard",
    value: function _typeProductCollectionCard() {
      var self = this;

      if (self.theme.story.productCard) {
        self.theme.story.productCard.destroy();
      }

      var cardEl = this.theme.story.control.el.querySelectorAll('#product-card')[this.theme.story.productCollection.slider.activeIndex];

      if (!cardEl) {
        console.error('[sitestories]: Couldn\'t find product card element');
        return;
      }

      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.setProductCard(cardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card

      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();

        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width');
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
        self.theme.story.productCollection.slider.disable();
        self.theme.story.productCard.setState('card');
        self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
        self.theme.sliderStory.autoplayStop();
        self.theme.groupStories.getStatesIconsPlay().pause();
        self.theme.isPlaying = false;
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          if (self.theme.story.productCollection.slider.isEnd) {
            self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
          }

          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
          self.theme.story.productCollection.slider.enable();
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "_typeProductCollectionLink",
    value: function _typeProductCollectionLink() {
      var self = this;
      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();
        var button = self.theme.story.productPreview.el.querySelector('.sitestories-product-collection__product-preview-button');
        var link = button.getAttribute('href');
        window.location.href = link;
      });
      this.theme.story.productPreview.init();
    }
  }, {
    key: "typeProductList",
    value: function typeProductList() {
      var _this = this;

      var self = this;
      var previewsElems = this.theme.story.control.el.querySelectorAll('#product-preview');
      var cardsElems = this.theme.story.control.el.querySelectorAll('#product-card');
      var paramsSliderProductCard = this.getParamsSliderProductCard();

      var _loop = function _loop(i) {
        var previewEl = previewsElems[i];

        if (previewEl.getAttribute('data-type') === 'card') {
          var cardEl = cardsElems[i];
          paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');

          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.setProductCard(cardEl);

          _this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card


          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            self.theme.story.setProductCard(cardEl);
            self.theme.story.productCard.setState('card');
            self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
            self.theme.sliderStory.autoplayStop();
            self.theme.groupStories.getStatesIconsPlay().pause();
            self.theme.isPlaying = false;
            self.theme.sliderGroupStories.disable();
            self.theme.sliderStory.disable();
          });

          _this.theme.story.productCard.subscribeEvent('click', function (e) {
            // Close product card
            if (e.target.closest('.sitestories-story-product-card__close')) {
              self.theme.story.setProductCard(cardEl);
              self.theme.story.productCard.setState('hide');
              self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
              self.theme.sliderGroupStories.enable();
              self.theme.sliderStory.enable();
            }
          });

          _this.theme.story.productPreview.init();

          _this.theme.story.productCard.init();

          _this.theme.story.productCard.initSlider(paramsSliderProductCard);
        }

        if (previewEl.getAttribute('data-type') === 'link') {
          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            var button = previewEl.querySelector('.sitestories-product-list__product-button');
            var link = button.getAttribute('href');
            window.location.href = link;
          });

          _this.theme.story.productPreview.init();
        }
      };

      for (var i = 0; i < previewsElems.length; i++) {
        _loop(i);
      }

      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
    }
  }, {
    key: "getParamsSliderProductCollection",
    value: function getParamsSliderProductCollection() {
      return {
        el: this.theme.story.productCollection.el.querySelector('.sitestories-product-collection__slider'),
        slideToClickedSlide: true,
        containerModifierClass: 'sitestories-product-collection__slider_',
        wrapperClass: 'sitestories-product-collection__slider-wrapper',
        slideClass: 'sitestories-product-collection__slide',
        slideActiveClass: 'sitestories-product-collection__slide_active',
        slideNextClass: 'sitestories-product-collection__slide_next',
        slidePrevClass: 'sitestories-product-collection__slide_prev',
        bulletClass: 'sitestories-product-collection__slider-bullet',
        slidesPerView: 1.2,
        centeredSlides: false,
        spaceBetween: 0,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "getParamsSliderProductCard",
    value: function getParamsSliderProductCard() {
      return {
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-story-product-card__slider_',
        wrapperClass: 'sitestories-story-product-card__slider-wrapper',
        slideClass: 'sitestories-story-product-card__slide',
        slideActiveClass: 'sitestories-story-product-card__slide_active',
        slideNextClass: 'sitestories-story-product-card__slide_next',
        slidePrevClass: 'sitestories-story-product-card__slide_prev',
        bulletClass: 'sitestories-story-product-card__slider-bullet',
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "eventActive",
    value: function eventActive(storyControl) {
      var self = this;
      this.theme.modalBackground.setBackground(storyControl.srcMedia, storyControl.typeStory);
      this.theme.groupStories.getControlsElems().show();

      if (this.theme.isPlaying === null || this.theme.isPlaying) {
        this.theme.story.videoManager.play();
        this.theme.groupStories.getAnimBullets().start(storyControl.bulletAnimEl, storyControl.speedAutoplayMS).then(function () {
          self.theme.story.videoManager.pause();
          self.theme.modalBackground.pauseVideo();
          self.theme.navigation.next();
        });
        this.theme.groupStories.getStatesIconsPlay().play();

        if (storyControl.typeStory === 'video') {
          this.theme.modalBackground.playVideo();
        }
      }

      if (this.theme.isSoundOn) {
        this.theme.groupStories.getStatesSoundIcons().enable();
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.story.videoManager.disableSound();
      }

      this.theme.story.setTimePassed(this.theme.groupStories.control.el, this.theme.lang);
      this.theme.story.control.activeAnimate();
    }
  }, {
    key: "eventReset",
    value: function eventReset() {
      this.theme.modalBackground.reset();
      this.theme.story.videoManager.reset();
      this.theme.story.control.resetAnimate();
    }
  }]);

  return StoryThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/samokat/navigationThemeBusinessLogic.js


function samokat_navigationThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function samokat_navigationThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function samokat_navigationThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) samokat_navigationThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) samokat_navigationThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var samokat_navigationThemeBusinessLogic_NavigationThemeBusinessLogic = /*#__PURE__*/function () {
  function NavigationThemeBusinessLogic(theme) {
    samokat_navigationThemeBusinessLogic_classCallCheck(this, NavigationThemeBusinessLogic);

    this.theme = theme;
    this.isLastStory = false;
  }

  samokat_navigationThemeBusinessLogic_createClass(NavigationThemeBusinessLogic, [{
    key: "next",
    value: function next() {
      if (this.theme.sliderStory.isEnd) {
        this.theme.sliderGroupStories.slideNext();
      } else {
        this.theme.sliderStory.slideNext();
      }

      if (this.isLastStory) {
        this.theme.modal.close();
      }

      if (this.theme.sliderGroupStories.isEnd) {
        if (this.theme.sliderStory.isEnd) {
          this.isLastStory = true;
        }
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this.isLastStory = false;

      if (this.theme.sliderStory.isBeginning) {
        this.theme.sliderGroupStories.slidePrev();
      } else {
        this.theme.sliderStory.slidePrev();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.theme = null;
    }
  }]);

  return NavigationThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/samokat/samokat.js





function samokat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function samokat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function samokat_createClass(Constructor, protoProps, staticProps) { if (protoProps) samokat_defineProperties(Constructor.prototype, protoProps); if (staticProps) samokat_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Core
 // Adapters

 // Use cases






 // Libs

var samokat_fslightbox = __webpack_require__(20);

var samokat_Samokat = /*#__PURE__*/function () {
  function Samokat(params) {
    samokat_classCallCheck(this, Samokat);

    this.storiesEl = params.storiesEl;
    this.storiesId = this.storiesEl.getAttribute('id');
    this.isMobile = this.storiesEl.getAttribute('data-device') === 'mobile';
    this.lang = this.storiesEl.getAttribute('data-lang') ? this.storiesEl.getAttribute('data-lang') : 'en';
    this.previewsEl = this.storiesEl.querySelector('.sitestories__previews');
    this.previewlistElems = this.previewsEl.querySelectorAll('.sitestories__preview');
    this.modalEl = this.storiesEl.querySelector('.sitestories__modal');
    this.modal = new Modal(this.modalEl);
    this.modalBackground = new ModalBackground(this.modalEl);
    this.iconCloseElems = this.modalEl.querySelectorAll('.sitestories__modal-close');
    this.sliderGroupStories = null;
    this.sliderPreviews = null;
    this.groupStories = null;
    this.sliderStory = null;
    this.story = null;
    this.navigation = null;
    this.isPlaying = null;
    this.isSoundOn = null;
    this.isInit = null;
    this.init();
  }

  samokat_createClass(Samokat, [{
    key: "init",
    value: function init() {
      var self = this;
      this.modal.subscribeEvent('close', function () {
        self.destroy();
      });

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.addEventListener('click', this.modalClose.bind(this), false);
      }

      this.previewsInit();
    }
  }, {
    key: "modalClose",
    value: function modalClose() {
      this.modal.close();
    }
  }, {
    key: "previewsInit",
    value: function previewsInit() {
      var _this = this;

      var self = this;
      this.sliderPreviews = new sliderSwiper_SliderSwiperAdapter();
      var previewsThemeBusinessLogic = new samokat_previewsThemeBusinessLogic_PreviewsThemeBusinessLogic(this);
      var paramsSliderPreviews = previewsThemeBusinessLogic.getParamsSlider();
      this.sliderPreviews.init(paramsSliderPreviews);

      var _loop = function _loop(i) {
        var previewEl = _this.previewlistElems[i];
        var groupId = previewEl.getAttribute('data-group');
        updateStatePreview(previewEl, _this.storiesId, groupId);
        previewEl.addEventListener('click', function () {
          self.modal.open();
          self.initSliderGroupStories(i);
        });
      };

      for (var i = 0; i < this.previewlistElems.length; i++) {
        _loop(i);
      }

      this.previewsEl.style.opacity = '';
    }
  }, {
    key: "initSliderGroupStories",
    value: function initSliderGroupStories(indexGroup) {
      var sliderGroupStoriesThemeBusinessLogic = new samokat_sliderGroupStoriesThemeBusinessLogic_SliderGroupStoriesThemeBusinessLogic(this);
      var paramsSliderGroupStories = sliderGroupStoriesThemeBusinessLogic.getParamsSlider(indexGroup);
      this.sliderGroupStories = new sliderSwiper_SliderSwiperAdapter();
      this.sliderGroupStories.subscribeEvent('slideChange', function () {
        sliderGroupStoriesThemeBusinessLogic.eventSlideChange();
      });
      this.sliderGroupStories.subscribeEvent('pointerdown', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerdown(e);
      });
      this.sliderGroupStories.subscribeEvent('pointerup', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerup(e);
      });

      function iOS() {
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
        || navigator.userAgent.includes("Mac") && "ontouchend" in document;
      }

      if (iOS) {
        paramsSliderGroupStories.effect = 'slide';
      }

      this.sliderGroupStories.init(paramsSliderGroupStories);
      this.initGroupStories();
    }
  }, {
    key: "initGroupStories",
    value: function initGroupStories() {
      var previewEl = this.previewlistElems[this.sliderGroupStories.activeIndex];
      var groupId = previewEl.getAttribute('data-group');
      saveViewStoriesGroup(this.storiesId, groupId);
      updateStatePreview(previewEl, this.storiesId, groupId);
      var groupStoriesThemeBusinessLogic = new samokat_groupStoriesThemeBusinessLogic_GroupStoriesThemeBusinessLogic(this);
      var activeSlide = this.sliderGroupStories.activeSlide;
      var groupEl = activeSlide.querySelector('.sitestories-group-stories');
      this.groupStories = new groupStoriesFacade_GroupStoriesFacade(groupEl);
      this.groupStories.getControl().subscribeEvent('click', function (e) {
        groupStoriesThemeBusinessLogic.eventClick(e);
      });
      this.groupStories.getControl().subscribeEvent('mouseout', function (e) {
        groupStoriesThemeBusinessLogic.eventMouseout(e);
      });
      this.groupStories.getControl().init();
      this.initStorySlider();
    }
  }, {
    key: "initStorySlider",
    value: function initStorySlider() {
      this.sliderStory = new sliderSwiper_SliderSwiperAdapter();
      var storySliderThemeBusinessLogic = new samokat_storySliderThemeBusinessLogic_StorySliderThemeBusinessLogic(this);
      var paramsSliderStory = storySliderThemeBusinessLogic.getParamsSlider();
      this.sliderStory.subscribeEvent('autoplayStop', function () {
        storySliderThemeBusinessLogic.eventAutoplayStop();
      });
      this.sliderStory.subscribeEvent('autoplayStart', function () {
        storySliderThemeBusinessLogic.eventAutoplayStart();
      });
      this.sliderStory.subscribeEvent('autoplayResume', function () {
        storySliderThemeBusinessLogic.eventAutoplayResume();
      });
      this.sliderStory.subscribeEvent('autoplayPause', function () {
        storySliderThemeBusinessLogic.eventAutoplayPause();
      });
      this.sliderStory.subscribeEvent('slideChange', function () {
        storySliderThemeBusinessLogic.eventSlideChange();
      });
      this.sliderStory.init(paramsSliderStory);
      this.navigation = new samokat_navigationThemeBusinessLogic_NavigationThemeBusinessLogic(this);
      this.initStory();
    }
  }, {
    key: "initStory",
    value: function initStory() {
      this.story = new storyFacade_StoryFacade({
        wrapper: this.sliderStory.activeSlide,
        bullets: this.sliderStory.bullets,
        slideActiveIndex: this.sliderStory.activeIndex,
        activeBullet: this.sliderStory.activeBullet
      });
      var storyThemeBusinessLogic = new samokat_storyThemeBusinessLogic_StoryThemeBusinessLogic(this);
      this.story.control.subscribeEvent('active', function (storyControl) {
        storyThemeBusinessLogic.eventActive(storyControl);
      });

      if (this.story.control.type === 'product') {
        storyThemeBusinessLogic.typeProduct();
      }

      if (this.story.control.type === 'product-collection') {
        storyThemeBusinessLogic.typeProductCollection();
      }

      if (this.story.control.type === 'product-list') {
        storyThemeBusinessLogic.typeProductList();
      }

      this.story.control.subscribeEvent('reset', function (story) {
        storyThemeBusinessLogic.eventReset();
      });
      this.story.control.active();
      this.isInit = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.sliderGroupStories) {
        this.story.destroy();
        this.sliderStory.destroy();
        this.groupStories.destroy();
        this.sliderGroupStories.destroy();
        this.sliderGroupStories = null;
        this.groupStories = null;
        this.sliderStory = null;
        this.story = null;
        this.navigation = null;
        this.isPlaying = null;
        this.isSoundOn = null;
        this.isInit = null;
      }

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.removeEventListener('click', this.modalClose.bind(this), false);
      }
    }
  }]);

  return Samokat;
}();


// CONCATENATED MODULE: ./src/use_cases/themes/vk/previewsThemeBusinessLogic.js


function vk_previewsThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vk_previewsThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vk_previewsThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) vk_previewsThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) vk_previewsThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var vk_previewsThemeBusinessLogic_PreviewsThemeBusinessLogic = /*#__PURE__*/function () {
  function PreviewsThemeBusinessLogic(theme) {
    vk_previewsThemeBusinessLogic_classCallCheck(this, PreviewsThemeBusinessLogic);

    this.theme = theme;
  }

  vk_previewsThemeBusinessLogic_createClass(PreviewsThemeBusinessLogic, [{
    key: "getParamsSlider",
    value: function getParamsSlider() {
      var spaceBetweenPreviews = this.theme.previewsEl.getAttribute('data-space-between') ? this.theme.previewsEl.getAttribute('data-space-between') : 10;
      return {
        el: this.theme.previewsEl.querySelector('#previews-slider'),
        containerModifierClass: 'sitestories-previews-slider_',
        wrapperClass: 'sitestories-previews-slider__wrapper',
        slideClass: 'sitestories-previews-slider__slide',
        slideActiveClass: 'sitestories-previews-slider__slide_active',
        slideNextClass: 'sitestories-previews-slider__slide_next',
        slidePrevClass: 'sitestories-previews-slider__slide_prev',
        slidesPerView: 'auto',
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        spaceBetween: spaceBetweenPreviews,
        centeredSlides: false,
        slideToClickedSlide: true,
        initialSlide: 0,
        navigation: {
          nextEl: '.sitestories-previews-slider__button-nav_next',
          prevEl: '.sitestories-previews-slider__button-nav_prev',
          disabledClass: 'sitestories-previews-slider__button-nav_disabled'
        }
      };
    }
  }]);

  return PreviewsThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/vk/sliderGroupStoriesThemeBusinessLogic.js




function vk_sliderGroupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vk_sliderGroupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vk_sliderGroupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) vk_sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) vk_sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var vk_sliderGroupStoriesThemeBusinessLogic_SliderGroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function SliderGroupStoriesThemeBusinessLogic(theme) {
    vk_sliderGroupStoriesThemeBusinessLogic_classCallCheck(this, SliderGroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  vk_sliderGroupStoriesThemeBusinessLogic_createClass(SliderGroupStoriesThemeBusinessLogic, [{
    key: "eventSlideChange",
    value: function eventSlideChange() {
      if (this.theme.isInit) {
        this.theme.story.destroy();
        this.theme.sliderStory.destroy();
        this.theme.groupStories.getControlsElems().hide();
        this.theme.groupStories.destroy();
        this.theme.story = null;
        this.theme.sliderStory = null;
        this.theme.initGroupStories();

        if (this.theme.isPlaying === false) {
          this.theme.sliderStory.autoplayStop();
          this.theme.groupStories.getStatesIconsPlay().pause();
        }
      }
    }
  }, {
    key: "eventPointerdown",
    value: function eventPointerdown(e) {
      var self = this;

      if (!e.target.closest('.sitestories-story-content-product-link__product-images') && !e.target.closest('.sitestories-group-stories__header') && !e.target.closest('.sitestories-story-product-card') && !e.target.closest('.sitestories-story-product__button-box') && !e.target.closest('.sitestories-story-product-card__close') && !e.target.closest('.sitestories-story-product__product-images') && !e.target.closest('.sitestories-product-list__product-preview') && !e.target.closest('.sitestories-product-collection__product-preview')) {
        this.theme.groupStories.getControl().timeoutTouchStart = setTimeout(function () {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getControlsElems().hide();
        }, 150);
        this.theme.groupStories.getControl().timeTouchStart = new Date().valueOf();
      }
    }
  }, {
    key: "eventPointerup",
    value: function eventPointerup(e) {
      clearTimeout(this.theme.groupStories.getControl().timeoutTouchStart);
      this.theme.groupStories.getControl().timeTouchEnd = new Date().valueOf();
      var timeTouchMS = this.theme.groupStories.getControl().timeTouchEnd - this.theme.groupStories.getControl().timeTouchStart;
      var clientX = this.theme.isMobile ? e.changedTouches[0].clientX : e.clientX;

      if (timeTouchMS < 150) {
        var halfWidthWindow = window.innerWidth / 2;

        if (clientX > halfWidthWindow) {
          this.theme.navigation.next();
        }

        if (clientX < halfWidthWindow) {
          this.theme.navigation.prev();
        }
      } else {
        if (this.theme.isPlaying || this.theme.isPlaying === null) {
          this.theme.sliderStory.autoplayStart();
        }

        this.theme.groupStories.getControlsElems().show();
      }
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider(indexGroup) {
      return {
        el: this.theme.modalEl.querySelector('#slider-groups'),
        containerModifierClass: 'sitestories-slider-groups_',
        wrapperClass: 'sitestories-slider-groups__wrapper',
        slideClass: 'sitestories-slider-groups__slide',
        slideActiveClass: 'sitestories-slider-groups__slide_active',
        slideNextClass: 'sitestories-slider-groups__slide_next',
        slidePrevClass: 'sitestories-slider-groups__slide_prev',
        slideFullyVisibleClass: 'sitestories-slider-groups__slide-fully-visible',
        slideVisibleClass: 'sitestories-slider-groups__slide-visible',
        slidesPerView: 'auto',
        effect: this.theme.isMobile ? 'cube' : 'slide',
        simulateTouch: true,
        allowTouchMove: this.theme.isMobile ? true : false,
        spaceBetween: 0,
        centeredSlides: true,
        slideToClickedSlide: false,
        initialSlide: indexGroup
      };
    }
  }]);

  return SliderGroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/vk/groupStoriesThemeBusinessLogic.js


function vk_groupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vk_groupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vk_groupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) vk_groupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) vk_groupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var vk_groupStoriesThemeBusinessLogic_GroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function GroupStoriesThemeBusinessLogic(theme) {
    vk_groupStoriesThemeBusinessLogic_classCallCheck(this, GroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  vk_groupStoriesThemeBusinessLogic_createClass(GroupStoriesThemeBusinessLogic, [{
    key: "eventClick",
    value: function eventClick(e) {
      var self = this;

      if (e.target.closest('.sitestories-story-play[data-state="play"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.sliderStory.autoplayStart();
            self.theme.groupStories.getStatesIconsPlay().play();
            self.theme.isPlaying = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-play[data-state="pause"]')) {
        this.theme.sliderStory.autoplayStop();
        this.theme.groupStories.getStatesIconsPlay().pause();
        this.theme.isPlaying = false;
      }

      if (e.target.closest('.sitestories-story-sound[data-state="disable"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.story.videoManager.enableSound();
            self.theme.groupStories.getStatesSoundIcons().enable();
            self.theme.isSoundOn = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-sound[data-state="enable"]')) {
        this.theme.story.videoManager.disableSound();
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.isSoundOn = false;
      }
    }
  }, {
    key: "eventMouseout",
    value: function eventMouseout(e) {
      this.theme.groupStories.getControlsElems().show();
    }
  }]);

  return GroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/vk/storySliderThemeBusinessLogic.js


function vk_storySliderThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vk_storySliderThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vk_storySliderThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) vk_storySliderThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) vk_storySliderThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var vk_storySliderThemeBusinessLogic_StorySliderThemeBusinessLogic = /*#__PURE__*/function () {
  function StorySliderThemeBusinessLogic(theme) {
    vk_storySliderThemeBusinessLogic_classCallCheck(this, StorySliderThemeBusinessLogic);

    this.theme = theme;
  }

  vk_storySliderThemeBusinessLogic_createClass(StorySliderThemeBusinessLogic, [{
    key: "eventAutoplayStop",
    value: function eventAutoplayStop() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventAutoplayStart",
    value: function eventAutoplayStart() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayResume",
    value: function eventAutoplayResume() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayPause",
    value: function eventAutoplayPause() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventSlideChange",
    value: function eventSlideChange() {
      this.theme.story.destroy();
      this.theme.groupStories.getAnimBullets().reset();
      this.theme.initStory();

      if (this.theme.isSoundOn) {
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.story.videoManager.disableSound();
      }

      this.theme.groupStories.getAnimBullets().updateState(this.theme.sliderStory.bullets, this.theme.sliderStory.activeIndex);
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider() {
      return {
        el: this.theme.groupStories.getControl().el.querySelector('.sitestories-slider-story'),
        containerModifierClass: 'sitestories-slider-story_',
        wrapperClass: 'sitestories-slider-story__wrapper',
        slideClass: 'sitestories-slider-story__slide',
        slideActiveClass: 'sitestories-slider-story__slide_active',
        slideNextClass: 'sitestories-slider-story__slide_next',
        slidePrevClass: 'sitestories-slider-story__slide_prev',
        bulletClass: 'sitestories-story-pagination__bullet',
        slidesPerView: 1,
        pagination: {
          el: this.theme.groupStories.getControl().el.querySelector('.sitestories-story-pagination')
        },
        //autoplay: {},
        //nested: false,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: true,
        spaceBetween: 0,
        centeredSlides: false,
        slideToClickedSlide: false,
        initialSlide: 0
      };
    }
  }]);

  return StorySliderThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/vk/storyThemeBusinessLogic.js


function vk_storyThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vk_storyThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vk_storyThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) vk_storyThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) vk_storyThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var vk_storyThemeBusinessLogic_colorThief = new o();
var vk_storyThemeBusinessLogic_StoryThemeBusinessLogic = /*#__PURE__*/function () {
  function StoryThemeBusinessLogic(theme) {
    vk_storyThemeBusinessLogic_classCallCheck(this, StoryThemeBusinessLogic);

    this.theme = theme;
  }

  vk_storyThemeBusinessLogic_createClass(StoryThemeBusinessLogic, [{
    key: "typeProduct",
    value: function typeProduct() {
      var self = this;
      var productEl = this.theme.story.control.el.querySelector('#story-product');
      this.theme.story.setProduct(productEl);
      this.theme.story.product.subscribeEvent('init', function () {
        var img = self.theme.story.product.el.querySelector('.sitestories-slider-product-images__image');

        if (img.complete) {
          var imgMainColorArr = vk_storyThemeBusinessLogic_colorThief.getColor(img);
          self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
        } else {
          img.addEventListener('load', function () {
            var imgMainColorArr = vk_storyThemeBusinessLogic_colorThief.getColor(img);
            self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
          });
        }
      });

      if (this.theme.story.product.action === 'go-to-link') {
        this._typeProductActionLink();
      }

      if (this.theme.story.product.action === 'open-product-card') {
        this._typeProductActionCard();
      }

      this.theme.story.product.init();
    }
  }, {
    key: "_typeProductActionLink",
    value: function _typeProductActionLink() {
      var self = this;
      this.theme.story.product.subscribeEvent('click', function (e) {
        var halfWidthWindow = window.innerWidth / 2;

        if (self.theme.story.product.sliderImages) {
          if (e.clientX > halfWidthWindow) {
            self.theme.story.product.sliderImages.slideNext();
          } else {
            self.theme.story.product.sliderImages.slidePrev();
          }
        }

        if (e.target.closest('.sitestories-story-product__button-box')) {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
        }
      });
      var sliderProductImagesEl = this.theme.story.product.el.querySelector('.sitestories-slider-product-images');
      var sliderProductImagesParams = {
        el: sliderProductImagesEl,
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-slider-product-images_',
        wrapperClass: 'sitestories-slider-product-images__wrapper',
        slideClass: 'sitestories-slider-product-images__slide',
        slideActiveClass: 'sitestories-slider-product-images__slide_active',
        slideNextClass: 'sitestories-slider-product-images__slide_next',
        slidePrevClass: 'sitestories-slider-product-images__slide_prev',
        bulletClass: 'sitestories-slider-product-images__bullet',
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 15,
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0,
        pagination: {
          el: sliderProductImagesEl.querySelector('.sitestories-slider-product-images__pagination')
        }
      };
      this.theme.story.product.setSliderImages(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.initSliderImages(sliderProductImagesParams);
    }
  }, {
    key: "_typeProductActionCard",
    value: function _typeProductActionCard() {
      var self = this;
      var productCardEl = this.theme.story.control.el.querySelector('#product-card');
      this.theme.story.setProductCard(productCardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.subscribeEvent('click', function (e) {
        if (e.target.closest('.sitestories-story-product__button')) {
          e.preventDefault();
        }
      });
      this.theme.story.product.subscribeEvent('pointerup', function (e) {
        // Open card
        if (e.target.closest('.sitestories-story-product__button-box')) {
          e.preventDefault();
          self.theme.story.productCard.setState('card');
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
          self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.disable();
          self.theme.sliderStory.disable();
        } // Go to checkout


        if (e.target.closest('.sitestories-story-product-card__response-button-checkout')) {
          var link = e.target.getAttribute('data-link') ? e.target.getAttribute('data-link') : '#no-link';
          window.location.href = link;
        }
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
        }
      });
      this.theme.story.subscribeEvent('destroy', function () {
        self.theme.story.productCard.setState('hide');
        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = this.theme.story.control.el.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "typeProductCollection",
    value: function typeProductCollection() {
      var self = this;
      var productCollectionEl = this.theme.story.control.el.querySelector('#product-collection');
      this.theme.story.setProductCollection(productCollectionEl);
      var sliderParams = this.getParamsSliderProductCollection();
      this.theme.story.productCollection.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.productCollection.initSlider(sliderParams);
      var previewEl = this.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
      this.theme.story.setProductPreview(previewEl);
      this.theme.story.productCollection.slider.subscribeEvent('pointerdown', function () {
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
      });
      this.theme.story.productCollection.slider.subscribeEvent('pointerup', function () {
        self.theme.sliderGroupStories.enable();
        self.theme.sliderStory.enable();
      });

      if (this.theme.story.productPreview.type === 'card') {
        this._typeProductCollectionCard();
      }

      if (this.theme.story.productPreview.type === 'link') {
        this._typeProductCollectionLink();
      }

      this.theme.story.productCollection.slider.subscribeEvent('slideChange', function (e) {
        self.theme.story.productPreview.destroy();
        var previewEl = self.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
        self.theme.story.setProductPreview(previewEl);

        if (self.theme.story.productPreview.type === 'card') {
          self._typeProductCollectionCard();
        }

        if (self.theme.story.productPreview.type === 'link') {
          self._typeProductCollectionLink();
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCollection.init();
      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      this.theme.story.productCollection.subscribeEvent('destroy', function () {
        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
      });
    }
  }, {
    key: "_typeProductCollectionCard",
    value: function _typeProductCollectionCard() {
      var self = this;

      if (self.theme.story.productCard) {
        self.theme.story.productCard.destroy();
      }

      var cardEl = this.theme.story.control.el.querySelectorAll('#product-card')[this.theme.story.productCollection.slider.activeIndex];

      if (!cardEl) {
        console.error('[sitestories]: Couldn\'t find product card element');
        return;
      }

      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.setProductCard(cardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card

      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();

        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width');
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
        self.theme.story.productCollection.slider.disable();
        self.theme.story.productCard.setState('card');
        self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
        self.theme.sliderStory.autoplayStop();
        self.theme.groupStories.getStatesIconsPlay().pause();
        self.theme.isPlaying = false;
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          if (self.theme.story.productCollection.slider.isEnd) {
            self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
          }

          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
          self.theme.story.productCollection.slider.enable();
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "_typeProductCollectionLink",
    value: function _typeProductCollectionLink() {
      var self = this;
      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();
        var button = self.theme.story.productPreview.el.querySelector('.sitestories-product-collection__product-preview-button');
        var link = button.getAttribute('href');
        window.location.href = link;
      });
      this.theme.story.productPreview.init();
    }
  }, {
    key: "typeProductList",
    value: function typeProductList() {
      var _this = this;

      var self = this;
      var previewsElems = this.theme.story.control.el.querySelectorAll('#product-preview');
      var cardsElems = this.theme.story.control.el.querySelectorAll('#product-card');
      var paramsSliderProductCard = this.getParamsSliderProductCard();

      var _loop = function _loop(i) {
        var previewEl = previewsElems[i];

        if (previewEl.getAttribute('data-type') === 'card') {
          var cardEl = cardsElems[i];
          paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');

          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.setProductCard(cardEl);

          _this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card


          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            self.theme.story.setProductCard(cardEl);
            self.theme.story.productCard.setState('card');
            self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
            self.theme.sliderStory.autoplayStop();
            self.theme.groupStories.getStatesIconsPlay().pause();
            self.theme.isPlaying = false;
            self.theme.sliderGroupStories.disable();
            self.theme.sliderStory.disable();
          });

          _this.theme.story.productCard.subscribeEvent('click', function (e) {
            // Close product card
            if (e.target.closest('.sitestories-story-product-card__close')) {
              self.theme.story.setProductCard(cardEl);
              self.theme.story.productCard.setState('hide');
              self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
              self.theme.sliderGroupStories.enable();
              self.theme.sliderStory.enable();
            }
          });

          _this.theme.story.productPreview.init();

          _this.theme.story.productCard.init();

          _this.theme.story.productCard.initSlider(paramsSliderProductCard);
        }

        if (previewEl.getAttribute('data-type') === 'link') {
          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            var button = previewEl.querySelector('.sitestories-product-list__product-button');
            var link = button.getAttribute('href');
            window.location.href = link;
          });

          _this.theme.story.productPreview.init();
        }
      };

      for (var i = 0; i < previewsElems.length; i++) {
        _loop(i);
      }

      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
    }
  }, {
    key: "getParamsSliderProductCollection",
    value: function getParamsSliderProductCollection() {
      return {
        el: this.theme.story.productCollection.el.querySelector('.sitestories-product-collection__slider'),
        slideToClickedSlide: true,
        containerModifierClass: 'sitestories-product-collection__slider_',
        wrapperClass: 'sitestories-product-collection__slider-wrapper',
        slideClass: 'sitestories-product-collection__slide',
        slideActiveClass: 'sitestories-product-collection__slide_active',
        slideNextClass: 'sitestories-product-collection__slide_next',
        slidePrevClass: 'sitestories-product-collection__slide_prev',
        bulletClass: 'sitestories-product-collection__slider-bullet',
        slidesPerView: 1.2,
        centeredSlides: false,
        spaceBetween: 0,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "getParamsSliderProductCard",
    value: function getParamsSliderProductCard() {
      return {
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-story-product-card__slider_',
        wrapperClass: 'sitestories-story-product-card__slider-wrapper',
        slideClass: 'sitestories-story-product-card__slide',
        slideActiveClass: 'sitestories-story-product-card__slide_active',
        slideNextClass: 'sitestories-story-product-card__slide_next',
        slidePrevClass: 'sitestories-story-product-card__slide_prev',
        bulletClass: 'sitestories-story-product-card__slider-bullet',
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "eventActive",
    value: function eventActive(storyControl) {
      var self = this;
      this.theme.modalBackground.setBackground(storyControl.srcMedia, storyControl.typeStory);
      this.theme.groupStories.getControlsElems().show();

      if (this.theme.isPlaying === null || this.theme.isPlaying) {
        this.theme.story.videoManager.play();
        this.theme.groupStories.getAnimBullets().start(storyControl.bulletAnimEl, storyControl.speedAutoplayMS).then(function () {
          self.theme.story.videoManager.pause();
          self.theme.modalBackground.pauseVideo();
          self.theme.navigation.next();
        });
        this.theme.groupStories.getStatesIconsPlay().play();

        if (storyControl.typeStory === 'video') {
          this.theme.modalBackground.playVideo();
        }
      }

      if (this.theme.isSoundOn) {
        this.theme.groupStories.getStatesSoundIcons().enable();
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.story.videoManager.disableSound();
      }

      this.theme.story.setTimePassed(this.theme.groupStories.control.el, this.theme.lang);
      this.theme.story.control.activeAnimate();
    }
  }, {
    key: "eventReset",
    value: function eventReset() {
      this.theme.modalBackground.reset();
      this.theme.story.videoManager.reset();
      this.theme.story.control.resetAnimate();
    }
  }]);

  return StoryThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/vk/navigationThemeBusinessLogic.js


function vk_navigationThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vk_navigationThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vk_navigationThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) vk_navigationThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) vk_navigationThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var vk_navigationThemeBusinessLogic_NavigationThemeBusinessLogic = /*#__PURE__*/function () {
  function NavigationThemeBusinessLogic(theme) {
    vk_navigationThemeBusinessLogic_classCallCheck(this, NavigationThemeBusinessLogic);

    this.theme = theme;
    this.isLastStory = false;
  }

  vk_navigationThemeBusinessLogic_createClass(NavigationThemeBusinessLogic, [{
    key: "next",
    value: function next() {
      if (this.theme.sliderStory.isEnd) {
        this.theme.sliderGroupStories.slideNext();
      } else {
        this.theme.sliderStory.slideNext();
      }

      if (this.isLastStory) {
        this.theme.modal.close();
      }

      if (this.theme.sliderGroupStories.isEnd) {
        if (this.theme.sliderStory.isEnd) {
          this.isLastStory = true;
        }
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this.isLastStory = false;

      if (this.theme.sliderStory.isBeginning) {
        this.theme.sliderGroupStories.slidePrev();
      } else {
        this.theme.sliderStory.slidePrev();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.theme = null;
    }
  }]);

  return NavigationThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/vk/vk.js





function vk_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vk_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vk_createClass(Constructor, protoProps, staticProps) { if (protoProps) vk_defineProperties(Constructor.prototype, protoProps); if (staticProps) vk_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Core
 // Adapters

 // Use cases






 // Libs

var vk_fslightbox = __webpack_require__(20);

var vk_Vk = /*#__PURE__*/function () {
  function Vk(params) {
    vk_classCallCheck(this, Vk);

    this.storiesEl = params.storiesEl;
    this.storiesId = this.storiesEl.getAttribute('id');
    this.isMobile = this.storiesEl.getAttribute('data-device') === 'mobile';
    this.lang = this.storiesEl.getAttribute('data-lang') ? this.storiesEl.getAttribute('data-lang') : 'en';
    this.previewsEl = this.storiesEl.querySelector('.sitestories__previews');
    this.previewlistElems = this.previewsEl.querySelectorAll('.sitestories__preview');
    this.modalEl = this.storiesEl.querySelector('.sitestories__modal');
    this.modal = new Modal(this.modalEl);
    this.modalBackground = new ModalBackground(this.modalEl);
    this.iconCloseElems = this.modalEl.querySelectorAll('.sitestories__modal-close');
    this.sliderGroupStories = null;
    this.sliderPreviews = null;
    this.groupStories = null;
    this.sliderStory = null;
    this.story = null;
    this.navigation = null;
    this.isPlaying = null;
    this.isSoundOn = null;
    this.isInit = null;
    this.init();
  }

  vk_createClass(Vk, [{
    key: "init",
    value: function init() {
      var self = this;
      this.modal.subscribeEvent('close', function () {
        self.destroy();
      });

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.addEventListener('click', this.modalClose.bind(this), false);
      }

      this.previewsInit();
    }
  }, {
    key: "modalClose",
    value: function modalClose() {
      this.modal.close();
    }
  }, {
    key: "previewsInit",
    value: function previewsInit() {
      var _this = this;

      var self = this;
      this.sliderPreviews = new sliderSwiper_SliderSwiperAdapter();
      var previewsThemeBusinessLogic = new vk_previewsThemeBusinessLogic_PreviewsThemeBusinessLogic(this);
      var paramsSliderPreviews = previewsThemeBusinessLogic.getParamsSlider();
      this.sliderPreviews.init(paramsSliderPreviews);

      var _loop = function _loop(i) {
        var previewEl = _this.previewlistElems[i];
        var groupId = previewEl.getAttribute('data-group');
        updateStatePreview(previewEl, _this.storiesId, groupId);
        previewEl.addEventListener('click', function () {
          self.modal.open();
          self.initSliderGroupStories(i);
        });
      };

      for (var i = 0; i < this.previewlistElems.length; i++) {
        _loop(i);
      }

      this.previewsEl.style.opacity = '';
    }
  }, {
    key: "initSliderGroupStories",
    value: function initSliderGroupStories(indexGroup) {
      var sliderGroupStoriesThemeBusinessLogic = new vk_sliderGroupStoriesThemeBusinessLogic_SliderGroupStoriesThemeBusinessLogic(this);
      var paramsSliderGroupStories = sliderGroupStoriesThemeBusinessLogic.getParamsSlider(indexGroup);
      this.sliderGroupStories = new sliderSwiper_SliderSwiperAdapter();
      this.sliderGroupStories.subscribeEvent('slideChange', function () {
        sliderGroupStoriesThemeBusinessLogic.eventSlideChange();
      });
      this.sliderGroupStories.subscribeEvent('pointerdown', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerdown(e);
      });
      this.sliderGroupStories.subscribeEvent('pointerup', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerup(e);
      });

      function iOS() {
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
        || navigator.userAgent.includes("Mac") && "ontouchend" in document;
      }

      if (iOS) {
        paramsSliderGroupStories.effect = 'slide';
      }

      this.sliderGroupStories.init(paramsSliderGroupStories);
      this.initGroupStories();
    }
  }, {
    key: "initGroupStories",
    value: function initGroupStories() {
      var previewEl = this.previewlistElems[this.sliderGroupStories.activeIndex];
      var groupId = previewEl.getAttribute('data-group');
      saveViewStoriesGroup(this.storiesId, groupId);
      updateStatePreview(previewEl, this.storiesId, groupId);
      var groupStoriesThemeBusinessLogic = new vk_groupStoriesThemeBusinessLogic_GroupStoriesThemeBusinessLogic(this);
      var activeSlide = this.sliderGroupStories.activeSlide;
      var groupEl = activeSlide.querySelector('.sitestories-group-stories');
      this.groupStories = new groupStoriesFacade_GroupStoriesFacade(groupEl);
      this.groupStories.getControl().subscribeEvent('click', function (e) {
        groupStoriesThemeBusinessLogic.eventClick(e);
      });
      this.groupStories.getControl().subscribeEvent('mouseout', function (e) {
        groupStoriesThemeBusinessLogic.eventMouseout(e);
      });
      this.groupStories.getControl().init();
      this.initStorySlider();
    }
  }, {
    key: "initStorySlider",
    value: function initStorySlider() {
      this.sliderStory = new sliderSwiper_SliderSwiperAdapter();
      var storySliderThemeBusinessLogic = new vk_storySliderThemeBusinessLogic_StorySliderThemeBusinessLogic(this);
      var paramsSliderStory = storySliderThemeBusinessLogic.getParamsSlider();
      this.sliderStory.subscribeEvent('autoplayStop', function () {
        storySliderThemeBusinessLogic.eventAutoplayStop();
      });
      this.sliderStory.subscribeEvent('autoplayStart', function () {
        storySliderThemeBusinessLogic.eventAutoplayStart();
      });
      this.sliderStory.subscribeEvent('autoplayResume', function () {
        storySliderThemeBusinessLogic.eventAutoplayResume();
      });
      this.sliderStory.subscribeEvent('autoplayPause', function () {
        storySliderThemeBusinessLogic.eventAutoplayPause();
      });
      this.sliderStory.subscribeEvent('slideChange', function () {
        storySliderThemeBusinessLogic.eventSlideChange();
      });
      this.sliderStory.init(paramsSliderStory);
      this.navigation = new vk_navigationThemeBusinessLogic_NavigationThemeBusinessLogic(this);
      this.initStory();
    }
  }, {
    key: "initStory",
    value: function initStory() {
      this.story = new storyFacade_StoryFacade({
        wrapper: this.sliderStory.activeSlide,
        bullets: this.sliderStory.bullets,
        slideActiveIndex: this.sliderStory.activeIndex,
        activeBullet: this.sliderStory.activeBullet
      });
      var storyThemeBusinessLogic = new vk_storyThemeBusinessLogic_StoryThemeBusinessLogic(this);
      this.story.control.subscribeEvent('active', function (storyControl) {
        storyThemeBusinessLogic.eventActive(storyControl);
      });

      if (this.story.control.type === 'product') {
        storyThemeBusinessLogic.typeProduct();
      }

      if (this.story.control.type === 'product-collection') {
        storyThemeBusinessLogic.typeProductCollection();
      }

      if (this.story.control.type === 'product-list') {
        storyThemeBusinessLogic.typeProductList();
      }

      this.story.control.subscribeEvent('reset', function (story) {
        storyThemeBusinessLogic.eventReset();
      });
      this.story.control.active();
      this.isInit = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.sliderGroupStories) {
        this.story.destroy();
        this.sliderStory.destroy();
        this.groupStories.destroy();
        this.sliderGroupStories.destroy();
        this.sliderGroupStories = null;
        this.groupStories = null;
        this.sliderStory = null;
        this.story = null;
        this.navigation = null;
        this.isPlaying = null;
        this.isSoundOn = null;
        this.isInit = null;
      }

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.removeEventListener('click', this.modalClose.bind(this), false);
      }
    }
  }]);

  return Vk;
}();


// CONCATENATED MODULE: ./src/use_cases/themes/whatsapp/previewsThemeBusinessLogic.js


function whatsapp_previewsThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whatsapp_previewsThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whatsapp_previewsThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) whatsapp_previewsThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) whatsapp_previewsThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var whatsapp_previewsThemeBusinessLogic_PreviewsThemeBusinessLogic = /*#__PURE__*/function () {
  function PreviewsThemeBusinessLogic(theme) {
    whatsapp_previewsThemeBusinessLogic_classCallCheck(this, PreviewsThemeBusinessLogic);

    this.theme = theme;
  }

  whatsapp_previewsThemeBusinessLogic_createClass(PreviewsThemeBusinessLogic, [{
    key: "getParamsSlider",
    value: function getParamsSlider() {
      var spaceBetweenPreviews = this.theme.previewsEl.getAttribute('data-space-between') ? this.theme.previewsEl.getAttribute('data-space-between') : 10;
      return {
        el: this.theme.previewsEl.querySelector('#previews-slider'),
        containerModifierClass: 'sitestories-previews-slider_',
        wrapperClass: 'sitestories-previews-slider__wrapper',
        slideClass: 'sitestories-previews-slider__slide',
        slideActiveClass: 'sitestories-previews-slider__slide_active',
        slideNextClass: 'sitestories-previews-slider__slide_next',
        slidePrevClass: 'sitestories-previews-slider__slide_prev',
        slidesPerView: 'auto',
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        spaceBetween: spaceBetweenPreviews,
        centeredSlides: false,
        slideToClickedSlide: true,
        initialSlide: 0,
        navigation: {
          nextEl: '.sitestories-previews-slider__button-nav_next',
          prevEl: '.sitestories-previews-slider__button-nav_prev',
          disabledClass: 'sitestories-previews-slider__button-nav_disabled'
        },
        direction: 'vertical'
      };
    }
  }]);

  return PreviewsThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/whatsapp/sliderGroupStoriesThemeBusinessLogic.js




function whatsapp_sliderGroupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whatsapp_sliderGroupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whatsapp_sliderGroupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) whatsapp_sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) whatsapp_sliderGroupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var whatsapp_sliderGroupStoriesThemeBusinessLogic_SliderGroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function SliderGroupStoriesThemeBusinessLogic(theme) {
    whatsapp_sliderGroupStoriesThemeBusinessLogic_classCallCheck(this, SliderGroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  whatsapp_sliderGroupStoriesThemeBusinessLogic_createClass(SliderGroupStoriesThemeBusinessLogic, [{
    key: "eventSlideChange",
    value: function eventSlideChange() {
      if (this.theme.isInit) {
        this.theme.story.destroy();
        this.theme.sliderStory.destroy();
        this.theme.groupStories.getControlsElems().hide();
        this.theme.groupStories.destroy();
        this.theme.story = null;
        this.theme.sliderStory = null;
        this.theme.initGroupStories();

        if (this.theme.isPlaying === false) {
          this.theme.sliderStory.autoplayStop();
          this.theme.groupStories.getStatesIconsPlay().pause();
        }
      }
    }
  }, {
    key: "eventPointerdown",
    value: function eventPointerdown(e) {
      var self = this;

      if (!e.target.closest('.sitestories-story-content-product-link__product-images') && !e.target.closest('.sitestories-group-stories__header') && !e.target.closest('.sitestories-story-product-card') && !e.target.closest('.sitestories-story-product__button-box') && !e.target.closest('.sitestories-story-product-card__close') && !e.target.closest('.sitestories-story-product__product-images') && !e.target.closest('.sitestories-product-list__product-preview') && !e.target.closest('.sitestories-product-collection__product-preview')) {
        this.theme.groupStories.getControl().timeoutTouchStart = setTimeout(function () {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getControlsElems().hide();
        }, 150);
        this.theme.groupStories.getControl().timeTouchStart = new Date().valueOf();
      }
    }
  }, {
    key: "eventPointerup",
    value: function eventPointerup(e) {
      clearTimeout(this.theme.groupStories.getControl().timeoutTouchStart);
      this.theme.groupStories.getControl().timeTouchEnd = new Date().valueOf();
      var timeTouchMS = this.theme.groupStories.getControl().timeTouchEnd - this.theme.groupStories.getControl().timeTouchStart;
      var clientX = this.theme.isMobile ? e.changedTouches[0].clientX : e.clientX;

      if (timeTouchMS < 150) {
        var halfWidthWindow = window.innerWidth / 2;

        if (clientX > halfWidthWindow) {
          this.theme.navigation.next();
        }

        if (clientX < halfWidthWindow) {
          this.theme.navigation.prev();
        }
      } else {
        if (this.theme.isPlaying || this.theme.isPlaying === null) {
          this.theme.sliderStory.autoplayStart();
        }

        this.theme.groupStories.getControlsElems().show();
      }
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider(indexGroup) {
      return {
        el: this.theme.modalEl.querySelector('#slider-groups'),
        containerModifierClass: 'sitestories-slider-groups_',
        wrapperClass: 'sitestories-slider-groups__wrapper',
        slideClass: 'sitestories-slider-groups__slide',
        slideActiveClass: 'sitestories-slider-groups__slide_active',
        slideNextClass: 'sitestories-slider-groups__slide_next',
        slidePrevClass: 'sitestories-slider-groups__slide_prev',
        slideFullyVisibleClass: 'sitestories-slider-groups__slide-fully-visible',
        slideVisibleClass: 'sitestories-slider-groups__slide-visible',
        slidesPerView: 'auto',
        effect: this.theme.isMobile ? 'cube' : 'slide',
        simulateTouch: true,
        allowTouchMove: this.theme.isMobile ? true : false,
        spaceBetween: 0,
        centeredSlides: true,
        slideToClickedSlide: false,
        initialSlide: indexGroup
      };
    }
  }]);

  return SliderGroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/whatsapp/groupStoriesThemeBusinessLogic.js


function whatsapp_groupStoriesThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whatsapp_groupStoriesThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whatsapp_groupStoriesThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) whatsapp_groupStoriesThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) whatsapp_groupStoriesThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var whatsapp_groupStoriesThemeBusinessLogic_GroupStoriesThemeBusinessLogic = /*#__PURE__*/function () {
  function GroupStoriesThemeBusinessLogic(theme) {
    whatsapp_groupStoriesThemeBusinessLogic_classCallCheck(this, GroupStoriesThemeBusinessLogic);

    this.theme = theme;
  }

  whatsapp_groupStoriesThemeBusinessLogic_createClass(GroupStoriesThemeBusinessLogic, [{
    key: "eventClick",
    value: function eventClick(e) {
      var self = this;

      if (e.target.closest('.sitestories-story-play[data-state="play"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.sliderStory.autoplayStart();
            self.theme.groupStories.getStatesIconsPlay().play();
            self.theme.isPlaying = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-play[data-state="pause"]')) {
        this.theme.sliderStory.autoplayStop();
        this.theme.groupStories.getStatesIconsPlay().pause();
        this.theme.isPlaying = false;
      }

      if (e.target.closest('.sitestories-story-sound[data-state="disable"]')) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            self.theme.story.videoManager.enableSound();
            self.theme.groupStories.getStatesSoundIcons().enable();
            self.theme.isSoundOn = true;
          });
        });
      }

      if (e.target.closest('.sitestories-story-sound[data-state="enable"]')) {
        this.theme.story.videoManager.disableSound();
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.isSoundOn = false;
      }
    }
  }, {
    key: "eventMouseout",
    value: function eventMouseout(e) {
      this.theme.groupStories.getControlsElems().show();
    }
  }]);

  return GroupStoriesThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/whatsapp/storySliderThemeBusinessLogic.js


function whatsapp_storySliderThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whatsapp_storySliderThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whatsapp_storySliderThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) whatsapp_storySliderThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) whatsapp_storySliderThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var whatsapp_storySliderThemeBusinessLogic_StorySliderThemeBusinessLogic = /*#__PURE__*/function () {
  function StorySliderThemeBusinessLogic(theme) {
    whatsapp_storySliderThemeBusinessLogic_classCallCheck(this, StorySliderThemeBusinessLogic);

    this.theme = theme;
  }

  whatsapp_storySliderThemeBusinessLogic_createClass(StorySliderThemeBusinessLogic, [{
    key: "eventAutoplayStop",
    value: function eventAutoplayStop() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventAutoplayStart",
    value: function eventAutoplayStart() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayResume",
    value: function eventAutoplayResume() {
      var self = this;

      if (this.theme.story) {
        if (this.theme.groupStories.getAnimBullets().distance >= 1) {
          this.theme.navigation.next();
        } else {
          this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
            self.theme.story.videoManager.pause();
            self.theme.modalBackground.pauseVideo();
            self.theme.navigation.next();
          });
        }

        this.theme.groupStories.getControlsElems().show();
        this.theme.story.videoManager.play();
        this.theme.modalBackground.playVideo();
      }
    }
  }, {
    key: "eventAutoplayPause",
    value: function eventAutoplayPause() {
      if (this.theme.story) {
        this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl);
        this.theme.groupStories.getControlsElems().show();
        this.theme.modalBackground.pauseVideo();
        this.theme.story.videoManager.pause();
      }
    }
  }, {
    key: "eventSlideChange",
    value: function eventSlideChange() {
      this.theme.story.destroy();
      this.theme.groupStories.getAnimBullets().reset();
      this.theme.initStory();

      if (this.theme.isSoundOn) {
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.story.videoManager.disableSound();
      }

      this.theme.groupStories.getAnimBullets().updateState(this.theme.sliderStory.bullets, this.theme.sliderStory.activeIndex);
    }
  }, {
    key: "getParamsSlider",
    value: function getParamsSlider() {
      return {
        el: this.theme.groupStories.getControl().el.querySelector('.sitestories-slider-story'),
        containerModifierClass: 'sitestories-slider-story_',
        wrapperClass: 'sitestories-slider-story__wrapper',
        slideClass: 'sitestories-slider-story__slide',
        slideActiveClass: 'sitestories-slider-story__slide_active',
        slideNextClass: 'sitestories-slider-story__slide_next',
        slidePrevClass: 'sitestories-slider-story__slide_prev',
        bulletClass: 'sitestories-story-pagination__bullet',
        slidesPerView: 1,
        pagination: {
          el: this.theme.groupStories.getControl().el.querySelector('.sitestories-story-pagination')
        },
        //autoplay: {},
        //nested: false,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: true,
        spaceBetween: 0,
        centeredSlides: false,
        slideToClickedSlide: false,
        initialSlide: 0
      };
    }
  }]);

  return StorySliderThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/whatsapp/storyThemeBusinessLogic.js


function whatsapp_storyThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whatsapp_storyThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whatsapp_storyThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) whatsapp_storyThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) whatsapp_storyThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var whatsapp_storyThemeBusinessLogic_colorThief = new o();
var whatsapp_storyThemeBusinessLogic_StoryThemeBusinessLogic = /*#__PURE__*/function () {
  function StoryThemeBusinessLogic(theme) {
    whatsapp_storyThemeBusinessLogic_classCallCheck(this, StoryThemeBusinessLogic);

    this.theme = theme;
  }

  whatsapp_storyThemeBusinessLogic_createClass(StoryThemeBusinessLogic, [{
    key: "typeProduct",
    value: function typeProduct() {
      var self = this;
      var productEl = this.theme.story.control.el.querySelector('#story-product');
      this.theme.story.setProduct(productEl);
      this.theme.story.product.subscribeEvent('init', function () {
        var img = self.theme.story.product.el.querySelector('.sitestories-slider-product-images__image');

        if (img.complete) {
          var imgMainColorArr = whatsapp_storyThemeBusinessLogic_colorThief.getColor(img);
          self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
        } else {
          img.addEventListener('load', function () {
            var imgMainColorArr = whatsapp_storyThemeBusinessLogic_colorThief.getColor(img);
            self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
          });
        }
      });

      if (this.theme.story.product.action === 'go-to-link') {
        this._typeProductActionLink();
      }

      if (this.theme.story.product.action === 'open-product-card') {
        this._typeProductActionCard();
      }

      this.theme.story.product.init();
    }
  }, {
    key: "_typeProductActionLink",
    value: function _typeProductActionLink() {
      var self = this;
      this.theme.story.product.subscribeEvent('click', function (e) {
        var halfWidthWindow = window.innerWidth / 2;

        if (self.theme.story.product.sliderImages) {
          if (e.clientX > halfWidthWindow) {
            self.theme.story.product.sliderImages.slideNext();
          } else {
            self.theme.story.product.sliderImages.slidePrev();
          }
        }

        if (e.target.closest('.sitestories-story-product__button-box')) {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
        }
      });
      var sliderProductImagesEl = this.theme.story.product.el.querySelector('.sitestories-slider-product-images');
      var sliderProductImagesParams = {
        el: sliderProductImagesEl,
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-slider-product-images_',
        wrapperClass: 'sitestories-slider-product-images__wrapper',
        slideClass: 'sitestories-slider-product-images__slide',
        slideActiveClass: 'sitestories-slider-product-images__slide_active',
        slideNextClass: 'sitestories-slider-product-images__slide_next',
        slidePrevClass: 'sitestories-slider-product-images__slide_prev',
        bulletClass: 'sitestories-slider-product-images__bullet',
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 15,
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0,
        pagination: {
          el: sliderProductImagesEl.querySelector('.sitestories-slider-product-images__pagination')
        }
      };
      this.theme.story.product.setSliderImages(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.initSliderImages(sliderProductImagesParams);
    }
  }, {
    key: "_typeProductActionCard",
    value: function _typeProductActionCard() {
      var self = this;
      var productCardEl = this.theme.story.control.el.querySelector('#product-card');
      this.theme.story.setProductCard(productCardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.subscribeEvent('click', function (e) {
        if (e.target.closest('.sitestories-story-product__button')) {
          e.preventDefault();
        }
      });
      this.theme.story.product.subscribeEvent('pointerup', function (e) {
        // Open card
        if (e.target.closest('.sitestories-story-product__button-box')) {
          e.preventDefault();
          self.theme.story.productCard.setState('card');
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
          self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.disable();
          self.theme.sliderStory.disable();
        } // Go to checkout


        if (e.target.closest('.sitestories-story-product-card__response-button-checkout')) {
          var link = e.target.getAttribute('data-link') ? e.target.getAttribute('data-link') : '#no-link';
          window.location.href = link;
        }
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
        }
      });
      this.theme.story.subscribeEvent('destroy', function () {
        self.theme.story.productCard.setState('hide');
        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = this.theme.story.control.el.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "typeProductCollection",
    value: function typeProductCollection() {
      var self = this;
      var productCollectionEl = this.theme.story.control.el.querySelector('#product-collection');
      this.theme.story.setProductCollection(productCollectionEl);
      var sliderParams = this.getParamsSliderProductCollection();
      this.theme.story.productCollection.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.productCollection.initSlider(sliderParams);
      var previewEl = this.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
      this.theme.story.setProductPreview(previewEl);
      this.theme.story.productCollection.slider.subscribeEvent('pointerdown', function () {
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
      });
      this.theme.story.productCollection.slider.subscribeEvent('pointerup', function () {
        self.theme.sliderGroupStories.enable();
        self.theme.sliderStory.enable();
      });

      if (this.theme.story.productPreview.type === 'card') {
        this._typeProductCollectionCard();
      }

      if (this.theme.story.productPreview.type === 'link') {
        this._typeProductCollectionLink();
      }

      this.theme.story.productCollection.slider.subscribeEvent('slideChange', function (e) {
        self.theme.story.productPreview.destroy();
        var previewEl = self.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
        self.theme.story.setProductPreview(previewEl);

        if (self.theme.story.productPreview.type === 'card') {
          self._typeProductCollectionCard();
        }

        if (self.theme.story.productPreview.type === 'link') {
          self._typeProductCollectionLink();
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCollection.init();
      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      this.theme.story.productCollection.subscribeEvent('destroy', function () {
        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
      });
    }
  }, {
    key: "_typeProductCollectionCard",
    value: function _typeProductCollectionCard() {
      var self = this;

      if (self.theme.story.productCard) {
        self.theme.story.productCard.destroy();
      }

      var cardEl = this.theme.story.control.el.querySelectorAll('#product-card')[this.theme.story.productCollection.slider.activeIndex];

      if (!cardEl) {
        console.error('[sitestories]: Couldn\'t find product card element');
        return;
      }

      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.setProductCard(cardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card

      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();

        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width');
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
        self.theme.story.productCollection.slider.disable();
        self.theme.story.productCard.setState('card');
        self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
        self.theme.sliderStory.autoplayStop();
        self.theme.groupStories.getStatesIconsPlay().pause();
        self.theme.isPlaying = false;
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          if (self.theme.story.productCollection.slider.isEnd) {
            self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
          }

          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
          self.theme.story.productCollection.slider.enable();
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "_typeProductCollectionLink",
    value: function _typeProductCollectionLink() {
      var self = this;
      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();
        var button = self.theme.story.productPreview.el.querySelector('.sitestories-product-collection__product-preview-button');
        var link = button.getAttribute('href');
        window.location.href = link;
      });
      this.theme.story.productPreview.init();
    }
  }, {
    key: "typeProductList",
    value: function typeProductList() {
      var _this = this;

      var self = this;
      var previewsElems = this.theme.story.control.el.querySelectorAll('#product-preview');
      var cardsElems = this.theme.story.control.el.querySelectorAll('#product-card');
      var paramsSliderProductCard = this.getParamsSliderProductCard();

      var _loop = function _loop(i) {
        var previewEl = previewsElems[i];

        if (previewEl.getAttribute('data-type') === 'card') {
          var cardEl = cardsElems[i];
          paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');

          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.setProductCard(cardEl);

          _this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card


          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            self.theme.story.setProductCard(cardEl);
            self.theme.story.productCard.setState('card');
            self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
            self.theme.sliderStory.autoplayStop();
            self.theme.groupStories.getStatesIconsPlay().pause();
            self.theme.isPlaying = false;
            self.theme.sliderGroupStories.disable();
            self.theme.sliderStory.disable();
          });

          _this.theme.story.productCard.subscribeEvent('click', function (e) {
            // Close product card
            if (e.target.closest('.sitestories-story-product-card__close')) {
              self.theme.story.setProductCard(cardEl);
              self.theme.story.productCard.setState('hide');
              self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
              self.theme.sliderGroupStories.enable();
              self.theme.sliderStory.enable();
            }
          });

          _this.theme.story.productPreview.init();

          _this.theme.story.productCard.init();

          _this.theme.story.productCard.initSlider(paramsSliderProductCard);
        }

        if (previewEl.getAttribute('data-type') === 'link') {
          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            var button = previewEl.querySelector('.sitestories-product-list__product-button');
            var link = button.getAttribute('href');
            window.location.href = link;
          });

          _this.theme.story.productPreview.init();
        }
      };

      for (var i = 0; i < previewsElems.length; i++) {
        _loop(i);
      }

      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
    }
  }, {
    key: "getParamsSliderProductCollection",
    value: function getParamsSliderProductCollection() {
      return {
        el: this.theme.story.productCollection.el.querySelector('.sitestories-product-collection__slider'),
        slideToClickedSlide: true,
        containerModifierClass: 'sitestories-product-collection__slider_',
        wrapperClass: 'sitestories-product-collection__slider-wrapper',
        slideClass: 'sitestories-product-collection__slide',
        slideActiveClass: 'sitestories-product-collection__slide_active',
        slideNextClass: 'sitestories-product-collection__slide_next',
        slidePrevClass: 'sitestories-product-collection__slide_prev',
        bulletClass: 'sitestories-product-collection__slider-bullet',
        slidesPerView: 1.2,
        centeredSlides: false,
        spaceBetween: 0,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "getParamsSliderProductCard",
    value: function getParamsSliderProductCard() {
      return {
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-story-product-card__slider_',
        wrapperClass: 'sitestories-story-product-card__slider-wrapper',
        slideClass: 'sitestories-story-product-card__slide',
        slideActiveClass: 'sitestories-story-product-card__slide_active',
        slideNextClass: 'sitestories-story-product-card__slide_next',
        slidePrevClass: 'sitestories-story-product-card__slide_prev',
        bulletClass: 'sitestories-story-product-card__slider-bullet',
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "eventActive",
    value: function eventActive(storyControl) {
      var self = this;
      this.theme.modalBackground.setBackground(storyControl.srcMedia, storyControl.typeStory);
      this.theme.groupStories.getControlsElems().show();

      if (this.theme.isPlaying === null || this.theme.isPlaying) {
        this.theme.story.videoManager.play();
        this.theme.groupStories.getAnimBullets().start(storyControl.bulletAnimEl, storyControl.speedAutoplayMS).then(function () {
          self.theme.story.videoManager.pause();
          self.theme.modalBackground.pauseVideo();
          self.theme.navigation.next();
        });
        this.theme.groupStories.getStatesIconsPlay().play();

        if (storyControl.typeStory === 'video') {
          this.theme.modalBackground.playVideo();
        }
      }

      if (this.theme.isSoundOn) {
        this.theme.groupStories.getStatesSoundIcons().enable();
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.story.videoManager.disableSound();
      }

      this.theme.story.setTimePassed(this.theme.groupStories.control.el, this.theme.lang);
      this.theme.story.control.activeAnimate();
    }
  }, {
    key: "eventReset",
    value: function eventReset() {
      this.theme.modalBackground.reset();
      this.theme.story.videoManager.reset();
      this.theme.story.control.resetAnimate();
    }
  }]);

  return StoryThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/whatsapp/navigationThemeBusinessLogic.js


function whatsapp_navigationThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whatsapp_navigationThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whatsapp_navigationThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) whatsapp_navigationThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) whatsapp_navigationThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var whatsapp_navigationThemeBusinessLogic_NavigationThemeBusinessLogic = /*#__PURE__*/function () {
  function NavigationThemeBusinessLogic(theme) {
    whatsapp_navigationThemeBusinessLogic_classCallCheck(this, NavigationThemeBusinessLogic);

    this.theme = theme;
    this.isLastStory = false;
  }

  whatsapp_navigationThemeBusinessLogic_createClass(NavigationThemeBusinessLogic, [{
    key: "next",
    value: function next() {
      if (this.theme.sliderStory.isEnd) {
        this.theme.sliderGroupStories.slideNext();
      } else {
        this.theme.sliderStory.slideNext();
      }

      if (this.isLastStory) {
        this.theme.modal.close();
      }

      if (this.theme.sliderGroupStories.isEnd) {
        if (this.theme.sliderStory.isEnd) {
          this.isLastStory = true;
        }
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this.isLastStory = false;

      if (this.theme.sliderStory.isBeginning) {
        this.theme.sliderGroupStories.slidePrev();
      } else {
        this.theme.sliderStory.slidePrev();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.theme = null;
    }
  }]);

  return NavigationThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/whatsapp/whatsapp.js





function whatsapp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whatsapp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whatsapp_createClass(Constructor, protoProps, staticProps) { if (protoProps) whatsapp_defineProperties(Constructor.prototype, protoProps); if (staticProps) whatsapp_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Core
 // Adapters

 // Use cases






 // Libs

var whatsapp_fslightbox = __webpack_require__(20);

var whatsapp_Whatsapp = /*#__PURE__*/function () {
  function Whatsapp(params) {
    whatsapp_classCallCheck(this, Whatsapp);

    this.storiesEl = params.storiesEl;
    this.storiesId = this.storiesEl.getAttribute('id');
    this.isMobile = this.storiesEl.getAttribute('data-device') === 'mobile';
    this.lang = this.storiesEl.getAttribute('data-lang') ? this.storiesEl.getAttribute('data-lang') : 'en';
    this.previewsEl = this.storiesEl.querySelector('.sitestories__previews');
    this.previewlistElems = this.previewsEl.querySelectorAll('.sitestories__preview');
    this.modalEl = this.storiesEl.querySelector('.sitestories__modal');
    this.modal = new Modal(this.modalEl);
    this.modalBackground = new ModalBackground(this.modalEl);
    this.iconCloseElems = this.modalEl.querySelectorAll('.sitestories__modal-close');
    this.sliderGroupStories = null;
    this.sliderPreviews = null;
    this.groupStories = null;
    this.sliderStory = null;
    this.story = null;
    this.navigation = null;
    this.isPlaying = null;
    this.isSoundOn = null;
    this.isInit = null;
    this.init();
  }

  whatsapp_createClass(Whatsapp, [{
    key: "init",
    value: function init() {
      var self = this;
      this.modal.subscribeEvent('close', function () {
        self.destroy();
      });

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.addEventListener('click', this.modalClose.bind(this), false);
      }

      this.previewsInit();
    }
  }, {
    key: "modalClose",
    value: function modalClose() {
      this.modal.close();
    }
  }, {
    key: "previewsInit",
    value: function previewsInit() {
      var _this = this;

      var self = this;
      this.sliderPreviews = new sliderSwiper_SliderSwiperAdapter();
      var previewsThemeBusinessLogic = new whatsapp_previewsThemeBusinessLogic_PreviewsThemeBusinessLogic(this);
      var paramsSliderPreviews = previewsThemeBusinessLogic.getParamsSlider();
      this.sliderPreviews.init(paramsSliderPreviews);

      var _loop = function _loop(i) {
        var previewEl = _this.previewlistElems[i];
        var groupId = previewEl.getAttribute('data-group');
        updateStatePreview(previewEl, _this.storiesId, groupId);
        previewEl.addEventListener('click', function () {
          self.modal.open();
          self.initSliderGroupStories(i);
        });
      };

      for (var i = 0; i < this.previewlistElems.length; i++) {
        _loop(i);
      }

      this.previewsEl.style.opacity = '';
    }
  }, {
    key: "initSliderGroupStories",
    value: function initSliderGroupStories(indexGroup) {
      var sliderGroupStoriesThemeBusinessLogic = new whatsapp_sliderGroupStoriesThemeBusinessLogic_SliderGroupStoriesThemeBusinessLogic(this);
      var paramsSliderGroupStories = sliderGroupStoriesThemeBusinessLogic.getParamsSlider(indexGroup);
      this.sliderGroupStories = new sliderSwiper_SliderSwiperAdapter();
      this.sliderGroupStories.subscribeEvent('slideChange', function () {
        sliderGroupStoriesThemeBusinessLogic.eventSlideChange();
      });
      this.sliderGroupStories.subscribeEvent('pointerdown', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerdown(e);
      });
      this.sliderGroupStories.subscribeEvent('pointerup', function (e) {
        sliderGroupStoriesThemeBusinessLogic.eventPointerup(e);
      });

      function iOS() {
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
        || navigator.userAgent.includes("Mac") && "ontouchend" in document;
      }

      if (iOS) {
        paramsSliderGroupStories.effect = 'slide';
      }

      this.sliderGroupStories.init(paramsSliderGroupStories);
      this.initGroupStories();
    }
  }, {
    key: "initGroupStories",
    value: function initGroupStories() {
      var previewEl = this.previewlistElems[this.sliderGroupStories.activeIndex];
      var groupId = previewEl.getAttribute('data-group');
      saveViewStoriesGroup(this.storiesId, groupId);
      updateStatePreview(previewEl, this.storiesId, groupId);
      var groupStoriesThemeBusinessLogic = new whatsapp_groupStoriesThemeBusinessLogic_GroupStoriesThemeBusinessLogic(this);
      var activeSlide = this.sliderGroupStories.activeSlide;
      var groupEl = activeSlide.querySelector('.sitestories-group-stories');
      this.groupStories = new groupStoriesFacade_GroupStoriesFacade(groupEl);
      this.groupStories.getControl().subscribeEvent('click', function (e) {
        groupStoriesThemeBusinessLogic.eventClick(e);
      });
      this.groupStories.getControl().subscribeEvent('mouseout', function (e) {
        groupStoriesThemeBusinessLogic.eventMouseout(e);
      });
      this.groupStories.getControl().init();
      this.initStorySlider();
    }
  }, {
    key: "initStorySlider",
    value: function initStorySlider() {
      this.sliderStory = new sliderSwiper_SliderSwiperAdapter();
      var storySliderThemeBusinessLogic = new whatsapp_storySliderThemeBusinessLogic_StorySliderThemeBusinessLogic(this);
      var paramsSliderStory = storySliderThemeBusinessLogic.getParamsSlider();
      this.sliderStory.subscribeEvent('autoplayStop', function () {
        storySliderThemeBusinessLogic.eventAutoplayStop();
      });
      this.sliderStory.subscribeEvent('autoplayStart', function () {
        storySliderThemeBusinessLogic.eventAutoplayStart();
      });
      this.sliderStory.subscribeEvent('autoplayResume', function () {
        storySliderThemeBusinessLogic.eventAutoplayResume();
      });
      this.sliderStory.subscribeEvent('autoplayPause', function () {
        storySliderThemeBusinessLogic.eventAutoplayPause();
      });
      this.sliderStory.subscribeEvent('slideChange', function () {
        storySliderThemeBusinessLogic.eventSlideChange();
      });
      this.sliderStory.init(paramsSliderStory);
      this.navigation = new whatsapp_navigationThemeBusinessLogic_NavigationThemeBusinessLogic(this);
      this.initStory();
    }
  }, {
    key: "initStory",
    value: function initStory() {
      this.story = new storyFacade_StoryFacade({
        wrapper: this.sliderStory.activeSlide,
        bullets: this.sliderStory.bullets,
        slideActiveIndex: this.sliderStory.activeIndex,
        activeBullet: this.sliderStory.activeBullet
      });
      var storyThemeBusinessLogic = new whatsapp_storyThemeBusinessLogic_StoryThemeBusinessLogic(this);
      this.story.control.subscribeEvent('active', function (storyControl) {
        storyThemeBusinessLogic.eventActive(storyControl);
      });

      if (this.story.control.type === 'product') {
        storyThemeBusinessLogic.typeProduct();
      }

      if (this.story.control.type === 'product-collection') {
        storyThemeBusinessLogic.typeProductCollection();
      }

      if (this.story.control.type === 'product-list') {
        storyThemeBusinessLogic.typeProductList();
      }

      this.story.control.subscribeEvent('reset', function (story) {
        storyThemeBusinessLogic.eventReset();
      });
      this.story.control.active();
      this.isInit = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.sliderGroupStories) {
        this.story.destroy();
        this.sliderStory.destroy();
        this.groupStories.destroy();
        this.sliderGroupStories.destroy();
        this.sliderGroupStories = null;
        this.groupStories = null;
        this.sliderStory = null;
        this.story = null;
        this.navigation = null;
        this.isPlaying = null;
        this.isSoundOn = null;
        this.isInit = null;
      }

      for (var i = 0; i < this.iconCloseElems.length; i++) {
        var iconClose = this.iconCloseElems[i];
        iconClose.removeEventListener('click', this.modalClose.bind(this), false);
      }
    }
  }]);

  return Whatsapp;
}();


// CONCATENATED MODULE: ./src/use_cases/themes/amp/previewsThemeBusinessLogic.js


function amp_previewsThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function amp_previewsThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function amp_previewsThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) amp_previewsThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) amp_previewsThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var amp_previewsThemeBusinessLogic_PreviewsThemeBusinessLogic = /*#__PURE__*/function () {
  function PreviewsThemeBusinessLogic(theme) {
    amp_previewsThemeBusinessLogic_classCallCheck(this, PreviewsThemeBusinessLogic);

    this.theme = theme;
  }

  amp_previewsThemeBusinessLogic_createClass(PreviewsThemeBusinessLogic, [{
    key: "getParamsSlider",
    value: function getParamsSlider() {
      var spaceBetweenPreviews = this.theme.previewsEl.getAttribute('data-space-between') ? this.theme.previewsEl.getAttribute('data-space-between') : 10;
      return {
        el: this.theme.previewsEl.querySelector('#previews-slider'),
        containerModifierClass: 'sitestories-previews-slider_',
        wrapperClass: 'sitestories-previews-slider__wrapper',
        slideClass: 'sitestories-previews-slider__slide',
        slideActiveClass: 'sitestories-previews-slider__slide_active',
        slideNextClass: 'sitestories-previews-slider__slide_next',
        slidePrevClass: 'sitestories-previews-slider__slide_prev',
        slidesPerView: 'auto',
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        spaceBetween: spaceBetweenPreviews,
        centeredSlides: false,
        slideToClickedSlide: true,
        initialSlide: 0,
        navigation: {
          nextEl: '.sitestories-previews-slider__button-nav_next',
          prevEl: '.sitestories-previews-slider__button-nav_prev',
          disabledClass: 'sitestories-previews-slider__button-nav_disabled'
        },
        direction: this.theme.style === 'whatsapp' ? 'vertical' : 'horizontal'
      };
    }
  }]);

  return PreviewsThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/amp/storyThemeBusinessLogic.js


function amp_storyThemeBusinessLogic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function amp_storyThemeBusinessLogic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function amp_storyThemeBusinessLogic_createClass(Constructor, protoProps, staticProps) { if (protoProps) amp_storyThemeBusinessLogic_defineProperties(Constructor.prototype, protoProps); if (staticProps) amp_storyThemeBusinessLogic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var amp_storyThemeBusinessLogic_colorThief = new o();
var amp_storyThemeBusinessLogic_StoryThemeBusinessLogic = /*#__PURE__*/function () {
  function StoryThemeBusinessLogic(theme) {
    amp_storyThemeBusinessLogic_classCallCheck(this, StoryThemeBusinessLogic);

    this.theme = theme;
  }

  amp_storyThemeBusinessLogic_createClass(StoryThemeBusinessLogic, [{
    key: "typeProduct",
    value: function typeProduct() {
      var self = this;
      var productEl = this.theme.story.control.el.querySelector('#story-product');
      this.theme.story.setProduct(productEl);
      this.theme.story.product.subscribeEvent('init', function () {
        var img = self.theme.story.product.el.querySelector('.sitestories-slider-product-images__image');

        if (img.complete) {
          var imgMainColorArr = amp_storyThemeBusinessLogic_colorThief.getColor(img);
          self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
        } else {
          img.addEventListener('load', function () {
            var imgMainColorArr = amp_storyThemeBusinessLogic_colorThief.getColor(img);
            self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')';
          });
        }
      });

      if (this.theme.story.product.action === 'go-to-link') {
        this._typeProductActionLink();
      }

      if (this.theme.story.product.action === 'open-product-card') {
        this._typeProductActionCard();
      }

      this.theme.story.product.init();
    }
  }, {
    key: "_typeProductActionLink",
    value: function _typeProductActionLink() {
      var self = this;
      this.theme.story.product.subscribeEvent('click', function (e) {
        var halfWidthWindow = window.innerWidth / 2;

        if (self.theme.story.product.sliderImages) {
          if (e.clientX > halfWidthWindow) {
            self.theme.story.product.sliderImages.slideNext();
          } else {
            self.theme.story.product.sliderImages.slidePrev();
          }
        }

        if (e.target.closest('.sitestories-story-product__button-box')) {
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
        }
      });
      var sliderProductImagesEl = this.theme.story.product.el.querySelector('.sitestories-slider-product-images');
      var sliderProductImagesParams = {
        el: sliderProductImagesEl,
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-slider-product-images_',
        wrapperClass: 'sitestories-slider-product-images__wrapper',
        slideClass: 'sitestories-slider-product-images__slide',
        slideActiveClass: 'sitestories-slider-product-images__slide_active',
        slideNextClass: 'sitestories-slider-product-images__slide_next',
        slidePrevClass: 'sitestories-slider-product-images__slide_prev',
        bulletClass: 'sitestories-slider-product-images__bullet',
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 15,
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0,
        pagination: {
          el: sliderProductImagesEl.querySelector('.sitestories-slider-product-images__pagination')
        }
      };
      this.theme.story.product.setSliderImages(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.initSliderImages(sliderProductImagesParams);
    }
  }, {
    key: "_typeProductActionCard",
    value: function _typeProductActionCard() {
      var self = this;
      var productCardEl = this.theme.story.control.el.querySelector('#product-card');
      this.theme.story.setProductCard(productCardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.product.subscribeEvent('click', function (e) {
        if (e.target.closest('.sitestories-story-product__button')) {
          e.preventDefault();
        }
      });
      this.theme.story.product.subscribeEvent('pointerup', function (e) {
        // Open card
        if (e.target.closest('.sitestories-story-product__button-box')) {
          e.preventDefault();
          self.theme.story.productCard.setState('card');
          self.theme.sliderStory.autoplayStop();
          self.theme.groupStories.getStatesIconsPlay().pause();
          self.theme.isPlaying = false;
          self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.disable();
          self.theme.sliderStory.disable();
        } // Go to checkout


        if (e.target.closest('.sitestories-story-product-card__response-button-checkout')) {
          var link = e.target.getAttribute('data-link') ? e.target.getAttribute('data-link') : '#no-link';
          window.location.href = link;
        }
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
        }
      });
      this.theme.story.subscribeEvent('destroy', function () {
        self.theme.story.productCard.setState('hide');
        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = this.theme.story.control.el.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "typeProductCollection",
    value: function typeProductCollection() {
      var self = this;
      var productCollectionEl = this.theme.story.control.el.querySelector('#product-collection');
      this.theme.story.setProductCollection(productCollectionEl);
      var sliderParams = this.getParamsSliderProductCollection();
      this.theme.story.productCollection.setSlider(new sliderSwiper_SliderSwiperAdapter());
      this.theme.story.productCollection.initSlider(sliderParams);
      var previewEl = this.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
      this.theme.story.setProductPreview(previewEl);
      this.theme.story.productCollection.slider.subscribeEvent('pointerdown', function () {
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
      });
      this.theme.story.productCollection.slider.subscribeEvent('pointerup', function () {
        self.theme.sliderGroupStories.enable();
        self.theme.sliderStory.enable();
      });

      if (this.theme.story.productPreview.type === 'card') {
        this._typeProductCollectionCard();
      }

      if (this.theme.story.productPreview.type === 'link') {
        this._typeProductCollectionLink();
      }

      this.theme.story.productCollection.slider.subscribeEvent('slideChange', function (e) {
        self.theme.story.productPreview.destroy();
        var previewEl = self.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview');
        self.theme.story.setProductPreview(previewEl);

        if (self.theme.story.productPreview.type === 'card') {
          self._typeProductCollectionCard();
        }

        if (self.theme.story.productPreview.type === 'link') {
          self._typeProductCollectionLink();
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCollection.init();
      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
      this.theme.story.productCollection.subscribeEvent('destroy', function () {
        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
      });
    }
  }, {
    key: "_typeProductCollectionCard",
    value: function _typeProductCollectionCard() {
      var self = this;

      if (self.theme.story.productCard) {
        self.theme.story.productCard.destroy();
      }

      var cardEl = this.theme.story.control.el.querySelectorAll('#product-card')[this.theme.story.productCollection.slider.activeIndex];

      if (!cardEl) {
        console.error('[sitestories]: Couldn\'t find product card element');
        return;
      }

      var paramsSliderProductCard = this.getParamsSliderProductCard();
      paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');
      this.theme.story.setProductCard(cardEl);
      this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card

      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();

        if (self.theme.story.productCollection.slider.isEnd) {
          self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width-end-slide');
        }

        self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width');
        self.theme.sliderGroupStories.disable();
        self.theme.sliderStory.disable();
        self.theme.story.productCollection.slider.disable();
        self.theme.story.productCard.setState('card');
        self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
        self.theme.sliderStory.autoplayStop();
        self.theme.groupStories.getStatesIconsPlay().pause();
        self.theme.isPlaying = false;
      });
      this.theme.story.productCard.subscribeEvent('click', function (e) {
        // Close product card
        if (e.target.closest('.sitestories-story-product-card__close')) {
          if (self.theme.story.productCollection.slider.isEnd) {
            self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide');
          }

          self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width');
          self.theme.sliderGroupStories.enable();
          self.theme.sliderStory.enable();
          self.theme.story.productCollection.slider.enable();
          self.theme.story.productCard.setState('hide');
          self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
        }
      });
      this.theme.story.productPreview.init();
      this.theme.story.productCard.init();
      this.theme.story.productCard.initSlider(paramsSliderProductCard);
    }
  }, {
    key: "_typeProductCollectionLink",
    value: function _typeProductCollectionLink() {
      var self = this;
      this.theme.story.productPreview.subscribeEvent('click', function (e) {
        e.preventDefault();
        var button = self.theme.story.productPreview.el.querySelector('.sitestories-product-collection__product-preview-button');
        var link = button.getAttribute('href');
        window.location.href = link;
      });
      this.theme.story.productPreview.init();
    }
  }, {
    key: "typeProductList",
    value: function typeProductList() {
      var _this = this;

      var self = this;
      var previewsElems = this.theme.story.control.el.querySelectorAll('#product-preview');
      var cardsElems = this.theme.story.control.el.querySelectorAll('#product-card');
      var paramsSliderProductCard = this.getParamsSliderProductCard();

      var _loop = function _loop(i) {
        var previewEl = previewsElems[i];

        if (previewEl.getAttribute('data-type') === 'card') {
          var cardEl = cardsElems[i];
          paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider');

          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.setProductCard(cardEl);

          _this.theme.story.productCard.setSlider(new sliderSwiper_SliderSwiperAdapter()); // Open product card


          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            self.theme.story.setProductCard(cardEl);
            self.theme.story.productCard.setState('card');
            self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened');
            self.theme.sliderStory.autoplayStop();
            self.theme.groupStories.getStatesIconsPlay().pause();
            self.theme.isPlaying = false;
            self.theme.sliderGroupStories.disable();
            self.theme.sliderStory.disable();
          });

          _this.theme.story.productCard.subscribeEvent('click', function (e) {
            // Close product card
            if (e.target.closest('.sitestories-story-product-card__close')) {
              self.theme.story.setProductCard(cardEl);
              self.theme.story.productCard.setState('hide');
              self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
              self.theme.sliderGroupStories.enable();
              self.theme.sliderStory.enable();
            }
          });

          _this.theme.story.productPreview.init();

          _this.theme.story.productCard.init();

          _this.theme.story.productCard.initSlider(paramsSliderProductCard);
        }

        if (previewEl.getAttribute('data-type') === 'link') {
          _this.theme.story.setProductPreview(previewEl);

          _this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault();
            var button = previewEl.querySelector('.sitestories-product-list__product-button');
            var link = button.getAttribute('href');
            window.location.href = link;
          });

          _this.theme.story.productPreview.init();
        }
      };

      for (var i = 0; i < previewsElems.length; i++) {
        _loop(i);
      }

      this.theme.story.subscribeEvent('destroy', function () {
        if (self.theme.story.productCard) {
          self.theme.story.productCard.setState('hide');
        }

        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened');
      });
    }
  }, {
    key: "getParamsSliderProductCollection",
    value: function getParamsSliderProductCollection() {
      return {
        el: this.theme.story.productCollection.el.querySelector('.sitestories-product-collection__slider'),
        slideToClickedSlide: true,
        containerModifierClass: 'sitestories-product-collection__slider_',
        wrapperClass: 'sitestories-product-collection__slider-wrapper',
        slideClass: 'sitestories-product-collection__slide',
        slideActiveClass: 'sitestories-product-collection__slide_active',
        slideNextClass: 'sitestories-product-collection__slide_next',
        slidePrevClass: 'sitestories-product-collection__slide_prev',
        bulletClass: 'sitestories-product-collection__slider-bullet',
        slidesPerView: 1.2,
        centeredSlides: false,
        spaceBetween: 0,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "getParamsSliderProductCard",
    value: function getParamsSliderProductCard() {
      return {
        slideToClickedSlide: false,
        containerModifierClass: 'sitestories-story-product-card__slider_',
        wrapperClass: 'sitestories-story-product-card__slider-wrapper',
        slideClass: 'sitestories-story-product-card__slide',
        slideActiveClass: 'sitestories-story-product-card__slide_active',
        slideNextClass: 'sitestories-story-product-card__slide_next',
        slidePrevClass: 'sitestories-story-product-card__slide_prev',
        bulletClass: 'sitestories-story-product-card__slider-bullet',
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
        effect: 'slide',
        simulateTouch: true,
        allowTouchMove: true,
        initialSlide: 0
      };
    }
  }, {
    key: "eventActive",
    value: function eventActive(storyControl) {
      var self = this;
      this.theme.modalBackground.setBackground(storyControl.srcMedia, storyControl.typeStory);
      this.theme.groupStories.getControlsElems().show();

      if (this.theme.isPlaying === null || this.theme.isPlaying) {
        this.theme.story.videoManager.play();
        this.theme.groupStories.getAnimBullets().start(storyControl.bulletAnimEl, storyControl.speedAutoplayMS).then(function () {
          self.theme.story.videoManager.pause();
          self.theme.modalBackground.pauseVideo();
          self.theme.navigation.next();
        });
        this.theme.groupStories.getStatesIconsPlay().play();

        if (storyControl.typeStory === 'video') {
          this.theme.modalBackground.playVideo();
        }
      }

      if (this.theme.isSoundOn) {
        this.theme.groupStories.getStatesSoundIcons().enable();
        this.theme.story.videoManager.enableSound();
      } else {
        this.theme.groupStories.getStatesSoundIcons().disable();
        this.theme.story.videoManager.disableSound();
      }

      this.theme.story.setTimePassed(this.theme.groupStories.control.el, this.theme.lang);
      this.theme.story.control.activeAnimate();
    }
  }, {
    key: "eventReset",
    value: function eventReset() {
      this.theme.modalBackground.reset();
      this.theme.story.videoManager.reset();
      this.theme.story.control.resetAnimate();
    }
  }]);

  return StoryThemeBusinessLogic;
}();
// CONCATENATED MODULE: ./src/use_cases/themes/amp/amp.js







function amp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function amp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function amp_createClass(Constructor, protoProps, staticProps) { if (protoProps) amp_defineProperties(Constructor.prototype, protoProps); if (staticProps) amp_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Core
 // Adapters

 // Use cases


 // Libs

var amp_fslightbox = __webpack_require__(20);

var amp_Amp = /*#__PURE__*/function () {
  function Amp(params) {
    amp_classCallCheck(this, Amp);

    this.storiesEl = params.storiesEl;
    this.storiesId = this.storiesEl.getAttribute('id');
    this.isMobile = this.storiesEl.getAttribute('data-device') === 'mobile';
    this.lang = this.storiesEl.getAttribute('data-lang') ? this.storiesEl.getAttribute('data-lang') : 'en';
    this.style = this.storiesEl.getAttribute('data-style');
    this.previewsEl = this.storiesEl.querySelector('.sitestories__previews');
    this.previewlistElems = this.previewsEl.querySelectorAll('.sitestories__preview');
    this.modalEl = this.storiesEl.querySelector('.sitestories__modal');
    this.modal = new Modal(this.modalEl); // this.modalBackground = new ModalBackground(this.modalEl)
    //this.iconCloseElems = this.modalEl.querySelectorAll('.sitestories__modal-close')
    // this.sliderGroupStories = null

    this.sliderPreviews = null;
    this.story = null;
    this.isPlaying = null;
    this.isSoundOn = null;
    this.isInit = null;
    this.init();
  }

  amp_createClass(Amp, [{
    key: "init",
    value: function init() {
      var self = this;
      this.modal.subscribeEvent('close', function () {
        self.destroy();
      });
      this.previewsInit();
    }
  }, {
    key: "previewsInit",
    value: function previewsInit() {
      var _this = this;

      var self = this;
      this.sliderPreviews = new sliderSwiper_SliderSwiperAdapter();
      var previewsThemeBusinessLogic = new amp_previewsThemeBusinessLogic_PreviewsThemeBusinessLogic(this);
      var paramsSliderPreviews = previewsThemeBusinessLogic.getParamsSlider();
      this.sliderPreviews.init(paramsSliderPreviews);

      var _loop = function _loop(i) {
        var previewEl = _this.previewlistElems[i];
        var groupId = previewEl.getAttribute('data-group');
        updateStatePreview(previewEl, _this.storiesId, groupId);
        previewEl.addEventListener('click', function () {
          saveViewStoriesGroup(self.storiesId, groupId);
          updateStatePreview(previewEl, self.storiesId, groupId);
          self.modal.open();
          self.createStories(i);
        });
      };

      for (var i = 0; i < this.previewlistElems.length; i++) {
        _loop(i);
      }

      this.previewsEl.style.opacity = '';
    }
  }, {
    key: "createStories",
    value: function createStories(previewIndex) {
      var self = this; // this.loadCSS('https://cdn.ampproject.org/amp-story-player-v0.css')
      // this.loadScript("https://cdn.ampproject.org/v0.js")
      //     .then(function(script2) { return self.loadScript("https://cdn.ampproject.org/v0/amp-story-player-0.1.js") })
      //     .then(function(script2) { return self.loadScript("https://cdn.ampproject.org/amp-story-player-v0.js", [
      //         {
      //             name: 'custom-element',
      //             value: 'amp-story-player'
      //         }
      //     ]) })
      //     .then(function(script2) {
      //         const ampStoryPlayer = document.createElement('amp-story-player')
      //         ampStoryPlayer.setAttribute('layout', 'fill')
      //         // ampStoryPlayer.setAttribute('width', '360')
      //         // ampStoryPlayer.setAttribute('height', '600')
      //         const script = document.createElement('script')
      //         script.setAttribute('type', 'application/json')
      //         const params = {
      //             "behavior": {
      //                 "autoplay": false,
      //                 "pageScroll": false
      //             },
      //             "controls": [{
      //                 "name": "close",
      //                 "position": "start"
      //             }]
      //         }
      //         script.innerHTML = JSON.stringify(params)
      //         ampStoryPlayer.append(script)
      //         for (let i = 0; i < self.previewlistElems.length; i++) {
      //             const previewEl = self.previewlistElems[i]
      //             const a = document.createElement('a')
      //             a.setAttribute('href', previewEl.getAttribute('data-link'))
      //             ampStoryPlayer.append(a)
      //         }
      //         self.modalEl.append(ampStoryPlayer)
      //         const controlPlayer = new AmpStoryPlayer(window, ampStoryPlayer)
      //         controlPlayer.load()
      //         let currentGroupStories
      //         if (controlPlayer.isReady) {
      //             currentGroupStories = controlPlayer.getStories()[previewIndex]
      //             controlPlayer.show(currentGroupStories.href)
      //             //controlPlayer.rewind()
      //             controlPlayer.play()
      //         } else {
      //             controlPlayer.addEventListener('ready', function () {
      //                 currentGroupStories = controlPlayer.getStories()[previewIndex]
      //                 controlPlayer.show(currentGroupStories.href)
      //                 //controlPlayer.rewind()
      //                 controlPlayer.play()
      //             })
      //         }
      //         controlPlayer.addEventListener('amp-story-player-close', function () {
      //             controlPlayer.pause()
      //             self.modal.close()
      //             setTimeout(function () {
      //                 const ampStoryPlayerEl = self.storiesEl.querySelector('amp-story-player')
      //                 ampStoryPlayerEl.parentNode.removeChild(ampStoryPlayerEl)
      //                 const scripts = document.querySelectorAll('#sitestories-js-amp')
      //                 const links = document.querySelectorAll('#sitestories-css-amp')
      //                 for (let i = 0; i < scripts.length; i++) {
      //                     const script = scripts[i]
      //                     document.head.removeChild(script)
      //                 }
      //                 for (let i = 0; i < links.length; i++) {
      //                     const link = links[i]
      //                     document.head.removeChild(link)
      //                 }
      //             }, 350)
      //         })
      //     })
      // var l = new URL(window.location.href);
      // l.searchParams.set("wpstory", 'sdfsdf'),
      // history.pushState({}, null, l)

      var ampStoryPlayer = document.createElement('amp-story-player');
      ampStoryPlayer.setAttribute('layout', 'fill');
      ampStoryPlayer.setAttribute('width', '360');
      ampStoryPlayer.setAttribute('height', '600'); //ampStoryPlayer.setAttribute('amp-cache', 'cdn.ampproject.org')

      ampStoryPlayer.style.width = '100%';
      ampStoryPlayer.style.height = '100%';
      var script = document.createElement('script');
      script.setAttribute('type', 'application/json');
      var params = {
        "behavior": {
          "autoplay": false,
          "pageScroll": false
        },
        "controls": [{
          "name": "close",
          "position": "start"
        }]
      };
      script.innerHTML = JSON.stringify(params);
      ampStoryPlayer.append(script);

      for (var i = 0; i < self.previewlistElems.length; i++) {
        var previewEl = self.previewlistElems[i];
        var a = document.createElement('a');
        a.setAttribute('href', previewEl.getAttribute('data-link'));
        ampStoryPlayer.append(a);
      }

      self.modalEl.append(ampStoryPlayer);
      var controlPlayer = new AmpStoryPlayer(window, ampStoryPlayer);
      controlPlayer.load();
      var currentGroupStories;

      if (controlPlayer.isReady) {
        currentGroupStories = controlPlayer.getStories()[previewIndex];
        controlPlayer.show(currentGroupStories.href); //controlPlayer.rewind()

        controlPlayer.play();
      } else {
        controlPlayer.addEventListener('ready', function () {
          currentGroupStories = controlPlayer.getStories()[previewIndex];
          controlPlayer.show(currentGroupStories.href); //controlPlayer.rewind()

          controlPlayer.play();
        });
      }

      controlPlayer.addEventListener('amp-story-player-close', function () {
        controlPlayer.pause();
        self.modal.close();
        setTimeout(function () {
          var ampStoryPlayerEl = self.storiesEl.querySelector('amp-story-player');
          ampStoryPlayerEl.parentNode.removeChild(ampStoryPlayerEl);
          var scripts = document.querySelectorAll('#sitestories-js-amp');
          var links = document.querySelectorAll('#sitestories-css-amp');

          for (var _i = 0; _i < scripts.length; _i++) {
            var _script = scripts[_i];
            document.head.removeChild(_script);
          }

          for (var _i2 = 0; _i2 < links.length; _i2++) {
            var link = links[_i2];
            document.head.removeChild(link);
          } // var t = new URL(window.location.href);
          // t.searchParams.delete("wpstory"),
          // history.pushState({}, null, t)

        }, 350);
      });
    }
  }, {
    key: "loadCSS",
    value: function loadCSS(href, attrs) {
      return new Promise(function (resolve, reject) {
        var link = document.createElement('link');
        link.setAttribute('href', href);
        link.setAttribute('id', 'sitestories-css-amp');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');

        if (attrs) {
          for (var i = 0; i < attrs.length; i++) {
            var obj = attrs[i];
            link.setAttribute(obj.name, obj.value);
          }
        }

        link.onload = function () {
          return resolve(link);
        };

        link.onerror = function () {
          return reject(new Error('Error loading: ' + src));
        };

        document.head.append(link);
      });
    }
  }, {
    key: "loadScript",
    value: function loadScript(src, attrs) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.setAttribute('src', src);
        script.setAttribute('id', 'sitestories-js-amp');

        if (attrs) {
          for (var i = 0; i < attrs.length; i++) {
            var obj = attrs[i];
            script.setAttribute(obj.name, obj.value);
          }
        }

        script.onload = function () {
          return resolve(script);
        };

        script.onerror = function () {
          return reject(new Error('Error loading: ' + src));
        };

        document.head.append(script);
      });
    }
  }, {
    key: "loadScripts",
    value: function loadScripts() {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        var src = 'https://cdn.ampproject.org/v0.js';
        script.src = src;

        script.onload = function (event) {
          return resolve(script);
        };

        script.onerror = function () {
          return console.error('[Sitestories] error loading: ' + src);
        };
      }).then(function (script) {
        document.head.append(script);
      });
    }
  }, {
    key: "initStory",
    value: function initStory() {
      this.story = new storyFacade_StoryFacade({
        wrapper: this.sliderStory.activeSlide,
        bullets: this.sliderStory.bullets,
        slideActiveIndex: this.sliderStory.activeIndex,
        activeBullet: this.sliderStory.activeBullet
      });
      var storyThemeBusinessLogic = new amp_storyThemeBusinessLogic_StoryThemeBusinessLogic(this);
      this.story.control.subscribeEvent('active', function (storyControl) {
        storyThemeBusinessLogic.eventActive(storyControl);
      });

      if (this.story.control.type === 'product') {
        storyThemeBusinessLogic.typeProduct();
      }

      if (this.story.control.type === 'product-collection') {
        storyThemeBusinessLogic.typeProductCollection();
      }

      if (this.story.control.type === 'product-list') {
        storyThemeBusinessLogic.typeProductList();
      }

      this.story.control.subscribeEvent('reset', function (story) {
        storyThemeBusinessLogic.eventReset();
      });
      this.story.control.active();
      this.isInit = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.story) {
        this.story.destroy();
        this.story = null;
        this.isPlaying = null;
        this.isSoundOn = null;
        this.isInit = null;
      }
    }
  }]);

  return Amp;
}();


// CONCATENATED MODULE: ./src/use_cases/themes/themes.js






// CONCATENATED MODULE: ./src/sitestories.js


function sitestories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sitestories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sitestories_createClass(Constructor, protoProps, staticProps) { if (protoProps) sitestories_defineProperties(Constructor.prototype, protoProps); if (staticProps) sitestories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



(function () {
  var Sitestories = /*#__PURE__*/function () {
    function Sitestories(params) {
      sitestories_classCallCheck(this, Sitestories);

      this.id = params.id;
      this.el = document.querySelector('.sitestories' + '#' + this.id);
      this.theme = this.el.getAttribute('data-theme');
      this.initTheme();
    }

    sitestories_createClass(Sitestories, [{
      key: "initTheme",
      value: function initTheme() {
        switch (this.theme) {
          case 'instagram':
            new instagram_Instagram({
              storiesEl: this.el
            });
            break;

          case 'facebook':
            new facebook_Facebook({
              storiesEl: this.el
            });
            break;

          case 'samokat':
            new samokat_Samokat({
              storiesEl: this.el
            });
            break;

          case 'vkontakte':
            new vk_Vk({
              storiesEl: this.el
            });
            break;

          case 'whatsapp':
            new whatsapp_Whatsapp({
              storiesEl: this.el
            });
            break;

          case 'amp':
            new amp_Amp({
              storiesEl: this.el
            });
            break;

          default:
            console.error('[sitestories]: Theme not defined "' + this.theme + '"');
            return;
        }
      }
    }]);

    return Sitestories;
  }();

  window.addEventListener('DOMContentLoaded', function () {
    // Instagram
    new Sitestories({
      id: 'stories-instagram-desktop'
    });
    new Sitestories({
      id: 'stories-instagram-mobile'
    }); // Facebook

    new Sitestories({
      id: 'stories-facebook-desktop'
    });
    new Sitestories({
      id: 'stories-facebook-mobile'
    }); // Samokat

    new Sitestories({
      id: 'stories-samokat-desktop'
    });
    new Sitestories({
      id: 'stories-samokat-mobile'
    }); // Vk

    new Sitestories({
      id: 'stories-vk-desktop'
    });
    new Sitestories({
      id: 'stories-vk-mobile'
    }); // Whatsapp

    new Sitestories({
      id: 'stories-whatsapp-desktop'
    });
    new Sitestories({
      id: 'stories-whatsapp-mobile'
    }); // Amp

    new Sitestories({
      id: 'stories-amp-desktop'
    });
  });
})();

/***/ })
/******/ ]);