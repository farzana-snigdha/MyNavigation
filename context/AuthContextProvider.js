import React, { createContext, useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Alert } from "react-native";
import * as firebase from "firebase";
import { firestore } from "firebase";
import { auth } from "../firebase";
import { LogBox } from "react-native";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  async function login(username, password) {
    auth
      .signInWithEmailAndPassword(username, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        firestore()
          .collection("Users")
          .doc(user.uid)
          .get()
          .then((documentSnapshot) => {
            console.log("wdecwdc ",documentSnapshot.exists )
            if (documentSnapshot.exists) {
              const userInfo = documentSnapshot.data();
              console.log("User data: ", userInfo.name);
              // setData(documentSnapshot.data())
              setUser({ uid:user.uid, username: username, password: password, name: userInfo.name,
                nickname:userInfo.nickname, });
               AsyncStorage.setItem(
                "user",
                JSON.stringify({
                  uid:user.uid,
                  username: username,
                  password: password,
                  name: userInfo.name,
                  nickname: userInfo.nickname,
                })
              );
            } else {
              console.log("User data: ");
            }
          })
          .catch((err) => console.log(err));

        // console.log("Logged in with:", data.data());
      })
      .catch((error) => alert(error.message));
  }
  async function getUserInfo(currentUserUId) {
    await firestore()
      .collection("Users")
      .doc(currentUserUId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log("User data: ", documentSnapshot.data());
          setData(documentSnapshot.data());
        } else {
          console.log("User data: ");
        }
      })
      .catch((err) => console.log(err));

    // if (!doc.exists) {
    //   Alert.alert('No user data found!');
    // } else {
    //   console.log("doc.data ", doc.data())
    //   setData(doc.data()) ;
    // }
  }
  function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
LogBox.ignoreAllLogs();

export default AuthContextProvider;
