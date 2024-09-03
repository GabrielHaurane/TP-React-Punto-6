import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./App.css";
import FormularioColores from "./components/FormularioColores.jsx";


function App() {

  
  return (
    <>
      <main>
        <Card>
          <h1>Administrar Colores</h1>
          <FormularioColores></FormularioColores>
        </Card>
      </main>
    </>
  );
}

export default App;
