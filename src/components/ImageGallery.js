import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "../Profile.module.css";

const ImageG = (props) => {
  const images = [
    {
      original: props.data[0].image,
      thumbnail: props.data[0].image,
    },
    {
      original: "../icons/HKSCDA_logo.jpeg",
      thumbnail: "../icons/HKSCDA_logo.jpeg",
    },
  ];
  return (
    <div className={styles["App"]}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        slideOnThumbnailOver={true}
        autoPlay={true}
        slideInterval={8000}
        renderItem={(item) => (
          <img
            src={item.original}
            className={styles["slider"]}
            alt={item.originalAlt}
            title={item.originalTitle}
          />
        )}
      />
    </div>
  );
};

export default ImageG;
