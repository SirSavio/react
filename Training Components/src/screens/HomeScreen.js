import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  const name = "Sávio";
  return (
    <View>
      <Text style={styles.textTwo}>My name is: {name} </Text>
      <Text style={styles.textOne}>Getting started with React Native</Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
      style={styles.buttonStyle} 
      title="Go to Componets Demo"/>
      <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('List')}>
        <Text style={styles.buttonText}>Go to List Demo</Text>
      </TouchableOpacity>
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
    marginVertical: 30
  },
  buttonText: {
    backgroundColor: "#8a0303",
    color: '#fff',
    borderRadius: 5,
    marginTop: 15,
    minHeight: 35,
    textAlign: "center",
    textAlignVertical: "center"
  },  
  buttonStyle: {
    marginTop: 50
  },
  touchButton: {
    width: "100%"
  }
});

export default HomeScreen;
