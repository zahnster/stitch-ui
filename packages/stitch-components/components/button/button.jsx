import React from "react";
import PropTypes from "prop-types";

import css from "./button.css";

export function Button(props) {
  return (
    <button
      className={`stui-button ${props.variant}`}
      disabled={props.disabled}
    >
      {props.children}

      <style jsx>{`
        ${css}
      `}</style>
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};
