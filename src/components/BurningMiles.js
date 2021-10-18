import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from 'react-bootstrap';


const BurningMiles = () => {
    return(
<>
        <Container fluid className="p-4 text-white"
        style={{backgroundColor:"#444"}}
        >
        <Row>
        <Col md={8} className="p-0">
        <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/325fdc36405253.571abd2f07cb9.jpg" />
        </Col>
        <Col className="p-3 d-flex flex-column justify-content-center">
        <h4>Burning Miles</h4>
        <h5>Web Series Pilot</h5>
        <p>Photography</p>
        </Col>
        
        </Row>

        <Row>
          <Col md={6} className="p-0">
          <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b012a636405253.571abd2f07693.jpg" />
          </Col>
          <Col className="p-0">
          <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b75b36405253.571abd2f08b2f.jpg" />
          </Col>
        </Row>
        </Container>

</>
    )
}

export default BurningMiles