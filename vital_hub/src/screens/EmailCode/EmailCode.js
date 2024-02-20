import { Button, ButtonTitle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { InputCode, InputCodeBox } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { ResendLink } from "../../components/ResendLink/Style";
import {
  Subtitle3,
  SubtitleAlternateColor,
  SubtitleBox,
} from "../../components/Subtitle/Style";
import { Title } from "../../components/Title/Style";

export const EmailCode = ({navigation}) => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Verifique seu e-mail</Title>
      <SubtitleBox>
        <Subtitle3>Digite o código de 4 dígitos enviado para</Subtitle3>
        <SubtitleAlternateColor>username@gmail.com</SubtitleAlternateColor>
      </SubtitleBox>
      <InputCodeBox>
        <InputCode placeholder = "0"/>
        <InputCode placeholder = "0"/>
        <InputCode placeholder = "0"/>
        <InputCode placeholder = "0"/>
      </InputCodeBox>

      <Button onPress={()=> navigation.navigate("PasswordReset")}>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>

      <ResendLink>Reenviar Código</ResendLink>
    </Container>
  );
};
