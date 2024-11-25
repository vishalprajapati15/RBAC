import { useContext, useState } from 'react'

import './App.css'
import Home from './pages/admin/Home'
import UserHome from './pages/users/Home'
import Login from './components/login'
import { AdminContext } from './context/admin'
import { userContext } from './context/user'
function App() {
    const {adminLogin}= useContext(AdminContext)
    const {userLogin} = useContext(userContext)
  return (
    <>
      {
        !(adminLogin || userLogin ) ? <Login/>: <div>
          {
            adminLogin && <Home/>
           
          }
          {
             userLogin && <UserHome/>
          }
        </div>
      }
    </>
  )
}

export default App
