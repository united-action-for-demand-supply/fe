import React from 'react';
import {
  Container, Grid, Card, CardActions, CardContent, Typography, RadioGroup, FormControlLabel, Radio, Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import useLanguage from '../../context/useLanguage';

const useStyles = makeStyles({
  container: {
    marginTop: 40,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
  },
});

const AddDemand = () => {
  const { language } = useLanguage();
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={6}>
          <Card elevation={10}>
            <CardContent>
              <Typography className={classes.title} variant="h4" component="h2">
                {language.demand.addTitle}
              </Typography>
              <RadioGroup aria-label="needed" name="needed">
                <FormControlLabel value="material" control={<Radio color="primary" />} label={language.demand.materialOption} />
                <FormControlLabel value="transport" control={<Radio color="primary" />} label={language.demand.transportOption} />
                <FormControlLabel value="resources" control={<Radio color="primary" />} label={language.demand.resourcesOption} />
                <FormControlLabel value="local" control={<Radio color="primary" />} label={language.demand.localOption} />
              </RadioGroup>
              <CardActions>
                <Button size="large" href="#/demand/feedback" variant="contained" color="primary">{language.demand.submitButton}</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddDemand;
