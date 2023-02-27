import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CartItem from '../components/CartItem';
import {useCart} from '../shared/contexts/CartContext';

function Cart(): JSX.Element {
  const cartProducts = useCart();

  function selectedCarsString(cartLength: number) {
    if (cartLength === 1) {
      return `${cartLength} Carro selecionado:`;
    } else if (cartLength === 0) {
      return 'Nenhum carro selecionado';
    } else if (cartLength > 1) {
      return `${cartLength} Carros selecionados:`;
    }
    return '';
  }

  return (
    <View style={styles.cartWrapper}>
      <Text style={styles.selectedCars}>
        {selectedCarsString(cartProducts.length)}
      </Text>
      {cartProducts.map(product => {
        return <CartItem key={product._id} product={product} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cartWrapper: {flex: 1, backgroundColor: 'white', padding: 20},
  selectedCars: {fontSize: 22, fontWeight: '800', color: 'black'},
});

export default Cart;
