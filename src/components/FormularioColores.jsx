import React, { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const FormularioColores = () => {
  const paletaLocalStorage =
    JSON.parse(localStorage.getItem("paletaKey")) || [];
  const [paletaColor, setPaletaColor] = useState(paletaLocalStorage);
  const [color, setColor] = useState("");

  useEffect(() => {
    console.log("prueba del ciclo");
    localStorage.setItem("paletaKey", JSON.stringify(paletaColor));
  }, [paletaColor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaletaColor([...paletaColor, color]);
    setColor("");
  };

  const borrarColor = (nombreColor) => {
    const coloresFiltrados = paletaColor.filter((item) => item !== nombreColor);
    setPaletaColor(coloresFiltrados);
  };

  return (
    <>
      
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control placeholder="ingrese un color ej blue" disabled />
          </Form.Group>
        </Form>
      
    </>
  );
};

export default FormularioColores;
