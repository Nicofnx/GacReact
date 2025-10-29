import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import CloseButtom from "./CloseButtom";
import { Upload } from "lucide-react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

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
  animation: ${({ isClosing }) =>
    isClosing
      ? css`${fadeOut} 0.5s forwards`
      : css`${fadeIn} 0.5s forwards`};
`;

const Title = styled.h2`
  color: #009fe3;
  margin-bottom: 10px;
  font-size: 22px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-top: 10px;
  display: block;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  resize: none;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileDrop = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 15px;
  border: 2px dashed #009fe3;
  border-radius: 10px;
  background-color: #f9f9f9;
  color: #009fe3;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  font-size: 14px;

  &:hover {
    background-color: #009fe3;
    color: #fff;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

const FileName = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #555;
`;

const Button = styled.button`
  background: #009fe3;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #007bbd;
  }
`;

// --- Componente Modal ---
function ModalCV({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false)



  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    edad: "",
    localidad: "",
    direccion: "",
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
    handleClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 500) // igual al tiempo del fadeOut
  }

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContainer isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
        <Title>Trabajá con nosotros</Title>
        <CloseButtom onClick={handleClose} />
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
          
          <Label>Dirección (calle y altura)</Label>
          <Input
            type="text"
            name="direccion"
            value={formData.nombre}
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

          <FileDrop htmlFor="cv">
            <Upload />
            <span>Arrastrá tu archivo o hacé clic aquí</span>
          </FileDrop>

          <HiddenFileInput
            id="cv"
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />

          {formData.cv && <FileName>{formData.cv.name}</FileName>}

          <Button type="submit">ENVIAR</Button>
        </form>
      </ModalContainer>
    </Overlay>
  )
}

export default ModalCV