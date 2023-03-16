import * as React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
      {loading ? (
        <View testID="loadingView">
          <Text>Loading</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          columnWrapperStyle={styles.productList}
          renderItem={({item, index}) => {
            let inCart = false;
            if (
              cartList.some(cartItem => {
                return item._id === cartItem._id;
              })
            ) {
              inCart = true;
            }
            return <ProductCard key={index} inCart={inCart} product={item} />;
          }}
          keyExtractor={(item: IProduct) => item._id}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productList: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
});

export default ItemsList;
