import React from "react";

const Formulario = () => {
  return (
    <div className="w-1/2">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-5 text-center">
        {" "}
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form>
        <div className="bg-white shadow-md rounded-lg p-5">
          <label
            htmlFor="mascota"
            className="font-bold block uppercase text-grey-700 mb-3"
          >
            {" "}
            Nombre de mascota
          </label>

          <input
            id="mascota"
            className="border-2  p-2 w-full placeholder-gray-400 rounded"
            type="text"
            placeholder="Nombre de mascota"
          />
        </div>
        <div></div>
        <div></div>
      </form>
    </div>
  );
};

export default Formulario;
