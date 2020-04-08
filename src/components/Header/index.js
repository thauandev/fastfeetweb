import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Navigation, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Navigation>
            <NavLink to="/delivery">ENCOMENDAS</NavLink>
            <NavLink to="/deliveryman">ENTREGADORES</NavLink>
            <NavLink to="/recipient">DESTINATÁRIOS</NavLink>
            <NavLink to="/problem">PROBLEMAS</NavLink>
          </Navigation>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <button type="button"> sair do sistema</button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
