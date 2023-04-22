import { Container, Row, Col, Image } from "react-bootstrap"
import ResponsiveEmbed from "react-responsive-embed";


export default function BeverageProf() {
    document.title = "Mediavelocity - Beverage Professor"
    return (
        <Container fluid 
         className="p-0"
         >
        <Row>
            <Col md={8} sm={12} className="p-0">
                <Image fluid src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/a21905ff80f18021377129f2_rw_1200.jpg?h=af4819fdeafc5a5f7a70bec820f83713"/>
            </Col>
            <Col className="my-3 d-flex align-items-center p-5">
                <div>
            <h1 className="fw-bold fs-1">Beverage Professor</h1>
            {/* <h3>"Grandma Call"</h3> <br /> */}
            <h2 className="fs-5">Video production.</h2>
            <p>Camera, edit, motion graphics.</p>
                </div>
            </Col>
        </Row>
                 <ResponsiveEmbed
                id="BevProf"
                src="https://www.youtube.com/embed/1PMEOhBCjfQ"
                allowFullScreen
              />
        
                </Container>
    )
}
