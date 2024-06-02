const { render, screen, fireEvent } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { BrowserRouter } = require("react-router-dom");
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

it("Should render home component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render component with a cart items as 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItemsZero = screen.getByText("Cart (0) items");

  expect(cartItemsZero).toBeInTheDocument();
});

it("Should render component Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItemsZero = screen.getByText(/Cart/);

  expect(cartItemsZero).toBeInTheDocument();
});

it("Should change login to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();

});
