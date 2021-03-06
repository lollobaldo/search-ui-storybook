import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "current", "resultsPerPage", "onChange", "totalPages"];
import PropTypes from "prop-types";
import React from "react";
import RCPagination from "rc-pagination";
import enUsLocale from "rc-pagination/lib/locale/en_US";
import { appendClassName } from "./view-helpers";

function Paging(_ref) {
  var className = _ref.className,
      current = _ref.current,
      resultsPerPage = _ref.resultsPerPage,
      onChange = _ref.onChange,
      totalPages = _ref.totalPages,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(RCPagination, _extends({
    current: current,
    onChange: onChange,
    pageSize: resultsPerPage,
    total: totalPages * resultsPerPage,
    className: appendClassName("sui-paging", className),
    locale: enUsLocale
  }, rest));
}

Paging.propTypes = {
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  className: PropTypes.string
};
export default Paging;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWdpbmcuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiUmVhY3QiLCJSQ1BhZ2luYXRpb24iLCJlblVzTG9jYWxlIiwiYXBwZW5kQ2xhc3NOYW1lIiwiUGFnaW5nIiwiY2xhc3NOYW1lIiwiY3VycmVudCIsInJlc3VsdHNQZXJQYWdlIiwib25DaGFuZ2UiLCJ0b3RhbFBhZ2VzIiwicmVzdCIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZUFBekI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGdDQUF2QjtBQUVBLFNBQVNDLGVBQVQsUUFBZ0MsZ0JBQWhDOztBQUVBLFNBQVNDLE1BQVQsT0FPRztBQUFBLE1BTkRDLFNBTUMsUUFOREEsU0FNQztBQUFBLE1BTERDLE9BS0MsUUFMREEsT0FLQztBQUFBLE1BSkRDLGNBSUMsUUFKREEsY0FJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLElBQ0Y7O0FBQ0Qsc0JBQ0Usb0JBQUMsWUFBRDtBQUNFLElBQUEsT0FBTyxFQUFFSixPQURYO0FBRUUsSUFBQSxRQUFRLEVBQUVFLFFBRlo7QUFHRSxJQUFBLFFBQVEsRUFBRUQsY0FIWjtBQUlFLElBQUEsS0FBSyxFQUFFRSxVQUFVLEdBQUdGLGNBSnRCO0FBS0UsSUFBQSxTQUFTLEVBQUVKLGVBQWUsQ0FBQyxZQUFELEVBQWVFLFNBQWYsQ0FMNUI7QUFNRSxJQUFBLE1BQU0sRUFBRUg7QUFOVixLQU9NUSxJQVBOLEVBREY7QUFXRDs7QUFFRE4sTUFBTSxDQUFDTyxTQUFQLEdBQW1CO0FBQ2pCTCxFQUFBQSxPQUFPLEVBQUVQLFNBQVMsQ0FBQ2EsTUFBVixDQUFpQkMsVUFEVDtBQUVqQkwsRUFBQUEsUUFBUSxFQUFFVCxTQUFTLENBQUNlLElBQVYsQ0FBZUQsVUFGUjtBQUdqQk4sRUFBQUEsY0FBYyxFQUFFUixTQUFTLENBQUNhLE1BQVYsQ0FBaUJDLFVBSGhCO0FBSWpCSixFQUFBQSxVQUFVLEVBQUVWLFNBQVMsQ0FBQ2EsTUFBVixDQUFpQkMsVUFKWjtBQUtqQlIsRUFBQUEsU0FBUyxFQUFFTixTQUFTLENBQUNnQjtBQUxKLENBQW5CO0FBUUEsZUFBZVgsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSQ1BhZ2luYXRpb24gZnJvbSBcInJjLXBhZ2luYXRpb25cIjtcbmltcG9ydCBlblVzTG9jYWxlIGZyb20gXCJyYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVNcIjtcblxuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lIH0gZnJvbSBcIi4vdmlldy1oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIFBhZ2luZyh7XG4gIGNsYXNzTmFtZSxcbiAgY3VycmVudCxcbiAgcmVzdWx0c1BlclBhZ2UsXG4gIG9uQ2hhbmdlLFxuICB0b3RhbFBhZ2VzLFxuICAuLi5yZXN0XG59KSB7XG4gIHJldHVybiAoXG4gICAgPFJDUGFnaW5hdGlvblxuICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIHBhZ2VTaXplPXtyZXN1bHRzUGVyUGFnZX1cbiAgICAgIHRvdGFsPXt0b3RhbFBhZ2VzICogcmVzdWx0c1BlclBhZ2V9XG4gICAgICBjbGFzc05hbWU9e2FwcGVuZENsYXNzTmFtZShcInN1aS1wYWdpbmdcIiwgY2xhc3NOYW1lKX1cbiAgICAgIGxvY2FsZT17ZW5Vc0xvY2FsZX1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59XG5cblBhZ2luZy5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlc3VsdHNQZXJQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRvdGFsUGFnZXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmc7XG4iXX0=