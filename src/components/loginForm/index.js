import React, { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@material-ui/core';


const LoginForm = () => {
  const [userName, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (password && userName) {
      return setDisabled(false)
    }
  }, [userName, password])

  const handleLogin = () => {
    alert('You are now logging in as ' + 'with username:' + userName + ' and password: ' + password)
  }


  return (
    <section >
      <Box display="flex" marginTop="50px" alignItems="center" margin="0 auto" flexDirection='column' justifyContent="space-between" maxWidth='40%' minHeight='300px'>
        <h3>Please login below</h3>
        <TextField fullWidth required id="outlined-basic" label="Username" variant="outlined" onChange={(e) => { setUsername(e.target.value) }} />
        <TextField
          fullWidth
          required
          id="standard-password-input"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <Button fullWidth variant="contained" disabled={disabled} color="primary" onClick={handleLogin}>Login</Button>

      </Box>
    </section>
  )
}

export default LoginForm
