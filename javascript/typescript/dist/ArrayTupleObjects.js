"use strict";
console.log("Array Example");
let arr = [10, 20, 30, 40];
console.log(typeof arr);
if (arr[0] !== undefined && typeof arr[0] === 'number') {
    console.log('The first value of array Element=', arr[0]);
}
arr.forEach(a => { console.log(a); });
console.log("Printing tuple example");
const printTpl = (tpl) => {
    console.log(tpl[0]);
    console.log(tpl[1]);
    console.log(tpl[2]);
};
let tpl = [3, 4, "hello world!"];
printTpl(tpl);
console.log("Object Example");
var StudentEnum;
(function (StudentEnum) {
    StudentEnum[StudentEnum["Maths"] = 0] = "Maths";
    StudentEnum[StudentEnum["Physics"] = 1] = "Physics";
    StudentEnum[StudentEnum["Chemistry"] = 2] = "Chemistry";
})(StudentEnum || (StudentEnum = {}));
const printStudent = (student) => {
    console.log('\n student ->', student);
    console.log('type of student ->', typeof student);
};
const studentIntfExt = {
    name: 'Hari',
    age: 24,
    courses: ['Sports', 'Politics', 'Arts'],
    email: "a@a.com",
    rollNumber: 2322,
};
printStudent(studentIntfExt);
const studentIntf = {
    name: 'Prasd',
    age: 45,
    courses: ['Sports', 'Politics', 'Arts'],
};
printStudent(studentIntf);
const student = {
    name: 'Hari',
    age: 24,
    stdType: StudentEnum.Chemistry
};
printStudent(student);
//# sourceMappingURL=ArrayTupleObjects.js.map