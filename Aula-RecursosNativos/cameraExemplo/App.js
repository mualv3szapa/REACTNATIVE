import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Video,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const cameraRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [tipoCamera, setTipoCamera] = useState(CameraType.front);

  const startRecording = async () => {
    setRecording(true);
    const { uri } = await cameraRef.recordAsync();
    setVideoUri(uri);
    setRecording(false);
  };

  const stopRecording = async () => {
    if (recording) {
      await cameraRef.stopRecording();
      setRecording(false);
    }
  };

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();

      const { status: microphoneStatus } =
        await Camera.requestMicrophonePermissionsAsync();

      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      setPhoto(photo.uri);

      setOpenModal(true);

      console.log(photo);
    }
  }

  function ClearPhoto() {
    setPhoto(null);

    setOpenModal(false);
  }

  async function SavePhoto() {
    if (photo) {
      await MediaLibrary.createAssetAsync(photo)
        .then(() => {
          Alert.alert("Sucesso", "Foto salva na galeria");
        })
        .catch((error) => {
          alert("Erro ao processar foto");
        });
    }
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        ratio="16:9"
        type={tipoCamera}
        // zoom={0.5}
        // autoFocus="on"
      >
        <View style={styles.ViewFlip}>
          <TouchableOpacity
            style={styles.BtnFlip}
            onPress={() =>
              setTipoCamera(
                tipoCamera == CameraType.front
                  ? CameraType.back
                  : CameraType.front
              )
            }
          >
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity
        style={styles.btnCapture}
        onPress={() => CapturePhoto()}
      >
        <FontAwesome name="camera" size={23} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={recording ? stopRecording : startRecording}
        style={{ padding: 10, backgroundColor: recording ? "red" : "green" }}
      >
        <Text>{recording ? "Parar" : "Gravar"}</Text>
      </TouchableOpacity>

      

      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <View style={{ margin: 10, flexDirection: "row" }}>
            {/* Botões controle */}
          </View>

          <Image
            style={{ width: "100%", height: 500, borderRadius: 15 }}
            source={{ uri: photo }}
          />

          <View style={{ margin: 15, flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => ClearPhoto()}
            >
              <FontAwesome name="trash" size={35} color="green" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => SavePhoto()}
            >
              <FontAwesome name="save" size={35} color="#121212" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    height: "80%",
    width: "100%",
  },
  ViewFlip: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  BtnFlip: {
    padding: 20,
  },
  txtFlip: {
    fontSize: 20,
    color: "#ffffff",
    marginBottom: 20,
  },
  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
