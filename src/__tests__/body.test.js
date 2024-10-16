import Body from "../components/Body";
import { screen, render, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../assets/mockBodyData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("testing of body component", () => {
  it("should render body component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Body />
          </Provider>
        </BrowserRouter>
      )
    );
    const text = screen.getByText("Imperial Multicuisine Restaurant");
    expect(text).toBeInTheDocument();
  });
  it("should test top rated restaurant functionality", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Body />
          </Provider>
        </BrowserRouter>
      )
    );
    const btn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    expect(btn).toBeInTheDocument();
    const beforeResCards = screen.getAllByTestId("resCard");
    expect(beforeResCards.length).toBe(20);
    fireEvent.click(btn);
    const afterResCards = screen.getAllByTestId("resCard");
    expect(afterResCards.length).toBe(6);
  });
  it("should test search functionality", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Body />
          </Provider>
        </BrowserRouter>
      )
    );
    const searchBox = screen.getByTestId("searchBox");
    expect(searchBox).toBeInTheDocument();
    const beforeResCards = screen.getAllByTestId("resCard");
    expect(beforeResCards.length).toBe(20);
    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.change(searchBox, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);
    const afterResCards = screen.getAllByTestId("resCard");
    expect(afterResCards.length).toBe(4);
  });
});
