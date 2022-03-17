import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function DrawerOne() {
  const { user } = useContext(AuthContext);
  console.log(user.username);
  return (
    <View>
      <Image source={require("../assets/profile.png")}
      style={{width:200, height:200}} />
      <Text>{user.username}</Text>
    </View>
  );
}
