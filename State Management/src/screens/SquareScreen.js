import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return (
        <View>
            <ColorCounter onDecrease={() => {
                red >= 10 ? setRed(red - 10) : undefined
                }} 
            onIncrease={() => {
                red <= 245 ? setRed(red + 10) : undefined
            }} title="Red"/>
            <ColorCounter onDecrease={() => {
                green >= 10 ? setGreen(green - 10) : undefined
            }} 
            onIncrease={() => {
                green >= 245 ? setGreen(green + 10) : undefined
            }} title="Green"/>
            <ColorCounter onDecrease={() => {
                setBlue(blue - 10)
            }} onIncrease={() => {
                setBlue(blue + 10)
            }} title="Blue"/>
            <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
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
    buttonStyle: {
        margin: 15
    }
})

export default SquareScreen;
