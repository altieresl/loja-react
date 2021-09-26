import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ItemCarrinho } from '../../components/ItemCarrinho';
import { Container } from './style';
import { Header } from '../../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Carrinho() {
  const itensCarrinho = useSelector(
    (state: RootState) => state.carrinho.itensCarrinho
  );
  const [valorTotal, setValorTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let valorTotal = 0;
    itensCarrinho.forEach((item) => {
      valorTotal += +item.price * +item.quantity;
    });
    setValorTotal(valorTotal);
  }, [itensCarrinho]);

  return (
    <>
      <Header />
      <ToastContainer />
      <Container className="d-flex flex-column">
        {itensCarrinho.length == 0 && (
          <h3 className="p-2">Seu carrinho está vazio.</h3>
        )}
        {itensCarrinho.map((produto: any, index: number) => {
          return <ItemCarrinho produto={produto} key={produto.id} />;
        })}
        <div className="text-right">
          <p>
            Valor total: <b>$ {valorTotal.toFixed(2)}</b>
          </p>
        </div>
      </Container>
    </>
  );
}

export default Carrinho;
