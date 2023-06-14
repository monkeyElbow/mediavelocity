import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
// import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Mediavelocity Creative"
  return (
    <>
      <Container
        fluid
        className="bg-secondary text-white largeImageCover"
        style={{
          backgroundImage:
            "url(https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/19f302b2-505b-4ed6-9e01-5aca1145586e_rw_1200.jpg?h=50e593ea5b42948d444b9eab78253f2a)",
          // backgroundImage:
          //   "url(https://pro2-bar-s3-cdn-cf5.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/653f92285a840727152f6fb9_rw_1200.jpg?h=e9de3c76ed7ea5d663c881b72aa6ad6f)",
          backgroundPosition: "center",
        }}
      >
        <Row>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-start pe-5"
            style={{ minHeight: "65vh" }}
          >
            <h1 className="text-uppercase lead ls-3" style={{fontSize:'8vw', lineHeight:'90%'}}>
              design makes the difference
            </h1>
          </Col>
        </Row>
      </Container>

      {/* CASE STUDIES */}
      <Container fluid className="parent m-0 p-0">
        <Row>
          <Col
            className="p-4 block position-relative"
            style={{
              backgroundColor: "#e8f0f4",
              backgroundImage:
                "url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/d90a9f36680101.60dc70bf998b5.jpg)",
              backgroundPosition: "80px -90px",
              backgroundSize: "100%",
            }}
          >
            <h2>view case study</h2>
            <a className="stretched-link" href="/compact">
              <h3>COMPACT FAMILY</h3>
            </a>
          </Col>

          {/* <Col
            md={3}
            className="p-4 block position-relative"
            style={{
              backgroundImage:
                "url(https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/09f92025-35f8-4fe3-83fa-f6576158d6e0_rw_1200.jpg?h=46ea06c876dbd85d4dc50330d93ff208)",
            }}
          >
            <h2>view case study</h2>
            <a className="stretched-link" href="/#">
              <h3>Project Name</h3>
            </a>
          </Col>

          <Col
            md={3}
            className="p-4 block position-relative"
            style={{backgroundImage:
              "url(https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/09f92025-35f8-4fe3-83fa-f6576158d6e0_rw_1200.jpg?h=46ea06c876dbd85d4dc50330d93ff208)"}}
          >
            <h2>view case study</h2>
            <a className="stretched-link" href="/#">
              <h3>Project Name</h3>
            </a>
          </Col> */}


<Col
            className="p-4 block position-relative"
            style={{ backgroundImage:
              "url(https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/4369d57a-f067-4ef4-a945-7fb217efdd14_rw_1200.jpg?h=d4378c35f5d4d5a5245da6c60f304043)"
              // ,backgroundPosition: "0px 10px"
 ,             backgroundSize: "cover", }}
          >
            <h2>view case study</h2>
            <a className="stretched-link" href="/hellmanns-salad-recipes">
              <h3>Hellmann's Salad</h3>
            </a>
          </Col>


        </Row>

{/* add case studies and turn on row 2 */}

        {/* ROW 2 */}
        {/* <Row>
          <Col
            md={3}
            className="p-4 block position-relative"
            style={{backgroundImage:
              "url(https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/09f92025-35f8-4fe3-83fa-f6576158d6e0_rw_1200.jpg?h=46ea06c876dbd85d4dc50330d93ff208)"}}
          >
            <h2>view case study</h2>
            <a className="stretched-link" href="/#">
              <h3>Project Name</h3>
            </a>
          </Col>
          <Col
            md={3}
            className="p-4 block position-relative"
             style={{backgroundImage:
              "url(https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/09f92025-35f8-4fe3-83fa-f6576158d6e0_rw_1200.jpg?h=46ea06c876dbd85d4dc50330d93ff208)"}}
          >
            <h2>view case study</h2>
            <a className="stretched-link" href="/#">
              <h3>Project Name</h3>
            </a>
          </Col>

          
          <Col
            className="p-4 block position-relative"
            style={{ backgroundImage:
              "url(https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/4369d57a-f067-4ef4-a945-7fb217efdd14_rw_1200.jpg?h=d4378c35f5d4d5a5245da6c60f304043)" }}
          >
            <h2>view case study</h2>
            <a className="stretched-link" href="/hellmanns-salad-recipes">
              <h3>Hellmann's Salad</h3>
            </a>
          </Col>
        </Row> */}
      </Container>

      {/* APPROACH */}
      <Container
        
        className="p-5 text-center d-flex flex-column justify-content-center"
      >
        <h1 className="fs-2 text-uppercase mt-5 ls-3">approach</h1>
        <p className="serif fst-italic mb-5 mt-3 ls-3">
          There are three basic principles that define our approach. We work organically finding insights, illuminating ideas and consider how
          design is expressed to deliver great solutions.
        </p>

        <Row className="mb-5">
          <Col md={4}>
            <h3 className="my-4 text-uppercase ls-3 fs-3">Imagine</h3>
            <p className="serif fst-italic">Brand Strategy</p>
            <p className="serif fst-italic">Delivery Strategy</p>
          </Col>
          <Col md={4}>
            <h3 className="my-4 text-uppercase ls-3 fs-3">Design</h3>
            <p className="serif fst-italic">Brand Identity</p>
            <p className="serif fst-italic">Web and Mobile</p>
            <p className="serif fst-italic">Packaging</p>
            <p className="serif fst-italic">Environmental</p>
          </Col>
          <Col md={4}>
            <h3 className="my-4 text-uppercase ls-3 fs-3">Delivery</h3>
            <p className="serif fst-italic">Print Production</p>
            <p className="serif fst-italic">Digital Production</p>
            <p className="serif fst-italic">Web Development</p>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="p-5 text-center d-flex flex-column justify-content-center text-white"
        style={{backgroundImage:"url(https://pro2-bar-s3-cdn-cf1.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/ceda7a3c-ffef-4990-bbf1-2ec5908ef4d1_rw_1920.jpg?h=3abff9724ec98b7ba4819976e40e93c9)",
      backgroundPosition:"right -500px top -350px",
      // backgroundSize:"300px cover",
      backgroundRepeat:"no-repeat",
      backgroundColor:"#050102",
      // backgroundOrigin:"50% 50%",
      }}
      >
        <Row className="my-5">
          <Col md={6} className="mb-4">
          <h1 className="fs-2 text-uppercase mt-5 ls-3">Creative</h1>
        <p className="serif fst-italic mb-5 mt-3 ls-3">
        In addition to our traditional brand offerings, we partner with in-house design teams, agencies and entrepreneurs as an excellent creative solution.

        </p>
{/* <Link to="/#">
            <p className="text-uppercase ls-3 link-light text-decoration-none">Learn more {'>'}</p>
</Link>       */}
          </Col>
        </Row>
      </Container>



    </>
  );
};

export default Home;
