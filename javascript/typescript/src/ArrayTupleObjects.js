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
var StudentEnum;
(function (StudentEnum) {
    StudentEnum[StudentEnum["Maths"] = 0] = "Maths";
    StudentEnum[StudentEnum["Physics"] = 1] = "Physics";
    StudentEnum[StudentEnum["Chemistry"] = 2] = "Chemistry";
})(StudentEnum || (StudentEnum = {}));
// interface StudentAlias = StudentType| StudentInterface | StudentInterfaceExtended  // explore why it is not working
// interface StudentInterfaceAlias = StudentInterface | StudentInterfaceExtended  // explore why it is not working
// Note : for union use interfaces and for interfact use type
// const printUser = (stdnt: StudentType) => {
var printStudent = function (student) {
    console.log('\n student ->', student);
    console.log('type of student ->', typeof student);
};
var studentIntfExt = {
    name: 'Hari',
    age: 24,
    courses: ['Sports', 'Politics', 'Arts'],
    email: "a@a.com",
    rollNumber: 2322,
};
printStudent(studentIntfExt);
var studentIntf = {
    name: 'Prasd',
    age: 45,
    courses: ['Sports', 'Politics', 'Arts'],
};
printStudent(studentIntf);
var student = {
    name: 'Hari',
    age: 24,
    stdType: StudentEnum.Chemistry
};
printStudent(student);
