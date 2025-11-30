import styled from "styled-components";

export const Button=styled.button`
min-width: 220px;
height:40px;
justify-content:center;
border-radius: 5px;
background-color:black;
color:white;
border:none;
font-size:16px;
border:1px solid transparent;
transition:0.4s background ease-in;
cursor:pointer;

&:hover{
  background-color:white;
  border:1px solid black;
  color:black;
  transition:0.3s background ease-in;
}
`;

export const OutlineButton=styled(Button)`
background: white;
border:1px solid black;
color:black;

&:hover{
  background-color:black;
  border:1px solid transparent;
  color:white;
}

`;