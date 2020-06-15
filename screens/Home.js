import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryTile from '../components/ui/CategoryTile';

import HeaderButton from '../components/ui/HeaderButton';

import { CATEGORIES } from '../DATA/dataApi';

const Home = props => {

    const RenderItem = (itemData) => {


        return <CategoryTile
            title={itemData.item.title}
            image={itemData.item.imgUrl}
            onSelect={() => { props.navigation.navigate('Menu', { categoryId: itemData.item.catId, title: itemData.item.title }) }}
        />
    }

    return <View style={style.container}>
        <FlatList numColumns={2}
            data={CATEGORIES}
            keyExtractor={(item, index) => item.catId}
            renderItem={RenderItem}
        ></FlatList>
    </View>

}


Home.navigationOptions = navData => {
    return {
        headerTitle: 'HOME',
        headerRight: () => (<HeaderButtons
            HeaderButtonComponent={HeaderButton}>
            <Item
                title='Cart'
                iconName='md-cart'
                onPress={() => { navData.navigation.navigate('Cart') }}
            />
        </HeaderButtons>),
        headerLeft: () => (<HeaderButtons
            HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName='md-menu'
                onPress={() => { navData.navigation.toggleDrawer(); }}
            />
        </HeaderButtons>),

    }
}





const style = StyleSheet.create({
    container: {


    }
})

export default Home;