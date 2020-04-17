import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdCheck, MdArrowBack } from 'react-icons/md';

import { Container, Wrap } from './styles';

export default function SaveButton({ backLink, content }) {
  return (
    <Container>
      <strong>{content}</strong>
      <Wrap>
        <Link to={backLink}>
          <MdArrowBack />
          <span>VOLTAR</span>
        </Link>
        <button type="submit">
          <MdCheck />
          <span>SALVAR</span>
        </button>
      </Wrap>
    </Container>
  );
}
SaveButton.propTypes = {
  backLink: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
