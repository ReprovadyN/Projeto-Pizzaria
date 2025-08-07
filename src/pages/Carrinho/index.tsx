import { useState, useEffect } from "react";
import "./index.css";
import pizzaLogo from "../../../public/images/LogoPizzaria.png";
import backgroundImg from "../../../public/images/Background Quente.png";
import { FaArrowLeft, FaShoppingCart, FaCreditCard, FaMapMarkerAlt } from "react-icons/fa";


// Utilizando localStorage para persistência simples do carrinho
const getCartFromStorage = () => {
  try {
    const data = localStorage.getItem("pizzaria_cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const setCartToStorage = (cart: any[]) => {
  localStorage.setItem("pizzaria_cart", JSON.stringify(cart));
};

const Carrinho = () => {
  const [cart, setCart] = useState<any[]>(getCartFromStorage());

  useEffect(() => {
    setCartToStorage(cart);
  }, [cart]);

  const removeItem = (idx: number) => {
    setCart(cart.filter((_, i) => i !== idx));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="carrinho-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <header className="carrinho-header">
        <button className="back-btn"><FaArrowLeft size={22} /></button>
        <img src={pizzaLogo} alt="Logo Pizzaria 360" className="logo" />
        <button className="cart-btn"><FaShoppingCart size={22} /></button>
      </header>
      <h2 className="carrinho-title">Seu carrinho</h2>
      <div className="cart-list">
        {cart.length === 0 ? (
          <div className="cart-empty">Seu carrinho está vazio.</div>
        ) : (
          cart.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <div className="cart-item-title">{item.name}</div>
                <div className="cart-item-qtd">{item.quantity}x</div>
                <div className="cart-item-obs">Obs: {item.obs || "-"}</div>
              </div>
              <div className="cart-item-price">R$ {(item.price * item.quantity).toFixed(2)}</div>
              <button className="cart-item-remove" onClick={() => removeItem(idx)}>Remover</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-payment-section">
        <div className="cart-payment-row">
          <FaCreditCard className="cart-icon" />
          <span>Forma de pagamento</span>
          <span className="cart-payment-edit">Alterar</span>
        </div>
        <div className="cart-payment-method">Mastercard **** 1234</div>
        <div className="cart-payment-row">
          <FaMapMarkerAlt className="cart-icon" />
          <span>Endereço de Entrega</span>
          <span className="cart-payment-edit">Alterar</span>
        </div>
        <div className="cart-payment-address">Av. Exemplo de Morada, 123, Bairro, Cidade/UF<br/>CEP: 00000-000</div>
      </div>
      <div className="cart-footer">
  <button className="cart-finish-btn" disabled={cart.length === 0}>
          Finalizar pedido
        </button>
        <span className="cart-total">R$ {total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Carrinho;
