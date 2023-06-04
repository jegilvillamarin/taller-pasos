import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Paso5 = ({ previo, formData }: any) => {
  const navigate = useNavigate();
  const validacionesPaso5 = Yup.object({
    nombre1: Yup.string().required("Nombre de referencia 1 es requerido"),
    correo1: Yup.string()
      .required("El correo de referencia 1")
      .email("El correo 1 no es valido"),
    telefono1: Yup.number().required(
      "El telefono de referencia 1 es requerido"
    ),
    nombre2: Yup.string().required("El nombre de referencia 2 es requerido"),
    correo2: Yup.string()
      .required("El correo de referencia 2 es requerido")
      .email("El correo 2 no es valido"),
    telefono2: Yup.number().required(
      "El telefono de referencia 2 es requerido"
    ),
  });

  const formik = useFormik({
    initialValues: {
      nombre1: formData.nombre1,
      correo1: formData.correo1,
      telefono1: formData.telefono1,
      nombre2: formData.nombre2,
      correo2: formData.correo2,
      telefono2: formData.telefono2,
    },
    validationSchema: validacionesPaso5,
    onSubmit: (values) => {
      const datosResumen = { ...formData, ...values };
      console.log(datosResumen);
      navigate("/resumen", { state: datosResumen });
    },
  });

  return (
    <div className="form-container">
      <h2>Paso 5. Referencias Personales</h2>
      <Form onSubmit={formik.handleSubmit} className="form">
        <Form.Group className="form-group" controlId="nombre1">
          <Form.Label>Nombre Referencia 1</Form.Label>
          <Form.Control
            name="nombre1"
            type="text"
            value={formik.values.nombre1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese el nombre de la referencia 1"
            isInvalid={!!formik.errors.nombre1}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.nombre1 as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="correo1">
          <Form.Label>Correo Referencia 1</Form.Label>
          <Form.Control
            name="correo1"
            type="email"
            value={formik.values.correo1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese el correo de la referencia 1"
            isInvalid={!!formik.errors.correo1}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.correo1 as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="telefono1">
          <Form.Label>Telefono Referencia 1</Form.Label>
          <Form.Control
            name="telefono1"
            type="number"
            value={formik.values.telefono1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese el telefono de la referencia 1"
            isInvalid={!!formik.errors.telefono1}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.telefono1 as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-group" controlId="nombre2">
          <Form.Label>Nombre Referencia 2</Form.Label>
          <Form.Control
            name="nombre2"
            type="text"
            value={formik.values.nombre2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="ingrese el nombre de la referencia 2"
            isInvalid={!!formik.errors.nombre2}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.nombre2 as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="correo2">
          <Form.Label>Correo Referencia 2</Form.Label>
          <Form.Control
            name="correo2"
            type="email"
            value={formik.values.correo2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese el correo de la referencia 2"
            isInvalid={!!formik.errors.correo2}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.correo2 as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="telefono2">
          <Form.Label>Telefono Referencia 2</Form.Label>
          <Form.Control
            name="telefono2"
            type="number"
            value={formik.values.telefono2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese el telefono de la referencia 2"
            isInvalid={!!formik.errors.telefono2}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.telefono2 as string}
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
          Resumen
        </Button>
      </Form>
    </div>
  );
};

export default Paso5;
