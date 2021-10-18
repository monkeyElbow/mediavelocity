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
           
           <div className="p-m-5 p-sm-0">
    <CompactLogo color="#fff" />
           </div>
       </Col>
       <Col className="d-flex align-items-center text-center bg-light p-5">
           <div>
       <h4 style={{color:"#2D81C4"}}>
           {/* CASE EXAMPLE: <br />  */}
           COMPACT FAMILY</h4>
       <h5>Compassion organization. </h5>
       <p>Brand Design, Photography, Web Development, Product development, Video Production, Large Scale Exhibit Graphics.</p>

           </div>
       </Col>
   </Row>
</Container>


<Container fluid className="py-2" style={{backgroundColor:"#2D81C4"}}>
    <Row>
        <Col>
            <Image fluid
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7e2bf36680101.5725462d22bb2.png"
            
            />
        </Col>
        <Col md={3} className="text-white d-flex align-items-center justify-content-center text-center p-4" style={{backgroundColor:"#2D81C4"}}>
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


<Container className="py-5">
    <Row>
            <Col className=" d-flex align-items-center text-center justify-content-center px-5" md={4} >
                <div>

            <h4 style={{color:"#2D81C4"}}>Web Development</h4>
            <p>Firebase and reactJs</p>
            <p>User training login and course tracking</p>
            <p>Dynamic content such as jobs, news, stats etc.</p>
            <p>Custom Admin Pages</p>
                </div>
            </Col>
        {/* <Col md={4}>
        <Image fluid src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/06bce300-36fd-46c1-bf88-2d6892e80b21_rw_1200.jpg?h=d7c275923a53d5975d5d4d9b026dbdec" 
        />
        </Col> */}
        <Col>
        <Image className="border" fluid src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/54a6cc25-b614-4160-aad1-5996b958e9a9_rw_1200.jpg?h=59c99abb998b47b315fe3df554a80431" 
        />
        </Col>
    </Row>
</Container>


<Container fluid className="p-5 my-1" style={{backgroundColor:"#2D81C4"}}>
<Row>
    <Col>
<ResponsiveEmbed
        id="CompactVideoExample"
        src="https://www.youtube.com/embed/K7X6xwBmEDY"
        allowFullScreen
        />
    </Col>
    <Col md={4} className="text-white text-center d-flex align-items-center justify-content-center pt-3">
        <div>

    <h5>Full video production</h5>
    <p>Shooting, editing, motion graphics</p>
        </div>
    
    </Col>
</Row>


        </Container>



<Container fluid className="my-0">
<Row>
<Col md={3} className="text-white d-flex align-items-center p-4" style={{backgroundColor:"#2D81C4"}}>
    <div>

    <h5>Print design
     </h5>
     <p>

     including magazines, books, training manuals, brochures and mailers.
     </p>
    </div>
     </Col>
<Col md={4} className="p-0">
<Image 
fluid 
// style={{height:"300px", width:"399px"}} 
// className="h-auto d-inline-block"
src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7553b836680101.60dc6782eb4ae.jpg"
/>
</Col>
<Col md={4} className="d-flex justify-content-center p-0">
<Image 
// style={{minHeight:"300px", width:"418px"}} 
fluid 
src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b65b2d36680101.60dc6b23e1770.jpg"/>
</Col>

</Row>

<Row>
    <Col md={6} className="p-5">
    <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/20246836680101.60dc63d57376f.jpg" />
 
    
    </Col>
    <Col className="p-2">
    <Image fluid src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0f56fe36680101.60dc51343c66e.jpg" />
    </Col>
</Row>
</Container>



<Container className="p-4 px-0 text-white"style={{backgroundColor:"#2D81C4"}}>
<div className="ps-5">
<h4>Photography</h4>
<p>COMP<strong>ACT</strong> child representatives.</p>
</div>

<Gallery photos={PhotosCompactA}/>

</Container>
        </>
    )
}

export default Compact