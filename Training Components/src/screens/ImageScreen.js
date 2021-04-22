import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const images = [
        {title: 'Image 01', url: 'https://images.unsplash.com/photo-1619104680172-52c25d0d5403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'},
        {title: 'Image 02', url: 'https://images.unsplash.com/photo-1619104680172-52c25d0d5403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'},
        {title: 'Image 03', url: 'https://images.unsplash.com/photo-1619104680172-52c25d0d5403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'},
        {title: 'Image 04', url: 'https://images.unsplash.com/photo-1619104680172-52c25d0d5403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'},
        {title: 'Image 05', url: 'https://images.unsplash.com/photo-1619104680172-52c25d0d5403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'},
        {title: 'Image 06', url: 'https://images.unsplash.com/photo-1619104680172-52c25d0d5403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'},
    ]
    return (
        <View>
            <Text style={styles.h1}>Inicio do Image Screen</Text>
            <View style={styles.content}>
                <FlatList 
                style={styles.listStyle}
                    data={images}
                    keyExtractor={image => image.title}
                    renderItem={({item}) => {
                        return <ImageDetail title={item.title} url={item.url}/>
                    }}
                >
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        fontSize: 20,
        marginHorizontal: 15,
        marginBottom: 19
    },
    h1: {
        fontSize: 20,
        marginHorizontal: 15,
        marginBottom: 19,
        textAlign: 'center',
    },
    listStyles: {
        
    }
})

export default ImageScreen;