import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IProduct from '../utils/interfaces/IProduct';
import {trimString} from '../utils/formatFunctions';

type ProductCardProp = {
  product: IProduct;
};

function ProductCard({product}: ProductCardProp): JSX.Element {
  function onPressHandler(): void {}

  return (
    <View style={[styles.cardWrapper]}>
      <View>
        <Image
          style={{width: 100, height: 90}}
          source={{
            uri: product.img,
          }}></Image>
      </View>
      <View style={{display: 'flex', flexDirection: 'column', marginTop: 30}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={styles.labelText}>Nome: </Text>
          <Text style={styles.textStyle}>
            {trimString(product.announceName, 10)}
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={styles.labelText}>Preço: </Text>
          <Text style={styles.textStyle}>{product.formattedPrice}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={styles.labelText}>KM: </Text>
          <Text style={styles.textStyle}>{product.kilometer}</Text>
        </View>
        <TouchableOpacity
          accessibilityLabel="Learn more about this purple button"
          style={styles.button}
          onPress={onPressHandler}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
});

export default ProductCard;
