import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TextScreen = () => {

    const reducer = (state, action) => {

    }

    const [state, dispatch] = useReducer(reducer, {});
    return (
        <View>
            <Text>My name is: </Text>
        </View>
    )
};

const styles = StyleSheet.create({})

export default TextReduxScreen;
