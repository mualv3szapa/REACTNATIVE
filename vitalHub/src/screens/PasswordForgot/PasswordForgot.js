import { Button, ButtonTitle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { Subtitle2 } from "../../components/Subtitle/Style";
import { Title } from "../../components/Title/Style";

export const PasswordForgot = ({ navigation }) => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Recuperar Senha</Title>
      <Subtitle2>
        Digite abaixo seu email cadastrado que enviaremos um link para
        recuperação de senha
      </Subtitle2>
      <Input placeholder="Email" />
      <Button onPress={() => navigation.navigate("EmailCode")}>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>
    </Container>
  );
};
