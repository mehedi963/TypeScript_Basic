//key of operator : akta type opetator  jeta akta type opor kaj korbe

type RichPeopleVehecles = {
    car : string,  //key : value
    bike:string,
    cng : string,
}

type MyVehicles = "bike" | "car" | "cng";
type MyVehicles1 = keyof RichPeopleVehecles;

const myVe : MyVehicles1 = "car"; 

//Key Of Constrain 

type User = {
    id : string,
    name  : string,
    address : {
        city : string,
    }
}
const user : User = {
    id: "123",
    name : "hasan",
    address : {
        city : "cng",
    },
};

//const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const myAddress = user["address"];

// console.log(myId, myAddress,myName)

const getPopertyFromObj =<X> (obj:X, key : keyof X) =>{
    return obj[key];
}

// const result = getPopertyFromObj(user, "emni")
// console.log(result);

const product = {
    brand : "HP",
};
const student = {
    isAdult : true,
    class : 4,
}
const result2 = getPopertyFromObj(product, "brand")
console.log(result2);
const student1 = getPopertyFromObj (student, "isAdult");
console.log(student1);
