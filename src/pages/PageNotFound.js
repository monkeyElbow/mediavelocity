import { Container } from "react-bootstrap"

export default function PageNotFound() {
    document.title = "Page Not Found"
    return (
        <>
        <Container className="d-flex align-items-center justify-content-center"
        style={{minHeight:"70vh"}}
        >
<h1>
Sorry. That page does not exist.
</h1>
        </Container>

        </>
    )
}

