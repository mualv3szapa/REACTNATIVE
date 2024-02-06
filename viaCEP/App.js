import { StatusBar, Text } from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ContainerApp } from "./style";
import { Header } from "./src/components/Header/Index";
import { Home } from "./src/Screens/Home/Index";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // <Text>Eduardo</Text>
   <ContainerApp>
     <StatusBar backgroundColor={'transparent'} translucent/> 
     
     <Header/>
      
       <Home/>
    </ContainerApp>
  );
}

