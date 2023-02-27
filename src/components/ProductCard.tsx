import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IProduct from '../shared/interfaces/IProduct';
import {trimString} from '../shared/utils/formatFunctions';

// contexts
import {useCartDispatch} from '../shared/contexts/CartContext';

type ProductCardProp = {
  product: IProduct;
  inCart: Boolean;
};

function ProductCard({product, inCart}: ProductCardProp): JSX.Element {
  const dispatch = useCartDispatch();

  function onPressHandler(): void {
    if (inCart) {
      dispatch({
        type: 'remove',
        product: product,
      });
    } else {
      dispatch({
        type: 'add',
        product: product,
      });
    }
  }

  return (
    <View style={[styles.cardWrapper]}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: product.img,
          }}
        />
      </View>
      <View style={styles.bottomPart}>
        <View style={styles.label}>
          <Text style={styles.labelText}>Nome: </Text>
          <Text style={styles.textStyle}>
            {trimString(product.announceName, 10)}
          </Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Preço: </Text>
          <Text style={styles.textStyle}>{product.formattedPrice}</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>KM: </Text>
          <Text style={styles.textStyle}>{product.kilometer}</Text>
        </View>
        {!inCart ? (
          <TouchableOpacity
            accessibilityLabel="Add item Button"
            style={styles.button}
            onPress={onPressHandler}>
            <Text style={styles.addBtnText}>Adicionar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            accessibilityLabel="Remove item Button"
            style={styles.buttonRed}
            onPress={onPressHandler}>
            <Text style={styles.removeBtnText}>Remover</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {width: 100, height: 90},
  bottomPart: {display: 'flex', flexDirection: 'column', marginTop: 30},
  label: {display: 'flex', flexDirection: 'row'},
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    minWidth: '45%',
    maxWidth: '45%',
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
  },
  labelText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#42ec9a',
    padding: 5,
    marginTop: 10,
  },
  buttonRed: {
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 5,
    marginTop: 10,
  },
  addBtnText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  removeBtnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});

export default ProductCard;
