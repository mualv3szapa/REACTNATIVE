import {
  createBottomTabNavigator,
  treateBottonTabNavigator,
} from "@react-navigation/bottom-tabs";
// import { HomeScreen_Patient } from "../HomeScreen_Patient/HomeScreen_Patient";
import { UserScreen } from "../UserScreen/UserScreen";
import { ContentIcon, TextIcon } from "./Style";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { HomeScreen_Doctor } from "../HomeScreen_Doctor/HomeScreen_Doctor";
import { UserScreen_Doctor } from "../UserScreen_Doctor/UserScreen";
import { HomeScreen_Patient } from "../HomeScreen_Patient/HomeScreen_Patient";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen_Doctor"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 80,
          paddingTop: 10,
        },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "HomeScreen_Doctor") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ecf2ff" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={18} color={"#4e4b59"} />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ecf2ff" : "transparent"
                }
              >
                <FontAwesome5 name="user-circle" size={18} color={"#4e4b59"} />
                {focused && <TextIcon>usuario</TextIcon>}
              </ContentIcon>
            );
          }
        },
      })}
    >
      <BottomTab.Screen
        name="HomeScreen_Pacient"
        component={HomeScreen_Patient}
      />
      <BottomTab.Screen name="PerfilPaciente" component={UserScreen} />
      {/* <BottomTab.Screen
        name="HomeScreen_Doctor"
        component={HomeScreen_Doctor}
      />
      <BottomTab.Screen name="PerfilDoutor" component={UserScreen_Doctor} /> */}
    </BottomTab.Navigator>
  );
};