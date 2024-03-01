import { AntDesign } from "@expo/vector-icons";
import CalendarSelectData from "../../components/CalendarSelectData/CalendarSelectData";
import { Container } from "../../components/Container/Container";
import {
  ButtonContinueSelectData,
  SelectDataSelectHourBox,
  SelectDataTitle,
  SelectHour,
  SelectHourButtonTitle,
  SelectHourTitle,
} from "./Style";
import { ButtonContinue } from "../../components/HighlightList/Style";
import { ButtonTitle } from "../../components/Button/Button";
import {
  ButtonLinkMediumCancel,
  LinkMedium,
} from "../../components/LinkMedium/LinkMedium";
import { useState } from "react";
import { ModalConfirmation } from "../../components/ModalConfirmation/ModalConfirmation";

export const SelectData = () => {
  const [showModalQuery, setShowModalQuery] = useState(false);

  return (
    <Container>
      <SelectDataTitle>Selecionar Data</SelectDataTitle>

      <CalendarSelectData />

      <SelectDataSelectHourBox>
        <SelectHourTitle>Selecione um horário disponível</SelectHourTitle>
        <SelectHour>
          <SelectHourButtonTitle>Selecionar horário</SelectHourButtonTitle>
          <AntDesign name="caretdown" size={22} color={"#34898F"} />
        </SelectHour>
      </SelectDataSelectHourBox>

      <ButtonContinueSelectData onPress={() => setShowModalQuery(true)}>
        <ButtonTitle>Continuar</ButtonTitle>
      </ButtonContinueSelectData>

      <ButtonLinkMediumCancel>
        <LinkMedium>Cancelar</LinkMedium>
      </ButtonLinkMediumCancel>

      <ModalConfirmation
        visible={showModalQuery}
        setShowModalQuery={setShowModalQuery}
      />

    </Container>
  );
};
