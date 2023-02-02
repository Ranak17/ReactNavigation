import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Footer from "./Footer";
const Contact = () => {
  return (
    <View style={styles.center}>
      <Text>This is the contact screen</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;