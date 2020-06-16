import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Order from '../screens/Order';
import Item from '../screens/Item';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../assets/colors/Colors';




const DefaultNavigationOptions = {
    headerStyle: {
        backgroundColor: '#2962ff',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'Roboto'
    },
    headerTitleAlign: 'center'

}

const FoodNavigation = createStackNavigator({
    Home: Home,
    Menu: Menu,
    Cart: Cart,
    Item: Item,

}, {
    initialRouteName: 'Home',
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name="md-home" size={24} color={drawerConfig.tintColor} />
    },

    defaultNavigationOptions: DefaultNavigationOptions
});


const OrderNavigation = createStackNavigator({
    Order: Order,
}, {

    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name="md-basket" size={24} color={drawerConfig.tintColor} />
    },

    defaultNavigationOptions: DefaultNavigationOptions
});


const BottomNavBar = createMaterialBottomTabNavigator({
    Home: {
        screen: FoodNavigation, navigationOptions: {
            tabBarIcon: tabinfo => {
                return (
                    <Ionicons
                        name="md-home" size={28}
                        color='white' />
                );
            }
        }
    },
    Order: {
        screen: OrderNavigation, navigationOptions: {
            tabBarIcon: tabinfo => {
                return (
                    <Ionicons
                        name="md-basket" size={28}
                        color='white' />
                );
            }
        }
    }
}, {


    initialRouteName: 'Home',
    activeTintColor: 'white',
    barStyle: { backgroundColor: Colors.primaryColor },
    shifting: true

});



const DrawerNavBar = createDrawerNavigator({

    Home: FoodNavigation,
    Order: OrderNavigation,


}, {
    navigationOptions: {
        drawerLockMode: 'locked-closed',


    },
    contentOptions: {
        activeTintColor: '#2962ff',
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        }
    }

});




export default createAppContainer(DrawerNavBar);
















/**BACKUP
 *
 * import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Order from '../screens/Order';
import Item from '../screens/Item';
import { Ionicons } from '@expo/vector-icons';



const DefaultNavigationOptions = {
    headerStyle: {
        backgroundColor: '#2962ff',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'Roboto'
    },
    headerTitleAlign: 'center'

}

const FoodNavigation = createStackNavigator({
    Home: Home,
    Menu: Menu,
    Cart: Cart,
    Item: Item,

}, {
    initialRouteName: 'Home',
    navigationOptions: {
        drwerIcon: drawerConfig => <Ionicons name="md-home" size={24} color={drawerConfig.tintColor} />
    },

    defaultNavigationOptions: DefaultNavigationOptions
});


const OrderNavigation = createStackNavigator({
    Order: Order,
}, {

    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name="md-basket" size={24} color={drawerConfig.tintColor} />
    },

    defaultNavigationOptions: DefaultNavigationOptions
});

const DrawerNavBar = createDrawerNavigator({

    Menu: FoodNavigation,
    Order: OrderNavigation

}, {
    navigationOptions: {
        drawerLockMode: 'locked-closed',


    },
    contentOptions: {
        activeTintColor: '#2962ff',
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        }
    }

})



export default createAppContainer(DrawerNavBar);
 */