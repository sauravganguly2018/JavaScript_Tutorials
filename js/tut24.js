console.log("Welcome to tutorial 24");
let today=new Date();
console.log(today);

let otherDate=new Date('08-30-2021 9:19:00');
// otherDate=new Date('October 22 2000');
// otherDate=new Date('10/22/2000');
console.log(otherDate);
let a;
a=otherDate.getDay();
a=otherDate.getDate();
a=otherDate.getFullYear();
a=otherDate.getMonth();
a=otherDate.getHours();
a=otherDate.getMinutes();
a=otherDate.getSeconds();
a=otherDate.getTime();
a=otherDate.getMilliseconds();
console.log(a);

otherDate.setDate(23);
otherDate.setFullYear(2003);
otherDate.setMonth(10);
otherDate.setHours(10);
otherDate.setMinutes(32);
otherDate.setSeconds(44);
console.log(otherDate);


