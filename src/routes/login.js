import React from 'react';
import { Container, Typography } from '@material-ui/core';
import LoginForm from '../components/loginForm'

const Login = () => (
  <Container>
    <Typography>
      Login route
    </Typography>
    <LoginForm />
  </Container>
);

export default Login;
