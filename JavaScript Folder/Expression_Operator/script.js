//Arithmetic operator

var a=5;
var b=3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log((a/b).toFixed(2));
console.log(a**b);

//Comparison operator
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);


//logical operator
if(a>b && b<a){
    console.log("true");
}else{
    console.log("false");
}

//ternary operator
var age=18;
 console.log(age>18 ? "Eligable" : "Not eligable");

//uniary operator
console.log("Before "+a);
console.log(a++);
console.log("After "+a);