import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import {PhotosBurningMiles, PhotosBurningMilesLead} from './PhotosBurningMiles';


const BurningMiles = () => {
    return(
<>
        <Container fluid className="p-0">
        <Row>
        <Col lg={12} md={12}>
        
          <Gallery photos={PhotosBurningMilesLead} />
        </Col>
        <Col lg={12} md={12}><Gallery photos={PhotosBurningMiles}/>
        </Col>
        
        </Row>
        </Container>

</>
    )
}

export default BurningMiles