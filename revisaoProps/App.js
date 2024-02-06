import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Person from "./src/components/Person/Person";

// import das fonts
// import { useFonts, Poppins_300Light, Poppins_500Medium_Italic } from "@expo-google-fonts/poppins";
import { useFonts, PoorStory_400Regular } from "@expo-google-fonts/poor-story";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    // Poppins_300Light,
    // Poppins_500Medium_Italic,
    PoorStory_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    { id: "1", name: "Murilo", age: 17 },
    { id: "2", name: "Thiago", age: 18 },
    { id: "3", name: "Gustavo", age: 16 }
  ];

  return (
    <SafeAreaView>
      <StatusBar />
      {/* FlatList */}
      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Person name={item.name} age={item.age} />}
      />

      {/* <Person name="Murilo" age={17} />
      <Person name="Thiago" age={18} />
      <Person name="Gustavo Enzo" age={17} /> */}
    </SafeAreaView>
  );
}
