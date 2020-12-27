class Parent{
    constructor(){
        this.fatherName = "Alauddin";
    }
}

class Child extends Parent{
    constructor(name){
        super()
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Alamin");
console.log(baby.getFullName());
const baby2 = new Child("Ebrahim");
console.log(baby2.getFullName());
const baby3 = new Child("Esmaile");
console.log(baby3.getFullName());