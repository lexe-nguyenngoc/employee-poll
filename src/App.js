import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Auth from "./features/auth";
import EmployeePoll from "./features/employee-poll";
import LoginPage from "./features/auth/pages/Login";
import SignUpPage from "./features/auth/pages/SignUp";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <EmployeePoll />,
      children: [
        {
          path: "",
          element: <p>home</p>
        },
        {
          path: "leader-board",
          element: <p>leader-board</p>
        },
        {
          path: "new",
          element: <p>new</p>
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

  return routes;
};

export default App;
