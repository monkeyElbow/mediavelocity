import { Container } from "react-bootstrap"
import HomeSplash from "../components/HomeSplash"
// import LogoMv from '../components/LogoMv'

export default function HomeSketch() {
    return (
        <>
            
<Container style={{height:"90vh"}} fluid className="bg-dark d-flex flex-column align-items-center justify-content-center">


{/* <LogoMv /> */}
<HomeSplash />

</Container>


        </>
    )
}
