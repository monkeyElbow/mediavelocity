import { Row, Col, Container, Image } from 'react-bootstrap';
import Gallery from "react-photo-gallery";


// import Gallery from 'react-photo-gallery';


export default function Magazine() {
    return(

        <Container fluid className="p-4 text-white"
        style={{backgroundColor:"darkgrey"}}
        >
        <Row>
        <Col md={8}>
          <Image fluid src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/653f92285a840727152f6fb9_rw_1200.jpg?h=e9de3c76ed7ea5d663c881b72aa6ad6f" />
         
        </Col>
        <Col className="py-3 d-flex justify-content-center align-items-center">
          <h4>Magazine Photography</h4>
        </Col>
        </Row>


{/* <Row>
<Col>
          <Image fluid src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/09f92025-35f8-4fe3-83fa-f6576158d6e0_rw_1200.jpg?h=46ea06c876dbd85d4dc50330d93ff208" />
</Col>
<Col>
          <Image fluid src="https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/184e44e0-c7a3-4911-96b1-a0bf7f72f324_rw_1200.jpg?h=a4721b8da61bf40346d38b0c01dc3e6c" />
</Col>
<Col>
          <Image fluid src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/ea3cfb29e90f7b7476f88eee_rw_1200.jpg?h=e23994f3108f543cc3028c2799776e72" />
</Col>
<Col>
          <Image fluid src="https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/129faa3469a95584de2ac510_rw_1200.jpg?h=69c62cc203eb0742a7d6a56f5c28b91a" />
</Col>
<Col>
          <Image fluid src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/4a9266c144e9585821838ecc_rw_1200.jpg?h=03abbec823b45856bc11058190cff512" />
</Col>
<Col>
          <Image fluid src="https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/b311c1ebb3f319cb09279468_rw_1200.jpg?h=cae561c11db2f2ca901ee983bdbfb950" />
</Col>


</Row> */}

         
       <Gallery photos={MagPhotos} />  
       <Gallery photos={MagPhotos2} />  
         


          
        </Container>
    )
}

const MagPhotos = [
 
  {
src: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/09f92025-35f8-4fe3-83fa-f6576158d6e0_rw_1200.jpg?h=46ea06c876dbd85d4dc50330d93ff208",
width: 6,
height: 4
  },
  {
src: "https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/184e44e0-c7a3-4911-96b1-a0bf7f72f324_rw_1200.jpg?h=a4721b8da61bf40346d38b0c01dc3e6c",
width: 5,
height: 6
  },
  {
    src: "https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/b311c1ebb3f319cb09279468_rw_1200.jpg?h=cae561c11db2f2ca901ee983bdbfb950",
    width: 6,
    height: 8
  },

]

const MagPhotos2 = [
 

  {
src: "https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/ea3cfb29e90f7b7476f88eee_rw_1200.jpg?h=e23994f3108f543cc3028c2799776e72",
width: 6,
height: 4
},
{
src: "https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/129faa3469a95584de2ac510_rw_1200.jpg?h=69c62cc203eb0742a7d6a56f5c28b91a",
width: 6,
height: 4
  },
  {
src: "https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/4a9266c144e9585821838ecc_rw_1200.jpg?h=03abbec823b45856bc11058190cff512",
width: 6,
height: 4
  },
]