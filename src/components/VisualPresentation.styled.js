import styled from 'styled-components';
import FondoChica from "../assets/Chica de Limpieza.png"

export const Container = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${FondoChica});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    background-attachment:fixed;
    
    
`
export const BoxText = styled.h2`    
    width: 1280px;
    margin:auto;
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start

`

export const Text1 = styled.h2`
    color: #fff;
    margin-top: 100px;
    padding-left: 200px;
    font-size: 48px;
    font-weight: 800;
`

export const Text2 = styled.h2`
    color: #fff;
    padding-left: 200px;
    font-size: 48px;
    font-weight: 800;
`