import { Poppins_900Black_Italic } from "@expo-google-fonts/poppins";
import { StyleSheet, Text, View } from "react-native";

const Games = ({ title, year, company }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Titulo: {title}</Text>
      <Text style={styles.text}>Ano de lançamento: {year}</Text>
      <Text style={styles.text}>Empresa: {company}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    fontFamily: "Poppins_900Black_Italic",
    color: "white",
  },
});

export default Games;
