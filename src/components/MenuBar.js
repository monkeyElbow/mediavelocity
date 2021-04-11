import { Link } from "react-router-dom";
import { Row, Col, Container, Image } from "react-bootstrap";
import { useSpring } from "react-spring";
import LogoMv from "./LogoMv";
import SocialIcons from "./SocialIcons";
import LogoMvRed from "./LogoMvRed";

const MenuBar = () => {
  return (
    <>
      <Container fluid className="bg-light m-0 p-1 text-center">
        <Row>
          <Col className="d-flex justify-content-center" lg={1} md={12} sm={12}>
            <Container
              className="
                m-0 p-0"
              style={{ height: "50px", width:'50px' }}
            >
              <LogoMvRed />
            </Container>
          </Col>
          <Col lg={2} md={12} sm={12} className="m-0 p-0 ">
            <p className="h5 mt-md-2 pt-1">mediavelocity</p>
          </Col>
          <Col
            
            className="m-0 p-0"
          >
            <p className="m-0 m-md-2 lead">
              A VISUAL COMMUNICATIONS COMPANY
              {/* <Link to="/home">home</Link>
          <Link to="/james">james</Link>
          <Link to="/sonny">sonny</Link> */}
              {/* VIDEO - PHOTOGRAPHY - DESIGN - WEB */}
            </p>
          </Col>

          <Col
            lg={3}
            className="m-0 p-0 mt-lg-1"
          >
            <SocialIcons />
          </Col>
        </Row>
      </Container>

      {/* <Container
        fluid
        className="bg-red text-center text-white d-flex align-items-center justify-content-center"
        style={{ height: "200px" }}
      >
        <div>
          <div className="p-3" style={{ height: "100px" }}>
            <LogoMv />
          </div>
          <p className="h4 mt-2">mediavelocity</p>
        </div>
      </Container> */}
    </>
  );
};

export default MenuBar;
