import ResponsiveEmbed from "react-responsive-embed";
import { Container } from "react-bootstrap";

const BurgerRoute = () => {
    return(
<>
        <ResponsiveEmbed
        id="burgerRoute"
        src="https://www.youtube.com/embed/JG2F4hcc9H0"
        allowFullScreen
      />

      <Container fluid className="p-lg-3 p-md-2 bg-dark text-white">
<h5>Marlin Network: Video Editing and Motion Graphics.</h5>
</Container>
</>
    )
}

export default BurgerRoute;