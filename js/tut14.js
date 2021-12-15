console.log("Welcome to tutorial 14");

/*
element selectors
1. Single element selectors
2. Multi element selectors

*/

// Single element selector
let element=document.getElementById("heading");
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
element.style.color="red";
element.innerText="Welcome to my group";
element.innerHTML="<b>Hello Friends ! </b>";
// console.log(element);
// console.log(element.innerText);

let sel=document.querySelector('#heading');
sel=document.querySelector(".child");
sel=document.querySelector("b");
sel=document.querySelector("div");
sel.style.color="green";
// console.log(sel);

// Multi element selector
let elem=document.getElementsByClassName("child");
elem=document.getElementsByClassName("container");
elem=document.getElementsByTagName("div");

for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    console.log(element);
    element.style.color="orange";
}

// Array.from(elem).forEach(function(element){
//     console.log(element);
//     element.style.color="blue";
// })

console.log(elem);
// console.log(elem[0].getElementsByClassName("child"));