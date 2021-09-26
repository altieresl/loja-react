import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCarrinho,
  removeItemCarrinho,
  limparItensCarrinho
} from '../../redux/carrinho/carrinhoSlice';
import { RootState } from '../../redux/store';
import { getProdutos } from '../../services/api';
import { ContainerProdutos, Produto } from './style';
import { Header } from '../../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const itensCarrinho = useSelector(
    (state: RootState) => state.carrinho.itensCarrinho
  );
  const dispatch = useDispatch();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getProdutos()
      .then((res: any) => res.json())
      .then((json: any) => setProdutos(json));
  }, []);

  const adicionarProduto = (produto: any) => {
    try {
      dispatch(addItemCarrinho(produto));
    } catch (error) {
      console.log('adicionarProduto=> ', error);
      if (typeof error === 'string') toast.error(error);
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <ContainerProdutos className="d-flex flex-row flex-wrap">
        {produtos.map((produto: any, index: number) => {
          return (
            <Produto key={produto.id} className="p-2">
              <img src={produto.image} width="100%" />
              <h2>{produto.name}</h2>
              <span>$ {produto.price}</span>

              <button
                className="btn btn-sm"
                onClick={() => adicionarProduto(produto)}
              >
                Adicionar ao carrinho
              </button>
            </Produto>
          );
        })}
      </ContainerProdutos>
    </>
  );
}

export default App;
