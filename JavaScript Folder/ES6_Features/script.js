// //let and const

try {
    console.log(age);
} catch (error) {
    console.log(error);
}
let age=23;

// //Default function & Arrow function
let sum=(a,b=10)=>{
    return a+b
}

console.log(sum(15));


//Template string
let myName="Priyanshu Vatsal";

console.log(`Hello ${myName}, Who are you?`);


