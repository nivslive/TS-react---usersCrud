import React, {createContext, PropsWithChildren, useState} from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({children}: PropsWithChildren): React.ReactElement => {
  const [auth, setAuth] = useState(false)
  const [expulsed, setExpulsed] = useState(false)
  return (
    <AuthContext.Provider value={{auth, setAuth, expulsed, setExpulsed}}>
      {children}
    </AuthContext.Provider>
  )
}
