import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useLanguage from '../context/useLanguage';

const useStyles = makeStyles({
  container: {
    marginTop: 40,
  },
  root: {
    minWidth: 250,
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  pad: {
    padding: 10,
  },
});

export default function Album() {
  const classes = useStyles();
  const { language } = useLanguage();

  return (
    <Container>
      <Grid className={classes.container} container spacing={3} justify="center" alignItems="center">
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>

              <Typography variant="h5" component="h2" className={classes.pad}>
                {language.home.demandTitle}
              </Typography>

              <Typography variant="body2" component="p" className={classes.pad}>
                {language.home.demandDescription}
              </Typography>

            </CardContent>
            <CardActions>
              <Button href="#/demand/add" size="large" variant="contained" color="primary">{language.home.callToAction}</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>

              <Typography variant="h5" component="h2" className={classes.pad}>
                {language.home.supplyTitle}
              </Typography>

              <Typography variant="body2" component="p" className={classes.pad}>
                {language.home.supplyDescription}
              </Typography>

            </CardContent>
            <CardActions>
              <Button disabled size="large" variant="contained" color="primary">{language.home.callToAction}</Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
}
