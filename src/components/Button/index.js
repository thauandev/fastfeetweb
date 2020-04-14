import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function Button() {
  return (
    <Container>
      <button type="button">
        <MdAdd />
        <span>CADASTRAR</span>
      </button>
    </Container>
  );
}
