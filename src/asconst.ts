// as const assertion

// enum UserRole  {
//     Admin = "admin",
//     Editor = "editor",
//     Viewer = "viewer",
// }
const UserRole = {
    Admin : "ADMIN",
    Editor : "EDITOR",
    Viewer : "VIEWER",
} as const;

/*
When use (as const) than it will convert read only value

{
    readonly Admin: "admin";
    readonly Editor: "editor";
    readonly Viewer: "viewer";
}

1.typrof operator
2.keyof operator

const user = {
id: 222;
name: "kajji"
}

typeof User;

{
    id: string;
    name : string;
}

typeof  UsserRole 

{
    Admin : "admin",
    Editor : "editor",
    Viewer : "viewer",
}

keyof  typeof UserRole
  "Admin" | "Editor" | "Viewer"

UserRole['Admin'] >>> "ADMIN"
   typeof UserRole[keyof typeof UserRole]

*/

const canEdit = (role : (typeof UserRole) [keyof typeof UserRole]) => {
    if( role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }
    else return false
}
const isPermissonable = canEdit (UserRole.Admin);
console.log(isPermissonable);