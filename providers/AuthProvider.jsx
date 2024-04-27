import { createContext } from "react";

// creating a context
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const authInfo  = {name: "user"}
    return (
        // set provider with value
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;