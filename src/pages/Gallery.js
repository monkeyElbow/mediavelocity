import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GalleryContent } from "./content/galleryContent";

export default function Gallery() {
  document.title = "Mediavelocity Gallery"
  
  function GalleryBlock({ name, category, photoUrl, link, backgroundPosition, backgroundSize }) {

    const categories = Array.isArray(category) ? category.join(' ') : category;
    // If category is an array, join the elements with a space
    // If category is a string, just use the original value

    return (
      <Col
        className="block p-4"
      style={{ 
        backgroundImage: `url(${photoUrl})`, 
        backgroundSize: 'cover',

      }}
      >
        <h2>{categories}</h2>
        <Link className="stretched-link" to={link}>
          <h3>{name}</h3>
        </Link>
      </Col>
    );
  }

  return (
    <>
      <Container
        fluid
        className="bg-secondary text-white largeImageCover"
        style={{
          backgroundImage:
            "url(https://pro2-bar-s3-cdn-cf2.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/d5e6c460-068f-4bfa-b76e-58f4a6b7280a_rw_1200.jpg?h=41f10b95cf8f61144f89a4fca07bbb87)",
        }}
      >
        <Row>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-start pe-5"
            style={{ minHeight: "65vh" }}
          >
            <h1 className="uc ls-3 lead" style={{fontSize:'8vw', lineHeight:'90%'}}>
              The creative{" "}
              <span className="serif fst-italic text-lowercase"> talent</span>{" "}
              you need
            </h1>
          </Col>
        </Row>
      </Container>

      {/* <Container
        fluid
        className="p-5 text-center d-flex flex-column justify-content-center"
      >
        <h1 className="fs-6 text-uppercase mt-5 ls-3">be amazing</h1>
        <p className="serif fst-italic mb-5 mt-3 ls-3">
          The most powerful messages are clear and concise. Often the exercise
          of finding the best creative solution is about cutting clutter. Once
          clarity is achieved the honing can begin.
        </p>
      </Container> */}

      <Container fluid className="parent bg-secondary">
        <Row className="row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
          {GalleryContent &&
            GalleryContent.map((g) => {
              return <GalleryBlock {...g} />;
            })}
        </Row>
      </Container>
    </>
  );
}
