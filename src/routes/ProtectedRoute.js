import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLogin } from "../store/Auth/Auth.slice";
import PathsUrl from "../constants/PathsURL";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const userIsLoggedIn = useSelector(isLogin);
  return !userIsLoggedIn ? (
    <Navigate to={PathsUrl?.login} replace state={{ from: location }} />
  ) : (
    children
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes?.node?.isRequired,
};

ProtectedRoute.defaultProps = {
  children: null,
};
export default ProtectedRoute;
