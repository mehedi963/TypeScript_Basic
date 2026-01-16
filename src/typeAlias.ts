//Type Alias
type User={
    id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'male' | 'female',
    contact : string
    address:{
        division: string,
        city:string,
    };
} // same type code bar bar likha lagbe na

const user1: User = {
    id:1001,
    name: {
        firstName: "Mr.",
        lastName: "X"
    },
    gender: "male",
    contact: "0199",
    address:{
        division:"Dk",
        city:"mirpur",
    }
}


const user2: User = {
    id:1002,
    name: {
        firstName: "Mr.",
        lastName: "Y"
    },
    gender: "female",
    contact: "01777",
    address:{
        division:"RJ",
        city:"binotpur",
    }
}

console.log(user1,user2)

//For function
type AddFunc = (n1:number, n2:number) => number

const add : AddFunc = (n1,n2) => n1+n2