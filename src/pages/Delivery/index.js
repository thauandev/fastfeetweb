import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Content } from './styles';

export default function Delivery() {
  return (
    <Container>
      <Content>
        <header>
          <strong>Gerenciando encomendas</strong>
          <input type="text" placeholder="Buscar por encomendas" />
          <MdSearch color="#999" size={16} />
        </header>
      </Content>
    </Container>
  );
}
