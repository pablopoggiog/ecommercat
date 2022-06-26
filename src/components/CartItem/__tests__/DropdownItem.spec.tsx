import { render, screen, fireEvent } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { DropdownItem } from "../variants/DropdownItem";

const increment = jest.fn();
const decrement = jest.fn();

describe("DropdownItem", () => {
  it("increments and decrements when clicking on the buttons", async () => {
    render(
      <ChakraProvider theme={theme}>
        <DropdownItem
          product={product}
          amount={amount}
          increment={increment}
          decrement={decrement}
        />
      </ChakraProvider>
    );

    const incrementButton = screen.getByText("+1");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const decrementButton = screen.getByText("-1");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    const callbacksToValidate = [increment, decrement];

    callbacksToValidate.map((element) =>
      expect(element).toHaveBeenCalledTimes(2)
    );
  });

  it("renders the right information for the product", () => {
    render(
      <ChakraProvider theme={theme}>
        <DropdownItem
          product={product}
          amount={amount}
          increment={increment}
          decrement={decrement}
        />
      </ChakraProvider>
    );

    const productName = screen.getByText(product.name);
    const productImage = screen.getByAltText(`${product.name} thumbnail`);
    const amountOfItems = screen.getByText(amount);

    const elementsToValidate = [productName, productImage, amountOfItems];

    elementsToValidate.map((element) => expect(element).toBeInTheDocument());
  });
});

export const product = {
  name: "Mario - Cat",
  id: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000300-03a60102.png",
  image:
    "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000300-03a60102.png",
  price: 10,
  type: "Figure",
};

export const amount = 5;
