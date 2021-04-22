import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
        { name: '6' },
        { name: '7' },
        { name: '8' },

    ]

    return (
        <View>
            <Text>List Screen</Text>
            <FlatList 
                data={friends} 
                keyExtractor={(friend) => friend.name}
                renderItem={({item}) => { 
                    return <Text style={styles.textStyle}>{item.name}</Text>
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