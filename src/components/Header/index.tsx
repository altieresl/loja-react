import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Header = () => {
  const itensCarrinho = useSelector(
    (state: RootState) => state.carrinho.itensCarrinho
  );
  const [quantidadeItensCarrinho, setQuantidadeItensCarrinho] = useState(0);

  useEffect(() => {
    let quantidade = 0;
    itensCarrinho.forEach((item) => {
      quantidade += parseInt(item.quantity);
    });
    setQuantidadeItensCarrinho(quantidade);
  }, [itensCarrinho]);

  return (
    <Menu>
      <h1>Loja</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="carrinho">
            <Link to="/carrinho" className="btn btn-sm">
              <span>{quantidadeItensCarrinho || 0}</span> Carrinho
            </Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};
