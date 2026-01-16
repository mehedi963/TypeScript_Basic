//Union

type UserRole = 'admin' | 'user'

const guestDashBoard = (role : UserRole) =>{
    if(role ==='admin'){
        return 'Admin DashBoard'
    }
    else if(role ==='user'){
        return 'User DashBoard'
    }
    else{
        return 'guest DashBoard'
    }
}

guestDashBoard('admin') 



