import React, {useStat, useReducer} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import ColorCounterRedux from '../components/ColorCounterRedux';

const SquareReduxScreen = () => {
    const reducer = (state, action ) => {
        if(action.color == 'red') return {...state, red: state.red + action.amount}
        else if (action.color == 'green') return {...state, green: state.green + action.amount}
        else return {...state, blue: state.blue + action.amount}
    }
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    const red = 0;
    const green = 0;
    const blue = 0;
    return (
        <View>
            <ColorCounterRedux onDecrease={() => {}} onIncrease={() => {}} title="Red"/>
            <ColorCounterRedux onDecrease={() => {}} onIncrease={() => {}} title="Green"/>
            <ColorCounterRedux onDecrease={() => {}} onIncrease={() => {}} title="Blue"/>
            <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 15
    }
})

export default SquareReduxScreen;
