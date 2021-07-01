import ResponsiveEmbed from "react-responsive-embed";
import { Container, Row, Col } from "react-bootstrap";


const GrandmaCall = () => {
    return(
        <Container fluid style={{backgroundColor:"darkorange"}} className="text-white p-3">
<Row>
    <Col md={9} sm={12}>
         <ResponsiveEmbed
        id="GrandmaCall"
        src="https://www.youtube.com/embed/_DEaSL8w6-A"
        allowFullScreen
      />
    </Col>
    <Col className="my-3 d-flex align-items-center">
        <div>
    <h5>Great Southern Bank</h5>
    <h4>"Grandma Call"</h4>
    <p>Video production. <br />Shoot and edit.</p>
        </div>
    </Col>
</Row>

        </Container>
    )
}

export default GrandmaCall