let globalCount = 15;

function demonsstrateLocalScope(){
    let localCount= 5;
    console.log("Inside local scope, localCount",localCount);
    console.log("Inside local scope, globalCount",globalCount);
}

function modifyVariables(){
    let localCount =2;
    globalCount +=1 ;
    localCount += 3;

    console.log("Modified globalCount:", globalCount);
    console.log("Modified localCount (local to this function):", localCount);

}

function Student(name,age,course){
    this.name = name;
    this.age = age;
    this.course = course;
    this.displayInfo = function(){
        console.log('${this.name}is ${this.age}years old and studying ${this.course}.');
    };
}
const student1 = new Student("Asiphe",26,"ICT in Applications Development");
const student2 = new Student("Mandi",23,"Business Management");
const student3 = new Student("Asiphe",26,"Analytical Chemistry");
const student4 = new Student("Asiphe",26,"Btech in Higher Education");

const classroom =  {
    name: "Software Development Class 1",
    lecturer : "Dr. Oki",
    student : [student1,student2,student3,student4],
    schedule:{
        day:"Monday",
        time: "09:30 AM",
        room: "Lab 3A"
    }
};

console.log("/n=== Student Objects ===");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();
student4.displayInfo();

console.log("/n=== Classroom Objject ===");

console.log(classroom);