/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

export default function Banner({
  videoImgLink,
  categoryDisplayName,
  description,
  title,
  videoLink,
  categoryColor,
}) {
  return (
    <section className={styles.container}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)), url(${videoImgLink})`,
        }}
      >
        <div className={styles.banner_left}>
          <div
            className={styles.title}
            style={{ backgroundColor: `${categoryColor}` }}
          >
            <h1>{categoryDisplayName}</h1>
          </div>
          <div className={styles.subtitle}>
            <h2>{title}</h2>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
        <div
          className={styles.player}
          style={{
            border: `2px solid ${categoryColor}`,
          }}
        >
          <Link to={videoLink} target="_blank">
            <img src={videoImgLink} alt="foto video" />
          </Link>
        </div>
      </div>
    </section>
  );
}
