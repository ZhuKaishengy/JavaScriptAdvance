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