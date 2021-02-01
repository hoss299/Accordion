import React from "react";
import "./App.css";
import Question from "./question";
import data from "./data";

function App() {
  return (
    <div className="container">
      <h2>questions and answers about login</h2>

      <section className="info">
        {data.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

export default App;
