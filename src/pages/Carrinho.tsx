import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCarrinho,
  removeItemCarrinho
} from '../redux/carrinho/carrinhoSlice';

function App() {
  // const itensCarrinho = useSelector((state) => state.carrinho.itensCarrinho);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('UseEffect=> ', itensCarrinho);
  // }, [itensCarrinho]);

  return (
    <div className="App">
      <p>Carrinho</p>
    </div>
  );
}

export default App;
