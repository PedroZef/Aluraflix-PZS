/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./VideoCard.module.css";

export default function VideoCard({ videoLink, categoryColor, videoCover }) {
  return (
    <div className={styles.section}>
      <Link to={videoLink} target="_blank">
        <div
          className={styles.videoCard}
          style={{
            border: `2px solid ${categoryColor}`,
          }}
        >
          <img src={videoCover} alt="Capa Video" />
        </div>
      </Link>
    </div>
  );
}
