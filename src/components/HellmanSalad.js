import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from "react-bootstrap";

const HellmansSalad = () => {
    return(
<>



        <ResponsiveEmbed
        id="HellmansEloteSalad"
        src="https://www.youtube.com/embed/VqnIgLL8KiM"
        allowFullScreen
      />

<Container fluid className="p-0 bg-dark text-white">


<Row>
<Col lg={4}>        <ResponsiveEmbed
        id="HellmansEloteSalad"
        src="https://www.youtube.com/embed/0Zlft2EjUN8"
        allowFullScreen
      /></Col>

<Col lg={4}>        <ResponsiveEmbed
        id="HellmansEloteSalad"
        src="https://www.youtube.com/embed/o-D5ZHZSfbc"
        allowFullScreen
      /></Col>

<Col lg={4}>  
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

<Container className="p-3">
<h5>Marlin Network: Photography and animation</h5>
</Container>
</Container>
</>
    )
}

export default HellmansSalad