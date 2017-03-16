"use strict";

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch(error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function(value) {
                        step("next", value);
                    },
                    function(err) {
                        step("throw", err);
                    });
                }
            }
            return step("next");
        });
    };
}

var sleep = function sleep(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("sleep");
        },
        time);
    });
};
var start = function() {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                case 0:
                    console.log("start");
                    _context.next = 3;
                    return sleep(3000);

                case 3:
                    console.log("end");

                case 4:
                case "end":
                    return _context.stop();
                }
            }
        },
        _callee, this);
    }));

    return function start() {
        return _ref.apply(this, arguments);
    };
} ();
start();