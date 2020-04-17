import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    display: flex;
    justify-content: flex-start;
  }
`;

export const Wrap = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;
    width: 112px;
    height: 36px;

    color: white;
    background: #7d40e7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    opacity: 1;
    &:hover {
      background: ${darken(0.05, '#7d40e7')};
    }
    span {
      font-weight: bold;
      margin-top: 5px;
      width: 82px;
      height: 19px;
      display: flex;
    }

    svg {
      margin-right: 2px;
      margin-left: 15px;

      font-size: 28px;
    }
  }

  a {
    display: flex;
    align-items: center;
    width: 112px;
    height: 36px;
    margin-right: 15px;

    color: white;
    background: #cccccc 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    opacity: 1;
    &:hover {
      background: ${darken(0.05, '#CCCCCC')};
    }
    span {
      font-weight: bold;
      margin-top: 5px;
      width: 82px;
      height: 19px;
      display: flex;
    }

    svg {
      margin-right: 2px;
      margin-left: 15px;

      font-size: 28px;
    }
  }
`;
