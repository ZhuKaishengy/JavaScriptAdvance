'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _module5 = require('./module5');

var _module52 = _interopRequireDefault(_module5);

(function () {
    function foo(a, b) {
        console.log(a + b);
    }
    foo(1, 4);
})();(function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
            console.log(this.name);
        };
    }
    var p = new Person('zks', 12);
    p.getName();
})();(function () {
    var Student = (function () {
        function Student(name, age) {
            _classCallCheck(this, Student);

            this.name = name;
            this.age = age;
        }

        _createClass(Student, [{
            key: 'getName',
            value: function getName() {
                return this.name;
            }
        }]);

        return Student;
    })();

    var student = new Student('rl', 12);
    console.log(student.getName());
})();
_module52['default'].fun();
_module52['default'].bar();
_module52['default'].fun();var foo = function foo() {
    console.log('foo ...');
};
var bar = function bar() {
    console.log('bar ...');
};
var fun = function fun() {
    console.log('fun ...');
};

exports['default'] = { foo: foo, bar: bar, fun: fun };
module.exports = exports['default'];
