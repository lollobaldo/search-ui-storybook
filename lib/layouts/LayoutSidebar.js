"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _viewHelpers = require("../view-helpers");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LayoutSidebar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(LayoutSidebar, _React$Component);

  var _super = _createSuper(LayoutSidebar);

  function LayoutSidebar(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LayoutSidebar);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleSidebar", function () {
      _this.setState(function (_ref) {
        var isSidebarToggled = _ref.isSidebarToggled;
        return {
          isSidebarToggled: !isSidebarToggled
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderToggleButton", function (label) {
      if (!_this.props.children) return null;
      return /*#__PURE__*/_react.default.createElement("button", {
        hidden: true,
        type: "button",
        className: "sui-layout-sidebar-toggle",
        onClick: _this.toggleSidebar
      }, label);
    });
    _this.state = {
      isSidebarToggled: false
    };
    return _this;
  }

  (0, _createClass2.default)(LayoutSidebar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      var isSidebarToggled = this.state.isSidebarToggled;
      var classes = (0, _viewHelpers.appendClassName)(className, isSidebarToggled ? "".concat(className, "--toggled") : null);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.renderToggleButton("Show Filters"), /*#__PURE__*/_react.default.createElement("div", {
        className: classes
      }, this.renderToggleButton("Save Filters"), children));
    }
  }]);
  return LayoutSidebar;
}(_react.default.Component);

(0, _defineProperty2.default)(LayoutSidebar, "propTypes", {
  className: _propTypes.default.string,
  children: _propTypes.default.node
});
var _default = LayoutSidebar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXlvdXRzL0xheW91dFNpZGViYXIuanMiXSwibmFtZXMiOlsiTGF5b3V0U2lkZWJhciIsInByb3BzIiwic2V0U3RhdGUiLCJpc1NpZGViYXJUb2dnbGVkIiwibGFiZWwiLCJjaGlsZHJlbiIsInRvZ2dsZVNpZGViYXIiLCJzdGF0ZSIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJyZW5kZXJUb2dnbGVCdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7OztJQUVNQSxhOzs7OztBQU1KLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFEaUIsZ0dBS0gsWUFBTTtBQUNwQixZQUFLQyxRQUFMLENBQWM7QUFBQSxZQUFHQyxnQkFBSCxRQUFHQSxnQkFBSDtBQUFBLGVBQTJCO0FBQ3ZDQSxVQUFBQSxnQkFBZ0IsRUFBRSxDQUFDQTtBQURvQixTQUEzQjtBQUFBLE9BQWQ7QUFHRCxLQVRrQjtBQUFBLHFHQVdFLFVBQUFDLEtBQUssRUFBSTtBQUM1QixVQUFJLENBQUMsTUFBS0gsS0FBTCxDQUFXSSxRQUFoQixFQUEwQixPQUFPLElBQVA7QUFFMUIsMEJBQ0U7QUFDRSxRQUFBLE1BQU0sTUFEUjtBQUVFLFFBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFBLFNBQVMsRUFBQywyQkFIWjtBQUlFLFFBQUEsT0FBTyxFQUFFLE1BQUtDO0FBSmhCLFNBTUdGLEtBTkgsQ0FERjtBQVVELEtBeEJrQjtBQUVqQixVQUFLRyxLQUFMLEdBQWE7QUFBRUosTUFBQUEsZ0JBQWdCLEVBQUU7QUFBcEIsS0FBYjtBQUZpQjtBQUdsQjs7OztXQXVCRCxrQkFBUztBQUNQLHdCQUFnQyxLQUFLRixLQUFyQztBQUFBLFVBQVFPLFNBQVIsZUFBUUEsU0FBUjtBQUFBLFVBQW1CSCxRQUFuQixlQUFtQkEsUUFBbkI7QUFDQSxVQUFRRixnQkFBUixHQUE2QixLQUFLSSxLQUFsQyxDQUFRSixnQkFBUjtBQUVBLFVBQU1NLE9BQU8sR0FBRyxrQ0FDZEQsU0FEYyxFQUVkTCxnQkFBZ0IsYUFBTUssU0FBTixpQkFBNkIsSUFGL0IsQ0FBaEI7QUFLQSwwQkFDRSw0REFDRyxLQUFLRSxrQkFBTCxDQUF3QixjQUF4QixDQURILGVBRUU7QUFBSyxRQUFBLFNBQVMsRUFBRUQ7QUFBaEIsU0FDRyxLQUFLQyxrQkFBTCxDQUF3QixjQUF4QixDQURILEVBRUdMLFFBRkgsQ0FGRixDQURGO0FBU0Q7OztFQWxEeUJNLGVBQU1DLFM7OzhCQUE1QlosYSxlQUNlO0FBQ2pCUSxFQUFBQSxTQUFTLEVBQUVLLG1CQUFVQyxNQURKO0FBRWpCVCxFQUFBQSxRQUFRLEVBQUVRLG1CQUFVRTtBQUZILEM7ZUFvRE5mLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuLi92aWV3LWhlbHBlcnNcIjtcblxuY2xhc3MgTGF5b3V0U2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzU2lkZWJhclRvZ2dsZWQ6IGZhbHNlIH07XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHsgaXNTaWRlYmFyVG9nZ2xlZCB9KSA9PiAoe1xuICAgICAgaXNTaWRlYmFyVG9nZ2xlZDogIWlzU2lkZWJhclRvZ2dsZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmVuZGVyVG9nZ2xlQnV0dG9uID0gbGFiZWwgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBoaWRkZW5cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cInN1aS1sYXlvdXQtc2lkZWJhci10b2dnbGVcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNpZGViYXJ9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzU2lkZWJhclRvZ2dsZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gYXBwZW5kQ2xhc3NOYW1lKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaXNTaWRlYmFyVG9nZ2xlZCA/IGAke2NsYXNzTmFtZX0tLXRvZ2dsZWRgIDogbnVsbFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3RoaXMucmVuZGVyVG9nZ2xlQnV0dG9uKFwiU2hvdyBGaWx0ZXJzXCIpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAge3RoaXMucmVuZGVyVG9nZ2xlQnV0dG9uKFwiU2F2ZSBGaWx0ZXJzXCIpfVxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFNpZGViYXI7XG4iXX0=