import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function App() {
  const [ count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>

      <TouchableOpacity style={styles.btnInc} onPress={increment}>
        <Text>incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnDec} onPress={decrement}>
        <Text>decrementar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDec: {
    backgroundColor: 'salmon',
    width: '90%',
    alignItems: 'center',
    justifyContent:'center',
    height: 50,
    borderRadius: 8,
  },
  btnInc: {
    backgroundColor: 'aqua',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
    

  }

});
