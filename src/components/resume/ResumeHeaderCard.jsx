
// REPLACED BY HeaderCard.jsx


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import "./resume.css";

function ResumeHeaderCard(props) {
  const [profilePicture, title, downloadLink, downloadBtnText] = props;
  return (
    <Card className='headerCard' style={{border: 'none'}}>
      <Image src="src\assets\images\headshot-square.jpeg" roundedCircle fluid className='cardImg'/>
      <Card.Body className='cardBody'>
        <Card.Title>Software Developer</Card.Title>
        <Button variant="primary">Download Resume</Button>
      </Card.Body>
    </Card>
  );
}

export default ResumeHeaderCard;