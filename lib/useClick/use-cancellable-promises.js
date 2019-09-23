"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var useCancellablePromises = function useCancellablePromises() {
  var pendingPromises = (0, _react.useRef)([]);

  var appendPendingPromise = function appendPendingPromise(promise) {
    return pendingPromises.current = [].concat(_toConsumableArray(pendingPromises.current), [promise]);
  };

  var removePendingPromise = function removePendingPromise(promise) {
    return pendingPromises.current = pendingPromises.current.filter(function (p) {
      return p !== promise;
    });
  };

  var clearPendingPromises = function clearPendingPromises() {
    return pendingPromises.current.map(function (p) {
      return p.cancel();
    });
  };

  var api = {
    appendPendingPromise: appendPendingPromise,
    removePendingPromise: removePendingPromise,
    clearPendingPromises: clearPendingPromises
  };

  return api;
};

exports.default = useCancellablePromises;
module.exports = exports["default"];