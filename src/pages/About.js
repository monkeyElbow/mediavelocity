import { Container, Row, Col } from "react-bootstrap"

export default function About() {
  document.title = "Mediavelocity About"
    return (
        <>
            <Container
        fluid
        className="bg-secondary text-white largeImageCover"
        style={{
          backgroundImage:
            "url(https://pro2-bar-s3-cdn-cf4.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/f88ca87a-c585-4ed5-9ecf-245861f95ab2_rw_1920.jpg?h=5a83a8d6d63b2cf4c75e7becefb3a870)",
        }}
      >
        <Row>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-start pe-5"
            style={{ minHeight: "65vh" }}
          >
            <h1 className="text-uppercase ls-3 lead" style={{fontSize:'8vw', lineHeight:'90%'}}>
             The creative <span className="serif fst-italic text-capitalize"> talent</span> you need
            </h1>
          </Col>
        </Row>
      </Container> 

      <Container fluid className="text-center p-5 d-flex flex-column">
          <h2 className="text-uppercase mt-5">Be amazing</h2>
          <h5 className="serif fst-italic mb-5 pb-0 mt-3">The most powerful messages are clear and concise.</h5>
          <h2 className="serif mb-5 pb-0 mt-0">Often the exercise of finding the best creative solution is about cutting clutter.</h2>
          <h5 className="serif mb-5 pb-5 mt-3">Once clarity is achieved the refinement can begin.</h5>
      </Container>

      <Container fluid style={{backgroundColor:"#666"}} className="text-center p-5 d-flex flex-column text-white">
          <h2 className="text-uppercase mt-5">Your creative answer</h2>
          <p className="serif fst-italic mb-5 pb-5 mt-3">Brand Identity  |  Web and Mobile  |  Packaging  |  Environmental  |  Video  |
Photography  |  Programming  | Print </p>
      </Container>
        </>
    )
}
