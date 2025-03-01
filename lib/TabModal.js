'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactPoppop = require('react-poppop');

var _reactPoppop2 = _interopRequireDefault(_reactPoppop);

var _reactSortableHoc = require('react-sortable-hoc');

var _SortMethod2 = require('./SortMethod');

var _SortMethod3 = _interopRequireDefault(_SortMethod2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragTabContainer = (0, _reactSortableHoc.SortableContainer)(function (_ref) {
  var children = _ref.children;

  return React.createElement(
    'div',
    { style: { marginTop: '50px' } },
    children
  );
});

var ModalTabListWrapper = function (_SortMethod) {
  _inherits(ModalTabListWrapper, _SortMethod);

  function ModalTabListWrapper() {
    _classCallCheck(this, ModalTabListWrapper);

    return _possibleConstructorReturn(this, (ModalTabListWrapper.__proto__ || Object.getPrototypeOf(ModalTabListWrapper)).apply(this, arguments));
  }

  _createClass(ModalTabListWrapper, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        DragTabContainer,
        { onSortEnd: this.onSortEnd,
          axis: 'y',
          lockAxis: 'y'
          // if no pressDelay, close button cannot be triggered,
          // because it would always treat click as dnd action
          , pressDelay: '100' },
        this.props.children
      );
    }
  }]);

  return ModalTabListWrapper;
}(_SortMethod3.default);

var TabModal = function (_React$Component) {
  _inherits(TabModal, _React$Component);

  function TabModal() {
    _classCallCheck(this, TabModal);

    return _possibleConstructorReturn(this, (TabModal.__proto__ || Object.getPrototypeOf(TabModal)).apply(this, arguments));
  }

  _createClass(TabModal, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        _reactPoppop2.default,
        { open: true,
          onClose: this.props.closeModal,
          closeOnEsc: true,
          closeBtn: true },
        React.createElement(
          ModalTabListWrapper,
          { handleTabSequence: this.props.handleTabSequence,
            handleTabChange: this.props.handleTabChange,
            handleTabDoubleClick: this.props.handleTabDoubleClick,
            activeIndex: this.props.activeIndex },
          this.props.children
        )
      );
    }
  }]);

  return TabModal;
}(React.Component);

exports.default = TabModal;
module.exports = exports['default'];