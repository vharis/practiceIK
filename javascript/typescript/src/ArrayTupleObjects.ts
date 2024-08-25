
console.log("Array Example");

// Array is of any size..
let arr: number[] = [10,20,30,40]

console.log( typeof arr)

if ( arr[0] !== undefined && typeof arr[0] === 'number') {
    console.log('The first value of array Element=', arr[0])

}
arr.forEach( a => { console.log(a)})


// Tuple is fixed lenth

console.log("Printing tuple example");
const printTpl = (tpl: [number, number,string]) => {
    console.log(tpl[0]);
    console.log(tpl[1]);
    console.log(tpl[2]);
}

let tpl: [number, number,string] = [3,4,"hello world!"];
printTpl( tpl);

// objects:
console.log("Object Example");

enum StudentEnum {
    Maths,
    Physics,
    Chemistry,
}

type StudentType = {
    name: string,
    age: number,
    stdType: StudentEnum
}

// interface can be extendable
interface StudentInterface {
    name: string,
    age: number,
    courses: string[],
}



interface StudentInterfaceExtended extends StudentInterface {
    email:string,
    rollNumber: number,
}

// interface StudentAlias = StudentType| StudentInterface | StudentInterfaceExtended  // explore why it is not working
// interface StudentInterfaceAlias = StudentInterface | StudentInterfaceExtended  // explore why it is not working
// Note : for union use interfaces and for interfact use type

// const printUser = (stdnt: StudentType) => {
    const printStudent = (student: StudentType | StudentInterface | StudentInterfaceExtended) => {
    console.log( '\n student ->', student);
    console.log( 'type of student ->', typeof student);
}
const studentIntfExt: StudentInterfaceExtended = {
    name: 'Hari',
    age: 24,
    courses: ['Sports', 'Politics', 'Arts'],
    email: "a@a.com",
    rollNumber: 2322,
}
printStudent(studentIntfExt)


const studentIntf: StudentInterface = {
    name: 'Prasd',
    age: 45,
    courses: ['Sports', 'Politics', 'Arts'],
}
printStudent(studentIntf)

const student: StudentType = {
    name: 'Hari',
    age: 24,
    stdType: StudentEnum.Chemistry
}
printStudent(student)


// exmple of intesection NOT union and use of Type:

type User = {
name:string,
age:number
}
type UserExt = {
    extend:string,
}

type UserExtAlias = User & UserExt