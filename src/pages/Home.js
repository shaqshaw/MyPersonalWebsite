import profile from '../profile_pic.jpg';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="App">
      <img src={profile} className="App-logo" alt="logo" />
      <div>
        <p className="Bio">Shaquille Shaw</p>
        <p className="Bio">Software Engineer Consultant</p>
      </div>
      <div className="Button-wrapper">
        <Link to="/projects"><Button className="Main-buttons" variant="primary">Projects</Button></Link>
        <Link to="/books"><Button className="Main-buttons" variant="primary">Books</Button></Link>
        <Link to="/blogs"><Button className="Main-buttons" variant="primary">Blogs</Button></Link>
      </div>
      <Form>
        <fieldset disabled>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="name" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Control type="message" placeholder="How can I help?" />
          </Form.Group>
          <Button variant="outline-secondary" type="submit">
            Contact
          </Button>
        </fieldset>
      </Form>
      <footer className="footer Button-wrapper">
        <a className="socials" href="https://www.linkedin.com/in/shaquille-shaw-4b484a101/"><BsLinkedin/></a>
        <a className="socials" href="https://github.com/shaqshaw"><BsGithub/></a>
        <a className="socials" href="mailto:shaquilles.shaw@gmail.com"><BsMailbox/></a>
      </footer>
    </div>
  );
}

export default Home;