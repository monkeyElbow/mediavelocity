import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container, Image } from "react-bootstrap";

export default function HellmannsSalad() {
  document.title = "Mediavelocity - Hellman's Salad Recipe Videos"
  return (
    <>
      <Container className="px-0 pb-5" style={{ paddingTop: "120px" }}>
        <Row>
          {/* <Col md={3}>
        <Image fluid
        style={{maxHeight:"500px"}}
        src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/ee45a6c8-4ad7-47ed-89c8-67f5b61fc7a1_rw_600.png?h=c0f13d70e054d3898e420ef6568a3c14"/>
        </Col> */}

          <Col className="d-flex align-content-center">
            <Image
              fluid
              src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/0b8fbaac-9373-4dc5-8e86-77493d682c3d_rw_1200.png?h=db5ecac33946054801f0b4f9111cf323"
            />
          </Col>
          <Col
            md={5}
            className="p-5 d-flex align-items-left justify-content-center flex-column"
          >
            <h1 className="">Hellman's</h1>
            <h2 className="lh-1">Salad Recipe Video Series</h2>
            <p>The Alchemedia Project/Marlin Network</p>
            <p className="uc small text-secondary ls-3">
              Food Photography | Animation
            </p>
          </Col>
          {/* <Col md={3}>
        <Image fluid
        style={{maxHeight:"400px"}}
        src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/6ed8ccd5-2e2e-4b84-95e8-ce5fce813b19_rw_600.png?h=335913740d62bbff51081bac0a7fd8f3"/>
        </Col> */}
        </Row>
      </Container>

      <Image
      className="w-100"
      fluid
        src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/06d55816-96d8-4a56-b698-3e5d25ef034b_rw_1200.jpg?h=e094c6d5cbe433ffa84dcd765e975f98"
        />

      <Container fluid className="bg-light p-5 position-relative">
        {/* Thai Basil Photo */}
        <Image
          className="position-absolute"
          style={{
            left: "-10rem",
            top: "-3rem",
            maxWidth: "300px",
            transform: "rotate(6deg)",
          }}
          fluid
          src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/6258366d-ad2f-4f0f-b559-173ee310e73b_rw_600.png?h=9aa305656ae769a045d2ef272ada3764"
        />

        <Row>
          <Col md={6} className="d-flex justify-content-center p-5">
            <h3 className="ls-3 fst-italic fw-bolder serif me-3 fs-6">
              the client
            </h3>
            <hr className="dropdown-divider w-25 mt-2 ms-1" />
          </Col>
          <Col className="p-5">
            <h5 className="uc ls-3 mb-4">Hellmann's</h5>
            <p>
              Brand names in mayonnaise, ketchup, mustard, sauce, salad
              dressing, condiments and other food products since 1913.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="p-0">
        <Image
          className="p-0 m-0 w-100"
          fluid
          src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/5b702990-10cc-4cae-90ab-5ad6969c6614_rw_1200.jpg?h=d35b9e90160a6d2da6b77be9722dbe35"
        />
      </Container>

      <Container fluid className="bg-light py-5 position-relative">
        <Row>
          <Col md={6} className="d-flex justify-content-center p-5">
            <h3 className="ls-3 fst-italic fw-bolder serif me-3 fs-6">
              the project
            </h3>
            <hr className="dropdown-divider w-25 mt-2 ms-1" />
          </Col>
          <Col className="p-5">
            <h5 className="uc ls-3 mb-4">Salad Dressing Recipes</h5>
            <p>
              In joined effort with The Alchemedia Project brings the salad
              recipe videos featuring Hellmann's Salad Dressings. Bring great
              photography and animation together to convey the potential of
              Hellmann's products.
            </p>
          </Col>
        </Row>

        <Image
          id="tomatoBowl"
          className="position-absolute"
          style={{
            maxWidth: "350px",
            bottom: "-14rem",
            left: "-9rem",
          }}
          src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/c725e340-21dc-48bd-8e3c-4dc7e3a5bd89_rw_1200.png?h=d475b2f06ccf12576c8be542368983ac"
        />
      </Container>


<Container fluid className="p-0 bg-dark">
      <Image
      className="w-100"
      fluid
        src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/4369d57a-f067-4ef4-a945-7fb217efdd14_rw_1200.jpg?h=d4378c35f5d4d5a5245da6c60f304043"
        />

        </Container>




      <Container fluid className="bg-light py-5 position-relative">

              <Image
              className="position-absolute"
              style={{bottom:"-20rem",
            
            }}
        src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/35ea449a-665d-473f-a010-d8bfe9e12f55_rw_600.png?h=523631a13c3528b82379bc35f02780ca"
        />
        <Row>
          <Col md={6} className="d-flex justify-content-center p-5">
            <h3 className="ls-3 fst-italic fw-bolder serif me-3 fs-6">
              the solution
            </h3>
            <hr className="dropdown-divider w-25 mt-2 ms-1" />
          </Col>
          <Col className="p-5">
            <h5 className="uc ls-3 mb-4">animated photography</h5>
            <p>
              As food was styled and photos taken, images were immediately
              placed and animated all during the studio session. This allowed
              fast feedback to the team and client and delivery of 12 finished
              videos in English and French.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="p-0">
        <ResponsiveEmbed
          id="HellmansEloteSalad"
          src="https://www.youtube.com/embed/VqnIgLL8KiM"
          allowFullScreen
        />
            <ResponsiveEmbed
              id="HellmansEloteSalad"
              src="https://www.youtube.com/embed/0Zlft2EjUN8"
              allowFullScreen
            />
            <ResponsiveEmbed
              id="HellmansEloteSalad"
              src="https://www.youtube.com/embed/o-D5ZHZSfbc"
              allowFullScreen
            />
            <ResponsiveEmbed
              id="HellmansEloteSalad"
              src="https://www.youtube.com/embed/t4l2pGvZ0KA"
              allowFullScreen
            />
      </Container>

    </>
  );
}
