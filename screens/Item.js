import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ItemTile from '../components/ui/ItemTile';

import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from '../store/actions/cart';




const Item = props => {

    const item = props.navigation.getParam('item');
    console.log(item);


    const dispatch = useDispatch();

    return <ItemTile
        title={item.title}
        description={item.description}
        price={item.price}
        imgUrl={item.imgUrl}
        onAddToCart={() => { dispatch(cartActions.addToCart(item)) }}

    />




}


Item.navigationOptions = navData => {

    return {
        headerTitle: navData.navigation.getParam('title')
    };
}

const style = StyleSheet.create({
    container: {

    }
})

export default Item;