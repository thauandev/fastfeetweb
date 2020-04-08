import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  opacity: 1;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  img {
    width: 135px;
    height: 26px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-right: 20px;
  }
`;

export const Navigation = styled.div`
  padding-left: 30px;
  height: 32px;
  border-left: 1px solid #ddd;
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #999;
    transition: color 0.2s;
    &:hover {
      color: ${darken(0.09, '#999')};
    }
    &.active {
      color: #444;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  strong {
    font-weight: bold;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;
  }

  button {
    border: 0;
    background: none;
    color: #de3b3b;
    opacity: 1;
    transition: color 0.2s;
    &:hover {
      color: ${darken(0.1, '#de3b3b')};
    }
  }
`;
