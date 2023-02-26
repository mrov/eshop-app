import * as React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import axios from 'axios';

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
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://192.168.0.7:5000/getCars')
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ItemsList;
