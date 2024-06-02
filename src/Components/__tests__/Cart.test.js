import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Mock_Menu_Data from "../mocks/ResMenuApi.json";
const { Provider } = require("react-redux");
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Mock_Menu_Data),
  })
);

it("should load resturant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accHeader = screen.getByText("Dosa (11)");

  fireEvent.click(accHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  const addBtns = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1) items")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2) items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(13);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  expect(screen.getByText("Cart empty add items now")).toBeInTheDocument();
});
