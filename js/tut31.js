console.log("This is tutorial 31");

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this is the best company`;
    }

    joiningYear(){
        return (2021-this.experience);
    }
    
    static add(a,b){
        return a+b;
    }
}

person1=new Employee("saurav",10,"programmer");
console.log(person1);
console.log(person1.joiningYear());
console.log(Employee.add(3,8));


class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,givenLanguage,givenGithub){
        super(givenName,givenExperience,givenDivision);
        this.language=givenLanguage;
        this.github=givenGithub;
    }
    favouriteLanguage(){
        if(this.language=='python'){
            return 'python';
        }
        else{
            return 'JavaScript';
        }
    }
    static multiply(a,b){
        return (a*b);
    }
}

person2=new Programmer("kundan",15,"Web-Developer",'PHP','kundan1997');
console.log(person2);
console.log(person2.joiningYear());
console.log(person2.favouriteLanguage());
console.log(Programmer.add(5,7));
console.log(Programmer.multiply(5,7));
