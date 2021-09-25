import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCarrinho,
  removeItemCarrinho
} from '../../redux/carrinho/carrinhoSlice';
import { RootState } from '../../redux/store';
import { getProdutos } from '../../services/api';
import { ContainerProdutos, Produto } from './style';
import { Header } from '../../components/Header';

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
    let idProduto = produto.id;
    let posicaoProdutoAdicionado = itensCarrinho.findIndex((element: any) => {
      return element.id == idProduto;
    });
    if (posicaoProdutoAdicionado === -1) {
      dispatch(addItemCarrinho({ ...produto, quantity: 1 }));
    }
  };

  return (
    <>
      <Header />
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
