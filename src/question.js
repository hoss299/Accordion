import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ title, info }) {
  const [clicked, setClicked] = useState(false);

  return (
    <article>
      <header>
        <h4>{title}</h4>
        <button className="toggle-btn" onClick={() => setClicked(!clicked)}>
          {clicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {clicked && <p>{info}</p>}
    </article>
  );
}

export default Question;
