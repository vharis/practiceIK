"use strict";
function firstElement(arr) {
    return arr[0];
}
const arr1 = [1, 2, 3];
console.log(firstElement(arr1));
const arr2 = ["one", "two", "three"];
console.log(firstElement(arr2));
function map(arr, func) {
    return arr.map(func);
}
const arr4 = ['1', '2', '3'];
const r1 = map(arr4, (s) => parseInt(s));
console.log(r1);
//# sourceMappingURL=TemplateFunctions.js.map