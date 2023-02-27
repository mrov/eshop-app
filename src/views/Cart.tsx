import * as React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useCart, useCartDispatch} from '../shared/contexts/CartContext';
import {trimString} from '../shared/utils/formatFunctions';
import IProduct from '../shared/interfaces/IProduct';

function Cart(): JSX.Element {
  const cartProducts = useCart();
  const dispatch = useCartDispatch();

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
        return (
          <View style={styles.productCardWrapper}>
            <Image style={styles.imageStyle} source={{uri: product.img}} />
            <View style={styles.rightSideWrapper}>
              <Text style={styles.productTitle}>
                {trimString(product.announceName, 27)}
              </Text>
              <TouchableOpacity
                accessibilityLabel="Remove button"
                style={styles.removeBtn}
                onPress={() => {
                  dispatch({type: 'remove', product: product});
                }}>
                <Text style={styles.removeBtnText}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cartWrapper: {flex: 1, backgroundColor: 'white', padding: 20},
  selectedCars: {fontSize: 22, fontWeight: '800', color: 'black'},
  productCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BBBBBB',
    padding: 10,
    marginTop: 10,
  },
  imageStyle: {width: 100, height: 90},
  rightSideWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  productTitle: {fontSize: 16, color: 'black', fontWeight: '500'},
  removeBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
    width: 24,
    height: 24,
  },
  removeBtnText: {
    position: 'absolute',
    bottom: 1,
    fontWeight: '800',
    color: 'red',
  },
});

export default Cart;
