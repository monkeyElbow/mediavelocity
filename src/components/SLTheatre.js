import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import {PhotosTheatreA, PhotosTheatreC, PhotosTheatreB} from './PhotosTheatre';


const SLTheatre = () => {
    return(
<>
        <Container fluid className="p-0">
        <Row>
        <Col lg={12} md={12}>
        
          <Gallery photos={PhotosTheatreC} 
          />
        </Col>
        <Col lg={12} md={12}>
        
          <Gallery photos={PhotosTheatreA} 
          />
        </Col>
        <Col lg={12} md={12}>
            <Gallery photos={PhotosTheatreB}
        />
        </Col>
        
        </Row>
        </Container>

</>
    )
}

export default SLTheatre