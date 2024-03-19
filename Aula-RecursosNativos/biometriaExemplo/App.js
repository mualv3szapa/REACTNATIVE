import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import moment from "moment";

export default function App() {
  const [dateHistory, setDateHistory] = useState({});
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  async function CheckExistAuthentications() {
    const compatible = await LocalAuthentication.hasHardwareAsync();

    setIsBiometricSupported(compatible);
  }

  async function SetHistory() {
    const objAuth = {
      dataAuthentication: moment().format("DD/MM/YYYY HH:mm:ss"),
    };

    await AsyncStorage.setItem("authenticate", JSON.stringify(objAuth));

    setDateHistory(objAuth);
  }

  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem("authenticate");

    if (objAuth) {
      setDateHistory(JSON.parse(objAuth));
    }
  }

  async function handleAuthentication() {
    const biometricExist = await LocalAuthentication.isEnrolledAsync();

    if (!biometricExist) {
      return Alert.alert(
        "Falha ao logar",
        "Não foi encontrado nenhuma biometria cadastrada"
      );
    }

    const auth = await LocalAuthentication.authenticateAsync();

    setAuthenticated(auth.success);

    if (auth.success) {
      SetHistory();
    }
  }

  useEffect(() => {
    CheckExistAuthentications();

    GetHistory(); //Buscando a ultima altenticação
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isBiometricSupported
          ? "Seu dispositivo é compativel com a biometria"
          : "O seu dispositivo não suporta a biometria / face id"}
      </Text>

      <TouchableOpacity
        style={styles.btnAuth}
        onPress={() => handleAuthentication()}
      >
        <Text style={styles.txtAuth}>AutenticarAcesso</Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.textReturn,
          {
            color: authenticated ? "green" : "red",
          },
        ]}
      >
        {authenticated ? "Autenticado" : "Não autenticado"}
      </Text>

      {dateHistory.dataAuthentication ? (
        <Text style={styles.textHistory}>
          {" "}
          ultimo acesso em {dateHistory.dataAuthentication}
        </Text>
      ) : null}
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
  title: {
    fontSize: 20,
    width: "70%",
    textAlign: "center",
    lineHeight: 30,
  },
  btnAuth: {
    padding: 16,
    borderRadius: 10,
    margin: 20,
    backgroundColor: "#ff8800",
  },
  txtAuth: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  textReturn: {
    fontSize: 22,
    marginTop: 50,
  },
  textHistory: {
    fontSize: 16,
    color: "#858383",
    position: "absolute",
    bottom: 120,
  },
});
