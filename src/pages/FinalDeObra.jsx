import React from "react";
import ServiceSection from "../components/ServiceSecction";
import finalObraImg from "../assets/fin_de_obra.jpg";

function FinalDeObra() {
  return (
    <ServiceSection
      
      title="De la obra al espacio"
      highlight="listo para usar"
      lead={`¿Terminaste una obra, reforma o ampliación? En <b>Grupo Aldo Cleaning SRL</b> nos
      especializamos en dejar cada superficie libre de polvo y residuos, para que solo tengas
      que entrar y disfrutar el resultado final.`}
      badges={[
        "Viviendas y departamentos",
        "Locales y oficinas",
        "Obras nuevas y reformas",
      ]}
      cards={[
        {
          title: "¿Qué incluye la limpieza?",
          items: [
            "Remoción profunda de polvo, restos de cemento y material de obra.",
            "Limpieza detallada de pisos, zócalos y rincones difíciles.",
            "Limpieza de vidrios, aberturas, marcos y persianas.",
            "Retiro de manchas y residuos visibles en superficies.",
          ],
        },
        {
          title: "Ambientes listos para habitar",
          items: [
            "Desinfección y desodorización de ambientes.",
            "Cocinas y baños listos para uso inmediato.",
            "Cuidado de superficies delicadas (madera, porcelanato, acero inoxidable, etc.).",
            "Presentación prolija para entrega, mudanza o publicación de venta/alquiler.",
          ],
        },
        {
          title: "Beneficios de un servicio profesional",
          items: [
            "Evitás el desgaste físico y el tiempo de limpiar después de la obra.",
            "Equipos capacitados y con experiencia en final de obra.",
            "Supervisión constante para garantizar calidad y eficiencia.",
            "Horarios y presupuestos adaptados a tus necesidades.",
          ],
        },
        {
          title: "¿Cómo trabajamos?",
          items: [
            "Relevamiento previo si el proyecto lo requiere.",
            "Plan de trabajo según metros, cantidad de ambientes y tipo de obra.",
            "Uso de maquinaria y productos específicos para limpieza de final de obra.",
            "Entrega del espacio limpio, ordenado y listo para usar.",
          ],
        },
      ]}
      imageSrc={finalObraImg}
      imageAlt="Servicio de limpieza de final de obra"
      floatingTitle="Espacio listo para estrenar"
      floatingText="De restos de obra a un ambiente impecable."
      ctaLabel="Cotizar limpieza de final de obra"
      ctaTo={{ pathname: "/", hash: "#cotizaciones" }}
      ctaSub="Te preparamos una propuesta a medida de tu obra y tus tiempos."
    />
  );
}

export default FinalDeObra;