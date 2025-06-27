import { Outlet } from "react-router";

import "./index.css";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <span>Seja bem vindo a</span>
      <img src={"/images/LogoPizzaria.png"} alt="Logo Pizzaria" />
      <span>Faça seu pedido online!</span>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
