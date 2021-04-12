import ResponsiveEmbed from "react-responsive-embed";
import { Row, Col, Container } from "react-bootstrap";




const GsbYourDay = () => {
return(

<>
<ResponsiveEmbed id="gsbYourDayBusiness" src='https://www.youtube.com/embed/qiSL8RtaIbQ'allowFullScreen />

<Container fluid className="p-0 bg-dark">
    
<Row>
<Col lg={6}>

<ResponsiveEmbed id="gsbYourDayBusiness" src='https://www.youtube.com/embed/J89muxSwIys'allowFullScreen />
</Col>

<Col lg={6}>

<ResponsiveEmbed id="gsbYourDayBusiness" src='https://www.youtube.com/embed/saVTZ11pfxo'allowFullScreen />
</Col>




</Row>

</Container>
</>

)

}

export default GsbYourDay