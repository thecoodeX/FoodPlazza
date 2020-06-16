import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableWithoutFeedback } from 'react-native';
import Card from './Card';
import Colors from '../../assets/colors/Colors';


const MenuItemTile = props => {

    return <View style={style.container}>
        <Card style={style.card}>
            <TouchableWithoutFeedback

                onPress={props.onSelect}>

                <Image style={style.image}
                    source={{ uri: props.imgUrl }}
                >
                </Image>
            </TouchableWithoutFeedback>
            <View style={style.v1}>
                <Text style={style.title}>{props.title}</Text>
            </View>
            <View style={style.v1}>
                <Text style={style.price}> ₹ {props.price}</Text>
            </View>
            <View style={style.v2}>

                <View style={style.buttonContainer} >
                    <Button title='view' color={Colors.primaryColor} fontFamily='Roboto'
                        onPress={props.onSelect} />
                </View>
                <View style={style.buttonContainer}>
                    <Button title='Add To Cart' color={Colors.primaryColor} fontFamily='Roboto'
                        onPress={props.onAddtoCart} />
                </View>

            </View>


        </Card>
    </View>

}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        margin: 10,
        overflow: 'hidden'
    },
    image: {
        height: 200,
        width: '100%'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center"
    },
    price: {
        fontFamily: 'OpenSans',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center"
    }, v1: {
        margin: 2,
    },
    v2: {
        flexDirection: 'row',
        justifyContent: "space-around",
        margin: 10

    }, buttonContainer: {
        width: 150,


    },

})

export default MenuItemTile;