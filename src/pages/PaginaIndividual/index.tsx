import { useState } from "react";
import "./index.css";
import pizzaLogo from "../../../public/images/LogoPizzaria.png";
import backgroundImg from "../../../public/images/Background Quente.png";
import { FaArrowLeft, FaHeart, FaShoppingCart } from "react-icons/fa";
import StarRating from "../../components/StarRating";

const pizza = {
  name: "Margherita",
  description:
    "A Margherita é feita com massa fina e crocante, molho de tomate artesanal, pimentão, cebola roxa, fatias finas de tomate, cogumelos frescos, azeitonas pretas, orégano, presente de qualidade premium, calabresa e muito queijo mussarela.",
  price: 50,
  rating: 5,
  image:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
};

const PaginaIndividual = () => {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [obs, setObs] = useState("");

  const handleQuantity = (delta: number) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  return (
    <div className="pagina-individual-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <header className="pagina-individual-header">
        <button className="back-btn"><FaArrowLeft size={22} /></button>
        <img src={pizzaLogo} alt="Logo Pizzaria 360" className="logo" />
        <button className="fav-btn"><FaHeart size={22} /></button>
      </header>
      <div className="pizza-img-box">
        <img src={pizza.image} alt={pizza.name} className="pizza-img" />
      </div>
      <div className="pizza-sizes-individual">
        {['P', 'M', 'G'].map((s) => (
          <button
            key={s}
            className={`size-btn${size === s ? ' selected' : ''}`}
            onClick={() => setSize(s)}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="pizza-price-individual">R$ {pizza.price.toFixed(2)}</div>
      <div className="pizza-desc-individual">{pizza.description}</div>
      <div className="avaliacao-box">
        <span>Avaliação</span>
        <StarRating rating={pizza.rating} />
      </div>
      <div className="obs-box">
        <label htmlFor="obs">Observações</label>
        <textarea
          id="obs"
          placeholder="Ex.: Sem Tomate e azeitonas e mais assada um pouco..."
          value={obs}
          onChange={(e) => setObs(e.target.value)}
        />
      </div>
      <div className="add-cart-row">
        <div className="quantity-box">
          <button onClick={() => handleQuantity(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantity(1)}>+</button>
        </div>
        <span className="qtd-label">Quantidade</span>
        <span className="total-label">Total</span>
        <span className="total-value">R$ {(pizza.price * quantity).toFixed(2)}</span>
      </div>
      <button className="add-cart-btn">
        <FaShoppingCart style={{ marginRight: 8 }} /> Adicionar ao carrinho
      </button>
    </div>
  );
};

export default PaginaIndividual;
