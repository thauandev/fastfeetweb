import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    width: 142px;
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
      margin-left: 10px;

      font-size: 28px;
    }
  }
`;
