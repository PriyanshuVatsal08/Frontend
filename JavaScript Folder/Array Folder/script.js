//Create array
let arr=[1,2,3,4,5,6];
let fruits=new Array("Apple","Banana","Orange","Papaya");

//Accessing element
console.log(arr[4]); //5
console.log(fruits[2]); //Orange

//Modify the array
arr[4]=10;
console.log(arr[4]); //10

fruits[2]="Strawberry";
console.log(fruits[2]); // Strawberry

//Traversal

//for-of -loop:- iterate over values of an array (or any iterable) not index

for(let element of arr){
    console.log(element);
}

//for-in loop:- iterate over index of an array not value;
for(let fruit in fruits){
    console.log(fruit);
}

//forEach 

arr.forEach((currElement,index,arr)=>{
    console.log(`Index => ${index} && Value => ${currElement}`);
    console.log(arr);
});

//map

fruits.map((currElement,index)=>{
    console.log(`${currElement}`);
});

//return new array 
let fruitsName=fruits.map((currElement,index)=>{
    return `My favorite fruit is ${currElement}`;
});

// // console.log(fruitsName);

// return arrya with multiple by 2 each element
let multiply=arr.map((currElement)=>{
    return currElement*2;
});

console.log(multiply);


//CRUD operation in array

//1). Inserction in END and FRONT

let num=[2,3,4,5];
num.push(6);
num.unshift(1);
for(let nums of num){
    console.log("After"+nums);
}

//2). Remove from END and FRONT

num.pop();
num.shift();
for(let nums of num){
    console.log(nums);
}

//3). Add and remove in between array
 num.splice(1,2,10,20,30);
 console.log(num);


//todo challenge

let month=["Jan","Feb","Mar","April","June"];

// Q2
console.log(month.splice(month.length,0,"Dec"));
// Q1
console.log(month)
// Q3
let indexToUpdate=month.indexOf("Mar");
month.splice(indexToUpdate,1,"March");
console.log(month);
// Q4
let indexToDelete=month.indexOf("June");
month.splice(indexToDelete,1);
console.log(month);

//find
console.log(month.find("June"));

let arr=[1,2,3,4,5,4,6,4,3];
let value=4;

let result=arr.findIndex((currElement)=>{
    return currElement>4;
})

console.log(result);

let myFilter=arr.filter((currElement,index)=>{
    return currElement==value;
});

// console.log(myFilter);
arr.sort((a,b)=>a-b);
console.log(arr);


//Ques:- Using the map method, write a function that takes an array of numbers and return a new array where each number is squared, but only if it's an even number


let number=[1,2,3,4,5];

let newArray=number.map((currElement)=>{
    if(currElement %2 ==0){
        return currElement*currElement;
    }
}).filter((currElement)=> currElement!=undefined);


console.log(newArray);


//reduce method

let countBag=[100,50,30,20,30];

let sum=countBag.reduce((acc,currElement)=>{
    return acc+currElement;
},0);

console.log(sum);


