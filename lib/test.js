'use strict';

var _apiCollection = require('api-collection');

test('test', function () {
  expect.assertions(1);
  return (0, _apiCollection.github_userInfo)().then(function (data) {
    expect(true).toBe(true);
    console.log(data);
  });
});

it('test', function (done) {
  (0, _apiCollection.github_userInfo)().then(function (res) {
    console.log(res);
    done();
  });
});