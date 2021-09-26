import styled from 'styled-components';

export const Produto = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;

  .rows.quantidades {
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  .rows.quantidades .btn.btn-sm {
    @media (max-width: 600px) {
      padding: 0.6rem 0.6rem;
    }
  }
  .rows.quantidades button:last-child {
    margin-left: auto;
  }
  .form-control.quantidade {
    width: 4em;
    text-align: center;
  }

  img {
    margin-bottom: 0.2em;
    width: 130px;
    margin-right: 0.5em;
    @media (max-width: 600px) {
      width: 70px;
    }
    @media (max-width: 768px) {
      width: 80px;
    }
  }
  .alignCenter {
    align-items: center;
  }
  .columns {
    flex-direction: column;
  }
  .rows {
    display: flex;
    flex-direction: row;
  }
  button {
    align-self: end;
    background-color: rgb(255, 101, 0);
    color: #ffffff;
  }
  h2 {
    font-size: 14px;
    color: #42464d;
    flex: 1;
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
