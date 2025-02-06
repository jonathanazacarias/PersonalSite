import "./pictureGallery.css";
import Image from 'react-bootstrap/Image';

function GalleryImage(props) {
    const imgLink = props.img;

    return (
        <Image className="galleryImage" src={imgLink}></Image>
    );
}

export default GalleryImage;