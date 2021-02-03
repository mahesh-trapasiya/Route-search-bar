import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function SearchAppBar({ history }) {
  const [search, setSearch] = useState("/");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TextField
        id="standard-basic"
        label="Search"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          console.log(e);
          if (e.charCode === 13) {
            history.push(e.target.value);
          }
        }}
      />
    </div>
  );
}
