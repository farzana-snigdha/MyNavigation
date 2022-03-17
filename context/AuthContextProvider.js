import React, { createContext, useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../firebase";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  async function login(username, password) {
    auth
      .signInWithEmailAndPassword(username, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        setUser({ username: username, password: password });
         AsyncStorage.setItem(
          "user",
          JSON.stringify({
            username: username,
            password: password,
          })
        );
      })
      .catch((error) => alert(error.message));

   
  }

  function logout(){
    AsyncStorage.clear().then(()=>{
      setUser(null)
    })
  }
  useEffect(() => {
    LoadData();
  }, []);

  async function LoadData() {
    const stored_user = await AsyncStorage.getItem("user");
    if (stored_user) {
      setUser(JSON.parse(stored_user));
    } else {
      setUser(null);
    }
  }
  return (
    <AuthContext.Provider value={{ user, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
