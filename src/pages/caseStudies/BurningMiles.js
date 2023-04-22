import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from 'react-bootstrap';


const BurningMiles = () => {
  document.title = "Mediavelocity - Burning Miles Show"
    return(
<>
        <Container fluid className="p-0"
        >
        <Row>
        <Col md={8} className="p-0">
        {/* <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/325fdc36405253.571abd2f07cb9.jpg" /> */}
        <Image fluid src={require('../../img/bm_4885.jpg')} />
        </Col>
        <Col className="p-5 d-flex flex-column justify-content-center">
        <h1 className="fw-bold">Burning Miles</h1>
        <h4>Web Series Pilot</h4>
        <p className='uc small text-secondary'>Photography</p>
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