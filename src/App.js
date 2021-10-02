import React, { useState } from "react";
import "./styles.css";

var heading = "Know your musical instrument emojis";
var color = "#F87171";
var emojiDictionary = {
  "🎸": "Guitar",
  "🎹": "Keyboard",
  "🥁": "Drums",
  "🎺": "Trumpet",
  "🎻": "Violin",
  "🎷": "Saxophone",
  "📯": "Postal Horn",
  "🔔": "Bell",
  "🪕": "Banjo",
  "📣": "Megaphone"
};

export default function App() {
  var [input, setInput] = useState("");
  var meaning = emojiDictionary[input];
  var emojisWeKnow = Object.keys(emojiDictionary);

  if (input === "") {
    meaning = "";
  } else if (!(input in emojiDictionary)) {
    meaning = "This emoji is not a musical instrument in our database";
  }

  function inputChangeHandler(event) {
    setInput(event.target.value);
    console.log(event.target.value);
  }

  function listItemHandler(item) {
    console.log("clicked ", item);
    setInput(item);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{heading}</h1>
      <div>
        <input onChange={inputChangeHandler} />
      </div>
      <div>
        <h2>{meaning}</h2>
      </div>
      <h2>Emojis we know</h2>
      {emojisWeKnow.map((item, index) => {
        return (
          <span
            style={{ fontSize: "3rem", padding: "1rem", cursor: "pointer" }}
            onClick={() => listItemHandler(item)}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
