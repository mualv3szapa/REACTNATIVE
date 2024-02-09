import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#34898f",
})`
  width: 90%;
  height: 53px;
  margin-top: 15px;
  padding: 16px;
  border: 2px solid #49b3ba;
  border-radius: 5px;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #34898f;
`;


export const InputCodeBox = styled.View`
  width: 90%;
  height: 62px; 
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;

  margin-top: 50px;
  margin-bottom: 20px;
`;

export const InputCode = styled.TextInput.attrs({
  placeholderTextColor: "#33303E"
})`
  font-family: "Quicksand_600SemiBold";
  font-size: 40px;
  width: 62px;
  height: 62px;
  border: 2px solid #77cacf;
  border-radius: 5px;
  padding-left: 20px;


`;
