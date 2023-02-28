import * as React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import CartItem from '../components/CartItem';
import {useCart} from '../shared/contexts/CartContext';
import {Dimensions} from 'react-native';

function Cart(): JSX.Element {
  const cartProducts = useCart();

  const windowHeight = Dimensions.get('window').height;

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
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.cartWrapper, {minHeight: windowHeight}]}>
          <Text testID="selectedCarsLabel" style={styles.selectedCars}>
            {selectedCarsString(cartProducts.length)}
          </Text>
          {cartProducts.map(product => {
            return <CartItem key={product._id} product={product} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cartWrapper: {flex: 1, backgroundColor: 'white', padding: 20},
  selectedCars: {fontSize: 22, fontWeight: '800', color: 'black'},
});

export default Cart;
