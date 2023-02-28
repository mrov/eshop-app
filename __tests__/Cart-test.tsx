import 'react-native';
import React from 'react';
import Cart from '../src/views/Cart';
import {CartProvider} from '../src/shared/contexts/CartContext';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

it('Render Cart', async () => {
  const wrapper = render(
    <CartProvider>
      <Cart />
    </CartProvider>,
  );

  const selectedCarsLabel = await wrapper.findByTestId('selectedCarsLabel');

  expect(selectedCarsLabel).toBeTruthy();
});
