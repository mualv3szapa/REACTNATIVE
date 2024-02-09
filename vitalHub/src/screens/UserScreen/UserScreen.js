import { Container, ContainerUser } from "../../components/Container/Style";
import {
  InputInfo,
  InputInfoBox,
  InputInfoBox2,
  InputInfoBoxSmall,
  InputInfoSmall,
  InputInfoText,
  InputInfoTitle,
} from "../../components/InputInfo/Style";
import {
  UserName,
  UserNameBox,
  UserNameEmail,
} from "../../components/UserName/Style";
import { UserPhoto } from "../../components/UserPhoto/Style";

export const UserScreen = () => {
  return (
    <ContainerUser>
      <Container>
        <UserPhoto source={require("../../assets/UserPhoto.png")} />
        <UserNameBox>
          <UserName>Richard Kosta</UserName>
          <UserNameEmail>richard.kosta@gmail.com</UserNameEmail>
        </UserNameBox>

        <InputInfoBox>
          <InputInfoTitle>Data de Nascimento</InputInfoTitle>
          <InputInfo>
            <InputInfoText>04/05/1999</InputInfoText>
          </InputInfo>
        </InputInfoBox>
        <InputInfoBox>
          <InputInfoTitle>CPF</InputInfoTitle>
          <InputInfo>
            <InputInfoText>859********</InputInfoText>
          </InputInfo>
        </InputInfoBox>
        <InputInfoBox>
          <InputInfoTitle>Endereço</InputInfoTitle>
          <InputInfo>
            <InputInfoText>04/05/1999</InputInfoText>
          </InputInfo>
        </InputInfoBox>
        <InputInfoBox>
          <InputInfoTitle>Endereço</InputInfoTitle>
          <InputInfo>
            <InputInfoText>Rua Vicenso Silva, 987</InputInfoText>
          </InputInfo>
        </InputInfoBox>

        <InputInfoBox2>
          <InputInfoBoxSmall>
            <InputInfoTitle>Cep</InputInfoTitle>
            <InputInfoSmall>
              <InputInfoText>06548-909</InputInfoText>
            </InputInfoSmall>
          </InputInfoBoxSmall>
          <InputInfoBoxSmall>
            <InputInfoTitle>Cidade</InputInfoTitle>
            <InputInfoSmall>
              <InputInfoText>Moema-sp</InputInfoText>
            </InputInfoSmall>
          </InputInfoBoxSmall>
        </InputInfoBox2>
      </Container>
    </ContainerUser>
  );
};
