import React from "react";
import css from "./alert.css";

export function Alert(props) {
  return (
    <div>
      Alert: &nbsp;
      {props.children}
      <style jsx>{`
        ${css}
      `}</style>
    </div>
  );
}
