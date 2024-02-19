import React from "react";

const Pacientes = ({paciente, setPaciente, deletePaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar este paciente?")

    if(respuesta){
      deletePaciente(id)
    }

  }

  return <>
  <div className="bg-white shadow-md mx-5 my-3 p-5 rounded-xl">
  <p className="font-bold text-gray-700 uppercase mb-3">
    Nombre: {""}
    <span className="font-normal normal-case">{nombre}</span>
  </p>
  <p className="font-bold text-gray-700 uppercase mb-3">
    Propietario: {""}
    <span className="font-normal normal-case">{propietario}</span>
  </p>
  <p className="font-bold text-gray-700 uppercase mb-3">
    Email: {""}
    <span className="font-normal normal-case">{email}</span>
  </p>
  <p className="font-bold text-gray-700 uppercase mb-3">
    Fecha de alta: {""}
    <span className="font-normal normal-case">
     {fecha}
    </span>
  </p>
  <p className="font-bold text-gray-700 uppercase mb-3">
    Síntomas: {""}
    <span className="font-normal normal-case">
    {sintomas}
    </span>
  </p>

  <div className="flex justify-between">
    <button type="button" className="bg-indigo-600 mt-10 py-2 px-10 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
    onClick={()=> setPaciente(paciente)}>Editar</button>
    <button type="button" onClick={handleEliminar}
    className="bg-red-600 mt-10 py-2 px-3 hover:bg-red-700 text-white font-bold uppercase rounded-md">Borrar</button>
  </div>
</div>
</>
};

export default Pacientes;
