/* eslint-disable react/prop-types */

import styles from "./Footer.module.css";
import logo from "../../assets/imagens/LogoFooter.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
    
        <img src={logo} alt="Logo Alura" />
     
      
    </footer>
  );
}
