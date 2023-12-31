/* eslint-disable react/prop-types */

import styles from "./Footer.module.css";
import logo from "../../assets/imagens/LogoFooter.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/PedroZef/Aluraflix-PZS">
        <img src={logo} alt="Logo" />
        <p>
          <span className={styles.dev}>Pedro Zeferino da Silva 2023</span>
        </p>
      </a>
    </footer>
  );
}
