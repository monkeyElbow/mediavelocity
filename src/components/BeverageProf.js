import { Container, Row, Col } from "react-bootstrap"
import ResponsiveEmbed from "react-responsive-embed";


export default function BeverageProf() {
    return (
        <Container fluid 
         className="text-white py-4"
         style={{backgroundColor:"#333"}}
         >
        <Row>
            <Col md={8} sm={12} className="p-0">
                 <ResponsiveEmbed
                id="GrandmaCall"
                src="https://www.youtube.com/embed/1PMEOhBCjfQ"
                allowFullScreen
              />
            </Col>
            <Col className="my-3 d-flex align-items-center p-4">
                <div>
            <h4>Beverage Professor</h4>
            {/* <h3>"Grandma Call"</h3> <br /> */}
            <h5>Video production.</h5>
            <p>Camera, edit, motion graphics.</p>
                </div>
            </Col>
        </Row>
        
                </Container>
    )
}
