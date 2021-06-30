import Gallery from "react-photo-gallery"
import { Container, Row, Col, Image } from "react-bootstrap"
import CompactLogo from "../CompactLogo"
import ResponsiveEmbed from "react-responsive-embed";


import { 
    PhotosCompactA
 } from "./PhotosCompact"

const Compact = () => {
    return(
        <>
<Container className="p-5" fluid style={{backgroundColor:"#2D81C4"}}>
   <Row>
       <Col md={6} className="p-5">
           <div className="p-5">

    <CompactLogo color="#fff" />
           </div>
       </Col>
       <Col className="d-flex align-items-center text-white text-center bg-dark">
           <div>

       <h4>CASE EXAMPLE: COMPACT FAMILY</h4>
       <h5>Compassion organization.</h5>
       <p>We provide Brand Design, Photography, Web Development, Product development, Video Production, Large Scale Exhibit Graphics.</p>

           </div>
       </Col>
   </Row>
</Container>


<Container fluid>
    <Row>
        <Col>
            <Image fluid
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7e2bf36680101.5725462d22bb2.png"
            
            />
        </Col>
        <Col md={3} className="bg-dark text-white d-flex align-items-center justify-content-center text-center">
            <div>

            <h5>
            Design large format graphics exhibit design
            </h5>
            <p>

             and printed collateral.
            </p>
            </div>
            </Col>
        <Col>
        <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0b6bc336680101.5725462d21597.jpg" 
        />
        </Col>
    </Row>
</Container>

<Container fluid className="p-5 bg-dark my-2">
<Row>
    <Col>
<ResponsiveEmbed
        id="CompactVideoExample"
        src="https://www.youtube.com/embed/K7X6xwBmEDY"
        allowFullScreen
        />
    </Col>
    <Col md={4} className="text-white text-center d-flex align-items-center justify-content-center">
        <div>

    <h5>Full video production</h5>
    <p>Shooting, editing, motion graphics</p>
        </div>
    
    </Col>
</Row>


        </Container>



<Container fluid>
<Row>
<Col md={3} className="bg-dark text-white d-flex align-items-center p-5">
    <div>

    <h5>Print design
     </h5>
     <p>

     including magazines, books, training manuals, brochures and mailers.
     </p>
    </div>
     </Col>
<Col>
<Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7553b836680101.60dc6782eb4ae.jpg"
/>
</Col>
<Col>
<Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/20246836680101.60dc63d57376f.jpg" />
</Col>

</Row>

<Row>
    <Col md={6} className="p-5">
    <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b65b2d36680101.60dc6b23e1770.jpg"/>
    
    </Col>
    <Col>
    <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0f56fe36680101.60dc51343c66e.jpg" />
    </Col>
</Row>
</Container>



<Container fluid className="bg-dark py-2 px-0 text-white">



<Gallery photos={PhotosCompactA}/>

</Container>
        </>
    )
}

export default Compact