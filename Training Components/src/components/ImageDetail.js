import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Image
            style = {{height: 150, width: 'auto', resizeMode : 'stretch'}} 
            source={{uri: props.url}}/>
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
    }
})

export default ImageDetail;