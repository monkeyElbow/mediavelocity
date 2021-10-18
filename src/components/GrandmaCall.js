import ResponsiveEmbed from "react-responsive-embed";
import { Container, Row, Col } from "react-bootstrap";


const GrandmaCall = () => {
    return(
        <Container fluid style={{backgroundColor:"darkorange"}} className="text-white p-4">
<Row>
    <Col md={8} sm={12} className="p-sm-0">
         <ResponsiveEmbed
        id="GrandmaCall"
        src="https://www.youtube.com/embed/_DEaSL8w6-A"
        allowFullScreen
      />
    </Col>
    <Col className="my-3 p-4 d-flex align-items-center">
        <div>
    <h5>Great Southern Bank</h5>
    <h3>"Grandma Call"</h3> <br />
    <h5>Video production.</h5>
    <p>Camera, edit, motion graphics.</p>
        </div>
    </Col>
</Row>

        </Container>
    )
}

export default GrandmaCall