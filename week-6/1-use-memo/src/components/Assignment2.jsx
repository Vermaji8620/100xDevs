import React, { useEffect, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}

const ButtonCompo = ({ valbut, setValbut }) => {
  return (
    <button
      style={{ position: "relative", marginLeft: "300px" }}
      onClick={() => {
        setValbut(valbut + 1);
      }}
    >
      {" "}
      Click me {valbut}{" "}
    </button>
  );
};

export function Assignment2() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");
  const [valbut, setValbut] = useState(0);

  const filteredSentences = sentences.filter((x) => x.includes(filter));

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
      <ButtonCompo valbut={valbut} setValbut={setValbut} />
      {filteredSentences.map((word, i) => (
        <div key={i}>{word}</div>
      ))}
    </div>
  );
}
