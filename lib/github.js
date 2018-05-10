'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var github = exports.github = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(apiName) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('' + baseUrl + strategies(props)[apiName]);

          case 2:
            return _context.abrupt('return', _context.sent.json());

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function github(_x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var baseUrl = 'https://api.github.com/';

var strategies = function strategies(props) {
  return {
    user: 'users/' + props.username,
    user_authorization: 'user?access_token=' + process.env.GITHUB_ACCESS_TOKEN,

    followers: 'users/' + props.username + '/followers' + (props.page ? '?page=' + props.page : ''),
    followers_authorization: 'user/followers?access_token=' + process.env.GITHUB_ACCESS_TOKEN + (props.page ? '&page=' + props.page : ''),

    starred: 'users/' + props.username + '/starred' + (props.page ? '?page=' + props.page : ''),
    starred_authorization: 'user/starred?access_token=' + process.env.GITHUB_ACCESS_TOKEN + (props.page ? '&page=' + props.page : '')
  };
};