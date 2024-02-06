import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Games from "./src/components/Jogos/jogos";
import { useFonts, Poppins_900Black_Italic } from "@expo-google-fonts/poppins";

const gamesList = [
  {
    id: "1",
    title: "Overwacth2",
    year: "2022",
    company: "Blizzard",
  },
  {
    id: "2",
    title: "Pokemon Emarald",
    year: "2004",
    company: "GameFreak",
  },
  {
    id: "3",
    title: "Call of Duty Black Ops 2 ",
    year: "2012",
    company: "Activision",
  },
];

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={gamesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Games title={item.title} year={item.year} company={item.company} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
