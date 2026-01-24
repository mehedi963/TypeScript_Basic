//OOP: Instance of type guard

class Person {
    name : string;

    constructor(name : string){
        this.name = name;
    }

    getSleep(numOfhours : number){
        console.log(`Everyday ${this.name} sleep ${numOfhours}hr`);
    }
}

class Studsent extends Person {
    constructor(name: string){
        super(name)
    }
    doStudy(numOfhours: number){
        console.log(`Everyday ${this.name} Study ${numOfhours}hr`);
    }
}
class Teacher extends Person {
    constructor(name: string){
        super(name)
    }
    getClasses(numOfhours: number){
        console.log(`Everyday ${this.name} get class ${numOfhours}hr`);
    }
}

//function guard
const isStudent = (user : Person) =>{
    return user instanceof Studsent;  // user is Student
}

const isTeacher = (user : Person) =>{
    return user instanceof Teacher;
}

//Ussing function guard 
const getUserInfo = (user : Person) =>{
    if(isStudent(user)){
        user.doStudy(8)
    } else if(isTeacher(user)){
        user.getClasses(5)
    }else{
        user.getSleep(13)
    }
}

//Normally
// const getUserInfo = (user : Person) =>{
//     if(user instanceof Studsent){
//         user.doStudy(8)
//     } else if(user instanceof Teacher){
//         user.getClasses(5)
//     }else{
//         user.getSleep(13)
//     }
// }

const student1 = new Studsent("Mr. Student");
const teacher1 = new Teacher("Mr.teacher");
getUserInfo(student1);

