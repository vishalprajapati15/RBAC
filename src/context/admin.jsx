import { createContext, useState } from "react"
export const AdminContext = createContext();
const AdminContextProvider = (props) => {
    const [adminLogin, setAdminLogin]= useState(true);
   const  value = {
        adminLogin, setAdminLogin
     }
     return (
        <>
          <AdminContext.Provider value={value}>
                {props.children}
          </AdminContext.Provider>
        </>
      );
}
export default AdminContextProvider
