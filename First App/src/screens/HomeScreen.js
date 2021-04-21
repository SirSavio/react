import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const name = "Sávio";
  const textTwo = <Text style={styles.textTwo}>My name is: {name} </Text>
  const textOne = <Text style={styles.textOne}>Getting started with React Native</Text>
  return (
    <View>
      {textOne}
      {textTwo}
    </View>)
};

const styles = StyleSheet.create({
  textTwo: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 15
  },
  textOne: {
    fontSize: 45,
    textAlign: "center",
    marginTop: 30
  }
});

export default HomeScreen;
