import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: '1', age: 11 },
        { name: '2', age: 12 },
        { name: '3', age: 13 },
        { name: '4', age: 14 },
        { name: '5', age: 15 },
        { name: '6', age: 16 },
        { name: '7', age: 17 },
        { name: '8', age: 18 },

    ]

    return (
        <View>
            <Text>List Screen</Text>
            <FlatList 
                data={friends} 
                keyExtractor={(friend) => friend.name}
                renderItem={({item}) => { 
                    return <Text style={styles.textStyle}>My friend{item.name} has {item.age} years old</Text>
                }}> 
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;