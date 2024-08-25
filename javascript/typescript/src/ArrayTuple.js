// Array is of any size..
var arr = [10, 20, 30, 40];
console.log(typeof arr);
arr.forEach(function (a) { console.log(a); });
console.log("Tuple Example");
// Tuple is fixed lenth
var printTpl = function (tpl) {
    console.log(tpl[0]);
    console.log(tpl[1]);
    console.log(tpl[2]);
};
var tpl = [3, 4, "hello world!"];
printTpl(tpl);
