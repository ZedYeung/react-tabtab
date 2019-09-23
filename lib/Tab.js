'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n  ', '\n\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n  }\n'], ['\n  display: ', ';\n  ', '\n\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  vertical-align: middle;\n'], ['\n  vertical-align: middle;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CloseButton = require('./CloseButton');

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _pleaseStopTriggeringClicksOnDoubleClick = require('./useClick/please-stop-triggering-clicks-on-double-click');

var _pleaseStopTriggeringClicksOnDoubleClick2 = _interopRequireDefault(_pleaseStopTriggeringClicksOnDoubleClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabStyle = _styledComponents2.default.li(_templateObject, function (props) {
  return props.vertical ? 'block' : 'inline-block';
}, function (props) {
  return props.vertical ? '\n      background-color: white;\n      color: black;\n      padding: 10px 10px;\n      z-index: 100000;\n    ' : function (props) {
    return props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px;';
  };
});

var TabText = _styledComponents2.default.span(_templateObject2);

var Tab = function (_React$PureComponent) {
  _inherits(Tab, _React$PureComponent);

  function Tab(props) {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

    _this.clickTab = _this.clickTab.bind(_this);
    _this.clickDelete = _this.clickDelete.bind(_this);
    return _this;
  }

  _createClass(Tab, [{
    key: 'clickTab',
    value: function clickTab() {
      var _props = this.props,
          handleTabChange = _props.handleTabChange,
          index = _props.index;

      handleTabChange(index);
    }
  }, {
    key: 'doubleClickTab',
    value: function doubleClickTab() {
      var _props2 = this.props,
          handleTabDoubleClick = _props2.handleTabDoubleClick,
          index = _props2.index;

      handleTabDoubleClick(index);
    }
  }, {
    key: 'clickDelete',
    value: function clickDelete(event) {
      event.stopPropagation(); // prevent trigger clickTab event.
      var _props3 = this.props,
          handleEdit = _props3.handleEdit,
          index = _props3.index;

      handleEdit({ type: 'delete', index: index });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props,
          CustomTabStyle = _props4.CustomTabStyle,
          active = _props4.active,
          closable = _props4.closable,
          vertical = _props4.vertical,
          index = _props4.index;

      var TabComponent = CustomTabStyle || TabStyle;
      return React.createElement(
        TabComponent,
        { ref: function ref(node) {
            return _this2.__INTERNAL_NODE = node;
          },
          onClick: this.clickTab,
          onDoubleClick: this.doubleClickTab,
          active: active,
          vertical: vertical,
          closable: closable,
          role: 'tab',
          id: 'react-tabtab-tab-' + index,
          'aria-controls': 'react-tabtab-panel-' + index,
          'aria-selected': active },
        React.createElement(
          TabText,
          null,
          this.props.children
        ),
        closable ? React.createElement(_CloseButton2.default, { handleDelete: this.clickDelete }) : null
      );
    }
  }]);

  return Tab;
}(React.PureComponent);

exports.default = (0, _pleaseStopTriggeringClicksOnDoubleClick2.default)(Tab);


Tab.displayName = 'Tab';

exports.TabStyle = TabStyle;