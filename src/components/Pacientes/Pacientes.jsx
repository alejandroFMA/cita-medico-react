import React from "react";

const Pacientes = () => {
  return  <div className="bg-white shadow-md mx-5 my-3 p-5 rounded-xl">
  <p className="font-bold text-gray-700 uppercase">
    Nombre: {""}
    <span className="font-normal normal-case">Hook</span>
  </p>
  <p className="font-bold text-gray-700 uppercase">
    Propietario: {""}
    <span className="font-normal normal-case">Alex</span>
  </p>
  <p className="font-bold text-gray-700 uppercase">
    Email: {""}
    <span className="font-normal normal-case">email@email.com</span>
  </p>
  <p className="font-bold text-gray-700 uppercase">
    Fecha de alta: {""}
    <span className="font-normal normal-case">
      16 de febrero de 2024
    </span>
  </p>
  <p className="font-bold text-gray-700 uppercase">
    Síntomas: {""}
    <span className="font-normal normal-case">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
      reprehenderit dignissimos a ad consectetur laboriosam, doloremque
      cupiditate at non omnis laborum eius ut repellat quam voluptatibus
      natus! Beatae, in saepe?
    </span>
  </p>
</div>;
};

export default Pacientes;
