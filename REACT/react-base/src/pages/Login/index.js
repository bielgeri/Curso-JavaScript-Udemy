import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>oie</small>
      </Title>
      <Paragrafo>lorem ipsum doloro sit amet.</Paragrafo>
      <button type='button'>Enviar</button>
    </Container>
  );
}
