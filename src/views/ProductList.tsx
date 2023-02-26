import * as React from 'react';
import {View} from 'react-native';

import ProductCard from '../components/ProductCard';

const productList = [
  {name: 'Captur', price: 'R$ 300000'},
  {name: 'Captur', price: 'R$ 300000'},
  {name: 'Captur', price: 'R$ 300000'},
  {name: 'Captur', price: 'R$ 300000'},
  {name: 'Captur', price: 'R$ 300000'},
  {name: 'Captur', price: 'R$ 300000'},
];

function ItemsList(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {productList.map(product => {
        return <ProductCard product={product} />;
      })}
    </View>
  );
}

export default ItemsList;
