import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const msg1 = () => {
  Alert.alert("Login feito sucesso");
};
const msg2 = () => {
  Alert.alert("E quem disse que é problema meu?");
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Image source={require("./src/assets/images/Ellipse 1.png")} />
      <TextInput style={styles.input} defaultValue="Email" />
      <TextInput style={styles.input} defaultValue="Senha" />
      <TouchableOpacity
        style={styles.btnPassW}
        onPress={() => {
          msg2();
        }}
      >
        <Text style={styles.txtBtnPassW}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          msg1();
        }}
      >
        <Text style={styles.txtBtn}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-evenly",
    // gap: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    marginTop: 10,
    color: "white",
    backgroundColor: "black",
  },
  btn: {
    width: "90%",
    height: 40,
    borderColor: "white",
    color: "white",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
  },
  txtBtn: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 18,
  },
  txtBtnPassW: {
    color: "cyan",
    textDecorationLine: "underline",
  },
  btnPassW: {
    width: "90%",
  },
});
