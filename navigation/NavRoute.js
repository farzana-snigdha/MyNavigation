import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContextProvider";
import HomeNavigation from "./HomeNavigation";
import AuthNavigation from "./AuthNavigation";
import DrawerNavigation from "./DrawerNavigation";

const NavRoute = () => {
  const { user, isloading } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default NavRoute;
