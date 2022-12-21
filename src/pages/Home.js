import profile from '../profile_pic.jpg';
import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from '../components/NavMenu';

function Home() {
  return (
    <div className="App">
        <NavMenu/>
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