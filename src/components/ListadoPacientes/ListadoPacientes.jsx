import React from "react";
import Pacientes from "../Pacientes/Pacientes";

const ListadoPacientes = () => {

  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl mb-2 text-center">Listado de pacientes</h2>
        <p className="text-lg mt-5 text-center mb-5">
          Administra tus{" "}
          <span className="text-indigo-600 text-center text-lg mb-10 font-bold ">
            Pacientes
          </span>{" "}
          y {""}
          <span className="text-indigo-600 text-center font-bold">Citas</span>
        </p> 
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
      </div>
   
    </>
  );
};

export default ListadoPacientes;
