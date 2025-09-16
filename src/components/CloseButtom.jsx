import styled from "styled-components";

import { IoCloseCircleOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Close = styled.div`
  position: absolute;
  top: 8px;
  right:8px;
  font-size: 28px;
  cursor: pointer;
  color: #009fe3;
  transition: color 0.5s ease;

  &:hover {
    color: #005fa3
  }
`

function CloseButtom ({to, onClick}) {
    return(
        <Close>
          <FaTimes to={to} onClick={onClick}>          
          </FaTimes>
        </Close>
    )
}

export default CloseButtom