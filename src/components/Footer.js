import { Container, Button } from "react-bootstrap";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <Container fluid className="bg-dark text-white p-5 d-flex justify-content-between"
        >
            <SocialIcons />

            <h2 className="form"><Button className="button" href="/login">CLIENT LOGIN</Button></h2>
        </Container>
    )
}
