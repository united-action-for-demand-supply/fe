import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Typography } from '@material-ui/core';

const App = () => (
  <Container>
    <Typography>
      Hello World.
    </Typography>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
