import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function Button({ link }) {
  return (
    <Container>
      <Link to={link}>
        <MdAdd />
        <span>CADASTRAR</span>
      </Link>
    </Container>
  );
}

Button.propTypes = {
  link: PropTypes.func.isRequired,
};
