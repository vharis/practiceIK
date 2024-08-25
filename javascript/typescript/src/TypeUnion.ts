type Addable = number|string // Type Alias
function add(arg1:Addable, arg2:Addable): Addable {
   
    let c: Addable;
    if (typeof arg1 ==='number' && typeof arg2 ==='number' ) {
        return arg1+arg2;
    }
    if (typeof arg1 ==='string' && typeof arg2 ==='string' ) {
        return arg1+arg2;
    }
    return;
}

const a1 = "Hello"
const b1 = "World!"
console.log(add(a1+b1));


const a2 = 10
const b2 = 20
console.log(add(a2+b2));
