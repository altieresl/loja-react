import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Header = () => {
  const itensCarrinho = useSelector(
    (state: RootState) => state.carrinho.itensCarrinho
  );
  return (
    <Menu>
      <h1>Loja</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="carrinho">
            <Link to="/" className="btn btn-sm">
              <span>{itensCarrinho.length || 0}</span> Carrinho
            </Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};
