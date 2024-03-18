import { Modal } from "react-native";
import { Title } from "../Title/Title";
import { Button, ButtonTitle } from "../Button/Button";
import { ButtonLinkMediumCancel, LinkMedium } from "../LinkMedium/LinkMedium";
import { ModalContent, ModalText, PatientModal } from "./Style";

import * as Notifications from "expo-notifications";

Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const CancelattionModal = ({ visible, setShowModalCancel, ...rest }) => {
  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("você não deixou as notificações ativas");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Consulta cancelada",
        body: "Você cancelou a próxima consulta",
      },
      trigger: null,
    });
  };
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <Button onPress={handleCallNotifications}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>

          <ButtonLinkMediumCancel onPress={() => setShowModalCancel(false)}>
            <LinkMedium>Cancelar</LinkMedium>
          </ButtonLinkMediumCancel>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
