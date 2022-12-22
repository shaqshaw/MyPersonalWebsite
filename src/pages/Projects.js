import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import NavMenu from '../components/NavMenu';

function Projects() {
    return (
        <div className="App">
            <NavMenu/>
            <h1 className="titles">Projects</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="sucess">Visit Site</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Projects;