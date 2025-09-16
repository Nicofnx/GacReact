import styled from "styled-components";

import { IoCloseCircleOutline } from "react-icons/io5";

const Close = styled.div`
  position: absolute;
  top: 0;
  right:0;
  font-size: 36px;
  cursor: pointer;
  color: #005fa3;
`

function CloseButtom ({to, onClick}) {
    return(
        <Close>
          <IoCloseCircleOutline to={to} onClick={onClick}>          
          </IoCloseCircleOutline>
        </Close>
    )
}

export default CloseButtom