import { createContext, useState } from "react"
export const userContext = createContext();
const UserContextProvider = (props) => {
    const [userLogin, setUserLogin]= useState(true);
    const value = {
        userLogin, setUserLogin
     }
     return (
        <>
          <userContext.Provider value={value}>
                {props.children}
          </userContext.Provider>
        </>
      );
}
export default UserContextProvider
