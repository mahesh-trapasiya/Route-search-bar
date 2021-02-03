import React from "react";

export default function secondPage({ match: { params } }) {
  return (
    <div>
      <h1>Second Page {params.id}</h1>
    </div>
  );
}
