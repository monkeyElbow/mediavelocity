import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from 'react-bootstrap';
import ResponsiveEmbed from "react-responsive-embed";

import Gallery from 'react-photo-gallery';
import {PhotosCharter} from './PhotosCharter';


const CharterModule = () => {
    return(
<>
        <Container fluid className="p-4"
        style={{backgroundColor:"#800"}}
        >
        <Row>
        <Col md={4} className="d-flex flex-column justify-content-center text-end text-white">
          <h5>
            Charter Schools USA
          </h5>
          <p>Photography for advertising collateral and web.</p>
          <p>Mulitple market video support for cable and YouTube advertising.</p>
        </Col>
        <Col>

          <Image fluid src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/ed8de4c0fbddf0bfa24bb5f2_rw_1200.jpg?h=e0455f296016508e185db9c62a31e5f3" />
        </Col>
        
        </Row>
          <Gallery photos={PhotosCharter}/>

<ResponsiveEmbed
id="CharterTV"
src="https://www.youtube.com/embed/JONfva999bw"
allowFullScreen
/>
        </Container>


</>
    )
}

export default CharterModule