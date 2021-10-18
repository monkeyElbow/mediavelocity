import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from 'react-bootstrap';


export default function TacoTuesGsb() {
    return (
        <>
<Container className="px-4 py-5"
style={{backgroundColor:"darkorange"}}
>
<Row>
    <Col md={8}>
<ResponsiveEmbed
        id="TacoTuesday"
        src="https://www.youtube.com/embed/NeOi3lTZauc"
        allowFullScreen
        />
    </Col>
    <Col className="p-3 d-flex flex-column justify-content-center text-white">
    <h5>Great Southern Bank</h5>
    <h4>Mobile Check Deposit "Taco Tuesday"</h4>
    <p>Video shoot and edit.</p>
    </Col>
</Row>
        </Container>

        </>
    )
}
