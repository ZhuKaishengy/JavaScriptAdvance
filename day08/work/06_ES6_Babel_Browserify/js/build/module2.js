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