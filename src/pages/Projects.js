import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sems from '../sems.png';
import augustus from '../augustus.jpg';
import api from '../api.jpg';
import pending_img from '../pending_img.jpeg';
import '../App.css';
import NavMenu from '../components/NavMenu';

function Projects() {
    return (
        <div className="App">
            <NavMenu/>
            <h1 className="titles">Projects</h1>
            <Container>
                <Row>
                    <Col className="project-columns" xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={api} />
                            <Card.Body>
                                <Card.Title className="card-info">ZoneSVC</Card.Title>
                                <Card.Text className="card-info">
                                    This is an API providing important stock and currency data for developers.
                                </Card.Text>
                                <Button variant="success" href="https://www.zonesvc.com/">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="project-columns" xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={augustus} />
                            <Card.Body>
                                <Card.Title className="card-info">Augustus' Trading Bot</Card.Title>
                                <Card.Text className="card-info">
                                    This is a platform for users to create trading bots and subscribe to others bots.
                                </Card.Text>
                                <Button variant="success" href="https://www.augustusinc.com/">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="project-columns" xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={sems} />
                            <Card.Body>
                                <Card.Title className="card-info">SEM's Loan Services</Card.Title>
                                <Card.Text className="card-info">
                                    This is a platform for users to seek , get qualified for and distributed a loan.
                                </Card.Text>
                                <Button variant="success" href="https://www.example.com/">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="project-columns" xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={pending_img} />
                            <Card.Body>
                                <Card.Title className="card-info">Title - Pending</Card.Title>
                                <Card.Text className="card-info">
                                    Description - Pending
                                </Card.Text>
                                <Button variant="success" href="https://www.example.com/">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;