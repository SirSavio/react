import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textOne}>Getting started with React Native</Text>
      <View style={styles.viewStyle}>
        <Button
          onPress={() => navigation.navigate('Components')}
          title="Go to Componets Demo" />
        <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('List')}>
          <Text style={styles.buttonText}>Go to List Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('Image')}>
          <Text style={styles.buttonText}>Go to Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('Counter')}>
          <Text style={styles.buttonText}>Go to Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('Color')}>
          <Text style={styles.buttonText}>Go to Color</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('Square')}>
          <Text style={styles.buttonText}>Go to Square</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('SquareRedux')}>
          <Text style={styles.buttonText}>Go to Square with Redux</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('CounterRedux')}>
          <Text style={styles.buttonText}>Go to Counter with Redux</Text>
        </TouchableOpacity>
      </View>
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
  touchButton: {
    width: "100%"
  },
  viewStyle: {
    width: '90%',
    alignSelf: 'center',
    alignContent: 'center'
  }
});

export default HomeScreen;
