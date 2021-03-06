"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FilterType = _interopRequireDefault(require("./FilterType"));

var _FilterValue = _interopRequireDefault(require("./FilterValue"));

var _default = _propTypes.default.shape({
  field: _propTypes.default.string.isRequired,
  values: _propTypes.default.arrayOf(_FilterValue.default).isRequired,
  type: _FilterType.default.isRequired
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9GaWx0ZXIuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwic2hhcGUiLCJmaWVsZCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ2YWx1ZXMiLCJhcnJheU9mIiwiRmlsdGVyVmFsdWUiLCJ0eXBlIiwiRmlsdGVyVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O2VBRWVBLG1CQUFVQyxLQUFWLENBQWdCO0FBQzdCQyxFQUFBQSxLQUFLLEVBQUVGLG1CQUFVRyxNQUFWLENBQWlCQyxVQURLO0FBRTdCQyxFQUFBQSxNQUFNLEVBQUVMLG1CQUFVTSxPQUFWLENBQWtCQyxvQkFBbEIsRUFBK0JILFVBRlY7QUFHN0JJLEVBQUFBLElBQUksRUFBRUMsb0JBQVdMO0FBSFksQ0FBaEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBGaWx0ZXJUeXBlIGZyb20gXCIuL0ZpbHRlclR5cGVcIjtcbmltcG9ydCBGaWx0ZXJWYWx1ZSBmcm9tIFwiLi9GaWx0ZXJWYWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9wVHlwZXMuc2hhcGUoe1xuICBmaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKEZpbHRlclZhbHVlKS5pc1JlcXVpcmVkLFxuICB0eXBlOiBGaWx0ZXJUeXBlLmlzUmVxdWlyZWRcbn0pO1xuIl19