import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// === Estilos compartidos ===
const Section = styled.section`
  width: 100%;
  background: radial-gradient(circle at top left, #e6f6ff 0, #f7fbff 45%, #ffffff 100%);
  padding: 140px 20px 80px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 50px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 20px;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #e3f4ff;
  color: #006ea6;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const EyebrowDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #009fe3;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  line-height: 1.15;
  font-weight: 800;
  color: #022b3a;
  margin: 18px 0 8px;

  span {
    color: #009fe3;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Lead = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 22px;

  b {
    color: #0b3b60;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
`;

const Badge = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(0, 159, 227, 0.25);
  background: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  font-weight: 600;
  color: #0b3b60;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.97);
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  padding: 16px 16px 14px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset-inline-start: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #009fe3, #00bfb3);
  }
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #0b3b60;
  margin-left: 6px;
`;

const CardList = styled.ul`
  margin: 0;
  padding: 0 0 0 22px;
  list-style: none;
`;

const CardItem = styled.li`
  position: relative;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 4px;

  &::before {
    content: "●";
    position: absolute;
    left: -16px;
    top: 2px;
    font-size: 0.6rem;
    color: #009fe3;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ImageGlow = styled.div`
  position: absolute;
  inset: auto;
  width: 340px;
  height: 340px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(0, 159, 227, 0.25), transparent 60%);
  filter: blur(8px);
  z-index: 0;

  @media (max-width: 900px) {
    width: 280px;
    height: 280px;
  }
`;

const ImageStyled = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.25);
`;

const FloatingTag = styled.div`
  position: absolute;
  bottom: -60px;
  right: 0px;
  left: 0px;
  background: rgba(2, 43, 58, 0.94);
  color: #f9fafb;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 190px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.5);

  strong {
    font-size: 0.9rem;
  }

  span {
    font-size: 0.75rem;
    color: #bfdbfe;
  }
`;

const CTAWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, #009fe3, #00bfb3);
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(34, 197, 235, 0.45);
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
    box-shadow: 0 16px 40px rgba(34, 197, 235, 0.55);
  }
`;

const CTASub = styled.span`
  font-size: 0.8rem;
  color: #64748b;
`;

// === Componente genérico ===
function ServiceSection({
  eyebrowText,
  title,
  highlight,
  lead,
  badges = [],
  cards = [],
  imageSrc,
  imageAlt,
  floatingTitle,
  floatingText,
  ctaLabel,
  ctaTo = { pathname: "/", hash: "#cotizaciones" },
  ctaSub,
}) {
  return (
    <Section>
      <Container>
        {/* Columna texto */}
        <div>
          {eyebrowText && (
            <Eyebrow>
              <EyebrowDot />
              {eyebrowText}
            </Eyebrow>
          )}

          <Title>
            {title} {highlight && <span>{highlight}</span>}
          </Title>

          {lead && <Lead dangerouslySetInnerHTML={{ __html: lead }} />}

          {badges.length > 0 && (
            <BadgeRow>
              {badges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </BadgeRow>
          )}

          {cards.length > 0 && (
            <CardsGrid>
              {cards.map((card) => (
                <Card key={card.title}>
                  <CardTitle>{card.title}</CardTitle>
                  <CardList>
                    {card.items.map((item, i) => (
                      <CardItem key={i}>{item}</CardItem>
                    ))}
                  </CardList>
                </Card>
              ))}
            </CardsGrid>
          )}

            {ctaLabel && (
            <CTAWrapper>
                <CTAButton to={ctaTo}>
                {ctaLabel}
                <span>→</span>
                </CTAButton>
                
            </CTAWrapper>
            )}
        </div>

        {/* Columna imagen */}
        <ImageWrapper>
          <ImageGlow />
          <ImageStyled src={imageSrc} alt={imageAlt} />
          {(floatingTitle || floatingText) && (
            <FloatingTag>
              {floatingTitle && <strong>{floatingTitle}</strong>}
              {floatingText && <span>{floatingText}</span>}
            </FloatingTag>
          )}
        </ImageWrapper>
      </Container>
    </Section>
  );
}

export default ServiceSection;