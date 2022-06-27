import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "state/store";
import theme from "theme";
import { ProductCard } from "..";

// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};

describe("ProductCard", () => {
  it("renders the right information for the product", () => {
    render(
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <ProductCard
            key={product.image}
            image={product.image}
            name={product.name}
            type={product.type}
            price={product.price}
            id={product.image}
          />
        </ChakraProvider>
      </Provider>
    );

    const productName = screen.getByText(product.name);
    const addToCartButton = screen.getByRole("button");
    const typeTag = screen.getByText(product.type);
    const priceTag = screen.getByText(`$${product.price}`);

    const elementsToValidate = [
      productName,
      addToCartButton,
      typeTag,
      priceTag,
    ];

    elementsToValidate.map((element) => expect(element).toBeInTheDocument());
  });
});

const product = {
  name: "Mario - Cat",
  id: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000300-03a60102.png",
  image:
    "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000300-03a60102.png",
  price: 10,
  type: "Figure",
};
