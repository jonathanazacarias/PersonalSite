import { useState } from "react";
import "./door.css";
import { Link } from "react-router-dom";

function DoorButton(props) {
  const link = props.link;
  const openDoorSrc = props.openDoorSrc;
  const closedDoorSrc = props.closedDoorSrc;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={link}>
      <div
        className="doorframe"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <img className="door" src={openDoorSrc} />
        ) : (
          <img className="door" src={closedDoorSrc} />
        )}
      </div>
    </Link>
  );
}

export default DoorButton;
