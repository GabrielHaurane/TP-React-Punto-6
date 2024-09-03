import { useState, useEffect } from "react";
import { Form, Button, Card, CardFooter, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemColor from "./ItemColor";

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
      <Card className="cardCss w-75 d-flex my-4 ">
        <Card.Header>Administrar colores</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="ingrese un color ej blue"
                type="text"
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Card.Footer>
      </Card>
        <div className="d-flex flex-wrap w-100">
          {paletaColor.map((itemsColor, posicionColor) => (
            <Card key={posicionColor} className="mb-3 mx-2 col-12 col-md-3 col-lg-2 ">
                <ItemColor
                  color={itemsColor}
                ></ItemColor>
                <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger" onClick={()=>borrarColor(itemsColor)}>Borrar</Button>
            </Card.Footer>
            </Card>
          ))}
        </div>
      
    </>
  );
};

export default FormularioColores;
