import React, { useContext } from "react";
import { View, Text, StatusBar, TouchableOpacity, Button } from "react-native";
import { AuthContext } from "../context/AuthContextProvider";

const HomeScreen = () => {
  const {logout}=useContext(AuthContext)
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={{marginTop:"90%",}} onPress={()=>{
        logout()
      }}>
        <Text  style={{color:"dodgerblue",fontSize:20, paddingStart:"43%", }}>Log out</Text>
      </TouchableOpacity>
      <StatusBar />
    </View>
  );
};

export default HomeScreen;
