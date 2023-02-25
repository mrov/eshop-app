import * as React from 'react';
import {View} from 'react-native';

import ItemCard from '../components/ItemCard';

const productList = [{name: 'Captur', price: 'R$ 300000'}];

function ItemsList(): JSX.Element {
  return (
    <View>
      {productList.map(product => {
        return <ItemCard product={product} />;
      })}
    </View>
  );
}

export default ItemsList;
