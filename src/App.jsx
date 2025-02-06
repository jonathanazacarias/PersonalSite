import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import { useOutlet } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  const outlet = useOutlet();
  return (
    <>
      <NavBar />
      <>{outlet || <Home />}</>
      <Footer />
    </>
  );
}

export default App;
