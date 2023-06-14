import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { GalleryContent } from "./content/galleryContent"

export default function Work() {

  document.title = "Mediavelocity Work"

  function WorkBlock({ name, category, photoUrl, link, backgroundSize, backgroundPosition }) {

    const categories = Array.isArray(category) ? category.join(' ') : category;
    // If category is an array, join the elements with a space
    // If category is a string, just use the original value

    return (
      <Col md={6}
        className="block p-4"
        style={{minHeight:'400px', backgroundImage: `url(${photoUrl})`,
        backgroundPosition:`${backgroundPosition}`,
      backgroundSize:`${backgroundSize}`,
   }}
      >
        <h2 className="fs-6">{categories}</h2>
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
            "url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/325fdc36405253.571abd2f07cb9.jpg)",
        }}
      >
        <Row>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-start pe-5"
            style={{ minHeight: "65vh" }}
          >

            <h1 className="text-uppercase lead ls-3" style={{fontSize:'8vw', lineHeight:'90%'}}>
            Solutions <span className="serif fst-italic text-lowercase"> that</span> work
            </h1>
          </Col>
        </Row>
      </Container> 

<Container fluid className="p-0 parent bg-secondary">
<Row className="row-cols-md-2 row-cols-sm-1">

{GalleryContent && GalleryContent.map((g) => {
  return <WorkBlock {...g} />
})}
</Row>
</Container>


       {/* TO THE GALLERY CHAPS! */}
       <Container
        fluid
        className="p-5 text-center d-flex flex-column justify-content-center"
      >
        <h1 className="fs-6 text-uppercase mt-5 ls-3">the gallery</h1>
        <p className="serif fst-italic mb-5 mt-3 ls-3">
          Still want more? Check out the <Link to="/gallery">Gallery</Link> and see more creative examples.
        </p>
<Link to="/gallery">To the gallery, chaps!</Link>
      
      </Container>
     
        </>
    )
}
