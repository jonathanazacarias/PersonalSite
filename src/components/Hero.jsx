import React from "react";
import { Container } from "react-bootstrap";
import DoorGroup from "./doorGroup/DoorGroup";

export default function Hero() {
  return (
    <Container>
      <div className="text-center">
        <p className="fs-1">HELLO</p>
        <p >I'M A</p>
      </div>
      <DoorGroup></DoorGroup>
    </Container>
  );
}
