import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from 'react-bootstrap';

// import Gallery from 'react-photo-gallery';
// import {PhotosCharter, PhotosCharterLead} from './PhotosCharter';


const Magazine = () => {
    return(

        <Container fluid className="p-0">
        <Row>
        <Col lg={6} md={12}>
          <Image fluid src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/653f92285a840727152f6fb9_rw_1200.jpg?h=e9de3c76ed7ea5d663c881b72aa6ad6f" />
         
        </Col>
        <Col lg={6} md={12}>
          <Image fluid src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/09f92025-35f8-4fe3-83fa-f6576158d6e0_rw_1200.jpg?h=46ea06c876dbd85d4dc50330d93ff208" />
        </Col>
        
        </Row>
        </Container>
    )
}

export default Magazine