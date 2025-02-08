import "./projectCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const {projectId, title = "Title", description = "A short description of the project."} = props;
  const projectLink = "project/"+projectId;

  let img = props.img;

  if(img==="" || img===null || img === undefined) {
    img = "src/assets/images/defaultCardImg.svg";
  }
  
  return (
    <Link to={projectLink} className="link">
      <Card className="card">
        <Card.Img variant="top" src={img} />
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
