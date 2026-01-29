//Normal function

function sum(a,b){
    return a+b;
}

console.log("Normal function => "+sum(10,30));

//Expression function
//! A function which is store in variable
var result=function sum1(a,b){
    return a+b;
}

console.log("Expression function => "+sum(10,50));

//Anonymous Function
//! A function without name
var result1=function(a,b){
    return a+b;
}

console.log("Anonymous Function => "+result1(10,30));

//IIFE Function
//a function that run immediately after it is defined
var result2=(function(a,b){
    return a+b;
})(10,20);

console.log("IIFE Function => "+result2);