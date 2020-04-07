import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  padding: 60px 30px;

  img {
    width: 100%;
    height: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      height: 45px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        text-align: left;
        letter-spacing: 0px;
        color: #999999;
        opacity: 1;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }
`;
