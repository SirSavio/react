import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterReduxScreen = () => {

    const reducer = (state, action) => {
        if(action.type == 'increase_counter') return {counter: ++state.counter}
        else return {counter: --state.counter}
    }

    const [state, dispatch] = useReducer(reducer, {counter: 0});
    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({type: 'increase_counter'})}></Button>
            <Button title="Decrease" onPress={() => dispatch({type: 'decrease_counter'})}></Button>
            <Text>Current Count: {state.counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({})

export default CounterReduxScreen;
