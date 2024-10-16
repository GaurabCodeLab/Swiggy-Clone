// in sum.test.js

// import sum from "../components/sum";
// test("should return sum of two numbers", () => {
//   const result = sum(2, 5);
//   expect(result).toBe(7);
// });

// in grocery.test.js
// import Grocery from "../components/Grocery";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

// describe("Testing of Grocery Component", () => {
//   // afterAll(() => {
//   //   console.log("after all");
//   // });
//   // afterEach(() => {
//   //   console.log("after each");
//   // });
//   // beforeAll(() => {
//   //   console.log("before all");
//   // });
//   // beforeEach(() => {
//   //   console.log("before each");
//   // });

//   it("Should render button element in Grocery component", () => {
//     render(<Grocery />);
//     const button = screen.getByRole("button");
//     expect(button).toBeInTheDocument();
//   });

//   it("Should render button text in Grocery component", () => {
//     render(<Grocery />);
//     const button = screen.getByText("Click me!!!");
//     expect(button).toBeInTheDocument();
//   });

//   it("Should check heading element", () => {
//     render(<Grocery />);
//     const heading = screen.getByRole("heading");
//     expect(heading).toBeInTheDocument();
//   });

//   it("Should render Grocery component", () => {
//     render(<Grocery />);
//     const heading = screen.getAllByRole("heading");
//     expect(heading.length).not.toBe(2);
//   });
// });

// in header.test.js
// import Header from "../components/Header";
// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { Provider } from "react-redux";
// import store from "../redux/store";
// import { BrowserRouter } from "react-router-dom";

// it("Should contain login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const heading = screen.getByRole("button", { name: "Login" });
//   expect(heading).toBeInTheDocument();
// });

// it("should contain one text", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const text = screen.getByText("Home");
//   expect(text).toBeInTheDocument();
// });

// it("Should convert login button into logout after click", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const login = screen.getByRole("button", { name: "Login" });
//   fireEvent.click(login);
//   const logout = screen.getByRole("button", { name: "Logout" });
//   expect(logout).toBeInTheDocument();
// });

// in body.test.js
// import { render, screen, fireEvent, act } from "@testing-library/react";
// import Body from "../components/Body";
// import { Provider } from "react-redux";
// import store from "../redux/store";
// import { BrowserRouter } from "react-router-dom";
// import MOCK_DATA from "../assets/mockResData.json";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     ok: true,
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// it("Should render body component with search button", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <Body />
//         </Provider>
//       </BrowserRouter>
//     );
//   });
//   const searchBtn = screen.getByRole("button", { name: "Search" });
//   expect(searchBtn).toBeInTheDocument();
// });

// it("Should test search functionality", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <Body />
//         </Provider>
//       </BrowserRouter>
//     );
//   });
//   const searchBtn = screen.getByRole("button", { name: "Search" });
//   const searchInput = screen.getByTestId("searchBox");
//   const beforeResCard = screen.getAllByTestId("resCard");
//   expect(beforeResCard.length).toBe(20);
//   fireEvent.change(searchInput, { target: { value: "pizza" } });
//   fireEvent.click(searchBtn);
//   const afterResCard = screen.getAllByTestId("resCard");
//   expect(afterResCard.length).toBe(2);
// });

// it("Should check to rated restaurant functionality", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <Body />
//         </Provider>
//       </BrowserRouter>
//     )
//   );
//   const beforeResCard = screen.getAllByTestId("resCard");
//   expect(beforeResCard.length).toBe(20);
//   const topResBtn = screen.getByRole("button", {
//     name: "Top Rated Restaurants",
//   });
//   fireEvent.click(topResBtn);
//   const afterResCard = screen.getAllByTestId("resCard");
//   expect(afterResCard.length).toBe(15);
// });

// in restaurantCard.test.js
// import RestaurantCard from "../components/RestaurantCard";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import mockData from "../assets/mockData.json";

// it("Should render restaurantCard component", () => {
//   render(<RestaurantCard resData={mockData} />);
//   const text = screen.getByText("Subway");
//   expect(text).toBeInTheDocument();
// });

// in item.test.js
// import { render, act, screen, fireEvent } from "@testing-library/react";
// import Restaurant from "../components/Restaurant";
// import MOCK_DATA from "../assets/mockResDataItems.json";
// import { Provider } from "react-redux";
// import Header from "../components/Header";
// import store from "../redux/store";
// import { BrowserRouter } from "react-router-dom";
// import Cart from "../components/Cart";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve(MOCK_DATA),
//   });
// });

// describe("Test Add To Cart Functionality", () => {
//   it("Should render Restaurant items", async () => {
//     await act(async () =>
//       render(
//         <Provider store={store}>
//           <Restaurant />
//         </Provider>
//       )
//     );
//     const heading = screen.getByText("KFC");
//     expect(heading).toBeInTheDocument();
//   });

//   it("should click on panel", async () => {
//     await act(async () =>
//       render(
//         <BrowserRouter>
//           <Provider store={store}>
//             <Restaurant />
//             <Header />
//             <Cart />
//           </Provider>
//         </BrowserRouter>
//       )
//     );
//     const panel = screen.getByText("NEW CHICKEN ROLLS(15)");
//     expect(panel).toBeInTheDocument();
//     fireEvent.click(panel);
//     const itemsCategory = screen.getAllByTestId("resCategory");
//     expect(itemsCategory.length).toBe(15);
//     const addBtns = screen.getAllByRole("button", { name: "ADD" });
//     expect(addBtns.length).toBe(15);
//     const headingTextBefore = screen.getByText("Cart (0)");
//     expect(headingTextBefore).toBeInTheDocument();
//     fireEvent.click(addBtns[0]);
//     const headingTextAfter = screen.getByText("Cart (1)");
//     expect(headingTextAfter).toBeInTheDocument();
//     const cartText = screen.getByText("Price per Quantity :");
//     expect(cartText).toBeInTheDocument();
//     const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
//     fireEvent.click(clearBtn);
//     expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
//   });
// });
