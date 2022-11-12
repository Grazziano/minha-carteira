import React from 'react';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import { Container, Form, FormTitle, Logo } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={() => {}}>
        <FormTitle>Entrar</FormTitle>

        <Input type="email" placeholder="e-mail" required />

        <Input type="password" placeholder="senha" required />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

export default SignIn;
