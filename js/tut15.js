console.log("Welcome to tutorial 15");

let cont=document.querySelector(".no");
cont=document.querySelector(".container");
// cont=cont.childNodes;
// cont=cont.children;
let nodeName=cont.childNodes[11].nodeName;
let nodeType=cont.childNodes[11].nodeType;
// console.log(cont);
console.log(nodeName);
console.log(nodeType);

// Node Types
// 1. Element 
// 2. Attributes
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

let container=document.querySelector('.container');
// container=container.children[1].children[0].children;
// container=container.childNodes[0];
// container=container.firstChild;
// container=container.children[0];
// container=container.firstElementChild;
// container=container.firstElementChild.parentNode;

// container=container.lastChild;
// container=container.lastElementChild;
// container=container.childElementCount;
// container=container.firstElementChild.nextSibling;
// container=container.firstElementChild.nextElementSibling;
container=container.firstElementChild.nextElementSibling.nextElementSibling;
console.log(container);