import * as React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useCartDispatch} from '../shared/contexts/CartContext';
import {ICartItemProp} from '../shared/interfaces/Cart';
import {trimString} from '../shared/utils/formatFunctions';

function CartItem({product}: ICartItemProp): JSX.Element {
  const dispatch = useCartDispatch();

  return (
    <View style={styles.productCardWrapper}>
      <Image style={styles.imageStyle} source={{uri: product.img}} />
      <View style={styles.rightSideWrapper}>
        <Text style={styles.productTitle}>
          {trimString(product.announceName, 27)}
        </Text>
        <View style={{width: '10%'}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
  productTitle: {
    width: '88%',
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    paddingLeft: '2%',
  },
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

export default CartItem;
