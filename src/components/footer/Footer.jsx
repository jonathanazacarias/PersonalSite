import { Container, } from "react-bootstrap";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="text-center footer">
      <Container style={{'display':'flex', 'gap':'1rem', 'justifyContent':'center', 'alignItems':'center'}}>
        <div>Copyright @ {year} Jonathan Zacarias. Built with React.</div>
        <Link style={{'color':'black', 'fontSize':'.8rem'}}>login</Link>
      </Container>
    </footer>
  );
}

export default Footer;
