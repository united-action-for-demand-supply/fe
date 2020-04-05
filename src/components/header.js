import React, { useState } from 'react';
import {
  Container, AppBar, Toolbar, Button, InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, fade } from '@material-ui/core/styles';
import useLanguage from '../context/useLanguage';
import SearchFilter from './searchfilter';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  appBar: {
    padding: '10px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#97d3d9',
  },
}));

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

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
      <AppBar className={classes.appBar} position="static" elevation={0}>

        <img src="https://i.imgur.com/BZiF69D.png" alt="logo" width="200px" />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(e) => setSearchText(e.target.value)}
            inputProps={{ 'aria-label': 'search' }}
          />
          <Button onClick={() => onSearch(searchText)}>Search</Button>
        </div>
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
