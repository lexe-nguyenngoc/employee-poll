import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { getQuestionsThunk } from "./asyncActions";

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
