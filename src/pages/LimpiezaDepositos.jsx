import React from "react";
import ServiceSection from "../components/ServiceSecction";
import depositoImg from "../assets/depo.jpg";

function LimpiezaDepositos() {
  return (
    <ServiceSection
      
      title="Depósitos limpios,"
      highlight="operación más segura"
      lead={`En los depósitos, la limpieza es clave para la seguridad de la mercadería, la eficiencia
      operativa y el cumplimiento de normas de higiene. En <b>Grupo Aldo Cleaning SRL</b> brindamos
      un servicio integral y planificado que se adapta a la dinámica de tu centro logístico.`}
      badges={[
        "Centros logísticos",
        "Depósitos industriales",
        "Áreas de almacenamiento",
      ]}
      cards={[
        {
          title: "¿Qué hacemos?",
          items: [
            "Limpieza profunda y mantenimiento de pisos, pasillos y áreas de carga y descarga.",
            "Higienización de estanterías, racks y sectores de almacenamiento.",
            "Eliminación de polvo y residuos que puedan afectar la mercadería.",
            "Desinfección de superficies de contacto frecuente y áreas comunes.",
          ],
        },
        {
          title: "Beneficios para tu operación",
          items: [
            "Depósitos más seguros y organizados para proteger tu mercadería.",
            "Reducción de riesgos laborales y accidentes por suciedad o desorden.",
            "Flexibilidad horaria para adaptarnos a tus tiempos de carga y descarga.",
            "Supervisión para asegurar calidad y continuidad del servicio.",
            "Impacto directo en la eficiencia de la operativa diaria.",
          ],
        },
        {
          title: "Nuestro equipo",
          items: [
            "Personal capacitado con formación en seguridad e higiene industrial.",
            "Uso de EPP y uniformes claramente identificables.",
            "Procedimientos adaptados a cada depósito según tipo de mercadería.",
            "Coordinación con responsables logísticos para no interrumpir procesos.",
          ],
        },
        {
          title: "Seguridad y confianza",
          items: [
            "Protocolos alineados con normativas de higiene y seguridad laboral.",
            "Control de accesos y trazabilidad del personal de limpieza.",
            "Planificación preventiva para minimizar riesgos y mantener la continuidad operativa.",
            "Canales de comunicación abiertos para ajustar el servicio cuando sea necesario.",
          ],
        },
      ]}
      imageSrc={depositoImg}
      imageAlt="Servicio de limpieza profesional de depósitos"
      floatingTitle="Operación más ordenada"
      floatingText="Limpieza pensada para logística segura y eficiente."
      ctaLabel="Cotizar limpieza de depósitos"
      ctaTo={{ pathname: "/", hash: "#cotizaciones" }}
      ctaSub="Diseñamos un plan a medida de tu depósito o centro logístico."
    />
  );
}

export default LimpiezaDepositos;