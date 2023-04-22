import { Container, Image, Row, Col } from "react-bootstrap"

export default function FoodPhoto() {
    document.title = "Mediavelocity - Food Photography"
    return (
        <>

         <Container fluid className="p-0">
<Row>
    <Col>
             <Image fluid src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/d5e6c460-068f-4bfa-b76e-58f4a6b7280a_rw_1200.jpg?h=41f10b95cf8f61144f89a4fca07bbb87"/>
    </Col>
    <Col className="d-flex flex-column justify-content-center align-items-center">
<h1>Food Photography</h1>
<h2>Shoot it or eat it?</h2>
    </Col>
</Row>

</Container>
<Container fluid className="p-0">

             <Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/df0ce50f-ae80-4ceb-af17-8d869afca978_rw_1200.jpg?h=1a27939320d8f87e7b339c6322f73f91"/>

             <Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/f88ca87a-c585-4ed5-9ecf-245861f95ab2_rw_1200.jpg?h=041095aecc5ccc5fdf89db466b34c06f"/>

             <Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/b69f7acb-9ed9-428b-a06c-85c52761ea13_rw_1200.jpg?h=b1c3339c1b27c308d6e72d20235d12db"/>

             <Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/ceda7a3c-ffef-4990-bbf1-2ec5908ef4d1_rw_1200.jpg?h=12efd2637058931443a3ab52e564671f"/>

             <Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/20148461-8271-470c-b0df-8c9380ecdc92_rw_1200.jpg?h=07b41a2b47df130fced8bddc1cc3172a"/>

             <Image className="w-100" fluid src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/dc70653e-f808-44ff-9db3-6192e8db003d_rw_1200.jpg?h=9cc78b7bd2aada08baa9f61670d3a97e"/>
         </Container>

        </>
    )
}
