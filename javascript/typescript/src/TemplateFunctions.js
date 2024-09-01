// not a good practicde to use any.. let us use templates
// function firstElement(arr: any[]) {
// return arr[0]
// }
function firstElement(arr) {
    // function firstElement<T>(arr: T[]) { 
    return arr[0];
}
// arra
var arr1 = [1, 2, 3];
console.log(firstElement(arr1));
var arr2 = ["one", "two", "three"];
console.log(firstElement(arr2));
function map(arr, func) {
    return arr.map(func);
}
var arr4 = ['1', '2', '3'];
var r1 = map(arr4, function (s) { return parseInt(s); });
console.log(r1);
