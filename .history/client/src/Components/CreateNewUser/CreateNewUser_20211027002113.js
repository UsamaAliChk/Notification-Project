import React from "react";
import { Grid, Input } from "semantic-ui-react";
export default function CreateNewUser() {
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          width: "700px",
          height: "500px",
          marginLeft: "30%",
        }}
      >
        <input placeholder="Client Name" />
        <input placeholder="Client Email" />
        <input placeholder="Client Password" type="password" />
      </div>
    </div>
  );
}
