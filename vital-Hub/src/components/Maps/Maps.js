import {
  LocationAccuracy,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { mapskey } from "../../Utils/mapsKey/mapsKey";

export const Maps = () => {
  const mapReference = useRef(null);
  const [position, setPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.63136468366679,
    longitude: -46.56781193163806,
  });

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

  async function RecarregarVizualizacaoMapa() {
    if (mapReference.current && initialRegion) {
      await mapReference.current.fitToCoordinates(
        [
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          {
            latitude: finalPosition.latitude,
            longitude: finalPosition.longitude,
          },
        ],
        {
          edgePadding: {
            top: 60,
            right: 50,
            bottom: 60,
            left: 50,
          },
          animated: true,
        }
      );
    }
  }

  useEffect(() => {
    RecarregarVizualizacaoMapa();
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      async (response) => {
        await setPosition(response);
        mapReference.current?.animateCamera({
          pitch: 60,
          center: response.coords,
        });
      }
    );
  }, [position]);

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
          <Marker
            coordinate={{
              latitude: -23.63136468366679,
              longitude: -46.56781193163806,
            }}
            pinColor="blue"
          />
          <MapViewDirections
            origin={position.coords}
            destination={{
              latitude: -23.63136468366679,
              longitude: -46.56781193163806,
            }}
            apikey={mapskey}
            strokeWidth={5}
            strokeColor="#496bba"
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
