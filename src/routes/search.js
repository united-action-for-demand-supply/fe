import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Slide,
  InputAdornment
} from "@material-ui/core";

import SearchItem from "../components/searchitem";
import SearchIcon from "@material-ui/icons/Search";
import request from "../request";

const mockRequest = () => [
  {
    title: "foo",
    image:
      "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    preview: "We need a lot of help with thisss...",
    description: "Lorem ipsum looong text"
  },
  {
    title: "mask",
    image:
      "data:image/jpeg;base64,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",
    preview: "We need a lot of help with thisss...",
    description: "Lorem ipsum looooooong text"
  },
  {
    title: "gloves",
    image:
      "https://sc01.alicdn.com/kf/UTB8IzCDiFPJXKJkSahVq6xyzFXa8/937964348/UTB8IzCDiFPJXKJkSahVq6xyzFXa8.jpg",
    preview: "We need a lot of help with thisss...",
    description: "Lorem ipsum looooooong text"
  }
];

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const submitSearch = async () => {
    try {
      const response = await mockRequest("Demand", "/search", "POST", {
        description: searchText
      });
      setSearchItems(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Container>
        <center className="flex flex-col rounded border-1 border-black">
          <h2>What do you need?</h2>
          <TextField
            id="outlined"
            variant="outlined"
            onChange={e => setSearchText(e.target.value)}
            type="text"
            placeholder="Food, Disinfectant"
            value={searchText}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />

          <Button onClick={submitSearch} variant="contained" color="secondary">
            Submit
          </Button>
          <div className="flex mt-12 justify-center align-center">
            {searchItems.map((item, index) => (
              <SearchItem item={item} key={index} />
            ))}
          </div>
        </center>
      </Container>
    </Slide>
  );
};

export default Search;
