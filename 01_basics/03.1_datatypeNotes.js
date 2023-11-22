// Primitive

// 7 Types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const anotherScore = 100.3;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigInt = 9147639746; 


// Reference (Non primitive)
// Arrays, Objects, Functions

// In order to master JavaScript, master Objects and Browser's web events 



// Stack(Primitive) and Heap(Non-primitive) Datatype

let myInstagram = "Rishit_Singh_negi";
let anotherName = myInstagram;
anotherName = "Rishy_negi";

// console.log(myInstagram);
// console.log(anotherName);

// In Primitive datatype(Stack), a copy is created for different variables and on changing the values of other variables, no changes are made in the original data.

let userOne = {
    email: "rishy@gmail.com",
    upi: "userOne@ybl"
}

let userTwo = userOne;

userTwo.email = "rishit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// In Non-primitive/Reference datatype(Heap), reference of the original data is given. Therefore, any changes that are made will change the original data.

