import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itensCarrinho: Array()
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
        (item: { id: any }) => item.id !== id
      );
    }
  }
});

export const { addItemCarrinho, removeItemCarrinho } = carrinhoSlice.actions;
export const getItensCarrinho = (state: {
  itensCarrinho: { itensCarrinho: any };
}) => state.itensCarrinho.itensCarrinho;
export default carrinhoSlice.reducer;
