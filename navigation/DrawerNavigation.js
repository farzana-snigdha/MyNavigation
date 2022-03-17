import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigation from "./HomeNavigation";
import DrawerOne from "../DrawerContent/DrawerOne";


const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={DrawerOne}>
      {/* <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} /> */}
      <Drawer.Screen name="homeNav" component={HomeNavigation} />
    </Drawer.Navigator>
  );
}
