import { useState } from "react";
import "./door.css";

function DoorButton(props) {
  const pullDoor = props.pullDoor;

  const [isHovered, setIsHovered] = useState(false);

  if (pullDoor) {
    return (
      <div
        className="doorframe"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <img className="door" src="src\components\doorButton\pulled-door.svg" />
        ) : (
          <img className="door" src="src\components\doorButton\door.svg" />
        )}
      </div>
    );
  } else {
    return (
      <div
        className="doorframe"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <img className="door" src="src\components\doorButton\pushed-door.svg" />
        ) : (
          <img className="door" src="src\components\doorButton\door.svg" />
        )}
      </div>
    );
  }
}

export default DoorButton;
