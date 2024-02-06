import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* imagem */}

      <Image
        style={styles.image}
        source={require("./src/assets/images/252.png")}
      />

      <Text style={styles.text}> hello, world! </Text>
      <TextInput style={styles.input} defaultValue="exemplo de input" />

      {/* <Button 
        title='aperte aqui'
        style={styles.button}
      /> */}

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtBtn}>exemplo botão</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  text: {
    color: "#fff",
    fontSize: 75,
    textAlign: "center",
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  // button: {
  //   width: 50,
  //   height: 50,
  //   color: "pink"
  // },
  btn: {
    width: "90%",
    height: 40,
    borderColor: "salmon",
    borderWidth: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'salmon'
  },
  txtBtn:{
    color:'green',
    textTransform: 'capitalize',
    fontWeight: "500",
    fontSize: 18,
  },
});
