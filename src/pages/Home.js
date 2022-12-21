import profile from '../profile_pic.jpg';
import '../App.css';
import Button from 'react-bootstrap/Button';
// import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Home() {
  return (
    <div className="App">
        <div className="Nav-Menu">
            <Navbar key={false} bg="dark" variant="dark" expand={false} className="mb-3">
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-false`}
                aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                    More
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/aboutme">About Me</Nav.Link>
                        <Nav.Link href="/blogs">Blog</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
      <img src={profile} className="App-logo" alt="logo" />
      <div>
        <p className="Bio-name">Shaquille Shaw</p>
        <p className="Bio-title">Software Engineering Consultant</p>
      </div>
      <div className="Button-wrapper">
        <Button className="Main-buttons" variant="primary" href="mailto:shaquilles.shaw@gmail.com">Contact Me</Button>
      </div>
    </div>
  );
}

export default Home;