console.log("we are at tut6");
const name="saurav";
const greeting="Good Morning";
console.log(greeting+" "+name);

let html;
html='<h1>This is heading</h1>'+
'<p>This is my PAra </p> ';
html=html.concat("hello","saurav");
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[0]);
console.log(html.indexOf("This"));
console.log(html.indexOf("djhjThis"));
console.log(html.lastIndexOf("This"));
console.log(html.charAt(9));
console.log(html.endsWith("saurav"));
console.log(html.includes("is"));
console.log(html.substring(0,5));
console.log(html.substring(-4));
console.log(html.slice(-4));
console.log(html.slice(0,5));
console.log(html.split(" "));
console.log(html.replace("This","That"));

let myname="saurav";
let veg1="brinjal";
let veg2="Lady's Finger";
let Html=`<h1>Hello </h1>
<p>This is my Website codewithsaurav</p>
<p>I like ${veg1} and ${veg2} so much</p>`;
document.body.innerHTML=Html;
console.log(Html);

