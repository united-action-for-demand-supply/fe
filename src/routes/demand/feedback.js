import React from 'react';
import {
  Container, Grid, Card, CardActions, CardContent, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useLanguage from '../../context/useLanguage';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40,
  },
  title: {
    marginTop: 20,
  },
  subtitle: {
    marginTop: 20,
  },
  button: {
    marginTop: 40,
    alignSelf: 'center',
  },
  cardAction: {
    flexDirection: 'column',
  },
});

const FeedbackDemand = () => {
  const { language } = useLanguage();
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={6}>
          <Card elevation={10}>
            <CardContent>
              <Typography className={classes.title} variant="h2" component="h2" align="center">
                {language.demand.feedbackTitle}
              </Typography>

              <Typography className={classes.subtitle} variant="h4" component="h3" align="center">
                {language.demand.feedbackSubtitle}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>
  );
};

export default FeedbackDemand;
