import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../profile_pic.jpg';
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
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title className="card-info">ZoneSVC</Card.Title>
                                <Card.Text className="card-info">
                                    This is an API providing important stock and currency data for developers.
                                </Card.Text>
                                <Button variant="success">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="project-columns" xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title className="card-info">Augustus' Trading Bot</Card.Title>
                                <Card.Text className="card-info">
                                    This is an API providing important stock and currency data for developers.
                                </Card.Text>
                                <Button variant="success">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="project-columns" xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title className="card-info">Card Title</Card.Title>
                                <Card.Text className="card-info">
                                    This is an API providing important stock and currency data for developers.
                                </Card.Text>
                                <Button variant="success">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="project-columns" xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title className="card-info">Card Title</Card.Title>
                                <Card.Text className="card-info">
                                    This is an API providing important stock and currency data for developers.
                                </Card.Text>
                                <Button variant="success">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;