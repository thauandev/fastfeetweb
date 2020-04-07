import React from 'react';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <input type="email" placeholder="exemplo@email.com" />
        <input type="password" placeholder="*************" />

        <button type="submit">Entrar no Sistema</button>
      </form>
    </>
  );
}
