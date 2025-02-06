import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import PictureGallery from "../components/about/PictureGallery";
import "../css/about.css";
import { v4 as uuidv4 } from "uuid";
import HiddenTextAccordion from "../components/about/HiddenTextAccordion";

function About(props) {
  const data = props.data;
  const basics = data.basics;
  const deep = data.deep;

  const introSummary = basics.intro;
  const galleryTitle = basics.galleryTitle;
  const galleryPhotoList = basics.galleryPhotoList;
  const bookInfluenceTitle = basics.bookInfluenceTitle;
  const bookInfluenceList = basics.bookInfluenceList;
  const bookLoveTitle = basics.bookLoveTitle;
  const bookLoveList = basics.bookLoveList;

  const joyListTitle = deep.joyListTitle;
  const joyList = deep.joyList;
  const goalListTitle = deep.goalListTitle;
  const goalList = deep.goalList;
  const qualitiesListTitle = deep.qualitiesListTitle;
  const qualitiesList = deep.qualitiesList;
  const improvmentListTitle = deep.improvmentListTitle;
  const improvmentList = deep.improvmentList;

  return (
    <Container className="aboutPage">
      <h1>About Me</h1>

      <p>
        Hi, I’m Jonathan! I live in Seattle, WA, and am currently a dog handler
        (love ‘em) while I explore putting some of my other talents to work. I
        like to think of myself as a jack of all trades, with a particular
        interest in anything “tech”. I am a problem solver, a“tinkerer”, and a
        people person; which is why I love to code, tear apart engines, and play
        the game of Risk. I have had a wide array of jobs over the years, but my
        degree is in Computer Science, and I would love to put my software
        development skills to work! Lately I have been putting that together
        with some of my IT knowledge to bring you this react site. It is being
        hosted on my very own home server, if you want to learn more about how
        to do that or get a game server running (for dummies, learned from doing
        it myself) go check out that project <Link to="">here</Link>!
      </p>
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
        <HiddenTextAccordion />
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
