import styled, { css } from "styled-components";

export const ButtonTabsStyle = styled.TouchableHighlight`
  padding: 12px 14px;
  border-radius: 5px;

  /* validação botão */

  ${(props) =>
    props.clickButton
      ? css`
          background-color: #496bba;
        `
      : css`
          background-color: #fbfbfb;
          border: 2px solid #607ec5;
        `}
`;

export const ButtonTextStyle = styled.Text`
  font-size: 12px;
  font-size: "MontSerratAlternates_600SemiBold";

  ${(props) =>
    props.clickButton
      ? css`
          background-color: #fbfbfb;
        `
      : css`
          background-color: #496bba;
        `}
`;

export const ButtonFilterBox = styled.View`
  width: 90%;
  height: 35px;
  flex-direction: row;
  justify-content: space-between;
`;
