import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("should test header component", () => {
  // afterAll(() => {
  //   console.log("after all");
  // });
  // afterEach(() => {
  //   console.log("after each");
  // });
  // beforeAll(() => {
  //   console.log("before all");
  // });
  // beforeEach(() => {
  //   console.log("before each");
  // });

  it("should render header component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const text = screen.getByText("Home");
    expect(text).toBeInTheDocument();
  });
  it("should check login functionality", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const login = screen.getByRole("button", { name: "Login" });
    expect(login).toBeInTheDocument();
    fireEvent.click(login);
    const logOut = screen.getByRole("button", { name: "Logout" });
    expect(logOut).toBeInTheDocument();
  });
});
