'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.github_userInfo = undefined;

var github_userInfo = exports.github_userInfo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, json;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch2.default)('https://api.github.com/users/tangweikun');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            return _context.abrupt('return', json);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function github_userInfo() {
    return _ref.apply(this, arguments);
  };
}();

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _github = require('./github');

Object.keys(_github).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _github[key];
    }
  });
});
'use strict';

var _ = require('.');

test('test', function () {
  expect.assertions(1);
  return (0, _.github_userInfo)().then(function (data) {
    expect(true).toBe(true);
    console.log(data);
  });
});

it('test', function (done) {
  (0, _.github_userInfo)().then(function (res) {
    console.log(res);
    done();
  });
});
