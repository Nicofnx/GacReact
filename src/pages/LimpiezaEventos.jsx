import ServiceSection from "../components/ServiceSecction";
import eventosImg from "../assets/event.webp"

function LimpiezaEventos() {
  return (
    <ServiceSection
      
      title="Terminó el evento,"
      highlight="nosotros nos ocupamos del resto"
      lead={`Al terminar un evento, lo importante es disfrutar del recuerdo, no preocuparse por el desorden.
      En <b>Grupo Aldo Cleaning SRL</b> nos ocupamos de dejar cada espacio en condiciones, de manera rápida,
      eficiente y sin complicaciones para vos.`}
      badges={[
        "Eventos sociales",
        "Eventos corporativos",
        "Eventos culturales y ferias",
      ]}
      cards={[
        {
          title: "¿Qué hacemos?",
          items: [
            "Recolección y gestión de residuos.",
            "Limpieza profunda de salones, baños y áreas comunes.",
            "Higienización de pisos, mobiliario y superficies de alto contacto.",
            "Desinfección y desodorización para devolver frescura a los ambientes.",
          ],
        },
        {
          title: "Beneficios para vos",
          items: [
            "Evitás el desgaste físico y el tiempo que implica limpiar después de un evento.",
            "Rapidez y eficiencia para que el lugar vuelva a estar disponible cuanto antes.",
            "Atención personalizada según el tipo de evento (social, corporativo, cultural).",
            "Resultados visibles: espacios ordenados, limpios y listos para usar.",
          ],
        },
        {
          title: "Nuestro equipo",
          items: [
            "Personal capacitado en limpieza de grandes superficies y alta rotación de público.",
            "Uniformes e identificación clara para cada operario.",
            "Uso de EPP y productos certificados para garantizar seguridad.",
            "Supervisores para asegurar calidad y velocidad en la entrega.",
          ],
        },
        {
          title: "Seguridad y confianza",
          items: [
            "Protocolos de higiene que cumplen con normativas locales.",
            "Flexibilidad horaria para trabajar apenas finaliza el evento o en horarios pactados.",
            "Compromiso con la discreción y el cuidado de las instalaciones.",
            "Coordinación con organizadores y encargados del lugar para una salida ordenada.",
          ],
        },
      ]}
      imageSrc={eventosImg}
      imageAlt="Servicio de limpieza después de eventos"
      floatingTitle="Eventos sin preocupaciones"
      floatingText="Nos encargamos del después para que vos solo pienses en cómo salió todo."
      ctaLabel="Cotizar limpieza para eventos"
      ctaTo={{ pathname: "/", hash: "#cotizaciones" }}
      ctaSub="Te armamos una propuesta según el tipo y tamaño de tu evento."
    />
  );
}

export default LimpiezaEventos;