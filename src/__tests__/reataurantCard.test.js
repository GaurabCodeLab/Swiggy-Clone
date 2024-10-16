import { screen, render } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../assets/mockResData.json";
import "@testing-library/jest-dom";

it("should render restaurant component", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const text = screen.getByText("Imperial Multicuisine Restaurant");
  expect(text).toBeInTheDocument();
});
