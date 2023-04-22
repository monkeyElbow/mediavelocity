import {Container, Image, Row, Col} from 'react-bootstrap'

export default function Hotrodshow() {
  document.title = "Mediavelocity - HotRod Photography"
    return (
        <>
            <Container fluid className="p-0">
                <Row>
                    <Col md={6}>
                        <Image fluid src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/e9abed98-5853-49ff-9721-bb6c80fffc18_rw_1200.jpg?h=80bc62ebb6c68123e4194966cbe9092e" />
                    </Col>
                    <Col className="p-5 d-flex align-items-center justify-content-center flex-column">
                    <h1>Route 66 Hot Rod Show</h1>
                    <p className="uc small text-secondary ls-3">Car photography</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="p-0">
                <Image 
                className="w-100"
                src="https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/19f302b2-505b-4ed6-9e01-5aca1145586e_rw_1200.jpg?h=50e593ea5b42948d444b9eab78253f2a" alt="Chevy comin' at ya real fast" />
            </Container>

            <Container fluid className="bg-light py-5">
        <Row>
          <Col md={6} className="d-flex justify-content-center p-5">
            <h3 className="ls-3 fst-italic fw-bolder serif me-3 fs-6">
              the project
            </h3>
            <hr className="dropdown-divider w-25 mt-2 ms-1" />
          </Col>
          <Col className="p-5">
            <h5 className="uc ls-3 mb-4">Route 66 Hot Rod Show</h5>
            <p>
              Invitation to cover the Route 66 Hot Rod show is tough to resist. <br />
            </p>
          </Col>
        </Row>

        
      </Container>

      <Container fluid className="p-0">
          <Image
          className="w-100"
          fluid src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/c54b0606-3ff8-48f0-a6c7-f04b337df947_rw_1200.jpg?h=0b8b4449c89612f681ff9a4cceea50b7" alt="Rat rod in the desert" />
      </Container>


        </>
    )
}
