/* eslint-disable react/prop-types */

import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./Header.module.css";
import logosm from "../../assets/imagens/LogoMenu.png";

export default function Header({ children }) {
  const navigate = useNavigate();
  const url = useLocation();

  return (
    <div className={styles.header}>
      <img
        onClick={() => navigate("/")}
        className={styles.logo}
        src={logosm}
        alt="Logotipo Alura"
      />

      {url.pathname === '/' && <Button className={styles.btn} bgcolor="black" onClick={() => navigate("/novovideo")}>
        {children}
      </Button>}

    </div>

  );
}