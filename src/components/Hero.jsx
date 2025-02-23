import React from "react";
import { Container } from "react-bootstrap";
import DoorButton from "./doorButton/DoorButton";

export default function Hero() {
  return (
    <Container>
      <div className="text-center">
        <p className="fs-1">HELLO</p>
        <p>I'M A</p>
      </div>
      <div className="text-center">
        <DoorButton
          link="/About"
          closedDoorSrc="src/components/doorButton/doorImages/door.svg"
          openDoorSrc="src/components/doorButton/doorImages/pulled-door.svg"
        ></DoorButton>
        <DoorButton
          link="/projects/project/2"
          closedDoorSrc="src/components/doorButton/doorImages/software-engineer-door.svg"
          openDoorSrc="src/components/doorButton/doorImages/software-engineer-door-pushed.svg"
        ></DoorButton>
        <DoorButton
          link=""
          closedDoorSrc="src/components/doorButton/doorImages/door.svg"
          openDoorSrc="src/components/doorButton/doorImages/pulled-door.svg"
        ></DoorButton>
      </div>
    </Container>
  );
}
