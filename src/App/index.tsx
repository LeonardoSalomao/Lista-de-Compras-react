import React from "react";
import ItemListaCarrinho from "../components/ItemListaCarrinho";
import Header from "../components/ItemListaCarrinho/Header";
import '../index.css';

const App = () => {
  return (
    <div>
      <Header />
      <h2>Lista de Produtos</h2>
      <ItemListaCarrinho />
      <ItemListaCarrinho />
      <ItemListaCarrinho />
      <ItemListaCarrinho />
    </div>
  );
};

export default App;
