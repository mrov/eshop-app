import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCart} from '../shared/contexts/CartContext';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function Header(): JSX.Element {
  const cartProducts = useCart();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Cart');
      }}
      style={styles.touchableStyle}>
      <View style={styles.iconWrapper}>
        {cartProducts.length ? (
          <View style={styles.itemCount}>
            <Text style={styles.countText}>{cartProducts.length}</Text>
          </View>
        ) : (
          <View />
        )}
        <Image
          style={styles.image}
          source={require('../../assets/shopping_cart.png')}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  itemCount: {
    position: 'absolute',
    top: -7,
    right: -7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 20,
    zIndex: 2,
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 20,
  },
  countText: {color: 'white', fontSize: 12},
  image: {width: 34, height: 34},
});

export default Header;
