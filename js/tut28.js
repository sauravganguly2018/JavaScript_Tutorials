console.log("This is tutorial 28");

// Object literal : Object.prototype
let obj={
    name:"saurav",
    channel:"codewithsaurav",
    address:"Bihar Sharif"
}
console.log(obj);

function obj1(givenName){
    this.name=givenName;
}

obj2=new obj1("kundan");
obj1.prototype.getName=function(){
    return this.name;
}
console.log(obj2);
console.log(obj2.getName());

obj1.prototype.setName=function(givenName){
    this.name=givenName;
}
obj2.setName("gunjan");
console.log(obj2);
