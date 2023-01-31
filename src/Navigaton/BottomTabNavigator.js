import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contact from "../../src/screens/Contact.js";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'
import Search from "../screens/Search.js";
import MainStackNavigator from "./StackNavigator.js";
import Settings from "../screens/Settings.js";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,
       tabBarShowLabel:false,
        tabBarStyle:[{display:'flex'},null]}} >
      <Tab.Screen name="Homes" component={MainStackNavigator} options={{
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
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;