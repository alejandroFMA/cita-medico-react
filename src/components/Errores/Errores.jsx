import React from "react";

const Errores = ({children}) => {
  return <div  className="bg-red-600 text-white text-center mb-2 font-bold py-2 px-5 rounded uppercase" >
 {children}
</div>;
};

export default Errores;
