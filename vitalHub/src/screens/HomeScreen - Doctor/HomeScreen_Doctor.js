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
import { StyledCalendarStrip } from "../../components/CalendarHome/Style";

export const HomeScreen_Doctor = () => {
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

      <StyledCalendarStrip />
    </Container>
  );
};
