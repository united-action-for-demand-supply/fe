import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useLanguage from '../context/useLanguage';
import Header from '../components/header';

const Home = () => {
  const { language } = useLanguage();
  return (
    <Container>
      <Header />
      <Typography>
        {language.title}
      </Typography>
    </Container>
  );
};

export default Home;
