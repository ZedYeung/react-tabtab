import { Children, Component, PureComponent, cloneElement, createElement } from 'react';
import React__default from 'react';
import styled from 'styled-components';
import Poppop from 'react-poppop';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};









var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};









var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

//      
var Tabs = function (_React$Component) {
  inherits(Tabs, _React$Component);

  function Tabs(props) {
    classCallCheck(this, Tabs);

    var _this = possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.handleTabChange = _this.handleTabChange.bind(_this);
    _this.handleTabDoubleClick = _this.handleTabDoubleClick.bind(_this);
    _this.handleTabSequence = _this.handleTabSequence.bind(_this);
    _this.handleEdit = _this.handleEdit.bind(_this);
    _this.state = {
      activeIndex: _this.getActiveIndex(props)
    };
    return _this;
  }

  createClass(Tabs, [{
    key: 'getActiveIndex',
    value: function getActiveIndex(props) {
      var defaultIndex = props.defaultIndex,
          activeIndex = props.activeIndex;

      if (activeIndex) return activeIndex;
      if (defaultIndex) return defaultIndex;
      return 0;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeIndex !== this.props.activeIndex) {
        this.setState({ activeIndex: nextProps.activeIndex });
      }
    }
  }, {
    key: 'handleTabChange',
    value: function handleTabChange(index) {
      var _props = this.props,
          activeIndex = _props.activeIndex,
          onTabChange = _props.onTabChange;

      if (activeIndex !== 0 && !activeIndex) {
        this.setState({ activeIndex: index });
      }
      if (onTabChange) {
        onTabChange(index);
      }
    }
  }, {
    key: 'handleTabDoubleClick',
    value: function handleTabDoubleClick(index) {
      var _props2 = this.props,
          activeIndex = _props2.activeIndex,
          onTabDoubleClick = _props2.onTabDoubleClick;

      if (activeIndex !== 0 && !activeIndex) {
        this.setState({ activeIndex: index });
      }
      if (onTabDoubleClick) {
        onTabDoubleClick(index);
      }
    }
  }, {
    key: 'handleTabSequence',
    value: function handleTabSequence(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var onTabSequenceChange = this.props.onTabSequenceChange;

      if (onTabSequenceChange) {
        onTabSequenceChange({ oldIndex: oldIndex, newIndex: newIndex });
      }
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit(_ref2) {
      var type = _ref2.type,
          index = _ref2.index;
      var onTabEdit = this.props.onTabEdit;

      if (onTabEdit) {
        onTabEdit({ type: type, index: index });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          extraProps = objectWithoutProperties(_props3, ['children']);
      var activeIndex = this.state.activeIndex;

      var props = _extends({
        handleTabChange: this.handleTabChange,
        handleTabDoubleClick: this.handleTabDoubleClick,
        handleTabSequence: this.handleTabSequence,
        handleEdit: this.handleEdit,
        activeIndex: activeIndex
      }, extraProps);

      return createElement(
        'div',
        null,
        Children.map(children, function (child) {
          return cloneElement(child, props);
        })
      );
    }
  }]);
  return Tabs;
}(Component);

Tabs.defaultProps = {
  showModalButton: 4,
  showArrowButton: 'auto',
  onTabChange: function onTabChange() {},
  onTabDoubleClick: function onTabDoubleClick() {},
  onTabSequenceChange: function onTabSequenceChange() {},
  customStyle: {
    TabList: null,
    Tab: null,
    Panel: null,
    ActionButton: null
  }
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var browser = invariant;

// The svg path is from react-icons: https://github.com/gorangajic/react-icons/
var Svg = function Svg(_ref) {
  var d = _ref.d;
  return React__default.createElement(
    "svg",
    { viewBox: "0 0 40 40", fill: "currentColor", height: "1em", width: "1em", style: { verticalAlign: 'middle' } },
    React__default.createElement(
      "g",
      null,
      React__default.createElement("path", { d: d })
    )
  );
};

var CloseIcon = function CloseIcon() {
  return React__default.createElement(Svg, { d: "m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z" });
};

var LeftIcon = function LeftIcon() {
  return React__default.createElement(Svg, { d: "m25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z" });
};

var RightIcon = function RightIcon() {
  return React__default.createElement(Svg, { d: "m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z" });
};

var BulletIcon = function BulletIcon() {
  return React__default.createElement(Svg, { d: "m31.7 28.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.4-3.3-3.4z m0-11.6h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z m0-11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4h23.4c1.8 0 3.3-1.5 3.3-3.4s-1.5-3.3-3.3-3.3z" });
};

//      




function isNumber(number) {
  return !isNaN(parseInt(number, 10));
}

//      
var SortMethod = function (_React$PureComponent) {
  inherits(SortMethod, _React$PureComponent);

  function SortMethod(props) {
    classCallCheck(this, SortMethod);

    var _this = possibleConstructorReturn(this, (SortMethod.__proto__ || Object.getPrototypeOf(SortMethod)).call(this, props));

    _this.onSortEnd = _this.onSortEnd.bind(_this);
    return _this;
  }

  createClass(SortMethod, [{
    key: 'onSortEnd',
    value: function onSortEnd(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var _props = this.props,
          activeIndex = _props.activeIndex,
          handleTabChange = _props.handleTabChange,
          handleTabSequence = _props.handleTabSequence;

      if (oldIndex === newIndex) {
        if (activeIndex !== oldIndex) {
          handleTabChange(oldIndex);
        }
      } else {
        handleTabSequence({ oldIndex: oldIndex, newIndex: newIndex });
      }
    }
  }]);
  return SortMethod;
}(PureComponent);

//      
var DragTabContainer = SortableContainer(function (_ref) {
  var children = _ref.children;

  return createElement(
    'div',
    { style: { marginTop: '50px' } },
    children
  );
});

var ModalTabListWrapper = function (_SortMethod) {
  inherits(ModalTabListWrapper, _SortMethod);

  function ModalTabListWrapper() {
    classCallCheck(this, ModalTabListWrapper);
    return possibleConstructorReturn(this, (ModalTabListWrapper.__proto__ || Object.getPrototypeOf(ModalTabListWrapper)).apply(this, arguments));
  }

  createClass(ModalTabListWrapper, [{
    key: 'render',
    value: function render() {
      return createElement(
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
}(SortMethod);

var TabModal = function (_React$Component) {
  inherits(TabModal, _React$Component);

  function TabModal() {
    classCallCheck(this, TabModal);
    return possibleConstructorReturn(this, (TabModal.__proto__ || Object.getPrototypeOf(TabModal)).apply(this, arguments));
  }

  createClass(TabModal, [{
    key: 'render',
    value: function render() {
      return createElement(
        Poppop,
        { open: true,
          onClose: this.props.closeModal,
          closeOnEsc: true,
          closeBtn: true },
        createElement(
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
}(Component);

var _templateObject = taggedTemplateLiteral(['\n  background-color: white;\n  text-align: left;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  width: auto;\n  padding: ', ';\n'], ['\n  background-color: white;\n  text-align: left;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  width: auto;\n  padding: ', ';\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  overflow: hidden;\n'], ['\n  overflow: hidden;\n']);
var _templateObject3 = taggedTemplateLiteral(['\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  transition: transform .3s cubic-bezier(.42, 0, .58, 1);\n'], ['\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  transition: transform .3s cubic-bezier(.42, 0, .58, 1);\n']);
var _templateObject4 = taggedTemplateLiteral(['\n  height: 100%;\n  width ', 'px;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #f9f9f9;\n  > svg {\n    padding-top: 11px;\n  }\n'], ['\n  height: 100%;\n  width ', 'px;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #f9f9f9;\n  > svg {\n    padding-top: 11px;\n  }\n']);
var _templateObject5 = taggedTemplateLiteral(['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  ', ';\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  ', ';\n  &:hover {\n    cursor: pointer;\n  }\n']);
var _templateObject6 = taggedTemplateLiteral(['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n']);

//      
var buttonWidth = 35;
var getPadding = function getPadding(_ref) {
  var showModalButton = _ref.showModalButton,
      showArrowButton = _ref.showArrowButton;

  var paddingLeft = 0;
  var paddingRight = 0;
  if (showModalButton) {
    paddingLeft += buttonWidth;
  }
  if (showArrowButton) {
    paddingLeft += buttonWidth;
    paddingRight += buttonWidth;
    if (showModalButton) {
      paddingLeft += 2;
    }
  }
  if (paddingLeft > 0) {
    paddingLeft += 3;
  }
  if (paddingRight > 0) {
    paddingRight += 3;
  }
  return '0 ' + paddingRight + 'px 0 ' + paddingLeft + 'px';
};

var TabListStyle = styled.div(_templateObject, function (props) {
  return getPadding(props);
});

var ListInner = styled.div(_templateObject2);

var ListScroll = styled.ul(_templateObject3);

var ActionButtonStyle = styled.div(_templateObject4, buttonWidth);

var makeScrollButton = function makeScrollButton(ActionButton) {
  return styled(ActionButton)(_templateObject5, function (props) {
    return props.left ? props.showModalButton ? 'left: ' + (buttonWidth + 2) + 'px' : 'left: 0' : 'right: 0';
  });
};

var makeFoldButton = function makeFoldButton(ActionButton) {
  return styled(ActionButton)(_templateObject6);
};

var TabListComponent = function (_React$Component) {
  inherits(TabListComponent, _React$Component);

  function TabListComponent(props) {
    classCallCheck(this, TabListComponent);

    var _this = possibleConstructorReturn(this, (TabListComponent.__proto__ || Object.getPrototypeOf(TabListComponent)).call(this, props));

    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.renderTabs = _this.renderTabs.bind(_this);
    _this.renderArrowButton = _this.renderArrowButton.bind(_this);
    _this.isShowModalButton = _this.isShowModalButton.bind(_this);
    _this.isShowArrowButton = _this.isShowArrowButton.bind(_this);
    _this.scrollPosition = 0;
    _this.tabRefs = [];
    _this.state = {
      modalIsOpen: false,
      showArrowButton: false,
      showModalButton: false
    };
    return _this;
  }

  createClass(TabListComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isShowArrowButton();
      this.isShowModalButton();
      if (this.props.activeIndex > 0) this.scrollToIndex(this.props.activeIndex, 'left');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.children.length !== this.props.children.length) {
        this.isShowArrowButton();
        this.isShowModalButton();
      }

      if (prevProps.activeIndex !== this.props.activeIndex) {
        //if we scroll to the last tab, alignment is set to the right side of the tab
        var rectSide = this.props.activeIndex === this.props.children.length - 1 ? 'right' : 'left';
        this.scrollToIndex(this.props.activeIndex, rectSide);
      }
      // if prev state show arrow button, and current state doesn't show
      // need to reset the scroll position, or some tabs will be hided by container.
      if (prevState.showArrowButton && !this.state.showArrowButton) {
        this.scrollToZero();
      }

      if (prevProps.showModalButton !== this.props.showModalButton) {
        this.isShowModalButton();
      }

      if (prevProps.showArrowButton !== this.props.showArrowButton) {
        this.isShowArrowButton();
      }
    }
  }, {
    key: 'getTabNode',
    value: function getTabNode(tab) {
      if (tab.__INTERNAL_NODE) {
        // normal tab
        return tab.__INTERNAL_NODE;
      } else if (tab.__DRAG_TAB_INTERNAL_NODE) {
        // drag tab
        return tab.__DRAG_TAB_INTERNAL_NODE.node;
      }
    }
  }, {
    key: 'unifyScrollMax',
    value: function unifyScrollMax(width) {
      return parseFloat(width / 3 * 2);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(direction) {
      var leftMove = 0;
      var containerOffset = this.listContainer.getBoundingClientRect();
      var containerWidth = this.listContainer.offsetWidth;
      var tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();
      var tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();

      if (direction === 'right') {
        leftMove = tabLastOffset.right - containerOffset.right;
        if (leftMove > containerWidth) {
          leftMove = this.unifyScrollMax(containerWidth);
        }
      } else if (direction === 'left') {
        leftMove = tabFirstOffset.left - containerOffset.left;
        if (-leftMove > containerWidth) {
          leftMove = -this.unifyScrollMax(containerWidth);
        }
      }
      this.scrollPosition += leftMove;
      if (this.scrollPosition < 0) {
        this.scrollPosition = 0;
      }

      this.listScroll.style.transform = 'translate3d(-' + this.scrollPosition + 'px, 0, 0)';
    }

    // $FlowFixMe

  }, {
    key: 'scrollToIndex',
    value: function scrollToIndex(index, rectSide) {
      var tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
      var containerOffset = this.listContainer.getBoundingClientRect();
      // Cancel scrolling if the tab is visible
      if (tabOffset.right < containerOffset.right && tabOffset.left > containerOffset.left) return;
      var leftMove = tabOffset[rectSide] - containerOffset[rectSide];
      this.scrollPosition += leftMove;
      if (this.scrollPosition < 0) {
        this.scrollPosition = 0;
      }
      this.listScroll.style.transform = 'translate3d(-' + this.scrollPosition + 'px, 0, 0)';
    }
  }, {
    key: 'scrollToZero',
    value: function scrollToZero() {
      this.listScroll.style.transform = 'translate3d(0, 0, 0)';
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal(open) {
      var _this2 = this;

      this.setState({ modalIsOpen: open }, function () {
        if (!open) {
          // $FlowFixMe
          _this2.scrollToIndex(_this2.props.activeIndex, 'right');
        }
      });
    }
  }, {
    key: 'isShowModalButton',
    value: function isShowModalButton() {
      var showModalButton = this.props.showModalButton;

      if (isNumber(showModalButton)) {
        // $FlowFixMe, weired. currently set showModalButton as number | bool, but don't know why flow only can recognize it as bool
        showModalButton = this.props.children.length >= showModalButton;
      }
      this.setState({ showModalButton: showModalButton });
    }
  }, {
    key: 'isShowArrowButton',
    value: function isShowArrowButton() {
      var showArrowButton = this.props.showArrowButton;

      if (showArrowButton === 'auto') {
        var tabWidth = 0;
        var containerWidth = this.listContainer.offsetWidth;
        showArrowButton = false;
        for (var index = 0; index < this.tabRefs.length; index++) {
          var tab = this.getTabNode(this.tabRefs[index]);
          tabWidth += tab.offsetWidth;
          if (tabWidth >= containerWidth) {
            showArrowButton = true;
            break;
          }
        }
      }
      // $FlowFixMe: flow will show 'auto' is not bool, but with this logic, showArrowButton will never be 'auto'
      this.setState({ showArrowButton: showArrowButton });
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this3 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var isModal = arguments[1];
      var _props = this.props,
          children = _props.children,
          activeIndex = _props.activeIndex,
          handleTabChange = _props.handleTabChange,
          handleTabDoubleClick = _props.handleTabDoubleClick,
          handleEdit = _props.handleEdit,
          customStyle = _props.customStyle;

      var props = {
        handleTabChange: handleTabChange,
        handleTabDoubleClick: handleTabDoubleClick,
        handleEdit: handleEdit,
        //$FlowFixMe
        CustomTabStyle: customStyle.Tab
      };
      if (!isModal) {
        this.tabRefs = [];
      }
      return Children.map(children, function (child, index) {
        return cloneElement(child, _extends({
          key: index,
          active: index === activeIndex,
          index: index,
          tabIndex: index,
          ref: function ref(node) {
            if (!isModal && node) {
              _this3.tabRefs.push(node);
            }
          }
        }, props, options));
      });
    }
  }, {
    key: 'renderArrowButton',
    value: function renderArrowButton(ScrollButton) {
      var _this4 = this;

      var showArrowButton = this.state.showArrowButton;

      if (showArrowButton) {
        return createElement(
          'div',
          null,
          createElement(
            ScrollButton,
            { left: true,
              onClick: function onClick() {
                _this4.handleScroll('left');
              },
              ref: function ref(node) {
                return _this4.leftArrowNode = node;
              },
              showModalButton: this.state.showModalButton },
            createElement(LeftIcon, null)
          ),
          createElement(
            ScrollButton,
            { onClick: function onClick() {
                _this4.handleScroll('right');
              },
              ref: function ref(node) {
                return _this4.rightArrowNode = node;
              } },
            createElement(RightIcon, null)
          )
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          customStyle = _props2.customStyle,
          activeIndex = _props2.activeIndex,
          handleTabChange = _props2.handleTabChange,
          handleTabDoubleClick = _props2.handleTabDoubleClick,
          handleTabSequence = _props2.handleTabSequence,
          ExtraButton = _props2.ExtraButton;
      var modalIsOpen = this.state.modalIsOpen;

      var TabList = customStyle.TabList || TabListStyle;
      var ActionButton = customStyle.ActionButton || ActionButtonStyle;
      var ScrollButton = makeScrollButton(ActionButton);
      var FoldButton = makeFoldButton(ActionButton);
      browser(this.props.children, 'React-tabtab Error: You MUST pass at least one tab');
      return createElement(
        'div',
        null,
        ExtraButton ? ExtraButton : null,
        createElement(
          TabList,
          { hasExtraButton: !!ExtraButton,
            showModalButton: this.state.showModalButton,
            showArrowButton: this.state.showArrowButton },
          this.state.showModalButton ? createElement(
            FoldButton,
            { ref: function ref(node) {
                return _this5.foldNode = node;
              },
              onClick: this.toggleModal.bind(this, true),
              showArrowButton: this.state.showArrowButton },
            createElement(BulletIcon, null)
          ) : null,
          this.renderArrowButton(ScrollButton),
          createElement(
            ListInner,
            { ref: function ref(node) {
                return _this5.listContainer = node;
              } },
            createElement(
              ListScroll,
              { ref: function ref(node) {
                  return _this5.listScroll = node;
                }, role: 'tablist' },
              this.renderTabs()
            )
          )
        ),
        modalIsOpen ? createElement(
          TabModal,
          { closeModal: this.toggleModal.bind(this, false),
            handleTabSequence: handleTabSequence,
            handleTabChange: handleTabChange,
            handleTabDoubleClick: handleTabDoubleClick,
            activeIndex: activeIndex },
          this.renderTabs({ vertical: true }, true)
        ) : null
      );
    }
  }]);
  return TabListComponent;
}(Component);

TabListComponent.displayName = 'TabList';

var _templateObject$2 = taggedTemplateLiteral(['\n  display: inline-block;\n  color: #777;\n  margin-left: 5px;\n  padding: 0;\n  vertical-align: middle;\n  border: 0;\n  padding: 2px;\n  outline: 0;\n  &:hover {\n    color: black;\n    background-color: #eee;\n    cursor: pointer;\n    border-radius: 50%;\n  }\n  > svg {\n    vertical-align: middle;\n  }\n'], ['\n  display: inline-block;\n  color: #777;\n  margin-left: 5px;\n  padding: 0;\n  vertical-align: middle;\n  border: 0;\n  padding: 2px;\n  outline: 0;\n  &:hover {\n    color: black;\n    background-color: #eee;\n    cursor: pointer;\n    border-radius: 50%;\n  }\n  > svg {\n    vertical-align: middle;\n  }\n']);

//      
var CloseWrapper = styled.button(_templateObject$2);

var CloseButton = function (_React$PureComponent) {
  inherits(CloseButton, _React$PureComponent);

  function CloseButton() {
    classCallCheck(this, CloseButton);
    return possibleConstructorReturn(this, (CloseButton.__proto__ || Object.getPrototypeOf(CloseButton)).apply(this, arguments));
  }

  createClass(CloseButton, [{
    key: 'render',
    value: function render() {
      return createElement(
        CloseWrapper,
        { onClick: this.props.handleDelete },
        createElement(CloseIcon, null)
      );
    }
  }]);
  return CloseButton;
}(PureComponent);

var noop = function noop() {};

var delay = function delay(n) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, n);
  });
};

var cancellablePromise = function cancellablePromise(promise) {
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

var pleaseStopTriggeringClicksOnDoubleClick = function pleaseStopTriggeringClicksOnDoubleClick(WrappedComponent) {
  var ComponentWrapper = function (_Component) {
    inherits(ComponentWrapper, _Component);

    function ComponentWrapper() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, ComponentWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ComponentWrapper.__proto__ || Object.getPrototypeOf(ComponentWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.pendingPromises = [], _this.appendPendingPromise = function (promise) {
        return _this.pendingPromises = [].concat(toConsumableArray(_this.pendingPromises), [promise]);
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
        var waitForClick = cancellablePromise(delay(300));
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
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(ComponentWrapper, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // cancel all pending promises to avoid
        // side effects when the component is unmounted
        this.clearPendingPromises();
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement(WrappedComponent, _extends({}, this.props, {
          onClick: this.handleClick,
          onDoubleClick: this.handleDoubleClick
        }));
      }
    }]);
    return ComponentWrapper;
  }(Component);

  ComponentWrapper.displayName = "withClickPrevention(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")";

  ComponentWrapper.defaultProps = {
    onClick: noop,
    onDoubleClick: noop
  };

  return ComponentWrapper;
};

var _templateObject$1 = taggedTemplateLiteral(['\n  display: ', ';\n  ', '\n\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n  }\n'], ['\n  display: ', ';\n  ', '\n\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n  }\n']);
var _templateObject2$1 = taggedTemplateLiteral(['\n  vertical-align: middle;\n'], ['\n  vertical-align: middle;\n']);

//      
var TabStyle = styled.li(_templateObject$1, function (props) {
  return props.vertical ? 'block' : 'inline-block';
}, function (props) {
  return props.vertical ? '\n      background-color: white;\n      color: black;\n      padding: 10px 10px;\n      z-index: 100000;\n    ' : function (props) {
    return props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px;';
  };
});

var TabText = styled.span(_templateObject2$1);

var Tab = function (_React$PureComponent) {
  inherits(Tab, _React$PureComponent);

  function Tab(props) {
    classCallCheck(this, Tab);

    var _this = possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

    _this.clickTab = _this.clickTab.bind(_this);
    _this.doubleClickTab = _this.doubleClickTab.bind(_this);
    _this.clickDelete = _this.clickDelete.bind(_this);
    return _this;
  }

  createClass(Tab, [{
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
      return createElement(
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
        createElement(
          TabText,
          null,
          this.props.children
        ),
        closable ? createElement(CloseButton, { handleDelete: this.clickDelete }) : null
      );
    }
  }]);
  return Tab;
}(PureComponent);

var Tab$1 = pleaseStopTriggeringClicksOnDoubleClick(Tab);

Tab.displayName = 'Tab';

//      
var DragTabContainer$1 = SortableContainer(function (_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return React__default.createElement(
    TabListComponent,
    props,
    children
  );
});

var DragTabList = function (_SortMethod) {
  inherits(DragTabList, _SortMethod);

  function DragTabList() {
    classCallCheck(this, DragTabList);
    return possibleConstructorReturn(this, (DragTabList.__proto__ || Object.getPrototypeOf(DragTabList)).apply(this, arguments));
  }

  createClass(DragTabList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = objectWithoutProperties(_props, ['children']);

      return React__default.createElement(
        DragTabContainer$1,
        _extends({ onSortEnd: this.onSortEnd,
          axis: 'x',
          lockAxis: 'x'
          // if no pressDelay, close button cannot be triggered,
          // because it would always treat click as dnd action
          , pressDelay: 100
        }, props),
        children
      );
    }
  }]);
  return DragTabList;
}(SortMethod);

DragTabList.displayName = 'DragTabList';

//      
var DragTabElement = SortableElement(function (_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return createElement(
    Tab$1,
    _extends({ index: props.tabIndex }, props),
    children
  );
});

var DragTab = function (_React$PureComponent) {
  inherits(DragTab, _React$PureComponent);

  function DragTab() {
    classCallCheck(this, DragTab);
    return possibleConstructorReturn(this, (DragTab.__proto__ || Object.getPrototypeOf(DragTab)).apply(this, arguments));
  }

  createClass(DragTab, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          props = objectWithoutProperties(_props, ['children']);

      return createElement(
        DragTabElement,
        _extends({ ref: function ref(node) {
            return _this2.__DRAG_TAB_INTERNAL_NODE = node;
          } }, props),
        children
      );
    }
  }]);
  return DragTab;
}(PureComponent);

DragTab.displayName = 'DragTab';

//      
var PanelList = function (_React$PureComponent) {
  inherits(PanelList, _React$PureComponent);

  function PanelList() {
    classCallCheck(this, PanelList);
    return possibleConstructorReturn(this, (PanelList.__proto__ || Object.getPrototypeOf(PanelList)).apply(this, arguments));
  }

  createClass(PanelList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          activeIndex = _props.activeIndex,
          customStyle = _props.customStyle;

      if (!children || activeIndex === undefined) {
        return null;
      }

      var props = {};
      if (customStyle && customStyle.Panel) {
        props = _extends({}, props, { CustomPanelStyle: customStyle.Panel });
      }

      // to prevent the type of one children is object type
      var result = Children.toArray(children).map(function (child, index) {
        return cloneElement(child, _extends({
          key: index,
          active: index === activeIndex,
          index: index
        }, props));
      });
      return createElement(
        'div',
        null,
        result
      );
    }
  }]);
  return PanelList;
}(PureComponent);

var _templateObject$3 = taggedTemplateLiteral(['\n  background-color: white;\n  text-align: left;\n  padding: 20px 15px;\n  ', '\n'], ['\n  background-color: white;\n  text-align: left;\n  padding: 20px 15px;\n  ', '\n']);

//      
var PanelStyle = styled.div(_templateObject$3, function (props) {
  return !props.active ? 'display: none;' : null;
});

var PanelComponent = function (_React$PureComponent) {
  inherits(PanelComponent, _React$PureComponent);

  function PanelComponent() {
    classCallCheck(this, PanelComponent);
    return possibleConstructorReturn(this, (PanelComponent.__proto__ || Object.getPrototypeOf(PanelComponent)).apply(this, arguments));
  }

  createClass(PanelComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          index = _props.index;

      var Panel = this.props.CustomPanelStyle || PanelStyle;
      return createElement(
        Panel,
        { role: 'tabpanel',
          id: 'react-tabtab-panel-' + index,
          'aria-labelledby': 'react-tabtab-' + index,
          'aria-hidden': false,
          active: active },
        active ? this.props.children : null
      );
    }
  }]);
  return PanelComponent;
}(PureComponent);

//      
var AsyncPanelComponent = function (_React$PureComponent) {
  inherits(AsyncPanelComponent, _React$PureComponent);

  function AsyncPanelComponent(props) {
    classCallCheck(this, AsyncPanelComponent);

    var _this = possibleConstructorReturn(this, (AsyncPanelComponent.__proto__ || Object.getPrototypeOf(AsyncPanelComponent)).call(this, props));

    _this.loadPanel = _this.loadPanel.bind(_this);
    _this.cacheData = undefined;
    _this.state = {
      isLoading: false,
      data: undefined
    };
    return _this;
  }

  createClass(AsyncPanelComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.active) this.loadPanel();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active) this.loadPanel();
    }
  }, {
    key: 'loadPanel',
    value: function loadPanel() {
      var _this2 = this;

      var _props = this.props,
          loadContent = _props.loadContent,
          cache = _props.cache;

      if (cache && this.cacheData) {
        this.setState({
          isLoading: false,
          data: this.cacheData
        });
        return;
      }
      var callback = function callback(err, data) {
        if (err) {
          console.log('React-Tabtab async panel error:', err);
        }
        if (cache) {
          _this2.cacheData = data;
        }
        _this2.setState({
          isLoading: false,
          data: data
        });
      };
      var promise = loadContent(callback);
      if (promise) {
        promise.then(function (data) {
          return callback(null, data);
        }, function (err) {
          return callback(err);
        });
      }
      if (!this.state.isLoading) {
        this.setState({ isLoading: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          render = _props2.render,
          renderLoading = _props2.renderLoading,
          CustomPanelStyle = _props2.CustomPanelStyle,
          active = _props2.active,
          index = _props2.index;
      var _state = this.state,
          isLoading = _state.isLoading,
          data = _state.data;

      var content = void 0;
      if (isLoading) {
        content = renderLoading();
      } else {
        content = render(data);
      }
      return createElement(
        PanelComponent,
        { CustomPanelStyle: CustomPanelStyle, active: active, index: index },
        content
      );
    }
  }]);
  return AsyncPanelComponent;
}(PureComponent);

AsyncPanelComponent.defaultProps = {
  cache: true
};

var _templateObject$4 = taggedTemplateLiteral(['\n  float: right;\n  border: 1px solid #eee;\n  border-radius: 2px;\n  padding: 3px;\n  margin-top: 10px;\n  margin-left: 2px;\n  display: inline-block;\n  color: #777;\n  vertical-align: middle;\n  /* ', ' */\n  &:hover {\n    color: black;\n    cursor: pointer;\n  }\n  &:disabled,\n  &[disabled]{\n    border: 1px solid grey;\n    background-color: #e7e7e7;\n    cursor: not-allowed;\n  }\n'], ['\n  float: right;\n  border: 1px solid #eee;\n  border-radius: 2px;\n  padding: 3px;\n  margin-top: 10px;\n  margin-left: 2px;\n  display: inline-block;\n  color: #777;\n  vertical-align: middle;\n  /* ', ' */\n  &:hover {\n    color: black;\n    cursor: pointer;\n  }\n  &:disabled,\n  &[disabled]{\n    border: 1px solid grey;\n    background-color: #e7e7e7;\n    cursor: not-allowed;\n  }\n']);

//      
var ExtraButtonStyle = styled.button(_templateObject$4, function (props) {
  return props.disabled ? '\n    pointer-events: none;\n    color: #AAA;\n    background: #F5F5F5;\n  ' : null;
});

var ExtraButton = function (_React$PureComponent) {
  inherits(ExtraButton, _React$PureComponent);

  function ExtraButton() {
    classCallCheck(this, ExtraButton);
    return possibleConstructorReturn(this, (ExtraButton.__proto__ || Object.getPrototypeOf(ExtraButton)).apply(this, arguments));
  }

  createClass(ExtraButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CustomExtraButtonStyle = _props.CustomExtraButtonStyle,
          disabled = _props.disabled,
          onClick = _props.onClick;

      var ExtraButtonComponent = CustomExtraButtonStyle || ExtraButtonStyle;
      return createElement(
        ExtraButtonComponent,
        { onClick: onClick, disabled: disabled },
        this.props.children
      );
    }
  }]);
  return ExtraButton;
}(PureComponent);

ExtraButton.defaultProps = {
  disabled: false
};

//      
var styled$1 = { TabListStyle: TabListStyle, ActionButtonStyle: ActionButtonStyle, TabStyle: TabStyle, PanelStyle: PanelStyle, ExtraButtonStyle: ExtraButtonStyle };
var defaultOutput = {
  Tabs: Tabs,
  TabList: TabListComponent,
  Tab: Tab$1,
  DragTabList: DragTabList,
  DragTab: DragTab,
  PanelList: PanelList,
  Panel: PanelComponent,
  AsyncPanel: AsyncPanelComponent,
  ExtraButton: ExtraButton,
  styled: styled$1
};

export default defaultOutput;
