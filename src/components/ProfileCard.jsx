import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function ProfileCard(props) {
  const {profilePicture="src/assets/images/defaultCardImg.svg", title="Title", description, handleBtnClick, buttonText} = props;
  return (
    <Card className='headerCard' style={{border: 'none'}}>
      <Image src={profilePicture} roundedCircle fluid className='cardImg'/>
      <Card.Body className='cardBody'>
        <Card.Title>{title}</Card.Title>
        {description?<Card.Body>{description}</Card.Body>:<></>}
        {buttonText?<Button onClick={handleBtnClick} variant="primary">{buttonText}</Button>:<></>}
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;