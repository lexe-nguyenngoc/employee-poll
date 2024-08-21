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
import AuthenticatedGuard from "./components/routes/AuthenticatedGuard";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <AuthenticatedGuard>
          <EmployeePoll />
        </AuthenticatedGuard>
      ),
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "questions/:question_id",
          element: <Poll />
        },
        {
          path: "leaderboard",
          element: <Leaderboard />
        },
        {
          path: "add",
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
