class Student{
    constructor(id, sname){
        this.id = id;
        this.sname = sname;
        this.name = "Sadasadi ML High School";
    }
}

const student1 = new Student(10, "Alamin");
const student2 = new Student(12, "Tanvir");
const student3 = new Student(15, "Endika");
console.log(student1, student2, student3);