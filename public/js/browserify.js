(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  var InvalidInputError = require('./input-error.js'),
    transformationFunctions = require('./transforms'),
    transformationKeys = require('./keys'),
    regex =  /^(\d*)d(\d+|\%)(([\+\-\/\*bw])(\d+))?(([\+\-\/\*])(\d+|(\d*)d(\d+|\%)(([\+\-\/\*bw])(\d+))?))*$/,
    roll,
    cleaner,
    sumResult = false,
    filler = [];

  roll = function (random) {
    this.random = random || Math.random.bind(Math);
  };

  roll.prototype.validate = function (s) {
    return regex.test(s);
  };

  roll.prototype.parse = function (s) {
    if (!this.validate(s)) {
      throw new InvalidInputError(s);
    }

    var match = regex.exec(s),
      quantity = match[1], // 2d20+3 => 2
      sides = match[2], // 2d20+3 => 20
      hasTransformation = !!match[3], // 2d20+3 => true
      operator,
      transformationParameter,
      transforms = [],
      opIndex = 0,
      segments = s.split(/[\+\-]/),
      outsideRoll,
      seg;

    if (segments[0].indexOf('b') > -1) {
      transforms.push(transformationKeys[match[4]](parseInt(match[5], 10)));
    }

    for (seg = 1; seg < segments.length; seg += 1) {
      opIndex += segments[seg - 1].length;
      operator = s[opIndex]; // 2d20+3 => "+"
      opIndex += 1;
      transformationParameter = segments[seg]; // 2d20+3 => 3
      if (transformationParameter.indexOf('d') > -1) { // perform a roll
        outsideRoll = this.roll(transformationParameter, true);
        transforms.push(transformationKeys[operator](outsideRoll.result));
      } else {
        transforms.push(transformationKeys[operator](parseInt(transformationParameter, 10)));
      }
    }

    return {
      quantity: quantity ? parseInt(quantity, 10) : 1,
      sides: sides === '%' ? 100 : parseInt(sides, 10),
      transformations: hasTransformation || transforms.length > 0 ? transforms.length > 0 ? transforms : transformationKeys[match[4]](parseInt(match[5], 10)) : ['sum'],
      toString: function () {
        return s;
      }
    };
  };

  roll.prototype.roll = function (input, invokedByParse) {
    if (!input) {
      throw new InvalidInputError();
    } else if (typeof input === 'string') {
      input = this.parse(input);
    }

    var rolled = [],
     calculations = [],
     carryFiller = [];

    while (rolled.length < input.quantity) {
      rolled.push(Math.floor((this.random() * input.sides) + 1));
    }

    filler.push(rolled);

    calculations = input.transformations.reduce(function (previous, transformation) {
      var transformationFunction,
        transformationAdditionalParameter,
        sumParam = false;
      if (typeof transformation === 'function') { // lets you pass something custom in
        transformationFunction = transformation;
      } else if (typeof transformation === 'string') { // "sum"
        transformationFunction = transformationFunctions[transformation];
      } else if (transformation instanceof Array) { // ["add", 3]
        if (transformation[0] instanceof Array) {
          sumResult = true;
          cleaner = transformation[1];
          transformation = transformation[0];
        } else if (transformation[1] instanceof Array) {
          sumParam = true;
          cleaner = transformation[0];
          transformation = transformation[1];
        }
        transformationFunction = transformationFunctions[transformation[0]]; // fn for "add"
        transformationAdditionalParameter = transformation[1];
      }
      if (sumParam === true && previous[0]  instanceof Array) {
        previous[0] = transformationFunctions[cleaner](previous[0]);
      }
      previous.unshift(transformationFunction(previous[0], transformationAdditionalParameter));
      return previous;
    }, [rolled]);

    if (sumResult === true && calculations[0] instanceof Array) {
      calculations[1] = calculations[0];
      calculations[0] = transformationFunctions[cleaner](calculations[0]);
    }

    if (!invokedByParse) {
      if (filler.length > 1) {
        filler.unshift(filler.pop());
      }
      carryFiller = filler.length === 1 ? filler[0] : filler;
      filler = [];
    }

    return {
      input: input,
      calculations: calculations,
      rolled: carryFiller,
      result: calculations[0]
    };
  };

  module.exports = roll;
  module.exports.InvalidInputError = InvalidInputError;

}());

},{"./input-error.js":4,"./keys":5,"./transforms":9}],4:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  var util = require('util');

  function InvalidInputError(input) {
    this.name = 'InvalidInputError';
    if (input) {
      this.message = util.format('"%s" is not a valid input string for node-roll.', input);
    } else {
      this.message = 'No input string was supplied to node-roll.';
    }
    this.input = input;
  }

  InvalidInputError.prototype = new Error();
  InvalidInputError.prototype.constructor = InvalidInputError;

  module.exports = InvalidInputError;

}());


},{"util":15}],5:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = {
    '+': function (value) {
      return [
        'sum',
        ['add', value]
      ];
    },
    '-': function (value) {
      return [
        'sum',
        ['subtract', value]
      ];
    },
    '*': function (value) {
      return [
        'sum',
        ['multiply', value]
      ];
    },
    '/': function (value) {
      return [
        'sum',
        ['divide', value]
      ];
    },
    'b': function (value) {
      return [
        ['best-of', value],
        'sum'
      ];
    },
    'w': function (value) {
      return [
        ['worst-of', value],
        'sum'
      ];
    }
  };

}());


},{}],6:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = function (number, value) {
    return number + value;
  };

}());


},{}],7:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = function (rolledDice, value) {
    var result = [],
      sorted = rolledDice.sort(function (a, b) {
        return b - a;
      }),
      i;
    for (i = 0; i < sorted.length && i < (value / 1); i = i + 1) {
      result.push(sorted[i]);
    }
    return result;
  };

}());


},{}],8:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = function (number, value) {
    return number / value;
  };

}());


},{}],9:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
module.exports = {
  add: require('./add'),
  'best-of': require('./best-of'),
  divide: require('./divide'),
  multiply: require('./multiply'),
  subtract: require('./subtract'),
  sum: require('./sum'),
  'worst-of': require('./worst-of')
};


},{"./add":6,"./best-of":7,"./divide":8,"./multiply":10,"./subtract":11,"./sum":12,"./worst-of":13}],10:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = function (number, value) {
    return number * value;
  };

}());


},{}],11:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = function (number, value) {
    return number - value;
  };

}());


},{}],12:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = function (rolledDice) {
    return rolledDice.reduce(function (sum, value) {
      return sum + value;
    }, 0);
  };

}());


},{}],13:[function(require,module,exports){
/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = function (rolledDice, value) {
    var result = [],
      sorted = rolledDice.sort(function (a, b) {
        return a - b;
      }),
      i;
    for (i = 0; i < sorted.length && i < (value / 1); i = i + 1) {
      result.push(sorted[i]);
    }
    return result;
  };

}());


},{}],14:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],15:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":14,"_process":2,"inherits":1}],16:[function(require,module,exports){
// we used browserify so we could use node packages on the front end
var Roll = require('roll'),
  roll = new Roll();

var planes = [
  {
    'UID': 1,
    'name': 'Su-35 Flanker-E',
    'img': '/img/su-35.jpg',
    'health': 100,
    'attackValueMax': 10,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 10),
    'defenseValueMax': .35,
    'defenseValueMin': .5,
    'defense': Math.random() * .35,
    'criticalValue': .35,
    'critical': Math.random() * .35
  },
  {
    'UID': 2,
    'name': 'F-117 Nighthawk',
    'img': '/img/stealth-fighter.jpg',
    'health': 100,
    'attackValueMax': 5,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 5),
    'defenseValueMax': .8,
    'defenseValueMin': .5,
    'defense': Math.random() * .80,
    'criticalValue': .15,
    'critical': Math.random() * .15
  },
  {
    'UID': 3,
    'name': 'F-15 Eagle',
    'img': '/img/f-15.jpg',
    'health': 100,
    'attackValueMax': 12,
    'attackValueMin': 8,
    'attack': Math.ceil(Math.random() * 12),
    'defenseValueMax': .3,
    'defenseValueMin': .1,
    'defense': Math.random() * .30,
    'criticalValue': .4,
    'critical': Math.random() * .40
  },
  {
    'UID': 4,
    'name': 'F-22 Raptor',
    'img': '/img/f-22.jpg',
    'health': 100,
    'attackValueMax': 15,
    'attackValueMin': 10,
    'attack': Math.ceil(Math.random() * 15),
    'defenseValueMax': .9,
    'defenseValueMin': .6,
    'defense': Math.random() * .90,
    'criticalValue': .15,
    'critical': Math.random() * .15
  },
  {
    'UID': 5,
    'name': 'Su-57 PAK FA',
    'img': '/img/su-57.jpg',
    'health': 100,
    'attackValueMax': 13,
    'attackValueMin': 10,
    'attack': Math.ceil(Math.random() * 13),
    'defenseValueMax': .85,
    'defenseValueMin': .6,
    'defense': Math.random() * .85,
    'criticalValue': .25,
    'critical': Math.random() * .25
  },
  {
    'UID': 6,
    'name': 'Mig-35 Fulcrum',
    'img': '/img/mig35.jpg',
    'health': 100,
    'attackValueMax': 10,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 10),
    'defenseValueMax': .45,
    'defenseValueMin': .2,
    'defense': Math.random() * .45,
    'criticalValue': .35,
    'critical': Math.random() * .35
  },
  {
    'UID': 7,
    'name': 'Su-27 Flanker',
    'img': '/img/su27.jpg',
    'health': 100,
    'attackValueMax': 8,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 8),
    'defenseValueMax': .3,
    'defenseValueMin': .1,
    'defense': Math.random() * .30,
    'criticalValue': .1,
    'critical': Math.random() * .10
  },
  {
    'UID': 8,
    'name': 'S-400 Triumph',
    'img': '/img/s400.jpg',
    'health': 30,
    'attackValueMax': 50,
    'attackValueMin': 40,
    'attack': Math.ceil(Math.random() * 50 + 40),
    'defenseValueMax': .15,
    'defenseValueMin': .1,
    'defense': Math.random() * .15,
    'criticalValue': .8,
    'critical': Math.random() * .80
  },
  {
    'UID': 9,
    'name': 'MIM-104 Patriot',
    'img': '/img/Patriot.jpg',
    'health': 35,
    'attackValueMax': 60,
    'attackValueMin': 40,
    'attack': Math.ceil(Math.random() * 60 + 40),
    'defenseValueMax': .5,
    'defenseValueMin': .1,
    'defense': Math.random() * .5,
    'criticalValue': .85,
    'critical': Math.random() * .85
  },
  {
    'UID': 10,
    'name': 'GF13-017NJII God Gundam',
    'img': '/img/godGundum.jpg',
    'health': 500,
    'attackValueMax': 85,
    'attackValueMin': 65,
    'attack': Math.ceil(Math.random() * 85),
    'defenseValueMax': .75,
    'defenseValueMin': .4,
    'defense': Math.random() * .85 + .5,
    'criticalValue': .35,
    'critical': Math.random() * .35
  },
  {
    'UID': 11,
    'name': 'JDG-00X Devil Gundam',
    'img': '/img/DevilGundam_profile.png',
    'health': 666,
    'attackValueMax': 205,
    'attackValueMin': 75,
    'attack': Math.ceil(Math.random() * 205),
    'defenseValueMax': .55,
    'defenseValueMin': .35,
    'defense': Math.random() * .55 + .35,
    'criticalValue': .5,
    'critical': Math.random() * .5
  },
  {
    'UID': 12,
    'name': 'SR-71 Blackbird',
    'img': '/img/sr71.jpg',
    'health': 200,
    'attackValueMax': 5,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 5),
    'defenseValueMax': .9,
    'defenseValueMin': .6,
    'defense': Math.random() * .90,
    'criticalValue': .15,
    'critical': Math.random() * .15
  },
  {
    'UID': 13,
    'name': 'Death Star',
    'img': '/img/deathstar.jpg',
    'health': 10000,
    'attackValueMax': 125,
    'attackValueMin': 75,
    'attack': Math.ceil(Math.random() * 125 + 75),
    'defenseValueMax': .0,
    'defenseValueMin': .0,
    'defense': Math.random() * .0,
    'criticalValue': .1,
    'critical': Math.random() * .10
  }
]
//Psuedo Code
// grab data from squadrons table using ajax
// loop through data and render a list in our html using jQuery
// grab the selection from the list .val()
// match plane IDs to IDS in plane array, create new array for fight engine
// render plane data and image in fight screen
// fight
// reset after match is over
var team1Choice;
var team2Choice;
var team1b = [];
var team2b = [];
var team1 = [];
var team2 = [];

function getPlanes1() {
  team1b = [];
  team1 = [];
  fetch("/api/planes")
    .then(function (response) {
      response.json().then(function (data2) {
        for (var i = 0; i < data2.length; i++) {
          if (team1Choice === data2[i].Name) {
            team1b.push(data2[i].pID);
          }
        }
        for (let i = 0; i < team1b.length; i++) {
          for (let g = 0; g < planes.length; g++) {
            if (team1b[i] === planes[g].UID) {
              team1.push(JSON.parse(JSON.stringify(planes[g])));
            }
          }
        }
        render();
      });
    })
}

function getPlanes2() {
  team2b = [];
  team2 = [];
  fetch("/api/planes")
    .then(function (data2) {
      data2.json().then(function (data2) {
        for (var i = 0; i < data2.length; i++) {
          if (team2Choice === data2[i].Name) {
            team2b.push(data2[i].pID);
          }
        }
        for (let i = 0; i < team2b.length; i++) {
          for (let g = 0; g < planes.length; g++) {
            if (team2b[i] === planes[g].UID) {
              team2.push(JSON.parse(JSON.stringify(planes[g])));
            }
          }
        }
        render();
      });
    })
}

function databaseConvertor() {
  $.get("/api/squadron", function (data) {
    for (let i = 0; i < data.length; i++) {
      $("#squadronSelector1").append("<option>" + data[i].Name + " </option>");
      $("#squadronSelector2").append("<option>" + data[i].Name + " </option>");
    }
  });
  $("#squadronSelector1").change(function () {
    team1Choice = $("#squadronSelector1").val();
    getPlanes1();
  });
  $("#squadronSelector2").change(function () {
    team2Choice = $("#squadronSelector2").val();
    getPlanes2();
  });
}
databaseConvertor();

function hpBars1(i) {
  if (team1[i].health <= 10000 && team1[i].health > 60) {
    $(".team1unitHP" + i).css("background-color", "green").css("width", "100%");
  }
  if (team1[i].health <= 60 && team1[i].health > 30) {
    $(".team1unitHP" + i).css("background-color", "yellow").css("width", "60%");
  }
  if (team1[i].health <= 30 && team1[i].health > 0) {
    $(".team1unitHP" + i).css("background-color", "red").css("width", "30%");
  }
}

function hpBars2(i) {
  if (team2[i].health <= 10000 && team2[i].health > 60) {
    $(".team2unitHP" + i).css("background-color", "green").css("width", "100%");
  }
  if (team2[i].health <= 60 && team2[i].health > 30) {
    $(".team2unitHP" + i).css("background-color", "yellow").css("width", "60%");
  }
  if (team2[i].health <= 30 && team2[i].health > 0) {
    $(".team2unitHP" + i).css("background-color", "red").css("width", "30%");
  }
}

function render() {
  //remove negative numbers and replace them with 0
  for (let i = 0; i < team1.length; i++) {
    if (team1[i].health < 0) {
      team1[i].health = 0;
    } else {
        for (let g = 0; g < planes.length; g++) {
          if (team1[i].UID === planes[g].UID) {
            team1[i].attack = Math.ceil(Math.random() * (planes[g].attackValueMax - planes[g].attackValueMin) + planes[g].attackValueMin);
            team1[i].defense = Math.random() * (planes[g].defenseValueMax - planes[g].defenseValueMin) + planes[g].defenseValueMin;
            team1[i].critical = Math.random() * planes[g].criticalValue;
          }
        }
    }
  }

  //remove negative numbers and replace them with 0
  for (let i = 0; i < team2.length; i++) {
    if (team2[i].health < 0) {
      team2[i].health = 0;
    } else {
      for (let g = 0; g < planes.length; g++) {
        if (team2[i].UID === planes[g].UID) {
          team2[i].attack = Math.ceil(Math.random() * (planes[g].attackValueMax - planes[g].attackValueMin) + planes[g].attackValueMin);
          team2[i].defense = Math.random() * (planes[g].defenseValueMax - planes[g].defenseValueMin) + planes[g].defenseValueMin;
          team2[i].critical = Math.random() * planes[g].criticalValue;
        }
      }
    }
  }
  //display team 1 health and stats
  var team1Attack = 0;
  var team1Crit = 0;
  var team1CritAvg = 0;
  var team1Dodge = 0;
  var team1DodgeAvg = 0;
  var team1Health = 0;
  var team1Length = 0;
  for (let i = 0; i < team1.length; i++) {
    if (team1[i].health <= 0) {
      $(".team1Stats" + i).html("<p class='kia'>" + team1[i].name + " was KIA!</p>");
    } else {
      $(".team1Stats" + i).html("<div class='teamStats'><p class='team1unitName'>"
        + team1[i].name + "</p><p class='team1unitHP" + i + "'>"
        + team1[i].health + "</p><p class='team1unit'>(Attack: "
        + team1[i].attack + ")(Block: "
        + (team1[i].defense * 100).toFixed(0) + "%)(Crit Hit: "
        + (team1[i].critical * 100).toFixed(0) + "%)</p></div");
      $(".t1picWrapper" + i).html("<img src='" + team1[i].img + "' width='60px' class='img'>");
    }
    if (team1[i].health > 0) {
      team1Attack = team1Attack + team1[i].attack;
      team1Crit = team1Crit + team1[i].critical;
      team1Dodge = team1Dodge + team1[i].defense;
      team1Health = team1Health + team1[i].health;
      team1Length++;
    }
    hpBars1(i);
  }
  team1CritAvg = team1Crit / team1Length;
  team1DodgeAvg = team1Dodge / team1Length;
  $(".tOneTotalAttack").html(team1Attack);
  $(".tOneTotalCrit").html((team1CritAvg * 100).toFixed(0) + "%");
  $(".tOneTotalDodge").html((team1DodgeAvg * 100).toFixed(0) + "%");
  $(".tOneTotalHealth").html(team1Health);

  //display team 2 health and stats
  var team2Attack = 0;
  var team2Crit = 0;
  var team2CritAvg = 0;
  var team2Dodge = 0;
  var team2DodgeAvg = 0;
  var team2Health = 0;
  var team2Length = 0;
  for (let i = 0; i < team2.length; i++) {
    if (team2[i].health <= 0) {
      $(".team2Stats" + i).html("<p class='kia'>" + team2[i].name + " was KIA!</p>");
    } else {
      $(".team2Stats" + i).html("<div class='teamStats'><p class='team2unitName'>"
        + team2[i].name + "</p><p class='team2unitHP" + i + "'>"
        + team2[i].health + "</p><p class='team2unit'>(Attack: "
        + team2[i].attack + ")(Block: "
        + (team2[i].defense * 100).toFixed(0) + "%)(Crit Hit: "
        + (team2[i].critical * 100).toFixed(0) + "%)</p></div");
      $(".t2picWrapper" + i).html("<img src='" + team2[i].img + "' width='60px' class='img'>");
    }
    if (team2[i].health > 0) {
      team2Attack = team2Attack + team2[i].attack;
      team2Crit = team2Crit + team2[i].critical;
      team2Dodge = team2Dodge + team2[i].defense;
      team2Health = team2Health + team2[i].health;
      team2Length++;
    }
    hpBars2(i);
  }
  team2CritAvg = team2Crit / team2Length;
  team2DodgeAvg = team2Dodge / team2Length;
  $(".tTwoTotalAttack").html(team2Attack);
  $(".tTwoTotalCrit").html((team2CritAvg * 100).toFixed(0) + "%");
  $(".tTwoTotalDodge").html((team2DodgeAvg * 100).toFixed(0) + "%");
  $(".tTwoTotalHealth").html(team2Health);
}

render();
//fight engine
$(".fight").click(function (event) {
  event.preventDefault();
  // loop through team 1's units
  for (let i = 0; i < team1.length; i++) {
    // generate rolls for both teams
    var t1DiceRoll = roll.roll('d20');
    var t2DiceRoll = roll.roll('d20');

    // checks to makes sure both units have health
    if (team1[i].health > 0 && team2[i].health > 0) {
      // checks to see if team1 attacks, defender does not attack
      if (t1DiceRoll.result > t2DiceRoll.result) {
        if (Math.random() < team2[i].defense) {
          // team 2 defends attack
          team2[i].health = team2[i].health - 1;
        } else {
          if (Math.random() < team2[i].critical) {
            // team 1 unit attacks team 2 unit with critical hit
            team2[i].health = team2[i].health - (team1[i].attack + 25);
          } else {
            // team 1 unit attacks team 2 unit
            team2[i].health = team2[i].health - team1[i].attack;
          }
        }
        render();
        // checks to see if team2 attacks, defender does not attack
      } else {
        if (Math.random() < team1[i].defense) {
          //team 1 defends attack
          team1[i].health = team1[i].health - 1;
        } else {
          if (Math.random() < team1[i].critical) {
            //team 2 unit attacks team 1 unit with critical attack
            team1[i].health = team1[i].health - (team2[i].attack + 25);
          } else {
            //team 2 unit attack team 1 unit
            team1[i].health = team1[i].health - team2[i].attack;
          }
        }
      }
      render();
      // check if team 1 unit has health and team 2 has no health
    } else if (team1[i].health > 0 && team2[i].health <= 0) {
      // find opponent that has health
      for (let b = 0; b < team2.length; b++) {
        if (team2[b].health > 0) {
          // if team 1 roll is greater than team 2, team 1 attacks team 2
          if (t1DiceRoll > t2DiceRoll) {
            if (Math.random() < team2[i].defense) {
              // team 2 defends attack
              team2[i].health = team2[i].health - 1;
            } else {
              if (Math.random() < team2[i].critical) {
                // team 1 unit attacks team 2 unit with critical hit
                team2[i].health = team2[i].health - (team1[i].attack + 25);
              } else {
                // team 1 unit attacks team 2 unit
                team2[i].health = team2[i].health - team1[i].attack;
              }
            }
            render();
          } else {
            if (Math.random() < team1[i].defense) {
              //team 1 defends attack
              team1[i].health = team1[i].health - 1;
            } else {
              if (Math.random() < team1[i].critical) {
                //team 2 unit attacks team 1 unit with critical attack
                team1[i].health = team1[i].health - (team2[i].attack + 25);
              } else {
                //team 2 unit attack team 1 unit
                team1[i].health = team1[i].health - team2[i].attack;
              }
            }
          }
          render();
        }
      }
      // check if team 2 unit has health and team 1 has no health 
    } else if (team1[i].health <= 0 && team2[i].health > 0) {
      // find opponent that has health
      for (let c = 0; c < team1.length; c++) {
        if (team1[c].health > 0) {
          // if team 1 roll is greater than team 2, team 1 attacks team 2
          if (t2DiceRoll > t1DiceRoll) {
            if (Math.random() < team1[i].defense) {
              //team 1 defends attack
              team1[i].health = team1[i].health - 1;
            } else {
              if (Math.random() < team1[i].critical) {
                //team 2 unit attacks team 1 unit with critical attack
                team1[i].health = team1[i].health - (team2[i].attack + 25);
              } else {
                //team 2 unit attack team 1 unit
                team1[i].health = team1[i].health - team2[i].attack;
              }
            }
            render();
            // display health of team 1 unit

          } else {
            if (Math.random() < team2[i].defense) {
              // team 2 defends attack
              team2[i].health = team2[i].health - 1;
            } else {
              if (Math.random() < team2[i].critical) {
                // team 1 unit attacks team 2 unit with critical hit
                team2[i].health = team2[i].health - (team1[i].attack + 25);
              } else {
                // team 1 unit attacks team 2 unit
                team2[i].health = team2[i].health - team1[i].attack;
              }
            }
            // display health of team 2 unit
          }
          render();
        }
      }
    }
  }
}); 

},{"roll":3}]},{},[16]);
