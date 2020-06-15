import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Order from '../screens/Order';
import Item from '../screens/Item';

const FoodNavigation = createStackNavigator({

    Home: Home,
    Menu: Menu,
    Cart: Cart,
    Order: Order,
    Item: Item,

}, {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#2962ff',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontFamily: 'Roboto'
        },
        headerTitleAlign: 'center'
    },
});



export default createAppContainer(FoodNavigation);