import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./src/Navigaton/StackNavigator";
import BottomTabNavigator from "./src/Navigaton/BottomTabNavigator";
 const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
export default App