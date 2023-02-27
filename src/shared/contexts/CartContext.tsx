import * as React from 'react';
import {createContext, useContext, useReducer} from 'react';
import {IProduct} from '../interfaces/Product';

interface IAction {
  product: IProduct;
  type: string;
}

const initialCart: IProduct[] = [];

export const CartContext = createContext(initialCart);
export const CartDispatchContext = createContext((action: any) => {
  return action;
});

export function CartProvider({children}: React.PropsWithChildren): JSX.Element {
  const [cartList, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cartList}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart(): IProduct[] {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function cartReducer(
  cartProducts: IProduct[],
  action: IAction,
): IProduct[] | undefined {
  switch (action.type) {
    case 'add':
      return [...cartProducts, ...[action.product]];
    case 'remove':
      return cartProducts.filter(product => product._id !== action.product._id);
    default:
      break;
  }
}
