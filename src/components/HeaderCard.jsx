import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function HeaderCard(props) {
  const {profilePicture, title, downloadLink, downloadBtnText} = props;
  return (
    <Card className='headerCard' style={{border: 'none'}}>
      <Image src={profilePicture} roundedCircle fluid className='cardImg'/>
      <Card.Body className='cardBody'>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">{downloadBtnText}</Button>
      </Card.Body>
    </Card>
  );
}

export default HeaderCard;