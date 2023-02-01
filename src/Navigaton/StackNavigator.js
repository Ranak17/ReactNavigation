import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../screens/LoginForm";
import BottomTabNavigator from "./BottomTabNavigator";
import Posts from "../screens/Posts";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="Profile">
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen name="Profile" component={BottomTabNavigator} />
      <Stack.Screen name="Posts" component={Posts}/>
      {/* <Stack.Screen name="About" component={About} /> */}
    </Stack.Navigator>
  );
}

export default MainStackNavigator;