import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import Search from "../screens/Search.js";
import Settings from "../screens/Settings.js";
import Likes from "../screens/Likes.js";
import Home from "../screens/Home.js";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,
       tabBarShowLabel:false,
        tabBarStyle:[{display:'flex'},null]}} initialRouteName="Home" >
      <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}/>
        <Tab.Screen name="Likes" component={Likes} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart-o" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;