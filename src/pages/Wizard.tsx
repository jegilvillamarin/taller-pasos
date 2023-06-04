import React, { useState } from "react";
import Paso1 from "../components/Paso1";
import Paso2 from "../components/Paso2";
import Paso3 from "../components/Paso3";
import Paso4 from "../components/Paso4";
import Paso5 from "../components/Paso5";
import BarraProgreso from "../components/BarraProgreso";
const Wizard = () => {
  const [step, setStep] = useState(1);
  const [progreso, setProgreso] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    institucion: "",
    carrera: "",
    fechaInicio: "",
    fechaFin: "",
    empresa: "",
    cargo: "",
    fechaInicioTrabajo: "",
    fechaFinTrabajo: "",
    biografia: "",
    nombre1: "",
    correo1: "",
    telefono1: "",
    nombre2: "",
    correo2: "",
    telefono2: "",
  });

  const Siguiente = (values: any) => {
    setFormData((prevState) => ({ ...prevState, ...values }));
    setStep((prevState) => prevState + 1);
    setProgreso((prevState) => prevState + 20);
  };
  const Previo = () => {
    setStep((prevState) => prevState - 1);
    setProgreso((prevState) => prevState - 20);
  };

  switch (step) {
    case 1:
      return (
        <>
          <BarraProgreso progreso={progreso} />
          <Paso1 siguente={Siguiente} formData={formData} />
        </>
      );
    case 2:
      return (
        <>
          <BarraProgreso progreso={progreso} />
          <Paso2 siguente={Siguiente} previo={Previo} formData={formData} />
        </>
      );
    case 3:
      return (
        <>
          <BarraProgreso progreso={progreso} />
          <Paso3 siguente={Siguiente} previo={Previo} formData={formData} />
        </>
      );
    case 4:
      return (
        <>
          <BarraProgreso progreso={progreso} />
          <Paso4 siguente={Siguiente} previo={Previo} formData={formData} />
        </>
      );
    case 5:
      return (
        <>
          <BarraProgreso progreso={progreso} />
          <Paso5 siguente={Siguiente} previo={Previo} formData={formData} />
        </>
      );
    default:
      return null;
  }
};

export default Wizard;
