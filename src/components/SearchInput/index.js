import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function Input({ onChange }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Buscar por encomendas"
        onChange={onChange}
      />
      <MdSearch color="#999" size={20} />
    </Container>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};
