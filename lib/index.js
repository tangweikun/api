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

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

global.fetch = _nodeFetch2.default;