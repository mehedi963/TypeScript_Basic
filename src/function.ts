// Function
//Arrow function

function addNormal(nub1 : number, nub2: number) : number{
    return nub1+nub2;
}

addNormal(2,2) //Here are the error for provide string '2' Solution addNormal(2,2)

//Arrow function

const addArrow = (n1:number,n2:number) =>{
    return n1+ n2;
}
console.log(addArrow(30,2)) ; //Here are the error for provide string '2' Solution addArrow(2,2)

//Object => function => method

const poorUser = {
    name : 'Mehedi',
    balance : 200,
    addBalance(value: number):number{
        const totalBalance = value + this.balance;
        return totalBalance;
    }
}

console.log(poorUser.addBalance(3444));

//call back function
//loop =>function
const arr:number[]=[1,2,3];
const squreArray= arr.map((ele:number):number=>ele*ele);
console.log(squreArray);

