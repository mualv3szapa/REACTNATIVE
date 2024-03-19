import { CameraModalButtonTakePhoto, CameraModalButtonView, UmCharme } from "./Style";

export const CameraModalButton = ({onPress}) => {
    return(
        <CameraModalButtonView>
            <CameraModalButtonTakePhoto onPress={onPress}>
                <UmCharme></UmCharme>
            </CameraModalButtonTakePhoto>

            
        </CameraModalButtonView>
    );
}