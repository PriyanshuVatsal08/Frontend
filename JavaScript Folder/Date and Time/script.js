// Get date and time
// let d=new Date();
// console.log(d);
// console.log(d.getFullYear());
// console.log(d.getHours()+" "+d.getMinutes()+" "+d.getSeconds());

// // Set date and time
// let d=new Date();
// d.setDate(5);
// console.log(d);

// d.setFullYear(2028);
// console.log(d);

// toLocalString
// let d=new Date();
// console.log(d.toLocaleString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());


// //Ques:- Add date in alreday given date
// const addDate=(date,extraDay)=>{
//     let x=date.setDate(date.getDate() + extraDay);
//     return new Date(x);
// }
// let date=new Date("2024-02-29");
// console.log(addDate(date,7).toLocaleString());


// // Ques :- Print a line for 1 min and stop after that

// function print() {
//    console.log("Function call after every 1 sec");
// }

// let id=setInterval(print, 1000);

// setTimeout(() => {
//    clearInterval(id);
// }, 5000);


function createTimer(){
   let time=new Date().toLocaleTimeString();
   let timerDiv=document.querySelector("#timeDiv");
   timerDiv.innerText=time;
}

let intervelId=setInterval(createTimer,1000);