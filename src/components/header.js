import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
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
  return (
    <AppBar className={classes.appBar} position="static" color="default" elevation={0}>
      <Toolbar>
        <nav>
          <Button onClick={() => changeLanguage('sv')}>SV</Button>
          <Button onClick={() => changeLanguage('en')}>EN</Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
