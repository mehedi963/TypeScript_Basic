//spread operator
const friend = ["rohim", "korim"]
const schoolFd = ["Mitu", "ritu"]
const collegeFd = ['Mr.tom', "Mr.ratul", "Mr.alom"]

friend.push(...schoolFd);
console.log(friend);

//Object => spread

const user= {
    name : "Jodu",
    phone: "0020324829832"
}

const otherInfo ={
    address : "Sonali Para",
    road: "kolki"
}

const userInfo = {...user, ...otherInfo}
console.log(userInfo)

//Rest operator
// const sentInvitation = (fd1:string, fd2:string, fd3:string) =>{
//     const friends = [fd1,fd2,fd3];
//     friends.map((value:string)=> console.log(`Sent Invetation to ${value}`))
// }
// sentInvitation("Rahim", "Karim", "Sajib"); //This code has limite for string fd if we add more than code not work solution this plb use foreach loop

const sendInvite=(...friends:string[]) =>{
    friends.forEach((fd:string)=> console.log(`Sent Invitation ${fd}`))
}

sendInvite("Rahim", "Karim", "Sajib","Mehedi")