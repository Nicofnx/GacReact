import React, { useState } from "react"
import styled from "styled-components"

// --- Overlay ---
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  padding: 15px; /* margen en mobile */
`

// --- Modal ---
const ModalContainer = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0; /* ocupa toda la pantalla */
    padding: 20px;
    z-index: 1500;
  }
`

const Title = styled.h2`
  color: #009fe3;
  margin-bottom: 10px;
  font-size: 22px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
`

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
`

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  resize: none;
  font-size: 14px;
`

const FileInput = styled.input`
  padding: 5px;
  font-size: 14px;
`

const Button = styled.button`
  background: #009fe3;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background: #007bbd;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`

// --- Componente Modal ---
function ModalCV({ onClose }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    edad: "",
    localidad: "",
    puesto: "OPERARIO",
    mensaje: "",
    cv: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    alert("¡Datos enviados con éxito!")
    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose() // solo si se hace click en el fondo
    }
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Title>Trabajá con nosotros</Title>
        <form onSubmit={handleSubmit}>
          <Label>Nombre y Apellido</Label>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <Label>Correo electrónico</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label>Celular</Label>
          <Input
            type="tel"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />

          <Label>Edad</Label>
          <Input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />

          <Label>Localidad</Label>
          <Input
            type="text"
            name="localidad"
            value={formData.localidad}
            onChange={handleChange}
            required
          />

          <Label>Puesto solicitado</Label>
          <Select
            name="puesto"
            value={formData.puesto}
            onChange={handleChange}
          >
            <option value="OPERARIO">Operario</option>
            <option value="SUPERVISOR">Supervisor</option>
            <option value="ADMINISTRATIVO">Administrativo</option>
          </Select>

          <Label>Mensaje</Label>
          <TextArea
            rows="3"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />

          <Label>Subí tu CV</Label>
          <FileInput
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />

          <Button type="submit">ENVIAR</Button>
        </form>
      </ModalContainer>
    </Overlay>
  )
}

export default ModalCV