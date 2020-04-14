import React from 'react';
import { Container, Content } from './styles';
import SearchInput from '~/components/SearchInput';

export default function Delivery() {
  return (
    <Container>
      <Content>
        <strong>Gerenciando encomendas</strong>
        <SearchInput />
      </Content>
    </Container>
  );
}
