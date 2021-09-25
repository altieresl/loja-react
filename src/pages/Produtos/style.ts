import styled from 'styled-components';

export const ContainerProdutos = styled.div`
  flex: 1,
  display: flex;
  align-items: stretch;
  background: #EEE;
  margin: 0 10%;
`;

export const Produto = styled.div`
  flex: 0 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5em;
  img {
    margin-bottom: 0.2em;
  }
  button {
    align-self: end;
    background-color: rgb(255, 101, 0);
    color: #ffffff;
  }
  h2 {
    font-size: 14px;
    color: #42464d;
  }
  span {
    color: rgb(255, 101, 0);
    font-weight: 700;
    font-size: 20px;
  }
  > a {
    display: flex;
    align-items: center;
    color: #ff9000;
    text-decoration: none;
  }
`;
