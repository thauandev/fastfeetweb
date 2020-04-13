import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1290px;
  justify-content: space-between;
  margin-top: 35px;

  header {
    align-items: center;
    strong {
      font-size: 24px;
      text-align: right;
      letter-spacing: 0px;
      color: #444444;
      opacity: 1;
    }

    input {
      display: flex;
      height: 36px;
      width: 237px;
      margin-top: 35px;
      font-size: 14px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
    }
  }
`;
