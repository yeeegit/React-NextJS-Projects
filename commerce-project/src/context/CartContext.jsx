import { createContext, useContext, useReducer, useCallback } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[itemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
        };
      } 
      else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.reduce((acc, item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      
      return {
        ...state,
        items: updatedItems,
      };
    }
    
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = useCallback(
    (product) => {
      const defaultQuantity = { ...product, quantity: 1 };
      dispatch({ type: "ADD_TO_CART", payload: defaultQuantity });
    },
    [dispatch]
  );

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export { CartProvider, useCart };
