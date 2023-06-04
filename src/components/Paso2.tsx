import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Paso2 = ({ siguente, previo, formData }: any) => {
  const validacionesPaso2 = Yup.object({
    institucion: Yup.string().required("La istitucion es requerida"),
    carrera: Yup.string().required("La carrera es requierida"),
    fechaInicio: Yup.date().required("La fecha de inicio es requerida"),
    fechaFin: Yup.date()
      .required("La fecha de fin es requerida")
      .min(
        Yup.ref("fechaFin"),
        "La fecha de fin debe ser posterior o igual a la fecha de inicio"
      ),
  });

  const formik = useFormik({
    initialValues: {
      institucion: formData.institucion,
      carrera: formData.carrera,
      fechaInicio: formatDate(formData.fechaInicio),
      fechaFin: formatDate(formData.fechaFin),
    },
    validationSchema: validacionesPaso2,
    onSubmit: (values) => {
      siguente(values);
    },
  });

  // Función para formatear las fechas en el formato "YYYY-MM-DD"
  function formatDate(dateString: string | undefined): string {
    if (!dateString) return "";

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="form-container">
      <h2>Paso 2. Informacion Academica</h2>
      <Form onSubmit={formik.handleSubmit} className="form">
        <Form.Group className="form-group" controlId="institucion">
          <Form.Label>Nombre de la institucion</Form.Label>
          <Form.Control
            name="institucion"
            type="text"
            value={formik.values.institucion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese la institucion a la que pertenece"
            isInvalid={!!formik.errors.institucion}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.institucion as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="carrera">
          <Form.Label>Carrera estudiada</Form.Label>
          <Form.Control
            name="carrera"
            type="text"
            value={formik.values.carrera}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese su carrera estudiada o que estudia"
            isInvalid={!!formik.errors.carrera}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.carrera as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="fechaInicio">
          <Form.Label>Fecha de inicio</Form.Label>
          <Form.Control
            name="fechaInicio"
            type="date"
            value={formik.values.fechaInicio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese su de fecha inicio de estudios"
            isInvalid={!!formik.errors.fechaInicio}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.fechaInicio as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="fechaFin">
          <Form.Label>Fecha de finalizacion</Form.Label>
          <Form.Control
            name="fechaFin"
            type="date"
            value={formik.values.fechaFin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese la fecha de finalizacion de estudios"
            isInvalid={!!formik.errors.fechaFin}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.fechaFin as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="secondary"
          onClick={previo}
          type="button"
          className="ml-3">
          Anterior
        </Button>

        <Button variant="primary" type="submit">
          Siguiente
        </Button>
      </Form>
    </div>
  );
};

export default Paso2;
