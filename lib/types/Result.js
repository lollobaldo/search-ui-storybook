"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FieldValueWrapper = _interopRequireDefault(require("./FieldValueWrapper"));

// Typically an object where keys are the field names, and values are field values.
// Also could be literally any other arbitrary value depending on the particular Search API response.
// Default views in Search UI know what to do with FieldValueWrapper values, but not arbitrary values, so it
// is usually better to work with FieldValueWrapper values. We encourage FieldValueWrapper, but we accept
// anything because we don't want users to have type error warnings unnecessarily.
//
// An example would be if a user requests "grouping" in an App Search API request. That will come back
// as "_group: {..}". It *should* be there in the Result so that a developer has it available to work
// with.
var _default = _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.any, _FieldValueWrapper.default]));

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9SZXN1bHQuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwib2JqZWN0T2YiLCJvbmVPZlR5cGUiLCJhbnkiLCJGaWVsZFZhbHVlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBQ2VBLG1CQUFVQyxRQUFWLENBQ2JELG1CQUFVRSxTQUFWLENBQW9CLENBQUNGLG1CQUFVRyxHQUFYLEVBQWdCQywwQkFBaEIsQ0FBcEIsQ0FEYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgRmllbGRWYWx1ZVdyYXBwZXIgZnJvbSBcIi4vRmllbGRWYWx1ZVdyYXBwZXJcIjtcblxuLy8gVHlwaWNhbGx5IGFuIG9iamVjdCB3aGVyZSBrZXlzIGFyZSB0aGUgZmllbGQgbmFtZXMsIGFuZCB2YWx1ZXMgYXJlIGZpZWxkIHZhbHVlcy5cbi8vIEFsc28gY291bGQgYmUgbGl0ZXJhbGx5IGFueSBvdGhlciBhcmJpdHJhcnkgdmFsdWUgZGVwZW5kaW5nIG9uIHRoZSBwYXJ0aWN1bGFyIFNlYXJjaCBBUEkgcmVzcG9uc2UuXG4vLyBEZWZhdWx0IHZpZXdzIGluIFNlYXJjaCBVSSBrbm93IHdoYXQgdG8gZG8gd2l0aCBGaWVsZFZhbHVlV3JhcHBlciB2YWx1ZXMsIGJ1dCBub3QgYXJiaXRyYXJ5IHZhbHVlcywgc28gaXRcbi8vIGlzIHVzdWFsbHkgYmV0dGVyIHRvIHdvcmsgd2l0aCBGaWVsZFZhbHVlV3JhcHBlciB2YWx1ZXMuIFdlIGVuY291cmFnZSBGaWVsZFZhbHVlV3JhcHBlciwgYnV0IHdlIGFjY2VwdFxuLy8gYW55dGhpbmcgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHVzZXJzIHRvIGhhdmUgdHlwZSBlcnJvciB3YXJuaW5ncyB1bm5lY2Vzc2FyaWx5LlxuLy9cbi8vIEFuIGV4YW1wbGUgd291bGQgYmUgaWYgYSB1c2VyIHJlcXVlc3RzIFwiZ3JvdXBpbmdcIiBpbiBhbiBBcHAgU2VhcmNoIEFQSSByZXF1ZXN0LiBUaGF0IHdpbGwgY29tZSBiYWNrXG4vLyBhcyBcIl9ncm91cDogey4ufVwiLiBJdCAqc2hvdWxkKiBiZSB0aGVyZSBpbiB0aGUgUmVzdWx0IHNvIHRoYXQgYSBkZXZlbG9wZXIgaGFzIGl0IGF2YWlsYWJsZSB0byB3b3JrXG4vLyB3aXRoLlxuZXhwb3J0IGRlZmF1bHQgUHJvcFR5cGVzLm9iamVjdE9mKFxuICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYW55LCBGaWVsZFZhbHVlV3JhcHBlcl0pXG4pO1xuIl19