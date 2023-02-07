import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../screens/LoginForm";
import BottomTabNavigator from "./BottomTabNavigator";
import Posts from "../screens/Posts";
import Search from "../screens/Search.js";
import Settings from "../screens/Settings.js";
import Likes from "../screens/Likes.js";
import Home from "../screens/Home.js";
import PostSettings from "../screens/PostSettings";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="Home">
      <Stack.Screen name="Instagram" options={{headerLeft:null}} component={LoginForm} />
      <Stack.Screen name="Posts" component={Posts}/>
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="Likes" component={Likes}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="PostSettings" component={PostSettings}/>
    </Stack.Navigator>
  );
}

export default MainStackNavigator;