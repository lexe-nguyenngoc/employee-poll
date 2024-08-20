import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { loginAsync } from "./features/auth/asyncActions";

describe("App component", () => {
  test("should match with snapshot", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });

  test("should show login page when user is not login", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(view.queryByText(/login/i)).toBeInTheDocument();
  });

  test("should show dashboard page when user is login", async () => {
    await store.dispatch(
      loginAsync({ user: "sarahedo", password: "password123" })
    );

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(view.queryByText(/home/i)).toBeInTheDocument();
  });

  test("should show leaderboard when user is login", async () => {
    await store.dispatch(
      loginAsync({ user: "sarahedo", password: "password123" })
    );

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const link = view.queryByText(/leaderboard/i);
    expect(link).toBeInTheDocument();
    fireEvent.click(link);

    expect(view.queryByText(/users/i)).toBeInTheDocument();
    expect(view.queryByText(/answered/i)).toBeInTheDocument();
    expect(view.queryByText(/created/i)).toBeInTheDocument();
  });

  test("should show new page when user is login", async () => {
    await store.dispatch(
      loginAsync({ user: "sarahedo", password: "password123" })
    );

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

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
    await store.dispatch(
      loginAsync({ user: "sarahedo", password: "password123" })
    );

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const btn = view.queryByText(/logout/i);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);

    expect(view.queryByText(/login/i)).toBeInTheDocument();
  });
});
