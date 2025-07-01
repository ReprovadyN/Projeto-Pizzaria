import { Outlet } from "react-router";

import "./index.css";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <img src={"/images/LogoPizzaria.png"} alt="Logo Pizzaria" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
