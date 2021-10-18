import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from 'react-bootstrap';

const SLTheatre = () => {
    return(
<>
        <Container fluid className="p-4"
        style={{backgroundColor:"brown"}}
        >
        <Row>
        <Col md={6}>
          <Image fluid src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/62e8dab77adc28046117c51c_rw_1200.jpg?h=fa2a137a5ad235011aa899f13ac954b7" />
        
        </Col>
        <Col className="p-0 me-1 text-white d-flex flex-column justify-content-end">
          <div className=" d-flex flex-column justify-content-center h-auto p-3" 
          // style={{minHeight:"250px"}}
          >
<h4>Springfield Little Theatre</h4>
<h5>Big Party</h5>
<p>Photography. Design.</p>
          </div>

          <Image fluid src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/33aa6f29f2b0823116b93ebb_rw_1200.jpg?h=2ad7dd31458ecabb56fc9d2c6eb1d56b" />

          <Image fluid src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/9e1adff7cc157ea3065042f3_rw_1200.jpg?h=6e78bf84b09c349de9ade394a866fdca" />

        </Col>
        <Col lg={12} md={6}>
        
        </Col>
        
        </Row>
        </Container>

</>
    )
}

export default SLTheatre