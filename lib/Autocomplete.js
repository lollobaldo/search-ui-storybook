"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _types = require("./types");

var _viewHelpers = require("./view-helpers");

function getRaw(result, value) {
  if (!result[value] || !result[value].raw) return;
  return result[value].raw;
}

function getSnippet(result, value) {
  if (!result[value] || !result[value].snippet) return;
  return result[value].snippet;
}

function getSuggestionTitle(suggestionType, autocompleteSuggestions) {
  if (autocompleteSuggestions.sectionTitle) {
    return autocompleteSuggestions.sectionTitle;
  }

  if (autocompleteSuggestions[suggestionType] && autocompleteSuggestions[suggestionType].sectionTitle) {
    return autocompleteSuggestions[suggestionType].sectionTitle;
  }
}

function Autocomplete(_ref) {
  var autocompleteResults = _ref.autocompleteResults,
      autocompletedResults = _ref.autocompletedResults,
      autocompleteSuggestions = _ref.autocompleteSuggestions,
      autocompletedSuggestions = _ref.autocompletedSuggestions,
      className = _ref.className,
      getItemProps = _ref.getItemProps,
      getMenuProps = _ref.getMenuProps;
  var index = 0;
  return /*#__PURE__*/_react.default.createElement("div", getMenuProps({
    className: (0, _viewHelpers.appendClassName)("sui-search-box__autocomplete-container", className)
  }), /*#__PURE__*/_react.default.createElement("div", null, !!autocompleteSuggestions && Object.entries(autocompletedSuggestions).map(function (_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        suggestionType = _ref3[0],
        suggestions = _ref3[1];

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: suggestionType
    }, getSuggestionTitle(suggestionType, autocompleteSuggestions) && suggestions.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      className: "sui-search-box__section-title"
    }, getSuggestionTitle(suggestionType, autocompleteSuggestions)), suggestions.length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
      className: "sui-search-box__suggestion-list"
    }, suggestions.map(function (suggestion) {
      index++;
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/jsx-key
        _react.default.createElement("li", getItemProps({
          key: suggestion.suggestion || suggestion.highlight,
          index: index - 1,
          item: suggestion
        }), suggestion.highlight ? /*#__PURE__*/_react.default.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: suggestion.highlight
          }
        }) : /*#__PURE__*/_react.default.createElement("span", null, suggestion.suggestion))
      );
    })));
  }), !!autocompleteResults && !!autocompletedResults && autocompletedResults.length > 0 && autocompleteResults.sectionTitle && /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-search-box__section-title"
  }, autocompleteResults.sectionTitle), !!autocompleteResults && !!autocompletedResults && autocompletedResults.length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
    className: "sui-search-box__results-list"
  }, autocompletedResults.map(function (result) {
    index++;
    var titleSnippet = getSnippet(result, autocompleteResults.titleField);
    var titleRaw = getRaw(result, autocompleteResults.titleField);
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/jsx-key
      _react.default.createElement("li", getItemProps({
        key: result.id.raw,
        index: index - 1,
        item: result
      }), titleSnippet ? /*#__PURE__*/_react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: titleSnippet
        }
      }) : /*#__PURE__*/_react.default.createElement("span", null, titleRaw))
    );
  }))));
}

Autocomplete.propTypes = {
  allAutocompletedItemsCount: _propTypes.default.number.isRequired,
  autocompleteResults: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    titleField: _propTypes.default.string.isRequired,
    urlField: _propTypes.default.string.isRequired,
    linkTarget: _propTypes.default.string,
    sectionTitle: _propTypes.default.string
  })]),
  autocompletedResults: _propTypes.default.arrayOf(_types.Result).isRequired,
  autocompletedSuggestions: _propTypes.default.objectOf(_propTypes.default.arrayOf(_types.Suggestion)).isRequired,
  autocompletedSuggestionsCount: _propTypes.default.number.isRequired,
  autocompleteSuggestions: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.exact({
    sectionTitle: _propTypes.default.string
  }), _propTypes.default.objectOf(_propTypes.default.exact({
    sectionTitle: _propTypes.default.string
  }))]),
  getItemProps: _propTypes.default.func.isRequired,
  getMenuProps: _propTypes.default.func.isRequired,
  className: _propTypes.default.string
};
var _default = Autocomplete;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiZ2V0UmF3IiwicmVzdWx0IiwidmFsdWUiLCJyYXciLCJnZXRTbmlwcGV0Iiwic25pcHBldCIsImdldFN1Z2dlc3Rpb25UaXRsZSIsInN1Z2dlc3Rpb25UeXBlIiwiYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMiLCJzZWN0aW9uVGl0bGUiLCJBdXRvY29tcGxldGUiLCJhdXRvY29tcGxldGVSZXN1bHRzIiwiYXV0b2NvbXBsZXRlZFJlc3VsdHMiLCJhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnMiLCJjbGFzc05hbWUiLCJnZXRJdGVtUHJvcHMiLCJnZXRNZW51UHJvcHMiLCJpbmRleCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJzdWdnZXN0aW9ucyIsImxlbmd0aCIsInN1Z2dlc3Rpb24iLCJrZXkiLCJoaWdobGlnaHQiLCJpdGVtIiwiX19odG1sIiwidGl0bGVTbmlwcGV0IiwidGl0bGVGaWVsZCIsInRpdGxlUmF3IiwiaWQiLCJwcm9wVHlwZXMiLCJhbGxBdXRvY29tcGxldGVkSXRlbXNDb3VudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJib29sIiwic2hhcGUiLCJzdHJpbmciLCJ1cmxGaWVsZCIsImxpbmtUYXJnZXQiLCJhcnJheU9mIiwiUmVzdWx0Iiwib2JqZWN0T2YiLCJTdWdnZXN0aW9uIiwiYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zQ291bnQiLCJleGFjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLEtBQXhCLEVBQStCO0FBQzdCLE1BQUksQ0FBQ0QsTUFBTSxDQUFDQyxLQUFELENBQVAsSUFBa0IsQ0FBQ0QsTUFBTSxDQUFDQyxLQUFELENBQU4sQ0FBY0MsR0FBckMsRUFBMEM7QUFDMUMsU0FBT0YsTUFBTSxDQUFD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QUFRLEVBQUVQLG1CQUFVTSxNQUFWLENBQWlCSixVQUZiO0FBR2RNLElBQUFBLFVBQVUsRUFBRVIsbUJBQVVNLE1BSFI7QUFJZC9CLElBQUFBLFlBQVksRUFBRXlCLG1CQUFVTTtBQUpWLEdBQWhCLENBRnVDLENBQXBCLENBRkU7QUFXdkI1QixFQUFBQSxvQkFBb0IsRUFBRXNCLG1CQUFVUyxPQUFWLENBQWtCQyxhQUFsQixFQUEwQlIsVUFYekI7QUFZdkJ2QixFQUFBQSx3QkFBd0IsRUFBRXFCLG1CQUFVVyxRQUFWLENBQW1CWCxtQkFBVVMsT0FBVixDQUFrQkcsaUJBQWxCLENBQW5CLEVBQ3ZCVixVQWJvQjtBQWN2QlcsRUFBQUEsNkJBQTZCLEVBQUViLG1CQUFVQyxNQUFWLENBQWlCQyxVQWR6QjtBQWV2QjVCLEVBQUFBLHVCQUF1QixFQUFFMEIsbUJBQVVHLFNBQVYsQ0FBb0IsQ0FDM0NILG1CQUFVSSxJQURpQyxFQUUzQ0osbUJBQVVjLEtBQVYsQ0FBZ0I7QUFDZHZDLElBQUFBLFlBQVksRUFBRXlCLG1CQUFVTTtBQURWLEdBQWhCLENBRjJDLEVBSzNDTixtQkFBVVcsUUFBVixDQUNFWCxtQkFBVWMsS0FBVixDQUFnQjtBQUNkdkMsSUFBQUEsWUFBWSxFQUFFeUIsbUJBQVVNO0FBRFYsR0FBaEIsQ0FERixDQUwyQyxDQUFwQixDQWZGO0FBMEJ2QnpCLEVBQUFBLFlBQVksRUFBRW1CLG1CQUFVZSxJQUFWLENBQWViLFVBMUJOO0FBMkJ2QnBCLEVBQUFBLFlBQVksRUFBRWtCLG1CQUFVZSxJQUFWLENBQWViLFVBM0JOO0FBNEJ2QnRCLEVBQUFBLFNBQVMsRUFBRW9CLG1CQUFVTTtBQTVCRSxDQUF6QjtlQStCZTlCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBTdWdnZXN0aW9uIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBnZXRSYXcocmVzdWx0LCB2YWx1ZSkge1xuICBpZiAoIXJlc3VsdFt2YWx1ZV0gfHwgIXJlc3VsdFt2YWx1ZV0ucmF3KSByZXR1cm47XG4gIHJldHVybiByZXN1bHRbdmFsdWVdLnJhdztcbn1cblxuZnVuY3Rpb24gZ2V0U25pcHBldChyZXN1bHQsIHZhbHVlKSB7XG4gIGlmICghcmVzdWx0W3ZhbHVlXSB8fCAhcmVzdWx0W3ZhbHVlXS5zbmlwcGV0KSByZXR1cm47XG4gIHJldHVybiByZXN1bHRbdmFsdWVdLnNuaXBwZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFN1Z2dlc3Rpb25UaXRsZShzdWdnZXN0aW9uVHlwZSwgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMpIHtcbiAgaWYgKGF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zLnNlY3Rpb25UaXRsZSkge1xuICAgIHJldHVybiBhdXRvY29tcGxldGVTdWdnZXN0aW9ucy5zZWN0aW9uVGl0bGU7XG4gIH1cblxuICBpZiAoXG4gICAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnNbc3VnZ2VzdGlvblR5cGVdICYmXG4gICAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnNbc3VnZ2VzdGlvblR5cGVdLnNlY3Rpb25UaXRsZVxuICApIHtcbiAgICByZXR1cm4gYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnNbc3VnZ2VzdGlvblR5cGVdLnNlY3Rpb25UaXRsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBdXRvY29tcGxldGUoe1xuICBhdXRvY29tcGxldGVSZXN1bHRzLFxuICBhdXRvY29tcGxldGVkUmVzdWx0cyxcbiAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMsXG4gIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9ucyxcbiAgY2xhc3NOYW1lLFxuICBnZXRJdGVtUHJvcHMsXG4gIGdldE1lbnVQcm9wc1xufSkge1xuICBsZXQgaW5kZXggPSAwO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRNZW51UHJvcHMoe1xuICAgICAgICBjbGFzc05hbWU6IGFwcGVuZENsYXNzTmFtZShcbiAgICAgICAgICBcInN1aS1zZWFyY2gtYm94X19hdXRvY29tcGxldGUtY29udGFpbmVyXCIsXG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIHshIWF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zICYmXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zKS5tYXAoXG4gICAgICAgICAgICAoW3N1Z2dlc3Rpb25UeXBlLCBzdWdnZXN0aW9uc10pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtzdWdnZXN0aW9uVHlwZX0+XG4gICAgICAgICAgICAgICAgICB7Z2V0U3VnZ2VzdGlvblRpdGxlKFxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnNcbiAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWktc2VhcmNoLWJveF9fc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2dldFN1Z2dlc3Rpb25UaXRsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VpLXNlYXJjaC1ib3hfX3N1Z2dlc3Rpb24tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoc3VnZ2VzdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb24uc3VnZ2VzdGlvbiB8fCBzdWdnZXN0aW9uLmhpZ2hsaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBzdWdnZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbi5oaWdobGlnaHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogc3VnZ2VzdGlvbi5oaWdobGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdWdnZXN0aW9uLnN1Z2dlc3Rpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgIHshIWF1dG9jb21wbGV0ZVJlc3VsdHMgJiZcbiAgICAgICAgICAhIWF1dG9jb21wbGV0ZWRSZXN1bHRzICYmXG4gICAgICAgICAgYXV0b2NvbXBsZXRlZFJlc3VsdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIGF1dG9jb21wbGV0ZVJlc3VsdHMuc2VjdGlvblRpdGxlICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLXNlYXJjaC1ib3hfX3NlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAge2F1dG9jb21wbGV0ZVJlc3VsdHMuc2VjdGlvblRpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgeyEhYXV0b2NvbXBsZXRlUmVzdWx0cyAmJlxuICAgICAgICAgICEhYXV0b2NvbXBsZXRlZFJlc3VsdHMgJiZcbiAgICAgICAgICBhdXRvY29tcGxldGVkUmVzdWx0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWktc2VhcmNoLWJveF9fcmVzdWx0cy1saXN0XCI+XG4gICAgICAgICAgICAgIHthdXRvY29tcGxldGVkUmVzdWx0cy5tYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlU25pcHBldCA9IGdldFNuaXBwZXQoXG4gICAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVSZXN1bHRzLnRpdGxlRmllbGRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlUmF3ID0gZ2V0UmF3KHJlc3VsdCwgYXV0b2NvbXBsZXRlUmVzdWx0cy50aXRsZUZpZWxkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1rZXlcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJlc3VsdC5pZC5yYXcsXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4IC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtOiByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZVNuaXBwZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogdGl0bGVTbmlwcGV0XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlUmF3fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQXV0b2NvbXBsZXRlLnByb3BUeXBlcyA9IHtcbiAgYWxsQXV0b2NvbXBsZXRlZEl0ZW1zQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgYXV0b2NvbXBsZXRlUmVzdWx0czogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRpdGxlRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHVybEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsaW5rVGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VjdGlvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgXSksXG4gIGF1dG9jb21wbGV0ZWRSZXN1bHRzOiBQcm9wVHlwZXMuYXJyYXlPZihSZXN1bHQpLmlzUmVxdWlyZWQsXG4gIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hcnJheU9mKFN1Z2dlc3Rpb24pKVxuICAgIC5pc1JlcXVpcmVkLFxuICBhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnNDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBhdXRvY29tcGxldGVTdWdnZXN0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLmV4YWN0KHtcbiAgICAgIHNlY3Rpb25UaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLFxuICAgIFByb3BUeXBlcy5vYmplY3RPZihcbiAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgIHNlY3Rpb25UaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSlcbiAgICApXG4gIF0pLFxuICBnZXRJdGVtUHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldE1lbnVQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGU7XG4iXX0=