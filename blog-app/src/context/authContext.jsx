/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {


 // Hard coded user + newly registered users:
 const [registeredUsers, setRegisteredUsers] = useState(() => {
    const saved = localStorage.getItem("registeredUsers");
    return saved ? JSON.parse(saved) : {
    users: [
        {
            username: "Gladius De La Exlempar",
            password: "password"
        }
    ]
    };
  }) 


  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : { username: null };
  });

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user?.username) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Save users to localStorage whenever one is added, VERY INSECURE DON'T DO THIS IN A REAL APP
  useEffect(() => {
    if (registeredUsers?.users) {
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    } 
  }, [registeredUsers]);

  // Simple auth helpers
  const login = (uname, password) => {
    if (uname.length === 0 || password.length === 0) return "Both fields must be filled out"

    let u = registeredUsers.users.find((user) => user.username === uname)

    if (!u) return "No user with that name found, did you mean to register?";
    if (u.password !== password) return "Incorrect password";
    
    setUser({username: uname});
    return "logged in Ws in the chat"
  };

  // signup helper
  const signup = (uname, password) => {
if (uname.length === 0 || password.length === 0) return "Both fields must be filled out"

    let u = registeredUsers.users.find((user) => user.username === uname)
    if (u) return "A user with that name already exists, please try a different one";

    
    let newUser = {
        username: uname,
        password: password
    }

    setRegisteredUsers({
        users: [...registeredUsers.users, newUser]
    })
    setUser({username: uname})

    return "registered Ws in the chat"
  };

  const logout = () => setUser({username: null});

  return (
    <AuthContext.Provider 
     value={{
      username: user.username ?? "",
      login,
      signup,
      logout,
     }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);