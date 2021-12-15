console.log("welcome to tutorial 16");
let element=document.createElement('li');
element.className='childui';
element.setAttribute('title','mytitle');
let text=document.createTextNode('This is a text node');
element.appendChild(text);
// element.innerText="Hello I am Ganguly";
let ca=document.querySelector('.this');
ca.appendChild(element);
console.log(ca);
console.log(element);

let elem2=document.createElement('h2');
elem2.className="saurav";
elem2.id="kundan";
let text2=document.createTextNode('hello google!');
elem2.appendChild(text2);
element.replaceWith(elem2);

console.log(elem2);

let new1=document.getElementById('thi');
new1.replaceChild(element,document.getElementById('fli'));
new1.removeChild(document.getElementById('lli'));
console.log(new1);

// let pr=elem2.getAttribute('id');
let pr=elem2.hasAttribute('id');
elem2.removeAttribute('class');
elem2.setAttribute('title','myelem2title');
console.log(elem2,pr);

// Quick Quiz
// create a heading element with text as "Go to CodeWithHarry"
// and create a tag outside it with 
// href="https://codewithharry.com"

let tag1=document.createElement('h2');
tag1.className="saurav";
tag1.id="gunjan";
let ar1=document.createElement('a');
ar1.setAttribute('href','//codewithharry.com');
ar1.innerText="Go to CodeWithHarry";
tag1.appendChild(ar1);
new1.appendChild(tag1);
console.log(tag1);
