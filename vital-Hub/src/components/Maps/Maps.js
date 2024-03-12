import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export const Maps = () => {
  const mapReference = useRef(null);
  const [position, setPosition] = useState(null);

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();

      await setPosition(currentPosition);
      console.log(position);
    }
  }

  useEffect(() => {
    CapturarLocalizacao();
  }, [1000]);

  return (
    <>
      {position != null ? (
        <MapView
          ref={mapReference}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            // latitude: -23.6003,
            // longitude: -46.5624,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }}
          />
        </MapView>
      ) : (
        <>
          <Text>Local não encontrado</Text>
          <ActivityIndicator />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     height: 324,
//   },
  map: {
    width: "100%",
    height: 324,
  },
});
