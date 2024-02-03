export interface Item {
  id: number;
  price: number;
  quantity: number ;
  category?: string;
  image?: string;
  title?: string;
  thumbnail?:  string;
}

// in this project i used two different apis to show more than a few fake products which is not
// fully compatible with this Item interface ,some errors may occur up because of non compatible data.
// so if you planning on using this in "real project" make sure to change Item interface to handle 
// those cases correctly

// some of files related to this: "src/context", "pages/Cart", "components/cart/CartItem", "components/home/CategoryCards"

export interface CartState {
  items: Item[];
}

export interface Action {
  type: string;
  payload?: Item | number;
}

export interface CartContextType {
  cartState: CartState;
  addToCart: (product: Item) => void;
  removeFromCart: (productId: number) => void;
}
