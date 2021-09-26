import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itensCarrinho: Array()
};

interface Produto {
  id: string;
  createdAt: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  quantity: number;
}

export const carrinhoSlice = createSlice({
  name: 'itensCarrinho',
  initialState,
  reducers: {
    addItemCarrinho: (state, { payload }) => {
      let posicaoProdutoAdicionado = state.itensCarrinho.findIndex(
        (element: Produto) => {
          return element.id == payload.id;
        }
      );
      // Se o produto ainda não está no carrinho, adiciona ao array
      if (posicaoProdutoAdicionado === -1) {
        state.itensCarrinho.push({ ...payload, quantity: 1 });
      } else {
        if (
          payload.stock > state.itensCarrinho[posicaoProdutoAdicionado].quantity
        ) {
          // Se o produto já estiver no carrinho e existir estoque, apenas aumenta a quantidade
          state.itensCarrinho[posicaoProdutoAdicionado].quantity += 1;
        } else {
          throw 'Ops, o estoque desse produto esgotou :(';
        }
      }
    },
    alteraItemCarrinho: (state: any, { payload }) => {
      let posicaoProduto = state.itensCarrinho.findIndex((element: any) => {
        return element.id == payload.id;
      });
      // Se o produto foi encontrado, altera o registro
      if (posicaoProduto !== -1) {
        if (payload.stock > payload.quantity) {
          // Verifica o estoque
          state.itensCarrinho[posicaoProduto] = payload;
        } else {
          throw 'Ops, o estoque desse produto esgotou :(';
        }
      }
    },
    removeItemCarrinho: (state, { payload }) => {
      const { id } = payload;

      state.itensCarrinho = state.itensCarrinho.filter(
        (item: { id: number }) => item.id !== id
      );
    },
    limparItensCarrinho: (state: any) => {
      state.itensCarrinho = [];
    }
  }
});

export const {
  addItemCarrinho,
  removeItemCarrinho,
  limparItensCarrinho,
  alteraItemCarrinho
} = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
