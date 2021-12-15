console.log("We are in tut7.js and let's discuss about arrays");

let arr=[1,2,3,4];
const fruits=["apple","mango","pear","watermelon"];
const mixed=["jack",1,2,7,[3,4,"kundan"]];
const arr1=new Array(23,67,89,"hello");
console.log(arr);
console.log(fruits);
console.log(mixed);
console.log(arr1);

console.log(fruits.length);
console.log(Array.isArray(fruits));
console.log(Array.isArray("dfg"));
arr1[0]="saurav";
console.log(arr1);

let index=arr.indexOf(3);
console.log(index);

// Mutating or modifying arrays
// arr.push(9);
// arr.unshift(9);
// arr.pop()
// arr.shift();
// arr.splice(1,2)
// arr.reverse();
arr=arr.concat(fruits);
console.log(arr);

let myobj={
    'first name':"saurav",
    channel:"codewithsaurav",
    isActive:true,
    marks:[1,2,3,4,5]
}

console.log(myobj);
console.log(myobj.marks);
console.log(myobj['marks']);
console.log(myobj['first name']);
