import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";
import {
  useFonts,
  MontserratAlternates_600SemiBold,
} from "@expo-google-fonts/montserrat-alternates";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // container - envolve toda a estrutura de navegação
    // navigator - componente para a navegação
    // screen - tela
    // name: nome da tela
    // component: componente que será chamado
    // options(title): título da tela

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{ title: "Navegação" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
