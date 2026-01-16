//Generics Typescript => dynamically generalize kora

type Generics<T> =Array<T>;

//const friends : string[] = ["MR.X", "MR.Y","MR.Z"];
const friends : Generics<string> = ["MR.X", "MR.Y","MR.Z"];

//const rollNumber : number[] = [2,3,4];
const rollNumber : Generics<number> = [2,3,4];

//const isEligibles : boolean[] = [true,false,true];
const isEligibles : Generics<boolean> = [true,false,true];

//Example
type Cordinate<T> = Array<T>;
const cordinate1 : Cordinate<number> = [2,3,4];
const cordinate2 : Cordinate<string> = ['MRB','MRC',"MRH"];


//Objects r jonno generics ===>> Array of Object korbo

type User = {name:string, age:number};
const userList : Generics<User> = [
    {
        name: "Mr.X",
        age : 34
    },
    {
        name: "Mr.B",
        age : 23,
    }
]