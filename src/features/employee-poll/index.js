import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const EmployeePoll = () => {
  const currentUser = useSelector(selectCurrentUser);

  if (!currentUser) return <Navigate to="/auth" />;
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default EmployeePoll;
