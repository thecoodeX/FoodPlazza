import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MENUITEMS } from '../DATA/dataApi';
import MenuItemTile from '../components/ui/MenuItemTile';

import HeaderButton from '../components/ui/HeaderButton';
import MenuItem from '../DATA/models/MenuItem';


const Menu = props => {

    const catId = props.navigation.getParam('categoryId');

    console.log(catId);
    const MenuItems = MENUITEMS.filter(
        menuItem => menuItem.catId.indexOf(catId) >= 0
    );
    console.log(MenuItems);



    const RenderItem = (itemData) => {
        return <MenuItemTile
            title={itemData.item.title}
            imgUrl={itemData.item.imgUrl}
            price={itemData.item.price}
            onSelect={() => { props.navigation.navigate('Item', { item: itemData.item, title: itemData.item.title }) }}
        ></MenuItemTile>
    }


    return <View style={style.container}>
        <FlatList
            data={MenuItems}
            renderItem={RenderItem}

        />
    </View>

}

Menu.navigationOptions = navData => {

    return {
        headerTitle: navData.navigation.getParam('title'),
        headerRight: () => (<HeaderButtons
            HeaderButtonComponent={HeaderButton}>
            <Item
                title='Cart'
                iconName='md-cart'
                onPress={() => { navData.navigation.navigate('Cart') }}
            />
        </HeaderButtons>),
    };

}




const style = StyleSheet.create({
    container: {
        flex: 1
    },

})

export default Menu;