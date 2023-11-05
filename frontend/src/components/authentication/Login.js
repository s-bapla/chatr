import React from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fillFields, setFillFields] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toggleFillFields();
      return;
    }
        try {
          const res = await fetch("http://localhost:4000/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password
            }),
          });
          if (res.ok) {
            localStorage.setItem("userInfo", JSON.stringify(res));
            history.push("/chats");
          } else {
            const error = await res.json();
            throw Error(error.message || "unknown error");
          }
        } catch (error) {
          toggleError();
          setErrorMsg(error.message);
        }
  };

  const toggleFillFields = () => setFillFields(!fillFields);
  const toggleError = () => setError(!error);

  return (
    <>
      <Toast show={error} onClose={toggleError} delay={3000}>
        <Toast.Header>
          <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{errorMsg}</Toast.Body>
      </Toast>
      <Toast show={fillFields} onClose={toggleFillFields} delay={3000}>
        <Toast.Header>
          <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>please enter all the fields</Toast.Body>
      </Toast>
      <Stack gap={3}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
      </Stack>
    </>
  );
};

export default Login;
