import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { API_ENDPOINT } from "../../../utils/constants";

const isTokenExpired = (token: string) => {
  try {
    const decoded: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    console.log(error);
    return true;
  }
};

const refreshToken = async (token: string) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/auth/refresh`, {
      token,
    });
    return response.data.token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    localStorage.setItem("redirectPath", location.pathname);
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (isTokenExpired(token)) {
    refreshToken(token).then((newToken) => {
      if (newToken) {
        localStorage.setItem("token", newToken);
      } else {
        localStorage.setItem("redirectPath", location.pathname);
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    });
  }
  return children;
};

export default PrivateRoute;
