import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import VideoCarousel from "../../components/Carrousel/VideoCarousel";
import TitleCategory from "../../components/TitleCategory";
import { videos, categories } from "../../data/db";
import NaoEncontrada from "../NaoEncontrada";
import styles from "./Home.module.css";

export default function Home() {
  const [videochosen, setVideoChosen] = useState(videos[0]);
  const [categoryColorBanner, setcategoryColorBanner] = useState("");

  if (categories.length === 0) {
    return <NaoEncontrada />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const categoryBanner = categories.find(
      (category) => category.categoryName === videochosen.categoryName
    );

    if (categoryBanner === undefined) {
      const newCategoryBanner = categories[0];
      const newVideoChosen = videos.find(
        (video) => video.categoryName === newCategoryBanner.categoryName
      );
      setVideoChosen(newVideoChosen);
      setcategoryColorBanner(newCategoryBanner.categoryColor);
    } else setcategoryColorBanner(categoryBanner.categoryColor);
  }, [videochosen.categoryName]);

  return (
    <>
      <div className={styles.banner}>
        <Banner {...videochosen} categoryColor={categoryColorBanner} />
      </div>

      <div className={styles.firstCarousel}>
        <VideoCarousel categoria={videochosen.categoryName} />
      </div>

      {categories.map((category) => {
        const videoExist = videos.some(
          (video) => video.categoryName === category.categoryName
        );
        return videoExist ? (
          category.categoryName !== videochosen.categoryName ? (
            <div key={category.id}>
              <TitleCategory
                categoryColor={category.categoryColor}
                titleCategory={category.categoryDisplayName}
                categoryDescription={category.categoryDescription}
              />
              <VideoCarousel categoria={category.categoryName} />
            </div>
          ) : null
        ) : null;
      })}
    </>
  );
}
