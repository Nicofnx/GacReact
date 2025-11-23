import React from "react";
import ServiceSection from "../components/ServiceSecction";
import officeImg from "../assets/office.webp";

function LimpiezaOficinas() {
  return (
    <ServiceSection
      
      title="Oficinas limpias,"
      highlight="equipos más enfocados"
      lead={`Un entorno de trabajo limpio y ordenado mejora la imagen de tu empresa y el bienestar
      de tu equipo. En <b>Grupo Aldo Cleaning SRL</b> ofrecemos un servicio integral y
      confiable, diseñado para mantener tus oficinas siempre presentables y seguras.`}
      badges={[
        "Oficinas corporativas",
        "Estudios profesionales",
        "Espacios administrativos",
      ]}
      cards={[
        {
          title: "¿Qué hacemos?",
          items: [
            "Limpieza diaria y mantenimiento de escritorios, salas de reuniones y áreas comunes.",
            "Higienización de sanitarios, cocinas y espacios de descanso.",
            "Desinfección de superficies de alto contacto: teclados, teléfonos, picaportes, etc.",
            "Limpieza de vidrios interiores, ventanales y mobiliario.",
          ],
        },
        {
          title: "Beneficios para tu empresa",
          items: [
            "Oficinas prolijas que refuerzan tu imagen corporativa.",
            "Ambientes más saludables y seguros para tu equipo.",
            "Flexibilidad horaria para no interrumpir la jornada laboral.",
            "Resultados consistentes que se ven todos los días.",
          ],
        },
        {
          title: "Nuestro equipo",
          items: [
            "Personal capacitado y discreto, con uniforme e identificación visible.",
            "Uso de EPP y productos certificados para la seguridad de tu personal.",
            "Procedimientos de higiene adaptados a cada tipo de oficina.",
            "Supervisores asignados para el seguimiento del servicio.",
          ],
        },
        {
          title: "Seguridad y confianza",
          items: [
            "Protocolos alineados con normativas de seguridad e higiene.",
            "Respeto por la confidencialidad y cuidado de documentación y espacios de trabajo.",
            "Adaptación a planes de emergencia y políticas internas de cada cliente.",
            "Comunicación fluida para ajustar el servicio cuando lo necesites.",
          ],
        },
      ]}
      imageSrc={officeImg}
      imageAlt="Servicio de limpieza profesional de oficinas"
      floatingTitle="Ambientes de trabajo cuidados"
      floatingText="Limpieza pensada para equipos más cómodos y enfocados."
      ctaLabel="Cotizar limpieza de oficinas"
      ctaTo={{ pathname: "/", hash: "#cotizaciones" }}
      ctaSub="Te ayudamos a mantener un entorno de trabajo limpio y profesional."
    />
  );
}

export default LimpiezaOficinas;