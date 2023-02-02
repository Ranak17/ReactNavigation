import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
const Footer = () => {
  const color='gray';
  const size=30;
  const navigation = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <Ionicons name="ios-home" color={color} size={size} onPress={()=>{navigation.navigate('Home')}}/>
      <Ionicons name="ios-settings" color={color} size={size} onPress={()=>{navigation.navigate('Settings')}}/>
      <FontAwesome5 name="search" size={size} color={color} onPress={()=>{navigation.navigate('Search')}}/>
      <FontAwesome name="heart-o" size={size} color={color} onPress={()=>{navigation.navigate('Likes')}}/>
      <FontAwesome name="heart-o" size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection:'row',
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default Footer;
