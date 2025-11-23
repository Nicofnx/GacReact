import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Burbujas from "../assets/burbujas.png"
import { TrendingUpIcon } from "lucide-react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background-color: #fff;
  color: #2e1a75;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.8s ease forwards;

`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #0f3057;
  margin-bottom: 10px;
  text-align: center;
  padding: 0 0 15px 0;
`;


const FormContainer = styled.div`
   
  background: #f8fcff;
  border: 2px solid #c6e0f5;
  border-radius: 12px;
  padding: 30px;
  max-width: 1000px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;


`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: #0f3057;
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Field = styled.div`
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #0f3057;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1.5px solid #a8c3f5;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s ease;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
  &:focus {
    border-color: #0f3057;
    
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1.5px solid #a8c3f5;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #0f3057;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1.5px solid #a8c3f5;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  outline: none;
  &:focus {
    border-color: #0f3057;
  }
`;

const Button = styled.button`
  background-color: #0f3057;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  margin-top: 10px;
  transition: background 0.3s ease, transform 0.2s;
  &:hover {
    background-color: #243c8a;
    transform: scale(1.03);
  }
`;

/* === Estilos para los días laborales === */
const DaysContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const DayButton = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  border: 1.5px solid ${(props) => (props.active ? "#0f3057" : "#ccc")};
  background-color: ${(props) => (props.active ? "#0f3057" : "#f3f1fb")};
  color: ${(props) => (props.active ? "#fff" : "#0f3057")};
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => (props.active ? "#24448a" : "#e0e5fa")};
  }
`;

export default function CotizacionSection() {
  
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    localidad: "",
    tipoServicio: "",
    horas: "4",
    operarios: "1",
    materiales: "",
    vidrios: "",
    insumos: "",
    mensaje: "",
    dias: [],
    cantEmpleadosInsumos: "",
  });

  const diasSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  const toggleDia = (dia) => {
    setFormData((prev) => {
      const seleccionados = prev.dias.includes(dia)
        ? prev.dias.filter((d) => d !== dia)
        : [...prev.dias, dia];
      return { ...prev, dias: seleccionados };
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Formulario enviado (simulado)");
  };

  return (
    <Section id="cotizaciones">
      <Title>
        Complete el siguiente formulario y le enviaremos a la brevedad la cotización solicitada.
      </Title>

      <FormContainer>
        <SectionTitle>Datos de contacto</SectionTitle>

        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <Label>*Nombre y apellido / Razón Social</Label>
              <Input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <Label>*Teléfono</Label>
              <Input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <Label>*Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <Label>*Dirección</Label>
              <Input
                type="text"
                name="direccion"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <Label>*Localidad</Label>
              <Input
                type="text"
                name="localidad"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>
          </FieldGroup>

          <SectionTitle>Detalle del servicio</SectionTitle>

          <FieldGroup>
            <Field>
              <Label>Tipo de Servicio</Label>
              <Select name="tipoServicio" value={formData.tipoServicio} onChange={handleChange}>
                <option value="">Seleccionar</option>
                <option value="Oficinas">Final de obras</option>
                <option value="Oficinas">Industrias y fábricas</option>
                <option value="Oficinas">Establecimientos comerciales </option>
                <option value="Oficinas">Oficinas</option>
                <option value="Industria">Depósitos</option>
                <option value="Eventos">Eventos</option>
              </Select>
            </Field>

            <Field>
              <Label>Cantidad de horas diarias</Label>
              <Input
                type="number"
                name="horas"
                value={formData.horas}
                onChange={handleChange}
                min="4"
                isCenter={true}
              />
            </Field>

            <Field>
              <Label>Cantidad de operarios</Label>
              <Input
                type="number"
                name="operarios"
                value={formData.operarios}
                onChange={handleChange}
                min="1"
                isCenter={true}
              />
            </Field>
          </FieldGroup>

          <Field>
            <Label>Días Laborales</Label>
            <DaysContainer>
              {diasSemana.map((dia) => (
                <DayButton
                  key={dia}
                  type="button"
                  active={formData.dias.includes(dia)}
                  onClick={() => toggleDia(dia)}
                >
                  {dia}
                </DayButton>
              ))}
            </DaysContainer>
          </Field>

          <FieldGroup>
            <Field>
              <Label>Insumos para limpieza</Label>
              <Select name="materiales" value={formData.materiales} onChange={handleChange}>
                <option value="">Seleccionar</option>
                <option value="Sin materiales">Servicio sin Insumos</option>
                <option value="Con materiales">Servicio con Insumos</option>
              </Select>
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <Label>Limpieza de vidrios en altura</Label>
              <Select name="vidrios" value={formData.vidrios} onChange={handleChange}>
                <option value="">Ninguna</option>
                <option value="Hasta 3 metros">Hasta 3 metros</option>
                <option value="Más de 3 metros">Más de 3 metros</option>
              </Select>
            </Field>

            <Field>
              <Label>Insumos de tocador</Label>
              <Select name="insumos" value={formData.insumos} onChange={handleChange}>
                <option value="">No incluir</option>
                <option value="Incluir">Incluir (papel de manos, toallas intercadas, jabón liquido)</option>
              </Select>
            </Field>
            
          </FieldGroup>
          {formData.insumos === "Incluir" && (
            <Field>
              <Label>Cantidad de empleados (para cálculo de insumos)</Label>
              <Input
                type="number"
                name="cantEmpleadosInsumos"
                value={formData.cantEmpleadosInsumos}
                onChange={handleChange}
                min="1"
                isCenter={true}
              />
            </Field>
          )}

          <Field>
            <Label>Mensaje adicional</Label>
            <TextArea
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Detalles adicionales sobre el servicio..."
            />
          </Field>

          <Button type="submit">ENVIAR</Button>
        </Form>
      </FormContainer>
    </Section>
  );
}