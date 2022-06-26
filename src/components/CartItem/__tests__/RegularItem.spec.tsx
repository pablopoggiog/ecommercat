import { render, screen, fireEvent } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { RegularItem } from "../variants/RegularItem";

const increment = jest.fn();
const decrement = jest.fn();
const remove = jest.fn();

describe("RegularItem", () => {
  it("increments and decrements when clicking on the buttons", async () => {
    render(
      <ChakraProvider theme={theme}>
        <RegularItem
          product={product}
          amount={amount}
          increment={increment}
          decrement={decrement}
          remove={remove}
        />
      </ChakraProvider>
    );

    const incrementButton = screen.getByText("+1");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const decrementButton = screen.getByText("-1");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    const removeButton = screen.getByTestId("delete-icon");
    fireEvent.click(removeButton);
    fireEvent.click(removeButton);

    const callbacksToValidate = [increment, decrement, remove];

    callbacksToValidate.map((element) =>
      expect(element).toHaveBeenCalledTimes(2)
    );
  });

  it("renders the right information for the product", () => {
    render(
      <ChakraProvider theme={theme}>
        <RegularItem
          product={product}
          amount={amount}
          increment={increment}
          decrement={decrement}
          remove={remove}
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
