import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";

export const Login = () => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Entrar ou criar conta</Title>

      <Input 
        placeholder = "Email"
      />

      <Input 
        placeholder="senha"
      />

      {/*<LinkMedium></LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com o google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? Crie uma agora</TextAccount>
            </ContentAccount> */}
    </Container>
  );
};
