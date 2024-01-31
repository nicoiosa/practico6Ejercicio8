import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Formular = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [DNI, setDNI] = useState("");
  const [email, setEmail] = useState("");
  const passwordRegexp = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  );
  const emailRegexp = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  );
  const handleChange = (e) => {
    e.preventDefault();
    if (
      DNI.length < 7 ||
      DNI.length > 9 ||
      name.trim === "" ||
      !passwordRegexp.test(password) ||
      !emailRegexp.test(email)
    ) {
      alert("Ingrese los datos correctos");
    } else {
      setName("");
      setPassword("");
      setDNI("");
      setEmail("");
      alert(`Datos Enviados`);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleChange}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            value={name}
            name={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            value={password}
            name={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text className="text-muted">
          La contraseña debe tener por lo menos 8 caracteres, una minuscula una mayuscula y un numero.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDNI">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="number"
            placeholder="21578973"
            value={DNI}
            name={DNI}
            onChange={(e) => setDNI(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="rollingcode@email.com"
            value={email}
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Formular;
