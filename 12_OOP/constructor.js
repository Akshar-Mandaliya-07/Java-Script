class student
{
    constructor(id , name , marks)
    {
        this.id = id
        this.name = name
        this.marks = marks
    }

    display()
    {
        console.log("Id is " , this.id);
        console.log("Name is  " , this.name);
        console.log("Marks is " , this.marks);
    }
}

let student1 = new student(1,"Akshar",100.00)
let student2 = new student(2,"Om",99.99)
student1.display()
student2.display()