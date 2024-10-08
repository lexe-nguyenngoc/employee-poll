import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./app/store";
import { loginAsync } from "./features/auth/asyncActions";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
describe("App component", () => {
  test("should match with snapshot", () => {
    const view = renderWithProviders(<App />);
    expect(view).toMatchSnapshot();
  });

  test("should show login page when user is not login", () => {
    const view = renderWithProviders(<App />);
    expect(view.queryByText(/login/i)).toBeInTheDocument();
  });

  test("should show dashboard page when user is login", async () => {
    const store = setupStore();
    await store.dispatch(
      loginAsync({ user: "sarahedo", password: "password123" })
    );

    const view = renderWithProviders(<App />, { store });

    expect(view.queryByText(/home/i)).toBeInTheDocument();
  });

  test("should show leaderboard when user is login", async () => {
    const store = setupStore();
    await store.dispatch(
      loginAsync({ user: "sarahedo", password: "password123" })
    );

    const view = renderWithProviders(<App />, { store });

    const link = view.queryByText(/leaderboard/i);
    expect(link).toBeInTheDocument();
    fireEvent.click(link);

    expect(view.queryByText(/users/i)).toBeInTheDocument();
    expect(view.queryByText(/answered/i)).toBeInTheDocument();
    expect(view.queryByText(/created/i)).toBeInTheDocument();
  });

  test("should show new page when user is login", async () => {
    const store = setupStore();
    await store.dispatch(
      loginAsync({ user: "sarahedo", password: "password123" })
    );

    const view = renderWithProviders(<App />, { store });

    const link = view.queryByText(/new/i);
    expect(link).toBeInTheDocument();
    fireEvent.click(link);

    expect(view.queryByText(/would you rather/i)).toBeInTheDocument();
    expect(view.queryByText(/create your own poll/i)).toBeInTheDocument();
    expect(view.queryByText(/first option/i)).toBeInTheDocument();
    expect(view.queryByText(/second option/i)).toBeInTheDocument();
    expect(view.queryByText(/submit/i)).toBeInTheDocument();
  });

  test("should show login page when user is login and click logout", async () => {
    const store = setupStore();
    await store.dispatch(
      loginAsync({ user: "sarahedo", password: "password123" })
    );

    const view = renderWithProviders(<App />, { store });

    const btn = view.queryByText(/logout/i);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);

    expect(view.queryByText(/login/i)).toBeInTheDocument();
  });
});
