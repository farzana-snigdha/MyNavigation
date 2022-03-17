import React,{useState} from "react";
import { View, Text, Alert,Button,TextInput } from "react-native";
import { auth } from "../firebase";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setconPassword] = useState("");
 const passCheck=()=>{
   if(password!==conpassword){
     Alert.alert("password does not match")
   }
 }
 const handleRegister=()=>{
  auth
  .createUserWithEmailAndPassword(username, password)
  .then((userCredentials) => {
    const user = userCredentials.user;
    console.log("Registered with:", user.email);
    navigation.navigate("Login");
  })
  .catch((error) => alert(error.message));
 }
  return (
    <View style={{padding:15}}>
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
      <Text style={{ paddingBottom: 22 }}>Create your account</Text>
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

<TextInput
        style={{
          borderWidth: 1,
          width: "100%",
          paddingHorizontal: 10,
          marginBottom: 10,
          borderColor: "#B2BEB5",
          height: 34,
        }}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(value) => {
          setconPassword(value);
        }}
      />

<View style={{ marginBottom: 20, paddingTop: 20, borderRadius: 10 }}>
        <Button title="Register" onPress={()=>{
          passCheck();
          handleRegister();
        }} />
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
      <Text  style={{marginTop:50, color:"#B2BEB8"}}>or sign in with</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <AntDesign name="google" size={24} color="orange" style={{padding:10}} />
        <Entypo name="facebook" size={24} color="dodgerblue" style={{padding:10}} />
        <AntDesign name="twitter" size={24} color="dodgerblue" style={{padding:10}} />
      </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
