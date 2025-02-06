import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import GalleryImage from "./GalleryImage";
import "./pictureGallery.css";

import { v4 as uuidv4 } from "uuid";

function PictureGallery(props) {
  const title = props.galleryTitle;
  const galleryPhotoList = props.galleryPhotoList;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="gallery">
      <h2>{title}</h2>
      <Carousel
        className="carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {galleryPhotoList.map((photo) => (
          <Carousel.Item key={uuidv4()}>
            <GalleryImage img={photo} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PictureGallery;
