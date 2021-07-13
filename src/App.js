import React, { useState } from "react";
import "./styles.css";

let emojiDict = {
  "🐶": "Dog",
  "🐱": "Cat",
  "🐭": "Rat",
  "🐹": "Rabbit",
  "🐰": "Bunny",
  "🦊": "Fox",
  "🐻": "Bear",
  "🐼": "Panda",
  "🦁": "Lion",
  "🐮": "Cow",
  "🐷": "Pig",
  "🐵": "Monkey",
  "🐸": "Frog",
  "🐴": "Horse",
  "🐺": "Wolf",
  "🐗": "Boar",
  "🐏": "Sheep",
  "🐿️": "Squirrel",
  "🐨": "Koala",
  "🐐": "Goat",
  "🦍": "Gorilla",
  "🐃": "Buffalo",
  "🐆": "Leopard",
  "🦌": "Deer",
  "🦏": "Rhinoceros"
};

let emojiList = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    let emoticon = event.target.value;
    if (emojiDict[emoticon] === undefined) {
      console.log(emojiDict[emoticon]);
      setMeaning("type an emoji or select one to know its meaning");
    } else {
      setMeaning(emojiDict[emoticon]);
    }
  }

  function emojiClickHandler(event) {
    let emoticon = event.target.innerText;
    setMeaning(emojiDict[emoticon]);
    document.querySelector("#inputEmoji").value = emoticon;
  }
  return (
    <div className="App">
      <h1>Know your Ani-moji</h1>
      <input
        id="inputEmoji"
        onChange={emojiChangeHandler}
        maxLength={2}
        placeholder="Enter your ani-moji here"
      ></input>
      <p className="outInfo">{meaning}</p>
      <p className="info">Emojis we know: </p>
      <ul>
        {emojiList.map((emoji, index) => {
          return (
            <li onClick={emojiClickHandler} key={index}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
