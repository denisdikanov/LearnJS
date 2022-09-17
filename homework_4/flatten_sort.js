"use strict";

function flattenAndSort(array) {
  return array.flat(1).sort((a, b) => a - b);
}

---
xD
---

"use strict";

function flattenAndSort(array) {
  let result = [];
  (function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) flat(el);
      else result.push(el);
    });
  })(array);
  return result.sort((a, b) => a - b);
}
