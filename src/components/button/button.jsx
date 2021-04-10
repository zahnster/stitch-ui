import React from "react";
import css from "./button.css";

export function Button(props) {
  return (
    <button className="st-button">
      {props.children}
      <style jsx>{css}</style>
    </button>
  );
}
