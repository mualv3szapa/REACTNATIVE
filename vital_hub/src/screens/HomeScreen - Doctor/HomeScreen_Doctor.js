import { Icon } from "react-native-elements";
import { Container } from "../../components/Container/Style";
import {
  BlueGradientHeader,
  DoctorImageHeader,
  DoctorInfoBoxHeader,
  DoctorInfoBoxTextHeader,
  DoctorNameHeader,
  Welcome,
} from "../../components/Header/Style";
import CalendarHome from "../../components/CalendarHome/CalendarHome";
import { useState } from "react";
import { ButtonFilterBox } from "./Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";

export const HomeScreen_Doctor = () => {
  const [statusLista, setStatusLista] = useState("pendente");

  return (
    <Container>
      <BlueGradientHeader>
        <DoctorInfoBoxHeader>
          <DoctorImageHeader
            source={require("../../assets/DoctorImageSmall.png")}
          />
          <DoctorInfoBoxTextHeader>
            <Welcome>Bem vindo</Welcome>
            <DoctorNameHeader>Dr. Claudio</DoctorNameHeader>
          </DoctorInfoBoxTextHeader>
        </DoctorInfoBoxHeader>

        <Icon
          name="notifications"
          type="ionicons"
          color="#ffffff"
          width="25px"
          height="25px"
        />
      </BlueGradientHeader>

      <CalendarHome />

      <ButtonFilterBox>
        <BtnListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />
        <BtnListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />
        <BtnListAppointment
          textButton={"Canceladas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />
      </ButtonFilterBox>
    </Container>
  );
};
