// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from './src/components/Header';

import ProductList from './src/views/ProductList';
import Cart from './src/views/Cart';

// contexts
import {CartProvider} from './src/shared/contexts/CartContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{title: 'Lista Produtos', headerRight: Header}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{title: 'Carrinho', headerRight: Header}}
          />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}

export default App;
