import styled from "styled-components";

export const HeaderContainer = styled.View`
  background-color: #fecc2b;
  height: 20%;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  /* sombra */
  elevation: 30px;
  shadow-color: 'black';
  shadow-radius: 10px;
  shadow-opacity: 0.26;
  shadow-offset: 20px 20px;
  


  
`;

export const HeaderContent = styled.SafeAreaView`
    justify-content: center;
    align-items: center;

`;

export const TextHeader = styled.Text`
    font-size: 24px;
    color: #333E33;
    font-family: Roboto_500Medium;
`;
