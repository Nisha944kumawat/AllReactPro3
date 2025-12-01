import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  height: 40px;
  justify-content: center;
  border-radius: 5px;
  background-color: black;
  color: white;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }

  /* -------------------------------
        📱 Tablet (max-width: 1024px)
  --------------------------------*/
  @media (max-width: 1024px) {
    min-width: 200px;
    font-size: 15px;
    height: 38px;
  }

  /* -------------------------------
        📱 Mobile (max-width: 768px)
  --------------------------------*/
  @media (max-width: 768px) {
    min-width: 180px;
    font-size: 14px;
    height: 36px;
  }

  /* -------------------------------
        📱 Small Mobile (max-width: 480px)
  --------------------------------*/
  @media (max-width: 480px) {
    min-width: 160px;
    font-size: 13px;
    height: 34px;
  }

  /* -------------------------------
        📱 Extra Small (max-width: 360px)
  --------------------------------*/
  @media (max-width: 360px) {
    min-width: 140px;
    font-size: 12px;
    height: 32px;
  }
`;




export const OutlineButton = styled(Button)`
  background: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
