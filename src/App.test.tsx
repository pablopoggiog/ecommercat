import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "state/store";
import App from "./App";

describe("App", () => {
  it("renders the logo in the header", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const nintendoLogo = screen.getByAltText(/nintendo logo/i);

    expect(nintendoLogo).toBeInTheDocument();
  });
});
