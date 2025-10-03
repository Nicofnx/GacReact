import React, { useState } from "react";
import styled from "styled-components";
import FondoChica from "../assets/Chica de Limpieza.png"

const Section = styled.section`
  position: relative;
  background-color: #f9f9f9;
  padding: 60px 20px;
  overflow: hidden; /* asegura que el pseudo no se escape */

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${FondoChica});
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    opacity: 0.1; /* 10% */
    z-index: 0;
  }

  /* Aseguramos que el contenido esté arriba */
  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #008cba;
    margin-bottom: 40px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  p {
    margin-bottom: 35px;
    line-height: 1.5;

    strong {
      font-weight: 600;
      display: block;
      margin-bottom: 5px;
    }

    a {
      color: #0077cc;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 768px) {
      text-align: center;
      font-size: 14px;
    }
  }
`;

const Form = styled.form`
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    gap: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 15px;

  input {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #008cba;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 10px;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #008cba;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 10px;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #008cba;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 10px;
  }
`;

const Button = styled.button`
  background: #008cba;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0077a3;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    celular: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí podés integrar EmailJS
  };

  return (
    <Section>
      <Container>
        {/* Columna izquierda */}
        <ContactInfo>
          <h2>¡CONTACTATE CON NOSOTROS!</h2>
          <p>
            <strong>Nuestro correo:</strong>
            <a href="mailto:administracion@gacsrl.com.ar">
              administracion@gacsrl.com.ar
            </a>
            <br />
            <a href="mailto:rrhh@gacsrl.com.ar">rrhh@gacsrl.com.ar</a>
          </p>
          <p>
            <strong>Atención telefónica:</strong>
            (02323) 1234-1234 <br />
            (02323) 1234-1234
          </p>
          <p>
            <strong>Dirección:</strong>
            Luján, Buenos Aires
          </p>
        </ContactInfo>

        {/* Columna derecha */}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </Row>

          <Input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
          />

          <Input
            type="tel"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un servicio</option>
            <option value="Limpieza de oficinas">Limpieza de oficinas</option>
            <option value="Limpieza industrial">Limpieza industrial</option>
            <option value="Limpieza de obra">Limpieza de obra</option>
            <option value="Limpieza de vidrios">Limpieza de vidrios</option>
          </Select>

          <Textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            required
          />

          <Button type="submit">ENVIAR</Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Contacto;