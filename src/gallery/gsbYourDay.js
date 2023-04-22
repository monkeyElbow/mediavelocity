import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from "react-bootstrap";




const GsbYourDay = () => {
return(

<>
<Container fluid className="p-4"
style={{backgroundColor:"darkolivegreen"}}
>
    <Row className="mb-3 px-2">
        <Col md={8} className="p-0">
<ResponsiveEmbed id="gsbYourDayBusiness" src='https://www.youtube.com/embed/qiSL8RtaIbQ'allowFullScreen />
        </Col>
        <Col className="py-3 text-white d-flex flex-column align-contents-center justify-content-center">
        <h4>"Your Day" Video Series</h4>
        <h5>Videography and motion graphics.</h5>
        </Col>
    </Row>

    
<Row>
<Col lg={6} className="">

<ResponsiveEmbed id="gsbYourDayBusiness" src='https://www.youtube.com/embed/J89muxSwIys'allowFullScreen />
</Col>

<Col lg={6} className="">

<ResponsiveEmbed id="gsbYourDayBusiness" src='https://www.youtube.com/embed/saVTZ11pfxo'allowFullScreen />
</Col>




</Row>

</Container>
</>

)

}

export default GsbYourDay