import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import { CreateAccont } from "./src/screens/CreateAccount/CreateAccount";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import { PasswordForgot } from "./src/screens/PasswordForgot/PasswordForgot";
import { EmailCode } from "./src/screens/EmailCode/EmailCode";
import { PasswordReset } from "./src/screens/PasswordReset/PasswordReset";
import { UserScreen } from "./src/screens/UserScreen/UserScreen";
import { UserScreenEdit } from "./src/screens/UserScreenEdit/UserScreenEdit";
import { HomeScreen_Doctor } from "./src/screens/HomeScreen - Doctor/HomeScreen_Doctor";
// import { MedicalRecord } from "./src/screens/MedicalRecord/MedicalRecord";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
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
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccont}
          options={{ title: "CreateAccount" }}
        />
        <Stack.Screen
          name="PasswordForgot"
          component={PasswordForgot}
          options={{ title: "PasswordForgot" }}
        />
        <Stack.Screen
          name="EmailCode"
          component={EmailCode}
          options={{ title: "EmailCode" }}
        />
        <Stack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{ title: "PasswordReset" }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ title: "UserScreen" }}
        />
        <Stack.Screen
          name="UserScreenEdit"
          component={UserScreenEdit}
          options={{ title: "UserScreenEdit" }}
        />
        
        <Stack.Screen
          name="HomeScreen_Doctor"
          component={HomeScreen_Doctor}
          options={{ title: "HomeScreen_Doctor" }}
        />
        {/* <Stack.Screen
          name="MedicalRecord"
          component={MedicalRecord}
          options={{ title: "MedicalRecord" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
