import React from "react";

export default function Func_JSX_BuiSonTung(props) {
  const users = {
    name: "bui son tung",
    age: 20,
  };

  return (
    <div>
      <h2>demo</h2>
      <p>welcome, {users.name}</p>
      <hr/>
      
    </div>
  );
}
