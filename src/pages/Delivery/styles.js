import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1290px;
  margin-top: 35px;

  strong {
    font-size: 24px;
    text-align: right;
    letter-spacing: 0px;
    color: #444444;
    opacity: 1;
  }
`;

export const Grid = styled.div`
  height: 400px;
  margin-top: 20px;
  > section {
    display: grid;

    grid-template-columns: 0.2fr 1fr 1.2fr 1fr 1fr 1fr 1fr;

    strong {
      font-size: 16px;
      color: #444;
    }
  }
`;
