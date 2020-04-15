import React, { useState, useEffect } from 'react';

import { Container, Content, Grid, HeaderGrid, GridItens } from './styles';

import SearchInput from '~/components/SearchInput';
import Button from '~/components/Button';

import api from '~/services/api';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

  function verifyStatus(delivery) {
    const statusProps = {
      name: 'PENDENTE',
      background: '#F0F0DF',
      text: '#C1BC35',
    };

    if (delivery.canceled_at) {
      statusProps.name = 'CANCELADA';
      statusProps.background = '#FAB0B0';
      statusProps.text = '#DE3B3B';
      return statusProps;
    }

    if (delivery.end_date) {
      statusProps.name = 'ENTREGUE';
      statusProps.background = '#DFF0DF';
      statusProps.text = '#2CA42B';
      return statusProps;
    }

    if (delivery.start_date) {
      statusProps.name = 'RETIRADA';
      statusProps.background = '#BAD2FF';
      statusProps.text = '#4D85EE';
      return statusProps;
    }
    return statusProps;
  }

  async function loadDeliveries() {
    const response = await api.get('/deliveries');

    const { data } = response;

    setDeliveries(data);
  }

  useEffect(() => {
    loadDeliveries();
  });

  return (
    <Container>
      <Content>
        <strong>Gerenciando encomendas</strong>
        <SearchInput />
        <Button />
        <Grid>
          <HeaderGrid>
            <smal>ID</smal>
            <smal>Destinatário</smal>
            <smal>Entregador</smal>
            <smal>Cidade</smal>
            <smal>Estado</smal>
            <smal>Status</smal>
            <smal>Ações</smal>
          </HeaderGrid>
          <div className="griditens">
            {deliveries.map((delivery) => {
              const status = verifyStatus(delivery);
              return (
                <>
                  <GridItens>
                    <span>#{delivery.id}</span>
                    <span>{delivery.recipient.name}</span>
                    <span>{delivery.deliveryman.name}</span>
                    <span>{delivery.recipient.city}</span>
                    <span>{delivery.recipient.state}</span>
                    <div
                      className="status"
                      style={{
                        background: status.background,
                      }}
                    >
                      <span
                        style={{
                          background: status.text,
                        }}
                        className="ball"
                      />
                      <span
                        style={{
                          color: status.text,
                        }}
                      >
                        <p>{status.name}</p>
                      </span>
                    </div>
                    <span>...</span>
                  </GridItens>
                </>
              );
            })}
          </div>
        </Grid>
      </Content>
    </Container>
  );
}
