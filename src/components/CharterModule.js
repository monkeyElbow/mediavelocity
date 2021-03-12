import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from 'react-bootstrap';

import Gallery from 'react-photo-gallery';
import {PhotosCharter, PhotosCharterLead} from './PhotosCharter';


const CharterModule = () => {
    return(

        <Container fluid className="p-0">
        <Row>
        <Col lg={12} md={12}>
          {/* <Image fluid src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/ed8de4c0fbddf0bfa24bb5f2_rw_1200.jpg?h=e0455f296016508e185db9c62a31e5f3" /> */}
          <Gallery photos={PhotosCharterLead} />
        </Col>
        <Col lg={12} md={12}><Gallery photos={PhotosCharter}/>
        </Col>
        
        </Row>
        </Container>
    )
}

export default CharterModule