import 'react-native';
import React from 'react';
import ProductCard from '../src/components/ProductCard';
import {trimString} from '../src/shared/utils/formatFunctions';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

const mockProduct = {
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
};

it('Test the announce Name', async () => {
  const inCart = false;
  const wrapper = render(<ProductCard product={mockProduct} inCart={inCart} />);

  const announceTextTag = await wrapper.findByTestId('announceNameId');

  expect(announceTextTag.children[0]).toBe(
    trimString(mockProduct.announceName, 10),
  );
});

it('Test the Price Value', async () => {
  const inCart = false;
  const wrapper = render(<ProductCard product={mockProduct} inCart={inCart} />);

  const priceTag = await wrapper.findByTestId('priceId');

  expect(priceTag.children[0]).toBe(mockProduct.formattedPrice);
});

it('Test the Kilometer Value', async () => {
  const inCart = false;
  const wrapper = render(<ProductCard product={mockProduct} inCart={inCart} />);

  const kilometerTag = await wrapper.findByTestId('kmId');

  expect(kilometerTag.children[0]).toBe(mockProduct.kilometer);
});
