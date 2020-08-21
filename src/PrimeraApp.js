import React from "react";
import PropTypes from "prop-types";

// Trabajaremos con Funcional components
// Hay componentes de const y clases
//Propiedades enviadas a los componenetes

const PrimeraApp = (  {saludo, subtitulo} ) => {
    
  
    return  (
        <> 

         {/* <h1> {JSON.stringify(saludo, null, 3)} </h1> */}
         <h1>{saludo}</h1>
         <p>{subtitulo}</p>
        
        </>
        );
  
};
PrimeraApp.prototypes = {
    saludo: PropTypes.string.isRequired,
    keona: PropTypes.array.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtituo por default"
}
 export default PrimeraApp;
