console.log("This is tut 20");
// window.localStorage

let imp=["hello","good morning","sir"];

// Add a key value pair inside local storage
// localStorage.setItem('name','saurav');
localStorage.setItem('name',JSON.stringify(imp));
// localStorage.name
// tyoeof localStorage ->object
localStorage.setItem('name2','kundan');
// Clears the entire localStorage
// localStorage.clear();

// Clear a particular key value pair
localStorage.removeItem('name2');

// Retrieve an Item from the local Storage
let name=localStorage.getItem('name');
name=JSON.parse(localStorage.getItem('name'));
console.log( name);

sessionStorage.setItem('sessionname',JSON.stringify(imp));
sessionStorage.setItem('sessionname2','skundan');

let names=JSON.parse(sessionStorage.getItem('sessionname'));
console.log(names);