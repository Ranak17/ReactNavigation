import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../screens/LoginForm";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="LoginForm">
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen name="bottomTab" component={BottomTabNavigator} />
      {/* <Stack.Screen name="About" component={About} /> */}
    </Stack.Navigator>
  );
}

export default MainStackNavigator;