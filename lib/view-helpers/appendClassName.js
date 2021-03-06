"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendClassName;

function getNewClassName(newClassName) {
  if (!Array.isArray(newClassName)) return newClassName;
  return newClassName.filter(function (name) {
    return name;
  }).join(" ");
}

function appendClassName(baseClassName, newClassName) {
  if (!newClassName) return baseClassName || "";
  if (!baseClassName) return getNewClassName(newClassName) || "";
  return "".concat(baseClassName, " ").concat(getNewClassName(newClassName));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3LWhlbHBlcnMvYXBwZW5kQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbImdldE5ld0NsYXNzTmFtZSIsIm5ld0NsYXNzTmFtZSIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsIm5hbWUiLCJqb2luIiwiYXBwZW5kQ2xhc3NOYW1lIiwiYmFzZUNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVNBLGVBQVQsQ0FBeUJDLFlBQXpCLEVBQXVDO0FBQ3JDLE1BQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFlBQWQsQ0FBTCxFQUFrQyxPQUFPQSxZQUFQO0FBRWxDLFNBQU9BLFlBQVksQ0FBQ0csTUFBYixDQUFvQixVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSjtBQUFBLEdBQXhCLEVBQWtDQyxJQUFsQyxDQUF1QyxHQUF2QyxDQUFQO0FBQ0Q7O0FBRWMsU0FBU0MsZUFBVCxDQUF5QkMsYUFBekIsRUFBd0NQLFlBQXhDLEVBQXNEO0FBQ25FLE1BQUksQ0FBQ0EsWUFBTCxFQUFtQixPQUFPTyxhQUFhLElBQUksRUFBeEI7QUFDbkIsTUFBSSxDQUFDQSxhQUFMLEVBQW9CLE9BQU9SLGVBQWUsQ0FBQ0MsWUFBRCxDQUFmLElBQWlDLEVBQXhDO0FBQ3BCLG1CQUFVTyxhQUFWLGNBQTJCUixlQUFlLENBQUNDLFlBQUQsQ0FBMUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldE5ld0NsYXNzTmFtZShuZXdDbGFzc05hbWUpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG5ld0NsYXNzTmFtZSkpIHJldHVybiBuZXdDbGFzc05hbWU7XG5cbiAgcmV0dXJuIG5ld0NsYXNzTmFtZS5maWx0ZXIobmFtZSA9PiBuYW1lKS5qb2luKFwiIFwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lKGJhc2VDbGFzc05hbWUsIG5ld0NsYXNzTmFtZSkge1xuICBpZiAoIW5ld0NsYXNzTmFtZSkgcmV0dXJuIGJhc2VDbGFzc05hbWUgfHwgXCJcIjtcbiAgaWYgKCFiYXNlQ2xhc3NOYW1lKSByZXR1cm4gZ2V0TmV3Q2xhc3NOYW1lKG5ld0NsYXNzTmFtZSkgfHwgXCJcIjtcbiAgcmV0dXJuIGAke2Jhc2VDbGFzc05hbWV9ICR7Z2V0TmV3Q2xhc3NOYW1lKG5ld0NsYXNzTmFtZSl9YDtcbn1cbiJdfQ==