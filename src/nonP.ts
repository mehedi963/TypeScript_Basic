//array , object

let bazerList = ['eggs', 'milk', 'suger'];
console.log(bazerList)

let mixedArr : (string | number )[] = ['moyda', 13, 'roti', 'biriyani']
mixedArr.push(45);


//tuple
let coordinates : [number, number] = [20,30]

//reference
const user : {
    organization : string;
    firstName : string;
    middleName? : string; // optional type
    lastName : string;
    isMarried? : boolean
} = {
    firstName : 'Mehedi',
    middleName : "hasan",
    lastName : "Munna",
    isMarried : true,
    organization : "Programming"
}

user.organization = "Next Level"
console.log(user)

