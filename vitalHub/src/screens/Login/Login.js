import { Icon } from "react-native-elements";
import { Button, ButtonTitle } from "../../components/Button/Style";
import {
  ButtonGoogle,
  ButtonTitleGoogle,
} from "../../components/ButtonGoogle/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkMedium } from "../../components/LinkMedium/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { ContentAccount, TextAccount, TextAccount2 } from "../../components/ContentAccount/Style";

export const Login = () => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Entrar ou criar conta</Title>

      <Input placeholder="Email" />

      <Input placeholder="senha" />

      <LinkMedium>Esqueceu sua senha?</LinkMedium>

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
        <TextAccount2>Crie uma agora!</TextAccount2>
      </ContentAccount>
    </Container>
  );
};
