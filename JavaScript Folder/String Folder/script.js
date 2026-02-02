// console.log(`Hello I am "Priyanshu Vatsal", 'full stack devloper' `)

//Case conversion
let str="Hello World World";
console.log(str.toLowerCase());

//Searching Method

//1). includes();
console.log(str.includes("Hello"));

//2). indexOf();
console.log(str.indexOf("World"));

//3). lastIndexOf();
console.log(str.lastIndexOf("World"));

let pair=str.slice(1,7);
console.log(pair);
console.log(str);

console.log(str.replaceAll("World","Sansar"));


//repeat()
console.log("ha".repeat(3));

const myName="Hello I am, Priyanshu vatsal Hello";
console.log(myName.substring(0));
console.log(myName.substring(1));
console.log(myName.substring(-5));

console.log(myName.slice(1));
console.log(myName.replaceAll("H"," "));
console.log(myName.substring(1));