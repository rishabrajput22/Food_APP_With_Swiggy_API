import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/ResCard.json";
import "@testing-library/jest-dom";

it("should render resturant card with props data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Pizza Hut");

  expect(resName).toBeInTheDocument();
});
