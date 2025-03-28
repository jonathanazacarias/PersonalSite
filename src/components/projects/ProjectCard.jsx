import "./projectCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const {projectId, title = "Title", description = "A short description of the project.", thumbnailImg} = props;

  const projectLink = "project/"+projectId;

  let thumbnail;

  if(thumbnailImg==="" || thumbnailImg===null || thumbnailImg === undefined) {
    thumbnail = "/images/defaultCardImg.svg";
  } else {
    thumbnail = thumbnailImg;
  }
  
  return (
    <Link to={projectLink} className="link">
      <Card className="card">
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title className="cardTitle">{title}</Card.Title>
          <Card.Text className="cardText">
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProjectCard;
