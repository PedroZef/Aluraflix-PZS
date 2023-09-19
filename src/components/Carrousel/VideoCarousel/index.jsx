import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./VideoCarousel.module.css";
import VideoCard from "../VideoCard";
import { videos, categories } from "../../../data/db";

// eslint-disable-next-line react/prop-types
export default function VideoCarousel({ categoria }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
    className={styles.container}
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}

      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      
    
    >
      {videos.map((video) => {
        if (video.categoryName === categoria) {
          return (
            <VideoCard
              key={video.id}
              categoryColor={
                categories.find(
                  (category) => category.categoryName === categoria
                ) === undefined
                  ? "#fff"
                  : categories.find(
                      (category) => category.categoryName === categoria
                    ).categoryColor
              }
              videoCover={video.videoImgLink}
              videoLink={video.videoLink}
            />
          );
        }
      })}
    </Carousel>
  );
}
