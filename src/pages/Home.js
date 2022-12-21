import profile from '../profile_pic.jpg';
import '../App.css';
import Button from 'react-bootstrap/Button';
// import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="App">
      <img src={profile} className="App-logo" alt="logo" />
      <div>
        <p className="Bio-name">Shaquille Shaw</p>
        <p className="Bio-title">Software Engineering Consultant</p>
      </div>
      {/* <div className="Button-wrapper">
        <Link to="/projects"><Button size="sm" className="Main-buttons" variant="outline-secondary">Projects</Button></Link>
        <Link to="/projects"><Button size="sm" className="Main-buttons" variant="outline-secondary">Blog</Button></Link>
        <Link to="/projects"><Button size="sm" className="Main-buttons" variant="outline-secondary">Publications</Button></Link>
      </div> */}
      {/* <p>Bring Your Ideas To Life</p> */}
      <div className="Button-wrapper">
        <Link to="/projects"><Button className="Main-buttons" variant="primary">Contact Me</Button></Link>
      </div>
      {/* <footer className="footer Button-wrapper">
        <a className="socials" href="https://www.linkedin.com/in/shaquille-shaw-4b484a101/"><BsLinkedin/></a>
        <a className="socials" href="https://github.com/shaqshaw"><BsGithub/></a>
        <a className="socials" href="mailto:shaquilles.shaw@gmail.com"><BsMailbox/></a>
      </footer> */}
    </div>
  );
}

export default Home;