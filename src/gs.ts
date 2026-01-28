//getter 
// setter

class BankAccount {
   public readonly userId : number;
   public userName : string;
   private userBalance : number;

   constructor(userId : number, userName : string, userBalance : number){
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
   }

//  addBalance(balance : number){
//     this.userBalance = this.userBalance + balance;
//  }

//setter use kore korbo
   set addBalance(amount : number){
      this.userBalance= this.userBalance + amount;
   }

   //getter use korbo
   get getBalance(){
     return this.userBalance;
   }


 //get 
//  getBalance(){
//    return this.userBalance;
//  }

}

const mjAccount = new BankAccount ( 111, "MX", 20);
// mjAccount.addBalance(100);
// mjAccount.addBalance(20);
// console.log(mjAccount.getBalance()); //fuction call korte hosce


//getter & setter use korar por
mjAccount.addBalance = 100;
mjAccount.addBalance = 200;
console.log(mjAccount)