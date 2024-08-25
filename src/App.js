import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "./components/NotFound";
import Loading from "./components/Loading";
import AuthenticatedGuard from "./components/routes/AuthenticatedGuard";

import { MainLayout } from "./layouts";

import Auth from "./features/auth";
import EmployeePoll from "./features/employee-poll";
import LoginPage from "./features/auth/pages/Login";
import SignUpPage from "./features/auth/pages/SignUp";
import Home from "./features/employee-poll/pages/Home";
import Poll from "./features/employee-poll/pages/Poll";
import NewPoll from "./features/employee-poll/pages/NewPoll";
import Leaderboard from "./features/employee-poll/pages/Leaderboard";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <AuthenticatedGuard>
          <MainLayout>
            <EmployeePoll />
          </MainLayout>
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
      element: (
        <MainLayout>
          <NotFound />
        </MainLayout>
      )
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
