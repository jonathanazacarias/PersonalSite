import { useRouteError } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { Container } from "react-bootstrap";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Container>
        <h1>Oops!</h1>
        <p>
          Sorry, an unexpected error has occurred. Please contact the site
          administrator for assistance.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Container>
    </div>
  );
}
