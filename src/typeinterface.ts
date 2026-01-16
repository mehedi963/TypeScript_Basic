//type Interface
//interface only useable : object type : array, object, function
interface IUser {
    name : string;
    age : number
}

type User ={
    name : string;
    age : number;
}

type Role = {
    role : "admin" | "user" ;
};

type userWithRole = User & Role;

const user1 : userWithRole = {
    name : "Mr.X",
    age : 23,
    role : "admin"
};

const user2 : User = {
    name : "Mr.Y",
    age : 24
}


// [index : number] : string  =>> aita diye bujay je index dula number 
type Friends = string[];
//const friends : Friends = ['A','B,','C','D'];
//                        [ 0   1    2   3 ]  
interface IFriend {
    [index : number] : string
}
const friends : IFriend = ['A','B,','C','D'];


//Function
type Add = (n1:number, n2:number) =>number

interface IAdd {
    (n1:number, n2:number) : number
}

const add : IAdd = (n1,n2) => n1+n2; 