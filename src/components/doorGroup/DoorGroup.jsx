import { useState } from "react";
import { Container } from "react-bootstrap";
import DoorButton from "./doorButton/DoorButton";
import doorData from "./doorData.json";
import Doormat from "./doormat/Doormat";

import "./doorGroup.css";

function DoorGroup() {
  // not loading door data in from loader data because it will never be changable via web interface
  const doors = doorData.doors;
  const personalDoors = doors.filter((door) => door.catagory === 1);
  const professionDoors = doors.filter((door) => door.catagory === 2);
  const hobbyDoors = doors.filter((door) => door.catagory === 3);

  // make a list with all the doormat buttons and their associated door data
  const labelButtons = doors.map((door) => {
    let doorButton = {
      doorID: door.id,
      doorName: door.name,
      button: door.matData.matImage,
      position: door.matData.matPosition,
    };
    return doorButton;
  });

  // get a random door from each catagory, set to empty object if list is empty
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomDoor(doorList) {
    let door = null;
    if (doorList.length > 0) {
      door = doorList[getRandomIntInclusive(0, doorList.length - 1)];
    }
    return door;
  }

  // create state for each door, and set to a random door from specified door catagory
  const [personalDoor, setPersonalDoor] = useState(
    getRandomDoor(personalDoors)
  );
  const [professionDoor, setProfessionDoor] = useState(
    getRandomDoor(professionDoors)
  );
  const [hobbyDoor, setHobbyDoor] = useState(getRandomDoor(hobbyDoors));

  // functions to handle door choice click
  function personalDoorChange(doorID) {
    let door = personalDoors.find((door) => door.id === doorID);
    setPersonalDoor(door);
  }
  function professionDoorChange(doorID) {
    let door = professionDoors.find((door) => door.id === doorID);
    console.log(door)
    setProfessionDoor(door);
  }

  function hobbyDoorChange(doorID) {
    let door = hobbyDoors.find((door) => door.id === doorID);
    setHobbyDoor(door);
  }

  return (
    <Container className="doorGroup">
      <div className="doorSet">
        {personalDoor ? (
          <DoorButton
            link={personalDoor.link}
            closedDoorSrc={personalDoor.closedImage}
            openDoorSrc={personalDoor.openedImage}
            helpText={personalDoor.toolTipText}
          />
        ) : (
          <DoorButton />
        )}
        <Doormat
          button1={labelButtons.find(
            (label) => label.doorName === "Problem Solver"
          )}
          button2={labelButtons.find((label) => label.doorName === "Leader")}
          button3={labelButtons.find((label) => label.doorName === "Doer")}
          handleBtnClick={personalDoorChange}
        />
      </div>
      <div className="doorSet">
        {professionDoor ? (
          <DoorButton
            link={professionDoor.link}
            closedDoorSrc={professionDoor.closedImage}
            openDoorSrc={professionDoor.openedImage}
            helpText={professionDoor.toolTipText}
          />
        ) : (
          <DoorButton />
        )}
        <Doormat
          button1={labelButtons.find(
            (label) => label.doorName === "Software Engineer"
          )}
          button2={labelButtons.find(
            (label) => label.doorName === "Website Builder"
          )}
          button3={labelButtons.find((label) => label.doorName === "Manager")}
          handleBtnClick={professionDoorChange}
        />
      </div>
      <div className="doorSet">
        {hobbyDoor ? (
          <DoorButton
            link={hobbyDoor.link}
            closedDoorSrc={hobbyDoor.closedImage}
            openDoorSrc={hobbyDoor.openedImage}
            helpText={hobbyDoor.toolTipText}
          />
        ) : (
          <DoorButton />
        )}
        <Doormat
          button1={labelButtons.find(
            (label) => label.doorName === "Grandmaster"
          )}
          button2={labelButtons.find((label) => label.doorName === "Mechanic")}
          button3={labelButtons.find((label) => label.doorName === "Musician")}
          button4={labelButtons.find((label) => label.doorName === "Maker")}
          handleBtnClick={hobbyDoorChange}
        />
      </div>
    </Container>
  );
}

export default DoorGroup;
