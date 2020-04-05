import React, { useState } from 'react';
import {
  FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchFilter = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="search-filter">Filters</InputLabel>
      <Select
        labelId="search-filter"
        id="search-filter"
        value={filter}
        onChange={handleChange}
        label="Filter"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="material">Material</MenuItem>
        <MenuItem value="transport">Transport</MenuItem>
        <MenuItem value="resource">Resource</MenuItem>
        <MenuItem value="location">Location</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SearchFilter;
