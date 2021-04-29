import React, {useStat, useReducer} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import ColorCounterRedux from '../components/ColorCounterRedux';

const SquareReduxScreen = () => {
    const reducer = (state, action ) => {
        if(action.type == 'change_red') return {...state, red: state.red + action.payload}
        else if (action.type == 'change_green') return {...state, green: state.green + action.payload}
        else return {...state, blue: state.blue + action.payload}
    }
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return (
        <View>
            <ColorCounterRedux onDecrease={() => dispatch({type: 'change_red', payload: -10})} onIncrease={() => dispatch({type: 'change_red', payload: 10})} title="Red"/>
            <ColorCounterRedux onDecrease={() => dispatch({type: 'change_green', payload: -10})} onIncrease={() => dispatch({type: 'change_green', payload: 10})} title="Green"/>
            <ColorCounterRedux onDecrease={() => dispatch({type: 'change_blue', payload: -10})} onIncrease={() => dispatch({type: 'change_blue', payload: 10})} title="Blue"/>
            <View style={{height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 15
    }
})

export default SquareReduxScreen;
