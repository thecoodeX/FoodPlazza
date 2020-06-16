import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import FoodNavigation from './navigation/FoodNavigation';

//REDUX
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/order';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
})


const store = createStore(rootReducer);


const fetchFont = () => {
  return Font.loadAsync({
    'OpenSans': require('./assets/font/OpenSans.ttf'),
    'Roboto': require('./assets/font/Roboto.ttf'),
  })


}


export default function App() {

  let [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFont}
      onFinish={() => {
        setFontLoaded(true);
      }} />
  }
  return (<Provider store={store}>
    <FoodNavigation />
  </Provider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
