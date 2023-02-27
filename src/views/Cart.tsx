import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
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
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <Text style={{fontSize: 22, fontWeight: 800, color: 'black'}}>
        {selectedCarsString(cartProducts.length)}
      </Text>
      {cartProducts.map(product => {
        return (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#BBBBBB',
              padding: 10,
              marginTop: 10,
            }}>
            <Image
              style={{width: 100, height: 90}}
              source={{uri: product.img}}></Image>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontSize: 16, color: 'black', fontWeight: 500}}>
                {trimString(product.announceName, 27)}
              </Text>
              <TouchableOpacity
                accessibilityLabel="Learn more about this purple button"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  borderWidth: 2,
                  borderColor: 'red',
                  borderRadius: 20,
                  width: 24,
                  height: 24,
                }}
                onPress={() => {
                  dispatch({type: 'remove', product: product});
                }}>
                <Text
                  style={{
                    position: 'absolute',
                    bottom: 1,
                    fontWeight: 800,
                    color: 'red',
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default Cart;
