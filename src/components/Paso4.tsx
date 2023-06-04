import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Paso4 = ({ siguente, previo, formData }: any) => {
  const validacionesPaso4 = Yup.object({
    biografia: Yup.string().required("La biografía es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      biografia: formData.biografia,
    },
    validationSchema: validacionesPaso4,
    onSubmit: (values) => {
      siguente(values);
    },
  });

  return (
    <div className="form-container">
      <h2>Paso 4. Biografía</h2>
      <Form onSubmit={formik.handleSubmit} className="form">
        <Form.Group controlId="biografia" className="form-group">
          <Form.Label>Escriba una breve biografía:</Form.Label>
          <Form.Control
            name="biografia"
            as="textarea"
            value={formik.values.biografia}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese la biografía a la que pertenece"
            isInvalid={!!formik.errors.biografia}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.biografia as string}
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

export default Paso4;
