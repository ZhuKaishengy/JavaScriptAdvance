(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module2');

var _module2 = require('./module3');

var _module3 = _interopRequireDefault(_module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {foo,bar,desc} from './module1'
(0, _module.foo)();
(0, _module.bar)();
console.log(_module.arr);
console.log(_module.obj);
console.log(_module3.default);
},{"./module2":2,"./module3":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//统一暴露
function foo() {
    console.log('foo()...');
}
function bar() {
    console.log('foo()...');
}
var arr = [1, 2, 3];
var obj = {
    username: 'sjx',
    age: 12
};
exports.foo = foo;
exports.bar = bar;
exports.arr = arr;
exports.obj = obj;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'rl',
    getName: function getName() {
        return name;
    }
};
},{}]},{},[1]);
