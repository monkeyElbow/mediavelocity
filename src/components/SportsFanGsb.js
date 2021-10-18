import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from 'react-bootstrap';


export default function SportsFanGsb() {
    return (
        <>
<Container className="px-4 py-5"
style={{backgroundColor:"#5E0009"}}
>
<Row>
    <Col className="p-3 d-flex flex-column justify-content-center text-white text-end align-items-end">
    <h5>Great Southern Bank</h5>
    <h4>"MSU Sports Fan"</h4>
    <p>Video shoot and edit.</p>
    </Col>

    <Col md={8}>
    <ResponsiveEmbed
        id="MSUsportsFan"
        src="https://www.youtube.com/embed/gtaFPmNaS4w"
        allowFullScreen
        />
    </Col>
</Row>
        </Container>

        </>
    )
}
