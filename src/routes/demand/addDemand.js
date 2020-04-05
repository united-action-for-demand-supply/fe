import React from 'react';
import {
  Container, Typography, RadioGroup, FormControlLabel, Radio, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useLanguage from '../../context/useLanguage';

const useStyles = makeStyles({
  container: {
    marginTop: 40,
  },
});

const AddDemand = () => {
  const { language } = useLanguage();
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Typography variant="h5" component="h2">
        {language.demand.addTitle}
      </Typography>
      <RadioGroup aria-label="needed" name="needed">
        <FormControlLabel value="material" control={<Radio />} label={language.demand.materialOption} />
        <FormControlLabel value="transport" control={<Radio />} label={language.demand.transportOption} />
        <FormControlLabel value="resources" control={<Radio />} label={language.demand.resourcesOption} />
        <FormControlLabel value="local" control={<Radio />} label={language.demand.localOption} />
      </RadioGroup>
      <Button href="#/demand/feedback" variant="contained" color="primary">{language.demand.submitButton}</Button>
    </Container>
  );
};

export default AddDemand;
