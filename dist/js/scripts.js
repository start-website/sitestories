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
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 3 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(76)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var shared = __webpack_require__(28);
var hasOwn = __webpack_require__(6);
var uid = __webpack_require__(44);
var NATIVE_SYMBOL = __webpack_require__(55);
var USE_SYMBOL_AS_UID = __webpack_require__(54);

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

var uncurryThis = __webpack_require__(0);
var toObject = __webpack_require__(31);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(51);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(52);
var anObject = __webpack_require__(7);
var toPropertyKey = __webpack_require__(41);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(2);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(21);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(13);
var makeBuiltIn = __webpack_require__(57);
var defineGlobalProperty = __webpack_require__(30);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(50);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(32);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(79);
var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(0);
var isObject = __webpack_require__(9);
var createNonEnumerableProperty = __webpack_require__(13);
var hasOwn = __webpack_require__(6);
var shared = __webpack_require__(29);
var sharedKey = __webpack_require__(46);
var hiddenKeys = __webpack_require__(26);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getOwnPropertyDescriptor = __webpack_require__(35).f;
var createNonEnumerableProperty = __webpack_require__(13);
var defineBuiltIn = __webpack_require__(11);
var defineGlobalProperty = __webpack_require__(30);
var copyConstructorProperties = __webpack_require__(91);
var isForced = __webpack_require__(24);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isCallable = __webpack_require__(2);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(67);
var requireObjectCoercible = __webpack_require__(18);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(58);
var enumBugKeys = __webpack_require__(34);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__(82);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var isCallable = __webpack_require__(2);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(42);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);
var isCallable = __webpack_require__(2);
var isPrototypeOf = __webpack_require__(19);
var USE_SYMBOL_AS_UID = __webpack_require__(54);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(43);
var store = __webpack_require__(29);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var defineGlobalProperty = __webpack_require__(30);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(18);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var hasOwn = __webpack_require__(6);

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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var call = __webpack_require__(10);
var propertyIsEnumerableModule = __webpack_require__(83);
var createPropertyDescriptor = __webpack_require__(32);
var toIndexedObject = __webpack_require__(20);
var toPropertyKey = __webpack_require__(41);
var hasOwn = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(51);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(7);
var definePropertiesModule = __webpack_require__(87);
var enumBugKeys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(26);
var html = __webpack_require__(89);
var documentCreateElement = __webpack_require__(40);
var sharedKey = __webpack_require__(46);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var exec = __webpack_require__(38);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(10);
var uncurryThis = __webpack_require__(0);
var toString = __webpack_require__(12);
var regexpFlags = __webpack_require__(61);
var stickyHelpers = __webpack_require__(39);
var shared = __webpack_require__(28);
var create = __webpack_require__(36);
var getInternalState = __webpack_require__(15).get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(62);
var UNSUPPORTED_NCG = __webpack_require__(63);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var global = __webpack_require__(3);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isObject = __webpack_require__(9);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(53);
var isSymbol = __webpack_require__(27);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(2);
var tryToString = __webpack_require__(56);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var isCallable = __webpack_require__(2);
var store = __webpack_require__(29);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28);
var uid = __webpack_require__(44);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(2);
var isObject = __webpack_require__(9);
var setPrototypeOf = __webpack_require__(66);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(49);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(23);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(59);
var isCallable = __webpack_require__(2);
var classofRaw = __webpack_require__(14);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(40);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var fails = __webpack_require__(1);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(10);
var isObject = __webpack_require__(9);
var isSymbol = __webpack_require__(27);
var getMethod = __webpack_require__(25);
var ordinaryToPrimitive = __webpack_require__(78);
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(55);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(77);
var fails = __webpack_require__(1);

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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var isCallable = __webpack_require__(2);
var hasOwn = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(4);
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(33).CONFIGURABLE;
var inspectSource = __webpack_require__(45);
var InternalStateModule = __webpack_require__(15);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var hasOwn = __webpack_require__(6);
var toIndexedObject = __webpack_require__(20);
var indexOf = __webpack_require__(81).indexOf;
var hiddenKeys = __webpack_require__(26);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(7);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var global = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var global = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(10);
var hasOwn = __webpack_require__(6);
var isPrototypeOf = __webpack_require__(19);
var regExpFlags = __webpack_require__(61);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(0);
var anObject = __webpack_require__(7);
var aPossiblePrototype = __webpack_require__(80);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var fails = __webpack_require__(1);
var classof = __webpack_require__(14);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(23);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(17);
var definePropertyModule = __webpack_require__(8);
var wellKnownSymbol = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(4);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var toIntegerOrInfinity = __webpack_require__(23);
var toString = __webpack_require__(12);
var requireObjectCoercible = __webpack_require__(18);

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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(37);
var uncurryThis = __webpack_require__(0);
var defineBuiltIn = __webpack_require__(11);
var regexpExec = __webpack_require__(38);
var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(5);
var createNonEnumerableProperty = __webpack_require__(13);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(70).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(10);
var anObject = __webpack_require__(7);
var isCallable = __webpack_require__(2);
var classof = __webpack_require__(14);
var regexpExec = __webpack_require__(38);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4);
var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(0);
var isForced = __webpack_require__(24);
var defineBuiltIn = __webpack_require__(11);
var hasOwn = __webpack_require__(6);
var inheritIfRequired = __webpack_require__(47);
var isPrototypeOf = __webpack_require__(19);
var isSymbol = __webpack_require__(27);
var toPrimitive = __webpack_require__(53);
var fails = __webpack_require__(1);
var getOwnPropertyNames = __webpack_require__(22).f;
var getOwnPropertyDescriptor = __webpack_require__(35).f;
var defineProperty = __webpack_require__(8).f;
var thisNumberValue = __webpack_require__(84);
var trim = __webpack_require__(85).trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  defineBuiltIn(global, NUMBER, NumberWrapper, { constructor: true });
}


/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var userAgent = __webpack_require__(65);

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(10);
var isCallable = __webpack_require__(2);
var isObject = __webpack_require__(9);

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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isCallable = __webpack_require__(2);
var inspectSource = __webpack_require__(45);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(2);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(68);
var lengthOfArrayLike = __webpack_require__(48);

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
/* 82 */
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
/* 83 */
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var requireObjectCoercible = __webpack_require__(18);
var toString = __webpack_require__(12);
var whitespaces = __webpack_require__(86);

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(52);
var definePropertyModule = __webpack_require__(8);
var anObject = __webpack_require__(7);
var toIndexedObject = __webpack_require__(20);
var objectKeys = __webpack_require__(88);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(58);
var enumBugKeys = __webpack_require__(34);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var call = __webpack_require__(10);
var IS_PURE = __webpack_require__(43);
var FunctionName = __webpack_require__(33);
var isCallable = __webpack_require__(2);
var createIteratorConstructor = __webpack_require__(122);
var getPrototypeOf = __webpack_require__(110);
var setPrototypeOf = __webpack_require__(66);
var setToStringTag = __webpack_require__(94);
var createNonEnumerableProperty = __webpack_require__(13);
var defineBuiltIn = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(5);
var Iterators = __webpack_require__(60);
var IteratorsCore = __webpack_require__(109);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
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
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(6);
var ownKeys = __webpack_require__(92);
var getOwnPropertyDescriptorModule = __webpack_require__(35);
var definePropertyModule = __webpack_require__(8);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);
var uncurryThis = __webpack_require__(0);
var getOwnPropertyNamesModule = __webpack_require__(22);
var getOwnPropertySymbolsModule = __webpack_require__(93);
var anObject = __webpack_require__(7);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(8).f;
var hasOwn = __webpack_require__(6);
var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var uncurryThis = __webpack_require__(0);
var hiddenKeys = __webpack_require__(26);
var isObject = __webpack_require__(9);
var hasOwn = __webpack_require__(6);
var defineProperty = __webpack_require__(8).f;
var getOwnPropertyNamesModule = __webpack_require__(22);
var getOwnPropertyNamesExternalModule = __webpack_require__(128);
var isExtensible = __webpack_require__(131);
var uid = __webpack_require__(44);
var FREEZING = __webpack_require__(133);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
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
  if (!hasOwn(it, METADATA)) {
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
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(97);
var call = __webpack_require__(10);
var anObject = __webpack_require__(7);
var tryToString = __webpack_require__(56);
var isArrayIteratorMethod = __webpack_require__(134);
var lengthOfArrayLike = __webpack_require__(48);
var isPrototypeOf = __webpack_require__(19);
var getIterator = __webpack_require__(135);
var getIteratorMethod = __webpack_require__(112);
var iteratorClose = __webpack_require__(136);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var aCallable = __webpack_require__(42);
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(19);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(37);
var $ = __webpack_require__(16);
var call = __webpack_require__(10);
var uncurryThis = __webpack_require__(0);
var isCallable = __webpack_require__(2);
var isObject = __webpack_require__(9);

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var $TypeError = TypeError;
var un$Test = uncurryThis(/./.test);

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    var exec = this.exec;
    if (!isCallable(exec)) return un$Test(this, str);
    var result = call(exec, this, str);
    if (result !== null && !isObject(result)) {
      throw new $TypeError('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(0);
var isForced = __webpack_require__(24);
var inheritIfRequired = __webpack_require__(47);
var createNonEnumerableProperty = __webpack_require__(13);
var getOwnPropertyNames = __webpack_require__(22).f;
var isPrototypeOf = __webpack_require__(19);
var isRegExp = __webpack_require__(101);
var toString = __webpack_require__(12);
var getRegExpFlags = __webpack_require__(64);
var stickyHelpers = __webpack_require__(39);
var proxyAccessor = __webpack_require__(102);
var defineBuiltIn = __webpack_require__(11);
var fails = __webpack_require__(1);
var hasOwn = __webpack_require__(6);
var enforceInternalState = __webpack_require__(15).enforce;
var setSpecies = __webpack_require__(69);
var wellKnownSymbol = __webpack_require__(5);
var UNSUPPORTED_DOT_ALL = __webpack_require__(62);
var UNSUPPORTED_NCG = __webpack_require__(63);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var classof = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(5);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(8).f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var MISSED_STICKY = __webpack_require__(39).MISSED_STICKY;
var classof = __webpack_require__(14);
var defineBuiltInAccessor = __webpack_require__(104);
var getInternalState = __webpack_require__(15).get;

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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var makeBuiltIn = __webpack_require__(57);
var defineProperty = __webpack_require__(8);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(33).PROPER;
var defineBuiltIn = __webpack_require__(11);
var anObject = __webpack_require__(7);
var $toString = __webpack_require__(12);
var fails = __webpack_require__(1);
var getRegExpFlags = __webpack_require__(64);

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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(71);
var call = __webpack_require__(10);
var uncurryThis = __webpack_require__(0);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(72);
var fails = __webpack_require__(1);
var anObject = __webpack_require__(7);
var isCallable = __webpack_require__(2);
var toIntegerOrInfinity = __webpack_require__(23);
var toLength = __webpack_require__(49);
var toString = __webpack_require__(12);
var requireObjectCoercible = __webpack_require__(18);
var advanceStringIndex = __webpack_require__(73);
var getMethod = __webpack_require__(25);
var getSubstitution = __webpack_require__(107);
var regExpExec = __webpack_require__(74);
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var toObject = __webpack_require__(31);

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(20);
var addToUnscopables = __webpack_require__(121);
var Iterators = __webpack_require__(60);
var InternalStateModule = __webpack_require__(15);
var defineProperty = __webpack_require__(8).f;
var defineIterator = __webpack_require__(90);
var IS_PURE = __webpack_require__(43);
var DESCRIPTORS = __webpack_require__(4);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
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
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(1);
var isCallable = __webpack_require__(2);
var create = __webpack_require__(36);
var getPrototypeOf = __webpack_require__(110);
var defineBuiltIn = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(5);
var IS_PURE = __webpack_require__(43);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(6);
var isCallable = __webpack_require__(2);
var toObject = __webpack_require__(31);
var sharedKey = __webpack_require__(46);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(123);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(0);
var isForced = __webpack_require__(24);
var defineBuiltIn = __webpack_require__(11);
var InternalMetadataModule = __webpack_require__(95);
var iterate = __webpack_require__(96);
var anInstance = __webpack_require__(98);
var isCallable = __webpack_require__(2);
var isObject = __webpack_require__(9);
var fails = __webpack_require__(1);
var checkCorrectnessOfIteration = __webpack_require__(137);
var setToStringTag = __webpack_require__(94);
var inheritIfRequired = __webpack_require__(47);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
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
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
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
  $({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(50);
var getMethod = __webpack_require__(25);
var Iterators = __webpack_require__(60);
var wellKnownSymbol = __webpack_require__(5);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__(11);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),
/* 114 */
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(40);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(97);
var uncurryThis = __webpack_require__(0);
var IndexedObject = __webpack_require__(67);
var toObject = __webpack_require__(31);
var lengthOfArrayLike = __webpack_require__(48);
var arraySpeciesCreate = __webpack_require__(144);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
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
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(116).forEach;
var arrayMethodIsStrict = __webpack_require__(149);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);

module.exports = uncurryThis([].slice);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var apply = __webpack_require__(71);
var isCallable = __webpack_require__(2);
var userAgent = __webpack_require__(65);
var arraySlice = __webpack_require__(118);
var validateArgumentsLength = __webpack_require__(155);

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
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(126);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(140);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(141);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(148);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(150);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(151);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(153);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);



















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebasystStories = /*#__PURE__*/_createClass(function WebasystStories(props) {
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
  this.storyHeight = 0;
  this.storyPositionX = 0;
  this.storyPositionY = 0;
  this.media = '';
  this.allVideo = '';
  this.soundIcon = '';
  this.playIcon = '';
  this.storiesListWrap = '';
  this.storiesList = '';
  this.storiesGroupBG = '';
  this.swicthHistoryType = props.swicthHistoryType;
  this.buttons = '';
  this.buttonsLine = '';
  this.slideType = '';
  this.currentVideo = '';
  this.dragSwipeActive = false;
  this.timerIndicator = '';
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
  this.listenerSwitchClick = new Set();
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
      this.allVideo = this.model._getElems(storiesGroup, 'VIDEO', 'tag');
      this.buttonsLine = this.model._getElems(this.buttons, 'webasyst-stories__button-line', 'class');
      this.soundIcon = this.model._getElem(storiesGroup, 'webasyst-stories__sound');
      this.arrowRight = this.model._getElem(storiesGroup, 'webasyst-stories__arrow-right');
      this.arrowLeft = this.model._getElem(storiesGroup, 'webasyst-stories__arrow-left');
      this.storiesList.children[0].classList.add('active');

      this.model._addElemSrc(this.storiesList.children[0]);

      if (this.storiesList.children[1]) {
        this.model._addElemSrc(this.storiesList.children[1]);
      }

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

      if (this.isMobile) {
        this.storiesListWrap.style.width = window.innerWidth + 'px';
        this.storiesListWrap.style.height = window.innerHeight + 'px';
      } else {
        this.storiesListWrap.style.width = Math.ceil(window.innerHeight * 0.7 / 1.8) + 'px';
        this.storiesListWrap.style.height = window.innerHeight * 0.7 + 'px';
      }

      this.storyHeight = this.storiesListWrap.offsetHeight;
      this.storyWidth = this.storiesListWrap.offsetWidth;
      this.storyPositionX = this.storyWidth * this.indexStory;
      this.storyPositionY = this.storyHeight * this.indexStory;
      this.buttonsLine.forEach(function (btn) {
        btn.style.width = '0';
      });

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

      this.model.switchClick(this.storiesListWrap, storiesGroup);
      window.addEventListener('resize', function () {
        if (_this.isMobile) {
          _this.storiesListWrap.style.width = window.innerWidth + 'px';
          _this.storiesListWrap.style.height = window.innerHeight + 'px';
        } else {
          _this.storiesListWrap.style.width = Math.ceil(window.innerHeight * 0.7 / 1.8) + 'px';
          _this.storiesListWrap.style.height = window.innerHeight * 0.7 + 'px';
        }

        _this.storyHeight = _this.storiesListWrap.offsetHeight;
        _this.storyWidth = _this.storiesListWrap.offsetWidth;
        _this.storyPositionX = _this.storyWidth * _this.indexStory;
        _this.storyPositionY = _this.storyHeight * _this.indexStory;

        if (_this.isMobile) {
          if (_this.swicthHistoryType === 'vertically') {
            _this.storiesList.style.transform = "translateY(-".concat(_this.storyPositionY, "px)");
          } else {
            _this.storiesList.style.transform = "translateX(-".concat(_this.storyPositionY, "px)");
          }

          _this.model.switchSwipe(storiesGroup);
        } else {
          _this.storiesList.style.transform = "translateX(-".concat(_this.storyPositionX, "px)");

          _this.model.switchDrag(storiesGroup);
        }

        _this.model.arrowsSwitch(storiesGroup);

        _this.model.buttonsSwitch(storiesGroup);
      });
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

      preview.addEventListener('click', function (e) {
        _this2.model.openStoriesGroup(storiesGroup, indexGroup);
      });
    },
    buttonsSwitch: function buttonsSwitch(storiesGroup) {
      var _this3 = this;

      var storiesLength = this.storiesList.children.length;
      var buttonWidth = this.storyWidth / storiesLength - 15;
      this.buttons.style.width = this.storyWidth + 'px';

      var _loop = function _loop(btnInx) {
        var button = _this3.buttons.children[btnInx];
        button.style.width = buttonWidth + 'px';

        if (!_this3.listenerButtons.has(button)) {
          button.addEventListener('click', function () {
            _this3.indexStory = btnInx;
            _this3.storyPositionX = _this3.storyWidth * _this3.indexStory;
            _this3.storyPositionY = _this3.storyHeight * _this3.indexStory;

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
      };

      for (var btnInx = 0; btnInx < this.buttons.children.length; btnInx++) {
        _loop(btnInx);
      }
    },
    arrowsSwitch: function arrowsSwitch(storiesGroup) {
      var storiesWidth = 0;
      var storiesHeight = 0;

      for (var i = 0; i < this.storiesList.children.length; i++) {
        var story = this.storiesList.children[i];
        story.style.width = this.storyWidth + 'px';
        story.style.height = this.storyHeight + 'px';
        storiesWidth += this.storyWidth;
        storiesHeight += this.storyHeight;
      }

      if (this.isMobile && this.swicthHistoryType === 'vertically') {
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
      var _this4 = this;

      var startX;
      var differenceX;
      var positionMoveX;

      var _loop2 = function _loop2(i) {
        var story = _this4.storiesList.children[i];

        var move = function move(e) {
          story.style.cursor = 'grabbing';
          differenceX = e.clientX - startX;
          positionMoveX = _this4.storyPositionX - differenceX;
          _this4.storiesList.style.transform = "translateX(-".concat(positionMoveX, "px)");
        };

        if (!_this4.listenerDragsFunc.has(story)) {
          // Нажатие кнопки мыши на историю
          story.addEventListener('mousedown', function (e) {
            e.preventDefault();
            startX = e.clientX;
            story.addEventListener('mousemove', move);
          }); // Поднятие кнопки мыши на истории

          story.addEventListener('mouseup', function () {
            story.style.cursor = 'grab';
            _this4.storiesList.style.transform = "translateX(-".concat(_this4.storyPositionX, "px)");
            _this4.switchStoryEvent = false; // Движение вправо

            if (differenceX < -50) {
              _this4.model._switchRight(storiesGroup);

              _this4.switchStoryEvent = true;
              _this4.dragSwipeActive = true;
            } // Движение влево


            if (differenceX > 50) {
              _this4.model._switchLeft(storiesGroup);

              _this4.switchStoryEvent = true;
              _this4.dragSwipeActive = true;
            }

            differenceX = 0;
            story.removeEventListener('mousemove', move);
          }); // Наведение нажатой кнопки мыши на историю

          story.addEventListener('mouseenter', function () {
            story.style.cursor = 'grab';
          }); // Покидание мыши с истории

          story.addEventListener('mouseleave', function () {
            _this4.storiesList.style.transform = "translateX(-".concat(_this4.storyPositionX, "px)");
            story.removeEventListener('mousemove', move);
            _this4.dragSwipeActive = false;
          });

          _this4.listenerDragsFunc.add(story);
        }
      };

      for (var i = 0; i < this.storiesList.children.length; i++) {
        _loop2(i);
      }
    },
    switchSwipe: function switchSwipe(storiesGroup) {
      var _this5 = this;

      var touchStartY;
      var touchDifferenceY;
      var touchStartX;
      var touchDifferenceX;

      if (!this.listenerSwipeFunc.has(storiesGroup)) {
        storiesGroup.addEventListener('touchstart', function (e) {
          touchStartY = e.touches[0].clientY;
          touchStartX = e.touches[0].clientX;
        });
        storiesGroup.addEventListener('touchmove', function (e) {
          if (_this5.swicthHistoryType === 'vertically') {
            touchDifferenceY = Math.ceil(touchStartY - e.touches[0].clientY);
            var positionMoveY = _this5.storyPositionY + touchDifferenceY;
            _this5.storiesList.style.transform = "translateY(-".concat(positionMoveY, "px)");
          } else {
            touchDifferenceX = Math.ceil(touchStartX - e.touches[0].clientX);
            var positionMoveX = _this5.storyPositionX + touchDifferenceX;
            _this5.storiesList.style.transform = "translateX(-".concat(positionMoveX, "px)");
          }
        });
        storiesGroup.addEventListener('touchend', function (e) {
          if (_this5.swicthHistoryType === 'vertically') {
            _this5.storiesList.style.transform = "translateY(-".concat(_this5.storyPositionY, "px)");
          } else {
            _this5.storiesList.style.transform = "translateX(-".concat(_this5.storyPositionX, "px)");
          }

          _this5.switchStoryEvent = false;
          _this5.dragSwipeActive = false;

          if (_this5.swicthHistoryType === 'vertically') {
            if (touchDifferenceY > 50) {
              _this5.model._switchRight(storiesGroup);

              _this5.switchStoryEvent = true;
              _this5.dragSwipeActive = true;
            }

            if (touchDifferenceY < -50) {
              _this5.model._switchLeft(storiesGroup);

              _this5.switchStoryEvent = true;
              _this5.dragSwipeActive = true;
            }
          } else {
            // Движение вправо
            if (touchDifferenceX > 50) {
              _this5.model._switchRight(storiesGroup);

              _this5.switchStoryEvent = true;
              _this5.dragSwipeActive = true;
            } // Движение влево


            if (touchDifferenceX < -50) {
              _this5.model._switchLeft(storiesGroup);

              _this5.switchStoryEvent = true;
              _this5.dragSwipeActive = true;
            }
          }

          touchDifferenceY = 0;
          touchDifferenceX = 0;
        });
        this.listenerSwipeFunc.add(storiesGroup);
      }
    },
    switchClick: function switchClick(storiesListWrap, storiesGroup) {
      var _this6 = this;

      if (!this.listenerSwitchClick.has(storiesListWrap)) {
        var halfWidth = window.innerWidth / 2;
        var halfheight = window.innerHeight / 2;
        storiesListWrap.addEventListener('click', function (e) {
          if (_this6.dragSwipeActive) return;

          if (_this6.isMobile && _this6.swicthHistoryType === 'vertically') {
            if (e.clientY - 30 > halfheight) {
              _this6.model._switchRight(storiesGroup);
            }

            if (e.clientY + 30 < halfheight) {
              _this6.model._switchLeft(storiesGroup);
            }
          } else {
            if (e.clientX - 30 > halfWidth) {
              _this6.model._switchRight(storiesGroup);
            }

            if (e.clientX + 30 < halfWidth) {
              _this6.model._switchLeft(storiesGroup);
            }
          }
        });
      }

      this.listenerSwitchClick.add(storiesListWrap);
    },
    _switchHistory: function _switchHistory(storyPositionY, storyPositionX, storiesGroup) {
      this.model._removeClasses(this.storiesList.children, 'active');

      this.storiesList.children[this.indexStory].classList.add('active');

      this.model._addElemSrc(this.storiesList.children[this.indexStory]);

      if (this.storiesList.children[this.indexStory + 1]) {
        this.model._addElemSrc(this.storiesList.children[this.indexStory + 1]);
      }

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
        if (this.swicthHistoryType === 'vertically') {
          this.storiesList.style.transform = "translateY(-".concat(storyPositionY, "px)");
        } else {
          this.storiesList.style.transform = "translateX(-".concat(storyPositionX, "px)");
        }

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
        this.storyPositionY = this.storyHeight * this.indexStory;

        this.model._switchHistory(this.storyPositionY, this.storyPositionX, storiesGroup);
      } // Переключение группы вправо


      if (storiesListEnd && !storiesGroupEnd) {
        this.model._switchGroupRight();
      } else {
        this.model.timerSwitch(storiesGroup);
      }

      if (storiesGroupEnd && storiesListEnd) {
        //this.indexStory = storiesLength - 1
        this.model.closeStoriesGroup();
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
        this.storyPositionY = this.storyHeight * this.indexStory;

        this.model._switchHistory(this.storyPositionY, this.storyPositionX, storiesGroup);
      }
    },
    _removeClasses: function _removeClasses(elems, className) {
      for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        elem.classList.remove(className);
      }
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
    _getElems: function _getElems(elem, className, attr) {
      var result = [];

      function findELem(goal) {
        for (var index = 0; index < goal.children.length; index++) {
          var element = goal.children[index];
          var regExp = new RegExp(className + '$', 'gi');

          switch (attr) {
            case 'class':
              if (element.className && regExp.test(element.className)) {
                result.push(element);
              } else {
                findELem(element);
              }

              break;

            case 'tag':
              if (element.tagName && regExp.test(element.tagName)) {
                result.push(element);
              } else {
                findELem(element);
              }

              break;
          }
        }
      }

      findELem(elem);
      return result;
    },
    _getMedia: function _getMedia(container, tagsArr) {
      var result = [];

      function getSrcMedia(elems) {
        var _loop3 = function _loop3(i) {
          var elem = elems[i];

          if (elem.hasAttribute('data-sitestories-src')) {
            tagsArr.forEach(function (tag) {
              var regExp = new RegExp('^' + tag + '$', 'gi');

              if (regExp.test(elem.tagName)) {
                result.push(elem.getAttribute('data-sitestories-src'));
                return;
              }
            });
          } else {
            getSrcMedia(elem.children);
          }
        };

        for (var i = 0; i < elems.length; i++) {
          _loop3(i);
        }
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

          break;
      }
    },
    _controlVideo: function _controlVideo(video, videoBG, soundIcon, playIcon) {
      var _this11 = this;

      video.load();

      var videoPlay = function videoPlay(video) {
        if (_this11.switchStoryEvent) return;

        if (video.paused) {
          video.play();
          playIcon.style.display = 'none';
          video.style.opacity = '';
          clearInterval(_this11.timerIndicator);

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
    },
    _addElemSrc: function _addElemSrc(container) {
      function findELem(elem) {
        for (var index = 0; index < elem.children.length; index++) {
          var element = elem.children[index];

          if (element.hasAttribute('data-sitestories-src')) {
            element.setAttribute('src', element.getAttribute('data-sitestories-src'));
          } else if (element.hasAttribute('data-sitestories-poster')) {
            element.setAttribute('poster', element.getAttribute('data-sitestories-poster'));
            findELem(element);
          } else {
            findELem(element);
          }
        }
      }

      findELem(container);
    }
  }, this.controller = {
    storiesControl: function storiesControl() {
      var _this12 = this;

      var switchDrag = function switchDrag(previews) {
        var startX = 0;
        var differenceX = 0;
        var positionMoveX = 0;
        var currentPositionX = 0;
        var previewsWidthViewPortOut = _this12.storiesSection.offsetWidth - _this12.previewsWidth;

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

          if (currentPositionX > 0) {
            _this12.previews.style.transform = "translateX(0px)";
            currentPositionX = 0;
          }

          if (currentPositionX < previewsWidthViewPortOut) {
            _this12.previews.style.transform = "translateX(".concat(previewsWidthViewPortOut, "px)");
            currentPositionX = previewsWidthViewPortOut;
          }

          differenceX = 0;
          previews.removeEventListener('mousemove', move);
        }, {
          passive: true
        }); // Наведение нажатой кнопки мыши на историю

        previews.addEventListener('mouseenter', function () {
          previews.style.cursor = 'grab';
        }); // Покидание мыши с истории

        previews.addEventListener('mouseleave', function () {
          previews.removeEventListener('mousemove', move);
        }, {
          passive: true
        });
      };

      var switchSwipe = function switchSwipe(previews) {
        var touchStartX = 0;
        var touchDifferenceX = 0;
        var currentPositionX = 0;
        var positionMoveX = 0;
        var previewsWidthViewPortOut = _this12.storiesSection.offsetWidth - _this12.previewsWidth;
        previews.addEventListener('touchstart', function (e) {
          touchStartX = e.touches[0].clientX;
          this.previewsMoveEvent = false;
        }, {
          passive: true
        });
        previews.addEventListener('touchmove', function (e) {
          touchDifferenceX = Math.ceil(touchStartX - e.touches[0].clientX);
          positionMoveX = currentPositionX - touchDifferenceX;
          _this12.previews.style.transform = "translateX(".concat(positionMoveX, "px)");
        }, {
          passive: true
        });
        previews.addEventListener('touchend', function (e) {
          currentPositionX = positionMoveX;

          if (touchDifferenceX > 10) {
            _this12.previewsMoveEvent = true;
          }

          if (touchDifferenceX < -10) {
            _this12.previewsMoveEvent = true;
          }

          if (currentPositionX > 0) {
            _this12.previews.style.transform = "translateX(0px)";
            currentPositionX = 0;
          }

          if (currentPositionX < previewsWidthViewPortOut) {
            _this12.previews.style.transform = "translateX(".concat(previewsWidthViewPortOut, "px)");
            currentPositionX = previewsWidthViewPortOut;
          }

          touchDifferenceX = 0;
        }, {
          passive: true
        });
      };

      var previewsArr = this.previews.children;
      var storiesArr = this.storiesGroups.children;

      for (var index = 0; index < previewsArr.length; index++) {
        var preview = previewsArr[index];
        var storyStyle = getComputedStyle(preview);
        var storyMarginR = Number(storyStyle.marginRight.replace(/[^0-9]*$/, ''));
        this.model.addClickPreview(preview, storiesArr[index], index);
        this.previewsWidth += preview.offsetWidth + storyMarginR;
      }

      if (this.isMobile) this.storiesSection.classList.add('mobile');
      this.storiesSection.setAttribute('data-switch', this.swicthHistoryType);
      this.previews.style.width = this.previewsWidth + 'px';
      this.storiesSection.style.maxWidth = this.previewsWidth + 'px';
      switchDrag(this.previews);
      switchSwipe(this.previews);
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
});

window.addEventListener('load', function () {
  var webasystStoriesSettings = {
    storiesSelector: '[data-stories-section="1"]',
    previewsSelector: '[data-stories-previews="1"]',
    storySelector: '[data-stories-groups="1"]',
    timer: 0,
    timerSpeed: '10',
    isMobile: 0,
    swicthHistoryType: 'horizontally' // horizontally, vertically

  };
  new WebasystStories(webasystStoriesSettings);
  var webasystStoriesSettings2 = {
    storiesSelector: '[data-stories-section="2"]',
    previewsSelector: '[data-stories-previews="2"]',
    storySelector: '[data-stories-groups="2"]',
    timer: 1,
    timerSpeed: '10',
    isMobile: 1,
    swicthHistoryType: 'horizontally' // horizontally, vertically

  };
  new WebasystStories(webasystStoriesSettings2);
});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);
var create = __webpack_require__(36);
var defineProperty = __webpack_require__(8).f;

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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(109).IteratorPrototype;
var create = __webpack_require__(36);
var createPropertyDescriptor = __webpack_require__(32);
var setToStringTag = __webpack_require__(94);
var Iterators = __webpack_require__(60);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(59);
var defineBuiltIn = __webpack_require__(11);
var toString = __webpack_require__(125);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(59);
var classof = __webpack_require__(50);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(127);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(111);
var collectionStrong = __webpack_require__(138);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(14);
var toIndexedObject = __webpack_require__(20);
var $getOwnPropertyNames = __webpack_require__(22).f;
var arraySlice = __webpack_require__(129);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var toAbsoluteIndex = __webpack_require__(68);
var lengthOfArrayLike = __webpack_require__(48);
var createProperty = __webpack_require__(130);

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(41);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(32);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var isObject = __webpack_require__(9);
var classof = __webpack_require__(14);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(132);

// eslint-disable-next-line es-x/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(1);

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);
var Iterators = __webpack_require__(60);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(10);
var aCallable = __webpack_require__(42);
var anObject = __webpack_require__(7);
var tryToString = __webpack_require__(56);
var getIteratorMethod = __webpack_require__(112);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(10);
var anObject = __webpack_require__(7);
var getMethod = __webpack_require__(25);

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
/* 137 */
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(8).f;
var create = __webpack_require__(36);
var defineBuiltIns = __webpack_require__(113);
var bind = __webpack_require__(97);
var anInstance = __webpack_require__(98);
var iterate = __webpack_require__(96);
var defineIterator = __webpack_require__(90);
var setSpecies = __webpack_require__(69);
var DESCRIPTORS = __webpack_require__(4);
var fastKey = __webpack_require__(95).fastKey;
var InternalStateModule = __webpack_require__(15);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

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

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
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
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
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
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
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

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(70).charAt;
var toString = __webpack_require__(12);
var InternalStateModule = __webpack_require__(15);
var defineIterator = __webpack_require__(90);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(114);
var DOMTokenListPrototype = __webpack_require__(115);
var ArrayIteratorMethods = __webpack_require__(108);
var createNonEnumerableProperty = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(5);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
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
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(142);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(111);
var collectionWeak = __webpack_require__(143);

// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
collection('WeakSet', function (init) {
  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionWeak);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(0);
var defineBuiltIns = __webpack_require__(113);
var getWeakData = __webpack_require__(95).getWeakData;
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(9);
var anInstance = __webpack_require__(98);
var iterate = __webpack_require__(96);
var ArrayIterationModule = __webpack_require__(116);
var hasOwn = __webpack_require__(6);
var InternalStateModule = __webpack_require__(15);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
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
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(145);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(146);
var isConstructor = __webpack_require__(147);
var isObject = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(5);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(14);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var fails = __webpack_require__(1);
var isCallable = __webpack_require__(2);
var classof = __webpack_require__(50);
var getBuiltIn = __webpack_require__(17);
var inspectSource = __webpack_require__(45);

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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var forEach = __webpack_require__(117);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(1);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(114);
var DOMTokenListPrototype = __webpack_require__(115);
var forEach = __webpack_require__(117);
var createNonEnumerableProperty = __webpack_require__(13);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(16);
var bind = __webpack_require__(152);

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(0);
var aCallable = __webpack_require__(42);
var isObject = __webpack_require__(9);
var hasOwn = __webpack_require__(6);
var arraySlice = __webpack_require__(118);
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(154);
__webpack_require__(156);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var global = __webpack_require__(3);
var setInterval = __webpack_require__(119).setInterval;

// ie9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),
/* 155 */
/***/ (function(module, exports) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var global = __webpack_require__(3);
var setTimeout = __webpack_require__(119).setTimeout;

// ie9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var DESCRIPTORS = __webpack_require__(4);
var defineProperty = __webpack_require__(8).f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ })
/******/ ]);