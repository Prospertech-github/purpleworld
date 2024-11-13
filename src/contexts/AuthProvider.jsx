import { createContext, useState } from "react"

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}
