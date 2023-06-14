import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";
import studio from '../img/studio.jpg'
// import { db } from "../util/firebase";
// import { addDoc, collection } from "@firebase/firestore";

export default function Contact() {
  document.title = "Mediavelocity Contact"


  const obfuscate = (str) => {
    return str.replace(/./g, (char) => {
      if (char === '@') {
        return '[at]';
      } else if (char === '.') {
        return '[dot]';
      } else {
        return char;
      }
    });
  };

  const email = 'james@mediavelocity.com';
  const phone = '417-597-4439';


  // firebase

  // const [date] = useState(new Date());
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [msg, setMsg] = useState("");
  // const [msgSent, setMsgSent] = useState(false);
  // const [loading, setLoading] = useState(false);

  // async function sendMsg(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   await addDoc(collection(db, "contact"), {
  //     form: "mediavelocity contact form",
  //     date: date,
  //     first_name: firstName,
  //     last_name: lastName,
  //     user_phone: phone,
  //     user_email: email,
  //     message: msg
  //   })
  //   setMsgSent(true);
  //   setLoading(false)
  // }

  return (
    <>
    {/* <img src={studio} alt="" /> */}
      <Container
        fluid
        className="bg-secondary text-white largeImageCover"
        style={{
          backgroundImage:
            "url(" + studio + ")",
            backgroundPosition:"center"
        }}
      >
        <Row>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-start pe-5"
            style={{ minHeight: "65vh" }}
          >
            <h5 className="ls-3 text-uppercase lead" style={{fontSize:'8vw', lineHeight:'90%'}}>
              you found your solution
            </h5>
          </Col>
        </Row>
      </Container>

<Container style={{minHeight:"50vh"}}
className="d-flex justify-content-center align-items-center"
>
<h5 className="fw-bold">Email <a href={'mailto:' + obfuscate(email)}>{obfuscate(email)}</a>
 or call <a href={'tel:' + phone.replace(/-/g, '')}>{phone}</a>.</h5>

</Container>
      
      {/* <Container fluid>
        <Row>
          <Col
            md={5}
            style={{ backgroundColor: "#999", minHeight: "40vh" }}
            className="p-4 d-flex flex-column justify-content-center"
          >
            <h5 className="ls-3 uc">phone</h5>
            <p className="serif fs-6 fst-italic ms-5">417.597.4439</p>
            <h5 className="ls-3 uc">email</h5>
            <p className="serif fs-6 fst-italic ms-5">
              james@mediavelocity.com
            </p>
          </Col>

          <Col className="p-5 d-flex flex-column justify-content-center">
            {msgSent ? (
              <>
                <h5>Thanks for reaching out.</h5>
              </>
            ) : (
              <>
                <Form
                  className="form d-flex flex-column justify-content-center"
                  onSubmit={sendMsg}
                >
                  <Row className="my-4">
                    <Col>
                      <Form.Group>
      
                        <Form.Control
                          className="input ls-3"
                          type="text"
                          placeholder="first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>

                        <Form.Control
                          className="input ls-3"
                          type="text"
                          placeholder="last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>

                    <Form.Control
                      className="input my-4 ls-3"
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>

                    <Form.Control
                      className="input my-4 ls-3"
                      type="text"
                      placeholder="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>

                    <Form.Control
                      className="message my-4 ls-3"
                      as="textarea"
                      rows={5}
                      placeholder="message"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </Form.Group>
                  <Button disabled={loading} type="submit" className="button px-5 py-3">
                    SUBMIT
                  </Button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

// API KEY
// AIzaSyAwvCnrlKPp5qGSpFePcMszr0WS8-H6NUc
// key=API_KEY

// id
// 297716428828-g7ql7vq15ggnrqq6l30vpjus43ek1sfh.apps.googleusercontent.com