import { Button, ButtonTitle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Title } from "../../components/Title/Style";

export const PasswordReset = () => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Redefinir Senha</Title>
      <Subtitle>Insira e confirme sua nova senha</Subtitle>
      <Input placeholder= "Nova senha"/>
      <Input placeholder= "Confirmar nova senha"/>
      <Button>
        <ButtonTitle>
            Confirmar nova senha
        </ButtonTitle>
      </Button>
    </Container>
  );
};
