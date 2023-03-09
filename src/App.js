import { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setIMC(imc.toFixed(2));

    if (imc < 18.5) {
      setClassificacao('Magreza');
    } else if (imc < 25) {
      setClassificacao('Normal');
    } else if (imc < 30) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="mb-4">Calculadora de IMC</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Altura (cm)</Form.Label>
              <Form.Control type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Peso (kg)</Form.Label>
              <Form.Control type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={calcularIMC}>Calcular</Button>
          </Form>
        </Col>
      </Row>
      {imc && (
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>IMC</th>
                  <th>Classificação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{imc}</td>
                  <td>{classificacao}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
