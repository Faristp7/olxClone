import React, { createContext, useState } from 'react'
export const AuthContext = createContext();

export default function AuthContextProvider({children = []}) {
    const [user, setUser] = useState({login:null})
    const [loginRefresh, setLoginRefresh] = useState(false)
    const reloadPage=()=>{
        setLoginRefresh(!loginRefresh)
    }
  return (
    <AuthContext.Provider value={{user, setUser, loginRefresh, setLoginRefresh, reloadPage}}>
      {children}
    </AuthContext.Provider>
  )
}
