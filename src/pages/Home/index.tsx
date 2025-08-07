import { useState } from "react";
import "./index.css";

interface Pizza {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  categoria: string;
  estrelas: number;
}

const pizzas: Pizza[] = [
  {
    nome: "Margherita",
    descricao: "Massa fina e crocante, molho de tomate caseiro, manjericão fresco, queijo muçarela.",
    preco: "R$ 50,00",
    imagem: "https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg",
    categoria: "salgadas",
    estrelas: 5
  },
  {
    nome: "4 Queijos",
    descricao: "Muçarela, gorgonzola, parmesão e catupiry.",
    preco: "R$ 50,00",
    imagem: "https://www.manollopizzaria.com.br/wp-content/uploads/2015/03/4Queijos11.jpg",
    categoria: "salgadas",
    estrelas: 5
  },
  {
    nome: "Carne & Queijo",
    descricao: "Queijo muçarela, carne moída, cebola roxa e orégano.",
    preco: "R$ 50,00",
    imagem: "https://saboresdacidade.com/wp-content/uploads/2018/12/Massarica.15.jpg",
    categoria: "especiais",
    estrelas: 5
  }
];

const categorias = ["Todas", "Pizzas Salgadas", "Pizzas Especiais", "Pizzas Doces"];

export default function Home() {
  const [filtro, setFiltro] = useState<string>("Todas");
  const [busca, setBusca] = useState<string>("");

  const filtrarPizzas = pizzas.filter((pizza) => {
    const categoriaMatch =
      filtro === "Todas" || pizza.categoria === filtro.toLowerCase().split(" ")[1];
    const buscaMatch = pizza.nome.toLowerCase().includes(busca.toLowerCase());
    return categoriaMatch && buscaMatch;
  });

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="icon">☰</div>
        <img src={"/images/LogoPizzaria.png"} width="20%" height="20%" alt="Logo Pizzaria" />
        <div className="icon">🛒</div>
      </header>

      <h1 className="titulo">Cardápio</h1>

      {/* Barra de busca */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* Tamanhos */}
      <div className="tamanhos">
        <div>
          <div>🍕</div>
          <strong>PEQUENA</strong>
          <p>4 fatias<br />R$30,00</p>
        </div>
        <div>
          <div>🍕</div>
          <strong>MÉDIA</strong>
          <p>6 fatias<br />R$40,00</p>
        </div>
        <div>
          <div>🍕</div>
          <strong>GRANDE</strong>
          <p>8 fatias<br />R$50,00</p>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <img src="https://www.maxipizza.com.br/wp-content/uploads/Maxi-Sabores-480x400-c-default.jpg" alt="Banner" />
        <div className="banner-text">PIZZAS ESPECIAIS</div>
      </div>

      {/* Categorias */}
      <div className="categorias">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={filtro === cat ? "ativo" : ""}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de pizzas */}
      <div className="lista-pizzas">
        {filtrarPizzas.map((pizza) => (
          <div className="pizza-card" key={pizza.nome}>
            <img src={pizza.imagem} alt={pizza.nome} />
            <div className="info">
              <h3>{pizza.nome}</h3>
              <p>{pizza.descricao}</p>
              <div className="preco">{pizza.preco}</div>
              <div className="estrelas">{"★".repeat(pizza.estrelas)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
