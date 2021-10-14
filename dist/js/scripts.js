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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(41);
var has = __webpack_require__(5);
var uid = __webpack_require__(34);
var NATIVE_SYMBOL = __webpack_require__(44);
var USE_SYMBOL_AS_UID = __webpack_require__(67);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(39);
var anObject = __webpack_require__(3);
var toPrimitive = __webpack_require__(21);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(10);
var has = __webpack_require__(5);
var setGlobal = __webpack_require__(22);
var inspectSource = __webpack_require__(32);
var InternalStateModule = __webpack_require__(14);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(7);
var createPropertyDescriptor = __webpack_require__(30);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(16).f;
var createNonEnumerableProperty = __webpack_require__(10);
var redefine = __webpack_require__(8);
var setGlobal = __webpack_require__(22);
var copyConstructorProperties = __webpack_require__(62);
var isForced = __webpack_require__(15);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(64);
var global = __webpack_require__(0);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(61);
var global = __webpack_require__(0);
var isObject = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(10);
var objectHas = __webpack_require__(5);
var sharedKey = __webpack_require__(33);
var hiddenKeys = __webpack_require__(18);

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

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(53);
var createPropertyDescriptor = __webpack_require__(30);
var toIndexedObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(21);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(39);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(38);
var requireObjectCoercible = __webpack_require__(13);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(10);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(26);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(3);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(4);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(40);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41);
var uid = __webpack_require__(34);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(27);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var defineProperties = __webpack_require__(68);
var enumBugKeys = __webpack_require__(26);
var hiddenKeys = __webpack_require__(18);
var html = __webpack_require__(56);
var documentCreateElement = __webpack_require__(31);
var sharedKey = __webpack_require__(33);

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
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(57);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(9);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(31);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(22);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(23);
var store = __webpack_require__(40);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIndexedObject = __webpack_require__(17);
var indexOf = __webpack_require__(65).indexOf;
var hiddenKeys = __webpack_require__(18);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(13);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(7).f;
var has = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(2);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(28);
var classofRaw = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(2);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
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
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(12);
var definePropertyModule = __webpack_require__(7);
var wellKnownSymbol = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(6);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(29);
var stickyHelpers = __webpack_require__(47);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
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

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isArrayIteratorMethod = __webpack_require__(80);
var toLength = __webpack_require__(25);
var bind = __webpack_require__(35);
var getIteratorMethod = __webpack_require__(81);
var callWithSafeIterationClosing = __webpack_require__(82);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(12);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(26);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(12);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var aPossiblePrototype = __webpack_require__(70);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(11);
var exec = __webpack_require__(49);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(8);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var inspectSource = __webpack_require__(32);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var ownKeys = __webpack_require__(63);
var getOwnPropertyDescriptorModule = __webpack_require__(16);
var definePropertyModule = __webpack_require__(7);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(12);
var getOwnPropertyNamesModule = __webpack_require__(24);
var getOwnPropertySymbolsModule = __webpack_require__(54);
var anObject = __webpack_require__(3);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

module.exports = global;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(17);
var toLength = __webpack_require__(25);
var toAbsoluteIndex = __webpack_require__(66);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(44);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(7);
var anObject = __webpack_require__(3);
var objectKeys = __webpack_require__(55);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(11);
var createIteratorConstructor = __webpack_require__(106);
var getPrototypeOf = __webpack_require__(90);
var setPrototypeOf = __webpack_require__(57);
var setToStringTag = __webpack_require__(45);
var createNonEnumerableProperty = __webpack_require__(10);
var redefine = __webpack_require__(8);
var wellKnownSymbol = __webpack_require__(2);
var IS_PURE = __webpack_require__(23);
var Iterators = __webpack_require__(20);
var IteratorsCore = __webpack_require__(89);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(0);
var isForced = __webpack_require__(15);
var redefine = __webpack_require__(8);
var has = __webpack_require__(5);
var classof = __webpack_require__(9);
var inheritIfRequired = __webpack_require__(37);
var toPrimitive = __webpack_require__(21);
var fails = __webpack_require__(1);
var create = __webpack_require__(36);
var getOwnPropertyNames = __webpack_require__(24).f;
var getOwnPropertyDescriptor = __webpack_require__(16).f;
var defineProperty = __webpack_require__(7).f;
var trim = __webpack_require__(72).trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(13);
var whitespaces = __webpack_require__(73);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(28);
var redefine = __webpack_require__(8);
var toString = __webpack_require__(75);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(28);
var classof = __webpack_require__(46);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(0);
var isForced = __webpack_require__(15);
var inheritIfRequired = __webpack_require__(37);
var defineProperty = __webpack_require__(7).f;
var getOwnPropertyNames = __webpack_require__(24).f;
var isRegExp = __webpack_require__(77);
var getFlags = __webpack_require__(29);
var stickyHelpers = __webpack_require__(47);
var redefine = __webpack_require__(8);
var fails = __webpack_require__(1);
var setInternalState = __webpack_require__(14).set;
var setSpecies = __webpack_require__(48);
var wellKnownSymbol = __webpack_require__(2);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var classof = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(2);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(8);
var anObject = __webpack_require__(3);
var fails = __webpack_require__(1);
var flags = __webpack_require__(29);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(18);
var isObject = __webpack_require__(4);
var has = __webpack_require__(5);
var defineProperty = __webpack_require__(7).f;
var uid = __webpack_require__(34);
var FREEZING = __webpack_require__(111);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);
var Iterators = __webpack_require__(20);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(46);
var Iterators = __webpack_require__(20);
var wellKnownSymbol = __webpack_require__(2);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);

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
  // eslint-disable-next-line no-throw-literal
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var requireObjectCoercible = __webpack_require__(13);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(11);
var global = __webpack_require__(0);
var userAgent = __webpack_require__(52);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(87).forEach;
var arrayMethodIsStrict = __webpack_require__(103);
var arrayMethodUsesToLength = __webpack_require__(104);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(35);
var IndexedObject = __webpack_require__(38);
var toObject = __webpack_require__(43);
var toLength = __webpack_require__(25);
var arraySpeciesCreate = __webpack_require__(101);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(17);
var addToUnscopables = __webpack_require__(105);
var Iterators = __webpack_require__(20);
var InternalStateModule = __webpack_require__(14);
var defineIterator = __webpack_require__(69);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(90);
var createNonEnumerableProperty = __webpack_require__(10);
var has = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(2);
var IS_PURE = __webpack_require__(23);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toObject = __webpack_require__(43);
var sharedKey = __webpack_require__(33);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(107);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(11);
var global = __webpack_require__(0);
var isForced = __webpack_require__(15);
var redefine = __webpack_require__(8);
var InternalMetadataModule = __webpack_require__(79);
var iterate = __webpack_require__(50);
var anInstance = __webpack_require__(51);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(1);
var checkCorrectnessOfIteration = __webpack_require__(83);
var setToStringTag = __webpack_require__(45);
var inheritIfRequired = __webpack_require__(37);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(116);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(117);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__);















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebasystStories = function WebasystStories(props) {
  _classCallCheck(this, WebasystStories);

  this.storiesSection = document.querySelector(props.storiesSelector);
  this.previews = document.querySelector(props.previewsSelector);
  this.storiesGroups = document.querySelector(props.storySelector);
  this.isMobile = props.isMobile;
  this.body = document.querySelector('body');
  this.arrowRight = '';
  this.arrowLeft = '';
  this.timer = props.timer;
  this.previewsWidth = 0;
  this.timerSpeed = Number(props.timerSpeed + '0');
  this.indexStory = 0;
  this.indexGroup = 0;
  this.storyWidth = 0;
  this.windowHeight = 0;
  this.storyPositionX = 0;
  this.storyPositionY = 0;
  this.media = '';
  this.soundIcon = '';
  this.playIcon = '';
  this.storiesListWrap = '';
  this.storiesList = '';
  this.storiesGroupBG = '';
  this.buttons = '';
  this.buttonsLine = '';
  this.slideType = '';
  this.currentVideo = '';
  this.timerIndicator = '';
  this.storyMessages = '';
  this.isStoryMessageViewed = false;
  this.previewsMoveEvent = false;
  this.switchStoryEvent = false;
  this.listenerSwitchRight = new Set();
  this.listenerSwitchLeft = new Set();
  this.listenerRemoveClick = new Set();
  this.listenerVideoPlay = new Set();
  this.listenerVideoBGPlay = new Set();
  this.listenerSoundIconVideoMuted = new Set();
  this.listenerCloseStoriesGroup = new Set();
  this.listenerDragsFunc = new Set();
  this.listenerSwipeFunc = new Set();
  this.listenerButtons = new WeakSet();
  this.view = {
    addElemSlider: function addElemSlider(slider, elem) {
      slider.appendChild(elem);
    }
  }, this.model = {
    openStoriesGroup: function openStoriesGroup(storiesGroup, indexGroup) {
      var _this = this;

      if (this.previewsMoveEvent) return;
      this.body.style.overflow = 'hidden';
      this.storiesGroups.classList.add('active');
      this.storiesGroups.children[indexGroup].classList.add('active');
      this.storiesListWrap = this.model._getElem(storiesGroup, 'webasyst-stories__list-wrap');
      this.storiesList = this.model._getElem(storiesGroup, 'webasyst-stories__list');
      this.media = this.model._getMedia(this.storiesList, ['img', 'source']);
      this.storiesGroupBG = this.model._getElem(storiesGroup, 'webasyst-stories__bg');
      this.storiesGroupBGVideo = this.model._getElem(storiesGroup, 'webasyst-stories__bg_video');
      this.buttons = this.model._getElem(storiesGroup, 'webasyst-stories__buttons');
      this.buttonsLine = this.model._getElems(this.buttons, 'webasyst-stories__button-line');
      this.soundIcon = this.model._getElem(storiesGroup, 'webasyst-stories__sound');
      this.arrowRight = this.model._getElem(storiesGroup, 'webasyst-stories__arrow-right');
      this.storyMessages = this.model._getElems(this.storiesGroups, 'webasyst-stories__message-wrap');
      this.arrowLeft = this.model._getElem(storiesGroup, 'webasyst-stories__arrow-left');
      this.storiesList.children[0].classList.add('active');
      this.buttons.children[0].classList.add('active');
      this.storiesList.style.transform = 'translate(0px, 0px)';
      this.indexStory = 0;
      this.indexGroup = indexGroup;
      this.slideType = this.model._checkSlideType(this.storiesList.children[this.indexStory].children[0]);

      if (this.slideType === 'img') {
        this.soundIcon.style.display = 'none';
      }

      this.model._setBackground(this.storiesGroupBG, this.storiesGroupBGVideo, this.slideType);

      this.currentVideo = this.model._getTag(this.storiesList.children[0].children[0], 'VIDEO');

      if (this.currentVideo) {
        this.playIcon = this.model._getElem(this.storiesList.children[0], 'webasyst-stories__play-icon');
        this.soundIcon.style.display = '';

        this.model._controlVideo(this.currentVideo, this.storiesGroupBGVideo, this.soundIcon, this.playIcon);
      }

      this.windowHeight = window.innerHeight;
      this.storyWidth = Math.floor(this.windowHeight * 0.6) <= window.innerWidth ? Math.floor(this.windowHeight * 0.6) : window.innerWidth;
      this.buttonsLine.forEach(function (btn) {
        btn.style.width = '0';
      });
      this.storyPositionX = this.storyWidth * this.indexStory;
      this.storyPositionY = this.windowHeight * this.indexStory;

      if (!this.listenerCloseStoriesGroup.has(this.indexGroup)) {
        this.model.addClickStoriesGroup(storiesGroup, this.model.closeStoriesGroup);
        this.listenerCloseStoriesGroup.add(this.indexGroup);
      }

      this.model.arrowsSwitch(storiesGroup);
      this.model.buttonsSwitch(storiesGroup);
      this.model.timerSwitch(storiesGroup);

      this.model._checkSlideEnd();

      if (this.isMobile) {
        this.model.switchSwipe(storiesGroup);
      } else {
        this.model.switchDrag(storiesGroup);
      }

      window.addEventListener('resize', function () {
        _this.windowHeight = window.innerHeight;
        _this.storyWidth = Math.floor(_this.windowHeight * 0.6) <= window.innerWidth ? Math.floor(_this.windowHeight * 0.6) : window.innerWidth;
        _this.storyPositionX = _this.storyWidth * _this.indexStory;
        _this.storyPositionY = _this.windowHeight * _this.indexStory;

        if (_this.isMobile) {
          _this.storiesList.style.transform = "translateY(-".concat(_this.storyPositionY, "px)");

          _this.model.switchSwipe(storiesGroup);
        } else {
          _this.storiesList.style.transform = "translateX(-".concat(_this.storyPositionX, "px)");

          _this.model.switchDrag(storiesGroup);
        }

        _this.model.arrowsSwitch(storiesGroup);

        _this.model.buttonsSwitch(storiesGroup);
      });

      if (!this.isStoryMessageViewed) {
        var _loop = function _loop(i) {
          var storyMessage = _this.storyMessages[i];
          storyMessage.style.display = '';
          setTimeout(function () {
            storyMessage.className += ' webasyst-stories__fade-out';
          }, 1500);
          setTimeout(function () {
            storyMessage.style.display = 'none';
            _this.isStoryMessageViewed = true;
          }, 2500);
        };

        for (var i = 0; i < this.storyMessages.length; i++) {
          _loop(i);
        }
      }
    },
    closeStoriesGroup: function closeStoriesGroup() {
      clearInterval(this.timerIndicator);
      this.body.style.overflow = '';
      this.storiesList.style.transform = '';
      this.arrowRight.style.opacity = '';
      this.storiesGroups.classList.remove('active');

      this.model._removeClasses(this.storiesGroups.children, 'active');

      this.model._removeClasses(this.storiesList.children, 'active');

      this.model._removeClasses(this.storiesList.children, 'switch-left');

      this.model._removeClasses(this.storiesList.children, 'switch-right');

      this.model._removeClasses(this.buttons.children, 'active');

      if (this.currentVideo) {
        this.model._videoStop(this.storiesGroupBGVideo, this.currentVideo);
      }
    },
    addClickStoriesGroup: function addClickStoriesGroup(storiesGroup, fn, removeEvent) {
      var action = function action(e) {
        if (e.target.className && /(webasyst-stories__bg|webasyst-stories__close|webasyst-stories__icon-close)/gi.test(e.target.className)) {
          fn();
        }

        if (removeEvent) storiesGroup.removeEventListener('click', action);
      };

      storiesGroup.addEventListener('click', action);
    },
    addClickPreview: function addClickPreview(preview, storiesGroup, indexGroup) {
      var _this2 = this;

      preview.addEventListener('click', function () {
        _this2.model.openStoriesGroup(storiesGroup, indexGroup);
      });
    },
    buttonsSwitch: function buttonsSwitch(storiesGroup) {
      var _this3 = this;

      var storiesLength = this.storiesList.children.length;
      var buttonWidth = this.storyWidth / storiesLength - 15;
      this.buttons.style.width = this.storyWidth + 'px';
      this.buttons.children.forEach(function (button, btnInx) {
        button.style.width = buttonWidth + 'px';

        if (!_this3.listenerButtons.has(button)) {
          button.addEventListener('click', function () {
            _this3.indexStory = btnInx;
            _this3.storyPositionX = _this3.storyWidth * _this3.indexStory;
            _this3.storyPositionY = _this3.windowHeight * _this3.indexStory;

            _this3.model._switchHistory(_this3.storyPositionY, _this3.storyPositionX, storiesGroup);

            _this3.storiesList.children[btnInx].classList.add('active');

            button.classList.add('active');
            clearInterval(_this3.timerIndicator);

            _this3.model.timerSwitch(storiesGroup, _this3.indexGroup);

            _this3.buttonsLine.forEach(function (btn, btnInx) {
              if (btnInx < _this3.indexStory) {
                btn.style.width = '100%';
              } else {
                btn.style.width = '0';
              }
            });
          });

          _this3.listenerButtons.add(button);
        }
      });
    },
    arrowsSwitch: function arrowsSwitch(storiesGroup) {
      var _this4 = this;

      var storiesWidth = 0;
      var storiesHeight = 0;
      this.storiesList.children.forEach(function (story) {
        story.style.width = _this4.storyWidth + 'px';
        storiesWidth += _this4.storyWidth;
        storiesHeight += _this4.windowHeight;
      });
      this.storiesListWrap.style.width = this.storyWidth + 'px';

      if (this.isMobile) {
        this.storiesList.style.width = 'inherit';
        this.storiesList.style.height = storiesHeight + 'px';
      } else {
        this.storiesList.style.width = storiesWidth + 'px';
      }

      if (!this.listenerSwitchRight.has(this.indexGroup)) {
        this.arrowRight.addEventListener('click', this.model._switchRight.bind(this, storiesGroup));
        this.listenerSwitchRight.add(this.indexGroup);
      }

      if (!this.listenerSwitchLeft.has(this.indexGroup)) {
        this.arrowLeft.addEventListener('click', this.model._switchLeft.bind(this, storiesGroup));
        this.listenerSwitchLeft.add(this.indexGroup);
      }
    },
    timerSwitch: function timerSwitch(storiesGroup) {
      if (!this.timer) return;
      var storiesGroupsLength = this.storiesGroups.children.length;
      var storiesLength = this.storiesList.children.length;
      var lineWidth = 0;
      var self = this;
      this.timerIndicator = setInterval(function () {
        if (!self.isStoryMessageViewed) return;
        var storiesListEnd = self.indexStory == storiesLength - 1;
        var storiesGroupEnd = self.indexGroup == storiesGroupsLength - 1;
        if (lineWidth >= 100) clearInterval(self.timerIndicator);

        if (lineWidth < 100) {
          lineWidth += 1;
          self.buttonsLine[self.indexStory].style.width = lineWidth + '%';
        } // Переключение истории


        if (lineWidth == 100 && !storiesListEnd) {
          self.model._switchRight(storiesGroup);
        } // Переключение группы


        if (lineWidth == 100 && storiesListEnd && !storiesGroupEnd) {
          self.model._switchGroupRight();
        }
      }, self.timerSpeed);
    },
    switchDrag: function switchDrag(storiesGroup) {
      var _this5 = this;

      var startX;
      var differenceX;
      var positionMoveX;
      this.storiesList.children.forEach(function (story) {
        var move = function move(e) {
          story.style.cursor = 'grabbing';
          differenceX = e.clientX - startX;
          positionMoveX = _this5.storyPositionX - differenceX;
          _this5.storiesList.style.transform = "translateX(-".concat(positionMoveX, "px)");
        };

        if (!_this5.listenerDragsFunc.has(story)) {
          // Нажатие кнопки мыши на историю
          story.addEventListener('mousedown', function (e) {
            e.preventDefault();
            startX = e.clientX;
            story.addEventListener('mousemove', move);
          }); // Поднятие кнопки мыши на истории

          story.addEventListener('mouseup', function () {
            story.style.cursor = 'grab';
            _this5.storiesList.style.transform = "translateX(-".concat(_this5.storyPositionX, "px)");
            _this5.switchStoryEvent = false; // Движение вправо

            if (differenceX < -50) {
              _this5.model._switchRight(storiesGroup);

              _this5.switchStoryEvent = true;
            } // Движение влево


            if (differenceX > 50) {
              _this5.model._switchLeft(storiesGroup);

              _this5.switchStoryEvent = true;
            }

            differenceX = 0;
            story.removeEventListener('mousemove', move);
          }); // Наведение нажатой кнопки мыши на историю

          story.addEventListener('mouseenter', function () {
            story.style.cursor = 'grab';
          }); // Покидание мыши с истории

          story.addEventListener('mouseleave', function () {
            _this5.storiesList.style.transform = "translateX(-".concat(_this5.storyPositionX, "px)");
            story.removeEventListener('mousemove', move);
          });

          _this5.listenerDragsFunc.add(story);
        }
      });
    },
    switchSwipe: function switchSwipe(storiesGroup) {
      var _this6 = this;

      var touchStartY;
      var touchDifferenceY;

      if (!this.listenerSwipeFunc.has(storiesGroup)) {
        storiesGroup.addEventListener('touchstart', function (e) {
          touchStartY = e.touches[0].clientY;
        });
        storiesGroup.addEventListener('touchmove', function (e) {
          touchDifferenceY = Math.ceil(touchStartY - e.touches[0].clientY);
          var positionMoveY = _this6.storyPositionY + touchDifferenceY;
          _this6.storiesList.style.transform = "translateY(-".concat(positionMoveY, "px)");
        });
        storiesGroup.addEventListener('touchend', function (e) {
          _this6.storiesList.style.transform = "translateY(-".concat(_this6.storyPositionY, "px)");
          _this6.switchStoryEvent = false; // swipe up

          if (touchDifferenceY > 70) {
            _this6.model._switchRight(storiesGroup);

            _this6.switchStoryEvent = true;
          }

          if (touchDifferenceY < -70) {
            _this6.model._switchLeft(storiesGroup);

            _this6.switchStoryEvent = true;
          }

          touchDifferenceY = 0;
        });
        this.listenerSwipeFunc.add(storiesGroup);
      }
    },
    _switchHistory: function _switchHistory(storyPositionY, storyPositionX, storiesGroup) {
      this.model._removeClasses(this.storiesList.children, 'active');

      this.storiesList.children[this.indexStory].classList.add('active');

      if (this.currentVideo) {
        this.model._videoStop(this.storiesGroupBGVideo, this.currentVideo);
      }

      this.currentVideo = this.model._getTag(this.storiesList.children[this.indexStory].children[0], 'VIDEO');

      if (this.currentVideo) {
        this.playIcon = this.model._getElem(this.storiesList.children[this.indexStory], 'webasyst-stories__play-icon');
        this.soundIcon.style.display = '';

        this.model._controlVideo(this.currentVideo, this.storiesGroupBGVideo, this.soundIcon, this.playIcon);
      } else {
        this.soundIcon.style.display = 'none';
      }

      this.slideType = this.model._checkSlideType(this.storiesList.children[this.indexStory].children[0]);

      this.model._setBackground(this.storiesGroupBG, this.storiesGroupBGVideo, this.slideType);

      this.model._removeClasses(this.buttons.children, 'active');

      this.buttons.children[this.indexStory].classList.add('active');

      if (this.isMobile) {
        this.storiesList.style.transform = "translateY(-".concat(storyPositionY, "px)");
        this.model.switchSwipe(storiesGroup);
      } else {
        this.storiesList.style.transform = "translateX(-".concat(storyPositionX, "px)");
        this.model.switchDrag(storiesGroup);
      }

      this.model._checkSlideEnd();
    },
    _switchGroupRight: function _switchGroupRight() {
      var _this7 = this;

      this.indexGroup++;
      this.indexStory = 0;
      this.model.closeStoriesGroup();
      this.model.openStoriesGroup(this.storiesGroups.children[this.indexGroup], this.indexGroup);

      if (!this.isMobile) {
        this.storiesList.children[this.indexStory].classList.add('switch-right');
        setTimeout(function () {
          _this7.storiesList.children[_this7.indexStory].classList.remove('switch-right');
        }, 200);
      }
    },
    _switchGroupLeft: function _switchGroupLeft() {
      var _this8 = this;

      this.indexGroup--;
      this.model.closeStoriesGroup();
      this.model.openStoriesGroup(this.storiesGroups.children[this.indexGroup], this.indexGroup);
      this.indexStory = this.storiesList.children.length - 1;
      this.buttonsLine.forEach(function (btn, btnInx) {
        if (btnInx < _this8.indexStory) {
          btn.style.width = '100%';
        }
      });

      if (!this.isMobile) {
        this.storiesList.children[this.indexStory].classList.add('switch-left');
        setTimeout(function () {
          _this8.storiesList.children[_this8.indexStory].classList.remove('switch-left');
        }, 200);
      }
    },
    _switchRight: function _switchRight(storiesGroup) {
      var _this9 = this;

      clearInterval(this.timerIndicator);
      this.indexStory++;
      this.buttonsLine.forEach(function (btn, btnInx) {
        if (btnInx < _this9.indexStory) {
          btn.style.width = '100%';
        }
      });
      var storiesGroupsLength = this.storiesGroups.children.length;
      var storiesLength = this.storiesList.children.length;
      var storiesListEnd = this.indexStory == storiesLength;
      var storiesGroupEnd = this.indexGroup == storiesGroupsLength - 1; // Переключение истории вправо

      if (this.indexStory < storiesLength) {
        this.storyPositionX = this.storyWidth * this.indexStory;
        this.storyPositionY = this.windowHeight * this.indexStory;

        this.model._switchHistory(this.storyPositionY, this.storyPositionX, storiesGroup);
      } // Переключение группы вправо


      if (storiesListEnd && !storiesGroupEnd) {
        this.model._switchGroupRight();
      } else {
        this.model.timerSwitch(storiesGroup);
      }

      if (storiesGroupEnd && storiesListEnd) {
        this.indexStory = storiesLength - 1;
      }
    },
    _switchLeft: function _switchLeft(storiesGroup) {
      var _this10 = this;

      clearInterval(this.timerIndicator);
      this.indexStory--;
      this.buttonsLine.forEach(function (btn, btnInx) {
        if (btnInx > _this10.indexStory) {
          btn.style.width = '0';
        }
      }); // Переключение группы в лево

      if (this.indexStory == -1 && this.indexGroup > 0) {
        this.model._switchGroupLeft();
      } else {
        this.model.timerSwitch(storiesGroup);
      }

      if (this.indexStory == -1) {
        this.indexStory = 0;
      } // Переключение истории в лево


      if (this.indexStory >= 0) {
        this.storyPositionX = this.storyWidth * this.indexStory;
        this.storyPositionY = this.windowHeight * this.indexStory;

        this.model._switchHistory(this.storyPositionY, this.storyPositionX, storiesGroup);
      }
    },
    _removeClasses: function _removeClasses(elems, className) {
      elems.forEach(function (elem) {
        elem.classList.remove(className);
      });
    },
    _getElem: function _getElem(elem, className) {
      var result;

      function findELem(goal) {
        for (var index = 0; index < goal.children.length; index++) {
          var element = goal.children[index];
          var regExp = new RegExp(className + '$', 'gi');
          var elemClass = element.className;

          if (element.tagName && element.tagName === 'svg') {
            elemClass = element.className.animVal;
          }

          if (element.className && regExp.test(elemClass)) {
            result = element;
            return;
          } else {
            findELem(element);
          }
        }
      }

      findELem(elem);
      return result;
    },
    _getElems: function _getElems(elem, className) {
      var result = [];

      function findELem(goal) {
        for (var index = 0; index < goal.children.length; index++) {
          var element = goal.children[index];
          var regExp = new RegExp(className + '$', 'gi');

          if (element.className && regExp.test(element.className)) {
            result.push(element);
            return;
          } else {
            findELem(element);
          }
        }
      }

      findELem(elem);
      return result;
    },
    _getMedia: function _getMedia(container, tagsArr) {
      var result = [];

      function getSrcMedia(elems) {
        elems.forEach(function (elem) {
          if (elem.src) {
            tagsArr.forEach(function (tag) {
              var regExp = new RegExp('^' + tag + '$', 'gi');

              if (regExp.test(elem.tagName)) {
                result.push(elem.src);
                return;
              }
            });
          } else {
            getSrcMedia(elem.children);
          }
        });
      }

      getSrcMedia(container.children);
      return result;
    },
    _checkSlideType: function _checkSlideType(elem) {
      var el = elem;

      if (el.tagName === 'A') {
        el = el.children[0];
      }

      switch (el.tagName) {
        case 'IMG':
          return 'img';

        case 'VIDEO':
          this.currentVideo = elem;
          return 'video';
      }
    },
    _getTag: function _getTag(elem, tagName) {
      if (elem.tagName && elem.tagName === tagName) {
        return elem;
      }
    },
    _videoStop: function _videoStop(storiesGroupBGVideo, video) {
      video.pause();
      video.currentTime = 0;
      storiesGroupBGVideo.pause();
      storiesGroupBGVideo.currentTime = 0;
      storiesGroupBGVideo.style.display = 'none';
    },
    _setBackground: function _setBackground(storiesGroupBG, storiesGroupBGVideo, elem) {
      if (this.isMobile) return;

      switch (elem) {
        case 'img':
          storiesGroupBG.style.backgroundImage = "url(".concat(this.media[this.indexStory], ")");
          break;

        case 'video':
          var videoSource = storiesGroupBGVideo.children[0];
          videoSource.src = this.media[this.indexStory];
          storiesGroupBGVideo.load();
          var storiesBGvideoPromise = storiesGroupBGVideo.play();

          if (storiesBGvideoPromise !== undefined) {
            storiesBGvideoPromise.then(function (_) {
              // Automatic playback started!
              // Show playing UI.
              storiesGroupBGVideo.style.display = '';
            })["catch"](function (error) {// Auto-play was prevented
              // Show paused UI.
            });
          }

          this.currentVideo.play();
          break;
      }
    },
    _controlVideo: function _controlVideo(video, videoBG, soundIcon, playIcon) {
      var _this11 = this;

      var videoPlay = function videoPlay(video) {
        if (_this11.switchStoryEvent) return;

        if (video.paused) {
          video.play();
          playIcon.style.display = 'none';
          video.style.opacity = '';

          _this11.model.timerSwitch(_this11.storiesGroup);
        } else {
          video.pause();
          playIcon.style.display = '';
          video.style.opacity = '0.5';
          clearInterval(_this11.timerIndicator);
        }
      };

      var videoBGPlay = function videoBGPlay(video) {
        if (_this11.switchStoryEvent) return;

        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      };

      var videoMuted = function videoMuted() {
        if (video.muted) {
          video.muted = false;
          soundIcon.children[0].classList.add('webasyst-stories__icon-sound');
          soundIcon.children[0].classList.remove('webasyst-stories__icon-sound-none');
        } else {
          video.muted = true;
          soundIcon.children[0].classList.remove('webasyst-stories__icon-sound');
          soundIcon.children[0].classList.add('webasyst-stories__icon-sound-none');
        }
      }; // Запуск видео


      var videoPlayPromise = video.play();
      playIcon.style.display = 'none';
      video.style.opacity = '';

      if (videoPlayPromise !== undefined) {
        videoPlayPromise.then(function (_) {
          // Automatic playback started!
          // Show playing UI.
          if (!_this11.listenerVideoPlay.has(video)) {
            video.addEventListener('click', videoPlay.bind(_this11, video));
            playIcon.addEventListener('click', videoPlay.bind(_this11, video));

            _this11.listenerVideoPlay.add(video);
          }
        })["catch"](function (error) {
          // Auto-play was prevented
          // Show paused UI.
          playIcon.style.display = 'none';
          video.style.opacity = '';
        });
      } // Запуск видео фона


      var videoBGplayPromise = videoBG.play();

      if (videoBGplayPromise !== undefined) {
        videoBGplayPromise.then(function (_) {
          // Automatic playback started!
          // Show playing UI.
          if (!_this11.listenerVideoBGPlay.has(video)) {
            video.addEventListener('click', videoBGPlay.bind(_this11, videoBG));
            playIcon.addEventListener('click', videoBGPlay.bind(_this11, videoBG));

            _this11.listenerVideoBGPlay.add(video);
          }
        })["catch"](function (error) {// Auto-play was prevented
          // Show paused UI.
        });
      } // sound icon


      video.muted = false;
      soundIcon.children[0].classList.add('webasyst-stories__icon-sound');
      soundIcon.children[0].classList.remove('webasyst-stories__icon-sound-none');

      if (!this.listenerSoundIconVideoMuted.has(soundIcon)) {
        soundIcon.addEventListener('click', videoMuted);
        this.listenerSoundIconVideoMuted.add(soundIcon);
      }
    },
    _checkSlideEnd: function _checkSlideEnd() {
      if (this.indexStory === 0 && this.indexGroup === 0) {
        this.arrowLeft.style.opacity = '0.3';
      } else {
        this.arrowLeft.style.opacity = '';
      }

      if (this.indexStory === this.storiesList.children.length - 1 && this.indexGroup === this.storiesGroups.children.length - 1) {
        this.arrowRight.style.opacity = '0.3';
      } else {
        this.arrowRight.style.opacity = '';
      }
    }
  }, this.controller = {
    storiesControl: function storiesControl() {
      var _this12 = this;

      var switchDrag = function switchDrag(previews) {
        var startX;
        var differenceX;
        var positionMoveX;
        var currentPositionX = 0;

        var move = function move(e) {
          previews.style.cursor = 'grabbing';
          differenceX = e.clientX - startX;
          positionMoveX = currentPositionX + differenceX;
          _this12.previews.style.transform = "translateX(".concat(positionMoveX, "px)");
        };

        previews.addEventListener('mousedown', function (e) {
          e.preventDefault();
          _this12.previewsMoveEvent = false;
          startX = e.clientX;
          previews.addEventListener('mousemove', move);
        }); // Поднятие кнопки мыши на истории

        previews.addEventListener('mouseup', function () {
          previews.style.cursor = 'grab';
          currentPositionX = positionMoveX;

          if (differenceX < -10) {
            _this12.previewsMoveEvent = true;
          }

          if (differenceX > 10) {
            _this12.previewsMoveEvent = true;
          }

          if (positionMoveX > 0) {
            _this12.previews.style.transform = "translateX(0px)";
            currentPositionX = 0;
          }

          differenceX = 0;
          previews.removeEventListener('mousemove', move);
        }); // Наведение нажатой кнопки мыши на историю

        previews.addEventListener('mouseenter', function () {
          previews.style.cursor = 'grab';
        }); // Покидание мыши с истории

        previews.addEventListener('mouseleave', function () {
          previews.removeEventListener('mousemove', move);
        });
      };

      var switchSwipe = function switchSwipe(previews) {
        var touchStartX = 0;
        var touchDifferenceX = 0;
        var currentPositionX = 0;
        var positionMoveX;
        previews.addEventListener('touchstart', function (e) {
          touchStartX = e.touches[0].clientX;
          this.previewsMoveEvent = false;
        });
        previews.addEventListener('touchmove', function (e) {
          touchDifferenceX = Math.ceil(touchStartX - e.touches[0].clientX);
          positionMoveX = currentPositionX - touchDifferenceX;
          _this12.previews.style.transform = "translateX(".concat(positionMoveX, "px)");
        });
        previews.addEventListener('touchend', function (e) {
          currentPositionX = positionMoveX;

          if (touchDifferenceX > 10) {
            _this12.previewsMoveEvent = true;
          }

          if (touchDifferenceX < -10) {
            _this12.previewsMoveEvent = true;
          }

          if (positionMoveX > 0) {
            _this12.previews.style.transform = "translateX(0px)";
            currentPositionX = 0;
          }

          touchDifferenceX = 0;
        });
      };

      switchDrag(this.previews);
      switchSwipe(this.previews);
      var previewsArr = this.previews.children;
      var storiesArr = this.storiesGroups.children;
      this.previewsWidth = 0;

      for (var index = 0; index < previewsArr.length; index++) {
        this.model.addClickPreview(previewsArr[index], storiesArr[index], index);
        this.previewsWidth += previewsArr[index].offsetWidth;
      }

      if (this.isMobile) this.storiesSection.classList.add('mobile');
      this.previews.style.width = this.previewsWidth + 'px';
    }
  }, this.app = {
    init: function init() {
      this.app.bindContext(this, this.view);
      this.app.bindContext(this, this.model);
      this.app.bindContext(this, this.controller);
      this.app.main.call(this);
    },
    main: function main() {
      this.controller.storiesControl();
    },
    bindContext: function bindContext(self, object) {
      for (var key in object) {
        if (typeof object[key] == 'function') {
          object[key] = object[key].bind(self);
        }
      }
    }
  };
  this.app.init.call(this);
};

var webasystStoriesSettings = {
  storiesSelector: '[data-stories-section="1"]',
  previewsSelector: '[data-stories-previews="1"]',
  storySelector: '[data-stories-groups="1"]',
  timer: 1,
  timerSpeed: '10',
  isMobile: 0
};
new WebasystStories(webasystStoriesSettings);
var webasystStoriesSettings2 = {
  storiesSelector: '[data-stories-section="2"]',
  previewsSelector: '[data-stories-previews="2"]',
  storySelector: '[data-stories-groups="2"]',
  timer: 1,
  timerSpeed: '10',
  isMobile: 1
};
new WebasystStories(webasystStoriesSettings2);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(11);
var forEach = __webpack_require__(86);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(102);
var wellKnownSymbol = __webpack_require__(2);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(9);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(1);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(1);
var has = __webpack_require__(5);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);
var create = __webpack_require__(36);
var definePropertyModule = __webpack_require__(7);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(89).IteratorPrototype;
var create = __webpack_require__(36);
var createPropertyDescriptor = __webpack_require__(30);
var setToStringTag = __webpack_require__(45);
var Iterators = __webpack_require__(20);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(11);
var bind = __webpack_require__(109);

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(27);
var isObject = __webpack_require__(4);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(91);
var collectionStrong = __webpack_require__(112);

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(7).f;
var create = __webpack_require__(36);
var redefineAll = __webpack_require__(59);
var bind = __webpack_require__(35);
var anInstance = __webpack_require__(51);
var iterate = __webpack_require__(50);
var defineIterator = __webpack_require__(69);
var setSpecies = __webpack_require__(48);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(79).fastKey;
var InternalStateModule = __webpack_require__(14);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(84).charAt;
var InternalStateModule = __webpack_require__(14);
var defineIterator = __webpack_require__(69);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(91);
var collectionWeak = __webpack_require__(115);

// `WeakSet` constructor
// https://tc39.github.io/ecma262/#sec-weakset-constructor
collection('WeakSet', function (init) {
  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionWeak);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(59);
var getWeakData = __webpack_require__(79).getWeakData;
var anObject = __webpack_require__(3);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(51);
var iterate = __webpack_require__(50);
var ArrayIterationModule = __webpack_require__(87);
var $has = __webpack_require__(5);
var InternalStateModule = __webpack_require__(14);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(92);
var forEach = __webpack_require__(86);
var createNonEnumerableProperty = __webpack_require__(10);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(92);
var ArrayIteratorMethods = __webpack_require__(88);
var createNonEnumerableProperty = __webpack_require__(10);
var wellKnownSymbol = __webpack_require__(2);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ })
/******/ ]);