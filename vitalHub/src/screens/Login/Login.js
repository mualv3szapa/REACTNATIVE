import { Icon } from "react-native-elements";
import { Button, ButtonTitle } from "../../components/Button/Style";
import {
  ButtonGoogle,
  ButtonTitleGoogle,
} from "../../components/ButtonGoogle/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import {
  ButtonLinkMedium,
  LinkMedium,
} from "../../components/LinkMedium/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import {
  ContentAccount,
  TextAccount,
  TextAccount2,
} from "../../components/ContentAccount/Style";
import { TouchableOpacity } from "react-native";

export const Login = ({ navigation }) => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Entrar ou criar conta</Title>

      <Input placeholder="Email" />

      <Input placeholder="senha" />

      <ButtonLinkMedium onPress={() => navigation.navigate("PasswordForgot")}>
        <LinkMedium>Esqueceu sua senha?</LinkMedium>
      </ButtonLinkMedium>
      <Button>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>

      <ButtonGoogle>
        <Icon
          name="google"
          type="antdesign"
          color="#496bba"
          width="16px"
          height="20px"
        />
        <ButtonTitleGoogle>Entrar com o google</ButtonTitleGoogle>
      </ButtonGoogle>

      <ContentAccount>
        <TextAccount>Não tem conta? </TextAccount>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <TextAccount2>Crie uma agora!</TextAccount2>
        </TouchableOpacity>
      </ContentAccount>
    </Container>
  );
};
