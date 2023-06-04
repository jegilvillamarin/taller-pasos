import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Paso3 = ({ siguente, previo, formData }: any) => {
  const validacionesPaso3 = Yup.object({
    empresa: Yup.string().required("La empresa es requerida"),
    cargo: Yup.string().required("El cargo es requierido"),
    fechaInicioTrabajo: Yup.date().required("La fecha de inicio es requerida"),
    fechaFinTrabajo: Yup.date()
      .required("La fecha de fin es requerida")
      .min(
        Yup.ref("fechaInicioTrabajo"),
        "La fecha de fin debe ser posterior a la fecha de inicio"
      ),
  });

  const formik = useFormik({
    initialValues: {
      empresa: formData.empresa,
      cargo: formData.cargo,
      fechaInicioTrabajo: formatDate(formData.fechaInicioTrabajo),
      fechaFinTrabajo: formatDate(formData.fechaFinTrabajo),
    },
    validationSchema: validacionesPaso3,
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
      <h2>Paso 3. Experiencia Laboral</h2>
      <Form onSubmit={formik.handleSubmit} className="form">
        <Form.Group className="form-group" controlId="empresa">
          <Form.Label>Nombre Empresa:</Form.Label>
          <Form.Control
            name="empresa"
            type="text"
            value={formik.values.empresa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese el nombre de la empresa"
            isInvalid={!!formik.errors.empresa}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.empresa as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="cargo">
          <Form.Label>Cargo Desempeñado:</Form.Label>
          <Form.Control
            name="cargo"
            type="text"
            value={formik.values.cargo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese el cargo desempeñado en la empresa"
            isInvalid={!!formik.errors.cargo}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.cargo as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="fechaInicioTrabajo">
          <Form.Label>Fecha de inicio labores:</Form.Label>
          <Form.Control
            name="fechaInicioTrabajo"
            type="date"
            value={formik.values.fechaInicioTrabajo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese la fecha de inicio"
            isInvalid={!!formik.errors.fechaInicioTrabajo}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.fechaInicioTrabajo as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="fechaFinTrabajo">
          <Form.Label>fecha de finalizacion:</Form.Label>
          <Form.Control
            name="fechaFinTrabajo"
            type="date"
            value={formik.values.fechaFinTrabajo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese la fecha de finalizacion del trabajo"
            isInvalid={!!formik.errors.fechaFinTrabajo}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.fechaFinTrabajo as string}
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

export default Paso3;
