import React from "react";

const SearchItem = ({ item: { title, image, description } }) => (
  <div>
    <h1>{title}</h1>
    <img alt={title} src={image} />
    <h1>{description}</h1>
  </div>
);

export default SearchItem;
