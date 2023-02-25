import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IProduct from '../utils/interfaces/IProduct';

type ItemCardProp = {
  product: IProduct;
};

function ItemCard({product}: ItemCardProp): JSX.Element {
  return (
    <View>
      <View>
        <Text style={style.textStyle}>{product.name}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
});

export default ItemCard;
