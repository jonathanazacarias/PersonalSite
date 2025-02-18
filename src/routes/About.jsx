// // only used here if want to load local text file
// import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLoaderData } from "react-router-dom";
import PictureGallery from "../components/about/PictureGallery";
import "../css/about.css";
import { v4 as uuidv4 } from "uuid";
import HiddenTextDropdown from "../components/about/HiddenTextDropdown";

// // To load local text file
// import pSText from "../assets/working files/markdown/personalStatement.txt";
// import getText from "../utils/getLocalText.js";

import MarkdownRenderer from "../utils/MarkdownRenderer";

function About() {
  const about = useLoaderData();

  const basics = about.basics;
  const deep = about.deep;

  const introSummary = basics.intro;
  const galleryTitle = basics.galleryTitle;
  const galleryPhotoList = basics.galleryPhotoList;
  const bookInfluenceTitle = basics.bookInfluenceTitle;
  const bookInfluenceList = basics.bookInfluenceList;
  const bookLoveTitle = basics.bookLoveTitle;
  const bookLoveList = basics.bookLoveList;

  const personalStatement = deep.personalStatement;
  const joyListTitle = deep.joyListTitle;
  const joyList = deep.joyList;
  const goalListTitle = deep.goalListTitle;
  const goalList = deep.goalList;
  const qualitiesListTitle = deep.qualitiesListTitle;
  const qualitiesList = deep.qualitiesList;
  const improvmentListTitle = deep.improvmentListTitle;
  const improvmentList = deep.improvmentList;

  // // To load local text file
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   getText(pSText).then(text => setContent(text));
  // })

  return (
    <Container className="aboutPage">
      <h1>About Me</h1>

      <MarkdownRenderer markdown={introSummary} />
      <PictureGallery
        className="pictureGallery"
        galleryTitle={galleryTitle}
        galleryPhotoList={galleryPhotoList}
      />
      <Container>
        <Row>
          <Col>
            <p>{bookInfluenceTitle}</p>
            <ul>
              {bookInfluenceList?.map((book) => (
                <li key={uuidv4()}>{book}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <p>{bookLoveTitle}</p>
            <ul>
              {bookLoveList?.map((book) => (
                <li key={uuidv4()}>{book}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className="deepDiveSection">
        <h2>Get to know me deep dive:</h2>
        <HiddenTextDropdown
          title="Personal Philosphy on Life and Work:"
          content={personalStatement}
        />
        <Container>
          <Row>
            <Col>
              <p>{joyListTitle}</p>
              <ul>
                {joyList?.map((book) => (
                  <li key={uuidv4()}>{book}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{goalListTitle}</p>
              <ul>
                {goalList?.map((book) => (
                  <li key={uuidv4()}>{book}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{qualitiesListTitle}</p>
              <ul>
                {qualitiesList?.map((book) => (
                  <li key={uuidv4()}>{book}</li>
                ))}
              </ul>
            </Col>
            <Col>
              <p>{improvmentListTitle}</p>
              <ul>
                {improvmentList?.map((book) => (
                  <li key={uuidv4()}>{book}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default About;
