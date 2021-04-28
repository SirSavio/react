import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, Button} from 'react-native';

const ColorCounterRedux = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Button onPress={() => props.onIncrease()} style={{backgroundColor: props.title}} title={`Increase ${props.title}`}></Button>
            <Button onPress={() => props.onDecrease()} title={`Decrease ${props.title}`}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 5,
        marginHorizontal: 15
    },
    textStyle: {
        textAlign: 'center'
    },
    buttonStyle: {
        marginVertical: 15
    }
})

export default ColorCounterRedux;