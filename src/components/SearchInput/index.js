import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function Input() {
  return (
    <Container>
      <input type="text" placeholder="Buscar por encomendas" />
      <MdSearch color="#999" size={20} />
    </Container>
  );
}
