import { Row, Col, Container, Image } from "react-bootstrap";
import { useSpring } from "react-spring";
import LogoMv from "./LogoMv";
import SocialIcons from "./SocialIcons";

const MenuBar = () => {
  return (
    <>
      <Container fluid className="bg-light m-0 p-0 text-center">
          <Row>
              <Col md={2}>
        <SocialIcons />
</Col>
<Col>
        <p className="lead m-0">
          MOTION GRAPHICS - VIDEO - PHOTOGRAPHY - DESIGN - WEB
        </p></Col></Row>
      </Container>

      <Container
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
      </Container>
    </>
  );
};

export default MenuBar;
