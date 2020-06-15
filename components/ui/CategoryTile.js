import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import Card from './Card'

const CategoryTile = props => {
    return <View style={style.v}>
        <Card style={style.card}>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={style.v1}>
                    <ImageBackground style={style.image}
                        source={{ uri: props.image }}>
                        <View style={style.overlay}>
                            <Text style={style.text}>
                                {props.title}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </Card>
    </View>
}

const style = StyleSheet.create({

    v: {
        flex: 1,
        margin: 10
    },
    card: {
        margin: 5,
        overflow: 'hidden',
    },
    v1: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }, text: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
    }, image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }, overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    }
});


export default CategoryTile;
