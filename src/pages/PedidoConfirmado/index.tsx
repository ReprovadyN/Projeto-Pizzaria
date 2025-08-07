
import "./index.css";
import { FaArrowLeft } from "react-icons/fa";

const PedidoConfirmado = () => {
  return (
    <div className="pedido-confirmado-container">
      <header className="pedido-confirmado-header">
        <button className="back-btn"><FaArrowLeft size={22} /></button>
      </header>
      <div className="pedido-confirmado-content">
        <div className="pedido-confirmado-check">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#fff" strokeWidth="6" fill="none" />
            <polyline points="30,55 46,70 72,38" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="pedido-confirmado-title">Pedido<br/>Confirmado</div>
      </div>
    </div>
  );
};

export default PedidoConfirmado;
