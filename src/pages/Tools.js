import { Container, Image, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Tools() {

  document.title = "Mediavelocity Tools"
  return (
    <>
      <Container
        fluid
        className="pt-5 pb-3 bg-red text-white"
        // style={{paddingTop:"300px", minHeight:"100px"}}
      >
        <h1 style={{ marginTop: "50px" }}>Tools</h1>
      </Container>

      <Container className="bg-dark rounded my-2 p-5 text-white">
        <Row>
          <Col md={6}>
            <Image
              fluid
              src="https://mediavelocity.com/images/screenTrackDemo.jpg"
            />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center p-4 mb-3">
            <h2>Screen Key & Track Marker App</h2>
            <p className="lead">
              You're recording footage of a device and want to motion track your
              footage and key out the screen with your own graphics, or both.
            </p>
          </Col>
        </Row>
        <p>
          We got you covered. Use this app on set then motion track and key in
          your favorite editor program.
        </p>

        <p className="fw-bold">Featuring:</p>
        <p>
          <BsFillCheckCircleFill /> Corner Pin Tracking Markers
        </p>
        <p>
          <BsFillCheckCircleFill /> Changeable background color. Green to key or
          blue for glow. Your call.
        </p>

        <Link to="/screen-tracker" className="btn btn-success">
          Try it for free
        </Link>

        <p style={{ fontSize: ".7rem" }} className="small mt-5">
          Photo by{" "}
          <a href="https://unsplash.com/@xps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            XPS
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/laptop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </Container>
    </>
  );
}
