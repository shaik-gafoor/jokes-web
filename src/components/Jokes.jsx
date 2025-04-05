import React from "react";
import data from "../data";
import "./Jokes.css";

function Jokes() {
  const jokesElement = data.map((joke) => (
    <div className="joke" key={joke.id}>
      <img
        {...joke.img}
        className={`joke-img ${joke.id === 2 ? "adjust-img" : ""}`}
      />
      <p className="text">{joke.text}</p>
    </div>
  ));
  return <article className="main">{jokesElement}</article>;
}

export default Jokes;
