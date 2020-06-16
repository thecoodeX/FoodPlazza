import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

import Card from './Card'



const CartTile = props => {
    return <View style={style.container}>
        <Card>
            <View style={style.v1}>
                <View style={style.v5}>

                    <Image style={style.image}
                        source={{ uri: props.imgUrl }}
                    ></Image>

                </View>
                <View style={style.v2}>
                    <View style={style.v4}>
                        <Text style={style.title}>
                            {props.title}
                        </Text>
                    </View>
                    <View style={style.v3}>


                        <Text style={style.qty}>
                            {props.qty}
                        </Text>
                        <Text style={style.mul}>
                            x
                        </Text>

                        <Text style={style.price}>
                            ₹ {props.price}
                        </Text>

                        {props.deletable && (
                            <TouchableOpacity onPress={props.onRemove}>
                                <Ionicons style={style.icon}
                                    name="ios-trash"
                                    size={23}
                                    color='red'
                                />
                            </TouchableOpacity>)}


                    </View>
                </View>

            </View>
        </Card>

    </View >

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 15

    },
    v1: {
        flexDirection: 'row',
        padding: 10,
        flex: 1,

    },
    v2: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:5
    }, v3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1

    },
    v4: {
        width: '50%'
    }, v5: {
        height: 80,
        width: 80,

        overflow: 'hidden'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 18
    },

    qty: {
        fontFamily: 'OpenSans',
        fontSize: 18
    }, price: {
        fontFamily: 'OpenSans',
        fontSize: 18
    }, icon: {
        marginRight: 10,
        paddingLeft:10
    }, mul: {
        fontFamily: 'OpenSans',
        fontSize: 18
    }, image: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
    }

});

export default CartTile;