import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Auth from "./features/auth";
import EmployeePoll from "./features/employee-poll";
import LoginPage from "./features/auth/pages/Login";
import SignUpPage from "./features/auth/pages/SignUp";
import Home from "./features/employee-poll/pages/Home";
import Loading from "./components/Loading";
import Poll from "./features/employee-poll/pages/Poll";
import NewPoll from "./features/employee-poll/pages/NewPoll";
import Leaderboard from "./features/employee-poll/pages/Leaderboard";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <EmployeePoll />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "poll/:id",
          element: <Poll />
        },
        {
          path: "leader-board",
          element: <Leaderboard />
        },
        {
          path: "new",
          element: <NewPoll />
        }
      ]
    },
    {
      path: "auth",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <LoginPage />
        },
        {
          path: "signup",
          element: <SignUpPage />
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <>
      <Loading />
      {routes}
    </>
  );
};

export default App;
