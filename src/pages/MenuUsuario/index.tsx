
import "./index.css";
import pizzaLogo from "../../../public/images/LogoPizzaria.png";
import { FaShoppingCart, FaBars, FaBell, FaComments, FaCreditCard, FaHeart, FaUser, FaCog } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const MenuUsuario = () => {
  return (
    <div className="menu-usuario-overlay">
      <div className="menu-usuario-sidebar">
        <div className="menu-usuario-header">
          <button className="menu-btn"><FaBars size={24} /></button>
          <img src={pizzaLogo} alt="Logo Pizzaria 360" className="logo" />
          <button className="cart-btn"><FaShoppingCart size={24} /></button>
        </div>
        <nav className="menu-usuario-nav">
          <a className="menu-link"><FaShoppingCart /> Carrinho</a>
          <a className="menu-link"><FaBell /> Notificações</a>
          <a className="menu-link"><FaComments /> Conversas</a>
          <a className="menu-link"><FaCreditCard /> Pagamentos</a>
          <a className="menu-link"><FaHeart /> Favoritos</a>
        </nav>
        <div className="menu-usuario-footer">
          <a className="menu-link perfil"><FaUser /> Perfil</a>
          <a className="menu-link config"><FaCog /> Configurações</a>
        </div>
      </div>
      <div className="menu-usuario-backdrop"></div>
    </div>
  );
};

export default MenuUsuario;
