import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Image } from "react-bootstrap";

const SLTheatre = () => {
  document.title = "Mediavelocity - Springfield Little Theatre"
  return (
    <>
      <Container fluid className="p-0" style={{ minHeight: "40vh" }}>
        <Row>
          <Col className="p-0 me-1 d-flex flex-column justify-content-center p-5">
            <h1 className="lh-sm">Springfield Little Theatre</h1>
            {/* <h2>Big Party</h2> */}
            <p className="small uc text-secondary ls-3 mt-4">
              Photography | Design
            </p>
          </Col>

          <Col md={6} className="p-0">
            <Image
              fluid
              src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/76d15d7b-f576-44c8-8d2a-2cc1d77792bd_rw_1200.jpg?h=396b49e7667452e1791e8984689fec41"
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="p-0">
        <Row>
          <Col md={6} className="p-0">
            <Image
              fluid
              src="https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/11ca21c4-2919-4e44-9206-bfbccb43126b_rw_1200.jpg?h=3a06bd067cdb57828ebd8adf1e135c73"
            />
          </Col>

          <Col className="p-0">
            
            <Col md={12} className="p-0">
              <Image
                fluid
                src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/9e1adff7cc157ea3065042f3_rw_1200.jpg?h=6e78bf84b09c349de9ade394a866fdca"
              />
            </Col>

         
            <Col md={12} className="p-0"
            style={{overflow:"hidden", backgroundImage:"url(https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/b2bfae32-b191-4acc-9a50-a8fcd4d99f2f_rw_1200.jpg?h=fddf4187d526a2397c8741ab2213c380)",height:"100%"}}
            >

            </Col>
          </Col>
        </Row>
      </Container>

      <Image
        className="w-100"
        fluid
        src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/6e4338cd-a647-4bae-9523-0e5c69c088dd_rw_1200.jpg?h=e0cd5f2784188cf161f1dd66c55bf7ce"
      />
    </>
  );
};

export default SLTheatre;
