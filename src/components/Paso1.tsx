import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Paso1 = ({ siguente, formData }: any) => {
  const validacionesPaso1 = Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
    apellidos: Yup.string().required("Los apellidos son requeridos"),
    correo: Yup.string()
      .email("El correo no es valido")
      .required("El correo es requerido"),
    telefono: Yup.string().required("El telefono es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      correo: formData.correo,
      telefono: formData.telefono,
    },
    validationSchema: validacionesPaso1,
    onSubmit: (values) => {
      siguente(values);
    },
  });

  return (
    <div className="form-container">
      <h2>Paso 1. Datos Basícos</h2>
      <Form onSubmit={formik.handleSubmit} className="form">
        <Form.Group controlId="nombre" className="form-group">
          <Form.Label>Nombres:</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese su nombre"
            isInvalid={!!formik.errors.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.nombre as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="apellidos" className="form-group">
          <Form.Label>Apellidos:</Form.Label>
          <Form.Control
            name="apellidos"
            type="text"
            value={formik.values.apellidos}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese sus apellidos"
            isInvalid={!!formik.errors.apellidos}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.apellidos as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="correo" className="form-group">
          <Form.Label>Correo:</Form.Label>
          <Form.Control
            name="correo"
            type="email"
            value={formik.values.correo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese su correo"
            isInvalid={!!formik.errors.correo}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.correo as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="telefono" className="form-group">
          <Form.Label>Telefono:</Form.Label>
          <Form.Control
            name="telefono"
            type="text"
            value={formik.values.telefono}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese su telefono"
            isInvalid={!!formik.errors.telefono}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.telefono as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Siguiente
        </Button>
      </Form>
    </div>
  );
};

export default Paso1;
