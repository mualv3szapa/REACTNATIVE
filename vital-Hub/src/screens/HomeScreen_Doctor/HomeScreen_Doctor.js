import { Icon } from "react-native-elements";
import { Container } from "../../components/Container/Container";
import {
  BlueGradientHeader,
  DoctorImageHeader,
  DoctorInfoBoxHeader,
  DoctorInfoBoxTextHeader,
  DoctorNameHeader,
  Welcome,
} from "../../components/Header/Header";
import CalendarHome from "../../components/CalendarHome/CalendarHome";
import { ButtonFilterBox } from "../../components/BtnListAppointment/Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";

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
            <Welcome>Bem Vindo!</Welcome>
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
