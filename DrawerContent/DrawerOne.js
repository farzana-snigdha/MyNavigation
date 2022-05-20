import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

export default function DrawerOne(props) {
  const { user } = useContext(AuthContext);
  console.log(user.uid);
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/profile.png")}
        style={{
          resizeMode: "center",
          width: 150,
          height: 150,
          borderRadius: 50,
          alignSelf: "center",
          marginTop: 30,
        }}
      />
      <DrawerContentScrollView {...props}>
        <Text
          style={{
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            fontSize:20
          }}
        >
          User Name : {user.name}
        </Text>
        <Text
          style={{
            padding: 16,
            flexDirection: "row",
            alignItems: "center", fontSize:20
          }}
        >
          Nickname : {user.nickname}
        </Text>
        <Text
          style={{
            padding: 16,
            flexDirection: "row",
            alignItems: "center", fontSize:20
          }}
        >
          Email : {user.username}
        </Text>
      </DrawerContentScrollView>
    </View>
  );
}
