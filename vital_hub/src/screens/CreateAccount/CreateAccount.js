import { Logo } from "../../components/Logo/Style";
import { Container } from "../../components/Container/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Input } from "../../components/Input/Style";
import { Title } from "../../components/Title/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { Icon } from "react-native-elements";
import { ButtonGoogle, ButtonTitleGoogle } from "../../components/ButtonGoogle/Style";

export const CreateAccont = () => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />

      <Title>Criar Conta</Title>
      <Subtitle>
        Insira seu endereço de e-mail e senha para realizar seu cadastro.
      </Subtitle>

      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <Input placeholder="Confirmar Senha" />

      <Button>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </Button>
      <Subtitle>ou</Subtitle>
      <ButtonGoogle>
        <Icon
          name="google"
          type="antdesign"
          color="#496bba"
          width="16px"
          height="20px"
        />
        <ButtonTitleGoogle>Cadastrar com o google</ButtonTitleGoogle>
      </ButtonGoogle>
    </Container>
  );
};
