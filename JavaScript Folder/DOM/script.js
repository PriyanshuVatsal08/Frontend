// Access

let ele1=document.getElementById('f_div');
let ele2=document.getElementsByClassName('first_Div');
let ele3=document.getElementsByTagName('h1');
let ele4=document.querySelectorAll('.first_Div');

console.log(ele);

// Update exisiting element

console.log(ele[1].innerHTML);
ele[1].innerHTML="Bye Byee";

console.log(ele[0].textContent);
console.log(ele[0].innerText);

// Add element

// 1) Create Element
let newElement=document.createElement('h3');
newElement.textContent="I am new element";

document.getElementById('firstHeading').insertAdjacentElement('afterend',newElement);


// let parent=document.getElementById('s_id');
let child=document.getElementById('firstHeading');
const parent = child.parentElement;

parent.removeChild(child);


