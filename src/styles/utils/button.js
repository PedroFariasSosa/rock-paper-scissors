import React from "react";
import styled from "styled-components";
import { theme } from "..";
import { IconClose } from "../../icons";
import media from "../media";

const { colors, fontSizes } = theme;

const StyledButton = styled.button`
  background-color: transparent;
  border: ${(props) =>
    props.modalMode ? props.modalMode : `2px solid ${colors.header_outline}`};
  border-radius: 10px;
  color: ${(props) =>
    props.modalMode ? `${colors.dark_text} ` : `${colors.score_background}`};
  font-size: ${fontSizes.md};
  font-weight: 600;
  height: 45px;
  letter-spacing: 1px;
  text-align: ${(props) => (props.modalMode ? "end" : "center")};
  text-transform: uppercase;
  width: ${(props) => (props.modalMode ? "auto" : "132px")};

  ${media.smDesktop`
    grid-area: button;
  `}
`;
const Button = ({ active, setActive, modalMode, buttonName }) => {
  const handleButton = () => {
    if (!active.modal) {
      setActive({ ...active, modal: true });
    } else {
      setActive({ ...active, modal: false });
    }
  };

  return (
    <StyledButton modalMode={modalMode} onClick={handleButton}>
      {buttonName ? buttonName : <IconClose />}
    </StyledButton>
  );
};
export default Button;
