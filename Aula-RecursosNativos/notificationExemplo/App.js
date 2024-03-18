import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import * as Notifications from "expo-notifications";

// solicita permissões de notificação
Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // mostrar o alerta quando a notificação for recebida
    shouldShowAlert: true,

    shouldPlaySound: true,

    shouldSetBadge: false,
  }),
});

export default function App() {
  // função para lidar com chamada de notificação
  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("você não deixou as notificações ativas");

      return;
    }

    

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao SENAI!",
        body: "Notificação recebida",
        // sound: "./assets/atumalaca.wav",
      },
      trigger: null,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCallNotifications} style={styles.button}>
        <Text style={styles.text}>Clique Aqui!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
});
