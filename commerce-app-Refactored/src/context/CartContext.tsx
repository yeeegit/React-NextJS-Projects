import {
  useReducer,
  useCallback,
  ReactNode,
  useContext,
  createContext,
} from "react";

import { CartState, Action, Item, CartContextType } from "./ContextTypes";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const payloadItem = action.payload as Item;
      const itemIndex = state.items.findIndex(
        (item) => item.id === payloadItem.id
      );

      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        if (itemIndex !== -1 && updatedItems[itemIndex]) {
          updatedItems[itemIndex].quantity += 1;
        }
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        return {
          ...state,
          items: [...state.items, payloadItem],
        };
      }
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.reduce((acc, item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            const quantity = item.quantity || 0;
            acc.push({ ...item, quantity: quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as Item[]);

      return {
        ...state,
        items: updatedItems,
      };
    }

    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = useCallback(
    (product: Item) => {
      const defaultQuantity = { ...product, quantity: 1 };
      dispatch({ type: "ADD_TO_CART", payload: defaultQuantity });
    },
    [dispatch]
  );

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const contextValue: CartContextType = {
    cartState,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
