import { useState } from "react";
import "./doorButton.css";
import { Link } from "react-router-dom";
import door from "./doorImages/door.svg";
import pushedDoor from "./doorImages/pushed-door.svg";

function DoorButton(props) {
  const { link = "", closedDoorSrc = door, openDoorSrc = pushedDoor } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={link}>
      <div
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
