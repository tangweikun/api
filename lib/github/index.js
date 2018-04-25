'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userInfo = require('./userInfo');

Object.keys(_userInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userInfo[key];
    }
  });
});

var _followers = require('./followers');

Object.keys(_followers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _followers[key];
    }
  });
});