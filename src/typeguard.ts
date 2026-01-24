//Type Guard

// typeof diye type guard

const add = (n1: number | string, n2:number | string) =>{
    if(typeof n1=== 'number' && typeof n2=== "number"){
        return n1+n2;
    }
    else{
       return n1.toString()+n2.toString();
    }
}

console.log(add(2,3))  //5
console.log(add('2', 3)) //23
console.log(add(2, '5')) //25


//In guard

type NormalUser = {
    name : string;
};

type AdmineUser = {
    name : string;
    role: "Admin";
};

const getUserInfo = (user : NormalUser | AdmineUser) =>{
    if('role' in user){
        console.log(`${user.name} and his role is ${user.role}`);
    }
    else{
        console.log(`${user.name}`)
    }

}

getUserInfo({name : "Nazal", role: "Admin"})