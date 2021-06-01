import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const updateTextInput = (e) => setTextInput(e.target.value);

  const [list, setList] = useState([]);
  const postTweet = () => {
    setList([textInput, ...list]);
    setTextInput("");
  };

  const deleteTweet = (item, index) => {
    // which tweet to delete
    list.splice(index, 1);

    // so that we can update the view
    setList([...list]);
  };

  return (
    <div className="bg-dark">
      <h1 className="bg-primary text-light p-3 sticky-top d-flex justify-content-center">
        fakebook
      </h1>

      <div className="alert alert-dark row">
        <input
          type="text"
          value={textInput}
          onChange={(e) => updateTextInput(e)}
          className="form-control mb-1"
          placeholder="Write Here"
        />
        <input
          type="button"
          className="btn btn-primary"
          onClick={() => postTweet()}
          value="Post"
        />
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="alert alert-secondary d-flex justify-content-between align-items-center"
        >
          {item}
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteTweet(item, index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
