"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFilterValueDisplay;

/*
Since Filter Values come in many different varieties, this helper
encapsulates the logic for determining how to show the label of that
filter in the UI.
*/
function getFilterValueDisplay(filterValue) {
  if (filterValue === undefined || filterValue === null) return "";
  if (filterValue.hasOwnProperty("name")) return filterValue.name;
  return String(filterValue);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3LWhlbHBlcnMvZ2V0RmlsdGVyVmFsdWVEaXNwbGF5LmpzIl0sIm5hbWVzIjpbImdldEZpbHRlclZhbHVlRGlzcGxheSIsImZpbHRlclZhbHVlIiwidW5kZWZpbmVkIiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLHFCQUFULENBQStCQyxXQUEvQixFQUE0QztBQUN6RCxNQUFJQSxXQUFXLEtBQUtDLFNBQWhCLElBQTZCRCxXQUFXLEtBQUssSUFBakQsRUFBdUQsT0FBTyxFQUFQO0FBQ3ZELE1BQUlBLFdBQVcsQ0FBQ0UsY0FBWixDQUEyQixNQUEzQixDQUFKLEVBQXdDLE9BQU9GLFdBQVcsQ0FBQ0csSUFBbkI7QUFDeEMsU0FBT0MsTUFBTSxDQUFDSixXQUFELENBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5TaW5jZSBGaWx0ZXIgVmFsdWVzIGNvbWUgaW4gbWFueSBkaWZmZXJlbnQgdmFyaWV0aWVzLCB0aGlzIGhlbHBlclxuZW5jYXBzdWxhdGVzIHRoZSBsb2dpYyBmb3IgZGV0ZXJtaW5pbmcgaG93IHRvIHNob3cgdGhlIGxhYmVsIG9mIHRoYXRcbmZpbHRlciBpbiB0aGUgVUkuXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RmlsdGVyVmFsdWVEaXNwbGF5KGZpbHRlclZhbHVlKSB7XG4gIGlmIChmaWx0ZXJWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGZpbHRlclZhbHVlID09PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgaWYgKGZpbHRlclZhbHVlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSkgcmV0dXJuIGZpbHRlclZhbHVlLm5hbWU7XG4gIHJldHVybiBTdHJpbmcoZmlsdGVyVmFsdWUpO1xufVxuIl19