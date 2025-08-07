import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./contexts/AuthContext";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PedidoConfirmado from "./pages/PedidoConfirmado";
import PaginaIndividual from "./pages/PaginaIndividual";
import MenuUsuario from "./pages/MenuUsuario";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          {/* youthflix.com.br/auth/login */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route path="menuUsuario" element={<MenuUsuario />} />
          <Route path="paginaIndividual" element={<PaginaIndividual />} />
          <Route path="pedidoConfirmado" element={<PedidoConfirmado />} />
        </Route>

        <Route index element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
</AuthProvider>
  </StrictMode>
);
