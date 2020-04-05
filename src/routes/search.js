import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";

import SearchItem from "../components/searchitem";
import request from "../request";

const Register = () => {
  const [searchText, setSearchText] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const submitSearch = async () => {
    try {
      const response = await request("User", `/search?text=${searchText}`);
      setSearchItems(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <center className="flex flex-col rounded border-1 border-black">
        <TextField
          onChange={e => setSearchText(e.target.value)}
          required
          type="text"
          id="standard-basic"
          label="email"
          placeholder="Food, Disinfectant"
          value={searchText}
        />

        <Button onClick={submitSearch} variant="contained" color="secondary">
          Submit
        </Button>

        {searchItems.map((item, index) => (
          <SearchItem item={item} key={index} />
        ))}
      </center>
    </Container>
  );
};

export default Register;
