// not a good practicde to use any.. let us use templates
    // function firstElement(arr: any[]) {
    // return arr[0]
    // }

    function firstElement<Type>(arr: Type[]) { 
    // function firstElement<T>(arr: T[]) { 
        return arr[0]
        }

// arra
const arr1= [1,2,3];
   console.log( firstElement(arr1));

const arr2= ["one","two","three"];
   console.log( firstElement(arr2));


function map<Input, Output>(arr:Input[], func:(arg: Input)=>Output){
    return arr.map(func);
}

const arr4= ['1','2','3'];
const r1 = map(arr4, (s) => parseInt(s))

 console.log( r1);

// creat an arrow function that takes a number and returns a number
// create a function that takes a string and returns a number
// create a function that takes a number and returns a string