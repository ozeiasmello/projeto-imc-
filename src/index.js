import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState("");
  const [classificacao, setClassificacao] = useState("");

  function calcularIMC(event) {
    event.preventDefault();
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
    if (imcCalculado < 18.5) {
      setClassificacao("Magreza");
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setClassificacao("Normal");
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setClassificacao("Sobrepeso");
    } else if (imcCalculado >= 30 && imcCalculado < 35) {
      setClassificacao("Obesidade Grau I");
    } else if (imcCalculado >= 35 && imcCalculado < 40) {
      setClassificacao("Obesidade Grau II");
    } else {
      setClassificacao("Obesidade Grau III ou Mórbida");
    }
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div className="mb-3">
          <label htmlFor="altura" className="form-label">
            Altura (cm)
          </label>
          <input
            type="number"
            className="form-control"
            id="altura"
            value={altura}
            onChange={(event) => setAltura(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="peso" className="form-label">
            Peso (kg)
          </label>
          <input
            type="number"
            className="form-control"
            id="peso"
            value={peso}
            onChange={(event) => setPeso(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Calcular IMC
        </button>
      </form>
      {imc && classificacao && (
        <div className="resultado">
          <h2>Resultado:</h2>
          <p>
            Seu IMC é {imc} kg/m² e você está classificado como{" "}
            <strong>{classificacao}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
