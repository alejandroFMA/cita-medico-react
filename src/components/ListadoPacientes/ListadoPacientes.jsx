import React from "react";
import Pacientes from "../Pacientes/Pacientes";

const ListadoPacientes = ({pacientes, setPaciente, deletePaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes</span>{" "}
            y{" "}
            <span className="text-indigo-600 font-bold">Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              deletePaciente={deletePaciente}
            />
          ))}
        </>
      ) : (
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
      )}
    </div>
  );
};

export default ListadoPacientes;
