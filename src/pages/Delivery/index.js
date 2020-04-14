import React from 'react';
import { Container, Content } from './styles';
import Input from '~/components/Input';

export default function Delivery() {
  return (
    <Container>
      <Content>
        <strong>Gerenciando encomendas</strong>
        <Input />
      </Content>
    </Container>
  );
}
