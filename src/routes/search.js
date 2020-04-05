import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";

import SearchItem from "../components/searchitem";
import request from "../request";

const mockRequest = () => [
  {
    title: "foo",
    image:
      "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    description: "We need a lot of help with thisss..."
  }
];

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const submitSearch = async () => {
    try {
      const response = await mockRequest("User", `/search?text=${searchText}`);
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
          type="text"
          label="text"
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

export default Search;
