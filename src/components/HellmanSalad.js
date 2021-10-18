import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from "react-bootstrap";

const HellmansSalad = () => {
    return(
<>

<Container fluid 
        style={{backgroundColor:"olive"}} className="text-white p-5 pb-2">
<Row>
<Col className="my-3 d-flex align-items-center justify-content-center">
                <div className="text-end">
            <h4>Hellman's Salad Recipe</h4>
<p>Marlin Network</p>
            <p>Photography. Animation.</p>

                </div>
            </Col>
  <Col md={8} className="p-0">
        <ResponsiveEmbed
        id="HellmansEloteSalad"
        src="https://www.youtube.com/embed/VqnIgLL8KiM"
        allowFullScreen
        />
  </Col>
</Row>

        </Container>


<Container fluid className="pb-4 pt-2 text-white"
        style={{backgroundColor:"olive"}} 
        >

<Row>
<Col lg={4} className="p-0">        
<ResponsiveEmbed
        id="HellmansEloteSalad"
        src="https://www.youtube.com/embed/0Zlft2EjUN8"
        allowFullScreen
      /></Col>

<Col lg={4} className="p-0">        <ResponsiveEmbed
        id="HellmansEloteSalad"
        src="https://www.youtube.com/embed/o-D5ZHZSfbc"
        allowFullScreen
      /></Col>

<Col lg={4} className="p-0">  
{/* <Container className="p-lg-5 p-md-2">
<h5>Marlin Network:<br /> Photography and animation</h5>
</Container> */}

<ResponsiveEmbed
        id="HellmansEloteSalad"
        src="https://www.youtube.com/embed/t4l2pGvZ0KA"
        allowFullScreen
      />
      
      </Col>

</Row>


</Container>
</>
    )
}

export default HellmansSalad