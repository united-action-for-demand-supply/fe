import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import request from "../request";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const submitForm = async () => {
    if (!email && !password) return alert("Missing email or password!");

    try {
      const response = await request("Auth", "/api", "POST", {
        email,
        password
      });
      console.log(response);
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <center className="flex flex-col rounded border-1 border-black">
        <TextField
          onChange={e => setEmail(e.target.value)}
          required
          type="email"
          id="standard-basic"
          label="email"
          value={email}
        />
        <TextField
          required
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <Button onClick={submitForm} variant="contained" color="secondary">
          Submit
        </Button>
      </center>
    </Container>
  );
};

export default Register;
