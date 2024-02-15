import { Container, ContainerUser } from "../../components/Container/Style";
import {
  UserName,
  UserNameBox,
  UserNameEmail,
} from "../../components/UserName/Style";
import { UserPhoto } from "../../components/UserPhoto/Style";

export const UserScreenEdit = () => {
  return (
    <ContainerUser>
      <Container>
        <UserPhoto source={require("../../assets/UserPhoto.png")} />
        <UserNameBox>
          <UserName>Richard Kosta</UserName>
          <UserNameEmail>richard.kosta@gmail.com</UserNameEmail>
        </UserNameBox>

        
      </Container>
    </ContainerUser>
  );
};
