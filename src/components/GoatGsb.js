import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from 'react-bootstrap';


export default function GoatGsb() {
    return (
        <>
<Container className="px-4 py-5"
style={{backgroundColor:"darkcyan"}}
>
<Row>
    <Col className="p-3 d-flex flex-column justify-content-center text-white text-end align-items-end">
    <h5>Great Southern Bank</h5>
    <h4>"GOAT"</h4>
    <p>Animation.</p>
    </Col>

    <Col md={8}>
    <ResponsiveEmbed
        id="gsbGOAT"
        src="https://www.youtube.com/embed/tzwzX2O8L5U"
        allowFullScreen
        />
    </Col>
</Row>
        </Container>

        </>
    )
}
