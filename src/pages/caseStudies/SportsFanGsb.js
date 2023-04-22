import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from 'react-bootstrap';


export default function SportsFanGsb() {
    document.title = "Mediavelocity - GSB Sports Fan"
    return (
        <>
<Container fluid className="p-0"
>
<Row>
    <Col className="p-3 d-flex flex-column justify-content-center text-end align-items-end p-5">
    <h1 className="fw-bold fs-1">Great Southern Bank</h1>
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
