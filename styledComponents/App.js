import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Container } from "./src/components/Container/Container";
import { Title } from "./src/components/Title/Title";
import { Btn } from "./src/components/Btn/Btn";
import { TitleBtn } from "./src/components/TitleBtn/TitleBtn";
import { Background } from "./src/components/Background/Background";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`);
  }, [count]);

  return (
    <Container>
      {/* Title */}

      <Background source= {(require("./src/assets/images/download__1_-removebg-preview.png"))}>

        <Title>{count}</Title>
      </Background>

      {/* btnIncrement */}
      <Btn onPress={increment}>
        {/* titleBtnIncrement */}
        <TitleBtn>incrementar</TitleBtn>
      </Btn>
      {/* btnDecrement */}
      <Btn onPress={decrement}>
        {/* titleBtnDecrement */}
        <TitleBtn>decrementar</TitleBtn>
      </Btn>
      <StatusBar style="auto" />
    </Container>
  );
}
