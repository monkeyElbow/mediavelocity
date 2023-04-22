import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from 'react-bootstrap';


export default function WereFansTooGsb() {
    document.title = "Mediavelocity - GSB We're Fans Too"
    return (
        <>
<Container fluid className="px-4 py-5"
>
<Row>
    <Col className="p-5 d-flex flex-column justify-content-center text-end align-items-end">
    <h1 className="fw-bold fs-1 lh-sm">Great Southern Bank</h1>
    <h4>"We're fans too" series</h4>
    <p>Video shoot and edit.</p>
    </Col>

    <Col md={8}>
    <ResponsiveEmbed
        id="gsbWereFansToo"
        src="https://www.youtube.com/embed/Bm-U6Q6oob0"
        allowFullScreen
        />
    </Col>
</Row>
        </Container>

        </>
    )
}
