import * as React from 'react';
import {Text, View} from 'react-native';
import {useCart} from '../shared/contexts/CartContext';

function Header(): JSX.Element {
  const cartProducts = useCart();

  return (
    <View>
      <Text style={{color: 'black'}}>{cartProducts.length}</Text>
    </View>
  );
}

export default Header;
