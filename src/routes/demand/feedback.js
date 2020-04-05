import React from 'react';
import {
  Container, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useLanguage from '../../context/useLanguage';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40,
  },
  button: {
    margin: 40,
    alignSelf: 'center',
  },
});

const FeedbackDemand = () => {
  const { language } = useLanguage();
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Typography variant="h2" component="h2" align="center">
        {language.demand.feedbackTitle}
      </Typography>

      <Typography variant="h4" component="h3" align="center">
        {language.demand.feedbackSubtitle}
      </Typography>

      <Button className={classes.button} href="#/demand/search" variant="contained" color="primary">{language.demand.callToAction}</Button>
    </Container>
  );
};

export default FeedbackDemand;
