"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _downshift = _interopRequireDefault(require("downshift"));

var _types = require("./types");

var _viewHelpers = require("./view-helpers");

var _Autocomplete = _interopRequireDefault(require("./Autocomplete"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

var _excluded = ["className", "allAutocompletedItemsCount", "autocompleteView", "isFocused", "inputProps", "inputView", "onChange", "onSelectAutocomplete", "onSubmit", "useAutocomplete", "value", "autocompletedResults", "autocompletedSuggestions", "autocompletedSuggestionsCount", "completeSuggestion", "notifyAutocompleteSelected"],
    _excluded2 = ["className"],
    _excluded3 = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function SearchBox(props) {
  var className = props.className,
      allAutocompletedItemsCount = props.allAutocompletedItemsCount,
      autocompleteView = props.autocompleteView,
      isFocused = props.isFocused,
      _props$inputProps = props.inputProps,
      inputProps = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputView = props.inputView,
      onChange = props.onChange,
      onSelectAutocomplete = props.onSelectAutocomplete,
      _onSubmit = props.onSubmit,
      useAutocomplete = props.useAutocomplete,
      value = props.value,
      autocompletedResults = props.autocompletedResults,
      autocompletedSuggestions = props.autocompletedSuggestions,
      autocompletedSuggestionsCount = props.autocompletedSuggestionsCount,
      completeSuggestion = props.completeSuggestion,
      notifyAutocompleteSelected = props.notifyAutocompleteSelected,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var focusedClass = isFocused ? "focus" : "";
  var AutocompleteView = autocompleteView || _Autocomplete.default;
  var InputView = inputView || _SearchInput.default;
  return /*#__PURE__*/_react.default.createElement(_downshift.default, (0, _extends2.default)({
    inputValue: value,
    onChange: onSelectAutocomplete,
    onInputValueChange: function onInputValueChange(newValue) {
      // To avoid over dispatching
      if (value === newValue) return;
      onChange(newValue);
    } // Because when a selection is made, we don't really want to change
    // the inputValue. This is supposed to be a "controlled" value, and when
    // this happens we lose control of it.
    ,
    itemToString: function itemToString() {
      return value;
    }
  }, rest), function (downshiftProps) {
    var closeMenu = downshiftProps.closeMenu,
        _getInputProps = downshiftProps.getInputProps,
        isOpen = downshiftProps.isOpen;
    var autocompleteClass = isOpen === true ? " autocomplete" : "";
    return /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: function onSubmit(e) {
        closeMenu();

        _onSubmit(e);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _viewHelpers.appendClassName)("sui-search-box", className) + autocompleteClass
    }, /*#__PURE__*/_react.default.createElement(InputView, (0, _extends2.default)({}, downshiftProps, {
      getInputProps: function getInputProps(additionalProps) {
        var _ref = additionalProps || {},
            className = _ref.className,
            rest = (0, _objectWithoutProperties2.default)(_ref, _excluded2);

        return _getInputProps(_objectSpread(_objectSpread({
          placeholder: "Search"
        }, inputProps), {}, {
          className: (0, _viewHelpers.appendClassName)("sui-search-box__text-input", [inputProps.className, className, focusedClass])
        }, rest));
      },
      getButtonProps: function getButtonProps(additionalProps) {
        var _ref2 = additionalProps || {},
            className = _ref2.className,
            rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded3);

        return _objectSpread({
          type: "submit",
          value: "Search",
          className: (0, _viewHelpers.appendClassName)("button sui-search-box__submit", className)
        }, rest);
      },
      getAutocomplete: function getAutocomplete() {
        if (useAutocomplete && isOpen && allAutocompletedItemsCount > 0) {
          return /*#__PURE__*/_react.default.createElement(AutocompleteView, (0, _extends2.default)({}, props, downshiftProps));
        } else {
          return null;
        }
      }
    }))));
  });
}

SearchBox.propTypes = {
  // Provided by container
  allAutocompletedItemsCount: _propTypes.default.number.isRequired,
  autocompletedResults: _propTypes.default.arrayOf(_types.Result).isRequired,
  autocompletedSuggestions: _propTypes.default.objectOf(_propTypes.default.arrayOf(_types.Suggestion)).isRequired,
  autocompletedSuggestionsCount: _propTypes.default.number.isRequired,
  completeSuggestion: _propTypes.default.func.isRequired,
  notifyAutocompleteSelected: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  value: _propTypes.default.string.isRequired,
  autocompleteResults: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    titleField: _propTypes.default.string.isRequired,
    urlField: _propTypes.default.string.isRequired,
    linkTarget: _propTypes.default.string,
    sectionTitle: _propTypes.default.string
  })]),
  autocompleteView: _propTypes.default.func,
  autocompleteSuggestions: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.exact({
    sectionTitle: _propTypes.default.string
  }), _propTypes.default.objectOf(_propTypes.default.exact({
    sectionTitle: _propTypes.default.string
  }))]),
  className: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  inputView: _propTypes.default.func,
  isFocused: _propTypes.default.bool,
  useAutocomplete: _propTypes.default.bool,
  // Specific configuration for this view only
  onSelectAutocomplete: _propTypes.default.func
};
var _default = SearchBox;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TZWFyY2hCb3guanMiXSwibmFtZXMiOlsiU2VhcmNoQm94IiwicHJvcHMiLCJjbGFzc05hbWUiLCJhbGxBdXRvY29tcGxldGVkSXRlbXNDb3VudCIsImF1dG9jb21wbGV0ZVZpZXciLCJpc0ZvY3VzZWQiLCJpbnB1dFByb3BzIiwiaW5wdXRWaWV3Iiwib25DaGFuZ2UiLCJvblNlbGVjdEF1dG9jb21wbGV0ZSIsIm9uU3VibWl0IiwidXNlQXV0b2NvbXBsZXRlIiwidmFsdWUiLCJhdXRvY29tcGxldGVkUmVzdWx0cyIsImF1dG9jb21wbGV0ZWRTdWdnZXN0aW9ucyIsImF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uc0NvdW50IiwiY29tcGxldGVTdWdnZXN0aW9uIiwibm90aWZ5QXV0b2NvbXBsZXRlU2VsZWN0ZWQiLCJyZXN0IiwiZm9jdXNlZENsYXNzIiwiQXV0b2NvbXBsZXRlVmlldyIsIkF1dG9jb21wbGV0ZSIsIklucHV0VmlldyIsIlNlYXJjaElucHV0IiwibmV3VmFsdWUiLCJkb3duc2hpZnRQcm9wcyIsImNsb3NlTWVudSIsImdldElucHV0UHJvcHMiLCJpc09wZW4iLCJhdXRvY29tcGxldGVDbGFzcyIsImUiLCJhZGRpdGlvbmFsUHJvcHMiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIlJlc3VsdCIsIm9iamVjdE9mIiwiU3VnZ2VzdGlvbiIsImZ1bmMiLCJzdHJpbmciLCJhdXRvY29tcGxldGVSZXN1bHRzIiwib25lT2ZUeXBlIiwiYm9vbCIsInNoYXBlIiwidGl0bGVGaWVsZCIsInVybEZpZWxkIiwibGlua1RhcmdldCIsInNlY3Rpb25UaXRsZSIsImF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zIiwiZXhhY3QiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztB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QSxTQUFTLEVBQUU0QixtQkFBVU8sSUFuQ0Q7QUFvQ3BCckMsRUFBQUEsU0FBUyxFQUFFOEIsbUJBQVVXLElBcENEO0FBcUNwQm5DLEVBQUFBLGVBQWUsRUFBRXdCLG1CQUFVVyxJQXJDUDtBQXVDcEI7QUFDQXJDLEVBQUFBLG9CQUFvQixFQUFFMEIsbUJBQVVPO0FBeENaLENBQXRCO2VBMkNlMUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEb3duc2hpZnQgZnJvbSBcImRvd25zaGlmdFwiO1xuXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgU3VnZ2VzdGlvbiB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiLi9BdXRvY29tcGxldGVcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi9TZWFyY2hJbnB1dFwiO1xuXG5mdW5jdGlvbiBTZWFyY2hCb3gocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBhbGxBdXRvY29tcGxldGVkSXRlbXNDb3VudCxcbiAgICBhdXRvY29tcGxldGVWaWV3LFxuICAgIGlzRm9jdXNlZCxcbiAgICBpbnB1dFByb3BzID0ge30sXG4gICAgaW5wdXRWaWV3LFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uU2VsZWN0QXV0b2NvbXBsZXRlLFxuICAgIG9uU3VibWl0LFxuICAgIHVzZUF1dG9jb21wbGV0ZSxcbiAgICB2YWx1ZSxcbiAgICAvLyBOT1RFOiBUaGVzZSBhcmUgZXhwbGljaXRseSBkZS1zdHJ1Y3R1cmVkIGJ1dCBub3QgdXNlZCBzbyB0aGF0IHRoZXkgYXJlXG4gICAgLy8gbm90IHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBpbnB1dCB3aXRoIHRoZSAncmVzdCcgcGFyYW1ldGVyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgYXV0b2NvbXBsZXRlZFJlc3VsdHMsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgYXV0b2NvbXBsZXRlZFN1Z2dlc3Rpb25zLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uc0NvdW50LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGNvbXBsZXRlU3VnZ2VzdGlvbixcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBub3RpZnlBdXRvY29tcGxldGVTZWxlY3RlZCxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcbiAgY29uc3QgZm9jdXNlZENsYXNzID0gaXNGb2N1c2VkID8gXCJmb2N1c1wiIDogXCJcIjtcbiAgY29uc3QgQXV0b2NvbXBsZXRlVmlldyA9IGF1dG9jb21wbGV0ZVZpZXcgfHwgQXV0b2NvbXBsZXRlO1xuICBjb25zdCBJbnB1dFZpZXcgPSBpbnB1dFZpZXcgfHwgU2VhcmNoSW5wdXQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RG93bnNoaWZ0XG4gICAgICBpbnB1dFZhbHVlPXt2YWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdEF1dG9jb21wbGV0ZX1cbiAgICAgIG9uSW5wdXRWYWx1ZUNoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAvLyBUbyBhdm9pZCBvdmVyIGRpc3BhdGNoaW5nXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbmV3VmFsdWUpIHJldHVybjtcbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgfX1cbiAgICAgIC8vIEJlY2F1c2Ugd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlLCB3ZSBkb24ndCByZWFsbHkgd2FudCB0byBjaGFuZ2VcbiAgICAgIC8vIHRoZSBpbnB1dFZhbHVlLiBUaGlzIGlzIHN1cHBvc2VkIHRvIGJlIGEgXCJjb250cm9sbGVkXCIgdmFsdWUsIGFuZCB3aGVuXG4gICAgICAvLyB0aGlzIGhhcHBlbnMgd2UgbG9zZSBjb250cm9sIG9mIGl0LlxuICAgICAgaXRlbVRvU3RyaW5nPXsoKSA9PiB2YWx1ZX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtkb3duc2hpZnRQcm9wcyA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2xvc2VNZW51LCBnZXRJbnB1dFByb3BzLCBpc09wZW4gfSA9IGRvd25zaGlmdFByb3BzO1xuICAgICAgICBsZXQgYXV0b2NvbXBsZXRlQ2xhc3MgPSBpc09wZW4gPT09IHRydWUgPyBcIiBhdXRvY29tcGxldGVcIiA6IFwiXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgICAgICAgY2xvc2VNZW51KCk7XG4gICAgICAgICAgICAgIG9uU3VibWl0KGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2xhc3NOYW1lKFwic3VpLXNlYXJjaC1ib3hcIiwgY2xhc3NOYW1lKSArIGF1dG9jb21wbGV0ZUNsYXNzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0Vmlld1xuICAgICAgICAgICAgICAgIHsuLi5kb3duc2hpZnRQcm9wc31cbiAgICAgICAgICAgICAgICBnZXRJbnB1dFByb3BzPXthZGRpdGlvbmFsUHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IGFkZGl0aW9uYWxQcm9wcyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRJbnB1dFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgIC4uLmlucHV0UHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogYXBwZW5kQ2xhc3NOYW1lKFwic3VpLXNlYXJjaC1ib3hfX3RleHQtaW5wdXRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZ2V0QnV0dG9uUHJvcHM9e2FkZGl0aW9uYWxQcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gYWRkaXRpb25hbFByb3BzIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogYXBwZW5kQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIHN1aS1zZWFyY2gtYm94X19zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGdldEF1dG9jb21wbGV0ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB1c2VBdXRvY29tcGxldGUgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIGFsbEF1dG9jb21wbGV0ZWRJdGVtc0NvdW50ID4gMFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8QXV0b2NvbXBsZXRlVmlldyB7Li4ucHJvcHN9IHsuLi5kb3duc2hpZnRQcm9wc30gLz47XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0Rvd25zaGlmdD5cbiAgKTtcbn1cblxuU2VhcmNoQm94LnByb3BUeXBlcyA9IHtcbiAgLy8gUHJvdmlkZWQgYnkgY29udGFpbmVyXG4gIGFsbEF1dG9jb21wbGV0ZWRJdGVtc0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGF1dG9jb21wbGV0ZWRSZXN1bHRzOiBQcm9wVHlwZXMuYXJyYXlPZihSZXN1bHQpLmlzUmVxdWlyZWQsXG4gIGF1dG9jb21wbGV0ZWRTdWdnZXN0aW9uczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hcnJheU9mKFN1Z2dlc3Rpb24pKVxuICAgIC5pc1JlcXVpcmVkLFxuICBhdXRvY29tcGxldGVkU3VnZ2VzdGlvbnNDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb21wbGV0ZVN1Z2dlc3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG5vdGlmeUF1dG9jb21wbGV0ZVNlbGVjdGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGF1dG9jb21wbGV0ZVJlc3VsdHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0aXRsZUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB1cmxGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGlua1RhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlY3Rpb25UaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pXG4gIF0pLFxuICBhdXRvY29tcGxldGVWaWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgYXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICBzZWN0aW9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KSxcbiAgICBQcm9wVHlwZXMub2JqZWN0T2YoXG4gICAgICBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgICAgICBzZWN0aW9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pXG4gICAgKVxuICBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpbnB1dFZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICBpc0ZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuICB1c2VBdXRvY29tcGxldGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8vIFNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgdmlldyBvbmx5XG4gIG9uU2VsZWN0QXV0b2NvbXBsZXRlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94O1xuIl19