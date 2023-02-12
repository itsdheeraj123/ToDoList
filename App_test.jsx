import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
  });

  const handler = (e) => {
    // console.log(e.target.value);
    let value = e.target.value;
    let name = e.target.name;
    setData((prev) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prev.lname,
        };
      } else if (name === "lname") {
        return {
          fname: prev.fname,
          lname: value,
        };
      }
    });
  };
  const Submit = (e) => {
    e.preventDefault();
    console.log("Working");
  };
  return (
    <>
      <form onSubmit={Submit}>
        <h1>
          {data.fname} {data.lname}
        </h1>
        <input
          type="text"
          name="fname"
          value={data.fname}
          onChange={handler}
          placeholder="Enter firstname"
        ></input>
        <br />
        <input
          type="text"
          name="lname"
          value={data.lname}
          onChange={handler}
          placeholder="Enter lastname"
        ></input>
        <br />
        <button type="submit">Click me to Submit</button>
      </form>
    </>
  );
};
export default App;
