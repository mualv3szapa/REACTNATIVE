import { Button, ButtonTitle } from "../../components/Button/Style";
import { Container, ContainerUser } from "../../components/Container/Style";
import {
  InputUserEdit,
  InputUserEditSmall,
} from "../../components/Input/Style";
import {
  InputInfoBox,
  InputInfoBox2,
  InputInfoBoxSmall,
  InputInfoTitle,
} from "../../components/InputInfo/Style";
import {
  UserName,
  UserNameBox,
  UserNameEmail,
} from "../../components/UserName/Style";
import { UserPhoto } from "../../components/UserPhoto/Style";

export const UserScreenEdit = ({ navigation }) => {
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
          <InputUserEdit placeholder="04/05/1999" />
        </InputInfoBox>
        <InputInfoBox>
          <InputInfoTitle>CPF</InputInfoTitle>
          <InputUserEdit placeholder="859********" />
        </InputInfoBox>
        <InputInfoBox>
          <InputInfoTitle>Endereço</InputInfoTitle>
          <InputUserEdit placeholder="Rua Vicenso Silva, 987" />
        </InputInfoBox>

        <InputInfoBox2>
          <InputInfoBoxSmall>
            <InputInfoTitle>CEP</InputInfoTitle>
            <InputUserEditSmall placeholder="06548-909" />
          </InputInfoBoxSmall>
          <InputInfoBoxSmall>
            <InputInfoTitle>Cidade</InputInfoTitle>
            <InputUserEditSmall placeholder="Moema-SP" />
          </InputInfoBoxSmall>
        </InputInfoBox2>

        <Button onPress={() => navigation.navigate("UserScreen")}>
          <ButtonTitle>Salvar</ButtonTitle>
        </Button>
      </Container>
    </ContainerUser>
  );
};
