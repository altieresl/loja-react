import React, { useEffect, useState } from 'react';
import { Produto } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  removeItemCarrinho,
  alteraItemCarrinho
} from '../../redux/carrinho/carrinhoSlice';
import { toast } from 'react-toastify';

export const ItemCarrinho = (props: any) => {
  const itensCarrinho = useSelector(
    (state: RootState) => state.carrinho.itensCarrinho
  );
  const [quantidade, setQuantidade] = useState(0);
  const { produto } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantidade(produto.quantity);
  }, [produto.quantity]);

  const alterarQuantidade = () => {
    if (quantidade < 1) {
      removerProduto();
    } else {
      let copiaProduto = { ...produto, quantity: quantidade || 0 };
      try {
        dispatch(alteraItemCarrinho(copiaProduto));
        toast.success('Quantidade alterada com sucesso!');
      } catch (error) {
        console.log('adicionarProduto=> ', error);
        if (typeof error === 'string') toast.error(error);
      }
    }
  };
  const removerProduto = () => {
    try {
      dispatch(removeItemCarrinho(produto));
      toast.success('Produto removido com sucesso!');
    } catch (error) {
      if (typeof error === 'string') toast.error(error);
    }
  };

  const alteracaoInput = (quantidade: number) => {
    setQuantidade(quantidade || 0);
  };

  return (
    <Produto className="p-2">
      <div className="rows alignCenter">
        <img src={produto.image} className="img-thumbnail img-fluid" />
        <div className="columns">
          <h2>{produto.name}</h2>

          <span>$ {produto.price}</span>
        </div>
      </div>
      <div className="rows quantidades alignCenter">
        <input
          className="form-control quantidade"
          name="quantidade"
          onChange={(event) => alteracaoInput(parseInt(event.target.value))}
          type="number"
          value={quantidade}
        />
        <button className="btn btn-sm" onClick={() => alterarQuantidade()}>
          Alterar quantidade
        </button>
        <button className="btn btn-sm" onClick={() => removerProduto()}>
          Remover
        </button>
      </div>
    </Produto>
  );
};
