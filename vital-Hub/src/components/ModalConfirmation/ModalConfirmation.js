import { Modal } from "react-native";
import { ModalQueryInfo } from "./Style";
import {
  ModalTitle,
  ModalTransparent,
} from "../ModalScheduleAppointment/Style";

export const ModalConfirmation = ({ 
    visible, 
    setShowModalQuery, 
    ...rest 
}) => {
  <Modal {...rest} visible={visible} animationType="fade" transparent={true}>
    <ModalTransparent>
      <ModalQueryInfo>
        <ModalTitle>Agendar consulta</ModalTitle>
      </ModalQueryInfo>
    </ModalTransparent>
  </Modal>
};
