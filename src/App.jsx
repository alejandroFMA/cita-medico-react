import { useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import Footer from "./components/Footer";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS =  () => {
        const pacientesLS =  JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    console.log(pacientes)
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const deletePaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            deletePaciente={deletePaciente}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
