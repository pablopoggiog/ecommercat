import cartReducer, {
  CartState,
  addProduct,
  incrementProductAmount,
  decrementProductAmount,
  removeProduct,
  loadCartFromStorage,
} from "../cart";

const mockedUpCart: CartState = {
  cartList: [
    {
      amount: 2,
      product: {
        name: "8-Bit Mario Classic Color",
        type: "Figure",
        price: 10,
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02380602.png",
        id: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02380602.png",
      },
    },
  ],
  totalPrice: 20,
};

const localStorageMock = (() => {
  let store: Record<string, any> = {};
  return {
    getItem(key: string) {
      return store[key] || null;
      // return JSON.stringify(mockedUpCart);
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("cartSlice", () => {
  const initialState: CartState = {
    cartList: [],
    totalPrice: 0,
  };

  it("should handle initial state", () => {
    expect(cartReducer(initialState, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle addProduct, saving the cart as well in local storage", () => {
    const mockedProduct = mockedUpCart.cartList[0].product;
    const cartState = cartReducer(initialState, addProduct(mockedProduct));

    const itemUnits = cartState.cartList[0].amount;
    const totalPrice = cartState.totalPrice;

    expect(itemUnits).toEqual(1);
    expect(totalPrice).toEqual(mockedProduct.price);

    const updatedCartState = cartReducer(cartState, addProduct(mockedProduct));

    const updatedItemUnits = updatedCartState.cartList[0].amount;
    const UpdatedTotalPrice = updatedCartState.totalPrice;

    expect(updatedItemUnits).toEqual(2);
    expect(UpdatedTotalPrice).toEqual(mockedProduct.price * 2);

    const cartInStorage = JSON.parse(window.localStorage.getItem("cart") || "");
    expect(cartInStorage).toEqual(mockedUpCart);
  });

  it("should handle incrementProductAmount", () => {
    const mockedProduct = mockedUpCart.cartList[0].product;
    const cartState = cartReducer(
      mockedUpCart,
      incrementProductAmount(mockedProduct.id)
    );

    const itemUnits = cartState.cartList[0].amount;
    const totalPrice = cartState.totalPrice;

    expect(itemUnits).toEqual(3);
    expect(totalPrice).toEqual(mockedProduct.price * 3);
  });

  it("should handle decrementProductAmount", () => {
    const mockedProduct = mockedUpCart.cartList[0].product;
    const cartState = cartReducer(
      mockedUpCart,
      decrementProductAmount(mockedProduct.id)
    );

    const itemUnits = cartState.cartList[0].amount;
    const totalPrice = cartState.totalPrice;

    expect(itemUnits).toEqual(1);
    expect(totalPrice).toEqual(mockedProduct.price);
  });

  it("should handle removeProduct", () => {
    const mockedProduct = mockedUpCart.cartList[0].product;
    const cartState = cartReducer(
      mockedUpCart,
      removeProduct(mockedProduct.id)
    );

    const { cartList } = cartState;
    const totalPrice = cartState.totalPrice;

    expect(cartList).toHaveLength(0);
    expect(totalPrice).toEqual(0);
  });

  it("should handle loadCartFromStorage", () => {
    window.localStorage.setItem("cart", JSON.stringify(mockedUpCart));

    const cartState = cartReducer(undefined, loadCartFromStorage());

    expect(cartState).toEqual(mockedUpCart);
  });
});
