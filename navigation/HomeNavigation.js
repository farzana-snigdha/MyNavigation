import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../home/HomeScreen";
import ProfileScreen from "../home/ProfileScreen";
import SettingScreen from "../home/SettingScreen";

const Tabs = createMaterialTopTabNavigator();
const HomeNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
      <Tabs.Screen name="Settings" component={SettingScreen} />
    </Tabs.Navigator>
  );
};

export default HomeNavigation;
