import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import './App.css'
import { PhotoCollage } from './PhotoCollage'
import { PropertyCard } from './PropertyCard'
import { Route, Routes, useParams, Navigate } from 'react-router-dom'
import { properties, search_by_id } from './properties'
import { useState } from 'react'
import { EditModal } from './EditModal'
import { Map } from './Map'

const rows = [];

for (let i = 0; i < properties.length; i += 4) {
  rows.push(properties.slice(i, i + 4));
}

const Home = () => {
  // const rows = [];

  // for (let i = 0; i < properties.length; i += 4) {
  //   rows.push(properties.slice(i, i + 4));
  // }

  return (
    <>
      {rows.map((row) => (
        <div className="row property-row">
          {row.map((property) => (
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PropertyCard
                id={property.id} 
                images={property.images} 
                title={property.title} 
                location={property.location} 
                price={property.price} 
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}


const Property = () => {
  const { id } = useParams();
  const info = search_by_id(id);
  console.log(info)

  return (
    <div className="property-body w-75 mx-auto py-4">
      <PhotoCollage id={id} />
      <Container className="property-body-info">
        <Row>
          <Col lg={7}>
            <h1>{info.title}</h1>
            <h4>{info.location}</h4>
          </Col>
          <Col lg={5} className="property-body-info-buttons">
            <h1>Precio: {info.price}</h1>
            <Button className="w-100">Agendar Tour</Button>
            <Button variant="outline-primary" className="w-100">Contactar Agente</Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <h3>Que ofrece?</h3>
          <p>{info.description}</p>
        </Row>
        <Map location={info.coordinates} />

      </Container>
    </div>
  );
}


const Login = () => {
  const [usernameEntry, setUsernameEntry] = useState("");
  const [passwordEntry, setPasswordEntry] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const username = "aaa";
  const password = "123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameEntry === username && passwordEntry === password) {
      setLoggedIn(true);
    } else {
      console.log("Failed");
    }
  }

  if (loggedIn) {
    return <Navigate to="/admin/manager" replace={true} />
  }

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Card className="login-card mx-auto">
        <h3 className="login-title fw-bold mb-5 text-uppercase">Inicio de sesión</h3>
        <Form className="my-3" onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              value={usernameEntry}
              onChange={(e) => setUsernameEntry(e.target.value)}
              placeholder="Ingrese usuario"
              className="mb-3"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              value={passwordEntry}
              onChange={(e) => setPasswordEntry(e.target.value)}
              placeholder="Contraseña"
              type="password"
              className="mb-3"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Ingresar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}


const Manager = () => {
  return (
    <>
    <h1>Manager</h1>
    {rows.map((row) => (
      <div className="row property-row">
        {row.map((property) => (
          <div className="col-lg-3 col-md-6 col-sm-12">
            <PropertyCard
              id={property.id} 
              images={property.images} 
              title={property.title} 
              location={property.location} 
              price={property.price} 
            />
            <Container className="manager-buttons">
              <EditModal id={property.id} />
              <Button variant="danger">Eliminar</Button>
            </Container>
          </div>
        ))}
      </div>
    ))}
    </>
    
  );
}


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/manager" element={<Manager />} />
      </Routes>
    </>
  )
}

export default App
