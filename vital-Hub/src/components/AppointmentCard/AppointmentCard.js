import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardsList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./Style";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
}) => {
  return (
    // container principal
    <ContainerCardsList>
      <ProfileImage source={require("../../assets/ModalUserPhoto.png")} />

      <ContentCard>
        <DataProfileCard>
          <ProfileName>Niccole Sarga</ProfileName>

          <ProfileData>
            <TextAge>19 anos</TextAge>
            <TextBold>Rotina</TextBold>
          </ProfileData>
        </DataProfileCard>

        <ViewRow>
          <ClockCard situacao={situacao}>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />
            <TextBold situacao={situacao}>14:00</TextBold>
          </ClockCard>

          {/* valida e mostra o tipo de botão conforme a situação da consulta */}
          {situacao == "cancelado" ? (
            <></>
          ) : situacao == "pendente" ? (
            <ButtonCard onPress={onPressCancel}>
              <ButtonText situacao={situacao}>Cancelar</ButtonText>
            </ButtonCard>
          ) : (
            <ButtonCard onPress={onPressAppointment}>
              <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
            </ButtonCard>
          )}
        </ViewRow>
      </ContentCard>
    </ContainerCardsList>
  );
};
