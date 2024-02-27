import styled, { css } from "styled-components";

export const HighLightListContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 90%;
`;

export const HighLightListBox = styled.TouchableHighlight`
  width: 320px;
  height: 84px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.clickButton
      ? css`
          border: 2px solid #496bba;
        `
      : css`
          border: transparent;
        `}
`;
