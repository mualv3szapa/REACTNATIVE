import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { CameraModalButton } from "./CameraModalComponents/CameraModalButton/CameraModalButton";

export const CameraModal = ({ visible, setShowModalCamera, ...rest }) => {
  const cameraRef = useRef(null);
  const [cameraType, setCameraType] = useState(CameraType.front);

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
        <CameraModalButton />
      </Camera>
    </Modal>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    height: "80%",
    width: "100%",
  },
});
