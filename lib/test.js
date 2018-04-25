'use strict';

var _ = require('.');

test('test', function () {
  expect.assertions(1);
  return (0, _.github_userInfo)('tangweikun').then(function (data) {
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