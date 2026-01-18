//enum ==>> set of fixed string leteral ak jagay rakhe

// type UserRole = "admin" | "editor" | " viewer" ;

// const canEdit = (role : UserRole) => {
//     if( role === "admin" || role === "editor"){
//         return true;
//     }
//     else return false
// }
// const isPermissonable = canEdit ("admin");
// console.log(isPermissonable);

//Use Enum
enum UserRole  {
    Admin = "admin",
    Editor = "editor",
    Viewer = "viewer",
}
const canEdit = (role : UserRole) => {
    if( role === UserRole.Admin || role === "editor"){
        return true;
    }
    else return false
}
const isPermissonable = canEdit (UserRole.Admin);
console.log(isPermissonable);