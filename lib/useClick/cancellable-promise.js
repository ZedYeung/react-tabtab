"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cancellablePromise = exports.cancellablePromise = function cancellablePromise(promise) {
  var isCanceled = false;

  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (value) {
      return isCanceled ? reject({ isCanceled: isCanceled, value: value }) : resolve(value);
    }, function (error) {
      return reject({ isCanceled: isCanceled, error: error });
    });
  });

  return {
    promise: wrappedPromise,
    cancel: function cancel() {
      return isCanceled = true;
    }
  };
};