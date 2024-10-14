import React from "react";
import { Container } from "react-bootstrap";
import DoorButton from "./doorButton/DoorButton";

export default function Hero() {
    return (
        <Container >
            <div className="text-center">
                <p className="fs-1">HELLO</p>
                <p>I'M A</p>
            </div>
            <div>
                <DoorButton pullDoor={false}></DoorButton>
                <DoorButton pullDoor={true}></DoorButton>
                <DoorButton pullDoor={false}></DoorButton>
            </div>
        </Container>
    )
}