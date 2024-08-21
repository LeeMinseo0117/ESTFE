import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  padding: 10px;
  background-color: royalblue;
`;
const ButtonStyle2 = styled(Button)`
  color: #000;
  border: 0;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
`;
const ButtonStyle3 = styled(Button)`
  background-color: lightgreen;
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
`;
export { Button, ButtonStyle2, ButtonStyle3 };
