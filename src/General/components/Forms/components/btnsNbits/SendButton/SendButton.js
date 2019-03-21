import React from "react";
import styles from "./SendButton.module.css";

const SendButton = props => (
  <button
    type="submit"
    disabled={props.disabled}
    onClick={props.onClick}
    className={styles.sendBtn}
  >
    Send
  </button>
);

export default SendButton;
