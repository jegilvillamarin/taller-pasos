import React from "react";
import { ProgressBar } from "react-bootstrap";

const BarraProgreso = ({ progreso }: { progreso: number }): JSX.Element => {
  const now = 60;

  return <ProgressBar now={progreso} label={`${progreso}%`} />;
};

export default BarraProgreso;
