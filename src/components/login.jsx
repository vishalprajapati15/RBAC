import React, { useContext,useState } from 'react'
import { AdminContext } from '../context/admin';
const Login = () => {
    const [isLogin, setLogin]= useState(false);

    const {setAdminLogin} = useContext(AdminContext);
     
  return (
    <div>

     <h3>HI abhishek is here</h3>


        {/* login form */}
    </div>
  )
}

export default Login