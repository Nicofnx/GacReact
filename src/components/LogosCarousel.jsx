import React from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styled from "styled-components"

const CarouselWrapper = styled.div`
  width: 100%;
  
  background: #f5f5f5;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding: 40px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #0369a1;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  height: 120px;
  object-fit: contain;

  @media (max-width: 1024px) {
    height: 100px;
  }

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 480px) {
    height: 60px;
  }
`

function Autoplay(slider) {
  let timeout
  let mouseOver = false

  function clearNextTimeout() {
    clearTimeout(timeout)
  }

  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 2000)
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })

  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}

const LogosCarousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "precision",
      slides: { perView: 4, spacing: 10 },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 4, spacing: 10 },
        },
        "(max-width: 768px)": {
          slides: { perView: 3, spacing: 8 },
        },
        "(max-width: 480px)": {
          slides: { perView: 2, spacing: 5 },
        },
      },
      animation: { duration: 2000, easing: t => 1 + t }
    },
    [Autoplay]
  )

  const logos = [    
    "/logos_empresas_bn/mini_arroyo.png",
    "/logos_empresas_bn/mini_banco_nacion.png",
    "/logos_empresas_bn/mini_cicilotto.png",
    "/logos_empresas_bn/mini_dok.png",
    "/logos_empresas_bn/mini_quento.png",
    "/logos_empresas_bn/mini_sar.png",
    "/logos_empresas_bn/mini_lomas.png"
  ]

  return (
    <CarouselWrapper>
      <Title>Clientes que confían en nosotros</Title>
      <div ref={sliderRef} className="keen-slider">
        {logos.map((logo, i) => (
          <Slide key={i} className="keen-slider__slide">
            <Logo src={logo} alt={`logo-${i}`} />
          </Slide>
        ))}
      </div>
    </CarouselWrapper>
  )
}

export default LogosCarousel