// Type Conversion 
console.log("welcome to tut5");

let myvar=String(35);
console.log(myvar,typeof (myvar));

let boolvar=String(true);
console.log(boolvar,typeof(boolvar));

let date=new Date();
console.log(date,typeof(date));

let arr=String([1,2,3,4,5,6]);
console.log(arr.length,typeof(arr));

let i=34;
console.log(i.toString());

let str1=Number("657");
str1=Number(true);
str1=Number("7634h76");
str1=Number([1,2,3,4,5,6,7,8]);
console.log(str1,typeof(str1));

let number=Number("67.878");
number=parseInt("67.878");
number=parseFloat("67.878");
console.log(number,typeof(number));
console.log(number.toFixed(),typeof(number));
console.log(number.toFixed(5),typeof(number));

// Type Coercion

let mystr1=Number("786");
let mystr2=67;
console.log(mystr1+mystr2);
