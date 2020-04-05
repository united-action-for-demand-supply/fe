import React, { useState } from 'react';
import {
  Container, AppBar, Toolbar, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useLanguage from '../context/useLanguage';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
}));

const Header = () => {
  const classes = useStyles();
  const { changeLanguage } = useLanguage();
  const [colors, setColors] = useState({
    en: 'primary',
    sv: 'default',
  });

  const onClick = (lang) => {
    changeLanguage(lang);
    setColors({
      en: lang === 'en' ? 'primary' : 'default',
      sv: lang === 'sv' ? 'primary' : 'default',
    });
  };

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <nav>
            <Button color={colors.sv} onClick={() => onClick('sv')}>SV</Button>
            <Button color={colors.en} onClick={() => onClick('en')}>EN</Button>
          </nav>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
