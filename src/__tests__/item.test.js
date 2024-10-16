import { screen, render, fireEvent, act } from "@testing-library/react";
import Restaurant from "../components/Restaurant";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import MOCK_DATA from "../assets/mockResCategory.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("should check add to cart functionality", () => {
  it("should render item list component", async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <Restaurant />
        </Provider>
      )
    );
    const text = screen.getByText("Festive Gift Hampers - Ice Cream(2)");
    expect(text).toBeInTheDocument();
  });
  it("should test add to cart functionality", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <Restaurant />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
    const panel = screen.getByText("Festive Gift Hampers - Ice Cream(2)");
    fireEvent.click(panel);
    const items = screen.getAllByTestId("item");
    expect(items.length).toBe(2);
    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Cart (1)"));
    expect(screen.getByText("Price per Quantity :")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Cart (2)"));
    expect(screen.getAllByText("Price per Quantity :")[0]).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
});
