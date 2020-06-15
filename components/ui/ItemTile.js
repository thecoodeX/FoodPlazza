import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Card from './Card';
import Colors from '../../assets/colors/Colors';

const ItemTile = props => {
    return <View style={style.container}>
        <Card style={style.card}>
            <View style={style.v1}>
                <Image style={style.image}
                    source={{ uri: props.imgUrl }}

                ></Image>
            </View>
            <View style={style.v2}>
                <Text style={style.title}>
                    {props.title}
                </Text>
                <Text style={style.description}>
                    {props.description}
                </Text>
                <Text style={style.price}>
                    ₹ {props.price}
                </Text>
            </View>
            <View style={style.button}>
                <Button title='Add To Cart' color={Colors.primaryColor} />
            </View>

        </Card>
    </View>

}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        margin: 10,
        overflow: 'hidden'
    },
    title: { fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold' },
    description: {
        fontFamily: 'OpenSans',
        fontSize: 20,

    },
    price: {
        fontFamily: 'OpenSans',
        fontSize: 18,
    },
    v1: {
        width: '100%',
        height: 300
    },
    v2: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    image: {
        height: '100%',
        width: '100%'
    }, button: {
        margin: 10

    }
})

export default ItemTile;