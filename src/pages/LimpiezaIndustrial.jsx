import React from "react";
import ServiceSection from "../components/ServiceSecction";
import industryImg from "../assets/industria.png";

function LimpiezaIndustrial() {
  return (
    <ServiceSection
      
      title="Limpieza industrial profesional"
      highlight="con foco en seguridad y auditorías"
      lead={`En <b>Grupo Aldo Cleaning SRL</b> entendemos que la limpieza en plantas industriales
      y fábricas no es solo una cuestión de orden: es clave para la seguridad, la productividad
      y el cumplimiento de auditorías internas y externas.`}
      badges={[
        "Planes por turno y sector",
        "Supervisión permanente",
        "Protocolos adaptados a cada cliente",
      ]}
      cards={[
        {
          title: "¿Qué hacemos?",
          items: [
            "Higienización de líneas de producción y áreas de trabajo.",
            "Limpieza profunda de pisos industriales, depósitos y sectores de tránsito.",
            "Cuidado especial de superficies en contacto con alimentos o insumos sensibles.",
            "Gestión de residuos según protocolos y requerimientos de cada cliente.",
          ],
        },
        {
          title: "Beneficios para tu empresa",
          items: [
            "Servicios planificados que cumplen exigencias de auditorías internas y externas.",
            "Protocolos alineados con normas de seguridad e higiene.",
            "Personal capacitado en Buenas Prácticas de Manufactura (BPM) y procedimientos específicos.",
            "Supervisión constante para asegurar calidad y trazabilidad.",
            "Flexibilidad horaria según tus turnos de producción.",
          ],
        },
        {
          title: "Nuestro equipo",
          items: [
            "Personal capacitado y en formación continua en limpieza industrial.",
            "Uso de EPP adecuados: cofias, guantes, protectores auditivos, arneses, etc.",
            "Uniformes con logo y ropa de trabajo diferenciada por tipo de tarea.",
            "Acompañamiento de Seguridad e Higiene y planificación anual de tareas.",
          ],
        },
        {
          title: "Seguridad y confianza",
          items: [
            "Ambientes seguros y controlados para tu operación.",
            "Respeto por planes de emergencia y protocolos de cada cliente.",
            "Minimización de riesgos y continuidad operativa.",
            "Canal de contacto permanente con supervisión para ajustes del servicio.",
          ],
        },
      ]}
      imageSrc={industryImg}
      imageAlt="Operario realizando limpieza industrial profesional"
      floatingTitle="Limpieza industrial 360°"
      floatingText="Producción, depósitos y sectores críticos bajo un mismo plan."
      ctaLabel="Solicitar una cotización industrial"
      ctaTo={{ pathname: "/", hash: "#cotizaciones" }}
      ctaSub="Armamos un plan a medida de tu planta y tus turnos."
    />
  );
}

export default LimpiezaIndustrial;