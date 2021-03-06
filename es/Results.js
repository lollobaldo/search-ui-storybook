import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className"];
import PropTypes from "prop-types";
import React from "react";
import { appendClassName } from "./view-helpers";

function Results(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("ul", _extends({
    className: appendClassName("sui-results-container", className)
  }, rest), children);
}

Results.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
export default Results;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHRzLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiYXBwZW5kQ2xhc3NOYW1lIiwiUmVzdWx0cyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmVzdCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUVBLFNBQVNDLGVBQVQsUUFBZ0MsZ0JBQWhDOztBQUVBLFNBQVNDLE9BQVQsT0FBbUQ7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLFNBQXNCLFFBQXRCQSxTQUFzQjtBQUFBLE1BQVJDLElBQVE7O0FBQ2pELHNCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUVKLGVBQWUsQ0FBQyx1QkFBRCxFQUEwQkcsU0FBMUI7QUFENUIsS0FFTUMsSUFGTixHQUlHRixRQUpILENBREY7QUFRRDs7QUFFREQsT0FBTyxDQUFDSSxTQUFSLEdBQW9CO0FBQ2xCSCxFQUFBQSxRQUFRLEVBQUVKLFNBQVMsQ0FBQ1EsSUFBVixDQUFlQyxVQURQO0FBRWxCSixFQUFBQSxTQUFTLEVBQUVMLFNBQVMsQ0FBQ1U7QUFGSCxDQUFwQjtBQUtBLGVBQWVQLE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBSZXN1bHRzKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsXG4gICAgICBjbGFzc05hbWU9e2FwcGVuZENsYXNzTmFtZShcInN1aS1yZXN1bHRzLWNvbnRhaW5lclwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gICk7XG59XG5cblJlc3VsdHMucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl19