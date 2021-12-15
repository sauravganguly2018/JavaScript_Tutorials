console.log("This is tutorial 30");

const proto={
    slogan:function(){
        return `Welcome to my house`;
    },
    changeName:function(setName){
          this.name=setName
    }
}

/*
//This creates person object
let person=Object.create(proto);
person.name="saurav";
person.standard="high";
*/

// This also creates person object
let person=Object.create(proto,{
    name:{value:"saurav",writable:true},
    standard:{value:"high"}
})

person.changeName("kundan");
person.class=14;
console.log(person);

// Employee Constructor

function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

// Slogan
Employee.prototype.slogan=function(){
    return `This company is the best, Regards, ${this.name}`;
}

let person2=new Employee("ranjan",40000,5);
console.log(person2);
console.log(person2.slogan());

// Programmer
function programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language=language;
}

// Inherit the prototype
programmer.prototype=Object.create(Employee.prototype);
// Manually set te constructor
programmer.prototype.constructor=programmer;
let person3=new programmer("rakesh",200000,23,"PHP");
console.log(person3);
console.log(person3.slogan());