/* eslint-disable react/prop-types */
import styles from "./TitleCategory.module.css";

export default function TitleCategory({
  categoryColor,
  titleCategory,
  categoryDescription,
}) {
  return (
    <div className={styles.section}>
      <div
        className={styles.title}
        style={{ backgroundColor: `${categoryColor}` }}
      >
        <h2>{titleCategory}</h2>
      </div>
      <p>{categoryDescription}</p>
    </div>
  );
}
