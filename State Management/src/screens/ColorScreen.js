import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button style={styles.boxStyle} title="Add a Color" onPress={() => {
                setColors([...colors, randomRGB()])
            }}></Button>
            <Text>Colors</Text>
            <View style={{height: 100, width: 100, backgroundColor: randomRGB()}}>

            </View>
        </View>
    )
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
  
    return  `rgb(${red},${green}, ${blue})`;
  }

const styles = StyleSheet.create({
    boxStyle: {

    }
})

export default ColorScreen;
