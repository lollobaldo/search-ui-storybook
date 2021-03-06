import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import PropTypes from "prop-types";
import React from "react";
import { appendClassName } from "../view-helpers";

var LayoutSidebar = /*#__PURE__*/function (_React$Component) {
  _inherits(LayoutSidebar, _React$Component);

  var _super = _createSuper(LayoutSidebar);

  function LayoutSidebar(props) {
    var _this;

    _classCallCheck(this, LayoutSidebar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleSidebar", function () {
      _this.setState(function (_ref) {
        var isSidebarToggled = _ref.isSidebarToggled;
        return {
          isSidebarToggled: !isSidebarToggled
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToggleButton", function (label) {
      if (!_this.props.children) return null;
      return /*#__PURE__*/React.createElement("button", {
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

  _createClass(LayoutSidebar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      var isSidebarToggled = this.state.isSidebarToggled;
      var classes = appendClassName(className, isSidebarToggled ? "".concat(className, "--toggled") : null);
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderToggleButton("Show Filters"), /*#__PURE__*/React.createElement("div", {
        className: classes
      }, this.renderToggleButton("Save Filters"), children));
    }
  }]);

  return LayoutSidebar;
}(React.Component);

_defineProperty(LayoutSidebar, "propTypes", {
  className: PropTypes.string,
  children: PropTypes.node
});

export default LayoutSidebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXlvdXRzL0xheW91dFNpZGViYXIuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiUmVhY3QiLCJhcHBlbmRDbGFzc05hbWUiLCJMYXlvdXRTaWRlYmFyIiwicHJvcHMiLCJzZXRTdGF0ZSIsImlzU2lkZWJhclRvZ2dsZWQiLCJsYWJlbCIsImNoaWxkcmVuIiwidG9nZ2xlU2lkZWJhciIsInN0YXRlIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsInJlbmRlclRvZ2dsZUJ1dHRvbiIsIkNvbXBvbmVudCIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBRUEsU0FBU0MsZUFBVCxRQUFnQyxpQkFBaEM7O0lBRU1DLGE7Ozs7O0FBTUoseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLG9FQUtILFlBQU07QUFDcEIsWUFBS0MsUUFBTCxDQUFjO0FBQUEsWUFBR0MsZ0JBQUgsUUFBR0EsZ0JBQUg7QUFBQSxlQUEyQjtBQUN2Q0EsVUFBQUEsZ0JBQWdCLEVBQUUsQ0FBQ0E7QUFEb0IsU0FBM0I7QUFBQSxPQUFkO0FBR0QsS0FUa0I7O0FBQUEseUVBV0UsVUFBQUMsS0FBSyxFQUFJO0FBQzVCLFVBQUksQ0FBQyxNQUFLSCxLQUFMLENBQVdJLFFBQWhCLEVBQTBCLE9BQU8sSUFBUDtBQUUxQiwwQkFDRTtBQUNFLFFBQUEsTUFBTSxNQURSO0FBRUUsUUFBQSxJQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUEsU0FBUyxFQUFDLDJCQUhaO0FBSUUsUUFBQSxPQUFPLEVBQUUsTUFBS0M7QUFKaEIsU0FNR0YsS0FOSCxDQURGO0FBVUQsS0F4QmtCOztBQUVqQixVQUFLRyxLQUFMLEdBQWE7QUFBRUosTUFBQUEsZ0JBQWdCLEVBQUU7QUFBcEIsS0FBYjtBQUZpQjtBQUdsQjs7OztXQXVCRCxrQkFBUztBQUNQLHdCQUFnQyxLQUFLRixLQUFyQztBQUFBLFVBQVFPLFNBQVIsZUFBUUEsU0FBUjtBQUFBLFVBQW1CSCxRQUFuQixlQUFtQkEsUUFBbkI7QUFDQSxVQUFRRixnQkFBUixHQUE2QixLQUFLSSxLQUFsQyxDQUFRSixnQkFBUjtBQUVBLFVBQU1NLE9BQU8sR0FBR1YsZUFBZSxDQUM3QlMsU0FENkIsRUFFN0JMLGdCQUFnQixhQUFNSyxTQUFOLGlCQUE2QixJQUZoQixDQUEvQjtBQUtBLDBCQUNFLDBDQUNHLEtBQUtFLGtCQUFMLENBQXdCLGNBQXhCLENBREgsZUFFRTtBQUFLLFFBQUEsU0FBUyxFQUFFRDtBQUFoQixTQUNHLEtBQUtDLGtCQUFMLENBQXdCLGNBQXhCLENBREgsRUFFR0wsUUFGSCxDQUZGLENBREY7QUFTRDs7OztFQWxEeUJQLEtBQUssQ0FBQ2EsUzs7Z0JBQTVCWCxhLGVBQ2U7QUFDakJRLEVBQUFBLFNBQVMsRUFBRVgsU0FBUyxDQUFDZSxNQURKO0FBRWpCUCxFQUFBQSxRQUFRLEVBQUVSLFNBQVMsQ0FBQ2dCO0FBRkgsQzs7QUFvRHJCLGVBQWViLGFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuLi92aWV3LWhlbHBlcnNcIjtcblxuY2xhc3MgTGF5b3V0U2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzU2lkZWJhclRvZ2dsZWQ6IGZhbHNlIH07XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHsgaXNTaWRlYmFyVG9nZ2xlZCB9KSA9PiAoe1xuICAgICAgaXNTaWRlYmFyVG9nZ2xlZDogIWlzU2lkZWJhclRvZ2dsZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmVuZGVyVG9nZ2xlQnV0dG9uID0gbGFiZWwgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBoaWRkZW5cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cInN1aS1sYXlvdXQtc2lkZWJhci10b2dnbGVcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNpZGViYXJ9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzU2lkZWJhclRvZ2dsZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gYXBwZW5kQ2xhc3NOYW1lKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaXNTaWRlYmFyVG9nZ2xlZCA/IGAke2NsYXNzTmFtZX0tLXRvZ2dsZWRgIDogbnVsbFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3RoaXMucmVuZGVyVG9nZ2xlQnV0dG9uKFwiU2hvdyBGaWx0ZXJzXCIpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAge3RoaXMucmVuZGVyVG9nZ2xlQnV0dG9uKFwiU2F2ZSBGaWx0ZXJzXCIpfVxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFNpZGViYXI7XG4iXX0=