"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var noop = exports.noop = function noop() {};

var delay = exports.delay = function delay(n) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, n);
  });
};