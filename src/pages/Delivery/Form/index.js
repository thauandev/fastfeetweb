import React from 'react';

import RegisterDelivery from '~/components/RegisterDelivery';

import { Container, Content, FormDelivery } from './styles';

export default function Form() {
  return (
    <Container>
      <Content>
        <RegisterDelivery content="Cadastro de encomendas" backLink="/" />
        <FormDelivery> </FormDelivery>
      </Content>
    </Container>
  );
}
