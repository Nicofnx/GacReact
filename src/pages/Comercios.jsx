import ServiceSection from "../components/ServiceSecction";
import shoppingImg from "../assets/shopping.jpg";

function LimpiezaComercial() {

    const handleCotizacionesClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Ya estás en la home → solo scrollear
      const section = document.getElementById("cotizaciones");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Si estás en otra página → guardar destino y navegar
      localStorage.setItem("scrollToSection", "cotizaciones");
      navigate("/");
    }
  };

  return (
    <ServiceSection
     
      title="Espacios comerciales"
      highlight="impecables todos los días"
      lead={`La primera impresión de tus clientes empieza por un local limpio, seguro y agradable.
      En <b>Grupo Aldo Cleaning SRL</b> brindamos un servicio de limpieza integral para locales,
      centros comerciales y negocios minoristas, adaptado a tus horarios y a las necesidades de tu actividad.`}
      badges={[
        "Locales a la calle",
        "Shoppings y galerías",
        "Negocios minoristas",
      ]}
      cards={[
        {
          title: "¿Qué hacemos?",
          items: [
            "Limpieza diaria y mantenimiento de salones de venta, pasillos y depósitos.",
            "Higienización de vidrieras, mostradores, probadores y áreas comunes.",
            "Cuidado de baños y espacios de alto tránsito.",
            "Desinfección de superficies de contacto frecuente.",
          ],
        },
        {
          title: "Beneficios para tu negocio",
          items: [
            "Ambientes prolijos y presentables que transmiten confianza a tus clientes.",
            "Flexibilidad horaria para no interrumpir la atención ni las ventas.",
            "Personal capacitado y con supervisión constante.",
            "Resultados visibles y consistentes todos los días.",
          ],
        },
        {
          title: "Nuestro equipo",
          items: [
            "Personal uniformado y fácilmente identificable.",
            "Uso de EPP adecuados según el tipo de tarea.",
            "Supervisión que asegura la calidad del servicio.",
            "Comunicación directa para coordinar refuerzos en fechas clave (festivos, eventos, liquidaciones, etc.).",
          ],
        },
        {
          title: "Servicio adaptable",
          items: [
            "Planes diarios, semanales o por evento puntual.",
            "Ajuste de dotación según temporada alta, promociones u horarios extendidos.",
            "Integración con otros servicios (limpieza de vidrios, final de obra, etc.).",
            "Propuestas pensadas para cadenas y locales individuales por igual.",
          ],
        },
      ]}
      imageSrc={shoppingImg}
      imageAlt="Servicio de limpieza comercial profesional"
      floatingTitle="Experiencia en comercios"
      floatingText="Limpieza pensada para mejorar la experiencia de tus clientes."
      ctaLabel="Cotizar limpieza comercial"
      ctaTo={{ pathname: "/", hash: "#cotizaciones" }}
      ctaSub="Diseñamos un plan a medida de tu local o centro comercial."
    />
  );
}

export default LimpiezaComercial;