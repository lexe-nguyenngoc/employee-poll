import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { selectCurrentUser } from "../../features/auth/authSlice";

const AuthenticatedGuard = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  if (!currentUser)
    return <Navigate to="/auth" replace state={{ path: location.pathname }} />;

  return children;
};

AuthenticatedGuard.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthenticatedGuard;
