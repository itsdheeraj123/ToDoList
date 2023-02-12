import React, { useState } from "react";
import "./App.css";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "../node_modules/font-awesome/css/font-awesome.css";
// import "../node_modules/font-awesome/less/icons.less";
// import "../node_modules/font-awesome/scss/_icons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
// import And from "./App_test";

const App = () => {
  const [data, setData] = useState("");
  const [data1, setData1] = useState([]);
  const handler = (e) => {
    setData(e.target.value);
  };

  const submit = () => {
    setData1((prev) => {
      return [...prev, data];
    });
    setData("");
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setData1((prev) => {
      return prev.filter((curr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          {/* <FontAwesomeIcon icon="fa-solid fa-octagon-xmark" /> */}

          <br />
          <input
            type="text"
            value={data}
            onChange={handler}
            placeholder="Add an Item"
          ></input>

          <button onClick={submit}>+</button>
          <ol>
            {data1.map((elem, index) => {
              let id = index;
              return (
                <div
                  key={index}
                  id={index}
                  onClick={() => deleteItem(id)}
                  className="todo_style"
                >
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    className="todo_style"
                  />
                  <li>{elem}</li>
                  {/* <And id={index} /> */}
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
