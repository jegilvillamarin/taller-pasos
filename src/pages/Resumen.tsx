import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";

const Resumen = () => {
  const location = useLocation();
  // los datos del formulario se encuentran en location.state
  const {
    nombre,
    apellidos,
    correo,
    telefono,
    institucion,
    carrera,
    fechaInicio,
    fechaFin,
    empresa,
    cargo,
    fechaInicioTrabajo,
    fechaFinTrabajo,
    biografia,
    nombre1,
    correo1,
    telefono1,
    nombre2,
    correo2,
    telefono2,
  } = location.state;

  const formattedFechaInicio = fechaInicio.toDateString(); // Convertir objeto Date a cadena legible
  const formattedFechaFin = fechaFin.toDateString(); // Convertir objeto Date a cadena legible
  const formattedFechaInicioTrabajo = fechaInicioTrabajo.toDateString(); // Convertir objeto Date a cadena legible
  const formattedFechaFinTrabajo = fechaFinTrabajo.toDateString(); // Convertir objeto Date a cadena legible

  return (
    <div className="card-container">
      <Card className="text-center">
        <Card.Header className="card-header">Resumen de datos</Card.Header>
        <Card.Body>
          <Card.Title>Datos personales</Card.Title>
          <ListGroup className="card-list-group" variant="flush">
            <ListGroup.Item>
              <strong>Nombre:</strong> {nombre}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Apellidos:</strong> {apellidos}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Correo:</strong> {correo}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Teléfono:</strong> {telefono}
            </ListGroup.Item>
          </ListGroup>

          <Card.Title>Informacion academica</Card.Title>
          <ListGroup className="card-list-group" variant="flush">
            <ListGroup.Item>
              <strong>Institución:</strong> {institucion}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Carrera:</strong> {carrera}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Fecha de inicio:</strong> {formattedFechaInicio}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Fecha de fin:</strong> {formattedFechaFin}
            </ListGroup.Item>
          </ListGroup>

          <Card.Title>Datos laborales</Card.Title>
          <ListGroup className="card-list-group" variant="flush">
            <ListGroup.Item>
              <strong>Empresa:</strong> {empresa}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Cargo:</strong> {cargo}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Fecha de inicio:</strong> {formattedFechaInicioTrabajo}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Fecha de fin:</strong> {formattedFechaFinTrabajo}
            </ListGroup.Item>
          </ListGroup>

          <Card.Title>Referencias Personales</Card.Title>
          <ListGroup className="card-list-group" variant="flush">
            <ListGroup.Item>
              <strong>Nombre Referencia 1:</strong> {nombre1}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Correo Referencia 1:</strong> {correo1}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Teléfono Referencia 1:</strong> {telefono1}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Nombre Referencia 2:</strong> {nombre2}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Correo Referencia 2:</strong> {correo2}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Teléfono Referencia 2:</strong> {telefono2}
            </ListGroup.Item>
          </ListGroup>

          <Card.Title>Biografía</Card.Title>
          <Card.Text>{biografia}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Resumen;
