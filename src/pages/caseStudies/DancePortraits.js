import { Container, Row, Col, Image } from "react-bootstrap"

export default function DancePortraits() {
    document.title = "Mediavelocity - Dance Photography"
    return (
        <>

<Container fluid className="p-0">
                <Row>
                    <Col md={6}>
                        <Image fluid src="https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/8257fdd9-72f6-4253-98f6-04a9c9fc36f7_rw_1200.jpg?h=57ead0a78452dfd3ab144a97ed2f15d4" />
                    </Col>
                    <Col className="p-5 d-flex align-items-center justify-content-center flex-column">
                    <h1>Dance Studio Portraits</h1>
                    <p className="uc small text-secondary ls-3">Dance photography</p>
                    </Col>
                </Row>
            </Container>


   
    <Image fluid className="w-100" 
    // style={{objectFit:"cover", overflow:"hidden"}} 
    src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/7a418713-611e-45b7-ade7-fdafda69f498_rw_1200.jpg?h=0c3d93f1736b1972657c834a865862c9"/>

     

<Container fluid className="m-0">
    <Row>
        <Col md={6} className="p-5 d-flex align-content-center justify-items-center">
        <Image fluid
        className="" 
        
        src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/70192211-5a5e-4a65-b799-05e1d4d8f745_rw_1200.jpg?h=1e7d2b98a52b57f279d0a0dc9837efa2" />

        </Col>
        <Col className="p-5 d-flex align-content-center justify-items-center">
<Image fluid className="" 
// style={{objectFit:"cover"}}
src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/df350e73-69e7-425c-9d70-f8d96da153b6_rw_1200.jpg?h=3ebc320ba0edc3f750a2aa396d3ce3a5"/>
        </Col>
    </Row>
</Container>


<Container fluid className="p-0 m-0">
   
    <Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/6753909f-690c-4872-8cd8-292d4fee5b36_rw_1200.jpg?h=ef8b4ea0bd435fb4257f23c7b3243039" />

</Container>

<Container fluid className="m-0">
    <Row>
        <Col md={6} className="p-5 d-flex align-content-center justify-items-center">
        <Image fluid
        className="" 
        
        src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/78fc9796-7709-4750-a9cb-aabf70346c0a_rw_1200.jpg?h=9bd5cd4150fb4ca746dc7e78a7726432" />

        </Col>
        <Col className="p-5 d-flex align-content-center justify-items-center">
<Image fluid className="" 
// style={{objectFit:"cover"}}
src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/eeff1154791c8c88a060434e_rw_1200.jpg?h=02aa408b5c26752913888729f2812796"/>
        </Col>
    </Row>
</Container>

<Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/1b31db124d990af7ef73d36a_rw_1200.jpg?h=acfe10049f0eca483990ed99c05b2b1d" />
<Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/97bc51f9b076bae5c4bada3c_rw_1200.jpg?h=a9419a3ccbc13a7382c9ba383941a43e" />

        </>
    )
}
