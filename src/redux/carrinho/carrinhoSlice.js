import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itensCarrinho: []
};

export const carrinhoSlice = createSlice({
  name: 'itensCarrinho',
  initialState,
  reducers: {
    addItemCarrinho: (state, { payload }) => {
      state.itensCarrinho.push(payload);
    },
    removeItemCarrinho: (state, { payload }) => {
      const { id } = payload;

      state.itensCarrinho = state.itensCarrinho.filter(
        (item) => item.id !== id
      );
    }
  }
});

export const { addItemCarrinho, removeItemCarrinho } = carrinhoSlice.actions;
export const { getItensCarrinho } = (state) =>
  state.itensCarrinho.itensCarrinho;
export default carrinhoSlice.reducer;
