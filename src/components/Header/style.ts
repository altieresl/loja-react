import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  align-items: stretch;
  background: #2d2256;
  padding: 2em 1em;
  margin-bottom: 0.5em;
  flex-direction: row;
  align-items: center;
  h1 {
    flex: 1;
    color: #fff;
  }
  nav {
    flex: 10;
    padding: 0 0.5em;
  }
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
  }
  nav ul li {
    margin: 0 5px 0 0;
  }
  nav ul li.carrinho {
    margin-left: auto;
  }
  nav ul li.carrinho a {
    background-color: rgb(255, 101, 0);
  }
  nav ul li.carrinho a:hover {
    color: #D3D3D3;
  }
  nav ul li.carrinho span {
    background-color: #2d2256;
    padding: 5px;
    border-radius: 10px;
  }
  nav ul li a {
    color: #fff;
  }
`;
