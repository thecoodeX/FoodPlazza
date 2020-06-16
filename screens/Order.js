import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/ui/HeaderButton';

import OrderItem from '../components/ui/OrderItem'



const Order = props => {

    const orders = useSelector(state => state.order.orders);



    const RenderItem = itemData => {
        return <OrderItem
            Amount={itemData.item.totalAmount}
            Date={itemData.item.dateReader}
            items={itemData.item.items}
            imgUrl={itemData.item.imgUrl}
        />
    }


    return <View style={style.container}>
        <FlatList

            data={orders}
            keyExtractor={(item, index) => item.id}
            renderItem={RenderItem}
        />
    </View>

}




Order.navigationOptions = navData => {

    return {
        headerTitle: 'Orders',

        headerLeft: () => (<HeaderButtons
            HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName='md-menu'
                onPress={() => { navData.navigation.toggleDrawer(); }}
            />
        </HeaderButtons>),
    };

}



const style = StyleSheet.create({
    container: {

    }
})

export default Order;