import FondoChica from "../assets/Chica de Limpieza.png"
import { Container, BoxText, Text1, Text2 } from "./VisualPresentation.styled"

function VisualPresentation(){
    return(
        <Container src={FondoChica} alt="">
            <BoxText>
                <Text1>EMPRESA DE LIMPIEZA</Text1>
                <Text2>PROFESIONAL</Text2>
            </BoxText>
        </Container>
    )
}

export default VisualPresentation