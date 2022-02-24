import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "end", "searchTerm", "start", "totalResults"];
import PropTypes from "prop-types";
import React from "react";
import { appendClassName } from "./view-helpers";

function PagingInfo(_ref) {
  var className = _ref.className,
      end = _ref.end,
      searchTerm = _ref.searchTerm,
      start = _ref.start,
      totalResults = _ref.totalResults,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: appendClassName("sui-paging-info", className)
  }, rest), "Showing", " ", /*#__PURE__*/React.createElement("strong", null, start, " - ", end), " ", "out of ", /*#__PURE__*/React.createElement("strong", null, totalResults), searchTerm && /*#__PURE__*/React.createElement(React.Fragment, null, " ", "for: ", /*#__PURE__*/React.createElement("em", null, searchTerm)));
}

PagingInfo.propTypes = {
  end: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  className: PropTypes.string
};
export default PagingInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWdpbmdJbmZvLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiYXBwZW5kQ2xhc3NOYW1lIiwiUGFnaW5nSW5mbyIsImNsYXNzTmFtZSIsImVuZCIsInNlYXJjaFRlcm0iLCJzdGFydCIsInRvdGFsUmVzdWx0cyIsInJlc3QiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUVBLFNBQVNDLGVBQVQsUUFBZ0MsZ0JBQWhDOztBQUVBLFNBQVNDLFVBQVQsT0FPRztBQUFBLE1BTkRDLFNBTUMsUUFOREEsU0FNQztBQUFBLE1BTERDLEdBS0MsUUFMREEsR0FLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BREVDLElBQ0Y7O0FBQ0Qsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRVAsZUFBZSxDQUFDLGlCQUFELEVBQW9CRSxTQUFwQjtBQUEvQixLQUFtRUssSUFBbkUsY0FDVSxHQURWLGVBRUUsb0NBQ0dGLEtBREgsU0FDYUYsR0FEYixDQUZGLEVBSVksR0FKWiwwQkFLUyxvQ0FBU0csWUFBVCxDQUxULEVBTUdGLFVBQVUsaUJBQ1QsMENBQ0csR0FESCx3QkFFTyxnQ0FBS0EsVUFBTCxDQUZQLENBUEosQ0FERjtBQWVEOztBQUVESCxVQUFVLENBQUNPLFNBQVgsR0FBdUI7QUFDckJMLEVBQUFBLEdBQUcsRUFBRUwsU0FBUyxDQUFDVyxNQUFWLENBQWlCQyxVQUREO0FBRXJCTixFQUFBQSxVQUFVLEVBQUVOLFNBQVMsQ0FBQ2EsTUFBVixDQUFpQkQsVUFGUjtBQUdyQkwsRUFBQUEsS0FBSyxFQUFFUCxTQUFTLENBQUNXLE1BQVYsQ0FBaUJDLFVBSEg7QUFJckJKLEVBQUFBLFlBQVksRUFBRVIsU0FBUyxDQUFDVyxNQUFWLENBQWlCQyxVQUpWO0FBS3JCUixFQUFBQSxTQUFTLEVBQUVKLFNBQVMsQ0FBQ2E7QUFMQSxDQUF2QjtBQVFBLGVBQWVWLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBQYWdpbmdJbmZvKHtcbiAgY2xhc3NOYW1lLFxuICBlbmQsXG4gIHNlYXJjaFRlcm0sXG4gIHN0YXJ0LFxuICB0b3RhbFJlc3VsdHMsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLXBhZ2luZy1pbmZvXCIsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIFNob3dpbmd7XCIgXCJ9XG4gICAgICA8c3Ryb25nPlxuICAgICAgICB7c3RhcnR9IC0ge2VuZH1cbiAgICAgIDwvc3Ryb25nPntcIiBcIn1cbiAgICAgIG91dCBvZiA8c3Ryb25nPnt0b3RhbFJlc3VsdHN9PC9zdHJvbmc+XG4gICAgICB7c2VhcmNoVGVybSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIGZvcjogPGVtPntzZWFyY2hUZXJtfTwvZW0+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUGFnaW5nSW5mby5wcm9wVHlwZXMgPSB7XG4gIGVuZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzZWFyY2hUZXJtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXJ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRvdGFsUmVzdWx0czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luZ0luZm87XG4iXX0=