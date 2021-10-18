import { Container, Row, Col } from "react-bootstrap"
import ResponsiveEmbed from "react-responsive-embed";


export default function MothersDrone() {
    return (
        <Container fluid 
         className="text-white p-4"
         style={{backgroundColor:"darkgrey"}}
         >
        <Row>
            <Col md={8} sm={12} className="p-0">
            <ResponsiveEmbed
        id="MothersBot"
        src="https://www.youtube.com/embed/PyM-2WfmZo4"
        allowFullScreen
        />
            </Col>
            <Col className="my-3 d-flex align-items-center p-4">
                <div>
            <h4>Mother's Brewery</h4>
            <h5>"Beer Delivery Systems"</h5>
            <h5>Video production.</h5>
            <p>Camera. Video Edit.</p>
                </div>
            </Col>
        </Row>
        
                </Container>
    )
}
