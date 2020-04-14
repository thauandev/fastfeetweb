import React from 'react';

import { Container, Content, Grid } from './styles';

import SearchInput from '~/components/SearchInput';
import Button from '~/components/Button';

export default function Delivery() {
  return (
    <Container>
      <Content>
        <strong>Gerenciando encomendas</strong>
        <SearchInput />
        <Button />
        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Destinatário</strong>
            <strong>Entregador</strong>
            <strong>Cidade</strong>
            <strong>Estado</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </section>
        </Grid>
      </Content>
    </Container>
  );
}
