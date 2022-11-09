import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate  } from "react-router-dom";
import axiox from "axios";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

const Logn = ({ setLogoutUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        axiox
            .post("http://dev.nejome.com/api/login", {
                email,
                password,

            })
            .then(response => {
                console.log(response.data)
                console.log("sussess")
                localStorage.setItem('token', response.data.token);
                navigate("/projec/liststing");
            })
            .catch((error) => setError(error.response.data.message));
    };

    return (
        <div>
            <div>
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <Card className="shadow">
                                <Card.Body>
                                    <h2 className="fw-bold mb-2 text-uppercase p-4 bg-primary" style={{fontFamily: 'Cairo'}}>Log in</h2>
                                    <div className="mb-3 mt-md-4">
                                    {error && <p style={{ color: "red" }}>{error}</p>}
                                        <div className="mb-3">
                                            <Form noValidate
                                                autoComplete="off"
                                                onSubmit={login}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-5"
                                                    controlId="formBasicCheckbox"
                                                >
                                                </Form.Group>
                                                <div className="d-grid" >
                                                    <Button variant="primary" type="submit" >
                                                        Log in
                                                    </Button>
                                                </div>
                                            </Form>
                                            <div className="mt-3">
                                                <p className="mb-0  text-center">
                                                    Don't have an account?{" "}
                                                    <a href="{''}" className="text-primary fw-bold">
                                                        Sign Up
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Logn
