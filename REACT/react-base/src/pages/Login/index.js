import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
    }

    getData();
  }, []);

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
