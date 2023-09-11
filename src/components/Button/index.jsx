/* eslint-disable react/prop-types */

import styles from "./Button.module.css";

export default function Button({ children, bgcolor, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${styles.button} ${styles[bgcolor]}`}
      >
        {children}
      </button>
    </div>
  );
}
