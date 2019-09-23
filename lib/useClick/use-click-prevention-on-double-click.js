"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var useClickPreventionOnDoubleClick = function useClickPreventionOnDoubleClick(onClick, onDoubleClick) {
  var api = useCancellablePromises();

  var handleClick = function handleClick() {
    api.clearPendingPromises();
    var waitForClick = cancellablePromise(delay(300));
    api.appendPendingPromise(waitForClick);

    return waitForClick.promise.then(function () {
      api.removePendingPromise(waitForClick);
      onClick();
    }).catch(function (errorInfo) {
      api.removePendingPromise(waitForClick);
      if (!errorInfo.isCanceled) {
        throw errorInfo.error;
      }
    });
  };

  var handleDoubleClick = function handleDoubleClick() {
    api.clearPendingPromises();
    onDoubleClick();
  };

  return [handleClick, handleDoubleClick];
};

exports.default = useClickPreventionOnDoubleClick;
module.exports = exports["default"];