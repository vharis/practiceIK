console.log("Array Example");
// Array is of any size..
var arr = [10, 20, 30, 40];
console.log(typeof arr);
if (arr[0] !== undefined && typeof arr[0] === 'number') {
    console.log('The first value of array Element=', arr[0]);
}
arr.forEach(function (a) { console.log(a); });
// Tuple is fixed lenth
console.log("Printing tuple example");
var printTpl = function (tpl) {
    console.log(tpl[0]);
    console.log(tpl[1]);
    console.log(tpl[2]);
};
var tpl = [3, 4, "hello world!"];
printTpl(tpl);
// objects:
console.log("Object Example");
// type UserType: StudentType | StudentInterface | StudentInterfaceExtended  // explore
// const printUser = (stdnt: StudentType) => {
var printStudent = function (student) {
    console.log('\n student ->', student);
    console.log('type of student ->', typeof student);
};
var studentIntfExt = {
    name: 'Hari',
    age: 24,
    courses: ['maths', 'physics', 'Chemistry'],
    email: "a@a.com",
    rollNumber: 2322,
};
printStudent(studentIntfExt);
var studentIntf = {
    name: 'Prasd',
    age: 45,
    courses: ['maths', 'physics', 'Chemistry'],
};
printStudent(studentIntf);
var student = {
    name: 'Hari',
    age: 24,
    stdType: "Maths"
};
printStudent(student);
