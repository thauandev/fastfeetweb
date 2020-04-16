import React, { useState, useEffect } from 'react';

import {
  Container,
  Content,
  Grid,
  HeaderGrid,
  GridItens,
  DeliveryMan,
} from './styles';

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

  async function handleSearch(e) {
    const response = await api.get(`/deliveries?product=${e.target.value}`);
    const { data } = response;

    setDeliveries(data);
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
        <SearchInput onChange={handleSearch} type="text" />
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
                  <GridItens key={delivery.id}>
                    <span>#{delivery.id}</span>
                    <span>{delivery.recipient.name}</span>
                    <DeliveryMan>
                      <img
                        src={delivery.deliveryman.avatar.url}
                        alt={delivery.deliveryman.avatar.name}
                      />
                      <span>{delivery.deliveryman.name}</span>
                    </DeliveryMan>

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
