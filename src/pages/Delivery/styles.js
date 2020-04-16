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
  margin-top: 30px;
`;
export const HeaderGrid = styled.div`
  margin-left: 20px;
  display: grid;
  grid-template-columns: 0.5fr 0.8fr 0.8fr 0.8fr 1fr 1fr 0.3fr;
  justify-items: flex-start;
  font-weight: bold;
  font-size: 16px;
  color: #444444;
  opacity: 1;
`;

export const GridItens = styled.div`
  display: grid;
  width: 1290px;
  height: 57px;
  align-items: center;
  grid-template-columns: 0.5fr 0.8fr 0.8fr 0.8fr 1fr 1.1fr 0.3fr;
  justify-items: flex-start;
  font-weight: bold;
  font-size: 15px;
  color: #666666;
  opacity: 1;
  margin-top: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;

  > span {
    margin-left: 20px;
  }

  .status {
    display: inline-flex;
    align-items: center;
    padding: 6px;
    margin-left: 25px;
    border-radius: 12px;
    .ball {
      width: 8px;
      height: 8px;
      margin-left: 3px;
      margin-right: 5px;
      border-radius: 50%;
    }
  }
`;

export const DeliveryMan = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50px;
  }
  span {
    margin-left: 5px;
  }
`;
