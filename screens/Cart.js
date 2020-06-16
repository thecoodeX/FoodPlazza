import React from 'react';
import { Text, View, StyleSheet, Dimensions, Button, FlatList, ScrollView } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/ui/HeaderButton';

import Card from '../components/ui/Card';

import Colors from '../assets/colors/Colors'

import { useSelector, useDispatch } from 'react-redux';


import CartTile from '../components/ui/cartItem';

import * as cartAction from '../store/actions/cart';
import * as orderAction from '../store/actions/order';


const Cart = (props) => {

    const CartTotal = useSelector(state => state.cart.totalAmount)

    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
                imgUrl: state.cart.items[key].imgUrl,

            });
        }
        return transformedCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1); //To Preserve Cart Order
    });
    const dispatch = useDispatch();

    return <View style={style.container}>
        <Card style={style.card}>
            <View style={style.v1}>

                <Text style={style.title1}>
                    Total: ₹ <Text style={style.title2}>
                        {CartTotal.toFixed(2)}
                    </Text>
                </Text>
                <View>
                    <Button title='Place Order' color={Colors.primaryColor}
                        disabled={cartItems.length === 0}
                        onPress={() => { dispatch(orderAction.addOrder(cartItems, CartTotal)) }}

                    >

                    </Button>
                </View>
            </View>
        </Card>
        <View>
            <FlatList

                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartTile
                        title={itemData.item.productTitle}
                        qty={itemData.item.quantity}
                        price={itemData.item.productPrice}
                        imgUrl={itemData.item.imgUrl}
                        deletable
                        onRemove={() => {
                            dispatch(cartAction.removeFromCart(itemData.item.productId));
                        }}


                    />)}

            />



        </View>
    </View>
}


Cart.navigationOptions = navData => {

    return {

        headerRight: () => (<HeaderButtons
            HeaderButtonComponent={HeaderButton}>
            <Item
                title='Basket'
                iconName='md-basket'
                onPress={() => { navData.navigation.navigate('Order') }}
            />
        </HeaderButtons>),
    };

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,


    },
    v1: {
        height: 80,
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    card: {
        margin: 10
    },
    title1: {
        fontFamily: 'Roboto',
        fontSize: 18
    },
    title2: {
        fontFamily: 'OpenSans',
        fontSize: 18

    }
})


export default Cart;