import axios from 'axios';
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import ProductCard from '../components/ProductCard';

// contexts
import {useCart} from '../shared/contexts/CartContext';
import IProduct from '../shared/interfaces/IProduct';

const initialProductState: IProduct[] = [];

function ItemsList(): JSX.Element {
  const [products, setProducts] = React.useState(initialProductState);
  const [loading, setLoading] = React.useState(true);
  const cartList = useCart();

  React.useEffect(() => {}, [cartList]);

  React.useEffect(() => {
    // console.log(cartProducts);
    axios
      .get('http://192.168.0.7:5000/getCars')
      .then(function (response) {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {loading ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {products.map((product, index) => {
              let inCart = false;
              if (
                cartList.some(item => {
                  return item._id === product._id;
                })
              ) {
                inCart = true;
              }
              return (
                <ProductCard key={index} inCart={inCart} product={product} />
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ItemsList;
