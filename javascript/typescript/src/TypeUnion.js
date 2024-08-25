function add(arg1, arg2) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }
    return;
}
var a1 = "Hello";
var b1 = "World!";
console.log(add(a1 + b1));
var a2 = 10;
var b2 = 20;
console.log(add(a2 + b2));
