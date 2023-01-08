import React, {createContext, PropsWithChildren, useState} from 'react'


export const AuthContext = createContext({})


const AuthProvider = ({children}: PropsWithChildren): React.ReactElement => {
  const [auth, setAuth] = useState(false)
  console.log(children, 'children')
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}
console.log(AuthProvider, 'uahtprovider')
export default AuthProvider