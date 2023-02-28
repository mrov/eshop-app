/**
 * @format
 */

import 'react-native';
import React from 'react';
import ProductList from '../src/views/ProductList';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import {IProduct} from '../src/shared/interfaces/Product';
import {CartProvider} from '../src/shared/contexts/CartContext';

const _id = '1122044596';

jest.mock('../src/helpers/ProductsService', () => {
  return {
    getProducts: (): Promise<IProduct[]> => {
      return new Promise<IProduct[]>(resolve => {
        resolve([
          {
            _id: '1122044596',
            announceName: 'cobalt 1.8 elite utomatico 16/17',
            formattedPrice: 'R$ 62.990',
            price: 62990,
            kilometer: '54.044 km',
            year: '2017',
            shiftType: 'Automático',
            gasType: 'Flex',
            link: 'https://pe.olx.com.br/grande-recife/autos-e-pecas/carros-vans-e-utilitarios/cobalt-1-8-elite-utomatico-16-17-1122044596',
            img: 'https://img.olx.com.br/thumbs256x256/41/413203718812677.jpg',
            location: 'Recife, Várzea - DDD 81',
            postDate: {
              $date: '2023-02-26T10:02:00Z',
            },
            created: {
              $date: '2023-02-26T10:37:28.780Z',
            },
          },
        ]);
      });
    },
  };
});

it('render product List correctly', async () => {
  const wrapper = render(
    <CartProvider>
      <ProductList />
    </CartProvider>,
  );

  const item = await wrapper.findByTestId(_id);

  expect(item).toBeTruthy();
});
