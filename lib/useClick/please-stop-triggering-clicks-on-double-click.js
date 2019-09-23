"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("./utils");

var _cancellablePromise = require("./cancellable-promise");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pleaseStopTriggeringClicksOnDoubleClick = function pleaseStopTriggeringClicksOnDoubleClick(WrappedComponent) {
  var ComponentWrapper = function (_Component) {
    _inherits(ComponentWrapper, _Component);

    function ComponentWrapper() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ComponentWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentWrapper.__proto__ || Object.getPrototypeOf(ComponentWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.pendingPromises = [], _this.appendPendingPromise = function (promise) {
        return _this.pendingPromises = [].concat(_toConsumableArray(_this.pendingPromises), [promise]);
      }, _this.removePendingPromise = function (promise) {
        return _this.pendingPromises = _this.pendingPromises.filter(function (p) {
          return p !== promise;
        });
      }, _this.clearPendingPromises = function () {
        return _this.pendingPromises.map(function (p) {
          return p.cancel();
        });
      }, _this.handleClick = function () {
        // create the cancelable promise and add it to
        // the pending promises queue
        var waitForClick = cancelablePromise((0, _utils.delay)(300));
        _this.appendPendingPromise(waitForClick);

        return waitForClick.promise.then(function () {
          // if the promise wasn't cancelled, we execute
          // the callback and remove it from the queue
          _this.removePendingPromise(waitForClick);
          _this.props.onClick();
        }).catch(function (errorInfo) {
          // rethrow the error if the promise wasn't
          // rejected because of a cancelation
          _this.removePendingPromise(waitForClick);
          if (!errorInfo.isCanceled) {
            throw errorInfo.error;
          }
        });
      }, _this.handleDoubleClick = function () {
        // all (click) pending promises are part of a
        // dblclick event so we cancel them
        _this.clearPendingPromises();
        _this.props.onDoubleClick();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ComponentWrapper, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // cancel all pending promises to avoid
        // side effects when the component is unmounted
        this.clearPendingPromises();
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          onClick: this.handleClick,
          onDoubleClick: this.handleDoubleClick
        }));
      }
    }]);

    return ComponentWrapper;
  }(_react.Component);

  ComponetWrapper.displayName = "withClickPrevention(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")";

  ComponentWrapper.defaultProps = {
    onClick: _utils.noop,
    onDoubleClick: _utils.noop
  };

  return ComponentWrapper;
};

exports.default = pleaseStopTriggeringClicksOnDoubleClick;
module.exports = exports["default"];