import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Produtos from '../pages/Produtos';
import Carrinho from '../pages/Carrinho';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Produtos} path="/" exact />
      <Route component={Carrinho} path="/carrinho" />
    </BrowserRouter>
  );
};

export default Routes;
