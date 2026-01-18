//Constrain ==>> Kno akta rules k enfource kora (strict rule deya)

type studentMustHave = { 
    id: number; name: string; dateOfBrith : string;
};

const addStudentToCourse = <T extends studentMustHave> (studentInfo : T) => {
    return {
        course : "Next Level",
        ...studentInfo,
    };
};


const student1 = {
    id: 123,
    name : "mezba",
    hasPen : true,
};

const student2 = {
    id: 321,
    name : "Mahbub",
   hasCar :  true,
   isMarried : true,
   dateOfBrith : "01/02/2025"
}

const student3 = {
    id: 333,
    name : "asssa",
    dateOfBirth : "02/04/1094",
    hasWatch : true,
    
}

const result = addStudentToCourse(student2);
console.log(result)