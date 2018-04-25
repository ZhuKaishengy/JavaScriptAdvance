'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;
exports.bar = bar;
//分别暴露
var username = 'zks';
var age = 12;
function foo() {
    console.log(username);
}
function bar() {
    console.log(age);
}
var desc = exports.desc = 'haha';