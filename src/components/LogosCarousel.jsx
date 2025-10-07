import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const Logo = styled.img`
  height: 140px;
  margin: 0 40px;
  object-fit: contain;

  @media (max-width: 1024px) { height: 130px; }
  @media (max-width: 768px) { height: 120px; }
  @media (max-width: 480px) { height: 100px; }
`;

const Title = styled.h2`
  padding: 2rem 1rem 0 1rem;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #0369a1;
  margin-bottom: 32px;
`;

const LogosCarousel = () => {
  const logos = [
    "/logos_empresas_bn/mini_arroyo.png",
    "/logos_empresas_bn/mini_banco_nacion.png",
    "/logos_empresas_bn/mini_cicilotto.png",
    "/logos_empresas_bn/mini_dok.png",
    "/logos_empresas_bn/mini_quento.png",
    "/logos_empresas_bn/mini_sar.png",
    "/logos_empresas_bn/mini_lomas.png"
  ];

  return (
    <div style={{ background: "#f5f5f5", padding: "40px 0" }}>
      <Title>Clientes que confían en nosotros</Title>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
      >
        {logos.map((logo, i) => (
          <Logo key={i} src={logo} alt={`logo-${i}`} />
        ))}
      </Marquee>
    </div>
  );
};

export default LogosCarousel;