import { ButtonLinkMediumCancel, LinkMedium } from "../../../LinkMedium/LinkMedium";
import { CameraModalButtonTakePhoto, CameraModalButtonView, UmCharme } from "./Style";

export const CameraModalButton = ({onPress, setShowModalCamera}) => {
    return(
        <CameraModalButtonView>
            <CameraModalButtonTakePhoto onPress={onPress}>
                <UmCharme></UmCharme>
            </CameraModalButtonTakePhoto>
{/* 
            <ButtonLinkMediumCancel setShowModalCamera={setShowModalCamera} onPress={setShowModalCamera(false)}>
                <LinkMedium>Cancelar</LinkMedium>
            </ButtonLinkMediumCancel> */}
            
        </CameraModalButtonView>
    );
}