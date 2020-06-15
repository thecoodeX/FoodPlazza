import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ItemTile from '../components/ui/ItemTile';




const Item = props => {

    const item = props.navigation.getParam('item');



    return <ItemTile
        title={item.title}
        description={item.description}
        price={item.price}
        imgUrl={item.imgUrl}

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