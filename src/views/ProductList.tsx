import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import ProductCard from '../components/ProductCard';

// Helpers
import {getProducts} from '../helpers/ProductsService';

// contexts
import {useCart} from '../shared/contexts/CartContext';
import {IProduct} from '../shared/interfaces/Product';

const initialProductState: IProduct[] = [];

function ItemsList(): JSX.Element {
  const [products, setProducts] = React.useState(initialProductState);
  const [loading, setLoading] = React.useState(true);
  const cartList = useCart();

  React.useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      let response = await getProducts();
      setProducts(response);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {loading ? (
          <View testID="loadingView">
            <Text>Loading</Text>
          </View>
        ) : (
          <View testID="listView" style={styles.productList}>
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

const styles = StyleSheet.create({
  productList: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
});

export default ItemsList;
