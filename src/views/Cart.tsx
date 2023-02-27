import * as React from 'react';
import {Text, View} from 'react-native';
import {useCart} from '../shared/contexts/CartContext';

function Cart(): JSX.Element {
  const cartProducts = useCart();

  return (
    <View style={{backgroundColor: 'white', marginHorizontal: 10}}>
      <Text style={{color: 'black'}}>
        {cartProducts.length} carros selecionados:
      </Text>
    </View>
  );
}

export default Cart;
