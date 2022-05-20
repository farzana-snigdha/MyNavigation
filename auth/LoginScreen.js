import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContextProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    login(username, password);
  }

  function handleRegister() {
    navigation.navigate("Register");
  }

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          alignSelf: "center",
          marginVertical: 25,
          color: "dodgerblue",
        }}
      >
        Web Dev
      </Text>
      <Text style={{ paddingBottom: 22 }}>Login into your account</Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: "100%",

          paddingHorizontal: 10,
          marginBottom: 10,
          borderColor: "#B2BEB5",
          height: 34,
        }}
        placeholder="Email"
        onChangeText={(value) => {
          setUsername(value);
        }}
      />
      <TextInput
        style={{
          borderWidth: 1,
          width: "100%",
          paddingHorizontal: 10,
          marginBottom: 10,
          borderColor: "#B2BEB5",
          height: 34,
        }}
        placeholder="Password"
        secureTextEntry
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
      <View style={{ marginBottom: 20, paddingTop: 20, borderRadius: 10 }}>
        <Button title="Login" onPress={handleLogin} />
      </View>

      <View
        style={{
          marginBottom: 20,
          paddingTop: 20,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
       
        <Text style={{marginTop:50, color:"#B2BEB8"}}>or sign in with</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <AntDesign name="google" size={24} color="orange" style={{padding:10}} />
        <Entypo name="facebook" size={24} color="dodgerblue" style={{padding:10}} />
        <AntDesign name="twitter" size={24} color="dodgerblue" style={{padding:10}} />
      </View>
      
      <Text style={{marginTop:50}} >Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={{ color: "dodgerblue" }}>sign up</Text>
          
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default LoginScreen;
