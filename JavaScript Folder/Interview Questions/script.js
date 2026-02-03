// //Reverse array without using reverse() method
// let arr=[1,2,3,4,5,6];

// let s=0,e=arr.length-1;

// while(s<=e){
//     let temp=arr[s];
//     arr[s]=arr[e];
//     arr[e]=temp;
//     s++;
//     e--;
// }

// console.log(arr);


//Find unique element in an array

let arr = [1, 2, 3, 2, 4, 1, 5];

// let uniqueArr = arr.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(uniqueArr);

let uniqueArr=arr.filter((currElement,index)=>{
    return arr.indexOf(currElement)!=index;
})
console.log(uniqueArr);