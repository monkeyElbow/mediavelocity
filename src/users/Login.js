import { useState } from "react";
import { 
    // Link, 
    // Redirect, 
    useNavigate } from "react-router-dom";
import { Container, Card, Form, Alert, Button } from "react-bootstrap";

import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
// import { useAuth } from "../util/AuthContext";



export default function Login() {
// const { signin } = useAuth()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate()

const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
}

const handlePasswordChange = (e) => {
    const value = e.target.value
    setPassword(value)
}

const loginUser = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    setLoading(true)
    try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/')
    } catch (e) {
        if(e.code === 'auth/wrong-password'){
            setError('You have entered wrong password. Please try again.')
        } else if (e.code === 'auth/user-not-found') {
            setError('The email you entered is not registered yet. Create a new account and login. Thanks!')
        }
    } finally {
        setLoading(false)
    }
}

return (
    <Container className="my-3 d-flex flex-column align-items-center justify-content-center"
style={{minHeight:"30rem"}}>

         {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}

<Card className="w-100" style={{maxWidth: "400px"}}>
    <Card.Body>
<h2>Sign In</h2>

<Form onSubmit={loginUser} className="form">

<Form.Group id="email">
<Form.Label>Email</Form.Label>
<Form.Control 
type="email" 
name="email" 
value={email}
onChange={handleEmailChange}
></Form.Control>
</Form.Group>

<Form.Group id="password" name="password" className="mt-3">
<Form.Label>password</Form.Label>
<Form.Control 
type="password" 
value={password}
onChange={handlePasswordChange}
></Form.Control>
</Form.Group>

<br />

<Button className="w-100 button" disabled={loading} type="submit">Sign In</Button>
</Form>

<div className="w.100 text-center mt-3">
{/* <Link to="/forgot-password">Forgot Password?</Link>
<br />
<br />
<Link to="/signup">Need an account? Click here</Link> */}
</div>

    </Card.Body>
</Card>


</Container>
)


}
