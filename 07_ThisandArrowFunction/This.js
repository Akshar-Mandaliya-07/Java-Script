// this keyword refers to the current context.
const MyObject = {
    id : 1,
    name : "Akshar",
    printName(){
        console.log(this.name);
        console.log(this);
    }
}
MyObject.printName()
MyObject.name = "Akshar Mandaliya"
MyObject.printName()