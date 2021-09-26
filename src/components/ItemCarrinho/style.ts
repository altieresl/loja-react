import styled from 'styled-components';

export const Produto = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;

  .rows.quantidades button:last-child {
    margin-left: auto;
  }
  .number-input input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  .number-input input[type='number']::-webkit-inner-spin-button,
  .number-input input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  .number-input {
    // margin-bottom: 3rem;
  }
  .number-input button {
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0;
    position: relative;
  }
  .number-input button:before,
  .number-input button:after {
    display: inline-block;
    position: absolute;
    content: '';
    height: 2px;
    transform: translate(-50%, -50%);
  }
  .number-input button.plus:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .number-input input[type='number'] {
    text-align: center;
  }
  .number-input.number-input {
    border: 1px solid #ced4da;
    width: 10rem;
    border-radius: 0.25rem;
  }
  .number-input.number-input button {
    width: 2.6rem;
    height: 0.7rem;
    height: 100%;
  }
  .number-input.number-input button.minus {
    padding-left: 10px;
    height: 100%;
  }
  .number-input.number-input button:before,
  .number-input.number-input button:after {
    width: 0.7rem;
    background-color: #495057;
  }
  .number-input.number-input input[type='number'] {
    max-width: 4rem;
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-width: 0 1px;
    font-size: 1rem;
    height: 2.5rem;
    color: #495057;
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
