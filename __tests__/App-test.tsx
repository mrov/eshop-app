import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

it('Render App Router', async () => {
  const wrapper = render(<App />);

  const view = await wrapper.findByTestId('loadingView');

  expect(view).toBeTruthy();
});
