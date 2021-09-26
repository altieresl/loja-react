import styled from 'styled-components';

export const Container = styled.div`
  flex: 1,
  display: flex;
  align-items: stretch;
  background: #EEE;
  margin: 0 10%;
  @media (max-width: 768px) {
    margin: 0 0.5%;
  }
  .text-right b {
    font-weight: 700;
  }
`;
