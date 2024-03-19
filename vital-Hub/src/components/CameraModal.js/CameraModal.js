import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraModalButton } from "./CameraModalComponents/CameraModalButton/CameraModalButton";

export const CameraModal = ({ visible, setShowModalCamera, ...rest }) => {
  const cameraRef = useRef(null);

  const [openModal, setOpenModal] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);

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

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
    })();
  }, []);
  return (
    <Modal
      setShowModalCamera={setShowModalCamera}
      visible={visible}
      transparent={false}
      animationType="slide"
      {...rest}
    >
      <Camera
        ref={cameraRef}
        style={styles.camera}
        ratio="16:9"
        type={cameraType}
      >
        <CameraModalButton onPress={() => CapturePhoto()} />
      </Camera>

      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 500,
              borderRadius: 15,
            }}
            source={{ uri: photo }}
          />

          <View style={{ gap: 20, margin: 15, flexDirection: "row" }}>
            <TouchableOpacity style={styles.btn} onPress={() => ClearPhoto()}>
              <Text style={{
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
                Cancelar imagem
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => ClearPhoto()}>
              <Text style={{
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
                Enviar foto
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    height: "80%",
    width: "100%",
  },
  btn: {
    backgroundColor: "#49B3BA",
    width: 125,
    height: 85,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 15,
  },
});
