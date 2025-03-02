import "./galleryImage.css";

function GalleryImage(props) {
    const imgLink = props.img;

    return (
        <img className="galleryImage" src={imgLink}></img>
    );
}

export default GalleryImage;