import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentUser } from "../auth/authSlice";
import Nav from "./components/Nav";

const EmployeePoll = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default EmployeePoll;
